'use client';

import Head from 'next/head';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function RawVsKibbleMetabolicHealth2025() {
  const locale = useLocale();

  const title = 'Raw vs. Kibble: What the 2025 Helsinki Metabolic Study Reveals About Canine Health';
  const date = 'October 20, 2025';
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
    'University of Helsinki researchers report major metabolic differences between raw meat-based and kibble diets in dogs, highlighting how carbohydrate load shapes blood sugar and lipid markers.';

  const canonical = `https://www.petuniapets.com/${locale}/blog/raw-vs-kibble-metabolic-health-2025`;
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    datePublished: date,
    dateModified: date,
    author: { '@type': 'Organization', name: 'Petunia Pets' },
    publisher: { '@type': 'Organization', name: 'Petunia Pets' },
    description,
    image: `https://cdn.petuniapets.com/blog/raw-vs-kibble-metabolic-health-2025.jpg`,
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
        {/* Meta */}
        <p className="text-sm text-gray-500 mb-2">Posted on {date}</p>
        <h1 className="text-3xl font-bold mb-4">{title}</h1>

        {/* Category pills */}
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

        {/* Anchor nav */}
        <nav className="mb-8 text-sm">
          <ul className="flex flex-wrap gap-3">
            <li><a href="#tldr" className="underline hover:opacity-80">TL;DR</a></li>
            <li><a href="#study-overview" className="underline hover:opacity-80">Study Overview</a></li>
            <li><a href="#findings" className="underline hover:opacity-80">Key Findings</a></li>
            <li><a href="#implications" className="underline hover:opacity-80">Practical Implications</a></li>
            <li><a href="#safety" className="underline hover:opacity-80">Food Safety & Handling</a></li>
            <li><a href="#references" className="underline hover:opacity-80">References</a></li>
          </ul>
        </nav>

        {/* TL;DR */}
        <section id="tldr" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Short Answer (TL;DR)</h2>
          <p className="mb-4">
            A 2025 University of Helsinki study published in <i>The Veterinary Journal</i> compared the metabolic effects 
            of a carbohydrate-rich kibble diet versus a high-fat, raw meat-based diet in dogs over four months. 
            Raw-fed dogs had lower fasting glucose, triglycerides, and insulin-resistance indicators, while kibble-fed dogs 
            exhibited higher long-term glucose and lipid levels. The study suggests diet macronutrient ratios can significantly 
            influence canine metabolic health.
          </p>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Note:</strong> Always consult a veterinarian before changing a pet’s diet, especially when using raw ingredients.
          </div>
        </section>

        {/* Study Overview */}
        <section id="study-overview" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Study Overview</h2>
          <p className="mb-3">
            Conducted by the DogRisk research group at the University of Helsinki’s Faculty of Veterinary Medicine, 
            the study followed a cohort of Staffordshire Bull Terriers over approximately 4½ months. 
            Half the dogs received a standard commercial kibble diet (high in carbohydrates), while the other group 
            consumed a raw meat-based diet (higher fat and protein, minimal carbohydrates). 
            Researchers aimed to measure how these dietary profiles affected long-term metabolic biomarkers.
          </p>
          <p className="text-sm">
            Original publication: <a
              href="https://doi.org/10.1016/j.tvjl.2025.106462"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              The Veterinary Journal (Oct 8 2025)
            </a> | University summary: 
            <a
              href="https://www.helsinki.fi/en/news/dogs/canine-metabolism-responds-better-fat-carbs-research-suggests"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Helsinki News Release
            </a>
          </p>
        </section>

        {/* Findings */}
        <section id="findings" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Key Findings</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Raw-fed dogs demonstrated lower fasting blood glucose and triglyceride concentrations.</li>
            <li>Markers of insulin resistance (including the triglyceride–glucose index) decreased under the raw diet.</li>
            <li>Kibble-fed dogs showed elevated long-term glucose markers and total cholesterol.</li>
            <li>Hormonal profiles differed—raw-fed dogs had reduced glucagon levels and increased circulating ketone bodies, consistent with fat metabolism.</li>
            <li>Body-weight gain was greater among kibble-fed participants despite equivalent caloric intake.</li>
          </ul>
        </section>

        {/* Implications */}
        <section id="implications" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Practical Implications</h2>
          <p className="mb-3">
            These data strengthen evidence that dogs metabolize fat efficiently and that excessive dietary carbohydrates 
            may elevate markers linked to insulin resistance. For practitioners, the findings underscore the value of 
            assessing individual metabolic status—especially in breeds predisposed to obesity or endocrine disorders—when 
            recommending feeding regimens.
          </p>
          <p className="mb-3">
            For pet owners, the study offers insight into why some dogs maintain leaner body condition and steadier 
            energy on higher-protein, lower-carbohydrate diets. However, nutritional balance, vitamin D adequacy, and 
            pathogen control remain essential.
          </p>
        </section>

        {/* Food safety */}
        <section id="safety" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Food Safety & Handling</h2>
          <p className="mb-3">
            While raw diets can influence metabolism positively, they also introduce bacterial and parasitic hazards if not 
            prepared and stored correctly. Raw meat should be sourced from inspected suppliers, handled with 
            separate utensils, and frozen appropriately to mitigate contamination risk.  
          </p>
          <p className="mb-3">
            For boarding and daycare facilities, always verify local regulations and client waivers regarding raw-food storage 
            and feeding on premises.
          </p>
          <p className="text-sm">
            See <a href="https://www.avma.org/resources-tools/avma-policies/raw-diets" target="_blank" rel="noopener noreferrer" className="underline">AVMA Policy on Raw Diets</a> and 
            the <a href="https://www.fda.gov/animal-veterinary/animal-food-feeds/raw-pet-foods-handling-and-safety" target="_blank" rel="noopener noreferrer" className="underline">FDA Raw Pet Food Safety Guidelines</a>.
          </p>
        </section>

        {/* References */}
        <section id="references" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">📚 References</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            <li>
              Holm, S., Baarman, E., Anturaniemi, J., & Hemida, M. (2025, October 8). 
              <i>The effect of a kibble diet versus a raw meat-based diet on energy metabolism biomarkers in dogs.</i> 
              <i>The Veterinary Journal</i>, 314, 106462. 
              <a href="https://doi.org/10.1016/j.tvjl.2025.106462" target="_blank" rel="noopener noreferrer" className="underline">DOI</a>.
            </li>
            <li>
              University of Helsinki (2025, October 8). 
              <i>Canine metabolism responds better to fat than carbohydrates, research suggests.</i> 
              <a href="https://www.helsinki.fi/en/news/dogs/canine-metabolism-responds-better-fat-carbs-research-suggests" target="_blank" rel="noopener noreferrer" className="underline">Link</a>.
            </li>
            <li>
              U.S. Food and Drug Administration. (2024). 
              <i>Raw Pet Foods: Handling and Safety.</i> 
              <a href="https://www.fda.gov/animal-veterinary/animal-food-feeds/raw-pet-foods-handling-and-safety" target="_blank" rel="noopener noreferrer" className="underline">Link</a>.
            </li>
            <li>
              American Veterinary Medical Association. (2024). 
              <i>AVMA Policy on Raw Pet Food Diets.</i> 
              <a href="https://www.avma.org/resources-tools/avma-policies/raw-diets" target="_blank" rel="noopener noreferrer" className="underline">Link</a>.
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
