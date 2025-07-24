'use client';

import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';
import {
    getFirestore,
    doc,
    getDoc
} from 'firebase/firestore';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
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

export default function IndividualSelectServicePage() {
    const t = useTranslations('individualSelectService');
    const locale = useLocale();
    const router = useRouter();
    const searchParams = useSearchParams();
    const businessId = searchParams.get('businessId');

    const [businessName, setBusinessName] = useState(t('default_business_name'));
    const [servicesOffered, setServicesOffered] = useState<string[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [showComingSoon, setShowComingSoon] = useState(false);

    useEffect(() => {
        const unsub = onAuthStateChanged(auth, (user) => {
            if (!user) {
                router.push(`/${locale}/loginsignup`);
                return;
            }

            if (businessId) {
                loadBusinessServices(businessId);
            } else {
                router.push(`/${locale}/individualdashboard`);
            }
        });

        return () => unsub();
    }, [businessId, locale, router]);

    const loadBusinessServices = async (bizId: string) => {
        try {
            const snap = await getDoc(doc(db, 'businesses', bizId));
            const data = snap.data();

            if (!data) {
                setIsLoading(false);
                return;
            }

            setBusinessName(data.businessName || t('default_business_name'));

            const offered: string[] = [];
            if (data.offersBoarding) offered.push('boarding');
            if (data.offersDaycare) offered.push('daycare');
            if (data.offersGrooming) offered.push('grooming');
            if (data.offersTraining) offered.push('training');

            setServicesOffered(offered);
        } catch (err) {
            console.error('❌ Error loading business:', err);
        } finally {
            setIsLoading(false);
        }
    };

    const handleServiceClick = (service: string) => {
        switch (service) {
            case 'daycare':
                router.push(`/${locale}/individualbookdaycare?businessId=${businessId}&businessName=${encodeURIComponent(businessName)}`);
                break;
            case 'boarding':
                router.push(`/${locale}/individualbookboarding?businessId=${businessId}&businessName=${encodeURIComponent(businessName)}`);
                break;
            default:
                setShowComingSoon(true);
                break;
        }
    };

    return (
        <div className="min-h-screen bg-[color:var(--color-background)] text-[color:var(--color-foreground)] px-4 py-6">
            <div className="w-full max-w-md mx-auto text-center space-y-4 px-2 sm:px-4">
                {/* ✅ Back Button */}
                <button
                    onClick={() => router.push(`/${locale}/individualbookservices`)}
                    className="mb-4 text-sm text-[color:var(--color-accent)] underline hover:opacity-90"
                >
                    ← {t('back_to_book_services')}
                </button>

                <h1 className="text-3xl font-bold text-[color:var(--color-accent)]">
                    {businessName}
                </h1>

                <p className="text-sm text-gray-500">{t('select_service_prompt')}</p>

                {isLoading ? (
                    <p className="text-sm text-gray-500">{t('loading_services')}</p>
                ) : servicesOffered.length === 0 ? (
                    <p className="text-sm text-gray-500">{t('no_services_available')}</p>
                ) : (
                    <div className="space-y-3">
                        {servicesOffered.includes('daycare') && (
                            <button
                                onClick={() => handleServiceClick('daycare')}
                                className="w-full max-w-xs mx-auto bg-green-900 text-white py-3 rounded hover:opacity-90 block text-sm"
                            >
                                {t('daycare_service')}
                            </button>
                        )}

                        {servicesOffered.includes('boarding') && (
                            <button
                                onClick={() => handleServiceClick('boarding')}
                                className="w-full max-w-xs mx-auto bg-green-900 text-white py-3 rounded hover:opacity-90 block text-sm"
                            >
                                {t('boarding_service')}
                            </button>
                        )}

                        {(servicesOffered.includes('grooming') || servicesOffered.includes('training')) && (
                            <button
                                onClick={() => handleServiceClick('grooming')}
                                className="w-full max-w-xs mx-auto bg-gray-400 text-white py-3 rounded hover:opacity-90 block text-sm"
                            >
                                {t('other_services_button')}
                            </button>
                        )}
                    </div>
                )}

                {showComingSoon && (
                    <div className="mt-6 p-4 border border-yellow-500 bg-yellow-100 text-yellow-800 rounded text-sm">
                        <p className="font-semibold">{t('service_not_ready_title')}</p>
                        <p className="mt-1">{t('service_not_ready_message')}</p>
                        <button
                            onClick={() => setShowComingSoon(false)}
                            className="mt-3 underline"
                        >
                            {t('ok_button')}
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
