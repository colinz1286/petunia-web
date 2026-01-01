'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';
import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth, onAuthStateChanged, User } from 'firebase/auth';
import {
  getFirestore,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  setDoc,
  serverTimestamp,
  where,
} from 'firebase/firestore';

// ✅ Firebase initialization (matches your pattern)
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY!,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN!,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID!,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET!,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID!,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID!,
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

const MAX_CHARS = 2000;

export default function BoardingAndDaycareIndividualClientNotesPage() {
  const locale = useLocale();
  const router = useRouter();
  const t = useTranslations('boardingAndDaycareIndividualClientNotes');

  const params = useParams() as { userId: string };
  const clientUserId = params.userId;

  const [authUser, setAuthUser] = useState<User | null>(null);

  const [businessId, setBusinessId] = useState<string>('');
  const [clientName, setClientName] = useState<string>('');

  const [notes, setNotes] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  const [saving, setSaving] = useState<boolean>(false);

  const [error, setError] = useState<string | null>(null);
  const [saveMessage, setSaveMessage] = useState<string | null>(null);

  const charCountLabel = useMemo(
    () => t('char_count', { current: notes.length, max: MAX_CHARS }),
    [notes.length, t]
  );

  // ✅ Resolve businessId from the logged-in business owner
  const resolveBusinessIdForOwner = useCallback(async (ownerId: string): Promise<string> => {
    const snap = await getDocs(query(collection(db, 'businesses'), where('ownerId', '==', ownerId)));
    const docFound = snap.docs[0];
    return docFound?.id || '';
  }, []);

  const loadClientName = useCallback(async (uid: string) => {
    try {
      const userRef = doc(db, 'users', uid);
      const userSnap = await getDoc(userRef);
      if (!userSnap.exists()) return;

      const data = userSnap.data() as { firstName?: string; lastName?: string };
      const full = `${data.firstName || ''} ${data.lastName || ''}`.trim();
      if (full) setClientName(full);
    } catch {
      // Non-fatal
    }
  }, []);

  const loadNotes = useCallback(
    async (targetUserId: string, bizId: string) => {
      setError(null);
      setSaveMessage(null);

      if (!targetUserId || !bizId) {
        setError(t('missing_ids_error'));
        return;
      }

      try {
        const notesRef = doc(db, 'clientNotes', targetUserId, 'businesses', bizId);
        const snap = await getDoc(notesRef);

        if (snap.exists()) {
          const data = snap.data() as { notes?: string };
          setNotes((data.notes || '').toString());
        } else {
          setNotes('');
          // Matches iOS behavior: not fatal, but informative
          setError(t('no_notes_yet'));
        }
      } catch (e) {
        console.error('❌ loadNotes error:', e);
        setError(t('load_failed_error'));
      }
    },
    [t]
  );

  const saveNotes = useCallback(async () => {
    setSaveMessage(null);
    setError(null);

    if (!authUser) {
      setSaveMessage(`❌ ${t('not_authenticated_error')}`);
      return;
    }

    const trimmed = notes.trim();
    if (!trimmed) {
      setSaveMessage(`❌ ${t('notes_empty_error')}`);
      return;
    }

    if (!clientUserId || !businessId) {
      setSaveMessage(`❌ ${t('missing_ids_error')}`);
      return;
    }

    setSaving(true);
    try {
      const notesRef = doc(db, 'clientNotes', clientUserId, 'businesses', businessId);

      await setDoc(
        notesRef,
        {
          notes: trimmed,
          lastUpdated: serverTimestamp(),
          updatedBy: authUser.email || authUser.uid,
        },
        { merge: true }
      );

      setSaveMessage(t('save_success'));
    } catch (e) {
      console.error('❌ saveNotes error:', e);
      setSaveMessage(`❌ ${t('save_failed_error')}`);
    } finally {
      setSaving(false);
    }
  }, [authUser, businessId, clientUserId, notes, t]);

  // ✅ Auth guard + load everything
  useEffect(() => {
    const auth = getAuth(app);

    const unsub = onAuthStateChanged(auth, async (user) => {
      if (!user) {
        router.push(`/${locale}/loginsignup`);
        return;
      }

      setAuthUser(user);

      try {
        setLoading(true);
        setError(null);
        setSaveMessage(null);

        // 1) Resolve businessId for this business owner
        const bizId = await resolveBusinessIdForOwner(user.uid);
        if (!bizId) {
          setError(t('resolve_business_error'));
          setLoading(false);
          return;
        }
        setBusinessId(bizId);

        // 2) Load client name (optional, for title)
        await loadClientName(clientUserId);

        // 3) Load notes
        await loadNotes(clientUserId, bizId);
      } catch (e) {
        console.error('❌ Notes page load error:', e);
        setError(t('load_failed_error'));
      } finally {
        setLoading(false);
      }
    });

    return () => unsub();
  }, [clientUserId, locale, router, resolveBusinessIdForOwner, loadClientName, loadNotes, t]);

  const titleText = clientName
    ? t('page_title_with_name', { name: clientName })
    : t('page_title');

  return (
    <div className="min-h-screen bg-[color:var(--color-background)] text-[color:var(--color-foreground)] px-4 py-8">
      <div className="max-w-2xl mx-auto space-y-5">
        <button
          onClick={() => router.back()}
          className="text-sm text-blue-600 underline hover:opacity-80"
        >
          ← {t('back_button')}
        </button>

        <div className="space-y-1">
          <h1 className="text-2xl sm:text-3xl font-bold text-[color:var(--color-accent)]">
            {titleText}
          </h1>
          <p className="text-xs text-[color:var(--color-foreground-muted)]">{t('subtitle')}</p>
        </div>

        {loading ? (
          <div className="border border-gray-200 rounded-md p-4 bg-white text-black">
            <p className="text-sm">{t('loading_label')}</p>
          </div>
        ) : (
          <div className="border border-gray-200 rounded-md p-4 bg-white text-black space-y-3">
            {error ? <p className="text-sm text-red-600">❌ {error}</p> : null}

            <textarea
              value={notes}
              onChange={(e) => {
                const next = e.target.value || '';
                setNotes(next.length > MAX_CHARS ? next.slice(0, MAX_CHARS) : next);
              }}
              rows={10}
              className="w-full rounded-md border border-gray-300 bg-white p-3 text-sm text-black outline-none focus:ring-2 focus:ring-green-700"
              placeholder={t('notes_placeholder')}
            />

            <div className="flex items-center justify-between gap-3">
              <p className={`text-xs ${notes.length > 1800 ? 'text-red-600' : 'text-gray-600'}`}>
                {charCountLabel}
              </p>

              <button
                onClick={saveNotes}
                disabled={saving || !notes.trim()}
                className="bg-green-700 text-white font-semibold py-2 px-4 rounded hover:opacity-90 disabled:opacity-60"
              >
                {saving ? t('saving_button') : t('save_button')}
              </button>
            </div>

            {saveMessage ? (
              <p className={`text-sm ${saveMessage.startsWith('❌') ? 'text-red-600' : 'text-green-700'}`}>
                {saveMessage.startsWith('❌') ? saveMessage : `✅ ${saveMessage}`}
              </p>
            ) : null}
          </div>
        )}
      </div>
    </div>
  );
}
