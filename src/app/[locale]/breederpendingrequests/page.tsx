'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';

import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged, User } from 'firebase/auth';
import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
  getDoc,
  setDoc,
  updateDoc,
  doc,
  Timestamp,
  QuerySnapshot,
  DocumentData,
} from 'firebase/firestore';

// --- Firebase bootstrap -------------------------------------------------------
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY!,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN!,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID!,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET!,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID!,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID!,
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// --- Types -------------------------------------------------------------------
interface JoinRequest {
  id: string;
  userId: string;
  userName: string;
  userEmail: string;
  businessId: string;
}
type Action = 'approve' | 'decline' | null;

// --- Page --------------------------------------------------------------------
export default function BreederPendingRequestsPage() {
  const t = useTranslations('breederPendingRequests');
  const locale = useLocale();
  const router = useRouter();

  // UI state
  const [pendingRequests, setPendingRequests] = useState<JoinRequest[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Modal
  const [selectedRequest, setSelectedRequest] = useState<JoinRequest | null>(null);
  const [action, setAction] = useState<Action>(null);

  const backHref = useMemo(() => `/${locale}/breederdashboard`, [locale]);

  // --- Helpers ---------------------------------------------------------------
  const formatDateString = useCallback(() => new Date().toLocaleDateString(), []);

  const chooseBreederBusinessFromSnapshot = (
    snap: QuerySnapshot<DocumentData>
  ): string | null => {
    const docs = snap.docs;
    const breeder = docs.find((d) => (d.data()?.businessType as string) === 'Breeder');
    return breeder?.id ?? null;
  };

  const findBreederBusinessId = useCallback(async (uid: string): Promise<string | null> => {
    // Prefer new model: ownerIds contains uid
    try {
      const q1 = query(collection(db, 'businesses'), where('ownerIds', 'array-contains', uid));
      const r1 = await getDocs(q1);
      const found1 = chooseBreederBusinessFromSnapshot(r1);
      if (found1) return found1;
    } catch {
      // ignore and fall back
    }

    // Legacy fallback: ownerId == uid
    try {
      const q2 = query(collection(db, 'businesses'), where('ownerId', '==', uid));
      const r2 = await getDocs(q2);
      const found2 = chooseBreederBusinessFromSnapshot(r2);
      if (found2) return found2;
    } catch {
      // ignore
    }

    return null;
  }, []);

  const loadPendingRequests = useCallback(
    async (businessId: string) => {
      setIsLoading(true);
      setError(null);
      try {
        const qReq = query(
          collection(db, 'joinRequests'),
          where('businessId', '==', businessId),
          where('status', '==', 'pending')
        );
        const snap = await getDocs(qReq);
        const list: JoinRequest[] = snap.docs.map((d) => {
          const data = d.data();
          return {
            id: d.id,
            userId: (data.userId as string) ?? '',
            userName: (data.userName as string) ?? t('unknown_user_name'),
            userEmail: (data.userEmail as string) ?? t('unknown_user_email'),
            businessId: (data.businessId as string) ?? '',
          };
        });
        setPendingRequests(list);
      } catch {
        setError(t('error_loading_requests_generic'));
      } finally {
        setIsLoading(false);
      }
    },
    [t]
  );

  // --- Auth/bootstrap --------------------------------------------------------
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user: User | null) => {
      if (!user) {
        router.push(`/${locale}/loginsignup`);
        return;
      }
      void (async () => {
        const id = await findBreederBusinessId(user.uid);
        if (!id) {
          setError(t('error_no_business_found'));
          setIsLoading(false);
          return;
        }
        await loadPendingRequests(id);
      })();
    });
    return () => unsub();
  }, [findBreederBusinessId, loadPendingRequests, locale, router, t]);

  // --- Actions ---------------------------------------------------------------
  const respondToRequest = useCallback(
    async (request: JoinRequest, approved: boolean) => {
      try {
        // 1) Update the join request status
        await updateDoc(doc(db, 'joinRequests', request.id), {
          status: approved ? 'approved' : 'declined',
        });

        // 2) If approved, write client record under userApprovedBusinesses/{businessId}/clients/{userId}
        if (approved) {
          const userRef = doc(db, 'users', request.userId);
          const userSnap = await getDoc(userRef);
          const userData = userSnap.data() ?? {};
          const first = ((userData.firstName as string) || '').trim();
          const last = ((userData.lastName as string) || '').trim();
          const fullName = `${first} ${last}`.trim();

          const clientRef = doc(
            db,
            'userApprovedBusinesses',
            request.businessId,
            'clients',
            request.userId
          );
          await setDoc(clientRef, {
            userId: request.userId,
            userEmail: request.userEmail,
            userName: fullName || request.userName,
            userFirstName: first,
            userLastName: last,
            joinedAt: formatDateString(),
            waiverSigned: false,
          });
        }

        // 3) Notify the user
        const notifRef = doc(
          db,
          'users',
          request.userId,
          'notifications',
          crypto.randomUUID()
        );
        await setDoc(notifRef, {
          type: 'joinRequestResponse',
          message: approved ? t('notification_approved') : t('notification_declined'),
          timestamp: Timestamp.now(),
          businessId: request.businessId,
        });

        // 4) Remove from local list
        setPendingRequests((prev) => prev.filter((r) => r.id !== request.id));
      } catch {
        setError(t('error_action_failed'));
      }
    },
    [formatDateString, t]
  );

  // --- Render ----------------------------------------------------------------
  return (
    <div className="min-h-screen bg-[color:var(--color-background)] text-[color:var(--color-foreground)] px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <button
          onClick={() => router.push(backHref)}
          className="mb-6 text-sm text-[color:var(--color-accent)] underline hover:opacity-90"
        >
          ← {t('back_to_dashboard')}
        </button>

        <h1 className="text-3xl font-bold text-center mb-6">
          {t('pending_requests_title')}
        </h1>

        {isLoading ? (
          <p className="text-center">{t('loading')}</p>
        ) : error ? (
          <p className="text-center text-red-600 whitespace-pre-wrap">{error}</p>
        ) : pendingRequests.length === 0 ? (
          <p className="text-center text-gray-500">{t('no_pending_requests')}</p>
        ) : (
          <div className="space-y-6">
            {pendingRequests.map((req) => (
              <div key={req.id} className="bg-white border shadow rounded p-4 space-y-3">
                <div className="font-bold text-lg">{req.userName}</div>
                <div className="text-sm text-gray-600">{req.userEmail}</div>
                <div className="flex gap-4 mt-4">
                  <button
                    className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2 rounded"
                    onClick={() => {
                      setSelectedRequest(req);
                      setAction('approve');
                    }}
                  >
                    {t('approve_button')}
                  </button>
                  <button
                    className="flex-1 bg-red-600 hover:bg-red-700 text-white py-2 rounded"
                    onClick={() => {
                      setSelectedRequest(req);
                      setAction('decline');
                    }}
                  >
                    {t('decline_button')}
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Confirmation modal */}
        {selectedRequest && action && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded shadow-md max-w-md w-full">
              <h2 className="text-xl font-semibold mb-4">
                {action === 'approve'
                  ? t('approve_request_title')
                  : t('decline_request_title')}
              </h2>
              <p className="mb-6">
                {action === 'approve'
                  ? t('approve_request_message')
                  : t('decline_request_message')}
              </p>
              <div className="flex justify-end gap-4">
                <button
                  className="px-4 py-2 bg-gray-200 rounded"
                  onClick={() => {
                    setSelectedRequest(null);
                    setAction(null);
                  }}
                >
                  {t('no_button')}
                </button>
                <button
                  className="px-4 py-2 bg-blue-600 text-white rounded"
                  onClick={async () => {
                    if (selectedRequest && action) {
                      await respondToRequest(selectedRequest, action === 'approve');
                      setSelectedRequest(null);
                      setAction(null);
                    }
                  }}
                >
                  {t('yes_button')}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
