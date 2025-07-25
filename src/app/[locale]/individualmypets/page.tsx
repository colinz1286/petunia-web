// src/app/[locale]/individualmypets/page.tsx
'use client';

import { useEffect, useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

import { initializeApp } from 'firebase/app';
import {
    getAuth,
    onAuthStateChanged,
} from 'firebase/auth';
import {
    getFirestore,
    collection,
    deleteDoc,
    doc,
    getDocs,
    orderBy,
    query,
} from 'firebase/firestore';
import {
    getStorage,
    ref,
    deleteObject,
} from 'firebase/storage';

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY!,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN!,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID!,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET!,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID!,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID!,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

interface Pet {
    id: string;
    petType: string;
    petName: string;
    breed: string;
    age: string;
    weight: string;
    gender: string;
    spayedNeutered: string;
    allergies: string;
    currentFood: string;
    feedingAmount: string;
    feedingFrequency: string;
    veterinarian: string;
    medications: string;
    medicationDetails: string;
    boardingExperienceDetails: string;
    fearDetails: string;
}

export default function IndividualMyPetsPage() {
    const t = useTranslations('individualMyPets');
    const locale = useLocale();
    const router = useRouter();

    const [userId, setUserId] = useState('');
    const [pets, setPets] = useState<Pet[]>([]);
    const [loading, setLoading] = useState(true);
    const [petToDelete, setPetToDelete] = useState<Pet | null>(null);
    const [expandedId, setExpandedId] = useState<string | null>(null);

    useEffect(() => {
        const unsub = onAuthStateChanged(auth, async (user) => {
            if (!user) {
                router.push(`/${locale}/loginsignup`);
                return;
            }

            const uid = user.uid;
            setUserId(uid);
            await fetchPets(uid);
        });

        return () => unsub();
    }, [locale, router]);

    const fetchPets = async (uid: string) => {
        try {
            const petsRef = collection(db, 'users', uid, 'pets');
            const q = query(petsRef, orderBy('createdAt', 'asc'));
            const snapshot = await getDocs(q);
            const petList: Pet[] = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            })) as Pet[];
            setPets(petList);
        } catch (error) {
            console.error('Error loading pets:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (pet: Pet) => {
        try {
            await deleteDoc(doc(db, 'users', userId, 'pets', pet.id));
            const imageRef = ref(storage, `vaccineRecords/${userId}/${pet.id}.jpg`);
            await deleteObject(imageRef).catch(() => null);
            setPets((prev) => prev.filter((p) => p.id !== pet.id));
        } catch (error) {
            console.error('Error deleting pet:', error);
        } finally {
            setPetToDelete(null);
        }
    };

    return (
        <main className="min-h-screen bg-[var(--BrandBackground)] px-4 py-6 text-[color:var(--color-foreground)]">
            <div className="w-full max-w-md mx-auto px-2 sm:px-4">
                {/* Back to Dashboard */}
                <button
                    onClick={() => router.push(`/${locale}/individualdashboard`)}
                    className="mb-6 text-sm text-[color:var(--color-accent)] underline hover:text-[color:var(--color-accent)]"
                >
                    ← {t('back_to_dashboard', { defaultValue: 'Back to Dashboard' })}
                </button>

                {/* Page Title */}
                <h1 className="text-3xl font-bold text-center text-[color:var(--color-accent)] mb-6">
                    {t('my_pets_title')}
                </h1>

                {loading ? (
                    <p className="text-center text-sm text-gray-500">{t('loading')}</p>
                ) : pets.length === 0 ? (
                    <p className="text-center text-sm text-gray-500 mb-6">{t('no_pets_message')}</p>
                ) : (
                    <div className="space-y-4">
                        {pets.map((pet) => {
                            const isOpen = expandedId === pet.id;
                            return (
                                <div
                                    key={pet.id}
                                    className="rounded-lg border border-[var(--BrandAccent)] bg-white p-4"
                                >
                                    <button
                                        onClick={() => setExpandedId(isOpen ? null : pet.id)}
                                        className="block w-full text-left font-semibold text-[var(--BrandAccent)]"
                                    >
                                        {pet.petName}
                                    </button>

                                    {isOpen && (
                                        <div className="pt-3 text-sm text-gray-700 space-y-2">
                                            <p>{t('type_label')}: {pet.petType}</p>
                                            <p>{t('breed_label')}: {pet.breed}</p>
                                            <p>{t('age_label')}: {pet.age}</p>
                                            <p>{t('weight_label')}: {pet.weight}</p>
                                            <p>{t('gender_label')}: {pet.gender}</p>
                                            <p>{t('spayed_neutered_label')}: {pet.spayedNeutered}</p>
                                            <p>{t('allergies_label')}: {pet.allergies}</p>
                                            <p>{t('current_food_label')}: {pet.currentFood}</p>
                                            <p>
                                                {t('feeding_label')}: {pet.feedingAmount} {t('cups_label')}, {pet.feedingFrequency}x/{t('day_label')}
                                            </p>
                                            <p>{t('veterinarian_label')}: {pet.veterinarian}</p>
                                            <p>{t('medications_label')}: {pet.medications}</p>
                                            {pet.medicationDetails && (
                                                <p>{t('medication_details_label')}: {pet.medicationDetails}</p>
                                            )}
                                            {pet.boardingExperienceDetails && (
                                                <p>{t('boarding_experience_label')}: {pet.boardingExperienceDetails}</p>
                                            )}
                                            {pet.fearDetails && (
                                                <p>{t('fears_label')}: {pet.fearDetails}</p>
                                            )}

                                            <div className="flex justify-between pt-4">
                                                <button
                                                    className="text-[var(--BrandAccent)] underline text-sm"
                                                    onClick={() => router.push(`/${locale}/individualaddeditpet?petId=${pet.id}`)}
                                                >
                                                    {t('edit_pet_button')}
                                                </button>
                                                <button
                                                    className="text-red-600 underline text-sm"
                                                    onClick={() => setPetToDelete(pet)}
                                                >
                                                    {t('delete_pet_button')}
                                                </button>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                )}

                {/* Add Pet Button */}
                <div className="mt-10">
                    <Link
                        href="/individualaddeditpet"
                        className="block w-full text-center bg-[#2c4a30] text-[#f6efe4] px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition text-sm"
                    >
                        {t('add_pet_button')}
                    </Link>
                </div>
            </div>

            {/* Delete Confirmation Modal */}
            {petToDelete && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 px-4">
                    <div className="bg-white rounded-lg p-6 max-w-sm w-full text-center shadow-lg">
                        <p className="mb-4 text-sm">{t('delete_pet_alert')}</p>
                        <div className="flex justify-center gap-4">
                            <button
                                onClick={() => handleDelete(petToDelete)}
                                className="bg-red-600 text-white px-4 py-2 rounded text-sm"
                            >
                                {t('delete_button')}
                            </button>
                            <button
                                onClick={() => setPetToDelete(null)}
                                className="bg-gray-200 px-4 py-2 rounded text-sm"
                            >
                                {t('cancel_button')}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </main>
    );
}
