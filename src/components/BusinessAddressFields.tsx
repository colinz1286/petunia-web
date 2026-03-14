'use client';

import AddressAutocompleteSearch from '@/components/AddressAutocompleteSearch';
import { formatUsZipCode } from '@/lib/signUpFormUtils';

type BusinessAddressFieldsProps = {
  autocompleteId: string;
  locale: string;
  street: string;
  onStreetChange: (value: string) => void;
  city: string;
  onCityChange: (value: string) => void;
  state: string;
  onStateChange: (value: string) => void;
  zip: string;
  onZipChange: (value: string) => void;
  containerClassName?: string;
  inputClassName: string;
};

export default function BusinessAddressFields({
  autocompleteId,
  locale,
  street,
  onStreetChange,
  city,
  onCityChange,
  state,
  onStateChange,
  zip,
  onZipChange,
  containerClassName = 'space-y-4',
  inputClassName,
}: BusinessAddressFieldsProps) {
  return (
    <div className={containerClassName}>
      <AddressAutocompleteSearch
        clearLoadErrorOnSuccessfulSelection
        id={autocompleteId}
        label="Find Business Address"
        locale={locale}
        placeholder="Start typing the business address"
        onAddressSelected={({ street, city, state, zipCode }) => {
          onStreetChange(street);
          onCityChange(city);
          onStateChange(state);
          onZipChange(formatUsZipCode(zipCode));
        }}
      />
      <input
        type="text"
        placeholder="Street Address"
        value={street}
        onChange={(event) => onStreetChange(event.target.value)}
        autoComplete="section-business street-address"
        className={inputClassName}
      />
      <input
        type="text"
        placeholder="City"
        value={city}
        onChange={(event) => onCityChange(event.target.value)}
        autoComplete="section-business address-level2"
        className={inputClassName}
      />
      <input
        type="text"
        placeholder="State"
        value={state}
        onChange={(event) => onStateChange(event.target.value)}
        autoComplete="section-business address-level1"
        className={inputClassName}
      />
      <input
        type="text"
        inputMode="numeric"
        placeholder="Zip Code"
        value={zip}
        onChange={(event) => onZipChange(formatUsZipCode(event.target.value))}
        autoComplete="section-business postal-code"
        className={inputClassName}
      />
    </div>
  );
}
