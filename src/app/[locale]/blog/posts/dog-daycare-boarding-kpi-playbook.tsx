// File: src/app/blog/posts/dog-daycare-boarding-kpi-playbook.tsx
'use client';

import Head from 'next/head';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function DogDaycareBoardingKPIPlaybook() {
    const locale = useLocale();

    const title = 'The Definitive KPI Playbook for Dog Daycare & Boarding (2025 Edition)';
    const date = 'May 1, 2025';
    const categories = ['boarding']; // focused audience
    const categoryLabels: Record<string, string> = {
        boarding: 'Boarding & Daycare',
        sitter: 'Pet Sitters',
        walker: 'Dog Walkers',
        rescue: 'Rescues',
        vet: 'Veterinary Clinics',
        owner: 'Pet Owners',
    };

    const description =
        'An operator-grade, numbers-first guide for dog daycare and boarding businesses. Formulas, benchmarks, dashboards, capacity math, labor efficiency, safety and compliance, pricing effects, and a 90-day turnaround plan.';

    return (
        <>
            <Head>
                <title>{title} – Petunia Blog</title>
                <meta name="description" content={description} />
            </Head>

            <main className="max-w-3xl mx-auto px-4 py-10 text-[#2c4a30]">
                <p className="text-sm text-gray-500 mb-2">Posted on {date}</p>
                <h1 className="text-3xl font-bold mb-4">{title}</h1>

                <div className="flex flex-wrap gap-2 mb-6">
                    {categories.map((key) => (
                        <span
                            key={key}
                            className="text-xs bg-[#e4dbcb] text-[#2c4a30] px-3 py-1 rounded-full border border-[#d9cfc2]"
                        >
                            {categoryLabels[key]}
                        </span>
                    ))}
                </div>

                {/* Local anchor nav for long-form reading */}
                <nav className="mb-10 text-sm">
                    <ul className="flex flex-wrap gap-3">
                        <li><a href="#why-this-playbook" className="underline hover:opacity-80">Why This Playbook</a></li>
                        <li><a href="#quick-start" className="underline hover:opacity-80">Quick‑Start KPIs</a></li>
                        <li><a href="#instrumentation" className="underline hover:opacity-80">Instrumentation</a></li>
                        <li><a href="#capacity-utilization" className="underline hover:opacity-80">Capacity & Utilization</a></li>
                        <li><a href="#revenue-quality" className="underline hover:opacity-80">Revenue Quality</a></li>
                        <li><a href="#pipeline" className="underline hover:opacity-80">Demand & Pipeline</a></li>
                        <li><a href="#ltv" className="underline hover:opacity-80">LTV & Payback</a></li>
                        <li><a href="#no-shows" className="underline hover:opacity-80">No‑Shows & Cancels</a></li>
                        <li><a href="#labor" className="underline hover:opacity-80">Labor Efficiency</a></li>
                        <li><a href="#safety" className="underline hover:opacity-80">Safety & Compliance</a></li>
                        <li><a href="#cash" className="underline hover:opacity-80">Cash & Seasonality</a></li>
                        <li><a href="#dashboards" className="underline hover:opacity-80">Dashboards & Cadence</a></li>
                        <li><a href="#ninety-day" className="underline hover:opacity-80">90‑Day Plan</a></li>
                        <li><a href="#advanced" className="underline hover:opacity-80">Advanced Analytics</a></li>
                        <li><a href="#glossary" className="underline hover:opacity-80">Glossary</a></li>
                        <li><a href="#faq" className="underline hover:opacity-80">FAQ</a></li>
                    </ul>
                </nav>

                {/* WHY THIS PLAYBOOK */}
                <section id="why-this-playbook" className="mb-12">
                    <h2 className="text-2xl font-semibold mb-3">Why this playbook exists (and how to use it)</h2>
                    <p className="mb-4">
                        Great dog care and great operations are not opposites. In fact, calmer rooms, predictable schedules, and
                        clear capacity limits are what keep dogs safe <em>and</em> owners happy. This playbook is for boarding and
                        daycare operators who prefer data over guesswork. The goal: give you a practical system that (1) measures
                        what matters, (2) explains what changed, and (3) drives specific actions each week.
                    </p>
                    <p className="mb-4">
                        You’ll find formulas, examples, and decision rules. Wherever possible, we favor <strong>simple
                            definitions</strong> that are easy to collect consistently over overly complex “perfect” metrics that no
                        one updates after month one. If you’re still on spreadsheets, you can adopt the column headers and
                        start today; if you’re already on modern software, map your fields and automate the math.
                    </p>
                    <div className="bg-[#e4dbcb] border border-[#d9cfc2] text-sm rounded-md p-4">
                        <strong>Heads up:</strong> This guide focuses on operations. It’s not legal, medical, or tax advice.
                    </div>
                </section>

                {/* QUICK START */}
                <section id="quick-start" className="mb-12">
                    <h2 className="text-2xl font-semibold mb-3">Quick‑start: the KPI short list you can track tomorrow</h2>
                    <p className="mb-4">
                        If you only have capacity to track a handful of numbers, make them these. They link directly to safety,
                        margin, growth, and predictability.
                    </p>
                    <ul className="list-disc pl-5 space-y-2 mb-4">
                        <li><strong>Run Utilization % (Boarding):</strong> Occupied runs ÷ total runs × 100.</li>
                        <li><strong>RevPAR‑Kennel:</strong> Boarding revenue ÷ available run‑nights (runs × nights).</li>
                        <li><strong>Daycare Capacity Utilization % (Hourly):</strong> Dogs present at hour h ÷ safe capacity at hour h × 100.</li>
                        <li><strong>ARPU by Service:</strong> Service revenue ÷ unique clients who bought that service.</li>
                        <li><strong>Attach Rate (Add‑Ons):</strong> Reservations with ≥1 add‑on ÷ total reservations × 100.</li>
                        <li><strong>No‑Show Rate:</strong> No‑shows ÷ scheduled reservations × 100 (by service + hour window).</li>
                        <li><strong>Labor‑to‑Revenue %:</strong> Direct labor cost ÷ revenue × 100 (track overtime % separately).</li>
                        <li><strong>Incident Rate:</strong> Recordable incidents per 100 dog‑days; log near‑misses separately.</li>
                        <li><strong>Compliance %:</strong> Current waivers and current vaccines on file (and median time‑to‑verify uploads).</li>
                        <li><strong>Repeat Booking Rate (90d):</strong> Clients with ≥2 bookings in 90 days ÷ active clients in 90 days × 100.</li>
                    </ul>

                    <h3 className="text-xl font-semibold mb-2">Copy‑paste formulas</h3>
                    <pre className="whitespace-pre-wrap text-sm bg-gray-50 p-3 rounded-md border">
                        {`Run Utilization % = Occupied Runs / Total Runs × 100
Available Run-Nights = Total Runs × Nights in Period
RevPAR-Kennel = Boarding Revenue / Available Run-Nights

Daycare Capacity Utilization % (hour h) = Dogs Present at hour h / Safe Capacity at hour h × 100

ARPU (by service) = Service Revenue in Period / Unique Clients Who Bought That Service
Attach Rate (Add-Ons) = Reservations with ≥1 Add-On / Total Reservations × 100

No-Show Rate = No-Shows / Scheduled Reservations × 100
Net Cancellation Rate = (Late Cancels + No-Shows - Waitlist Fills) / Scheduled × 100

Labor-to-Revenue % = Direct Labor Cost / Revenue × 100
Coverage Score (hour h) = Dogs Present at hour h / Staff on Duty at hour h

Incident Rate per 100 Dog-Days = (Recordable Incidents / Total Dog-Days) × 100
Near-Miss Rate per 100 Dog-Days = (Near-Misses / Total Dog-Days) × 100

Waiver Compliance % = Clients with Current Waiver / Clients Required × 100
Vaccine Compliance % = Pets with Current Vaccines / Pets Required × 100
Time-to-Verify (median hours) = median(uploadedAt → verifiedAt)

Repeat Booking Rate (90d) = Clients with ≥2 Bookings in 90d / Active Clients in 90d × 100

Avg Ticket = Total Revenue / Total Reservations
Visits per Year = Reservations in 12 Months / Unique Clients
Gross Margin % = (Revenue - Direct Labor - Variable Supplies - Payment Fees) / Revenue × 100
LTV (Gross) = Avg Ticket × Visits per Year × Tenure (years) × Gross Margin %
CAC Payback (months) = CAC / (Avg Monthly Gross Margin Contribution per Client)`}
                    </pre>
                </section>

                {/* INSTRUMENTATION */}
                <section id="instrumentation" className="mb-12">
                    <h2 className="text-2xl font-semibold mb-3">Instrumentation: make KPIs measurable and consistent</h2>
                    <p className="mb-4">
                        Your numbers live or die on data hygiene. Instrumentation is a one‑time project plus weekly touchups:
                        define a minimal data model, standardize names, and avoid duplicate sources. If you’re migrating from
                        spreadsheets later, clean now — imports will be painless and your KPIs won’t break.
                    </p>

                    <h3 className="text-xl font-semibold mb-2">Minimal data model (fields you’ll actually maintain)</h3>
                    <ul className="list-disc pl-5 space-y-2 mb-4">
                        <li><strong>Clients:</strong> <em>clientId, createdAt, source, approvedAt, waiverSignedAt, lastSeenAt</em></li>
                        <li><strong>Pets:</strong> <em>petId, ownerId, name, breed, spayedNeutered, rabiesExp, dhppExp, bordetellaExp</em></li>
                        <li><strong>Reservations:</strong> <em>reservationId, clientId, petId, serviceType, date, arrivalWindow, durationHours, addOns[], status, price</em></li>
                        <li><strong>Boarding Inventory:</strong> <em>runId, type, size, active</em></li>
                        <li><strong>Labor Shifts:</strong> <em>shiftId, role, start, end, wage, cost</em></li>
                        <li><strong>Incidents:</strong> <em>incidentId, date, severity, type, dogDaysAtRisk, notes</em></li>
                    </ul>

                    <h3 className="text-xl font-semibold mb-2">Operational events worth logging</h3>
                    <ul className="list-disc pl-5 space-y-2 mb-4">
                        <li><code>client.approved</code>, <code>waiver.signed</code>, <code>vaccine.verified</code></li>
                        <li><code>reservation.created</code>, <code>reservation.checked_in</code>, <code>reservation.no_show</code>, <code>reservation.canceled</code></li>
                        <li><code>boarding.assigned_run</code>, <code>boarding.checked_out</code></li>
                        <li><code>incident.logged</code> (recordable vs near‑miss, plus cause category)</li>
                    </ul>

                    <h3 className="text-xl font-semibold mb-2">CSV headers you can adopt today</h3>
                    <pre className="whitespace-pre-wrap text-sm bg-gray-50 p-3 rounded-md border">
                        {`clients.csv: clientId, createdAt, source, approvedAt, waiverSignedAt, lastSeenAt
pets.csv: petId, ownerId, name, breed, spayedNeutered, rabiesExp, dhppExp, bordetellaExp
reservations.csv: reservationId, clientId, petId, serviceType, date, arrivalWindow, durationHours, addOns, status, price
runs.csv: runId, type, size, active
labor.csv: shiftId, role, start, end, wage, cost
incidents.csv: incidentId, date, severity, type, dogDaysAtRisk, notes`}
                    </pre>
                    <p className="mt-3">
                        Use consistent casing and avoid renaming columns month to month. Consistency is more valuable than perfection.
                    </p>
                </section>

                {/* CAPACITY & UTILIZATION */}
                <section id="capacity-utilization" className="mb-12">
                    <h2 className="text-2xl font-semibold mb-3">Capacity & utilization: run full, stay calm</h2>
                    <p className="mb-4">
                        Capacity failures come in two flavors: running too hot (stress, incidents, staff burnout) or running too
                        cold (revenue left on the table). With a few durable metrics you can hold a steady “green zone.”
                    </p>

                    <h3 className="text-xl font-semibold mb-2">Boarding (hotel math with a kennel twist)</h3>
                    <p className="mb-2">
                        Treat runs as inventory. Once you define which runs are active this month, you can measure both occupancy
                        and revenue density per run.
                    </p>
                    <pre className="whitespace-pre-wrap text-sm bg-gray-50 p-3 rounded-md border">
                        {`Run Utilization % = Occupied Runs / Total Runs × 100
Available Run-Nights = Total Runs × Nights in Period
RevPAR-Kennel = Boarding Revenue / Available Run-Nights`}
                    </pre>
                    <p className="mb-4">
                        <strong>Example:</strong> 20 runs × 30 nights = 600 available run‑nights. If boarding revenue is $27,300, RevPAR‑Kennel
                        = $27,300 ÷ 600 = <strong>$45.50</strong>. Track a three‑month moving average to smooth holidays.
                    </p>

                    <h3 className="text-xl font-semibold mb-2">Daycare (hourly utilization)</h3>
                    <p className="mb-2">
                        Daycare load changes by the hour. Define a safe hourly cap based on handler coverage and group composition,
                        then track check‑ins/outs against it.
                    </p>
                    <pre className="whitespace-pre-wrap text-sm bg-gray-50 p-3 rounded-md border">
                        {`Daycare Capacity Utilization % (hour h) = Dogs Present at hour h / Safe Capacity at hour h × 100`}
                    </pre>
                    <p className="mb-4">
                        Display as a line with threshold bands (e.g., 70%, 85%, 95%). You’re aiming for a calm green band, not 100%.
                    </p>

                    <h3 className="text-xl font-semibold mb-2">Capacity planning that respects safety</h3>
                    <ul className="list-disc pl-5 space-y-2 mb-4">
                        <li>Make <strong>handler coverage</strong> your first constraint, not the last. Tie scheduling to forecasted loads.</li>
                        <li>Use <strong>arrival windows</strong> to smooth spikes; incentivize off‑peak drop‑offs.</li>
                        <li>Keep a <strong>waitlist by hour</strong>, not just by day. Backfill cancellations fast.</li>
                        <li>Label <strong>checkout‑heavy mornings</strong> in boarding and adjust staffing + intake accordingly.</li>
                    </ul>

                    <h3 className="text-xl font-semibold mb-2">Common capacity pitfalls (and quick fixes)</h3>
                    <ul className="list-disc pl-5 space-y-2">
                        <li><strong>Unknown inventory:</strong> Fuzzy run counts or “temporarily closed” runs left in the denominator skew metrics. Fix by marking inactive runs.</li>
                        <li><strong>Drops only by day:</strong> If you don’t measure hourly daycare load, you’ll miss red‑zone peaks. Fix by hourly headcounts.</li>
                        <li><strong>All arrivals at 8am:</strong> Offer staggered windows and small perks to shift behavior.</li>
                    </ul>
                </section>

                {/* REVENUE QUALITY */}
                <section id="revenue-quality" className="mb-12">
                    <h2 className="text-2xl font-semibold mb-3">Revenue quality: ARPU, mix, and attach (profit without pressure)</h2>
                    <p className="mb-4">
                        Not every dollar is equal. You want stable, repeatable revenue with healthy contribution. Watch three dials:
                        <strong> ARPU by service</strong>, <strong>service mix</strong>, and <strong>attach rate</strong>.
                    </p>

                    <h3 className="text-xl font-semibold mb-2">ARPU by service</h3>
                    <pre className="whitespace-pre-wrap text-sm bg-gray-50 p-3 rounded-md border">
                        {`ARPU (Daycare) = Daycare Revenue ÷ Unique Daycare Clients in Period
ARPU (Boarding) = Boarding Revenue ÷ Unique Boarding Clients in Period`}
                    </pre>
                    <p className="mb-4">
                        Pair ARPU with <em>repeat booking rate</em> and <em>new clients added</em>. Rising ARPU with flat repeat
                        rate may signal price pressure; rising together can mean healthier mix or better add‑ons.
                    </p>

                    <h3 className="text-xl font-semibold mb-2">Service mix</h3>
                    <p className="mb-4">
                        Track revenue share by category (daycare, boarding, grooming add‑ons, enrichment, training, retail). Over‑reliance
                        on one category increases risk during seasonal dips. Mix discipline also clarifies where to invest next (e.g.,
                        add enrichment blocks vs. expand retail).
                    </p>

                    <h3 className="text-xl font-semibold mb-2">Attach rate and contribution</h3>
                    <pre className="whitespace-pre-wrap text-sm bg-gray-50 p-3 rounded-md border">
                        {`Attach Rate = Reservations with ≥1 Add-On / Total Reservations × 100
Add-On Contribution % = Add-On Gross Profit / Total Gross Profit × 100`}
                    </pre>
                    <p className="mb-4">
                        Attach rate without contribution is vanity. Estimate variable costs (time, supplies) for add‑ons to decide
                        which bundles or memberships actually help margin.
                    </p>

                    <h3 className="text-xl font-semibold mb-2">Pricing changes the right way (low drama, high signal)</h3>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Announce with <strong>service quality wins</strong> (rest cycles, calmer rooms, better communication) so clients understand value.</li>
                        <li>Track <strong>ARPU</strong>, <strong>repeat rate</strong>, and <strong>churn</strong> for two billing cycles post‑change.</li>
                        <li>Prefer <strong>simple price tables</strong> over infinite variants. Complexity confuses buyers and staff.</li>
                    </ul>
                </section>

                {/* DEMAND & PIPELINE */}
                <section id="pipeline" className="mb-12">
                    <h2 className="text-2xl font-semibold mb-3">Demand & pipeline: approval to repeat, without friction</h2>
                    <p className="mb-4">
                        Think in stages: discovery → inquiry → approved → first booking → repeat. Measure each conversion and time lag;
                        then fix the stickiest step first.
                    </p>

                    <h3 className="text-xl font-semibold mb-2">Funnel math</h3>
                    <pre className="whitespace-pre-wrap text-sm bg-gray-50 p-3 rounded-md border">
                        {`Lead-to-Approval % = Approved Clients / Inquiries × 100
Approval-to-First Booking % = First-Time Bookers / Approved Clients × 100
First-to-Repeat % (90d) = Repeat Bookers in 90d / First-Time Bookers × 100`}
                    </pre>

                    <h3 className="text-xl font-semibold mb-2">Speed and clarity win</h3>
                    <ul className="list-disc pl-5 space-y-2 mb-4">
                        <li><strong>Time to Approval:</strong> hours from inquiry → approved. Streamline waiver + vaccine review.</li>
                        <li><strong>Time to First Booking:</strong> approval → first reservation. Automate a welcome nudge with a relevant perk (e.g., enrichment, not deep discounts).</li>
                        <li><strong>Source tags:</strong> Track Google Business Profile, referrals, website/blog, social — then fund what pays back quickest.</li>
                    </ul>

                    <h3 className="text-xl font-semibold mb-2">Common pipeline blockers</h3>
                    <ul className="list-disc pl-5 space-y-2">
                        <li><strong>Unclear requirements:</strong> Vague vaccine/waiver steps stall approvals. Fix with a one‑pager and auto‑reminders.</li>
                        <li><strong>Manual scheduling:</strong> Force email/phone only → friction. Offer online booking with clear arrival windows.</li>
                        <li><strong>Slow replies:</strong> Define a same‑day SLA for approvals and initial responses.</li>
                    </ul>
                </section>

                {/* LTV & PAYBACK */}
                <section id="ltv" className="mb-12">
                    <h2 className="text-2xl font-semibold mb-3">Lifetime Value (LTV) & payback: how much you can spend to win a client</h2>
                    <p className="mb-4">
                        LTV isn’t about fancy spreadsheets; it’s about knowing how much value a typical client brings over time so you
                        can invest confidently in the channels that bring the right customers.
                    </p>

                    <h3 className="text-xl font-semibold mb-2">Practical approach</h3>
                    <pre className="whitespace-pre-wrap text-sm bg-gray-50 p-3 rounded-md border">
                        {`Avg Ticket = Total Revenue ÷ Total Reservations
Visits per Year = Reservations in 12 Months ÷ Unique Clients
Gross Margin % = (Revenue - Direct Labor - Variable Supplies - Payment Fees) ÷ Revenue × 100
LTV (Gross) = Avg Ticket × Visits per Year × Tenure (years) × Gross Margin %
CAC Payback (months) = CAC / (Avg Monthly Gross Margin Contribution per Client)`}
                    </pre>
                    <p className="mb-4">
                        Start with gross margin. Later, move to contribution margin if you track fixed overhead allocation reliably.
                        For small facilities, aim for CAC payback &lt; 3 months, or &lt; 2 months approaching peak season.
                    </p>

                    <h3 className="text-xl font-semibold mb-2">Segment LTV for real decisions</h3>
                    <ul className="list-disc pl-5 space-y-2">
                        <li><strong>By service entry:</strong> daycare‑first vs. boarding‑first clients behave differently.</li>
                        <li><strong>By acquisition source:</strong> referrals often show higher tenure and ARPU than coupon traffic.</li>
                        <li><strong>By pet profile:</strong> multi‑dog homes, intact vs. spay/neuter status, age cohort.</li>
                    </ul>
                </section>

                {/* NO-SHOWS */}
                <section id="no-shows" className="mb-12">
                    <h2 className="text-2xl font-semibold mb-3">No‑shows & cancellations: design them down</h2>
                    <p className="mb-4">
                        No‑shows waste capacity and spike stress. Treat them as a measurable behavior you can shape with policies
                        and reminders, not an inevitability.
                    </p>

                    <pre className="whitespace-pre-wrap text-sm bg-gray-50 p-3 rounded-md border">
                        {`No-Show Rate = No-Shows / Scheduled Reservations × 100
Net Cancellation Rate = (Late Cancels + No-Shows - Waitlist Fills) / Scheduled × 100`}
                    </pre>

                    <h3 className="text-xl font-semibold mb-2">Low‑friction fixes</h3>
                    <ul className="list-disc pl-5 space-y-2">
                        <li><strong>Deposits</strong> for peak windows (reasonable, clearly communicated).</li>
                        <li><strong>Reminders</strong> at 48h and 24h with a self‑serve reschedule link.</li>
                        <li><strong>Waitlist automation</strong> that backfills cancellations quickly.</li>
                        <li><strong>Policy clarity</strong> baked into your waiver; enforce gently but consistently.</li>
                    </ul>
                </section>

                {/* LABOR */}
                <section id="labor" className="mb-12">
                    <h2 className="text-2xl font-semibold mb-3">Labor efficiency: money and coverage</h2>
                    <p className="mb-4">
                        Labor is your largest controllable cost and your biggest safety lever. Measure it two ways: dollars and
                        coverage.
                    </p>

                    <h3 className="text-xl font-semibold mb-2">Money: labor‑to‑revenue %</h3>
                    <pre className="whitespace-pre-wrap text-sm bg-gray-50 p-3 rounded-md border">
                        {`Labor-to-Revenue % = Direct Labor / Revenue × 100`}
                    </pre>
                    <p className="mb-4">
                        Track by day and week. Separate handler/front desk from grooming if applicable. Add overtime %, call‑outs,
                        and missed breaks to explain spikes — numbers without a story don’t help you recruit or retain.
                    </p>

                    <h3 className="text-xl font-semibold mb-2">Coverage: staff‑to‑dog and a simple “coverage score”</h3>
                    <pre className="whitespace-pre-wrap text-sm bg-gray-50 p-3 rounded-md border">
                        {`Coverage Score (hour h) = Dogs Present at hour h / Staff on Duty at hour h`}
                    </pre>
                    <p className="mb-4">
                        Set a maximum coverage score (e.g., 8–12 dogs per handler depending on temperament mix and yard layout).
                        If you exceed it more than two consecutive hours, that’s an ops issue, not a hero moment.
                    </p>

                    <h3 className="text-xl font-semibold mb-2">Scheduling that protects people and dogs</h3>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Build shifts around <strong>forecasted hourly load</strong>, not just open hours.</li>
                        <li>Design <strong>transition buffers</strong> for check‑in/check‑out windows.</li>
                        <li>Give new handlers a <strong>shadowing curve</strong> and measure their groups’ incident rates.</li>
                    </ul>
                </section>

                {/* SAFETY & COMPLIANCE */}
                <section id="safety" className="mb-12">
                    <h2 className="text-2xl font-semibold mb-3">Safety & compliance: incidents down, trust up</h2>
                    <p className="mb-4">
                        Safety metrics protect dogs, staff, and your reputation. Track both recordable incidents and near‑misses,
                        plus waiver/vaccine compliance with timestamps so you can audit quickly.
                    </p>

                    <pre className="whitespace-pre-wrap text-sm bg-gray-50 p-3 rounded-md border">
                        {`Incident Rate per 100 Dog-Days = (Recordable Incidents / Total Dog-Days) × 100
Near-Miss Rate per 100 Dog-Days = (Near-Misses / Total Dog-Days) × 100

Waiver Compliance % = Clients with Current Waiver / Clients Required × 100
Vaccine Compliance % = Pets with Current Vaccines / Pets Required × 100
Time-to-Verify (median hours) = median(uploadedAt → verifiedAt)

Medication Adherence % = Doses Administered / Doses Scheduled × 100 (if applicable)`}
                    </pre>

                    <h3 className="text-xl font-semibold mb-2">Versioned waivers (sign once per version)</h3>
                    <p className="mb-4">
                        Store waiver text with a version and keep signature timestamps. Clients sign when first approved, and again
                        only if the text changes. This keeps your prompts respectful and your audit trail clean.
                    </p>

                    <h3 className="text-xl font-semibold mb-2">Vaccine file workflow</h3>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Require clear images or PDFs with pet name and expiration dates visible.</li>
                        <li>Verify within a set SLA (e.g., 24–48 hours) and log <em>verifiedAt</em>.</li>
                        <li>Automate reminders at 30 and 7 days before expiration.</li>
                    </ul>
                </section>

                {/* CASH & SEASONALITY */}
                <section id="cash" className="mb-12">
                    <h2 className="text-2xl font-semibold mb-3">Cash, deposits, and seasonality: never let timing sink a good operation</h2>
                    <p className="mb-4">
                        Healthy operations can still struggle from cash timing. Use deposits, simple membership logic, and a buffer
                        policy to keep payroll and rent safe through the slow shoulder.
                    </p>

                    <h3 className="text-xl font-semibold mb-2">Deferred revenue without headaches</h3>
                    <ul className="list-disc pl-5 space-y-2 mb-4">
                        <li>Track <strong>deposits collected</strong> and recognize them when the stay occurs.</li>
                        <li>Recognize <strong>memberships</strong> over the period purchased, not all at once.</li>
                    </ul>

                    <h3 className="text-xl font-semibold mb-2">Buffer policy</h3>
                    <p className="mb-4">
                        Maintain a buffer equal to X weeks of average labor + rent + core utilities. Refill above the line after
                        peak periods; avoid starving growth investments below it.
                    </p>
                </section>

                {/* DASHBOARDS */}
                <section id="dashboards" className="mb-12">
                    <h2 className="text-2xl font-semibold mb-3">Dashboards & cadence: three layers, short meetings, clear owners</h2>
                    <p className="mb-4">
                        A dashboard is a decision tool, not a museum. Keep three layers — daily, weekly, monthly — each with a short
                        ritual and a named owner for every action.
                    </p>

                    <h3 className="text-xl font-semibold mb-2">Daily (10 minutes)</h3>
                    <ul className="list-disc pl-5 space-y-2 mb-4">
                        <li>Arrivals vs plan; boarding occupancy; exceptions.</li>
                        <li>Incidents / near‑misses; medication checks.</li>
                        <li>No‑shows and waitlist fills; any angry‑client flags.</li>
                    </ul>

                    <h3 className="text-xl font-semibold mb-2">Weekly (30–45 minutes)</h3>
                    <ul className="list-disc pl-5 space-y-2 mb-4">
                        <li>Daycare hourly utilization trend; coverage score red zones.</li>
                        <li>Labor‑to‑revenue %, overtime %, call‑outs.</li>
                        <li>Pipeline: approvals, first bookings, repeat rate by source.</li>
                        <li>No‑show/cancel rates by service and time window.</li>
                    </ul>

                    <h3 className="text-xl font-semibold mb-2">Monthly (60 minutes)</h3>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>ARPU by service; mix; attach and contribution.</li>
                        <li>LTV and CAC payback; channel budget decisions.</li>
                        <li>Incident rate vs targets; compliance %; time‑to‑verify.</li>
                        <li>Cash buffer check; deposit liability trend.</li>
                    </ul>

                    <div className="bg-[#e4dbcb] border border-[#d9cfc2] text-sm rounded-md p-4 mt-4">
                        <strong>One‑page dashboard checklist:</strong>
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                            <li>Top KPIs with 3‑month trend + traffic‑light thresholds.</li>
                            <li>Notes: root causes and committed actions.</li>
                            <li>Owner and due date per action; close the loop next meeting.</li>
                        </ul>
                    </div>
                </section>

                {/* 90-DAY PLAN */}
                <section id="ninety-day" className="mb-12">
                    <h2 className="text-2xl font-semibold mb-3">90‑day KPI turnaround plan: instrument → fix → stabilize</h2>
                    <p className="mb-4">
                        You don’t need a year to run like a pro. Use this sequence to lock in measurement, fix the obvious
                        bottlenecks, and systematize the wins.
                    </p>

                    <h3 className="text-xl font-semibold mb-2">Days 1–14: instrument & baseline</h3>
                    <ul className="list-disc pl-5 space-y-2 mb-4">
                        <li>Adopt the CSV headers above or map fields in your software.</li>
                        <li>Define safe daycare capacity by hour and active boarding runs.</li>
                        <li>Turn on reminders and waitlist; implement reasonable deposits for peak windows.</li>
                        <li>Start daily incident logging with a shared definition of “recordable” vs “near‑miss.”</li>
                    </ul>

                    <h3 className="text-xl font-semibold mb-2">Days 15–45: fix the obvious bottlenecks</h3>
                    <ul className="list-disc pl-5 space-y-2 mb-4">
                        <li>If <em>Coverage Score</em> is red 3+ days/week, fix schedules before changing prices.</li>
                        <li>If <em>No‑Show Rate</em> &gt; 5–7%, tighten reminders/waitlist; test deposits on the worst windows.</li>
                        <li>If <em>Time‑to‑Verify</em> vaccines &gt; 48 hours median, assign a daily review block and automate nudges.</li>
                    </ul>

                    <h3 className="text-xl font-semibold mb-2">Days 46–90: stabilize and scale</h3>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Introduce 1–2 add‑ons with real contribution; monitor attach and margin.</li>
                        <li>Build a one‑page dashboard + weekly ritual and accountability.</li>
                        <li>Pick one demand source (often Google reviews + website) to double down on; track payback.</li>
                    </ul>

                    <div className="bg-[#e4dbcb] border border-[#d9cfc2] text-sm rounded-md p-4 mt-4">
                        <strong>Outcome by day 90:</strong> cleaner data, calmer rooms, predictable labor, fewer no‑shows, faster approvals, and a dashboard that triggers action — not just reflection.
                    </div>
                </section>

                {/* ADVANCED ANALYTICS */}
                <section id="advanced" className="mb-12">
                    <h2 className="text-2xl font-semibold mb-3">Advanced analytics: when you’re ready for the next layer</h2>
                    <p className="mb-4">
                        Once the core KPIs are humming, add a few advanced views that sharpen decisions without overcomplicating life.
                    </p>

                    <h3 className="text-xl font-semibold mb-2">Cohorts and retention curves</h3>
                    <ul className="list-disc pl-5 space-y-2 mb-4">
                        <li>Group clients by the month they first booked (a “cohort”) and plot their monthly activity.</li>
                        <li>Watch how quickly new cohorts reach steady repeat behavior; improvements here compound.</li>
                    </ul>

                    <h3 className="text-xl font-semibold mb-2">Contribution‑aware attach rate</h3>
                    <p className="mb-4">
                        Weight add‑ons by contribution margin to identify which extras actually help net, not just top‑line.
                    </p>

                    <h3 className="text-xl font-semibold mb-2">Safety root‑cause tree</h3>
                    <p className="mb-4">
                        Categorize incidents by <em>trigger</em> (space, transition, mismatch, resource), <em>location</em>, and
                        <em>handler-to-dog ratio at the time</em>. Fix the top two drivers each quarter.
                    </p>

                    <h3 className="text-xl font-semibold mb-2">Utilization as forecast</h3>
                    <p className="mb-4">
                        Use rolling 4‑week hourly utilization to predict next week’s staffing and arrival windows. Aim to keep
                        predicted peaks under your red threshold with buffer staffing or incentives.
                    </p>

                    <h3 className="text-xl font-semibold mb-2">Multi‑location rollups (if applicable)</h3>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Normalize metrics (per run, per 100 dog‑days) for fair comparisons.</li>
                        <li>Benchmark staffing models: which location keeps coverage score greener with similar demand?</li>
                    </ul>
                </section>

                {/* GLOSSARY */}
                <section id="glossary" className="mb-12">
                    <h2 className="text-2xl font-semibold mb-3">Glossary (plain‑English definitions)</h2>
                    <ul className="list-disc pl-5 space-y-2">
                        <li><strong>ARPU:</strong> Average revenue per unique client for a given service in a period.</li>
                        <li><strong>Attach Rate:</strong> Percentage of reservations with at least one add‑on.</li>
                        <li><strong>Available Run‑Nights:</strong> Total active runs × nights in the period.</li>
                        <li><strong>Coverage Score:</strong> Dogs present ÷ staff on duty at a specific hour.</li>
                        <li><strong>Dog‑Day:</strong> One dog present for any part of a day; sum across dogs for totals.</li>
                        <li><strong>Gross Margin %:</strong> (Revenue − direct labor − variable supplies − payment fees) ÷ revenue × 100.</li>
                        <li><strong>LTV:</strong> Lifetime value — expected gross margin from a client over their tenure.</li>
                        <li><strong>RevPAR‑Kennel:</strong> Boarding revenue per available run‑night.</li>
                    </ul>
                </section>

                {/* FAQ */}
                <section id="faq" className="mb-16">
                    <h2 className="text-2xl font-semibold mb-3">FAQ</h2>

                    <h3 className="text-xl font-semibold mb-2">What’s a “good” utilization rate?</h3>
                    <p className="mb-4">
                        For boarding, target healthy RevPAR‑Kennel with run utilization that doesn’t overload staff on checkout
                        mornings (often 70–90% depending on layout/cleaning cycles). For daycare, use hourly capacity; if you spend
                        multiple hours per day in the red, fix coverage before chasing more bookings.
                    </p>

                    <h3 className="text-xl font-semibold mb-2">Do I need memberships or are packages fine?</h3>
                    <p className="mb-4">
                        Both can work. Memberships smooth cash and encourage frequency but require clear terms and consistent delivery
                        windows. Packages are simpler and can reduce per‑visit price wars. Use ARPU, attach, and LTV to decide — not
                        just “what others do.”
                    </p>

                    <h3 className="text-xl font-semibold mb-2">How often should we revisit prices?</h3>
                    <p className="mb-4">
                        Review structure quarterly, change selectively 1–2× per year. Pair changes with service quality wins and clear
                        communication. Watch ARPU and churn two billing cycles after any change.
                    </p>

                    <h3 className="text-xl font-semibold mb-2">What counts as a recordable incident?</h3>
                    <p className="mb-4">
                        Define it upfront and train to the definition: injuries requiring first‑aid or vet care, bites beyond play,
                        escapes, fights requiring intervention, gate failures, etc. Near‑misses are events that <em>could</em> have
                        escalated — log those, too.
                    </p>
                </section>

                {/* SOURCES */}
                <section id="sources" className="mb-16">
                    <h2 className="text-2xl font-semibold mb-3">📚 Sources (APA)</h2>
                    <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
                        <li>
                            American Kennel Club. (2024). <em>Dog boarding: What to expect and how to prepare</em>. https://www.akc.org/expert-advice/training/dog-boarding-tips/
                        </li>
                        <li>
                            International Boarding & Pet Services Association (IBPSA). (2024). <em>Operational best practices for pet care facilities</em>. https://www.ibpsa.com/resources/
                        </li>
                        <li>
                            Pet Care Services Association. (2023). <em>Key performance indicators for pet boarding and daycare businesses</em>.
                        </li>
                        <li>
                            U.S. Small Business Administration. (2023). <em>Guide to small business KPIs</em>. https://www.sba.gov
                        </li>
                        <li>
                            American Veterinary Medical Association. (2024). <em>Canine group housing and welfare considerations</em>. https://www.avma.org/resources-tools/animal-health-and-welfare
                        </li>
                        <li>
                            Kennel Club (UK). (2024). <em>Licensing and operational standards for boarding kennels</em>. https://www.thekennelclub.org.uk
                        </li>
                        <li>
                            Government of Australia, Department of Agriculture, Fisheries and Forestry. (2023). <em>Animal welfare standards for boarding kennels</em>.
                        </li>
                        <li>
                            Government of New Zealand, Ministry for Primary Industries. (2023). <em>Code of welfare: Dogs</em>. https://www.mpi.govt.nz
                        </li>
                        <li>
                            Mills, D. S., & Levine, E. D. (2019). The welfare implications of dog group housing: A review. <em>Journal of Veterinary Behavior, 30</em>, 1–12.
                        </li>
                        <li>
                            Beerda, B., Schilder, M. B. H., van Hooff, J. A. R. A. M., de Vries, H. W., & Mol, J. A. (1999). Chronic stress in dogs subjected to social and spatial restriction. <em>Physiology & Behavior, 66</em>(2), 243–254.
                        </li>
                        <li>
                            Salonen, M., Vapalahti, K., Tiira, K., Mikkola, S., Sulkama, S., & Hakanen, E. (2020). Prevalence, comorbidity, and breed differences in canine anxiety in 13,700 Finnish pet dogs. <em>Scientific Reports, 10</em>(1), 2962. https://doi.org/10.1038/s41598-020-59837-z
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
