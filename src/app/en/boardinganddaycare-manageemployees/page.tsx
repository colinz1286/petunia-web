'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getAuth } from 'firebase/auth';
import {
    getFirestore,
    collection,
    query,
    where,
    getDocs,
} from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

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

type Employee = {
    userId: string;
    email: string;
    firstName: string;
    lastName: string;
};

export default function BoardingAndDaycareManageEmployeesPage() {
    const t = useTranslations('businessDashboard');
    const router = useRouter();

    const [, setBusinessId] = useState('');
    const [employees, setEmployees] = useState<Employee[]>([]);

    useEffect(() => {
        const load = async () => {
            const user = auth.currentUser;
            if (!user) {
                router.push('/en/loginsignup');
                return;
            }

            const q = query(collection(db, 'businesses'), where('ownerId', '==', user.uid));
            const snap = await getDocs(q);
            const businessDoc = snap.docs[0];
            if (!businessDoc) return;

            const bId = businessDoc.id;
            setBusinessId(bId);

            const invitesQuery = query(
                collection(db, 'employeeInvites'),
                where('businessId', '==', bId),
                where('status', '==', 'accepted')
            );

            const inviteSnap = await getDocs(invitesQuery);

            const userPromises = inviteSnap.docs.map((invite) => {
                const data = invite.data();
                const userId = data.userId;

                return getDocs(
                    query(collection(db, 'users'), where('__name__', '==', userId))
                ).then((snap) => {
                    const userDoc = snap.docs[0];
                    if (!userDoc) return null;

                    const userData = userDoc.data();

                    return {
                        userId,
                        email: userData.email || '',
                        firstName: userData.firstName || '',
                        lastName: userData.lastName || '',
                    } as Employee;
                });
            });

            const results = await Promise.all(userPromises);

            const loaded: Employee[] = results
                .filter((e): e is Employee => e !== null)
                .sort((a, b) => {
                    const lastCompare = a.lastName
                        .toLowerCase()
                        .localeCompare(b.lastName.toLowerCase());

                    if (lastCompare !== 0) return lastCompare;

                    return a.firstName
                        .toLowerCase()
                        .localeCompare(b.firstName.toLowerCase());
                });

            setEmployees(loaded);
        };

        load();
    }, [router]);

    return (
        <div className="min-h-screen bg-[color:var(--color-background)] text-[color:var(--color-foreground)] px-4 py-8">
            <div className="w-full max-w-md mx-auto space-y-4">

                <h1 className="text-3xl font-bold text-[color:var(--color-accent)] text-center">
                    {t('manage_employees')}
                </h1>

                {employees.length === 0 && (
                    <p className="text-gray-500 text-sm">
                        No employees yet.
                    </p>
                )}

                {employees.map((employee) => {
                    const fullName =
                        `${employee.lastName}, ${employee.firstName}`.replace(/^,\s*|\s*,\s*$/g, '') || employee.email;

                    return (
                        <Link
                            key={employee.userId}
                            href={`/en/boardinganddaycare-manageemployee/${employee.userId}`}
                            className="block bg-[#2c4a30] text-white px-4 py-2 rounded hover:opacity-90"
                        >
                            {fullName}
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}