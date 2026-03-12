import {
  collection,
  doc,
  getDoc,
  getDocs,
  runTransaction,
  setDoc,
  Timestamp,
  writeBatch,
  type Firestore,
} from 'firebase/firestore';

export const membershipServiceKeys = ['daycare', 'boarding'] as const;
export type MembershipServiceKey = (typeof membershipServiceKeys)[number];

export const membershipPlanKinds = ['package', 'monthlyPass'] as const;
export type MembershipPlanKind = (typeof membershipPlanKinds)[number];

export const membershipUnitTypes = ['daycareDay', 'boardingNight'] as const;
export type MembershipUnitType = (typeof membershipUnitTypes)[number];

export const membershipPurchaseStatuses = ['active', 'expired', 'depleted', 'canceled'] as const;
export type MembershipPurchaseStatus = (typeof membershipPurchaseStatuses)[number];

export const membershipPurchaseSources = ['manual', 'daycareBooking', 'boardingBooking'] as const;
export type MembershipPurchaseSource = (typeof membershipPurchaseSources)[number];

export type MembershipServiceSelection = Record<MembershipServiceKey, boolean>;

export type MembershipPlan = {
  id: string;
  name: string;
  active: boolean;
  appliesToServices: MembershipServiceSelection;
  planKind: MembershipPlanKind;
  unitType: MembershipUnitType;
  includedUnits: number | null;
  durationDays: number | null;
  durationMonths: number | null;
  priceCents: number;
  purchaseAtBooking: boolean;
  notes: string;
  createdAt?: unknown;
  updatedAt?: unknown;
};

export type MembershipPurchase = {
  id: string;
  planId: string;
  planName: string;
  status: MembershipPurchaseStatus;
  appliesToServices: MembershipServiceSelection;
  planKind: MembershipPlanKind;
  unitType: MembershipUnitType;
  includedUnits: number | null;
  remainingUnits: number | null;
  durationDays: number | null;
  durationMonths: number | null;
  priceCents: number;
  purchaseAtBooking: boolean;
  purchaseSource: MembershipPurchaseSource;
  startsAt: Date | null;
  expiresAt: Date | null;
  purchasedAt: Date | null;
  lastUsedAt: Date | null;
  linkedReservationId: string | null;
  notes: string;
  createdBy: string;
};

type MembershipPlansSnapshot = {
  plans?: Record<string, unknown>;
};

export function defaultMembershipServiceSelection(): MembershipServiceSelection {
  return {
    daycare: false,
    boarding: false,
  };
}

export function emptyMembershipPlan(): MembershipPlan {
  return {
    id: '',
    name: '',
    active: true,
    appliesToServices: {
      daycare: true,
      boarding: false,
    },
    planKind: 'package',
    unitType: 'daycareDay',
    includedUnits: 10,
    durationDays: null,
    durationMonths: 1,
    priceCents: 0,
    purchaseAtBooking: true,
    notes: '',
  };
}

function normalizePositiveNumber(raw: unknown): number | null {
  if (typeof raw !== 'number' || !Number.isFinite(raw) || raw <= 0) return null;
  return Math.round(raw);
}

function normalizeZeroOrPositiveNumber(raw: unknown): number | null {
  if (typeof raw !== 'number' || !Number.isFinite(raw) || raw < 0) return null;
  return Math.round(raw);
}

function normalizeNonNegativeNumber(raw: unknown): number {
  if (typeof raw !== 'number' || !Number.isFinite(raw) || raw < 0) return 0;
  return Math.round(raw);
}

function normalizeDateValue(raw: unknown): Date | null {
  if (!raw) return null;
  if (raw instanceof Date) return raw;
  if (raw instanceof Timestamp) return raw.toDate();
  if (typeof raw === 'number') {
    const fromMillis = new Date(raw);
    return Number.isNaN(fromMillis.getTime()) ? null : fromMillis;
  }
  if (typeof raw === 'string') {
    const fromString = new Date(raw);
    return Number.isNaN(fromString.getTime()) ? null : fromString;
  }
  if (typeof raw === 'object' && raw !== null && 'seconds' in raw) {
    const seconds = (raw as { seconds?: unknown }).seconds;
    if (typeof seconds === 'number' && Number.isFinite(seconds)) {
      return new Date(seconds * 1000);
    }
  }
  return null;
}

function addDays(date: Date, days: number): Date {
  const next = new Date(date);
  next.setDate(next.getDate() + days);
  return next;
}

function addMonths(date: Date, months: number): Date {
  const next = new Date(date);
  next.setMonth(next.getMonth() + months);
  return next;
}

export function formatCurrencyCents(cents: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(cents / 100);
}

export function membershipUnitLabel(unitType: MembershipUnitType, quantity = 1): string {
  if (unitType === 'boardingNight') {
    return quantity === 1 ? 'boarding night' : 'boarding nights';
  }
  return quantity === 1 ? 'daycare day' : 'daycare days';
}

export function membershipPlanKindLabel(planKind: MembershipPlanKind): string {
  return planKind === 'monthlyPass' ? 'Monthly pass' : 'Package';
}

export function membershipPurchaseSourceLabel(source: MembershipPurchaseSource): string {
  if (source === 'daycareBooking') return 'Daycare booking';
  if (source === 'boardingBooking') return 'Boarding booking';
  return 'Manual assignment';
}

export function normalizeMembershipPlan(id: string, raw: unknown): MembershipPlan | null {
  if (!raw || typeof raw !== 'object') return null;

  const value = raw as Record<string, unknown>;
  const appliesToServices = defaultMembershipServiceSelection();
  const rawServices = value.appliesToServices;

  if (rawServices && typeof rawServices === 'object') {
    for (const key of membershipServiceKeys) {
      appliesToServices[key] = (rawServices as Record<string, unknown>)[key] === true;
    }
  }

  const rawPlanKind = value.planKind;
  const planKind: MembershipPlanKind = rawPlanKind === 'monthlyPass' ? 'monthlyPass' : 'package';

  const rawUnitType = value.unitType;
  const unitType: MembershipUnitType = rawUnitType === 'boardingNight' ? 'boardingNight' : 'daycareDay';

  return {
    id,
    name: typeof value.name === 'string' && value.name.trim() ? value.name.trim() : 'Untitled Membership',
    active: value.active !== false,
    appliesToServices,
    planKind,
    unitType,
    includedUnits: normalizePositiveNumber(value.includedUnits),
    durationDays: normalizePositiveNumber(value.durationDays),
    durationMonths: normalizePositiveNumber(value.durationMonths),
    priceCents: normalizeNonNegativeNumber(value.priceCents),
    purchaseAtBooking: value.purchaseAtBooking !== false,
    notes: typeof value.notes === 'string' ? value.notes.trim() : '',
    createdAt: value.createdAt,
    updatedAt: value.updatedAt,
  };
}

export function normalizeMembershipPlansDoc(raw: unknown): MembershipPlan[] {
  if (!raw || typeof raw !== 'object') return [];

  const data = raw as MembershipPlansSnapshot;
  return Object.entries(data.plans || {})
    .map(([id, value]) => normalizeMembershipPlan(id, value))
    .filter((plan): plan is MembershipPlan => plan !== null)
    .sort((a, b) => a.name.localeCompare(b.name));
}

export function computeMembershipExpiration(plan: MembershipPlan, purchasedAt: Date): Date | null {
  if (plan.planKind === 'monthlyPass') {
    return addMonths(purchasedAt, plan.durationMonths || 1);
  }
  if (plan.durationDays) {
    return addDays(purchasedAt, plan.durationDays);
  }
  return null;
}

export function computeMembershipPurchaseStatus(
  purchase: Pick<MembershipPurchase, 'status' | 'expiresAt' | 'remainingUnits'>,
  now = new Date()
): MembershipPurchaseStatus {
  if (purchase.status === 'canceled') return 'canceled';
  if (purchase.expiresAt && purchase.expiresAt.getTime() <= now.getTime()) return 'expired';
  if (typeof purchase.remainingUnits === 'number' && purchase.remainingUnits <= 0) return 'depleted';
  return 'active';
}

export function membershipPurchaseStatusLabel(status: MembershipPurchaseStatus): string {
  if (status === 'expired') return 'Expired';
  if (status === 'depleted') return 'Depleted';
  if (status === 'canceled') return 'Canceled';
  return 'Active';
}

export function normalizeMembershipPurchase(id: string, raw: unknown): MembershipPurchase | null {
  if (!raw || typeof raw !== 'object') return null;

  const value = raw as Record<string, unknown>;
  const appliesToServices = defaultMembershipServiceSelection();
  const rawServices = value.appliesToServices;

  if (rawServices && typeof rawServices === 'object') {
    for (const key of membershipServiceKeys) {
      appliesToServices[key] = (rawServices as Record<string, unknown>)[key] === true;
    }
  }

  const startsAt = normalizeDateValue(value.startsAt);
  const expiresAt = normalizeDateValue(value.expiresAt);
  const purchasedAt = normalizeDateValue(value.purchasedAt);
  const lastUsedAt = normalizeDateValue(value.lastUsedAt);
  const rawStatus = value.status;
  const status: MembershipPurchaseStatus = membershipPurchaseStatuses.includes(
    rawStatus as MembershipPurchaseStatus
  )
    ? (rawStatus as MembershipPurchaseStatus)
    : 'active';

  const rawPlanKind = value.planKind;
  const planKind: MembershipPlanKind = rawPlanKind === 'monthlyPass' ? 'monthlyPass' : 'package';
  const rawUnitType = value.unitType;
  const unitType: MembershipUnitType = rawUnitType === 'boardingNight' ? 'boardingNight' : 'daycareDay';

  const normalized: MembershipPurchase = {
    id,
    planId: typeof value.planId === 'string' ? value.planId : '',
    planName: typeof value.planName === 'string' && value.planName.trim() ? value.planName.trim() : 'Membership',
    status,
    appliesToServices,
    planKind,
    unitType,
    includedUnits: normalizePositiveNumber(value.includedUnits),
    remainingUnits: normalizeZeroOrPositiveNumber(value.remainingUnits),
    durationDays: normalizePositiveNumber(value.durationDays),
    durationMonths: normalizePositiveNumber(value.durationMonths),
    priceCents: normalizeNonNegativeNumber(value.priceCents),
    purchaseAtBooking: value.purchaseAtBooking !== false,
    purchaseSource: membershipPurchaseSources.includes(value.purchaseSource as MembershipPurchaseSource)
      ? (value.purchaseSource as MembershipPurchaseSource)
      : 'manual',
    startsAt,
    expiresAt,
    purchasedAt,
    lastUsedAt,
    linkedReservationId: typeof value.linkedReservationId === 'string' ? value.linkedReservationId : null,
    notes: typeof value.notes === 'string' ? value.notes.trim() : '',
    createdBy: typeof value.createdBy === 'string' && value.createdBy.trim()
      ? value.createdBy.trim()
      : 'unknown',
  };

  const computedStatus = computeMembershipPurchaseStatus(normalized);
  return {
    ...normalized,
    status: computedStatus,
  };
}

export function membershipPurchaseAvailableText(purchase: MembershipPurchase): string {
  const status = computeMembershipPurchaseStatus(purchase);
  if (status === 'expired') return 'Expired';
  if (status === 'depleted') return 'No units remaining';
  if (purchase.remainingUnits === null) {
    return purchase.expiresAt ? `Unlimited until ${purchase.expiresAt.toLocaleDateString()}` : 'Unlimited';
  }
  return `${purchase.remainingUnits} ${membershipUnitLabel(purchase.unitType, purchase.remainingUnits)} remaining`;
}

export function membershipPurchaseCanCover(
  purchase: MembershipPurchase,
  service: MembershipServiceKey,
  quantity: number,
  now = new Date()
): boolean {
  if (!purchase.appliesToServices[service]) return false;
  if (computeMembershipPurchaseStatus(purchase, now) !== 'active') return false;
  if (quantity <= 0) return true;
  if (purchase.remainingUnits === null) return true;
  return purchase.remainingUnits >= quantity;
}

export function membershipPlansDocRef(db: Firestore, businessId: string) {
  return doc(db, 'businesses', businessId, 'settings', 'membershipPlans');
}

export function membershipPurchasesCollectionRef(db: Firestore, businessId: string, clientUserId: string) {
  return collection(db, 'userApprovedBusinesses', businessId, 'clients', clientUserId, 'membershipPurchases');
}

export async function loadMembershipPlans(db: Firestore, businessId: string): Promise<MembershipPlan[]> {
  if (!businessId) return [];
  const snap = await getDoc(membershipPlansDocRef(db, businessId));
  return snap.exists() ? normalizeMembershipPlansDoc(snap.data()) : [];
}

export async function loadClientMembershipPurchases(
  db: Firestore,
  businessId: string,
  clientUserId: string
): Promise<MembershipPurchase[]> {
  if (!businessId || !clientUserId) return [];

  const snap = await getDocs(membershipPurchasesCollectionRef(db, businessId, clientUserId));
  return snap.docs
    .map((purchaseDoc) => normalizeMembershipPurchase(purchaseDoc.id, purchaseDoc.data()))
    .filter((purchase): purchase is MembershipPurchase => purchase !== null)
    .sort((a, b) => {
      const aTime = a.purchasedAt?.getTime() || 0;
      const bTime = b.purchasedAt?.getTime() || 0;
      return bTime - aTime;
    });
}

export async function createMembershipPurchaseForClient(params: {
  db: Firestore;
  businessId: string;
  clientUserId: string;
  plan: MembershipPlan;
  source: MembershipPurchaseSource;
  createdBy: string;
  purchaseIdOverride?: string;
  linkedReservationId?: string | null;
  note?: string;
  purchasedAt?: Date;
}): Promise<MembershipPurchase> {
  const {
    db,
    businessId,
    clientUserId,
    plan,
    source,
    createdBy,
    purchaseIdOverride,
    linkedReservationId = null,
    note = '',
    purchasedAt = new Date(),
  } = params;

  const purchaseRef = purchaseIdOverride
    ? doc(
      db,
      'userApprovedBusinesses',
      businessId,
      'clients',
      clientUserId,
      'membershipPurchases',
      purchaseIdOverride
    )
    : doc(membershipPurchasesCollectionRef(db, businessId, clientUserId));
  const ledgerRef = doc(collection(purchaseRef, 'ledger'));
  const expiresAt = computeMembershipExpiration(plan, purchasedAt);
  const remainingUnits = typeof plan.includedUnits === 'number' ? plan.includedUnits : null;
  const initialStatus = computeMembershipPurchaseStatus({
    status: 'active',
    expiresAt,
    remainingUnits,
  }, purchasedAt);

  const payload = {
    planId: plan.id,
    planName: plan.name,
    status: initialStatus,
    appliesToServices: plan.appliesToServices,
    planKind: plan.planKind,
    unitType: plan.unitType,
    includedUnits: plan.includedUnits,
    remainingUnits,
    durationDays: plan.durationDays,
    durationMonths: plan.durationMonths,
    priceCents: plan.priceCents,
    purchaseAtBooking: plan.purchaseAtBooking,
    purchaseSource: source,
    startsAt: purchasedAt,
    expiresAt,
    purchasedAt,
    lastUsedAt: null,
    linkedReservationId,
    notes: note.trim(),
    createdBy,
    createdAt: purchasedAt,
    updatedAt: purchasedAt,
  };

  const batch = writeBatch(db);
  batch.set(purchaseRef, payload, { merge: true });
  batch.set(ledgerRef, {
    type: 'purchase',
    quantity: plan.includedUnits ?? null,
    serviceType: plan.appliesToServices.boarding ? 'boarding' : 'daycare',
    createdAt: purchasedAt,
    createdBy,
    reservationId: linkedReservationId,
    note: note.trim(),
    planName: plan.name,
  });
  await batch.commit();

  return {
    id: purchaseRef.id,
    planId: plan.id,
    planName: plan.name,
    status: initialStatus,
    appliesToServices: plan.appliesToServices,
    planKind: plan.planKind,
    unitType: plan.unitType,
    includedUnits: plan.includedUnits,
    remainingUnits,
    durationDays: plan.durationDays,
    durationMonths: plan.durationMonths,
    priceCents: plan.priceCents,
    purchaseAtBooking: plan.purchaseAtBooking,
    purchaseSource: source,
    startsAt: purchasedAt,
    expiresAt,
    purchasedAt,
    lastUsedAt: null,
    linkedReservationId,
    notes: note.trim(),
    createdBy,
  };
}

export async function consumeMembershipPurchaseForClient(params: {
  db: Firestore;
  businessId: string;
  clientUserId: string;
  purchaseId: string;
  service: MembershipServiceKey;
  quantity: number;
  createdBy: string;
  reservationId?: string | null;
  usedAt?: Date;
  note?: string;
}): Promise<MembershipPurchase> {
  const {
    db,
    businessId,
    clientUserId,
    purchaseId,
    service,
    quantity,
    createdBy,
    reservationId = null,
    usedAt = new Date(),
    note = '',
  } = params;

  if (quantity <= 0) {
    throw new Error('Membership usage quantity must be greater than zero.');
  }

  const purchaseRef = doc(
    db,
    'userApprovedBusinesses',
    businessId,
    'clients',
    clientUserId,
    'membershipPurchases',
    purchaseId
  );

  return runTransaction(db, async (transaction) => {
    const snap = await transaction.get(purchaseRef);
    if (!snap.exists()) {
      throw new Error('Membership purchase not found.');
    }

    const purchase = normalizeMembershipPurchase(snap.id, snap.data());
    if (!purchase) {
      throw new Error('Membership purchase is invalid.');
    }

    if (!membershipPurchaseCanCover(purchase, service, quantity, usedAt)) {
      throw new Error('Membership purchase cannot cover this booking.');
    }

    const nextRemainingUnits = purchase.remainingUnits === null
      ? null
      : Math.max(0, purchase.remainingUnits - quantity);
    const nextStatus = computeMembershipPurchaseStatus({
      status: purchase.status,
      expiresAt: purchase.expiresAt,
      remainingUnits: nextRemainingUnits,
    }, usedAt);

    const ledgerRef = doc(collection(purchaseRef, 'ledger'));

    transaction.set(purchaseRef, {
      remainingUnits: nextRemainingUnits,
      status: nextStatus,
      lastUsedAt: usedAt,
      updatedAt: usedAt,
    }, { merge: true });

    transaction.set(ledgerRef, {
      type: 'usage',
      quantity,
      serviceType: service,
      createdAt: usedAt,
      createdBy,
      reservationId,
      note: note.trim(),
    });

    return {
      ...purchase,
      remainingUnits: nextRemainingUnits,
      status: nextStatus,
      lastUsedAt: usedAt,
    };
  });
}

export async function saveMembershipPlans(params: {
  db: Firestore;
  businessId: string;
  plans: MembershipPlan[];
}) {
  const { db, businessId, plans } = params;

  const plansPayload = plans.reduce<Record<string, Omit<MembershipPlan, 'id'>>>((acc, plan) => {
    acc[plan.id] = {
      name: plan.name.trim(),
      active: plan.active,
      appliesToServices: plan.appliesToServices,
      planKind: plan.planKind,
      unitType: plan.unitType,
      includedUnits: plan.includedUnits,
      durationDays: plan.durationDays,
      durationMonths: plan.durationMonths,
      priceCents: plan.priceCents,
      purchaseAtBooking: plan.purchaseAtBooking,
      notes: plan.notes.trim(),
      createdAt: plan.createdAt || new Date(),
      updatedAt: new Date(),
    };
    return acc;
  }, {});

  await setDoc(
    membershipPlansDocRef(db, businessId),
    {
      plans: plansPayload,
      updatedAt: new Date(),
    },
    { merge: true }
  );
}
