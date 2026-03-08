'use client';

// NOTE: Mirrors iOS login entry flow in `.local-only/ios-real-reference/WelcomeView.swift`,
// with create-account continuation via `.local-only/ios-real-reference/CreateAccountView.swift`.

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useLocale } from 'next-intl';
import {
  getAuth,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import {
  getFirestore,
  getDoc,
  doc,
  collection,
  query,
  where,
  getDocs,
} from 'firebase/firestore';
import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFunctions, httpsCallable } from 'firebase/functions';
import { executeRecaptchaEnterpriseAction } from '@/lib/recaptchaEnterprise';

// ✅ Inline Firebase config
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY!,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN!,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID!,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET!,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID!,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID!,
};

// ✅ SAFE init (prevents duplicate app init issues)
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// ✅ Functions (your callable is in us-central1 per deploy logs)
const functions = getFunctions(app, 'us-central1');

function getFirebaseErrorCode(err: unknown): string {
  if (
    typeof err === 'object' &&
    err !== null &&
    'code' in err &&
    typeof (err as Record<string, unknown>).code === 'string'
  ) {
    return (err as { code: string }).code;
  }
  return '';
}

function shouldBypassRecaptchaForLocalDev(): boolean {
  if (typeof window === 'undefined') return false;
  if (process.env.NODE_ENV === 'production') return false;

  const host = window.location.hostname;
  return host === 'localhost' || host === '127.0.0.1';
}

async function runRecaptchaIfRequired(action: string): Promise<string> {
  if (shouldBypassRecaptchaForLocalDev()) {
    return '';
  }
  return executeRecaptchaEnterpriseAction(action);
}

async function findOwnersBusinessByOwnerId(uid: string): Promise<Record<string, unknown> | null> {
  const colRef = collection(db, 'businesses');
  const result = await getDocs(query(colRef, where('ownerId', '==', uid)));
  const first = result.docs[0];
  return first ? (first.data() as Record<string, unknown>) : null;
}

export default function LoginSignupPage() {
  const locale = useLocale();
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState<string | null>(null);
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [forgotMessage, setForgotMessage] = useState<string | null>(null);
  const [isSendingReset, setIsSendingReset] = useState(false);

  const handleLogin = async () => {
    setLoginError(null);
    setForgotMessage(null);
    setIsLoggingIn(true);

    try {
      await runRecaptchaIfRequired('LOGIN');
    } catch (error) {
      console.error('❌ reCAPTCHA Enterprise login execution failed:', error);
      setLoginError('Security check failed. Please refresh and try again.');
      setIsLoggingIn(false);
      return;
    }

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      const uid = user.uid;

      const userDoc = await getDoc(doc(db, 'users', uid));
      const userData = userDoc.data() as Record<string, unknown> | undefined;
      const accountType = typeof userData?.accountType === 'string' ? userData.accountType : '';

      if (accountType === 'Individual') {
        router.push(`/${locale}/individualdashboard`);
        return;
      }

      if (accountType === 'Business') {
        const businessData = await findOwnersBusinessByOwnerId(uid);
        if (!businessData) {
          setLoginError('Account found, but no matching business profile was detected.');
          return;
        }

        const type = String((businessData.businessType as string | undefined) ?? '').trim();
        const normalizedType = type.toLowerCase();

        if (normalizedType === 'breeder') {
          router.push(`/${locale}/breederdashboard`);
        } else if (normalizedType === 'walkersitter' || normalizedType === 'walker/sitter') {
          router.push(`/${locale}/walkersitterdashboard`);
        } else if (
          normalizedType === 'groomer' ||
          normalizedType === 'grooming' ||
          normalizedType === 'grooming business'
        ) {
          router.push(`/${locale}/groomingdashboard`);
        } else if (normalizedType === 'boarding/daycare' || normalizedType === 'boardingdaycare') {
          router.push(`/${locale}/boardinganddaycaredashboard`);
        } else {
          setLoginError('Unknown business type for this account.');
        }
        return;
      }

      setLoginError('Account found, but accountType is missing or invalid.');
    } catch (error: unknown) {
      console.error('❌ Login error:', error);
      const code: string = getFirebaseErrorCode(error);

      switch (code) {
        case 'auth/user-not-found':
          setLoginError('No user found with that email.');
          break;
        case 'auth/wrong-password':
          setLoginError('Incorrect password.');
          break;
        case 'auth/invalid-email':
          setLoginError('Invalid email address.');
          break;
        default:
          setLoginError('Login failed. Please try again.');
      }
    }

    setIsLoggingIn(false);
  };

  const handleForgotPassword = async () => {
    setLoginError(null);
    setForgotMessage(null);

    const cleanEmail = email.trim();
    if (!cleanEmail) {
      setForgotMessage('Please enter your email address into the email field above to reset your password.');
      return;
    }

    setIsSendingReset(true);

    // ✅ Neutral message (prevents account enumeration)
    const neutralSuccess = 'If an account exists for that email, a password reset link will be sent.';

    let recaptchaToken = '';
    try {
      recaptchaToken = await runRecaptchaIfRequired('PASSWORD_RESET_REQUEST');
    } catch (error) {
      console.error('❌ reCAPTCHA Enterprise password-reset execution failed:', error);
      setForgotMessage('Security check failed. Please refresh and try again.');
      setIsSendingReset(false);
      return;
    }

    try {
      // 1) Prefer SES callable
      const sendReset = httpsCallable(functions, 'sendPasswordResetEmailSES');
      await sendReset({
        email: cleanEmail,
        recaptchaToken,
        recaptchaAction: 'PASSWORD_RESET_REQUEST',
      });

      setForgotMessage(neutralSuccess);
      setIsSendingReset(false);
      return;
    } catch (err) {
      console.error('❌ SES reset callable failed:', err);
      // Keep response neutral to prevent account enumeration.
      setForgotMessage(neutralSuccess);
      setIsSendingReset(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#f6efe4] text-[#2c4a30] font-sans flex flex-col items-center justify-start px-4 py-10">
      <div className="w-full max-w-xs sm:max-w-md space-y-6 text-center">
        <Image
          src="/petunia_logo.png"
          alt="Petunia Logo"
          width={160}
          height={0}
          className="mx-auto w-40 h-auto"
          priority
        />

        <p className="italic text-gray-600 text-lg leading-relaxed">
          The perfect app for your business.<br />
          The perfect world for your pet.
        </p>

        <div className="space-y-4 text-left">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border-2 border-gray-300 rounded text-sm"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border-2 border-gray-300 rounded text-sm"
          />

          <button
            onClick={handleLogin}
            disabled={isLoggingIn}
            className="w-full bg-[#2c4a30] text-white py-2 rounded hover:bg-[#1e3624] transition text-sm"
          >
            {isLoggingIn ? 'Logging in...' : 'Log In'}
          </button>

          {loginError && <p className="text-red-600 text-sm text-center">{loginError}</p>}
          {forgotMessage && <p className="text-sm text-center text-[color:var(--color-accent)]">{forgotMessage}</p>}
        </div>

        <div className="text-sm text-center space-y-2 pt-4">
          <button
            onClick={handleForgotPassword}
            disabled={isSendingReset}
            className="text-[#2c4a30] underline"
          >
            {isSendingReset ? 'Sending…' : 'Forgot Password?'}
          </button>
          <br />
          <Link href={`/${locale}/createnewaccount`} className="text-[#2c4a30] underline">
            Create New Account
          </Link>
        </div>
      </div>
    </main>
  );
}
