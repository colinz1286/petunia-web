'use client';

import { type Dispatch, type SetStateAction } from 'react';

import { useTranslations } from 'next-intl';

import BusinessAddressFields from '@/components/BusinessAddressFields';
import { type DaycareKennelMode } from '@/lib/boardingKennels';

import { RepeatingTextareaList } from './RepeatingTextareaList';
import { SectionCard } from './SectionCard';
import { TimeWindowSection } from './TimeWindowSection';
import { Toggle } from './Toggle';
import type { KennelTypeForm } from './types';

type OperatingHours = Record<string, { open: string; close: string }>;
type TimeMap = Record<string, string[]>;
type OptionalFeatures = {
    employeeManagement: boolean;
    statePaperworkLog: boolean;
    financialManagement: boolean;
};

type GeneralInformationSectionProps = {
    businessName: string;
    businessPhone: string;
    businessStreet: string;
    setBusinessStreet: Dispatch<SetStateAction<string>>;
    businessCity: string;
    setBusinessCity: Dispatch<SetStateAction<string>>;
    businessState: string;
    setBusinessState: Dispatch<SetStateAction<string>>;
    businessZip: string;
    setBusinessZip: Dispatch<SetStateAction<string>>;
    locale: string;
    businessBio: string;
    setBusinessBio: Dispatch<SetStateAction<string>>;
    bioLimit: number;
    hasEmoji: (value: string) => boolean;
};

type OperatingHoursSectionProps = {
    operatingHours: OperatingHours;
    setOperatingHours: Dispatch<SetStateAction<OperatingHours>>;
    daysOfWeek: string[];
    timeOptions: string[];
};

type BlackoutDatesSectionProps = {
    selectedBlackoutDate: string;
    setSelectedBlackoutDate: Dispatch<SetStateAction<string>>;
    blackoutDates: Date[];
    setBlackoutDates: Dispatch<SetStateAction<Date[]>>;
    prohibitBoardingOverlapWithBlackoutDates: boolean;
    setProhibitBoardingOverlapWithBlackoutDates: Dispatch<SetStateAction<boolean>>;
};

type ServiceOfferingsSectionProps = {
    offersBoarding: boolean;
    setOffersBoarding: Dispatch<SetStateAction<boolean>>;
    offersDaycare: boolean;
    setOffersDaycare: Dispatch<SetStateAction<boolean>>;
    offersGrooming: boolean;
    setOffersGrooming: Dispatch<SetStateAction<boolean>>;
    offersTraining: boolean;
    setOffersTraining: Dispatch<SetStateAction<boolean>>;
    requiresAssessment: boolean;
    setRequiresAssessment: Dispatch<SetStateAction<boolean>>;
    groomingServices: string[];
    onGroomingChange: (index: number, value: string) => void;
    onAddGroomingService: () => void;
    onRemoveGroomingService: (index: number) => void;
};

type PricingProgramsSectionProps = {
    onOpenDiscounts: () => void;
    onOpenMemberships: () => void;
};

type PaymentsSectionProps = {
    visible: boolean;
    stripeOnboardingComplete: boolean;
    stripeChargesEnabled: boolean;
    stripePayoutsEnabled: boolean;
    stripeLoading: boolean;
    onStripeOnboarding: () => void;
    paymentsEnabled: boolean;
    onPaymentsEnabledChange: (value: boolean) => void;
    offersDaycare: boolean;
    offersBoarding: boolean;
    daycarePayAtBookingEnabled: boolean;
    onDaycarePayAtBookingChange: (value: boolean) => void;
    daycareInvoiceAfterAttendanceEnabled: boolean;
    onDaycareInvoiceAfterAttendanceChange: (value: boolean) => void;
    daycarePayAtPickupEnabled: boolean;
    onDaycarePayAtPickupChange: (value: boolean) => void;
    boardingPayAtBookingEnabled: boolean;
    onBoardingPayAtBookingChange: (value: boolean) => void;
    boardingInvoiceAfterAttendanceEnabled: boolean;
    onBoardingInvoiceAfterAttendanceChange: (value: boolean) => void;
    boardingPayAtPickupEnabled: boolean;
    onBoardingPayAtPickupChange: (value: boolean) => void;
    onOpenDaycareCheckoutItems: () => void;
    onOpenBoardingCheckoutItems: () => void;
    onOpenInvoiceLibrary: () => void;
};

type KennelCapacitySectionProps = {
    daycareKennelMode: DaycareKennelMode | '';
    setDaycareKennelMode: Dispatch<SetStateAction<DaycareKennelMode | ''>>;
    kennelTypes: KennelTypeForm[];
    onKennelNameChange: (kennelId: string, value: string) => void;
    onKennelCountChange: (kennelId: string, value: string) => void;
    onRemoveKennelType: (kennelId: string) => void;
    businessId: string;
    newKennelName: string;
    setNewKennelName: Dispatch<SetStateAction<string>>;
    newKennelCount: string;
    setNewKennelCount: Dispatch<SetStateAction<string>>;
    sanitizeKennelCount: (value: string) => string;
    onAddKennelType: () => void;
};

type BookingPoliciesSectionProps = {
    maxAppointmentsPerSlot: number;
    setMaxAppointmentsPerSlot: Dispatch<SetStateAction<number>>;
    requireDaycareReservationApproval: boolean;
    setRequireDaycareReservationApproval: Dispatch<SetStateAction<boolean>>;
    requireBoardingReservationApproval: boolean;
    setRequireBoardingReservationApproval: Dispatch<SetStateAction<boolean>>;
    offersBoarding: boolean;
    depositRequired: boolean;
    setDepositRequired: Dispatch<SetStateAction<boolean>>;
    depositAmount: string;
    setDepositAmount: Dispatch<SetStateAction<string>>;
    cancellationPolicy: string;
    setCancellationPolicy: Dispatch<SetStateAction<string>>;
    cancellationOptions: string[];
    onOpenBoardingPricingRules: () => void;
};

type TimeSettingsSectionProps = {
    showSection: boolean;
    offersDaycare: boolean;
    offersBoarding: boolean;
    requiresAssessment: boolean;
    dropOffTimeRequiredDaycare: boolean;
    setDropOffTimeRequiredDaycare: Dispatch<SetStateAction<boolean>>;
    pickUpTimeRequiredDaycare: boolean;
    setPickUpTimeRequiredDaycare: Dispatch<SetStateAction<boolean>>;
    dropOffTimeRequiredBoarding: boolean;
    setDropOffTimeRequiredBoarding: Dispatch<SetStateAction<boolean>>;
    pickUpTimeRequiredBoarding: boolean;
    setPickUpTimeRequiredBoarding: Dispatch<SetStateAction<boolean>>;
    dropOffTimeRequiredAssessment: boolean;
    setDropOffTimeRequiredAssessment: Dispatch<SetStateAction<boolean>>;
    pickUpTimeRequiredAssessment: boolean;
    setPickUpTimeRequiredAssessment: Dispatch<SetStateAction<boolean>>;
    afterHoursPickUpTimeRequired: boolean;
    setAfterHoursPickUpTimeRequired: Dispatch<SetStateAction<boolean>>;
    beforeHoursPickUpTimeRequired: boolean;
    setBeforeHoursPickUpTimeRequired: Dispatch<SetStateAction<boolean>>;
    earlyDropOffTimeRequired: boolean;
    setEarlyDropOffTimeRequired: Dispatch<SetStateAction<boolean>>;
    afterHoursDropOffTimeRequired: boolean;
    setAfterHoursDropOffTimeRequired: Dispatch<SetStateAction<boolean>>;
    daysOfWeek: string[];
    timeOptions: string[];
    collapsedDays: Record<string, boolean>;
    setCollapsedDays: Dispatch<SetStateAction<Record<string, boolean>>>;
    noDaycareDays: Set<string>;
    setNoDaycareDays: Dispatch<SetStateAction<Set<string>>>;
    noBoardingDays: Set<string>;
    setNoBoardingDays: Dispatch<SetStateAction<Set<string>>>;
    noAssessmentDays: Set<string>;
    setNoAssessmentDays: Dispatch<SetStateAction<Set<string>>>;
    noAfterHoursDays: Set<string>;
    setNoAfterHoursDays: Dispatch<SetStateAction<Set<string>>>;
    noBeforeHoursPickUpDays: Set<string>;
    setNoBeforeHoursPickUpDays: Dispatch<SetStateAction<Set<string>>>;
    noEarlyDropOffDays: Set<string>;
    setNoEarlyDropOffDays: Dispatch<SetStateAction<Set<string>>>;
    noAfterHoursDropOffDays: Set<string>;
    setNoAfterHoursDropOffDays: Dispatch<SetStateAction<Set<string>>>;
    dropOffTimesDaycare: TimeMap;
    pickUpTimesDaycare: TimeMap;
    dropOffTimesBoarding: TimeMap;
    pickUpTimesBoarding: TimeMap;
    assessmentDropOffTimes: TimeMap;
    setAssessmentDropOffTimes: Dispatch<SetStateAction<TimeMap>>;
    assessmentPickUpTimes: TimeMap;
    setAssessmentPickUpTimes: Dispatch<SetStateAction<TimeMap>>;
    afterHoursPickUpTimes: TimeMap;
    beforeHoursPickUpTimes: TimeMap;
    earlyDropOffTimes: TimeMap;
    afterHoursDropOffTimes: TimeMap;
    onToggleDayTime: (
        type: 'dropOff' | 'pickUp',
        service: 'daycare' | 'boarding',
        day: string,
        time: string
    ) => void;
    onToggleAfterHoursTime: (day: string, time: string) => void;
    onToggleBeforeHoursPickupTime: (day: string, time: string) => void;
    onToggleEarlyDropOffTime: (day: string, time: string) => void;
    onToggleAfterHoursDropOffTime: (day: string, time: string) => void;
};

type WhatToBringSectionProps = {
    visible: boolean;
    boardingRequiredItems: string[];
    setBoardingRequiredItems: Dispatch<SetStateAction<string[]>>;
    boardingProhibitedItems: string[];
    setBoardingProhibitedItems: Dispatch<SetStateAction<string[]>>;
};

type HealthRequirementsSectionProps = {
    requiredVaccinations: Record<string, boolean>;
    setRequiredVaccinations: Dispatch<SetStateAction<Record<string, boolean>>>;
    requiredTests: Record<string, boolean>;
    setRequiredTests: Dispatch<SetStateAction<Record<string, boolean>>>;
    temperamentTestRequired: boolean;
    setTemperamentTestRequired: Dispatch<SetStateAction<boolean>>;
};

type WaiverSectionProps = {
    waiverRequired: boolean;
    setWaiverRequired: Dispatch<SetStateAction<boolean>>;
    waiverText: string;
    setWaiverText: Dispatch<SetStateAction<string>>;
};

type OptionalFeaturesSectionProps = {
    optionalFeatures: OptionalFeatures;
    setOptionalFeatures: Dispatch<SetStateAction<OptionalFeatures>>;
};

type ReviewSaveSectionProps = {
    saveSuccess: boolean;
    saving: boolean;
    onSave: () => void;
};

function ActionCard({
    title,
    body,
    buttonLabel,
    onClick,
}: {
    title: string;
    body: string;
    buttonLabel: string;
    onClick: () => void;
}) {
    return (
        <div className="rounded-2xl border border-stone-200 bg-stone-50 p-4">
            <p className="font-semibold text-sm text-[color:var(--color-accent)]">{title}</p>
            <p className="mt-1 text-sm text-gray-600">{body}</p>
            <button
                type="button"
                onClick={onClick}
                className="mt-4 rounded-xl bg-[#1F4D2E] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#163A22]"
            >
                {buttonLabel}
            </button>
        </div>
    );
}

function ToggleGroupBlock({
    title,
    children,
}: {
    title: string;
    children: React.ReactNode;
}) {
    return (
        <div className="rounded-2xl border border-stone-200 bg-stone-50/70 p-4">
            <h3 className="mb-3 text-base font-semibold text-[color:var(--color-accent)]">{title}</h3>
            <div className="space-y-3">{children}</div>
        </div>
    );
}

export function GeneralInformationSection({
    businessName,
    businessPhone,
    businessStreet,
    setBusinessStreet,
    businessCity,
    setBusinessCity,
    businessState,
    setBusinessState,
    businessZip,
    setBusinessZip,
    locale,
    businessBio,
    setBusinessBio,
    bioLimit,
    hasEmoji,
}: GeneralInformationSectionProps) {
    const t = useTranslations('boardingAndDaycareBusinessSettings');

    return (
        <SectionCard id="general" title={t('general_information_header')}>
            <div className="space-y-4">
                <div className="grid gap-4 lg:grid-cols-3">
                    <div>
                        <label className="font-semibold text-sm">{t('business_name_field')}</label>
                        <input value={businessName} disabled className="mt-1 w-full rounded border bg-gray-100 px-3 py-2 text-sm" />
                    </div>
                    <div>
                        <label className="font-semibold text-sm">{t('business_phone_field')}</label>
                        <input value={businessPhone} disabled className="mt-1 w-full rounded border bg-gray-100 px-3 py-2 text-sm" />
                    </div>
                    <div className="lg:col-span-3">
                        <label className="font-semibold text-sm">{t('business_address_field')}</label>
                        <div className="mt-2">
                            <BusinessAddressFields
                                autocompleteId="boarding-daycare-business-address-search"
                                locale={locale}
                                street={businessStreet}
                                onStreetChange={setBusinessStreet}
                                city={businessCity}
                                onCityChange={setBusinessCity}
                                state={businessState}
                                onStateChange={setBusinessState}
                                zip={businessZip}
                                onZipChange={setBusinessZip}
                                inputClassName="w-full rounded border bg-white px-3 py-2 text-sm"
                            />
                        </div>
                    </div>
                </div>

                <div className="rounded-2xl border border-stone-200 bg-stone-50/70 p-4">
                    <h3 className="font-semibold text-base text-[color:var(--color-accent)]">{t('business_bio_header')}</h3>
                    <p className="mt-1 text-xs text-gray-500">{t('business_bio_subtitle')}</p>
                    <div className="relative mt-3">
                        {businessBio.trim() === '' ? (
                            <span className="pointer-events-none absolute top-2 left-3 text-sm text-gray-400">
                                {t('business_bio_placeholder')}
                            </span>
                        ) : null}
                        <textarea
                            value={businessBio}
                            onChange={(e) => setBusinessBio(e.target.value)}
                            className="h-32 w-full resize-none rounded border px-3 py-2 text-sm"
                            aria-label={t('business_bio_header')}
                        />
                    </div>
                    <div className="mt-2 flex items-center justify-between">
                        <span className={`text-xs ${businessBio.length > bioLimit ? 'text-red-600' : 'text-gray-500'}`}>
                            {t('business_bio_counter', { used: businessBio.length, limit: bioLimit })}
                        </span>
                    </div>
                    {hasEmoji(businessBio) ? (
                        <p className="mt-1 text-xs text-red-600">{t('business_bio_no_emoji')}</p>
                    ) : null}
                </div>
            </div>
        </SectionCard>
    );
}

export function OperatingHoursSection({
    operatingHours,
    setOperatingHours,
    daysOfWeek,
    timeOptions,
}: OperatingHoursSectionProps) {
    const t = useTranslations('boardingAndDaycareBusinessSettings');

    return (
        <SectionCard id="hours" title={t('operating_hours_header')}>
            <div className="space-y-3">
                {daysOfWeek.map((day) => {
                    const open = operatingHours[day]?.open || '7:00 AM';
                    const close = operatingHours[day]?.close || '6:00 PM';

                    return (
                        <div
                            key={`operating-hours-${day}`}
                            className="grid gap-3 rounded-2xl border border-stone-200 bg-stone-50/70 p-4 sm:grid-cols-[160px_minmax(0,1fr)_minmax(0,1fr)]"
                        >
                            <div className="self-center font-semibold text-sm text-[color:var(--color-foreground)]">{day}</div>

                            <div className="flex flex-col">
                                <label className="mb-1 text-xs text-gray-500">{t('open_label')}</label>
                                <select
                                    value={open}
                                    onChange={(e) =>
                                        setOperatingHours((prev) => ({
                                            ...prev,
                                            [day]: {
                                                open: e.target.value,
                                                close,
                                            },
                                        }))
                                    }
                                    className="rounded border px-2 py-2 text-sm"
                                >
                                    {timeOptions.map((time, index) => (
                                        <option key={`${day}-open-${time}-${index}`} value={time}>
                                            {time}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div className="flex flex-col">
                                <label className="mb-1 text-xs text-gray-500">{t('close_label')}</label>
                                <select
                                    value={close}
                                    onChange={(e) =>
                                        setOperatingHours((prev) => ({
                                            ...prev,
                                            [day]: {
                                                open,
                                                close: e.target.value,
                                            },
                                        }))
                                    }
                                    className="rounded border px-2 py-2 text-sm"
                                >
                                    {timeOptions.map((time, index) => (
                                        <option key={`${day}-close-${time}-${index}`} value={time}>
                                            {time}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    );
                })}
            </div>
        </SectionCard>
    );
}

export function BlackoutDatesSection({
    selectedBlackoutDate,
    setSelectedBlackoutDate,
    blackoutDates,
    setBlackoutDates,
    prohibitBoardingOverlapWithBlackoutDates,
    setProhibitBoardingOverlapWithBlackoutDates,
}: BlackoutDatesSectionProps) {
    const t = useTranslations('boardingAndDaycareBusinessSettings');

    return (
        <SectionCard id="blackoutDates" title={t('blackout_dates_header')}>
            <div className="space-y-4">
                <div>
                    <label className="mb-1 block font-semibold text-sm">{t('blackout_date_select_label')}</label>
                    <input
                        type="date"
                        value={selectedBlackoutDate}
                        onChange={(e) => setSelectedBlackoutDate(e.target.value)}
                        className="w-full rounded border px-3 py-2 text-sm"
                    />
                </div>

                <button
                    type="button"
                    onClick={() => {
                        const [year, month, day] = selectedBlackoutDate.split('-').map(Number);
                        const startOfDay = new Date(year, month - 1, day);

                        if (!blackoutDates.some((date) => date.getTime() === startOfDay.getTime())) {
                            const updated = [...blackoutDates, startOfDay].sort((a, b) => a.getTime() - b.getTime());
                            setBlackoutDates(updated);
                        }
                    }}
                    className="text-sm text-green-700 underline"
                >
                    {t('blackout_add_button')}
                </button>

                {blackoutDates.length === 0 ? (
                    <p className="text-center text-sm text-gray-500">{t('blackout_dates_empty')}</p>
                ) : (
                    <ul className="space-y-2">
                        {blackoutDates.map((date, index) => (
                            <li
                                key={`blackout-${index}`}
                                className="flex items-center justify-between rounded border px-3 py-2 text-sm"
                            >
                                <span>{date.toLocaleDateString()}</span>
                                <button
                                    type="button"
                                    onClick={() => setBlackoutDates(blackoutDates.filter((_, dateIndex) => dateIndex !== index))}
                                    className="text-lg font-bold text-red-600"
                                >
                                    &times;
                                </button>
                            </li>
                        ))}
                    </ul>
                )}

                <Toggle
                    label={t('blackout_overlap_toggle')}
                    checked={prohibitBoardingOverlapWithBlackoutDates}
                    onChange={setProhibitBoardingOverlapWithBlackoutDates}
                />
            </div>
        </SectionCard>
    );
}

export function ServiceOfferingsSection({
    offersBoarding,
    setOffersBoarding,
    offersDaycare,
    setOffersDaycare,
    offersGrooming,
    setOffersGrooming,
    offersTraining,
    setOffersTraining,
    requiresAssessment,
    setRequiresAssessment,
    groomingServices,
    onGroomingChange,
    onAddGroomingService,
    onRemoveGroomingService,
}: ServiceOfferingsSectionProps) {
    const t = useTranslations('boardingAndDaycareBusinessSettings');

    return (
        <SectionCard id="services" title={t('service_offerings_title')}>
            <div className="space-y-4">
                <Toggle label={t('boarding_toggle')} checked={offersBoarding} onChange={setOffersBoarding} />
                <Toggle label={t('daycare_toggle')} checked={offersDaycare} onChange={setOffersDaycare} />
                <Toggle label={t('grooming_toggle')} checked={offersGrooming} onChange={setOffersGrooming} />
                <Toggle label={t('training_toggle')} checked={offersTraining} onChange={setOffersTraining} />
                <Toggle label={t('requires_assessment_toggle')} checked={requiresAssessment} onChange={setRequiresAssessment} />

                {offersGrooming ? (
                    <div className="rounded-2xl border border-stone-200 bg-stone-50/70 p-4">
                        <label className="font-semibold text-sm">{t('grooming_services_label')}</label>
                        <div className="mt-3 space-y-2">
                            {groomingServices.map((service, index) => (
                                <div key={`svc-${index}`} className="flex gap-2">
                                    <input
                                        value={service}
                                        onChange={(e) => onGroomingChange(index, e.target.value)}
                                        className="flex-1 rounded border px-3 py-2 text-sm"
                                    />
                                    {groomingServices.length > 1 ? (
                                        <button
                                            type="button"
                                            onClick={() => onRemoveGroomingService(index)}
                                            className="text-lg font-bold text-red-600"
                                        >
                                            &times;
                                        </button>
                                    ) : null}
                                </div>
                            ))}

                            {groomingServices.length < 10 ? (
                                <button type="button" onClick={onAddGroomingService} className="text-sm text-green-700 underline">
                                    {t('add_another_service_button')}
                                </button>
                            ) : null}
                        </div>
                    </div>
                ) : null}
            </div>
        </SectionCard>
    );
}

export function PricingProgramsSection({
    onOpenDiscounts,
    onOpenMemberships,
}: PricingProgramsSectionProps) {
    const t = useTranslations('boardingAndDaycareBusinessSettings');

    return (
        <SectionCard id="pricing" title={t('pricing_discounts_header')}>
            <div className="grid gap-4 xl:grid-cols-2">
                <ActionCard
                    title={t('manage_discounts_button')}
                    body={t('pricing_discounts_subtitle')}
                    buttonLabel={t('manage_discounts_button')}
                    onClick={onOpenDiscounts}
                />
                <ActionCard
                    title={t('manage_memberships_button')}
                    body={t('memberships_subtitle')}
                    buttonLabel={t('manage_memberships_button')}
                    onClick={onOpenMemberships}
                />
            </div>
        </SectionCard>
    );
}

export function PaymentsSection({
    visible,
    stripeOnboardingComplete,
    stripeChargesEnabled,
    stripePayoutsEnabled,
    stripeLoading,
    onStripeOnboarding,
    paymentsEnabled,
    onPaymentsEnabledChange,
    offersDaycare,
    offersBoarding,
    daycarePayAtBookingEnabled,
    onDaycarePayAtBookingChange,
    daycareInvoiceAfterAttendanceEnabled,
    onDaycareInvoiceAfterAttendanceChange,
    daycarePayAtPickupEnabled,
    onDaycarePayAtPickupChange,
    boardingPayAtBookingEnabled,
    onBoardingPayAtBookingChange,
    boardingInvoiceAfterAttendanceEnabled,
    onBoardingInvoiceAfterAttendanceChange,
    boardingPayAtPickupEnabled,
    onBoardingPayAtPickupChange,
    onOpenDaycareCheckoutItems,
    onOpenBoardingCheckoutItems,
    onOpenInvoiceLibrary,
}: PaymentsSectionProps) {
    const t = useTranslations('boardingAndDaycareBusinessSettings');

    if (!visible) {
        return null;
    }

    return (
        <SectionCard id="payments" title={t('payments_header')}>
            <div className="space-y-6">
                <div className="rounded-2xl border border-stone-200 bg-stone-50 p-4">
                    <h3 className="text-lg font-semibold text-center">{t('stripe_account_title')}</h3>

                    {stripeOnboardingComplete && stripeChargesEnabled && stripePayoutsEnabled ? (
                        <div className="mt-3 text-center text-sm text-green-700">
                            {t('stripe_fully_active')}
                            <div className="mt-1 text-xs text-gray-600">
                                {t('stripe_status_summary', {
                                    charges: t('status_enabled'),
                                    payouts: t('status_enabled'),
                                })}
                            </div>
                        </div>
                    ) : (
                        <div className="mt-3 space-y-1 text-center text-sm text-red-600">
                            <div>{t('stripe_not_fully_active')}</div>
                            <div className="text-xs text-gray-600">
                                {t('stripe_status_summary', {
                                    charges: stripeChargesEnabled ? t('status_enabled') : t('status_disabled'),
                                    payouts: stripePayoutsEnabled ? t('status_enabled') : t('status_disabled'),
                                })}
                            </div>
                            <div className="text-xs text-red-500">{t('stripe_required_for_payments')}</div>
                        </div>
                    )}

                    <button
                        type="button"
                        onClick={onStripeOnboarding}
                        disabled={stripeLoading}
                        className="mt-4 w-full rounded-xl bg-[#2c4a30] px-4 py-2 text-sm text-white"
                    >
                        {stripeLoading ? t('stripe_connecting_button') : t('stripe_setup_button')}
                    </button>
                </div>

                <div className="rounded-2xl border border-stone-200 bg-white p-4">
                    <Toggle
                        label={t('payments_accept_toggle')}
                        checked={paymentsEnabled}
                        onChange={onPaymentsEnabledChange}
                    />
                    <p className="mt-2 text-xs text-gray-500">{t('payments_optional_helper')}</p>
                </div>

                {paymentsEnabled && offersDaycare ? (
                    <div className="rounded-2xl border border-stone-200 bg-stone-50/70 p-4">
                        <h3 className="text-sm font-semibold text-[color:var(--color-accent)]">{t('daycare_payment_settings_title')}</h3>
                        <div className="mt-4 space-y-3">
                            <Toggle
                                label={t('pay_at_booking_label')}
                                checked={daycarePayAtBookingEnabled}
                                onChange={onDaycarePayAtBookingChange}
                            />

                            {daycarePayAtBookingEnabled ? (
                                <>
                                    <p className="ml-8 text-xs text-gray-500">{t('daycare_pay_at_booking_helper')}</p>
                                    <ActionCard
                                        title={t('manage_pay_at_checkout_items_title')}
                                        body={t('manage_pay_at_checkout_items_subtitle')}
                                        buttonLabel={t('manage_pay_at_checkout_items_title')}
                                        onClick={onOpenDaycareCheckoutItems}
                                    />
                                </>
                            ) : null}

                            <Toggle
                                label={t('invoice_after_attendance_label')}
                                checked={daycareInvoiceAfterAttendanceEnabled}
                                onChange={onDaycareInvoiceAfterAttendanceChange}
                            />

                            {daycareInvoiceAfterAttendanceEnabled ? (
                                <>
                                    <p className="ml-8 text-xs text-gray-500">{t('invoice_after_attendance_helper')}</p>
                                    <ActionCard
                                        title={t('invoice_library_title')}
                                        body={t('invoice_library_subtitle')}
                                        buttonLabel={t('invoice_library_title')}
                                        onClick={onOpenInvoiceLibrary}
                                    />
                                </>
                            ) : null}

                            <Toggle
                                label={t('pay_at_pickup_label')}
                                checked={daycarePayAtPickupEnabled}
                                onChange={onDaycarePayAtPickupChange}
                            />

                            {daycarePayAtPickupEnabled ? (
                                <p className="ml-8 text-xs text-gray-500">{t('pay_at_pickup_helper')}</p>
                            ) : null}

                            {!daycarePayAtBookingEnabled &&
                            !daycareInvoiceAfterAttendanceEnabled &&
                            !daycarePayAtPickupEnabled ? (
                                <p className="text-center text-xs text-red-600">{t('service_payment_method_warning')}</p>
                            ) : null}
                        </div>
                    </div>
                ) : null}

                {paymentsEnabled && offersBoarding ? (
                    <div className="rounded-2xl border border-stone-200 bg-stone-50/70 p-4">
                        <h3 className="text-sm font-semibold text-[color:var(--color-accent)]">{t('boarding_payment_settings_title')}</h3>
                        <div className="mt-4 space-y-3">
                            <Toggle
                                label={t('pay_at_booking_label')}
                                checked={boardingPayAtBookingEnabled}
                                onChange={onBoardingPayAtBookingChange}
                            />

                            {boardingPayAtBookingEnabled ? (
                                <>
                                    <p className="ml-8 text-xs text-gray-500">{t('boarding_pay_at_booking_helper')}</p>
                                    <ActionCard
                                        title={t('manage_pay_at_boarding_checkout_items_title')}
                                        body={t('manage_pay_at_boarding_checkout_items_subtitle')}
                                        buttonLabel={t('manage_pay_at_boarding_checkout_items_title')}
                                        onClick={onOpenBoardingCheckoutItems}
                                    />
                                </>
                            ) : null}

                            <Toggle
                                label={t('invoice_after_attendance_label')}
                                checked={boardingInvoiceAfterAttendanceEnabled}
                                onChange={onBoardingInvoiceAfterAttendanceChange}
                            />

                            {boardingInvoiceAfterAttendanceEnabled ? (
                                <>
                                    <p className="ml-8 text-xs text-gray-500">{t('invoice_after_attendance_helper')}</p>
                                    <ActionCard
                                        title={t('invoice_library_title')}
                                        body={t('invoice_library_subtitle')}
                                        buttonLabel={t('invoice_library_title')}
                                        onClick={onOpenInvoiceLibrary}
                                    />
                                </>
                            ) : null}

                            <Toggle
                                label={t('pay_at_pickup_label')}
                                checked={boardingPayAtPickupEnabled}
                                onChange={onBoardingPayAtPickupChange}
                            />

                            {boardingPayAtPickupEnabled ? (
                                <p className="ml-8 text-xs text-gray-500">{t('pay_at_pickup_helper')}</p>
                            ) : null}

                            {!boardingPayAtBookingEnabled &&
                            !boardingInvoiceAfterAttendanceEnabled &&
                            !boardingPayAtPickupEnabled ? (
                                <p className="text-center text-xs text-red-600">{t('service_payment_method_warning')}</p>
                            ) : null}
                        </div>
                    </div>
                ) : null}
            </div>
        </SectionCard>
    );
}

export function KennelCapacitySection({
    daycareKennelMode,
    setDaycareKennelMode,
    kennelTypes,
    onKennelNameChange,
    onKennelCountChange,
    onRemoveKennelType,
    businessId,
    newKennelName,
    setNewKennelName,
    newKennelCount,
    setNewKennelCount,
    sanitizeKennelCount,
    onAddKennelType,
}: KennelCapacitySectionProps) {
    const t = useTranslations('boardingAndDaycareBusinessSettings');

    return (
        <SectionCard id="kennels" title={t('kennel_section_header')}>
            <div className="space-y-6">
                <div className="rounded-2xl border border-stone-200 bg-stone-50 p-4">
                    <div className="flex items-start justify-between gap-3">
                        <div>
                            <h3 className="text-base font-semibold text-[color:var(--color-accent)]">
                                {t('daycare_kennel_mode_title')}
                            </h3>
                            <p className="mt-1 text-sm text-gray-600">{t('daycare_kennel_mode_subtitle')}</p>
                        </div>
                        <span
                            className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-gray-300 bg-white text-xs font-semibold text-gray-600"
                            title={t('daycare_kennel_mode_info_title')}
                        >
                            i
                        </span>
                    </div>

                    <div className="mt-4 grid gap-3 xl:grid-cols-2">
                        <label className="flex items-start gap-3 rounded-xl border border-gray-200 bg-white p-3">
                            <input
                                type="radio"
                                name="daycareKennelMode"
                                value="openRoam"
                                checked={daycareKennelMode === 'openRoam'}
                                onChange={() => setDaycareKennelMode('openRoam')}
                                className="mt-1"
                            />
                            <span className="space-y-1">
                                <span className="block text-sm font-semibold text-gray-900">
                                    {t('daycare_kennel_mode_open_roam_label')}
                                </span>
                                <span className="block text-xs text-gray-500">
                                    {t('daycare_kennel_mode_open_roam_helper')}
                                </span>
                            </span>
                        </label>

                        <label className="flex items-start gap-3 rounded-xl border border-gray-200 bg-white p-3">
                            <input
                                type="radio"
                                name="daycareKennelMode"
                                value="kennelBased"
                                checked={daycareKennelMode === 'kennelBased'}
                                onChange={() => setDaycareKennelMode('kennelBased')}
                                className="mt-1"
                            />
                            <span className="space-y-1">
                                <span className="block text-sm font-semibold text-gray-900">
                                    {t('daycare_kennel_mode_kennel_based_label')}
                                </span>
                                <span className="block text-xs text-gray-500">
                                    {t('daycare_kennel_mode_kennel_based_helper')}
                                </span>
                            </span>
                        </label>
                    </div>
                </div>

                <div className="rounded-2xl border border-stone-200 bg-stone-50/70 p-4">
                    {kennelTypes.length === 0 ? (
                        <p className="mb-4 text-sm text-gray-500">{t('no_kennel_types_message')}</p>
                    ) : null}

                    <div className="space-y-3">
                        {kennelTypes.map((kennel) => (
                            <div
                                key={`kennel-${kennel.id}`}
                                className="grid grid-cols-1 gap-2 sm:grid-cols-[minmax(0,1fr)_88px_auto]"
                            >
                                <input
                                    value={kennel.name}
                                    onChange={(e) => onKennelNameChange(kennel.id, e.target.value)}
                                    placeholder={t('kennel_type_placeholder')}
                                    className="w-full rounded border px-3 py-2 text-sm"
                                />
                                <input
                                    value={kennel.totalCount}
                                    onChange={(e) => onKennelCountChange(kennel.id, e.target.value)}
                                    placeholder={t('kennel_quantity_placeholder')}
                                    inputMode="numeric"
                                    pattern="[0-9]*"
                                    className="w-full rounded border px-3 py-2 text-sm"
                                />
                                <button
                                    type="button"
                                    onClick={() => onRemoveKennelType(kennel.id)}
                                    className="justify-self-start px-2 py-2 text-lg font-bold leading-none text-red-600"
                                    aria-label={t('delete_kennel_button')}
                                >
                                    &times;
                                </button>
                            </div>
                        ))}
                    </div>

                    <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-[minmax(0,1fr)_88px_auto]">
                        <input
                            value={newKennelName}
                            onChange={(e) => setNewKennelName(e.target.value.slice(0, 35))}
                            placeholder={t('new_kennel_type_placeholder')}
                            className="w-full rounded border px-3 py-2 text-sm"
                        />
                        <input
                            value={newKennelCount}
                            onChange={(e) => setNewKennelCount(sanitizeKennelCount(e.target.value))}
                            placeholder={t('kennel_quantity_placeholder')}
                            inputMode="numeric"
                            pattern="[0-9]*"
                            className="w-full rounded border px-3 py-2 text-sm"
                        />
                        <button
                            type="button"
                            onClick={onAddKennelType}
                            disabled={!businessId || newKennelName.trim() === '' || sanitizeKennelCount(newKennelCount) === ''}
                            className="rounded bg-[#2c4a30] px-4 py-2 text-sm font-semibold text-white transition disabled:cursor-not-allowed disabled:bg-gray-300"
                        >
                            {t('add_kennel_button')}
                        </button>
                    </div>
                </div>
            </div>
        </SectionCard>
    );
}

export function BookingPoliciesSection({
    maxAppointmentsPerSlot,
    setMaxAppointmentsPerSlot,
    requireDaycareReservationApproval,
    setRequireDaycareReservationApproval,
    requireBoardingReservationApproval,
    setRequireBoardingReservationApproval,
    offersBoarding,
    depositRequired,
    setDepositRequired,
    depositAmount,
    setDepositAmount,
    cancellationPolicy,
    setCancellationPolicy,
    cancellationOptions,
    onOpenBoardingPricingRules,
}: BookingPoliciesSectionProps) {
    const t = useTranslations('boardingAndDaycareBusinessSettings');

    return (
        <SectionCard id="boardingPolicies" title={t('booking_policy_header')}>
            <div className="space-y-6">
                <div className="rounded-2xl border border-stone-200 bg-stone-50/70 p-4">
                    <label className="mb-2 block font-semibold text-sm">{t('max_appointments_picker_label')}</label>
                    <select
                        value={maxAppointmentsPerSlot}
                        onChange={(e) => setMaxAppointmentsPerSlot(Number(e.target.value))}
                        className="w-full rounded border px-3 py-2 text-sm"
                    >
                        {Array.from({ length: 10 }, (_, index) => index + 1).map((value) => (
                            <option key={`limit-${value}`} value={value}>
                                {value}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="space-y-3 rounded-2xl border border-stone-200 bg-stone-50/70 p-4">
                    <Toggle
                        label={t('require_daycare_approval_toggle')}
                        checked={requireDaycareReservationApproval}
                        onChange={setRequireDaycareReservationApproval}
                    />
                    <Toggle
                        label={t('require_boarding_approval_toggle')}
                        checked={requireBoardingReservationApproval}
                        onChange={setRequireBoardingReservationApproval}
                    />

                    {offersBoarding ? (
                        <>
                            <Toggle
                                label={t('deposit_required_toggle')}
                                checked={depositRequired}
                                onChange={setDepositRequired}
                            />
                            <p className="ml-8 text-xs text-gray-500">{t('deposit_required_helper')}</p>

                            {depositRequired ? (
                                <div className="ml-8">
                                    <label className="mb-1 block font-semibold text-sm">{t('deposit_amount_label')}</label>
                                    <input
                                        type="text"
                                        value={depositAmount}
                                        onChange={(e) => setDepositAmount(e.target.value)}
                                        placeholder={t('deposit_amount_placeholder')}
                                        className="w-full rounded border px-3 py-2 text-sm"
                                    />
                                    <p className="mt-1 text-xs text-gray-500">{t('deposit_amount_helper')}</p>
                                </div>
                            ) : null}

                            <div className="ml-8">
                                <label className="mb-1 block font-semibold text-sm">{t('cancellation_policy_picker')}</label>
                                <select
                                    value={cancellationPolicy}
                                    onChange={(e) => setCancellationPolicy(e.target.value)}
                                    className="w-full rounded border px-3 py-2 text-sm"
                                >
                                    {cancellationOptions.map((option) => (
                                        <option key={option} value={option}>
                                            {option === 'No Refund'
                                                ? t('cancellation_no_refund')
                                                : option === 'Partial Refund'
                                                    ? t('cancellation_partial_refund')
                                                    : t('cancellation_full_refund')}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <ActionCard
                                title={t('boarding_pricing_rules_card_title')}
                                body={t('boarding_pricing_rules_card_body')}
                                buttonLabel={t('boarding_pricing_rules_card_button')}
                                onClick={onOpenBoardingPricingRules}
                            />
                        </>
                    ) : null}
                </div>
            </div>
        </SectionCard>
    );
}

export function TimeSettingsSection({
    showSection,
    offersDaycare,
    offersBoarding,
    requiresAssessment,
    dropOffTimeRequiredDaycare,
    setDropOffTimeRequiredDaycare,
    pickUpTimeRequiredDaycare,
    setPickUpTimeRequiredDaycare,
    dropOffTimeRequiredBoarding,
    setDropOffTimeRequiredBoarding,
    pickUpTimeRequiredBoarding,
    setPickUpTimeRequiredBoarding,
    dropOffTimeRequiredAssessment,
    setDropOffTimeRequiredAssessment,
    pickUpTimeRequiredAssessment,
    setPickUpTimeRequiredAssessment,
    afterHoursPickUpTimeRequired,
    setAfterHoursPickUpTimeRequired,
    beforeHoursPickUpTimeRequired,
    setBeforeHoursPickUpTimeRequired,
    earlyDropOffTimeRequired,
    setEarlyDropOffTimeRequired,
    afterHoursDropOffTimeRequired,
    setAfterHoursDropOffTimeRequired,
    daysOfWeek,
    timeOptions,
    collapsedDays,
    setCollapsedDays,
    noDaycareDays,
    setNoDaycareDays,
    noBoardingDays,
    setNoBoardingDays,
    noAssessmentDays,
    setNoAssessmentDays,
    noAfterHoursDays,
    setNoAfterHoursDays,
    noBeforeHoursPickUpDays,
    setNoBeforeHoursPickUpDays,
    noEarlyDropOffDays,
    setNoEarlyDropOffDays,
    noAfterHoursDropOffDays,
    setNoAfterHoursDropOffDays,
    dropOffTimesDaycare,
    pickUpTimesDaycare,
    dropOffTimesBoarding,
    pickUpTimesBoarding,
    assessmentDropOffTimes,
    setAssessmentDropOffTimes,
    assessmentPickUpTimes,
    setAssessmentPickUpTimes,
    afterHoursPickUpTimes,
    beforeHoursPickUpTimes,
    earlyDropOffTimes,
    afterHoursDropOffTimes,
    onToggleDayTime,
    onToggleAfterHoursTime,
    onToggleBeforeHoursPickupTime,
    onToggleEarlyDropOffTime,
    onToggleAfterHoursDropOffTime,
}: TimeSettingsSectionProps) {
    const t = useTranslations('boardingAndDaycareBusinessSettings');

    if (!showSection) {
        return null;
    }

    const toggleCollapsed = (collapsedKey: string) => {
        setCollapsedDays((prev) => ({ ...prev, [collapsedKey]: !prev[collapsedKey] }));
    };

    return (
        <SectionCard id="timeSettings" title={t('drop_pick_time_header')}>
            <div className="space-y-6">
                <div className="space-y-3 rounded-2xl border border-stone-200 bg-stone-50/70 p-4">
                    {offersDaycare ? (
                        <>
                            <Toggle
                                label={t('require_drop_daycare')}
                                checked={dropOffTimeRequiredDaycare}
                                onChange={setDropOffTimeRequiredDaycare}
                            />
                            <Toggle
                                label={t('require_pick_daycare')}
                                checked={pickUpTimeRequiredDaycare}
                                onChange={setPickUpTimeRequiredDaycare}
                            />
                        </>
                    ) : null}

                    {offersBoarding ? (
                        <>
                            <Toggle
                                label={t('require_drop_boarding')}
                                checked={dropOffTimeRequiredBoarding}
                                onChange={setDropOffTimeRequiredBoarding}
                            />
                            <Toggle
                                label={t('require_pick_boarding')}
                                checked={pickUpTimeRequiredBoarding}
                                onChange={setPickUpTimeRequiredBoarding}
                            />
                        </>
                    ) : null}

                    {requiresAssessment ? (
                        <>
                            <Toggle
                                label={t('require_drop_assessment')}
                                checked={dropOffTimeRequiredAssessment}
                                onChange={setDropOffTimeRequiredAssessment}
                            />
                            <Toggle
                                label={t('require_pick_assessment')}
                                checked={pickUpTimeRequiredAssessment}
                                onChange={setPickUpTimeRequiredAssessment}
                            />
                        </>
                    ) : null}

                    {(offersBoarding || offersDaycare) ? (
                        <Toggle
                            label={t('require_after_hours_pickup')}
                            checked={afterHoursPickUpTimeRequired}
                            onChange={setAfterHoursPickUpTimeRequired}
                        />
                    ) : null}

                    {offersBoarding ? (
                        <>
                            <p className="ml-8 text-xs text-gray-500">{t('boarding_regular_hours_helper')}</p>

                            <Toggle
                                label={t('require_before_hours_pickup')}
                                checked={beforeHoursPickUpTimeRequired}
                                onChange={setBeforeHoursPickUpTimeRequired}
                            />
                            <p className="ml-8 text-xs text-gray-500">{t('before_hours_pickup_helper')}</p>

                            <Toggle
                                label={t('require_early_dropoff')}
                                checked={earlyDropOffTimeRequired}
                                onChange={setEarlyDropOffTimeRequired}
                            />
                            <p className="ml-8 text-xs text-gray-500">{t('early_dropoff_helper')}</p>

                            <Toggle
                                label={t('require_after_hours_dropoff')}
                                checked={afterHoursDropOffTimeRequired}
                                onChange={setAfterHoursDropOffTimeRequired}
                            />
                            <p className="ml-8 text-xs text-gray-500">{t('after_hours_dropoff_helper')}</p>
                        </>
                    ) : null}
                </div>

                {offersDaycare && dropOffTimeRequiredDaycare ? (
                    <TimeWindowSection
                        title={t('daycare_drop_times')}
                        daysOfWeek={daysOfWeek}
                        disabledDays={noDaycareDays}
                        noDayLabel={t('no_daycare_day')}
                        onToggleDayDisabled={(day, value) => {
                            const updated = new Set(noDaycareDays);
                            if (value) {
                                updated.add(day);
                            } else {
                                updated.delete(day);
                            }
                            setNoDaycareDays(updated);
                        }}
                        collapsedDays={collapsedDays}
                        collapsedKeySuffix="daycare-drop"
                        onToggleCollapsed={toggleCollapsed}
                        timeOptions={timeOptions}
                        selectedTimes={dropOffTimesDaycare}
                        onToggleTime={(day, time) => onToggleDayTime('dropOff', 'daycare', day, time)}
                        expandLabel={t('expand')}
                        collapseLabel={t('collapse')}
                    />
                ) : null}

                {offersDaycare && pickUpTimeRequiredDaycare ? (
                    <TimeWindowSection
                        title={t('daycare_pickup_times')}
                        daysOfWeek={daysOfWeek}
                        disabledDays={noDaycareDays}
                        collapsedDays={collapsedDays}
                        collapsedKeySuffix="daycare-pickup"
                        onToggleCollapsed={toggleCollapsed}
                        timeOptions={timeOptions}
                        selectedTimes={pickUpTimesDaycare}
                        onToggleTime={(day, time) => onToggleDayTime('pickUp', 'daycare', day, time)}
                        expandLabel={t('expand')}
                        collapseLabel={t('collapse')}
                    />
                ) : null}

                {offersBoarding && dropOffTimeRequiredBoarding ? (
                    <TimeWindowSection
                        title={t('boarding_drop_times')}
                        daysOfWeek={daysOfWeek}
                        disabledDays={noBoardingDays}
                        noDayLabel={t('no_boarding_day')}
                        onToggleDayDisabled={(day, value) => {
                            const updated = new Set(noBoardingDays);
                            if (value) {
                                updated.add(day);
                            } else {
                                updated.delete(day);
                            }
                            setNoBoardingDays(updated);
                        }}
                        collapsedDays={collapsedDays}
                        collapsedKeySuffix="boarding-drop"
                        onToggleCollapsed={toggleCollapsed}
                        timeOptions={timeOptions}
                        selectedTimes={dropOffTimesBoarding}
                        onToggleTime={(day, time) => onToggleDayTime('dropOff', 'boarding', day, time)}
                        expandLabel={t('expand')}
                        collapseLabel={t('collapse')}
                        showDayLabel
                    />
                ) : null}

                {offersBoarding && pickUpTimeRequiredBoarding ? (
                    <TimeWindowSection
                        title={t('boarding_pickup_times')}
                        daysOfWeek={daysOfWeek}
                        disabledDays={noBoardingDays}
                        collapsedDays={collapsedDays}
                        collapsedKeySuffix="boarding-pickup"
                        onToggleCollapsed={toggleCollapsed}
                        timeOptions={timeOptions}
                        selectedTimes={pickUpTimesBoarding}
                        onToggleTime={(day, time) => onToggleDayTime('pickUp', 'boarding', day, time)}
                        expandLabel={t('expand')}
                        collapseLabel={t('collapse')}
                        showDayLabel
                    />
                ) : null}

                {afterHoursPickUpTimeRequired ? (
                    <TimeWindowSection
                        title={t('after_hours_time_settings_title')}
                        subtitle={`${t('after_hours_pickup_times')} ${t('after_hours_pickup_times_helper')}`}
                        daysOfWeek={daysOfWeek}
                        disabledDays={noAfterHoursDays}
                        noDayLabel={t('no_after_hours_day')}
                        onToggleDayDisabled={(day, value) => {
                            const updated = new Set(noAfterHoursDays);
                            if (value) {
                                updated.add(day);
                            } else {
                                updated.delete(day);
                            }
                            setNoAfterHoursDays(updated);
                        }}
                        collapsedDays={collapsedDays}
                        collapsedKeySuffix="afterhours-pickup"
                        onToggleCollapsed={toggleCollapsed}
                        timeOptions={timeOptions}
                        selectedTimes={afterHoursPickUpTimes}
                        onToggleTime={onToggleAfterHoursTime}
                        expandLabel={t('expand')}
                        collapseLabel={t('collapse')}
                        showDayLabel
                    />
                ) : null}

                {offersBoarding && beforeHoursPickUpTimeRequired ? (
                    <TimeWindowSection
                        title={t('before_hours_pickup_times_title')}
                        subtitle={`${t('before_hours_pickup_times')} ${t('before_hours_pickup_times_helper')}`}
                        daysOfWeek={daysOfWeek}
                        disabledDays={noBeforeHoursPickUpDays}
                        noDayLabel={t('no_before_hours_pickup_day')}
                        onToggleDayDisabled={(day, value) => {
                            const updated = new Set(noBeforeHoursPickUpDays);
                            if (value) {
                                updated.add(day);
                            } else {
                                updated.delete(day);
                            }
                            setNoBeforeHoursPickUpDays(updated);
                        }}
                        collapsedDays={collapsedDays}
                        collapsedKeySuffix="beforehours-pickup"
                        onToggleCollapsed={toggleCollapsed}
                        timeOptions={timeOptions}
                        selectedTimes={beforeHoursPickUpTimes}
                        onToggleTime={onToggleBeforeHoursPickupTime}
                        expandLabel={t('expand')}
                        collapseLabel={t('collapse')}
                        showDayLabel
                    />
                ) : null}

                {offersBoarding && earlyDropOffTimeRequired ? (
                    <TimeWindowSection
                        title={t('early_dropoff_times_title')}
                        subtitle={`${t('early_dropoff_times')} ${t('early_dropoff_times_helper')}`}
                        daysOfWeek={daysOfWeek}
                        disabledDays={noEarlyDropOffDays}
                        noDayLabel={t('no_early_dropoff_day')}
                        onToggleDayDisabled={(day, value) => {
                            const updated = new Set(noEarlyDropOffDays);
                            if (value) {
                                updated.add(day);
                            } else {
                                updated.delete(day);
                            }
                            setNoEarlyDropOffDays(updated);
                        }}
                        collapsedDays={collapsedDays}
                        collapsedKeySuffix="early-dropoff"
                        onToggleCollapsed={toggleCollapsed}
                        timeOptions={timeOptions}
                        selectedTimes={earlyDropOffTimes}
                        onToggleTime={onToggleEarlyDropOffTime}
                        expandLabel={t('expand')}
                        collapseLabel={t('collapse')}
                        showDayLabel
                    />
                ) : null}

                {offersBoarding && afterHoursDropOffTimeRequired ? (
                    <TimeWindowSection
                        title={t('after_hours_dropoff_times_title')}
                        subtitle={`${t('after_hours_dropoff_times')} ${t('after_hours_dropoff_times_helper')}`}
                        daysOfWeek={daysOfWeek}
                        disabledDays={noAfterHoursDropOffDays}
                        noDayLabel={t('no_after_hours_dropoff_day')}
                        onToggleDayDisabled={(day, value) => {
                            const updated = new Set(noAfterHoursDropOffDays);
                            if (value) {
                                updated.add(day);
                            } else {
                                updated.delete(day);
                            }
                            setNoAfterHoursDropOffDays(updated);
                        }}
                        collapsedDays={collapsedDays}
                        collapsedKeySuffix="afterhours-dropoff"
                        onToggleCollapsed={toggleCollapsed}
                        timeOptions={timeOptions}
                        selectedTimes={afterHoursDropOffTimes}
                        onToggleTime={onToggleAfterHoursDropOffTime}
                        expandLabel={t('expand')}
                        collapseLabel={t('collapse')}
                        showDayLabel
                    />
                ) : null}

                {requiresAssessment && (dropOffTimeRequiredAssessment || pickUpTimeRequiredAssessment) ? (
                    <div className="space-y-6 rounded-2xl border border-stone-200 bg-stone-50/70 p-4">
                        <h3 className="text-lg font-semibold text-center text-[color:var(--color-accent)]">
                            {t('assessment_time_settings_title')}
                        </h3>

                        {dropOffTimeRequiredAssessment ? (
                            <TimeWindowSection
                                title={t('assessment_drop_times')}
                                daysOfWeek={daysOfWeek}
                                disabledDays={noAssessmentDays}
                                noDayLabel={t('no_assessment_day')}
                                onToggleDayDisabled={(day, value) => {
                                    const updated = new Set(noAssessmentDays);
                                    if (value) {
                                        updated.add(day);
                                        setAssessmentDropOffTimes((prev) => ({ ...prev, [day]: [] }));
                                    } else {
                                        updated.delete(day);
                                    }
                                    setNoAssessmentDays(updated);
                                }}
                                collapsedDays={collapsedDays}
                                collapsedKeySuffix="assessment-drop"
                                onToggleCollapsed={toggleCollapsed}
                                timeOptions={timeOptions}
                                selectedTimes={assessmentDropOffTimes}
                                onToggleTime={(day, time) => {
                                    const current = assessmentDropOffTimes[day] || [];
                                    const updated = current.includes(time)
                                        ? current.filter((selected) => selected !== time)
                                        : [...current, time];
                                    setAssessmentDropOffTimes((prev) => ({ ...prev, [day]: updated }));
                                }}
                                expandLabel={t('expand')}
                                collapseLabel={t('collapse')}
                            />
                        ) : null}

                        {pickUpTimeRequiredAssessment ? (
                            <TimeWindowSection
                                title={t('assessment_pickup_times')}
                                daysOfWeek={daysOfWeek}
                                disabledDays={noAssessmentDays}
                                collapsedDays={collapsedDays}
                                collapsedKeySuffix="assessment-pickup"
                                onToggleCollapsed={toggleCollapsed}
                                timeOptions={timeOptions}
                                selectedTimes={assessmentPickUpTimes}
                                onToggleTime={(day, time) => {
                                    const current = assessmentPickUpTimes[day] || [];
                                    const updated = current.includes(time)
                                        ? current.filter((selected) => selected !== time)
                                        : [...current, time];
                                    setAssessmentPickUpTimes((prev) => ({ ...prev, [day]: updated }));
                                }}
                                expandLabel={t('expand')}
                                collapseLabel={t('collapse')}
                            />
                        ) : null}
                    </div>
                ) : null}
            </div>
        </SectionCard>
    );
}

export function WhatToBringSection({
    visible,
    boardingRequiredItems,
    setBoardingRequiredItems,
    boardingProhibitedItems,
    setBoardingProhibitedItems,
}: WhatToBringSectionProps) {
    const t = useTranslations('boardingAndDaycareBusinessSettings');

    if (!visible) {
        return null;
    }

    return (
        <SectionCard id="whatToBring" title={t('what_to_bring_header')}>
            <div className="grid gap-6 xl:grid-cols-2">
                <RepeatingTextareaList
                    label={t('boarding_required_items_label')}
                    items={boardingRequiredItems}
                    placeholder={(index) => t('boarding_required_item_placeholder', { num: index + 1 })}
                    addButtonLabel={t('add_boarding_required_item_button')}
                    onChange={(index, value) =>
                        setBoardingRequiredItems((prev) => prev.map((item, itemIndex) => (
                            itemIndex === index ? value : item
                        )))
                    }
                    onAdd={() => setBoardingRequiredItems((prev) => [...prev, ''])}
                    onRemove={(index) => setBoardingRequiredItems((prev) => prev.filter((_, itemIndex) => itemIndex !== index))}
                />

                <RepeatingTextareaList
                    label={t('boarding_prohibited_items_label')}
                    items={boardingProhibitedItems}
                    placeholder={(index) => t('boarding_prohibited_item_placeholder', { num: index + 1 })}
                    addButtonLabel={t('add_boarding_prohibited_item_button')}
                    onChange={(index, value) =>
                        setBoardingProhibitedItems((prev) => prev.map((item, itemIndex) => (
                            itemIndex === index ? value : item
                        )))
                    }
                    onAdd={() => setBoardingProhibitedItems((prev) => [...prev, ''])}
                    onRemove={(index) => setBoardingProhibitedItems((prev) => prev.filter((_, itemIndex) => itemIndex !== index))}
                />
            </div>
        </SectionCard>
    );
}

export function HealthRequirementsSection({
    requiredVaccinations,
    setRequiredVaccinations,
    requiredTests,
    setRequiredTests,
    temperamentTestRequired,
    setTemperamentTestRequired,
}: HealthRequirementsSectionProps) {
    const t = useTranslations('boardingAndDaycareBusinessSettings');

    return (
        <SectionCard id="health" title={t('health_requirements_header')}>
            <div className="space-y-4">
                <ToggleGroupBlock title={t('required_vaccinations_header')}>
                    {Object.keys(requiredVaccinations).sort().map((vaccine) => (
                        <Toggle
                            key={`vac-${vaccine}`}
                            label={vaccine}
                            checked={requiredVaccinations[vaccine]}
                            onChange={(value) => setRequiredVaccinations((prev) => ({ ...prev, [vaccine]: value }))}
                        />
                    ))}
                </ToggleGroupBlock>

                <ToggleGroupBlock title={t('additional_required_tests_header')}>
                    {Object.keys(requiredTests).sort().map((test) => (
                        <Toggle
                            key={`test-${test}`}
                            label={test}
                            checked={requiredTests[test]}
                            onChange={(value) => setRequiredTests((prev) => ({ ...prev, [test]: value }))}
                        />
                    ))}
                </ToggleGroupBlock>

                <ToggleGroupBlock title={t('pet_requirements_header')}>
                    <Toggle
                        label={t('temperament_test_toggle')}
                        checked={temperamentTestRequired}
                        onChange={setTemperamentTestRequired}
                    />
                    <p className="ml-8 text-xs text-gray-500">{t('temperament_test_helper_text')}</p>
                </ToggleGroupBlock>
            </div>
        </SectionCard>
    );
}

export function WaiverSection({
    waiverRequired,
    setWaiverRequired,
    waiverText,
    setWaiverText,
}: WaiverSectionProps) {
    const t = useTranslations('boardingAndDaycareBusinessSettings');

    return (
        <SectionCard id="waiver" title={t('waiver_settings_header')}>
            <div className="space-y-4">
                <Toggle label={t('require_waiver_toggle')} checked={waiverRequired} onChange={setWaiverRequired} />

                <div>
                    <label className="mb-1 block font-semibold text-sm">{t('waiver_text_label')}</label>
                    <div className="relative">
                        {waiverText.trim() === '' ? (
                            <span className="pointer-events-none absolute top-2 left-3 text-sm text-gray-400">
                                {t('waiver_text_placeholder')}
                            </span>
                        ) : null}
                        <textarea
                            className="h-64 w-full resize-none rounded border px-3 py-2 text-sm"
                            value={waiverText}
                            onChange={(e) => setWaiverText(e.target.value)}
                        />
                    </div>
                </div>
            </div>
        </SectionCard>
    );
}

export function OptionalFeaturesSection({
    optionalFeatures,
    setOptionalFeatures,
}: OptionalFeaturesSectionProps) {
    const t = useTranslations('boardingAndDaycareBusinessSettings');

    return (
        <SectionCard id="optionalFeatures" title={t('optional_features_header')}>
            <div className="space-y-3">
                <Toggle
                    label={t('employee_management_toggle')}
                    checked={optionalFeatures.employeeManagement}
                    onChange={(value) => setOptionalFeatures((prev) => ({ ...prev, employeeManagement: value }))}
                />
                <Toggle
                    label={t('state_paperwork_toggle')}
                    checked={optionalFeatures.statePaperworkLog}
                    onChange={(value) => setOptionalFeatures((prev) => ({ ...prev, statePaperworkLog: value }))}
                />
                <Toggle
                    label={t('enable_financial_management')}
                    checked={optionalFeatures.financialManagement}
                    onChange={(value) => setOptionalFeatures((prev) => ({ ...prev, financialManagement: value }))}
                />
            </div>
        </SectionCard>
    );
}

export function ReviewSaveSection({
    saveSuccess,
    saving,
    onSave,
}: ReviewSaveSectionProps) {
    const t = useTranslations('boardingAndDaycareBusinessSettings');

    return (
        <SectionCard id="reviewSave" title={t('review_save_header')}>
            <div className="space-y-4">
                {saveSuccess ? (
                    <div className="w-full rounded bg-green-600 py-2 text-center text-sm font-medium text-white">
                        {t('save_success_banner')}
                    </div>
                ) : null}

                <button
                    type="button"
                    onClick={onSave}
                    disabled={saving}
                    className="block w-full rounded bg-[#2c4a30] px-4 py-3 text-sm text-white transition hover:bg-[#1e3624]"
                >
                    {saving ? t('saving') : t('save_changes_button')}
                </button>
            </div>
        </SectionCard>
    );
}
