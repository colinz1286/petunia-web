'use client';

import { Timestamp, doc, setDoc } from 'firebase/firestore';
import { db } from '@/utils/firebase'; // Adjust if you initialize firebase elsewhere
import { useTranslations } from 'next-intl';

type WaiverModalProps = {
  isOpen: boolean;
  onClose: () => void;
  businessId: string;
  userId: string;
  onAgreementSuccess: () => void;
};

export default function WaiverModal({
  isOpen,
  onClose,
  businessId,
  userId,
  onAgreementSuccess,
}: WaiverModalProps) {
  const t = useTranslations('waiverModal');

  if (!isOpen) return null;

  const handleAgree = async () => {
    try {
      await setDoc(
        doc(db, 'userApprovedBusinesses', businessId, 'clients', userId),
        { waiverSignedAt: Timestamp.now() },
        { merge: true }
      );
      onAgreementSuccess();
    } catch (err) {
      console.error('❌ Failed to record waiver agreement:', err);
      alert(t('waiver_agreement_failed'));
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded shadow-md max-w-md w-full space-y-4">
        <h2 className="text-lg font-semibold text-center text-[color:var(--color-accent)]">
          {t('waiver_required_title')}
        </h2>
        <p className="text-sm text-gray-700 whitespace-pre-line">
          {t('waiver_required_message')}
        </p>
        <div className="flex justify-end gap-3">
          <button
            onClick={handleAgree}
            className="bg-green-700 hover:bg-green-600 text-white px-4 py-2 rounded text-sm"
          >
            {t('agree_button')}
          </button>
          <button
            onClick={onClose}
            className="bg-gray-300 hover:bg-gray-200 text-black px-4 py-2 rounded text-sm"
          >
            {t('cancel_button')}
          </button>
        </div>
      </div>
    </div>
  );
}
