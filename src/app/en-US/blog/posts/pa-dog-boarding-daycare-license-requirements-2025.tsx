'use client';

import Head from 'next/head';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function PennsylvaniaDogBoardingDaycareLicenseRequirements2025() {
  const locale = useLocale();

  const title = 'Pennsylvania Dog Boarding & Daycare License Requirements (2025 Guide)';
  const date = 'October 29, 2025';
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
    'Clear, state-specific breakdown of licensing, inspection and regulatory obligations for dog boarding and daycare operations in Pennsylvania, including what you must do, how to verify compliance, and why it matters.';

  return (
    <>
      <Head>
        <title>{title} – Petunia Blog</title>
        <meta name="description" content={description} />
        <meta name="robots" content="all" />
        <link
          rel="canonical"
          href={`https://www.petuniapets.com/${locale}/blog/pa-dog-boarding-daycare-license-requirements-2025`}
        />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
      </Head>

      <main className="max-w-3xl mx-auto px-4 py-10 text-[#2c4a30]">
        {/* Meta */}
        <p className="text-sm text-gray-500 mb-2">Posted on {date}</p>
        <h1 className="text-3xl font-bold mb-4">{title}</h1>

        {/* Category pills */}
        <div className="flex flex-wrap gap-2 mb-6">
          {categories.map((categoryKey) => (
            <span
              key={categoryKey}
              className="text-xs bg-[#e4dbcb] text-[#2c4a30] px-3 py-1 rounded-full border border-[#d9cfc2]"
            >
              {categoryLabels[categoryKey] ?? categoryKey}
            </span>
          ))}
        </div>

        {/* Local anchor nav */}
        <nav className="mb-8 text-sm">
          <ul className="flex flex-wrap gap-3">
            <li><a href="#tl-dr" className="underline hover:opacity-80">TL;DR</a></li>
            <li><a href="#why-licensing-matters" className="underline hover:opacity-80">Why Licensing Matters</a></li>
            <li><a href="#thresholds-definitions" className="underline hover:opacity-80">Thresholds & Definitions</a></li>
            <li><a href="#application-fees-renewal" className="underline hover:opacity-80">Application, Fees & Renewal</a></li>
            <li><a href="#facility-requirements" className="underline hover:opacity-80">Facility Requirements & Inspections</a></li>
            <li><a href="#records-display" className="underline hover:opacity-80">Records, Tags & License Display</a></li>
            <li><a href="#daycare-boarding" className="underline hover:opacity-80">Daycare & Boarding-Specific Considerations</a></li>
            <li><a href="#penalties" className="underline hover:opacity-80">Penalties</a></li>
            <li><a href="#next-steps" className="underline hover:opacity-80">Next Steps</a></li>
            <li><a href="#sources" className="underline hover:opacity-80">📚 Sources</a></li>
          </ul>
        </nav>

        {/* TL;DR */}
        <section id="tl-dr" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Short Answer (TL;DR)</h2>
          <p className="mb-4">
            In Pennsylvania, any establishment that boards, shelters, transfers, or handles 26 or more dogs in a calendar year — including daycare or boarding operations — must secure a kennel license from the Pennsylvania Department of Agriculture (PDA) under the Dog Law (3 P.S. § 459-206 & § 459-207). Licenses expire December 31 each year, fees depend on the number of dogs managed, and the facility must meet minimum standards for housing, sanitation, record-keeping, and inspections. Operating without a license can result in penalties of $500–$1,000 per day.
          </p>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Legal note:</strong> This article is educational and not legal advice. Rules can change — always confirm current requirements with the PDA or legal counsel.
          </div>
        </section>

        {/* Why Licensing Matters */}
        <section id="why-licensing-matters" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Why Licensing Matters</h2>
          <p className="mb-3">
            Kennel licensing under Pennsylvania’s Dog Law ensures that facilities housing dogs — including daycares and boarding operations — meet state standards for health, safety, and humane care. The Bureau of Dog Law Enforcement within the PDA oversees licensing, inspections, and enforcement statewide.
          </p>
          <p>
            Compliance builds credibility with clients and protects your operation from liability. It also demonstrates a professional commitment to welfare standards and proper record-keeping.
          </p>
        </section>

        {/* Thresholds & Definitions */}
        <section id="thresholds-definitions" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Thresholds & Definitions</h2>
          <p className="mb-3">
            Under 3 P.S. § 459-102, a “kennel” includes any establishment in or through which at least 26 dogs are kept or transferred in a calendar year, or any boarding kennel as defined by the statute.
          </p>
          <p>
            In practice, if your business boards, shelters, or provides daycare for 26 or more dogs during a calendar year, you are required to obtain a kennel license from the PDA.
          </p>
        </section>

        {/* Application, Fees & Renewal */}
        <section id="application-fees-renewal" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Application, Fees & Renewal</h2>
          <p className="mb-3">
            Applications are due by January 1 of each year, and licenses expire on December 31. The PDA provides both commercial and non-commercial kennel application forms on its official site.
          </p>
          <p className="mb-3">
            License fees are based on the number of dogs handled annually:
          </p>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Class I – up to 50 dogs: $75 per year</li>
            <li>Class II – 51 to 100 dogs: $200 per year</li>
            <li>Class III – 101 to 150 dogs: $300 per year</li>
            <li>Class IV – 151 to 250 dogs: $400 per year</li>
            <li>Class V – 251 to 500 dogs: $500 per year</li>
            <li>Class VI – more than 500 dogs: $750 per year</li>
          </ul>
          <p>
            If your kennel’s dog count changes mid-year and moves into a higher class, you must re-apply for the appropriate license class within seven days.
          </p>
        </section>

        {/* Facility Requirements & Inspections */}
        <section id="facility-requirements" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Facility Requirements & Inspections</h2>
          <p className="mb-3">
            Title 7 Pa. Code Chapter 21 outlines standards for kennels, including space, sanitation, lighting, and water. Each dog’s primary enclosure must allow normal posture and movement, and the facility must remain clean, well-ventilated, and adequately lit.
          </p>
          <p className="mb-3">
            A PDA dog warden or inspector must approve your facility before a license is issued and may perform unannounced inspections thereafter. No license is valid without a successful inspection.
          </p>
        </section>

        {/* Records, Tags & License Display */}
        <section id="records-display" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Records, Tags & License Display</h2>
          <p className="mb-3">
            Licensed kennels must keep accurate records of all dogs boarded, transferred, or sold. Each dog three months of age or older must wear a tag when outside the kennel, and the current kennel license must be displayed prominently where visitors or inspectors can see it.
          </p>
          <p>
            Maintaining transparent records and visible licensing reassures both regulators and clients that your operation is compliant and professionally managed.
          </p>
        </section>

        {/* Daycare & Boarding-Specific Considerations */}
        <section id="daycare-boarding" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Daycare & Boarding-Specific Considerations</h2>
          <p className="mb-3">
            The 2023 amendment to the Dog Law (Act 18) revised requirements for out-of-state dogs boarding in Pennsylvania. Short-term stays of 30 days or fewer may be exempt from veterinary certificate rules, but facilities must still ensure vaccination and safety documentation are maintained.
          </p>
          <p className="mb-3">
            Even if your business primarily provides daycare without overnight stays, you fall under kennel licensing if total annual dog volume exceeds 26. Planning capacity ahead can prevent unintentional non-compliance.
          </p>
          <p>
            For additional operational context, see <Link href="https://www.petuniapets.com/en/blog/daycare-safety-standards-2025">Daycare Safety Standards 2025</Link>, <Link href="https://www.petuniapets.com/en/blog/hidden-risks-in-pet-boarding">Hidden Risks in Pet Boarding</Link>, and <Link href="https://www.petuniapets.com/en/blog/ollies-law-kennel-safety-2025">Ollie’s Law – Kennel Safety 2025</Link>.
          </p>
        </section>

        {/* Penalties */}
        <section id="penalties" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Penalties for Non-Compliance</h2>
          <p className="mb-3">
            Operating a kennel without a valid license is unlawful and subject to civil penalties of $500 to $1,000 per day. Displaying a revoked or expired license, falsifying records, or failing inspections can lead to suspension or criminal prosecution under 3 P.S. § 459-207.
          </p>
        </section>

        {/* Next Steps */}
        <section id="next-steps" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Next Steps for Facility Owners</h2>
          <ol className="list-decimal pl-6 space-y-2 mb-3">
            <li>Estimate your yearly dog volume to determine if you cross the 26-dog threshold.</li>
            <li>Download and complete the appropriate application from <a href="https://www.pa.gov/services/pda/apply-for-a-new-kennel-license.html" target="_blank" rel="noopener noreferrer" className="underline">pa.gov/services/pda/apply-for-a-new-kennel-license</a>.</li>
            <li>Prepare for inspection by reviewing Title 7 Pa. Code Chapter 21 facility standards.</li>
            <li>Maintain clear records, tag dogs correctly, and display your license certificate.</li>
            <li>Stay up-to-date on legislative updates such as Act 18 of 2023 for boarding imports.</li>
          </ol>
        </section>

        {/* Sources */}
        <section id="sources" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">📚 Sources & Official References</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            <li><a href="https://www.pa.gov/services/pda/apply-for-a-new-kennel-license.html" target="_blank" rel="noopener noreferrer">Pennsylvania Department of Agriculture – Apply for a New Kennel License</a></li>
            <li><a href="https://codes.findlaw.com/pa/title-3-ps-agriculture/pa-st-sect-3-459-206.html" target="_blank" rel="noopener noreferrer">3 P.S. § 459-206 – Kennel Licensing Classes & Fees</a></li>
            <li><a href="https://codes.findlaw.com/pa/title-3-ps-agriculture/pa-st-sect-3-459-207.html" target="_blank" rel="noopener noreferrer">3 P.S. § 459-207 – Kennel Requirements & Penalties</a></li>
            <li><a href="https://www.pacodeandbulletin.gov/Display/pacode?d=&file=%2Fsecure%2Fpacode%2Fdata%2F007%2Fchapter21%2Fchap21toc.html" target="_blank" rel="noopener noreferrer">Title 7 Pa. Code Chapter 21 – Kennels; Licensure</a></li>
            <li><a href="https://www.akc.org/legislative-alerts/pennsylvania-governor-signs-bill-regarding-boarding-dogs-state-passes-general-assembly/" target="_blank" rel="noopener noreferrer">AKC Legislative Alert – Act 18 of 2023 (Boarding Dogs From Out of State)</a></li>
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
