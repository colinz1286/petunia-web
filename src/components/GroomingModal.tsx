'use client';

import { Dialog } from '@headlessui/react';
import { Fragment } from 'react';

interface GroomingModalProps {
  isOpen: boolean;
  onClose: () => void;
  pets: { id: string; name: string }[];
  services: string[];
  groomingSelections: Record<string, Set<string>>;
  setGroomingSelections: React.Dispatch<React.SetStateAction<Record<string, Set<string>>>>;
}

export default function GroomingModal({
  isOpen,
  onClose,
  pets,
  services,
  groomingSelections,
  setGroomingSelections,
}: GroomingModalProps) {
  const toggleService = (petId: string, service: string) => {
    setGroomingSelections((prev) => {
      const current = prev[petId] ?? new Set();
      const updated = new Set(current);
      updated.has(service) ? updated.delete(service) : updated.add(service);
      return { ...prev, [petId]: updated };
    });
  };

  const hasSelections = pets.some(
    (pet) => groomingSelections[pet.id] && groomingSelections[pet.id]!.size > 0
  );

  return (
    <Dialog open={isOpen} onClose={onClose} as={Fragment}>
      <div className="fixed inset-0 z-50 bg-black bg-opacity-40 flex items-center justify-center p-4">
        <Dialog.Panel className="bg-white rounded-lg shadow-lg p-6 max-w-lg w-full space-y-6">
          <Dialog.Title className="text-xl font-bold text-center">
            Select Grooming Add-Ons
          </Dialog.Title>

          {pets.map((pet) => (
            <div key={pet.id} className="border rounded p-3">
              <h3 className="font-semibold text-md mb-2">{pet.name}</h3>
              <div className="flex flex-wrap gap-2">
                {services.map((service) => (
                  <button
                    key={service}
                    type="button"
                    className={`px-3 py-1 rounded border ${
                      groomingSelections[pet.id]?.has(service)
                        ? 'bg-green-500 text-white border-green-600'
                        : 'bg-white text-gray-700 border-gray-300'
                    }`}
                    onClick={() => toggleService(pet.id, service)}
                  >
                    {service}
                  </button>
                ))}
              </div>
            </div>
          ))}

          <button
            className="w-full bg-green-700 hover:bg-green-600 text-white py-2 rounded mt-4"
            onClick={onClose}
          >
            Save Grooming Add-Ons
          </button>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}
