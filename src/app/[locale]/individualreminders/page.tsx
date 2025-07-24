'use client';

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
    doc,
    getDoc,
    getDocs,
    query,
    where,
    updateDoc,
    Timestamp
} from 'firebase/firestore';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY!,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN!,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID!,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET!,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID!,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID!,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export default function IndividualRemindersPage() {
    const t = useTranslations('individualReminders');
    const locale = useLocale();
    const router = useRouter();

    const [userId, setUserId] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const [vaccineStatuses, setVaccineStatuses] = useState<VaccineStatus[]>([]);
    const [birthdayStatuses, setBirthdayStatuses] = useState<BirthdayStatus[]>([]);
    const [checkupStatuses, setCheckupStatuses] = useState<CheckupStatus[]>([]);

    const [expandedVaccines, setExpandedVaccines] = useState(true);
    const [expandedCheckups, setExpandedCheckups] = useState(true);
    const [expandedBirthdays, setExpandedBirthdays] = useState(true);

    // Load auth and data on mount
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            if (!user) {
                router.push(`/${locale}/loginsignup`);
                return;
            }

            const uid = user.uid;
            setUserId(uid);

            try {
                await Promise.all([
                    loadVaccineStatuses(uid),
                    loadBirthdayStatuses(uid),
                    loadCheckupStatuses(uid)
                ]);
            } catch (error) {
                setErrorMessage('Failed to load reminders.');
            } finally {
                setIsLoading(false);
            }
        });

        return () => unsubscribe();
    }, [locale, router]);

    async function loadVaccineStatuses(uid: string) {
        const petsSnap = await getDocs(collection(db, 'users', uid, 'pets'));
        const statuses: VaccineStatus[] = [];

        petsSnap.forEach(docSnap => {
            const data = docSnap.data();
            const petName = data.petName || 'Unnamed';
            const records = data.vaccinationRecords || {};

            Object.entries(records).forEach(([vaccineName, vaccineData]) => {
                const date = (vaccineData as any).date as Timestamp;
                const daysLeft = Math.floor((date.toDate().getTime() - Date.now()) / (1000 * 60 * 60 * 24));

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

        const now = new Date();
        const calendar = new Date();

        petsSnap.forEach(docSnap => {
            const data = docSnap.data();
            const petName = data.petName || 'Unnamed';
            const dobTimestamp = data.dateOfBirth as Timestamp | undefined;

            if (!dobTimestamp) return;

            const dob = dobTimestamp.toDate();
            const dobMonth = dob.getMonth();
            const dobDay = dob.getDate();

            let nextBirthday = new Date();
            nextBirthday.setMonth(dobMonth);
            nextBirthday.setDate(dobDay);
            if (nextBirthday < now) nextBirthday.setFullYear(now.getFullYear() + 1);

            const diff = Math.floor((nextBirthday.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));

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

        const now = new Date();

        petsSnap.forEach(docSnap => {
            const data = docSnap.data();
            const petName = data.petName || 'Unnamed';
            const lastVisitTimestamp = data.lastAnnualVetVisit as Timestamp | undefined;

            if (!lastVisitTimestamp) return;

            const lastVisit = lastVisitTimestamp.toDate();
            const nextCheckup = new Date(lastVisit);
            nextCheckup.setFullYear(nextCheckup.getFullYear() + 1);

            const diff = Math.floor((nextCheckup.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));

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
                                    {vaccineStatuses
                                        .sort((a, b) => a.daysUntilExpiration - b.daysUntilExpiration)
                                        .map(v => (
                                            <div
                                                key={v.id}
                                                className="p-4 rounded border-2 border-[color:var(--color-accent)] bg-white"
                                            >
                                                <p className="font-semibold text-sm">
                                                    {v.petName} — {v.vaccineName}
                                                    {v.daysUntilExpiration <= 0 && ' 🔥'}
                                                </p>
                                                <p className="text-sm text-gray-600">
                                                    {v.daysUntilExpiration <= 0
                                                        ? t('vaccine_expired')
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
                                        checkupStatuses
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
                                        birthdayStatuses
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