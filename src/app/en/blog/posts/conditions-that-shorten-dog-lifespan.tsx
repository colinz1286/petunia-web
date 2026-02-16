'use client';

import Head from 'next/head';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function ConditionsThatShortenDogLifespan() {
  const locale = useLocale();

  const title =
    'Conditions That Shorten a Dog’s Lifespan — And How Owners Can Slow Them Down';
  const date = 'November 26, 2025';
  const description =
    'A science-backed examination of the most common conditions that shorten canine lifespan, including obesity, arthritis, dental disease, kidney disease, heart disease, and strategies owners can use to slow disease progression and improve longevity.';

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

        {/* TOC */}
        <nav className="mb-8 text-sm">
          <ul className="flex flex-wrap gap-4">
            <li><a href="#tldr" className="underline hover:opacity-80">TL;DR</a></li>
            <li><a href="#obesity" className="underline hover:opacity-80">Obesity</a></li>
            <li><a href="#arthritis" className="underline hover:opacity-80">Arthritis</a></li>
            <li><a href="#dental" className="underline hover:opacity-80">Dental Disease</a></li>
            <li><a href="#kidney" className="underline hover:opacity-80">Kidney Disease</a></li>
            <li><a href="#heart" className="underline hover:opacity-80">Heart Disease</a></li>
            <li><a href="#inflammation" className="underline hover:opacity-80">Inflammation</a></li>
            <li><a href="#modifiable" className="underline hover:opacity-80">Modifiable vs. Genetic Factors</a></li>
            <li><a href="#habits" className="underline hover:opacity-80">Longevity Habits</a></li>
            <li><a href="#conclusion" className="underline hover:opacity-80">Conclusion</a></li>
            <li><a href="#sources" className="underline hover:opacity-80">Sources</a></li>
          </ul>
        </nav>

        {/* TLDR */}
        <section id="tldr" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Short Answer (TL;DR)</h2>
          <p className="mb-4">
            The most common lifespan-shortening conditions in dogs—obesity, arthritis, dental disease, kidney disease, and heart
            disease—are strongly influenced by inflammation and can often be slowed through early detection, lifestyle changes, and
            proactive veterinary care. Many risk factors are modifiable, meaning owners have substantial power to extend their dog&apos;s
            healthy years.
          </p>
        </section>

        {/* Section: Obesity */}
        <section id="obesity" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Obesity: The Most Preventable Lifespan-Shortening Condition</h2>
          <p className="mb-4">
            Obesity dramatically reduces canine lifespan. Excess fat tissue produces inflammatory cytokines that accelerate ageing,
            worsen insulin resistance, increase joint strain, and elevate systemic oxidative stress. Research shows lean dogs live
            significantly longer—up to 2.5 years in controlled studies.
          </p>

          <ul className="list-disc pl-5 mb-4">
            <li>Increases risk of diabetes, arthritis, heart disease, and cancer.</li>
            <li>Amplifies chronic inflammation, a key ageing pathway.</li>
            <li>Reduces mobility, which further accelerates decline.</li>
          </ul>

          <p className="mb-4">
            Because weight is highly modifiable, obesity remains the single most impactful longevity intervention for most households.
          </p>
        </section>

        {/* Section: Arthritis */}
        <section id="arthritis" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Arthritis and Mobility Decline</h2>
          <p className="mb-4">
            Osteoarthritis affects an estimated 20–25 percent of dogs and contributes heavily to frailty. Once mobility declines,
            lifespan often shortens because dogs move less, lose muscle, accumulate fat, and experience increased discomfort.
          </p>

          <ul className="list-disc pl-5 mb-4">
            <li>Joint inflammation accelerates cartilage breakdown.</li>
            <li>Muscle loss increases instability and fall risk.</li>
            <li>Reduced movement worsens metabolic and cardiovascular health.</li>
          </ul>

          <p className="mb-4">
            Early treatment—including weight control, omega-3s, physical therapy, and joint support—can slow progression and preserve
            independence.
          </p>
        </section>

        {/* Section: Dental */}
        <section id="dental" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Dental Disease and Systemic Ageing</h2>
          <p className="mb-4">
            Dental disease is one of the most underrecognized contributors to shortened canine lifespan. Chronic oral inflammation
            affects the heart, kidneys, and liver, and can significantly reduce quality of life.
          </p>

          <ul className="list-disc pl-5 mb-4">
            <li>Bacteria from the mouth enter the bloodstream and strain organs.</li>
            <li>Inflammation increases risk of systemic disease.</li>
            <li>Chronic oral pain alters eating patterns and energy levels.</li>
          </ul>

          <p className="mb-4">
            Regular dental cleanings and home care are among the strongest preventive measures owners can implement.
          </p>
        </section>

        {/* Section: Kidney Disease */}
        <section id="kidney" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Kidney Disease: A Silent Lifespan Reducer</h2>
          <p className="mb-4">
            Kidney decline often begins long before symptoms appear. Because kidneys filter toxins and regulate hydration, even modest
            impairment shortens lifespan. Early detection dramatically improves outcomes.
          </p>

          <ul className="list-disc pl-5 mb-4">
            <li>SDMA is an early indicator of filtration quality.</li>
            <li>Weight loss, increased thirst, and diluted urine are late-stage signs.</li>
            <li>Dietary management slows progression and reduces toxin buildup.</li>
          </ul>

          <p className="mb-4">
            Early screening at senior age is essential because kidney disease often progresses quietly.
          </p>
        </section>

        {/* Section: Heart Disease */}
        <section id="heart" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Heart Disease and Longevity</h2>
          <p className="mb-4">
            Heart disease, especially mitral valve disease in small breeds and dilated cardiomyopathy in medium-to-large breeds,
            reduces lifespan by limiting oxygen delivery and increasing cardiac workload.
          </p>

          <ul className="list-disc pl-5 mb-4">
            <li>Coughing, exercise intolerance, and breathing changes are key signs.</li>
            <li>Early diagnosis allows for medications that slow disease progression.</li>
            <li>Weight control and controlled exercise improve outcomes.</li>
          </ul>

          <p className="mb-4">
            Routine cardiac listening exams during wellness visits are one of the simplest forms of early detection.
          </p>
        </section>

        {/* Section: Inflammation */}
        <section id="inflammation" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">How Chronic Inflammation Accelerates Ageing</h2>
          <p className="mb-4">
            Inflammaging—chronic low-level inflammation—drives many conditions that shorten canine lifespan. It increases cancer risk,
            worsens metabolic disease, accelerates joint degeneration, and impairs immune function.
          </p>

          <ul className="list-disc pl-5 mb-4">
            <li>Obesity is the most common contributor.</li>
            <li>Poor dental health significantly increases inflammatory load.</li>
            <li>Environmental toxins can amplify systemic inflammation.</li>
          </ul>

          <p className="mb-4">
            Anti-inflammatory diets, omega-3 supplementation, and weight control reduce inflammaging and extend healthspan.
          </p>
        </section>

        {/* Section: Modifiable vs Genetic */}
        <section id="modifiable" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Modifiable vs. Genetic Risk Factors</h2>
          <p className="mb-4">
            While some diseases are influenced by genetics, many of the most lifespan-shortening conditions are primarily modifiable.
            Even in genetically predisposed breeds, lifestyle can significantly shift disease onset.
          </p>

          <ul className="list-disc pl-5 mb-4">
            <li><strong>Modifiable:</strong> weight, dental care, diet quality, exercise routine, environmental exposure.</li>
            <li><strong>Genetic:</strong> heart disease risk, certain cancers, breed-specific metabolic tendencies.</li>
          </ul>

          <p className="mb-4">
            Owners cannot change breed predisposition, but they can change how strongly those genes are expressed by controlling
            environmental and metabolic conditions.
          </p>
        </section>

        {/* Section: Longevity Habits */}
        <section id="habits" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Disease-Specific Longevity Habits Owners Can Implement</h2>
          <p className="mb-4">
            Practical, daily habits reduce risk and slow progression of the most common lifespan-shortening conditions.
          </p>

          <ul className="list-disc pl-5 mb-4">
            <li>Maintain lean body condition through portion control and structured exercise.</li>
            <li>Brush teeth daily and schedule annual cleanings.</li>
            <li>Incorporate omega-3s and anti-inflammatory foods.</li>
            <li>Monitor mobility and begin joint support early.</li>
            <li>Provide regular veterinary bloodwork for early detection.</li>
            <li>Limit toxin exposure: smoke, chemicals, and contaminated surfaces.</li>
          </ul>

          <p className="mb-4">
            These simple interventions compound over time, supporting healthier ageing across multiple systems.
          </p>
        </section>

        {/* Internal Backlinks */}
        <section className="mb-8">
          <p className="mb-4">For more longevity strategies, explore:</p>
          <ul className="list-disc pl-5 mb-4">
            <li>
              <Link href={`/${locale}/blog/dog-weight-and-lifespan-data-analysis`} className="underline">
                How Weight Impacts Lifespan (Lean Dogs Live Longer)
              </Link>
            </li>
            <li>
              <Link href={`/${locale}/blog/dog-ageing-science-cellular-pathways`} className="underline">
                Cellular Pathways That Drive Ageing
              </Link>
            </li>
          </ul>
        </section>

        {/* Conclusion */}
        <section id="conclusion" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Conclusion</h2>
          <p className="mb-4">
            While some diseases are unavoidable, many of the conditions that shorten canine lifespan can be delayed, slowed, or
            significantly improved through early detection and daily lifestyle choices. By reducing inflammation, maintaining ideal body
            condition, prioritizing dental and mobility health, and monitoring internal organ function, owners can meaningfully extend
            their dog&apos;s healthy years.
          </p>
        </section>

        {/* Sources */}
        <section id="sources" className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">📚 Sources (Selected)</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            <li>Kealy RD et al. Lifespan and body condition in dogs. J Am Vet Med Assoc.</li>
            <li>Brown DC. Osteoarthritis and canine mobility. Vet J.</li>
            <li>Holmes MA. Dental disease and systemic inflammation. Vet Clin Small Anim.</li>
            <li>Kidney biomarkers and ageing. J Vet Intern Med.</li>
            <li>Heart disease prevalence in dogs. J Vet Cardiol.</li>
            <li>Inflammaging and metabolic decline. Cell Metab.</li>
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
