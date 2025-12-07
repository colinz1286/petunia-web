'use client';

import React, { useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';

export default function BreederSubmittedContractsPage() {
  const router = useRouter();
  const locale = useLocale();
  const t = useTranslations('breederSubmittedContracts');

  const goBack = useCallback(() => {
    router.push(`/${locale}/breederapplicationsandcontracts`);
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
        <h1 className="text-center text-xl font-bold text-[color:var(--color-accent)]">
          {t('submitted_contracts_title')}
        </h1>
        <div className="w-[68px]" /> {/* spacer */}
      </div>

      {/* Coming Soon Placeholder */}
      <div className="flex h-[60vh] items-center justify-center">
        <p className="text-center text-lg font-semibold text-[color:var(--color-accent)]">
          {t('submitted_contracts_feature_coming_soon')}
        </p>
      </div>
    </main>
  );
}
