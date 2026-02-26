'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function ColoradoDogBoardingDaycareLaws2025() {
  const locale = useLocale();

  const title =
    'Dog Boarding Laws in Colorado (2025): Permits, Inspections, Facility Requirements & Owner Rights';
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

  return (
    <>

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
              <li><a href="#overview" className="underline hover:opacity-80">How Colorado Regulates Boarding</a></li>
              <li><a href="#licensing" className="underline hover:opacity-80">Licensing Requirements</a></li>
              <li><a href="#inspections" className="underline hover:opacity-80">Inspection Standards</a></li>
              <li><a href="#facility" className="underline hover:opacity-80">Facility Rules &amp; Grouping</a></li>
              <li><a href="#records" className="underline hover:opacity-80">Health, Records &amp; Vaccines</a></li>
              <li><a href="#owner-rights" className="underline hover:opacity-80">Owner Rights</a></li>
              <li><a href="#verify" className="underline hover:opacity-80">How To Verify a Colorado Facility</a></li>
              <li><a href="#faq" className="underline hover:opacity-80">FAQ</a></li>
              <li><a href="#sources" className="underline hover:opacity-80">Sources</a></li>
            </ul>
          </nav>

          {/* TLDR */}
          <section id="tldr" className="mb-10">
            <h2 className="text-2xl font-semibold mb-3">Short Answer (TL;DR)</h2>

            <p>
              Colorado regulates dog boarding and daycare facilities under PACFA (Pet Animal Care Facilities Act), which sets statewide requirements for licensing, sanitation, housing, staffing, emergency protocols, and recordkeeping. Every boarding or daycare facility must hold a valid PACFA license, pass inspections, follow strict housing and sanitation rules, and maintain vaccination and incident records. As a dog owner, you have the right to ask for the facility&apos;s PACFA license, review inspection history, and understand their emergency care procedures before booking.
            </p>

            <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm mt-4">
              <strong>Legal note:</strong> This page summarizes Colorado requirements for educational purposes and is not legal advice. For final wording and updates, consult the Colorado Department of Agriculture.
            </div>
          </section>

          {/* Overview */}
          <section id="overview" className="mb-10">
            <h2 className="text-2xl font-semibold mb-3">How Colorado Regulates Dog Boarding &amp; Daycare</h2>

            <p>
              Colorado is one of the most clearly regulated states for animal care due to PACFA, administered by the Colorado Department of Agriculture. Unlike states that rely heavily on local ordinances, Colorado centralizes most oversight at the state level, giving owners a consistent framework to evaluate any facility.
            </p>

            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Statewide standards:</strong> All facilities must meet the same baseline requirements.</li>
              <li><strong>Annual inspections:</strong> Conducted by trained PACFA inspectors.</li>
              <li><strong>Mandatory licensing:</strong> Operating without a PACFA license is a violation.</li>
              <li><strong>Written protocols:</strong> Required for sanitation, grouping, emergencies, and disease control.</li>
            </ul>

            <p className="mt-4">
              For a national comparison of how states differ, see our overview:{' '}
              <Link href={`/${locale}/blog/dog-daycare-and-boarding-laws-by-state-2025`} className="underline hover:opacity-80">
                Dog Daycare &amp; Boarding Laws by State (2025)
              </Link>.
            </p>
          </section>

          {/* Licensing */}
          <section id="licensing" className="mb-10">
            <h2 className="text-2xl font-semibold mb-3">Colorado Licensing Requirements (PACFA)</h2>

            <p>
              Any business that boards, houses, or provides daycare for dogs in Colorado must hold a current PACFA license. PACFA licensing applies whether the facility operates as a commercial building or a home-based business above a certain number of animals.
            </p>

            <ul className="list-disc pl-5 space-y-1">
              <li>Application and fee submitted to the Colorado Department of Agriculture</li>
              <li>Initial inspection before license approval</li>
              <li>Facility layout and housing must meet PACFA standards</li>
              <li>Proof of sanitation protocols</li>
              <li>Emergency veterinary procedures documented in writing</li>
            </ul>

            <p className="mt-4">
              For a full explanation of how daycare and boarding facilities obtain licenses, you can reference our expanded guide:{' '}
              <Link href={`/${locale}/blog/dog-daycare-license-requirements-2025`} className="underline hover:opacity-80">
                Dog Daycare License Requirements (2025)
              </Link>.
            </p>
          </section>

          {/* Inspections */}
          <section id="inspections" className="mb-10">
            <h2 className="text-2xl font-semibold mb-3">Inspection Standards Under PACFA</h2>

            <p>
              PACFA inspectors evaluate facilities on safety, sanitation, ventilation, emergency access, recordkeeping, and ability to manage group play safely. Inspections occur annually and may also be triggered by complaints.
            </p>

            <ul className="list-disc pl-5 space-y-1">
              <li>Cleanliness of kennels, playrooms, and outdoor areas</li>
              <li>Ventilation and temperature control</li>
              <li>Secure fencing and separation barriers</li>
              <li>Written sanitation logs</li>
              <li>Isolation spaces for sick animals</li>
              <li>Incident and injury reporting protocols</li>
            </ul>

            <p className="mt-4">
              For nationwide context on what inspectors look for, see:{' '}
              <Link href={`/${locale}/blog/dog-daycare-inspection-standards-2025`} className="underline hover:opacity-80">
                Dog Daycare &amp; Boarding Inspection Standards (2025)
              </Link>.
            </p>
          </section>

          {/* Facility Standards */}
          <section id="facility" className="mb-10">
            <h2 className="text-2xl font-semibold mb-3">Facility Standards &amp; Grouping Rules</h2>

            <p>
              Colorado requires safe housing conditions, proper grouping procedures, and adequate visual supervision of all dogs. Group play must follow policies to prevent overcrowding or unsafe interactions.
            </p>

            <ul className="list-disc pl-5 space-y-1">
              <li>Safe flooring and barriers to prevent injury</li>
              <li>Appropriate rest areas separate from play zones</li>
              <li>Policies governing temperament testing</li>
              <li>Active human supervision at all times</li>
              <li>Written grouping criteria for playrooms</li>
            </ul>

            <p className="mt-4">
              If you want to compare grouping expectations in Colorado to states such as Texas, see our Texas guide:{' '}
              <Link href="http://localhost:3000/en/blog/texas-dog-boarding-daycare-laws-2025" className="underline font-medium hover:opacity-80">
                Texas Dog Boarding &amp; Daycare Laws (2025)
              </Link>.
            </p>
          </section>

          {/* Records & Vaccines */}
          <section id="records" className="mb-10">
            <h2 className="text-2xl font-semibold mb-3">Health, Records &amp; Vaccination Requirements</h2>

            <p>
              Colorado facilities must maintain complete records for each dog, including vaccination history, emergency contact information, and any incidents or illnesses. PACFA mandates accurate recordkeeping as part of annual inspection compliance.
            </p>

            <ul className="list-disc pl-5 space-y-1">
              <li>Rabies vaccination required by state law</li>
              <li>Distemper/Parvo (DHPP) required by most facilities</li>
              <li>Bordetella required for daycare in many cases</li>
              <li>Incident reports logged and shared with owners</li>
              <li>Daily attendance and grouping logs</li>
            </ul>

            <p className="mt-4">
              For a full vaccination breakdown across the U.S., see:{' '}
              <Link href={`/${locale}/blog/dog-boarding-vaccination-requirements-2025`} className="underline hover:opacity-80">
                Vaccination &amp; Health Requirements for Daycare &amp; Boarding (2025)
              </Link>.
            </p>
          </section>

          {/* Owner Rights */}
          <section id="owner-rights" className="mb-10">
            <h2 className="text-2xl font-semibold mb-3">Your Rights as a Colorado Dog Owner</h2>

            <p>
              Colorado owners have the right to request the facility&apos;s PACFA license, review inspection history, understand emergency plans, and receive copies of incident reports. Transparency is a built-in expectation under PACFA, and reputable facilities will gladly provide documentation.
            </p>
          </section>

          {/* Verify */}
          <section id="verify" className="mb-10">
            <h2 className="text-2xl font-semibold mb-3">How To Verify a Colorado Facility</h2>

            <p>
              You can confirm whether a facility is licensed and compliant by checking Colorado&apos;s public PACFA resources.
            </p>

            <ol className="list-decimal pl-6 space-y-1">
              <li>Search &quot;Colorado PACFA license lookup&quot; on an official .gov domain.</li>
              <li>Confirm the business name, address, and license number.</li>
              <li>Check the expiration date and any enforcement actions.</li>
              <li>Ask the facility to show its posted PACFA license.</li>
              <li>Request grouping, vaccination, and emergency protocols in writing.</li>
            </ol>

            <p className="mt-4">
              For a general nationwide lookup workflow, use our guide:{' '}
              <Link href={`/${locale}/blog/how-to-verify-dog-daycare-license-2025`} className="underline hover:opacity-80">
                How To Verify Any Dog Daycare or Boarding License (2025)
              </Link>.
            </p>
          </section>

          {/* FAQ */}
          <section id="faq" className="mb-16">
            <h2 className="text-2xl font-semibold mb-3">Frequently Asked Questions</h2>

            <p>
              <strong>Does every facility in Colorado need a PACFA license?</strong><br />
              Yes. Any business boarding or caring for dogs for a fee must hold a current PACFA license.
            </p>

            <p>
              <strong>Are staffing ratios defined in law?</strong><br />
              Colorado requires &quot;adequate supervision,&quot; but does not specify a single number.
            </p>

            <p>
              <strong>Can I ask for inspection reports?</strong><br />
              Yes. Inspection information is public under PACFA.
            </p>

            <p>
              <strong>What if a facility refuses to show its license?</strong><br />
              You should not use the facility. Licensing must be posted and available for review.
            </p>
          </section>

          {/* Sources */}
          <section id="sources" className="mb-16">
            <h2 className="text-2xl font-semibold mb-3">Sources &amp; References</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
              <li>Colorado Department of Agriculture — PACFA program</li>
              <li>Colorado Revised Statutes regarding animal care facilities</li>
              <li>PACFA inspection forms and facility guidelines</li>
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
