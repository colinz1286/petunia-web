'use client';

import { useEffect, useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';

import {
    getFirestore,
    collection,
    getDocs
} from 'firebase/firestore';
import {
    getAuth,
    onAuthStateChanged
} from 'firebase/auth';
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
const db = getFirestore(app);
const auth = getAuth(app);

type Business = {
    id: string;
    name: string;
    location: string;
    type: string;
    latitude: number;
    longitude: number;
};

export default function IndividualSearchBusinessesPage() {
    const locale = useLocale();
    const t = useTranslations('individualSearchBusinesses');
    const router = useRouter();

    const [searchText, setSearchText] = useState('');
    const [businesses, setBusinesses] = useState<Business[]>([]);
    const [filteredBusinesses, setFilteredBusinesses] = useState<Business[]>([]);
    const [userLocation, setUserLocation] = useState<GeolocationCoordinates | null>(null);

    const searchRadiusMiles = 75;

    const fetchBusinesses = async () => {
        try {
            const snapshot = await getDocs(collection(db, 'businesses'));
            const loaded: Business[] = [];

            snapshot.forEach(doc => {
                const data = doc.data();
                const addressMap = data.businessAddress || {};
                const fullAddress = `${addressMap.street || 'Unknown'}, ${addressMap.city || ''}, ${addressMap.state || ''} ${addressMap.zipCode || ''}`;

                loaded.push({
                    id: doc.id,
                    name: data.businessName || 'Unknown',
                    location: fullAddress,
                    type: data.businessType || 'Unspecified',
                    latitude: data.latitude || 0,
                    longitude: data.longitude || 0,
                });
            });

            setBusinesses(loaded);
        } catch (error) {
            console.error('❌ Error fetching businesses:', error);
        }
    };

    const requestLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                position => {
                    setUserLocation(position.coords);
                },
                error => {
                    console.warn('⚠️ Error getting location:', error);
                }
            );
        }
    };

    const calculateDistanceMiles = (
        lat1: number,
        lon1: number,
        lat2: number,
        lon2: number
    ) => {
        const toRad = (value: number) => (value * Math.PI) / 180;
        const R = 6371;
        const dLat = toRad(lat2 - lat1);
        const dLon = toRad(lon2 - lon1);
        const a =
            Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        return R * c * 0.621371; // km to miles
    };

    const updateFilteredBusinesses = useCallback(() => {
        const search = searchText.toLowerCase();

        if (!userLocation) {
            setFilteredBusinesses(
                businesses.filter(b =>
                    b.name.toLowerCase().includes(search)
                )
            );
            return;
        }

        const withinRange = businesses.filter(b => {
            const distance = calculateDistanceMiles(
                userLocation.latitude,
                userLocation.longitude,
                b.latitude,
                b.longitude
            );

            return distance <= searchRadiusMiles &&
                b.name.toLowerCase().includes(search);
        });

        setFilteredBusinesses(withinRange);
    }, [searchText, businesses, userLocation]);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            if (!user) {
                router.push('/loginsignup');
            } else {
                fetchBusinesses();
                requestLocation();
            }
        });
        return () => unsubscribe();
    }, [router]);

    useEffect(() => {
        updateFilteredBusinesses();
    }, [updateFilteredBusinesses]);

    const handleViewProfile = (businessId: string, businessName: string) => {
        router.push(`/individualsendclientrequest?businessId=${businessId}&businessName=${encodeURIComponent(businessName)}`);
    };

    return (
        <div className="min-h-screen bg-[color:var(--color-background)] px-4 py-6">
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
                    {t('title')}
                </h1>

                {/* Search Input */}
                <input
                    type="text"
                    placeholder={t('search_placeholder')}
                    className="w-full px-4 py-2 border rounded-md mb-6 text-sm"
                    value={searchText}
                    onChange={e => setSearchText(e.target.value)}
                />

                {/* Business List */}
                {filteredBusinesses.length === 0 ? (
                    <p className="text-center text-sm text-gray-500">{t('no_results')}</p>
                ) : (
                    <div className="space-y-4">
                        {filteredBusinesses.map(b => (
                            <div
                                key={b.id}
                                className="border-2 border-[color:var(--color-accent)] rounded-xl p-4 bg-white shadow-sm"
                            >
                                <h2 className="text-base font-semibold">{b.name}</h2>
                                <p className="text-sm text-gray-600">{b.location}</p>
                                <p className="text-sm text-[color:var(--color-accent)] font-medium">{b.type}</p>

                                <div className="flex justify-end mt-4">
                                    <button
                                        onClick={() => handleViewProfile(b.id, b.name)}
                                        className="px-4 py-2 rounded-md bg-green-800 text-white hover:bg-green-700 transition text-sm"
                                    >
                                        {t('view_profile')}
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
