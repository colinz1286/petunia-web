'use client';

import { useEffect, useState, useCallback } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { useTranslations, useLocale } from 'next-intl';
import {
    getAuth,
    onAuthStateChanged
} from 'firebase/auth';
import {
    getFirestore,
    doc,
    getDoc,
    collection,
    query,
    where,
    getDocs,
    setDoc,
    Timestamp
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

function getErrorMessage(err: unknown): string {
    return err instanceof Error ? err.message : 'Unknown error';
}

export default function IndividualSendClientRequestPage() {
    const t = useTranslations('individualSendClientRequest');
    const searchParams = useSearchParams();
    const router = useRouter();
    const locale = useLocale();

    const businessId = searchParams.get('businessId') ?? '';
    const businessName = searchParams.get('businessName') ?? '';

    const [userId, setUserId] = useState('');
    const [isApprovedClient, setIsApprovedClient] = useState(false);
    const [hasRequestedAlready, setHasRequestedAlready] = useState(false);
    const [isLoadingStatus, setIsLoadingStatus] = useState(true);
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const [businessAddress, setBusinessAddress] = useState('');
    const [businessPhone, setBusinessPhone] = useState('');
    const [servicesOffered, setServicesOffered] = useState<string[]>([]);
    const [isLoadingBusinessInfo, setIsLoadingBusinessInfo] = useState(true);

    const checkClientStatus = useCallback(async (uid: string) => {
        try {
            const clientDoc = await getDoc(doc(db, 'userApprovedBusinesses', businessId, 'clients', uid));
            if (clientDoc.exists()) {
                setIsApprovedClient(true);
                setIsLoadingStatus(false);
                return;
            }

            const q = query(
                collection(db, 'joinRequests'),
                where('businessId', '==', businessId),
                where('userId', '==', uid),
                where('status', '==', 'pending')
            );
            const snapshot = await getDocs(q);
            setHasRequestedAlready(!snapshot.empty);
        } catch (err: unknown) {
            setErrorMessage(t('must_be_logged_in') + ' ' + getErrorMessage(err));
        } finally {
            setIsLoadingStatus(false);
        }
    }, [businessId, t]);

    const fetchBusinessInfo = useCallback(async () => {
        try {
            const docSnap = await getDoc(doc(db, 'businesses', businessId));
            const data = docSnap.data();
            if (!data) return;

            const addr = data.businessAddress ?? {};
            const fullAddress = `${addr.street ?? ''}, ${addr.city ?? ''}, ${addr.state ?? ''} ${addr.zipCode ?? ''}`;
            setBusinessAddress(fullAddress);
            setBusinessPhone(data.businessPhone ?? '');

            const services: string[] = [];
            if (data.offersBoarding) services.push('Boarding');
            if (data.offersDaycare) services.push('Daycare');
            if (data.offersGrooming) services.push('Grooming');
            if (data.offersTraining) services.push('Training');
            setServicesOffered(services);
        } finally {
            setIsLoadingBusinessInfo(false);
        }
    }, [businessId]);

    const sendClientRequest = async () => {
        try {
            const businessSnap = await getDoc(doc(db, 'businesses', businessId));
            const ownerId = businessSnap.data()?.ownerId ?? '';

            const userSnap = await getDoc(doc(db, 'users', userId));
            const userData = userSnap.data() ?? {};
            const fullName = `${userData.firstName ?? ''} ${userData.lastName ?? ''}`.trim();
            const email = userData.email ?? '';

            const requestRef = doc(collection(db, 'joinRequests'));
            await setDoc(requestRef, {
                requestId: requestRef.id,
                businessId,
                ownerId,
                userId,
                userName: fullName || t('unknown_user'),
                userEmail: email,
                status: 'pending',
                timestamp: Timestamp.now()
            });

            setShowSuccess(true);
            setHasRequestedAlready(true);
        } catch (err: unknown) {
            setErrorMessage(t('error_sending_request') + ' ' + getErrorMessage(err));
        }
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            if (!user) {
                router.push(`/${locale}/loginsignup`);
                return;
            }
            setUserId(user.uid);
            checkClientStatus(user.uid);
        });
        return () => unsubscribe();
    }, [checkClientStatus, locale, router]);

    useEffect(() => {
        if (userId) {
            fetchBusinessInfo();
        }
    }, [userId, fetchBusinessInfo]);

    return (
        <div className="min-h-screen bg-[color:var(--color-background)] text-[color:var(--color-foreground)] px-4 py-6">
            <div className="w-full max-w-md mx-auto space-y-6 px-2 sm:px-4">

                {/* Back to Search Businesses */}
                <button
                    onClick={() => router.push(`/${locale}/individualsearchbusinesses`)}
                    className="text-sm text-[color:var(--color-accent)] underline hover:text-[color:var(--color-accent)]"
                >
                    ← {t('back_to_search_businesses', { defaultValue: 'Back to Search Businesses' })}
                </button>

                {/* Business Name */}
                <h1 className="text-3xl font-bold text-center text-[color:var(--color-accent)] mb-2">
                    {businessName}
                </h1>

                {/* Status Display */}
                {isLoadingStatus ? (
                    <p className="text-center text-sm text-gray-500">{t('checking_client_status')}</p>
                ) : errorMessage ? (
                    <p className="text-center text-sm text-red-600">{errorMessage}</p>
                ) : isApprovedClient ? (
                    <p className="text-center text-sm text-green-600">{t('already_approved_client')}</p>
                ) : hasRequestedAlready ? (
                    <p className="text-center text-sm text-yellow-600">{t('request_already_sent')}</p>
                ) : (
                    <div className="space-y-3 text-sm">
                        <p>{t('client_request_prompt')}</p>
                        <button
                            onClick={() => setShowConfirmation(true)}
                            className="w-full bg-[color:var(--color-accent)] text-white py-2 rounded text-sm"
                        >
                            {t('send_client_request_button')}
                        </button>
                    </div>
                )}

                <hr />

                {/* Business Info */}
                {isLoadingBusinessInfo ? (
                    <p className="text-sm text-gray-500">{t('loading_business_info')}</p>
                ) : (
                    <div className="space-y-4 text-sm">
                        {businessAddress && <p>📍 {businessAddress}</p>}
                        {businessPhone && <p>📞 {businessPhone}</p>}
                        {servicesOffered.length > 0 && (
                            <div>
                                <p className="font-semibold">{t('services_offered_label')}</p>
                                <ul className="list-disc ml-5">
                                    {servicesOffered.map(service => (
                                        <li key={service}>{service}</li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                )}

                {/* Confirmation Dialog */}
                {showConfirmation && (
                    <div className="bg-white p-4 rounded shadow space-y-4 border">
                        <p className="font-medium text-sm">{t('confirm_send_request_title')}</p>
                        <div className="flex justify-between gap-3">
                            <button
                                onClick={() => sendClientRequest()}
                                className="bg-[color:var(--color-accent)] text-white px-4 py-2 rounded text-sm"
                            >
                                {t('yes_send_request_button')}
                            </button>
                            <button
                                onClick={() => setShowConfirmation(false)}
                                className="text-red-600 underline text-sm"
                            >
                                {t('cancel_button')}
                            </button>
                        </div>
                    </div>
                )}

                {/* Success Alert */}
                {showSuccess && (
                    <div className="bg-green-100 text-green-800 p-3 rounded shadow text-center font-medium text-sm">
                        <p>{t('request_sent_alert_title')}</p>
                        <p className="text-sm">{t('request_sent_alert_message')}</p>
                    </div>
                )}
            </div>
        </div>
    );
}
