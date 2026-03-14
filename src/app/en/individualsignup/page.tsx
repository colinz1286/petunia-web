'use client';

// NOTE: Mirrors the iOS individual sign-up flow entered from
// `.local-only/ios-real-reference/CreateAccountView.swift` and routed to `IndividualSignUpView`
// (that Swift source is referenced by iOS but is not present in this local reference folder).

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useLocale } from 'next-intl'; // ✅ Added to access current locale
import {
  getAuth,
  createUserWithEmailAndPassword,
} from 'firebase/auth';

import {
  getFunctions,
  httpsCallable,
} from 'firebase/functions';

import {
  getFirestore,
  doc,
  setDoc,
  Timestamp,
} from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import { executeRecaptchaEnterpriseAction } from '@/lib/recaptchaEnterprise';
import AddressAutocompleteSearch from '@/components/AddressAutocompleteSearch';
import { formatUsPhoneNumber, formatUsZipCode, usStates } from '@/lib/signUpFormUtils';

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
const functions = getFunctions(app, 'us-central1');

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
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (field: string, value: string) => {
    if (field === 'phoneNumber' || field === 'emergencyPhoneNumber') {
      value = formatUsPhoneNumber(value);
    }
    if (field === 'zipCode') {
      value = formatUsZipCode(value);
    }
    setForm(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async () => {
    if (isSubmitting) return;

    setError(null);
    setSuccess(null);

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
      setIsSubmitting(true);

      const recaptchaToken = await executeRecaptchaEnterpriseAction('INDIVIDUAL_SIGNUP');

      const userCred = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCred.user;

      // 🔐 Send SES verification email (shared with iOS + Business)
      const sendVerify = httpsCallable(functions, 'sendEmailVerificationSES');
      await sendVerify({
        email: email.toLowerCase(),
        uid: user.uid,
        recaptchaToken,
        recaptchaAction: 'INDIVIDUAL_SIGNUP',
      });

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

      // ✅ Match iOS + Business behavior
      setSuccess('Verification email sent. Please check your inbox.');
      router.push(`/${locale}/loginsignup`);

    } catch (err) {
      if (
        typeof err === 'object' &&
        err !== null &&
        'code' in err &&
        typeof (err as { code: unknown }).code === 'string'
      ) {
        const code = (err as { code: string }).code;
        if (code === 'auth/email-already-in-use') {
          setError('An account with this email already exists. Please log in or reset your password.');
        } else {
          setError('An unexpected authentication error occurred.');
        }
      } else if (err instanceof Error) {
        if (err.message.toLowerCase().includes('recaptcha')) {
          setError('Security check failed. Please refresh and try again.');
        } else {
          setError(err.message);
        }
      } else {
        setError('Something went wrong.');
      }
    } finally {
      setIsSubmitting(false);
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
          <input type="tel" inputMode="tel" autoComplete="tel" placeholder="Phone Number" value={form.phoneNumber} onChange={e => handleChange('phoneNumber', e.target.value)} className="w-full px-4 py-2 border-2 border-gray-300 rounded text-sm outline-none bg-white" />
        </div>

        {/* Address */}
        <h2 className="text-lg font-semibold mt-8">Address</h2>
        <div className="space-y-4">
          <AddressAutocompleteSearch
            id="individual-address-search"
            label="Find Your Address"
            locale={locale}
            placeholder="Start typing your street address"
            onAddressSelected={({ street, city, state, zipCode }) => {
              handleChange('streetAddress', street);
              handleChange('city', city);
              handleChange('state', state);
              handleChange('zipCode', zipCode);
            }}
          />
          <input type="text" placeholder="Street Address" value={form.streetAddress} onChange={e => handleChange('streetAddress', e.target.value)} autoComplete="section-personal street-address" className="w-full px-4 py-2 border-2 border-gray-300 rounded text-sm outline-none bg-white" />
          <input type="text" placeholder="City" value={form.city} onChange={e => handleChange('city', e.target.value)} autoComplete="section-personal address-level2" className="w-full px-4 py-2 border-2 border-gray-300 rounded text-sm outline-none bg-white" />
          <select value={form.state} onChange={e => handleChange('state', e.target.value)} autoComplete="section-personal address-level1" className="w-full px-4 py-2 border-2 border-gray-300 rounded text-sm outline-none bg-white">
            <option value="">State</option>
            {usStates.map(state => (
              <option key={state} value={state}>{state}</option>
            ))}
          </select>
          <input type="text" inputMode="numeric" placeholder="Zip Code" value={form.zipCode} onChange={e => handleChange('zipCode', e.target.value)} autoComplete="section-personal postal-code" className="w-full px-4 py-2 border-2 border-gray-300 rounded text-sm outline-none bg-white" />
        </div>

        {/* Emergency Contact */}
        <h2 className="text-lg font-semibold mt-8">Emergency Contact</h2>
        <div className="space-y-4">
          <input type="text" placeholder="First Name" value={form.emergencyFirstName} onChange={e => handleChange('emergencyFirstName', e.target.value)} className="w-full px-4 py-2 border-2 border-gray-300 rounded text-sm outline-none bg-white" />
          <input type="text" placeholder="Last Name" value={form.emergencyLastName} onChange={e => handleChange('emergencyLastName', e.target.value)} className="w-full px-4 py-2 border-2 border-gray-300 rounded text-sm outline-none bg-white" />
          <input type="tel" inputMode="tel" autoComplete="tel" placeholder="Phone Number" value={form.emergencyPhoneNumber} onChange={e => handleChange('emergencyPhoneNumber', e.target.value)} className="w-full px-4 py-2 border-2 border-gray-300 rounded text-sm outline-none bg-white" />
        </div>

        {error && <p className="text-red-600 text-sm text-center">{error}</p>}
        {success && <p className="text-green-600 text-sm text-center">{success}</p>}

        <button
          onClick={handleSubmit}
          disabled={isSubmitting}
          className="w-full bg-[#2c4a30] text-white py-3 rounded hover:bg-[#1e3624] transition mt-6 text-sm disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isSubmitting ? 'Submitting...' : 'Create Account'}
        </button>
      </div>
    </main>
  );
}
