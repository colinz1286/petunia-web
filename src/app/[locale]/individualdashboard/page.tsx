'use client';

import { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import {
  getAuth,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import {
  getFirestore,
  doc,
  getDoc,
  collection,
  query,
  where,
  getDocs,
  updateDoc,
} from 'firebase/firestore';
import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
} from 'firebase/storage';
import { initializeApp } from 'firebase/app';
import Image from 'next/image';
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';

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

export default function IndividualDashboardPage() {
  const router = useRouter();
  const t = useTranslations('individualDashboard');
  const locale = useLocale();

  const [userId, setUserId] = useState('');
  const [firstName, setFirstName] = useState('');
  const [profileUrl, setProfileUrl] = useState('');
  const [profileFile, setProfileFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);

  const [reminderCount, setReminderCount] = useState(0);
  const [hasNewBusinessSignup, setHasNewBusinessSignup] = useState(false);
  const [isEmployee, setIsEmployee] = useState(false);
  const [invite, setInvite] = useState<any | null>(null);
  const [inviteDocId, setInviteDocId] = useState('');

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (user) => {
      if (!user) {
        router.push(`/${locale}/loginsignup`);
        return;
      }
      const uid = user.uid;
      const email = user.email ?? '';
      setUserId(uid);

      await Promise.all([
        loadProfile(uid),
        loadReminders(uid),
        loadNotifications(uid),
        checkEmployeeStatus(email),
      ]);
    });
    return () => unsub();
  }, []);

  const loadProfile = async (uid: string) => {
    const docSnap = await getDoc(doc(db, 'users', uid));
    const data = docSnap.data();
    setFirstName(data?.firstName || '');
    setProfileUrl(data?.profileImageURL || '');
  };

  const loadReminders = async (uid: string) => {
    const q = query(
      collection(db, 'users', uid, 'reminders'),
      where('isCompleted', '==', false)
    );
    const snapshot = await getDocs(q);
    setReminderCount(snapshot.docs.length);
  };

  const loadNotifications = async (uid: string) => {
    const q = query(
      collection(db, 'users', uid, 'notifications'),
      where('type', '==', 'businessSignUp'),
      where('isRead', '==', false)
    );
    const snapshot = await getDocs(q);
    setHasNewBusinessSignup(!snapshot.empty);
  };

  const checkEmployeeStatus = async (email: string) => {
    const q = query(
      collection(db, 'employeeInvites'),
      where('email', '==', email.toLowerCase())
    );
    const snapshot = await getDocs(q);
    if (snapshot.empty) return;

    const docSnap = snapshot.docs[0];
    const data = docSnap.data();
    setInviteDocId(docSnap.id);
    setInvite(data);
    setIsEmployee(data.status === 'accepted');
  };

  const uploadProfileImage = async () => {
    if (!profileFile || !userId) return;
    setIsUploading(true);

    const fileRef = ref(storage, `userProfileImages/${userId}/profile.jpg`);
    await uploadBytes(fileRef, profileFile);
    const url = await getDownloadURL(fileRef);

    await updateDoc(doc(db, 'users', userId), { profileImageURL: url });
    setProfileUrl(url);
    setIsUploading(false);
  };

  const acceptInvite = async () => {
    if (!userId || !inviteDocId) return;
    await updateDoc(doc(db, 'employeeInvites', inviteDocId), {
      userId,
      status: 'accepted',
      role: 'default',
    });
    setIsEmployee(true);
    setInvite({ ...invite, status: 'accepted' });
  };

  const declineInvite = async () => {
    if (!inviteDocId) return;
    await updateDoc(doc(db, 'employeeInvites', inviteDocId), {
      status: 'declined',
    });
    setInvite({ ...invite, status: 'declined' });
  };

  const logout = async () => {
    await signOut(auth);
    router.push(`/${locale}/loginsignup`);
  };

  return (
    <div className="min-h-screen bg-[color:var(--color-background)] text-[color:var(--color-foreground)] px-4 py-6">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-[color:var(--color-accent)] text-center mb-4">
          {t('dashboard_welcome', { firstName })}
        </h1>

        <div className="flex justify-center mb-4">
          <label className="cursor-pointer">
            <input
              type="file"
              accept=".jpg,.jpeg,.png"
              className="hidden"
              onChange={(e) =>
                setProfileFile(e.target.files?.[0] ?? null)
              }
            />
            {profileUrl ? (
              <Image
                src={profileUrl}
                alt="Profile"
                width={150}
                height={150}
                className="rounded-full border"
              />
            ) : (
              <div className="w-36 h-36 bg-gray-200 rounded-full flex items-center justify-center text-gray-500">
                +
              </div>
            )}
          </label>
        </div>

        {profileFile && (
          <button
            onClick={uploadProfileImage}
            className="block w-full text-white bg-blue-600 px-4 py-2 rounded mb-4"
          >
            {isUploading ? t('uploading_image') : t('upload_image')}
          </button>
        )}

        <DashboardLink href={`/${locale}/individual-bookservices`} label={t('book_services_title')} />
        <DashboardLink href={`/${locale}/individual-upcomingappointments`} label={t('upcoming_appointments')} />

        <div className="space-y-3 mt-4">
          <BadgeLink href={`/${locale}/individual-reminders`} label={t('reminders')} badge={reminderCount} />
          <DotLink href={`/${locale}/individual-notifications`} label={t('notifications')} showDot={hasNewBusinessSignup} />
          <DashboardLink href={`/${locale}/individual-searchbusinesses`} label={t('search_businesses')} />
          <DashboardLink href={`/${locale}/individual-mypets`} label={t('my_pets')} />
        </div>

        {invite?.status === 'pending' && (
          <div className="mt-6 bg-yellow-100 text-center p-4 rounded shadow space-y-2">
            <p className="font-semibold">{t('invite_banner_title')}</p>
            <p>{invite.businessName}</p>
            <div className="flex justify-center gap-4">
              <button onClick={acceptInvite} className="bg-green-600 text-white px-3 py-1 rounded">
                {t('accept')}
              </button>
              <button onClick={declineInvite} className="text-red-600 underline">
                {t('decline')}
              </button>
            </div>
          </div>
        )}

        {isEmployee && (
          <div className="mt-6 border-t pt-4 space-y-3">
            <h2 className="text-lg font-semibold text-center">{t('employee_tools')}</h2>
            <DashboardLink href={`/${locale}/individualemployee-upcomingreservations`} label={t('upcoming_reservations')} />
            <DashboardLink href={`/${locale}/individualemployee-dogsonproperty`} label={t('dogs_on_property')} />
            <button
              className="block w-full bg-gray-500 text-white px-4 py-2 rounded"
              onClick={() => alert(t('feature_coming_soon'))}
            >
              {t('view_assigned_schedule')}
            </button>
          </div>
        )}

        <div className="flex justify-between mt-6 gap-4">
          <div className="w-1/2">
            <DashboardLink href={`/${locale}/individualeditprofile`} label={t('edit_profile')} />
          </div>
          <div className="w-1/2">
            <button
              onClick={logout}
              className="w-full text-white bg-red-600 px-4 py-2 rounded"
            >
              {t('logout')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function DashboardLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="block w-full text-white bg-[#2c4a30] hover:opacity-90 py-2 px-4 rounded text-center mb-2"
    >
      {label}
    </Link>
  );
}

function BadgeLink({
  href,
  label,
  badge,
}: {
  href: string;
  label: string;
  badge: number;
}) {
  return (
    <div className="relative">
      <DashboardLink href={href} label={label} />
      {badge > 0 && (
        <span className="absolute top-0 right-2 bg-white text-red-600 rounded-full px-2 py-1 text-xs">
          {badge}
        </span>
      )}
    </div>
  );
}

function DotLink({
  href,
  label,
  showDot,
}: {
  href: string;
  label: string;
  showDot: boolean;
}) {
  return (
    <div className="relative">
      <DashboardLink href={href} label={label} />
      {showDot && (
        <span className="absolute top-2 right-4 w-3 h-3 bg-red-600 rounded-full" />
      )}
    </div>
  );
}
