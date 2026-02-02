'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';

import { initializeApp, getApps } from 'firebase/app';
import {
    getAuth,
    onAuthStateChanged,
    type User as FirebaseUser,
} from 'firebase/auth';
import {
    getFirestore,
    collection,
    doc,
    getDocs,
    deleteDoc,
    orderBy,
    query,
    type Firestore,
    type QueryDocumentSnapshot,
    Timestamp,
} from 'firebase/firestore';

type BusinessNotification = {
    id: string;
    type: string;
    message: string;
    timestamp: Date | null;
};

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY!,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN!,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID!,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET!,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID!,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID!,
};

// Safe singleton init for client
const app = getApps().length ? getApps()[0]! : initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export default function BoardingAndDaycareNotificationsPage() {
    const router = useRouter();

    const [ownerId, setOwnerId] = useState<string>('');
    const [items, setItems] = useState<BusinessNotification[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [loadError, setLoadError] = useState<string>('');

    // Map Firestore doc -> typed notification
    const mapDoc = useCallback((d: QueryDocumentSnapshot): BusinessNotification => {
        const data = d.data() as Record<string, unknown>;
        const ts = data.timestamp as Timestamp | undefined;
        return {
            id: d.id,
            type: (data.type as string) ?? 'unknown',
            message: (data.message as string) ?? '',
            timestamp: ts ? ts.toDate() : null,
        };
    }, []);

    const loadNotifications = useCallback(
        async (uid: string, dbRef: Firestore) => {
            setIsLoading(true);
            setLoadError('');

            try {
                const col = collection(dbRef, 'users', uid, 'notifications');
                const q = query(col, orderBy('timestamp', 'desc'));
                const snap = await getDocs(q);
                const next = snap.docs.map(mapDoc);
                setItems(next);
            } catch (err) {
                const msg = err instanceof Error ? err.message : 'Failed to load notifications';
                setLoadError(msg);
            } finally {
                setIsLoading(false);
            }
        },
        [mapDoc]
    );

    // Auth + initial load
    useEffect(() => {
        const unsub = onAuthStateChanged(auth, (user: FirebaseUser | null) => {
            if (!user) {
                router.push('/en/loginsignup');
                return;
            }
            const uid = user.uid;
            setOwnerId(uid);
            void loadNotifications(uid, db);
        });
        return () => unsub();
    }, [router, loadNotifications]);

    const handleDelete = useCallback(
        async (id: string) => {
            if (!ownerId) return;
            try {
                await deleteDoc(doc(db, 'users', ownerId, 'notifications', id));
                setItems((prev) => prev.filter((n) => n.id !== id));
            } catch {
                /* noop */
            }
        },
        [ownerId]
    );

    const title = useMemo(() => 'Notifications', []);

    return (
        <div className="min-h-screen bg-[color:var(--color-background)] text-[color:var(--color-foreground)] px-4 py-6">
            <div className="w-full max-w-md mx-auto">
                <button
                    onClick={() => router.push(`/en/boardinganddaycaredashboard`)}
                    className="mb-2 text-sm text-[color:var(--color-accent)] underline hover:opacity-90"
                >
                    ← Back to Business Dashboard
                </button>

                {/* Centered, prominent title to match iOS look */}
                <h1 className="text-4xl font-bold text-center text-[color:var(--color-foreground)] mb-6">
                    {title}
                </h1>

                {isLoading && (
                    <p className="text-center text-sm opacity-70">Loading notifications…</p>
                )}

                {!isLoading && loadError && (
                    <p className="text-center text-red-600 text-sm">❌ {loadError}</p>
                )}

                {!isLoading && !loadError && items.length === 0 && (
                    <p className="text-center text-sm opacity-70">You have no notifications.</p>
                )}

                {!isLoading && !loadError && items.length > 0 && (
                    <ul className="space-y-3">
                        {items.map((n) => (
                            <li
                                key={n.id}
                                className="bg-white/80 dark:bg-neutral-900/60 rounded-2xl shadow p-4 flex items-start justify-between"
                            >
                                <div className="pr-3">
                                    <p className="font-semibold leading-snug">{n.message}</p>
                                    {n.timestamp && (
                                        <p className="text-xs opacity-70 mt-1">
                                            {formatDate(n.timestamp)}
                                        </p>
                                    )}
                                </div>

                                <button
                                    aria-label="Delete notification"
                                    onClick={() => void handleDelete(n.id)}
                                    className="text-xs px-3 py-1 rounded bg-red-600 text-white hover:opacity-90"
                                >
                                    Delete
                                </button>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}

function formatDate(d: Date): string {
    return new Intl.DateTimeFormat(undefined, {
        dateStyle: 'medium',
        timeStyle: 'short',
    }).format(d);
}
