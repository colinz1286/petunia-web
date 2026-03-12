'use client';

export type KennelTypeForm = {
    id: string;
    name: string;
    totalCount: string;
};

export type BusinessSettingsSectionId =
    | 'general'
    | 'hours'
    | 'blackoutDates'
    | 'services'
    | 'pricing'
    | 'payments'
    | 'boardingPolicies'
    | 'kennels'
    | 'timeSettings'
    | 'whatToBring'
    | 'health'
    | 'waiver'
    | 'optionalFeatures'
    | 'reviewSave';

export type BusinessSettingsNavItem = {
    id: BusinessSettingsSectionId;
    label: string;
};
