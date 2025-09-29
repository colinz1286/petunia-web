'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { useState, useEffect } from 'react';
import { getAuth } from 'firebase/auth';
import { onAuthStateChanged } from 'firebase/auth';
import {
    getFirestore,
    collection,
    query,
    where,
    getDocs,
    DocumentData
} from 'firebase/firestore';
import { initializeApp, getApps } from 'firebase/app';

// ✅ Firebase init safeguard
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

export default function Page() {
    const t = useTranslations('walkerSitterDashboard');
    const [businessId, setBusinessId] = useState<string | null>(null);
    const [isVerified, setIsVerified] = useState(false);
    const [loading, setLoading] = useState(true);

    // ✅ Fetch business doc for logged-in user
    useEffect(() => {
        const unsub = onAuthStateChanged(auth, async (user) => {
            setLoading(true);

            if (!user) {
                setLoading(false);
                return;
            }

            try {
                const col = collection(db, 'businesses');

                // 1) New ownership model: ownerIds contains uid
                const r1 = await getDocs(query(col, where('ownerIds', 'array-contains', user.uid)));

                // 2) Legacy fallback: ownerId == uid
                const d = !r1.empty
                    ? r1.docs[0]
                    : (await getDocs(query(col, where('ownerId', '==', user.uid)))).docs[0];

                if (d) {
                    const data = d.data() as DocumentData;
                    setBusinessId(d.id);
                    setIsVerified(Boolean(data.isVerified));
                }
            } catch (err) {
                console.error('Error resolving walker/sitter business:', err);
            } finally {
                setLoading(false);
            }
        });

        return () => unsub();
    }, []);

    return (
        <main className="min-h-screen bg-[#f6efe4] text-[#2c4a30] px-4 py-10">
            <div className="max-w-2xl mx-auto space-y-6">
                {/* Title */}
                <h1 className="text-3xl font-bold text-center text-brandAccent">
                    {t('business_dashboard_greeting')}
                </h1>

                {/* Verification status */}
                <div className="flex items-center justify-between px-2">
                    <div className="flex items-center space-x-2">
                        <span
                            className={`inline-flex items-center text-sm font-semibold ${isVerified ? 'text-green-600' : 'text-red-600'
                                }`}
                        >
                            {isVerified ? t('business_verified') : t('business_not_verified')}
                        </span>
                    </div>
                </div>

                <hr className="border-gray-300" />

                {/* Navigation buttons */}
                <div className="space-y-3">
                    {/* 1. Today’s Visits */}
                    <DashboardButton
                        href={`/walkersitterdashboard/todayvisits`}
                        label={t('ws_todays_visits')}
                        disabled={!businessId}
                    />

                    {/* 2. Upcoming Visits */}
                    <DashboardButton
                        href={`/walkersitterdashboard/upcomingvisits`}
                        label={t('ws_upcoming_visits')}
                        disabled={!businessId}
                    />

                    {/* 3. Pending Requests */}
                    <DashboardButton
                        href={`/walkersitterdashboard/pendingrequests`}
                        label={t('pending_requests')}
                        disabled={!businessId}
                    />

                    {/* 4. Notifications */}
                    <DashboardButton
                        href={`/walkersitterdashboard/notifications`}
                        label={t('notifications')}
                        disabled={!businessId}
                    />

                    {/* 5. Clients & Pets */}
                    <DashboardButton
                        href={`/walkersitterdashboard/clientsandpets`}
                        label={t('ws_clients_pets')}
                        disabled={!businessId}
                    />

                    {/* 6. Visit Reports */}
                    <DashboardButton
                        href={`/walkersitterdashboard/visitreports`}
                        label={t('ws_visit_reports')}
                        disabled={!businessId}
                    />

                    {/* 7. Reminders */}
                    <DashboardButton
                        href={`/walkersitterdashboard/reminders`}
                        label={t('reminders')}
                        disabled={!businessId}
                    />

                    {/* 8. Business Settings */}
                    <DashboardButton
                        href={`/walkersitterdashboard/businesssettings`}
                        label={t('business_settings_title')}
                        disabled={!businessId}
                    />

                    {/* Logout */}
                    <button
                        onClick={() => auth.signOut()}
                        className="w-full px-4 py-3 bg-red-600 text-white font-semibold rounded"
                    >
                        {t('logout')}
                    </button>

                    {loading && (
                        <p className="text-xs text-center text-gray-600">
                            {t('resolving_business_id')}
                        </p>
                    )}
                </div>
            </div>
        </main>
    );
}

function DashboardButton({
    href,
    label,
    disabled,
}: {
    href: string;
    label: string;
    disabled?: boolean;
}) {
    return (
        <Link
            href={disabled ? '#' : href}
            aria-disabled={disabled}
            className={`block w-full text-center px-4 py-3 rounded font-semibold text-white ${disabled
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-brandAccent hover:bg-brandAccent/80'
                }`}
        >
            {label}
        </Link>
    );
}
