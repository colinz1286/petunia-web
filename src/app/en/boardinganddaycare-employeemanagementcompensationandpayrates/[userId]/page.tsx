'use client';

// NOTE: This web page is intended to mirror the iOS view at
// .local-only/ios-real-reference/BoardingAndDaycareEmployeeManagementCompensationAndPayRatesIndividualEmployeeView.swift.
// Keep field loading/saving behavior and Firestore payload structure aligned across both files.
import { useEffect, useState } from 'react';
import { useParams, useRouter, useSearchParams } from 'next/navigation';
import { getApp, getApps, initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import {
    Timestamp,
    collection,
    doc,
    getDoc,
    getDocs,
    getFirestore,
    query,
    setDoc,
    where,
} from 'firebase/firestore';

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

export default function BoardingAndDaycareEmployeeManagementCompensationAndPayRatesIndividualEmployeePage() {
    const params = useParams();
    const router = useRouter();
    const searchParams = useSearchParams();

    const employeeUserId = params.userId as string;

    const [businessId, setBusinessId] = useState('');

    const [fullName, setFullName] = useState('');
    const [payType, setPayType] = useState<'hourly' | 'salary' | 'contractor'>('hourly');

    const [hourlyRateText, setHourlyRateText] = useState('');
    const [salaryAnnualText, setSalaryAnnualText] = useState('');

    const [effectiveDate, setEffectiveDate] = useState<Date>(new Date());
    const [hasEffectiveDate, setHasEffectiveDate] = useState(false);

    const [isLoading, setIsLoading] = useState(true);
    const [isSaving, setIsSaving] = useState(false);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [statusMessage, setStatusMessage] = useState<string | null>(null);

    useEffect(() => {
        void resolveBusinessAndLoad();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [employeeUserId]);

    const resolveBusinessAndLoad = async () => {
        const routeBusinessId = searchParams.get('businessId') ?? '';

        if (routeBusinessId !== '') {
            setBusinessId(routeBusinessId);
            await loadEmployee(routeBusinessId);
            return;
        }

        const ownerId = auth.currentUser?.uid;
        if (!ownerId) {
            setIsLoading(false);
            setErrorMessage('No business found for this owner.');
            return;
        }

        try {
            const businessesQuery = query(collection(db, 'businesses'), where('ownerId', '==', ownerId));
            const snapshot = await getDocs(businessesQuery);
            const first = snapshot.docs[0];

            if (!first) {
                setIsLoading(false);
                setErrorMessage('No business found for this owner.');
                return;
            }

            setBusinessId(first.id);
            await loadEmployee(first.id);
        } catch (error) {
            setIsLoading(false);
            setErrorMessage(errorMessageFromUnknown(error));
        }
    };

    const loadEmployee = async (resolvedBusinessId: string) => {
        try {
            const employeeDoc = await getDoc(
                doc(db, 'businesses', resolvedBusinessId, 'employees', employeeUserId)
            );

            const data = (employeeDoc.data() ?? {}) as Record<string, unknown>;

            setFullName(typeof data.fullName === 'string' ? data.fullName : '');

            const compensation = (data.compensation as Record<string, unknown> | undefined) ?? {};

            const nextPayType =
                compensation.payType === 'salary' ||
                compensation.payType === 'contractor' ||
                compensation.payType === 'hourly'
                    ? compensation.payType
                    : 'hourly';

            setPayType(nextPayType);

            if (typeof compensation.hourlyRate === 'number') {
                setHourlyRateText(compensation.hourlyRate.toFixed(2));
            }

            if (typeof compensation.salaryAnnual === 'number') {
                setSalaryAnnualText(compensation.salaryAnnual.toFixed(0));
            }

            if (compensation.effectiveDate instanceof Timestamp) {
                setEffectiveDate(compensation.effectiveDate.toDate());
                setHasEffectiveDate(true);
            }

            setIsLoading(false);
        } catch (error) {
            setIsLoading(false);
            setErrorMessage(errorMessageFromUnknown(error));
        }
    };

    const save = async () => {
        if (!businessId) return;

        setIsSaving(true);
        setStatusMessage(null);

        const hourlyRate = Number(hourlyRateText.replaceAll(',', ''));
        const salaryAnnual = Number(salaryAnnualText.replaceAll(',', ''));

        const payload: {
            compensation: {
                payType: 'hourly' | 'salary' | 'contractor';
                updatedAt: Timestamp;
                updatedBy: string;
                hourlyRate?: number;
                salaryAnnual?: number;
                effectiveDate?: Timestamp;
            };
        } = {
            compensation: {
                payType,
                updatedAt: Timestamp.now(),
                updatedBy: auth.currentUser?.uid ?? '',
            },
        };

        const comp = payload.compensation;

        if (payType === 'hourly' || payType === 'contractor') {
            comp.hourlyRate = Number.isFinite(hourlyRate) ? hourlyRate : 0;
        }

        if (payType === 'salary') {
            comp.salaryAnnual = Number.isFinite(salaryAnnual) ? salaryAnnual : 0;
        }

        if (hasEffectiveDate) {
            comp.effectiveDate = Timestamp.fromDate(effectiveDate);
        }

        try {
            await setDoc(
                doc(db, 'businesses', businessId, 'employees', employeeUserId),
                payload,
                { merge: true }
            );

            setStatusMessage('Saved');
            setIsSaving(false);
        } catch (error) {
            setStatusMessage(errorMessageFromUnknown(error));
            setIsSaving(false);
        }
    };

    return (
        <div className="min-h-screen bg-[color:var(--color-background)] text-[color:var(--color-foreground)] px-4 py-8">
            <div className="w-full max-w-3xl mx-auto space-y-4">
                <button
                    type="button"
                    onClick={() => router.back()}
                    className="text-sm text-[color:var(--color-accent)] underline"
                >
                    Back
                </button>

                <h1 className="text-2xl font-bold text-[color:var(--color-accent)]">
                    Employee Compensation
                </h1>

                <div className="rounded-lg bg-[color:var(--color-card)] border border-gray-200 p-4 space-y-5">
                    {isLoading ? (
                        <div className="py-8 text-center">
                            <div className="inline-block h-6 w-6 rounded-full border-2 border-gray-300 border-t-gray-700 animate-spin" />
                        </div>
                    ) : errorMessage ? (
                        <p className="text-gray-600">{errorMessage}</p>
                    ) : (
                        <>
                            <h2 className="text-3xl font-bold">{fullName === '' ? 'Employee' : fullName}</h2>

                            <div className="space-y-2">
                                <p className="font-semibold">Pay Type</p>
                                <div className="grid grid-cols-3 rounded-lg border border-gray-300 overflow-hidden bg-[#f5f7f9]">
                                    <PayTypeButton
                                        label="Hourly"
                                        selected={payType === 'hourly'}
                                        onClick={() => setPayType('hourly')}
                                    />
                                    <PayTypeButton
                                        label="Salary"
                                        selected={payType === 'salary'}
                                        onClick={() => setPayType('salary')}
                                    />
                                    <PayTypeButton
                                        label="Contractor"
                                        selected={payType === 'contractor'}
                                        onClick={() => setPayType('contractor')}
                                    />
                                </div>
                            </div>

                            {(payType === 'hourly' || payType === 'contractor') && (
                                <div className="space-y-2">
                                    <p className="font-semibold">Hourly Rate</p>
                                    <input
                                        value={hourlyRateText}
                                        onChange={(e) => setHourlyRateText(e.target.value)}
                                        placeholder="18.50"
                                        inputMode="decimal"
                                        className="w-full border rounded px-3 py-2"
                                    />
                                </div>
                            )}

                            {payType === 'salary' && (
                                <div className="space-y-2">
                                    <p className="font-semibold">Annual Salary</p>
                                    <input
                                        value={salaryAnnualText}
                                        onChange={(e) => setSalaryAnnualText(e.target.value)}
                                        placeholder="52000"
                                        inputMode="numeric"
                                        className="w-full border rounded px-3 py-2"
                                    />
                                </div>
                            )}

                            <label className="flex items-center gap-2">
                                <input
                                    type="checkbox"
                                    checked={hasEffectiveDate}
                                    onChange={(e) => setHasEffectiveDate(e.target.checked)}
                                />
                                <span className="font-semibold">Track Effective Date</span>
                            </label>

                            {hasEffectiveDate && (
                                <div className="space-y-2">
                                    <p className="font-medium">Effective Date</p>
                                    <input
                                        type="date"
                                        value={dateToInputValue(effectiveDate)}
                                        onChange={(e) => {
                                            const next = new Date(`${e.target.value}T00:00:00`);
                                            if (!Number.isNaN(next.getTime())) {
                                                setEffectiveDate(next);
                                            }
                                        }}
                                        className="border rounded px-3 py-2"
                                    />
                                </div>
                            )}

                            {statusMessage && <p className="text-sm text-gray-600">{statusMessage}</p>}

                            <button
                                type="button"
                                onClick={() => void save()}
                                disabled={isSaving}
                                className={`w-full rounded px-4 py-3 text-white ${
                                    isSaving ? 'bg-gray-400' : 'bg-[#2c4a30] hover:bg-[#1f3b26]'
                                }`}
                            >
                                {isSaving ? 'Saving...' : 'Save'}
                            </button>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

function PayTypeButton({
    label,
    selected,
    onClick,
}: {
    label: string;
    selected: boolean;
    onClick: () => void;
}) {
    return (
        <button
            type="button"
            onClick={onClick}
            className={`py-2 px-3 text-sm font-medium border-r border-gray-300 last:border-r-0 transition-colors ${
                selected ? 'bg-[#2c4a30] text-white' : 'bg-[#f5f7f9] text-gray-700 hover:bg-[#e9edf1]'
            }`}
        >
            {label}
        </button>
    );
}

function dateToInputValue(date: Date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

function errorMessageFromUnknown(error: unknown) {
    if (error instanceof Error) return error.message;
    return String(error);
}
