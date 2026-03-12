'use client';

import { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { getAuth } from 'firebase/auth';
import {
    collection,
    doc,
    getDoc,
    getDocs,
    getFirestore,
    query,
    setDoc,
    where,
} from 'firebase/firestore';
import { getApps, initializeApp } from 'firebase/app';
import { centsToCurrencyText, currencyTextToCents } from '@/lib/currencyUtils';
import {
    boardingDepositChargeCategories,
    boardingOddHourRuleKinds,
    defaultBoardingPricingSettings,
    normalizeBoardingPricingDoc,
    normalizeInvoiceLibraryItemsDoc,
    serializeBoardingPricingSettings,
    type BoardingCheckoutChargeWindow,
    type BoardingDepositChargeCategory,
    type BoardingDepositRule,
    type BoardingLengthDiscountMode,
    type BoardingLengthDiscountRule,
    type BoardingOddHourFeeRule,
    type BoardingOddHourRuleKind,
    type BoardingPricingSettings,
    type InvoiceLibraryItem,
} from '@/lib/boardingPricing';

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY!,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN!,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID!,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET!,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID!,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID!,
};

const app = getApps().length ? getApps()[0]! : initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

const MAX_ALLOWED_PRICING_TIERS = 10;
const DAYS_OF_WEEK = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const timeOptions = Array.from({ length: (24 - 5) * 4 + 1 }, (_, i) => {
    const minutes = i * 15 + 5 * 60;
    const hour = Math.floor(minutes / 60);
    const minute = minutes % 60;
    const period = hour < 12 ? 'AM' : 'PM';
    const formattedHour = hour % 12 === 0 ? 12 : hour % 12;
    return `${formattedHour}:${minute.toString().padStart(2, '0')} ${period}`;
});

type BoardingAddOnServicesDoc = {
    services?: Record<string, { priceCents?: number }>;
};

type BusinessWindowSummary = {
    beforeHoursPickUpTimeRequired?: boolean;
    beforeHoursPickUpTimes?: Record<string, string[]>;
    afterHoursPickUpTimeRequired?: boolean;
    afterHoursPickUpTimes?: Record<string, string[]>;
    earlyDropOffTimeRequired?: boolean;
    earlyDropOffTimes?: Record<string, string[]>;
    afterHoursDropOffTimeRequired?: boolean;
    afterHoursDropOffTimes?: Record<string, string[]>;
};

function emptyLengthDiscount(): BoardingLengthDiscountRule {
    return {
        id: crypto.randomUUID(),
        name: '',
        active: true,
        minNights: 1,
        mode: 'percent',
        percentOff: 0,
        fixedAmountCents: null,
        specialNightlyRates: {},
        notes: '',
    };
}

function emptyDepositRule(): BoardingDepositRule {
    return {
        id: crypto.randomUUID(),
        name: '',
        active: true,
        minNights: 1,
        maxNights: null,
        mode: 'nights',
        nightsRequired: 1,
        fixedAmountCents: null,
        percentAmount: null,
        notes: '',
    };
}

function emptyCheckoutWindow(): BoardingCheckoutChargeWindow {
    return {
        id: crypto.randomUUID(),
        name: '',
        active: true,
        startTime: '',
        endTime: '',
        invoiceItemId: '',
        invoiceItemName: '',
        notes: '',
    };
}

function oddHourRuleLabelKey(kind: BoardingOddHourRuleKind) {
    if (kind === 'beforeHoursPickUp') return 'oddHour_beforeHoursPickUp';
    if (kind === 'afterHoursPickUp') return 'oddHour_afterHoursPickUp';
    if (kind === 'afterHoursDropOff') return 'oddHour_afterHoursDropOff';
    return 'oddHour_earlyDropOff';
}

function oddHourRuleDescriptionKey(kind: BoardingOddHourRuleKind) {
    if (kind === 'beforeHoursPickUp') return 'oddHour_beforeHoursPickUp_body';
    if (kind === 'afterHoursPickUp') return 'oddHour_afterHoursPickUp_body';
    if (kind === 'afterHoursDropOff') return 'oddHour_afterHoursDropOff_body';
    return 'oddHour_earlyDropOff_body';
}

function depositCategoryLabelKey(key: BoardingDepositChargeCategory) {
    switch (key) {
        case 'boardingNights':
            return 'depositCategory_boardingNights';
        case 'groomingAddOns':
            return 'depositCategory_groomingAddOns';
        case 'boardingAddOns':
            return 'depositCategory_boardingAddOns';
        case 'checkoutWindowFees':
            return 'depositCategory_checkoutWindowFees';
        case 'earlyDropOffFees':
            return 'depositCategory_earlyDropOffFees';
        case 'afterHoursDropOffFees':
            return 'depositCategory_afterHoursDropOffFees';
        case 'beforeHoursPickUpFees':
            return 'depositCategory_beforeHoursPickUpFees';
        default:
            return 'depositCategory_afterHoursPickUpFees';
    }
}

export default function BoardingAndDaycarePayAtCheckoutBoardingItemsPage() {
    const router = useRouter();
    const t = useTranslations('boardingAndDaycarePayAtCheckoutBoardingItems');

    const [businessId, setBusinessId] = useState('');
    const [loading, setLoading] = useState(true);
    const [isSaving, setIsSaving] = useState(false);
    const [notice, setNotice] = useState('');
    const [pricingSettings, setPricingSettings] = useState<BoardingPricingSettings>(defaultBoardingPricingSettings());
    const [maxBoardingPricingRows, setMaxBoardingPricingRows] = useState(5);
    const [boardingAddOnServices, setBoardingAddOnServices] = useState<string[]>(['']);
    const [boardingAddOnServicePrices, setBoardingAddOnServicePrices] = useState<Record<string, string>>({});
    const [invoiceItems, setInvoiceItems] = useState<InvoiceLibraryItem[]>([]);
    const [windowSummary, setWindowSummary] = useState<BusinessWindowSummary>({});

    const tiers = useMemo(
        () => Array.from({ length: maxBoardingPricingRows }, (_, index) => index + 1),
        [maxBoardingPricingRows]
    );

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(async (user) => {
            if (!user) {
                setLoading(false);
                return;
            }

            let resolvedBusinessId = '';

            const ownerIdQ = query(collection(db, 'businesses'), where('ownerId', '==', user.uid));
            const ownerIdSnap = await getDocs(ownerIdQ);
            if (!ownerIdSnap.empty) {
                resolvedBusinessId = ownerIdSnap.docs[0].id;
            } else {
                const ownerIdsQ = query(collection(db, 'businesses'), where('ownerIds', 'array-contains', user.uid));
                const ownerIdsSnap = await getDocs(ownerIdsQ);
                if (!ownerIdsSnap.empty) {
                    resolvedBusinessId = ownerIdsSnap.docs[0].id;
                }
            }

            if (!resolvedBusinessId) {
                setLoading(false);
                return;
            }

            setBusinessId(resolvedBusinessId);

            try {
                const [pricingSnap, addOnSnap, invoiceSnap, businessSnap] = await Promise.all([
                    getDoc(doc(db, 'businesses', resolvedBusinessId, 'settings', 'boardingPricing')),
                    getDoc(doc(db, 'businesses', resolvedBusinessId, 'settings', 'boardingAddOnPricing')),
                    getDoc(doc(db, 'businesses', resolvedBusinessId, 'settings', 'invoiceItemLibrary')),
                    getDoc(doc(db, 'businesses', resolvedBusinessId)),
                ]);

                if (pricingSnap.exists()) {
                    const normalized = normalizeBoardingPricingDoc(pricingSnap.data());
                    setPricingSettings(normalized);

                    const tiersInDoc = Object.keys(normalized.nightlyRates)
                        .map((key) => Number(key))
                        .filter((value) => Number.isFinite(value) && value > 0);
                    if (tiersInDoc.length > 0) {
                        setMaxBoardingPricingRows(Math.max(5, ...tiersInDoc));
                    }
                }

                if (addOnSnap.exists()) {
                    const addOnData = addOnSnap.data() as BoardingAddOnServicesDoc;
                    const services = addOnData.services || {};
                    const names = Object.keys(services).sort();
                    setBoardingAddOnServices(names.length > 0 ? names : ['']);

                    const prices: Record<string, string> = {};
                    for (const serviceName of names) {
                        const cents = services[serviceName]?.priceCents;
                        if (typeof cents === 'number' && cents > 0) {
                            prices[serviceName] = centsToCurrencyText(cents);
                        }
                    }
                    setBoardingAddOnServicePrices(prices);
                }

                if (invoiceSnap.exists()) {
                    setInvoiceItems(normalizeInvoiceLibraryItemsDoc(invoiceSnap.data()));
                } else {
                    setInvoiceItems([]);
                }

                if (businessSnap.exists()) {
                    const data = businessSnap.data() as BusinessWindowSummary;
                    setWindowSummary({
                        beforeHoursPickUpTimeRequired: data.beforeHoursPickUpTimeRequired || false,
                        beforeHoursPickUpTimes: data.beforeHoursPickUpTimes || {},
                        afterHoursPickUpTimeRequired: data.afterHoursPickUpTimeRequired || false,
                        afterHoursPickUpTimes: data.afterHoursPickUpTimes || {},
                        earlyDropOffTimeRequired: data.earlyDropOffTimeRequired || false,
                        earlyDropOffTimes: data.earlyDropOffTimes || {},
                        afterHoursDropOffTimeRequired: data.afterHoursDropOffTimeRequired || false,
                        afterHoursDropOffTimes: data.afterHoursDropOffTimes || {},
                    });
                }
            } catch (error) {
                console.error('❌ Failed loading boarding checkout settings:', error);
            } finally {
                setLoading(false);
            }
        });

        return () => unsubscribe();
    }, []);

    const saveBoardingAddOnPricing = async () => {
        if (!businessId) return;

        const servicesPayload: Record<string, { priceCents: number }> = {};
        for (const service of boardingAddOnServices) {
            const trimmed = service.trim();
            if (!trimmed) continue;

            const cents = currencyTextToCents(boardingAddOnServicePrices[trimmed] || '');
            if (cents > 0) {
                servicesPayload[trimmed] = { priceCents: cents };
            }
        }

        await setDoc(
            doc(db, 'businesses', businessId, 'settings', 'boardingAddOnPricing'),
            { services: servicesPayload },
            { merge: false }
        );
    };

    const handleSave = async () => {
        if (!businessId) return;
        setIsSaving(true);
        setNotice('');

        try {
            const normalizedToSave = normalizeBoardingPricingDoc(serializeBoardingPricingSettings(pricingSettings));

            if (Object.keys(normalizedToSave.nightlyRates).length === 0) {
                setNotice(t('noticeEnterOnePrice'));
                setIsSaving(false);
                return;
            }

            await Promise.all([
                setDoc(
                    doc(db, 'businesses', businessId, 'settings', 'boardingPricing'),
                    serializeBoardingPricingSettings(normalizedToSave),
                    { merge: false }
                ),
                saveBoardingAddOnPricing(),
            ]);

            setNotice(t('noticeSaveSuccess'));
        } catch (error) {
            const message = error instanceof Error ? error.message : t('noticeSaveFailed');
            setNotice(message);
        } finally {
            setIsSaving(false);
        }
    };

    const updateNightlyRate = (tier: number, value: string) => {
        setPricingSettings((prev) => ({
            ...prev,
            nightlyRates: {
                ...prev.nightlyRates,
                [String(tier)]: currencyTextToCents(value),
            },
        }));
    };

    const setLengthDiscount = (id: string, updater: (rule: BoardingLengthDiscountRule) => BoardingLengthDiscountRule) => {
        setPricingSettings((prev) => ({
            ...prev,
            lengthOfStayDiscounts: prev.lengthOfStayDiscounts.map((rule) => (
                rule.id === id ? updater(rule) : rule
            )),
        }));
    };

    const setDepositRule = (id: string, updater: (rule: BoardingDepositRule) => BoardingDepositRule) => {
        setPricingSettings((prev) => ({
            ...prev,
            depositRules: prev.depositRules.map((rule) => (
                rule.id === id ? updater(rule) : rule
            )),
        }));
    };

    const setCheckoutChargeWindow = (
        id: string,
        updater: (rule: BoardingCheckoutChargeWindow) => BoardingCheckoutChargeWindow
    ) => {
        setPricingSettings((prev) => ({
            ...prev,
            checkoutDay: {
                ...prev.checkoutDay,
                chargeWindows: prev.checkoutDay.chargeWindows.map((rule) => (
                    rule.id === id ? updater(rule) : rule
                )),
            },
        }));
    };

    const setOddHourRule = (
        kind: BoardingOddHourRuleKind,
        updater: (rule: BoardingOddHourFeeRule) => BoardingOddHourFeeRule
    ) => {
        setPricingSettings((prev) => ({
            ...prev,
            oddHourFeeRules: {
                ...prev.oddHourFeeRules,
                [kind]: updater(prev.oddHourFeeRules[kind]),
            },
        }));
    };

    const invoiceItemNameForId = (itemId: string) =>
        invoiceItems.find((item) => item.id === itemId)?.name || '';

    const specialWindowSummary = (map?: Record<string, string[]>) => (
        DAYS_OF_WEEK
            .filter((day) => (map?.[day] || []).length > 0)
            .map((day) => `${day}: ${(map?.[day] || []).join(', ')}`)
    );

    if (loading) {
        return <div className="p-6 text-center">{t('loading')}</div>;
    }

    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            <div className="mb-5">
                <button
                    type="button"
                    onClick={() => router.back()}
                    className="text-sm text-blue-600 underline"
                >
                    {t('back')}
                </button>
            </div>

            <h1 className="text-3xl font-bold text-center text-[color:var(--color-accent)] mb-3">
                {t('title')}
            </h1>

            <p className="text-sm text-gray-600 text-center mb-6 max-w-3xl mx-auto">
                {t('pageIntro')}
            </p>

            <div className="space-y-6">
                <section className="border rounded-lg p-4 bg-white">
                    <h2 className="text-2xl font-bold mb-2">{t('nightlyRatesTitle')}</h2>
                    <p className="text-sm text-gray-600 mb-4">{t('nightlyRatesBody')}</p>

                    <div className="space-y-4">
                        {tiers.map((tier) => (
                            <div key={`tier-${tier}`}>
                                <label className="block text-sm font-semibold mb-1">
                                    {t('nightlyTierLabel', { count: tier, suffix: tier > 1 ? 's' : '' })}
                                </label>
                                <input
                                    value={centsToCurrencyText(pricingSettings.nightlyRates[String(tier)] || 0)}
                                    onChange={(e) => updateNightlyRate(tier, e.target.value)}
                                    placeholder={t('nightlyTierPlaceholder', {
                                        count: tier,
                                        suffix: tier > 1 ? 's' : '',
                                    })}
                                    className="w-full border px-3 py-2 rounded text-sm"
                                    inputMode="decimal"
                                />
                                <p className="text-xs text-gray-500 mt-1">
                                    {tier === 1 ? t('nightlyTierHelperSingle') : t('nightlyTierHelperMulti', { count: tier })}
                                </p>
                            </div>
                        ))}
                    </div>

                    {maxBoardingPricingRows < MAX_ALLOWED_PRICING_TIERS && (
                        <button
                            type="button"
                            onClick={() => setMaxBoardingPricingRows((prev) => prev + 1)}
                            className="text-sm text-green-700 underline mt-4"
                        >
                            {t('addTierButton', { count: maxBoardingPricingRows + 1 })}
                        </button>
                    )}
                </section>

                <section className="border rounded-lg p-4 bg-white">
                    <h2 className="text-2xl font-bold mb-2">{t('checkoutRulesTitle')}</h2>
                    <p className="text-sm text-gray-600 mb-4">{t('checkoutRulesBody')}</p>

                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-semibold mb-1">
                                {t('complimentaryPickupCutoffLabel')}
                            </label>
                            <select
                                value={pricingSettings.checkoutDay.complimentaryPickupCutoffTime || ''}
                                onChange={(e) => setPricingSettings((prev) => ({
                                    ...prev,
                                    checkoutDay: {
                                        ...prev.checkoutDay,
                                        complimentaryPickupCutoffTime: e.target.value || null,
                                    },
                                }))}
                                className="w-full border px-3 py-2 rounded text-sm"
                            >
                                <option value="">{t('noComplimentaryCutoffOption')}</option>
                                {timeOptions.map((time) => (
                                    <option key={`cutoff-${time}`} value={time}>{time}</option>
                                ))}
                            </select>
                            <p className="text-xs text-gray-500 mt-1">{t('complimentaryPickupCutoffHelper')}</p>
                        </div>

                        <div className="space-y-3">
                            <div>
                                <h3 className="font-semibold text-sm">{t('checkoutWindowRulesTitle')}</h3>
                                <p className="text-xs text-gray-500 mt-1">{t('checkoutWindowRulesBody')}</p>
                            </div>

                            {pricingSettings.checkoutDay.chargeWindows.map((rule) => (
                                <div key={rule.id} className="border rounded p-3 bg-gray-50 space-y-3">
                                    <div className="flex items-start justify-between gap-3">
                                        <div className="flex-1">
                                            <label className="block text-sm font-semibold mb-1">{t('ruleNameLabel')}</label>
                                            <input
                                                value={rule.name}
                                                onChange={(e) => setCheckoutChargeWindow(rule.id, (current) => ({
                                                    ...current,
                                                    name: e.target.value.slice(0, 80),
                                                }))}
                                                className="w-full border px-3 py-2 rounded text-sm"
                                                placeholder={t('checkoutWindowNamePlaceholder')}
                                            />
                                        </div>

                                        <label className="flex items-center gap-2 text-sm pt-7">
                                            <input
                                                type="checkbox"
                                                checked={rule.active}
                                                onChange={(e) => setCheckoutChargeWindow(rule.id, (current) => ({
                                                    ...current,
                                                    active: e.target.checked,
                                                }))}
                                            />
                                            <span>{t('activeRuleLabel')}</span>
                                        </label>
                                    </div>

                                    <div className="grid gap-3 md:grid-cols-2">
                                        <div>
                                            <label className="block text-sm font-semibold mb-1">{t('ruleStartLabel')}</label>
                                            <select
                                                value={rule.startTime}
                                                onChange={(e) => setCheckoutChargeWindow(rule.id, (current) => ({
                                                    ...current,
                                                    startTime: e.target.value,
                                                }))}
                                                className="w-full border px-3 py-2 rounded text-sm"
                                            >
                                                <option value="">{t('selectTimeOption')}</option>
                                                {timeOptions.map((time) => (
                                                    <option key={`${rule.id}-start-${time}`} value={time}>{time}</option>
                                                ))}
                                            </select>
                                        </div>

                                        <div>
                                            <label className="block text-sm font-semibold mb-1">{t('ruleEndLabel')}</label>
                                            <select
                                                value={rule.endTime || ''}
                                                onChange={(e) => setCheckoutChargeWindow(rule.id, (current) => ({
                                                    ...current,
                                                    endTime: e.target.value || '',
                                                }))}
                                                className="w-full border px-3 py-2 rounded text-sm"
                                            >
                                                <option value="">{t('noEndTimeOption')}</option>
                                                {timeOptions.map((time) => (
                                                    <option key={`${rule.id}-end-${time}`} value={time}>{time}</option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-semibold mb-1">{t('invoiceItemLabel')}</label>
                                        <select
                                            value={rule.invoiceItemId}
                                            onChange={(e) => setCheckoutChargeWindow(rule.id, (current) => ({
                                                ...current,
                                                invoiceItemId: e.target.value,
                                                invoiceItemName: invoiceItemNameForId(e.target.value),
                                            }))}
                                            className="w-full border px-3 py-2 rounded text-sm"
                                        >
                                            <option value="">{t('selectInvoiceItemOption')}</option>
                                            {invoiceItems.map((item) => (
                                                <option key={`${rule.id}-${item.id}`} value={item.id}>
                                                    {item.name} - ${(item.priceCents / 100).toFixed(2)}
                                                </option>
                                            ))}
                                        </select>
                                        <p className="text-xs text-gray-500 mt-1">{t('invoiceItemHelper')}</p>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-semibold mb-1">{t('ruleNotesLabel')}</label>
                                        <textarea
                                            value={rule.notes}
                                            onChange={(e) => setCheckoutChargeWindow(rule.id, (current) => ({
                                                ...current,
                                                notes: e.target.value.slice(0, 200),
                                            }))}
                                            className="w-full border px-3 py-2 rounded text-sm min-h-[72px]"
                                            placeholder={t('checkoutWindowNotesPlaceholder')}
                                        />
                                    </div>

                                    <button
                                        type="button"
                                        onClick={() => setPricingSettings((prev) => ({
                                            ...prev,
                                            checkoutDay: {
                                                ...prev.checkoutDay,
                                                chargeWindows: prev.checkoutDay.chargeWindows.filter((item) => item.id !== rule.id),
                                            },
                                        }))}
                                        className="text-sm text-red-600 underline"
                                    >
                                        {t('removeRuleButton')}
                                    </button>
                                </div>
                            ))}

                            <button
                                type="button"
                                onClick={() => setPricingSettings((prev) => ({
                                    ...prev,
                                    checkoutDay: {
                                        ...prev.checkoutDay,
                                        chargeWindows: [...prev.checkoutDay.chargeWindows, emptyCheckoutWindow()],
                                    },
                                }))}
                                className="text-sm text-green-700 underline"
                            >
                                {t('addCheckoutWindowButton')}
                            </button>
                        </div>
                    </div>
                </section>

                <section className="border rounded-lg p-4 bg-white">
                    <h2 className="text-2xl font-bold mb-2">{t('lengthDiscountsTitle')}</h2>
                    <p className="text-sm text-gray-600 mb-4">{t('lengthDiscountsBody')}</p>

                    <div className="space-y-4">
                        {pricingSettings.lengthOfStayDiscounts.map((rule) => (
                            <div key={rule.id} className="border rounded p-3 bg-gray-50 space-y-3">
                                <div className="flex items-start justify-between gap-3">
                                    <div className="flex-1">
                                        <label className="block text-sm font-semibold mb-1">{t('ruleNameLabel')}</label>
                                        <input
                                            value={rule.name}
                                            onChange={(e) => setLengthDiscount(rule.id, (current) => ({
                                                ...current,
                                                name: e.target.value.slice(0, 80),
                                            }))}
                                            className="w-full border px-3 py-2 rounded text-sm"
                                            placeholder={t('lengthDiscountNamePlaceholder')}
                                        />
                                    </div>

                                    <label className="flex items-center gap-2 text-sm pt-7">
                                        <input
                                            type="checkbox"
                                            checked={rule.active}
                                            onChange={(e) => setLengthDiscount(rule.id, (current) => ({
                                                ...current,
                                                active: e.target.checked,
                                            }))}
                                        />
                                        <span>{t('activeRuleLabel')}</span>
                                    </label>
                                </div>

                                <div className="grid gap-3 md:grid-cols-2">
                                    <div>
                                        <label className="block text-sm font-semibold mb-1">{t('minNightsLabel')}</label>
                                        <input
                                            type="number"
                                            min={1}
                                            value={rule.minNights}
                                            onChange={(e) => setLengthDiscount(rule.id, (current) => ({
                                                ...current,
                                                minNights: Math.max(1, Number(e.target.value) || 1),
                                            }))}
                                            className="w-full border px-3 py-2 rounded text-sm"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-semibold mb-1">{t('discountModeLabel')}</label>
                                        <select
                                            value={rule.mode}
                                            onChange={(e) => setLengthDiscount(rule.id, (current) => {
                                                const nextMode = e.target.value as BoardingLengthDiscountMode;
                                                return {
                                                    ...current,
                                                    mode: nextMode,
                                                    percentOff: nextMode === 'percent' ? current.percentOff : null,
                                                    fixedAmountCents: nextMode === 'fixedAmount' ? current.fixedAmountCents : null,
                                                    specialNightlyRates: nextMode === 'nightlyRate' ? current.specialNightlyRates : {},
                                                };
                                            })}
                                            className="w-full border px-3 py-2 rounded text-sm"
                                        >
                                            <option value="percent">{t('discountMode_percent')}</option>
                                            <option value="fixedAmount">{t('discountMode_fixedAmount')}</option>
                                            <option value="nightlyRate">{t('discountMode_nightlyRate')}</option>
                                        </select>
                                    </div>
                                </div>

                                {rule.mode === 'percent' && (
                                    <div>
                                        <label className="block text-sm font-semibold mb-1">{t('percentOffLabel')}</label>
                                        <input
                                            type="number"
                                            min={0}
                                            step="0.01"
                                            value={rule.percentOff || ''}
                                            onChange={(e) => setLengthDiscount(rule.id, (current) => ({
                                                ...current,
                                                percentOff: Number(e.target.value) || 0,
                                            }))}
                                            className="w-full border px-3 py-2 rounded text-sm"
                                            placeholder={t('percentOffPlaceholder')}
                                        />
                                    </div>
                                )}

                                {rule.mode === 'fixedAmount' && (
                                    <div>
                                        <label className="block text-sm font-semibold mb-1">{t('fixedAmountLabel')}</label>
                                        <input
                                            value={centsToCurrencyText(rule.fixedAmountCents || 0)}
                                            onChange={(e) => setLengthDiscount(rule.id, (current) => ({
                                                ...current,
                                                fixedAmountCents: currencyTextToCents(e.target.value),
                                            }))}
                                            className="w-full border px-3 py-2 rounded text-sm"
                                            inputMode="decimal"
                                            placeholder={t('fixedAmountPlaceholder')}
                                        />
                                    </div>
                                )}

                                {rule.mode === 'nightlyRate' && (
                                    <div className="space-y-3">
                                        <p className="text-xs text-gray-500">{t('specialNightlyRatesHelper')}</p>
                                        {tiers.map((tier) => (
                                            <div key={`${rule.id}-tier-${tier}`}>
                                                <label className="block text-sm font-semibold mb-1">
                                                    {t('specialNightlyRateTierLabel', { count: tier, suffix: tier > 1 ? 's' : '' })}
                                                </label>
                                                <input
                                                    value={centsToCurrencyText(rule.specialNightlyRates[String(tier)] || 0)}
                                                    onChange={(e) => setLengthDiscount(rule.id, (current) => ({
                                                        ...current,
                                                        specialNightlyRates: {
                                                            ...current.specialNightlyRates,
                                                            [String(tier)]: currencyTextToCents(e.target.value),
                                                        },
                                                    }))}
                                                    className="w-full border px-3 py-2 rounded text-sm"
                                                    inputMode="decimal"
                                                    placeholder={t('specialNightlyRatePlaceholder', {
                                                        count: tier,
                                                        suffix: tier > 1 ? 's' : '',
                                                    })}
                                                />
                                            </div>
                                        ))}
                                    </div>
                                )}

                                <div>
                                    <label className="block text-sm font-semibold mb-1">{t('ruleNotesLabel')}</label>
                                    <textarea
                                        value={rule.notes}
                                        onChange={(e) => setLengthDiscount(rule.id, (current) => ({
                                            ...current,
                                            notes: e.target.value.slice(0, 200),
                                        }))}
                                        className="w-full border px-3 py-2 rounded text-sm min-h-[72px]"
                                        placeholder={t('lengthDiscountNotesPlaceholder')}
                                    />
                                </div>

                                <button
                                    type="button"
                                    onClick={() => setPricingSettings((prev) => ({
                                        ...prev,
                                        lengthOfStayDiscounts: prev.lengthOfStayDiscounts.filter((item) => item.id !== rule.id),
                                    }))}
                                    className="text-sm text-red-600 underline"
                                >
                                    {t('removeRuleButton')}
                                </button>
                            </div>
                        ))}

                        <button
                            type="button"
                            onClick={() => setPricingSettings((prev) => ({
                                ...prev,
                                lengthOfStayDiscounts: [...prev.lengthOfStayDiscounts, emptyLengthDiscount()],
                            }))}
                            className="text-sm text-green-700 underline"
                        >
                            {t('addLengthDiscountButton')}
                        </button>
                    </div>
                </section>

                <section className="border rounded-lg p-4 bg-white">
                    <h2 className="text-2xl font-bold mb-2">{t('depositRulesTitle')}</h2>
                    <p className="text-sm text-gray-600 mb-4">{t('depositRulesBody')}</p>

                    <div className="space-y-4">
                        <div className="border rounded p-3 bg-gray-50">
                            <h3 className="font-semibold text-sm mb-2">{t('depositIncludeTitle')}</h3>
                            <p className="text-xs text-gray-500 mb-3">{t('depositIncludeBody')}</p>

                            <div className="space-y-2">
                                {boardingDepositChargeCategories.map((key) => (
                                    <label key={key} className="flex items-start gap-3 text-sm">
                                        <input
                                            type="checkbox"
                                            checked={pricingSettings.depositIncludes[key]}
                                            onChange={(e) => setPricingSettings((prev) => ({
                                                ...prev,
                                                depositIncludes: {
                                                    ...prev.depositIncludes,
                                                    [key]: e.target.checked,
                                                },
                                            }))}
                                            className="mt-1"
                                        />
                                        <span>{t(depositCategoryLabelKey(key))}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        {pricingSettings.depositRules.map((rule) => (
                            <div key={rule.id} className="border rounded p-3 bg-gray-50 space-y-3">
                                <div className="flex items-start justify-between gap-3">
                                    <div className="flex-1">
                                        <label className="block text-sm font-semibold mb-1">{t('ruleNameLabel')}</label>
                                        <input
                                            value={rule.name}
                                            onChange={(e) => setDepositRule(rule.id, (current) => ({
                                                ...current,
                                                name: e.target.value.slice(0, 80),
                                            }))}
                                            className="w-full border px-3 py-2 rounded text-sm"
                                            placeholder={t('depositRuleNamePlaceholder')}
                                        />
                                    </div>

                                    <label className="flex items-center gap-2 text-sm pt-7">
                                        <input
                                            type="checkbox"
                                            checked={rule.active}
                                            onChange={(e) => setDepositRule(rule.id, (current) => ({
                                                ...current,
                                                active: e.target.checked,
                                            }))}
                                        />
                                        <span>{t('activeRuleLabel')}</span>
                                    </label>
                                </div>

                                <div className="grid gap-3 md:grid-cols-3">
                                    <div>
                                        <label className="block text-sm font-semibold mb-1">{t('minNightsLabel')}</label>
                                        <input
                                            type="number"
                                            min={1}
                                            value={rule.minNights}
                                            onChange={(e) => setDepositRule(rule.id, (current) => ({
                                                ...current,
                                                minNights: Math.max(1, Number(e.target.value) || 1),
                                            }))}
                                            className="w-full border px-3 py-2 rounded text-sm"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-semibold mb-1">{t('maxNightsOptionalLabel')}</label>
                                        <input
                                            type="number"
                                            min={1}
                                            value={rule.maxNights || ''}
                                            onChange={(e) => setDepositRule(rule.id, (current) => ({
                                                ...current,
                                                maxNights: e.target.value ? Math.max(1, Number(e.target.value) || 1) : null,
                                            }))}
                                            className="w-full border px-3 py-2 rounded text-sm"
                                            placeholder={t('noMaximumPlaceholder')}
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-semibold mb-1">{t('depositModeLabel')}</label>
                                        <select
                                            value={rule.mode}
                                            onChange={(e) => setDepositRule(rule.id, (current) => {
                                                const nextMode = e.target.value as BoardingDepositRule['mode'];
                                                return {
                                                    ...current,
                                                    mode: nextMode,
                                                    nightsRequired: nextMode === 'nights' ? current.nightsRequired || 1 : null,
                                                    fixedAmountCents: nextMode === 'fixedAmount' ? current.fixedAmountCents || 0 : null,
                                                    percentAmount: nextMode === 'percent' ? current.percentAmount || 0 : null,
                                                };
                                            })}
                                            className="w-full border px-3 py-2 rounded text-sm"
                                        >
                                            <option value="nights">{t('depositMode_nights')}</option>
                                            <option value="fixedAmount">{t('depositMode_fixedAmount')}</option>
                                            <option value="percent">{t('depositMode_percent')}</option>
                                        </select>
                                    </div>
                                </div>

                                {rule.mode === 'nights' && (
                                    <div>
                                        <label className="block text-sm font-semibold mb-1">{t('nightsRequiredLabel')}</label>
                                        <input
                                            type="number"
                                            min={1}
                                            value={rule.nightsRequired || 1}
                                            onChange={(e) => setDepositRule(rule.id, (current) => ({
                                                ...current,
                                                nightsRequired: Math.max(1, Number(e.target.value) || 1),
                                            }))}
                                            className="w-full border px-3 py-2 rounded text-sm"
                                        />
                                        <p className="text-xs text-gray-500 mt-1">{t('nightsRequiredHelper')}</p>
                                    </div>
                                )}

                                {rule.mode === 'fixedAmount' && (
                                    <div>
                                        <label className="block text-sm font-semibold mb-1">{t('fixedAmountLabel')}</label>
                                        <input
                                            value={centsToCurrencyText(rule.fixedAmountCents || 0)}
                                            onChange={(e) => setDepositRule(rule.id, (current) => ({
                                                ...current,
                                                fixedAmountCents: currencyTextToCents(e.target.value),
                                            }))}
                                            className="w-full border px-3 py-2 rounded text-sm"
                                            inputMode="decimal"
                                            placeholder={t('fixedAmountPlaceholder')}
                                        />
                                    </div>
                                )}

                                {rule.mode === 'percent' && (
                                    <div>
                                        <label className="block text-sm font-semibold mb-1">{t('percentDepositLabel')}</label>
                                        <input
                                            type="number"
                                            min={0}
                                            step="0.01"
                                            value={rule.percentAmount || ''}
                                            onChange={(e) => setDepositRule(rule.id, (current) => ({
                                                ...current,
                                                percentAmount: Number(e.target.value) || 0,
                                            }))}
                                            className="w-full border px-3 py-2 rounded text-sm"
                                            placeholder={t('percentOffPlaceholder')}
                                        />
                                    </div>
                                )}

                                <div>
                                    <label className="block text-sm font-semibold mb-1">{t('ruleNotesLabel')}</label>
                                    <textarea
                                        value={rule.notes}
                                        onChange={(e) => setDepositRule(rule.id, (current) => ({
                                            ...current,
                                            notes: e.target.value.slice(0, 200),
                                        }))}
                                        className="w-full border px-3 py-2 rounded text-sm min-h-[72px]"
                                        placeholder={t('depositNotesPlaceholder')}
                                    />
                                </div>

                                <button
                                    type="button"
                                    onClick={() => setPricingSettings((prev) => ({
                                        ...prev,
                                        depositRules: prev.depositRules.filter((item) => item.id !== rule.id),
                                    }))}
                                    className="text-sm text-red-600 underline"
                                >
                                    {t('removeRuleButton')}
                                </button>
                            </div>
                        ))}

                        <button
                            type="button"
                            onClick={() => setPricingSettings((prev) => ({
                                ...prev,
                                depositRules: [...prev.depositRules, emptyDepositRule()],
                            }))}
                            className="text-sm text-green-700 underline"
                        >
                            {t('addDepositRuleButton')}
                        </button>
                    </div>
                </section>

                <section className="border rounded-lg p-4 bg-white">
                    <h2 className="text-2xl font-bold mb-2">{t('oddHoursTitle')}</h2>
                    <p className="text-sm text-gray-600 mb-4">{t('oddHoursBody')}</p>

                    <div className="space-y-4">
                        {boardingOddHourRuleKinds.map((kind) => {
                            const rule = pricingSettings.oddHourFeeRules[kind];
                            const summary =
                                kind === 'beforeHoursPickUp'
                                    ? specialWindowSummary(windowSummary.beforeHoursPickUpTimes)
                                    : kind === 'afterHoursPickUp'
                                        ? specialWindowSummary(windowSummary.afterHoursPickUpTimes)
                                        : kind === 'afterHoursDropOff'
                                            ? specialWindowSummary(windowSummary.afterHoursDropOffTimes)
                                            : specialWindowSummary(windowSummary.earlyDropOffTimes);

                            return (
                                <div key={kind} className="border rounded p-3 bg-gray-50 space-y-3">
                                    <div className="flex items-start justify-between gap-3">
                                        <div>
                                            <h3 className="font-semibold text-sm">{t(oddHourRuleLabelKey(kind))}</h3>
                                            <p className="text-xs text-gray-500 mt-1">{t(oddHourRuleDescriptionKey(kind))}</p>
                                        </div>

                                        <label className="flex items-center gap-2 text-sm">
                                            <input
                                                type="checkbox"
                                                checked={rule.active}
                                                onChange={(e) => setOddHourRule(kind, (current) => ({
                                                    ...current,
                                                    active: e.target.checked,
                                                }))}
                                            />
                                            <span>{t('activeRuleLabel')}</span>
                                        </label>
                                    </div>

                                    <div className="rounded border border-dashed p-3 bg-white">
                                        <p className="text-xs font-semibold text-gray-700 mb-1">
                                            {t('availableWindowsTitle')}
                                        </p>
                                        {summary.length > 0 ? (
                                            <ul className="text-xs text-gray-600 space-y-1">
                                                {summary.map((line) => (
                                                    <li key={`${kind}-${line}`}>{line}</li>
                                                ))}
                                            </ul>
                                        ) : (
                                            <p className="text-xs text-amber-700">{t('availableWindowsMissing')}</p>
                                        )}
                                    </div>

                                    <div>
                                        <label className="block text-sm font-semibold mb-1">{t('invoiceItemLabel')}</label>
                                        <select
                                            value={rule.invoiceItemId}
                                            onChange={(e) => setOddHourRule(kind, (current) => ({
                                                ...current,
                                                invoiceItemId: e.target.value,
                                                invoiceItemName: invoiceItemNameForId(e.target.value),
                                            }))}
                                            className="w-full border px-3 py-2 rounded text-sm"
                                        >
                                            <option value="">{t('selectInvoiceItemOption')}</option>
                                            {invoiceItems.map((item) => (
                                                <option key={`${kind}-${item.id}`} value={item.id}>
                                                    {item.name} - ${(item.priceCents / 100).toFixed(2)}
                                                </option>
                                            ))}
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-semibold mb-1">{t('ruleNotesLabel')}</label>
                                        <textarea
                                            value={rule.notes}
                                            onChange={(e) => setOddHourRule(kind, (current) => ({
                                                ...current,
                                                notes: e.target.value.slice(0, 200),
                                            }))}
                                            className="w-full border px-3 py-2 rounded text-sm min-h-[72px]"
                                            placeholder={t('oddHourNotesPlaceholder')}
                                        />
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </section>

                <section className="border rounded-lg p-4 bg-white">
                    <h2 className="text-2xl font-bold mb-2">{t('addonTitle')}</h2>
                    <p className="text-sm text-gray-600 mb-4">{t('addonDescription')}</p>

                    <div className="space-y-4">
                        {boardingAddOnServices.map((service, index) => {
                            const trimmed = service.trim();

                            return (
                                <div key={`addon-${index}`} className="space-y-2">
                                    <div className="flex gap-2">
                                        <input
                                            value={service}
                                            placeholder={t('addonServicePlaceholder')}
                                            onChange={(e) => {
                                                const updated = [...boardingAddOnServices];
                                                updated[index] = e.target.value.slice(0, 60);
                                                setBoardingAddOnServices(updated);
                                            }}
                                            className="flex-1 border px-3 py-2 rounded text-sm"
                                        />

                                        {boardingAddOnServices.length > 1 && (
                                            <button
                                                type="button"
                                                onClick={() => setBoardingAddOnServices((prev) => prev.filter((_, i) => i !== index))}
                                                className="text-red-600 font-bold text-lg"
                                            >
                                                &times;
                                            </button>
                                        )}
                                    </div>

                                    {trimmed !== '' && (
                                        <input
                                            value={boardingAddOnServicePrices[trimmed] || ''}
                                            placeholder={t('addonPricePlaceholder', { name: trimmed })}
                                            onChange={(e) => setBoardingAddOnServicePrices((prev) => ({
                                                ...prev,
                                                [trimmed]: e.target.value,
                                            }))}
                                            className="w-full border px-3 py-2 rounded text-sm"
                                            inputMode="decimal"
                                        />
                                    )}
                                </div>
                            );
                        })}

                        <button
                            type="button"
                            onClick={() => setBoardingAddOnServices((prev) => [...prev, ''])}
                            className="text-sm text-green-700 underline"
                        >
                            {t('addAddonButton')}
                        </button>
                    </div>
                </section>
            </div>

            {notice !== '' && (
                <div className="mt-5 border rounded bg-gray-50 px-3 py-2 text-sm">{notice}</div>
            )}

            <button
                type="button"
                onClick={handleSave}
                disabled={isSaving}
                className={`w-full mt-6 px-4 py-3 rounded text-white ${
                    isSaving ? 'bg-gray-400' : 'bg-[color:var(--color-accent)] hover:opacity-90'
                }`}
            >
                {isSaving ? t('savingButton') : t('saveButton')}
            </button>
        </div>
    );
}
