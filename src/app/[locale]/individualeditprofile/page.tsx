'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  getAuth,
  deleteUser,
  onAuthStateChanged,
} from 'firebase/auth';
import {
  getFirestore,
  doc,
  getDoc,
  updateDoc,
  deleteDoc,
} from 'firebase/firestore';
import {
  getStorage,
  ref,
  listAll,
  deleteObject,
} from 'firebase/storage';
import {
  getDatabase,
  ref as dbRef,
  remove,
} from 'firebase/database';
import { initializeApp } from 'firebase/app';
import { useTranslations } from 'next-intl';

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
const rtdb = getDatabase(app);

type UserProfileUpdate = {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  address: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
  };
  emergencyContact: {
    firstName: string;
    lastName: string;
    phoneNumber: string;
  };
};

function getErrorMessage(err: unknown): string {
  return err instanceof Error ? err.message : 'Unknown error';
}

export default function EditProfilePage() {
  const t = useTranslations('individualEditProfile');
  const router = useRouter();

  const [userId, setUserId] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(true);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zip, setZip] = useState('');

  const [emergencyFirst, setEmergencyFirst] = useState('');
  const [emergencyLast, setEmergencyLast] = useState('');
  const [emergencyPhone, setEmergencyPhone] = useState('');

  const [confirmSave, setConfirmSave] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [finalDelete, setFinalDelete] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  const US_STATES = [
    'AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI',
    'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT',
    'VT', 'VA', 'WA', 'WV', 'WI', 'WY'
  ];

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (user) => {
      if (!user) {
        router.push('/en/loginsignup');
        return;
      }

      setUserId(user.uid);
      setEmail(user.email ?? '');
      await loadProfile(user.uid);
    });

    return () => unsub();
  }, []);

  const loadProfile = async (uid: string) => {
    const snap = await getDoc(doc(db, 'users', uid));
    const data = snap.data();
    if (!data) return;

    setFirstName(data.firstName || '');
    setLastName(data.lastName || '');
    setPhone(data.phoneNumber || '');

    const address = data.address || {};
    setStreet(address.street || '');
    setCity(address.city || '');
    setState(address.state || '');
    setZip(address.zipCode || '');

    const emergency = data.emergencyContact || {};
    setEmergencyFirst(emergency.firstName || '');
    setEmergencyLast(emergency.lastName || '');
    setEmergencyPhone(emergency.phoneNumber || '');

    setLoading(false);
  };

  const handleSave = async () => {
    const update: UserProfileUpdate = {
      firstName,
      lastName,
      phoneNumber: phone,
      address: {
        street,
        city,
        state,
        zipCode: zip,
      },
      emergencyContact: {
        firstName: emergencyFirst,
        lastName: emergencyLast,
        phoneNumber: emergencyPhone,
      },
    };

    try {
      await updateDoc(doc(db, 'users', userId), update);
      setAlertMessage(t('profile_update_success'));
    } catch (err: unknown) {
      setAlertMessage(`${t('profile_update_failure')} ${getErrorMessage(err)}`);
    }
  };

  const handleDeleteAccount = async () => {
    try {
      // 1. Delete Firestore doc
      await deleteDoc(doc(db, 'users', userId));

      // 2. Delete Storage files
      await deleteObject(ref(storage, `userProfileImages/${userId}/profile.jpg`));
      const vaccineFolder = ref(storage, `vaccineRecords/${userId}`);
      const list = await listAll(vaccineFolder);
      await Promise.all(list.items.map(item => deleteObject(item)));

      // 3. Delete Realtime DB data
      await remove(dbRef(rtdb, `checkIns/${userId}`));
      await remove(dbRef(rtdb, `liveScheduleUpdates/${userId}`));

      // 4. Delete Firebase Auth user
      const user = auth.currentUser;
      if (user) await deleteUser(user);

      setAlertMessage(t('account_delete_success'));
      setTimeout(() => router.push('/en/loginsignup'), 1500);
    } catch (err: unknown) {
      setAlertMessage(`${t('account_delete_failure')} ${getErrorMessage(err)}`);
    }
  };

  return (
    <div className="min-h-screen px-4 py-8 w-full max-w-md mx-auto text-[color:var(--color-foreground)] bg-[color:var(--color-background)]">

      {/* Back to Dashboard Button */}
      <button
        onClick={() => router.push('/individualdashboard')}
        className="mb-6 text-sm text-[color:var(--color-accent)] underline hover:text-[color:var(--color-accent)]"
      >
        ← {t('back_to_dashboard', { defaultValue: 'Back to Dashboard' })}
      </button>

      <h1 className="text-3xl font-bold text-[color:var(--color-accent)] mb-6 text-center">
        {t('edit_profile_title')}
      </h1>

      {loading ? (
        <p className="text-center text-sm text-gray-500">{t('loading')}</p>
      ) : (
        <>
          <Field label={t('first_name')} value={firstName} onChange={setFirstName} />
          <Field label={t('last_name')} value={lastName} onChange={setLastName} />
          <Field label={t('email')} value={email} disabled />
          <Field label={t('phone_number')} value={phone} onChange={setPhone} />
          <Field label={t('street_address')} value={street} onChange={setStreet} />
          <Field label={t('city')} value={city} onChange={setCity} />

          <div className="mb-4">
            <label className="block text-sm font-semibold mb-1">{t('state')}</label>
            <select
              className="w-full border px-3 py-2 rounded text-sm"
              value={state}
              onChange={(e) => setState(e.target.value)}
            >
              {US_STATES.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </div>

          <Field label={t('zip_code')} value={zip} onChange={setZip} />

          <h2 className="text-lg font-semibold text-[color:var(--color-accent)] mt-6 mb-2">
            {t('emergency_contact')}
          </h2>
          <Field label={t('first_name')} value={emergencyFirst} onChange={setEmergencyFirst} />
          <Field label={t('last_name')} value={emergencyLast} onChange={setEmergencyLast} />
          <Field label={t('phone_number')} value={emergencyPhone} onChange={setEmergencyPhone} />

          {/* Save Button */}
          <button
            onClick={() => setConfirmSave(true)}
            className="block w-full bg-[#2c4a30] text-white px-4 py-2 rounded mt-6 text-sm"
          >
            {t('save_changes_button')}
          </button>

          {/* Delete Button */}
          <button
            onClick={() => setConfirmDelete(true)}
            className="block w-full bg-red-600 text-white px-4 py-2 rounded mt-2 text-sm"
          >
            {t('delete_account_button')}
          </button>
        </>
      )}

      {/* Confirm Save Modal */}
      {confirmSave && (
        <ConfirmModal
          title={t('confirm_save_title')}
          onConfirm={() => { setConfirmSave(false); handleSave(); }}
          onCancel={() => setConfirmSave(false)}
        />
      )}

      {/* Confirm Delete Modal */}
      {confirmDelete && (
        <ConfirmModal
          title={t('confirm_delete_title')}
          onConfirm={() => { setConfirmDelete(false); setFinalDelete(true); }}
          onCancel={() => setConfirmDelete(false)}
        />
      )}

      {/* Final Confirm Delete */}
      {finalDelete && (
        <ConfirmModal
          title={t('final_delete_warning')}
          onConfirm={() => { setFinalDelete(false); handleDeleteAccount(); }}
          onCancel={() => setFinalDelete(false)}
        />
      )}

      {/* Alert Message */}
      {alertMessage && (
        <div className="mt-6 bg-yellow-100 text-center p-3 rounded text-sm">
          {alertMessage}
        </div>
      )}
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  disabled = false,
}: {
  label: string;
  value: string;
  onChange?: (val: string) => void;
  disabled?: boolean;
}) {
  return (
    <div className="mb-4">
      <label className="block text-sm font-semibold mb-1">{label}</label>
      <input
        type="text"
        className="w-full border px-4 py-2 rounded text-sm disabled:bg-gray-100"
        value={value}
        disabled={disabled}
        onChange={(e) => onChange?.(e.target.value)}
      />
    </div>
  );
}

function ConfirmModal({
  title,
  onConfirm,
  onCancel,
}: {
  title: string;
  onConfirm: () => void;
  onCancel: () => void;
}) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
      <div className="bg-white rounded p-6 shadow max-w-sm w-full">
        <p className="mb-4 text-center font-semibold">{title}</p>
        <div className="flex justify-center gap-4">
          <button onClick={onConfirm} className="bg-red-600 text-white px-4 py-2 rounded">
            Yes
          </button>
          <button onClick={onCancel} className="bg-gray-400 text-white px-4 py-2 rounded">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
