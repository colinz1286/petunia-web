'use client';

import { useEffect, useState, useCallback, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { useTranslations, useLocale } from 'next-intl';

import {
    getFirestore,
    collection,
    getDocs,
    DocumentData,
} from 'firebase/firestore';
import {
    getAuth,
    onAuthStateChanged,
} from 'firebase/auth';
import { initializeApp, getApps, getApp } from 'firebase/app';

// --- Firebase ---
const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY!,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN!,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID!,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET!,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID!,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID!,
};
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

// --- Types ---
type Business = {
    id: string;
    name: string;
    location: string;
    type: string;
    latitude: number;
    longitude: number;
};

type BusinessTypeFilter = 'all' | 'boardingDaycare' | 'breeder';

// Small epsilon to treat 0/blank coords as "missing"
const COORD_EPS = 0.0001;
const SEARCH_RADIUS_MILES = 75;

// --- Page ---
export default function IndividualSearchBusinessesPage() {
    const t = useTranslations('individualSearchBusinesses');
    const locale = useLocale();
    const router = useRouter();

    // iOS parity: search text + segmented type filter
    const [searchText, setSearchText] = useState('');
    const [selectedType, setSelectedType] = useState<BusinessTypeFilter>('all');

    // Data + derived
    const [businesses, setBusinesses] = useState<Business[]>([]);
    const [filteredBusinesses, setFilteredBusinesses] = useState<Business[]>([]);

    // Location
    const [userLocation, setUserLocation] = useState<GeolocationCoordinates | null>(null);

    // --- Helpers ---
    const toMilesBetween = useCallback(
        (lat1: number, lon1: number, lat2: number, lon2: number) => {
            const toRad = (v: number) => (v * Math.PI) / 180;
            const R_km = 6371;
            const dLat = toRad(lat2 - lat1);
            const dLon = toRad(lon2 - lon1);
            const a =
                Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
                Math.sin(dLon / 2) * Math.sin(dLon / 2);
            const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
            return R_km * c * 0.621371; // km -> miles
        },
        []
    );

    const typeLabels = useMemo(() => ({
        all: t('type_all', { defaultValue: 'All' }),
        boardingDaycare: t('type_boarding_daycare', { defaultValue: 'Boarding/Daycare' }),
        breeder: t('type_breeder', { defaultValue: 'Breeder' }),
    }), [t]);

    // --- Data: fetch businesses (iOS parity: simple collection read) ---
    const fetchBusinesses = useCallback(async () => {
        try {
            const snapshot = await getDocs(collection(db, 'businesses'));
            const loaded: Business[] = [];

            snapshot.forEach(doc => {
                const data = doc.data() as DocumentData;

                const addressMap = (data.businessAddress ?? {}) as Record<string, string | undefined>;
                const street = addressMap.street || t('unknown_label', { defaultValue: 'Unknown' });
                const city = addressMap.city || '';
                const state = addressMap.state || '';
                const zip = addressMap.zipCode || '';
                const fullAddress = `${street}, ${city}, ${state} ${zip}`.trim();

                loaded.push({
                    id: doc.id,
                    name: data.businessName || t('unknown_label', { defaultValue: 'Unknown' }),
                    location: fullAddress,
                    type: data.businessType || t('unspecified_label', { defaultValue: 'Unspecified' }),
                    latitude: typeof data.latitude === 'number' ? data.latitude : 0,
                    longitude: typeof data.longitude === 'number' ? data.longitude : 0,
                });
            });

            setBusinesses(loaded);
        } catch (error) {
            // Parity with iOS print
            console.error('❌ Error fetching businesses:', error);
        }
    }, [t]);

    // --- Location: request once (iOS parity: requestWhenInUseAuthorization + single fix) ---
    const requestLocation = useCallback(() => {
        if (!navigator.geolocation) return;
        navigator.geolocation.getCurrentPosition(
            position => {
                setUserLocation(position.coords);
            },
            error => {
                console.warn('⚠️ Error getting location:', error);
            },
            { enableHighAccuracy: false, timeout: 15000, maximumAge: 60000 }
        );
    }, []);

    // --- Filtering (mirror the iOS Swift logic closely) ---
    const updateFilteredBusinesses = useCallback(() => {
        const q = searchText.trim().toLowerCase();

        const matchesQuery = (b: Business) => {
            if (!q) return true;
            return b.name.toLowerCase().includes(q) || b.type.toLowerCase().includes(q);
        };

        const matchesType = (b: Business) => {
            switch (selectedType) {
                case 'all':
                    return true;
                case 'breeder':
                    return b.type.localeCompare('Breeder', undefined, { sensitivity: 'accent' }) === 0;
                case 'boardingDaycare':
                    return b.type.localeCompare('Boarding/Daycare', undefined, { sensitivity: 'accent' }) === 0;
                default:
                    return true;
            }
        };

        // If no user location: filter by type + text only
        if (!userLocation) {
            console.warn('⚠️ No user location available — skipping distance filter.');
            setFilteredBusinesses(
                businesses.filter(b => matchesType(b) && matchesQuery(b))
            );
            return;
        }

        // With location: include within radius; include items w/ missing coords if they match type/query
        const results = businesses.filter((b) => {
            if (!matchesType(b) || !matchesQuery(b)) return false;

            const hasCoords =
                Math.abs(b.latitude) > COORD_EPS || Math.abs(b.longitude) > COORD_EPS;

            if (!hasCoords) {
                // Show entries that match text/type even if coords are missing
                return true;
            }

            const distanceMiles = toMilesBetween(
                userLocation.latitude,
                userLocation.longitude,
                b.latitude,
                b.longitude
            );

            return distanceMiles <= SEARCH_RADIUS_MILES;
        });

        // Optional: sort by distance when possible (items without coords go last)
        results.sort((a, b) => {
            const aValid = Math.abs(a.latitude) > COORD_EPS || Math.abs(a.longitude) > COORD_EPS;
            const bValid = Math.abs(b.latitude) > COORD_EPS || Math.abs(b.longitude) > COORD_EPS;

            if (aValid && bValid) {
                const da = toMilesBetween(userLocation.latitude, userLocation.longitude, a.latitude, a.longitude);
                const db = toMilesBetween(userLocation.latitude, userLocation.longitude, b.latitude, b.longitude);
                return da - db;
            }
            if (aValid && !bValid) return -1;
            if (!aValid && bValid) return 1;
            return a.name.localeCompare(b.name);
        });

        setFilteredBusinesses(results);
    }, [businesses, searchText, selectedType, userLocation, toMilesBetween]);

    // --- Lifecycle ---
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            if (!user) {
                router.push('/loginsignup');
                return;
            }
            fetchBusinesses();
            requestLocation();
        });
        return () => unsubscribe();
    }, [router, fetchBusinesses, requestLocation]);

    useEffect(() => {
        updateFilteredBusinesses();
    }, [updateFilteredBusinesses]);

    // --- Actions ---
    const handleViewProfile = (businessId: string, businessName: string) => {
        router.push(
            `/${locale}/individualsendclientrequest?businessId=${encodeURIComponent(
                businessId
            )}&businessName=${encodeURIComponent(businessName)}`
        );
    };

    // --- UI ---
    return (
        <div className="min-h-screen bg-[color:var(--color-background)] px-4 py-6">
            <div className="w-full max-w-2xl mx-auto px-2 sm:px-4">
                {/* Back to Dashboard */}
                <button
                    onClick={() => router.push(`/${locale}/individualdashboard`)}
                    className="mb-6 text-sm text-[color:var(--color-accent)] underline hover:opacity-90"
                >
                    ← {t('back_to_dashboard', { defaultValue: 'Back to Dashboard' })}
                </button>

                {/* Page Title */}
                <h1 className="text-3xl font-bold text-center text-[color:var(--color-accent)] mb-6">
                    {t('title', { defaultValue: 'Search Businesses' })}
                </h1>

                {/* Search Input */}
                <input
                    type="text"
                    placeholder={t('search_placeholder', { defaultValue: 'Search for businesses…' })}
                    className="w-full px-4 py-2 border rounded-md mb-4 text-sm bg-white"
                    value={searchText}
                    onChange={e => setSearchText(e.target.value)}
                />

                {/* Type Filter (segmented control parity) */}
                <div className="mb-6">
                    <label className="block text-xs font-medium text-gray-600 mb-2 text-center">
                        {t('filter_type_label', { defaultValue: 'Type' })}
                    </label>
                    <div
                        role="tablist"
                        aria-label={t('filter_type_label', { defaultValue: 'Type' })}
                        className="flex flex-wrap justify-center gap-2"
                    >
                        {([
                            { key: 'all', label: typeLabels.all },
                            { key: 'boardingDaycare', label: typeLabels.boardingDaycare },
                            { key: 'breeder', label: typeLabels.breeder },
                        ] as { key: BusinessTypeFilter; label: string }[]).map(({ key, label }) => {
                            const selected = selectedType === key;
                            return (
                                <button
                                    key={key}
                                    role="tab"
                                    aria-selected={selected}
                                    onClick={() => setSelectedType(key)}
                                    className={`px-3 py-2 rounded border w-full sm:w-auto ${selected
                                        ? 'bg-[#2c4a30] text-white border-[#2c4a30]'
                                        : 'bg-white text-[#2c4a30] border-[#2c4a30] hover:bg-[#e4dbcb]'
                                        } transition`}
                                >
                                    {label}
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Business List */}
                {filteredBusinesses.length === 0 ? (
                    <p className="text-center text-sm text-gray-500">
                        {t('no_results', { defaultValue: 'No businesses found.' })}
                    </p>
                ) : (
                    <div className="space-y-4">
                        {filteredBusinesses.map(b => (
                            <div
                                key={b.id}
                                className="border-2 border-[#2c4a30] rounded-xl p-4 bg-white shadow-sm"
                            >
                                <h2 className="text-base font-semibold text-[#2c4a30]">{b.name}</h2>
                                <p className="text-sm text-gray-700">{b.location}</p>
                                <p className="text-sm text-[#2c4a30] font-medium">{b.type}</p>

                                {/* Button area */}
                                <div className="mt-4 pt-2 border-t border-gray-200 flex flex-col sm:flex-row sm:justify-end">
                                    <button
                                        onClick={() => handleViewProfile(b.id, b.name)}
                                        className="mt-2 sm:mt-0 px-4 py-2 rounded border border-[#2c4a30] text-[#2c4a30] font-medium hover:bg-[#e4dbcb] transition w-full sm:w-auto"
                                    >
                                        {t('view_profile', { defaultValue: 'View Profile' })}
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div >
    );
}
