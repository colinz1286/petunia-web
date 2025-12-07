'use client';

import Head from 'next/head';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function DogDaycareLicenseRequirements2025() {
  const locale = useLocale();

  const title =
    'Dog Daycare License Requirements: How Facilities Get Approved & How You Can Verify Them (2025)';
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
    breed_specific_guides: 'Breed Specific Guides',
  };

  const description =
    'A clear, step-by-step 2025 guide to how dog daycare facilities get licensed in the U.S., what inspectors evaluate, what documents are required, and how owners can quickly verify any facility online or in person.';

  return (
    <>
      <Head>
        <title>{title} – Petunia Blog</title>
        <meta name="description" content={description} />
        <meta name="robots" content="all" />
        <link
          rel="canonical"
          href={`https://www.petuniapets.com/${locale}/blog/dog-daycare-license-requirements-2025`}
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

          {/* Anchor nav */}
          <nav className="mb-8 text-sm">
            <ul className="flex flex-wrap gap-3">
              <li><a href="#tldr" className="underline hover:opacity-80">TL;DR</a></li>
              <li><a href="#overview" className="underline hover:opacity-80">How Licensing Works</a></li>
              <li><a href="#requirements" className="underline hover:opacity-80">What Facilities Must Submit</a></li>
              <li><a href="#inspection" className="underline hover:opacity-80">What Inspectors Look For</a></li>
              <li><a href="#renewal" className="underline hover:opacity-80">Renewal &amp; Ongoing Compliance</a></li>
              <li><a href="#verify" className="underline hover:opacity-80">How Owners Can Verify a License</a></li>
              <li><a href="#faq" className="underline hover:opacity-80">FAQ</a></li>
              <li><a href="#sources" className="underline hover:opacity-80">Sources</a></li>
            </ul>
          </nav>

          {/* TLDR */}
          <section id="tldr" className="mb-10">
            <h2 className="text-2xl font-semibold mb-3">Short Answer (TL;DR)</h2>

            <p>
              Dog daycare licensing varies by state, but almost all facilities must submit an application, pass an inspection, maintain sanitation and safety standards, keep proper vaccination and incident records, and renew their permit regularly. Owners can verify licensing through state or city lookup tools, by reviewing inspection documents, or by requesting to see the posted license at the facility. A licensed facility should be transparent, organized, and able to provide written protocols on grouping, emergencies, sanitation, and vaccination policies.
            </p>

            <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm mt-4">
              <strong>Legal note:</strong> Licensing rules differ by jurisdiction. Always confirm specific requirements with local or state authorities.
            </div>
          </section>

          {/* Overview */}
          <section id="overview" className="mb-10">
            <h2 className="text-2xl font-semibold mb-3">How Dog Daycare Licensing Works in the U.S.</h2>

            <p>
              In the United States, daycare licensing is controlled either by state agencies (such as Departments of Agriculture or Public Health) or by municipal animal control/health departments. The goal is to ensure public safety, reduce disease spread, and provide oversight for facilities where dogs interact in groups.
            </p>

            <ul className="list-disc pl-5 space-y-1">
              <li><strong>State licensing programs:</strong> Colorado&apos;s PACFA and Illinois&apos; Animal Welfare Act are examples.</li>
              <li><strong>Municipal licensing:</strong> Used in states like New Jersey, California, and Texas cities.</li>
              <li><strong>Hybrid models:</strong> State standards with local permits layered on top.</li>
            </ul>

            <p className="mt-4">
              For a state-by-state breakdown of how laws differ, see:{' '}
              <Link href={`/${locale}/blog/dog-daycare-and-boarding-laws-by-state-2025`} className="underline hover:opacity-80">
                Dog Daycare &amp; Boarding Laws by State (2025)
              </Link>.
            </p>
          </section>

          {/* Requirements */}
          <section id="requirements" className="mb-10">
            <h2 className="text-2xl font-semibold mb-3">What Facilities Must Submit To Get Licensed</h2>

            <p>
              Licensing applications typically require documentation proving the facility can operate safely, cleanly, and responsibly. While every jurisdiction varies, most applications include:
            </p>

            <ul className="list-disc pl-5 space-y-1">
              <li>Facility floor plan and housing layout</li>
              <li>Sanitation and cleaning schedule</li>
              <li>Emergency veterinary care plan</li>
              <li>Staff training protocols</li>
              <li>Grouping and temperament testing policies</li>
              <li>Vaccination requirements and recordkeeping methods</li>
              <li>Zoning approval or occupancy certification</li>
            </ul>

            <p className="mt-4">
              If you want to compare this to what Colorado requires under PACFA, see our in-depth breakdown:{' '}
              <Link href={`/${locale}/blog/colorado-dog-boarding-daycare-laws-2025`} className="underline hover:opacity-80">
                Colorado Dog Boarding &amp; Daycare Laws (2025)
              </Link>.
            </p>

            <p className="mt-4">
              For broader U.S. operational requirements (vaccines, ratios, grouping, records), see our national guide:{' '}
              <Link href={`/${locale}/blog/dog-daycare-boarding-requirements-2025`} className="underline hover:opacity-80">
                Dog Daycare &amp; Boarding Requirements (2025)
              </Link>.
            </p>
          </section>

          {/* Inspection */}
          <section id="inspection" className="mb-10">
            <h2 className="text-2xl font-semibold mb-3">Before Approval: What Inspectors Look For</h2>

            <p>
              A facility cannot be licensed until it passes an initial inspection. Inspectors review the physical environment, cleanliness, housing, air quality, recordkeeping, staffing, and ability to separate dogs safely.
            </p>

            <ul className="list-disc pl-5 space-y-1">
              <li>Clean, odor-free playrooms and kennels</li>
              <li>Ventilation and temperature control</li>
              <li>Physical barriers that prevent escapes or injuries</li>
              <li>Isolation space for sick dogs</li>
              <li>Accurate and organized records</li>
              <li>Incident logs and owner communication policies</li>
            </ul>

            <p className="mt-4">
              For a detailed nationwide look at inspection criteria, see:{' '}
              <Link href={`/${locale}/blog/dog-daycare-inspection-standards-2025`} className="underline hover:opacity-80">
                Dog Daycare &amp; Boarding Inspection Standards (2025)
              </Link>.
            </p>
          </section>

          {/* Renewal */}
          <section id="renewal" className="mb-10">
            <h2 className="text-2xl font-semibold mb-3">Renewal &amp; Ongoing Compliance</h2>

            <p>
              Once licensed, facilities must maintain compliance year-round. Renewal periods range from 1 to 3 years depending on the state or city.
            </p>

            <ul className="list-disc pl-5 space-y-1">
              <li>Annual or periodic inspections</li>
              <li>Updated vaccination and medical records</li>
              <li>Documented cleaning logs</li>
              <li>Updated emergency contact information</li>
              <li>Current zoning/occupancy compliance</li>
            </ul>

            <p className="mt-4">
              For a real-world comparison, see how Texas outlines facility obligations in our state guide:{' '}
              <Link href="http://localhost:3000/en/blog/texas-dog-boarding-daycare-laws-2025" className="underline hover:opacity-80">
                Texas Dog Boarding &amp; Daycare Laws (2025)
              </Link>.
            </p>
          </section>

          {/* Verify */}
          <section id="verify" className="mb-10">
            <h2 className="text-2xl font-semibold mb-3">How Owners Can Quickly Verify a License</h2>

            <p>
              Verifying a facility&apos;s license is one of the most important steps before booking daycare or boarding. Thankfully, most cities and states provide search tools or public contact offices.
            </p>

            <ol className="list-decimal pl-6 space-y-1">
              <li>Search your state or city licensing portal for &quot;animal boarding&quot; or &quot;dog daycare permit.&quot;</li>
              <li>Confirm the facility&apos;s name, address, license number, and expiration date.</li>
              <li>Ask to see the posted license on-site (required in most jurisdictions).</li>
              <li>Request inspection history and corrective action notes.</li>
              <li>Review written emergency and grouping policies before enrolling your dog.</li>
            </ol>

            <p className="mt-4">
              For a full walkthrough on verification, see:{' '}
              <Link href={`/${locale}/blog/how-to-verify-dog-daycare-license-2025`} className="underline hover:opacity-80">
                How To Verify Any Dog Daycare or Boarding License (2025)
              </Link>.
            </p>
          </section>

          {/* FAQ */}
          <section id="faq" className="mb-16">
            <h2 className="text-2xl font-semibold mb-3">Frequently Asked Questions</h2>

            <p>
              <strong>Do all dog daycares need a license?</strong><br />
              Most do. Some home-based sitters only need a permit after a certain animal count.
            </p>

            <p>
              <strong>Are licensing rules the same in every state?</strong><br />
              No. Some states regulate at the state level; others rely on cities or counties.
            </p>

            <p>
              <strong>Can I ask for a facility&apos;s inspection history?</strong><br />
              Yes. Inspection data is usually public or available upon request.
            </p>

            <p>
              <strong>Are vaccination rules part of licensing?</strong><br />
              Yes. Inspectors check for accurate, current vaccination records.
            </p>
          </section>

          {/* Sources */}
          <section id="sources" className="mb-16">
            <h2 className="text-2xl font-semibold mb-3">Sources &amp; References</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
              <li>State agriculture departments</li>
              <li>Municipal animal facility licensing programs</li>
              <li>Colorado PACFA regulatory documents</li>
              <li>Illinois Animal Welfare Act guidelines</li>
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
