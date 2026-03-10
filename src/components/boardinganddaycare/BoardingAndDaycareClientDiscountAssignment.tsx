'use client';

import { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import { auth, db } from '@/lib/firebaseClient';
import { doc, getDoc, serverTimestamp, setDoc } from 'firebase/firestore';

type DiscountRuleSummary = {
  id: string;
  name: string;
  active: boolean;
  amountLabel: string;
  servicesLabel: string;
};

function formatAmountLabel(amountType: unknown, amountValue: unknown): string {
  const numericValue = typeof amountValue === 'number' ? amountValue : 0;

  if (amountType === 'fixedCents') {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(numericValue / 100);
  }

  const percentText = Number.isInteger(numericValue)
    ? String(numericValue)
    : numericValue.toFixed(2).replace(/\.00$/, '');

  return `${percentText}% off`;
}

function formatServicesLabel(rawServices: unknown): string {
  if (!rawServices || typeof rawServices !== 'object') {
    return 'No services selected';
  }

  const labels = Object.entries(rawServices as Record<string, unknown>)
    .filter(([, value]) => value === true)
    .map(([key]) => {
      if (key === 'daycare') return 'Daycare';
      if (key === 'boarding') return 'Boarding';
      if (key === 'grooming') return 'Grooming';
      if (key === 'training') return 'Training';
      return key;
    });

  return labels.length > 0 ? labels.join(', ') : 'No services selected';
}

function normalizeDiscountRules(raw: unknown): DiscountRuleSummary[] {
  if (!raw || typeof raw !== 'object') {
    return [];
  }

  return Object.entries(raw as Record<string, unknown>)
    .map(([id, value]) => {
      if (!value || typeof value !== 'object') return null;
      const map = value as Record<string, unknown>;

      return {
        id,
        name: typeof map.name === 'string' && map.name.trim().length > 0
          ? map.name.trim()
          : 'Untitled Discount',
        active: map.active !== false,
        amountLabel: formatAmountLabel(map.amountType, map.amountValue),
        servicesLabel: formatServicesLabel(map.appliesToServices),
      };
    })
    .filter((rule): rule is DiscountRuleSummary => rule !== null)
    .sort((a, b) => {
      if (a.active !== b.active) return a.active ? -1 : 1;
      return a.name.localeCompare(b.name);
    });
}

export default function BoardingAndDaycareClientDiscountAssignment({
  businessId,
  clientUserId,
  locale,
  title = 'Client Discounts',
  subtitle = 'Link one or more of your business discount rules directly to this client profile.',
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
  const [error, setError] = useState<string | null>(null);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [statusTone, setStatusTone] = useState<'success' | 'error'>('success');
  const [rules, setRules] = useState<DiscountRuleSummary[]>([]);
  const [selectedRuleIds, setSelectedRuleIds] = useState<string[]>([]);

  useEffect(() => {
    let cancelled = false;

    async function loadData() {
      if (!businessId || !clientUserId) {
        if (!cancelled) {
          setRules([]);
          setSelectedRuleIds([]);
          setLoading(false);
        }
        return;
      }

      setLoading(true);
      setError(null);
      setStatusMessage(null);

      try {
        const [discountRulesSnap, clientSnap] = await Promise.all([
          getDoc(doc(db, 'businesses', businessId, 'settings', 'discountRules')),
          getDoc(doc(db, 'userApprovedBusinesses', businessId, 'clients', clientUserId)),
        ]);

        if (cancelled) return;

        const rulesMap = discountRulesSnap.exists()
          ? (discountRulesSnap.data().rules as Record<string, unknown> | undefined)
          : undefined;
        const normalizedRules = normalizeDiscountRules(rulesMap);

        const clientData = clientSnap.exists() ? clientSnap.data() : {};
        const assignedRuleIds = Array.isArray(clientData.assignedDiscountRuleIds)
          ? clientData.assignedDiscountRuleIds.filter((value): value is string => typeof value === 'string')
          : [];

        setRules(normalizedRules);
        setSelectedRuleIds(Array.from(new Set(assignedRuleIds)));
      } catch (loadError) {
        console.error('❌ Failed to load client discount assignments:', loadError);
        if (!cancelled) {
          setError('Failed to load client discounts.');
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    void loadData();

    return () => {
      cancelled = true;
    };
  }, [businessId, clientUserId]);

  const availableRuleIds = useMemo(() => new Set(rules.map((rule) => rule.id)), [rules]);

  const validSelectedRuleIds = useMemo(
    () => selectedRuleIds.filter((id) => availableRuleIds.has(id)),
    [availableRuleIds, selectedRuleIds]
  );

  const missingAssignedRuleIds = useMemo(
    () => selectedRuleIds.filter((id) => !availableRuleIds.has(id)),
    [availableRuleIds, selectedRuleIds]
  );

  const toggleRule = (ruleId: string, checked: boolean) => {
    setStatusMessage(null);
    setSelectedRuleIds((prev) => {
      if (checked) return Array.from(new Set([...prev, ruleId]));
      return prev.filter((value) => value !== ruleId);
    });
  };

  const saveAssignments = async () => {
    if (!businessId || !clientUserId) {
      setStatusTone('error');
      setStatusMessage('Missing business or client information.');
      return;
    }

    setSaving(true);
    setStatusMessage(null);
    setError(null);

    try {
      await setDoc(
        doc(db, 'userApprovedBusinesses', businessId, 'clients', clientUserId),
        {
          assignedDiscountRuleIds: validSelectedRuleIds,
          assignedDiscountsUpdatedAt: serverTimestamp(),
          assignedDiscountsUpdatedBy: auth.currentUser?.email || auth.currentUser?.uid || 'unknown',
        },
        { merge: true }
      );

      setSelectedRuleIds(validSelectedRuleIds);
      setStatusTone('success');
      setStatusMessage('Client discount assignments saved.');
    } catch (saveError) {
      console.error('❌ Failed to save client discount assignments:', saveError);
      setStatusTone('error');
      setStatusMessage('Failed to save client discounts.');
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
          These assignments are saved only to this business&apos;s approved-client record for this client.
        </p>
      </div>

      {loading ? (
        <p className="text-sm text-gray-500">Loading available discount rules...</p>
      ) : error ? (
        <p className="text-sm text-red-600">❌ {error}</p>
      ) : rules.length === 0 ? (
        <div className="border border-dashed rounded-md p-4 bg-gray-50 space-y-3">
          <p className="text-sm text-gray-700">
            You have not created any business discount rules yet.
          </p>
          <button
            type="button"
            onClick={() => router.push(`/${locale}/boardinganddaycare-businesssettingsdiscounts`)}
            className="bg-green-700 text-white font-semibold py-2 px-4 rounded hover:opacity-90"
          >
            Go to Business Discounts
          </button>
        </div>
      ) : (
        <>
          {missingAssignedRuleIds.length > 0 ? (
            <div className="border border-amber-200 rounded-md bg-amber-50 p-3 text-sm text-amber-800">
              Some previously assigned discounts no longer exist in your business discount list. Saving here will remove those old assignments.
            </div>
          ) : null}

          <div className="space-y-3">
            {rules.map((rule) => (
              <label
                key={rule.id}
                className={`flex items-start gap-3 border rounded-md p-3 ${
                  selectedRuleIds.includes(rule.id) ? 'border-green-300 bg-green-50' : 'border-gray-200 bg-white'
                }`}
              >
                <input
                  type="checkbox"
                  checked={selectedRuleIds.includes(rule.id)}
                  onChange={(event) => toggleRule(rule.id, event.target.checked)}
                  className="mt-1"
                />

                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-semibold">{rule.name}</span>
                    <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-gray-100 text-gray-700">
                      {rule.active ? 'Active' : 'Inactive'}
                    </span>
                  </div>
                  <p className="text-sm text-[color:var(--color-accent)] font-medium">
                    {rule.amountLabel}
                  </p>
                  <p className="text-xs text-gray-600">
                    Applies to: {rule.servicesLabel}
                  </p>
                </div>
              </label>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <p className="text-sm text-gray-600">
              {validSelectedRuleIds.length > 0
                ? `${validSelectedRuleIds.length} client discount rule(s) linked.`
                : 'No client-specific discounts linked yet.'}
            </p>

            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => {
                  setStatusMessage(null);
                  setSelectedRuleIds([]);
                }}
                className="border border-gray-300 text-gray-800 font-semibold py-2 px-4 rounded hover:bg-gray-50"
              >
                Clear All
              </button>

              <button
                type="button"
                onClick={saveAssignments}
                disabled={saving}
                className="bg-green-700 text-white font-semibold py-2 px-4 rounded hover:opacity-90 disabled:opacity-60"
              >
                {saving ? 'Saving...' : 'Save Client Discounts'}
              </button>
            </div>
          </div>
        </>
      )}

      {statusMessage ? (
        <p className={`text-sm ${statusTone === 'success' ? 'text-green-700' : 'text-red-600'}`}>
          {statusTone === 'success' ? `✅ ${statusMessage}` : `❌ ${statusMessage}`}
        </p>
      ) : null}
    </div>
  );
}
