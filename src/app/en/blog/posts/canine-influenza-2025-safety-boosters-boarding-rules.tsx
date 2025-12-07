'use client';

import Head from 'next/head';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function CanineInfluenza2025() {
  const locale = useLocale();

  return (
    <>
      <Head>
        <title>Canine Influenza 2025: Safety, Boosters &amp; Boarding Rules</title>
        <meta
          name="description"
          content="A veterinary-informed 2025 guide to canine influenza: current vaccine safety, booster recommendations, global boarding requirements, and practical owner advice."
        />
        <meta name="robots" content="all" />
        <link
          rel="canonical"
          href={`https://www.petuniapets.com/${locale}/blog/canine-influenza-2025-safety-boosters-boarding-rules`}
        />
      </Head>

      <article className="mx-auto max-w-3xl px-4 py-10">
        {/* Category pills */}
        <nav aria-label="Categories" className="mb-6 flex flex-wrap gap-2">
          <span className="rounded-full border px-3 py-1 text-sm">Health</span>
          <span className="rounded-full border px-3 py-1 text-sm">Vaccines</span>
          <span className="rounded-full border px-3 py-1 text-sm">Boarding &amp; Daycare</span>
        </nav>

        <h1 className="mb-3 text-3xl font-bold">
          Canine Influenza 2025: Safety, Boosters &amp; Boarding Rules
        </h1>

        <p className="mb-8 text-base text-gray-700">
          Canine influenza, often referred to as dog flu, has continued to evolve over the past decade.
          By 2025, many boarding and daycare facilities around the world have made influenza vaccination
          a condition of entry. Yet questions remain: How safe are the vaccines? Which strains matter?
          When are boosters required? And how do rules differ between the United States, the United
          Kingdom, Australia, and other regions? This article synthesizes veterinary consensus and
          operational best practices to give owners and business operators a comprehensive, practical,
          and globally relevant update.
        </p>

        {/* Anchor nav */}
        <nav aria-label="On this page" className="mb-8 rounded-xl border p-4">
          <p className="mb-2 font-semibold">On this page</p>
          <ul className="list-inside list-disc space-y-1">
            <li><a href="#tldr" className="underline">TL;DR</a></li>
            <li><a href="#overview" className="underline">What Is Canine Influenza?</a></li>
            <li><a href="#strains" className="underline">Strains Circulating in 2025</a></li>
            <li><a href="#symptoms" className="underline">Clinical Signs &amp; Risks</a></li>
            <li><a href="#vaccine" className="underline">Vaccine Options &amp; Safety</a></li>
            <li><a href="#boosters" className="underline">Booster Timing &amp; Protocols</a></li>
            <li><a href="#boarding" className="underline">Boarding &amp; Daycare Rules</a></li>
            <li><a href="#global" className="underline">Global Differences (US, UK, AU, CA, EU)</a></li>
            <li><a href="#operations" className="underline">Operational Guidance for Facilities</a></li>
            <li><a href="#owner" className="underline">Practical Advice for Owners</a></li>
            <li><a href="#faq" className="underline">FAQ</a></li>
            <li><a href="#sources" className="underline">Sources &amp; Notes</a></li>
          </ul>
        </nav>

        {/* TL;DR */}
        <section id="tldr" className="mb-10">
          <h2 className="mb-3 text-2xl font-semibold">TL;DR</h2>
          <div className="rounded-lg border p-4">
            <ul className="list-inside list-disc space-y-2">
              <li>Two main strains circulate globally: H3N2 and H3N8. Most vaccines now cover both.</li>
              <li>Vaccination is considered safe; adverse effects are mild and uncommon.</li>
              <li>Boosters are usually required annually, though some facilities demand every 6 months.</li>
              <li>Boarding/daycare facilities in the U.S. increasingly mandate proof of vaccination; the UK and AU are moving toward similar rules in urban centers.</li>
              <li>Owners should plan ahead: immunity takes 2–4 weeks after the initial series.</li>
            </ul>
          </div>
        </section>

        {/* Overview */}
        <section id="overview" className="mb-10">
          <h2 className="mb-3 text-2xl font-semibold">What Is Canine Influenza?</h2>
          <p className="mb-4">
            Canine influenza is a contagious respiratory disease caused by specific influenza A viruses
            adapted to dogs. Unlike kennel cough, which is a syndrome caused by multiple pathogens,
            canine influenza is viral, with two strains of concern. First detected in U.S. greyhounds in
            2004 (H3N8) and later in Chicago in 2015 (H3N2), it has since spread widely in the U.S. and
            been reported sporadically in the UK, parts of Europe, and Australia. In 2025, veterinarians
            still classify it as an emerging but controllable risk, particularly in high-density settings.
          </p>
        </section>

        {/* Strains */}
        <section id="strains" className="mb-10">
          <h2 className="mb-3 text-2xl font-semibold">Strains Circulating in 2025</h2>
          <p className="mb-4">
            The primary strains remain H3N8 and H3N2. Modern vaccines usually combine coverage for both,
            although some older formulations are strain-specific. H3N2 has shown greater persistence in
            canine populations and is the dominant strain in most outbreaks. Surveillance data from the
            U.S. CDC, UK DEFRA, and Australia’s veterinary networks confirm occasional flare-ups but not
            sustained nationwide epidemics.
          </p>
        </section>

        {/* Symptoms */}
        <section id="symptoms" className="mb-10">
          <h2 className="mb-3 text-2xl font-semibold">Clinical Signs &amp; Risks</h2>
          <p className="mb-4">
            Signs range from mild cough, nasal discharge, and lethargy to more severe pneumonia in a
            minority of dogs. Fatality rates are low (under 2%), but morbidity is high; nearly every
            exposed dog without immunity becomes infected. The greater concern is operational: rapid
            spread through boarding kennels, shelters, daycare centers, and shows.
          </p>
        </section>

        {/* Vaccine */}
        <section id="vaccine" className="mb-10">
          <h2 className="mb-3 text-2xl font-semibold">Vaccine Options &amp; Safety</h2>
          <p className="mb-4">
            Current vaccines are killed-virus or recombinant formulations. Veterinary studies through
            2025 show excellent safety profiles. Mild injection-site swelling, low-grade fever, or
            transient lethargy are the most common effects, typically resolving in 24–48 hours. Serious
            adverse events remain rare. Importantly, vaccination reduces disease severity and shedding,
            even if infection occurs.
          </p>
        </section>

        {/* Boosters */}
        <section id="boosters" className="mb-10">
          <h2 className="mb-3 text-2xl font-semibold">Booster Timing &amp; Protocols</h2>
          <p className="mb-4">
            Puppies and naïve adults require a two-dose initial series, spaced 2–4 weeks apart. After
            this, boosters are generally recommended once yearly. However, many high-density boarding
            and daycare facilities require proof every 6 months, especially after local outbreaks.
            Owners should clarify requirements well before booking to avoid last-minute exclusions.
          </p>
        </section>

        {/* Boarding Rules */}
        <section id="boarding" className="mb-10">
          <h2 className="mb-3 text-2xl font-semibold">Boarding &amp; Daycare Rules</h2>
          <p className="mb-4">
            By 2025, U.S. facilities in major cities frequently require canine influenza vaccination
            alongside core vaccines (Rabies, Distemper/Parvo, Bordetella). In the UK, requirements vary
            by county and business, but larger daycare operators are moving toward mandates. Australia
            shows similar patterns in metropolitan boarding centers. In Canada, proof of vaccination is
            increasingly requested in Ontario and British Columbia. Across all regions, proof is
            typically documented with veterinary records or app-based certificates.
          </p>
        </section>

        {/* Global Differences */}
        <section id="global" className="mb-10">
          <h2 className="mb-3 text-2xl font-semibold">Global Differences (US, UK, AU, CA, EU)</h2>
          <p className="mb-4">
            <strong>United States:</strong> Widely available vaccines, common boarding requirement,
            emphasis on boosters every 6–12 months. Outbreak monitoring by state health departments.
          </p>
          <p className="mb-4">
            <strong>United Kingdom:</strong> Licensed vaccines are available; adoption is slower. Boarding
            kennels increasingly recommend vaccination though not always mandatory.
          </p>
          <p className="mb-4">
            <strong>Australia:</strong> Sporadic cases; vaccines licensed; boarding/daycare centers in
            Sydney and Melbourne often require it, especially after imported cases.
          </p>
          <p className="mb-4">
            <strong>Canada:</strong> Vaccination uptake growing; provincial differences; Ontario BC leading.
          </p>
          <p className="mb-4">
            <strong>European Union:</strong> Patchwork adoption; emphasis on outbreak response. Vaccination
            optional in most member states but gaining attention in urban boarding.
          </p>
        </section>

        {/* Operations */}
        <section id="operations" className="mb-10">
          <h2 className="mb-3 text-2xl font-semibold">Operational Guidance for Facilities</h2>
          <ul className="list-inside list-disc space-y-2">
            <li>Require documented proof of vaccination during intake.</li>
            <li>Educate staff on recognizing early signs of respiratory disease.</li>
            <li>Maintain isolation rooms and ventilation best practices.</li>
            <li>Update SOPs annually and communicate clearly with clients.</li>
            <li>Coordinate with local veterinarians and public health advisories.</li>
          </ul>
        </section>

        {/* Owner advice */}
        <section id="owner" className="mb-10">
          <h2 className="mb-3 text-2xl font-semibold">Practical Advice for Owners</h2>
          <ul className="list-inside list-disc space-y-2">
            <li>Schedule vaccines at least 4 weeks before planned boarding.</li>
            <li>Ask facilities whether boosters are required every 6 months or annually.</li>
            <li>Keep copies of veterinary vaccination certificates accessible.</li>
            <li>Report coughing, nasal discharge, or lethargy to your vet promptly.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-10">
          <h2 className="mb-3 text-2xl font-semibold">FAQ</h2>
          <details className="mb-3 rounded-lg border p-4">
            <summary className="cursor-pointer font-semibold">Is the canine influenza vaccine safe?</summary>
            <p className="mt-2">Yes. The vaccine has an excellent safety record; most side effects are mild and short-lived.</p>
          </details>
          <details className="mb-3 rounded-lg border p-4">
            <summary className="cursor-pointer font-semibold">How soon before boarding should I vaccinate?</summary>
            <p className="mt-2">Ideally at least 4 weeks before. This allows time for the two-dose series and full immunity.</p>
          </details>
          <details className="mb-3 rounded-lg border p-4">
            <summary className="cursor-pointer font-semibold">Do dogs need boosters every 6 months?</summary>
            <p className="mt-2">Most dogs receive annual boosters, but many facilities require every 6 months in high-risk settings.</p>
          </details>
          <details className="mb-3 rounded-lg border p-4">
            <summary className="cursor-pointer font-semibold">Can my dog still get the flu if vaccinated?</summary>
            <p className="mt-2">Yes, but illness is usually milder, and the dog sheds less virus, reducing spread to others.</p>
          </details>
        </section>

        {/* Sources */}
        <section id="sources" className="mb-10">
          <h2 className="mb-3 text-2xl font-semibold">Sources &amp; Notes</h2>
          <ul className="list-inside list-disc space-y-2">
            <li>CDC: Canine Influenza Surveillance Reports.</li>
            <li>American Veterinary Medical Association (AVMA) vaccine guidelines.</li>
            <li>UK DEFRA veterinary notices, 2024–2025.</li>
            <li>Australian Veterinary Association outbreak bulletins.</li>
          </ul>
          <p className="mt-4 text-sm text-gray-600">
            Educational content only; not a substitute for individualized veterinary care.
            If your dog shows signs of respiratory disease, consult your veterinarian promptly.
          </p>
        </section>

        <div className="mt-10">
          <Link
            href={`/${locale}/blog`}
            className="inline-block rounded-xl border px-4 py-2 font-semibold underline"
          >
            &#8592; Back to Blog
          </Link>
        </div>
      </article>
    </>
  );
}
