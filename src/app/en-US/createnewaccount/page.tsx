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
            className={`w-full px-4 py-3 rounded border-2 transition ${
              selectedType === 'Individual'
                ? 'bg-[#2c4a30] text-white border-[#2c4a30]'
                : 'bg-white text-[#2c4a30] border-gray-400'
            }`}
          >
            Individual
          </button>

          <button
            onClick={() => setSelectedType('Business')}
            className={`w-full px-4 py-3 rounded border-2 transition ${
              selectedType === 'Business'
                ? 'bg-[#2c4a30] text-white border-[#2c4a30]'
                : 'bg-white text-[#2c4a30] border-gray-400'
            }`}
          >
            Business
          </button>
        </div>

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
