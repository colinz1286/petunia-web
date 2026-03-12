'use client';

// NOTE: This web page is intended to mirror the iOS view at
// .local-only/ios-real-reference/BoardingAndDaycareEmployeeManagementEmployeeSchedulingConflictDetectionView.swift.
// Keep conflict detection logic, list rendering, and date formatting aligned across both files.
import { useCallback, useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { getApp, getApps, initializeApp } from 'firebase/app';
import { Timestamp, collection, getDocs, getFirestore } from 'firebase/firestore';

type SchedulingConflict = {
    id: string;
    employeeName: string;
    message: string;
    date: Date;
};

type ShiftRow = {
    id: string;
    employee: string;
    start: Date;
    end: Date;
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

function formatDate(date: Date) {
    return new Intl.DateTimeFormat('en-US', {
        dateStyle: 'medium',
        timeStyle: 'short',
    }).format(date);
}

export default function BoardingAndDaycareEmployeeManagementEmployeeSchedulingConflictDetectionPage() {
    const t = useTranslations('boardingAndDaycareEmployeeManagementEmployeeSchedulingConflictDetection');
    const router = useRouter();
    const searchParams = useSearchParams();

    const businessId = searchParams.get('businessId') ?? '';

    const [conflicts, setConflicts] = useState<SchedulingConflict[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    const detectConflicts = useCallback(async () => {
        setIsLoading(true);

        if (businessId === '') {
            setConflicts([]);
            setIsLoading(false);
            return;
        }

        try {
            const snapshot = await getDocs(
                collection(db, 'businesses', businessId, 'scheduledShifts')
            );

            const shifts: ShiftRow[] = snapshot.docs.flatMap((rowDoc) => {
                const data = rowDoc.data() as Record<string, unknown>;
                const start = data.startTime instanceof Timestamp ? data.startTime.toDate() : null;
                const end = data.endTime instanceof Timestamp ? data.endTime.toDate() : null;

                if (!start || !end) {
                    return [];
                }

                return [{
                    id: rowDoc.id,
                    employee: typeof data.employeeName === 'string' ? data.employeeName : t('employee_fallback'),
                    start,
                    end,
                }];
            });

            const detected: SchedulingConflict[] = [];

            for (let i = 0; i < shifts.length; i += 1) {
                for (let j = i + 1; j < shifts.length; j += 1) {
                    const a = shifts[i];
                    const b = shifts[j];

                    if (a.employee === b.employee) {
                        if (a.start < b.end && b.start < a.end) {
                            detected.push({
                                id: `${a.id}-${b.id}-overlap-${i}-${j}`,
                                employeeName: a.employee,
                                message: t('overlapping_shift_conflict'),
                                date: a.start,
                            });
                        }
                    }

                    const duration = (b.end.getTime() - b.start.getTime()) / 3600000;

                    if (duration > 16) {
                        detected.push({
                            id: `${b.id}-length-${i}-${j}`,
                            employeeName: b.employee,
                            message: t('shift_too_long_conflict'),
                            date: b.start,
                        });
                    }
                }
            }

            setConflicts(detected);
        } catch (error) {
            console.error('Conflict detection error:', error);
            setConflicts([]);
        }

        setIsLoading(false);
    }, [businessId, t]);

    useEffect(() => {
        void detectConflicts();
    }, [detectConflicts]);

    return (
        <div className="min-h-screen bg-[color:var(--color-background)] px-4 py-8 text-[color:var(--color-foreground)]">
            <div className="mx-auto w-full max-w-2xl">
                <button
                    type="button"
                    onClick={() => router.back()}
                    className="mb-4 text-sm font-medium text-[color:var(--color-accent)] underline"
                >
                    {t('back_button')}
                </button>

                <h1 className="text-4xl font-bold text-[color:var(--color-accent)]">
                    {t('title')}
                </h1>

                <hr className="my-6 border-[color:var(--color-accent)]/20" />

                {isLoading ? (
                    <div className="flex justify-center py-4">
                        <div className="h-8 w-8 animate-spin rounded-full border-4 border-[color:var(--color-accent)]/20 border-t-[color:var(--color-accent)]" />
                    </div>
                ) : conflicts.length === 0 ? (
                    <p className="text-sm text-gray-500">
                        {t('no_conflicts_found')}
                    </p>
                ) : (
                    <div className="space-y-3">
                        {conflicts.map((conflict) => (
                            <div
                                key={conflict.id}
                                className="rounded-lg border border-black/5 bg-white p-4 shadow-sm"
                            >
                                <p className="text-base font-semibold text-[color:var(--color-foreground)]">
                                    {conflict.employeeName}
                                </p>

                                <p className="mt-1 text-xs text-gray-500">
                                    {conflict.message}
                                </p>

                                <p className="mt-1 text-[11px] text-gray-500">
                                    {formatDate(conflict.date)}
                                </p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
