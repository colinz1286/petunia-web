'use client';

import { useEffect, useState, useRef, useCallback } from 'react';
import { getAuth } from 'firebase/auth';
import {
    getFirestore,
    collection,
    query,
    where,
    getDocs,
    doc,
    updateDoc
} from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import { useRouter } from 'next/navigation';
import { useTranslations, useLocale } from 'next-intl';

// ✅ Firebase config
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

export default function WalkerSitterBusinessSettingsPage() {
    const t = useTranslations('walkerSitterBusinessSettings');
    const _locale = useLocale(); // eslint-disable-line @typescript-eslint/no-unused-vars
    const router = useRouter();

    // --- Business Info
    const [businessId, setBusinessId] = useState('');
    const [businessName, setBusinessName] = useState('');
    const [businessPhone, setBusinessPhone] = useState('');
    const [businessAddress, setBusinessAddress] = useState('');
    const [businessBio, setBusinessBio] = useState('');
    const BIO_LIMIT = 500;

    // --- General
    const [enableWalking, setEnableWalking] = useState(false);
    const [enableSitting, setEnableSitting] = useState(false);
    const [serviceRadius, setServiceRadius] = useState(5);
    const [operatingHours, setOperatingHours] = useState<Record<string, { open: string; close: string }>>({});
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const timeOptions = Array.from({ length: 24 * 4 }, (_, i) => {
        const minutes = i * 15;
        const hour = Math.floor(minutes / 60);
        const minute = minutes % 60;
        const period = hour < 12 ? 'AM' : 'PM';
        const formattedHour = hour % 12 === 0 ? 12 : hour % 12;
        return `${formattedHour}:${minute.toString().padStart(2, '0')} ${period}`;
    });

    // --- Waivers
    const [walkerWaiverRequired, setWalkerWaiverRequired] = useState(false);
    const [walkerWaiverText, setWalkerWaiverText] = useState('');
    const [sitterWaiverRequired, setSitterWaiverRequired] = useState(false);
    const [sitterWaiverText, setSitterWaiverText] = useState('');

    // --- Cancellation
    const [cancellationPolicy, setCancellationPolicy] = useState('No Refund');
    const cancellationOptions = ['No Refund', 'Partial Refund', 'Full Refund'];

    // --- Walker Settings
    const [walkDurations, setWalkDurations] = useState<number[]>([30, 60]);
    const [walkRates, setWalkRates] = useState<Record<number, number>>({ 30: 20, 60: 35 });
    const [maxDogsPerWalk, setMaxDogsPerWalk] = useState(2);

    // --- Sitter Settings
    const [sittingTypes, setSittingTypes] = useState<Record<string, boolean>>({
        'Drop-in Visits': false,
        'Overnight (Owner’s Home)': false,
        'Boarding (Sitter’s Home)': false,
    });
    const [supportedAnimals, setSupportedAnimals] = useState<Record<string, boolean>>({
        Dogs: true,
        Cats: true,
        Birds: false,
        Reptiles: false,
        Other: false,
    });
    const [baseRates, setBaseRates] = useState<Record<string, number>>({
        'Per Visit': 25.0,
        'Per Night': 50.0,
    });
    const [includedServices, setIncludedServices] = useState<string[]>(['Feeding', 'Playtime']);
    const [addOns, setAddOns] = useState<Record<string, number>>({
        Walk: 10.0,
        Brushing: 8.0,
    });
    const [maxPetsAllowed, setMaxPetsAllowed] = useState(3);
    const [minNoticeHours, setMinNoticeHours] = useState(12);
    const [maxBookingsPerDay, setMaxBookingsPerDay] = useState(5);
    const [bufferMinutes, setBufferMinutes] = useState(30);

    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);

    // --- Dirty tracking & leave prompt
    const [dirty, setDirty] = useState(false);
    const [showLeavePrompt, setShowLeavePrompt] = useState(false);
    const nextPathRef = useRef<string | null>(null);
    const initialJsonRef = useRef<string>('');

    // --- New row inputs for dynamic lists
    const [newService, setNewService] = useState('');
    const [newAddOnLabel, setNewAddOnLabel] = useState('');
    const [newAddOnPrice, setNewAddOnPrice] = useState<number>(0);

    // --- Load business data
    useEffect(() => {
        const unsub = auth.onAuthStateChanged((user) => {
            if (!user) return;
            const load = async () => {
                // 1) Try array-based ownerIds first
                let docSnap: any = null;
                {
                    const q1 = query(collection(db, 'businesses'), where('ownerIds', 'array-contains', user.uid));
                    const s1 = await getDocs(q1);
                    docSnap = s1.docs[0] || null;
                }
                // 2) Fallback to legacy single ownerId
                if (!docSnap) {
                    const q2 = query(collection(db, 'businesses'), where('ownerId', '==', user.uid));
                    const s2 = await getDocs(q2);
                    docSnap = s2.docs[0] || null;
                }
                if (!docSnap) return;

                const data = docSnap.data();
                setBusinessId(docSnap.id);
                setBusinessName(data.businessName || '');
                setBusinessPhone(data.businessPhone || '');
                if (data.businessAddress && typeof data.businessAddress === 'object') {
                    const addr = data.businessAddress;
                    setBusinessAddress(`${addr.street || ''}, ${addr.city || ''}, ${addr.state || ''} ${addr.zipCode || ''}`.trim());
                } else {
                    setBusinessAddress(data.businessAddress || '');
                }
                setBusinessBio(data.businessBio || '');
                setEnableWalking(data.enableWalking || false);
                setEnableSitting(data.enableSitting || false);
                setServiceRadius(data.serviceRadius || 5);
                setOperatingHours(data.operatingHours || {});
                setCancellationPolicy(data.cancellationPolicy || 'No Refund');

                setWalkerWaiverRequired(data.walkerWaiverRequired || false);
                setWalkerWaiverText(data.walkerWaiverText || '');
                setSitterWaiverRequired(data.sitterWaiverRequired || false);
                setSitterWaiverText(data.sitterWaiverText || '');

                if (data.walkerSettings) {
                    setWalkDurations(data.walkerSettings.durations || [30, 60]);
                    const rates = data.walkerSettings.rates || {};
                    const parsed: Record<number, number> = {};
                    Object.keys(rates).forEach((k) => parsed[parseInt(k)] = rates[k]);
                    setWalkRates(parsed);
                    setMaxDogsPerWalk(data.walkerSettings.maxDogsPerWalk || 2);
                }

                if (data.sitterSettings) {
                    setSittingTypes(data.sitterSettings.types || {});
                    setSupportedAnimals(data.sitterSettings.animals || {});
                    setBaseRates(data.sitterSettings.baseRates || {});
                    setIncludedServices(data.sitterSettings.includedServices || []);
                    setAddOns(data.sitterSettings.addOns || {});
                    setMaxPetsAllowed(data.sitterSettings.maxPetsAllowed || 3);
                    setMinNoticeHours(data.sitterSettings.minNoticeHours || 12);
                    setMaxBookingsPerDay(data.sitterSettings.maxBookingsPerDay || 5);
                    setBufferMinutes(data.sitterSettings.bufferMinutes || 30);
                }

                setLoading(false);
            };
            load();
        });
        return () => unsub();

        // After first load completes, capture a clean snapshot
        useEffect(() => {
            if (!loading) {
                initialJsonRef.current = JSON.stringify(buildSettingsPayload());
                // Force one compare right away
                const now = JSON.stringify(buildSettingsPayload());
                setDirty(now !== initialJsonRef.current);
            }
        }, [loading, buildSettingsPayload]);

        // Watch all fields; flip dirty when payload diverges from snapshot
        useEffect(() => {
            if (loading || !initialJsonRef.current) return;
            const now = JSON.stringify(buildSettingsPayload());
            setDirty(now !== initialJsonRef.current);
        }, [loading, buildSettingsPayload]);

        // Warn on hard navigation (refresh/close tab) if dirty
        useEffect(() => {
            const handler = (e: BeforeUnloadEvent) => {
                if (!dirty) return;
                e.preventDefault();
                e.returnValue = '';
            };
            window.addEventListener('beforeunload', handler);
            return () => window.removeEventListener('beforeunload', handler);
        }, [dirty]);
    }, []);

    // --- Build payload used for both save() and dirty comparison
    const buildSettingsPayload = useCallback(() => {
        const walkRatesStringKeys: Record<string, number> = {};
        Object.entries(walkRates).forEach(([k, v]) => {
            const n = Number(v);
            if (!Number.isNaN(n)) walkRatesStringKeys[String(k)] = n;
        });

        return {
            businessBio,
            enableWalking,
            enableSitting,
            serviceRadius,
            operatingHours,
            cancellationPolicy,

            walkerWaiverRequired,
            walkerWaiverText,
            sitterWaiverRequired,
            sitterWaiverText,

            walkerSettings: {
                durations: walkDurations,
                rates: walkRatesStringKeys,
                maxDogsPerWalk
            },
            sitterSettings: {
                types: sittingTypes,
                animals: supportedAnimals,
                baseRates,
                includedServices,
                addOns,
                maxPetsAllowed,
                minNoticeHours,
                maxBookingsPerDay,
                bufferMinutes
            }
        };
    }, [
        businessBio, enableWalking, enableSitting, serviceRadius, operatingHours, cancellationPolicy,
        walkerWaiverRequired, walkerWaiverText, sitterWaiverRequired, sitterWaiverText,
        walkDurations, walkRates, maxDogsPerWalk,
        sittingTypes, supportedAnimals, baseRates, includedServices, addOns,
        maxPetsAllowed, minNoticeHours, maxBookingsPerDay, bufferMinutes
    ]);

    // --- Save settings
    const saveSettings = async () => {
        if (!businessId) return;
        setSaving(true);

        const payload = buildSettingsPayload();
        await updateDoc(doc(db, 'businesses', businessId), payload);

        // Mark clean after successful save
        initialJsonRef.current = JSON.stringify(payload);
        setDirty(false);
        setSaving(false);
    };

    // --- UI
    return (
        <div className="w-full max-w-2xl mx-auto px-4 py-8 text-[color:var(--color-foreground)]">
            {/* Back */}
            <button
                onClick={() => {
                    if (dirty) {
                        nextPathRef.current = '/walkersitterdashboard';
                        setShowLeavePrompt(true);
                    } else {
                        router.push('/walkersitterdashboard');
                    }
                }}
                className="text-sm text-blue-600 underline mb-4"
            >
                ← {t('back_to_dashboard')}
            </button>

            <h1 className="text-3xl font-bold text-[color:var(--color-accent)] mb-6 text-center">
                {t('business_settings_title')}
            </h1>

            {loading ? <p>{t('loading')}</p> : (
                <>
                    {/* General Info */}
                    <section className="space-y-3 mb-6">
                        <label className="block">
                            <span>{t('business_name_field')}</span>
                            <input disabled value={businessName} className="w-full border px-2 py-1 rounded bg-gray-100" />
                        </label>
                        <label className="block">
                            <span>{t('business_phone_field')}</span>
                            <input disabled value={businessPhone} className="w-full border px-2 py-1 rounded bg-gray-100" />
                        </label>
                        <label className="block">
                            <span>{t('business_address_field')}</span>
                            <input disabled value={businessAddress} className="w-full border px-2 py-1 rounded bg-gray-100" />
                        </label>
                        <label className="block">
                            <span>{t('business_bio_header')}</span>
                            <textarea
                                value={businessBio}
                                onChange={(e) => setBusinessBio(e.target.value)}
                                className="w-full h-48 border px-3 py-2 rounded resize-y text-sm leading-relaxed"
                                rows={10}
                            />
                        </label>
                        <div className="mt-1 flex items-center justify-between">
                            <span
                                className={`text-xs ${businessBio.length > BIO_LIMIT ? 'text-red-600' : 'text-gray-500'}`}
                            >
                                {t('business_bio_counter', { used: businessBio.length, limit: BIO_LIMIT })}
                            </span>
                        </div>
                        <label className="block">
                            <span>{t('ws_service_radius')}</span>
                            <input type="number" value={serviceRadius} onChange={(e) => setServiceRadius(parseInt(e.target.value) || 0)} className="w-full border rounded p-2" />
                        </label>
                        <label className="block">
                            <span>{t('cancellation_policy')}</span>
                            <select value={cancellationPolicy} onChange={(e) => setCancellationPolicy(e.target.value)} className="w-full border rounded p-2">
                                {cancellationOptions.map(opt => <option key={opt}>{opt}</option>)}
                            </select>
                        </label>
                    </section>

                    {/* Operating Hours Section */}
                    <section className="mt-8">
                        <h3 className="font-semibold text-lg text-[color:var(--color-accent)] mb-2">
                            {t('ws_operating_hours')}
                        </h3>
                        {daysOfWeek.map((day) => (
                            <div key={day} className="mb-4">
                                <span className="block font-medium mb-1">{day}</span>
                                <div className="flex gap-4">
                                    <label className="flex flex-col text-sm">
                                        {t('open_label')}
                                        <select
                                            value={operatingHours[day]?.open || ''}
                                            onChange={(e) =>
                                                setOperatingHours({
                                                    ...operatingHours,
                                                    [day]: { ...operatingHours[day], open: e.target.value }
                                                })
                                            }
                                            className="border rounded px-2 py-1"
                                        >
                                            <option value="">{t('select_time')}</option>
                                            {timeOptions.map((time) => (
                                                <option key={`${day}-open-${time}`} value={time}>
                                                    {time}
                                                </option>
                                            ))}
                                        </select>
                                    </label>
                                    <label className="flex flex-col text-sm">
                                        {t('close_label')}
                                        <select
                                            value={operatingHours[day]?.close || ''}
                                            onChange={(e) =>
                                                setOperatingHours({
                                                    ...operatingHours,
                                                    [day]: { ...operatingHours[day], close: e.target.value }
                                                })
                                            }
                                            className="border rounded px-2 py-1"
                                        >
                                            <option value="">{t('select_time')}</option>
                                            {timeOptions.map((time) => (
                                                <option key={`${day}-close-${time}`} value={time}>
                                                    {time}
                                                </option>
                                            ))}
                                        </select>
                                    </label>
                                </div>
                            </div>
                        ))}
                    </section>

                    {/* Walking toggle */}
                    <Toggle label={t('enable_walking_toggle')} checked={enableWalking} onChange={setEnableWalking} />
                    <Toggle label={t('enable_sitting_toggle')} checked={enableSitting} onChange={setEnableSitting} />

                    {/* Walker Section */}
                    {enableWalking && (
                        <section className="mt-6">
                            <h2 className="font-bold">{t('ws_walker_section_title')}</h2>
                            {walkDurations.map((d) => (
                                <label key={d} className="flex justify-between">
                                    <span>{d} min</span>
                                    <input type="number" value={walkRates[d] || 0} onChange={(e) => setWalkRates({ ...walkRates, [d]: parseFloat(e.target.value) })} className="border rounded w-20 text-right" />
                                </label>
                            ))}
                            <label className="block mt-2">
                                <span>{t('ws_max_dogs_per_walk')}</span>
                                <input type="number" value={maxDogsPerWalk} onChange={(e) => setMaxDogsPerWalk(parseInt(e.target.value) || 1)} className="border rounded p-1 w-20" />
                            </label>
                            <Toggle label={t('ws_require_walker_waiver')} checked={walkerWaiverRequired} onChange={setWalkerWaiverRequired} />
                            {walkerWaiverRequired && (
                                <textarea
                                    value={walkerWaiverText}
                                    onChange={(e) => setWalkerWaiverText(e.target.value)}
                                    className="w-full h-48 border px-3 py-2 rounded resize-y text-sm leading-relaxed mt-2"
                                    rows={10}
                                />
                            )}
                        </section>
                    )}

                    {/* Sitter Section */}
                    {enableSitting && (
                        <section className="mt-6">
                            <h2 className="font-bold">{t('ws_sitter_section_title')}</h2>
                            {Object.keys(sittingTypes).map((k) => (
                                <Toggle key={k} label={k} checked={sittingTypes[k]} onChange={(val) => setSittingTypes({ ...sittingTypes, [k]: val })} />
                            ))}
                            {Object.keys(supportedAnimals).map((a) => (
                                <Toggle key={a} label={a} checked={supportedAnimals[a]} onChange={(val) => setSupportedAnimals({ ...supportedAnimals, [a]: val })} />
                            ))}
                            {/* Pricing Section */}
                            <div className="mt-4">
                                <h3 className="font-semibold text-sm text-[color:var(--color-accent)] mb-2">
                                    {t('ws_pricing_section')}
                                </h3>

                                <label className="flex justify-between items-center mb-2">
                                    <span>{t('ws_cost_per_night')}</span>
                                    <input
                                        type="number"
                                        value={baseRates['Per Night'] || 0}
                                        onChange={(e) =>
                                            setBaseRates({ ...baseRates, ['Per Night']: parseFloat(e.target.value) })
                                        }
                                        className="border rounded w-24 text-right"
                                    />
                                </label>

                                <label className="flex justify-between items-center">
                                    <span>{t('ws_cost_per_visit')}</span>
                                    <input
                                        type="number"
                                        value={baseRates['Per Visit'] || 0}
                                        onChange={(e) =>
                                            setBaseRates({ ...baseRates, ['Per Visit']: parseFloat(e.target.value) })
                                        }
                                        className="border rounded w-24 text-right"
                                    />
                                </label>
                            </div>

                            {/* Included Services */}
                            <div className="mt-4">
                                <h3 className="font-semibold text-sm text-[color:var(--color-accent)] mb-2">
                                    {t('ws_included_services')}
                                </h3>

                                {includedServices.length === 0 && (
                                    <p className="text-sm text-gray-500">{t('ws_no_services')}</p>
                                )}

                                {includedServices.map((svc, i) => (
                                    <div key={`svc-${i}`} className="flex items-center gap-2 mb-2">
                                        <input
                                            value={svc}
                                            onChange={(e) => {
                                                const next = [...includedServices];
                                                next[i] = e.target.value;
                                                setIncludedServices(next);
                                            }}
                                            className="flex-1 border rounded px-2 py-1"
                                            placeholder={t('ws_service_placeholder')}
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setIncludedServices(includedServices.filter((_, j) => j !== i))}
                                            className="px-2 py-1 border rounded"
                                        >
                                            {t('remove')}
                                        </button>
                                    </div>
                                ))}

                                <div className="flex gap-2">
                                    <input
                                        value={newService}
                                        onChange={(e) => setNewService(e.target.value)}
                                        className="flex-1 border rounded px-2 py-1"
                                        placeholder={t('ws_service_new_placeholder')}
                                    />
                                    <button
                                        type="button"
                                        onClick={() => {
                                            const label = newService.trim();
                                            if (label.length > 0) {
                                                setIncludedServices([...includedServices, label]);
                                                setNewService('');
                                            }
                                        }}
                                        className="px-3 py-1 bg-[#2c4a30] text-white rounded"
                                    >
                                        {t('add')}
                                    </button>
                                </div>
                            </div>

                            {/* Add-Ons */}
                            <div className="mt-6">
                                <h3 className="font-semibold text-sm text-[color:var(--color-accent)] mb-2">
                                    {t('ws_add_ons')}
                                </h3>

                                {Object.keys(addOns).length === 0 && (
                                    <p className="text-sm text-gray-500">{t('ws_no_add_ons')}</p>
                                )}

                                {Object.entries(addOns).map(([label, price]) => (
                                    <div key={`addon-${label}`} className="flex items-center gap-2 mb-2">
                                        <input
                                            value={label}
                                            onChange={(e) => {
                                                const newLabel = e.target.value;
                                                setAddOns((prev) => {
                                                    const { [label]: oldVal, ...rest } = prev;
                                                    return newLabel ? { ...rest, [newLabel]: oldVal ?? 0 } : rest;
                                                });
                                            }}
                                            className="flex-1 border rounded px-2 py-1"
                                            placeholder={t('ws_add_on_label_placeholder')}
                                        />
                                        <input
                                            type="number"
                                            value={Number(price)}
                                            onChange={(e) => {
                                                const val = parseFloat(e.target.value);
                                                setAddOns((prev) => ({ ...prev, [label]: Number.isNaN(val) ? 0 : val }));
                                            }}
                                            className="w-28 border rounded px-2 py-1 text-right"
                                            placeholder="0"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => {
                                                setAddOns((prev) => {
                                                    const copy = { ...prev };
                                                    delete copy[label];
                                                    return copy;
                                                });
                                            }}
                                            className="px-2 py-1 border rounded"
                                        >
                                            {t('remove')}
                                        </button>
                                    </div>
                                ))}

                                <div className="flex items-center gap-2">
                                    <input
                                        value={newAddOnLabel}
                                        onChange={(e) => setNewAddOnLabel(e.target.value)}
                                        className="flex-1 border rounded px-2 py-1"
                                        placeholder={t('ws_add_on_label_placeholder')}
                                    />
                                    <input
                                        type="number"
                                        value={newAddOnPrice}
                                        onChange={(e) => setNewAddOnPrice(parseFloat(e.target.value) || 0)}
                                        className="w-28 border rounded px-2 py-1 text-right"
                                        placeholder="0"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => {
                                            const label = newAddOnLabel.trim();
                                            if (label.length > 0) {
                                                setAddOns({ ...addOns, [label]: newAddOnPrice || 0 });
                                                setNewAddOnLabel('');
                                                setNewAddOnPrice(0);
                                            }
                                        }}
                                        className="px-3 py-1 bg-[#2c4a30] text-white rounded"
                                    >
                                        {t('add')}
                                    </button>
                                </div>
                            </div>

                            <label className="block mt-2">
                                <span>{t('ws_max_pets_allowed')}</span>
                                <input type="number" value={maxPetsAllowed} onChange={(e) => setMaxPetsAllowed(parseInt(e.target.value) || 1)} className="border rounded p-1 w-20" />
                            </label>
                            <label className="block mt-2">
                                <span>{t('ws_min_notice_hours')}</span>
                                <input type="number" value={minNoticeHours} onChange={(e) => setMinNoticeHours(parseInt(e.target.value) || 1)} className="border rounded p-1 w-20" />
                            </label>
                            <label className="block mt-2">
                                <span>{t('ws_max_bookings_per_day')}</span>
                                <input type="number" value={maxBookingsPerDay} onChange={(e) => setMaxBookingsPerDay(parseInt(e.target.value) || 1)} className="border rounded p-1 w-20" />
                            </label>
                            <label className="block mt-2">
                                <span>{t('ws_buffer_minutes')}</span>
                                <input type="number" value={bufferMinutes} onChange={(e) => setBufferMinutes(parseInt(e.target.value) || 0)} className="border rounded p-1 w-20" />
                            </label>
                            <Toggle label={t('ws_require_sitter_waiver')} checked={sitterWaiverRequired} onChange={setSitterWaiverRequired} />
                            {sitterWaiverRequired && (
                                <textarea
                                    value={sitterWaiverText}
                                    onChange={(e) => setSitterWaiverText(e.target.value)}
                                    className="w-full h-48 border px-3 py-2 rounded resize-y text-sm leading-relaxed mt-2"
                                    rows={10}
                                />
                            )}
                        </section>
                    )}

                    {/* Save */}
                    <button onClick={saveSettings} disabled={saving} className="block w-full bg-[#2c4a30] text-white px-4 py-3 rounded mt-6">
                        {saving ? t('saving') : t('save_changes_button')}
                    </button>
                </>
            )}

            {showLeavePrompt && (
                <LeavePrompt
                    title={t('save_changes_prompt')}
                    message={t('unsaved_changes_message')}
                    saveLabel={t('save_changes_yes')}
                    discardLabel={t('save_changes_no')}
                    cancelLabel={t('cancel_button')}
                    saving={saving}
                    onSave={async () => {
                        await saveSettings();
                        setShowLeavePrompt(false);
                        const path = nextPathRef.current || '/walkersitterdashboard';
                        nextPathRef.current = null;
                        router.push(path);
                    }}
                    onDiscard={() => {
                        setShowLeavePrompt(false);
                        const path = nextPathRef.current || '/walkersitterdashboard';
                        nextPathRef.current = null;
                        router.push(path);
                    }}
                    onCancel={() => setShowLeavePrompt(false)}
                />
            )}
        </div>
    );
}

// ✅ Toggle component
function Toggle({ label, checked, onChange }: { label: string; checked: boolean; onChange: (val: boolean) => void }) {
    return (
        <label className="flex items-center gap-2">
            <input type="checkbox" checked={checked} onChange={(e) => onChange(e.target.checked)} className="accent-[#2c4a30] w-5 h-5" />
            <span>{label}</span>
        </label>
    );
}

function LeavePrompt({
    title,
    message,
    saveLabel,
    discardLabel,
    cancelLabel,
    onSave,
    onDiscard,
    onCancel,
    saving
}: {
    title: string;
    message: string;
    saveLabel: string;
    discardLabel: string;
    cancelLabel: string;
    onSave: () => void;
    onDiscard: () => void;
    onCancel: () => void;
    saving: boolean;
}) {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
            <div className="w-full max-w-md rounded-lg bg-white p-4 shadow-lg">
                <h3 className="text-lg font-semibold mb-2">{title}</h3>
                <p className="text-sm text-gray-700 mb-4">{message}</p>
                <div className="flex justify-end gap-2">
                    <button onClick={onCancel} className="px-3 py-2 border rounded">
                        {cancelLabel}
                    </button>
                    <button onClick={onDiscard} className="px-3 py-2 border rounded">
                        {discardLabel}
                    </button>
                    <button onClick={onSave} disabled={saving} className="px-3 py-2 rounded bg-[#2c4a30] text-white">
                        {saving ? 'Saving…' : saveLabel}
                    </button>
                </div>
            </div>
        </div>
    );
}
