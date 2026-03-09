'use client';

// NOTE: This web page is intended to mirror the iOS view at
// .local-only/ios-real-reference/BoardingAndDaycareEmployeeManagementDashboardView.swift.
// Keep module labels, available actions, and navigation targets aligned across both files.
import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function BoardingAndDaycareEmployeeManagementDashboardPage() {
    const t = useTranslations('boardingAndDaycareEmployeeManagementDashboard');

    return (
        <div className="min-h-screen bg-[color:var(--color-background)] px-4 py-8 text-[color:var(--color-foreground)]">
            <div className="mx-auto w-full max-w-md">
                <h1 className="mb-6 text-center text-4xl font-bold text-[color:var(--color-accent)]">
                    {t('title')}
                </h1>

                <hr className="mb-6 border-[color:var(--color-accent)]/20" />

                <div className="space-y-3">
                    <DashboardLink
                        href="/boardinganddaycare-manageemployees"
                        label={t('staff_directory')}
                    />

                    <DashboardLink
                        href="/boardinganddaycare-employeemanagementemployeescheduling"
                        label={t('employee_scheduling')}
                    />

                    <DashboardLink
                        href="/boardinganddaycare-employeemanagementcompensationandpayrates"
                        label={t('compensation_pay_rates')}
                    />

                    <DisabledButton label={t('time_tracking_attendance')} />
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
            className="block w-full rounded-lg bg-[color:var(--color-accent)] px-4 py-3 text-center text-sm font-semibold text-white transition-opacity hover:opacity-90"
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
            className="block w-full rounded-lg bg-gray-300 px-4 py-3 text-center text-sm font-semibold text-gray-600"
        >
            {label}
        </button>
    );
}
