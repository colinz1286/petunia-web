'use client';

import React, { useCallback, useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import { initializeApp, getApps } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import {
    getFirestore,
    collection,
    getDocs,
    getDoc,
    setDoc,
    doc,
    query,
    where,
    Timestamp,
} from 'firebase/firestore';
import {
    getDatabase,
    ref as rtdbRef,
    get as rtdbGet,
    set as rtdbSet,
} from 'firebase/database';

/* =========================
   Firebase init
   ========================= */
const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY!,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN!,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID!,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET!,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID!,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID!,
};
if (!getApps().length) initializeApp(firebaseConfig);

const auth = getAuth();
const db = getFirestore();
const rtdb = getDatabase();

/* =========================
   Types
   ========================= */
type Pet = {
    id: string;
    name: string;
    species?: string;
};

type WeekdayMap = Record<string, string[]>;

type VaccineKey = 'Rabies' | 'Bordetella' | 'Canine Influenza' | 'Distemper';
type PetVaccineRecord = { expiresAt: Date | null; isVaccinated: boolean };
type PetVaccineMap = Record<string, Partial<Record<VaccineKey, PetVaccineRecord>>>;

type BusinessSettings = {
    timeZoneId?: string;
    features?: { clientWritesRTDB?: boolean };
    dropOffTimeRequiredAssessment?: boolean;
    pickUpTimeRequiredAssessment?: boolean;
    assessmentDropOffTimes?: WeekdayMap;
    assessmentPickUpTimes?: WeekdayMap;
    bookingLimits?: { maxPerTimeSlot?: number };
    blackoutDates?: Timestamp[];
    requiredVaccinations?: Record<string, boolean>;
};

/* =========================
   Helpers
   ========================= */
const weekdayName = (d: Date, tz: string) =>
    new Intl.DateTimeFormat('en-US', { timeZone: tz, weekday: 'long' }).format(d);

const ymdKey = (d: Date, tz: string) =>
    new Intl.DateTimeFormat('en-CA', { timeZone: tz, year: 'numeric', month: '2-digit', day: '2-digit' }).format(d);

const normalizeDate = (d: Date) => {
    const n = new Date(d);
    n.setHours(0, 0, 0, 0);
    return n;
};

const sortTimes = (arr: string[]) =>
    [...arr].map(s => s.trim()).filter(Boolean).sort((a, b) => {
        const toMin = (s: string) => {
            const m = s.match(/^(\d{1,2}):(\d{2})\s*(AM|PM)$/i);
            if (!m) return 0;
            let h = parseInt(m[1], 10);
            const mm = parseInt(m[2], 10);
            const ap = m[3].toUpperCase();
            if (ap === 'PM' && h !== 12) h += 12;
            if (ap === 'AM' && h === 12) h = 0;
            return h * 60 + mm;
        };
        return toMin(a) - toMin(b);
    });

const policyKeyToEnum = (raw: string): VaccineKey | null => {
    const s = raw.toLowerCase();
    if (s.includes('rabies')) return 'Rabies';
    if (s.includes('bordetella')) return 'Bordetella';
    if (s.includes('influenza') || s.includes('civ')) return 'Canine Influenza';
    if (s.includes('distemper') || s.includes('dhpp') || s.includes('da2pp') || s.includes('dapp')) return 'Distemper';
    return null;
};

/* =========================
   Page
   ========================= */
export default function IndividualBookAssessmentPage() {
    const t = useTranslations('individualBookAssessment');
    const locale = useLocale();
    const router = useRouter();
    const params = useSearchParams();

    const businessId = params.get('businessId') || '';
    const businessName = params.get('businessName') || t('default_business_name');

    const [userId, setUserId] = useState('');
    const [pets, setPets] = useState<Pet[]>([]);
    const [selectedPetIds, setSelectedPetIds] = useState<string[]>([]);

    const [selectedDate, setSelectedDate] = useState<Date | null>(null);

    const [dropOffRequired, setDropOffRequired] = useState(false);
    const [pickUpRequired, setPickUpRequired] = useState(false);
    const [dropMap, setDropMap] = useState<WeekdayMap>({});
    const [pickMap, setPickMap] = useState<WeekdayMap>({});
    const [dropOptions, setDropOptions] = useState<string[]>([]);
    const [pickOptions, setPickOptions] = useState<string[]>([]);
    const [dropTime, setDropTime] = useState('');
    const [pickTime, setPickTime] = useState('');

    const [blackoutDates, setBlackoutDates] = useState<Set<string>>(new Set());
    const [bizTZ, setBizTZ] = useState<string>(Intl.DateTimeFormat().resolvedOptions().timeZone);
    const [maxPerSlot, setMaxPerSlot] = useState(1);
    const [clientWritesRTDB, setClientWritesRTDB] = useState(true);

    const [hasExisting, setHasExisting] = useState(false);
    const [showDuplicateAlert, setShowDuplicateAlert] = useState(false);

    const [requiredVaccines, setRequiredVaccines] = useState<Set<VaccineKey>>(new Set());
    const [petVaccineData, setPetVaccineData] = useState<PetVaccineMap>({});
    const [alertsByPet, setAlertsByPet] = useState<Record<string, string[]>>({});
    const [loadingVaccines, setLoadingVaccines] = useState(false);

    const bookingBlocked =
        selectedPetIds.length === 0 ||
        selectedPetIds.some(pid => (alertsByPet[pid] || []).length > 0);

    /* =========================
   Auth + initial load (FIXED — stable guard)
   ========================= */
    const lastAuthedUidRef = React.useRef<string>('');

    useEffect(() => {
        const unsub = onAuthStateChanged(auth, async (user) => {
            if (!user) {
                router.replace(`/${locale}/loginsignup`);
                return;
            }

            const uid = user.uid;

            // ✅ Hard guard: ignore repeat auth callbacks for same uid
            if (lastAuthedUidRef.current === uid) return;
            lastAuthedUidRef.current = uid;

            setUserId(uid);

            // -------- Pets --------
            const psnap = await getDocs(collection(db, 'users', uid, 'pets'));
            const list: Pet[] = psnap.docs.map(d => ({
                id: d.id,
                name: d.data().petName || 'Pet',
                species: d.data().petType || '',
            }));
            setPets(list);
            setSelectedPetIds(list.map(p => p.id));

            // -------- Business settings --------
            if (businessId) {
                const bsnap = await getDoc(doc(db, 'businesses', businessId));
                const data = (bsnap.data() || {}) as BusinessSettings;

                const tzFromDoc =
                    data.timeZoneId || Intl.DateTimeFormat().resolvedOptions().timeZone;

                setBizTZ(tzFromDoc);
                setDropOffRequired(!!data.dropOffTimeRequiredAssessment);
                setPickUpRequired(!!data.pickUpTimeRequiredAssessment);
                setDropMap(data.assessmentDropOffTimes || {});
                setPickMap(data.assessmentPickUpTimes || {});
                setMaxPerSlot(data.bookingLimits?.maxPerTimeSlot ?? 1);
                setClientWritesRTDB(data.features?.clientWritesRTDB !== false);

                if (Array.isArray(data.blackoutDates)) {
                    const keys = data.blackoutDates
                        .map(ts => (ts ? ymdKey(ts.toDate(), tzFromDoc) : null))
                        .filter((v): v is string => !!v);
                    setBlackoutDates(new Set(keys));
                } else {
                    setBlackoutDates(new Set());
                }

                if (data.requiredVaccinations) {
                    const req = new Set<VaccineKey>();
                    Object.entries(data.requiredVaccinations).forEach(([k, v]) => {
                        if (v === true) {
                            const key = policyKeyToEnum(k);
                            if (key) req.add(key);
                        }
                    });
                    setRequiredVaccines(req);
                } else {
                    setRequiredVaccines(new Set());
                }
            }
        });

        return () => unsub();
    }, [businessId, locale, router]);

    type RTDBUpcomingRow = {
        arrivalWindow?: string;
        departureWindow?: string;
        status?: string;
        date?: string;
        dateBusinessTZ?: string;
        isAssessment?: boolean;
    };

    const isValidFirebaseKey = (s: string) => s !== '' && !/[./#$\[\]]/.test(s);

    const filterUnavailableAssessmentTimes = useCallback(
        async (date: Date, dropOffOpts: string[], pickUpOpts: string[]) => {
            if (!businessId || !isValidFirebaseKey(businessId)) {
                return { drop: dropOffOpts, pick: pickUpOpts };
            }

            const dayKeyBiz = ymdKey(date, bizTZ);

            const snap = await rtdbGet(rtdbRef(rtdb, `upcomingReservations/${businessId}`)).catch(() => null);
            const raw = snap?.val() as unknown;
            const rows: Record<string, RTDBUpcomingRow> =
                raw && typeof raw === 'object' ? (raw as Record<string, RTDBUpcomingRow>) : {};

            const dropCounts: Record<string, number> = {};
            const pickCounts: Record<string, number> = {};

            Object.values(rows).forEach((row) => {
                if (!row?.isAssessment) return;

                const status = row.status ?? '';
                if (status !== 'approved' && status !== 'pending') return;

                const dBiz = row.dateBusinessTZ ?? '';
                const dDev = row.date ?? '';
                const sameDay = dBiz === dayKeyBiz || dDev === dayKeyBiz;
                if (!sameDay) return;

                const arr = row.arrivalWindow ?? '';
                const dep = row.departureWindow ?? '';

                if (arr) dropCounts[arr] = (dropCounts[arr] ?? 0) + 1;
                if (dep) pickCounts[dep] = (pickCounts[dep] ?? 0) + 1;
            });

            const filteredDrop = dropOffOpts.filter((t) => (dropCounts[t] ?? 0) < maxPerSlot);
            const filteredPick = pickUpOpts.filter((t) => (pickCounts[t] ?? 0) < maxPerSlot);

            return { drop: filteredDrop, pick: filteredPick };
        },
        [businessId, bizTZ, maxPerSlot]
    );

    type VaccinationRecFS = { date?: Timestamp; isVaccinated?: boolean } | null | undefined;
    type PetDocFS = { vaccinationRecords?: Record<string, VaccinationRecFS> };

    const recomputeVaccineAlerts = useCallback(
        (source: PetVaccineMap) => {
            const out: Record<string, string[]> = {};

            const isExpired = (expiresAt: Date | null) => {
                if (!expiresAt) return true;
                const todayKey = ymdKey(new Date(), bizTZ);
                const expKey = ymdKey(expiresAt, bizTZ);
                return expKey < todayKey;
            };

            selectedPetIds.forEach((pid) => {
                const vmap = source[pid] || {};
                const msgs: string[] = [];

                requiredVaccines.forEach((k) => {
                    const rec = vmap[k];
                    if (rec?.isVaccinated) {
                        if (isExpired(rec.expiresAt)) {
                            msgs.push(`${k}: Expired`);
                        }
                    } else {
                        msgs.push(`${k}: Not on file`);
                    }
                });

                out[pid] = msgs;
            });

            setAlertsByPet(out);
        },
        [bizTZ, requiredVaccines, selectedPetIds]
    );

    const loadVaccineData = useCallback(
        async (uid: string, petIds: string[]) => {
            if (!uid || petIds.length === 0) {
                setPetVaccineData({});
                setAlertsByPet({});
                return;
            }

            // ✅ Only fetch pets we don't already have cached
            const toFetch = petIds.filter((pid) => !(pid in petVaccineData));

            // If nothing new to fetch, just recompute alerts from cache
            if (toFetch.length === 0) {
                recomputeVaccineAlerts(petVaccineData);
                return;
            }

            setLoadingVaccines(true);

            const base = collection(db, 'users', uid, 'pets');
            const next: PetVaccineMap = { ...petVaccineData };

            await Promise.all(
                toFetch.map(async (pid) => {
                    const snap = await getDoc(doc(base, pid)).catch(() => null);
                    const raw = snap?.data() as unknown;
                    const data: PetDocFS = raw && typeof raw === 'object' ? (raw as PetDocFS) : {};
                    const records = data.vaccinationRecords ?? {};

                    const map: Partial<Record<VaccineKey, PetVaccineRecord>> = {};
                    Object.entries(records).forEach(([rawKey, rec]) => {
                        const key = policyKeyToEnum(rawKey);
                        if (!key) return;
                        if (rec && typeof rec === 'object') {
                            const exp = (rec.date as Timestamp | undefined)?.toDate() || null;
                            const isVacc = !!rec.isVaccinated;
                            map[key] = { expiresAt: exp, isVaccinated: isVacc };
                        }
                    });

                    next[pid] = map;
                })
            );

            setPetVaccineData(next);
            setLoadingVaccines(false);
            recomputeVaccineAlerts(next);
        },
        [petVaccineData, recomputeVaccineAlerts]
    );

    /* =========================
    Vaccine lifecycle (FIXED — match working daycare)
    ========================= */

    // 1) Fetch vaccine data ONCE when the pet list is known (no selection-churn fetch)
    useEffect(() => {
        if (!userId) return;
        if (pets.length === 0) return;

        // fetch for ALL pets so toggling checkboxes doesn't refetch
        loadVaccineData(userId, pets.map((p) => p.id));
    }, [userId, pets, loadVaccineData]);

    // 2) Recompute alerts when selection changes (cheap, no network)
    useEffect(() => {
        if (selectedPetIds.length === 0) {
            setAlertsByPet({});
            return;
        }
        recomputeVaccineAlerts(petVaccineData);
    }, [selectedPetIds, requiredVaccines, bizTZ, petVaccineData, recomputeVaccineAlerts]);

    /* =========================
       Date selection
       ========================= */
    const handleDateSelect = async (d: Date | null) => {
        if (!d) return;

        // Normalize date to start-of-day (device time) but enforce rules via business TZ keys
        const norm = normalizeDate(d);
        const keyBiz = ymdKey(norm, bizTZ);

        // 🚫 Block past dates in BUSINESS TZ (matches iOS)
        const todayBizKey = ymdKey(new Date(), bizTZ);
        if (keyBiz < todayBizKey) {
            alert(t('cannot_book_in_past') || 'You cannot book an assessment in the past. Please choose another date.');
            setSelectedDate(null);
            setDropOptions([]);
            setPickOptions([]);
            setDropTime('');
            setPickTime('');
            setHasExisting(false);
            return;
        }

        // 🚫 Blackout enforcement (business TZ)
        if (blackoutDates.has(keyBiz)) {
            alert(t('selected_date_is_blackout') || 'This date is unavailable.');
            setSelectedDate(null);
            setDropOptions([]);
            setPickOptions([]);
            setDropTime('');
            setPickTime('');
            setHasExisting(false);
            return;
        }

        setSelectedDate(norm);
        setShowDuplicateAlert(false); // reset duplicate warning on new date

        // Duplicate assessment check (Firestore, business TZ)
        try {
            const qref = query(
                collection(db, 'daycareReservations'),
                where('userId', '==', userId),
                where('businessId', '==', businessId),
                where('dateBusinessTZ', '==', keyBiz),
                where('isAssessment', '==', true),
                where('status', 'in', ['pending', 'approved'])
            );
            const snap = await getDocs(qref);
            setHasExisting(!snap.empty);
        } catch {
            setHasExisting(false);
        }

        const day = weekdayName(norm, bizTZ);

        // Pull from assessment maps ONLY
        const rawDrop = sortTimes(dropMap[day] || []);
        const rawPick = sortTimes(pickMap[day] || []);

        // 🚫 No assessments available for this day (matches iOS)
        const noAssessmentsToday =
            (dropOffRequired && rawDrop.length === 0) ||
            (pickUpRequired && rawPick.length === 0);

        const dateOnlyNoAssessments =
            (!dropOffRequired && !pickUpRequired && rawDrop.length === 0 && rawPick.length === 0);

        if (noAssessmentsToday || dateOnlyNoAssessments) {
            alert(t('no_assessments_available') || 'No assessments are available on this day. Please choose another date.');
            setSelectedDate(null);
            setDropOptions([]);
            setPickOptions([]);
            setDropTime('');
            setPickTime('');
            return;
        }

        // ✅ Capacity filtering (RTDB) only when time selection is required
        let finalDrop = rawDrop;
        let finalPick = rawPick;

        if (dropOffRequired || pickUpRequired) {
            const filtered = await filterUnavailableAssessmentTimes(norm, rawDrop, rawPick);
            finalDrop = filtered.drop;
            finalPick = filtered.pick;
        }

        if (dropOffRequired) {
            setDropOptions(finalDrop);
            setDropTime(finalDrop[0] || '');
        } else {
            setDropOptions([]);
            setDropTime('');
        }

        if (pickUpRequired) {
            setPickOptions(finalPick);
            setPickTime(finalPick[0] || '');
        } else {
            setPickOptions([]);
            setPickTime('');
        }
    };

    /* =========================
       Submit
       ========================= */
    const [isSubmitting, setIsSubmitting] = useState(false); // add this state near your other submission state

    const submitAssessment = async () => {
        if (!userId || !selectedDate || bookingBlocked) return;

        // Safety: re-check duplicate at submit time (matches iOS)
        const keyBiz = ymdKey(selectedDate, bizTZ);
        try {
            const qref = query(
                collection(db, 'daycareReservations'),
                where('userId', '==', userId),
                where('businessId', '==', businessId),
                where('dateBusinessTZ', '==', keyBiz),
                where('isAssessment', '==', true),
                where('status', 'in', ['pending', 'approved'])
            );
            const snap = await getDocs(qref);
            const exists = !snap.empty;
            setHasExisting(exists);
            if (exists) {
                setShowDuplicateAlert(true);
                return;
            }
        } catch {
            // If duplicate check fails, do not block submission (same spirit as iOS best-effort checks)
        }

        setIsSubmitting(true);

        try {
            const dateBizKey = ymdKey(selectedDate, bizTZ);
            const realtimeKey = crypto.randomUUID();

            // Assessments are always auto-approved (no assessment approval setting exists today).
            const status = 'approved' as const;

            const payload = {
                userId,
                businessId,
                petIds: selectedPetIds,
                petStatuses: Object.fromEntries(selectedPetIds.map((pid) => [pid, status])),
                date: Timestamp.fromDate(selectedDate),
                dateBusinessTZ: dateBizKey,
                status,
                realtimeKey,
                isAssessment: true,
                type: 'Assessment',
                ...(dropOffRequired ? { arrivalWindow: dropTime } : {}),
                ...(pickUpRequired ? { departureWindow: pickTime } : {}),
            };

            await setDoc(doc(db, 'daycareReservations', realtimeKey), payload);

            if (clientWritesRTDB) {
                const deviceKey = ymdKey(selectedDate, Intl.DateTimeFormat().resolvedOptions().timeZone);

                await Promise.all(
                    selectedPetIds.map(async (pid) => {
                        const pet = pets.find((p) => p.id === pid);

                        await rtdbSet(
                            rtdbRef(rtdb, `upcomingReservations/${businessId}/${realtimeKey}-${pid}`),
                            {
                                dogName: pet?.name || 'Dog',
                                type: 'Assessment',
                                date: deviceKey,
                                dateBusinessTZ: dateBizKey,
                                status,
                                userId,
                                businessId,
                                realtimeKey,
                                isAssessment: true,
                                ...(dropOffRequired ? { arrivalWindow: dropTime } : {}),
                                ...(pickUpRequired ? { departureWindow: pickTime } : {}),
                            }
                        );
                    })
                );
            }

            alert(t('assessment_submitted') || 'Your assessment has been successfully booked.');
            router.push(`/${locale}/individualupcomingappointments`);
        } catch (e) {
            console.error('❌ submitAssessment failed:', e);
            alert(t('submission_error') || 'There was an error submitting your assessment.');
        } finally {
            setIsSubmitting(false);
        }
    };

    /* =========================
       UI
       ========================= */
    return (
        <div className="min-h-screen px-4 py-6">
            <h1 className="text-3xl font-bold text-center">
                {t('book_assessment_title')}
                <br />
                <span className="text-lg font-normal">{businessName}</span>
            </h1>

            <div className="max-w-sm mx-auto mt-6 space-y-4">
                <div className="flex justify-center">
                    <div className="[&_.react-datepicker]:mx-auto">
                        <DatePicker
                            selected={selectedDate}
                            onChange={handleDateSelect}
                            inline
                            calendarStartDay={0}
                        />
                    </div>
                </div>

                {hasExisting && (
                    <p className="mt-2 text-center font-bold text-green-600">
                        {t('existing_appointment') || 'You already have an assessment scheduled for this date.'}
                    </p>
                )}

                {showDuplicateAlert && !hasExisting && (
                    <p className="mt-2 text-center text-red-600 text-sm font-medium">
                        {t('existing_appointment') || 'You already have an assessment scheduled for this date.'}
                    </p>
                )}

                {dropOffRequired && (
                    <select className="w-full border p-2 rounded" value={dropTime} onChange={e => setDropTime(e.target.value)}>
                        {dropOptions.map(opt => <option key={opt}>{opt}</option>)}
                    </select>
                )}

                {pickUpRequired && (
                    <select className="w-full border p-2 rounded" value={pickTime} onChange={e => setPickTime(e.target.value)}>
                        {pickOptions.map(opt => <option key={opt}>{opt}</option>)}
                    </select>
                )}

                {/* Pets */}
                {pets.map(pet => (
                    <label key={pet.id} className="flex gap-2">
                        <input
                            type="checkbox"
                            checked={selectedPetIds.includes(pet.id)}
                            onChange={e => {
                                setSelectedPetIds(prev =>
                                    e.target.checked ? [...prev, pet.id] : prev.filter(id => id !== pet.id)
                                );
                            }}
                        />
                        {pet.name}
                    </label>
                ))}

                {/* Vaccine Alerts (read-only, matches iOS) */}
                {selectedPetIds.length > 0 && (
                    (() => {
                        const allIssues = selectedPetIds.flatMap(
                            (pid) => alertsByPet[pid] || []
                        );

                        if (!loadingVaccines && allIssues.length === 0) {
                            return (
                                <div className="mt-4 border rounded p-3 bg-white/80 text-sm text-green-700 text-center">
                                    ✅ No vaccine alerts at this time.
                                </div>
                            );
                        }

                        return (
                            <div className="mt-4 border rounded p-3 bg-white/80">
                                <div className="font-semibold text-orange-600 mb-2">
                                    ⚠️ Vaccine Alerts
                                </div>

                                {loadingVaccines ? (
                                    <div className="text-sm text-gray-600">
                                        Checking vaccine status…
                                    </div>
                                ) : (
                                    selectedPetIds.map((pid) => {
                                        const pet = pets.find(p => p.id === pid);
                                        const issues = alertsByPet[pid] || [];
                                        if (issues.length === 0) return null;

                                        return (
                                            <div key={pid} className="mb-2">
                                                <div className="font-medium text-sm">{pet?.name}</div>
                                                <ul className="list-disc list-inside text-sm text-red-600">
                                                    {issues.map(msg => (
                                                        <li key={msg}>{msg}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        );
                                    })
                                )}
                            </div>
                        );
                    })()
                )}

                <button
                    onClick={submitAssessment}
                    disabled={
                        isSubmitting ||
                        bookingBlocked ||
                        !selectedDate ||
                        hasExisting ||
                        (dropOffRequired && !dropTime) ||
                        (pickUpRequired && !pickTime)
                    }
                    className="w-full bg-green-700 text-white py-3 rounded disabled:bg-gray-400"
                >
                    {isSubmitting ? (t('submitting') || 'Submitting...') : t('submit_assessment')}
                </button>
            </div>
        </div>
    );
}
