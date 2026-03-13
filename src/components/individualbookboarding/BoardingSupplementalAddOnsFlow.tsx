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

type BoardingPetSummary = {
  id: string;
  name: string;
};

type BoardingSupplementalAddOnsFlowProps = {
  groomingAvailableAsAddOn: boolean;
  groomingServices: string[];
  groomingServicePriceCentsByName: Record<string, number>;
  preferredBathServiceByPetId: Record<string, string>;
  selectedPets: BoardingPetSummary[];
  groomingSelections: GroomingSelectionMap;
  showGroomingModal: boolean;
  onOpenGroomingModal: () => void;
  onCloseGroomingModal: () => void;
  onSaveGroomingSelections: (selections: GroomingSelectionMap) => void;
  boardingAddOnServices: string[];
  boardingAddOnPriceCentsByName: Record<string, number>;
  selectedBoardingAddOns: string[];
  showBoardingAddOnModal: boolean;
  onOpenBoardingAddOnModal: () => void;
  onCloseBoardingAddOnModal: () => void;
  onSaveBoardingAddOns: (services: string[]) => void;
  t: Translator;
};

export default function BoardingSupplementalAddOnsFlow({
  groomingAvailableAsAddOn,
  groomingServices,
  groomingServicePriceCentsByName,
  preferredBathServiceByPetId,
  selectedPets,
  groomingSelections,
  showGroomingModal,
  onOpenGroomingModal,
  onCloseGroomingModal,
  onSaveGroomingSelections,
  boardingAddOnServices,
  boardingAddOnPriceCentsByName,
  selectedBoardingAddOns,
  showBoardingAddOnModal,
  onOpenBoardingAddOnModal,
  onCloseBoardingAddOnModal,
  onSaveBoardingAddOns,
  t,
}: BoardingSupplementalAddOnsFlowProps) {
  return (
    <>
      {groomingAvailableAsAddOn && (
        <button
          onClick={onOpenGroomingModal}
          className="w-full max-w-xs py-3 rounded-lg text-white text-base font-semibold
                     bg-green-800 hover:bg-green-700 shadow-md ring-1 ring-black/10
                     focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-600"
        >
          {t('select_grooming_addons')}
        </button>
      )}

      {boardingAddOnServices.length > 0 && (
        <button
          onClick={onOpenBoardingAddOnModal}
          className="w-full max-w-xs py-3 rounded-lg text-white text-base font-semibold
                     bg-[#2c4a30] hover:bg-[#244026] shadow-md ring-1 ring-black/10
                     focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-600"
        >
          {t('select_boarding_addons')}
        </button>
      )}

      {showGroomingModal && (
        <BoardingGroomingModal
          services={groomingServices}
          servicePriceCentsByName={groomingServicePriceCentsByName}
          preferredBathServiceByPetId={preferredBathServiceByPetId}
          pets={selectedPets}
          selections={groomingSelections}
          onClose={onCloseGroomingModal}
          onSave={onSaveGroomingSelections}
          t={t}
        />
      )}

      {showBoardingAddOnModal && (
        <BoardingAddOnModal
          services={boardingAddOnServices}
          pricesByName={boardingAddOnPriceCentsByName}
          selectedServices={selectedBoardingAddOns}
          onClose={onCloseBoardingAddOnModal}
          onSave={onSaveBoardingAddOns}
          t={t}
        />
      )}
    </>
  );
}

function BoardingGroomingModal(props: {
  services: string[];
  servicePriceCentsByName: Record<string, number>;
  preferredBathServiceByPetId: Record<string, string>;
  pets: BoardingPetSummary[];
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

                    return (
                      <label key={`${pet.id}-${option.key}`} className="flex items-center gap-2 text-sm">
                        <input
                          type="checkbox"
                          checked={isSelected}
                          onChange={(event) => {
                            toggleSelection(pet.id, option, event.target.checked);
                          }}
                        />
                        <span>{option.label}</span>
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

function BoardingAddOnModal(props: {
  services: string[];
  pricesByName: Record<string, number>;
  selectedServices: string[];
  onSave: (services: string[]) => void;
  onClose: () => void;
  t: Translator;
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
                      onChange={(event) => toggle(service, event.target.checked)}
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
