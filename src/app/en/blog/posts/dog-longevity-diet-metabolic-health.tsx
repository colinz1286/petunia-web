'use client';

import Head from 'next/head';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function DogLongevityDietMetabolicHealth() {
  const locale = useLocale();

  const title =
    'Dog Longevity Diets: What Science Says About Nutrition, Metabolic Health, and Anti-Ageing Foods';
  const date = 'November 21, 2025';
  const description =
    'A research-based guide to how caloric density, macronutrients, omega-3s, antioxidants, feeding patterns, and emerging supplements influence dog longevity, metabolic health, and ageing.';
  const slug = 'dog-longevity-diet-metabolic-health';

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
        {/* Meta */}
        <p className="text-sm text-gray-600 mb-2">Posted on {date}</p>

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
            <li><a href="#calories" className="underline hover:opacity-80">Caloric Density & Macronutrients</a></li>
            <li><a href="#lean" className="underline hover:opacity-80">Lean Body Condition Evidence</a></li>
            <li><a href="#nutrients" className="underline hover:opacity-80">Omega-3s, Antioxidants & Joint Nutrients</a></li>
            <li><a href="#seniorfood" className="underline hover:opacity-80">Senior Food vs. Real Science</a></li>
            <li><a href="#frequency" className="underline hover:opacity-80">Feeding Frequency & Metabolic Health</a></li>
            <li><a href="#supplements" className="underline hover:opacity-80">Emerging Longevity Supplements</a></li>
            <li><a href="#avoid" className="underline hover:opacity-80">Foods That Accelerate Ageing</a></li>
            <li><a href="#conclusion" className="underline hover:opacity-80">Conclusion</a></li>
            <li><a href="#sources" className="underline hover:opacity-80">Sources</a></li>
          </ul>
        </nav>

        {/* TL;DR */}
        <section id="tldr" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Short Answer (TL;DR)</h2>
          <p className="mb-4">
            Dogs live longer when they stay lean, eat balanced macronutrients, receive omega-3s and antioxidants, and consume foods
            that support stable metabolism. Feeding patterns, muscle preservation, and anti-inflammatory nutrition are more powerful
            longevity tools than most commercial labels suggest. Evidence shows that dietary choices significantly influence healthspan,
            mobility, and metabolic ageing.
          </p>
        </section>

        {/* Section 1 */}
        <section id="calories" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">How Caloric Density and Macronutrient Ratios Influence Lifespan</h2>
          <p className="mb-4">
            Longevity research across mammals consistently demonstrates that caloric density and macronutrient composition influence
            metabolic ageing. Dogs consuming calorie-dense diets tend to gain weight more easily, increasing inflammatory load and
            accelerating insulin resistance.
          </p>

          <ul className="list-disc pl-5 mb-4">
            <li>Excess calories increase oxidative stress.</li>
            <li>Proteins support muscle preservation and metabolic stability.</li>
            <li>Excess carbohydrates contribute to glycemic spikes.</li>
            <li>High-fat diets can increase systemic inflammation depending on fat source.</li>
          </ul>

          <p className="mb-4">
            Research suggests that balanced macronutrient patterns, rather than extreme restrictions, produce the healthiest metabolic
            outcomes in senior dogs.
          </p>
        </section>

        {/* Section 2 */}
        <section id="lean" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">The Longevity Evidence Behind Lean Body Condition</h2>
          <p className="mb-4">
            One of the most important studies in canine longevity, the lifelong Purina Body Condition Study, demonstrated that lean-fed
            dogs lived significantly longer than their free-fed littermates. Lean dogs experienced delayed onset of arthritis, lower
            inflammatory markers, and improved metabolic function.
          </p>

          <ul className="list-disc pl-5 mb-4">
            <li>Up to a 2-year increase in lifespan in lean-maintained dogs.</li>
            <li>Lower chronic inflammation and reduced joint degeneration.</li>
            <li>Healthier insulin sensitivity and energy regulation.</li>
          </ul>

          <p className="mb-4">
            Body condition scoring, rather than portion guessing, remains one of the most reliable predictors of longevity.
          </p>
        </section>

        {/* Section 3 */}
        <section id="nutrients" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Omega-3s, Antioxidants, and Joint Support Nutrients</h2>
          <p className="mb-4">
            Omega-3 fatty acids (EPA and DHA) are among the most researched nutrients in canine medicine. They reduce inflammatory
            cytokines, support cognitive function, protect joints, and improve coat and skin health.
          </p>

          <ul className="list-disc pl-5 mb-4">
            <li>Omega-3s reduce pro-inflammatory pathways linked to ageing.</li>
            <li>Antioxidants neutralize free radicals and protect cellular integrity.</li>
            <li>Glucosamine and chondroitin support cartilage longevity.</li>
            <li>Vitamin E and C assist in oxidative stress control.</li>
          </ul>

          <p className="mb-4">
            Older dogs benefit from diets that emphasize oxidative protection and stable anti-inflammatory nutrient profiles.
          </p>
        </section>

        {/* Section 4 */}
        <section id="seniorfood" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Senior Dog Foods: Marketing Claims vs. Actual Science</h2>
          <p className="mb-4">
            Many commercial senior dog foods do not rely on clinical research for their formulations. Labels often imply longevity
            benefits without presenting evidence-based nutrient modifications. In practice, senior diets vary widely among brands.
          </p>

          <ul className="list-disc pl-5 mb-4">
            <li>Some contain fewer calories but also insufficient protein.</li>
            <li>Others reduce fat but increase carbohydrates, worsening insulin sensitivity.</li>
            <li>Formulas may omit omega-3s despite strong evidence for their necessity.</li>
          </ul>

          <p className="mb-4">
            Evidence shows that senior dogs often need more protein, not less, to protect muscle mass and metabolic function.
          </p>
        </section>

        {/* Section 5 */}
        <section id="frequency" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Feeding Frequency and the Metabolic Benefits of Smaller Meals</h2>
          <p className="mb-4">
            Studies suggest that dividing daily calories into two or more smaller meals supports stable blood glucose and reduces
            oxidative stress. Large, infrequent meals may contribute to metabolic strain and increase digestive risk in large breeds.
          </p>

          <ul className="list-disc pl-5 mb-4">
            <li>Smaller meals improve insulin response.</li>
            <li>More stable energy curves support mobility and cognitive function.</li>
            <li>Senior dogs experience fewer digestive fluctuations with consistent feeding schedules.</li>
          </ul>
        </section>

        {/* Section 6 */}
        <section id="supplements" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Supplements With Emerging Longevity Evidence</h2>
          <p className="mb-4">
            Several supplements show early promise in supporting healthy ageing, though research is still developing. When integrated
            with veterinary guidance, they may enhance metabolic resilience and reduce inflammatory stress.
          </p>

          <ul className="list-disc pl-5 mb-4">
            <li>Green-lipped mussel: joint and anti-inflammatory benefits.</li>
            <li>Polyphenols: antioxidant effects with potential metabolic support.</li>
            <li>SAMe: liver support and cognitive benefits in seniors.</li>
            <li>L-carnitine: supports fat metabolism and cardiac health.</li>
          </ul>

          <p className="mb-4">
            Supplements should complement, not replace, foundational nutrition and weight maintenance.
          </p>
        </section>

        {/* Section 7 */}
        <section id="avoid" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Foods That Accelerate Inflammation or Metabolic Decline</h2>
          <p className="mb-4">
            While certain foods support longevity, others increase metabolic stress, inflammation, or oxidative damage. These foods
            contribute to premature ageing, weight gain, and disease risk.
          </p>

          <ul className="list-disc pl-5 mb-4">
            <li>Highly processed treats with artificial additives.</li>
            <li>Excessive carbohydrates leading to glycemic spikes.</li>
            <li>High-fat foods from poor-quality animal sources.</li>
            <li>Foods containing pro-inflammatory omega-6 imbalances.</li>
          </ul>

          <p className="mb-4">
            Minimizing these accelerants, while supporting anti-inflammatory nutrition, provides measurable longevity benefits.
          </p>
        </section>

        {/* Internal Backlinks */}
        <section className="mb-8">
          <p className="mb-4">For related longevity topics, explore:</p>
          <ul className="list-disc pl-5 mb-4">
            <li>
              <Link href={`/${locale}/blog/dog-ageing-science-cellular-pathways`} className="underline">
                How Dog Ageing Actually Works (Cellular Pathways Explained)
              </Link>
            </li>
            <li>
              <Link href={`/${locale}/blog/anti-ageing-for-dogs`} className="underline">
                Anti Ageing for Dogs (2026 Drug Overview)
              </Link>
            </li>
          </ul>
        </section>

        {/* Conclusion */}
        <section id="conclusion" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Conclusion</h2>
          <p className="mb-4">
            Nutrition plays a central role in how dogs age. By maintaining a lean body condition, providing anti-inflammatory nutrients,
            supporting stable metabolism, and avoiding foods that accelerate ageing, owners can meaningfully influence their dog&apos;s
            long-term health and mobility. Longevity nutrition is not a marketing term but a science-based approach to protecting
            healthspan.
          </p>
        </section>

        {/* Sources */}
        <section id="sources" className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">📚 Sources (Selected)</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            <li>Kealy RD et al. (2002). Effects of diet restriction on life span in dogs. J Am Vet Med Assoc.</li>
            <li>Hall JA. Age-related metabolic and nutritional changes in dogs. Vet Clin North Am Small Anim Pract.</li>
            <li>Miller RA. Nutrition and ageing: oxidative stress interactions. Free Radic Biol Med.</li>
            <li>Antioxidants in canine ageing. J Vet Intern Med.</li>
            <li>Fritsch D et al. (2010). Dietary omega-3 fatty acids and inflammation in dogs. J Vet Intern Med.</li>
            <li>Polyphenols and metabolic resilience. Nutr Res Rev.</li>
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
