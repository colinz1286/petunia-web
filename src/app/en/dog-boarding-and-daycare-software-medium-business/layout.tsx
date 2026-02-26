import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
    title: 'Dog Boarding & Daycare Software for Growing Businesses | Petunia Growth',
    description:
        'Dog boarding and daycare software for growth-stage businesses. Improve staffing workflows, financial visibility, and operational control with Petunia Growth.',
    keywords: [
        'dog boarding software for growing business',
        'dog daycare software for growing business',
        'growth stage pet care software',
        'dog daycare staff scheduling software',
        'boarding and daycare operations software',
    ],
    alternates: {
        canonical: '/en/dog-boarding-and-daycare-software-medium-business',
        languages: {
            'en-US': '/en/dog-boarding-and-daycare-software-medium-business',
            'x-default': '/en/dog-boarding-and-daycare-software-medium-business',
        },
    },
    robots: {
        index: true,
        follow: true,
    },
    openGraph: {
        title: 'Dog Boarding & Daycare Software for Growing Businesses',
        description:
            'Built for growth-stage operators managing hiring complexity, expanding workloads, and margin discipline.',
        url: '/en/dog-boarding-and-daycare-software-medium-business',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Dog Boarding & Daycare Software for Growing Businesses',
        description:
            'Petunia Growth helps medium-stage facilities reduce administrative overhead and scale with structure.',
    },
};

export default function MediumBusinessLayout({ children }: { children: ReactNode }) {
    return children;
}
