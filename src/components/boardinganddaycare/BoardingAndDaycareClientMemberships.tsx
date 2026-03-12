'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import { auth, db } from '@/lib/firebaseClient';
import {
  createMembershipPurchaseForClient,
  formatCurrencyCents,
  loadClientMembershipPurchases,
  loadMembershipPlans,
  membershipPlanKindLabel,
  membershipPurchaseAvailableText,
  membershipPurchaseSourceLabel,
  membershipPurchaseStatusLabel,
  membershipUnitLabel,
  type MembershipPlan,
  type MembershipPurchase,
} from '@/lib/boardingAndDaycareMemberships';

function purchaseSummary(purchase: MembershipPurchase): string {
  const serviceLabel = purchase.appliesToServices.boarding ? 'Boarding' : 'Daycare';
  const kindLabel = membershipPlanKindLabel(purchase.planKind);

  if (purchase.planKind === 'monthlyPass') {
    if (purchase.remainingUnits === null) {
      return `${kindLabel} for ${serviceLabel}.`;
    }
    return `${kindLabel} with ${purchase.includedUnits || purchase.remainingUnits} ${membershipUnitLabel(purchase.unitType, purchase.includedUnits || purchase.remainingUnits || 1)} included.`;
  }

  return `${kindLabel} for ${serviceLabel}.`;
}

export default function BoardingAndDaycareClientMemberships({
  businessId,
  clientUserId,
  locale,
  title = 'Client Memberships',
  subtitle = 'Assign memberships to this client and review the balances that will be consumed during booking.',
}: {
  businessId: string;
  clientUserId: string;
  locale: string;
  title?: string;
  subtitle?: string;
}) {
  const router = useRouter();

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [statusTone, setStatusTone] = useState<'success' | 'error'>('success');
  const [plans, setPlans] = useState<MembershipPlan[]>([]);
  const [purchases, setPurchases] = useState<MembershipPurchase[]>([]);
  const [selectedPlanId, setSelectedPlanId] = useState('');
  const [assignmentNote, setAssignmentNote] = useState('');

  const refreshData = useCallback(async () => {
    if (!businessId || !clientUserId) {
      setPlans([]);
      setPurchases([]);
      setLoading(false);
      return;
    }

    setLoading(true);
    try {
      const [nextPlans, nextPurchases] = await Promise.all([
        loadMembershipPlans(db, businessId),
        loadClientMembershipPurchases(db, businessId, clientUserId),
      ]);

      setPlans(nextPlans.filter((plan) => plan.active));
      setPurchases(nextPurchases);
      setSelectedPlanId((current) => {
        if (current && nextPlans.some((plan) => plan.id === current && plan.active)) {
          return current;
        }
        return nextPlans.find((plan) => plan.active)?.id || '';
      });
    } catch (error) {
      console.error('Failed to load client memberships:', error);
      setStatusTone('error');
      setStatusMessage('Failed to load client memberships.');
    } finally {
      setLoading(false);
    }
  }, [businessId, clientUserId]);

  useEffect(() => {
    void refreshData();
  }, [refreshData]);

  const selectedPlan = useMemo(
    () => plans.find((plan) => plan.id === selectedPlanId) || null,
    [plans, selectedPlanId]
  );

  const activePurchases = useMemo(
    () => purchases.filter((purchase) => purchase.status === 'active'),
    [purchases]
  );

  const assignMembership = async () => {
    if (!businessId || !clientUserId || !selectedPlan) {
      setStatusTone('error');
      setStatusMessage('Choose an active membership plan first.');
      return;
    }

    setSaving(true);
    setStatusMessage(null);

    try {
      await createMembershipPurchaseForClient({
        db,
        businessId,
        clientUserId,
        plan: selectedPlan,
        source: 'manual',
        createdBy: auth.currentUser?.email || auth.currentUser?.uid || 'unknown',
        note: assignmentNote,
      });

      setStatusTone('success');
      setStatusMessage('Membership assigned to this client.');
      setAssignmentNote('');
      await refreshData();
    } catch (error) {
      console.error('Failed to assign membership:', error);
      setStatusTone('error');
      setStatusMessage('Failed to assign membership.');
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="bg-white border border-gray-200 rounded-md p-4 text-black space-y-4">
      <div className="space-y-1">
        <h2 className="text-xl font-semibold text-[color:var(--color-accent)]">
          {title}
        </h2>
        <p className="text-sm text-gray-600">
          {subtitle}
        </p>
        <p className="text-xs text-gray-500">
          Membership purchases are stored under this client&apos;s Firestore record for the current business.
        </p>
      </div>

      {statusMessage ? (
        <div
          className={`rounded-md border px-3 py-2 text-sm ${
            statusTone === 'success'
              ? 'border-green-200 bg-green-50 text-green-800'
              : 'border-red-200 bg-red-50 text-red-700'
          }`}
        >
          {statusMessage}
        </div>
      ) : null}

      {loading ? (
        <p className="text-sm text-gray-500">Loading client memberships...</p>
      ) : (
        <>
          {plans.length === 0 ? (
            <div className="border border-dashed rounded-md p-4 bg-gray-50 space-y-3">
              <p className="text-sm text-gray-700">
                No active membership plans exist yet for this business.
              </p>
              <button
                type="button"
                onClick={() => router.push(`/${locale}/boardinganddaycare-businesssettingsmemberships`)}
                className="bg-green-700 text-white font-semibold py-2 px-4 rounded hover:opacity-90"
              >
                Go to Membership Settings
              </button>
            </div>
          ) : (
            <div className="space-y-3 rounded-md border border-gray-200 bg-gray-50 p-4">
              <h3 className="font-semibold text-gray-900">Assign A Membership</h3>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Active membership plan
                </label>
                <select
                  value={selectedPlanId}
                  onChange={(event) => setSelectedPlanId(event.target.value)}
                  className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm"
                >
                  {plans.map((plan) => (
                    <option key={plan.id} value={plan.id}>
                      {plan.name} - {formatCurrencyCents(plan.priceCents)}
                    </option>
                  ))}
                </select>
              </div>

              {selectedPlan ? (
                <div className="rounded-md border border-gray-200 bg-white p-3 text-sm text-gray-700">
                  <p className="font-semibold text-gray-900">{selectedPlan.name}</p>
                  <p className="mt-1">
                    {selectedPlan.appliesToServices.boarding ? 'Boarding' : 'Daycare'} {membershipPlanKindLabel(selectedPlan.planKind).toLowerCase()}
                  </p>
                  <p className="mt-1">
                    {selectedPlan.includedUnits === null
                      ? 'Unlimited usage until the pass expires.'
                      : `${selectedPlan.includedUnits} ${membershipUnitLabel(selectedPlan.unitType, selectedPlan.includedUnits)} included.`}
                  </p>
                </div>
              ) : null}

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Internal assignment note
                </label>
                <textarea
                  value={assignmentNote}
                  onChange={(event) => setAssignmentNote(event.target.value)}
                  rows={3}
                  className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm"
                  placeholder="Optional note for this client purchase or assignment."
                />
              </div>

              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={assignMembership}
                  disabled={saving || !selectedPlan}
                  className="bg-green-700 text-white font-semibold py-2 px-4 rounded hover:opacity-90 disabled:opacity-60"
                >
                  {saving ? 'Assigning...' : 'Assign Membership'}
                </button>
              </div>
            </div>
          )}

          <div className="space-y-3">
            <div className="flex items-center justify-between gap-3">
              <h3 className="font-semibold text-gray-900">
                Client Membership History
              </h3>
              <span className="text-xs text-gray-500">
                {activePurchases.length} active
              </span>
            </div>

            {purchases.length === 0 ? (
              <div className="rounded-md border border-dashed border-gray-300 bg-gray-50 p-4 text-sm text-gray-600">
                This client does not have any memberships yet.
              </div>
            ) : (
              <div className="space-y-3">
                {purchases.map((purchase) => (
                  <div
                    key={purchase.id}
                    className="rounded-md border border-gray-200 bg-white p-4"
                  >
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <p className="font-semibold text-gray-900">{purchase.planName}</p>
                          <span
                            className={`rounded-full px-2 py-0.5 text-xs font-semibold ${
                              purchase.status === 'active'
                                ? 'bg-green-100 text-green-800'
                                : purchase.status === 'expired'
                                  ? 'bg-amber-100 text-amber-800'
                                  : 'bg-gray-100 text-gray-600'
                            }`}
                          >
                            {membershipPurchaseStatusLabel(purchase.status)}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600">{purchaseSummary(purchase)}</p>
                        <p className="text-sm text-gray-900">
                          {membershipPurchaseAvailableText(purchase)}
                        </p>
                        <p className="text-xs text-gray-500">
                          Purchased via {membershipPurchaseSourceLabel(purchase.purchaseSource)}
                          {purchase.purchasedAt ? ` on ${purchase.purchasedAt.toLocaleDateString()}` : ''}
                        </p>
                        {purchase.expiresAt ? (
                          <p className="text-xs text-gray-500">
                            Expires {purchase.expiresAt.toLocaleDateString()}
                          </p>
                        ) : null}
                        {purchase.notes ? (
                          <p className="text-xs text-gray-500">{purchase.notes}</p>
                        ) : null}
                      </div>

                      <div className="text-right">
                        <p className="text-sm font-semibold text-gray-900">
                          {formatCurrencyCents(purchase.priceCents)}
                        </p>
                        {purchase.lastUsedAt ? (
                          <p className="text-xs text-gray-500">
                            Last used {purchase.lastUsedAt.toLocaleDateString()}
                          </p>
                        ) : null}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}
