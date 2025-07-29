'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  sendEmailVerification
} from 'firebase/auth';
import {
  getFirestore,
  setDoc,
  doc,
  Timestamp
} from 'firebase/firestore';

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

export default function BusinessSignUpPage() {
  const locale = useLocale();
  const t = useTranslations('businessSignUp');
  const router = useRouter();

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
    businessName: '',
    businessStreet: '',
    businessCity: '',
    businessState: '',
    businessZip: '',
    businessPhone: '',
    businessWebsite: '',
    businessType: 'Boarding/Daycare',
  });

  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const businessTypes = [
    'Boarding/Daycare',
    'Pet Sitter/Dog Walker',
    'Groomer',
    'Shelter/Rescue',
    'Veterinary Clinic',
    'Pet Trainer',
    'Pet Retail Store'
  ];

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async () => {
    const {
      firstName, lastName, email, password, confirmPassword, phoneNumber,
      streetAddress, city, state, zipCode,
      businessName, businessStreet, businessCity, businessState, businessZip,
      businessPhone, businessWebsite, businessType
    } = form;

    if (
      !firstName || !lastName || !email || !password || !confirmPassword || !phoneNumber ||
      !streetAddress || !city || !state || !zipCode ||
      !businessName || !businessStreet || !businessCity || !businessState || !businessZip || !businessPhone
    ) {
      setError('Please fill out all required fields.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    try {
      setIsSubmitting(true);
      setError(null);
      const userCred = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCred.user;

      await sendEmailVerification(user);

      const businessDoc = {
        ownerId: user.uid,
        accountType: 'Business',
        firstName,
        lastName,
        email: email.toLowerCase(),
        phoneNumber,
        personalAddress: {
          street: streetAddress,
          city,
          state,
          zipCode
        },
        businessDetails: {
          name: businessName,
          type: businessType,
          phone: businessPhone,
          website: businessWebsite,
          address: {
            street: businessStreet,
            city: businessCity,
            state: businessState,
            zipCode: businessZip
          }
        },
        createdAt: Timestamp.now()
      };

      await setDoc(doc(db, 'businesses', user.uid), businessDoc);

      setSuccess('Account created! Please verify your email.');
      router.push(`/${locale}/loginsignup`);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
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
        <h1 className="text-3xl font-bold text-center">Create Business Account</h1>

        {/* Owner Info */}
        <div className="space-y-4">
          <input type="text" placeholder="First Name" value={form.firstName} onChange={e => handleChange('firstName', e.target.value)} className={input} />
          <input type="text" placeholder="Last Name" value={form.lastName} onChange={e => handleChange('lastName', e.target.value)} className={input} />
          <input type="email" placeholder="Email" value={form.email} onChange={e => handleChange('email', e.target.value)} className={input} />
          <input type="password" placeholder="Password" value={form.password} onChange={e => handleChange('password', e.target.value)} className={input} />
          <input type="password" placeholder="Confirm Password" value={form.confirmPassword} onChange={e => handleChange('confirmPassword', e.target.value)} className={input} />
          <input type="text" placeholder="Phone Number" value={form.phoneNumber} onChange={e => handleChange('phoneNumber', e.target.value)} className={input} />
        </div>

        {/* Personal Address */}
        <h2 className="text-lg font-semibold mt-8">Your Address</h2>
        <div className="space-y-4">
          <input type="text" placeholder="Street Address" value={form.streetAddress} onChange={e => handleChange('streetAddress', e.target.value)} className={input} />
          <input type="text" placeholder="City" value={form.city} onChange={e => handleChange('city', e.target.value)} className={input} />
          <input type="text" placeholder="State" value={form.state} onChange={e => handleChange('state', e.target.value)} className={input} />
          <input type="text" placeholder="Zip Code" value={form.zipCode} onChange={e => handleChange('zipCode', e.target.value.slice(0, 5))} className={input} />
        </div>

        {/* Business Info */}
        <h2 className="text-lg font-semibold mt-8">Business Information</h2>
        <div className="space-y-4">
          <input type="text" placeholder="Business Name" value={form.businessName} onChange={e => handleChange('businessName', e.target.value)} className={input} />
          <input type="text" placeholder="Street Address" value={form.businessStreet} onChange={e => handleChange('businessStreet', e.target.value)} className={input} />
          <input type="text" placeholder="City" value={form.businessCity} onChange={e => handleChange('businessCity', e.target.value)} className={input} />
          <input type="text" placeholder="State" value={form.businessState} onChange={e => handleChange('businessState', e.target.value)} className={input} />
          <input type="text" placeholder="Zip Code" value={form.businessZip} onChange={e => handleChange('businessZip', e.target.value.slice(0, 5))} className={input} />
          <input type="text" placeholder="Phone Number" value={form.businessPhone} onChange={e => handleChange('businessPhone', e.target.value)} className={input} />
          <input type="url" placeholder="Website (optional)" value={form.businessWebsite} onChange={e => handleChange('businessWebsite', e.target.value)} className={input} />
        </div>

        {/* Business Type */}
        <h2 className="text-lg font-semibold mt-8">Select Business Type</h2>
        <div className="space-y-3">
          {businessTypes.map(type => (
            <button
              key={type}
              type="button"
              className={`w-full px-4 py-3 rounded border-2 text-sm ${form.businessType === type
                ? 'bg-[#2c4a30] text-white border-[#2c4a30]'
                : 'bg-white text-[#2c4a30] border-gray-400'
                }`}
              onClick={() => handleChange('businessType', type)}
            >
              {type}
            </button>
          ))}
        </div>

        {error && <p className="text-red-600 text-sm text-center">{error}</p>}
        {success && <p className="text-green-600 text-sm text-center">{success}</p>}

        <button
          onClick={handleSubmit}
          disabled={isSubmitting}
          className="w-full bg-[#2c4a30] text-white py-3 rounded hover:bg-[#1e3624] transition mt-6 text-sm"
        >
          {isSubmitting ? 'Submitting...' : 'Create Account'}
        </button>
      </div>
    </main>
  );
}

const input = "w-full px-4 py-2 border-2 border-gray-300 rounded outline-none bg-white";
