'use client';

import React, { useCallback, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';

import {
    getFirestore,
    collection,
    getDocs,
    getDoc,
    deleteDoc,
    doc,
    orderBy,
    query,
    Timestamp,
} from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

type AdoptionApplication = {
    id: string;
    userId: string;
    userEmail: string;
    userName: string;
    userPhone: string;
    userAddress: string;
    status: string;
    timestamp: Date;
};

type ApplicationDetail = {
    userName: string;
    userEmail: string;
    userPhone: string;
    userAddress: string;
    answers: { question: string; answer: string }[];
};

export default function BreederSubmittedApplicationsPage() {
    const router = useRouter();
    const locale = useLocale();
    const t = useTranslations('breederSubmittedApplications');

    const [businessId, setBusinessId] = useState<string>('');
    const [applications, setApplications] = useState<AdoptionApplication[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // detail view state
    const [selectedAppId, setSelectedAppId] = useState<string | null>(null);
    const [detail, setDetail] = useState<ApplicationDetail | null>(null);
    const [detailLoading, setDetailLoading] = useState(false);

    // Load businessId
    useEffect(() => {
        const auth = getAuth();
        const user = auth.currentUser;
        if (!user) {
            setError('You must be logged in.');
            setLoading(false);
            return;
        }

        const db = getFirestore();
        const q = query(collection(db, 'businesses'), orderBy('ownerId'));

        getDocs(q)
            .then((snap) => {
                const match = snap.docs.find((d) => d.data().ownerId === user.uid);
                if (!match) {
                    setError('No business found for this user.');
                    setLoading(false);
                    return;
                }
                setBusinessId(match.id);
            })
            .catch((err) => {
                setError(`Failed to load business: ${err.message}`);
                setLoading(false);
            });
    }, []);

    // Load list
    const loadApplications = useCallback(async () => {
        if (!businessId) return;
        setLoading(true);
        setError(null);

        try {
            const db = getFirestore();
            const appsRef = collection(db, 'businesses', businessId, 'adoptionApplications');
            const q = query(appsRef, orderBy('timestamp', 'desc'));
            const snap = await getDocs(q);

            const items: AdoptionApplication[] = snap.docs.map((d) => {
                const data = d.data();
                return {
                    id: d.id,
                    userId: (data.userId as string) ?? '',
                    userEmail: (data.userEmail as string) ?? '',
                    userName: (data.userName as string) ?? '',
                    userPhone: (data.userPhone as string) ?? '',
                    userAddress: (data.userAddress as string) ?? '',
                    status: (data.status as string) ?? 'submitted',
                    timestamp: (data.timestamp as Timestamp)?.toDate() ?? new Date(),
                };
            });

            setApplications(items);
        } catch (err: unknown) {
            const e = err as Error;
            setError(`Failed to load applications: ${e.message}`);
        } finally {
            setLoading(false);
        }
    }, [businessId]);

    useEffect(() => {
        if (businessId) void loadApplications();
    }, [businessId, loadApplications]);

    const loadDetail = useCallback(
        async (id: string) => {
            if (!businessId) return;
            setDetailLoading(true);
            setError(null);
            try {
                const db = getFirestore();
                const ref = doc(db, 'businesses', businessId, 'adoptionApplications', id);
                const snap = await getDoc(ref);
                if (!snap.exists()) {
                    setError(t('application_not_found'));
                    setDetailLoading(false);
                    return;
                }
                const data = snap.data() || {};
                const answers = (data.answers as { question: string; answer: string }[]) ?? [];
                setDetail({
                    userName: (data.userName as string) ?? '',
                    userEmail: (data.userEmail as string) ?? '',
                    userPhone: (data.userPhone as string) ?? '',
                    userAddress: (data.userAddress as string) ?? '',
                    answers,
                });
            } catch (err: unknown) {
                const e = err as Error;
                setError(`${t('failed_to_load_application_detail')} ${e.message}`);
            } finally {
                setDetailLoading(false);
            }
        },
        [businessId, t]
    );

    const handleDelete = useCallback(
        async (id: string) => {
            if (!confirm(t('delete_application_confirm'))) return;
            try {
                const db = getFirestore();
                await deleteDoc(doc(db, 'businesses', businessId, 'adoptionApplications', id));
                setApplications((prev) => prev.filter((app) => app.id !== id));
                if (selectedAppId === id) {
                    setSelectedAppId(null);
                    setDetail(null);
                }
            } catch (err: unknown) {
                const e = err as Error;
                setError(`${t('failed_to_delete_application')} ${e.message}`);
            }
        },
        [businessId, selectedAppId, t]
    );

    const goBack = useCallback(() => {
        if (selectedAppId) {
            // back to list
            setSelectedAppId(null);
            setDetail(null);
        } else {
            // back to Applications & Contracts menu
            router.push(`/${locale}/breederapplicationsandcontracts`);
        }
    }, [locale, router, selectedAppId]);

    const formatDate = (date: Date) =>
        new Intl.DateTimeFormat(locale, {
            dateStyle: 'medium',
            timeStyle: 'short',
        }).format(date);

    // -------- UI --------
    return (
        <main className="mx-auto w-full max-w-2xl px-4 py-6 text-[color:var(--color-foreground)]">
            {/* Header */}
            <div className="mb-6 flex items-center justify-between">
                <button
                    type="button"
                    onClick={goBack}
                    className="rounded-xl border border-gray-300 px-3 py-1.5 text-sm font-medium hover:bg-gray-50"
                >
                    ← Back
                </button>
                <h1 className="text-center text-xl font-bold text-[color:var(--color-accent)]">
                    {selectedAppId
                        ? t('application_detail_title')
                        : t('submitted_adoption_applications_title')}
                </h1>
                {selectedAppId ? (
                    <button
                        type="button"
                        onClick={() => handleDelete(selectedAppId)}
                        className="rounded-xl bg-red-600 px-3 py-1.5 text-sm font-semibold text-white hover:bg-red-700"
                    >
                        {t('delete_button')}
                    </button>
                ) : (
                    <div className="w-[68px]" />
                )}
            </div>

            {/* List or Detail */}
            {!selectedAppId ? (
                // List
                loading ? (
                    <div className="text-center text-gray-500">{t('loading_submitted_applications')}</div>
                ) : error ? (
                    <div className="space-y-3 text-center">
                        <div className="text-red-600">{error}</div>
                        <button
                            type="button"
                            onClick={loadApplications}
                            className="rounded-lg bg-[color:var(--color-accent)] px-4 py-2 text-sm font-semibold text-white hover:opacity-90"
                        >
                            {t('reload_button')}
                        </button>
                    </div>
                ) : applications.length === 0 ? (
                    <div className="space-y-3 text-center">
                        <div className="text-gray-600">{t('no_submitted_applications')}</div>
                        <button
                            type="button"
                            onClick={loadApplications}
                            className="rounded-lg bg-[color:var(--color-accent)] px-4 py-2 text-sm font-semibold text-white hover:opacity-90"
                        >
                            {t('reload_button')}
                        </button>
                    </div>
                ) : (
                    <ul className="space-y-4">
                        {applications.map((app) => (
                            <li
                                key={app.id}
                                className="cursor-pointer rounded-xl border border-gray-200 bg-white p-4 shadow-sm hover:bg-gray-50"
                                onClick={() => {
                                    setSelectedAppId(app.id);
                                    void loadDetail(app.id);
                                }}
                            >
                                <div className="mb-1 font-semibold">{app.userName || t('unknown_user')}</div>
                                {app.userEmail && (
                                    <div className="text-sm text-blue-600 underline">{app.userEmail}</div>
                                )}
                                <div className="mt-1 flex items-center gap-2 text-xs text-gray-500">
                                    <span className="font-medium text-[color:var(--color-accent)]">{app.status}</span>
                                    <span>•</span>
                                    <span>{formatDate(app.timestamp)}</span>
                                </div>
                            </li>
                        ))}
                    </ul>
                )
            ) : detailLoading ? (
                <div className="text-center text-gray-500">{t('loading_application_detail')}</div>
            ) : error ? (
                <div className="space-y-3 text-center">
                    <div className="text-red-600">{error}</div>
                    <button
                        type="button"
                        onClick={() => selectedAppId && loadDetail(selectedAppId)}
                        className="rounded-lg bg-[color:var(--color-accent)] px-4 py-2 text-sm font-semibold text-white hover:opacity-90"
                    >
                        {t('reload_button')}
                    </button>
                </div>
            ) : detail ? (
                <div className="space-y-4 rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
                    <div>
                        <div className="font-semibold text-lg">{detail.userName || t('unknown_user')}</div>
                        {detail.userEmail && (
                            <a
                                href={`mailto:${detail.userEmail}`}
                                className="block text-sm text-blue-600 hover:underline"
                            >
                                {detail.userEmail}
                            </a>
                        )}
                        {detail.userPhone && (
                            <a
                                href={`tel:${detail.userPhone.replace(/\D/g, '')}`}
                                className="block text-sm text-blue-600 hover:underline"
                            >
                                {detail.userPhone}
                            </a>
                        )}
                        {detail.userAddress && (
                            <div className="text-sm text-gray-500">{detail.userAddress}</div>
                        )}
                    </div>
                    <hr />
                    <div>
                        {detail.answers.length === 0 ? (
                            <div className="text-sm text-gray-500">{t('no_answer_provided')}</div>
                        ) : (
                            detail.answers.map((qa, idx) => (
                                <div key={idx} className="mb-4">
                                    <div className="font-medium text-sm">{qa.question}</div>
                                    <div className="text-sm text-gray-600">
                                        {qa.answer || t('no_answer_provided')}
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            ) : null}
        </main>
    );
}
