'use client';

import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useLocale } from 'next-intl';

import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import type { User } from 'firebase/auth';
import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
  addDoc,
  setDoc,
  doc,
  Timestamp,
  serverTimestamp,
  deleteField,
} from 'firebase/firestore';
import type { DocumentData, QuerySnapshot } from 'firebase/firestore';

// ---------- Firebase bootstrap ----------
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY!,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN!,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID!,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET!,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID!,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID!,
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// ---------- Types ----------
type Gender = 'Male' | 'Female';
type Status = 'active' | 'retired' | 'rehomed' | 'deceased';

interface BreedingDog {
  id: string;
  dogName: string;
  dateOfBirth: Date;
  breed: string;
  gender: Gender;
  status: Status;
  microchipNumber?: string;
  bodyWeightLbs?: number;
  bodyWeightUpdatedAt?: Date;
  createdAt?: Date;
  updatedAt?: Date;
}

// ---------- Breed list (condensed) ----------
const AKC_BREEDS: string[] = [
  'Affenpinscher', 'Afghan Hound', 'Airedale Terrier', 'Akita', 'Alaskan Malamute',
  'American Bulldog', 'American Eskimo Dog', 'American Foxhound', 'American Hairless Terrier',
  'American Staffordshire Terrier', 'American Water Spaniel', 'Anatolian Shepherd Dog',
  'Australian Cattle Dog', 'Australian Shepherd', 'Australian Terrier', 'Basenji', 'Basset Hound',
  'Beagle', 'Bearded Collie', 'Beauceron', 'Bedlington Terrier', 'Belgian Malinois',
  'Belgian Sheepdog', 'Belgian Tervuren', 'Bernese Mountain Dog', 'Bichon Frise', 'Bloodhound',
  'Border Collie', 'Border Terrier', 'Borzoi', 'Boston Terrier', 'Bouvier des Flandres',
  'Boxer', 'Boykin Spaniel', 'Briard', 'Brittany', 'Brussels Griffon', 'Bull Terrier',
  'Bulldog', 'Bullmastiff', 'Cairn Terrier', 'Cane Corso', 'Cardigan Welsh Corgi',
  'Cavalier King Charles Spaniel', 'Chesapeake Bay Retriever', 'Chihuahua', 'Chinese Crested',
  'Chinese Shar-Pei', 'Chow Chow', 'Clumber Spaniel', 'Cocker Spaniel', 'Collie', 'Coonhound',
  'Corgi', 'Coton de Tulear', 'Curly-Coated Retriever', 'Dachshund', 'Dalmatian',
  'Dandie Dinmont Terrier', 'Doberman Pinscher', 'Dogo Argentino', 'Dogue de Bordeaux',
  'Dutch Shepherd', 'English Cocker Spaniel', 'English Foxhound', 'English Setter',
  'English Springer Spaniel', 'English Toy Spaniel', 'Field Spaniel', 'Finnish Lapphund',
  'Finnish Spitz', 'Flat-Coated Retriever', 'French Bulldog', 'German Pinscher',
  'German Shepherd Dog', 'German Shorthaired Pointer', 'German Wirehaired Pointer',
  'Giant Schnauzer', 'Glen of Imaal Terrier', 'Golden Retriever', 'Gordon Setter',
  'Great Dane', 'Great Pyrenees', 'Greater Swiss Mountain Dog', 'Greyhound',
  'Havanese', 'Ibizan Hound', 'Irish Setter', 'Irish Terrier', 'Irish Wolfhound',
  'Italian Greyhound', 'Japanese Chin', 'Keeshond', 'Kerry Blue Terrier', 'Komondor',
  'Kuvasz', 'Labrador Retriever', 'Lagotto Romagnolo', 'Lakeland Terrier', 'Leonberger',
  'Lhasa Apso', 'Lowchen', 'Maltese', 'Manchester Terrier', 'Mastiff', 'Miniature American Shepherd',
  'Miniature Bull Terrier', 'Miniature Pinscher', 'Miniature Schnauzer', 'Neapolitan Mastiff',
  'Newfoundland', 'Norfolk Terrier', 'Norwegian Buhund', 'Norwegian Elkhound', 'Norwegian Lundehund',
  'Norwich Terrier', 'Nova Scotia Duck Tolling Retriever', 'Old English Sheepdog', 'Otterhound',
  'Papillon', 'Parson Russell Terrier', 'Pekingese', 'Pembroke Welsh Corgi', 'Petit Basset Griffon Vendéen',
  'Pharaoh Hound', 'Plott Hound', 'Pointer', 'Polish Lowland Sheepdog', 'Pomeranian', 'Poodle',
  'Portuguese Podengo Pequeno', 'Portuguese Water Dog', 'Pug', 'Puli', 'Pyrenean Shepherd',
  'Rat Terrier', 'Redbone Coonhound', 'Rhodesian Ridgeback', 'Rottweiler', 'Saint Bernard',
  'Saluki', 'Samoyed', 'Schipperke', 'Scottish Deerhound', 'Scottish Terrier', 'Sealyham Terrier',
  'Shetland Sheepdog', 'Shiba Inu', 'Shih Tzu', 'Siberian Husky', 'Silky Terrier',
  'Skye Terrier', 'Soft Coated Wheaten Terrier', 'Spinone Italiano', 'Staffordshire Bull Terrier',
  'Standard Schnauzer', 'Sussex Spaniel', 'Swedish Vallhund', 'Thai Ridgeback', 'Tibetan Mastiff',
  'Tibetan Spaniel', 'Tibetan Terrier', 'Toy Fox Terrier', 'Treeing Walker Coonhound',
  'Vizsla', 'Weimaraner', 'Welsh Springer Spaniel', 'Welsh Terrier', 'West Highland White Terrier',
  'Whippet', 'Wire Fox Terrier', 'Wirehaired Pointing Griffon', 'Xoloitzcuintli', 'Yorkshire Terrier',
].sort();

// ---------- Utilities ----------
const isNonEmptyKey = (s: string) => s.trim().length > 0;

const toDateInputValue = (d: Date) => {
  const off = d.getTimezoneOffset();
  const dt = new Date(d.getTime() - off * 60 * 1000);
  return dt.toISOString().slice(0, 10);
};

const ageString = (dob: Date): string => {
  const now = new Date();
  if (dob > now) return '0 mos';
  const ms = now.getTime() - dob.getTime();
  const weeks = Math.floor(ms / (7 * 24 * 60 * 60 * 1000));
  if (weeks < 8) return `${weeks} wks`;
  let months =
    (now.getFullYear() - dob.getFullYear()) * 12 + (now.getMonth() - dob.getMonth());
  if (now.getDate() < dob.getDate()) months -= 1;
  if (months < 24) return `${months} mos`;
  const years = Math.floor(months / 12);
  const rem = months % 12;
  return rem === 0 ? `${years} yrs` : `${years} yrs ${rem} mos`;
};

const mapDocToDog = (id: string, data: Record<string, unknown>): BreedingDog | null => {
  const dogName = (data.dogName as string) ?? '';
  const dobTs = data.dateOfBirth as Timestamp | undefined;
  const breed = (data.breed as string) ?? '';
  const gender = (data.gender as Gender | undefined) ?? undefined;
  const status = (data.status as Status | undefined) ?? undefined;
  if (!dogName || !dobTs || !breed || !gender || !status) return null;

  const bodyWeightLbs =
    typeof data.bodyWeightLbs === 'number'
      ? (data.bodyWeightLbs as number)
      : typeof data.bodyWeightLbs === 'string'
        ? Number(data.bodyWeightLbs)
        : undefined;

  return {
    id,
    dogName,
    dateOfBirth: dobTs.toDate(),
    breed,
    gender,
    status,
    microchipNumber: (data.microchipNumber as string) || undefined,
    bodyWeightLbs: Number.isFinite(bodyWeightLbs) ? (bodyWeightLbs as number) : undefined,
    bodyWeightUpdatedAt:
      (data.bodyWeightUpdatedAt as Timestamp | undefined)?.toDate() ?? undefined,
    createdAt: (data.createdAt as Timestamp | undefined)?.toDate() ?? undefined,
    updatedAt: (data.updatedAt as Timestamp | undefined)?.toDate() ?? undefined,
  };
};

const pickBusinessId = (snap: QuerySnapshot<DocumentData>): string | null => {
  const docs = snap.docs;
  if (docs.length === 0) return null;
  const breeder = docs.find((d) => String(d.data()?.businessType ?? '').toLowerCase() === 'breeder');
  if (breeder) return breeder.id;
  return docs[0].id ?? null;
};

// ---------- Page ----------
export default function BreederMyDogsPage() {
  const router = useRouter();
  const locale = useLocale();
  const searchParams = useSearchParams();
  const businessIdFromURL = searchParams.get('businessId') ?? '';

  const [businessId, setBusinessId] = useState<string>('');
  const [dogs, setDogs] = useState<BreedingDog[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [loadError, setLoadError] = useState<string | null>(null);

  const [showAdd, setShowAdd] = useState<boolean>(false);
  const [editDog, setEditDog] = useState<BreedingDog | null>(null);

  const backHref = useMemo(() => `/${locale}/breederdashboard`, [locale]);

  // Resolve business by URL param (preferred) or by ownership
  const resolveOwnerBusinessId = useCallback(async (uid: string): Promise<string | null> => {
    try {
      const q1 = query(collection(db, 'businesses'), where('ownerIds', 'array-contains', uid));
      const r1 = await getDocs(q1);
      const chosen1 = pickBusinessId(r1);
      if (chosen1) return chosen1;
    } catch {
      // ignore
    }
    try {
      const q2 = query(collection(db, 'businesses'), where('ownerId', '==', uid));
      const r2 = await getDocs(q2);
      const chosen2 = pickBusinessId(r2);
      if (chosen2) return chosen2;
    } catch {
      // ignore
    }
    return null;
  }, []);

  // Load dogs for a specific business id
  const loadDogsById = useCallback(
    async (id: string, showSpinner: boolean) => {
      if (!isNonEmptyKey(id)) return;
      setLoadError(null);
      if (showSpinner) setIsLoading(true);
      try {
        const colRef = collection(db, 'businesses', id, 'breedingDogs');
        const snap = await getDocs(colRef);
        const loaded: BreedingDog[] = [];
        snap.forEach((d) => {
          const dog = mapDocToDog(d.id, d.data());
          if (dog) loaded.push(dog);
        });
        setDogs(loaded);
      } catch {
        setLoadError('Unable to load dogs. Please try again.');
      } finally {
        setIsLoading(false);
      }
    },
    []
  );

  // Auth gate + bootstrap
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (user: User | null) => {
      if (!user) {
        router.push(`/${locale}/loginsignup`);
        return;
      }
      if (isNonEmptyKey(businessIdFromURL)) {
        setBusinessId(businessIdFromURL);
        return;
      }
      const resolved = await resolveOwnerBusinessId(user.uid);
      if (!resolved) {
        setLoadError('We could not find a breeder account for this login.');
        return;
      }
      setBusinessId(resolved);
    });
    return () => unsub();
  }, [businessIdFromURL, locale, resolveOwnerBusinessId, router]);

  // When businessId becomes available/stable, load dogs
  useEffect(() => {
    if (isNonEmptyKey(businessId)) {
      void loadDogsById(businessId, true);
    }
  }, [businessId, loadDogsById]);

  // Derived: sections
  const males = useMemo(
    () =>
      dogs
        .filter((d) => d.gender === 'Male')
        .sort((a, b) => a.dogName.localeCompare(b.dogName, undefined, { sensitivity: 'base' })),
    [dogs]
  );
  const females = useMemo(
    () =>
      dogs
        .filter((d) => d.gender === 'Female')
        .sort((a, b) => a.dogName.localeCompare(b.dogName, undefined, { sensitivity: 'base' })),
    [dogs]
  );

  // Optimistic onSaved handlers
  const handleAddSaved = useCallback(
    async (newDog: BreedingDog) => {
      setDogs((prev) => [...prev, newDog]);
      setShowAdd(false);
      if (isNonEmptyKey(businessId)) {
        void loadDogsById(businessId, false);
      }
    },
    [businessId, loadDogsById]
  );

  const handleEditSaved = useCallback(
    async (updated: BreedingDog) => {
      setDogs((prev) => prev.map((d) => (d.id === updated.id ? updated : d)));
      setEditDog(null);
      if (isNonEmptyKey(businessId)) {
        void loadDogsById(businessId, false);
      }
    },
    [businessId, loadDogsById]
  );

  return (
    <div className="min-h-screen bg-[color:var(--color-background)] text-[color:var(--color-foreground)] px-4 py-6">
      <div className="mx-auto w-full max-w-2xl">
        <button
          onClick={() => router.push(backHref)}
          className="mb-4 text-sm text-[color:var(--color-accent)] underline hover:opacity-90"
        >
          ← Back to Dashboard
        </button>

        <h1 className="text-center text-3xl font-bold text-[color:var(--color-accent)]">
          Breeding Dogs
        </h1>

        <div className="mx-auto mt-4 mb-6 w-full">
          <button
            type="button"
            onClick={() => setShowAdd(true)}
            disabled={!isNonEmptyKey(businessId)}
            style={{ backgroundColor: '#2c4a30', borderColor: '#2c4a30', color: '#ffffff' }}
            className="w-full rounded-xl px-4 py-3 font-semibold shadow-md
               border text-white hover:opacity-90
               focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2c4a30]
               disabled:cursor-not-allowed disabled:bg-[#9fb5a5] disabled:border-[#9fb5a5]"
          >
            Add New Dog
          </button>
        </div>

        {isLoading && dogs.length === 0 ? (
          <div className="py-6 text-center text-gray-600">Loading…</div>
        ) : loadError ? (
          <div className="py-4 text-center text-red-600 whitespace-pre-wrap">{loadError}</div>
        ) : dogs.length === 0 ? (
          <div className="mt-2 rounded-lg border bg-white p-4 text-center text-gray-600">
            No breeding dogs added yet.
          </div>
        ) : (
          <div className="mt-2 space-y-6">
            {males.length > 0 && (
              <Section title="Males">
                {males.map((dog) => (
                  <DogRow key={dog.id} dog={dog} onEdit={() => setEditDog(dog)} />
                ))}
              </Section>
            )}
            {females.length > 0 && (
              <Section title="Females">
                {females.map((dog) => (
                  <DogRow key={dog.id} dog={dog} onEdit={() => setEditDog(dog)} />
                ))}
              </Section>
            )}
          </div>
        )}
      </div>

      {/* Add modal */}
      {showAdd && (
        <AddEditDogModal
          businessId={businessId}
          mode="add"
          onClose={() => setShowAdd(false)}
          onSaved={handleAddSaved}
        />
      )}

      {/* Edit modal */}
      {editDog && (
        <AddEditDogModal
          businessId={businessId}
          mode="edit"
          existingDog={editDog}
          onClose={() => setEditDog(null)}
          onSaved={handleEditSaved}
        />
      )}
    </div>
  );
}

// ---------- Section ----------
function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <div className="mb-2 px-2 text-lg font-semibold text-[color:var(--color-accent)]">
        {title}
      </div>
      <div className="space-y-3">{children}</div>
    </section>
  );
}

// ---------- Dog Row ----------
function DogRow({ dog, onEdit }: { dog: BreedingDog; onEdit: () => void }) {
  return (
    <div className="rounded-lg border border-[color:var(--color-accent)] bg-white p-4 shadow-sm">
      <div className="mb-1 flex items-baseline gap-2">
        <div className="text-lg font-semibold text-[color:var(--color-accent)]">
          {dog.dogName}
        </div>
        <div className="ml-auto">
          <StatusChip status={dog.status} />
        </div>
        <button
          type="button"
          onClick={onEdit}
          className="rounded px-2 py-1 text-sm font-semibold text-[color:var(--color-accent)] hover:bg-[color:var(--color-accent)]/10"
        >
          Edit
        </button>
      </div>
      <div className="text-sm text-gray-800">
        {dog.breed} • {ageString(dog.dateOfBirth)}
      </div>
      <hr className="mt-3" />
    </div>
  );
}

function StatusChip({ status }: { status: Status | string }) {
  const palette = useMemo(() => {
    const low = (c: string) => `${c}22`; // ~13% opacity
    switch (String(status).toLowerCase()) {
      case 'active': return { fg: '#16a34a', bg: low('#16a34a') };
      case 'retired': return { fg: '#2563eb', bg: low('#2563eb') };
      case 'rehomed': return { fg: '#ea580c', bg: low('#ea580c') };
      case 'deceased': return { fg: '#dc2626', bg: low('#dc2626') };
      default: return { fg: '#6b7280', bg: low('#6b7280') };
    }
  }, [status]);
  return (
    <span
      className="rounded-full px-2.5 py-1 text-xs font-bold"
      style={{ color: palette.fg, backgroundColor: palette.bg }}
    >
      {String(status).charAt(0).toUpperCase() + String(status).slice(1)}
    </span>
  );
}

// ---------- Add/Edit Modal ----------
function AddEditDogModal({
  businessId,
  mode,
  existingDog,
  onClose,
  onSaved,
}: {
  businessId: string;
  mode: 'add' | 'edit';
  existingDog?: BreedingDog | null;
  onClose: () => void;
  onSaved: (dog: BreedingDog) => void;
}) {
  const [dogName, setDogName] = useState<string>(existingDog?.dogName ?? '');
  const [dobStr, setDobStr] = useState<string>(
    existingDog
      ? toDateInputValue(existingDog.dateOfBirth)
      : toDateInputValue(new Date(new Date().setFullYear(new Date().getFullYear() - 1)))
  );
  const [breed, setBreed] = useState<string>(existingDog?.breed ?? '');
  const [gender, setGender] = useState<Gender | ''>(existingDog?.gender ?? '');
  const [status, setStatus] = useState<Status>(existingDog?.status ?? 'active');
  const [microchipNumber, setMicrochipNumber] = useState<string>(
    existingDog?.microchipNumber ?? ''
  );
  const [bodyWeightText, setBodyWeightText] = useState<string>(
    Number.isFinite(existingDog?.bodyWeightLbs) ? String(existingDog?.bodyWeightLbs) : ''
  );
  const [bodyWeightUpdatedAt] = useState<Date | undefined>(existingDog?.bodyWeightUpdatedAt);

  const [isSaving, setIsSaving] = useState<boolean>(false);
  const [saveError, setSaveError] = useState<string | null>(null);

  const genders = useMemo<Gender[]>(() => ['Male', 'Female'], []);
  const statuses = useMemo<Status[]>(() => ['active', 'retired', 'rehomed', 'deceased'], []);

  const isValidForm = useMemo(() => {
    const nameOk = dogName.trim().length > 0;
    const dob = new Date(dobStr);
    const dobOk = !Number.isNaN(dob.getTime()) && dob <= new Date();
    const breedOk = AKC_BREEDS.includes(breed) || breed.trim().length > 0;
    const genderOk = genders.includes(gender as Gender);
    const statusOk = statuses.includes(status);
    const chipOk = microchipNumber.length <= 60;

    let weightOk = true;
    const wt = bodyWeightText.trim();
    if (wt.length > 0) {
      const val = Number(wt.replace(',', '.'));
      weightOk = Number.isFinite(val);
    }

    return (
      nameOk &&
      dobOk &&
      breedOk &&
      genderOk &&
      statusOk &&
      chipOk &&
      weightOk &&
      isNonEmptyKey(businessId)
    );
  }, [dogName, dobStr, breed, gender, status, microchipNumber, bodyWeightText, businessId, genders, statuses]);

  const onSave = useCallback(async () => {
    if (!isValidForm) return;
    setIsSaving(true);
    setSaveError(null);
    try {
      const dogsCol = collection(db, 'businesses', businessId, 'breedingDogs');
      const trimmedName = dogName.trim();
      const dob = new Date(dobStr);
      const trimmedChip = microchipNumber.trim();
      const weightTrimmed = bodyWeightText.trim();
      const weightVal = weightTrimmed ? Number(weightTrimmed.replace(',', '.')) : undefined;

      const payload: Record<string, unknown> = {
        dogName: trimmedName,
        dateOfBirth: Timestamp.fromDate(dob),
        breed,
        gender,
        status,
        updatedAt: serverTimestamp(),
      };

      if (trimmedChip) {
        payload.microchipNumber = trimmedChip;
      } else if (mode === 'edit') {
        payload.microchipNumber = deleteField();
      }

      if (typeof weightVal === 'number' && Number.isFinite(weightVal)) {
        payload.bodyWeightLbs = weightVal;
        payload.bodyWeightUpdatedAt = serverTimestamp();
      } else if (mode === 'edit') {
        payload.bodyWeightLbs = deleteField();
        payload.bodyWeightUpdatedAt = deleteField();
      }

      if (mode === 'add') {
        payload.createdAt = serverTimestamp();
        const ref = await addDoc(dogsCol, payload);

        const local: BreedingDog = {
          id: ref.id,
          dogName: trimmedName,
          dateOfBirth: dob,
          breed,
          gender: gender as Gender,
          status,
          microchipNumber: trimmedChip || undefined,
          bodyWeightLbs:
            typeof weightVal === 'number' && Number.isFinite(weightVal) ? weightVal : undefined,
          bodyWeightUpdatedAt:
            typeof weightVal === 'number' && Number.isFinite(weightVal) ? new Date() : undefined,
        };
        onSaved(local);
        onClose();
      } else {
        const id = existingDog?.id as string;
        await setDoc(doc(dogsCol, id), payload, { merge: true });

        const merged: BreedingDog = {
          id,
          dogName: trimmedName,
          dateOfBirth: dob,
          breed,
          gender: gender as Gender,
          status,
          microchipNumber: trimmedChip || existingDog?.microchipNumber || undefined,
          bodyWeightLbs:
            typeof weightVal === 'number' && Number.isFinite(weightVal)
              ? weightVal
              : existingDog?.bodyWeightLbs,
          bodyWeightUpdatedAt:
            typeof weightVal === 'number' && Number.isFinite(weightVal)
              ? new Date()
              : bodyWeightUpdatedAt,
        };
        onSaved(merged);
        onClose();
      }
    } catch {
      setSaveError('Failed to save. Please try again.');
    } finally {
      setIsSaving(false);
    }
  }, [
    isValidForm,
    businessId,
    dogName,
    dobStr,
    breed,
    gender,
    status,
    microchipNumber,
    bodyWeightText,
    mode,
    existingDog?.id,
    existingDog?.microchipNumber,
    existingDog?.bodyWeightLbs,
    bodyWeightUpdatedAt,
    onClose,
    onSaved,
  ]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
      <div className="max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl bg-[color:var(--color-background)] p-5 shadow-2xl">
        <div className="mb-3 text-xl font-semibold text-gray-900">
          {mode === 'add' ? 'Add New Dog' : 'Edit Dog'}
        </div>

        <div className="grid gap-3">
          <div>
            <label className="mb-1 block text-sm font-semibold text-[color:var(--color-accent)]">
              Dog Name
            </label>
            <input
              value={dogName}
              onChange={(e) => setDogName(e.target.value)}
              className="w-full rounded-lg border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[color:var(--color-accent)]"
              placeholder="Enter name"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-semibold text-[color:var(--color-accent)]">
              Date of Birth
            </label>
            <input
              type="date"
              value={dobStr}
              max={toDateInputValue(new Date())}
              onChange={(e) => setDobStr(e.target.value)}
              className="w-full rounded-lg border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[color:var(--color-accent)]"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-semibold text-[color:var(--color-accent)]">
              Breed
            </label>
            <select
              value={breed}
              onChange={(e) => setBreed(e.target.value)}
              className="w-full rounded-lg border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[color:var(--color-accent)]"
            >
              <option value="">Select a breed</option>
              {AKC_BREEDS.map((b) => (
                <option key={b} value={b}>{b}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="mb-1 block text-sm font-semibold text-[color:var(--color-accent)]">
              Gender
            </label>
            <div className="grid grid-cols-2 gap-2" role="group" aria-label="Gender">
              <label className="cursor-pointer">
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  checked={gender === 'Male'}
                  onChange={() => setGender('Male')}
                  className="peer sr-only"
                />
                <span
                  className="block rounded-full border-2 px-4 py-2 text-center text-sm font-semibold transition-colors
                             bg-white text-[color:var(--color-accent)] border-[color:var(--color-accent)]
                             peer-checked:!bg-[#22c55e] peer-checked:!border-[#22c55e] peer-checked:!text-black
                             peer-focus:ring-2 peer-focus:ring-[#22c55e] peer-focus:ring-offset-1"
                >
                  Male
                </span>
              </label>

              <label className="cursor-pointer">
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  checked={gender === 'Female'}
                  onChange={() => setGender('Female')}
                  className="peer sr-only"
                />
                <span
                  className="block rounded-full border-2 px-4 py-2 text-center text-sm font-semibold transition-colors
                             bg-white text-[color:var(--color-accent)] border-[color:var(--color-accent)]
                             peer-checked:!bg-[#22c55e] peer-checked:!border-[#22c55e] peer-checked:!text-black
                             peer-focus:ring-2 peer-focus:ring-[#22c55e] peer-focus:ring-offset-1"
                >
                  Female
                </span>
              </label>
            </div>
          </div>

          <div>
            <label className="mb-1 block text-sm font-semibold text-[color:var(--color-accent)]">
              Status
            </label>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value as Status)}
              className="w-full rounded-lg border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[color:var(--color-accent)]"
            >
              {(['active', 'retired', 'rehomed', 'deceased'] as Status[]).map((s) => (
                <option key={s} value={s}>{s.charAt(0).toUpperCase() + s.slice(1)}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="mb-1 block text-sm font-semibold text-[color:var(--color-accent)]">
              Microchip Number (max 60)
            </label>
            <input
              value={microchipNumber}
              onChange={(e) => {
                const v = e.target.value;
                setMicrochipNumber(v.length > 60 ? v.slice(0, 60) : v);
              }}
              className="w-full rounded-lg border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[color:var(--color-accent)]"
              placeholder="Enter microchip"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-semibold text-[color:var(--color-accent)]">
              Body Weight (lb)
            </label>
            <input
              value={bodyWeightText}
              onChange={(e) => setBodyWeightText(e.target.value)}
              className="w-full rounded-lg border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[color:var(--color-accent)]"
              placeholder="e.g., 62.5"
              inputMode="decimal"
            />
            {bodyWeightUpdatedAt && (
              <div className="mt-1 text-xs italic text-gray-500">
                last updated on {new Date(bodyWeightUpdatedAt).toLocaleDateString()}
              </div>
            )}
          </div>

          {saveError && (
            <div className="rounded-lg border border-red-200 bg-red-50 p-2 text-sm text-red-700">
              {saveError}
            </div>
          )}
        </div>

        <div className="mt-6 flex justify-end gap-2">
          <button
            type="button"
            onClick={onClose}
            disabled={isSaving}
            style={{ backgroundColor: '#dc2626', borderColor: '#dc2626', color: '#ffffff' }}
            className="appearance-none rounded-xl border px-4 py-2 text-sm font-semibold
                     hover:brightness-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-600
                     disabled:cursor-not-allowed disabled:opacity-60"
          >
            Cancel
          </button>

          <button
            type="button"
            onClick={onSave}
            disabled={isSaving || !isValidForm}
            style={{ background: '#22c55e', backgroundColor: '#22c55e', borderColor: '#22c55e', color: '#000' }}
            className="appearance-none rounded-xl border px-4 py-2 text-sm font-semibold shadow-md
                     !bg-[#22c55e] !text-black !border-[#22c55e]
                     hover:brightness-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#22c55e]
                     disabled:cursor-not-allowed disabled:opacity-60 disabled:!bg-[#22c55e] disabled:!text-black"
          >
            {isSaving ? 'Saving…' : 'Save'}
          </button>
        </div>
      </div>
    </div>
  );
}
