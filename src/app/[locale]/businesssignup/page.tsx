'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useLocale } from 'next-intl';
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
import { getFunctions, httpsCallable } from 'firebase/functions';

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
const functions = getFunctions(app);

export default function BusinessSignUpPage() {
  const locale = useLocale();
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
    // ⬇️ must be chosen (no default)
    businessType: '',
  });

  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Mirror iOS: enable Boarding/Daycare and Breeder
  const businessTypes = [
    'Boarding/Daycare',
    'Breeder',
    'Pet Sitter/Dog Walker',
    'Groomer',
    'Shelter/Rescue',
    'Veterinary Clinic',
    'Pet Trainer',
    'Pet Retail Store'
  ];
  const enabledTypes = new Set(['Boarding/Daycare']);

  const handleChange = (field: string, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  // Helpers
  const digitsOnly = (s: string) => s.replace(/\D/g, '');
  const isValidEmail = (s: string) =>
    /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(s);
  const normalizeUrl = (s: string) => {
    const t = s.trim();
    if (!t) return '';
    if (t.startsWith('http://') || t.startsWith('https://')) return t;
    return `https://${t}`;
  };
  const mapAuthError = (code: string) => {
    switch (code) {
      case 'auth/email-already-in-use': return 'That email is already in use.';
      case 'auth/invalid-email': return 'Please enter a valid email address.';
      case 'auth/weak-password': return 'Password must be at least 6 characters.';
      case 'auth/network-request-failed': return 'Network error. Please try again.';
      case 'auth/too-many-requests': return 'Too many attempts. Please wait and try again.';
      default: return 'Something went wrong. Please try again.';
    }
  };

  // Submit gating (mirrors iOS checks)
  const formIsValid = (() => {
    const {
      firstName, lastName, email, password, confirmPassword, phoneNumber,
      streetAddress, city, state, zipCode,
      businessName, businessStreet, businessCity, businessState, businessZip,
      businessPhone, businessType
    } = form;

    if (
      !firstName || !lastName || !email || !password || !confirmPassword ||
      !streetAddress || !city || !state || !zipCode ||
      !businessName || !businessStreet || !businessCity || !businessState || !businessZip ||
      !businessPhone || !businessType
    ) return false;

    if (!isValidEmail(email)) return false;
    if (password.length < 6 || password !== confirmPassword) return false;
    if (digitsOnly(phoneNumber).length !== 10) return false;
    if (digitsOnly(businessPhone).length !== 10) return false;
    if (zipCode.length !== 5 || /\D/.test(zipCode)) return false;
    if (businessZip.length !== 5 || /\D/.test(businessZip)) return false;

    return true;
  })();

  const handleSubmit = async () => {
    if (!formIsValid || isSubmitting) return;

    const {
      firstName, lastName, email, password, phoneNumber,
      streetAddress, city, state, zipCode,
      businessName, businessStreet, businessCity, businessState, businessZip,
      businessPhone, businessWebsite, businessType
    } = form;

    try {
      setIsSubmitting(true);
      setError(null);

      // Create auth user
      const userCred = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCred.user;

      // Email verification
      await sendEmailVerification(user);

      // Resolve timezone via callable (safe fallback to "unverified")
      let timezone = 'unverified';
      try {
        const address = `${businessStreet}, ${businessCity}, ${businessState} ${businessZip}`;
        const getTZ = httpsCallable(functions, 'getTimeZoneFromAddress');
        const res = await getTZ({ address });
        const data = (res?.data ?? {}) as { timeZone?: string };
        if (data.timeZone) timezone = data.timeZone;
      } catch {
        // swallow; keep "unverified"
      }

      // Write business doc (keep your existing schema)
      await setDoc(doc(db, 'businesses', user.uid), {
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
          website: normalizeUrl(businessWebsite),
          address: {
            street: businessStreet,
            city: businessCity,
            state: businessState,
            zipCode: businessZip
          }
        },
        // Extra fields to align with iOS without breaking current readers
        businessType,                        // flat copy
        businessAddress: {                   // flat copy for iOS compatibility
          street: businessStreet,
          city: businessCity,
          state: businessState,
          zipCode: businessZip
        },
        businessPhone,
        businessWebsite: normalizeUrl(businessWebsite),
        isVerified: false,
        timezone,
        createdAt: Timestamp.now()
      });

      // Also create users/{uid} doc (used by iOS)
      await setDoc(doc(db, 'users', user.uid), {
        userId: user.uid,
        accountType: 'Business',
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
        businessName,
        createdAt: Timestamp.now()
      });

      setSuccess(`Account created! We sent a verification email to ${email}.`);
      // brief pause so user sees the message
      setTimeout(() => router.push(`/${locale}/loginsignup`), 1600);
    } catch (err: any) {
      setError(mapAuthError(err?.code ?? 'unknown'));
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
          {businessTypes.map(type => {
            const isSelected = form.businessType === type;
            const isEnabled = enabledTypes.has(type);

            // enabled idle = green; selected = blue; disabled = white
            const base = 'w-full px-4 py-3 rounded border-2 text-sm relative transition';
            const selectedClasses = 'bg-[#2563eb] text-white border-[#2563eb]';   // blue (selected)
            const enabledIdleClasses = 'bg-[#3f6f49] text-white border-[#3f6f49]'; // green (idle)
            const disabledClasses = 'bg-white text-[#2c4a30] border-gray-400';

            const classes = isSelected
              ? selectedClasses
              : isEnabled
                ? enabledIdleClasses
                : disabledClasses;

            return (
              <button
                key={type}
                type="button"
                className={`${base} ${classes}`}
                onClick={() => {
                  if (isEnabled) {
                    handleChange('businessType', type);
                    setError(null);
                  } else {
                    setError(`🚧 ${type} coming soon`);
                  }
                }}
                aria-pressed={isSelected}
              >
                {/* centered label */}
                <span className="pointer-events-none absolute inset-0 flex items-center justify-center">
                  {type}
                </span>

                {/* right check when selected */}
                {isSelected && (
                  <span className="pointer-events-none absolute right-3 inset-y-0 flex items-center">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                        xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <circle cx="10" cy="10" r="10" fill="white" opacity="0.25"/>
                      <path d="M5 10.5l3 3 7-7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                )}

                {/* keeps height */}
                <span className="opacity-0">{type}</span>
              </button>
            );
          })}

          {!form.businessType && (
            <p className="text-xs text-[#2c4a30]/70">Please choose a business type to continue.</p>
          )}
        </div>

        {error && <p className="text-red-600 text-sm text-center">{error}</p>}
        {success && <p className="text-green-600 text-sm text-center">{success}</p>}

        <button
          onClick={handleSubmit}
          disabled={!formIsValid || isSubmitting}
          aria-disabled={!formIsValid || isSubmitting}
          className={`w-full text-white py-3 rounded transition mt-6 text-sm
            ${(!formIsValid || isSubmitting)
              ? 'bg-[#9fb5a5] cursor-not-allowed'
              : 'bg-[#2c4a30] hover:bg-[#1e3624]'}
          `}
        >
          {isSubmitting ? 'Submitting...' : 'Create Account'}
        </button>
      </div>
    </main>
  );
}

const input = "w-full px-4 py-2 border-2 border-gray-300 rounded outline-none bg-white";
