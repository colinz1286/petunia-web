'use client';

import Head from 'next/head';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function ShouldDaycareOnlyExpandIntoBoarding() {
    const locale = useLocale();

    const title =
        'Should a Daycare-Only Facility Expand Into Boarding? A Realistic Decision Guide';
    const date = 'December 30, 2025';
    const categories = ['boarding', 'sitter', 'walker'] as const;

    const categoryLabels: Record<string, string> = {
        boarding: 'Boarding & Daycare',
        daycare: 'Daycare',
        owner: 'Pet Owners',
        sitter: 'Pet Sitters',
        walker: 'Dog Walkers',
        rescue: 'Rescues',
        vet: 'Veterinary Clinics',
    };

    return (
        <>
            <Head>
                <title>{title} – Petunia Blog</title>
                <meta
                    name="description"
                    content="Thinking about adding boarding to a daycare-only business? Here is a realistic, operator-first framework covering 24/7 responsibility, staffing, home-based limitations, licensing, liability, and facility requirements."
                />
                <meta name="robots" content="all" />
            </Head>

            <main className="max-w-3xl mx-auto px-4 py-10 text-[#2c4a30]">
                <p className="text-sm text-gray-500 mb-2">Posted on {date}</p>
                <h1 className="text-3xl font-bold mb-4">{title}</h1>

                {/* 🏷️ Category Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                    {categories.map((key) => (
                        <span
                            key={key}
                            className="text-xs bg-[#e4dbcb] text-[#2c4a30] px-3 py-1 rounded-full border border-[#d9cfc2]"
                        >
                            {categoryLabels[key]}
                        </span>
                    ))}
                </div>

                {/* CONSULTING CTA — TOP OF ARTICLE (Boarding Expansion) */}
                <section className="mb-8">
                    <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
                        <p>
                            If you&rsquo;re a daycare-only operator seriously considering adding overnight boarding, I offer
                            one-on-one consulting to help you think through the real-world tradeoffs: staffing coverage,
                            licensing and compliance, facility setup, safety systems, and liability planning. There&rsquo;s no
                            sales pitch and no pressure &mdash; just practical conversations grounded in what actually happens
                            when you go from fixed hours to 24/7 responsibility. If that would be helpful, email me at{' '}
                            <a href="mailto:admin@petuniapets.com" className="underline hover:opacity-80">
                                admin@petuniapets.com
                            </a>
                            .
                        </p>
                    </div>
                </section>

                <p className="text-lg mb-4">
                    If you only do daycare, your hours are usually fixed: there is a defined start time, a defined end
                    time, and most dogs go home at night. The moment you add overnight boarding, the nature of your
                    business changes completely. You are no longer running a daytime service &mdash; you are operating a
                    24/7 care responsibility.
                </p>

                <p className="mb-4">
                    This article is a practical decision guide for daycare-only operators considering boarding. It is
                    intentionally blunt, because boarding can be a great expansion &mdash; but it is also one of the most
                    consequential decisions you will make in your business.
                </p>

                <p className="mb-6 italic text-gray-600 text-sm">
                    Disclaimer: This is educational information from an operator perspective, not legal advice. For
                    licensing, zoning, insurance, and liability questions, consult qualified professionals in your
                    jurisdiction.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-3">🕒 Daycare Has Edges; Boarding Has No Edges</h2>
                <p className="mb-4">
                    Daycare is demanding, but it has boundaries. Boarding does not.
                </p>

                <ul className="list-disc pl-5 space-y-2 mb-4">
                    <li>
                        <strong>Daycare:</strong> A defined operating day. Even if you work hard, there is an off-switch.
                    </li>
                    <li>
                        <strong>Boarding:</strong> There is no moment in a 24-hour cycle where you are not responsible for
                        an animal&rsquo;s safety, health, and containment.
                    </li>
                </ul>

                <p className="mb-4">
                    That single difference ripples into everything: staffing, scheduling, facility build-out, client
                    communication, emergency planning, liability exposure, and your personal lifestyle.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-3">📅 The Operating Model Shift: 365 Decisions</h2>
                <p className="mb-4">
                    Once dogs stay overnight, you have to make decisions that daycare-only businesses can avoid:
                </p>

                <ul className="list-disc pl-5 space-y-2 mb-4">
                    <li>Do you close on holidays, or are you open 365 days a year?</li>
                    <li>What are your cut-off times for drop-off and pick-up?</li>
                    <li>Who is physically responsible overnight &mdash; and what happens when they get sick?</li>
                    <li>How do you handle late arrivals, early departures, and emergency vet runs?</li>
                    <li>What is your plan if power goes out, HVAC fails, or a dog becomes medically unstable at 2am?</li>
                </ul>

                <p className="mb-4">
                    Boarding can be done well, but it requires planning that goes far beyond &ldquo;adding a few
                    kennels.&rdquo; If you are not willing to design systems for worst-case scenarios, boarding will find
                    your weak points.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-3">🏠 Home-Based Care: What Gets Easy to Hide (Until It Doesn&rsquo;t)</h2>
                <p className="mb-4">
                    Many people start daycare in a small way. A single dog, a few hours, minimal equipment. It can be
                    surprisingly easy to keep that low profile &mdash; especially if it looks like normal pet ownership.
                </p>

                <p className="mb-4">
                    Overnight boarding is different. Noise, traffic, dog movement, and the optics of multiple dogs
                    staying at a residence can quickly become visible to neighbors and local officials. Even if your
                    neighbors never complain, your risk is not just visibility &mdash; it is the legal and liability
                    footprint you are creating.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-3">📜 Licensing and Compliance: Do Not Assume You Are Allowed</h2>
                <p className="mb-4">
                    Rules vary widely by state, county, and municipality. If you want to add boarding, you should
                    proactively research your requirements before you accept your first overnight stay.
                </p>

                <p className="mb-4">
                    In Pennsylvania, for example, the state has a kennel licensing framework administered through the
                    Pennsylvania Department of Agriculture, and operating a kennel can require licensing and inspection
                    depending on how you meet the legal definition and classification.
                </p>

                <p className="mb-4">
                    The practical point is not &ldquo;Pennsylvania is strict&rdquo; &mdash; it is that many operators never
                    check at all. Some people ignore licensing requirements until a complaint, incident, or inspection
                    forces the issue. That is a dangerous way to run a business, especially when animals and client
                    trust are involved.
                </p>

                <p className="mb-4">
                    If you are serious about building a real brand, compliance is not just about avoiding penalties.
                    It is an integrity signal. Many clients care deeply whether they are supporting a legitimate
                    operator that follows the rules.
                </p>

                <h3 className="text-xl font-semibold mt-6 mb-2">A practical compliance checklist</h3>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                    <li>State licensing or kennel licensing requirements (if applicable)</li>
                    <li>Local zoning rules for boarding at a residence or facility</li>
                    <li>Business registration requirements in your state</li>
                    <li>Insurance requirements (general liability, care/custody/control, workers comp)</li>
                    <li>Written client agreements and liability waivers reviewed by an attorney</li>
                    <li>Emergency policies: evacuation, vet transport, medical consent, incident documentation</li>
                </ul>

                <h2 className="text-2xl font-semibold mt-8 mb-3">🧱 Space and Setup: Boarding Usually Requires a Dedicated Area</h2>
                <p className="mb-4">
                    In daycare, some small operators can get by without a traditional kennel setup &mdash; especially at
                    very low volume. With boarding, that approach breaks down fast.
                </p>

                <p className="mb-4">
                    Dogs may have accidents overnight. Dogs may wake up anxious. Dogs may need separation. Dogs may need
                    controlled containment for safety. And you cannot responsibly have dogs freely roaming a home or
                    facility unsupervised in the middle of the night without thoughtfully designed safeguards.
                </p>

                <p className="mb-4">
                    Boarding almost always demands a dedicated overnight area with:
                </p>

                <ul className="list-disc pl-5 space-y-2 mb-4">
                    <li>Safe containment (crates, suites, runs, or rooms designed for overnight safety)</li>
                    <li>Surfaces that can be sanitized and withstand repeated cleaning</li>
                    <li>Noise and stress management (layout choices matter more than people think)</li>
                    <li>Clear separation plans for dogs who cannot safely co-house</li>
                    <li>Documented protocols for overnight checks and incident response</li>
                </ul>

                <h2 className="text-2xl font-semibold mt-8 mb-3">👥 Staffing Reality: Boarding Forces the Team Question</h2>
                <p className="mb-4">
                    Boarding can be done by a single person at extremely small volume, but true expansion usually
                    requires help. Overnight coverage, weekends, holidays, and early mornings all compound quickly.
                </p>

                <p className="mb-4">
                    The question is not whether you <em>can</em> do it alone. The question is whether you can do it
                    sustainably without burning out or cutting corners when life happens.
                </p>

                <h3 className="text-xl font-semibold mt-6 mb-2">Ask yourself these staffing questions</h3>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                    <li>If you get sick, who covers overnight care?</li>
                    <li>If a family emergency happens, can the business still operate safely?</li>
                    <li>Do you have coverage for holidays without resentment or chaos?</li>
                    <li>Are your systems clear enough that a trained employee can follow them without guesswork?</li>
                </ul>

                <h2 className="text-2xl font-semibold mt-8 mb-3">🧯 Risk, Liability, and Worst-Case Thinking</h2>
                <p className="mb-4">
                    Many people are emotionally and operationally unprepared for worst-case scenarios. Boarding forces
                    you to confront them.
                </p>

                <p className="mb-4">
                    If a dog is injured overnight, if a dog escapes, if a dog fights, or if a dog experiences a medical
                    emergency, you are responsible for what happened under your care. Even if your daycare liability
                    profile is already significant, the overnight layer increases exposure because you are accountable
                    across more hours, more variables, and more potential failure points.
                </p>

                <h3 className="text-xl font-semibold mt-6 mb-2">Why &ldquo;real business structure&rdquo; matters</h3>
                <p className="mb-4">
                    If you are not operating as a properly formed business entity (and you are not properly insured),
                    you may be exposing yourself to direct personal liability. People sometimes treat business formation
                    as optional paperwork. In animal care, it is part of responsible risk management.
                </p>

                <p className="mb-4">
                    The right move here is not to panic. The right move is to build your foundation intentionally:
                    consult an attorney for agreements and liability structure, consult an insurance professional for
                    coverage specific to animal care, and build protocols that assume things will eventually go wrong.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-3">✅ A Simple Decision Framework: Is Boarding Right for You?</h2>
                <p className="mb-4">
                    Here is a grounded way to decide without romanticizing it.
                </p>

                <h3 className="text-xl font-semibold mt-6 mb-2">Boarding may be a good fit if:</h3>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                    <li>You are willing to operate as a 24/7 responsibility, not a daytime service.</li>
                    <li>You can commit to clear cut-off times and enforce them consistently.</li>
                    <li>You have (or can build) a dedicated overnight setup that is safe and sanitary.</li>
                    <li>You are ready to hire and train help, or you have reliable coverage options.</li>
                    <li>You are prepared to do licensing, compliance, insurance, and legal work the right way.</li>
                </ul>

                <h3 className="text-xl font-semibold mt-6 mb-2">Boarding is probably not the right move (yet) if:</h3>
                <ul className="list-disc pl-5 space-y-2 mb-6">
                    <li>You value evenings, weekends, and holidays off and want to protect that lifestyle.</li>
                    <li>You are hoping to keep the business low-visibility or informal.</li>
                    <li>You do not have a realistic plan for emergencies, sickness, and coverage gaps.</li>
                    <li>You are not willing to invest in dedicated space and professional-grade protocols.</li>
                    <li>You have not researched your local rules and you are hoping it will be fine.</li>
                </ul>

                <h2 className="text-2xl font-semibold mt-8 mb-3">📌 Final Thoughts</h2>
                <p className="mb-4">
                    Boarding can be an incredible expansion for the right operator. It can unlock new revenue, deepen
                    client relationships, and make your business more resilient across seasons.
                </p>

                <p className="mb-4">
                    But it is not a casual add-on. It is a commitment to round-the-clock responsibility for animals
                    who cannot advocate for themselves. If you decide to expand, do it with planning, integrity, and a
                    worst-case mindset &mdash; because those are the things that protect both dogs and your business.
                </p>

                <p className="mb-6 italic text-gray-600 text-sm">
                    References (Pennsylvania examples): Pennsylvania Department of Agriculture kennel licensing
                    information and application guidance; Pennsylvania administrative code for kennels; Pennsylvania
                    statutory language regarding kennel licensing.
                </p>

                {/* PERSONAL CLOSING + CONSULTING CTA — END OF ARTICLE (Boarding Expansion) */}
                <section className="mt-10 mb-10">
                    <p className="mb-6">
                        Thank you for taking the time to read this &mdash; and for caring enough about your business (and
                        the dogs in your care) to think through big decisions carefully. Expanding into boarding can be a
                        game-changer, but it is also one of the most serious commitments you can make in the dog industry.
                        If you decide to do it, I hope you do it in a way that protects your peace, your team, and most
                        importantly, the dogs.
                    </p>

                    <p>
                        If you want a second set of eyes before you make the jump, I&rsquo;m always happy to talk through
                        your specific situation: what you offer now, what your capacity looks like, what your personal
                        lifestyle goals are, and what would need to be true for boarding to be a safe, sustainable next
                        step. You can reach me directly at{' '}
                        <a href="mailto:admin@petuniapets.com" className="underline hover:opacity-80">
                            admin@petuniapets.com
                        </a>
                        .
                    </p>
                </section>

                {/* Backlink to the broader service-mix article */}
                <p className="mb-6">
                    If you want the broader comparison of daycare-only versus adding boarding (and why grooming is a
                    different type of risk), you can also read:{' '}
                    <Link
                        href={`/${locale}/blog/daycare-vs-boarding-vs-grooming`}
                        className="underline font-medium hover:opacity-80"
                    >
                        Should You Offer Daycare Only — or Add Boarding and Grooming?
                    </Link>
                    .
                </p>

                <Link
                    href={`/${locale}/blog`}
                    className="underline text-[#2c4a30] font-medium hover:opacity-80"
                >
                    ← Back to Blog
                </Link>
            </main>
        </>
    );
}
