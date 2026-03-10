'use client';

// NOTE: This web page is intended to mirror the iOS view at
// .local-only/ios-real-reference/IndividualSelectServiceView.swift.
// Keep offered-service loading and downstream booking navigation aligned.
import { useEffect, useState, useCallback } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';
import {
    getFirestore,
    collection,
    doc,
    getDoc,
    getDocs,
    Timestamp
} from 'firebase/firestore';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { initializeApp, getApps } from 'firebase/app';

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY!,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN!,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID!,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET!,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID!,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID!,
};

const app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

type FirestoreMap = Record<string, unknown>;
type WaiverGate = {
    required: boolean;
    signed: boolean;
};
type VaccineKey = 'Rabies' | 'Bordetella' | 'Canine Influenza' | 'Distemper';
type PetVaccineRecord = {
    expiresAt: Date | null;
    isVaccinated: boolean;
};
type PetVaccineIssue = {
    petId: string;
    petName: string;
    issues: string[];
};
type VaccinationRecFS = {
    date?: Timestamp | null;
    expirationDate?: Timestamp | null;
    isVaccinated?: boolean;
} | null | undefined;
type PetDocFS = {
    petName?: string;
    vaccinationRecords?: Record<string, VaccinationRecFS>;
};

const policyKeyToEnum = (raw: string): VaccineKey | null => {
    const s = raw.toLowerCase();
    if (s.includes('rabies')) return 'Rabies';
    if (s.includes('bordetella')) return 'Bordetella';
    if (s.includes('influenza') || s.includes('civ')) return 'Canine Influenza';
    if (s.includes('distemper') || s.includes('dhpp') || s.includes('da2pp') || s.includes('dapp')) return 'Distemper';
    return null;
};

export default function IndividualSelectServicePage() {
    const t = useTranslations('individualSelectService');
    const locale = useLocale();
    const router = useRouter();
    const searchParams = useSearchParams();
    const businessId = searchParams.get('businessId');

    const [businessName, setBusinessName] = useState(t('default_business_name'));
    const [servicesOffered, setServicesOffered] = useState<string[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [showComingSoon, setShowComingSoon] = useState(false);
    const [showRequirementsAlert, setShowRequirementsAlert] = useState(false);

    const [requiresAssessment, setRequiresAssessment] = useState(false);
    const [waiverGate, setWaiverGate] = useState<WaiverGate>({ required: false, signed: true });
    const [vaccineIssues, setVaccineIssues] = useState<PetVaccineIssue[]>([]);

    const readWaiverGate = useCallback(async (bizId: string, businessData: FirestoreMap, userId: string): Promise<WaiverGate> => {
        const [waiverSnap, clientSnap] = await Promise.all([
            getDoc(doc(db, 'businesses', bizId, 'settings', 'clientWaiver')),
            getDoc(doc(db, 'userApprovedBusinesses', bizId, 'clients', userId)),
        ]);

        const waiverData = (waiverSnap.data() || {}) as FirestoreMap;
        const clientData = (clientSnap.data() || {}) as FirestoreMap;

        const required = !!businessData.waiverRequired;
        if (!required) {
            return { required: false, signed: true };
        }

        const features = ((businessData.features as FirestoreMap | undefined) || {}) as FirestoreMap;
        const enforceWaiverVersion = !!features.enforceWaiverVersion;
        const waiverVersion = typeof waiverData.waiverVersion === 'number' ? waiverData.waiverVersion : null;
        const waiverSignedVersion = typeof clientData.waiverVersionSigned === 'number' ? clientData.waiverVersionSigned : 0;

        const waiverUpdatedAt =
            (waiverData.lastUpdated instanceof Timestamp ? waiverData.lastUpdated.toDate() : null)
            || (businessData.waiverLastUpdated instanceof Timestamp ? businessData.waiverLastUpdated.toDate() : null);
        const waiverSignedAt =
            clientData.waiverSignedAt instanceof Timestamp ? clientData.waiverSignedAt.toDate() : null;
        const waiverSignedLegacy = clientData.waiverSigned === true;

        if (enforceWaiverVersion && waiverVersion !== null) {
            return { required: true, signed: waiverSignedVersion >= waiverVersion };
        }

        if (waiverUpdatedAt && waiverSignedAt) {
            return { required: true, signed: waiverSignedAt >= waiverUpdatedAt };
        }

        return { required: true, signed: waiverSignedAt !== null || waiverSignedLegacy };
    }, []);

    const readVaccineIssues = useCallback(async (userId: string, businessData: FirestoreMap): Promise<PetVaccineIssue[]> => {
        const requiredVaccines = new Set<VaccineKey>();
        const requiredVaccinationMap = ((businessData.requiredVaccinations as FirestoreMap | undefined) || {}) as FirestoreMap;

        Object.entries(requiredVaccinationMap).forEach(([rawKey, rawValue]) => {
            if (rawValue !== true) return;
            const key = policyKeyToEnum(rawKey);
            if (key) requiredVaccines.add(key);
        });

        if (requiredVaccines.size === 0) {
            return [];
        }

        const petSnapshot = await getDocs(collection(db, 'users', userId, 'pets'));
        if (petSnapshot.empty) {
            return [];
        }

        const today = new Date();
        today.setHours(0, 0, 0, 0);

        return petSnapshot.docs.reduce<PetVaccineIssue[]>((acc, petDoc) => {
            const petData = (petDoc.data() || {}) as PetDocFS;
            const petName = typeof petData.petName === 'string' && petData.petName.trim() !== ''
                ? petData.petName.trim()
                : t('requirements_guard_pet_fallback');

            const records = petData.vaccinationRecords ?? {};
            const normalized: Partial<Record<VaccineKey, PetVaccineRecord>> = {};

            Object.entries(records).forEach(([rawKey, record]) => {
                const key = policyKeyToEnum(rawKey);
                if (!key || !record || typeof record !== 'object') return;

                const expiresAt =
                    record.date instanceof Timestamp ? record.date.toDate()
                    : record.expirationDate instanceof Timestamp ? record.expirationDate.toDate()
                    : null;

                normalized[key] = {
                    expiresAt,
                    isVaccinated: !!record.isVaccinated,
                };
            });

            const issues: string[] = [];
            requiredVaccines.forEach((vaccine) => {
                const record = normalized[vaccine];
                if (!record?.isVaccinated || !record.expiresAt) {
                    issues.push(`${vaccine}: ${t('requirements_guard_missing_expiration')}`);
                    return;
                }

                const expiration = new Date(record.expiresAt);
                expiration.setHours(0, 0, 0, 0);
                if (expiration.getTime() < today.getTime()) {
                    issues.push(`${vaccine}: ${t('requirements_guard_expired')}`);
                }
            });

            if (issues.length > 0) {
                acc.push({
                    petId: petDoc.id,
                    petName,
                    issues,
                });
            }

            return acc;
        }, []);
    }, [t]);

    const loadBusinessServices = useCallback(async (bizId: string, userId: string) => {
        try {
            const snap = await getDoc(doc(db, 'businesses', bizId));
            const data = snap.data();

            if (!data) {
                console.warn('⚠️ No business found for ID:', bizId);
                router.push(`/${locale}/individualdashboard`);
                return;
            }

            setBusinessName(data.businessName || t('default_business_name'));

            const offered: string[] = [];
            if (data.offersBoarding) offered.push('boarding');
            if (data.offersDaycare) offered.push('daycare');
            if (data.offersGrooming) offered.push('grooming');
            if (data.offersTraining) offered.push('training');

            setRequiresAssessment(!!data.requiresAssessment);
            const businessData = (data || {}) as FirestoreMap;
            const [resolvedWaiverGate, resolvedVaccineIssues] = await Promise.all([
                readWaiverGate(bizId, businessData, userId),
                readVaccineIssues(userId, businessData),
            ]);

            setWaiverGate(resolvedWaiverGate);
            setVaccineIssues(resolvedVaccineIssues);

            setServicesOffered(offered);
        } catch (err) {
            console.error('❌ Error loading business:', err);
            router.push(`/${locale}/individualdashboard`);
        } finally {
            setIsLoading(false);
        }
    }, [t, router, locale, readWaiverGate, readVaccineIssues]);

    useEffect(() => {
        const unsub = onAuthStateChanged(auth, (user) => {
            if (!user) {
                router.push(`/${locale}/loginsignup`);
                return;
            }

            if (businessId) {
                console.log('📍 Loading select service view for businessId:', businessId);
                loadBusinessServices(businessId, user.uid);
            } else {
                console.warn('❌ Missing businessId in URL');
                router.push(`/${locale}/individualdashboard`);
            }
        });

        return () => unsub();
    }, [businessId, locale, router, loadBusinessServices]);

    const handleServiceClick = (service: string) => {
        if (!businessId) {
            console.error('❌ Cannot route without businessId');
            return;
        }

        const hasWaiverIssue = waiverGate.required && !waiverGate.signed;
        const hasVaccineIssues = vaccineIssues.length > 0;
        const requiresSignedWaiver = service === 'daycare' || service === 'boarding' || service === 'assessment';
        if (requiresSignedWaiver && (hasWaiverIssue || hasVaccineIssues)) {
            setShowRequirementsAlert(true);
            return;
        }

        const encodedName = encodeURIComponent(businessName);

        switch (service) {
            case 'daycare':
                router.push(`/${locale}/individualbookdaycare?businessId=${businessId}&businessName=${encodedName}`);
                break;
            case 'boarding':
                router.push(`/${locale}/individualbookboarding?businessId=${businessId}&businessName=${encodedName}`);
                break;
            case 'assessment':
                router.push(`/${locale}/individualbookassessment?businessId=${businessId}&businessName=${encodedName}`);
                break;
            default:
                setShowComingSoon(true);
                break;
        }
    };

    return (
        <div className="min-h-screen bg-[color:var(--color-background)] text-[color:var(--color-foreground)] px-4 py-6">
            <div className="w-full max-w-md mx-auto text-center space-y-4 px-2 sm:px-4">
                {/* ✅ Back Button */}
                <button
                    onClick={() => router.push(`/${locale}/individualbookservices`)}
                    className="mb-4 text-sm text-[color:var(--color-accent)] underline hover:opacity-90"
                >
                    ← {t('back_to_book_services')}
                </button>

                <h1 className="text-3xl font-bold text-[color:var(--color-accent)]">
                    {businessName}
                </h1>

                <p className="text-sm text-gray-500">{t('select_service_prompt')}</p>

                {isLoading ? (
                    <p className="text-sm text-gray-500">{t('loading_services')}</p>
                ) : servicesOffered.length === 0 ? (
                    <p className="text-sm text-gray-500">{t('no_services_available')}</p>
                ) : (
                    <div className="space-y-3">
                        {servicesOffered.includes('daycare') && (
                            <button
                                onClick={() => handleServiceClick('daycare')}
                                className="w-full max-w-xs mx-auto bg-green-900 text-white py-3 rounded hover:opacity-90 block text-sm"
                            >
                                {t('daycare_service')}
                            </button>
                        )}

                        {servicesOffered.includes('boarding') && (
                            <button
                                onClick={() => handleServiceClick('boarding')}
                                className="w-full max-w-xs mx-auto bg-green-900 text-white py-3 rounded hover:opacity-90 block text-sm"
                            >
                                {t('boarding_service')}
                            </button>
                        )}

                        {requiresAssessment && (
                            <button
                                onClick={() => handleServiceClick('assessment')}
                                className="w-full max-w-xs mx-auto bg-green-900 text-white py-3 rounded hover:opacity-90 block text-sm"
                            >
                                {t('schedule_assessment_service')}
                            </button>
                        )}

                        {(servicesOffered.includes('grooming') || servicesOffered.includes('training')) && (
                            <button
                                onClick={() => handleServiceClick('grooming')}
                                className="w-full max-w-xs mx-auto bg-gray-400 text-white py-3 rounded hover:opacity-90 block text-sm"
                            >
                                {t('other_services_button')}
                            </button>
                        )}
                    </div>
                )}

                {showComingSoon && (
                    <div className="mt-6 p-4 border border-yellow-500 bg-yellow-100 text-yellow-800 rounded text-sm">
                        <p className="font-semibold">{t('service_not_ready_title')}</p>
                        <p className="mt-1">{t('service_not_ready_message')}</p>
                        <button
                            onClick={() => setShowComingSoon(false)}
                            className="mt-3 underline"
                        >
                            {t('ok_button')}
                        </button>
                    </div>
                )}
            </div>

            {showRequirementsAlert && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
                    <div className="w-full max-w-lg rounded-xl bg-white p-6 text-gray-900 shadow-xl space-y-4">
                        <h2 className="text-lg font-semibold text-[color:var(--color-accent)]">
                            {t('requirements_guard_title')}
                        </h2>

                        <p className="text-sm text-gray-700">
                            {t('requirements_guard_intro')}
                        </p>

                        <div className="space-y-3 text-left">
                            {waiverGate.required && !waiverGate.signed && (
                                <div className="rounded-md border border-amber-200 bg-amber-50 p-3">
                                    <p className="text-sm font-medium text-amber-900">
                                        {t('requirements_guard_waiver_issue')}
                                    </p>
                                </div>
                            )}

                            {vaccineIssues.length > 0 && (
                                <div className="rounded-md border border-red-200 bg-red-50 p-3 space-y-3">
                                    <p className="text-sm font-medium text-red-900">
                                        {t('requirements_guard_vaccine_issue_intro')}
                                    </p>

                                    <ul className="space-y-2">
                                        {vaccineIssues.map((petIssue) => (
                                            <li key={petIssue.petId} className="rounded border border-red-200 bg-white p-3">
                                                <p className="text-sm font-semibold text-gray-900">{petIssue.petName}</p>
                                                <ul className="mt-2 list-disc list-inside space-y-1 text-sm text-gray-700">
                                                    {petIssue.issues.map((issue) => (
                                                        <li key={`${petIssue.petId}-${issue}`}>{issue}</li>
                                                    ))}
                                                </ul>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>

                        <div className="flex flex-wrap justify-center gap-3">
                            <button
                                onClick={() => setShowRequirementsAlert(false)}
                                className="rounded-md bg-gray-200 px-4 py-2 text-sm font-medium text-gray-800 hover:bg-gray-300"
                            >
                                {t('waiver_required_close_button')}
                            </button>

                            {vaccineIssues.length > 0 && (
                                <button
                                    onClick={() => router.push(`/${locale}/individualmypets`)}
                                    className="rounded-md bg-green-900 px-4 py-2 text-sm font-medium text-white hover:opacity-90"
                                >
                                    {t('requirements_guard_pets_cta')}
                                </button>
                            )}

                            {waiverGate.required && !waiverGate.signed && (
                                <button
                                    onClick={() => router.push(`/${locale}/waiveragreement?businessId=${businessId}`)}
                                    className="rounded-md bg-green-900 px-4 py-2 text-sm font-medium text-white hover:opacity-90"
                                >
                                    {t('waiver_required_cta')}
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
