'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useTranslations, useLocale } from 'next-intl';

import { getAuth, onAuthStateChanged } from 'firebase/auth';
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
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

// helper for lint-safe error messages
function formatErr(err: unknown): string {
  return err instanceof Error ? err.message : String(err ?? '');
}

export default function AdoptionApplicationFormPage() {
  const t = useTranslations('adoptionApplicationForm');
  const router = useRouter();
  const locale = useLocale();
  const searchParams = useSearchParams();

  const businessId = searchParams.get('businessId') ?? '';
  const businessName = searchParams.get('businessName') ?? '';

  const [userId, setUserId] = useState('');
  const [questions, setQuestions] = useState<string[]>([]);
  const [answers, setAnswers] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

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

  // Load application questions
  useEffect(() => {
    async function fetchQuestions() {
      if (!businessId) return;
      try {
        const snap = await getDoc(doc(db, 'businesses', businessId));
        const data = snap.data();
        if (data && Array.isArray(data.applicationQuestions)) {
          setQuestions(data.applicationQuestions as string[]);
          setAnswers((data.applicationQuestions as string[]).map(() => ''));
        }
      } finally {
        setLoading(false);
      }
    }
    void fetchQuestions();
  }, [businessId]);

  const handleChange = (i: number, value: string) => {
    const updated = [...answers];
    updated[i] = value;
    setAnswers(updated);
  };

  const submitApplication = useCallback(async () => {
    if (!userId || !businessId) return;
    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      // get user profile
      const userSnap = await getDoc(doc(db, 'users', userId));
      const userData = (userSnap.data() ?? {}) as Record<string, unknown>;
      const fullName = `${(userData.firstName as string | undefined) ?? ''} ${(userData.lastName as string | undefined) ?? ''}`.trim();
      const email = (userData.email as string | undefined) ?? auth.currentUser?.email ?? '';

      const phone =
        (userData.phoneNumber as string | undefined) ??
        (userData.userPhone as string | undefined) ??
        (userData.phone as string | undefined) ??
        (userData.contactPhone as string | undefined) ??
        '';

      // address string (flatten nested object if present)
      let addressStr = '';
      if (typeof userData.address === 'object' && userData.address) {
        const addr = userData.address as Record<string, string | undefined>;
        addressStr = [
          addr.street,
          addr.line2,
          addr.city,
          (addr.state ?? addr.region),
          (addr.zipCode ?? addr.postalCode),
          addr.country
        ].filter(Boolean).join(', ');
      } else {
        addressStr = [
          (userData.street as string | undefined) ?? (userData.addressLine1 as string | undefined),
          (userData.line2 as string | undefined) ?? (userData.addressLine2 as string | undefined),
          userData.city as string | undefined,
          (userData.state as string | undefined) ?? (userData.region as string | undefined),
          (userData.zipCode as string | undefined) ?? (userData.postalCode as string | undefined) ?? (userData.zip as string | undefined),
          userData.country as string | undefined
        ].filter(Boolean).join(', ');
      }

      // pair questions with answers
      const answerPairs = questions.map((q, i) => ({
        question: q,
        answer: answers[i] ?? ''
      }));

      // new doc in adoptionApplications
      const appRef = doc(collection(db, 'businesses', businessId, 'adoptionApplications'));
      const applicationData = {
        applicationId: appRef.id,
        businessId,
        userId,
        userEmail: email,
        userName: fullName || t('unknown_user', { defaultValue: 'Unknown' }),
        userPhone: (phone as string).trim(),
        userAddress: addressStr,
        answers: answerPairs,
        status: 'submitted',
        timestamp: Timestamp.now()
      };

      await setDoc(appRef, applicationData);

      setShowSuccess(true);
      setAnswers(questions.map(() => ''));
    } catch (err: unknown) {
      setErrorMessage(t('failed_to_submit') + ' ' + formatErr(err));
    } finally {
      setIsSubmitting(false);
    }
  }, [userId, businessId, questions, answers, t]);

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
          {t('adoption_application_title', { defaultValue: 'Adoption Application' })}
        </h1>
        <h2 className="text-center text-lg font-semibold">{businessName}</h2>

        {loading ? (
          <p className="text-sm text-gray-500">{t('loading_questions', { defaultValue: 'Loading…' })}</p>
        ) : questions.length === 0 ? (
          <p className="text-sm text-gray-500">
            {t('no_questions', { defaultValue: 'This business has not provided any application questions.' })}
          </p>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              void submitApplication();
            }}
            className="space-y-6"
          >
            {questions.map((q, i) => (
              <div key={`q-${i}`} className="space-y-1">
                <label className="block font-medium text-sm">{q}</label>
                <textarea
                  value={answers[i] ?? ''}
                  onChange={(e) => handleChange(i, e.target.value)}
                  className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
                  rows={2}
                  required
                />
              </div>
            ))}

            {errorMessage && <p className="text-sm text-red-600">{errorMessage}</p>}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#2c4a30] text-white font-semibold py-3 rounded-md shadow-md hover:bg-[#243d28] disabled:opacity-50"
            >
              {isSubmitting
                ? t('submitting', { defaultValue: 'Submitting…' })
                : t('submit_application_button', { defaultValue: 'Submit Application' })}
            </button>
          </form>
        )}

        {showSuccess && (
          <div className="bg-green-100 text-green-800 p-3 rounded shadow text-center font-medium text-sm">
            <p>{t('application_submitted_alert_title', { defaultValue: 'Application Submitted' })}</p>
            <p className="text-sm">
              {t('application_submitted_alert_message', {
                defaultValue: 'Your adoption application has been sent successfully.'
              })}
            </p>
            <button
              onClick={() => router.back()}
              className="mt-3 underline text-[var(--color-accent)]"
            >
              {t('ok_button', { defaultValue: 'OK' })}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
