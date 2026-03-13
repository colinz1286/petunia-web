'use client';

import { useEffect, useState } from 'react';

import {
  buildVisibleGroomingOptions,
  isBaseBathService,
  normalizeBathSelectionsForVisiblePets,
  type GroomingSelectionMap,
  type VisibleGroomingOption,
} from '@/lib/groomingBathOptions';

type Translator = (key: string, values?: Record<string, string | number>) => string;

type DaycarePetSummary = {
  id: string;
  name: string;
};

type DaycareGroomingFlowProps = {
  hasPendingDraft: boolean;
  showPrompt: boolean;
  showModal: boolean;
  services: string[];
  servicePriceCentsByName: Record<string, number>;
  preferredBathServiceByPetId: Record<string, string>;
  pets: DaycarePetSummary[];
  selections: GroomingSelectionMap;
  t: Translator;
  onStartGrooming: () => void;
  onSkipGrooming: () => void;
  onCloseModal: () => void;
  onSaveSelections: (selections: GroomingSelectionMap) => void;
};

export default function DaycareGroomingFlow({
  hasPendingDraft,
  showPrompt,
  showModal,
  services,
  servicePriceCentsByName,
  preferredBathServiceByPetId,
  pets,
  selections,
  t,
  onStartGrooming,
  onSkipGrooming,
  onCloseModal,
  onSaveSelections,
}: DaycareGroomingFlowProps) {
  if (!hasPendingDraft) return null;

  return (
    <>
      {showPrompt && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 shadow-md max-w-sm w-full">
            <p className="text-sm mb-4">{t('grooming_prompt_message')}</p>
            <div className="flex justify-end gap-3">
              <button
                onClick={onStartGrooming}
                className="bg-green-700 hover:bg-green-600 text-white px-4 py-2 rounded text-sm"
              >
                {t('yes')}
              </button>
              <button
                onClick={onSkipGrooming}
                className="bg-gray-400 hover:bg-gray-300 text-black px-4 py-2 rounded text-sm"
              >
                {t('no')}
              </button>
            </div>
          </div>
        </div>
      )}

      {showModal && (
        <DaycareGroomingModal
          services={services}
          servicePriceCentsByName={servicePriceCentsByName}
          preferredBathServiceByPetId={preferredBathServiceByPetId}
          pets={pets}
          selections={selections}
          onClose={onCloseModal}
          onSave={onSaveSelections}
          t={t}
        />
      )}
    </>
  );
}

function DaycareGroomingModal(props: {
  services: string[];
  servicePriceCentsByName: Record<string, number>;
  preferredBathServiceByPetId: Record<string, string>;
  pets: DaycarePetSummary[];
  selections: GroomingSelectionMap;
  onSave: (selections: GroomingSelectionMap) => void;
  onClose: () => void;
  t: Translator;
}) {
  const {
    services,
    servicePriceCentsByName,
    preferredBathServiceByPetId,
    pets,
    selections,
    onSave,
    onClose,
    t,
  } = props;
  const [localSelections, setLocalSelections] = useState<GroomingSelectionMap>(() => ({ ...selections }));

  useEffect(() => {
    setLocalSelections((prev) => normalizeBathSelectionsForVisiblePets({
      selections: prev,
      petIds: pets.map((pet) => pet.id),
      preferredBathServiceByPetId,
    }));
  }, [pets, preferredBathServiceByPetId]);

  const toggleSelection = (
    petId: string,
    option: VisibleGroomingOption,
    isSelected: boolean
  ) => {
    setLocalSelections((prev) => {
      const next = { ...prev };
      const nextSelections = new Set(next[petId] || []);

      if (option.kind === 'collapsedBath' || isBaseBathService(option.value)) {
        Array.from(nextSelections).forEach((service) => {
          if (isBaseBathService(service)) {
            nextSelections.delete(service);
          }
        });
      }

      if (isSelected) {
        nextSelections.add(option.value);
      } else {
        nextSelections.delete(option.value);
      }

      if (nextSelections.size > 0) {
        next[petId] = Array.from(nextSelections);
      } else {
        delete next[petId];
      }

      return next;
    });
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center">
      <div className="bg-white w-full max-w-lg rounded-xl shadow-md p-0 flex flex-col max-h-[85vh]">
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

        <div className="flex-1 overflow-auto p-4 space-y-4">
          {pets.map((pet) => (
            <div key={pet.id} className="border rounded p-3">
              <div className="font-medium mb-2">
                {t('grooming_for_pet', { name: pet.name })}
              </div>
              {services.length === 0 ? (
                <div className="text-sm text-gray-500">{t('no_services_available')}</div>
              ) : (
                <div className="grid grid-cols-1 gap-2">
                  {buildVisibleGroomingOptions({
                    services,
                    pricesByName: servicePriceCentsByName,
                    preferredBathService: preferredBathServiceByPetId[pet.id],
                  }).map((option) => {
                    const isSelected = (localSelections[pet.id] || []).some((service) => (
                      option.kind === 'collapsedBath'
                        ? isBaseBathService(service)
                        : service === option.value
                    ));
                    const priceCents = option.priceCents;

                    return (
                      <label key={`${pet.id}-${option.key}`} className="flex items-center gap-2 text-sm">
                        <input
                          type="checkbox"
                          checked={isSelected}
                          onChange={(event) => {
                            toggleSelection(pet.id, option, event.target.checked);
                          }}
                        />
                        <span>
                          {option.label}
                          {typeof priceCents === 'number' ? ` - $${(priceCents / 100).toFixed(2)}` : ''}
                        </span>
                      </label>
                    );
                  })}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="sticky bottom-0 bg-white/95 backdrop-blur px-4 py-3 border-t">
          <button
            onClick={() => onSave(localSelections)}
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
