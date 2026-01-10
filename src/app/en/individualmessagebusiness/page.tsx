'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

import { useSearchParams, useRouter } from 'next/navigation';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import {
    getFirestore,
    collection,
    doc,
    getDoc,
    setDoc,
    addDoc,
    query,
    orderBy,
    onSnapshot,
    serverTimestamp,
    writeBatch,
} from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import { useLocale, useTranslations } from 'next-intl';

// ✅ Firebase initialization
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

// ✅ Types
interface Message {
    id: string;
    senderId: string;
    receiverId: string;
    text: string;
    sentAt: Date | null;
    read: boolean;
}

interface FirestoreMessageData {
    senderId?: string;
    receiverId?: string;
    text?: string;
    sentAt?: {
        toDate?: () => Date;
    };
    read?: boolean;
}

export default function IndividualMessageBusinessPage() {
    const router = useRouter();
    const params = useSearchParams();
    const t = useTranslations('individualMessageBusiness');
    const locale = useLocale();

    const businessId = params.get('businessId') || '';
    const businessName = decodeURIComponent(params.get('businessName') || '');
    const [resolvedBusinessName, setResolvedBusinessName] = useState('');

    const [userId, setUserId] = useState('');
    const [messages, setMessages] = useState<Message[]>([]);
    const [userFirstName, setUserFirstName] = useState('');
    const [userLastName, setUserLastName] = useState('');
    const [userName, setUserName] = useState('');

    const [newMessageText, setNewMessageText] = useState('');
    const [isSending, setIsSending] = useState(false);

    const scrollRef = useRef<HTMLDivElement | null>(null);

    // ✅ Only build threadId when both IDs exist (prevents writing to "messages/{businessId}__")
    const threadId = businessId && userId ? `${businessId}__${userId}` : '';

    // ✅ Stable refs that are ONLY callable when threadId is valid
    const threadDocRef = useCallback(() => {
        if (!threadId) throw new Error('threadId not ready');
        return doc(db, 'messages', threadId);
    }, [threadId]);

    const messagesCollectionRef = useCallback(() => {
        if (!threadId) throw new Error('threadId not ready');
        return collection(db, 'messages', threadId, 'threadMessages');
    }, [threadId]);

    // ✅ Listen for auth
    useEffect(() => {
        const unsub = onAuthStateChanged(auth, async (user) => {
            if (!user) {
                router.push(`/${locale}/loginsignup`);
                return;
            }

            setUserId(user.uid);

            // ✅ Fetch client display name for business inbox threads
            try {
                const userSnap = await getDoc(doc(db, 'users', user.uid));
                if (userSnap.exists()) {
                    const data = userSnap.data() as Record<string, unknown>;

                    const first =
                        typeof data.firstName === 'string' ? data.firstName : '';
                    const last =
                        typeof data.lastName === 'string' ? data.lastName : '';

                    const displayName =
                        typeof data.userName === 'string'
                            ? data.userName
                            : typeof data.displayName === 'string'
                                ? data.displayName
                                : `${first} ${last}`.trim();

                    setUserFirstName(first);
                    setUserLastName(last);
                    setUserName(displayName);
                }
            } catch {
                // Silent failure — thread will safely fall back if name is unavailable
            }
        });

        return () => unsub();
    }, [router, locale]);

    // ✅ Scroll to bottom whenever messages update
    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages]);

    useEffect(() => {
        if (!businessId) return;

        // 🔐 Fetch business name from Firestore (safe source)
        getDoc(doc(db, 'businesses', businessId)).then((snap) => {
            if (snap.exists()) {
                const name = snap.data()?.businessName;
                if (typeof name === 'string' && name.trim()) {
                    setResolvedBusinessName(name.trim());
                }
            }
        });
    }, [businessId]);

    // ============================================
    // ✅ IMPORTANT FIX: declare markUnreadAsRead BEFORE attachListener
    // ============================================
    const markUnreadAsRead = useCallback(
        async (msgs: Message[]) => {
            if (!userId || !threadId) return;

            const unread = msgs.filter((m) => m.receiverId === userId && !m.read);
            if (unread.length === 0) return;

            const batch = writeBatch(db);

            for (const m of unread) {
                const msgRef = doc(db, 'messages', threadId, 'threadMessages', m.id);
                batch.update(msgRef, { read: true, readAt: serverTimestamp() });
            }

            // Merge-safe thread update (won’t fail if thread doc doesn’t exist yet)
            batch.set(
                threadDocRef(),
                {
                    unreadBy: { [userId]: 0 },
                    lastReadAt: { [userId]: serverTimestamp() },
                },
                { merge: true }
            );

            await batch.commit();
        },
        [threadId, userId, threadDocRef]
    );

    const attachListener = useCallback(() => {
        const q = query(messagesCollectionRef(), orderBy('sentAt', 'asc'));

        const unsubscribe = onSnapshot(q, async (snapshot) => {
            const msgs: Message[] = snapshot.docs.map((docSnap) => {
                const data = docSnap.data() as FirestoreMessageData;
                return {
                    id: docSnap.id,
                    senderId: String(data.senderId ?? ''),
                    receiverId: String(data.receiverId ?? ''),
                    text: String(data.text ?? ''),
                    sentAt: data.sentAt?.toDate?.() || null,
                    read: Boolean(data.read ?? false),
                };
            });

            setMessages(msgs);
            await markUnreadAsRead(msgs);
        });

        return unsubscribe;
    }, [messagesCollectionRef, markUnreadAsRead]);

    // ✅ Attach Firestore listener once user is known
    useEffect(() => {
        if (!userId || !businessId) return;

        const unsubscribe = attachListener();
        return () => unsubscribe?.();
    }, [userId, businessId, attachListener]);

    const sendMessage = async () => {
        const text = newMessageText.trim();
        if (!text || isSending || !userId || !businessId) return;

        // ✅ Guard: ensure threadId is valid before writing
        if (!threadId) return;

        setIsSending(true);

        try {
            const msgData = {
                senderId: userId,
                receiverId: businessId,
                text,
                sentAt: serverTimestamp(),
                read: false,
            };

            // 1) Write the message
            await addDoc(messagesCollectionRef(), msgData);

            // 2) Upsert the parent thread doc (mirror iOS fields)
            await setDoc(
                threadDocRef(),
                {
                    threadId,
                    businessId,
                    userId,
                    participants: [businessId, userId],

                    // ✅ Client display fields for business inbox
                    userName: userName || `${userFirstName} ${userLastName}`.trim(),
                    userFirstName,
                    userLastName,
                    userEmail: auth.currentUser?.email ?? '',

                    lastMessageText: text.length > 300 ? text.substring(0, 300) : text,
                    lastMessageAt: serverTimestamp(),

                    // ✅ unread map (same intent as iOS)
                    unreadBy: { [userId]: 0, [businessId]: 1 },
                },
                { merge: true }
            );

            setNewMessageText('');
        } catch (err) {
            console.error('❌ sendMessage failed:', err);
            // Optional: surface a UI alert/toast if you want
        } finally {
            setIsSending(false);
        }
    };

    // ============================================
    // 🔹 Render
    // ============================================
    return (
        <div className="flex flex-col items-center min-h-screen bg-[color:var(--color-background)] text-[color:var(--color-foreground)]">
            {/* Header with Back Button */}
            <div className="sticky top-0 w-full max-w-md bg-[color:var(--color-background)] border-b border-gray-300 py-3 px-4 flex items-center justify-between">
                <button
                    onClick={() => router.push(`/${locale}/individualmessages`)}
                    className="text-[color:var(--color-accent)] text-sm hover:underline"
                >
                    &larr; {t('back', { default: 'Back' })}
                </button>
                <h1 className="flex-1 text-center font-bold text-xl text-[color:var(--color-accent)]">
                    {resolvedBusinessName || businessName || t('default_title', { default: 'Chat' })}
                </h1>
                <div className="w-12" />
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 w-full max-w-md overflow-y-auto px-3 py-2 space-y-2">
                {messages.map((m) => (
                    <div key={m.id} className={`flex ${m.senderId === userId ? 'justify-end' : 'justify-start'}`}>
                        <div
                            className={`max-w-[75%] rounded-2xl px-4 py-2 text-sm break-words ${m.senderId === userId
                                ? 'bg-[#2c4a30] text-white shadow-md border border-[#1f3322]'
                                : 'bg-white text-gray-900 border border-gray-300 shadow-sm'
                                }`}
                        >
                            {m.text}
                        </div>
                    </div>
                ))}
            </div>

            {/* ✅ Fixed Input Bar */}
            <div className="sticky bottom-0 w-full max-w-md border-t border-gray-300 bg-[#fdfcf9] p-3 shadow-md">
                <div className="flex flex-row items-end gap-2">
                    <textarea
                        className="flex-grow border border-gray-400 rounded-lg px-3 py-2 text-sm text-gray-900 placeholder-gray-500 bg-white focus:outline-none focus:ring-2 focus:ring-[color:var(--color-accent)] h-10"
                        placeholder={t('type_message', { default: 'Type a message...' })}
                        value={newMessageText}
                        onChange={(e) => setNewMessageText(e.target.value)}
                        style={{
                            resize: 'none',
                            overflow: 'auto',
                            minHeight: '40px',
                            maxHeight: '100px',
                        }}
                    />
                    <button
                        onClick={sendMessage}
                        disabled={!newMessageText.trim() || isSending}
                        className="px-4 py-2 rounded-lg text-sm font-semibold transition focus:outline-none"
                        style={{
                            flexShrink: 0,
                            minWidth: '80px',
                            height: '40px',
                            backgroundColor: !newMessageText.trim() || isSending ? '#9ca3af' : '#2c4a30',
                            color: 'white',
                            border: '2px solid #1f3322',
                            boxShadow: '0 2px 5px rgba(0,0,0,0.15)',
                            cursor: !newMessageText.trim() || isSending ? 'not-allowed' : 'pointer',
                        }}
                        onMouseOver={(e) => {
                            if (newMessageText.trim() && !isSending) e.currentTarget.style.opacity = '0.85';
                        }}
                        onMouseOut={(e) => {
                            e.currentTarget.style.opacity = '1';
                        }}
                    >
                        {isSending ? t('sending', { default: 'Sending...' }) : t('send', { default: 'Send' })}
                    </button>
                </div>
            </div>
        </div>
    );
}
