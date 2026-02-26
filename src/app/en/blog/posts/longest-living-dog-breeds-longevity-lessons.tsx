'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function LongestLivingDogBreedsLongevityLessons() {
  const locale = useLocale();

  const title =
    'Breeds With the Longest Lifespans: What We Can Learn From Them About Ageing';
  const date = 'December 1, 2025';
  const categories = ['owner', 'veterinary', 'breed_specific_guides'] as const;

  const categoryLabels: Record<string, string> = {
    owner: 'Pet Owners',
    veterinary: 'Veterinary Clinics',
    breed_specific_guides: 'Breed Specific Guides',
    boarding: 'Boarding',
    daycare: 'Daycare',
    rescue: 'Rescues',
    walker: 'Dog Walkers',
    sitter: 'Pet Sitters',
    breeder: 'Breeders'
  };

  return (
    <>

      <main className="max-w-3xl mx-auto px-4 py-10">

        <p className="text-sm text-gray-600 mb-2">Posted on {date}</p>

        <h1 className="text-3xl font-bold mb-4">{title}</h1>

        {/* Category pills */}
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
            <li><a href="#tldr" className="underline hover:opacity-80">TL;DR</a></li>
            <li><a href="#overview" className="underline hover:opacity-80">Small, Medium & Long-Lived Breeds</a></li>
            <li><a href="#genetics" className="underline hover:opacity-80">Genetic Drivers of Slow Ageing</a></li>
            <li><a href="#lifestyle" className="underline hover:opacity-80">Lifestyle Traits Linked to Longevity</a></li>
            <li><a href="#metabolic" className="underline hover:opacity-80">Metabolic Rate, Growth Speed & Disease</a></li>
            <li><a href="#lessons" className="underline hover:opacity-80">Longevity Lessons for All Owners</a></li>
            <li><a href="#conclusion" className="underline hover:opacity-80">Conclusion</a></li>
            <li><a href="#sources" className="underline hover:opacity-80">Sources</a></li>
          </ul>
        </nav>

        {/* TLDR */}
        <section id="tldr" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Short Answer (TL;DR)</h2>
          <p className="mb-4">
            Small and some medium-sized breeds often live the longest due to slower growth, lower metabolic strain, and reduced risk of
            breed-specific diseases. Genetics play a strong role, but lifestyle factors such as weight management, mobility preservation,
            and stable environments significantly influence lifespan. Long-lived breeds reveal clear lessons: slower ageing comes from
            metabolic efficiency, lean body condition, and reduced inflammatory burden.
          </p>
        </section>

        {/* Section 1 — Breed Analysis */}
        <section id="overview" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Analysis of Small, Medium, and Long-Lived Breeds</h2>
          <p className="mb-4">
            Many of the longest-living dog breeds fall into the small or medium-size categories. These dogs tend to have slower growth
            rates, lower metabolic demands, and fewer degenerative joint issues compared to larger breeds.
          </p>

          <ul className="list-disc pl-5 mb-4">
            <li><strong>Small breeds</strong> such as Chihuahuas, Toy Poodles, Dachshunds, and Shih Tzus often reach 14–18 years.</li>
            <li><strong>Medium breeds</strong> such as Border Terriers, Shelties, and Beagles average 13–15 years.</li>
            <li><strong>Long-lived outliers</strong> include the Rat Terrier, Miniature Schnauzer, and Australian Cattle Dog.</li>
          </ul>

          <p className="mb-4">
            In contrast, giant breeds—Great Danes, Saint Bernards, Mastiffs—move through growth phases quickly and experience higher
            metabolic strain, leading to significantly shorter lifespans.
          </p>
        </section>

        {/* Section 2 — Genetics */}
        <section id="genetics" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Genetic Factors That Influence Slower Ageing</h2>
          <p className="mb-4">
            Genetics play a major role in determining ageing rate. Long-lived breeds tend to have fewer hereditary conditions, more
            stable cardiovascular systems, and metabolic pathways that produce lower baseline inflammation.
          </p>

          <ul className="list-disc pl-5 mb-4">
            <li>Reduced incidence of heart disease in several toy and terrier breeds.</li>
            <li>Lower cancer rates compared to large retrievers and shepherds.</li>
            <li>Genetically efficient energy utilization supporting healthier ageing.</li>
            <li>Stable joint structures that delay arthritis onset.</li>
          </ul>

          <p className="mb-4">
            While genetics cannot be changed, understanding predispositions helps owners tailor preventive care to reduce risk.
          </p>
        </section>

        {/* Section 3 — Lifestyle Factors */}
        <section id="lifestyle" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Lifestyle Factors That Correlate With Longevity</h2>
          <p className="mb-4">
            Real-world longevity data show consistent lifestyle patterns among dogs that live into their late teens. These habits reduce
            inflammation, protect cognition, and maintain mobility across ageing.
          </p>

          <ul className="list-disc pl-5 mb-4">
            <li>Maintaining a lean body condition throughout life.</li>
            <li>Daily exercise focused on mobility and strength rather than intensity.</li>
            <li>Lower-stress environments with predictable routines.</li>
            <li>High-quality diets emphasizing anti-inflammatory ingredients.</li>
            <li>Regular dental care reducing systemic inflammatory load.</li>
          </ul>

          <p className="mb-4">
            Longevity emerges from consistent habits—not sporadic interventions.
          </p>
        </section>

        {/* Section 4 — Metabolic Rate & Growth */}
        <section id="metabolic" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Metabolic Rate, Growth Speed, and Breed-Specific Diseases</h2>
          <p className="mb-4">
            Faster growth and higher metabolic rates correlate with shorter lifespans across mammalian species. Large and giant breeds
            grow rapidly, experience accelerated cellular turnover, and face elevated orthopedic and cardiovascular risk.
          </p>

          <ul className="list-disc pl-5 mb-4">
            <li>High metabolic rate increases oxidative stress.</li>
            <li>Rapid growth contributes to joint disease and earlier arthritis.</li>
            <li>Large breeds show higher prevalence of certain cancers.</li>
            <li>Small breeds often avoid the metabolic strain seen in large breeds.</li>
          </ul>

          <p className="mb-4">
            These biological differences explain why size is one of the strongest predictors of canine lifespan.
          </p>
        </section>

        {/* Section 5 — Longevity Lessons */}
        <section id="lessons" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Lessons All Dog Owners Can Apply</h2>
          <p className="mb-4">
            The patterns seen in long-lived breeds offer actionable insights for dogs of every size. Longevity is influenced by daily
            choices that support metabolic efficiency, emotional stability, and joint health.
          </p>

          <ul className="list-disc pl-5 mb-4">
            <li>Keep dogs lean from puppyhood through old age.</li>
            <li>Provide consistent low-to-moderate activity rather than occasional intense exercise.</li>
            <li>Reduce chronic inflammation through diet and dental care.</li>
            <li>Support joint health early with movement and weight control.</li>
            <li>Create predictable routines to reduce stress burden.</li>
            <li>Prioritize mobility—one of the strongest predictors of healthy ageing.</li>
          </ul>

          <p className="mb-4">
            Long-lived breeds remind us that ageing is not random—it reflects biology, environment, and lifelong habits.
          </p>
        </section>

        {/* Internal Backlinks */}
        <section className="mb-8">
          <p className="mb-4">For more longevity science, explore:</p>
          <ul className="list-disc pl-5 mb-4">
            <li>
              <Link href={`/${locale}/blog/dog-weight-and-lifespan-data-analysis`} className="underline">
                How Weight Impacts Lifespan (Lean Dogs Live Longer)
              </Link>
            </li>
            <li>
              <Link href={`/${locale}/blog/dog-longevity-diet-metabolic-health`} className="underline">
                Dog Longevity Diets (Metabolic Health)
              </Link>
            </li>
          </ul>
        </section>

        {/* Conclusion */}
        <section id="conclusion" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Conclusion</h2>
          <p className="mb-4">
            Small and medium-sized breeds offer valuable clues about how dogs can age more slowly and live longer. While genetics shape
            predispositions, lifestyle choices determine how those genetics are expressed. By applying the lessons revealed by
            long-lived breeds—lean body condition, metabolic stability, mobility preservation, and daily routines—owners can give any
            dog a meaningful longevity advantage.
          </p>
        </section>

        {/* Sources */}
        <section id="sources" className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">📚 Sources (Selected)</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            <li>Dog Ageing Project. Breed longevity datasets.</li>
            <li>Greer KA. Canine size and ageing biology. Vet Clin Small Anim.</li>
            <li>Breed-specific cancer prevalence. J Vet Intern Med.</li>
            <li>Metabolic rate and lifespan correlation. Cell Metab.</li>
            <li>Lifanov JA. Growth speed and musculoskeletal ageing. Vet J.</li>
          </ul>

          <p className="text-xs text-gray-600 mt-4">
            Educational content only — always follow your veterinarian&apos;s guidance for diagnosis and treatment.
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
