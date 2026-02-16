'use client';

import Head from 'next/head';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function DoKennelsAcceptTiterTests() {
  const locale = useLocale();

  const title =
    'Do Kennels Accept Titer Tests? State Rules, Facility Policies & What to Ask';
  const date = 'July 30, 2025';
  const categories = ['owner', 'boarding'] as const;

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
    'Do kennels accept titer tests instead of vaccine records? A practical, evidence-informed guide to what titers do (and don’t) prove, how U.S. rabies law impacts boarding/daycare, examples of state and municipal rules, common facility policies, how to ask your kennel, medical exemptions, and owner/operator checklists.';

  return (
    <>
      <Head>
        <title>{title} – Petunia Blog</title>
        <meta name="description" content={description} />
        <meta name="robots" content="index,follow" />
        
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
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

        {/* Local anchor nav */}
        <nav className="mb-8 text-sm">
          <ul className="flex flex-wrap gap-3">
            <li><a href="#tl-dr" className="underline hover:opacity-80">TL;DR</a></li>
            <li><a href="#what-is-a-titer" className="underline hover:opacity-80">What Is a Titer?</a></li>
            <li><a href="#what-titers-show" className="underline hover:opacity-80">What Titers Prove vs. Don’t</a></li>
            <li><a href="#rabies-law" className="underline hover:opacity-80">Rabies Law vs. Kennel Policy</a></li>
            <li><a href="#state-rules" className="underline hover:opacity-80">State & City Rule Examples</a></li>
            <li><a href="#facility-policies" className="underline hover:opacity-80">How Facilities Decide</a></li>
            <li><a href="#ask-kennel" className="underline hover:opacity-80">What to Ask Your Kennel</a></li>
            <li><a href="#medical-exemptions" className="underline hover:opacity-80">Medical Exemptions</a></li>
            <li><a href="#documentation" className="underline hover:opacity-80">Docs, Proof & Timing</a></li>
            <li><a href="#risk-liability" className="underline hover:opacity-80">Risk & Liability</a></li>
            <li><a href="#ops-notes" className="underline hover:opacity-80">Notes for Operators</a></li>
            <li><a href="#templates" className="underline hover:opacity-80">Templates & Scripts</a></li>
            <li><a href="#faq" className="underline hover:opacity-80">FAQ</a></li>
            <li><a href="#sources" className="underline hover:opacity-80">📚 Sources</a></li>
          </ul>
        </nav>

        {/* DISCLAIMER */}
        <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm mb-8">
          <strong>Important:</strong> This article is for general information to help owners and facilities
          frame conversations about titers and boarding requirements. It is <em>not</em> legal advice or
          veterinary guidance for your individual pet. Always follow your veterinarian’s recommendations
          and check the current rules where you live and board.
        </div>

        {/* TL;DR */}
        <section id="tl-dr" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Short Answer (TL;DR)</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Rabies:</strong> In the U.S., <em>rabies antibody titers are not accepted</em> as a legal substitute
              for current rabies vaccination for domestic purposes. Boarding/daycare nearly always require
              a valid rabies vaccine certificate, even if a titer is high.
            </li>
            <li>
              <strong>Core viral vaccines (CDV/distemper & CPV/parvovirus):</strong> Some facilities may accept
              recent titers in place of boosters; others won’t. Acceptance varies by <em>state/municipal rules</em>
              and <em>facility policy</em>.
            </li>
            <li>
              <strong>Non-core vaccines (e.g., Bordetella, leptospirosis, CIV):</strong> Titers are generally
              <em>not</em> considered reliable proxies for protection, so facilities that accept titers for these
              are uncommon.
            </li>
            <li>
              <strong>What to do:</strong> Ask your kennel <em>before</em> testing; share your vet’s letter explaining
              the titer and your dog’s health history; confirm timing (how recent the titer must be) and any
              extra requirements (e.g., Bordetella regardless of titers).
            </li>
          </ul>
        </section>

        {/* WHAT IS A TITER */}
        <section id="what-is-a-titer" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">What Is a Titer?</h2>
          <p className="mb-3">
            A <strong>titer</strong> is a laboratory measurement of circulating antibodies in the blood against a
            given pathogen. After maternal antibodies fade, a measurable antibody level generally indicates
            prior vaccination or exposure. For some <em>viral</em> diseases (notably canine distemper virus, CDV,
            and canine parvovirus, CPV), a measurable antibody response typically reflects meaningful
            immune memory. For others—especially several <em>bacterial</em> diseases—antibody levels are much
            harder to interpret in terms of real-world protection.
          </p>
          <p>
            In practice, titers can be useful when a dog has a history of vaccine reactions, an uncertain
            vaccine history (e.g., rescue), or when an owner and veterinarian are considering alternatives
            to routine boosting. Whether titers can be used to <em>replace</em> proof of vaccination for boarding
            is a separate question—one that depends on law and policy, not just biology.
          </p>
        </section>

        {/* WHAT TITERS SHOW */}
        <section id="what-titers-show" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">What Titers Prove—and What They Don’t</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4">
              <h3 className="font-semibold mb-2">Often Useful</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  <strong>CDV (distemper)</strong> & <strong>CPV (parvovirus):</strong> Virus-neutralization (VN) and
                  hemagglutination-inhibition (HI) based titers are widely used in veterinary practice and
                  correlate with prior immune response.
                </li>
                <li>
                  <strong>CAV (hepatitis/adenovirus):</strong> Less commonly used than CDV/CPV, but still more interpretable
                  than bacterial diseases.
                </li>
                <li>
                  <strong>Decision support:</strong> In dogs with prior normal responses, a positive titer may support
                  deferring a booster under a veterinarian’s guidance.
                </li>
              </ul>
            </div>
            <div className="rounded-md border border-[#d9cfc2] bg-[#fffaf2] p-4">
              <h3 className="font-semibold mb-2">Limited / Not Substitutes</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  <strong>Rabies:</strong> Antibody titers are <em>not</em> accepted as a legal substitute for vaccination in
                  the U.S. for routine domestic purposes (licensing, exposure management).
                </li>
                <li>
                  <strong>Bordetella, Leptospira, Lyme, CIV:</strong> Antibody levels don’t reliably predict protection;
                  facilities generally require vaccination rather than titers.
                </li>
                <li>
                  <strong>Assay variation:</strong> ELISAs can detect antibodies that aren’t involved in protection;
                  labs differ; “protective titer” values are not standardized across labs.
                </li>
              </ul>
            </div>
          </div>
          <p className="text-sm text-gray-700 mt-3">
            Bottom line: A “positive titer” can be excellent information for you and your vet—but it does not
            automatically meet a kennel’s requirements.
          </p>
        </section>

        {/* RABIES LAW VS KENNEL POLICY */}
        <section id="rabies-law" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Rabies Law vs. Kennel Policy</h2>
          <p className="mb-3">
            <strong>Rabies is special</strong> because it’s a deadly zoonotic disease with public-health implications,
            so rabies vaccination is governed by state/local law and national compendia. In the U.S.,
            rabies antibody titers are <em>not</em> recognized as proof of immunity for domestic purposes such
            as pet licensing, exposure management, or meeting kennel vaccination requirements. Even
            owners who prefer titers should expect kennels to require a current rabies certificate signed
            by a veterinarian.
          </p>
          <p>
            For <strong>non-rabies antigens</strong>, acceptance of titers is often left to the facility and any applicable
            state/municipal rules. Some jurisdictions explicitly <em>prohibit</em> titers as vaccine verification for
            commercial animal establishments; others allow them for certain viruses; many say nothing,
            leaving policy to the kennel or daycare.
          </p>
        </section>

        {/* STATE & CITY RULES */}
        <section id="state-rules" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">State & City Rule Examples (Why Your Answer Varies)</h2>
          <div className="space-y-4">
            <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4">
              <h3 className="font-semibold mb-2">Example: Iowa (state rules)</h3>
              <p className="mb-2">
                Iowa’s animal-welfare rules governing commercial establishments (boarding, daycare,
                groomers, etc.) state plainly that <strong>“vaccine titers shall not be accepted as a form of
                vaccine verification.”</strong> Acceptable verification includes written documentation of
                vaccination or a rabies certificate signed by a veterinarian. Facilities in Iowa therefore
                cannot accept titers in lieu of vaccine records for entry.
              </p>
            </div>

            <div className="rounded-md border border-[#d9cfc2] bg-[#fffaf2] p-4">
              <h3 className="font-semibold mb-2">Example: Chicago, IL (city code)</h3>
              <p className="mb-2">
                Chicago’s municipal code requires proof of current vaccinations for distemper, rabies,
                parvovirus, and Bordetella, <em>but</em> it explicitly allows a veterinarian’s certificate of adequate
                <strong> titer protection for distemper and parvovirus</strong>, issued within the prior 12 months, as a
                substitute for those two vaccines. This is uncommon—but it’s a clear example that local
                law can permit titer acceptance for specific antigens.
              </p>
            </div>

            <div className="rounded-md border border-[#d9cfc2] bg-[#fffaf2] p-4">
              <h3 className="font-semibold mb-2">Other jurisdictions</h3>
              <p className="mb-2">
                Many states don’t mention titers for boarding at all; facilities set their own policies.
                Separate from boarding, multiple state health departments and the national rabies
                compendium reiterate that <strong>rabies titers do not substitute for vaccination</strong> in the U.S.
                (travel rules are a different matter and can require titers for certain international
                scenarios).
              </p>
            </div>
          </div>
        </section>

        {/* FACILITY POLICIES */}
        <section id="facility-policies" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">How Boarding & Daycare Decide Whether to Accept Titers</h2>
          <p className="mb-3">
            When law doesn’t dictate the answer, facilities weigh several factors:
          </p>
          <ul className="list-disc pl-5 space-y-2 mb-3">
            <li>
              <strong>Medical validity by antigen:</strong> CDV/CPV titers are more interpretable (VN/HI) than
              bacterial diseases. Bordetella and leptospirosis titers aren’t reliable proxies for protection.
            </li>
            <li>
              <strong>Epidemiology & risk tolerance:</strong> Facilities with dense playgroups, high turnover,
              or prior outbreaks tend to be stricter (vaccines required regardless of titers).
            </li>
            <li>
              <strong>Client mix:</strong> Rescue-heavy clientele or medically complicated pets can push toward
              case-by-case titer consideration—especially with a strong veterinarian letter.
            </li>
            <li>
              <strong>Operational simplicity:</strong> “Vaccination-only” rules are simpler to train and audit than
              titer-acceptance algorithms that depend on test type, date, and lab.
            </li>
            <li>
              <strong>Insurance and legal counsel:</strong> Some insurers or corporate policies forbid titer
              substitution; others allow it with documented criteria.
            </li>
          </ul>

          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Typical outcomes we see:</strong> Rabies certificates required everywhere.
            CDV/CPV titers sometimes accepted (recent, from a recognized lab, with vet letter).
            Bordetella/Lepto/CIV vaccines usually required regardless of titers.
          </div>
        </section>

        {/* WHAT TO ASK YOUR KENNEL */}
        <section id="ask-kennel" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">What to Ask Your Kennel (Before You Draw Blood)</h2>
          <ol className="list-decimal pl-5 space-y-2">
            <li>
              <strong>Do you accept titers at all?</strong> If yes, for which antigens (CDV/CPV)? For how long
              is a titer considered “current” (often 6–12 months)?
            </li>
            <li>
              <strong>What test types and labs are acceptable?</strong> Some facilities want a VN/HI-based
              result or a specific reference lab. Ask about ELISA acceptance.
            </li>
            <li>
              <strong>Do you still require Bordetella or leptospirosis vaccination?</strong> Most do—even
              with positive titers for other diseases.
            </li>
            <li>
              <strong>What documentation do you need?</strong> A veterinarian-signed report, plus a brief
              letter explaining why titers are being used can speed approval.
            </li>
            <li>
              <strong>How far in advance should I submit?</strong> Facilities may need several days to review.
            </li>
          </ol>
        </section>

        {/* MEDICAL EXEMPTIONS */}
        <section id="medical-exemptions" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Medical Exemptions: When Vaccines Aren’t Safe</h2>
          <p className="mb-3">
            In rare cases (e.g., severe prior reactions, immune-mediated disease), a veterinarian may
            advise against a vaccine dose. Some states allow a <strong>rabies medical exemption</strong> process under
            strict conditions, which can satisfy local licensing—but <em>not</em> necessarily a kennel’s policy.
            Facilities protect all clients and staff; many still require rabies vaccination to board.
          </p>
          <p>
            If your dog has a documented contraindication, talk with your vet and the facility. A
            comprehensive letter (history, diagnosis, risk assessment, titer data if useful, parasite
            prevention, and an exposure plan) gives the kennel more to work with. Be prepared for
            case-by-case decisions or a “no” if the facility can’t safely accommodate the exception.
          </p>
        </section>

        {/* DOCUMENTATION */}
        <section id="documentation" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Documentation, Proof & Timing: Setting Yourself Up to Succeed</h2>
          <ul className="list-disc pl-5 space-y-2 mb-3">
            <li>
              <strong>Rabies:</strong> Bring the veterinarian-signed certificate with vaccine manufacturer, lot,
              date given, and expiration.
            </li>
            <li>
              <strong>Titer results:</strong> Include the lab name, method (VN/HI vs. ELISA), collection date, and
              reference ranges. Ask your vet to add a 1–2 paragraph interpretation.
            </li>
            <li>
              <strong>Recency:</strong> If a facility accepts CDV/CPV titers, they usually want sampling within the
              past 6–12 months.
            </li>
            <li>
              <strong>Bordetella/Lepto/CIV:</strong> Expect vaccine records regardless of titers.
            </li>
            <li>
              <strong>Owner info:</strong> Include microchip, your contact info, and parasite-prevention products.
            </li>
          </ul>

          <div className="rounded-md border border-[#d9cfc2] bg-[#fffaf2] p-4 text-sm">
            <strong>Travel note:</strong> International travel is a different ecosystem—some routes
            <em>require</em> rabies serology from approved labs on specific timelines. That’s separate from
            domestic boarding rules.
          </div>
        </section>

        {/* RISK & LIABILITY */}
        <section id="risk-liability" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Risk & Liability: Why “No Titers” Can Be a Reasonable Policy</h2>
          <p className="mb-3">
            Kennels and daycares must manage infectious-disease risk across dozens of dogs per day.
            Uniform vaccination requirements are easier to verify and audit than titer-based exceptions.
            A well-intentioned “yes” to titers without guardrails can increase administrative load and
            complicate outbreak response. Insurers may also set minimum standards.
          </p>
          <p>
            Conversely, in communities with high vaccination rates and strong veterinary relationships,
            a thoughtfully designed, limited titer pathway for <em>CDV/CPV only</em> can be reasonable—if it
            includes clear recency requirements, vet interpretation, and strict “no titers” for Bordetella/
            Lepto/CIV, plus standard outbreak protocols.
          </p>
        </section>

        {/* OPS NOTES */}
        <section id="ops-notes" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Notes for Facility Operators (Boarding/Daycare)</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4">
              <h3 className="font-semibold mb-2">If You <em>Do Not</em> Accept Titers</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Say so clearly on your site, intake packets, and reminders.</li>
                <li>Explain the “why”: consistency, risk management, insurer/counsel direction.</li>
                <li>Offer a path: “Talk with your vet about timing boosters safely.”</li>
              </ul>
            </div>
            <div className="rounded-md border border-[#d9cfc2] bg-[#fffaf2] p-4">
              <h3 className="font-semibold mb-2">If You <em>Do</em> Accept Titers (Limited)</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Limit to CDV/CPV; require veterinarian letter + lab method + recency (≤12 months).</li>
                <li>Never substitute titers for rabies; require a signed rabies certificate.</li>
                <li>Keep Bordetella/Lepto/CIV vaccinations mandatory.</li>
                <li>Document your policy; train staff; standardize review/approval steps.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* TEMPLATES */}
        <section id="templates" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Templates & Scripts</h2>

          <h3 className="text-lg font-semibold mt-2 mb-1">Owner → Kennel Email (Titer Inquiry)</h3>
          <div className="rounded-md border border-[#d9cfc2] bg-[#fffaf2] p-4 text-sm mb-4">
            <p className="mb-2">
              Subject: Titer acceptance for {`{Dog Name}`} – {`{Dates}`}
            </p>
            <p>
              Hi {`{Facility}`},<br />
              My veterinarian recommends checking titers for my dog, {`{Dog Name}`}, to manage boosters.
              Do you accept <strong>CDV/CPV titers</strong> (not for rabies) in place of those vaccinations? If yes:
              <br />
              • Which lab/methods do you require (VN/HI vs. ELISA)?<br />
              • How recent must results be?<br />
              • Do you still require Bordetella/leptospirosis/influenza vaccines?<br />
              I can provide a vet letter with interpretation and all records. Thank you!<br />
              – {`{Your Name}`}, {`{Phone}`}
            </p>
          </div>

          <h3 className="text-lg font-semibold mt-2 mb-1">Vet Letter (Key Points to Include)</h3>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>Patient ID (name, species, breed, DOB, microchip) and exam date.</li>
            <li>Why titers were used (e.g., prior reaction, owner plan, rescue history).</li>
            <li>Lab, method (VN/HI preferred for CDV/CPV), collection date, and results.</li>
            <li>Clinical interpretation in plain language (“consistent with durable immunity”).</li>
            <li>Rabies vaccination status (certificate attached); parasite prevention in place.</li>
            <li>Any risk-mitigation steps (e.g., avoid dog parks during outbreaks, prompt vet care if ill).</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Intake Checklist (Owner)</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Rabies certificate (signed by veterinarian; not expired on stay dates).</li>
            <li>CDV/CPV vaccine record <em>or</em> approved titer report + vet letter (if facility accepts).</li>
            <li>Bordetella (and Lepto/CIV if required) vaccine records with due dates.</li>
            <li>Microchip number, flea/tick prevention, and any medications.</li>
            <li>Emergency contact + primary veterinarian contact.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">Frequently Asked Questions</h2>

          <p className="mb-3">
            <strong>Will a high rabies titer let me board without a rabies shot?</strong><br />
            No. In the U.S., rabies titers are <em>not</em> recognized as a legal substitute for rabies vaccination
            for domestic purposes. Kennels will require a current rabies certificate.
          </p>

          <p className="mb-3">
            <strong>Which titers are most likely to be accepted?</strong><br />
            If accepted at all, CDV/CPV titers from reputable labs and recent sampling (≤12 months)
            are the most common. Rabies titers don’t substitute; Bordetella/Lepto/CIV titers generally
            aren’t accepted.
          </p>

          <p className="mb-3">
            <strong>Do titers eliminate the need for Bordetella?</strong><br />
            No. Kennel cough pathogens are multifactorial, and titers aren’t a reliable proxy.
            Facilities nearly always require proof of Bordetella vaccination within their window.
          </p>

          <p className="mb-3">
            <strong>My state allows a rabies medical exemption—will a kennel accept it?</strong><br />
            Maybe. Licensing exemptions and boarding policies are separate. Ask the facility in
            advance; bring the exemption letter and your veterinarian’s plan for risk mitigation.
          </p>

          <p className="mb-3">
            <strong>Do I need a specific lab?</strong><br />
            Some facilities specify reference labs or test methods for CDV/CPV (VN/HI preferred).
            Ask before drawing blood to avoid repeat testing.
          </p>
        </section>

        {/* SOURCES */}
        <section id="sources" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">📚 Sources (Selected)</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            <li>
              American Animal Hospital Association (AAHA). 2022 Canine Vaccination Guidelines –{' '}
              <em>Utilization and interpretation of serologic titers</em> (overview of what titers mean, and
              key limitations).{' '}
              <a
                href="https://www.aaha.org/resources/2022-aaha-canine-vaccination-guidelines/utilization-and-interpretation-of-serologic-titers/"
                target="_blank" rel="noopener noreferrer"
              >
                AAHA titer page
              </a>
            </li>
            <li>
              AAHA. 2022 Canine Vaccination Guidelines –{' '}
              <em>Key Vaccination: Rabies</em> (rabies titers are not a substitute for vaccination).{' '}
              <a
                href="https://www.aaha.org/resources/2022-aaha-canine-vaccination-guidelines/rabies/"
                target="_blank" rel="noopener noreferrer"
              >
                AAHA rabies page
              </a>
            </li>
            <li>
              NASPHV <em>Compendium of Animal Rabies Prevention and Control</em> (guidance widely
              adopted in U.S. jurisdictions; explains why titers are not used in place of vaccination).{' '}
              <a
                href="https://www.nasphv.org/Documents/NASPHVRabiesCompendium.pdf"
                target="_blank" rel="noopener noreferrer"
              >
                NASPHV compendium
              </a>
            </li>
            <li>
              CDC dog importation resources (travel-specific rules; separate from domestic boarding,
              included here to clarify context).{' '}
              <a
                href="https://www.cdc.gov/importation/dogs/us-vaccinated-high-risk-countries.html"
                target="_blank" rel="noopener noreferrer"
              >
                CDC import page
              </a>{' '}
              &{' '}
              <a
                href="https://www.cdc.gov/importation/dogs/approved-labs.html"
                target="_blank" rel="noopener noreferrer"
              >
                CDC approved serology labs
              </a>
            </li>
            <li>
              <strong>Example – Iowa state rule:</strong> “Vaccine titers shall not be accepted as a form of vaccine
              verification” for commercial establishments.{' '}
              <a
                href="https://www.legis.iowa.gov/docs/iac/chapter/07-09-2025.21.67.pdf"
                target="_blank" rel="noopener noreferrer"
              >
                Iowa Admin. Code, Chapter 67
              </a>
            </li>
            <li>
              <strong>Example – Chicago city code:</strong> Allows titer substitution for <em>distemper and parvovirus</em>
              (not rabies) with specific conditions.{' '}
              <a
                href="https://codelibrary.amlegal.com/codes/chicago/latest/chicago_il/0-0-0-2638595"
                target="_blank" rel="noopener noreferrer"
              >
                Chicago Municipal Code 4-384-070
              </a>
            </li>
            <li>
              Kansas State University Rabies Lab (owner-facing overview on titers and non-core
              vaccines).{' '}
              <a
                href="https://www.ksvdl.org/laboratories/rabies-laboratory/dog-cat-vaccines-titer-testing.html"
                target="_blank" rel="noopener noreferrer"
              >
                KSU guidance
              </a>
            </li>
            <li>
              WSAVA (2024) vaccination guidelines – global perspective on vaccine categories and
              risk-based decisions.{' '}
              <a
                href="https://wsava.org/wp-content/uploads/2024/04/WSAVA-Vaccination-guidelines-2024.pdf"
                target="_blank" rel="noopener noreferrer"
              >
                WSAVA 2024
              </a>
            </li>
            <li>
              ACVIM (2023) consensus on canine leptospirosis (diagnostics and why titers don’t
              straightforwardly predict protection).{' '}
              <a
                href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10658540/"
                target="_blank" rel="noopener noreferrer"
              >
                ACVIM leptospirosis 2023
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
