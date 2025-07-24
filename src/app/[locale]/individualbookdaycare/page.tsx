'use client';

import { useEffect, useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { useRouter, useSearchParams } from 'next/navigation';
import {
    getFirestore,
    collection,
    getDocs,
    getDoc,
    setDoc,
    doc,
    Timestamp,
} from 'firebase/firestore';
import {
    getDatabase,
    ref,
    set as rtdbSet
} from 'firebase/database';
import {
    getAuth,
    onAuthStateChanged
} from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

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

type Pet = {
    id: string;
    name: string;
};

type DraftBooking = {
    id: string;
    date: string;
    dropOffTime: string;
    petIds: string[];
};

export default function IndividualBookDaycarePage() {
    const t = useTranslations('individualBookDaycare');
    const locale = useLocale();
    const router = useRouter();
    const params = useSearchParams();

    const businessId = params.get('businessId') || '';
    const businessName = params.get('businessName') || t('default_business_name');

    const [userId, setUserId] = useState('');
    const [pets, setPets] = useState<Pet[]>([]);
    const [selectedPetIds, setSelectedPetIds] = useState<string[]>([]);
    const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
    const [dropOffOptions, setDropOffOptions] = useState<string[]>([]);
    const [selectedTime, setSelectedTime] = useState('');
    const [drafts, setDrafts] = useState<DraftBooking[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [waiverRequired, setWaiverRequired] = useState(false);
    const [waiverSigned, setWaiverSigned] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        onAuthStateChanged(auth, async (user) => {
            if (!user) {
                router.push(`/${locale}/loginsignup`);
                return;
            }

            setUserId(user.uid);
            await loadPets(user.uid);
            await loadBusinessSettings();
            setIsLoading(false);
        });
    }, [locale, router]);

    async function loadPets(uid: string) {
        const snap = await getDocs(collection(db, 'users', uid, 'pets'));
        const pets = snap.docs.map((d) => ({
            id: d.id,
            name: d.data().petName || 'Unnamed',
        }));
        setPets(pets);
        setSelectedPetIds(pets.map(p => p.id));
    }

    async function loadBusinessSettings() {
        const snap = await getDoc(doc(db, 'businesses', businessId));
        const data = snap.data() || {};
        const dropOffMap = data.dropOffTimesDaycare || {};
        const weekday = new Date().toLocaleDateString('en-US', { weekday: 'long' });
        const options = dropOffMap[weekday] || [];
        setDropOffOptions(options);
        setSelectedTime(options[0] || '');
        setWaiverRequired(data.waiverRequired ?? false);
    }

    async function submitBooking() {
        if (!selectedDate || !selectedTime || selectedPetIds.length === 0) return;
        if (waiverRequired && !waiverSigned) {
            alert(t('waiver_required'));
            return;
        }

        const reservationId = crypto.randomUUID();
        const realtimeKey = reservationId;
        const reservation = {
            userId,
            businessId,
            petIds: selectedPetIds,
            date: Timestamp.fromDate(selectedDate),
            arrivalWindow: selectedTime,
            status: 'approved',
            realtimeKey
        };

        await setDoc(doc(db, 'daycareReservations', reservationId), reservation);

        for (const petId of selectedPetIds) {
            const pet = pets.find(p => p.id === petId);
            if (!pet) continue;
            const path = `upcomingReservations/${businessId}/${realtimeKey}-${petId}`;
            await rtdbSet(ref(rtdb, path), {
                dogName: pet.name,
                ownerName: 'Client',
                type: 'Daycare',
                date: selectedDate.toISOString().split('T')[0],
                arrivalWindow: selectedTime,
                status: 'approved',
                userId,
                realtimeKey
            });
        }

        alert(t('submission_success'));
        router.push(`/${locale}/individualupcomingappointments`);
    }

    return (
        <div className="min-h-screen bg-[color:var(--color-background)] px-4 py-6 text-[color:var(--color-foreground)]">
            <div className="w-full max-w-xl mx-auto space-y-6">
                {/* ✅ Back Button */}
                <button
                    onClick={() =>
                        router.push(`/${locale}/individualselectservice?businessId=${businessId}`)
                    }
                    className="mb-4 text-sm text-[color:var(--color-accent)] underline hover:opacity-90"
                >
                    ← {t('back_to_select_service')}
                </button>

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
                        {/* ✅ Select a Date */}
                        <div className="flex flex-col items-center space-y-1 w-full">
                            <label className="font-semibold text-center text-sm">{t('select_date')}</label>
                            <DatePicker
                                selected={selectedDate}
                                onChange={(date: Date | null) => setSelectedDate(date)}
                                dateFormat="MM/dd/yyyy"
                                className="w-full max-w-xs border p-2 rounded text-center text-sm"
                                placeholderText="Select a date"
                            />
                        </div>

                        {/* ✅ Drop-Off Time Selector */}
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

                        {/* ✅ Pet Selection */}
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
                                                    setSelectedPetIds((prev) => [...prev, pet.id]);
                                                } else {
                                                    setSelectedPetIds((prev) =>
                                                        prev.filter((id) => id !== pet.id)
                                                    );
                                                }
                                            }}
                                        />
                                        <span>{pet.name}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* ✅ Submit Button */}
                        <button
                            onClick={submitBooking}
                            className="w-full max-w-xs bg-green-800 text-white py-3 rounded hover:bg-green-700 transition text-sm"
                        >
                            {t('submit')}
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
