'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function BoardingAndDaycareFinancialManagementPage() {
    const t = useTranslations('boardingAndDaycareFinancialManagement');

    return (
        <div className="min-h-screen bg-[color:var(--color-background)] text-[color:var(--color-foreground)] px-4 py-8">
            <div className="w-full max-w-md mx-auto">

                <h1 className="text-4xl font-bold text-[color:var(--color-accent)] text-center mb-6">
                    {t('title')}
                </h1>

                <div className="space-y-3">

                    {/* ACTIVE BUTTON */}
                    <DashboardLink
                        href="/boardinganddaycare-financialmanagement-transactions"
                        label={t('transactions_and_refunds')}
                    />

                    {/* Coming Soon Buttons */}
                    <DisabledButton label={t('payouts_bank_transfers')} />
                    <DisabledButton label={t('revenue_overview')} />
                    <DisabledButton label={t('expenses')} />
                    <DisabledButton label={t('profit_and_loss')} />
                    <DisabledButton label={t('cash_flow')} />
                    <DisabledButton label={t('taxes')} />
                    <DisabledButton label={t('payroll')} />
                    <DisabledButton label={t('invoices')} />
                    <DisabledButton label={t('client_billing')} />
                    <DisabledButton label={t('financial_reports')} />
                    <DisabledButton label={t('settings_permissions')} />

                </div>
            </div>
        </div>
    );
}

function DashboardLink({
    href,
    label
}: {
    href: string;
    label: string;
}) {
    return (
        <Link
            href={href}
            className="block w-full text-white bg-[#2c4a30] hover:opacity-90 py-2 px-4 rounded text-center text-sm"
        >
            {label}
        </Link>
    );
}

function DisabledButton({
    label
}: {
    label: string;
}) {
    return (
        <button
            onClick={() => alert('Feature coming soon')}
            className="block w-full text-white bg-gray-400 cursor-not-allowed py-2 px-4 rounded text-center text-sm"
        >
            {label}
        </button>
    );
}
