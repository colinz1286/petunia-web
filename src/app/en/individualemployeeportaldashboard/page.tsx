'use client';

// NOTE: This web page is intended to mirror the iOS view at
// .local-only/ios-real-reference/IndividualEmployeePortalDashboardView.swift.
// Keep section order, labels, and route naming aligned across both files.
import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';
import { getApp, getApps, initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { collection, getDocs, getFirestore, limit, orderBy, query, where } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY!,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN!,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID!,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET!,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID!,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID!,
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export default function IndividualEmployeePortalDashboardPage() {
    const router = useRouter();
    const locale = useLocale();
    const t = useTranslations('individualEmployeePortalDashboard');

    const employeeBusinessIdRef = useRef<string | null>(null);
    const employeeRoleRef = useRef<string | null>(null);
    const inviteDocIdRef = useRef('');
    const isEmployeeRef = useRef(false);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (!user) {
                console.error('User not authenticated');
                return;
            }

            const email = user.email ?? '';
            void checkEmployeeStatusOrInvite(email);
        });

        return () => unsubscribe();
    }, []);

    const checkEmployeeStatusOrInvite = async (email: string) => {
        const loweredEmail = email.toLowerCase();
        console.log(`Checking employee invite for: ${loweredEmail}`);

        try {
            const snapshot = await getDocs(
                query(
                    collection(db, 'employeeInvites'),
                    where('email', '==', loweredEmail),
                    orderBy('sentAt', 'desc'),
                    limit(1)
                )
            );

            const inviteDoc = snapshot.docs[0];

            if (!inviteDoc) {
                console.log('No employee invite found');
                isEmployeeRef.current = false;
                inviteDocIdRef.current = '';
                return;
            }

            const data = inviteDoc.data();

            const businessId = typeof data.businessId === 'string' ? data.businessId : '';
            const status = typeof data.status === 'string' ? data.status : 'unknown';
            const role = typeof data.role === 'string' ? data.role : '';

            inviteDocIdRef.current = inviteDoc.id;
            employeeBusinessIdRef.current = businessId;
            employeeRoleRef.current = role;
            isEmployeeRef.current = status === 'accepted';

            console.log(`Employee linked to business: ${businessId}`);
        } catch (error) {
            if (error instanceof Error) {
                console.error('Firestore error in checkEmployeeStatusOrInvite:', error.message);
            } else {
                console.error('Firestore error in checkEmployeeStatusOrInvite:', error);
            }
        }
    };

    return (
        <div className="min-h-screen bg-[color:var(--color-background)] px-4 py-8 text-[color:var(--color-foreground)]">
            <div className="mx-auto w-full max-w-md">
                <button
                    type="button"
                    onClick={() => router.back()}
                    className="mb-4 inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--color-accent)]"
                >
                    <span aria-hidden="true">←</span>
                    {t('back_button')}
                </button>

                <h1 className="mb-6 text-center text-4xl font-bold text-[color:var(--color-accent)]">
                    {t('title')}
                </h1>

                <hr className="mb-6 border-[color:var(--color-accent)]/20" />

                <PortalSection title={t('employee_documents_section')}>
                    <DashboardLink
                        href={`/${locale}/individualemployeeportal-documentstosign`}
                        label={t('documents_to_sign')}
                    />
                    <DashboardLink
                        href={`/${locale}/individualemployeeportal-signeddocuments`}
                        label={t('signed_documents')}
                    />
                </PortalSection>

                <hr className="mb-6 border-[color:var(--color-accent)]/20" />

                <PortalSection title={t('availability_section')}>
                    <DashboardLink
                        href={`/${locale}/individualemployeeportal-myavailability`}
                        label={t('enter_availability')}
                    />
                </PortalSection>

                <hr className="mb-6 border-[color:var(--color-accent)]/20" />

                <PortalSection title={t('schedule_section')}>
                    <DashboardLink
                        href={`/${locale}/individualemployeeportal-myschedule`}
                        label={t('my_schedule')}
                    />
                    <DashboardLink
                        href={`/${locale}/individualemployeeportal-timeoffrequests`}
                        label={t('request_time_off')}
                    />
                </PortalSection>

                <hr className="mb-6 border-[color:var(--color-accent)]/20" />

                <PortalSection title={t('training_policies_section')}>
                    <DashboardLink
                        href={`/${locale}/individualemployeeportal-training`}
                        label={t('training_materials')}
                    />
                    <DashboardLink
                        href={`/${locale}/individualemployeeportal-companypolicies`}
                        label={t('company_policies')}
                    />
                </PortalSection>
            </div>
        </div>
    );
}

function PortalSection({
    title,
    children
}: {
    title: string;
    children: React.ReactNode;
}) {
    return (
        <div className="space-y-3">
            <div className="pt-1">
                <h2 className="text-left text-lg font-semibold text-[color:var(--color-foreground)]">
                    {title}
                </h2>
            </div>
            <div className="space-y-3">
                {children}
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
            className="block w-full rounded-lg bg-[#2c4a30] px-4 py-3 text-center text-sm font-semibold text-white hover:opacity-90"
        >
            {label}
        </Link>
    );
}
