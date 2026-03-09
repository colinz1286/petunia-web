'use client';

// NOTE: This web page is intended to mirror the iOS view at
// .local-only/ios-real-reference/IndividualEmployeePortalCompanyPoliciesView.swift.
// Keep this as a simple placeholder page until the full feature is built.
import { useTranslations } from 'next-intl';

export default function IndividualEmployeePortalCompanyPoliciesPage() {
    const t = useTranslations('individualEmployeePortalCompanyPolicies');

    return (
        <div className="min-h-screen bg-[color:var(--color-background)] px-4 py-8 text-[color:var(--color-foreground)]">
            <div className="mx-auto flex min-h-[70vh] w-full max-w-md items-center justify-center">
                <div className="space-y-5 text-center">
                    <h1 className="text-4xl font-bold text-[color:var(--color-accent)]">
                        {t('title')}
                    </h1>

                    <p className="text-base text-gray-600">
                        {t('description')}
                    </p>

                    <p className="text-lg font-semibold text-gray-500">
                        {t('coming_soon')}
                    </p>
                </div>
            </div>
        </div>
    );
}
