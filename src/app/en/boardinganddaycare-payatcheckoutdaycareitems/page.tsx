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
import { initializeApp } from 'firebase/app';
import { centsToCurrencyText, currencyTextToCents } from '@/lib/currencyUtils';

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY!,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN!,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID!,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET!,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID!,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID!,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

const MAX_ALLOWED_PRICING_TIERS = 10;

export default function BoardingAndDaycarePayAtCheckoutDaycareItemsPage() {
    const router = useRouter();
    const t = useTranslations('boardingAndDaycarePayAtCheckoutDaycareItems');

    const [businessId, setBusinessId] = useState('');
    const [loading, setLoading] = useState(true);
    const [isSaving, setIsSaving] = useState(false);
    const [notice, setNotice] = useState('');

    const [daycarePrices, setDaycarePrices] = useState<Record<number, string>>({});
    const [maxDaycarePricingRows, setMaxDaycarePricingRows] = useState(5);

    const [daycareAddOnServices, setDaycareAddOnServices] = useState<string[]>(['']);
    const [daycareAddOnServicePrices, setDaycareAddOnServicePrices] = useState<Record<string, string>>({});

    const tiers = useMemo(
        () => Array.from({ length: maxDaycarePricingRows }, (_, index) => index + 1),
        [maxDaycarePricingRows]
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
                const pricingSnap = await getDoc(
                    doc(db, 'businesses', resolvedBusinessId, 'settings', 'daycarePricing')
                );

                if (pricingSnap.exists()) {
                    const data = pricingSnap.data() as Record<string, number>;

                    for (const [key, value] of Object.entries(data)) {
                        const tier = Number(key);
                        if (!Number.isFinite(tier) || tier < 1) continue;

                        setDaycarePrices((prev) => ({
                            ...prev,
                            [tier]: centsToCurrencyText(value),
                        }));

                        setMaxDaycarePricingRows((prev) => Math.max(prev, tier));
                    }
                }
            } catch {
                // Keep defaults.
            }

            try {
                const addOnSnap = await getDoc(
                    doc(db, 'businesses', resolvedBusinessId, 'settings', 'daycareAddOnPricing')
                );

                if (addOnSnap.exists()) {
                    const data = addOnSnap.data();
                    const services = data.services || {};
                    const names = Object.keys(services).sort();

                    setDaycareAddOnServices(names.length > 0 ? names : ['']);

                    const nextPrices: Record<string, string> = {};
                    for (const serviceName of names) {
                        const cents = services[serviceName]?.priceCents;
                        if (typeof cents === 'number') {
                            nextPrices[serviceName] = centsToCurrencyText(cents);
                        }
                    }
                    setDaycareAddOnServicePrices(nextPrices);
                }
            } catch {
                // Keep defaults.
            }

            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    const helperText = (tier: number) => {
        if (tier === 1) return t('helperTextOne');
        return t('helperTextMany', { count: tier });
    };

    const daycarePricePayloadFromFields = () => {
        const payload: Record<string, number> = {};

        for (let tier = 1; tier <= maxDaycarePricingRows; tier += 1) {
            const cents = currencyTextToCents(daycarePrices[tier] || '');
            if (cents > 0) {
                payload[String(tier)] = cents;
            }
        }

        return payload;
    };

    const saveDaycarePricing = async () => {
        const payload = daycarePricePayloadFromFields();

        if (!businessId) return t('noticeUnableToResolve');

        if (Object.keys(payload).length === 0) {
            return t('noticeEnterOnePrice');
        }

        await setDoc(
            doc(db, 'businesses', businessId, 'settings', 'daycarePricing'),
            payload,
            { merge: false }
        );

        return t('noticeSaveSuccess');
    };

    const saveDaycareAddOnPricing = async () => {
        if (!businessId) return;

        const servicesPayload: Record<string, { priceCents: number }> = {};

        for (const service of daycareAddOnServices) {
            const trimmed = service.trim();
            if (!trimmed) continue;

            const cents = currencyTextToCents(daycareAddOnServicePrices[trimmed] || '');
            if (cents > 0) {
                servicesPayload[trimmed] = { priceCents: cents };
            }
        }

        await setDoc(
            doc(db, 'businesses', businessId, 'settings', 'daycareAddOnPricing'),
            { services: servicesPayload },
            { merge: false }
        );
    };

    const handleSave = async () => {
        if (!businessId) return;

        setIsSaving(true);
        setNotice('');

        try {
            const pricingMessage = await saveDaycarePricing();
            await saveDaycareAddOnPricing();
            setNotice(pricingMessage);
        } catch (error) {
            const message = error instanceof Error ? error.message : t('noticeSaveFailed');
            setNotice(message);
        } finally {
            setIsSaving(false);
        }
    };

    if (loading) {
        return <div className="p-6 text-center">{t('loading')}</div>;
    }

    return (
        <div className="max-w-3xl mx-auto px-4 py-8">
            <div className="mb-5">
                <button
                    type="button"
                    onClick={() => router.back()}
                    className="text-sm text-blue-600 underline"
                >
                    {t('back')}
                </button>
            </div>

            <h1 className="text-3xl font-bold text-center text-[color:var(--color-accent)] mb-6">
                {t('title')}
            </h1>

            <div className="space-y-6 border rounded-lg p-4 bg-white">
                <p className="text-sm text-gray-600">
                    {t('pricingIntro')}
                </p>

                {tiers.map((tier) => (
                    <div key={`tier-${tier}`}>
                        <input
                            value={daycarePrices[tier] || ''}
                            onChange={(e) =>
                                setDaycarePrices((prev) => ({
                                    ...prev,
                                    [tier]: e.target.value,
                                }))
                            }
                            placeholder={t('tierPricePlaceholder', {
                                count: tier,
                                suffix: tier > 1 ? 's' : '',
                            })}
                            className="w-full border px-3 py-2 rounded text-sm"
                            inputMode="decimal"
                        />
                        <p className="text-xs text-gray-500 mt-1">{helperText(tier)}</p>
                    </div>
                ))}

                {maxDaycarePricingRows < MAX_ALLOWED_PRICING_TIERS && (
                    <button
                        type="button"
                        onClick={() => setMaxDaycarePricingRows((prev) => prev + 1)}
                        className="text-sm text-green-700 underline"
                    >
                        {t('addTierButton', { count: maxDaycarePricingRows + 1 })}
                    </button>
                )}
            </div>

            <div className="space-y-4 border rounded-lg p-4 bg-white mt-6">
                <h2 className="text-2xl font-bold">{t('addonTitle')}</h2>
                <p className="text-sm text-gray-600">
                    {t('addonDescription')}
                </p>

                {daycareAddOnServices.map((service, index) => {
                    const trimmed = service.trim();

                    return (
                        <div key={`addon-${index}`} className="space-y-2">
                            <div className="flex gap-2">
                                <input
                                    value={service}
                                    placeholder={t('addonServicePlaceholder')}
                                    onChange={(e) => {
                                        const updated = [...daycareAddOnServices];
                                        updated[index] = e.target.value.slice(0, 50);
                                        setDaycareAddOnServices(updated);
                                    }}
                                    className="flex-1 border px-3 py-2 rounded text-sm"
                                />

                                {daycareAddOnServices.length > 1 && (
                                    <button
                                        type="button"
                                        onClick={() =>
                                            setDaycareAddOnServices((prev) => prev.filter((_, i) => i !== index))
                                        }
                                        className="text-red-600 font-bold text-lg"
                                    >
                                        &times;
                                    </button>
                                )}
                            </div>

                            {trimmed !== '' && (
                                <input
                                    value={daycareAddOnServicePrices[trimmed] || ''}
                                    placeholder={t('addonPricePlaceholder', { name: trimmed })}
                                    onChange={(e) =>
                                        setDaycareAddOnServicePrices((prev) => ({
                                            ...prev,
                                            [trimmed]: e.target.value,
                                        }))
                                    }
                                    className="w-full border px-3 py-2 rounded text-sm"
                                    inputMode="decimal"
                                />
                            )}
                        </div>
                    );
                })}

                <button
                    type="button"
                    onClick={() => setDaycareAddOnServices((prev) => [...prev, ''])}
                    className="text-sm text-green-700 underline"
                >
                    {t('addAddonButton')}
                </button>
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
