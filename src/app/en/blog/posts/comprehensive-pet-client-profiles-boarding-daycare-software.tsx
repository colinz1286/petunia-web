'use client';

import Head from 'next/head';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function ComprehensivePetClientProfilesBoardingDaycareSoftware() {
  const locale = useLocale();

  const title =
    'Comprehensive Pet & Client Profiles in Dog Boarding Software and Dog Daycare Software: Safer Operations, Faster Check-Ins, and Happier Clients';
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

  const description =
    'Why deep, structured pet and client profiles are the backbone of modern dog boarding software and dog daycare software. Learn the data fields that matter, how to capture them without creating friction, and how to turn profiles into safety, speed, and revenue wins across your team.';

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
            <li><a href="#why-profiles" className="underline hover:opacity-80">Why Profiles Matter</a></li>
            <li><a href="#what-comprehensive" className="underline hover:opacity-80">What Counts as Comprehensive</a></li>
            <li><a href="#data-model" className="underline hover:opacity-80">Data Model &amp; Field Design</a></li>
            <li><a href="#owner-onboarding" className="underline hover:opacity-80">Owner Onboarding UX</a></li>
            <li><a href="#pet-onboarding" className="underline hover:opacity-80">Pet Onboarding UX</a></li>
            <li><a href="#vaccines-waivers" className="underline hover:opacity-80">Vaccines, Waivers &amp; Eligibility</a></li>
            <li><a href="#meds-feeding-allergies" className="underline hover:opacity-80">Medications, Feeding &amp; Allergies</a></li>
            <li><a href="#behavior" className="underline hover:opacity-80">Behavior, Triggers &amp; Handling Notes</a></li>
            <li><a href="#grooming-health" className="underline hover:opacity-80">Grooming, Health Flags &amp; Senior Needs</a></li>
            <li><a href="#files-media" className="underline hover:opacity-80">Files, Media &amp; Evidence</a></li>
            <li><a href="#households-permissions" className="underline hover:opacity-80">Households &amp; Permissions</a></li>
            <li><a href="#staff-workflow" className="underline hover:opacity-80">Staff Workflow &amp; Surfacing</a></li>
            <li><a href="#sharing" className="underline hover:opacity-80">Sharing &amp; Collaboration</a></li>
            <li><a href="#mobile-capture" className="underline hover:opacity-80">Mobile Capture on the Floor</a></li>
            <li><a href="#automation" className="underline hover:opacity-80">Automation &amp; Safety Gates</a></li>
            <li><a href="#capacity" className="underline hover:opacity-80">Capacity, Ratios &amp; Profile Data</a></li>
            <li><a href="#client-experience" className="underline hover:opacity-80">Client Experience &amp; Trust</a></li>
            <li><a href="#multi-location" className="underline hover:opacity-80">Multi-Location &amp; Timezones</a></li>
            <li><a href="#privacy-security" className="underline hover:opacity-80">Privacy, Security &amp; Compliance</a></li>
            <li><a href="#interop" className="underline hover:opacity-80">Interoperability &amp; Exports</a></li>
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
              <li><strong>Comprehensive profiles</strong> reduce risk, speed up check-ins, and keep groups safe by making the right data visible at the right time.</li>
              <li><strong>Structured fields</strong> beat free-text: they power eligibility checks, capacity rules, and automation without guesswork.</li>
              <li><strong>Owner experience</strong> improves when forms remember prior answers, prefill pet details, and provide one-tap vaccine uploads.</li>
              <li><strong>Staff experience</strong> improves when profiles surface calm, relevant badges: INTact, meds, allergies, assessment, senior, or special handling.</li>
              <li><strong>Reporting &amp; KPIs</strong> become real when profile data is consistent: no-show rate by household, incident rate by group, utilization by profile mix.</li>
            </ul>
          </div>
        </section>

        {/* Why profiles matter */}
        <section id="why-profiles" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Why Profiles Matter for Boarding &amp; Daycare</h2>
          <p className="mb-4">
            A facility is a living system. Dogs arrive with different health histories, social preferences, feeding routines, and family expectations. Without a
            strong profile layer, staff fall back to sticky notes, memory, and ad-hoc texting. That is when preventable errors happen: missed meds, wrong food,
            unsafe groupings, or a booking that should have been routed to an assessment first. A comprehensive profile is not a form for the sake of admin; it is
            the <strong>operating manual</strong> for each dog and household that drives safer decisions in real time.
          </p>
          <p>
            For software buyers, profiles are the difference between a calendar that looks good and a system that <em>runs the place</em>. The right profile schema enables
            eligibility checks, auto-messages, shift planning, group ratio logic, audit trails, and calm handoffs across staff. You stop firefighting and start hosting.
          </p>
        </section>

        {/* What counts as comprehensive */}
        <section id="what-comprehensive" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">What Counts as Comprehensive (And What Does Not)</h2>
          <p className="mb-3">
            A comprehensive profile covers both <strong>the pet</strong> and <strong>the household</strong> with enough structure to power automation, yet enough flexibility to
            describe real-world nuance. A name, breed, and photo are not enough. A long free-text essay is not the answer either. The sweet spot is a hybrid:
            <em> structured fields for high-stakes items</em> and <em>compact notes</em> for the rest.
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Structured:</strong> vaccine expirations, waiver timestamps, spayed&#x2F;neutered, weight class, medications, food instructions, behavior flags, emergency contacts.</li>
            <li><strong>Flexible:</strong> situational triggers, preferred handling tips, special bedtime routine, enrichment likes, what to avoid.</li>
          </ul>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Petunia tip:</strong> If you cannot <em>filter</em> or <em>sort</em> by a field, it probably should not be a free-text blob. Promote it to a yes&#x2F;no, dropdown, or number.
          </div>
        </section>

        {/* Data model */}
        <section id="data-model" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Data Model &amp; Field Design: The Backbone</h2>
          <p className="mb-3">
            A clean schema keeps profiles fast, queryable, and safe to evolve. You need a canonical record for each pet and household, plus read-optimized
            shapes for daily operations. Think in <strong>layers</strong>: canonical → operational fan-outs → analytics.
          </p>
          <h3 className="text-lg font-semibold mt-2 mb-1">Suggested core fields (Pet)</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Identity: legal name, call name, photo, microchip&#x2F;tag (optional), breed or mix, sex, spayed&#x2F;neutered status, date of birth or age bracket.</li>
            <li>Size &amp; weight: last recorded weight, size class for ratios (small, medium, large, giant).</li>
            <li>Medical &amp; meds: conditions, medications with dosage&#x2F;timing, vet clinic, emergency vet.</li>
            <li>Feeding: food brand, quantity, frequency (breakfast&#x2F;lunch&#x2F;dinner), add-ons, prep notes, slow feeder needed, appetite flags.</li>
            <li>Allergies &amp; sensitivities: ingredients, environmental factors, severity, anaphylaxis history.</li>
            <li>Behavior: play style, dog selectivity, people comfort, thresholds, bite history (if any), handling tips.</li>
            <li>Grooming: coat type, matting risk, drying tolerance, nail sensitivity, previous injuries.</li>
            <li>Compliance: vaccine records with expiry, titer notes if accepted, waiver agreements with snapshot and timestamp.</li>
            <li>Special designations: isAssessment, senior, intact, medication-time windows, mobility support needed.</li>
          </ul>
          <h3 className="text-lg font-semibold mt-2 mb-1">Suggested core fields (Household)</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Primary owner: name, phone, email, preferred contact channel, consent to SMS&#x2F;email.</li>
            <li>Secondary contacts: partner, sitter, emergency contacts with pick-up authorization flags.</li>
            <li>Address &amp; travel notes: time zone context for reminders, frequent travel patterns.</li>
            <li>Payment &amp; policy: card on file, deposit preferences, cancellation tolerance, credit balances.</li>
            <li>Communication preferences: report card frequency, photo consent, marketing opt-ins.</li>
          </ul>
        </section>

        {/* Owner onboarding */}
        <section id="owner-onboarding" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Owner Onboarding UX: Reduce Friction Without Losing Fidelity</h2>
          <p className="mb-3">
            Many systems collect the right data in the wrong way: heavy forms, poor mobile behavior, and unclear error messages. Owners abandon or rush,
            leading to gaps that create risk later. The fix is simple: <strong>progressive disclosure</strong>, autosave, and smart defaults.
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Split onboarding into small steps: household → pet basics → health → behavior → media.</li>
            <li>Autosave every field; allow resume on any device without losing work.</li>
            <li>Prefill prior answers for new pets; mirror wording across app and web.</li>
            <li>Attach help text where confusion is likely: intact status, assessment logic, vaccine policy.</li>
            <li>Offer camera capture for documents with live crop and clarity hints.</li>
          </ul>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Petunia tip:</strong> Add a top-of-form estimate: &quot;This takes 3–5 minutes per pet.&quot; Owners pace better when expectations are clear.
          </div>
        </section>

        {/* Pet onboarding */}
        <section id="pet-onboarding" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Pet Onboarding UX: Capture the Signal, Skip the Noise</h2>
          <p className="mb-3">
            Good pet onboarding focuses on safety, daily care, and staff clarity. Resist the temptation to ask 200 questions on day one. Start with critical
            fields and allow owners to enrich over time. The software should nudge completion after the first successful stay, not before a relationship exists.
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Critical path: vaccines, waiver, meds, feeding, allergies, behavior flags, emergency contacts.</li>
            <li>Nice-to-have: enrichment preferences, bedtime routines, nicknames, training cues, favorite treats.</li>
            <li>Deferred capture: long behavior history, medical uploads beyond vaccines, multi-page groomer notes.</li>
          </ul>
        </section>

        {/* Vaccines, waivers */}
        <section id="vaccines-waivers" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Vaccines, Waivers &amp; Eligibility: Gate Safety Upfront</h2>
          <p className="mb-3">
            Vaccine and waiver fields do not belong to marketing or billing; they belong to safety. Profiles should link each vaccine entry to an <strong>expiry date</strong>,
            an <strong>image or PDF</strong>, and a <strong>review status</strong> (pending, approved, rejected with reason). Waivers should store the exact text agreed to and a
            timestamp. When policies change, the system prompts a one-tap re-agreement before a new booking proceeds.
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Block booking if required vaccines are missing or expired; offer upload and a friendly path to compliance.</li>
            <li>Honor regional differences in vaccine expectations; make the rules transparent inside the profile.</li>
            <li>Surface &quot;expiring soon&quot; badges on upcoming stays to prevent day-of surprises.</li>
          </ul>
        </section>

        {/* Meds, feeding, allergies */}
        <section id="meds-feeding-allergies" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Medications, Feeding &amp; Allergies: Fewer Mistakes, Happier Dogs</h2>
          <p className="mb-3">
            The most common, high-impact errors on busy days involve meds and meals. Profiles should make these <strong>unmissable</strong>. Use both a quick-glance card
            and a detailed view. Include dosage, route, schedule, and special handling (with-food, separate from other meds, temperature sensitivity).
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Feeding: brand, amount, measuring unit, meals per day, slow feeder, add-ins, speed warnings, special bowls.</li>
            <li>Allergies: common ingredients listed as exclusions; auto-warnings if a treat inventory contains a known allergen.</li>
            <li>Refusals: note patterns (skips first meal after arrival); suggest SOPs (hand-feed rule, quiet space).</li>
          </ul>
        </section>

        {/* Behavior */}
        <section id="behavior" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Behavior, Triggers &amp; Handling Notes: The Calm Multiplier</h2>
          <p className="mb-3">
            Behavior notes help staff set up success rather than react to preventable flare-ups. Keep this section structured enough to guide group placement
            while allowing nuance. Separate <strong>play style</strong> from <strong>risk flags</strong>: a high-energy chaser can be great with the right match yet unsuitable for timid groups.
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Play style: chaser, wrestler, hiker, toy-focused, gentle greeter, selective, not group-compatible.</li>
            <li>Social comfort: dogs, puppies, intact adults, humans, kids, strangers in hats, mobility aids.</li>
            <li>Handling tips: harness on crate, prefers side approach, treat before nails, hand target vs. collar reach.</li>
            <li>Triggers: fence-line arousal, door thresholds, resource guarding patterns; mitigation scripts.</li>
            <li>Assessment: flag isAssessment; restrict first booking to assessment slots with tighter ratios.</li>
          </ul>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Petunia tip:</strong> Convert your best handler scripts into quick-insert notes so staff reuse proven language rather than inventing new phrasing each time.
          </div>
        </section>

        {/* Grooming & health */}
        <section id="grooming-health" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Grooming, Health Flags &amp; Senior Needs</h2>
          <p className="mb-3">
            Boarding and daycare often intersect with grooming, nail trims, or bath add-ons. Profiles should hold grooming tolerance, matting risk, dryer
            sensitivity, and any prior injuries. For seniors, track mobility, stairs, incontinence patterns, and sleep routines. Staff can prep accommodations
            before arrival rather than scrambling at check-in.
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Grooming: coat type, brush frequency, dryer tolerance, clipper heat caution, ear cleaning products allowed.</li>
            <li>Senior profile: traction needs, ramp vs. stairs, joint meds timing, night walks, soft bedding requirement.</li>
          </ul>
        </section>

        {/* Files & media */}
        <section id="files-media" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Files, Media &amp; Evidence: Because Pictures Solve Arguments</h2>
          <p className="mb-3">
            When something is important, attach a file or photo. Vaccine records, a video of a gait issue, an image of a healing hotspot, a pre-existing chip
            in a kennel door that will be repaired later; photos save time and reduce friction with families. Profiles should make upload and preview effortless.
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Accept common formats: JPG, PNG, and PDF.</li>
            <li>Quick look previews on mobile and desktop; do not bury files under multiple taps.</li>
            <li>Link media to timeline events: assessment completed, behavior note updated, vet visit summary uploaded.</li>
          </ul>
        </section>

        {/* Households & permissions */}
        <section id="households-permissions" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Households &amp; Permissions: Who Can See, Book, and Pick Up</h2>
          <p className="mb-3">
            Real families are not single-user. Profiles should support multiple owners, sitters, or family members with different permissions: view only, book,
            pay, receive messages, or pick-up authorization. The pickup list should appear wherever a staff member checks a dog out.
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Roles per contact: owner, co-owner, sitter, emergency contact.</li>
            <li>Pickup authorization flags with photo ID capture if required by policy.</li>
            <li>Communication routing rules: who receives confirmations, report cards, and invoices.</li>
          </ul>
        </section>

        {/* Staff workflow */}
        <section id="staff-workflow" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Staff Workflow &amp; Surfacing: The Right Detail at the Right Time</h2>
          <p className="mb-3">
            The best profile is useless if staff cannot see it at the moment of decision. A good system surfaces badges on the live board and expands into
            details on tap. Morning shift sees meds due; midday sees feeding; yard lead sees behavior flags and group fit cues. Context switches disappear.
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Badges: INTact, meds, allergies, assessment, senior, behavior flag, feeding window, vaccine expiry.</li>
            <li>One-tap expanders: today&#39;s meds, next meal, special handling notes.</li>
            <li>Search: by dog, human, phone, email, partial name, or microchip.</li>
          </ul>
        </section>

        {/* Sharing & collaboration */}
        <section id="sharing" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Sharing &amp; Collaboration: Fewer Questions, Clear Expectations</h2>
          <p className="mb-3">
            Owners love transparency when it is simple. Share what matters: vaccine status, upcoming booking details, feeding plan, meds schedule, and
            any required actions. In return, owners should be able to update phone numbers, upload a new record, or confirm a change without calling.
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Owner portal: review profile, update fields, upload docs, confirm policies.</li>
            <li>Change audit: show what changed, when, and by whom.</li>
            <li>Two-way comments on a reservation timeline with photo attachments.</li>
          </ul>
        </section>

        {/* Mobile capture */}
        <section id="mobile-capture" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Mobile Capture on the Floor: Turn Reality Into Data</h2>
          <p className="mb-3">
            Most high-value profile updates happen on the move. Make it easy to add a quick note, snap a picture, or toggle a flag from a phone. Online and
            offline states should sync transparently so staff never wonder whether an update saved.
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Offline-first notes and photo queue; auto-sync on connection.</li>
            <li>Tap-to-toggle badges: fed, meds given, behavior note acknowledged.</li>
            <li>QR code on kennel cards for instant profile access.</li>
          </ul>
        </section>

        {/* Automation */}
        <section id="automation" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Automation &amp; Safety Gates: Profiles That Actually Do Work</h2>
          <p className="mb-3">
            Profiles should prevent mistakes by design. If a dog is intact and your policy restricts group placement, the system should enforce it at booking
            and at check-in. If a vaccine is expiring, reminders go out before the stay. If meds are due, task cards appear at the right time for the right staff role.
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Eligibility checks: vaccines, waiver, assessment, intact policy, breed or weight rules, behavior flags.</li>
            <li>Auto-messages: expiring vaccines, missing waiver, upcoming assessment instructions, &quot;thank you&quot; with next steps.</li>
            <li>Task engine: generate med tasks on schedule with double-sign if required by SOP.</li>
          </ul>
        </section>

        {/* Capacity */}
        <section id="capacity" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Capacity, Ratios &amp; Profile Data: Smarter Groups, Fewer Incidents</h2>
          <p className="mb-3">
            Profile data informs capacity beyond raw headcount. A day of seniors and meds takes different staffing than a day of young athletes. Use profile
            mix to plan shifts, group rotations, and enrichment blocks that keep arousal stable and joints healthy.
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Ratio planning by size class and behavior mix.</li>
            <li>Schedule flags: heavy meds mornings, puppy social hour, senior rest time, intact dog restrictions.</li>
            <li>Holiday adjustments: profile mix forecasting for peak periods.</li>
          </ul>
        </section>

        {/* Client experience */}
        <section id="client-experience" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Client Experience &amp; Trust: Profiles as a Brand Asset</h2>
          <p className="mb-3">
            Families return to places that remember the details: the slow feeder, the bedtime snack, the gentle greeting, the head-halti preference. Profiles
            make that memory scalable. When owners see accurate, respectful details reflected in confirmations and report cards, trust compounds.
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Accurate confirmations that echo feeding and meds.</li>
            <li>Report cards that reference profile goals: calm greetings, loose leash, rest between play bursts.</li>
            <li>Reduced re-entry friction: prefilled forms and one-tap policy confirms next time.</li>
          </ul>
        </section>

        {/* Multi-location & TZ */}
        <section id="multi-location" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Multi-Location &amp; Timezones (U.S., Canada, U.K., Ireland, Australia, New Zealand)</h2>
          <p className="mb-3">
            Profiles must travel with the family, not live only on one device or in one city. If your brand spans timezones, store timestamps in UTC and render
            in local time. Make holiday rules locale-aware, and avoid mixing policy text across regions without clear labeling.
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>UTC + local timezone on all writes; display in local time.</li>
            <li>Locale-aware vaccine expectations and waiver templates.</li>
            <li>Region-specific holidays and peak rules tied to the profile&#39;s home facility.</li>
          </ul>
        </section>

        {/* Privacy & security */}
        <section id="privacy-security" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Privacy, Security &amp; Compliance: Handle Data Like It Matters</h2>
          <p className="mb-3">
            Families trust you with sensitive information: addresses, travel dates, and health details. Treat profiles like valuables. Use role-based access
            control, encrypted transit and storage for sensitive fields, audit logs, and data-retention policies that match your legal environment.
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Role-based access: front desk, yard lead, groomer, manager; least privilege by default.</li>
            <li>Field-level protection for health documents; never email raw medical files without consent.</li>
            <li>Audit trails: who viewed, edited, exported; incident notes require sign-off.</li>
          </ul>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Petunia tip:</strong> Add a &quot;Download my data&quot; flow so households can export a clean copy of their profile on request.
          </div>
        </section>

        {/* Interoperability */}
        <section id="interop" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Interoperability &amp; Exports: No Hostage Data</h2>
          <p className="mb-3">
            The best systems play nicely with others. Profiles should export to CSV or JSON, with document packages for vaccines and waivers. Calendar and
            reservation data should join cleanly so an outside auditor or a migrating facility can read your data without guesswork.
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Standard field names and clear data dictionaries.</li>
            <li>Owner-consented share links for vets or partner groomers.</li>
            <li>Import tools that map common fields from legacy systems.</li>
          </ul>
        </section>

        {/* KPIs */}
        <section id="kpis" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">KPIs &amp; Reporting: Prove It Works</h2>
          <p className="mb-3">
            Profiles are only worth the work if they reduce incidents, save time, and improve satisfaction. Measure what matters and share results with your team.
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Incident rate</strong> per 100 dog-days, by group, before vs. after structured behavior fields.</li>
            <li><strong>Missed-med rate</strong> and <strong>late-meal rate</strong> before vs. after meds&#x2F;feeding badges.</li>
            <li><strong>Check-in time</strong> average and 90th percentile across busy weeks.</li>
            <li><strong>Owner update time</strong>: how fast households upload expiring vaccines after automated nudges.</li>
            <li><strong>Staff messages avoided</strong>: estimate by comparing pre- and post-launch manual message volume.</li>
          </ul>
        </section>

        {/* Blueprint */}
        <section id="blueprint" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Implementation Blueprint: MVP → Scale</h2>
          <h3 className="text-lg font-semibold mt-2 mb-1">Phase 1: MVP Profile Core (2–3 weeks)</h3>
          <ul className="list-disc pl-5 space-y-2 mb-3">
            <li>Define mandatory fields for booking eligibility: vaccines, waiver, meds, feeding, allergies, emergency contacts.</li>
            <li>Build mobile-first forms with autosave and resume; add camera capture for docs.</li>
            <li>Surface badges on live boards; enable one-tap expanders.</li>
          </ul>
          <h3 className="text-lg font-semibold mt-2 mb-1">Phase 2: Safety Gates &amp; Automations</h3>
          <ul className="list-disc pl-5 space-y-2 mb-3">
            <li>Eligibility checks at booking and check-in; clear error states with fix paths.</li>
            <li>Expiring vaccine reminders, waiver re-agree when text changes.</li>
            <li>Med task engine with scheduling and double-sign if required.</li>
          </ul>
          <h3 className="text-lg font-semibold mt-2 mb-1">Phase 3: Reporting, Exports &amp; Multi-Location</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Baseline KPIs for 30 days; compare after launch.</li>
            <li>CSV&#x2F;JSON export with data dictionary; import mappers from common legacy fields.</li>
            <li>UTC timestamping and locale-aware rendering for multi-region brands.</li>
          </ul>
        </section>

        {/* Migration */}
        <section id="migration" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Migration Plan: Turn Chaos Into Clarity</h2>
          <p className="mb-3">
            Most facilities already have some data in spreadsheets, scattered PDFs, and inbox threads. Do not boil the ocean. Start with a clean schema and
            a simple import, then enrich over time. Invite owners to verify details as part of their next booking.
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Map legacy columns to new fields; log any data that does not fit for later review.</li>
            <li>Bulk import households and pets; attach vaccine files where available.</li>
            <li>Send targeted emails asking owners to confirm meds, feeding, and handling notes before their upcoming stay.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">Frequently Asked Questions</h2>

          <p className="mb-3">
            <strong>Will comprehensive profiles slow down new client onboarding?</strong><br />
            Not if designed well. Use progressive steps, autosave, camera capture, and prefill for additional pets. Ask for the essentials today and enrich later.
          </p>

          <p className="mb-3">
            <strong>We already collect a lot of info in free-text notes. Why change?</strong><br />
            Free-text is hard to search, sort, and enforce. Structured fields power eligibility checks, ratios, reminders, and KPIs. Keep a compact notes section for nuance.
          </p>

          <p className="mb-3">
            <strong>Do owners mind uploading documents?</strong><br />
            If it is easy and clearly tied to booking success, most owners cooperate quickly. Automated reminders and in-form camera capture raise compliance rates.
          </p>

          <p className="mb-3">
            <strong>How do we keep staff from skipping updates on a busy day?</strong><br />
            Make updates one tap away on the live board. Reward completion during shift change and show how updates prevent real headaches tomorrow.
          </p>

          <p className="mb-3">
            <strong>Can profiles improve revenue, not just safety?</strong><br />
            Yes. Better profiles reduce friction that causes cancellations, enable paid late checkout with confidence, and let you sell the right add-ons to the right dogs.
          </p>

          <p className="text-xs text-gray-600">
            Educational content only. For legal language and data retention policies, consult your attorney and your regional regulations.
          </p>
        </section>

        {/* Sources */}
        <section id="sources" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">Further Reading</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            <li>
              Nielsen Norman Group. Mobile form design and error-prevention patterns.
              <a href="https://www.nngroup.com/" target="_blank" rel="noopener noreferrer"> NN&#x2F;g</a>
            </li>
            <li>
              Baymard Institute. Checkout UX and field validation best practices.
              <a href="https://baymard.com" target="_blank" rel="noopener noreferrer"> Baymard</a>
            </li>
            <li>
              W3C Web Content Accessibility Guidelines (WCAG) for accessible forms.
              <a href="https://www.w3.org/WAI/standards-guidelines/wcag/" target="_blank" rel="noopener noreferrer"> WCAG</a>
            </li>
            <li>
              Stripe Docs. Idempotent requests (relevant for profile-driven booking flows).
              <a href="https://stripe.com/docs/idempotency" target="_blank" rel="noopener noreferrer"> Stripe</a>
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
