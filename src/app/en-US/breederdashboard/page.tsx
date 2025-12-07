'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';

import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import {
  getFirestore,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
  updateDoc,
} from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';

// --- Firebase bootstrap -------------------------------------------------------
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
const storage = getStorage(app);

// --- Page --------------------------------------------------------------------
export default function BreederDashboardPage() {
  const router = useRouter();
  const locale = useLocale();
  const t = useTranslations('breederDashboard');

  // Minimal header state
  const [firstName, setFirstName] = useState<string>('');

  // Business + logo
  const [businessId, setBusinessId] = useState<string>('');
  const [logoUrl, setLogoUrl] = useState<string>('');
  const [logoFile, setLogoFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState<boolean>(false);

  const isBusinessResolved = businessId.trim().length > 0;

  // Routes
  const ROUTES = useMemo(
    () => ({
      currentLitters: `/${locale}/breedercurrentlitters`,
      myDogs: `/${locale}/breedermydogs`,
      applicationsContracts: `/${locale}/breederapplicationsandcontracts`,
      clientManagement: `/${locale}/breederclientmanagement`,
      pendingRequests: `/${locale}/breederpendingrequests`,
      upcomingAppointments: `/${locale}/breederupcomingappointments`,
      reminders: `/${locale}/breederreminders`,
      businessSettings: `/${locale}/breederbusinesssettings`,
      loginSignup: `/${locale}/loginsignup`,
    }),
    [locale]
  );

  // --- Business resolver -----------------------------------------------------
  const resolveBusiness = useCallback(async (uid: string) => {
    const col = collection(db, 'businesses');

    // 1) New model: ownerIds contains uid
    const q1 = query(col, where('ownerIds', 'array-contains', uid));
    const r1 = await getDocs(q1);
    if (!r1.empty) {
      const d = r1.docs[0];
      setBusinessId(d.id.trim());
      setLogoUrl((d.data()?.logoURL as string) || '');
      return;
    }

    // 2) Legacy: ownerId == uid
    const q2 = query(col, where('ownerId', '==', uid));
    const r2 = await getDocs(q2);
    if (!r2.empty) {
      const d = r2.docs[0];
      setBusinessId(d.id.trim());
      setLogoUrl((d.data()?.logoURL as string) || '');
    }
  }, []);

  // --- Auth + initial load ---------------------------------------------------
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      if (!u) {
        router.push(ROUTES.loginSignup);
        return;
      }

      (async () => {
        try {
          const snap = await getDoc(doc(db, 'users', u.uid));
          const data = snap.data();
          setFirstName((data?.firstName as string) || '');
        } catch {
          // ignore errors reading user profile
        }
        await resolveBusiness(u.uid);
      })();
    });

    return () => unsub();
  }, [resolveBusiness, router, ROUTES.loginSignup]);

  // --- Logo upload (simple & direct) ----------------------------------------
  const uploadLogo = useCallback(async () => {
    if (!logoFile || !isBusinessResolved) return;

    setIsUploading(true);
    try {
      // Parity with iOS path:
      const fileRef = ref(storage, `business_licenses/${businessId}.jpg`);
      await uploadBytes(fileRef, logoFile);
      const url = await getDownloadURL(fileRef);

      await updateDoc(doc(db, 'businesses', businessId), { logoURL: url });
      setLogoUrl(url);
      setLogoFile(null);
    } finally {
      setIsUploading(false);
    }
  }, [logoFile, isBusinessResolved, businessId]);

  const onLogout = useCallback(async () => {
    await signOut(auth);
    router.push(ROUTES.loginSignup);
  }, [router, ROUTES.loginSignup]);

  // Helper to append “(Coming Soon)” to labels
  const cs = useCallback((label: string) => `${label} (Coming Soon)`, []);

  return (
    <main className="min-h-screen bg-[color:var(--color-background)] text-[color:var(--color-foreground)] px-4 py-8">
      <div className="w-full max-w-md mx-auto">

        {/* Title */}
        <h1 className="text-3xl font-bold text-center text-[color:var(--color-accent)]">
          {t('business_dashboard_greeting', { firstName })}
        </h1>

        {/* Logo + (only show resolving text while loading) */}
        <div className="mt-6 flex items-center justify-between gap-4">
          <div className="flex-1 min-h-[1.25rem]">
            {!isBusinessResolved && (
              <p className="text-sm text-gray-600">{t('resolving_business_id')}</p>
            )}
          </div>

          <div className="w-20 h-20 rounded-full bg-gray-200 border overflow-hidden flex items-center justify-center">
            {logoUrl ? (
              <Image
                src={logoUrl}
                alt="Business Logo"
                width={80}
                height={80}
                className="object-cover w-20 h-20"
                unoptimized
              />
            ) : (
              <span className="text-gray-500 text-xl" aria-hidden>
                +
              </span>
            )}
          </div>
        </div>

        {/* File input + upload (not a nav link; stays active) */}
        <div className="mt-3">
          <label className="block w-full">
            <input
              type="file"
              accept=".jpg,.jpeg,.png,image/*"
              className="block w-full text-sm file:mr-3 file:rounded file:border-0 file:bg-[#2c4a30] file:px-3 file:py-1.5 file:text-white hover:file:opacity-90"
              onChange={(e) => setLogoFile(e.target.files?.[0] ?? null)}
              disabled={!isBusinessResolved}
            />
          </label>

          {logoFile && (
            <button
              type="button"
              onClick={uploadLogo}
              disabled={isUploading || !isBusinessResolved}
              className={`mt-3 w-full text-white py-2 rounded text-sm ${isUploading || !isBusinessResolved
                  ? 'bg-[#9fb5a5] cursor-not-allowed'
                  : 'bg-[#2c4a30] hover:opacity-90'
                }`}
            >
              {isUploading ? t('uploading_logo') : t('upload_logo')}
            </button>
          )}
        </div>

        <hr className="my-6 border-gray-300" />

        {/* Navigation buttons */}
        <div className="space-y-3">

          {/* Make Current Litters ACTIVE */}
          <DashLink href={ROUTES.currentLitters} label={t('current_litters')} />
          
          {/* Make My Dogs ACTIVE */}
          <DashLink href={ROUTES.myDogs} label={t('my_dogs')} />

          <DashLink href={ROUTES.applicationsContracts} label={t('applications_contracts')} />

          {/* Make Pending Requests ACTIVE */}
           <DashLink href={ROUTES.clientManagement} label={t('client_management')} />

          {/* Make Pending Requests ACTIVE */}
          <DashLink href={ROUTES.pendingRequests} label={t('pending_requests')} />

          <DashLink disabled href={ROUTES.upcomingAppointments} label={cs(t('upcoming_appointments'))} />
          <DashLink disabled href={ROUTES.reminders} label={cs(t('reminders'))} />

          {/* Keep Business Settings active */}
          <DashLink href={ROUTES.businessSettings} label={t('business_settings')} />
        </div>

        {/* Logout (only other active button) */}
        <button
          type="button"
          onClick={onLogout}
          className="mt-6 w-full text-white bg-red-600 px-4 py-2 rounded text-sm"
        >
          {t('logout')}
        </button>
      </div>
    </main>
  );
}

// --- Small UI helper ---------------------------------------------------------
function DashLink({
  href,
  label,
  disabled = false,
}: {
  href: string;
  label: string;
  disabled?: boolean;
}) {
  if (disabled) {
    return (
      <span
        aria-disabled="true"
        className="block w-full text-center py-2 px-4 rounded text-sm bg-[#9fb5a5] text-white cursor-not-allowed"
        title="Coming Soon"
      >
        {label}
      </span>
    );
  }
  return (
    <Link
      href={href}
      className="block w-full text-center py-2 px-4 rounded text-sm bg-[#2c4a30] text-white hover:opacity-90"
    >
      {label}
    </Link>
  );
}
