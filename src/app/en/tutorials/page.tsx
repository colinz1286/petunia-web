'use client';

import { useLocale } from 'next-intl';
import Link from 'next/link';

export default function TutorialsPage() {
  const locale = useLocale();

  return (
    <main className="w-full min-h-[70vh] flex flex-col items-center bg-[#f6efe4] text-[#2c4a30] px-4 py-8 sm:py-12">
      <section className="w-full max-w-xl text-center">
        <h1 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-5">Petunia Tutorials</h1>

        <p className="text-sm sm:text-base text-[#2c4a30]/80 mb-6 sm:mb-8 leading-relaxed">
          Select the tutorials section below to continue. This page helps route you to the
          right tutorial library.
        </p>

        <div className="rounded-xl border border-[#d9cfc2] bg-white p-4 sm:p-6 shadow-sm">
          <p className="text-xs sm:text-sm text-[#2c4a30]/70 mb-4">
            Available tutorial group
          </p>
          <Link
            href={`/${locale}/tutorialsindividuals`}
            className="w-full inline-flex items-center justify-center text-center bg-[#2c4a30] text-white px-4 py-4 rounded-lg font-semibold text-base hover:bg-[#3a5c3d] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2c4a30] focus-visible:ring-offset-2"
          >
            Individual Pet Owners Tutorials
          </Link>
        </div>
      </section>
    </main>
  );
}
