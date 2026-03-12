import { Timestamp } from 'firebase/firestore';

export type InvoiceLibraryItem = {
  id: string;
  name: string;
  priceCents: number;
  active: boolean;
  category: string;
  serviceContext?: string;
};

export type BoardingLengthDiscountMode = 'percent' | 'fixedAmount' | 'nightlyRate';
export type BoardingDepositMode = 'nights' | 'fixedAmount' | 'percent';
export type BoardingDiscountStackingPolicy = 'bestSingleRule' | 'stackRules' | 'manualReview';
export type BoardingOddHourRuleKind =
  | 'earlyDropOff'
  | 'afterHoursDropOff'
  | 'beforeHoursPickUp'
  | 'afterHoursPickUp';
export type BoardingDepositChargeCategory =
  | 'boardingNights'
  | 'groomingAddOns'
  | 'boardingAddOns'
  | 'checkoutWindowFees'
  | 'earlyDropOffFees'
  | 'afterHoursDropOffFees'
  | 'beforeHoursPickUpFees'
  | 'afterHoursPickUpFees';

export const boardingDepositChargeCategories: BoardingDepositChargeCategory[] = [
  'boardingNights',
  'groomingAddOns',
  'boardingAddOns',
  'checkoutWindowFees',
  'earlyDropOffFees',
  'afterHoursDropOffFees',
  'beforeHoursPickUpFees',
  'afterHoursPickUpFees',
];

export const boardingOddHourRuleKinds: BoardingOddHourRuleKind[] = [
  'earlyDropOff',
  'afterHoursDropOff',
  'beforeHoursPickUp',
  'afterHoursPickUp',
];

export type BoardingLengthDiscountRule = {
  id: string;
  name: string;
  active: boolean;
  minNights: number;
  mode: BoardingLengthDiscountMode;
  percentOff: number | null;
  fixedAmountCents: number | null;
  specialNightlyRates: Record<string, number>;
  notes: string;
};

export type BoardingDepositRule = {
  id: string;
  name: string;
  active: boolean;
  minNights: number;
  maxNights: number | null;
  mode: BoardingDepositMode;
  nightsRequired: number | null;
  fixedAmountCents: number | null;
  percentAmount: number | null;
  notes: string;
};

export type BoardingCheckoutChargeWindow = {
  id: string;
  name: string;
  active: boolean;
  startTime: string;
  endTime: string | null;
  invoiceItemId: string;
  invoiceItemName: string;
  notes: string;
};

export type BoardingOddHourFeeRule = {
  active: boolean;
  invoiceItemId: string;
  invoiceItemName: string;
  notes: string;
};

export type BoardingPricingSettings = {
  schemaVersion: number;
  nightlyRates: Record<string, number>;
  checkoutDay: {
    complimentaryPickupCutoffTime: string | null;
    chargeWindows: BoardingCheckoutChargeWindow[];
    notes: string;
  };
  lengthOfStayDiscounts: BoardingLengthDiscountRule[];
  depositRules: BoardingDepositRule[];
  depositIncludes: Record<BoardingDepositChargeCategory, boolean>;
  oddHourFeeRules: Record<BoardingOddHourRuleKind, BoardingOddHourFeeRule>;
  notes: {
    pricingOverview: string;
    depositOverview: string;
    oddHoursOverview: string;
  };
};

export type BoardingClientDiscountRule = {
  id: string;
  name: string;
  active: boolean;
  amountType: 'percent' | 'fixedCents';
  amountValue: number;
  appliesToBoarding: boolean;
  minimumBoardingNights: number | null;
  minimumPets: number | null;
};

export type BoardingClientDiscountSettings = {
  stackingPolicy: BoardingDiscountStackingPolicy;
  rules: BoardingClientDiscountRule[];
};

export type BoardingAppliedDiscount = {
  id: string;
  name: string;
  amountCents: number;
  description: string;
};

export type BoardingQuoteBreakdownLine = {
  key: string;
  label: string;
  amountCents: number;
  tone?: 'default' | 'discount' | 'deposit';
};

export type BoardingQuote = {
  nightsBooked: number;
  petCount: number;
  totalPetNights: number;
  coveredMembershipUnits: number;
  uncoveredPetNights: number;
  uncoveredNightCount: number;
  nightlyPetCountsCharged: number[];
  matchedCheckoutChargeWindow: BoardingCheckoutChargeWindow | null;
  matchedOddHourKinds: BoardingOddHourRuleKind[];
  lengthOfStayDiscount: BoardingAppliedDiscount | null;
  appliedClientDiscounts: BoardingAppliedDiscount[];
  automaticDiscountsSuppressed: boolean;
  baseBoardingSubtotalCents: number;
  discountedBoardingSubtotalCents: number;
  groomingSubtotalCents: number;
  boardingAddOnSubtotalCents: number;
  checkoutWindowFeeCents: number;
  earlyDropOffFeeCents: number;
  afterHoursDropOffFeeCents: number;
  beforeHoursPickUpFeeCents: number;
  afterHoursPickUpFeeCents: number;
  estimatedTotalCents: number;
  depositIncludedSubtotalCents: number;
  depositDueTodayCents: number;
  remainingBalanceCents: number;
  matchedDepositRule: BoardingDepositRule | null;
  lines: BoardingQuoteBreakdownLine[];
  notes: string[];
};

type BoardingQuoteInput = {
  pricing: BoardingPricingSettings;
  petCount: number;
  nightsBooked: number;
  membershipCoveredUnits?: number;
  groomingSubtotalCents?: number;
  boardingAddOnSubtotalCents?: number;
  matchedCheckoutChargeWindow?: BoardingCheckoutChargeWindow | null;
  matchedOddHourKinds?: BoardingOddHourRuleKind[];
  invoiceItemsById?: Record<string, InvoiceLibraryItem>;
  clientDiscountSettings?: BoardingClientDiscountSettings | null;
  assignedClientDiscountRuleIds?: string[];
};

function normalizeNonNegativeNumber(raw: unknown): number {
  if (typeof raw !== 'number' || !Number.isFinite(raw) || raw < 0) return 0;
  return Math.round(raw);
}

function normalizePositiveInt(raw: unknown, fallback = 1): number {
  if (typeof raw !== 'number' || !Number.isFinite(raw) || raw <= 0) return fallback;
  return Math.max(1, Math.round(raw));
}

function normalizeNullablePositiveInt(raw: unknown): number | null {
  if (typeof raw !== 'number' || !Number.isFinite(raw) || raw <= 0) return null;
  return Math.max(1, Math.round(raw));
}

function normalizeNullablePercent(raw: unknown): number | null {
  if (typeof raw !== 'number' || !Number.isFinite(raw) || raw <= 0) return null;
  return Math.max(0, raw);
}

function normalizeString(raw: unknown, fallback = ''): string {
  if (typeof raw !== 'string') return fallback;
  return raw.trim();
}

function normalizeBoolean(raw: unknown, fallback = false): boolean {
  if (typeof raw !== 'boolean') return fallback;
  return raw;
}

function normalizeNightlyRates(raw: unknown): Record<string, number> {
  if (!raw || typeof raw !== 'object') return {};
  const next: Record<string, number> = {};
  for (const [key, value] of Object.entries(raw as Record<string, unknown>)) {
    const tier = Number(key);
    const cents = normalizeNonNegativeNumber(value);
    if (Number.isFinite(tier) && tier > 0 && cents > 0) {
      next[String(Math.round(tier))] = cents;
    }
  }
  return next;
}

function normalizeSpecialNightlyRates(raw: unknown): Record<string, number> {
  return normalizeNightlyRates(raw);
}

function emptyOddHourRule(): BoardingOddHourFeeRule {
  return {
    active: false,
    invoiceItemId: '',
    invoiceItemName: '',
    notes: '',
  };
}

export function defaultBoardingPricingSettings(): BoardingPricingSettings {
  return {
    schemaVersion: 2,
    nightlyRates: {},
    checkoutDay: {
      complimentaryPickupCutoffTime: null,
      chargeWindows: [],
      notes: '',
    },
    lengthOfStayDiscounts: [],
    depositRules: [],
    depositIncludes: {
      boardingNights: true,
      groomingAddOns: false,
      boardingAddOns: false,
      checkoutWindowFees: false,
      earlyDropOffFees: false,
      afterHoursDropOffFees: false,
      beforeHoursPickUpFees: false,
      afterHoursPickUpFees: false,
    },
    oddHourFeeRules: {
      earlyDropOff: emptyOddHourRule(),
      afterHoursDropOff: emptyOddHourRule(),
      beforeHoursPickUp: emptyOddHourRule(),
      afterHoursPickUp: emptyOddHourRule(),
    },
    notes: {
      pricingOverview: '',
      depositOverview: '',
      oddHoursOverview: '',
    },
  };
}

export function normalizeBoardingPricingDoc(raw: unknown): BoardingPricingSettings {
  const defaults = defaultBoardingPricingSettings();
  if (!raw || typeof raw !== 'object') return defaults;

  const data = raw as Record<string, unknown>;
  const legacyNightlyRates = Object.entries(data)
    .filter(([key, value]) => Number.isFinite(Number(key)) && typeof value === 'number')
    .reduce<Record<string, number>>((acc, [key, value]) => {
      const cents = normalizeNonNegativeNumber(value);
      if (cents > 0) acc[String(Math.round(Number(key)))] = cents;
      return acc;
    }, {});

  const checkoutDayRaw = data.checkoutDay && typeof data.checkoutDay === 'object'
    ? (data.checkoutDay as Record<string, unknown>)
    : {};

  const lengthOfStayDiscounts = Array.isArray(data.lengthOfStayDiscounts)
    ? (data.lengthOfStayDiscounts as unknown[])
      .map((value, index) => normalizeBoardingLengthDiscountRule(value, index))
      .filter((rule): rule is BoardingLengthDiscountRule => rule !== null)
    : [];

  const depositRules = Array.isArray(data.depositRules)
    ? (data.depositRules as unknown[])
      .map((value, index) => normalizeBoardingDepositRule(value, index))
      .filter((rule): rule is BoardingDepositRule => rule !== null)
    : [];

  const chargeWindows = Array.isArray(checkoutDayRaw.chargeWindows)
    ? (checkoutDayRaw.chargeWindows as unknown[])
      .map((value, index) => normalizeCheckoutChargeWindow(value, index))
      .filter((rule): rule is BoardingCheckoutChargeWindow => rule !== null)
    : [];

  const depositIncludesRaw = data.depositIncludes && typeof data.depositIncludes === 'object'
    ? (data.depositIncludes as Record<string, unknown>)
    : {};
  const depositIncludes = { ...defaults.depositIncludes };
  for (const key of boardingDepositChargeCategories) {
    depositIncludes[key] = normalizeBoolean(depositIncludesRaw[key], depositIncludes[key]);
  }

  const oddHourFeeRulesRaw = data.oddHourFeeRules && typeof data.oddHourFeeRules === 'object'
    ? (data.oddHourFeeRules as Record<string, unknown>)
    : {};
  const oddHourFeeRules = { ...defaults.oddHourFeeRules };
  for (const key of boardingOddHourRuleKinds) {
    oddHourFeeRules[key] = normalizeOddHourRule(oddHourFeeRulesRaw[key]);
  }

  const notesRaw = data.notes && typeof data.notes === 'object'
    ? (data.notes as Record<string, unknown>)
    : {};

  return {
    schemaVersion: typeof data.schemaVersion === 'number' ? data.schemaVersion : defaults.schemaVersion,
    nightlyRates: Object.keys(normalizeNightlyRates(data.nightlyRates)).length > 0
      ? normalizeNightlyRates(data.nightlyRates)
      : legacyNightlyRates,
    checkoutDay: {
      complimentaryPickupCutoffTime: normalizeString(checkoutDayRaw.complimentaryPickupCutoffTime) || null,
      chargeWindows,
      notes: normalizeString(checkoutDayRaw.notes),
    },
    lengthOfStayDiscounts,
    depositRules,
    depositIncludes,
    oddHourFeeRules,
    notes: {
      pricingOverview: normalizeString(notesRaw.pricingOverview),
      depositOverview: normalizeString(notesRaw.depositOverview),
      oddHoursOverview: normalizeString(notesRaw.oddHoursOverview),
    },
  };
}

function normalizeBoardingLengthDiscountRule(raw: unknown, index: number): BoardingLengthDiscountRule | null {
  if (!raw || typeof raw !== 'object') return null;
  const data = raw as Record<string, unknown>;
  const mode: BoardingLengthDiscountMode =
    data.mode === 'fixedAmount' || data.mode === 'nightlyRate' ? data.mode : 'percent';

  return {
    id: normalizeString(data.id) || `length-discount-${index + 1}`,
    name: normalizeString(data.name) || `Length of Stay Discount ${index + 1}`,
    active: data.active !== false,
    minNights: normalizePositiveInt(data.minNights),
    mode,
    percentOff: mode === 'percent' ? normalizeNullablePercent(data.percentOff) : null,
    fixedAmountCents: mode === 'fixedAmount' ? normalizeNullablePositiveInt(data.fixedAmountCents) : null,
    specialNightlyRates: mode === 'nightlyRate' ? normalizeSpecialNightlyRates(data.specialNightlyRates) : {},
    notes: normalizeString(data.notes),
  };
}

function normalizeBoardingDepositRule(raw: unknown, index: number): BoardingDepositRule | null {
  if (!raw || typeof raw !== 'object') return null;
  const data = raw as Record<string, unknown>;
  const mode: BoardingDepositMode =
    data.mode === 'fixedAmount' || data.mode === 'percent' ? data.mode : 'nights';

  return {
    id: normalizeString(data.id) || `deposit-rule-${index + 1}`,
    name: normalizeString(data.name) || `Deposit Rule ${index + 1}`,
    active: data.active !== false,
    minNights: normalizePositiveInt(data.minNights),
    maxNights: normalizeNullablePositiveInt(data.maxNights),
    mode,
    nightsRequired: mode === 'nights' ? normalizeNullablePositiveInt(data.nightsRequired) : null,
    fixedAmountCents: mode === 'fixedAmount' ? normalizeNullablePositiveInt(data.fixedAmountCents) : null,
    percentAmount: mode === 'percent' ? normalizeNullablePercent(data.percentAmount) : null,
    notes: normalizeString(data.notes),
  };
}

function normalizeCheckoutChargeWindow(raw: unknown, index: number): BoardingCheckoutChargeWindow | null {
  if (!raw || typeof raw !== 'object') return null;
  const data = raw as Record<string, unknown>;
  const startTime = normalizeString(data.startTime);
  if (!startTime) return null;

  return {
    id: normalizeString(data.id) || `checkout-window-${index + 1}`,
    name: normalizeString(data.name) || `Checkout Charge Window ${index + 1}`,
    active: data.active !== false,
    startTime,
    endTime: normalizeString(data.endTime) || null,
    invoiceItemId: normalizeString(data.invoiceItemId),
    invoiceItemName: normalizeString(data.invoiceItemName),
    notes: normalizeString(data.notes),
  };
}

function normalizeOddHourRule(raw: unknown): BoardingOddHourFeeRule {
  if (!raw || typeof raw !== 'object') return emptyOddHourRule();
  const data = raw as Record<string, unknown>;
  return {
    active: data.active === true,
    invoiceItemId: normalizeString(data.invoiceItemId),
    invoiceItemName: normalizeString(data.invoiceItemName),
    notes: normalizeString(data.notes),
  };
}

export function serializeBoardingPricingSettings(settings: BoardingPricingSettings): Record<string, unknown> {
  return {
    schemaVersion: settings.schemaVersion,
    nightlyRates: settings.nightlyRates,
    checkoutDay: settings.checkoutDay,
    lengthOfStayDiscounts: settings.lengthOfStayDiscounts,
    depositRules: settings.depositRules,
    depositIncludes: settings.depositIncludes,
    oddHourFeeRules: settings.oddHourFeeRules,
    notes: settings.notes,
  };
}

export function normalizeInvoiceLibraryItemsDoc(raw: unknown): InvoiceLibraryItem[] {
  if (!raw || typeof raw !== 'object') return [];

  const data = raw as Record<string, unknown>;
  const itemsRaw = data.items && typeof data.items === 'object'
    ? (data.items as Record<string, unknown>)
    : {};

  return Object.entries(itemsRaw)
    .map(([id, value]) => {
      if (!value || typeof value !== 'object') return null;
      const item = value as Record<string, unknown>;
      return {
        id,
        name: normalizeString(item.name) || 'Unnamed Item',
        priceCents: normalizeNonNegativeNumber(item.priceCents),
        active: item.active !== false,
        category: normalizeString(item.category) || 'uncategorized',
        serviceContext: normalizeString(item.serviceContext) || undefined,
      } as InvoiceLibraryItem;
    })
    .filter((item): item is InvoiceLibraryItem => item !== null)
    .sort((a, b) => a.name.localeCompare(b.name));
}

export function invoiceItemsById(items: InvoiceLibraryItem[]): Record<string, InvoiceLibraryItem> {
  return items.reduce<Record<string, InvoiceLibraryItem>>((acc, item) => {
    acc[item.id] = item;
    return acc;
  }, {});
}

export function normalizeBoardingClientDiscountSettings(raw: unknown): BoardingClientDiscountSettings {
  if (!raw || typeof raw !== 'object') {
    return { stackingPolicy: 'bestSingleRule', rules: [] };
  }

  const data = raw as Record<string, unknown>;
  const stackingPolicy: BoardingDiscountStackingPolicy =
    data.stackingPolicy === 'stackRules' || data.stackingPolicy === 'manualReview'
      ? data.stackingPolicy
      : 'bestSingleRule';

  const rules = data.rules && typeof data.rules === 'object'
    ? Object.entries(data.rules as Record<string, unknown>)
      .map(([id, value]) => normalizeBoardingClientDiscountRule(id, value))
      .filter((rule): rule is BoardingClientDiscountRule => rule !== null)
    : [];

  return { stackingPolicy, rules };
}

function normalizeBoardingClientDiscountRule(
  id: string,
  raw: unknown
): BoardingClientDiscountRule | null {
  if (!raw || typeof raw !== 'object') return null;
  const data = raw as Record<string, unknown>;
  const services = data.appliesToServices && typeof data.appliesToServices === 'object'
    ? (data.appliesToServices as Record<string, unknown>)
    : {};

  return {
    id,
    name: normalizeString(data.name) || 'Discount',
    active: data.active !== false,
    amountType: data.amountType === 'fixedCents' ? 'fixedCents' : 'percent',
    amountValue: normalizeNonNegativeNumber(data.amountValue),
    appliesToBoarding: services.boarding === true,
    minimumBoardingNights: normalizeNullablePositiveInt(data.minimumBoardingNights),
    minimumPets: normalizeNullablePositiveInt(data.minimumPets),
  };
}

export function resolveRateForDogCount(
  nightlyRates: Record<string, number>,
  dogCount: number
): number {
  if (dogCount <= 0) return 0;
  const sortedTiers = Object.keys(nightlyRates)
    .map((key) => Number(key))
    .filter((value) => Number.isFinite(value) && value > 0)
    .sort((a, b) => a - b);

  if (sortedTiers.length === 0) return 0;
  const exact = nightlyRates[String(dogCount)];
  if (typeof exact === 'number' && exact > 0) return exact;

  const lowerOrEqual = sortedTiers.filter((tier) => tier <= dogCount);
  if (lowerOrEqual.length > 0) {
    const best = lowerOrEqual[lowerOrEqual.length - 1];
    return nightlyRates[String(best)] || 0;
  }

  return nightlyRates[String(sortedTiers[0])] || 0;
}

export function buildBillableNightlyPetCounts(
  nightsBooked: number,
  petCount: number,
  coveredMembershipUnits: number
): number[] {
  if (nightsBooked <= 0 || petCount <= 0) return [];

  const totalUnits = nightsBooked * petCount;
  const uncoveredUnits = Math.max(0, totalUnits - Math.max(0, coveredMembershipUnits));
  const nightlyCounts: number[] = [];
  let remainingUnits = uncoveredUnits;

  for (let night = 0; night < nightsBooked; night += 1) {
    const countForNight = Math.min(petCount, remainingUnits);
    nightlyCounts.push(countForNight);
    remainingUnits -= countForNight;
  }

  return nightlyCounts;
}

function findBestLengthOfStayDiscount(
  discounts: BoardingLengthDiscountRule[],
  uncoveredNightCount: number
): BoardingLengthDiscountRule | null {
  const eligible = discounts
    .filter((rule) => rule.active && rule.minNights <= uncoveredNightCount)
    .sort((a, b) => b.minNights - a.minNights);

  return eligible[0] || null;
}

function computeLengthOfStayDiscountAmount(
  rule: BoardingLengthDiscountRule | null,
  nightlyPetCountsCharged: number[],
  nightlyRates: Record<string, number>,
  baseBoardingSubtotalCents: number
): BoardingAppliedDiscount | null {
  if (!rule || baseBoardingSubtotalCents <= 0) return null;

  if (rule.mode === 'fixedAmount') {
    const amountCents = Math.min(baseBoardingSubtotalCents, rule.fixedAmountCents || 0);
    if (amountCents <= 0) return null;
    return {
      id: rule.id,
      name: rule.name,
      amountCents,
      description: `Applies because the stay has at least ${rule.minNights} uncovered night${rule.minNights === 1 ? '' : 's'}.`,
    };
  }

  if (rule.mode === 'nightlyRate') {
    let discountedSubtotal = 0;
    for (const chargedDogs of nightlyPetCountsCharged) {
      if (chargedDogs <= 0) continue;
      discountedSubtotal += resolveRateForDogCount(rule.specialNightlyRates, chargedDogs)
        || resolveRateForDogCount(nightlyRates, chargedDogs);
    }

    const amountCents = Math.max(0, baseBoardingSubtotalCents - discountedSubtotal);
    if (amountCents <= 0) return null;
    return {
      id: rule.id,
      name: rule.name,
      amountCents,
      description: 'Uses the special nightly rates defined for this stay-length tier.',
    };
  }

  const percentOff = rule.percentOff || 0;
  const amountCents = Math.max(0, Math.round(baseBoardingSubtotalCents * (percentOff / 100)));
  if (amountCents <= 0) return null;
  return {
    id: rule.id,
    name: rule.name,
    amountCents,
    description: `${percentOff}% off because the stay qualifies for this length-of-stay tier.`,
  };
}

function computeApplicableClientDiscounts(
  clientDiscountSettings: BoardingClientDiscountSettings | null | undefined,
  assignedRuleIds: string[] | undefined,
  discountedBoardingSubtotalCents: number,
  uncoveredNightCount: number,
  petCount: number
): {
  appliedDiscounts: BoardingAppliedDiscount[];
  totalDiscountCents: number;
  automaticDiscountsSuppressed: boolean;
} {
  if (!clientDiscountSettings || discountedBoardingSubtotalCents <= 0) {
    return {
      appliedDiscounts: [],
      totalDiscountCents: 0,
      automaticDiscountsSuppressed: false,
    };
  }

  const selectedRuleIds = new Set(assignedRuleIds || []);
  const applicableRules = clientDiscountSettings.rules.filter((rule) => (
    rule.active
    && rule.appliesToBoarding
    && selectedRuleIds.has(rule.id)
    && (rule.minimumBoardingNights === null || uncoveredNightCount >= rule.minimumBoardingNights)
    && (rule.minimumPets === null || petCount >= rule.minimumPets)
  ));

  if (applicableRules.length === 0) {
    return {
      appliedDiscounts: [],
      totalDiscountCents: 0,
      automaticDiscountsSuppressed: false,
    };
  }

  if (clientDiscountSettings.stackingPolicy === 'manualReview') {
    return {
      appliedDiscounts: [],
      totalDiscountCents: 0,
      automaticDiscountsSuppressed: true,
    };
  }

  const computeRuleAmount = (rule: BoardingClientDiscountRule, runningSubtotal: number) => {
    if (rule.amountType === 'fixedCents') {
      return Math.min(runningSubtotal, rule.amountValue);
    }
    return Math.min(runningSubtotal, Math.round(runningSubtotal * (rule.amountValue / 100)));
  };

  if (clientDiscountSettings.stackingPolicy === 'bestSingleRule') {
    const best = applicableRules
      .map((rule) => ({
        rule,
        amountCents: computeRuleAmount(rule, discountedBoardingSubtotalCents),
      }))
      .sort((a, b) => b.amountCents - a.amountCents)[0];

    if (!best || best.amountCents <= 0) {
      return {
        appliedDiscounts: [],
        totalDiscountCents: 0,
        automaticDiscountsSuppressed: false,
      };
    }

    return {
      appliedDiscounts: [{
        id: best.rule.id,
        name: best.rule.name,
        amountCents: best.amountCents,
        description: best.rule.amountType === 'fixedCents'
          ? 'Best single fixed client discount applied.'
          : 'Best single percentage client discount applied.',
      }],
      totalDiscountCents: best.amountCents,
      automaticDiscountsSuppressed: false,
    };
  }

  const sortedForStacking = [...applicableRules].sort((a, b) => {
    if (a.amountType !== b.amountType) {
      return a.amountType === 'fixedCents' ? -1 : 1;
    }
    return b.amountValue - a.amountValue;
  });

  let runningSubtotal = discountedBoardingSubtotalCents;
  const appliedDiscounts: BoardingAppliedDiscount[] = [];

  for (const rule of sortedForStacking) {
    const amountCents = computeRuleAmount(rule, runningSubtotal);
    if (amountCents <= 0) continue;
    runningSubtotal = Math.max(0, runningSubtotal - amountCents);
    appliedDiscounts.push({
      id: rule.id,
      name: rule.name,
      amountCents,
      description: rule.amountType === 'fixedCents'
        ? 'Fixed client discount applied before percentage-based client discounts.'
        : 'Percentage client discount applied after fixed client discounts.',
    });
  }

  return {
    appliedDiscounts,
    totalDiscountCents: appliedDiscounts.reduce((sum, line) => sum + line.amountCents, 0),
    automaticDiscountsSuppressed: false,
  };
}

function findMatchingDepositRule(
  rules: BoardingDepositRule[],
  uncoveredNightCount: number
): BoardingDepositRule | null {
  return [...rules]
    .filter((rule) => (
      rule.active
      && rule.minNights <= uncoveredNightCount
      && (rule.maxNights === null || uncoveredNightCount <= rule.maxNights)
    ))
    .sort((a, b) => {
      if (a.minNights !== b.minNights) return b.minNights - a.minNights;
      return (a.maxNights || Number.MAX_SAFE_INTEGER) - (b.maxNights || Number.MAX_SAFE_INTEGER);
    })[0] || null;
}

export function matchCheckoutChargeWindow(
  timeLabel: string,
  pricing: BoardingPricingSettings
): BoardingCheckoutChargeWindow | null {
  if (!timeLabel) return null;
  const targetMinutes = parseTimeLabelToMinutes(timeLabel);
  if (!Number.isFinite(targetMinutes)) return null;

  const activeWindows = pricing.checkoutDay.chargeWindows
    .filter((rule) => rule.active && rule.startTime)
    .sort((a, b) => parseTimeLabelToMinutes(a.startTime) - parseTimeLabelToMinutes(b.startTime));

  for (const rule of activeWindows) {
    const start = parseTimeLabelToMinutes(rule.startTime);
    const end = rule.endTime ? parseTimeLabelToMinutes(rule.endTime) : Number.POSITIVE_INFINITY;
    if (targetMinutes >= start && targetMinutes < end) {
      return rule;
    }
  }

  return null;
}

export function parseTimeLabelToMinutes(label: string): number {
  const match = label.trim().match(/^(\d{1,2}):(\d{2})\s*(AM|PM)$/i);
  if (!match) return Number.NaN;
  let hours = Number.parseInt(match[1], 10);
  const minutes = Number.parseInt(match[2], 10);
  const meridiem = match[3].toUpperCase();

  if (meridiem === 'PM' && hours !== 12) hours += 12;
  if (meridiem === 'AM' && hours === 12) hours = 0;

  return (hours * 60) + minutes;
}

function oddHourFeeAmountCents(
  rule: BoardingOddHourFeeRule,
  invoiceItems: Record<string, InvoiceLibraryItem> | undefined
): number {
  if (!rule.active || !rule.invoiceItemId || !invoiceItems) return 0;
  const item = invoiceItems[rule.invoiceItemId];
  return item && item.active ? item.priceCents : 0;
}

export function computeBoardingQuote(input: BoardingQuoteInput): BoardingQuote {
  const {
    pricing,
    petCount,
    nightsBooked,
    membershipCoveredUnits = 0,
    groomingSubtotalCents = 0,
    boardingAddOnSubtotalCents = 0,
    matchedCheckoutChargeWindow = null,
    matchedOddHourKinds = [],
    invoiceItemsById: invoiceMap = {},
    clientDiscountSettings = null,
    assignedClientDiscountRuleIds = [],
  } = input;

  const totalPetNights = Math.max(0, nightsBooked * petCount);
  const coveredMembershipUnits = Math.min(Math.max(0, membershipCoveredUnits), totalPetNights);
  const uncoveredPetNights = Math.max(0, totalPetNights - coveredMembershipUnits);
  const nightlyPetCountsCharged = buildBillableNightlyPetCounts(
    nightsBooked,
    petCount,
    coveredMembershipUnits
  );
  const uncoveredNightCount = nightlyPetCountsCharged.filter((count) => count > 0).length;

  const baseBoardingSubtotalCents = nightlyPetCountsCharged.reduce((sum, dogCountForNight) => {
    if (dogCountForNight <= 0) return sum;
    return sum + resolveRateForDogCount(pricing.nightlyRates, dogCountForNight);
  }, 0);

  const bestLengthDiscount = findBestLengthOfStayDiscount(
    pricing.lengthOfStayDiscounts,
    uncoveredNightCount
  );
  const lengthOfStayDiscount = computeLengthOfStayDiscountAmount(
    bestLengthDiscount,
    nightlyPetCountsCharged,
    pricing.nightlyRates,
    baseBoardingSubtotalCents
  );

  const boardingAfterStayDiscountCents = Math.max(
    0,
    baseBoardingSubtotalCents - (lengthOfStayDiscount?.amountCents || 0)
  );

  const clientDiscountComputation = computeApplicableClientDiscounts(
    clientDiscountSettings,
    assignedClientDiscountRuleIds,
    boardingAfterStayDiscountCents,
    uncoveredNightCount,
    petCount
  );

  const discountedBoardingSubtotalCents = Math.max(
    0,
    boardingAfterStayDiscountCents - clientDiscountComputation.totalDiscountCents
  );

  const checkoutWindowFeeCents = matchedCheckoutChargeWindow?.invoiceItemId
    ? (invoiceMap[matchedCheckoutChargeWindow.invoiceItemId]?.priceCents || 0)
    : 0;
  const earlyDropOffFeeCents = matchedOddHourKinds.includes('earlyDropOff')
    ? oddHourFeeAmountCents(pricing.oddHourFeeRules.earlyDropOff, invoiceMap)
    : 0;
  const afterHoursDropOffFeeCents = matchedOddHourKinds.includes('afterHoursDropOff')
    ? oddHourFeeAmountCents(pricing.oddHourFeeRules.afterHoursDropOff, invoiceMap)
    : 0;
  const beforeHoursPickUpFeeCents = matchedOddHourKinds.includes('beforeHoursPickUp')
    ? oddHourFeeAmountCents(pricing.oddHourFeeRules.beforeHoursPickUp, invoiceMap)
    : 0;
  const afterHoursPickUpFeeCents = matchedOddHourKinds.includes('afterHoursPickUp')
    ? oddHourFeeAmountCents(pricing.oddHourFeeRules.afterHoursPickUp, invoiceMap)
    : 0;

  const estimatedTotalCents = discountedBoardingSubtotalCents
    + Math.max(0, groomingSubtotalCents)
    + Math.max(0, boardingAddOnSubtotalCents)
    + checkoutWindowFeeCents
    + earlyDropOffFeeCents
    + afterHoursDropOffFeeCents
    + beforeHoursPickUpFeeCents
    + afterHoursPickUpFeeCents;

  const matchedDepositRule = findMatchingDepositRule(pricing.depositRules, uncoveredNightCount);

  const depositIncludedSubtotalCents =
    (pricing.depositIncludes.boardingNights ? discountedBoardingSubtotalCents : 0)
    + (pricing.depositIncludes.groomingAddOns ? Math.max(0, groomingSubtotalCents) : 0)
    + (pricing.depositIncludes.boardingAddOns ? Math.max(0, boardingAddOnSubtotalCents) : 0)
    + (pricing.depositIncludes.checkoutWindowFees ? checkoutWindowFeeCents : 0)
    + (pricing.depositIncludes.earlyDropOffFees ? earlyDropOffFeeCents : 0)
    + (pricing.depositIncludes.afterHoursDropOffFees ? afterHoursDropOffFeeCents : 0)
    + (pricing.depositIncludes.beforeHoursPickUpFees ? beforeHoursPickUpFeeCents : 0)
    + (pricing.depositIncludes.afterHoursPickUpFees ? afterHoursPickUpFeeCents : 0);

  let depositDueTodayCents = 0;
  if (matchedDepositRule && depositIncludedSubtotalCents > 0) {
    if (matchedDepositRule.mode === 'fixedAmount') {
      depositDueTodayCents = Math.min(
        depositIncludedSubtotalCents,
        matchedDepositRule.fixedAmountCents || 0
      );
    } else if (matchedDepositRule.mode === 'percent') {
      depositDueTodayCents = Math.min(
        depositIncludedSubtotalCents,
        Math.round(depositIncludedSubtotalCents * ((matchedDepositRule.percentAmount || 0) / 100))
      );
    } else {
      const nightsRequested = matchedDepositRule.nightsRequired || 0;
      const nightlyAverageCents = pricing.depositIncludes.boardingNights && uncoveredNightCount > 0
        ? Math.round(discountedBoardingSubtotalCents / uncoveredNightCount)
        : 0;
      const boardingPartCents = Math.min(
        discountedBoardingSubtotalCents,
        nightlyAverageCents * Math.min(nightsRequested, uncoveredNightCount)
      );
      const otherIncludedCents = depositIncludedSubtotalCents
        - (pricing.depositIncludes.boardingNights ? discountedBoardingSubtotalCents : 0);

      depositDueTodayCents = Math.min(
        depositIncludedSubtotalCents,
        boardingPartCents + Math.max(0, otherIncludedCents)
      );
    }
  }

  const remainingBalanceCents = Math.max(0, estimatedTotalCents - depositDueTodayCents);

  const lines: BoardingQuoteBreakdownLine[] = [];
  if (baseBoardingSubtotalCents > 0) {
    lines.push({
      key: 'boarding-base',
      label: 'Boarding stay subtotal',
      amountCents: baseBoardingSubtotalCents,
    });
  }
  if (lengthOfStayDiscount) {
    lines.push({
      key: `stay-discount-${lengthOfStayDiscount.id}`,
      label: lengthOfStayDiscount.name,
      amountCents: -lengthOfStayDiscount.amountCents,
      tone: 'discount',
    });
  }
  for (const discount of clientDiscountComputation.appliedDiscounts) {
    lines.push({
      key: `client-discount-${discount.id}`,
      label: discount.name,
      amountCents: -discount.amountCents,
      tone: 'discount',
    });
  }
  if (groomingSubtotalCents > 0) {
    lines.push({
      key: 'grooming',
      label: 'Grooming add-ons',
      amountCents: groomingSubtotalCents,
    });
  }
  if (boardingAddOnSubtotalCents > 0) {
    lines.push({
      key: 'boarding-addons',
      label: 'Boarding add-ons',
      amountCents: boardingAddOnSubtotalCents,
    });
  }
  if (checkoutWindowFeeCents > 0 && matchedCheckoutChargeWindow) {
    lines.push({
      key: 'checkout-window-fee',
      label: matchedCheckoutChargeWindow.invoiceItemName || matchedCheckoutChargeWindow.name,
      amountCents: checkoutWindowFeeCents,
    });
  }
  if (earlyDropOffFeeCents > 0) {
    lines.push({
      key: 'early-dropoff-fee',
      label: pricing.oddHourFeeRules.earlyDropOff.invoiceItemName || 'Early drop-off fee',
      amountCents: earlyDropOffFeeCents,
    });
  }
  if (afterHoursDropOffFeeCents > 0) {
    lines.push({
      key: 'after-hours-dropoff-fee',
      label: pricing.oddHourFeeRules.afterHoursDropOff.invoiceItemName || 'After-hours drop-off fee',
      amountCents: afterHoursDropOffFeeCents,
    });
  }
  if (beforeHoursPickUpFeeCents > 0) {
    lines.push({
      key: 'before-hours-pickup-fee',
      label: pricing.oddHourFeeRules.beforeHoursPickUp.invoiceItemName || 'Before-hours pick-up fee',
      amountCents: beforeHoursPickUpFeeCents,
    });
  }
  if (afterHoursPickUpFeeCents > 0) {
    lines.push({
      key: 'after-hours-pickup-fee',
      label: pricing.oddHourFeeRules.afterHoursPickUp.invoiceItemName || 'After-hours pick-up fee',
      amountCents: afterHoursPickUpFeeCents,
    });
  }
  if (depositDueTodayCents > 0) {
    lines.push({
      key: 'deposit-due',
      label: 'Deposit due today',
      amountCents: depositDueTodayCents,
      tone: 'deposit',
    });
  }

  const notes: string[] = [];
  if (coveredMembershipUnits > 0) {
    notes.push(
      coveredMembershipUnits >= totalPetNights
        ? 'The selected membership covers the boarding stay itself. Extra add-ons and odd-hour fees are still billed separately.'
        : 'This quote reduces the stay based on uncovered pet-nights only. Extra add-ons and odd-hour fees still bill separately.'
    );
  }
  if (clientDiscountComputation.automaticDiscountsSuppressed) {
    notes.push('Client-specific discounts exist, but this business marked them for manual review instead of automatic application.');
  }
  if (matchedDepositRule) {
    notes.push('Deposit due today is calculated from the categories and deposit rule selected in your boarding pricing settings.');
  }

  return {
    nightsBooked,
    petCount,
    totalPetNights,
    coveredMembershipUnits,
    uncoveredPetNights,
    uncoveredNightCount,
    nightlyPetCountsCharged,
    matchedCheckoutChargeWindow,
    matchedOddHourKinds,
    lengthOfStayDiscount,
    appliedClientDiscounts: clientDiscountComputation.appliedDiscounts,
    automaticDiscountsSuppressed: clientDiscountComputation.automaticDiscountsSuppressed,
    baseBoardingSubtotalCents,
    discountedBoardingSubtotalCents,
    groomingSubtotalCents: Math.max(0, groomingSubtotalCents),
    boardingAddOnSubtotalCents: Math.max(0, boardingAddOnSubtotalCents),
    checkoutWindowFeeCents,
    earlyDropOffFeeCents,
    afterHoursDropOffFeeCents,
    beforeHoursPickUpFeeCents,
    afterHoursPickUpFeeCents,
    estimatedTotalCents,
    depositIncludedSubtotalCents,
    depositDueTodayCents,
    remainingBalanceCents,
    matchedDepositRule,
    lines,
    notes,
  };
}

export function priceCentsForSelectedServices(
  selections: string[],
  pricesByName: Record<string, number>
): number {
  return selections.reduce((sum, name) => sum + (pricesByName[name] || 0), 0);
}

export function priceCentsForPerPetSelections(
  selectionsByPet: Record<string, string[]>,
  pricesByName: Record<string, number>
): number {
  return Object.values(selectionsByPet).reduce((sum, serviceNames) => (
    sum + serviceNames.reduce((serviceSum, serviceName) => serviceSum + (pricesByName[serviceName] || 0), 0)
  ), 0);
}

export function normalizeTimestampDateArray(raw: unknown): Date[] {
  if (!Array.isArray(raw)) return [];
  return raw
    .map((value) => {
      if (value instanceof Date) return value;
      if (value instanceof Timestamp) return value.toDate();
      if (typeof value === 'object' && value && 'seconds' in value) {
        const seconds = (value as { seconds?: unknown }).seconds;
        if (typeof seconds === 'number') return new Date(seconds * 1000);
      }
      return null;
    })
    .filter((value): value is Date => value instanceof Date && !Number.isNaN(value.getTime()));
}
