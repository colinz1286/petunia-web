'use client';

// NOTE: This web page is intended to mirror the iOS view at
// .local-only/ios-real-reference/BoardingAndDaycareEmployeeManagementCompensationAndPayRatesView.swift.
// Keep tab behavior, Firestore fields, and sheet workflows aligned across both files.
import { useEffect, useMemo, useState, type ReactNode } from 'react';
import { useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';
import { getApp, getApps, initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import {
    Timestamp,
    addDoc,
    collection,
    deleteDoc,
    doc,
    getDoc,
    getDocs,
    getFirestore,
    limit,
    orderBy,
    query,
    setDoc,
    where,
} from 'firebase/firestore';

type PayType = 'hourly' | 'salary' | 'contractor';
type SelectedTab = 'employeePay' | 'earningsTypes' | 'differentials';

type EmployeePayRow = {
    userId: string;
    email: string | null;
    fullName: string | null;
    employmentStatus: string;
    employeeType: string;
    locationIds: string[];
    departmentIds: string[];
    payType: PayType;
    hourlyRate?: number;
    salaryAnnual?: number;
    effectiveDate: Date | null;
};

type EarningsTypeRow = {
    id: string;
    name: string;
    code: string;
    isActive: boolean;
    createdAt: Date | null;
};

type DifferentialRow = {
    id: string;
    name: string;
    amount: number;
    isPercent: boolean;
    appliesTo: string;
    isActive: boolean;
    createdAt: Date | null;
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

export default function BoardingAndDaycareEmployeeManagementCompensationAndPayRatesPage() {
    const router = useRouter();
    const locale = useLocale();

    const [businessId, setBusinessId] = useState('');
    const [isResolvingBusinessId, setIsResolvingBusinessId] = useState(true);

    const [selectedTab, setSelectedTab] = useState<SelectedTab>('employeePay');

    const [isLoading, setIsLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const [searchText, setSearchText] = useState('');
    const [employeeRows, setEmployeeRows] = useState<EmployeePayRow[]>([]);

    const [earningsTypes, setEarningsTypes] = useState<EarningsTypeRow[]>([]);
    const [showAddEarningsTypeSheet, setShowAddEarningsTypeSheet] = useState(false);
    const [editingEarningsType, setEditingEarningsType] = useState<EarningsTypeRow | null>(null);

    const [differentials, setDifferentials] = useState<DifferentialRow[]>([]);
    const [showAddDifferentialSheet, setShowAddDifferentialSheet] = useState(false);
    const [editingDifferential, setEditingDifferential] = useState<DifferentialRow | null>(null);

    const filteredEmployees = useMemo(() => {
        const q = searchText.trim().toLowerCase();
        if (!q) return employeeRows;

        return employeeRows.filter((row) => {
            const nameMatch = (row.fullName ?? '').toLowerCase().includes(q);
            const emailMatch = (row.email ?? '').toLowerCase().includes(q);
            return nameMatch || emailMatch;
        });
    }, [employeeRows, searchText]);

    useEffect(() => {
        void resolveBusinessIdAndLoad();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        void loadAllForSelectedTab();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedTab]);

    const resolveBusinessIdAndLoad = async () => {
        if (businessId !== '') {
            await loadAllForSelectedTab();
            return;
        }

        const ownerId = auth.currentUser?.uid;
        if (!ownerId) {
            setIsResolvingBusinessId(false);
            setBusinessId('');
            return;
        }

        setIsResolvingBusinessId(true);
        setErrorMessage(null);

        try {
            const businessesQuery = query(
                collection(db, 'businesses'),
                where('ownerId', '==', ownerId),
                limit(1)
            );
            const snapshot = await getDocs(businessesQuery);

            setIsResolvingBusinessId(false);

            const first = snapshot.docs[0];
            if (!first) {
                setBusinessId('');
                return;
            }

            const resolvedBusinessId = first.id;
            setBusinessId(resolvedBusinessId);
            await loadAllForSelectedTab(resolvedBusinessId);
        } catch (error) {
            setIsResolvingBusinessId(false);
            setBusinessId('');
            setErrorMessage(`Error: ${errorMessageFromUnknown(error)}`);
        }
    };

    const loadAllForSelectedTab = async (overrideBusinessId?: string) => {
        const currentBusinessId = overrideBusinessId ?? businessId;
        if (!currentBusinessId) return;

        setIsLoading(true);
        setErrorMessage(null);

        try {
            if (selectedTab === 'employeePay') {
                await loadEmployeesPayRows(currentBusinessId);
            } else if (selectedTab === 'earningsTypes') {
                await loadEarningsTypes(currentBusinessId);
            } else {
                await loadDifferentials(currentBusinessId);
            }
            setIsLoading(false);
        } catch (error) {
            setIsLoading(false);
            setErrorMessage(`Error: ${errorMessageFromUnknown(error)}`);
        }
    };

    const loadEmployeesPayRows = async (currentBusinessId: string) => {
        const snap = await getDocs(collection(db, 'businesses', currentBusinessId, 'employees'));

        if (snap.docs.length === 0) {
            setEmployeeRows([]);
            return;
        }

        const rows: EmployeePayRow[] = [];

        for (const employeeDoc of snap.docs) {
            const data = employeeDoc.data() as Record<string, unknown>;
            const userId = employeeDoc.id;

            let name = typeof data.fullName === 'string' ? data.fullName : '';

            if (name === '') {
                const userDoc = await getDoc(doc(db, 'users', userId));
                const userData = (userDoc.data() ?? {}) as Record<string, unknown>;

                const first = typeof userData.firstName === 'string' ? userData.firstName : '';
                const last = typeof userData.lastName === 'string' ? userData.lastName : '';

                name = `${last}, ${first}`.trim();
            }

            const payData = (data.compensation as Record<string, unknown> | undefined) ?? {};
            const payTypeRaw = typeof payData.payType === 'string' ? payData.payType : 'hourly';
            const payType: PayType =
                payTypeRaw === 'hourly' || payTypeRaw === 'salary' || payTypeRaw === 'contractor'
                    ? payTypeRaw
                    : 'hourly';

            const hourlyRate = typeof payData.hourlyRate === 'number' ? payData.hourlyRate : undefined;
            const salaryAnnual = typeof payData.salaryAnnual === 'number' ? payData.salaryAnnual : undefined;

            rows.push({
                userId,
                email: null,
                fullName: name,
                employmentStatus: '',
                employeeType: '',
                locationIds: [],
                departmentIds: [],
                payType,
                hourlyRate,
                salaryAnnual,
                effectiveDate: null,
            });
        }

        rows.sort((a, b) => (a.fullName ?? '').toLowerCase().localeCompare((b.fullName ?? '').toLowerCase()));
        setEmployeeRows(rows);
    };

    const loadEarningsTypes = async (currentBusinessId: string) => {
        const earningsTypesQuery = query(
            collection(db, 'businesses', currentBusinessId, 'earningsTypes'),
            orderBy('name')
        );
        const snap = await getDocs(earningsTypesQuery);

        const rows: EarningsTypeRow[] = snap.docs.map((rowDoc) => {
            const d = rowDoc.data() as Record<string, unknown>;
            const createdAt = d.createdAt instanceof Timestamp ? d.createdAt.toDate() : null;

            return {
                id: rowDoc.id,
                name: typeof d.name === 'string' ? d.name : '',
                code: typeof d.code === 'string' ? d.code : '',
                isActive: typeof d.isActive === 'boolean' ? d.isActive : true,
                createdAt,
            };
        });

        setEarningsTypes(rows);
    };

    const loadDifferentials = async (currentBusinessId: string) => {
        const differentialQuery = query(
            collection(db, 'businesses', currentBusinessId, 'payDifferentials'),
            orderBy('name')
        );
        const snap = await getDocs(differentialQuery);

        const rows: DifferentialRow[] = snap.docs.map((rowDoc) => {
            const d = rowDoc.data() as Record<string, unknown>;
            const createdAt = d.createdAt instanceof Timestamp ? d.createdAt.toDate() : null;

            return {
                id: rowDoc.id,
                name: typeof d.name === 'string' ? d.name : '',
                amount: typeof d.amount === 'number' ? d.amount : 0,
                isPercent: typeof d.isPercent === 'boolean' ? d.isPercent : false,
                appliesTo: typeof d.appliesTo === 'string' ? d.appliesTo : '',
                isActive: typeof d.isActive === 'boolean' ? d.isActive : true,
                createdAt,
            };
        });

        setDifferentials(rows);
    };

    const deleteEarningsType = async (rowId: string) => {
        try {
            await deleteDoc(doc(db, 'businesses', businessId, 'earningsTypes', rowId));
            await loadAllForSelectedTab();
        } catch (error) {
            setErrorMessage(`Error: ${errorMessageFromUnknown(error)}`);
        }
    };

    const deleteDifferential = async (rowId: string) => {
        try {
            await deleteDoc(doc(db, 'businesses', businessId, 'payDifferentials', rowId));
            await loadAllForSelectedTab();
        } catch (error) {
            setErrorMessage(`Error: ${errorMessageFromUnknown(error)}`);
        }
    };

    const handleEmployeeOpen = (userId: string) => {
        if (!businessId) return;

        const encodedBusinessId = encodeURIComponent(businessId);
        router.push(
            `/${locale}/boardinganddaycare-employeemanagementcompensationandpayrates/${userId}?businessId=${encodedBusinessId}`
        );
    };

    const payTypeDisplayName = (payType: PayType) => {
        if (payType === 'hourly') return 'Hourly';
        if (payType === 'salary') return 'Salary';
        return 'Contractor';
    };

    const paySummaryText = (row: EmployeePayRow) => {
        if (row.payType === 'hourly') {
            if (!row.hourlyRate || row.hourlyRate <= 0) return 'Not set';
            return `$${row.hourlyRate.toFixed(2)}/hr`;
        }

        if (row.payType === 'salary') {
            if (!row.salaryAnnual || row.salaryAnnual <= 0) return 'Not set';
            return `$${formatWholeNumber(row.salaryAnnual)}/yr`;
        }

        if (!row.hourlyRate || row.hourlyRate <= 0) return 'Not set';
        return `$${row.hourlyRate.toFixed(2)}/hr (Contractor)`;
    };

    const differentialAmountText = (row: DifferentialRow) => {
        if (row.isPercent) return `${row.amount.toFixed(2)}%`;
        return `$${row.amount.toFixed(2)}`;
    };

    const formatDate = (date: Date) =>
        new Intl.DateTimeFormat(undefined, {
            dateStyle: 'medium',
        }).format(date);

    return (
        <div className="min-h-screen bg-[color:var(--color-background)] text-[color:var(--color-foreground)] px-4 py-8">
            <div className="w-full max-w-4xl mx-auto space-y-4">
                <h1 className="text-3xl font-bold text-[color:var(--color-accent)]">
                    Compensation &amp; Pay Rates
                </h1>

                <div className="grid grid-cols-3 rounded-lg border border-gray-300 overflow-hidden bg-[#f5f7f9]">
                    <SegmentButton
                        label="Employee Pay"
                        isActive={selectedTab === 'employeePay'}
                        onClick={() => setSelectedTab('employeePay')}
                    />
                    <SegmentButton
                        label="Earnings Types"
                        isActive={selectedTab === 'earningsTypes'}
                        onClick={() => setSelectedTab('earningsTypes')}
                    />
                    <SegmentButton
                        label="Differentials"
                        isActive={selectedTab === 'differentials'}
                        onClick={() => setSelectedTab('differentials')}
                    />
                </div>

                {isResolvingBusinessId ? (
                    <div className="py-10 text-center space-y-3">
                        <div className="inline-block h-6 w-6 rounded-full border-2 border-gray-300 border-t-gray-700 animate-spin" />
                        <p className="text-sm text-gray-600">Loading business...</p>
                    </div>
                ) : businessId === '' ? (
                    <p className="text-sm text-gray-600">No business found for this owner.</p>
                ) : isLoading ? (
                    <div className="py-10 text-center">
                        <div className="inline-block h-6 w-6 rounded-full border-2 border-gray-300 border-t-gray-700 animate-spin" />
                    </div>
                ) : errorMessage ? (
                    <p className="text-sm text-gray-600">{errorMessage}</p>
                ) : (
                    <>
                        {selectedTab === 'employeePay' && (
                            <section className="space-y-3">
                                <input
                                    value={searchText}
                                    onChange={(e) => setSearchText(e.target.value)}
                                    placeholder="Search employees"
                                    className="w-full border rounded-lg px-3 py-2"
                                />

                                {filteredEmployees.length === 0 ? (
                                    <p className="text-gray-600 text-sm">No employees found</p>
                                ) : (
                                    <div className="space-y-3">
                                        <h2 className="font-semibold text-lg">Employee Pay Profiles</h2>

                                        {filteredEmployees.map((row) => (
                                            <button
                                                type="button"
                                                key={row.userId}
                                                onClick={() => handleEmployeeOpen(row.userId)}
                                                className="w-full text-left p-4 rounded-lg bg-[color:var(--color-card)] border border-gray-200 hover:bg-gray-50"
                                            >
                                                <div className="flex items-start gap-4">
                                                    <div className="min-w-0">
                                                        <p className="font-semibold truncate">
                                                            {row.fullName ?? 'Employee'}
                                                        </p>
                                                        <p className="text-sm text-gray-600">{paySummaryText(row)}</p>

                                                        <div className="flex flex-wrap gap-2 mt-2">
                                                            <Badge text={payTypeDisplayName(row.payType)} />
                                                            {row.employeeType !== '' && <Badge text={row.employeeType} />}
                                                            {row.employmentStatus !== '' && (
                                                                <Badge text={row.employmentStatus} />
                                                            )}
                                                        </div>
                                                    </div>

                                                    <div className="ml-auto text-right shrink-0">
                                                        <p className="font-semibold">{paySummaryText(row)}</p>
                                                        {row.effectiveDate && (
                                                            <p className="text-xs text-gray-600">
                                                                Effective: {formatDate(row.effectiveDate)}
                                                            </p>
                                                        )}
                                                    </div>
                                                </div>
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </section>
                        )}

                        {selectedTab === 'earningsTypes' && (
                            <section className="space-y-3">
                                <div className="flex items-center gap-3">
                                    <h2 className="font-semibold text-lg">Earnings Types</h2>
                                    <button
                                        type="button"
                                        onClick={() => setShowAddEarningsTypeSheet(true)}
                                        className="ml-auto text-sm font-semibold text-[color:var(--color-accent)]"
                                    >
                                        Add
                                    </button>
                                </div>

                                <p className="text-sm text-gray-600">
                                    Configure pay categories like Regular, Overtime, Holiday, Bonus, etc.
                                </p>

                                {earningsTypes.length === 0 ? (
                                    <p className="text-sm text-gray-600">No earnings types yet</p>
                                ) : (
                                    <div className="space-y-3">
                                        {earningsTypes.map((row) => (
                                            <div
                                                key={row.id}
                                                className="p-4 rounded-lg bg-[color:var(--color-card)] border border-gray-200"
                                            >
                                                <div className="flex items-center gap-3">
                                                    <div>
                                                        <p className="font-semibold">{row.name}</p>
                                                        <p className="text-sm text-gray-600">Code: {row.code}</p>
                                                    </div>

                                                    <div className="ml-auto flex items-center gap-3">
                                                        <span className="text-xs text-gray-600">
                                                            {row.isActive ? 'Active' : 'Inactive'}
                                                        </span>
                                                        <button
                                                            type="button"
                                                            onClick={() => setEditingEarningsType(row)}
                                                            className="text-sm text-[color:var(--color-accent)]"
                                                        >
                                                            Edit
                                                        </button>
                                                        <button
                                                            type="button"
                                                            onClick={() => void deleteEarningsType(row.id)}
                                                            className="text-sm text-red-600"
                                                        >
                                                            Delete
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </section>
                        )}

                        {selectedTab === 'differentials' && (
                            <section className="space-y-3">
                                <div className="flex items-center gap-3">
                                    <h2 className="font-semibold text-lg">Differentials</h2>
                                    <button
                                        type="button"
                                        onClick={() => setShowAddDifferentialSheet(true)}
                                        className="ml-auto text-sm font-semibold text-[color:var(--color-accent)]"
                                    >
                                        Add
                                    </button>
                                </div>

                                <p className="text-sm text-gray-600">
                                    Configure premiums like Weekend, Closing, Holiday premium, etc.
                                </p>

                                {differentials.length === 0 ? (
                                    <p className="text-sm text-gray-600">No differentials yet</p>
                                ) : (
                                    <div className="space-y-3">
                                        {differentials.map((row) => (
                                            <div
                                                key={row.id}
                                                className="p-4 rounded-lg bg-[color:var(--color-card)] border border-gray-200"
                                            >
                                                <div className="flex items-center gap-3">
                                                    <div>
                                                        <p className="font-semibold">{row.name}</p>
                                                        <p className="text-sm text-gray-600">{row.appliesTo}</p>
                                                    </div>

                                                    <div className="ml-auto flex items-center gap-3">
                                                        <span className="font-semibold">{differentialAmountText(row)}</span>
                                                        <span className="text-xs text-gray-600">
                                                            {row.isActive ? 'Active' : 'Inactive'}
                                                        </span>
                                                        <button
                                                            type="button"
                                                            onClick={() => setEditingDifferential(row)}
                                                            className="text-sm text-[color:var(--color-accent)]"
                                                        >
                                                            Edit
                                                        </button>
                                                        <button
                                                            type="button"
                                                            onClick={() => void deleteDifferential(row.id)}
                                                            className="text-sm text-red-600"
                                                        >
                                                            Delete
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </section>
                        )}
                    </>
                )}
            </div>

            {showAddEarningsTypeSheet && (
                <AddOrEditEarningsTypeModal
                    businessId={businessId}
                    existing={null}
                    onClose={() => setShowAddEarningsTypeSheet(false)}
                    onSaved={() => {
                        setShowAddEarningsTypeSheet(false);
                        void loadAllForSelectedTab();
                    }}
                />
            )}

            {editingEarningsType && (
                <AddOrEditEarningsTypeModal
                    businessId={businessId}
                    existing={editingEarningsType}
                    onClose={() => setEditingEarningsType(null)}
                    onSaved={() => {
                        setEditingEarningsType(null);
                        void loadAllForSelectedTab();
                    }}
                />
            )}

            {showAddDifferentialSheet && (
                <AddOrEditDifferentialModal
                    businessId={businessId}
                    existing={null}
                    onClose={() => setShowAddDifferentialSheet(false)}
                    onSaved={() => {
                        setShowAddDifferentialSheet(false);
                        void loadAllForSelectedTab();
                    }}
                />
            )}

            {editingDifferential && (
                <AddOrEditDifferentialModal
                    businessId={businessId}
                    existing={editingDifferential}
                    onClose={() => setEditingDifferential(null)}
                    onSaved={() => {
                        setEditingDifferential(null);
                        void loadAllForSelectedTab();
                    }}
                />
            )}
        </div>
    );
}

function SegmentButton({
    label,
    isActive,
    onClick,
}: {
    label: string;
    isActive: boolean;
    onClick: () => void;
}) {
    return (
        <button
            type="button"
            onClick={onClick}
            className={`py-2 px-3 text-sm font-medium border-r border-gray-300 last:border-r-0 transition-colors ${
                isActive ? 'bg-[#2c4a30] text-white' : 'bg-[#f5f7f9] text-gray-700 hover:bg-[#e9edf1]'
            }`}
        >
            {label}
        </button>
    );
}

function Badge({ text }: { text: string }) {
    return (
        <span className="text-xs text-gray-600 px-2 py-0.5 rounded-full bg-gray-100 border border-gray-200">
            {text}
        </span>
    );
}

function AddOrEditEarningsTypeModal({
    businessId,
    existing,
    onClose,
    onSaved,
}: {
    businessId: string;
    existing: EarningsTypeRow | null;
    onClose: () => void;
    onSaved: () => void;
}) {
    const [name, setName] = useState(existing?.name ?? '');
    const [code, setCode] = useState(existing?.code ?? '');
    const [isActive, setIsActive] = useState(existing?.isActive ?? true);

    const [isSaving, setIsSaving] = useState(false);
    const [statusMessage, setStatusMessage] = useState<string | null>(null);

    const save = async () => {
        setIsSaving(true);
        setStatusMessage(null);

        const trimmedName = name.trim();
        const trimmedCode = code.trim().toUpperCase();

        try {
            const ref = collection(db, 'businesses', businessId, 'earningsTypes');

            if (existing) {
                await setDoc(
                    doc(ref, existing.id),
                    {
                        name: trimmedName,
                        code: trimmedCode,
                        isActive,
                        updatedAt: Timestamp.now(),
                        updatedBy: auth.currentUser?.uid ?? '',
                    },
                    { merge: true }
                );
            } else {
                await addDoc(ref, {
                    name: trimmedName,
                    code: trimmedCode,
                    isActive,
                    createdAt: Timestamp.now(),
                    updatedAt: Timestamp.now(),
                    updatedBy: auth.currentUser?.uid ?? '',
                });
            }

            setIsSaving(false);
            onSaved();
        } catch (error) {
            setIsSaving(false);
            setStatusMessage(`Error: ${errorMessageFromUnknown(error)}`);
        }
    };

    const isSaveDisabled = isSaving || name.trim() === '' || code.trim() === '';

    return (
        <ModalCard onClose={onClose}>
            <h2 className="text-xl font-semibold mb-4">
                {existing ? 'Edit Earnings Type' : 'Add Earnings Type'}
            </h2>

            <div className="space-y-3">
                <label className="block">
                    <span className="text-sm font-medium">Name</span>
                    <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full border rounded px-3 py-2 mt-1"
                    />
                </label>

                <label className="block">
                    <span className="text-sm font-medium">Code</span>
                    <input
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                        className="w-full border rounded px-3 py-2 mt-1"
                    />
                </label>

                <label className="flex items-center gap-2">
                    <input
                        type="checkbox"
                        checked={isActive}
                        onChange={(e) => setIsActive(e.target.checked)}
                    />
                    <span className="text-sm">Active</span>
                </label>

                {statusMessage && <p className="text-sm text-gray-600">{statusMessage}</p>}

                <div className="flex justify-end gap-2 pt-2">
                    <button
                        type="button"
                        onClick={onClose}
                        className="px-3 py-2 rounded border border-gray-300 text-sm"
                    >
                        Cancel
                    </button>
                    <button
                        type="button"
                        onClick={() => void save()}
                        disabled={isSaveDisabled}
                        className={`px-3 py-2 rounded text-sm text-white ${
                            isSaveDisabled ? 'bg-gray-400' : 'bg-[#2c4a30] hover:bg-[#1f3b26]'
                        }`}
                    >
                        Save
                    </button>
                </div>
            </div>
        </ModalCard>
    );
}

function AddOrEditDifferentialModal({
    businessId,
    existing,
    onClose,
    onSaved,
}: {
    businessId: string;
    existing: DifferentialRow | null;
    onClose: () => void;
    onSaved: () => void;
}) {
    const [name, setName] = useState(existing?.name ?? '');
    const [appliesTo, setAppliesTo] = useState(existing?.appliesTo ?? '');
    const [isPercent, setIsPercent] = useState(existing?.isPercent ?? false);
    const [amountText, setAmountText] = useState(existing ? existing.amount.toFixed(2) : '');
    const [isActive, setIsActive] = useState(existing?.isActive ?? true);

    const [isSaving, setIsSaving] = useState(false);
    const [statusMessage, setStatusMessage] = useState<string | null>(null);

    const save = async () => {
        setIsSaving(true);
        setStatusMessage(null);

        const trimmedName = name.trim();
        const trimmedAppliesTo = appliesTo.trim();
        const amount = parseMoney(amountText);

        if (amount === null) {
            setIsSaving(false);
            setStatusMessage('Invalid amount');
            return;
        }

        try {
            const ref = collection(db, 'businesses', businessId, 'payDifferentials');

            if (existing) {
                await setDoc(
                    doc(ref, existing.id),
                    {
                        name: trimmedName,
                        appliesTo: trimmedAppliesTo,
                        isPercent,
                        amount,
                        isActive,
                        updatedAt: Timestamp.now(),
                        updatedBy: auth.currentUser?.uid ?? '',
                    },
                    { merge: true }
                );
            } else {
                await addDoc(ref, {
                    name: trimmedName,
                    appliesTo: trimmedAppliesTo,
                    isPercent,
                    amount,
                    isActive,
                    createdAt: Timestamp.now(),
                    updatedAt: Timestamp.now(),
                    updatedBy: auth.currentUser?.uid ?? '',
                });
            }

            setIsSaving(false);
            onSaved();
        } catch (error) {
            setIsSaving(false);
            setStatusMessage(`Error: ${errorMessageFromUnknown(error)}`);
        }
    };

    const isSaveDisabled = isSaving || name.trim() === '';

    return (
        <ModalCard onClose={onClose}>
            <h2 className="text-xl font-semibold mb-4">
                {existing ? 'Edit Differential' : 'Add Differential'}
            </h2>

            <div className="space-y-3">
                <label className="block">
                    <span className="text-sm font-medium">Name</span>
                    <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full border rounded px-3 py-2 mt-1"
                    />
                </label>

                <label className="block">
                    <span className="text-sm font-medium">Applies To (e.g. Weekend)</span>
                    <input
                        value={appliesTo}
                        onChange={(e) => setAppliesTo(e.target.value)}
                        className="w-full border rounded px-3 py-2 mt-1"
                    />
                </label>

                <label className="flex items-center gap-2">
                    <input
                        type="checkbox"
                        checked={isPercent}
                        onChange={(e) => setIsPercent(e.target.checked)}
                    />
                    <span className="text-sm">Percent based</span>
                </label>

                <label className="block">
                    <span className="text-sm font-medium">{isPercent ? 'e.g. 10' : 'e.g. 2.50'}</span>
                    <input
                        value={amountText}
                        onChange={(e) => setAmountText(e.target.value)}
                        className="w-full border rounded px-3 py-2 mt-1"
                        inputMode="decimal"
                    />
                </label>

                <label className="flex items-center gap-2">
                    <input
                        type="checkbox"
                        checked={isActive}
                        onChange={(e) => setIsActive(e.target.checked)}
                    />
                    <span className="text-sm">Active</span>
                </label>

                {statusMessage && <p className="text-sm text-gray-600">{statusMessage}</p>}

                <div className="flex justify-end gap-2 pt-2">
                    <button
                        type="button"
                        onClick={onClose}
                        className="px-3 py-2 rounded border border-gray-300 text-sm"
                    >
                        Cancel
                    </button>
                    <button
                        type="button"
                        onClick={() => void save()}
                        disabled={isSaveDisabled}
                        className={`px-3 py-2 rounded text-sm text-white ${
                            isSaveDisabled ? 'bg-gray-400' : 'bg-[#2c4a30] hover:bg-[#1f3b26]'
                        }`}
                    >
                        Save
                    </button>
                </div>
            </div>
        </ModalCard>
    );
}

function ModalCard({
    children,
    onClose,
}: {
    children: ReactNode;
    onClose: () => void;
}) {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/35 px-4">
            <button
                type="button"
                aria-label="Close"
                onClick={onClose}
                className="absolute inset-0"
            />
            <div className="relative w-full max-w-lg rounded-lg bg-white p-5 shadow-xl">
                {children}
            </div>
        </div>
    );
}

function parseMoney(text: string): number | null {
    const trimmed = text.trim();
    if (trimmed === '') return null;

    const normalized = trimmed.replaceAll(',', '');
    const parsed = Number(normalized);

    if (!Number.isFinite(parsed)) return null;
    return parsed;
}

function formatWholeNumber(value: number): string {
    return new Intl.NumberFormat(undefined, {
        maximumFractionDigits: 0,
    }).format(value);
}

function errorMessageFromUnknown(error: unknown) {
    if (error instanceof Error) return error.message;
    return String(error);
}
