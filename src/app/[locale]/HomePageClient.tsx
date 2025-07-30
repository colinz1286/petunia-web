'use client';

import Head from 'next/head';
import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function HomePageClient() {
    const locale = useLocale();
    const [selectedRole, setSelectedRole] = useState<string | null>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    const roles = [
        { key: 'petOwner', label: 'Pet Owner' },
        { key: 'boarding', label: 'Boarding and Daycare Facility Owner/Manager' },
        { key: 'sitterWalker', label: 'Pet Sitter or Dog Walker' },
        { key: 'rescue', label: 'Rescue or Adoption Shelter Owner/Manager' },
        { key: 'vetClinic', label: 'Veterinary Clinic Owner/Manager' },
    ];

    useEffect(() => {
        if (selectedRole && contentRef.current) {
            contentRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [selectedRole]);

    // ✅ Force Safari to apply <title> post-hydration (safety net)
    useEffect(() => {
        document.title = 'Petunia – All-in-One Pet Care for Owners, Sitters, and Businesses';
    }, []);

    return (
        <>
            <Head>
                <title>Petunia – All-in-One Pet Care for Owners, Sitters, and Businesses</title>
                <meta
                    name="description"
                    content="Create pet profiles, manage reservations, and run your pet care business from one place. Trusted by pet owners, sitters, shelters, and clinics."
                />
            </Head>

            <main className="flex-grow flex flex-col items-center justify-start text-center px-4 mt-10">
                {/* Logo */}
                <Image
                    src="/petunia_logo.png"
                    alt="Petunia Logo"
                    width={288}
                    height={0}
                    className="mb-6 h-auto w-64 sm:w-72"
                    priority
                />

                {/* Slogan */}
                <p className="text-gray-600 italic text-lg mb-6 text-balance">
                    The perfect app for your business.<br />
                    The perfect world for your pet.
                </p>

                {/* Headline */}
                <h2 className="text-2xl font-bold mb-6 text-[#2c4a30] tracking-wide text-balance">
                    Are You a Current or Prospective&hellip;
                </h2>

                {/* Role Buttons */}
                <div className="flex flex-col gap-3 w-full max-w-md mb-10">
                    {roles.map((role) => (
                        <button
                            key={role.key}
                            onClick={() => setSelectedRole(role.key)}
                            className={`py-3 px-4 rounded text-[#2c4a30] border border-[#2c4a30] hover:bg-[#e4dbcb] transition ${selectedRole === role.key ? 'bg-[#2c4a30] text-white' : ''
                                }`}
                        >
                            {role.label}
                        </button>
                    ))}
                </div>

                {/* Dynamic Content */}
                <div
                    ref={contentRef}
                    className="w-full max-w-3xl mt-6 text-[#2c4a30] text-center flex flex-col items-center scroll-mt-24"
                >
                    {selectedRole === 'petOwner' && (
                        <section className="space-y-5 w-full max-w-xl">
                            <h3 className="text-2xl font-bold text-center">Welcome, Pet Owners!</h3>
                            <p className="text-lg text-balance">
                                Petunia is free to all pet owners! This is your all-in-one hub to manage your pet&rsquo;s care — from daycare and boarding reservations to vaccination tracking and feeding instructions.
                            </p>
                            <p className="text-lg text-balance">
                                Create personalized profiles for each of your pets, upload important records like vaccine certificates, and book services from trusted providers — all in one place.
                            </p>
                            <p className="text-lg text-balance">
                                Our reminders keep you on top of things like annual vet visits and expiring vaccines. We&rsquo;ve built everything with love, ease, and your pet&rsquo;s safety in mind.
                            </p>
                            <p className="text-lg text-balance">
                                🐾 Whether you&rsquo;re a new pet parent or a seasoned pro, Petunia gives you peace of mind — and more time to enjoy the moments that matter.
                            </p>
                            <p className="text-lg text-balance">
                                💌 Have feedback? Would you like to see a specific feature or function added? Email us at{" "}
                                <a href="mailto:admin@petuniapets.com" className="underline text-[#2c4a30]">
                                    admin@petuniapets.com
                                </a>.
                            </p>
                            <p className="text-lg text-balance">
                                🎉{" "}
                                <Link
                                    href={`/${locale}/loginsignup`}
                                    className="underline text-[#2c4a30] font-semibold"
                                >
                                    Click here to get started today.
                                </Link>
                            </p>
                        </section>
                    )}

                    {selectedRole === 'boarding' && (
                        <section className="space-y-5 w-full max-w-xl">
                            <h3 className="text-2xl font-bold text-center">For Boarding & Daycare Facilities</h3>
                            <p className="text-lg text-balance">
                                Petunia is here to help you streamline operations, save time, and focus on what matters most — the dogs in your care and the people who love them.
                            </p>
                            <p className="text-lg text-balance">
                                From check-ins and feeding notes to client management, reminders, and real-time schedule visibility — it&rsquo;s all right here.
                            </p>
                            <p className="text-lg text-balance">
                                💡 Free for your first 30 days — just $20/month after. No contracts. No nonsense.
                            </p>
                            <p className="text-lg text-balance">
                                A few years ago, we were just a small facility with more heart than budget. We remember what it felt like to be priced out of software that promised to help — but didn’t feel made for us.
                                <br /><br />
                                So we built Petunia to be different. <strong>You shouldn&rsquo;t have to be a big operation in order to deserve something better.</strong> It’s powerful enough for a growing franchise, but priced so even a one-person operation can justify it.
                                <br /><br />
                                No contracts. No hidden fees. Just tools that work — for the people who do the work.
                            </p>
                            <p className="text-lg text-balance">
                                💌 Questions or requests? Want a feature that we don&rsquo;t currently have? Email us at{" "}
                                <a href="mailto:admin@petuniapets.com" className="underline text-[#2c4a30]">
                                    admin@petuniapets.com
                                </a>.
                            </p>
                            <p className="text-lg text-balance">
                                🎉{" "}
                                <Link
                                    href={`/${locale}/loginsignup`}
                                    className="underline text-[#2c4a30] font-semibold"
                                >
                                    Click here to get started today.
                                </Link>
                            </p>
                        </section>
                    )}

                    {selectedRole === 'sitterWalker' && (
                        <section className="space-y-5 w-full max-w-xl">
                            <h3 className="text-2xl font-bold text-center">Pet Sitters & Dog Walkers</h3>
                            <p className="text-lg text-balance">
                                This part of Petunia is coming soon! We&rsquo;re rolling out tools built specifically for sitters and walkers.
                            </p>
                            <p className="text-lg text-balance">
                                Just $5/month. No commissions, ever. Bring your existing clients and grow from there.
                            </p>
                            <p className="text-lg text-balance">
                                You’ve worked hard to build trust. Every walk, every visit, every tail wag — it all adds up to something real.
                                <br /><br />
                                If you have clients on other platforms, don’t leave your reputation behind. Invite them to join you here. Once they sign up and you approve them as a past client, they can write you a review — so your history doesn’t disappear, and your momentum doesn’t miss a step.
                            </p>
                            <p className="text-lg text-balance">
                                💌 Want to shape the features and help us determine what features we roll out next? Email us at{" "}
                                <a href="mailto:admin@petuniapets.com" className="underline text-[#2c4a30]">
                                    admin@petuniapets.com
                                </a>.
                            </p>
                        </section>
                    )}

                    {selectedRole === 'rescue' && (
                        <section className="space-y-5 w-full max-w-xl">
                            <h3 className="text-2xl font-bold text-center">For Rescues & Adoption Shelters</h3>
                            <p className="text-lg text-balance">
                                Petunia will always be 100% free for rescue organizations and shelters.
                            </p>
                            <p className="text-lg text-balance">
                                A one-time $2 transfer fee helps pass medical history and care notes to the new family at adoption.
                            </p>
                            <p className="text-lg text-balance">💚 Thank you for everything you do.</p>
                        </section>
                    )}

                    {selectedRole === 'vetClinic' && (
                        <section className="space-y-5 w-full max-w-xl">
                            <h3 className="text-2xl font-bold text-center">Veterinary Clinics</h3>
                            <p className="text-lg text-balance">
                                Most clinic software is rigid and outdated. We&rsquo;re building something better — flexible, modern, and shaped around how real veterinary teams operate.
                            </p>
                            <p className="text-lg text-balance">
                                Stay tuned as we expand support for multi-location practices and seamless pet record syncing.
                            </p>
                        </section>
                    )}
                </div>
            </main>
        </>
    );
}
