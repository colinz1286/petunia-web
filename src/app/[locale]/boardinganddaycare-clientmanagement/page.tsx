'use client';

import { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
  doc,
  getDoc,
  Timestamp,
  type DocumentData,
  type Firestore,
} from 'firebase/firestore';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';
import { useRouter } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';
import { initializeApp, getApps, getApp } from 'firebase/app';

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
  waiverSignedAt?: string | null;
  userFirstName: string;
  userLastName: string;
  pets: ClientPet[];
}

type WaiverResult = { signed: boolean; when: string | null };

function formatWaiverDate(value: unknown): string | null {
  if (value instanceof Timestamp) {
    return new Intl.DateTimeFormat(undefined, { dateStyle: 'medium', timeStyle: 'short' }).format(
      value.toDate()
    );
  }
  if (typeof value === 'string' && value.trim()) return value.trim();
  return null;
}

function interpretWaiverDoc(d?: DocumentData): WaiverResult {
  if (!d) return { signed: false, when: null };
  const truthy = [
    'confirmedByClient',
    'agreed',
    'accepted',
    'waiverSigned',
    'signed',
    'confirmed',
    'isSigned',
  ] as const;
  const signed = truthy.some((k) => d[k] === true);
  const when = formatWaiverDate(d['signedAt']) ?? formatWaiverDate(d['timestamp']) ?? null;
  return { signed: signed || !!when, when };
}

async function resolveWaiverStatus(fdb: Firestore, businessId: string, userId: string): Promise<WaiverResult> {
  try {
    const s1 = await getDoc(doc(fdb, 'waiverConfirmations', `${businessId}_${userId}`));
    if (s1.exists()) {
      const r = interpretWaiverDoc(s1.data());
      if (r.signed) return r;
    }
  } catch {}
  try {
    const s2 = await getDoc(doc(fdb, 'waiverConfirmations', `${userId}_${businessId}`));
    if (s2.exists()) {
      const r = interpretWaiverDoc(s2.data());
      if (r.signed) return r;
    }
  } catch {}
  try {
    const q3 = query(
      collection(fdb, 'waiverConfirmations'),
      where('businessId', '==', businessId),
      where('userId', '==', userId)
    );
    const r3 = await getDocs(q3);
    if (!r3.empty) {
      const r = interpretWaiverDoc(r3.docs[0].data());
      if (r.signed) return r;
    }
  } catch {
    try {
      const q3b = query(collection(fdb, 'waiverConfirmations'), where('userId', '==', userId));
      const r3b = await getDocs(q3b);
      const hit = r3b.docs.find((d) => (d.data().businessId as string) === businessId);
      if (hit) {
        const r = interpretWaiverDoc(hit.data());
        if (r.signed) return r;
      }
    } catch {}
  }
  try {
    const s4 = await getDoc(doc(fdb, 'users', userId, 'waiverConfirmations', businessId));
    if (s4.exists()) {
      const r = interpretWaiverDoc(s4.data());
      if (r.signed) return r;
    }
  } catch {}
  try {
    const s5 = await getDoc(doc(fdb, 'businesses', businessId, 'waiverConfirmations', userId));
    if (s5.exists()) {
      const r = interpretWaiverDoc(s5.data());
      if (r.signed) return r;
    }
  } catch {}
  try {
    const s6 = await getDoc(doc(fdb, 'users', userId, 'waiverAgreements', businessId));
    if (s6.exists()) {
      const r = interpretWaiverDoc(s6.data());
      if (r.signed) return r;
    }
  } catch {}
  return { signed: false, when: null };
}

async function resolveBusinessIdForOwner(uid: string): Promise<string | null> {
  try {
    const r1 = await getDocs(query(collection(db, 'businesses'), where('ownerId', '==', uid)));
    if (!r1.empty) return r1.docs[0].id;
  } catch {}
  try {
    const r2 = await getDocs(
      query(collection(db, 'businesses'), where('ownerIds', 'array-contains', uid))
    );
    if (!r2.empty) return r2.docs[0].id;
  } catch {}
  return null;
}

export default function ClientManagementPage() {
  const t = useTranslations('boardingAndDaycareClientManagement'); // ✅ single top-level hook
  const locale = useLocale();
  const router = useRouter();

  const [clients, setClients] = useState<ApprovedClient[]>([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const findFirstFile = async (userId: string, petId: string, suffix: '_1' | '_2') => {
    const extensions = ['jpg', 'jpeg', 'png', 'pdf', 'heic'];
    const storage = getStorage(app);
    for (const ext of extensions) {
      try {
        const url = await getDownloadURL(ref(storage, `vaccineRecords/${userId}/${petId}${suffix}.${ext}`));
        return url;
      } catch {}
    }
    return undefined;
  };

  useEffect(() => {
    const auth = getAuth(app);
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (!user) {
        router.push(`/${locale}/loginsignup`);
        return;
      }

      setLoading(true);
      setError(null);

      try {
        const businessId = await resolveBusinessIdForOwner(user.uid);
        if (!businessId) {
          setError(t('no_business_found'));
          setLoading(false);
          return;
        }

        const joinSnap = await getDocs(
          query(
            collection(db, 'joinRequests'),
            where('status', '==', 'approved'),
            where('businessId', '==', businessId)
          )
        );

        const clientPromises = joinSnap.docs.map(async (docSnap) => {
          const data = docSnap.data();
          const userId = (data.userId as string) ?? '';
          const userName = (data.userName as string) ?? 'Unknown';
          const userEmail = (data.userEmail as string) ?? 'Unknown';
          const joinedAt = data.timestamp?.toDate?.()?.toLocaleDateString?.() ?? '';

          const wr = await resolveWaiverStatus(db, businessId, userId);

          const client: ApprovedClient = {
            id: docSnap.id,
            userId,
            userName,
            userEmail,
            joinedAt,
            waiverSigned: wr.signed,
            waiverSignedAt: wr.when,
            userFirstName: (data.userFirstName as string) ?? '',
            userLastName: (data.userLastName as string) ?? '',
            pets: [],
          };

          try {
            const petsSnap = await getDocs(collection(db, 'users', userId, 'pets'));
            const petPromises = petsSnap.docs.map(async (petDoc) => {
              const petData = petDoc.data();
              const name = (petData.petName as string) ?? t('unnamed_pet');
              const records = (petData.vaccinationRecords as Record<string, { date?: Timestamp | { seconds?: number } }>) ?? {};

              const requiredVaccines = ['Rabies', 'Bordetella', 'DAPP (or DHPP/DA2PP)', 'Canine Influenza'];
              const vaccineDisplay: { name: string; value: string; style: 'gray' | 'red' | 'yellow' }[] =
                requiredVaccines.map((vaccine) => {
                  const rec = records[vaccine];
                  if (!rec || !rec.date || !rec.date.seconds) {
                    return { name: vaccine, value: t('no_information_entered'), style: 'yellow' };
                  }
                  const expDate = new Date(rec.date.seconds * 1000);
                  const formatted = expDate.toLocaleDateString();
                  const isExpired = expDate.getTime() < Date.now();
                  return { name: vaccine, value: `${t('expiration_prefix')} ${formatted}`, style: isExpired ? 'red' : 'gray' };
                });

              const fileURL1 = await findFirstFile(userId, petDoc.id, '_1');
              const fileURL2 = await findFirstFile(userId, petDoc.id, '_2');

              return { id: petDoc.id, name, vaccineDisplay, fileURL1, fileURL2 } as ClientPet;
            });

            client.pets = (await Promise.all(petPromises)).sort((a, b) => a.name.localeCompare(b.name));
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
          <p className="text-center text-sm text-gray-500">{t('loading_clients_label')}</p>
        ) : error ? (
          <p className="text-red-500 text-center text-sm">{error}</p>
        ) : filteredClients.length === 0 ? (
          <p className="text-center text-gray-500 text-sm">{t('no_clients_found')}</p>
        ) : (
          filteredClients.map((client) => (
            <div key={client.id} className="bg-white border rounded shadow-sm p-4 space-y-3">
              {/* Client Header */}
              <div className="flex justify-between items-start text-base font-semibold text-[color:var(--color-foreground)]">
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
                <span className={client.waiverSigned ? 'text-green-600' : 'text-red-600'}>
                  {client.waiverSigned ? '✅' : '❌'}
                </span>
              </div>

              {/* Contact Info */}
              <div className="text-sm text-gray-700">{client.userEmail}</div>
              <div className="text-xs text-gray-500">
                {t('client_joined_label', { date: client.joinedAt })}
              </div>

              {/* Explicit waiver status (mirrors iOS) */}
              <div className="text-xs mt-1">
                <span className="font-semibold text-gray-900">Waiver: </span>
                {client.waiverSigned ? (
                  <>
                    <span className="font-semibold text-green-600">Signed</span>
                    {client.waiverSignedAt && <span className="text-gray-600"> {' • '}{client.waiverSignedAt}</span>}
                  </>
                ) : (
                  <span className="font-semibold text-red-600">Not Signed</span>
                )}
              </div>

              {/* Pet List */}
              {client.pets.map((pet) => (
                <div key={pet.id} className="bg-gray-50 border rounded p-3 space-y-2 mt-2">
                  <div className="font-medium text-sm">{pet.name}</div>

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
                    <div className="text-red-600 font-semibold text-xs">No vaccine images uploaded</div>
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
