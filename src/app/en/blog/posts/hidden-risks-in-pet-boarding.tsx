'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function HiddenRisksInPetBoarding() {
  const locale = useLocale();

  const title =
    'The Hidden Risks in Pet Boarding: Liability, Health, and How to Protect Your Business';
  const date = 'September 15, 2025';
  const categories = ['boarding'] as const;

  // Exact labels from prior posts (do not change keys/labels)
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
            <li><a href="#tldr" className="underline hover:opacity-80">TL;DR</a></li>
            <li><a href="#risk-overview" className="underline hover:opacity-80">Risk Landscape</a></li>
            <li><a href="#legal-liability" className="underline hover:opacity-80">Legal &amp; Liability</a></li>
            <li><a href="#insurance" className="underline hover:opacity-80">Insurance Stack</a></li>
            <li><a href="#health-disease" className="underline hover:opacity-80">Health &amp; Disease Control</a></li>
            <li><a href="#behavior" className="underline hover:opacity-80">Behavior &amp; Handling</a></li>
            <li><a href="#environment" className="underline hover:opacity-80">Facility &amp; Environment</a></li>
            <li><a href="#records" className="underline hover:opacity-80">Records, Waivers &amp; Consent</a></li>
            <li><a href="#operations" className="underline hover:opacity-80">Daily Ops SOPs</a></li>
            <li><a href="#emergency" className="underline hover:opacity-80">Emergency &amp; Crisis</a></li>
            <li><a href="#financial" className="underline hover:opacity-80">Financial &amp; Reputation</a></li>
            <li><a href="#tech" className="underline hover:opacity-80">Technology Safeguards</a></li>
            <li><a href="#checklists" className="underline hover:opacity-80">Printable Checklists</a></li>
            <li><a href="#faq" className="underline hover:opacity-80">FAQ</a></li>
            <li><a href="#sources" className="underline hover:opacity-80">📚 Sources (Selected)</a></li>
          </ul>
        </nav>

        {/* TL;DR */}
        <section id="tldr" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Short Answer (TL;DR)</h2>
          <p className="mb-4">
            Pet boarding isn&apos;t risky because of one dramatic event — it&apos;s risky because of a hundred small decisions made every day. You reduce exposure by running on <strong>systems</strong>: tight client agreements, vaccine and health verification, objective behavior policies, traction and airflow engineering, staff training with ratios, auditable logs, and a written incident/medical escalation plan. <strong>Insurance</strong> is your financial backstop, but <strong>SOPs</strong> prevent claims in the first place.
          </p>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Operator tip:</strong> Make one owner responsible for each risk domain (health, behavior, facilities, legal). Review weekly. If a risk isn&apos;t owned, it will own you.
          </div>
        </section>

        {/* Risk Landscape */}
        <section id="risk-overview" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">The Risk Landscape: Where Boarding Businesses Actually Get Hurt</h2>
          <p className="mb-3">
            Real-world boarding risk clusters into predictable buckets: <strong>client agreements</strong> that fail to set expectations, <strong>health controls</strong> that don&apos;t match seasonality or regional disease pressure, <strong>behavior management</strong> errors (mismatch, over-arousal, resource guarding), <strong>facility conditions</strong> (slip, trip, temperature, ventilation), and <strong>documentation gaps</strong> that turn solvable hiccups into disputes. Every bucket is solvable with policy, training, and verification.
          </p>
          <p className="mb-0">
            A useful mental model: <strong>policy → training → environment → audit</strong>. Write it, teach it, build the room so it enforces the policy, and verify with logs. If a step is missing, that&apos;s where incidents breed.
          </p>
        </section>

        {/* Legal & Liability */}
        <section id="legal-liability" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Legal &amp; Liability: Contracts, Standards, and Documentation</h2>
          <p className="mb-3">
            Your waiver and service agreement do not eliminate risk — they <strong>allocate and clarify</strong> it. Good paperwork reduces misunderstandings, speeds care decisions, and defuses complaints by setting norms early. Work with counsel licensed in your state to tailor: assumption of risk, veterinary authorization, medical expense authorization caps, photo/media consent, behavior and muzzling policies, vaccination requirements, emergency evacuation authorization, payment terms, and dispute resolution venue.
          </p>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>Clarity beats cleverness:</strong> plain language with bold headers clients can skim.</li>
            <li><strong>Version control:</strong> track <em>waiverVersion</em> and <em>waiverSignedAt</em>. Require re-sign on updates.</li>
            <li><strong>Local law:</strong> comply with kennel licensing, animal care standards, and consumer-protection rules.</li>
            <li><strong>Record linkage:</strong> every reservation links to the signed version, vaccination proof, and special instructions.</li>
          </ul>
          <p className="mb-0">
            When disputes happen, contemporaneous records decide the outcome. If it&apos;s not documented, it didn&apos;t happen.
          </p>
        </section>

        {/* Insurance */}
        <section id="insurance" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Insurance: Build a Stack, Not a Single Policy</h2>
          <p className="mb-3">
            Insurance doesn&apos;t fix operations, but it keeps a mistake from ending the business. Typical stack: <strong>general liability</strong> (slip-and-fall, dog–dog incidents), <strong>animal bailee</strong> (injury/illness to animals in your care), <strong>professional liability</strong> (advice/representation), <strong>property</strong> (buildings, equipment), <strong>business interruption</strong>, and <strong>workers&apos; comp</strong>. Ask for <strong>boarding/daycare-specific endorsements</strong> and confirm disease outbreaks and evacuation are in scope.
          </p>
          <ul className="list-disc pl-5 space-y-1 mb-0">
            <li>Require certificates from vendors (trainers, groomers) who operate on site.</li>
            <li>Match limits to real risk: medical care ceilings, legal fees, and regional costs.</li>
            <li>Audit annually after peak season; update headcounts, revenues, and changes in services.</li>
          </ul>
        </section>

        {/* Health & Disease Control */}
        <section id="health-disease" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Health &amp; Disease Control: The Predictable Problems</h2>
          <p className="mb-3">
            Outbreaks rarely come from mystery pathogens — they come from <strong>inconsistent intake</strong>, <strong>air management</strong>, and <strong>cleaning drift</strong>. Your controls should match seasonality and local epidemiology.
          </p>
          <h3 className="text-lg font-semibold mt-2 mb-1">Intake &amp; Screening</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Require core vaccines (per your vet) and regionally appropriate non-core (e.g., influenza) with dates on file.</li>
            <li>Ask about cough, vomiting/diarrhea, fever, or recent exposure; reschedule when in doubt.</li>
            <li>Check parasite control and recent boarding/daycare exposures.</li>
          </ul>
          <h3 className="text-lg font-semibold mt-2 mb-1">Air, Surfaces, and Flow</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>Ventilation:</strong> target adequate air changes; use HEPA/filtration where feasible; avoid stagnant zones.</li>
            <li><strong>Zoning:</strong> separate new arrivals, seniors, and immunocompromised dogs.</li>
            <li><strong>Disinfectants:</strong> choose products with proven efficacy; train on contact times; log daily compliance.</li>
          </ul>
          <h3 className="text-lg font-semibold mt-2 mb-1">Food &amp; Water Safety</h3>
          <ul className="list-disc pl-5 space-y-1 mb-0">
            <li>Use labeled bins, clean scoops, and measured grams; sanitize bowls; isolate raw diets if you accept them.</li>
            <li>Document medication administration with double-checks and time windows.</li>
          </ul>
        </section>

        {/* Behavior & Handling */}
        <section id="behavior" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Behavior &amp; Handling: Preventable Incidents</h2>
          <p className="mb-3">
            Most bites and fights are foreseeable: resource tension, doorway pressure, poorly structured group play, pain, or handler inexperience. Solve with <strong>selection, structure, and supervision</strong>.
          </p>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>Assessment:</strong> evaluate new dogs with low-arousal tests; note triggers, body-language thresholds, and handling preferences.</li>
            <li><strong>Grouping:</strong> size, play style, age, and temperament compatibility; caps per group; posted ratios.</li>
            <li><strong>Rules:</strong> no toys or food in group unless explicitly structured; one retrieve at a time on non-slip surfaces.</li>
            <li><strong>Escalation:</strong> teach staff break-up protocols, gates, and equipment staging; debrief and log every incident.</li>
          </ul>
          <p className="mb-0">
            Written behavior policies protect staff and dogs — and they protect you when explaining decisions to clients.
          </p>
        </section>

        {/* Environment */}
        <section id="environment" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Facility &amp; Environment: Engineering Out the Accident</h2>
          <p className="mb-3">
            The room either enforces your policy or fights it. Build for quiet rest, traction, and clean flow.
          </p>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>Traction &amp; layout:</strong> rubberized flooring or non-slip runners, especially at turns and entries.</li>
            <li><strong>Light &amp; sound:</strong> soft lighting and white noise to lower arousal; avoid constant bark feedback loops.</li>
            <li><strong>Temperature &amp; humidity:</strong> monitor and log; heat stress is both a welfare and liability hazard.</li>
            <li><strong>Hardware:</strong> latches, gates, and secure fences; daily inspection checklist.</li>
          </ul>
          <p className="mb-0">
            Small fixes (a runner at a doorway, a slow-close latch) remove the exact scenario that causes injuries.
          </p>
        </section>

        {/* Records */}
        <section id="records" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Records, Waivers &amp; Consent: Paperwork That Actually Works</h2>
          <p className="mb-3">
            Paperwork is only as good as retrieval speed. If you can&apos;t produce it during a tense phone call, it might as well not exist. Digitize and link everything to the reservation: waiver version, vaccine files, meds, feeding grams, behavior flags, emergency contact, and vet authorization amounts.
          </p>
          <ul className="list-disc pl-5 space-y-1 mb-0">
            <li><strong>Time-stamped notes:</strong> medications given, incidents, meals not eaten, stools, cough/sneeze, lameness.</li>
            <li><strong>Photo logs:</strong> pre-existing injuries or skin issues at intake.</li>
            <li><strong>Owner approvals:</strong> text/email confirmed changes to diet/meds or early pickups.</li>
          </ul>
        </section>

        {/* Operations */}
        <section id="operations" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Daily Operations SOPs: The Boring Stuff That Saves You</h2>
          <p className="mb-3">
            If staff have to guess, incidents rise. Convert policy into <strong>timed routines</strong> with checkboxes: morning health rounds, group rotation cadence, nap windows, cleaning blocks, med windows, and evening closing.
          </p>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Post <strong>ratios</strong> and max group counts; schedule floaters for bathroom breaks and turnovers.</li>
            <li>Require two-person med checks; use initials and time stamps.</li>
            <li>Run a <strong>“red board”</strong>: dogs with meds, isolation, muzzle notes, or behavior cautions.</li>
            <li>Debrief daily: what almost went wrong, what to change tomorrow.</li>
          </ul>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Petunia tip:</strong> Convert these SOPs into repeatable checklists in Petunia so new hires follow the exact same day as your best shift lead.
          </div>
        </section>

        {/* Emergency */}
        <section id="emergency" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Emergency &amp; Crisis Management</h2>
          <p className="mb-3">
            Incidents are stressful; they do not have to be chaotic. Write your decision tree now and rehearse it.
          </p>
          <h3 className="text-lg font-semibold mt-2 mb-1">Medical Escalation</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Stabilize, notify owner, and contact the primary vet or ER per signed authorization.</li>
            <li>Send a <strong>one-page incident summary</strong> with history, meds, and vitals if recorded.</li>
            <li>Log times: discovery, first aid, owner contact, departure, arrival, and diagnoses.</li>
          </ul>
          <h3 className="text-lg font-semibold mt-2 mb-1">Facility Events</h3>
          <ul className="list-disc pl-5 space-y-1 mb-0">
            <li>Evacuation map posted in every room; crate cards and leashes staged.</li>
            <li>Generator or heat mitigation plan; temperature thresholds for suspension of outdoor play.</li>
            <li>Media/responders: one spokesperson; document first, speak calmly and briefly.</li>
          </ul>
        </section>

        {/* Financial & Reputation */}
        <section id="financial" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Financial &amp; Reputation Risk: Protecting the Brand</h2>
          <p className="mb-3">
            The cheapest resolution is often the fastest, privately handled one. Have authority to authorize refunds or credits to close minor disputes. Keep a running risk reserve. Monitor reviews; respond once, factually and courteously, then take it offline. Never discuss other clients or specific dogs in public replies.
          </p>
          <ul className="list-disc pl-5 space-y-1 mb-0">
            <li><strong>Post-incident calls:</strong> owner-first language, clear steps taken, and what changes you implemented.</li>
            <li><strong>Staff support:</strong> debrief emotionally; rotate duties to prevent burnout after tough shifts.</li>
          </ul>
        </section>

        {/* Technology */}
        <section id="tech" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Technology Safeguards</h2>
          <p className="mb-3">
            Software should reinforce policy: vaccine date checks at booking, waiver re-sign prompts, behavior flags that follow the dog, med windows with alerts, and auditable change logs. If you use cameras, publish your policy (what they show, when they are monitored, how recordings are retained).
          </p>
          <ul className="list-disc pl-5 space-y-1 mb-0">
            <li>Back up records; restrict access by role; use strong authentication.</li>
            <li>Create <strong>exception reports</strong>: overdue vaccines, missing signatures, incidents without follow-up notes.</li>
          </ul>
        </section>

        {/* Checklists */}
        <section id="checklists" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Printable Checklists (Copy/Paste)</h2>

          <h3 className="text-lg font-semibold mt-2 mb-1">Intake Checklist</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Signed waiver version &amp; timestamp; emergency vet authorization limit.</li>
            <li>Vaccine files verified; parasite control confirmed.</li>
            <li>Feeding grams and schedule; medications with labeled containers.</li>
            <li>Behavior notes: triggers, equipment, consent for muzzle if needed.</li>
            <li>Photo of dog and any pre-existing conditions or skin issues.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Daily Floor SOP</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Morning rounds (cough, stool, appetite, mobility) logged by initials and time.</li>
            <li>Group rotations with posted ratios and max counts.</li>
            <li>Two-person med checks; dishwashing and disinfectant dwell-time logs.</li>
            <li>Quiet blocks scheduled; lights and white noise adjusted.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Incident Response</h3>
          <ul className="list-disc pl-5 space-y-1 mb-0">
            <li>Stabilize → notify owner → call vet/ER with summary.</li>
            <li>Document observations, times, witnesses, and photos if appropriate.</li>
            <li>Internal debrief within 24 hours; update SOPs if a system gap is found.</li>
          </ul>

          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm mt-3">
            <strong>Petunia tip:</strong> Save these as shared checklists so every shift runs the same playbook, even on your busiest weekends.
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">Frequently Asked Questions</h2>

          <p className="mb-3">
            <strong>Do waivers really protect my business?</strong><br />
            They protect you when they are clear, current, and linked to each reservation. They do not replace good care; they document expectations and consent so decisions can be made quickly and disputes defused.
          </p>

          <p className="mb-3">
            <strong>Should I accept raw diets?</strong><br />
            If you do, isolate storage and prep with separate tools and sanitation steps, and disclose added risks in your agreement. Many facilities choose not to accept raw for sanitation reasons.
          </p>

          <p className="mb-3">
            <strong>What staff ratio is &quot;right&quot; for group play?</strong><br />
            It depends on group size, play style, room design, and staff experience. Set a conservative baseline, train escalation procedures, and cap the group rather than the ratio when behavior intensity rises.
          </p>

          <p className="mb-0">
            <strong>How should I handle a negative review after an incident?</strong><br />
            Respond once, factually and courteously, without sharing private details. Invite the owner to continue offline, and document your outreach. Focus on what you learned and how you improved the system.
          </p>
        </section>

        {/* Sources */}
        <section id="sources" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">📚 Sources (Selected)</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            <li>
              AVMA. Canine infectious respiratory disease and kennel best practices (general owner resources).
              <a
                href="https://www.avma.org/resources-tools"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-1 underline"
              >
                https://www.avma.org/resources-tools
              </a>
            </li>
            <li>
              AAHA. Canine vaccination and life-stage care guidance.
              <a
                href="https://www.aaha.org"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-1 underline"
              >
                https://www.aaha.org
              </a>
            </li>
            <li>
              OSHA/NIOSH small business safety topics (general workplace safety planning).
              <a
                href="https://www.osha.gov/smallbusiness"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-1 underline"
              >
                https://www.osha.gov/smallbusiness
              </a>
            </li>
            <li>
              FEMA. Ready Business toolkit for disaster planning and evacuation.
              <a
                href="https://www.ready.gov/business"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-1 underline"
              >
                https://www.ready.gov/business
              </a>
            </li>
          </ul>
          <p className="text-xs text-gray-600 mt-4">
            Educational content only. Consult your attorney and veterinarian for jurisdiction-specific legal language and medical protocols. Insurance terms and availability vary by region and carrier.
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
