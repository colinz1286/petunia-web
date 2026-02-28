'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { onAuthStateChanged } from 'firebase/auth';
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  setDoc,
  where,
} from 'firebase/firestore';
import { getDatabase, ref as rtdbRef, onValue, off as rtdbOff, DataSnapshot } from 'firebase/database';
import { httpsCallable } from 'firebase/functions';
import { app, auth, db, functions } from '@/lib/firebaseClient';

type DogOnProperty = {
  id: string;
  reservationId: string;
  dogId: string;
  name: string;
  owner: string;
  userId?: string;
  type: string;
  groomingAddOns: string[];
};

type InvoiceLibraryItem = {
  id: string;
  name: string;
  priceCents: number;
  category: string;
  serviceContext?: string;
  billingModel?: string;
  petCount?: number;
  active: boolean;
};

type InvoicePreviewLine = {
  id: string;
  name: string;
  quantity: number;
  unitPriceCents: number;
  totalCents: number;
};

type InvoicePreviewGroup = {
  id: string;
  owner: string;
  dogs: string[];
  lines: InvoicePreviewLine[];
  totalCents: number;
};

type GroupedDogs = Record<string, DogOnProperty[]>;
type FilterType = 'Daycare' | 'Boarding';

const sanitizeFirebaseKey = (input: string) =>
  input.trim().split(/[.\#$\[\]\/:]/g).join('-');

const normalize = (input: string) => input.trim().toLowerCase();
const normalizeServiceLabel = (input: string) =>
  normalize(input).replace(/\s*-\s*\$?\d[\d,]*(?:\.\d{1,2})?\s*$/g, '');
const slugify = (input: string) =>
  normalize(input)
    .replace(/[^a-z0-9]+/g, '_')
    .replace(/^_+|_+$/g, '')
    .slice(0, 80);
const autoDaycareAddonItemId = (serviceName: string) => `auto_daycare_addon_${slugify(serviceName) || 'item'}`;

const formatOwnerName = (fullName: string) => {
  const parts = fullName.trim().split(/\s+/).filter(Boolean);
  if (parts.length < 2) return fullName;
  const lastName = parts[parts.length - 1];
  const firstName = parts.slice(0, parts.length - 1).join(' ');
  return `${lastName}, ${firstName}`;
};

const chooseBaseItem = (items: InvoiceLibraryItem[], serviceType: string) => {
  const service = normalize(serviceType);
  let best: { item: InvoiceLibraryItem; score: number } | null = null;

  for (const item of items) {
    if (!item.active) continue;
    const category = normalize(item.category);
    if (category !== service) continue;

    const context = normalize(item.serviceContext || 'none');
    let score = 100;
    if (context === service) score += 20;
    if (context === 'none' || context === 'universal') score += 10;

    if (!best || score > best.score) best = { item, score };
  }

  return best?.item || null;
};

const extractPetCountFromName = (name: string): number | null => {
  const value = (name || '').toLowerCase();
  const match = value.match(/(?:^|\D)(\d+)\s*dog(?:s)?(?:\D|$)/i);
  if (!match?.[1]) return null;
  const count = Number(match[1]);
  return Number.isFinite(count) && count > 0 ? count : null;
};

const isAssessmentLikeDaycareItem = (item: InvoiceLibraryItem) => {
  const name = normalize(item.name || '');
  const model = normalize(item.billingModel || '');
  return (
    model.includes('assessment') ||
    model.includes('temperament') ||
    name.includes('assessment') ||
    name.includes('temperament')
  );
};

const isPassLikeDaycareItem = (item: InvoiceLibraryItem) => {
  const name = normalize(item.name || '');
  const model = normalize(item.billingModel || '');
  return (
    model.includes('monthly') ||
    model.includes('pass') ||
    model.includes('package') ||
    name.includes('monthly') ||
    name.includes('pass') ||
    name.includes('package') ||
    name.includes('unlimited')
  );
};

const hasPerAppointmentBilling = (item: InvoiceLibraryItem) => {
  const model = normalize(item.billingModel || '');
  return (
    model === 'perappointment' ||
    model === 'per_appointment' ||
    model === 'perday' ||
    model === 'per_day' ||
    model === 'daily' ||
    model === 'singlevisit' ||
    model === 'single_visit'
  );
};

const chooseDaycareTierBaseItem = (items: InvoiceLibraryItem[], petCount: number) => {
  const eligible = items.filter((item) => {
    if (!item.active) return false;
    if (normalize(item.category) !== 'daycare') return false;
    if (isAssessmentLikeDaycareItem(item)) return false;
    if (isPassLikeDaycareItem(item)) return false;
    return true;
  });

  let exact: { item: InvoiceLibraryItem; score: number } | null = null;
  let genericSingleDog: { item: InvoiceLibraryItem; score: number } | null = null;

  for (const item of eligible) {
    const rawPetCount = typeof item.petCount === 'number' && item.petCount > 0
      ? item.petCount
      : extractPetCountFromName(item.name);
    const isPerAppointment = hasPerAppointmentBilling(item);

    // Require strong evidence that this is a daily charge line (not a pass/program).
    if (!isPerAppointment && rawPetCount == null) continue;

    const context = normalize(item.serviceContext || 'none');
    let score = 100;
    if (context === 'daycare') score += 20;
    if (context === 'none' || context === 'universal') score += 10;

    if (rawPetCount != null && rawPetCount === petCount) {
      const exactScore = score + 40;
      if (!exact || exactScore > exact.score) exact = { item, score: exactScore };
      continue;
    }

    // Safe fallback only for single-dog daycare when there is no explicit tier count.
    if (petCount === 1 && rawPetCount == null && isPerAppointment) {
      if (!genericSingleDog || score > genericSingleDog.score) {
        genericSingleDog = { item, score };
      }
    }
  }

  // For 2+ dogs we require an exact tier match to avoid accidental misbilling.
  if (petCount >= 2) return exact?.item || null;
  return exact?.item || genericSingleDog?.item || null;
};

const chooseGroomingItem = (items: InvoiceLibraryItem[], serviceName: string, serviceType: string) => {
  const targetName = normalizeServiceLabel(serviceName);
  const service = normalize(serviceType);
  let best: { item: InvoiceLibraryItem; score: number } | null = null;

  for (const item of items) {
    if (!item.active) continue;

    const category = normalize(item.category);
    if (category !== 'grooming' && category !== 'addon' && category !== 'add-on') continue;

    const itemName = normalizeServiceLabel(item.name);
    if (itemName !== targetName) continue;

    const context = normalize(item.serviceContext || 'none');
    let score = 80;
    if (context === service) score += 20;
    if (context === 'none' || context === 'universal') score += 10;

    if (!best || score > best.score) best = { item, score };
  }

  return best?.item || null;
};

export default function BoardingAndDaycareManualInvoicesPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const rtdb = getDatabase(app);

  const [loading, setLoading] = useState(true);
  const [sending, setSending] = useState(false);

  const [businessIdRaw, setBusinessIdRaw] = useState('');

  const [dogs, setDogs] = useState<DogOnProperty[]>([]);
  const [filter, setFilter] = useState<FilterType>('Daycare');
  const [selectedDogIds, setSelectedDogIds] = useState<Set<string>>(new Set());
  const [ownerToUserId, setOwnerToUserId] = useState<Record<string, string>>({});
  const [invoiceItems, setInvoiceItems] = useState<InvoiceLibraryItem[]>([]);
  const [invoicedReservationIds, setInvoicedReservationIds] = useState<Set<string>>(new Set());

  const [daysUntilDue, setDaysUntilDue] = useState(0);
  const [resultMessages, setResultMessages] = useState<string[]>([]);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [previewGroups, setPreviewGroups] = useState<InvoicePreviewGroup[]>([]);
  const [showingPreview, setShowingPreview] = useState(false);

  const rRef = useRef<ReturnType<typeof rtdbRef> | null>(null);
  const rCb = useRef<((snap: DataSnapshot) => void) | null>(null);

  const filteredDogs = useMemo(() => {
    return dogs.filter((dog) => {
      if (filter === 'Boarding') return normalize(dog.type) === 'boarding';
      return normalize(dog.type) === 'daycare';
    });
  }, [dogs, filter]);

  const groupedDogs = useMemo<GroupedDogs>(() => {
    return filteredDogs.reduce<GroupedDogs>((acc, dog) => {
      if (!acc[dog.owner]) acc[dog.owner] = [];
      acc[dog.owner].push(dog);
      return acc;
    }, {});
  }, [filteredDogs]);

  const sortedOwners = useMemo(() => {
    return Object.keys(groupedDogs).sort((lhs, rhs) => {
      const lhsParts = lhs.trim().split(/\s+/).filter(Boolean);
      const rhsParts = rhs.trim().split(/\s+/).filter(Boolean);
      const lhsLast = (lhsParts[lhsParts.length - 1] || '').toLowerCase();
      const rhsLast = (rhsParts[rhsParts.length - 1] || '').toLowerCase();
      if (lhsLast === rhsLast) return lhs.toLowerCase().localeCompare(rhs.toLowerCase());
      return lhsLast.localeCompare(rhsLast);
    });
  }, [groupedDogs]);

  useEffect(() => {
    setSelectedDogIds((prev) => {
      const validDogIds = new Set(dogs.map((d) => d.id));
      const next = new Set<string>();
      prev.forEach((id) => {
        if (validDogIds.has(id)) {
          const dog = dogs.find((d) => d.id === id);
          if (dog && !invoicedReservationIds.has(dog.reservationId)) {
            next.add(id);
          }
        }
      });
      return next;
    });
  }, [dogs, invoicedReservationIds]);

  const resolveBusinessId = useCallback(async (uid: string) => {
    const fromParam = (searchParams.get('businessId') || '').trim();
    if (fromParam) return fromParam;

    const ownerIdQ = await getDocs(query(collection(db, 'businesses'), where('ownerId', '==', uid)));
    if (!ownerIdQ.empty) return ownerIdQ.docs[0].id;

    const ownerIdsQ = await getDocs(
      query(collection(db, 'businesses'), where('ownerIds', 'array-contains', uid))
    );
    if (!ownerIdsQ.empty) return ownerIdsQ.docs[0].id;

    throw new Error('Business not found');
  }, [searchParams]);

  const loadJoinRequests = useCallback(async (businessId: string) => {
    const joinSnap = await getDocs(
      query(collection(db, 'joinRequests'), where('businessId', '==', businessId))
    );
    const joinMap: Record<string, string> = {};

    joinSnap.docs.forEach((d) => {
      const data = d.data() || {};
      const ownerName = (data.userName as string) || '';
      const userId = (data.userId as string) || '';
      if (ownerName && userId && !joinMap[ownerName]) joinMap[ownerName] = userId;
    });

    setOwnerToUserId(joinMap);
  }, []);

  const loadInvoiceLibrary = useCallback(async (businessId: string) => {
    const librarySnap = await getDoc(
      doc(db, 'businesses', businessId, 'settings', 'invoiceItemLibrary')
    );

    const libraryData = librarySnap.data() || {};
    const itemsRaw = (libraryData.items || {}) as Record<string, Record<string, unknown>>;

    const parsed = Object.entries(itemsRaw).map(([id, value]) => ({
      id,
      name: (value.name as string) || '',
      priceCents: typeof value.priceCents === 'number' ? value.priceCents : 0,
      category: (value.category as string) || '',
      serviceContext: (value.serviceContext as string) || 'none',
      billingModel: typeof value.billingModel === 'string' ? value.billingModel : undefined,
      petCount: typeof value.petCount === 'number' ? value.petCount : undefined,
      active: value.active !== false,
    }));

    setInvoiceItems(parsed);
  }, []);

  const syncDaycareAddOnsToInvoiceLibrary = useCallback(async (businessId: string) => {
    const [librarySnap, addOnSnap] = await Promise.all([
      getDoc(doc(db, 'businesses', businessId, 'settings', 'invoiceItemLibrary')),
      getDoc(doc(db, 'businesses', businessId, 'settings', 'daycareAddOnPricing')),
    ]);

    const libraryData = librarySnap.data() || {};
    const existingItems = (libraryData.items || {}) as Record<string, Record<string, unknown>>;

    const addOnData = addOnSnap.data() || {};
    const addOnServices = (addOnData.services || {}) as Record<string, { priceCents?: number }>;

    const existingNames = new Set(
      Object.values(existingItems)
        .map((v) => (typeof v.name === 'string' ? normalizeServiceLabel(v.name) : ''))
        .filter(Boolean)
    );

    const patch: Record<string, unknown> = {};

    for (const [serviceName, serviceValue] of Object.entries(addOnServices)) {
      const trimmedName = serviceName.trim();
      const normalizedName = normalizeServiceLabel(trimmedName);
      const priceCents = typeof serviceValue?.priceCents === 'number' ? serviceValue.priceCents : 0;
      if (!trimmedName || !normalizedName || priceCents <= 0) continue;

      const itemId = autoDaycareAddonItemId(trimmedName);
      const existing = existingItems[itemId] || {};
      const existingAutoSource = typeof existing.autoSource === 'string' ? normalize(existing.autoSource) : '';

      // If this exact auto-managed item already exists, keep it synced.
      if (existingAutoSource === 'daycareaddonpricing') {
        patch[itemId] = {
          ...(existing || {}),
          name: trimmedName,
          priceCents,
          category: 'grooming',
          serviceContext: 'daycare',
          active: true,
          autoManaged: true,
          autoSource: 'daycareAddOnPricing',
        };
        continue;
      }

      // If a business already created a line item with this name, do not duplicate it.
      if (existingNames.has(normalizedName)) continue;

      patch[itemId] = {
        name: trimmedName,
        priceCents,
        category: 'grooming',
        serviceContext: 'daycare',
        active: true,
        autoManaged: true,
        autoSource: 'daycareAddOnPricing',
      };
    }

    if (Object.keys(patch).length > 0) {
      await setDoc(
        doc(db, 'businesses', businessId, 'settings', 'invoiceItemLibrary'),
        { items: patch },
        { merge: true }
      );
    }
  }, []);

  const loadExistingInvoices = useCallback(async (businessId: string) => {
    try {
      const snap = await getDocs(
        query(
          collection(db, 'invoices'),
          where('businessId', '==', businessId),
          where('status', '==', 'sent')
        )
      );

      const ids = new Set<string>();
      snap.docs.forEach((d) => {
        const arr = d.data().reservationIds;
        if (Array.isArray(arr)) {
          arr.forEach((id) => {
            if (typeof id === 'string' && id.trim().length > 0) ids.add(id);
          });
        }
      });

      setInvoicedReservationIds(ids);
    } catch (error) {
      console.error('Failed loading existing invoices:', error);
    }
  }, []);

  const observeCheckIns = useCallback((businessId: string) => {
    const sanitized = sanitizeFirebaseKey(businessId);
    setBusinessIdRaw(businessId);

    if (rRef.current && rCb.current) {
      rtdbOff(rRef.current, 'value', rCb.current);
      rRef.current = null;
      rCb.current = null;
    }

    const ref = rtdbRef(rtdb, `checkIns/${sanitized}`);
    const cb = (snap: DataSnapshot) => {
      const map = new Map<string, DogOnProperty>();
      const orphanGroomingByDogId = new Map<string, string[]>();

      snap.forEach((dateNode) => {
        dateNode.forEach((dogNode) => {
          const value = (dogNode.val() || {}) as Record<string, unknown>;
          const reservationIdRaw = (value.reservationId as string) || dogNode.key || '';
          const reservationId = reservationIdRaw.trim();
          if (!reservationId) return;

          const nameRaw = ((value.name as string) || '').trim();
          const ownerRaw = ((value.owner as string) || '').trim();
          const typeRaw = ((value.type as string) || '').trim();
          const groomingAddOns = Array.isArray(value.groomingAddOns)
            ? (value.groomingAddOns as string[])
            : [];

          const hasCoreFields = !!nameRaw && !!ownerRaw && !!typeRaw;
          if (!hasCoreFields) {
            const orphanDogId = ((value.dogId as string) || dogNode.key || '').trim();
            if (orphanDogId && groomingAddOns.length > 0) {
              const prev = orphanGroomingByDogId.get(orphanDogId) || [];
              orphanGroomingByDogId.set(orphanDogId, Array.from(new Set([...prev, ...groomingAddOns])));
            }
            return;
          }

          const dog: DogOnProperty = {
            id: reservationId,
            reservationId,
            dogId: ((value.dogId as string) || reservationId).trim(),
            name: nameRaw,
            owner: ownerRaw,
            userId: (value.userId as string) || undefined,
            type: typeRaw,
            groomingAddOns,
          };

          map.set(dog.id, dog);
        });
      });

      const merged = Array.from(map.values()).map((dog) => {
        const orphan = orphanGroomingByDogId.get(dog.dogId) || [];
        if (orphan.length === 0) return dog;
        return {
          ...dog,
          groomingAddOns: Array.from(new Set([...(dog.groomingAddOns || []), ...orphan])),
        };
      });

      const list = merged.sort((a, b) => {
        const ownerCompare = a.owner.localeCompare(b.owner, undefined, { sensitivity: 'base' });
        if (ownerCompare !== 0) return ownerCompare;
        return a.name.localeCompare(b.name, undefined, { sensitivity: 'base' });
      });

      setDogs(list);
      setLoading(false);
    };

    onValue(ref, cb);
    rRef.current = ref;
    rCb.current = cb;
  }, [rtdb]);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (user) => {
      if (!user) {
        router.push('/en/loginsignup');
        return;
      }

      try {
        setLoading(true);
        setErrorMsg(null);

        const businessId = await resolveBusinessId(user.uid);
        await loadJoinRequests(businessId);
        await syncDaycareAddOnsToInvoiceLibrary(businessId);
        await Promise.all([loadInvoiceLibrary(businessId), loadExistingInvoices(businessId)]);
        observeCheckIns(businessId);
      } catch (error) {
        console.error('Failed to load invoice setup:', error);
        setErrorMsg('Failed to load invoice setup.');
        setLoading(false);
      }
    });

    return () => {
      unsub();
      if (rRef.current && rCb.current) {
        rtdbOff(rRef.current, 'value', rCb.current);
      }
      rRef.current = null;
      rCb.current = null;
    };
  }, [
    router,
    resolveBusinessId,
    loadJoinRequests,
    syncDaycareAddOnsToInvoiceLibrary,
    loadInvoiceLibrary,
    loadExistingInvoices,
    observeCheckIns,
  ]);

  const toggleDog = (dogId: string) => {
    const dog = dogs.find((d) => d.id === dogId);
    if (!dog || invoicedReservationIds.has(dog.reservationId)) return;

    setSelectedDogIds((prev) => {
      const next = new Set(prev);
      if (next.has(dogId)) next.delete(dogId);
      else next.add(dogId);
      return next;
    });
  };

  const toggleOwnerSelection = (owner: string) => {
    const ownerDogs = groupedDogs[owner] || [];
    if (ownerDogs.some((d) => invoicedReservationIds.has(d.reservationId))) return;

    const allSelected = ownerDogs.every((d) => selectedDogIds.has(d.id));

    setSelectedDogIds((prev) => {
      const next = new Set(prev);
      ownerDogs.forEach((dog) => {
        if (allSelected) next.delete(dog.id);
        else next.add(dog.id);
      });
      return next;
    });
  };

  const buildLineItems = (ownerDogs: DogOnProperty[]) => {
    const quantityByItemId = new Map<string, number>();
    const warnings: string[] = [];

    const daycareDogs = ownerDogs.filter((dog) => normalize(dog.type) !== 'boarding');
    const boardingDogs = ownerDogs.filter((dog) => normalize(dog.type) === 'boarding');

    if (daycareDogs.length > 0) {
      const daycareBaseItem = chooseDaycareTierBaseItem(invoiceItems, daycareDogs.length);
      if (daycareBaseItem) {
        const qty = quantityByItemId.get(daycareBaseItem.id) || 0;
        quantityByItemId.set(daycareBaseItem.id, qty + 1);
      } else {
        warnings.push(
          `No valid daycare tier item found for ${daycareDogs.length} dog(s). ` +
          `Manual invoicing ignores assessment/pass items by design.`
        );
      }
    }

    for (const dog of boardingDogs) {
      const baseItem = chooseBaseItem(invoiceItems, 'boarding');
      if (baseItem) {
        quantityByItemId.set(baseItem.id, (quantityByItemId.get(baseItem.id) || 0) + 1);
      } else {
        warnings.push(`${dog.name}: no boarding invoice item found`);
      }
    }

    for (const dog of ownerDogs) {
      const serviceKey = normalize(dog.type) === 'boarding' ? 'boarding' : 'daycare';

      for (const grooming of dog.groomingAddOns) {
        const groomingItem = chooseGroomingItem(invoiceItems, grooming, serviceKey);
        if (groomingItem) {
          quantityByItemId.set(groomingItem.id, (quantityByItemId.get(groomingItem.id) || 0) + 1);
        } else {
          warnings.push(`${dog.name}: no invoice item for grooming "${grooming}"`);
        }
      }
    }

    const lineItems = Array.from(quantityByItemId.entries()).map(([itemId, quantity]) => ({
      itemId,
      quantity,
    }));

    return { lineItems, warnings };
  };

  const sendInvoices = async () => {
    if (selectedDogIds.size === 0) {
      setErrorMsg('Select at least one dog.');
      return;
    }

    setSending(true);
    setErrorMsg(null);
    setResultMessages([]);

    const createInvoice = httpsCallable(functions, 'createInvoice');
    const selectedDogs = dogs.filter((dog) => selectedDogIds.has(dog.id));
    const grouped = selectedDogs.reduce<Record<string, DogOnProperty[]>>((acc, dog) => {
      if (!acc[dog.owner]) acc[dog.owner] = [];
      acc[dog.owner].push(dog);
      return acc;
    }, {});

    const results: string[] = [];
    const sentDogIds = new Set<string>();

    for (const [owner, ownerDogs] of Object.entries(grouped)) {
      const uniqueUserIds = new Set(
        ownerDogs
          .map((d) => (d.userId || '').trim())
          .filter((id) => id.length > 0)
      );

      let resolvedUserId: string | null = null;

      if (uniqueUserIds.size === 1) {
        resolvedUserId = Array.from(uniqueUserIds)[0];
      } else if (uniqueUserIds.size === 0) {
        resolvedUserId = ownerToUserId[owner] || null;
      } else {
        results.push(`Skipped ${owner}: conflicting userIds detected.`);
        continue;
      }

      if (!resolvedUserId) {
        results.push(`Skipped ${owner}: could not resolve userId.`);
        continue;
      }

      const build = buildLineItems(ownerDogs);
      if (build.lineItems.length === 0) {
        results.push(`Skipped ${owner}: no valid invoice line items.`);
        continue;
      }

      const memo = ownerDogs
        .map((d) => `${d.name} (${d.type}${d.groomingAddOns.length ? ` + grooming: ${d.groomingAddOns.join(', ')}` : ''})`)
        .join('; ')
        .slice(0, 500);

      try {
        await createInvoice({
          businessId: businessIdRaw,
          userId: resolvedUserId,
          lineItems: build.lineItems,
          daysUntilDue,
          reservationIds: ownerDogs.map((d) => d.reservationId),
          memo,
        });

        ownerDogs.forEach((d) => sentDogIds.add(d.id));

        if (build.warnings.length === 0) {
          results.push(`Sent invoice to ${owner}.`);
        } else {
          results.push(`Sent to ${owner} with warnings.`);
        }
      } catch (error) {
        const msg = error instanceof Error ? error.message : 'Unknown invoice error';
        results.push(`Failed for ${owner}: ${msg}`);
      }
    }

    setSelectedDogIds((prev) => {
      const next = new Set(prev);
      sentDogIds.forEach((id) => next.delete(id));
      return next;
    });

    setResultMessages(results);
    setSending(false);
  };

  const buildPreview = () => {
    if (selectedDogIds.size === 0) {
      setErrorMsg('Select at least one dog.');
      return;
    }

    const selectedDogs = dogs.filter((dog) => selectedDogIds.has(dog.id));
    const grouped = selectedDogs.reduce<Record<string, DogOnProperty[]>>((acc, dog) => {
      if (!acc[dog.owner]) acc[dog.owner] = [];
      acc[dog.owner].push(dog);
      return acc;
    }, {});

    const groups: InvoicePreviewGroup[] = Object.entries(grouped).map(([owner, ownerDogs]) => {
      const build = buildLineItems(ownerDogs);

      const lines = build.lineItems.flatMap((line) => {
        const item = invoiceItems.find((x) => x.id === line.itemId);
        if (!item) return [];
        return [{
          id: `${owner}-${line.itemId}`,
          name: item.name,
          quantity: line.quantity,
          unitPriceCents: item.priceCents,
          totalCents: item.priceCents * line.quantity,
        }];
      });

      return {
        id: owner,
        owner,
        dogs: ownerDogs.map((d) => d.name),
        lines,
        totalCents: lines.reduce((sum, l) => sum + l.totalCents, 0),
      };
    });

    setPreviewGroups(groups);
    setShowingPreview(true);
  };

  const currency = (cents: number) =>
    new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(cents / 100);

  return (
    <div className="min-h-screen bg-[color:var(--color-background)] text-[color:var(--color-foreground)] px-4 py-6">
      <main className="w-full max-w-3xl mx-auto">
        <button
          onClick={() => router.push('/en/boardinganddaycaredogsonproperty')}
          className="mb-3 text-sm text-[color:var(--color-accent)] underline"
        >
          ← Back
        </button>

        <h1 className="text-3xl font-bold text-center text-[color:var(--color-accent)]">
          Manual Invoices
        </h1>

        <div className="flex items-center justify-center gap-2 mt-4 mb-2">
          {(['Daycare', 'Boarding'] as FilterType[]).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-3 py-1.5 rounded-full text-sm ${
                filter === f ? 'bg-[#2f855a] text-white' : 'bg-gray-200 text-gray-800'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {loading && <p className="text-center text-sm text-gray-600">Loading...</p>}
        {!loading && errorMsg && <p className="text-center text-sm text-red-600">{errorMsg}</p>}

        {!loading && !errorMsg && (
          <p className="text-center text-sm text-gray-500 mb-4">{filteredDogs.length} total</p>
        )}

        <div className="border rounded-xl bg-white p-4 mb-5">
          <label className="block text-sm font-semibold mb-1">Invoice Due In (Days)</label>
          <input
            type="number"
            min={0}
            max={365}
            value={daysUntilDue}
            onChange={(e) => setDaysUntilDue(Math.max(0, Math.min(365, Number(e.target.value) || 0)))}
            className="w-28 border rounded px-3 py-2 text-sm"
          />
        </div>

        {!loading && !errorMsg && sortedOwners.map((owner) => {
          const ownerDogs = groupedDogs[owner] || [];
          const allSelected = ownerDogs.every((d) => selectedDogIds.has(d.id));
          const hasInvoiced = ownerDogs.some((d) => invoicedReservationIds.has(d.reservationId));

          return (
            <section key={owner} className="rounded-xl border bg-white p-3 mb-4">
              <div className="flex items-center justify-between mb-2">
                <button
                  type="button"
                  onClick={() => toggleOwnerSelection(owner)}
                  className="text-left"
                  disabled={hasInvoiced}
                >
                  <h2 className="font-semibold text-[color:var(--color-accent)] flex items-center gap-2">
                    {formatOwnerName(owner)}
                    {hasInvoiced && <span className="text-green-600">$</span>}
                  </h2>
                </button>

                <input
                  type="checkbox"
                  checked={allSelected}
                  onChange={() => toggleOwnerSelection(owner)}
                  disabled={hasInvoiced}
                  aria-label={`Select all dogs for ${owner}`}
                />
              </div>

              <div className="space-y-2">
                {ownerDogs.map((dog) => {
                  const isAlreadyInvoiced = invoicedReservationIds.has(dog.reservationId);
                  return (
                    <label
                      key={dog.id}
                      className="flex items-start justify-between gap-3 rounded-lg border px-3 py-2"
                    >
                      <div>
                        <div className="font-medium">🐶 {dog.name}</div>
                        <div className="text-sm text-gray-700">Service: <span className="font-semibold">{dog.type}</span></div>
                        {dog.groomingAddOns.length > 0 && (
                          <div className="text-sm text-gray-700">
                            Grooming: <span className="font-semibold">{dog.groomingAddOns.join(', ')}</span>
                          </div>
                        )}
                      </div>

                      <input
                        type="checkbox"
                        checked={selectedDogIds.has(dog.id)}
                        onChange={() => toggleDog(dog.id)}
                        disabled={isAlreadyInvoiced}
                        aria-label={`Select ${dog.name}`}
                      />
                    </label>
                  );
                })}
              </div>
            </section>
          );
        })}

        <div className="mt-6">
          <button
            onClick={buildPreview}
            disabled={sending || selectedDogIds.size === 0}
            className={`w-full py-3 rounded text-white text-sm ${
              sending || selectedDogIds.size === 0
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-[#2c4a30] hover:bg-[#1e3624]'
            }`}
          >
            {sending ? 'Sending...' : `Preview Invoices (${selectedDogIds.size})`}
          </button>
        </div>

        {resultMessages.length > 0 && (
          <div className="mt-5 rounded-xl border bg-white p-4">
            <h3 className="font-semibold mb-2">Results</h3>
            <ul className="space-y-1 text-sm">
              {resultMessages.map((msg, idx) => (
                <li key={`${msg}-${idx}`}>{msg}</li>
              ))}
            </ul>
          </div>
        )}

        {showingPreview && (
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div
              className="absolute inset-0 bg-black/40"
              onClick={() => setShowingPreview(false)}
              aria-hidden="true"
            />
            <div className="relative z-10 w-full max-w-2xl mx-4 max-h-[85vh] overflow-auto rounded-xl border bg-white shadow-xl">
              <div className="px-5 py-4 border-b flex items-center justify-between">
                <h2 className="text-lg font-semibold">Invoice Preview</h2>
                <button
                  onClick={() => setShowingPreview(false)}
                  className="text-sm px-3 py-1 border rounded"
                >
                  Cancel
                </button>
              </div>

              <div className="p-4 space-y-4">
                {previewGroups.map((group) => (
                  <section key={group.id} className="rounded-lg border p-3 bg-gray-50">
                    <h3 className="font-semibold">{group.owner}</h3>
                    <p className="text-sm text-gray-600 mt-1">Dogs: {group.dogs.join(', ')}</p>

                    <div className="my-2 border-t" />

                    <div className="space-y-1">
                      {group.lines.map((line) => (
                        <div key={line.id} className="flex items-center justify-between text-sm">
                          <span>{line.name} x{line.quantity}</span>
                          <span>{currency(line.totalCents)}</span>
                        </div>
                      ))}
                    </div>

                    <div className="my-2 border-t" />

                    <div className="flex items-center justify-between font-semibold text-sm">
                      <span>Subtotal</span>
                      <span>{currency(group.totalCents)}</span>
                    </div>
                  </section>
                ))}

                <p className="text-xs text-gray-500 text-center">Due in {daysUntilDue} days</p>
              </div>

              <div className="px-5 py-3 border-t flex items-center justify-end gap-2">
                <button
                  onClick={() => setShowingPreview(false)}
                  className="px-3 py-2 rounded border border-gray-300 text-sm"
                >
                  Cancel
                </button>
                <button
                  onClick={async () => {
                    setShowingPreview(false);
                    await sendInvoices();
                  }}
                  disabled={sending}
                  className={`px-3 py-2 rounded text-sm text-white ${sending ? 'bg-green-300' : 'bg-green-700 hover:bg-green-600'}`}
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
