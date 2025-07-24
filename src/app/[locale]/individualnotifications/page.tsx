'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useTranslations, useLocale } from 'next-intl';
import {
    getAuth,
    onAuthStateChanged
} from 'firebase/auth';
import {
    getFirestore,
    collection,
    getDocs,
    deleteDoc,
    doc,
    query,
    orderBy,
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

const ADMIN_USER_ID = 'YOUR_FIREBASE_UID_HERE';

type Notification = {
    id: string;
    type: string;
    message: string;
    timestamp?: Date;
};

export default function IndividualNotificationsPage() {
    const t = useTranslations('individualNotifications');
    const locale = useLocale();
    const router = useRouter();

    const [userId, setUserId] = useState('');
    const [notifications, setNotifications] = useState<Notification[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [showAlert, setShowAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            if (!user) {
                router.push(`/${locale}/loginsignup`);
                return;
            }

            const uid = user.uid;
            setUserId(uid);

            try {
                const notifQuery = query(
                    collection(db, 'users', uid, 'notifications'),
                    orderBy('timestamp', 'desc')
                );
                const snapshot = await getDocs(notifQuery);

                const loaded: Notification[] = snapshot.docs.map(docSnap => {
                    const data = docSnap.data();
                    const timestamp = (data.timestamp as Timestamp | undefined)?.toDate();
                    return {
                        id: docSnap.id,
                        type: data.type ?? 'unknown',
                        message: data.message ?? '',
                        timestamp
                    };
                });

                setNotifications(loaded);
                setIsLoading(false);

                if (
                    uid === ADMIN_USER_ID &&
                    loaded.length > 0 &&
                    loaded[0].type === 'businessSignup' &&
                    loaded[0].timestamp &&
                    new Date(loaded[0].timestamp).toDateString() === new Date().toDateString()
                ) {
                    const businessName = loaded[0].message.split('\n')[0] || t('default_business_name');
                    setAlertMessage(t('new_business_signup_message', { businessName }));
                    setTimeout(() => setShowAlert(true), 500);
                }
            } catch (err: any) {
                setErrorMessage(t('error_loading_notifications', { message: err.message }));
                setIsLoading(false);
            }
        });

        return () => unsubscribe();
    }, [locale, router, t]);

    const deleteNotification = async (id: string) => {
        try {
            await deleteDoc(doc(db, 'users', userId, 'notifications', id));
            setNotifications(prev => prev.filter(n => n.id !== id));
        } catch (err) {
            console.error('❌ Failed to delete notification:', err);
        }
    };

    const formatDateTime = (date: Date) =>
        new Intl.DateTimeFormat(locale, {
            dateStyle: 'medium',
            timeStyle: 'short'
        }).format(date);

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
                    {t('notifications_title')}
                </h1>

                {showAlert && (
                    <div className="bg-yellow-100 text-yellow-800 px-4 py-3 rounded mb-6 border border-yellow-300 text-sm">
                        <strong className="font-semibold block">{t('new_business_signup_alert')}</strong>
                        <p className="mt-1">{alertMessage}</p>
                    </div>
                )}

                {isLoading ? (
                    <p className="text-center text-gray-500 text-sm">{t('loading_notifications')}</p>
                ) : errorMessage ? (
                    <p className="text-center text-red-600 text-sm">{errorMessage}</p>
                ) : notifications.length === 0 ? (
                    <p className="text-center text-gray-500 text-sm">{t('no_notifications_message')}</p>
                ) : (
                    <div className="space-y-4">
                        {notifications.map(n => (
                            <div
                                key={n.id}
                                className="p-4 rounded border-2 border-[color:var(--color-accent)] bg-white relative"
                            >
                                <p className="font-semibold mb-1 text-sm">{n.message}</p>
                                {n.timestamp && (
                                    <p className="text-xs text-gray-600">{formatDateTime(n.timestamp)}</p>
                                )}
                                <button
                                    onClick={() => deleteNotification(n.id)}
                                    className="absolute top-2 right-2 text-sm text-red-600 hover:underline"
                                >
                                    {t('delete_button', { defaultValue: 'Delete' })}
                                </button>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
