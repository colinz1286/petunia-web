'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged
} from 'firebase/auth';
import {
  getFirestore,
  collection,
  query,
  where,
  getDocs
} from 'firebase/firestore';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY!,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN!,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID!,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET!,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID!,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID!
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export default function LoginSignupPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState<string | null>(null);
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  const router = useRouter();

  const handleLogin = async () => {
    setLoginError(null);
    setIsLoggingIn(true);

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const uid = userCredential.user.uid;

      // Check if this user is a business owner
      const q = query(collection(db, 'businesses'), where('ownerId', '==', uid));
      const snapshot = await getDocs(q);

      if (!snapshot.empty) {
        // ✅ Business user → redirect to dashboard
        router.push('/boardinganddaycaredashboard');
      } else {
        // ⚠️ Not a business → handle later if needed
        setLoginError("This login does not match a registered business account.");
      }
    } catch (error: any) {
      console.error('❌ Login error:', error);
      switch (error.code) {
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
    <main className="min-h-screen bg-[#f6efe4] text-[#2c4a30] flex flex-col justify-between font-sans">
      {/* Navbar */}
      <header className="w-full flex items-center justify-between px-6 py-4 bg-[#f6efe4] border-b border-[#d9cfc2]">
        <Link href="/" className="flex items-center space-x-2">
          <img
            src="/petunia_logo.png"
            alt="Petunia Logo"
            className="w-20 h-auto"
          />
        </Link>
        <nav className="flex gap-6 text-sm font-medium">
          <Link href="/loginsignup" className="hover:underline">Login / Sign Up</Link>
          <Link href="/aboutus" className="hover:underline">About Us</Link>
          <Link href="/contact" className="hover:underline">Contact</Link>
          <a href="https://www.facebook.com/profile.php?id=61575107920935" target="_blank" rel="noopener noreferrer" className="hover:underline">Facebook</a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:underline">YouTube</a>
        </nav>
      </header>

      {/* Main Content */}
      <section className="flex-grow flex flex-col items-center justify-start px-4 py-10">
        <div className="w-full max-w-md space-y-6 text-center">
          <img
            src="/petunia_logo.png"
            alt="Petunia Logo"
            className="mx-auto w-40 h-auto"
          />

          <p className="italic text-gray-600 text-lg">
            The perfect app for your business.<br />
            The perfect world for your pet.
          </p>

          {/* Form */}
          <div className="space-y-4 text-left">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border-2 border-gray-300 rounded outline-none"
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border-2 border-gray-300 rounded outline-none"
            />

            <button
              onClick={handleLogin}
              disabled={isLoggingIn}
              className="w-full bg-[#2c4a30] text-white py-2 rounded hover:bg-[#1e3624] transition"
            >
              {isLoggingIn ? 'Logging in...' : 'Log In'}
            </button>

            {loginError && (
              <p className="text-red-600 text-sm text-center">{loginError}</p>
            )}
          </div>

          {/* Links */}
          <div className="text-sm text-center space-y-2 pt-4">
            <button className="text-[#2c4a30] underline">
              Forgot Password?
            </button>
            <br />
            <Link href="/createnewaccount" className="text-[#2c4a30] underline">
              Create New Account
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2c4a30] text-white py-6 text-sm mt-12">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-4 px-6">
          <div className="text-center sm:text-left">
            &copy; {new Date().getFullYear()} Petunia. All rights reserved.
          </div>
          <div className="flex gap-4">
            <Link href="/contact" className="hover:underline">Contact</Link>
            <a
              href="https://www.facebook.com/profile.php?id=61575107920935"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Facebook
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              YouTube
            </a>
            <Link href="/privacypolicy" className="hover:underline">Privacy Policy</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
