'use client';

// NOTE: This web page is intended to mirror the iOS view at
// .local-only/ios-real-reference/BoardingAndDaycareEmployeeManagementEmployeeSchedulingShiftTemplatesView.swift.
// Keep list loading, empty state, and add-template entry aligned across both files.
import { useCallback, useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { getApp, getApps, initializeApp } from 'firebase/app';
import { collection, getDocs, getFirestore, orderBy, query } from 'firebase/firestore';

type EmployeeShiftTemplate = {
    id: string;
    name: string;
    startTime: string;
    endTime: string;
    breakMinutes: number;
    requiredHeadcount: number;
    isActive: boolean;
};

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY!,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN!,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID!,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET!,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID!,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID!,
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export default function BoardingAndDaycareEmployeeManagementEmployeeSchedulingShiftTemplatesPage() {
    const t = useTranslations('boardingAndDaycareEmployeeManagementEmployeeSchedulingShiftTemplates');
    const searchParams = useSearchParams();

    const businessId = searchParams.get('businessId') ?? '';

    const [templates, setTemplates] = useState<EmployeeShiftTemplate[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    const loadTemplates = useCallback(async () => {
        setIsLoading(true);

        if (businessId === '') {
            setTemplates([]);
            setIsLoading(false);
            return;
        }

        try {
            const snapshot = await getDocs(
                query(
                    collection(db, 'businesses', businessId, 'shiftTemplates'),
                    orderBy('name')
                )
            );

            const rows: EmployeeShiftTemplate[] = snapshot.docs.map((doc) => {
                const data = doc.data() as Record<string, unknown>;

                return {
                    id: doc.id,
                    name: typeof data.name === 'string' ? data.name : '',
                    startTime: typeof data.startTime === 'string' ? data.startTime : '',
                    endTime: typeof data.endTime === 'string' ? data.endTime : '',
                    breakMinutes: typeof data.breakMinutes === 'number' ? data.breakMinutes : 0,
                    requiredHeadcount: typeof data.requiredHeadcount === 'number' ? data.requiredHeadcount : 0,
                    isActive: typeof data.isActive === 'boolean' ? data.isActive : true,
                };
            });

            setTemplates(rows);
        } finally {
            setIsLoading(false);
        }
    }, [businessId]);

    useEffect(() => {
        void loadTemplates();
    }, [loadTemplates]);

    const addTemplateHref = businessId === ''
        ? '/boardinganddaycare-employeemanagementemployeescheduling-shifttemplateeditor'
        : `/boardinganddaycare-employeemanagementemployeescheduling-shifttemplateeditor?businessId=${encodeURIComponent(businessId)}`;

    return (
        <div className="min-h-screen bg-[color:var(--color-background)] px-4 py-8 text-[color:var(--color-foreground)]">
            <div className="mx-auto w-full max-w-md">
                <div className="mb-5 flex items-center gap-3">
                    <h1 className="text-4xl font-bold text-[color:var(--color-accent)]">
                        {t('title')}
                    </h1>

                    <div className="ml-auto">
                        <Link
                            href={addTemplateHref}
                            aria-label={t('add_shift_template')}
                            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--color-accent)]/20 bg-white text-[color:var(--color-accent)] transition-opacity hover:opacity-90"
                        >
                            <span className="text-xl leading-none">+</span>
                        </Link>
                    </div>
                </div>

                <hr className="mb-6 border-[color:var(--color-accent)]/20" />

                {isLoading ? (
                    <div className="flex justify-center py-4">
                        <div className="h-8 w-8 animate-spin rounded-full border-4 border-[color:var(--color-accent)]/20 border-t-[color:var(--color-accent)]" />
                    </div>
                ) : templates.length === 0 ? (
                    <p className="pt-4 text-sm text-gray-500">
                        {t('no_shift_templates')}
                    </p>
                ) : (
                    <div className="space-y-3">
                        {templates.map((template) => (
                            <div
                                key={template.id}
                                className="rounded-lg border border-black/5 bg-white px-4 py-4 shadow-sm"
                            >
                                <p className="text-base font-semibold text-[color:var(--color-foreground)]">
                                    {template.name}
                                </p>

                                <p className="mt-1 text-xs text-gray-500">
                                    {template.startTime} - {template.endTime}
                                </p>

                                <p className="mt-1 text-xs text-[color:var(--color-foreground)]">
                                    {t('required_headcount_format', { count: template.requiredHeadcount })}
                                </p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
