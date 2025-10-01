'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
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
    const [isVerified, setIsVerified] = useState(false);

    useEffect(() => {
        const unsub = onAuthStateChanged(auth, async (user) => {
            if (!user) return;

            try {
                const col = collection(db, 'businesses');
                const r1 = await getDocs(query(col, where('ownerIds', 'array-contains', user.uid)));
                const d = !r1.empty
                    ? r1.docs[0]
                    : (await getDocs(query(col, where('ownerId', '==', user.uid)))).docs[0];

                if (d) {
                    const data = d.data() as DocumentData;
                    setIsVerified(Boolean(data.isVerified));
                }
            } catch (err) {
                console.error('Error resolving walker/sitter business:', err);
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
                    <DashboardButton
                        href={`/walkersitterdashboard/todayvisits`}
                        label={t('ws_todays_visits')}
                    />

                    <DashboardButton
                        href={`/walkersitterdashboard/upcomingvisits`}
                        label={t('ws_upcoming_visits')}
                    />

                    <DashboardButton
                        href={`/walkersitterpendingrequests`}
                        label={t('pending_requests')}
                    />

                    <DashboardButton
                        href={`/walkersitterdashboard/notifications`}
                        label={t('notifications')}
                    />

                    <DashboardButton
                        href={`/walkersitterdashboard/clientsandpets`}
                        label={t('ws_clients_pets')}
                    />

                    <DashboardButton
                        href={`/walkersitterdashboard/visitreports`}
                        label={t('ws_visit_reports')}
                    />

                    <DashboardButton
                        href={`/walkersitterdashboard/reminders`}
                        label={t('reminders')}
                    />

                    <DashboardButton
                        href={`/walkersitterbusinesssettings`}
                        label={t('business_settings_title')}
                    />

                    {/* Logout */}
                    <button
                        onClick={() => auth.signOut()}
                        className="w-full px-4 py-3 bg-red-600 text-white font-semibold rounded"
                    >
                        {t('logout')}
                    </button>
                </div>
            </div>
        </main>
    );
}

function DashboardButton({
    href,
    label,
}: {
    href: string;
    label: string;
}) {
    return (
        <Link
            href={href}
            className="block w-full text-center px-4 py-3 rounded font-semibold text-white transition"
            style={{
                backgroundColor: '#2c4a30',          // ✅ Hardcoded brand accent green
            }}
            onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor = '#243823'; // darker hover
            }}
            onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor = '#2c4a30'; // reset
            }}
        >
            {label}
        </Link>
    );
}
