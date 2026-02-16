'use client';

import Head from 'next/head';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function MedicationAdministrationTrackingForBoardingAndDaycare() {
  const locale = useLocale();

  // --- Metadata ---------------------------------------------------------------
  const title =
    'Medication Administration Tracking in Dog Boarding Software & Dog Daycare Software: Safety, Workflow Design, Compliance, and Real-World ROI';
  const date = 'August 23, 2025';
  const categories = ['boarding', 'daycare'] as const;

  // Keep keys/labels EXACTLY as used in prior posts
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
    'Why medication administration tracking belongs at the core of dog boarding software and dog daycare software: precise intake, MAR logs, double-check protocols, controlled substances, incident reporting, owner communication, and KPIs that protect dogs, teams, and margins.';

  return (
    <>
      <Head>
        <title>{title} – Petunia Blog</title>
        <meta name="description" content={description} />
        {/* Per user preference, do not use the word "index" here. */}
        <meta name="robots" content="all" />
       
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
            <li><a href="#tldr" className="underline hover:opacity-80">TL;DR</a></li>
            <li><a href="#why" className="underline hover:opacity-80">Why It Matters</a></li>
            <li><a href="#intake" className="underline hover:opacity-80">Owner Intake &amp; Verification</a></li>
            <li><a href="#data-model" className="underline hover:opacity-80">Data Model &amp; MAR Structure</a></li>
            <li><a href="#schedule" className="underline hover:opacity-80">Scheduling, Alerts &amp; Pacing</a></li>
            <li><a href="#workflow" className="underline hover:opacity-80">Point-of-Care Workflow</a></li>
            <li><a href="#roles" className="underline hover:opacity-80">Roles, Permissions &amp; Training</a></li>
            <li><a href="#booking" className="underline hover:opacity-80">Booking-Flow Enforcement</a></li>
            <li><a href="#daycare-boarding" className="underline hover:opacity-80">Daycare vs Boarding Nuance</a></li>
            <li><a href="#controlled" className="underline hover:opacity-80">Controlled Substances &amp; Compliance</a></li>
            <li><a href="#incidents" className="underline hover:opacity-80">Incidents, Adverse Events &amp; Escalations</a></li>
            <li><a href="#owners" className="underline hover:opacity-80">Owner Communication</a></li>
            <li><a href="#kpis" className="underline hover:opacity-80">KPIs &amp; ROI</a></li>
            <li><a href="#checklists" className="underline hover:opacity-80">Checklists &amp; Templates</a></li>
            <li><a href="#faq" className="underline hover:opacity-80">FAQ</a></li>
            <li><a href="#sources" className="underline hover:opacity-80">Sources (Selected)</a></li>
          </ul>
        </nav>

        {/* TL;DR */}
        <section id="tldr" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Short Answer (TL;DR)</h2>
          <p className="mb-4">
            Medication administration tracking is one of the highest-risk, highest-impact features in dog boarding software and dog daycare software. The right system captures precise prescriptions and instructions at intake, schedules each dose on a clear Medication Administration Record (MAR), guides staff with double-check protocols, and creates an audit trail that protects both dogs and your business. When done well, it reduces errors, prevents missed doses and double-doses, cuts phone calls to the front desk, and provides professional proof of care that builds long-term trust.
          </p>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Petunia tip:</strong> Treat every med like a flight: <em>verify the passenger, verify the bag, verify the gate, log the takeoff</em>. In practice this means dog identity, drug identity, dose, route, timing, and a digital signature with exceptions captured.
          </div>
        </section>

        {/* Why it matters */}
        <section id="why" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Why Medication Tracking Matters for Facilities</h2>
          <p className="mb-3">
            Boarding and daycare facilities manage living schedules. A single missed anticonvulsant or double-served NSAID can turn a normal day into an emergency. Owners arrive with pill bottles, liquids, topicals, and special administration rules. Without a structured system, staff rely on memory, sticky notes, and goodwill—great for morale, terrible for reliability. Purpose-built dog boarding software and dog daycare software closes the gap: it collects structured instructions, automates dose timing, forces verification at the moment of administration, and stores a provable record of what was given, by whom, and why.
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Safety:</strong> Reduce medication errors across multi-dog households, shift changes, and holiday rushes.</li>
            <li><strong>Compliance:</strong> Demonstrate due diligence with logs, exception notes, and owner approvals.</li>
            <li><strong>Operations:</strong> Clear queues prevent &quot;I thought you did it&quot; moments at handoff.</li>
            <li><strong>Trust:</strong> Professional communication—&quot;Dose given at 7:14 AM; ate with cheese&quot;—retains clients for years.</li>
          </ul>
        </section>

        {/* Intake & verification */}
        <section id="intake" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Owner Intake &amp; Verification: Winning Before Day One</h2>
          <p className="mb-3">
            Intake is where precision begins. The software should prompt owners for all details and convert them into a structured plan that staff can execute without guesswork.
          </p>
          <h3 className="text-lg font-semibold mt-2 mb-1">Required fields per medication</h3>
          <ul className="list-disc pl-5 space-y-2 mb-3">
            <li><strong>Drug name &amp; strength:</strong> e.g., carprofen 75&nbsp;mg tablet.</li>
            <li><strong>Dose &amp; route:</strong> quantity per dose and route (PO, topical, ear, eye).</li>
            <li><strong>Schedule:</strong> frequency (q12h, q24h), specific time windows, with meals or without.</li>
            <li><strong>Start &amp; end date:</strong> or &quot;ongoing&quot; chronic therapy.</li>
            <li><strong>Administration notes:</strong> crush allowed, pill pocket allowed, observe swallowing, chase with water, apply gloves.</li>
            <li><strong>Provider &amp; clinic contact:</strong> name, phone, attachments if available.</li>
            <li><strong>Owner consent &amp; liability language:</strong> clear terms for administration by non-medical staff.</li>
          </ul>
          <h3 className="text-lg font-semibold mt-2 mb-1">Verification steps on arrival</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Count pills or verify volume for liquids; log receipt quantity with photos of labels.</li>
            <li>Cross-check owner instructions against the prescription label; resolve conflicts before first dose.</li>
            <li>Apply allergy flags and drug-interaction notes if known; attach vet guidance when provided.</li>
          </ul>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm mt-3">
            <strong>Petunia tip:</strong> Capture a photo of every label on check-in. If anything is unclear later, staff can zoom and confirm without calling the front desk.
          </div>
        </section>

        {/* Data model */}
        <section id="data-model" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Data Model &amp; MAR: One Source of Truth</h2>
          <p className="mb-3">
            Medication details belong to the dog profile and flow into a structured MAR (Medication Administration Record). Every team view—arrivals list, kennel card, handheld queue—reads the same object, so there are no conflicting instructions.
          </p>
          <ul className="list-disc pl-5 space-y-2 mb-3">
            <li><strong>Dog profile object:</strong> <code>medPlan[]</code> array with each item containing <code>drug</code>, <code>strength</code>, <code>dose</code>, <code>unit</code>, <code>route</code>, <code>withFood</code>, <code>frequency</code>, <code>times[]</code>, <code>startAt</code>, <code>endAt</code>, <code>notes</code>, <code>attachments[]</code>, <code>vetContact</code>.</li>
            <li><strong>MAR entry:</strong> per scheduled dose: <code>dueAt</code>, <code>servedAt</code>, <code>verifiedBy</code>, <code>witnessedBy</code> (optional), <code>method</code> (e.g., pill pocket), <code>exceptions[]</code> (refused, vomited, partial), <code>followUp</code>.</li>
            <li><strong>Inventory object:</strong> <code>receivedQty</code>, <code>remainingQty</code>, <code>unit</code>, <code>lowThreshold</code>, <code>ownerNotifiedAt</code>.</li>
          </ul>
          <p className="mb-3">
            Version the medication plan. If the owner or vet changes anything mid-stay, create a new plan version with <code>effectiveAt</code> and a change note. Your audit then proves which instructions were followed at every moment.
          </p>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Petunia tip:</strong> Store owner language and a normalized professional label. Show the friendly version to owners (&quot;one 75&nbsp;mg tablet with breakfast&quot;), and the precise version to staff.
          </div>
        </section>

        {/* Scheduling */}
        <section id="schedule" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Scheduling, Alerts &amp; Pacing</h2>
          <p className="mb-3">
            Doses must fire on time without creating alert fatigue. Good software spaces reminders to match real shifts and meal windows while remaining strict about critical drugs.
          </p>
          <h3 className="text-lg font-semibold mt-2 mb-1">Timing logic</h3>
          <ul className="list-disc pl-5 space-y-2 mb-3">
            <li>Align &quot;with food&quot; meds to feeding schedules automatically.</li>
            <li>For q12h drugs, allow a facility-defined tolerance window (e.g., &plusmn;30 minutes) with escalation if missed.</li>
            <li>For critical meds (e.g., anticonvulsants, insulin with vet guidance), tighten tolerance and increase escalations.</li>
          </ul>
          <h3 className="text-lg font-semibold mt-2 mb-1">Alert tiers</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Heads-up:</strong> 15 minutes before due time to prep and stage.</li>
            <li><strong>Due now:</strong> appears at the top of the MAR queue with dog photo and kennel/run.</li>
            <li><strong>Overdue:</strong> color change, ping shift lead, require reason selection on completion.</li>
          </ul>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Petunia tip:</strong> Make alerts idempotent. Once a dose is logged, clear all related pings. Nothing erodes confidence faster than ghost reminders.
          </div>
        </section>

        {/* Workflow */}
        <section id="workflow" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Point-of-Care Workflow: Reducing Cognitive Load</h2>
          <p className="mb-3">
            The moment of administration is where errors happen. Your interface should display only what matters: the right dog, the right drug, the right dose, and the right method—plus a clean way to log exceptions.
          </p>
          <ol className="list-decimal pl-5 space-y-2 mb-3">
            <li><strong>Verify dog identity:</strong> photo, name, run/room, and a scannable kennel card if available.</li>
            <li><strong>Verify drug &amp; dose:</strong> label photo and normalized display (e.g., &quot;carprofen 75&nbsp;mg – give 1 tablet&quot;).</li>
            <li><strong>Verify method:</strong> with food, pill pocket allowed, crush allowed, apply to right ear, etc.</li>
            <li><strong>Two-step confirmation:</strong> &quot;prepared by&quot; and &quot;served by&quot; or a single digital signature plus optional witness for higher-risk meds.</li>
            <li><strong>Log outcome:</strong> swallowed, partial, refused, spit; add note and follow-up prompt if needed.</li>
          </ol>
          <p className="mb-3">
            For topical and ophthalmic meds, attach simple diagrams or short videos owners can provide. Visual cues reduce mis-application.
          </p>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Petunia tip:</strong> Add a &quot;re-offer&quot; button that schedules a retry within a facility-defined window and notifies the next shift automatically.
          </div>
        </section>

        {/* Roles & permissions */}
        <section id="roles" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Roles, Permissions &amp; Training</h2>
          <p className="mb-3">
            Not every team member should do everything. Role-based access protects dogs and your license while keeping the workflow fast for authorized staff.
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Set up &amp; edits:</strong> manager or med-trained lead only.</li>
            <li><strong>Administration:</strong> trained staff with digital signatures; require a witness toggle for select meds.</li>
            <li><strong>View only:</strong> front desk and bath staff can see schedules and completion but cannot modify.</li>
            <li><strong>Training mode:</strong> shadow users can simulate entries for onboarding without touching real data.</li>
          </ul>
        </section>

        {/* Booking enforcement */}
        <section id="booking" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Booking-Flow Enforcement: Preventing Day-Of Chaos</h2>
          <p className="mb-3">
            The best time to avoid medication mistakes is before the owner ever arrives. Your dog boarding software or dog daycare software should check for an active med plan as soon as dates and dogs are selected.
          </p>
          <ol className="list-decimal pl-5 space-y-2 mb-3">
            <li><strong>Pre-check:</strong> if a dog is marked &quot;takes medication,&quot; surface a short intake flow that collects the fields above.</li>
            <li><strong>Label scan:</strong> allow photo uploads in the booking flow; staff verifies at check-in.</li>
            <li><strong>Soft block:</strong> if critical details are missing, create a &quot;needs med info&quot; banner with one-click resume later.</li>
            <li><strong>Pricing transparency:</strong> if you charge for med administration, present it clearly with quantity estimates.</li>
          </ol>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Petunia tip:</strong> Show a subtle &quot;Medication Plan Verified&quot; checkmark on confirmation screens to reduce follow-up calls.
          </div>
        </section>

        {/* Daycare vs boarding */}
        <section id="daycare-boarding" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Daycare vs Boarding: Rhythms and Risk Profiles</h2>
          <h3 className="text-lg font-semibold mt-2 mb-1">Daycare</h3>
          <p className="mb-3">
            Daycare dosing often centers on lunch-time antibiotics, anti-inflammatories, eye/ear drops, and situational meds (e.g., post-dental care). The biggest risks are crowding and speed. Ensure the MAR queue groups by area and shows a clean &quot;due now&quot; list so a single handler can finish a round without bouncing between rooms.
          </p>
          <h3 className="text-lg font-semibold mt-2 mb-1">Boarding</h3>
          <p className="mb-3">
            Boarding includes chronic medications, multi-dose regimens, and after-hours timing. Strengthen escalation: tighter windows, lead notifications, and mandatory notes on any overdue dose. Inventory tracking matters more because stays run longer, and owners often send just enough pills. Low stock pings save midnight emergencies.
          </p>
        </section>

        {/* Controlled substances */}
        <section id="controlled" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Controlled Substances, Refrigeration &amp; Chain of Custody</h2>
          <p className="mb-3">
            While most facilities do not administer controlled veterinary drugs routinely, you may handle sedatives, anti-anxiety meds, or pain medicines under owner direction. Create a higher-security workflow for anything that demands tighter custody.
          </p>
          <ul className="list-disc pl-5 space-y-2 mb-3">
            <li>Separate locker or locked mini-fridge with access logs.</li>
            <li>Witness signature for each administration or disposal event.</li>
            <li>Running count after each dose; reconcile at checkout with the owner present.</li>
            <li>Clear policy: what your staff can and cannot administer; when to require veterinary supervision.</li>
          </ul>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Petunia tip:</strong> For refrigerated meds, print a small label with dog name, dose, due times, and storage reminder. The fewer trips to lookup screens, the fewer errors.
          </div>
        </section>

        {/* Incidents & adverse events */}
        <section id="incidents" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Incidents, Adverse Events &amp; Escalations</h2>
          <p className="mb-3">
            Even with excellent systems, refusals and adverse reactions occur. Your MAR should allow one-tap incident creation with structured choices and free-text notes.
          </p>
          <ul className="list-disc pl-5 space-y-2 mb-3">
            <li><strong>Event types:</strong> refusal, vomited, partial dose, suspected reaction, incorrect timing, incorrect dose.</li>
            <li><strong>Immediate steps:</strong> vet contact recommended, monitor vitals, withhold next dose, move to quiet area.</li>
            <li><strong>Notifications:</strong> owner message with clear, calm language; internal ping to manager; optional vet email.</li>
            <li><strong>Follow-up:</strong> schedule a check-in task and attach a summary to the dog profile for future visits.</li>
          </ul>
          <p>
            A respectful tone matters: factual entries, time stamps, and &quot;here is what we did&quot; statements maintain trust in stressful moments.
          </p>
        </section>

        {/* Owner comms */}
        <section id="owners" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Owner Communication: Calm, Clear, and Proactive</h2>
          <p className="mb-3">
            Owners want to know that medications are handled precisely. Automated summaries and timely messages reduce inbound calls and stabilize the front desk.
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Daily summary (opt-in):</strong> times, outcomes, notes (&quot;ate with cheese&quot;), and any exceptions.</li>
            <li><strong>Real-time ping:</strong> when an exception occurs, a short message plus next step (&quot;We will re-offer at 2 PM&quot;).</li>
            <li><strong>Checkout receipt:</strong> med log PDF with remaining pill count; attach photos if helpful.</li>
          </ul>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Petunia tip:</strong> Templates save time: &quot;Dose given at {`{TIME}`}; dog accepted with pill pocket; no adverse signs observed.&quot;
          </div>
        </section>

        {/* KPIs */}
        <section id="kpis" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">KPIs &amp; ROI: What to Measure</h2>
          <ul className="list-disc pl-5 space-y-2 mb-3">
            <li><strong>Dose on-time rate:</strong> % of scheduled doses administered within your tolerance window.</li>
            <li><strong>Exception rate:</strong> % of doses with refusal/vomit/partial; track trends by dog and by shift.</li>
            <li><strong>Double-serve or missed-dose incidents:</strong> should approach zero with two-step verification.</li>
            <li><strong>Owner contact reduction:</strong> fewer &quot;Did they get their meds?&quot; calls after enabling summaries.</li>
            <li><strong>Training ramp time:</strong> how fast new staff reach stable on-time dosing after onboarding.</li>
            <li><strong>Inventory reconciliation accuracy:</strong> received vs remaining vs administered.</li>
          </ul>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Petunia tip:</strong> Post a small &quot;On-Time Medication&quot; score in staff areas to create healthy pride and consistency.
          </div>
        </section>

        {/* Checklists */}
        <section id="checklists" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Checklists &amp; Templates</h2>
          <h3 className="text-lg font-semibold mt-2 mb-1">Owner Intake (2 minutes)</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Drug name &amp; strength, dose, route, timing, with/without food.</li>
            <li>Start/end dates, vet contact, label photo.</li>
            <li>Administration method (pill pocket allowed, crush allowed), special notes.</li>
            <li>Allergies and interaction warnings, consent language acknowledgement.</li>
          </ul>
          <h3 className="text-lg font-semibold mt-2 mb-1">Arrival Verification (3 steps)</h3>
          <ol className="list-decimal pl-5 space-y-1 mb-3">
            <li>Count/confirm quantity and storage (room temp vs fridge).</li>
            <li>Cross-check label vs owner instructions; resolve conflicts.</li>
            <li>Activate the MAR and schedule doses automatically.</li>
          </ol>
          <h3 className="text-lg font-semibold mt-2 mb-1">Administration (5 steps)</h3>
          <ol className="list-decimal pl-5 space-y-1">
            <li>Verify dog identity and drug/dose.</li>
            <li>Confirm method and food timing.</li>
            <li>Give dose; observe ingestion when required.</li>
            <li>Log outcome; add exception if needed.</li>
            <li>Return med to proper storage; update inventory if tracked.</li>
          </ol>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm mt-3">
            <strong>Petunia tip:</strong> Pin these checklists inside the app and make them printable for quick training refreshers.
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">Frequently Asked Questions</h2>
          <p className="mb-3">
            <strong>Can non-medical staff administer medications?</strong><br />
            Many facilities do so with clear owner consent and simple medications. Your policy should define which meds are allowed, the training required, and when to involve a veterinarian.
          </p>
          <p className="mb-3">
            <strong>What if a dog refuses a dose?</strong><br />
            Log the refusal, follow a pre-approved &quot;re-offer&quot; protocol (pill pocket, small food topper), and notify the owner if a second attempt fails. For critical meds, escalate to a manager and consider contacting the vet.
          </p>
          <p className="mb-3">
            <strong>Should we charge for med administration?</strong><br />
            Transparent, per-dose or per-day pricing is common. Clear estimates at booking avoid surprises, and MAR receipts justify the service provided.
          </p>
          <p className="mb-3">
            <strong>How do we handle liquids and topicals?</strong><br />
            Store equipment notes (syringes, droppers), gloves for topicals, and side-specific instructions (right ear vs left). The MAR should present a concise method at the moment of care.
          </p>
          <p className="text-xs text-gray-600">
            Educational content only. Always consult your veterinarian for individualized medical guidance and follow local regulations for drug handling and storage.
          </p>
        </section>

        {/* Sources */}
        <section id="sources" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">📚 Sources (Selected)</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            <li>
              American Animal Hospital Association (AAHA). Canine life stage and preventive care guidance.
              <a
                href="https://www.aaha.org/education/guidelines/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline ml-1"
              >
                AAHA guideline hub
              </a>
            </li>
            <li>
              World Small Animal Veterinary Association (WSAVA). Global guidelines for primary care practice.
              <a
                href="https://wsava.org/global-guidelines/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline ml-1"
              >
                WSAVA
              </a>
            </li>
            <li>
              AVMA client education resources on medications and safe administration.
              <a
                href="https://www.avma.org/resources/pet-owners"
                target="_blank"
                rel="noopener noreferrer"
                className="underline ml-1"
              >
                AVMA
              </a>
            </li>
            <li>
              Merck Veterinary Manual (professional &amp; consumer portals). Drug administration routes and adverse reaction overviews.
              <a
                href="https://www.merckvetmanual.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline ml-1"
              >
                Merck Vet Manual
              </a>
            </li>
          </ul>
          <p className="text-xs text-gray-600 mt-4">
            Links above are provided for general education and are not exhaustive. Follow your local veterinary guidance and regulations.
          </p>
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
