'use client';

import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';

import { initializeApp } from 'firebase/app';
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
} from 'firebase/firestore';
import {
    getStorage,
    ref,
    getDownloadURL,
} from 'firebase/storage';

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
const storage = getStorage(app);

export default function AddEditPetPage() {
    const t = useTranslations('individualAddEditPet');
    const router = useRouter();
    const locale = useLocale();
    const searchParams = useSearchParams();
    const petId = searchParams.get('petId');

    const [userId, setUserId] = useState('');
    const [mode, setMode] = useState<'add' | 'edit'>('add');

    const [petName, setPetName] = useState('');
    const [petType, setPetType] = useState('Dog');
    const [gender, setGender] = useState('Male');
    const [spayedNeutered, setSpayedNeutered] = useState('Yes');
    const [breed, setBreed] = useState('');
    const [age, setAge] = useState('');
    const [weight, setWeight] = useState('');
    const [allergies, setAllergies] = useState('');
    const [currentFood, setCurrentFood] = useState('');
    const [cupsPerMeal, setCupsPerMeal] = useState('1');
    const [veterinarian, setVeterinarian] = useState('');
    const [veterinarianPhone, setVeterinarianPhone] = useState('');
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [ageUnit, setAgeUnit] = useState('Years');

    const [receivesBreakfast, setReceivesBreakfast] = useState(false);
    const [receivesLunch, setReceivesLunch] = useState(false);
    const [receivesDinner, setReceivesDinner] = useState(false);

    const [breakfastInstructions, setBreakfastInstructions] = useState('');
    const [lunchInstructions, setLunchInstructions] = useState('');
    const [dinnerInstructions, setDinnerInstructions] = useState('');

    const [medications, setMedications] = useState('No');
    const [medicationDetails, setMedicationDetails] = useState('');
    const [boardingExperience, setBoardingExperience] = useState('No');
    const [boardingExperienceDetails, setBoardingExperienceDetails] = useState('');
    const [afraidOfAnything, setAfraidOfAnything] = useState('No');
    const [fearDetails, setFearDetails] = useState('');

    const [vaccineFile, setVaccineFile] = useState<{ name: string; url: string } | null>(null);
    const [vaccinationRecords, setVaccinationRecords] = useState<Record<string, { isVaccinated: boolean; expirationDate: string }>>({
        Rabies: { isVaccinated: false, expirationDate: '' },
        Bordetella: { isVaccinated: false, expirationDate: '' },
        'DAPP (or DHPP/DA2PP)': { isVaccinated: false, expirationDate: '' },
        'Canine Influenza': { isVaccinated: false, expirationDate: '' }
    });

    useEffect(() => {
        console.log("🧪 useEffect mounted – checking Firebase auth state...");

        const unsub = onAuthStateChanged(auth, async (user) => {
            try {
                if (!user) {
                    console.warn("🚫 No authenticated user. Redirecting to login/signup.");
                    router.push(`/${locale}/loginsignup`);
                    return;
                }

                console.log("✅ Firebase Auth UID:", user.uid);
                setUserId(user.uid);

                if (petId) {
                    console.log("🐾 Detected petId, entering edit mode:", petId);
                    setMode('edit');

                    try {
                        await loadPetData(user.uid, petId);
                    } catch {
                        console.error("❌ Error loading pet data");
                    }
                } else {
                    console.log("🆕 No petId provided. Page is in add mode.");
                }
            } catch {
                console.error("❌ Error during auth/init logic");
            } finally {
                console.log("🎯 Setting loading to false");
                setLoading(false);
            }
        });

        return () => {
            console.log("🔄 Cleaning up Firebase auth listener");
            unsub();
        };
    }, [petId, locale, router]);

    const loadPetData = async (uid: string, petId: string) => {
        try {
            const docRef = doc(db, 'users', uid, 'pets', petId);
            const snap = await getDoc(docRef);

            if (!snap.exists()) {
                console.warn("🚫 No pet document found");
                return;
            }

            const data = snap.data();
            setPetName(data.petName || '');
            setPetType(data.petType || 'Dog');
            setGender(data.gender || 'Male');
            setSpayedNeutered(data.spayedNeutered || 'Yes');
            setBreed(data.breed || '');
            setAge(data.ageValue ? String(data.ageValue) : ''); // ✅ Fix: always set string
            setAgeUnit(data.ageUnit || 'Years');

            const dobString = (() => {
                const raw = data.dateOfBirth;
                if (!raw) return '';
                if (typeof raw === 'string') return raw;
                if (typeof raw === 'object' && 'toDate' in raw && typeof raw.toDate === 'function') {
                    return raw.toDate().toISOString().split('T')[0]; // convert Firestore Timestamp → 'YYYY-MM-DD'
                }
                return '';
            })();
            setDateOfBirth(dobString);

            setWeight(data.weight || '');
            setAllergies(data.allergies || '');
            setCurrentFood(data.currentFood || '');
            setCupsPerMeal(data.feedingAmount || '1');
            setVeterinarian(data.veterinarian || '');
            setVeterinarianPhone(data.veterinarianPhone || '');

            if (data.feedingSchedule) {
                setReceivesBreakfast(data.feedingSchedule.breakfast?.enabled || false);
                setBreakfastInstructions(data.feedingSchedule.breakfast?.instructions || '');
                setReceivesLunch(data.feedingSchedule.lunch?.enabled || false);
                setLunchInstructions(data.feedingSchedule.lunch?.instructions || '');
                setReceivesDinner(data.feedingSchedule.dinner?.enabled || false);
                setDinnerInstructions(data.feedingSchedule.dinner?.instructions || '');
            }

            setMedications(data.medications || 'No');
            setMedicationDetails(data.medicationDetails || '');
            setBoardingExperience(data.boardingExperience || 'No');
            setBoardingExperienceDetails(data.boardingExperienceDetails || '');
            setAfraidOfAnything(data.afraidOfAnything || 'No');
            setFearDetails(data.fearDetails || '');

            const formatDateString = (value: unknown): string => {
                if (!value) return '';
                if (typeof value === 'string') return value;
                if (
                    typeof value === 'object' &&
                    value !== null &&
                    'toDate' in value &&
                    typeof (value as { toDate?: unknown }).toDate === 'function'
                ) {
                    return (value as { toDate: () => Date }).toDate().toISOString().split('T')[0];
                }
                return '';
            };

            if (data.vaccinationRecords && typeof data.vaccinationRecords === 'object') {
                setVaccinationRecords({
                    Rabies: {
                        isVaccinated: data.vaccinationRecords.Rabies?.isVaccinated || false,
                        expirationDate: formatDateString(
                            data.vaccinationRecords.Rabies?.expirationDate || data.vaccinationRecords.Rabies?.date
                        ),
                    },
                    Bordetella: {
                        isVaccinated: data.vaccinationRecords.Bordetella?.isVaccinated || false,
                        expirationDate: formatDateString(
                            data.vaccinationRecords.Bordetella?.expirationDate || data.vaccinationRecords.Bordetella?.date
                        ),
                    },
                    'DAPP (or DHPP/DA2PP)': {
                        isVaccinated: data.vaccinationRecords['DAPP (or DHPP/DA2PP)']?.isVaccinated || false,
                        expirationDate: formatDateString(
                            data.vaccinationRecords['DAPP (or DHPP/DA2PP)']?.expirationDate || data.vaccinationRecords['DAPP (or DHPP/DA2PP)']?.date
                        ),
                    },
                    'Canine Influenza': {
                        isVaccinated: data.vaccinationRecords['Canine Influenza']?.isVaccinated || false,
                        expirationDate: formatDateString(
                            data.vaccinationRecords['Canine Influenza']?.expirationDate || data.vaccinationRecords['Canine Influenza']?.date
                        ),
                    },
                });
            } else {
                setVaccinationRecords({
                    Rabies: { isVaccinated: false, expirationDate: '' },
                    Bordetella: { isVaccinated: false, expirationDate: '' },
                    'DAPP (or DHPP/DA2PP)': { isVaccinated: false, expirationDate: '' },
                    'Canine Influenza': { isVaccinated: false, expirationDate: '' },
                });
            }

            // ✅ Vaccine file loading with fallback handling
            try {
                const extensions = ['pdf', 'jpg', 'jpeg', 'png'];
                let fileFound = false;

                for (const ext of extensions) {
                    const filePath = `vaccineRecords/${uid}/${petId}_1.${ext}`;
                    console.log(`🔍 Checking for vaccine file: ${filePath}`);

                    try {
                        const fileRef = ref(storage, filePath);
                        const url = await getDownloadURL(fileRef);
                        setVaccineFile({ name: `${petId}_1.${ext}`, url });
                        console.log(`✅ Found and loaded vaccine file: ${filePath}`);
                        fileFound = true;
                        break;
                    } catch {
                        console.warn(`⛔️ File not found or blocked: ${filePath}`);
                    }
                }

                if (!fileFound) {
                    console.warn('🚫 No valid vaccine file found for this pet.');
                    setVaccineFile(null);
                }
            } catch {
                console.error('🔥 Unexpected error while loading vaccine file');
                setVaccineFile(null);
            }

        } catch {
            console.error('❌ Error loading pet data');
        }
    };

    const handleSave = async () => {
        if (!petName.trim()) return alert(t('validation_pet_name_required'));
        if (!age.trim() || isNaN(Number(age))) return alert(t('validation_pet_age_invalid'));
        if (!weight.trim() || isNaN(Number(weight))) return alert(t('validation_pet_weight_invalid'));

        setSaving(true);

        const payload = {
            petName,
            petType,
            gender,
            spayedNeutered,
            breed,
            ageValue: age,
            ageUnit: ageUnit,
            weight,
            allergies,
            currentFood,
            feedingAmount: cupsPerMeal,
            veterinarian,
            veterinarianPhone,
            createdAt: Timestamp.now(),
        };

        try {
            const petCollectionRef = collection(db, 'users', userId, 'pets');
            if (mode === 'edit' && petId) {
                await updateDoc(doc(petCollectionRef, petId), payload);
            } else {
                await addDoc(petCollectionRef, payload);
            }
            router.push(`/${locale}/individualmypets`);
        } catch (err: unknown) {
            const message = err instanceof Error ? err.message : 'Unknown error';
            console.error('❌ Failed to save:', message);
            alert(t('save_error'));
        } finally {
            setSaving(false);
        }
    };

    if (loading) return <p className="text-center mt-10">{t('loading')}</p>;

    return (
        <div className="min-h-screen bg-[color:var(--color-background)] text-[color:var(--color-foreground)] px-4 py-8">
            <div className="w-full max-w-2xl mx-auto px-2 sm:px-4">
                <button
                    onClick={() => router.push(`/${locale}/individualmypets`)}
                    className="mb-6 text-sm text-[color:var(--color-accent)] underline"
                >
                    ← {t('back_to_my_pets')}
                </button>

                <h1 className="text-3xl font-bold text-[color:var(--color-accent)] text-center mb-6">
                    {mode === 'edit' ? t('edit_pet_title') : t('add_pet_title')}
                </h1>

                <form onSubmit={(e) => { e.preventDefault(); handleSave(); }} className="space-y-6">
                    {/* Pet Name */}
                    <div>
                        <label className="block font-medium mb-1 text-sm">{t('pet_name')}</label>
                        <input
                            type="text"
                            className="w-full border px-4 py-2 rounded text-sm"
                            value={petName}
                            onChange={(e) => setPetName(e.target.value)}
                        />
                    </div>

                    {/* Species */}
                    <div>
                        <label className="block font-medium mb-1 text-sm">{t('pet_type')}</label>
                        <select
                            value={petType}
                            onChange={(e) => setPetType(e.target.value)}
                            className="w-full border px-4 py-2 rounded text-sm"
                        >
                            <option value="Dog">Dog</option>
                            <option value="Cat">Cat</option>
                        </select>
                    </div>

                    {/* Gender */}
                    <div>
                        <label className="block font-medium mb-1 text-sm">{t('gender')}</label>
                        <select
                            value={gender}
                            onChange={(e) => setGender(e.target.value)}
                            className="w-full border px-4 py-2 rounded text-sm"
                        >
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                    </div>

                    {/* Spayed / Neutered */}
                    <div>
                        <label className="block font-medium mb-1 text-sm">{t('spayed_neutered')}</label>
                        <select
                            value={spayedNeutered}
                            onChange={(e) => setSpayedNeutered(e.target.value)}
                            className="w-full border px-4 py-2 rounded text-sm"
                        >
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select>
                    </div>

                    {/* Breed */}
                    <div>
                        <label className="block font-medium mb-1 text-sm">{t('breed')}</label>
                        <input
                            type="text"
                            className="w-full border px-4 py-2 rounded text-sm"
                            value={breed}
                            onChange={(e) => setBreed(e.target.value)}
                        />
                    </div>

                    {/* Date of Birth */}
                    <div>
                        <label className="block font-medium mb-1 text-sm">{t('dob')}</label>
                        <input
                            type="date"
                            className="w-full border px-4 py-2 rounded text-sm"
                            value={dateOfBirth}
                            onChange={(e) => {
                                setDateOfBirth(e.target.value);

                                const dob = new Date(e.target.value);
                                const now = new Date();
                                const months = (now.getFullYear() - dob.getFullYear()) * 12 + (now.getMonth() - dob.getMonth());

                                if (months >= 12) {
                                    setAge(String(Math.floor(months / 12)));
                                    setAgeUnit('Years');
                                } else {
                                    setAge(String(months));
                                    setAgeUnit('Months');
                                }
                            }}
                        />
                    </div>

                    {/* Auto-Calculated Age */}
                    <div className="flex gap-4">
                        <div className="flex-1">
                            <label className="block font-medium mb-1 text-sm">{t('age')}</label>
                            <input
                                type="text"
                                className="w-full border px-4 py-2 rounded text-sm"
                                value={age}
                                readOnly
                            />
                        </div>
                        <div className="flex-1">
                            <label className="block font-medium mb-1 text-sm">{t('age_unit')}</label>
                            <select
                                value={ageUnit}
                                onChange={(e) => setAgeUnit(e.target.value)}
                                className="w-full border px-4 py-2 rounded text-sm"
                            >
                                <option value="Years">{t('years')}</option>
                                <option value="Months">{t('months')}</option>
                            </select>
                        </div>
                    </div>

                    {/* Weight */}
                    <div>
                        <label className="block font-medium mb-1 text-sm">{t('weight')}</label>
                        <input
                            type="text"
                            className="w-full border px-4 py-2 rounded text-sm"
                            value={weight}
                            onChange={(e) => setWeight(e.target.value)}
                            placeholder="e.g., 45"
                        />
                    </div>

                    {/* Allergies */}
                    <div>
                        <label className="block font-medium mb-1 text-sm">{t('allergies')}</label>
                        <input
                            type="text"
                            className="w-full border px-4 py-2 rounded text-sm"
                            value={allergies}
                            onChange={(e) => setAllergies(e.target.value)}
                            placeholder={t('none')}
                        />
                    </div>

                    {/* Current Food */}
                    <div>
                        <label className="block font-medium mb-1 text-sm">{t('current_food')}</label>
                        <input
                            type="text"
                            className="w-full border px-4 py-2 rounded text-sm"
                            value={currentFood}
                            onChange={(e) => setCurrentFood(e.target.value)}
                            placeholder="e.g., Acana"
                        />
                    </div>

                    {/* Cups per Meal */}
                    <div>
                        <label className="block font-medium mb-1 text-sm">{t('cups_per_meal')}</label>
                        <select
                            value={cupsPerMeal}
                            onChange={(e) => setCupsPerMeal(e.target.value)}
                            className="w-full border px-4 py-2 rounded text-sm"
                        >
                            <option value="1/2">1/2</option>
                            <option value="3/4">3/4</option>
                            <option value="1">1</option>
                            <option value="1.5">1.5</option>
                            <option value="2">2</option>
                            <option value="2.5">2.5</option>
                            <option value="3">3</option>
                            <option value="3.5">3.5</option>
                            <option value="4">4</option>
                        </select>
                    </div>

                    {/* Feeding Schedule */}
                    <div>
                        <label className="block font-medium mb-2 text-sm">{t('meals_given')}</label>

                        {/* Breakfast */}
                        <label className="flex items-center gap-2 mt-1 mb-2 text-sm">
                            <input
                                type="checkbox"
                                checked={receivesBreakfast}
                                onChange={(e) => setReceivesBreakfast(e.target.checked)}
                            />
                            {t('breakfast')}
                        </label>
                        {receivesBreakfast && (
                            <input
                                type="text"
                                className="w-full border px-4 py-2 rounded text-sm mb-3"
                                placeholder={t('feeding_instructions')}
                                value={breakfastInstructions}
                                onChange={(e) => setBreakfastInstructions(e.target.value)}
                            />
                        )}

                        {/* Lunch */}
                        <label className="flex items-center gap-2 mt-1 mb-2 text-sm">
                            <input
                                type="checkbox"
                                checked={receivesLunch}
                                onChange={(e) => setReceivesLunch(e.target.checked)}
                            />
                            {t('lunch')}
                        </label>
                        {receivesLunch && (
                            <input
                                type="text"
                                className="w-full border px-4 py-2 rounded text-sm mb-3"
                                placeholder={t('feeding_instructions')}
                                value={lunchInstructions}
                                onChange={(e) => setLunchInstructions(e.target.value)}
                            />
                        )}

                        {/* Dinner */}
                        <label className="flex items-center gap-2 mt-1 mb-2 text-sm">
                            <input
                                type="checkbox"
                                checked={receivesDinner}
                                onChange={(e) => setReceivesDinner(e.target.checked)}
                            />
                            {t('dinner')}
                        </label>
                        {receivesDinner && (
                            <input
                                type="text"
                                className="w-full border px-4 py-2 rounded text-sm"
                                placeholder={t('feeding_instructions')}
                                value={dinnerInstructions}
                                onChange={(e) => setDinnerInstructions(e.target.value)}
                            />
                        )}
                    </div>

                    {/* Vet Name */}
                    <div>
                        <label className="block font-medium mb-1 text-sm">{t('veterinarian')}</label>
                        <input
                            type="text"
                            className="w-full border px-4 py-2 rounded text-sm"
                            value={veterinarian}
                            onChange={(e) => setVeterinarian(e.target.value)}
                        />
                    </div>

                    {/* Vet Phone */}
                    <div>
                        <label className="block font-medium mb-1 text-sm">{t('veterinarian_phone')}</label>
                        <input
                            type="text"
                            className="w-full border px-4 py-2 rounded text-sm"
                            value={veterinarianPhone}
                            onChange={(e) => setVeterinarianPhone(e.target.value)}
                        />
                    </div>

                    {/* Medications */}
                    <div>
                        <label className="block font-medium mb-1 text-sm">{t('medications_question')}</label>
                        <select
                            value={medications}
                            onChange={(e) => setMedications(e.target.value)}
                            className="w-full border px-4 py-2 rounded text-sm"
                        >
                            <option value="No">{t('no')}</option>
                            <option value="Yes">{t('yes')}</option>
                        </select>

                        {medications === 'Yes' && (
                            <textarea
                                maxLength={250}
                                placeholder={t('medications_placeholder')}
                                className="w-full border mt-2 px-4 py-2 rounded text-sm"
                                value={medicationDetails}
                                onChange={(e) => setMedicationDetails(e.target.value)}
                            />
                        )}
                    </div>

                    {/* Boarding Experience */}
                    <div>
                        <label className="block font-medium mb-1 text-sm">{t('boarding_question')}</label>
                        <select
                            value={boardingExperience}
                            onChange={(e) => setBoardingExperience(e.target.value)}
                            className="w-full border px-4 py-2 rounded text-sm"
                        >
                            <option value="No">{t('no')}</option>
                            <option value="Yes">{t('yes')}</option>
                        </select>

                        {boardingExperience === 'Yes' && (
                            <textarea
                                maxLength={250}
                                placeholder={t('boarding_placeholder')}
                                className="w-full border mt-2 px-4 py-2 rounded text-sm"
                                value={boardingExperienceDetails}
                                onChange={(e) => setBoardingExperienceDetails(e.target.value)}
                            />
                        )}
                    </div>

                    {/* Fear Info */}
                    <div>
                        <label className="block font-medium mb-1 text-sm">{t('fear_question')}</label>
                        <select
                            value={afraidOfAnything}
                            onChange={(e) => setAfraidOfAnything(e.target.value)}
                            className="w-full border px-4 py-2 rounded text-sm"
                        >
                            <option value="No">{t('no')}</option>
                            <option value="Yes">{t('yes')}</option>
                        </select>

                        {afraidOfAnything === 'Yes' && (
                            <textarea
                                maxLength={250}
                                placeholder={t('fear_placeholder')}
                                className="w-full border mt-2 px-4 py-2 rounded text-sm"
                                value={fearDetails}
                                onChange={(e) => setFearDetails(e.target.value)}
                            />
                        )}
                    </div>

                    {/* Vaccine Upload */}
                    <div>
                        <label className="block font-semibold mb-2 text-[color:var(--color-accent)] text-sm">
                            {t('vaccinations_section')}
                        </label>

                        <div className="mb-2">
                            <label
                                htmlFor="vaccine-upload"
                                className="text-blue-600 underline cursor-pointer text-sm"
                            >
                                {vaccineFile
                                    ? `${t('selected_file')}: ${vaccineFile.name}`
                                    : t('choose_file_default')}
                            </label>
                            <input
                                id="vaccine-upload"
                                type="file"
                                accept="image/*,.pdf"
                                onChange={(e) => {
                                    const file = e.target.files?.[0];
                                    if (file) {
                                        setVaccineFile({
                                            name: file.name,
                                            url: URL.createObjectURL(file)
                                        });
                                    }
                                }}
                                className="hidden"
                            />
                        </div>

                        {vaccineFile && (
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 bg-gray-100 border p-2 rounded">
                                <span className="text-sm truncate">{vaccineFile.name}</span>
                                <div className="flex gap-4 text-sm">
                                    <a
                                        href={vaccineFile.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-green-700 underline"
                                    >
                                        {vaccineFile.name.endsWith('.pdf') ? t('view_file') : t('view_image')}
                                    </a>
                                    <button
                                        type="button"
                                        onClick={() => setVaccineFile(null)}
                                        className="text-red-600 underline"
                                    >
                                        {t('remove_file')}
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Vaccine Expiration */}
                    <div className="space-y-4 mt-6">
                        {['Rabies', 'Bordetella', 'DAPP (or DHPP/DA2PP)', 'Canine Influenza'].map((vaccine) => (
                            <div key={vaccine}>
                                <label className="flex items-center gap-2 font-medium text-sm">
                                    <input
                                        type="checkbox"
                                        checked={vaccinationRecords[vaccine]?.isVaccinated || false}
                                        onChange={(e) => {
                                            setVaccinationRecords((prev) => ({
                                                ...prev,
                                                [vaccine]: {
                                                    isVaccinated: e.target.checked,
                                                    expirationDate: e.target.checked
                                                        ? prev[vaccine]?.expirationDate || ''
                                                        : ''
                                                }
                                            }));
                                        }}
                                    />
                                    {vaccine}
                                </label>

                                {vaccinationRecords[vaccine]?.isVaccinated && (
                                    <div className="mt-2">
                                        <label className="block text-sm mb-1">{t('expiration_date')}</label>
                                        <input
                                            type="date"
                                            className="w-full border px-4 py-2 rounded text-sm"
                                            value={vaccinationRecords[vaccine]?.expirationDate || ''}
                                            onChange={(e) => {
                                                setVaccinationRecords((prev) => ({
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

                    {/* Submit Button */}
                    <button
                        type="submit"
                        disabled={saving}
                        className="w-full bg-green-800 text-white py-3 rounded hover:bg-green-700 transition"
                    >
                        {saving ? t('saving') : t('save_pet')}
                    </button>
                </form>
            </div>
        </div>
    );
}
