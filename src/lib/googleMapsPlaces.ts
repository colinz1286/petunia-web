type GoogleMapsPlacesLibrary = {
  PlaceAutocompleteElement: new () => GooglePlaceAutocompleteElement;
};

export type GoogleAddressComponent = {
  longText?: string;
  shortText?: string;
  types: string[];
};

export type GooglePlace = {
  addressComponents?: GoogleAddressComponent[];
  formattedAddress?: string;
  fetchFields: (options: { fields: string[] }) => Promise<void>;
};

export type GooglePlacePrediction = {
  toPlace: () => GooglePlace;
};

export type GooglePlacePredictionSelectEvent = Event & {
  placePrediction?: GooglePlacePrediction;
};

type GooglePlaceAutocompleteElement = HTMLElement;

type GoogleMapsImportLibrary = (
  libraryName: 'places',
) => Promise<GoogleMapsPlacesLibrary>;

declare global {
  interface Window {
    google?: {
      maps?: {
        importLibrary?: GoogleMapsImportLibrary;
      };
    };
  }
}

const SCRIPT_READY_TIMEOUT_MS = 20_000;
const POLL_INTERVAL_MS = 50;
const SCRIPT_DATA_ATTR = 'data-petunia-google-maps-places';

let ensureImportLibraryPromise: Promise<GoogleMapsImportLibrary> | null = null;

export function hasGoogleMapsPlacesApiKey(): boolean {
  return Boolean(process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY?.trim());
}

function getGoogleMapsPlacesApiKey(): string {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY?.trim();
  if (!apiKey) {
    throw new Error('Missing NEXT_PUBLIC_GOOGLE_MAPS_API_KEY.');
  }
  return apiKey;
}

function buildScriptUrl(apiKey: string): string {
  return `https://maps.googleapis.com/maps/api/js?key=${encodeURIComponent(apiKey)}&loading=async&libraries=places&v=weekly`;
}

function ensureScriptTag(src: string): void {
  if (typeof document === 'undefined') return;

  const existingScript = document.querySelector<HTMLScriptElement>(`script[src="${src}"]`);
  if (existingScript) return;

  const script = document.createElement('script');
  script.src = src;
  script.async = true;
  script.defer = true;
  script.setAttribute(SCRIPT_DATA_ATTR, 'true');
  document.head.appendChild(script);
}

function waitForImportLibrary(timeoutMs: number): Promise<GoogleMapsImportLibrary> {
  return new Promise((resolve, reject) => {
    const startedAt = Date.now();

    const poll = () => {
      const importLibrary = window.google?.maps?.importLibrary;
      if (importLibrary) {
        resolve(importLibrary);
        return;
      }

      if (Date.now() - startedAt >= timeoutMs) {
        reject(new Error('Google Maps Places script was not ready in time.'));
        return;
      }

      window.setTimeout(poll, POLL_INTERVAL_MS);
    };

    poll();
  });
}

async function ensureImportLibrary(apiKey: string): Promise<GoogleMapsImportLibrary> {
  const existingImportLibrary = window.google?.maps?.importLibrary;
  if (existingImportLibrary) {
    return existingImportLibrary;
  }

  if (!ensureImportLibraryPromise) {
    ensureImportLibraryPromise = (async () => {
      const src = buildScriptUrl(apiKey);
      ensureScriptTag(src);
      return waitForImportLibrary(SCRIPT_READY_TIMEOUT_MS);
    })().finally(() => {
      ensureImportLibraryPromise = null;
    });
  }

  return ensureImportLibraryPromise;
}

export async function ensureGoogleMapsPlacesLibrary(): Promise<GoogleMapsPlacesLibrary> {
  if (typeof window === 'undefined') {
    throw new Error('Google Maps Places can only run in the browser.');
  }

  const apiKey = getGoogleMapsPlacesApiKey();
  const importLibrary = await ensureImportLibrary(apiKey);
  return importLibrary('places');
}
