'use client';

// NOTE: Mirrors iOS `.local-only/ios-real-reference/IndividualDashboardView.swift`.
// Keep dashboard navigation and user-state indicators aligned across platforms.

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getApp, getApps, initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import {
  collection,
  collectionGroup,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  limit,
  onSnapshot,
  orderBy,
  query,
  updateDoc,
  where,
} from 'firebase/firestore';
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage';
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

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

type PendingInvite = {
  businessId?: string;
  businessName?: string;
  status?: 'pending' | 'accepted' | 'declined';
};

export default function IndividualDashboardPage() {
  const router = useRouter();
  const t = useTranslations('individualDashboard');
  const locale = useLocale();

  const [firstName, setFirstName] = useState('');
  const [profileUrl, setProfileUrl] = useState('');
  const [profilePreviewUrl, setProfilePreviewUrl] = useState('');
  const [userId, setUserId] = useState('');
  const [profileFile, setProfileFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);

  const [reminderCount, setReminderCount] = useState(0);
  const [hasUnreadNotifications, setHasUnreadNotifications] = useState(false);
  const [hasUnreadMessages, setHasUnreadMessages] = useState(false);
  const [hasNewBusinessSignup, setHasNewBusinessSignup] = useState(false);

  const [isEmployee, setIsEmployee] = useState(false);
  const [invite, setInvite] = useState<PendingInvite | null>(null);
  const [inviteDocId, setInviteDocId] = useState('');

  useEffect(() => {
    let notificationUnsubscribe: (() => void) | undefined;

    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (!user) {
        router.push(`/${locale}/loginsignup`);
        return;
      }

      const uid = user.uid;
      const email = user.email ?? '';
      setUserId(uid);

      notificationUnsubscribe?.();
      notificationUnsubscribe = onSnapshot(
        query(
          collection(db, 'users', uid, 'notifications'),
          where('isRead', '==', false)
        ),
        (snapshot) => {
          setHasUnreadNotifications(!snapshot.empty);
        }
      );

      await Promise.all([
        loadProfile(uid),
        loadReminderCount(uid),
        loadUnreadMessages(uid),
        checkEmployeeStatusOrInvite(email),
        checkForBusinessSignups(uid),
      ]);
    });

    return () => {
      unsubscribe();
      notificationUnsubscribe?.();
    };
  }, [locale, router]);

  useEffect(() => {
    if (!profileFile) {
      setProfilePreviewUrl('');
      return;
    }

    const objectUrl = URL.createObjectURL(profileFile);
    setProfilePreviewUrl(objectUrl);

    return () => {
      URL.revokeObjectURL(objectUrl);
    };
  }, [profileFile]);

  const loadProfile = async (uid: string) => {
    const snapshot = await getDoc(doc(db, 'users', uid));
    const data = snapshot.data();
    setFirstName((data?.firstName as string | undefined) ?? '');
    setProfileUrl((data?.profileImageURL as string | undefined) ?? '');
  };

  const loadReminderCount = async (uid: string) => {
    const remindersQuery = query(
      collection(db, 'users', uid, 'reminders'),
      where('isCompleted', '==', false)
    );
    const snapshot = await getDocs(remindersQuery);
    setReminderCount(snapshot.docs.length);
  };

  const loadUnreadMessages = async (uid: string) => {
    const unreadMessagesQuery = query(
      collectionGroup(db, 'threadMessages'),
      where('receiverId', '==', uid),
      where('read', '==', false)
    );
    const snapshot = await getDocs(unreadMessagesQuery);
    setHasUnreadMessages(!snapshot.empty);
  };

  const checkEmployeeStatusOrInvite = async (email: string) => {
    const inviteQuery = query(
      collection(db, 'employeeInvites'),
      where('email', '==', email.toLowerCase()),
      orderBy('sentAt', 'desc'),
      limit(1)
    );
    const snapshot = await getDocs(inviteQuery);

    if (snapshot.empty) {
      setInvite(null);
      setInviteDocId('');
      setIsEmployee(false);
      return;
    }

    const latestInvite = snapshot.docs[0];
    const data = latestInvite.data() as PendingInvite;

    setInviteDocId(latestInvite.id);
    setInvite(data);
    setIsEmployee(data.status === 'accepted');
  };

  const checkForBusinessSignups = async (uid: string) => {
    const ownerUid = 'VMIHFQTmd3T5RPf3zKibR5kF72Y2';
    if (uid !== ownerUid) {
      setHasNewBusinessSignup(false);
      return;
    }

    const signupQuery = query(
      collection(db, 'users', uid, 'notifications'),
      where('type', '==', 'businessSignUp'),
      where('isRead', '==', false)
    );
    const snapshot = await getDocs(signupQuery);
    setHasNewBusinessSignup(!snapshot.empty);
  };

  const uploadProfileImage = async () => {
    if (!profileFile || !userId) {
      return;
    }

    setIsUploading(true);

    const fileRef = ref(storage, `userProfileImages/${userId}/profile.jpg`);
    await uploadBytes(fileRef, profileFile);
    const url = await getDownloadURL(fileRef);

    await updateDoc(doc(db, 'users', userId), { profileImageURL: url });
    setProfileUrl(url);
    setProfileFile(null);
    setIsUploading(false);
  };

  const acceptInvite = async () => {
    if (!userId || !inviteDocId) {
      return;
    }

    await updateDoc(doc(db, 'employeeInvites', inviteDocId), {
      role: 'default',
      status: 'accepted',
      userId,
    });

    setIsEmployee(true);
    setInvite((current) => (current ? { ...current, status: 'accepted' } : { status: 'accepted' }));
  };

  const declineInvite = async () => {
    if (!inviteDocId) {
      return;
    }

    await updateDoc(doc(db, 'employeeInvites', inviteDocId), {
      status: 'declined',
    });

    setInvite((current) => (current ? { ...current, status: 'declined' } : { status: 'declined' }));
  };

  const logout = async () => {
    if (!window.confirm(t('logout_confirm_title'))) {
      return;
    }

    await signOut(auth);
    router.push(`/${locale}/loginsignup`);
  };

  const displayedProfileUrl = profilePreviewUrl || profileUrl;

  return (
    <div className="min-h-screen bg-[color:var(--color-background)] px-4 py-6 text-[color:var(--color-foreground)]">
      <div className="mx-auto w-full max-w-md px-2 sm:px-4">
        <DashboardHeader
          welcomeLabel={t('dashboard_welcome', { firstName })}
          profileUrl={displayedProfileUrl}
          addPetPhotoLabel={t('add_pet_photo')}
          isUploading={isUploading}
          uploadingLabel={t('uploading_image')}
          onFileSelected={setProfileFile}
        />

        {profileFile && (
          <button
            type="button"
            onClick={uploadProfileImage}
            className="mb-4 block w-full rounded-xl bg-[#2c4a30] px-4 py-3 text-sm font-semibold text-white hover:opacity-90"
          >
            {isUploading ? t('uploading_image') : t('upload_image')}
          </button>
        )}

        <PrimaryLink href={`/${locale}/individualbookservices`} label={t('book_services_title')} />
        <PrimaryLink href={`/${locale}/individualupcomingappointments`} label={t('upcoming_appointments')} />

        <DashboardMainActions
          locale={locale}
          reminderCount={reminderCount}
          hasUnreadNotifications={hasUnreadNotifications}
          hasUnreadMessages={hasUnreadMessages}
          hasNewBusinessSignup={hasNewBusinessSignup}
          remindersLabel={t('reminders')}
          notificationsLabel={t('notifications')}
          messagesLabel={t('messages_new')}
          searchBusinessesLabel={t('search_businesses')}
          myPetsLabel={t('my_pets')}
          blogAndGuidesLabel={t('blog_and_guides')}
          tutorialVideosLabel={t('tutorial_videos_new')}
        />

        {invite?.status === 'pending' && (
          <InviteBanner
            title={t('invite_banner_title')}
            businessName={invite.businessName ?? ''}
            acceptLabel={t('accept')}
            declineLabel={t('decline')}
            onAccept={acceptInvite}
            onDecline={declineInvite}
          />
        )}

        <EmployeeToolsSection
          locale={locale}
          isEmployee={isEmployee}
          title={t('employee_tools')}
          upcomingReservationsLabel={t('upcoming_reservations')}
          dogsOnPropertyLabel={t('dogs_on_property')}
          employeePortalLabel={t('employee_portal')}
        />

        <div className="my-4 h-px bg-black/10" />

        <div className="flex gap-4">
          <div className="flex-1">
            <PrimaryLink href={`/${locale}/individualeditprofile`} label={t('edit_profile')} />
          </div>
          <div className="flex-1">
            <button
              type="button"
              onClick={logout}
              className="mb-2 block w-full rounded-xl bg-red-600 px-4 py-3 text-sm font-semibold text-white"
            >
              {t('logout')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function DashboardHeader({
  welcomeLabel,
  profileUrl,
  addPetPhotoLabel,
  isUploading,
  uploadingLabel,
  onFileSelected,
}: {
  welcomeLabel: string;
  profileUrl: string;
  addPetPhotoLabel: string;
  isUploading: boolean;
  uploadingLabel: string;
  onFileSelected: (file: File | null) => void;
}) {
  return (
    <>
      <h1 className="mb-4 text-center text-3xl font-bold text-[color:var(--color-accent)] sm:text-4xl">
        {welcomeLabel}
      </h1>

      <div className="mb-3 flex justify-center">
        <label className="cursor-pointer">
          <input
            type="file"
            accept=".jpg,.jpeg,.png"
            className="hidden"
            onChange={(e) => onFileSelected(e.target.files?.[0] ?? null)}
          />
          {profileUrl ? (
            <Image
              src={profileUrl}
              alt="Profile"
              width={150}
              height={150}
              unoptimized
              className="h-[150px] w-[150px] rounded-full border-2 border-gray-300 object-cover"
            />
          ) : (
            <div className="flex h-[150px] w-[150px] flex-col items-center justify-center rounded-full bg-gray-200 text-center">
              <span className="text-4xl text-gray-500">+</span>
              <span className="mt-2 px-4 text-xs font-bold text-[color:var(--color-accent)]">
                {addPetPhotoLabel}
              </span>
            </div>
          )}
        </label>
      </div>

      {isUploading && <p className="mb-3 text-center text-sm text-gray-600">{uploadingLabel}</p>}

      <div className="mb-4 h-px bg-black/10" />
    </>
  );
}

function DashboardMainActions({
  locale,
  reminderCount,
  hasUnreadNotifications,
  hasUnreadMessages,
  hasNewBusinessSignup,
  remindersLabel,
  notificationsLabel,
  messagesLabel,
  searchBusinessesLabel,
  myPetsLabel,
  blogAndGuidesLabel,
  tutorialVideosLabel,
}: {
  locale: string;
  reminderCount: number;
  hasUnreadNotifications: boolean;
  hasUnreadMessages: boolean;
  hasNewBusinessSignup: boolean;
  remindersLabel: string;
  notificationsLabel: string;
  messagesLabel: string;
  searchBusinessesLabel: string;
  myPetsLabel: string;
  blogAndGuidesLabel: string;
  tutorialVideosLabel: string;
}) {
  return (
    <>
      <div className="space-y-2">
        <BadgeLink href={`/${locale}/individualreminders`} label={remindersLabel} badge={reminderCount} />
        <DotLink
          href={`/${locale}/individualnotifications`}
          label={notificationsLabel}
          showDot={hasUnreadNotifications || hasNewBusinessSignup}
        />
        <DotLink
          href={`/${locale}/individualmessages`}
          label={messagesLabel}
          showDot={hasUnreadMessages}
        />
        <PrimaryLink href={`/${locale}/individualsearchbusinesses`} label={searchBusinessesLabel} />
        <PrimaryLink href={`/${locale}/individualmypets`} label={myPetsLabel} />
        <PrimaryLink href={`/${locale}/blog`} label={blogAndGuidesLabel} />
        <PrimaryLink href={`/${locale}/tutorialsindividuals`} label={tutorialVideosLabel} />
      </div>

      <div className="my-4 h-px bg-black/10" />
    </>
  );
}

function InviteBanner({
  title,
  businessName,
  acceptLabel,
  declineLabel,
  onAccept,
  onDecline,
}: {
  title: string;
  businessName: string;
  acceptLabel: string;
  declineLabel: string;
  onAccept: () => Promise<void>;
  onDecline: () => Promise<void>;
}) {
  return (
    <div className="mb-4 rounded-xl bg-yellow-100/60 px-4 py-4 text-center">
      <p className="font-semibold">{title}</p>
      <p className="text-sm text-gray-600">{businessName}</p>
      <div className="mt-3 flex justify-center gap-4">
        <button
          type="button"
          onClick={() => void onAccept()}
          className="rounded-lg bg-[#2c4a30] px-4 py-2 text-sm font-semibold text-white hover:opacity-90"
        >
          {acceptLabel}
        </button>
        <button
          type="button"
          onClick={() => void onDecline()}
          className="rounded-lg border border-red-500 px-4 py-2 text-sm font-semibold text-red-600"
        >
          {declineLabel}
        </button>
      </div>
    </div>
  );
}

function EmployeeToolsSection({
  locale,
  isEmployee,
  title,
  upcomingReservationsLabel,
  dogsOnPropertyLabel,
  employeePortalLabel,
}: {
  locale: string;
  isEmployee: boolean;
  title: string;
  upcomingReservationsLabel: string;
  dogsOnPropertyLabel: string;
  employeePortalLabel: string;
}) {
  return (
    <>
      <div className="my-4 h-px bg-black/10" />

      {isEmployee && (
        <div className="space-y-2">
          <h2 className="text-center text-lg font-semibold text-black">{title}</h2>
          <PrimaryLink
            href={`/${locale}/individualemployeeupcomingreservations`}
            label={upcomingReservationsLabel}
          />
          <PrimaryLink
            href={`/${locale}/individualemployeedogsonproperty`}
            label={dogsOnPropertyLabel}
          />
          <PrimaryLink
            href={`/${locale}/individualemployeeportaldashboard`}
            label={employeePortalLabel}
          />
        </div>
      )}
    </>
  );
}

function PrimaryLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="mb-2 block w-full rounded-xl bg-[#2c4a30] px-4 py-3 text-center text-sm font-semibold text-white hover:opacity-90"
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
      <PrimaryLink href={href} label={label} />
      {badge > 0 && (
        <span className="absolute right-3 top-2 min-w-[22px] rounded-full bg-white px-2 py-1 text-center text-[10px] leading-none text-red-600">
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
      <PrimaryLink href={href} label={label} />
      {showDot && <span className="absolute right-4 top-3 h-3 w-3 rounded-full bg-red-600" />}
    </div>
  );
}
