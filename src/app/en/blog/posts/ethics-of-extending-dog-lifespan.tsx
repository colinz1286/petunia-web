'use client';

import Head from 'next/head';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function EthicsOfExtendingDogLifespan() {
  const locale = useLocale();

  const title =
    'The Ethics of Extending Canine Lifespan: Owner Expectations, Quality of Life, and the Future of Ageing Science';
  const date = 'December 4, 2025';
  const description =
    'An in-depth exploration of the ethical questions surrounding canine lifespan extension, including owner expectations, quality-of-life considerations, veterinary counseling, accessibility challenges, and humane decision-making in the era of longevity medicine.';

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
              {categoryLabels[cat]}
            </span>
          ))}
        </div>

        {/* Table of Contents */}
        <nav className="mb-8 text-sm">
          <ul className="flex flex-wrap gap-4">
            <li><a href="#tldr" className="underline hover:opacity-80">TL;DR</a></li>
            <li><a href="#ethics" className="underline hover:opacity-80">Ethical Considerations</a></li>
            <li><a href="#balance" className="underline hover:opacity-80">Balancing Longevity & Quality of Life</a></li>
            <li><a href="#expectations" className="underline hover:opacity-80">Owner Expectations vs Science</a></li>
            <li><a href="#vets" className="underline hover:opacity-80">Veterinary Counseling Approaches</a></li>
            <li><a href="#access" className="underline hover:opacity-80">Accessibility, Affordability & Misuse Concerns</a></li>
            <li><a href="#decisions" className="underline hover:opacity-80">Humane Decision-Making</a></li>
            <li><a href="#conclusion" className="underline hover:opacity-80">Conclusion</a></li>
            <li><a href="#sources" className="underline hover:opacity-80">Sources</a></li>
          </ul>
        </nav>

        {/* TL;DR */}
        <section id="tldr" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Short Answer (TL;DR)</h2>
          <p className="mb-4">
            Extending a dog&apos;s lifespan raises important ethical questions about quality of life, accessibility, and owner
            expectations. Longevity science can improve healthspan, but only when applied humanely and realistically. Veterinarians
            will play a crucial role in guiding decisions, preventing misuse, and ensuring extended lifespan does not lead to extended
            suffering. Compassionate, individualized planning remains the foundation of ethical longevity care.
          </p>
        </section>

        {/* Section 1 — Ethical Considerations */}
        <section id="ethics" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Ethical Considerations of Lifespan Extension</h2>
          <p className="mb-4">
            As longevity-focused drugs and therapies emerge, the ethical landscape becomes more complex. Dogs cannot articulate
            consent, and owners must interpret wellbeing on their behalf. Extending lifespan is not inherently ethical unless comfort,
            dignity, and enjoyment remain intact.
          </p>

          <ul className="list-disc pl-5 mb-4">
            <li>Is prolonging life always beneficial?</li>
            <li>Could extending lifespan increase the period of disability?</li>
            <li>Will longevity treatments deepen inequities between households?</li>
            <li>How do we prevent prolonging suffering in the name of science?</li>
          </ul>

          <p className="mb-4">
            These questions must frame how families and veterinarians approach future longevity tools.
          </p>
        </section>

        {/* Section 2 — Balancing Longevity & Quality of Life */}
        <section id="balance" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Balancing Longevity With Quality of Life</h2>
          <p className="mb-4">
            Extending life is meaningful only if those added years preserve mobility, emotional stability, pain control, sensory
            comfort, and cognitive clarity. Healthspan—not lifespan alone—must remain the North Star of longevity medicine.
          </p>

          <ul className="list-disc pl-5 mb-4">
            <li>Pain-free movement must be prioritized above lifespan goals.</li>
            <li>Cognitive health and sleep quality strongly influence wellbeing.</li>
            <li>Anxiety, fear, and confusion reduce the value of extended years.</li>
            <li>Owners should regularly evaluate quality-of-life scorecards.</li>
          </ul>

          <p className="mb-4">
            Ethical longevity requires evaluating not just length of life, but depth of comfort.
          </p>
        </section>

        {/* Section 3 — Expectations */}
        <section id="expectations" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">What Owners Expect vs. What Science Can Deliver</h2>
          <p className="mb-4">
            Longevity treatments may create unrealistic expectations if owners assume lifespan can be extended indefinitely. Even as
            new therapies improve healthspan, biological ageing cannot be eliminated—and chronic diseases will still occur.
          </p>

          <ul className="list-disc pl-5 mb-4">
            <li>Longevity drugs may slow decline but cannot reverse all ageing.</li>
            <li>Not every dog will respond the same way.</li>
            <li>Genetic predispositions will still influence outcomes.</li>
            <li>Therapies require long-term consistency, not one-time fixes.</li>
          </ul>

          <p className="mb-4">
            Clear communication prevents disappointment and ensures humane decision-making.
          </p>
        </section>

        {/* Section 4 — Veterinary Counseling */}
        <section id="vets" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">How Veterinarians May Counsel Owners as Longevity Drugs Emerge</h2>
          <p className="mb-4">
            Veterinarians will become central interpreters of longevity science. As therapies emerge—such as LOY-002 and senolytic
            candidates—veterinarians must help families navigate realistic outcomes, risks, and timing.
          </p>

          <ul className="list-disc pl-5 mb-4">
            <li>Setting expectations about what treatments can and cannot achieve.</li>
            <li>Identifying when interventions slow ageing vs. prolong suffering.</li>
            <li>Advising on affordability and treatment prioritization.</li>
            <li>Monitoring quality of life throughout extended lifespan.</li>
          </ul>

          <p className="mb-4">
            Veterinary guidance ensures treatments are ethical, appropriate, and supportive—not burdensome.
          </p>
        </section>

        {/* Section 5 — Accessibility & Misuse */}
        <section id="access" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Concerns About Accessibility, Affordability, and Misuse</h2>
          <p className="mb-4">
            As longevity medicine evolves, disparity in access may increase. Some households will have the means to pursue advanced
            therapies, while others may struggle with cost or availability.
          </p>

          <ul className="list-disc pl-5 mb-4">
            <li>High cost may limit access to wealthy demographics only.</li>
            <li>Unregulated markets could sell unsafe or ineffective products.</li>
            <li>Some owners may push for extended life at the cost of comfort.</li>
            <li>Veterinary burnout may worsen as ethical conflicts increase.</li>
          </ul>

          <p className="mb-4">
            Ethical frameworks must evolve alongside longevity science to prevent misuse and inequity.
          </p>
        </section>

        {/* Section 6 — Humane Decision-Making */}
        <section id="decisions" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">How to Make Humane Decisions in the Context of Extended Lifespan</h2>
          <p className="mb-4">
            Humane decision-making requires balancing emotional attachment with the animal&apos;s physical and emotional wellbeing. Even
            with access to longevity treatments, there will be moments when comfort outweighs extension.
          </p>

          <ul className="list-disc pl-5 mb-4">
            <li>Use quality-of-life scales regularly—not only during crises.</li>
            <li>Recognize signs of suffering: pacing, confusion, pain, withdrawal.</li>
            <li>Discuss hospice approaches early, not reactively.</li>
            <li>Accept that peaceful transitions may remain the most compassionate choice.</li>
          </ul>

          <p className="mb-4">
            The goal is not the longest life possible—but the most comfortable life possible.
          </p>
        </section>

        {/* Backlinks */}
        <section className="mb-8">
          <p className="mb-4">For related longevity science, explore:</p>
          <ul className="list-disc pl-5 mb-4">
            <li>
              <Link href={`/${locale}/blog/future-of-dog-longevity-medicine`} className="underline">
                The Future of Veterinary Longevity Medicine
              </Link>
            </li>
            <li>
              <Link href={`/${locale}/blog/dog-ageing-science-cellular-pathways`} className="underline">
                How Dog Ageing Actually Works
              </Link>
            </li>
          </ul>
        </section>

        {/* Conclusion */}
        <section id="conclusion" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Conclusion</h2>
          <p className="mb-4">
            Extending canine lifespan is an exciting frontier—but one that requires thoughtful ethical consideration. When guided by
            veterinarians, grounded in realistic expectations, and centred on the dog&apos;s wellbeing, longevity science can improve the
            final years of life rather than simply prolonging them. Ethical longevity prioritizes comfort, dignity, and compassion at
            every stage.
          </p>
        </section>

        {/* Sources */}
        <section id="sources" className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">📚 Sources (Selected)</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            <li>Veterinary ethics of lifespan extension. Vet Clin Small Anim Pract.</li>
            <li>Dog Ageing Project. Quality-of-life determinants in senior dogs.</li>
            <li>Greer KA. Ethical considerations in companion-animal longevity science.</li>
            <li>Metabolic and cognitive ageing processes. Cell Metab.</li>
            <li>Access disparities in emerging veterinary therapeutics. J Vet Med Educ.</li>
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
