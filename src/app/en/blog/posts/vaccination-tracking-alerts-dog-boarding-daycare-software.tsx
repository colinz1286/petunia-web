'use client';

import Head from 'next/head';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function VaccinationTrackingAlertsForBoardingAndDaycare() {
  const locale = useLocale();

  // --- Metadata ---------------------------------------------------------------
  const title =
    'Vaccination Tracking & Alerts for Dog Boarding & Dog Daycare Software: Safety, Compliance, Automation & Real-World ROI';
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

  const description =
    'Why vaccination tracking and automated alerts are mission-critical in dog boarding & dog daycare software. Learn core vs non-core vaccines, regional nuances, airtight policy design, booking-flow enforcement, owner uploads, audit-ready reporting, and the KPIs that move occupancy, safety, and trust.';

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
            <li><a href="#vaccine-basics" className="underline hover:opacity-80">Vaccine Basics</a></li>
            <li><a href="#policy" className="underline hover:opacity-80">Policy &amp; Regional Nuance</a></li>
            <li><a href="#data-model" className="underline hover:opacity-80">Data Model &amp; Source of Truth</a></li>
            <li><a href="#alerts-automation" className="underline hover:opacity-80">Alerts &amp; Automation</a></li>
            <li><a href="#uploads-verification" className="underline hover:opacity-80">Owner Uploads &amp; Verification</a></li>
            <li><a href="#booking-enforcement" className="underline hover:opacity-80">Booking-Flow Enforcement</a></li>
            <li><a href="#operations" className="underline hover:opacity-80">Daycare vs Boarding Operations</a></li>
            <li><a href="#edge-cases" className="underline hover:opacity-80">Edge Cases &amp; Exceptions</a></li>
            <li><a href="#reporting" className="underline hover:opacity-80">Reporting &amp; Audits</a></li>
            <li><a href="#kpis" className="underline hover:opacity-80">KPIs &amp; ROI</a></li>
            <li><a href="#faq" className="underline hover:opacity-80">FAQ</a></li>
            <li><a href="#sources" className="underline hover:opacity-80">Sources (Selected)</a></li>
          </ul>
        </nav>

        {/* TL;DR */}
        <section id="tldr" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Short Answer (TL;DR)</h2>
          <p className="mb-4">
            Vaccination tracking with proactive alerts is not a nice-to-have feature in dog boarding &amp; dog daycare software—it is the backbone of safe intake, outbreak prevention, and audit-ready operations. The right system centralizes vaccine records, standardizes policy rules, blocks risky bookings automatically, and nudges owners long before expirations. Facilities that implement this well see fewer last-minute cancellations, smoother check-ins, stronger client trust, and better occupancy because the calendar is not derailed by preventable compliance gaps.
          </p>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Petunia tip:</strong> Tie alerts to <em>events</em> (expiration windows, bookings, waitlists) and <em>people</em> (primary owner, secondary contact). Send a friendly nudge at 30/14/7 days pre-expiry and a final reminder 72 hours before the reservation window closes. Friendly automation prevents tense front-desk conversations.
          </div>
        </section>

        {/* Why It Matters */}
        <section id="why" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Why Vaccination Tracking Matters for Boarding &amp; Daycare</h2>
          <p className="mb-3">
            Every facility lives at the intersection of three realities: biology, regulation, and customer service. Infectious disease does not care about your Friday capacity; a single gap—one unverified Bordetella or lapsed DHPP—can force quarantines, refunds, and review-site headaches. At the same time, most owners are not trying to skirt rules; they simply forget, misremember dates, or assume their vet will fax something &quot;on time.&quot; Software bridges this gap by making the right thing the easy thing: clear requirements, smooth uploads, one source of truth, and polite nudges before compliance becomes an emergency.
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Health &amp; safety:</strong> Reduce the likelihood and scale of outbreaks by keeping immunity status current across the population.</li>
            <li><strong>Compliance:</strong> Many jurisdictions and partners expect proof of core vaccines; clean logs protect your license and reputation.</li>
            <li><strong>Operational flow:</strong> Avoid day-of surprises, bottlenecks at check-in, and labor spent chasing paperwork.</li>
            <li><strong>Trust &amp; marketing:</strong> &quot;We verify vaccines for every dog&quot; is a powerful promise. Back it with automation.</li>
          </ul>
        </section>

        {/* Vaccine Basics */}
        <section id="vaccine-basics" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Vaccine Basics: Core vs Non-Core (High-Level)</h2>
          <p className="mb-3">
            Terminology and timing vary by country, veterinary body, and individual risk profile. In broad strokes, facilities commonly require:
          </p>
          <ul className="list-disc pl-5 space-y-2 mb-3">
            <li><strong>Core</strong> (examples): DHPP/DA2PP (distemper, adenovirus/hepatitis, parvovirus ± parainfluenza), and rabies per local law.</li>
            <li><strong>Non-core but frequently required by facilities:</strong> Bordetella (kennel cough) and, increasingly, canine influenza in certain regions or during outbreaks.</li>
          </ul>
          <p className="mb-3">
            Schedules differ (1-year vs 3-year rabies protocols, intranasal vs injectable Bordetella with different booster windows, local influenza requirements). A good software system does not hard-code global rules; it stores <em>your</em> policy, adds regional toggles, and keeps proof on file for each dog.
          </p>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Petunia tip:</strong> Model each vaccine as its own object with fields like <code>name</code>, <code>required</code>, <code>minDaysBeforeBooking</code>, <code>graceDays</code>, <code>renewalCycle</code> (e.g., 1y, 3y, 6m), <code>proofFiles</code>, <code>verifiedBy</code>, <code>verifiedAt</code>. This supports precise enforcement and clean audits.
          </div>
        </section>

        {/* Policy */}
        <section id="policy" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Policy Design &amp; Regional Nuance</h2>
          <p className="mb-3">
            You want a policy that is medically sensible, operationally realistic, and easy to communicate. Because your clientele may span cities or border areas, build in regional nuance rather than endless exceptions at the front desk.
          </p>
          <h3 className="text-lg font-semibold mt-2 mb-1">Decisions to make up front</h3>
          <ul className="list-disc pl-5 space-y-2 mb-3">
            <li><strong>Which vaccines are required for daycare vs boarding?</strong> Many facilities require Bordetella for group play but not for a quiet overnight &quot;solo&quot; option.</li>
            <li><strong>Lead times:</strong> Will you accept a Bordetella dose given &lt; 72 hours before arrival? Some vets advise a brief window before group exposure.</li>
            <li><strong>Grace periods:</strong> Will you allow a 7-day grace if a renewal appointment is booked? Software can enforce a short, documented window.</li>
            <li><strong>Proof standards:</strong> PDF from the clinic portal? Photo of invoice? Upload + staff verification covers 95% of cases quickly.</li>
          </ul>
          <h3 className="text-lg font-semibold mt-2 mb-1">Country &amp; jurisdiction notes</h3>
          <p className="mb-3">
            Requirements around rabies and record retention differ across the United States, Canada, the United Kingdom, Ireland, Australia, and New Zealand. Rather than pretend there is a universal law, your software should let you toggle jurisdictional settings per facility location (e.g., &quot;3-year rabies accepted&quot; vs &quot;1-year only,&quot; &quot;influenza required during regional alert&quot;). Save the setting itself so you can later justify why a dog was allowed or blocked on that date.
          </p>
        </section>

        {/* Data Model */}
        <section id="data-model" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Data Model: One Source of Truth</h2>
          <p className="mb-3">
            Vaccine status should live with the dog, not inside scattered screenshots or per-reservation notes. When you centralize data by dog, every workflow—booking, check-in, grooming add-ons, staff views—reads from the same object and you avoid contradictions.
          </p>
          <ul className="list-disc pl-5 space-y-2 mb-3">
            <li><strong>Dog profile object:</strong> species, DOB/age, sex/spay-neuter, allergies, meds, <em>vaccines[]</em> (array of vaccine objects), owner IDs, and flags (e.g., senior, medical hold).</li>
            <li><strong>Vaccine object:</strong> <code>type</code> (e.g., DHPP), <code>lastDoseAt</code>, <code>expiresAt</code>, <code>renewalCycle</code>, <code>proofFiles[]</code>, <code>verified</code> boolean, <code>verifiedBy</code>, <code>verifiedAt</code>.</li>
            <li><strong>Policy object:</strong> versioned policy with required vaccines by service type, lead-time rules, grace days, and per-locale overrides.</li>
          </ul>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Petunia tip:</strong> Version your vaccine policy. When rules change (e.g., temporary influenza requirement), store <code>policyVersion</code> on each booking. That way, your audit can prove the dog met the rule <em>that applied on that date</em>.
          </div>
        </section>

        {/* Alerts & Automation */}
        <section id="alerts-automation" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Alerts &amp; Automation: Nudge Early, Block Late</h2>
          <p className="mb-3">
            The best alert system does two things: it prevents surprises and it prevents manual work. Owners should receive helpful nudges long before expiration; staff should only see true exceptions.
          </p>
          <h3 className="text-lg font-semibold mt-2 mb-1">Suggested timeline</h3>
          <ul className="list-disc pl-5 space-y-2 mb-3">
            <li><strong>45–30 days before expiry:</strong> Email + SMS nudge with upload link; mention local clinics if helpful.</li>
            <li><strong>14 days:</strong> Reminder with &quot;book a quick booster&quot; language. If a reservation exists inside the risk window, highlight it.</li>
            <li><strong>7 days:</strong> Clear subject line: &quot;Your dog&#39;s {`{VACCINE}` } expires soon—upload to keep your spot.&quot;</li>
            <li><strong>72–48 hours:</strong> Final reminder and soft block: &quot;Upload required for check-in.&quot;</li>
          </ul>
          <h3 className="text-lg font-semibold mt-2 mb-1">Escalation logic</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Soft block:</strong> Booking allowed but marked &quot;needs vaccine before arrival&quot; with persistent banner to the owner.</li>
            <li><strong>Hard block:</strong> Booking prevented for that service type until verified proof is on file, unless a manager override is applied.</li>
            <li><strong>Waitlist preference:</strong> When space is tight, prioritize dogs with fully verified records.</li>
          </ul>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm mt-3">
            <strong>Petunia tip:</strong> Alerts should be <em>idempotent</em>. If three proofs are uploaded, do not keep sending &quot;missing&quot; emails. Recalculate status on every upload and mute alerts automatically.
          </div>
        </section>

        {/* Uploads & Verification */}
        <section id="uploads-verification" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Owner Uploads &amp; Verification Without Friction</h2>
          <p className="mb-3">
            Make success the default. Owners should be able to snap a photo of the vaccine record or upload a PDF in two taps. The system should immediately parse the document fields they provide and pre-fill dates for staff to confirm.
          </p>
          <ul className="list-disc pl-5 space-y-2 mb-3">
            <li><strong>Accepted formats:</strong> PDF, PNG, JPG/JPEG. Surface guidance: &quot;Please include clinic name, vaccine, and date.&quot;</li>
            <li><strong>Auto-parse assists:</strong> Let owners type dates as text if OCR is imperfect. Staff sees the file side-by-side with parsed fields for one-click verify.</li>
            <li><strong>Verification trail:</strong> Store <code>verifiedBy</code>, <code>verifiedAt</code>, and an optional note (e.g., &quot;Clinic confirmed by phone&quot;).</li>
            <li><strong>Privacy:</strong> Limit access to need-to-know roles and log every admin view for your own governance.</li>
          </ul>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Petunia tip:</strong> After successful verification, send a &quot;You&#39;re all set&quot; message with the next due date and &quot;Add to calendar&quot; link. Owners love clear finish lines.
          </div>
        </section>

        {/* Booking Enforcement */}
        <section id="booking-enforcement" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Booking-Flow Enforcement that Feels Helpful (Not Punitive)</h2>
          <p className="mb-3">
            Enforcement works best when it is predictable and friendly. Communicate the rule, explain why it exists, and offer the shortest path to compliance right in the UI.
          </p>
          <ol className="list-decimal pl-5 space-y-2 mb-3">
            <li><strong>Pre-check:</strong> When an owner picks dates, the system runs a quick vaccine check for each selected dog.</li>
            <li><strong>Inline guidance:</strong> If something is missing, show exactly which vaccine and a button to upload or mark an upcoming vet appointment.</li>
            <li><strong>Conditional proceed:</strong> For daycare, you might allow a booking with a soft block if the appointment is 14+ days out and reminders are scheduled.</li>
            <li><strong>Manager override:</strong> Log the override with reason codes (e.g., medical exemption, titers accepted).</li>
          </ol>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Petunia tip:</strong> Show a subtle &quot;Verified Vaccines&quot; checkmark on the final confirmation screen. It reinforces value and reduces day-of arguments.
          </div>
        </section>

        {/* Operations */}
        <section id="operations" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Operational Differences: Daycare vs Boarding</h2>
          <h3 className="text-lg font-semibold mt-2 mb-1">Daycare</h3>
          <p className="mb-3">
            Group dynamics mean respiratory pathogens can spread quickly. Many facilities require Bordetella and keep a tighter renewal cadence. Because daycare is a higher-frequency service, automate renewals relentlessly—owners appreciate not having to &quot;remember the basics&quot; every month.
          </p>
          <h3 className="text-lg font-semibold mt-2 mb-1">Boarding</h3>
          <p className="mb-3">
            Stays are longer and arrivals are more deadline-driven (flights, weddings, holidays). Your alert logic should weight upcoming reservations more heavily and escalate sooner if a record is missing. Offer a &quot;Send to clinic&quot; request so the owner can authorize the vet to email proof directly to you.
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Holiday windows:</strong> Add a &quot;peak period&quot; layer that requires stricter enforcement (hard blocks &gt; soft blocks).</li>
            <li><strong>Multiple dogs:</strong> Check all selected dogs; do not allow one compliant sibling to mask a gap for another.</li>
          </ul>
        </section>

        {/* Edge Cases */}
        <section id="edge-cases" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Edge Cases &amp; Thoughtful Exceptions</h2>
          <ul className="list-disc pl-5 space-y-2 mb-3">
            <li><strong>Titers:</strong> Some facilities accept antibody titers for certain vaccines. If you allow this, store <code>titerType</code>, <code>lab</code>, <code>collectedAt</code>, <code>expiresAt</code>, and attach the lab report.</li>
            <li><strong>Medical exemptions:</strong> Seniors or dogs with specific conditions may have vet letters recommending a modified protocol. Support a secure &quot;medical hold&quot; with an expiry date and manager approval.</li>
            <li><strong>Regional outbreaks:</strong> Temporarily require influenza during a local alert and attach a <code>startAt</code>/<code>endAt</code> on the policy toggle so the rule sunsets automatically.</li>
            <li><strong>Adoptions/rescues:</strong> Newly adopted dogs may arrive mid-series. Allow a structured intake plan with dates for upcoming boosters and a temporary soft block for low-risk services.</li>
          </ul>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Petunia tip:</strong> Owners respond best to clarity and kindness. Templates like &quot;Here&#39;s what we need and by when&quot; turn edge cases into smooth action plans.
          </div>
        </section>

        {/* Reporting */}
        <section id="reporting" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Reporting, Audits &amp; Peace of Mind</h2>
          <p className="mb-3">
            When someone asks &quot;How do you know the dogs here are vaccinated?&quot; you want to answer with one screenshot and a smile. Good reporting does not just show compliance—it speeds decisions.
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Roster view:</strong> Today&#39;s arrivals with a green/yellow/red badge per dog and vaccine.</li>
            <li><strong>Expiring soon:</strong> 45/30/14/7-day pipelines with outreach status and last message sent.</li>
            <li><strong>Exceptions log:</strong> Overrides with reasons and who approved them.</li>
            <li><strong>Outbreak response:</strong> Filter by last visit date and contact owners in one pass with a prewritten safety email.</li>
          </ul>
        </section>

        {/* KPIs */}
        <section id="kpis" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">KPIs &amp; ROI: What to Measure</h2>
          <ul className="list-disc pl-5 space-y-2 mb-3">
            <li><strong>Compliance rate:</strong> % of active clients with fully verified, current vaccines (goal: &gt; 95%).</li>
            <li><strong>Lead-time compliance:</strong> % of vaccine renewals completed &ge; X days before reservation (goal: &gt; 80% at 7+ days).</li>
            <li><strong>Staff minutes saved:</strong> Average time to verify/upload vs previous baseline; track after introducing owner self-service.</li>
            <li><strong>Cancellation reduction:</strong> Fewer day-of cancellations due to missing records compared to last quarter.</li>
            <li><strong>Alert effectiveness:</strong> Open/click rates and &quot;updated within 48h&quot; after each reminder wave.</li>
          </ul>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Petunia tip:</strong> Share an anonymized &quot;Compliance Champion&quot; badge in your monthly owner newsletter. Positive social proof lifts participation.
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">Frequently Asked Questions</h2>
          <p className="mb-3">
            <strong>Do we need different rules for daycare vs boarding?</strong><br />
            Often yes. Many facilities require Bordetella for daycare group play and may set different lead-time rules for boarding arrivals. Software lets you separate policies by service type so staff do not juggle exceptions.
          </p>
          <p className="mb-3">
            <strong>What if an owner cannot find their records?</strong><br />
            Offer a &quot;Send request to clinic&quot; button in the portal. With the owner&#39;s authorization, you can receive the PDF directly and verify it in one click.
          </p>
          <p className="mb-3">
            <strong>Will strict enforcement hurt occupancy?</strong><br />
            In practice, predictable rules and early nudges <em>improve</em> occupancy. Cancellations drop, owners plan ahead, and your brand signals professionalism.
          </p>
          <p className="mb-3">
            <strong>How do we handle medical exemptions?</strong><br />
            Require a vet letter with an expiry date, store it on the dog profile, and restrict the dog from high-risk services if needed. Log every override with reason codes.
          </p>
          <p className="mb-3">
            <strong>Do we need to accept titers?</strong><br />
            That is a policy decision. If you allow titers, document standards clearly and store lab reports with a defined review cycle.
          </p>
          <p className="text-xs text-gray-600">
            Educational content only. Always consult your veterinarian for individualized guidance and follow your local regulations.
          </p>
        </section>

        {/* Sources */}
        <section id="sources" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">📚 Sources (Selected)</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            <li>
              American Animal Hospital Association (AAHA). Canine vaccination and life stage guidelines.
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
              World Small Animal Veterinary Association (WSAVA). Vaccination Guidelines.
              <a
                href="https://wsava.org/Global-Guidelines/Vaccination-Guidelines/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline ml-1"
              >
                WSAVA
              </a>
            </li>
            <li>
              AVMA client education resources on vaccines and preventive care.
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
              Merck Veterinary Manual (professional &amp; consumer portals) on core/non-core vaccines and infectious disease overviews.
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
