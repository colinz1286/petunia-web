'use client';

import { useEffect, useMemo, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { initializeApp, getApps } from 'firebase/app';
import { getAuth, applyActionCode, confirmPasswordReset, verifyPasswordResetCode } from 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY!,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN!,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID!,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET!,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID!,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID!,
};

function initFirebase() {
  if (!getApps().length) initializeApp(firebaseConfig);
  return getAuth();
}

export default function AuthActionPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const mode = (searchParams.get('mode') || '').trim();
  const oobCode = (searchParams.get('oobCode') || '').trim();
  const continueUrl = (searchParams.get('continueUrl') || '').trim();

  const [status, setStatus] = useState<'idle' | 'working' | 'needsPassword' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState<string>('Loading…');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const auth = useMemo(() => initFirebase(), []);

  const safeRedirectTarget = useMemo(() => {
    // If a continueUrl is provided, we only trust it if it’s on your domain.
    // Otherwise, default users back to your login page.
    try {
      if (continueUrl) {
        const u = new URL(continueUrl);
        if (u.hostname === 'petuniapets.com') return u.pathname + u.search + u.hash;
      }
    } catch {}
    return '/loginsignup';
  }, [continueUrl]);

  useEffect(() => {
    const run = async () => {
      if (!mode || !oobCode) {
        setStatus('error');
        setMessage('This link is missing required information. Please request a new email and try again.');
        return;
      }

      // Verify Email
      if (mode === 'verifyEmail') {
        setStatus('working');
        setMessage('Verifying your email…');
        try {
          await applyActionCode(auth, oobCode);
          setStatus('success');
          setMessage('✅ Your email has been verified. You can now log in.');
          return;
        } catch {
          setStatus('error');
          setMessage('This verification link is invalid or expired. Please request a new verification email.');
          return;
        }
      }

      // Reset Password
      if (mode === 'resetPassword') {
        setStatus('working');
        setMessage('Validating reset link…');
        try {
          await verifyPasswordResetCode(auth, oobCode);
          setStatus('needsPassword');
          setMessage('Enter your new password below.');
          return;
        } catch {
          setStatus('error');
          setMessage('This password reset link is invalid or expired. Please request a new reset email.');
          return;
        }
      }

      // Unsupported
      setStatus('error');
      setMessage('Unsupported action type. Please request a new email and try again.');
    };

    run();
  }, [auth, mode, oobCode]);

  const onSubmitNewPassword = async () => {
    if (submitting) return;

    const p1 = newPassword.trim();
    const p2 = confirmNewPassword.trim();

    if (p1.length < 8) {
      setMessage('Password must be at least 8 characters.');
      return;
    }
    if (p1 !== p2) {
      setMessage('Passwords do not match.');
      return;
    }

    setSubmitting(true);
    setMessage('Updating password…');

    try {
      await confirmPasswordReset(auth, oobCode, p1);
      setStatus('success');
      setMessage('✅ Password updated. You can now log in with your new password.');
    } catch {
      setStatus('error');
      setMessage('Unable to reset your password. Please request a new reset email and try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#f6efe4] text-[#2c4a30] font-sans flex flex-col items-center justify-start px-4 py-12">
      <div className="w-full max-w-md bg-white rounded-xl shadow-md p-6 space-y-4">
        <h1 className="text-xl font-semibold">Petunia Account Action</h1>

        <p className="text-sm leading-relaxed">{message}</p>

        {status === 'needsPassword' && (
          <div className="space-y-3">
            <input
              type="password"
              placeholder="New password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full px-4 py-2 border-2 border-gray-300 rounded text-sm"
            />
            <input
              type="password"
              placeholder="Confirm new password"
              value={confirmNewPassword}
              onChange={(e) => setConfirmNewPassword(e.target.value)}
              className="w-full px-4 py-2 border-2 border-gray-300 rounded text-sm"
            />

            <button
              onClick={onSubmitNewPassword}
              disabled={submitting}
              className="w-full bg-[#2c4a30] text-white py-2 rounded hover:bg-[#1e3624] transition text-sm"
            >
              {submitting ? 'Saving…' : 'Set New Password'}
            </button>
          </div>
        )}

        {(status === 'success' || status === 'error') && (
          <button
            onClick={() => router.push(safeRedirectTarget)}
            className="w-full bg-[#2c4a30] text-white py-2 rounded hover:bg-[#1e3624] transition text-sm"
          >
            Continue
          </button>
        )}

        <p className="text-xs text-gray-500">
          If you didn’t request this, you can safely close this page.
        </p>
      </div>
    </main>
  );
}
