'use client';

import type { ChangeEvent } from 'react';

import type { BusinessSettingsNavItem } from './types';

type BusinessSettingsNavigationProps = {
    items: BusinessSettingsNavItem[];
    label: string;
};

const jumpToSection = (id: string) => {
    const section = document.getElementById(id);
    if (!section) return;
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

export function BusinessSettingsNavigation({ items, label }: BusinessSettingsNavigationProps) {
    const handleSelect = (event: ChangeEvent<HTMLSelectElement>) => {
        const nextId = event.target.value;
        if (!nextId) return;
        jumpToSection(nextId);
    };

    return (
        <>
            <div className="sticky top-0 z-20 mb-4 rounded-2xl border border-stone-200 bg-white/95 p-3 shadow-sm backdrop-blur lg:hidden">
                <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-stone-500">
                    {label}
                </label>
                <select
                    defaultValue=""
                    onChange={handleSelect}
                    className="w-full rounded-xl border border-stone-200 bg-white px-3 py-2 text-sm"
                >
                    <option value="" disabled>
                        {label}
                    </option>
                    {items.map((item) => (
                        <option key={item.id} value={item.id}>
                            {item.label}
                        </option>
                    ))}
                </select>
            </div>

            <aside className="hidden lg:block lg:sticky lg:top-6 lg:self-start">
                <div className="rounded-3xl border border-stone-200 bg-white p-4 shadow-sm">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-stone-500">
                        {label}
                    </p>
                    <div className="mt-4 space-y-2">
                        {items.map((item) => (
                            <button
                                key={item.id}
                                type="button"
                                onClick={() => jumpToSection(item.id)}
                                className="w-full rounded-2xl border border-transparent px-3 py-2 text-left text-sm text-stone-700 transition hover:border-stone-200 hover:bg-stone-50"
                            >
                                {item.label}
                            </button>
                        ))}
                    </div>
                </div>
            </aside>
        </>
    );
}
