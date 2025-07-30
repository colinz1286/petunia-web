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

interface ClientPet {
    id: string;
    name: string;
    vaccinesCurrent: boolean;
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

    useEffect(() => {
        const auth = getAuth();
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            if (!user) {
                router.push(`/${locale}/loginsignup`);
                return;
            }

            try {
                const db = getFirestore();
                const snap = await getDocs(
                    query(collection(db, 'businesses'), where('ownerIds', 'array-contains', user.uid))
                );

                if (snap.empty) {
                    setError(t('no_business_found'));
                    setLoading(false);
                    return;
                }

                const bizId = snap.docs[0].id;

                const clientsRef = collection(db, 'userApprovedBusinesses', bizId, 'clients');
                const clientsSnap = await getDocs(clientsRef);
                const storage = getStorage();
                const db2 = getFirestore();

                const result: ApprovedClient[] = [];

                for (const docSnap of clientsSnap.docs) {
                    const data = docSnap.data();
                    const client: ApprovedClient = {
                        id: docSnap.id,
                        userId: data.userId ?? '',
                        userName: data.userName ?? 'Unknown',
                        userEmail: data.userEmail ?? 'Unknown',
                        joinedAt: data.joinedAt ?? '',
                        waiverSigned: data.waiverSigned ?? false,
                        userFirstName: data.userFirstName ?? '',
                        userLastName: data.userLastName ?? '',
                        pets: []
                    };

                    const petsSnap = await getDocs(
                        collection(db2, 'users', client.userId, 'pets')
                    );

                    const pets: ClientPet[] = [];

                    for (const petDoc of petsSnap.docs) {
                        const petData = petDoc.data();
                        const name = petData.petName ?? t('unnamed_pet');
                        const records = petData.vaccinationRecords ?? {};
                        const vaccinesCurrent = ['Rabies', 'Bordetella', 'DAPP (or DHPP/DA2PP)', 'Canine Influenza'].every((vaccine: string) => {
                            const rec = records[vaccine];
                            if (!rec) return false;
                            return rec.isVaccinated && rec.date?.seconds * 1000 > Date.now();
                        });

                        const pet: ClientPet = {
                            id: petDoc.id,
                            name,
                            vaccinesCurrent
                        };

                        const extensions = ['jpg', 'jpeg', 'png', 'pdf'];
                        for (const ext of extensions) {
                            try {
                                const url1 = await getDownloadURL(ref(storage, `vaccineRecords/${client.userId}/${pet.id}_1.${ext}`));
                                pet.fileURL1 = url1;
                                break;
                            } catch { }
                        }

                        for (const ext of extensions) {
                            try {
                                const url2 = await getDownloadURL(ref(storage, `vaccineRecords/${client.userId}/${pet.id}_2.${ext}`));
                                pet.fileURL2 = url2;
                                break;
                            } catch { }
                        }

                        pets.push(pet);
                    }

                    client.pets = pets.sort((a, b) => a.name.localeCompare(b.name));
                    result.push(client);
                }

                result.sort((a, b) => a.userLastName.localeCompare(b.userLastName));
                setClients(result);
            } catch (err) {
                console.error('Error loading business:', err);
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
            <div className="max-w-4xl mx-auto space-y-6">

                <button
                    onClick={() => router.push(`/${locale}/boardinganddaycaredashboard`)}
                    className="text-sm text-[color:var(--color-accent)] underline hover:opacity-90"
                >
                    ← {t('back_to_dashboard')}
                </button>

                <h1 className="text-3xl font-bold text-center">
                    {t('client_management_title')}
                </h1>

                <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder={t('search_clients_placeholder')}
                    className="w-full px-4 py-2 border border-gray-300 rounded text-black"
                />

                {loading ? (
                    <p className="text-center text-sm text-gray-500">
                        {t('loading_clients_label')}
                    </p>
                ) : error ? (
                    <p className="text-red-500 text-center">{error}</p>
                ) : filteredClients.length === 0 ? (
                    <p className="text-center text-gray-500">{t('no_clients_found')}</p>
                ) : (
                    filteredClients.map((client) => (
                        <div
                            key={client.id}
                            className="bg-white shadow rounded p-4 space-y-2"
                        >
                            <div className="flex justify-between items-center font-semibold text-lg text-[color:var(--color-foreground)]">
                                <span>{client.userName}</span>
                                <span className={client.waiverSigned ? 'text-green-600' : 'text-red-600'}>
                                    {client.waiverSigned ? '✅' : '❌'}
                                </span>
                            </div>

                            <div className="text-sm text-gray-600">{client.userEmail}</div>
                            <div className="text-xs text-gray-500">
                                {t('client_joined_label', { date: client.joinedAt })}
                            </div>

                            {client.pets.map((pet) => (
                                <div
                                    key={pet.id}
                                    className="bg-gray-50 border rounded p-3 mt-2 space-y-1"
                                >
                                    <div className="flex justify-between">
                                        <span className="font-medium">{pet.name}</span>
                                        <span
                                            className={
                                                pet.vaccinesCurrent ? 'text-green-600' : 'text-red-600'
                                            }
                                        >
                                            {pet.vaccinesCurrent
                                                ? t('vaccines_current')
                                                : t('vaccines_not_current')}
                                        </span>
                                    </div>

                                    {pet.fileURL1 && (
                                        <a
                                            href={pet.fileURL1}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-xs text-blue-600 underline block"
                                        >
                                            {t('view_file_1')}
                                        </a>
                                    )}

                                    {pet.fileURL2 && (
                                        <a
                                            href={pet.fileURL2}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-xs text-blue-600 underline block"
                                        >
                                            {t('view_file_2')}
                                        </a>
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
