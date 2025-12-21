'use client';

import Head from 'next/head';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function AverageAgeOfLabrador() {
  const locale = useLocale();

  const title = 'Average Age of a Labrador: Evidence-Based Lifespan, What Shortens or Extends Life, and How to Add Healthy Years in 2026';
  const date = 'November 19, 2025'; // TODAY as requested
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
    breed_specific_guides: 'Breed Specific Guides',
  };

  const description =
    'What is the average age of a Labrador? This evidence-based guide breaks down real-world lifespan ranges, how weight, genetics, orthopedic health, cancer risk, and preventive care shape longevity, and what families can do to add healthy years.';

  const canonicalUrl = `https://www.petuniapets.com/${locale}/blog/average-age-of-labrador`;

  return (
    <>
      <Head>
        <title>{title} – Petunia Blog</title>
        <meta name="description" content={description} />
        <meta name="robots" content="all" />

        <link rel="canonical" href={canonicalUrl} />

        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />

        {/* JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'BlogPosting',
              headline: title,
              datePublished: date,
              dateModified: date,
              description,
              url: canonicalUrl,
              author: {
                '@type': 'Organization',
                name: 'Petunia',
              },
              publisher: {
                '@type': 'Organization',
                name: 'Petunia',
                logo: {
                  '@type': 'ImageObject',
                  url: 'https://www.petuniapets.com/logo.png',
                },
              },
            }),
          }}
        />
      </Head>

      <main className="max-w-3xl mx-auto px-4 py-10 text-[#2c4a30]">
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

        {/* Anchor Nav */}
        <nav className="mb-8 text-sm">
          <ul className="flex flex-wrap gap-3">
            <li><a href="#tldr" className="underline hover:opacity-80">TL;DR</a></li>
            <li><a href="#lifespan" className="underline hover:opacity-80">Average Age &amp; Data</a></li>
            <li><a href="#factors" className="underline hover:opacity-80">What Shapes Longevity</a></li>
            <li><a href="#weight" className="underline hover:opacity-80">Weight &amp; Body Condition</a></li>
            <li><a href="#orthopedic" className="underline hover:opacity-80">Orthopedic Health</a></li>
            <li><a href="#cancer" className="underline hover:opacity-80">Cancer Awareness</a></li>
            <li><a href="#genetics" className="underline hover:opacity-80">Genetics &amp; Color</a></li>
            <li><a href="#care" className="underline hover:opacity-80">Daily Care &amp; Prevention</a></li>
            <li><a href="#senior" className="underline hover:opacity-80">Senior Care</a></li>
            <li><a href="#faq" className="underline hover:opacity-80">FAQ</a></li>
            <li><a href="#sources" className="underline hover:opacity-80">📚 Sources</a></li>
          </ul>
        </nav>

        {/* TLDR */}
        <section id="tldr" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Short Answer (TL;DR)</h2>
          <p className="mb-4">
            The <strong>average age of a Labrador is about 11&#8211;13 years</strong>. Large-scale UK primary-care data show a <strong>median lifespan of roughly 12 years</strong>, with chocolate Labradors trending slightly shorter in population datasets. The biggest lifespan extender is <strong>maintaining a lean body condition</strong>. Orthopedic protection, cancer awareness, early veterinary care, and predictable routines add meaningful healthy years.
          </p>

          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Helpful resources:</strong> You can read deeper breed-specific data here:<br />
            <a
              href="https://www.petuniapets.com/en/blog/labrador-retriever-life-expectancy-and-lifespan"
              className="underline"
              target="_blank"
            >
              Labrador Life Expectancy &amp; Lifespan Guide
            </a>
            <br />
            <a
              href="https://www.petuniapets.com/en/blog/what-health-issues-do-labradors-have"
              className="underline"
              target="_blank"
            >
              Common Labrador Health Issues
            </a>
          </div>
        </section>

        {/* Lifespan Data */}
        <section id="lifespan" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Average Age of a Labrador: What Large Datasets Show</h2>
          <p className="mb-3">
            When families ask how long Labradors live, the most consistent evidence across veterinary databases shows a <strong>median age near 12 years</strong>. Many Labs comfortably reach 13, and some reach the mid-teens with excellent orthopedic management and lean body condition.
          </p>
          <p className="mb-3">
            In UK VetCompass data, chocolate Labradors had the <strong>shortest median lifespan (~10.7 years)</strong>, while black and yellow Labs averaged closer to <strong>12.1 years</strong>. This pattern likely reflects complex factors including skin and ear disease burden rather than coat color alone.
          </p>
          <p>
            In other words: the &ldquo;average age&rdquo; is not a single number but a range shaped by weight, genetics, cancer vigilance, injury prevention, and daily routines.
          </p>
        </section>

        {/* Factors */}
        <section id="factors" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">The Major Factors That Shape a Labrador&#8217;s Lifespan</h2>
          <ul className="list-disc pl-5 space-y-2 mb-3">
            <li><strong>Weight and body condition:</strong> the strongest modifiable factor.</li>
            <li><strong>Orthopedic health:</strong> hips, elbows, cruciate ligaments.</li>
            <li><strong>Cancer detection:</strong> early removal increases treatment options.</li>
            <li><strong>Genetics:</strong> EIC, PRA, POMC gene variants, skin/ear vulnerability.</li>
            <li><strong>Daily movement:</strong> structured routines reduce injury risk.</li>
            <li><strong>Preventive veterinary care:</strong> vaccines, dental, parasite control.</li>
            <li><strong>Heat and water safety:</strong> environmental risks shorten lives.</li>
          </ul>
        </section>

        {/* Weight */}
        <section id="weight" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Weight &amp; Body Condition: The Largest Lifespan Lever</h2>
          <p className="mb-3">
            A landmark lifetime feeding study in Labradors showed that dogs kept at ideal body condition lived almost <strong>two years longer</strong> than their littermates fed more calories. Excess weight accelerates arthritis, increases cancer risk, and strains the heart and respiratory system.
          </p>
          <h3 className="text-lg font-semibold mt-2 mb-1">What Ideal Condition Looks Like</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Ribs easily felt under light pressure.</li>
            <li>Visible waistline from above.</li>
            <li>Abdominal tuck from the side.</li>
          </ul>

          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Petunia tip:</strong> Log calories, weight, and movement together. Trends matter more than single datapoints.
          </div>
        </section>

        {/* Orthopedic */}
        <section id="orthopedic" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Orthopedic Health: Protect Joints, Protect Years</h2>
          <p className="mb-3">
            Labradors are athletic and enthusiastic, which makes them prone to hip dysplasia, elbow dysplasia, and cruciate tears. Injury prevention saves years of mobility and reduces chronic pain.
          </p>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Warm up and cool down before and after activity.</li>
            <li>Use traction runners on slick floors.</li>
            <li>Limit repetitive high-impact fetch.</li>
            <li>Watch for early stiffness or reluctance to jump.</li>
          </ul>
        </section>

        {/* Cancer */}
        <section id="cancer" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Cancer Awareness: Early Is Everything</h2>
          <p className="mb-3">
            Cancers common in Labradors include mast cell tumors, lymphoma, and hemangiosarcoma. A monthly nose-to-tail scan helps catch small masses early, when surgical removal is most successful.
          </p>
        </section>

        {/* Genetics */}
        <section id="genetics" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Genetics, Coat Color &amp; Longevity Patterns</h2>
          <p className="mb-3">
            While coat color does not directly cause shorter life, population data show chocolate Labradors trending shorter, likely due to higher rates of skin and ear disease. Ask breeders about hips, elbows, eyes, EIC status, and family history of cancer.
          </p>
        </section>

        {/* Care */}
        <section id="care" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Daily Routines &amp; Preventive Care</h2>
          <p className="mb-3">
            Longevity is built in the daily rhythms: regular exercise, predictable routines, dental care, parasite prevention, good sleep, and stress management.
            
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Brush teeth daily when possible.</li>
            <li>Use year-round parasite control in most climates.</li>
            <li>Transition foods gradually to protect gut stability.</li>
            <li>Protect against heat exhaustion and water hazards.</li>
          </ul>
        </section>

        {/* Senior */}
        <section id="senior" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Senior Care: Making the Golden Years Comfortable</h2>
          <p className="mb-3">
            Most Labradors become &ldquo;young seniors&rdquo; around age seven. Twice-yearly vet visits, pain management, traction mats, short frequent outings, and cooperative care skills keep life joyful and low-stress.
          </p>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">Frequently Asked Questions</h2>

          <p className="mb-3">
            <strong>What is the average age of a Labrador?</strong><br />
            Most Labradors live <strong>11&#8211;13 years</strong>, with populations averaging near 12 years.
          </p>

          <p className="mb-3">
            <strong>Do chocolate Labradors really live shorter lives?</strong><br />
            In large UK datasets, chocolate Labradors had a shorter median lifespan. This likely reflects health trends, not color alone.
          </p>

          <p className="mb-3">
            <strong>What single thing extends a Labrador&#8217;s life the most?</strong><br />
            Maintaining a <strong>lean body condition</strong>.
          </p>

          <p className="mb-3">
            <strong>Can Labradors live past 14?</strong><br />
            Yes. Lean, fit, well-monitored dogs with excellent orthopedic care sometimes reach 14&#8211;16.
          </p>
        </section>

        {/* Sources */}
        <section id="sources" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">📚 Sources (Selected)</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            <li>
              McGreevy, P. D., et&nbsp;al. (2018). Labrador retrievers under primary veterinary care in the UK (VetCompass/PLOS One).
            </li>
            <li>
              RVC VetCompass. Chocolate Labradors median survival data.
            </li>
            <li>
              Kealy, R. D., et&nbsp;al. (2002). Effects of diet restriction on life span in Labradors (JAVMA).
            </li>
            <li>
              Raffan, E., et&nbsp;al. (2016). POMC gene deletion and appetite in Labradors (Cell Metabolism).
            </li>
            <li>
              AAHA Canine Vaccination Guidelines (2022).
            </li>
          </ul>
          <p className="text-xs text-gray-600 mt-4">
            Educational only. Use alongside your veterinarian&apos;s guidance.
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
