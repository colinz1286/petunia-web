'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function AllergyDietTrackingDogBoardingDaycareSoftware() {
  const locale = useLocale();

  const title =
    'Allergy & Diet Tracking in Dog Boarding Software and Dog Daycare Software: Safer Meals, Fewer Incidents, and Calmer Operations';
  const date = 'August 23, 2025';
  const categories = ['boarding', 'daycare'] as const;

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
            <li><a href="#why-now" className="underline hover:opacity-80">Why Allergy &amp; Diet Tracking Matters</a></li>
            <li><a href="#taxonomy" className="underline hover:opacity-80">Allergen &amp; Diet Taxonomy</a></li>
            <li><a href="#schema" className="underline hover:opacity-80">Data Model &amp; Field Design</a></li>
            <li><a href="#owner-onboarding" className="underline hover:opacity-80">Owner Onboarding UX</a></li>
            <li><a href="#kitchen" className="underline hover:opacity-80">Kitchen &amp; Prep Workflow</a></li>
            <li><a href="#cross-contact" className="underline hover:opacity-80">Cross-Contact Prevention</a></li>
            <li><a href="#meds" className="underline hover:opacity-80">Medications, Supplements &amp; Diet</a></li>
            <li><a href="#life-stage" className="underline hover:opacity-80">Puppies, Adults, Seniors</a></li>
            <li><a href="#special-diets" className="underline hover:opacity-80">Special Diets &amp; Food Trials</a></li>
            <li><a href="#automation" className="underline hover:opacity-80">Automation &amp; Alerts</a></li>
            <li><a href="#ops" className="underline hover:opacity-80">Operations: Daycare vs. Boarding</a></li>
            <li><a href="#inventory" className="underline hover:opacity-80">Inventory, Storage &amp; Labeling</a></li>
            <li><a href="#client-trust" className="underline hover:opacity-80">Client Experience &amp; Trust</a></li>
            <li><a href="#kpis" className="underline hover:opacity-80">KPIs &amp; Reporting</a></li>
            <li><a href="#blueprint" className="underline hover:opacity-80">Implementation Blueprint</a></li>
            <li><a href="#migration" className="underline hover:opacity-80">Migration Plan</a></li>
            <li><a href="#faq" className="underline hover:opacity-80">FAQ</a></li>
            <li><a href="#sources" className="underline hover:opacity-80">Further Reading</a></li>
          </ul>
        </nav>

        {/* TL;DR */}
        <section id="tldr" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Short Answer (TL;DR)</h2>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4">
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Allergy &amp; diet tracking</strong> is a safety system, not a preference form. Structured data prevents cross-contact, wrong-food errors, and GI flare-ups.</li>
              <li><strong>Good software</strong> turns profiles into action: badges on live boards, labeled bins, timed tasks, and clear kitchen SOPs that scale during rush hours.</li>
              <li><strong>Automation</strong> sends vaccine and food expiry nudges, catches missing instructions, and flags conflicts (e.g., treats contain known allergens).</li>
              <li><strong>Reporting</strong> proves impact: fewer upset-stomach calls, shorter check-ins, and higher client retention due to visible care and precision.</li>
            </ul>
          </div>
        </section>

        {/* Why now */}
        <section id="why-now" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Why Allergy &amp; Diet Tracking Matters for Boarding &amp; Daycare</h2>
          <p className="mb-4">
            Food is both care and risk. The same treat that thrills one dog can trigger hives or GI distress in another. In busy facilities, the difference
            between a calm day and a cascade of upset stomachs is often <strong>data fidelity</strong>: the right details captured once, surfaced everywhere, and followed
            by a workflow that any staff member can execute under time pressure. This is why dog boarding software and dog daycare software must
            treat diet and allergy data like a first-class citizen alongside vaccines and waivers.
          </p>
          <p className="mb-4">
            Owners do not judge you by how many fields you collect; they judge you by whether their dog comes home feeling great. Precision feeding and
            strict allergen controls make that outcome predictable. The right software moves this from memory and sticky notes into <strong>structured,
            enforceable processes</strong> that reduce errors while staying fast and humane.
          </p>
        </section>

        {/* Taxonomy */}
        <section id="taxonomy" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Allergen &amp; Diet Taxonomy: Speak a Common Language</h2>
          <p className="mb-3">
            Not all sensitivities are equal. Some are <strong>ingredient allergies</strong> (e.g., chicken, beef, wheat), others are <strong>intolerances</strong> (e.g., lactose),
            and many are <strong>management constraints</strong> (e.g., low-fat for pancreatitis, renal diets, low-purine). Your software should encode
            a clear taxonomy so profiles can be searched, filtered, and enforced without guesswork.
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Protein source:</strong> chicken, turkey, beef, lamb, fish, duck, novel proteins (venison, rabbit, kangaroo).</li>
            <li><strong>Carb &amp; grain:</strong> wheat, soy, corn, barley, rice, oats, grain-free formulas (with caveats).</li>
            <li><strong>Additives:</strong> artificial colors, specific preservatives, flavorings; note if treats may contain these.</li>
            <li><strong>Dietary management:</strong> low-fat, renal support, urinary, hydrolyzed protein, limited ingredient, veterinary prescription.</li>
            <li><strong>Environmental crossover:</strong> pollen or dust mite allergies can correlate with skin flares from certain treats; note history.</li>
          </ul>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm mt-3">
            <strong>Petunia tip:</strong> Use a <em>select-plus-notes</em> pattern: a structured allergen list paired with a short note for nuance (e.g., &quot;OK with duck but not
            chicken fat&quot;). Structure drives enforcement; notes capture reality.
          </div>
        </section>

        {/* Schema */}
        <section id="schema" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Data Model &amp; Field Design: The Backbone of Safety</h2>
          <p className="mb-3">
            You need a canonical pet profile plus operational views that make diet information obvious at the moment of action. Think in layers:
            <em> canonical profile → operational fan-outs → analytics</em>. Store the exact feeding plan and allergen set in the profile, then
            fan out to live boards, kitchen cards, and task lists.
          </p>
          <h3 className="text-lg font-semibold mt-2 mb-1">Core fields (Pet Diet &amp; Allergy)</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>Food brand &amp; formula:</strong> e.g., Brand X Limited Ingredient Salmon.</li>
            <li><strong>Protein source(s):</strong> primary &amp; secondary.</li>
            <li><strong>Allergens to avoid:</strong> selectable list + free-text note.</li>
            <li><strong>Meals per day:</strong> breakfast, lunch, dinner toggles with times.</li>
            <li><strong>Portion &amp; unit:</strong> grams, cups, scoops; include measuring device notes.</li>
            <li><strong>Add-ins &amp; supplements:</strong> pumpkin, probiotics, joint support; timing and amount.</li>
            <li><strong>Water notes:</strong> add water, warm water, broth, or no liquids.</li>
            <li><strong>Feeding devices:</strong> slow feeder, snuffle mat, hand-feed, pill pockets allowed or not.</li>
            <li><strong>Treat policy:</strong> approved list, &quot;owner-provided only,&quot; or &quot;no treats&quot;.</li>
            <li><strong>GI history:</strong> pancreatitis, IBD, sensitive stomach, constipation/diarrhea patterns.</li>
            <li><strong>Emergency food:</strong> allowed fallback brand/formula if owner food runs out.</li>
          </ul>
          <h3 className="text-lg font-semibold mt-2 mb-1">Compliance &amp; provenance</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Photo of bag label &amp; lot if the owner uploads it.</li>
            <li>Allergy reaction history with date and severity.</li>
            <li>Vet contact &amp; dietary prescription if applicable.</li>
            <li>Owner consent regarding substitute foods, broths, or toppers.</li>
          </ul>
        </section>

        {/* Owner onboarding */}
        <section id="owner-onboarding" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Owner Onboarding UX: Capture Signal, Not Friction</h2>
          <p className="mb-3">
            The art is collecting enough to be safe without making the form feel like homework. Progressive steps, autosave, and camera upload keep
            the experience fast while yielding high-quality data that staff can actually use.
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Split the flow:</strong> pet basics → diet &amp; allergies → meds &amp; supplements → treats &amp; permissions.</li>
            <li><strong>Autosave &amp; resume:</strong> owners finish on their phone; nothing is lost.</li>
            <li><strong>Prefill for additional pets:</strong> copy the household&#39;s treat permissions and preferred measuring units.</li>
            <li><strong>Camera upload:</strong> snap the bag label; the kitchen will thank you later.</li>
            <li><strong>Clarity:</strong> explain why details matter (&quot;prevents upset stomachs; helps us pick safe treats&quot;).</li>
          </ul>
        </section>

        {/* Kitchen workflow */}
        <section id="kitchen" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Kitchen &amp; Prep Workflow: Where Profiles Become Meals</h2>
          <p className="mb-3">
            On a busy morning, the kitchen needs answers at a glance: what, how much, when, and what to avoid. Translate profiles into
            <strong> unmissable prep cards</strong> and <strong>time-based tasks</strong> that trigger before each meal window.
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Per-dog <strong>meal card</strong> with brand, portion, unit, add-ins, and a bold allergen list.</li>
            <li><strong>Timed tasks</strong> for breakfast, lunch, dinner; staff mark &quot;fed&quot; with an optional note (ate full, partial, refused).</li>
            <li><strong>Escalation prompt</strong> after a refusal: try warm water or a short rest; notify owner if patterns repeat.</li>
            <li>Color-coded <strong>bin labels</strong> mirroring the allergy badges shown on the live board.</li>
          </ul>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Petunia tip:</strong> Add a &quot;kitchen summary&quot; view filtered by meal window. Staff see only who needs prep right now, grouped by allergy severity.
          </div>
        </section>

        {/* Cross-contact */}
        <section id="cross-contact" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Cross-Contact Prevention: The Details That Prevent Big Problems</h2>
          <p className="mb-3">
            Most diet incidents come from cross-contact, not malice: shared scoops, unmarked treats, or &quot;close enough&quot; substitutions. Use software to standardize
            the steps that matter when hands are moving quickly.
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Dedicated scoops</strong> per allergen class; do not share between protein groups if severe sensitivities exist.</li>
            <li><strong>Bin labeling</strong> with dog name, formula, and a bold &quot;avoid&quot; list.</li>
            <li><strong>Treat policy enforcement</strong>: software blocks staff-provided treats when a profile says owner-provided only.</li>
            <li><strong>Sanitize workflow</strong>: quick prompts for wash, rinse, sanitize between incompatible foods.</li>
            <li><strong>Photo checks</strong>: if a substitute is needed, require a photo + owner acknowledgment in the timeline.</li>
          </ul>
        </section>

        {/* Meds & diet */}
        <section id="meds" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Medications, Supplements &amp; Diet: The Interaction Layer</h2>
          <p className="mb-3">
            Medication timing often intersects with food: with-food, away-from-food, separate from dairy, no high-fat, or administer with a pill pocket
            (which itself may contain allergens). Encode these rules in structured fields and let the task engine do the remembering.
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Timing flags:</strong> with-food, before meal by 30 minutes, after meal, separated from supplement X by 2 hours.</li>
            <li><strong>Carrier rules:</strong> pill pockets allowed or not; cheese forbidden if dairy sensitive; peanut butter if approved.</li>
            <li><strong>Conflict detection:</strong> alert if the chosen carrier contains a known allergen in the profile.</li>
            <li><strong>Audit trail:</strong> two-person sign-off for controlled meds; optional photo of the administered dose for sensitive cases.</li>
          </ul>
        </section>

        {/* Life stages */}
        <section id="life-stage" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Puppies, Adults, Seniors: Diet Needs Change With Age</h2>
          <p className="mb-3">
            Age informs calories, meal frequency, and tolerance. Puppies may need three or four small meals and careful treat selection during training.
            Many adults do best on two predictable meals. Seniors often benefit from gentle add-ins, joint supplements, and slower feeders that respect
            mobility and dental changes.
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Puppies:</strong> small frequent meals, clear treat limits, easy-to-digest training rewards.</li>
            <li><strong>Adults:</strong> stable times, consistent portions, watch weight when daycare raises activity.</li>
            <li><strong>Seniors:</strong> softer textures, traction support at feeding, water access nearby, med timing integrated with meals.</li>
          </ul>
        </section>

        {/* Special diets */}
        <section id="special-diets" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Special Diets &amp; Food Trials: Handle With Care (and Proof)</h2>
          <p className="mb-3">
            Some dogs arrive in the middle of a veterinary food trial (hydrolyzed or novel protein), where <strong>any</strong> cross-contact can invalidate weeks of progress.
            Your system should elevate these cases with explicit banners, stricter treat rules, and photo evidence of prep areas if needed.
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Trial flag:</strong> &quot;food trial in progress&quot; badge with start date and allowed items list.</li>
            <li><strong>No non-trial treats</strong> under any circumstances; owner-provided only, sealed and labeled.</li>
            <li><strong>Kitchen isolation</strong> when feasible: separate surface or time-boxed prep with sanitized tools.</li>
          </ul>
        </section>

        {/* Automation */}
        <section id="automation" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Automation &amp; Alerts: Make Precision the Default</h2>
          <p className="mb-3">
            Allergy and diet data should work behind the scenes. The system nudges owners before stays, warns staff if a treat conflicts, and generates
            meal tasks automatically so nothing depends on memory during crunch times.
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Pre-arrival checklist:</strong> &quot;Confirm portions &amp; bring enough food&quot; with a quick link to update the plan.</li>
            <li><strong>Expiry nudges:</strong> &quot;Your supply will run out on day 3&quot; based on portion math and bag size.</li>
            <li><strong>Treat conflict alerts:</strong> if a staffer opens the treat menu, blocked items are disabled for this profile.</li>
            <li><strong>Refusal flow:</strong> if a dog refuses two consecutive meals, generate a supervisor review and optional owner message.</li>
          </ul>
        </section>

        {/* Ops differences */}
        <section id="ops" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Operations: Daycare vs. Boarding</h2>
          <h3 className="text-lg font-semibold mt-2 mb-1">Daycare</h3>
          <ul className="list-disc pl-5 space-y-2 mb-3">
            <li>Lunch windows for puppies and seniors; opt-in mid-day meals for others.</li>
            <li>Treat policies set per group; allergy cards visible to all shift leads.</li>
            <li>Training treats controlled by profile; staff choose only approved items.</li>
          </ul>
          <h3 className="text-lg font-semibold mt-2 mb-1">Boarding</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Two or three meals daily with precise portions; slow feeders and hand-feed options ready.</li>
            <li>Refusal protocols, broth permissions, and escalation timings encoded as tasks.</li>
            <li>Overnight notes: &quot;ate late&quot; or &quot;soft stool&quot; logged for morning decisions and owner transparency.</li>
          </ul>
        </section>

        {/* Inventory & storage */}
        <section id="inventory" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Inventory, Storage &amp; Labeling: Keep It Organized</h2>
          <p className="mb-3">
            Diet precision collapses without strong labeling. Your software should print or render bin labels that mirror profile badges so anyone can
            find and prep the right food without asking a supervisor.
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Labeled bins:</strong> dog name, meal plan, allergens, and owner initials on arrival bags.</li>
            <li><strong>First-in, first-out</strong> notes for canned or fresh items; log open dates.</li>
            <li><strong>Cold storage map:</strong> which shelf or bin holds special diets; visible on the kitchen view.</li>
            <li><strong>Waste tracking:</strong> uneaten portions logged; helps refine future portions and prevent shortages.</li>
          </ul>
        </section>

        {/* Client trust */}
        <section id="client-trust" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Client Experience &amp; Trust: Show Your Work</h2>
          <p className="mb-3">
            When families see that you remembered slow feeders, approved treats, and portion sizes, they relax. Report cards that reference the
            profile (&quot;ate 100% of salmon LID with pumpkin add-in&quot;) signal competence and care. Small details compound into loyalty.
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Post-stay summary with meals eaten, refusals, and any supportive changes used.</li>
            <li>Invites to update the plan before the next booking.</li>
            <li>Optional photo of prep for sensitive or trial diets.</li>
          </ul>
        </section>

        {/* KPIs */}
        <section id="kpis" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">KPIs &amp; Reporting: Prove It Worked</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>GI incident rate:</strong> upset stomach calls per 100 dog-days.</li>
            <li><strong>Meal refusal rate:</strong> percent of meals with &quot;partial&quot; or &quot;refused&quot; notes; track by diet type.</li>
            <li><strong>Treat conflict events:</strong> blocked attempts vs. successful safe treats.</li>
            <li><strong>Check-in time:</strong> average minutes saved after introducing camera upload and prefill.</li>
            <li><strong>Owner satisfaction:</strong> post-stay &quot;feeding accuracy&quot; scores.</li>
            <li><strong>Waste percentage:</strong> grams or cups discarded vs. served.</li>
            <li><strong>Shortage prevention:</strong> stays without mid-stay food shortages after pre-arrival nudges.</li>
          </ul>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm mt-3">
            <strong>Petunia tip:</strong> Set a 30-day baseline, then compare the 30 days after launch. Share a weekly dashboard in team standups so the kitchen
            sees their wins.
          </div>
        </section>

        {/* Blueprint */}
        <section id="blueprint" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Implementation Blueprint: MVP → Scale</h2>
          <h3 className="text-lg font-semibold mt-2 mb-1">Phase 1: MVP Diet &amp; Allergy Core (2–3 weeks)</h3>
          <ul className="list-disc pl-5 space-y-2 mb-3">
            <li>Add structured diet &amp; allergen fields to the pet profile (brand, portion, unit, allergens, treats allowed).</li>
            <li>Build kitchen cards &amp; timed meal tasks; add &quot;fed/partial/refused&quot; logging.</li>
            <li>Render bold badges on live boards and bin labels.</li>
          </ul>
          <h3 className="text-lg font-semibold mt-2 mb-1">Phase 2: Automation &amp; Cross-Contact Controls</h3>
          <ul className="list-disc pl-5 space-y-2 mb-3">
            <li>Pre-arrival nudges for portions, supplies, and treat permissions.</li>
            <li>Treat conflict disabling; sanitization prompts between incompatible foods.</li>
            <li>Refusal escalation with supervisor review and optional owner message.</li>
          </ul>
          <h3 className="text-lg font-semibold mt-2 mb-1">Phase 3: Reporting, Trials &amp; Multi-Location</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>GI incident &amp; refusal dashboards; waste tracking and portion tuning.</li>
            <li>Food trial mode with strict banners and isolation prompts.</li>
            <li>UTC timestamps and locale-aware labels across regions (U.S., Canada, U.K., Ireland, Australia, New Zealand).</li>
          </ul>
        </section>

        {/* Migration */}
        <section id="migration" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Migration Plan: From Sticky Notes to Structured Safety</h2>
          <p className="mb-3">
            Most teams start with scattered notes and texts. The safest path is a clean schema plus a staged import, then owner verification tied to their
            next booking. Do not try to perfect legacy data; make it <em>queryable</em> and <em>enforceable</em> today, then enrich.
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Map legacy fields (food brand, portion, allergens, treats) to the new schema.</li>
            <li>Invite owners to confirm diet plans via a one-tap link before arrival.</li>
            <li>Print new bin labels from the system on day one; retire handwritten tags quickly.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">Frequently Asked Questions</h2>

          <p className="mb-3">
            <strong>Will detailed diet forms scare owners away?</strong><br />
            Not if they are short, mobile-friendly, and clearly explained. When owners see fewer upset stomachs and accurate report cards, they become fans.
          </p>

          <p className="mb-3">
            <strong>Can we allow staff treats at all?</strong><br />
            Yes—if the system enforces profile rules. Approved treat lists can be tied to size classes and filtered by allergens. When in doubt, owner-provided only.
          </p>

          <p className="mb-3">
            <strong>What if a dog refuses meals?</strong><br />
            Use a refusal protocol: warm water, brief rest, hand-feed if approved, and log outcomes. Escalate to a supervisor and notify owners if patterns persist.
          </p>

          <p className="mb-3">
            <strong>Do we need food photos?</strong><br />
            Bag label photos dramatically reduce confusion between similar formulas and help during substitutions. They are optional but valuable.
          </p>

          <p className="mb-3">
            <strong>How do we manage food trials?</strong><br />
            Add a &quot;trial&quot; badge, block all non-trial treats, and prompt for photo verification of prep areas if needed. Staff should never improvise with trial diets.
          </p>

          <p className="text-xs text-gray-600">
            Educational content only. For dietary prescriptions or complex medical cases, consult your veterinarian. Always follow your region&#39;s food handling laws and your insurer&#39;s guidelines.
          </p>
        </section>

        {/* Sources */}
        <section id="sources" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">Further Reading</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            <li>
              Nielsen Norman Group. Mobile forms and error-prevention patterns.
              <a href="https://www.nngroup.com/" target="_blank" rel="noopener noreferrer"> NN&#x2F;g</a>
            </li>
            <li>
              Baymard Institute. Checkout UX and validation best practices.
              <a href="https://baymard.com" target="_blank" rel="noopener noreferrer"> Baymard</a>
            </li>
            <li>
              W3C Web Content Accessibility Guidelines (WCAG) for accessible forms.
              <a href="https://www.w3.org/WAI/standards-guidelines/wcag/" target="_blank" rel="noopener noreferrer"> WCAG</a>
            </li>
            <li>
              World Small Animal Veterinary Association (WSAVA) Global Nutrition resources (owner &amp; clinic guidance).
              <a href="https://wsava.org/global-guidelines/global-nutrition-guidelines/" target="_blank" rel="noopener noreferrer"> WSAVA</a>
            </li>
          </ul>
          <p className="text-xs text-gray-600 mt-4">
            Links above are for general education and are not exhaustive. Always consult your veterinary team for individualized diet guidance.
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
