'use client';

// NOTE: This web page is intended to mirror the iOS view at
// .local-only/ios-real-reference/BoardingAndDaycareEmployeeManagementEmployeeSchedulingEmployeeAvailabilityView.swift.
// Keep day availability structure, Firestore reads/writes, and save flow aligned across both files.
import { useCallback, useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { getApp, getApps, initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { Timestamp, doc, getDoc, getFirestore, setDoc } from 'firebase/firestore';

type WeeklyAvailabilityDay = {
    id: string;
    name: string;
    isAvailable: boolean;
    startTime: string;
    endTime: string;
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

function buildDefaultAvailability(): WeeklyAvailabilityDay[] {
    const initialTime = currentTimeValue();

    return [
        { id: 'monday', name: 'Monday', isAvailable: false, startTime: initialTime, endTime: initialTime },
        { id: 'tuesday', name: 'Tuesday', isAvailable: false, startTime: initialTime, endTime: initialTime },
        { id: 'wednesday', name: 'Wednesday', isAvailable: false, startTime: initialTime, endTime: initialTime },
        { id: 'thursday', name: 'Thursday', isAvailable: false, startTime: initialTime, endTime: initialTime },
        { id: 'friday', name: 'Friday', isAvailable: false, startTime: initialTime, endTime: initialTime },
        { id: 'saturday', name: 'Saturday', isAvailable: false, startTime: initialTime, endTime: initialTime },
        { id: 'sunday', name: 'Sunday', isAvailable: false, startTime: initialTime, endTime: initialTime },
    ];
}

function formatTimeValue(date: Date) {
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    return `${hours}:${minutes}`;
}

function timeValueToDate(timeValue: string) {
    const [hours = '00', minutes = '00'] = timeValue.split(':');
    const date = new Date();
    date.setHours(Number.parseInt(hours, 10) || 0, Number.parseInt(minutes, 10) || 0, 0, 0);
    return date;
}

export default function BoardingAndDaycareEmployeeManagementEmployeeSchedulingEmployeeAvailabilityPage() {
    const t = useTranslations('boardingAndDaycareEmployeeManagementEmployeeSchedulingEmployeeAvailability');
    const router = useRouter();
    const searchParams = useSearchParams();

    const businessId = searchParams.get('businessId') ?? '';
    const employeeUserId = searchParams.get('employeeUserId') ?? '';

    const [isLoading, setIsLoading] = useState(true);
    const [isSaving, setIsSaving] = useState(false);
    const [statusMessage, setStatusMessage] = useState<string | null>(null);
    const [availability, setAvailability] = useState<WeeklyAvailabilityDay[]>(() => buildDefaultAvailability());

    const loadAvailability = useCallback(async () => {
        setIsLoading(true);
        setStatusMessage(null);
        setAvailability(buildDefaultAvailability());

        if (businessId === '' || employeeUserId === '') {
            setIsLoading(false);
            return;
        }

        try {
            const snapshot = await getDoc(
                doc(db, 'businesses', businessId, 'employeeAvailability', employeeUserId)
            );

            const data = snapshot.data() as Record<string, unknown> | undefined;
            if (!data) {
                setIsLoading(false);
                return;
            }

            const updatedAvailability = buildDefaultAvailability();

            for (let index = 0; index < updatedAvailability.length; index += 1) {
                const key = updatedAvailability[index].id;
                const dayData = data[key] as Record<string, unknown> | undefined;

                if (!dayData) {
                    continue;
                }

                const start = dayData.start instanceof Timestamp ? dayData.start.toDate() : new Date();
                const end = dayData.end instanceof Timestamp ? dayData.end.toDate() : new Date();

                updatedAvailability[index] = {
                    ...updatedAvailability[index],
                    isAvailable: typeof dayData.isAvailable === 'boolean' ? dayData.isAvailable : false,
                    startTime: formatTimeValue(start),
                    endTime: formatTimeValue(end),
                };
            }

            setAvailability(updatedAvailability);
            setIsLoading(false);
        } catch (error) {
            setIsLoading(false);
            setStatusMessage(error instanceof Error ? error.message : t('unknown_error'));
        }
    }, [businessId, employeeUserId, t]);

    useEffect(() => {
        void loadAvailability();
    }, [loadAvailability]);

    const updateDay = (dayId: string, updates: Partial<WeeklyAvailabilityDay>) => {
        setAvailability((current) =>
            current.map((day) => (day.id === dayId ? { ...day, ...updates } : day))
        );
    };

    const saveAvailability = async () => {
        setIsSaving(true);
        setStatusMessage(null);

        const payload: Record<string, unknown> = {};

        for (const day of availability) {
            payload[day.id] = {
                isAvailable: day.isAvailable,
                start: Timestamp.fromDate(timeValueToDate(day.startTime)),
                end: Timestamp.fromDate(timeValueToDate(day.endTime)),
            };
        }

        payload.updatedAt = Timestamp.now();
        payload.updatedBy = auth.currentUser?.uid ?? '';

        try {
            await setDoc(
                doc(db, 'businesses', businessId, 'employeeAvailability', employeeUserId),
                payload,
                { merge: true }
            );

            setStatusMessage(t('saved_success'));
        } catch (error) {
            setStatusMessage(error instanceof Error ? error.message : t('unknown_error'));
        }

        setIsSaving(false);
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

                {isLoading ? (
                    <div className="flex justify-center py-4">
                        <div className="h-8 w-8 animate-spin rounded-full border-4 border-[color:var(--color-accent)]/20 border-t-[color:var(--color-accent)]" />
                    </div>
                ) : (
                    <div className="space-y-4">
                        <div className="space-y-3">
                            {availability.map((day) => (
                                <div
                                    key={day.id}
                                    className="rounded-lg border border-black/5 bg-white p-4 shadow-sm"
                                >
                                    <label className="flex items-center gap-3 text-base font-semibold text-[color:var(--color-foreground)]">
                                        <input
                                            type="checkbox"
                                            checked={day.isAvailable}
                                            onChange={(event) => updateDay(day.id, { isAvailable: event.target.checked })}
                                            className="h-4 w-4 accent-[color:var(--color-accent)]"
                                        />
                                        <span>{day.name}</span>
                                    </label>

                                    {day.isAvailable ? (
                                        <div className="mt-4 grid gap-4 sm:grid-cols-2">
                                            <label className="block space-y-2">
                                                <span className="block text-xs text-gray-500">
                                                    {t('start_time_label')}
                                                </span>
                                                <input
                                                    type="time"
                                                    value={day.startTime}
                                                    onChange={(event) => updateDay(day.id, { startTime: event.target.value })}
                                                    className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm outline-none transition-colors focus:border-[color:var(--color-accent)]"
                                                />
                                            </label>

                                            <label className="block space-y-2">
                                                <span className="block text-xs text-gray-500">
                                                    {t('end_time_label')}
                                                </span>
                                                <input
                                                    type="time"
                                                    value={day.endTime}
                                                    onChange={(event) => updateDay(day.id, { endTime: event.target.value })}
                                                    className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm outline-none transition-colors focus:border-[color:var(--color-accent)]"
                                                />
                                            </label>
                                        </div>
                                    ) : null}
                                </div>
                            ))}
                        </div>

                        {statusMessage ? (
                            <p className="text-xs text-gray-500">
                                {statusMessage}
                            </p>
                        ) : null}

                        <button
                            type="button"
                            onClick={() => void saveAvailability()}
                            disabled={isSaving || businessId === '' || employeeUserId === ''}
                            className="w-full rounded-lg bg-[color:var(--color-accent)] px-4 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
                        >
                            {isSaving ? t('saving') : t('save_button')}
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
