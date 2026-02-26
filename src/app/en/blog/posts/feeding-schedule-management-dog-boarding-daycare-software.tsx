'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function FeedingScheduleManagementForBoardingAndDaycare() {
  const locale = useLocale();

  // --- Metadata ---------------------------------------------------------------
  const title =
    'Feeding Schedule Management in Dog Boarding Software & Dog Daycare Software: Safety, Kitchen SOPs, Automation, and Real-World ROI';
  const date = 'August 23, 2025';
  const categories = ['boarding'] as const;

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
            <li><a href="#why" className="underline hover:opacity-80">Why It Matters</a></li>
            <li><a href="#intake" className="underline hover:opacity-80">Owner Intake Essentials</a></li>
            <li><a href="#data-model" className="underline hover:opacity-80">Data Model &amp; Source of Truth</a></li>
            <li><a href="#kitchen" className="underline hover:opacity-80">Kitchen SOPs &amp; Cross-Contact</a></li>
            <li><a href="#automation" className="underline hover:opacity-80">Automation &amp; Alerts</a></li>
            <li><a href="#booking" className="underline hover:opacity-80">Booking-Flow Enforcement</a></li>
            <li><a href="#daycare-vs-boarding" className="underline hover:opacity-80">Daycare vs Boarding Nuances</a></li>
            <li><a href="#life-stage" className="underline hover:opacity-80">Life Stage &amp; Special Diets</a></li>
            <li><a href="#shift-handoff" className="underline hover:opacity-80">Shift Handoffs &amp; Accountability</a></li>
            <li><a href="#edge-cases" className="underline hover:opacity-80">Edge Cases &amp; Exceptions</a></li>
            <li><a href="#reporting" className="underline hover:opacity-80">Reporting &amp; Audits</a></li>
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
            Feeding schedule management is not merely a convenience feature in dog boarding software and dog daycare software—it is a safety system that protects dogs, teams, and margins. Accurate intake, clear kitchen SOPs, cross-contact controls, and automated reminders prevent skipped meals, double meals, allergy incidents, and chaotic handoffs. The right workflow reduces staff stress during peak hours, keeps the front desk honest about cutoffs, and turns &quot;special diets&quot; from a headache into a reputation builder that sets your facility apart.
          </p>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Petunia tip:</strong> Treat feeding like medication: <em>dose, schedule, route, verification</em>. A consistent, logged routine turns an error-prone task into a reliable checklist with auditable proof.
          </div>
        </section>

        {/* Why it matters */}
        <section id="why" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Why Feeding Schedule Management Matters</h2>
          <p className="mb-3">
            Boarding and daycare facilities live inside time grids: open/close windows, yard rotations, cleaning cycles, check-ins, and check-outs. Feeding sits right in the middle of those grids. When feeding is sloppy—unclear portions, missing prep notes, or untracked exceptions—everything else frays: staff scramble during the dinner rush, owners call asking whether their dog ate, and managers lose confidence in the data. Strong feeding management inside your software fixes this at the root by embedding clarity into the process itself.
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Safety:</strong> Prevent overfeeding, underfeeding, and cross-contact with allergens.</li>
            <li><strong>Predictability:</strong> Dogs thrive on routine. Consistent timing reduces GI upset and stress.</li>
            <li><strong>Communication:</strong> Real-time notes and &quot;meal completed&quot; confirmations reduce inbound calls and front-desk interruptions.</li>
            <li><strong>Reputation:</strong> When owners see reliable meal logs and thoughtful handling of special diets, they stay—and tell friends.</li>
          </ul>
        </section>

        {/* Intake */}
        <section id="intake" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Owner Intake Essentials: What You Must Capture</h2>
          <p className="mb-3">
            Intake is where you win or lose the feeding game. The best boarding and daycare software makes intake precise and painless, prompting owners for the right fields and converting their answers into structured data that the kitchen can execute.
          </p>
          <h3 className="text-lg font-semibold mt-2 mb-1">Core fields per dog</h3>
          <ul className="list-disc pl-5 space-y-2 mb-3">
            <li><strong>Food type:</strong> brand, formula, wet/dry/raw, caloric density if known.</li>
            <li><strong>Portions:</strong> exact measure per meal (cups/grams), with a preferred measuring device to avoid guesswork.</li>
            <li><strong>Schedule:</strong> breakfast / lunch / dinner toggle; time windows (e.g., 7–9am).</li>
            <li><strong>Preparation details:</strong> warm water, broth, mixing ratios, soak times, toppers allowed or not.</li>
            <li><strong>Appetite preferences:</strong> separate feeding vs with siblings, quiet zone, slow feeder bowl needed.</li>
            <li><strong>Allergies &amp; intolerances:</strong> ingredients to avoid, severity, anaphylaxis history, vet contact if severe.</li>
            <li><strong>Medication with food:</strong> yes/no, which meds tie to which meal, pill pockets allowed, crush vs whole, &quot;must confirm ingestion&quot; flag.</li>
            <li><strong>Owner-provided food:</strong> bag labeling requirements, single-serve packs vs bulk.</li>
          </ul>
          <h3 className="text-lg font-semibold mt-2 mb-1">Attachments you should allow</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Photo of the measuring cup or kitchen scale note.</li>
            <li>Vet letter for medical diets (e.g., pancreatitis, renal diets).</li>
            <li>Short video for complex prep (e.g., rehydrated freeze-dried ratios).</li>
          </ul>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm mt-3">
            <strong>Petunia tip:</strong> Ask owners to define a &quot;success picture&quot;: &quot;Empty bowl within 15 minutes, no vomiting within 2 hours.&quot; Staff can log against that standard.
          </div>
        </section>

        {/* Data model */}
        <section id="data-model" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Data Model &amp; Source of Truth</h2>
          <p className="mb-3">
            Feeding details should live with the <em>dog profile</em>, not scattered across reservation notes. When the data is centralized, every view—kitchen queue, staff handhelds, arrival roster—reads the same truth and renders the same instructions.
          </p>
          <ul className="list-disc pl-5 space-y-2 mb-3">
            <li><strong>Dog profile object:</strong> includes <code>feedingPlan</code> with <code>meals[]</code>, <code>portion</code>, <code>unit</code>, <code>prep</code>, <code>allergyFlags[]</code>, <code>medsWithMeal[]</code>, <code>notes</code>.</li>
            <li><strong>Policy object:</strong> facility-level settings for last-meal cutoff, quiet-feeding zones, raw diet handling, fridge space limits.</li>
            <li><strong>Meal log:</strong> immutable entries per feeding: <code>scheduledAt</code>, <code>servedAt</code>, <code>completedAt</code>, <code>verifier</code>, <code>exceptions[]</code> (e.g., refused, partial, vomited).</li>
          </ul>
          <p className="mb-3">
            Version the <code>feedingPlan</code>. If an owner updates a portion mid-stay, stamp the change with <code>changedBy</code> and <code>effectiveAt</code>, so your audit shows exactly what was followed at each meal.
          </p>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Petunia tip:</strong> Store both <em>owner units</em> (&quot;half a red cup&quot;) and <em>normalized units</em> (grams) for kitchen accuracy. Display owner language to them, grams to staff.
          </div>
        </section>

        {/* Kitchen SOPs */}
        <section id="kitchen" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Kitchen SOPs &amp; Cross-Contact Controls</h2>
          <p className="mb-3">
            A calm kitchen is a safe kitchen. Your software should translate feeding plans into a clean prep queue that any staffer can run: clear batches, unambiguous labels, and cross-contact safeguards.
          </p>
          <h3 className="text-lg font-semibold mt-2 mb-1">Batching &amp; labeling</h3>
          <ul className="list-disc pl-5 space-y-2 mb-3">
            <li>Generate meal tickets with dog name, run/room, portion in grams, prep notes, and allergy icons.</li>
            <li>Sort by service (boarding vs daycare), then by area, then by time window to minimize foot traffic.</li>
            <li>Use color-coded stickers for special diets (e.g., red for &quot;no chicken,&quot; blue for &quot;meds inside&quot;).</li>
          </ul>
          <h3 className="text-lg font-semibold mt-2 mb-1">Cross-contact &amp; sanitation</h3>
          <ul className="list-disc pl-5 space-y-2 mb-3">
            <li>Dedicated scoops for common allergens; sanitize between uses; keep raw prep isolated.</li>
            <li>Gloves for raw handling; separate cutting mats; clearly labeled storage shelves.</li>
            <li>Slow feeder bowls and elevated stands available as flags in the queue.</li>
          </ul>
          <h3 className="text-lg font-semibold mt-2 mb-1">Serving &amp; verification</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Two-step verification for &quot;meds in food&quot; meals: preparer and server initials (digital checkboxes).</li>
            <li>Photo-optional &quot;empty bowl&quot; proof for tough cases or owner reassurance during trials.</li>
            <li>Exception choices: refused, partial, vomited, diarrhea; each triggers a simple next-step protocol.</li>
          </ul>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Petunia tip:</strong> Print a small QR on the meal ticket that opens the live dog profile for last-minute checks—no tablet juggling in a wet kitchen.
          </div>
        </section>

        {/* Automation */}
        <section id="automation" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Automation &amp; Alerts: The Right Ping at the Right Time</h2>
          <p className="mb-3">
            Automation is not about nagging—it is about creating confidence. Owners get gentle, timely nudges to pack food, confirm portions, and approve any diet changes. Staff gets reminders that reduce cognitive load during peak windows.
          </p>
          <ul className="list-disc pl-5 space-y-2 mb-3">
            <li><strong>Pre-arrival checklist:</strong> 72 hours before boarding, send a &quot;Food &amp; Feeding&quot; confirmation flow with last-minute clarifications.</li>
            <li><strong>Day-of prompts:</strong> Push the dog into the breakfast/lunch/dinner queues based on arrival time and selected services.</li>
            <li><strong>Exception loops:</strong> If &quot;refused breakfast,&quot; trigger an appetite recheck workflow with optional toppers (per owner consent).</li>
            <li><strong>Inventory alerts:</strong> Track owner-provided food remaining; notify owner automatically when low, with &quot;authorize facility food&quot; fallback.</li>
          </ul>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Petunia tip:</strong> Silence alerts when the meal is logged as completed. Idempotent logic prevents stale &quot;still need to feed&quot; messages after the fact.
          </div>
        </section>

        {/* Booking enforcement */}
        <section id="booking" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Booking-Flow Enforcement Without Friction</h2>
          <p className="mb-3">
            Bookings are the perfect time to prevent feeding mistakes later. Your dog boarding software or dog daycare software should run a quick feeding check the moment dates are selected and dogs are chosen.
          </p>
          <ol className="list-decimal pl-5 space-y-2 mb-3">
            <li><strong>Pre-check:</strong> If the feeding plan is incomplete, block the final submit and surface a short intake form with the exact missing fields.</li>
            <li><strong>Smart defaults:</strong> If the dog has a standing plan, pre-load it; any new answers create a new version stamped to the booking.</li>
            <li><strong>Owner choice:</strong> Let owners decide &quot;pack food&quot; vs &quot;facility food&quot; with transparent pricing.</li>
            <li><strong>Cutoffs:</strong> Show the last meal time owner gave before arrival; suggest the next scheduled meal at the facility to avoid double feeding.</li>
          </ol>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Petunia tip:</strong> Display a tiny &quot;Feeding Plan Verified&quot; checkmark on the booking confirmation. That single icon prevents follow-up calls.
          </div>
        </section>

        {/* Daycare vs Boarding */}
        <section id="daycare-vs-boarding" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Daycare vs Boarding: Different Rhythms, Same Rigor</h2>
          <h3 className="text-lg font-semibold mt-2 mb-1">Daycare</h3>
          <p className="mb-3">
            Daycare feeding is about whether lunch is offered and who qualifies. Puppies and under-weight dogs may benefit from a lunch; many adults do not need mid-day meals. Your system should present a simple &quot;lunch offered&quot; toggle at booking with portion auto-filled if applicable. For assessment days, log appetite and stress signals alongside lunch to help decide future eligibility.
          </p>
          <h3 className="text-lg font-semibold mt-2 mb-1">Boarding</h3>
          <p className="mb-3">
            Boarding adds longer stays, owner-provided food management, and holiday rush chaos. The software must calculate how many meals the owner packed, warn if there is a shortfall, and offer &quot;switch to facility food&quot; options with pricing and approval captured digitally. Automated &quot;food low&quot; pings save reputation and prevent midnight surprises.
          </p>
        </section>

        {/* Life stage & special diets */}
        <section id="life-stage" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Life Stage &amp; Special Diets</h2>
          <h3 className="text-lg font-semibold mt-2 mb-1">Puppies</h3>
          <p className="mb-3">
            Puppies often eat more frequently. Include an age-based prompt: &quot;Offer lunch?&quot; with portion suggestions the owner can confirm. For nervous eaters, quiet-zone flags help staff create a calmer meal environment.
          </p>
          <h3 className="text-lg font-semibold mt-2 mb-1">Adults</h3>
          <p className="mb-3">
            Adults should track stable portions, but travel stress can change appetite. Log exceptions and send a polite owner note: &quot;Ate 75% of dinner; we slowed the environment and will re-offer a small topper tomorrow if approved.&quot;
          </p>
          <h3 className="text-lg font-semibold mt-2 mb-1">Seniors &amp; medical diets</h3>
          <p className="mb-3">
            Seniors may need softened food, warm water, or meds mixed with food. Require vet notes for renal or pancreatitis diets. For the kitchen, the key is clarity at the point of prep: the queue should scream the difference between a standard bowl and a medical diet with &quot;must verify ingestion&quot; rules.
          </p>
          <h3 className="text-lg font-semibold mt-2 mb-1">Raw &amp; fresh food</h3>
          <p>
            Raw/fresh diets require strict segregation and sanitation. Your plan should specify thaw times, fridge zones, and gloves. Staff should be able to log temperature checks and disposal rules for leftovers.
          </p>
        </section>

        {/* Shift handoffs */}
        <section id="shift-handoff" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Shift Handoffs &amp; Accountability</h2>
          <p className="mb-3">
            Handoffs are where meals are missed—or double served. Build a clear ownership chain for every meal: who prepped, who served, and who verified. A simple &quot;meal queue&quot; screen per area prevents &quot;I thought you did it&quot; moments.
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Role-based views:</strong> Kitchen sees prep; floor sees serve; leads see verify.</li>
            <li><strong>Time windows:</strong> &quot;Due by&quot; badges turn yellow at 15 minutes left, red when overdue.</li>
            <li><strong>Escalation:</strong> Overdue meals ping the shift lead and appear at the top of the dashboard until cleared.</li>
          </ul>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Petunia tip:</strong> Weekly &quot;missed or doubled&quot; report (should be zero) becomes a friendly competition among teams and shifts.
          </div>
        </section>

        {/* Edge cases */}
        <section id="edge-cases" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Edge Cases &amp; Exceptions</h2>
          <ul className="list-disc pl-5 space-y-2 mb-3">
            <li><strong>Refusals:</strong> Offer a small topper protocol with explicit owner consent stored on file.</li>
            <li><strong>Fast eaters:</strong> Slow feeder bowl, split portions, short &quot;settle&quot; before yard time.</li>
            <li><strong>Resource guarding:</strong> Feed separately, then rejoin group; log behavior notes for pattern tracking.</li>
            <li><strong>Multiple dogs:</strong> Link sibling profiles so &quot;feed separately&quot; flags hit both queues.</li>
            <li><strong>Holiday volume:</strong> Pre-print tickets for all expected meals; assign a runner per area to reduce bottlenecks.</li>
          </ul>
          <p>
            When an exception becomes a pattern, convert it into a permanent plan change and notify the owner to approve the updated baseline.
          </p>
        </section>

        {/* Reporting */}
        <section id="reporting" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Reporting &amp; Audits</h2>
          <p className="mb-3">
            The best report is the one you can open while a client is standing at the desk. Feeding logs should be searchable by dog and date with clear icons: completed, partial, refused, or exception. Exportable PDFs let you answer &quot;Did she eat?&quot; questions in seconds.
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Daily kitchen dashboard:</strong> meals scheduled vs served vs overdue.</li>
            <li><strong>Exception ledger:</strong> refusals and vomits with staff notes and next-day follow-up checklist.</li>
            <li><strong>Owner transparency:</strong> Opt-in daily summaries improve trust and reduce phone calls.</li>
          </ul>
        </section>

        {/* KPIs */}
        <section id="kpis" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">KPIs &amp; ROI: What to Measure</h2>
          <ul className="list-disc pl-5 space-y-2 mb-3">
            <li><strong>Meal completion rate:</strong> % of scheduled meals logged as completed on time.</li>
            <li><strong>Exception rate:</strong> % of meals with refusal/vomit; target reductions over time.</li>
            <li><strong>Double-serve/missed-meal incidents:</strong> should approach zero with strong SOPs.</li>
            <li><strong>Owner contact reduction:</strong> fewer &quot;Did my dog eat?&quot; calls after enabling owner summaries.</li>
            <li><strong>Labor minutes saved:</strong> time from prep to verify vs baseline before software enforcement.</li>
            <li><strong>Food inventory variance:</strong> owner-provided vs used; revenue from facility food when authorized.</li>
          </ul>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Petunia tip:</strong> A &quot;Kitchen On-Time&quot; score posted in the staff area creates pride and consistency without shaming.
          </div>
        </section>

        {/* Checklists */}
        <section id="checklists" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Checklists &amp; Templates</h2>
          <h3 className="text-lg font-semibold mt-2 mb-1">Owner Intake (1 minute)</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Food brand &amp; formula; portion in cups/grams; meal times.</li>
            <li>Allergies / &quot;do not feed&quot; list (severity).</li>
            <li>Meds with food; confirmation required.</li>
            <li>Pack food or use facility food; refrigeration needed.</li>
          </ul>
          <h3 className="text-lg font-semibold mt-2 mb-1">Kitchen Prep (5 steps)</h3>
          <ol className="list-decimal pl-5 space-y-1 mb-3">
            <li>Print/sort meal tickets by area &amp; time.</li>
            <li>Prep by batch; color-code allergens.</li>
            <li>Segregate raw; sanitize tools between allergens.</li>
            <li>Server verifies, logs exceptions if any.</li>
            <li>Update inventory for owner-provided food.</li>
          </ol>
          <h3 className="text-lg font-semibold mt-2 mb-1">Shift Handoff (2 minutes)</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Overdue list cleared or escalated.</li>
            <li>Exceptions reviewed; refeed plans set.</li>
            <li>Inventory &quot;low&quot; pings sent if needed.</li>
          </ul>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm mt-3">
            <strong>Petunia tip:</strong> Pin these checklists in the app for quick reference and new-hire onboarding.
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">Frequently Asked Questions</h2>
          <p className="mb-3">
            <strong>Should we allow lunch for every daycare dog?</strong><br />
            Not necessarily. Offer it for puppies, seniors, under-weight dogs, or upon owner request. Use your software to flag who is eligible and avoid ad-hoc decisions at noon.
          </p>
          <p className="mb-3">
            <strong>What if an owner packs the wrong amount of food?</strong><br />
            Track projected meals vs bags on arrival. Send a &quot;low food&quot; alert with options: drop off more or authorize facility food at a clear price.
          </p>
          <p className="mb-3">
            <strong>Do stricter feeding rules slow down the team?</strong><br />
            The opposite—clarity makes speed. When instructions are unambiguous at the point of prep, the kitchen moves faster with fewer questions and reworks.
          </p>
          <p className="mb-3">
            <strong>How do we handle &quot;meds in food&quot; safely?</strong><br />
            Require two-step verification and &quot;must confirm ingestion&quot; for critical meds. Provide pill pockets or alternatives per owner consent.
          </p>
          <p className="text-xs text-gray-600">
            Educational content only. Always follow your veterinarian&apos;s guidance for medical diets and your local regulations for food handling and sanitation.
          </p>
        </section>

        {/* Sources */}
        <section id="sources" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">📚 Sources (Selected)</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            <li>
              American Animal Hospital Association (AAHA). Canine life stage guidance and nutritional considerations.
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
              World Small Animal Veterinary Association (WSAVA). Global Nutrition Toolkit &amp; feeding recommendations.
              <a
                href="https://wsava.org/global-guidelines/global-nutrition-guidelines/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline ml-1"
              >
                WSAVA
              </a>
            </li>
            <li>
              AVMA client education resources on nutrition and feeding practices.
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
              Merck Veterinary Manual. Canine nutrition overviews and GI considerations.
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
            Links above are provided for general education and are not exhaustive. Consult your veterinary team for individualized diets.
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
