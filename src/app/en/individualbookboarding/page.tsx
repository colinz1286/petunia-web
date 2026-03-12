'use client';

// NOTE: This web page is intended to mirror the iOS view at
// .local-only/ios-real-reference/IndividualBookBoardingView.swift.
// Keep boarding date/time validation, capacity logic, and reservation writes aligned.
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { useTranslations, useLocale } from 'next-intl';
import {
    getFirestore, getDoc, doc, getDocs, collection, Timestamp, setDoc, query, where
} from 'firebase/firestore';
import { getDatabase, ref, set as rtdbSet } from 'firebase/database';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { initializeApp, getApps } from 'firebase/app';
import { getFunctions, httpsCallable } from 'firebase/functions';
import { loadStripe } from '@stripe/stripe-js';
import {
    Elements,
    PaymentElement,
    useElements,
    useStripe,
} from '@stripe/react-stripe-js';
import BoardingAndDaycareBookingMembershipSelector from '@/components/boardinganddaycare/BoardingAndDaycareBookingMembershipSelector';
import {
    consumeMembershipPurchaseForClient,
    createMembershipPurchaseForClient,
    loadClientMembershipPurchases,
    loadMembershipPlans,
    membershipPurchaseCanCover,
    type MembershipPlan,
    type MembershipPurchase,
} from '@/lib/boardingAndDaycareMemberships';
import {
    computeBoardingQuote,
    invoiceItemsById,
    matchCheckoutChargeWindow,
    normalizeBoardingClientDiscountSettings,
    normalizeBoardingPricingDoc,
    normalizeInvoiceLibraryItemsDoc,
    priceCentsForPerPetSelections,
    priceCentsForSelectedServices,
    type BoardingClientDiscountSettings,
    type BoardingPricingSettings,
    type BoardingQuote,
    type InvoiceLibraryItem,
} from '@/lib/boardingPricing';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

/** =========================
 *  Firebase init (once)
 *  ========================= */
const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY!,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN!,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID!,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET!,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID!,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID!,
};
if (!getApps().length) initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();
const rtdb = getDatabase();
const functions = getFunctions();

if (!process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY) {
    throw new Error('Missing NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY environment variable');
}

const stripePromise = loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

/** =========================
 *  Types
 *  ========================= */
type Pet = {
    id: string;
    name: string;
    species: string;
    medications?: string;
    medicationDetails?: string;
    spayedNeutered?: string;
};

type GroomingSelections = Record<string, string[]>; // { petId: [service, ...] }
type WeekdayMap = Record<string, string[]>; // e.g., { Monday: ["9:00 AM", ...], ... }

type BusinessFeatures = {
    countPendingInCapacity?: boolean;
    clientWritesRTDB?: boolean;
    enforceWaiverVersion?: boolean;
};

type BusinessSettingsDoc = {
    timeZoneId?: string;
    features?: BusinessFeatures;
    capacityBoardingTotal?: number | null;
    requireBoardingReservationApproval?: boolean;
    paymentSettings?: {
        enabled?: boolean;
        boarding?: {
            payAtBooking?: boolean;
            invoiceAfterAttendance?: boolean;
            payAtPickup?: boolean;
        };
    };

    // Preferred flags
    checkInTimeRequiredBoarding?: boolean;
    checkOutTimeRequiredBoarding?: boolean;

    // Legacy flags
    dropOffTimeRequiredBoarding?: boolean;
    pickUpTimeRequiredBoarding?: boolean;

    // Preferred maps
    checkInTimesBoarding?: WeekdayMap;
    checkOutTimesBoarding?: WeekdayMap;

    // Legacy maps
    dropOffTimesBoarding?: WeekdayMap;
    pickUpTimesBoarding?: WeekdayMap;

    sameDayCheckInCutoffBoarding?: string; // "h:mm a"

    bookingLimits?: { maxPerTimeSlot?: number };

    // Grooming
    groomingAvailableAsAddOnToBoarding?: boolean;
    groomingServices?: string[];

    depositRequired?: boolean;
    depositAmount?: string;

    // Waiver (root-level fallback date)
    waiverRequired?: boolean;
    waiverLastUpdated?: Timestamp;

    blackoutDates?: Timestamp[];
    prohibitBoardingOverlapWithBlackoutDates?: boolean;

    // ✅ NEW: After-hours pick-up
    afterHoursPickUpTimeRequired?: boolean;
    afterHoursPickUpTimes?: WeekdayMap;
    beforeHoursPickUpTimeRequired?: boolean;
    beforeHoursPickUpTimes?: WeekdayMap;
    earlyDropOffTimeRequired?: boolean;
    earlyDropOffTimes?: WeekdayMap;
    afterHoursDropOffTimeRequired?: boolean;
    afterHoursDropOffTimes?: WeekdayMap;
};

type BoardingReservationWrite = {
    userId: string;
    businessId: string;
    petIds: string[];
    petStatuses: Record<string, string>; // {petId:"pending"}
    status: 'approved' | 'pending';
    realtimeKey: string;
    checkInDate: Timestamp;
    checkOutDate: Timestamp;
    checkInDateBusinessTZ: string;  // "yyyy-MM-dd"
    checkOutDateBusinessTZ: string; // "yyyy-MM-dd"
    nights: number;
    checkInWindow?: string;
    checkOutWindow?: string;
    groomingAddOns?: GroomingSelections;
    boardingAddOns?: string[];
    membershipPurchaseId?: string;
    membershipPlanId?: string;
    membershipPlanName?: string;
    membershipUnitsApplied?: number;
    membershipPurchasedDuringBooking?: boolean;
    paymentIntentId?: string;
    paymentTotalCents?: number;
    estimatedTotalCents?: number;
    depositDueTodayCents?: number;
    remainingBalanceCents?: number;
    itemizedLineItems?: PaymentLineItem[];
};

type PaymentLineItem = {
    key: string;
    label: string;
    quantity: number;
    unitCents: number;
    totalCents: number;
};

type PaymentBreakdown = {
    lines: PaymentLineItem[];
    subtotalCents: number;
};

type CreateBoardingPaymentIntentResponse = {
    clientSecret?: string;
    paymentIntentId?: string;
    amountCents?: number;
    estimatedTotalCents?: number;
    depositDueTodayCents?: number;
    remainingBalanceCents?: number;
    membershipPurchaseTotalCents?: number;
    itemizedLineItems?: unknown;
};

/** =========================
 *  Time helpers (business TZ)
 *  ========================= */
const weekdayName = (d: Date, tz: string) =>
    new Intl.DateTimeFormat('en-US', { timeZone: tz, weekday: 'long' }).format(d);

const ymdKey = (d: Date, tz: string) =>
    new Intl.DateTimeFormat('en-CA', { timeZone: tz, year: 'numeric', month: '2-digit', day: '2-digit' }).format(d);

const normalizeDate = (d: Date) => {
    const n = new Date(d);
    n.setHours(0, 0, 0, 0);
    return n;
};

const parseTimeToMinutes = (label: string) => {
    const m = label.trim().match(/^(\d{1,2}):(\d{2})\s*(AM|PM)$/i);
    if (!m) return Number.POSITIVE_INFINITY;
    let hours = parseInt(m[1], 10);
    const mins = parseInt(m[2], 10);
    const ap = m[3].toUpperCase();
    if (ap === 'PM' && hours !== 12) hours += 12;
    if (ap === 'AM' && hours === 12) hours = 0;
    return hours * 60 + mins;
};

const sortTimeStrings = (arr: string[]) =>
    [...arr].map(s => s.trim()).filter(Boolean).sort((a, b) => parseTimeToMinutes(a) - parseTimeToMinutes(b));

const parseServerItemizedLineItems = (raw: unknown): PaymentLineItem[] => {
    if (!Array.isArray(raw)) return [];
    return raw
        .map((item): PaymentLineItem | null => {
            if (!item || typeof item !== 'object') return null;
            const row = item as Record<string, unknown>;
            const key = typeof row.key === 'string' ? row.key : '';
            const label = typeof row.label === 'string' ? row.label : '';
            const quantity = typeof row.quantity === 'number' ? row.quantity : 0;
            const unitCents = typeof row.unitCents === 'number' ? row.unitCents : 0;
            const totalCents = typeof row.totalCents === 'number' ? row.totalCents : (quantity * unitCents);
            if (!key || !label || quantity <= 0 || unitCents <= 0 || totalCents <= 0) return null;
            return { key, label, quantity, unitCents, totalCents };
        })
        .filter((row): row is PaymentLineItem => row !== null);
};

const nowMinutesInTZ = (tz: string) => {
    const label = new Intl.DateTimeFormat('en-US', {
        timeZone: tz, hour12: true, hour: 'numeric', minute: '2-digit'
    }).format(new Date());
    return parseTimeToMinutes(label);
};

const isSameBizDayAsToday = (d: Date | null, tz: string) =>
    d ? ymdKey(d, tz) === ymdKey(new Date(), tz) : false;

const filterCheckInTimesForSameDay = (
    options: string[],
    date: Date | null,
    tz: string,
    cutoff: string | null,
) => {
    if (!date) return [];
    if (!isSameBizDayAsToday(date, tz)) return options;

    const nowMins = nowMinutesInTZ(tz);
    const cutoffMins = cutoff ? parseTimeToMinutes(cutoff) : null;

    if (cutoffMins !== null && nowMins >= cutoffMins) return [];

    return options.filter(opt => {
        const t = parseTimeToMinutes(opt);
        if (cutoffMins !== null) return t > nowMins && t <= cutoffMins;
        return t > nowMins;
    });
};

const nightsBetweenKeys = (start: Date, end: Date, tz: string): string[] => {
    const keys: string[] = [];
    let cursor = start;
    while (ymdKey(cursor, tz) < ymdKey(end, tz)) {
        keys.push(ymdKey(cursor, tz));
        const next = new Date(cursor.getTime() + 24 * 60 * 60 * 1000);
        if (ymdKey(next, tz) === ymdKey(cursor, tz)) break;
        cursor = next;
    }
    return keys;
};

/** =========================
 *  Main page
 *  ========================= */
export default function IndividualBookBoardingPage() {
    const t = useTranslations('individualBookBoarding');
    const locale = useLocale();
    const router = useRouter();
    const params = useSearchParams();

    const businessId = params.get('businessId') || '';
    const businessName = params.get('businessName') || t('default_business_name');

    // Auth / user
    const [userId, setUserId] = useState<string>('');
    const [ownerName, setOwnerName] = useState<string>('Client');

    // Pets
    const [pets, setPets] = useState<Pet[]>([]);
    const [selectedPetIds, setSelectedPetIds] = useState<Set<string>>(new Set());

    // Dates & times (Boarding)
    const [checkInDate, setCheckInDate] = useState<Date | null>(new Date());
    const [checkOutDate, setCheckOutDate] = useState<Date | null>(null);

    const [checkInTimeRequired, setCheckInTimeRequired] = useState(false);
    const [checkOutTimeRequired, setCheckOutTimeRequired] = useState(false);

    const [checkInTimesByWeekday, setCheckInTimesByWeekday] = useState<WeekdayMap>({});
    const [checkOutTimesByWeekday, setCheckOutTimesByWeekday] = useState<WeekdayMap>({});

    const [checkInOptions, setCheckInOptions] = useState<string[]>([]);
    const [checkInDisplayOptions, setCheckInDisplayOptions] = useState<string[]>([]);
    const [checkOutOptions, setCheckOutOptions] = useState<string[]>([]);
    const [checkOutDisplayOptions, setCheckOutDisplayOptions] = useState<string[]>([]); // ✅ labels with suffix

    const [checkInWindow, setCheckInWindow] = useState('');
    const [checkOutWindow, setCheckOutWindow] = useState('');

    const [sameDayCheckInCutoff, setSameDayCheckInCutoff] = useState<string | null>(null);

    // Business / features
    const [businessTimeZoneId, setBusinessTimeZoneId] = useState<string | null>(null);
    const [includePendingInCapacity, setIncludePendingInCapacity] = useState(false);
    const [clientWritesRTDB, setClientWritesRTDB] = useState(true);
    const [requireBoardingReservationApproval, setRequireBoardingReservationApproval] = useState(false);
    const [paymentsEnabled, setPaymentsEnabled] = useState(false);
    const [boardingPayAtBookingEnabled, setBoardingPayAtBookingEnabled] = useState(false);

    // Capacity
    const [capacityBoardingTotal, setCapacityBoardingTotal] = useState<number | null>(null);
    const [capacityBlockingNights, setCapacityBlockingNights] = useState<string[]>([]);
    const [blackoutDates, setBlackoutDates] = useState<Set<string>>(new Set());
    const [prohibitBoardingOverlapWithBlackoutDates, setProhibitBoardingOverlapWithBlackoutDates] = useState<boolean>(false);

    const [maxPerTimeSlot, setMaxPerTimeSlot] = useState<number>(0);

    // Grooming
    const [groomingAvailableAsAddOn, setGroomingAvailableAsAddOn] = useState(false);
    const [groomingServices, setGroomingServices] = useState<string[]>([]);
    const [groomingSelections, setGroomingSelections] = useState<GroomingSelections>({});
    const [showGroomingModal, setShowGroomingModal] = useState(false);
    const [groomingServicePriceCentsByName, setGroomingServicePriceCentsByName] = useState<Record<string, number>>({});
    const [boardingAddOnServices, setBoardingAddOnServices] = useState<string[]>([]);
    const [boardingAddOnPriceCentsByName, setBoardingAddOnPriceCentsByName] = useState<Record<string, number>>({});
    const [selectedBoardingAddOns, setSelectedBoardingAddOns] = useState<string[]>([]);
    const [showBoardingAddOnModal, setShowBoardingAddOnModal] = useState(false);
    const [boardingPricingSettings, setBoardingPricingSettings] = useState<BoardingPricingSettings | null>(null);
    const [invoiceLibraryItems, setInvoiceLibraryItems] = useState<InvoiceLibraryItem[]>([]);
    const [clientDiscountSettings, setClientDiscountSettings] = useState<BoardingClientDiscountSettings | null>(null);
    const [assignedClientDiscountRuleIds, setAssignedClientDiscountRuleIds] = useState<string[]>([]);
    const [boardingQuote, setBoardingQuote] = useState<BoardingQuote | null>(null);
    const [isProcessingPayment, setIsProcessingPayment] = useState(false);
    const [clientSecret, setClientSecret] = useState<string | null>(null);
    const [paymentAmount, setPaymentAmount] = useState<number | null>(null);
    const [paymentBreakdown, setPaymentBreakdown] = useState<PaymentBreakdown>({ lines: [], subtotalCents: 0 });
    const [paymentIntentId, setPaymentIntentId] = useState<string | null>(null);
    const [paymentEstimateSummary, setPaymentEstimateSummary] = useState<{
        estimatedTotalCents: number;
        depositDueTodayCents: number;
        remainingBalanceCents: number;
        membershipPurchaseTotalCents: number;
    } | null>(null);
    const [pendingReservationId, setPendingReservationId] = useState<string | null>(null);

    const [membershipPlans, setMembershipPlans] = useState<MembershipPlan[]>([]);
    const [membershipPurchases, setMembershipPurchases] = useState<MembershipPurchase[]>([]);
    const [selectedMembershipPurchaseId, setSelectedMembershipPurchaseId] = useState('');
    const [selectedMembershipPlanId, setSelectedMembershipPlanId] = useState('');

    // 🔷 Deposit gate
    const [depositRequired, setDepositRequired] = useState<boolean>(false);
    const [depositAmount, setDepositAmount] = useState<string>('');
    const [depositAcknowledged, setDepositAcknowledged] = useState<boolean>(false);
    const gatingActive = depositRequired && !depositAcknowledged;
    const [afterHoursPickUpTimeRequired, setAfterHoursPickUpTimeRequired] = useState<boolean>(false);
    const [afterHoursPickUpTimesByWeekday, setAfterHoursPickUpTimesByWeekday] = useState<WeekdayMap>({});
    const [beforeHoursPickUpTimeRequired, setBeforeHoursPickUpTimeRequired] = useState<boolean>(false);
    const [beforeHoursPickUpTimesByWeekday, setBeforeHoursPickUpTimesByWeekday] = useState<WeekdayMap>({});
    const [earlyDropOffTimeRequired, setEarlyDropOffTimeRequired] = useState<boolean>(false);
    const [earlyDropOffTimesByWeekday, setEarlyDropOffTimesByWeekday] = useState<WeekdayMap>({});
    const [afterHoursDropOffTimeRequired, setAfterHoursDropOffTimeRequired] = useState<boolean>(false);
    const [afterHoursDropOffTimesByWeekday, setAfterHoursDropOffTimesByWeekday] = useState<WeekdayMap>({});

    const blackoutAlertShownRef = React.useRef(false);

    // Validation / flow
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [overlapDetected, setOverlapDetected] = useState(false);
    const [suppressValidations, setSuppressValidations] = useState(false);

    const bizTZ = businessTimeZoneId || Intl.DateTimeFormat().resolvedOptions().timeZone;
    const membershipUnitsRequired = useMemo(() => {
        if (!checkInDate || !checkOutDate || checkInDate >= checkOutDate) return 0;
        const nights = nightsBetweenKeys(checkInDate, checkOutDate, bizTZ).length;
        return nights * selectedPetIds.size;
    }, [bizTZ, checkInDate, checkOutDate, selectedPetIds]);
    const boardingOnlinePaymentsEnabled = paymentsEnabled && boardingPayAtBookingEnabled;
    const boardingUsableMembershipPurchases = useMemo(() => (
        membershipPurchases.filter((purchase) => membershipPurchaseCanCover(purchase, 'boarding', 0))
    ), [membershipPurchases]);
    const boardingPurchasableMembershipPlans = useMemo(() => (
        membershipPlans.filter((plan) => (
            plan.active
            && plan.appliesToServices.boarding
            && plan.purchaseAtBooking
        ))
    ), [membershipPlans]);
    const showBoardingMembershipSelector = membershipUnitsRequired > 0 && (
        boardingUsableMembershipPurchases.length > 0
        || (boardingOnlinePaymentsEnabled && boardingPurchasableMembershipPlans.length > 0)
    );
    const hasBoardingPricingConfigured = useMemo(
        () => Object.keys(boardingPricingSettings?.nightlyRates || {}).length > 0,
        [boardingPricingSettings]
    );
    const membershipPurchaseDisabledReason =
        boardingOnlinePaymentsEnabled
            ? null
            : t('membership_purchase_requires_boarding_pay_at_booking');
    const invoiceItemMap = useMemo(() => invoiceItemsById(invoiceLibraryItems), [invoiceLibraryItems]);
    const selectedMembershipPurchase = useMemo(() => (
        membershipPurchases.find((purchase) => purchase.id === selectedMembershipPurchaseId) || null
    ), [membershipPurchases, selectedMembershipPurchaseId]);
    const selectedMembershipPlanForPurchase = useMemo(() => (
        membershipPlans.find((plan) => plan.id === selectedMembershipPlanId) || null
    ), [membershipPlans, selectedMembershipPlanId]);
    const membershipUnitsCovered = useMemo(() => {
        if (selectedMembershipPurchase) {
            if (selectedMembershipPurchase.status !== 'active' || !selectedMembershipPurchase.appliesToServices.boarding) {
                return 0;
            }
            if (selectedMembershipPurchase.remainingUnits === null) return membershipUnitsRequired;
            return Math.min(selectedMembershipPurchase.remainingUnits, membershipUnitsRequired);
        }
        if (selectedMembershipPlanForPurchase) {
            if (!selectedMembershipPlanForPurchase.active || !selectedMembershipPlanForPurchase.appliesToServices.boarding) {
                return 0;
            }
            if (selectedMembershipPlanForPurchase.includedUnits === null) return membershipUnitsRequired;
            return Math.min(selectedMembershipPlanForPurchase.includedUnits, membershipUnitsRequired);
        }
        return 0;
    }, [membershipUnitsRequired, selectedMembershipPlanForPurchase, selectedMembershipPurchase]);
    const groomingSubtotalCents = useMemo(
        () => priceCentsForPerPetSelections(groomingSelections, groomingServicePriceCentsByName),
        [groomingSelections, groomingServicePriceCentsByName]
    );
    const boardingAddOnSubtotalCents = useMemo(
        () => priceCentsForSelectedServices(selectedBoardingAddOns, boardingAddOnPriceCentsByName),
        [selectedBoardingAddOns, boardingAddOnPriceCentsByName]
    );
    const matchedOddHourKinds = useMemo(() => {
        const next: Array<'earlyDropOff' | 'afterHoursDropOff' | 'beforeHoursPickUp' | 'afterHoursPickUp'> = [];
        const checkInDay = checkInDate ? weekdayName(checkInDate, bizTZ) : null;
        const checkOutDay = checkOutDate ? weekdayName(checkOutDate, bizTZ) : null;

        if (
            checkInDay
            && checkInWindow
            && earlyDropOffTimeRequired
            && (earlyDropOffTimesByWeekday[checkInDay] || []).includes(checkInWindow)
        ) {
            next.push('earlyDropOff');
        }
        if (
            checkInDay
            && checkInWindow
            && afterHoursDropOffTimeRequired
            && (afterHoursDropOffTimesByWeekday[checkInDay] || []).includes(checkInWindow)
        ) {
            next.push('afterHoursDropOff');
        }
        if (
            checkOutDay
            && checkOutWindow
            && beforeHoursPickUpTimeRequired
            && (beforeHoursPickUpTimesByWeekday[checkOutDay] || []).includes(checkOutWindow)
        ) {
            next.push('beforeHoursPickUp');
        }
        if (
            checkOutDay
            && checkOutWindow
            && afterHoursPickUpTimeRequired
            && (afterHoursPickUpTimesByWeekday[checkOutDay] || []).includes(checkOutWindow)
        ) {
            next.push('afterHoursPickUp');
        }

        return next;
    }, [
        afterHoursDropOffTimeRequired,
        afterHoursDropOffTimesByWeekday,
        afterHoursPickUpTimeRequired,
        afterHoursPickUpTimesByWeekday,
        beforeHoursPickUpTimeRequired,
        beforeHoursPickUpTimesByWeekday,
        bizTZ,
        checkInDate,
        checkInWindow,
        checkOutDate,
        checkOutWindow,
        earlyDropOffTimeRequired,
        earlyDropOffTimesByWeekday
    ]);
    const matchedCheckoutWindow = useMemo(() => {
        if (!boardingPricingSettings || !checkOutWindow) return null;
        return matchCheckoutChargeWindow(checkOutWindow, boardingPricingSettings);
    }, [boardingPricingSettings, checkOutWindow]);
    const translatedQuoteNotes = useMemo(() => {
        if (!boardingQuote) return [];
        const next: string[] = [];

        if (boardingQuote.coveredMembershipUnits > 0) {
            next.push(
                boardingQuote.coveredMembershipUnits >= boardingQuote.totalPetNights
                    ? t('pricing_note_membership_full')
                    : t('pricing_note_membership_partial')
            );
        }

        if (boardingQuote.automaticDiscountsSuppressed) {
            next.push(t('pricing_note_manual_discount_review'));
        }

        if (boardingQuote.matchedDepositRule) {
            next.push(t('pricing_note_deposit_rule'));
        }

        if (selectedMembershipPlanForPurchase && selectedMembershipPlanForPurchase.priceCents > 0) {
            next.push(t('pricing_note_membership_purchase_today'));
        }

        return next;
    }, [boardingQuote, selectedMembershipPlanForPurchase, t]);

    const membershipPurchaseTotalCents = selectedMembershipPlanForPurchase?.priceCents || 0;
    const amountDueTodayCents = (boardingQuote?.depositDueTodayCents || 0) + membershipPurchaseTotalCents;
    const formInteractionBlocked = gatingActive || (isProcessingPayment && !clientSecret);

    const invalidatePaymentState = useCallback(() => {
        setClientSecret(null);
        setPaymentAmount(null);
        setPaymentIntentId(null);
        setPaymentEstimateSummary(null);
        setPaymentBreakdown({ lines: [], subtotalCents: 0 });
        setPendingReservationId(null);
    }, []);

    const buildPaymentBreakdown = useCallback((): PaymentBreakdown => {
        const lines: PaymentLineItem[] = [];

        if (selectedMembershipPlanForPurchase && selectedMembershipPlanForPurchase.priceCents > 0) {
            lines.push({
                key: `membership-plan-${selectedMembershipPlanForPurchase.id}`,
                label: t('payment_line_membership_purchase', {
                    name: selectedMembershipPlanForPurchase.name,
                }),
                quantity: 1,
                unitCents: selectedMembershipPlanForPurchase.priceCents,
                totalCents: selectedMembershipPlanForPurchase.priceCents,
            });
        }

        if ((boardingQuote?.depositDueTodayCents || 0) > 0) {
            lines.push({
                key: 'boarding-amount-due-today',
                label: t('payment_line_due_today'),
                quantity: 1,
                unitCents: boardingQuote?.depositDueTodayCents || 0,
                totalCents: boardingQuote?.depositDueTodayCents || 0,
            });
        }

        return {
            lines,
            subtotalCents: lines.reduce((sum, line) => sum + line.totalCents, 0),
        };
    }, [boardingQuote, selectedMembershipPlanForPurchase, t]);

    /** Derived submit disabled — waiver removed */
    const isSubmitDisabled = useMemo(() => {
        if (isSubmitting) return true;
        if (gatingActive) return true;
        if (!checkInDate || !checkOutDate) return true;
        if (checkInDate >= checkOutDate) return true;
        if (selectedPetIds.size === 0) return true;
        if (checkInTimeRequired && !checkInWindow) return true;
        if (checkOutTimeRequired && !checkOutWindow) return true;
        if (overlapDetected) return true;
        if (capacityBlockingNights.length > 0) return true;
        return false;
    }, [
        isSubmitting, checkInDate, checkOutDate, selectedPetIds,
        checkInTimeRequired, checkInWindow, checkOutTimeRequired, checkOutWindow,
        overlapDetected, capacityBlockingNights, gatingActive
    ]);

    /** =========================
 *  Time option builders (defined early so they can be deps)
 *  ========================= */
    /** Build check-in options and preserve the current selection if still valid */
    const refreshCheckInOptions = useCallback((
        baseMapOpt?: WeekdayMap,
        earlyMapOpt?: WeekdayMap,
        afterMapOpt?: WeekdayMap,
        earlyReqOpt?: boolean,
        afterReqOpt?: boolean
    ) => {
        if (!checkInTimeRequired || !checkInDate) {
            setCheckInOptions([]);
            setCheckInDisplayOptions([]);
            setCheckInWindow('');
            return;
        }

        const weekday = weekdayName(checkInDate, bizTZ);
        const baseMap = baseMapOpt ?? checkInTimesByWeekday;
        const earlyMap = earlyMapOpt ?? earlyDropOffTimesByWeekday;
        const afterMap = afterMapOpt ?? afterHoursDropOffTimesByWeekday;
        const earlyRequired = earlyReqOpt ?? earlyDropOffTimeRequired;
        const afterRequired = afterReqOpt ?? afterHoursDropOffTimeRequired;

        const base = baseMap[weekday] || [];
        const early = earlyRequired ? (earlyMap[weekday] || []) : [];
        const after = afterRequired ? (afterMap[weekday] || []) : [];
        const merged = Array.from(new Set([...base, ...early, ...after]));
        const sorted = sortTimeStrings(merged);
        const filtered = filterCheckInTimesForSameDay(sorted, checkInDate, bizTZ, sameDayCheckInCutoff);
        const earlySet = new Set(early);
        const afterSet = new Set(after);
        const labels = filtered.map((timeValue) => {
            if (earlySet.has(timeValue)) return `${timeValue} ${t('early_dropoff_fee_may_apply_suffix')}`;
            if (afterSet.has(timeValue)) return `${timeValue} ${t('after_hours_dropoff_fee_may_apply_suffix')}`;
            return timeValue;
        });

        setCheckInOptions(filtered);
        setCheckInDisplayOptions(labels);

        // 🔑 Preserve current selection if still valid; otherwise fall back to first available
        setCheckInWindow(prev =>
            prev && filtered.includes(prev) ? prev : (filtered[0] ?? '')
        );
    }, [
        checkInDate,
        checkInTimeRequired,
        checkInTimesByWeekday,
        earlyDropOffTimeRequired,
        earlyDropOffTimesByWeekday,
        afterHoursDropOffTimeRequired,
        afterHoursDropOffTimesByWeekday,
        bizTZ,
        sameDayCheckInCutoff,
        t
    ]);

    // Find the next check-in date that has at least one available time (post-filter)
    const findNextCheckInDate = useCallback(
        async (startDate: Date) => {
            for (let i = 1; i <= 30; i++) {
                const candidate = normalizeDate(new Date(startDate.getTime() + i * 24 * 60 * 60 * 1000));
                const day = weekdayName(candidate, bizTZ);
                const rawMerged = [
                    ...(checkInTimesByWeekday[day] || []),
                    ...(earlyDropOffTimeRequired ? (earlyDropOffTimesByWeekday[day] || []) : []),
                    ...(afterHoursDropOffTimeRequired ? (afterHoursDropOffTimesByWeekday[day] || []) : []),
                ];
                const raw = sortTimeStrings(rawMerged.map((s) => s || ''));
                if (raw.length === 0) continue; // no times configured on this weekday

                // For non-today, filterCheckInTimesForSameDay returns everything (no past-time cut)
                const filtered = filterCheckInTimesForSameDay(raw, candidate, bizTZ, sameDayCheckInCutoff);
                if (filtered.length > 0) {
                    return { date: candidate, times: filtered };
                }
            }
            return null;
        },
        [
            bizTZ,
            checkInTimesByWeekday,
            sameDayCheckInCutoff,
            earlyDropOffTimeRequired,
            earlyDropOffTimesByWeekday,
            afterHoursDropOffTimeRequired,
            afterHoursDropOffTimesByWeekday
        ]
    );

    const refreshCheckOutOptions = useCallback((
        baseMapOpt?: WeekdayMap,
        beforeMapOpt?: WeekdayMap,
        afterMapOpt?: WeekdayMap,
        beforeReqOpt?: boolean,
        afterReqOpt?: boolean
    ) => {
        if (!checkOutTimeRequired || !checkOutDate) {
            setCheckOutOptions([]); setCheckOutDisplayOptions([]); setCheckOutWindow('');
            return;
        }
        const weekday = weekdayName(checkOutDate, bizTZ);

        const baseMap = baseMapOpt || checkOutTimesByWeekday;
        const beforeMap = beforeMapOpt || beforeHoursPickUpTimesByWeekday;
        const afterMap = afterMapOpt || afterHoursPickUpTimesByWeekday;
        const beforeRequired = beforeReqOpt ?? beforeHoursPickUpTimeRequired;
        const afterRequired = afterReqOpt ?? afterHoursPickUpTimeRequired;

        const base = baseMap[weekday] || [];
        const before = beforeRequired ? (beforeMap[weekday] || []) : [];
        const after = afterRequired ? (afterMap[weekday] || []) : [];

        // unique + sorted
        const combined = Array.from(new Set([...before, ...base, ...after]));
        const combinedSorted = sortTimeStrings(combined);

        // raw values we store
        setCheckOutOptions(combinedSorted);

        // display labels with suffix for after-hours only
        const beforeSuffix = ` ${t('before_hours_pickup_fee_may_apply_suffix')}`;
        const afterSuffix = ` ${t('after_hours_fee_may_apply_suffix')}`;
        const beforeSet = new Set(before);
        const afterSet = new Set(after);
        const labels = combinedSorted.map(tStr => {
            if (beforeSet.has(tStr)) return `${tStr}${beforeSuffix}`;
            if (afterSet.has(tStr)) return `${tStr}${afterSuffix}`;
            if (boardingPricingSettings && matchCheckoutChargeWindow(tStr, boardingPricingSettings)) {
                return `${tStr} ${t('checkout_fee_may_apply_suffix')}`;
            }
            return tStr;
        });
        setCheckOutDisplayOptions(labels);

        // keep or choose default
        if (!combinedSorted.includes(checkOutWindow)) {
            setCheckOutWindow(combinedSorted[0] || '');
        }
    }, [
        checkOutDate,
        checkOutTimeRequired,
        checkOutTimesByWeekday,
        beforeHoursPickUpTimesByWeekday,
        afterHoursPickUpTimesByWeekday,
        beforeHoursPickUpTimeRequired,
        afterHoursPickUpTimeRequired,
        boardingPricingSettings,
        bizTZ,
        checkOutWindow,
        t
    ]);

    const loadMembershipData = useCallback(async (bizId: string, uid: string) => {
        if (!bizId || !uid) {
            setMembershipPlans([]);
            setMembershipPurchases([]);
            return;
        }

        try {
            const [nextPlans, nextPurchases] = await Promise.all([
                loadMembershipPlans(db, bizId),
                loadClientMembershipPurchases(db, bizId, uid),
            ]);
            setMembershipPlans(nextPlans.filter((plan) => plan.active));
            setMembershipPurchases(nextPurchases);
        } catch (error) {
            console.error('❌ Failed to load memberships:', error);
            setMembershipPlans([]);
            setMembershipPurchases([]);
        }
    }, []);

    useEffect(() => {
        if (!businessId || !userId) return;
        void loadMembershipData(businessId, userId);
    }, [businessId, loadMembershipData, userId]);

    const startStripePaymentFlow = useCallback(async () => {
        if (isProcessingPayment) return;
        if (!userId || !businessId || !checkInDate || !checkOutDate || !boardingQuote || selectedPetIds.size === 0) {
            return;
        }

        if (selectedMembershipPurchase && !membershipPurchaseCanCover(selectedMembershipPurchase, 'boarding', membershipUnitsRequired)) {
            alert(t('membership_balance_insufficient_boarding'));
            return;
        }

        if (selectedMembershipPlanId && !selectedMembershipPlanForPurchase) {
            alert(t('membership_selected_plan_unavailable'));
            return;
        }

        if (selectedMembershipPlanForPurchase && !boardingOnlinePaymentsEnabled) {
            alert(t('membership_purchase_requires_boarding_pay_at_booking'));
            return;
        }

        const localBreakdown = buildPaymentBreakdown();
        const localSummary = {
            estimatedTotalCents: boardingQuote.estimatedTotalCents,
            depositDueTodayCents: boardingQuote.depositDueTodayCents,
            remainingBalanceCents: boardingQuote.remainingBalanceCents,
            membershipPurchaseTotalCents,
        };
        const nextReservationId = pendingReservationId || crypto.randomUUID();

        setPendingReservationId(nextReservationId);
        setPaymentBreakdown(localBreakdown);
        setPaymentEstimateSummary(localSummary);
        setIsProcessingPayment(true);

        try {
            const syncCallable = httpsCallable(functions, 'syncStripeAccountStatus');
            await syncCallable({ businessId });

            const createCallable = httpsCallable(functions, 'createBoardingPaymentIntent');
            const payload = {
                businessId,
                userId,
                reservationId: nextReservationId,
                checkInDateMs: checkInDate.getTime(),
                checkOutDateMs: checkOutDate.getTime(),
                petIds: [...selectedPetIds],
                checkInWindow: checkInWindow || null,
                checkOutWindow: checkOutWindow || null,
                groomingAddOns: groomingSelections,
                boardingAddOns: selectedBoardingAddOns,
                selectedMembershipPurchaseId: selectedMembershipPurchaseId || null,
                selectedMembershipPlanId: selectedMembershipPlanId || null,
            };

            const result = await createCallable(payload) as { data?: CreateBoardingPaymentIntentResponse };
            const response = result?.data || {};

            const nextClientSecret = response.clientSecret;
            const amountCents = response.amountCents;
            const nextPaymentIntentId = response.paymentIntentId;

            if (!nextClientSecret || typeof amountCents !== 'number' || amountCents <= 0) {
                throw new Error('Invalid PaymentIntent response');
            }

            const serverLines = parseServerItemizedLineItems(response.itemizedLineItems);
            if (serverLines.length > 0) {
                setPaymentBreakdown({
                    lines: serverLines,
                    subtotalCents: serverLines.reduce((sum, line) => sum + line.totalCents, 0),
                });
            } else {
                setPaymentBreakdown(localBreakdown);
            }

            setPaymentEstimateSummary({
                estimatedTotalCents: typeof response.estimatedTotalCents === 'number'
                    ? response.estimatedTotalCents
                    : localSummary.estimatedTotalCents,
                depositDueTodayCents: typeof response.depositDueTodayCents === 'number'
                    ? response.depositDueTodayCents
                    : localSummary.depositDueTodayCents,
                remainingBalanceCents: typeof response.remainingBalanceCents === 'number'
                    ? response.remainingBalanceCents
                    : localSummary.remainingBalanceCents,
                membershipPurchaseTotalCents: typeof response.membershipPurchaseTotalCents === 'number'
                    ? response.membershipPurchaseTotalCents
                    : localSummary.membershipPurchaseTotalCents,
            });

            setPaymentAmount(amountCents);
            setPaymentIntentId(nextPaymentIntentId || null);
            setClientSecret(nextClientSecret);
        } catch (error) {
            console.error('❌ Boarding Stripe payment flow failed:', error);
            invalidatePaymentState();
            alert(t('payment_processing_failed'));
        } finally {
            setIsProcessingPayment(false);
        }
    }, [
        boardingOnlinePaymentsEnabled,
        boardingQuote,
        buildPaymentBreakdown,
        businessId,
        checkInDate,
        checkInWindow,
        checkOutDate,
        checkOutWindow,
        groomingSelections,
        isProcessingPayment,
        membershipPurchaseTotalCents,
        membershipUnitsRequired,
        pendingReservationId,
        selectedBoardingAddOns,
        selectedMembershipPlanForPurchase,
        selectedMembershipPlanId,
        selectedMembershipPurchase,
        selectedMembershipPurchaseId,
        selectedPetIds,
        t,
        userId,
        invalidatePaymentState,
    ]);

    /** Fetch Business settings (parity with iOS; includes after-hours) — waiver removed */
    const fetchBusinessSettings = useCallback(async (bizId: string, uidOverride?: string) => {
        try {
            const activeUserId = uidOverride || '';
            const [bsnap, pricingSnap, addOnSnap, invoiceSnap, groomingSnap, discountSnap, clientSnap] = await Promise.all([
                getDoc(doc(db, 'businesses', bizId)),
                getDoc(doc(db, 'businesses', bizId, 'settings', 'boardingPricing')),
                getDoc(doc(db, 'businesses', bizId, 'settings', 'boardingAddOnPricing')),
                getDoc(doc(db, 'businesses', bizId, 'settings', 'invoiceItemLibrary')),
                getDoc(doc(db, 'businesses', bizId, 'settings', 'groomingPricing')),
                getDoc(doc(db, 'businesses', bizId, 'settings', 'discountRules')),
                activeUserId ? getDoc(doc(db, 'userApprovedBusinesses', bizId, 'clients', activeUserId)) : Promise.resolve(null),
            ]);
            const data = (bsnap.data() || {}) as BusinessSettingsDoc;
            const nextBusinessTimeZoneId = data.timeZoneId || null;
            const nextBizTZ = nextBusinessTimeZoneId || Intl.DateTimeFormat().resolvedOptions().timeZone;

            // TZ & features (no enforceWaiverVersion)
            setBusinessTimeZoneId(nextBusinessTimeZoneId);
            const f = data.features || {};
            setIncludePendingInCapacity(!!f.countPendingInCapacity);
            setClientWritesRTDB(f.clientWritesRTDB !== false); // default true
            setRequireBoardingReservationApproval(!!data.requireBoardingReservationApproval);
            const paymentSettings = data.paymentSettings || {};
            setPaymentsEnabled(!!paymentSettings.enabled);
            const boardingPayments = paymentSettings.boarding || {};
            setBoardingPayAtBookingEnabled(!!boardingPayments.payAtBooking);

            // Capacity
            setCapacityBoardingTotal(
                typeof data.capacityBoardingTotal === 'number' && data.capacityBoardingTotal > 0
                    ? data.capacityBoardingTotal
                    : null
            );

            // Time requirements
            const ciReq = data.checkInTimeRequiredBoarding ?? data.dropOffTimeRequiredBoarding ?? false;
            const coReq = data.checkOutTimeRequiredBoarding ?? data.pickUpTimeRequiredBoarding ?? false;
            setCheckInTimeRequired(!!ciReq);
            setCheckOutTimeRequired(!!coReq);

            // Time maps
            const ciMap = data.checkInTimesBoarding ?? data.dropOffTimesBoarding ?? {};
            const coMap = data.checkOutTimesBoarding ?? data.pickUpTimesBoarding ?? {};
            setCheckInTimesByWeekday(ciMap);
            setCheckOutTimesByWeekday(coMap);

            // Same-day cutoff
            setSameDayCheckInCutoff(data.sameDayCheckInCutoffBoarding || null);

            // Per-slot limit
            setMaxPerTimeSlot((data.bookingLimits?.maxPerTimeSlot as number) || 0);

            // Grooming
            setGroomingAvailableAsAddOn(!!data.groomingAvailableAsAddOnToBoarding);
            setGroomingServices((data.groomingServices || []).map(s => (s || '').trim()).filter(Boolean));
            if (groomingSnap.exists()) {
                const groomingData = groomingSnap.data() as {
                    grooming?: { services?: Record<string, { priceCents?: number }> };
                };
                const servicesMap = groomingData.grooming?.services || {};
                const nextServiceNames = Object.keys(servicesMap)
                    .map((value) => value.trim())
                    .filter(Boolean)
                    .sort((a, b) => a.localeCompare(b));
                const nextPrices: Record<string, number> = {};
                for (const [serviceName, value] of Object.entries(servicesMap)) {
                    if (typeof value?.priceCents === 'number' && value.priceCents > 0) {
                        nextPrices[serviceName] = value.priceCents;
                    }
                }
                setGroomingServicePriceCentsByName(nextPrices);
                if (nextServiceNames.length > 0) {
                    setGroomingServices(nextServiceNames);
                }
            } else {
                setGroomingServicePriceCentsByName({});
            }

            if (addOnSnap.exists()) {
                const addOnData = addOnSnap.data() as {
                    services?: Record<string, { priceCents?: number }>;
                };
                const servicesMap = addOnData.services || {};
                const nextBoardingAddOnNames = Object.keys(servicesMap)
                    .map((value) => value.trim())
                    .filter(Boolean)
                    .sort((a, b) => a.localeCompare(b));
                const nextPrices: Record<string, number> = {};
                for (const [serviceName, value] of Object.entries(servicesMap)) {
                    if (typeof value?.priceCents === 'number' && value.priceCents > 0) {
                        nextPrices[serviceName] = value.priceCents;
                    }
                }
                setBoardingAddOnServices(nextBoardingAddOnNames);
                setBoardingAddOnPriceCentsByName(nextPrices);
            } else {
                setBoardingAddOnServices([]);
                setBoardingAddOnPriceCentsByName({});
            }

            if (pricingSnap.exists()) {
                setBoardingPricingSettings(normalizeBoardingPricingDoc(pricingSnap.data()));
            } else {
                setBoardingPricingSettings(normalizeBoardingPricingDoc(null));
            }

            if (invoiceSnap.exists()) {
                setInvoiceLibraryItems(normalizeInvoiceLibraryItemsDoc(invoiceSnap.data()));
            } else {
                setInvoiceLibraryItems([]);
            }

            if (discountSnap.exists()) {
                setClientDiscountSettings(normalizeBoardingClientDiscountSettings(discountSnap.data()));
            } else {
                setClientDiscountSettings(null);
            }

            const assignedRuleIds = clientSnap?.exists()
                ? (clientSnap.data()?.assignedDiscountRuleIds as string[] | undefined)
                : undefined;
            setAssignedClientDiscountRuleIds(
                Array.isArray(assignedRuleIds)
                    ? assignedRuleIds.filter((value): value is string => typeof value === 'string')
                    : []
            );

            // --- Blackout Dates (match iOS behavior)
            if (Array.isArray(data.blackoutDates)) {
                const formatted = data.blackoutDates.map((ts: Timestamp) => {
                    const d = ts.toDate();
                    return ymdKey(d, nextBizTZ);
                });
                setBlackoutDates(new Set(formatted));
            } else {
                setBlackoutDates(new Set());
            }

            // NEW: Prevent boarding reservations overlapping blackout dates
            setProhibitBoardingOverlapWithBlackoutDates(
                data.prohibitBoardingOverlapWithBlackoutDates || false
            );

            // ✅ After-hours
            const ahReq = !!data.afterHoursPickUpTimeRequired;
            const ahMap = data.afterHoursPickUpTimes || {};
            setAfterHoursPickUpTimeRequired(ahReq);
            setAfterHoursPickUpTimesByWeekday(ahMap);
            const bhReq = !!data.beforeHoursPickUpTimeRequired;
            const bhMap = data.beforeHoursPickUpTimes || {};
            setBeforeHoursPickUpTimeRequired(bhReq);
            setBeforeHoursPickUpTimesByWeekday(bhMap);
            const earlyReq = !!data.earlyDropOffTimeRequired;
            const earlyMap = data.earlyDropOffTimes || {};
            setEarlyDropOffTimeRequired(earlyReq);
            setEarlyDropOffTimesByWeekday(earlyMap);
            const afterDropReq = !!data.afterHoursDropOffTimeRequired;
            const afterDropMap = data.afterHoursDropOffTimes || {};
            setAfterHoursDropOffTimeRequired(afterDropReq);
            setAfterHoursDropOffTimesByWeekday(afterDropMap);

            // 🔷 Deposit requirement (boarding)
            setDepositRequired(Boolean(data.depositRequired));
            setDepositAmount((data.depositAmount as string) || '');
            setDepositAcknowledged(false); // reset every time settings load
        } catch (e) {
            console.error('❌ Failed to fetch business settings:', e);
        }
    }, []);

    /** =========================
 *  Load auth, pets, business settings (dup-guarded) — waiver removed
 *  ========================= */
    useEffect(() => {
        let handled = false; // prevents double fire in StrictMode / reconnects

        const unsub = onAuthStateChanged(auth, async (user) => {
            if (handled) return;
            handled = true;

            if (!user) {
                router.push(`/${locale}/loginsignup`);
                return;
            }

            const uid = user.uid;
            setUserId(uid);

            try {
                const uref = doc(db, 'users', uid);
                const usnap = await getDoc(uref).catch(() => null);
                const fn = (usnap?.data()?.firstName as string) || '';
                const ln = (usnap?.data()?.lastName as string) || '';
                const on = `${fn} ${ln}`.trim();
                setOwnerName(on || 'Client');
            } catch {
                setOwnerName('Client');
            }

            try {
                const pcol = collection(db, 'users', uid, 'pets');
                const psnap = await getDocs(pcol);
                const list: Pet[] = psnap.docs.map(d => {
                    const data = d.data() || {};
                    return {
                        id: d.id,
                        name: (data.petName as string) || 'Unnamed',
                        species: (data.petType as string) || '',
                        medications: (data.medications as string) || undefined,
                        medicationDetails: (data.medicationDetails as string) || undefined,
                        spayedNeutered: (data.spayedNeutered as string) || undefined,
                    };
                });
                setPets(list);
                setSelectedPetIds(new Set(list.map(p => p.id)));
            } catch (e) {
                console.error('❌ Failed to load pets:', e);
            }

            await fetchBusinessSettings(businessId, uid);
        });

        return () => unsub();
    }, [businessId, fetchBusinessSettings, locale, router]);


    function checkBlackoutOverlapIfProhibited(): boolean {
        if (!prohibitBoardingOverlapWithBlackoutDates) return false;
        if (!checkInDate || !checkOutDate) return false;
        if (checkInDate >= checkOutDate) return false;

        const nights = nightsBetweenKeys(checkInDate, checkOutDate, bizTZ);

        for (const n of nights) {
            if (blackoutDates.has(n)) {
                if (!blackoutAlertShownRef.current) {
                    blackoutAlertShownRef.current = true;   // <-- synchronous, instant
                    alert(t('boarding_blackout_overlap_forbidden'));
                }
                setOverlapDetected(true);
                return true;
            }
        }

        setOverlapDetected(false);
        return false;
    }

    /** =========================
     *  Validators (overlap, capacity, per-slot)
     *  ========================= */
    const revalidateAll = useCallback(async () => {
        if (suppressValidations) return;

        const blackoutConflict = checkBlackoutOverlapIfProhibited();
        if (blackoutConflict) return;

        await checkOverlapForSelectedRange();
        await checkCapacityForSelectedRange();
        await checkCheckInWindowCapacityIfNeeded();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        suppressValidations, checkInDate, checkOutDate, selectedPetIds,
        capacityBoardingTotal, includePendingInCapacity, checkInWindow,
        checkInTimeRequired, maxPerTimeSlot, bizTZ
    ]);

    const checkOverlapForSelectedRange = useCallback(async () => {
        setOverlapDetected(false);
        if (!userId || !businessId || !checkInDate || !checkOutDate) return;
        if (checkInDate >= checkOutDate) return;
        if (selectedPetIds.size === 0) return;

        try {
            const qref = query(
                collection(db, 'boardingReservations'),
                where('userId', '==', userId),
                where('businessId', '==', businessId),
                where('status', 'in', ['pending', 'approved'])
            );
            const snap = await getDocs(qref);
            const mySet = new Set([...selectedPetIds]);

            for (const d of snap.docs) {
                const data = d.data();
                const tsIn = data.checkInDate as Timestamp | undefined;
                const tsOut = data.checkOutDate as Timestamp | undefined;
                const petIds = (data.petIds as string[]) || [];
                if (!tsIn || !tsOut) continue;

                const exIn = tsIn.toDate();
                const exOut = tsOut.toDate();
                const overlapDates = (checkInDate < exOut) && (checkOutDate > exIn);
                const overlapPets = petIds.some(pid => mySet.has(pid));
                if (overlapDates && overlapPets) {
                    setOverlapDetected(true);
                    return;
                }
            }
        } catch (e) {
            console.error('❌ Overlap query failed:', e);
        }
    }, [userId, businessId, checkInDate, checkOutDate, selectedPetIds]);

    const checkCapacityForSelectedRange = useCallback(async () => {
        setCapacityBlockingNights([]);
        if (!checkInDate || !checkOutDate) return;
        if (checkInDate >= checkOutDate) return;
        if (!capacityBoardingTotal || capacityBoardingTotal <= 0) return;

        try {
            const statuses = includePendingInCapacity ? ['pending', 'approved'] : ['approved'];
            const qref = query(
                collection(db, 'boardingReservations'),
                where('businessId', '==', businessId),
                where('status', 'in', statuses)
            );
            const snap = await getDocs(qref);

            const counts: Record<string, number> = {};
            for (const d of snap.docs) {
                const data = d.data();
                const tsIn = data.checkInDate as Timestamp | undefined;
                const tsOut = data.checkOutDate as Timestamp | undefined;
                const petIds = (data.petIds as string[]) || [];
                if (!tsIn || !tsOut) continue;

                const exIn = tsIn.toDate();
                const exOut = tsOut.toDate();
                const nights = nightsBetweenKeys(exIn, exOut, bizTZ);
                for (const k of nights) counts[k] = (counts[k] ?? 0) + Math.max(1, petIds.length);
            }

            const add = Math.max(1, selectedPetIds.size);
            const target = nightsBetweenKeys(checkInDate, checkOutDate, bizTZ);
            const blocked: string[] = [];
            for (const k of target) {
                const newCount = (counts[k] ?? 0) + add;
                if (newCount > capacityBoardingTotal) blocked.push(k);
            }
            if (blocked.length) {
                setCapacityBlockingNights(blocked);
            }
        } catch (e) {
            console.error('❌ Capacity query failed:', e);
        }
    }, [checkInDate, checkOutDate, capacityBoardingTotal, includePendingInCapacity, businessId, selectedPetIds, bizTZ]);

    const checkCheckInWindowCapacityIfNeeded = useCallback(async () => {
        if (!(maxPerTimeSlot > 0) || !checkInTimeRequired || !checkInDate || !checkInWindow) return;
        try {
            const statuses = includePendingInCapacity ? ['pending', 'approved'] : ['approved'];
            const qref = query(
                collection(db, 'boardingReservations'),
                where('businessId', '==', businessId),
                where('status', 'in', statuses)
            );
            const snap = await getDocs(qref);

            const cinKey = ymdKey(checkInDate, bizTZ);
            let countForWindow = 0;

            for (const d of snap.docs) {
                const data = d.data();
                const win = (data.checkInWindow as string) || '';
                const tsIn = data.checkInDate as Timestamp | undefined;
                if (!tsIn) continue;
                const exKey = ymdKey(tsIn.toDate(), bizTZ);
                if (exKey === cinKey && win === checkInWindow) countForWindow += 1;
            }
            if (countForWindow + 1 > maxPerTimeSlot) {
                setCapacityBlockingNights([cinKey]);
            }
        } catch (e) {
            console.error('❌ Per-slot cap query failed:', e);
        }
    }, [maxPerTimeSlot, checkInTimeRequired, checkInDate, checkInWindow, includePendingInCapacity, businessId, bizTZ]);

    /** =========================
     *  Change handlers to mirror iOS onChange(...)
     *  ========================= */
    // Rebuild check-in options when inputs that actually change the option list change
    // Rebuild options AND auto-advance if today has no remaining times
    useEffect(() => {
        (async () => {
            // If time selection isn't required or no date picked, just refresh normally
            if (!checkInTimeRequired || !checkInDate) {
                refreshCheckInOptions();
                return;
            }

            const weekday = weekdayName(checkInDate, bizTZ);
            const raw = sortTimeStrings([
                ...(checkInTimesByWeekday[weekday] || []),
                ...(earlyDropOffTimeRequired ? (earlyDropOffTimesByWeekday[weekday] || []) : []),
                ...(afterHoursDropOffTimeRequired ? (afterHoursDropOffTimesByWeekday[weekday] || []) : []),
            ].map((s) => s || ''));
            const filtered = filterCheckInTimesForSameDay(raw, checkInDate, bizTZ, sameDayCheckInCutoff);

            // If this day has configured times but none are valid now (e.g., it's late),
            // jump to the next day that has at least one valid check-in time.
            if (raw.length > 0 && filtered.length === 0) {
                const next = await findNextCheckInDate(checkInDate);
                if (next) {
                    setCheckInDate(next.date);
                    setCheckInOptions(next.times);
                    setCheckInWindow(next.times[0] || '');
                    // Optional: if checkout not chosen yet, you can prefill next-day checkout
                    // if (!checkOutDate) setCheckOutDate(new Date(next.date.getTime() + 24*60*60*1000));
                    return;
                }
            }

            // Otherwise, use today's filtered times (already excludes past times & cutoff)
            setCheckInOptions(filtered);
            const earlySet = new Set(earlyDropOffTimeRequired ? (earlyDropOffTimesByWeekday[weekday] || []) : []);
            const afterSet = new Set(afterHoursDropOffTimeRequired ? (afterHoursDropOffTimesByWeekday[weekday] || []) : []);
            setCheckInDisplayOptions(filtered.map((timeValue) => {
                if (earlySet.has(timeValue)) return `${timeValue} ${t('early_dropoff_fee_may_apply_suffix')}`;
                if (afterSet.has(timeValue)) return `${timeValue} ${t('after_hours_dropoff_fee_may_apply_suffix')}`;
                return timeValue;
            }));
            setCheckInWindow(prev => (prev && filtered.includes(prev) ? prev : (filtered[0] ?? '')));
        })();
    }, [
        checkInDate,
        checkInTimeRequired,
        checkInTimesByWeekday,
        earlyDropOffTimeRequired,
        earlyDropOffTimesByWeekday,
        afterHoursDropOffTimeRequired,
        afterHoursDropOffTimesByWeekday,
        bizTZ,
        sameDayCheckInCutoff,
        refreshCheckInOptions, // safe; it's stable
        findNextCheckInDate,
        t
    ]);

    // Re-run validations separately (won't reset the user's time selection)
    useEffect(() => {
        setSuppressValidations(false);
        revalidateAll();
    }, [revalidateAll, checkInDate]);

    useEffect(() => {
        setSuppressValidations(false);
        refreshCheckOutOptions();
        revalidateAll();
    }, [checkOutDate, refreshCheckOutOptions, revalidateAll]);

    useEffect(() => {
        setSuppressValidations(false);
        revalidateAll();
    }, [selectedPetIds, revalidateAll]);

    useEffect(() => {
        if (
            selectedMembershipPurchaseId
            && !boardingUsableMembershipPurchases.some((purchase) => purchase.id === selectedMembershipPurchaseId)
        ) {
            setSelectedMembershipPurchaseId('');
        }

        if (
            selectedMembershipPlanId
            && !(
                boardingOnlinePaymentsEnabled
                && boardingPurchasableMembershipPlans.some((plan) => plan.id === selectedMembershipPlanId)
            )
        ) {
            setSelectedMembershipPlanId('');
        }
    }, [
        boardingOnlinePaymentsEnabled,
        boardingPurchasableMembershipPlans,
        boardingUsableMembershipPurchases,
        selectedMembershipPlanId,
        selectedMembershipPurchaseId,
    ]);

    useEffect(() => {
        invalidatePaymentState();
    }, [
        checkInDate,
        checkOutDate,
        checkInWindow,
        checkOutWindow,
        groomingSelections,
        invalidatePaymentState,
        selectedBoardingAddOns,
        selectedMembershipPlanId,
        selectedMembershipPurchaseId,
        selectedPetIds
    ]);

    useEffect(() => {
        if (
            !boardingPricingSettings
            || !hasBoardingPricingConfigured
            || !checkInDate
            || !checkOutDate
            || checkInDate >= checkOutDate
            || selectedPetIds.size === 0
        ) {
            setBoardingQuote(null);
            return;
        }

        const nights = nightsBetweenKeys(checkInDate, checkOutDate, bizTZ).length;
        setBoardingQuote(computeBoardingQuote({
            pricing: boardingPricingSettings,
            petCount: selectedPetIds.size,
            nightsBooked: nights,
            membershipCoveredUnits: membershipUnitsCovered,
            groomingSubtotalCents,
            boardingAddOnSubtotalCents,
            matchedCheckoutChargeWindow: matchedCheckoutWindow,
            matchedOddHourKinds,
            invoiceItemsById: invoiceItemMap,
            clientDiscountSettings,
            assignedClientDiscountRuleIds,
        }));
    }, [
        assignedClientDiscountRuleIds,
        boardingAddOnSubtotalCents,
        hasBoardingPricingConfigured,
        boardingPricingSettings,
        bizTZ,
        checkInDate,
        checkOutDate,
        clientDiscountSettings,
        groomingSubtotalCents,
        invoiceItemMap,
        matchedCheckoutWindow,
        matchedOddHourKinds,
        membershipUnitsCovered,
        selectedPetIds
    ]);

    /** =========================
     *  UI
     *  ========================= */
    return (
        <div className="min-h-screen bg-[color:var(--color-background)] px-4 py-6 text-[color:var(--color-foreground)]">
            <div className="w-full max-w-xl mx-auto space-y-6">
                {/* Back */}
                <button
                    onClick={() => router.push(`/${locale}/individualselectservice?businessId=${businessId}`)}
                    className="mb-2 text-sm text-[color:var(--color-accent)] underline hover:opacity-90"
                >
                    ← {t('back_to_select_service')}
                </button>

                {/* Heading */}
                {/* 🔷 Deposit gate */}
                {depositRequired && (
                    <div className="w-full max-w-xl mx-auto">
                        <div className="bg-gray-100/80 border border-gray-300 rounded-2xl p-4 shadow-sm">
                            <div className="text-base font-semibold mb-2">
                                {t('deposit_required_notice_title')}
                            </div>
                            <p className="text-sm text-gray-800 mb-3">
                                {t('deposit_required_notice_body')}
                            </p>
                            {(boardingQuote?.depositDueTodayCents || 0) > 0 ? (
                                <p className="text-sm font-semibold text-gray-900 mb-3">
                                    {t('deposit_required_amount_line', {
                                        amount: `$${((boardingQuote?.depositDueTodayCents || 0) / 100).toFixed(2)}`
                                    })}
                                </p>
                            ) : depositAmount.trim() !== '' ? (
                                <p className="text-sm font-semibold text-gray-900 mb-3">
                                    {t('deposit_required_amount_line', { amount: depositAmount })}
                                </p>
                            ) : null}
                            <label className="flex w-full items-center justify-between gap-3 rounded-xl border border-gray-300 bg-white px-3 py-3 text-sm font-semibold cursor-pointer">
                                <span>{t('deposit_required_confirm_yes')}</span>
                                <input
                                    type="checkbox"
                                    checked={depositAcknowledged}
                                    onChange={(e) => setDepositAcknowledged(e.target.checked)}
                                    className="h-5 w-5 cursor-pointer accent-[color:var(--color-accent)]"
                                    aria-label={t('deposit_required_confirm_yes')}
                                />
                            </label>
                        </div>
                    </div>
                )}

                <h1 className="text-3xl font-bold text-center text-[color:var(--color-accent)]">
                    {t('book_boarding_title')}
                    <br />
                    <span className="text-lg font-normal text-gray-600">{businessName}</span>
                </h1>

                {/* Form */}
                {/* Form (gated) */}
                <div className={`flex flex-col items-center space-y-6 ${formInteractionBlocked ? 'opacity-50 pointer-events-none select-none' : ''}`}>
                    {/* Check-In Date */}
                    <div className="flex flex-col items-center space-y-1 w-full">
                        <label className="font-semibold text-center text-sm">{t('select_checkin_date')}</label>
                        <DatePicker
                            selected={checkInDate}
                            onChange={(d: Date | null) => {
                                if (!d) return;
                                const key = ymdKey(d, bizTZ);
                                if (blackoutDates.has(key)) {
                                    alert(t('selected_date_is_blackout'));
                                    return;
                                }
                                blackoutAlertShownRef.current = false;

                                setCheckInDate(d);
                            }}
                            dateFormat="MM/dd/yyyy"
                            className="w-full max-w-xs border p-2 rounded text-sm text-center"
                            placeholderText={t('select_date_placeholder')}
                        />
                    </div>

                    {/* Check-In Time */}
                    {checkInTimeRequired && checkInOptions.length > 0 && (
                        <div className="flex flex-col items-center space-y-1 w-full">
                            <label className="font-semibold text-center text-sm">{t('select_checkin_time')}</label>
                            <select
                                className="w-full max-w-xs border p-2 rounded text-sm"
                                value={checkInWindow}
                                onChange={(e) => setCheckInWindow(e.target.value)}
                            >
                                {checkInOptions.map((opt, index) => (
                                    <option key={opt} value={opt}>{checkInDisplayOptions[index] || opt}</option>
                                ))}
                            </select>
                        </div>
                    )}

                    {/* Check-Out Date */}
                    <div className="flex flex-col items-center space-y-1 w-full">
                        <label className="font-semibold text-center text-sm">{t('select_checkout_date')}</label>
                        <DatePicker
                            selected={checkOutDate}
                            onChange={(d: Date | null) => {
                                if (!d) return;
                                const key = ymdKey(d, bizTZ);
                                if (blackoutDates.has(key)) {
                                    alert(t('selected_date_is_blackout'));
                                    return;
                                }
                                blackoutAlertShownRef.current = false;

                                setCheckOutDate(d);
                            }}
                            minDate={checkInDate || undefined}
                            dateFormat="MM/dd/yyyy"
                            className="w-full max-w-xs border p-2 rounded text-sm text-center"
                            placeholderText={t('select_date_placeholder')}
                        />
                    </div>

                    {/* Check-Out Time (labels include After Hours suffix, but value stays raw) */}
                    {checkOutTimeRequired && checkOutOptions.length > 0 && (
                        <div className="flex flex-col items-center space-y-1 w-full">
                            <label className="font-semibold text-center text-sm">{t('select_checkout_time')}</label>
                            <select
                                className="w-full max-w-xs border p-2 rounded text-sm"
                                value={checkOutWindow}
                                onChange={(e) => setCheckOutWindow(e.target.value)}
                            >
                                {checkOutOptions.map((opt, i) => (
                                    <option key={opt} value={opt}>
                                        {checkOutDisplayOptions[i] || opt}
                                    </option>
                                ))}
                            </select>
                        </div>
                    )}

                    {/* Pets */}
                    {!!pets.length && (
                        <div className="flex flex-col items-center space-y-2 w-full max-w-xs">
                            <label className="font-semibold text-center text-sm w-full">{t('select_pets')}</label>
                            <div className="flex flex-col space-y-2 w-full">
                                {pets.map((pet) => {
                                    const checked = selectedPetIds.has(pet.id);
                                    return (
                                        <label key={pet.id} className="flex items-center gap-2 text-sm">
                                            <input
                                                type="checkbox"
                                                checked={checked}
                                                onChange={(e) => {
                                                    const on = e.target.checked;
                                                    setSelectedPetIds(prev => {
                                                        const next = new Set(prev);
                                                        if (on) next.add(pet.id); else next.delete(pet.id);
                                                        return next;
                                                    });
                                                }}
                                            />
                                            <span>{pet.name}</span>
                                        </label>
                                    );
                                })}
                            </div>
                        </div>
                    )}

                    {/* Grooming add-ons */}
                    {groomingAvailableAsAddOn && (
                        <button
                            onClick={() => setShowGroomingModal(true)}
                            className="w-full max-w-xs py-3 rounded-lg text-white text-base font-semibold
                            bg-green-800 hover:bg-green-700 shadow-md ring-1 ring-black/10
                            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-600"
                        >
                            {t('select_grooming_addons')}
                        </button>
                    )}

                    {boardingAddOnServices.length > 0 && (
                        <button
                            onClick={() => setShowBoardingAddOnModal(true)}
                            className="w-full max-w-xs py-3 rounded-lg text-white text-base font-semibold
                            bg-[#2c4a30] hover:bg-[#244026] shadow-md ring-1 ring-black/10
                            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-600"
                        >
                            {t('select_boarding_addons')}
                        </button>
                    )}

                    {showBoardingMembershipSelector && (
                        <BoardingAndDaycareBookingMembershipSelector
                            service="boarding"
                            requiredUnits={membershipUnitsRequired}
                            purchases={membershipPurchases}
                            plans={membershipPlans}
                            selectedPurchaseId={selectedMembershipPurchaseId}
                            selectedPlanId={selectedMembershipPlanId}
                            onSelectPurchase={(purchaseId) => {
                                setSelectedMembershipPurchaseId(purchaseId);
                                if (purchaseId) setSelectedMembershipPlanId('');
                            }}
                            onSelectPlan={(planId) => {
                                setSelectedMembershipPlanId(planId);
                                if (planId) setSelectedMembershipPurchaseId('');
                            }}
                            buyDisabledReason={membershipPurchaseDisabledReason}
                        />
                    )}

                    {isProcessingPayment && !clientSecret && (
                        <div className="w-full max-w-xs text-center text-sm text-gray-600">
                            {t('processing_payment')}
                        </div>
                    )}

                    {boardingQuote && (
                        <div className="w-full max-w-xl border rounded-2xl bg-white shadow-sm p-4 space-y-3">
                            <div>
                                <h2 className="text-lg font-semibold text-[color:var(--color-accent)]">
                                    {t('pricing_summary_title')}
                                </h2>
                                <p className="text-xs text-gray-500 mt-1">
                                    {t('pricing_summary_body')}
                                </p>
                            </div>

                            <div className="space-y-2">
                                {boardingQuote.lines.map((line) => (
                                    <div key={line.key} className="flex items-center justify-between gap-4 text-sm">
                                        <span className={line.tone === 'discount' ? 'text-green-700' : ''}>
                                            {line.label}
                                        </span>
                                        <span className={`font-semibold ${
                                            line.tone === 'discount'
                                                ? 'text-green-700'
                                                : line.tone === 'deposit'
                                                    ? 'text-[color:var(--color-accent)]'
                                                    : 'text-gray-900'
                                        }`}>
                                            {line.amountCents < 0 ? '-' : ''}${(Math.abs(line.amountCents) / 100).toFixed(2)}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            <div className="border-t pt-3 space-y-2">
                                <div className="flex items-center justify-between text-sm font-semibold">
                                    <span>{t('estimated_total_label')}</span>
                                    <span>${(boardingQuote.estimatedTotalCents / 100).toFixed(2)}</span>
                                </div>
                                {membershipPurchaseTotalCents > 0 && (
                                    <div className="flex items-center justify-between text-sm font-semibold">
                                        <span>{t('membership_purchase_due_today_label')}</span>
                                        <span>${(membershipPurchaseTotalCents / 100).toFixed(2)}</span>
                                    </div>
                                )}
                                <div className="flex items-center justify-between text-sm font-semibold">
                                    <span>{membershipPurchaseTotalCents > 0 ? t('amount_due_today_label') : t('deposit_due_today_label')}</span>
                                    <span>${(amountDueTodayCents / 100).toFixed(2)}</span>
                                </div>
                                <div className="flex items-center justify-between text-sm font-semibold">
                                    <span>{t('remaining_balance_label')}</span>
                                    <span>${(boardingQuote.remainingBalanceCents / 100).toFixed(2)}</span>
                                </div>
                            </div>

                            {translatedQuoteNotes.length > 0 && (
                                <div className="space-y-2">
                                    {translatedQuoteNotes.map((note) => (
                                        <p key={note} className="text-xs text-gray-600">
                                            {note}
                                        </p>
                                    ))}
                                </div>
                            )}
                        </div>
                    )}

                    {clientSecret && paymentEstimateSummary && (
                        <Elements
                            key={clientSecret}
                            stripe={stripePromise}
                            options={{
                                clientSecret,
                                appearance: { theme: 'stripe' },
                            }}
                        >
                            <BoardingStripeCheckoutForm
                                amountCents={paymentAmount}
                                breakdown={paymentBreakdown}
                                estimateSummary={paymentEstimateSummary}
                                onSuccess={async () => {
                                    setClientSecret(null);
                                    await handleSubmit();
                                }}
                                onCancel={() => {
                                    invalidatePaymentState();
                                }}
                            />
                        </Elements>
                    )}

                    {/* Submit */}
                    <button
                        onClick={async () => {
                            if (selectedMembershipPlanId && !boardingOnlinePaymentsEnabled) {
                                alert(t('membership_purchase_requires_boarding_pay_at_booking'));
                                return;
                            }

                            const needsStripePayment =
                                boardingOnlinePaymentsEnabled
                                && (!!selectedMembershipPlanId || (amountDueTodayCents > 0));

                            if (needsStripePayment) {
                                await startStripePaymentFlow();
                            } else {
                                await handleSubmit();
                            }
                        }}
                        disabled={isSubmitDisabled || isProcessingPayment}
                        className={`w-full max-w-xs text-white py-3 rounded transition text-sm ${(isSubmitDisabled || isProcessingPayment) ? 'bg-gray-400 cursor-not-allowed' : 'bg-green-800 hover:bg-green-700'}`}
                    >
                        {isSubmitting ? t('saving') : t('submit_boarding_reservation')}
                    </button>
                </div>
            </div>

            {/* Grooming Modal */}
            {showGroomingModal && (
                <GroomingModal
                    services={groomingServices}
                    pets={pets.filter(p => selectedPetIds.has(p.id))}
                    selections={groomingSelections}
                    onClose={() => setShowGroomingModal(false)}
                    onSave={(sel) => { setGroomingSelections(sel); setShowGroomingModal(false); }}
                    t={t}
                />
            )}

            {showBoardingAddOnModal && (
                <BoardingAddOnModal
                    services={boardingAddOnServices}
                    pricesByName={boardingAddOnPriceCentsByName}
                    selectedServices={selectedBoardingAddOns}
                    onClose={() => setShowBoardingAddOnModal(false)}
                    onSave={(services) => {
                        setSelectedBoardingAddOns(services);
                        setShowBoardingAddOnModal(false);
                    }}
                    t={t}
                />
            )}
        </div>
    );

    /** =========================
 *  Submit (mirrors iOS) — waiver removed
 *  ========================= */
    async function handleSubmit() {
        if (gatingActive) return;
        if (!userId || !businessId || !checkInDate || !checkOutDate) return;

        const selectedPurchaseForUsage = selectedMembershipPurchase;
        const selectedPlanForPurchase = selectedMembershipPlanForPurchase;

        // Block check-in on blackout date
        if (blackoutDates.has(ymdKey(checkInDate, bizTZ))) {
            alert(t('selected_date_is_blackout'));
            return;
        }

        // Block check-out on blackout date
        if (blackoutDates.has(ymdKey(checkOutDate, bizTZ))) {
            alert(t('selected_date_is_blackout'));
            return;
        }

        if (checkInDate >= checkOutDate) return;
        if (selectedPetIds.size === 0) return;
        if (checkInTimeRequired && !checkInWindow) return;
        if (checkOutTimeRequired && !checkOutWindow) return;
        if (overlapDetected) return;
        if (capacityBlockingNights.length) return;

        if (selectedMembershipPurchaseId && !selectedPurchaseForUsage) {
            alert(t('membership_selected_purchase_unavailable'));
            return;
        }

        if (selectedPurchaseForUsage && membershipUnitsCovered <= 0) {
            alert(t('membership_balance_insufficient_boarding'));
            return;
        }

        if (selectedPurchaseForUsage && !membershipPurchaseCanCover(selectedPurchaseForUsage, 'boarding', membershipUnitsRequired)) {
            alert(t('membership_balance_insufficient_boarding'));
            return;
        }

        if (selectedMembershipPlanId && !selectedPlanForPurchase) {
            alert(t('membership_selected_plan_unavailable'));
            return;
        }

        if (selectedMembershipPlanId && !paymentIntentId) {
            alert(
                boardingOnlinePaymentsEnabled
                    ? t('membership_purchase_complete_payment_first')
                    : t('membership_purchase_requires_boarding_pay_at_booking')
            );
            return;
        }

        setIsSubmitting(true);
        setSuppressValidations(true);

        try {
            const reservationId = pendingReservationId || crypto.randomUUID();

            const cinKey = ymdKey(checkInDate, bizTZ);
            const coutKey = ymdKey(checkOutDate, bizTZ);
            const nightKeys = nightsBetweenKeys(checkInDate, checkOutDate, bizTZ);
            const nights = nightKeys.length;

            const statusToWrite: BoardingReservationWrite['status'] =
                requireBoardingReservationApproval ? 'pending' : 'approved';
            const petStatuses = [...selectedPetIds].reduce<Record<string, string>>((acc, pid) => {
                acc[pid] = statusToWrite;
                return acc;
            }, {});

            const payload: BoardingReservationWrite = {
                userId,
                businessId,
                petIds: [...selectedPetIds],
                petStatuses,
                status: statusToWrite,
                realtimeKey: reservationId,
                checkInDate: Timestamp.fromDate(checkInDate),
                checkOutDate: Timestamp.fromDate(checkOutDate),
                checkInDateBusinessTZ: cinKey,
                checkOutDateBusinessTZ: coutKey,
                nights
            };
            if (checkInTimeRequired) payload.checkInWindow = checkInWindow;
            if (checkOutTimeRequired) payload.checkOutWindow = checkOutWindow; // raw time stored
            if (Object.keys(groomingSelections).length) payload.groomingAddOns = groomingSelections;
            if (selectedBoardingAddOns.length) payload.boardingAddOns = selectedBoardingAddOns;
            if (paymentIntentId) payload.paymentIntentId = paymentIntentId;
            if (paymentAmount && paymentAmount > 0) payload.paymentTotalCents = paymentAmount;
            if (typeof boardingQuote?.estimatedTotalCents === 'number') {
                payload.estimatedTotalCents = paymentEstimateSummary?.estimatedTotalCents ?? boardingQuote.estimatedTotalCents;
                payload.depositDueTodayCents = paymentEstimateSummary?.depositDueTodayCents ?? boardingQuote.depositDueTodayCents;
                payload.remainingBalanceCents = paymentEstimateSummary?.remainingBalanceCents ?? boardingQuote.remainingBalanceCents;
            }
            if (paymentBreakdown.lines.length > 0) payload.itemizedLineItems = paymentBreakdown.lines;
            if (selectedPurchaseForUsage?.id || (selectedPlanForPurchase && pendingReservationId)) {
                payload.membershipPurchaseId = selectedPurchaseForUsage?.id || pendingReservationId || undefined;
                payload.membershipPlanId = selectedPurchaseForUsage?.planId || selectedPlanForPurchase?.id;
                payload.membershipPlanName = selectedPurchaseForUsage?.planName || selectedPlanForPurchase?.name;
                payload.membershipUnitsApplied = membershipUnitsCovered;
                payload.membershipPurchasedDuringBooking = !!selectedPlanForPurchase;
            }

            // 1) Firestore write
            await setDoc(doc(db, 'boardingReservations', reservationId), payload);

            // 2) Optional RTDB mirroring per pet
            if (clientWritesRTDB) {
                const writes = [...selectedPetIds].map(async (petId) => {
                    const pet = pets.find(p => p.id === petId);
                    if (!pet) return;

                    const rtdbKey = `${reservationId}-${petId}`;
                    const base: Record<string, unknown> = {
                        dogName: pet.name,
                        ownerName,
                        type: 'Boarding',
                        checkInDate: cinKey,
                        checkOutDate: coutKey,
                        nights,
                        status: statusToWrite,
                        userId,
                        realtimeKey: reservationId
                    };
                    if (checkInTimeRequired) base.checkInWindow = checkInWindow;
                    if (checkOutTimeRequired) base.checkOutWindow = checkOutWindow;

                    const perPet = groomingSelections[petId] || [];
                    if (perPet.length) base.groomingAddOns = perPet;
                    if (selectedBoardingAddOns.length) base.boardingAddOns = selectedBoardingAddOns;

                    if (pet.medications) base.medications = pet.medications;
                    if (pet.medicationDetails) base.medicationDetails = pet.medicationDetails;
                    if (pet.spayedNeutered) base.spayedNeutered = pet.spayedNeutered;
                    if (paymentIntentId) base.paymentIntentId = paymentIntentId;
                    if (paymentAmount && paymentAmount > 0) base.paymentTotalCents = paymentAmount;
                    if (typeof boardingQuote?.estimatedTotalCents === 'number') {
                        base.estimatedTotalCents = paymentEstimateSummary?.estimatedTotalCents ?? boardingQuote.estimatedTotalCents;
                        base.depositDueTodayCents = paymentEstimateSummary?.depositDueTodayCents ?? boardingQuote.depositDueTodayCents;
                        base.remainingBalanceCents = paymentEstimateSummary?.remainingBalanceCents ?? boardingQuote.remainingBalanceCents;
                    }
                    if (paymentBreakdown.lines.length > 0) base.itemizedLineItems = paymentBreakdown.lines;
                    if (selectedPurchaseForUsage?.id || (selectedPlanForPurchase && pendingReservationId)) {
                        base.membershipPurchaseId = selectedPurchaseForUsage?.id || pendingReservationId || undefined;
                        base.membershipPlanId = selectedPurchaseForUsage?.planId || selectedPlanForPurchase?.id;
                        base.membershipPlanName = selectedPurchaseForUsage?.planName || selectedPlanForPurchase?.name;
                        base.membershipUnitsApplied = membershipUnitsCovered;
                        base.membershipPurchasedDuringBooking = !!selectedPlanForPurchase;
                    }

                    await rtdbSet(ref(rtdb, `upcomingReservations/${businessId}/${rtdbKey}`), base);
                });
                await Promise.all(writes);
            }

            let membershipUpdateError = false;
            let membershipUpdateMessage = '';
            let purchaseIdToConsume = selectedPurchaseForUsage?.id || null;

            if (selectedPlanForPurchase && pendingReservationId) {
                try {
                    await createMembershipPurchaseForClient({
                        db,
                        businessId,
                        clientUserId: userId,
                        plan: selectedPlanForPurchase,
                        source: 'boardingBooking',
                        createdBy: auth.currentUser?.email || auth.currentUser?.uid || userId,
                        purchaseIdOverride: pendingReservationId,
                        linkedReservationId: reservationId,
                        note: `Purchased during boarding booking for reservation ${reservationId}.`,
                    });
                    purchaseIdToConsume = pendingReservationId;
                } catch (error) {
                    console.error('❌ Membership purchase creation failed after boarding submit:', error);
                    membershipUpdateError = true;
                    membershipUpdateMessage = t('membership_purchase_save_failed_after_submit');
                }
            }

            if (!membershipUpdateError && purchaseIdToConsume && membershipUnitsCovered > 0) {
                try {
                    await consumeMembershipPurchaseForClient({
                        db,
                        businessId,
                        clientUserId: userId,
                        purchaseId: purchaseIdToConsume,
                        service: 'boarding',
                        quantity: membershipUnitsCovered,
                        createdBy: auth.currentUser?.email || auth.currentUser?.uid || userId,
                        reservationId,
                        note: `Applied to boarding reservation ${reservationId}.`,
                    });
                } catch (error) {
                    console.error('❌ Membership consumption failed after boarding submit:', error);
                    membershipUpdateError = true;
                    membershipUpdateMessage = t('membership_balance_update_failed_after_submit');
                }
            }

            setIsSubmitting(false);
            setPendingReservationId(null);
            setGroomingSelections({});
            setSelectedBoardingAddOns([]);
            setSelectedMembershipPurchaseId('');
            setSelectedMembershipPlanId('');
            invalidatePaymentState();
            if (membershipUpdateError) {
                alert(membershipUpdateMessage);
            } else {
                alert(t('reservation_submitted'));
            }
            router.push(`/${locale}/individualupcomingappointments`);
        } catch (e) {
            console.error('❌ Submit failed:', e);
            setIsSubmitting(false);
            setSuppressValidations(false);
            alert(t('error_submitting_reservation'));
        }
    }
}

/** =========================
 *  Grooming Modal (per-pet toggles)
 *  ========================= */
function GroomingModal(props: {
    services: string[];
    pets: Pet[];
    selections: GroomingSelections;
    onSave: (sel: GroomingSelections) => void;
    onClose: () => void;
    t: ReturnType<typeof useTranslations>;
}) {
    const { services, pets, selections, onSave, onClose, t } = props;
    const [localSel, setLocalSel] = useState<GroomingSelections>(() => ({ ...selections }));

    const toggle = (petId: string, service: string, on: boolean) => {
        setLocalSel(prev => {
            const next = { ...prev };
            const arr = new Set(next[petId] || []);
            if (on) arr.add(service); else arr.delete(service);
            next[petId] = Array.from(arr);
            if (next[petId].length === 0) delete next[petId];
            return next;
        });
    };

    return (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center">
            <div className="bg-white w-full max-w-lg rounded-xl shadow-md p-0 flex flex-col max-h[85vh]">
                {/* Header */}
                <div className="flex items-center justify-between px-4 py-3 border-b">
                    <h3 className="text-lg font-semibold text-[color:var(--color-accent)]">
                        {t('grooming_addons_title')}
                    </h3>
                    <button
                        onClick={onClose}
                        className="text-sm px-3 py-1 rounded bg-gray-100 hover:bg-gray-200"
                    >
                        {t('cancel_button')}
                    </button>
                </div>

                {/* Scrollable content */}
                <div className="flex-1 overflow-auto p-4 space-y-4">
                    {pets.map(pet => (
                        <div key={pet.id} className="border rounded p-3">
                            <div className="font-medium mb-2">
                                {t('grooming_for_pet', { name: pet.name })}
                            </div>
                            {services.length === 0 ? (
                                <div className="text-sm text-gray-500">{t('no_services_available')}</div>
                            ) : (
                                <div className="grid grid-cols-1 gap-2">
                                    {services.map(svc => {
                                        const on = (localSel[pet.id] || []).includes(svc);
                                        return (
                                            <label key={`${pet.id}-${svc}`} className="flex items-center gap-2 text-sm">
                                                <input
                                                    type="checkbox"
                                                    checked={on}
                                                    onChange={(e) => toggle(pet.id, svc, e.target.checked)}
                                                />
                                                <span>{svc}</span>
                                            </label>
                                        );
                                    })}
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Footer */}
                <div className="sticky bottom-0 bg-white/95 backdrop-blur px-4 py-3 border-t">
                    <button
                        onClick={() => onSave(localSel)}
                        className="w-full py-3 rounded-lg text-white text-base font-semibold
                   bg-green-800 hover:bg-green-700 shadow-md
                   focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-600"
                    >
                        {t('done_button')}
                    </button>
                </div>
            </div>
        </div>
    );
}

function BoardingAddOnModal(props: {
    services: string[];
    pricesByName: Record<string, number>;
    selectedServices: string[];
    onSave: (services: string[]) => void;
    onClose: () => void;
    t: ReturnType<typeof useTranslations>;
}) {
    const { services, pricesByName, selectedServices, onSave, onClose, t } = props;
    const [localSelected, setLocalSelected] = useState<string[]>(selectedServices);

    const toggle = (service: string, checked: boolean) => {
        setLocalSelected((prev) => {
            if (checked) return Array.from(new Set([...prev, service]));
            return prev.filter((value) => value !== service);
        });
    };

    return (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center">
            <div className="bg-white w-full max-w-lg rounded-xl shadow-md p-0 flex flex-col max-h-[85vh]">
                <div className="flex items-center justify-between px-4 py-3 border-b">
                    <h3 className="text-lg font-semibold text-[color:var(--color-accent)]">
                        {t('boarding_addons_title')}
                    </h3>
                    <button
                        onClick={onClose}
                        className="text-sm px-3 py-1 rounded bg-gray-100 hover:bg-gray-200"
                    >
                        {t('cancel_button')}
                    </button>
                </div>

                <div className="flex-1 overflow-auto p-4 space-y-3">
                    {services.length === 0 ? (
                        <div className="text-sm text-gray-500">{t('no_boarding_addons_available')}</div>
                    ) : (
                        services.map((service) => {
                            const checked = localSelected.includes(service);
                            const priceCents = pricesByName[service];
                            return (
                                <label key={service} className="flex items-center justify-between gap-3 border rounded p-3 text-sm">
                                    <span className="flex items-center gap-2">
                                        <input
                                            type="checkbox"
                                            checked={checked}
                                            onChange={(e) => toggle(service, e.target.checked)}
                                        />
                                        <span>{service}</span>
                                    </span>
                                    <span className="font-semibold text-gray-700">
                                        {typeof priceCents === 'number' ? `$${(priceCents / 100).toFixed(2)}` : ''}
                                    </span>
                                </label>
                            );
                        })
                    )}
                </div>

                <div className="sticky bottom-0 bg-white/95 backdrop-blur px-4 py-3 border-t">
                    <button
                        onClick={() => onSave(localSelected)}
                        className="w-full py-3 rounded-lg text-white text-base font-semibold
                   bg-green-800 hover:bg-green-700 shadow-md
                   focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-600"
                    >
                        {t('done_button')}
                    </button>
                </div>
            </div>
        </div>
    );
}

function BoardingStripeCheckoutForm({
    amountCents,
    breakdown,
    estimateSummary,
    onSuccess,
    onCancel,
}: {
    amountCents: number | null;
    breakdown: PaymentBreakdown;
    estimateSummary: {
        estimatedTotalCents: number;
        depositDueTodayCents: number;
        remainingBalanceCents: number;
        membershipPurchaseTotalCents: number;
    };
    onSuccess: () => void;
    onCancel: () => void;
}) {
    const t = useTranslations('individualBookBoarding');
    const stripe = useStripe();
    const elements = useElements();
    const [processing, setProcessing] = useState(false);

    const handleSubmit = async () => {
        if (!stripe || !elements) return;

        setProcessing(true);

        const { error, paymentIntent } = await stripe.confirmPayment({
            elements,
            redirect: 'if_required',
        });

        if (error) {
            alert(error.message);
            setProcessing(false);
            return;
        }

        if (paymentIntent?.status === 'succeeded') {
            onSuccess();
        }

        setProcessing(false);
    };

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 w-full max-w-md space-y-4">
                <h3 className="text-lg font-semibold">{t('complete_payment_title')}</h3>

                <div className="space-y-1 text-sm text-gray-700">
                    <div className="flex items-center justify-between gap-3 font-semibold">
                        <span>{t('payment_modal_stay_total')}</span>
                        <span>${(estimateSummary.estimatedTotalCents / 100).toFixed(2)}</span>
                    </div>
                    <div className="flex items-center justify-between gap-3 font-semibold">
                        <span>{t('payment_modal_due_today')}</span>
                        <span>${(((amountCents ?? 0)) / 100).toFixed(2)}</span>
                    </div>
                    <div className="flex items-center justify-between gap-3 font-semibold">
                        <span>{t('payment_modal_remaining_balance')}</span>
                        <span>${(estimateSummary.remainingBalanceCents / 100).toFixed(2)}</span>
                    </div>
                </div>

                {breakdown.lines.length > 0 && (
                    <div className="border rounded p-3 bg-gray-50 text-sm">
                        <div className="font-semibold mb-2">{t('invoice_summary_title')}</div>
                        <div className="space-y-1">
                            {breakdown.lines.map((line) => (
                                <div key={line.key} className="flex items-center justify-between gap-2">
                                    <span>{line.label} x{line.quantity}</span>
                                    <span>${(line.totalCents / 100).toFixed(2)}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                <PaymentElement />

                <div className="flex justify-end gap-2 pt-2">
                    <button
                        onClick={onCancel}
                        className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300"
                        disabled={processing}
                    >
                        {t('cancel_button')}
                    </button>
                    <button
                        onClick={handleSubmit}
                        className="px-4 py-2 rounded bg-green-800 text-white hover:bg-green-700 disabled:opacity-50"
                        disabled={!stripe || processing}
                    >
                        {processing ? t('processing_payment') : t('pay_now_button')}
                    </button>
                </div>
            </div>
        </div>
    );
}
