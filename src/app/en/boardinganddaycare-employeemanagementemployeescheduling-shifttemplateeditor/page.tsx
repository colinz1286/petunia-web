'use client';

// NOTE: This web page is intended to mirror the iOS view at
// .local-only/ios-real-reference/BoardingAndDaycareEmployeeManagementEmployeeSchedulingShiftTemplateEditorView.swift.
// Keep field set, save payload, and cancel/save flows aligned across both files.
import { useState, type ReactNode } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { getApp, getApps, initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { Timestamp, addDoc, collection, getFirestore } from 'firebase/firestore';

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

function currentTimeValue() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    return `${hours}:${minutes}`;
}

export default function BoardingAndDaycareEmployeeManagementEmployeeSchedulingShiftTemplateEditorPage() {
    const t = useTranslations('boardingAndDaycareEmployeeManagementEmployeeSchedulingShiftTemplateEditor');
    const router = useRouter();
    const searchParams = useSearchParams();

    const businessId = searchParams.get('businessId') ?? '';

    const [templateName, setTemplateName] = useState('');
    const [startTime, setStartTime] = useState(currentTimeValue);
    const [endTime, setEndTime] = useState(currentTimeValue);
    const [breakMinutes, setBreakMinutes] = useState('');
    const [requiredHeadcount, setRequiredHeadcount] = useState('');
    const [isSaving, setIsSaving] = useState(false);
    const [statusMessage, setStatusMessage] = useState<string | null>(null);

    const saveTemplate = async () => {
        setIsSaving(true);
        setStatusMessage(null);

        const breakValue = Number.parseInt(breakMinutes, 10) || 0;
        const headcountValue = Number.parseInt(requiredHeadcount, 10) || 0;

        const payload = {
            name: templateName,
            startTime,
            endTime,
            breakMinutes: breakValue,
            requiredHeadcount: headcountValue,
            isActive: true,
            createdAt: Timestamp.now(),
            updatedAt: Timestamp.now(),
            updatedBy: auth.currentUser?.uid ?? '',
        };

        try {
            await addDoc(collection(db, 'businesses', businessId, 'shiftTemplates'), payload);
            router.push(
                `/boardinganddaycare-employeemanagementemployeescheduling-shifttemplates?businessId=${encodeURIComponent(businessId)}`
            );
        } catch (error) {
            setStatusMessage(error instanceof Error ? error.message : t('unknown_error'));
        }

        setIsSaving(false);
    };

    return (
        <div className="min-h-screen bg-[color:var(--color-background)] px-4 py-8 text-[color:var(--color-foreground)]">
            <div className="mx-auto w-full max-w-2xl rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
                <div className="mb-6 flex items-center justify-between gap-4">
                    <h1 className="text-3xl font-bold text-[color:var(--color-accent)]">
                        {t('title')}
                    </h1>

                    <button
                        type="button"
                        onClick={() => router.back()}
                        className="text-sm font-medium text-[color:var(--color-accent)] underline"
                    >
                        {t('cancel_button')}
                    </button>
                </div>

                <hr className="mb-6 border-[color:var(--color-accent)]/20" />

                <div className="space-y-5">
                    <FormField label={t('template_name_label')}>
                        <input
                            type="text"
                            value={templateName}
                            onChange={(event) => setTemplateName(event.target.value)}
                            placeholder={t('template_name_placeholder')}
                            className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm outline-none ring-0 transition-colors focus:border-[color:var(--color-accent)]"
                        />
                    </FormField>

                    <FormField label={t('start_time_label')}>
                        <input
                            type="time"
                            value={startTime}
                            onChange={(event) => setStartTime(event.target.value)}
                            className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm outline-none ring-0 transition-colors focus:border-[color:var(--color-accent)]"
                        />
                    </FormField>

                    <FormField label={t('end_time_label')}>
                        <input
                            type="time"
                            value={endTime}
                            onChange={(event) => setEndTime(event.target.value)}
                            className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm outline-none ring-0 transition-colors focus:border-[color:var(--color-accent)]"
                        />
                    </FormField>

                    <FormField label={t('break_minutes_label')}>
                        <input
                            type="number"
                            inputMode="numeric"
                            value={breakMinutes}
                            onChange={(event) => setBreakMinutes(event.target.value)}
                            placeholder="30"
                            className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm outline-none ring-0 transition-colors focus:border-[color:var(--color-accent)]"
                        />
                    </FormField>

                    <FormField label={t('required_headcount_label')}>
                        <input
                            type="number"
                            inputMode="numeric"
                            value={requiredHeadcount}
                            onChange={(event) => setRequiredHeadcount(event.target.value)}
                            placeholder="2"
                            className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm outline-none ring-0 transition-colors focus:border-[color:var(--color-accent)]"
                        />
                    </FormField>

                    {statusMessage ? (
                        <p className="text-xs text-gray-500">
                            {statusMessage}
                        </p>
                    ) : null}

                    <button
                        type="button"
                        onClick={() => void saveTemplate()}
                        disabled={isSaving || templateName.trim() === '' || businessId === ''}
                        className="w-full rounded-lg bg-[color:var(--color-accent)] px-4 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
                    >
                        {isSaving ? t('saving') : t('save_button')}
                    </button>
                </div>
            </div>
        </div>
    );
}

function FormField({
    label,
    children
}: {
    label: string;
    children: ReactNode;
}) {
    return (
        <label className="block space-y-2">
            <span className="block text-sm font-semibold text-[color:var(--color-foreground)]">
                {label}
            </span>
            {children}
        </label>
    );
}
