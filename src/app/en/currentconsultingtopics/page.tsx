'use client';

import Image from 'next/image';

export default function CurrentConsultingTopicsPage() {
    return (
        <main className="min-h-screen bg-[#f6efe4] text-[#2c4a30] px-4 sm:px-6 py-12 font-sans flex flex-col items-center">
            <div className="w-full max-w-3xl space-y-10 text-center">
                {/* Logo */}
                <Image
                    src="/petunia_logo.png"
                    alt="Petunia Logo"
                    width={160}
                    height={0}
                    className="w-36 sm:w-40 h-auto mx-auto"
                    priority
                />

                {/* Header */}
                <h1 className="text-3xl font-bold">
                    Consulting Topics
                </h1>

                <div className="md:hidden rounded-xl border border-[#d9cfc2] bg-white/40 p-3 text-left">
                    <p className="text-xs font-semibold uppercase tracking-wide text-[#2c4a30] mb-2">On this page</p>
                    <div className="flex flex-wrap gap-2">
                        <a href="#topics-current" className="text-xs px-3 py-1.5 rounded-full border border-[#2c4a30]">Current</a>
                        <a href="#topics-upcoming" className="text-xs px-3 py-1.5 rounded-full border border-[#2c4a30]">Upcoming</a>
                        <a href="#topics-how" className="text-xs px-3 py-1.5 rounded-full border border-[#2c4a30]">How It Works</a>
                    </div>
                </div>

                <p className="text-lg leading-relaxed">
                    This page outlines the business topics I am currently spending the most time helping
                    pet care business owners with. These areas change periodically based on demand, season,
                    and where people tend to need the most support.
                </p>

                {/* Current Focus */}
                <p id="topics-current" className="text-xl sm:text-2xl font-extrabold tracking-wide text-[#2c4a30] uppercase scroll-mt-24">
                    Current Coverage: January&nbsp;1&nbsp;–&nbsp;31,&nbsp;2026
                </p>

                <p className="text-lg leading-relaxed">
                    From January&nbsp;1 through January&nbsp;15,&nbsp;2026, the primary area I am helping people with is
                    <strong> daily bookkeeping and accounting</strong>. Many pet care businesses struggle not because
                    they are unprofitable, but because their financial information is scattered, inconsistent, or only
                    reviewed once a year during tax season.
                </p>

                <p className="text-lg leading-relaxed">
                    During this time, I am focused on helping business owners organize their numbers throughout the year
                    using <strong>customized spreadsheets</strong> that track income, expenses, payroll, and basic
                    performance metrics automatically. These spreadsheets handle the calculations for you and provide
                    clarity without the need for expensive accounting software.
                </p>

                <p className="text-lg leading-relaxed">
                    This guidance is completely free to use and is intended to reduce stress and save time when tax season
                    arrives. However, this support is <strong>not a replacement for a CPA</strong>. You should always work
                    with a licensed accountant in your state or locality to ensure compliance and to identify deductions
                    or strategies specific to your situation.
                </p>

                <div className="mt-6 p-4 border border-[#2c4a30] rounded-lg bg-white/40">
                    <p className="text-lg font-semibold">
                        Interested in the accounting help being offered during this period?
                    </p>

                    <p className="text-lg leading-relaxed mt-2">
                        Please email me directly at{' '}
                        <a
                            href="mailto:admin@petuniapets.com"
                            className="underline font-medium hover:opacity-80"
                        >
                            admin@petuniapets.com
                        </a>{' '}
                        and indicate that you are interested in signing up for help with the
                        <strong> bookkeeping and accounting guidance</strong> covered during this time.
                    </p>
                </div>

                {/* Upcoming Focus */}
                <h2 id="topics-upcoming" className="text-2xl font-semibold scroll-mt-24">
                    Upcoming Focus
                </h2>

                <p className="text-xl sm:text-2xl font-extrabold tracking-wide text-[#2c4a30] uppercase">
                    Upcoming Coverage: January&nbsp;16&nbsp;–&nbsp;February&nbsp;14,&nbsp;2026
                </p>

                <p className="text-lg leading-relaxed">
                    From January&nbsp;16 through January&nbsp;31,&nbsp;2026, I will be offering focused help with
                    <strong> building and improving your Google Business Profile</strong> and understanding how
                    online reviews impact your business&rsquo;s visibility and credibility.
                </p>

                <p className="text-lg leading-relaxed">
                    During this period, I will be helping business owners understand the real value of a review,
                    how Google uses reviews to determine which businesses appear in local search results, and
                    how to improve visibility relative to competitors in your area.
                </p>

                <ul className="list-disc list-inside space-y-2 text-lg text-left sm:text-center px-4 sm:px-0">
                    <li>Setting up or refining a Google Business Profile correctly</li>
                    <li>Should you focus on getting quality reviews or simply pay for advertising?</li>
                    <li>Understanding why reviews matter and how they influence visibility</li>
                    <li>Identifying which clients are appropriate to ask for reviews</li>
                    <li>How to ask for reviews in a professional, natural way</li>
                    <li>How to respond to negative reviews calmly and effectively</li>
                    <li>Turning negative feedback into confidence-building responses for future clients</li>
                </ul>

                <div className="mt-6 p-4 border border-[#2c4a30] rounded-lg bg-white/40">
                    <p className="text-lg font-semibold">
                        Interested in the Google Business Profile and reviews guidance?
                    </p>

                    <p className="text-lg leading-relaxed mt-2">
                        Please email me directly at{' '}
                        <a
                            href="mailto:admin@petuniapets.com"
                            className="underline font-medium hover:opacity-80"
                        >
                            admin@petuniapets.com
                        </a>{' '}
                        and indicate that you are interested in signing up for help with
                        <strong> Google Business Profile setup and review strategy</strong>.
                    </p>
                </div>

                {/* How This Page Works */}
                <h2 id="topics-how" className="text-2xl font-semibold scroll-mt-24">
                    How This Page Works
                </h2>

                <p className="text-lg leading-relaxed">
                    This page will be updated as topics shift throughout the year. Some subjects may
                    remain ongoing, while others are seasonal or time-sensitive. If you are unsure whether
                    something you want help with fits into these categories, you are still encouraged to
                    reach out.
                </p>

                <p className="text-lg leading-relaxed">
                    The goal of this consulting work is not to sell services, but to provide clarity,
                    perspective, and real-world guidance based on experience. If I believe a question
                    falls outside my expertise, I will be honest about that and help point you in the
                    right direction whenever possible.
                </p>

                {/* Back Link */}
                <p className="text-lg mt-6">
                    <a
                        href="/en/consulting"
                        className="underline font-medium hover:opacity-80"
                    >
                        ← Back to Consulting
                    </a>
                </p>
            </div>
        </main>
    );
}
