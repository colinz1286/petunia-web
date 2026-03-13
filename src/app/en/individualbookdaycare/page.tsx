'use client';

// NOTE: This web page is intended to mirror the iOS view at
// .local-only/ios-real-reference/IndividualBookDaycareView.swift.
// Keep daycare booking rules, capacity checks, and payment flow behavior aligned.
import React, {
  useCallback,
  useEffect,
  useMemo,
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

import {
  getFunctions,
  httpsCallable
} from 'firebase/functions';

import { loadStripe } from '@stripe/stripe-js';
import {
  Elements,
  PaymentElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';
import {
  consumeMembershipPurchaseForClient,
  createMembershipPurchaseForClient,
  loadClientMembershipPurchases,
  loadMembershipPlans,
  membershipPurchaseCanCover,
  type MembershipPlan,
  type MembershipPurchase,
} from '@/lib/boardingAndDaycareMemberships';
import {
  buildDefaultKennelAssignments,
  countOccupiedKennels,
  daycareUsesKennels,
  getDogKennelPreferenceFromData,
  normalizeKennelAssignments,
  normalizeKennelTypeOption,
  sumKennelCapacity,
  type DaycareKennelMode,
  type DogKennelPreference,
  type KennelAssignment,
} from '@/lib/boardingKennels';

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
const functions = getFunctions();

if (!process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY) {
  throw new Error("Missing NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY environment variable");
}

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

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
  daycareKennelMode?: DaycareKennelMode;
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
  paymentTotalCents?: number;
  itemizedLineItems?: PaymentLineItem[];
  membershipPurchaseId?: string;
  membershipPlanId?: string;
  membershipPlanName?: string;
  membershipUnitsApplied?: number;
  membershipPurchasedDuringBooking?: boolean;
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
  paymentIntentId?: string;
  paymentTotalCents?: number;
  itemizedLineItems?: PaymentLineItem[];
  membershipPurchaseId?: string;
  membershipPlanId?: string;
  membershipPlanName?: string;
  membershipUnitsApplied?: number;
  membershipPurchasedDuringBooking?: boolean;
  kennelAssignments?: KennelAssignment[];
};

type DraftBooking = {
  reservationId: string;
  date: Date;                 // normalized (no time)
  dropOffTime: string;
  pickUpTime: string;  // ⭐ NEW
  petIds: string[];
  isAssessment: boolean;
  groomingAddOns?: GroomingSelections;
};

type DaycareAddOnPricingDoc = {
  services?: Record<string, { priceCents?: number }>;
};

type DogAssessmentDoc = {
  notes?: string;
  bathSize?: string;
  bath_size?: string;
  bathsize?: string;
};

type PaymentLineItem = {
  key: string;
  label: string;
  quantity: number;
  unitCents: number;
  totalCents: number;
};

type PaymentBreakdown = {
  lines: PaymentLineItem[];
  subtotalCents: number;
};

type CreateDaycarePaymentIntentResponse = {
  clientSecret?: string;
  paymentIntentId?: string;
  amountCents?: number;
  itemizedLineItems?: unknown;
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

const parseServerItemizedLineItems = (raw: unknown): PaymentLineItem[] => {
  if (!Array.isArray(raw)) return [];
  return raw
    .map((item): PaymentLineItem | null => {
      if (!item || typeof item !== 'object') return null;
      const row = item as Record<string, unknown>;
      const key = typeof row.key === 'string' ? row.key : '';
      const label = typeof row.label === 'string' ? row.label : '';
      const quantity = typeof row.quantity === 'number' ? row.quantity : 0;
      const unitCents = typeof row.unitCents === 'number' ? row.unitCents : 0;
      const totalCents = typeof row.totalCents === 'number' ? row.totalCents : (quantity * unitCents);
      if (!key || !label || quantity <= 0 || unitCents <= 0 || totalCents <= 0) return null;
      return { key, label, quantity, unitCents, totalCents };
    })
    .filter((row): row is PaymentLineItem => row !== null);
};

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

  // 🔵 NEW — Payment Settings (must match iOS behavior)
  const [paymentsEnabled, setPaymentsEnabled] = useState(false);
  const [payAtBookingEnabled, setPayAtBookingEnabled] = useState(false);

  // ⭐ NEW — Pickup time requirement + time map + options
  const [pickUpTimeRequired, setPickUpTimeRequired] = useState(false);
  const [pickUpTimesByWeekday, setPickUpTimesByWeekday] = useState<WeekdayMap>({});
  const [pickUpTimeOptions, setPickUpTimeOptions] = useState<string[]>([]);
  const [selectedPickUpTime, setSelectedPickUpTime] = useState('');
  const [daycareKennelMode, setDaycareKennelMode] = useState<DaycareKennelMode | ''>('');
  const [kennelCapacityTotal, setKennelCapacityTotal] = useState<number | null>(null);
  const [petKennelPreferences, setPetKennelPreferences] = useState<Record<string, DogKennelPreference>>({});

  const [maxPerTimeSlot, setMaxPerTimeSlot] = useState<number>(3);
  const [includePendingInCapacity, setIncludePendingInCapacity] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [clientWritesRTDB, setClientWritesRTDB] = useState(true);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
  const [groomingServicePriceCentsByName, setGroomingServicePriceCentsByName] = useState<Record<string, number>>({});
  const [daycarePriceCentsByTier, setDaycarePriceCentsByTier] = useState<Record<number, number>>({});
  const [petBathSizeById, setPetBathSizeById] = useState<Record<string, string>>({});
  const [groomingSelections, setGroomingSelections] = useState<GroomingSelections>({});
  const [showGroomingPrompt, setShowGroomingPrompt] = useState(false);
  const [pendingDraft, setPendingDraft] = useState<DraftBooking | null>(null);
  const [showGroomingUI, setShowGroomingUI] = useState(false);

  const [isProcessingPayment, setIsProcessingPayment] = useState(false);
  const [clientSecret, setClientSecret] = useState<string | null>(null);
  const [paymentAmount, setPaymentAmount] = useState<number | null>(null);
  const [paymentBreakdown, setPaymentBreakdown] = useState<PaymentBreakdown>({ lines: [], subtotalCents: 0 });
  const [paymentIntentId, setPaymentIntentId] = useState<string | null>(null);

  const [membershipPlans, setMembershipPlans] = useState<MembershipPlan[]>([]);
  const [membershipPurchases, setMembershipPurchases] = useState<MembershipPurchase[]>([]);
  const [selectedMembershipPurchaseId, setSelectedMembershipPurchaseId] = useState('');
  const [selectedMembershipPlanId, setSelectedMembershipPlanId] = useState('');

  // Vaccine alerts (read-only)
  const [requiredVaccines, setRequiredVaccines] = useState<Set<VaccineKey>>(new Set());
  const [petVaccineData, setPetVaccineData] = useState<PetVaccineMap>({});
  const [alertsByPet, setAlertsByPet] = useState<Record<string, string[]>>({});
  const [isLoadingAlerts, setIsLoadingAlerts] = useState(false);

  const bizTZ = businessTimeZoneId || Intl.DateTimeFormat().resolvedOptions().timeZone;
  const membershipUnitsRequired = draftBookings.reduce((sum, booking) => sum + booking.petIds.length, 0);
  const hasGroomingSelectionsInDrafts = draftBookings.some(
    (booking) => !!booking.groomingAddOns && Object.keys(booking.groomingAddOns).length > 0
  );
  const daycareOnlinePaymentsEnabled = paymentsEnabled && payAtBookingEnabled;
  const daycareUsableMembershipPurchases = useMemo(() => (
    membershipPurchases.filter((purchase) => membershipPurchaseCanCover(purchase, 'daycare', 0))
  ), [membershipPurchases]);
  const daycarePurchasableMembershipPlans = useMemo(() => (
    membershipPlans.filter((plan) => (
      plan.active
      && plan.appliesToServices.daycare
      && plan.purchaseAtBooking
    ))
  ), [membershipPlans]);
  const showDaycareMembershipFeature = daycareUsableMembershipPurchases.length > 0
    || (daycareOnlinePaymentsEnabled && daycarePurchasableMembershipPlans.length > 0);

  const normalizeText = useCallback((value: string) => value.trim().toLowerCase(), []);

  const extractBathSizeFromAssessment = useCallback((assessment: DogAssessmentDoc): string | null => {
    const direct = assessment.bathSize || assessment.bath_size || assessment.bathsize;
    if (typeof direct === 'string' && direct.trim() !== '') {
      return direct.trim();
    }

    const notes = (assessment.notes || '').trim();
    if (!notes) return null;

    const match = notes.match(/bath\s*size\s*[:\-]\s*([a-z0-9+\- ]+)/i)
      || notes.match(/bath\s*[:\-]\s*([a-z0-9+\- ]+)/i);

    if (!match?.[1]) return null;
    const parsed = match[1].trim();
    return parsed === '' ? null : parsed;
  }, []);

  const findBathServiceForSize = useCallback((bathSize: string, services: string[]): string | null => {
    const normalizedSize = normalizeText(bathSize);
    if (!normalizedSize) return null;

    const bathServices = services.filter((service) => normalizeText(service).startsWith('bath'));
    if (bathServices.length === 0) return null;

    const exact = bathServices.find((service) => {
      const normalizedService = normalizeText(service);
      return normalizedService === `bath - ${normalizedSize}` || normalizedService === `bath ${normalizedSize}`;
    });
    if (exact) return exact;

    return bathServices.find((service) => normalizeText(service).includes(normalizedSize)) || null;
  }, [normalizeText]);

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

  const loadMembershipData = useCallback(async (bizId: string, uid: string) => {
    if (!bizId || !uid) {
      setMembershipPlans([]);
      setMembershipPurchases([]);
      return;
    }

    try {
      const [nextPlans, nextPurchases] = await Promise.all([
        loadMembershipPlans(db, bizId),
        loadClientMembershipPurchases(db, bizId, uid),
      ]);
      setMembershipPlans(nextPlans.filter((plan) => plan.active));
      setMembershipPurchases(nextPurchases);
    } catch (error) {
      console.error('❌ Failed to load memberships:', error);
      setMembershipPlans([]);
      setMembershipPurchases([]);
    }
  }, []);

  const fetchBusinessSettings = useCallback(async (bizId: string) => {
    if (!bizId) return;
    try {
      const [bsnapResult, kennelResult] = await Promise.allSettled([
        getDoc(doc(db, 'businesses', bizId)),
        getDocs(collection(db, 'businesses', bizId, 'kennelTypes')),
      ]);
      if (bsnapResult.status !== 'fulfilled') {
        throw bsnapResult.reason;
      }
      if (kennelResult.status !== 'fulfilled') {
        console.warn('⚠️ Kennel types failed to load for daycare booking page:', kennelResult.reason);
      }

      const bsnap = bsnapResult.value;
      const kennelSnap = kennelResult.status === 'fulfilled' ? kennelResult.value : null;
      const data = (bsnap.data() || {}) as BusinessSettings;
      const loadedKennelTypes = (kennelSnap?.docs || [])
        .map((kennelDoc) => normalizeKennelTypeOption(
          kennelDoc.id,
          kennelDoc.data() as Record<string, unknown>
        ))
        .filter((kennelType): kennelType is NonNullable<ReturnType<typeof normalizeKennelTypeOption>> => kennelType !== null);

      // TZ & features
      setBusinessTimeZoneId(data.timeZoneId || null);
      setDaycareKennelMode(
        data.daycareKennelMode === 'kennelBased'
          ? 'kennelBased'
          : data.daycareKennelMode === 'openRoam'
            ? 'openRoam'
            : ''
      );
      setKennelCapacityTotal(sumKennelCapacity(loadedKennelTypes) || null);
      setIncludePendingInCapacity(!!data.features?.countPendingInCapacity);
      setClientWritesRTDB(data.features?.clientWritesRTDB !== false);

      // Core flags
      setDropOffTimeRequired(!!data.dropOffTimeRequiredDaycare);

      // ⭐ NEW — Pickup required flag
      setPickUpTimeRequired(!!data.pickUpTimeRequiredDaycare);

      // ✅ NEW — Approval toggle (daycare)
      setRequireDaycareReservationApproval(!!data.requireDaycareReservationApproval);

      // 🔵 NEW — Hydrate Payment Settings (matches iOS)
      const paymentSettings = (data as {
        paymentSettings?: {
          enabled?: boolean;
          daycare?: {
            payAtBooking?: boolean;
          };
        }
      }).paymentSettings || {};
      setPaymentsEnabled(!!paymentSettings.enabled);

      const daycarePayments = paymentSettings.daycare || {};
      setPayAtBookingEnabled(!!daycarePayments.payAtBooking);

      setTemperamentTestRequired(!!data.temperamentTestRequired);

      // Grooming
      setGroomingAvailable(!!data.groomingAvailableAsAddOnToDaycare);
      const fallbackServices = (data.groomingServices || []).map(s => (s || '').trim()).filter(Boolean);
      setGroomingServices(fallbackServices);

      try {
        const daycarePricingSnap = await getDoc(doc(db, 'businesses', bizId, 'settings', 'daycarePricing'));
        if (daycarePricingSnap.exists()) {
          const raw = daycarePricingSnap.data() as Record<string, number>;
          const next: Record<number, number> = {};
          Object.entries(raw).forEach(([tier, cents]) => {
            const n = Number(tier);
            if (Number.isFinite(n) && n > 0 && typeof cents === 'number' && cents > 0) {
              next[n] = cents;
            }
          });
          setDaycarePriceCentsByTier(next);
        } else {
          setDaycarePriceCentsByTier({});
        }
      } catch {
        setDaycarePriceCentsByTier({});
      }

      // Prefer pay-at-checkout daycare add-on pricing keys for daycare grooming options.
      try {
        const addOnSnap = await getDoc(doc(db, 'businesses', bizId, 'settings', 'daycareAddOnPricing'));
        if (addOnSnap.exists()) {
          const addOnData = addOnSnap.data() as DaycareAddOnPricingDoc;
          const servicesMap = addOnData.services || {};
          const pricedServices = Object.keys(servicesMap)
            .map((s) => s.trim())
            .filter(Boolean)
            .sort((a, b) => a.localeCompare(b));

          const pricesByName: Record<string, number> = {};
          for (const [serviceName, service] of Object.entries(servicesMap)) {
            if (typeof service?.priceCents === 'number') {
              pricesByName[serviceName] = service.priceCents;
            }
          }
          setGroomingServicePriceCentsByName(pricesByName);

          if (pricedServices.length > 0) {
            setGroomingServices(pricedServices);
          }
        }
      } catch {
        // Keep fallback service names from business doc.
      }

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
  }, [bizTZ]);

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

  useEffect(() => {
    if (!businessId || !userId) return;
    void loadMembershipData(businessId, userId);
  }, [businessId, loadMembershipData, userId]);

  useEffect(() => {
    if (
      selectedMembershipPurchaseId
      && !daycareUsableMembershipPurchases.some((purchase) => purchase.id === selectedMembershipPurchaseId)
    ) {
      setSelectedMembershipPurchaseId('');
    }

    if (
      selectedMembershipPlanId
      && !(
        daycareOnlinePaymentsEnabled
        && daycarePurchasableMembershipPlans.some((plan) => plan.id === selectedMembershipPlanId)
      )
    ) {
      setSelectedMembershipPlanId('');
    }
  }, [
    daycareOnlinePaymentsEnabled,
    daycarePurchasableMembershipPlans,
    daycareUsableMembershipPurchases,
    selectedMembershipPlanId,
    selectedMembershipPurchaseId,
  ]);

  useEffect(() => {
    const hydrateBathSizes = async () => {
      if (!businessId || pets.length === 0) {
        setPetBathSizeById({});
        setPetKennelPreferences({});
        return;
      }

      const rows = await Promise.all(
        pets.map(async (pet) => {
          try {
            const ref = doc(db, 'dogAssessments', pet.id, 'businesses', businessId);
            const snap = await getDoc(ref);
            if (!snap.exists()) {
              return [pet.id, { bathSize: '', kennelPreference: null }] as const;
            }
            const data = snap.data() as Record<string, unknown>;
            const parsed = extractBathSizeFromAssessment(data as DogAssessmentDoc) || '';
            const kennelPreference = getDogKennelPreferenceFromData(data);
            return [pet.id, { bathSize: parsed, kennelPreference }] as const;
          } catch {
            return [pet.id, { bathSize: '', kennelPreference: null }] as const;
          }
        })
      );

      const nextBathSizes: Record<string, string> = {};
      const nextKennelPreferences: Record<string, DogKennelPreference> = {};
      for (const [petId, row] of rows) {
        if (row.bathSize) nextBathSizes[petId] = row.bathSize;
        if (row.kennelPreference) nextKennelPreferences[petId] = row.kennelPreference;
      }
      setPetBathSizeById(nextBathSizes);
      setPetKennelPreferences(nextKennelPreferences);
    };

    void hydrateBathSizes();
  }, [businessId, pets, extractBathSizeFromAssessment]);

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

  const checkKennelCapacityForDate = useCallback(async (
    date: Date,
    petIds: string[],
    draftsToInclude: DraftBooking[] = draftBookings
  ) => {
    if (!daycareUsesKennels(daycareKennelMode)) return true;
    if (!businessId) return true;
    if (!kennelCapacityTotal || kennelCapacityTotal <= 0) return false;

    try {
      const statuses = includePendingInCapacity ? ['pending', 'approved'] : ['approved'];
      const [boardingSnap, daycareSnap] = await Promise.all([
        getDocs(query(
          collection(db, 'boardingReservations'),
          where('businessId', '==', businessId),
          where('status', 'in', statuses)
        )),
        getDocs(query(
          collection(db, 'daycareReservations'),
          where('businessId', '==', businessId),
          where('status', 'in', statuses)
        )),
      ]);

      const targetDateKey = ymdKey(date, bizTZ);
      let occupiedKennels = 0;

      for (const docSnap of boardingSnap.docs) {
        const data = docSnap.data();
        const tsIn = data.checkInDate as Timestamp | undefined;
        const tsOut = data.checkOutDate as Timestamp | undefined;
        const reservationPetIds = (data.petIds as string[]) || [];
        if (!tsIn || !tsOut) continue;

        const checkInKey = ymdKey(tsIn.toDate(), bizTZ);
        const checkOutKey = ymdKey(tsOut.toDate(), bizTZ);
        if (!(checkInKey <= targetDateKey && targetDateKey < checkOutKey)) continue;

        const kennelAssignments = normalizeKennelAssignments(data.kennelAssignments, {
          allowedPetIds: reservationPetIds,
        });
        occupiedKennels += kennelAssignments.length > 0
          ? countOccupiedKennels(kennelAssignments, new Set(reservationPetIds))
          : Math.max(1, reservationPetIds.length);
      }

      for (const docSnap of daycareSnap.docs) {
        const data = docSnap.data();
        const reservationPetIds = (data.petIds as string[]) || [];
        const dateKey = (data.dateBusinessTZ as string | undefined)
          || ((data.date as Timestamp | undefined) ? ymdKey((data.date as Timestamp).toDate(), bizTZ) : '');
        if (dateKey !== targetDateKey) continue;

        const kennelAssignments = normalizeKennelAssignments(data.kennelAssignments, {
          allowedPetIds: reservationPetIds,
        });
        occupiedKennels += kennelAssignments.length > 0
          ? countOccupiedKennels(kennelAssignments, new Set(reservationPetIds))
          : Math.max(1, reservationPetIds.length);
      }

      for (const booking of draftsToInclude) {
        if (ymdKey(booking.date, bizTZ) !== targetDateKey) continue;
        const draftAssignments = buildDefaultKennelAssignments(booking.petIds, petKennelPreferences);
        occupiedKennels += draftAssignments.length > 0
          ? countOccupiedKennels(draftAssignments)
          : Math.max(1, booking.petIds.length);
      }

      const proposedAssignments = buildDefaultKennelAssignments(petIds, petKennelPreferences);
      const proposedOccupiedKennels = proposedAssignments.length > 0
        ? countOccupiedKennels(proposedAssignments)
        : Math.max(1, petIds.length);

      return occupiedKennels + proposedOccupiedKennels <= kennelCapacityTotal;
    } catch (e) {
      console.error('❌ Daycare kennel capacity check failed:', e);
      return true;
    }
  }, [
    bizTZ,
    businessId,
    daycareKennelMode,
    draftBookings,
    includePendingInCapacity,
    kennelCapacityTotal,
    petKennelPreferences,
  ]);

  /* =========================
     Add draft + Grooming prompt/modal
     ========================= */
  const resetFormAfterDraft = useCallback(() => {
    setSelectedTime('');
    setTimeOptions((prev) => [...prev]); // keep list, empty selection
    setSelectedPetIds(pets.map((p) => p.id));
    setPickUpTimeOptions((prev) => [...prev]);
  }, [pets]);

  const addBookingDraft = useCallback(async () => {
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

    const underKennelCapacity = await checkKennelCapacityForDate(selectedDate, selectedPetIds);
    if (!underKennelCapacity) {
      alert(t('kennel_capacity_reached_message'));
      return;
    }

    const draft: DraftBooking = {
      reservationId: crypto.randomUUID(),
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
    blackoutDates,
    bizTZ,
    checkKennelCapacityForDate,
  ]);

  const buildPaymentBreakdown = useCallback((bookings: DraftBooking[]): PaymentBreakdown => {
    const lineMap = new Map<string, PaymentLineItem>();
    const selectedPlan = membershipPlans.find((plan) => plan.id === selectedMembershipPlanId) || null;
    const membershipCoversDaycareBase = !!selectedMembershipPurchaseId || !!selectedPlan;

    const addLine = (key: string, label: string, quantity: number, unitCents: number) => {
      if (quantity <= 0 || unitCents <= 0) return;
      const existing = lineMap.get(key);
      if (existing) {
        const nextQty = existing.quantity + quantity;
        lineMap.set(key, {
          ...existing,
          quantity: nextQty,
          totalCents: nextQty * existing.unitCents,
        });
        return;
      }
      lineMap.set(key, {
        key,
        label,
        quantity,
        unitCents,
        totalCents: quantity * unitCents,
      });
    };

    bookings.forEach((booking) => {
      if (!membershipCoversDaycareBase) {
        const tier = booking.petIds.length;
        const baseCents = daycarePriceCentsByTier[tier];
        if (typeof baseCents === 'number' && baseCents > 0) {
          addLine(
            `daycare-tier-${tier}`,
            `Daycare (${tier} ${tier === 1 ? 'dog' : 'dogs'})`,
            1,
            baseCents
          );
        }
      }

      const addOns = booking.groomingAddOns || {};
      Object.values(addOns).forEach((services) => {
        services.forEach((serviceName) => {
          const cents = groomingServicePriceCentsByName[serviceName];
          if (typeof cents === 'number' && cents > 0) {
            addLine(
              `grooming-${serviceName.toLowerCase()}`,
              `Grooming: ${serviceName}`,
              1,
              cents
            );
          }
        });
      });
    });

    if (selectedPlan && selectedPlan.priceCents > 0) {
      addLine(
        `membership-plan-${selectedPlan.id}`,
        `Membership: ${selectedPlan.name}`,
        1,
        selectedPlan.priceCents
      );
    }

    const lines = Array.from(lineMap.values());
    return {
      lines,
      subtotalCents: lines.reduce((sum, line) => sum + line.totalCents, 0),
    };
  }, [
    daycarePriceCentsByTier,
    groomingServicePriceCentsByName,
    membershipPlans,
    selectedMembershipPlanId,
    selectedMembershipPurchaseId,
  ]);

  // 🔵 Stripe Payment Flow (matches iOS architecture)
  const startStripePaymentFlow = useCallback(async () => {
    if (isProcessingPayment) return;
    if (!userId || draftBookings.length === 0) return;

    setIsProcessingPayment(true);

    try {
      const localBreakdown = buildPaymentBreakdown(draftBookings);
      setPaymentBreakdown(localBreakdown);

      // 🔄 STEP 1 — Sync Stripe Account Status
      const syncCallable = httpsCallable(functions, 'syncStripeAccountStatus');
      await syncCallable({ businessId });

      // 🔄 STEP 2 — Create PaymentIntent
      const createCallable = httpsCallable(functions, 'createDaycarePaymentIntent');

      const payload = {
        businessId,
        userId,
        selectedMembershipPurchaseId: selectedMembershipPurchaseId || null,
        selectedMembershipPlanId: selectedMembershipPlanId || null,
        draftBookings: draftBookings.map((b) => ({
          reservationId: b.reservationId,   // 🔥 CRITICAL — match iOS
          date: b.date.getTime() / 1000,
          petIds: b.petIds,
          dropOffTime: b.dropOffTime,
          pickUpTime: b.pickUpTime,
          isAssessment: b.isAssessment,
          // Include selected daycare grooming add-ons so checkout can price them.
          groomingAddOns: b.groomingAddOns || {},
        })),
      };

      const result = await createCallable(payload) as { data?: CreateDaycarePaymentIntentResponse };
      const response = result?.data || {};

      const clientSecret = response.clientSecret;
      const amountCents = response.amountCents;
      const nextPaymentIntentId = response.paymentIntentId;

      if (!clientSecret || typeof amountCents !== "number") {
        throw new Error("Invalid PaymentIntent response");
      }

      const serverLines = parseServerItemizedLineItems(response.itemizedLineItems);
      if (serverLines.length > 0) {
        setPaymentBreakdown({
          lines: serverLines,
          subtotalCents: serverLines.reduce((sum, line) => sum + line.totalCents, 0),
        });
      } else {
        setPaymentBreakdown(localBreakdown);
      }

      console.log("✅ PaymentIntent created:", clientSecret.substring(0, 20));

      // 🔥 NEW — Store amount for UI display
      setPaymentAmount(amountCents);
      setPaymentIntentId(nextPaymentIntentId || null);

      // Store clientSecret to render Stripe UI instead of auto-submitting
      setClientSecret(clientSecret);

    } catch (error) {
      console.error("❌ Stripe payment flow failed:", error);
      alert(t('payment_processing_failed'));
    } finally {
      setIsProcessingPayment(false);
    }
  }, [
    isProcessingPayment,
    userId,
    draftBookings,
    businessId,
    buildPaymentBreakdown,
    selectedMembershipPlanId,
    selectedMembershipPurchaseId,
    t,
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

    const selectedPurchaseForUsage = membershipPurchases.find(
      (purchase) => purchase.id === selectedMembershipPurchaseId
    ) || null;
    const selectedPlanForPurchase = membershipPlans.find(
      (plan) => plan.id === selectedMembershipPlanId
    ) || null;
    const newMembershipPurchaseId = selectedPlanForPurchase ? crypto.randomUUID() : null;
    const membershipReservationAnchorId = draftBookings[0]?.reservationId || null;
    const membershipCreatedBy = auth.currentUser?.email || auth.currentUser?.uid || userId;

    if (selectedMembershipPurchaseId && !selectedPurchaseForUsage) {
      alert(t('membership_selected_purchase_unavailable'));
      return;
    }

    if (selectedPurchaseForUsage && !membershipPurchaseCanCover(selectedPurchaseForUsage, 'daycare', membershipUnitsRequired)) {
      alert(t('membership_balance_insufficient_daycare'));
      return;
    }

    if (selectedMembershipPlanId && !selectedPlanForPurchase) {
      alert(t('membership_selected_plan_unavailable'));
      return;
    }

    if (selectedPlanForPurchase && !daycareOnlinePaymentsEnabled) {
      alert(t('membership_purchase_requires_daycare_pay_at_booking'));
      return;
    }

    try {
      // refresh owner name best-effort
      try {
        const usnap = await getDoc(doc(db, 'users', userId)).catch(() => null);
        const fn = (usnap?.data()?.firstName as string) || '';
        const ln = (usnap?.data()?.lastName as string) || '';
        const on = `${fn} ${ln}`.trim();
        if (on) setOwnerName(on);
      } catch { /* ignore */ }

      const submittedDrafts: DraftBooking[] = [];

      for (const booking of draftBookings) {
        const underKennelCapacity = await checkKennelCapacityForDate(
          booking.date,
          booking.petIds,
          submittedDrafts
        );
        if (!underKennelCapacity) {
          alert(t('kennel_capacity_reached_message'));
          return;
        }

        const reservationId = booking.reservationId;   // 🔥 use canonical ID
        const realtimeKey = reservationId;

        const dateBizKey = ymdKey(booking.date, bizTZ);

        // ✅ Submit-time authoritative fetch (matches iOS fix)
        const bsnap = await getDoc(doc(db, 'businesses', businessId));
        const bdata = (bsnap.data() || {}) as BusinessSettings;

        // Use submit-time truth (never stale)
        const requireApprovalNow = !!bdata.requireDaycareReservationApproval;
        const statusToWrite: 'pending' | 'approved' = requireApprovalNow ? 'pending' : 'approved';
        const petStatuses = booking.petIds.reduce<Record<string, string>>((acc, pid) => {
          acc[pid] = statusToWrite;
          return acc;
        }, {});

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

        if (daycareUsesKennels(daycareKennelMode)) {
          payload.kennelAssignments = buildDefaultKennelAssignments(
            booking.petIds,
            petKennelPreferences
          );
        }

        if (booking.isAssessment) payload.isAssessment = true;
        if (booking.groomingAddOns && Object.keys(booking.groomingAddOns).length) {
          payload.groomingAddOns = booking.groomingAddOns;
        }
        if (paymentIntentId) payload.paymentIntentId = paymentIntentId;
        if (paymentAmount && paymentAmount > 0) payload.paymentTotalCents = paymentAmount;
        if (paymentBreakdown.lines.length > 0) payload.itemizedLineItems = paymentBreakdown.lines;
        if (selectedPurchaseForUsage?.id || newMembershipPurchaseId) {
          payload.membershipPurchaseId = selectedPurchaseForUsage?.id || newMembershipPurchaseId || undefined;
          payload.membershipPlanId = selectedPurchaseForUsage?.planId || selectedPlanForPurchase?.id;
          payload.membershipPlanName = selectedPurchaseForUsage?.planName || selectedPlanForPurchase?.name;
          payload.membershipUnitsApplied = booking.petIds.length;
          payload.membershipPurchasedDuringBooking = !!selectedPlanForPurchase;
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
            if (paymentAmount && paymentAmount > 0) base.paymentTotalCents = paymentAmount;
            if (paymentBreakdown.lines.length > 0) base.itemizedLineItems = paymentBreakdown.lines;
            if (selectedPurchaseForUsage?.id || newMembershipPurchaseId) {
              base.membershipPurchaseId = selectedPurchaseForUsage?.id || newMembershipPurchaseId || undefined;
              base.membershipPlanId = selectedPurchaseForUsage?.planId || selectedPlanForPurchase?.id;
              base.membershipPlanName = selectedPurchaseForUsage?.planName || selectedPlanForPurchase?.name;
              base.membershipUnitsApplied = booking.petIds.length;
              base.membershipPurchasedDuringBooking = !!selectedPlanForPurchase;
            }

            await rtdbSet(rtdbRef(rtdb, `upcomingReservations/${businessId}/${rtdbKey}`), base);
          }));
        }

        submittedDrafts.push(booking);
      }

      let membershipUpdateError = false;
      let membershipUpdateMessage = '';
      let purchaseIdToConsume = selectedPurchaseForUsage?.id || null;

      if (selectedPlanForPurchase && newMembershipPurchaseId) {
        try {
          await createMembershipPurchaseForClient({
            db,
            businessId,
            clientUserId: userId,
            plan: selectedPlanForPurchase,
            source: 'daycareBooking',
            createdBy: membershipCreatedBy,
            purchaseIdOverride: newMembershipPurchaseId,
            linkedReservationId: membershipReservationAnchorId,
            note: `Purchased during daycare booking for ${draftBookings.length} reservation(s).`,
          });
          purchaseIdToConsume = newMembershipPurchaseId;
        } catch (error) {
          console.error('❌ Membership purchase creation failed after daycare submit:', error);
          membershipUpdateError = true;
          membershipUpdateMessage = t('membership_purchase_save_failed_after_submit');
        }
      }

      if (!membershipUpdateError && purchaseIdToConsume) {
        try {
          await consumeMembershipPurchaseForClient({
            db,
            businessId,
            clientUserId: userId,
            purchaseId: purchaseIdToConsume,
            service: 'daycare',
            quantity: membershipUnitsRequired,
            createdBy: membershipCreatedBy,
            reservationId: membershipReservationAnchorId,
            note: `Applied to ${draftBookings.length} daycare reservation(s).`,
          });
        } catch (error) {
          console.error('❌ Membership consumption failed after daycare submit:', error);
          membershipUpdateError = true;
          membershipUpdateMessage = t('membership_balance_update_failed_after_submit');
        }
      }

      setDraftBookings([]);
      setGroomingSelections({});
      setPaymentBreakdown({ lines: [], subtotalCents: 0 });
      setPaymentAmount(null);
      setPaymentIntentId(null);
      setSelectedMembershipPurchaseId('');
      setSelectedMembershipPlanId('');
      if (membershipUpdateError) {
        alert(membershipUpdateMessage);
      } else {
        alert(t('submission_success'));
      }
      router.push(`/${locale}/individualupcomingappointments`);
    } catch (e) {
      console.error('❌ submitAllReservations failed:', e);
      alert(t('submission_error') || 'There was an error submitting your bookings.');
    }
  }, [
    userId,
    draftBookings,
    businessId,
    bizTZ,
    pets,
    ownerName,
    router,
    locale,
    t,
    blackoutDates,
    paymentAmount,
    paymentBreakdown.lines,
    paymentIntentId,
    membershipPlans,
    membershipPurchases,
    selectedMembershipPlanId,
    selectedMembershipPurchaseId,
    membershipUnitsRequired,
    daycareOnlinePaymentsEnabled,
    daycareKennelMode,
    petKennelPreferences,
    checkKennelCapacityForDate,
  ]);

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
                    <label key={pet.id} className="flex items-start gap-2 text-sm">
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
                      <div className="flex flex-col">
                        <span>{pet.name}</span>
                      </div>
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
                      // Prepare selections for each pet, auto-prefilling matching bath size when available.
                      setGroomingSelections((prev) => {
                        const cp = { ...prev };
                        pendingDraft.petIds.forEach((pid) => {
                          if (cp[pid]?.length) return;

                          const bathSize = petBathSizeById[pid];
                          const matchedBath = bathSize ? findBathServiceForSize(bathSize, groomingServices) : null;
                          cp[pid] = matchedBath ? [matchedBath] : [];
                        });
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
              servicePriceCentsByName={groomingServicePriceCentsByName}
              preferredBathServiceByPetId={pendingDraft.petIds.reduce<Record<string, string>>((acc, pid) => {
                const bathSize = petBathSizeById[pid];
                const matched = bathSize ? findBathServiceForSize(bathSize, groomingServices) : null;
                if (matched) acc[pid] = matched;
                return acc;
              }, {})}
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

          {showDaycareMembershipFeature && (
            <div className="w-full max-w-sm sm:max-w-md mx-auto">
              <div className="rounded-xl border border-amber-200 bg-white p-4 text-black shadow-sm">
                <div className="space-y-2">
                  <h2 className="text-lg font-semibold text-[color:var(--color-accent)]">
                    {t('membership_coming_soon_title')}
                  </h2>
                  <p className="text-sm text-gray-700">
                    {daycareUsableMembershipPurchases.length > 0
                      ? t('membership_coming_soon_existing_balance_body')
                      : t('membership_coming_soon_plans_body')}
                  </p>
                  {daycareUsableMembershipPurchases.length > 0 ? (
                    <p className="text-xs text-gray-500">
                      {t('membership_coming_soon_existing_balance_count', {
                        count: daycareUsableMembershipPurchases.length,
                        plural: daycareUsableMembershipPurchases.length === 1 ? '' : 's',
                      })}
                    </p>
                  ) : null}
                  {daycareOnlinePaymentsEnabled && daycarePurchasableMembershipPlans.length > 0 ? (
                    <p className="text-xs font-medium text-gray-600">
                      {t('membership_coming_soon_booking_enabled')}
                    </p>
                  ) : null}
                </div>
              </div>
            </div>
          )}

          {isProcessingPayment && !clientSecret && (
            <div className="w-full max-w-xs text-center text-sm text-gray-600">
              {t('processing_payment')}
            </div>
          )}

          {clientSecret && (
            <Elements
              key={clientSecret} // 🔥 FORCE REMOUNT
              stripe={stripePromise}
              options={{
                clientSecret,
                appearance: { theme: 'stripe' },
              }}
            >
              <StripeCheckoutForm
                amountCents={paymentAmount}
                breakdown={paymentBreakdown}
                onSuccess={async () => {
                  setClientSecret(null);
                  await submitAllReservations();
                }}
                onCancel={() => {
                  setClientSecret(null);
                  setPaymentAmount(null);
                  setPaymentBreakdown({ lines: [], subtotalCents: 0 });
                  setPaymentIntentId(null);
                }}
              />
            </Elements>
          )}

          {/* Submit */}
          <button
            onClick={() => {
              if (selectedMembershipPlanId && !daycareOnlinePaymentsEnabled) {
                alert(t('membership_purchase_requires_daycare_pay_at_booking'));
                return;
              }

              const needsStripePayment =
                daycareOnlinePaymentsEnabled &&
                (
                  !!selectedMembershipPlanId ||
                  !selectedMembershipPurchaseId ||
                  hasGroomingSelectionsInDrafts
                );

              // 🔵 Stripe Pay-At-Booking Gate (matches iOS logic)
              if (needsStripePayment) {
                startStripePaymentFlow(); // we will implement this next
              } else {
                submitAllReservations();
              }
            }}
            className={`w-full max-w-xs text-white py-3 rounded transition text-sm ${draftBookings.length === 0
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-green-800 hover:bg-green-700'
              }`}
            disabled={draftBookings.length === 0 || isProcessingPayment}
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
  servicePriceCentsByName: Record<string, number>;
  preferredBathServiceByPetId: Record<string, string>;
  pets: Pet[];
  selections: GroomingSelections;
  onSave: (sel: GroomingSelections) => void;
  onClose: () => void;
  t: ReturnType<typeof useTranslations>;
}) {
  const { services, servicePriceCentsByName, preferredBathServiceByPetId, pets, selections, onSave, onClose, t } = props;
  const [localSel, setLocalSel] = useState<GroomingSelections>(() => ({ ...selections }));

  const isBathService = useCallback((service: string) => service.trim().toLowerCase().startsWith('bath'), []);

  useEffect(() => {
    // If a dog has a preferred bath service, remove any other bath-size selections for that dog.
    setLocalSel((prev) => {
      const next: GroomingSelections = { ...prev };
      for (const pet of pets) {
        const preferred = preferredBathServiceByPetId[pet.id];
        if (!preferred) continue;
        const current = next[pet.id] || [];
        const cleaned = current.filter((svc) => !isBathService(svc) || svc === preferred);
        next[pet.id] = cleaned;
      }
      return next;
    });
  }, [pets, preferredBathServiceByPetId, isBathService]);

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
                    const preferredBath = preferredBathServiceByPetId[pet.id];
                    const hideBecauseWrongBathSize =
                      !!preferredBath && isBathService(svc) && svc !== preferredBath;
                    if (hideBecauseWrongBathSize) return null;

                    const on = (localSel[pet.id] || []).includes(svc);
                    const priceCents = servicePriceCentsByName[svc];
                    return (
                      <label key={`${pet.id}-${svc}`} className="flex items-center gap-2 text-sm">
                        <input
                          type="checkbox"
                          checked={on}
                          onChange={(e) => toggle(pet.id, svc, e.target.checked)}
                        />
                        <span>
                          {svc}
                          {typeof priceCents === 'number' ? ` - $${(priceCents / 100).toFixed(2)}` : ''}
                        </span>
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

function StripeCheckoutForm({
  amountCents,
  breakdown,
  onSuccess,
  onCancel,
}: {
  amountCents: number | null;
  breakdown: PaymentBreakdown;
  onSuccess: () => void;
  onCancel: () => void;
}) {

  const stripe = useStripe();
  const elements = useElements();
  const [processing, setProcessing] = useState(false);

  const handleSubmit = async () => {
    if (!stripe || !elements) return;

    setProcessing(true);

    const { error, paymentIntent } = await stripe.confirmPayment({
      elements,
      redirect: "if_required",
    });

    if (error) {
      alert(error.message);
      setProcessing(false);
      return;
    }

    if (paymentIntent?.status === 'succeeded') {
      onSuccess();
    }

    setProcessing(false);
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md space-y-4">
        <h3 className="text-lg font-semibold">Complete Payment</h3>

        {amountCents !== null && (
          <div className="text-md font-semibold text-gray-700">
            Total: ${(amountCents / 100).toFixed(2)}
          </div>
        )}

        {breakdown.lines.length > 0 && (
          <div className="border rounded p-3 bg-gray-50 text-sm">
            <div className="font-semibold mb-2">Invoice Summary</div>
            <div className="space-y-1">
              {breakdown.lines.map((line) => (
                <div key={line.key} className="flex items-center justify-between gap-2">
                  <span>{line.label} x{line.quantity}</span>
                  <span>${(line.totalCents / 100).toFixed(2)}</span>
                </div>
              ))}
            </div>
            <div className="mt-2 pt-2 border-t font-semibold flex items-center justify-between">
              <span>Subtotal</span>
              <span>${(breakdown.subtotalCents / 100).toFixed(2)}</span>
            </div>
          </div>
        )}

        <div className="border p-3 rounded">
          <PaymentElement />
        </div>

        <div className="flex justify-end gap-3">
          <button
            onClick={onCancel}
            className="px-4 py-2 bg-gray-300 rounded"
          >
            Cancel
          </button>

          <button
            onClick={handleSubmit}
            disabled={processing}
            className="px-4 py-2 bg-green-800 text-white rounded"
          >
            {processing ? "Processing..." : "Pay Now"}
          </button>
        </div>
      </div>
    </div>
  );
}
