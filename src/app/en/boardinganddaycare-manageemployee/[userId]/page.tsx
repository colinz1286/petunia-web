'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { getAuth } from 'firebase/auth';
import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
  doc,
  getDoc,
  updateDoc,
  writeBatch,
} from 'firebase/firestore';
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

export default function BoardingAndDaycareManageEmployeePage() {
  const t = useTranslations('boardingAndDaycareManageIndividualEmployee');
  const router = useRouter();
  const params = useParams();
  const userId = params.userId as string;

  const [businessId, setBusinessId] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('Default');
  const [availableRoles, setAvailableRoles] = useState<string[]>([]);
  const [permissionLevel, setPermissionLevel] = useState('staff');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [emergencyContactName, setEmergencyContactName] = useState('');
  const [emergencyContactPhone, setEmergencyContactPhone] = useState('');
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  useEffect(() => {
    const load = async () => {
      const user = auth.currentUser;
      if (!user) return;

      const q = query(collection(db, 'businesses'), where('ownerId', '==', user.uid));
      const snap = await getDocs(q);
      const businessDoc = snap.docs[0];
      if (!businessDoc) return;

      const bId = businessDoc.id;
      setBusinessId(bId);

      await loadEmployeeData(bId);
      await loadRoles(bId);
    };

    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userId]);

  const loadEmployeeData = async (bId: string) => {
    const inviteQuery = query(
      collection(db, 'employeeInvites'),
      where('userId', '==', userId),
      where('businessId', '==', bId),
      where('status', '==', 'accepted')
    );

    const inviteSnap = await getDocs(inviteQuery);
    const inviteDoc = inviteSnap.docs[0];
    if (inviteDoc) {
      setRole(inviteDoc.data().role || 'Default');
      setPermissionLevel(inviteDoc.data().permissionLevel || 'staff');
    }

    const userSnap = await getDoc(doc(db, 'users', userId));
    if (!userSnap.exists()) return;

    const data = userSnap.data();
    const first = data.firstName || '';
    const last = data.lastName || '';
    setFullName(`${first} ${last}`.trim());
    setEmail(data.email || '');
    setPhoneNumber(data.phoneNumber || '');

    if (data.emergencyContact) {
      const ec = data.emergencyContact;
      setEmergencyContactName(`${ec.firstName || ''} ${ec.lastName || ''}`.trim());
      setEmergencyContactPhone(ec.phoneNumber || '');
    }
  };

  const loadRoles = async (bId: string) => {
    const rolesSnap = await getDocs(
      query(collection(db, 'businesses', bId, 'roles'))
    );
    const roles = rolesSnap.docs.map(d => d.data().name).filter(Boolean);
    setAvailableRoles(roles);
  };

  const saveRoleChange = async (newRole: string) => {
    const inviteQuery = query(
      collection(db, 'employeeInvites'),
      where('userId', '==', userId),
      where('businessId', '==', businessId),
      where('status', '==', 'accepted')
    );

    const snap = await getDocs(inviteQuery);
    const inviteDoc = snap.docs[0];
    if (!inviteDoc) return;

    await updateDoc(inviteDoc.ref, { role: newRole });
    setStatusMessage(t('role_saved_success'));
  };

  const savePermissionChange = async (level: string) => {
    const inviteQuery = query(
      collection(db, 'employeeInvites'),
      where('userId', '==', userId),
      where('businessId', '==', businessId),
      where('status', '==', 'accepted')
    );

    const snap = await getDocs(inviteQuery);
    const inviteDoc = snap.docs[0];
    if (!inviteDoc) return;

    await updateDoc(inviteDoc.ref, { permissionLevel: level });
    setStatusMessage(t('permission_saved_success'));
  };

  const removeEmployee = async () => {
    const inviteQuery = query(
      collection(db, 'employeeInvites'),
      where('userId', '==', userId),
      where('businessId', '==', businessId),
      where('status', '==', 'accepted')
    );

    const snap = await getDocs(inviteQuery);
    const inviteDoc = snap.docs[0];
    if (!inviteDoc) return;

    const batch = writeBatch(db);
    batch.delete(inviteDoc.ref);
    batch.delete(doc(db, 'businesses', businessId, 'employees', userId));
    await batch.commit();

    router.push('/en/boardinganddaycare-manageemployees');
  };

  return (
    <div className="min-h-screen bg-[color:var(--color-background)] text-[color:var(--color-foreground)] px-4 py-8">
      <div className="w-full max-w-md mx-auto space-y-4">

        <h1 className="text-3xl font-bold text-[color:var(--color-accent)]">
          {fullName || t('employee_details_title')}
        </h1>

        <Info label={t('email_label')} value={email} />
        <Info label={t('phone_number_label')} value={phoneNumber} />
        <Info label={t('emergency_contact_label')} value={emergencyContactName} />
        <Info label={t('emergency_phone_label')} value={emergencyContactPhone} />

        <Select
          label={t('role_title_label')}
          value={role}
          options={availableRoles}
          onChange={(v) => {
            setRole(v);
            saveRoleChange(v);
          }}
        />

        <Select
          label={t('permission_level_label')}
          value={permissionLevel}
          options={['viewOnly', 'staff', 'manager', 'admin']}
          onChange={(v) => {
            setPermissionLevel(v);
            savePermissionChange(v);
          }}
        />

        <button
          onClick={removeEmployee}
          className="w-full bg-red-600 text-white py-2 rounded"
        >
          {t('remove_employee_button')}
        </button>

        {statusMessage && (
          <p className="text-sm text-gray-500">{statusMessage}</p>
        )}
      </div>
    </div>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="font-semibold">{label}</p>
      <p className="text-gray-600">{value || '-'}</p>
    </div>
  );
}

function Select({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: string;
  options: string[];
  onChange: (v: string) => void;
}) {
  return (
    <div>
      <p className="font-semibold mb-1">{label}</p>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full border px-3 py-2 rounded"
      >
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}