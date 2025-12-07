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
import { initializeApp } from 'firebase/app';

// ✅ Inline Firebase config
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

  // Collect matches from both ownership models and de-duplicate by id
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

  const handleLogin = async () => {
    setLoginError(null);
    setForgotMessage(null);
    setIsLoggingIn(true);

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      const uid = user.uid;

      // Find business this user owns (supports ownerIds + legacy ownerId)
      const businessDoc = await findOwnersBusiness(uid);
      if (businessDoc) {
        const businessData = businessDoc.data();
        const createdAtLike = businessData.createdAt as { toDate?: () => Date } | Date | undefined;
        const createdAt =
          createdAtLike instanceof Date
            ? createdAtLike
            : createdAtLike?.toDate?.();

        // Enforce email verification only for businesses created on/after this date
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
        } else {
          router.push(`/${locale}/boardinganddaycaredashboard`);
        }
        return;
      }

      // Otherwise, route individuals
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
    if (!email.trim()) {
      setForgotMessage('Please enter your email address into the email field above to reset your password.');
      return;
    }

    try {
      await sendPasswordResetEmail(auth, email);
      setForgotMessage('A password reset email has been sent.');
    } catch (error: unknown) {
      console.error('❌ Forgot Password error:', error);
      const code: string = getFirebaseErrorCode(error);

      switch (code) {
        case 'auth/invalid-email':
          setForgotMessage('Invalid email address.');
          break;
        case 'auth/user-not-found':
          setForgotMessage('No account found with that email.');
          break;
        default:
          setForgotMessage('Failed to send reset email. Please try again.');
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
          <button onClick={handleForgotPassword} className="text-[#2c4a30] underline">
            Forgot Password?
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
