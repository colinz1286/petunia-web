'use client';

import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';

import { getAuth, onAuthStateChanged } from 'firebase/auth';
import {
  getFirestore,
  collection,
  getDocs,
  getDoc,
  addDoc,
  deleteDoc,
  query,
  where,
  Timestamp,
  doc,
} from 'firebase/firestore';
import { getDatabase, ref as rtdbRef, remove as rtdbRemove } from 'firebase/database';
import { initializeApp, getApp, getApps } from 'firebase/app';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY!,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN!,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID!,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET!,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID!,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID!,
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const rtdb = getDatabase(app);

/** ============== Types (mirrors iOS model) ============== */
type FSMap = Record<string, unknown>;
type GroomingMap = Record<string, string[]>;
type PaymentLineItem = {
  key: string;
  label: string;
  quantity: number;
  unitCents: number;
  totalCents: number;
};

type Reservation = {
  id: string;

  // Primary sort/display date:
  // Daycare -> `date`; Boarding -> `checkInDate`
  date: Date;

  status: string;
  businessId: string;
  petIds: string[];

  // Daycare
  arrivalWindow: string;
  departureWindow?: string | null;   // ⭐ NEW (mirrors iOS)

  // Firestore field used to target RTDB nodes (combined with petId)
  realtimeKey: string;

  // Boarding end date
  pickUpDate?: Date | null;

  // Boarding windows
  checkInWindow?: string | null;
  checkOutWindow?: string | null;

  // Grooming map (petId -> [services])
  groomingAddOns: GroomingMap;

  // Enriched
  businessName: string;
  businessPhone: string;
  businessAddress: string;
  petNames: string[];
  groomingSummaryByPetName: Record<string, string[]>;
  paymentTotalCents?: number | null;
  itemizedLineItems?: PaymentLineItem[];
};

/** ============== Helpers ============== */
const isBoarding = (r: Reservation) => r.pickUpDate != null;

const endOfDay = (d: Date) => {
  const x = new Date(d);
  x.setHours(23, 59, 59, 999);
  return x;
};

const formatDate = (d: Date) => new Intl.DateTimeFormat('en-US', { dateStyle: 'medium' }).format(d);

const cleanPhone = (raw: string) => (raw || '').replace(/[^\d]/g, '');
const fmtCents = (cents: number) => `$${(cents / 100).toFixed(2)}`;

function parseGroomingMap(data: FSMap): GroomingMap {
  const m = (data['groomingAddOns'] as Record<string, unknown>) || {};
  const out: GroomingMap = {};
  for (const [petId, value] of Object.entries(m)) {
    if (Array.isArray(value)) {
      out[petId] = (value as unknown[]).filter((s): s is string => typeof s === 'string');
    }
  }
  return out;
}

function parsePaymentLineItems(data: FSMap): PaymentLineItem[] {
  const raw = data['itemizedLineItems'];
  if (!Array.isArray(raw)) return [];
  return raw
    .map((item): PaymentLineItem | null => {
      if (!item || typeof item !== 'object') return null;
      const row = item as Record<string, unknown>;
      const key = typeof row.key === 'string' ? row.key : '';
      const label = typeof row.label === 'string' ? row.label : '';
      const quantity = typeof row.quantity === 'number' ? row.quantity : 0;
      const unitCents = typeof row.unitCents === 'number' ? row.unitCents : 0;
      const totalCents = typeof row.totalCents === 'number' ? row.totalCents : quantity * unitCents;
      if (!key || !label || quantity <= 0 || unitCents <= 0 || totalCents <= 0) return null;
      return { key, label, quantity, unitCents, totalCents };
    })
    .filter((line): line is PaymentLineItem => line !== null);
}

// ✅ Parses "yyyy-MM-dd" (legacy, matches iOS)
function parseISODateYMD(s: string): Date | null {
  const v = (s || '').trim();
  if (!v) return null;

  const m = v.match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (!m) return null;

  const year = Number(m[1]);
  const month = Number(m[2]);
  const day = Number(m[3]);
  if (!year || !month || !day) return null;

  const d = new Date(year, month - 1, day);
  return Number.isNaN(d.getTime()) ? null : d;
}

// ✅ Accepts Timestamp OR "yyyy-MM-dd" strings (matches iOS behavior)
function parseFSDate(data: FSMap, keys: string[]): Date | null {
  for (const key of keys) {
    const raw = data[key];

    // Firestore Timestamp
    if (raw instanceof Timestamp) {
      const dt = raw.toDate();
      if (!Number.isNaN(dt.getTime())) return dt;
    }

    // Legacy String yyyy-MM-dd
    if (typeof raw === 'string') {
      const dt = parseISODateYMD(raw);
      if (dt) return dt;
    }
  }
  return null;
}

export default function IndividualUpcomingAppointmentsPage() {
  const t = useTranslations('individualUpcomingAppointments');
  const locale = useLocale();
  const router = useRouter();

  const [userId, setUserId] = useState<string>('');
  const [reservations, setReservations] = useState<Reservation[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  // Cancel flow
  const [pendingCancel, setPendingCancel] = useState<Reservation | null>(null);
  const [showCancelConfirm, setShowCancelConfirm] = useState<boolean>(false);
  const [showLateCancel, setShowLateCancel] = useState<boolean>(false);

  const phoneForLateCancel = useMemo(() => pendingCancel?.businessPhone || '', [pendingCancel]);

  /** Auth gate */
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      if (!u) {
        router.push(`/${locale}/loginsignup`);
        return;
      }
      setUserId(u.uid);
    });
    return () => unsub();
  }, [router, locale]);

  /** Daycare -> keep while date is today or later (NO destructive deletes) */
  const loadDaycare = useCallback(async (uid: string): Promise<Reservation[]> => {
    const qref = query(collection(db, 'daycareReservations'), where('userId', '==', uid));
    const snap = await getDocs(qref);

    const out: Reservation[] = [];
    snap.docs.forEach((d) => {
      const data = d.data() as FSMap;
      const date =
        parseFSDate(data, ['date', 'dateBusinessTZ']) ||
        null;
      if (!date) return;

      if (endOfDay(date) < new Date()) return; // filter only

      const grooming = parseGroomingMap(data);
      const itemizedLineItems = parsePaymentLineItems(data);

      out.push({
        id: d.id,
        date,
        status: (data['status'] as string) || 'pending',
        businessId: (data['businessId'] as string) || '',
        petIds: (data['petIds'] as string[]) || [],
        arrivalWindow: (data['arrivalWindow'] as string) || 'N/A',
        departureWindow: (data['departureWindow'] as string) || null,   // ⭐ NEW
        realtimeKey: (data['realtimeKey'] as string) || '',
        groomingAddOns: grooming,
        pickUpDate: null,
        checkInWindow: null,
        checkOutWindow: null,
        businessName: '',
        businessPhone: '',
        businessAddress: '',
        petNames: [],
        groomingSummaryByPetName: {},
        paymentTotalCents: typeof data['paymentTotalCents'] === 'number' ? (data['paymentTotalCents'] as number) : null,
        itemizedLineItems,
      });
    });
    return out;
  }, []);

  /** Boarding -> keep until AFTER pick-up day (EOD) */
  const loadBoarding = useCallback(async (uid: string, now: Date): Promise<Reservation[]> => {
    const qref = query(collection(db, 'boardingReservations'), where('userId', '==', uid));
    const snap = await getDocs(qref);

    const out: Reservation[] = [];
    snap.docs.forEach((d) => {
      const data = d.data() as FSMap;

      // ✅ Match iOS: accept Timestamp OR legacy string dates
      const cin =
        parseFSDate(data, ['checkInDate', 'checkInDateBusinessTZ']) ||
        null;

      if (!cin) return;

      const cout =
        parseFSDate(data, ['checkOutDate', 'checkOutDateBusinessTZ']) ||
        null;

      const keepUntil = cout ? endOfDay(cout) : endOfDay(cin);
      if (keepUntil < now) return;

      const grooming = parseGroomingMap(data);
      const itemizedLineItems = parsePaymentLineItems(data);

      out.push({
        id: d.id,
        date: cin,
        status: (data['status'] as string) || 'pending',
        businessId: (data['businessId'] as string) || '',
        petIds: (data['petIds'] as string[]) || [],
        arrivalWindow: 'N/A',
        realtimeKey: (data['realtimeKey'] as string) || '',
        groomingAddOns: grooming,
        pickUpDate: cout,
        checkInWindow: (data['checkInWindow'] as string) || null,
        checkOutWindow: (data['checkOutWindow'] as string) || null,
        businessName: '',
        businessPhone: '',
        businessAddress: '',
        petNames: [],
        groomingSummaryByPetName: {},
        paymentTotalCents: typeof data['paymentTotalCents'] === 'number' ? (data['paymentTotalCents'] as number) : null,
        itemizedLineItems,
      });
    });

    return out;
  }, []);

  /** Enrichment: business info + pet names (+ grooming mapped by pet name) */
  const enrichReservation = useCallback(
    async (res: Reservation, uid: string): Promise<Reservation> => {
      // Guard against invalid businessId (prevents doc(..., '') crashes)
      const safeBusinessId = (res.businessId || '').trim();
      const bizSnap = safeBusinessId
        ? await getDoc(doc(db, 'businesses', safeBusinessId))
        : null;

      const biz = ((bizSnap && bizSnap.exists()) ? (bizSnap.data() as FSMap) : {}) || {};


      // name / phone
      const businessName = (biz['businessName'] as string) || t('unknown_business');
      const businessPhone = (biz['businessPhone'] as string) || '';

      // address
      const addr = (biz['address'] as FSMap) || {};
      const street = (addr['street'] as string) || '';
      const city = (addr['city'] as string) || '';
      const state = (addr['state'] as string) || '';
      const zip = (addr['zipCode'] as string) || '';
      const addressJoined = [[street, city, state].filter(Boolean).join(', '), zip]
        .filter(Boolean)
        .join(' ');

      // pet names + grooming summary
      const names: string[] = [];
      const groomingByPetName: Record<string, string[]> = {};

      for (const petIdRaw of res.petIds) {
        const petId = (petIdRaw || '').trim();
        if (!petId) continue;

        try {
          const ps = await getDoc(doc(db, 'users', uid, 'pets', petId));
          const petName = (ps.data()?.petName as string) || t('unknown_pet_name');
          names.push(petName);

          const addOns = res.groomingAddOns[petId];
          if (addOns && addOns.length) groomingByPetName[petName] = addOns;
        } catch (err) {
          console.error('❌ pet lookup failed for petId:', petId, err);
          names.push(t('unknown_pet_name'));
        }
      }

      return {
        ...res,
        businessName,
        businessPhone,
        businessAddress: addressJoined,
        petNames: names,
        groomingSummaryByPetName: groomingByPetName,
      };
    },
    [t],
  );

  /** Main loader: daycare + boarding, then enrich, then sort */
  const loadAppointments = useCallback(async () => {
    if (!userId) return;
    setIsLoading(true);
    setErrorMsg(null);
    try {
      const now = new Date();

      const [daycare, boarding] = await Promise.all([
        loadDaycare(userId),
        loadBoarding(userId, now),
      ]);

      const combined = [...daycare, ...boarding];

      // IMPORTANT: One bad document (missing biz/pet, permission edge, etc.)
      // should not prevent ALL appointments from loading.
      const enriched = await Promise.all(
        combined.map(async (r) => {
          try {
            return await enrichReservation(r, userId);
          } catch (err) {
            console.error('❌ enrichReservation failed for reservation:', r?.id, err);
            return r; // keep the reservation as-is (still shows date/time)
          }
        })
      );

      enriched.sort((a, b) => a.date.getTime() - b.date.getTime());
      setReservations(enriched);

    } catch (e) {
      console.error('❌ loadAppointments failed:', e);
      setErrorMsg(t('load_error_generic'));
    } finally {
      setIsLoading(false);
    }
  }, [userId, t, loadDaycare, loadBoarding, enrichReservation]);

  /** Load on user set */
  useEffect(() => {
    if (!userId) return;
    void loadAppointments();
  }, [userId, loadAppointments]);

  /** Cancel gating (24h) — mirrors iOS */
  const requestCancel = useCallback((res: Reservation) => {
    setPendingCancel(res);
    const now = new Date();
    const within24h = res.date.getTime() - now.getTime() < 24 * 60 * 60 * 1000;
    if (within24h) setShowLateCancel(true);
    else setShowCancelConfirm(true);
  }, []);

  /** Execute cancellation (Firestore + RTDB + owner notification) */
  const confirmCancelNow = useCallback(
    async () => {
      if (!pendingCancel) return;
      const res = pendingCancel;
      setShowCancelConfirm(false);

      try {
        const collectionName = isBoarding(res) ? 'boardingReservations' : 'daycareReservations';

        // 1) Firestore delete (modular)
        await deleteDoc(doc(db, collectionName, res.id));

        // 2) RTDB deletes (per pet) + attempt legacy key
        const base = `upcomingReservations/${res.businessId}`;
        const deletions: Promise<unknown>[] = [];
        for (const petId of res.petIds) {
          const key = `${res.realtimeKey}-${petId}`;
          deletions.push(rtdbRemove(rtdbRef(rtdb, `${base}/${key}`)).catch(() => undefined));
        }
        if (res.realtimeKey) {
          deletions.push(rtdbRemove(rtdbRef(rtdb, `${base}/${res.realtimeKey}`)).catch(() => undefined));
        }
        await Promise.all(deletions);

        // 3) Notify business owner
        const bizDoc = await getDoc(doc(db, 'businesses', res.businessId));
        const ownerId = (bizDoc.data()?.ownerId as string) || '';
        if (ownerId) {
          const typeLabel = isBoarding(res) ? 'boarding' : 'daycare';
          const msg = t('client_canceled_appointment', {
            type: typeLabel,
            date: formatDate(res.date),
          });
          await addDoc(collection(db, 'users', ownerId, 'notifications'), {
            type: 'cancellation',
            message: msg,
            timestamp: Timestamp.now(),
          }).catch(() => undefined);
        }

        // 4) Reload
        await loadAppointments();
      } catch (e) {
        console.error('❌ cancelReservation failed:', e);
        await loadAppointments();
      } finally {
        setPendingCancel(null);
      }
    },
    [pendingCancel, t, loadAppointments],
  );

  /** Render */
  return (
    <div className="min-h-screen bg-[color:var(--color-background)] text-[color:var(--color-foreground)]">
      <main className="max-w-2xl mx-auto px-4 py-6">
        {/* Back (left-aligned, mobile-friendly) */}
        <div className="w-full max-w-sm sm:max-w-md mx-auto">
          <button
            onClick={() => router.push(`/${locale}/individualdashboard`)}
            className="mb-2 block w-fit text-sm text-[color:var(--color-accent)] underline hover:opacity-90"
          >
            ← {t('back_to_dashboard', { default: 'Back to Dashboard' })}
          </button>
        </div>

        <h1 className="text-3xl font-bold text-center text-[color:var(--color-accent)] mb-6">
          {t('upcoming_appointments_title')}
        </h1>

        {isLoading && <p className="text-center text-sm text-gray-600">{t('loading_label')}</p>}

        {!isLoading && errorMsg && <p className="text-center text-sm text-red-600">❌ {errorMsg}</p>}

        {!isLoading && !errorMsg && reservations.length === 0 && (
          <p className="text-center text-sm text-gray-600">{t('no_upcoming_appointments')}</p>
        )}

        {!isLoading && !errorMsg && reservations.length > 0 && (
          <div className="space-y-4 pb-10">
            {reservations.map((res) => (
              <AppointmentCard key={res.id} res={res} t={t} onCancel={() => requestCancel(res)} />
            ))}
          </div>
        )}
      </main>

      {/* > 24h confirm dialog */}
      {showCancelConfirm && pendingCancel && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center">
          <div className="bg-white rounded-xl shadow-md w-full max-w-md p-5">
            <h2 className="text-lg font-semibold mb-3">{t('cancel_confirmation_title')}</h2>
            <div className="flex justify-end gap-2">
              <button
                onClick={() => {
                  setShowCancelConfirm(false);
                  setPendingCancel(null);
                }}
                className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300 text-sm"
              >
                {t('cancel_button')}
              </button>
              <button
                onClick={confirmCancelNow}
                className="px-4 py-2 rounded bg-red-600 hover:bg-red-500 text-white text-sm"
              >
                {t('confirm_cancel_button')}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* < 24h: Late-cancel modal with "Call Business" */}
      {showLateCancel && pendingCancel && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center">
          <div className="bg-white rounded-xl shadow-md w-full max-w-md p-5">
            <h2 className="text-lg font-semibold mb-3">{t('late_cancel_alert_title')}</h2>
            <p className="text-sm text-gray-700 mb-5">{t('late_cancel_message')}</p>
            <div className="flex flex-col sm:flex-row sm:justify-end gap-2">
              <a
                href={`tel:${cleanPhone(phoneForLateCancel)}`}
                className="px-4 py-2 rounded bg-green-700 hover:bg-green-600 text-white text-center text-sm"
              >
                {t('call_business_button')}
              </a>
              <button
                onClick={() => {
                  setShowLateCancel(false);
                  setPendingCancel(null);
                }}
                className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300 text-sm"
              >
                {t('cancel_button')}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/** =========================
 * Appointment Card (iOS-like)
 * ========================= */
function AppointmentCard({
  res,
  onCancel,
  t,
}: {
  res: Reservation;
  onCancel: () => void;
  t: ReturnType<typeof useTranslations>;
}) {
  const typeLabel = isBoarding(res) ? t('boarding_label') : t('daycare_label');

  return (
    <div className="rounded-xl border-2 border-[color:var(--color-accent)] bg-white p-4">
      <h3 className="font-semibold text-base mb-2">{t('appointment_title', { type: typeLabel })}</h3>

      {/* Boarding: start/end + windows */}
      {isBoarding(res) ? (
        <div className="text-sm space-y-1">
          <div>
            <span className="font-medium">{t('boarding_start_label')} </span>
            {formatDate(res.date)}
            {res.checkInWindow && res.checkInWindow.trim()
              ? ` (${res.checkInWindow})`
              : ''}
          </div>

          {res.pickUpDate && (
            <div>
              <span className="font-medium">{t('boarding_end_label')} </span>
              {formatDate(res.pickUpDate)}
              {res.checkOutWindow && res.checkOutWindow.trim()
                ? ` (${res.checkOutWindow})`
                : ''}
            </div>
          )}
        </div>
      ) : (
        <div className="text-sm space-y-1">
          <div>
            {t('daycare_date_window_label', {
              date: formatDate(res.date),
              window: res.arrivalWindow,
            })}
          </div>

          {/* ⭐ NEW: Show daycare pick-up time if provided */}
          {res.departureWindow &&
            res.departureWindow.trim() !== '' && (
              <div>
                <span className="font-medium">{t('pickup_label')} </span>
                {res.departureWindow}
              </div>
            )}
        </div>
      )}

      <div className="text-sm mt-2">
        <div>{t('business_label', { name: res.businessName })}</div>
        {res.businessPhone && (
          <div className="mt-1">
            <a
              href={`tel:${cleanPhone(res.businessPhone)}`}
              className="inline-flex items-center gap-1 text-[color:var(--color-accent)] underline"
            >
              {res.businessPhone}
            </a>
          </div>
        )}
        {res.businessAddress && (
          <div className="text-[13px] text-gray-600 mt-1">
            {t('address_label', { address: res.businessAddress })}
          </div>
        )}
      </div>

      <div className="text-sm mt-3">{t('pets_label', { names: res.petNames.join(', ') })}</div>

      {!!Object.keys(res.groomingSummaryByPetName).length && (
        <div className="text-sm mt-3">
          <div className="font-semibold">{t('grooming_addons_title')}</div>
          <div className="mt-1 space-y-1">
            {Object.keys(res.groomingSummaryByPetName)
              .sort((a, b) => a.localeCompare(b))
              .map((petName) => (
                <div key={petName} className="text-[13px] text-gray-700">
                  {t('grooming_addon_detail', {
                    name: petName,
                    list: res.groomingSummaryByPetName[petName].join(', '),
                  })}
                </div>
              ))}
          </div>
        </div>
      )}

      {!!res.itemizedLineItems?.length && (
        <div className="text-sm mt-3 border rounded p-3 bg-gray-50">
          <div className="font-semibold">Invoice Summary</div>
          <div className="mt-1 space-y-1">
            {res.itemizedLineItems.map((line) => (
              <div key={line.key} className="flex items-center justify-between gap-2 text-[13px] text-gray-700">
                <span>{line.label} x{line.quantity}</span>
                <span>{fmtCents(line.totalCents)}</span>
              </div>
            ))}
          </div>
          {typeof res.paymentTotalCents === 'number' && res.paymentTotalCents > 0 && (
            <div className="mt-2 pt-2 border-t font-semibold flex items-center justify-between text-[13px]">
              <span>Total Paid</span>
              <span>{fmtCents(res.paymentTotalCents)}</span>
            </div>
          )}
        </div>
      )}

      <div className="mt-4">
        <button onClick={onCancel} className="text-xs text-red-600 underline">
          {t('cancel_appointment_button')}
        </button>
      </div>
    </div>
  );
}
