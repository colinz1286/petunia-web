'use client';

import Head from 'next/head';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function DogBoardingVaccinationRequirements2025() {
  const locale = useLocale();

  const title =
    'Vaccination & Health Requirements for Dog Daycare & Boarding (2025): Rabies, Distemper, Bordetella, Records & State Rules';
  const date = 'November 24, 2025';
  const categories = ['owner', 'boarding', 'daycare'] as const;

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
    'A complete 2025 guide to required vaccinations for dog daycare and boarding, including Rabies, DHPP, Bordetella, and Influenza, plus health records, state rules, inspection expectations, and how owners can verify compliance.';

  return (
    <>
      <Head>
        <title>{title} – Petunia Blog</title>
        <meta name="description" content={description} />
        <meta name="robots" content="all" />
        <link
          rel="canonical"
          href={`https://www.petuniapets.com/${locale}/blog/dog-boarding-vaccination-requirements-2025`}
        />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
      </Head>

      <main className="max-w-3xl mx-auto px-4 py-10">
        <article className="prose prose-sm sm:prose-base lg:prose-lg text-[#2c4a30]">

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

          {/* Nav */}
          <nav className="mb-8 text-sm">
            <ul className="flex flex-wrap gap-3">
              <li><a href="#tldr" className="underline hover:opacity-80">TL;DR</a></li>
              <li><a href="#overview" className="underline hover:opacity-80">Why Vaccines Matter</a></li>
              <li><a href="#rabies" className="underline hover:opacity-80">Rabies</a></li>
              <li><a href="#dhpp" className="underline hover:opacity-80">DHPP (Distemper/Parvo)</a></li>
              <li><a href="#bordetella" className="underline hover:opacity-80">Bordetella</a></li>
              <li><a href="#influenza" className="underline hover:opacity-80">Canine Influenza</a></li>
              <li><a href="#records" className="underline hover:opacity-80">Health Records</a></li>
              <li><a href="#state" className="underline hover:opacity-80">State Rules</a></li>
              <li><a href="#verify" className="underline hover:opacity-80">How To Verify Compliance</a></li>
              <li><a href="#faq" className="underline hover:opacity-80">FAQ</a></li>
              <li><a href="#sources" className="underline hover:opacity-80">Sources</a></li>
            </ul>
          </nav>

          {/* TLDR */}
          <section id="tldr" className="mb-10">
            <h2 className="text-2xl font-semibold mb-3">Short Answer (TL;DR)</h2>

            <p>
              Most U.S. daycares and boarding facilities require Rabies, DHPP, and Bordetella vaccinations, while many also require Canine Influenza depending on local disease risk. These requirements are checked during licensing and inspections, and facilities must maintain accurate vaccination records as part of state or municipal compliance. Owners can verify vaccination policies by reviewing posted requirements, asking for written protocols, or checking state licensing portals.
            </p>

            <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm mt-4">
              <strong>Note:</strong> Vaccination rules differ by facility and jurisdiction. Always confirm the latest requirements before booking.
            </div>
          </section>

          {/* Why Vaccines Matter */}
          <section id="overview" className="mb-10">
            <h2 className="text-2xl font-semibold mb-3">Why Boarding &amp; Daycare Vaccination Rules Matter</h2>

            <p>
              Dogs in group-care environments share air, water bowls, toys, and enclosed spaces, which increases disease transmission risk. Vaccination requirements exist to protect dogs, staff, and the community, and they help facilities meet inspection and licensing standards.
            </p>

            <p className="mt-4">
              To understand how health standards fit into overall requirements, you can compare our complete requirements guide:{' '}
              <Link href={`/${locale}/blog/dog-daycare-boarding-requirements-2025`} className="underline hover:opacity-80">
                Dog Daycare &amp; Boarding Requirements (2025)
              </Link>.
            </p>
          </section>

          {/* Rabies */}
          <section id="rabies" className="mb-10">
            <h2 className="text-2xl font-semibold mb-3">Rabies (Required Nationwide)</h2>

            <p>
              Rabies vaccination is legally required in all 50 states. Boarding and daycare facilities must document current Rabies vaccination before accepting a dog. Inspectors verify expiration dates and ensure records match the dog on file.
            </p>
          </section>

          {/* DHPP */}
          <section id="dhpp" className="mb-10">
            <h2 className="text-2xl font-semibold mb-3">DHPP (Distemper, Hepatitis, Parvo, Parainfluenza)</h2>

            <p>
              DHPP is strongly recommended for all dogs and required by nearly every daycare and boarding facility. It protects against highly contagious viral diseases and is considered a core vaccine by veterinarians.
            </p>

            <p className="mt-4">
              Many state inspectors review DHPP records as part of their core disease-prevention checks. To learn how inspection programs evaluate health documentation, see:{' '}
              <Link href={`/${locale}/blog/dog-boarding-inspection-standards-2025`} className="underline hover:opacity-80">
                Dog Boarding Inspection Standards (2025)
              </Link>.
            </p>
          </section>

          {/* Bordetella */}
          <section id="bordetella" className="mb-10">
            <h2 className="text-2xl font-semibold mb-3">Bordetella (Kennel Cough)</h2>

            <p>
              Bordetella vaccination is widely required for daycare due to the respiratory nature of kennel cough and the speed at which it spreads indoors. Requirements differ, but most facilities mandate vaccination within the last 6 or 12 months.
            </p>

            <ul className="list-disc pl-5 space-y-1">
              <li>Highly recommended for all daycare dogs</li>
              <li>Required in most metro areas</li>
              <li>May be checked during licensing inspections</li>
            </ul>
          </section>

          {/* Influenza */}
          <section id="influenza" className="mb-10">
            <h2 className="text-2xl font-semibold mb-3">Canine Influenza (H3N2 &amp; H3N8)</h2>

            <p>
              Influenza requirements depend on outbreaks, boarding volume, and regional risk. Many states with large metropolitan areas strongly encourage or require this vaccine for group play.
            </p>

            <p className="mt-4">
              Facilities in states with strong regulatory programs, such as Colorado, may have stricter expectations. For comparison:{' '}
              <Link href={`/${locale}/blog/colorado-dog-boarding-daycare-laws-2025`} className="underline hover:opacity-80">
                Colorado Dog Boarding &amp; Daycare Laws (2025)
              </Link>.
            </p>
          </section>

          {/* Records */}
          <section id="records" className="mb-10">
            <h2 className="text-2xl font-semibold mb-3">Required Health Records &amp; Documentation</h2>

            <p>
              Facilities are required to maintain accurate vaccination and health records as part of licensing and inspection compliance. Inspectors review these records for completeness, clarity, and accuracy.
            </p>

            <ul className="list-disc pl-5 space-y-1">
              <li>Rabies certificate with expiration date</li>
              <li>DHPP vaccination dates</li>
              <li>Bordetella or equivalent respiratory vaccine records</li>
              <li>Influenza vaccine records when required</li>
              <li>Medication logs where applicable</li>
              <li>Owner emergency contact information</li>
            </ul>

            <p className="mt-4">
              For how health documentation fits into licensing, see:{' '}
              <Link href={`/${locale}/blog/dog-daycare-license-requirements-2025`} className="underline hover:opacity-80">
                Dog Daycare License Requirements (2025)
              </Link>.
            </p>
          </section>

          {/* State Rules */}
          <section id="state" className="mb-10">
            <h2 className="text-2xl font-semibold mb-3">State Rules &amp; Local Variations</h2>

            <p>
              Vaccination requirements are often shaped by local animal health codes, especially in major cities. Some states issue statewide guidance, while others allow counties or cities to set stricter rules.
            </p>

            <p className="mt-4">
              To understand how states differ, see our national legal summary:{' '}
              <Link href={`/${locale}/blog/dog-daycare-and-boarding-laws-by-state-2025`} className="underline hover:opacity-80">
                Dog Daycare &amp; Boarding Laws by State (2025)
              </Link>.
            </p>

            <p className="mt-4">
              For examples of state-specific regulations, you can compare:{' '}
              <Link href={`/${locale}/blog/colorado-dog-boarding-daycare-laws-2025`} className="underline hover:opacity-80">
                Colorado&apos;s statewide regulatory program
              </Link>{' '}
              and{' '}
              <Link href="http://localhost:3000/en/blog/texas-dog-boarding-daycare-laws-2025" className="underline hover:opacity-80">
                Texas&apos;s municipal-style system
              </Link>.
            </p>
          </section>

          {/* Verify */}
          <section id="verify" className="mb-10">
            <h2 className="text-2xl font-semibold mb-3">How Owners Can Verify Vaccination Compliance</h2>

            <p>
              Before booking, owners can confirm health compliance by reviewing the facility&apos;s vaccination policies, records, and licensing status.
            </p>

            <ol className="list-decimal pl-6 space-y-1">
              <li>Review vaccination requirements posted on the facility website.</li>
              <li>Request written health policies and grouping procedures.</li>
              <li>Ask to see the facility&apos;s posted license or permit.</li>
              <li>Check your state or city&apos;s license lookup tool.</li>
              <li>Request inspection history, including any corrective actions.</li>
            </ol>

            <p className="mt-4">
              For a full walkthrough on verifying licenses, see:{' '}
              <Link href={`/${locale}/blog/how-to-verify-dog-daycare-license-2025`} className="underline hover:opacity-80">
                How To Verify Any Dog Daycare or Boarding License (2025)
              </Link>.
            </p>
          </section>

          {/* FAQ */}
          <section id="faq" className="mb-16">
            <h2 className="text-2xl font-semibold mb-3">Frequently Asked Questions</h2>

            <p>
              <strong>Is Bordetella required by law?</strong><br />
              Not usually by law, but almost always by policy and inspected during licensing.
            </p>

            <p>
              <strong>Do all facilities require influenza vaccination?</strong><br />
              No. Requirements vary by region and outbreak frequency.
            </p>

            <p>
              <strong>Can titers replace vaccines?</strong><br />
              Rarely. Some facilities allow them for DHPP but not Rabies.
            </p>

            <p>
              <strong>Are vaccinations checked during inspections?</strong><br />
              Yes. Inspectors review dates, records, and completeness.
            </p>
          </section>

          {/* Sources */}
          <section id="sources" className="mb-16">
            <h2 className="text-2xl font-semibold mb-3">Sources &amp; References</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
              <li>American Veterinary Medical Association (AVMA)</li>
              <li>Colorado PACFA health documentation requirements</li>
              <li>Municipal animal health and sanitation codes</li>
              <li>State animal facility licensing standards</li>
            </ul>
          </section>

          <Link
            href={`/${locale}/blog`}
            className="underline text-[#2c4a30] font-medium hover:opacity-80"
          >
            ← Back to Blog
          </Link>

        </article>
      </main>
    </>
  );
}
