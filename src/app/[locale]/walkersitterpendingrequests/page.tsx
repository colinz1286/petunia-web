'use client';

import { useEffect, useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
  doc,
  updateDoc,
  setDoc,
  DocumentData,
  Timestamp,
} from 'firebase/firestore';
import { initializeApp, getApps } from 'firebase/app';
import Link from 'next/link';

// ✅ Firebase init safeguard
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

interface JoinRequest {
  id: string;
  userId: string;
  userName: string;
  userEmail: string;
  businessId: string;
}

export default function WalkerSitterPendingRequestsPage() {
  const t = useTranslations('walkerSitterPendingRequests');
  const locale = useLocale();

  const [requests, setRequests] = useState<JoinRequest[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (user) => {
      if (!user) {
        setLoading(false);
        setError(t('not_authenticated'));
        return;
      }

      try {
        // Find walker/sitter business
        const col = collection(db, 'businesses');
        const r1 = await getDocs(query(col, where('ownerIds', 'array-contains', user.uid)));
        const d =
          !r1.empty ? r1.docs[0] : (await getDocs(query(col, where('ownerId', '==', user.uid)))).docs[0];

        if (!d) {
          setError(t('no_business_found'));
          setLoading(false);
          return;
        }

        const bizId = d.id;
        const reqCol = collection(db, 'joinRequests');
        const snapshot = await getDocs(
          query(reqCol, where('businessId', '==', bizId), where('status', '==', 'pending'))
        );

        const mapped: JoinRequest[] = snapshot.docs.map((docSnap) => {
          const data = docSnap.data() as DocumentData;
          return {
            id: docSnap.id,
            userId: data.userId ?? '',
            userName: data.userName ?? t('unknown_user'),
            userEmail: data.userEmail ?? t('unknown_user'),
            businessId: data.businessId ?? bizId,
          };
        });

        setRequests(mapped);
      } catch (err) {
        console.error(err);
        setError(t('error_loading'));
      } finally {
        setLoading(false);
      }
    });

    return () => unsub();
  }, [t]);

  const respondToRequest = async (request: JoinRequest, approved: boolean) => {
    try {
      const joinRef = doc(db, 'joinRequests', request.id);
      await updateDoc(joinRef, { status: approved ? 'approved' : 'declined' });

      if (approved) {
        const clientRef = doc(db, 'userApprovedBusinesses', request.businessId, 'clients', request.userId);
        await setDoc(clientRef, {
          userId: request.userId,
          userEmail: request.userEmail,
          userName: request.userName,
          joinedAt: new Date().toDateString(),
          waiverSigned: false,
        });
      }

      const notifRef = doc(db, 'users', request.userId, 'notifications', crypto.randomUUID());
      await setDoc(notifRef, {
        type: 'joinRequestResponse',
        message: approved ? t('notification_approved') : t('notification_declined'),
        timestamp: Timestamp.now(),
        businessId: request.businessId,
      });

      setRequests((prev) => prev.filter((r) => r.id !== request.id));
    } catch (err) {
      console.error('❌ Failed to respond to request:', err);
      setError(t('error_processing'));
    }
  };

  return (
    <main className="min-h-screen bg-[#f6efe4] text-[#2c4a30] px-4 py-10">
      <div className="max-w-2xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold text-center">{t('pending_requests_title')}</h1>

        {loading && <p className="text-center">{t('loading_requests')}</p>}
        {error && <p className="text-center text-red-600">{error}</p>}
        {!loading && !error && requests.length === 0 && (
          <p className="text-center text-gray-600">{t('no_pending_requests')}</p>
        )}

        <div className="space-y-4">
          {requests.map((r) => (
            <div key={r.id} className="p-4 bg-white rounded shadow space-y-2">
              <p className="font-semibold">{r.userName}</p>
              <p className="text-sm text-gray-600">{r.userEmail}</p>

              <div className="flex space-x-4">
                <button
                  onClick={() => respondToRequest(r, true)}
                  className="flex-1 py-2 bg-green-600 text-white rounded"
                >
                  {t('approve_button')}
                </button>
                <button
                  onClick={() => respondToRequest(r, false)}
                  className="flex-1 py-2 bg-red-600 text-white rounded"
                >
                  {t('decline_button')}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="pt-6 text-center">
          <Link href={`/${locale}/walkersitterdashboard`} className="underline">
            {t('back_button')}
          </Link>
        </div>
      </div>
    </main>
  );
}
