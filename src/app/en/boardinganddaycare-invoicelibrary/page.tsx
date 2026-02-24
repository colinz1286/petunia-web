'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useTranslations, useLocale } from 'next-intl';
import {
    doc,
    onSnapshot,
    setDoc,
    getFirestore,
    getDocs,
    query,
    collection,
    where,
    updateDoc,
    deleteField
} from 'firebase/firestore';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { app } from '@/lib/firebaseClient';

type InvoiceItem = {
    id: string;
    name: string;
    priceCents: number;
    category: string;
    serviceContext?: string; // NEW (optional)
    active: boolean;
};

export default function BoardingAndDaycareInvoiceLibraryPage() {
    const router = useRouter();
    const _locale = useLocale(); // eslint-disable-line @typescript-eslint/no-unused-vars
    const t = useTranslations('boardingAndDaycareInvoiceLibrary');

    const db = getFirestore(app);
    const auth = getAuth(app);

    const [loading, setLoading] = useState(true);
    const [businessId, setBusinessId] = useState<string | null>(null);
    const [items, setItems] = useState<InvoiceItem[]>([]);
    const [showEditor, setShowEditor] = useState(false);
    const [editingItem, setEditingItem] = useState<InvoiceItem | null>(null);

    // Resolve businessId (ownerId OR ownerIds model)
    async function resolveBusinessIdForOwner(uid: string): Promise<string | null> {
        try {
            const r1 = await getDocs(
                query(collection(db, 'businesses'), where('ownerId', '==', uid))
            );
            if (!r1.empty) return r1.docs[0].id;
        } catch { }

        try {
            const r2 = await getDocs(
                query(collection(db, 'businesses'), where('ownerIds', 'array-contains', uid))
            );
            if (!r2.empty) return r2.docs[0].id;
        } catch { }

        return null;
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            if (!user) {
                setLoading(false);
                return;
            }

            try {
                const resolvedBusinessId = await resolveBusinessIdForOwner(user.uid);

                if (!resolvedBusinessId) {
                    setLoading(false);
                    return;
                }

                setBusinessId(resolvedBusinessId);
            } catch (e) {
                console.error('❌ Failed resolving businessId', e);
                setLoading(false);
            }
        });

        return () => unsubscribe();
    }, [auth]);

    // Snapshot listener
    useEffect(() => {
        if (!businessId) return;

        const ref = doc(
            db,
            'businesses',
            businessId,
            'settings',
            'invoiceItemLibrary'
        );

        const unsubscribe = onSnapshot(
            ref,
            { includeMetadataChanges: true },
            (snap) => {

                if (!snap.exists()) {
                    setItems([]);
                    setLoading(false);
                    return;
                }

                const data = snap.data() ?? {};

                if (!data.items || typeof data.items !== 'object') {
                    setItems([]);
                    setLoading(false);
                    return;
                }

                const itemsMap = data.items as Record<string, unknown>;

                const hydrated: InvoiceItem[] = [];

                for (const [id, raw] of Object.entries(itemsMap)) {

                    if (!raw || typeof raw !== 'object') continue;

                    const value = raw as {
                        name?: unknown;
                        priceCents?: unknown;
                        category?: unknown;
                        serviceContext?: unknown; // NEW
                        active?: unknown;
                    };

                    hydrated.push({
                        id,
                        name: typeof value.name === 'string' ? value.name : 'Unnamed',
                        priceCents: typeof value.priceCents === 'number' ? value.priceCents : 0,
                        category: typeof value.category === 'string' ? value.category : 'uncategorized',
                        serviceContext: typeof value.serviceContext === 'string'
                            ? value.serviceContext
                            : 'none',
                        active: typeof value.active === 'boolean' ? value.active : true
                    });
                }

                const categoryOrder: Record<string, number> = {
                    'add-on': 0,
                    'addon': 0,
                    'boarding': 1,
                    'daycare': 2,
                    'grooming': 3,
                    'training': 4,
                    'retail': 5
                };

                hydrated.sort((a, b) => {
                    const aRank = categoryOrder[a.category.toLowerCase()] ?? Number.MAX_SAFE_INTEGER;
                    const bRank = categoryOrder[b.category.toLowerCase()] ?? Number.MAX_SAFE_INTEGER;

                    if (aRank !== bRank) {
                        return aRank - bRank;
                    }

                    return a.name.toLowerCase().localeCompare(b.name.toLowerCase());
                });

                setItems(hydrated);
                setLoading(false);
            }
        );

        return () => unsubscribe();
    }, [businessId, db]);

    const saveItem = async (
        name: string,
        price: string,
        category: string,
        serviceContext: string,
        active: boolean
    ) => {
        if (!businessId) return;

        const priceDouble = parseFloat(price);
        if (isNaN(priceDouble)) return;

        const priceCents = Math.round(priceDouble * 100);
        const id = editingItem?.id ?? crypto.randomUUID();

        // 🔥 Use flexible typing to support deleteField()
        const payload: Record<string, unknown> = {
            name,
            priceCents,
            category,
            active,
            updatedAt: new Date()
        };

        // Properly handle serviceContext removal or update
        if (serviceContext === 'none') {
            payload.serviceContext = deleteField();
        } else {
            payload.serviceContext = serviceContext;
        }

        // Only set createdAt for new items
        if (!editingItem) {
            payload.createdAt = new Date();
        }

        try {
            await setDoc(
                doc(
                    db,
                    'businesses',
                    businessId,
                    'settings',
                    'invoiceItemLibrary'
                ),
                {
                    items: {
                        [id]: payload
                    }
                },
                { merge: true }
            );

            setShowEditor(false);
            setEditingItem(null);
        } catch (error) {
            console.error('❌ Failed saving invoice item:', error);
        }
    };

    const deleteItem = async (itemId: string) => {
        if (!businessId) return;

        try {
            await updateDoc(
                doc(
                    db,
                    'businesses',
                    businessId,
                    'settings',
                    'invoiceItemLibrary'
                ),
                {
                    [`items.${itemId}`]: deleteField()
                }
            );
        } catch (error) {
            console.error('❌ Failed deleting invoice item:', error);
        }
    };

    return (
        <div className="w-full max-w-md mx-auto px-4 py-8">
            <button
                onClick={() => router.back()}
                className="text-sm text-blue-600 underline mb-4"
                type="button"
            >
                ← {t('back_button')}
            </button>

            <h1 className="text-3xl font-bold text-[color:var(--color-accent)] mb-3 text-center">
                {t('page_title')}
            </h1>

            <p className="text-sm text-gray-600 text-center mb-6">
                {t('page_subtitle')}
            </p>

            {loading ? (
                <p className="text-center text-sm">{t('loading')}</p>
            ) : (
                <>
                    <div className="flex justify-end mb-4">
                        <button
                            onClick={() => {
                                setEditingItem(null);
                                setShowEditor(true);
                            }}
                            className="bg-[#1F4D2E] hover:bg-[#163A22] text-white font-semibold px-4 py-2 rounded-md shadow-md transition-colors duration-150"
                        >
                            + Add Item
                        </button>
                    </div>

                    {items.length === 0 ? (
                        <p className="text-center text-sm text-gray-500">
                            No invoice items yet.
                        </p>
                    ) : (
                        <div className="space-y-3">
                            {items.map((item) => (
                                <div
                                    key={item.id}
                                    className="w-full border rounded p-3 bg-gray-50"
                                >
                                    <div className="flex justify-between items-start">
                                        <button
                                            onClick={() => {
                                                setEditingItem(item);
                                                setShowEditor(true);
                                            }}
                                            className="text-left flex-1"
                                        >
                                            <div className="font-semibold">
                                                {item.name}
                                            </div>

                                            <div className="text-xs text-gray-500">
                                                {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                                            </div>

                                            {item.serviceContext &&
                                                item.serviceContext.toLowerCase() !== 'none' &&
                                                item.serviceContext.toLowerCase() !== 'universal' && (
                                                    <div className="text-xs text-[color:var(--color-accent)]">
                                                        {item.serviceContext.charAt(0).toUpperCase() + item.serviceContext.slice(1)}
                                                    </div>
                                                )}

                                            <div className="font-semibold mt-1">
                                                ${(item.priceCents / 100).toFixed(2)}
                                            </div>

                                            <div
                                                className={`text-xs ${item.active
                                                    ? 'text-green-600'
                                                    : 'text-gray-400'
                                                    }`}
                                            >
                                                {item.active ? 'Active' : 'Inactive'}
                                            </div>
                                        </button>

                                        <button
                                            onClick={() => deleteItem(item.id)}
                                            className="ml-3 text-red-600 text-xs font-semibold"
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </>
            )}

            {showEditor && (
                <InvoiceEditorModal
                    existing={editingItem}
                    onSave={saveItem}
                    onClose={() => setShowEditor(false)}
                />
            )}
        </div>
    );
}

function InvoiceEditorModal({
    existing,
    onSave,
    onClose
}: {
    existing: InvoiceItem | null;
    onSave: (
        name: string,
        price: string,
        category: string,
        serviceContext: string,
        active: boolean
    ) => void;
    onClose: () => void; // RESTORED
}) {
    const [name, setName] = useState(existing?.name ?? '');
    const [price, setPrice] = useState(
        existing ? (existing.priceCents / 100).toFixed(2) : ''
    );
    const [category, setCategory] = useState(
        existing?.category ?? 'daycare'
    );

    const [serviceContext, setServiceContext] = useState(() => {
        if (existing?.serviceContext &&
            existing.serviceContext.toLowerCase() !== 'universal') {
            return existing.serviceContext;
        }
        return 'none';
    });

    const [active, setActive] = useState(existing?.active ?? true);
    const [showContextInfo, setShowContextInfo] = useState(false);

    return (
        <div className="fixed inset-0 z-[9999] bg-black/50 flex items-center justify-center p-4">
            <div className="bg-white rounded w-full max-w-sm max-h-[90vh] border shadow-xl flex flex-col">
                {/* Scrollable content */}
                <div className="p-6 overflow-y-auto flex-1 space-y-4">
                    <h2 className="text-lg font-bold">
                        {existing ? 'Edit Item' : 'Add Item'}
                    </h2>

                    <input
                        className="w-full border p-2 rounded"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />

                    <input
                        className="w-full border p-2 rounded"
                        placeholder="Price (e.g. 25.00)"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    />

                    <select
                        className="w-full border p-2 rounded"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    >
                        <option value="daycare">Daycare</option>
                        <option value="boarding">Boarding</option>
                        <option value="grooming">Grooming</option>
                        <option value="training">Training</option>
                        <option value="addon">Add-on</option>
                        <option value="retail">Retail</option>
                    </select>

                    <div className="relative">
                        <div className="flex items-center justify-between mb-1">
                            <span className="text-sm font-medium">Service Context</span>

                            <button
                                type="button"
                                onClick={() => setShowContextInfo(prev => !prev)}
                                className="text-xs w-5 h-5 flex items-center justify-center rounded-full border border-gray-400 text-gray-600 hover:bg-gray-100"
                            >
                                i
                            </button>
                        </div>

                        <select
                            className="w-full border p-2 rounded"
                            value={serviceContext}
                            onChange={(e) => setServiceContext(e.target.value)}
                        >
                            <option value="none">None</option>
                            <option value="boarding">Boarding</option>
                            <option value="daycare">Daycare</option>
                            <option value="training">Training</option>
                        </select>

                        {showContextInfo && (
                            <div className="absolute z-50 mt-2 w-full bg-white border rounded shadow-lg p-3 text-xs text-gray-600">
                                Use Service Context when you offer the same service at different prices depending on the situation (e.g., Boarding vs Daycare). This allows intelligent invoicing to automatically select the correct pricing.
                            </div>
                        )}
                    </div>

                    <label className="flex items-center space-x-2">
                        <input
                            type="checkbox"
                            checked={active}
                            onChange={(e) => setActive(e.target.checked)}
                        />
                        <span>Active</span>
                    </label>
                </div>

                {/* Sticky footer (always visible) */}
                <div className="border-t px-6 py-4 flex justify-end gap-2 bg-white">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 border rounded"
                        type="button"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={() => onSave(name, price, category, serviceContext, active)}
                        className="px-4 py-2 bg-[#1F4D2E] hover:bg-[#163A22] text-white rounded font-semibold"
                        style={{ display: 'inline-block', minWidth: '90px' }}
                        type="button"
                    >
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
}