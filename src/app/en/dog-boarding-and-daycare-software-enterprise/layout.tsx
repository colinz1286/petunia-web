import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
    title: 'Enterprise Dog Boarding & Daycare Software | Multi-Location Operations',
    description:
        'Enterprise dog boarding and daycare software for multi-location operators, private equity-backed platforms, and large-scale owner-led facilities.',
    keywords: [
        'enterprise dog boarding software',
        'enterprise dog daycare software',
        'multi-location dog boarding software',
        'multi-location dog daycare software',
        'private equity pet care software',
        'institutional pet care software',
    ],
    alternates: {
        canonical: '/en/dog-boarding-and-daycare-software-enterprise',
        languages: {
            'en-US': '/en/dog-boarding-and-daycare-software-enterprise',
            'x-default': '/en/dog-boarding-and-daycare-software-enterprise',
        },
    },
    robots: {
        index: true,
        follow: true,
    },
    openGraph: {
        title: 'Enterprise Dog Boarding & Daycare Software',
        description:
            'Built for multi-location operations, institutional oversight, and enterprise-scale financial control.',
        url: '/en/dog-boarding-and-daycare-software-enterprise',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Enterprise Dog Boarding & Daycare Software',
        description:
            'Enterprise software for multi-location pet care operators and institutional growth strategies.',
    },
};

export default function EnterpriseLayout({ children }: { children: ReactNode }) {
    return children;
}
