import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
    title: 'Dog Boarding & Daycare Software for Small Business | Petunia Starter',
    description:
        'Dog boarding and daycare software for small businesses. Build structure, automate deposits, and simplify daily operations with Petunia Starter.',
    keywords: [
        'dog boarding software for small business',
        'dog daycare software for small business',
        'small business pet care software',
        'starter dog boarding software',
        'boarding and daycare booking software',
    ],
    alternates: {
        canonical: '/en/dog-boarding-and-daycare-software-small-business',
        languages: {
            'en-US': '/en/dog-boarding-and-daycare-software-small-business',
            'x-default': '/en/dog-boarding-and-daycare-software-small-business',
        },
    },
    robots: {
        index: true,
        follow: true,
    },
    openGraph: {
        title: 'Dog Boarding & Daycare Software for Small Business',
        description:
            'Operator-focused software that helps small facilities gain structure, clarity, and financial control.',
        url: '/en/dog-boarding-and-daycare-software-small-business',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Dog Boarding & Daycare Software for Small Business',
        description:
            'Petunia Starter helps small dog boarding and daycare operators automate core workflows and save time.',
    },
};

export default function SmallBusinessLayout({ children }: { children: ReactNode }) {
    return children;
}
