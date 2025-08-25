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

export default function BoardingAndDaycareUpcomingReservationsPage() {
    const t = useTranslations('boardingAndDaycareUpcomingReservations');
    const locale = useLocale();
    const router = useRouter();

    // Core state
    const [businessId, setBusinessId] = useState<string>('');
    const [reservations, setReservations] = useState<Reservation[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [errorMsg, setErrorMsg] = useState<string | null>(null);

    // UI selections
    const [expandedDates, setExpandedDates] = useState<Set<string>>(new Set());
    const [selected, setSelected] = useState<Reservation | null>(null);

    // Action dialogs
    const [showActionDialog, setShowActionDialog] = useState(false); // Drop-off actions: Check-In / No-Show
    const [showPickupDialog, setShowPickupDialog] = useState(false); // Pickup actions: Check-Out
    const [confirmCheckIn, setConfirmCheckIn] = useState(false);
    const [confirmNoShow, setConfirmNoShow] = useState(false);
    const [confirmCheckOut, setConfirmCheckOut] = useState(false);

    // RTDB listener handle
    const rtdbSubRef = useRef<ReturnType<typeof rtdbRef> | null>(null);
    const rtdbCbRef = useRef<((snap: DataSnapshot) => void) | null>(null);

    // Grouped by date key
    const grouped = useMemo(() => {
        const map: Record<string, Reservation[]> = {};
        for (const r of reservations) {
            if (!map[r.groupDateKey]) map[r.groupDateKey] = [];
            map[r.groupDateKey].push(r);
        }
        // sort inside each group by relevant window
        Object.values(map).forEach((list) => {
            list.sort((a, b) => {
                const winA =
                    a.type === 'Boarding'
                        ? (a.isPickup ? (a.boardingCheckOutWindow || '') : (a.boardingCheckInWindow || ''))
                        : (a.arrivalWindow || '');
                const winB =
                    b.type === 'Boarding'
                        ? (b.isPickup ? (b.boardingCheckOutWindow || '') : (b.boardingCheckInWindow || ''))
                        : (b.arrivalWindow || '');
                if (a.groupDateKey !== b.groupDateKey) return a.groupDateKey < b.groupDateKey ? -1 : 1;
                return winA.localeCompare(winB);
            });
        });
        return map;
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
                const statusRaw = String(val['status'] ?? 'approved').trim();
                const statusLower = statusRaw.toLowerCase();

                const rawType = String(val['type'] ?? '').trim();
                const hasBoardingDates = !!val['checkInDate'] || !!val['checkOutDate'];
                const type: ServiceType =
                    rawType === 'Daycare' || rawType === 'Boarding'
                        ? rawType
                        : (hasBoardingDates ? 'Boarding' : 'Daycare');

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

                    // 1) Drop-off row (hide once finalized)
                    if (cin && !(statusLower === 'checkedin' || statusLower === 'checkedout' || statusLower === 'noshow')) {
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

                    // 2) Pickup clone (hide if noshow or already checkedout)
                    if (cout && statusLower !== 'noshow' && statusLower !== 'checkedout') {
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

            // Sort (by groupDateKey then window for each type)
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
            setSelected(null);

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
            await rtdbRemove(rtdbRef(rtdb, `upcomingReservations/${businessId}/${baseKey}`));
            // Optimistic: remove both base and its pickup clone from UI
            setReservations((prev) => prev.filter((x) => x.id !== baseKey && x.id !== `${baseKey}-pickup`));
            setSelected(null);

            const col = r.type === 'Boarding' ? 'boardingReservations' : 'daycareReservations';
            const fsRef = doc(db, col, r.realtimeKey);
            const snap = await getDoc(fsRef);
            const data = snap.data() as ReservationFS | undefined;
            if (data?.petStatuses) {
                data.petStatuses[petId] = 'noShow';
                const values = Object.values(data.petStatuses);
                const allFinalized = values.every((v) => v === 'checkedIn' || v === 'noShow');
                if (allFinalized) await deleteDoc(fsRef);
                else await updateDoc(fsRef, { petStatuses: data.petStatuses });
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
      setSelected(null);

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
   * UI
   * ========================= */
  return (
    <div className="min-h-screen bg-[color:var(--color-background)] text-[color:var(--color-foreground)]">
      <main className="max-w-3xl mx-auto px-4 py-6">
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
                <button
                  className="w-full flex items-center justify-between px-4 py-3"
                  onClick={() => {
                    setExpandedDates((prev) => {
                      const next = new Set(prev);
                      if (next.has(dateKey)) next.delete(dateKey);
                      else next.add(dateKey);
                      return next;
                    });
                  }}
                >
                  <span className="text-base font-semibold text-[color:var(--color-foreground)]">
                    {formatISOToLong(dateKey)}
                  </span>
                  <span className="text-gray-500">{expandedDates.has(dateKey) ? '▴' : '▾'}</span>
                </button>

                {expandedDates.has(dateKey) && (
                  <div className="px-3 pb-3">
                    {grouped[dateKey].map((r) => (
                      <div
                        key={r.id}
                        className="rounded-xl border border-[color:var(--color-accent)] bg-white p-3 mb-3 cursor-pointer"
                        onClick={() => {
                          setSelected(r);
                          if (r.isPickup) setShowPickupDialog(true);
                          else setShowActionDialog(true);
                        }}
                      >
                        <div className="flex items-center gap-2">
                          <div className="font-semibold">🐶 {r.dogName}</div>

                          {isIntact(r) && (
                            <span className="text-red-600 text-[11px] font-bold">
                              {t('intact_label')}
                            </span>
                          )}

                          {hasMedications(r) && <span title={t('medications_label')}>💊</span>}

                          {r.isAssessment && (
                            <span className="px-2 py-0.5 rounded bg-orange-100 text-orange-700 text-[10px] font-bold">
                              {t('assessment_badge_short')}
                            </span>
                          )}
                        </div>

                        <div className="text-[13px] text-gray-700 mt-1">
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
                            <div>
                              <strong>{t('arrival_label')}:</strong>{' '}
                              {r.arrivalWindow || '—'}
                            </div>
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

                          <div className="text-gray-500 text-[12px] mt-1">
                            <strong>{t('status_label')}:</strong>{' '}
                            {r.status.charAt(0).toUpperCase() + r.status.slice(1)}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </section>
            ))}
          </div>
        )}
      </main>

      {/* Drop-off actions dialog */}
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

      {/* Pickup actions dialog */}
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
