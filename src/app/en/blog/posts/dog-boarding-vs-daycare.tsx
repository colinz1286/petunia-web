'use client';

import Head from 'next/head';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function DogBoardingVsDaycare() {
    const locale = useLocale();

    const title =
        'Dog Boarding vs Daycare: How to Choose the Right Option for Your Dog in 2026';
    const date = 'November 19, 2025';
    const categories = ['owner', 'breed_specific_guides'] as const;

    const categoryLabels: Record<string, string> = {
        owner: 'Pet Owners',
        boarding: 'Boarding',
        daycare: 'Daycare',
        rescue: 'Rescues',
        vet: 'Veterinary Clinics',
        sitter: 'Pet Sitters',
        walker: 'Dog Walkers',
        breeder: 'Breeders',
        breed_specific_guides: 'Breed Specific Guides',
    };

    const description =
        'Dog boarding vs daycare explained: what each service includes, how to evaluate facility fit, costs, risks, benefits, and how to pick what’s right for your dog with confidence.';

    const canonicalUrl = `https://www.petuniapets.com/${locale}/blog/dog-boarding-vs-daycare`;

    return (
        <>
            <Head>
                <title>{title} – Petunia Blog</title>
                <meta name="description" content={description} />
                <meta name="robots" content="all" />
                <link rel="canonical" href={canonicalUrl} />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />

                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            '@context': 'https://schema.org',
                            '@type': 'BlogPosting',
                            headline: title,
                            description,
                            datePublished: date,
                            dateModified: date,
                            url: canonicalUrl,
                            author: { '@type': 'Organization', name: 'Petunia' },
                            publisher: {
                                '@type': 'Organization',
                                name: 'Petunia',
                                logo: {
                                    '@type': 'ImageObject',
                                    url: 'https://www.petuniapets.com/logo.png',
                                },
                            },
                        }),
                    }}
                />
            </Head>

            <main className="max-w-3xl mx-auto px-4 py-10 text-[#2c4a30]">
                <p className="text-sm text-gray-500 mb-2">Posted on {date}</p>
                <h1 className="text-3xl font-bold mb-4">{title}</h1>

                <div className="flex flex-wrap gap-2 mb-6">
                    {categories.map((cat) => (
                        <span
                            key={cat}
                            className="text-xs bg-[#e4dbcb] text-[#2c4a30] px-3 py-1 rounded-full border border-[#d9cfc2]"
                        >
                            {categoryLabels[cat] ?? cat}
                        </span>
                    ))}
                </div>

                <nav className="mb-8 text-sm">
                    <ul className="flex flex-wrap gap-3">
                        <li><a href="#tldr" className="underline hover:opacity-80">TL;DR</a></li>
                        <li><a href="#definitions" className="underline hover:opacity-80">Definitions</a></li>
                        <li><a href="#compare" className="underline hover:opacity-80">Boarding vs Daycare: Side by Side</a></li>
                        <li><a href="#factors" className="underline hover:opacity-80">Key Factors to Decide</a></li>
                        <li><a href="#questions" className="underline hover:opacity-80">Questions to Ask Facilities</a></li>
                        <li><a href="#cost" className="underline hover:opacity-80">Cost Differences</a></li>
                        <li><a href="#faq" className="underline hover:opacity-80">FAQ</a></li>
                        <li><a href="#sources" className="underline hover:opacity-80">📚 Sources</a></li>
                    </ul>
                </nav>

                <section id="tldr" className="mb-10">
                    <h2 className="text-2xl font-semibold mb-3">Short Answer (TL;DR)</h2>
                    <p className="mb-4">
                        If you need unsupervised overnight accommodation, dog boarding is the clear choice. If your dog thrives on daytime activity, socialization, and returns home at night, daycare offers big benefits. Evaluate facility staff-to-dog ratio, staff training, health protocols, and how your dog actually behaves away from home.
                    </p>
                    <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
                        Explore our deeper guides:<br />
                        <a href="https://www.petuniapets.com/en/blog/boarding-vs-daycare-2025" className="underline" target="_blank">
                            Boarding vs Daycare: 2025 Edition
                        </a><br />
                        <a href="https://www.petuniapets.com/en/blog/dog-boarding-preparation-guide" className="underline" target="_blank">
                            Dog Boarding Preparation Guide
                        </a><br />
                        <a href="https://www.petuniapets.com/en/blog/choose-dog-boarding-facility-2025" className="underline" target="_blank">
                            Choosing a Dog Boarding Facility: 2025 Checklist
                        </a>
                    </div>
                </section>

                <section id="definitions" className="mb-10">
                    <h2 className="text-2xl font-semibold mb-3">Definitions: What We Mean by Boarding and Daycare</h2>

                    <p className="mb-3">
                        <span className="font-semibold">Dog boarding</span> refers to services where dogs stay overnight
                        (or longer) at a facility while the owner is away. These services may include kennels, suites,
                        supervised 24/7 care, structured daytime activity, and quiet rest periods overnight.
                    </p>

                    <p>
                        <span className="font-semibold">Dog daycare</span> refers to daytime-only supervision where dogs
                        spend part of the day at a facility and return home in the evening. Daycare emphasizes
                        socialization, safe group play, enrichment, and monitoring — without overnight accommodation.
                    </p>
                </section>

                <section id="compare" className="mb-10">
                    <h2 className="text-2xl font-semibold mb-3">Boarding vs Daycare: Side by Side Comparison</h2>
                    <table className="w-full text-left mb-6">
                        <thead>
                            <tr>
                                <th className="pb-2">Feature</th>
                                <th className="pb-2">Boarding</th>
                                <th className="pb-2">Daycare</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="pt-2">Overnight Stay</td>
                                <td className="pt-2">Yes (24+ hrs)</td>
                                <td className="pt-2">No (day use only)</td>
                            </tr>
                            <tr>
                                <td className="pt-2">Ideal For</td>
                                <td className="pt-2">Travel, multi-day absence, vacations</td>
                                <td className="pt-2">Regular daytime supervision, active dogs</td>
                            </tr>
                            <tr>
                                <td className="pt-2">Cost Tier</td>
                                <td className="pt-2">Higher (over‐night care + staffing)</td>
                                <td className="pt-2">Moderate (day rate)</td>
                            </tr>
                            <tr>
                                <td className="pt-2">Socialization Focus</td>
                                <td className="pt-2">Moderate to high (group play + rest)</td>
                                <td className="pt-2">High (activity-focused groups)</td>
                            </tr>
                            <tr>
                                <td className="pt-2">Structured Routine</td>
                                <td className="pt-2">Yes (day &amp; night shifts)</td>
                                <td className="pt-2">Yes (day schedule only)</td>
                            </tr>
                        </tbody>
                    </table>
                    <p className="mb-3">
                        Use the comparison to match the service to your dog’s needs rather than simply cost or convenience.
                    </p>
                </section>

                <section id="factors" className="mb-10">
                    <h2 className="text-2xl font-semibold mb-3">Key Factors to Decide Between Boarding and Daycare</h2>
                    <ul className="list-disc pl-5 space-y-2 mb-3">
                        <li><strong>Dog’s routine &amp; temperament:</strong> Easy-going dogs who nap well may do fine in daycare; separation‐anxious dogs may need boarding or specialized care.</li>
                        <li><strong>Duration of care:</strong> Overnight or multi-day absence leans toward boarding; regular day supervision may lean toward daycare.</li>
                        <li><strong>Facility staff ratio &amp; training:</strong> Ask about caregiver:dog ratio, training credentials, and how the facility handles rest and downtime.</li>
                        <li><strong>Health protocols &amp; emergency access:</strong> Overnight care demands access to nighttime veterinary backup; daycare must still manage injuries, overheating and wellness checks.</li>
                        <li><strong>Cost and transparency:</strong> Overnight boarding often includes extra fees (nighttime staffing, extended wake windows); day-rates differ significantly.</li>
                    </ul>
                </section>

                <section id="questions" className="mb-10">
                    <h2 className="text-2xl font-semibold mb-3">Questions to Ask Any Facility Before Booking</h2>
                    <ul className="list-disc pl-5 space-y-2 mb-3">
                        <li>How many dogs are supervised per caregiver during day hours? And overnight?</li>
                        <li>What is the fallback plan if a dog becomes ill or injures themselves overnight or on weekends?</li>
                        <li>How are rest periods handled? Are active groups separated from quiet/nap groups?</li>
                        <li>Is there secure separation of dogs with aggressive tendencies or medical needs?</li>
                        <li>What are the cancellation and sickness policies—especially for boarding stays longer than 24 hours?</li>
                    </ul>
                </section>

                <section id="cost" className="mb-10">
                    <h2 className="text-2xl font-semibold mb-3">Cost Differences: What to Expect</h2>
                    <p className="mb-3">
                        Daycare typically runs <strong>30-60%</strong> of the cost of overnight boarding, since it excludes overnight care, bed/accommodation fees, and late-night staff. Always ask for a full breakdown of what is included.
                    </p>
                </section>

                <section id="faq" className="mb-16">
                    <h2 className="text-2xl font-semibold mb-3">Frequently Asked Questions</h2>

                    <p className="mb-3">
                        <strong>Can my dog do both boarding and daycare?</strong><br />
                        Yes—some facilities offer hybrid models. Use daycare routines to acclimate your dog to the site before a boarding stay.
                    </p>

                    <p className="mb-3">
                        <strong>Which is safer for my dog?</strong><br />
                        Both are safe when the facility follows licensed standards, low caregiver-dog ratio, strong health protocols and emergency access. Evaluate each site individually.
                    </p>

                    <p className="mb-3">
                        <strong>Does my dog need to be in daycare before boarding?</strong><br />
                        Not strictly, but doing a few day stays helps assess temperament, socialization and adaptation so your dog will be more comfortable overnight.
                    </p>
                </section>

                <section id="sources" className="mb-16">
                    <h2 className="text-2xl font-semibold mb-3">📚 Sources (Selected)</h2>
                    <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
                        <li>Petunia Blog: Boarding vs Daycare (2025 Edition).</li>
                        <li>Petunia Blog: Dog Boarding Preparation Guide.</li>
                        <li>Petunia Blog: How to Choose a Dog Boarding Facility (2025).</li>
                        <li>Ashley, K. &amp; White, S. (2024). “Daycare vs Boarding for Dogs: What the Research Says.” Journal of Canine Care.</li>
                        <li>National Boarding &amp; Pet Services Association (NBPSA) Care Standards (2023).</li>
                    </ul>
                    <p className="text-xs text-gray-600 mt-4">
                        Educational only — consult your professional boarding facility and veterinarian for decisions about your dog.
                    </p>
                </section>

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
