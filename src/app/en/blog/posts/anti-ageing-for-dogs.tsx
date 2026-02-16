'use client';

import Head from 'next/head';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function AntiAgeingForDogs() {
  const locale = useLocale();

  const title =
    'Anti Ageing for Dogs in 2026: The Science, The New Dog Longevity Drug, FDA Milestones, and What Owners Should Know';
  const date = 'November 19, 2025';
  const categories = ['owner'] as const;

  const categoryLabels: Record<string, string> = {
    owner: 'Pet Owners',
    boarding: 'Boarding',
    daycare: 'Daycare',
    rescue: 'Rescues',
    vet: 'Veterinary Clinics',
    sitter: 'Pet Sitters',
    walker: 'Dog Walkers',
    breeder: 'Breeders',
    breed_specific_guides: 'Breed Specific Guides'
  };

  const description =
    'Anti ageing for dogs: A science-backed look at the emerging anti-aging drug for dogs, recent FDA milestones, what early trials show, what it means for lifespan and healthspan, and how owners can prepare for the future of canine longevity.';

  return (
    <>
      <Head>
        <title>{title} – Petunia Blog</title>
        <meta name="description" content={description} />
        <meta name="robots" content="all" />

        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />

        {/* JSON-LD Structured Data */}
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
              author: { '@type': 'Organization', name: 'Petunia' },
              publisher: {
                '@type': 'Organization',
                name: 'Petunia',
                logo: {
                  '@type': 'ImageObject',
                  url: 'https://www.petuniapets.com/logo.png'
                }
              }
            })
          }}
        />
      </Head>

      <main className="max-w-3xl mx-auto px-4 py-10 text-[#2c4a30]">
        {/* Meta */}
        <p className="text-sm text-gray-500 mb-2">Posted on {date}</p>
        <h1 className="text-3xl font-bold mb-4">{title}</h1>

        {/* Category Pills */}
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

        {/* Anchor Navigation */}
        <nav className="mb-8 text-sm">
          <ul className="flex flex-wrap gap-3">
            <li><a href="#tldr" className="underline hover:opacity-80">TL;DR</a></li>
            <li><a href="#overview" className="underline hover:opacity-80">What Is Anti-Ageing for Dogs?</a></li>
            <li><a href="#drug" className="underline hover:opacity-80">The New Longevity Drug</a></li>
            <li><a href="#fda" className="underline hover:opacity-80">FDA Milestones</a></li>
            <li><a href="#science" className="underline hover:opacity-80">What Early Studies Suggest</a></li>
            <li><a href="#care" className="underline hover:opacity-80">Current Ways to Support Healthy Ageing</a></li>
            <li><a href="#checklist" className="underline hover:opacity-80">Senior Dog Checklist</a></li>
            <li><a href="#faq" className="underline hover:opacity-80">FAQ</a></li>
            <li><a href="#sources" className="underline hover:opacity-80">📚 Sources</a></li>
          </ul>
        </nav>

        {/* TLDR */}
        <section id="tldr" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Short Answer (TL;DR)</h2>
          <p className="mb-4">
            The search for <strong>&ldquo;anti ageing for dogs&rdquo;</strong> has exploded due to a new longevity drug nearing approval. 
            In February 2025, the FDA accepted a major submission for a medication designed to slow canine ageing by targeting 
            cellular pathways tied to inflammation, metabolism, and immune decline. If safety and efficacy continue to hold, 
            the pill could become available to veterinarians within the next one to two years.
          </p>

          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            For deeper reading, explore:<br />
            <a
              href="https://www.petuniapets.com/en/blog/dog-anti-aging-pill-fda-milestone"
              className="underline"
              target="_blank"
            >
              FDA Anti-Aging Pill Milestone
            </a><br />
            <a
              href="https://www.petuniapets.com/en/blog/senior-dog-health-checklist-2025"
              className="underline"
              target="_blank"
            >
              Senior Dog Health Checklist (2025)
            </a>
          </div>
        </section>

        {/* What is Anti-Ageing */}
        <section id="overview" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">What Does &ldquo;Anti Ageing for Dogs&rdquo; Actually Mean?</h2>
          <p className="mb-3">
            In veterinary medicine, the term does not mean immortality or reversing age.
            Instead, it refers to improving <strong>healthspan</strong> &mdash; the years a dog spends healthy, mobile, and free from chronic disease.
          </p>
          <p>
            Anti-ageing therapies target inflammation, cellular damage, metabolic decline, and immune function. 
            Until now, lifestyle has been the only reliable &ldquo;anti-ageing&rdquo; tool. A drug that reliably modifies ageing pathways would be 
            historic in veterinary medicine.
          </p>
        </section>

        {/* The New Drug */}
        <section id="drug" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">The New Dog Longevity Drug: What We Know So Far</h2>
          <p className="mb-3">
            In early 2025, biotech company Loyal announced that its canine anti-ageing drug 
            reached a major regulatory milestone with the U.S. Food and Drug Administration. 
            The medication is designed to delay age-related decline by modifying metabolic and cellular pathways associated 
            with inflammation and immune dysfunction.
          </p>
          <p className="mb-3">
            Press reports describe it as the first drug to seek FDA approval under a longevity-specific pathway for animals.
          </p>
        </section>

        {/* FDA Milestone */}
        <section id="fda" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">FDA Progress: Why February 2025 Was a Turning Point</h2>
          <p className="mb-3">
            In February 2025, the FDA accepted key data supporting the drug&apos;s reasonable expectation of effectiveness,
            moving it closer to conditional approval. This acceptance does not guarantee full approval, but it is the strongest 
            regulatory signal yet that a lifespan-extending therapy for dogs may become a veterinary reality.
          </p>
          <p>
            For a deeper breakdown of this milestone, visit:<br />
            <a
              href="https://www.petuniapets.com/en/blog/dog-anti-aging-pill-fda-milestone"
              className="underline"
              target="_blank"
            >
              Petunia&apos;s FDA Milestone Summary
            </a>
          </p>
        </section>

        {/* Science */}
        <section id="science" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">What Early Studies Suggest About Longevity Effects</h2>
          <p className="mb-3">
            While full peer-reviewed data have not yet been released, publicly shared summaries from Loyal and reporting from 
            mainstream outlets such as <em>The Washington Post</em> indicate:
          </p>
          <ul className="list-disc pl-5 space-y-2 mb-3">
            <li>Dogs on the drug showed trends toward improved metabolic markers.</li>
            <li>Some study dogs demonstrated delayed onset of mobility decline.</li>
            <li>Safety data so far appear promising, with no major red flags reported publicly.</li>
            <li>Long-term studies are ongoing to determine whether lifespan extension is measurable.</li>
          </ul>
          <p>
            These findings align with ageing science in mammals: when calorie signaling, inflammation, and cell-repair pathways 
            improve, animals often age more slowly.
          </p>
        </section>

        {/* Current Care */}
        <section id="care" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">What You Can Do Now: Proven Ways to Support Healthy Ageing</h2>
          <p className="mb-3">
            Even without a pill, dog owners can meaningfully improve healthspan. Evidence from orthopedic, nutrition, and geriatric 
            research shows that lifestyle is still the largest contributor to how dogs age.
          </p>

          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Maintain a lean body condition.</li>
            <li>Use daily, structured exercise &mdash; short intervals, sniff walks, and strength work.</li>
            <li>Prioritize dental care, including brushing and VOHC-approved chews.</li>
            <li>Schedule senior bloodwork earlier than most people expect (age 7+).</li>
            <li>Support joints through traction mats, controlled movement, and weight control.</li>
          </ul>
        </section>

        {/* Senior Checklist */}
        <section id="checklist" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Senior Dog Checklist</h2>
          <p className="mb-3">
            For a complete guide to early detection, mobility protection, appetite tracking, and cognitive support, see:
          </p>
          <p>
            <a
              href="https://www.petuniapets.com/en/blog/senior-dog-health-checklist-2025"
              className="underline"
              target="_blank"
            >
              Senior Dog Health Checklist (2025)
            </a>
          </p>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">Frequently Asked Questions</h2>

          <p className="mb-3">
            <strong>When will the anti-ageing pill for dogs be available?</strong><br />
            If regulatory progress continues, some veterinarians may access it under conditional approval within 12&#8211;24 months.
          </p>

          <p className="mb-3">
            <strong>Will the drug make dogs live longer?</strong><br />
            Early evidence suggests improved metabolic and inflammatory markers, but confirmed lifespan extension requires more data.
          </p>

          <p className="mb-3">
            <strong>Is anti-ageing safe?</strong><br />
            Safety data released publicly appear promising, but long-term results are pending full FDA review.
          </p>

          <p className="mb-3">
            <strong>Should I wait for the drug?</strong><br />
            No. The most proven ways to extend healthspan remain weight control, dental care, exercise, pain management, and senior screening.
          </p>
        </section>

        {/* Sources */}
        <section id="sources" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">📚 Sources (Selected)</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            <li>
              The Washington Post (2025). &ldquo;Antiaging pill for dogs clears key FDA hurdle.&rdquo;
            </li>
            <li>
              The Times UK (2025). &ldquo;Pill to make dogs live longer may be here in a year.&rdquo;
            </li>
            <li>
              Loyal (Biotech company). Public regulatory communications on FDA progress (2024&#8211;2025).
            </li>
            <li>
              Morris Animal Foundation. Canine ageing and longevity studies.
            </li>
            <li>
              AAHA Senior Pet Guidelines (2023).
            </li>
          </ul>

          <p className="text-xs text-gray-600 mt-4">
            Educational content only — always follow your veterinarian&apos;s guidance for diagnosis and treatment.
          </p>
        </section>

        {/* Back to Blog */}
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
