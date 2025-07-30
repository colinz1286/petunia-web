'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';
import {
    getAuth,
    onAuthStateChanged,
} from 'firebase/auth';
import {
    getFirestore,
    collection,
    query,
    where,
    getDocs,
    getDoc,
    updateDoc,
    setDoc,
    doc,
    Timestamp,
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

interface JoinRequest {
    id: string;
    userId: string;
    userName: string;
    userEmail: string;
    businessId: string;
}

export default function BoardingAndDaycarePendingRequestsPage() {
    const t = useTranslations('boardingAndDaycarePendingRequests');
    const locale = useLocale();
    const router = useRouter();

    const [requests, setRequests] = useState<JoinRequest[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [selectedRequest, setSelectedRequest] = useState<JoinRequest | null>(null);
    const [action, setAction] = useState<'approve' | 'decline' | null>(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            if (!user) {
                router.push(`/${locale}/loginsignup`);
                return;
            }

            try {
                const businessSnap = await getDocs(
                    query(collection(db, 'businesses'), where('ownerId', '==', user.uid))
                );

                if (businessSnap.empty) {
                    setError('No business found for this account.');
                    setIsLoading(false);
                    return;
                }

                const businessId = businessSnap.docs[0].id;

                const pendingSnap = await getDocs(
                    query(
                        collection(db, 'joinRequests'),
                        where('businessId', '==', businessId),
                        where('status', '==', 'pending')
                    )
                );

                const list: JoinRequest[] = pendingSnap.docs.map((doc) => {
                    const data = doc.data();
                    return {
                        id: doc.id,
                        userId: data.userId || '',
                        userName: data.userName || 'Unknown Name',
                        userEmail: data.userEmail || 'Unknown Email',
                        businessId: data.businessId || '',
                    };
                });

                setRequests(list);
            } catch {
                // No unused variable error; safe and compliant
                setError('Failed to load requests.');
            } finally {
                setIsLoading(false);
            }
        });

        return () => unsubscribe();
    }, [locale, router]);

    const respondToRequest = async (request: JoinRequest, approved: boolean) => {
        try {
            const joinRef = doc(db, 'joinRequests', request.id);
            await updateDoc(joinRef, { status: approved ? 'approved' : 'declined' });

            const userRef = doc(db, 'users', request.userId);
            const userSnap = await getDoc(userRef);
            const userData = userSnap.data() || {};
            const fullName = `${userData.firstName || ''} ${userData.lastName || ''}`.trim();

            if (approved) {
                const clientRef = doc(
                    db,
                    'userApprovedBusinesses',
                    request.businessId,
                    'clients',
                    request.userId
                );

                await setDoc(clientRef, {
                    userId: request.userId,
                    userEmail: request.userEmail,
                    userName: fullName || request.userName,
                    userFirstName: userData.firstName || '',
                    userLastName: userData.lastName || '',
                    joinedAt: new Date().toLocaleDateString(),
                    waiverSigned: false,
                });
            }

            const notificationRef = doc(
                db,
                'users',
                request.userId,
                'notifications',
                crypto.randomUUID()
            );

            await setDoc(notificationRef, {
                type: 'joinRequestResponse',
                message: approved
                    ? 'Your request has been approved!'
                    : 'Your request has been declined.',
                timestamp: Timestamp.now(),
                businessId: request.businessId,
            });

            setRequests((prev) => prev.filter((r) => r.id !== request.id));
        } catch {
            alert('Something went wrong. Please try again.');
        }
    };

    return (
        <div className="min-h-screen bg-[color:var(--color-background)] text-[color:var(--color-foreground)] px-4 py-8">
            <div className="max-w-3xl mx-auto">
                <h1 className="text-3xl font-bold text-center mb-6">
                    {t('pending_requests_title')}
                </h1>

                {isLoading ? (
                    <p className="text-center">{t('loading')}</p>
                ) : error ? (
                    <p className="text-center text-red-600">{error}</p>
                ) : requests.length === 0 ? (
                    <p className="text-center text-gray-500">{t('no_pending_requests')}</p>
                ) : (
                    <div className="space-y-6">
                        {requests.map((req) => (
                            <div
                                key={req.id}
                                className="bg-white border shadow rounded p-4 space-y-3"
                            >
                                <div className="font-bold text-lg">{req.userName}</div>
                                <div className="text-sm text-gray-600">{req.userEmail}</div>
                                <div className="flex gap-4 mt-4">
                                    <button
                                        className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2 rounded"
                                        onClick={() => {
                                            setSelectedRequest(req);
                                            setAction('approve');
                                        }}
                                    >
                                        {t('approve_button')}
                                    </button>
                                    <button
                                        className="flex-1 bg-red-600 hover:bg-red-700 text-white py-2 rounded"
                                        onClick={() => {
                                            setSelectedRequest(req);
                                            setAction('decline');
                                        }}
                                    >
                                        {t('decline_button')}
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {selectedRequest && action && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                        <div className="bg-white p-6 rounded shadow-md max-w-md w-full">
                            <h2 className="text-xl font-semibold mb-4">
                                {action === 'approve'
                                    ? t('approve_request_title')
                                    : t('decline_request_title')}
                            </h2>
                            <p className="mb-6">
                                {action === 'approve'
                                    ? t('approve_request_message')
                                    : t('decline_request_message')}
                            </p>
                            <div className="flex justify-end gap-4">
                                <button
                                    className="px-4 py-2 bg-gray-200 rounded"
                                    onClick={() => {
                                        setSelectedRequest(null);
                                        setAction(null);
                                    }}
                                >
                                    {t('no_button')}
                                </button>
                                <button
                                    className="px-4 py-2 bg-blue-600 text-white rounded"
                                    onClick={() => {
                                        if (selectedRequest && action) {
                                            respondToRequest(selectedRequest, action === 'approve');
                                            setSelectedRequest(null);
                                            setAction(null);
                                        }
                                    }}
                                >
                                    {t('yes_button')}
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
