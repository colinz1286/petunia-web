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
        { key: 'petOwner', label: 'Pet Owner', summary: 'Free tools for pet profiles, records, and bookings.' },
        { key: 'boarding', label: 'Boarding and Daycare Facility Owner/Manager', summary: 'Operator-built tools for daily facility operations.' },
        { key: 'groomer', label: 'Dog Groomer (Shop Owner/Manager)', summary: 'Organize groomer workflows and client records.' },
        { key: 'consulting', label: 'Free Consulting (Private 1-on-1)', summary: 'Private one-on-one guidance for pet care professionals.' },
        { key: 'sitterWalker', label: 'Pet Sitter or Dog Walker', summary: 'Upcoming sitter and walker tools with no commissions.' },
        { key: 'breeder', label: 'Breeder', summary: 'Track litters, records, and owner transfers in one place.' },
        { key: 'rescue', label: 'Rescue or Adoption Shelter Owner/Manager', summary: 'Upcoming free support for rescues and shelters.' },
        { key: 'vetClinic', label: 'Veterinary Clinic Owner/Manager', summary: 'Future modern clinic workflows and record management.' },
    ];
    const privacyPolicyHref = `/${locale}/privacypolicy`;
    const dogBoardingSoftwareHref = `/${locale}/dog-boarding-software`;
    const selectedRoleSummary = roles.find((role) => role.key === selectedRole)?.summary;

    useEffect(() => {
        if (selectedRole && contentRef.current) {
            contentRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [selectedRole]);

    // ✅ Force Safari to apply <title> post-hydration (matches SEO title)
    useEffect(() => {
        document.title = 'Petunia | Modern Pet Care Software Built by Boarding & Daycare Owners';
    }, []);

    return (
        <>
            <Head>
                <title>Petunia | Modern Pet Care Software Built by Boarding & Daycare Owners</title>
                <meta
                    name="description"
                    content="Petunia is modern pet care software built by real boarding and daycare owners. Manage reservations, pet records, vaccinations, waivers, and daily operations from one place."
                />

                {/* ✅ Canonical URL */}
                <link
                    rel="canonical"
                    href={`https://www.petuniapets.com${locale ? `/${locale}` : '/en'}`}
                />

                {/* ✅ Language alternates */}
                <link rel="alternate" hrefLang="en" href="https://www.petuniapets.com/en" />
                <link rel="alternate" hrefLang="x-default" href="https://www.petuniapets.com/" />
            </Head>

            <main className="flex-grow flex flex-col items-center justify-start text-center px-4 mt-10">
                {/* Logo */}
                <Image
                    src="/petunia_logo.png"
                    alt="Petunia pet care software logo"
                    width={288}
                    height={0}
                    className="mb-6 h-auto w-64 sm:w-72"
                    priority
                />

                {/* Primary H1 */}
                <h1 className="text-2xl sm:text-3xl font-bold text-[#2c4a30] mb-4 text-balance">
                    Modern Pet Care Software Built by Real Boarding & Daycare Owners — Not Investors
                </h1>

                {/* Slogan */}
                <p className="text-gray-600 italic text-lg mb-6 text-balance">
                    The perfect software for your business.<br />
                    The perfect world for your pet.
                </p>

                <div className="w-full max-w-md mb-6">
                    <p className="text-sm text-gray-600 mb-3 text-balance">
                        The Petunia iOS app is currently available in Canada, the United States, Ireland, the United Kingdom, New Zealand, and Australia. The web platform is accessible worldwide.
                    </p>

                    {/* Countries We Serve */}
                    <div className="flex items-center justify-center gap-4 text-3xl">
                        <span aria-label="Canada" title="Canada">🇨🇦</span>
                        <span aria-label="United States" title="United States">🇺🇸</span>
                        <span aria-label="Ireland" title="Ireland">🇮🇪</span>
                        <span aria-label="United Kingdom" title="United Kingdom">🇬🇧</span>
                        <span aria-label="New Zealand" title="New Zealand">🇳🇿</span>
                        <span aria-label="Australia" title="Australia">🇦🇺</span>
                    </div>
                </div>

                {/* Client growth counter */}
                <div className="mt-6 mb-6 flex justify-center">
                    <div className="rounded-xl border border-[#d9cfc2] bg-white px-6 py-3 shadow-sm">
                        <p className="text-[#2c4a30] text-sm sm:text-base font-bold tracking-wide">
                            🐾 557 active clients
                        </p>
                        <p className="text-md sm:text-md text-[#2c4a30] mt-0.5 text-center">
                            Facilities and professionals across multiple countries.
                        </p>
                    </div>
                </div>

                {/* Operator Credibility */}
                <div className="w-full max-w-3xl mb-12 rounded-2xl border border-[#d9cfc2] bg-white px-8 py-8 shadow-sm text-center">
                    <h2 className="text-2xl sm:text-3xl font-bold text-[#2c4a30] mb-4 tracking-wide">
                        BUILT BY REAL BOARDING & DAYCARE OPERATORS
                    </h2>
                    <p className="text-base text-gray-700 leading-relaxed max-w-2xl mx-auto">
                        Petunia was created by the owners of a real dog boarding and daycare facility operating since 2017.
                        While the platform supports multiple areas of pet care, boarding and daycare remain at its core.
                        Every feature is shaped by real-world operations — not theory, not investors, and not bloated legacy software.
                    </p>
                </div>

                {/* Headline */}
                <h2 className="w-full max-w-2xl text-xl sm:text-2xl font-bold mb-4 text-[#2c4a30] tracking-wide text-balance">
                    One software platform, built to support every part of modern pet care.
                </h2>

                <p className="w-full max-w-2xl text-sm text-gray-600 mb-6 text-balance">
                    Petunia is a modern pet care software platform designed to support boarding and daycare facilities,
                    groomers, breeders, and pet owners &mdash; all built from real, hands-on industry experience.
                </p>
                <p className="w-full max-w-2xl text-xs text-gray-500 mb-8 text-balance">
                    Looking specifically for tools built for facilities?
                    <Link href={dogBoardingSoftwareHref} className="underline mx-1">
                        Learn more about our dog boarding software
                    </Link>
                </p>

                {/* Role Buttons */}
                <div className="w-full max-w-md mb-10">
                    <label htmlFor="role-select" className="block text-sm font-semibold text-[#2c4a30] mb-2">
                        Choose your role
                    </label>
                    <select
                        id="role-select"
                        value={selectedRole ?? ''}
                        onChange={(e) => setSelectedRole(e.target.value || null)}
                        className="w-full md:hidden px-4 py-3 rounded border border-[#2c4a30] bg-white text-[#2c4a30]"
                    >
                        <option value="">Select a role to view details</option>
                        {roles.map((role) => (
                            <option key={role.key} value={role.key}>
                                {role.label}
                            </option>
                        ))}
                    </select>

                    <div className="hidden md:flex md:flex-col gap-3">
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

                    {selectedRoleSummary && (
                        <p className="text-sm text-gray-700 mt-3 md:text-center text-left">
                            {selectedRoleSummary}
                        </p>
                    )}
                </div>

                {/* Dynamic Content */}
                <div
                    ref={contentRef}
                    className="w-full max-w-3xl mt-2 mb-6 text-[#2c4a30] text-left sm:text-center flex flex-col items-center scroll-mt-24"
                >
                    {selectedRole === 'petOwner' && (
                        <section className="space-y-5 w-full max-w-xl bg-white border border-[#d9cfc2] rounded-xl p-5 sm:p-8 shadow-sm">
                            <h3 className="text-2xl font-bold text-center">Welcome, Pet Owners!</h3>
                            <p className="text-lg text-balance">
                                Petunia is free to all pet owners! This is your all-in-one hub to manage your pet&rsquo;s care — from daycare and boarding reservations to vaccination tracking and feeding instructions.
                            </p>
                            <p className="text-lg text-balance">
                                Create personalized profiles for each of your pets, upload important records like vaccine certificates, and book services from trusted providers — all in one place.
                            </p>
                            <p className="text-lg text-balance">
                                If you&rsquo;re curious how Petunia stays free, we want to reassure you that we do not sell your personal information — you can learn more by reviewing our{' '}
                                <Link href={privacyPolicyHref} className="underline font-medium">
                                    Privacy Policy
                                </Link>.
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
                        <section className="space-y-5 w-full max-w-xl bg-white border border-[#d9cfc2] rounded-xl p-5 sm:p-8 shadow-sm">
                            <h3 className="text-2xl font-bold text-center">
                                Dog Boarding & Daycare Software
                            </h3>
                            <p className="text-lg text-balance">
                                The creators of Petunia are also owners of a boarding and daycare facility — that’s how we got our start in this industry back in 2017. We know the daily challenges firsthand, because we’ve lived them — from reservations and check-ins to vaccination tracking, waivers, and day-to-day capacity management.
                            </p>
                            <p className="text-lg text-balance">
                                People who stay in this industry do it because they genuinely care about the animals in their care. You sacrifice weekends, sleep, and personal time to serve your clients well. Your software should respect that commitment — not add unnecessary financial pressure. Petunia was built to deliver serious operational capability at a price that reflects real-world margins.
                                <br /><br />
                                Caring doesn’t mean overcharging; it means delivering operational tools that genuinely improve your day-to-day workflow. Small facilities shouldn’t lose features because of pricing, and larger facilities shouldn’t sacrifice precision for scale. Petunia is built to eliminate that compromise.
                                <br /><br />
                            </p>
                            <p className="text-lg text-balance">
                                💌 Questions or requests? Want a feature that we don&rsquo;t currently have? Email us at{" "}
                                <a href="mailto:admin@petuniapets.com" className="underline text-[#2c4a30]">
                                    admin@petuniapets.com
                                </a>.
                            </p>
                            <p className="text-lg text-balance">
                                We want to be clear that we do not sell your data or personal information — you can learn more by reviewing our{' '}
                                <Link href={privacyPolicyHref} className="underline font-medium">
                                    Privacy Policy
                                </Link>.
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

                    {/* ✅ NEW: Groomer Section */}
                    {selectedRole === 'groomer' && (
                        <section className="space-y-5 w-full max-w-xl bg-white border border-[#d9cfc2] rounded-xl p-5 sm:p-8 shadow-sm">
                            <h3 className="text-2xl font-bold text-center">For Dog Groomers</h3>

                            <p className="text-lg text-balance">
                                As of January 9, 2026, Petunia officially supports dog grooming businesses. If you run a grooming shop (or manage a team),
                                you can now keep your clients organized, keep pet profiles clean and consistent, and run your day-to-day workflow without
                                messy notes, endless texts, or chasing down details.
                            </p>

                            <p className="text-lg text-balance">
                                Petunia helps you store key pet details (behavior notes, temperament, special handling, and owner preferences) so your staff
                                can deliver consistent grooms — even if a different groomer sees the dog next time.
                            </p>

                            <p className="text-lg text-balance">
                                We also believe grooming software should not punish small businesses. We&rsquo;re building Petunia to stay affordable, modern,
                                and shaped by real pet professionals — not investors trying to squeeze you for every dollar.
                            </p>

                            <p className="text-lg text-balance">
                                💌 Questions or requests? Want a feature that we don&rsquo;t currently have? Email us at{' '}
                                <a href="mailto:admin@petuniapets.com" className="underline text-[#2c4a30]">
                                    admin@petuniapets.com
                                </a>
                                .
                            </p>

                            <p className="text-lg text-balance">
                                We want to be clear that we do not sell your data or personal information — you can learn more by reviewing our{' '}
                                <Link href={privacyPolicyHref} className="underline font-medium">
                                    Privacy Policy
                                </Link>
                                .
                            </p>

                            <p className="text-lg text-balance">
                                🎉{' '}
                                <Link
                                    href={`/${locale}/loginsignup`}
                                    className="underline text-[#2c4a30] font-semibold"
                                >
                                    Click here to get started today.
                                </Link>
                            </p>
                        </section>
                    )}

                    {selectedRole === 'consulting' && (
                        <section className="space-y-5 w-full max-w-xl bg-white border border-[#d9cfc2] rounded-xl p-5 sm:p-8 shadow-sm">
                            <h3 className="text-2xl font-bold text-center">
                                Free One-on-One Consulting for Pet Care Professionals
                            </h3>

                            <p className="text-lg text-balance">
                                Starting or running a pet care business can be overwhelming &mdash; especially when questions feel too specific,
                                too sensitive, or too early to ask publicly. That&rsquo;s why Petunia offers free, private, one-on-one consulting
                                for people in boarding and daycare, pet sitting, dog walking, and related services.
                            </p>

                            <p className="text-lg text-balance">
                                These conversations are designed to be personal, judgment-free, and practical. Whether you&rsquo;re just getting
                                started, thinking about your next step, or trying to solve a real operational challenge, the goal is simple:
                                clarity, confidence, and support.
                            </p>

                            <p className="text-lg text-balance">
                                Consulting is always free and done face to face via video call. It&rsquo;s a form of community service &mdash; meant
                                to share real experience, answer real questions, and help people build something meaningful with integrity.
                            </p>

                            <p className="text-lg text-balance">
                                👉{' '}
                                <Link
                                    href={`/${locale}/consulting`}
                                    className="underline font-semibold text-[#2c4a30]"
                                >
                                    If you want to learn more about who I am and how I am qualified to help, please click here.
                                </Link>
                                .
                            </p>
                        </section>
                    )}

                    {selectedRole === 'sitterWalker' && (
                        <section className="space-y-5 w-full max-w-xl bg-white border border-[#d9cfc2] rounded-xl p-5 sm:p-8 shadow-sm">
                            <h3 className="text-2xl font-bold text-center">Pet Sitters & Dog Walkers</h3>
                            <p className="text-lg text-balance">
                                This part of Petunia is coming in the first half of 2026! We&rsquo;re rolling out tools built specifically for sitters and walkers.
                            </p>
                            <p className="text-lg text-balance">
                                No commissions, ever. Bring your existing clients and grow from there. You shouldn’t have to choose between keeping more of your revenue and protecting your personal privacy. Petunia is structured so you can grow your business without surrendering large commissions or exposing your personal contact information.
                            </p>
                            <p className="text-lg text-balance">
                                If you&rsquo;re wondering how we keep pricing so low, we want to be clear that we do not sell your data or personal information — you can learn more by reviewing our{' '}
                                <Link href={privacyPolicyHref} className="underline font-medium">
                                    Privacy Policy
                                </Link>.
                            </p>
                            <p className="text-lg text-balance">
                                If you have clients on other platforms, don’t leave your reputation behind. Invite them to join you here. Once they sign up and you approve them as a past client, they can write you a review — so your history doesn’t disappear, and your momentum doesn’t miss a step.
                            </p>
                            <p className="text-lg text-balance">
                                💌 Want to shape the features and help us determine what features we roll out next? Email us at{' '}
                                <a href="mailto:admin@petuniapets.com" className="underline text-[#2c4a30]">
                                    admin@petuniapets.com
                                </a>
                                .
                            </p>
                        </section>
                    )}

                    {selectedRole === 'breeder' && (
                        <section className="space-y-5 w-full max-w-xl bg-white border border-[#d9cfc2] rounded-xl p-5 sm:p-8 shadow-sm">
                            <h3 className="text-2xl font-bold text-center">For Breeders</h3>

                            <p className="text-lg text-balance">
                                Petunia gives breeders a clean, organized way to track litters from the day puppies are born — without spreadsheets,
                                notebooks, or scattered files.
                            </p>

                            <p className="text-lg text-balance">
                                Create a record for each puppy, track body weights over time, store important health notes, and upload key documents
                                like vaccination records, veterinary physicals, and any additional paperwork you want to keep with the puppy&rsquo;s history.
                            </p>

                            <p className="text-lg text-balance">
                                When a puppy goes home, you can transfer ownership directly to the new owner so the puppy&rsquo;s records carry forward
                                seamlessly — helping families stay organized and helping you maintain a professional, transparent process.
                            </p>

                            <p className="text-lg text-balance">
                                If you&rsquo;re wondering how we keep pricing so low, we want to be clear that we do not sell your data or personal
                                information — you can learn more by reviewing our{' '}
                                <Link href={privacyPolicyHref} className="underline font-medium">
                                    Privacy Policy
                                </Link>
                                .
                            </p>

                            <p className="text-lg text-balance">
                                💌 Questions or feature requests? Email us at{' '}
                                <a href="mailto:admin@petuniapets.com" className="underline text-[#2c4a30]">
                                    admin@petuniapets.com
                                </a>
                                .
                            </p>

                            <p className="text-lg text-balance">
                                🎉{' '}
                                <Link href={`/${locale}/loginsignup`} className="underline text-[#2c4a30] font-semibold">
                                    Click here to get started today.
                                </Link>
                            </p>
                        </section>
                    )}

                    {selectedRole === 'rescue' && (
                        <section className="space-y-5 w-full max-w-xl bg-white border border-[#d9cfc2] rounded-xl p-5 sm:p-8 shadow-sm">
                            <h3 className="text-2xl font-bold text-center">For Rescues & Adoption Shelters</h3>
                            <p className="text-lg text-balance">
                                Software for rescue and shelter organizations coming in mid to late 2026. When it goes live, it will be free.
                            </p>
                            <p className="text-lg text-balance">
                                If you’re concerned about how we’re able to keep pricing so low, rest assured we do not sell your data or personal information — you can learn more by reviewing our{' '}
                                <Link href={privacyPolicyHref} className="underline font-medium">
                                    Privacy Policy
                                </Link>.
                            </p>
                            <p className="text-lg text-balance">💚 Thank you for everything you do in helping to give animals the life they deserve.</p>
                        </section>
                    )}

                    {selectedRole === 'vetClinic' && (
                        <section className="space-y-5 w-full max-w-xl bg-white border border-[#d9cfc2] rounded-xl p-5 sm:p-8 shadow-sm">
                            <h3 className="text-2xl font-bold text-center">Veterinary Clinics</h3>
                            <p className="text-lg text-balance">
                                Coming in 2027. Most clinic software is rigid and outdated. We&rsquo;re building something better — flexible, modern, and shaped around how real veterinary teams operate.
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
