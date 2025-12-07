'use client';

import Head from 'next/head';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function DoDogAntiAgeingDrugsReallyWork() {
  const locale = useLocale();

  const title =
    'Do Anti-Ageing Drugs for Dogs Really Work? A Critical Review of the Evidence, Trials, and What Is Still Unknown';
  const date = 'December 6, 2025';
  const description =
    'A critical examination of canine anti-ageing drugs, reviewing FDA standards, early trial data, metabolic markers, safety questions, placebo effects, breed-specific gaps, and the difference between scientific optimism and proven outcomes.';
  const slug = 'do-dog-anti-ageing-drugs-really-work';

  const canonicalUrl = `https://www.petuniapets.com/${locale}/blog/${slug}`;

  const categories = ['owner', 'veterinary'] as const;

  const categoryLabels: Record<string, string> = {
    owner: 'Pet Owners',
    veterinary: 'Veterinary Clinics',
    boarding: 'Boarding',
    daycare: 'Daycare',
    rescue: 'Rescues',
    walker: 'Dog Walkers',
    sitter: 'Pet Sitters',
    breeder: 'Breeders',
    breed_specific_guides: 'Breed Specific Guides'
  };

  return (
    <>
      <Head>
        <title>{title} – Petunia Blog</title>
        <meta name="description" content={description} />
        <meta name="robots" content="all" />
        <link rel="canonical" href={canonicalUrl} />
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
              url: canonicalUrl,
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

      <main className="max-w-3xl mx-auto px-4 py-10">

        {/* Posted date */}
        <p className="text-sm text-gray-600 mb-2">Posted on {date}</p>

        {/* Title */}
        <h1 className="text-3xl font-bold mb-4">{title}</h1>

        {/* Categories */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => (
            <span
              key={cat}
              className="text-xs bg-[#e4dbcb] text-[#2c4a30] px-3 py-1 rounded-full border border-[#d9cfc2]"
            >
              {categoryLabels[cat]}
            </span>
          ))}
        </div>

        {/* TOC */}
        <nav className="mb-8 text-sm">
          <ul className="flex flex-wrap gap-4">
            <li><a href="#tldr" className="underline">TL;DR</a></li>
            <li><a href="#evidence" className="underline">Current Evidence</a></li>
            <li><a href="#fda" className="underline">FDA: Reasonable Expectation of Effectiveness</a></li>
            <li><a href="#unknowns" className="underline">What Isn’t Proven Yet</a></li>
            <li><a href="#trials" className="underline">Early Trial Data</a></li>
            <li><a href="#gaps" className="underline">What Has Not Been Tested</a></li>
            <li><a href="#placebo" className="underline">Placebo & Owner-Reported Outcomes</a></li>
            <li><a href="#optimism" className="underline">Optimism vs Public Interpretation</a></li>
            <li><a href="#conclusion" className="underline">Conclusion</a></li>
            <li><a href="#sources" className="underline">Sources</a></li>
          </ul>
        </nav>

        {/* TLDR */}
        <section id="tldr" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Short Answer (TL;DR)</h2>
          <p className="mb-4">
            Anti-ageing drugs for dogs show early promise in improving metabolic markers and inflammatory profiles, but no treatment
            has yet been proven to extend actual lifespan. The FDA’s acknowledgement of a &quot;reasonable expectation of effectiveness&quot;
            means preliminary data looks biologically plausible—not that the drug works. Many unanswered questions remain, especially
            regarding long-term safety, breed-specific effects, and the gap between owner-perceived improvements and measurable
            physiological changes.
          </p>
        </section>

        {/* Section 1 — Evidence */}
        <section id="evidence" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">What Evidence Exists Today?</h2>
          <p className="mb-4">
            Most of the current evidence around canine anti-ageing drugs comes from:
          </p>

          <ul className="list-disc pl-5 mb-4">
            <li>FDA communications—for drugs like LOY-002.</li>
            <li>Press releases from biotech companies.</li>
            <li>Limited early-stage metabolic or biomarker studies.</li>
            <li>Published ageing research in broader mammalian models.</li>
          </ul>

          <p className="mb-4">
            Notably, the volume of peer-reviewed, openly published data is still small. Much of what the public knows comes from
            company statements that—while often accurate—are not substitutes for full scientific publications.
          </p>
        </section>

        {/* Section 2 — FDA Meaning */}
        <section id="fda" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">What Does &quot;Reasonable Expectation of Effectiveness&quot; Actually Mean?</h2>
          <p className="mb-4">
            This regulatory phrase is frequently misunderstood. The FDA uses it to allow continued development of veterinary drugs
            when initial data suggests a plausible mechanism of action and early outcomes that trend in the right direction.
          </p>

          <ul className="list-disc pl-5 mb-4">
            <li>It does <strong>not</strong> mean the drug is proven effective.</li>
            <li>It does <strong>not</strong> guarantee full approval.</li>
            <li>It simply means the data justifies continued research and possible conditional approval.</li>
          </ul>

          <p className="mb-4">
            The FDA rarely uses this designation—its use for LOY-002 signals serious scientific potential, but still early science.
          </p>
        </section>

        {/* Section 3 — Unknowns */}
        <section id="unknowns" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">What Isn’t Proven Yet?</h2>
          <p className="mb-4">
            Despite enthusiasm, several critical outcomes have not been demonstrated:
          </p>

          <ul className="list-disc pl-5 mb-4">
            <li>No canine anti-ageing drug has been proven to extend actual lifespan.</li>
            <li>Healthspan markers may improve, but longevity impact is unknown.</li>
            <li>Long-term safety data (multi-year, across breeds) remains incomplete.</li>
            <li>Effectiveness across different genetic backgrounds is untested.</li>
          </ul>

          <p className="mb-4">
            Most published results focus on metabolic changes—not survival curves.
          </p>
        </section>

        {/* Section 4 — Trials */}
        <section id="trials" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Early Trial Data: What Has Been Measured?</h2>
          <p className="mb-4">
            Companies like Loyal have not yet released raw datasets but have shared categories of early findings through presentations
            and FDA submissions. Reported improvements include:
          </p>

          <ul className="list-disc pl-5 mb-4">
            <li>Metabolic markers such as insulin sensitivity and triglycerides.</li>
            <li>Inflammatory cytokine profiles showing downward trends.</li>
            <li>Mobility metrics that appear modestly improved in older cohorts.</li>
            <li>Body composition shifts reflecting better metabolic balance.</li>
          </ul>

          <p className="mb-4">
            These are biologically meaningful—but none directly prove extended lifespan.
          </p>
        </section>

        {/* Section 5 — Gaps */}
        <section id="gaps" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">What Has Not Been Tested Yet?</h2>
          <p className="mb-4">
            Several major scientific questions remain unanswered.
          </p>

          <ul className="list-disc pl-5 mb-4">
            <li><strong>Breed-specific responses</strong>: large vs small breeds, genetic diversity, predisposed conditions.</li>
            <li><strong>Very long-term safety</strong>: multi-year cycles on metabolic organs.</li>
            <li><strong>Cognitive outcomes</strong>: impacts on pacing, disorientation, or sleep-wake cycles.</li>
            <li><strong>Survival data</strong>: the gold-standard endpoint is years away.</li>
          </ul>

          <p className="mb-4">
            Longevity science requires patience—true lifespan studies take time by definition.
          </p>
        </section>

        {/* Section 6 — Placebo */}
        <section id="placebo" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">The Role of Placebo Effects in Owner-Reported Outcomes</h2>
          <p className="mb-4">
            Veterinary clinical trials face a major challenge: owners often unconsciously interpret their dog&apos;s behavior through
            emotional filters. This amplifies placebo effects.
          </p>

          <ul className="list-disc pl-5 mb-4">
            <li>Owners may perceive increased energy due to hope—not actual physiological change.</li>
            <li>Subtle changes in routine may boost behavior independent of the drug.</li>
            <li>Trials rely increasingly on objective biomarkers to counter bias.</li>
          </ul>

          <p className="mb-4">
            Understanding placebo impact is essential for proper trial design.
          </p>
        </section>

        {/* Section 7 — Optimism vs Public Interpretation */}
        <section id="optimism" className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">The Gap Between Scientific Optimism and Public Interpretation</h2>
          <p className="mb-4">
            Scientists speak in probabilities, not promises. Public media often reinterprets cautious scientific statements as
            guarantees—leading to overconfidence in unproven treatments.
          </p>

          <ul className="list-disc pl-5 mb-4">
            <li>Press releases highlight best-case scenarios.</li>
            <li>Owners may assume lifespan extension is imminent.</li>
            <li>Scientific nuance is often lost in headlines.</li>
          </ul>

          <p className="mb-4">
            Responsible companies acknowledge uncertainty; responsible consumers seek peer-reviewed evidence.
          </p>
        </section>

        {/* Internal Backlinks */}
        <section className="mb-10">
          <p className="mb-4">For more insights into canine longevity science, explore:</p>
          <ul className="list-disc pl-5 mb-4">
            <li>
              <Link href={`/${locale}/blog/companies-behind-canine-longevity`} className="underline">
                The Companies Behind Canine Longevity
              </Link>
            </li>
            <li>
              <Link href={`/${locale}/blog/future-of-dog-longevity-medicine`} className="underline">
                The Future of Veterinary Longevity Medicine
              </Link>
            </li>
          </ul>
        </section>

        {/* Conclusion */}
        <section id="conclusion" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Conclusion</h2>
          <p className="mb-4">
            Anti-ageing drugs for dogs may soon shape the future of veterinary medicine, but the science is still early. While
            metabolic improvements and positive biomarker trends are encouraging, no treatment has yet demonstrated actual lifespan
            extension. Owners should remain optimistic—but grounded—in scientific reality. Evidence, not emotion, must guide the next
            decade of longevity care.
          </p>
        </section>

        {/* Sources */}
        <section id="sources" className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">📚 Sources (Peer-Reviewed & Regulatory)</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            <li>FDA Center for Veterinary Medicine. Veterinary Innovation Program communications (2024–2025).</li>
            <li>Loyal. LOY-002 regulatory submission summaries, 2024–2025.</li>
            <li>Dog Ageing Project. Metabolic and biomarker trends in ageing dogs. Nature (2023–2024).</li>
            <li>Cell Metabolism. Inflammation and metabolic ageing pathways in mammals.</li>
            <li>Veterinary Clinical Trials: Placebo considerations. J Vet Intern Med.</li>
            <li>American Veterinary Medical Association. Longevity research position summaries.</li>
          </ul>

          <p className="text-xs text-gray-600 mt-4">
            Educational content only — always consult your veterinarian for diagnosis and treatment guidance.
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
