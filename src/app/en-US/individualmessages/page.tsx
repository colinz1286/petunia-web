'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import {
    getAuth,
    onAuthStateChanged,
} from 'firebase/auth';
import {
    getFirestore,
    collection,
    doc,
    getDocs,
    getDoc,
} from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import Image from 'next/image';

// ✅ Firebase Initialization
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

// ✅ Type Definitions
interface Business {
    id: string;
    name: string;
}

export default function IndividualMessagesPage() {
    const router = useRouter();
    const locale = useLocale();
    const t = useTranslations('individualMessages');

    const [businesses, setBusinesses] = useState<Business[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        const unsub = onAuthStateChanged(auth, async (user) => {
            if (!user) {
                router.push(`/${locale}/loginsignup`);
                return;
            }
            await fetchApprovedBusinesses(user.uid);
        });
        return () => unsub();
    }, [router, locale]);

    // ✅ Fetch Approved Businesses
    const fetchApprovedBusinesses = async (uid: string) => {
        try {
            console.log(`📡 Fetching approved businesses for userId=${uid}`);
            setIsLoading(true);
            const businessesSnap = await getDocs(collection(db, 'businesses'));
            const approved: Business[] = [];

            for (const businessDoc of businessesSnap.docs) {
                const businessId = businessDoc.id;
                const businessName = businessDoc.data().businessName || 'Unnamed Business';
                const clientDocRef = doc(db, 'userApprovedBusinesses', businessId, 'clients', uid);
                const clientDocSnap = await getDoc(clientDocRef);
                if (clientDocSnap.exists()) {
                    approved.push({ id: businessId, name: businessName });
                }
            }

            // ✅ Sort alphabetically before setting state
            approved.sort((a, b) => a.name.localeCompare(b.name));
            setBusinesses(approved);
            setErrorMessage('');
            console.log(`✅ Found ${approved.length} approved businesses`);
        } catch (error: unknown) { // ✅ Use unknown instead of any
            if (error instanceof Error) {
                console.error('❌ Error fetching approved businesses:', error.message);
            } else {
                console.error('❌ Error fetching approved businesses:', error);
            }
            setErrorMessage('Failed to load approved businesses.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-[color:var(--color-background)] text-[color:var(--color-foreground)] px-4 py-6">
            <div className="max-w-md mx-auto">
                <h1 className="text-2xl font-bold text-[color:var(--color-accent)] text-center mb-6">
                    {t('header_title', { default: 'Tap on a Business to Send a Message' })}
                </h1>

                {isLoading ? (
                    <div className="flex justify-center items-center py-10">
                        <div className="text-center">
                            <div className="animate-spin h-8 w-8 border-4 border-[color:var(--color-accent)] border-t-transparent rounded-full mx-auto mb-3"></div>
                            <p className="text-sm text-gray-500">
                                {t('loading_businesses', { default: 'Loading your approved businesses...' })}
                            </p>
                        </div>
                    </div>
                ) : errorMessage ? (
                    <p className="text-center text-red-500">{errorMessage}</p>
                ) : businesses.length === 0 ? (
                    <div className="text-center mt-12 space-y-4">
                        <Image
                            src="/icons/chat-empty.png"
                            alt="No Messages"
                            width={64}
                            height={64}
                            className="mx-auto opacity-70"
                        />
                        <p className="font-semibold text-lg">
                            {t('no_businesses_header', { default: 'You are not an approved client of any business yet.' })}
                        </p>
                        <p className="text-sm text-gray-500 max-w-xs mx-auto">
                            {t('no_businesses_subheader', {
                                default: 'Or, your approved businesses do not allow messaging through this app.',
                            })}
                        </p>
                    </div>
                ) : (
                    <div className="space-y-3">
                        {businesses.map((business) => (
                            <button
                                key={business.id}
                                onClick={() => {
                                    console.log(`💬 Navigating to chat with ${business.name} (${business.id})`);
                                    router.push(`/${locale}/individualmessagebusiness?businessId=${business.id}&businessName=${encodeURIComponent(business.name)}`);
                                }}
                                className="w-full flex items-center justify-between bg-white dark:bg-gray-800 shadow-sm rounded-lg px-4 py-3 hover:shadow-md transition-all"
                            >
                                <div className="flex items-center space-x-3 text-left">
                                    <div>
                                        <p className="font-semibold text-[color:var(--color-accent)]">{business.name}</p>
                                        <p className="text-sm text-gray-500">
                                            {t('tap_to_message', { default: 'Tap to message this business' })}
                                        </p>
                                    </div>
                                </div>
                                <span className="text-gray-400">&rsaquo;</span>
                            </button>
                        ))}
                    </div>
                )}

                {/* Back Button */}
                <div className="mt-8 text-center">
                    <Link
                        href={`/${locale}/individualdashboard`}
                        className="text-[color:var(--color-accent)] hover:underline"
                    >
                        &larr; {t('back', { default: 'Back' })}
                    </Link>
                </div>
            </div>
        </div>
    );
}
