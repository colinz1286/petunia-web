'use client';

import Head from 'next/head';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function FutureOfDogLongevityMedicine() {
  const locale = useLocale();

  const title =
    'The Future of Veterinary Longevity Medicine: Senolytics, Gene Therapy, and What’s Coming After LOY-002';
  const date = 'November 25, 2025';
  const description =
    'A forward-looking examination of senolytics, gene therapy, microbiome modulation, metabolic switching, regulatory milestones after LOY-002, realistic timelines, and ethical considerations shaping the future of canine longevity medicine.';

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
              {categoryLabels[cat] ?? cat}
            </span>
          ))}
        </div>

        {/* Table of Contents */}
        <nav className="mb-8 text-sm">
          <ul className="flex flex-wrap gap-4">
            <li><a href="#tldr" className="underline hover:opacity-80">TL;DR</a></li>
            <li><a href="#senolytics" className="underline hover:opacity-80">Senolytics</a></li>
            <li><a href="#genetherapy" className="underline hover:opacity-80">Gene Therapy</a></li>
            <li><a href="#microbiome" className="underline hover:opacity-80">Microbiome Modulation</a></li>
            <li><a href="#regulatory" className="underline hover:opacity-80">LOY-002 and Regulation</a></li>
            <li><a href="#timelines" className="underline hover:opacity-80">Timelines</a></li>
            <li><a href="#ethics" className="underline hover:opacity-80">Ethical Considerations</a></li>
            <li><a href="#conclusion" className="underline hover:opacity-80">Conclusion</a></li>
            <li><a href="#sources" className="underline hover:opacity-80">Sources</a></li>
          </ul>
        </nav>

        {/* TLDR */}
        <section id="tldr" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Short Answer (TL;DR)</h2>
          <p className="mb-4">
            Veterinary longevity medicine is entering a transformative decade. Senolytics, gene therapy, microbiome modulation, and
            metabolic switching are emerging as promising approaches for extending canine healthspan. The FDA&apos;s support of LOY-002
            opened the regulatory door for future ageing-targeted drugs, and more therapies are expected to follow. Ethical,
            accessibility, and affordability questions will shape how widely these advancements benefit everyday pet owners.
          </p>
        </section>

        {/* Section 1 - Senolytics */}
        <section id="senolytics" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">What Senolytics Do and How They&apos;re Being Studied</h2>
          <p className="mb-4">
            Senolytics are compounds designed to remove senescent cells—aged, damaged cells that stop dividing but continue to secrete
            inflammatory molecules. These cells accumulate with age and accelerate tissue decline.
          </p>

          <ul className="list-disc pl-5 mb-4">
            <li>Removing senescent cells reduces chronic inflammation.</li>
            <li>Senolytics may restore healthier cellular communication.</li>
            <li>Studies in mice show improved mobility, metabolic stability, and organ function.</li>
            <li>Early canine research is exploring dosage safety and long-term impact.</li>
          </ul>

          <p className="mb-4">
            Senolytic therapy may eventually fit alongside metabolic and anti-inflammatory drugs to create multi-pathway longevity
            programs for dogs.
          </p>
        </section>

        {/* Section 2 - Gene Therapy */}
        <section id="genetherapy" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Gene Editing and Gene Therapy Approaches for Ageing</h2>
          <p className="mb-4">
            Gene therapy aims to adjust or repair genes that influence cellular ageing pathways. These techniques may enhance DNA
            repair, reduce oxidative stress, or improve mitochondrial function.
          </p>

          <ul className="list-disc pl-5 mb-4">
            <li>Upregulating DNA repair enzymes may slow genetic degradation.</li>
            <li>Altering metabolic genes could improve energy regulation.</li>
            <li>Gene silencing may reduce harmful inflammatory signaling.</li>
            <li>Long-term safety trials in companion animals are underway globally.</li>
          </ul>

          <p className="mb-4">
            While gene editing for lifespan extension remains experimental, progress in veterinary oncology and rare-disease treatment
            suggests longevity applications may become feasible within the next decade.
          </p>
        </section>

        {/* Section 3 - Microbiome */}
        <section id="microbiome" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Microbiome Modulation and Metabolic Switching</h2>
          <p className="mb-4">
            The gut microbiome plays a critical role in immune function, inflammation, metabolism, and cognitive health. As dogs age,
            microbiome diversity declines, contributing to chronic disease and reduced resilience.
          </p>

          <ul className="list-disc pl-5 mb-4">
            <li>Probiotics and postbiotics may influence inflammatory pathways.</li>
            <li>Metabolic switching techniques encourage fat utilization and reduced oxidative stress.</li>
            <li>Future treatments may target microbiome composition to improve ageing trajectories.</li>
            <li>Some diets already show promise in preserving microbial diversity.</li>
          </ul>

          <p className="mb-4">
            As research advances, microbiome therapeutics may become a frontline tool in longevity-focused veterinary care.
          </p>
        </section>

        {/* Section 4 - Regulatory Impact */}
        <section id="regulatory" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">How LOY-002 Opened the Regulatory Door for Longevity Drugs</h2>
          <p className="mb-4">
            LOY-002, the first canine drug to receive FDA acknowledgment for reasonable expectation of effectiveness in slowing ageing,
            represents a turning point in veterinary pharmacology. Its progress demonstrated that longevity itself can be a recognized
            clinical goal—not just disease management.
          </p>

          <ul className="list-disc pl-5 mb-4">
            <li>Regulators now have a framework for evaluating ageing interventions.</li>
            <li>Future companies can navigate approvals more efficiently.</li>
            <li>The drug&apos;s success encourages investment and innovation across biotech sectors.</li>
          </ul>

          <p className="mb-4">
            As pathways become better understood, combination therapies may emerge to target ageing from multiple physiological angles.
          </p>
        </section>

        {/* Section 5 - Timelines */}
        <section id="timelines" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">What Might Realistically Emerge in the Next Decade?</h2>
          <p className="mb-4">
            While breakthroughs often capture headlines, the realistic rollout of longevity therapies depends on safety validation,
            manufacturing readiness, and regulatory pathways. Based on current research velocity:
          </p>

          <ul className="list-disc pl-5 mb-4">
            <li><strong>2–3 years:</strong> metabolic-modulating drugs building on LOY-002 pathways.</li>
            <li><strong>5–7 years:</strong> early-stage senolytics designed for canine ageing.</li>
            <li><strong>7–10 years:</strong> gene therapy pilots for metabolic stability or DNA repair.</li>
            <li><strong>10+ years:</strong> microbiome-engineered longevity therapeutics integrated with diet.</li>
          </ul>

          <p className="mb-4">
            Full lifespan extension requires multi-pathway approaches, but measurable healthspan improvements are coming sooner.
          </p>
        </section>

        {/* Section 6 - Ethics */}
        <section id="ethics" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Ethical Considerations and Affordability</h2>
          <p className="mb-4">
            The rapid development of ageing-targeted treatments raises ethical questions regarding access, appropriate usage, and
            expectations. Owners will need clear guidance to balance quality of life with longevity.
          </p>

          <ul className="list-disc pl-5 mb-4">
            <li>Will treatments be accessible to average pet owners, or only high-income households?</li>
            <li>How will veterinarians evaluate when longevity treatments are humane?</li>
            <li>Should lifespan extension be prioritized over comfort in advanced age?</li>
            <li>Will insurance providers cover longevity therapeutics?</li>
          </ul>

          <p className="mb-4">
            As the field grows, veterinary ethics will evolve to ensure treatments support wellbeing rather than prolong suffering.
          </p>
        </section>

        {/* Internal Backlinks */}
        <section className="mb-8">
          <p className="mb-4">
            For related longevity science, explore:
          </p>
          <ul className="list-disc pl-5 mb-4">
            <li>
              <Link href={`/${locale}/blog/dog-ageing-science-cellular-pathways`} className="underline">
                How Dog Ageing Actually Works (Cellular Pathways)
              </Link>
            </li>
            <li>
              <Link href={`/${locale}/blog/dog-longevity-diet-metabolic-health`} className="underline">
                Dog Longevity Diets (Metabolic Health & Anti-Ageing Foods)
              </Link>
            </li>
          </ul>
        </section>

        {/* Conclusion */}
        <section id="conclusion" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Conclusion</h2>
          <p className="mb-4">
            Veterinary longevity medicine is shifting from theory to practical application. With senolytics, gene therapy, metabolic
            drugs, and microbiome modulation on the horizon, the next decade will transform how owners care for ageing dogs. LOY-002
            is only the beginning. The challenge—both scientific and ethical—will be ensuring these breakthroughs are safe,
            accessible, and focused on improving quality of life.
          </p>
        </section>

        {/* Sources */}
        <section id="sources" className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">📚 Sources (Selected)</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            <li>Kirkland JL. Senolytics and ageing pathways. Nat Med.</li>
            <li>Lopez-Otin C. The Hallmarks of Ageing. Cell.</li>
            <li>Dog Ageing Project. Longevity biomarker data.</li>
            <li>FDA Veterinary Innovation Program (2024–2025).</li>
            <li>Canine gene therapy advancements. J Vet Intern Med.</li>
            <li>Microbiome modulation and metabolic ageing. Cell Metab.</li>
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
