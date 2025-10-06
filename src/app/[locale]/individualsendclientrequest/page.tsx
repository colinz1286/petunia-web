'use client';

import { useEffect, useState, useCallback } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { useTranslations, useLocale } from 'next-intl';
import {
  getAuth,
  onAuthStateChanged
} from 'firebase/auth';
import {
  getFirestore,
  doc,
  getDoc,
  collection,
  query,
  where,
  getDocs,
  setDoc,
  Timestamp
} from 'firebase/firestore';
import { initializeApp } from 'firebase/app';

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

function getErrorMessage(err: unknown): string {
  return err instanceof Error ? err.message : 'Unknown error';
}

export default function IndividualSendClientRequestPage() {
  const t = useTranslations('individualSendClientRequest');
  const searchParams = useSearchParams();
  const router = useRouter();
  const locale = useLocale();

  const businessId = searchParams.get('businessId') ?? '';
  const businessName = searchParams.get('businessName') ?? '';

  const [userId, setUserId] = useState('');
  const [isApprovedClient, setIsApprovedClient] = useState(false);
  const [hasRequestedAlready, setHasRequestedAlready] = useState(false);
  const [isLoadingStatus, setIsLoadingStatus] = useState(true);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const [businessAddress, setBusinessAddress] = useState('');
  const [businessPhone, setBusinessPhone] = useState('');
  const [servicesOffered, setServicesOffered] = useState<string[]>([]);
  const [isLoadingBusinessInfo, setIsLoadingBusinessInfo] = useState(true);

  const [isSubmitting, setIsSubmitting] = useState(false);

  // === Waiver state ===
  const [waiverRequired, setWaiverRequired] = useState(false);
  const [waiverLastUpdated, setWaiverLastUpdated] = useState<Timestamp | null>(null);
  const [waiverSignedAt, setWaiverSignedAt] = useState<Date | null>(null);

  // === Breeder application state ===
  const [acceptsApplications, setAcceptsApplications] = useState(false);
  const [applicationQuestions, setApplicationQuestions] = useState<string[]>([]);

  const checkClientStatus = useCallback(async (uid: string) => {
    try {
      const clientDoc = await getDoc(doc(db, 'userApprovedBusinesses', businessId, 'clients', uid));
      if (clientDoc.exists()) {
        setIsApprovedClient(true);
        if (clientDoc.data()?.waiverSignedAt instanceof Timestamp) {
          setWaiverSignedAt((clientDoc.data()?.waiverSignedAt as Timestamp).toDate());
        }
        setIsLoadingStatus(false);
        return;
      }

      const q = query(
        collection(db, 'joinRequests'),
        where('businessId', '==', businessId),
        where('userId', '==', uid),
        where('status', '==', 'pending')
      );
      const snapshot = await getDocs(q);
      setHasRequestedAlready(!snapshot.empty);
    } catch (err: unknown) {
      setErrorMessage(t('must_be_logged_in') + ' ' + getErrorMessage(err));
    } finally {
      setIsLoadingStatus(false);
    }
  }, [businessId, t]);

  const fetchBusinessInfo = useCallback(async () => {
    try {
      const docSnap = await getDoc(doc(db, 'businesses', businessId));
      const data = docSnap.data();
      if (!data) return;

      const addr = data.businessAddress ?? {};
      const fullAddress = `${addr.street ?? ''}, ${addr.city ?? ''}, ${addr.state ?? ''} ${addr.zipCode ?? ''}`;
      setBusinessAddress(fullAddress);
      setBusinessPhone(data.businessPhone ?? '');

      const services: string[] = [];
      if (data.offersBoarding) services.push('Boarding');
      if (data.offersDaycare) services.push('Daycare');
      if (data.offersGrooming) services.push('Grooming');
      if (data.offersTraining) services.push('Training');
      setServicesOffered(services);

      // Waiver (boarding/daycare/grooming businesses)
      setWaiverRequired(data.waiverRequired ?? false);

      if (data.waiverRequired) {
        const waiverSnap = await getDoc(doc(db, 'businesses', businessId, 'settings', 'clientWaiver'));
        if (waiverSnap.exists()) {
          setWaiverLastUpdated(waiverSnap.data()?.lastUpdated ?? null);
        }
      }

      // Breeder application settings
      setAcceptsApplications(data.acceptsApplications ?? false);
      setApplicationQuestions(data.applicationQuestions ?? []);
    } finally {
      setIsLoadingBusinessInfo(false);
    }
  }, [businessId]);

  const sendClientRequest = async () => {
    setIsSubmitting(true);
    try {
      const businessSnap = await getDoc(doc(db, 'businesses', businessId));
      const ownerId = businessSnap.data()?.ownerId ?? '';

      const userSnap = await getDoc(doc(db, 'users', userId));
      const userData = userSnap.data() ?? {};
      const fullName = `${userData.firstName ?? ''} ${userData.lastName ?? ''}`.trim();
      const email = userData.email ?? '';

      const requestRef = doc(collection(db, 'joinRequests'));
      await setDoc(requestRef, {
        requestId: requestRef.id,
        businessId,
        ownerId,
        userId,
        userName: fullName || t('unknown_user'),
        userEmail: email,
        status: 'pending',
        timestamp: Timestamp.now()
      });

      setShowSuccess(true);
      setHasRequestedAlready(true);
      setShowConfirmation(false);
    } catch (err: unknown) {
      setErrorMessage(t('error_sending_request') + ' ' + getErrorMessage(err));
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      if (!user) {
        router.push(`/${locale}/loginsignup`);
        return;
      }
      setUserId(user.uid);
      checkClientStatus(user.uid);
    });
    return () => unsubscribe();
  }, [checkClientStatus, locale, router]);

  useEffect(() => {
    if (userId) {
      fetchBusinessInfo();
    }
  }, [userId, fetchBusinessInfo]);

  const waiverNeedsResign = useCallback(() => {
    if (!waiverRequired) return false;
    if (!waiverSignedAt) return true;
    if (waiverLastUpdated) {
      return waiverSignedAt < waiverLastUpdated.toDate();
    }
    return false;
  }, [waiverRequired, waiverSignedAt, waiverLastUpdated]);

  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-foreground)] px-4 py-6">
      <div className="w-full max-w-md mx-auto space-y-6 px-2 sm:px-4">

        {/* Back to Search Businesses */}
        <button
          onClick={() => router.push(`/${locale}/individualsearchbusinesses`)}
          className="text-sm text-[var(--color-accent)] underline hover:text-[var(--color-accent)]"
        >
          ← {t('back_to_search_businesses', { defaultValue: 'Back to Search Businesses' })}
        </button>

        {/* Business Name */}
        <h1 className="text-3xl font-bold text-center text-[var(--color-accent)] mb-2">
          {businessName}
        </h1>

        {/* Status Display */}
        {isLoadingStatus ? (
          <p className="text-center text-sm text-gray-500">{t('checking_client_status')}</p>
        ) : errorMessage ? (
          <p className="text-center text-sm text-red-600">{errorMessage}</p>
        ) : isApprovedClient ? (
          <p className="text-center text-sm text-green-600">{t('already_approved_client')}</p>
        ) : hasRequestedAlready ? (
          <p className="text-center text-sm text-yellow-600">{t('request_already_sent')}</p>
        ) : (
          <div className="space-y-3 text-sm">
            <p>{t('client_request_prompt')}</p>
            <button
              onClick={() => setShowConfirmation(true)}
              disabled={isLoadingStatus || isApprovedClient || hasRequestedAlready}
              className="w-full bg-[#2c4a30] text-white font-semibold py-3 rounded-md shadow-md hover:bg-[#243d28] focus:outline-none focus:ring-2 focus:ring-[#2c4a30] focus:ring-offset-2 transition-colors duration-200 disabled:bg-[#2c4a30] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {t('send_client_request_button')}
            </button>
          </div>
        )}

        <hr />

        {/* Business Info */}
        {isLoadingBusinessInfo ? (
          <p className="text-sm text-gray-500">{t('loading_business_info')}</p>
        ) : (
          <div className="space-y-4 text-sm">
            {businessAddress && <p>📍 {businessAddress}</p>}
            {businessPhone && <p>📞 {businessPhone}</p>}
            {servicesOffered.length > 0 && (
              <div>
                <p className="font-semibold">{t('services_offered_label')}</p>
                <ul className="list-disc ml-5">
                  {servicesOffered.map(service => (
                    <li key={service}>{service}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Waiver Button (boarding/daycare businesses) */}
            {waiverRequired && (
              <div className="space-y-2">
                <button
                  onClick={() =>
                    router.push(`/${locale}/waiveragreement?businessId=${businessId}`)
                  }
                  className="w-full bg-[#2c4a30] text-white font-semibold py-3 rounded-md shadow-md hover:bg-[#243d28]"
                >
                  {t('waiver_button_title', { defaultValue: 'Waiver' })}
                </button>
                <p className="text-xs text-gray-600 flex items-center gap-1">
                  {waiverNeedsResign()
                    ? t('waiver_status_resign_required')
                    : waiverSignedAt
                      ? t('waiver_status_signed_on', { date: waiverSignedAt.toLocaleString() })
                      : t('waiver_status_not_signed')}
                </p>
              </div>
            )}

            {/* Adoption Application Button (breeders) */}
            {acceptsApplications && applicationQuestions.length > 0 && (
              <button
                onClick={() =>
                  router.push(
                    `/${locale}/adoptionapplicationform?businessId=${businessId}&businessName=${encodeURIComponent(
                      businessName
                    )}`
                  )
                }
                className="w-full bg-[#2c4a30] text-white font-semibold py-3 rounded-md shadow-md hover:bg-[#243d28]"
              >
                {t('adoption_application_button', { defaultValue: 'Adoption Application' })}
              </button>
            )}
          </div>
        )}

        {/* Confirmation Dialog */}
        {showConfirmation && (
          <div
            role="dialog"
            aria-modal="true"
            className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/40 p-4 pb-[calc(env(safe-area-inset-bottom)+1rem)]"
          >
            <div className="w-full max-w-md rounded-lg bg-white dark:bg-neutral-900 p-4 shadow-xl border">
              <p className="font-medium text-base mb-4">
                {t('confirm_send_request_title')}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* ✅ Visible 'Yes, Send Request' button with safe fallback */}
                <button
                  onClick={sendClientRequest}
                  disabled={isSubmitting}
                  className="w-full px-4 py-2 rounded-md text-white font-semibold [background:var(--color-accent,#2c4a30)] hover:opacity-90 border border-[color:var(--color-accent,#2c4a30)] disabled:opacity-60"
                >
                  {isSubmitting
                    ? t('sending', { defaultValue: 'Sending…' })
                    : t('yes_send_request_button', { defaultValue: 'Yes, Send Request' })}
                </button>

                {/* Cancel button (unchanged) */}
                <button
                  onClick={() => setShowConfirmation(false)}
                  disabled={isSubmitting}
                  className="w-full px-4 py-2 rounded-md border border-red-600 text-red-700 hover:bg-red-50 disabled:opacity-60"
                >
                  {t('cancel_button')}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Success Alert */}
        {showSuccess && (
          <div className="bg-green-100 text-green-800 p-3 rounded shadow text-center font-medium text-sm">
            <p>{t('request_sent_alert_title')}</p>
            <p className="text-sm">{t('request_sent_alert_message')}</p>
          </div>
        )}
      </div>
    </div>
  );
}
