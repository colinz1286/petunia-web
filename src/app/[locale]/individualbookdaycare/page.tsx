'use client';

import { useEffect, useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { useRouter, useSearchParams } from 'next/navigation';
import {
    getFirestore,
    collection,
    getDocs,
    getDoc,
    setDoc,
    doc,
    Timestamp,
} from 'firebase/firestore';
import {
    getDatabase,
    ref as rtdbRef,
    set as rtdbSet
} from 'firebase/database';
import {
    getAuth,
    onAuthStateChanged
} from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import GroomingModal from '@/components/GroomingModal';

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY!,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN!,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID!,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET!,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID!,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID!,
};

initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

type Pet = {
    id: string;
    name: string;
};

type DraftBooking = {
    date: Date;
    dropOffTime: string;
    petIds: string[];
    groomingAddOns?: Record<string, string[]>;
};

function serializeGroomingSelections(
    selections: Record<string, Set<string>>
): Record<string, string[]> {
    const result: Record<string, string[]> = {};
    for (const [petId, services] of Object.entries(selections)) {
        if (services.size > 0) {
            result[petId] = Array.from(services);
        }
    }
    return result;
}

export default function IndividualBookDaycarePage() {
    const t = useTranslations('individualBookDaycare');
    const locale = useLocale();
    const router = useRouter();
    const params = useSearchParams();

    // ✅ Waiver enforcement
    const [waiverSigned, setWaiverSigned] = useState(true); // Default to true for safety
    const [showWaiverModal, setShowWaiverModal] = useState(false);
    const [hasCheckedAgreement, setHasCheckedAgreement] = useState(false); // new

    const businessId = params.get('businessId') || '';
    const businessName = params.get('businessName') || t('default_business_name');

    const [userId, setUserId] = useState('');
    const [pets, setPets] = useState<Pet[]>([]);
    const [selectedPetIds, setSelectedPetIds] = useState<string[]>([]);
    const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
    const [dropOffOptions, setDropOffOptions] = useState<string[]>([]);
    const [selectedTime, setSelectedTime] = useState('');
    const [hasExistingReservation, setHasExistingReservation] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [waiverRequired, setWaiverRequired] = useState(false);
    const [error] = useState<string | null>(null);
    const [groomingAvailable, setGroomingAvailable] = useState(false);
    const [groomingServices, setGroomingServices] = useState<string[]>([]);
    const [groomingSelections, setGroomingSelections] = useState<Record<string, Set<string>>>({});
    const [draftBookings, setDraftBookings] = useState<DraftBooking[]>([]);
    const [showGroomingPrompt, setShowGroomingPrompt] = useState(false);
    const [pendingDraft, setPendingDraft] = useState<DraftBooking | null>(null);
    const [showGroomingUI, setShowGroomingUI] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    async function loadPets(uid: string) {
        const snap = await getDocs(collection(db, 'users', uid, 'pets'));
        const pets = snap.docs.map((d) => ({
            id: d.id,
            name: d.data().petName || 'Unnamed',
        }));
        setPets(pets);
        setSelectedPetIds(pets.map(p => p.id));
    }

    useEffect(() => {
        async function loadBusinessSettingsInline() {
            const snap = await getDoc(doc(db, 'businesses', businessId));
            const data = snap.data() || {};
            const dropOffMap = data.dropOffTimesDaycare || {};
            const weekday = new Date().toLocaleDateString('en-US', { weekday: 'long' });

            const options = (dropOffMap[weekday] || []).slice().sort((a: string, b: string) => {
                const toMinutes = (time: string) => {
                    const [hourMin, period] = time.split(' ');
                    const [hourStr, minuteStr] = hourMin.split(':');
                    let hour = Number(hourStr);
                    const minute = Number(minuteStr);
                    if (period === 'PM' && hour !== 12) hour += 12;
                    if (period === 'AM' && hour === 12) hour = 0;
                    return hour * 60 + minute;
                };
                return toMinutes(a) - toMinutes(b);
            });

            setDropOffOptions(options);
            setSelectedTime(options[0] || '');
            setWaiverRequired(data.waiverRequired ?? false);
            setGroomingAvailable(data.groomingAvailableAsAddOnToDaycare ?? false);
            setGroomingServices(data.groomingServices ?? []);
        }

        onAuthStateChanged(auth, async (user) => {
            if (!user) {
                router.push(`/${locale}/loginsignup`);
                return;
            }

            const uid = user.uid;
            setUserId(uid);

            await loadPets(uid);
            await loadBusinessSettingsInline();

            try {
                const businessSnap = await getDoc(doc(db, 'businesses', businessId));
                const clientSnap = await getDoc(doc(db, 'userApprovedBusinesses', businessId, 'clients', uid));

                const rawLastUpdated = businessSnap.data()?.waiverLastUpdated;
                const rawSignedAt = clientSnap.data()?.waiverSignedAt;

                const waiverLastUpdated = rawLastUpdated?.toDate ? rawLastUpdated.toDate() : rawLastUpdated;
                const waiverSignedAt = rawSignedAt?.toDate ? rawSignedAt.toDate() : rawSignedAt;

                if (!waiverRequired) {
                    setWaiverSigned(true);
                } else if (!waiverSignedAt) {
                    setWaiverSigned(false);
                    setShowWaiverModal(true);
                } else if (waiverLastUpdated && waiverSignedAt < waiverLastUpdated) {
                    setWaiverSigned(false);
                    setShowWaiverModal(true);
                } else {
                    setWaiverSigned(true);
                }
            } catch (err) {
                console.error('❌ Error checking waiver status:', err);
                setWaiverSigned(true);
            }

            setIsLoading(false);
        });
    }, [locale, router, businessId, waiverRequired]);

    useEffect(() => {
        async function recalculateDropOffOptions() {
            if (!selectedDate) return;

            const now = new Date();
            const isToday = selectedDate.toDateString() === now.toDateString();

            const snap = await getDoc(doc(db, 'businesses', businessId));
            const data = snap.data() || {};
            const dropOffMap = data.dropOffTimesDaycare || {};
            const weekday = selectedDate.toLocaleDateString('en-US', { weekday: 'long' });

            // Sort all time options into chronological order
            const options: string[] = (dropOffMap[weekday] || []).slice().sort((a: string, b: string) => {
                const toMinutes = (time: string) => {
                    const [hourMin, period] = time.split(' ');
                    const [hourStr, minuteStr] = hourMin.split(':');
                    let hour = Number(hourStr);
                    const minute = Number(minuteStr);
                    if (period === 'PM' && hour !== 12) hour += 12;
                    if (period === 'AM' && hour === 12) hour = 0;
                    return hour * 60 + minute;
                };
                return toMinutes(a) - toMinutes(b);
            });

            // Filter out past time slots for today
            const filteredOptions = isToday
                ? options.filter((opt) => {
                    const [hourMin, period] = opt.split(' ');
                    const [hourStr, minuteStr] = hourMin.split(':');
                    let hour = Number(hourStr);
                    const minute = Number(minuteStr);
                    if (period === 'PM' && hour !== 12) hour += 12;
                    if (period === 'AM' && hour === 12) hour = 0;

                    const dropOffDateTime = new Date(selectedDate);
                    dropOffDateTime.setHours(hour, minute, 0, 0);
                    return dropOffDateTime > now;
                })
                : options;

            // If no valid drop-off times remain today, auto-advance to tomorrow
            if (isToday && filteredOptions.length === 0) {
                const tomorrow = new Date();
                tomorrow.setDate(now.getDate() + 1);
                setSelectedDate(tomorrow); // triggers this useEffect again
                return;
            }

            setDropOffOptions(filteredOptions);
            setSelectedTime(filteredOptions[0] || '');
        }

        recalculateDropOffOptions();
    }, [selectedDate, businessId]);

    async function checkForExistingReservation(date: Date, uid: string) {
        const startOfDay = new Date(date);
        startOfDay.setHours(0, 0, 0, 0);

        const endOfDay = new Date(date);
        endOfDay.setHours(23, 59, 59, 999);

        const snap = await getDocs(collection(db, 'daycareReservations'));

        const matching = snap.docs.find(doc => {
            const data = doc.data();
            const resDate = data.date?.toDate?.();
            const status = data.status;
            return (
                data.businessId === businessId &&
                data.userId === uid &&
                ['approved', 'pending'].includes(status) &&
                resDate >= startOfDay && resDate <= endOfDay
            );
        });

        setHasExistingReservation(!!matching);
    }

    function addBookingDraft() {
        if (!selectedDate || !selectedTime || selectedPetIds.length === 0) return;

        const exists = draftBookings.some(
            (b) =>
                b.date.toDateString() === selectedDate.toDateString() &&
                b.dropOffTime === selectedTime &&
                JSON.stringify(b.petIds.sort()) === JSON.stringify(selectedPetIds.slice().sort())
        );
        if (exists) {
            alert(t('duplicate_daycare_message'));
            return;
        }

        const newDraft: DraftBooking = {
            date: selectedDate,
            dropOffTime: selectedTime,
            petIds: [...selectedPetIds],
        };

        if (groomingAvailable && groomingServices.length > 0) {
            setPendingDraft(newDraft);
            setShowGroomingPrompt(true);
        } else {
            setDraftBookings((prev) => [...prev, newDraft]); // ✅ Only add draft if no grooming
            resetFormAfterDraft();
        }
    }

    function resetFormAfterDraft() {
        setSelectedTime('');
        setDropOffOptions([]);
        setSelectedPetIds(pets.map(p => p.id));
    }

    async function submitBooking() {
        if (draftBookings.length === 0) {
            alert(t('no_bookings_to_submit'));
            return;
        }

        if (waiverRequired && !waiverSigned) {
            setShowWaiverModal(true);
            return;
        }

        const firestore = getFirestore();

        const userSnap = await getDoc(doc(firestore, 'users', userId));
        const firstName = userSnap.data()?.firstName || 'Client';
        const lastName = userSnap.data()?.lastName || '';
        const ownerName = `${firstName} ${lastName}`.trim();

        for (const booking of draftBookings) {
            const reservationId = crypto.randomUUID();
            const realtimeKey = reservationId;

            const petStatuses: Record<string, string> = {};
            booking.petIds.forEach(petId => {
                petStatuses[petId] = 'pending';
            });

            const groomingForReservation = serializeGroomingSelections(groomingSelections);

            const reservation: {
                userId: string;
                businessId: string;
                petIds: string[];
                date: Timestamp;
                arrivalWindow: string;
                status: string;
                realtimeKey: string;
                petStatuses: Record<string, string>;
                groomingAddOns?: Record<string, string[]>;
            } = {
                userId,
                businessId,
                petIds: booking.petIds,
                date: Timestamp.fromDate(booking.date),
                arrivalWindow: booking.dropOffTime,
                status: 'approved',
                realtimeKey,
                petStatuses,
            };

            if (Object.keys(groomingForReservation).length > 0) {
                reservation.groomingAddOns = groomingForReservation;
            }

            await setDoc(doc(firestore, 'daycareReservations', reservationId), reservation);

            for (const petId of booking.petIds) {
                const pet = pets.find(p => p.id === petId);
                if (!pet) continue;

                const rtdbEntry: {
                    dogName: string;
                    ownerName: string;
                    type: string;
                    date: string;
                    arrivalWindow: string;
                    status: string;
                    userId: string;
                    realtimeKey: string;
                    groomingAddOns?: string[];
                    medications?: string;
                    medicationDetails?: string;
                    spayedNeutered?: string;
                } = {
                    dogName: pet.name,
                    ownerName,
                    type: 'Daycare',
                    date: booking.date.toISOString().split('T')[0],
                    arrivalWindow: booking.dropOffTime,
                    status: 'approved',
                    userId,
                    realtimeKey,
                };

                if (groomingSelections[petId] && groomingSelections[petId]!.size > 0) {
                    rtdbEntry.groomingAddOns = Array.from(groomingSelections[petId]!);
                }

                const petSnap = await getDoc(doc(firestore, 'users', userId, 'pets', petId));
                const petData = petSnap.data();

                if (petData) {
                    if (petData.medications) rtdbEntry.medications = petData.medications;
                    if (petData.medicationDetails) rtdbEntry.medicationDetails = petData.medicationDetails;
                    if (petData.spayedNeutered) rtdbEntry.spayedNeutered = petData.spayedNeutered;
                }

                await rtdbSet(
                    rtdbRef(getDatabase(), `upcomingReservations/${businessId}/${realtimeKey}-${petId}`),
                    rtdbEntry
                );
            }
        }
    }

    return (
        <div className="min-h-screen bg-[color:var(--color-background)] px-4 py-6 text-[color:var(--color-foreground)]">
            <div className="w-full max-w-xl mx-auto space-y-6">
                {/* ✅ Back Button */}
                <button
                    onClick={() =>
                        router.push(`/${locale}/individualselectservice?businessId=${businessId}`)
                    }
                    className="mb-4 text-sm text-[color:var(--color-accent)] underline hover:opacity-90"
                >
                    ← {t('back_to_select_service')}
                </button>

                <h1 className="text-3xl font-bold text-center text-[color:var(--color-accent)]">
                    {t('book_daycare_title')}
                    <br />
                    <span className="text-lg font-normal text-gray-600">{businessName}</span>
                </h1>

                {error && <p className="text-red-600 text-center text-sm">{error}</p>}
                {isLoading ? (
                    <p className="text-center text-gray-500 text-sm">{t('loading')}</p>
                ) : (
                    <div className="flex flex-col items-center space-y-6">
                        {/* ✅ Select a Date */}
                        <div className="flex flex-col items-center space-y-1 w-full">
                            <label className="font-semibold text-center text-sm">{t('select_date')}</label>
                            <DatePicker
                                selected={selectedDate}
                                onChange={(date: Date | null) => {
                                    setSelectedDate(date);
                                    if (date && userId) {
                                        checkForExistingReservation(date, userId);
                                    }
                                }}
                                dateFormat="MM/dd/yyyy"
                                className="w-full max-w-xs border p-2 rounded text-center text-sm"
                                placeholderText="Select a date"
                            />
                        </div>

                        {/* ✅ Drop-Off Time Selector */}
                        {dropOffOptions.length > 0 && (
                            <div className="flex flex-col items-center space-y-1 w-full">
                                <label className="font-semibold text-center text-sm">{t('select_time')}</label>
                                <select
                                    className="w-full max-w-xs border p-2 rounded text-sm"
                                    value={selectedTime}
                                    onChange={(e) => setSelectedTime(e.target.value)}
                                >
                                    {dropOffOptions.map((opt: string) => (
                                        <option key={opt} value={opt}>
                                            {opt}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        )}

                        {/* ✅ Pet Selection */}
                        <div className="flex flex-col items-start space-y-2 w-full max-w-xs">
                            <label className="font-semibold w-full text-center text-sm">{t('select_pets')}</label>
                            <div className="flex flex-col space-y-2 w-full">
                                {pets.map((pet) => (
                                    <label key={pet.id} className="flex items-center gap-2 text-sm">
                                        <input
                                            type="checkbox"
                                            checked={selectedPetIds.includes(pet.id)}
                                            onChange={(e) => {
                                                if (e.target.checked) {
                                                    setSelectedPetIds((prev) => [...prev, pet.id]);
                                                } else {
                                                    setSelectedPetIds((prev) =>
                                                        prev.filter((id) => id !== pet.id)
                                                    );
                                                }
                                            }}
                                        />
                                        <span>{pet.name}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* ✅ Add to Booking List */}
                        <button
                            onClick={addBookingDraft}
                            className="w-full max-w-xs bg-blue-800 text-white py-3 rounded hover:bg-blue-700 transition text-sm"
                        >
                            {t('add_to_booking_list')}
                        </button>

                        {/* ✅ Grooming Add-On Modal */}
                        <GroomingModal
                            isOpen={showGroomingUI}
                            onClose={() => {
                                setTimeout(() => {
                                    if (pendingDraft) {
                                        setDraftBookings((prev) => [
                                            ...prev,
                                            {
                                                ...pendingDraft,
                                                groomingAddOns: serializeGroomingSelections(groomingSelections),
                                            },
                                        ]);
                                    }
                                    resetFormAfterDraft();
                                    setPendingDraft(null);
                                    setShowGroomingUI(false);
                                }, 100);
                            }}
                            pets={pets.filter((p) => pendingDraft?.petIds.includes(p.id))}
                            services={groomingServices}
                            groomingSelections={groomingSelections}
                            setGroomingSelections={setGroomingSelections}
                        />

                        {/* ✅ Draft Bookings List */}
                        {draftBookings.length > 0 && (
                            <div className="w-full space-y-4">
                                <h2 className="text-md font-semibold text-center">{t('your_bookings')}</h2>
                                {draftBookings.map((booking, index) => {
                                    const petNames = booking.petIds
                                        .map((id) => pets.find((p) => p.id === id)?.name || 'Unknown')
                                        .join(', ');

                                    const hasGrooming = booking.groomingAddOns && Object.keys(booking.groomingAddOns).length > 0;

                                    return (
                                        <div key={index} className="border p-3 rounded shadow-sm">
                                            <p><strong>📅</strong> {booking.date.toLocaleDateString()}</p>
                                            <p><strong>⏰</strong> {booking.dropOffTime}</p>
                                            <p><strong>🐶</strong> {petNames}</p>

                                            {/* ✅ Show grooming selections from draft */}
                                            {hasGrooming && (
                                                <p><strong>🛁</strong>{' '}
                                                    {booking.petIds.map((petId) => {
                                                        const services = booking.groomingAddOns?.[petId];
                                                        if (!services || services.length === 0) return null;
                                                        const petName = pets.find(p => p.id === petId)?.name || 'Unknown';
                                                        return `${petName}: ${services.join(', ')}`;
                                                    }).filter(Boolean).join(' | ')}
                                                </p>
                                            )}

                                            <button
                                                onClick={() =>
                                                    setDraftBookings(draftBookings.filter((_, i) => i !== index))
                                                }
                                                className="mt-2 text-red-600 text-sm underline"
                                            >
                                                {t('remove_booking')}
                                            </button>
                                        </div>
                                    );
                                })}
                            </div>
                        )}

                        {/* ✅ Submit Button */}
                        {draftBookings.length > 0 && (
                            <button
                                onClick={async () => {
                                    if (hasExistingReservation || isSubmitting) return;

                                    setIsSubmitting(true);

                                    await submitBooking();

                                    // ✅ Clear UI state after successful submission
                                    setDraftBookings([]);
                                    setGroomingSelections({});
                                    setSelectedTime('');
                                    setSelectedDate(null);
                                    setSelectedPetIds(pets.map((p) => p.id));

                                    alert(t('submission_success'));

                                    setIsSubmitting(false);
                                }}
                                className={`w-full max-w-xs text-white py-3 rounded transition text-sm ${hasExistingReservation || isSubmitting
                                    ? 'bg-gray-400 cursor-not-allowed'
                                    : 'bg-green-800 hover:bg-green-700'
                                    }`}
                                disabled={hasExistingReservation || isSubmitting}
                            >
                                {isSubmitting ? t('submitting_reservations') : t('submit_all')}
                            </button>
                        )}
                    </div>
                )}

                {/* ✅ Yes/No Grooming Modal */}
                {showGroomingPrompt && (
                    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
                        <div className="bg-white rounded-lg p-6 shadow-md max-w-sm w-full">
                            <p className="text-sm mb-4">{t('grooming_prompt_message')}</p>
                            <div className="flex justify-end gap-4">
                                {/* ✅ YES */}
                                <button
                                    onClick={() => {
                                        if (pendingDraft) {
                                            // ensure grooming selections exist for each pet
                                            setGroomingSelections((prev: Record<string, Set<string>>) => {
                                                const updated = { ...prev };
                                                pendingDraft.petIds.forEach((petId: string) => {
                                                    if (!updated[petId]) {
                                                        updated[petId] = new Set();
                                                    }
                                                });
                                                return updated;
                                            });
                                            setShowGroomingUI(true); // keep draft until grooming is added
                                        }
                                        setShowGroomingPrompt(false);
                                    }}
                                    className="bg-green-700 hover:bg-green-600 text-white px-4 py-2 rounded text-sm"
                                >
                                    {t('yes')}
                                </button>

                                {/* ✅ NO */}
                                <button
                                    onClick={() => {
                                        if (pendingDraft) {
                                            // 🧹 Clear any grooming selections for these pets
                                            setGroomingSelections((prev) => {
                                                const updated = { ...prev };
                                                pendingDraft.petIds.forEach((petId) => {
                                                    delete updated[petId];
                                                });
                                                return updated;
                                            });

                                            // ✅ Finalize the draft
                                            setDraftBookings((prev) => [...prev, pendingDraft]);
                                        }

                                        resetFormAfterDraft();
                                        setShowGroomingPrompt(false);
                                        setPendingDraft(null);
                                    }}
                                    className="bg-gray-400 hover:bg-gray-300 text-black px-4 py-2 rounded text-sm"
                                >
                                    {t('no')}
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {/* ✅ Waiver Agreement Modal */}
                {showWaiverModal && (
                    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
                        <div className="bg-white p-6 rounded shadow-md max-w-md w-full space-y-4">
                            <h2 className="text-lg font-semibold text-center text-[color:var(--color-accent)]">
                                {t('waiver_required_title')}
                            </h2>

                            <p className="text-sm text-gray-700 whitespace-pre-line">
                                {t('waiver_required_message')}
                            </p>

                            {/* ✅ Checkbox agreement */}
                            <div className="flex items-start space-x-2">
                                <input
                                    type="checkbox"
                                    checked={hasCheckedAgreement}
                                    onChange={() => setHasCheckedAgreement(!hasCheckedAgreement)}
                                    className="mt-1"
                                    id="waiverAgreementCheckbox"
                                />
                                <label htmlFor="waiverAgreementCheckbox" className="text-sm text-gray-700">
                                    {t('waiver_checkbox_label')}
                                </label>
                            </div>

                            {/* ✅ Confirm button only */}
                            <div className="flex justify-end">
                                <button
                                    onClick={async () => {
                                        try {
                                            await setDoc(
                                                doc(db, 'userApprovedBusinesses', businessId, 'clients', userId),
                                                { waiverSignedAt: Timestamp.now() },
                                                { merge: true }
                                            );
                                            setWaiverSigned(true);
                                            setShowWaiverModal(false);
                                        } catch (err) {
                                            console.error('❌ Failed to record waiver:', err);
                                            alert(t('waiver_agreement_failed'));
                                        }
                                    }}
                                    className={`px-4 py-2 rounded text-sm text-white ${hasCheckedAgreement
                                        ? 'bg-green-700 hover:bg-green-600'
                                        : 'bg-gray-400 cursor-not-allowed'
                                        }`}
                                    disabled={!hasCheckedAgreement}
                                >
                                    {t('agree_button')}
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
