'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function PricingPetCareServices() {
  const locale = useLocale();

  const title =
    'Pricing Dog Boarding, Daycare, Dog Walking & Pet Sitting: A Practical, Economics‑Savvy Playbook';
  const date = 'May 22, 2025';
  const categories = ['boarding', 'walker', 'sitter'];

  const categoryLabels: Record<string, string> = {
    boarding: 'Boarding & Daycare',
    sitter: 'Pet Sitters',
    walker: 'Dog Walkers',
    rescue: 'Rescues',
    vet: 'Veterinary Clinics',
    owner: 'Pet Owners',
  };

  return (
    <>

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

        {/* Local anchor nav */}
        <nav className="mb-10 text-sm">
          <ul className="flex flex-wrap gap-3">
            <li><a href="#overview" className="underline hover:opacity-80">Overview</a></li>
            <li><a href="#framework" className="underline hover:opacity-80">10‑Step Framework</a></li>
            <li><a href="#econ" className="underline hover:opacity-80">Economics 101</a></li>
            <li><a href="#costs" className="underline hover:opacity-80">Cost Model</a></li>
            <li><a href="#capacity" className="underline hover:opacity-80">Capacity Math</a></li>
            <li><a href="#benchmarks" className="underline hover:opacity-80">Competitor Benchmarks</a></li>
            <li><a href="#local-data" className="underline hover:opacity-80">Pull Local Data</a></li>
            <li><a href="#examples" className="underline hover:opacity-80">Example Cities</a></li>
            <li><a href="#playbooks" className="underline hover:opacity-80">Service Playbooks</a></li>
            <li><a href="#add-ons" className="underline hover:opacity-80">Add‑Ons & Packages</a></li>
            <li><a href="#fees" className="underline hover:opacity-80">Taxes & Fees</a></li>
            <li><a href="#compliance" className="underline hover:opacity-80">Insurance & Licensing</a></li>
            <li><a href="#templates" className="underline hover:opacity-80">Price Menu Templates</a></li>
            <li><a href="#communication" className="underline hover:opacity-80">Communicating Price</a></li>
            <li><a href="#pitfalls" className="underline hover:opacity-80">Common Pitfalls</a></li>
            <li><a href="#checklist" className="underline hover:opacity-80">Checklist</a></li>
            <li><a href="#faq" className="underline hover:opacity-80">FAQ</a></li>
            <li><a href="#sources" className="underline hover:opacity-80">Sources</a></li>
          </ul>
        </nav>

        {/* OVERVIEW */}
        <section id="overview" className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">Overview — Your Pricing Job in One Sentence</h2>
          <p className="mb-4">
            Pricing in pet care is not about guessing what sounds fair; it’s about matching
            <strong> value delivered</strong> to a <strong>market’s willingness to pay</strong> while covering
            <strong> all costs</strong> and earning <strong>healthy profit</strong> at realistic utilization. This article gives
            owners of boarding/daycare facilities, walkers, and sitters a reusable, step‑by‑step method grounded in
            basic economics and hard numbers, not vibes.
          </p>
          <p>
            We’ll walk through a 10‑step framework, a clean cost model you can copy, capacity math, market benchmarking,
            and compliance considerations (wages, card fees, insurance, licensing). You’ll leave with a publish‑ready
            price menu and a plan to review it quarterly without reinventing the wheel.
          </p>
        </section>

        {/* 10-STEP FRAMEWORK */}
        <section id="framework" className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">Part 1 — The 10‑Step Pricing Framework</h2>
          <ol className="list-decimal pl-5 space-y-2">
            <li><strong>Define scope</strong>: exactly what’s included per service (hours, activities, handoffs, exclusions).</li>
            <li><strong>List direct costs</strong>: labor per unit, supplies, food, cleaning, utilities allocated, transport, software, payment fees.</li>
            <li><strong>Allocate overhead</strong>: rent, admin labor, insurance, marketing, legal/accounting, depreciation.</li>
            <li><strong>Capacity math</strong>: safe headcount, staff:dog ratio, open hours, expected utilization by day/season.</li>
            <li><strong>Set margin target</strong>: e.g., 15–25% net on mature services; earlier = lower while you fill capacity.</li>
            <li><strong>Benchmark the market</strong>: collect competitor prices and service bundles; note gaps you can fill.</li>
            <li><strong>Adjust for local price level</strong>: high‑cost metros vs. small markets; sanity‑check with CPI/RPP/PPP.</li>
            <li><strong>Price tests</strong>: A/B bundles, early‑bird, off‑peak/day‑of‑week differentials; watch conversion + margin.</li>
            <li><strong>Policy alignment</strong>: deposits, cancellation windows, late fees, vaccine docs, holiday surcharges.</li>
            <li><strong>Review cycle</strong>: quarterly input refresh (wages, CPI, card fees), semiannual price review.</li>
          </ol>
        </section>

        {/* ECON 101 */}
        <section id="econ" className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">Part 2 — Economics 101 (Only the Bits You Need)</h2>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li>
              <strong>Demand & willingness to pay</strong>: price moves should reflect local incomes, alternatives, and your
              differentiation (safety protocols, enrichment, reporting, pick‑ups).
            </li>
            <li>
              <strong>Elastic vs. inelastic services</strong>: daily dog walks are more elastic (easy to switch providers) than
              holiday boarding (capacity crunch + switching friction).
            </li>
            <li>
              <strong>Marginal thinking</strong>: add‑ons should have high contribution margin and minimal extra labor (reports,
              photos, enrichment blocks).
            </li>
            <li>
              <strong>Price discrimination, ethically</strong>: off‑peak discounts; memberships; multi‑dog bundles; prepay credits.
            </li>
            <li>
              <strong>Indexing</strong>: when wages and supplies rise, tie annual refresh to trusted indices (CPI) plus wage floors.
            </li>
          </ul>
        </section>

        {/* COST MODEL */}
        <section id="costs" className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">Part 3 — Build a Cost Model That Won’t Break</h2>
          <p className="mb-4">
            Keep it simple: a one‑sheet model per service with <em>direct cost per unit</em>, <em>overhead allocation</em>, and a
            <em> margin target</em>. Update wages, card fees, and supplies quarterly; rent/insurance annually.
          </p>
          <h3 className="text-xl font-semibold mb-2">Direct cost per unit (example fields)</h3>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>Labor minutes × fully‑loaded wage (wage + payroll taxes/benefits)</li>
            <li>Supplies/cleaning/consumables per dog</li>
            <li>Utilities allocation per dog‑day (water/power/HVAC proportional to occupancy)</li>
            <li>Payment processing (e.g., 2.6–2.9% + fixed cents)</li>
            <li>Software per booking (monthly fee ÷ expected bookings)</li>
          </ul>
          <h3 className="text-xl font-semibold mb-2">Overhead allocation</h3>
          <ul className="list-disc pl-5 space-y-1 mb-2">
            <li>Rent/lease + common area maintenance</li>
            <li>Admin labor, marketing, phones/internet, insurance</li>
            <li>Licenses/inspection fees; professional services (CPA, legal)</li>
            <li>Equipment depreciation and replacement reserve</li>
          </ul>
          <p className="text-sm text-gray-700">
            <strong>Rule of thumb:</strong> if overhead &gt; 35–45% of revenue at steady state, review staffing schedules, space
            utilization, and add‑on attach rates.
          </p>
        </section>

        {/* CAPACITY MATH */}
        <section id="capacity" className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">Part 4 — Capacity, Staffing Ratios & Safe Utilization</h2>
          <p className="mb-4">
            Your price must assume <em>real</em> capacity, not fantasy capacity. Model weekdays vs. weekends, school breaks,
            and holiday peaks. For daycare, many UK local authority guidance docs cite a <strong>1:10 staff‑to‑dog ratio</strong> as a
            ceiling for established operations; boarding “higher standard” guidance sometimes cites <strong>~1:15</strong> as an upper
            bound for kennels. Use these as conservative safety proxies and check your local rules.
          </p>
          <pre className="bg-[#f7f3ea] p-4 rounded border border-[#d9cfc2] overflow-x-auto text-sm mb-4">
{`Example: Daycare capacity
• 2 staff on floor × 10 dogs/staff = 20 dogs max at any instant
• Average occupancy 75% on Mon–Thu; 90% on Fri; 60% on Sat; closed Sun
• Weekly dog‑days ≈ (20×0.75×4) + (20×0.9×1) + (20×0.6×1) = 60 + 18 + 12 = 90`}
          </pre>
          <p className="text-sm text-gray-700">
            Safety first: ratios are <em>guidance</em> in many jurisdictions; you still must consider temperament mix, facility
            layout, separation options, and supervisor experience.
          </p>
        </section>

        {/* MARKET BENCHMARKS */}
        <section id="benchmarks" className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">Part 5 — Benchmark Your Market (Without Copying Blindly)</h2>
          <ol className="list-decimal pl-5 space-y-2 mb-4">
            <li>Scrape 10–20 local competitors: day rates, half‑days, boarding per night, walk lengths, sitter visits.</li>
            <li>Note their inclusions: photos, report cards, enrichment, holiday surcharges, deposits/cancel windows.</li>
            <li>Map a gap: e.g., you include daily enrichment & webcam access, or structured small‑group play.</li>
          </ol>
          <p className="text-sm text-gray-700">
            Your philosophy (“charge what keeps you profitable while beating on service”) works if your cost model is honest
            and your differentiation is clear. Benchmark for context; price for <em>your</em> math.
          </p>
        </section>

        {/* LOCAL DATA */}
        <section id="local-data" className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">Part 6 — Pull Local Data (Income, Inflation, Price Levels)</h2>
          <p className="mb-4">
            Use official sources to sanity‑check affordability and cost drift over time. Three useful layers:
          </p>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li>
              <strong>Median household income</strong> — U.S.: Census ACS table S1901; U.K.: ONS household income; Canada:
              Statistics Canada; Australia: ABS; New Zealand: Stats NZ.
            </li>
            <li>
              <strong>Inflation (CPI)</strong> — track national/metro CPI to decide if annual price updates are warranted.
            </li>
            <li>
              <strong>Local price level</strong> — U.S. BEA Regional Price Parities (RPP) help compare high‑ vs. low‑cost metros;
              PPP (OECD) is helpful for cross‑country context.
            </li>
          </ul>
          <p className="text-sm text-gray-700">
            Example flow (U.S.): Pull ACS S1901 for your county/city → check BLS CPI (national + local metro where available)
            → compare your metro’s RPP to U.S.=100 → set target price band relative to local peers.
          </p>
        </section>

        {/* EXAMPLE CITIES */}
        <section id="examples" className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">Part 7 — Example Cities (Different Income Bands)</h2>
          <p className="mb-4">
            Use these as <em>illustrative</em> patterns—always validate with current local data and competitor scans.
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>High‑income, high‑cost metro (e.g., San Francisco, U.S.)</strong>: Higher rent, wages, and card fees amplify
              breakevens; market tolerates premium add‑ons (enrichment, video).
            </li>
            <li>
              <strong>Mid‑income city (e.g., Manchester, U.K.)</strong>: Strong sensitivity to transparent bundles; memberships
              and multi‑dog discounts convert well.
            </li>
            <li>
              <strong>Lower‑income region (e.g., regional Canada/NZ)</strong>: Focus on lean ops, strong scheduling, and
              off‑peak pricing to protect margins.
            </li>
          </ul>
        </section>

        {/* SERVICE PLAYBOOKS */}
        <section id="playbooks" className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">Part 8 — Service‑by‑Service Playbooks</h2>

          <h3 className="text-xl font-semibold mb-2">Boarding (overnight)</h3>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>Base price includes: 24‑hour care window, feeding, meds admin, potty breaks, climate‑controlled sleep area.</li>
            <li>Add‑ons: enrichment blocks, 1:1 walks, photo updates, exit bath, late checkout.</li>
            <li>Holiday surcharge and deposit policy clearly published.</li>
          </ul>

          <h3 className="text-xl font-semibold mb-2">Daycare</h3>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>Half‑day vs. full‑day; multi‑pack credits; memberships with perks (priority holidays, discounted boarding add‑on).</li>
            <li>Staffing ratios + temperament grouping; publish safety standards.</li>
          </ul>

          <h3 className="text-xl font-semibold mb-2">Dog walking</h3>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>Lengths (20/30/45/60 min); solo vs. small group; distance bands; keys/lockbox policy; GPS check‑in.</li>
            <li>Bundle discounts (3–5× per week) to drive predictable utilization.</li>
          </ul>

          <h3 className="text-xl font-semibold mb-2">Pet sitting (drop‑ins/overnights)</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Visit tiers (15/30/45 min) and overnight blocks; meds, litter, plant/parcel add‑ons; photo updates.</li>
            <li>Travel surcharges by radius; holiday premium; deposit/cancellation windows.</li>
          </ul>
        </section>

        {/* ADD-ONS & PACKAGES */}
        <section id="add-ons" className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">Part 9 — Add‑Ons, Bundles, Memberships</h2>
          <p className="mb-4">
            The goal is stable contribution margin. Price add‑ons to be clearly optional but compelling (photos/report, extra
            walk, 1:1 enrichment, exit bath). Bundles should be a <em>real</em> savings (5–12%) for predictable usage, not 1–2%.
          </p>
          <pre className="bg-[#f7f3ea] p-4 rounded border border-[#d9cfc2] overflow-x-auto text-sm">
{`Quick math (processing aware):
If card fee is 2.6% + $0.15 and your base daycare is $38:
Net ≈ 38 - (0.026×38) - 0.15 = 38 - 0.988 - 0.15 ≈ $36.86 before other costs.`}
          </pre>
        </section>

        {/* TAXES & FEES */}
        <section id="fees" className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">Part 10 — Card Fees, Taxes, and Indexing</h2>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li>Card fees vary by provider and channel (in‑person vs. online). Model both rates in your unit economics.</li>
            <li>Consider whether you’ll <em>absorb</em> fees (simpler UX) or price accordingly. Follow local rules if surcharging.</li>
            <li>Index annual price refresh to CPI + wage changes; round to clean price points ($39 → $41, not $40.17).</li>
          </ul>
        </section>

        {/* COMPLIANCE */}
        <section id="compliance" className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">Part 11 — Insurance, Licensing & Minimum Wages</h2>
          <p className="mb-4">
            Verify minimum wages and licensing in your jurisdiction and build them into your cost model. If you board or
            care for animals, price with <strong>animal bailee</strong> coverage in mind; many general liability policies exclude animals
            as “property of others” without an endorsement.
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Insurance</strong>: general liability, animal bailee, workers’ comp, property, cyber (if storing cards/PHI).</li>
            <li><strong>Licensing</strong>: local authority/health permits; boarding/daycare licensing where required; display policies.</li>
            <li><strong>Staffing guidance</strong>: publish ratios and safety practices; train and document.</li>
          </ul>
        </section>

        {/* TEMPLATES */}
        <section id="templates" className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">Part 12 — Price Menu Templates (Steal These)</h2>

          <h3 className="text-xl font-semibold mb-2">Daycare</h3>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li><strong>Full day:</strong> $X (includes temperament‑matched play, report card)</li>
            <li><strong>Half day (≤5 hrs):</strong> $Y</li>
            <li><strong>10‑day pack:</strong> $X×10 × 0.92 (8% savings; 60‑day expiry)</li>
            <li><strong>Add‑ons:</strong> enrichment +$Z, 1:1 walk +$Z, exit bath +$Z</li>
            <li><strong>Holiday peak:</strong> +$A per day; deposit required</li>
          </ul>

          <h3 className="text-xl font-semibold mb-2">Boarding</h3>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li><strong>Standard suite:</strong> $X/night (24‑hr window)</li>
            <li><strong>Premium suite:</strong> $X+Δ/night (more space; webcam)</li>
            <li><strong>Late checkout (after 11am):</strong> +½ day daycare rate</li>
            <li><strong>Add‑ons:</strong> enrichment blocks, photo pack, exit bath</li>
          </ul>

          <h3 className="text-xl font-semibold mb-2">Walking</h3>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>20/30/45/60 minute tiers; solo (+$) vs small group</li>
            <li>3×/week plan: −$ per walk; 5×/week plan: −$$ per walk</li>
          </ul>

          <h3 className="text-xl font-semibold mb-2">Pet Sitting</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>15/30/45‑min drop‑ins; meds; waste/litter service; photo updates</li>
            <li>Overnight in‑home block with evening + morning routines</li>
          </ul>
        </section>

        {/* COMMUNICATION */}
        <section id="communication" className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">Part 13 — How to Communicate Your Prices</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Publish inclusions/exclusions in plain language; avoid surprises.</li>
            <li>Show <em>why</em> you’re different (safety standards, training, enrichment philosophy, transparency).</li>
            <li>Use clean callouts: “Holiday peak +$10/night. 50% deposit. 72‑hour cancellation window.”</li>
            <li>When raising prices: 21–28 days’ notice; state drivers (wages, supplies, insurance) and new benefits.</li>
          </ul>
        </section>

        {/* PITFALLS */}
        <section id="pitfalls" className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">Part 14 — Common Pitfalls (And Easy Fixes)</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Copy‑pricing competitors</strong> without your own cost math → build the model first.</li>
            <li><strong>Ignoring card fees</strong> → they can erase your pack‑discount margin.</li>
            <li><strong>No peak pricing</strong> → you leave money on the table during holidays; also manage demand.</li>
            <li><strong>Overpromising capacity</strong> → unsafe or costly temp staffing; price to steady utilization, not peaks.</li>
            <li><strong>Never reviewing</strong> → schedule a quarterly input refresh and semiannual price review.</li>
          </ul>
        </section>

        {/* CHECKLIST */}
        <section id="checklist" className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">Part 15 — One‑Page Pricing Checklist</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Services scoped and timed</li>
            <li>Labor fully‑loaded; card fees modeled per channel</li>
            <li>Overhead allocation set; rent/insurance updated</li>
            <li>Capacity & safe ratios set; seasonality mapped</li>
            <li>Competitor matrix complete; differentiation clear</li>
            <li>Local incomes/CPI/RPP sanity‑checked</li>
            <li>Policies (deposit/cancel/holiday) published</li>
            <li>Bundles/memberships tested; real savings</li>
            <li>Quarterly inputs + semiannual price review on calendar</li>
          </ul>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">FAQ</h2>
          <p className="mb-3">
            <strong>Q:</strong> Should I be the cheapest? <br />
            <strong>A:</strong> Not if it kills your margin. Many pet parents buy on trust and outcomes (safety, structure,
            reporting). Compete on <em>value density</em>, not just price.
          </p>
          <p className="mb-3">
            <strong>Q:</strong> How often should I change prices? <br />
            <strong>A:</strong> Review inputs quarterly; move prices 1–2×/year unless you have a shock (rent/wages) that
            forces a mid‑cycle update.
          </p>
          <p>
            <strong>Q:</strong> Should I surcharge card fees? <br />
            <strong>A:</strong> Check your local rules. Many operators keep sticker prices clean and set menu prices to
            absorb fees while protecting margin.
          </p>
        </section>

        {/* SOURCES */}
        <section id="sources" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">📚 Sources (APA)</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            <li>
              Bureau of Labor Statistics. (2025, July). <em>Consumer Price Index Summary — June 2025</em>. https://www.bls.gov/news.release/cpi.nr0.htm
            </li>
            <li>
              Office for National Statistics. (2025, July). <em>Consumer price inflation, UK: June 2025</em>. https://www.ons.gov.uk/economy/inflationandpriceindices/bulletins/consumerpriceinflation/june2025
            </li>
            <li>
              Statistics Canada. (2025). <em>Consumer Price Index Portal</em>. https://www.statcan.gc.ca/en/subjects-start/prices_and_price_indexes/consumer_price_indexes
            </li>
            <li>
              Australian Bureau of Statistics. (2025). <em>Consumer Price Index, Australia (June quarter 2025)</em>. https://www.abs.gov.au/statistics/economy/price-indexes-and-inflation/consumer-price-index-australia
            </li>
            <li>
              Stats NZ. (2025, July). <em>Consumers price index: June 2025 quarter</em>. https://www.stats.govt.nz/information-releases/consumers-price-index-june-2025-quarter/
            </li>
            <li>
              U.S. Bureau of Economic Analysis. (n.d.). <em>Regional Price Parities, Real PCE, and Real Personal Income</em>. https://www.bea.gov/resources/methodologies/rpp
            </li>
            <li>
              OECD. (n.d.). <em>Purchasing Power Parities (PPPs)</em>. https://www.oecd.org/en/data/datasets/purchasing-power-parities.html
            </li>
            <li>
              U.S. Census Bureau. (2024/2025). <em>ACS Table S1901: Income in the Past 12 Months</em>. https://data.census.gov/table/ACSST1Y2023.S1901
            </li>
            <li>
              Bureau of Labor Statistics. (2025, Apr 2). <em>Occupational Employment and Wages — May 2024</em>. https://www.bls.gov/news.release/ocwage.htm
            </li>
            <li>
              U.S. Department of Labor. (2025). <em>State Minimum Wage Laws</em>. https://www.dol.gov/agencies/whd/minimum-wage/state
            </li>
            <li>
              GOV.UK. (2025). <em>National Minimum Wage and National Living Wage rates</em>. https://www.gov.uk/national-minimum-wage-rates
            </li>
            <li>
              Government of Canada. (2025). <em>Current and forthcoming general minimum wage rates</em>. https://minwage-salairemin.service.canada.ca/en/general.html
            </li>
            <li>
              Fair Work Commission (Australia). (2025). <em>National minimum wage orders — 2025</em>. https://www.fwc.gov.au/work-conditions/minimum-wages-and-conditions/national-minimum-wage/national-minimum-wage-orders
            </li>
            <li>
              Government of Ireland. (2025). <em>National minimum wage increase on 1 January 2025</em>. https://gov.ie/en/department-of-enterprise-tourism-and-employment/publications/national-minimum-wage-increase-on-1-january-2025/
            </li>
            <li>
              Employment New Zealand. (2025). <em>Minimum wage rates and types</em>. https://www.employment.govt.nz/pay-and-hours/pay-and-wages/minimum-wage/minimum-wage-rates-and-types
            </li>
            <li>
              Stripe. (2025). <em>Pricing & Fees</em>. https://stripe.com/pricing
            </li>
            <li>
              Square. (2025). <em>Understanding our fees</em>. https://squareup.com/us/en/payments/our-fees
            </li>
            <li>
              The Hartford. (2025). <em>Pet business insurance (animal bailee coverage)</em>. https://www.thehartford.com/business-insurance/pet-business-insurance
            </li>
            <li>
              AVMA PLIT. (2025). <em>Animal Bailee (Professional Extension)</em>. https://www.avmaplit.com/products/animal-bailee/
            </li>
            <li>
              U.S. Small Business Administration. (2024/2025). <em>Apply for licenses and permits</em>. https://www.sba.gov/business-guide/launch-your-business/apply-licenses-permits
            </li>
            <li>
              GOV.UK. (2025). <em>Dog kennel boarding licensing: statutory guidance</em>. https://www.gov.uk/government/publications/animal-activities-licensing-guidance-for-local-authorities/dog-kennel-boarding-licensing-statutory-guidance-for-local-authorities
            </li>
            <li>
              Buckinghamshire Council. (2025). <em>Day care — pre‑inspection information (staff:dog ratio guidance)</em>. https://www.buckinghamshire.gov.uk/documents/37634/Pre_Inspection_Information_-_Day_Care.pdf
            </li>
            <li>
              City & County of San Francisco. (2025). <em>Health permit for kennels/boarding facilities</em>. https://www.sf.gov/get-permit-run-pet-hospital-dog-kennel-or-animal-boarding-facility
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