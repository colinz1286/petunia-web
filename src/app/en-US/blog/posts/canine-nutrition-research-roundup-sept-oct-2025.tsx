'use client';

import Head from 'next/head';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function CanineNutritionResearchRoundupSeptOct2025() {
  const locale = useLocale();

  const title = 'Canine Nutrition Research Roundup: September–October 2025';
  const date = 'October 19, 2025';
  const categories = ['owner', 'vet', 'boarding'] as const;

  const categoryLabels: Record<string, string> = {
    owner: 'Pet Owners',
    vet: 'Veterinary Clinics',
    boarding: 'Boarding',
    daycare: 'Daycare',
    rescue: 'Rescues',
    sitter: 'Pet Sitters',
    walker: 'Dog Walkers',
    breeder: 'Breeders',
    breed_specific_guides: 'Breed Specific Guides',
  };

  const description =
    'A concise, evidence-based summary of canine nutrition studies published in Sept–Oct 2025, including plant- vs. meat-based diets, environmental impact, and kibble vs. raw metabolic outcomes.';

  const canonical = `https://www.petuniapets.com/${locale}/blog/canine-nutrition-research-roundup-sept-oct-2025`;
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    datePublished: date,
    dateModified: date,
    author: { '@type': 'Organization', name: 'Petunia Pets' },
    publisher: { '@type': 'Organization', name: 'Petunia Pets' },
    description,
    image: `https://cdn.petuniapets.com/blog/canine-nutrition-research-roundup-sept-oct-2025.jpg`,
    mainEntityOfPage: canonical,
  };

  return (
    <>
      <Head>
        <title>{title} – Petunia Blog</title>
        <meta name="description" content={description} />
        <meta name="robots" content="all" />
        <link rel="canonical" href={canonical} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>

      <main className="max-w-3xl mx-auto px-4 py-10 text-[#2c4a30]">
        <p className="text-sm text-gray-500 mb-2">Posted on {date}</p>
        <h1 className="text-3xl font-bold mb-4">{title}</h1>

        <div className="flex flex-wrap gap-2 mb-6">
          {categories.map((key) => (
            <span
              key={key}
              className="text-xs bg-[#e4dbcb] text-[#2c4a30] px-3 py-1 rounded-full border border-[#d9cfc2]"
            >
              {categoryLabels[key] ?? key}
            </span>
          ))}
        </div>

        <nav className="mb-8 text-sm">
          <ul className="flex flex-wrap gap-3">
            <li><a href="#tldr" className="underline hover:opacity-80">TL;DR</a></li>
            <li><a href="#plant-meat" className="underline hover:opacity-80">Plant- vs. Meat-Based Diets</a></li>
            <li><a href="#environmental-impact" className="underline hover:opacity-80">Environmental Impact Study</a></li>
            <li><a href="#kibble-raw" className="underline hover:opacity-80">Kibble vs. Raw Diets</a></li>
            <li><a href="#apop-survey" className="underline hover:opacity-80">APOP 2025 Survey</a></li>
            <li><a href="#references" className="underline hover:opacity-80">References</a></li>
          </ul>
        </nav>

        <section id="tldr" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Short Answer (TL;DR)</h2>
          <p className="mb-4">
            Between September and October 2025, several peer-reviewed studies reshaped the discussion around dog diets. 
            Researchers found that most complete plant-based and meat-based dry foods met major nutrient targets, though 
            some plant-based and therapeutic diets were low in specific amino acids or micronutrients. Environmental analyses 
            suggested plant-based diets have a lower ecological footprint, while Finnish data indicated raw meat-based diets 
            may improve certain metabolic biomarkers compared to high-carbohydrate kibble.  
          </p>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Disclaimer:</strong> This article is for informational purposes only and should not replace veterinary advice.
          </div>
        </section>

        <section id="plant-meat" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">PLOS ONE (Sept 3 2025): Nutritional Analysis of UK Dry Foods</h2>
          <p className="mb-3">
            A UK-based team analyzed 31 commercial dry foods (plant-based, meat-based, and veterinary renal) for amino acids, minerals, 
            fatty acids, and vitamins D and B. Most met FEDIAF nutrient profiles, though plant-based recipes contained less iodine 
            and several B-vitamins. Veterinary renal diets intentionally lowered protein but sometimes under-delivered essential 
            amino acids.  
          </p>
          <p className="mb-3">
            <strong>Key takeaway:</strong> Plant-based diets can satisfy canine nutrition when properly fortified; therapeutic 
            formulations require individualized oversight.
          </p>
          <p className="text-sm">
            <a
              href="https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0328506"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Read the PLOS ONE study
            </a>
          </p>
        </section>

        <section id="environmental-impact" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Frontiers in Sustainable Food Systems (Sept 2025 + Oct Correction): Environmental Assessment</h2>
          <p className="mb-3">
            Companion research from the same group compared greenhouse-gas output, land use, and water footprint of plant- 
            versus meat-based diets. Plant-based formulas had substantially lower emissions and resource use per 1,000 kcal. 
            A minor correction issued in October 2025 refined data tables without changing conclusions.
          </p>
          <p className="mb-3">
            <strong>Key takeaway:</strong> For facilities feeding large groups of dogs, sustainable food sourcing can 
            materially reduce environmental impact.
          </p>
          <p className="text-sm space-x-4">
            <a
              href="https://www.frontiersin.org/journals/sustainable-food-systems/articles/10.3389/fsufs.2025.1633312/full"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Read the study
            </a>
            <a
              href="https://www.frontiersin.org/journals/sustainable-food-systems/articles/10.3389/fsufs.2025.1713231/full"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              October Correction
            </a>
          </p>
        </section>

        <section id="kibble-raw" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">The Veterinary Journal (Oct 8 2025): Kibble vs. Raw Diet Metabolism</h2>
          <p className="mb-3">
            Finnish researchers at the University of Helsinki monitored Staffordshire Bull Terriers fed either a 
            carbohydrate-rich kibble or a high-fat, raw meat-based diet for roughly four months. Dogs on the raw diet 
            showed lower fasting glucose, triglycerides, and insulin-resistance markers, while kibble diets elevated 
            blood lipids and long-term glucose indicators.
          </p>
          <p className="mb-3">
            <strong>Key takeaway:</strong> Dietary macronutrient ratio—particularly carbohydrate load—significantly influences 
            canine metabolic profiles, though food-handling safety remains critical.
          </p>
          <p className="text-sm space-x-4">
            <a
              href="https://www.helsinki.fi/en/news/dogs/canine-metabolism-responds-better-fat-carbs-research-suggests"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Helsinki University Summary
            </a>
            <a
              href="https://doi.org/10.1016/j.tvjl.2025.106462"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              The Veterinary Journal DOI
            </a>
          </p>
        </section>

        <section id="apop-survey" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">APOP 2025 Survey (Opened Oct 1 2025)</h2>
          <p className="mb-3">
            The Association for Pet Obesity Prevention launched its 2025 national opinion survey on October 1, 
            focusing on feeding practices, calorie awareness, and owner–veterinarian communication about weight. 
            The timing coincides with broader public interest in canine diet research during fall 2025.
          </p>
          <p className="text-sm space-x-4">
            <a
              href="https://www.petobesityprevention.org/2025"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              APOP Survey Page
            </a>
            <a
              href="https://www.petobesityprevention.org/pet-obesity-survey-toolkit-2025"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Survey Toolkit
            </a>
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Practical Takeaways</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Ensure plant-based foods contain fortified iodine and B-vitamins.</li>
            <li>Review amino-acid adequacy in therapeutic renal diets before long-term use.</li>
            <li>In multi-dog operations, consider sustainability scores when selecting bulk feed.</li>
            <li>Monitor glucose and lipid trends when adjusting macronutrient ratios in dogs with metabolic risks.</li>
          </ul>
        </section>

        <section id="references" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">📚 References</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            <li>
              Brociek, R. A., Li, D., Broughton, R., &amp; Gardner, D. S. (2025, September 3). 
              <i>Nutritional analysis of commercially available, complete plant- and meat-based dry dog foods in the UK.</i> PLOS ONE, 20(9), e0328506. 
              <a href="https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0328506" target="_blank" rel="noopener noreferrer" className="underline">Link</a>
            </li>
            <li>
              Brociek, R. A., &amp; Gardner, D. S. (2025). 
              <i>Environmental impact of feeding plant-based vs. meat-based dry dog foods in the UK.</i> Frontiers in Sustainable Food Systems. 
              <a href="https://www.frontiersin.org/journals/sustainable-food-systems/articles/10.3389/fsufs.2025.1633312/full" target="_blank" rel="noopener noreferrer" className="underline">Link</a>. 
              Correction (Oct 2025): 
              <a href="https://www.frontiersin.org/journals/sustainable-food-systems/articles/10.3389/fsufs.2025.1713231/full" target="_blank" rel="noopener noreferrer" className="underline">Link</a>
            </li>
            <li>
              Holm, S., Baarman, E., Anturaniemi, J., &amp; Hemida, M. (2025, October 8). 
              <i>The effect of a kibble diet versus a raw meat-based diet on energy metabolism biomarkers in dogs.</i> The Veterinary Journal, 314, 106462. 
              <a href="https://doi.org/10.1016/j.tvjl.2025.106462" target="_blank" rel="noopener noreferrer" className="underline">DOI</a>
            </li>
            <li>
              Association for Pet Obesity Prevention. (2025, October 1). 
              <i>2025 Pet Obesity &amp; Nutrition Opinion Survey.</i> 
              <a href="https://www.petobesityprevention.org/2025" target="_blank" rel="noopener noreferrer" className="underline">Link</a>
            </li>
          </ul>
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
