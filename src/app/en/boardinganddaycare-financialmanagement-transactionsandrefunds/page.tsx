'use client';

import { useEffect, useState } from 'react';
import {
    collection,
    query,
    where,
    orderBy,
    limit,
    onSnapshot,
    getDocs
} from 'firebase/firestore';
import { db, auth } from '@/lib/firebaseClient';
import BoardingAndDaycareRefundModal from '../../../components/boardinganddaycare/BoardingAndDaycareRefundModal';

interface FinancialPaymentRow {
    id: string;

    // Canonical ledger fields
    amount: number;
    amountReceived: number;
    stripeFeeCents: number;
    stripeNetCents: number;

    // Existing refund fields
    totalRefundedCents: number;

    // Display / derived
    paymentStatus: string;
    reservationIds: string[];
    currency: string;
    createdAtStripe: unknown;

    // Client metadata
    userId: string;
    clientName: string;
}

export default function BoardingAndDaycareFinancialManagementTransactionsAndRefundsPage() {

    const [businessId, setBusinessId] = useState<string | null>(null);
    const [payments, setPayments] = useState<FinancialPaymentRow[]>([]);
    const [pendingRefundPaymentIds, setPendingRefundPaymentIds] = useState<Set<string>>(new Set());
    const [selectedPayment, setSelectedPayment] = useState<FinancialPaymentRow | null>(null);

    // --------------------------------------------------
    // 1️⃣ Resolve businessId (CRITICAL – matches iOS)
    // --------------------------------------------------
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(async (user) => {

            console.log('Auth user UID:', user?.uid);

            if (!user) {
                console.log('No authenticated user');
                return;
            }

            let resolvedBusinessId: string | null = null;

            // Try ownerId (singular)
            try {
                const r1 = await getDocs(
                    query(
                        collection(db, 'businesses'),
                        where('ownerId', '==', user.uid)
                    )
                );
                if (!r1.empty) {
                    resolvedBusinessId = r1.docs[0].id;
                }
            } catch { }

            // If not found, try ownerIds (array)
            if (!resolvedBusinessId) {
                try {
                    const r2 = await getDocs(
                        query(
                            collection(db, 'businesses'),
                            where('ownerIds', 'array-contains', user.uid)
                        )
                    );
                    if (!r2.empty) {
                        resolvedBusinessId = r2.docs[0].id;
                    }
                } catch { }
            }

            console.log('Resolved businessId:', resolvedBusinessId);

            if (resolvedBusinessId) {
                setBusinessId(resolvedBusinessId);
            } else {
                console.log('No business found for this user');
            }

        });

        return () => unsubscribe();
    }, []);

    // --------------------------------------------------
    // 2️⃣ Snapshot Listener (Canonical /payments)
    // --------------------------------------------------
    useEffect(() => {
        if (!businessId) return;

        console.log('Listening for payments with businessId:', businessId);

        const q = query(
            collection(db, 'payments'),
            where('businessId', '==', businessId),
            orderBy('createdAtStripe', 'desc'),
            limit(50)
        );

        const unsubscribe = onSnapshot(q, async (snapshot) => {

            console.log('Payments snapshot size:', snapshot.size);

            const rows: FinancialPaymentRow[] = [];

            for (const doc of snapshot.docs) {
                const data = doc.data();

                let clientName = 'Unknown Client';

                try {
                    const userDoc = await getDocs(
                        query(collection(db, 'users'), where('__name__', '==', data.userId))
                    );

                    if (!userDoc.empty) {
                        const userData = userDoc.docs[0].data();
                        clientName = `${userData.firstName ?? ''} ${userData.lastName ?? ''}`;
                    }
                } catch { }

                rows.push({
                    id: doc.id,

                    // Canonical ledger fields (force number casting)
                    amount: Number(data.amount ?? 0),
                    amountReceived: Number(data.amountReceived ?? data.amount ?? 0),
                    stripeFeeCents: Number(data.stripeFeeCents ?? 0),
                    stripeNetCents: Number(data.stripeNetCents ?? 0),
                    totalRefundedCents: Number(data.totalRefundedCents ?? 0),

                    paymentStatus: data.paymentStatus ?? 'paid',
                    reservationIds: data.reservationIds ?? [],
                    currency: data.currency ?? 'usd',
                    createdAtStripe: data.createdAtStripe,
                    userId: data.userId,
                    clientName
                });
            }

            setPayments(rows);

            // Clear optimistic pending when webhook reconciles
            rows.forEach(p => {
                if (p.paymentStatus === 'partially_refunded' || p.paymentStatus === 'refunded') {
                    setPendingRefundPaymentIds(prev => {
                        const copy = new Set(prev);
                        copy.delete(p.id);
                        return copy;
                    });
                }
            });
        });

        return () => unsubscribe();
    }, [businessId]);

    const formatCurrency = (cents: number, currency: string) =>
        new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: currency.toUpperCase()
        }).format(cents / 100);

    const totalGross = payments.reduce((sum, p) => sum + p.amount, 0);
    const totalRefunded = payments.reduce((sum, p) => sum + p.totalRefundedCents, 0);
    // Keep existing net semantics currently shown in UI
    const totalNet = totalGross - totalRefunded;

    // ✅ Canonical Stripe fields (matches iOS screen behavior)
    const totalStripeFees = payments.reduce((sum, p) => sum + (p.stripeFeeCents ?? 0), 0);
    const totalStripeNet = payments.reduce((sum, p) => sum + (p.stripeNetCents ?? 0), 0);
    const totalAmountReceived = payments.reduce((sum, p) => sum + (p.amountReceived ?? 0), 0);

    return (
        <div className="min-h-screen bg-[color:var(--color-background)] p-8">
            <div className="max-w-4xl mx-auto">

                <h1 className="text-3xl font-bold text-[color:var(--color-accent)] text-center mb-6">
                    Transactions & Refunds
                </h1>

                {/* Summary Bar */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                    <SummaryCard title="Gross" value={formatCurrency(totalGross, 'usd')} />
                    <SummaryCard title="Refunded" value={formatCurrency(totalRefunded, 'usd')} />
                    <SummaryCard title="Net" value={formatCurrency(totalNet, 'usd')} />

                    <SummaryCard title="Stripe Fee" value={formatCurrency(totalStripeFees, 'usd')} />
                    <SummaryCard title="Stripe Net" value={formatCurrency(totalStripeNet, 'usd')} />
                    <SummaryCard title="Received" value={formatCurrency(totalAmountReceived, 'usd')} />
                </div>

                <div className="space-y-6">
                    {payments.map(payment => {
                        const netRevenue = payment.amount - payment.totalRefundedCents;

                        const statusBadge = () => {
                            if (pendingRefundPaymentIds.has(payment.id)) {
                                return (
                                    <span className="text-xs font-semibold px-3 py-1 rounded bg-blue-100 text-blue-600">
                                        Refund Pending
                                    </span>
                                );
                            }

                            if (payment.paymentStatus === 'paid') {
                                return (
                                    <span className="text-xs font-semibold px-3 py-1 rounded bg-green-100 text-green-600">
                                        Paid
                                    </span>
                                );
                            }

                            if (payment.paymentStatus === 'partially_refunded') {
                                return (
                                    <span className="text-xs font-semibold px-3 py-1 rounded bg-orange-100 text-orange-600">
                                        Partially Refunded
                                    </span>
                                );
                            }

                            if (payment.paymentStatus === 'refunded') {
                                return (
                                    <span className="text-xs font-semibold px-3 py-1 rounded bg-red-100 text-red-600">
                                        Refunded
                                    </span>
                                );
                            }

                            return null;
                        };

                        return (
                            <div
                                key={payment.id}
                                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
                            >
                                <div className="flex justify-between items-start">
                                    <div>
                                        <div className="text-xl font-bold">
                                            {formatCurrency(payment.amount, payment.currency)}
                                        </div>

                                        <div className="mt-1 font-semibold text-lg">
                                            {payment.clientName}
                                        </div>

                                        <div className="text-sm text-gray-500 mt-1">
                                            {(() => {
                                                const ts = payment.createdAtStripe;

                                                if (
                                                    ts &&
                                                    typeof ts === 'object' &&
                                                    'toDate' in ts &&
                                                    typeof (ts as { toDate?: unknown }).toDate === 'function'
                                                ) {
                                                    return (ts as { toDate: () => Date }).toDate().toLocaleString();
                                                }

                                                return '';
                                            })()}
                                        </div>
                                    </div>

                                    {statusBadge()}
                                </div>

                                <div className="flex justify-between items-center mt-4 text-sm text-gray-500">
                                    <span>
                                        {payment.reservationIds.length}{' '}
                                        {payment.reservationIds.length === 1
                                            ? 'reservation'
                                            : 'reservations'}
                                    </span>
                                </div>

                                {payment.totalRefundedCents > 0 && (
                                    <div className="mt-3 text-sm font-medium text-orange-600">
                                        Refunded:{' '}
                                        {formatCurrency(
                                            payment.totalRefundedCents,
                                            payment.currency
                                        )}
                                    </div>
                                )}

                                <div className="mt-1 text-sm font-semibold text-[color:var(--color-accent)]">
                                    Net: {formatCurrency(netRevenue, payment.currency)}
                                </div>

                                <div className="mt-2 flex justify-between text-xs text-gray-500">
                                    <span>
                                        Stripe Fee: {formatCurrency(payment.stripeFeeCents ?? 0, payment.currency)}
                                    </span>
                                    <span>
                                        Received: {formatCurrency(payment.amountReceived ?? payment.amount, payment.currency)}
                                    </span>
                                </div>

                                <div className="mt-1 text-xs font-semibold text-[color:var(--color-accent)]">
                                    Stripe Net: {formatCurrency(payment.stripeNetCents ?? 0, payment.currency)}
                                </div>

                                {payment.amount > payment.totalRefundedCents && (
                                    <button
                                        onClick={() => setSelectedPayment(payment)}
                                        className="mt-4 w-full bg-red-600 text-white py-2 rounded-lg text-sm font-semibold hover:bg-red-700 transition"
                                    >
                                        Issue Refund
                                    </button>
                                )}
                            </div>
                        );
                    })}
                </div>

                {selectedPayment && (
                    <BoardingAndDaycareRefundModal
                        payment={selectedPayment}
                        onClose={() => setSelectedPayment(null)}
                        onOptimisticRefund={(id: string) =>
                            setPendingRefundPaymentIds(prev => {
                                const copy = new Set(prev);
                                copy.add(id);
                                return copy;
                            })
                        }
                    />
                )}
            </div>
        </div>
    );
}

function SummaryCard({ title, value }: { title: string; value: string }) {
    return (
        <div className="bg-gray-100 p-4 rounded text-center">
            <div className="text-xs text-gray-500">{title}</div>
            <div className="font-bold text-[color:var(--color-accent)]">{value}</div>
        </div>
    );
}