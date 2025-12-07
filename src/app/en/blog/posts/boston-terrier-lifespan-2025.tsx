'use client';

import Head from 'next/head';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function BostonTerrierLifespan2025() {
  const locale = useLocale();

  const title =
    'Boston Terrier Lifespan (2025): Longevity, Leading Health Risks & How to Extend Your Dog’s Life';
  const date = 'November 30, 2025';
  const categories = ['owner', 'breed_specific_guides'] as const;

  const categoryLabels: Record<string, string> = {
    owner: 'Pet Owners',
    boarding: 'Boarding',
    daycare: 'Daycare',
    rescue: 'Rescues',
    vet: 'Veterinary Clinics',
    sitter: 'Pet Sitters',
    walker: 'Dog Walkers',
    breeder: 'Breeders',
    breed_specific_guides: 'Breed Specific Guides'
  };

  const description =
    'A complete 2025 guide to Boston Terrier lifespan, including average longevity, genetic and lifestyle factors, leading causes of death, senior health screenings, preventive care strategies, and the behavioral changes seen in aging dogs.';

  return (
    <>
      <Head>
        <title>{title} – Petunia Blog</title>
        <meta name="description" content={description} />
        <meta name="robots" content="all" />
        <link
          rel="canonical"
          href={`https://www.petuniapets.com/${locale}/blog/boston-terrier-lifespan-2025`}
        />
      </Head>

      <main className="max-w-3xl mx-auto px-4 py-10 text-[#2c4a30]">

        {/* Meta */}
        <p className="text-sm text-gray-500 mb-2">Posted on {date}</p>
        <h1 className="text-3xl font-bold mb-4">{title}</h1>

        {/* Category Pills */}
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

        {/* Navigation */}
        <nav className="mb-8 text-sm">
          <ul className="flex flex-wrap gap-3">
            <li><a href="#tldr" className="underline hover:opacity-80">TL;DR</a></li>
            <li><a href="#ranges" className="underline hover:opacity-80">Lifespan Ranges</a></li>
            <li><a href="#influences" className="underline hover:opacity-80">Genetics vs Lifestyle</a></li>
            <li><a href="#causes" className="underline hover:opacity-80">Leading Causes of Death</a></li>
            <li><a href="#extend" className="underline hover:opacity-80">How to Extend Lifespan</a></li>
            <li><a href="#screens" className="underline hover:opacity-80">Senior Health Screens</a></li>
            <li><a href="#behavior" className="underline hover:opacity-80">Behavioral Changes in Seniors</a></li>
            <li><a href="#references" className="underline hover:opacity-80">📚 References</a></li>
          </ul>
        </nav>

        {/* TLDR */}
        <section id="tldr" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Short Answer (TL;DR)</h2>
          <p className="mb-4">
            Boston Terriers typically live **11–15 years**, though many exceed this with great preventive care. Genetics,
            diet, weight control, exercise, and regular veterinary screenings strongly influence lifespan. Leading causes
            of death include cancer, heart disease, neurological conditions, and age-related decline. You can extend your
            dog’s lifespan through routine vet visits, high-quality nutrition, and early detection of health problems.
          </p>

          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Key takeaway:</strong> Longevity is not luck—it’s the product of genetics, daily habits, and
            proactive health monitoring.
          </div>
        </section>

        {/* LIFESPAN RANGES */}
        <section id="ranges" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Average Lifespan Ranges & Contributing Factors</h2>
          <p className="mb-4">
            The average lifespan of a Boston Terrier falls between **11 and 15 years**, with many living well into their
            teens. Small breeds tend to live longer than large breeds, and Boston Terriers benefit from their moderate size.
          </p>

          <p className="mb-3">
            Dogs who maintain a lean body weight and receive consistent preventive care often live much longer than
            their breed average.
          </p>

          <p className="text-sm text-gray-700">
            Senior care strategies for maximizing lifespan discussed in:{' '}
            <Link
              href="/en/blog/senior-boston-terrier-care-2025"
              className="underline hover:opacity-80"
            >
              Senior Boston Terrier Care
            </Link>.
          </p>
        </section>

        {/* GENETICS VS LIFESTYLE */}
        <section id="influences" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Genetics vs Lifestyle: What Affects Longevity Most?</h2>
          <p className="mb-4">
            Genetics set the foundation for lifespan, but **lifestyle determines whether a dog reaches their potential**.
          </p>

          <h3 className="font-semibold mb-2">Genetic Influences</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Family history of cancer or heart disease</li>
            <li>Inherited neurological conditions (e.g., epilepsy)</li>
            <li>Structural traits affecting breathing and mobility</li>
          </ul>

          <h3 className="font-semibold mb-2">Lifestyle Influences</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Diet quality and portion consistency</li>
            <li>Healthy body weight throughout adulthood</li>
            <li>Regular exercise adapted to the dog’s age</li>
            <li>Dental care and routine checkups</li>
            <li>Low-stress home environment</li>
          </ul>

          <p className="text-sm text-gray-700">
            Diet and metabolic health details in:{' '}
            <Link
              href="/en/blog/boston-terrier-diet-guide-2025"
              className="underline hover:opacity-80"
            >
              Boston Terrier Diet Guide
            </Link>.
          </p>
        </section>

        {/* LEADING CAUSES */}
        <section id="causes" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Leading Causes of Death in the Breed</h2>
          <p className="mb-4">
            The most common causes of death in Boston Terriers vary by age group but often include:
          </p>

          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>Cancer:</strong> lymphoma, mast cell tumors, and other malignancies</li>
            <li><strong>Heart disease:</strong> congestive heart failure, valve disorders</li>
            <li><strong>Neurological issues:</strong> seizures, brain tumors</li>
            <li><strong>Respiratory decline:</strong> complications from BOAS or age-related airway stiffness</li>
            <li><strong>Organ failure:</strong> kidney or liver decline in advanced age</li>
          </ul>

          <p className="text-sm text-gray-700">
            Neurological concerns discussed here:{' '}
            <Link
              href="/en/blog/are-boston-terriers-prone-to-seizures-2025"
              className="underline hover:opacity-80"
            >
              Boston Terrier Seizure Risk
            </Link>.
          </p>
        </section>

        {/* EXTEND LIFESPAN */}
        <section id="extend" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">How to Extend Your Boston Terrier’s Lifespan</h2>
          <p className="mb-4">
            You can meaningfully increase your Boston Terrier’s lifespan by making proactive choices throughout life.
          </p>

          <h3 className="font-semibold mb-2">Key Longevity Strategies</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Maintain a healthy weight to reduce heart and joint stress</li>
            <li>Feed balanced, high-quality food appropriate for age</li>
            <li>Schedule annual (or semi-annual) veterinary exams</li>
            <li>Monitor breathing, mobility, and energy changes closely</li>
            <li>Brush teeth regularly or use dental chews</li>
            <li>Keep exercise low-impact during hot or cold weather</li>
          </ul>

          <p className="text-sm text-gray-700">
            Cold and heat safety matter for lifespan. Compare:{' '}
            <Link
              href="/en/blog/do-boston-terriers-get-cold-easily-2025"
              className="underline hover:opacity-80"
            >
              Cold Sensitivity
            </Link>{' '}
            and{' '}
            <Link
              href="/en/blog/boston-terrier-heat-sensitivity-2025"
              className="underline hover:opacity-80"
            >
              Heat Sensitivity
            </Link>.
          </p>
        </section>

        {/* SENIOR SCREENS */}
        <section id="screens" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Senior Health Screens & Early Detection</h2>
          <p className="mb-4">
            Early detection dramatically improves long-term outcomes. Starting around age 7–8, Boston Terriers should 
            receive expanded senior exams.
          </p>

          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Bloodwork (CBC + chemistry panel)</li>
            <li>Urinalysis and kidney screening</li>
            <li>Heart disease screening (x-rays or echocardiogram)</li>
            <li>Eye exams for cataracts and ulcers</li>
            <li>Neurological checks for early cognitive decline</li>
          </ul>

          <p className="text-sm text-gray-700">
            Senior care guidance here:{' '}
            <Link
              href="/en/blog/senior-boston-terrier-care-2025"
              className="underline hover:opacity-80"
            >
              Senior Boston Terrier Care
            </Link>.
          </p>
        </section>

        {/* BEHAVIORAL CHANGES */}
        <section id="behavior" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Behavioral Changes to Expect in Aging Boston Terriers</h2>
          <p className="mb-4">
            As Boston Terriers age, behavioral and emotional shifts often occur gradually. Awareness helps owners respond 
            with compassion and appropriate support.
          </p>

          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Increased clinginess or separation anxiety</li>
            <li>Reduced tolerance for intense activity</li>
            <li>Changes in sleep-wake cycles</li>
            <li>More vocalizing, especially at night</li>
            <li>Decreased interest in toys or long walks</li>
            <li>Confusion or disorientation in advanced senior years</li>
          </ul>

          <p className="text-sm text-gray-700">
            Cognitive decline and senior behaviors discussed in:{' '}
            <Link
              href="/en/blog/senior-boston-terrier-care-2025"
              className="underline hover:opacity-80"
            >
              Senior Boston Terrier Care
            </Link>.
          </p>
        </section>

        {/* REFERENCES */}
        <section id="references" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">📚 References</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            <li>Breed lifespan studies (AKC, veterinary epidemiology)</li>
            <li>Geriatric canine care guidelines</li>
            <li>Preventive medicine and wellness research</li>
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
