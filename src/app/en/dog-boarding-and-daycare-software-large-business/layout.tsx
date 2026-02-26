import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
    title: 'Software for Established Dog Boarding & Daycare Owners | Petunia Pro',
    description:
        'Software for established dog boarding and daycare facilities. Strengthen reporting, protect margins, and improve long-term operational discipline with Petunia Pro.',
    keywords: [
        'software for established dog boarding owners',
        'large dog daycare software',
        'high volume pet care software',
        'dog boarding business software',
        'pet care reporting software',
    ],
    alternates: {
        canonical: '/en/dog-boarding-and-daycare-software-large-business',
        languages: {
            'en-US': '/en/dog-boarding-and-daycare-software-large-business',
            'x-default': '/en/dog-boarding-and-daycare-software-large-business',
        },
    },
    robots: {
        index: true,
        follow: true,
    },
    openGraph: {
        title: 'Software for Established Dog Boarding & Daycare Owners',
        description:
            'Designed for established facilities focused on financial discipline, scalability, and long-term value.',
        url: '/en/dog-boarding-and-daycare-software-large-business',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Software for Established Dog Boarding & Daycare Owners',
        description:
            'Petunia Pro supports high-volume operators with structured workflows and cleaner financial oversight.',
    },
};

export default function LargeBusinessLayout({ children }: { children: ReactNode }) {
    return children;
}
