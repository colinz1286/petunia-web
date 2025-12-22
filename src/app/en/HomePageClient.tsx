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

                <div className="w-full max-w-md mb-6">
                    <p className="text-sm text-gray-600 mb-3 text-balance">
                        If you&rsquo;re an iOS user (meaning you have an Apple iPhone) and would like to use the Petunia app on your device, it&rsquo;s currently available in the following countries. The Petunia website, however, is accessible worldwide for anyone who speaks English.
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
                                If you&rsquo;re curious how Petunia stays free, we want to reassure you that we do not sell your personal information — you can learn more by reviewing our{' '}
                                <a
                                    href="http://localhost:3000/en/privacypolicy"
                                    className="underline font-medium"
                                >
                                    Privacy Policy
                                </a>.
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
                                💡 Free for your first 60 days. We know from expreience that it takes an average of 30 days for your clients to enter their information into Petunia (there is very little data migration necessary when using our software because your clients add all the information for you!). So, whether you are integrating software into your business for the first time, or switching from another system, we are taking into account the time it will take for everyone to get on boarded. After the 60 day period is up, our price is $1/month moving forward.
                                <br />
                            </p>
                            <p className="text-lg text-balance">
                                If you&rsquo;re concerned about how we&rsquo;re able to keep pricing so low, we want to be clear that we do not sell your data or personal information — you can learn more by reviewing our{' '}
                                <a
                                    href="http://localhost:3000/en/privacypolicy"
                                    className="underline font-medium"
                                >
                                    Privacy Policy
                                </a>.
                            </p>
                            <p className="text-lg text-balance">
                                The creators of Petunia are also owners of a boarding and daycare facility — that’s how we got our start in this industry back in 2017. We know the daily challenges firsthand, because we’ve lived them.
                            </p>
                            <p className="text-lg text-balance">
                                People who stay in this industry only stay for one reason: they love the animals. They sacrifice weekends, sleep, and margins of comfort to make life better for the dogs in their care. Your software should never punish that. You shouldn’t have to watch hard-earned money leak out of your pocket just to manage the basics. We don’t make you pay for our rent — we simply have our priorities straight. We wanted to build a software company that actually cared about the customer… and their wallets (important to not forget that last part!).
                                <br /><br />
                                Caring doesn’t mean overcharging; it means delivering the features that make your life easier, at a price that respects the work you do and the sacrifices you make. While families go away, they trust you to take care of their dog while they’re on vacation. That doesn’t mean you shouldn’t be able to afford a nice vacation as well!
                                <br /><br />
                                An incredibly small in-home boarding and daycare facility should not have to sacrifice features simply because they can’t afford them. And a large facility should not have to give up the fine-tuned features that smaller software packages offer. Right now, everyone on both sides of the fence is forced to compromise. We’re going to eliminate that.
                                <br />
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
                                This part of Petunia is coming in the first half of 2026! We&rsquo;re rolling out tools built specifically for sitters and walkers.
                            </p>
                            <p className="text-lg text-balance">
                                $1/month. No commissions, ever. Bring your existing clients and grow from there. Why should you be paying obscene prices for software, and then giving out your personal phone number so you don't lose significant portions of your hard earned money to larger software companies? Of course, you will encourage people to book directly through you so you can make more money! But you shouldn't have to do this at the sacrifice of your own personal privacy.
                            </p>
                            <p className="text-lg text-balance">
                                If you&rsquo;re wondering how we keep pricing so low, we want to be clear that we do not sell your data or personal information — you can learn more by reviewing our{' '}
                                <a
                                    href="http://localhost:3000/en/privacypolicy"
                                    className="underline font-medium"
                                >
                                    Privacy Policy
                                </a>.
                            </p>
                            <p className="text-lg text-balance">
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
                                Software for rescue and shelter organizations coming in mid to late 2026. When it goes live, it will cost $1/mo.
                            </p>
                            <p className="text-lg text-balance">
                                If you’re concerned about how we’re able to keep pricing so low, rest assured we do not sell your data or personal information — you can learn more by reviewing our{' '}
                                <a
                                    href="http://localhost:3000/en/privacypolicy"
                                    className="underline font-medium"
                                >
                                    Privacy Policy
                                </a>.
                            </p>
                            <p className="text-lg text-balance">💚 Thank you for everything you do in helping to give animals the life they deserve.</p>
                        </section>
                    )}

                    {selectedRole === 'vetClinic' && (
                        <section className="space-y-5 w-full max-w-xl">
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
