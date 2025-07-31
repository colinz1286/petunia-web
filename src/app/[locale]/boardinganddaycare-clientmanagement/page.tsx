'use client';

import { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import {
    getFirestore,
    collection,
    getDocs,
    query,
    where
} from 'firebase/firestore';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';
import { useRouter } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY!,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN!,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID!,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET!,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID!,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID!,
};

initializeApp(firebaseConfig);

interface ClientPet {
    id: string;
    name: string;
    vaccineDisplay: { name: string; value: string; style: 'gray' | 'red' | 'yellow' }[];
    fileURL1?: string;
    fileURL2?: string;
}

interface ApprovedClient {
    id: string;
    userId: string;
    userName: string;
    userEmail: string;
    joinedAt: string;
    waiverSigned: boolean;
    userFirstName: string;
    userLastName: string;
    pets: ClientPet[];
}

export default function ClientManagementPage() {
    const t = useTranslations('boardingAndDaycareClientManagement');
    const locale = useLocale();
    const router = useRouter();

    const [clients, setClients] = useState<ApprovedClient[]>([]);
    const [search, setSearch] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const findFirstFile = async (userId: string, petId: string, suffix: '_1' | '_2') => {
        const extensions = ['jpg', 'jpeg', 'png', 'pdf', 'heic'];
        const storage = getStorage();
        for (const ext of extensions) {
            try {
                const url = await getDownloadURL(
                    ref(storage, `vaccineRecords/${userId}/${petId}${suffix}.${ext}`)
                );
                return url;
            } catch {
                // try next extension
            }
        }
        return undefined;
    };

    useEffect(() => {
        const auth = getAuth();
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            if (!user) {
                router.push(`/${locale}/loginsignup`);
                return;
            }

            try {
                const db = getFirestore();

                const bizSnap = await getDocs(
                    query(collection(db, 'businesses'), where('ownerId', '==', user.uid))
                );

                if (bizSnap.empty) {
                    setError(t('no_business_found'));
                    setLoading(false);
                    return;
                }

                const businessId = bizSnap.docs[0].id;

                const joinSnap = await getDocs(
                    query(
                        collection(db, 'joinRequests'),
                        where('status', '==', 'approved'),
                        where('businessId', '==', businessId)
                    )
                );

                const clientPromises = joinSnap.docs.map(async (doc) => {
                    const data = doc.data();
                    const userId = data.userId ?? '';
                    const userName = data.userName ?? 'Unknown';
                    const userEmail = data.userEmail ?? 'Unknown';
                    const joinedAt = data.timestamp?.toDate?.().toLocaleDateString() ?? '';
                    const waiverSigned = true;
                    const userFirstName = data.userFirstName ?? '';
                    const userLastName = data.userLastName ?? '';

                    const client: ApprovedClient = {
                        id: doc.id,
                        userId,
                        userName,
                        userEmail,
                        joinedAt,
                        waiverSigned,
                        userFirstName,
                        userLastName,
                        pets: []
                    };

                    try {
                        const petsSnap = await getDocs(
                            collection(db, 'users', userId, 'pets')
                        );

                        const petPromises = petsSnap.docs.map(async (petDoc) => {
                            const petData = petDoc.data();
                            const name = petData.petName ?? t('unnamed_pet');
                            const records = petData.vaccinationRecords ?? {};

                            const requiredVaccines = ['Rabies', 'Bordetella', 'DAPP (or DHPP/DA2PP)', 'Canine Influenza'];
                            const vaccineDisplay: { name: string; value: string; style: 'gray' | 'red' | 'yellow' }[] =
                                requiredVaccines.map((vaccine) => {
                                    const rec = records[vaccine];
                                    if (!rec || !rec.date || !rec.date.seconds) {
                                        return { name: vaccine, value: 'No information entered', style: 'yellow' };
                                    }

                                    const expDate = new Date(rec.date.seconds * 1000);
                                    const formatted = expDate.toLocaleDateString();
                                    const isExpired = expDate.getTime() < Date.now();

                                    return {
                                        name: vaccine,
                                        value: `Expiration: ${formatted}`,
                                        style: isExpired ? 'red' : 'gray'
                                    };
                                });

                            const fileURL1 = await findFirstFile(userId, petDoc.id, '_1');
                            const fileURL2 = await findFirstFile(userId, petDoc.id, '_2');

                            return {
                                id: petDoc.id,
                                name,
                                vaccineDisplay,
                                fileURL1,
                                fileURL2
                            } as ClientPet;
                        });

                        client.pets = (await Promise.all(petPromises)).sort((a, b) =>
                            a.name.localeCompare(b.name)
                        );
                    } catch (err) {
                        console.warn(`⚠️ Failed to load pets for ${userId}:`, err);
                    }

                    return client;
                });

                const loadedClients = await Promise.all(clientPromises);

                loadedClients.sort((a, b) => {
                    const aLast = a.userLastName || a.userName.split(' ').slice(-1).join(' ');
                    const bLast = b.userLastName || b.userName.split(' ').slice(-1).join(' ');
                    return aLast.localeCompare(bLast);
                });

                setClients(loadedClients);
            } catch (err) {
                console.error('❌ Error fetching clients:', err);
                setError(t('error_loading_business'));
            } finally {
                setLoading(false);
            }
        });

        return () => unsubscribe();
    }, [locale, router, t]);

    const filteredClients = clients.filter((c) =>
        c.userName.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="min-h-screen bg-[color:var(--color-background)] text-[color:var(--color-foreground)] px-4 py-6">
            <div className="w-full max-w-md mx-auto space-y-6 px-2 sm:px-4">
                <button
                    onClick={() => router.push(`/${locale}/boardinganddaycaredashboard`)}
                    className="text-sm text-[color:var(--color-accent)] underline hover:opacity-90"
                >
                    ← {t('back_to_dashboard')}
                </button>

                <h1 className="text-3xl font-bold text-[color:var(--color-accent)] text-center">
                    {t('client_management_title')}
                </h1>

                <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder={t('search_clients_placeholder')}
                    className="w-full px-4 py-2 border border-gray-300 rounded text-black text-sm"
                />

                {loading ? (
                    <p className="text-center text-sm text-gray-500">
                        {t('loading_clients_label')}
                    </p>
                ) : error ? (
                    <p className="text-red-500 text-center text-sm">{error}</p>
                ) : filteredClients.length === 0 ? (
                    <p className="text-center text-gray-500 text-sm">
                        {t('no_clients_found')}
                    </p>
                ) : (
                    filteredClients.map((client) => (
                        <div
                            key={client.id}
                            className="bg-white border rounded shadow-sm p-4 space-y-3"
                        >
                            {/* Client Header */}
                            <div className="flex justify-between items-center text-base font-semibold text-[color:var(--color-foreground)]">
                                <span>
                                    {client.userLastName && client.userFirstName
                                        ? `${client.userLastName}, ${client.userFirstName}`
                                        : (() => {
                                            const parts = client.userName.trim().split(' ');
                                            const first = parts.slice(0, -1).join(' ');
                                            const last = parts.slice(-1).join('');
                                            return `${last}, ${first}`;
                                        })()}
                                </span>
                                <span
                                    className={client.waiverSigned ? 'text-green-600' : 'text-red-600'}
                                >
                                    {client.waiverSigned ? '✅' : '❌'}
                                </span>
                            </div>

                            {/* Contact Info */}
                            <div className="text-sm text-gray-700">{client.userEmail}</div>
                            <div className="text-xs text-gray-500">
                                {t('client_joined_label', { date: client.joinedAt })}
                            </div>

                            {/* Pet List */}
                            {client.pets.map((pet) => (
                                <div
                                    key={pet.id}
                                    className="bg-gray-50 border rounded p-3 space-y-2 mt-2"
                                >
                                    <div className="font-medium text-sm">{pet.name}</div>

                                    {/* Vaccine Status List */}
                                    {pet.vaccineDisplay?.map((vax, i) => (
                                        <div key={i} className="text-xs text-gray-700">
                                            <strong>{vax.name}:</strong>{' '}
                                            <span
                                                className={
                                                    vax.style === 'red'
                                                        ? 'text-red-600 font-semibold'
                                                        : vax.style === 'yellow'
                                                            ? 'text-yellow-500 font-semibold'
                                                            : ''
                                                }
                                            >
                                                {vax.value}
                                            </span>
                                        </div>
                                    ))}

                                    {/* Vaccine File Links */}
                                    {pet.fileURL1 && (
                                        <a
                                            href={pet.fileURL1}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="block text-xs text-blue-600 underline"
                                        >
                                            {t('view_file_1')}
                                        </a>
                                    )}
                                    {pet.fileURL2 && (
                                        <a
                                            href={pet.fileURL2}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="block text-xs text-blue-600 underline"
                                        >
                                            {t('view_file_2')}
                                        </a>
                                    )}
                                    {!pet.fileURL1 && !pet.fileURL2 && (
                                        <div className="text-red-600 font-semibold text-xs">
                                            No vaccine images uploaded
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}
