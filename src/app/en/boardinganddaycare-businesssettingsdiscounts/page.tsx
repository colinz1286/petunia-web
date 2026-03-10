'use client';

// NOTE: This web page owns boarding/daycare business-settings discount-rule configuration.
// Future iOS and Android parity should mirror this as dedicated modules,
// not as additional bulk inside the already-large business settings screen.
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import {
    collection,
    deleteField,
    doc,
    getDocs,
    getFirestore,
    onSnapshot,
    query,
    setDoc,
    updateDoc,
    where
} from 'firebase/firestore';
import { app } from '@/lib/firebaseClient';
import { centsToCurrencyText, currencyTextToCents } from '@/lib/currencyUtils';

const serviceKeys = ['boarding', 'daycare', 'grooming', 'training'] as const;
type ServiceKey = (typeof serviceKeys)[number];

const presetQualifierKeys = [
    'veteran',
    'activeMilitary',
    'police',
    'firefighter',
    'firstResponder',
    'staff',
    'senior',
    'rescueAdopter'
] as const;
type PresetQualifierKey = (typeof presetQualifierKeys)[number];

type DiscountType = 'percent' | 'fixedCents';
type StackingPolicy = 'bestSingleRule' | 'stackRules' | 'manualReview';

type DiscountRule = {
    id: string;
    name: string;
    active: boolean;
    amountType: DiscountType;
    amountValue: number;
    appliesToServices: Record<ServiceKey, boolean>;
    clientEligibility: {
        presets: PresetQualifierKey[];
        customLabels: string[];
    };
    minimumBoardingNights: number | null;
    minimumDaycareDays: number | null;
    minimumPets: number | null;
    notes: string;
    createdAt?: unknown;
    updatedAt?: unknown;
};

type DiscountSettingsSnapshot = {
    stackingPolicy?: unknown;
    rules?: Record<string, unknown>;
};

const defaultServiceSelection = (): Record<ServiceKey, boolean> => ({
    boarding: false,
    daycare: false,
    grooming: false,
    training: false
});

const emptyRule = (): DiscountRule => ({
    id: '',
    name: '',
    active: true,
    amountType: 'percent',
    amountValue: 0,
    appliesToServices: defaultServiceSelection(),
    clientEligibility: {
        presets: [],
        customLabels: []
    },
    minimumBoardingNights: null,
    minimumDaycareDays: null,
    minimumPets: null,
    notes: ''
});

function normalizeRule(id: string, raw: unknown): DiscountRule | null {
    if (!raw || typeof raw !== 'object') return null;

    const value = raw as Record<string, unknown>;
    const amountType = value.amountType === 'fixedCents' ? 'fixedCents' : 'percent';
    const rawServices = value.appliesToServices;
    const rawEligibility = value.clientEligibility;

    const appliesToServices = defaultServiceSelection();
    if (rawServices && typeof rawServices === 'object') {
        for (const key of serviceKeys) {
            appliesToServices[key] = (rawServices as Record<string, unknown>)[key] === true;
        }
    }

    const presets = Array.isArray((rawEligibility as Record<string, unknown> | undefined)?.presets)
        ? ((rawEligibility as Record<string, unknown>).presets as unknown[])
            .filter((item): item is PresetQualifierKey =>
                typeof item === 'string' && (presetQualifierKeys as readonly string[]).includes(item)
            )
        : [];

    const customLabels = Array.isArray((rawEligibility as Record<string, unknown> | undefined)?.customLabels)
        ? ((rawEligibility as Record<string, unknown>).customLabels as unknown[])
            .filter((item): item is string => typeof item === 'string')
            .map((item) => item.trim())
            .filter(Boolean)
        : [];

    return {
        id,
        name: typeof value.name === 'string' ? value.name : 'Untitled Discount',
        active: value.active !== false,
        amountType,
        amountValue: typeof value.amountValue === 'number' ? value.amountValue : 0,
        appliesToServices,
        clientEligibility: {
            presets,
            customLabels
        },
        minimumBoardingNights: typeof value.minimumBoardingNights === 'number'
            ? value.minimumBoardingNights
            : null,
        minimumDaycareDays: typeof value.minimumDaycareDays === 'number'
            ? value.minimumDaycareDays
            : null,
        minimumPets: typeof value.minimumPets === 'number' ? value.minimumPets : null,
        notes: typeof value.notes === 'string' ? value.notes : '',
        createdAt: value.createdAt,
        updatedAt: value.updatedAt
    };
}

function parseOptionalPositiveInt(raw: string): number | null {
    const trimmed = raw.trim();
    if (!trimmed) return null;

    const next = Number.parseInt(trimmed, 10);
    if (!Number.isFinite(next) || next <= 0) return null;
    return next;
}

export default function BoardingAndDaycareBusinessSettingsDiscountsPage() {
    const router = useRouter();
    const locale = useLocale();
    const t = useTranslations('boardingAndDaycareBusinessSettingsDiscounts');

    const auth = getAuth(app);
    const db = getFirestore(app);

    const [loading, setLoading] = useState(true);
    const [businessId, setBusinessId] = useState<string | null>(null);
    const [stackingPolicy, setStackingPolicy] = useState<StackingPolicy>('bestSingleRule');
    const [rules, setRules] = useState<DiscountRule[]>([]);
    const [showEditor, setShowEditor] = useState(false);
    const [editingRule, setEditingRule] = useState<DiscountRule | null>(null);
    const [statusMessage, setStatusMessage] = useState<string | null>(null);
    const [statusTone, setStatusTone] = useState<'success' | 'error'>('success');
    const [savingPolicy, setSavingPolicy] = useState(false);

    const resolveBusinessIdForOwner = useCallback(async (uid: string): Promise<string | null> => {
        try {
            const ownerIdMatches = await getDocs(
                query(collection(db, 'businesses'), where('ownerId', '==', uid))
            );
            if (!ownerIdMatches.empty) return ownerIdMatches.docs[0].id;
        } catch {
            // Keep trying fallback shape.
        }

        try {
            const ownerIdsMatches = await getDocs(
                query(collection(db, 'businesses'), where('ownerIds', 'array-contains', uid))
            );
            if (!ownerIdsMatches.empty) return ownerIdsMatches.docs[0].id;
        } catch {
            // Ignore and return null below.
        }

        return null;
    }, [db]);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            if (!user) {
                router.push(`/${locale}/loginsignup`);
                return;
            }

            try {
                const resolvedBusinessId = await resolveBusinessIdForOwner(user.uid);
                setBusinessId(resolvedBusinessId);
                if (!resolvedBusinessId) {
                    setStatusTone('error');
                    setStatusMessage(t('resolve_business_error'));
                    setLoading(false);
                }
            } catch {
                setStatusTone('error');
                setStatusMessage(t('resolve_business_error'));
                setLoading(false);
            }
        });

        return () => unsubscribe();
    }, [auth, locale, resolveBusinessIdForOwner, router, t]);

    useEffect(() => {
        if (!businessId) return;

        const ref = doc(db, 'businesses', businessId, 'settings', 'discountRules');
        const unsubscribe = onSnapshot(ref, (snap) => {
            if (!snap.exists()) {
                setStackingPolicy('bestSingleRule');
                setRules([]);
                setLoading(false);
                return;
            }

            const data = snap.data() as DiscountSettingsSnapshot;
            const nextPolicy = data.stackingPolicy;
            setStackingPolicy(
                nextPolicy === 'stackRules' || nextPolicy === 'manualReview'
                    ? nextPolicy
                    : 'bestSingleRule'
            );

            const nextRules = Object.entries(data.rules || {})
                .map(([id, raw]) => normalizeRule(id, raw))
                .filter((rule): rule is DiscountRule => rule !== null)
                .sort((a, b) => a.name.localeCompare(b.name));

            setRules(nextRules);
            setLoading(false);
        });

        return () => unsubscribe();
    }, [businessId, db]);

    const savePolicy = async (nextPolicy: StackingPolicy) => {
        if (!businessId) return;

        setSavingPolicy(true);
        setStatusMessage(null);
        try {
            await setDoc(
                doc(db, 'businesses', businessId, 'settings', 'discountRules'),
                {
                    stackingPolicy: nextPolicy,
                    updatedAt: new Date()
                },
                { merge: true }
            );
            setStackingPolicy(nextPolicy);
            setStatusTone('success');
            setStatusMessage(t('policy_saved'));
        } catch {
            setStatusTone('error');
            setStatusMessage(t('save_failed'));
        } finally {
            setSavingPolicy(false);
        }
    };

    const saveRule = async (rule: DiscountRule) => {
        if (!businessId) return;

        const now = new Date();
        const payload = {
            name: rule.name,
            active: rule.active,
            amountType: rule.amountType,
            amountValue: rule.amountValue,
            appliesToServices: rule.appliesToServices,
            clientEligibility: rule.clientEligibility,
            minimumBoardingNights: rule.minimumBoardingNights,
            minimumDaycareDays: rule.minimumDaycareDays,
            minimumPets: rule.minimumPets,
            notes: rule.notes,
            createdAt: rule.createdAt ?? now,
            updatedAt: now
        };

        try {
            await setDoc(
                doc(db, 'businesses', businessId, 'settings', 'discountRules'),
                {
                    rules: {
                        [rule.id]: payload
                    },
                    updatedAt: now
                },
                { merge: true }
            );
            setShowEditor(false);
            setEditingRule(null);
            setStatusTone('success');
            setStatusMessage(t('rule_saved'));
        } catch {
            setStatusTone('error');
            setStatusMessage(t('save_failed'));
        }
    };

    const deleteRule = async (ruleId: string) => {
        if (!businessId) return;

        try {
            await updateDoc(
                doc(db, 'businesses', businessId, 'settings', 'discountRules'),
                {
                    [`rules.${ruleId}`]: deleteField(),
                    updatedAt: new Date()
                }
            );
            setStatusTone('success');
            setStatusMessage(t('rule_deleted'));
        } catch {
            setStatusTone('error');
            setStatusMessage(t('delete_failed'));
        }
    };

    const presetLabelByKey = useMemo<Record<PresetQualifierKey, string>>(() => ({
        veteran: t('qualifier_veteran'),
        activeMilitary: t('qualifier_active_military'),
        police: t('qualifier_police'),
        firefighter: t('qualifier_firefighter'),
        firstResponder: t('qualifier_first_responder'),
        staff: t('qualifier_staff'),
        senior: t('qualifier_senior'),
        rescueAdopter: t('qualifier_rescue_adopter')
    }), [t]);

    const serviceLabelByKey = useMemo<Record<ServiceKey, string>>(() => ({
        boarding: t('service_boarding'),
        daycare: t('service_daycare'),
        grooming: t('service_grooming'),
        training: t('service_training')
    }), [t]);

    const formatAmount = (rule: DiscountRule) => {
        if (rule.amountType === 'percent') {
            const percentText = Number.isInteger(rule.amountValue)
                ? String(rule.amountValue)
                : rule.amountValue.toFixed(2).replace(/\.00$/, '');
            return t('summary_amount_percent', { value: percentText });
        }

        return t('summary_amount_fixed', {
            value: new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD'
            }).format(rule.amountValue / 100)
        });
    };

    const summarizeServices = (rule: DiscountRule) =>
        serviceKeys
            .filter((key) => rule.appliesToServices[key])
            .map((key) => serviceLabelByKey[key])
            .join(', ');

    const summarizeQualifiers = (rule: DiscountRule) => {
        const qualifiers = [
            ...rule.clientEligibility.presets.map((key) => presetLabelByKey[key]),
            ...rule.clientEligibility.customLabels
        ];
        return qualifiers.length > 0 ? qualifiers.join(', ') : t('summary_all_clients');
    };

    if (loading) {
        return <div className="p-6 text-center">{t('loading')}</div>;
    }

    if (!businessId) {
        return (
            <div className="max-w-3xl mx-auto px-4 py-8">
                <button
                    type="button"
                    onClick={() => router.push(`/${locale}/boardinganddaycare-businesssettings`)}
                    className="text-sm text-blue-600 underline mb-4"
                >
                    {t('back_button')}
                </button>

                <div className="border rounded-lg bg-white p-5 text-center text-sm text-red-600">
                    {statusMessage || t('missing_business')}
                </div>
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            <button
                type="button"
                onClick={() => router.push(`/${locale}/boardinganddaycare-businesssettings`)}
                className="text-sm text-blue-600 underline mb-4"
            >
                {t('back_button')}
            </button>

            <div className="space-y-6">
                <div className="text-center space-y-2">
                    <h1 className="text-3xl font-bold text-[color:var(--color-accent)]">
                        {t('title')}
                    </h1>
                    <p className="text-sm text-gray-600 max-w-2xl mx-auto">
                        {t('subtitle')}
                    </p>
                </div>

                {statusMessage ? (
                    <div
                        className={`border rounded-lg px-4 py-3 text-sm ${
                            statusTone === 'success'
                                ? 'border-green-200 bg-green-50 text-green-700'
                                : 'border-red-200 bg-red-50 text-red-700'
                        }`}
                    >
                        {statusMessage}
                    </div>
                ) : null}

                <div className="border rounded-lg bg-white p-5 space-y-4">
                    <div className="space-y-1">
                        <h2 className="text-xl font-semibold text-[color:var(--color-accent)]">
                            {t('policy_title')}
                        </h2>
                        <p className="text-sm text-gray-600">
                            {t('policy_subtitle')}
                        </p>
                    </div>

                    <div className="flex flex-col md:flex-row md:items-end gap-3">
                        <div className="flex-1">
                            <label className="block text-sm font-medium mb-1">
                                {t('policy_label')}
                            </label>
                            <select
                                value={stackingPolicy}
                                onChange={(e) => setStackingPolicy(e.target.value as StackingPolicy)}
                                className="w-full border rounded px-3 py-2 text-sm"
                            >
                                <option value="bestSingleRule">{t('policy_best_single')}</option>
                                <option value="stackRules">{t('policy_stack')}</option>
                                <option value="manualReview">{t('policy_manual')}</option>
                            </select>
                        </div>

                        <button
                            type="button"
                            onClick={() => savePolicy(stackingPolicy)}
                            disabled={savingPolicy}
                            className="bg-[#1F4D2E] hover:bg-[#163A22] text-white font-semibold px-4 py-2 rounded-md disabled:opacity-60"
                        >
                            {savingPolicy ? t('saving_button') : t('policy_save')}
                        </button>
                    </div>

                    <div className="border rounded-lg bg-gray-50 p-4 space-y-3">
                        <h3 className="text-sm font-semibold text-[color:var(--color-accent)]">
                            {t('policy_help_title')}
                        </h3>

                        <div className="space-y-2 text-sm text-gray-700">
                            <p>
                                <span className="font-semibold">{t('policy_best_single')}</span>
                                {' '}
                                {t('policy_help_best_single')}
                            </p>

                            <p>
                                <span className="font-semibold">{t('policy_stack')}</span>
                                {' '}
                                {t('policy_help_stack')}
                            </p>

                            <p>
                                <span className="font-semibold">{t('policy_manual')}</span>
                                {' '}
                                {t('policy_help_manual')}
                            </p>
                        </div>
                    </div>
                </div>

                <div className="border rounded-lg bg-white p-5 space-y-5">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                        <div className="space-y-1">
                            <h2 className="text-xl font-semibold text-[color:var(--color-accent)]">
                                {t('rules_title')}
                            </h2>
                            <p className="text-sm text-gray-600">
                                {t('rules_subtitle')}
                            </p>
                        </div>

                        <button
                            type="button"
                            onClick={() => {
                                setEditingRule(null);
                                setShowEditor(true);
                            }}
                            className="bg-[#1F4D2E] hover:bg-[#163A22] text-white font-semibold px-4 py-2 rounded-md"
                        >
                            {t('add_rule_button')}
                        </button>
                    </div>

                    {rules.length === 0 ? (
                        <div className="border border-dashed rounded-lg px-4 py-8 text-center text-sm text-gray-500">
                            {t('empty_state')}
                        </div>
                    ) : (
                        <div className="space-y-4">
                            {rules.map((rule) => (
                                <div
                                    key={rule.id}
                                    className="border rounded-lg p-4 bg-gray-50 space-y-3"
                                >
                                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                                        <div className="space-y-1">
                                            <div className="flex items-center gap-2 flex-wrap">
                                                <h3 className="text-lg font-semibold">
                                                    {rule.name}
                                                </h3>
                                                <span
                                                    className={`text-xs font-semibold px-2 py-1 rounded-full ${
                                                        rule.active
                                                            ? 'bg-green-100 text-green-700'
                                                            : 'bg-gray-200 text-gray-600'
                                                    }`}
                                                >
                                                    {rule.active ? t('active') : t('inactive')}
                                                </span>
                                            </div>
                                            <p className="text-sm font-medium text-[color:var(--color-accent)]">
                                                {formatAmount(rule)}
                                            </p>
                                        </div>

                                        <div className="flex items-center gap-2">
                                            <button
                                                type="button"
                                                onClick={() => {
                                                    setEditingRule(rule);
                                                    setShowEditor(true);
                                                }}
                                                className="px-3 py-2 text-sm border rounded-md hover:bg-white"
                                            >
                                                {t('edit_rule_button')}
                                            </button>
                                            <button
                                                type="button"
                                                onClick={() => deleteRule(rule.id)}
                                                className="px-3 py-2 text-sm border border-red-200 text-red-600 rounded-md hover:bg-red-50"
                                            >
                                                {t('delete_rule_button')}
                                            </button>
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-3 text-sm">
                                        <div>
                                            <p className="font-medium text-gray-900">{t('summary_services_label')}</p>
                                            <p className="text-gray-600">{summarizeServices(rule)}</p>
                                        </div>

                                        <div>
                                            <p className="font-medium text-gray-900">{t('summary_qualifiers_label')}</p>
                                            <p className="text-gray-600">{summarizeQualifiers(rule)}</p>
                                        </div>

                                        {rule.minimumBoardingNights ? (
                                            <div>
                                                <p className="font-medium text-gray-900">{t('summary_min_boarding_nights_label')}</p>
                                                <p className="text-gray-600">
                                                    {t('summary_min_boarding_nights_value', { count: rule.minimumBoardingNights })}
                                                </p>
                                            </div>
                                        ) : null}

                                        {rule.minimumDaycareDays ? (
                                            <div>
                                                <p className="font-medium text-gray-900">{t('summary_min_daycare_days_label')}</p>
                                                <p className="text-gray-600">
                                                    {t('summary_min_daycare_days_value', { count: rule.minimumDaycareDays })}
                                                </p>
                                            </div>
                                        ) : null}

                                        {rule.minimumPets ? (
                                            <div>
                                                <p className="font-medium text-gray-900">{t('summary_min_pets_label')}</p>
                                                <p className="text-gray-600">
                                                    {t('summary_min_pets_value', { count: rule.minimumPets })}
                                                </p>
                                            </div>
                                        ) : null}
                                    </div>

                                    {rule.notes.trim() ? (
                                        <div className="text-sm">
                                            <p className="font-medium text-gray-900">{t('summary_notes_label')}</p>
                                            <p className="text-gray-600 whitespace-pre-wrap">{rule.notes}</p>
                                        </div>
                                    ) : null}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            {showEditor ? (
                <DiscountRuleEditorModal
                    existing={editingRule}
                    onClose={() => {
                        setShowEditor(false);
                        setEditingRule(null);
                    }}
                    onSave={saveRule}
                />
            ) : null}
        </div>
    );
}

function DiscountRuleEditorModal({
    existing,
    onClose,
    onSave
}: {
    existing: DiscountRule | null;
    onClose: () => void;
    onSave: (rule: DiscountRule) => Promise<void> | void;
}) {
    const t = useTranslations('boardingAndDaycareBusinessSettingsDiscounts');
    const initialRule = existing ?? emptyRule();

    const [name, setName] = useState(initialRule.name);
    const [active, setActive] = useState(initialRule.active);
    const [amountType, setAmountType] = useState<DiscountType>(initialRule.amountType);
    const [amountValue, setAmountValue] = useState(
        existing
            ? initialRule.amountType === 'fixedCents'
                ? centsToCurrencyText(initialRule.amountValue)
                : String(initialRule.amountValue)
            : ''
    );
    const [services, setServices] = useState<Record<ServiceKey, boolean>>(initialRule.appliesToServices);
    const [selectedPresets, setSelectedPresets] = useState<PresetQualifierKey[]>(initialRule.clientEligibility.presets);
    const [customQualifiers, setCustomQualifiers] = useState(initialRule.clientEligibility.customLabels.join('\n'));
    const [minimumBoardingNights, setMinimumBoardingNights] = useState(
        initialRule.minimumBoardingNights ? String(initialRule.minimumBoardingNights) : ''
    );
    const [minimumDaycareDays, setMinimumDaycareDays] = useState(
        initialRule.minimumDaycareDays ? String(initialRule.minimumDaycareDays) : ''
    );
    const [minimumPets, setMinimumPets] = useState(
        initialRule.minimumPets ? String(initialRule.minimumPets) : ''
    );
    const [notes, setNotes] = useState(initialRule.notes);
    const [formError, setFormError] = useState<string | null>(null);

    const toggleService = (service: ServiceKey, checked: boolean) => {
        setServices((prev) => ({
            ...prev,
            [service]: checked
        }));

        if (service === 'boarding' && !checked) {
            setMinimumBoardingNights('');
        }

        if (service === 'daycare' && !checked) {
            setMinimumDaycareDays('');
        }
    };

    const togglePreset = (preset: PresetQualifierKey, checked: boolean) => {
        setSelectedPresets((prev) => {
            if (checked) return Array.from(new Set([...prev, preset]));
            return prev.filter((item) => item !== preset);
        });
    };

    const handleSave = () => {
        const trimmedName = name.trim();
        if (!trimmedName) {
            setFormError(t('error_name'));
            return;
        }

        const hasAtLeastOneService = serviceKeys.some((key) => services[key]);
        if (!hasAtLeastOneService) {
            setFormError(t('error_service'));
            return;
        }

        const parsedAmount = amountType === 'fixedCents'
            ? currencyTextToCents(amountValue)
            : Number.parseFloat(amountValue);

        if (!Number.isFinite(parsedAmount) || parsedAmount <= 0 || (amountType === 'percent' && parsedAmount > 100)) {
            setFormError(t('error_amount'));
            return;
        }

        const customLabels = Array.from(
            new Set(
                customQualifiers
                    .split(/[\n,]/g)
                    .map((item) => item.trim())
                    .filter(Boolean)
            )
        );

        setFormError(null);
        void onSave({
            id: existing?.id ?? crypto.randomUUID(),
            name: trimmedName,
            active,
            amountType,
            amountValue: amountType === 'fixedCents' ? parsedAmount : Number(parsedAmount.toFixed(2)),
            appliesToServices: services,
            clientEligibility: {
                presets: selectedPresets,
                customLabels
            },
            minimumBoardingNights: services.boarding ? parseOptionalPositiveInt(minimumBoardingNights) : null,
            minimumDaycareDays: services.daycare ? parseOptionalPositiveInt(minimumDaycareDays) : null,
            minimumPets: parseOptionalPositiveInt(minimumPets),
            notes: notes.trim(),
            createdAt: existing?.createdAt,
            updatedAt: existing?.updatedAt
        });
    };

    return (
        <div className="fixed inset-0 z-[9999] bg-black/50 flex items-center justify-center p-4">
            <div className="bg-white rounded-xl w-full max-w-2xl max-h-[92vh] border shadow-xl flex flex-col">
                <div className="p-6 border-b">
                    <h2 className="text-xl font-bold text-[color:var(--color-accent)]">
                        {existing ? t('modal_edit_title') : t('modal_add_title')}
                    </h2>
                    <p className="text-sm text-gray-600 mt-1">
                        {t('modal_subtitle')}
                    </p>
                </div>

                <div className="p-6 overflow-y-auto space-y-5">
                    {formError ? (
                        <div className="border border-red-200 bg-red-50 text-red-700 text-sm rounded-md px-3 py-2">
                            {formError}
                        </div>
                    ) : null}

                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="md:col-span-2">
                            <label className="block text-sm font-medium mb-1">
                                {t('field_name')}
                            </label>
                            <input
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder={t('field_name_placeholder')}
                                className="w-full border rounded px-3 py-2 text-sm"
                            />
                        </div>

                        <label className="flex items-center gap-2 text-sm font-medium">
                            <input
                                type="checkbox"
                                checked={active}
                                onChange={(e) => setActive(e.target.checked)}
                            />
                            <span>{t('field_active')}</span>
                        </label>

                        <div />

                        <div>
                            <label className="block text-sm font-medium mb-1">
                                {t('field_discount_type')}
                            </label>
                            <select
                                value={amountType}
                                onChange={(e) => {
                                    const next = e.target.value as DiscountType;
                                    setAmountType(next);
                                    setAmountValue('');
                                }}
                                className="w-full border rounded px-3 py-2 text-sm"
                            >
                                <option value="percent">{t('type_percent')}</option>
                                <option value="fixedCents">{t('type_fixed')}</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-1">
                                {t('field_amount')}
                            </label>
                            <input
                                value={amountValue}
                                onChange={(e) => setAmountValue(e.target.value)}
                                placeholder={
                                    amountType === 'fixedCents'
                                        ? t('field_amount_fixed_placeholder')
                                        : t('field_amount_percent_placeholder')
                                }
                                className="w-full border rounded px-3 py-2 text-sm"
                                inputMode="decimal"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <p className="text-sm font-medium">{t('field_services')}</p>
                        <div className="grid sm:grid-cols-2 gap-2">
                            {serviceKeys.map((service) => (
                                <label
                                    key={service}
                                    className="flex items-center gap-2 border rounded-md px-3 py-2 text-sm"
                                >
                                    <input
                                        type="checkbox"
                                        checked={services[service]}
                                        onChange={(e) => toggleService(service, e.target.checked)}
                                    />
                                    <span>{t(`service_${service}`)}</span>
                                </label>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-2">
                        <p className="text-sm font-medium">{t('field_qualifiers')}</p>
                        <div className="grid sm:grid-cols-2 gap-2">
                            {presetQualifierKeys.map((preset) => (
                                <label
                                    key={preset}
                                    className="flex items-center gap-2 border rounded-md px-3 py-2 text-sm"
                                >
                                    <input
                                        type="checkbox"
                                        checked={selectedPresets.includes(preset)}
                                        onChange={(e) => togglePreset(preset, e.target.checked)}
                                    />
                                    <span>{t(`qualifier_${preset === 'activeMilitary' ? 'active_military' : preset === 'firstResponder' ? 'first_responder' : preset === 'rescueAdopter' ? 'rescue_adopter' : preset}`)}</span>
                                </label>
                            ))}
                        </div>
                        <p className="text-xs text-gray-500">
                            {t('custom_labels_helper')}
                        </p>
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">
                            {t('field_custom_qualifiers')}
                        </label>
                        <textarea
                            value={customQualifiers}
                            onChange={(e) => setCustomQualifiers(e.target.value)}
                            placeholder={t('field_custom_qualifiers_placeholder')}
                            className="w-full min-h-[90px] border rounded px-3 py-2 text-sm resize-none"
                        />
                    </div>

                    <div className="grid md:grid-cols-3 gap-4">
                        <div>
                            <label className="block text-sm font-medium mb-1">
                                {t('field_min_boarding_nights')}
                            </label>
                            <input
                                value={minimumBoardingNights}
                                onChange={(e) => setMinimumBoardingNights(e.target.value)}
                                placeholder="10"
                                className="w-full border rounded px-3 py-2 text-sm disabled:bg-gray-100"
                                inputMode="numeric"
                                disabled={!services.boarding}
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-1">
                                {t('field_min_daycare_days')}
                            </label>
                            <input
                                value={minimumDaycareDays}
                                onChange={(e) => setMinimumDaycareDays(e.target.value)}
                                placeholder="5"
                                className="w-full border rounded px-3 py-2 text-sm disabled:bg-gray-100"
                                inputMode="numeric"
                                disabled={!services.daycare}
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-1">
                                {t('field_min_pets')}
                            </label>
                            <input
                                value={minimumPets}
                                onChange={(e) => setMinimumPets(e.target.value)}
                                placeholder="2"
                                className="w-full border rounded px-3 py-2 text-sm"
                                inputMode="numeric"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">
                            {t('field_notes')}
                        </label>
                        <textarea
                            value={notes}
                            onChange={(e) => setNotes(e.target.value)}
                            placeholder={t('field_notes_placeholder')}
                            className="w-full min-h-[110px] border rounded px-3 py-2 text-sm resize-none"
                        />
                    </div>
                </div>

                <div className="border-t px-6 py-4 flex justify-end gap-2 bg-white">
                    <button
                        type="button"
                        onClick={onClose}
                        className="px-4 py-2 border rounded-md"
                    >
                        {t('cancel_button')}
                    </button>
                    <button
                        type="button"
                        onClick={handleSave}
                        className="px-4 py-2 bg-[#1F4D2E] hover:bg-[#163A22] text-white rounded-md font-semibold"
                    >
                        {t('save_button')}
                    </button>
                </div>
            </div>
        </div>
    );
}
