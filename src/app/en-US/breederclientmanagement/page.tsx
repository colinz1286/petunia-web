'use client';

import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useLocale } from 'next-intl';

import { initializeApp, getApps, getApp } from 'firebase/app';
import {
  getAuth,
  onAuthStateChanged,
  type User,
} from 'firebase/auth';
import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
  type DocumentData,
} from 'firebase/firestore';

// ---------------- Firebase bootstrap ----------------
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

// ---------------- Types ----------------
type ApprovedClient = {
  id: string;
  userId: string;
  userFirstName: string;
  userLastName: string;
  userEmail: string;
  phone: string;
  address: string;
};

// ---------------- Utils ----------------
const trim = (s?: string | null) => (s ?? '').trim();
const isNonEmpty = (s: string) => s.trim().length > 0;

function mapClientDoc(id: string, d: Record<string, unknown>): ApprovedClient {
  const explicitFirst = trim(d.userFirstName as string);
  const explicitLast = trim(d.userLastName as string);
  const userName = trim(d.userName as string);

  const [firstName, lastName] = (() => {
    if (isNonEmpty(explicitFirst) || isNonEmpty(explicitLast)) {
      return [explicitFirst, explicitLast];
    }
    if (isNonEmpty(userName)) {
      const parts = userName.split(' ');
      const f = parts[0] ?? userName;
      const l = parts.slice(1).join(' ');
      return [trim(f), trim(l)];
    }
    return ['', ''];
  })();

  const email = trim(d.userEmail as string);

  const phone =
    trim((d.userPhone as string) ?? '') ||
    trim((d.phone as string) ?? '') ||
    trim((d.contactPhone as string) ?? '');

  const composedAddress = (() => {
    const addr = trim(d.address as string);
    if (isNonEmpty(addr)) return addr;

    const line1 = trim((d.addressLine1 as string) ?? (d.street as string));
    const line2 = trim(d.addressLine2 as string);
    const city = trim(d.city as string);
    const state = trim((d.state as string) ?? (d.region as string));
    const zip = trim((d.postalCode as string) ?? (d.zip as string));
    const country = trim(d.country as string);

    return [line1, line2, city, state, zip, country].filter(isNonEmpty).join(', ');
  })();

  return {
    id,
    userId: trim(d.userId as string),
    userFirstName: firstName,
    userLastName: lastName,
    userEmail: email,
    phone,
    address: composedAddress,
  };
}

async function resolveBusinessIdForOwner(uid: string): Promise<string | null> {
  // iOS uses ownerId == uid; we try that first for parity
  try {
    const q1 = query(collection(db, 'businesses'), where('ownerId', '==', uid));
    const r1 = await getDocs(q1);
    if (!r1.empty) return r1.docs[0].id;
  } catch {
    /* no-op */
  }
  // Fallback: newer schema with ownerIds array
  try {
    const q2 = query(collection(db, 'businesses'), where('ownerIds', 'array-contains', uid));
    const r2 = await getDocs(q2);
    if (!r2.empty) return r2.docs[0].id;
  } catch {
    /* no-op */
  }
  return null;
}

// ---------------- Page ----------------
export default function BreederClientManagementPage() {
  const router = useRouter();
  const locale = useLocale();
  const searchParams = useSearchParams();

  const [businessId, setBusinessId] = useState<string>('');
  const [clients, setClients] = useState<ApprovedClient[]>([]);
  const [searchText, setSearchText] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [hasFetchedClients, setHasFetchedClients] = useState<boolean>(false);

  const backHref = useMemo(() => `/${locale}/breederdashboard`, [locale]);

  // Auth + bootstrap
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (user: User | null) => {
      if (!user) {
        router.push(`/${locale}/loginsignup`);
        return;
      }
      setIsLoading(true);
      setErrorMessage(null);

      // Allow explicit ?businessId=... to mirror iOS pass-through behavior if needed
      const idFromUrl = searchParams.get('businessId');
      if (idFromUrl && isNonEmpty(idFromUrl)) {
        setBusinessId(idFromUrl);
        setIsLoading(false);
        return;
      }

      const resolved = await resolveBusinessIdForOwner(user.uid);
      if (!resolved) {
        setErrorMessage('Business not found for this account.');
        setIsLoading(false);
        return;
      }
      setBusinessId(resolved);
      setIsLoading(false);
    });
    return () => unsub();
  }, [locale, router, searchParams]);

  // Load clients when businessId available
  const loadClients = useCallback(async (id: string) => {
    if (!isNonEmpty(id)) return;
    setIsLoading(true);
    setErrorMessage(null);
    setHasFetchedClients(false);

    try {
      const snap = await getDocs(
        collection(db, 'userApprovedBusinesses', id, 'clients')
      );

      const result: ApprovedClient[] = [];
      snap.forEach((docSnap) => {
        const d = docSnap.data() as DocumentData;
        result.push(mapClientDoc(docSnap.id, d as Record<string, unknown>));
      });

      // Sort A→Z by last name, then first
      result.sort((a, b) => {
        const ak = a.userLastName.toLowerCase();
        const bk = b.userLastName.toLowerCase();
        if (ak < bk) return -1;
        if (ak > bk) return 1;
        const af = a.userFirstName.toLowerCase();
        const bf = b.userFirstName.toLowerCase();
        if (af < bf) return -1;
        if (af > bf) return 1;
        return 0;
      });

      setClients(result);
      setHasFetchedClients(true);
    } catch {
      setErrorMessage('Error loading clients.');
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    if (isNonEmpty(businessId)) {
      void loadClients(businessId);
    }
  }, [businessId, loadClients]);

  // Filter (last name only)
  const filteredClients = useMemo(() => {
    const q = searchText.trim().toLowerCase();
    if (!q) return clients;
    return clients.filter((c) => c.userLastName.toLowerCase().includes(q));
  }, [clients, searchText]);

  return (
    <main className="min-h-screen bg-[color:var(--color-background)] text-[color:var(--color-foreground)]">
      {/* Top bar with custom Back */}
      <div className="sticky top-0 z-10 bg-[color:var(--color-background)]">
        <div className="mx-auto flex max-w-2xl items-center justify-between px-4 py-3">
          <button
            type="button"
            onClick={() => router.push(backHref)}
            className="inline-flex items-center gap-1 rounded-lg px-1.5 py-1 text-sm font-semibold text-[color:var(--color-accent)] hover:opacity-90"
          >
            <span aria-hidden>‹</span>
            <span>Back</span>
          </button>
        </div>
        <div className="border-b" />
      </div>

      <div className="mx-auto w-full max-w-2xl px-4 pb-8">
        {/* Title */}
        <h1 className="mt-3 text-center text-3xl font-bold text-[color:var(--color-accent)]">
          Client Management
        </h1>

        {/* Search by LAST NAME */}
        <div className="mt-3">
          <label className="mb-1 block text-sm font-semibold text-[color:var(--color-accent)]">
            Search by Last Name
          </label>
          <input
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Start typing a last name…"
            className="w-full rounded-lg border bg-white px-3 py-2 text-sm"
          />
        </div>

        {/* Content states */}
        {isLoading || !hasFetchedClients ? (
          <div className="py-6 text-center text-gray-600">Loading clients…</div>
        ) : errorMessage ? (
          <div className="py-6 text-center text-red-600">❌ {errorMessage}</div>
        ) : filteredClients.length === 0 ? (
          <div className="py-6 text-center text-gray-600">No clients found.</div>
        ) : (
          <ul className="mt-4 space-y-3">
            {filteredClients.map((c) => (
              <li
                key={c.id}
                className="rounded-xl border border-[color:var(--color-accent)] bg-white p-4 shadow-sm"
              >
                <div className="text-lg font-semibold text-gray-900">
                  {(c.userFirstName + ' ' + c.userLastName).trim()}
                </div>

                {isNonEmpty(c.userEmail) && (
                  <div className="text-sm text-gray-700">{c.userEmail}</div>
                )}

                {isNonEmpty(c.phone) && (
                  <div className="mt-1 text-xs text-gray-900">{c.phone}</div>
                )}

                {isNonEmpty(c.address) && (
                  <div className="mt-1 text-xs text-gray-600">{c.address}</div>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </main>
  );
}
