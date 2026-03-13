export type GroomingSelectionMap = Record<string, string[]>;

export type VisibleGroomingOption = {
  key: string;
  kind: 'service' | 'collapsedBath';
  label: string;
  value: string;
  priceCents?: number;
};

const BATH_SIZE_TOKENS = ['small', 'medium', 'large', 'xl', 'xxl'];

export const DEFAULT_GENERIC_BATH_LABEL = 'Bath';

export const normalizeGroomingServiceName = (value: string): string =>
  value.trim().toLowerCase();

export const isBaseBathService = (service: string): boolean =>
  normalizeGroomingServiceName(service).startsWith('bath');

export const isSizedBaseBathService = (service: string): boolean => {
  if (!isBaseBathService(service)) return false;
  return BATH_SIZE_TOKENS.some((size) => {
    const rx = new RegExp(`(^|\\W)${size}(\\W|$)`, 'i');
    return rx.test(service);
  });
};

export const findBathServiceForSize = (
  bathSize: string,
  services: string[]
): string | null => {
  const normalizedSize = normalizeGroomingServiceName(bathSize);
  if (!normalizedSize) return null;

  const bathServices = services.filter(isBaseBathService);
  if (bathServices.length === 0) return null;

  const exact = bathServices.find((service) => {
    const normalizedService = normalizeGroomingServiceName(service);
    return (
      normalizedService === `bath - ${normalizedSize}`
      || normalizedService === `bath ${normalizedSize}`
    );
  });
  if (exact) return exact;

  return (
    bathServices.find((service) => (
      normalizeGroomingServiceName(service).includes(normalizedSize)
    )) || null
  );
};

export const findConfiguredGenericBathService = (
  services: string[]
): string | null => (
  services.find((service) => (
    isBaseBathService(service) && !isSizedBaseBathService(service)
  )) || null
);

export const findUniformPricedBathService = (
  services: string[],
  pricesByName: Record<string, number>
): string | null => {
  const pricedBathServices = services
    .filter(isBaseBathService)
    .map((service) => ({ service, priceCents: pricesByName[service] }))
    .filter((row) => typeof row.priceCents === 'number' && row.priceCents > 0);

  if (pricedBathServices.length === 0) return null;

  const uniquePrices = Array.from(
    new Set(pricedBathServices.map((row) => row.priceCents))
  );

  return uniquePrices.length === 1 ? pricedBathServices[0]!.service : null;
};

export const buildPreferredBathServiceByPetId = ({
  bathSizeByPetId,
  services,
}: {
  bathSizeByPetId: Record<string, string>;
  services: string[];
}): Record<string, string> => (
  Object.entries(bathSizeByPetId).reduce<Record<string, string>>((acc, [petId, bathSize]) => {
    const matchedBath = findBathServiceForSize(bathSize, services);
    if (matchedBath) {
      acc[petId] = matchedBath;
    }
    return acc;
  }, {})
);

export const normalizeBathSelectionsForVisiblePets = ({
  selections,
  petIds,
  preferredBathServiceByPetId,
}: {
  selections: GroomingSelectionMap;
  petIds: string[];
  preferredBathServiceByPetId: Record<string, string>;
}): GroomingSelectionMap => {
  const next: GroomingSelectionMap = { ...selections };

  petIds.forEach((petId) => {
    const currentSelections = next[petId] || [];
    const nonBathSelections = currentSelections.filter((service) => !isBaseBathService(service));
    const hasBathSelection = currentSelections.some((service) => isBaseBathService(service));
    const normalizedSelections = [...nonBathSelections];

    if (hasBathSelection) {
      normalizedSelections.push(
        preferredBathServiceByPetId[petId] || DEFAULT_GENERIC_BATH_LABEL
      );
    }

    if (normalizedSelections.length > 0) {
      next[petId] = Array.from(new Set(normalizedSelections));
    } else {
      delete next[petId];
    }
  });

  return next;
};

export const extractBathSizeFromAssessmentData = (data: {
  notes?: string;
  bathSize?: string;
  bath_size?: string;
  bathsize?: string;
}): string | null => {
  const direct = data.bathSize || data.bath_size || data.bathsize;
  if (typeof direct === 'string' && direct.trim() !== '') {
    return direct.trim();
  }

  const notes = (data.notes || '').trim();
  if (!notes) return null;

  const match = notes.match(/bath\s*size\s*[:\-]\s*([a-z0-9+\- ]+)/i)
    || notes.match(/bath\s*[:\-]\s*([a-z0-9+\- ]+)/i);

  if (!match?.[1]) return null;

  const parsed = match[1].trim();
  return parsed || null;
};

export const resolveBathServiceForCheckout = ({
  service,
  bathSize,
  services,
  pricesByName,
}: {
  service: string;
  bathSize?: string;
  services: string[];
  pricesByName: Record<string, number>;
}): string | null => {
  const trimmedService = service.trim();
  if (!trimmedService) return null;

  if (!isBaseBathService(trimmedService) || isSizedBaseBathService(trimmedService)) {
    return trimmedService;
  }

  const exactPrice = pricesByName[trimmedService];
  if (typeof exactPrice === 'number' && exactPrice > 0) {
    return trimmedService;
  }

  const preferredBathService = bathSize
    ? findBathServiceForSize(bathSize, services)
    : null;
  if (preferredBathService) {
    const preferredPrice = pricesByName[preferredBathService];
    if (typeof preferredPrice === 'number' && preferredPrice > 0) {
      return preferredBathService;
    }
  }

  const configuredGenericBath = findConfiguredGenericBathService(services);
  if (configuredGenericBath) {
    const configuredGenericPrice = pricesByName[configuredGenericBath];
    if (typeof configuredGenericPrice === 'number' && configuredGenericPrice > 0) {
      return configuredGenericBath;
    }
  }

  return findUniformPricedBathService(services, pricesByName);
};

export const normalizeGroomingSelectionsForCheckout = ({
  selections,
  bathSizeByPetId,
  services,
  pricesByName,
}: {
  selections: GroomingSelectionMap;
  bathSizeByPetId: Record<string, string>;
  services: string[];
  pricesByName: Record<string, number>;
}): GroomingSelectionMap => {
  const next: GroomingSelectionMap = {};

  for (const [petId, rawServices] of Object.entries(selections)) {
    const resolvedServices = Array.from(
      new Set(
        rawServices
          .map((service) => {
            const trimmedService = service.trim();
            if (!trimmedService) return null;
            if (!isBaseBathService(trimmedService) || isSizedBaseBathService(trimmedService)) {
              return trimmedService;
            }

            return resolveBathServiceForCheckout({
              service: trimmedService,
              bathSize: bathSizeByPetId[petId],
              services,
              pricesByName,
            });
          })
          .filter((service): service is string => !!service)
      )
    );

    if (resolvedServices.length > 0) {
      next[petId] = resolvedServices;
    }
  }

  return next;
};

export const buildVisibleGroomingOptions = ({
  services,
  pricesByName,
  preferredBathService,
}: {
  services: string[];
  pricesByName: Record<string, number>;
  preferredBathService?: string | null;
}): VisibleGroomingOption[] => {
  const options: VisibleGroomingOption[] = [];
  const normalizedPreferredBath = normalizeGroomingServiceName(preferredBathService || '');
  const collapsedBathValue = DEFAULT_GENERIC_BATH_LABEL;
  const uniformBathService = findUniformPricedBathService(services, pricesByName);
  let insertedBathOption = false;

  services.forEach((rawService) => {
    const service = rawService.trim();
    if (!service) return;

    if (!isBaseBathService(service)) {
      const priceCents = pricesByName[service];
      options.push({
        key: `service:${service}`,
        kind: 'service',
        label: service,
        value: service,
        priceCents: typeof priceCents === 'number' && priceCents > 0 ? priceCents : undefined,
      });
      return;
    }

    if (normalizedPreferredBath) {
      if (normalizeGroomingServiceName(service) !== normalizedPreferredBath || insertedBathOption) {
        return;
      }

      const priceCents = pricesByName[service];
      options.push({
        key: `service:${service}`,
        kind: 'service',
        label: service,
        value: service,
        priceCents: typeof priceCents === 'number' && priceCents > 0 ? priceCents : undefined,
      });
      insertedBathOption = true;
      return;
    }

    if (insertedBathOption) return;

    const priceSource = (
      (collapsedBathValue !== DEFAULT_GENERIC_BATH_LABEL && collapsedBathValue)
      || uniformBathService
    );
    const priceCents = priceSource ? pricesByName[priceSource] : undefined;

    options.push({
      key: 'collapsed-bath',
      kind: 'collapsedBath',
      label: DEFAULT_GENERIC_BATH_LABEL,
      value: collapsedBathValue,
      priceCents: typeof priceCents === 'number' && priceCents > 0 ? priceCents : undefined,
    });
    insertedBathOption = true;
  });

  if (normalizedPreferredBath && !insertedBathOption) {
    const priceCents = pricesByName[preferredBathService || ''];
    options.push({
      key: `service:${preferredBathService}`,
      kind: 'service',
      label: preferredBathService || DEFAULT_GENERIC_BATH_LABEL,
      value: preferredBathService || DEFAULT_GENERIC_BATH_LABEL,
      priceCents: typeof priceCents === 'number' && priceCents > 0 ? priceCents : undefined,
    });
  }

  return options;
};
