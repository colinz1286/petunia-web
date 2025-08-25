'use client';

import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';

import { getApps, initializeApp } from 'firebase/app';
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
} from 'firebase/firestore';
import {
    getDatabase,
    ref as rtdbRef,
    onValue,
    off as rtdbOff,
    DataSnapshot,
    remove as rtdbRemove,
    update as rtdbUpdate,
    set as rtdbSet,
} from 'firebase/database';

/** =========================
 * Firebase init (guarded)
 * ========================= */
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

/** =========================
 * Types (parity with iOS)
 * ========================= */
type GroupedReservation = {
    id: string;                 // RTDB key "{realtimeKey}-{petId}" (pickup clone adds "-pickup")
    realtimeKey: string;        // Firestore document ID shared by all pets in the booking
    type: 'Daycare' | 'Boarding';
    groupDateKey: string;       // daycare: date, boarding: check-in or check-out (for pickup clone)

    // Daycare
    daycareDate?: string | null;
    arrivalWindow?: string | null;

    // Boarding
    boardingCheckInDate?: string | null;
    boardingCheckOutDate?: string | null;
    boardingCheckInWindow?: string | null;
    boardingCheckOutWindow?: string | null;
    nights?: number | null;

    // Presentation
    ownerName: string;
    dogNames: string[];         // array but usually 1 name per row
    status: string;

    // Per-dog metadata keyed by lowercased dog name
    groomingAddOns: Record<string, string[]>;
    medications: Record<string, string>;
    medicationDetails: Record<string, string>;
    spayedNeutered: Record<string, string>;

    // Per-pet status (here a single pet, but keep map for parity)
    petStatuses: Record<string, string>;

    // Flags
    isPickup: boolean;
    isAssessment: boolean;
};

/** =========================
 * Helpers
 * ========================= */
const sanitizeFirebaseKey = (input: string) =>
    input.trim().split(/[.\#$\[\]\/:]/g).join('-');

const isValidFirebaseKey = (key: string) =>
    key.length > 0 && !/[.\#$\[\]\/]/.test(key);

const formatISODateLong = (iso: string) => {
    const d = new Date(`${iso}T00:00:00`);
    if (Number.isNaN(d.getTime())) return iso;
    return new Intl.DateTimeFormat(undefined, { dateStyle: 'long' }).format(d);
};

const nowISO = () => new Date().toISOString();

/** =========================
 * Page
 * ========================= */
export default function IndividualEmployeeUpcomingReservationsPage() {
    const router = useRouter();
    const t = useTranslations('individualEmployeeUpcomingReservations');

    const [businessId, setBusinessId] = useState<string>('');
    const [groups, setGroups] = useState<GroupedReservation[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [errorMsg, setErrorMsg] = useState<string | null>(null);

    // UI dialog state
    const [selected, setSelected] = useState<GroupedReservation | null>(null);
    const [showActionDialog, setShowActionDialog] = useState(false);  // drop-off
    const [showPickupDialog, setShowPickupDialog] = useState(false);  // pickup
    const [confirmCheckIn, setConfirmCheckIn] = useState(false);
    const [confirmNoShow, setConfirmNoShow] = useState(false);
    const [confirmCheckOut, setConfirmCheckOut] = useState(false);

    // expanded sections by date
    const [expandedDates, setExpandedDates] = useState<Set<string>>(new Set());

    // RTDB listener refs
    const rRef = useRef<ReturnType<typeof rtdbRef> | null>(null);
    const rCb = useRef<((snap: DataSnapshot) => void) | null>(null);

    /** Group by canonical key (daycare: date, boarding: check-in or pick-up) */
    const groupedByDate = useMemo(() => {
        const map: Record<string, GroupedReservation[]> = {};
        for (const g of groups) {
            if (!map[g.groupDateKey]) map[g.groupDateKey] = [];
            map[g.groupDateKey].push(g);
        }
        // sort within each date by time window (CI or CO) / arrival window
        Object.values(map).forEach((list) => {
            list.sort((a, b) => {
                if (a.groupDateKey !== b.groupDateKey) {
                    return a.groupDateKey < b.groupDateKey ? -1 : 1;
                }
                const wa =
                    a.type === 'Boarding'
                        ? (a.isPickup ? (a.boardingCheckOutWindow || '') : (a.boardingCheckInWindow || ''))
                        : (a.arrivalWindow || '');
                const wb =
                    b.type === 'Boarding'
                        ? (b.isPickup ? (b.boardingCheckOutWindow || '') : (b.boardingCheckInWindow || ''))
                        : (b.arrivalWindow || '');
                return wa.localeCompare(wb);
            });
        });
        return map;
    }, [groups]);

    /** Auth + employee invite → businessId */
    useEffect(() => {
        const unsub = onAuthStateChanged(auth, async (user) => {
            if (!user) {
                // Keep consistent with your non-locale dashboard
                router.push('/en/loginsignup');
                return;
            }
            setIsLoading(true);
            setErrorMsg(null);
            try {
                const qref = query(
                    collection(db, 'employeeInvites'),
                    where('userId', '==', user.uid),
                    where('status', '==', 'accepted')
                );
                const snap = await getDocs(qref);
                const first = snap.docs[0];
                if (!first) {
                    setErrorMsg(t('no_accepted_invite_error'));
                    setIsLoading(false);
                    return;
                }
                const rawBizId = (first.data().businessId as string) || '';
                const sanitized = sanitizeFirebaseKey(rawBizId);
                if (!isValidFirebaseKey(sanitized)) {
                    setErrorMsg(t('error_invalid_business_id'));
                    setIsLoading(false);
                    return;
                }
                setBusinessId(sanitized);
            } catch (e) {
                console.error('❌ invite lookup failed:', e);
                setErrorMsg(t('failed_fetch_invite_error'));
                setIsLoading(false);
            }
        });
        return () => unsub();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [router]);

    /** Start/stop RTDB listener when businessId is ready */
    useEffect(() => {
        if (!businessId) return;

        // cleanup previous listener
        if (rRef.current && rCb.current) {
            rtdbOff(rRef.current, 'value', rCb.current);
            rRef.current = null;
            rCb.current = null;
        }

        const ref = rtdbRef(rtdb, `upcomingReservations/${businessId}`);
        const cb = (snap: DataSnapshot) => applySnapshot(snap);
        onValue(ref, cb);
        rRef.current = ref;
        rCb.current = cb;

        return () => {
            if (rRef.current && rCb.current) {
                rtdbOff(rRef.current, 'value', rCb.current);
                rRef.current = null;
                rCb.current = null;
            }
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [businessId]);

    /** Snapshot → view models (with pickup clones) */
    const applySnapshot = (snapshot: DataSnapshot) => {
        try {
            const list: GroupedReservation[] = [];

            snapshot.forEach((child) => {
                const rtdbKey = child.key!;
                const v = child.val() as Record<string, unknown> | null;
                if (!v || typeof v !== 'object') return;

                const dogName = (String(v['dogName'] ?? '').trim()) || t('unknown_dog');
                const ownerName = (String(v['ownerName'] ?? '').trim()) || t('unknown_owner');
                const rawType = (String(v['type'] ?? '').trim());
                const hasBoardingDates = !!v['checkInDate'] || !!v['checkOutDate'];
                const type: 'Daycare' | 'Boarding' = (rawType || (hasBoardingDates ? 'Boarding' : 'Daycare')) as any;

                const statusRaw = (String(v['status'] ?? 'approved')).trim();
                const statusLower = statusRaw.toLowerCase();

                const realtimeKey =
                    (String(v['realtimeKey'] ?? '')) ||
                    rtdbKey.split('-').slice(0, -1).join('-');

                const petId = rtdbKey.split('-').pop();
                if (!petId) return;

                // Daycare fields
                const daycareDate = (v['date'] as string) || '';
                const arrivalWindow = (v['arrivalWindow'] as string) || '';

                // Boarding fields
                const checkInDate = (v['checkInDate'] as string) || '';
                const checkOutDate = (v['checkOutDate'] as string) || '';
                const checkInWindow = (v['checkInWindow'] as string) || '';
                const checkOutWindow = (v['checkOutWindow'] as string) || '';

                // nights normalize
                let nights: number | null = null;
                if (typeof v['nights'] === 'number') nights = Math.round(v['nights'] as number);
                else if (typeof v['nights'] === 'string') {
                    const n = parseInt(v['nights'] as string, 10);
                    nights = Number.isFinite(n) ? n : null;
                }

                // per-dog maps (keyed by lowercased dog name)
                const lower = dogName.toLowerCase();
                const groomingMap: Record<string, string[]> = {};
                const medications: Record<string, string> = {};
                const medicationDetails: Record<string, string> = {};
                const spayedNeutered: Record<string, string> = {};

                const services = (v['groomingAddOns'] as string[]) || [];
                if (services.length) groomingMap[lower] = services;

                const meds = (v['medications'] as string) || '';
                if (meds.trim().toLowerCase() === 'yes') {
                    medications[lower] = meds;
                    const mdet = (v['medicationDetails'] as string) || '';
                    if (mdet) medicationDetails[lower] = mdet;
                }
                const spay = (v['spayedNeutered'] as string) || '';
                if (spay) spayedNeutered[lower] = spay;

                const isAssessment = (v['isAssessment'] as boolean) ?? false;

                // choose date key for grouping
                const groupDateKey = type === 'Boarding' ? (checkInDate || '') : (daycareDate || '');
                if (!groupDateKey) return;

                const base: Omit<GroupedReservation, 'id' | 'isPickup'> = {
                    realtimeKey,
                    type,
                    groupDateKey,
                    daycareDate: daycareDate || null,
                    arrivalWindow: arrivalWindow || null,
                    boardingCheckInDate: checkInDate || null,
                    boardingCheckOutDate: checkOutDate || null,
                    boardingCheckInWindow: checkInWindow || null,
                    boardingCheckOutWindow: checkOutWindow || null,
                    nights,
                    ownerName,
                    dogNames: [dogName],
                    status: statusRaw,
                    groomingAddOns: groomingMap,
                    medications,
                    medicationDetails,
                    spayedNeutered,
                    petStatuses: { [petId]: statusRaw },
                    isAssessment,
                };

                // 1) Drop-off row — hide when finalized (boarding: checkedIn/checkedOut/noShow)
                const hideDrop =
                    type === 'Boarding' &&
                    (statusLower === 'checkedin' || statusLower === 'checkedout' || statusLower === 'noshow');

                if (!hideDrop) {
                    list.push({
                        id: rtdbKey,
                        isPickup: false,
                        ...base,
                    });
                }

                // 2) Pickup clone (grouped by checkout date) — suppress if noshow or already checkedout
                if (
                    type === 'Boarding' &&
                    checkOutDate &&
                    statusLower !== 'noshow' &&
                    statusLower !== 'checkedout'
                ) {
                    list.push({
                        id: `${rtdbKey}-pickup`,
                        isPickup: true,
                        ...base,
                        groupDateKey: checkOutDate,
                    });
                }
            });

            // final sort (date, then window)
            list.sort((a, b) => {
                if (a.groupDateKey !== b.groupDateKey) return a.groupDateKey < b.groupDateKey ? -1 : 1;
                const wa =
                    a.type === 'Boarding'
                        ? (a.isPickup ? (a.boardingCheckOutWindow || '') : (a.boardingCheckInWindow || ''))
                        : (a.arrivalWindow || '');
                const wb =
                    b.type === 'Boarding'
                        ? (b.isPickup ? (b.boardingCheckOutWindow || '') : (b.boardingCheckInWindow || ''))
                        : (b.arrivalWindow || '');
                return wa.localeCompare(wb);
            });

            setGroups(list);
            setIsLoading(false);
            setErrorMsg(null);
            // expand the first date by default
            if (list.length && !expandedDates.size) {
                setExpandedDates(new Set([list[0].groupDateKey]));
            }
        } catch (e) {
            console.error('❌ applySnapshot failed:', e);
            setErrorMsg(t('error_parse_snapshot'));
            setIsLoading(false);
        }
    };

      /** ======= Actions (optimistic) ======= */
  const checkIn = useCallback(async (g: GroupedReservation) => {
    if (!businessId || !isValidFirebaseKey(businessId) || !isValidFirebaseKey(g.id)) return;

    // Correct day key for check-ins
    const dateKey = g.type === 'Boarding'
      ? (g.boardingCheckInDate || g.groupDateKey)
      : (g.daycareDate || g.groupDateKey);

    const now = nowISO();

    // Write one check-in per pet (here 1 pet)
    for (const petId of Object.keys(g.petStatuses)) {
      if (!isValidFirebaseKey(petId)) continue;

      const checkInPath = rtdbRef(rtdb, `checkIns/${businessId}/${dateKey}/${petId}`);
      const lower = (g.dogNames[0] || '').toLowerCase();
      const payload: Record<string, unknown> = {
        name: g.dogNames[0] || t('default_dog_name'),
        owner: g.ownerName,
        type: g.type,
        checkInTime: now,
        isAssessment: !!g.isAssessment,
      };
      if (g.medications[lower]) payload.medications = g.medications[lower];
      if (g.medicationDetails[lower]) payload.medicationDetails = g.medicationDetails[lower];
      if (g.spayedNeutered[lower]) payload.spayedNeutered = g.spayedNeutered[lower];
      if (g.groomingAddOns[lower]?.length) payload.groomingAddOns = g.groomingAddOns[lower];
      await rtdbSet(checkInPath, payload);
    }

    // Update upcomingReservations node(s)
    for (const petId of Object.keys(g.petStatuses)) {
      const upKey = `${g.realtimeKey}-${petId}`;
      const upRef = rtdbRef(rtdb, `upcomingReservations/${businessId}/${upKey}`);
      if (g.type === 'Daycare') {
        await rtdbRemove(upRef);
      } else {
        await rtdbUpdate(upRef, { status: 'checkedIn', checkedInAt: now });
      }
    }

    // Optimistic UI — remove drop-off rows immediately
    setGroups((prev) =>
      prev.filter((row) => {
        const baseKey = `${g.realtimeKey}-${Object.keys(g.petStatuses)[0]}`;
        return row.id !== baseKey; // keep pickup clones
      })
    );
    setSelected(null);

    // Firestore petStatuses
    const col = g.type === 'Boarding' ? 'boardingReservations' : 'daycareReservations';
    const fsRef = doc(db, col, g.realtimeKey);
    const snap = await getDoc(fsRef);
    const data = snap.data() as any;
    if (data?.petStatuses) {
      for (const petId of Object.keys(g.petStatuses)) data.petStatuses[petId] = 'checkedIn';
      const allDone = Object.values<string>(data.petStatuses).every((v) =>
        ['checkedIn', 'noShow'].includes(v)
      );
      if (g.type === 'Daycare' && allDone) await deleteDoc(fsRef);
      else await updateDoc(fsRef, { petStatuses: data.petStatuses });
    }
  }, [businessId, db, rtdb, t]);

  const markNoShow = useCallback(async (g: GroupedReservation) => {
    if (!businessId || !isValidFirebaseKey(businessId) || !isValidFirebaseKey(g.id)) return;

    // 1) Remove upcomingReservations nodes
    await Promise.all(
      Object.keys(g.petStatuses).map((petId) =>
        rtdbRemove(rtdbRef(rtdb, `upcomingReservations/${businessId}/${g.realtimeKey}-${petId}`))
      )
    );

    // Optimistic UI — remove both drop-off and pickup
    setGroups((prev) =>
      prev.filter((row) => {
        const baseKey = `${g.realtimeKey}-${Object.keys(g.petStatuses)[0]}`;
        return row.id !== baseKey && row.id !== `${baseKey}-pickup`;
      })
    );
    setSelected(null);

    // 2) Firestore petStatuses
    const col = g.type === 'Boarding' ? 'boardingReservations' : 'daycareReservations';
    const fsRef = doc(db, col, g.realtimeKey);
    const snap = await getDoc(fsRef);
    const data = snap.data() as any;
    if (data?.petStatuses) {
      for (const petId of Object.keys(g.petStatuses)) data.petStatuses[petId] = 'noShow';
      const allDone = Object.values<string>(data.petStatuses).every((v) =>
        ['checkedIn', 'noShow'].includes(v)
      );
      if (allDone) await deleteDoc(fsRef);
      else await updateDoc(fsRef, { petStatuses: data.petStatuses });
    }
  }, [businessId, db, rtdb]);

  const checkOut = useCallback(async (g: GroupedReservation) => {
    if (g.type !== 'Boarding') return;
    if (!businessId || !isValidFirebaseKey(businessId)) return;

    const now = nowISO();
    const dateKey = g.boardingCheckOutDate || g.groupDateKey;

    // 1) For each pet: write /checkOuts and remove upcomingReservations
    await Promise.all(
      Object.keys(g.petStatuses).map(async (petId) => {
        if (!isValidFirebaseKey(petId)) return;

        const lower = (g.dogNames[0] || '').toLowerCase();
        const outData: Record<string, unknown> = {
          name: g.dogNames[0] || t('default_dog_name'),
          owner: g.ownerName,
          type: g.type,
          checkOutTime: now,
          isAssessment: !!g.isAssessment,
        };
        if (g.medications[lower]) outData.medications = g.medications[lower];
        if (g.medicationDetails[lower]) outData.medicationDetails = g.medicationDetails[lower];
        if (g.spayedNeutered[lower]) outData.spayedNeutered = g.spayedNeutered[lower];
        if (g.groomingAddOns[lower]?.length) outData.groomingAddOns = g.groomingAddOns[lower];

        await rtdbSet(rtdbRef(rtdb, `checkOuts/${businessId}/${dateKey}/${petId}`), outData);
        await rtdbRemove(rtdbRef(rtdb, `upcomingReservations/${businessId}/${g.realtimeKey}-${petId}`));
      })
    );

    // Optimistic UI — remove both base + pickup
    setGroups((prev) =>
      prev.filter((row) => {
        const baseKey = `${g.realtimeKey}-${Object.keys(g.petStatuses)[0]}`;
        return row.id !== baseKey && row.id !== `${baseKey}-pickup`;
      })
    );
    setSelected(null);

    // 2) Firestore petStatuses → checkedOut
    const fsRef = doc(db, 'boardingReservations', g.realtimeKey);
    const snap = await getDoc(fsRef);
    const data = snap.data() as any;
    if (data?.petStatuses) {
      for (const petId of Object.keys(g.petStatuses)) data.petStatuses[petId] = 'checkedOut';
      const allDone = Object.values<string>(data.petStatuses).every((v) => {
        const s = String(v).trim().toLowerCase();
        return s === 'checkedout' || s === 'noshow';
      });
      if (allDone) await deleteDoc(fsRef);
      else await updateDoc(fsRef, { petStatuses: data.petStatuses });
    }
  }, [businessId, db, rtdb, t]);

  /** =========================
   * UI
   * ========================= */
  return (
    <div className="min-h-screen bg-[color:var(--color-background)] text-[color:var(--color-foreground)]">
      <main className="max-w-3xl mx-auto px-4 py-6">
        <h1 className="text-3xl font-bold text-center text-[color:var(--color-accent)] mb-4">
          {t('upcoming_reservations_title')}
        </h1>

        {isLoading && (
          <p className="text-center text-sm text-gray-600">{t('loading')}</p>
        )}
        {!isLoading && errorMsg && (
          <p className="text-center text-sm text-red-600">❌ {errorMsg}</p>
        )}
        {!isLoading && !errorMsg && groups.length === 0 && (
          <p className="text-center text-sm text-gray-600">{t('no_upcoming_reservations')}</p>
        )}

        {!isLoading && !errorMsg && groups.length > 0 && (
          <div className="space-y-4">
            {Object.keys(groupedByDate).sort().map((dateKey) => (
              <section key={dateKey} className="rounded-xl bg-white/70 shadow-sm">
                <button
                  className="w-full flex items-center justify-between px-4 py-3"
                  onClick={() =>
                    setExpandedDates((prev) => {
                      const next = new Set(prev);
                      if (next.has(dateKey)) next.delete(dateKey);
                      else next.add(dateKey);
                      return next;
                    })
                  }
                >
                  <span className="text-base font-semibold text-[color:var(--color-foreground)]">
                    {formatISODateLong(dateKey)}
                  </span>
                  <span className="text-gray-500">
                    {expandedDates.has(dateKey) ? '▴' : '▾'}
                  </span>
                </button>

                {expandedDates.has(dateKey) && (
                  <div className="px-3 pb-3">
                    {(groupedByDate[dateKey] || []).map((g) => {
                      const lower = (g.dogNames[0] || '').toLowerCase();
                      const hasMeds = (g.medications[lower] || '').trim().toLowerCase() === 'yes';
                      const intact = (g.spayedNeutered[lower] || '').trim().toLowerCase() === 'no';
                      const hasAddOns = (g.groomingAddOns[lower] || []).length > 0;
                      const medDetail = (g.medicationDetails[lower] || '').trim();

                      return (
                        <div
                          key={g.id}
                          className="rounded-xl border border-[color:var(--color-accent)] bg-white p-3 mb-3 cursor-pointer"
                          onClick={() => {
                            setSelected(g);
                            if (g.isPickup) setShowPickupDialog(true);
                            else setShowActionDialog(true);
                          }}
                        >
                          <div className="flex items-center gap-2">
                            <span className="font-semibold">🐶 {g.dogNames[0]}</span>
                            {hasMeds && <span title={t('medications_label')}>💊</span>}
                            {intact && (
                              <span className="text-red-600 text-[11px] font-bold">
                                {t('intact_label')}
                              </span>
                            )}
                            {g.isAssessment && (
                              <span className="px-2 py-0.5 rounded bg-orange-100 text-orange-700 text-[10px] font-bold">
                                {t('assessment_badge_short')}
                              </span>
                            )}
                          </div>

                          <div className="text-[13px] text-gray-700 mt-1">
                            <div>
                              <strong>{t('owner_label')}:</strong> {g.ownerName}
                            </div>
                            <div>
                              <strong>{t('type_label')}:</strong> {g.type}
                            </div>

                            {g.type === 'Boarding' ? (
                              <>
                                <div>
                                  <strong>{t('check_in_label')}:</strong>{' '}
                                  {g.boardingCheckInDate ? formatISODateLong(g.boardingCheckInDate) : '—'}
                                  {g.boardingCheckInWindow?.trim()
                                    ? ` (${g.boardingCheckInWindow})`
                                    : ''}
                                </div>
                                {g.boardingCheckOutDate && (
                                  <div>
                                    <strong>{t('check_out_label')}:</strong>{' '}
                                    {formatISODateLong(g.boardingCheckOutDate)}
                                    {g.boardingCheckOutWindow?.trim()
                                      ? ` (${g.boardingCheckOutWindow})`
                                      : ''}
                                  </div>
                                )}
                                {typeof g.nights === 'number' && g.nights > 0 && (
                                  <div>
                                    <strong>{t('nights_label')}:</strong> {g.nights}
                                  </div>
                                )}
                              </>
                            ) : (
                              <div>
                                <strong>{t('arrival_label')}:</strong>{' '}
                                {g.arrivalWindow?.trim() ? g.arrivalWindow : '—'}
                              </div>
                            )}

                            {hasAddOns && (
                              <div className="text-gray-600 text-[12px] mt-1">
                                🧼 <strong>{t('grooming_label')}:</strong>{' '}
                                {(g.groomingAddOns[lower] || []).join(', ')}
                              </div>
                            )}

                            {hasMeds && medDetail && (
                              <div className="text-gray-600 text-[12px] mt-1">
                                <strong>{t('medications_label')}:</strong> {medDetail}
                              </div>
                            )}

                            <div className="text-gray-500 text-[12px] mt-1">
                              <strong>{t('status_label')}:</strong>{' '}
                              {g.status.charAt(0).toUpperCase() + g.status.slice(1)}
                            </div>
                          </div>
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

      {/* Drop-off actions */}
      {showActionDialog && selected && !selected.isPickup && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center">
          <div className="bg-white rounded-xl shadow-md w-full max-w-sm p-5 space-y-3">
            <h2 className="text-lg font-semibold">{t('reservation_options_title')}</h2>
            <div className="flex flex-col gap-2">
              <button
                className="px-4 py-2 rounded bg-green-700 hover:bg-green-600 text-white text-sm"
                onClick={() => { setShowActionDialog(false); setConfirmCheckIn(true); }}
              >
                {t('check_in_button')}
              </button>
              <button
                className="px-4 py-2 rounded bg-red-600 hover:bg-red-500 text-white text-sm"
                onClick={() => { setShowActionDialog(false); setConfirmNoShow(true); }}
              >
                {t('mark_no_show_button')}
              </button>
              <button
                className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300 text-sm"
                onClick={() => { setShowActionDialog(false); setSelected(null); }}
              >
                {t('cancel_button')}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Pickup actions */}
      {showPickupDialog && selected?.isPickup && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center">
          <div className="bg-white rounded-xl shadow-md w-full max-w-sm p-5 space-y-3">
            <h2 className="text-lg font-semibold">{t('pickup_options_title')}</h2>
            <div className="flex flex-col gap-2">
              <button
                className="px-4 py-2 rounded bg-green-700 hover:bg-green-600 text-white text-sm"
                onClick={() => { setShowPickupDialog(false); setConfirmCheckOut(true); }}
              >
                {t('check_out_button')}
              </button>
              <button
                className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300 text-sm"
                onClick={() => { setShowPickupDialog(false); setSelected(null); }}
              >
                {t('cancel_button')}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Confirmations */}
      {confirmCheckIn && selected && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center">
          <div className="bg-white rounded-xl shadow-md w-full max-w-sm p-5 space-y-4">
            <h3 className="text-lg font-semibold">{t('check_in_alert_title')}</h3>
            <div className="flex justify-end gap-2">
              <button
                className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300 text-sm"
                onClick={() => setConfirmCheckIn(false)}
              >
                {t('no_button')}
              </button>
              <button
                className="px-4 py-2 rounded bg-green-700 hover:bg-green-600 text-white text-sm"
                onClick={async () => { setConfirmCheckIn(false); await checkIn(selected); }}
              >
                {t('yes_button')}
              </button>
            </div>
          </div>
        </div>
      )}

      {confirmNoShow && selected && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center">
          <div className="bg-white rounded-xl shadow-md w-full max-w-sm p-5 space-y-4">
            <h3 className="text-lg font-semibold">{t('no_show_alert_title')}</h3>
            <div className="flex justify-end gap-2">
              <button
                className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300 text-sm"
                onClick={() => setConfirmNoShow(false)}
              >
                {t('no_button')}
              </button>
              <button
                className="px-4 py-2 rounded bg-red-600 hover:bg-red-500 text-white text-sm"
                onClick={async () => { setConfirmNoShow(false); await markNoShow(selected); }}
              >
                {t('yes_button')}
              </button>
            </div>
          </div>
        </div>
      )}

      {confirmCheckOut && selected && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center">
          <div className="bg-white rounded-xl shadow-md w-full max-w-sm p-5 space-y-4">
            <h3 className="text-lg font-semibold">{t('check_out_alert_title')}</h3>
            <div className="flex justify-end gap-2">
              <button
                className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300 text-sm"
                onClick={() => setConfirmCheckOut(false)}
              >
                {t('no_button')}
              </button>
              <button
                className="px-4 py-2 rounded bg-green-700 hover:bg-green-600 text-white text-sm"
                onClick={async () => { setConfirmCheckOut(false); await checkOut(selected); }}
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
