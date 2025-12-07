'use client';

import React, { useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';

export default function BreederApplicationsAndContractsPage() {
  const router = useRouter();
  const locale = useLocale();
  const t = useTranslations('breederApplicationsAndContracts');

  const goBack = useCallback(() => {
    router.push(`/${locale}/breederdashboard`);
  }, [router, locale]);

  return (
    <main className="mx-auto w-full max-w-2xl px-4 py-6 text-[color:var(--color-foreground)]">
      {/* Header */}
      <div className="mb-8 flex items-center justify-between">
        <button
          type="button"
          onClick={goBack}
          className="rounded-xl border border-gray-300 px-3 py-1.5 text-sm font-medium hover:bg-gray-50"
        >
          ← Back
        </button>
        <h1 className="text-center text-2xl font-bold text-[color:var(--color-accent)]">
          {t('applications_contracts_title')}
        </h1>
        <div className="w-[68px]" /> {/* spacer to balance back button */}
      </div>

            {/* Buttons */}
      <div className="space-y-4">
        <button
          type="button"
          onClick={() => router.push(`/${locale}/breedersubmittedapplications`)}
          className="block w-full rounded-lg bg-[#2c4a30] px-4 py-3 text-center text-sm font-semibold text-white hover:opacity-90"
        >
          {t('submitted_adoption_applications_button')}
        </button>

        <button
          type="button"
          onClick={() => router.push(`/${locale}/breedersubmittedcontracts`)}
          className="block w-full rounded-lg bg-[#2c4a30] px-4 py-3 text-center text-sm font-semibold text-white hover:opacity-90"
        >
          {t('submitted_contracts_button')}
        </button>
      </div>
    </main>
  );
}
