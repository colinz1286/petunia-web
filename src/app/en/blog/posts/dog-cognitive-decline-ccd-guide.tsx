'use client';

import Head from 'next/head';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function DogCognitiveDeclineCCDGuide() {
  const locale = useLocale();

  const title =
    'Understanding Dog Cognitive Decline: Early Symptoms, Science-Based Interventions, and Quality-of-Life Planning';
  const date = 'November 28, 2025';
  const description =
    'A veterinarian-supported guide explaining canine cognitive dysfunction (CCD), early symptoms, environmental and nutritional interventions, enrichment plans, sensory decline differentiation, and long-term quality-of-life planning.';

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
        <p className="text-sm text-gray-600 mb-2">Posted on {date}</p>

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
            <li><a href="#what" className="underline hover:opacity-80">What CCD Actually Is</a></li>
            <li><a href="#early" className="underline hover:opacity-80">5 Early Behavioral Signs</a></li>
            <li><a href="#environment" className="underline hover:opacity-80">Sleep, Stress & Environment</a></li>
            <li><a href="#interventions" className="underline hover:opacity-80">Evidence-Based Interventions</a></li>
            <li><a href="#design" className="underline hover:opacity-80">Environmental Design</a></li>
            <li><a href="#sensory" className="underline hover:opacity-80">CCD vs Sensory Decline</a></li>
            <li><a href="#planning" className="underline hover:opacity-80">Long-Term Planning</a></li>
            <li><a href="#conclusion" className="underline hover:opacity-80">Conclusion</a></li>
            <li><a href="#sources" className="underline hover:opacity-80">Sources</a></li>
          </ul>
        </nav>

        {/* TL;DR */}
        <section id="tldr" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Short Answer (TL;DR)</h2>
          <p className="mb-4">
            Cognitive decline in dogs is caused by brain ageing, inflammation, oxidative stress, and neural pathway breakdown. Early
            symptoms are subtle: nighttime restlessness, altered interaction, confusion, pacing, and house soiling. Evidence-based
            interventions—omega-3s, antioxidants, structured enrichment, stable routines, and supportive environments—slow progression
            and protect quality of life. Differentiating CCD from hearing or vision loss is essential for appropriate care planning.
          </p>
        </section>

        {/* Section 1 — What CCD Is */}
        <section id="what" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">What Canine Cognitive Dysfunction (CCD) Actually Is</h2>
          <p className="mb-4">
            Canine cognitive dysfunction is a neurodegenerative condition similar to early dementia in humans. It results from changes
            in brain structure and function, including oxidative stress, beta-amyloid accumulation, inflammation, and neuronal loss.
          </p>

          <p className="mb-4">
            CCD affects memory, learning, spatial awareness, sleep-wake cycles, and social interaction. It is progressive but
            manageable when caught early.
          </p>
        </section>

        {/* Section 2 — Early Signs */}
        <section id="early" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">The 5 Early Behavioral Signs Owners Commonly Miss</h2>
          <p className="mb-4">
            Cognitive decline begins subtly. Owners often misinterpret early symptoms as quirks or normal ageing, delaying diagnosis.
          </p>

          <ul className="list-disc pl-5 mb-4">
            <li><strong>Nighttime restlessness</strong>: pacing, waking frequently, vocalizing.</li>
            <li><strong>Disorientation</strong>: standing in corners, confusion in familiar spaces.</li>
            <li><strong>Altered social interaction</strong>: increased clinginess or withdrawal.</li>
            <li><strong>House soiling</strong>: forgetting trained behaviors.</li>
            <li><strong>Changes in activity</strong>: reduced engagement in play or enrichment.</li>
          </ul>

          <p className="mb-4">
            When these changes appear suddenly or gradually worsen, early intervention provides the best outcome.
          </p>
        </section>

        {/* Section 3 — Sleep, Stress, Environment */}
        <section id="environment" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">How Sleep, Stress, and Environment Affect Cognition</h2>
          <p className="mb-4">
            Sleep quality profoundly influences brain ageing. Inadequate or disrupted sleep increases oxidative stress and impairs
            memory consolidation. Stress hormones, especially cortisol, damage neural tissue and accelerate cognitive decline.
          </p>

          <ul className="list-disc pl-5 mb-4">
            <li>Predictable routines lower stress and improve memory.</li>
            <li>Quiet nighttime environments reduce awakenings.</li>
            <li>Olfactory enrichment promotes calm neuroplastic activity.</li>
            <li>Bright lighting during the day supports circadian rhythm.</li>
          </ul>

          <p className="mb-4">
            A stable environment reduces cognitive load and helps aging dogs conserve mental energy.
          </p>
        </section>

        {/* Section 4 — Interventions */}
        <section id="interventions" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Evidence-Supported Interventions to Slow Cognitive Decline</h2>
          <p className="mb-4">
            Multiple therapies demonstrate measurable benefit for ageing cognition. Most are non-invasive and can be used together for
            synergistic improvements.
          </p>

          <ul className="list-disc pl-5 mb-4">
            <li><strong>Omega-3 fatty acids (EPA, DHA)</strong>: improve neuronal membrane fluidity and reduce inflammation.</li>
            <li><strong>Antioxidants</strong>: vitamin E, vitamin C, and polyphenols combat oxidative stress.</li>
            <li><strong>Enrichment plans</strong>: puzzle feeders, scent games, structured tasks increase neuroplasticity.</li>
            <li><strong>Routine-based cognitive support</strong>: predictable feeding and walking times reduce confusion.</li>
            <li><strong>Low-stress environments</strong>: reduce cortisol, improving cognitive resilience.</li>
          </ul>

          <p className="mb-4">
            These interventions align closely with senior-dog longevity strategies and often improve behavior within weeks.
          </p>
        </section>

        {/* Section 5 — Environmental Design */}
        <section id="design" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Environmental Design for Safe, Calm Senior Living</h2>
          <p className="mb-4">
            Dogs with cognitive decline rely on consistent environmental structure. Simple changes prevent confusion, reduce fall risk,
            and improve emotional wellbeing.
          </p>

          <ul className="list-disc pl-5 mb-4">
            <li>Use non-slip mats to prevent hesitancy and slipping.</li>
            <li>Place night lights in hallways to reduce nighttime disorientation.</li>
            <li>Keep furniture layouts consistent to support spatial memory.</li>
            <li>Create quiet resting zones for uninterrupted sleep.</li>
          </ul>

          <p className="mb-4">
            These changes help dogs feel secure and confident in day-to-day routines.
          </p>
        </section>

        {/* Section 6 — CCD vs Sensory Decline */}
        <section id="sensory" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">How to Distinguish CCD from Sensory Decline</h2>
          <p className="mb-4">
            Hearing loss, vision decline, and CCD share overlapping signs. Understanding the differences helps owners seek the right
            veterinary evaluation.
          </p>

          <ul className="list-disc pl-5 mb-4">
            <li><strong>Sensory loss</strong>: dogs navigate spaces well but may not respond to cues.</li>
            <li><strong>CCD</strong>: dogs become disoriented in familiar environments.</li>
            <li><strong>Sensory decline</strong>: behavior is consistent but less responsive.</li>
            <li><strong>CCD</strong>: behavior fluctuates, with confusion and pacing.</li>
          </ul>

          <p className="mb-4">
            Many senior dogs experience both simultaneously, requiring a combined sensory and cognitive care plan.
          </p>
        </section>

        {/* Section 7 — Long-Term Planning */}
        <section id="planning" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Long-Term Planning and Humane Considerations</h2>
          <p className="mb-4">
            Cognitive decline progresses at different rates. Long-term planning helps ensure comfort, safety, and family understanding.
            Humane considerations become important when confusion, anxiety, or nighttime restlessness significantly impacts wellbeing.
          </p>

          <ul className="list-disc pl-5 mb-4">
            <li>Schedule predictable daily routines to reduce stress.</li>
            <li>Use mobility aids as needed for nighttime navigation.</li>
            <li>Discuss medication options with a veterinarian early.</li>
            <li>Assess quality of life regularly using senior-wellness scoring tools.</li>
          </ul>

          <p className="mb-4">
            Compassion, structure, and proactive care form the foundation of humane cognitive support.
          </p>
        </section>

        {/* Internal Backlinks */}
        <section className="mb-8">
          <p className="mb-4">For more senior-dog longevity tools, explore:</p>
          <ul className="list-disc pl-5 mb-4">
            <li>
              <Link href={`/${locale}/blog/senior-dog-screening-guide-2026`} className="underline">
                Senior Dog Screening Guide (2026)
              </Link>
            </li>
            <li>
              <Link href={`/${locale}/blog/dog-mobility-and-joint-preservation`} className="underline">
                Mobility and Joint Preservation
              </Link>
            </li>
          </ul>
        </section>

        {/* Conclusion */}
        <section id="conclusion" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Conclusion</h2>
          <p className="mb-4">
            Cognitive decline is a natural part of ageing, but early detection and supportive interventions greatly improve comfort
            and longevity. Through structured enrichment, nutritional support, routine stability, and clear differentiation between
            cognitive and sensory loss, owners can help their dogs maintain confidence, dignity, and quality of life well into their
            senior years.
          </p>
        </section>

        {/* Sources */}
        <section id="sources" className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">📚 Sources (Selected)</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            <li>Landsberg GM. Canine cognitive dysfunction syndrome. Vet Clin Small Anim Pract.</li>
            <li>Overall K. Cognitive enrichment for ageing dogs. Appl Anim Behav Sci.</li>
            <li>Dog Ageing Project. Cognitive ageing findings.</li>
            <li>Antioxidant therapy in canine neurology. J Vet Intern Med.</li>
            <li>Sensory decline differentiation in senior dogs. Vet Ophthalmol.</li>
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
