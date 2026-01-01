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
  doc,
  getDoc,
  setDoc,
  serverTimestamp,
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
import { set } from 'firebase/database';

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
  currentFood?: string | null;
  feedingAmount?: string | null;
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

/** -------- Fetch feeding info from Firestore -------- */
async function fetchFeedingInfo(ownerName: string, dogId: string): Promise<{ currentFood?: string; feedingAmount?: string }> {
  try {
    // Step 1 – Find userId by owner name
    const joinQ = query(collection(db, 'joinRequests'), where('userName', '==', ownerName));
    const joinSnap = await getDocs(joinQ);
    if (joinSnap.empty) return {};
    const ownerUid = joinSnap.docs[0].data().userId as string | undefined;
    if (!ownerUid) return {};

    // Step 2 – Get that pet’s record
    const petRef = doc(db, 'users', ownerUid, 'pets', dogId);
    const petSnap = await getDoc(petRef);
    if (!petSnap.exists()) return {};
    const data = petSnap.data() || {};
    return {
      currentFood: (data.currentFood as string) || '',
      feedingAmount: (data.feedingAmount as string) || '',
    };
  } catch (err) {
    console.error('⚠️ fetchFeedingInfo failed:', err);
    return {};
  }
}

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

  // RTDB needs sanitized; Firestore assessments need RAW doc id
  const [businessIdSanitized, setBusinessIdSanitized] = useState<string>('');
  const [businessIdRaw, setBusinessIdRaw] = useState<string>('');

  // RTDB listener refs (so we can clean up precisely)
  const rRef = useRef<ReturnType<typeof rtdbRef> | null>(null);
  const rCb = useRef<((snap: DataSnapshot) => void) | null>(null);

  /** -------- Assessment Modal State -------- */
  const [showAssessmentModal, setShowAssessmentModal] = useState(false);
  const [assessmentDog, setAssessmentDog] = useState<Dog | null>(null);
  const [assessmentNotes, setAssessmentNotes] = useState('');
  const [assessmentLoading, setAssessmentLoading] = useState(false);
  const [assessmentError, setAssessmentError] = useState<string | null>(null);
  const [assessmentSaveMsg, setAssessmentSaveMsg] = useState<string | null>(null);

  /** -------- Grooming Modal State -------- */
  const [showGroomingModal, setShowGroomingModal] = useState(false);
  const [groomingDog, setGroomingDog] = useState<Dog | null>(null);
  const [groomingOptions, setGroomingOptions] = useState<string[]>([]);
  const [groomingSaving, setGroomingSaving] = useState(false);
  const [groomingError, setGroomingError] = useState<string | null>(null);

  /** -------- Business Grooming Services (Dynamic From Firestore) -------- */
  const [availableGroomingServices, setAvailableGroomingServices] = useState<string[]>([]);

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
        const rawId = first.id;                          // Firestore doc id (RAW)
        const sanitized = sanitizeFirebaseKey(rawId);    // For RTDB paths
        if (!isValidFirebaseKey(sanitized)) {
          setErrorMsg(t('error_invalid_business_id'));
          setIsLoading(false);
          return;
        }
        setBusinessIdRaw(rawId);
        setBusinessIdSanitized(sanitized);

        // Load grooming services for this business (same behavior as iOS)
        const groomingRef = doc(db, 'businesses', rawId);
        const groomingSnap = await getDoc(groomingRef);
        const data = groomingSnap.data();
        const services = (data?.groomingServices as string[]) || [];

        setAvailableGroomingServices(services);

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
    if (!businessIdSanitized) return;

    // Clean up any existing listener
    if (rRef.current && rCb.current) {
      rtdbOff(rRef.current, 'value', rCb.current);
      rRef.current = null;
      rCb.current = null;
    }

    const ref = rtdbRef(rtdb, `checkIns/${businessIdSanitized}`);
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

            // 🧩 Immediately start Firestore lookup for feeding info
            fetchFeedingInfo(owner, dog.id).then((feed) => {
              if (feed.currentFood || feed.feedingAmount) {
                setDogs((prev) => {
                  const updated = prev.map((d) =>
                    d.id === dog.id ? { ...d, ...feed } : d
                  );
                  return updated;
                });
              }
            });

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
  }, [businessIdSanitized, t]);

  /** Filtering — now sorted alphabetically by dog name (A–Z) */
  const filteredDogs = useMemo(() => {
    let list: Dog[];
    if (filter === 'Daycare') list = dogs.filter((d) => d.type === 'Daycare');
    else if (filter === 'Boarding') list = dogs.filter((d) => d.type === 'Boarding');
    else list = dogs.filter((d) => hasGrooming(d));

    return [...list].sort((a, b) =>
      a.name.localeCompare(b.name, undefined, { sensitivity: 'base' })
    );
  }, [dogs, filter]);

  /** Expand/collapse */
  const toggleExpand = (id: string) => {
    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  /** Check-out */
  const checkOutDog = useCallback(async (dog: Dog) => {
    if (!businessIdSanitized || !isValidFirebaseKey(businessIdSanitized)) return;
    try {
      const root = rtdbRef(rtdb, `checkIns/${businessIdSanitized}`);
      const snap = await rtdbGet(root);
      if (!snap.exists()) return;

      const removals: Array<Promise<unknown>> = [];
      snap.forEach((dateNode) => {
        const dateKey = dateNode.key!;
        if (!isValidFirebaseKey(dateKey)) return;
        if (dateNode.hasChild(dog.id)) {
          const rm = rtdbRemove(rtdbRef(rtdb, `checkIns/${businessIdSanitized}/${dateKey}/${dog.id}`));
          removals.push(rm);
        }
      });
      await Promise.all(removals);
      // Optimistic UI
      setDogs((prev) => prev.filter((d) => d.id !== dog.id));
      setExpanded((prev) => {
        const next = new Set(prev);
        next.delete(dog.id);
        return next;
      });
    } catch (e) {
      console.error('❌ checkOutDog failed:', e);
    }
  }, [businessIdSanitized]);

  /** -------- Save Grooming Add-Ons -------- */
  const saveGrooming = useCallback(async () => {
    try {
      if (!groomingDog || !businessIdSanitized) return;

      setGroomingSaving(true);
      setGroomingError(null);

      // Step 1: Find RTDB date bucket containing this dog
      const root = rtdbRef(rtdb, `checkIns/${businessIdSanitized}`);
      const snap = await rtdbGet(root);

      if (!snap.exists()) {
        setGroomingError('Could not locate dog in RTDB.');
        setGroomingSaving(false);
        return;
      }

      let targetDate: string | null = null;

      snap.forEach((dateNode) => {
        if (dateNode.hasChild(groomingDog.id)) {
          targetDate = dateNode.key!;
        }
      });

      if (!targetDate) {
        setGroomingError('Could not find date bucket for this dog.');
        setGroomingSaving(false);
        return;
      }

      // Step 2: Write to RTDB
      const updateRef = rtdbRef(
        rtdb,
        `checkIns/${businessIdSanitized}/${targetDate}/${groomingDog.id}/groomingAddOns`
      );

      await rtdbRemove(updateRef); // clear existing
      await set(updateRef, groomingOptions); // write new array

      // Step 3: Optimistic UI update
      setDogs((prev) =>
        prev.map((d) =>
          d.id === groomingDog.id ? { ...d, groomingAddOns: groomingOptions } : d
        )
      );

      setShowGroomingModal(false);
      setGroomingDog(null);
    } catch (err) {
      console.error('❌ saveGrooming failed:', err);
      setGroomingError('Failed to save grooming services.');
    } finally {
      setGroomingSaving(false);
    }
  }, [groomingDog, groomingOptions, businessIdSanitized]);

  /** -------- Client Notes (Business Owner) -------- */
  const fetchOwnerUidByNameScoped = useCallback(
    async (ownerName: string): Promise<string | null> => {
      try {
        if (!businessIdRaw) return null;

        const qJoin = query(
          collection(db, 'joinRequests'),
          where('userName', '==', ownerName),
          where('businessId', '==', businessIdRaw)
        );

        const snap = await getDocs(qJoin);
        if (snap.empty) return null;

        const uid = snap.docs[0].data().userId as string | undefined;
        return uid && uid.trim().length > 0 ? uid : null;
      } catch (e) {
        console.error('❌ fetchOwnerUidByNameScoped failed:', e);
        return null;
      }
    },
    [businessIdRaw]
  );

  const openClientNotes = useCallback(
    async (dog: Dog) => {
      try {
        // Business owner must be logged in
        if (!auth.currentUser) {
          router.push(`/${locale}/loginsignup`);
          return;
        }
        if (!businessIdRaw) {
          alert('Business not loaded yet. Please try again in a moment.');
          return;
        }

        const ownerUid = await fetchOwnerUidByNameScoped(dog.owner);
        if (!ownerUid) {
          alert('Unable to resolve this client.');
          return;
        }

        // ✅ Owner flow: route to the notes page (no businessId query needed)
        router.push(`/${locale}/boardinganddaycareindividualclientnotes/${ownerUid}`);
      } catch (e) {
        console.error('❌ openClientNotes failed:', e);
        alert('Failed to open client notes.');
      }
    },
    [businessIdRaw, fetchOwnerUidByNameScoped, router, locale]
  );

  /** -------- Assessment Modal actions -------- */
  const openAssessment = useCallback(async (dog: Dog) => {
    try {
      if (!auth.currentUser) {
        router.push(`/${locale}/loginsignup`);
        return;
      }
      if (!businessIdRaw) return;

      setAssessmentDog(dog);
      setAssessmentNotes('');
      setAssessmentError(null);
      setAssessmentSaveMsg(null);
      setAssessmentLoading(true);
      setShowAssessmentModal(true);

      // Load (if exists)
      const ref = doc(db, 'dogAssessments', dog.id, 'businesses', businessIdRaw);
      const snap = await getDoc(ref);
      if (snap.exists()) {
        const data = snap.data();
        setAssessmentNotes((data?.notes as string) || '');
      } else {
        setAssessmentNotes('');
      }
    } catch (e) {
      console.error('❌ load assessment failed:', e);
      setAssessmentError('Failed to load assessment.');
    } finally {
      setAssessmentLoading(false);
    }
  }, [businessIdRaw, router, locale]);

  /** -------- Open Grooming Modal -------- */
  const openGrooming = useCallback((dog: Dog) => {
    setGroomingDog(dog);
    setGroomingOptions(dog.groomingAddOns ?? []);
    setGroomingError(null);
    setShowGroomingModal(true);
  }, []);

  const closeAssessment = useCallback(() => {
    setShowAssessmentModal(false);
    setAssessmentDog(null);
    setAssessmentNotes('');
    setAssessmentError(null);
    setAssessmentSaveMsg(null);
  }, []);

  const saveAssessment = useCallback(async () => {
    try {
      if (!auth.currentUser) {
        setAssessmentError('Not authenticated.');
        return;
      }
      if (!assessmentDog || !businessIdRaw) return;

      const trimmed = assessmentNotes.slice(0, 2000);
      const ref = doc(db, 'dogAssessments', assessmentDog.id, 'businesses', businessIdRaw);
      const payload: Record<string, unknown> = {
        notes: trimmed,
        lastUpdated: serverTimestamp(),
      };
      if (auth.currentUser.email) payload.updatedBy = auth.currentUser.email;

      await setDoc(ref, payload, { merge: true });
      setAssessmentSaveMsg('✅ Saved.');
      setAssessmentError(null);
    } catch (e) {
      console.error('❌ save assessment failed:', e);
      setAssessmentError('Failed to save.');
      setAssessmentSaveMsg(null);
    }
  }, [assessmentDog, assessmentNotes, businessIdRaw]);

  /** UI */
  return (
    <div className="min-h-screen bg-[color:var(--color-background)] text-[color:var(--color-foreground)]">
      <main className="max-w-3xl mx-auto px-4 py-6">
        <div className="relative mb-4">

          {/* Page Title */}
          <h1 className="text-3xl font-bold text-center text-[color:var(--color-accent)]">
            {t('dogs_on_property')}
          </h1>

          {/* Top-right Add Dog button */}
          <button
            onClick={() => router.push(`/${locale}/boardinganddaycareadddogclientlist`)}
            className="absolute right-0 top-1/2 -translate-y-1/2 text-[color:var(--color-accent)] hover:text-green-700"
            aria-label="Add Dog"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-7 h-7"
            >
              <path d="M12 5v14m7-7H5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>


        {/* Filter segmented control */}
        <div className="flex items-center justify-center gap-2 mb-2">
          {(['Daycare', 'Boarding', 'Grooming'] as FilterType[]).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-3 py-1.5 rounded-full text-sm ${filter === f ? 'bg-[#2f855a] text-white' : 'bg-gray-200 text-gray-800'
                }`}
            >
              {t(f.toLowerCase())}
            </button>
          ))}
        </div>

        {/* ✅ NEW: total count under the filter (only when not loading and no error) */}
        {!isLoading && !errorMsg && (
          <p className="text-center text-sm text-gray-500 mb-4">
            {filteredDogs.length} total
          </p>
        )}

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
            {filteredDogs.map((dog, idx) => {
              const expandedRow = expanded.has(dog.id);
              return (
                <div key={dog.id} className="rounded-xl border border-[color:var(--color-accent)] bg-white">
                  {/* Header row (tap to expand) */}
                  <button
                    className="w-full text-left px-4 py-3 rounded-t-xl"
                    onClick={() => toggleExpand(dog.id)}
                    aria-expanded={expandedRow}
                  >
                    <div className="flex items-center justify-between gap-3">
                      {/* Left content */}
                      <div className="flex items-center gap-2">
                        {/* NEW: sequential number before the dog name */}
                        <span className="text-gray-500 font-mono">{idx + 1}.</span>

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

                      {/* Right chevron */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className={`w-5 h-5 text-gray-500 transition-transform ${expandedRow ? 'rotate-180' : ''
                          }`}
                        aria-hidden="true"
                      >
                        <path d="M6 9l6 6 6-6" />
                      </svg>
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

                        {/* 🆕 Feeding info */}
                        {(dog.currentFood || dog.feedingAmount) && (
                          <div className="text-gray-700">
                            {dog.currentFood && (
                              <div>
                                <strong>Current Food:</strong> {dog.currentFood}
                              </div>
                            )}
                            {dog.feedingAmount && (
                              <div>
                                <strong>Feeding Amount:</strong> {dog.feedingAmount} cups
                              </div>
                            )}
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

                        {/* View Assessment */}
                        <button
                          onClick={() => void openAssessment(dog)}
                          className="px-3 py-2 rounded border border-blue-600 text-blue-700 text-sm hover:bg-blue-50"
                        >
                          {t('view_assessment_button')}
                        </button>

                        {/* ✅ Client Notes */}
                        <button
                          onClick={() => void openClientNotes(dog)}
                          className="px-3 py-2 rounded border border-blue-600 text-blue-700 text-sm hover:bg-blue-50"
                        >
                          {t('client_notes_button')}
                        </button>

                        {/* Grooming */}
                        <button
                          onClick={() => openGrooming(dog)}
                          className="px-3 py-2 rounded border border-purple-600 text-purple-700 text-sm hover:bg-purple-50"
                        >
                          {t('grooming_button')}
                        </button>

                        {/* Check Out */}
                        <button
                          onClick={() => void checkOutDog(dog)}
                          className="px-3 py-2 rounded bg-green-700 text-white text-sm hover:bg-green-600"
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

      {/* -------- Assessment Modal -------- */}
      {showAssessmentModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/40"
            onClick={closeAssessment}
            aria-hidden="true"
          />
          {/* Modal */}
          <div className="relative z-10 w-full max-w-xl mx-4 rounded-xl bg-white shadow-xl border border-gray-200">
            <div className="px-5 py-4 border-b border-gray-200 flex items-center justify-between">
              <h2 className="text-lg font-semibold">
                {assessmentDog ? `${t('assessment_for_dog') || 'Assessment for'} ${assessmentDog.name}` : t('view_assessment_button')}
              </h2>
              <button
                onClick={closeAssessment}
                className="text-gray-600 hover:text-gray-800"
                aria-label="Close"
              >
                ✕
              </button>
            </div>

            <div className="px-5 py-4">
              {assessmentLoading ? (
                <p className="text-sm text-gray-600">{t('loading')}</p>
              ) : (
                <>
                  {assessmentError && (
                    <p className="text-sm text-red-600 mb-2">❌ {assessmentError}</p>
                  )}

                  <textarea
                    value={assessmentNotes}
                    onChange={(e) => {
                      const next = e.target.value.slice(0, 2000);
                      setAssessmentNotes(next);
                    }}
                    className="w-full min-h-[180px] rounded-lg border border-gray-300 p-3 text-sm outline-none focus:ring-2 focus:ring-blue-200"
                    placeholder="Write assessment notes..."
                  />

                  <div className="mt-1 text-xs text-gray-500">{assessmentNotes.length} / 2000</div>

                  {assessmentSaveMsg && (
                    <div className="mt-2 text-sm text-green-700">{assessmentSaveMsg}</div>
                  )}
                </>
              )}
            </div>

            <div className="px-5 py-3 border-t border-gray-200 flex items-center justify-end gap-2">
              <button
                onClick={closeAssessment}
                className="px-3 py-2 rounded border border-gray-300 text-gray-700 text-sm hover:bg-gray-50"
              >
                Close
              </button>
              <button
                onClick={() => void saveAssessment()}
                disabled={assessmentLoading || assessmentNotes.trim().length === 0}
                className={`px-3 py-2 rounded text-sm text-white ${assessmentLoading || assessmentNotes.trim().length === 0 ? 'bg-blue-300 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-500'}`}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}

      {/* -------- Grooming Modal -------- */}
      {showGroomingModal && groomingDog && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setShowGroomingModal(false)}
          />
          <div className="relative z-10 w-full max-w-xl mx-4 rounded-xl bg-white shadow-xl border border-gray-200">

            <div className="px-5 py-4 border-b border-gray-200 flex items-center justify-between">
              <h2 className="text-lg font-semibold">
                Grooming for {groomingDog.name}
              </h2>
              <button
                onClick={() => setShowGroomingModal(false)}
                className="text-gray-600 hover:text-gray-800"
              >
                ✕
              </button>
            </div>

            <div className="px-5 py-4 space-y-3 text-sm">
              {availableGroomingServices.length === 0 ? (
                <p className="text-sm text-gray-500">No grooming services configured.</p>
              ) : (
                availableGroomingServices.map((service) => (
                  <label key={service} className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={groomingOptions.includes(service)}
                      onChange={(e) => {
                        const checked = e.target.checked;
                        setGroomingOptions((prev) =>
                          checked
                            ? [...prev, service]
                            : prev.filter((x) => x !== service)
                        );
                      }}
                    />
                    {service}
                  </label>
                ))
              )}

              {/* Add more options as needed */}

              {groomingError && (
                <p className="text-sm text-red-600">❌ {groomingError}</p>
              )}
            </div>

            <div className="px-5 py-3 border-t border-gray-200 flex justify-end gap-2">
              <button
                onClick={() => setShowGroomingModal(false)}
                className="px-3 py-2 rounded border border-gray-300 text-gray-700 text-sm hover:bg-gray-50"
              >
                Close
              </button>

              <button
                onClick={() => void saveGrooming()}
                disabled={groomingSaving}
                className={`px-3 py-2 rounded text-sm text-white ${groomingSaving ? 'bg-purple-300' : 'bg-purple-600 hover:bg-purple-500'
                  }`}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
