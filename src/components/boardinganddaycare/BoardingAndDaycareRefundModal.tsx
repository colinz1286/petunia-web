'use client';

import { useState } from 'react';
import { httpsCallable } from 'firebase/functions';
import { functions, auth } from '@/lib/firebaseClient';

interface RefundablePayment {
    id: string;
    amount: number;
    totalRefundedCents: number;
}

interface Props {
    payment: RefundablePayment;
    onClose: () => void;
    onOptimisticRefund: (id: string) => void;
}

export default function BoardingAndDaycareRefundModal({
    payment,
    onClose,
    onOptimisticRefund
}: Props) {

    const [amount, setAmount] = useState('');
    const [reason, setReason] = useState<'requested_by_customer' | 'duplicate' | 'fraudulent' | ''>('');
    const [note, setNote] = useState('');
    const [isProcessing, setIsProcessing] = useState(false);

    const refundableAmount = payment.amount - payment.totalRefundedCents;

    const handleSubmit = async () => {
        if (!reason) return;

        setIsProcessing(true);

        try {
            const callable = httpsCallable(functions, 'issueRefund');

            let amountCents: number | null = null;

            if (!amount || Number(amount) <= 0) {
                // Blank = full refund (let backend interpret null as full if supported, else send full)
                amountCents = refundableAmount;
            } else {
                amountCents = Math.round(Number(amount) * 100);
            }

            await callable({
                paymentIntentId: payment.id,
                amountCents,
                reason,
                staffId: auth.currentUser?.uid ?? '',
                note
            });

            onOptimisticRefund(payment.id);
            onClose();

        } catch (err: unknown) {
            if (err instanceof Error) {
                alert(err.message);
            } else {
                alert('An unexpected error occurred.');
            }
        }

        setIsProcessing(false);
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center">

            <div className="bg-white p-6 rounded w-full max-w-md space-y-4">

                <h2 className="text-lg font-bold">Issue Refund</h2>

                <div className="text-sm">
                    Refundable: ${(refundableAmount / 100).toFixed(2)}
                </div>

                <div className="space-y-1">
                    <label className="text-sm font-medium text-gray-700">
                        Refund Amount
                    </label>

                    <input
                        type="number"
                        inputMode="decimal"
                        step="0.01"
                        min="0"
                        max={(refundableAmount / 100).toFixed(2)}
                        placeholder={`Max: ${(refundableAmount / 100).toFixed(2)}`}
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        className="w-full border p-2 rounded"
                    />

                    <p className="text-xs text-gray-500">
                        Leave blank to refund the full remaining amount.
                    </p>
                </div>

                <select
                    value={reason}
                    onChange={(e) =>
                        setReason(
                            e.target.value as 'requested_by_customer' | 'duplicate' | 'fraudulent' | ''
                        )
                    }
                    className="w-full border p-2 rounded"
                >
                    <option value="">Select Refund Reason</option>
                    <option value="requested_by_customer">Customer Requested</option>
                    <option value="duplicate">Duplicate Charge</option>
                    <option value="fraudulent">Fraudulent</option>
                </select>

                <input
                    placeholder="Internal Note (optional)"
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    className="w-full border p-2 rounded"
                />

                <div className="flex justify-end space-x-3 pt-4">
                    <button onClick={onClose} className="px-3 py-1 border rounded">
                        Cancel
                    </button>

                    <button
                        onClick={handleSubmit}
                        disabled={!reason || isProcessing}
                        className="px-3 py-1 bg-red-600 text-white rounded disabled:opacity-50"
                    >
                        {isProcessing ? 'Processing…' : 'Submit'}
                    </button>
                </div>
            </div>
        </div>
    );
}