'use client';

// NOTE: This web page is intended to mirror the iOS view at
// .local-only/ios-real-reference/BoardingAndDaycareBusinessSettingsView.swift.
// Keep settings fields, validation behavior, and Firestore key usage aligned across both files.
import { useEffect, useState, useCallback, type Dispatch, type SetStateAction } from 'react';

import { getAuth } from 'firebase/auth';
import {
    getFirestore,
    collection,
    doc,
    deleteDoc,
    getDocs,
    query,
    where,
    updateDoc,
    Timestamp,
    setDoc
} from 'firebase/firestore';

import { getFunctions, httpsCallable } from 'firebase/functions';

import { initializeApp } from 'firebase/app';
import { useRouter } from 'next/navigation';
import { useTranslations, useLocale } from 'next-intl';

import {
    BlackoutDatesSection,
    BookingPoliciesSection,
    GeneralInformationSection,
    HealthRequirementsSection,
    KennelCapacitySection,
    OperatingHoursSection,
    OptionalFeaturesSection,
    PaymentsSection,
    PricingProgramsSection,
    ReviewSaveSection,
    ServiceOfferingsSection,
    TimeSettingsSection,
    WaiverSection,
    WhatToBringSection,
} from './components/BusinessSettingsSections';
import { BusinessSettingsNavigation } from './components/BusinessSettingsNavigation';
import type { BusinessSettingsNavItem, KennelTypeForm } from './components/types';
import { type DaycareKennelMode } from '@/lib/boardingKennels';

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
const functions = getFunctions(app);

export default function BusinessSettingsPage() {
    const t = useTranslations('boardingAndDaycareBusinessSettings');
    const locale = useLocale();
    const router = useRouter();

    const [businessId, setBusinessId] = useState('');
    const [businessName, setBusinessName] = useState('');
    const [businessPhone, setBusinessPhone] = useState('');
    const [businessStreet, setBusinessStreet] = useState('');
    const [businessCity, setBusinessCity] = useState('');
    const [businessState, setBusinessState] = useState('');
    const [businessZip, setBusinessZip] = useState('');

    const [operatingHours, setOperatingHours] = useState<Record<string, { open: string; close: string }>>({});

    const [offersBoarding, setOffersBoarding] = useState(false);
    const [offersDaycare, setOffersDaycare] = useState(false);
    const [offersGrooming, setOffersGrooming] = useState(false);
    const [offersTraining, setOffersTraining] = useState(false);
    const [groomingServices, setGroomingServices] = useState<string[]>(['']);
    const [requiresAssessment, setRequiresAssessment] = useState(false);
    const [temperamentTestRequired, setTemperamentTestRequired] = useState(false);

    const [paymentsEnabled, setPaymentsEnabled] = useState(false);
    const [daycarePayAtBookingEnabled, setDaycarePayAtBookingEnabled] = useState(false);
    const [daycareInvoiceAfterAttendanceEnabled, setDaycareInvoiceAfterAttendanceEnabled] = useState(false);
    const [daycarePayAtPickupEnabled, setDaycarePayAtPickupEnabled] = useState(false);
    const [boardingPayAtBookingEnabled, setBoardingPayAtBookingEnabled] = useState(false);
    const [boardingInvoiceAfterAttendanceEnabled, setBoardingInvoiceAfterAttendanceEnabled] = useState(false);
    const [boardingPayAtPickupEnabled, setBoardingPayAtPickupEnabled] = useState(false);

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [stripeAccountId, setStripeAccountId] = useState<string | null>(null);
    const [stripeChargesEnabled, setStripeChargesEnabled] = useState(false);
    const [stripePayoutsEnabled, setStripePayoutsEnabled] = useState(false);
    const [stripeOnboardingComplete, setStripeOnboardingComplete] = useState(false);
    const [stripeLoading, setStripeLoading] = useState(false);

    const [boardingRequiredItems, setBoardingRequiredItems] = useState<string[]>(['']);
    const [boardingProhibitedItems, setBoardingProhibitedItems] = useState<string[]>(['']);
    const [kennelTypes, setKennelTypes] = useState<KennelTypeForm[]>([]);
    const [daycareKennelMode, setDaycareKennelMode] = useState<DaycareKennelMode | ''>('');
    const [loadedKennelIds, setLoadedKennelIds] = useState<string[]>([]);
    const [newKennelName, setNewKennelName] = useState('');
    const [newKennelCount, setNewKennelCount] = useState('');

    const [waiverRequired, setWaiverRequired] = useState(false);
    const [waiverText, setWaiverText] = useState('');

    const [requireDaycareReservationApproval, setRequireDaycareReservationApproval] = useState(false);
    const [requireBoardingReservationApproval, setRequireBoardingReservationApproval] = useState(false);
    const [depositRequired, setDepositRequired] = useState(false);
    const [depositAmount, setDepositAmount] = useState('');
    const [cancellationPolicy, setCancellationPolicy] = useState('No Refund');
    const cancellationOptions = ['No Refund', 'Partial Refund', 'Full Refund'];

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

    const [afterHoursPickUpTimeRequired, setAfterHoursPickUpTimeRequired] = useState(false);
    const [afterHoursPickUpTimes, setAfterHoursPickUpTimes] = useState<Record<string, string[]>>({});
    const [noAfterHoursDays, setNoAfterHoursDays] = useState<Set<string>>(new Set());
    const [beforeHoursPickUpTimeRequired, setBeforeHoursPickUpTimeRequired] = useState(false);
    const [beforeHoursPickUpTimes, setBeforeHoursPickUpTimes] = useState<Record<string, string[]>>({});
    const [noBeforeHoursPickUpDays, setNoBeforeHoursPickUpDays] = useState<Set<string>>(new Set());
    const [earlyDropOffTimeRequired, setEarlyDropOffTimeRequired] = useState(false);
    const [earlyDropOffTimes, setEarlyDropOffTimes] = useState<Record<string, string[]>>({});
    const [noEarlyDropOffDays, setNoEarlyDropOffDays] = useState<Set<string>>(new Set());
    const [afterHoursDropOffTimeRequired, setAfterHoursDropOffTimeRequired] = useState(false);
    const [afterHoursDropOffTimes, setAfterHoursDropOffTimes] = useState<Record<string, string[]>>({});
    const [noAfterHoursDropOffDays, setNoAfterHoursDropOffDays] = useState<Set<string>>(new Set());

    const [dropOffTimesDaycare, setDropOffTimesDaycare] = useState<Record<string, string[]>>({});
    const [pickUpTimesDaycare, setPickUpTimesDaycare] = useState<Record<string, string[]>>({});
    const [dropOffTimesBoarding, setDropOffTimesBoarding] = useState<Record<string, string[]>>({});
    const [pickUpTimesBoarding, setPickUpTimesBoarding] = useState<Record<string, string[]>>({});

    const [noDaycareDays, setNoDaycareDays] = useState<Set<string>>(new Set());
    const [noBoardingDays, setNoBoardingDays] = useState<Set<string>>(new Set());

    const [blackoutDates, setBlackoutDates] = useState<Date[]>([]);
    const [selectedBlackoutDate, setSelectedBlackoutDate] = useState<string>(
        (() => {
            const date = new Date();
            date.setMinutes(date.getMinutes() - date.getTimezoneOffset());
            return date.toISOString().split('T')[0];
        })()
    );
    const [prohibitBoardingOverlapWithBlackoutDates, setProhibitBoardingOverlapWithBlackoutDates] = useState(false);

    const [collapsedDays, setCollapsedDays] = useState<Record<string, boolean>>(() => {
        const initial: Record<string, boolean> = {};
        const sections = [
            'daycare-drop',
            'daycare-pickup',
            'boarding-drop',
            'boarding-pickup',
            'beforehours-pickup',
            'afterhours-pickup',
            'early-dropoff',
            'afterhours-dropoff',
            'assessment-drop',
            'assessment-pickup',
        ];
        for (const day of ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']) {
            for (const section of sections) initial[`${day}-${section}`] = true;
        }
        return initial;
    });

    const [optionalFeatures, setOptionalFeatures] = useState({
        employeeManagement: false,
        statePaperworkLog: false,
        financialManagement: false,
    });

    const [requiredVaccinations, setRequiredVaccinations] = useState<Record<string, boolean>>({
        Rabies: false,
        Distemper: false,
        Bordetella: false,
        'Canine Influenza': false,
    });

    const [requiredTests, setRequiredTests] = useState<Record<string, boolean>>({
        'Negative Fecal': false,
    });

    const BIO_LIMIT = 500;
    const [businessBio, setBusinessBio] = useState('');

    const hasEmoji = (value: string) => {
        for (const ch of value) {
            const code = ch.codePointAt(0)!;
            if (
                (code >= 0x1F300 && code <= 0x1FAFF) ||
                (code >= 0x2600 && code <= 0x27BF) ||
                (code >= 0x1F1E6 && code <= 0x1F1FF)
            ) return true;
        }
        try {
            return /\p{Extended_Pictographic}/u.test(value);
        } catch {
            return false;
        }
    };

    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    const timeOptions = Array.from({ length: (24 - 5) * 4 + 1 }, (_, index) => {
        const minutes = index * 15 + 5 * 60;
        const hour = Math.floor(minutes / 60);
        const minute = minutes % 60;
        const period = hour < 12 ? 'AM' : 'PM';
        const formattedHour = hour % 12 === 0 ? 12 : hour % 12;
        return `${formattedHour}:${minute.toString().padStart(2, '0')} ${period}`;
    });

    const parseKennelTotalCount = (value: unknown) => {
        if (typeof value === 'number' && Number.isFinite(value)) {
            return Math.max(0, Math.trunc(value));
        }

        if (typeof value === 'string') {
            const parsed = Number.parseInt(value, 10);
            return Number.isFinite(parsed) ? Math.max(0, parsed) : 0;
        }

        return 0;
    };

    const sanitizeKennelCount = (value: string) => value.replace(/\D/g, '').slice(0, 4);

    const syncStripeStatus = useCallback(async () => {
        if (!businessId) return;

        try {
            const syncCallable = httpsCallable(functions, 'syncStripeAccountStatus');

            const result = await syncCallable({ businessId }) as {
                data?: {
                    stripeAccountId?: string | null;
                    chargesEnabled?: boolean;
                    payoutsEnabled?: boolean;
                    onboardingComplete?: boolean;
                };
            };

            const data = result?.data;
            if (!data) return;

            setStripeAccountId(data.stripeAccountId || null);
            setStripeChargesEnabled(!!data.chargesEnabled);
            setStripePayoutsEnabled(!!data.payoutsEnabled);
            setStripeOnboardingComplete(!!data.onboardingComplete);

            await updateDoc(doc(db, 'businesses', businessId), {
                stripeAccountId: data.stripeAccountId || null,
                stripeChargesEnabled: !!data.chargesEnabled,
                stripePayoutsEnabled: !!data.payoutsEnabled,
                stripeOnboardingComplete: !!data.onboardingComplete,
            });
        } catch (err) {
            console.error('Stripe sync failed:', err);
        }
    }, [businessId]);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (!user) return;

            const loadBusiness = async () => {
                const businessQuery = query(collection(db, 'businesses'), where('ownerId', '==', user.uid));
                const snapshot = await getDocs(businessQuery);
                const docSnap = snapshot.docs[0];
                if (!docSnap) return;

                const data = docSnap.data();
                setBusinessId(docSnap.id);
                setBusinessName(data.businessName || '');
                setBusinessPhone(data.businessPhone || '');
                const addr = data.businessAddress || {};
                setBusinessStreet(addr.street || '');
                setBusinessCity(addr.city || '');
                setBusinessState(addr.state || '');
                setBusinessZip(addr.zipCode || '');
                setBusinessBio(data.businessBio || '');

                setOperatingHours(data.operatingHours || {});

                setOffersBoarding(data.offersBoarding || false);
                setOffersDaycare(data.offersDaycare || false);
                setOffersGrooming(data.offersGrooming || false);
                setOffersTraining(data.offersTraining || false);
                setGroomingServices(data.groomingServices || ['']);

                setRequiresAssessment(data.requiresAssessment || false);

                const paymentSettings = data.paymentSettings || {};
                setPaymentsEnabled(!!paymentSettings.enabled);

                const daycarePayments = paymentSettings.daycare || {};
                setDaycarePayAtBookingEnabled(!!daycarePayments.payAtBooking);
                setDaycareInvoiceAfterAttendanceEnabled(!!daycarePayments.invoiceAfterAttendance);
                setDaycarePayAtPickupEnabled(!!daycarePayments.payAtPickup);

                const boardingPayments = paymentSettings.boarding || {};
                setBoardingPayAtBookingEnabled(!!boardingPayments.payAtBooking);
                setBoardingInvoiceAfterAttendanceEnabled(!!boardingPayments.invoiceAfterAttendance);
                setBoardingPayAtPickupEnabled(!!boardingPayments.payAtPickup);

                const stripeData = data.stripe || {};
                setStripeAccountId(stripeData.connectedAccountId || null);
                setStripeChargesEnabled(!!stripeData.chargesEnabled);
                setStripePayoutsEnabled(!!stripeData.payoutsEnabled);
                setStripeOnboardingComplete(!!stripeData.onboardingComplete);

                setBoardingRequiredItems(data.boardingRequiredItems || ['']);
                setBoardingProhibitedItems(data.boardingProhibitedItems || ['']);
                setDaycareKennelMode(
                    data.daycareKennelMode === 'kennelBased'
                        ? 'kennelBased'
                        : data.daycareKennelMode === 'openRoam'
                            ? 'openRoam'
                            : ''
                );

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

                setRequireDaycareReservationApproval(data.requireDaycareReservationApproval || false);
                setRequireBoardingReservationApproval(data.requireBoardingReservationApproval || false);
                setDepositRequired(Boolean(data.depositRequired));
                setDepositAmount((data.depositAmount as string) ?? '');
                setCancellationPolicy((data.cancellationPolicy as string) || 'No Refund');

                setRequiredVaccinations(data.requiredVaccinations || {
                    Rabies: false,
                    Distemper: false,
                    Bordetella: false,
                    'Canine Influenza': false,
                });

                setRequiredTests(data.requiredTests || { 'Negative Fecal': false });
                setTemperamentTestRequired(data.temperamentTestRequired || false);

                setAfterHoursPickUpTimeRequired(data.afterHoursPickUpTimeRequired || false);
                setAfterHoursPickUpTimes(data.afterHoursPickUpTimes || {});
                setNoAfterHoursDays(new Set<string>(data.noAfterHoursDays || []));
                setBeforeHoursPickUpTimeRequired(data.beforeHoursPickUpTimeRequired || false);
                setBeforeHoursPickUpTimes(data.beforeHoursPickUpTimes || {});
                setNoBeforeHoursPickUpDays(new Set<string>(data.noBeforeHoursPickUpDays || []));
                setEarlyDropOffTimeRequired(data.earlyDropOffTimeRequired || false);
                setEarlyDropOffTimes(data.earlyDropOffTimes || {});
                setNoEarlyDropOffDays(new Set<string>(data.noEarlyDropOffDays || []));
                setAfterHoursDropOffTimeRequired(data.afterHoursDropOffTimeRequired || false);
                setAfterHoursDropOffTimes(data.afterHoursDropOffTimes || {});
                setNoAfterHoursDropOffDays(new Set<string>(data.noAfterHoursDropOffDays || []));

                const limits = data.bookingLimits || {};
                setMaxAppointmentsPerSlot(limits.maxPerTimeSlot || 3);

                setDropOffTimesDaycare(data.dropOffTimesDaycare || {});
                setPickUpTimesDaycare(data.pickUpTimesDaycare || {});
                setDropOffTimesBoarding(data.dropOffTimesBoarding || {});
                setPickUpTimesBoarding(data.pickUpTimesBoarding || {});
                setNoDaycareDays(new Set(data.noDaycareDays || []));
                setNoBoardingDays(new Set(data.noBoardingDays || []));

                if (Array.isArray(data.blackoutDates)) {
                    const parsed = data.blackoutDates
                        .map((ts: Timestamp) => new Date(ts.seconds * 1000))
                        .sort((a, b) => a.getTime() - b.getTime());
                    setBlackoutDates(parsed);
                }

                setProhibitBoardingOverlapWithBlackoutDates(
                    data.prohibitBoardingOverlapWithBlackoutDates || false
                );

                const features = data.features || {
                    enableEmployeeManagement: false,
                    enableStatePaperwork: false,
                    enableFinancialManagement: false,
                };

                setOptionalFeatures({
                    employeeManagement: !!features.enableEmployeeManagement,
                    statePaperworkLog: !!features.enableStatePaperwork,
                    financialManagement: !!features.enableFinancialManagement,
                });

                const kennelSnapshot = await getDocs(collection(db, 'businesses', docSnap.id, 'kennelTypes'));
                const loadedKennels = kennelSnapshot.docs.map((kennelDoc) => {
                    const kennelData = kennelDoc.data();

                    return {
                        id: kennelDoc.id,
                        name: typeof kennelData.name === 'string' ? kennelData.name : '',
                        totalCount: String(parseKennelTotalCount(kennelData.totalCount)),
                    };
                });
                setKennelTypes(loadedKennels);
                setLoadedKennelIds(loadedKennels.map((kennel) => kennel.id));

                await syncStripeStatus();
                setLoading(false);
            };

            loadBusiness();
        });

        return () => unsubscribe();
    }, [syncStripeStatus]);

    const handleStripeOnboarding = async () => {
        if (!businessId) return;

        setStripeLoading(true);

        try {
            const createAccount = httpsCallable(functions, 'createExpressConnectedAccount');
            const onboardingLink = httpsCallable(functions, 'createExpressOnboardingLink');

            await createAccount({ businessId });

            const result = await onboardingLink({ businessId }) as { data?: { url?: string } };
            const url = result?.data?.url;

            if (url) {
                window.location.href = url;
            } else {
                alert(t('stripe_onboarding_failed'));
            }
        } catch (err) {
            const message = err instanceof Error ? err.message : 'Unknown error';
            alert(t('stripe_setup_error', { message }));
        }

        setStripeLoading(false);

        setTimeout(() => {
            syncStripeStatus();
        }, 1500);
    };

    const updateSetting = async () => {
        if (!businessId) return;
        setSaving(true);

        try {
            const trimmedBio = businessBio.trim();
            if (trimmedBio.length > BIO_LIMIT) {
                alert(t('business_bio_too_long'));
                return;
            }
            if (hasEmoji(trimmedBio)) {
                alert(t('business_bio_emoji_blocked'));
                return;
            }

            const normalizedKennelTypes = kennelTypes.map((kennel) => ({
                id: kennel.id,
                name: kennel.name.trim(),
                totalCountText: kennel.totalCount.trim(),
            }));
            if (normalizedKennelTypes.some((kennel) => !kennel.name || kennel.totalCountText === '')) {
                alert(t('kennel_validation_alert'));
                return;
            }

            if (paymentsEnabled) {
                if (!stripeOnboardingComplete || !stripeChargesEnabled || !stripePayoutsEnabled) {
                    alert(t('payments_save_requires_active_stripe_alert'));
                    return;
                }
            }

            await updateDoc(doc(db, 'businesses', businessId), {
                businessAddress: {
                    street: businessStreet.trim(),
                    city: businessCity.trim(),
                    state: businessState.trim(),
                    zipCode: businessZip.trim(),
                },
                offersBoarding,
                offersDaycare,
                offersGrooming,
                offersTraining,
                requiresAssessment,
                temperamentTestRequired,
                paymentSettings: {
                    enabled: paymentsEnabled && stripeOnboardingComplete && stripeChargesEnabled && stripePayoutsEnabled,
                    daycare: {
                        payAtBooking: paymentsEnabled ? daycarePayAtBookingEnabled : false,
                        invoiceAfterAttendance: paymentsEnabled ? daycareInvoiceAfterAttendanceEnabled : false,
                        payAtPickup: paymentsEnabled ? daycarePayAtPickupEnabled : false,
                    },
                    boarding: {
                        payAtBooking: paymentsEnabled ? boardingPayAtBookingEnabled : false,
                        invoiceAfterAttendance: paymentsEnabled ? boardingInvoiceAfterAttendanceEnabled : false,
                        payAtPickup: paymentsEnabled ? boardingPayAtPickupEnabled : false,
                    },
                },
                requireDaycareReservationApproval,
                requireBoardingReservationApproval,
                depositRequired,
                depositAmount,
                cancellationPolicy,
                groomingServices: groomingServices.filter((service) => service.trim() !== ''),
                boardingRequiredItems: boardingRequiredItems.filter((item) => item.trim() !== ''),
                boardingProhibitedItems: boardingProhibitedItems.filter((item) => item.trim() !== ''),
                daycareKennelMode: daycareKennelMode || null,
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
                beforeHoursPickUpTimeRequired,
                beforeHoursPickUpTimes,
                noBeforeHoursPickUpDays: Array.from(noBeforeHoursPickUpDays),
                earlyDropOffTimeRequired,
                earlyDropOffTimes,
                noEarlyDropOffDays: Array.from(noEarlyDropOffDays),
                afterHoursDropOffTimeRequired,
                afterHoursDropOffTimes,
                noAfterHoursDropOffDays: Array.from(noAfterHoursDropOffDays),
                dropOffTimesDaycare,
                pickUpTimesDaycare,
                dropOffTimesBoarding,
                pickUpTimesBoarding,
                noDaycareDays: Array.from(noDaycareDays),
                noBoardingDays: Array.from(noBoardingDays),
                blackoutDates: blackoutDates.map((date) =>
                    Timestamp.fromDate(new Date(date.getFullYear(), date.getMonth(), date.getDate()))
                ),
                prohibitBoardingOverlapWithBlackoutDates,
                bookingLimits: { maxPerTimeSlot: maxAppointmentsPerSlot },
                features: {
                    enableEmployeeManagement: optionalFeatures.employeeManagement,
                    enableStatePaperwork: optionalFeatures.statePaperworkLog,
                    enableFinancialManagement: optionalFeatures.financialManagement,
                },
            });

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

            const currentKennelTypes = normalizedKennelTypes.map((kennel) => ({
                id: kennel.id,
                name: kennel.name,
                totalCount: parseKennelTotalCount(kennel.totalCountText),
            }));
            const currentKennelIds = currentKennelTypes.map((kennel) => kennel.id);
            const deletedKennelIds = loadedKennelIds.filter((kennelId) => !currentKennelIds.includes(kennelId));

            await Promise.all([
                ...currentKennelTypes.map((kennel) =>
                    setDoc(
                        doc(db, 'businesses', businessId, 'kennelTypes', kennel.id),
                        {
                            name: kennel.name,
                            totalCount: kennel.totalCount,
                        },
                        { merge: true }
                    )
                ),
                ...deletedKennelIds.map((kennelId) => deleteDoc(doc(db, 'businesses', businessId, 'kennelTypes', kennelId))),
            ]);

            setKennelTypes(
                currentKennelTypes.map((kennel) => ({
                    id: kennel.id,
                    name: kennel.name,
                    totalCount: String(kennel.totalCount),
                }))
            );
            setLoadedKennelIds(currentKennelIds);

            setSaveSuccess(true);
            setTimeout(() => setSaveSuccess(false), 3000);
        } catch (err) {
            console.error('Failed to save business settings:', err);
            alert(t('save_failed_alert'));
        } finally {
            setSaving(false);
        }
    };

    const handleGroomingChange = (index: number, value: string) => {
        const updated = [...groomingServices];
        updated[index] = value.slice(0, 50);
        setGroomingServices(updated);
    };

    const addGroomingService = () => {
        if (groomingServices.length < 10) setGroomingServices((prev) => [...prev, '']);
    };

    const removeGroomingService = (index: number) => {
        setGroomingServices((prev) => prev.filter((_, serviceIndex) => serviceIndex !== index));
    };

    const handleKennelNameChange = (kennelId: string, value: string) => {
        setKennelTypes((prev) =>
            prev.map((kennel) => (
                kennel.id === kennelId
                    ? { ...kennel, name: value.slice(0, 35) }
                    : kennel
            ))
        );
    };

    const handleKennelCountChange = (kennelId: string, value: string) => {
        const nextValue = sanitizeKennelCount(value);
        setKennelTypes((prev) =>
            prev.map((kennel) => (
                kennel.id === kennelId
                    ? { ...kennel, totalCount: nextValue }
                    : kennel
            ))
        );
    };

    const addKennelType = () => {
        if (!businessId) return;

        const name = newKennelName.trim().slice(0, 35);
        const totalCount = sanitizeKennelCount(newKennelCount);
        if (!name || totalCount === '') return;

        const kennelRef = doc(collection(db, 'businesses', businessId, 'kennelTypes'));
        setKennelTypes((prev) => [
            ...prev,
            {
                id: kennelRef.id,
                name,
                totalCount,
            },
        ]);
        setNewKennelName('');
        setNewKennelCount('');
    };

    const removeKennelType = (kennelId: string) => {
        setKennelTypes((prev) => prev.filter((kennel) => kennel.id !== kennelId));
    };

    const toggleDayTime = (
        type: 'dropOff' | 'pickUp',
        service: 'daycare' | 'boarding',
        day: string,
        time: string
    ) => {
        const map: Record<
            'daycare' | 'boarding',
            Record<'dropOff' | 'pickUp', [Record<string, string[]>, Dispatch<SetStateAction<Record<string, string[]>>>]>
        > = {
            daycare: {
                dropOff: [dropOffTimesDaycare, setDropOffTimesDaycare],
                pickUp: [pickUpTimesDaycare, setPickUpTimesDaycare],
            },
            boarding: {
                dropOff: [dropOffTimesBoarding, setDropOffTimesBoarding],
                pickUp: [pickUpTimesBoarding, setPickUpTimesBoarding],
            },
        };
        const [times, setTimes] = map[service][type];
        const current = times[day] || [];
        const updated = current.includes(time) ? current.filter((item) => item !== time) : [...current, time];
        setTimes({ ...times, [day]: updated });
    };

    const toggleAfterHoursTime = (day: string, time: string) => {
        const current = afterHoursPickUpTimes[day] || [];
        const updated = current.includes(time) ? current.filter((item) => item !== time) : [...current, time];
        setAfterHoursPickUpTimes({ ...afterHoursPickUpTimes, [day]: updated });
    };

    const toggleSpecialWindowTime = (
        currentMap: Record<string, string[]>,
        setter: Dispatch<SetStateAction<Record<string, string[]>>>,
        day: string,
        time: string
    ) => {
        const current = currentMap[day] || [];
        const updated = current.includes(time) ? current.filter((item) => item !== time) : [...current, time];
        setter({ ...currentMap, [day]: updated });
    };

    const toggleBeforeHoursPickupTime = (day: string, time: string) => {
        toggleSpecialWindowTime(beforeHoursPickUpTimes, setBeforeHoursPickUpTimes, day, time);
    };

    const toggleEarlyDropOffTime = (day: string, time: string) => {
        toggleSpecialWindowTime(earlyDropOffTimes, setEarlyDropOffTimes, day, time);
    };

    const toggleAfterHoursDropOffTime = (day: string, time: string) => {
        toggleSpecialWindowTime(afterHoursDropOffTimes, setAfterHoursDropOffTimes, day, time);
    };

    const openDiscounts = () => router.push(`/${locale}/boardinganddaycare-businesssettingsdiscounts`);
    const openMemberships = () => router.push(`/${locale}/boardinganddaycare-businesssettingsmemberships`);
    const openDaycareCheckoutItems = () => router.push(`/${locale}/boardinganddaycare-payatcheckoutitems`);
    const openBoardingCheckoutItems = () => router.push(`/${locale}/boardinganddaycare-payatcheckoutboardingitems`);
    const openInvoiceLibrary = () => router.push(`/${locale}/boardinganddaycare-invoicelibrary`);

    const showPaymentsSection = offersDaycare || offersBoarding;
    const showTimeSettingsSection = offersDaycare || offersBoarding || requiresAssessment;

    const navigationItems: BusinessSettingsNavItem[] = [
        { id: 'general', label: t('general_information_header') },
        { id: 'hours', label: t('operating_hours_header') },
        { id: 'blackoutDates', label: t('blackout_dates_header') },
        { id: 'services', label: t('service_offerings_title') },
        { id: 'pricing', label: t('pricing_discounts_header') },
        ...(showPaymentsSection ? [{ id: 'payments' as const, label: t('payments_header') }] : []),
        { id: 'boardingPolicies', label: t('booking_policy_header') },
        { id: 'kennels', label: t('kennel_section_header') },
        ...(showTimeSettingsSection ? [{ id: 'timeSettings' as const, label: t('drop_pick_time_header') }] : []),
        ...(offersBoarding ? [{ id: 'whatToBring' as const, label: t('what_to_bring_header') }] : []),
        { id: 'health', label: t('health_requirements_header') },
        { id: 'waiver', label: t('waiver_settings_header') },
        { id: 'optionalFeatures', label: t('optional_features_header') },
        { id: 'reviewSave', label: t('review_save_header') },
    ];

    return (
        <div className="w-full max-w-7xl mx-auto px-3 sm:px-5 lg:px-8 py-8 text-[color:var(--color-foreground)]">
            <button
                type="button"
                onClick={() => router.push('/boardinganddaycaredashboard')}
                className="mb-4 text-sm text-blue-600 underline"
            >
                ← {t('back_to_dashboard')}
            </button>

            <div className="mb-8 max-w-3xl">
                <h1 className="text-3xl font-bold text-[color:var(--color-accent)]">{t('business_settings_title')}</h1>
            </div>

            {loading ? (
                <p className="text-center text-sm">{t('loading')}</p>
            ) : (
                <div className="lg:grid lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-8 xl:grid-cols-[280px_minmax(0,1fr)]">
                    <BusinessSettingsNavigation
                        items={navigationItems}
                        label={t('section_navigation_label')}
                    />

                    <div className="space-y-6">
                        <GeneralInformationSection
                            businessName={businessName}
                            businessPhone={businessPhone}
                            businessStreet={businessStreet}
                            setBusinessStreet={setBusinessStreet}
                            businessCity={businessCity}
                            setBusinessCity={setBusinessCity}
                            businessState={businessState}
                            setBusinessState={setBusinessState}
                            businessZip={businessZip}
                            setBusinessZip={setBusinessZip}
                            locale={locale}
                            businessBio={businessBio}
                            setBusinessBio={setBusinessBio}
                            bioLimit={BIO_LIMIT}
                            hasEmoji={hasEmoji}
                        />

                        <OperatingHoursSection
                            operatingHours={operatingHours}
                            setOperatingHours={setOperatingHours}
                            daysOfWeek={daysOfWeek}
                            timeOptions={timeOptions}
                        />

                        <BlackoutDatesSection
                            selectedBlackoutDate={selectedBlackoutDate}
                            setSelectedBlackoutDate={setSelectedBlackoutDate}
                            blackoutDates={blackoutDates}
                            setBlackoutDates={setBlackoutDates}
                            prohibitBoardingOverlapWithBlackoutDates={prohibitBoardingOverlapWithBlackoutDates}
                            setProhibitBoardingOverlapWithBlackoutDates={setProhibitBoardingOverlapWithBlackoutDates}
                        />

                        <ServiceOfferingsSection
                            offersBoarding={offersBoarding}
                            setOffersBoarding={setOffersBoarding}
                            offersDaycare={offersDaycare}
                            setOffersDaycare={setOffersDaycare}
                            offersGrooming={offersGrooming}
                            setOffersGrooming={setOffersGrooming}
                            offersTraining={offersTraining}
                            setOffersTraining={setOffersTraining}
                            requiresAssessment={requiresAssessment}
                            setRequiresAssessment={setRequiresAssessment}
                            groomingServices={groomingServices}
                            onGroomingChange={handleGroomingChange}
                            onAddGroomingService={addGroomingService}
                            onRemoveGroomingService={removeGroomingService}
                        />

                        <PricingProgramsSection
                            onOpenDiscounts={openDiscounts}
                            onOpenMemberships={openMemberships}
                        />

                        <PaymentsSection
                            visible={showPaymentsSection}
                            stripeOnboardingComplete={stripeOnboardingComplete}
                            stripeChargesEnabled={stripeChargesEnabled}
                            stripePayoutsEnabled={stripePayoutsEnabled}
                            stripeLoading={stripeLoading}
                            onStripeOnboarding={handleStripeOnboarding}
                            paymentsEnabled={paymentsEnabled}
                            onPaymentsEnabledChange={(value) => {
                                if (value) {
                                    if (!stripeOnboardingComplete || !stripeChargesEnabled || !stripePayoutsEnabled) {
                                        alert(t('payments_require_active_stripe_alert'));
                                        return;
                                    }
                                }

                                setPaymentsEnabled(value);

                                if (!value) {
                                    setDaycarePayAtBookingEnabled(false);
                                    setDaycareInvoiceAfterAttendanceEnabled(false);
                                    setDaycarePayAtPickupEnabled(false);
                                    setBoardingPayAtBookingEnabled(false);
                                    setBoardingInvoiceAfterAttendanceEnabled(false);
                                    setBoardingPayAtPickupEnabled(false);
                                }
                            }}
                            offersDaycare={offersDaycare}
                            offersBoarding={offersBoarding}
                            daycarePayAtBookingEnabled={daycarePayAtBookingEnabled}
                            onDaycarePayAtBookingChange={(value) => {
                                if (value) {
                                    if (!stripeOnboardingComplete || !stripeChargesEnabled || !stripePayoutsEnabled) {
                                        alert(t('payment_method_requires_active_stripe_alert'));
                                        return;
                                    }
                                }
                                setDaycarePayAtBookingEnabled(value);
                            }}
                            daycareInvoiceAfterAttendanceEnabled={daycareInvoiceAfterAttendanceEnabled}
                            onDaycareInvoiceAfterAttendanceChange={(value) => {
                                if (value) {
                                    if (!stripeOnboardingComplete || !stripeChargesEnabled || !stripePayoutsEnabled) {
                                        alert(t('payment_method_requires_active_stripe_alert'));
                                        return;
                                    }
                                }
                                setDaycareInvoiceAfterAttendanceEnabled(value);
                            }}
                            daycarePayAtPickupEnabled={daycarePayAtPickupEnabled}
                            onDaycarePayAtPickupChange={(value) => {
                                if (value) {
                                    if (!stripeOnboardingComplete || !stripeChargesEnabled || !stripePayoutsEnabled) {
                                        alert(t('payment_method_requires_active_stripe_alert'));
                                        return;
                                    }
                                }
                                setDaycarePayAtPickupEnabled(value);
                            }}
                            boardingPayAtBookingEnabled={boardingPayAtBookingEnabled}
                            onBoardingPayAtBookingChange={(value) => {
                                if (value) {
                                    if (!stripeOnboardingComplete || !stripeChargesEnabled || !stripePayoutsEnabled) {
                                        alert(t('payment_method_requires_active_stripe_alert'));
                                        return;
                                    }
                                }
                                setBoardingPayAtBookingEnabled(value);
                            }}
                            boardingInvoiceAfterAttendanceEnabled={boardingInvoiceAfterAttendanceEnabled}
                            onBoardingInvoiceAfterAttendanceChange={(value) => {
                                if (value) {
                                    if (!stripeOnboardingComplete || !stripeChargesEnabled || !stripePayoutsEnabled) {
                                        alert(t('payment_method_requires_active_stripe_alert'));
                                        return;
                                    }
                                }
                                setBoardingInvoiceAfterAttendanceEnabled(value);
                            }}
                            boardingPayAtPickupEnabled={boardingPayAtPickupEnabled}
                            onBoardingPayAtPickupChange={(value) => {
                                if (value) {
                                    if (!stripeOnboardingComplete || !stripeChargesEnabled || !stripePayoutsEnabled) {
                                        alert(t('payment_method_requires_active_stripe_alert'));
                                        return;
                                    }
                                }
                                setBoardingPayAtPickupEnabled(value);
                            }}
                            onOpenDaycareCheckoutItems={openDaycareCheckoutItems}
                            onOpenBoardingCheckoutItems={openBoardingCheckoutItems}
                            onOpenInvoiceLibrary={openInvoiceLibrary}
                        />

                        <BookingPoliciesSection
                            maxAppointmentsPerSlot={maxAppointmentsPerSlot}
                            setMaxAppointmentsPerSlot={setMaxAppointmentsPerSlot}
                            requireDaycareReservationApproval={requireDaycareReservationApproval}
                            setRequireDaycareReservationApproval={setRequireDaycareReservationApproval}
                            requireBoardingReservationApproval={requireBoardingReservationApproval}
                            setRequireBoardingReservationApproval={setRequireBoardingReservationApproval}
                            offersBoarding={offersBoarding}
                            depositRequired={depositRequired}
                            setDepositRequired={setDepositRequired}
                            depositAmount={depositAmount}
                            setDepositAmount={setDepositAmount}
                            cancellationPolicy={cancellationPolicy}
                            setCancellationPolicy={setCancellationPolicy}
                            cancellationOptions={cancellationOptions}
                            onOpenBoardingPricingRules={openBoardingCheckoutItems}
                        />

                        <KennelCapacitySection
                            daycareKennelMode={daycareKennelMode}
                            setDaycareKennelMode={setDaycareKennelMode}
                            kennelTypes={kennelTypes}
                            onKennelNameChange={handleKennelNameChange}
                            onKennelCountChange={handleKennelCountChange}
                            onRemoveKennelType={removeKennelType}
                            businessId={businessId}
                            newKennelName={newKennelName}
                            setNewKennelName={setNewKennelName}
                            newKennelCount={newKennelCount}
                            setNewKennelCount={setNewKennelCount}
                            sanitizeKennelCount={sanitizeKennelCount}
                            onAddKennelType={addKennelType}
                        />

                        <TimeSettingsSection
                            showSection={showTimeSettingsSection}
                            offersDaycare={offersDaycare}
                            offersBoarding={offersBoarding}
                            requiresAssessment={requiresAssessment}
                            dropOffTimeRequiredDaycare={dropOffTimeRequiredDaycare}
                            setDropOffTimeRequiredDaycare={setDropOffTimeRequiredDaycare}
                            pickUpTimeRequiredDaycare={pickUpTimeRequiredDaycare}
                            setPickUpTimeRequiredDaycare={setPickUpTimeRequiredDaycare}
                            dropOffTimeRequiredBoarding={dropOffTimeRequiredBoarding}
                            setDropOffTimeRequiredBoarding={setDropOffTimeRequiredBoarding}
                            pickUpTimeRequiredBoarding={pickUpTimeRequiredBoarding}
                            setPickUpTimeRequiredBoarding={setPickUpTimeRequiredBoarding}
                            dropOffTimeRequiredAssessment={dropOffTimeRequiredAssessment}
                            setDropOffTimeRequiredAssessment={setDropOffTimeRequiredAssessment}
                            pickUpTimeRequiredAssessment={pickUpTimeRequiredAssessment}
                            setPickUpTimeRequiredAssessment={setPickUpTimeRequiredAssessment}
                            afterHoursPickUpTimeRequired={afterHoursPickUpTimeRequired}
                            setAfterHoursPickUpTimeRequired={setAfterHoursPickUpTimeRequired}
                            beforeHoursPickUpTimeRequired={beforeHoursPickUpTimeRequired}
                            setBeforeHoursPickUpTimeRequired={setBeforeHoursPickUpTimeRequired}
                            earlyDropOffTimeRequired={earlyDropOffTimeRequired}
                            setEarlyDropOffTimeRequired={setEarlyDropOffTimeRequired}
                            afterHoursDropOffTimeRequired={afterHoursDropOffTimeRequired}
                            setAfterHoursDropOffTimeRequired={setAfterHoursDropOffTimeRequired}
                            daysOfWeek={daysOfWeek}
                            timeOptions={timeOptions}
                            collapsedDays={collapsedDays}
                            setCollapsedDays={setCollapsedDays}
                            noDaycareDays={noDaycareDays}
                            setNoDaycareDays={setNoDaycareDays}
                            noBoardingDays={noBoardingDays}
                            setNoBoardingDays={setNoBoardingDays}
                            noAssessmentDays={noAssessmentDays}
                            setNoAssessmentDays={setNoAssessmentDays}
                            noAfterHoursDays={noAfterHoursDays}
                            setNoAfterHoursDays={setNoAfterHoursDays}
                            noBeforeHoursPickUpDays={noBeforeHoursPickUpDays}
                            setNoBeforeHoursPickUpDays={setNoBeforeHoursPickUpDays}
                            noEarlyDropOffDays={noEarlyDropOffDays}
                            setNoEarlyDropOffDays={setNoEarlyDropOffDays}
                            noAfterHoursDropOffDays={noAfterHoursDropOffDays}
                            setNoAfterHoursDropOffDays={setNoAfterHoursDropOffDays}
                            dropOffTimesDaycare={dropOffTimesDaycare}
                            pickUpTimesDaycare={pickUpTimesDaycare}
                            dropOffTimesBoarding={dropOffTimesBoarding}
                            pickUpTimesBoarding={pickUpTimesBoarding}
                            assessmentDropOffTimes={assessmentDropOffTimes}
                            setAssessmentDropOffTimes={setAssessmentDropOffTimes}
                            assessmentPickUpTimes={assessmentPickUpTimes}
                            setAssessmentPickUpTimes={setAssessmentPickUpTimes}
                            afterHoursPickUpTimes={afterHoursPickUpTimes}
                            beforeHoursPickUpTimes={beforeHoursPickUpTimes}
                            earlyDropOffTimes={earlyDropOffTimes}
                            afterHoursDropOffTimes={afterHoursDropOffTimes}
                            onToggleDayTime={toggleDayTime}
                            onToggleAfterHoursTime={toggleAfterHoursTime}
                            onToggleBeforeHoursPickupTime={toggleBeforeHoursPickupTime}
                            onToggleEarlyDropOffTime={toggleEarlyDropOffTime}
                            onToggleAfterHoursDropOffTime={toggleAfterHoursDropOffTime}
                        />

                        <WhatToBringSection
                            visible={offersBoarding}
                            boardingRequiredItems={boardingRequiredItems}
                            setBoardingRequiredItems={setBoardingRequiredItems}
                            boardingProhibitedItems={boardingProhibitedItems}
                            setBoardingProhibitedItems={setBoardingProhibitedItems}
                        />

                        <HealthRequirementsSection
                            requiredVaccinations={requiredVaccinations}
                            setRequiredVaccinations={setRequiredVaccinations}
                            requiredTests={requiredTests}
                            setRequiredTests={setRequiredTests}
                            temperamentTestRequired={temperamentTestRequired}
                            setTemperamentTestRequired={setTemperamentTestRequired}
                        />

                        <WaiverSection
                            waiverRequired={waiverRequired}
                            setWaiverRequired={setWaiverRequired}
                            waiverText={waiverText}
                            setWaiverText={setWaiverText}
                        />

                        <OptionalFeaturesSection
                            optionalFeatures={optionalFeatures}
                            setOptionalFeatures={setOptionalFeatures}
                        />

                        <ReviewSaveSection
                            saveSuccess={saveSuccess}
                            saving={saving}
                            onSave={updateSetting}
                        />
                    </div>
                </div>
            )}
        </div>
    );
}
