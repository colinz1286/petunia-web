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
    setDoc,
    serverTimestamp,
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
const BATH_SIZE_OPTIONS = ['Small', 'Medium', 'Large', 'XL', 'XXL'] as const;

type CheckedInDog = {
    id: string;
    dogId?: string;
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
    currentFood?: string;
    feedingAmount?: string;
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
    const [businessIdRaw, setBusinessIdRaw] = useState<string | null>(null); // for Firestore assessments
    const [businessTimeZone, setBusinessTimeZone] = useState<string>(DEFAULT_TZ);

    const [filter, setFilter] = useState<FilterKey>('daycare');
    const [selectedDogId, setSelectedDogId] = useState<string | null>(null);

    const [dogsLive, setDogsLive] = useState<CheckedInDogLive[]>([]);
    const listenerRef = useRef<{ ref: DatabaseReference; cb: (snap: DataSnapshot) => void } | null>(
        null
    );

    // -------- Assessment modal state --------
    const [showAssessmentModal, setShowAssessmentModal] = useState(false);
    const [assessmentDog, setAssessmentDog] = useState<CheckedInDogLive | null>(null);
    const [assessmentNotes, setAssessmentNotes] = useState('');
    const [assessmentBathSize, setAssessmentBathSize] = useState('');
    const [assessmentLoading, setAssessmentLoading] = useState(false);
    const [assessmentError, setAssessmentError] = useState<string | null>(null);
    const [assessmentSaveMsg, setAssessmentSaveMsg] = useState<string | null>(null);

    // -------- Client Notes modal state (employee) --------
    const [showClientNotesModal, setShowClientNotesModal] = useState(false);
    const [clientNotesDog, setClientNotesDog] = useState<CheckedInDogLive | null>(null);
    const [clientNotesText, setClientNotesText] = useState('');
    const [clientNotesLoading, setClientNotesLoading] = useState(false);
    const [clientNotesError, setClientNotesError] = useState<string | null>(null);
    const [clientNotesSaveMsg, setClientNotesSaveMsg] = useState<string | null>(null);
    const [clientNotesSaving, setClientNotesSaving] = useState(false);

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

    const parseBathSizeFromNotes = useCallback((notes: string): string => {
        const match = notes.match(/bath\s*size\s*[:\-]\s*(small|medium|large|xl|xxl)/i)
            || notes.match(/bath\s*[:\-]\s*(small|medium|large|xl|xxl)/i);
        return match?.[1] ? match[1].toUpperCase().replace('MEDIUM', 'Medium').replace('SMALL', 'Small').replace('LARGE', 'Large').replace('XXL', 'XXL').replace('XL', 'XL') : '';
    }, []);

    const isIntact = (d: CheckedInDog): boolean =>
        (d.spayedNeutered ?? '').trim().toLowerCase() === 'no';

    const isAssessmentDaycare = (d: CheckedInDog): boolean =>
        d.type === 'Daycare' && Boolean(d.isAssessment);

    /** -------- Fetch feeding info from Firestore -------- */
    async function fetchFeedingInfo(ownerName: string, dogId: string): Promise<{ currentFood?: string; feedingAmount?: string }> {
        try {
            const fs = getFirestore();
            // Step 1 – get userId from joinRequests by owner name
            const joinQ = query(collection(fs, 'joinRequests'), where('userName', '==', ownerName));
            const joinSnap = await getDocs(joinQ);
            if (joinSnap.empty) return {};
            const ownerUid = joinSnap.docs[0].data().userId as string | undefined;
            if (!ownerUid) return {};

            // Step 2 – get that pet’s record
            const petRef = doc(fs, 'users', ownerUid, 'pets', dogId);
            const petSnap = await getDoc(petRef);
            if (!petSnap.exists()) return {};
            const data = petSnap.data() || {};
            return {
                currentFood: (data.currentFood as string) || '',
                feedingAmount: (data.feedingAmount as string) || '',
            };
        } catch (err) {
            console.error('⚠️ fetchFeedingInfo failed:', err);
            return {};
        }
    }

    // ---------------------------------------------------------------------------
    // ✅ Client Notes (Employee) — MODAL (no navigation)
    // - Resolve ownerUid from joinRequests scoped to this business
    // - Read/write: clientNotes/{ownerUid}/businesses/{businessIdRaw}
    // ---------------------------------------------------------------------------
    const fetchOwnerUidByNameScoped = useCallback(
        async (ownerName: string): Promise<string | null> => {
            try {
                const fs = getFirestore();
                let qJoin = query(collection(fs, 'joinRequests'), where('userName', '==', ownerName));

                // ✅ Scope to THIS business to avoid collisions on common names
                if (businessIdRaw) {
                    qJoin = query(
                        collection(fs, 'joinRequests'),
                        where('userName', '==', ownerName),
                        where('businessId', '==', businessIdRaw)
                    );
                }

                const snap = await getDocs(qJoin);
                if (snap.empty) return null;

                const uid = snap.docs[0].data().userId as string | undefined;
                return uid && uid.trim().length > 0 ? uid : null;
            } catch (e) {
                console.error('❌ fetchOwnerUidByNameScoped failed:', e);
                return null;
            }
        },
        [businessIdRaw]
    );

    const closeClientNotes = useCallback(() => {
        setShowClientNotesModal(false);
        setClientNotesDog(null);
        setClientNotesText('');
        setClientNotesError(null);
        setClientNotesSaveMsg(null);
        setClientNotesLoading(false);
        setClientNotesSaving(false);
    }, []);

    const openClientNotes = useCallback(
        async (dog: CheckedInDogLive) => {
            if (!businessIdRaw) {
                alert('Business not loaded yet. Please try again in a moment.');
                return;
            }

            setClientNotesDog(dog);
            setClientNotesText('');
            setClientNotesError(null);
            setClientNotesSaveMsg(null);
            setClientNotesLoading(true);
            setShowClientNotesModal(true);

            try {
                const ownerUid = await fetchOwnerUidByNameScoped(dog.owner);
                if (!ownerUid) {
                    setClientNotesError('Unable to resolve this client.');
                    setClientNotesLoading(false);
                    return;
                }

                const fs = getFirestore();
                const notesRef = doc(fs, 'clientNotes', ownerUid, 'businesses', businessIdRaw);
                const snap = await getDoc(notesRef);

                if (snap.exists()) {
                    const data = snap.data() as { notes?: string };
                    setClientNotesText((data?.notes as string) ?? '');
                    setClientNotesError(null);
                } else {
                    setClientNotesText('');
                    setClientNotesError('No notes yet for this client.');
                }
            } catch (e) {
                console.error('❌ load client notes failed:', e);
                setClientNotesError('Failed to load client notes.');
            } finally {
                setClientNotesLoading(false);
            }
        },
        [businessIdRaw, fetchOwnerUidByNameScoped]
    );

    const saveClientNotes = useCallback(async () => {
        try {
            if (!clientNotesDog || !businessIdRaw) return;

            const ownerUid = await fetchOwnerUidByNameScoped(clientNotesDog.owner);
            if (!ownerUid) {
                setClientNotesError('Unable to resolve this client.');
                return;
            }

            const trimmed = clientNotesText.slice(0, 2000).trim();
            if (!trimmed) {
                setClientNotesSaveMsg(null);
                setClientNotesError('Notes cannot be empty.');
                return;
            }

            setClientNotesSaving(true);
            setClientNotesError(null);
            setClientNotesSaveMsg(null);

            const fs = getFirestore();
            const refDoc = doc(fs, 'clientNotes', ownerUid, 'businesses', businessIdRaw);

            const auth = getAuth();
            const payload: Record<string, unknown> = {
                notes: trimmed,
                lastUpdated: serverTimestamp(),
                updatedBy: auth.currentUser?.email || auth.currentUser?.uid || 'employee',
            };

            await setDoc(refDoc, payload, { merge: true });

            setClientNotesSaveMsg('✅ Saved.');
        } catch (e) {
            console.error('❌ save client notes failed:', e);
            setClientNotesError('Failed to save.');
            setClientNotesSaveMsg(null);
        } finally {
            setClientNotesSaving(false);
        }
    }, [businessIdRaw, clientNotesDog, clientNotesText, fetchOwnerUidByNameScoped]);

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
            setBusinessIdRaw(bId);

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

    const subscribeAll = useCallback((sanitizedBId: string) => {
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
                            dogId: raw.dogId ? String(raw.dogId) : dogId,
                            dateKey,
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

                        fetchFeedingInfo(dog.owner, dog.dogId || dog.id).then((feed) => {
                            if (feed.currentFood || feed.feedingAmount) {
                                setDogsLive((prev) =>
                                    prev.map((d) =>
                                        d.id === dog.id ? { ...d, ...feed } : d
                                    )
                                );
                            }
                        });

                        list.push(dog);
                    });
                });
            }

            setDogsLive(list);
            setIsBootstrapping(false);
        };

        onValue(ref, cb);
        listenerRef.current = { ref, cb };
    }, []); // stable, no dependencies

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
    // ✅ Sort alphabetically by dog name (A–Z) for stable, predictable order

    const filteredDogs = useMemo(() => {
        const f = dogsLive.filter((d) => {
            if (filter === 'daycare') return d.type === 'Daycare';
            if (filter === 'boarding') return d.type === 'Boarding';
            return hasGrooming(d);
        });
        return [...f].sort((a, b) => a.name.localeCompare(b.name, undefined, { sensitivity: 'base' }));
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

    // -------- Assessment modal actions --------
    const openAssessment = useCallback(async (dog: CheckedInDogLive) => {
        if (!businessIdRaw) return;
        setAssessmentDog(dog);
        setAssessmentNotes('');
        setAssessmentBathSize('');
        setAssessmentError(null);
        setAssessmentSaveMsg(null);
        setAssessmentLoading(true);
        setShowAssessmentModal(true);

        try {
            const fs = getFirestore();
            const canonicalDogId = (dog.dogId || dog.id || '').trim();
            const legacyDogId = (dog.id || '').trim();

            const primaryRef = doc(fs, 'dogAssessments', canonicalDogId, 'businesses', businessIdRaw);
            const primarySnap = await getDoc(primaryRef);

            let snap = primarySnap;
            if (!snap.exists() && legacyDogId && legacyDogId !== canonicalDogId) {
                const legacyRef = doc(fs, 'dogAssessments', legacyDogId, 'businesses', businessIdRaw);
                snap = await getDoc(legacyRef);
            }
            if (snap.exists()) {
                const data = snap.data();
                setAssessmentNotes((data?.notes as string) ?? '');
                const directBathSize = (data?.bathSize as string) || '';
                setAssessmentBathSize(directBathSize || parseBathSizeFromNotes((data?.notes as string) || ''));
            } else {
                setAssessmentNotes('');
                setAssessmentBathSize('');
            }
        } catch (e) {
            console.error('❌ load assessment failed:', e);
            setAssessmentError('Failed to load assessment.');
        } finally {
            setAssessmentLoading(false);
        }
    }, [businessIdRaw, parseBathSizeFromNotes]);

    const closeAssessment = useCallback(() => {
        setShowAssessmentModal(false);
        setAssessmentDog(null);
        setAssessmentNotes('');
        setAssessmentBathSize('');
        setAssessmentError(null);
        setAssessmentSaveMsg(null);
    }, []);

    const saveAssessment = useCallback(async () => {
        try {
            if (!assessmentDog || !businessIdRaw) return;
            const fs = getFirestore();
            const trimmed = assessmentNotes.slice(0, 2000);
            const canonicalDogId = (assessmentDog.dogId || assessmentDog.id || '').trim();
            const ref = doc(fs, 'dogAssessments', canonicalDogId, 'businesses', businessIdRaw);
            const payload: Record<string, unknown> = {
                dogId: canonicalDogId,
                notes: trimmed,
                bathSize: assessmentBathSize.trim(),
                lastUpdated: serverTimestamp(),
            };
            const auth = getAuth();
            if (auth.currentUser?.email) payload.updatedBy = auth.currentUser.email;
            await setDoc(ref, payload, { merge: true });
            setAssessmentSaveMsg('✅ Saved.');
            setAssessmentError(null);
        } catch (e) {
            console.error('❌ save assessment failed:', e);
            setAssessmentError('Failed to save.');
            setAssessmentSaveMsg(null);
        }
    }, [assessmentDog, assessmentNotes, assessmentBathSize, businessIdRaw]);

    // ---------------------------------------------------------------------------
    // UI Bits
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
        const showAssessmentBadge = isAssessmentDaycare(dog);

        return (
            <div className="rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden dark:bg-white dark:border-gray-200">
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
                            {showAssessmentBadge ? (
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
                        <button
                            type="button"
                            onClick={() => onToggleDogDetails(dog.id)}
                            aria-label={selectedDogId === dog.id ? 'Collapse details' : 'Expand details'}
                            className="p-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-emerald-200"
                        >
                            <svg
                                className={`h-4 w-4 text-gray-600 transition-transform ${selectedDogId === dog.id ? 'rotate-180' : ''}`}
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
                        </button>
                    </div>
                </div>

                {selectedDogId === dog.id ? (
                    <div className="px-4 pb-4 text-sm !text-black dark:!text-black">
                        <div className="mt-1">Owner: {dog.owner}</div>
                        <div className="mt-1">Type: {dog.type}</div>
                        <div className="mt-1">
                            Checked in:&nbsp;{formatDateTimeMediumShort(dog.checkInTime, businessTimeZone)}
                        </div>

                        {/* ✅ Always-visible View Assessment button */}
                        <div className="mt-2 flex flex-wrap gap-2">
                            <button
                                type="button"
                                onClick={() => void openAssessment(dog)}
                                className="px-3 py-1.5 text-xs rounded-md border border-blue-600 text-blue-700 hover:bg-blue-50"
                            >
                                {t('view_assessment_button') || 'View Assessment'}
                            </button>

                            {/* ✅ NEW: Client Notes */}
                            <button
                                type="button"
                                onClick={() => void openClientNotes(dog)}
                                className="px-3 py-1.5 text-xs rounded-md border border-blue-600 text-blue-700 hover:bg-blue-50"
                            >
                                {t('client_notes_button') || 'Client Notes'}
                            </button>
                        </div>

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

                        {/* 🆕 Feeding info */}
                        {(dog.currentFood || dog.feedingAmount) && (
                            <div className="mt-1">
                                {dog.currentFood && (
                                    <div>
                                        <span className="font-medium">Current Food: </span>
                                        {dog.currentFood}
                                    </div>
                                )}
                                {dog.feedingAmount && (
                                    <div>
                                        <span className="font-medium">Feeding Amount: </span>
                                        {dog.feedingAmount} cups
                                    </div>
                                )}
                            </div>
                        )}

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
            <header className="mb-5 text-center">
                <h1 className="text-2xl sm:text-3xl font-bold text-[color:var(--color-accent)]">
                    {t('title')}
                </h1>
                <p className="mt-1 text-[color:var(--color-accent)] opacity-80">
                    {t('subtitle')}
                </p>
            </header>

            <div className="mb-2 flex justify-center">
                <SegmentedControl />
            </div>

            {!isBootstrapping && !error && (
                <p className="text-center text-sm text-gray-500 dark:text-gray-400 mb-4">
                    {filteredDogs.length} total
                </p>
            )}

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

                        {/* -------- Assessment Modal -------- */}
            {showAssessmentModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center">
                    {/* Backdrop */}
                    <div
                        className="absolute inset-0 bg-black/40"
                        onClick={closeAssessment}
                        aria-hidden="true"
                    />
                    {/* Modal */}
                    <div
                        role="dialog"
                        aria-modal="true"
                        className="relative z-10 w-full max-w-xl mx-4 rounded-xl bg-white dark:bg-neutral-900 shadow-xl border border-gray-200 dark:border-neutral-800"
                    >
                        <div className="px-5 py-4 border-b border-gray-200 dark:border-neutral-800 flex items-center justify-between">
                            <h2 className="text-lg font-semibold">
                                {assessmentDog ? `Assessment for ${assessmentDog.name}` : (t('view_assessment_button') || 'View Assessment')}
                            </h2>
                            <button
                                onClick={closeAssessment}
                                className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100"
                                aria-label="Close"
                            >
                                ✕
                            </button>
                        </div>

                        <div className="px-5 py-4">
                            {assessmentLoading ? (
                                <p className="text-sm text-gray-600 dark:text-gray-300">{t('loading') || 'Loading…'}</p>
                            ) : (
                                <>
                                    {assessmentError && (
                                        <p className="text-sm text-red-600 dark:text-red-400 mb-2">❌ {assessmentError}</p>
                                    )}

                                    <div className="mb-3">
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                                            Bath Size
                                        </label>
                                        <select
                                            value={assessmentBathSize}
                                            onChange={(e) => setAssessmentBathSize(e.target.value)}
                                            className="w-full rounded-lg border border-gray-300 dark:border-neutral-700 p-2 text-sm outline-none focus:ring-2 focus:ring-blue-200 dark:bg-neutral-900"
                                        >
                                            <option value="">Not set</option>
                                            {BATH_SIZE_OPTIONS.map((size) => (
                                                <option key={size} value={size}>
                                                    {size}
                                                </option>
                                            ))}
                                        </select>
                                    </div>

                                    <textarea
                                        value={assessmentNotes}
                                        onChange={(e) => setAssessmentNotes(e.target.value.slice(0, 2000))}
                                        className="w-full min-h-[180px] rounded-lg border border-gray-300 dark:border-neutral-700 p-3 text-sm outline-none focus:ring-2 focus:ring-blue-200 dark:bg-neutral-900"
                                        placeholder="Write assessment notes..."
                                    />

                                    <div className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                                        {assessmentNotes.length} / 2000
                                    </div>

                                    {assessmentSaveMsg && (
                                        <div className="mt-2 text-sm text-green-700 dark:text-green-400">{assessmentSaveMsg}</div>
                                    )}
                                </>
                            )}
                        </div>

                        <div className="px-5 py-3 border-t border-gray-200 dark:border-neutral-800 flex items-center justify-end gap-2">
                            <button
                                onClick={closeAssessment}
                                className="px-3 py-2 rounded border border-gray-300 dark:border-neutral-700 text-gray-700 dark:text-gray-200 text-sm hover:bg-gray-50 dark:hover:bg-neutral-800"
                            >
                                Close
                            </button>
                            <button
                                onClick={() => void saveAssessment()}
                                disabled={assessmentLoading || assessmentNotes.trim().length === 0}
                                className={`px-3 py-2 rounded text-sm text-white ${assessmentLoading || assessmentNotes.trim().length === 0 ? 'bg-blue-300 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-500'}`}
                            >
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* -------- Client Notes Modal (Employee) -------- */}
            {showClientNotesModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center">
                    {/* Backdrop */}
                    <div
                        className="absolute inset-0 bg-black/40"
                        onClick={closeClientNotes}
                        aria-hidden="true"
                    />
                    {/* Modal */}
                    <div
                        role="dialog"
                        aria-modal="true"
                        className="relative z-10 w-full max-w-xl mx-4 rounded-xl bg-white dark:bg-neutral-900 shadow-xl border border-gray-200 dark:border-neutral-800"
                    >
                        <div className="px-5 py-4 border-b border-gray-200 dark:border-neutral-800 flex items-center justify-between">
                            <h2 className="text-lg font-semibold">
                                {clientNotesDog ? `Client Notes for ${clientNotesDog.owner}` : 'Client Notes'}
                            </h2>
                            <button
                                onClick={closeClientNotes}
                                className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100"
                                aria-label="Close"
                            >
                                ✕
                            </button>
                        </div>

                        <div className="px-5 py-4">
                            {clientNotesLoading ? (
                                <p className="text-sm text-gray-600 dark:text-gray-300">{t('loading') || 'Loading…'}</p>
                            ) : (
                                <>
                                    {clientNotesError && (
                                        <p className="text-sm text-red-600 dark:text-red-400 mb-2">❌ {clientNotesError}</p>
                                    )}

                                    <textarea
                                        value={clientNotesText}
                                        onChange={(e) => setClientNotesText(e.target.value.slice(0, 2000))}
                                        className="w-full min-h-[180px] rounded-lg border border-gray-300 dark:border-neutral-700 p-3 text-sm outline-none focus:ring-2 focus:ring-blue-200 dark:bg-neutral-900"
                                        placeholder="Write client notes..."
                                    />

                                    <div className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                                        {clientNotesText.length} / 2000
                                    </div>

                                    {clientNotesSaveMsg && (
                                        <div className="mt-2 text-sm text-green-700 dark:text-green-400">
                                            {clientNotesSaveMsg}
                                        </div>
                                    )}
                                </>
                            )}
                        </div>

                        <div className="px-5 py-3 border-t border-gray-200 dark:border-neutral-800 flex items-center justify-end gap-2">
                            <button
                                onClick={closeClientNotes}
                                className="px-3 py-2 rounded border border-gray-300 dark:border-neutral-700 text-gray-700 dark:text-gray-200 text-sm hover:bg-gray-50 dark:hover:bg-neutral-800"
                            >
                                Close
                            </button>
                            <button
                                onClick={() => void saveClientNotes()}
                                disabled={clientNotesLoading || clientNotesSaving || clientNotesText.trim().length === 0}
                                className={`px-3 py-2 rounded text-sm text-white ${
                                    clientNotesLoading || clientNotesSaving || clientNotesText.trim().length === 0
                                        ? 'bg-blue-300 cursor-not-allowed'
                                        : 'bg-blue-600 hover:bg-blue-500'
                                }`}
                            >
                                {clientNotesSaving ? 'Saving…' : 'Save'}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </main>
    );
}
