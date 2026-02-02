'use client';

import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';

import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
  getDoc,
  doc,
  updateDoc,
  deleteDoc,
  Timestamp,
  serverTimestamp,
} from 'firebase/firestore';

import {
  getDatabase,
  ref as rtdbRef,
  onValue,
  off as rtdbOff,
  update as rtdbUpdate,
  remove as rtdbRemove,
  set as rtdbSet,
  DataSnapshot,
} from 'firebase/database';

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
 * Types (mirrors SwiftUI model)
 * ========================= */
type ServiceType = 'Daycare' | 'Boarding';

type Reservation = {
  // Identity
  id: string; // RTDB key: "{realtimeKey}-{petId}" (pickup clone adds "-pickup")
  realtimeKey: string; // Firestore doc id shared across pets

  // Type & grouping
  type: ServiceType;
  groupDateKey: string; // daycare: date; boarding: check-in (normal) or check-out (pickup clone)
  isPickup: boolean; // true for checkout-day clone

  // Presentation — common
  dogName: string;
  ownerName: string;
  status: string;

  // Daycare
  daycareDate?: string | null;
  arrivalWindow?: string | null;
  departureWindow?: string | null;

  // Boarding
  boardingCheckInDate?: string | null;
  boardingCheckOutDate?: string | null;
  boardingCheckInWindow?: string | null;
  boardingCheckOutWindow?: string | null;
  nights?: number | null;

  // Optional metadata
  groomingAddOns?: string[] | null;
  medications?: string | null;
  medicationDetails?: string | null;
  spayedNeutered?: string | null;

  // Assessment flag
  isAssessment: boolean;
};

type PetStatuses = Record<string, string>;
type ReservationFS = { petStatuses?: PetStatuses };

/** =========================
 * Small helpers
 * ========================= */
const hasMedications = (r: Reservation) => (r.medications || '').trim().toLowerCase() === 'yes';
const isIntact = (r: Reservation) => (r.spayedNeutered || '').trim().toLowerCase() === 'no';

const sanitizeFirebaseKey = (input: string) => input.trim().split(/[\.\#\$\[\]\/:]/g).join('-');
const isValidFirebaseKey = (key: string) => key.length > 0 && !/[.\#$\[\]\/]/.test(key);

const formatISOToLong = (iso: string | null | undefined) => {
  if (!iso) return '—';
  const fIn = new Date(`${iso}T00:00:00`);
  if (Number.isNaN(fIn.getTime())) return iso;
  return new Intl.DateTimeFormat(undefined, { dateStyle: 'long' }).format(fIn);
};

const nowISO = () => new Date().toISOString();

/** Time parsing + sort helpers */

// Minutes since midnight for the *start* of a window string.
// Handles: "7am", "7:00 AM–9:00 AM", "10:30am-12pm", "8:00 AM", "Afternoon", "Anytime", "".
// Empty/unknown windows sink to the BOTTOM (23:59).
const minuteFromWindow = (window?: string | null): number => {
  const LATE = 23 * 60 + 59;
  if (!window) return LATE;
  let s = String(window).trim();
  if (!s) return LATE;

  // normalize dashes/spacers
  s = s
    .replace(/ — | – |–|—/g, '-')
    .replace(/\s+to\s+/gi, '-');

  // named buckets
  switch (s.toLowerCase()) {
    case 'morning': return 8 * 60;
    case 'midday': return 12 * 60;
    case 'afternoon': return 15 * 60;
    case 'evening': return 17 * 60;
    case 'anytime': return 12 * 60;
    default: break;
  }

  // first token of range is the start time
  const start = s.split('-')[0]?.trim() || s;

  // common formats
  const tryParse = (fmt: RegExp) => {
    const m = start.match(fmt);
    if (!m) return null;
    let hh = Number(m[1] ?? 0);
    const mm = Number(m[2] ?? 0);
    const ampm = (m[3] ?? '').toLowerCase();
    if (ampm === 'pm' && hh < 12) hh += 12;
    if (ampm === 'am' && hh === 12) hh = 0;
    if (hh < 0 || hh > 23 || mm < 0 || mm > 59) return null;
    return hh * 60 + mm;
  };

  // 7:30 AM / 7:30AM / 7:30 am
  const res: number | null =
    tryParse(/^(\d{1,2}):(\d{2})\s*([ap]m)$/i) ||
    // 7 AM / 7AM
    tryParse(/^(\d{1,2})\s*([ap]m)$/i) ||
    // 07:30 (24h)
    tryParse(/^(\d{1,2}):(\d{2})$/);

  if (res != null) return res;

  // compact like "730am", "1030pm", "7am"
  const lower = start.toLowerCase().replace(/\s+/g, '');
  const pm = lower.endsWith('pm');
  const am = lower.endsWith('am');
  const digits = lower.replace(/am|pm/g, '');
  const n = Number(digits);
  if (!Number.isNaN(n)) {
    let h = 0, m = 0;
    if (n < 100) { h = n; m = 0; }
    else if (n < 1000) { h = Math.floor(n / 100); m = n % 100; }
    else { h = Math.floor(n / 100); m = n % 100; }
    if (pm && h < 12) h += 12;
    if (am && h === 12) h = 0;
    if (h >= 0 && h <= 23 && m >= 0 && m <= 59) return h * 60 + m;
  }

  return LATE;
};

// Numeric start minute for sorting by type (drop-off vs pickup)
const startMinute = (r: Reservation): number => {
  if (r.type === 'Boarding') {
    const w = r.isPickup ? r.boardingCheckOutWindow : r.boardingCheckInWindow;
    return minuteFromWindow(w);
  }
  return minuteFromWindow(r.arrivalWindow);
};

// NEW — nights helper (mirrors iOS nightsBetween)
const nightsBetween = (startISO: string, endISO: string): number => {
  const toDate = (iso: string) => new Date(`${iso}T00:00:00Z`);
  const start = toDate(startISO);
  const end = toDate(endISO);
  const diffMs = end.getTime() - start.getTime();
  const diffDays = Math.round(diffMs / (1000 * 60 * 60 * 24));
  return Math.max(1, diffDays || 1);
};

// NEW — convert minutes since midnight -> "HH:MM" (24h) for <input type="time">
const minutesToHtmlTime = (mins: number): string => {
  let h = Math.floor(mins / 60);
  let m = mins % 60;
  if (h < 0) h = 0;
  if (h > 23) h = 23;
  if (m < 0) m = 0;
  if (m > 59) m = 59;
  return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}`;
};

// NEW — map an arrival/check-in window string to HTML "HH:MM" time
const windowToHtmlTime = (window?: string | null): string => {
  const mins = minuteFromWindow(window);
  return minutesToHtmlTime(mins);
};

// NEW — convert "HH:MM" (24h) to display window "h:mm AM/PM"
const htmlTimeToWindow = (time: string): string => {
  // expect "HH:MM"
  const [hhStr, mmStr] = time.split(':');
  const hh = Number(hhStr);
  const mm = Number(mmStr);

  if (Number.isNaN(hh) || Number.isNaN(mm)) return time;

  const ampm = hh >= 12 ? 'PM' : 'AM';
  let h12 = hh % 12;
  if (h12 === 0) h12 = 12;

  return `${h12}:${mm.toString().padStart(2, '0')} ${ampm}`;
};

// Keep pickups after drop-offs if times tie
const pickupBit = (r: Reservation) => (r.isPickup ? 1 : 0);


export default function BoardingAndDaycareUpcomingReservationsPage() {
  const t = useTranslations('boardingAndDaycareUpcomingReservations');
  const locale = useLocale();
  const router = useRouter();

  // Core state
  const [businessId, setBusinessId] = useState<string>('');
  const [reservations, setReservations] = useState<Reservation[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  // NEW — Reservation approval requirements
  const [requireDaycareReservationApproval, setRequireDaycareReservationApproval] = useState(false);
  const [requireBoardingReservationApproval, setRequireBoardingReservationApproval] = useState(false);

  // NEW — expanded date sections for accordion
  const [expandedDates, setExpandedDates] = useState<Set<string>>(new Set());

  // NEW — For confirmation alerts (Approve / Decline / Check In / No Show / Check Out)
  const [confirmAction, setConfirmAction] = useState<null | {
    type: 'approve' | 'decline' | 'checkin' | 'noshow' | 'checkout',
    reservation: Reservation
  }>(null);

  // NEW — Edit appointment modal state
  const [editModal, setEditModal] = useState<null | {
    reservation: Reservation;
    checkInDate: string;
    checkOutDate: string;
    checkInTime: string;
    checkOutTime: string;
    applyToAllPets: boolean;
    checkInLocked: boolean;
  }>(null);

  // RTDB listener handle
  const rtdbSubRef = useRef<ReturnType<typeof rtdbRef> | null>(null);
  const rtdbCbRef = useRef<((snap: DataSnapshot) => void) | null>(null);

  const grouped = useMemo(() => {
    const map: Record<string, Reservation[]> = {};
    for (const r of reservations) {
      if (!map[r.groupDateKey]) map[r.groupDateKey] = [];
      map[r.groupDateKey].push(r);
    }
    // sort inside each group by true time (minutes), then pickupBit, then owner/dog
    Object.values(map).forEach((list) => {
      list.sort((a, b) => {
        // (items are already same date, but guard anyway)
        if (a.groupDateKey !== b.groupDateKey) return a.groupDateKey < b.groupDateKey ? -1 : 1;

        const la = startMinute(a), lb = startMinute(b);
        if (la !== lb) return la - lb;

        const pa = pickupBit(a) - pickupBit(b);
        if (pa !== 0) return pa;

        const oa = (a.ownerName || '').toLowerCase();
        const ob = (b.ownerName || '').toLowerCase();
        if (oa !== ob) return oa < ob ? -1 : 1;

        const da = (a.dogName || '').toLowerCase();
        const db = (b.dogName || '').toLowerCase();
        return da < db ? -1 : (da > db ? 1 : 0);
      });
    });
    return map;
  }, [reservations]);

  /** =========================
   * NEW: Per-day counts (matches iOS)
   * ========================= */

  const daycareSignUpsCount = useCallback((dateKey: string): number => {
    const items = grouped[dateKey] || [];
    return items.filter((r) => r.type === 'Daycare').length;
  }, [grouped]);

  // Dogs staying overnight on `dateKey` means:
  // checkInDate <= dateKey < checkOutDate
  // Dedup by base RTDB key so pickup clones don't double-count.
  const boardingOvernightCount = useCallback((dateKey: string): number => {
    const unique: Record<string, Reservation> = {};

    for (const r of reservations) {
      if (r.type !== 'Boarding') continue;
      const baseKey = r.id.endsWith('-pickup') ? r.id.slice(0, -7) : r.id;
      if (!unique[baseKey]) unique[baseKey] = r;
    }

    let count = 0;

    for (const baseKey of Object.keys(unique)) {
      const r = unique[baseKey];
      const statusLower = String(r.status || '').trim().toLowerCase();

      // Exclude finalized statuses
      if (statusLower === 'declined' || statusLower === 'noshow' || statusLower === 'checkedout') {
        continue;
      }

      const cin = String(r.boardingCheckInDate || '').trim();
      const cout = String(r.boardingCheckOutDate || '').trim();
      if (!cin || !cout) continue;

      // ISO yyyy-MM-dd string comparisons are valid lexicographically.
      if (cin <= dateKey && dateKey < cout) {
        count += 1;
      }
    }

    return count;
  }, [reservations]);

  /** =========================
   * Auth + business id resolution
   * ========================= */
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (user) => {
      if (!user) {
        router.push(`/${locale}/loginsignup`);
        return;
      }
      setIsLoading(true);
      try {
        // Find business the user owns
        const qref = query(collection(db, 'businesses'), where('ownerId', '==', user.uid));
        const snap = await getDocs(qref);
        const first = snap.docs[0];
        if (!first) {
          setErrorMsg(t('error_no_business_record'));
          setIsLoading(false);
          return;
        }
        const bizId = sanitizeFirebaseKey(first.id);
        if (!isValidFirebaseKey(bizId)) {
          setErrorMsg(t('error_invalid_business_key'));
          setIsLoading(false);
          return;
        }

        // NEW — Load approval toggles from Firestore
        const data = first.data();
        setRequireDaycareReservationApproval(
          data.requireDaycareReservationApproval === true
        );
        setRequireBoardingReservationApproval(
          data.requireBoardingReservationApproval === true
        );

        setBusinessId(bizId);

      } catch (e) {
        console.error('❌ Business lookup failed:', e);
        setErrorMsg(t('error_load_business'));
        setIsLoading(false);
      }
    });
    return () => unsub();
  }, [router, locale, t]);

  /** =========================
   * Start/stop RTDB listener when businessId is ready
   * ========================= */
  useEffect(() => {
    if (!businessId) return;

    // Cleanup any old listener
    if (rtdbSubRef.current && rtdbCbRef.current) {
      rtdbOff(rtdbSubRef.current, 'value', rtdbCbRef.current);
      rtdbSubRef.current = null;
      rtdbCbRef.current = null;
    }

    const ref = rtdbRef(rtdb, `upcomingReservations/${businessId}`);
    const cb = (snap: DataSnapshot) => applySnapshot(snap);
    onValue(ref, cb);
    rtdbSubRef.current = ref;
    rtdbCbRef.current = cb;

    return () => {
      if (rtdbSubRef.current && rtdbCbRef.current) {
        rtdbOff(rtdbSubRef.current, 'value', rtdbCbRef.current);
        rtdbSubRef.current = null;
        rtdbCbRef.current = null;
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [businessId]);

  /** =========================
   * Snapshot parser (matches Swift)
   * ========================= */
  const applySnapshot = (snapshot: DataSnapshot) => {
    try {
      const list: Reservation[] = [];
      snapshot.forEach((child) => {
        const val = child.val() as Record<string, unknown> | null;
        if (!val || typeof val !== 'object') return;

        const dogName = (String(val['dogName'] ?? '').trim()) || t('unknown_dog');
        const ownerName = (String(val['ownerName'] ?? '').trim()) || t('unknown_owner');

        // Type detection (MUST happen before status logic)
        const rawType = String(val['type'] ?? '').trim();
        const hasBoardingDates = !!val['checkInDate'] || !!val['checkOutDate'];
        const type: ServiceType =
          rawType === 'Daycare' || rawType === 'Boarding'
            ? rawType
            : (hasBoardingDates ? 'Boarding' : 'Daycare');

        // Status normalization (uses per-business toggles)
        const rawStatus = String(val['status'] ?? '').trim();
        const lowerStatus = rawStatus.toLowerCase();

        // Determine whether this reservation needs approval based on business toggles
        const needsApprovalForThis =
          (type === 'Daycare' && requireDaycareReservationApproval) ||
          (type === 'Boarding' && requireBoardingReservationApproval);

        // Allowed statuses we recognize
        const allowed = new Set(['pending', 'approved', 'declined', 'checkedin', 'checkedout', 'noshow']);

        // If approval is required, missing/unknown -> pending; otherwise missing/unknown -> approved
        const normalizedLower = allowed.has(lowerStatus)
          ? lowerStatus
          : (needsApprovalForThis ? 'pending' : 'approved');

        // Canonical status string (keeps your existing casing style)
        const statusRaw =
          normalizedLower === 'approved' ? 'approved'
            : normalizedLower === 'declined' ? 'declined'
              : normalizedLower === 'checkedin' ? 'checkedIn'
                : normalizedLower === 'checkedout' ? 'checkedOut'
                  : normalizedLower === 'noshow' ? 'noShow'
                    : 'pending';

        const statusLower = statusRaw.toLowerCase();

        const realtimeKey =
          String(val['realtimeKey'] ?? '') ||
          child.key.split('-').slice(0, -1).join('-');


        const groomingAddOns = (val['groomingAddOns'] as string[]) || null;
        const medications = (val['medications'] as string) || null;
        const medicationDetails = (val['medicationDetails'] as string) || null;
        const spayedNeutered = (val['spayedNeutered'] as string) || null;
        const isAssessment = (val['isAssessment'] as boolean) ?? false;

        if (type === 'Boarding') {
          const cin = (val['checkInDate'] as string) || '';
          const cout = (val['checkOutDate'] as string) || '';
          const ciWin = (val['checkInWindow'] as string) || '';
          const coWin = (val['checkOutWindow'] as string) || '';
          const nInt = (val['nights'] as number | undefined);
          const nights = typeof nInt === 'number' ? Math.round(nInt) : null;

          // Ensure "{...}-{petId}" pattern exists
          const hasPetId = child.key.includes('-');
          if (!hasPetId) return;

          // Boarding drop-off row — ONLY if not checkedin/checkedout/noshow
          if (
            cin &&
            statusLower !== 'checkedin' &&
            statusLower !== 'checkedout' &&
            statusLower !== 'noshow'
          ) {
            list.push({
              id: child.key,
              realtimeKey,
              type: 'Boarding',
              groupDateKey: cin,
              isPickup: false,
              dogName,
              ownerName,
              status: statusRaw,
              daycareDate: null,
              arrivalWindow: null,
              boardingCheckInDate: cin,
              boardingCheckOutDate: cout || null,
              boardingCheckInWindow: ciWin || null,
              boardingCheckOutWindow: coWin || null,
              nights,
              groomingAddOns,
              medications,
              medicationDetails,
              spayedNeutered,
              isAssessment,
            });
          }

          // Boarding pickup row — ONLY if not noshow/checkedout
          if (
            cout &&
            statusLower !== 'noshow' &&
            statusLower !== 'checkedout'
          ) {
            list.push({
              id: `${child.key}-pickup`,
              realtimeKey,
              type: 'Boarding',
              groupDateKey: cout,
              isPickup: true,
              dogName,
              ownerName,
              status: statusRaw,
              daycareDate: null,
              arrivalWindow: null,
              boardingCheckInDate: cin || null,
              boardingCheckOutDate: cout,
              boardingCheckInWindow: ciWin || null,
              boardingCheckOutWindow: coWin || null,
              nights,
              groomingAddOns,
              medications,
              medicationDetails,
              spayedNeutered,
              isAssessment,
            });
          }

        } else {
          // Daycare: requires date + arrivalWindow
          const date = (val['date'] as string) || '';
          const arrive = (val['arrivalWindow'] as string) || '';
          const depart = (val['departureWindow'] as string) || null;

          if (!date || !arrive) return;

          list.push({
            id: child.key,
            realtimeKey,
            type: 'Daycare',
            groupDateKey: date,
            isPickup: false,
            dogName,
            ownerName,
            status: statusRaw,
            daycareDate: date,
            arrivalWindow: arrive,
            departureWindow: depart,
            boardingCheckInDate: null,
            boardingCheckOutDate: null,
            boardingCheckInWindow: null,
            boardingCheckOutWindow: null,
            nights: null,
            groomingAddOns,
            medications,
            medicationDetails,
            spayedNeutered,
            isAssessment,
          });
        }
      });

      // Sort by (date ASC, startMinute ASC, pickupBit ASC) + stable tie-breakers
      list.sort((a, b) => {
        if (a.groupDateKey !== b.groupDateKey) {
          return a.groupDateKey < b.groupDateKey ? -1 : 1;
        }

        const la = startMinute(a), lb = startMinute(b);
        if (la !== lb) return la - lb;

        const pa = pickupBit(a) - pickupBit(b);
        if (pa !== 0) return pa;

        const oa = (a.ownerName || '').toLowerCase();
        const ob = (b.ownerName || '').toLowerCase();
        if (oa !== ob) return oa < ob ? -1 : 1;

        const da = (a.dogName || '').toLowerCase();
        const db = (b.dogName || '').toLowerCase();
        return da < db ? -1 : (da > db ? 1 : 0);
      });

      setReservations(list);
      // expand the first date section by default
      if (list.length && expandedDates.size === 0) {
        setExpandedDates(new Set([list[0].groupDateKey]));
      }
      setIsLoading(false);
      setErrorMsg(null);
    } catch (e) {
      console.error('❌ applySnapshot failed:', e);
      setErrorMsg(t('error_parse_snapshot'));
      setIsLoading(false);
    }
  };

  /** =========================
* Actions: Check-In / No-Show
* ========================= */
  const checkIn = useCallback(async (r: Reservation) => {
    if (!r || r.isPickup) return;
    if (!businessId || !isValidFirebaseKey(businessId)) return;

    const petId = r.id.split('-').pop()!;
    if (!isValidFirebaseKey(petId)) return;

    const dateKey = r.type === 'Boarding'
      ? (r.boardingCheckInDate || r.groupDateKey)
      : (r.daycareDate || r.groupDateKey);

    const checkInPath = rtdbRef(rtdb, `checkIns/${businessId}/${dateKey}/${petId}`);
    const baseKey = `${r.realtimeKey}-${petId}`;
    const upRef = rtdbRef(rtdb, `upcomingReservations/${businessId}/${baseKey}`);

    // payload (include assessment + optional metadata)
    const payload: Record<string, unknown> = {
      name: r.dogName,
      owner: r.ownerName,
      type: r.type,
      checkInTime: nowISO(),
      isAssessment: !!r.isAssessment,
    };
    if (r.medications) payload.medications = r.medications;
    if (r.medicationDetails) payload.medicationDetails = r.medicationDetails;
    if (r.spayedNeutered) payload.spayedNeutered = r.spayedNeutered;
    if (r.groomingAddOns?.length) payload.groomingAddOns = r.groomingAddOns;

    try {
      await rtdbSet(checkInPath, payload);

      if (r.type === 'Boarding') {
        await rtdbUpdate(upRef, { status: 'checkedIn', checkedInAt: nowISO() });
        // remove only the drop-off row from UI
        setReservations((prev) => prev.filter((x) => x.id !== r.id));
      } else {
        // daycare: remove the RTDB row entirely
        await rtdbRemove(upRef);
        // remove from UI
        setReservations((prev) => prev.filter((x) => x.id !== r.id));
      }

      // Firestore petStatuses update
      const col = r.type === 'Boarding' ? 'boardingReservations' : 'daycareReservations';
      const fsRef = doc(db, col, r.realtimeKey);
      const snap = await getDoc(fsRef);
      const data = snap.data() as ReservationFS | undefined;
      if (data?.petStatuses) {
        data.petStatuses[petId] = 'checkedIn';
        const values = Object.values(data.petStatuses);
        const allFinalized = values.every((v) => v === 'checkedIn' || v === 'noShow');
        if (r.type === 'Daycare' && allFinalized) {
          await deleteDoc(fsRef);
        } else {
          await updateDoc(fsRef, { petStatuses: data.petStatuses });
        }
      }
    } catch (e) {
      console.error('❌ checkIn failed:', e);
    }
  }, [businessId]);

  const markNoShow = useCallback(async (r: Reservation) => {
    if (!r || r.isPickup) return;
    if (!businessId || !isValidFirebaseKey(businessId)) return;

    const petId = r.id.split('-').pop()!;
    const baseKey = `${r.realtimeKey}-${petId}`;

    try {
      // Remove from RTDB
      await rtdbRemove(rtdbRef(rtdb, `upcomingReservations/${businessId}/${baseKey}`));

      // Remove drop-off + pickup from UI
      setReservations((prev) =>
        prev.filter((x) => x.id !== baseKey && x.id !== `${baseKey}-pickup`)
      );

      // Firestore update
      const col = r.type === 'Boarding' ? 'boardingReservations' : 'daycareReservations';
      const fsRef = doc(db, col, r.realtimeKey);
      const snap = await getDoc(fsRef);
      const data = snap.data() as ReservationFS | undefined;

      if (data?.petStatuses) {
        data.petStatuses[petId] = 'noShow';
        const values = Object.values(data.petStatuses);
        const allFinal = values.every(
          (v) => v === 'checkedIn' || v === 'noShow'
        );

        if (allFinal) {
          await deleteDoc(fsRef);
        } else {
          await updateDoc(fsRef, { petStatuses: data.petStatuses });
        }
      }
    } catch (e) {
      console.error('❌ markNoShow failed:', e);
    }
  }, [businessId]);

  /** =========================
* Action: Check-Out
* ========================= */
  const checkOut = useCallback(async (r: Reservation) => {
    if (!r || r.type !== 'Boarding') return;
    if (!businessId || !isValidFirebaseKey(businessId)) return;

    // base key without "-pickup"
    const baseKey = r.id.endsWith('-pickup') ? r.id.slice(0, -7) : r.id;
    const petId = baseKey.split('-').pop()!;
    const upKey = `${r.realtimeKey}-${petId}`;
    const dateKey = r.boardingCheckOutDate || r.groupDateKey;

    const outPath = rtdbRef(rtdb, `checkOuts/${businessId}/${dateKey}/${petId}`);
    const payload: Record<string, unknown> = {
      name: r.dogName,
      owner: r.ownerName,
      type: r.type,
      checkOutTime: nowISO(),
      isAssessment: !!r.isAssessment,
    };
    if (r.medications) payload.medications = r.medications;
    if (r.medicationDetails) payload.medicationDetails = r.medicationDetails;
    if (r.spayedNeutered) payload.spayedNeutered = r.spayedNeutered;
    if (r.groomingAddOns?.length) payload.groomingAddOns = r.groomingAddOns;

    try {
      await rtdbSet(outPath, payload);
      // Optimistic UI: remove both drop-off and pickup rows
      setReservations((prev) => prev.filter((x) => x.id !== baseKey && x.id !== `${baseKey}-pickup`));

      await rtdbRemove(rtdbRef(rtdb, `upcomingReservations/${businessId}/${upKey}`));

      // Update Firestore petStatuses -> "checkedOut"
      const fsRef = doc(db, 'boardingReservations', r.realtimeKey);
      const snap = await getDoc(fsRef);
      const data = snap.data() as ReservationFS | undefined;
      if (data?.petStatuses) {
        data.petStatuses[petId] = 'checkedOut';
        const values = Object.values(data.petStatuses);
        const allDone = values.every((v) => {
          const s = String(v).trim().toLowerCase();
          return s === 'checkedout' || s === 'noshow';
        });
        if (allDone) await deleteDoc(fsRef);
        else await updateDoc(fsRef, { petStatuses: data.petStatuses });
      }
    } catch (e) {
      console.error('❌ checkOut failed:', e);
    }
  }, [businessId]);

  /** =========================
 * Actions: Change Dates/Times
 * ========================= */

  const changeBoardingDates = useCallback(async (opts: {
    reservation: Reservation;
    newCheckInISO: string | null;
    newCheckOutISO: string;
    newCheckInWindow: string | null;
    newCheckOutWindow: string;
    applyToAllPets: boolean;
  }) => {
    const { reservation, newCheckInISO, newCheckOutISO, newCheckInWindow, newCheckOutWindow, applyToAllPets } = opts;
    if (!businessId || !isValidFirebaseKey(businessId)) return;
    if (reservation.type !== 'Boarding') return;

    const lockedInISO = reservation.boardingCheckInDate || reservation.groupDateKey;
    const effectiveInISO = newCheckInISO || lockedInISO;
    const effectiveInWindow = newCheckInWindow || reservation.boardingCheckInWindow || null;

    const end = newCheckOutISO;
    const newNights = nightsBetween(effectiveInISO, end);

    const keysToUpdate = new Set<string>();
    if (applyToAllPets) {
      reservations.forEach((x) => {
        if (x.realtimeKey === reservation.realtimeKey && x.type === 'Boarding') {
          const baseId = x.id.endsWith('-pickup') ? x.id.slice(0, -7) : x.id;
          keysToUpdate.add(baseId);
        }
      });
    } else {
      const baseId = reservation.id.endsWith('-pickup') ? reservation.id.slice(0, -7) : reservation.id;
      keysToUpdate.add(baseId);
    }

    const updates: Record<string, unknown> = {};
    keysToUpdate.forEach((baseKey) => {
      if (newCheckInISO) updates[`upcomingReservations/${businessId}/${baseKey}/checkInDate`] = newCheckInISO;
      if (newCheckInWindow) updates[`upcomingReservations/${businessId}/${baseKey}/checkInWindow`] = newCheckInWindow;
      updates[`upcomingReservations/${businessId}/${baseKey}/checkOutDate`] = end;
      updates[`upcomingReservations/${businessId}/${baseKey}/checkOutWindow`] = newCheckOutWindow;
      updates[`upcomingReservations/${businessId}/${baseKey}/nights`] = newNights;
    });

    try {
      await rtdbUpdate(rtdbRef(rtdb), updates);

      const fsRef = doc(db, 'boardingReservations', reservation.realtimeKey);
      await updateDoc(fsRef, {
        checkInDate: Timestamp.fromDate(new Date(`${effectiveInISO}T00:00:00Z`)),
        checkOutDate: Timestamp.fromDate(new Date(`${end}T00:00:00Z`)),
        checkInDateBusinessTZ: effectiveInISO,
        checkOutDateBusinessTZ: end,
        checkOutWindow: newCheckOutWindow,
        nights: newNights,
        modifiedAt: serverTimestamp(),
        ...(newCheckInWindow ? { checkInWindow: newCheckInWindow } : {}),
      });

      setReservations((prev) => {
        const updated = prev.map((x) => {
          if (x.type !== 'Boarding' || x.realtimeKey !== reservation.realtimeKey) return x;

          const baseId = x.id.endsWith('-pickup') ? x.id.slice(0, -7) : x.id;
          if (!keysToUpdate.has(baseId)) return x;

          const updatedIn = newCheckInISO ?? x.boardingCheckInDate ?? effectiveInISO;
          const updatedOut = end;
          const updatedInWin = newCheckInWindow ?? x.boardingCheckInWindow ?? effectiveInWindow;
          const updatedOutWin = newCheckOutWindow;

          return {
            ...x,
            groupDateKey: x.isPickup ? updatedOut : updatedIn,
            boardingCheckInDate: updatedIn,
            boardingCheckOutDate: updatedOut,
            boardingCheckInWindow: updatedInWin,
            boardingCheckOutWindow: updatedOutWin,
            nights: newNights,
          };
        });

        return [...updated].sort((a, b) => {
          if (a.groupDateKey !== b.groupDateKey) return a.groupDateKey < b.groupDateKey ? -1 : 1;
          const la = startMinute(a), lb = startMinute(b);
          if (la !== lb) return la - lb;
          const pa = pickupBit(a) - pickupBit(b);
          if (pa !== 0) return pa;
          const oa = a.ownerName.toLowerCase();
          const ob = b.ownerName.toLowerCase();
          if (oa !== ob) return oa < ob ? -1 : 1;
          const da = a.dogName.toLowerCase(), db = b.dogName.toLowerCase();
          return da < db ? -1 : da > db ? 1 : 0;
        });
      });

    } catch (e) {
      console.error('❌ changeBoardingDates failed:', e);
    }
  }, [businessId, reservations]);

  const changeDaycareDate = useCallback(async (opts: {
    reservation: Reservation;
    newDateISO: string;
    newArrivalWindow: string;
    newDepartureWindow: string;
  }) => {
    const { reservation, newDateISO, newArrivalWindow, newDepartureWindow } = opts;
    if (!businessId || !isValidFirebaseKey(businessId)) return;
    if (reservation.type !== 'Daycare') return;

    try {
      await rtdbUpdate(
        rtdbRef(rtdb, `upcomingReservations/${businessId}/${reservation.id}`),
        { date: newDateISO, arrivalWindow: newArrivalWindow, departureWindow: newDepartureWindow }
      );

      await updateDoc(doc(db, 'daycareReservations', reservation.realtimeKey), {
        date: newDateISO,
        arrivalWindow: newArrivalWindow,
        departureWindow: newDepartureWindow,
        dateBusinessTZ: newDateISO,
        modifiedAt: serverTimestamp(),
      });

      setReservations((prev) =>
        prev
          .map((x) =>
            x.id === reservation.id
              ? {
                ...x,
                groupDateKey: newDateISO,
                daycareDate: newDateISO,
                arrivalWindow: newArrivalWindow,
                departureWindow: newDepartureWindow,
              }
              : x
          )
          .sort((a, b) => {
            if (a.groupDateKey !== b.groupDateKey) return a.groupDateKey < b.groupDateKey ? -1 : 1;
            const la = startMinute(a), lb = startMinute(b);
            if (la !== lb) return la - lb;
            const pa = pickupBit(a) - pickupBit(b);
            if (pa !== 0) return pa;
            const oa = a.ownerName.toLowerCase();
            const ob = b.ownerName.toLowerCase();
            if (oa !== ob) return oa < ob ? -1 : 1;
            const da = a.dogName.toLowerCase();
            const db = b.dogName.toLowerCase();
            return da < db ? -1 : da > db ? 1 : 0;
          })
      );
    } catch (e) {
      console.error('❌ changeDaycareDate failed:', e);
    }
  }, [businessId]);

  // NEW — Unified decline logic (Daycare + Boarding) — mirrors iOS
  const declineReservation = useCallback(async (r: Reservation) => {
    try {
      const petId = r.id.split('-').pop()!;
      const dropKey = `${r.realtimeKey}-${petId}`;
      const pickupKey = `${dropKey}-pickup`;

      // 1️⃣ Remove RTDB upcoming reservations (drop-off)
      await rtdbRemove(rtdbRef(rtdb,
        `upcomingReservations/${businessId}/${dropKey}`
      ));

      // Boarding: also remove pickup clone
      if (r.type === 'Boarding') {
        await rtdbRemove(rtdbRef(rtdb,
          `upcomingReservations/${businessId}/${pickupKey}`
        ));
      }

      // 2️⃣ Firestore: update petStatuses
      const col = r.type === 'Boarding'
        ? 'boardingReservations'
        : 'daycareReservations';
      const fsRef = doc(db, col, r.realtimeKey);

      const snap = await getDoc(fsRef);
      const data = snap.data() as ReservationFS | undefined;
      if (data?.petStatuses) {
        data.petStatuses[petId] = 'declined';

        const allFinal = Object.values(data.petStatuses).every((v) => {
          const s = String(v).trim().toLowerCase();
          return (
            s === 'declined' ||
            s === 'noshow' ||
            s === 'checkedin' ||
            s === 'checkedout'
          );
        });

        if (allFinal) {
          await deleteDoc(fsRef);
        } else {
          await updateDoc(fsRef, { petStatuses: data.petStatuses, status: 'declined' });
        }
      }

      // 3️⃣ Remove from UI (drop-off + pickup if Boarding)
      setReservations((prev) =>
        prev.filter((x) => x.realtimeKey !== r.realtimeKey)
      );
    } catch (e) {
      console.error('❌ declineReservation failed:', e);
    }
  }, [businessId]);

  const approveReservation = useCallback(async (r: Reservation) => {
    if (!r || !businessId || !isValidFirebaseKey(businessId)) return;

    // Base key must match the actual RTDB record key (strip "-pickup" if present)
    const baseKey = r.id.endsWith('-pickup') ? r.id.slice(0, -7) : r.id;

    const petId = baseKey.split('-').pop()!;
    if (!petId) return;

    const approvedAt = nowISO();
    const approvedBy = auth.currentUser?.uid || 'unknown';

    try {
      // 1) ✅ Persist to RTDB so it survives leaving/re-entering the screen
      await rtdbUpdate(rtdbRef(rtdb, `upcomingReservations/${businessId}/${baseKey}`), {
        status: 'approved',
        approvedAt,
        approvedBy,
      });

      // 2) ✅ Persist to Firestore for consistency
      const col = r.type === 'Boarding' ? 'boardingReservations' : 'daycareReservations';
      const fsRef = doc(db, col, r.realtimeKey);

      const snap = await getDoc(fsRef);
      const data = snap.data() as ReservationFS | undefined;

      const nextStatuses: PetStatuses = { ...(data?.petStatuses || {}) };
      nextStatuses[petId] = 'approved';

      await updateDoc(fsRef, {
        petStatuses: nextStatuses,
        status: 'approved',
        approvedAt: serverTimestamp(),
        approvedBy,
      });

    } catch (e) {
      console.error('❌ approveReservation failed:', e);
    }
  }, [businessId]);

  /** =========================
 * UI
 * ========================= */
  return (
    <div className="min-h-screen bg-[color:var(--color-background)] text-[color:var(--color-foreground)]">
      <main className="max-w-3xl mx-auto px-4 py-6">
        <button
          onClick={() =>
            router.push(`/${locale}/boardinganddaycaredashboard`)
          }
          className="mb-2 text-sm text-[color:var(--color-accent)] underline hover:opacity-90"
        >
          ← Back to Business Dashboard
        </button>

        <h1 className="text-3xl font-bold text-center text-[color:var(--color-accent)] mb-4">
          {t('upcoming_reservations_title')}
        </h1>

        {errorMsg && (
          <p className="text-center text-sm text-red-600">❌ {errorMsg}</p>
        )}

        {isLoading ? (
          <p className="text-center text-sm text-gray-600">{t('loading_indicator')}</p>
        ) : Object.keys(grouped).length === 0 ? (
          <p className="text-center text-sm text-gray-600">{t('no_reservations_found')}</p>
        ) : (
          <div className="space-y-4">
            {Object.keys(grouped).sort().map((dateKey) => (
              <section key={dateKey} className="rounded-xl bg-white/70 shadow-sm">
                {/* DATE HEADER */}
                <button
                  className="w-full flex items-start justify-between px-4 py-3"
                  onClick={() => {
                    setExpandedDates((prev) => {
                      const next = new Set(prev);
                      if (next.has(dateKey)) next.delete(dateKey);
                      else next.add(dateKey);
                      return next;
                    });
                  }}
                >
                  <span className="flex flex-col items-start gap-1">
                    <span className="text-base font-semibold text-[color:var(--color-foreground)]">
                      {formatISOToLong(dateKey)}
                    </span>

                    <span className="text-sm text-gray-500">
                      Daycare sign ups: {daycareSignUpsCount(dateKey)}
                    </span>

                    <span className="text-sm text-gray-500">
                      Dogs staying overnight: {boardingOvernightCount(dateKey)}
                    </span>
                  </span>

                  <span className="text-gray-500 pt-0.5">
                    {expandedDates.has(dateKey) ? '▴' : '▾'}
                  </span>
                </button>

                {expandedDates.has(dateKey) && (
                  <div className="px-3 pb-3">
                    {grouped[dateKey].map((r) => {
                      const statusLower = r.status.toLowerCase();

                      const needsApproval =
                        (r.type === 'Daycare' && requireDaycareReservationApproval) ||
                        (r.type === 'Boarding' && requireBoardingReservationApproval);

                      // ✅ Persisted approval state comes from RTDB status
                      const isApproved = statusLower === 'approved';
                      const disabledByApproval = needsApproval && !isApproved;

                      return (
                        <div
                          key={r.id}
                          className="rounded-xl border border-[color:var(--color-accent)] bg-white p-3 mb-3"
                        >
                          {/* HEADER */}
                          <div className="flex items-center gap-2 mb-1">
                            <div className="font-semibold">🐶 {r.dogName}</div>

                            {isIntact(r) && (
                              <span className="text-red-600 text-[11px] font-bold">
                                {t('intact_label')}
                              </span>
                            )}

                            {hasMedications(r) && <span>💊</span>}

                            {r.isAssessment && (
                              <span className="px-2 py-0.5 rounded bg-orange-100 text-orange-700 text-[10px] font-bold">
                                {t('assessment_badge_short')}
                              </span>
                            )}
                          </div>

                          {/* DETAILS */}
                          <div className="text-[13px] text-gray-700">
                            <div>
                              <strong>{t('owner_label')}:</strong> {r.ownerName}
                            </div>
                            <div>
                              <strong>{t('type_label')}:</strong> {r.type}
                            </div>

                            {r.type === 'Boarding' ? (
                              <>
                                <div>
                                  <strong>{t('check_in_label')}:</strong>{' '}
                                  {formatISOToLong(r.boardingCheckInDate || null)}
                                  {r.boardingCheckInWindow?.trim()
                                    ? ` (${r.boardingCheckInWindow})`
                                    : ''}
                                </div>

                                {r.boardingCheckOutDate && (
                                  <div>
                                    <strong>{t('check_out_label')}:</strong>{' '}
                                    {formatISOToLong(r.boardingCheckOutDate)}
                                    {r.boardingCheckOutWindow?.trim()
                                      ? ` (${r.boardingCheckOutWindow})`
                                      : ''}
                                  </div>
                                )}

                                {typeof r.nights === 'number' && (
                                  <div>
                                    <strong>{t('nights_label')}:</strong> {r.nights}
                                  </div>
                                )}
                              </>
                            ) : (
                              <>
                                <div>
                                  <strong>{t('arrival_label')}:</strong>{' '}
                                  {r.arrivalWindow || '—'}
                                </div>

                                {/* ⭐ NEW: Daycare pick-up / departure window */}
                                {r.departureWindow &&
                                  r.departureWindow.trim() !== '' && (
                                    <div>
                                      <strong>{t('pickup_label')}:</strong>{' '}
                                      {r.departureWindow}
                                    </div>
                                  )}
                              </>
                            )}

                            {r.groomingAddOns?.length ? (
                              <div className="text-gray-600 text-[12px] mt-1">
                                🧼 <strong>{t('grooming_label')}:</strong>{' '}
                                {r.groomingAddOns.join(', ')}
                              </div>
                            ) : null}

                            {hasMedications(r) && r.medicationDetails?.trim() && (
                              <div className="text-gray-600 text-[12px] mt-1">
                                <strong>{t('medications_label')}:</strong>{' '}
                                {r.medicationDetails}
                              </div>
                            )}

                            <div className="text-gray-500 text-[12px] mt-1 mb-3">
                              <strong>{t('status_label')}:</strong>{' '}
                              {r.status.charAt(0).toUpperCase() + r.status.slice(1)}
                            </div>
                          </div>

                          {/* ================================
                       BUTTONS — MATCH iOS EXACTLY
                       ================================ */}

                          {/* DROP-OFF: ALWAYS show Check In + No Show if not pickup */}
                          {!r.isPickup && (
                            <>
                              <button
                                className="w-full px-4 py-2 rounded bg-blue-600 hover:bg-blue-500 text-white text-sm mb-2 disabled:opacity-40 disabled:cursor-not-allowed"
                                disabled={disabledByApproval}
                                onClick={() =>
                                  setConfirmAction({ type: 'checkin', reservation: r })
                                }
                              >
                                {t('check_in_button')}
                              </button>

                              <button
                                className="w-full px-4 py-2 rounded bg-red-600 hover:bg-red-500 text-white text-sm mb-2 disabled:opacity-40 disabled:cursor-not-allowed"
                                disabled={disabledByApproval}
                                onClick={() =>
                                  setConfirmAction({ type: 'noshow', reservation: r })
                                }
                              >
                                {t('mark_no_show_button')}
                              </button>
                            </>
                          )}

                          {/* CHANGE APPOINTMENT TIME — ALWAYS for ALL reservations */}
                          <button
                            className={`
                        w-full px-4 py-2 rounded text-white text-sm mb-2
                        ${disabledByApproval
                                ? 'bg-orange-300 cursor-not-allowed'
                                : 'bg-orange-500 hover:bg-orange-400'}
                      `}
                            disabled={disabledByApproval}
                            onClick={() => {
                              const checkInDate =
                                r.type === 'Boarding'
                                  ? (r.boardingCheckInDate || r.groupDateKey)
                                  : (r.daycareDate || r.groupDateKey);

                              const checkOutDate =
                                r.type === 'Boarding'
                                  ? (r.boardingCheckOutDate || checkInDate)
                                  : checkInDate;

                              const checkInTime =
                                r.type === 'Boarding'
                                  ? windowToHtmlTime(r.boardingCheckInWindow || undefined)
                                  : windowToHtmlTime(r.arrivalWindow || undefined);

                              const checkOutTime =
                                r.type === 'Boarding'
                                  ? windowToHtmlTime(r.boardingCheckOutWindow || undefined)
                                  : (r.departureWindow && r.departureWindow.trim() !== ''
                                    ? windowToHtmlTime(r.departureWindow)
                                    : checkInTime);

                              const checkInLocked =
                                r.status.toLowerCase() === 'checkedin' ||
                                r.status.toLowerCase() === 'checkedout';

                              setEditModal({
                                reservation: r,
                                checkInDate,
                                checkOutDate,
                                checkInTime,
                                checkOutTime,
                                applyToAllPets: r.type === 'Boarding',
                                checkInLocked,
                              });
                            }}
                          >
                            {t('change_appointment_time_button')}
                          </button>

                          {/* APPROVAL UI (unchanged) */}
                          {!r.isPickup && (
                            <>
                              {(r.type === 'Daycare' &&
                                requireDaycareReservationApproval) ||
                                (r.type === 'Boarding' &&
                                  requireBoardingReservationApproval) ? (
                                <>
                                  {statusLower === 'declined' && (
                                    <p className="text-[12px] text-red-600 mb-2">
                                      This reservation has been declined.
                                    </p>
                                  )}

                                  {statusLower === 'approved' && (
                                    <p className="text-[12px] text-green-700 mb-2">
                                      Approved. You may now check in this dog.
                                    </p>
                                  )}

                                  {statusLower !== 'approved' &&
                                    statusLower !== 'declined' && (
                                      <>
                                        <button
                                          className="w-full px-4 py-2 rounded bg-green-600 hover:bg-green-500 text-white text-sm mb-2"
                                          onClick={() =>
                                            setConfirmAction({
                                              type: 'approve',
                                              reservation: r,
                                            })
                                          }
                                        >
                                          Approve
                                        </button>

                                        <button
                                          className="w-full px-4 py-2 rounded bg-red-600 hover:bg-red-500 text-white text-sm mb-3"
                                          onClick={() =>
                                            setConfirmAction({
                                              type: 'decline',
                                              reservation: r,
                                            })
                                          }
                                        >
                                          Decline
                                        </button>
                                      </>
                                    )}
                                </>
                              ) : null}
                            </>
                          )}

                          {/* PICKUP ROW — Check Out ALWAYS for boarding pickup */}
                          {r.isPickup && r.type === 'Boarding' && (
                            <button
                              className="w-full px-4 py-2 rounded bg-red-600 hover:bg-red-500 text-white text-sm mb-2"
                              onClick={() =>
                                setConfirmAction({ type: 'checkout', reservation: r })
                              }
                            >
                              {t('check_out_button')}
                            </button>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}
              </section>
            ))}
          </div>
        )}
      </main>

      {/* ============================================================
      EDIT APPOINTMENT MODAL (Boarding + Daycare)
      ============================================================ */}
      {editModal && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center">
          <div className="bg-white rounded-xl shadow-md w-full max-w-md p-5 space-y-4">

            <h3 className="text-lg font-semibold">
              {t('change_appointment_time_button')}
            </h3>

            <div className="text-sm border rounded-lg p-3 bg-gray-50 space-y-1">
              <div>🐶 <strong>{editModal.reservation.dogName}</strong></div>
              <div><strong>{t('owner_label')}:</strong> {editModal.reservation.ownerName}</div>
              <div><strong>{t('status_label')}:</strong> {editModal.reservation.status}</div>
            </div>

            {/* DATES */}
            <div className="space-y-2">
              <h4 className="text-xs font-semibold text-gray-500 uppercase">
                {t('change_dates_title')}
              </h4>

              {editModal.reservation.type === 'Boarding' && (
                <label className="flex items-center justify-between">
                  <span>{t('check_in_label')}</span>
                  <input
                    type="date"
                    className="border rounded px-2 py-1"
                    disabled={editModal.checkInLocked}
                    value={editModal.checkInDate}
                    onChange={(e) =>
                      setEditModal((p) => p ? { ...p, checkInDate: e.target.value } : p)
                    }
                  />
                </label>
              )}

              <label className="flex items-center justify-between">
                <span>
                  {editModal.reservation.type === 'Boarding'
                    ? t('check_out_label')
                    : t('check_in_label')}
                </span>
                <input
                  type="date"
                  className="border rounded px-2 py-1"
                  value={editModal.checkOutDate}
                  onChange={(e) =>
                    setEditModal((p) => p ? { ...p, checkOutDate: e.target.value } : p)
                  }
                />
              </label>
            </div>

            {/* TIMES */}
            <div className="space-y-2">
              <h4 className="text-xs font-semibold text-gray-500 uppercase">
                {t('change_times_title')}
              </h4>

              <label className="flex items-center justify-between">
                <span>{t('check_in_time_label')}</span>
                <input
                  type="time"
                  className="border rounded px-2 py-1"
                  disabled={editModal.checkInLocked}
                  value={editModal.checkInTime}
                  onChange={(e) =>
                    setEditModal((p) => p ? { ...p, checkInTime: e.target.value } : p)
                  }
                />
              </label>

              {/* ✅ FIX: Always show the second time field (Boarding = check-out, Daycare = pick-up) */}
              <label className="flex items-center justify-between">
                <span>
                  {editModal.reservation.type === 'Boarding'
                    ? t('check_out_time_label')
                    : t('pickup_label')}
                </span>
                <input
                  type="time"
                  className="border rounded px-2 py-1"
                  value={editModal.checkOutTime}
                  onChange={(e) =>
                    setEditModal((p) =>
                      p ? { ...p, checkOutTime: e.target.value } : p
                    )
                  }
                />
              </label>
            </div>

            {/* APPLY TO ALL PETS */}
            {editModal.reservation.type === 'Boarding' && (
              <label className="flex items-center justify-between">
                <span>{t('apply_to_all_pets_toggle')}</span>
                <input
                  type="checkbox"
                  checked={editModal.applyToAllPets}
                  onChange={(e) =>
                    setEditModal((p) =>
                      p ? { ...p, applyToAllPets: e.target.checked } : p
                    )
                  }
                />
              </label>
            )}

            {/* ACTION BUTTONS */}
            <div className="flex justify-end gap-2">
              <button
                className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300"
                onClick={() => setEditModal(null)}
              >
                {t('cancel_button')}
              </button>

              <button
                className="px-4 py-2 rounded bg-green-700 hover:bg-green-600 text-white"
                onClick={async () => {
                  const r = editModal.reservation;

                  if (r.type === 'Boarding') {
                    await changeBoardingDates({
                      reservation: r,
                      newCheckInISO: editModal.checkInLocked ? null : editModal.checkInDate,
                      newCheckOutISO: editModal.checkOutDate,
                      newCheckInWindow: editModal.checkInLocked ? null : htmlTimeToWindow(editModal.checkInTime),
                      newCheckOutWindow: htmlTimeToWindow(editModal.checkOutTime),
                      applyToAllPets: editModal.applyToAllPets,
                    });
                  } else {
                    await changeDaycareDate({
                      reservation: r,
                      newDateISO: editModal.checkOutDate,
                      newArrivalWindow: htmlTimeToWindow(editModal.checkInTime),
                      newDepartureWindow: htmlTimeToWindow(editModal.checkOutTime),
                    });
                  }

                  setEditModal(null);
                }}
              >
                {t('save_button')}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ============================================================
          CONFIRMATION MODAL (Approve / Decline / Check In / No Show / Check Out)
      ============================================================ */}
      {confirmAction && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center">
          <div className="bg-white rounded-xl shadow-md w-full max-w-sm p-5 space-y-4">

            <h3 className="text-lg font-semibold">
              {confirmAction.type === 'approve' && 'Approve Reservation?'}
              {confirmAction.type === 'decline' && 'Decline Reservation?'}
              {confirmAction.type === 'checkin' && t('check_in_alert_title')}
              {confirmAction.type === 'noshow' && t('no_show_alert_title')}
              {confirmAction.type === 'checkout' && t('check_out_alert_title')}
            </h3>

            <div className="flex justify-end gap-2">
              <button
                className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300 text-sm"
                onClick={() => setConfirmAction(null)}
              >
                {t('no_button')}
              </button>

              <button
                className="px-4 py-2 rounded bg-green-700 hover:bg-green-600 text-white text-sm"
                onClick={async () => {
                  const action = confirmAction;
                  setConfirmAction(null);

                  if (!action) return;

                  if (action.type === 'approve') {
                    await approveReservation(action.reservation);
                    return;
                  }

                  if (action.type === 'decline') {
                    await declineReservation(action.reservation);
                    return;
                  }

                  if (action.type === 'checkin') {
                    await checkIn(action.reservation);
                    return;
                  }

                  if (action.type === 'noshow') {
                    await markNoShow(action.reservation);
                    return;
                  }

                  if (action.type === 'checkout') {
                    await checkOut(action.reservation);
                    return;
                  }
                }}
              >
                {t('yes_button')}
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
