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
  Timestamp,
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

// Small helper to satisfy @typescript-eslint/no-explicit-any
function errorMessage(err: unknown): string {
  return err instanceof Error ? err.message : String(err ?? '');
}

export default function WaiverAgreementPage() {
  const t = useTranslations('waiverAgreement');
  const router = useRouter();
  const locale = useLocale();
  const searchParams = useSearchParams();

  const businessId = searchParams.get('businessId') ?? '';

  // New: optional waiver type parameter (walker | sitter | boardingDaycare)
  const waiverTypeParam = searchParams.get('waiverType');
  const waiverType = waiverTypeParam ? waiverTypeParam.toLowerCase() : 'boardingDaycare';


  const [userId, setUserId] = useState('');
  const [waiverText, setWaiverText] = useState('');
  const [waiverVersion, setWaiverVersion] = useState(1);
  // Defensive fallback: ensure version numbers never write null
  useEffect(() => {
    if (!waiverVersion || Number.isNaN(waiverVersion)) setWaiverVersion(1);
  }, [waiverVersion]);
  const [loading, setLoading] = useState(true);
  const [agreeChecked, setAgreeChecked] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
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
    const run = async () => {
      try {
        if (!businessId || !waiverType) return;

        const businessRef = doc(db, 'businesses', businessId);
        const bizSnap = await getDoc(businessRef);

        if (!bizSnap.exists()) {
          setWaiverText('');
          setLoading(false);
          return;
        }

        const bizData = bizSnap.data() ?? {};
        let text = '';
        let version = 1;

        // ✅ Check waiverType explicitly
        switch (waiverType) {
          case 'walker':
            if (bizData.walkerWaiverText) {
              text = bizData.walkerWaiverText;
              version = bizData.walkerWaiverVersion ?? 1;
            }
            break;

          case 'sitter':
            if (bizData.sitterWaiverText) {
              text = bizData.sitterWaiverText;
              version = bizData.sitterWaiverVersion ?? 1;
            }
            break;

          default:
            // ✅ Keep legacy logic fully intact
            const legacyRef = doc(db, 'businesses', businessId, 'settings', 'clientWaiver');
            const legacySnap = await getDoc(legacyRef);
            if (legacySnap.exists()) {
              const legacyData = legacySnap.data() ?? {};
              text = legacyData.waiverText ?? '';
              version = legacyData.waiverVersion ?? 1;
            }
            break;
        }

        setWaiverText(text);
        setWaiverVersion(version);

        if (!text) {
          console.warn(`No waiver text found for type "${waiverType}" in business ${businessId}`);
        }
      } catch (err: unknown) {
        setErrorMsg(`${t('failed_to_load')} ${errorMessage(err)}`);
      } finally {
        setLoading(false);
      }
    };

    run();
  }, [businessId, waiverType, t]);

  const submitAgreement = useCallback(async () => {
    if (!agreeChecked) {
      setErrorMsg(t('waiver_alert_title'));
      return;
    }
    if (!userId || !businessId) return;

    try {
      const clientRef = doc(db, 'userApprovedBusinesses', businessId, 'clients', userId);

      // === Build waiverData dynamically per type ===
      const waiverData: Record<string, unknown> = {};
      if (waiverType === 'walker') {
        waiverData.walkerWaiverSigned = true;
        waiverData.walkerWaiverSignedAt = Timestamp.now();
        waiverData.walkerWaiverVersion = waiverVersion;
        waiverData.walkerWaiverSnapshot = waiverText;
      } else if (waiverType === 'sitter') {
        waiverData.sitterWaiverSigned = true;
        waiverData.sitterWaiverSignedAt = Timestamp.now();
        waiverData.sitterWaiverVersion = waiverVersion;
        waiverData.sitterWaiverSnapshot = waiverText;
      } else {
        waiverData.waiverSigned = true;
        waiverData.waiverSignedAt = Timestamp.now();
        waiverData.waiverVersionSigned = waiverVersion;
        waiverData.waiverVersion = waiverVersion;
        waiverData.waiverSnapshot = waiverText;
      }

      // === Write to client doc ===
      await setDoc(clientRef, waiverData, { merge: true });

      // === Redundant confirmation update (same as iOS) ===
      const confirmationUpdate: Record<string, unknown> = {};
      if (waiverType === 'walker') {
        confirmationUpdate.walkerWaiverSigned = true;
        confirmationUpdate.walkerWaiverSignedAt = Timestamp.now();
      } else if (waiverType === 'sitter') {
        confirmationUpdate.sitterWaiverSigned = true;
        confirmationUpdate.sitterWaiverSignedAt = Timestamp.now();
      } else {
        confirmationUpdate.waiverSigned = true;
        confirmationUpdate.waiverSignedAt = Timestamp.now();
      }

      await setDoc(clientRef, confirmationUpdate, { merge: true });

      // === Write to waiverConfirmations (for audit) ===
      const confirmationId = `${businessId}_${userId}_${waiverType}`;
      await setDoc(
        doc(db, 'waiverConfirmations', confirmationId),
        {
          userId,
          businessId,
          waiverType,
          waiverText,
          waiverVersion,
          signedAt: Timestamp.now(),
          confirmedByClient: true,
        },
        { merge: true }
      );

      setSuccess(true);
    } catch (err: unknown) {
      setErrorMsg(`${t('failed_to_submit')} ${errorMessage(err)}`);
    }
  }, [userId, businessId, waiverText, waiverVersion, agreeChecked, waiverType, t]);

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

        {errorMsg && <p className="text-sm text-red-600">{errorMsg}</p>}

        {success && (
          <div className="bg-green-100 text-green-800 p-3 rounded shadow text-center font-medium text-sm">
            <p>{t('waiver_signed_success_title', { defaultValue: 'Waiver Signed!' })}</p>
            <p className="text-sm">
              {t('waiver_signed_success_message', { defaultValue: 'Your waiver has been successfully signed.' })}
            </p>
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
