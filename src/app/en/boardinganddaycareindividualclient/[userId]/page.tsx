'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import {
    getFirestore,
    doc,
    getDoc,
    collection,
    getDocs,
    query,
    where,
    setDoc,
    Timestamp,
    getDocFromServer,
} from 'firebase/firestore';

import {
    getStorage,
    ref,
    listAll,
    getDownloadURL,
} from 'firebase/storage';
import { initializeApp, getApps, getApp } from 'firebase/app';
import { useLocale } from 'next-intl';

// ✅ Firebase initialization
const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY!,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN!,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID!,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET!,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID!,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID!,
};
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

interface VaccineRecord {
    isVaccinated: boolean;
    date?: Date | null;
}

interface Pet {
    id: string;
    name: string;
    breed: string;
    age: string;
    ageUnit: string;
    weight: string;
    vaccinationRecords: Record<string, VaccineRecord>;
    fileCount: number;
    vetName: string;
    vetPhone: string;
    fecalTest: boolean;
    fecalTestExamDate?: string | null;
    fecalFileCount: number;
}


type TimestampLike = { seconds: number; nanoseconds?: number };

type VaccinationRaw = {
    isVaccinated?: boolean;
    date?: TimestampLike;
};

interface ClientData {
    firstName?: string;
    lastName?: string;
    email?: string;
    phoneNumber?: string;
    address?: {
        street?: string;
        city?: string;
        state?: string;
        zipCode?: string;
    };
    emergencyContact?: {
        firstName?: string;
        lastName?: string;
        phoneNumber?: string;
    };
    vetName?: string;
    vetPhone?: string;
}

export default function BoardingAndDaycareIndividualClientPage() {
    const locale = useLocale();
    const router = useRouter();
    const { userId } = useParams() as { userId: string };

    const [client, setClient] = useState<ClientData | null>(null);
    const [pets, setPets] = useState<Pet[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // --- Waiver state ---
    const [waiverRequired, setWaiverRequired] = useState(false);
    const [waiverSignedAt, setWaiverSignedAt] = useState<string | null>(null);
    const [waiverStatusError, setWaiverStatusError] = useState<string | null>(null);
    const [isLoadingWaiver, setIsLoadingWaiver] = useState(false);

    // ✅ Formatting + date helpers (web equivalent of iOS formatted() + DatePicker bindings)
    const formatDate = (d: Date) =>
        d.toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' });

    const toDateInputValue = (d: Date) => {
        const yyyy = d.getFullYear();
        const mm = String(d.getMonth() + 1).padStart(2, '0');
        const dd = String(d.getDate()).padStart(2, '0');
        return `${yyyy}-${mm}-${dd}`;
    };

    const fromDateInputValue = (value: string) => {
        const [y, m, d] = value.split('-').map(Number);
        return new Date(y, (m || 1) - 1, d || 1);
    };

    // ✅ Safe vaccine update (matches iOS: merge-map write; no dot-paths)
    const updateVaccine = async (
        petId: string,
        vaccine: string,
        isVaccinated: boolean,
        date: Date | null
    ) => {
        const petRef = doc(db, 'users', userId, 'pets', petId);

        const vaccineData: Record<string, unknown> = {
            isVaccinated,
            date: date ? Timestamp.fromDate(date) : null,
        };

        await setDoc(
            petRef,
            {
                vaccinationRecords: {
                    [vaccine]: vaccineData,
                },
            },
            { merge: true }
        );

        // ✅ Optional: server confirm (like iOS post-write server read)
        try {
            await getDocFromServer(petRef);
        } catch {
            // Non-fatal — keep UI responsive even if server read fails
        }
    };

    // ✅ Load client + pet data
    useEffect(() => {
        const auth = getAuth(app);
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            if (!user) {
                router.push(`/${locale}/loginsignup`);
                return;
            }

            try {
                setLoading(true);
                setError(null);

                // --- Load client basic info
                const clientRef = doc(db, 'users', userId);
                const clientSnap = await getDoc(clientRef);
                if (!clientSnap.exists()) {
                    setError('Client not found');
                    setLoading(false);
                    return;
                }
                const clientData = clientSnap.data();

                // ✅ Extract emergencyContact like iOS
                let vetName = 'Unknown';
                let vetPhone = 'Unknown';

                if (clientData.emergencyContact) {
                    const contact = clientData.emergencyContact;
                    const first = contact.firstName || '';
                    const last = contact.lastName || '';
                    vetName = [first, last].filter(Boolean).join(' ').trim() || 'Unknown';
                    vetPhone = contact.phoneNumber || 'Unknown';
                }

                // Store it alongside client
                setClient({
                    ...clientData,
                    vetName,
                    vetPhone
                });

                // --- Load pets
                const petsSnap = await getDocs(collection(db, 'users', userId, 'pets'));
                const petPromises = petsSnap.docs.map(async (petDoc) => {
                    const data = petDoc.data();
                    const id = petDoc.id;

                    // NEW — fecal test fields
                    const fecalTest = data.fecalTest === true;
                    let fecalTestExamDate: string | null = null;

                    if (data.fecalTestExamDate?.seconds) {
                        fecalTestExamDate = new Date(data.fecalTestExamDate.seconds * 1000).toLocaleDateString();
                    }

                    // Vaccination records (store raw Date so the business owner can edit + save)
                    const records = data.vaccinationRecords || {};
                    const vaccineRecords: Record<string, VaccineRecord> = {};
                    Object.entries(records as Record<string, VaccinationRaw>).forEach(([key, value]) => {
                        vaccineRecords[key] = {
                            isVaccinated: value.isVaccinated ?? false,
                            date: value.date?.seconds ? new Date(value.date.seconds * 1000) : null,
                        };
                    });

                    // --- Count vaccine files in Storage
                    const folderRef = ref(storage, `vaccineRecords/${userId}`);
                    const listResult = await listAll(folderRef);
                    const fileCount = listResult.items.filter((item) =>
                        item.name.startsWith(`${id}_`)
                    ).length;

                    // NEW — Count fecal test files in Storage
                    const fecalFolderRef = ref(storage, `fecalTests/${userId}`);
                    const fecalList = await listAll(fecalFolderRef);
                    const fecalFileCount = fecalList.items.filter((item) =>
                        item.name.startsWith(`${id}_`)
                    ).length;

                    return {
                        id,
                        name: data.petName || 'Unnamed Pet',
                        breed: data.breed || 'Unknown',
                        age: data.ageValue || '?',
                        ageUnit: data.ageUnit || 'Years',
                        weight: data.weight || '?',
                        vaccinationRecords: vaccineRecords,
                        fileCount,
                        vetName: data.veterinarian || 'Unknown',
                        vetPhone: data.veterinarianPhone || 'Unknown',

                        // NEW
                        fecalTest,
                        fecalTestExamDate,
                        fecalFileCount
                    };
                });

                const petsResolved = await Promise.all(petPromises);
                setPets(petsResolved);

                // --- Fetch waiver requirement and client waiver status ---
                setIsLoadingWaiver(true);
                setWaiverStatusError(null);
                setWaiverRequired(false);
                setWaiverSignedAt(null);

                try {
                    // 1️⃣ Resolve businessId for the current owner
                    const bizSnap = await getDocs(
                        query(collection(db, 'businesses'), where('ownerId', '==', user.uid))
                    );
                    const businessDoc = bizSnap.docs[0];
                    const businessId = businessDoc?.id;

                    if (businessId) {
                        // ✅ Fetch waiverRequired directly from /businesses/{businessId}
                        const businessDocRef = doc(db, 'businesses', businessId);
                        const businessSnap = await getDoc(businessDocRef);
                        const businessData = businessSnap.exists() ? businessSnap.data() : {};
                        const required = businessData.waiverRequired === true;
                        setWaiverRequired(required);

                        if (required) {
                            // 3️⃣ Check waiver status for this client
                            const clientRef = doc(db, 'userApprovedBusinesses', businessId, 'clients', userId);
                            const clientSnap = await getDoc(clientRef);

                            if (clientSnap.exists()) {
                                const cdata = clientSnap.data();
                                if (cdata.waiverSignedAt) {
                                    const ts = cdata.waiverSignedAt;
                                    const date = ts.seconds
                                        ? new Date(ts.seconds * 1000).toLocaleDateString()
                                        : null;
                                    setWaiverSignedAt(date);
                                }
                            } else {
                                // 4️⃣ Fallback: check joinRequests
                                const joinSnap = await getDocs(
                                    query(
                                        collection(db, 'joinRequests'),
                                        where('businessId', '==', businessId),
                                        where('userId', '==', userId)
                                    )
                                );
                                if (!joinSnap.empty) {
                                    const joinData = joinSnap.docs[0].data();
                                    if (joinData.waiverSignedAt) {
                                        const ts = joinData.waiverSignedAt;
                                        const date = ts.seconds
                                            ? new Date(ts.seconds * 1000).toLocaleDateString()
                                            : null;
                                        setWaiverSignedAt(date);
                                    }
                                }
                            }
                        }
                    }
                } catch (waiverErr) {
                    console.error('❌ Waiver fetch error:', waiverErr);
                    setWaiverStatusError('Failed to load waiver info');
                } finally {
                    setIsLoadingWaiver(false);
                }
            } catch (err) {
                console.error('❌ Error loading client:', err);
                setError('Error loading client data');
            } finally {
                setLoading(false);
            }
        });

        return () => unsubscribe();
    }, [userId, locale, router]);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[color:var(--color-background)] text-[color:var(--color-foreground)]">
                <p>Loading client details...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center text-red-600">
                <p>{error}</p>
                <button
                    onClick={() => router.back()}
                    className="mt-4 text-blue-600 underline"
                >
                    Go Back
                </button>
            </div>
        );
    }

    if (!client) return null;

    return (
        <div className="min-h-screen bg-[color:var(--color-background)] text-[color:var(--color-foreground)] px-4 py-8">
            <div className="max-w-2xl mx-auto space-y-6">
                <button
                    onClick={() => router.back()}
                    className="text-sm text-blue-600 underline hover:opacity-80"
                >
                    ← Back to Clients
                </button>

                <h1 className="text-3xl font-bold text-[color:var(--color-accent)]">
                    {client.firstName || ''} {client.lastName || ''}
                </h1>

                <div className="space-y-1 text-sm">
                    <p>📧 Email: {client.email || 'N/A'}</p>
                    {client.phoneNumber ? (
                        <p>
                            📞 <a href={`tel:${client.phoneNumber}`} className="text-blue-600 underline hover:opacity-80">
                                {client.phoneNumber}
                            </a>
                        </p>
                    ) : (
                        <p>📞 N/A</p>
                    )}
                    <p>📍 Address: {client.address?.street || ''}, {client.address?.city || ''} {client.address?.state || ''} {client.address?.zipCode || ''}</p>
                </div>

                {/* ✅ Client Notes */}
                <button
                    onClick={() => {
                        router.push(`/${locale}/boardinganddaycareindividualclientnotes/${userId}`);
                    }}
                    className="mt-3 w-full bg-green-700 text-white font-semibold py-2 rounded hover:opacity-90"
                >
                    Client Notes
                </button>

                {/* --- Waiver Section (shows before Veterinary Contact) --- */}
                {waiverRequired && (
                    <div className="bg-white border border-gray-200 rounded-md p-4 text-black">
                        <h2 className="font-semibold text-lg mb-2">📝 Waiver</h2>

                        {isLoadingWaiver ? (
                            <p className="text-sm text-gray-500">Checking waiver status...</p>
                        ) : waiverStatusError ? (
                            <p className="text-sm text-red-600">❌ {waiverStatusError}</p>
                        ) : waiverSignedAt ? (
                            <p className="text-sm text-green-600 font-semibold">
                                ✅ Signed on {waiverSignedAt}
                            </p>
                        ) : (
                            <p className="text-sm text-red-600 font-semibold">⚠️ Not signed</p>
                        )}
                    </div>
                )}

                <hr className="border-t border-gray-300" />

                {/* Vet contact */}
                <div>
                    <h2 className="font-semibold text-lg mb-2">🏥 Veterinary Contact</h2>

                    {client.vetName && client.vetPhone ? (
                        <div className="mb-3 text-sm">
                            <p><strong>{client.vetName}</strong></p>
                            {client.vetPhone ? (
                                <p>
                                    📞 <a href={`tel:${client.vetPhone}`} className="text-blue-600 underline hover:opacity-80">
                                        {client.vetPhone}
                                    </a>
                                </p>
                            ) : (
                                <p>📞 N/A</p>
                            )}
                        </div>
                    ) : (
                        <p className="text-gray-500 text-sm mb-3">No veterinary contact on file.</p>
                    )}

                    {/* Per-pet veterinary info */}
                    {pets.length > 0 ? (
                        pets.map((p) => (
                            <div key={p.id} className="border rounded-md p-4 mb-4 bg-white text-black">
                                <h3 className="font-bold text-lg mb-1">🐶 {p.name}</h3>
                                <p>Breed: {p.breed}</p>
                                <p>Age: {p.age} {p.ageUnit}</p>
                                <p>Weight: {p.weight} lbs</p>
                                <p>Vet: {p.vetName}</p>
                                <p>Vet Phone: {p.vetPhone}</p>

                                <hr className="my-3" />

                                {/* Vaccine records (editable like iOS: toggle + expiration date) */}
                                {Object.entries(p.vaccinationRecords).map(([vaccine, record]) => (
                                    <div key={`${p.id}-${vaccine}`} className="text-sm mb-3">
                                        <label className="flex items-center gap-2">
                                            <input
                                                type="checkbox"
                                                checked={record.isVaccinated}
                                                onChange={async (e) => {
                                                    const next = e.target.checked;

                                                    // Optimistically update UI
                                                    setPets((prev) =>
                                                        prev.map((pp) => {
                                                            if (pp.id !== p.id) return pp;
                                                            return {
                                                                ...pp,
                                                                vaccinationRecords: {
                                                                    ...pp.vaccinationRecords,
                                                                    [vaccine]: {
                                                                        isVaccinated: next,
                                                                        date: next ? (pp.vaccinationRecords[vaccine]?.date ?? new Date()) : null,
                                                                    },
                                                                },
                                                            };
                                                        })
                                                    );

                                                    // Persist using safe merge-map write
                                                    await updateVaccine(
                                                        p.id,
                                                        vaccine,
                                                        next,
                                                        next ? (record.date ?? new Date()) : null
                                                    );
                                                }}
                                            />
                                            <span className="font-semibold text-[color:var(--color-accent)]">💉 {vaccine}</span>
                                        </label>

                                        {record.isVaccinated && (
                                            <div className="mt-2 ml-6 space-y-1">
                                                {record.date && (
                                                    <p className="text-xs text-gray-500">
                                                        📅 Expires: {formatDate(record.date)}
                                                    </p>
                                                )}

                                                <label className="block text-xs text-gray-600">Expiration Date</label>
                                                <input
                                                    type="date"
                                                    value={record.date ? toDateInputValue(record.date) : ''}
                                                    onChange={async (e) => {
                                                        const newDate = e.target.value ? fromDateInputValue(e.target.value) : null;

                                                        // Optimistically update UI
                                                        setPets((prev) =>
                                                            prev.map((pp) => {
                                                                if (pp.id !== p.id) return pp;
                                                                return {
                                                                    ...pp,
                                                                    vaccinationRecords: {
                                                                        ...pp.vaccinationRecords,
                                                                        [vaccine]: {
                                                                            isVaccinated: true,
                                                                            date: newDate,
                                                                        },
                                                                    },
                                                                };
                                                            })
                                                        );

                                                        // Persist
                                                        await updateVaccine(p.id, vaccine, true, newDate);
                                                    }}
                                                    className="border rounded px-2 py-1 text-sm"
                                                />
                                            </div>
                                        )}
                                    </div>
                                ))}

                                <hr className="my-3" />

                                {/* Vaccine file section */}
                                {p.fileCount > 0 ? (
                                    <div className="space-y-2">
                                        {Array.from({ length: p.fileCount }, (_, i) => (
                                            <button
                                                key={i}
                                                onClick={async () => {
                                                    const extensions = ['pdf', 'jpg', 'jpeg', 'png', 'heic'];
                                                    let found = false;

                                                    for (const ext of extensions) {
                                                        const path = `vaccineRecords/${userId}/${p.id}_${i + 1}.${ext}`;
                                                        try {
                                                            const url = await getDownloadURL(ref(storage, path));
                                                            window.open(url, '_blank');
                                                            found = true;
                                                            break;
                                                        } catch { }
                                                    }

                                                    if (!found) {
                                                        alert('No accessible vaccine file found for this entry.');
                                                    }
                                                }}
                                                className="text-blue-600 underline text-base font-semibold hover:opacity-80"
                                            >
                                                View Vaccine File {i + 1}
                                            </button>
                                        ))}
                                    </div>
                                ) : (
                                    <p className="text-red-600 font-bold text-sm">
                                        No vaccine files uploaded
                                    </p>
                                )}

                                <button
                                    onClick={() => {
                                        router.push(`/${locale}/boardinganddaycareuploadvaccinefile/${userId}/${p.id}`);
                                    }}
                                    className="mt-3 w-full bg-green-700 text-white font-semibold py-2 rounded hover:opacity-90"
                                >
                                    {p.fileCount > 0 ? 'Upload or Replace Vaccine File' : 'Upload Vaccine File'}
                                </button>

                                <hr className="my-3" />

                                {/* NEW — Fecal Test Info */}
                                <div className="text-sm mb-2">
                                    <span className={`font-semibold ${p.fecalTest ? 'text-green-600' : 'text-red-600'}`}>
                                        🧪 Fecal Test: {p.fecalTest ? 'Yes' : 'No'}
                                    </span>

                                    {p.fecalTestExamDate && (
                                        <p className="text-xs text-gray-500 ml-5">
                                            📅 Exam Date: {p.fecalTestExamDate}
                                        </p>
                                    )}
                                </div>

                                {/* NEW — Fecal File Section */}
                                {p.fecalFileCount > 0 ? (
                                    <div className="space-y-2">
                                        {Array.from({ length: p.fecalFileCount }, (_, i) => (
                                            <button
                                                key={i}
                                                onClick={async () => {
                                                    const extensions = ['pdf', 'jpg', 'jpeg', 'png', 'heic'];
                                                    let found = false;

                                                    for (const ext of extensions) {
                                                        const path = `fecalTests/${userId}/${p.id}_${i + 1}.${ext}`;
                                                        try {
                                                            const url = await getDownloadURL(ref(storage, path));
                                                            window.open(url, '_blank');
                                                            found = true;
                                                            break;
                                                        } catch { }
                                                    }

                                                    if (!found) alert('No accessible fecal file found for this entry.');
                                                }}
                                                className="text-blue-600 underline text-base font-semibold hover:opacity-80"
                                            >
                                                View Fecal File {i + 1}
                                            </button>
                                        ))}
                                    </div>
                                ) : (
                                    <p className="text-red-600 font-bold text-sm">No fecal test files uploaded</p>
                                )}

                                <button
                                    onClick={() => {
                                        router.push(`/${locale}/boardinganddaycareuploadfecalfile/${userId}/${p.id}`);
                                    }}
                                    className="mt-2 w-full bg-green-700 text-white font-semibold py-2 rounded hover:opacity-90"
                                >
                                    {p.fecalFileCount > 0 ? 'Upload or Replace Fecal Test File' : 'Upload Fecal Test File'}
                                </button>

                            </div>
                        ))
                    ) : (
                        <p>No pets found for this client.</p>
                    )}
                </div>
            </div>
        </div>
    );
}
