'use client';

import React, { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';

import { getAuth, onAuthStateChanged } from 'firebase/auth';
import {
    getFirestore,
    collection,
    getDocs,
    query,
    where,
} from 'firebase/firestore';
import { initializeApp, getApps } from 'firebase/app';

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY!,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN!,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID!,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET!,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID!,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID!,
};

if (!getApps().length) initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

export default function BoardingAndDaycareAddDogsClientListPage() {
    const router = useRouter();
    const locale = useLocale();
    const t = useTranslations('boardingAndDaycareAddDogClientList');

    const [businessId, setBusinessId] = useState<string>('');
    const [clients, setClients] = useState<
        { id: string; userId: string; fullName: string }[]
    >([]);
    const [clientSearch, setClientSearch] = useState('');
    const [loading, setLoading] = useState(true);
    const [errorMsg, setErrorMsg] = useState<string | null>(null);

    const visibleClients = useMemo(() => {
        const query = clientSearch.trim().toLowerCase();
        if (!query) return clients;
        return clients.filter((client) => client.fullName.toLowerCase().includes(query));
    }, [clients, clientSearch]);

    /** ----------------------------------------------------
     * Step 1 — Resolve businessId
     * ----------------------------------------------------*/
    useEffect(() => {
        const unsub = onAuthStateChanged(auth, async (user) => {
            if (!user) {
                router.push(`/${locale}/loginsignup`);
                return;
            }

            try {
                const q = query(
                    collection(db, 'businesses'),
                    where('ownerId', '==', user.uid)
                );
                const snap = await getDocs(q);
                const doc = snap.docs[0];

                if (!doc) {
                    setErrorMsg(t('error_business_not_found'));
                    setLoading(false);
                    return;
                }

                setBusinessId(doc.id);
            } catch (err) {
                console.error('Failed to resolve business:', err);
                setErrorMsg(t('error_loading_business'));
            }
        });

        return () => unsub();
    }, [router, locale, t]);

    /** ----------------------------------------------------
     * Step 2 — Load approved clients
     * ----------------------------------------------------*/
    useEffect(() => {
        if (!businessId) return;

        async function loadClients() {
            try {
                const snap = await getDocs(
                    collection(db, 'userApprovedBusinesses', businessId, 'clients')
                );

                const list = snap.docs
                    .map((doc) => {
                        const data = doc.data();
                        const first = data.userFirstName?.trim() || '';
                        const last = data.userLastName?.trim() || '';
                        const fullName = `${last}, ${first}`.trim().replace(/^,|,$/g, '');

                        return {
                            id: doc.id,
                            userId: data.userId || '',
                            fullName,
                        };
                    })
                    .filter((c) => c.fullName !== '' && c.userId !== '');

                setClients(list.sort((a, b) => a.fullName.localeCompare(b.fullName)));
            } catch (err) {
                console.error('Failed to load clients:', err);
                setErrorMsg(t('error_loading_clients'));
            } finally {
                setLoading(false);
            }
        }

        loadClients();
    }, [businessId, t]);

    /** ----------------------------------------------------
     * Step 3 — UI
     * ----------------------------------------------------*/
    if (loading) {
        return (
            <div className="p-6">
                <p>{t('loading_clients_label')}</p>
            </div>
        );
    }

    if (errorMsg) {
        return (
            <div className="p-6 text-red-600">
                <p>❌ {errorMsg}</p>
            </div>
        );
    }

    return (
        <div className="p-6 max-w-xl mx-auto">
            <h1 className="text-3xl font-bold mb-6 text-center">
                {t('select_client_title')}
            </h1>

            <div className="mb-4">
                <label htmlFor="client-search" className="block text-sm font-medium mb-1">
                    Search client
                </label>
                <input
                    id="client-search"
                    type="text"
                    value={clientSearch}
                    onChange={(e) => setClientSearch(e.target.value)}
                    placeholder="Type a client name..."
                    autoComplete="off"
                    className="w-full border rounded-lg px-3 py-2 text-sm"
                />
            </div>

            {clients.length === 0 && (
                <p className="text-gray-600 text-center">
                    {t('no_clients_found')}
                </p>
            )}

            {clients.length > 0 && visibleClients.length === 0 && (
                <p className="text-gray-600 text-center mb-4">
                    No matching clients.
                </p>
            )}

            <div className="space-y-4">
                {visibleClients.map((client) => (
                    <div
                        key={client.id}
                        className="p-4 bg-white border rounded-xl shadow-sm"
                    >
                        <p className="font-semibold mb-2">{client.fullName}</p>

                        <button
                            onClick={() =>
                                router.push(
                                    `/${locale}/boardinganddaycareadddogclientdogs?clientId=${client.userId}&ownerName=${encodeURIComponent(client.fullName)}`
                                )
                            }
                            className="w-full bg-green-700 text-white py-2 rounded-lg text-sm"
                        >
                            {t('view_dogs_button')}
                        </button>
                    </div>
                ))}
            </div>

            <div className="mt-6 flex justify-center">
                <button
                    onClick={() => router.back()}
                    className="px-4 py-2 bg-gray-300 rounded-md"
                >
                    {t('back_button')}
                </button>
            </div>
        </div>
    );
}
