'use client';

// NOTE: This web page is intended to mirror the iOS view at
// .local-only/ios-real-reference/BoardingAndDaycareEmployeeManagementEmployeeSchedulingView.swift.
// Keep module labels, loading behavior, and navigation targets aligned across both files.
import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { getApp, getApps, initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { collection, getDocs, getFirestore, limit, query, where } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY!,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN!,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID!,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET!,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID!,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID!,
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export default function BoardingAndDaycareEmployeeManagementEmployeeSchedulingPage() {
    const t = useTranslations('boardingAndDaycareEmployeeManagementEmployeeScheduling');

    const [businessId, setBusinessId] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        void fetchBusinessId();
    }, []);

    const fetchBusinessId = async () => {
        const ownerId = auth.currentUser?.uid;

        if (!ownerId) {
            setIsLoading(false);
            return;
        }

        try {
            const snapshot = await getDocs(
                query(
                    collection(db, 'businesses'),
                    where('ownerId', '==', ownerId),
                    limit(1)
                )
            );

            const firstBusiness = snapshot.docs[0];
            if (firstBusiness) {
                setBusinessId(firstBusiness.id);
            }
        } finally {
            setIsLoading(false);
        }
    };

    const buildHref = (path: string, extraParams?: Record<string, string>) => {
        const params = new URLSearchParams();
        params.set('businessId', businessId);

        if (extraParams) {
            for (const [key, value] of Object.entries(extraParams)) {
                params.set(key, value);
            }
        }

        return `${path}?${params.toString()}`;
    };

    const showComingSoonAlert = () => {
        window.alert(`${t('feature_coming_soon_title')}\n\n${t('feature_coming_soon_message')}`);
    };

    return (
        <div className="min-h-screen bg-[color:var(--color-background)] px-4 py-8 text-[color:var(--color-foreground)]">
            <div className="mx-auto w-full max-w-md">
                <h1 className="mb-6 text-center text-4xl font-bold text-[color:var(--color-accent)]">
                    {t('title')}
                </h1>

                <hr className="mb-6 border-[color:var(--color-accent)]/20" />

                {isLoading ? (
                    <div className="flex justify-center pt-4">
                        <div className="h-8 w-8 animate-spin rounded-full border-4 border-[color:var(--color-accent)]/20 border-t-[color:var(--color-accent)]" />
                    </div>
                ) : (
                    <div className="space-y-3">
                        <DashboardLink
                            href={buildHref('/boardinganddaycare-employeemanagementemployeescheduling-shifttemplates')}
                            label={t('shift_templates')}
                        />

                        <DashboardLink
                            href={buildHref('/boardinganddaycare-employeemanagementemployeescheduling-shifttemplates')}
                            label={t('shift_templates')}
                        />

                        <DashboardLink
                            href={buildHref(
                                '/boardinganddaycare-employeemanagementemployeescheduling-employeeavailability',
                                { employeeUserId: '' }
                            )}
                            label={t('employee_availability')}
                        />

                        <DashboardLink
                            href={buildHref('/boardinganddaycare-employeemanagementemployeescheduling-schedulecalendar')}
                            label={t('schedule_calendar')}
                        />

                        <DashboardLink
                            href={buildHref('/boardinganddaycare-employeemanagementemployeescheduling-coverageview')}
                            label={t('coverage_view')}
                        />

                        <DashboardLink
                            href={buildHref('/boardinganddaycare-employeemanagementemployeescheduling-conflictdetection')}
                            label={t('conflict_detection')}
                        />

                        <DisabledButton
                            label={t('open_shifts_board')}
                            onClick={showComingSoonAlert}
                        />
                    </div>
                )}
            </div>
        </div>
    );
}

function DashboardLink({
    href,
    label
}: {
    href: string;
    label: string;
}) {
    return (
        <Link
            href={href}
            className="block w-full rounded-lg bg-[color:var(--color-accent)] px-4 py-3 text-center text-sm font-semibold text-white transition-opacity hover:opacity-90"
        >
            {label}
        </Link>
    );
}

function DisabledButton({
    label,
    onClick
}: {
    label: string;
    onClick: () => void;
}) {
    return (
        <button
            type="button"
            onClick={onClick}
            className="block w-full rounded-lg bg-gray-300 px-4 py-3 text-center text-sm font-semibold text-gray-600"
        >
            {label}
        </button>
    );
}
