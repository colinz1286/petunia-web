'use client';

import { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
} from 'firebase/firestore';
import { useRouter } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';
import { initializeApp, getApps, getApp } from 'firebase/app';

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

// ✅ TypeScript interface for client
interface SimpleClient {
  id: string;
  userId: string;
  userFirstName: string;
  userLastName: string;
  userEmail: string;
}

// ✅ Resolve business ID (handles both ownerId and ownerIds)
async function resolveBusinessIdForOwner(uid: string): Promise<string | null> {
  try {
    const r1 = await getDocs(
      query(collection(db, 'businesses'), where('ownerIds', 'array-contains', uid))
    );
    if (!r1.empty) return r1.docs[0].id;
  } catch {}
  try {
    const r2 = await getDocs(
      query(collection(db, 'businesses'), where('ownerId', '==', uid))
    );
    if (!r2.empty) return r2.docs[0].id;
  } catch {}
  return null;
}

// ✅ Main component
export default function WalkerSitterClientsPage() {
  const t = useTranslations('walkerSitterClientManagement');
  const locale = useLocale();
  const router = useRouter();

  const [clients, setClients] = useState<SimpleClient[]>([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

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

        const snapshot = await getDocs(
          collection(db, 'userApprovedBusinesses', businessId, 'clients')
        );

        const clientList: SimpleClient[] = snapshot.docs
          .map((doc) => {
            const data = doc.data();
            const first = (data.userFirstName as string) ?? '';
            const last = (data.userLastName as string) ?? '';
            const email = (data.userEmail as string) ?? '';

            const hasValidName = first.trim() !== '' || last.trim() !== '';
            const hasValidEmail = email.trim() !== '' && email.toLowerCase() !== 'unknown';
            if (!hasValidName && !hasValidEmail) return null;

            return {
              id: doc.id,
              userId: (data.userId as string) ?? '',
              userFirstName: first,
              userLastName: last,
              userEmail: email || 'Unknown',
            };
          })
          .filter((c): c is SimpleClient => c !== null)
          .sort((a, b) => a.userLastName.localeCompare(b.userLastName));

        setClients(clientList);
      } catch (err) {
        console.error('❌ Error loading walker/sitter clients:', err);
        setError(t('error_loading_business'));
      } finally {
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, [locale, router, t]);

  // ✅ Search filter
  const filteredClients = clients.filter(
    (c) =>
      c.userFirstName.toLowerCase().includes(search.toLowerCase()) ||
      c.userLastName.toLowerCase().includes(search.toLowerCase()) ||
      c.userEmail.toLowerCase().includes(search.toLowerCase())
  );

  // ✅ UI Rendering
  return (
    <div className="min-h-screen bg-[color:var(--color-background)] text-[color:var(--color-foreground)] px-4 py-6">
      <div className="w-full max-w-md mx-auto space-y-6 px-2 sm:px-4">
        <button
          onClick={() => router.push(`/${locale}/walkersitterdashboard`)}
          className="text-sm text-[color:var(--color-accent)] underline hover:opacity-90"
        >
          ← {t('back_to_dashboard')}
        </button>

        <h1 className="text-3xl font-bold text-[color:var(--color-accent)] text-center">
          {t('clients_and_pets_title')}
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
            <div key={client.id} className="bg-white border rounded shadow-sm p-4 space-y-2">
              <div className="flex flex-col space-y-1">
                <span className="font-semibold text-lg text-[color:var(--color-foreground)]">
                  {client.userLastName && client.userFirstName
                    ? `${client.userLastName}, ${client.userFirstName}`
                    : client.userFirstName || client.userLastName || 'Unknown'}
                </span>

                {/* Clickable email */}
                <a
                  href={`mailto:${client.userEmail}`}
                  className="text-blue-600 text-sm underline break-words"
                >
                  {client.userEmail}
                </a>
              </div>

              {/* ✅ Green “View More Info” button */}
              <button
                onClick={() =>
                  router.push(`/${locale}/walkersitterindividualclient/${client.userId}`)
                }
                className="w-full mt-2 bg-green-500 text-white text-sm font-semibold py-2 rounded hover:bg-green-600 transition"
              >
                {t('view_more_info')}
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
