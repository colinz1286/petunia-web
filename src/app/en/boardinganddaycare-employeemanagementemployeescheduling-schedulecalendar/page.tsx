'use client';

// NOTE: This web page is intended to mirror the iOS view at
// .local-only/ios-real-reference/BoardingAndDaycareEmployeeManagementEmployeeSchedulingScheduleCalendarView.swift.
// Keep date navigation, Firestore filtering, and create-shift entry aligned across both files.
import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { getApp, getApps, initializeApp } from 'firebase/app';
import { Timestamp, collection, getDocs, getFirestore, query, where } from 'firebase/firestore';

type EmployeeScheduledShift = {
    id: string;
    employeeName: string;
    startTime: Date;
    endTime: Date;
    role: string;
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

function dateParamValue(date: Date) {
    return date.toISOString().slice(0, 10);
}

function formatDate(date: Date) {
    return new Intl.DateTimeFormat('en-US', {
        dateStyle: 'medium',
    }).format(date);
}

function formatTime(date: Date) {
    return new Intl.DateTimeFormat('en-US', {
        timeStyle: 'short',
    }).format(date);
}

export default function BoardingAndDaycareEmployeeManagementEmployeeSchedulingScheduleCalendarPage() {
    const t = useTranslations('boardingAndDaycareEmployeeManagementEmployeeSchedulingScheduleCalendar');
    const router = useRouter();
    const searchParams = useSearchParams();

    const businessId = searchParams.get('businessId') ?? '';

    const [selectedDate, setSelectedDate] = useState<Date>(() => parseInitialDate(searchParams.get('date')));
    const [shifts, setShifts] = useState<EmployeeScheduledShift[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        void loadShifts();
    }, [businessId, selectedDate]);

    const loadShifts = async () => {
        setIsLoading(true);

        if (businessId === '') {
            setShifts([]);
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

            const rows: EmployeeScheduledShift[] = snapshot.docs.flatMap((rowDoc) => {
                const data = rowDoc.data() as Record<string, unknown>;
                const start = data.startTime instanceof Timestamp ? data.startTime.toDate() : null;
                const end = data.endTime instanceof Timestamp ? data.endTime.toDate() : null;

                if (!start || !end) {
                    return [];
                }

                return [{
                    id: rowDoc.id,
                    employeeName: typeof data.employeeName === 'string' ? data.employeeName : t('employee_fallback'),
                    startTime: start,
                    endTime: end,
                    role: typeof data.role === 'string' ? data.role : '',
                }];
            });

            rows.sort((left, right) => left.startTime.getTime() - right.startTime.getTime());
            setShifts(rows);
        } catch (error) {
            console.error('Error loading shifts:', error);
            setShifts([]);
        }

        setIsLoading(false);
    };

    const createShiftHref = businessId === ''
        ? ''
        : `/boardinganddaycare-employeemanagementemployeescheduling-createshift?businessId=${encodeURIComponent(businessId)}&date=${encodeURIComponent(dateParamValue(selectedDate))}`;

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

                <div className="flex items-center gap-4">
                    <h1 className="text-4xl font-bold text-[color:var(--color-accent)]">
                        {t('title')}
                    </h1>

                    <div className="ml-auto">
                        <button
                            type="button"
                            onClick={() => {
                                if (createShiftHref !== '') {
                                    router.push(createShiftHref);
                                }
                            }}
                            disabled={createShiftHref === ''}
                            aria-label={t('create_shift')}
                            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--color-accent)]/20 bg-white text-xl leading-none text-[color:var(--color-accent)] transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
                        >
                            +
                        </button>
                    </div>
                </div>

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
                ) : shifts.length === 0 ? (
                    <p className="pt-4 text-sm text-gray-500">
                        {t('no_shifts_scheduled')}
                    </p>
                ) : (
                    <div className="space-y-3">
                        {shifts.map((shift) => (
                            <div
                                key={shift.id}
                                className="rounded-lg border border-black/5 bg-white p-4 shadow-sm"
                            >
                                <p className="text-base font-semibold text-[color:var(--color-foreground)]">
                                    {shift.employeeName}
                                </p>

                                <p className="mt-1 text-xs text-gray-500">
                                    {formatTime(shift.startTime)} - {formatTime(shift.endTime)}
                                </p>

                                <p className="mt-1 text-[11px] text-gray-500">
                                    {shift.role}
                                </p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
