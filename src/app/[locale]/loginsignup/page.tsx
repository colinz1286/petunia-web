'use client';

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
  collection,
  query,
  where,
  getDocs,
  getDoc,
  doc
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

export default function LoginSignupPage() {
  const locale = useLocale();
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState<string | null>(null);
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  const handleLogin = async () => {
    setLoginError(null);
    setIsLoggingIn(true);

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const uid = userCredential.user.uid;

      const businessSnapshot = await getDocs(
        query(collection(db, 'businesses'), where('ownerId', '==', uid))
      );

      if (!businessSnapshot.empty) {
        router.push(`/${locale}/boardinganddaycaredashboard`);
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
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border-2 border-gray-300 rounded text-sm"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border-2 border-gray-300 rounded text-sm"
          />

          <button
            onClick={handleLogin}
            disabled={isLoggingIn}
            className="w-full bg-[#2c4a30] text-white py-2 rounded hover:bg-[#1e3624] transition text-sm"
          >
            {isLoggingIn ? 'Logging in...' : 'Log In'}
          </button>

          {loginError && (
            <p className="text-red-600 text-sm text-center">{loginError}</p>
          )}
        </div>

        <div className="text-sm text-center space-y-2 pt-4">
          <button className="text-[#2c4a30] underline">Forgot Password?</button>
          <br />
          <Link href={`/${locale}/createnewaccount`} className="text-[#2c4a30] underline">
            Create New Account
          </Link>
        </div>
      </div>
    </main>
  );
}
