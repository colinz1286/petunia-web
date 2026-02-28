'use client';

import { useEffect, useState } from 'react';
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

export default function BoardingAndDaycarePayAtCheckoutGroomingItemsPage() {
    const router = useRouter();
    const t = useTranslations('boardingAndDaycarePayAtCheckoutGroomingItems');

    const [businessId, setBusinessId] = useState('');
    const [loading, setLoading] = useState(true);
    const [isSaving, setIsSaving] = useState(false);
    const [notice, setNotice] = useState('');

    const [groomingPricingItems, setGroomingPricingItems] = useState<string[]>(['']);
    const [groomingServicePrices, setGroomingServicePrices] = useState<Record<string, string>>({});
    const [groomingServiceCategories, setGroomingServiceCategories] = useState<Record<string, string>>({});

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
                const groomingSnap = await getDoc(
                    doc(db, 'businesses', resolvedBusinessId, 'settings', 'groomingPricing')
                );

                if (groomingSnap.exists()) {
                    const data = groomingSnap.data();
                    const grooming = data.grooming || {};
                    const services = grooming.services || {};
                    const serviceNames = Object.keys(services).sort();

                    setGroomingPricingItems(serviceNames.length > 0 ? serviceNames : ['']);

                    const nextPrices: Record<string, string> = {};
                    const nextCategories: Record<string, string> = {};

                    for (const serviceName of serviceNames) {
                        const cents = services[serviceName]?.priceCents;
                        const category = services[serviceName]?.category;

                        if (typeof cents === 'number') {
                            nextPrices[serviceName] = centsToCurrencyText(cents);
                        }

                        if (typeof category === 'string' && category.trim() !== '') {
                            nextCategories[serviceName] = category;
                        }
                    }

                    setGroomingServicePrices(nextPrices);
                    setGroomingServiceCategories(nextCategories);
                }
            } catch {
                // Keep defaults.
            }

            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    const groomingPricingPayloadFromFields = () => {
        const servicesPayload: Record<string, { priceCents: number; category?: string }> = {};

        for (const item of groomingPricingItems) {
            const trimmed = item.trim();
            if (!trimmed) continue;

            const cents = currencyTextToCents(groomingServicePrices[trimmed] || '');
            if (cents <= 0) continue;

            const serviceData: { priceCents: number; category?: string } = {
                priceCents: cents,
            };

            const category = (groomingServiceCategories[trimmed] || '').trim();
            if (category !== '') {
                serviceData.category = category;
            }

            servicesPayload[trimmed] = serviceData;
        }

        return {
            grooming: {
                services: servicesPayload,
            },
        };
    };

    const handleSave = async () => {
        if (!businessId) return;

        setIsSaving(true);
        setNotice('');

        try {
            const payload = groomingPricingPayloadFromFields();

            await setDoc(
                doc(db, 'businesses', businessId, 'settings', 'groomingPricing'),
                payload,
                { merge: false }
            );

            setNotice(t('noticeSaveSuccess'));
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

            <div className="space-y-4 border rounded-lg p-4 bg-white">
                {groomingPricingItems.map((item, row) => {
                    const itemNameTrimmed = item.trim();

                    return (
                        <div key={`grooming-item-${row}`} className="space-y-2">
                            <div className="flex gap-2">
                                <input
                                    value={item}
                                    placeholder={t('serviceNamePlaceholder')}
                                    onChange={(e) => {
                                        const updated = [...groomingPricingItems];
                                        updated[row] = e.target.value.slice(0, 80);
                                        setGroomingPricingItems(updated);
                                    }}
                                    className="flex-1 border px-3 py-2 rounded text-sm"
                                />

                                {groomingPricingItems.length > 1 && (
                                    <button
                                        type="button"
                                        onClick={() => {
                                            const removedName = groomingPricingItems[row];
                                            setGroomingPricingItems((prev) => prev.filter((_, i) => i !== row));
                                            setGroomingServicePrices((prev) => {
                                                const copy = { ...prev };
                                                delete copy[removedName];
                                                return copy;
                                            });
                                            setGroomingServiceCategories((prev) => {
                                                const copy = { ...prev };
                                                delete copy[removedName];
                                                return copy;
                                            });
                                        }}
                                        className="text-red-600 font-bold text-lg"
                                    >
                                        &times;
                                    </button>
                                )}
                            </div>

                            {itemNameTrimmed !== '' && (
                                <>
                                    <input
                                        value={groomingServicePrices[itemNameTrimmed] || ''}
                                        placeholder={t('pricePlaceholder', { name: itemNameTrimmed })}
                                        onChange={(e) =>
                                            setGroomingServicePrices((prev) => ({
                                                ...prev,
                                                [itemNameTrimmed]: e.target.value,
                                            }))
                                        }
                                        className="w-full border px-3 py-2 rounded text-sm"
                                        inputMode="decimal"
                                    />

                                    <select
                                        value={groomingServiceCategories[itemNameTrimmed] || ''}
                                        onChange={(e) =>
                                            setGroomingServiceCategories((prev) => {
                                                const updated = { ...prev };
                                                if (e.target.value === '') {
                                                    delete updated[itemNameTrimmed];
                                                } else {
                                                    updated[itemNameTrimmed] = e.target.value;
                                                }
                                                return updated;
                                            })
                                        }
                                        className="w-full border px-3 py-2 rounded text-sm"
                                    >
                                        <option value="">{t('categoryNone')}</option>
                                        <option value="bath">{t('categoryBath')}</option>
                                    </select>
                                </>
                            )}
                        </div>
                    );
                })}

                <button
                    type="button"
                    onClick={() => setGroomingPricingItems((prev) => [...prev, ''])}
                    className="text-sm text-green-700 underline"
                >
                    {t('addServiceButton')}
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
