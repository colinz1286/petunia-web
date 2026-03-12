'use client';

// SEO weakness notes: page is still new; overlapping topic coverage with another strong site page; likely limited backlinks
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function DogBoardingInspectionStandards2025() {
  const locale = useLocale();

  const title =
    'Dog Boarding Inspection Standards: What States Look For & How Owners Can Spot Red Flags (2025)';
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

          {/* Nav */}
          <nav className="mb-8 text-sm">
            <ul className="flex flex-wrap gap-3">
              <li><a href="#tldr" className="underline hover:opacity-80">TL;DR</a></li>
              <li><a href="#overview" className="underline hover:opacity-80">How Inspections Work</a></li>
              <li><a href="#sanitation" className="underline hover:opacity-80">Sanitation Standards</a></li>
              <li><a href="#housing" className="underline hover:opacity-80">Housing &amp; Safety</a></li>
              <li><a href="#grouping" className="underline hover:opacity-80">Grouping &amp; Supervision</a></li>
              <li><a href="#records" className="underline hover:opacity-80">Records &amp; Documentation</a></li>
              <li><a href="#red-flags" className="underline hover:opacity-80">Red Flags</a></li>
              <li><a href="#verify" className="underline hover:opacity-80">How Owners Can Verify</a></li>
              <li><a href="#faq" className="underline hover:opacity-80">FAQ</a></li>
              <li><a href="#sources" className="underline hover:opacity-80">Sources</a></li>
            </ul>
          </nav>

          {/* TLDR */}
          <section id="tldr" className="mb-10">
            <h2 className="text-2xl font-semibold mb-3">Short Answer (TL;DR)</h2>
            <p>
              Inspections evaluate whether boarding and daycare facilities follow required standards for cleanliness, ventilation, housing, safety, supervision, recordkeeping, and emergency planning. A well-run facility should be transparent about inspection history, show clear sanitation practices, and provide access to written policies. Owners can spot problems quickly by evaluating odors, staff attentiveness, overcrowded groups, poor fencing, dirty water bowls, or hesitation to show licenses or inspection results.
            </p>
            <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm mt-4">
              <strong>Note:</strong> This guide summarizes common statewide and municipal standards. Requirements differ, so always confirm with your city or state.
            </div>
          </section>

          {/* Overview */}
          <section id="overview" className="mb-10">
            <h2 className="text-2xl font-semibold mb-3">How Boarding &amp; Daycare Inspections Work</h2>

            <p>
              Inspections serve two purposes: preventing disease and injury, and verifying that facilities follow the legal requirements of their state or city. Some states, like Colorado, manage inspections at the state level, while others rely on municipal animal care agencies.
            </p>

            <ul className="list-disc pl-5 space-y-1">
              <li><strong>State inspectors:</strong> Used in Colorado, Illinois, and other PACFA-style states.</li>
              <li><strong>Local inspectors:</strong> Used in states where cities run kennel/daycare permits.</li>
              <li><strong>Complaint-triggered inspections:</strong> Common nationwide.</li>
              <li><strong>Annual or biannual reviews:</strong> Required in many states.</li>
            </ul>

            <p className="mt-4">
              If you want to see how inspection obligations fit into requirements overall, compare our national guide:{' '}
              <Link href={`/${locale}/blog/dog-daycare-boarding-requirements-2025`} className="underline hover:opacity-80">
                Dog Daycare &amp; Boarding Requirements (2025)
              </Link>.
            </p>
          </section>

          {/* Sanitation */}
          <section id="sanitation" className="mb-10">
            <h2 className="text-2xl font-semibold mb-3">Sanitation Standards</h2>

            <p>
              Inspectors pay close attention to sanitation because disease spreads quickly in group-care environments. A facility must demonstrate regular cleaning schedules, safe chemical storage, and proper waste handling.
            </p>

            <ul className="list-disc pl-5 space-y-1">
              <li>Frequent cleaning and disinfection of floors and playrooms</li>
              <li>Daily kennel sanitation</li>
              <li>Fresh water accessible at all times</li>
              <li>Safe separation of cleaning supplies and dog food</li>
              <li>No strong ammonia or sewage odors</li>
            </ul>
          </section>

          {/* Housing */}
          <section id="housing" className="mb-10">
            <h2 className="text-2xl font-semibold mb-3">Housing, Ventilation &amp; Safety Systems</h2>

            <p>
              Housing must meet minimum space requirements, prevent injuries, and provide clean airflow. Inspectors also evaluate noise control, hazards, and emergency exits.
            </p>

            <ul className="list-disc pl-5 space-y-1">
              <li>Secure fencing and escape prevention</li>
              <li>Non-slip flooring</li>
              <li>Fire suppression or emergency procedures</li>
              <li>Safe spacing between kennels</li>
              <li>Temperature and ventilation controls</li>
            </ul>

            <p className="mt-4">
              To see how states like Colorado implement these rules under PACFA, read:{' '}
              <Link href={`/${locale}/blog/colorado-dog-boarding-daycare-laws-2025`} className="underline hover:opacity-80">
                Colorado Dog Boarding &amp; Daycare Laws (2025)
              </Link>.
            </p>
          </section>

          {/* Grouping */}
          <section id="grouping" className="mb-10">
            <h2 className="text-2xl font-semibold mb-3">Grouping &amp; Supervision Requirements</h2>

            <p>
              Group-play safety is one of the most important inspection areas because most incidents occur during free play. Inspectors evaluate whether staff can monitor dogs effectively and whether grouping decisions are based on behavior, size, temperament, and energy levels.
            </p>

            <ul className="list-disc pl-5 space-y-1">
              <li>Active supervision and clear sightlines</li>
              <li>Written grouping criteria</li>
              <li>Safe staff-to-dog ratios (no overcrowding)</li>
              <li>Policies for handling new or reactive dogs</li>
              <li>Documented rest periods</li>
            </ul>

            <p className="mt-4">
              Many of these expectations overlap with licensing standards. You can compare them directly in our licensing guide:{' '}
              <Link href={`/${locale}/blog/dog-daycare-license-requirements-2025`} className="underline hover:opacity-80">
                Dog Daycare License Requirements (2025)
              </Link>.
            </p>
          </section>

          {/* Records */}
          <section id="records" className="mb-10">
            <h2 className="text-2xl font-semibold mb-3">Records Inspectors Review</h2>

            <p>
              Inspectors examine records to confirm compliance and track patterns in incidents or illnesses. Organized records are a strong indicator of a well-managed facility.
            </p>

            <ul className="list-disc pl-5 space-y-1">
              <li>Vaccination records</li>
              <li>Attendance logs and grouping decisions</li>
              <li>Incident and injury reports</li>
              <li>Medication administration logs</li>
              <li>Cleaning and sanitation logs</li>
            </ul>

            <p className="mt-4">
              For statewide rules on vaccines and medical documentation, see:{' '}
              <Link href={`/${locale}/blog/dog-boarding-vaccination-requirements-2025`} className="underline hover:opacity-80">
                Vaccination &amp; Health Requirements for Daycare &amp; Boarding (2025)
              </Link>.
            </p>
          </section>

          {/* Red Flags */}
          <section id="red-flags" className="mb-10">
            <h2 className="text-2xl font-semibold mb-3">Red Flags Owners Should Watch For</h2>

            <p>
              Even without formal inspection training, owners can identify many red flags during a tour or first visit.
            </p>

            <ul className="list-disc pl-5 space-y-1">
              <li>Strong urine or feces odors</li>
              <li>Overcrowded playrooms</li>
              <li>Dogs left unattended</li>
              <li>Excessive barking or visible distress</li>
              <li>Staff unable to explain grouping or emergency policies</li>
              <li>Dirty water bowls or unsafe flooring</li>
              <li>Facility refuses to show license or inspection documents</li>
            </ul>

            <p className="mt-4">
              You can compare inspection expectations across states using our legal guide:{' '}
              <Link href={`/${locale}/blog/dog-daycare-and-boarding-laws-by-state-2025`} className="underline hover:opacity-80">
                Dog Daycare &amp; Boarding Laws by State (2025)
              </Link>.
            </p>

            <p className="mt-4">
              We also offer a step-by-step verification guide:{' '}
              <Link href={`/${locale}/blog/how-to-verify-dog-daycare-license-2025`} className="underline hover:opacity-80">
                How To Verify Any Dog Daycare or Boarding License (2025)
              </Link>.
            </p>
          </section>

          {/* Verify */}
          <section id="verify" className="mb-10">
            <h2 className="text-2xl font-semibold mb-3">How Owners Can Verify Inspection Status</h2>

            <p>
              Most states or cities provide online tools for looking up facility permits, license numbers, or inspection results.
            </p>

            <ol className="list-decimal pl-6 space-y-1">
              <li>Search &quot;dog daycare license lookup&quot; plus your state or city.</li>
              <li>Confirm license number, expiration date, and legal business name.</li>
              <li>Request recent inspection reports from the facility.</li>
              <li>Check whether corrective actions were required.</li>
              <li>Ask for written protocols on grouping, sanitation, and emergencies.</li>
            </ol>

            <p className="mt-4">
              For a deeper look at how licensing and verification fit together, see our licensing guide:{' '}
              <Link href={`/${locale}/blog/dog-daycare-license-requirements-2025`} className="underline hover:opacity-80">
                Dog Daycare License Requirements (2025)
              </Link>.
            </p>
          </section>

          {/* FAQ */}
          <section id="faq" className="mb-16">
            <h2 className="text-2xl font-semibold mb-3">Frequently Asked Questions</h2>

            <p>
              <strong>Do all states require inspections?</strong><br />
              Most do, but some rely on local authorities rather than statewide programs.
            </p>

            <p>
              <strong>Are inspections announced?</strong><br />
              Many are unannounced to ensure accurate evaluation.
            </p>

            <p>
              <strong>Can I ask for the latest inspection report?</strong><br />
              Yes. Many states treat these as public records.
            </p>

            <p>
              <strong>Are red flags always obvious?</strong><br />
              Not always, but odors, inattentive staff, crowding, and poor recordkeeping are strong indicators.
            </p>
          </section>

          {/* Sources */}
          
        {/* Expanded depth content start */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">What serious facilities document, not just promise</h2>
          <p className="mb-4">A polished tour is not the same thing as a controlled operation. When licensing, inspection, and approval are part of the topic, the real signal is whether the facility can show written systems for sanitation, grouping, incident response, medication handling, emergency escalation, and owner communication. Strong operators do not rely on memory when conditions get busy.</p>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li><strong>Written SOPs:</strong> cleaning logs, isolation workflow, bite or injury response, and late pickup or overnight contingencies.</li>
            <li><strong>Training proof:</strong> who trains staff, how refreshers are logged, and what skills are required before someone works alone.</li>
            <li><strong>Records that match the policy:</strong> vaccination review, temperament notes, feeding or medication instructions, and corrective actions after incidents.</li>
            <li><strong>Maintenance discipline:</strong> surfaces, drains, fencing, ventilation, and noise control should show operational care, not last-minute cleanup.</li>
          </ul>
          <p className="mb-0">The more a facility can show you on paper, the less you have to guess about what happens when the day gets complicated.</p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">A fast audit checklist for owners and operators</h2>
          <ol className="list-decimal pl-5 space-y-2 mb-0">
            <li>Confirm the exact license or permit name, expiration date, and the agency that issued it.</li>
            <li>Ask what would happen if your dog became ill, injured, or behaviorally unsafe at the busiest hour of the day.</li>
            <li>Review whether the written policy matches the physical space you can actually see.</li>
            <li>Look for proof of follow-through: logs, posted procedures, staff communication tools, and recent inspection results.</li>
            <li>Walk away if answers are vague, defensive, or dependent on a single person always being present.</li>
          </ol>
        </section>
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Related Reading Inside Petunia</h2>
          <ul className="list-disc pl-5 space-y-2 mb-0">
            <li><a href="https://www.petuniapets.com/en/blog/best-dog-boarding-and-daycare-software-buyer-guide" className="underline hover:opacity-80">The Best Dog Boarding &amp; Daycare Software? A No-Nonsense Buyer’s Guide (Frameworks, Checklists, Cost Math &amp; Red Flags)</a></li>
            <li><a href="https://www.petuniapets.com/en/blog/advocacy-pressure-boarding-safety-practices" className="underline hover:opacity-80">Advocacy Pressure on Boarding Safety: Why Standards, Training, and Accountability Are Becoming Non-Negotiable</a></li>
            <li><a href="https://www.petuniapets.com/en/blog/boston-terrier-eye-problems-2025" className="underline hover:opacity-80">Boston Terrier Eye Problems (2025): Cherry Eye, Ulcers, Cataracts, Red Flags &amp; Long-Term Care</a></li>
          </ul>
        </section>
        {/* Expanded depth content end */}
<section id="sources" className="mb-16">
            <h2 className="text-2xl font-semibold mb-3">Sources &amp; References</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
              <li>PACFA inspection documents (Colorado Department of Agriculture)</li>
              <li>State and municipal kennel licensing standards</li>
              <li>Animal facility sanitation and housing regulations</li>
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
