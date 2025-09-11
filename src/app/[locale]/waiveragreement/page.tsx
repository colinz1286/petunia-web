'use client';

import React, { useEffect, useState, useCallback } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useTranslations, useLocale } from 'next-intl';

import { getAuth, onAuthStateChanged } from 'firebase/auth';
import {
  getFirestore,
  doc,
  getDoc,
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

export default function WaiverAgreementPage() {
  const t = useTranslations('waiverAgreement');
  const router = useRouter();
  const locale = useLocale();
  const searchParams = useSearchParams();

  const businessId = searchParams.get('businessId') ?? '';

  const [userId, setUserId] = useState('');
  const [waiverText, setWaiverText] = useState('');
  const [waiverVersion, setWaiverVersion] = useState(1);
  const [loading, setLoading] = useState(true);
  const [agreeChecked, setAgreeChecked] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  // Ensure user is logged in
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (!user) {
        router.push(`/${locale}/loginsignup`);
        return;
      }
      setUserId(user.uid);
    });
    return () => unsub();
  }, [router, locale]);

  // Load waiver text
  useEffect(() => {
    async function fetchWaiver() {
      try {
        const ref = doc(db, 'businesses', businessId, 'settings', 'clientWaiver');
        const snap = await getDoc(ref);
        if (snap.exists()) {
          const data = snap.data();
          setWaiverText((data.waiverText as string) ?? '');
          setWaiverVersion((data.waiverVersion as number) ?? 1);
        } else {
          setWaiverText('');
        }
      } catch (err: any) {
        setErrorMessage(t('failed_to_load') + ' ' + (err.message ?? ''));
      } finally {
        setLoading(false);
      }
    }
    if (businessId) void fetchWaiver();
  }, [businessId, t]);

  const submitAgreement = useCallback(async () => {
    if (!agreeChecked) {
      setErrorMessage(t('waiver_alert_title'));
      return;
    }
    if (!userId || !businessId) return;

    try {
      // Write waiver info under userApprovedBusinesses
      const ref = doc(db, 'userApprovedBusinesses', businessId, 'clients', userId);
      await setDoc(ref, {
        waiverSigned: true,
        waiverSignedAt: Timestamp.now(),
        waiverVersionSigned: waiverVersion,
        waiverVersion: waiverVersion,
        waiverSnapshot: waiverText
      }, { merge: true });

      // Optional redundant confirmation record
      const confirmationId = `${businessId}_${userId}`;
      await setDoc(doc(db, 'waiverConfirmations', confirmationId), {
        userId,
        businessId,
        waiverText,
        waiverVersion,
        signedAt: Timestamp.now(),
        confirmedByClient: true
      }, { merge: true });

      setSuccess(true);
    } catch (err: any) {
      setErrorMessage(t('failed_to_submit') + ' ' + (err.message ?? ''));
    }
  }, [userId, businessId, waiverText, waiverVersion, agreeChecked, t]);

  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-foreground)] px-4 py-6">
      <div className="w-full max-w-2xl mx-auto space-y-6">
        <button
          onClick={() => router.back()}
          className="text-sm text-[var(--color-accent)] underline hover:text-[var(--color-accent)]"
        >
          ← {t('back_button', { defaultValue: 'Back' })}
        </button>

        <h1 className="text-2xl font-bold text-center text-[var(--color-accent)]">
          {t('waiver_title')}
        </h1>

        {loading ? (
          <p className="text-sm text-gray-500">{t('loading_waiver')}</p>
        ) : waiverText.trim().length === 0 ? (
          <p className="p-3 bg-gray-100 rounded">{t('no_waiver_found')}</p>
        ) : (
          <>
            <div className="max-h-72 overflow-y-auto p-3 bg-gray-100 rounded text-sm whitespace-pre-line">
              {waiverText}
            </div>

            <label className="flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                checked={agreeChecked}
                onChange={(e) => setAgreeChecked(e.target.checked)}
                className="accent-[#2c4a30]"
              />
              {t('waiver_agree_toggle')}
            </label>

            <button
              onClick={submitAgreement}
              disabled={success}
              className="w-full bg-[#2c4a30] text-white font-semibold py-3 rounded-md shadow-md hover:bg-[#243d28] disabled:opacity-50"
            >
              {t('submit_agreement_button')}
            </button>
          </>
        )}

        {errorMessage && <p className="text-sm text-red-600">{errorMessage}</p>}

        {success && (
          <div className="bg-green-100 text-green-800 p-3 rounded shadow text-center font-medium text-sm">
            <p>{t('waiver_submitted_alert_title')}</p>
            <p className="text-sm">{t('waiver_submitted_alert_message')}</p>
            <button
              onClick={() => router.back()}
              className="mt-3 underline text-[var(--color-accent)]"
            >
              {t('ok_button')}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
