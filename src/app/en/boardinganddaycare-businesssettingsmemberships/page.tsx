'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';
import { app } from '@/lib/firebaseClient';
import { centsToCurrencyText, currencyTextToCents } from '@/lib/currencyUtils';
import {
  emptyMembershipPlan,
  formatCurrencyCents,
  loadMembershipPlans,
  membershipPlanKindLabel,
  membershipUnitLabel,
  saveMembershipPlans,
  type MembershipPlan,
  type MembershipServiceKey,
} from '@/lib/boardingAndDaycareMemberships';

function sortPlans(plans: MembershipPlan[]): MembershipPlan[] {
  return [...plans].sort((a, b) => {
    if (a.active !== b.active) return a.active ? -1 : 1;
    return a.name.localeCompare(b.name);
  });
}

function selectedServiceForPlan(plan: MembershipPlan): MembershipServiceKey {
  return plan.appliesToServices.boarding ? 'boarding' : 'daycare';
}

function describePlan(plan: MembershipPlan): string {
  const serviceLabel = plan.appliesToServices.boarding ? 'Boarding' : 'Daycare';
  const kindLabel = membershipPlanKindLabel(plan.planKind);
  const unitLabel = plan.includedUnits
    ? `${plan.includedUnits} ${membershipUnitLabel(plan.unitType, plan.includedUnits)}`
    : plan.planKind === 'monthlyPass'
      ? 'Unlimited usage'
      : 'No included units set';

  if (plan.planKind === 'monthlyPass') {
    const months = plan.durationMonths || 1;
    return `${kindLabel} for ${serviceLabel}: ${unitLabel}, valid for ${months} month${months === 1 ? '' : 's'} from purchase.`;
  }

  if (plan.durationDays) {
    return `${kindLabel} for ${serviceLabel}: ${unitLabel}, valid for ${plan.durationDays} day${plan.durationDays === 1 ? '' : 's'} from purchase.`;
  }

  return `${kindLabel} for ${serviceLabel}: ${unitLabel}.`;
}

export default function BoardingAndDaycareBusinessSettingsMembershipsPage() {
  const router = useRouter();
  const locale = useLocale();
  const t = useTranslations('boardingAndDaycareBusinessSettingsMemberships');

  const auth = getAuth(app);
  const db = getFirestore(app);

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [businessId, setBusinessId] = useState<string | null>(null);
  const [plans, setPlans] = useState<MembershipPlan[]>([]);
  const [showEditor, setShowEditor] = useState(false);
  const [editingPlan, setEditingPlan] = useState<MembershipPlan>(emptyMembershipPlan());
  const [priceText, setPriceText] = useState('0.00');
  const [includedUnitsText, setIncludedUnitsText] = useState('10');
  const [durationDaysText, setDurationDaysText] = useState('');
  const [durationMonthsText, setDurationMonthsText] = useState('1');
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [statusTone, setStatusTone] = useState<'success' | 'error'>('success');

  const resolveBusinessIdForOwner = useCallback(async (uid: string): Promise<string | null> => {
    try {
      const ownerIdMatches = await getDocs(
        query(collection(db, 'businesses'), where('ownerId', '==', uid))
      );
      if (!ownerIdMatches.empty) return ownerIdMatches.docs[0].id;
    } catch {
      // Try the array-based model next.
    }

    try {
      const ownerIdsMatches = await getDocs(
        query(collection(db, 'businesses'), where('ownerIds', 'array-contains', uid))
      );
      if (!ownerIdsMatches.empty) return ownerIdsMatches.docs[0].id;
    } catch {
      // Ignore and return null below.
    }

    return null;
  }, [db]);

  const refreshPlans = useCallback(async (resolvedBusinessId: string) => {
    const nextPlans = await loadMembershipPlans(db, resolvedBusinessId);
    setPlans(sortPlans(nextPlans));
  }, [db]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (!user) {
        router.push(`/${locale}/loginsignup`);
        return;
      }

      try {
        const resolvedBusinessId = await resolveBusinessIdForOwner(user.uid);
        setBusinessId(resolvedBusinessId);
        if (!resolvedBusinessId) {
          setStatusTone('error');
          setStatusMessage(t('error_business_unresolved'));
          setLoading(false);
          return;
        }

        await refreshPlans(resolvedBusinessId);
        setLoading(false);
      } catch (error) {
        console.error('Failed to load membership settings:', error);
        setStatusTone('error');
        setStatusMessage(t('error_load_failed'));
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, [auth, locale, refreshPlans, resolveBusinessIdForOwner, router, t]);

  const resetEditor = () => {
    const next = emptyMembershipPlan();
    setEditingPlan(next);
    setPriceText('0.00');
    setIncludedUnitsText('10');
    setDurationDaysText('');
    setDurationMonthsText('1');
  };

  const openCreate = () => {
    resetEditor();
    setStatusMessage(null);
    setShowEditor(true);
  };

  const openEdit = (plan: MembershipPlan) => {
    setEditingPlan(plan);
    setPriceText(centsToCurrencyText(plan.priceCents));
    setIncludedUnitsText(plan.includedUnits ? String(plan.includedUnits) : '');
    setDurationDaysText(plan.durationDays ? String(plan.durationDays) : '');
    setDurationMonthsText(String(plan.durationMonths || 1));
    setStatusMessage(null);
    setShowEditor(true);
  };

  const selectedService = useMemo(
    () => selectedServiceForPlan(editingPlan),
    [editingPlan]
  );

  const activePlanCount = useMemo(
    () => plans.filter((plan) => plan.active).length,
    [plans]
  );

  const handleServiceChange = (service: MembershipServiceKey) => {
    setEditingPlan((prev) => ({
      ...prev,
      appliesToServices: {
        daycare: service === 'daycare',
        boarding: service === 'boarding',
      },
      unitType: service === 'boarding' ? 'boardingNight' : 'daycareDay',
    }));
  };

  const handlePlanKindChange = (planKind: MembershipPlan['planKind']) => {
    setEditingPlan((prev) => ({
      ...prev,
      planKind,
    }));

    if (planKind === 'monthlyPass') {
      setDurationMonthsText((current) => current || '1');
    }
  };

  const handleSave = async () => {
    if (!businessId) return;

    const trimmedName = editingPlan.name.trim();
    if (!trimmedName) {
      setStatusTone('error');
      setStatusMessage(t('validation_name_required'));
      return;
    }

    const selectedCount = Number(editingPlan.appliesToServices.daycare) + Number(editingPlan.appliesToServices.boarding);
    if (selectedCount !== 1) {
      setStatusTone('error');
      setStatusMessage(t('validation_choose_service'));
      return;
    }

    const parsedPriceCents = currencyTextToCents(priceText);
    const parsedIncludedUnits = includedUnitsText.trim()
      ? Number.parseInt(includedUnitsText.trim(), 10)
      : null;
    const parsedDurationDays = durationDaysText.trim()
      ? Number.parseInt(durationDaysText.trim(), 10)
      : null;
    const parsedDurationMonths = durationMonthsText.trim()
      ? Number.parseInt(durationMonthsText.trim(), 10)
      : null;

    if (editingPlan.planKind === 'package' && (!parsedIncludedUnits || parsedIncludedUnits <= 0)) {
      setStatusTone('error');
      setStatusMessage(t('validation_package_units_required'));
      return;
    }

    if (editingPlan.planKind === 'monthlyPass' && (!parsedDurationMonths || parsedDurationMonths <= 0)) {
      setStatusTone('error');
      setStatusMessage(t('validation_monthly_months_required'));
      return;
    }

    if (parsedDurationDays !== null && parsedDurationDays <= 0) {
      setStatusTone('error');
      setStatusMessage(t('validation_duration_days_positive'));
      return;
    }

    const now = new Date();
    const nextPlan: MembershipPlan = {
      ...editingPlan,
      id: editingPlan.id || crypto.randomUUID(),
      name: trimmedName,
      unitType: editingPlan.appliesToServices.boarding ? 'boardingNight' : 'daycareDay',
      priceCents: parsedPriceCents,
      includedUnits: editingPlan.planKind === 'monthlyPass'
        ? (parsedIncludedUnits && parsedIncludedUnits > 0 ? parsedIncludedUnits : null)
        : parsedIncludedUnits,
      durationDays: editingPlan.planKind === 'package'
        ? (parsedDurationDays && parsedDurationDays > 0 ? parsedDurationDays : null)
        : null,
      durationMonths: editingPlan.planKind === 'monthlyPass'
        ? (parsedDurationMonths && parsedDurationMonths > 0 ? parsedDurationMonths : 1)
        : null,
      createdAt: editingPlan.createdAt || now,
      updatedAt: now,
    };

    const nextPlans = sortPlans(
      plans.some((plan) => plan.id === nextPlan.id)
        ? plans.map((plan) => (plan.id === nextPlan.id ? nextPlan : plan))
        : [...plans, nextPlan]
    );

    setSaving(true);
    setStatusMessage(null);
    try {
      await saveMembershipPlans({
        db,
        businessId,
        plans: nextPlans,
      });
      setPlans(nextPlans);
      setShowEditor(false);
      resetEditor();
      setStatusTone('success');
      setStatusMessage(t('save_success'));
    } catch (error) {
      console.error('Failed to save membership plan:', error);
      setStatusTone('error');
      setStatusMessage(t('save_failed'));
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (planId: string) => {
    if (!businessId) return;

    const nextPlans = plans.filter((plan) => plan.id !== planId);
    setSaving(true);
    setStatusMessage(null);
    try {
      await saveMembershipPlans({
        db,
        businessId,
        plans: nextPlans,
      });
      setPlans(nextPlans);
      if (editingPlan.id === planId) {
        setShowEditor(false);
        resetEditor();
      }
      setStatusTone('success');
      setStatusMessage(t('delete_success'));
    } catch (error) {
      console.error('Failed to delete membership plan:', error);
      setStatusTone('error');
      setStatusMessage(t('delete_failed'));
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="min-h-screen bg-[color:var(--color-background)] px-4 py-8 text-[color:var(--color-foreground)]">
      <div className="mx-auto max-w-4xl space-y-6">
        <button
          type="button"
          onClick={() => router.push(`/${locale}/boardinganddaycare-businesssettings`)}
          className="text-sm text-[color:var(--color-accent)] underline hover:opacity-80"
        >
          ← {t('back_to_business_settings')}
        </button>

        <div className="space-y-2">
          <h1 className="text-3xl font-bold text-[color:var(--color-accent)]">
            {t('title')}
          </h1>
          <p className="max-w-3xl text-sm text-gray-600">
            {t('subtitle')}
          </p>
          <p className="text-xs text-gray-500">
            {t('subtitle_secondary')}
          </p>
        </div>

        {statusMessage ? (
          <div
            className={`rounded-md border px-4 py-3 text-sm ${
              statusTone === 'success'
                ? 'border-green-200 bg-green-50 text-green-800'
                : 'border-red-200 bg-red-50 text-red-700'
            }`}
          >
            {statusMessage}
          </div>
        ) : null}

        {loading ? (
          <div className="rounded-md border border-gray-200 bg-white p-4 text-sm text-black">
            {t('loading')}
          </div>
        ) : (
          <>
            <div className="grid gap-4 md:grid-cols-[1.2fr_0.8fr]">
              <div className="rounded-xl border border-gray-200 bg-white p-5 text-black">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h2 className="text-xl font-semibold text-[color:var(--color-accent)]">
                      {t('plan_library_title')}
                    </h2>
                    <p className="mt-1 text-sm text-gray-600">
                      {t('plan_library_count', {
                        count: activePlanCount,
                        plural: activePlanCount === 1 ? '' : 's',
                      })}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={openCreate}
                    className="rounded-md bg-green-800 px-4 py-2 text-sm font-semibold text-white hover:bg-green-700"
                  >
                    {t('add_membership_button')}
                  </button>
                </div>

                {plans.length === 0 ? (
                  <div className="mt-6 rounded-md border border-dashed border-gray-300 bg-gray-50 p-6 text-sm text-gray-600">
                    {t('empty_state')}
                  </div>
                ) : (
                  <div className="mt-6 space-y-4">
                    {plans.map((plan) => (
                      <div
                        key={plan.id}
                        className="rounded-lg border border-gray-200 p-4 shadow-sm"
                      >
                        <div className="flex flex-wrap items-start justify-between gap-3">
                          <div className="space-y-1">
                            <div className="flex items-center gap-2">
                              <h3 className="font-semibold text-gray-900">{plan.name}</h3>
                              <span
                                className={`rounded-full px-2 py-0.5 text-xs font-semibold ${
                                  plan.active
                                    ? 'bg-green-100 text-green-800'
                                    : 'bg-gray-100 text-gray-600'
                                }`}
                              >
                                {plan.active ? t('status_active') : t('status_inactive')}
                              </span>
                            </div>
                            <p className="text-sm text-gray-600">{describePlan(plan)}</p>
                            <p className="text-sm font-medium text-gray-900">
                              {formatCurrencyCents(plan.priceCents)}
                            </p>
                            <p className="text-xs text-gray-500">
                              {plan.purchaseAtBooking
                                ? t('available_during_booking')
                                : t('not_available_during_booking')}
                            </p>
                            {plan.notes ? (
                              <p className="text-xs text-gray-500">{plan.notes}</p>
                            ) : null}
                          </div>

                          <div className="flex gap-2">
                            <button
                              type="button"
                              onClick={() => openEdit(plan)}
                              className="rounded-md border border-gray-300 px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                            >
                              {t('edit_button')}
                            </button>
                            <button
                              type="button"
                              onClick={() => handleDelete(plan.id)}
                              className="rounded-md border border-red-200 px-3 py-2 text-sm font-medium text-red-700 hover:bg-red-50"
                            >
                              {t('delete_button')}
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="rounded-xl border border-gray-200 bg-white p-5 text-black">
                <h2 className="text-xl font-semibold text-[color:var(--color-accent)]">
                  {t('what_to_configure_title')}
                </h2>
                <div className="mt-4 space-y-3 text-sm text-gray-700">
                  <p>{t('config_line_one')}</p>
                  <p>{t('config_line_two')}</p>
                  <p>{t('config_line_three')}</p>
                  <p>{t('config_line_four')}</p>
                </div>
              </div>
            </div>

            {showEditor ? (
              <div className="rounded-xl border border-gray-200 bg-white p-5 text-black">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h2 className="text-xl font-semibold text-[color:var(--color-accent)]">
                      {editingPlan.id ? t('edit_membership_title') : t('new_membership_title')}
                    </h2>
                    <p className="mt-1 text-sm text-gray-600">
                      {t('editor_subtitle')}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      setShowEditor(false);
                      resetEditor();
                    }}
                    className="rounded-md border border-gray-300 px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                  >
                    {t('close_button')}
                  </button>
                </div>

                <div className="mt-6 grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold">{t('membership_name_label')}</label>
                    <input
                      value={editingPlan.name}
                      onChange={(event) =>
                        setEditingPlan((prev) => ({ ...prev, name: event.target.value }))
                      }
                      className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
                      placeholder={t('membership_name_placeholder')}
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-semibold">{t('price_label')}</label>
                    <input
                      value={priceText}
                      onChange={(event) => setPriceText(event.target.value)}
                      className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
                      placeholder="0.00"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-semibold">{t('applies_to_label')}</label>
                    <div className="space-y-2 rounded-md border border-gray-200 p-3">
                      <label className="flex items-center gap-2 text-sm">
                        <input
                          type="radio"
                          name="membership-service"
                          checked={selectedService === 'daycare'}
                          onChange={() => handleServiceChange('daycare')}
                        />
                        <span>{t('service_daycare')}</span>
                      </label>
                      <label className="flex items-center gap-2 text-sm">
                        <input
                          type="radio"
                          name="membership-service"
                          checked={selectedService === 'boarding'}
                          onChange={() => handleServiceChange('boarding')}
                        />
                        <span>{t('service_boarding')}</span>
                      </label>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-semibold">{t('plan_type_label')}</label>
                    <div className="space-y-2 rounded-md border border-gray-200 p-3">
                      <label className="flex items-center gap-2 text-sm">
                        <input
                          type="radio"
                          name="membership-kind"
                          checked={editingPlan.planKind === 'package'}
                          onChange={() => handlePlanKindChange('package')}
                        />
                        <span>{t('plan_type_package')}</span>
                      </label>
                      <label className="flex items-center gap-2 text-sm">
                        <input
                          type="radio"
                          name="membership-kind"
                          checked={editingPlan.planKind === 'monthlyPass'}
                          onChange={() => handlePlanKindChange('monthlyPass')}
                        />
                        <span>{t('plan_type_monthly_pass')}</span>
                      </label>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-semibold">
                      {t('included_units_label', {
                        units: membershipUnitLabel(editingPlan.unitType, 2),
                      })}
                    </label>
                    <input
                      value={includedUnitsText}
                      onChange={(event) => setIncludedUnitsText(event.target.value.replace(/[^\d]/g, ''))}
                      className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
                      placeholder={editingPlan.planKind === 'monthlyPass'
                        ? t('included_units_placeholder_unlimited')
                        : t('included_units_placeholder_default')}
                    />
                    <p className="text-xs text-gray-500">
                      {editingPlan.planKind === 'monthlyPass'
                        ? t('monthly_included_units_helper')
                        : t('package_included_units_helper')}
                    </p>
                  </div>

                  {editingPlan.planKind === 'package' ? (
                    <div className="space-y-2">
                      <label className="block text-sm font-semibold">{t('expires_after_purchase_days_label')}</label>
                      <input
                        value={durationDaysText}
                        onChange={(event) => setDurationDaysText(event.target.value.replace(/[^\d]/g, ''))}
                        className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
                        placeholder={t('optional_placeholder')}
                      />
                      <p className="text-xs text-gray-500">
                        {t('package_duration_helper')}
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-2">
                      <label className="block text-sm font-semibold">{t('valid_for_months_label')}</label>
                      <input
                        value={durationMonthsText}
                        onChange={(event) => setDurationMonthsText(event.target.value.replace(/[^\d]/g, ''))}
                        className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
                        placeholder="1"
                      />
                      <p className="text-xs text-gray-500">
                        {t('months_duration_helper')}
                      </p>
                    </div>
                  )}

                  <div className="space-y-2 md:col-span-2">
                    <label className="flex items-center gap-2 text-sm font-semibold">
                      <input
                        type="checkbox"
                        checked={editingPlan.active}
                        onChange={(event) =>
                          setEditingPlan((prev) => ({ ...prev, active: event.target.checked }))
                        }
                      />
                      <span>{t('plan_active_label')}</span>
                    </label>

                    <label className="flex items-center gap-2 text-sm font-semibold">
                      <input
                        type="checkbox"
                        checked={editingPlan.purchaseAtBooking}
                        onChange={(event) =>
                          setEditingPlan((prev) => ({ ...prev, purchaseAtBooking: event.target.checked }))
                        }
                      />
                      <span>{t('allow_purchase_at_booking_label')}</span>
                    </label>
                  </div>

                  <div className="space-y-2 md:col-span-2">
                    <label className="block text-sm font-semibold">{t('internal_notes_label')}</label>
                    <textarea
                      value={editingPlan.notes}
                      onChange={(event) =>
                        setEditingPlan((prev) => ({ ...prev, notes: event.target.value }))
                      }
                      rows={4}
                      className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
                      placeholder={t('internal_notes_placeholder')}
                    />
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => {
                      setShowEditor(false);
                      resetEditor();
                    }}
                    className="rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                  >
                    {t('cancel_button')}
                  </button>
                  <button
                    type="button"
                    onClick={handleSave}
                    disabled={saving}
                    className="rounded-md bg-green-800 px-4 py-2 text-sm font-semibold text-white hover:bg-green-700 disabled:opacity-60"
                  >
                    {saving ? t('saving') : t('save_membership_button')}
                  </button>
                </div>
              </div>
            ) : null}
          </>
        )}
      </div>
    </div>
  );
}
