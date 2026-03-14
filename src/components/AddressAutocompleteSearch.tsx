'use client';

import { useEffect, useRef, useState } from 'react';

import {
  ensureGoogleMapsPlacesLibrary,
  hasGoogleMapsPlacesApiKey,
  type GoogleAddressComponent,
  type GooglePlace,
  type GooglePlacePredictionSelectEvent,
} from '@/lib/googleMapsPlaces';

type AddressAutofillValue = {
  city: string;
  state: string;
  street: string;
  zipCode: string;
};

type AddressAutocompleteSearchProps = {
  clearLoadErrorOnSuccessfulSelection?: boolean;
  id: string;
  label: string;
  locale: string;
  onAddressSelected: (address: AddressAutofillValue) => void;
  placeholder: string;
};

const unavailableMessage =
  'Address suggestions are temporarily unavailable. You can still enter the address manually below.';
const missingApiKeyMessage =
  'Address search is not configured for the web app yet. You can still enter the address manually below.';

function getAddressComponent(
  components: GoogleAddressComponent[],
  type: string,
  variant: 'long' | 'short' = 'long',
): string {
  const component = components.find((entry) => entry.types.includes(type));
  if (!component) return '';
  return variant === 'short'
    ? component.shortText?.trim() ?? component.longText?.trim() ?? ''
    : component.longText?.trim() ?? component.shortText?.trim() ?? '';
}

function parseAddress(place: GooglePlace): AddressAutofillValue {
  const components = place.addressComponents ?? [];

  const streetNumber = getAddressComponent(components, 'street_number');
  const route = getAddressComponent(components, 'route');
  const subpremise = getAddressComponent(components, 'subpremise');
  const premise = getAddressComponent(components, 'premise');
  const city =
    getAddressComponent(components, 'locality') ||
    getAddressComponent(components, 'postal_town') ||
    getAddressComponent(components, 'sublocality_level_1') ||
    getAddressComponent(components, 'administrative_area_level_2');
  const state =
    getAddressComponent(components, 'administrative_area_level_1', 'short') ||
    getAddressComponent(components, 'administrative_area_level_1');
  const zipCode = getAddressComponent(components, 'postal_code');

  let street = [streetNumber, route].filter(Boolean).join(' ').trim();
  if (!street) {
    street = premise;
  }
  if (subpremise) {
    street = [street, subpremise].filter(Boolean).join(' ').trim();
  }
  if (!street) {
    street = place.formattedAddress?.split(',')[0]?.trim() ?? '';
  }

  return { street, city, state, zipCode };
}

export default function AddressAutocompleteSearch({
  clearLoadErrorOnSuccessfulSelection = false,
  id,
  label,
  locale,
  onAddressSelected,
  placeholder,
}: AddressAutocompleteSearchProps) {
  const mountRef = useRef<HTMLDivElement | null>(null);
  const onAddressSelectedRef = useRef(onAddressSelected);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(hasGoogleMapsPlacesApiKey());

  useEffect(() => {
    onAddressSelectedRef.current = onAddressSelected;
  }, [onAddressSelected]);

  useEffect(() => {
    if (!hasGoogleMapsPlacesApiKey()) {
      setIsLoading(false);
      setLoadError(missingApiKeyMessage);
      return;
    }

    const mountNode = mountRef.current;
    if (!mountNode) {
      setIsLoading(false);
      return;
    }

    let cancelled = false;
    let autocompleteElement: HTMLElement | null = null;
    let removeListeners = () => {};

    const initAutocomplete = async () => {
      try {
        setLoadError(null);
        setIsLoading(true);

        const { PlaceAutocompleteElement } = await ensureGoogleMapsPlacesLibrary();
        if (cancelled) return;

        const element = new PlaceAutocompleteElement();
        element.id = id;
        element.className = 'petunia-place-autocomplete';
        element.setAttribute('aria-label', label);
        element.setAttribute('placeholder', placeholder);
        element.setAttribute('included-region-codes', 'us');
        element.setAttribute('requested-language', locale);
        element.setAttribute('requested-region', 'us');

        const handleSelect = async (event: Event) => {
          try {
            const placePrediction = (event as GooglePlacePredictionSelectEvent).placePrediction;
            if (!placePrediction) return;

            const place = placePrediction.toPlace();
            await place.fetchFields({
              fields: ['addressComponents', 'formattedAddress'],
            });
            if (clearLoadErrorOnSuccessfulSelection) {
              setLoadError(null);
            }
            onAddressSelectedRef.current(parseAddress(place));
          } catch (error) {
            console.error('Address autocomplete selection failed:', error);
            setLoadError(unavailableMessage);
          }
        };

        const handleError = () => {
          setLoadError(unavailableMessage);
        };

        element.addEventListener('gmp-select', handleSelect);
        element.addEventListener('gmp-error', handleError);
        mountNode.replaceChildren(element);

        autocompleteElement = element;
        removeListeners = () => {
          element.removeEventListener('gmp-select', handleSelect);
          element.removeEventListener('gmp-error', handleError);
        };
      } catch (error) {
        console.error('Address autocomplete failed to initialize:', error);
        if (!cancelled) {
          setLoadError(unavailableMessage);
          mountNode.replaceChildren();
        }
      } finally {
        if (!cancelled) {
          setIsLoading(false);
        }
      }
    };

    void initAutocomplete();

    return () => {
      cancelled = true;
      removeListeners();
      if (autocompleteElement && mountNode.contains(autocompleteElement)) {
        mountNode.removeChild(autocompleteElement);
      }
    };
  }, [clearLoadErrorOnSuccessfulSelection, id, label, locale, placeholder]);

  const missingApiKey = !hasGoogleMapsPlacesApiKey();

  return (
    <div className="space-y-2">
      <label htmlFor={id} className="block text-sm font-semibold text-[#2c4a30]">
        {label}
      </label>
      {missingApiKey ? (
        <div className="w-full rounded-xl border border-dashed border-[#2c4a30]/25 bg-white/70 px-4 py-3 text-sm text-[#2c4a30]/70">
          Address search unavailable
        </div>
      ) : (
        <div ref={mountRef} className="w-full" />
      )}
      {isLoading && !missingApiKey && (
        <p className="text-xs text-[#2c4a30]/70">
          Loading address suggestions...
        </p>
      )}
      {!isLoading && !loadError && !missingApiKey && (
        <p className="text-xs text-[#2c4a30]/70">
          Start typing and choose your address to autofill the fields below.
        </p>
      )}
      {loadError && (
        <p className={`text-xs ${missingApiKey ? 'text-[#2c4a30]/70' : 'text-red-600'}`}>
          {loadError}
          {missingApiKey && process.env.NODE_ENV !== 'production'
            ? ' Missing NEXT_PUBLIC_GOOGLE_MAPS_API_KEY.'
            : ''}
        </p>
      )}
    </div>
  );
}
