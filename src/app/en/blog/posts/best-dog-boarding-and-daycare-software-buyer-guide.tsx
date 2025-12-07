'use client';

import Head from 'next/head';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function BestDogBoardingAndDaycareSoftwareBuyerGuide() {
  const locale = useLocale();

  // --- Metadata ---------------------------------------------------------------
  const title =
    'The Best Dog Boarding & Daycare Software? A No-Nonsense Buyer’s Guide (Frameworks, Checklists, Cost Math & Red Flags)';
  const date = 'August 24, 2025';
  const description =
    'Stop hunting for a top-10 list and start running a real evaluation. A complete, vendor-neutral playbook with feature checklists, TCO math, payment strategy trade-offs, data-portability, security, rollout plans, and negotiation tips.';
  const categories = ['boarding'] as const;

  // Category labels must match your existing site conventions
  const categoryLabels: Record<string, string> = {
    owner: 'Pet Owners',
    boarding: 'Boarding',
    daycare: 'Daycare',
    walker: 'Dog Walkers',
    sitter: 'Pet Sitters',
    rescue: 'Rescues',
    vet: 'Veterinary',
    software_buying: 'Software Buying Guides',
  };

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="robots" content="all" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
      </Head>

      <main className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-10">
        {/* Header */}
        <header className="mb-8">
          <p className="text-sm text-gray-600">{date}</p>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">
            {title}
          </h1>
          <div className="mt-3 flex flex-wrap items-center gap-2">
            {categories.map((c) => (
              <span
                key={c}
                className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700"
              >
                {categoryLabels[c] ?? c}
              </span>
            ))}
          </div>
          <p className="mt-4 text-lg text-gray-800">{description}</p>
        </header>

        {/* TLDR */}
        <section className="mb-10 rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
          <h2 className="text-xl font-semibold text-emerald-900">
            TL;DR — but seriously, read the math section
          </h2>
          <ul className="mt-3 list-disc pl-6 text-gray-800 space-y-2">
            <li>
              {'“Best” means best fit for your workflows at the lowest defensible total cost — not the product with the loudest ads.'}
            </li>
            <li>
              {'Start with a feature–fit audit (reservations, daycare flows, vaccine rules, feeding/meds, grooming add-ons, waivers, multi-location, staff tools, reporting).'}
            </li>
            <li>
              {'Run the TCO math (subscription + per-seat + SMS/email + storage + terminals + setup + your time + payment markups).'}
            </li>
            <li>
              {'Pick a payment strategy: embedded platform payments (often includes a markup) vs. a direct processor like Square or Stripe. Do the fee breakdown before you commit.'}
            </li>
            <li>
              {'Prioritize responsiveness: the best partner is the one who will ship what you need and evolve with your operation — quickly and safely.'}
            </li>
          </ul>
        </section>

        {/* Intro */}
        <section className="prose prose-gray max-w-none">
          <p>
            {`If you searched for “best dog boarding software” or “best dog daycare software,” you probably found splashy lists and comparison tables. This guide is different. It is a vendor-neutral framework you can use to pick the right platform for your team, your dogs, and your budget — today and a year from now. No rankings, no name-dropping, no hype. Just a battle-tested process that boarding and daycare owners can run in a week.`}
          </p>
          <p>
            {`You will get checklists, scorecards, email templates, and scenario tests you can copy-paste. You will also get honest cost math, including how payment strategies drive your total cost of ownership (TCO). The goal is not to crown a universal “best,” but to help you choose the best fit for your exact workflows at the lowest defensible price.`}
          </p>
        </section>

        {/* How to use this guide */}
        <section className="mt-10">
          <h2 className="text-2xl font-semibold">How to use this guide</h2>
          <ol className="mt-4 list-decimal pl-6 space-y-2 text-gray-800">
            <li>{`Skim the feature checklists and circle your must-haves vs. nice-to-haves.`}</li>
            <li>{`Run the TCO worksheet. Do not skip SMS, storage, setup time, or payment markups.`}</li>
            <li>{`Send the vendor email template to three platforms you already like. Track the speed and quality of their replies.`}</li>
            <li>{`Put real data into a sandbox or trial. Do a “Day-in-the-Life” test with your actual front-desk flows.`}</li>
            <li>{`Use the red-flag list while negotiating. If you see three or more, walk.`}</li>
          </ol>
        </section>

        {/* Principle */}
        <section className="mt-10">
          <h2 className="text-2xl font-semibold">The only principle that matters</h2>
          <p className="mt-2 text-gray-800">
            {`The “best” software is the one that fits your specific operation for the lowest defensible total cost, while giving you data ownership and a responsive partner. Everything else — features you will never use, flashy dashboards, or bundled add-ons that lock you in — is secondary.`}
          </p>
        </section>

        {/* Step 1 */}
        <section className="mt-10">
          <h2 className="text-2xl font-semibold">Step 1 — Map your operation</h2>
          <p className="mt-2 text-gray-800">
            {`Before you evaluate a single platform, map what you actually do. Your processes are the requirements; software is the implementation detail.`}
          </p>
          <ul className="mt-3 list-disc pl-6 space-y-2 text-gray-800">
            <li>{`Business profile: size (daily capacity, kennel runs, play-groups), services (boarding, daycare, grooming, training), single vs. multi-location.`}</li>
            <li>{`Client patterns: repeat daycare, seasonal boarding spikes, peak check-in windows, late pick-ups.`}</li>
            <li>{`Team: number of staff, roles, shift scheduling, permissions, mobile vs. desktop usage.`}</li>
            <li>{`Regulatory & health: vaccine rules, waiver language, incident logging, audit needs.`}</li>
            <li>{`Data sources: where your pets, owners, vaccinations, and waivers live today (spreadsheets, another app, paper).`}</li>
          </ul>
        </section>

        {/* Step 2 Feature checklist */}
        <section className="mt-10">
          <h2 className="text-2xl font-semibold">Step 2 — Feature-fit checklist</h2>
          <p className="mt-2 text-gray-800">
            {`Use this to eliminate platforms that cannot support your core workflows. Mark must-have, nice-to-have, or not needed.`}
          </p>
          <div className="mt-4 grid grid-cols-1 gap-6">
            <div className="rounded-xl border p-5">
              <h3 className="font-semibold text-gray-900">{`Reservations & capacity`}</h3>
              <ul className="mt-2 list-disc pl-6 text-gray-800 space-y-1">
                <li>{`Boarding reservations with room/run assignments; waitlist; black-out dates; holiday rules.`}</li>
                <li>{`Daycare recurring schedules; attendance caps by play-group; late pickup policies.`}</li>
                <li>{`Real-time availability; overbooking guardrails; double-entry prevention.`}</li>
              </ul>
            </div>

            <div className="rounded-xl border p-5">
              <h3 className="font-semibold text-gray-900">{`Health & policy enforcement`}</h3>
              <ul className="mt-2 list-disc pl-6 text-gray-800 space-y-1">
                <li>{`Vaccine requirements with expirations and alerts at booking & check-in.`}</li>
                <li>{`Waiver acknowledgment with versioning (re-agree when text changes).`}</li>
                <li>{`Medications & feeding schedules with per-meal notes and completion logs.`}</li>
              </ul>
            </div>

            <div className="rounded-xl border p-5">
              <h3 className="font-semibold text-gray-900">{`Behavior & group play`}</h3>
              <ul className="mt-2 list-disc pl-6 text-gray-800 space-y-1">
                <li>{`Temperament/assessment flags; handler suitability; bite/incident logs with follow-ups.`}</li>
                <li>{`Group play assignments; capacity per yard; intact status indicators.`}</li>
              </ul>
            </div>

            <div className="rounded-xl border p-5">
              <h3 className="font-semibold text-gray-900">{`Client experience`}</h3>
              <ul className="mt-2 list-disc pl-6 text-gray-800 space-y-1">
                <li>{`Owner portal (book, upload vaccines, sign waivers, pay, manage pets).`}</li>
                <li>{`Messaging (email/SMS/push); photo updates; confirmation & reminder automations.`}</li>
                <li>{`Transparent pricing, add-ons (grooming, enrichment), coupons, and packages.`}</li>
              </ul>
            </div>

            <div className="rounded-xl border p-5">
              <h3 className="font-semibold text-gray-900">{`Team operations`}</h3>
              <ul className="mt-2 list-disc pl-6 text-gray-800 space-y-1">
                <li>{`Role-based permissions; mobile-friendly workflows; offline resilience for busy mornings.`}</li>
                <li>{`Shift scheduling/timecards; task lists; handoff notes; audit trails.`}</li>
              </ul>
            </div>

            <div className="rounded-xl border p-5">
              <h3 className="font-semibold text-gray-900">{`Data & reporting`}</h3>
              <ul className="mt-2 list-disc pl-6 text-gray-800 space-y-1">
                <li>{`Export everything (pets, owners, reservations, transactions) in open formats (CSV/JSON).`}</li>
                <li>{`Revenue by service, occupancy, cancellations, grooming add-on attachment, meds/feeding completion.`}</li>
                <li>{`APIs or webhooks for custom dashboards; storage limits and retention policy.`}</li>
              </ul>
            </div>

            <div className="rounded-xl border p-5">
              <h3 className="font-semibold text-gray-900">{`Payments (choose your model)`}</h3>
              <ul className="mt-2 list-disc pl-6 text-gray-800 space-y-1">
                <li>{`Embedded platform payments (often convenient, may include added platform fees).`}</li>
                <li>{`Direct processor (e.g., Square/Stripe) that you manage independently.`}</li>
                <li>{`Deposits, tips, partial payments, refunds, chargeback support.`}</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Step 3 TCO */}
        <section className="mt-10">
          <h2 className="text-2xl font-semibold">Step 3 — Total cost of ownership (TCO) math</h2>
          <p className="mt-2 text-gray-800">
            {`TCO is your true cost after twelve months. Price tags rarely tell the full story. Use the worksheet below to avoid surprises.`}
          </p>

          <div className="mt-4 overflow-x-auto rounded-xl border bg-white">
            <table className="min-w-full text-left text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 font-semibold text-gray-700">Cost component</th>
                  <th className="px-4 py-3 font-semibold text-gray-700">Your estimate</th>
                  <th className="px-4 py-3 font-semibold text-gray-700">Notes</th>
                </tr>
              </thead>
              <tbody className="[&>tr:nth-child(even)]:bg-gray-50">
                <tr>
                  <td className="px-4 py-3">Base subscription (monthly x 12)</td>
                  <td className="px-4 py-3">__</td>
                  <td className="px-4 py-3">Tiers, per-location or per-pet pricing.</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Per-user or per-seat fees</td>
                  <td className="px-4 py-3">__</td>
                  <td className="px-4 py-3">Staff counts vary by season; check caps.</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Messaging (SMS/email)</td>
                  <td className="px-4 py-3">__</td>
                  <td className="px-4 py-3">Volume-based; confirmations & reminders add up.</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">File storage (vaccine images, waivers)</td>
                  <td className="px-4 py-3">__</td>
                  <td className="px-4 py-3">Check limits, overage fees, archival policy.</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Hardware/terminals/receipt printers</td>
                  <td className="px-4 py-3">__</td>
                  <td className="px-4 py-3">Front desk, yard tablets, thermal printers.</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Setup & data migration time</td>
                  <td className="px-4 py-3">__</td>
                  <td className="px-4 py-3">Your hours × your hourly value.</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Training/rollout (one-time)</td>
                  <td className="px-4 py-3">__</td>
                  <td className="px-4 py-3">Onboarding, SOP updates, cheat sheets.</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Payment processing fees</td>
                  <td className="px-4 py-3">__</td>
                  <td className="px-4 py-3">
                    {`Platform-embedded vs. direct processor. Include any “platform” markup above standard card rails.`}
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold">Estimated 12-month TCO</td>
                  <td className="px-4 py-3 font-semibold">__</td>
                  <td className="px-4 py-3">Compare across vendors with the same inputs.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-3 text-gray-700">
            {`Tip: wherever a vendor bundles costs, politely ask them to itemize. Bundles often hide volume-based charges or platform markups on payments.`}
          </p>
        </section>

        {/* Step 4 Payments */}
        <section className="mt-10">
          <h2 className="text-2xl font-semibold">Step 4 — Pick your payment strategy</h2>
          <p className="mt-2 text-gray-800">
            {`You have two practical choices: embedded payments in the platform, or a direct processor you manage (e.g., Square/Stripe) with transparent rates. Embedded payments are convenient; direct processors give you clearer control and portability. The right choice depends on your volume, refund patterns, tip handling, and whether a platform adds its own markup on top of card network fees.`}
          </p>
          <div className="mt-4 rounded-2xl border p-5">
            <h3 className="font-semibold text-gray-900">{`Payment math mini-worksheet`}</h3>
            <pre className="mt-3 whitespace-pre-wrap text-sm leading-6 text-gray-800">
              {`Monthly card volume: $__________
Average ticket size:  $__________
Refund %:             __________ %
Tips % of volume:     __________ %

Option A — Embedded platform:
  • Quoted effective rate (incl. platform markup): ____ %
  • Extra monthly platform fee tied to payments:  $____
  • Payout speed & chargeback support: __________

Option B — Direct processor (e.g., Square/Stripe):
  • Published processing rate(s): ____ %
  • Platform access fee (if any):  $____
  • Payout speed & chargeback support: __________

12-month cost delta = (A_total − B_total). Choose based on dollars + operational convenience.`}
            </pre>
          </div>
        </section>

        {/* Step 5 Data */}
        <section className="mt-10">
          <h2 className="text-2xl font-semibold">Step 5 — Data ownership & portability</h2>
          <p className="mt-2 text-gray-800">
            {`If you cannot export your data cleanly, you do not truly own it. Ask for sample exports and run them yourself before signing.`}
          </p>
          <ul className="mt-3 list-disc pl-6 space-y-2 text-gray-800">
            <li>{`Exports in open formats (CSV/JSON/PDF) for pets, owners, reservations, invoices, and waivers.`}</li>
            <li>{`API/webhooks for real-time syncs (optional but helpful for growth).`}</li>
            <li>{`Retention & deletion policy for owner requests; documented backups and restore times (RPO/RTO).`}</li>
          </ul>
        </section>

        {/* Step 6 Security */}
        <section className="mt-10">
          <h2 className="text-2xl font-semibold">Step 6 — Security, privacy, compliance</h2>
          <ul className="mt-3 list-disc pl-6 space-y-2 text-gray-800">
            <li>{`Encryption in transit and at rest; password standards; two-factor authentication; role-based access.`}</li>
            <li>{`Audit logs for sensitive actions; IP/location-based alerts for odd logins.`}</li>
            <li>{`Vendor’s data location, subprocessors, and incident response process.`}</li>
          </ul>
        </section>

        {/* Step 7 Reliability */}
        <section className="mt-10">
          <h2 className="text-2xl font-semibold">Step 7 — Uptime & reliability</h2>
          <p className="mt-2 text-gray-800">
            {`You do not need five-nines, but you do need a clear story for status, incidents, and recovery.`}
          </p>
          <ul className="mt-3 list-disc pl-6 space-y-2 text-gray-800">
            <li>{`Public status page with history; email/SMS incident communication.`}</li>
            <li>{`Disaster recovery targets (RPO/RTO) stated in plain language.`}</li>
            <li>{`Offline fallback for morning check-ins (printed rosters, local cache, or kiosk mode).`}</li>
          </ul>
        </section>

        {/* Step 8 Responsiveness */}
        <section className="mt-10">
          <h2 className="text-2xl font-semibold">Step 8 — Vendor responsiveness test</h2>
          <p className="mt-2 text-gray-800">
            {`The best long-term partner is responsive. Test this during evaluation — before you need help.`}
          </p>
          <ol className="mt-3 list-decimal pl-6 space-y-2 text-gray-800">
            <li>{`Send a detailed feature question. Measure first reply time and whether the answer includes a clear workaround or timeline.`}</li>
            <li>{`Ask for a small change or toggle that would materially help your team. See how they handle it.`}</li>
            <li>{`Ask for a sample data export and documentation. Time how long it takes to receive.`}</li>
          </ol>
        </section>

        {/* Step 9 Implementation */}
        <section className="mt-10">
          <h2 className="text-2xl font-semibold">Step 9 — Implementation & change management</h2>
          <p className="mt-2 text-gray-800">
            {`Most “software failures” are change management failures. Plan the rollout as carefully as you plan the purchase.`}
          </p>
          <div className="mt-4 rounded-2xl border p-5">
            <h3 className="font-semibold text-gray-900">30-day rollout template</h3>
            <pre className="mt-3 whitespace-pre-wrap text-sm leading-6 text-gray-800">
              {`Week 1 — Data & prep
• Export pets/owners/reservations from the old system.
• Normalize vaccines, waivers, file attachments.
• Load a sandbox with last 60 days of real bookings.

Week 2 — SOPs & training
• Rewrite desk SOPs with screenshots from the new tool.
• Create cheat sheets for check-in, meds/feeding, grooming add-ons.
• Run two mock check-in mornings and one mock pickup rush.

Week 3 — Dual-run
• Use the new system live while keeping the old one as read-only backup.
• Fix field mismatches; finalize reminder templates.

Week 4 — Go-live
• Freeze the old tool’s writes; do a final delta import.
• Announce go-live to owners; include portal logins and FAQ.
• Hold daily 10-minute huddles for the first week.`}
            </pre>
          </div>
        </section>

        {/* Step 10 Negotiation */}
        <section className="mt-10">
          <h2 className="text-2xl font-semibold">Step 10 — Negotiation & contracts</h2>
          <ul className="mt-3 list-disc pl-6 space-y-2 text-gray-800">
            <li>{`Avoid long auto-renew terms without price caps. Month-to-month or one-year with renewal notice is safer.`}</li>
            <li>{`Add a “no penalty for export” clause and a commitment to provide complete data within a set timeframe.`}</li>
            <li>{`Ask for written clarity on payment fees and who controls the processor relationship.`}</li>
            <li>{`If price is firm, negotiate implementation support, training sessions, or extra storage instead.`}</li>
          </ul>
        </section>

        {/* Scenario labs */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Scenario labs — how to score vendors</h2>
          <p className="mt-2 text-gray-800">
            {`Use weighted scorecards so you do not fall in love with a shiny feature that does not matter on Monday morning.`}
          </p>
          <div className="mt-4 overflow-x-auto rounded-xl border bg-white">
            <table className="min-w-full text-left text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 font-semibold text-gray-700">Category</th>
                  <th className="px-4 py-3 font-semibold text-gray-700">Weight</th>
                  <th className="px-4 py-3 font-semibold text-gray-700">Vendor A</th>
                  <th className="px-4 py-3 font-semibold text-gray-700">Vendor B</th>
                  <th className="px-4 py-3 font-semibold text-gray-700">Vendor C</th>
                </tr>
              </thead>
              <tbody className="[&>tr:nth-child(even)]:bg-gray-50">
                <tr>
                  <td className="px-4 py-3">Reservations & capacity</td>
                  <td className="px-4 py-3">25%</td>
                  <td className="px-4 py-3">__</td>
                  <td className="px-4 py-3">__</td>
                  <td className="px-4 py-3">__</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Health & policy enforcement</td>
                  <td className="px-4 py-3">20%</td>
                  <td className="px-4 py-3">__</td>
                  <td className="px-4 py-3">__</td>
                  <td className="px-4 py-3">__</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Payments & fees strategy</td>
                  <td className="px-4 py-3">15%</td>
                  <td className="px-4 py-3">__</td>
                  <td className="px-4 py-3">__</td>
                  <td className="px-4 py-3">__</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Team operations & UX</td>
                  <td className="px-4 py-3">15%</td>
                  <td className="px-4 py-3">__</td>
                  <td className="px-4 py-3">__</td>
                  <td className="px-4 py-3">__</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Data portability & reporting</td>
                  <td className="px-4 py-3">10%</td>
                  <td className="px-4 py-3">__</td>
                  <td className="px-4 py-3">__</td>
                  <td className="px-4 py-3">__</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Security & reliability</td>
                  <td className="px-4 py-3">10%</td>
                  <td className="px-4 py-3">__</td>
                  <td className="px-4 py-3">__</td>
                  <td className="px-4 py-3">__</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Vendor responsiveness</td>
                  <td className="px-4 py-3">5%</td>
                  <td className="px-4 py-3">__</td>
                  <td className="px-4 py-3">__</td>
                  <td className="px-4 py-3">__</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold">Weighted total</td>
                  <td className="px-4 py-3 font-semibold">100%</td>
                  <td className="px-4 py-3 font-semibold">__</td>
                  <td className="px-4 py-3 font-semibold">__</td>
                  <td className="px-4 py-3 font-semibold">__</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Templates */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Copy-paste templates</h2>

          <div className="mt-4 rounded-2xl border p-5">
            <h3 className="font-semibold text-gray-900">Vendor email (RFP-lite)</h3>
            <pre className="mt-3 whitespace-pre-wrap text-sm leading-6 text-gray-800">
              {`Subject: Quick questions before we trial your software

Hi Team,

We’re a [boarding/daycare/both] facility handling about [X] dogs per day with [Y] staff. Before we start a trial, could you please confirm:

1) Vaccine enforcement:
   • How do you block bookings or check-ins when a vaccine is expired?
   • Can owners upload files and can we require re-sign when waiver text changes?

2) Daycare/boarding capacity:
   • Can we cap per play-group and per time window?
   • Any guardrails against double-booking or duplicate entries?

3) Payments:
   • If we use your embedded payments, what is the effective all-in rate? Any platform markup?
   • If we use a direct processor (e.g., Square/Stripe), what changes in features?

4) Data & exports:
   • Can you provide sample CSV exports for pets, owners, reservations, and invoices?
   • What’s your data retention, backup policy, and typical restore time?

5) Support & roadmap:
   • Typical response time for support?
   • Recent features shipped in the last 3 months?

Thank you,
[Your Name]
[Business Name]`}
            </pre>
          </div>

          <div className="mt-6 rounded-2xl border p-5">
            <h3 className="font-semibold text-gray-900">TCO spreadsheet columns</h3>
            <pre className="mt-3 whitespace-pre-wrap text-sm leading-6 text-gray-800">
              {`vendor, base_monthly, seats_included, extra_seat_rate, sms_included, sms_overage_rate,
storage_included_gb, storage_overage_rate, setup_fee, training_hours, your_hourly_value,
hardware_costs, embedded_payment_effective_rate, direct_processor_rate, platform_payment_fee,
annual_contract_discount, total_12mo_tco`}
            </pre>
          </div>

          <div className="mt-6 rounded-2xl border p-5">
            <h3 className="font-semibold text-gray-900">Data-portability checklist</h3>
            <ul className="mt-3 list-disc pl-6 space-y-2 text-gray-800">
              <li>{`Exports for pets, owners, reservations, invoices, waivers (CSV/JSON/PDF).`}</li>
              <li>{`Field dictionary (what each column means); date/time zones documented.`}</li>
              <li>{`API/webhooks (optional) and sample script for a basic export.`}</li>
              <li>{`Written commitment: complete export provided within [7–14] days of request.`}</li>
            </ul>
          </div>

          <div className="mt-6 rounded-2xl border p-5">
            <h3 className="font-semibold text-gray-900">Staff training checklist</h3>
            <ul className="mt-3 list-disc pl-6 space-y-2 text-gray-800">
              <li>{`Front-desk: create reservation, enforce vaccines, explain portal, process payment.`}</li>
              <li>{`Back-of-house: feeding/meds completion, intact flags, play-group assignments.`}</li>
              <li>{`Grooming add-ons: pricing, per-dog selection, staff notes, tip capture.`}</li>
              <li>{`Incident logging: how to record and escalate with photos/documents.`}</li>
            </ul>
          </div>
        </section>

        {/* Red flags */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Red flags — three strikes, walk</h2>
          <ul className="mt-3 list-disc pl-6 space-y-2 text-gray-800">
            <li>{`Vague or missing data export capability; “we’ll help later” without a sample file.`}</li>
            <li>{`Payment rates you cannot verify, or fees that rise with no written caps.`}</li>
            <li>{`No public status page or incident history.`}</li>
            <li>{`Support replies that dodge specifics or skip timeframes.`}</li>
            <li>{`Long auto-renew with steep early termination penalties.`}</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold">FAQ — quick hits</h2>
          <h3 className="mt-4 text-lg font-semibold">When should we switch?</h3>
          <p className="mt-1 text-gray-800">
            {`When your current tool blocks a must-have workflow, your team spends hours on workarounds, or your cost per booking keeps climbing without clear value. Also: when you cannot export your data.`}
          </p>

          <h3 className="mt-4 text-lg font-semibold">Is embedded payments ever worth it?</h3>
          <p className="mt-1 text-gray-800">
            {`Yes — if the convenience is real, rates are transparent, and there is no hidden markup you could avoid with a direct processor. Run the 12-month cost delta with your numbers.`}
          </p>

          <h3 className="mt-4 text-lg font-semibold">What if we are tiny and growing?</h3>
          <p className="mt-1 text-gray-800">
            {`Pick a tool that handles today’s reality without forcing a rebuild in six months. Favor platforms that ship improvements quickly and have simple exports. Flexibility beats bloat.`}
          </p>
        </section>

        {/* Closing */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold">The real “best” software</h2>
          <p className="mt-2 text-gray-800">
            {`It is the one that enforces your vaccine rules at booking, keeps mornings calm at the desk, makes feeding and meds unmissable, and does not punish you with opaque fees. It lets you leave with your data tomorrow and says yes to reasonable requests. That is what “best” looks like — not a badge on a website.`}
          </p>
          <p className="mt-3 text-gray-800">
            {`Use this framework, run the math, test responsiveness, and pick the partner that fits your workflows at the lowest defensible cost. Your team — and the dogs — will feel the difference immediately.`}
          </p>
        </section>

        {/* References placeholder */}
        <section className="mt-12 border-t pt-8">
          <h2 className="text-2xl font-semibold">References & further reading</h2>
          <p className="mt-2 text-gray-700">
            {`Add your professional citations and resources here (payment industry primers, small-business software TCO guides, data-portability best practices).`}
          </p>
        </section>

        {/* Back link */}
        <div className="mt-12">
          <Link
            href={`/${locale}/blog`}
            className="inline-flex items-center rounded-lg bg-emerald-600 px-4 py-2 text-white hover:bg-emerald-700"
          >
            Back to Blog
          </Link>
        </div>
      </main>
    </>
  );
}
