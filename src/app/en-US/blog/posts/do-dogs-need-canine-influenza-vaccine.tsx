'use client';

import Head from 'next/head';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function DoDogsNeedCanineInfluenzaVaccine() {
  const locale = useLocale();

  const title =
    'Do Dogs Need the Canine Influenza Vaccine? Evidence, Safety';
  const date = 'November 19, 2025';
  const categories = ['owner'] as const;

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
    'Do dogs need the canine influenza vaccine? A complete guide covering evidence, outbreak updates, safety data, boarding and daycare requirements, and when the flu shot is recommended by veterinarians.';

  const canonicalUrl = `https://www.petuniapets.com/${locale}/blog/do-dogs-need-canine-influenza-vaccine`;

  return (
    <>
      <Head>
        <title>{title} – Petunia Blog</title>
        <meta name="description" content={description} />
        <meta name="robots" content="all" />
        <link rel="canonical" href={canonicalUrl} />

        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />

        {/* JSON-LD Schema */}
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

      <main className="max-w-3xl mx-auto px-4 py-10 text-[#2c4a30]">
        {/* Meta */}
        <p className="text-sm text-gray-500 mb-2">Posted on {date}</p>
        <h1 className="text-3xl font-bold mb-4">{title}</h1>

        {/* Category Pills */}
        <div className="flex flex-wrap gap-2 mb-6">
          {categories.map((c) => (
            <span
              key={c}
              className="text-xs bg-[#e4dbcb] text-[#2c4a30] px-3 py-1 rounded-full border border-[#d9cfc2]"
            >
              {categoryLabels[c] ?? c}
            </span>
          ))}
        </div>

        {/* Anchor Nav */}
        <nav className="mb-8 text-sm">
          <ul className="flex flex-wrap gap-3">
            <li><a href="#tldr" className="underline hover:opacity-80">TL;DR</a></li>
            <li><a href="#basics" className="underline hover:opacity-80">What Is Canine Influenza?</a></li>
            <li><a href="#vaccine" className="underline hover:opacity-80">Do Dogs Need the Vaccine?</a></li>
            <li><a href="#safety" className="underline hover:opacity-80">Vaccine Safety &amp; Side Effects</a></li>
            <li><a href="#boarding" className="underline hover:opacity-80">Boarding &amp; Daycare Requirements</a></li>
            <li><a href="#who-needs-it" className="underline hover:opacity-80">Which Dogs Benefit Most?</a></li>
            <li><a href="#faq" className="underline hover:opacity-80">FAQ</a></li>
            <li><a href="#sources" className="underline hover:opacity-80">📚 Sources</a></li>
          </ul>
        </nav>

        {/* TLDR */}
        <section id="tldr" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Short Answer (TL;DR)</h2>
          <p className="mb-4">
            Most dogs do not <strong>universally</strong> need the canine influenza vaccine, but many <strong>should</strong> receive it based on lifestyle, exposure, travel, and local outbreaks. Dogs that attend daycare, group training, grooming, or boarding often require it for safety and compliance. The vaccine is safe, widely recommended during regional outbreaks, and required by many facilities in 2025–2026.
          </p>

          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            For deeper guidance, see:<br />
            <a
              href="https://www.petuniapets.com/en/blog/does-my-dog-need-the-influenza-shot"
              target="_blank"
              className="underline"
            >
              Does My Dog Need the Influenza Shot?
            </a><br />
            <a
              href="https://www.petuniapets.com/en/blog/canine-influenza-2025-safety-boosters-boarding-rules"
              target="_blank"
              className="underline"
            >
              Canine Influenza 2025: Safety, Boosters &amp; Boarding Rules
            </a>
          </div>
        </section>

        {/* Basics */}
        <section id="basics" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">What Is Canine Influenza?</h2>
          <p className="mb-3">
            Canine influenza (&ldquo;dog flu&rdquo;) is a contagious respiratory infection caused by H3N8 and H3N2 influenza A strains. It spreads through coughing, shared airspace, contaminated surfaces, and direct dog-to-dog contact. Outbreaks tend to occur in urban areas, boarding/daycare settings, and multi-dog households.
          </p>
          <p>
            Most cases are mild, but severe pneumonia can develop in a small percentage of dogs, particularly seniors, brachycephalics, and those with underlying respiratory disease.
          </p>
        </section>

        {/* Do Dogs Need the Vaccine? */}
        <section id="vaccine" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Do Dogs Need the Canine Influenza Vaccine?</h2>
          <p className="mb-3">
            The American Veterinary Medical Association (AVMA) classifies the flu vaccine as a <strong>lifestyle vaccine</strong> — essential for some dogs, optional for others. Dogs regularly exposed to group environments are at higher risk and benefit the most.
          </p>

          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Required by many boarding and daycare facilities in 2025–2026.</li>
            <li>Strongly recommended during regional outbreaks.</li>
            <li>Recommended for dogs with frequent travel, shows, or grooming.</li>
            <li>Optional for low-risk dogs who stay home, with little direct dog interaction.</li>
          </ul>
        </section>

        {/* Safety */}
        <section id="safety" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Vaccine Safety &amp; Side Effects</h2>
          <p className="mb-3">
            The canine influenza vaccine is widely considered safe. It has been used for over a decade with strong safety data across millions of doses.
          </p>

          <ul className="list-disc pl-5 space-y-1">
            <li>Mild soreness at the injection site.</li>
            <li>Low-grade fever for 12–24 hours.</li>
            <li>Mild lethargy.</li>
            <li>Severe reactions are extremely rare.</li>
          </ul>

          <p className="mt-3">
            Most dogs require a two-dose initial series (2–4 weeks apart), followed by an annual booster — similar to Bordetella.
          </p>
        </section>

        {/* Boarding Rules */}
        <section id="boarding" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Boarding &amp; Daycare Requirements in 2025–2026</h2>
          <p className="mb-3">
            Due to increased outbreaks across the U.S. and Canada, many facilities now require proof of influenza vaccination for reservations — especially during peak travel seasons.
          </p>

          <ul className="list-disc pl-5 space-y-1">
            <li>Most boarding facilities require both Bordetella and influenza vaccines.</li>
            <li>Some require boosters within 6–12 months depending on local guidance.</li>
            <li>Daycares experiencing regional outbreaks often mandate it temporarily.</li>
            <li>Shelters and rescues in outbreak regions may vaccinate upon intake.</li>
          </ul>

          <p className="mt-3">
            For facility-specific rules and safety measures, see:<br />
            <a
              href="https://www.petuniapets.com/en/blog/canine-influenza-2025-safety-boosters-boarding-rules"
              className="underline"
              target="_blank"
            >
              Canine Influenza 2025: Safety, Boosters &amp; Boarding Rules
            </a>
          </p>
        </section>

        {/* Who Needs It Most */}
        <section id="who-needs-it" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Which Dogs Benefit Most From the Flu Vaccine?</h2>
          <p className="mb-3">
            Not all dogs have the same risk profile. The following groups benefit most from routine vaccination:
          </p>

          <ul className="list-disc pl-5 space-y-1">
            <li>Dogs attending daycare, boarding, playgroups, or training classes.</li>
            <li>Dogs living in dense urban areas or multi-dog households.</li>
            <li>Dogs traveling frequently with their families.</li>
            <li>Seniors or immunocompromised dogs (consult your veterinarian).</li>
            <li>Brachycephalic breeds, which often struggle with respiratory illness.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">Frequently Asked Questions</h2>

          <p className="mb-3">
            <strong>Is the canine flu vaccine mandatory?</strong><br />
            Not everywhere, but many boarding and daycare facilities require it to protect group environments.
          </p>

          <p className="mb-3">
            <strong>Does the vaccine prevent all infections?</strong><br />
            No vaccine offers 100% protection, but it significantly reduces severity, spread, and pneumonia risk.
          </p>

          <p className="mb-3">
            <strong>How quickly does immunity develop?</strong><br />
            Full immunity typically develops 1–2 weeks after the second dose of the initial series.
          </p>

          <p>
            <strong>Can my dog get the flu from the vaccine?</strong><br />
            No — it uses inactivated virus technology and cannot cause infection.
          </p>
        </section>

        {/* Sources */}
        <section id="sources" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">📚 Sources (Selected)</h2>

          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            <li>American Veterinary Medical Association (AVMA). Canine Influenza Overview.</li>
            <li>American Kennel Club (AKC). Influenza Vaccine Recommendations.</li>
            <li>Cornell University — College of Veterinary Medicine, Canine Flu Resources.</li>
            <li>Petunia Blog — Does My Dog Need the Influenza Shot?</li>
            <li>Petunia Blog — Canine Influenza 2025 Safety &amp; Boarding Rules.</li>
            <li>University of Wisconsin Shelter Medicine: Canine Influenza Outbreak Guidance.</li>
          </ul>

          <p className="text-xs text-gray-600 mt-4">
            Educational content — always consult your veterinarian for medical decisions.
          </p>
        </section>

        {/* Back */}
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
