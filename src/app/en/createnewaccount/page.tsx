'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function CreateAccountPage() {
  const [selectedType, setSelectedType] = useState<'Individual' | 'Business' | null>(null);
  const router = useRouter();

  const handleContinue = () => {
    if (selectedType === 'Individual') {
      router.push('/individualsignup');
    } else if (selectedType === 'Business') {
      router.push('/businesssignup');
    }
  };

  return (
    <main className="min-h-screen bg-[#f6efe4] text-[#2c4a30] flex flex-col items-center justify-center px-4 py-12 font-sans">
      <div className="w-full max-w-md space-y-6 text-center">
        <h1 className="text-3xl font-bold">Create Your Account</h1>
        <p className="text-lg text-gray-700">Choose your account type to get started</p>

        {/* Account Type Buttons */}
        <div className="space-y-4">
          <button
            onClick={() => setSelectedType('Individual')}
            className={`w-full px-4 py-3 rounded border-2 transition ${selectedType === 'Individual'
                ? 'bg-[#2c4a30] text-white border-[#2c4a30]'
                : 'bg-white text-[#2c4a30] border-gray-400'
              }`}
          >
            Individual
          </button>

          <button
            onClick={() => setSelectedType('Business')}
            className={`w-full px-4 py-3 rounded border-2 transition ${selectedType === 'Business'
                ? 'bg-[#2c4a30] text-white border-[#2c4a30]'
                : 'bg-white text-[#2c4a30] border-gray-400'
              }`}
          >
            Business
          </button>
        </div>

        {/* Business Onboarding Notice */}
        {selectedType === 'Business' && (
          <div className="mt-6 text-left bg-white border border-gray-300 rounded-lg p-4 text-sm text-gray-700 space-y-3">
            <p className="font-semibold text-[#2c4a30]">
              Business Account Verification & Onboarding
            </p>

            <p>
              After signing up, a member of our team will contact you within 24 hours.
              Business accounts are verified manually to confirm your business name,
              address, and ownership before access is granted.
            </p>

            <p>
              Due to the level of customization available within business settings,
              all new facilities are required to complete a guided onboarding session.
              This ensures your configuration aligns properly with how your facility
              actually operates.
            </p>

            <p>
              Onboarding sessions typically take 30–45 minutes and are designed to
              prevent setup mistakes that could slow you down later.
            </p>

            <p>
              If you have questions before creating your business account,
              please <Link href="/contact" className="underline font-medium text-[#2c4a30]">contact us</Link>.
            </p>
          </div>
        )}

        {/* Continue Button */}
        {selectedType && (
          <button
            onClick={handleContinue}
            className="w-full bg-[#2c4a30] text-white py-3 rounded mt-4 hover:bg-[#1e3624] transition"
          >
            Continue
          </button>
        )}

        {/* Back Link */}
        <div className="mt-6 text-sm">
          <Link href="/loginsignup" className="underline text-[#2c4a30]">
            ← Back to Login / Sign Up
          </Link>
        </div>
      </div>
    </main>
  );
}
