'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useLocale } from 'next-intl'; // ✅ Added to access current locale
import {
  getAuth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from 'firebase/auth';
import {
  getFirestore,
  doc,
  setDoc,
  Timestamp,
} from 'firebase/firestore';
import { initializeApp } from 'firebase/app';

// ✅ Inline Firebase config for local use (consistent with other pages)
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

export default function IndividualSignUpPage() {
  const router = useRouter();
  const locale = useLocale(); // ✅ Get the current locale

  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phoneNumber: '',
    streetAddress: '',
    city: '',
    state: '',
    zipCode: '',
    emergencyFirstName: '',
    emergencyLastName: '',
    emergencyPhoneNumber: '',
  });

  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const usStates = [
    'AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS',
    'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY',
    'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV',
    'WI', 'WY'
  ];

  const formatPhone = (input: string) => {
    const digits = input.replace(/\D/g, '').slice(0, 10);
    const match = digits.match(/^(\d{0,3})(\d{0,3})(\d{0,4})$/);
    if (!match) return digits;
    return [
      match[1] ? `(${match[1]}` : '',
      match[2] ? `)${match[2]}` : '',
      match[3] ? `-${match[3]}` : ''
    ].join('');
  };

  const handleChange = (field: string, value: string) => {
    if (field === 'phoneNumber' || field === 'emergencyPhoneNumber') {
      value = formatPhone(value);
    }
    if (field === 'zipCode') {
      value = value.replace(/\D/g, '').slice(0, 5);
    }
    setForm(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async () => {
    const {
      firstName, lastName, email, password, confirmPassword,
      phoneNumber, streetAddress, city, state, zipCode,
      emergencyFirstName, emergencyLastName, emergencyPhoneNumber
    } = form;

    if (!firstName || !lastName || !email || !password || !confirmPassword ||
      !phoneNumber || !streetAddress || !city || !state || !zipCode ||
      !emergencyFirstName || !emergencyLastName || !emergencyPhoneNumber) {
      setError('Please fill out all fields.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    try {
      const userCred = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCred.user;

      await sendEmailVerification(user);

      const userDoc = {
        userId: user.uid,
        accountType: 'Individual',
        firstName,
        lastName,
        email: email.toLowerCase(),
        phoneNumber,
        address: {
          street: streetAddress,
          city,
          state,
          zipCode
        },
        emergencyContact: {
          firstName: emergencyFirstName,
          lastName: emergencyLastName,
          phoneNumber: emergencyPhoneNumber
        },
        createdAt: Timestamp.now()
      };

      await setDoc(doc(db, 'users', user.uid), userDoc);

      setSuccess('Account created! Please verify your email.');
      router.push(`/${locale}/loginsignup`); // ✅ Correct redirect using locale
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('Something went wrong.');
      }
    }
  };

  return (
    <main className="min-h-screen bg-[#f6efe4] text-[#2c4a30] font-sans flex flex-col items-center px-4 py-10">
      <div className="w-full max-w-md space-y-6 px-2 sm:px-4">
        <h1 className="text-3xl font-bold text-center">Create Individual Account</h1>

        {/* Personal Info */}
        <div className="space-y-4">
          <input type="text" placeholder="First Name" value={form.firstName} onChange={e => handleChange('firstName', e.target.value)} className="w-full px-4 py-2 border-2 border-gray-300 rounded text-sm outline-none bg-white" />
          <input type="text" placeholder="Last Name" value={form.lastName} onChange={e => handleChange('lastName', e.target.value)} className="w-full px-4 py-2 border-2 border-gray-300 rounded text-sm outline-none bg-white" />
          <input type="email" placeholder="Email" value={form.email} onChange={e => handleChange('email', e.target.value)} className="w-full px-4 py-2 border-2 border-gray-300 rounded text-sm outline-none bg-white" />
          <input type="password" placeholder="Password" value={form.password} onChange={e => handleChange('password', e.target.value)} className="w-full px-4 py-2 border-2 border-gray-300 rounded text-sm outline-none bg-white" />
          <input type="password" placeholder="Confirm Password" value={form.confirmPassword} onChange={e => handleChange('confirmPassword', e.target.value)} className="w-full px-4 py-2 border-2 border-gray-300 rounded text-sm outline-none bg-white" />
          <input type="text" placeholder="Phone Number" value={form.phoneNumber} onChange={e => handleChange('phoneNumber', e.target.value)} className="w-full px-4 py-2 border-2 border-gray-300 rounded text-sm outline-none bg-white" />
        </div>

        {/* Address */}
        <h2 className="text-lg font-semibold mt-8">Address</h2>
        <div className="space-y-4">
          <input type="text" placeholder="Street Address" value={form.streetAddress} onChange={e => handleChange('streetAddress', e.target.value)} className="w-full px-4 py-2 border-2 border-gray-300 rounded text-sm outline-none bg-white" />
          <input type="text" placeholder="City" value={form.city} onChange={e => handleChange('city', e.target.value)} className="w-full px-4 py-2 border-2 border-gray-300 rounded text-sm outline-none bg-white" />
          <select value={form.state} onChange={e => handleChange('state', e.target.value)} className="w-full px-4 py-2 border-2 border-gray-300 rounded text-sm outline-none bg-white">
            <option value="">State</option>
            {usStates.map(state => (
              <option key={state} value={state}>{state}</option>
            ))}
          </select>
          <input type="text" placeholder="Zip Code" value={form.zipCode} onChange={e => handleChange('zipCode', e.target.value)} className="w-full px-4 py-2 border-2 border-gray-300 rounded text-sm outline-none bg-white" />
        </div>

        {/* Emergency Contact */}
        <h2 className="text-lg font-semibold mt-8">Emergency Contact</h2>
        <div className="space-y-4">
          <input type="text" placeholder="First Name" value={form.emergencyFirstName} onChange={e => handleChange('emergencyFirstName', e.target.value)} className="w-full px-4 py-2 border-2 border-gray-300 rounded text-sm outline-none bg-white" />
          <input type="text" placeholder="Last Name" value={form.emergencyLastName} onChange={e => handleChange('emergencyLastName', e.target.value)} className="w-full px-4 py-2 border-2 border-gray-300 rounded text-sm outline-none bg-white" />
          <input type="text" placeholder="Phone Number" value={form.emergencyPhoneNumber} onChange={e => handleChange('emergencyPhoneNumber', e.target.value)} className="w-full px-4 py-2 border-2 border-gray-300 rounded text-sm outline-none bg-white" />
        </div>

        {error && <p className="text-red-600 text-sm text-center">{error}</p>}
        {success && <p className="text-green-600 text-sm text-center">{success}</p>}

        <button onClick={handleSubmit} className="w-full bg-[#2c4a30] text-white py-3 rounded hover:bg-[#1e3624] transition mt-6 text-sm">
          Create Account
        </button>
      </div>
    </main>
  );
}
