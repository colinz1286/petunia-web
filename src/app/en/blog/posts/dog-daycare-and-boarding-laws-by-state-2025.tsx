'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function DogDaycareAndBoardingLawsByState2025() {
  const locale = useLocale();

  const title = 'Dog Daycare & Boarding Laws by State (2025 Owner’s Guide)';
  const date = 'August 1, 2025';
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

        {/* Local anchor nav */}
        <nav className="mb-8 text-sm">
          <ul className="flex flex-wrap gap-3">
            <li><a href="#tl-dr" className="underline hover:opacity-80">TL;DR</a></li>
            <li><a href="#how-rules-work" className="underline hover:opacity-80">How the Rules Work</a></li>
            <li><a href="#verify-fast" className="underline hover:opacity-80">Verify a Facility Fast</a></li>
            <li><a href="#waivers-notices" className="underline hover:opacity-80">Waivers &amp; Notices</a></li>
            <li><a href="#inspections" className="underline hover:opacity-80">What Inspections Cover</a></li>
            <li><a href="#state-snapshots" className="underline hover:opacity-80">State Snapshots &amp; Links</a></li>
            <li><a href="#tour-checklist" className="underline hover:opacity-80">Owner Tour Checklist</a></li>
            <li><a href="#incident-steps" className="underline hover:opacity-80">If There Is an Incident</a></li>
            <li><a href="#faq" className="underline hover:opacity-80">FAQ</a></li>
            <li><a href="#sources" className="underline hover:opacity-80">📚 Sources</a></li>
          </ul>
        </nav>

        {/* TL;DR */}
        <section id="tl-dr" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Short Answer (TL;DR)</h2>
          <p className="mb-4">
            U.S. pet-care rules live at multiple layers: state statute/regulation and city or county ordinances. Some states license boarding/daycare statewide; others leave most permitting to municipalities under a state sanitary framework. A well-run facility will keep vaccination records, provide sanitary housing and isolation, document incidents, disclose emergency veterinary care policies, and cooperate with inspections. Your fastest move is to look up the license/permit on an official government site and ask targeted questions on your tour.
          </p>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Legal note:</strong> This page is educational and not legal advice. Rules can change quickly and may vary by city within the same state. Always verify with your state agency or local health/animal control office before relying on any summary.
          </div>
        </section>

        {/* HOW THE RULES WORK */}
        <section id="how-rules-work" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">How the Rules Typically Work</h2>
          <p className="mb-3">
            In many states, boarding and daycare are regulated as <em>animal facilities</em> with baseline standards for sanitation, housing, supervision, record-keeping, and cooperation with inspections. Where the state does not issue a single boarding license, cities and counties often run their own permit programs referencing state sanitary codes or animal health laws. Some jurisdictions also require <strong>plain-language consumer notices</strong> before intake, specifically around emergency veterinary treatment and payment responsibility.
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>State-centric models:</strong> A state department (often Agriculture/Public Health) licenses, inspects, and publishes rules.</li>
            <li><strong>Municipal models:</strong> Cities/counties issue local kennel/boarding permits and handle inspections under state guidance.</li>
            <li><strong>Hybrid models:</strong> State sets standards; municipalities issue permits and may add stricter local requirements.</li>
          </ul>
        </section>

        {/* VERIFY FAST */}
        <section id="verify-fast" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">How to Verify Any Facility in Minutes</h2>
          <ol className="list-decimal pl-6 space-y-1">
            <li>
              Search your state or city name plus &ldquo;animal boarding license&rdquo; or &ldquo;kennel permit&rdquo;; target official domains (.gov, .state.xx.us, .city.xx.us).
            </li>
            <li>
              Use the license lookup or call the listed permitting office. Confirm the facility name, address, license number, and expiration date.
            </li>
            <li>
              Ask how to see <strong>inspection history</strong> (some metros publish grades online).
            </li>
            <li>
              Cross-check details on the certificate posted on-site during your tour.
            </li>
          </ol>
        </section>

        {/* WAIVERS & NOTICES */}
        <section id="waivers-notices" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">What Waivers &amp; Consumer Notices Usually Mean</h2>
          <p className="mb-3">
            Boarding/daycare contracts typically include assumption-of-risk language, emergency treatment authorization, vaccination attestations, behavior disclosures, and often a media/photo release. Some states require <strong>written consumer notices</strong> that spell out where to file complaints and who pays for emergency veterinary care. If a clause is unclear, ask for a written explanation and keep copies of everything you sign.
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Assumption of risk / hold harmless:</strong> explains risks inherent to group housing; may limit some claims.</li>
            <li><strong>Emergency care:</strong> who authorizes treatment, which clinic is used, and how costs are handled.</li>
            <li><strong>Incident reporting:</strong> how scuffles or illness are documented and communicated.</li>
          </ul>
        </section>

        {/* INSPECTIONS */}
        <section id="inspections" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">What Inspections Usually Cover</h2>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Sanitation and disinfection schedules; safe chemical and food storage.</li>
            <li>Housing: space, barriers, flooring, ventilation, temperature, and noise control.</li>
            <li>Grouping practices, rest periods, and <strong>active supervision</strong> (line of sight/ability to intervene quickly).</li>
            <li>Isolation procedures for illness; vaccination documentation.</li>
            <li>Incident logging and owner communication practices.</li>
            <li>Overnight monitoring and emergency preparedness.</li>
          </ul>
          <p className="text-sm text-gray-600">
            State-licensed programs detail criteria in regulations; local programs embed them in ordinance, health code, or permit standards.
          </p>
        </section>

        {/* STATE SNAPSHOTS */}
        <section id="state-snapshots" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">State Snapshots &amp; Official Lookups (Examples)</h2>
          <p className="text-sm text-gray-600 mb-4">
            Use these examples as starting points. Cities may add stricter requirements than state minimums. Always check your city or county.
          </p>

          <div className="not-prose overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b">
                  <th className="py-2 pr-4">State / Locality</th>
                  <th className="py-2 pr-4">Primary Agency / Permit</th>
                  <th className="py-2 pr-4">License Model</th>
                  <th className="py-2 pr-4">Where to Verify / Read More</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b align-top">
                  <td className="py-3 pr-4"><strong>Massachusetts</strong></td>
                  <td className="py-3 pr-4">MDAR &ldquo;Ollie’s Law&rdquo; standards for boarding/daycare</td>
                  <td className="py-3 pr-4">State standards with municipal licensing/coordination</td>
                  <td className="py-3 pr-4">
                    <a href="https://www.mass.gov/info-details/ollies-law-information" target="_blank" rel="noopener noreferrer">
                      mass.gov/info-details/ollies-law-information
                    </a>
                  </td>
                </tr>
                <tr className="border-b align-top">
                  <td className="py-3 pr-4"><strong>Virginia</strong></td>
                  <td className="py-3 pr-4">Virginia Code articles for boarding facilities &amp; consumer notices</td>
                  <td className="py-3 pr-4">State statutes require emergency care &amp; written notices</td>
                  <td className="py-3 pr-4">
                    <div>
                      <a href="https://law.lis.virginia.gov/vacode/title3.2/section3.2-6518/" target="_blank" rel="noopener noreferrer">
                        law.lis.virginia.gov/.../3.2-6518
                      </a>
                    </div>
                    <div>
                      <a href="https://law.lis.virginia.gov/vacode/title3.2/chapter65/section3.2-6519/" target="_blank" rel="noopener noreferrer">
                        law.lis.virginia.gov/.../3.2-6519
                      </a>
                    </div>
                  </td>
                </tr>
                <tr className="border-b align-top">
                  <td className="py-3 pr-4"><strong>Colorado</strong></td>
                  <td className="py-3 pr-4">PACFA (Pet Animal Care Facilities Act) via CO Dept. of Agriculture</td>
                  <td className="py-3 pr-4">State licensure &amp; inspection for boarding/daycare</td>
                  <td className="py-3 pr-4">
                    <a href="https://www.sos.state.co.us/CCR/GenerateRulePdf.do?ruleVersionId=454" target="_blank" rel="noopener noreferrer">
                      sos.state.co.us/CCR (PACFA rules)
                    </a>
                  </td>
                </tr>
                <tr className="border-b align-top">
                  <td className="py-3 pr-4"><strong>Illinois</strong></td>
                  <td className="py-3 pr-4">Illinois Dept. of Agriculture — Animal Welfare Act</td>
                  <td className="py-3 pr-4">State licensure &amp; inspection (includes daycare)</td>
                  <td className="py-3 pr-4">
                    <a href="https://agr.illinois.gov/animals/animalhealth/animal-welfare.html" target="_blank" rel="noopener noreferrer">
                      agr.illinois.gov/.../animal-welfare
                    </a>
                  </td>
                </tr>
                <tr className="border-b align-top">
                  <td className="py-3 pr-4"><strong>New Jersey</strong></td>
                  <td className="py-3 pr-4">State sanitary rules; <em>municipal</em> licenses after inspection</td>
                  <td className="py-3 pr-4">Municipal licensing under state framework</td>
                  <td className="py-3 pr-4">
                    <div>
                      <a href="https://www.nj.gov/health/vph/animal-fac-rescue-org" target="_blank" rel="noopener noreferrer">
                        nj.gov/health/vph/animal-fac-rescue-org
                      </a>
                    </div>
                    <div>
                      <a href="https://www.nj.gov/health/vph/documents/guidelines_for_municipal_licensure_of_animal_facilities.pdf" target="_blank" rel="noopener noreferrer">
                        Municipal licensure guidelines (PDF)
                      </a>
                    </div>
                  </td>
                </tr>
                <tr className="border-b align-top">
                  <td className="py-3 pr-4"><strong>Pennsylvania</strong></td>
                  <td className="py-3 pr-4">PA Dog Law — Kennel licensing (statewide)</td>
                  <td className="py-3 pr-4">State kennel licenses; local rules may still apply</td>
                  <td className="py-3 pr-4">
                    <div>
                      <a href="https://www.pa.gov/services/pda/apply-for-a-new-kennel-license.html" target="_blank" rel="noopener noreferrer">
                        pa.gov/.../apply-for-a-new-kennel-license
                      </a>
                    </div>
                    <div>
                      <a href="https://www.pacodeandbulletin.gov/Display/pacode?d=&file=%2Fsecure%2Fpacode%2Fdata%2F007%2Fchapter21%2Fchap21toc.html" target="_blank" rel="noopener noreferrer">
                        PA Code Chapter 21 (Dog Law)
                      </a>
                    </div>
                  </td>
                </tr>
                <tr className="border-b align-top">
                  <td className="py-3 pr-4"><strong>New York City</strong></td>
                  <td className="py-3 pr-4">DOHMH Small Animal Boarding Establishment Permit</td>
                  <td className="py-3 pr-4">City permit with annual renewal; local health code applies</td>
                  <td className="py-3 pr-4">
                    <div>
                      <a href="https://nyc-business.nyc.gov/nycbusiness/description/small-animal-boarding-establishment-permit" target="_blank" rel="noopener noreferrer">
                        NYC business portal page
                      </a>
                    </div>
                    <div>
                      <a href="https://portal.311.nyc.gov/article/?kanumber=KA-01831" target="_blank" rel="noopener noreferrer">
                        NYC311 permit overview
                      </a>
                    </div>
                  </td>
                </tr>
                <tr className="border-b align-top">
                  <td className="py-3 pr-4"><strong>California (example: Los Angeles)</strong></td>
                  <td className="py-3 pr-4">Local animal facility licenses (city/county) + public health permits</td>
                  <td className="py-3 pr-4">Municipal/county permits; zoning &amp; inspections</td>
                  <td className="py-3 pr-4">
                    <div>
                      <a href="https://animalcare.lacounty.gov/facility-licensing/" target="_blank" rel="noopener noreferrer">
                        LA County facility licensing
                      </a>
                    </div>
                    <div>
                      <a href="https://www.laanimalservices.com/permits" target="_blank" rel="noopener noreferrer">
                        City of Los Angeles permit fees
                      </a>
                    </div>
                  </td>
                </tr>
                <tr className="border-b align-top">
                  <td className="py-3 pr-4"><strong>Texas</strong></td>
                  <td className="py-3 pr-4">Primarily local permits; state breeder rules are separate</td>
                  <td className="py-3 pr-4">Municipal/county licensing where applicable</td>
                  <td className="py-3 pr-4">
                    <span>Check your city/county animal services or health dept.</span>
                  </td>
                </tr>
                <tr className="border-b align-top">
                  <td className="py-3 pr-4"><strong>Florida</strong></td>
                  <td className="py-3 pr-4">Typically county/city permits and inspections</td>
                  <td className="py-3 pr-4">Municipal/county licensing; zoning &amp; sanitation rules</td>
                  <td className="py-3 pr-4">
                    <span>Check your county animal services or health dept.</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-sm text-gray-700">
            <em>Tip:</em> If your state is not listed above or you live outside a major metro, start with your <strong>county health department</strong> or <strong>animal control office</strong>, then ask whether a separate city permit is also required for your address.
          </p>
        </section>

        {/* TOUR CHECKLIST */}
        <section id="tour-checklist" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Owner Tour Checklist (Copy-Paste)</h2>
          <div className="rounded-lg border border-[#d9cfc2] p-4 bg-[#f6efe4]">
            <ol className="list-decimal pl-6 space-y-1">
              <li><strong>License/permit:</strong> See the current certificate; note number and expiration. Ask for the official lookup link.</li>
              <li><strong>Supervision &amp; ratios:</strong> Daytime and peak-hour ratios; staff training in dog body language and pet first aid/CPR.</li>
              <li><strong>Health protocols:</strong> Vaccination records, isolation procedures, cleaning schedule, policy for kennel cough/giardia/parasites.</li>
              <li><strong>Grouping &amp; rest:</strong> How play groups are formed (size/temperament), rest periods, and the overnight routine.</li>
              <li><strong>Incident handling:</strong> What triggers a written report; what you will be told; sample report template.</li>
              <li><strong>Emergency vet care:</strong> Which clinic is used after hours, who authorizes treatment, and how costs are handled.</li>
              <li><strong>Special needs:</strong> Medication handling, seizure protocols, diabetic timing; where meds are stored and double-checked.</li>
              <li><strong>Communication:</strong> Live cams or report cards; promised response time for owner questions.</li>
            </ol>
          </div>
        </section>

        {/* INCIDENT STEPS */}
        <section id="incident-steps" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">If There Is an Incident</h2>
          <ol className="list-decimal pl-6 space-y-1">
            <li>Request the written incident report with timing, staff present, and actions taken.</li>
            <li>Photograph injuries (if any) and save all veterinary receipts.</li>
            <li>Review your contract and any required consumer notices about emergency treatment and costs.</li>
            <li>Contact the licensing office on the posted permit for inspection history and complaint procedures if needed.</li>
          </ol>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">Frequently Asked Questions</h2>

          <p className="mb-3">
            <strong>Do all states license dog daycare and boarding?</strong><br />
            No. Some states license and inspect directly. Others rely on municipal licensing under state sanitary rules. Large metros often have their own permit systems and public inspection grades.
          </p>

          <p className="mb-3">
            <strong>Are staff-to-dog ratios set in law?</strong><br />
            Rarely as a single number. Most rules require adequate supervision and safe grouping. Ask how ratios change at peak times and how staff are trained to intervene.
          </p>

          <p className="mb-3">
            <strong>Can a facility accept vaccination titers instead of shots?</strong><br />
            It depends on facility policy and local rules. Rabies is governed by separate law and titers are generally not accepted in place of vaccination for legal purposes. Ask well in advance.
          </p>

          <p className="mb-3">
            <strong>Who pays for emergency vet care?</strong><br />
            Contracts usually explain this, and some jurisdictions require a written consumer notice before intake. If you cannot find the policy in writing, ask for it and keep a copy.
          </p>

          <p>
            <strong>How do I check if a home-based sitter needs a license?</strong><br />
            Many cities (and some states) require a permit once animals are boarded for a fee or above a threshold count. Call your municipal clerk or local health department for specifics.
          </p>
        </section>

        {/* SOURCES */}
        <section id="sources" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">📚 Sources &amp; Official References (Selected)</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            <li>
              Massachusetts — Ollie’s Law information hub:{' '}
              <a href="https://www.mass.gov/info-details/ollies-law-information" target="_blank" rel="noopener noreferrer">
                https://www.mass.gov/info-details/ollies-law-information
              </a>
            </li>
            <li>
              Virginia Code — Boarding establishments &amp; consumer notices:{' '}
              <a href="https://law.lis.virginia.gov/vacode/title3.2/section3.2-6518/" target="_blank" rel="noopener noreferrer">
                §3.2-6518
              </a>{' '}
              &middot{' '}
              <a href="https://law.lis.virginia.gov/vacode/title3.2/chapter65/section3.2-6519/" target="_blank" rel="noopener noreferrer">
                §3.2-6519
              </a>
            </li>
            <li>
              Colorado — PACFA rules (boarding/daycare licensure):{' '}
              <a href="https://www.sos.state.co.us/CCR/GenerateRulePdf.do?ruleVersionId=454" target="_blank" rel="noopener noreferrer">
                https://www.sos.state.co.us/CCR/GenerateRulePdf.do?ruleVersionId=454
              </a>
            </li>
            <li>
              Illinois — Animal Welfare Act program overview:{' '}
              <a href="https://agr.illinois.gov/animals/animalhealth/animal-welfare.html" target="_blank" rel="noopener noreferrer">
                https://agr.illinois.gov/animals/animalhealth/animal-welfare.html
              </a>
            </li>
            <li>
              New Jersey — Municipal licensure guidance &amp; inspections:{' '}
              <a href="https://www.nj.gov/health/vph/animal-fac-rescue-org" target="_blank" rel="noopener noreferrer">
                https://www.nj.gov/health/vph/animal-fac-rescue-org
              </a>{' '}
              &middot{' '}
              <a href="https://www.nj.gov/health/vph/documents/guidelines_for_municipal_licensure_of_animal_facilities.pdf" target="_blank" rel="noopener noreferrer">
                https://www.nj.gov/health/vph/documents/guidelines_for_municipal_licensure_of_animal_facilities.pdf
              </a>
            </li>
            <li>
              Pennsylvania — Kennel licensing &amp; Dog Law references:{' '}
              <a href="https://www.pa.gov/services/pda/apply-for-a-new-kennel-license.html" target="_blank" rel="noopener noreferrer">
                https://www.pa.gov/services/pda/apply-for-a-new-kennel-license.html
              </a>{' '}
              &middot{' '}
              <a href="https://www.pacodeandbulletin.gov/Display/pacode?d=&file=%2Fsecure%2Fpacode%2Fdata%2F007%2Fchapter21%2Fchap21toc.html" target="_blank" rel="noopener noreferrer">
                https://www.pacodeandbulletin.gov/.../chapter21
              </a>
            </li>
            <li>
              New York City — Small Animal Boarding Establishment Permit:{' '}
              <a href="https://nyc-business.nyc.gov/nycbusiness/description/small-animal-boarding-establishment-permit" target="_blank" rel="noopener noreferrer">
                https://nyc-business.nyc.gov/nycbusiness/description/small-animal-boarding-establishment-permit
              </a>{' '}
              &middot{' '}
              <a href="https://portal.311.nyc.gov/article/?kanumber=KA-01831" target="_blank" rel="noopener noreferrer">
                https://portal.311.nyc.gov/article/?kanumber=KA-01831
              </a>
            </li>
            <li>
              Los Angeles County — Facility licensing:{' '}
              <a href="https://animalcare.lacounty.gov/facility-licensing/" target="_blank" rel="noopener noreferrer">
                https://animalcare.lacounty.gov/facility-licensing/
              </a>{' '}
              &middot{' '}
              <a href="https://www.laanimalservices.com/permits" target="_blank" rel="noopener noreferrer">
                https://www.laanimalservices.com/permits
              </a>
            </li>
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
