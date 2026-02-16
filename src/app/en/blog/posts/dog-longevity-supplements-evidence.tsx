'use client';

import Head from 'next/head';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function DogLongevitySupplementsEvidence() {
  const locale = useLocale();

  const title =
    'Dog Longevity Supplements: What Works, What Doesn’t, and What Owners Should Avoid';
  const date = 'November 29, 2025';
  const description =
    'A scientific guide to dog longevity supplements, including evidence-supported ingredients, promising emerging compounds, ineffective products, safety considerations, and how to work with your veterinarian to build a smart supplementation plan.';

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
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />

        {/* Structured Data */}
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

      <main className="max-w-3xl mx-auto px-4 py-10">
        {/* Date */}
        <p className="text-sm text-gray-600 mb-2">Posted on {date}</p>

        {/* Title */}
        <h1 className="text-3xl font-bold mb-4">{title}</h1>

        {/* Category Pills */}
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

        {/* Table of Contents */}
        <nav className="mb-8 text-sm">
          <ul className="flex flex-wrap gap-4">
            <li><a href="#tldr" className="underline hover:opacity-80">TL;DR</a></li>
            <li><a href="#proven" className="underline hover:opacity-80">Supplements With Real Evidence</a></li>
            <li><a href="#emerging" className="underline hover:opacity-80">Promising Emerging Supplements</a></li>
            <li><a href="#ineffective" className="underline hover:opacity-80">Supplements That Don’t Work</a></li>
            <li><a href="#risks" className="underline hover:opacity-80">Risks & Over-Supplementation</a></li>
            <li><a href="#guidance" className="underline hover:opacity-80">How to Use Supplements Safely</a></li>
            <li><a href="#conclusion" className="underline hover:opacity-80">Conclusion</a></li>
            <li><a href="#sources" className="underline hover:opacity-80">Sources</a></li>
          </ul>
        </nav>

        {/* TL;DR */}
        <section id="tldr" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Short Answer (TL;DR)</h2>
          <p className="mb-4">
            Only a handful of supplements have strong evidence for supporting canine longevity, including omega-3 fatty acids,
            glucosamine, chondroitin, SAMe, and specific antioxidant compounds. Many products marketed for longevity do not work at
            all, and some can even cause harm due to unregulated manufacturing or excessive dosing. The best longevity supplement
            plan is veterinarian-guided, evidence-based, and tailored to the individual dog&apos;s health status.
          </p>
        </section>

        {/* Section 1 — Proven Supplements */}
        <section id="proven" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Supplements With Real Evidence</h2>
          <p className="mb-4">
            These supplements have been supported by peer-reviewed veterinary studies and are routinely recommended for ageing and
            senior dogs.
          </p>

          <ul className="list-disc pl-5 mb-4">
            <li><strong>Omega-3 fatty acids (EPA & DHA)</strong>: reduce inflammation, support cognition, and protect joints.</li>
            <li><strong>Glucosamine & chondroitin</strong>: improve joint lubrication and help slow cartilage breakdown.</li>
            <li><strong>SAMe (S-adenosylmethionine)</strong>: supports liver function and cognitive health.</li>
            <li><strong>Antioxidants</strong>: compounds like vitamin E and polyphenols reduce oxidative stress.</li>
            <li><strong>Green-lipped mussel</strong>: evidence shows benefits for pain reduction and mobility.</li>
          </ul>

          <p className="mb-4">
            These ingredients are foundational in many veterinary longevity programs due to consistent research outcomes.
          </p>
        </section>

        {/* Section 2 — Emerging Supplements */}
        <section id="emerging" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Supplements With Emerging but Promising Data</h2>
          <p className="mb-4">
            Several supplements show early potential for supporting metabolic health, joint integrity, or neuroprotection, but require
            more robust clinical trials before becoming standard recommendations.
          </p>

          <ul className="list-disc pl-5 mb-4">
            <li><strong>Polyphenols</strong>: antioxidant compounds that may support mitochondrial efficiency.</li>
            <li><strong>L-carnitine</strong>: beneficial for fat metabolism and senior-dog cardiac health.</li>
            <li><strong>Postbiotics</strong>: metabolically active microbial byproducts supporting immune stability.</li>
            <li><strong>Curcumin</strong>: anti-inflammatory potential, though bioavailability varies.</li>
            <li><strong>Hyaluronic acid</strong>: emerging for joint lubrication and cartilage preservation.</li>
          </ul>

          <p className="mb-4">
            When used under veterinary guidance, these supplements may complement more established longevity strategies.
          </p>
        </section>

        {/* Section 3 — Ineffective Supplements */}
        <section id="ineffective" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Supplements That Don’t Work (Marketing vs. Reality)</h2>
          <p className="mb-4">
            The pet supplement market is large, unregulated, and filled with products lacking scientific support. Many supplements
            marketed for longevity show no measurable effect.
          </p>

          <ul className="list-disc pl-5 mb-4">
            <li><strong>Miracle anti-ageing blends</strong>: no peer-reviewed evidence.</li>
            <li><strong>Low-dose herbal mixtures</strong>: often too weak to create meaningful effects.</li>
            <li><strong>Collagen chews</strong>: limited value for joint health compared to proven compounds.</li>
            <li><strong>Unregulated CBD products</strong>: inconsistent dosage, unclear evidence for ageing benefits.</li>
            <li><strong>Proprietary powders without disclosed dosing</strong>: impossible to evaluate efficacy.</li>
          </ul>

          <p className="mb-4">
            These products may waste money or delay real treatment models that actually improve healthspan.
          </p>
        </section>

        {/* Section 4 — Risks */}
        <section id="risks" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Risks of Over-Supplementation and Unregulated Products</h2>
          <p className="mb-4">
            Supplements are not inherently harmless. Because the industry is not tightly regulated, product quality varies widely and
            contamination is not uncommon.
          </p>

          <ul className="list-disc pl-5 mb-4">
            <li><strong>Toxicity risk</strong>: excess vitamin D, certain herbs, or minerals can be dangerous.</li>
            <li><strong>Dosing variability</strong>: many products are not tested for purity or potency.</li>
            <li><strong>Drug interactions</strong>: supplements may alter medication metabolism.</li>
            <li><strong>Organ stress</strong>: unnecessary supplements impose metabolic burden on liver and kidneys.</li>
          </ul>

          <p className="mb-4">
            This is why longevity supplementation should always be supervised by a veterinarian.
          </p>
        </section>

        {/* Section 5 — Guidance */}
        <section id="guidance" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">How to Safely Integrate Supplements With Veterinary Guidance</h2>
          <p className="mb-4">
            A targeted supplement plan works best when it matches the dog&apos;s health profile, age, mobility level, and metabolic
            needs. The goal is precision—not quantity.
          </p>

          <ul className="list-disc pl-5 mb-4">
            <li>Prioritize supplements with strong evidence and transparent dosing.</li>
            <li>Have a veterinarian evaluate compatibility with medications.</li>
            <li>Introduce supplements one at a time to monitor response.</li>
            <li>Use clinical rechecks to adjust dosage or discontinue ineffective products.</li>
            <li>Support supplements with foundational care: weight control, exercise, and metabolic stability.</li>
          </ul>

          <p className="mb-4">
            Smart supplementation enhances longevity; unfocused supplementation rarely helps and sometimes harms.
          </p>
        </section>

        {/* Backlinks */}
        <section className="mb-8">
          <p className="mb-4">For more longevity science, explore:</p>
          <ul className="list-disc pl-5 mb-4">
            <li>
              <Link href={`/${locale}/blog/dog-longevity-diet-metabolic-health`} className="underline">
                Dog Longevity Diets (Metabolic Health)
              </Link>
            </li>
            <li>
              <Link href={`/${locale}/blog/dog-exercise-for-longevity-daily-routines`} className="underline">
                Exercise and Longevity (Daily Routines)
              </Link>
            </li>
          </ul>
        </section>

        {/* Conclusion */}
        <section id="conclusion" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Conclusion</h2>
          <p className="mb-4">
            Supplements can meaningfully support longevity when they are backed by research, carefully selected, and tailored to the
            dog&apos;s needs. Omega-3s, glucosamine, SAMe, and antioxidants offer consistent benefits, while emerging compounds show
            promise for the future. A veterinarian-guided strategy ensures that supplements enhance healthspan rather than introduce
            unnecessary risks.
          </p>
        </section>

        {/* Sources */}
        <section id="sources" className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">📚 Sources (Selected)</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            <li>Fritsch D et al. Dietary omega-3 fatty acids in canine health. J Vet Intern Med.</li>
            <li>Canine joint supplement trials. Vet Ther.</li>
            <li>Green-lipped mussel research in dogs. J Small Anim Pract.</li>
            <li>Antioxidants and ageing pathways. Free Radic Biol Med.</li>
            <li>Dog Ageing Project. Supplement usage and health correlations.</li>
            <li>Veterinary supplement safety reports. Vet Clin Small Anim Pract.</li>
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
