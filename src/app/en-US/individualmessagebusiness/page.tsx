'use client';

import { useEffect, useRef, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import {
    getAuth,
    onAuthStateChanged,
} from 'firebase/auth';
import {
    getFirestore,
    collection,
    doc,
    getDoc,
    setDoc,
    updateDoc,
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

export default function IndividualMessageBusinessPage() {
    const router = useRouter();
    const params = useSearchParams();
    const t = useTranslations('individualMessageBusiness');
    const locale = useLocale();

    const businessId = params.get('businessId') || '';
    const businessName = decodeURIComponent(params.get('businessName') || '');
    const [userId, setUserId] = useState('');
    const [messages, setMessages] = useState<Message[]>([]);
    const [newMessageText, setNewMessageText] = useState('');
    const [isSending, setIsSending] = useState(false);
    const scrollRef = useRef<HTMLDivElement | null>(null);

    const threadId = `${businessId}__${userId}`;

    // ✅ Listen for auth
    useEffect(() => {
        const unsub = onAuthStateChanged(auth, async (user) => {
            if (!user) {
                router.push(`/${locale}/loginsignup`);
                return;
            }
            setUserId(user.uid);
        });
        return () => unsub();
    }, [router, locale]);

    // ✅ Attach Firestore listener once user is known
    useEffect(() => {
        if (!userId || !businessId) return;
        attachListener();
    }, [userId, businessId]);

    // ✅ Scroll to bottom whenever messages update
    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages]);

    // ============================================
    // 🔹 Firestore Helpers
    // ============================================
    const messagesCollectionRef = () =>
        collection(db, 'messages', threadId, 'threadMessages');

    const threadDocRef = () => doc(db, 'messages', threadId);

    const attachListener = async () => {
        await ensureThreadExists();
        const q = query(messagesCollectionRef(), orderBy('sentAt', 'asc'));
        return onSnapshot(q, async (snapshot) => {
            const msgs: Message[] = snapshot.docs.map((doc) => {
                const data = doc.data();
                return {
                    id: doc.id,
                    senderId: data.senderId,
                    receiverId: data.receiverId,
                    text: data.text,
                    sentAt: data.sentAt?.toDate?.() || null,
                    read: data.read ?? false,
                };
            });
            setMessages(msgs);
            await markUnreadAsRead(msgs);
        });
    };

    const ensureThreadExists = async () => {
        const threadRef = threadDocRef();
        const snap = await getDoc(threadRef);
        const user = auth.currentUser;
        const email = user?.email ?? '';

        if (!snap.exists()) {
            await setDoc(threadRef, {
                threadId,
                businessId,
                userId,
                participants: [businessId, userId],
                lastMessageText: '',
                lastMessageAt: serverTimestamp(),
                unreadBy: { [businessId]: 0, [userId]: 0 },
                lastReadAt: {
                    [businessId]: serverTimestamp(),
                    [userId]: serverTimestamp(),
                },
                userEmail: email,
            });
        } else {
            const data = snap.data() ?? {};
            if (!data.userEmail) {
                await updateDoc(threadRef, { userEmail: email });
            }
        }
    };

    const markUnreadAsRead = async (msgs: Message[]) => {
        if (!userId) return;
        const unread = msgs.filter((m) => m.receiverId === userId && !m.read);
        if (unread.length === 0) return;

        const batch = writeBatch(db);
        for (const m of unread) {
            const msgRef = doc(db, 'messages', threadId, 'threadMessages', m.id);
            batch.update(msgRef, { read: true, readAt: serverTimestamp() });
        }

        batch.update(threadDocRef(), {
            [`unreadBy.${userId}`]: 0,
            [`lastReadAt.${userId}`]: serverTimestamp(),
        });

        await batch.commit();
    };

    const sendMessage = async () => {
        const text = newMessageText.trim();
        if (!text || isSending || !userId || !businessId) return;

        setIsSending(true);
        const msgData = {
            senderId: userId,
            receiverId: businessId,
            text,
            sentAt: serverTimestamp(),
            read: false,
        };

        const msgRef = collection(db, 'messages', threadId, 'threadMessages');
        await addDoc(msgRef, msgData);

        await updateDoc(threadDocRef(), {
            lastMessageText: text.length > 300 ? text.substring(0, 300) : text,
            lastMessageAt: serverTimestamp(),
            unreadBy: { [userId]: 0, [businessId]: 1 },
        });

        setNewMessageText('');
        setIsSending(false);
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
                    {businessName || t('default_title', { default: 'Chat' })}
                </h1>
                {/* Spacer to balance flex layout */}
                <div className="w-12" />
            </div>

            {/* Messages */}
            <div
                ref={scrollRef}
                className="flex-1 w-full max-w-md overflow-y-auto px-3 py-2 space-y-2"
            >
                {messages.map((m) => (
                    <div
                        key={m.id}
                        className={`flex ${m.senderId === userId ? 'justify-end' : 'justify-start'}`}
                    >
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
                            backgroundColor:
                                !newMessageText.trim() || isSending ? '#9ca3af' : '#2c4a30',
                            color: 'white',
                            border: '2px solid #1f3322',
                            boxShadow: '0 2px 5px rgba(0,0,0,0.15)',
                            cursor:
                                !newMessageText.trim() || isSending ? 'not-allowed' : 'pointer',
                        }}
                        onMouseOver={(e) => {
                            if (newMessageText.trim() && !isSending)
                                e.currentTarget.style.opacity = '0.85';
                        }}
                        onMouseOut={(e) => {
                            e.currentTarget.style.opacity = '1';
                        }}
                    >
                        {isSending
                            ? t('sending', { default: 'Sending...' })
                            : t('send', { default: 'Send' })}
                    </button>
                </div>
            </div>
        </div>
    );
}
