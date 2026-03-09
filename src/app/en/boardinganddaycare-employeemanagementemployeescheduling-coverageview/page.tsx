'use client';

// NOTE: This web page is intended to mirror the iOS view at
// .local-only/ios-real-reference/BoardingAndDaycareEmployeeManagementEmployeeSchedulingCoverageView.swift.
// Keep date navigation, hourly coverage math, and status rendering aligned across both files.
import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { getApp, getApps, initializeApp } from 'firebase/app';
import { Timestamp, collection, getDocs, getFirestore, query, where } from 'firebase/firestore';

type CoverageHour = {
    id: string;
    hour: number;
    scheduled: number;
    required: number;
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

function parseInitialDate(value: string | null) {
    if (!value) {
        return new Date();
    }

    const parsed = new Date(value);
    return Number.isNaN(parsed.getTime()) ? new Date() : parsed;
}

function addDays(date: Date, days: number) {
    const next = new Date(date);
    next.setDate(next.getDate() + days);
    return next;
}

function formatDate(date: Date) {
    return new Intl.DateTimeFormat('en-US', {
        dateStyle: 'medium',
    }).format(date);
}

function hourLabel(hour: number) {
    const date = new Date();
    date.setHours(hour, 0, 0, 0);
    return new Intl.DateTimeFormat('en-US', {
        hour: 'numeric',
        hour12: true,
    }).format(date).replace(' ', '').toUpperCase();
}

function buildDefaultCoverage() {
    return Array.from({ length: 17 }, (_, index) => {
        const hour = index + 6;
        return {
            id: `hour-${hour}`,
            hour,
            scheduled: 0,
            required: 2,
        };
    });
}

function statusClass(hour: CoverageHour) {
    if (hour.scheduled < hour.required) {
        return 'text-red-600';
    }

    if (hour.scheduled > hour.required) {
        return 'text-orange-500';
    }

    return 'text-green-600';
}

export default function BoardingAndDaycareEmployeeManagementEmployeeSchedulingCoverageViewPage() {
    const t = useTranslations('boardingAndDaycareEmployeeManagementEmployeeSchedulingCoverageView');
    const router = useRouter();
    const searchParams = useSearchParams();

    const businessId = searchParams.get('businessId') ?? '';

    const [selectedDate, setSelectedDate] = useState<Date>(() => parseInitialDate(searchParams.get('date')));
    const [coverage, setCoverage] = useState<CoverageHour[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        void loadCoverage();
    }, [businessId, selectedDate]);

    const loadCoverage = async () => {
        setIsLoading(true);

        if (businessId === '') {
            setCoverage([]);
            setIsLoading(false);
            return;
        }

        try {
            const startOfDay = new Date(selectedDate);
            startOfDay.setHours(0, 0, 0, 0);

            const endOfDay = new Date(startOfDay);
            endOfDay.setDate(endOfDay.getDate() + 1);

            const snapshot = await getDocs(
                query(
                    collection(db, 'businesses', businessId, 'scheduledShifts'),
                    where('date', '>=', Timestamp.fromDate(startOfDay)),
                    where('date', '<', Timestamp.fromDate(endOfDay))
                )
            );

            const hourlyCounts: Record<number, number> = {};

            for (let hour = 0; hour <= 23; hour += 1) {
                hourlyCounts[hour] = 0;
            }

            for (const rowDoc of snapshot.docs) {
                const data = rowDoc.data() as Record<string, unknown>;
                const start = data.startTime instanceof Timestamp ? data.startTime.toDate() : null;
                const end = data.endTime instanceof Timestamp ? data.endTime.toDate() : null;

                if (!start || !end) {
                    continue;
                }

                const startHour = start.getHours();
                const endHour = end.getHours();

                for (let hour = startHour; hour < endHour; hour += 1) {
                    hourlyCounts[hour] = (hourlyCounts[hour] ?? 0) + 1;
                }
            }

            setCoverage(
                buildDefaultCoverage().map((hour) => ({
                    ...hour,
                    scheduled: hourlyCounts[hour.hour] ?? 0,
                }))
            );
        } catch (error) {
            console.error('Coverage error:', error);
            setCoverage([]);
        }

        setIsLoading(false);
    };

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

                <div className="mb-6 flex items-center">
                    <button
                        type="button"
                        onClick={() => setSelectedDate((current) => addDays(current, -1))}
                        className="text-[color:var(--color-accent)]"
                        aria-label={t('previous_day')}
                    >
                        &lt;
                    </button>

                    <div className="flex-1 text-center text-lg font-semibold">
                        {formatDate(selectedDate)}
                    </div>

                    <button
                        type="button"
                        onClick={() => setSelectedDate((current) => addDays(current, 1))}
                        className="text-[color:var(--color-accent)]"
                        aria-label={t('next_day')}
                    >
                        &gt;
                    </button>
                </div>

                <hr className="mb-6 border-[color:var(--color-accent)]/20" />

                {isLoading ? (
                    <div className="flex justify-center py-4">
                        <div className="h-8 w-8 animate-spin rounded-full border-4 border-[color:var(--color-accent)]/20 border-t-[color:var(--color-accent)]" />
                    </div>
                ) : (
                    <div className="space-y-3">
                        {coverage.map((hour) => (
                            <div
                                key={hour.id}
                                className="flex items-center rounded-lg border border-black/5 bg-white p-4 shadow-sm"
                            >
                                <p className="text-base font-semibold text-[color:var(--color-foreground)]">
                                    {hourLabel(hour.hour)}
                                </p>

                                <div className="ml-auto">
                                    <p className={`text-sm font-medium ${statusClass(hour)}`}>
                                        {hour.scheduled} / {hour.required}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
