'use client';

import { useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { useTranslations, useLocale } from 'next-intl';
import {
    getFirestore,
    getDoc,
    doc,
    getDocs,
    collection,
    Timestamp,
    setDoc
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
    species: string;
};

type BoardingReservationPayload = {
    userId: string;
    businessId: string;
    petIds: string[];
    dropOffDate: Timestamp;
    pickUpDate: Timestamp;
    status: string;
    realtimeKey: string;
    dropOffTime?: string;
    pickUpTime?: string;
};

export default function IndividualBookBoardingPage() {
    const t = useTranslations('individualBookBoarding');
    const locale = useLocale();
    const router = useRouter();
    const params = useSearchParams();

    const businessId = params.get('businessId') || '';
    const businessName = params.get('businessName') || t('default_business_name');

    const [userId, setUserId] = useState('');
    const [pets, setPets] = useState<Pet[]>([]);
    const [selectedPetIds, setSelectedPetIds] = useState<string[]>([]);

    const [dropOffDate, setDropOffDate] = useState<Date | null>(new Date());
    const [pickUpDate, setPickUpDate] = useState<Date | null>(null);
    const [dropOffTime, setDropOffTime] = useState('');
    const [pickUpTime, setPickUpTime] = useState('');
    const [dropOffTimeOptions, setDropOffTimeOptions] = useState<string[]>([]);
    const [pickUpTimeOptions, setPickUpTimeOptions] = useState<string[]>([]);
    const [dropOffRequired, setDropOffRequired] = useState(false);
    const [pickUpRequired, setPickUpRequired] = useState(false);

    // ✅ Waiver enforcement
    const [waiverRequired, setWaiverRequired] = useState(false);
    const isSubmitting = false;
    const [waiverSigned, setWaiverSigned] = useState(true); // Default to true for safety
    const [showWaiverModal, setShowWaiverModal] = useState(false);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            if (!user) {
                router.push(`/${locale}/loginsignup`);
                return;
            }

            const uid = user.uid;
            setUserId(uid);

            const petSnap = await getDocs(collection(db, 'users', uid, 'pets'));
            const petList: Pet[] = petSnap.docs.map((doc) => {
                const d = doc.data();
                return {
                    id: doc.id,
                    name: d.petName || 'Unnamed',
                    species: d.petType || '',
                };
            });

            setPets(petList);
            setSelectedPetIds(petList.map((p) => p.id));

            const snap = await getDoc(doc(db, 'businesses', businessId));
            const data = snap.data() || {};

            setDropOffTimeOptions(data.dropOffTimeOptionsBoarding || []);
            setPickUpTimeOptions(data.pickUpTimeOptionsBoarding || []);
            setDropOffRequired(data.dropOffTimeRequiredBoarding ?? false);
            setPickUpRequired(data.pickUpTimeRequired ?? false);
            setWaiverRequired(data.waiverRequired ?? false);

            if (data.dropOffTimeOptionsBoarding?.length) {
                setDropOffTime(data.dropOffTimeOptionsBoarding[0]);
            }

            if (data.pickUpTimeOptionsBoarding?.length) {
                setPickUpTime(data.pickUpTimeOptionsBoarding[0]);
            }

            const businessSnap = await getDoc(doc(db, 'businesses', businessId));
            const clientSnap = await getDoc(doc(db, 'userApprovedBusinesses', businessId, 'clients', uid));

            const waiverLastUpdated = businessSnap.data()?.waiverLastUpdated?.toDate?.();
            const waiverSignedAt = clientSnap.data()?.waiverSignedAt?.toDate?.();

            if (!waiverRequired) {
                setWaiverSigned(true);
            } else if (!waiverSignedAt) {
                setWaiverSigned(false);
            } else if (waiverLastUpdated && waiverSignedAt < waiverLastUpdated) {
                setWaiverSigned(false);
            } else {
                setWaiverSigned(true);
            }
        });

        return () => unsubscribe();
    }, [router, locale, businessId, waiverRequired]);

    async function handleSubmit() {
        if (!dropOffDate || !pickUpDate || selectedPetIds.length === 0) return;

        // ✅ Waiver enforcement
        if (waiverRequired && !waiverSigned) {
            setShowWaiverModal(true);
            return;
        }

        const reservationId = crypto.randomUUID();
        const docRef = doc(db, 'boardingReservations', reservationId);

        const reservationData: BoardingReservationPayload = {
            userId,
            businessId,
            petIds: selectedPetIds,
            dropOffDate: Timestamp.fromDate(dropOffDate),
            pickUpDate: Timestamp.fromDate(pickUpDate),
            status: 'approved',
            realtimeKey: reservationId
        };

        if (dropOffRequired) reservationData.dropOffTime = dropOffTime;
        if (pickUpRequired) reservationData.pickUpTime = pickUpTime;

        await setDoc(docRef, reservationData);

        const dateStr = dropOffDate.toISOString().split('T')[0];

        for (const petId of selectedPetIds) {
            const pet = pets.find(p => p.id === petId);
            if (!pet) continue;

            const rtdbKey = `${reservationId}-${petId}`;
            await rtdbSet(ref(rtdb, `upcomingReservations/${businessId}/${rtdbKey}`), {
                dogName: pet.name,
                ownerName: 'Client',
                type: 'Boarding',
                date: dateStr,
                status: 'approved',
                arrivalWindow: dropOffRequired ? dropOffTime : '',
                userId,
                realtimeKey: reservationId
            });
        }

        alert(t('reservation_submitted'));
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

                {/* ✅ Heading */}
                <h1 className="text-3xl font-bold text-center text-[color:var(--color-accent)]">
                    {t('book_boarding_title')}
                    <br />
                    <span className="text-lg font-normal text-gray-600">{businessName}</span>
                </h1>

                {/* ✅ Waiver Warning */}
                {waiverRequired && !waiverSigned && (
                    <p className="text-red-600 text-sm text-center">{t('waiver_required_message')}</p>
                )}

                {/* ✅ Waiver Agreement Modal */}
                {showWaiverModal && (
                    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
                        <div className="bg-white p-6 rounded shadow-md max-w-md w-full space-y-4">
                            <h2 className="text-lg font-semibold text-center text-[color:var(--color-accent)]">
                                {t('waiver_required_title')}
                            </h2>
                            <p className="text-sm text-gray-700 whitespace-pre-line">
                                {t('waiver_required_message')}
                            </p>
                            <div className="flex justify-end gap-3">
                                <button
                                    onClick={async () => {
                                        try {
                                            await setDoc(
                                                doc(db, 'userApprovedBusinesses', businessId, 'clients', userId),
                                                { waiverSignedAt: Timestamp.now() },
                                                { merge: true }
                                            );
                                            setWaiverSigned(true);
                                            setShowWaiverModal(false);
                                        } catch (err) {
                                            console.error('❌ Failed to record waiver:', err);
                                            alert(t('waiver_agreement_failed'));
                                        }
                                    }}
                                    className="bg-green-700 hover:bg-green-600 text-white px-4 py-2 rounded text-sm"
                                >
                                    {t('agree_button')}
                                </button>
                                <button
                                    onClick={() => setShowWaiverModal(false)}
                                    className="bg-gray-300 hover:bg-gray-200 text-black px-4 py-2 rounded text-sm"
                                >
                                    {t('cancel_button')}
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {/* ✅ Form Content */}
                <div className="flex flex-col items-center space-y-6">
                    {/* Drop-Off Date */}
                    <div className="flex flex-col items-center space-y-1 w-full">
                        <label className="font-semibold text-center text-sm">{t('drop_off_date')}</label>
                        <DatePicker
                            selected={dropOffDate}
                            onChange={(date: Date | null) => setDropOffDate(date)}
                            dateFormat="MM/dd/yyyy"
                            className="w-full max-w-xs border p-2 rounded text-sm text-center"
                            placeholderText="Select a date"
                        />
                    </div>

                    {/* Pick-Up Date */}
                    <div className="flex flex-col items-center space-y-1 w-full">
                        <label className="font-semibold text-center text-sm">{t('pick_up_date')}</label>
                        <DatePicker
                            selected={pickUpDate}
                            onChange={(date: Date | null) => setPickUpDate(date)}
                            dateFormat="MM/dd/yyyy"
                            className="w-full max-w-xs border p-2 rounded text-sm text-center"
                            placeholderText="Select a date"
                        />
                    </div>

                    {/* Drop-Off Time */}
                    {dropOffRequired && dropOffTimeOptions.length > 0 && (
                        <div className="flex flex-col items-center space-y-1 w-full">
                            <label className="font-semibold text-center text-sm">{t('drop_off_time')}</label>
                            <select
                                className="w-full max-w-xs border p-2 rounded text-sm"
                                value={dropOffTime}
                                onChange={(e) => setDropOffTime(e.target.value)}
                            >
                                {dropOffTimeOptions.map((opt) => (
                                    <option key={opt} value={opt}>
                                        {opt}
                                    </option>
                                ))}
                            </select>
                        </div>
                    )}

                    {/* Pick-Up Time */}
                    {pickUpRequired && pickUpTimeOptions.length > 0 && (
                        <div className="flex flex-col items-center space-y-1 w-full">
                            <label className="font-semibold text-center text-sm">{t('pick_up_time')}</label>
                            <select
                                className="w-full max-w-xs border p-2 rounded text-sm"
                                value={pickUpTime}
                                onChange={(e) => setPickUpTime(e.target.value)}
                            >
                                {pickUpTimeOptions.map((opt) => (
                                    <option key={opt} value={opt}>
                                        {opt}
                                    </option>
                                ))}
                            </select>
                        </div>
                    )}

                    {/* Pet Selection */}
                    <div className="flex flex-col items-center space-y-2 w-full max-w-xs">
                        <label className="font-semibold text-center text-sm w-full">
                            {t('select_pets')}
                        </label>
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

                    {/* Submit Button */}
                    <button
                        onClick={handleSubmit}
                        disabled={isSubmitting}
                        className="w-full max-w-xs bg-green-800 text-white py-3 rounded hover:bg-green-700 transition text-sm"
                    >
                        {isSubmitting ? t('saving') : t('submit')}
                    </button>
                </div>
            </div>
        </div>
    );
}
