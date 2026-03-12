export type KennelTypeOption = {
  id: string;
  name: string;
  totalCount: number;
};

export type DaycareKennelMode = 'openRoam' | 'kennelBased';

export type DogKennelPreference = {
  defaultKennelTypeId: string;
  defaultKennelTypeName: string;
};

export type KennelAssignment = {
  id: string;
  kennelTypeId: string;
  kennelTypeName: string;
  petIds: string[];
};

const cleanString = (value: unknown): string => (
  typeof value === 'string' ? value.trim() : ''
);

const uniqueStrings = (values: unknown): string[] => {
  if (!Array.isArray(values)) return [];
  const seen = new Set<string>();
  const next: string[] = [];

  for (const value of values) {
    const cleaned = cleanString(value);
    if (!cleaned || seen.has(cleaned)) continue;
    seen.add(cleaned);
    next.push(cleaned);
  }

  return next;
};

export const parseKennelCount = (value: unknown): number => {
  if (typeof value === 'number' && Number.isFinite(value)) {
    return Math.max(0, Math.floor(value));
  }

  const parsed = Number.parseInt(cleanString(value), 10);
  return Number.isFinite(parsed) ? Math.max(0, parsed) : 0;
};

export const normalizeKennelTypeOption = (
  id: string,
  raw: Record<string, unknown> | null | undefined
): KennelTypeOption | null => {
  const name = cleanString(raw?.name);
  if (!id || !name) return null;

  return {
    id,
    name,
    totalCount: parseKennelCount(raw?.totalCount),
  };
};

export const sumKennelCapacity = (kennelTypes: KennelTypeOption[]): number => (
  kennelTypes.reduce((sum, kennelType) => sum + Math.max(0, kennelType.totalCount), 0)
);

export const daycareUsesKennels = (mode: string | null | undefined): mode is 'kennelBased' => (
  mode === 'kennelBased'
);

export const getDogKennelPreferenceFromData = (
  raw: Record<string, unknown> | null | undefined
): DogKennelPreference | null => {
  const defaultKennelTypeId = cleanString(
    raw?.defaultKennelTypeId ?? raw?.kennelTypeId
  );
  const defaultKennelTypeName = cleanString(
    raw?.defaultKennelTypeName ?? raw?.kennelTypeName
  );

  if (!defaultKennelTypeId && !defaultKennelTypeName) return null;

  return {
    defaultKennelTypeId,
    defaultKennelTypeName,
  };
};

export const buildDefaultKennelAssignments = (
  petIds: string[],
  kennelPreferences: Record<string, DogKennelPreference | undefined>
): KennelAssignment[] => {
  return petIds
    .map((petId, index) => {
      const cleanedPetId = cleanString(petId);
      if (!cleanedPetId) return null;

      const preference = kennelPreferences[cleanedPetId];
      return {
        id: `assignment-${index + 1}`,
        kennelTypeId: preference?.defaultKennelTypeId || '',
        kennelTypeName: preference?.defaultKennelTypeName || '',
        petIds: [cleanedPetId],
      };
    })
    .filter((assignment): assignment is KennelAssignment => assignment !== null);
};

export const normalizeKennelAssignments = (
  raw: unknown,
  opts?: {
    allowedPetIds?: string[];
    kennelTypes?: KennelTypeOption[];
  }
): KennelAssignment[] => {
  if (!Array.isArray(raw)) return [];

  const allowedPetIds = opts?.allowedPetIds ? new Set(uniqueStrings(opts.allowedPetIds)) : null;
  const kennelTypesById = new Map(
    (opts?.kennelTypes || []).map((kennelType) => [kennelType.id, kennelType.name])
  );

  return raw
    .map((item, index): KennelAssignment | null => {
      if (!item || typeof item !== 'object') return null;

      const row = item as Record<string, unknown>;
      const kennelTypeId = cleanString(row.kennelTypeId);
      const fallbackName = kennelTypeId ? (kennelTypesById.get(kennelTypeId) || '') : '';
      const kennelTypeName = cleanString(row.kennelTypeName) || fallbackName;
      const petIds = uniqueStrings(row.petIds).filter((petId) => (
        allowedPetIds ? allowedPetIds.has(petId) : true
      ));

      if (petIds.length === 0) return null;

      return {
        id: cleanString(row.id) || `assignment-${index + 1}`,
        kennelTypeId,
        kennelTypeName,
        petIds,
      };
    })
    .filter((assignment): assignment is KennelAssignment => assignment !== null);
};

export const mergeMissingPetsIntoAssignments = (
  assignments: KennelAssignment[],
  petIds: string[]
): KennelAssignment[] => {
  const next = assignments.map((assignment) => ({
    ...assignment,
    petIds: [...assignment.petIds],
  }));
  const assignedPetIds = new Set(next.flatMap((assignment) => assignment.petIds));

  let counter = next.length;
  for (const petId of uniqueStrings(petIds)) {
    if (assignedPetIds.has(petId)) continue;
    counter += 1;
    next.push({
      id: `assignment-${counter}`,
      kennelTypeId: '',
      kennelTypeName: '',
      petIds: [petId],
    });
  }

  return next;
};

export const countOccupiedKennels = (
  assignments: KennelAssignment[],
  activePetIds?: Set<string>
): number => {
  if (assignments.length === 0) return 0;

  return assignments.reduce((count, assignment) => {
    const occupiedPetIds = activePetIds
      ? assignment.petIds.filter((petId) => activePetIds.has(petId))
      : assignment.petIds;
    return occupiedPetIds.length > 0 ? count + 1 : count;
  }, 0);
};

export const summarizeKennelAssignments = (
  assignments: KennelAssignment[],
  petNamesById: Record<string, string>,
  unassignedLabel: string
): string[] => {
  return assignments.map((assignment) => {
    const kennelLabel = assignment.kennelTypeName || unassignedLabel;
    const petNames = assignment.petIds
      .map((petId) => petNamesById[petId] || petId)
      .filter(Boolean);
    return petNames.length > 0
      ? `${kennelLabel}: ${petNames.join(', ')}`
      : kennelLabel;
  });
};
