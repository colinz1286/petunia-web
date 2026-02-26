import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
    title: 'Dog Boarding & Daycare Software | Compare Plans by Business Stage',
    description:
        'Compare dog boarding and daycare software plans for small, medium, large, and enterprise operations. Find the right fit for your business stage.',
    keywords: [
        'dog boarding software',
        'dog daycare software',
        'pet care business software',
        'boarding and daycare software comparison',
        'dog boarding software pricing',
    ],
    alternates: {
        canonical: '/en/dog-boarding-software',
        languages: {
            'en-US': '/en/dog-boarding-software',
            'x-default': '/en/dog-boarding-software',
        },
    },
    robots: {
        index: true,
        follow: true,
    },
    openGraph: {
        title: 'Dog Boarding & Daycare Software | Compare Plans',
        description:
            'Operator-focused software plans for every stage, from small facilities to enterprise multi-location groups.',
        url: '/en/dog-boarding-software',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Dog Boarding & Daycare Software | Compare Plans',
        description:
            'Compare Small, Medium, Large, and Enterprise options for dog boarding and daycare operations.',
    },
};

export default function DogBoardingSoftwareLayout({ children }: { children: ReactNode }) {
    return children;
}
