'use client';

import { useTranslations } from 'next-intl';

import {
  formatCurrencyCents,
  membershipPlanKindLabel,
  membershipPurchaseAvailableText,
  membershipPurchaseCanCover,
  membershipPurchaseStatusLabel,
  membershipUnitLabel,
  type MembershipPlan,
  type MembershipPurchase,
  type MembershipServiceKey,
} from '@/lib/boardingAndDaycareMemberships';

function planSummary(
  plan: MembershipPlan,
  t: ReturnType<typeof useTranslations>
): string {
  if (plan.planKind === 'monthlyPass') {
    if (plan.includedUnits === null) {
      return t('summary_unlimited_monthly_pass', {
        months: plan.durationMonths || 1,
        plural: (plan.durationMonths || 1) === 1 ? '' : 's',
      });
    }
    return t('summary_monthly_pass_with_units', {
      units: plan.includedUnits,
      unitLabel: membershipUnitLabel(plan.unitType, plan.includedUnits),
      months: plan.durationMonths || 1,
      plural: (plan.durationMonths || 1) === 1 ? '' : 's',
    });
  }

  if (plan.durationDays) {
    return t('summary_package_with_duration', {
      units: plan.includedUnits || 0,
      unitLabel: membershipUnitLabel(plan.unitType, plan.includedUnits || 1),
      days: plan.durationDays,
      plural: plan.durationDays === 1 ? '' : 's',
    });
  }

  return t('summary_package', {
    units: plan.includedUnits || 0,
    unitLabel: membershipUnitLabel(plan.unitType, plan.includedUnits || 1),
  });
}

export default function BoardingAndDaycareBookingMembershipSelector({
  service,
  requiredUnits,
  purchases,
  plans,
  selectedPurchaseId,
  selectedPlanId,
  onSelectPurchase,
  onSelectPlan,
  buyDisabledReason = null,
}: {
  service: MembershipServiceKey;
  requiredUnits: number;
  purchases: MembershipPurchase[];
  plans: MembershipPlan[];
  selectedPurchaseId: string;
  selectedPlanId: string;
  onSelectPurchase: (purchaseId: string) => void;
  onSelectPlan: (planId: string) => void;
  buyDisabledReason?: string | null;
}) {
  const t = useTranslations('boardingAndDaycareBookingMembershipSelector');
  const serviceLabel = service === 'boarding' ? t('service_boarding') : t('service_daycare');
  const usablePurchases = purchases.filter((purchase) =>
    membershipPurchaseCanCover(purchase, service, requiredUnits)
  );
  const purchasablePlans = plans.filter((plan) => {
    if (!plan.active || !plan.appliesToServices[service] || !plan.purchaseAtBooking) return false;
    if (plan.includedUnits === null) return true;
    return plan.includedUnits >= requiredUnits;
  });

  if (requiredUnits <= 0) {
    return null;
  }

  return (
    <div className="w-full max-w-md rounded-xl border border-gray-200 bg-white p-4 text-black shadow-sm">
      <div className="space-y-1">
        <h2 className="text-lg font-semibold text-[color:var(--color-accent)]">
          {t('title')}
        </h2>
        <p className="text-sm text-gray-600">
          {t('required_units', {
            count: requiredUnits,
            unitLabel: membershipUnitLabel(service === 'boarding' ? 'boardingNight' : 'daycareDay', requiredUnits),
          })}
        </p>
      </div>

      <div className="mt-4 space-y-3">
        <div className="rounded-md border border-gray-200 p-3">
          <div className="flex items-center justify-between gap-3">
            <h3 className="font-semibold text-gray-900">{t('use_existing_membership_title')}</h3>
            {selectedPurchaseId ? (
              <button
                type="button"
                onClick={() => onSelectPurchase('')}
                className="text-xs text-blue-600 underline"
              >
                {t('clear_button')}
              </button>
            ) : null}
          </div>

          {usablePurchases.length === 0 ? (
            <p className="mt-2 text-sm text-gray-500">
              {t('no_existing_memberships', { service: serviceLabel })}
            </p>
          ) : (
            <div className="mt-3 space-y-2">
              {usablePurchases.map((purchase) => (
                <label
                  key={purchase.id}
                  className={`block rounded-md border p-3 text-sm ${
                    selectedPurchaseId === purchase.id
                      ? 'border-green-400 bg-green-50'
                      : 'border-gray-200 bg-white'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <input
                      type="radio"
                      name={`booking-membership-existing-${service}`}
                      checked={selectedPurchaseId === purchase.id}
                      onChange={() => onSelectPurchase(purchase.id)}
                      className="mt-1"
                    />
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-gray-900">{purchase.planName}</span>
                        <span className="rounded-full bg-gray-100 px-2 py-0.5 text-[11px] font-semibold text-gray-600">
                          {membershipPurchaseStatusLabel(purchase.status)}
                        </span>
                      </div>
                      <p className="text-gray-700">{membershipPurchaseAvailableText(purchase)}</p>
                      {purchase.expiresAt ? (
                        <p className="text-xs text-gray-500">
                          {t('expires_on', {
                            date: purchase.expiresAt.toLocaleDateString(),
                          })}
                        </p>
                      ) : null}
                    </div>
                  </div>
                </label>
              ))}
            </div>
          )}
        </div>

        <div className="rounded-md border border-gray-200 p-3">
          <div className="flex items-center justify-between gap-3">
            <h3 className="font-semibold text-gray-900">{t('buy_with_booking_title')}</h3>
            {selectedPlanId ? (
              <button
                type="button"
                onClick={() => onSelectPlan('')}
                className="text-xs text-blue-600 underline"
              >
                {t('clear_button')}
              </button>
            ) : null}
          </div>

          {buyDisabledReason ? (
            <p className="mt-2 text-sm text-amber-700">
              {buyDisabledReason}
            </p>
          ) : purchasablePlans.length === 0 ? (
            <p className="mt-2 text-sm text-gray-500">
              {t('no_purchasable_memberships', { service: serviceLabel })}
            </p>
          ) : (
            <div className="mt-3 space-y-2">
              {purchasablePlans.map((plan) => (
                <label
                  key={plan.id}
                  className={`block rounded-md border p-3 text-sm ${
                    selectedPlanId === plan.id
                      ? 'border-green-400 bg-green-50'
                      : 'border-gray-200 bg-white'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <input
                      type="radio"
                      name={`booking-membership-new-${service}`}
                      checked={selectedPlanId === plan.id}
                      onChange={() => onSelectPlan(plan.id)}
                      className="mt-1"
                    />
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-gray-900">{plan.name}</span>
                        <span className="rounded-full bg-gray-100 px-2 py-0.5 text-[11px] font-semibold text-gray-600">
                          {membershipPlanKindLabel(plan.planKind)}
                        </span>
                      </div>
                      <p className="text-gray-700">{planSummary(plan, t)}</p>
                      <p className="text-sm font-semibold text-gray-900">{formatCurrencyCents(plan.priceCents)}</p>
                    </div>
                  </div>
                </label>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
