'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';
import {
    getAuth,
    onAuthStateChanged
} from 'firebase/auth';
import {
    getFirestore,
    collection,
    getDoc,
    getDocs,
    doc
} from 'firebase/firestore';
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

type Business = {
    id: string;
    name: string;
};

export default function IndividualBookServicesPage() {
    const t = useTranslations('individualBookServices');
    const locale = useLocale();
    const router = useRouter();

    const [businesses, setBusinesses] = useState<Business[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            if (!user) {
                router.push(`/${locale}/loginsignup`);
                return;
            }

            const uid = user.uid;
            // setUserId(uid); ← REMOVE THIS LINE
            await fetchApprovedBusinesses(uid);
        });

        return () => unsubscribe();
    }, [locale, router]);

    const fetchApprovedBusinesses = async (uid: string) => {
        try {
            const querySnap = await getDocs(
                collection(db, 'businesses')
            );

            const result: Business[] = [];

            for (const docSnap of querySnap.docs) {
                const data = docSnap.data();
                if (data.businessType !== 'Boarding/Daycare') continue;

                const bizId = docSnap.id;
                const bizName = data.businessName || 'Unnamed Business';

                const clientSnap = await getDoc(
                    doc(db, 'userApprovedBusinesses', bizId, 'clients', uid)
                );

                if (clientSnap.exists() && Object.keys(clientSnap.data()).length > 0) {
                    result.push({ id: bizId, name: bizName });
                }
            }

            setBusinesses(result);
        } catch (err) {
            console.error('❌ Failed to fetch businesses:', err);
        } finally {
            setIsLoading(false);
        }
    };

    const handleBusinessClick = async (bizId: string) => {
        router.push(`/${locale}/individualselectservice?businessId=${bizId}`);
    };

    return (
        <div className="min-h-screen bg-[color:var(--color-background)] text-[color:var(--color-foreground)] px-4 py-6">
            <div className="w-full max-w-md mx-auto px-2 sm:px-4">
                <button
                    onClick={() => router.push(`/${locale}/individualdashboard`)}
                    className="mb-6 text-sm text-[color:var(--color-accent)] underline"
                >
                    ← {t('back_to_dashboard')}
                </button>

                <h1 className="text-3xl font-bold text-center text-[color:var(--color-accent)] mb-6">
                    {t('book_services_title')}
                </h1>

                {isLoading ? (
                    <p className="text-center text-gray-500 text-sm">{t('loading_approved_businesses')}</p>
                ) : businesses.length === 0 ? (
                    <p className="text-center text-gray-500 text-sm">{t('no_approved_businesses')}</p>
                ) : (
                    <div className="space-y-4">
                        {businesses.map((biz) => (
                            <button
                                key={biz.id}
                                onClick={() => handleBusinessClick(biz.id)}
                                className="flex items-center w-full px-4 py-3 bg-white rounded shadow hover:bg-gray-50 border border-gray-300"
                            >
                                <span className="text-3xl mr-4 text-[color:var(--color-accent)]">🐾</span>
                                <span className="flex-1 text-left font-semibold text-base sm:text-lg">{biz.name}</span>
                                <span className="text-gray-400 text-xl">›</span>
                            </button>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
