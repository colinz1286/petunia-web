'use client';

import { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import {
  getFirestore,
  collection,
  doc,
  getDocs,
  query,
  where,
  writeBatch,
  serverTimestamp,
} from 'firebase/firestore';

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

interface SimpleClient {
  id: string;
  userId: string;
  userFirstName: string;
  userLastName: string;
  userEmail: string;
}

async function resolveBusinessIdForOwner(uid: string): Promise<string | null> {
  try {
    const r1 = await getDocs(query(collection(db, 'businesses'), where('ownerId', '==', uid)));
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

export default function ClientManagementPage() {
  const t = useTranslations('boardingAndDaycareClientManagement');
  const locale = useLocale();
  const router = useRouter();

  const [clients, setClients] = useState<SimpleClient[]>([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [businessId, setBusinessId] = useState<string>('');

  const [showRemoveModal, setShowRemoveModal] = useState(false);
  const [isRemoving, setIsRemoving] = useState(false);
  const [removeError, setRemoveError] = useState<string | null>(null);

  const [reloadTick, setReloadTick] = useState(0);
  const [selectedClient, setSelectedClient] = useState<SimpleClient | null>(null);

  // ✅ Refresh list when user returns to this tab/page (e.g., after removing a client)
  useEffect(() => {
    const onFocus = () => setReloadTick((v) => v + 1);
    window.addEventListener('focus', onFocus);
    return () => window.removeEventListener('focus', onFocus);
  }, []);

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
        const resolvedBusinessId = await resolveBusinessIdForOwner(user.uid);
        if (!resolvedBusinessId) {
          setError(t('no_business_found'));
          setLoading(false);
          return;
        }

        setBusinessId(resolvedBusinessId);

        // ✅ Load only lightweight client info (fast)
        const snapshot = await getDocs(
          collection(db, 'userApprovedBusinesses', resolvedBusinessId, 'clients')
        );

        // Build and filter valid clients
        const clientList: SimpleClient[] = snapshot.docs
          .map((doc) => {
            const data = doc.data();
            const first = (data.userFirstName as string) ?? '';
            const last = (data.userLastName as string) ?? '';
            const email = (data.userEmail as string) ?? '';

            // Skip records with no name and no email
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

        setClients(clientList)

      } catch (err) {
        console.error('❌ Error loading clients:', err);
        setError(t('error_loading_business'));
      } finally {
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, [locale, router, t, reloadTick]);

  const filteredClients = clients.filter(
    (c) =>
      c.userFirstName.toLowerCase().includes(search.toLowerCase()) ||
      c.userLastName.toLowerCase().includes(search.toLowerCase()) ||
      c.userEmail.toLowerCase().includes(search.toLowerCase())
  );

  async function removeClientFromApprovedList(_mode: 'remove' | 'delete') {
  void _mode;

    // mode exists to mirror iOS UI choices.
    // Under your current Firestore rules, business owners should NOT delete joinRequests.
    // So both modes perform:
    // - mark joinRequests as removed
    // - delete /userApprovedBusinesses/{businessId}/clients/{clientUserId}

    if (!selectedClient) {
      setRemoveError('No client selected.');
      return;
    }
    if (!businessId) {
      setRemoveError('Business not found.');
      return;
    }

    setIsRemoving(true);
    setRemoveError(null);

    try {
      const batch = writeBatch(db);

      // 1) Mark joinRequests as removed (owner update is allowed by your current rules)
      const jrSnap = await getDocs(
        query(
          collection(db, 'joinRequests'),
          where('businessId', '==', businessId),
          where('userId', '==', selectedClient.userId)
        )
      );

      jrSnap.docs.forEach((d) => {
        batch.set(
          d.ref,
          {
            status: 'removed',
            removedAt: serverTimestamp(),
            removedBy: 'businessOwnerWeb',
          },
          { merge: true }
        );
      });

      // 2) Remove the approved client doc (drives this list)
      const clientRef = doc(db, 'userApprovedBusinesses', businessId, 'clients', selectedClient.userId);
      batch.delete(clientRef);

      await batch.commit();

      // Close modal + clear selection
      setShowRemoveModal(false);
      setSelectedClient(null);

      // Force refresh immediately (no need to wait for focus)
      setReloadTick((v) => v + 1);
    } catch (e) {
      console.error('❌ removeClientFromApprovedList failed:', e);
      setRemoveError('Failed to remove client. Please try again.');
    } finally {
      setIsRemoving(false);
    }
  }

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
            <div key={client.id} className="bg-white border rounded shadow-sm p-4 space-y-2">
              {/* Client Info */}
              <div className="flex flex-col space-y-1">
                <span className="font-semibold text-lg text-[color:var(--color-foreground)]">
                  {client.userLastName && client.userFirstName
                    ? `${client.userLastName}, ${client.userFirstName}`
                    : client.userFirstName || client.userLastName || 'Unknown'}
                </span>

                {/* Email as clickable link */}
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
                  router.push(`/${locale}/boardinganddaycareindividualclient/${client.userId}`)
                }
                className="w-full mt-2 bg-green-500 text-white text-sm font-semibold py-2 rounded hover:bg-green-600 transition"
              >
                View More Info
              </button>

              {/* ✅ Remove Client button */}
              <button
                type="button"
                onClick={() => {
                  setSelectedClient(client);
                  setRemoveError(null);
                  setShowRemoveModal(true);
                }}
                className="w-full mt-2 bg-red-600 text-white text-sm font-semibold py-2 rounded hover:bg-red-700 transition"
              >
                Remove Client
              </button>
            </div>
          ))
        )}
      </div>

      {/* ✅ Remove Client Modal */}
      {showRemoveModal ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
          <div className="w-full max-w-md rounded bg-white p-5 space-y-4">
            <h3 className="text-lg font-bold text-black">
              Remove Client?
            </h3>

            <p className="text-sm text-gray-700">
              Choose how you want to remove this client:
              <br />
              • Remove from Approved List keeps history (recommended).
              <br />
              • Delete Relationship uses the same safe behavior under current rules.
            </p>

            {removeError ? (
              <p className="text-sm text-red-600">{removeError}</p>
            ) : null}

            <div className="space-y-2">
              <button
                type="button"
                disabled={isRemoving}
                onClick={() => removeClientFromApprovedList('remove')}
                className="w-full bg-red-600 text-white font-semibold py-2 rounded hover:bg-red-700 disabled:opacity-60"
              >
                {isRemoving ? 'Removing…' : 'Remove from Approved List'}
              </button>

              <button
                type="button"
                disabled={isRemoving}
                onClick={() => removeClientFromApprovedList('delete')}
                className="w-full bg-red-600 text-white font-semibold py-2 rounded hover:bg-red-700 disabled:opacity-60"
              >
                {isRemoving ? 'Removing…' : 'Delete Relationship Entirely'}
              </button>

              <button
                type="button"
                disabled={isRemoving}
                onClick={() => {
                  setShowRemoveModal(false);
                  setSelectedClient(null);
                  setRemoveError(null);
                }}
                className="w-full border border-gray-300 text-gray-800 font-semibold py-2 rounded hover:bg-gray-50 disabled:opacity-60"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
