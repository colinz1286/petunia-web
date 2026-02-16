'use client';

import Head from 'next/head';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function RealTimeReservationsOnlineBookingDogBoardingDaycareSoftware() {
  const locale = useLocale();

  const slug = 'realtime-reservations-online-booking-dog-boarding-daycare-software';
  const title =
    'Real-Time Reservations & Online Booking in Dog Boarding Software and Dog Daycare Software: A Practical Guide to Higher Occupancy, Fewer No-Shows, and Happier Clients';
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
    'Why real-time reservations and mobile-friendly online booking are the backbone of modern dog boarding software and dog daycare software. Learn how live availability, deposits, capacity logic, vaccine/waiver gates, and waitlists raise occupancy, cut admin time, and improve safety. Includes step-by-step implementation guidance, KPIs, and checklists.';

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
            <li><a href="#why-now" className="underline hover:opacity-80">Why This Matters Now</a></li>
            <li><a href="#what-realtime" className="underline hover:opacity-80">What Real-Time Actually Means</a></li>
            <li><a href="#online-booking" className="underline hover:opacity-80">Online Booking: Beyond a Web Form</a></li>
            <li><a href="#ops-math" className="underline hover:opacity-80">Operations Math &amp; Capacity</a></li>
            <li><a href="#safety-gates" className="underline hover:opacity-80">Safety Gates: Vaccines &amp; Waivers</a></li>
            <li><a href="#capacity-logic" className="underline hover:opacity-80">Capacity Logic: Daycare vs. Boarding</a></li>
            <li><a href="#deposits" className="underline hover:opacity-80">Deposits, No-Shows &amp; Cancellation Rules</a></li>
            <li><a href="#waitlists" className="underline hover:opacity-80">Waitlists &amp; Auto-Promotions</a></li>
            <li><a href="#staff-workflow" className="underline hover:opacity-80">Staff Workflow &amp; Alerts</a></li>
            <li><a href="#multi-site" className="underline hover:opacity-80">Multi-Location &amp; Timezones</a></li>
            <li><a href="#data-layer" className="underline hover:opacity-80">Data Layer: Model &amp; Sync</a></li>
            <li><a href="#reliability" className="underline hover:opacity-80">Reliability &amp; Anti-Double-Booking</a></li>
            <li><a href="#blueprint" className="underline hover:opacity-80">Implementation Blueprint (MVP → Scale)</a></li>
            <li><a href="#kpis" className="underline hover:opacity-80">KPIs &amp; Dashboard</a></li>
            <li><a href="#faq" className="underline hover:opacity-80">FAQ</a></li>
            <li><a href="#sources" className="underline hover:opacity-80">Further Reading</a></li>
          </ul>
        </nav>

        {/* TL;DR */}
        <section id="tldr" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Short Answer (TL;DR)</h2>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4">
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Real-time reservations</strong> prevent double-booking and eliminate stale calendars. The moment a slot is taken, every view updates.</li>
              <li><strong>Online booking</strong> means clients can self-serve 24&#x2F;7 on mobile, follow your rules, pay deposits, and instantly receive confirmations.</li>
              <li><strong>Capacity logic</strong> is different for daycare (headcount and ratios) vs. boarding (kennel-nights and turn days). Smart software understands both.</li>
              <li><strong>Safety gates</strong> (vaccine &amp; waiver checks) are enforced before money changes hands, which reduces manual back-and-forth and protects staff.</li>
              <li><strong>Revenue levers</strong>: deposits, late checkout, peak pricing, and waitlists increase occupancy and reduce no-shows without adding chaos.</li>
              <li><strong>Staff time</strong>: front desk messaging shrinks, the calendar cleans itself, and you earn back hours weekly.</li>
            </ul>
          </div>
        </section>

        {/* Why now */}
        <section id="why-now" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Why This Matters Now</h2>
          <p className="mb-4">
            If you operate a modern facility, you already feel the pinch: clients expect to book from their phone, confirm instantly, and manage stays without
            calling during business hours. In practical terms, <strong>dog boarding software</strong> and <strong>dog daycare software</strong> must deliver two things very well:
            <em> live availability</em> that cannot be double-booked, and <em>online booking</em> that is fast, safe, and aligned with your policies.
          </p>
          <p>
            Facilities that adopt both see the same pattern: fewer manual messages, cleaner calendars, more predictable occupancy, and less friction on
            vaccine and waiver compliance. The system becomes your teammate: it politely enforces your rules while still feeling convenient for owners.
          </p>
        </section>

        {/* What real-time means */}
        <section id="what-realtime" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">What Real-Time Actually Means (and What It Does Not)</h2>
          <p className="mb-3">
            Real-time is not a marketing adjective. It is a <strong>guarantee that availability reflects the current truth</strong> at the moment a client clicks &quot;Book.&quot; It
            requires atomic updates so two humans cannot claim the last large kennel at the same time. It means holds, deposits, cancellations, and waitlist
            promotions <em>propagate instantly</em> across web, mobile, and staff screens.
          </p>
          <ul className="list-disc pl-5 space-y-2 mb-3">
            <li><strong>Instant writes:</strong> a reservation deducts capacity immediately; every other user sees the change without refreshing.</li>
            <li><strong>Idempotency:</strong> repeated clicks or duplicate requests resolve to one booking, never two.</li>
            <li><strong>Conflict handling:</strong> if two parties race for the last spot, one succeeds; the other gets a clear message and a waitlist offer.</li>
            <li><strong>Consistent rules:</strong> grace windows, late checkout logic, and kennel-turn buffers are applied the same way for everyone, every time.</li>
          </ul>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Petunia tip:</strong> Treat <em>availability</em> as a first-class database object. Do not attempt &quot;calculate on the fly&quot; capacity exclusively. Maintain a
            lightweight, authoritative counter per day and per resource type (e.g., small kennel, large kennel, daycare spots), then reconcile nightly.
          </div>
        </section>

        {/* Online booking */}
        <section id="online-booking" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Online Booking: More Than a Web Form</h2>
          <p className="mb-3">
            Owners do not want to fill out a contact form and wait. They want to <strong>book a real reservation</strong> the same way they book a flight: pick dates,
            choose options, see price, pay deposit, and receive a confirmation instantly. The experience must be <strong>mobile-first</strong>, fast, and forgiving.
          </p>
          <h3 className="text-lg font-semibold mt-2 mb-1">Minimum viable booking flow</h3>
          <ol className="list-decimal pl-5 space-y-2 mb-3">
            <li>Client selects service (daycare or boarding) and preferred dates or days.</li>
            <li>Software checks <strong>live capacity</strong> and the client&#39;s <strong>vaccine &amp; waiver status</strong>.</li>
            <li>Policy gates fire (e.g., daycare assessment required, intact dog rules, peak-day limits).</li>
            <li>Price is shown with any addons (grooming, late checkout, holiday premium).</li>
            <li>Deposit or full prepayment is taken; client receives an <strong>instant confirmation</strong>.</li>
          </ol>
          <h3 className="text-lg font-semibold mt-2 mb-1">UX details that matter</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Clarity:</strong> show capacity status by day (green, yellow, red) and why a day is blocked.</li>
            <li><strong>Speed:</strong> minimize typing; pull pet data, vaccines, and preferences from the client profile.</li>
            <li><strong>Trust:</strong> a clear cancellation policy, deposit terms, and automatic receipts.</li>
            <li><strong>Accessibility:</strong> readable fonts, error messages that explain <em>exactly</em> what to fix, and keyboard-friendly inputs.</li>
          </ul>
        </section>

        {/* Operations math */}
        <section id="ops-math" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Operations Math: How Live Booking Improves Occupancy</h2>
          <p className="mb-3">
            Boarding revenue follows a simple skeleton: <code>kennel_nights_sold = kennels * nights_open * occupancy_rate</code>. Because price and kennels are
            relatively fixed in the short run, the fastest lever is <strong>occupancy</strong>. A real-time calendar with deposits and waitlists directly raises that rate by
            eliminating avoidable gaps and converting uncertain demand.
          </p>
          <h3 className="text-lg font-semibold mt-2 mb-1">Common leak points (and fixes)</h3>
          <ul className="list-disc pl-5 space-y-2 mb-3">
            <li><strong>Phantom availability:</strong> spreadsheet lag leads to double-booking, so staff over-block &quot;just in case&quot;. Real-time removes the need for safety padding.</li>
            <li><strong>Gaps at turn:</strong> unclear checkout rules create unusable half-days. Make late checkout a paid addon that preserves turnover buffers.</li>
            <li><strong>Pending requests:</strong> &quot;We will get back to you&quot; kills momentum. Instant confirmations lock revenue while rules are enforced automatically.</li>
          </ul>
          <p>
            Daycare math looks like <code>utilization = (attending_dogs ÷ daily_capacity)</code>. Online booking plus attendance controls (cutoff times,
            automatic reminders, and caps per weight group) pushes utilization up without bloating groups.
          </p>
        </section>

        {/* Safety gates */}
        <section id="safety-gates" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Safety &amp; Compliance Gates: Vaccines, Waivers, and Assessments</h2>
          <p className="mb-3">
            Real-time booking is only useful if it respects your safety policies. That is why <strong>gating</strong> must happen before checkout: the system checks
            vaccine expirations, waiver status, assessment flags, intact vs. spayed&#x2F;neutered rules, and any breed or behavior notes that affect eligibility.
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Vaccine checks:</strong> require current documents on file; show a friendly &quot;action needed&quot; step with upload links if anything is missing.</li>
            <li><strong>Waiver logic:</strong> if your waiver has been updated, prompt a one-tap re-agree that stores a new timestamp.</li>
            <li><strong>Assessment routing:</strong> new dogs are auto-routed to limited assessment slots; &quot;isAssessment: true&quot; tags follow the reservation everywhere.</li>
          </ul>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Petunia tip:</strong> Save an immutable record of the waiver text each client agreed to, plus the timestamp. If you change the waiver, require re-agreement
            once, not repeatedly. Your staff should never chase paperwork by hand.
          </div>
        </section>

        {/* Capacity logic */}
        <section id="capacity-logic" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Capacity Logic: Daycare vs. Boarding Are Not the Same</h2>
          <h3 className="text-lg font-semibold mt-2 mb-1">Daycare (headcount &amp; ratios)</h3>
          <ul className="list-disc pl-5 space-y-2 mb-3">
            <li>Set daily caps per group (small, medium, large) and optionally per staff shift to preserve ratios.</li>
            <li>Cutoff times and auto-closing rules avoid late-day pile-ups. Missed check-in windows can trigger waitlist promotion.</li>
            <li>Recurring days (e.g., Mon&#x2F;Wed&#x2F;Fri) should place &quot;soft holds&quot; that auto-renew but release if unpaid or unused.</li>
          </ul>
          <h3 className="text-lg font-semibold mt-2 mb-1">Boarding (kennel-nights with turn buffers)</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Model kennel types (small, standard, suite, conjoined). A reservation consumes <em>n</em> nights of a specific type.</li>
            <li>Checkout windows and cleaning buffers control same-day turnover. Late checkout converts to a paid addon with automatic capacity updates.</li>
            <li>Holidays and peak periods use separate caps or dynamic rules, not manual spreadsheets.</li>
          </ul>
        </section>

        {/* Deposits */}
        <section id="deposits" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Deposits, No-Shows, and Clear Cancellation Rules</h2>
          <p className="mb-3">
            Deposits align incentives. They reduce frivolous holds, stabilize your forecast, and make waitlists meaningful. Pair them with a <strong>plain-English</strong>
            cancellation policy and automatic receipts that restate the rules every time.
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Daycare:</strong> consider a small same-day deposit or a no-show fee triggered by non-check-in.</li>
            <li><strong>Boarding:</strong> tiered deposits by season; offer flexible credits for early cancellations during non-peak windows.</li>
            <li><strong>Assessments:</strong> a nominal fee prevents no-shows without scaring away good fits.</li>
          </ul>
        </section>

        {/* Waitlists */}
        <section id="waitlists" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Smart Waitlists &amp; Auto-Promotion</h2>
          <p className="mb-3">
            A live waitlist converts &quot;no&quot; into &quot;maybe&quot; and often into &quot;yes&quot;. When a spot frees up, the system offers it to the next eligible client automatically,
            with a short expiration timer. Promotions should update capacity immediately, not after a manual review.
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Let owners choose &quot;any kennel type&quot; or specify types they can accept.</li>
            <li>Send SMS&#x2F;email with a one-tap &quot;claim&quot; link that processes payment and finalizes the booking instantly.</li>
            <li>Record audit trails: who was offered, when, and the outcome for every step.</li>
          </ul>
        </section>

        {/* Staff workflow */}
        <section id="staff-workflow" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Staff Workflow &amp; Alerts: Calm Front Desk, Clear Yard</h2>
          <p className="mb-3">
            Real-time booking makes the calendar predictable. The front desk stops being a help desk and starts being a host: greet, check files, and move on.
            In the yard, shift leads see accurate headcounts by group and can plan rotations and rest cycles without guessing.
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Live boards:</strong> today&#39;s arrivals, departures, late checkouts, and assessments highlighted in one place.</li>
            <li><strong>Badges:</strong> &quot;isAssessment: true&quot;, &quot;INTACT&quot;, medication, feeding windows, and behavior notes surface wherever the dog appears.</li>
            <li><strong>Auto-messages:</strong> confirmations, reminders, &quot;upload vaccine&quot; nudges, and waitlist promotions send themselves.</li>
          </ul>
        </section>

        {/* Multi-site */}
        <section id="multi-site" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Multi-Location &amp; Timezones (US, Canada, UK, Ireland, Australia, New Zealand)</h2>
          <p className="mb-3">
            If you operate across timezones, your software must store timestamps in UTC and render in local time. Daylight saving transitions should never
            mangle check-in or checkout windows. Treat &quot;business day&quot; as a location-specific concept.
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>All writes carry a UTC timestamp plus the business&#39;s resolved timezone.</li>
            <li>Automations (e.g., overnight daycare auto-checkout) run per-location local time, not globally.</li>
            <li>Holiday calendars are locale-aware; peak rules differ by region.</li>
          </ul>
        </section>

        {/* Data layer */}
        <section id="data-layer" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Data Layer: A Practical Model That Stays Fast</h2>
          <p className="mb-3">
            You want the reliability of a canonical reservation record plus the <em>speed</em> of a per-dog live board. A common pattern is to write once to a durable
            store, then fan out to a fast, read-optimized structure for operational views.
          </p>
          <h3 className="text-lg font-semibold mt-2 mb-1">Suggested structure</h3>
          <ul className="list-disc pl-5 space-y-2 mb-3">
            <li><strong>Firestore (canonical):</strong> <code>businesses/{'{businessId}'}/reservations/{'{reservationId}'}</code> with all dogs on the reservation,
              pricing, deposits, waiver snapshot, and lifecycle events.</li>
            <li><strong>Realtime DB (operational fan-out):</strong> <code>upcomingReservations/{'{businessId}'}/{'{realtimeKey}'}-{'{petId}'}</code> so staff lists are instant.
              This mirrors the per-pet shape you already use, including fields such as <code>isAssessment</code>, medications, and spayed&#x2F;neutered flags.</li>
            <li><strong>Capacity counters:</strong> a small per-day document for boarding kennel types and daycare group caps. All booking writes adjust counters
              atomically.</li>
          </ul>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Petunia tip:</strong> Use idempotency keys when creating reservations so a double click or flaky network cannot create duplicates. On the fan-out,
            make the Cloud Function idempotent by reusing the same <code>realtimeKey</code>.
          </div>
        </section>

        {/* Reliability */}
        <section id="reliability" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Reliability &amp; Anti-Double-Booking</h2>
          <p className="mb-3">
            Nothing erodes trust faster than double-booking a run or overselling a daycare day. Prevent it with <strong>transactions, locks, and idempotent writes</strong>.
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Transaction or batch write:</strong> read the capacity doc, verify room exists, decrement, and write the reservation in one atomic step.</li>
            <li><strong>Idempotent reservation creation:</strong> the same client request key cannot create two reservations.</li>
            <li><strong>Single source of truth:</strong> operational replicas are derived; if they drift, a nightly reconcile wins with the canonical record.</li>
          </ul>
        </section>

        {/* Blueprint */}
        <section id="blueprint" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Implementation Blueprint: MVP → Scale</h2>
          <h3 className="text-lg font-semibold mt-2 mb-1">Phase 1: MVP (2–3 weeks of focused work)</h3>
          <ul className="list-disc pl-5 space-y-2 mb-3">
            <li>Define kennel types, daycare groups, and daily caps; create capacity docs for the next 365 days.</li>
            <li>Build booking UI for boarding and daycare: date picker, capacity colors, and addons (late checkout, grooming).</li>
            <li>Add vaccine&#x2F;waiver gating with clean error messages and upload flows.</li>
            <li>Take deposits or full payment; send confirmations with policy text.</li>
            <li>Fan-out to live operational lists per pet and per day.</li>
          </ul>
          <h3 className="text-lg font-semibold mt-2 mb-1">Phase 2: Reliability &amp; Waitlists</h3>
          <ul className="list-disc pl-5 space-y-2 mb-3">
            <li>Idempotency, transactions, and nightly reconcile.</li>
            <li>Waitlists with auto-promotion and expiring offers.</li>
            <li>Automated reminders and &quot;finish your booking&quot; nudges.</li>
          </ul>
          <h3 className="text-lg font-semibold mt-2 mb-1">Phase 3: Optimization</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Dynamic rules for holidays and peak periods.</li>
            <li>Recurring daycare patterns with capacity holds.</li>
            <li>Manager overrides with audit logs.</li>
          </ul>
        </section>

        {/* KPIs */}
        <section id="kpis" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">KPIs &amp; Dashboard: Know If It Worked</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Boarding occupancy:</strong> kennel-nights sold ÷ kennel-nights available (by type and overall).</li>
            <li><strong>Daycare utilization:</strong> dogs checked in ÷ day capacity (by group).</li>
            <li><strong>After-hours booking share:</strong> percent of reservations created outside front desk hours.</li>
            <li><strong>No-show rate:</strong> per service, before vs. after deposits.</li>
            <li><strong>Average lead time:</strong> days between booking and check-in.</            li>
            <li><strong>Waitlist conversion:</strong> promotions issued vs. claimed.</li>
            <li><strong>Front desk time saved:</strong> estimate messages and calls avoided per week.</li>
          </ul>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Petunia tip:</strong> Set a baseline for each KPI for 30 days, then measure for 30 days after launch. Share wins with your team and your clients.
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">Frequently Asked Questions</h2>

          <p className="mb-3">
            <strong>Is online booking the same as an online request?</strong><br />
            No. A request still needs staff to manually confirm. Real online booking writes a reservation instantly, enforces rules, and takes payment or a deposit.
          </p>

          <p className="mb-3">
            <strong>Will deposits scare clients away?</strong><br />
            With clear, fair rules and instant confirmations, most owners accept deposits as normal. You can keep deposits flexible on non-peak days to reduce friction.
          </p>

          <p className="mb-3">
            <strong>What about multi-dog households?</strong><br />
            Book them together on one reservation with per-dog fan-out for operations. Capacity decrements per kennel type must account for conjoined runs when needed.
          </p>

          <p className="mb-3">
            <strong>Can staff override capacity?</strong><br />
            Yes, if your policy allows. Require a manager role and log the override with a reason. Overrides should be rare and visible on reports.
          </p>

          <p className="mb-3">
            <strong>Is it hard to migrate?</strong><br />
            Start by opening online booking for a subset of services or days. Run old and new workflows in parallel for two weeks, then fully switch.
          </p>

          <p className="text-xs text-gray-600">
            Educational content only. For legal language in waivers, consult your attorney. For payment rules, consult your payment processor and accountant.
          </p>
        </section>

        {/* Sources */}
        <section id="sources" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">Further Reading</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            <li>
              Nielsen Norman Group. Form design and mobile usability best practices.
              <a href="https://www.nngroup.com/" target="_blank" rel="noopener noreferrer"> NN&#x2F;g</a>
            </li>
            <li>
              Baymard Institute. Checkout UX and validation patterns.
              <a href="https://baymard.com" target="_blank" rel="noopener noreferrer"> Baymard</a>
            </li>
            <li>
              Stripe Docs. Idempotent requests and payment flows.
              <a href="https://stripe.com/docs/idempotency" target="_blank" rel="noopener noreferrer"> Stripe</a>
            </li>
            <li>
              W3C Web Content Accessibility Guidelines (WCAG).
              <a href="https://www.w3.org/WAI/standards-guidelines/wcag/" target="_blank" rel="noopener noreferrer"> WCAG</a>
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
