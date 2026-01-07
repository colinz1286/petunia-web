'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useLocale } from 'next-intl';
import {
  getAuth,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from 'firebase/auth';
import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
  getDoc,
  doc,
} from 'firebase/firestore';
import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFunctions, httpsCallable } from 'firebase/functions';

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

// Normalize business type from either flat or nested field
function normalizeBusinessType(data: Record<string, unknown>): string {
  const flat = (data.businessType as string | undefined) ?? '';
  const nested = ((data.businessDetails as { type?: string } | undefined)?.type) ?? '';
  return (flat || nested).toString().trim().toLowerCase();
}

// Find a business owned by this user; prefer one whose type is "breeder"
async function findOwnersBusiness(
  uid: string
): Promise<{ id: string; data: () => Record<string, unknown> } | null> {
  const colRef = collection(db, 'businesses');

  const docs: { id: string; data: () => Record<string, unknown> }[] = [];

  const r1 = await getDocs(query(colRef, where('ownerIds', 'array-contains', uid)));
  r1.forEach((d) => {
    docs.push({ id: d.id, data: () => d.data() as Record<string, unknown> });
  });

  const r2 = await getDocs(query(colRef, where('ownerId', '==', uid)));
  r2.forEach((d) => {
    if (!docs.find((x) => x.id === d.id)) {
      docs.push({ id: d.id, data: () => d.data() as Record<string, unknown> });
    }
  });

  if (docs.length === 0) return null;

  const breederDoc = docs.find((d) => normalizeBusinessType(d.data()) === 'breeder');
  return breederDoc ?? docs[0];
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
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      const uid = user.uid;

      const businessDoc = await findOwnersBusiness(uid);
      if (businessDoc) {
        const businessData = businessDoc.data();
        const createdAtLike = businessData.createdAt as { toDate?: () => Date } | Date | undefined;
        const createdAt =
          createdAtLike instanceof Date ? createdAtLike : createdAtLike?.toDate?.();

        const enforcementDate = new Date('2025-07-29');
        if (createdAt && createdAt >= enforcementDate && !user.emailVerified) {
          setLoginError('Please verify your email before logging in.');
          setIsLoggingIn(false);
          return;
        }

        const type = normalizeBusinessType(businessData);
        if (type === 'breeder') {
          router.push(`/${locale}/breederdashboard`);
        } else if (type === 'walkersitter') {
          router.push(`/${locale}/walkersitterdashboard`);
        } else if (type === 'groomer' || type === 'grooming') {
          router.push(`/${locale}/groomingdashboard`);
        } else {
          router.push(`/${locale}/boardinganddaycaredashboard`);
        }
        return;
      }

      const userDoc = await getDoc(doc(db, 'users', uid));
      if (userDoc.exists()) {
        router.push(`/${locale}/individualdashboard`);
        return;
      }

      setLoginError('Account found, but no matching profile was detected.');
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

    try {
      // 1) Prefer SES callable
      const sendReset = httpsCallable(functions, 'sendPasswordResetEmailSES');
      await sendReset({ email: cleanEmail });

      setForgotMessage(neutralSuccess);
      setIsSendingReset(false);
      return;
    } catch (err) {
      console.error('❌ SES reset callable failed (falling back to Firebase mailer for dev test):', err);
      // 2) Dev-only fallback so you’re never blocked while testing
      try {
        await sendPasswordResetEmail(auth, cleanEmail);
        setForgotMessage(neutralSuccess);
      } catch (error: unknown) {
        console.error('❌ Firebase fallback reset failed:', error);
        const code: string = getFirebaseErrorCode(error);

        switch (code) {
          case 'auth/invalid-email':
            setForgotMessage('Invalid email address.');
            break;
          default:
            setForgotMessage('Failed to send reset email. Please try again.');
        }
      } finally {
        setIsSendingReset(false);
      }
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
