'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function BoardingAndDaycareEmployeeManagementDashboardPage() {
    const t = useTranslations('boardingAndDaycareEmployeeManagementDashboard');

    return (
        <div className="min-h-screen bg-[color:var(--color-background)] text-[color:var(--color-foreground)] px-4 py-8">
            <div className="w-full max-w-md mx-auto">

                <h1 className="text-4xl font-bold text-[color:var(--color-accent)] text-center mb-6">
                    {t('title')}
                </h1>

                <div className="space-y-3">

                    {/* ACTIVE – Staff Directory (existing page) */}
                    <DashboardLink
                        href="/boardinganddaycare-manageemployees"
                        label={t('staff_directory')}
                    />

                    {/* Coming Soon Buttons */}
                    <DisabledButton label={t('employee_scheduling')} />
                    <DisabledButton label={t('time_tracking_attendance')} />
                    <DisabledButton label={t('compensation_pay_rates')} />
                    <DisabledButton label={t('performance_reviews')} />
                    <DisabledButton label={t('skills_certifications')} />
                    <DisabledButton label={t('payroll_processing')} />
                    <DisabledButton label={t('staff_reports_analytics')} />
                    <DisabledButton label={t('employee_settings_permissions')} />

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