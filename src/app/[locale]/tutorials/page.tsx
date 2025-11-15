'use client';

import { useLocale } from 'next-intl';
import Link from 'next/link';

export default function TutorialsPage() {
  const locale = useLocale();

  return (
    <div className="w-full flex flex-col items-center bg-[#f6efe4] text-[#2c4a30] px-4 py-10">
      <div className="max-w-3xl w-full text-center">

        {/* Centered Heading */}
        <h1 className="text-3xl font-bold mb-6">Petunia Tutorials</h1>

        <p className="text-base mb-10">
          Please tap the correct button below to be directed to the tutorials page you are looking for.
        </p>

        <div className="flex flex-col gap-6">
          <Link
            href={`/${locale}/tutorialsindividuals`}
            className="w-full text-center bg-[#2c4a30] text-white py-4 rounded-lg font-semibold hover:bg-[#3a5c3d] transition"
          >
            Individual Pet Owners
          </Link>
        </div>

        <div className="h-10" />
      </div>
    </div>
  );
}
