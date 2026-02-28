'use client';

import { useRouter } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';

export default function BoardingAndDaycarePayAtCheckoutItemsPage() {
    const router = useRouter();
    const locale = useLocale();
    const t = useTranslations('boardingAndDaycarePayAtCheckoutItems');

    return (
        <div className="max-w-3xl mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-center text-[color:var(--color-accent)] mb-6">
                {t('title')}
            </h1>

            <div className="border rounded-lg p-4 mb-6 bg-white">
                <h2 className="text-xl font-semibold mb-2">{t('daycareTitle')}</h2>
                <p className="text-sm text-gray-600 mb-3">
                    {t('daycareDescription')}
                </p>

                <button
                    type="button"
                    onClick={() => router.push(`/${locale}/boardinganddaycare-payatcheckoutdaycareitems`)}
                    className="w-full text-left border rounded p-3 hover:bg-gray-50"
                >
                    <div className="flex items-center justify-between">
                        <span className="font-medium text-[color:var(--color-accent)]">
                            {t('daycareManageButton')}
                        </span>
                        <span className="text-gray-400">›</span>
                    </div>
                </button>
            </div>

            <div className="border rounded-lg p-4 mb-6 bg-white">
                <h2 className="text-xl font-semibold mb-2">{t('boardingTitle')}</h2>
                <p className="text-sm text-gray-600">
                    {t('boardingDescription')}
                </p>
            </div>

            <div className="border rounded-lg p-4 bg-white">
                <h2 className="text-xl font-semibold mb-2">{t('groomingTitle')}</h2>
                <p className="text-sm text-gray-600 mb-3">
                    {t('groomingDescription')}
                </p>

                <button
                    type="button"
                    onClick={() => router.push(`/${locale}/boardinganddaycare-payatcheckoutgroomingitems`)}
                    className="w-full text-left border rounded p-3 hover:bg-gray-50"
                >
                    <div className="flex items-center justify-between">
                        <span className="font-medium text-[color:var(--color-accent)]">
                            {t('groomingManageButton')}
                        </span>
                        <span className="text-gray-400">›</span>
                    </div>
                </button>
            </div>
        </div>
    );
}
