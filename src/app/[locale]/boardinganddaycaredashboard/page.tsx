'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  getAuth,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
  doc,
  updateDoc
} from 'firebase/firestore';
import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL
} from 'firebase/storage';

import { initializeApp } from 'firebase/app';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export default function BoardingAndDaycareDashboardPage() {
  const router = useRouter();
  const t = useTranslations('businessDashboard');

  const [userId, setUserId] = useState('');
  const [businessId, setBusinessId] = useState('');
  const [isVerified, setIsVerified] = useState(false);
  const [logoUrl, setLogoUrl] = useState('');
  const [logoFile, setLogoFile] = useState<File | null>(null);
  const [licenseFile, setLicenseFile] = useState<File | null>(null);
  const [licenseNumber, setLicenseNumber] = useState('');
  const [isUploading, setIsUploading] = useState(false);
  const [showVerifyForm, setShowVerifyForm] = useState(false);

  const [enableEmployeeManagement, setEnableEmployeeManagement] = useState(false);
  const [enableStatePaperwork, setEnableStatePaperwork] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (!user) {
        router.push('/en/loginsignup');
        return;
      }
      setUserId(user.uid);
      await fetchBusinessInfo(user.uid);
    });
    return () => unsubscribe();
  }, []);

  const fetchBusinessInfo = async (uid: string) => {
    const q = query(collection(db, 'businesses'), where('ownerId', '==', uid));
    const snapshot = await getDocs(q);
    const docSnap = snapshot.docs[0];
    if (!docSnap) return;

    const data = docSnap.data();
    const id = docSnap.id;

    setBusinessId(id);
    setIsVerified(data.isVerified || false);
    setLogoUrl(data.logoURL || '');

    const features = data.features || {};
    setEnableEmployeeManagement(features.enableEmployeeManagement || false);
    setEnableStatePaperwork(features.enableStatePaperwork || false);
  };

  const handleLogoUpload = async () => {
    if (!logoFile || !businessId) return;
    setIsUploading(true);

    const fileRef = ref(storage, `business_licenses/${businessId}.jpg`);
    await uploadBytes(fileRef, logoFile);
    const url = await getDownloadURL(fileRef);

    await updateDoc(doc(db, 'businesses', businessId), {
      logoURL: url
    });

    setLogoUrl(url);
    setIsUploading(false);
  };

  const handleVerificationSubmit = async () => {
    if (!businessId) return;

    const update: Partial<Record<string, unknown>> = {
      licenseNumber,
      isVerified: false
    };

    if (licenseFile) {
      const fileRef = ref(storage, `business_licenses/${businessId}.jpg`);
      await uploadBytes(fileRef, licenseFile);
      const url = await getDownloadURL(fileRef);
      update.licenseImageURL = url;
    }

    await updateDoc(doc(db, 'businesses', businessId), update);
    setShowVerifyForm(false);
  };

  const logout = async () => {
    await signOut(auth);
    router.push('/en/loginsignup');
  };

  return (
    <div className="min-h-screen bg-[color:var(--color-background)] text-[color:var(--color-foreground)] px-4 py-6">
      <div className="w-full max-w-md mx-auto px-2 sm:px-4">
        <h1 className="text-4xl font-bold text-[color:var(--color-accent)] text-center mb-6">
          {t('greeting')}
        </h1>

        {/* Verification & Logo Row */}
        <div className="flex justify-between items-center mb-4 flex-wrap gap-3">
          <div className="flex items-center gap-2 flex-wrap">
            {isVerified ? (
              <span className="text-green-600 font-semibold text-sm">✅ {t('verified')}</span>
            ) : (
              <span className="text-red-600 font-semibold text-sm">❌ {t('not_verified')}</span>
            )}
            {!isVerified && (
              <button
                onClick={() => setShowVerifyForm(true)}
                className="text-blue-600 underline text-sm"
              >
                {t('verify_now')}
              </button>
            )}
          </div>

          <label className="cursor-pointer">
            <input
              type="file"
              accept=".jpg,.jpeg,.png"
              className="hidden"
              onChange={(e) => {
                if (e.target.files?.[0]) {
                  setLogoFile(e.target.files[0]);
                }
              }}
            />
            {logoUrl ? (
              <Image
                src={logoUrl}
                alt="Business Logo"
                width={80}
                height={80}
                className="rounded-full border"
              />
            ) : (
              <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center text-gray-500 text-xl">
                +
              </div>
            )}
          </label>
        </div>

        {logoFile && (
          <button
            onClick={handleLogoUpload}
            className="mb-4 text-sm text-white bg-blue-600 px-4 py-2 rounded w-full"
          >
            {isUploading ? t('uploading_logo') : t('upload_logo')}
          </button>
        )}

        {/* Dashboard Links */}
        <div className="space-y-3">
          <DashboardLink href="/boardinganddaycare-dogsonproperty" label={t('dogs_on_property')} />
          <DashboardLink href="/boardinganddaycare-upcomingreservations" label={t('upcoming_reservations')} />
          <DashboardLink href="/boardinganddaycare-pendingrequests" label={t('pending_requests')} />
          <DashboardLink href="/boardinganddaycare-clientmanagement" label={t('client_management')} />

          {enableEmployeeManagement && (
            <>
              <DashboardLink href="/boardinganddaycare-manageemployees" label={t('manage_employees')} />
              <DashboardLink href="/boardinganddaycare-scheduleemployees" label={t('schedule_employees')} />
            </>
          )}

          {enableStatePaperwork && (
            <DashboardLink href="/boardinganddaycare-statepaperworklog" label={t('state_paperwork_log')} />
          )}

          <DashboardLink href="/boardinganddaycare-businesssettings" label={t('business_settings')} />

          <button
            onClick={logout}
            className="w-full text-white bg-red-600 px-4 py-2 rounded text-sm"
          >
            {t('logout')}
          </button>
        </div>

        {/* Verification Form */}
        {showVerifyForm && (
          <div className="mt-6 bg-white p-4 rounded shadow space-y-3">
            <h2 className="text-xl font-bold text-[color:var(--color-accent)] text-center">
              {t('verify_your_business')}
            </h2>

            <input
              type="text"
              value={licenseNumber}
              onChange={(e) => setLicenseNumber(e.target.value)}
              placeholder={t('business_license_number')}
              className="w-full border px-3 py-2 rounded text-sm"
            />

            <input
              type="file"
              accept=".jpg,.jpeg,.png"
              onChange={(e) => setLicenseFile(e.target.files?.[0] || null)}
              className="w-full text-sm"
            />

            <button
              onClick={handleVerificationSubmit}
              className="w-full bg-green-600 text-white px-4 py-2 rounded text-sm"
            >
              {t('submit_for_verification')}
            </button>

            <button
              onClick={() => setShowVerifyForm(false)}
              className="w-full text-gray-600 underline text-sm"
            >
              {t('cancel_button')}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

import Link from 'next/link';

function DashboardLink({
  href,
  label,
  disabled
}: {
  href: string;
  label: string;
  disabled?: boolean;
}) {
  return (
    <Link
      href={disabled ? '#' : href}
      className={`block w-full text-white py-2 px-4 rounded text-center ${disabled ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#2c4a30] hover:opacity-90'
        }`}
      aria-disabled={disabled}
    >
      {label}
    </Link>
  );
}

