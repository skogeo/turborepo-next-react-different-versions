'use client';

import IntlTelInput, { IntlTelInputRef } from 'intl-tel-input/react';
import 'intl-tel-input/build/css/intlTelInput.css';
import { forwardRef } from 'react';
import { I18n } from 'intl-tel-input/i18n/types';

interface AllOptions {
  allowDropdown: boolean;
  autoPlaceholder: string;
  containerClass: string;
  countryOrder: string[];
  countrySearch: boolean;
  customPlaceholder:
    | ((
        selectedCountryPlaceholder: string,
        selectedCountryData: object
      ) => string)
    | null;
  dropdownContainer: HTMLElement | null;
  excludeCountries: string[];
  fixDropdownWidth: boolean;
  formatAsYouType: boolean;
  formatOnDisplay: boolean;
  geoIpLookup:
    | ((success: (iso2: string) => void, failure: () => void) => void)
    | null;
  hiddenInput:
    | ((telInputName: string) => {
        phone: string;
        country?: string;
      })
    | null;
  i18n: I18n | undefined;
  initialCountry: string;
  nationalMode: boolean;
  onlyCountries: string[];
  placeholderNumberType: unknown;
  showFlags: boolean;
  separateDialCode: boolean;
  strictMode: boolean;
  useFullscreenPopup: boolean;
  validationNumberTypes: unknown[] | null;
}

type SomeOptions = Partial<AllOptions>;

export interface PhoneInputProps {
  className?: string;
  style?: React.CSSProperties;
  initialValue?: string;
  onChangeNumber?: (number: string) => void;
  onChangeCountry?: (country: string) => void;
  onChangeValidity?: (valid: boolean) => void;
  onChangeErrorCode?: (errorCode: number | null) => void;
  usePreciseValidation?: boolean;
  initOptions?: SomeOptions;
  inputProps?: object;
  disabled?: boolean | undefined;
}

export const PhoneInput = forwardRef<IntlTelInputRef, PhoneInputProps>(
  (
    {
      initialValue,
      onChangeNumber,
      onChangeCountry,
      onChangeValidity,
      onChangeErrorCode,
      usePreciseValidation,
      initOptions,
      inputProps = {},
      disabled,
      className,
      style,
      ...props
    },
    ref
  ) => {
    return (
      <IntlTelInput
        ref={ref}
        initialValue={initialValue}
        onChangeNumber={onChangeNumber}
        onChangeCountry={onChangeCountry}
        onChangeValidity={onChangeValidity}
        onChangeErrorCode={onChangeErrorCode}
        usePreciseValidation={usePreciseValidation}
        inputProps={{
          className,
          style,
          ...inputProps,
        }}
        disabled={disabled}
        {...props}
      />
    );
  }
);

PhoneInput.displayName = 'PhoneInput';
