'use client';

import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import {
    getFirestore,
    collection,
    getDocs,
    query,
    where,
    limit,
    doc,
    getDoc,
} from 'firebase/firestore';
import {
    getDatabase,
    ref as rtdbRef,
    onValue,
    off as rtdbOff,
    remove,
    DatabaseReference,
    DataSnapshot,
} from 'firebase/database';
import { initializeApp, getApps } from 'firebase/app';

// Ensure a default Firebase app exists on this route (fixes "app/no-app")
const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY!,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN!,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID!,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET!,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID!,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID!,
};
if (!getApps().length) initializeApp(firebaseConfig);

type FilterKey = 'daycare' | 'boarding' | 'grooming';

type CheckedInDog = {
    id: string;
    name: string;
    owner: string;
    type: string; // "Daycare" | "Boarding" (string for forward-compat)
    checkInTime: string; // ISO "yyyy-MM-dd'T'HH:mm:ssZ"
    groomingAddOns: string[];
    allergies?: string;
    pickUpDate?: string;
    medications?: string;
    medicationDetails?: string;
    spayedNeutered?: string;
    isAssessment?: boolean;
};

type CheckedInDogLive = CheckedInDog & { dateKey: string };

const DEFAULT_TZ = 'America/New_York';

export default function IndividualEmployeeDogsOnPropertyPage() {
    const t = useTranslations('individualEmployeeDogsOnProperty');
    const locale = useLocale();

    // ---------------------------------------------------------------------------
    // State
    // ---------------------------------------------------------------------------
    const [isBootstrapping, setIsBootstrapping] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const [userId, setUserId] = useState<string | null>(null);
    const [sanitizedBusinessId, setSanitizedBusinessId] = useState<string | null>(null);
    const [businessTimeZone, setBusinessTimeZone] = useState<string>(DEFAULT_TZ);

    const [filter, setFilter] = useState<FilterKey>('daycare');
    const [selectedDogId, setSelectedDogId] = useState<string | null>(null);

    const [dogsLive, setDogsLive] = useState<CheckedInDogLive[]>([]);
    const listenerRef = useRef<{ ref: DatabaseReference; cb: (snap: DataSnapshot) => void } | null>(
        null
    );

    // ---------------------------------------------------------------------------
    // Utilities
    // ---------------------------------------------------------------------------
    const sanitizeForRealtimeDB = (input: string): string => input.replace(/[.#$\[\]:/]/g, '-');

    const formatDateTimeMediumShort = (iso: string, timeZone: string): string => {
        const d = new Date(iso);
        return new Intl.DateTimeFormat(locale, {
            timeZone,
            dateStyle: 'medium',
            timeStyle: 'short',
        }).format(d);
    };

    const hasMedications = (d: CheckedInDog): boolean =>
        Boolean(d.medications && d.medications.trim().length > 0);

    const hasAllergies = (d: CheckedInDog): boolean =>
        Boolean(d.allergies && d.allergies.trim().length > 0);

    const hasGrooming = (d: CheckedInDog): boolean =>
        Array.isArray(d.groomingAddOns) && d.groomingAddOns.length > 0;

    const isIntact = (d: CheckedInDog): boolean =>
        (d.spayedNeutered ?? '').trim().toLowerCase() === 'no';

    const isAssessmentDaycare = (d: CheckedInDog): boolean =>
        d.type === 'Daycare' && Boolean(d.isAssessment);

    const parseCheckInTime = (iso: string): number => {
        const t = Date.parse(iso);
        return Number.isNaN(t) ? 0 : t;
    };

    // ---------------------------------------------------------------------------
    // Auth -> Invite -> Business TZ -> Subscribe to ALL current check-ins
    // ---------------------------------------------------------------------------
    useEffect(() => {
        const auth = getAuth();
        const unsub = onAuthStateChanged(auth, (u) => {
            if (u?.uid) setUserId(u.uid);
            else {
                setError('You must be logged in.');
                setIsBootstrapping(false);
            }
        });
        return () => unsub();
    }, []);

    const bootstrapForUser = useCallback(async (uid: string) => {
        try {
            setIsBootstrapping(true);
            setError(null);

            const fs = getFirestore();

            // 1) Find accepted employee invite
            const q = query(
                collection(fs, 'employeeInvites'),
                where('userId', '==', uid),
                where('status', '==', 'accepted'),
                limit(1)
            );
            const snap = await getDocs(q);
            if (snap.empty) {
                setError('No business access.');
                setIsBootstrapping(false);
                return;
            }
            const invite = snap.docs[0].data() as { businessId?: string };
            const bId = (invite.businessId ?? '').trim();
            if (!bId) {
                setError('No business access.');
                setIsBootstrapping(false);
                return;
            }

            // 2) Resolve business time zone (for displaying check-in times)
            let tz = DEFAULT_TZ;
            try {
                const bizDoc = await getDoc(doc(fs, 'businesses', bId));
                if (bizDoc.exists()) {
                    const d = bizDoc.data() as { timeZone?: string };
                    if (d?.timeZone && typeof d.timeZone === 'string') tz = d.timeZone;
                }
            } catch {
                // fall back to default
            }
            setBusinessTimeZone(tz);

            // 3) Sanitize for RTDB
            const sanitized = sanitizeForRealtimeDB(bId);
            setSanitizedBusinessId(sanitized);

            // 4) Subscribe once to ALL current check-ins under /checkIns/{businessId}
            subscribeAll(sanitized);
        } catch {
            setError('Failed to initialize. Please try again.');
            setIsBootstrapping(false);
        }
    }, []);

    useEffect(() => {
        if (userId) bootstrapForUser(userId);
    }, [userId, bootstrapForUser]);

    const subscribeAll = (sanitizedBId: string) => {
        const db = getDatabase();
        const ref = rtdbRef(db, `checkIns/${sanitizedBId}`);
        const cb = (snap: DataSnapshot) => {
            const root = snap.val();
            const list: CheckedInDogLive[] = [];

            if (root && typeof root === 'object') {
                Object.keys(root).forEach((dateKey) => {
                    const bucket = root[dateKey];
                    if (!bucket || typeof bucket !== 'object') return;

                    Object.keys(bucket).forEach((dogId) => {
                        const raw = bucket[dogId] ?? {};
                        // Normalize grooming add-ons to array of strings
                        let grooming: string[] = [];
                        if (Array.isArray(raw.groomingAddOns)) {
                            grooming = raw.groomingAddOns.filter(Boolean);
                        } else if (raw.groomingAddOns && typeof raw.groomingAddOns === 'object') {
                            try {
                                grooming = Object.values(raw.groomingAddOns).map((x) => String(x));
                            } catch {
                                grooming = [];
                            }
                        }

                        const dog: CheckedInDogLive = {
                            id: dogId,
                            dateKey, // internal only, used for checkout path
                            name: String(raw.name ?? ''),
                            owner: String(raw.owner ?? ''),
                            type: String(raw.type ?? ''),
                            checkInTime: String(raw.checkInTime ?? ''),
                            groomingAddOns: grooming,
                            allergies: raw.allergies ? String(raw.allergies) : undefined,
                            pickUpDate: raw.pickUpDate ? String(raw.pickUpDate) : undefined,
                            medications: raw.medications ? String(raw.medications) : undefined,
                            medicationDetails: raw.medicationDetails ? String(raw.medicationDetails) : undefined,
                            spayedNeutered: raw.spayedNeutered ? String(raw.spayedNeutered) : undefined,
                            isAssessment: Boolean(raw.isAssessment),
                        };
                        list.push(dog);
                    });
                });
            }

            setDogsLive(list);
            setIsBootstrapping(false);
        };

        onValue(ref, cb);
        listenerRef.current = { ref, cb };
    };

    useEffect(() => {
        return () => {
            if (listenerRef.current) {
                const { ref, cb } = listenerRef.current;
                try {
                    rtdbOff(ref, 'value', cb);
                } catch {
                    // no-op
                }
            }
        };
    }, []);

    // ---------------------------------------------------------------------------
    // Derived data
    // ---------------------------------------------------------------------------
    const filteredDogs = useMemo(() => {
        const f = dogsLive.filter((d) => {
            if (filter === 'daycare') return d.type === 'Daycare';
            if (filter === 'boarding') return d.type === 'Boarding';
            return hasGrooming(d);
        });
        return f.sort((a, b) => parseCheckInTime(b.checkInTime) - parseCheckInTime(a.checkInTime));
    }, [dogsLive, filter]);

    // ---------------------------------------------------------------------------
    // Actions
    // ---------------------------------------------------------------------------
    const onToggleDogDetails = (dogId: string) => {
        setSelectedDogId((curr) => (curr === dogId ? null : dogId));
    };

    const onSelectFilter = (fk: FilterKey) => setFilter(fk);

    const onCheckOutDog = async (dateKey: string, dog: CheckedInDog) => {
        if (!sanitizedBusinessId) return;
        const ok = window.confirm(`Check out ${dog.name}?`);
        if (!ok) return;

        try {
            const db = getDatabase();
            const path = rtdbRef(db, `checkIns/${sanitizedBusinessId}/${dateKey}/${dog.id}`);
            await remove(path);
            if (selectedDogId === dog.id) setSelectedDogId(null);
        } catch {
            // ignore; live listener will keep us in sync anyway
        }
    };

    // ---------------------------------------------------------------------------
    // UI
    // ---------------------------------------------------------------------------
    const SegmentedControl = () => {
        const base = 'px-3 py-2 text-sm font-medium rounded-xl border transition-colors select-none';
        const sel =
            'bg-black text-white border-black dark:bg-white dark:text-black dark:border-white';
        const unsel =
            'bg-white text-black border-gray-300 hover:bg-gray-50 dark:bg-neutral-900 dark:text-white dark:border-neutral-700 dark:hover:bg-neutral-800';

        return (
            <div className="inline-flex items-center gap-2 p-1 rounded-2xl bg-gray-100 dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800">
                <button
                    type="button"
                    onClick={() => onSelectFilter('daycare')}
                    className={`${base} ${filter === 'daycare' ? sel : unsel}`}
                    aria-pressed={filter === 'daycare'}
                >
                    {t('filter_daycare') || 'Daycare'}
                </button>
                <button
                    type="button"
                    onClick={() => onSelectFilter('boarding')}
                    className={`${base} ${filter === 'boarding' ? sel : unsel}`}
                    aria-pressed={filter === 'boarding'}
                >
                    {t('filter_boarding') || 'Boarding'}
                </button>
                <button
                    type="button"
                    onClick={() => onSelectFilter('grooming')}
                    className={`${base} ${filter === 'grooming' ? sel : unsel}`}
                    aria-pressed={filter === 'grooming'}
                >
                    {t('filter_grooming') || 'Grooming'}
                </button>
            </div>
        );
    };

    const DogCard: React.FC<{ dog: CheckedInDogLive }> = ({ dog }) => {
        const meds = hasMedications(dog);
        const allergies = hasAllergies(dog);
        const grooming = hasGrooming(dog);
        const intact = isIntact(dog);
        const showAssessment = isAssessmentDaycare(dog);

        return (
            <div className="rounded-2xl border border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-sm overflow-hidden">
                <div className="w-full p-4 flex items-center justify-between gap-4">
                    <button
                        type="button"
                        onClick={() => onToggleDogDetails(dog.id)}
                        className="text-left flex-1"
                        aria-expanded={selectedDogId === dog.id}
                    >
                        <div className="flex flex-wrap items-center gap-2">
                            <span className="text-base sm:text-lg font-semibold">🐶 {dog.name}</span>
                            {meds ? <span aria-label="medications">💊</span> : null}
                            {allergies ? <span aria-label="allergies">⚠️</span> : null}
                            {grooming ? <span aria-label="grooming">✂️</span> : null}
                            {intact ? <span className="ml-1 text-xs font-bold text-red-600">INTACT</span> : null}
                            {showAssessment ? (
                                <span className="ml-1 text-[10px] font-bold px-2 py-1 rounded-md bg-orange-200/60 text-orange-700">
                                    Assessment
                                </span>
                            ) : null}
                        </div>
                    </button>

                    <div className="flex items-center gap-3 shrink-0">
                        <button
                            type="button"
                            onClick={() => onCheckOutDog(dog.dateKey, dog)}
                            className="px-3 py-2 text-sm rounded-lg bg-emerald-600 text-white hover:bg-emerald-700 focus:outline-none"
                            aria-label="Check Out"
                        >
                            {t('check_out_button') || 'Check Out'}
                        </button>
                        <svg
                            className={`h-4 w-4 transition-transform ${selectedDogId === dog.id ? 'rotate-180' : ''}`}
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                        >
                            <path
                                fillRule="evenodd"
                                d="M5.23 7.21a.75.75 0 011.06.02L10 11.188l3.71-3.957a.75.75 0 111.1 1.02l-4.25 4.53a.75.75 0 01-1.1 0l-4.25-4.53a.75.75 0 01.02-1.06z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </div>
                </div>

                {selectedDogId === dog.id ? (
                    <div className="px-4 pb-4 text-sm text-gray-800 dark:text-gray-200">
                        <div className="mt-1">Owner: {dog.owner}</div>
                        <div className="mt-1">Type: {dog.type}</div>
                        <div className="mt-1">
                            Checked in:&nbsp;{formatDateTimeMediumShort(dog.checkInTime, businessTimeZone)}
                        </div>

                        {showAssessment ? (
                            <div className="mt-2">
                                <button
                                    type="button"
                                    disabled
                                    title="Coming soon"
                                    className="px-3 py-1.5 text-xs rounded-md border border-gray-300 dark:border-neutral-700 bg-gray-100 dark:bg-neutral-800 text-gray-600 dark:text-gray-400 cursor-not-allowed"
                                >
                                    {t('view_assessment_button') || 'View Assessment'}
                                </button>
                            </div>
                        ) : null}

                        {allergies ? <ClampText label="Allergies" text={dog.allergies ?? ''} /> : null}

                        {meds ? (
                            <ClampText
                                label="Medications"
                                text={
                                    dog.medicationDetails && dog.medicationDetails.trim().length > 0
                                        ? dog.medicationDetails
                                        : 'Yes'
                                }
                            />
                        ) : null}

                        {dog.pickUpDate ? <div className="mt-1">Pickup Date: {dog.pickUpDate}</div> : null}

                        {grooming ? (
                            <ClampText label="Grooming Services" text={dog.groomingAddOns.join(', ')} />
                        ) : null}
                    </div>
                ) : null}
            </div>
        );
    };

    const ClampText: React.FC<{ label: string; text: string }> = ({ label, text }) => {
        const [expanded, setExpanded] = useState(false);
        const maxChars = 140;
        const isLong = text.length > maxChars;
        const shown = expanded ? text : isLong ? `${text.slice(0, maxChars)}…` : text;

        return (
            <div className="mt-1">
                <span className="font-medium">{label}: </span>
                <span>{shown}</span>
                {isLong ? (
                    <button
                        type="button"
                        className="ml-2 text-emerald-700 dark:text-emerald-400 hover:underline text-xs"
                        onClick={() => setExpanded((v) => !v)}
                    >
                        {expanded ? (t('show_less') || 'Show less') : (t('show_more') || 'Show more')}
                    </button>
                ) : null}
            </div>
        );
    };

    // ---------------------------------------------------------------------------
    // Render
    // ---------------------------------------------------------------------------
    return (
        <main className="w-full max-w-md sm:max-w-lg mx-auto px-2 sm:px-4 py-6">
            <header className="mb-5">
                <h1 className="text-2xl sm:text-3xl font-bold text-[color:var(--color-accent)]">
                    {t('title')}
                </h1>
                <p className="mt-1 text-[color:var(--color-accent)] opacity-80">
                    {t('subtitle')}
                </p>
            </header>

            {/* Filters */}
            <div className="mb-5">
                <SegmentedControl />
            </div>

            {/* Loading / Error */}
            {isBootstrapping ? (
                <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                    <span className="inline-block h-4 w-4 rounded-full border-2 border-gray-400 border-t-transparent animate-spin" />
                    <span>{t('loading') || 'Loading…'}</span>
                </div>
            ) : error ? (
                <div className="rounded-xl border border-red-300 bg-red-50 text-red-800 dark:border-red-800 dark:bg-red-950/40 dark:text-red-300 px-4 py-3">
                    {error}
                </div>
            ) : filteredDogs.length === 0 ? (
                <div className="text-gray-600 dark:text-gray-400">
                    {t('empty_state') || 'No dogs on property.'}
                </div>
            ) : (
                <div className="space-y-3">
                    {filteredDogs.map((dog) => (
                        <DogCard key={`dog-${dog.dateKey}-${dog.id}`} dog={dog} />
                    ))}
                </div>
            )}
        </main>
    );
}
