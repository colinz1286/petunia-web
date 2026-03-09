'use client';

// NOTE: This web page is intended to mirror the iOS view at
// .local-only/ios-real-reference/IndividualRemindersView.swift.
// Keep reminder groupings, status calculations, and display logic aligned.
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useTranslations, useLocale } from 'next-intl';
import {
    getAuth,
    onAuthStateChanged
} from 'firebase/auth';
import {
    getFirestore,
    collection,
    getDocs,
    QueryDocumentSnapshot
} from 'firebase/firestore';
import { initializeApp, getApp, getApps } from 'firebase/app';

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

const DAY_IN_MS = 86_400_000;
const DATE_INPUT_PATTERN = /^\d{4}-\d{2}-\d{2}$/;

type DateLike = {
    toDate?: () => Date;
    seconds?: number;
};

type VaccineRecord = {
    date?: unknown;
    expirationDate?: unknown;
    isVaccinated?: unknown;
} | null | undefined;

const pad2 = (value: number) => String(value).padStart(2, '0');

const toLocalDateKey = (date: Date): string =>
    `${date.getFullYear()}-${pad2(date.getMonth() + 1)}-${pad2(date.getDate())}`;

const fromDateKey = (value: string): Date | null => {
    if (!DATE_INPUT_PATTERN.test(value)) return null;

    const [year, month, day] = value.split('-').map(Number);
    const parsed = new Date(year, month - 1, day);

    if (
        Number.isNaN(parsed.getTime()) ||
        parsed.getFullYear() !== year ||
        parsed.getMonth() !== month - 1 ||
        parsed.getDate() !== day
    ) {
        return null;
    }

    return parsed;
};

const getDateKeyFromUnknown = (value: unknown): string | null => {
    if (!value) return null;

    if (typeof value === 'string') {
        if (DATE_INPUT_PATTERN.test(value)) return value;

        const parsed = new Date(value);
        return Number.isNaN(parsed.getTime()) ? null : parsed.toISOString().split('T')[0];
    }

    if (value instanceof Date) {
        return Number.isNaN(value.getTime()) ? null : value.toISOString().split('T')[0];
    }

    if (typeof value === 'object' && value !== null) {
        if ('toDate' in value && typeof (value as DateLike).toDate === 'function') {
            const parsed = (value as DateLike).toDate!();
            return Number.isNaN(parsed.getTime()) ? null : parsed.toISOString().split('T')[0];
        }

        if ('seconds' in value && typeof (value as DateLike).seconds === 'number') {
            const parsed = new Date((value as DateLike).seconds! * 1000);
            return Number.isNaN(parsed.getTime()) ? null : parsed.toISOString().split('T')[0];
        }
    }

    return null;
};

const getDateFromUnknown = (value: unknown): Date | null => {
    const key = getDateKeyFromUnknown(value);
    return key ? fromDateKey(key) : null;
};

const diffInCalendarDays = (fromKey: string, toKey: string): number | null => {
    const fromDate = fromDateKey(fromKey);
    const toDate = fromDateKey(toKey);

    if (!fromDate || !toDate) return null;

    const fromUtc = Date.UTC(fromDate.getFullYear(), fromDate.getMonth(), fromDate.getDate());
    const toUtc = Date.UTC(toDate.getFullYear(), toDate.getMonth(), toDate.getDate());

    return Math.round((toUtc - fromUtc) / DAY_IN_MS);
};

export default function IndividualRemindersPage() {
    const t = useTranslations('individualReminders');

    const locale = useLocale();
    const router = useRouter();

    const [isLoading, setIsLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const [vaccineStatuses, setVaccineStatuses] = useState<VaccineStatus[]>([]);
    const [birthdayStatuses, setBirthdayStatuses] = useState<BirthdayStatus[]>([]);
    const [checkupStatuses, setCheckupStatuses] = useState<CheckupStatus[]>([]);

    const [expandedVaccines, setExpandedVaccines] = useState(true);
    const [expandedCheckups, setExpandedCheckups] = useState(true);
    const [expandedBirthdays, setExpandedBirthdays] = useState(true);

    useEffect(() => {
        async function loadVaccineStatuses(uid: string) {
            const petsSnap = await getDocs(collection(db, 'users', uid, 'pets'));
            const statuses: VaccineStatus[] = [];
            const todayKey = toLocalDateKey(new Date());

            petsSnap.forEach((docSnap: QueryDocumentSnapshot) => {
                const data = docSnap.data();
                const petName = data.petName || 'Unnamed';
                const records =
                    data.vaccinationRecords && typeof data.vaccinationRecords === 'object'
                        ? (data.vaccinationRecords as Record<string, VaccineRecord>)
                        : {};

                Object.entries(records).forEach(([vaccineName, vaccineData]) => {
                    if (!vaccineData || typeof vaccineData !== 'object' || !vaccineData.isVaccinated) return;

                    const expirationKey =
                        getDateKeyFromUnknown(vaccineData.date) ??
                        getDateKeyFromUnknown(vaccineData.expirationDate);

                    if (!expirationKey) return;

                    const daysLeft = diffInCalendarDays(todayKey, expirationKey);
                    if (daysLeft === null) return;

                    statuses.push({
                        id: `${docSnap.id}_${vaccineName}`,
                        petName,
                        vaccineName,
                        daysUntilExpiration: daysLeft
                    });
                });
            });

            setVaccineStatuses(statuses);
        }

        async function loadBirthdayStatuses(uid: string) {
            const petsSnap = await getDocs(collection(db, 'users', uid, 'pets'));
            const statuses: BirthdayStatus[] = [];
            const today = new Date();
            const todayKey = toLocalDateKey(today);

            petsSnap.forEach((docSnap: QueryDocumentSnapshot) => {
                const data = docSnap.data();
                const petName = data.petName || 'Unnamed';
                const dob = getDateFromUnknown(data.dateOfBirth);

                if (!dob) return;
                const dobMonth = dob.getMonth();
                const dobDay = dob.getDate();

                const nextBirthday = new Date(today);
                nextBirthday.setMonth(dobMonth);
                nextBirthday.setDate(dobDay);
                nextBirthday.setHours(0, 0, 0, 0);
                if (toLocalDateKey(nextBirthday) < todayKey) nextBirthday.setFullYear(today.getFullYear() + 1);

                const diff = diffInCalendarDays(todayKey, toLocalDateKey(nextBirthday));
                if (diff === null) return;

                statuses.push({
                    id: docSnap.id,
                    petName,
                    birthdayDate: dob,
                    daysUntilBirthday: diff,
                    isWithin7Days: diff <= 7
                });
            });

            setBirthdayStatuses(statuses);
        }

        async function loadCheckupStatuses(uid: string) {
            const petsSnap = await getDocs(collection(db, 'users', uid, 'pets'));
            const statuses: CheckupStatus[] = [];
            const todayKey = toLocalDateKey(new Date());

            petsSnap.forEach((docSnap: QueryDocumentSnapshot) => {
                const data = docSnap.data();
                const petName = data.petName || 'Unnamed';
                const lastVisit = getDateFromUnknown(data.lastAnnualVetVisit);

                if (!lastVisit) return;
                const nextCheckup = new Date(lastVisit);
                nextCheckup.setFullYear(nextCheckup.getFullYear() + 1);
                nextCheckup.setHours(0, 0, 0, 0);

                const diff = diffInCalendarDays(todayKey, toLocalDateKey(nextCheckup));
                if (diff === null) return;

                statuses.push({
                    id: docSnap.id,
                    petName,
                    lastVisitDate: lastVisit,
                    daysUntilNextCheckup: diff,
                    isWithin30Days: diff <= 30
                });
            });

            setCheckupStatuses(statuses);
        }

        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            if (!user) {
                router.push(`/${locale}/loginsignup`);
                return;
            }

            const uid = user.uid;

            try {
                await Promise.all([
                    loadVaccineStatuses(uid),
                    loadBirthdayStatuses(uid),
                    loadCheckupStatuses(uid)
                ]);
            } catch {
                setErrorMessage('Failed to load reminders.');
            } finally {
                setIsLoading(false);
            }
        });

        return () => unsubscribe();
    }, [locale, router]);

    // ... (Your existing return JSX remains unchanged)

    type VaccineStatus = {
        id: string;
        petName: string;
        vaccineName: string;
        daysUntilExpiration: number;
    };

    type BirthdayStatus = {
        id: string;
        petName: string;
        birthdayDate: Date;
        daysUntilBirthday: number;
        isWithin7Days: boolean;
    };

    type CheckupStatus = {
        id: string;
        petName: string;
        lastVisitDate: Date;
        daysUntilNextCheckup: number;
        isWithin30Days: boolean;
    };

    return (
        <div className="min-h-screen bg-[color:var(--color-background)] text-[color:var(--color-foreground)] px-4 py-6">
            <div className="w-full max-w-md mx-auto px-2 sm:px-4">
                {/* Back Button */}
                <button
                    onClick={() => router.push(`/${locale}/individualdashboard`)}
                    className="mb-6 text-sm text-[color:var(--color-accent)] underline hover:text-[color:var(--color-accent)]"
                >
                    ← {t('back_to_dashboard', { defaultValue: 'Back to Dashboard' })}
                </button>

                {/* Page Title */}
                <h1 className="text-3xl font-bold text-center text-[color:var(--color-accent)] mb-6">
                    {t('reminders_title')}
                </h1>

                {/* State Handling */}
                {isLoading ? (
                    <p className="text-center text-sm text-gray-500">{t('loading_reminders')}</p>
                ) : errorMessage ? (
                    <p className="text-center text-sm text-red-600">{errorMessage}</p>
                ) : vaccineStatuses.length === 0 && birthdayStatuses.length === 0 && checkupStatuses.length === 0 ? (
                    <p className="text-center text-sm text-gray-500">{t('no_reminders')}</p>
                ) : (
                    <div className="space-y-6">
                        {/* Vaccines */}
                        <div>
                            <button
                                className="w-full text-left text-lg sm:text-xl font-semibold text-[color:var(--color-accent)]"
                                onClick={() => setExpandedVaccines(!expandedVaccines)}
                            >
                                💉 {t('vaccines_section_title')} {vaccineStatuses.some(v => v.daysUntilExpiration <= 30) && '🔥'}
                            </button>
                            {expandedVaccines && (
                                <div className="mt-3 space-y-4">
                                    {[...vaccineStatuses]
                                        .sort((a, b) => a.daysUntilExpiration - b.daysUntilExpiration)
                                        .map(v => (
                                            <div
                                                key={v.id}
                                                className="p-4 rounded border-2 border-[color:var(--color-accent)] bg-white"
                                            >
                                                <p className="font-semibold text-sm">
                                                    {v.petName} — {v.vaccineName}
                                                    {v.daysUntilExpiration <= 30 && ' 🔥'}
                                                </p>
                                                <p className="text-sm text-gray-600">
                                                    {v.daysUntilExpiration < 0
                                                        ? t('vaccine_expired')
                                                        : v.daysUntilExpiration === 0
                                                            ? t('vaccine_expires_today', { defaultValue: 'Expires today' })
                                                        : t('vaccine_expires_in_days', { count: v.daysUntilExpiration })}
                                                </p>
                                            </div>
                                        ))}
                                </div>
                            )}
                        </div>

                        {/* Checkups */}
                        <div>
                            <button
                                className="w-full text-left text-lg sm:text-xl font-semibold text-[color:var(--color-accent)]"
                                onClick={() => setExpandedCheckups(!expandedCheckups)}
                            >
                                🩺 {t('checkups_section_title')} {checkupStatuses.some(c => c.isWithin30Days) && '🔥'}
                            </button>
                            {expandedCheckups && (
                                <div className="mt-3 space-y-4">
                                    {checkupStatuses.length === 0 ? (
                                        <p className="text-sm text-gray-500">{t('no_checkup_data')}</p>
                                    ) : (
                                        [...checkupStatuses]
                                            .sort((a, b) => a.daysUntilNextCheckup - b.daysUntilNextCheckup)
                                            .map(c => (
                                                <div
                                                    key={c.id}
                                                    className="p-4 rounded border-2 border-[color:var(--color-accent)] bg-white"
                                                >
                                                    <p className="font-semibold text-sm">{c.petName}</p>
                                                    <p className="text-sm text-gray-600">
                                                        {c.daysUntilNextCheckup <= 0
                                                            ? t('checkup_due_now')
                                                            : t('checkup_in_days', { count: c.daysUntilNextCheckup })}
                                                    </p>
                                                </div>
                                            ))
                                    )}
                                </div>
                            )}
                        </div>

                        {/* Birthdays */}
                        <div>
                            <button
                                className="w-full text-left text-lg sm:text-xl font-semibold text-[color:var(--color-accent)]"
                                onClick={() => setExpandedBirthdays(!expandedBirthdays)}
                            >
                                🎂 {t('birthdays_section_title')} {birthdayStatuses.some(b => b.isWithin7Days) && '🔥'}
                            </button>
                            {expandedBirthdays && (
                                <div className="mt-3 space-y-4">
                                    {birthdayStatuses.length === 0 ? (
                                        <p className="text-sm text-gray-500">{t('no_birthday_data')}</p>
                                    ) : (
                                        [...birthdayStatuses]
                                            .sort((a, b) => a.daysUntilBirthday - b.daysUntilBirthday)
                                            .map(b => (
                                                <div
                                                    key={b.id}
                                                    className="p-4 rounded border-2 border-[color:var(--color-accent)] bg-white"
                                                >
                                                    <p className="font-semibold text-sm">{b.petName}</p>
                                                    <p className="text-sm text-gray-600">
                                                        {b.daysUntilBirthday === 0
                                                            ? t('birthday_today')
                                                            : t('birthday_in_days', { count: b.daysUntilBirthday })}
                                                    </p>
                                                </div>
                                            ))
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
