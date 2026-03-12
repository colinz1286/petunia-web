'use client';

// NOTE: This web page is intended to mirror the iOS view at
// .local-only/ios-real-reference/BoardingAndDaycareEmployeeManagementEmployeeSchedulingCreateShiftView.swift.
// Keep employee loading, time composition, and save payload aligned across both files.
import { useCallback, useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { getApp, getApps, initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { Timestamp, addDoc, collection, getDocs, getFirestore } from 'firebase/firestore';

type ShiftEmployee = {
    id: string;
    name: string;
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
const auth = getAuth(app);
const db = getFirestore(app);

function currentTimeValue() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    return `${hours}:${minutes}`;
}

function parseInitialDate(value: string | null) {
    if (!value) {
        return new Date();
    }

    const parsed = new Date(value);
    return Number.isNaN(parsed.getTime()) ? new Date() : parsed;
}

function timeValueToDate(baseDate: Date, timeValue: string) {
    const [hours = '00', minutes = '00'] = timeValue.split(':');
    const next = new Date(baseDate);
    next.setHours(Number.parseInt(hours, 10) || 0, Number.parseInt(minutes, 10) || 0, 0, 0);
    return next;
}

export default function BoardingAndDaycareEmployeeManagementEmployeeSchedulingCreateShiftPage() {
    const t = useTranslations('boardingAndDaycareEmployeeManagementEmployeeSchedulingCreateShift');
    const router = useRouter();
    const searchParams = useSearchParams();

    const businessId = searchParams.get('businessId') ?? '';
    const selectedDate = parseInitialDate(searchParams.get('date'));

    const [employees, setEmployees] = useState<ShiftEmployee[]>([]);
    const [selectedEmployeeId, setSelectedEmployeeId] = useState('');
    const [selectedEmployeeName, setSelectedEmployeeName] = useState('');
    const [role, setRole] = useState('');
    const [startTime, setStartTime] = useState(currentTimeValue);
    const [endTime, setEndTime] = useState(currentTimeValue);
    const [isLoadingEmployees, setIsLoadingEmployees] = useState(true);
    const [isSaving, setIsSaving] = useState(false);
    const [statusMessage, setStatusMessage] = useState<string | null>(null);

    const loadEmployees = useCallback(async () => {
        setIsLoadingEmployees(true);

        if (businessId === '') {
            setEmployees([]);
            setIsLoadingEmployees(false);
            return;
        }

        try {
            const snapshot = await getDocs(collection(db, 'businesses', businessId, 'employees'));

            const rows: ShiftEmployee[] = snapshot.docs.map((rowDoc) => {
                const data = rowDoc.data() as Record<string, unknown>;

                return {
                    id: rowDoc.id,
                    name: typeof data.fullName === 'string' ? data.fullName : t('employee_fallback'),
                };
            });

            setEmployees(rows);
            setIsLoadingEmployees(false);
        } catch (error) {
            console.error('Error loading employees:', error);
            setIsLoadingEmployees(false);
        }
    }, [businessId, t]);

    useEffect(() => {
        void loadEmployees();
    }, [loadEmployees]);

    const saveShift = async () => {
        setIsSaving(true);
        setStatusMessage(null);

        const startOfDay = new Date(selectedDate);
        startOfDay.setHours(0, 0, 0, 0);

        const finalStart = timeValueToDate(startOfDay, startTime);
        const finalEnd = timeValueToDate(startOfDay, endTime);

        const payload = {
            employeeId: selectedEmployeeId,
            employeeName: selectedEmployeeName,
            role,
            date: Timestamp.fromDate(startOfDay),
            startTime: Timestamp.fromDate(finalStart),
            endTime: Timestamp.fromDate(finalEnd),
            createdAt: Timestamp.now(),
            updatedAt: Timestamp.now(),
            updatedBy: auth.currentUser?.uid ?? '',
        };

        try {
            await addDoc(collection(db, 'businesses', businessId, 'scheduledShifts'), payload);
            router.push(
                `/boardinganddaycare-employeemanagementemployeescheduling-schedulecalendar?businessId=${encodeURIComponent(businessId)}&date=${encodeURIComponent(selectedDate.toISOString().slice(0, 10))}`
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
                    <div className="space-y-2">
                        <label className="block text-sm font-semibold text-[color:var(--color-foreground)]">
                            {t('select_employee_label')}
                        </label>

                        {isLoadingEmployees ? (
                            <div className="py-2">
                                <div className="h-6 w-6 animate-spin rounded-full border-2 border-[color:var(--color-accent)]/20 border-t-[color:var(--color-accent)]" />
                            </div>
                        ) : (
                            <select
                                value={selectedEmployeeId}
                                onChange={(event) => {
                                    const employeeId = event.target.value;
                                    setSelectedEmployeeId(employeeId);

                                    const employee = employees.find((row) => row.id === employeeId);
                                    setSelectedEmployeeName(employee?.name ?? '');
                                }}
                                className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm outline-none transition-colors focus:border-[color:var(--color-accent)]"
                            >
                                <option value="">{t('employee_placeholder')}</option>
                                {employees.map((employee) => (
                                    <option key={employee.id} value={employee.id}>
                                        {employee.name}
                                    </option>
                                ))}
                            </select>
                        )}
                    </div>

                    <div className="space-y-2">
                        <label className="block text-sm font-semibold text-[color:var(--color-foreground)]">
                            {t('role_label')}
                        </label>
                        <input
                            type="text"
                            value={role}
                            onChange={(event) => setRole(event.target.value)}
                            placeholder={t('role_placeholder')}
                            className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm outline-none transition-colors focus:border-[color:var(--color-accent)]"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="block text-sm font-semibold text-[color:var(--color-foreground)]">
                            {t('start_time_label')}
                        </label>
                        <input
                            type="time"
                            value={startTime}
                            onChange={(event) => setStartTime(event.target.value)}
                            className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm outline-none transition-colors focus:border-[color:var(--color-accent)]"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="block text-sm font-semibold text-[color:var(--color-foreground)]">
                            {t('end_time_label')}
                        </label>
                        <input
                            type="time"
                            value={endTime}
                            onChange={(event) => setEndTime(event.target.value)}
                            className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm outline-none transition-colors focus:border-[color:var(--color-accent)]"
                        />
                    </div>

                    {statusMessage ? (
                        <p className="text-xs text-gray-500">
                            {statusMessage}
                        </p>
                    ) : null}

                    <button
                        type="button"
                        onClick={() => void saveShift()}
                        disabled={isSaving || selectedEmployeeId === '' || businessId === ''}
                        className="w-full rounded-lg bg-[color:var(--color-accent)] px-4 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
                    >
                        {isSaving ? t('saving') : t('save_button')}
                    </button>
                </div>
            </div>
        </div>
    );
}
