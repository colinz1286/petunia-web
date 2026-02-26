'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function DogDaycareBoardingRequirements2025() {
  const locale = useLocale();

  const title = 'Dog Daycare & Boarding Requirements: Complete 2025 U.S. Guide (Vaccines, Ratios, Records, Facility Rules)';
  const date = 'Noevmber 24, 2025';
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

          {/* Anchor navigation */}
          <nav className="mb-8 text-sm">
            <ul className="flex flex-wrap gap-3">
              <li><a href="#tldr" className="underline hover:opacity-80">TL;DR</a></li>
              <li><a href="#overview" className="underline hover:opacity-80">How Requirements Work</a></li>
              <li><a href="#vaccines" className="underline hover:opacity-80">Vaccination Rules</a></li>
              <li><a href="#ratios" className="underline hover:opacity-80">Staffing &amp; Ratios</a></li>
              <li><a href="#records" className="underline hover:opacity-80">Records &amp; Documentation</a></li>
              <li><a href="#facility-standards" className="underline hover:opacity-80">Facility Standards</a></li>
              <li><a href="#licensing" className="underline hover:opacity-80">Licensing Requirements</a></li>
              <li><a href="#verify" className="underline hover:opacity-80">How To Verify Compliance</a></li>
              <li><a href="#faq" className="underline hover:opacity-80">FAQ</a></li>
              <li><a href="#sources" className="underline hover:opacity-80">Sources</a></li>
            </ul>
          </nav>

          {/* TLDR */}
          <section id="tldr" className="mb-10">
            <h2 className="text-2xl font-semibold mb-3">Short Answer (TL;DR)</h2>
            <p>
              Dog daycare and boarding requirements in the U.S. usually include vaccination documentation, sanitation standards, proper supervision, safe group management, written incident procedures, and compliance with state or municipal licensing rules. Some states license facilities directly, while others rely on local animal control or health departments. Your quickest move is to verify the facility&apos;s license, ask what standards they follow, and confirm the vaccination, grouping, emergency care, and incident-report protocols before booking.
            </p>
            <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm mt-4">
              <strong>Legal note:</strong> This guide is educational and not legal advice. Requirements change quickly and differ by state or city. Always verify with your state agency or local licensing office.
            </div>
          </section>

          {/* Overview */}
          <section id="overview" className="mb-10">
            <h2 className="text-2xl font-semibold mb-3">How U.S. Daycare &amp; Boarding Requirements Work</h2>
            <p>
              Requirements for dog daycare and boarding facilities come from two layers of government: the state and the municipality. States may regulate animal facilities through agriculture, public health, or consumer protection laws. Where statewide licensing does not exist, cities and counties issue kennel or boarding permits that reference local health codes and sanitation laws.
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>State-run models:</strong> A state department licenses, inspects, and sets standards.</li>
              <li><strong>Municipal models:</strong> Cities and counties issue their own kennel/daycare permits.</li>
              <li><strong>Hybrid systems:</strong> States set baseline standards while local agencies enforce them.</li>
            </ul>
            <p className="mt-4">
              For a broad overview of how states differ, you can see our companion article:{' '}
              <Link href={`/${locale}/blog/dog-daycare-and-boarding-laws-by-state-2025`} className="underline font-medium hover:opacity-80">
                Dog Daycare &amp; Boarding Laws by State (2025)
              </Link>.
            </p>
          </section>

          {/* Vaccination Rules */}
          <section id="vaccines" className="mb-10">
            <h2 className="text-2xl font-semibold mb-3">Vaccination Requirements</h2>

            <p>
              Most daycare and boarding facilities require proof of current vaccinations before a dog is allowed on-site. These requirements are sometimes mandated by state or local law and are almost always required by the facility&apos;s insurance policy.
            </p>

            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Rabies:</strong> Required by law in all U.S. states.</li>
              <li><strong>Distemper/Parvo (DHPP):</strong> Standard for group play safety.</li>
              <li><strong>Bordetella:</strong> Often required for daycare due to airborne transmission.</li>
              <li><strong>Influenza:</strong> Required by many high-volume facilities or large metros.</li>
            </ul>

            <p className="mt-4">
              For a deeper breakdown of what each vaccine covers and how facilities interpret &quot;current&quot; vaccination status, see our dedicated article:{' '}
              <Link href={`/${locale}/blog/dog-boarding-vaccination-requirements-2025`} className="underline font-medium hover:opacity-80">
                Vaccination &amp; Health Requirements for Boarding &amp; Daycare (2025)
              </Link>.
            </p>
          </section>

          {/* Staffing & Ratios */}
          <section id="ratios" className="mb-10">
            <h2 className="text-2xl font-semibold mb-3">Staffing Requirements &amp; Dog-to-Staff Ratios</h2>

            <p>
              Most states do not mandate exact dog-to-staff ratios in law, but nearly all require &quot;adequate supervision&quot; and the ability to intervene quickly. Industry best practice ranges from 10:1 to 15:1 for group play, with adjustments based on temperament, facility layout, and staff training.
            </p>

            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Active supervision:</strong> Staff must maintain visual contact and be able to reach dogs quickly.</li>
              <li><strong>Training:</strong> Many jurisdictions require staff to be trained in dog body language and safe handling.</li>
              <li><strong>Rest periods:</strong> Overstimulated dogs are at higher risk of conflict; structured downtime is essential.</li>
            </ul>
          </section>

          {/* Records */}
          <section id="records" className="mb-10">
            <h2 className="text-2xl font-semibold mb-3">Required Records &amp; Documentation</h2>

            <p>
              Daycare and boarding facilities must maintain accurate records for each dog. This helps inspectors confirm compliance and helps owners understand how incidents are handled.
            </p>

            <ul className="list-disc pl-5 space-y-1">
              <li>Owner contact information and emergency instructions</li>
              <li>Vaccination records and expiration dates</li>
              <li>Daily attendance logs</li>
              <li>Behavior notes and grouping decisions</li>
              <li>Incident/illness reports</li>
              <li>Medication logs when applicable</li>
            </ul>
          </section>

          {/* Facility Standards */}
          <section id="facility-standards" className="mb-10">
            <h2 className="text-2xl font-semibold mb-3">Facility Standards: Sanitation, Housing &amp; Safety</h2>

            <p>
              Whether mandated by law or local ordinance, most facilities must follow sanitation schedules, maintain safe group areas, and implement procedures for disease control. Inspectors typically evaluate:
            </p>

            <ul className="list-disc pl-5 space-y-1">
              <li>Cleanliness of playrooms, kennels, and shared spaces</li>
              <li>Ventilation, temperature control, and noise mitigation</li>
              <li>Secure fencing, flooring, and barriers</li>
              <li>Isolation areas for sick dogs</li>
              <li>Safe storage of chemicals, food, and medications</li>
            </ul>

            <p className="mt-4">
              For a deeper look at inspection criteria and what real inspectors look for, see:{' '}
              <Link href={`/${locale}/blog/dog-daycare-inspection-standards-2025`} className="underline font-medium hover:opacity-80">
                Dog Daycare &amp; Boarding Inspection Standards (2025)
              </Link>.
            </p>
          </section>

          {/* Licensing */}
          <section id="licensing" className="mb-10">
            <h2 className="text-2xl font-semibold mb-3">Licensing Requirements</h2>

            <p>
              Some states license dog daycare and boarding facilities directly, while others delegate licensing to cities or counties. Licensing usually requires an inspection, a fee, and proof of compliance with sanitation, facility layout, emergency planning, and staff supervision standards.
            </p>

            <p className="mt-4">
              Our in-depth guide explains how daycares and boarding facilities get licensed, what inspectors evaluate, and how owners can cross-check permit status:{' '}
              <Link href={`/${locale}/blog/dog-daycare-license-requirements-2025`} className="underline font-medium hover:opacity-80">
                Dog Daycare License Requirements (2025)
              </Link>.
            </p>
          </section>

          {/* Verify */}
          <section id="verify" className="mb-10">
            <h2 className="text-2xl font-semibold mb-3">How To Verify a Facility&apos;s Compliance</h2>

            <p>
              The fastest way to confirm whether a daycare or boarding facility meets legal requirements is to verify licensing and review inspection or permit data.
            </p>

            <ol className="list-decimal pl-6 space-y-1">
              <li>Search your state or city&apos;s official licensing portal.</li>
              <li>Confirm the facility&apos;s legal business name and address.</li>
              <li>Check expiration dates on the permit or license.</li>
              <li>Ask for written emergency vet policies and incident procedures.</li>
              <li>Request the last inspection date and whether any corrective actions were required.</li>
            </ol>

            <p className="mt-4">
              For a step-by-step lookup method, follow our dedicated guide:{' '}
              <Link href={`/${locale}/blog/how-to-verify-dog-daycare-license-2025`} className="underline font-medium hover:opacity-80">
                How To Verify Any Dog Daycare or Boarding License (2025)
              </Link>.
            </p>
          </section>

          {/* FAQ */}
          <section id="faq" className="mb-16">
            <h2 className="text-2xl font-semibold mb-3">Frequently Asked Questions</h2>

            <p>
              <strong>Are requirements the same in every state?</strong><br />
              No. States differ widely in whether they license facilities directly or delegate rules to local municipalities.
            </p>

            <p>
              <strong>Do all facilities require the same vaccines?</strong><br />
              Most require Rabies and DHPP, but Bordetella and Influenza rules vary by region.
            </p>

            <p>
              <strong>Are staffing ratios set by law?</strong><br />
              Rarely. Most jurisdictions require &quot;adequate supervision&quot; without specifying a number.
            </p>

            <p>
              <strong>How do I know if a facility follows the rules?</strong><br />
              Ask for a current permit, verify the license, and review recent inspection results.
            </p>
          </section>

          {/* Sources */}
          <section id="sources" className="mb-16">
            <h2 className="text-2xl font-semibold mb-3">Sources &amp; References</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
              <li>State agriculture and public health departments</li>
              <li>Municipal kennel licensing guidelines</li>
              <li>Animal facility sanitation codes</li>
              <li>Industry standards for supervision and grouping</li>
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
