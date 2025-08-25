'use client';

import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';

import { getAuth, onAuthStateChanged } from 'firebase/auth';
import {
  getFirestore,
  collection,
  getDocs,
  getDoc,
  setDoc,
  query,
  where,
  Timestamp,
  doc as fsDoc,
} from 'firebase/firestore';

// ===== AKC breeds (partial list; extend as needed) =====
const AKC_BREEDS: string[] = [
  'Affenpinscher','Afghan Hound','Airedale Terrier','Akita','Alaskan Malamute',
  'American Bulldog','American Eskimo Dog','American Foxhound','American Hairless Terrier',
  'American Staffordshire Terrier','American Water Spaniel','Anatolian Shepherd Dog',
  'Australian Cattle Dog','Australian Shepherd','Australian Terrier','Basenji','Basset Hound',
  'Beagle','Bearded Collie','Beauceron','Bedlington Terrier','Belgian Malinois',
  'Belgian Sheepdog','Belgian Tervuren','Bernese Mountain Dog','Bichon Frise','Bloodhound',
  'Border Collie','Border Terrier','Borzoi','Boston Terrier','Bouvier des Flandres',
  'Boxer','Boykin Spaniel','Briard','Brittany','Brussels Griffon','Bull Terrier',
  'Bulldog','Bullmastiff','Cairn Terrier','Cane Corso','Cardigan Welsh Corgi',
  'Cavalier King Charles Spaniel','Chesapeake Bay Retriever','Chihuahua','Chinese Crested',
  'Chinese Shar-Pei','Chow Chow','Clumber Spaniel','Cocker Spaniel','Collie','Coonhound',
  'Corgi','Coton de Tulear','Curly-Coated Retriever','Dachshund','Dalmatian',
  'Dandie Dinmont Terrier','Doberman Pinscher','Dogo Argentino','Dogue de Bordeaux',
  'Dutch Shepherd','English Cocker Spaniel','English Foxhound','English Setter',
  'English Springer Spaniel','English Toy Spaniel','Field Spaniel','Finnish Lapphund',
  'Finnish Spitz','Flat-Coated Retriever','French Bulldog','German Pinscher',
  'German Shepherd Dog','German Shorthaired Pointer','German Wirehaired Pointer',
  'Giant Schnauzer','Glen of Imaal Terrier','Golden Retriever','Gordon Setter',
  'Great Dane','Great Pyrenees','Greater Swiss Mountain Dog','Greyhound',
  'Havanese','Ibizan Hound','Irish Setter','Irish Terrier','Irish Wolfhound',
  'Italian Greyhound','Japanese Chin','Keeshond','Kerry Blue Terrier','Komondor',
  'Kuvasz','Labrador Retriever','Lagotto Romagnolo','Lakeland Terrier','Leonberger',
  'Lhasa Apso','Lowchen','Maltese','Manchester Terrier','Mastiff','Miniature American Shepherd',
  'Miniature Bull Terrier','Miniature Pinscher','Miniature Schnauzer','Neapolitan Mastiff',
  'Newfoundland','Norfolk Terrier','Norwegian Buhund','Norwegian Elkhound','Norwegian Lundehund',
  'Norwich Terrier','Nova Scotia Duck Tolling Retriever','Old English Sheepdog','Otterhound',
  'Papillon','Parson Russell Terrier','Pekingese','Pembroke Welsh Corgi','Petit Basset Griffon Vendéen',
  'Pharaoh Hound','Plott Hound','Pointer','Polish Lowland Sheepdog','Pomeranian','Poodle',
  'Portuguese Podengo Pequeno','Portuguese Water Dog','Pug','Puli','Pyrenean Shepherd',
  'Rat Terrier','Redbone Coonhound','Rhodesian Ridgeback','Rottweiler','Saint Bernard',
  'Saluki','Samoyed','Schipperke','Scottish Deerhound','Scottish Terrier','Sealyham Terrier',
  'Shetland Sheepdog','Shiba Inu','Shih Tzu','Siberian Husky','Silky Terrier',
  'Skye Terrier','Soft Coated Wheaten Terrier','Spinone Italiano','Staffordshire Bull Terrier',
  'Standard Schnauzer','Sussex Spaniel','Swedish Vallhund','Thai Ridgeback','Tibetan Mastiff',
  'Tibetan Spaniel','Tibetan Terrier','Toy Fox Terrier','Treeing Walker Coonhound',
  'Vizsla','Weimaraner','Welsh Springer Spaniel','Welsh Terrier','West Highland White Terrier',
  'Whippet','Wire Fox Terrier','Wirehaired Pointing Griffon','Xoloitzcuintli','Yorkshire Terrier',
].sort();

type OperatingHoursMap = Record<string, { open?: string; close?: string; closed?: 'true' | 'false' }>;

export default function BreederBusinessSettingsPage() {
  const router = useRouter();

  // ===== Business identity (read-only UI) =====
  const [businessId, setBusinessId] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [businessPhone, setBusinessPhone] = useState('');
  const [businessAddress, setBusinessAddress] = useState('');

  // ===== Offerings =====
  const [offersStudServices, setOffersStudServices] = useState(false);
  const [breedsOffered, setBreedsOffered] = useState<string[]>([]);
  const [breedsSearchText, setBreedsSearchText] = useState('');

  // ===== Applications =====
  const [acceptsApplications, setAcceptsApplications] = useState(false);
  const [applicationQuestions, setApplicationQuestions] = useState<string[]>([]);
  const maxQuestions = 25;
  const maxQuestionLength = 200;

  // ===== Contract (versioned subdoc) =====
  const [usesContract, setUsesContract] = useState(false);
  const [contractText, setContractText] = useState('');
  const [contractVersion, setContractVersion] = useState(0);
  const [contractLastUpdatedDisplay, setContractLastUpdatedDisplay] = useState('');

  // ===== Deposits & Pricing =====
  const [depositRequired, setDepositRequired] = useState(false);
  const [depositAmount, setDepositAmount] = useState('');
  const [depositPolicy, setDepositPolicy] = useState('');
  const [basePuppyPrice, setBasePuppyPrice] = useState('');

  // ===== Hours =====
  const [operatingHours, setOperatingHours] = useState<OperatingHoursMap>({});
  const [byAppointmentOnly, setByAppointmentOnly] = useState(true);
  const daysOfWeek = useMemo(
    () => ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    []
  );

  const timeOptions = useMemo(() => {
    const res: string[] = [];
    for (let mins = 5 * 60; mins <= 24 * 60; mins += 15) {
      const h = Math.floor(mins / 60) % 24;
      const m = mins % 60;
      const period = h < 12 ? 'AM' : 'PM';
      const hr12 = h === 0 || h === 12 ? 12 : h % 12;
      res.push(`${hr12}:${m.toString().padStart(2, '0')} ${period}`);
    }
    return res;
  }, []);

  // ===== UI state =====
  const [isLoading, setIsLoading] = useState(true);
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);
  const [showingSavePrompt, setShowingSavePrompt] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [showSaveToast, setShowSaveToast] = useState(false);

  // Warn on browser close if unsaved changes
  useEffect(() => {
    const handler = (e: BeforeUnloadEvent) => {
      if (!hasUnsavedChanges) return;
      e.preventDefault();
      e.returnValue = '';
    };
    window.addEventListener('beforeunload', handler);
    return () => window.removeEventListener('beforeunload', handler);
  }, [hasUnsavedChanges]);

  const flagUnsaved = useCallback(() => setHasUnsavedChanges(true), []);

  const showSavedToast = useCallback(() => {
    setShowSaveToast(true);
    window.setTimeout(() => setShowSaveToast(false), 2000);
  }, []);

  // ===== Load business on auth =====
  const loadBusiness = useCallback(async (uid: string) => {
    setIsLoading(true);
    try {
      const db = getFirestore();
      const q = query(collection(db, 'businesses'), where('ownerId', '==', uid));
      const snap = await getDocs(q);

      if (snap.empty) {
        setAlertMessage('No business found for this user.');
        setShowAlert(true);
        setIsLoading(false);
        return;
      }

      const firstDoc = snap.docs[0];
      const businessRef = firstDoc.ref;
      setBusinessId(firstDoc.id);

      const data = firstDoc.data() as Record<string, unknown>;

      setBusinessName((data.businessName as string) ?? '');
      setBusinessPhone((data.businessPhone as string) ?? '');

      const addr = (data.businessAddress as Record<string, unknown>) ?? {};
      const street = (addr.street as string) ?? '';
      const city = (addr.city as string) ?? '';
      const state = (addr.state as string) ?? '';
      const zip = (addr.zipCode as string) ?? '';
      setBusinessAddress([street, city, state, zip].filter(Boolean).join(', '));

      // Offerings
      setOffersStudServices(Boolean(data.offersStudServices));
      const breeds = (data.breedsOffered as string[]) ?? [];
      setBreedsOffered([...breeds].sort());

      // Applications
      const accApps = Boolean(data.acceptsApplications);
      setAcceptsApplications(accApps);
      let qs = (data.applicationQuestions as string[]) ?? (accApps ? [''] : []);
      if (accApps && qs.length === 0) qs = [''];
      if (qs.length > maxQuestions) qs = qs.slice(0, maxQuestions);
      setApplicationQuestions(qs);

      // Contract mirror
      setUsesContract(Boolean(data.usesContract));
      const rootContractTS = data.contractLastUpdated as Timestamp | undefined;
      setContractLastUpdatedDisplay(
        rootContractTS ? rootContractTS.toDate().toLocaleString() : ''
      );

      // Deposits & Pricing
      setDepositRequired(Boolean(data.depositRequired));
      setDepositAmount((data.depositAmount as string) ?? '');
      setDepositPolicy((data.depositPolicy as string) ?? '');
      setBasePuppyPrice((data.basePuppyPrice as string) ?? '');

      // Hours
      setOperatingHours(((data.operatingHours as OperatingHoursMap) ?? {}) as OperatingHoursMap);
      setByAppointmentOnly(
        typeof data.byAppointmentOnly === 'boolean' ? (data.byAppointmentOnly as boolean) : true
      );

      // Load contract subdoc (text + version)
      const contractRef = fsDoc(collection(businessRef, 'settings'), 'buyerContract');
      const contractSnap = await getDoc(contractRef);
      const cData = (contractSnap.data() as Record<string, unknown>) ?? {};
      setContractText((cData.contractText as string) ?? '');
      const ver = typeof cData.contractVersion === 'number' ? (cData.contractVersion as number) : 0;
      setContractVersion(ver);

      const last = cData.lastUpdated as Timestamp | undefined;
      if (last) setContractLastUpdatedDisplay(last.toDate().toLocaleString());
    } catch (err) {
      console.error('fetchBusiness error:', err);
      setAlertMessage('Failed to load settings.');
      setShowAlert(true);
    } finally {
      setIsLoading(false);
    }
  }, [maxQuestions]);

  useEffect(() => {
    const auth = getAuth();
    const unsub = onAuthStateChanged(auth, (user) => {
      if (!user) {
        setAlertMessage('Please log in to view your breeder settings.');
        setShowAlert(true);
        setIsLoading(false);
        return;
      }
      void loadBusiness(user.uid);
    });
    return () => unsub();
  }, [loadBusiness]);

  // ===== Derived data =====
  const filteredBreeds = useMemo(() => {
    const q = breedsSearchText.trim().toLowerCase();
    if (!q) return AKC_BREEDS;
    return AKC_BREEDS.filter((b) => b.toLowerCase().includes(q));
  }, [breedsSearchText]);

  const sortedSelectedBreeds = useMemo(() => [...breedsOffered].sort(), [breedsOffered]);

  // ===== Handlers =====
  const toggleBreed = useCallback((breed: string, on: boolean) => {
    setBreedsOffered((prev) => {
      if (on) {
        if (prev.includes(breed)) return prev;
        return [...prev, breed];
      }
      return prev.filter((b) => b !== breed);
    });
    flagUnsaved();
  }, [flagUnsaved]);

  const removeBreedChip = useCallback((breed: string) => {
    setBreedsOffered((prev) => prev.filter((b) => b !== breed));
    flagUnsaved();
  }, [flagUnsaved]);

  const addQuestion = useCallback(() => {
    setApplicationQuestions((prev) => {
      if (prev.length >= maxQuestions) return prev;
      return [...prev, ''];
    });
    flagUnsaved();
  }, [flagUnsaved, maxQuestions]);

  const updateQuestion = useCallback((i: number, val: string) => {
    setApplicationQuestions((prev) => {
      const copy = [...prev];
      copy[i] = val.slice(0, maxQuestionLength);
      return copy;
    });
    flagUnsaved();
  }, [flagUnsaved]);

  const removeQuestion = useCallback((i: number) => {
    setApplicationQuestions((prev) => prev.filter((_, idx) => idx !== i));
    flagUnsaved();
  }, [flagUnsaved]);

  const setDayClosed = useCallback((day: string, closed: boolean) => {
    setOperatingHours((prev) => {
      const map = { ...(prev[day] ?? {}) };
      map.closed = closed ? 'true' : 'false';
      return { ...prev, [day]: map };
    });
    flagUnsaved();
  }, [flagUnsaved]);

  const setDayOpenTime = useCallback((day: string, val: string) => {
    setOperatingHours((prev) => {
      const map = { ...(prev[day] ?? {}) };
      map.open = val;
      return { ...prev, [day]: map };
    });
    flagUnsaved();
  }, [flagUnsaved]);

  const setDayCloseTime = useCallback((day: string, val: string) => {
    setOperatingHours((prev) => {
      const map = { ...(prev[day] ?? {}) };
      map.close = val;
      return { ...prev, [day]: map };
    });
    flagUnsaved();
  }, [flagUnsaved]);

  const saveSettings = useCallback(async () => {
    if (!businessId) return;
    try {
      const db = getFirestore();
      const businessRef = fsDoc(db, 'businesses', businessId);
      const contractRef = fsDoc(collection(businessRef, 'settings'), 'buyerContract');

      // Clean lists
      const cleanedBreeds = Array.from(
        new Set(breedsOffered.map((s) => s.trim()).filter(Boolean))
      ).sort();

      const cleanedQuestions = applicationQuestions
        .map((s) => s.trim())
        .filter(Boolean)
        .slice(0, maxQuestions);

      // Root update (merge to avoid overwrites)
      const rootUpdate = {
        businessType: 'Breeder',
        offersStudServices,
        breedsOffered: cleanedBreeds,
        acceptsApplications,
        applicationQuestions: cleanedQuestions,
        depositRequired,
        depositAmount,
        depositPolicy,
        basePuppyPrice,
        operatingHours,
        byAppointmentOnly,
        usesContract,
      };

      await setDoc(businessRef, rootUpdate, { merge: true });

      if (!usesContract) {
        setHasUnsavedChanges(false);
        showSavedToast();
        return;
      }

      // Contract versioning
      const existingSnap = await getDoc(contractRef);
      const existing = (existingSnap.data() as Record<string, unknown>) ?? {};
      const oldText = (existing.contractText as string) ?? '';
      const oldVersion = (existing.contractVersion as number) ?? 0;

      const changed = oldText !== contractText;
      const newVersion = Math.max(1, changed ? oldVersion + 1 : oldVersion);
      const lastUpdatedDate = changed
        ? new Date()
        : ((existing.lastUpdated as Timestamp | undefined)?.toDate() ?? new Date());

      const payload = {
        contractText,
        contractVersion: newVersion,
        lastUpdated: Timestamp.fromDate(lastUpdatedDate),
      };

      await setDoc(contractRef, payload, { merge: true });
      await setDoc(businessRef, { contractLastUpdated: Timestamp.fromDate(lastUpdatedDate) }, { merge: true });

      setContractVersion(newVersion);
      setContractLastUpdatedDisplay(lastUpdatedDate.toLocaleString());
      setHasUnsavedChanges(false);
      showSavedToast();
    } catch (err) {
      console.error('saveSettings error:', err);
      setAlertMessage('Failed to save settings.');
      setShowAlert(true);
    }
  }, [
    businessId,
    breedsOffered,
    applicationQuestions,
    maxQuestions,
    offersStudServices,
    acceptsApplications,
    depositRequired,
    depositAmount,
    depositPolicy,
    basePuppyPrice,
    operatingHours,
    byAppointmentOnly,
    usesContract,
    contractText,
    showSavedToast,
  ]);

  const onBack = useCallback(() => {
    if (hasUnsavedChanges) {
      setShowingSavePrompt(true);
    } else {
      router.back();
    }
  }, [hasUnsavedChanges, router]);

  // ===== Render =====
  return (
    <main className="mx-auto w-full max-w-2xl px-4 py-6">
      {/* Header */}
      <div className="mb-4 flex items-center justify-between">
        <button
          type="button"
          onClick={onBack}
          className="rounded-xl border border-gray-300 px-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          ← Back
        </button>
        <h1 className="text-center text-xl font-bold text-[#2c4a30] sm:text-2xl">
          Breeder Business Settings
        </h1>
        <button
          type="button"
          onClick={saveSettings}
          disabled={isLoading || !businessId}
          className="rounded-xl bg-[#2c4a30] px-4 py-1.5 text-sm font-semibold text-white shadow-sm disabled:opacity-50"
        >
          Save
        </button>
      </div>

      {showAlert && (
        <div className="mb-4 rounded-xl border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">
          {alertMessage}
        </div>
      )}

      {isLoading ? (
        <div className="py-10 text-center text-gray-500">Loading…</div>
      ) : (
        <div className="space-y-8">
          {/* General Info (read-only) */}
          <section>
            <div className="mb-2 text-center text-lg font-semibold text-[#2c4a30]">
              General Information
            </div>
            <div className="space-y-3">
              <div>
                <label className="mb-1 block text-sm text-gray-700">Business Name</label>
                <input
                  value={businessName}
                  disabled
                  className="w-full rounded-lg border border-gray-300 bg-gray-100 px-3 py-2 text-gray-700"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm text-gray-700">Business Phone</label>
                <input
                  value={businessPhone}
                  disabled
                  className="w-full rounded-lg border border-gray-300 bg-gray-100 px-3 py-2 text-gray-700"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm text-gray-700">Business Address</label>
                <input
                  value={businessAddress}
                  disabled
                  className="w-full rounded-lg border border-gray-300 bg-gray-100 px-3 py-2 text-gray-700"
                />
              </div>
            </div>
          </section>

          {/* Offerings */}
          <section>
            <div className="mb-2 text-center text-lg font-semibold text-[#2c4a30]">Offerings</div>
            <div className="space-y-4">
              <label className="flex items-center gap-2 text-sm text-gray-800">
                <input
                  type="checkbox"
                  checked={offersStudServices}
                  onChange={(e) => {
                    setOffersStudServices(e.target.checked);
                    flagUnsaved();
                  }}
                />
                Offer stud services
              </label>

              <div>
                <div className="mb-1 text-sm text-gray-600">Breeds Offered</div>

                {/* Selected chips */}
                {sortedSelectedBreeds.length > 0 && (
                  <div className="mb-2 flex flex-wrap gap-2">
                    {sortedSelectedBreeds.map((breed) => (
                      <span
                        key={breed}
                        className="inline-flex items-center gap-1 rounded-full bg-gray-100 px-2.5 py-1 text-xs text-gray-700"
                      >
                        {breed}
                        <button
                          type="button"
                          onClick={() => removeBreedChip(breed)}
                          aria-label={`Remove ${breed}`}
                          className="rounded-full p-0.5 hover:bg-gray-200"
                        >
                          ✕
                        </button>
                      </span>
                    ))}
                  </div>
                )}

                {/* Search */}
                <input
                  value={breedsSearchText}
                  onChange={(e) => setBreedsSearchText(e.target.value)}
                  placeholder="Search breeds…"
                  className="mb-2 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm"
                />

                {/* Filtered list */}
                <div className="grid max-h-56 grid-cols-1 gap-1 overflow-auto rounded-lg border border-gray-200 p-2">
                  {filteredBreeds.length === 0 ? (
                    <div className="px-1 py-1 text-xs text-gray-500">No breeds found</div>
                  ) : (
                    filteredBreeds.map((breed) => {
                      const on = breedsOffered.includes(breed);
                      return (
                        <label key={breed} className="flex items-center gap-2 text-sm">
                          <input
                            type="checkbox"
                            checked={on}
                            onChange={(e) => toggleBreed(breed, e.target.checked)}
                          />
                          {breed}
                        </label>
                      );
                    })
                  )}
                </div>
              </div>
            </div>
          </section>

          {/* Applications */}
          <section>
            <div className="mb-2 text-center text-lg font-semibold text-[#2c4a30]">Applications</div>
            <div className="space-y-4">
              <label className="flex items-center gap-2 text-sm text-gray-800">
                <input
                  type="checkbox"
                  checked={acceptsApplications}
                  onChange={(e) => {
                    const next = e.target.checked;
                    setAcceptsApplications(next);
                    setApplicationQuestions((prev) => {
                      if (!next) return prev; // keep current in memory
                      return prev.length === 0 ? [''] : prev.slice(0, maxQuestions);
                    });
                    flagUnsaved();
                  }}
                />
                Accept puppy applications
              </label>

              {acceptsApplications && (
                <div className="space-y-3">
                  <div className="text-xs text-gray-600">Custom questions (max 25)</div>
                  <div className="space-y-2">
                    {applicationQuestions.map((q, i) => (
                      <div key={`${i}-${q.slice(0, 8)}`} className="flex items-start gap-2">
                        <div className="pt-2 text-xs text-gray-500">{i + 1}.</div>
                        <textarea
                          value={q}
                          onChange={(e) => updateQuestion(i, e.target.value)}
                          rows={2}
                          className="min-h-[38px] w-full rounded-lg border border-gray-300 px-3 py-2 text-sm"
                          placeholder={`Question ${i + 1}`}
                        />
                        {applicationQuestions.length > 1 && (
                          <button
                            type="button"
                            onClick={() => removeQuestion(i)}
                            className="rounded-lg px-2 py-1 text-xs text-red-600 hover:bg-red-50"
                            aria-label="Remove question"
                          >
                            Remove
                          </button>
                        )}
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <button
                      type="button"
                      onClick={addQuestion}
                      disabled={applicationQuestions.length >= maxQuestions}
                      className="rounded-xl border border-gray-300 px-3 py-1.5 text-sm hover:bg-gray-50 disabled:opacity-50"
                    >
                      + Add question
                    </button>
                    <div className="text-xs text-gray-500">
                      {applicationQuestions.length} of {maxQuestions}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </section>

          {/* Contract */}
          <section>
            <div className="mb-2 text-center text-lg font-semibold text-[#2c4a30]">Buyer Contract</div>
            <div className="space-y-3">
              <label className="flex items-center gap-2 text-sm text-gray-800">
                <input
                  type="checkbox"
                  checked={usesContract}
                  onChange={(e) => {
                    setUsesContract(e.target.checked);
                    flagUnsaved();
                  }}
                />
                Use a purchase contract
              </label>

              {usesContract && (
                <>
                  {(contractVersion > 0 || contractLastUpdatedDisplay) && (
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <div>Version {contractVersion || 1}</div>
                      <div>{contractLastUpdatedDisplay}</div>
                    </div>
                  )}

                  <div className="relative">
                    {contractText.trim().length === 0 && (
                      <div className="pointer-events-none absolute left-3 top-2 text-sm text-gray-400">
                        Enter contract text…
                      </div>
                    )}
                    <textarea
                      value={contractText}
                      onChange={(e) => {
                        setContractText(e.target.value);
                        flagUnsaved();
                      }}
                      rows={12}
                      className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm"
                    />
                  </div>
                </>
              )}
            </div>
          </section>

          {/* Deposits & Pricing */}
          <section>
            <div className="mb-2 text-center text-lg font-semibold text-[#2c4a30]">
              Deposits &amp; Pricing
            </div>
            <div className="space-y-3">
              <label className="flex items-center gap-2 text-sm text-gray-800">
                <input
                  type="checkbox"
                  checked={depositRequired}
                  onChange={(e) => {
                    setDepositRequired(e.target.checked);
                    flagUnsaved();
                  }}
                />
                Deposit required
              </label>

              {depositRequired && (
                <div>
                  <label className="mb-1 block text-sm text-gray-700">
                    Deposit amount (e.g. $300)
                  </label>
                  <input
                    value={depositAmount}
                    onChange={(e) => {
                      setDepositAmount(e.target.value);
                      flagUnsaved();
                    }}
                    className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm"
                  />
                </div>
              )}

              <div>
                <label className="mb-1 block text-sm text-gray-700">Deposit policy (free text)</label>
                <textarea
                  value={depositPolicy}
                  onChange={(e) => {
                    setDepositPolicy(e.target.value);
                    flagUnsaved();
                  }}
                  rows={3}
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm"
                />
              </div>

              <div>
                <label className="mb-1 block text-sm text-gray-700">
                  Base puppy price (e.g. $1800)
                </label>
                <input
                  value={basePuppyPrice}
                  onChange={(e) => {
                    setBasePuppyPrice(e.target.value);
                    flagUnsaved();
                  }}
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm"
                />
              </div>
            </div>
          </section>

          {/* Operating Hours */}
          <section>
            <div className="mb-2 text-center text-lg font-semibold text-[#2c4a30]">
              Operating Hours
            </div>

            <label className="mb-3 flex items-center gap-2 text-sm text-gray-800">
              <input
                type="checkbox"
                checked={byAppointmentOnly}
                onChange={(e) => {
                  setByAppointmentOnly(e.target.checked);
                  flagUnsaved();
                }}
              />
              By appointment only
            </label>

            <div className="space-y-4">
              {daysOfWeek.map((day) => {
                const info = operatingHours[day] ?? {};
                const closed = (info.closed ?? 'false') === 'true';

                return (
                  <div key={day} className="rounded-xl border border-gray-200 p-3">
                    <div className="mb-2 font-semibold">{day}</div>

                    <label className="mb-2 flex items-center gap-2 text-sm text-gray-800">
                      <input
                        type="checkbox"
                        checked={closed}
                        onChange={(e) => setDayClosed(day, e.target.checked)}
                      />
                      Closed on this day
                    </label>

                    {!closed && (
                      <div className="grid grid-cols-2 gap-3 sm:max-w-xs">
                        <div>
                          <div className="mb-1 text-xs text-gray-500">Open</div>
                          <select
                            value={info.open ?? '9:00 AM'}
                            onChange={(e) => setDayOpenTime(day, e.target.value)}
                            className="w-full rounded-lg border border-gray-300 px-2 py-2 text-sm"
                          >
                            {timeOptions.map((t) => (
                              <option key={`open-${day}-${t}`} value={t}>
                                {t}
                              </option>
                            ))}
                          </select>
                        </div>

                        <div>
                          <div className="mb-1 text-xs text-gray-500">Close</div>
                          <select
                            value={info.close ?? '5:00 PM'}
                            onChange={(e) => setDayCloseTime(day, e.target.value)}
                            className="w-full rounded-lg border border-gray-300 px-2 py-2 text-sm"
                          >
                            {timeOptions.map((t) => (
                              <option key={`close-${day}-${t}`} value={t}>
                                {t}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>
        </div>
      )}

      {/* Save Toast */}
      {showSaveToast && (
        <div className="fixed left-1/2 top-4 z-50 -translate-x-1/2 rounded-2xl bg-[#2c4a30] px-4 py-2 text-sm font-semibold text-white shadow-lg">
          Settings saved
        </div>
      )}

      {/* Save prompt (Back) */}
      {showingSavePrompt && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
          <div className="w-full max-w-sm rounded-2xl bg-white p-4 shadow-xl">
            <div className="mb-2 text-base font-semibold">Save changes?</div>
            <div className="mb-4 text-sm text-gray-600">
              You have unsaved changes. Would you like to save before leaving?
            </div>
            <div className="flex justify-end gap-2">
              <button
                type="button"
                onClick={() => setShowingSavePrompt(false)}
                className="rounded-xl border border-gray-300 px-3 py-1.5 text-sm hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={() => {
                  setShowingSavePrompt(false);
                  void (async () => {
                    await saveSettings();
                    router.back();
                  })();
                }}
                className="rounded-xl bg-[#2c4a30] px-3 py-1.5 text-sm font-semibold text-white"
              >
                Save
              </button>
              <button
                type="button"
                onClick={() => {
                  setShowingSavePrompt(false);
                  router.back();
                }}
                className="rounded-xl bg-red-50 px-3 py-1.5 text-sm font-semibold text-red-700 hover:bg-red-100"
              >
                Discard
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
