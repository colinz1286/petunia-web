'use client';

import Head from 'next/head';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function DaycareVsBoardingVsGroomingBlog() {
    const locale = useLocale();

    const title = 'Should You Offer Daycare Only — or Add Boarding and Grooming?';
    const date = 'August 1, 2025';
    const categories = ['boarding', 'owner'];

    const categoryLabels: Record<string, string> = {
        boarding: 'Boarding & Daycare',
        sitter: 'Pet Sitters',
        walker: 'Dog Walkers',
        rescue: 'Rescues',
        vet: 'Veterinary Clinics',
        owner: 'Pet Owners',
    };

    return (
        <>
            <Head>
                <title>{title} – Petunia Blog</title>
                <meta
                    name="description"
                    content="Compare daycare-only vs. adding boarding and grooming from a real facility owner's perspective. Learn the impact on revenue, lifestyle, and operations."
                />
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

                <p className="text-lg mb-4">
                    When I first opened my facility, I didn&apos;t set out to offer everything under the sun.
                    I wasn&apos;t a groomer. I didn&apos;t have aspirations of running a massive kennel.
                    I just knew I was good at managing dogs in a structured, safe environment &mdash; and I believed
                    there was strong demand for both dog daycare and boarding in our area.
                </p>

                <p className="mb-4">
                    Over time, I&apos;ve had to wrestle with the big strategic questions that every pet care
                    business faces at some point: Should we stick to daycare only, or expand into boarding?
                    Should we add grooming services? What&apos;s the impact on revenue, staffing, and &mdash;
                    maybe most importantly &mdash; lifestyle?
                </p>

                <p className="mb-4">
                    These questions come up over and over in Facebook groups, new facility planning threads,
                    and conversations with colleagues. I&apos;ve lived through all of it &mdash; and I want to
                    walk you through what I&apos;ve learned.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-3">
                    🐾 Our Service Model: Daycare + Boarding, Minimal Grooming
                </h2>
                <p className="mb-4">
                    At our facility, we offer both daycare and boarding as core services. We also offer limited
                    grooming &mdash; basic baths, nail trims, and light cleaning for boarding departures &mdash;
                    but we do not operate a full grooming salon.
                </p>

                <p className="mb-4">
                    That decision has always been intentional. I&apos;m not a groomer by trade, and I&apos;ve seen
                    how complex and risky it can be to run grooming at scale without the right person and
                    systems in place. My focus has always been to do the simple things really, really well:
                    safe playgroups, consistent routines, clean facilities, and strong customer service.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-3">
                    📅 Operational Differences: Simplicity vs. 24/7 Coverage
                </h2>
                <p className="mb-4">
                    Let&apos;s start with the lifestyle and operations piece. Running a daycare-only model is,
                    by far, the least complex of the three.
                </p>

                <ul className="list-disc pl-5 space-y-2 mb-4">
                    <li>Your schedule runs roughly 7am to 7pm</li>
                    <li>Dogs go home at night</li>
                    <li>You can fully shut down after hours and on holidays</li>
                </ul>

                <p className="mb-4">
                    That&apos;s a massive benefit if you&apos;re looking for work-life balance or operating solo.
                    You&apos;re not chasing late-night pickups or sleeping with your phone on full volume during
                    Thanksgiving.
                </p>

                <p className="mb-4">
                    Now, contrast that with boarding. Once you introduce overnight stays, everything changes:
                </p>

                <ul className="list-disc pl-5 space-y-2 mb-4">
                    <li>Your facility never fully closes</li>
                    <li>You need coverage for early mornings, late nights, weekends, and holidays</li>
                    <li>You take on significantly more responsibility &mdash; and liability</li>
                </ul>

                <p className="mb-4">
                    Boarding transforms your business from a &quot;day job&quot; into a 24/7 care operation,
                    and with that comes increased staffing requirements and more complex scheduling. Even with
                    a great team, you&apos;ll work holidays and deal with unpredictable situations. It&apos;s a
                    serious commitment.
                </p>
                <h2 className="text-2xl font-semibold mt-8 mb-3">
                    💰 Revenue Impact: Boarding Pays the Bills
                </h2>
                <p className="mb-4">
                    Despite the added work, boarding has the largest revenue impact by far. In my experience,
                    it&apos;s what allowed our business to grow beyond break-even and become truly profitable.
                </p>

                <p className="mb-4">
                    Let&apos;s break it down:
                </p>

                <ul className="list-disc pl-5 space-y-2 mb-4">
                    <li>
                        <strong>Daycare</strong> provides steady, recurring income. Most of our clients use 2&ndash;5 days per
                        week. That&apos;s great &mdash; it keeps us busy, creates consistent cash flow, and fosters
                        relationships.
                    </li>
                    <li>
                        <strong>Boarding</strong>, however, provides the biggest revenue surges. Especially around holidays,
                        long weekends, and school breaks &mdash; we often fill every kennel and generate two to three
                        times our regular weekly revenue in a single week.
                    </li>
                </ul>

                <p className="mb-4">
                    Boarding rates in many areas range from $45&ndash;$100 per night, while daycare might be $25&ndash;$45
                    per day. When you factor in longer stays, late pickups, and departure baths, it adds up fast.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-3">
                    ✂️ Why We Don&apos;t Offer Full Grooming (and What You Should Know)
                </h2>
                <p className="mb-4">
                    Grooming is the trickiest of the three services in my opinion &mdash; and the one most
                    commonly misunderstood.
                </p>

                <h3 className="text-xl font-semibold mt-6 mb-2">🚩 Grooming Requires the Right Person</h3>
                <p className="mb-4">
                    You cannot just &quot;add grooming&quot; and expect it to run itself. Successful grooming operations
                    require:
                </p>

                <ul className="list-disc pl-5 space-y-2 mb-4">
                    <li>A skilled, trained groomer (preferably certified)</li>
                    <li>Grooming-specific insurance</li>
                    <li>Special equipment and sanitization protocols</li>
                    <li>Careful, detailed customer service</li>
                </ul>

                <p className="mb-4">
                    Groomers tend to fall into two camps: those good enough to open their own shop, and those
                    who will leave for $1 more somewhere else. The turnover is high. Unless you have someone
                    stable, grooming can cause constant disruption.
                </p>

                <h3 className="text-xl font-semibold mt-6 mb-2">💸 Grooming Margins Are Low</h3>
                <p className="mb-4">
                    Most groomers are paid on commission, often 50% of each service. If a groom is $80, your
                    business may only keep $30&ndash;$35 after supplies and costs. That&apos;s a thin margin compared to
                    daycare or boarding, where per-staff-hour revenue can be significantly higher.
                </p>

                <h3 className="text-xl font-semibold mt-6 mb-2">⚠️ Risk and Liability Are Real</h3>
                <p className="mb-4">
                    Grooming comes with risk: accidental cuts, bites, sudden health issues, allergic reactions.
                    You need extra insurance and tighter protocols. I decided that for us, offering simple
                    baths and nail trims was safer and more sustainable.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-3">👥 Staffing Considerations</h2>
                <p className="mb-4">
                    Daycare and boarding staff are relatively easy to train. Grooming staff are a different
                    story. They need experience, certifications, and high attention to detail. And they can be
                    tough to keep long-term.
                </p>

                <p className="mb-4">
                    Unless you are a groomer yourself, adding grooming often means tying a portion of your
                    business to a single employee. If they leave, the revenue goes with them.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-3">
                    👨‍👩‍👧 Client Expectations Are Different for Each Service
                </h2>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                    <li>
                        <strong>Daycare</strong>: Safety, fun, reliability, and a tired dog at pickup.
                    </li>
                    <li>
                        <strong>Boarding</strong>: Communication, updates, structure, trust.
                    </li>
                    <li>
                        <strong>Grooming</strong>: Cleanliness, timing, accuracy, and aesthetics.
                    </li>
                </ul>

                <p className="mb-4">
                    You need to be prepared to manage those expectations in very different ways. In daycare
                    and boarding, clients are generally loyal and relationship-driven. In grooming, one bad
                    haircut can lose the customer forever.
                </p>
                <h2 className="text-2xl font-semibold mt-8 mb-3">
                    💡 So... Should You Offer Daycare Only?
                </h2>
                <p className="mb-4">
                    Daycare-only can absolutely work &mdash; and for the right person, it may be the perfect
                    fit. It offers predictable hours, easier staffing, and a cleaner operational model.
                </p>

                <p className="mb-4">
                    I see daycare-only as ideal for:
                </p>

                <ul className="list-disc pl-5 space-y-2 mb-4">
                    <li>Someone just getting started with limited space or capital</li>
                    <li>A semi-retired owner looking to scale back</li>
                    <li>Anyone who values evenings, weekends, and holidays off</li>
                </ul>

                <p className="mb-4">
                    However, for us, boarding has been absolutely essential to both our growth and our
                    profitability. It comes with more work, but it also opens the door to serving clients
                    year-round and capturing high-demand periods like holidays and summer travel.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-3">
                    🔁 If I Had to Start Over, I&apos;d Still Offer Both
                </h2>
                <p className="mb-4">
                    When I launched, I knew I wanted to offer both daycare and boarding. And if I had to do it
                    all over again, I wouldn&apos;t change a thing.
                </p>

                <p className="mb-4">
                    The two services complement each other perfectly. Daycare fills the weekdays, builds
                    relationships, and gives us consistent cash flow. Boarding drives the high-revenue periods
                    and lets us serve our clients fully when they travel. Together, they create a more stable,
                    sustainable, and resilient business.
                </p>

                <p className="mb-4">
                    Grooming, on the other hand, never made sense for us long term. I respect the facilities
                    that do it well, but unless you&apos;ve got the right person, the right structure, and the
                    right systems, it can introduce more instability than it&apos;s worth.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-3">📬 Final Thoughts</h2>
                <p className="mb-4">
                    There is no one-size-fits-all answer to choosing your pet business service mix. What
                    matters most is that your offerings align with your strengths, your lifestyle goals, and
                    your ability to deliver consistent quality.
                </p>

                <p className="mb-4">
                    For me, the combination of daycare and boarding is what built our foundation. And I&apos;m
                    confident it will continue to support our future &mdash; without adding the complexities of
                    grooming to the equation.
                </p>

                <p className="mb-4 italic text-gray-600 text-sm">
                    Sources: IBISWorld Grooming Industry Reports, Dogtopia Franchise Insights, Pet Boarding
                    &amp; Daycare Magazine, DoggieDashboard Grooming Guides.
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
