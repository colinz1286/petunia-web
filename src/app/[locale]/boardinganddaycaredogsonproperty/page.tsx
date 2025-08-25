'use client';

import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';

import { initializeApp, getApps } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
} from 'firebase/firestore';
import {
  getDatabase,
  ref as rtdbRef,
  onValue,
  off as rtdbOff,
  get as rtdbGet,
  remove as rtdbRemove,
  DataSnapshot,
} from 'firebase/database';

/** =========================
 *  Firebase init (guarded)
 *  ========================= */
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
 *  Types
 *  ========================= */
type Dog = {
  id: string;
  name: string;
  owner: string;
  type: 'Daycare' | 'Boarding' | string;
  checkInTime: string; // ISO
  groomingAddOns: string[];
  allergies?: string | null;
  pickUpDate?: string | null;
  medications?: string | null;
  medicationDetails?: string | null;
  spayedNeutered?: string | null;
  isAssessment: boolean;
};

type FilterType = 'Daycare' | 'Boarding' | 'Grooming';

/** =========================
 *  Helpers
 *  ========================= */
const sanitizeFirebaseKey = (input: string) =>
  input.trim().split(/[.\#$\[\]\/:]/g).join('-');

const isValidFirebaseKey = (key: string) =>
  key.length > 0 && !/[.\#$\[\]\/]/.test(key);

const hasMedications = (d: Dog) =>
  (d.medications || '').trim().toLowerCase() === 'yes';

const isIntact = (d: Dog) =>
  (d.spayedNeutered || '').trim().toLowerCase() === 'no';

const hasAllergies = (d: Dog) => {
  const a = (d.allergies || '').trim();
  return a.length > 0 && a.toLowerCase() !== 'none';
};

const hasGrooming = (d: Dog) => (d.groomingAddOns || []).length > 0;

const formatCheckIn = (iso: string, locale: string) => {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return new Intl.DateTimeFormat(locale, { dateStyle: 'short', timeStyle: 'short' }).format(d);
};

/** =========================
 *  Page
 *  ========================= */
export default function BoardingAndDaycareDogsOnPropertyPage() {
  const t = useTranslations('boardingAndDaycareDogsOnProperty');
  const locale = useLocale();
  const router = useRouter();

  const [dogs, setDogs] = useState<Dog[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const [filter, setFilter] = useState<FilterType>('Daycare');
  const [expanded, setExpanded] = useState<Set<string>>(new Set());

  const [businessId, setBusinessId] = useState<string>('');

  // RTDB listener refs (so we can clean up precisely)
  const rRef = useRef<ReturnType<typeof rtdbRef> | null>(null);
  const rCb = useRef<((snap: DataSnapshot) => void) | null>(null);

  /** Auth + businessId resolution */
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (user) => {
      if (!user) {
        router.push(`/${locale}/loginsignup`);
        return;
      }
      try {
        setIsLoading(true);
        const qref = query(collection(db, 'businesses'), where('ownerId', '==', user.uid));
        const snap = await getDocs(qref);
        const first = snap.docs[0];
        if (!first) {
          setErrorMsg(t('error_business_not_found'));
          setIsLoading(false);
          return;
        }
        const rawId = first.id;
        const sanitized = sanitizeFirebaseKey(rawId);
        if (!isValidFirebaseKey(sanitized)) {
          setErrorMsg(t('error_invalid_business_id'));
          setIsLoading(false);
          return;
        }
        setBusinessId(sanitized);
      } catch (e) {
        console.error('❌ Business lookup failed:', e);
        setErrorMsg(t('error_business_not_found'));
        setIsLoading(false);
      }
    });
    return () => unsub();
  }, [router, locale, t]);

  /** Start/stop listener when businessId is ready */
  useEffect(() => {
    if (!businessId) return;

    // Clean up any existing listener
    if (rRef.current && rCb.current) {
      rtdbOff(rRef.current, 'value', rCb.current);
      rRef.current = null;
      rCb.current = null;
    }

    // iOS does a one-time read; we’ll do a live listener (better UX). You can swap to rtdbGet for one-shot if desired.
    const ref = rtdbRef(rtdb, `checkIns/${businessId}`);
    const cb = (snap: DataSnapshot) => {
      try {
        const list: Dog[] = [];
        snap.forEach((dateNode) => {
          dateNode.forEach((dogNode) => {
            const v = dogNode.val() as Record<string, unknown> | null;
            if (!v) return;
            const name = (v.name as string) || t('unknown_dog');
            const owner = (v.owner as string) || t('unknown_owner');
            const type = (v.type as string) || 'Daycare';
            const checkInTime = (v.checkInTime as string) || '';
            const dog: Dog = {
              id: dogNode.key!,
              name,
              owner,
              type,
              checkInTime,
              groomingAddOns: (v.groomingAddOns as string[]) || [],
              allergies: (v.allergies as string) || null,
              pickUpDate: (v.pickUpDate as string) || null,
              medications: (v.medications as string) || null,
              medicationDetails: (v.medicationDetails as string) || null,
              spayedNeutered: (v.spayedNeutered as string) || null,
              isAssessment: (v.isAssessment as boolean) ?? false,
            };
            list.push(dog);
          });
        });
        setDogs(list);
        setIsLoading(false);
        setErrorMsg(null);
      } catch (e) {
        console.error('❌ parse checkIns failed:', e);
        setErrorMsg(t('error_parse_data'));
        setIsLoading(false);
      }
    };

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
  }, [businessId, t]);

  /** Filtering */
  const filteredDogs = useMemo(() => {
    if (filter === 'Daycare') return dogs.filter((d) => d.type === 'Daycare');
    if (filter === 'Boarding') return dogs.filter((d) => d.type === 'Boarding');
    // Grooming = any dog with add-ons
    return dogs.filter((d) => hasGrooming(d));
  }, [dogs, filter]);

  /** Actions */
  const toggleExpand = (id: string) => {
    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const checkOutDog = useCallback(async (dog: Dog) => {
    if (!businessId || !isValidFirebaseKey(businessId)) return;
    try {
      // Find the date bucket that contains this dog.id, then remove it
      const root = rtdbRef(rtdb, `checkIns/${businessId}`);
      const snap = await rtdbGet(root);
      if (!snap.exists()) return;

      const removals: Array<Promise<unknown>> = [];
      snap.forEach((dateNode) => {
        const dateKey = dateNode.key!;
        if (!isValidFirebaseKey(dateKey)) return;
        if (dateNode.hasChild(dog.id)) {
          const rm = rtdbRemove(rtdbRef(rtdb, `checkIns/${businessId}/${dateKey}/${dog.id}`));
          removals.push(rm);
        }
      });
      await Promise.all(removals);
      // Optimistic UI: local prune
      setDogs((prev) => prev.filter((d) => d.id !== dog.id));
      setExpanded((prev) => {
        const next = new Set(prev);
        next.delete(dog.id);
        return next;
      });
    } catch (e) {
      console.error('❌ checkOutDog failed:', e);
    }
  }, [businessId]);

  /** UI */
  return (
    <div className="min-h-screen bg-[color:var(--color-background)] text-[color:var(--color-foreground)]">
      <main className="max-w-3xl mx-auto px-4 py-6">
        <h1 className="text-3xl font-bold text-center text-[color:var(--color-accent)] mb-4">
          {t('dogs_on_property')}
        </h1>

        {/* Filter segmented control */}
        <div className="flex items-center justify-center gap-2 mb-4">
          {(['Daycare', 'Boarding', 'Grooming'] as FilterType[]).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-3 py-1.5 rounded-full text-sm ${
                filter === f ? 'bg-[color:var(--color-accent)] text-white' : 'bg-gray-200 text-gray-800'
              }`}
            >
              {t(f.toLowerCase())}
            </button>
          ))}
        </div>

        {/* States */}
        {isLoading && (
          <p className="text-center text-sm text-gray-600">{t('loading')}</p>
        )}

        {!isLoading && errorMsg && (
          <p className="text-center text-sm text-red-600">❌ {errorMsg}</p>
        )}

        {!isLoading && !errorMsg && filteredDogs.length === 0 && (
          <p className="text-center text-sm text-gray-600">
            {filter === 'Daycare'
              ? t('no_daycare_dogs')
              : filter === 'Boarding'
              ? t('no_boarding_dogs')
              : t('no_grooming_dogs')}
          </p>
        )}

        {!isLoading && !errorMsg && filteredDogs.length > 0 && (
          <div className="space-y-3">
            {filteredDogs.map((dog) => {
              const expandedRow = expanded.has(dog.id);
              return (
                <div key={dog.id} className="rounded-xl border border-[color:var(--color-accent)] bg-white">
                  {/* Header row (tap to expand) */}
                  <button
                    className="w-full text-left px-4 py-3 rounded-t-xl"
                    onClick={() => toggleExpand(dog.id)}
                  >
                    <div className="flex items-center gap-2">
                      <span className="font-semibold">🐶 {dog.name || t('unknown_dog')}</span>
                      {hasMedications(dog) && <span title={t('medications_label')}>💊</span>}
                      {isIntact(dog) && (
                        <span className="text-red-600 text-[11px] font-bold">
                          {t('intact_label')}
                        </span>
                      )}
                      {hasAllergies(dog) && <span title={t('allergies_label')}>⚠️</span>}
                      {hasGrooming(dog) && <span title={t('grooming_services_label')}>✂️</span>}

                      {dog.isAssessment && (
                        <span className="px-2 py-0.5 rounded bg-orange-100 text-orange-700 text-[10px] font-bold">
                          {t('assessment_badge_short')}
                        </span>
                      )}
                    </div>
                  </button>

                  {/* Details */}
                  {expandedRow && (
                    <div className="px-4 pb-3">
                      <div className="text-sm space-y-1">
                        <div>
                          <strong>{t('owner_label')}:</strong> {dog.owner || t('unknown_owner')}
                        </div>
                        <div>
                          <strong>{t('type_label')}:</strong> {dog.type}
                        </div>
                        <div className="text-gray-600 text-[13px]">
                          <strong>{t('checked_in_label')}:</strong> {formatCheckIn(dog.checkInTime, locale)}
                        </div>

                        {dog.isAssessment && (
                          <div className="text-[12px] font-semibold text-orange-700">
                            {t('assessment_label')}
                          </div>
                        )}

                        {hasAllergies(dog) && (
                          <div>
                            <strong>{t('allergies_label')}:</strong> {dog.allergies}
                          </div>
                        )}

                        {hasMedications(dog) && (
                          <div className="text-gray-700">
                            <strong>{t('medications_label')}:</strong>{' '}
                            {(dog.medicationDetails || '').trim()
                              ? dog.medicationDetails
                              : t('medications_yes')}
                          </div>
                        )}

                        {dog.pickUpDate && (
                          <div>
                            <strong>{t('pickup_date_label')}:</strong> {dog.pickUpDate}
                          </div>
                        )}

                        {hasGrooming(dog) && (
                          <div className="text-gray-600">
                            <strong>{t('grooming_services_label')}:</strong>{' '}
                            {dog.groomingAddOns.join(', ')}
                          </div>
                        )}
                      </div>

                      <div className="mt-3 flex gap-2">
                        {/* View Assessment (only if flagged). You can point this to your assessment detail page when ready. */}
                        {dog.isAssessment && (
                          <a
                            href={`/${locale}/boardinganddaycaredogassessment?dogId=${encodeURIComponent(
                              dog.id
                            )}&dogName=${encodeURIComponent(dog.name)}`}
                            className="px-3 py-2 rounded border border-blue-600 text-blue-700 text-sm hover:bg-blue-50"
                          >
                            {t('view_assessment_button')}
                          </a>
                        )}

                        {/* Check Out */}
                        <button
                          onClick={() => void checkOutDog(dog)}
                          className="px-3 py-2 rounded bg-green-700 text-white text-sm hover:bg-green-600"
                          title={t('check_out_button')}
                        >
                          {t('check_out_button')}
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </main>
    </div>
  );
}
