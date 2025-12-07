'use client';

import Head from 'next/head';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function HowLongDoGoldenRetrieversLive() {
  const locale = useLocale();

  const title =
    'How Long Do Golden Retrievers Live? Average Lifespan, What Shortens or Extends Life, and Evidence-Based Care in 2026';
  const date = 'November 19, 2025';
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
    'How long do Golden Retrievers live? This evidence-based guide covers average lifespan ranges, major health risks, cancer rates, weight and orthopedic management, and practical daily routines that can add healthy years.';

  const canonicalUrl = `https://www.petuniapets.com/${locale}/blog/how-long-do-golden-retrievers-live`;

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
            <li><a href="#lifespan" className="underline hover:opacity-80">Average Lifespan</a></li>
            <li><a href="#cancer" className="underline hover:opacity-80">Cancer Risk</a></li>
            <li><a href="#weight" className="underline hover:opacity-80">Weight &amp; Body Condition</a></li>
            <li><a href="#orthopedic" className="underline hover:opacity-80">Orthopedic Health</a></li>
            <li><a href="#care" className="underline hover:opacity-80">Daily Care &amp; Prevention</a></li>
            <li><a href="#senior" className="underline hover:opacity-80">Senior Support</a></li>
            <li><a href="#cost" className="underline hover:opacity-80">Cost Considerations</a></li>
            <li><a href="#faq" className="underline hover:opacity-80">FAQ</a></li>
            <li><a href="#sources" className="underline hover:opacity-80">📚 Sources</a></li>
          </ul>
        </nav>

        {/* TL;DR */}
        <section id="tldr" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Short Answer (TL;DR)</h2>
          <p className="mb-4">
            Most Golden Retrievers live <strong>10&#8211;12 years</strong>. Some reach 13&#8211;14 with exceptional care, lean body condition, early detection of cancer, and orthopedic protection. Certain cancer types occur at higher rates in this breed, making proactive veterinary partnerships essential.
          </p>

          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Helpful resources:</strong><br />
            <a
              href="https://www.petuniapets.com/en/blog/golden-retriever-life-expectancy"
              className="underline"
              target="_blank"
            >
              Golden Retriever Life Expectancy (Full Guide)
            </a><br />
            <a
              href="https://www.petuniapets.com/en/blog/what-health-issues-do-golden-retrievers-have"
              className="underline"
              target="_blank"
            >
              Common Golden Retriever Health Issues
            </a><br />
            <a
              href="https://www.petuniapets.com/en/blog/how-much-does-it-cost-to-own-a-golden-retriever"
              className="underline"
              target="_blank"
            >
              Cost of Owning a Golden Retriever
            </a>
          </div>
        </section>

        {/* Lifespan */}
        <section id="lifespan" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">How Long Do Golden Retrievers Live? The Evidence</h2>
          <p className="mb-3">
            Population studies across North America and Europe consistently place the <strong>average Golden Retriever lifespan between 10 and 12 years</strong>. Many remain vibrant into their early teens, especially when kept lean and monitored closely for early signs of cancer or orthopedic decline.
          </p>
          <p>
            Genetics, cancer risk, weight management, dental care, and daily routines all influence where an individual dog falls within that range.
          </p>
        </section>

        {/* Cancer */}
        <section id="cancer" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Why Cancer Matters in Golden Retriever Longevity</h2>
          <p className="mb-3">
            Golden Retrievers have higher rates of certain cancers than many other breeds, including hemangiosarcoma, lymphoma, and mast cell tumors. Because of this, lifespan averages skew slightly lower than some similar-sized breeds.
          </p>
          <p className="mb-3">
            Monthly nose-to-tail checks help families detect lumps, bruising, or subtle changes in energy and appetite. Early detection allows more treatment options.
          </p>
        </section>

        {/* Weight */}
        <section id="weight" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Weight &amp; Body Condition: The Strongest Modifiable Factor</h2>
          <p className="mb-3">
            Lean dogs live longer across nearly all breeds, and Golden Retrievers are no exception. Excess weight worsens joint disease, increases heat risk, and may contribute to systemic inflammation.
          </p>

          <h3 className="text-lg font-semibold mt-2 mb-1">What Ideal Body Condition Looks Like</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Ribs easily felt under light pressure.</li>
            <li>Visible waist from above.</li>
            <li>Abdominal tuck from the side.</li>
          </ul>
        </section>

        {/* Orthopedic */}
        <section id="orthopedic" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Orthopedic Health: Preserve Mobility, Preserve Years</h2>
          <p className="mb-3">
            Hip dysplasia, elbow dysplasia, and cruciate ligament injuries appear frequently in Golden Retrievers. Protecting joints early prevents chronic pain and maintains activity through the senior years.
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Use ramps for vehicles and furniture.</li>
            <li>Avoid repetitive high-impact fetch.</li>
            <li>Warm up before activity and cool down after.</li>
            <li>Monitor subtle stiffness or hesitation to jump.</li>
          </ul>
        </section>

        {/* Care */}
        <section id="care" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Daily Care &amp; Preventive Habits That Extend Lifespan</h2>
          <p className="mb-3">
            Longevity is influenced heavily by routine: dental hygiene, predictable sleep, regular exercise, mental stimulation, and parasite prevention all reduce disease and injury risk.
          </p>

          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Brush teeth daily or use VOHC-approved dental chews.</li>
            <li>Use year-round flea, tick, and heartworm prevention where recommended.</li>
            <li>Feed a complete and balanced diet with slow transitions.</li>
            <li>Prioritize daily sniff walks and training micro-sessions.</li>
          </ul>
        </section>

        {/* Senior */}
        <section id="senior" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Senior Golden Retrievers: Supporting the Golden Years</h2>
          <p className="mb-3">
            Golden Retrievers often enter their senior phase around age seven or eight. Twice-yearly veterinary visits, pain management strategies, traction mats, and shorter, more frequent outings keep life comfortable and low-stress.
          </p>
        </section>

        {/* Cost */}
        <section id="cost" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Cost Considerations Throughout the Lifespan</h2>
          <p className="mb-3">
            Because Golden Retrievers have heightened cancer and orthopedic risks, families should plan for both preventive and potential specialty care. A full breakdown is available here:
          </p>
          <p>
            <a
              href="https://www.petuniapets.com/en/blog/how-much-does-it-cost-to-own-a-golden-retriever"
              className="underline"
              target="_blank"
            >
              How Much Does It Cost to Own a Golden Retriever?
            </a>
          </p>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">Frequently Asked Questions</h2>

          <p className="mb-3">
            <strong>How long do most Golden Retrievers live?</strong><br />
            The average lifespan is <strong>10&#8211;12 years</strong>.
          </p>

          <p className="mb-3">
            <strong>Can Golden Retrievers live to 14 or beyond?</strong><br />
            Yes. Some do, especially when kept lean and monitored closely for cancer and orthopedic issues.
          </p>

          <p className="mb-3">
            <strong>What shortens a Golden Retriever&apos;s lifespan the most?</strong><br />
            Cancer and excess weight.
          </p>
        </section>

        {/* Sources */}
        <section id="sources" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">📚 Sources (Selected)</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            <li>Golden Retriever Lifetime Study (Morris Animal Foundation).</li>
            <li>VetCompass UK primary-care data on breed longevity.</li>
            <li>AAHA Canine Vaccination Guidelines (2022).</li>
            <li>Merck Veterinary Manual: Canine cancer and obesity risks.</li>
            <li>Orthopedic Foundation for Animals (OFA) hip and elbow screening data.</li>
          </ul>
          <p className="text-xs text-gray-600 mt-4">
            Educational use only — follow your veterinarian&apos;s guidance for diagnosis and treatment.
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
