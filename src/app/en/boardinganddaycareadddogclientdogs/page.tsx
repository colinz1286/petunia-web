'use client';

import React, { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';

import { initializeApp, getApps } from 'firebase/app';
import {
    getFirestore,
    collection,
    getDocs,
    query,
    where,
    doc,
    setDoc,
    serverTimestamp,
} from 'firebase/firestore';
import {
    getDatabase,
    ref as rtdbRef,
    set as rtdbSet,
} from 'firebase/database';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

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

export default function BoardingAndDaycareAddDogClientDogsPage() {
    const router = useRouter();
    const locale = useLocale();
    const t = useTranslations('boardingAndDaycareAddDogClientDogs');

    const searchParams = useSearchParams();
    const ownerName = searchParams.get('ownerName') || '';
    const clientId = searchParams.get('clientId');

    const [businessIdSanitized, setBusinessIdSanitized] = useState('');
    const [businessIdRaw, setBusinessIdRaw] = useState('');
    interface Dog {
        id: string;
        petName?: string;
        name?: string;
        breed?: string;
        currentFood?: string;
        feedingAmount?: string;
        medications?: string;
        medicationDetails?: string;
        spayedNeutered?: string;
        groomingAddOns?: string[];
        [key: string]: unknown; // keeps flexibility
    }

    const [dogs, setDogs] = useState<Dog[]>([]);

    const [loading, setLoading] = useState(true);
    const [errorMsg, setErrorMsg] = useState<string | null>(null);

    const [selectedDogIds, setSelectedDogIds] = useState<Set<string>>(new Set());

    const [showTypePrompt, setShowTypePrompt] = useState(false);

    /** Step 1 — Resolve businessId */
    useEffect(() => {
        const unsub = onAuthStateChanged(auth, async (user) => {
            if (!user) {
                router.push(`/${locale}/loginsignup`);
                return;
            }

            try {
                const q = query(collection(db, 'businesses'), where('ownerId', '==', user.uid));
                const snap = await getDocs(q);
                let docA = snap.docs[0];

                // Fallback parity with iOS ownerIds model
                if (!docA) {
                    const q2 = query(
                        collection(db, 'businesses'),
                        where('ownerIds', 'array-contains', user.uid)
                    );
                    const snap2 = await getDocs(q2);
                    docA = snap2.docs[0];
                }

                if (!docA) {
                    setErrorMsg(t('error_business_not_found'));
                    setLoading(false);
                    return;
                }

                const raw = docA.id;
                setBusinessIdRaw(raw);

                const sanitized = raw.trim().replace(/[.\#$\[\]\/:]/g, '-');
                setBusinessIdSanitized(sanitized);
            } catch (err) {
                console.error(err);
                setErrorMsg(t('error_loading_business'));
                setLoading(false);
            }
        });

        return () => unsub();
    }, [router, locale, t]);

    /** Step 2 — Load dogs */
    useEffect(() => {
        if (!clientId) return;

        async function loadDogs() {
            try {
                const snap = await getDocs(
                    collection(db, 'users', clientId!, 'pets')
                );

                const list: Dog[] = snap.docs.map((doc) => {
                    const data = doc.data() as Partial<Dog>;
                    return {
                        id: doc.id,
                        ...data,
                    };
                });

                setDogs(list);
            } catch (err) {
                console.error('Failed to load dogs:', err);
                setErrorMsg(t('error_loading_dogs'));
            } finally {
                setLoading(false);
            }
        }

        loadDogs();
    }, [clientId, t]);

    /** Step 3 — Add dog to property */
    const addDogsToProperty = async (type: 'Daycare' | 'Boarding') => {
        try {
            if (!clientId) {
                setErrorMsg(t('error_adding_dog'));
                return;
            }

            const dogsToAdd = dogs.filter((dog) => selectedDogIds.has(dog.id));
            if (dogsToAdd.length === 0) {
                setErrorMsg(t('error_adding_dog'));
                return;
            }

            const today = new Date().toISOString().split('T')[0];

            for (const dog of dogsToAdd) {
                const reservationId = crypto.randomUUID();
                const path = rtdbRef(
                    rtdb,
                    `checkIns/${businessIdSanitized}/${today}/${reservationId}`
                );

                const payload = {
                    reservationId,
                    id: dog.id,
                    dogId: dog.id,
                    name: dog.petName || dog.name || 'Unnamed',
                    owner: ownerName,
                    userId: clientId,
                    ownerUserId: clientId,
                    type: type,
                    checkInTime: new Date().toISOString(),
                    currentFood: dog.currentFood ?? '',
                    feedingAmount: dog.feedingAmount ?? '',
                    medications: dog.medications ?? '',
                    medicationDetails: dog.medicationDetails ?? '',
                    spayedNeutered: dog.spayedNeutered ?? '',
                    groomingAddOns: dog.groomingAddOns ?? [],
                };

                await rtdbSet(path, payload);
            }

            // Ensure client notes doc exists immediately (parity with iOS)
            if (businessIdRaw) {
                await setDoc(
                    doc(db, 'clientNotes', clientId, 'businesses', businessIdRaw),
                    {
                        lastUpdated: serverTimestamp(),
                        updatedBy: auth.currentUser?.email || auth.currentUser?.uid || 'system',
                    },
                    { merge: true }
                );
            }

            router.push(`/${locale}/boardinganddaycaredogsonproperty`);
        } catch (error) {
            console.error('Failed to add dog:', error);
            setErrorMsg(t('error_adding_dog'));
        }
    };

    const toggleDogSelection = (dogId: string) => {
        setSelectedDogIds((prev) => {
            const next = new Set(prev);
            if (next.has(dogId)) next.delete(dogId);
            else next.add(dogId);
            return next;
        });
    };

    /** UI rendering */
    if (loading) {
        return (
            <div className="p-6">
                <p>{t('loading_dogs_label')}</p>
            </div>
        );
    }

    if (errorMsg) {
        return (
            <div className="p-6 text-red-600">
                <p>❌ {errorMsg}</p>
            </div>
        );
    }

    return (
        <div className="max-w-xl mx-auto p-6">
            <h1 className="text-2xl font-bold mb-6 text-center">
                {t('select_dog_title')}
            </h1>

            {dogs.length === 0 && (
                <p className="text-gray-600 text-center">
                    {t('no_dogs_found')}
                </p>
            )}

            <div className="space-y-4">
                {dogs.map((dog) => (
                    <div
                        key={dog.id}
                        className="p-4 bg-white border rounded-xl shadow-sm"
                    >
                        <div className="flex items-start justify-between gap-3">
                            <p className="font-semibold mb-2">
                                🐶 {dog.petName || dog.name}
                            </p>
                            <input
                                type="checkbox"
                                checked={selectedDogIds.has(dog.id)}
                                onChange={() => toggleDogSelection(dog.id)}
                                aria-label={`Select ${dog.petName || dog.name || 'dog'}`}
                            />
                        </div>

                        {dog.breed && (
                            <p className="text-sm text-gray-600">
                                {t('breed_label')}: {dog.breed}
                            </p>
                        )}

                        {dog.medicationDetails && (
                            <p className="text-sm text-gray-600">
                                {t('medications_label')}: {dog.medicationDetails}
                            </p>
                        )}

                        {dog.currentFood && (
                            <p className="text-sm text-gray-600">
                                {t('current_food_label')}: {dog.currentFood}
                            </p>
                        )}

                        {dog.feedingAmount && (
                            <p className="text-sm text-gray-600">
                                {t('feeding_amount_label')}: {dog.feedingAmount} cups
                            </p>
                        )}
                    </div>
                ))}
            </div>

            {dogs.length > 0 && (
                <button
                    onClick={() => setShowTypePrompt(true)}
                    disabled={selectedDogIds.size === 0}
                    className={`w-full py-2 rounded-lg text-sm mt-4 ${
                        selectedDogIds.size === 0
                            ? 'bg-gray-300 text-gray-600 cursor-not-allowed'
                            : 'bg-green-700 text-white'
                    }`}
                >
                    Add Selected Dogs ({selectedDogIds.size})
                </button>
            )}

            {showTypePrompt && selectedDogIds.size > 0 && (
                <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
                    <div className="bg-white p-6 rounded-xl w-full max-w-sm text-center">
                        <h2 className="text-lg font-semibold mb-4">
                            {t('select_checkin_type')}
                        </h2>

                        <button
                            onClick={() => addDogsToProperty('Daycare')}
                            className="w-full bg-blue-600 text-white py-2 rounded mb-2"
                        >
                            {t('daycare_button')}
                        </button>

                        <button
                            onClick={() => addDogsToProperty('Boarding')}
                            className="w-full bg-purple-600 text-white py-2 rounded mb-2"
                        >
                            {t('boarding_button')}
                        </button>

                        <button
                            onClick={() => {
                                setShowTypePrompt(false);
                            }}
                            className="w-full bg-gray-300 py-2 rounded"
                        >
                            {t('cancel_button')}
                        </button>
                    </div>
                </div>
            )}

            <div className="mt-6 flex justify-center">
                <button
                    onClick={() => router.back()}
                    className="px-4 py-2 bg-gray-300 rounded-md"
                >
                    {t('back_button')}
                </button>
            </div>
        </div>
    );
}
