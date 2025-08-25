'use client';

import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { useTranslations, useLocale } from 'next-intl';
import {
    getFirestore, getDoc, doc, getDocs, collection, Timestamp, setDoc, query, where
} from 'firebase/firestore';
import { getDatabase, ref, set as rtdbSet } from 'firebase/database';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { initializeApp } from 'firebase/app';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

/** =========================
 *  Firebase init (once)
 *  ========================= */
const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY!,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN!,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID!,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET!,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID!,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID!,
};
initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();
const rtdb = getDatabase();

/** =========================
 *  Types
 *  ========================= */
type Pet = {
    id: string;
    name: string;
    species: string;
    medications?: string;
    medicationDetails?: string;
    spayedNeutered?: string;
};

type GroomingSelections = Record<string, string[]>; // { petId: [service, ...] }

type WeekdayMap = Record<string, string[]>; // e.g., { Monday: ["9:00 AM", ...], ... }

type BusinessFeatures = {
    countPendingInCapacity?: boolean;
    clientWritesRTDB?: boolean;
    enforceWaiverVersion?: boolean;
};

type BusinessSettingsDoc = {
    timeZoneId?: string;
    features?: BusinessFeatures;
    capacityBoardingTotal?: number | null;

    // Preferred flags
    checkInTimeRequiredBoarding?: boolean;
    checkOutTimeRequiredBoarding?: boolean;

    // Legacy flags
    dropOffTimeRequiredBoarding?: boolean;
    pickUpTimeRequiredBoarding?: boolean;

    // Preferred maps
    checkInTimesBoarding?: WeekdayMap;
    checkOutTimesBoarding?: WeekdayMap;

    // Legacy maps
    dropOffTimesBoarding?: WeekdayMap;
    pickUpTimesBoarding?: WeekdayMap;

    sameDayCheckInCutoffBoarding?: string; // "h:mm a"

    bookingLimits?: { maxPerTimeSlot?: number };

    // Grooming
    groomingAvailableAsAddOnToBoarding?: boolean;
    groomingServices?: string[];

    // Waiver (root-level fallback date)
    waiverRequired?: boolean;
    waiverLastUpdated?: Timestamp;
};

type ClientWaiverSubdoc = {
    waiverVersion?: number;      // Int
    lastUpdated?: Timestamp;     // Timestamp
};

type ClientWaiverState = {
    waiverVersionSigned?: number;
    waiverSignedAt?: Timestamp;
    waiverSigned?: boolean; // legacy boolean
};

type BoardingReservationWrite = {
    userId: string;
    businessId: string;
    petIds: string[];
    petStatuses: Record<string, string>; // {petId:"pending"}
    status: 'approved' | 'pending';
    realtimeKey: string;
    checkInDate: Timestamp;
    checkOutDate: Timestamp;
    checkInDateBusinessTZ: string;  // "yyyy-MM-dd"
    checkOutDateBusinessTZ: string; // "yyyy-MM-dd"
    nights: number;
    checkInWindow?: string;
    checkOutWindow?: string;
    groomingAddOns?: GroomingSelections;
};

/** =========================
 *  Time helpers (business TZ)
 *  ========================= */
const weekdayName = (d: Date, tz: string) =>
    new Intl.DateTimeFormat('en-US', { timeZone: tz, weekday: 'long' }).format(d); // e.g. "Monday"

const ymdKey = (d: Date, tz: string) =>
    new Intl.DateTimeFormat('en-CA', { timeZone: tz, year: 'numeric', month: '2-digit', day: '2-digit' }).format(d); // "YYYY-MM-DD"

const parseTimeToMinutes = (label: string) => {
    // "h:mm AM/PM" -> minutes since 00:00
    const m = label.trim().match(/^(\d{1,2}):(\d{2})\s*(AM|PM)$/i);
    if (!m) return Number.POSITIVE_INFINITY;
    let hours = parseInt(m[1], 10);
    const mins = parseInt(m[2], 10);
    const ap = m[3].toUpperCase();
    if (ap === 'PM' && hours !== 12) hours += 12;
    if (ap === 'AM' && hours === 12) hours = 0;
    return hours * 60 + mins;
};

const sortTimeStrings = (arr: string[]) =>
    [...arr]
        .map(s => s.trim())
        .filter(Boolean)
        .sort((a, b) => parseTimeToMinutes(a) - parseTimeToMinutes(b));

const nowMinutesInTZ = (tz: string) => {
    const label = new Intl.DateTimeFormat('en-US', {
        timeZone: tz, hour12: true, hour: 'numeric', minute: '2-digit'
    }).format(new Date()); // e.g., "2:37 PM"
    return parseTimeToMinutes(label);
};

const isSameBizDayAsToday = (d: Date | null, tz: string) =>
    d ? ymdKey(d, tz) === ymdKey(new Date(), tz) : false;

const filterCheckInTimesForSameDay = (
    options: string[],
    date: Date | null,
    tz: string,
    cutoff: string | null,
) => {
    if (!date) return [];
    if (!isSameBizDayAsToday(date, tz)) return options;

    const nowMins = nowMinutesInTZ(tz);
    const cutoffMins = cutoff ? parseTimeToMinutes(cutoff) : null;

    // If cutoff exists and we're past it, block same-day entirely
    if (cutoffMins !== null && nowMins >= cutoffMins) return [];

    return options.filter(opt => {
        const t = parseTimeToMinutes(opt);
        if (cutoffMins !== null) return t > nowMins && t <= cutoffMins;
        return t > nowMins;
    });
};

const nightsBetweenKeys = (start: Date, end: Date, tz: string): string[] => {
    // Returns [start, end) as yyyy-MM-dd in business TZ
    const keys: string[] = [];
    // Walk day by day using the biz key (robust & DST-safe)
    let cursor = start;
    while (ymdKey(cursor, tz) < ymdKey(end, tz)) {
        keys.push(ymdKey(cursor, tz));
        const next = new Date(cursor.getTime() + 24 * 60 * 60 * 1000);
        // stop infinite loops
        if (ymdKey(next, tz) === ymdKey(cursor, tz)) break;
        cursor = next;
    }
    return keys;
};

/** =========================
 *  Main page
 *  ========================= */
export default function IndividualBookBoardingPage() {
    const t = useTranslations('individualBookBoarding');
    const locale = useLocale();
    const router = useRouter();
    const params = useSearchParams();

    const businessId = params.get('businessId') || '';
    const businessName = params.get('businessName') || t('default_business_name');

    // Auth / user
    const [userId, setUserId] = useState<string>('');
    const [ownerName, setOwnerName] = useState<string>('Client');

    // Pets
    const [pets, setPets] = useState<Pet[]>([]);
    const [selectedPetIds, setSelectedPetIds] = useState<Set<string>>(new Set());

    // Dates & times (Boarding)
    const [checkInDate, setCheckInDate] = useState<Date | null>(new Date());
    const [checkOutDate, setCheckOutDate] = useState<Date | null>(null);

    const [checkInTimeRequired, setCheckInTimeRequired] = useState(false);
    const [checkOutTimeRequired, setCheckOutTimeRequired] = useState(false);

    const [checkInTimesByWeekday, setCheckInTimesByWeekday] = useState<WeekdayMap>({});
    const [checkOutTimesByWeekday, setCheckOutTimesByWeekday] = useState<WeekdayMap>({});

    const [checkInOptions, setCheckInOptions] = useState<string[]>([]);
    const [checkOutOptions, setCheckOutOptions] = useState<string[]>([]);

    const [checkInWindow, setCheckInWindow] = useState('');
    const [checkOutWindow, setCheckOutWindow] = useState('');

    const [sameDayCheckInCutoff, setSameDayCheckInCutoff] = useState<string | null>(null);

    // Business / features
    const [businessTimeZoneId, setBusinessTimeZoneId] = useState<string | null>(null);
    const [includePendingInCapacity, setIncludePendingInCapacity] = useState(false);
    const [clientWritesRTDB, setClientWritesRTDB] = useState(true);
    const [enforceWaiverVersion, setEnforceWaiverVersion] = useState(false);

    // Capacity
    const [capacityBoardingTotal, setCapacityBoardingTotal] = useState<number | null>(null);
    const [capacityBlockingNights, setCapacityBlockingNights] = useState<string[]>([]);
    const [maxPerTimeSlot, setMaxPerTimeSlot] = useState<number>(0);

    // Waiver
    const [waiverRequired, setWaiverRequired] = useState(false);
    const [waiverSigned, setWaiverSigned] = useState(true);
    const [showWaiverModal, setShowWaiverModal] = useState(false);
    const [hasCheckedAgreement, setHasCheckedAgreement] = useState(false);

    // Grooming
    const [groomingAvailableAsAddOn, setGroomingAvailableAsAddOn] = useState(false);
    const [groomingServices, setGroomingServices] = useState<string[]>([]);
    const [groomingSelections, setGroomingSelections] = useState<GroomingSelections>({});
    const [showGroomingModal, setShowGroomingModal] = useState(false);

    // Validation / flow
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [overlapDetected, setOverlapDetected] = useState(false);
    const [showOverlapAlert, setShowOverlapAlert] = useState(false);
    const [showCapacityAlert, setShowCapacityAlert] = useState(false);
    const [suppressValidations, setSuppressValidations] = useState(false);
    const [lastSubmittedReservationId, setLastSubmittedReservationId] = useState<string | null>(null);

    const bizTZ = businessTimeZoneId || Intl.DateTimeFormat().resolvedOptions().timeZone;

    /** Derived submit disabled (mirrors iOS) */
    const isSubmitDisabled = useMemo(() => {
        if (isSubmitting) return true;
        if (!checkInDate || !checkOutDate) return true;
        if (checkInDate >= checkOutDate) return true;
        if (selectedPetIds.size === 0) return true;
        if (waiverRequired && !waiverSigned) return true;
        if (checkInTimeRequired && !checkInWindow) return true;
        if (checkOutTimeRequired && !checkOutWindow) return true;
        if (overlapDetected) return true;
        if (capacityBlockingNights.length > 0) return true;
        return false;
    }, [
        isSubmitting, checkInDate, checkOutDate, selectedPetIds, waiverRequired, waiverSigned,
        checkInTimeRequired, checkInWindow, checkOutTimeRequired, checkOutWindow,
        overlapDetected, capacityBlockingNights
    ]);
    /** =========================
     *  Load auth, pets, business settings, waiver
     *  ========================= */
    useEffect(() => {
        const unsub = onAuthStateChanged(auth, async (user) => {
            if (!user) {
                router.push(`/${locale}/loginsignup`);
                return;
            }
            const uid = user.uid;
            setUserId(uid);

            // Load user name for RTDB ownerName
            try {
                const uref = doc(db, 'users', uid);
                const usnap = await getDoc(uref);
                const fn = (usnap.data()?.firstName as string) || '';
                const ln = (usnap.data()?.lastName as string) || '';
                const on = `${fn} ${ln}`.trim();
                if (on) setOwnerName(on);
            } catch {
                setOwnerName('Client');
            }

            // Load pets (w/ extra fields for RTDB)
            try {
                const pcol = collection(db, 'users', uid, 'pets');
                const psnap = await getDocs(pcol);
                const list: Pet[] = psnap.docs.map(d => {
                    const data = d.data() || {};
                    return {
                        id: d.id,
                        name: (data.petName as string) || 'Unnamed',
                        species: (data.petType as string) || '',
                        medications: (data.medications as string) || undefined,
                        medicationDetails: (data.medicationDetails as string) || undefined,
                        spayedNeutered: (data.spayedNeutered as string) || undefined,
                    };
                });
                setPets(list);
                setSelectedPetIds(new Set(list.map(p => p.id))); // select all by default
            } catch (e) {
                console.error('❌ Failed to load pets:', e);
            }

            // Load business settings
            await fetchBusinessSettings(businessId);

            // Waiver check
            await checkWaiverStatus(businessId, uid);
        });

        return () => unsub();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [router, locale, businessId]);

    /** Fetch Business settings (parity with iOS) */
    const fetchBusinessSettings = useCallback(async (bizId: string) => {
        try {
            const bref = doc(db, 'businesses', bizId);
            const bsnap = await getDoc(bref);
            const data = (bsnap.data() || {}) as BusinessSettingsDoc;

            // TZ & features
            setBusinessTimeZoneId(data.timeZoneId || null);
            const f = data.features || {};
            setIncludePendingInCapacity(!!f.countPendingInCapacity);
            setClientWritesRTDB(f.clientWritesRTDB !== false); // default true
            setEnforceWaiverVersion(!!f.enforceWaiverVersion);

            // Capacity
            setCapacityBoardingTotal(
                typeof data.capacityBoardingTotal === 'number' && data.capacityBoardingTotal > 0
                    ? data.capacityBoardingTotal
                    : null
            );

            // Time requirements (prefer new keys, fallback to legacy)
            const ciReq = data.checkInTimeRequiredBoarding ?? data.dropOffTimeRequiredBoarding ?? false;
            const coReq = data.checkOutTimeRequiredBoarding ?? data.pickUpTimeRequiredBoarding ?? false;
            setCheckInTimeRequired(!!ciReq);
            setCheckOutTimeRequired(!!coReq);

            // Time maps (prefer new keys, fallback to legacy)
            const ciMap = data.checkInTimesBoarding ?? data.dropOffTimesBoarding ?? {};
            const coMap = data.checkOutTimesBoarding ?? data.pickUpTimesBoarding ?? {};
            setCheckInTimesByWeekday(ciMap);
            setCheckOutTimesByWeekday(coMap);

            // Same-day cutoff
            setSameDayCheckInCutoff(data.sameDayCheckInCutoffBoarding || null);

            // Per-slot limit
            setMaxPerTimeSlot((data.bookingLimits?.maxPerTimeSlot as number) || 0);

            // Grooming
            setGroomingAvailableAsAddOn(!!data.groomingAvailableAsAddOnToBoarding);
            setGroomingServices(
                (data.groomingServices || []).map(s => (s || '').trim()).filter(Boolean)
            );

            // Root waiver toggle
            setWaiverRequired(!!data.waiverRequired);

            // Refresh options if dates already chosen
            refreshCheckInOptions(ciMap);
            refreshCheckOutOptions(coMap);
        } catch (e) {
            console.error('❌ Failed to fetch business settings:', e);
        }
    }, []);

    /** Waiver check (version-aware, with fallbacks) */
    const checkWaiverStatus = useCallback(async (bizId: string, uid: string) => {
        try {
            const bizRef = doc(db, 'businesses', bizId);
            const waiverRef = doc(db, 'businesses', bizId, 'settings', 'clientWaiver');
            const clientRef = doc(db, 'userApprovedBusinesses', bizId, 'clients', uid);

            const [bizSnap, wSnap, cSnap] = await Promise.all([
                getDoc(bizRef),
                getDoc(waiverRef),
                getDoc(clientRef),
            ]);

            const rootData = (bizSnap.data() || {}) as BusinessSettingsDoc;
            const subData = (wSnap.data() || {}) as ClientWaiverSubdoc;
            const clientData = (cSnap.data() || {}) as ClientWaiverState;

            const enforce = !!(rootData.features?.enforceWaiverVersion);
            const version = subData.waiverVersion;
            const subLast = subData.lastUpdated?.toDate();
            const rootLast = rootData.waiverLastUpdated?.toDate();
            const lastUpdated = subLast || rootLast || null;

            const versionSigned = clientData.waiverVersionSigned ?? 0;
            const signedAt = clientData.waiverSignedAt?.toDate?.() ?? null;
            const legacyBool = clientData.waiverSigned ?? false;

            let signed = true;
            if (!rootData.waiverRequired) {
                signed = true;
            } else if (enforce && typeof version === 'number') {
                signed = versionSigned >= version;
            } else if (lastUpdated && signedAt) {
                signed = signedAt >= lastUpdated;
            } else {
                signed = legacyBool;
            }

            setWaiverRequired(!!rootData.waiverRequired);
            setWaiverSigned(signed);
            if (!!rootData.waiverRequired && !signed) setShowWaiverModal(true);
        } catch (e) {
            console.error('❌ Error checking waiver status:', e);
            // Failsafe — do not hard-block on error
            setWaiverSigned(true);
        }
    }, []);

    /** =========================
     *  Time option builders
     *  ========================= */
    const refreshCheckInOptions = useCallback((map?: WeekdayMap) => {
        if (!checkInTimeRequired || !checkInDate) {
            setCheckInOptions([]); setCheckInWindow('');
            return;
        }
        const weekday = weekdayName(checkInDate, bizTZ);
        const raw = (map || checkInTimesByWeekday)[weekday] || [];
        const sorted = sortTimeStrings(raw);
        const filtered = filterCheckInTimesForSameDay(sorted, checkInDate, bizTZ, sameDayCheckInCutoff);
        setCheckInOptions(filtered);
        setCheckInWindow(filtered[0] || '');
    }, [checkInDate, checkInTimeRequired, checkInTimesByWeekday, bizTZ, sameDayCheckInCutoff]);

    const refreshCheckOutOptions = useCallback((map?: WeekdayMap) => {
        if (!checkOutTimeRequired || !checkOutDate) {
            setCheckOutOptions([]); setCheckOutWindow('');
            return;
        }
        const weekday = weekdayName(checkOutDate, bizTZ);
        const raw = (map || checkOutTimesByWeekday)[weekday] || [];
        const sorted = sortTimeStrings(raw);
        setCheckOutOptions(sorted);
        setCheckOutWindow(sorted[0] || '');
    }, [checkOutDate, checkOutTimeRequired, checkOutTimesByWeekday, bizTZ]);

    /** =========================
     *  Validators (overlap, capacity, per-slot)
     *  ========================= */
    const revalidateAll = useCallback(async () => {
        if (suppressValidations) return;
        await checkOverlapForSelectedRange();
        await checkCapacityForSelectedRange();
        await checkCheckInWindowCapacityIfNeeded();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        suppressValidations, checkInDate, checkOutDate, selectedPetIds,
        capacityBoardingTotal, includePendingInCapacity, checkInWindow,
        checkInTimeRequired, maxPerTimeSlot, bizTZ
    ]);

    const checkOverlapForSelectedRange = useCallback(async () => {
        setOverlapDetected(false);
        if (!userId || !businessId || !checkInDate || !checkOutDate) return;
        if (checkInDate >= checkOutDate) return;
        if (selectedPetIds.size === 0) return;

        try {
            const qref = query(
                collection(db, 'boardingReservations'),
                where('userId', '==', userId),
                where('businessId', '==', businessId),
                where('status', 'in', ['pending', 'approved'])
            );
            const snap = await getDocs(qref);
            const mySet = new Set([...selectedPetIds]);

            for (const d of snap.docs) {
                const data = d.data();
                const tsIn = data.checkInDate as Timestamp | undefined;
                const tsOut = data.checkOutDate as Timestamp | undefined;
                const petIds = (data.petIds as string[]) || [];
                if (!tsIn || !tsOut) continue;

                const exIn = tsIn.toDate();
                const exOut = tsOut.toDate();
                const overlapDates = (checkInDate < exOut) && (checkOutDate > exIn);
                const overlapPets = petIds.some(pid => mySet.has(pid));
                if (overlapDates && overlapPets) {
                    setOverlapDetected(true);
                    setShowOverlapAlert(true);
                    return;
                }
            }
        } catch (e) {
            console.error('❌ Overlap query failed:', e);
        }
    }, [userId, businessId, checkInDate, checkOutDate, selectedPetIds]);

    const checkCapacityForSelectedRange = useCallback(async () => {
        setCapacityBlockingNights([]);
        if (!checkInDate || !checkOutDate) return;
        if (checkInDate >= checkOutDate) return;
        if (!capacityBoardingTotal || capacityBoardingTotal <= 0) return; // unlimited

        try {
            const statuses = includePendingInCapacity ? ['pending', 'approved'] : ['approved'];
            const qref = query(
                collection(db, 'boardingReservations'),
                where('businessId', '==', businessId),
                where('status', 'in', statuses)
            );
            const snap = await getDocs(qref);

            const counts: Record<string, number> = {};
            for (const d of snap.docs) {
                const data = d.data();
                const tsIn = data.checkInDate as Timestamp | undefined;
                const tsOut = data.checkOutDate as Timestamp | undefined;
                const petIds = (data.petIds as string[]) || [];
                if (!tsIn || !tsOut) continue;

                const exIn = tsIn.toDate();
                const exOut = tsOut.toDate();
                const nights = nightsBetweenKeys(exIn, exOut, bizTZ);
                for (const k of nights) counts[k] = (counts[k] ?? 0) + Math.max(1, petIds.length);
            }

            const add = Math.max(1, selectedPetIds.size);
            const target = nightsBetweenKeys(checkInDate, checkOutDate, bizTZ);
            const blocked: string[] = [];
            for (const k of target) {
                const newCount = (counts[k] ?? 0) + add;
                if (newCount > capacityBoardingTotal) blocked.push(k);
            }
            if (blocked.length) {
                setCapacityBlockingNights(blocked);
                setShowCapacityAlert(true);
            }
        } catch (e) {
            console.error('❌ Capacity query failed:', e);
        }
    }, [checkInDate, checkOutDate, capacityBoardingTotal, includePendingInCapacity, businessId, selectedPetIds, bizTZ]);

    const checkCheckInWindowCapacityIfNeeded = useCallback(async () => {
        if (!(maxPerTimeSlot > 0) || !checkInTimeRequired || !checkInDate || !checkInWindow) return;
        try {
            const statuses = includePendingInCapacity ? ['pending', 'approved'] : ['approved'];
            const qref = query(
                collection(db, 'boardingReservations'),
                where('businessId', '==', businessId),
                where('status', 'in', statuses)
            );
            const snap = await getDocs(qref);

            const cinKey = ymdKey(checkInDate, bizTZ);
            let countForWindow = 0;

            for (const d of snap.docs) {
                const data = d.data();
                const win = (data.checkInWindow as string) || '';
                const tsIn = data.checkInDate as Timestamp | undefined;
                if (!tsIn) continue;
                const exKey = ymdKey(tsIn.toDate(), bizTZ);
                if (exKey === cinKey && win === checkInWindow) countForWindow += 1;
            }
            if (countForWindow + 1 > maxPerTimeSlot) {
                setCapacityBlockingNights([cinKey]);
                setShowCapacityAlert(true);
            }
        } catch (e) {
            console.error('❌ Per-slot cap query failed:', e);
        }
    }, [maxPerTimeSlot, checkInTimeRequired, checkInDate, checkInWindow, includePendingInCapacity, businessId, bizTZ]);

    /** =========================
     *  Change handlers to mirror iOS onChange(...)
     *  ========================= */
    useEffect(() => {
        setSuppressValidations(false);
        refreshCheckInOptions();
        revalidateAll();
    }, [checkInDate, refreshCheckInOptions, revalidateAll]);

    useEffect(() => {
        setSuppressValidations(false);
        refreshCheckOutOptions();
        revalidateAll();
    }, [checkOutDate, refreshCheckOutOptions, revalidateAll]);

    useEffect(() => {
        setSuppressValidations(false);
        revalidateAll();
    }, [selectedPetIds, revalidateAll]);

    /** =========================
     *  Waiver agree handler
     *  ========================= */
    const handleAgreeToWaiver = useCallback(async () => {
        if (!userId || !businessId) return;
        try {
            // Load latest waiverVersion to backfill if needed
            const wref = doc(db, 'businesses', businessId, 'settings', 'clientWaiver');
            const wsnap = await getDoc(wref);
            const version = (wsnap.data()?.waiverVersion as number) ?? 1;

            const cref = doc(db, 'userApprovedBusinesses', businessId, 'clients', userId);
            await setDoc(
                cref,
                enforceWaiverVersion
                    ? { waiverVersionSigned: version, waiverSignedAt: Timestamp.now() }
                    : { waiverSignedAt: Timestamp.now() },
                { merge: true }
            );

            setWaiverSigned(true);
            setShowWaiverModal(false);
        } catch (e) {
            console.error('❌ Failed to record waiver:', e);
            alert(t('waiver_agreement_failed'));
        }
    }, [businessId, userId, enforceWaiverVersion, t]);

    /** =========================
     *  UI
     *  ========================= */
    return (
        <div className="min-h-screen bg-[color:var(--color-background)] px-4 py-6 text-[color:var(--color-foreground)]">
            <div className="w-full max-w-xl mx-auto space-y-6">
                {/* Back */}
                <button
                    onClick={() => router.push(`/${locale}/individualselectservice?businessId=${businessId}`)}
                    className="mb-2 text-sm text-[color:var(--color-accent)] underline hover:opacity-90"
                >
                    ← {t('back_to_select_service')}
                </button>

                {/* Heading */}
                <h1 className="text-3xl font-bold text-center text-[color:var(--color-accent)]">
                    {t('book_boarding_title')}
                    <br />
                    <span className="text-lg font-normal text-gray-600">{businessName}</span>
                </h1>

                {/* Waiver banner */}
                {waiverRequired && !waiverSigned && (
                    <p className="text-red-600 text-sm text-center whitespace-pre-line">
                        {t('waiver_required_message')}
                    </p>
                )}

                {/* Waiver modal */}
                {showWaiverModal && (
                    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center">
                        <div className="bg-white p-6 rounded-xl shadow-md max-w-md w-full space-y-4">
                            <h2 className="text-lg font-semibold text-center text-[color:var(--color-accent)]">
                                {t('waiver_required_title')}
                            </h2>
                            <p className="text-sm text-gray-700 whitespace-pre-line">{t('waiver_required_message')}</p>

                            <label className="flex items-start gap-2 text-sm text-gray-700">
                                <input
                                    type="checkbox"
                                    checked={hasCheckedAgreement}
                                    onChange={() => setHasCheckedAgreement(v => !v)}
                                    className="mt-1"
                                />
                                <span>{t('waiver_checkbox_label')}</span>
                            </label>

                            <div className="flex justify-end gap-2 pt-1">
                                <button
                                    onClick={() => setShowWaiverModal(false)}
                                    className="px-4 py-2 rounded text-sm bg-gray-200 hover:bg-gray-300"
                                >
                                    {t('cancel_button')}
                                </button>
                                <button
                                    onClick={handleAgreeToWaiver}
                                    disabled={!hasCheckedAgreement}
                                    className={`px-4 py-2 rounded text-sm text-white ${hasCheckedAgreement ? 'bg-green-700 hover:bg-green-600' : 'bg-gray-400 cursor-not-allowed'}`}
                                >
                                    {t('agree_button')}
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {/* Form */}
                <div className="flex flex-col items-center space-y-6">
                    {/* Check-In Date */}
                    <div className="flex flex-col items-center space-y-1 w-full">
                        <label className="font-semibold text-center text-sm">{t('select_checkin_date')}</label>
                        <DatePicker
                            selected={checkInDate}
                            onChange={(d: Date | null) => setCheckInDate(d)}
                            dateFormat="MM/dd/yyyy"
                            className="w-full max-w-xs border p-2 rounded text-sm text-center"
                            placeholderText={t('select_date_placeholder')}
                        />
                    </div>

                    {/* Check-In Time */}
                    {checkInTimeRequired && checkInOptions.length > 0 && (
                        <div className="flex flex-col items-center space-y-1 w-full">
                            <label className="font-semibold text-center text-sm">{t('select_checkin_time')}</label>
                            <select
                                className="w-full max-w-xs border p-2 rounded text-sm"
                                value={checkInWindow}
                                onChange={(e) => setCheckInWindow(e.target.value)}
                            >
                                {checkInOptions.map((opt) => (
                                    <option key={opt} value={opt}>{opt}</option>
                                ))}
                            </select>
                        </div>
                    )}

                    {/* Check-Out Date */}
                    <div className="flex flex-col items-center space-y-1 w-full">
                        <label className="font-semibold text-center text-sm">{t('select_checkout_date')}</label>
                        <DatePicker
                            selected={checkOutDate}
                            onChange={(d: Date | null) => setCheckOutDate(d)}
                            minDate={checkInDate || undefined}
                            dateFormat="MM/dd/yyyy"
                            className="w-full max-w-xs border p-2 rounded text-sm text-center"
                            placeholderText={t('select_date_placeholder')}
                        />
                    </div>

                    {/* Check-Out Time */}
                    {checkOutTimeRequired && checkOutOptions.length > 0 && (
                        <div className="flex flex-col items-center space-y-1 w-full">
                            <label className="font-semibold text-center text-sm">{t('select_checkout_time')}</label>
                            <select
                                className="w-full max-w-xs border p-2 rounded text-sm"
                                value={checkOutWindow}
                                onChange={(e) => setCheckOutWindow(e.target.value)}
                            >
                                {checkOutOptions.map((opt) => (
                                    <option key={opt} value={opt}>{opt}</option>
                                ))}
                            </select>
                        </div>
                    )}

                    {/* Pets */}
                    {!!pets.length && (
                        <div className="flex flex-col items-center space-y-2 w-full max-w-xs">
                            <label className="font-semibold text-center text-sm w-full">{t('select_pets')}</label>
                            <div className="flex flex-col space-y-2 w-full">
                                {pets.map((pet) => {
                                    const checked = selectedPetIds.has(pet.id);
                                    return (
                                        <label key={pet.id} className="flex items-center gap-2 text-sm">
                                            <input
                                                type="checkbox"
                                                checked={checked}
                                                onChange={(e) => {
                                                    const on = e.target.checked;
                                                    setSelectedPetIds(prev => {
                                                        const next = new Set(prev);
                                                        if (on) next.add(pet.id); else next.delete(pet.id);
                                                        return next;
                                                    });
                                                }}
                                            />
                                            <span>{pet.name}</span>
                                        </label>
                                    );
                                })}
                            </div>
                        </div>
                    )}

                    {/* Grooming add-ons */}
                    {groomingAvailableAsAddOn && (
                        <button
                            onClick={() => setShowGroomingModal(true)}
                            className="w-full max-w-xs py-3 rounded-lg text-white text-base font-semibold
               bg-green-800 hover:bg-green-700 shadow-md ring-1 ring-black/10
               focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-600"
                        >
                            {t('select_grooming_addons')}
                        </button>
                    )}

                    {/* Submit */}
                    <button
                        onClick={async () => { await handleSubmit(); }}
                        disabled={isSubmitDisabled}
                        className={`w-full max-w-xs text-white py-3 rounded transition text-sm ${isSubmitDisabled ? 'bg-gray-400 cursor-not-allowed' : 'bg-green-800 hover:bg-green-700'
                            }`}
                    >
                        {isSubmitting ? t('saving') : t('submit_boarding_reservation')}
                    </button>
                </div>
            </div>

            {/* Grooming Modal */}
            {showGroomingModal && (
                <GroomingModal
                    services={groomingServices}
                    pets={pets.filter(p => selectedPetIds.has(p.id))}
                    selections={groomingSelections}
                    onClose={() => setShowGroomingModal(false)}
                    onSave={(sel) => { setGroomingSelections(sel); setShowGroomingModal(false); }}
                    t={t}
                />
            )}
        </div>
    );
    /** =========================
     *  Submit (mirrors iOS)
     *  ========================= */
    async function handleSubmit() {
        // Waiver block
        if (waiverRequired && !waiverSigned) {
            setShowWaiverModal(true);
            return;
        }
        if (!userId || !businessId || !checkInDate || !checkOutDate) return;
        if (checkInDate >= checkOutDate) return;
        if (selectedPetIds.size === 0) return;
        if (checkInTimeRequired && !checkInWindow) return;
        if (checkOutTimeRequired && !checkOutWindow) return;
        if (overlapDetected) { setShowOverlapAlert(true); return; }
        if (capacityBlockingNights.length) { setShowCapacityAlert(true); return; }

        setIsSubmitting(true);
        setSuppressValidations(true);

        try {
            const reservationId = crypto.randomUUID();
            setLastSubmittedReservationId(reservationId);

            const cinKey = ymdKey(checkInDate, bizTZ);
            const coutKey = ymdKey(checkOutDate, bizTZ);
            const nightKeys = nightsBetweenKeys(checkInDate, checkOutDate, bizTZ);
            const nights = nightKeys.length;

            const petStatuses = [...selectedPetIds].reduce<Record<string, string>>((acc, pid) => {
                acc[pid] = 'pending';
                return acc;
            }, {});

            const payload: BoardingReservationWrite = {
                userId,
                businessId,
                petIds: [...selectedPetIds],
                petStatuses,
                status: 'approved',
                realtimeKey: reservationId,
                checkInDate: Timestamp.fromDate(checkInDate),
                checkOutDate: Timestamp.fromDate(checkOutDate),
                checkInDateBusinessTZ: cinKey,
                checkOutDateBusinessTZ: coutKey,
                nights
            };
            if (checkInTimeRequired) payload.checkInWindow = checkInWindow;
            if (checkOutTimeRequired) payload.checkOutWindow = checkOutWindow;
            if (Object.keys(groomingSelections).length) payload.groomingAddOns = groomingSelections;

            // 1) Firestore write
            await setDoc(doc(db, 'boardingReservations', reservationId), payload);

            // 2) Optional RTDB mirroring per pet
            if (clientWritesRTDB) {
                const writes = [...selectedPetIds].map(async (petId) => {
                    const pet = pets.find(p => p.id === petId);
                    if (!pet) return;

                    const rtdbKey = `${reservationId}-${petId}`;
                    const base: Record<string, unknown> = {
                        dogName: pet.name,
                        ownerName,
                        type: 'Boarding',
                        checkInDate: cinKey,
                        checkOutDate: coutKey,
                        nights,
                        status: 'approved',
                        userId,
                        realtimeKey: reservationId
                    };
                    if (checkInTimeRequired) base.checkInWindow = checkInWindow;
                    if (checkOutTimeRequired) base.checkOutWindow = checkOutWindow;

                    // Per-pet grooming add-ons
                    const perPet = groomingSelections[petId] || [];
                    if (perPet.length) base.groomingAddOns = perPet;

                    // Enrich with pet metadata
                    if (pet.medications) base.medications = pet.medications;
                    if (pet.medicationDetails) base.medicationDetails = pet.medicationDetails;
                    if (pet.spayedNeutered) base.spayedNeutered = pet.spayedNeutered;

                    await rtdbSet(ref(rtdb, `upcomingReservations/${businessId}/${rtdbKey}`), base);
                });
                await Promise.all(writes);
            }

            // 3) Backfill waiver version if required
            if (waiverRequired) {
                try {
                    const wref = doc(db, 'businesses', businessId, 'settings', 'clientWaiver');
                    const wsnap = await getDoc(wref);
                    const version = (wsnap.data()?.waiverVersion as number) ?? 1;
                    await setDoc(
                        doc(db, 'userApprovedBusinesses', businessId, 'clients', userId),
                        { waiverVersionSigned: version, waiverSignedAt: Timestamp.now() },
                        { merge: true }
                    );
                } catch (e) {
                    console.warn('⚠️ Waiver backfill failed (non-fatal):', e);
                }
            }

            // UI success
            setIsSubmitting(false);
            setGroomingSelections({});
            alert(t('reservation_submitted')); // Mirrors iOS alert UX
            router.push(`/${locale}/individualupcomingappointments`);
        } catch (e) {
            console.error('❌ Submit failed:', e);
            setIsSubmitting(false);
            setSuppressValidations(false);
            setLastSubmittedReservationId(null);
            alert(t('error_submitting_reservation'));
        }
    }

}

/** =========================
 *  Grooming Modal (per-pet toggles)
 *  ========================= */
function GroomingModal(props: {
    services: string[];
    pets: Pet[];
    selections: GroomingSelections;
    onSave: (sel: GroomingSelections) => void;
    onClose: () => void;
    t: ReturnType<typeof useTranslations>;
}) {
    const { services, pets, selections, onSave, onClose, t } = props;
    const [localSel, setLocalSel] = useState<GroomingSelections>(() => ({ ...selections }));

    const toggle = (petId: string, service: string, on: boolean) => {
        setLocalSel(prev => {
            const next = { ...prev };
            const arr = new Set(next[petId] || []);
            if (on) arr.add(service); else arr.delete(service);
            next[petId] = Array.from(arr);
            if (next[petId].length === 0) delete next[petId];
            return next;
        });
    };

    return (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center">
            <div className="bg-white w-full max-w-lg rounded-xl shadow-md p-0 flex flex-col max-h-[85vh]">
                {/* Header */}
                <div className="flex items-center justify-between px-4 py-3 border-b">
                    <h3 className="text-lg font-semibold text-[color:var(--color-accent)]">
                        {t('grooming_addons_title')}
                    </h3>
                    <button
                        onClick={onClose}
                        className="text-sm px-3 py-1 rounded bg-gray-100 hover:bg-gray-200"
                    >
                        {t('cancel_button')}
                    </button>
                </div>

                {/* Scrollable content */}
                <div className="flex-1 overflow-auto p-4 space-y-4">
                    {pets.map(pet => (
                        <div key={pet.id} className="border rounded p-3">
                            <div className="font-medium mb-2">
                                {t('grooming_for_pet', { name: pet.name })}
                            </div>
                            {services.length === 0 ? (
                                <div className="text-sm text-gray-500">{t('no_services_available')}</div>
                            ) : (
                                <div className="grid grid-cols-1 gap-2">
                                    {services.map(svc => {
                                        const on = (localSel[pet.id] || []).includes(svc);
                                        return (
                                            <label key={`${pet.id}-${svc}`} className="flex items-center gap-2 text-sm">
                                                <input
                                                    type="checkbox"
                                                    checked={on}
                                                    onChange={(e) => toggle(pet.id, svc, e.target.checked)}
                                                />
                                                <span>{svc}</span>
                                            </label>
                                        );
                                    })}
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Footer (always visible) */}
                <div className="sticky bottom-0 bg-white/95 backdrop-blur px-4 py-3 border-t">
                    <button
                        onClick={() => onSave(localSel)}
                        className="w-full py-3 rounded-lg text-white text-base font-semibold
                   bg-green-800 hover:bg-green-700 shadow-md
                   focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-600"
                    >
                        {t('done_button')}
                    </button>
                </div>
            </div>
        </div>
    );
}
