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
    getDocs,
    query,
    where,
    orderBy,
    deleteDoc,
    doc,
    writeBatch,
} from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import { useLocale, useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';

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

// ✅ Thread Type
interface BusinessMessageThread {
    id: string;
    clientId: string;
    clientName: string;
    lastMessage: string;
    lastMessageAt?: Date | null;
}

export default function BoardingAndDaycareMessagesPage() {
    const router = useRouter();
    const locale = useLocale();
    const t = useTranslations('boardingAndDaycareMessages');

    const [threads, setThreads] = useState<BusinessMessageThread[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [businessId, setBusinessId] = useState('');
    const [threadToDelete, setThreadToDelete] = useState<BusinessMessageThread | null>(null);
    const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

    useEffect(() => {
        const unsub = onAuthStateChanged(auth, async (user) => {
            if (!user) {
                router.push(`/${locale}/loginsignup`);
                return;
            }

            console.log(`📡 Resolving businessId for owner ${user.uid}`);
            const q = query(collection(db, 'businesses'), where('ownerId', '==', user.uid));
            const snapshot = await getDocs(q);
            if (snapshot.empty) {
                console.warn('⚠️ No business found for this owner');
                setIsLoading(false);
                return;
            }

            const resolvedId = snapshot.docs[0].id;
            setBusinessId(resolvedId);
            console.log(`✅ Resolved businessId = ${resolvedId}`);
            await fetchThreads(resolvedId);
            setIsLoading(false); // ✅ <-- ADD THIS LINE
        });

        return () => unsub();
    }, [router, locale]);

    const fetchThreads = async (id: string) => {
        try {
            console.log(`📡 Fetching threads for businessId: ${id}`);
            const q = query(
                collection(db, 'messages'),
                where('businessId', '==', id),
                orderBy('lastMessageAt', 'desc')
            );
            const snapshot = await getDocs(q);
            const results: BusinessMessageThread[] = [];

            snapshot.forEach((docSnap) => {
                const data = docSnap.data();
                const clientId = data.userId || '';
                const clientName =
                    data.userName ||
                    `${data.userFirstName || ''} ${data.userLastName || ''}`.trim() ||
                    clientId;
                const lastMessage = data.lastMessageText || '(no messages yet)';
                const lastMessageAt = data.lastMessageAt?.toDate?.() || null;

                results.push({
                    id: docSnap.id,
                    clientId,
                    clientName,
                    lastMessage,
                    lastMessageAt,
                });
            });

            results.sort(
                (a, b) =>
                    (b.lastMessageAt?.getTime() || 0) - (a.lastMessageAt?.getTime() || 0)
            );

            setThreads(results);
        } catch (err: unknown) {
            if (err instanceof Error) {
                console.error('❌ Error fetching threads:', err.message);
            } else {
                console.error('❌ Error fetching threads:', err);
            }
        }
    };

    const deleteThread = async (thread: BusinessMessageThread) => {
        console.log(`🗑️ Deleting thread: ${thread.id}`);
        try {
            setIsLoading(true);
            const threadRef = doc(db, 'messages', thread.id);
            const messagesSnap = await getDocs(collection(db, 'messages', thread.id, 'threadMessages'));
            const batch = writeBatch(db);
            messagesSnap.forEach((doc) => batch.delete(doc.ref));
            await batch.commit();
            await deleteDoc(threadRef);

            setThreads((prev) => prev.filter((t) => t.id !== thread.id));
            console.log('✅ Successfully deleted thread');
        } catch (err) {
            if (err instanceof Error) {
                console.error('⚠️ Error deleting thread:', err.message);
            } else {
                console.error('⚠️ Unknown error deleting thread:', err);
            }
        } finally {
            setIsLoading(false);
            setShowDeleteConfirm(false);
        }
    };

    const formatDate = (date?: Date | null) => {
        if (!date) return '';
        const now = new Date();
        const diff = now.getTime() - date.getTime();
        const mins = Math.floor(diff / 60000);
        if (mins < 60) return `${mins}m ago`;
        const hrs = Math.floor(mins / 60);
        if (hrs < 24) return `${hrs}h ago`;
        const days = Math.floor(hrs / 24);
        return `${days}d ago`;
    };

    return (
        <div className="min-h-screen bg-[color:var(--color-background)] text-[color:var(--color-foreground)] flex flex-col items-center px-4 py-6">
            <div className="w-full max-w-md">
                <h1 className="text-2xl font-bold text-[color:var(--color-accent)] text-center mb-6">
                    {t('title', { default: 'Messages' })}
                </h1>

                {isLoading ? (
                    <div className="flex justify-center items-center py-10">
                        <div className="text-center">
                            <div className="animate-spin h-8 w-8 border-4 border-[color:var(--color-accent)] border-t-transparent rounded-full mx-auto mb-3"></div>
                            <p className="text-sm text-gray-500">
                                {t('loading', { default: 'Loading conversations...' })}
                            </p>
                        </div>
                    </div>
                ) : threads.length === 0 ? (
                    <div className="text-center mt-12 space-y-3">
                        <Image
                            src="/icons/chat-empty.png"
                            alt="No Messages"
                            width={60}
                            height={60}
                            className="mx-auto opacity-70"
                        />
                        <p className="font-semibold text-lg">
                            {t('no_messages', { default: 'No messages yet.' })}
                        </p>
                        <p className="text-sm text-gray-500 max-w-sm mx-auto">
                            {t('empty_description', {
                                default:
                                    'When clients message your business, conversations will appear here.',
                            })}
                        </p>
                    </div>
                ) : (
                    <div className="space-y-3">
                        {threads.map((thread) => (
                            <div
                                key={thread.id}
                                className="relative bg-white dark:bg-gray-800 p-4 rounded-lg shadow hover:shadow-md transition"
                            >
                                <Link
                                    href={`/${locale}/boardinganddaycaremessageclient?clientId=${thread.clientId}&clientName=${encodeURIComponent(
                                        thread.clientName
                                    )}&businessId=${businessId}`}
                                >
                                    <div className="flex items-center justify-between">
                                        <div className="flex-1 text-left pr-3">
                                            <p className="font-semibold text-[color:var(--color-accent)]">
                                                {thread.clientName}
                                            </p>
                                            <p className="text-sm text-gray-500 line-clamp-1">
                                                {thread.lastMessage}
                                            </p>
                                        </div>
                                        <span className="text-xs text-gray-400 whitespace-nowrap">
                                            {formatDate(thread.lastMessageAt)}
                                        </span>
                                    </div>
                                </Link>

                                <button
                                    onClick={() => {
                                        setThreadToDelete(thread);
                                        setShowDeleteConfirm(true);
                                    }}
                                    className="absolute top-2 right-3 text-gray-400 hover:text-red-500 transition"
                                    title={t('delete', { default: 'Delete Chat' })}
                                >
                                    🗑️
                                </button>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* Delete confirmation overlay */}
            {showDeleteConfirm && threadToDelete && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 px-4">
                    <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg max-w-sm w-full">
                        <h2 className="text-lg font-bold mb-3 text-[color:var(--color-accent)]">
                            {t('confirm_delete_title', { default: 'Delete this chat?' })}
                        </h2>
                        <p className="text-sm text-gray-600 dark:text-gray-300 mb-5">
                            {t('confirm_delete_message', { default: 'This will permanently remove the conversation from your view.' })}
                        </p>
                        <div className="flex justify-end gap-3">
                            <button
                                onClick={() => setShowDeleteConfirm(false)}
                                className="px-4 py-2 rounded bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-gray-100 text-sm"
                            >
                                {t('cancel', { default: 'Cancel' })}
                            </button>
                            <button
                                onClick={() => deleteThread(threadToDelete)}
                                className="px-4 py-2 rounded bg-red-600 text-white text-sm"
                            >
                                {t('confirm', { default: 'Yes, Delete' })}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
