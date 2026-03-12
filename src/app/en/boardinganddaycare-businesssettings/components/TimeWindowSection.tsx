'use client';

import type { ReactNode } from 'react';

import { Toggle } from './Toggle';

type TimeWindowSectionProps = {
    title: string;
    subtitle?: string;
    daysOfWeek: string[];
    disabledDays?: Set<string>;
    noDayLabel?: string;
    onToggleDayDisabled?: (day: string, value: boolean) => void;
    collapsedDays: Record<string, boolean>;
    collapsedKeySuffix: string;
    onToggleCollapsed: (collapsedKey: string) => void;
    timeOptions: string[];
    selectedTimes: Record<string, string[]>;
    onToggleTime: (day: string, time: string) => void;
    expandLabel: string;
    collapseLabel: string;
    showDayLabel?: boolean;
    dayHeader?: (day: string) => ReactNode;
};

export function TimeWindowSection({
    title,
    subtitle,
    daysOfWeek,
    disabledDays,
    noDayLabel,
    onToggleDayDisabled,
    collapsedDays,
    collapsedKeySuffix,
    onToggleCollapsed,
    timeOptions,
    selectedTimes,
    onToggleTime,
    expandLabel,
    collapseLabel,
    showDayLabel = false,
    dayHeader,
}: TimeWindowSectionProps) {
    return (
        <div className="space-y-6">
            <div>
                <h3 className="text-lg font-semibold text-center text-[color:var(--color-accent)]">{title}</h3>
                {subtitle ? <p className="mt-2 text-center text-xs text-gray-500">{subtitle}</p> : null}
            </div>

            {daysOfWeek.map((day) => {
                const isDisabled = disabledDays?.has(day) ?? false;
                const collapsedKey = `${day}-${collapsedKeySuffix}`;

                return (
                    <div key={`${collapsedKey}-row`} className="rounded-2xl border border-stone-200 bg-stone-50/60 p-4">
                        {onToggleDayDisabled && noDayLabel ? (
                            <Toggle
                                label={`${noDayLabel} ${day}`}
                                checked={isDisabled}
                                onChange={(value) => onToggleDayDisabled(day, value)}
                            />
                        ) : null}

                        {!isDisabled ? (
                            <div className="mt-2 space-y-2">
                                {showDayLabel ? (
                                    <p className="font-semibold text-sm text-[color:var(--color-foreground)]">{day}</p>
                                ) : null}
                                {dayHeader ? dayHeader(day) : null}

                                <button
                                    type="button"
                                    className="text-sm text-blue-600 underline"
                                    onClick={() => onToggleCollapsed(collapsedKey)}
                                >
                                    {collapsedDays[collapsedKey] ? expandLabel : collapseLabel}
                                </button>

                                {!collapsedDays[collapsedKey] ? (
                                    <div className="grid gap-2 sm:grid-cols-2 xl:grid-cols-3">
                                        {timeOptions.map((time, index) => (
                                            <Toggle
                                                key={`${collapsedKey}-${time}-${index}`}
                                                label={time}
                                                checked={(selectedTimes[day] || []).includes(time)}
                                                onChange={() => onToggleTime(day, time)}
                                            />
                                        ))}
                                    </div>
                                ) : null}
                            </div>
                        ) : null}
                    </div>
                );
            })}
        </div>
    );
}
