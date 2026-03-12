'use client';

import type { ReactNode } from 'react';

import type { BusinessSettingsSectionId } from './types';

type SectionCardProps = {
    id: BusinessSettingsSectionId;
    title: string;
    subtitle?: string;
    children: ReactNode;
};

export function SectionCard({ id, title, subtitle, children }: SectionCardProps) {
    return (
        <section id={id} className="scroll-mt-24">
            <div className="rounded-3xl border border-stone-200 bg-white p-4 shadow-sm sm:p-6">
                <div className="mb-5 border-b border-stone-100 pb-4">
                    <h2 className="text-xl font-semibold text-[color:var(--color-accent)]">{title}</h2>
                    {subtitle ? <p className="mt-2 text-sm text-gray-600">{subtitle}</p> : null}
                </div>
                {children}
            </div>
        </section>
    );
}
