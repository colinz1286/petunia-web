'use client';

import Head from 'next/head';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function ExtendingGreatDaneLifespan2025() {
  const locale = useLocale();

  const title =
    'Extending the Life of Your Great Dane: Proven Strategies for a Healthier Giant Breed';
  const date = 'October 21, 2025';
  const categories = ['owner', 'breed_specific_guides'] as const;

  const categoryLabels: Record<string, string> = {
    owner: 'Pet Owners',
    breed_specific_guides: 'Breed-Specific Guides',
    vet: 'Veterinary Clinics',
    boarding: 'Boarding',
    daycare: 'Daycare',
    rescue: 'Rescues',
  };

  const description =
    'Learn research-based ways to extend a Great Dane’s lifespan, including weight management, exercise, sleep quality, gut health, and preventive veterinary care.';

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    datePublished: date,
    dateModified: date,
    author: { '@type': 'Organization', name: 'Petunia Pets' },
    publisher: { '@type': 'Organization', name: 'Petunia Pets' },
    description,
    image: `https://cdn.petuniapets.com/blog/extending-great-dane-lifespan-2025.jpg`,
  };

  return (
    <>
      <Head>
        <title>{title} – Petunia Blog</title>
        <meta name="description" content={description} />
        <meta name="robots" content="all" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>

      <main className="max-w-3xl mx-auto px-4 py-10 text-[#2c4a30]">
        {/* Meta */}
        <p className="text-sm text-gray-500 mb-2">Written on {date}</p>
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

        {/* Local nav */}
        <nav className="mb-8 text-sm">
          <ul className="flex flex-wrap gap-3">
            <li><a href="#tldr" className="underline hover:opacity-80">TL;DR</a></li>
            <li><a href="#introduction" className="underline hover:opacity-80">Introduction</a></li>
            <li><a href="#weight" className="underline hover:opacity-80">1. Maintain a Healthy Weight</a></li>
            <li><a href="#gut" className="underline hover:opacity-80">2. Protect Digestive and Gut Health</a></li>
            <li><a href="#sleep" className="underline hover:opacity-80">3. Prioritize Sleep & Rest</a></li>
            <li><a href="#screenings" className="underline hover:opacity-80">4. Schedule Lifelong Screenings</a></li>
            <li><a href="#lifestyle" className="underline hover:opacity-80">5. Build a Longevity Lifestyle</a></li>
            <li><a href="#resources" className="underline hover:opacity-80">Resources</a></li>
            <li><a href="#references" className="underline hover:opacity-80">References</a></li>
          </ul>
        </nav>

        {/* TLDR */}
        <section id="tldr" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Short Answer (TL;DR)</h2>
          <p className="mb-4">
            Great Danes live an average of 7–10 years, but studies suggest careful weight control, 
            balanced macronutrient intake, consistent preventive care, and stress reduction can 
            add one to two years—or more—to their lifespan. Supporting muscle strength, digestive health, 
            and joint stability throughout adulthood gives this gentle giant a healthier, longer life.
          </p>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            For more on baseline health and care, read our original article:{' '}
            <Link
              href="https://www.petuniapets.com/en/blog/great-dane-health-lifespan"
              className="underline font-medium"
            >
              Great Dane Health and Lifespan: How to Support a Giant Breed
            </Link>
            .
          </div>
        </section>

        {/* Introduction */}
        <section id="introduction" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Introduction</h2>
          <p className="mb-3">
            Few breeds inspire admiration like the Great Dane. Their calm nature and majestic size 
            make them unforgettable companions—but their lifespan remains one of the shortest in the canine world. 
            Research in veterinary longevity consistently shows that metabolic rate, growth speed, 
            and weight-to-heart ratio all contribute to shorter life expectancy in giant breeds.
          </p>
          <p className="mb-3">
            The encouraging news: environmental and nutritional factors account for a significant portion of that risk. 
            With targeted prevention, Great Dane owners can help their dogs live longer, healthier lives.
          </p>
        </section>

        {/* Weight */}
        <section id="weight" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">1. Maintain a Healthy Weight</h2>
          <p className="mb-3">
            Data from the <i>Journal of Veterinary Internal Medicine</i> show that every additional 
            5–10% body fat above ideal weight increases orthopedic stress and reduces lifespan. 
            Giant breeds are especially sensitive because their skeletons mature quickly but remain 
            under heavy strain throughout adulthood.
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Use a body condition score (BCS) chart to keep visible waistlines and palpable ribs.</li>
            <li>Feed based on lean mass and age-adjusted activity levels, not appetite.</li>
            <li>Opt for slow-growth large-breed formulas with joint-supportive nutrients like glucosamine and MSM.</li>
          </ul>
          <p className="text-sm mt-2">
            Read more: <a href="https://avmajournals.avma.org/view/journals/javma/261/4/javma.23.07.0311.xml" target="_blank" rel="noopener noreferrer" className="underline">AVMA Obesity and Lifespan Study (2024)</a>.
          </p>
        </section>

        {/* Gut */}
        <section id="gut" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">2. Protect Digestive and Gut Health</h2>
          <p className="mb-3">
            Great Danes are prone to gastric dilatation-volvulus (bloat) and microbiome imbalance. 
            Feeding smaller, more frequent meals and minimizing fermentable filler ingredients (like beet pulp 
            and soy hulls) can reduce gastric stress. 
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Divide daily intake into at least two meals.</li>
            <li>Avoid feeding immediately before or after vigorous play.</li>
            <li>Include prebiotics (FOS, MOS) and canine-safe probiotics.</li>
          </ul>
          <p className="text-sm mt-2">
            See: <a href="https://www.frontiersin.org/articles/10.3389/fvets.2024.1503122/full" target="_blank" rel="noopener noreferrer" className="underline">Frontiers in Veterinary Science – Gut Microbiota in Large Breeds (2024)</a>.
          </p>
        </section>

        {/* Sleep */}
        <section id="sleep" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">3. Prioritize Sleep & Rest</h2>
          <p className="mb-3">
            Restorative sleep is a powerful longevity factor. Older Great Danes spend over half their 
            day lying down, but poor bedding or temperature stress can cause pressure sores and joint 
            inflammation. 
          </p>
          <p className="mb-3">
            Provide orthopedic foam beds, non-slip flooring, and stable room temperatures. 
            In multi-dog households, quiet zones help prevent anxiety—another risk factor for 
            chronic inflammation and heart strain.
          </p>
        </section>

        {/* Screenings */}
        <section id="screenings" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">4. Schedule Lifelong Screenings</h2>
          <p className="mb-3">
            Early detection is key to managing cardiomyopathy, hip dysplasia, and cancer—the leading 
            causes of mortality in Great Danes. Veterinary cardiology guidelines recommend annual 
            echocardiograms beginning at age four and thoracic x-rays for senior dogs.
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Annual heart auscultation and blood pressure screening</li>
            <li>Yearly joint and spine imaging for early arthritis management</li>
            <li>Routine blood panels to monitor thyroid and kidney function</li>
          </ul>
          <p className="text-sm mt-2">
            Source: <a href="https://onlinelibrary.wiley.com/doi/full/10.1111/jvim.16937" target="_blank" rel="noopener noreferrer" className="underline">Journal of Veterinary Internal Medicine – Great Dane Cardiomyopathy (2025)</a>.
          </p>
        </section>

        {/* Lifestyle */}
        <section id="lifestyle" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">5. Build a Longevity Lifestyle</h2>
          <p className="mb-3">
            Beyond nutrition and vet visits, mental and emotional health directly affect 
            longevity. Great Danes thrive on connection and consistency. 
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Walk twice daily at moderate pace to preserve joint mobility.</li>
            <li>Use harnesses instead of neck collars to prevent cervical strain.</li>
            <li>Include puzzle feeders, gentle obedience work, and calm enrichment games.</li>
            <li>Reduce household stress—loud environments elevate cortisol, shortening lifespan.</li>
          </ul>
          <p className="mb-3">
            A stable, affectionate routine can reduce anxiety-related heart and gastrointestinal issues—a 
            small but measurable effect supported by canine behavioral research.
          </p>
        </section>

        {/* Resources */}
        <section id="resources" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Additional Resources</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <a href="https://www.akc.org/dog-breeds/great-dane/" target="_blank" rel="noopener noreferrer" className="underline">
                AKC Great Dane Breed Information
              </a>
            </li>
            <li>
              <a href="https://www.avma.org/resources-tools/pet-owners/petcare/large-breed-dog-care" target="_blank" rel="noopener noreferrer" className="underline">
                AVMA Large Breed Care Guide
              </a>
            </li>
            <li>
              <a href="https://vetmed.illinois.edu/pet-health-library/large-breed-dogs-lifespan/" target="_blank" rel="noopener noreferrer" className="underline">
                University of Illinois – Lifespan in Large Breeds
              </a>
            </li>
          </ul>
        </section>

        {/* References */}
        <section id="references" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">📚 References</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            <li>
              German, A. J., et al. (2024). <i>Association between body condition and lifespan in dogs.</i> Journal of the American Veterinary Medical Association, 261(4), 431–440. <a href="https://avmajournals.avma.org/view/journals/javma/261/4/javma.23.07.0311.xml" target="_blank" rel="noopener noreferrer" className="underline">Link</a>.
            </li>
            <li>
              Kilpinen, L., & Holm, S. (2025). <i>Metabolic effects of dietary fat balance in large-breed dogs.</i> The Veterinary Journal, 314, 106462. <a href="https://doi.org/10.1016/j.tvjl.2025.106462" target="_blank" rel="noopener noreferrer" className="underline">DOI</a>.
            </li>
            <li>
              Smith, K. J., et al. (2025). <i>Cardiomyopathy prevalence and progression in Great Danes.</i> Journal of Veterinary Internal Medicine. <a href="https://onlinelibrary.wiley.com/doi/full/10.1111/jvim.16937" target="_blank" rel="noopener noreferrer" className="underline">Link</a>.
            </li>
            <li>
              Frontiers in Veterinary Science. (2024). <i>Gut microbiota composition in large-breed dogs.</i> <a href="https://www.frontiersin.org/articles/10.3389/fvets.2024.1503122/full" target="_blank" rel="noopener noreferrer" className="underline">Link</a>.
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
