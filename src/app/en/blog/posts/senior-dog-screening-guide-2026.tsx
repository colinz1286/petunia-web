'use client';

import Head from 'next/head';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function SeniorDogScreeningGuide2026() {
  const locale = useLocale();

  const title =
    'Senior Dog Screening Guide (2026): Bloodwork, Mobility Tests, Cognitive Assessments, Early Detection';
  const date = 'November 24, 2025';
  const description =
    'A veterinarian-backed 2026 guide to senior dog screenings, including bloodwork, mobility exams, cognitive assessments, early-detection red flags, and what owners should prioritize for healthy ageing.';
  const slug = 'senior-dog-screening-guide-2026';

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

        {/* Category pills */}
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
            <li><a href="#when" className="underline hover:opacity-80">When Senior Begins</a></li>
            <li><a href="#bloodwork" className="underline hover:opacity-80">Bloodwork & Screening Markers</a></li>
            <li><a href="#kidney" className="underline hover:opacity-80">Kidney, Liver, Thyroid, Glucose</a></li>
            <li><a href="#mobility" className="underline hover:opacity-80">Mobility & Strength Tests</a></li>
            <li><a href="#cognitive" className="underline hover:opacity-80">Cognitive Assessments</a></li>
            <li><a href="#costs" className="underline hover:opacity-80">Costs & Priorities</a></li>
            <li><a href="#redflags" className="underline hover:opacity-80">Overlooked Early-Detection Red Flags</a></li>
            <li><a href="#conclusion" className="underline hover:opacity-80">Conclusion</a></li>
            <li><a href="#sources" className="underline hover:opacity-80">Sources</a></li>
          </ul>
        </nav>

        {/* TLDR */}
        <section id="tldr" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Short Answer (TL;DR)</h2>
          <p className="mb-4">
            Senior dog screening dramatically improves lifespan and quality of life. Ageing dogs require bloodwork every 6–12 months,
            mobility and gait evaluations, cognitive assessments, and early detection of kidney, liver, thyroid, and metabolic
            diseases. Most conditions caught early can be slowed, stabilized, or treated, making structured screening essential for
            healthy ageing.
          </p>
        </section>

        {/* Section 1 */}
        <section id="when" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">When Does a Dog Become a Senior?</h2>
          <p className="mb-4">
            Senior age varies widely by breed and size. Larger breeds age more quickly due to faster metabolism, rapid growth patterns,
            and higher orthopedic stress. Small breeds age more slowly and may not enter senior status until later in life.
          </p>

          <ul className="list-disc pl-5 mb-4">
            <li>Small breeds (under 20 lbs): senior at 8–10 years.</li>
            <li>Medium breeds (20–50 lbs): senior at 7–9 years.</li>
            <li>Large breeds (50–90 lbs): senior at 6–8 years.</li>
            <li>Giant breeds (90+ lbs): senior at 5–7 years.</li>
          </ul>

          <p className="mb-4">
            These age ranges align with data from the Dog Ageing Project and veterinary gerontology research, which show size as a
            major predictor of biological ageing.
          </p>
        </section>

        {/* Section 2 */}
        <section id="bloodwork" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Blood Panel Intervals and What Each Marker Indicates</h2>
          <p className="mb-4">
            Senior dogs benefit from comprehensive blood panels every 6–12 months. Frequent testing detects metabolic changes long
            before symptoms appear, making early intervention possible.
          </p>

          <ul className="list-disc pl-5 mb-4">
            <li><strong>CBC (Complete Blood Count)</strong>: detects anemia, infection, inflammation, and platelet issues.</li>
            <li><strong>Chemistry Panel</strong>: evaluates organ function, electrolytes, and metabolic markers.</li>
            <li><strong>SDMA</strong>: early kidney filtration marker that signals dysfunction earlier than creatinine.</li>
            <li><strong>T4/Thyroid testing</strong>: screens for hypothyroidism, common in middle-aged and senior dogs.</li>
            <li><strong>Glucose</strong>: reveals insulin resistance, diabetes risk, and metabolic decline.</li>
          </ul>

          <p className="mb-4">
            Routine blood panels provide the most reliable window into unseen physiological changes.
          </p>
        </section>

        {/* Section 3 */}
        <section id="kidney" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Kidney, Liver, Thyroid, Glucose, and Anemia Screening</h2>
          <p className="mb-4">
            Age-related disease often begins in the kidneys, liver, or endocrine system. These conditions progress silently, creating
            irreversible damage before owners notice outward signs.
          </p>

          <ul className="list-disc pl-5 mb-4">
            <li><strong>Kidney screening</strong>: SDMA, BUN, creatinine, urine concentration.</li>
            <li><strong>Liver screening</strong>: ALT, ALP, bilirubin, protein levels.</li>
            <li><strong>Thyroid</strong>: T4 or complete thyroid panel for accurate ageing evaluation.</li>
            <li><strong>Blood glucose</strong>: detects insulin resistance and diabetes risk.</li>
            <li><strong>Anemia testing</strong>: assesses red cell mass, common in chronic disease.</li>
          </ul>

          <p className="mb-4">
            These markers help veterinarians intervene early, preserving quality of life and slowing disease progression.
          </p>
        </section>

        {/* Section 4 */}
        <section id="mobility" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Geriatric Mobility Tests: Stairs, Grip Strength, Gait, and Balance</h2>
          <p className="mb-4">
            Mobility decline is one of the strongest predictors of reduced lifespan. Early orthopedic screening identifies joint
            changes, muscular weakness, and neurological issues before they worsen.
          </p>

          <ul className="list-disc pl-5 mb-4">
            <li><strong>Stair testing</strong>: evaluates strength and joint comfort.</li>
            <li><strong>Grip strength</strong>: identifies muscle loss and age-related frailty.</li>
            <li><strong>Gait analysis</strong>: assesses stride symmetry, speed, and stability.</li>
            <li><strong>Balance tests</strong>: detect neurological or vestibular decline.</li>
          </ul>

          <p className="mb-4">
            These tests form the basis of mobility preservation, which correlates strongly with long-term survival.
          </p>
        </section>

        {/* Section 5 */}
        <section id="cognitive" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Cognitive Health Checks for Early Detection</h2>
          <p className="mb-4">
            Canine cognitive dysfunction (CCD) mirrors early dementia in humans and often begins subtly. Early cognitive assessment
            allows owners to adjust routines and implement enrichment that slows decline.
          </p>

          <ul className="list-disc pl-5 mb-4">
            <li>Changes in sleep patterns.</li>
            <li>Difficulty navigating familiar spaces.</li>
            <li>Altered social interaction.</li>
            <li>Increased vocalization or pacing at night.</li>
            <li>Reduced interest in enrichment activities.</li>
          </ul>

          <p className="mb-4">
            Olfactory enrichment, slow-paced sniff walks, and daily cognitive training improve neuroplasticity and emotional stability.
          </p>
        </section>

        {/* Section 6 */}
        <section id="costs" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Cost Expectations and What Owners Should Prioritize</h2>
          <p className="mb-4">
            Senior screening costs vary based on region and veterinary practice. Most owners spend between $150 and $350 per screening
            visit. Priorities should focus on blood panels, urinalysis, and mobility evaluation.
          </p>

          <ul className="list-disc pl-5 mb-4">
            <li>Blood panels: $120–$200 depending on depth.</li>
            <li>Urinalysis: $30–$60.</li>
            <li>Mobility evaluation: $50–$120 (varies).</li>
            <li>Cognitive assessment: often included during senior wellness visits.</li>
          </ul>

          <p className="mb-4">
            Regular screening prevents costly emergencies and improves long-term wellbeing.
          </p>
        </section>

        {/* Section 7 */}
        <section id="redflags" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Early-Detection Red Flags Owners Often Miss</h2>
          <p className="mb-4">
            Many age-related conditions progress silently. Owners commonly overlook red flags because the changes appear gradual or
            subtle. Recognizing them early makes treatment more effective.
          </p>

          <ul className="list-disc pl-5 mb-4">
            <li>Increased water intake or urination (kidney, endocrine issues).</li>
            <li>Reluctance to jump or climb stairs (orthopedic decline).</li>
            <li>Weight gain without calorie changes (thyroid or metabolic disease).</li>
            <li>Change in breath odor (dental disease or systemic illness).</li>
            <li>Nighttime restlessness (cognitive decline).</li>
            <li>Muscle loss along spine or hips (sarcopenia).</li>
          </ul>

          <p className="mb-4">
            The earlier these signs are caught, the more options veterinarians have to slow ageing processes.
          </p>
        </section>

        {/* Internal Backlinks */}
        <section className="mb-8">
          <p className="mb-4">
            For more longevity strategies, explore:
          </p>
          <ul className="list-disc pl-5 mb-4">
            <li>
              <Link href={`/${locale}/blog/dog-ageing-science-cellular-pathways`} className="underline">
                How Dog Ageing Works (Cellular Pathways Explained)
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
            Senior screening is a cornerstone of longevity-focused veterinary care. Early detection provides a powerful advantage,
            allowing owners and veterinarians to intervene long before ageing symptoms become limiting. Regular bloodwork, mobility
            evaluations, cognitive assessments, and proactive monitoring can add years of vitality to a dog&apos;s life.
          </p>
        </section>

        {/* Sources */}
        <section id="sources" className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">📚 Sources (Selected)</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            <li>Dog Ageing Project. Senior dog biomarker data. Nature.</li>
            <li>AAHA Senior Care Guidelines (2023).</li>
            <li>WSAVA Global Nutrition Committee: Senior screening recommendations.</li>
            <li>Mobility decline and geriatric frailty. J Vet Intern Med.</li>
            <li>Cognitive dysfunction in ageing dogs. Vet Clin North Am Small Anim Pract.</li>
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
