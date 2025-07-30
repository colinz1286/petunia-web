'use client';

import { useEffect, useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import {
    getFirestore,
    collection,
    getDocs,
    getDoc,
    deleteDoc,
    query,
    where,
    Timestamp,
    doc,
    addDoc
} from 'firebase/firestore';
import {
    getDatabase,
    ref,
    remove
} from 'firebase/database';
import { initializeApp } from 'firebase/app';

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
const rtdb = getDatabase(app);

type Reservation = {
    id: string;
    type: 'boarding' | 'daycare';
    businessId: string;
    realtimeKey: string;
    arrivalWindow: string;
    petIds: string[];
    groomingAddOns: Record<string, string[]>;
    date: Date;
    pickUpDate?: Date;
    businessName: string;
    businessPhone: string;
    businessAddress: string;
    petNames: string[];
    groomingSummary: Record<string, string[]>;
};

export default function IndividualUpcomingAppointmentsPage() {
    const t = useTranslations('individualUpcomingAppointments');
    const locale = useLocale();
    const router = useRouter();

    const [reservations, setReservations] = useState<Reservation[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [cancelingId, setCancelingId] = useState<string | null>(null);
    const [showLateAlert, setShowLateAlert] = useState(false);
    const [businessPhone, setBusinessPhone] = useState('');

    const fetchReservationsForUser = useCallback(async (uid: string) => {
        setIsLoading(true);
        try {
            const now = new Date();
            const cutoff = new Date(now.getTime() - 12 * 60 * 60 * 1000);
            const results: Reservation[] = [];

            const fetchReservations = async (
                collectionName: string,
                dateField: string,
                type: 'boarding' | 'daycare'
            ) => {
                const snap = await getDocs(query(collection(db, collectionName), where('userId', '==', uid)));

                for (const docSnap of snap.docs) {
                    const data = docSnap.data();
                    const ts = data[dateField] as Timestamp | undefined;
                    if (!ts) continue;

                    const resDate = ts.toDate();
                    if (resDate < cutoff) {
                        await deleteDoc(doc(db, collectionName, docSnap.id));
                        continue;
                    }

                    const res: Reservation = {
                        id: docSnap.id,
                        type,
                        businessId: data.businessId,
                        realtimeKey: data.realtimeKey,
                        arrivalWindow: data.arrivalWindow || 'N/A',
                        petIds: data.petIds || [],
                        groomingAddOns: data.groomingAddOns || {},
                        date: resDate,
                        pickUpDate: data.pickUpDate ? (data.pickUpDate as Timestamp).toDate() : undefined,
                        businessName: '',
                        businessPhone: '',
                        businessAddress: '',
                        petNames: [],
                        groomingSummary: {}
                    };

                    const bizSnap = await getDoc(doc(db, 'businesses', res.businessId));
                    const bizData = bizSnap.data() || {};

                    res.businessName = bizData.businessName || t('unknown_business');
                    res.businessPhone = bizData.businessPhone || '';
                    const addr = bizData.address || {};
                    res.businessAddress = `${addr.street || ''}, ${addr.city || ''}, ${addr.state || ''} ${addr.zipCode || ''}`;

                    for (const petId of res.petIds) {
                        const petSnap = await getDoc(doc(db, 'users', uid, 'pets', petId));
                        const petName = petSnap.data()?.petName || t('unknown_pet_name');
                        res.petNames.push(petName);
                        if (res.groomingAddOns[petId]) {
                            res.groomingSummary[petName] = res.groomingAddOns[petId];
                        }
                    }

                    results.push(res);
                }
            };

            await Promise.all([
                fetchReservations('daycareReservations', 'date', 'daycare'),
                fetchReservations('boardingReservations', 'dropOffDate', 'boarding')
            ]);

            results.sort((a, b) => a.date.getTime() - b.date.getTime());
            setReservations(results);
        } catch (err: unknown) {
            const message = err instanceof Error ? err.message : 'Unknown error';
            setError(message);
        } finally {
            setIsLoading(false);
        }
    }, [t]);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                void fetchReservationsForUser(user.uid);
            } else {
                router.push(`/${locale}/loginsignup`);
            }
        });

        return () => unsubscribe();
    }, [fetchReservationsForUser, locale, router]);

    const formatDate = (date: Date) =>
        new Intl.DateTimeFormat(locale, { dateStyle: 'medium' }).format(date);

    const handleCancel = async (res: Reservation) => {
        const now = new Date();
        const hoursDiff = (res.date.getTime() - now.getTime()) / (1000 * 60 * 60);

        if (hoursDiff < 24) {
            setBusinessPhone(res.businessPhone);
            setShowLateAlert(true);
            return;
        }

        // Optimistically remove from UI
        setReservations(prev => prev.filter(r => r.id !== res.id));
        setCancelingId(res.id);

        try {
            const col = res.type === 'boarding' ? 'boardingReservations' : 'daycareReservations';

            // ❌ Firestore delete
            await deleteDoc(doc(db, col, res.id));
            console.log(`🗑️ Firestore: Deleted ${col}/${res.id}`);

            // ❌ Realtime DB delete (per pet)
            for (const petId of res.petIds) {
                const rtdbPath = `upcomingReservations/${res.businessId}/${res.realtimeKey}-${petId}`;
                await remove(ref(rtdb, rtdbPath));
                console.log(`🗑️ RTDB: Deleted ${rtdbPath}`);
            }

            // ✅ Notify business owner
            const bizSnap = await getDoc(doc(db, 'businesses', res.businessId));
            const ownerId = bizSnap.data()?.ownerId;
            if (ownerId) {
                await addDoc(collection(db, 'users', ownerId, 'notifications'), {
                    type: 'cancellation',
                    message: `${res.type === 'daycare' ? 'Daycare' : 'Boarding'} appointment on ${formatDate(res.date)} was canceled.`,
                    timestamp: Timestamp.now()
                });
            }

            // ✅ Re-fetch updated reservation list
            const currentUser = auth.currentUser;
            if (currentUser) {
                await fetchReservationsForUser(currentUser.uid);
            }

        } catch (err: unknown) {
            console.error('❌ Cancelation failed:', err instanceof Error ? err.message : 'Unknown error');
            // No rollback — reservation will only reappear if it still exists in Firestore
        } finally {
            setCancelingId(null);
        }
    };

    return (
        <div className="min-h-screen bg-[color:var(--color-background)] text-[color:var(--color-foreground)] px-4 py-6">
            <div className="w-full max-w-md mx-auto px-2 sm:px-4">
                {/* Back to Dashboard */}
                <button
                    onClick={() => router.push(`/${locale}/individualdashboard`)}
                    className="mb-6 text-sm text-[color:var(--color-accent)] underline"
                >
                    ← {t('back_to_dashboard')}
                </button>

                {/* Page Title */}
                <h1 className="text-3xl font-bold text-center text-[color:var(--color-accent)] mb-6">
                    {t('upcoming_appointments_title')}
                </h1>

                {/* Loading / Error / No Data */}
                {isLoading ? (
                    <p className="text-center text-sm text-gray-500">{t('loading_label')}</p>
                ) : error ? (
                    <p className="text-center text-sm text-red-600">{error}</p>
                ) : reservations.length === 0 ? (
                    <p className="text-center text-sm text-gray-500">{t('no_upcoming_appointments')}</p>
                ) : (
                    <div className="space-y-6">
                        {reservations.map(res => (
                            <div key={res.id} className="w-full flex justify-center">
                                <div className="w-full max-w-md p-4 border-2 border-[color:var(--color-accent)] bg-white rounded-lg">
                                    <p className="font-semibold mb-1 text-sm">
                                        {res.type === 'boarding' ? t('boarding_label') : t('daycare_label')}
                                    </p>
                                    <p className="text-sm">{t('appointment_date')}: {formatDate(res.date)}</p>
                                    {res.type === 'boarding' && res.pickUpDate && (
                                        <p className="text-sm">{t('boarding_end_label')}: {formatDate(res.pickUpDate)}</p>
                                    )}
                                    <p className="text-sm">{t('business_label')}: {res.businessName}</p>
                                    <p className="text-sm">{t('address_label')}: {res.businessAddress}</p>
                                    <p className="text-sm">{t('pets_label')}: {res.petNames.join(', ')}</p>

                                    {Object.keys(res.groomingSummary).length > 0 && (
                                        <div className="mt-2">
                                            <p className="text-sm font-semibold">{t('grooming_addons_title')}</p>
                                            {Object.entries(res.groomingSummary).map(([pet, addOns]) => (
                                                <p className="text-sm" key={pet}>
                                                    {t('grooming_addon_detail', {
                                                        petName: pet,
                                                        addons: addOns.join(', ')
                                                    })}
                                                </p>
                                            ))}
                                        </div>
                                    )}

                                    <button
                                        onClick={() => handleCancel(res)}
                                        className="text-red-600 text-sm mt-4 underline disabled:opacity-50"
                                        disabled={cancelingId === res.id}
                                    >
                                        {cancelingId === res.id
                                            ? t('canceling_label')
                                            : t('cancel_appointment_button')}
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* Late Cancel Alert */}
                {showLateAlert && (
                    <div className="mt-6 p-4 border border-yellow-500 bg-yellow-100 text-yellow-800 rounded text-sm">
                        <p className="font-semibold mb-2">{t('late_cancel_alert_title')}</p>
                        <p className="mb-3">{t('late_cancel_message')}</p>
                        <a
                            href={`tel:${businessPhone}`}
                            className="text-[color:var(--color-accent)] underline"
                        >
                            {t('call_business_button')}
                        </a>
                    </div>
                )}
            </div>
        </div>
    );
}
