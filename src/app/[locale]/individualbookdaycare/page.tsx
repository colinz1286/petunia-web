'use client';

import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { useRouter, useSearchParams } from 'next/navigation';

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
  set as rtdbSet,
  get as rtdbGet,
} from 'firebase/database';
import { initializeApp, getApps } from 'firebase/app';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import GroomingModal from '@/components/GroomingModal';

/* =========================
   Firebase init (once)
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
   Types & small utils
   ========================= */
type Pet = { id: string; name: string };

type DraftBooking = {
  date: Date;
  dropOffTime: string;
  petIds: string[];
  isAssessment: boolean;
  groomingAddOns?: Record<string, string[]>;
};

type FSMap = Record<string, unknown>;
type WeekdayMap = Record<string, string[]>;

type VaccineKey = 'Rabies' | 'Bordetella' | 'Canine Influenza' | 'Distemper';
type PetVaccineRecord = { expiresAt: Date | null; isVaccinated: boolean };
type PetVaccineMap = Record<string, Record<VaccineKey, PetVaccineRecord>>;

const uniq = <T,>(arr: T[]) => Array.from(new Set(arr));
const uniqueById = <T extends { id: string }>(items: T[]) =>
  Array.from(new Map(items.map((i) => [i.id, i])).values());

const serializeGroomingSelections = (
  selections: Record<string, Set<string>>,
): Record<string, string[]> => {
  const out: Record<string, string[]> = {};
  for (const [petId, set] of Object.entries(selections)) {
    if (set && set.size) out[petId] = Array.from(set);
  }
  return out;
};

const weekdayName = (d: Date, tz: string) =>
  new Intl.DateTimeFormat('en-US', { timeZone: tz, weekday: 'long' }).format(d); // "Monday"

const ymdKey = (d: Date, tz: string) =>
  new Intl.DateTimeFormat('en-CA', {
    timeZone: tz,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(d); // YYYY-MM-DD

const sortTimeStrings = (arr: string[]) => {
  const toMin = (s: string) => {
    const m = s.trim().match(/^(\d{1,2}):(\d{2})\s*(AM|PM)$/i);
    if (!m) return Number.POSITIVE_INFINITY;
    let h = parseInt(m[1], 10);
    const mm = parseInt(m[2], 10);
    const ap = m[3].toUpperCase();
    if (ap === 'PM' && h !== 12) h += 12;
    if (ap === 'AM' && h === 12) h = 0;
    return h * 60 + mm;
  };
  return [...arr]
    .map((s) => s.trim())
    .filter(Boolean)
    .sort((a, b) => toMin(a) - toMin(b));
};

const isValidFirebaseKey = (s: string) => s !== '' && !/[/.#$\[\]#]/.test(s);

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

  // Auth/user
  const [userId, setUserId] = useState('');
  const [ownerName, setOwnerName] = useState('Client');

  // Pets
  const [pets, setPets] = useState<Pet[]>([]);
  const [selectedPetIds, setSelectedPetIds] = useState<string[]>([]);

  // Booking inputs
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const [dropOffOptions, setDropOffOptions] = useState<string[]>([]);
  const [selectedTime, setSelectedTime] = useState('');

  // Business settings / features
  const [businessTimeZoneId, setBusinessTimeZoneId] = useState<string | null>(null);
  const [dropOffTimeRequired, setDropOffTimeRequired] = useState(false);
  const [dropOffTimesByWeekday, setDropOffTimesByWeekday] = useState<WeekdayMap>({});
  const [maxPerTimeSlot, setMaxPerTimeSlot] = useState<number>(3);
  const [includePendingInCapacity, setIncludePendingInCapacity] = useState(false);
  const [clientWritesRTDB, setClientWritesRTDB] = useState(true);
  const [enforceWaiverVersion, setEnforceWaiverVersion] = useState(false);
  const [temperamentTestRequired, setTemperamentTestRequired] = useState(false);
  const [isAssessment, setIsAssessment] = useState(false);

  // Waiver
  const [waiverRequired, setWaiverRequired] = useState(false);
  const [waiverSigned, setWaiverSigned] = useState(true);
  const [showWaiverModal, setShowWaiverModal] = useState(false);
  const [hasCheckedAgreement, setHasCheckedAgreement] = useState(false);

  // Drafts & grooming
  const [draftBookings, setDraftBookings] = useState<DraftBooking[]>([]);
  const [groomingAvailable, setGroomingAvailable] = useState(false);
  const [groomingServices, setGroomingServices] = useState<string[]>([]);
  const [groomingSelections, setGroomingSelections] = useState<Record<string, Set<string>>>({});
  const [showGroomingPrompt, setShowGroomingPrompt] = useState(false);
  const [pendingDraft, setPendingDraft] = useState<DraftBooking | null>(null);
  const [showGroomingUI, setShowGroomingUI] = useState(false);

  // Duplicate prevention
  const [hasExistingReservation, setHasExistingReservation] = useState(false);

  // Vaccine alerts (read-only step 1)
  const [requiredVaccines, setRequiredVaccines] = useState<Set<VaccineKey>>(new Set());
  const [petVaccineData, setPetVaccineData] = useState<PetVaccineMap>({});
  const [alertsByPet, setAlertsByPet] = useState<Record<string, string[]>>({});
  const [isLoadingAlerts, setIsLoadingAlerts] = useState(false);

  // UI flow
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error] = useState<string | null>(null);

  const bizTZ = businessTimeZoneId || Intl.DateTimeFormat().resolvedOptions().timeZone;
  const shouldShowAlertsSection = useMemo(() => {
    if (isLoadingAlerts || selectedPetIds.length === 0) return true;
    const problems = selectedPetIds.some((pid) => (alertsByPet[pid] || []).length > 0);
    return problems;
  }, [isLoadingAlerts, selectedPetIds, alertsByPet]);

  /* =========================
     Vaccine alerts recompute
     ========================= */
  const isExpired = useCallback(
    (expiresAt: Date | null): boolean => {
      if (!expiresAt) return true;
      const today = new Date(
        new Intl.DateTimeFormat('en-CA', {
          timeZone: bizTZ,
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
        }).format(new Date()),
      );
      const expDay = new Date(
        new Intl.DateTimeFormat('en-CA', {
          timeZone: bizTZ,
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
        }).format(expiresAt),
      );
      return expDay.getTime() < today.getTime();
    },
    [bizTZ],
  );

  const recomputeVaccineAlerts = useCallback(
    (source: PetVaccineMap = petVaccineData) => {
      const df = new Intl.DateTimeFormat('en-CA', {
        timeZone: bizTZ,
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
      });
      const alerts: Record<string, string[]> = {};
      selectedPetIds.forEach((pid) => {
        const vmap = source[pid] || {};
        const msgs: string[] = [];
        requiredVaccines.forEach((k) => {
          const rec = vmap[k];
          if (rec?.isVaccinated) {
            if (isExpired(rec.expiresAt)) {
              const when = rec.expiresAt ? ` ${df.format(rec.expiresAt)}` : '';
              msgs.push(`${k}: Expired${when}`);
            }
          } else {
            msgs.push(`${k}: Not on file`);
          }
        });
        alerts[pid] = msgs;
      });
      setAlertsByPet(alerts);
    },
    [bizTZ, isExpired, petVaccineData, requiredVaccines, selectedPetIds],
  );

  const loadVaccineData = useCallback(
    async (uid: string, petIds: Set<string>) => {
      setIsLoadingAlerts(true);
      const base = collection(db, 'users', uid, 'pets');
      const next: PetVaccineMap = { ...petVaccineData };

      await Promise.all(
        Array.from(petIds).map(async (pid) => {
          const snap = await getDoc(doc(base, pid)).catch(() => null);
          const data = (snap?.data() || {}) as FSMap;
          const records = (data['vaccinationRecords'] as FSMap) || {};
          const map: Partial<Record<VaccineKey, PetVaccineRecord>> = {};

          Object.entries(records).forEach(([rawKey, rec]) => {
            const key = policyKeyToEnum(rawKey);
            if (!key) return;
            if (typeof rec === 'object' && rec) {
              const obj = rec as FSMap;
              const date = (obj['date'] as Timestamp | undefined)?.toDate() || null;
              const isVacc = !!(obj['isVaccinated'] as boolean);
              map[key] = { expiresAt: date, isVaccinated: isVacc };
            }
          });
          next[pid] = map as Record<VaccineKey, PetVaccineRecord>;
        }),
      );

      setPetVaccineData(next);
      setIsLoadingAlerts(false);
      recomputeVaccineAlerts(next);
    },
    [petVaccineData, recomputeVaccineAlerts],
  );

  /* =========================
     Filtering + capacity
     ========================= */
  const filterUnavailableTimes = useCallback(
    async (date: Date, options: string[]) => {
      if (!businessId || !isValidFirebaseKey(businessId)) return;

      const dayKeyBiz = ymdKey(date, bizTZ);
      const dayKeyDevice = ymdKey(date, Intl.DateTimeFormat().resolvedOptions().timeZone);

      const snap = await rtdbGet(rtdbRef(rtdb, `upcomingReservations/${businessId}`)).catch(() => null);
      const val = (snap?.val() as Record<string, FSMap>) || {};

      const counts: Record<string, number> = {};
      Object.values(val).forEach((row: FSMap) => {
        const window = (row?.arrivalWindow as string) || '';
        const status = (row?.status as string) || '';
        const d1 = (row?.date as string) || '';
        const dBiz = (row?.dateBusinessTZ as string) || '';

        const sameDay = dBiz === dayKeyBiz || d1 === dayKeyBiz || d1 === dayKeyDevice;
        const countable = status === 'approved' || (includePendingInCapacity && status === 'pending');
        if (sameDay && countable && window) counts[window] = (counts[window] ?? 0) + 1;
      });

      // Hide past times in business TZ for today
      const nowLabel = new Intl.DateTimeFormat('en-US', {
        timeZone: bizTZ,
        hour12: true,
        hour: 'numeric',
        minute: '2-digit',
      }).format(new Date());
      const nowMins = sortTimeStrings([nowLabel, nowLabel]).length
        ? (() => {
          const m = nowLabel.match(/^(\d{1,2}):(\d{2})\s*(AM|PM)$/i)!;
          let h = parseInt(m[1], 10);
          const mm = parseInt(m[2], 10);
          const ap = m[3].toUpperCase();
          if (ap === 'PM' && h !== 12) h += 12;
          if (ap === 'AM' && h === 12) h = 0;
          return h * 60 + mm;
        })()
        : 0;

      const todayKey = ymdKey(new Date(), bizTZ);
      const isTodayBiz = todayKey === dayKeyBiz;

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

      const filtered = options.filter((opt) => {
        const underCap = (counts[opt] ?? 0) < maxPerTimeSlot;
        if (!isTodayBiz) return underCap;
        return underCap && toMin(opt) > nowMins;
      });

      setDropOffOptions(filtered);
      setSelectedTime((prev) => (prev && filtered.includes(prev) ? prev : (filtered[0] || '')));
    },
    [businessId, includePendingInCapacity, maxPerTimeSlot, bizTZ],
  );

  /* =========================
     Duplicate daycare prevention (biz TZ)
     ========================= */
  const checkForExistingReservation = useCallback(
    async (d: Date, uid: string) => {
      const bizKey = ymdKey(d, bizTZ);
      const qref = query(
        collection(db, 'daycareReservations'),
        where('userId', '==', uid),
        where('businessId', '==', businessId),
        where('status', 'in', ['pending', 'approved']),
      );
      const snap = await getDocs(qref);
      const exists = snap.docs.some((docSnap) => {
        const data = docSnap.data() as FSMap;
        const ts = (data['date'] as Timestamp | undefined)?.toDate();
        const keyField = (data['dateBusinessTZ'] as string | undefined) || (ts ? ymdKey(ts, bizTZ) : '');
        return keyField === bizKey;
      });
      setHasExistingReservation(exists);
    },
    [businessId, bizTZ],
  );

  /* =========================
     Fetch business settings
     ========================= */
  const fetchBusinessSettings = useCallback(
    async (bizId: string) => {
      const bsnap = await getDoc(doc(db, 'businesses', bizId));
      const data = (bsnap.data() || {}) as FSMap;

      // Core toggles
      setDropOffTimeRequired(!!(data['dropOffTimeRequiredDaycare'] as boolean));
      setWaiverRequired(!!(data['waiverRequired'] as boolean));
      setTemperamentTestRequired(!!(data['temperamentTestRequired'] as boolean));

      // TZ + features
      setBusinessTimeZoneId((data['timeZoneId'] as string) || (data['timezone'] as string) || null);
      const features = (data['features'] as FSMap) || {};
      setIncludePendingInCapacity(!!features['countPendingInCapacity']);
      setClientWritesRTDB(features['clientWritesRTDB'] !== false);
      setEnforceWaiverVersion(!!features['enforceWaiverVersion']);

      // Grooming
      setGroomingAvailable(!!(data['groomingAvailableAsAddOnToDaycare'] as boolean));
      setGroomingServices(
        ((data['groomingServices'] as string[]) || []).map((s) => (s || '').trim()).filter(Boolean),
      );

      // Times map
      const map = (data['dropOffTimesDaycare'] as WeekdayMap) || {};
      setDropOffTimesByWeekday(map);

      // Booking limits
      const limits = (data['bookingLimits'] as FSMap) || {};
      setMaxPerTimeSlot(
        typeof limits['maxPerTimeSlot'] === 'number' ? (limits['maxPerTimeSlot'] as number) : 3,
      );

      // Required vaccines (keys may vary → normalize)
      const reqRaw = (data['requiredVaccinations'] as FSMap) || {};
      const reqSet: Set<VaccineKey> = new Set();
      Object.keys(reqRaw).forEach((k) => {
        if (reqRaw[k] === true) {
          const v = policyKeyToEnum(k);
          if (v) reqSet.add(v);
        }
      });
      setRequiredVaccines(reqSet);

      // Seed options for selected date
      if (selectedDate) {
        const weekday = weekdayName(selectedDate, bizTZ);
        const sorted = sortTimeStrings(map[weekday] || []);
        setDropOffOptions(sorted);
        setSelectedTime(sorted[0] || '');
        await filterUnavailableTimes(selectedDate, sorted);
        await checkForExistingReservation(selectedDate, userId);
      }
    },
    [selectedDate, userId, bizTZ, filterUnavailableTimes, checkForExistingReservation],
  );

  /* =========================
     Waiver (version-aware)
     ========================= */
  const checkWaiverStatus = useCallback(async (bizId: string, uid: string) => {
    try {
      const bizRef = doc(db, 'businesses', bizId);
      const waiverRef = doc(db, 'businesses', bizId, 'settings', 'clientWaiver');
      const clientRef = doc(db, 'userApprovedBusinesses', bizId, 'clients', uid);

      const [bizSnap, wSnap, cSnap] = await Promise.all([getDoc(bizRef), getDoc(waiverRef), getDoc(clientRef)]);
      const b = (bizSnap.data() || {}) as FSMap;
      const w = (wSnap.data() || {}) as FSMap;
      const c = (cSnap.data() || {}) as FSMap;

      const enforce = !!(((b['features'] as FSMap) || {})['enforceWaiverVersion'] as boolean);
      const version = w['waiverVersion'] as number | undefined;
      const subUpdated = (w['lastUpdated'] as Timestamp | undefined)?.toDate();
      const rootUpdated = (b['waiverLastUpdated'] as Timestamp | undefined)?.toDate();
      const lastUpdated = subUpdated || rootUpdated || null;

      const versionSigned = (c['waiverVersionSigned'] as number | undefined) ?? 0;
      const signedAt = (c['waiverSignedAt'] as Timestamp | undefined)?.toDate() || null;
      const legacy = (c['waiverSigned'] as boolean | undefined) ?? false;

      setWaiverRequired(!!(b['waiverRequired'] as boolean));

      let signed = true;
      if (!b['waiverRequired']) signed = true;
      else if (enforce && typeof version === 'number') signed = versionSigned >= version;
      else if (lastUpdated && signedAt) signed = signedAt >= lastUpdated;
      else signed = legacy;

      setWaiverSigned(signed);
      if (b['waiverRequired'] && !signed) setShowWaiverModal(true);
    } catch (e) {
      console.warn('⚠️ Waiver check failed (non-fatal):', e);
      setWaiverSigned(true);
    }
  }, []);

  /* =========================
     Pets + vaccine data
     ========================= */
  const loadUserPets = useCallback(
    async (uid: string) => {
      const ps = await getDocs(collection(db, 'users', uid, 'pets'));
      const raw = ps.docs.map((d) => ({ id: d.id, name: (d.data().petName as string) || 'Unnamed' }));
      const unique = uniqueById(raw);
      setPets(unique);
      setSelectedPetIds(unique.map((p) => p.id));

      // Preload vaccine data for selected pets
      await loadVaccineData(uid, new Set(unique.map((p) => p.id)));
    },
    [loadVaccineData],
  );

  /* =========================
     Auth + initial load
     ========================= */
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (user) => {
      if (!user) {
        router.push(`/${locale}/loginsignup`);
        return;
      }
      const uid = user.uid;
      setUserId(uid);

      // Owner name
      const usnap = await getDoc(doc(db, 'users', uid)).catch(() => null);
      const fn = (usnap?.data()?.firstName as string) || '';
      const ln = (usnap?.data()?.lastName as string) || '';
      const on = `${fn} ${ln}`.trim();
      if (on) setOwnerName(on);

      // Do the initial loads
      await Promise.all([
        loadUserPets(uid),
        fetchBusinessSettings(businessId),
        checkWaiverStatus(businessId, uid),
      ]);

      setIsLoading(false);
    });
    return () => unsub();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router, locale, businessId]);

  /* =========================
     Time options & capacity filtering (on date change)
     ========================= */
  useEffect(() => {
    (async () => {
      if (!selectedDate) return;
      const weekday = weekdayName(selectedDate, bizTZ);
      const raw = sortTimeStrings(dropOffTimesByWeekday[weekday] || []);
      setDropOffOptions(raw);
      setSelectedTime(raw[0] || '');
      await filterUnavailableTimes(selectedDate, raw);
      if (userId) await checkForExistingReservation(selectedDate, userId);
    })();
  }, [selectedDate, dropOffTimesByWeekday, bizTZ, filterUnavailableTimes, checkForExistingReservation, userId]);

  /* =========================
     Selected pets → refresh alerts
     ========================= */
  useEffect(() => {
    recomputeVaccineAlerts();
  }, [selectedPetIds, recomputeVaccineAlerts]);

  /* =========================
     Add booking draft (with Assessment flag)
     ========================= */
  const resetFormAfterDraft = useCallback(() => {
    setSelectedTime('');
    setDropOffOptions([]);
    setSelectedPetIds(pets.map((p) => p.id));
  }, [pets]);

  const addBookingDraft = useCallback(
    () => {
      if (!selectedDate || (dropOffTimeRequired && !selectedTime) || selectedPetIds.length === 0) return;

      // prevent same-day duplicate draft
      const exists = draftBookings.some(
        (b) =>
          ymdKey(b.date, bizTZ) === ymdKey(selectedDate, bizTZ) &&
          b.dropOffTime === selectedTime &&
          JSON.stringify([...b.petIds].sort()) === JSON.stringify([...selectedPetIds].sort()),
      );
      if (exists) {
        alert(t('duplicate_daycare_message'));
        return;
      }

      const newDraft: DraftBooking = {
        date: selectedDate,
        dropOffTime: selectedTime,
        petIds: [...selectedPetIds],
        isAssessment,
      };

      if (groomingAvailable && groomingServices.length > 0) {
        setPendingDraft(newDraft);
        setShowGroomingPrompt(true);
      } else {
        setDraftBookings((prev) => [...prev, newDraft]);
        resetFormAfterDraft();
      }
    },
    [
      selectedDate,
      selectedTime,
      selectedPetIds,
      draftBookings,
      dropOffTimeRequired,
      groomingAvailable,
      groomingServices,
      isAssessment,
      t,
      bizTZ,
      resetFormAfterDraft,
    ],
  );

  /* =========================
     Submit all drafts (Firestore + optional RTDB)
     ========================= */
  const submitAllReservations = useCallback(
    async () => {
      if (draftBookings.length === 0) {
        alert(t('no_bookings_to_submit'));
        return;
      }
      if (waiverRequired && !waiverSigned) {
        setShowWaiverModal(true);
        return;
      }

      setIsSubmitting(true);

      try {
        const userSnap = await getDoc(doc(db, 'users', userId));
        const firstName = (userSnap.data()?.firstName as string) || 'Client';
        const lastName = (userSnap.data()?.lastName as string) || '';
        const owner = `${firstName} ${lastName}`.trim() || ownerName;

        // latest waiver version for backfill
        const wSnap = await getDoc(doc(db, 'businesses', businessId, 'settings', 'clientWaiver'));
        const waiverVersionLatest = (wSnap.data()?.waiverVersion as number) ?? 1;

        for (const booking of draftBookings) {
          const reservationId = crypto.randomUUID();
          const realtimeKey = reservationId;

          const petStatuses: Record<string, string> = {};
          booking.petIds.forEach((pid) => (petStatuses[pid] = 'pending'));

          const dateBizKey = ymdKey(booking.date, bizTZ);

          const reservation: FSMap = {
            userId,
            businessId,
            petIds: booking.petIds,
            petStatuses,
            date: Timestamp.fromDate(booking.date), // legacy timestamp
            dateBusinessTZ: dateBizKey, // new string key in biz TZ
            arrivalWindow: booking.dropOffTime,
            status: 'approved',
            realtimeKey,
          };
          if (booking.isAssessment) reservation['isAssessment'] = true;

          const groomForReservation = serializeGroomingSelections(groomingSelections);
          if (Object.keys(groomForReservation).length) reservation['groomingAddOns'] = groomForReservation;

          // Firestore
          await setDoc(doc(db, 'daycareReservations', reservationId), reservation);

          // Optional RTDB mirrors (per pet)
          if (clientWritesRTDB) {
            await Promise.all(
              booking.petIds.map(async (petId) => {
                const pet = pets.find((p) => p.id === petId);
                if (!pet) return;

                const rtdbKey = `${realtimeKey}-${petId}`;
                const entry: FSMap = {
                  dogName: pet.name,
                  ownerName: owner,
                  type: 'Daycare',
                  date: ymdKey(booking.date, Intl.DateTimeFormat().resolvedOptions().timeZone), // device legacy
                  dateBusinessTZ: dateBizKey, // new
                  arrivalWindow: booking.dropOffTime,
                  status: 'approved',
                  userId,
                  realtimeKey,
                };
                if (booking.isAssessment) entry['isAssessment'] = true;

                const perPet = groomingSelections[petId];
                if (perPet && perPet.size) entry['groomingAddOns'] = Array.from(perPet);

                // enrich from pet doc
                const ps = await getDoc(doc(db, 'users', userId, 'pets', petId)).catch(() => null);
                const pdata = ps?.data() || {};
                if (pdata['medications']) entry['medications'] = pdata['medications'];
                if (pdata['medicationDetails']) entry['medicationDetails'] = pdata['medicationDetails'];
                if (pdata['spayedNeutered']) entry['spayedNeutered'] = pdata['spayedNeutered'];

                await rtdbSet(rtdbRef(rtdb, `upcomingReservations/${businessId}/${rtdbKey}`), entry);
              }),
            );
          }
        }

        // Waiver version backfill (non-breaking)
        if (waiverRequired) {
          await setDoc(
            doc(db, 'userApprovedBusinesses', businessId, 'clients', userId),
            { waiverVersionSigned: waiverVersionLatest, waiverSignedAt: Timestamp.now() },
            { merge: true },
          );
        }

        // Success UI reset
        setDraftBookings([]);
        setGroomingSelections({});
        setSelectedTime('');
        setSelectedDate(null);
        setSelectedPetIds(pets.map((p) => p.id));
        alert(t('submission_success'));
      } catch (e) {
        console.error('❌ submitAllReservations failed:', e);
        alert(t('submission_error') || 'There was an error submitting your bookings.');
      } finally {
        setIsSubmitting(false);
      }
    },
    [
      draftBookings,
      waiverRequired,
      waiverSigned,
      groomingSelections,
      userId,
      ownerName,
      pets,
      businessId,
      clientWritesRTDB,
      bizTZ,
      t,
    ],
  );

  /* =========================
     Render
     ========================= */
  return (
    <div className="min-h-screen bg-[color:var(--color-background)] px-4 py-6 text-[color:var(--color-foreground)]">
      <div className="w-full max-w-xl mx-auto space-y-6">
        {/* Back */}
        <button
          onClick={() => router.push(`/${locale}/individualselectservice?businessId=${businessId}`)}
          className="mb-4 text-sm text-[color:var(--color-accent)] underline hover:opacity-90"
        >
          ← {t('back_to_select_service')}
        </button>

        {/* Heading */}
        <h1 className="text-3xl font-bold text-center text-[color:var(--color-accent)]">
          {t('book_daycare_title')}
          <br />
          <span className="text-lg font-normal text-gray-600">{businessName}</span>
        </h1>

        {error && <p className="text-red-600 text-center text-sm">{error}</p>}

        {isLoading ? (
          <p className="text-center text-gray-500 text-sm">{t('loading')}</p>
        ) : (
          <div className="flex flex-col items-center space-y-6">
            {/* Date */}
            <div className="flex flex-col items-center space-y-1 w-full">
              <label className="font-semibold text-center text-sm">{t('select_date')}</label>
              <DatePicker
                selected={selectedDate}
                onChange={async (date: Date | null) => {
                  setSelectedDate(date);
                  if (date && userId) {
                    const weekday = weekdayName(date, bizTZ);
                    const raw = sortTimeStrings(dropOffTimesByWeekday[weekday] || []);
                    setDropOffOptions(raw);
                    setSelectedTime(raw[0] || '');
                    await filterUnavailableTimes(date, raw);
                    await checkForExistingReservation(date, userId);
                  }
                }}
                dateFormat="MM/dd/yyyy"
                className="w-full max-w-xs border p-2 rounded text-center text-sm"
                placeholderText="Select a date"
              />
            </div>

            {/* Time */}
            {dropOffOptions.length > 0 && (
              <div className="flex flex-col items-center space-y-1 w-full">
                <label className="font-semibold text-center text-sm">{t('select_time')}</label>
                <select
                  className="w-full max-w-xs border p-2 rounded text-sm"
                  value={selectedTime}
                  onChange={(e) => setSelectedTime(e.target.value)}
                >
                  {dropOffOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>
            )}

            {/* Pets */}
            <div className="flex flex-col items-start space-y-2 w-full max-w-xs">
              <label className="font-semibold w-full text-center text-sm">{t('select_pets')}</label>
              <div className="flex flex-col space-y-2 w-full">
                {pets.map((pet) => (
                  <label key={pet.id} className="flex items-center gap-2 text-sm">
                    <input
                      type="checkbox"
                      checked={selectedPetIds.includes(pet.id)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setSelectedPetIds((prev) => uniq([...prev, pet.id]));
                        } else {
                          setSelectedPetIds((prev) => prev.filter((id) => id !== pet.id));
                        }
                      }}
                    />
                    <span>{pet.name}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Assessment toggle (if business requires temperament tests) */}
            {temperamentTestRequired && (
              <label className="flex items-center gap-2 w-full max-w-xs text-sm">
                <input
                  type="checkbox"
                  checked={isAssessment}
                  onChange={() => setIsAssessment((v) => !v)}
                />
                <span>
                  <em>Assessment day</em>
                </span>
              </label>
            )}

            {/* Vaccine Alerts (read-only UI, step 1) */}
            {shouldShowAlertsSection && (
              <div className="w-full max-w-xl px-3 py-3 rounded-lg bg-white/70 shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-orange-600">⚠️</span>
                  <span className="font-semibold text-sm">
                    Vaccine Alerts — pets without current vaccines will be flagged.
                  </span>
                </div>

                {isLoadingAlerts ? (
                  <div className="text-sm text-gray-700 flex items-center gap-2">
                    <span className="animate-pulse">●</span> Checking vaccine status…
                  </div>
                ) : selectedPetIds.length === 0 ? (
                  <div className="text-sm text-gray-600">Select at least one pet to check alerts.</div>
                ) : (
                  <div className="space-y-2">
                    {selectedPetIds.map((pid) => {
                      const pet = pets.find((p) => p.id === pid);
                      const issues = alertsByPet[pid] || [];
                      if (!issues.length) return null;
                      return (
                        <div key={pid} className="border rounded p-2">
                          <div className="text-sm font-semibold">{pet?.name || 'Pet'}</div>
                          <ul className="list-disc list-inside text-sm">
                            {issues.map((msg) => (
                              <li key={msg} className={/Expired|Not on file/i.test(msg) ? 'text-red-600' : ''}>
                                {msg}
                              </li>
                            ))}
                          </ul>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            )}

            {/* Add to booking list */}
            <button
              onClick={addBookingDraft}
              className={`w-full max-w-xs py-3 rounded text-white text-sm ${hasExistingReservation ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-800 hover:bg-blue-700'
                }`}
              disabled={hasExistingReservation}
            >
              {t('add_to_booking_list')}
            </button>

            {/* Grooming add-ons modal (per-pet) */}
            <GroomingModal
              isOpen={showGroomingUI}
              onClose={() => {
                setTimeout(() => {
                  if (pendingDraft) {
                    setDraftBookings((prev) => [
                      ...prev,
                      {
                        ...pendingDraft,
                        groomingAddOns: serializeGroomingSelections(groomingSelections),
                      },
                    ]);
                  }
                  resetFormAfterDraft();
                  setPendingDraft(null);
                  setShowGroomingUI(false);
                }, 100);
              }}
              pets={pets.filter((p) => pendingDraft?.petIds.includes(p.id))}
              services={groomingServices}
              groomingSelections={groomingSelections}
              setGroomingSelections={setGroomingSelections}
            />

            {/* Draft list */}
            {draftBookings.length > 0 && (
              <div className="w-full space-y-4">
                <h2 className="text-md font-semibold text-center">{t('your_bookings')}</h2>
                {draftBookings.map((b, idx) => {
                  const petNames = b.petIds
                    .map((id) => pets.find((p) => p.id === id)?.name || 'Unknown')
                    .join(', ');
                  const hasGroom = b.groomingAddOns && Object.keys(b.groomingAddOns).length > 0;
                  return (
                    <div key={`${b.date.toISOString()}-${idx}`} className="border p-3 rounded shadow-sm">
                      <p>
                        <strong>📅</strong> {b.date.toLocaleDateString()}
                      </p>
                      <p>
                        <strong>⏰</strong> {b.dropOffTime}
                      </p>
                      <p>
                        <strong>🐶</strong> {petNames}
                      </p>
                      {b.isAssessment && <p className="italic text-gray-600 mt-1">Assessment</p>}
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
            {draftBookings.length > 0 && (
              <button
                onClick={submitAllReservations}
                className={`w-full max-w-xs text-white py-3 rounded transition text-sm ${isSubmitting ? 'bg-gray-400 cursor-wait' : 'bg-green-800 hover:bg-green-700'
                  }`}
                disabled={isSubmitting}
              >
                {isSubmitting ? t('submitting_reservations') : t('submit_all')}
              </button>
            )}
          </div>
        )}

        {/* Grooming Yes/No prompt */}
        {showGroomingPrompt && (
          <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 shadow-md max-w-sm w-full">
              <p className="text-sm mb-4">{t('grooming_prompt_message')}</p>
              <div className="flex justify-end gap-3">
                <button
                  onClick={() => {
                    if (pendingDraft) {
                      setGroomingSelections((prev) => {
                        const cp = { ...prev };
                        pendingDraft.petIds.forEach((pid) => {
                          if (!cp[pid]) cp[pid] = new Set();
                        });
                        return cp;
                      });
                      setShowGroomingUI(true);
                    }
                    setShowGroomingPrompt(false);
                  }}
                  className="bg-green-700 hover:bg-green-600 text-white px-4 py-2 rounded text-sm"
                >
                  {t('yes')}
                </button>
                <button
                  onClick={() => {
                    if (pendingDraft) {
                      setGroomingSelections((prev) => {
                        const cp = { ...prev };
                        pendingDraft.petIds.forEach((pid) => {
                          delete cp[pid];
                        });
                        return cp;
                      });
                      setDraftBookings((prev) => [...prev, pendingDraft]);
                    }
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

        {/* Waiver modal */}
        {showWaiverModal && (
          <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center">
            <div className="bg-white p-6 rounded shadow-md max-w-md w-full space-y-4">
              <h2 className="text-lg font-semibold text-center text-[color:var(--color-accent)]">
                {t('waiver_required_title')}
              </h2>
              <p className="text-sm text-gray-700 whitespace-pre-line">{t('waiver_required_message')}</p>
              <label className="flex items-start gap-2 text-sm text-gray-700">
                <input
                  type="checkbox"
                  checked={hasCheckedAgreement}
                  onChange={() => setHasCheckedAgreement((v) => !v)}
                  className="mt-1"
                />
                <span>{t('waiver_checkbox_label')}</span>
              </label>
              <div className="flex justify-end">
                <button
                  onClick={async () => {
                    try {
                      // If version enforcement is on, also backfill version now
                      if (enforceWaiverVersion) {
                        const w = await getDoc(doc(db, 'businesses', businessId, 'settings', 'clientWaiver'));
                        const version = (w.data()?.waiverVersion as number) ?? 1;
                        await setDoc(
                          doc(db, 'userApprovedBusinesses', businessId, 'clients', userId),
                          { waiverVersionSigned: version, waiverSignedAt: Timestamp.now() },
                          { merge: true },
                        );
                      } else {
                        await setDoc(
                          doc(db, 'userApprovedBusinesses', businessId, 'clients', userId),
                          { waiverSignedAt: Timestamp.now() },
                          { merge: true },
                        );
                      }
                      setWaiverSigned(true);
                      setShowWaiverModal(false);
                    } catch (err) {
                      console.error('❌ Failed to record waiver:', err);
                      alert(t('waiver_agreement_failed'));
                    }
                  }}
                  disabled={!hasCheckedAgreement}
                  className={`px-4 py-2 rounded text-sm text-white ${hasCheckedAgreement ? 'bg-green-700 hover:bg-green-600' : 'bg-gray-400 cursor-not-allowed'
                    }`}
                >
                  {t('agree_button')}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
