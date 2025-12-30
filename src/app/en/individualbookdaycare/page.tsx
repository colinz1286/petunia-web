'use client';

import React, {
  useCallback,
  useEffect,
  useState,
} from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

/* =========================
   Firebase (init once)
   ========================= */
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
  medications?: string;
  medicationDetails?: string;
  spayedNeutered?: string;
};

type GroomingSelections = Record<string, string[]>; // { petId: [service,...] }
type WeekdayMap = Record<string, string[]>;

type BusinessSettings = {
  timeZoneId?: string;
  features?: {
    countPendingInCapacity?: boolean;
    clientWritesRTDB?: boolean;
  };

  // ✅ NEW: approval toggle
  requireDaycareReservationApproval?: boolean;

  dropOffTimeRequiredDaycare?: boolean;
  pickUpTimeRequiredDaycare?: boolean;
  pickUpTimesDaycare?: WeekdayMap;
  temperamentTestRequired?: boolean;
  dropOffTimesDaycare?: WeekdayMap;
  bookingLimits?: { maxPerTimeSlot?: number };
  requiredVaccinations?: Record<string, boolean>;
  blackoutDates?: Timestamp[];

  // Grooming
  groomingAvailableAsAddOnToDaycare?: boolean;
  groomingServices?: string[];
};

type RTDBUpcomingRow = {
  arrivalWindow?: string;
  departureWindow?: string;
  status?: string;
  date?: string;
  dateBusinessTZ?: string;
};

type RTDBUpcomingWriteRow = {
  dogName: string;
  ownerName: string;
  type: 'Daycare' | 'Boarding';
  date: string;               // device TZ key (e.g., 2025-08-29)
  dateBusinessTZ: string;     // business TZ key
  arrivalWindow?: string;
  departureWindow?: string;
  status: 'approved' | 'pending';
  userId: string;
  realtimeKey: string;
  isAssessment?: boolean;
  groomingAddOns?: string[];
  medications?: string;
  medicationDetails?: string;
  spayedNeutered?: string;
};

type VaccineKey = 'Rabies' | 'Bordetella' | 'Canine Influenza' | 'Distemper';
type PetVaccineRecord = { expiresAt: Date | null; isVaccinated: boolean };
type PetVaccineMap = Record<string, Partial<Record<VaccineKey, PetVaccineRecord>>>;

type DaycareReservationWrite = {
  userId: string;
  businessId: string;
  petIds: string[];
  petStatuses: Record<string, string>;
  date: Timestamp;                // Firestore Timestamp
  dateBusinessTZ: string;         // e.g., "2025-08-29"
  arrivalWindow: string;
  departureWindow?: string;          // "" allowed
  status: 'approved' | 'pending';
  realtimeKey: string;
  isAssessment?: boolean;
  groomingAddOns?: GroomingSelections;
};

type DraftBooking = {
  date: Date;                 // normalized (no time)
  dropOffTime: string;
  pickUpTime: string;  // ⭐ NEW
  petIds: string[];
  isAssessment: boolean;
  groomingAddOns?: GroomingSelections;
};

/* =========================
   Small helpers
   ========================= */
const isValidFirebaseKey = (s: string) => s !== '' && !/[./#$\[\]]/.test(s);

const weekdayName = (d: Date, tz: string) =>
  new Intl.DateTimeFormat('en-US', { timeZone: tz, weekday: 'long' }).format(d);

const ymdKey = (d: Date, tz: string) =>
  new Intl.DateTimeFormat('en-CA', { timeZone: tz, year: 'numeric', month: '2-digit', day: '2-digit' }).format(d);

const normalizeDate = (d: Date) => {
  const n = new Date(d);
  n.setHours(0, 0, 0, 0);
  return n;
};

const parseTimeToMinutes = (label: string) => {
  const m = label.trim().match(/^(\d{1,2}):(\d{2})\s*(AM|PM)$/i);
  if (!m) return Number.POSITIVE_INFINITY;
  let h = parseInt(m[1], 10);
  const mm = parseInt(m[2], 10);
  const ap = m[3].toUpperCase();
  if (ap === 'PM' && h !== 12) h += 12;
  if (ap === 'AM' && h === 12) h = 0;
  return h * 60 + mm;
};

const sortTimeStrings = (arr: string[]) =>
  [...arr].map(s => s.trim()).filter(Boolean).sort((a, b) => parseTimeToMinutes(a) - parseTimeToMinutes(b));

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
export default function IndividualBookDaycarePage() {
  const t = useTranslations('individualBookDaycare');
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
  const [selectedPetIds, setSelectedPetIds] = useState<string[]>([]);

  // Booking inputs
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const [timeOptions, setTimeOptions] = useState<string[]>([]);
  const [selectedTime, setSelectedTime] = useState('');

  // Business settings / features
  const [businessTimeZoneId, setBusinessTimeZoneId] = useState<string | null>(null);
  const [dropOffTimeRequired, setDropOffTimeRequired] = useState(false);
  const [dropOffTimesByWeekday, setDropOffTimesByWeekday] = useState<WeekdayMap>({});

  // ⭐ NEW — Pickup time requirement + time map + options
  const [pickUpTimeRequired, setPickUpTimeRequired] = useState(false);
  const [pickUpTimesByWeekday, setPickUpTimesByWeekday] = useState<WeekdayMap>({});
  const [pickUpTimeOptions, setPickUpTimeOptions] = useState<string[]>([]);
  const [selectedPickUpTime, setSelectedPickUpTime] = useState('');

  const [maxPerTimeSlot, setMaxPerTimeSlot] = useState<number>(3);
  const [includePendingInCapacity, setIncludePendingInCapacity] = useState(false);
  const [clientWritesRTDB, setClientWritesRTDB] = useState(true);

  // ✅ NEW: approval toggle (daycare)
  const [requireDaycareReservationApproval, setRequireDaycareReservationApproval] = useState(false);

  const [temperamentTestRequired, setTemperamentTestRequired] = useState(false);

  // Blackout dates (yyyy-MM-dd in business TZ)
  const [blackoutDates, setBlackoutDates] = useState<Set<string>>(new Set());

  const [isAssessment, setIsAssessment] = useState(false);

  // Duplicate prevention
  const [hasExistingReservation, setHasExistingReservation] = useState(false);

  // Drafts & grooming
  const [draftBookings, setDraftBookings] = useState<DraftBooking[]>([]);
  const [groomingAvailable, setGroomingAvailable] = useState(false);
  const [groomingServices, setGroomingServices] = useState<string[]>([]);
  const [groomingSelections, setGroomingSelections] = useState<GroomingSelections>({});
  const [showGroomingPrompt, setShowGroomingPrompt] = useState(false);
  const [pendingDraft, setPendingDraft] = useState<DraftBooking | null>(null);
  const [showGroomingUI, setShowGroomingUI] = useState(false);

  // Vaccine alerts (read-only)
  const [requiredVaccines, setRequiredVaccines] = useState<Set<VaccineKey>>(new Set());
  const [petVaccineData, setPetVaccineData] = useState<PetVaccineMap>({});
  const [alertsByPet, setAlertsByPet] = useState<Record<string, string[]>>({});
  const [isLoadingAlerts, setIsLoadingAlerts] = useState(false);

  const bizTZ = businessTimeZoneId || Intl.DateTimeFormat().resolvedOptions().timeZone;

  /* =========================
   Vaccine loading + alerts
   ========================= */
  type VaccinationRecFS = { date?: Timestamp; isVaccinated?: boolean } | null | undefined;
  type PetDocFS = { vaccinationRecords?: Record<string, VaccinationRecFS> };

  /** 1) Compute alert strings for currently selected pets (declare FIRST) */
  const recomputeVaccineAlerts = useCallback(
    (source: PetVaccineMap = petVaccineData) => {
      const df = new Intl.DateTimeFormat('en-CA', {
        timeZone: bizTZ,
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
      });

      const out: Record<string, string[]> = {};
      const isExpired = (expiresAt: Date | null) => {
        if (!expiresAt) return true;
        const today = new Date(ymdKey(new Date(), bizTZ));
        const exp = new Date(ymdKey(expiresAt, bizTZ));
        return exp.getTime() < today.getTime();
      };

      selectedPetIds.forEach((pid) => {
        const vmap = source[pid] || {};
        const msgs: string[] = [];
        requiredVaccines.forEach((k) => {
          const rec = vmap[k];
          if (rec?.isVaccinated) {
            if (isExpired(rec.expiresAt)) {
              msgs.push(`${k}: Expired${rec.expiresAt ? ' ' + df.format(rec.expiresAt) : ''}`);
            }
          } else {
            msgs.push(`${k}: Not on file`);
          }
        });
        out[pid] = msgs;
      });
      setAlertsByPet(out);
    },
    [bizTZ, requiredVaccines, selectedPetIds, petVaccineData]
  );

  /** 2) Fetch vaccine data as needed, then recompute (declare AFTER recompute) */
  const loadVaccineData = useCallback(
    async (uid: string, petIds: Set<string>) => {
      const toFetch = Array.from(petIds).filter((pid) => !(pid in petVaccineData));
      if (toFetch.length === 0) {
        recomputeVaccineAlerts();
        return;
      }

      setIsLoadingAlerts(true);
      const base = collection(db, 'users', uid, 'pets');
      const next: PetVaccineMap = { ...petVaccineData };

      await Promise.all(
        toFetch.map(async (pid) => {
          const snap = await getDoc(doc(base, pid)).catch(() => null);

          // Narrow unknown to our Firestore shape
          const raw = snap?.data() as unknown;
          const data: PetDocFS = raw && typeof raw === 'object' ? (raw as PetDocFS) : {};
          const records: Record<string, VaccinationRecFS> = data.vaccinationRecords ?? {};

          const map: Partial<Record<VaccineKey, PetVaccineRecord>> = {};
          Object.entries(records).forEach(([rawKey, rec]) => {
            const key = policyKeyToEnum(rawKey);
            if (!key) return;
            if (rec && typeof rec === 'object') {
              const date = (rec.date as Timestamp | undefined)?.toDate() || null;
              const isVacc = !!rec.isVaccinated;
              map[key] = { expiresAt: date, isVaccinated: isVacc };
            }
          });

          next[pid] = map;
        })
      );

      setPetVaccineData(next);
      setIsLoadingAlerts(false);
      recomputeVaccineAlerts(next);
    },
    [petVaccineData, recomputeVaccineAlerts]
  );

  /** 3) React to pet selection changes (declare AFTER both) */
  useEffect(() => {
    recomputeVaccineAlerts();
  }, [selectedPetIds, recomputeVaccineAlerts]);


  /* =========================
     Loaders
     ========================= */
  const loadPets = useCallback(async (uid: string) => {
    try {
      const pcol = collection(db, 'users', uid, 'pets');
      const psnap = await getDocs(pcol);
      const list: Pet[] = psnap.docs.map((d) => {
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
      setSelectedPetIds(list.map((p) => p.id)); // select all by default

      // Preload vaccine data once for all current pets
      await loadVaccineData(uid, new Set(list.map((p) => p.id)));
    } catch (e) {
      console.error('❌ Failed to load pets:', e);
    }
  }, [loadVaccineData]);

  const fetchBusinessSettings = useCallback(async (bizId: string) => {
    if (!bizId) return;
    try {
      const bsnap = await getDoc(doc(db, 'businesses', bizId));
      const data = (bsnap.data() || {}) as BusinessSettings;

      // TZ & features
      setBusinessTimeZoneId(data.timeZoneId || null);
      setIncludePendingInCapacity(!!data.features?.countPendingInCapacity);
      setClientWritesRTDB(data.features?.clientWritesRTDB !== false);

      /// Core flags
      setDropOffTimeRequired(!!data.dropOffTimeRequiredDaycare);

      // ⭐ NEW — Pickup required flag
      setPickUpTimeRequired(!!data.pickUpTimeRequiredDaycare);

      // ✅ NEW — Approval toggle (daycare)
      setRequireDaycareReservationApproval(!!data.requireDaycareReservationApproval);

      setTemperamentTestRequired(!!data.temperamentTestRequired);

      // Grooming
      setGroomingAvailable(!!data.groomingAvailableAsAddOnToDaycare);
      setGroomingServices((data.groomingServices || []).map(s => (s || '').trim()).filter(Boolean));

      // Time map
      const map = (data.dropOffTimesDaycare || {}) as WeekdayMap;
      if (Object.keys(map).length) setDropOffTimesByWeekday(map);

      // ⭐ NEW — Load pickup weekday map
      if (data.pickUpTimesDaycare) {
        setPickUpTimesByWeekday(data.pickUpTimesDaycare);
      }

      // Per-slot limit
      setMaxPerTimeSlot(typeof data.bookingLimits?.maxPerTimeSlot === 'number'
        ? (data.bookingLimits!.maxPerTimeSlot as number)
        : 3);

      // --- Blackout Dates
      if (Array.isArray(data.blackoutDates)) {
        const keys = data.blackoutDates
          .map((ts: Timestamp | null) => {
            if (!ts) return null;
            try {
              return ymdKey(ts.toDate(), bizTZ);
            } catch {
              return null;
            }
          })
          .filter((val): val is string => typeof val === "string");

        setBlackoutDates(new Set(keys));
      }

      // Required vaccines
      const reqRaw = (data.requiredVaccinations || {});
      const req = new Set<VaccineKey>();
      Object.keys(reqRaw).forEach((k) => {
        if (reqRaw[k] === true) {
          const v = policyKeyToEnum(k);
          if (v) req.add(v);
        }
      });
      setRequiredVaccines(req);
    } catch (e) {
      console.error('❌ Failed to fetch business settings:', e);
    }
  }, []);


  /* =========================
     Auth + initial load
     ========================= */
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (user) => {
      if (!user) {
        router.replace(`/${locale}/loginsignup`);
        return;
      }
      const uid = user.uid;
      setUserId(uid);

      // Owner name (best-effort)
      try {
        const usnap = await getDoc(doc(db, 'users', uid)).catch(() => null);
        const fn = (usnap?.data()?.firstName as string) || '';
        const ln = (usnap?.data()?.lastName as string) || '';
        const on = `${fn} ${ln}`.trim();
        if (on) setOwnerName(on);
      } catch { /* ignore */ }

      await Promise.all([loadPets(uid), fetchBusinessSettings(businessId)]);
    });
    return () => unsub();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [businessId, locale, router]);

  // 1) filterUnavailableTimes (keep as-is; shown here for placement)
  const filterUnavailableTimes = useCallback(
    async (date: Date, options: string[]) => {
      if (!businessId || !isValidFirebaseKey(businessId)) return options;

      const dayKeyBiz = ymdKey(date, bizTZ);
      const dayKeyDevice = ymdKey(date, Intl.DateTimeFormat().resolvedOptions().timeZone);

      const snap = await rtdbGet(rtdbRef(rtdb, `upcomingReservations/${businessId}`)).catch(() => null);
      const raw = snap?.val() as unknown;
      const val: Record<string, RTDBUpcomingRow> =
        raw && typeof raw === 'object' ? (raw as Record<string, RTDBUpcomingRow>) : {};

      const counts: Record<string, number> = {};
      Object.values(val).forEach((row) => {
        const window = row.arrivalWindow ?? '';
        const departure = row.departureWindow ?? '';

        const status = row.status ?? '';
        const d1 = row.date ?? '';
        const dBiz = row.dateBusinessTZ ?? '';
        const sameDay = dBiz === dayKeyBiz || d1 === dayKeyBiz || d1 === dayKeyDevice;
        const countable = status === 'approved' || (includePendingInCapacity && status === 'pending');
        if (sameDay && countable && window) counts[window] = (counts[window] ?? 0) + 1;
        // ⭐ NEW — count pickup
        if (sameDay && countable && departure) {
          counts[departure] = (counts[departure] ?? 0) + 1;
        }
      });

      // Hide past times in business TZ (for today)
      const nowLabel = new Intl.DateTimeFormat('en-US', {
        timeZone: bizTZ, hour12: true, hour: 'numeric', minute: '2-digit'
      }).format(new Date());
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
      const isTodayBiz = ymdKey(new Date(), bizTZ) === dayKeyBiz;
      const nowMins = toMin(nowLabel);

      return options.filter((opt) => {
        const underCap = (counts[opt] ?? 0) < maxPerTimeSlot;
        if (!isTodayBiz) return underCap;
        return underCap && toMin(opt) > nowMins;
      });
    },
    [businessId, includePendingInCapacity, maxPerTimeSlot, bizTZ]
  );

  // 2) findNextAvailableDate (define BEFORE the effect that uses it)
  const findNextAvailableDate = useCallback(
    async (startDate: Date) => {
      // search up to 30 days ahead
      for (let i = 1; i <= 30; i++) {
        const candidate = normalizeDate(new Date(startDate.getTime() + i * 24 * 60 * 60 * 1000));
        const day = weekdayName(candidate, bizTZ);
        const raw = sortTimeStrings((dropOffTimesByWeekday[day] || []).map((s) => s || ''));
        if (raw.length === 0) continue; // no times configured on this weekday

        const filtered = await filterUnavailableTimes(candidate, raw);
        if (filtered.length > 0) {
          return { date: candidate, times: filtered };
        }
      }
      return null; // none found in range
    },
    [bizTZ, dropOffTimesByWeekday, filterUnavailableTimes]
  );

  // 3) Time options effect (place AFTER the function above)
  useEffect(() => {
    (async () => {
      if (!selectedDate) {
        setTimeOptions([]);
        setSelectedTime('');
        return;
      }

      const day = weekdayName(selectedDate, bizTZ);
      const raw = sortTimeStrings((dropOffTimesByWeekday[day] || []).map((s) => s || ''));
      const filtered = await filterUnavailableTimes(selectedDate, raw);

      // ⭐ NEW — pickup options for this weekday
      const rawPickup = sortTimeStrings((pickUpTimesByWeekday[day] || []).map((s) => s || ''));
      const filteredPickup = await filterUnavailableTimes(selectedDate, rawPickup);
      setPickUpTimeOptions(filteredPickup);
      setSelectedPickUpTime(filteredPickup[0] || '');

      // If there are configured times for this day, but none remain after filtering,
      // auto-advance to the next available day.
      if (raw.length > 0 && filtered.length === 0) {
        const next = await findNextAvailableDate(selectedDate);
        if (next) {
          setSelectedDate(next.date);
          setTimeOptions(next.times);
          setSelectedTime(next.times[0] || '');
          if (userId) {
            setHasExistingReservation(await checkForExistingReservation(next.date, userId));
          }
          return;
        }
      }

      setTimeOptions(filtered);
      setSelectedTime(filtered[0] || '');
      if (userId) {
        setHasExistingReservation(await checkForExistingReservation(selectedDate, userId));
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    selectedDate,
    dropOffTimesByWeekday,
    bizTZ,
    includePendingInCapacity,
    maxPerTimeSlot,
    userId,
    findNextAvailableDate
  ]);

  const checkForExistingReservation = useCallback(
    async (d: Date, uid: string) => {
      const keyBiz = ymdKey(d, bizTZ);
      try {
        const qref = query(
          collection(db, 'daycareReservations'),
          where('userId', '==', uid),
          where('businessId', '==', businessId),
          where('status', 'in', ['pending', 'approved', 'declined'])
        );
        const snap = await getDocs(qref);
        return snap.docs.some((docSnap) => {
          const data = docSnap.data();
          const ts = (data.date as Timestamp | undefined)?.toDate();
          const keyField = (data.dateBusinessTZ as string | undefined) || (ts ? ymdKey(ts, bizTZ) : '');
          return keyField === keyBiz;
        });
      } catch (e) {
        console.error('❌ Duplicate check failed:', e);
        return false;
      }
    },
    [bizTZ, businessId]
  );

  /* =========================
     Add draft + Grooming prompt/modal
     ========================= */
  const resetFormAfterDraft = useCallback(() => {
    setSelectedTime('');
    setTimeOptions((prev) => [...prev]); // keep list, empty selection
    setSelectedPetIds(pets.map((p) => p.id));
    setPickUpTimeOptions((prev) => [...prev]);
  }, [pets]);

  const addBookingDraft = useCallback(() => {
    // 🚫 BLACKOUT CHECK (add-to-list)
    if (selectedDate) {
      const key = ymdKey(selectedDate, bizTZ);
      if (blackoutDates.has(key)) {
        alert(t('selected_date_is_blackout') || 'This date is unavailable.');
        return;
      }
    }

    if (
      !selectedDate ||
      (dropOffTimeRequired && !selectedTime) ||
      (pickUpTimeRequired && !selectedPickUpTime) ||
      selectedPetIds.length === 0
    ) return;

    if (hasExistingReservation) { alert(t('duplicate_daycare_message')); return; }

    const draft: DraftBooking = {
      date: normalizeDate(selectedDate),
      dropOffTime: dropOffTimeRequired ? selectedTime : "",      // ✅ only required if business requires it
      pickUpTime: pickUpTimeRequired ? selectedPickUpTime : "",  // ✅ only required if business requires it
      petIds: [...selectedPetIds],
      isAssessment,
    };

    if (groomingAvailable && groomingServices.length > 0) {
      setPendingDraft(draft);
      setShowGroomingPrompt(true);
    } else {
      setDraftBookings((prev) => [...prev, draft]);
      resetFormAfterDraft();
    }
  }, [
    selectedDate,
    dropOffTimeRequired,
    selectedTime,
    selectedPetIds,
    hasExistingReservation,
    isAssessment,
    groomingAvailable,
    groomingServices,
    t,
    resetFormAfterDraft,
    pickUpTimeRequired,
    selectedPickUpTime,
    blackoutDates
  ]);

  /* =========================
     Submit (Firestore + optional RTDB mirrors)
     ========================= */
  const submitAllReservations = useCallback(async () => {
    // 🚫 BLACKOUT CHECK (final submission)
    for (const b of draftBookings) {
      const key = ymdKey(b.date, bizTZ);
      if (blackoutDates.has(key)) {
        alert(t('selected_date_is_blackout') || 'This date is unavailable.');
        return;
      }
    }

    if (!userId || draftBookings.length === 0 || !businessId || !isValidFirebaseKey(businessId)) return;

    try {
      // refresh owner name best-effort
      try {
        const usnap = await getDoc(doc(db, 'users', userId)).catch(() => null);
        const fn = (usnap?.data()?.firstName as string) || '';
        const ln = (usnap?.data()?.lastName as string) || '';
        const on = `${fn} ${ln}`.trim();
        if (on) setOwnerName(on);
      } catch { /* ignore */ }

      for (const booking of draftBookings) {
        const reservationId = crypto.randomUUID();
        const realtimeKey = reservationId;

        const petStatuses = booking.petIds.reduce<Record<string, string>>((acc, pid) => {
          acc[pid] = 'pending'; return acc;
        }, {});

        const dateBizKey = ymdKey(booking.date, bizTZ);

        // ✅ Submit-time authoritative fetch (matches iOS fix)
        const bsnap = await getDoc(doc(db, 'businesses', businessId));
        const bdata = (bsnap.data() || {}) as BusinessSettings;

        // Use submit-time truth (never stale)
        const requireApprovalNow = !!bdata.requireDaycareReservationApproval;
        const statusToWrite: 'pending' | 'approved' = requireApprovalNow ? 'pending' : 'approved';

        const clientWritesRTDBNow = bdata.features?.clientWritesRTDB !== false;

        const payload: DaycareReservationWrite = {
          userId,
          businessId,
          petIds: booking.petIds,
          petStatuses,
          date: Timestamp.fromDate(booking.date), // legacy TS
          dateBusinessTZ: dateBizKey,            // biz TZ key
          arrivalWindow: booking.dropOffTime,
          departureWindow: booking.pickUpTime,
          status: statusToWrite,
          realtimeKey,
        };

        if (booking.isAssessment) payload.isAssessment = true;
        if (booking.groomingAddOns && Object.keys(booking.groomingAddOns).length) {
          payload.groomingAddOns = booking.groomingAddOns;
        }

        // Firestore
        await setDoc(doc(db, 'daycareReservations', reservationId), payload);

        // Optional RTDB mirrors per pet
        if (clientWritesRTDBNow) {

          const deviceKey = ymdKey(booking.date, Intl.DateTimeFormat().resolvedOptions().timeZone);
          await Promise.all(booking.petIds.map(async (petId) => {
            const pet = pets.find((p) => p.id === petId);
            const rtdbKey = `${realtimeKey}-${petId}`;

            const base: RTDBUpcomingWriteRow = {
              dogName: pet?.name || 'Dog',
              ownerName,
              type: 'Daycare',
              date: deviceKey,         // legacy (device TZ)
              dateBusinessTZ: dateBizKey,
              arrivalWindow: booking.dropOffTime,
              departureWindow: booking.pickUpTime,
              status: statusToWrite,
              userId,
              realtimeKey,
            };

            if (booking.isAssessment) base.isAssessment = true;

            const perPet = booking.groomingAddOns?.[petId] || [];
            if (perPet.length) base.groomingAddOns = perPet;

            if (pet?.medications) base.medications = pet.medications;
            if (pet?.medicationDetails) base.medicationDetails = pet.medicationDetails;
            if (pet?.spayedNeutered) base.spayedNeutered = pet.spayedNeutered;

            await rtdbSet(rtdbRef(rtdb, `upcomingReservations/${businessId}/${rtdbKey}`), base);
          }));
        }
      }

      setDraftBookings([]);
      setGroomingSelections({});
      alert(t('submission_success'));
      router.push(`/${locale}/individualupcomingappointments`);
    } catch (e) {
      console.error('❌ submitAllReservations failed:', e);
      alert(t('submission_error') || 'There was an error submitting your bookings.');
    }
  }, [userId, draftBookings, businessId, bizTZ, pets, ownerName, clientWritesRTDB, router, locale, t, blackoutDates]);

  /* =========================
     UI
     ========================= */
  return (
    <div className="min-h-screen bg-[color:var(--color-background)] px-4 py-6 text-[color:var(--color-foreground)]">
      <div className="w-full max-w-xl mx-auto space-y-6">
        {/* Back (left-aligned, matches the narrow alert width) */}
        <div className="w-full max-w-sm sm:max-w-md mx-auto">
          <button
            onClick={() => router.push(`/${locale}/individualselectservice?businessId=${businessId}`)}
            className="mb-2 block w-fit text-sm text-[color:var(--color-accent)] underline hover:opacity-90"
          >
            ← {t('back_to_select_service')}
          </button>
        </div>

        {/* Heading */}
        <h1 className="text-3xl font-bold text-center text-[color:var(--color-accent)]">
          {t('book_daycare_title')}
          <br />
          <span className="text-lg font-normal text-gray-600">{businessName}</span>
        </h1>

        {/* Form */}
        <div className="flex flex-col items-center space-y-6">
          {/* Date */}
          <div className="flex flex-col items-center space-y-1 w-full">
            <label className="font-semibold text-center text-sm">{t('select_date')}</label>
            <DatePicker
              selected={selectedDate}
              onChange={async (date: Date | null) => {
                // 🚫 BLACKOUT CHECK — block immediately
                if (date) {
                  const key = ymdKey(date, bizTZ);
                  if (blackoutDates.has(key)) {
                    alert(t('selected_date_is_blackout') || 'This date is unavailable.');
                    return; // prevent selecting this date
                  }
                }

                setSelectedDate(date);
                if (date && userId) {
                  const day = weekdayName(date, bizTZ);
                  const raw = sortTimeStrings((dropOffTimesByWeekday[day] || []).map((s) => s || ''));
                  const filtered = await filterUnavailableTimes(date, raw);

                  // ⭐ NEW — recompute pickup options for this date
                  const rawPickup = sortTimeStrings((pickUpTimesByWeekday[day] || []).map((s) => s || ''));
                  const filteredPickup = await filterUnavailableTimes(date, rawPickup);
                  setPickUpTimeOptions(filteredPickup);
                  setSelectedPickUpTime(filteredPickup[0] || '');

                  if (raw.length > 0 && filtered.length === 0) {
                    const next = await findNextAvailableDate(date);
                    if (next) {
                      setSelectedDate(next.date);
                      setTimeOptions(next.times);
                      setSelectedTime(next.times[0] || '');
                      setHasExistingReservation(await checkForExistingReservation(next.date, userId));
                      return;
                    }
                  }

                  setTimeOptions(filtered);
                  setSelectedTime(filtered[0] || '');
                  setHasExistingReservation(await checkForExistingReservation(date, userId));
                }
              }}
              dateFormat="MM/dd/yyyy"
              className="w-full max-w-xs border p-2 rounded text-center text-sm"
              placeholderText={t('select_date_placeholder', { default: 'Select a date' })}
            />
          </div>

          {/* Existing reservation inline note (bold + green, centered) */}
          {hasExistingReservation && (
            <p className="text-center font-bold text-green-600 text-[16px] max-w-sm sm:max-w-md mx-auto">
              {t('existing_appointment')}
            </p>
          )}

          {/* Time */}
          {dropOffTimeRequired && (
            <div className="flex flex-col items-center space-y-1 w-full">
              <label className="font-semibold text-center text-sm">{t('select_time')}</label>
              <select
                className="w-full max-w-xs border p-2 rounded text-sm"
                value={selectedTime}
                onChange={(e) => setSelectedTime(e.target.value)}
                disabled={dropOffTimeRequired && timeOptions.length === 0}
              >
                {(!dropOffTimeRequired ? [''] : []).concat(timeOptions).map((opt) => (
                  <option key={opt || 'none'} value={opt}>
                    {opt || t('no_specific_time')}
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* ⭐ NEW — Pickup Time Selector */}
          {pickUpTimeRequired && (
            <div className="flex flex-col items-center space-y-1 w-full">
              <label className="font-semibold text-center text-sm">{t('select_pickup_time')}</label>
              <select
                className="w-full max-w-xs border p-2 rounded text-sm"
                value={selectedPickUpTime}
                onChange={(e) => setSelectedPickUpTime(e.target.value)}
                disabled={pickUpTimeOptions.length === 0}
              >
                {pickUpTimeOptions.map((opt) => (
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
                  const checked = selectedPetIds.includes(pet.id);
                  return (
                    <label key={pet.id} className="flex items-center gap-2 text-sm">
                      <input
                        type="checkbox"
                        checked={checked}
                        onChange={(e) => {
                          const on = e.target.checked;
                          setSelectedPetIds((prev) => {
                            const set = new Set(prev);
                            if (on) set.add(pet.id); else set.delete(pet.id);
                            return Array.from(set);
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

          {/* Assessment toggle */}
          {temperamentTestRequired && (
            <label className="flex items-center gap-2 w-full max-w-xs text-sm">
              <input type="checkbox" checked={isAssessment} onChange={() => setIsAssessment((v) => !v)} />
              <span><em>{t('assessment_toggle_label')}</em></span>
            </label>
          )}

          {/* Vaccine Alerts */}
          {selectedPetIds.length > 0 && (
            <div className="w-full max-w-sm sm:max-w-sm mx-auto px-3 py-3 rounded-lg bg-white/70 shadow-sm border border-green-900/30">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-yellow-600">⚠️</span>
                <span className="font-semibold text-sm">Vaccine Alerts</span>
              </div>

              {isLoadingAlerts ? (
                <div className="text-sm text-gray-700 flex items-center gap-2">
                  <span className="animate-pulse">●</span> {t('loading')}
                </div>
              ) : (
                <div className="space-y-3">
                  {selectedPetIds.map((pid) => {
                    const pet = pets.find((p) => p.id === pid);
                    const issues = alertsByPet[pid] || [];
                    if (!issues.length) return null;
                    return (
                      <div key={pid} className="border rounded p-3 border-green-900/20">
                        <div className="text-sm font-semibold">{pet?.name || 'Pet'}</div>
                        <ul className="list-disc list-inside text-sm">
                          {issues.map((msg) => (
                            <li key={msg} className="text-red-600">{msg}</li>
                          ))}
                        </ul>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          )}

          {/* Add to list (matches Vaccine Alerts width) */}
          <div className="w-full max-w-sm sm:max-w-md mx-auto">
            <button
              onClick={addBookingDraft}
              className={`w-full py-3 rounded-lg text-white text-base font-semibold
                shadow-md ring-1 ring-black/10
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-600
                ${hasExistingReservation ||
                  !selectedDate ||
                  (dropOffTimeRequired && !selectedTime) ||
                  selectedPetIds.length === 0
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-green-800 hover:bg-green-700'
                }`}
              disabled={
                hasExistingReservation ||
                !selectedDate ||
                (dropOffTimeRequired && !selectedTime) ||
                selectedPetIds.length === 0 ||
                (pickUpTimeRequired && !selectedPickUpTime)
              }
              title={hasExistingReservation ? t('duplicate_daycare_message') : undefined}
            >
              {t('add_to_booking_list')}
            </button>
          </div>

          {/* Grooming Yes/No prompt */}
          {showGroomingPrompt && pendingDraft && (
            <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
              <div className="bg-white rounded-lg p-6 shadow-md max-w-sm w-full">
                <p className="text-sm mb-4">{t('grooming_prompt_message')}</p>
                <div className="flex justify-end gap-3">
                  <button
                    onClick={() => {
                      // Prepare empty selections buckets for each pet, then open the modal
                      setGroomingSelections((prev) => {
                        const cp = { ...prev };
                        pendingDraft.petIds.forEach((pid) => { if (!cp[pid]) cp[pid] = []; });
                        return cp;
                      });
                      setShowGroomingUI(true);
                      setShowGroomingPrompt(false);
                    }}
                    className="bg-green-700 hover:bg-green-600 text-white px-4 py-2 rounded text-sm"
                  >
                    {t('yes')}
                  </button>
                  <button
                    onClick={() => {
                      setDraftBookings((prev) => [...prev, pendingDraft]);
                      resetFormAfterDraft();
                      setShowGroomingPrompt(false);
                      setPendingDraft(null);
                    }}
                    className="bg-gray-400 hover:bg-gray-300 text-black px-4 py-2 rounded text-sm"
                  >
                    {t('no')}
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Grooming Modal (per-pet), uses your website contract */}
          {showGroomingUI && pendingDraft && (
            <GroomingModal
              services={groomingServices}
              pets={pets.filter((p) => pendingDraft.petIds.includes(p.id))}
              selections={groomingSelections}
              onClose={() => {
                // Add draft even if user closes without saving changes
                const draft: DraftBooking = {
                  ...pendingDraft,
                  groomingAddOns: groomingSelections,
                };
                setDraftBookings((prev) => [...prev, draft]);
                resetFormAfterDraft();
                setPendingDraft(null);
                setShowGroomingUI(false);
              }}
              onSave={(sel) => {
                // Save selections and add draft
                const draft: DraftBooking = {
                  ...pendingDraft,
                  groomingAddOns: sel,
                } as DraftBooking;
                setGroomingSelections(sel);
                setDraftBookings((prev) => [...prev, draft]);
                resetFormAfterDraft();
                setPendingDraft(null);
                setShowGroomingUI(false);
              }}
              t={t}
            />
          )}

          {/* Drafts (match Vaccine Alerts width) */}
          {draftBookings.length > 0 && (
            <div className="w-full max-w-sm sm:max-w-md mx-auto space-y-4">
              <h2 className="text-md font-semibold text-center">{t('your_bookings')}</h2>
              {draftBookings.map((b, idx) => {
                const petNames = b.petIds
                  .map((id) => pets.find((p) => p.id === id)?.name || 'Unknown')
                  .join(', ');
                const hasGroom = b.groomingAddOns && Object.keys(b.groomingAddOns).length > 0;

                return (
                  <div
                    key={`${b.date.toISOString()}-${idx}`}
                    className="w-full border rounded p-3 shadow-sm border-green-900/20 bg-white/70"
                  >
                    <p><strong>📅</strong> {b.date.toLocaleDateString()}</p>
                    <p><strong>⏰</strong> {b.dropOffTime || t('no_specific_time')}</p>
                    <p><strong>📤</strong> {b.pickUpTime || t('no_specific_time')}</p>
                    <p><strong>🐶</strong> {petNames}</p>
                    {isAssessment && <p className="italic text-gray-600 mt-1">{t('assessment_badge')}</p>}
                    {hasGroom && (
                      <p className="mt-1">
                        <strong>🛁</strong>{' '}
                        {b.petIds
                          .map((pid) => {
                            const svcs = b.groomingAddOns?.[pid];
                            if (!svcs?.length) return null;
                            const name = pets.find((p) => p.id === pid)?.name || 'Unknown';
                            return `${name}: ${svcs.join(', ')}`;
                          })
                          .filter(Boolean)
                          .join(' | ')}
                      </p>
                    )}
                    <button
                      onClick={() => setDraftBookings((prev) => prev.filter((_, i) => i !== idx))}
                      className="mt-2 text-red-600 text-sm underline"
                    >
                      {t('remove_booking')}
                    </button>
                  </div>
                );
              })}
            </div>
          )}

          {/* Submit */}
          <button
            onClick={submitAllReservations}
            className={`w-full max-w-xs text-white py-3 rounded transition text-sm ${draftBookings.length === 0 ? 'bg-gray-400 cursor-not-allowed' : 'bg-green-800 hover:bg-green-700'}`}
            disabled={draftBookings.length === 0}
          >
            {t('submit_all')}
          </button>
        </div>
      </div>
    </div>
  );
}

/* =========================
   Grooming Modal (website contract)
   ========================= */
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
    setLocalSel((prev) => {
      const next = { ...prev };
      const arr = new Set(next[petId] || []);
      if (on) arr.add(service);
      else arr.delete(service);
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
          {pets.map((pet) => (
            <div key={pet.id} className="border rounded p-3">
              <div className="font-medium mb-2">
                {t('grooming_for_pet', { name: pet.name })}
              </div>
              {services.length === 0 ? (
                <div className="text-sm text-gray-500">{t('no_services_available')}</div>
              ) : (
                <div className="grid grid-cols-1 gap-2">
                  {services.map((svc) => {
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

        {/* Footer */}
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
