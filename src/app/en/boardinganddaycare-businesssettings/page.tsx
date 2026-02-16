'use client';

import { useEffect, useState } from 'react';
import { getAuth } from 'firebase/auth';
import {
    getFirestore,
    collection,
    doc,
    getDoc,
    getDocs,
    query,
    where,
    updateDoc,
    Timestamp
} from 'firebase/firestore';

import { initializeApp } from 'firebase/app';
import { useRouter } from 'next/navigation';
import { useTranslations, useLocale } from 'next-intl';
import { setDoc } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY!,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN!,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID!,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET!,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID!,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID!,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export default function BusinessSettingsPage() {
    const t = useTranslations('boardingAndDaycareBusinessSettings');
    const _locale = useLocale(); // eslint-disable-line @typescript-eslint/no-unused-vars
    const router = useRouter();

    const [businessId, setBusinessId] = useState('');
    const [businessName, setBusinessName] = useState('');
    const [businessPhone, setBusinessPhone] = useState('');
    const [businessAddress, setBusinessAddress] = useState('');

    // --- Operating Hours (matches iOS) ---
    const [operatingHours, setOperatingHours] = useState<Record<
        string,
        { open: string; close: string }
    >>({});

    const [offersBoarding, setOffersBoarding] = useState(false);
    const [offersDaycare, setOffersDaycare] = useState(false);
    const [offersGrooming, setOffersGrooming] = useState(false);
    const [offersTraining, setOffersTraining] = useState(false);
    const [groomingServices, setGroomingServices] = useState<string[]>(['']);
    const [groomingPricingItems, setGroomingPricingItems] = useState<string[]>(['']);
    const [groomingServicePrices, setGroomingServicePrices] = useState<Record<string, string>>({});


    const [daycareAddOnServices, setDaycareAddOnServices] = useState<string[]>(['']);
    const [daycareAddOnServicePrices, setDaycareAddOnServicePrices] = useState<Record<string, string>>({});
    const [requiresAssessment, setRequiresAssessment] = useState(false);
    const [temperamentTestRequired, setTemperamentTestRequired] = useState(false);

    // --- Daycare Payment Settings (matches iOS) ---
    const [paymentsEnabled, setPaymentsEnabled] = useState(false);
    const [daycarePayAtBookingEnabled, setDaycarePayAtBookingEnabled] = useState(false);
    const [daycareInvoiceAfterAttendanceEnabled, setDaycareInvoiceAfterAttendanceEnabled] = useState(false);
    const [daycarePayAtPickupEnabled, setDaycarePayAtPickupEnabled] = useState(false);

    // --- Daycare Pricing Settings (matches iOS; stored in /settings/daycarePricing) ---
    const [daycarePrice1Pet, setDaycarePrice1Pet] = useState('');
    const [daycarePrice2Pets, setDaycarePrice2Pets] = useState('');
    const [daycarePrice3Pets, setDaycarePrice3Pets] = useState('');
    const [daycarePrice4Pets, setDaycarePrice4Pets] = useState('');
    const [daycarePrice5Pets, setDaycarePrice5Pets] = useState('');
    const [maxDaycarePricingRows, setMaxDaycarePricingRows] = useState(3); // starts 1–3, expands to 5

    const currencyTextToCents = (text: string): number => {
        // Accept "45", "45.00", "$45.00" etc. (mirrors iOS)
        const filtered = text
            .replace(/,/g, '.')
            .split('')
            .filter((ch) => '0123456789.'.includes(ch))
            .join('');

        if (!filtered) return 0;

        const parts = filtered.split('.');
        const dollarsPart = parts[0] ?? '0';
        const centsRaw = parts.length > 1 ? (parts[1] ?? '0') : '0';

        const dollars = Number.parseInt(dollarsPart, 10) || 0;

        const centsTwoDigits = (() => {
            if (!centsRaw) return 0;
            const trimmed = centsRaw.slice(0, 2);
            if (trimmed.length === 1) return (Number.parseInt(trimmed, 10) || 0) * 10;
            return Number.parseInt(trimmed, 10) || 0;
        })();

        return Math.max(0, (dollars * 100) + centsTwoDigits);
    };

    const centsToCurrencyText = (cents: number): string => {
        const safe = Math.max(0, cents || 0);
        const dollars = Math.floor(safe / 100);
        const remainder = safe % 100;
        return `${dollars}.${remainder.toString().padStart(2, '0')}`;
    };

    const daycarePricePayloadFromFields = (): Record<string, number> => {
        const payload: Record<string, number> = {};

        const add = (petCount: number, value: string) => {
            const cents = currencyTextToCents(value);
            if (cents > 0) payload[String(petCount)] = cents;
        };

        add(1, daycarePrice1Pet);
        add(2, daycarePrice2Pets);
        add(3, daycarePrice3Pets);
        add(4, daycarePrice4Pets);
        add(5, daycarePrice5Pets);

        return payload;
    };

    // NEW — Daycare Add-On Pricing Payload (parity with iOS)
    const daycareAddOnPricingPayloadFromFields = (): Record<string, any> => {
        const servicesPayload: Record<string, any> = {};

        for (const service of daycareAddOnServices) {
            const trimmed = service.trim();
            if (!trimmed) continue;

            const priceText = daycareAddOnServicePrices[trimmed] || '';
            const cents = currencyTextToCents(priceText);

            if (cents > 0) {
                servicesPayload[trimmed] = {
                    priceCents: cents,
                };
            }
        }

        return {
            services: servicesPayload,
        };
    };

    // NEW — Boarding “What To Bring” lists (matches iOS)
    const [boardingRequiredItems, setBoardingRequiredItems] = useState<string[]>(['']);
    const [boardingProhibitedItems, setBoardingProhibitedItems] = useState<string[]>(['']);

    const [waiverRequired, setWaiverRequired] = useState(false);
    const [waiverText, setWaiverText] = useState('');

    const [requireDaycareReservationApproval, setRequireDaycareReservationApproval] = useState(false);
    const [requireBoardingReservationApproval, setRequireBoardingReservationApproval] = useState(false);

    const [maxAppointmentsPerSlot, setMaxAppointmentsPerSlot] = useState(3);
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [saveSuccess, setSaveSuccess] = useState(false);

    const [dropOffTimeRequiredDaycare, setDropOffTimeRequiredDaycare] = useState(false);
    const [pickUpTimeRequiredDaycare, setPickUpTimeRequiredDaycare] = useState(false);
    const [dropOffTimeRequiredBoarding, setDropOffTimeRequiredBoarding] = useState(false);
    const [pickUpTimeRequiredBoarding, setPickUpTimeRequiredBoarding] = useState(false);

    const [dropOffTimeRequiredAssessment, setDropOffTimeRequiredAssessment] = useState(false);
    const [pickUpTimeRequiredAssessment, setPickUpTimeRequiredAssessment] = useState(false);

    const [assessmentDropOffTimes, setAssessmentDropOffTimes] = useState<Record<string, string[]>>({});
    const [assessmentPickUpTimes, setAssessmentPickUpTimes] = useState<Record<string, string[]>>({});
    const [noAssessmentDays, setNoAssessmentDays] = useState<Set<string>>(new Set());

    // ✅ NEW: After-hours pick-up settings
    const [afterHoursPickUpTimeRequired, setAfterHoursPickUpTimeRequired] = useState(false);
    const [afterHoursPickUpTimes, setAfterHoursPickUpTimes] = useState<Record<string, string[]>>({});
    const [noAfterHoursDays, setNoAfterHoursDays] = useState<Set<string>>(new Set());

    const [dropOffTimesDaycare, setDropOffTimesDaycare] = useState<Record<string, string[]>>({});
    const [pickUpTimesDaycare, setPickUpTimesDaycare] = useState<Record<string, string[]>>({});
    const [dropOffTimesBoarding, setDropOffTimesBoarding] = useState<Record<string, string[]>>({});
    const [pickUpTimesBoarding, setPickUpTimesBoarding] = useState<Record<string, string[]>>({});

    const [noDaycareDays, setNoDaycareDays] = useState<Set<string>>(new Set());
    const [noBoardingDays, setNoBoardingDays] = useState<Set<string>>(new Set());

    // Blackout Dates (matches iOS)
    const [blackoutDates, setBlackoutDates] = useState<Date[]>([]);
    const [selectedBlackoutDate, setSelectedBlackoutDate] = useState<string>(
        (() => {
            const d = new Date();
            d.setMinutes(d.getMinutes() - d.getTimezoneOffset());
            return d.toISOString().split('T')[0];
        })()
    );
    // Match iOS: prohibit overlapping boarding reservations with blackout dates
    const [prohibitBoardingOverlapWithBlackoutDates, setProhibitBoardingOverlapWithBlackoutDates] = useState(false);

    // include afterhours section in collapse map
    const [collapsedDays, setCollapsedDays] = useState<Record<string, boolean>>(() => {
        const initial: Record<string, boolean> = {};
        const sections = ['daycare-drop', 'daycare-pickup', 'boarding-drop', 'boarding-pickup', 'afterhours-pickup'];
        for (const day of ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']) {
            for (const section of sections) initial[`${day}-${section}`] = true;
        }
        return initial;
    });

    const [optionalFeatures, setOptionalFeatures] = useState({
        employeeManagement: false,
        statePaperworkLog: false,
    });

    // --- Required Vaccinations (matches iOS) ---
    const [requiredVaccinations, setRequiredVaccinations] = useState<Record<string, boolean>>({
        Rabies: false,
        Distemper: false,
        Bordetella: false,
        'Canine Influenza': false,
    });

    // --- Additional Required Tests (matches iOS) ---
    const [requiredTests, setRequiredTests] = useState<Record<string, boolean>>({
        'Negative Fecal': false,
    });

    // --- Business Bio (matches iOS) ---
    const BIO_LIMIT = 500;
    const [businessBio, setBusinessBio] = useState('');

    // Emoji detector: block anything with emoji/pictographs
    const hasEmoji = (s: string) => {
        // Fast path: if none of these code units exist, likely OK
        // but still scan scalars for emoji presentation.
        for (const ch of s) {
            const code = ch.codePointAt(0)!;
            // Common emoji ranges (not exhaustive but practical)
            if (
                (code >= 0x1F300 && code <= 0x1FAFF) || // Misc symbols & pictographs / Emoji
                (code >= 0x2600 && code <= 0x27BF) ||  // Dingbats, misc symbols
                (code >= 0x1F1E6 && code <= 0x1F1FF)   // Flags
            ) return true;
        }
        // Fallback: rely on Unicode property via regex if supported
        try {
            return /\p{Extended_Pictographic}/u.test(s);
        } catch {
            return false;
        }
    };

    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    // 5:00 AM → 24:00 in 15-min increments (matches iOS)
    const timeOptions = Array.from({ length: (24 - 5) * 4 + 1 }, (_, i) => {
        const minutes = i * 15 + 5 * 60;
        const hour = Math.floor(minutes / 60);
        const minute = minutes % 60;
        const period = hour < 12 ? 'AM' : 'PM';
        const formattedHour = hour % 12 === 0 ? 12 : hour % 12;
        return `${formattedHour}:${minute.toString().padStart(2, '0')} ${period}`;
    });

    // ───────── Load business (adds after-hours fields) ─────────
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (!user) return;

            const loadBusiness = async () => {
                const q = query(collection(db, 'businesses'), where('ownerId', '==', user.uid));
                const snapshot = await getDocs(q);
                const docSnap = snapshot.docs[0];
                if (!docSnap) return;

                const data = docSnap.data();
                setBusinessId(docSnap.id);
                setBusinessName(data.businessName || '');
                setBusinessPhone(data.businessPhone || '');
                const addr = data.businessAddress || {};
                setBusinessAddress(`${addr.street || ''}, ${addr.city || ''}, ${addr.state || ''} ${addr.zipCode || ''}`);
                setBusinessBio(data.businessBio || '');

                setOperatingHours(data.operatingHours || {});

                setOffersBoarding(data.offersBoarding || false);
                setOffersDaycare(data.offersDaycare || false);
                setOffersGrooming(data.offersGrooming || false);
                setOffersTraining(data.offersTraining || false);
                setGroomingServices(data.groomingServices || ['']);
                // --- Load Grooming Pricing (parity with iOS) ---
                try {
                    const groomingRef = doc(db, 'businesses', docSnap.id, 'settings', 'groomingPricing');
                    const groomingSnap = await getDoc(groomingRef);

                    if (groomingSnap.exists()) {
                        const groomingData = groomingSnap.data();
                        const services = groomingData.grooming?.services || {};

                        // ✅ Recreate pricing rows
                        const itemNames = Object.keys(services).sort();
                        setGroomingPricingItems(itemNames.length > 0 ? itemNames : ['']);

                        const priceMap: Record<string, string> = {};

                        for (const name of itemNames) {
                            const cents = services[name]?.priceCents;
                            if (typeof cents === 'number') {
                                priceMap[name] = centsToCurrencyText(cents);
                            }
                        }

                        setGroomingServicePrices(priceMap);
                    }
                } catch {
                    // silent fail
                }

                setRequiresAssessment(data.requiresAssessment || false);

                // --- Load Daycare Payment Settings (matches iOS) ---
                const paymentSettings = data.paymentSettings || {};
                setPaymentsEnabled(!!paymentSettings.enabled);

                const daycarePayments = paymentSettings.daycare || {};
                setDaycarePayAtBookingEnabled(!!daycarePayments.payAtBooking);
                setDaycareInvoiceAfterAttendanceEnabled(!!daycarePayments.invoiceAfterAttendance);
                setDaycarePayAtPickupEnabled(!!daycarePayments.payAtPickup);

                // --- Load Daycare Pricing (matches iOS; /businesses/{businessId}/settings/daycarePricing) ---
                try {
                    const pricingRef = doc(db, 'businesses', docSnap.id, 'settings', 'daycarePricing');
                    const pricingSnap = await getDoc(pricingRef);

                    if (pricingSnap.exists()) {
                        const pricingData = pricingSnap.data() as Record<string, number>;

                        if (typeof pricingData['1'] === 'number') setDaycarePrice1Pet(centsToCurrencyText(pricingData['1']));
                        if (typeof pricingData['2'] === 'number') setDaycarePrice2Pets(centsToCurrencyText(pricingData['2']));
                        if (typeof pricingData['3'] === 'number') setDaycarePrice3Pets(centsToCurrencyText(pricingData['3']));

                        if (typeof pricingData['4'] === 'number') {
                            setDaycarePrice4Pets(centsToCurrencyText(pricingData['4']));
                            setMaxDaycarePricingRows((prev) => Math.max(prev, 4));
                        }

                        if (typeof pricingData['5'] === 'number') {
                            setDaycarePrice5Pets(centsToCurrencyText(pricingData['5']));
                            setMaxDaycarePricingRows((prev) => Math.max(prev, 5));
                        }
                    }
                } catch {
                    // Silent fail (matches iOS behavior: defaults are safe)
                }

                // --- Load Daycare Add-On Pricing (parity with iOS) ---
                try {
                    const addOnRef = doc(db, 'businesses', docSnap.id, 'settings', 'daycareAddOnPricing');
                    const addOnSnap = await getDoc(addOnRef);

                    if (addOnSnap.exists()) {
                        const addOnData = addOnSnap.data();
                        const services = addOnData.services || {};

                        // 🔥 CRITICAL — Repopulate service array (same fix as iOS)
                        const serviceNames = Object.keys(services).sort();
                        setDaycareAddOnServices(serviceNames.length > 0 ? serviceNames : ['']);

                        const priceMap: Record<string, string> = {};

                        for (const name of serviceNames) {
                            const cents = services[name]?.priceCents;
                            if (typeof cents === 'number') {
                                priceMap[name] = centsToCurrencyText(cents);
                            }
                        }

                        setDaycareAddOnServicePrices(priceMap);
                    }
                } catch {
                    // silent fail (matches iOS behavior)
                }

                // NEW — What To Bring (Boarding only)
                setBoardingRequiredItems(data.boardingRequiredItems || ['']);
                setBoardingProhibitedItems(data.boardingProhibitedItems || ['']);

                setWaiverRequired(data.waiverRequired || false);
                setWaiverText(data.waiverText || '');

                setDropOffTimeRequiredDaycare(data.dropOffTimeRequiredDaycare || false);
                setPickUpTimeRequiredDaycare(data.pickUpTimeRequiredDaycare || false);
                setDropOffTimeRequiredBoarding(data.dropOffTimeRequiredBoarding || false);
                setPickUpTimeRequiredBoarding(data.pickUpTimeRequiredBoarding || false);

                setDropOffTimeRequiredAssessment(data.dropOffTimeRequiredAssessment || false);
                setPickUpTimeRequiredAssessment(data.pickUpTimeRequiredAssessment || false);

                setAssessmentDropOffTimes(data.assessmentDropOffTimes || {});
                setAssessmentPickUpTimes(data.assessmentPickUpTimes || {});
                setNoAssessmentDays(new Set<string>(data.noAssessmentDays || []));

                setRequireDaycareReservationApproval(
                    data.requireDaycareReservationApproval || false
                );

                setRequireBoardingReservationApproval(
                    data.requireBoardingReservationApproval || false
                );

                setRequiredVaccinations(data.requiredVaccinations || {
                    Rabies: false,
                    Distemper: false,
                    Bordetella: false,
                    'Canine Influenza': false,
                });

                setRequiredTests(
                    data.requiredTests || {
                        'Negative Fecal': false,
                    }
                );

                setTemperamentTestRequired(data.temperamentTestRequired || false);

                // ✅ NEW: After-hours fields
                setAfterHoursPickUpTimeRequired(data.afterHoursPickUpTimeRequired || false);
                setAfterHoursPickUpTimes(data.afterHoursPickUpTimes || {});
                setNoAfterHoursDays(new Set<string>(data.noAfterHoursDays || []));

                const limits = data.bookingLimits || {};
                setMaxAppointmentsPerSlot(limits.maxPerTimeSlot || 3);

                setDropOffTimesDaycare(data.dropOffTimesDaycare || {});
                setPickUpTimesDaycare(data.pickUpTimesDaycare || {});
                setDropOffTimesBoarding(data.dropOffTimesBoarding || {});
                setPickUpTimesBoarding(data.pickUpTimesBoarding || {});
                setNoDaycareDays(new Set(data.noDaycareDays || []));
                setNoBoardingDays(new Set(data.noBoardingDays || []));

                // Blackout Dates
                if (Array.isArray(data.blackoutDates)) {
                    const parsed = data.blackoutDates
                        .map((ts: Timestamp) => new Date(ts.seconds * 1000))
                        .sort((a, b) => a.getTime() - b.getTime());
                    setBlackoutDates(parsed);
                }

                // NEW: Do NOT allow boarding reservations to overlap blackout dates
                setProhibitBoardingOverlapWithBlackoutDates(
                    data.prohibitBoardingOverlapWithBlackoutDates || false
                );

                const features = data.features || { enableEmployeeManagement: false, enableStatePaperwork: false };
                setOptionalFeatures({
                    employeeManagement: !!features.enableEmployeeManagement,
                    statePaperworkLog: !!features.enableStatePaperwork,
                });

                setLoading(false);
            };

            loadBusiness();
        });

        return () => unsubscribe();
    }, []);

    // ───────── Save (writes after-hours + fixes key to 'features') ─────────
    const updateSetting = async () => {
        if (!businessId) return;
        setSaving(true);

        const trimmedBio = businessBio.trim();
        if (trimmedBio.length > BIO_LIMIT) {
            alert(t('business_bio_too_long'));
            setSaving(false);
            return;
        }
        if (hasEmoji(trimmedBio)) {
            alert(t('business_bio_emoji_blocked'));
            setSaving(false);
            return;
        }

        await updateDoc(doc(db, 'businesses', businessId), {
            offersBoarding,
            offersDaycare,
            offersGrooming,
            offersTraining,

            requiresAssessment,
            temperamentTestRequired,

            paymentSettings: {
                enabled: paymentsEnabled,
                daycare: {
                    payAtBooking: daycarePayAtBookingEnabled,
                    invoiceAfterAttendance: daycareInvoiceAfterAttendanceEnabled,
                    payAtPickup: daycarePayAtPickupEnabled,
                },
            },

            requireDaycareReservationApproval,
            requireBoardingReservationApproval,

            groomingServices: groomingServices.filter((s) => s.trim() !== ''),

            boardingRequiredItems: boardingRequiredItems.filter((s) => s.trim() !== ''),
            boardingProhibitedItems: boardingProhibitedItems.filter((s) => s.trim() !== ''),

            businessBio: trimmedBio,
            waiverRequired,
            waiverText,

            requiredVaccinations,
            requiredTests,

            operatingHours,

            dropOffTimeRequiredDaycare,
            pickUpTimeRequiredDaycare,
            dropOffTimeRequiredBoarding,
            pickUpTimeRequiredBoarding,

            dropOffTimeRequiredAssessment,
            pickUpTimeRequiredAssessment,

            assessmentDropOffTimes,
            assessmentPickUpTimes,
            noAssessmentDays: Array.from(noAssessmentDays),

            afterHoursPickUpTimeRequired,
            afterHoursPickUpTimes,
            noAfterHoursDays: Array.from(noAfterHoursDays),

            dropOffTimesDaycare,
            pickUpTimesDaycare,
            dropOffTimesBoarding,
            pickUpTimesBoarding,

            noDaycareDays: Array.from(noDaycareDays),
            noBoardingDays: Array.from(noBoardingDays),

            blackoutDates: blackoutDates.map((d) =>
                Timestamp.fromDate(new Date(d.getFullYear(), d.getMonth(), d.getDate()))
            ),

            prohibitBoardingOverlapWithBlackoutDates,

            bookingLimits: { maxPerTimeSlot: maxAppointmentsPerSlot },

            features: {
                enableEmployeeManagement: optionalFeatures.employeeManagement,
                enableStatePaperwork: optionalFeatures.statePaperworkLog,
            },
        });

        // --- NEW: Save Daycare Pricing separately (matches iOS) ---
        if (offersDaycare) {
            const pricingPayload = daycarePricePayloadFromFields();
            const pricingRef = doc(db, 'businesses', businessId, 'settings', 'daycarePricing');

            // Match iOS behavior: only write if at least one price exists
            if (Object.keys(pricingPayload).length > 0) {
                await setDoc(pricingRef, pricingPayload, { merge: false });
            }
        }

        // --- Save Daycare Add-On Pricing (parity with iOS) ---
        if (offersDaycare) {
            const addOnPayload = daycareAddOnPricingPayloadFromFields();
            const addOnRef = doc(db, 'businesses', businessId, 'settings', 'daycareAddOnPricing');

            if (Object.keys(addOnPayload.services || {}).length > 0) {
                await setDoc(addOnRef, addOnPayload, { merge: false });
            }
        }

        // --- Save Grooming Pricing (parity with iOS) ---
        if (offersGrooming) {
            const servicesPayload: Record<string, any> = {};

            for (const item of groomingPricingItems) {
                const trimmed = item.trim();
                if (!trimmed) continue;

                const priceText = groomingServicePrices[trimmed] || '';
                const cents = currencyTextToCents(priceText);

                if (cents > 0) {
                    servicesPayload[trimmed] = {
                        priceCents: cents,
                    };
                }
            }

            if (Object.keys(servicesPayload).length > 0) {
                const groomingRef = doc(db, 'businesses', businessId, 'settings', 'groomingPricing');

                await setDoc(
                    groomingRef,
                    {
                        grooming: {
                            services: servicesPayload,
                        },
                    },
                    { merge: false }
                );
            }
        }


        // keep waiver subdoc behavior simple/consistent
        const waiverRef = doc(db, 'businesses', businessId, 'settings', 'clientWaiver');

        await setDoc(
            waiverRef,
            {
                waiverText,
                waiverVersion: 1,
                lastUpdated: new Date(),
            },
            { merge: true }
        );

        setSaving(false);

        // ⭐ NEW — show success banner for 3 seconds
        setSaveSuccess(true);
        setTimeout(() => {
            setSaveSuccess(false);
        }, 3000);
    };

    // ───────── Helpers ─────────
    const handleGroomingChange = (pos: number, value: string) => {
        const updated = [...groomingServices];
        updated[pos] = value.slice(0, 50);
        setGroomingServices(updated);
    };

    const addGroomingService = () => {
        if (groomingServices.length < 10) setGroomingServices((prev) => [...prev, '']);
    };
    const removeGroomingService = (pos: number) => setGroomingServices((prev) => prev.filter((_, i) => i !== pos));

    const toggleDayTime = (
        type: 'dropOff' | 'pickUp',
        service: 'daycare' | 'boarding',
        day: string,
        time: string
    ) => {
        const map: Record<
            'daycare' | 'boarding',
            Record<'dropOff' | 'pickUp', [Record<string, string[]>, React.Dispatch<React.SetStateAction<Record<string, string[]>>>]>
        > = {
            daycare: { dropOff: [dropOffTimesDaycare, setDropOffTimesDaycare], pickUp: [pickUpTimesDaycare, setPickUpTimesDaycare] },
            boarding: { dropOff: [dropOffTimesBoarding, setDropOffTimesBoarding], pickUp: [pickUpTimesBoarding, setPickUpTimesBoarding] },
        };
        const [times, setTimes] = map[service][type];
        const current = times[day] || [];
        const updated = current.includes(time) ? current.filter((t) => t !== time) : [...current, time];
        setTimes({ ...times, [day]: updated });
    };

    // ✅ NEW: toggle for after-hours per-day time
    const toggleAfterHoursTime = (day: string, time: string) => {
        const current = afterHoursPickUpTimes[day] || [];
        const updated = current.includes(time) ? current.filter((t) => t !== time) : [...current, time];
        setAfterHoursPickUpTimes({ ...afterHoursPickUpTimes, [day]: updated });
    };

    return (
        <div className="w-full max-w-md mx-auto px-2 sm:px-4 py-8 text-[color:var(--color-foreground)]">
            {/* Back Button */}
            <button onClick={() => router.push('/boardinganddaycaredashboard')} className="text-sm text-blue-600 underline mb-4">
                ← {t('back_to_dashboard')}
            </button>

            {/* Page Title */}
            <h1 className="text-3xl font-bold text-[color:var(--color-accent)] mb-6 text-center">
                {t('business_settings_title')}
            </h1>

            {loading ? (
                <p className="text-center text-sm">{t('loading')}</p>
            ) : (
                <>
                    {/* General (locked) fields */}
                    <div className="space-y-3 mb-6">
                        <div>
                            <label className="font-semibold text-sm">{t('business_name_field')}</label>
                            <input value={businessName} disabled className="w-full border px-3 py-2 rounded bg-gray-100 text-sm" />
                        </div>
                        <div>
                            <label className="font-semibold text-sm">{t('business_phone_field')}</label>
                            <input value={businessPhone} disabled className="w-full border px-3 py-2 rounded bg-gray-100 text-sm" />
                        </div>
                        <div>
                            <label className="font-semibold text-sm">{t('business_address_field')}</label>
                            <input value={businessAddress} disabled className="w-full border px-3 py-2 rounded bg-gray-100 text-sm" />
                        </div>
                        {/* --- Business Bio --- */}
                        <div className="mt-4">
                            <h3 className="font-semibold text-sm text-[color:var(--color-accent)]">{t('business_bio_header')}</h3>
                            <p className="text-xs text-gray-500 mb-1">
                                {t('business_bio_subtitle')}
                            </p>

                            <div className="relative">
                                {businessBio.trim() === '' && (
                                    <span className="absolute top-2 left-3 text-gray-400 pointer-events-none text-sm">
                                        {t('business_bio_placeholder')}
                                    </span>
                                )}
                                <textarea
                                    value={businessBio}
                                    onChange={(e) => setBusinessBio(e.target.value)}
                                    className="w-full h-32 border px-3 py-2 rounded resize-none text-sm"
                                    aria-label={t('business_bio_header')}
                                />
                            </div>

                            {/* Counter + validation */}
                            <div className="mt-1 flex items-center justify-between">
                                <span
                                    className={`text-xs ${businessBio.length > BIO_LIMIT ? 'text-red-600' : 'text-gray-500'}`}
                                >
                                    {t('business_bio_counter', { used: businessBio.length, limit: BIO_LIMIT })}
                                </span>
                            </div>
                            {hasEmoji(businessBio) && (
                                <p className="text-xs text-red-600 mt-1">{t('business_bio_no_emoji')}</p>
                            )}
                        </div>
                    </div>

                    {/* Operating Hours */}
                    <div className="mt-10">
                        <h2 className="text-xl font-semibold text-[color:var(--color-accent)] text-center mb-4">
                            {t('operating_hours_header')}
                        </h2>

                        {daysOfWeek.map((day) => {
                            const open = operatingHours[day]?.open || '7:00 AM';
                            const close = operatingHours[day]?.close || '6:00 PM';

                            return (
                                <div key={`operating-hours-${day}`} className="flex gap-4">
                                    {/* Open */}
                                    <div className="flex flex-col">
                                        <label className="text-xs text-gray-500 mb-1">
                                            {t('open_label')}
                                        </label>
                                        <select
                                            value={open}
                                            onChange={(e) =>
                                                setOperatingHours((prev) => ({
                                                    ...prev,
                                                    [day]: {
                                                        open: e.target.value,
                                                        close,
                                                    },
                                                }))
                                            }
                                            className="border px-2 py-1 rounded text-sm"
                                        >
                                            {timeOptions.map((time, idx) => (
                                                <option key={`${day}-open-${time}-${idx}`} value={time}>
                                                    {time}
                                                </option>
                                            ))}
                                        </select>
                                    </div>

                                    {/* Close */}
                                    <div className="flex flex-col">
                                        <label className="text-xs text-gray-500 mb-1">
                                            {t('close_label')}
                                        </label>
                                        <select
                                            value={close}
                                            onChange={(e) =>
                                                setOperatingHours((prev) => ({
                                                    ...prev,
                                                    [day]: {
                                                        open,
                                                        close: e.target.value,
                                                    },
                                                }))
                                            }
                                            className="border px-2 py-1 rounded text-sm"
                                        >
                                            {timeOptions.map((time, idx) => (
                                                <option key={`${day}-close-${time}-${idx}`} value={time}>
                                                    {time}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Blackout Dates */}
                    <div className="mt-10 space-y-4">
                        <h2 className="text-xl font-semibold text-[color:var(--color-accent)] text-center">
                            Blackout Dates
                        </h2>

                        {/* Date Picker */}
                        <div>
                            <label className="font-semibold text-sm block mb-1">Select a Date to Blackout</label>
                            <input
                                type="date"
                                value={selectedBlackoutDate}
                                onChange={(e) => setSelectedBlackoutDate(e.target.value)}
                                className="w-full border px-3 py-2 rounded text-sm"
                            />
                        </div>

                        {/* Add Button */}
                        <button
                            onClick={() => {
                                const [year, month, day] = selectedBlackoutDate.split('-').map(Number);
                                const startOfDay = new Date(year, month - 1, day);

                                // Prevent duplicates
                                if (!blackoutDates.some((d) => d.getTime() === startOfDay.getTime())) {
                                    const updated = [...blackoutDates, startOfDay].sort(
                                        (a, b) => a.getTime() - b.getTime()
                                    );
                                    setBlackoutDates(updated);
                                }
                            }}
                            className="text-sm text-green-700 underline"
                        >
                            Add Blackout Date
                        </button>

                        {/* Blackout Dates List */}
                        {blackoutDates.length === 0 ? (
                            <p className="text-sm text-gray-500 text-center">No blackout dates set.</p>
                        ) : (
                            <ul className="space-y-2">
                                {blackoutDates.map((d, idx) => (
                                    <li
                                        key={`blackout-${idx}`}
                                        className="flex justify-between items-center border px-3 py-2 rounded text-sm"
                                    >
                                        <span>{d.toLocaleDateString()}</span>
                                        <button
                                            onClick={() => {
                                                const updated = blackoutDates.filter((_, i) => i !== idx);
                                                setBlackoutDates(updated);
                                            }}
                                            className="text-red-600 font-bold text-lg"
                                        >
                                            &times;
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        )}

                        {/* Prevent overlapping boarding reservations with blackout dates */}
                        <div className="mt-4">
                            <Toggle
                                label="Do NOT allow boarding reservations to overlap blackout dates"
                                checked={prohibitBoardingOverlapWithBlackoutDates}
                                onChange={setProhibitBoardingOverlapWithBlackoutDates}
                            />
                        </div>
                    </div>

                    {/* Service offerings */}
                    <div className="space-y-4 mb-6">
                        <h2 className="text-xl font-semibold text-[color:var(--color-accent)] text-center">
                            {t('service_offerings_title')}
                        </h2>

                        <Toggle label={t('boarding_toggle')} checked={offersBoarding} onChange={setOffersBoarding} />
                        <Toggle label={t('daycare_toggle')} checked={offersDaycare} onChange={setOffersDaycare} />
                        <Toggle label={t('grooming_toggle')} checked={offersGrooming} onChange={setOffersGrooming} />
                        <Toggle label={t('training_toggle')} checked={offersTraining} onChange={setOffersTraining} />
                        <Toggle
                            label={t('requires_assessment_toggle')}
                            checked={requiresAssessment}
                            onChange={setRequiresAssessment}
                        />

                        {offersGrooming && (
                            <div className="mt-4 space-y-2">
                                <label className="font-semibold text-sm">{t('grooming_services_label')}</label>
                                {groomingServices.map((service, i) => (
                                    <div key={`svc-${i}`} className="flex gap-2">
                                        <input
                                            value={service}
                                            onChange={(e) => handleGroomingChange(i, e.target.value)}
                                            className="flex-1 border px-3 py-2 rounded text-sm"
                                        />
                                        {groomingServices.length > 1 && (
                                            <button
                                                onClick={() => removeGroomingService(i)}
                                                className="text-red-600 font-bold text-lg"
                                            >
                                                &times;
                                            </button>
                                        )}
                                    </div>
                                ))}

                                {groomingServices.length < 10 && (
                                    <button onClick={addGroomingService} className="text-sm text-green-700 underline mt-1">
                                        {t('add_another_service_button')}
                                    </button>
                                )}
                            </div>
                        )}
                    </div>

                    {offersDaycare && (
                        <div className="mt-10 space-y-3">
                            <h2 className="text-xl font-semibold text-[color:var(--color-accent)] text-center">
                                Payments
                            </h2>

                            <Toggle
                                label="Accept payments with Petunia (Stripe)"
                                checked={paymentsEnabled}
                                onChange={(val) => {
                                    setPaymentsEnabled(val);
                                    if (!val) {
                                        setDaycarePayAtBookingEnabled(false);
                                        setDaycareInvoiceAfterAttendanceEnabled(false);
                                        setDaycarePayAtPickupEnabled(false);
                                    }
                                }}
                            />

                            <p className="text-xs text-gray-500 text-center">
                                Payments are optional. You may accept payment at booking, after attendance, or at pickup.
                            </p>

                            {paymentsEnabled && (
                                <div className="mt-4 space-y-2">
                                    <h3 className="text-sm font-semibold text-[color:var(--color-accent)] text-center">
                                        Daycare Payment Settings
                                    </h3>

                                    <Toggle
                                        label="Pay at booking (online card)"
                                        checked={daycarePayAtBookingEnabled}
                                        onChange={setDaycarePayAtBookingEnabled}
                                    />

                                    {daycarePayAtBookingEnabled && (
                                        <p className="text-xs text-gray-500 ml-8">
                                            Clients pay in full when booking daycare. Deposits are not supported.
                                        </p>
                                    )}

                                    <Toggle
                                        label="Invoice after attendance"
                                        checked={daycareInvoiceAfterAttendanceEnabled}
                                        onChange={setDaycareInvoiceAfterAttendanceEnabled}
                                    />

                                    {daycareInvoiceAfterAttendanceEnabled && (
                                        <p className="text-xs text-gray-500 ml-8">
                                            Invoices are generated after daycare attendance and sent to the client.
                                        </p>
                                    )}

                                    <Toggle
                                        label="Pay at pickup / deferred payment"
                                        checked={daycarePayAtPickupEnabled}
                                        onChange={setDaycarePayAtPickupEnabled}
                                    />

                                    {daycarePayAtPickupEnabled && (
                                        <p className="text-xs text-gray-500 ml-8">
                                            Payment is collected after daycare, either through Petunia or externally.
                                        </p>
                                    )}

                                    {!daycarePayAtBookingEnabled &&
                                        !daycareInvoiceAfterAttendanceEnabled &&
                                        !daycarePayAtPickupEnabled && (
                                            <p className="text-xs text-red-600 text-center mt-2">
                                                At least one payment method must be enabled to accept payments.
                                            </p>
                                        )}
                                </div>
                            )}
                        </div>
                    )}

                    {offersDaycare && (
                        <div className="mt-10 space-y-3">
                            <h2 className="text-xl font-semibold text-[color:var(--color-accent)] text-center">
                                Daycare Pricing
                            </h2>

                            <p className="text-xs text-gray-500 text-center">
                                Enter daycare pricing by number of pets. Maximum of 5 pets.
                            </p>

                            <input
                                value={daycarePrice1Pet}
                                onChange={(e) => setDaycarePrice1Pet(e.target.value)}
                                placeholder="Daycare price (1 pet)"
                                className="w-full border px-3 py-2 rounded text-sm"
                                inputMode="decimal"
                            />

                            <input
                                value={daycarePrice2Pets}
                                onChange={(e) => setDaycarePrice2Pets(e.target.value)}
                                placeholder="Daycare price (2 pets)"
                                className="w-full border px-3 py-2 rounded text-sm"
                                inputMode="decimal"
                            />

                            <input
                                value={daycarePrice3Pets}
                                onChange={(e) => setDaycarePrice3Pets(e.target.value)}
                                placeholder="Daycare price (3 pets)"
                                className="w-full border px-3 py-2 rounded text-sm"
                                inputMode="decimal"
                            />

                            {maxDaycarePricingRows >= 4 && (
                                <input
                                    value={daycarePrice4Pets}
                                    onChange={(e) => setDaycarePrice4Pets(e.target.value)}
                                    placeholder="Daycare price (4 pets)"
                                    className="w-full border px-3 py-2 rounded text-sm"
                                    inputMode="decimal"
                                />
                            )}

                            {maxDaycarePricingRows >= 5 && (
                                <input
                                    value={daycarePrice5Pets}
                                    onChange={(e) => setDaycarePrice5Pets(e.target.value)}
                                    placeholder="Daycare price (5 pets)"
                                    className="w-full border px-3 py-2 rounded text-sm"
                                    inputMode="decimal"
                                />
                            )}

                            {maxDaycarePricingRows < 5 && (
                                <button
                                    onClick={() => setMaxDaycarePricingRows((prev) => prev + 1)}
                                    className="text-sm text-green-700 underline"
                                >
                                    Add pricing for {maxDaycarePricingRows + 1} pets
                                </button>
                            )}
                        </div>
                    )}

                    {offersGrooming && (
                        <div className="mt-10 space-y-3">
                            <h2 className="text-xl font-semibold text-[color:var(--color-accent)] text-center">
                                Grooming Pricing
                            </h2>

                            <p className="text-xs text-gray-500 text-center">
                                Add grooming menu items and pricing.
                            </p>

                            {groomingPricingItems.map((item, index) => {
                                const trimmed = item.trim();

                                return (
                                    <div key={`gpi-${index}`} className="space-y-2">
                                        <div className="flex gap-2">
                                            <input
                                                value={item}
                                                placeholder={`Menu Item ${index + 1}`}
                                                onChange={(e) => {
                                                    const updated = [...groomingPricingItems];
                                                    updated[index] = e.target.value.slice(0, 80);
                                                    setGroomingPricingItems(updated);
                                                }}
                                                className="flex-1 border px-3 py-2 rounded text-sm"
                                            />

                                            {groomingPricingItems.length > 1 && (
                                                <button
                                                    onClick={() => {
                                                        const removed = groomingPricingItems[index].trim();
                                                        setGroomingPricingItems(prev => prev.filter((_, i) => i !== index));
                                                        if (removed) {
                                                            setGroomingServicePrices(prev => {
                                                                const copy = { ...prev };
                                                                delete copy[removed];
                                                                return copy;
                                                            });
                                                        }
                                                    }}
                                                    className="text-red-600 font-bold text-lg"
                                                >
                                                    &times;
                                                </button>
                                            )}
                                        </div>

                                        {trimmed !== '' && (
                                            <input
                                                value={groomingServicePrices[trimmed] || ''}
                                                placeholder={`Price for ${trimmed}`}
                                                inputMode="decimal"
                                                onChange={(e) =>
                                                    setGroomingServicePrices(prev => ({
                                                        ...prev,
                                                        [trimmed]: e.target.value,
                                                    }))
                                                }
                                                className="w-full border px-3 py-2 rounded text-sm"
                                            />
                                        )}
                                    </div>
                                );
                            })}

                            {groomingPricingItems.length < 25 && (
                                <button
                                    onClick={() => setGroomingPricingItems(prev => [...prev, ''])}
                                    className="text-sm text-green-700 underline"
                                >
                                    Add Another Menu Item
                                </button>
                            )}
                        </div>
                    )}

                    {offersDaycare && (
                        <div className="mt-10 space-y-3">
                            <h2 className="text-xl font-semibold text-[color:var(--color-accent)] text-center">
                                Additional Daycare Add-On Services
                            </h2>

                            <p className="text-xs text-gray-500 text-center">
                                Optional services that can be added to daycare bookings.
                            </p>

                            {daycareAddOnServices.map((service, index) => {
                                const trimmed = service.trim();

                                return (
                                    <div key={`addon-${index}`} className="space-y-2">
                                        <div className="flex gap-2">
                                            <input
                                                value={service}
                                                placeholder={`Add-On Service ${index + 1}`}
                                                onChange={(e) => {
                                                    const updated = [...daycareAddOnServices];
                                                    updated[index] = e.target.value.slice(0, 50);
                                                    setDaycareAddOnServices(updated);
                                                }}
                                                className="flex-1 border px-3 py-2 rounded text-sm"
                                            />

                                            {daycareAddOnServices.length > 1 && (
                                                <button
                                                    onClick={() =>
                                                        setDaycareAddOnServices(prev =>
                                                            prev.filter((_, i) => i !== index)
                                                        )
                                                    }
                                                    className="text-red-600 font-bold text-lg"
                                                >
                                                    &times;
                                                </button>
                                            )}
                                        </div>

                                        {trimmed !== '' && (
                                            <input
                                                value={daycareAddOnServicePrices[trimmed] || ''}
                                                placeholder={`Price for ${trimmed}`}
                                                inputMode="decimal"
                                                onChange={(e) =>
                                                    setDaycareAddOnServicePrices(prev => ({
                                                        ...prev,
                                                        [trimmed]: e.target.value,
                                                    }))
                                                }
                                                className="w-full border px-3 py-2 rounded text-sm"
                                            />
                                        )}
                                    </div>
                                );
                            })}

                            {daycareAddOnServices.length < 10 && (
                                <button
                                    onClick={() =>
                                        setDaycareAddOnServices(prev => [...prev, ''])
                                    }
                                    className="text-sm text-green-700 underline"
                                >
                                    Add Another Add-On Service
                                </button>
                            )}
                        </div>
                    )}

                    {/* What To Bring With You (Boarding only) */}
                    {offersBoarding && (
                        <div className="mt-10">

                            <h2 className="text-xl font-semibold text-[color:var(--color-accent)] text-center mb-4">
                                {t('what_to_bring_header')}
                            </h2>

                            {/* Required Items */}
                            <div className="mb-6">
                                <label className="font-semibold text-sm block mb-1">
                                    {t('boarding_required_items_label')}
                                </label>

                                {boardingRequiredItems.map((item, idx) => (
                                    <div key={`req-${idx}`} className="mb-3">

                                        <div className="relative">
                                            {item.trim() === '' && (
                                                <span className="absolute top-2 left-3 text-gray-400 pointer-events-none text-sm">
                                                    {t('boarding_required_item_placeholder', { num: idx + 1 })}
                                                </span>
                                            )}

                                            <textarea
                                                value={item}
                                                onChange={(e) => {
                                                    const updated = [...boardingRequiredItems];
                                                    updated[idx] = e.target.value.slice(0, 150);
                                                    setBoardingRequiredItems(updated);
                                                }}
                                                className="w-full min-h-[80px] border px-3 py-2 rounded text-sm resize-none"
                                            />
                                        </div>

                                        {/* Character Counter */}
                                        <div className="flex justify-end text-xs mt-1">
                                            <span className={`${item.length >= 150 ? 'text-red-600' : 'text-gray-500'}`}>
                                                {item.length} / 150
                                            </span>
                                        </div>

                                        {/* Delete button */}
                                        {boardingRequiredItems.length > 1 && (
                                            <button
                                                onClick={() =>
                                                    setBoardingRequiredItems(prev => prev.filter((_, i) => i !== idx))
                                                }
                                                className="text-red-600 font-bold text-lg mt-1"
                                            >
                                                &times;
                                            </button>
                                        )}
                                    </div>
                                ))}

                                <button
                                    onClick={() => setBoardingRequiredItems(prev => [...prev, ''])}
                                    className="text-sm text-blue-600 underline mt-1"
                                >
                                    {t('add_boarding_required_item_button')}
                                </button>
                            </div>

                            {/* Prohibited Items */}
                            <div>
                                <label className="font-semibold text-sm block mb-1">
                                    {t('boarding_prohibited_items_label')}
                                </label>

                                {boardingProhibitedItems.map((item, idx) => (
                                    <div key={`pro-${idx}`} className="mb-3">

                                        <div className="relative">
                                            {item.trim() === '' && (
                                                <span className="absolute top-2 left-3 text-gray-400 pointer-events-none text-sm">
                                                    {t('boarding_prohibited_item_placeholder', { num: idx + 1 })}
                                                </span>
                                            )}

                                            <textarea
                                                value={item}
                                                onChange={(e) => {
                                                    const updated = [...boardingProhibitedItems];
                                                    updated[idx] = e.target.value.slice(0, 150);
                                                    setBoardingProhibitedItems(updated);
                                                }}
                                                className="w-full min-h-[80px] border px-3 py-2 rounded text-sm resize-none"
                                            />
                                        </div>

                                        {/* Character Counter */}
                                        <div className="flex justify-end text-xs mt-1">
                                            <span className={`${item.length >= 150 ? 'text-red-600' : 'text-gray-500'}`}>
                                                {item.length} / 150
                                            </span>
                                        </div>

                                        {/* Delete button */}
                                        {boardingProhibitedItems.length > 1 && (
                                            <button
                                                onClick={() =>
                                                    setBoardingProhibitedItems(prev => prev.filter((_, i) => i !== idx))
                                                }
                                                className="text-red-600 font-bold text-lg mt-1"
                                            >
                                                &times;
                                            </button>
                                        )}
                                    </div>
                                ))}

                                <button
                                    onClick={() => setBoardingProhibitedItems(prev => [...prev, ''])}
                                    className="text-sm text-blue-600 underline mt-1"
                                >
                                    {t('add_boarding_prohibited_item_button')}
                                </button>
                            </div>
                        </div>
                    )}

                    {/* Required Vaccinations */}
                    <div className="mt-10">
                        <h2 className="text-xl font-semibold text-[color:var(--color-accent)] text-center mb-4">
                            {t('required_vaccinations_header')}
                        </h2>

                        {Object.keys(requiredVaccinations).sort().map((vaccine) => (
                            <Toggle
                                key={`vac-${vaccine}`}
                                label={vaccine}
                                checked={requiredVaccinations[vaccine]}
                                onChange={(val) =>
                                    setRequiredVaccinations((prev) => ({ ...prev, [vaccine]: val }))
                                }
                            />
                        ))}
                    </div>

                    {/* Additional Required Tests */}
                    <div className="mt-10">
                        <h2 className="text-xl font-semibold text-[color:var(--color-accent)] text-center mb-4">
                            {t('additional_required_tests_header')}
                        </h2>

                        {Object.keys(requiredTests).sort().map((test) => (
                            <Toggle
                                key={`test-${test}`}
                                label={test}
                                checked={requiredTests[test]}
                                onChange={(val) =>
                                    setRequiredTests((prev) => ({ ...prev, [test]: val }))
                                }
                            />
                        ))}
                    </div>

                    <div className="mt-10">
                        <h2 className="text-xl font-semibold text-[color:var(--color-accent)] text-center mb-4">
                            {t('pet_requirements_header')}
                        </h2>

                        <div className="space-y-1">
                            <Toggle
                                label={t('temperament_test_toggle')}
                                checked={temperamentTestRequired}
                                onChange={setTemperamentTestRequired}
                            />

                            {/* ✅ Helper text to clarify downstream behavior */}
                            <p className="text-xs text-gray-500 ml-8">
                                {t('temperament_test_helper_text')}
                            </p>
                        </div>
                    </div>

                    {/* Waiver */}
                    <div className="mt-10 space-y-4">
                        <h2 className="text-xl font-semibold text-[color:var(--color-accent)] text-center">
                            {t('waiver_settings_header')}
                        </h2>

                        <Toggle label={t('require_waiver_toggle')} checked={waiverRequired} onChange={setWaiverRequired} />

                        <div>
                            <label className="block font-semibold mb-1 text-sm">{t('waiver_text_label')}</label>
                            <div className="relative">
                                {waiverText.trim() === '' && (
                                    <span className="absolute top-2 left-3 text-gray-400 pointer-events-none text-sm">
                                        {t('waiver_text_placeholder')}
                                    </span>
                                )}
                                <textarea
                                    className="w-full h-64 border px-3 py-2 rounded resize-none text-sm"
                                    value={waiverText}
                                    onChange={(e) => setWaiverText(e.target.value)}
                                />
                            </div>
                        </div>

                        {/* Booking policies (reservation approval settings) */}
                        <div className="mt-10 space-y-3">
                            <h2 className="text-xl font-semibold text-[color:var(--color-accent)] text-center mb-2">
                                {t('booking_policy_header')}
                            </h2>

                            <Toggle
                                label={t('require_daycare_approval_toggle')}
                                checked={requireDaycareReservationApproval}
                                onChange={setRequireDaycareReservationApproval}
                            />

                            <Toggle
                                label={t('require_boarding_approval_toggle')}
                                checked={requireBoardingReservationApproval}
                                onChange={setRequireBoardingReservationApproval}
                            />
                        </div>

                        {/* Booking limits */}
                        <div className="mt-10">
                            <h2 className="text-xl font-semibold text-[color:var(--color-accent)] text-center mb-4">
                                {t('booking_slot_limits_title')}
                            </h2>

                            <label className="block font-semibold mb-2 text-sm">{t('max_appointments_picker_label')}</label>
                            <select
                                value={maxAppointmentsPerSlot}
                                onChange={(e) => setMaxAppointmentsPerSlot(Number(e.target.value))}
                                className="w-full border px-3 py-2 rounded text-sm"
                            >
                                {Array.from({ length: 10 }, (_, i) => i + 1).map((val) => (
                                    <option key={`limit-${val}`} value={val}>
                                        {val}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* Drop/Pick requirement toggles */}
                        <div className="mt-10">
                            <h2 className="text-xl font-semibold text-[color:var(--color-accent)] text-center mb-4">
                                {t('drop_pick_time_header')}
                            </h2>

                            {offersDaycare && (
                                <>
                                    <Toggle label={t('require_drop_daycare')} checked={dropOffTimeRequiredDaycare} onChange={setDropOffTimeRequiredDaycare} />
                                    <Toggle label={t('require_pick_daycare')} checked={pickUpTimeRequiredDaycare} onChange={setPickUpTimeRequiredDaycare} />
                                </>
                            )}

                            {offersBoarding && (
                                <>
                                    <Toggle label={t('require_drop_boarding')} checked={dropOffTimeRequiredBoarding} onChange={setDropOffTimeRequiredBoarding} />
                                    <Toggle label={t('require_pick_boarding')} checked={pickUpTimeRequiredBoarding} onChange={setPickUpTimeRequiredBoarding} />
                                </>
                            )}

                            {requiresAssessment && (
                                <>
                                    <Toggle
                                        label={t('require_drop_assessment')}
                                        checked={dropOffTimeRequiredAssessment}
                                        onChange={setDropOffTimeRequiredAssessment}
                                    />
                                    <Toggle
                                        label={t('require_pick_assessment')}
                                        checked={pickUpTimeRequiredAssessment}
                                        onChange={setPickUpTimeRequiredAssessment}
                                    />
                                </>
                            )}

                            {/* After-hours requirement */}
                            {(offersBoarding || offersDaycare) && (
                                <Toggle
                                    label={t('require_after_hours_pickup')}
                                    checked={afterHoursPickUpTimeRequired}
                                    onChange={setAfterHoursPickUpTimeRequired}
                                />
                            )}

                            {/* Daycare time maps */}
                            {offersDaycare && dropOffTimeRequiredDaycare && (
                                <div className="mt-10">
                                    <h3 className="text-lg font-semibold mb-2 text-center">{t('daycare_drop_times')}</h3>
                                    {daysOfWeek.map((day) => (
                                        <div key={`ddo-${day}`} className="mb-6">
                                            <Toggle
                                                label={`${t('no_daycare_day')} ${day}`}
                                                checked={noDaycareDays.has(day)}
                                                onChange={(val) => {
                                                    const updated = new Set(noDaycareDays);
                                                    if (val) {
                                                        updated.add(day);
                                                    } else {
                                                        updated.delete(day);
                                                    }
                                                    setNoDaycareDays(updated);
                                                }}
                                            />
                                            {!noDaycareDays.has(day) && (
                                                <div className="mt-2 space-y-1">
                                                    <button
                                                        className="text-sm text-blue-600 underline"
                                                        onClick={() =>
                                                            setCollapsedDays((prev) => ({ ...prev, [`${day}-daycare-drop`]: !prev[`${day}-daycare-drop`] }))
                                                        }
                                                    >
                                                        {collapsedDays[`${day}-daycare-drop`] ? t('expand') : t('collapse')}
                                                    </button>
                                                    {!collapsedDays[`${day}-daycare-drop`] &&
                                                        timeOptions.map((time, i) => (
                                                            <Toggle
                                                                key={`ddo-${day}-${time}-${i}`}
                                                                label={time}
                                                                checked={(dropOffTimesDaycare[day] || []).includes(time)}
                                                                onChange={() => toggleDayTime('dropOff', 'daycare', day, time)}
                                                            />
                                                        ))}
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            )}

                            {offersDaycare && pickUpTimeRequiredDaycare && (
                                <div className="mt-10">
                                    <h3 className="text-lg font-semibold mb-2 text-center">{t('daycare_pickup_times')}</h3>
                                    {daysOfWeek.map((day) => (
                                        <div key={`dpu-${day}`} className="mb-6">
                                            {!noDaycareDays.has(day) && (
                                                <div className="mt-2 space-y-1">
                                                    <button
                                                        className="text-sm text-blue-600 underline"
                                                        onClick={() =>
                                                            setCollapsedDays((prev) => ({ ...prev, [`${day}-daycare-pickup`]: !prev[`${day}-daycare-pickup`] }))
                                                        }
                                                    >
                                                        {collapsedDays[`${day}-daycare-pickup`] ? t('expand') : t('collapse')}
                                                    </button>
                                                    {!collapsedDays[`${day}-daycare-pickup`] &&
                                                        timeOptions.map((time, i) => (
                                                            <Toggle
                                                                key={`dpu-${day}-${time}-${i}`}
                                                                label={time}
                                                                checked={(pickUpTimesDaycare[day] || []).includes(time)}
                                                                onChange={() => toggleDayTime('pickUp', 'daycare', day, time)}
                                                            />
                                                        ))}
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            )}

                            {/* Boarding time maps */}
                            {offersBoarding && dropOffTimeRequiredBoarding && (
                                <div className="mt-10">
                                    <h3 className="text-lg font-semibold mb-2 text-center">{t('boarding_drop_times')}</h3>
                                    {daysOfWeek.map((day) => (
                                        <div key={`bdo-${day}`} className="mb-6">
                                            <Toggle
                                                label={`${t('no_boarding_day')} ${day}`}
                                                checked={noBoardingDays.has(day)}
                                                onChange={(val) => {
                                                    const updated = new Set(noBoardingDays);
                                                    if (val) {
                                                        updated.add(day);
                                                    } else {
                                                        updated.delete(day);
                                                    }
                                                    setNoBoardingDays(updated);
                                                }}
                                            />
                                            {!noBoardingDays.has(day) && (
                                                <div className="mt-2 space-y-1">
                                                    <p className="font-semibold text-sm text-[color:var(--color-foreground)] mb-1">{day}</p>
                                                    <button
                                                        className="text-sm text-blue-600 underline"
                                                        onClick={() =>
                                                            setCollapsedDays((prev) => ({ ...prev, [`${day}-boarding-drop`]: !prev[`${day}-boarding-drop`] }))
                                                        }
                                                    >
                                                        {collapsedDays[`${day}-boarding-drop`] ? t('expand') : t('collapse')}
                                                    </button>
                                                    {!collapsedDays[`${day}-boarding-drop`] &&
                                                        timeOptions.map((time, i) => (
                                                            <Toggle
                                                                key={`bdo-${day}-${time}-${i}`}
                                                                label={time}
                                                                checked={(dropOffTimesBoarding[day] || []).includes(time)}
                                                                onChange={() => toggleDayTime('dropOff', 'boarding', day, time)}
                                                            />
                                                        ))}
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            )}

                            {offersBoarding && pickUpTimeRequiredBoarding && (
                                <div className="mt-10">
                                    <h3 className="text-lg font-semibold mb-2 text-center">{t('boarding_pickup_times')}</h3>
                                    {daysOfWeek.map((day) => (
                                        <div key={`bpu-${day}`} className="mb-6">
                                            {!noBoardingDays.has(day) && (
                                                <div className="mt-2 space-y-1">
                                                    <p className="font-semibold text-sm text-[color:var(--color-foreground)] mb-1">{day}</p>
                                                    <button
                                                        className="text-sm text-blue-600 underline"
                                                        onClick={() =>
                                                            setCollapsedDays((prev) => ({ ...prev, [`${day}-boarding-pickup`]: !prev[`${day}-boarding-pickup`] }))
                                                        }
                                                    >
                                                        {collapsedDays[`${day}-boarding-pickup`] ? t('expand') : t('collapse')}
                                                    </button>
                                                    {!collapsedDays[`${day}-boarding-pickup`] &&
                                                        timeOptions.map((time, i) => (
                                                            <Toggle
                                                                key={`bpu-${day}-${time}-${i}`}
                                                                label={time}
                                                                checked={(pickUpTimesBoarding[day] || []).includes(time)}
                                                                onChange={() => toggleDayTime('pickUp', 'boarding', day, time)}
                                                            />
                                                        ))}
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            )}

                            {/* After Hours Time Settings */}
                            {afterHoursPickUpTimeRequired && (
                                <div className="mt-10">
                                    <h3 className="text-lg font-semibold mb-2 text-center">{t('after_hours_time_settings_title')}</h3>
                                    <p className="text-sm text-center mb-2">{t('after_hours_pickup_times')}</p>

                                    {daysOfWeek.map((day) => (
                                        <div key={`ah-${day}`} className="mb-6">
                                            <Toggle
                                                label={`${t('no_after_hours_day')} ${day}`}
                                                checked={noAfterHoursDays.has(day)}
                                                onChange={(val) => {
                                                    const updated = new Set(noAfterHoursDays);
                                                    if (val) {
                                                        updated.add(day);
                                                    } else {
                                                        updated.delete(day);
                                                    }
                                                    setNoAfterHoursDays(updated);
                                                }}
                                            />

                                            {!noAfterHoursDays.has(day) && (
                                                <div className="mt-2 space-y-1">
                                                    <p className="font-semibold text-sm text-[color:var(--color-foreground)] mb-1">{day}</p>
                                                    <button
                                                        className="text-sm text-blue-600 underline"
                                                        onClick={() =>
                                                            setCollapsedDays((prev) => ({ ...prev, [`${day}-afterhours-pickup`]: !prev[`${day}-afterhours-pickup`] }))
                                                        }
                                                    >
                                                        {collapsedDays[`${day}-afterhours-pickup`] ? t('expand') : t('collapse')}
                                                    </button>

                                                    {!collapsedDays[`${day}-afterhours-pickup`] &&
                                                        timeOptions.map((time, i) => (
                                                            <Toggle
                                                                key={`ah-${day}-${time}-${i}`}
                                                                label={time}
                                                                checked={(afterHoursPickUpTimes[day] || []).includes(time)}
                                                                onChange={() => toggleAfterHoursTime(day, time)}
                                                            />
                                                        ))}
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Assessment Time Settings */}
                        {requiresAssessment && (dropOffTimeRequiredAssessment || pickUpTimeRequiredAssessment) && (
                            <div className="mt-10">
                                <h3 className="text-lg font-semibold mb-2 text-center">
                                    {t('assessment_time_settings_title')}
                                </h3>

                                {/* Assessment Drop-Off Times */}
                                {dropOffTimeRequiredAssessment && (
                                    <div className="mt-6">
                                        <h4 className="font-semibold text-center mb-2">
                                            {t('assessment_drop_times')}
                                        </h4>

                                        {daysOfWeek.map((day) => (
                                            <div key={`ado-${day}`} className="mb-6">
                                                <Toggle
                                                    label={`${t('no_assessment_day')} ${day}`}
                                                    checked={noAssessmentDays.has(day)}
                                                    onChange={(val) => {
                                                        const updated = new Set(noAssessmentDays);
                                                        if (val) {
                                                            updated.add(day);
                                                            setAssessmentDropOffTimes(prev => ({ ...prev, [day]: [] }));
                                                        } else {
                                                            updated.delete(day);
                                                        }
                                                        setNoAssessmentDays(updated);
                                                    }}
                                                />

                                                {!noAssessmentDays.has(day) && (
                                                    <div className="mt-2 space-y-1">
                                                        <button
                                                            className="text-sm text-blue-600 underline"
                                                            onClick={() =>
                                                                setCollapsedDays(prev => ({
                                                                    ...prev,
                                                                    [`${day}-assessment-drop`]: !prev[`${day}-assessment-drop`],
                                                                }))
                                                            }
                                                        >
                                                            {collapsedDays[`${day}-assessment-drop`] ? t('expand') : t('collapse')}
                                                        </button>

                                                        {!collapsedDays[`${day}-assessment-drop`] &&
                                                            timeOptions.map((time, i) => (
                                                                <Toggle
                                                                    key={`ado-${day}-${time}-${i}`}
                                                                    label={time}
                                                                    checked={(assessmentDropOffTimes[day] || []).includes(time)}
                                                                    onChange={() => {
                                                                        const current = assessmentDropOffTimes[day] || [];
                                                                        const updated = current.includes(time)
                                                                            ? current.filter(t => t !== time)
                                                                            : [...current, time];
                                                                        setAssessmentDropOffTimes(prev => ({ ...prev, [day]: updated }));
                                                                    }}
                                                                />
                                                            ))}
                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {/* Assessment Pick-Up Times */}
                                {pickUpTimeRequiredAssessment && (
                                    <div className="mt-10">
                                        <h4 className="font-semibold text-center mb-2">
                                            {t('assessment_pickup_times')}
                                        </h4>

                                        {daysOfWeek.map((day) => (
                                            <div key={`apu-${day}`} className="mb-6">
                                                {!noAssessmentDays.has(day) && (
                                                    <div className="mt-2 space-y-1">
                                                        <button
                                                            className="text-sm text-blue-600 underline"
                                                            onClick={() =>
                                                                setCollapsedDays(prev => ({
                                                                    ...prev,
                                                                    [`${day}-assessment-pickup`]: !prev[`${day}-assessment-pickup`],
                                                                }))
                                                            }
                                                        >
                                                            {collapsedDays[`${day}-assessment-pickup`] ? t('expand') : t('collapse')}
                                                        </button>

                                                        {!collapsedDays[`${day}-assessment-pickup`] &&
                                                            timeOptions.map((time, i) => (
                                                                <Toggle
                                                                    key={`apu-${day}-${time}-${i}`}
                                                                    label={time}
                                                                    checked={(assessmentPickUpTimes[day] || []).includes(time)}
                                                                    onChange={() => {
                                                                        const current = assessmentPickUpTimes[day] || [];
                                                                        const updated = current.includes(time)
                                                                            ? current.filter(t => t !== time)
                                                                            : [...current, time];
                                                                        setAssessmentPickUpTimes(prev => ({ ...prev, [day]: updated }));
                                                                    }}
                                                                />
                                                            ))}
                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        )}

                        {/* Optional feature toggles */}
                        <div className="mt-10">
                            <h2 className="text-xl font-semibold text-[color:var(--color-accent)] text-center mb-4">
                                {t('optional_features_header')}
                            </h2>
                            <Toggle
                                label={t('employee_management_toggle')}
                                checked={optionalFeatures.employeeManagement}
                                onChange={(val) => setOptionalFeatures((prev) => ({ ...prev, employeeManagement: val }))}
                            />
                            <Toggle
                                label={t('state_paperwork_toggle')}
                                checked={optionalFeatures.statePaperworkLog}
                                onChange={(val) => setOptionalFeatures((prev) => ({ ...prev, statePaperworkLog: val }))}
                            />
                        </div>

                        {/* Save */}
                        {saveSuccess && (
                            <div className="w-full bg-green-600 text-white text-center py-2 rounded mb-3 text-sm font-medium">
                                Changes are saved
                            </div>
                        )}

                        <button
                            onClick={updateSetting}
                            disabled={saving}
                            className="block w-full bg-[#2c4a30] text-white px-4 py-3 rounded mt-6 text-sm hover:bg-[#1e3624] transition"
                        >
                            {saving ? t('saving') : t('save_changes_button')}
                        </button>
                    </div>
                </>
            )}
        </div>
    );
}

// ✓ Define Toggle OUTSIDE the component (and close it properly)
function Toggle({
    label,
    checked,
    onChange,
}: {
    label: string;
    checked: boolean;
    onChange: (val: boolean) => void;
}) {
    return (
        <label className="flex items-center gap-3 text-sm">
            <input
                type="checkbox"
                checked={checked}
                onChange={(e) => onChange(e.target.checked)}
                className="accent-[#2c4a30] w-5 h-5"
            />
            <span>{label}</span>
        </label>
    );
}

