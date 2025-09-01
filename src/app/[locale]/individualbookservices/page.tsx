'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import {
    getFirestore,
    collection,
    getDoc,
    getDocs,
    doc,
    setDoc,
    Timestamp,
} from 'firebase/firestore';
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
const auth = getAuth(app);
const db = getFirestore(app);

type FSMap = Record<string, unknown>;

type Business = {
    id: string;
    name: string;
};

type WaiverGate = { required: boolean; signed: boolean; key: string };

export default function IndividualBookServicesPage() {
    const t = useTranslations('individualBookServices');
    const locale = useLocale();
    const router = useRouter();

    const uidRef = useRef<string>('');
    const waiverGateShownRef = useRef<Set<string>>(new Set());

    const [businesses, setBusinesses] = useState<Business[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    // Waiver modal state
    const [showWaiverModal, setShowWaiverModal] = useState(false);
    const [waiverAgreeChecked, setWaiverAgreeChecked] = useState(false);
    const [isProcessingWaiver, setIsProcessingWaiver] = useState(false);
    const [activeBiz, setActiveBiz] = useState<Business | null>(null);

    // Waiver content state
    const [waiverContent, setWaiverContent] = useState<string>('');
    const [waiverIsHtml, setWaiverIsHtml] = useState<boolean>(false);
    const [waiverLoading, setWaiverLoading] = useState<boolean>(false);
    const [waiverExpanded, setWaiverExpanded] = useState<boolean>(false);

    useEffect(() => {
        let handled = false;

        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            if (handled) return;
            handled = true;

            if (!user) {
                router.push(`/${locale}/loginsignup`);
                return;
            }

            uidRef.current = user.uid;
            await fetchApprovedBusinesses(user.uid);
        });

        return () => unsubscribe();

    }, [locale, router]);

    const fetchApprovedBusinesses = async (uid: string) => {
        try {
            setIsLoading(true);
            const querySnap = await getDocs(collection(db, 'businesses'));

            const result: Business[] = [];

            // NOTE: sequential read is fine at this scale; can parallelize later if needed
            for (const docSnap of querySnap.docs) {
                const data = docSnap.data() as FSMap;
                if ((data['businessType'] as string) !== 'Boarding/Daycare') continue;

                const bizId = docSnap.id;
                const bizName = (data['businessName'] as string) || 'Unnamed Business';

                const clientSnap = await getDoc(doc(db, 'userApprovedBusinesses', bizId, 'clients', uid));
                if (clientSnap.exists() && Object.keys(clientSnap.data() || {}).length > 0) {
                    result.push({ id: bizId, name: bizName });
                }
            }

            setBusinesses(result);
        } catch (err) {
            console.error('❌ Failed to fetch businesses:', err);
        } finally {
            setIsLoading(false);
        }
    };

    // ----- Waiver gate helpers (version/date aware, iOS-parity) -----
    const readWaiverGate = useCallback(async (bizId: string, uid: string): Promise<WaiverGate> => {
        const bizRef = doc(db, 'businesses', bizId);
        const waiverRef = doc(db, 'businesses', bizId, 'settings', 'clientWaiver');
        const clientRef = doc(db, 'userApprovedBusinesses', bizId, 'clients', uid);

        try {
            const [bizSnap, wSnap, cSnap] = await Promise.all([getDoc(bizRef), getDoc(waiverRef), getDoc(clientRef)]);

            const b = (bizSnap.data() || {}) as FSMap;
            const w = (wSnap.data() || {}) as FSMap;
            const c = (cSnap.data() || {}) as FSMap;

            const required = !!(b['waiverRequired'] as boolean);

            const enforce = !!(((b['features'] as FSMap) || {})['enforceWaiverVersion'] as boolean);
            const version = w['waiverVersion'] as number | undefined;

            const subUpdated = (w['lastUpdated'] as Timestamp | undefined)?.toDate();
            const rootUpdated = (b['waiverLastUpdated'] as Timestamp | undefined)?.toDate();
            const lastUpdated = subUpdated || rootUpdated || null;

            const versionSigned = (c['waiverVersionSigned'] as number | undefined) ?? 0;
            const signedAt = (c['waiverSignedAt'] as Timestamp | undefined)?.toDate() || null;
            const legacy = (c['waiverSigned'] as boolean | undefined) ?? false;

            let signed: boolean;
            if (!required) signed = true;
            else if (enforce && typeof version === 'number') signed = versionSigned >= version;
            else if (lastUpdated && signedAt) signed = signedAt >= lastUpdated;
            else signed = legacy;

            const key = `${bizId}|v=${typeof version === 'number' ? version : '-'}|d=${lastUpdated ? lastUpdated.getTime() : '-'}`;
            return { required, signed, key };
        } catch (e) {
            console.warn('⚠️ Waiver read failed (prompt-once fail-closed):', e);
            return { required: true, signed: false, key: `${bizId}|err` };
        }
    }, []);

    // ⬇️ REPLACE your existing loadWaiverContent with this
    const loadWaiverContent = useCallback(async (bizId: string) => {
        setWaiverLoading(true);
        setWaiverExpanded(false);
        try {
            // canonical path: /businesses/{bizId}/settings/clientWaiver
            const snap = await getDoc(doc(db, 'businesses', bizId, 'settings', 'clientWaiver'));
            const data = (snap.data() || {}) as FSMap;

            // primary source of truth
            const raw = (data['waiverText'] as string) ?? '';

            // light HTML detection: render as HTML if it looks like markup, else plain text
            const looksHtml = typeof raw === 'string' && /<[^>]+>/.test(raw);

            setWaiverIsHtml(looksHtml);
            setWaiverContent(typeof raw === 'string' ? raw : '');

            // ---- Optional fallbacks (keeps backward compatibility) ----
            if (!raw || raw.trim().length === 0) {
                const legacyHtml = (data['html'] as string) || '';
                const legacyText =
                    (data['content'] as string) ??
                    (data['text'] as string) ??
                    (data['body'] as string) ??
                    (data['markdown'] as string) ??
                    '';

                if (legacyHtml) {
                    setWaiverIsHtml(true);
                    setWaiverContent(legacyHtml);
                } else if (legacyText) {
                    setWaiverIsHtml(false);
                    setWaiverContent(legacyText);
                }
            }
        } catch {
            setWaiverIsHtml(false);
            setWaiverContent('');
        } finally {
            setWaiverLoading(false);
        }
    }, []);

    const routeToSelectService = useCallback(
        (biz: Business) => {
            const nameParam = encodeURIComponent(biz.name); // Preserve for nicer headings downstream
            router.push(`/${locale}/individualselectservice?businessId=${biz.id}&businessName=${nameParam}`);
        },
        [locale, router]
    );

    const handleBusinessClick = useCallback(
        async (bizId: string, bizName: string) => {
            // ===== TEMP BYPASS (48–72h): disable waiver gate =====
            // const uid = uidRef.current;
            // if (!uid) return;

            // const gate = await readWaiverGate(bizId, uid);
            // const alreadyShown = waiverGateShownRef.current.has(gate.key);

            // if (gate.required && !gate.signed && !alreadyShown) {
            //   setActiveBiz({ id: bizId, name: bizName });
            //   setWaiverAgreeChecked(false);
            //   await loadWaiverContent(bizId);
            //   setShowWaiverModal(true);
            //   return;
            // }

            // Always allow navigation during the temporary window
            routeToSelectService({ id: bizId, name: bizName });
        },
        [readWaiverGate, routeToSelectService, loadWaiverContent]
    );

    const handleAgree = useCallback(async () => {
        if (!activeBiz) return;
        const uid = uidRef.current;
        if (!uid) return;

        setIsProcessingWaiver(true);
        try {
            // Read current version so we stamp versionSigned (iOS parity)
            const wSnap = await getDoc(doc(db, 'businesses', activeBiz.id, 'settings', 'clientWaiver')).catch(() => null);
            const version = (wSnap?.data()?.waiverVersion as number) ?? undefined;

            const payload: FSMap = {
                waiverSignedAt: Timestamp.now(),
                waiverSigned: true, // legacy fallback
            };
            if (typeof version === 'number') (payload as Record<string, unknown>)['waiverVersionSigned'] = version;

            await setDoc(doc(db, 'userApprovedBusinesses', activeBiz.id, 'clients', uid), payload, { merge: true });

            // Seal this gate for the session
            const gate = await readWaiverGate(activeBiz.id, uid);
            waiverGateShownRef.current.add(gate.key);

            setShowWaiverModal(false);
            setIsProcessingWaiver(false);
            routeToSelectService(activeBiz);
        } catch (e) {
            console.error('❌ Failed to record waiver:', e);
            alert(t('waiver_agreement_failed') || 'Unable to save your agreement. Please try again.');
            setIsProcessingWaiver(false);
        }
    }, [activeBiz, readWaiverGate, routeToSelectService, t]);

    return (
        <div className="min-h-screen bg-[color:var(--color-background)] text-[color:var(--color-foreground)] px-4 py-6">
            <div className="w-full max-w-md mx-auto px-2 sm:px-4">
                <button
                    onClick={() => router.push(`/${locale}/individualdashboard`)}
                    className="mb-6 text-sm text-[color:var(--color-accent)] underline hover:opacity-90"
                >
                    ← {t('back_to_dashboard')}
                </button>

                <h1 className="text-3xl font-bold text-center text-[color:var(--color-accent)] mb-6">
                    {t('book_services_title')}
                </h1>

                {isLoading ? (
                    <p className="text-center text-gray-500 text-sm">{t('loading_approved_businesses')}</p>
                ) : businesses.length === 0 ? (
                    <p className="text-center text-gray-500 text-sm">{t('no_approved_businesses')}</p>
                ) : (
                    <div className="space-y-4">
                        {businesses.map((biz) => (
                            <button
                                key={biz.id}
                                onClick={() => handleBusinessClick(biz.id, biz.name)}
                                className="flex items-center w-full px-4 py-3 bg-white rounded shadow hover:bg-gray-50 border border-gray-300"
                            >
                                <span className="text-3xl mr-4 text-[color:var(--color-accent)]">🐾</span>
                                <span className="flex-1 text-left font-semibold text-base sm:text-lg">{biz.name}</span>
                                <span className="text-gray-400 text-xl">›</span>
                            </button>
                        ))}
                    </div>
                )}
            </div>

            {/* Waiver modal (centralized, mobile-friendly) */}
            {showWaiverModal && activeBiz && (
                <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center px-3">
                    <div className="bg-white p-6 rounded-xl shadow-md max-w-md w-full space-y-4">
                        <h2 className="text-lg font-semibold text-center text-[color:var(--color-accent)]">
                            Waiver Required
                        </h2>

                        <p className="text-sm text-gray-700">
                            To book with <strong>{activeBiz.name}</strong>, you need to agree to the business&apos;s client waiver.
                        </p>

                        {/* Full waiver viewer */}
                        <div className="rounded-lg border border-gray-200 bg-gray-50">
                            <div className="flex items-center justify-between px-3 py-2">
                                <div className="text-sm font-semibold text-[color:var(--color-accent)]">Client Waiver</div>
                                {!!waiverContent && (
                                    <button
                                        onClick={() => setWaiverExpanded((v) => !v)}
                                        className="text-xs underline text-[color:var(--color-accent)]"
                                    >
                                        {waiverExpanded ? 'Collapse' : 'View full'}
                                    </button>
                                )}
                            </div>

                            <div className={`${waiverExpanded ? 'max-h-[70vh]' : 'max-h-40'} overflow-auto bg-white px-3 py-3`}>
                                {waiverLoading ? (
                                    <div className="text-sm text-gray-500">Loading…</div>
                                ) : waiverContent ? (
                                    waiverIsHtml ? (
                                        <div
                                            className="text-sm leading-6 text-gray-800"
                                            // If you sanitize elsewhere, this is fine; otherwise consider sanitizing HTML.
                                            dangerouslySetInnerHTML={{ __html: waiverContent }}
                                        />
                                    ) : (
                                        <pre className="whitespace-pre-wrap text-sm leading-6 text-gray-800">{waiverContent}</pre>
                                    )
                                ) : (
                                    <div className="text-sm text-gray-500">The business has not provided a waiver text.</div>
                                )}
                            </div>
                        </div>

                        <label className="flex items-start gap-2 text-sm text-gray-700">
                            <input
                                type="checkbox"
                                checked={waiverAgreeChecked}
                                onChange={() => setWaiverAgreeChecked((v) => !v)}
                                className="mt-1"
                            />
                            <span>I have read and agree to the client waiver.</span>
                        </label>

                        <div className="flex justify-end gap-2 pt-1">
                            <button
                                onClick={() => {
                                    setShowWaiverModal(false);
                                    setActiveBiz(null);
                                    setWaiverAgreeChecked(false);
                                }}
                                className="px-4 py-2 rounded text-sm bg-gray-200 hover:bg-gray-300"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleAgree}
                                disabled={!waiverAgreeChecked || isProcessingWaiver}
                                className={`px-4 py-2 rounded text-sm text-white ${waiverAgreeChecked && !isProcessingWaiver
                                    ? 'bg-green-700 hover:bg-green-600'
                                    : 'bg-gray-400 cursor-not-allowed'
                                    }`}
                            >
                                {isProcessingWaiver ? 'Saving…' : 'Agree'}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
