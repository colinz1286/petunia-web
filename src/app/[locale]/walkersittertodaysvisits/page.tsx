'use client';

import { useEffect, useState, ReactNode } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import {
    getFirestore,
    collection,
    query,
    where,
    onSnapshot,
    doc,
    updateDoc,
    setDoc,
    Timestamp,
    getDocs
} from 'firebase/firestore';
import { format } from 'date-fns';

// ---------- Firebase config (reuse your existing env) ----------
const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY!,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN!,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID!,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET!,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID!,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID!
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

// ---------- Types ----------
interface Visit {
    id: string;
    userId: string;
    userName: string;
    petNames: string[];
    serviceType: string;
    date: string;
    timeWindow: string;
    address: string;
    status: 'upcoming' | 'in_progress' | 'completed' | 'missed' | string;
    checkInTime?: string;
    checkOutTime?: string;
}

// ---------- Inline Modal (no external component needed) ----------
function InlineModal({
    onClose,
    children
}: {
    onClose: () => void;
    children: ReactNode;
}) {
    return (
        <div
            role="dialog"
            aria-modal="true"
            className="fixed inset-0 z-50 flex items-center justify-center"
        >
            <div className="absolute inset-0 bg-black/50" onClick={onClose} />
            <div className="relative z-10 w-full max-w-lg rounded-2xl bg-white p-5 shadow-xl">
                <button
                    aria-label="Close"
                    onClick={onClose}
                    className="absolute right-3 top-3 rounded px-2 py-1 text-sm text-gray-600 hover:bg-gray-100"
                >
                    ✕
                </button>
                {children}
            </div>
        </div>
    );
}

// ---------- Page ----------
export default function WalkerSitterTodayVisitsPage() {
    const t = useTranslations('walkerSitterTodayVisits');
    const locale = useLocale();

    const [businessId, setBusinessId] = useState<string>('');
    const [visits, setVisits] = useState<Visit[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const [selectedVisit, setSelectedVisit] = useState<Visit | null>(null);
    const [reportText, setReportText] = useState('');
    const [isSaving, setIsSaving] = useState(false);

    // Resolve businessId for current owner (ownerIds[] first, then legacy ownerId)
    useEffect(() => {
        const unsub = onAuthStateChanged(auth, async (user) => {
            if (!user) {
                setError(t('not_logged_in'));
                setIsLoading(false);
                return;
            }

            try {
                const ownerIdsSnap = await getDocs(
                    query(collection(db, 'businesses'), where('ownerIds', 'array-contains', user.uid))
                );

                if (!ownerIdsSnap.empty) {
                    setBusinessId(ownerIdsSnap.docs[0].id);
                    return;
                }

                const legacySnap = await getDocs(
                    query(collection(db, 'businesses'), where('ownerId', '==', user.uid))
                );

                if (!legacySnap.empty) {
                    setBusinessId(legacySnap.docs[0].id);
                } else {
                    setError(t('no_business_found'));
                }
            } catch (err) {
                const msg = err instanceof Error ? err.message : String(err);
                setError(msg);
            } finally {
                setIsLoading(false);
            }
        });

        return () => unsub();
    }, [t]);

    // Fetch today's visits (realtime)
    useEffect(() => {
        if (!businessId) return;

        setIsLoading(true);
        const todayString = format(new Date(), 'yyyy-MM-dd');

        const q = query(
            collection(db, 'walkerSitterVisits', businessId, 'reservations'),
            where('date', '==', todayString)
        );

        const unsub = onSnapshot(
            q,
            (snap) => {
                const list: Visit[] = snap.docs.map((d) => {
                    const data = d.data() as Omit<Visit, 'id'>;
                    return { id: d.id, ...data };
                });
                setVisits(list);
                setIsLoading(false);
            },
            (err) => {
                console.error(err);
                setError(t('missing_permissions'));
                setIsLoading(false);
            }
        );

        return () => unsub();
    }, [businessId, t]);

    // Actions
    const markCheckIn = async (visit: Visit) => {
        try {
            await updateDoc(
                doc(db, 'walkerSitterVisits', businessId, 'reservations', visit.id),
                { status: 'in_progress', checkInTime: format(new Date(), 'p') }
            );
        } catch (err) {
            const msg = err instanceof Error ? err.message : String(err);
            setError(t('error_check_in', { error: msg }));
        }
    };

    const markCheckOut = async (visit: Visit) => {
        try {
            await updateDoc(
                doc(db, 'walkerSitterVisits', businessId, 'reservations', visit.id),
                { status: 'completed', checkOutTime: format(new Date(), 'p') }
            );
        } catch (err) {
            const msg = err instanceof Error ? err.message : String(err);
            setError(t('error_check_out', { error: msg }));
        }
    };

    const saveReport = async () => {
        if (!selectedVisit) return;
        setIsSaving(true);
        try {
            await setDoc(
                doc(db, 'walkerSitterVisits', businessId, 'reports', selectedVisit.id),
                {
                    visitId: selectedVisit.id,
                    userId: selectedVisit.userId,
                    userName: selectedVisit.userName,
                    reportText,
                    timestamp: Timestamp.now()
                }
            );
            setReportText('');
            setSelectedVisit(null);
        } catch (err) {
            const msg = err instanceof Error ? err.message : String(err);
            setError(t('error_saving_report', { error: msg }));
        } finally {
            setIsSaving(false);
        }
    };

    const StatusBadge = ({ status }: { status: Visit['status'] }) => {
        const map: Record<string, string> = {
            in_progress: 'bg-blue-100 text-blue-700',
            completed: 'bg-green-100 text-green-700',
            missed: 'bg-red-100 text-red-700',
            upcoming: 'bg-gray-100 text-gray-700'
        };
        return (
            <span className={`rounded px-2 py-1 text-xs font-semibold ${map[status] ?? map.upcoming}`}>
                {t(
                    status === 'in_progress'
                        ? 'in_progress'
                        : status === 'completed'
                            ? 'completed'
                            : status === 'missed'
                                ? 'missed'
                                : 'upcoming'
                )}
            </span>
        );
    };

    return (
        <div className="min-h-screen bg-[color:var(--color-background)] text-[color:var(--color-foreground)]">
            <main className="max-w-3xl mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold text-center text-[#1f513f] mb-6">
                    {t('ws_todays_visits_title')}
                </h1>

                {isLoading && (
                    <p className="text-center text-sm text-[#1f513f]">
                        {t('loading_visits')}
                    </p>
                )}

                {error && (
                    <p className="text-center text-sm text-red-600 dark:text-red-400">
                        ❌ {error}
                    </p>
                )}

                {!isLoading && !error && visits.length === 0 && (
                    <p className="text-center text-sm text-[#1f513f]">
                        {t('no_todays_visits')}
                    </p>
                )}

                <div className="space-y-4">
                    {visits.map((visit) => (
                        <div
                            key={visit.id}
                            className="rounded-xl border border-[color:var(--color-accent,#ccc)] bg-white/80 dark:bg-white/10 p-4 shadow-sm"
                        >
                            <div className="flex items-center justify-between">
                                <h2 className="text-lg font-semibold text-[color:var(--color-foreground)]">
                                    {visit.userName}
                                </h2>
                                <StatusBadge status={visit.status} />
                            </div>

                            <p className="text-sm text-gray-700 dark:text-gray-300">
                                🐾{' '}
                                {Array.isArray(visit.petNames) && visit.petNames.length > 0
                                    ? visit.petNames.join(', ')
                                    : t('unknown_pets')}
                            </p>

                            <p className="text-sm text-gray-700 dark:text-gray-300">
                                🕒 {visit.timeWindow}
                            </p>

                            <p className="text-sm text-gray-700 dark:text-gray-300">
                                📍 {visit.address}
                            </p>

                            <div className="mt-3 flex flex-wrap gap-2">
                                {visit.status === 'upcoming' && (
                                    <button
                                        onClick={() => markCheckIn(visit)}
                                        className="rounded bg-blue-600 px-3 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    >
                                        {t('check_in_button')}
                                    </button>
                                )}

                                {visit.status === 'in_progress' && (
                                    <>
                                        <button
                                            onClick={() => markCheckOut(visit)}
                                            className="rounded bg-green-600 px-3 py-2 text-sm font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400"
                                        >
                                            {t('check_out_button')}
                                        </button>
                                        <button
                                            onClick={() => setSelectedVisit(visit)}
                                            className="rounded bg-orange-500 px-3 py-2 text-sm font-medium text-white hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400"
                                        >
                                            {t('add_report_button')}
                                        </button>
                                    </>
                                )}

                                {visit.status === 'completed' && (
                                    <span className="text-sm font-semibold text-green-600 dark:text-green-400">
                                        {t('visit_completed_label')}
                                    </span>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {selectedVisit && (
                    <InlineModal onClose={() => setSelectedVisit(null)}>
                        <h2 className="mb-3 text-xl font-bold text-[color:var(--color-accent)] text-center">
                            {t('report_for', { name: selectedVisit.userName })}
                        </h2>

                        <textarea
                            value={reportText}
                            onChange={(e) => setReportText(e.target.value)}
                            className="h-40 w-full rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 p-2 text-sm text-[color:var(--color-foreground)]"
                            placeholder={t('report_placeholder')}
                        />

                        <div className="mt-4 flex justify-end gap-2">
                            <button
                                onClick={() => setSelectedVisit(null)}
                                className="rounded bg-gray-300 dark:bg-gray-700 px-4 py-2 text-sm text-[color:var(--color-foreground)] hover:bg-gray-400 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400"
                            >
                                {t('cancel_button')}
                            </button>
                            <button
                                onClick={saveReport}
                                disabled={isSaving}
                                className="rounded bg-green-600 px-4 py-2 text-sm text-white hover:bg-green-700 disabled:opacity-50 focus:outline-none focus:ring-2 focus:ring-green-400"
                            >
                                {isSaving ? t('saving_label') : t('save_button')}
                            </button>
                        </div>
                    </InlineModal>
                )}
            </main>
        </div>
    );
}
