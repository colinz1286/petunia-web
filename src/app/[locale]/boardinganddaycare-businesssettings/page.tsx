'use client';

import { useEffect, useState } from 'react';
import { getAuth } from 'firebase/auth';
import {
    getFirestore,
    collection,
    doc,
    getDocs,
    query,
    where,
    updateDoc
} from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import { useRouter } from 'next/navigation';
import { useTranslations, useLocale } from 'next-intl';

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY!,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN!,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID!,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET!,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID!,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID!
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
    const [offersBoarding, setOffersBoarding] = useState(false);
    const [offersDaycare, setOffersDaycare] = useState(false);
    const [offersGrooming, setOffersGrooming] = useState(false);
    const [offersTraining, setOffersTraining] = useState(false);
    const [groomingServices, setGroomingServices] = useState<string[]>(['']);

    const [waiverRequired, setWaiverRequired] = useState(false);
    const [waiverText, setWaiverText] = useState('');

    const [maxAppointmentsPerSlot, setMaxAppointmentsPerSlot] = useState(3);
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);

    const [dropOffTimeRequiredDaycare, setDropOffTimeRequiredDaycare] = useState(false);
    const [pickUpTimeRequiredDaycare, setPickUpTimeRequiredDaycare] = useState(false);
    const [dropOffTimeRequiredBoarding, setDropOffTimeRequiredBoarding] = useState(false);
    const [pickUpTimeRequiredBoarding, setPickUpTimeRequiredBoarding] = useState(false);

    const [dropOffTimesDaycare, setDropOffTimesDaycare] = useState<Record<string, string[]>>({});
    const [pickUpTimesDaycare, setPickUpTimesDaycare] = useState<Record<string, string[]>>({});
    const [dropOffTimesBoarding, setDropOffTimesBoarding] = useState<Record<string, string[]>>({});
    const [pickUpTimesBoarding, setPickUpTimesBoarding] = useState<Record<string, string[]>>({});

    const [noDaycareDays, setNoDaycareDays] = useState<Set<string>>(new Set());
    const [noBoardingDays, setNoBoardingDays] = useState<Set<string>>(new Set());
    const [collapsedDays, setCollapsedDays] = useState<Record<string, boolean>>(() => {
        const initial: Record<string, boolean> = {};
        const sections = ['daycare-drop', 'daycare-pickup', 'boarding-drop', 'boarding-pickup'];

        for (const day of ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']) {
            for (const section of sections) {
                const key = `${day}-${section}`;
                initial[key] = true;
            }
        }

        return initial;
    });

    const [optionalFeatures, setOptionalFeatures] = useState({
        employeeManagement: false,
        statePaperworkLog: false
    });

    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    const timeOptions = Array.from({ length: ((24 - 5) * 4 + 1) }, (_, i) => {
        const minutes = i * 15 + 5 * 60;
        const hour = Math.floor(minutes / 60);
        const minute = minutes % 60;
        const period = hour < 12 ? 'AM' : 'PM';
        const formattedHour = hour % 12 === 0 ? 12 : hour % 12;
        return `${formattedHour}:${minute.toString().padStart(2, '0')} ${period}`;
    });

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (!user) return;

            const loadBusiness = async () => {
                const q = query(
                    collection(db, 'businesses'),
                    where('ownerId', '==', user.uid)
                );
                const snapshot = await getDocs(q);
                const docSnap = snapshot.docs[0];
                if (!docSnap) return;

                const data = docSnap.data();
                setBusinessId(docSnap.id);
                setBusinessName(data.businessName || '');
                setBusinessPhone(data.businessPhone || '');

                const addr = data.businessAddress || {};
                setBusinessAddress(
                    `${addr.street || ''}, ${addr.city || ''}, ${addr.state || ''} ${addr.zipCode || ''}`
                );

                setOffersBoarding(data.offersBoarding || false);
                setOffersDaycare(data.offersDaycare || false);
                setOffersGrooming(data.offersGrooming || false);
                setOffersTraining(data.offersTraining || false);
                setGroomingServices(data.groomingServices || ['']);
                setWaiverRequired(data.waiverRequired || false);
                setWaiverText(data.waiverText || '');
                setDropOffTimeRequiredDaycare(data.dropOffTimeRequiredDaycare || false);
                setPickUpTimeRequiredDaycare(data.pickUpTimeRequiredDaycare || false);
                setDropOffTimeRequiredBoarding(data.dropOffTimeRequiredBoarding || false);
                setPickUpTimeRequiredBoarding(data.pickUpTimeRequiredBoarding || false);

                const limits = data.bookingLimits || {};
                setMaxAppointmentsPerSlot(limits.maxPerTimeSlot || 3);

                setDropOffTimesDaycare(data.dropOffTimesDaycare || {});
                setPickUpTimesDaycare(data.pickUpTimesDaycare || {});
                setDropOffTimesBoarding(data.dropOffTimesBoarding || {});
                setPickUpTimesBoarding(data.pickUpTimesBoarding || {});
                setNoDaycareDays(new Set(data.noDaycareDays || []));
                setNoBoardingDays(new Set(data.noBoardingDays || []));

                const features = data.features || {
                    enableEmployeeManagement: false,
                    enableStatePaperwork: false
                };
                setOptionalFeatures({
                    employeeManagement: features.enableEmployeeManagement,
                    statePaperworkLog: features.enableStatePaperwork
                });

                setLoading(false);
            };

            loadBusiness();
        });

        return () => unsubscribe();
    }, []);

    const updateSetting = async () => {
        if (!businessId) return;
        setSaving(true);

        await updateDoc(doc(db, 'businesses', businessId), {
            offersBoarding,
            offersDaycare,
            offersGrooming,
            offersTraining,
            groomingServices: groomingServices.filter((s) => s.trim() !== ''),
            waiverRequired,
            waiverText,
            dropOffTimeRequiredDaycare,
            pickUpTimeRequiredDaycare,
            dropOffTimeRequiredBoarding,
            pickUpTimeRequiredBoarding,
            dropOffTimesDaycare,
            pickUpTimesDaycare,
            dropOffTimesBoarding,
            pickUpTimesBoarding,
            noDaycareDays: Array.from(noDaycareDays),
            noBoardingDays: Array.from(noBoardingDays),
            bookingLimits: {
                maxPerTimeSlot: maxAppointmentsPerSlot
            },
            optionalFeatures: {
                employeeManagement: optionalFeatures.employeeManagement,
                statePaperworkLog: optionalFeatures.statePaperworkLog
            }
        });

        const waiverRef = doc(db, 'businesses', businessId, 'settings', 'clientWaiver');
        await updateDoc(waiverRef, {
            waiverText: waiverText,
            waiverVersion: 1,
            lastUpdated: new Date()
        });

        setSaving(false);
    };

    const handleGroomingChange = (index: number, value: string) => {
        const updated = [...groomingServices];
        updated[index] = value.slice(0, 50);
        setGroomingServices(updated);
    };

    const addGroomingService = () => {
        if (groomingServices.length < 10) {
            setGroomingServices([...groomingServices, '']);
        }
    };

    const removeGroomingService = (index: number) => {
        const updated = groomingServices.filter((_, i) => i !== index);
        setGroomingServices(updated);
    };

    const toggleDayTime = (
        type: 'dropOff' | 'pickUp',
        service: 'daycare' | 'boarding',
        day: string,
        time: string
    ) => {
        const map: Record<
            'daycare' | 'boarding',
            Record<
                'dropOff' | 'pickUp',
                [Record<string, string[]>, React.Dispatch<React.SetStateAction<Record<string, string[]>>>]
            >
        > = {
            daycare: {
                dropOff: [dropOffTimesDaycare, setDropOffTimesDaycare],
                pickUp: [pickUpTimesDaycare, setPickUpTimesDaycare]
            },
            boarding: {
                dropOff: [dropOffTimesBoarding, setDropOffTimesBoarding],
                pickUp: [pickUpTimesBoarding, setPickUpTimesBoarding]
            }
        };

        const [times, setTimes] = map[service][type];

        const current = times[day] || [];
        const updated = current.includes(time)
            ? current.filter((t) => t !== time)
            : [...current, time];

        setTimes({ ...times, [day]: updated });
    };

    return (
        <div className="w-full max-w-md mx-auto px-2 sm:px-4 py-8 text-[color:var(--color-foreground)]">
            {/* Back Button */}
            <button
                onClick={() => router.push('/boardinganddaycaredashboard')}
                className="text-sm text-blue-600 underline mb-4"
            >
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
                    <div className="space-y-3 mb-6">
                        <div>
                            <label className="font-semibold text-sm">{t('business_name_field')}</label>
                            <input
                                value={businessName}
                                disabled
                                className="w-full border px-3 py-2 rounded bg-gray-100 text-sm"
                            />
                        </div>
                        <div>
                            <label className="font-semibold text-sm">{t('business_phone_field')}</label>
                            <input
                                value={businessPhone}
                                disabled
                                className="w-full border px-3 py-2 rounded bg-gray-100 text-sm"
                            />
                        </div>
                        <div>
                            <label className="font-semibold text-sm">{t('business_address_field')}</label>
                            <input
                                value={businessAddress}
                                disabled
                                className="w-full border px-3 py-2 rounded bg-gray-100 text-sm"
                            />
                        </div>
                    </div>

                    <div className="space-y-4 mb-6">
                        <h2 className="text-xl font-semibold text-[color:var(--color-accent)] text-center">
                            {t('service_offerings_title')}
                        </h2>

                        <Toggle label={t('boarding_toggle')} checked={offersBoarding} onChange={setOffersBoarding} />
                        <Toggle label={t('daycare_toggle')} checked={offersDaycare} onChange={setOffersDaycare} />
                        <Toggle label={t('grooming_toggle')} checked={offersGrooming} onChange={setOffersGrooming} />
                        <Toggle label={t('training_toggle')} checked={offersTraining} onChange={setOffersTraining} />

                        {offersGrooming && (
                            <div className="mt-4 space-y-2">
                                <label className="font-semibold text-sm">{t('grooming_services_label')}</label>
                                {groomingServices.map((service, index) => (
                                    <div key={index} className="flex flex-wrap gap-2">
                                        <input
                                            value={service}
                                            onChange={(e) => handleGroomingChange(index, e.target.value)}
                                            className="w-full sm:flex-1 border px-3 py-2 rounded text-sm"
                                        />
                                        {groomingServices.length > 1 && (
                                            <button
                                                onClick={() => removeGroomingService(index)}
                                                className="text-red-600 font-bold text-lg"
                                            >
                                                &times;
                                            </button>
                                        )}
                                    </div>
                                ))}
                                {groomingServices.length < 10 && (
                                    <button
                                        onClick={addGroomingService}
                                        className="text-sm text-green-700 underline mt-1"
                                    >
                                        {t('add_another_service_button')}
                                    </button>
                                )}
                            </div>
                        )}
                    </div>

                    {/* ─────────────── Waiver Settings Section ─────────────── */}
                    <div className="mt-10 space-y-4">
                        <h2 className="text-xl font-semibold text-[color:var(--color-accent)] text-center">
                            {t('waiver_settings_header')}
                        </h2>

                        <Toggle
                            label={t('require_waiver_toggle')}
                            checked={waiverRequired}
                            onChange={setWaiverRequired}
                        />

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

                        {/* ─────────────── Booking Limits Section ─────────────── */}
                        <div className="mt-10">
                            <h2 className="text-xl font-semibold text-[color:var(--color-accent)] text-center mb-4">
                                {t('booking_slot_limits_title')}
                            </h2>

                            <label className="block font-semibold mb-2 text-sm">
                                {t('max_appointments_picker_label')}
                            </label>

                            <select
                                value={maxAppointmentsPerSlot}
                                onChange={(e) => setMaxAppointmentsPerSlot(Number(e.target.value))}
                                className="w-full border px-3 py-2 rounded text-sm"
                            >
                                {Array.from({ length: 10 }, (_, i) => i + 1).map((val) => (
                                    <option key={val} value={val}>
                                        {val}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* ─────────────── Drop-Off & Pick-Up Toggles ─────────────── */}
                        <div className="mt-10">
                            <h2 className="text-xl font-semibold text-[color:var(--color-accent)] text-center mb-4">
                                {t('drop_pick_time_header')}
                            </h2>

                            {offersDaycare && (
                                <>
                                    <Toggle
                                        label={t('require_drop_daycare')}
                                        checked={dropOffTimeRequiredDaycare}
                                        onChange={setDropOffTimeRequiredDaycare}
                                    />
                                    <Toggle
                                        label={t('require_pick_daycare')}
                                        checked={pickUpTimeRequiredDaycare}
                                        onChange={setPickUpTimeRequiredDaycare}
                                    />

                                    {dropOffTimeRequiredDaycare && (
                                        <div className="mt-10">
                                            <h3 className="text-lg font-semibold mb-2 text-center">
                                                {t('daycare_drop_times')}
                                            </h3>
                                            {daysOfWeek.map((day) => (
                                                <div key={day} className="mb-6">
                                                    <Toggle
                                                        label={`${t('no_daycare_day')} ${day}`}
                                                        checked={noDaycareDays.has(day)}
                                                        onChange={(val) => {
                                                            const updated = new Set(noDaycareDays);
                                                            val ? updated.add(day) : updated.delete(day);
                                                            setNoDaycareDays(updated);
                                                        }}
                                                    />

                                                    {!noDaycareDays.has(day) && (
                                                        <div className="mt-2 space-y-1">
                                                            <button
                                                                className="text-sm text-blue-600 underline"
                                                                onClick={() => {
                                                                    setCollapsedDays((prev) => ({
                                                                        ...prev,
                                                                        [`${day}-daycare-drop`]: !prev[`${day}-daycare-drop`],
                                                                    }));
                                                                }}
                                                            >
                                                                {collapsedDays[`${day}-daycare-drop`] ? t('expand') : t('collapse')}
                                                            </button>

                                                            {!collapsedDays[`${day}-daycare-drop`] &&
                                                                timeOptions.map((time, i) => (
                                                                    <Toggle
                                                                        key={`${day}-daycare-dropOff-${time}-ddo-${i}`}
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

                                    {pickUpTimeRequiredDaycare && (
                                        <div className="mt-10">
                                            <h3 className="text-lg font-semibold mb-2 text-center">
                                                {t('daycare_pickup_times')}
                                            </h3>
                                            {daysOfWeek.map((day) => (
                                                <div key={day} className="mb-6">
                                                    {!noDaycareDays.has(day) && (
                                                        <div className="mt-2 space-y-1">
                                                            <button
                                                                className="text-sm text-blue-600 underline"
                                                                onClick={() => {
                                                                    setCollapsedDays((prev) => ({
                                                                        ...prev,
                                                                        [`${day}-daycare-pickup`]: !prev[`${day}-daycare-pickup`],
                                                                    }));
                                                                }}
                                                            >
                                                                {collapsedDays[`${day}-daycare-pickup`] ? t('expand') : t('collapse')}
                                                            </button>

                                                            {!collapsedDays[`${day}-daycare-pickup`] &&
                                                                timeOptions.map((time, i) => (
                                                                    <Toggle
                                                                        key={`${day}-daycare-pickUp-${time}-dpu-${i}`}
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
                                </>
                            )}

                            {offersBoarding && (
                                <>
                                    <Toggle
                                        label={t('require_drop_boarding')}
                                        checked={dropOffTimeRequiredBoarding}
                                        onChange={setDropOffTimeRequiredBoarding}
                                    />
                                    <Toggle
                                        label={t('require_pick_boarding')}
                                        checked={pickUpTimeRequiredBoarding}
                                        onChange={setPickUpTimeRequiredBoarding}
                                    />

                                    {dropOffTimeRequiredBoarding && (
                                        <div className="mt-10">
                                            <h3 className="text-lg font-semibold mb-2 text-center">{t('boarding_drop_times')}</h3>
                                            {daysOfWeek.map((day) => (
                                                <div key={day} className="mb-6">
                                                    <Toggle
                                                        label={`${t('no_boarding_day')} ${day}`}
                                                        checked={noBoardingDays.has(day)}
                                                        onChange={(val) => {
                                                            const updated = new Set(noBoardingDays);
                                                            val ? updated.add(day) : updated.delete(day);
                                                            setNoBoardingDays(updated);
                                                        }}
                                                    />

                                                    {!noBoardingDays.has(day) && (
                                                        <div className="mt-2 space-y-1">
                                                            <p className="font-semibold text-sm text-[color:var(--color-foreground)] mb-1">{day}</p>
                                                            <button
                                                                className="text-sm text-blue-600 underline"
                                                                onClick={() => {
                                                                    setCollapsedDays((prev) => ({
                                                                        ...prev,
                                                                        [`${day}-boarding-drop`]: !prev[`${day}-boarding-drop`],
                                                                    }));
                                                                }}
                                                            >
                                                                {collapsedDays[`${day}-boarding-drop`] ? t('expand') : t('collapse')}
                                                            </button>

                                                            {!collapsedDays[`${day}-boarding-drop`] &&
                                                                timeOptions.map((time, i) => (
                                                                    <Toggle
                                                                        key={`${day}-boarding-dropOff-${time}-bdo-${i}`}
                                                                        label={time}
                                                                        checked={(dropOffTimesBoarding[day] || []).includes(time)}
                                                                        onChange={() =>
                                                                            toggleDayTime('dropOff', 'boarding', day, time)
                                                                        }
                                                                    />
                                                                ))}
                                                        </div>
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                    )}

                                    {pickUpTimeRequiredBoarding && (
                                        <div className="mt-10">
                                            <h3 className="text-lg font-semibold mb-2 text-center">{t('boarding_pickup_times')}</h3>
                                            {daysOfWeek.map((day) => (
                                                <div key={day} className="mb-6">
                                                    {!noBoardingDays.has(day) && (
                                                        <div className="mt-2 space-y-1">
                                                            <p className="font-semibold text-sm text-[color:var(--color-foreground)] mb-1">{day}</p>
                                                            <button
                                                                className="text-sm text-blue-600 underline"
                                                                onClick={() => {
                                                                    setCollapsedDays((prev) => ({
                                                                        ...prev,
                                                                        [`${day}-boarding-pickup`]: !prev[`${day}-boarding-pickup`],
                                                                    }));
                                                                }}
                                                            >
                                                                {collapsedDays[`${day}-boarding-pickup`] ? t('expand') : t('collapse')}
                                                            </button>

                                                            {!collapsedDays[`${day}-boarding-pickup`] &&
                                                                timeOptions.map((time, i) => (
                                                                    <Toggle
                                                                        key={`${day}-boarding-pickUp-${time}-bpu-${i}`}
                                                                        label={time}
                                                                        checked={(pickUpTimesBoarding[day] || []).includes(time)}
                                                                        onChange={() =>
                                                                            toggleDayTime('pickUp', 'boarding', day, time)
                                                                        }
                                                                    />
                                                                ))}
                                                        </div>
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </>
                            )}
                        </div>

                        {/* ─────────────── Optional Feature Toggles ─────────────── */}
                        <div className="mt-10">
                            <h2 className="text-xl font-semibold text-[color:var(--color-accent)] text-center mb-4">
                                {t('optional_features_header')}
                            </h2>

                            <Toggle
                                label={t('employee_management_toggle')}
                                checked={optionalFeatures.employeeManagement}
                                onChange={(val) =>
                                    setOptionalFeatures((prev) => ({ ...prev, employeeManagement: val }))
                                }
                            />
                            <Toggle
                                label={t('state_paperwork_toggle')}
                                checked={optionalFeatures.statePaperworkLog}
                                onChange={(val) =>
                                    setOptionalFeatures((prev) => ({ ...prev, statePaperworkLog: val }))
                                }
                            />
                        </div>

                        {/* Save Button */}
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

function Toggle({
    label,
    checked,
    onChange
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
