'use client';

import { useState, useEffect, useCallback } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';

import { getApps, getApp, initializeApp } from 'firebase/app';
import {
    getAuth,
    onAuthStateChanged,
} from 'firebase/auth';
import {
    getFirestore,
    doc,
    getDoc,
    updateDoc,
    collection,
    addDoc,
    Timestamp,
    DocumentData
} from 'firebase/firestore';
import {
    getStorage,
    ref as storageRef,
    getDownloadURL,
    deleteObject,
    uploadBytes,
} from 'firebase/storage';

// ---------- Firebase ----------
const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY!,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN!,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID!,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET!,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID!,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID!,
};
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

// ---------- Constants / Types ----------
type VaccineKey = 'Rabies' | 'Bordetella' | 'DAPP (or DHPP/DA2PP)' | 'Canine Influenza';
type VaccinationUI = Record<VaccineKey, { isVaccinated: boolean; expirationDate: string }>;

type RemoteVaccineFile = { index: 1 | 2; name: string; url: string; ext: string };

// Breed list mirrors iOS (truncated would cause drift; keeping complete list).
const BREED_LIST = [
    'Mixed', 'Doodle Mix', 'Afghan Hound', 'Airedale Terrier', 'Akita', 'Alaskan Malamute', 'American Bulldog',
    'American Eskimo Dog', 'American Foxhound', 'American Staffordshire Terrier', 'American Water Spaniel',
    'Anatolian Shepherd Dog', 'Australian Cattle Dog', 'Australian Shepherd', 'Australian Terrier', 'Basenji',
    'Basset Hound', 'Beagle', 'Bearded Collie', 'Beauceron', 'Bedlington Terrier', 'Belgian Malinois',
    'Belgian Sheepdog', 'Belgian Tervuren', 'Bernese Mountain Dog', 'Bichon Frise', 'Black and Tan Coonhound',
    'Black Russian Terrier', 'Bloodhound', 'Border Collie', 'Border Terrier', 'Borzoi', 'Boston Terrier',
    'Bouvier des Flandres', 'Boxer', 'Boykin Spaniel', 'Briard', 'Brittany', 'Brussels Griffon', 'Bull Terrier',
    'Bulldog', 'Bullmastiff', 'Cairn Terrier', 'Canaan Dog', 'Cane Corso', 'Cardigan Welsh Corgi',
    'Cavalier King Charles Spaniel', 'Chesapeake Bay Retriever', 'Chihuahua', 'Chinese Crested', 'Chinese Shar-Pei',
    'Chow Chow', 'Clumber Spaniel', 'Cocker Spaniel', 'Collie', 'Coton de Tulear', 'Curly-Coated Retriever',
    'Dachshund', 'Dalmatian', 'Dandie Dinmont Terrier', 'Doberman Pinscher', 'Dogue de Bordeaux',
    'English Cocker Spaniel', 'English Foxhound', 'English Setter', 'English Springer Spaniel', 'English Toy Spaniel',
    'Entlebucher Mountain Dog', 'Field Spaniel', 'Finnish Lapphund', 'Finnish Spitz', 'Flat-Coated Retriever',
    'French Bulldog', 'German Pinscher', 'German Shepherd', 'German Shorthaired Pointer', 'German Wirehaired Pointer',
    'Giant Schnauzer', 'Glen of Imaal Terrier', 'Golden Retriever', 'Gordon Setter', 'Great Dane', 'Great Pyrenees',
    'Greater Swiss Mountain Dog', 'Greyhound', 'Harrier', 'Havanese', 'Ibizan Hound', 'Icelandic Sheepdog',
    'Irish Setter', 'Irish Terrier', 'Irish Water Spaniel', 'Irish Wolfhound', 'Italian Greyhound', 'Japanese Chin',
    'Keeshond', 'Kerry Blue Terrier', 'Komondor', 'Kuvasz', 'Labrador Retriever', 'Lakeland Terrier', 'Lhasa Apso',
    'Lowchen', 'Maltese', 'Manchester Terrier', 'Mastiff', 'Miniature Bull Terrier', 'Miniature Pinscher',
    'Miniature Schnauzer', 'Neapolitan Mastiff', 'Newfoundland', 'Norfolk Terrier', 'Norwegian Buhund',
    'Norwegian Elkhound', 'Norwegian Lundehund', 'Norwich Terrier', 'Nova Scotia Duck Tolling Retriever',
    'Old English Sheepdog', 'Otterhound', 'Papillon', 'Parson Russell Terrier', 'Pekingese', 'Pembroke Welsh Corgi',
    'Petit Basset Griffon Vendeen', 'Pharaoh Hound', 'Plott', 'Pointer', 'Polish Lowland Sheepdog', 'Pomeranian',
    'Poodle', 'Portuguese Water Dog', 'Pug', 'Puli', 'Pumi', 'Rat Terrier', 'Redbone Coonhound',
    'Rhodesian Ridgeback', 'Rottweiler', 'Russell Terrier', 'Saint Bernard', 'Saluki', 'Samoyed', 'Schipperke',
    'Scottish Deerhound', 'Scottish Terrier', 'Sealyham Terrier', 'Shetland Sheepdog', 'Shiba Inu', 'Shih Tzu',
    'Siberian Husky', 'Silky Terrier', 'Skye Terrier', 'Sloughi', 'Smooth Fox Terrier',
    'Soft Coated Wheaten Terrier', 'Spanish Water Dog', 'Spinone Italiano', 'Staffordshire Bull Terrier',
    'Standard Schnauzer', 'Sussex Spaniel', 'Swedish Vallhund', 'Tibetan Mastiff', 'Tibetan Spaniel',
    'Tibetan Terrier', 'Toy Fox Terrier', 'Treeing Walker Coonhound', 'Vizsla', 'Weimaraner', 'Welsh Springer Spaniel',
    'Welsh Terrier', 'West Highland White Terrier', 'Whippet', 'Wire Fox Terrier', 'Wirehaired Pointing Griffon',
    'Wirehaired Vizsla', 'Xoloitzcuintli', 'Yorkshire Terrier'
];

// Mirror iOS accepted vaccine file extensions
const VACCINE_EXTS = ['pdf', 'jpg', 'jpeg', 'png', 'heic'] as const;
const FORBIDDEN_FEEDING_CHARS = /[\/\.\$\[\]#]/; // iOS parity

export default function AddEditPetPage() {
    const t = useTranslations('individualAddEditPet');
    const router = useRouter();
    const locale = useLocale();
    const searchParams = useSearchParams();
    const petId = searchParams.get('petId');

    const [userId, setUserId] = useState('');
    const [mode, setMode] = useState<'add' | 'edit'>('add');

    // Core fields
    const [petName, setPetName] = useState('');
    const [petType, setPetType] = useState<'Dog' | 'Cat'>('Dog');
    const [gender, setGender] = useState<'Male' | 'Female'>('Male');
    const [spayedNeutered, setSpayedNeutered] = useState<'Yes' | 'No'>('Yes');
    const [breed, setBreed] = useState<string>('Mixed');

    // Age + DOB (Age editable like iOS)
    const [age, setAge] = useState<string>('0');
    const [ageUnit, setAgeUnit] = useState<'Years' | 'Months'>('Years');
    const [dateOfBirth, setDateOfBirth] = useState<string>(''); // YYYY-MM-DD
    const [lastAnnualVetVisit, setLastAnnualVetVisit] = useState<string>(''); // YYYY-MM-DD

    // Other details
    const [weight, setWeight] = useState<string>('0');
    const [allergies, setAllergies] = useState<string>('');
    const [currentFood, setCurrentFood] = useState<string>('');
    const [cupsPerMeal, setCupsPerMeal] = useState<string>('1');

    // 👇 ADD THESE TWO LINES HERE
    const [veterinarian, setVeterinarian] = useState<string>('');
    const [veterinarianPhone, setVeterinarianPhone] = useState<string>('');

    // Feeding schedule + frequency (iOS keeps frequency string in payload)
    const [feedingFrequency, setFeedingFrequency] = useState<string>('2');
    const [receivesBreakfast, setReceivesBreakfast] = useState<boolean>(false);
    const [receivesLunch, setReceivesLunch] = useState<boolean>(false);
    const [receivesDinner, setReceivesDinner] = useState<boolean>(false);
    const [breakfastInstructions, setBreakfastInstructions] = useState<string>('');
    const [lunchInstructions, setLunchInstructions] = useState<string>('');
    const [dinnerInstructions, setDinnerInstructions] = useState<string>('');

    // Health details
    const [medications, setMedications] = useState<'Yes' | 'No'>('No');
    const [medicationDetails, setMedicationDetails] = useState<string>('');
    const [boardingExperience, setBoardingExperience] = useState<'Yes' | 'No'>('No');
    const [boardingExperienceDetails, setBoardingExperienceDetails] = useState<string>('');
    const [afraidOfAnything, setAfraidOfAnything] = useState<'Yes' | 'No'>('No');
    const [fearDetails, setFearDetails] = useState<string>('');

    // Vaccination UI state mirrors iOS keys
    const [vaccinationRecords, setVaccinationRecords] = useState<VaccinationUI>({
        Rabies: { isVaccinated: false, expirationDate: '' },
        Bordetella: { isVaccinated: false, expirationDate: '' },
        'DAPP (or DHPP/DA2PP)': { isVaccinated: false, expirationDate: '' },
        'Canine Influenza': { isVaccinated: false, expirationDate: '' },
    });

    // Vaccine files: support two slots, remote and new uploads
    const [remoteVaccineFiles, setRemoteVaccineFiles] = useState<RemoteVaccineFile[]>([]);
    const [newVaccineFiles, setNewVaccineFiles] = useState<File[]>([]); // up to 2 in save
    const [loading, setLoading] = useState<boolean>(true);
    const [saving, setSaving] = useState<boolean>(false);

    // ---------- Helpers ----------
    const formatDateFromAny = useCallback((value: unknown): string => {
        if (!value) return '';

        if (typeof value === 'string') {
            return value; // Assume already in YYYY-MM-DD format
        }

        if (
            typeof value === 'object' &&
            value !== null &&
            'toDate' in value &&
            typeof (value as { toDate: () => Date }).toDate === 'function'
        ) {
            const dateObj = (value as { toDate: () => Date }).toDate();
            const iso = dateObj.toISOString();
            return iso.split('T')[0];
        }

        return '';
    }, []);

    const toTimestampOrNull = (value: string): Timestamp | null => {
        if (!value) return null;
        const d = new Date(value);
        if (Number.isNaN(d.getTime())) return null;
        return Timestamp.fromDate(d);
    };

    const validateFeedingText = (text: string): true | string => {
        if (text.length > 100) return t('feeding_validation_too_long', { defaultValue: 'Feeding instructions cannot exceed 100 characters.' });
        if (FORBIDDEN_FEEDING_CHARS.test(text)) {
            return t('feeding_validation_forbidden', { defaultValue: 'Feeding instructions cannot contain the following characters: / . $ [ ] #' });
        }
        return true;
    };

    const enforceFeedingText = (next: string, setter: (v: string) => void) => {
        if (next.length > 100) {
            alert(t('feeding_validation_too_long', { defaultValue: 'Feeding instructions cannot exceed 100 characters.' }));
            setter(next.slice(0, 100));
            return;
        }
        if (FORBIDDEN_FEEDING_CHARS.test(next)) {
            alert(t('feeding_validation_forbidden', { defaultValue: 'Feeding instructions cannot contain the following characters: / . $ [ ] #' }));
            return;
        }
        setter(next);
    };

    const extOf = (fileName: string): string => {
        const i = fileName.lastIndexOf('.');
        return i >= 0 ? fileName.slice(i + 1).toLowerCase() : '';
    };

    const contentTypeForExt = (ext: string): string | undefined => {
        switch (ext) {
            case 'pdf': return 'application/pdf';
            case 'jpg':
            case 'jpeg': return 'image/jpeg';
            case 'png': return 'image/png';
            case 'heic': return 'image/heic';
            default: return undefined;
        }
    };

    // ---------- Load existing pet data (parity with iOS populateFormIfEditing) ----------
    // Memoized function to satisfy react-hooks/exhaustive-deps
    const loadPetData = useCallback(async (uid: string, id: string) => {
        const ref = doc(db, 'users', uid, 'pets', id);
        const snap = await getDoc(ref);
        if (!snap.exists()) return;

        const data = snap.data();

        setPetType((data.petType as 'Dog' | 'Cat') || 'Dog');
        setPetName(data.petName || '');
        setGender((data.gender as 'Male' | 'Female') || 'Male');
        setSpayedNeutered((data.spayedNeutered as 'Yes' | 'No') || 'Yes');

        setBreed(data.breed || 'Mixed');
        setAge(data.ageValue ? String(data.ageValue) : '0');
        setAgeUnit((data.ageUnit as 'Years' | 'Months') || 'Years');

        setDateOfBirth(formatDateFromAny(data.dateOfBirth));
        setLastAnnualVetVisit(formatDateFromAny(data.lastAnnualVetVisit));

        setWeight(data.weight || '0');
        setAllergies(data.allergies || '');
        setCurrentFood(data.currentFood || '');
        setCupsPerMeal(data.feedingAmount || '1');
        setFeedingFrequency(data.feedingFrequency || '2');

        // ---- Veterinarian fields (robust to schema differences) ----
        const nameKey = (['veterinarian', 'veterinarianName', 'vetName'] as const)
            .find(k => typeof (data as Record<string, unknown>)[k] !== 'undefined') ?? 'veterinarian';
        setVetNameKey(nameKey);
        setVeterinarian(String((data as Record<string, unknown>)[nameKey] ?? ''));

        const phoneKey = (['veterinarianPhone', 'veterinarianPhoneNumber', 'vetPhone'] as const)
            .find(k => typeof (data as Record<string, unknown>)[k] !== 'undefined') ?? 'veterinarianPhone';
        setVetPhoneKey(phoneKey);
        setVeterinarianPhone(String((data as Record<string, unknown>)[phoneKey] ?? ''));

        // Feeding schedule
        if (data.feedingSchedule) {
            const fs = data.feedingSchedule;
            setReceivesBreakfast(!!fs?.breakfast?.enabled);
            setBreakfastInstructions(fs?.breakfast?.instructions || '');
            setReceivesLunch(!!fs?.lunch?.enabled);
            setLunchInstructions(fs?.lunch?.instructions || '');
            setReceivesDinner(!!fs?.dinner?.enabled);
            setDinnerInstructions(fs?.dinner?.instructions || '');
        }

        setMedications((data.medications as 'Yes' | 'No') || 'No');
        setMedicationDetails(data.medicationDetails || '');
        setBoardingExperience((data.boardingExperience as 'Yes' | 'No') || 'No');
        setBoardingExperienceDetails(data.boardingExperienceDetails || '');
        setAfraidOfAnything((data.afraidOfAnything as 'Yes' | 'No') || 'No');
        setFearDetails(data.fearDetails || '');

        // Vaccination records: accept either 'date' (Timestamp) or 'expirationDate' (Timestamp/string)
        type VaccinationInfo = { date?: unknown; expirationDate?: unknown; isVaccinated?: boolean };
        const getDateStr = (obj?: VaccinationInfo): string => {
            if (!obj) return '';
            if (obj.date) return formatDateFromAny(obj.date);
            if (obj.expirationDate) return formatDateFromAny(obj.expirationDate);
            return '';
        };

        if (data.vaccinationRecords && typeof data.vaccinationRecords === 'object') {
            setVaccinationRecords({
                Rabies: {
                    isVaccinated: !!data.vaccinationRecords?.Rabies?.isVaccinated,
                    expirationDate: getDateStr(data.vaccinationRecords?.Rabies),
                },
                Bordetella: {
                    isVaccinated: !!data.vaccinationRecords?.Bordetella?.isVaccinated,
                    expirationDate: getDateStr(data.vaccinationRecords?.Bordetella),
                },
                'DAPP (or DHPP/DA2PP)': {
                    isVaccinated: !!data.vaccinationRecords?.['DAPP (or DHPP/DA2PP)']?.isVaccinated,
                    expirationDate: getDateStr(data.vaccinationRecords?.['DAPP (or DHPP/DA2PP)']),
                },
                'Canine Influenza': {
                    isVaccinated: !!data.vaccinationRecords?.['Canine Influenza']?.isVaccinated,
                    expirationDate: getDateStr(data.vaccinationRecords?.['Canine Influenza']),
                },
            });
        }

        // Load up to two existing vaccine files by index and by any supported extension
        const found: RemoteVaccineFile[] = [];
        for (const index of [1, 2] as const) {
            let added = false;
            for (const ext of VACCINE_EXTS) {
                const path = `vaccineRecords/${uid}/${id}_${index}.${ext}`;
                try {
                    const url = await getDownloadURL(storageRef(storage, path));
                    found.push({ index, name: `${id}_${index}.${ext}`, url, ext });
                    added = true;
                    break; // stop at first existing ext for this index
                } catch {
                    // not found; continue
                }
            }
            if (!added) {
                // nothing for this index
            }
        }
        setRemoteVaccineFiles(found);
    }, [formatDateFromAny]); // Add any other dependencies here

    // ---------- Auth + initial load ----------
    useEffect(() => {
        const unsub = onAuthStateChanged(auth, async (user) => {
            if (!user) {
                router.push(`/${locale}/loginsignup`);
                return;
            }

            setUserId(user.uid);

            if (petId) {
                setMode('edit');
                await loadPetData(user.uid, petId);
            } else {
                setMode('add');
            }

            // ✅ Only set loading to false after data is ready
            setLoading(false);
        });

        return () => unsub();
    }, [router, locale, petId, loadPetData]); // ✅ Includes loadPetData

    // ---------- Actions ----------
    const onDOBChange = (value: string) => {
        setDateOfBirth(value);
        if (!value) return;
        const dob = new Date(value);
        if (Number.isNaN(dob.getTime())) return;

        const now = new Date();
        const months = (now.getFullYear() - dob.getFullYear()) * 12 + (now.getMonth() - dob.getMonth());
        if (months >= 12) {
            setAge(String(Math.floor(months / 12)));
            setAgeUnit('Years');
        } else {
            setAge(String(Math.max(0, months)));
            setAgeUnit('Months');
        }
    };

    const handleNewVaccineFiles = (files: FileList | null): void => {
        if (!files || files.length === 0) return;

        const existing = [...newVaccineFiles];

        for (const f of Array.from(files)) {
            if (existing.length >= 2) break; // mirror iOS limit

            const ext = extOf(f.name).toLowerCase() as (typeof VACCINE_EXTS)[number];

            if (!VACCINE_EXTS.includes(ext)) {
                alert(
                    t('vaccine_ext_invalid', {
                        defaultValue:
                            'Unsupported file type. Allowed: pdf, jpg, jpeg, png, heic.',
                    })
                );
                continue;
            }

            existing.push(f);
        }

        setNewVaccineFiles(existing.slice(0, 2));
    };

    const removeRemoteFile = async (rf: RemoteVaccineFile) => {
        // iOS removes from Storage immediately on button tap
        try {
            await deleteObject(storageRef(storage, `vaccineRecords/${userId}/${rf.name}`));
        } catch {
            // ignore if already gone
        }
        setRemoteVaccineFiles(prev => prev.filter(x => !(x.index === rf.index && x.name === rf.name)));
    };

    const removePendingNewFile = (idx: number) => {
        setNewVaccineFiles(prev => prev.filter((_, i) => i !== idx));
    };

    const deleteAllExtensionsForIndex = async (docId: string, index: 1 | 2) => {
        // Clean up any prior ext variants to mirror iOS's cleanup
        await Promise.allSettled(
            VACCINE_EXTS.map(ext =>
                deleteObject(storageRef(storage, `vaccineRecords/${userId}/${docId}_${index}.${ext}`))
            )
        );
    };

    const uploadFileToIndex = async (docId: string, index: 1 | 2, file: File) => {
        const ext = extOf(file.name) || 'pdf';
        const path = `vaccineRecords/${userId}/${docId}_${index}.${ext}`;
        const ref = storageRef(storage, path);
        await uploadBytes(ref, file, { contentType: contentTypeForExt(ext) });
    };

    const buildFeedingSchedule = () => ({
        breakfast: { enabled: receivesBreakfast, instructions: receivesBreakfast ? breakfastInstructions : '' },
        lunch: { enabled: receivesLunch, instructions: receivesLunch ? lunchInstructions : '' },
        dinner: { enabled: receivesDinner, instructions: receivesDinner ? dinnerInstructions : '' },
    });

    const validateBeforeSave = (): boolean => {
        if (!petName.trim()) { alert(t('validation_pet_name_required', { defaultValue: 'Pet name is required.' })); return false; }
        if (!age.trim() || Number.isNaN(Number(age))) { alert(t('validation_pet_age_invalid', { defaultValue: 'Pet age must be a number.' })); return false; }
        if (!weight.trim() || Number.isNaN(Number(weight))) { alert(t('validation_pet_weight_invalid', { defaultValue: 'Pet weight must be a number.' })); return false; }

        const checks = [breakfastInstructions, lunchInstructions, dinnerInstructions]
            .map(validateFeedingText)
            .filter(r => r !== true) as string[];
        if (checks.length > 0) { alert(checks[0]); return false; }
        return true;
    };

    const handleSave = async (): Promise<void> => {
        if (!validateBeforeSave()) return;

        setSaving(true);
        try {
            // Build vaccinationRecords to match iOS: { isVaccinated, date: Timestamp|null }
            const vaxPayload: Record<string, { isVaccinated: boolean; date: Timestamp | null }> = {};

            (Object.keys(vaccinationRecords) as VaccineKey[]).forEach((k) => {
                const item = vaccinationRecords[k];
                vaxPayload[k] = {
                    isVaccinated: !!item.isVaccinated,
                    date:
                        item.isVaccinated && item.expirationDate
                            ? toTimestampOrNull(item.expirationDate)
                            : null,
                };
            });

            const payload: DocumentData = {
                petType,
                petName,
                breed,
                ageValue: age,
                ageUnit,
                weight,
                allergies,
                gender,
                spayedNeutered,
                currentFood,
                feedingAmount: cupsPerMeal,
                feedingFrequency, // iOS includes this string
                feedingSchedule: buildFeedingSchedule(),
                veterinarian: veterinarian.trim(),
                veterinarianPhone: veterinarianPhone.trim(),
                medications,
                medicationDetails,
                boardingExperience,
                boardingExperienceDetails,
                afraidOfAnything,
                fearDetails,
                vaccinationRecords: vaxPayload,
                dateOfBirth: toTimestampOrNull(dateOfBirth) ?? null,
                lastAnnualVetVisit: toTimestampOrNull(lastAnnualVetVisit) ?? null,
                createdAt: Timestamp.now(),
            };

            // Write Firestore doc
            const petCollectionRef = collection(db, 'users', userId, 'pets');
            let docId = petId || '';

            if (mode === 'edit' && petId) {
                await updateDoc(doc(petCollectionRef, petId), payload);
                docId = petId;
            } else {
                const newDoc = await addDoc(petCollectionRef, payload);
                docId = newDoc.id;
            }

            // ---- Vaccine Files ----
            const toUpload = newVaccineFiles.slice(0, 2);
            for (let i = 0; i < toUpload.length; i++) {
                const index = (i + 1) as 1 | 2;
                await deleteAllExtensionsForIndex(docId, index);
                await uploadFileToIndex(docId, index, toUpload[i]);
            }

            router.push(`/${locale}/individualmypets`);
        } catch (err) {
            console.error('❌ Failed to save pet:', err);
            alert(t('save_error', { defaultValue: 'Failed to save. Please try again.' }));
        } finally {
            setSaving(false);
        }
    };

    // ---------- Brand styling helpers (Tailwind-safe literal classnames) ----------
    const LABEL = 'block font-medium mb-1 text-sm text-[#2c4a30]';
    const INPUT = 'w-full border border-[#2c4a30] px-4 py-2 rounded text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#e4dbcb] focus:border-[#2c4a30]';
    const SELECT = 'w-full border border-[#2c4a30] px-4 py-2 rounded text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#e4dbcb] focus:border-[#2c4a30]';
    const TEXTAREA = 'w-full border border-[#2c4a30] mt-2 px-4 py-2 rounded text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#e4dbcb] focus:border-[#2c4a30]';
    const CHECK_LABEL = 'flex items-center gap-2 mt-1 mb-2 text-sm text-[#2c4a30]';

    // ---------- UI ----------
    if (loading) return <p className="text-center mt-10">{t('loading', { defaultValue: 'Loading…' })}</p>;

    return (
        <div className="min-h-screen bg-[color:var(--color-background)] text-[color:var(--color-foreground)] px-4 py-8 flex justify-center">
            <div className="w-full max-w-xl mx-auto px-2 sm:px-4">
                <button
                    onClick={() => router.push(`/${locale}/individualmypets`)}
                    className="mb-6 text-sm underline text-[#2c4a30] hover:text-[#1f3523] transition"
                >
                    ← {t('back_to_my_pets', { defaultValue: 'Back to My Pets' })}
                </button>

                <h1 className="text-3xl font-bold text-[#2c4a30] text-center mb-6">
                    {mode === 'edit' ? t('edit_pet_title', { defaultValue: 'Edit Pet' }) : t('add_pet_title', { defaultValue: 'Add Pet' })}
                </h1>

                <form onSubmit={(e) => { e.preventDefault(); handleSave(); }} className="space-y-6">
                    {/* Pet Name */}
                    <div>
                        <label className={LABEL}>{t('pet_name', { defaultValue: 'Pet Name' })}</label>
                        <input
                            type="text"
                            className={INPUT}
                            value={petName}
                            onChange={(e) => setPetName(e.target.value)}
                        />
                    </div>

                    {/* Species */}
                    <div>
                        <label className={LABEL}>{t('pet_type', { defaultValue: 'Species' })}</label>
                        <select
                            value={petType}
                            onChange={(e) => {
                                const next = e.target.value as 'Dog' | 'Cat';
                                setPetType(next);
                                if (next === 'Dog' && !breed) setBreed('Mixed');
                            }}
                            className={SELECT}
                        >
                            <option value="Dog">Dog</option>
                            <option value="Cat">Cat</option>
                        </select>
                    </div>

                    {/* Gender */}
                    <div>
                        <label className={LABEL}>{t('gender', { defaultValue: 'Sex' })}</label>
                        <select
                            value={gender}
                            onChange={(e) => setGender(e.target.value as 'Male' | 'Female')}
                            className={SELECT}
                        >
                            <option value="Male">{t('male', { defaultValue: 'Male' })}</option>
                            <option value="Female">{t('female', { defaultValue: 'Female' })}</option>
                        </select>
                    </div>

                    {/* Spayed / Neutered */}
                    <div>
                        <label className={LABEL}>{t('spayed_neutered', { defaultValue: 'Spayed / Neutered' })}</label>
                        <select
                            value={spayedNeutered}
                            onChange={(e) => setSpayedNeutered(e.target.value as 'Yes' | 'No')}
                            className={SELECT}
                        >
                            <option value="Yes">{t('yes', { defaultValue: 'Yes' })}</option>
                            <option value="No">{t('no', { defaultValue: 'No' })}</option>
                        </select>
                    </div>

                    {/* Breed (Dog only) */}
                    {petType === 'Dog' && (
                        <div>
                            <label className={LABEL}>{t('breed', { defaultValue: 'Select Breed' })}</label>
                            <select
                                value={breed}
                                onChange={(e) => setBreed(e.target.value)}
                                className={SELECT}
                            >
                                <option value="Select Breed">{t('select_breed', { defaultValue: 'Select Breed' })}</option>
                                {BREED_LIST.map(b => <option key={b} value={b}>{b}</option>)}
                            </select>
                        </div>
                    )}

                    {/* Date of Birth */}
                    <div>
                        <label className={LABEL}>{t('dob', { defaultValue: 'Date of Birth' })}</label>
                        <input
                            type="date"
                            className={INPUT}
                            value={dateOfBirth}
                            onChange={(e) => onDOBChange(e.target.value)}
                        />
                    </div>

                    {/* Age (editable) + Age Unit */}
                    <div className="flex gap-4">
                        <div className="flex-1">
                            <label className={LABEL}>{t('age', { defaultValue: 'Age' })}</label>
                            <input
                                type="text"
                                className={INPUT}
                                value={age}
                                onChange={(e) => setAge(e.target.value)}
                            />
                        </div>
                        <div className="flex-1">
                            <label className={LABEL}>{t('age_unit', { defaultValue: 'Age Unit' })}</label>
                            <select
                                value={ageUnit}
                                onChange={(e) => setAgeUnit(e.target.value as 'Years' | 'Months')}
                                className={SELECT}
                            >
                                <option value="Years">{t('years', { defaultValue: 'Years' })}</option>
                                <option value="Months">{t('months', { defaultValue: 'Months' })}</option>
                            </select>
                        </div>
                    </div>

                    {/* Last Annual Vet Visit */}
                    <div>
                        <label className={LABEL}>{t('last_annual_vet_visit', { defaultValue: 'Last Annual Vet Visit' })}</label>
                        <input
                            type="date"
                            className={INPUT}
                            value={lastAnnualVetVisit}
                            onChange={(e) => setLastAnnualVetVisit(e.target.value)}
                        />
                    </div>

                    {/* Weight */}
                    <div>
                        <label className={LABEL}>{t('weight', { defaultValue: 'Weight (lbs)' })}</label>
                        <input
                            type="text"
                            className={INPUT}
                            value={weight}
                            onChange={(e) => setWeight(e.target.value)}
                            placeholder="e.g., 45"
                        />
                    </div>

                    {/* Allergies */}
                    <div>
                        <label className={LABEL}>{t('allergies', { defaultValue: 'Allergies' })}</label>
                        <input
                            type="text"
                            className={INPUT}
                            value={allergies}
                            onChange={(e) => setAllergies(e.target.value)}
                            placeholder={t('none', { defaultValue: 'None' })}
                        />
                    </div>

                    {/* Current Food */}
                    <div>
                        <label className={LABEL}>{t('current_food', { defaultValue: 'Current Food' })}</label>
                        <input
                            type="text"
                            className={INPUT}
                            value={currentFood}
                            onChange={(e) => setCurrentFood(e.target.value)}
                            placeholder="e.g., Acana"
                        />
                    </div>

                    {/* Cups per Meal */}
                    <div>
                        <label className={LABEL}>{t('cups_per_meal', { defaultValue: 'Cups per Meal' })}</label>
                        <select
                            value={cupsPerMeal}
                            onChange={(e) => setCupsPerMeal(e.target.value)}
                            className={SELECT}
                        >
                            {['1/2', '3/4', '1', '1.5', '2', '2.5', '3', '3.5', '4'].map(opt => (
                                <option key={opt} value={opt}>{opt}</option>
                            ))}
                        </select>
                    </div>

                    {/* (Hidden) Feeding Frequency parity field; keep editable if desired later */}
                    <input type="hidden" value={feedingFrequency} onChange={() => { /* reserved */ }} />

                    {/* Feeding Schedule */}
                    <div>
                        <label className="block font-medium mb-2 text-sm text-[#2c4a30]">
                            {t('meals_given', { defaultValue: 'Meals Being Given' })}
                        </label>

                        {/* Breakfast */}
                        <label className={CHECK_LABEL}>
                            <input
                                type="checkbox"
                                className="accent-[#2c4a30]"
                                checked={receivesBreakfast}
                                onChange={(e) => setReceivesBreakfast(e.target.checked)}
                            />
                            {t('breakfast', { defaultValue: 'Breakfast' })}
                        </label>
                        {receivesBreakfast && (
                            <input
                                type="text"
                                className={`${INPUT} mb-3`}
                                placeholder={t('feeding_instructions', { defaultValue: 'Add feeding instructions if necessary' })}
                                value={breakfastInstructions}
                                onChange={(e) => enforceFeedingText(e.target.value, setBreakfastInstructions)}
                            />
                        )}

                        {/* Lunch */}
                        <label className={CHECK_LABEL}>
                            <input
                                type="checkbox"
                                className="accent-[#2c4a30]"
                                checked={receivesLunch}
                                onChange={(e) => setReceivesLunch(e.target.checked)}
                            />
                            {t('lunch', { defaultValue: 'Lunch' })}
                        </label>
                        {receivesLunch && (
                            <input
                                type="text"
                                className={`${INPUT} mb-3`}
                                placeholder={t('feeding_instructions', { defaultValue: 'Add feeding instructions if necessary' })}
                                value={lunchInstructions}
                                onChange={(e) => enforceFeedingText(e.target.value, setLunchInstructions)}
                            />
                        )}

                        {/* Dinner */}
                        <label className={CHECK_LABEL}>
                            <input
                                type="checkbox"
                                className="accent-[#2c4a30]"
                                checked={receivesDinner}
                                onChange={(e) => setReceivesDinner(e.target.checked)}
                            />
                            {t('dinner', { defaultValue: 'Dinner' })}
                        </label>
                        {receivesDinner && (
                            <input
                                type="text"
                                className={INPUT}
                                placeholder={t('feeding_instructions', { defaultValue: 'Add feeding instructions if necessary' })}
                                value={dinnerInstructions}
                                onChange={(e) => enforceFeedingText(e.target.value, setDinnerInstructions)}
                            />
                        )}
                    </div>

                    {/* Vet Name */}
                    <div>
                        <label className={LABEL}>{t('veterinarian', { defaultValue: 'Veterinarian Name' })}</label>
                        <input
                            type="text"
                            autoComplete="off"
                            className={INPUT}
                            value={veterinarian}
                            onChange={(e) => setVeterinarian(e.target.value)}
                            placeholder={t('veterinarian', { defaultValue: 'Veterinarian Name' })}
                        />
                    </div>

                    {/* Vet Phone */}
                    <div>
                        <label className={LABEL}>{t('veterinarian_phone', { defaultValue: 'Veterinarian Phone' })}</label>
                        <input
                            type="text"
                            autoComplete="off"
                            className={INPUT}
                            value={veterinarianPhone}
                            onChange={(e) => setVeterinarianPhone(e.target.value)}
                            placeholder={t('veterinarian_phone', { defaultValue: 'Veterinarian Phone' })}
                        />
                    </div>

                    {/* Medications */}
                    <div>
                        <label className={LABEL}>{t('medications_question', { defaultValue: 'Medications?' })}</label>
                        <select
                            value={medications}
                            onChange={(e) => setMedications(e.target.value as 'Yes' | 'No')}
                            className={SELECT}
                        >
                            <option value="No">{t('no', { defaultValue: 'No' })}</option>
                            <option value="Yes">{t('yes', { defaultValue: 'Yes' })}</option>
                        </select>
                        {medications === 'Yes' && (
                            <textarea
                                maxLength={250}
                                placeholder={t('medications_placeholder', { defaultValue: 'List any medications, dosages, and timing (max 250 characters)' })}
                                className={TEXTAREA}
                                value={medicationDetails}
                                onChange={(e) => setMedicationDetails(e.target.value)}
                            />
                        )}
                    </div>

                    {/* Boarding Experience */}
                    <div>
                        <label className={LABEL}>{t('boarding_question', { defaultValue: 'Boarding/Daycare Experience?' })}</label>
                        <select
                            value={boardingExperience}
                            onChange={(e) => setBoardingExperience(e.target.value as 'Yes' | 'No')}
                            className={SELECT}
                        >
                            <option value="No">{t('no', { defaultValue: 'No' })}</option>
                            <option value="Yes">{t('yes', { defaultValue: 'Yes' })}</option>
                        </select>
                        {boardingExperience === 'Yes' && (
                            <textarea
                                maxLength={250}
                                placeholder={t('boarding_placeholder', { defaultValue: 'Describe Experience (max 250 characters)' })}
                                className={TEXTAREA}
                                value={boardingExperienceDetails}
                                onChange={(e) => setBoardingExperienceDetails(e.target.value)}
                            />
                        )}
                    </div>

                    {/* Afraid of Anything */}
                    <div>
                        <label className={LABEL}>{t('fear_question', { defaultValue: 'Afraid of Anything?' })}</label>
                        <select
                            value={afraidOfAnything}
                            onChange={(e) => setAfraidOfAnything(e.target.value as 'Yes' | 'No')}
                            className={SELECT}
                        >
                            <option value="No">{t('no', { defaultValue: 'No' })}</option>
                            <option value="Yes">{t('yes', { defaultValue: 'Yes' })}</option>
                        </select>
                        {afraidOfAnything === 'Yes' && (
                            <textarea
                                maxLength={250}
                                placeholder={t('fear_placeholder', { defaultValue: 'Describe Fears (max 250 characters)' })}
                                className={TEXTAREA}
                                value={fearDetails}
                                onChange={(e) => setFearDetails(e.target.value)}
                            />
                        )}
                    </div>

                    {/* Vaccinations Section */}
                    <div>
                        <label className="block font-semibold mb-2 text-sm text-[#2c4a30]">
                            {t('vaccinations_section', { defaultValue: 'Vaccinations' })}
                        </label>

                        {/* Upload control: allow multiple; up to two will be saved */}
                        <div className="mb-2">
                            <label
                                htmlFor="vaccine-uploads"
                                className="underline cursor-pointer text-sm text-[#2c4a30] hover:text-[#1f3523]"
                            >
                                {t('choose_file_default', { defaultValue: 'Upload Vaccine File(s) (Image or PDF)' })}
                            </label>
                            <input
                                id="vaccine-uploads"
                                type="file"
                                accept=".pdf,image/*,.heic"
                                multiple
                                onChange={(e) => handleNewVaccineFiles(e.target.files)}
                                className="hidden"
                            />
                        </div>

                        {/* Existing remote files */}
                        {remoteVaccineFiles.length > 0 && (
                            <div className="space-y-2 mb-3">
                                {remoteVaccineFiles.map((rf) => (
                                    <div
                                        key={`${rf.index}-${rf.name}`}
                                        className="flex items-center justify-between bg-[#f7f3e9] border border-[#2c4a30] p-2 rounded text-sm"
                                    >
                                        <span className="truncate">{rf.name}</span>
                                        <div className="flex items-center gap-4">
                                            <a href={rf.url} target="_blank" rel="noopener noreferrer" className="underline text-[#2c4a30] hover:text-[#1f3523]">
                                                {rf.ext === 'pdf' ? t('view_file', { defaultValue: 'View File' }) : t('view_image', { defaultValue: 'View Image' })}
                                            </a>
                                            <button
                                                type="button"
                                                onClick={() => removeRemoteFile(rf)}
                                                className="text-red-600 underline"
                                            >
                                                {t('remove_file', { defaultValue: 'Remove' })}
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* Newly selected files (not yet uploaded) */}
                        {newVaccineFiles.length > 0 && (
                            <div className="space-y-2">
                                {newVaccineFiles.map((f, idx) => (
                                    <div
                                        key={idx}
                                        className="flex items-center justify-between bg-[#fbf9f3] border border-[#2c4a30] p-2 rounded text-sm"
                                    >
                                        <span className="truncate">{f.name}</span>
                                        <div className="flex items-center gap-4">
                                            <button
                                                type="button"
                                                onClick={() => removePendingNewFile(idx)}
                                                className="text-red-600 underline"
                                            >
                                                {t('remove_file', { defaultValue: 'Remove' })}
                                            </button>
                                        </div>
                                    </div>
                                ))}
                                <p className="text-xs text-[#2c4a30]">
                                    {t('upload_note_two_files', { defaultValue: 'Up to two files are saved. If more are selected, only the first two are used.' })}
                                </p>
                            </div>
                        )}
                    </div>

                    {/* Vaccine Expiration Dates */}
                    <div className="space-y-4 mt-6">
                        {(['Rabies', 'Bordetella', 'DAPP (or DHPP/DA2PP)', 'Canine Influenza'] as VaccineKey[]).map((vaccine) => (
                            <div key={vaccine}>
                                <label className="flex items-center gap-2 font-medium text-sm text-[#2c4a30]">
                                    <input
                                        type="checkbox"
                                        className="accent-[#2c4a30]"
                                        checked={vaccinationRecords[vaccine]?.isVaccinated || false}
                                        onChange={(e) => {
                                            setVaccinationRecords(prev => ({
                                                ...prev,
                                                [vaccine]: {
                                                    isVaccinated: e.target.checked,
                                                    expirationDate: e.target.checked ? (prev[vaccine]?.expirationDate || '') : ''
                                                }
                                            }));
                                        }}
                                    />
                                    {vaccine}
                                </label>

                                {vaccinationRecords[vaccine]?.isVaccinated && (
                                    <div className="mt-2">
                                        <label className={LABEL}>{t('expiration_date', { defaultValue: 'Expiration Date' })}</label>
                                        <input
                                            type="date"
                                            className={INPUT}
                                            value={vaccinationRecords[vaccine]?.expirationDate || ''}
                                            onChange={(e) => {
                                                setVaccinationRecords(prev => ({
                                                    ...prev,
                                                    [vaccine]: {
                                                        ...prev[vaccine],
                                                        expirationDate: e.target.value
                                                    }
                                                }));
                                            }}
                                        />
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        disabled={saving}
                        className="w-full bg-[#2c4a30] text-white py-3 rounded hover:bg-[#1f3523] transition"
                    >
                        {saving ? t('saving', { defaultValue: 'Saving…' }) : t('save_pet', { defaultValue: 'Save Pet' })}
                    </button>
                </form>
            </div>
        </div>
    );
}
