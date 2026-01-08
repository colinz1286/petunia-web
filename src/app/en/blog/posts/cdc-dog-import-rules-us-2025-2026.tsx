'use client';

import Head from 'next/head';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function CdcDogImportRulesUS2025_2026() {
  const locale = useLocale();

  const title =
    'CDC Dog Import Rules Explained (2025–2026): Returning to the U.S. With Your Dog — What Changed, What Airlines Don’t Tell You, and How to Avoid Denial at the Airport';
  const date = 'January 8, 2026';
  const description =
    'A comprehensive, plain-English guide to CDC dog import rules for 2025–2026. Learn what changed after August 2024, how airline policies differ from CDC requirements, how layovers affect eligibility, what paperwork must match, and how to avoid denial at the airport.';
  const canonical = `https://www.petuniapets.com/${locale}/blog/cdc-dog-import-rules-us-2025-2026`;

  return (
    <>
      <Head>
        <title>{title} – Petunia Blog</title>
        <meta name="description" content={description} />
        <meta name="robots" content="all" />
        <link rel="canonical" href={canonical} />
      </Head>

      <main className="max-w-3xl mx-auto px-4 py-10 text-[#2c4a30]">
        {/* META */}
        <p className="text-sm text-gray-500 mb-2">Posted on {date}</p>
        <h1 className="text-3xl font-bold mb-4">{title}</h1>

        {/* CATEGORY PILL */}
        <div className="flex flex-wrap gap-2 mb-6">
          <span className="text-xs bg-[#e4dbcb] text-[#2c4a30] px-3 py-1 rounded-full border border-[#d9cfc2]">
            Pet Owners
          </span>
        </div>

        {/* NAV */}
        <nav className="mb-8 text-sm">
          <ul className="flex flex-wrap gap-3">
            <li>
              <a href="#tldr" className="underline hover:opacity-80">
                TL;DR
              </a>
            </li>
            <li>
              <a href="#what-changed" className="underline hover:opacity-80">
                What Changed
              </a>
            </li>
            <li>
              <a href="#decision-tree" className="underline hover:opacity-80">
                Decision Tree
              </a>
            </li>
            <li>
              <a href="#airlines-vs-cdc" className="underline hover:opacity-80">
                Airlines vs CDC vs CBP
              </a>
            </li>
            <li>
              <a href="#timeline" className="underline hover:opacity-80">
                Timeline
              </a>
            </li>
            <li>
              <a href="#transit-traps" className="underline hover:opacity-80">
                Transit Traps
              </a>
            </li>
            <li>
              <a href="#airport-sop" className="underline hover:opacity-80">
                Airport-Day SOP
              </a>
            </li>
            <li>
              <a href="#denied" className="underline hover:opacity-80">
                If Denied
              </a>
            </li>
            <li>
              <a href="#vet-errors" className="underline hover:opacity-80">
                Vet Errors
              </a>
            </li>
            <li>
              <a href="#templates" className="underline hover:opacity-80">
                Templates
              </a>
            </li>
            <li>
              <a href="#faqs" className="underline hover:opacity-80">
                FAQs
              </a>
            </li>
            <li>
              <a href="#sources" className="underline hover:opacity-80">
                📚 Sources
              </a>
            </li>
          </ul>
        </nav>

        {/* INTRO */}
        <section className="mb-10">
          <p className="mb-4">
            If you are returning to the United States with your dog, here is the uncomfortable truth:
            <strong> most travel failures happen at the airport</strong>, not at home. Owners show up
            with a healthy dog, a carrier, and a rabies record — and still get denied boarding or
            refused entry because the paperwork does not match the CDC&rsquo;s updated rules.
          </p>
          <p className="mb-4">
            Since <strong>August&nbsp;1, 2024</strong>, the CDC has enforced a tightened, traceability-first
            framework for dogs entering or returning to the U.S. The goal is rabies prevention, but the
            real-world effect is this: <strong>airline staff, travelers, and even some clinics are still
            adapting</strong>, and the result is avoidable chaos.
          </p>
          <p className="mb-4">
            This guide is designed to be the one page you can reference from your phone while planning,
            packing, checking in, and walking up to the counter.
          </p>
          <p className="mb-4">
            If you are building a broader international travel plan, you may also want to read our two
            related deep-dive guides:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <Link
                href={`/${locale}/blog/airline-pet-travel-italy-in-cabin-large-dogs-2025`}
                className="underline hover:opacity-80"
              >
                Airline Pet Travel Is Shifting (Italy Allows Big Dogs In-Cabin): What U.S. Flyers Should Know Now
              </Link>
            </li>
            <li>
              <Link
                href={`/${locale}/blog/cfia-pet-import-rules-canada-2025`}
                className="underline hover:opacity-80"
              >
                CFIA Pet Import Rules for Canada (2025): Dogs &amp; Cats — What Owners Must Know
              </Link>
            </li>
          </ul>
        </section>

        {/* TL;DR */}
        <section id="tldr" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">TL;DR (The Fast, Correct Answer)</h2>

          <div className="rounded-xl bg-[#f7f4ee] border border-[#d9cfc2] p-4 text-sm mb-6">
            <p className="mb-2">
              <strong>To enter or return to the U.S. with a dog, you must follow CDC rules even if the airline says you are fine.</strong>
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                Your dog must be <strong>at least 6 months old</strong> at the time of U.S. entry.{' '}
                <a
                  className="underline"
                  href="https://www.cdc.gov/importation/bringing-an-animal-into-the-united-states/dogs.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CDC: Bringing a dog into the U.S.
                </a>
              </li>
              <li>
                Your dog must be <strong>microchipped</strong>, and the microchip number must match your documents.{' '}
                <a
                  className="underline"
                  href="https://www.avma.org/resources-tools/animal-health-and-welfare/animal-travel-and-transport/cdc-dog-importation-requirements-faqs-veterinarians"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  AVMA: CDC dog importation FAQs for veterinarians
                </a>
              </li>
              <li>
                You must complete the <strong>CDC Dog Import Form</strong> and keep the <strong>receipt</strong>.{' '}
                <a
                  className="underline"
                  href="https://www.cdc.gov/importation/dogs/dog-import-form-instructions.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CDC: Form instructions
                </a>
              </li>
              <li>
                The rules become stricter based on where your dog has been in the <strong>last 6 months</strong>.{' '}
                <a
                  className="underline"
                  href="https://www.cdc.gov/importation/dogs/high-risk-countries.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CDC: High-risk countries for dog rabies
                </a>
              </li>
              <li>
                Many denials happen because the <strong>microchip was placed after rabies vaccination</strong>,
                or because the rabies certificate is missing required details.
              </li>
            </ul>
          </div>

          <p className="mb-4">
            If you read nothing else, read this: <strong>your documents must tell one consistent story</strong>.
            The microchip number, rabies certificate details, country history, and CDC receipt must align.
          </p>
        </section>

        {/* WHAT CHANGED */}
        <section id="what-changed" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">What Changed After August 2024 (And Why It Matters in 2025–2026)</h2>
          <p className="mb-4">
            Before the 2024 update, dog import rules were often treated like a loose checklist. The CDC moved to a
            framework that prioritizes <strong>traceability</strong> (knowing exactly which dog is which) and
            <strong>rabies risk control</strong> (reducing the chance of canine rabies re-entering the U.S.).
            The CDC&rsquo;s current overview explains that requirements depend on vaccination status and where the dog
            has been in the prior 6 months.{' '}
            <a
              className="underline"
              href="https://www.cdc.gov/importation/bringing-an-animal-into-the-united-states/dogs.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              CDC: Dog entry requirements overview
            </a>
          </p>

          <h3 className="text-xl font-semibold mt-4 mb-2">The non-negotiables that trip people up</h3>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li>
              <strong>Age minimum:</strong> Your dog must be at least 6 months old at entry (not &ldquo;about to be&rdquo;).
            </li>
            <li>
              <strong>Microchip traceability:</strong> The microchip is the anchor. If the chip is missing, unreadable, or not referenced
              properly in your documents, you are vulnerable to denial.
            </li>
            <li>
              <strong>Form and receipt:</strong> The CDC Dog Import Form is required starting August 2024, and you should keep the receipt
              accessible during travel.{' '}
              <a
                className="underline"
                href="https://www.cdc.gov/importation/dogs/dog-import-form-instructions.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                CDC: Dog Import Form and instructions
              </a>
            </li>
            <li>
              <strong>Six-month country history:</strong> Your dog&rsquo;s last 6 months of travel can change which rule set applies.{' '}
              <a
                className="underline"
                href="https://www.cdc.gov/importation/dogs/high-risk-countries.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                CDC: High-risk list
              </a>
            </li>
          </ul>

          <p className="mb-4">
            The CDC also publishes FAQs that clarify important edge cases (including port-of-entry matching and restrictions for
            foreign-vaccinated dogs arriving from high-risk countries).{' '}
            <a
              className="underline"
              href="https://www.cdc.gov/importation/dogs/faqs.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              CDC: Dog import FAQs
            </a>
          </p>
        </section>

        {/* DECISION TREE */}
        <section id="decision-tree" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">The Decision Tree That Determines Everything</h2>
          <p className="mb-4">
            If you want a reliable way to self-check your situation, start here. The CDC&rsquo;s framework is driven by
            one core question:
          </p>

          <div className="rounded-xl bg-[#f7f4ee] border border-[#d9cfc2] p-4 mb-6">
            <p className="font-semibold mb-2">Where has your dog been in the last 6 months?</p>

            <ol className="list-decimal pl-5 space-y-3 text-sm">
              <li>
                <strong>If your dog has only been in dog rabies-free or low-risk countries:</strong> The CDC explains that the
                CDC Dog Import Form is the required documentation for entry or return, and the receipt has specific validity rules.{' '}
                <a
                  className="underline"
                  href="https://www.cdc.gov/importation/dogs/rabies-free-low-risk-countries.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CDC: Entry requirements for rabies-free or low-risk countries
                </a>
              </li>
              <li>
                <strong>If your dog has been in a high-risk country:</strong> Expect additional requirements, and read the CDC guidance and FAQs
                carefully before booking the itinerary.{' '}
                <a
                  className="underline"
                  href="https://www.cdc.gov/importation/dogs/high-risk-countries.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CDC: High-risk list
                </a>{' '}
                <span>and</span>{' '}
                <a
                  className="underline"
                  href="https://www.cdc.gov/importation/dogs/faqs.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CDC: FAQs
                </a>
              </li>
            </ol>
          </div>

          <p className="mb-4">
            If you are unsure whether a country is considered high-risk, the CDC notes that countries not on the
            high-risk list are treated as not high-risk.{' '}
            <a
              className="underline"
              href="https://www.cdc.gov/importation/dogs/rabies-free-low-risk-countries.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              CDC: How to determine low-risk status
            </a>
          </p>
        </section>

        {/* AIRLINES VS CDC */}
        <section id="airlines-vs-cdc" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">What Airlines Don&rsquo;t Tell You: Airlines, CDC, and CBP Are Different Authorities</h2>
          <p className="mb-4">
            Most airport problems come from mixing up three different gatekeepers:
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border border-[#d9cfc2]">
              <thead className="bg-[#e4dbcb]">
                <tr>
                  <th className="text-left p-2">Who</th>
                  <th className="text-left p-2">What they control</th>
                  <th className="text-left p-2">What they usually check</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-[#d9cfc2] align-top">
                  <td className="p-2"><strong>Airline</strong></td>
                  <td className="p-2">Whether your dog boards their aircraft</td>
                  <td className="p-2">Carrier size, fees, route restrictions, pet reservation notes</td>
                </tr>
                <tr className="border-t border-[#d9cfc2] align-top">
                  <td className="p-2"><strong>CDC</strong></td>
                  <td className="p-2">Whether your dog may legally enter or return to the U.S.</td>
                  <td className="p-2">Age, microchip, form receipt, rabies documentation based on risk</td>
                </tr>
                <tr className="border-t border-[#d9cfc2] align-top">
                  <td className="p-2"><strong>CBP</strong></td>
                  <td className="p-2">Border enforcement and inspection processes</td>
                  <td className="p-2">Documents, declarations, referrals, and compliance checks</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mb-4">
            CBP notes that pet importation may be subject to multiple layers of regulation and inspection.{' '}
            <a
              className="underline"
              href="https://www.cbp.gov/border-security/protecting-agriculture/bringing-pets-and-wildlife-united-states"
              target="_blank"
              rel="noopener noreferrer"
            >
              CBP: Bringing pets and wildlife into the U.S.
            </a>
          </p>

          <p className="mb-4">
            The practical takeaway: <strong>an airline agent saying &ldquo;you are good&rdquo; is not a legal guarantee</strong>.
            Your goal is to be good under airline policy <em>and</em> under CDC entry requirements.
          </p>
        </section>

        {/* TIMELINE */}
        <section id="timeline" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">The Return-to-U.S. Timeline (90 Days to Gate)</h2>
          <p className="mb-4">
            This is the planning cadence that prevents last-minute disasters. Adjust the lead time if you are dealing with a
            high-risk country scenario or complex routing.
          </p>

          <h3 className="text-xl font-semibold mt-4 mb-2">90–60 days before travel</h3>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li>
              Confirm your dog&rsquo;s microchip is present and scannable (ask your vet to scan it in-clinic).
            </li>
            <li>
              Gather your rabies record and verify it contains the microchip number and required vaccine details.
            </li>
            <li>
              Decide routing. If you can avoid layovers in uncertain risk situations, do it.
            </li>
          </ul>

          <h3 className="text-xl font-semibold mt-4 mb-2">30–14 days before travel</h3>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li>
              Re-check the CDC guidance that applies to your dog&rsquo;s country history. Start from the CDC overview and then follow the path.{' '}
              <a
                className="underline"
                href="https://www.cdc.gov/importation/bringing-an-animal-into-the-united-states/dogs.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                CDC: Start here
              </a>
            </li>
            <li>
              If your itinerary crosses borders (especially Canada or Europe), confirm how those countries handle your leg. For Canada-specific prep, see our CFIA guide:{' '}
              <Link
                href={`/${locale}/blog/cfia-pet-import-rules-canada-2025`}
                className="underline hover:opacity-80"
              >
                CFIA Pet Import Rules for Canada (2025)
              </Link>
              .
            </li>
          </ul>

          <h3 className="text-xl font-semibold mt-4 mb-2">7–3 days before travel</h3>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li>
              Complete the CDC Dog Import Form and save the receipt in two places (phone + printed copy).{' '}
              <a
                className="underline"
                href="https://www.cdc.gov/importation/dogs/dog-import-form-instructions.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                CDC: Form instructions
              </a>
            </li>
            <li>
              Build a &ldquo;counter packet&rdquo; (see templates below) with your dog&rsquo;s microchip info and rabies documentation.
            </li>
          </ul>

          <h3 className="text-xl font-semibold mt-4 mb-2">Day of travel</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Arrive earlier than normal (pets add friction).</li>
            <li>Lead with documents first, conversation second.</li>
            <li>Keep your calm. Escalation often creates denial risk.</li>
          </ul>
        </section>

        {/* TRANSIT TRAPS */}
        <section id="transit-traps" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Transit &amp; Layover Traps (EU, UK, Canada)</h2>
          <p className="mb-4">
            Layovers feel harmless because you &ldquo;did not leave the airport.&rdquo; But the CDC&rsquo;s framework is built on
            where the dog has been in the last 6 months, and certain itineraries can complicate the story you are presenting.
          </p>

          <h3 className="text-xl font-semibold mt-4 mb-2">Why short connections still matter</h3>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li>
              Some airlines reroute automatically due to delays, which can add an unexpected stop.
            </li>
            <li>
              Tickets can be reissued on a partner carrier that routes through a different country.
            </li>
            <li>
              Your CDC receipt and your travel story should remain consistent with your actual departure country for the entry leg.
            </li>
          </ul>

          <h3 className="text-xl font-semibold mt-4 mb-2">Practical routing rules that reduce risk</h3>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li>
              Prefer nonstop returns to the U.S. when possible.
            </li>
            <li>
              If you must connect, choose a routing where your documentation story is clean and predictable.
            </li>
            <li>
              If you are flying Europe, monitor how airline pet policies evolve (Italy&rsquo;s framework is changing how some travelers think about cabin transport). See:{' '}
              <Link
                href={`/${locale}/blog/airline-pet-travel-italy-in-cabin-large-dogs-2025`}
                className="underline hover:opacity-80"
              >
                Italy allows larger dogs in-cabin: what U.S. flyers should know
              </Link>
              .
            </li>
          </ul>

          <p className="mb-4">
            If your dog&rsquo;s travel history includes any high-risk country in the last 6 months, stop and read the CDC guidance and FAQs
            before confirming the itinerary.{' '}
            <a
              className="underline"
              href="https://www.cdc.gov/importation/dogs/high-risk-countries.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              CDC: High-risk countries
            </a>{' '}
            <span>and</span>{' '}
            <a
              className="underline"
              href="https://www.cdc.gov/importation/dogs/faqs.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              CDC: FAQs
            </a>
          </p>
        </section>

        {/* AIRPORT SOP */}
        <section id="airport-sop" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Airport-Day SOP (Owner Playbook)</h2>
          <p className="mb-4">
            Your goal is to make the check-in counter interaction short, clear, and document-led. Most disputes happen when the conversation
            starts with opinions and ends with paperwork. Reverse that.
          </p>

          <h3 className="text-xl font-semibold mt-4 mb-2">What to hand over first (in order)</h3>
          <ol className="list-decimal pl-5 space-y-2 mb-6">
            <li>
              <strong>CDC Dog Import Form receipt</strong> (printed + on your phone).{' '}
              <a
                className="underline"
                href="https://www.cdc.gov/importation/dogs/dog-import-form-instructions.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                CDC: Form instructions
              </a>
            </li>
            <li>
              <strong>Rabies vaccination certificate</strong> showing the microchip number and vaccine details.
            </li>
            <li>
              <strong>Microchip documentation</strong> (if separate), plus a photo of the microchip scan screen if your clinic can provide it.
            </li>
          </ol>

          <h3 className="text-xl font-semibold mt-4 mb-2">What to say at check-in (calm script)</h3>
          <pre className="whitespace-pre-wrap rounded-xl bg-[#f7f4ee] border border-[#d9cfc2] p-3 text-sm mb-6">
“Hi. I’m traveling with my dog and returning to the U.S.
Here is the CDC Dog Import Form receipt and the rabies certificate with the matching microchip number.
If you need a supervisor or a specific documentation checklist, I’m happy to wait.”
          </pre>

          <h3 className="text-xl font-semibold mt-4 mb-2">How to de-escalate confusion</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Ask for the airline&rsquo;s pet-travel desk or a supervisor rather than arguing at the counter.
            </li>
            <li>
              Stay factual: &ldquo;Here is the receipt, here is the microchip number, here is the rabies certificate.&rdquo;
            </li>
            <li>
              Avoid emotional framing (&ldquo;but my dog is healthy&rdquo;). Denials are usually paperwork-based.
            </li>
          </ul>
        </section>

        {/* IF DENIED */}
        <section id="denied" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">If Your Dog Is Denied Boarding or Entry: What Happens Next</h2>
          <p className="mb-4">
            This is the section everyone hopes they never need. But it is also the section that reduces panic, because it makes the outcomes predictable.
          </p>

          <h3 className="text-xl font-semibold mt-4 mb-2">Denial at airline check-in (before boarding)</h3>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li>
              The airline may refuse boarding if your documentation appears incomplete or inconsistent with CDC requirements.
            </li>
            <li>
              You may be offered rebooking to a later flight after you correct documents (often impossible same-day).
            </li>
            <li>
              You may need to remain in the departure country while you work with your veterinarian and airline.
            </li>
          </ul>

          <h3 className="text-xl font-semibold mt-4 mb-2">Denial at arrival (after landing)</h3>
          <p className="mb-4">
            The CDC notes that animals may be subject to quarantine or re-export under certain circumstances.{' '}
            <a
              className="underline"
              href="https://www.cdc.gov/importation/bringing-an-animal-into-the-us/index.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              CDC: Bringing an animal into the U.S.
            </a>
          </p>

          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li>
              Your dog may be held for additional review or referred for inspection.
            </li>
            <li>
              You may be required to arrange return travel to the origin country.
            </li>
            <li>
              Any costs (rebooking, holding, veterinary services) are typically the owner&rsquo;s responsibility.
            </li>
          </ul>

          <div className="rounded-xl bg-[#f7f4ee] border border-[#d9cfc2] p-4 text-sm">
            <strong>Reality check:</strong> &ldquo;I didn&rsquo;t know&rdquo; is not a defense at the border. The goal is to become boringly compliant.
          </div>
        </section>

        {/* VET ERRORS */}
        <section id="vet-errors" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Common Veterinarian Errors That Cause Denials</h2>
          <p className="mb-4">
            Most veterinarians are excellent, and most clinics are doing their best under shifting rules. Still, a small set of predictable documentation mistakes
            causes a large share of airport failures.
          </p>

          <h3 className="text-xl font-semibold mt-4 mb-2">1) Microchip implanted after rabies vaccination</h3>
          <p className="mb-4">
            If your dog was vaccinated before being chipped, the rabies certificate may not be traceable to the dog now being presented. This is one of the most
            common reasons staff lose confidence in the documents. Have your clinic clarify the situation, and do not assume a verbal explanation will work at the counter.
          </p>

          <h3 className="text-xl font-semibold mt-4 mb-2">2) Missing manufacturer, lot number, or expiration</h3>
          <p className="mb-4">
            Some records include &ldquo;rabies vaccine given&rdquo; but omit the key details that many official formats expect. If your certificate is missing manufacturer,
            lot number, or valid-through date, ask your clinic to issue a corrected certificate.
          </p>

          <h3 className="text-xl font-semibold mt-4 mb-2">3) Wrong certificate format for international travel</h3>
          <p className="mb-4">
            Some clinics use internal invoice printouts that do not read like a vaccination certificate. Make sure you have a clear certificate signed by a licensed veterinarian,
            with the microchip number included.
          </p>

          <h3 className="text-xl font-semibold mt-4 mb-2">4) Timing errors around first rabies vaccination</h3>
          <p className="mb-4">
            The CDC provides timing guidance for first rabies vaccination scenarios in its high-risk country entry documentation. If your dog is newly vaccinated, you must
            confirm the minimum waiting period rules that apply to your scenario.{' '}
            <a
              className="underline"
              href="https://www.cdc.gov/importation/dogs/foreign-vaccinated-high-risk-countries.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              CDC: Foreign-vaccinated dogs from high-risk countries (timing details)
            </a>
          </p>
        </section>

        {/* TEMPLATES */}
        <section id="templates" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Templates You Can Copy (Packing, Counter Packet, Script)</h2>

          <h3 className="text-xl font-semibold mt-4 mb-2">A) The &ldquo;Counter Packet&rdquo; checklist</h3>
          <ul className="list-disc pl-5 space-y-2 mb-6">
            <li>CDC Dog Import Form receipt (printed + screenshot)</li>
            <li>Rabies vaccination certificate (microchip number visible)</li>
            <li>Microchip record (if separate)</li>
            <li>One-page summary you can hand over: dog name, microchip number, departure country, arrival airport</li>
            <li>Backup digital copies in your email or cloud storage</li>
          </ul>

          <h3 className="text-xl font-semibold mt-4 mb-2">B) 48-hour packing list</h3>
          <ul className="list-disc pl-5 space-y-2 mb-6">
            <li>Leash + backup leash, collar with tags</li>
            <li>Absorbent pads, wipes, small trash bags</li>
            <li>Small water bowl, measured food portions</li>
            <li>High-value chew for calm settling</li>
            <li>Photo of your dog (in case of separation)</li>
            <li>Any medications in original packaging</li>
          </ul>

          <h3 className="text-xl font-semibold mt-4 mb-2">C) Airline phone script (pre-travel verification)</h3>
          <pre className="whitespace-pre-wrap rounded-xl bg-[#f7f4ee] border border-[#d9cfc2] p-3 text-sm mb-6">
“Hi. I’m traveling internationally with my dog and returning to the U.S.
Can you confirm your current pet policy for my flight number and aircraft?
Also, do you require any additional documentation at check-in beyond the CDC Dog Import Form receipt and rabies certificate with microchip number?
If a schedule change adds a connection, can you note my reservation so the routing stays compliant?”
          </pre>

          <p className="text-sm text-gray-700">
            If your travel plan includes Canada, consider aligning your paperwork with the CFIA and CBSA flow as well:{' '}
            <Link
              href={`/${locale}/blog/cfia-pet-import-rules-canada-2025`}
              className="underline hover:opacity-80"
            >
              CFIA Pet Import Rules for Canada (2025)
            </Link>
            .
          </p>
        </section>

        {/* FAQ */}
        <section id="faqs" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">FAQs (Real Traveler Questions)</h2>

          <h3 className="text-xl font-semibold mt-4 mb-2">Is the CDC Dog Import Form required for every dog?</h3>
          <p className="mb-4">
            The CDC explains that the form is required beginning August 2024, and the required documentation depends on the dog&rsquo;s risk scenario. Start with the CDC overview and
            follow the appropriate path.{' '}
            <a
              className="underline"
              href="https://www.cdc.gov/importation/bringing-an-animal-into-the-united-states/dogs.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              CDC: Entry overview
            </a>
          </p>

          <h3 className="text-xl font-semibold mt-4 mb-2">If I am coming back from a low-risk country, is the CDC receipt enough?</h3>
          <p className="mb-4">
            The CDC states that the Dog Import Form is the required documentation for dogs that have been only in rabies-free or low-risk countries in the prior 6 months, and it also
            explains how receipt validity works.{' '}
            <a
              className="underline"
              href="https://www.cdc.gov/importation/dogs/rabies-free-low-risk-countries.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              CDC: Low-risk entry requirements and receipt validity
            </a>
          </p>

          <h3 className="text-xl font-semibold mt-4 mb-2">Does my airline decide if my dog can enter the U.S.?</h3>
          <p className="mb-4">
            No. Airlines decide boarding. CDC governs entry. CBP notes that pets may be subject to multiple layers of inspection and regulation.{' '}
            <a
              className="underline"
              href="https://www.cbp.gov/border-security/protecting-agriculture/bringing-pets-and-wildlife-united-states"
              target="_blank"
              rel="noopener noreferrer"
            >
              CBP: Bringing pets and wildlife into the U.S.
            </a>
          </p>

          <h3 className="text-xl font-semibold mt-4 mb-2">Where do I find the official high-risk country list?</h3>
          <p className="mb-4">
            The CDC maintains the high-risk country list and explains that the presence of a high-risk country in the last 6 months triggers additional requirements.{' '}
            <a
              className="underline"
              href="https://www.cdc.gov/importation/dogs/high-risk-countries.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              CDC: High-risk countries for dog rabies
            </a>
          </p>

          <h3 className="text-xl font-semibold mt-4 mb-2">Where should I verify USDA-related travel guidance?</h3>
          <p className="mb-4">
            USDA APHIS publishes pet travel guidance and links travelers back to CDC for dog import requirements.{' '}
            <a
              className="underline"
              href="https://www.aphis.usda.gov/pet-travel/another-country-to-us-import/dogs"
              target="_blank"
              rel="noopener noreferrer"
            >
              USDA APHIS: Pet dog import into the U.S.
            </a>
          </p>
        </section>

        {/* SOURCES */}
        <section id="sources" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">📚 Sources &amp; Official Links</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            <li>
              CDC. <i>Bringing a dog into the U.S.</i>{' '}
              <a
                href="https://www.cdc.gov/importation/bringing-an-animal-into-the-united-states/dogs.html"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                cdc.gov
              </a>
            </li>
            <li>
              CDC. <i>CDC Dog Import Form and instructions.</i>{' '}
              <a
                href="https://www.cdc.gov/importation/dogs/dog-import-form-instructions.html"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                cdc.gov
              </a>
            </li>
            <li>
              CDC. <i>Entry requirements for dogs from dog rabies-free or low-risk countries.</i>{' '}
              <a
                href="https://www.cdc.gov/importation/dogs/rabies-free-low-risk-countries.html"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                cdc.gov
              </a>
            </li>
            <li>
              CDC. <i>High-risk countries for dog rabies.</i>{' '}
              <a
                href="https://www.cdc.gov/importation/dogs/high-risk-countries.html"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                cdc.gov
              </a>
            </li>
            <li>
              CDC. <i>Frequently asked questions on dog importations.</i>{' '}
              <a
                href="https://www.cdc.gov/importation/dogs/faqs.html"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                cdc.gov
              </a>
            </li>
            <li>
              CBP. <i>Bringing pets and wildlife into the United States.</i>{' '}
              <a
                href="https://www.cbp.gov/border-security/protecting-agriculture/bringing-pets-and-wildlife-united-states"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                cbp.gov
              </a>
            </li>
            <li>
              USDA APHIS. <i>Pet dog import into the U.S.</i>{' '}
              <a
                href="https://www.aphis.usda.gov/pet-travel/another-country-to-us-import/dogs"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                aphis.usda.gov
              </a>
            </li>
            <li>
              AVMA. <i>CDC dog importation requirements: FAQs for veterinarians.</i>{' '}
              <a
                href="https://www.avma.org/resources-tools/animal-health-and-welfare/animal-travel-and-transport/cdc-dog-importation-requirements-faqs-veterinarians"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                avma.org
              </a>
            </li>
          </ul>
        </section>

        {/* BACK */}
        <Link
          href={`/${locale}/blog`}
          className="underline text-[#2c4a30] font-medium hover:opacity-80"
        >
          ← Back to Blog
        </Link>

        {/* DISCLAIMER */}
        <p className="text-xs text-gray-500 mt-8">
          This article is for general information and does not replace CDC, CBP, airline, or veterinary guidance. Always verify the latest requirements directly through official sources before travel.
        </p>
      </main>
    </>
  );
}
