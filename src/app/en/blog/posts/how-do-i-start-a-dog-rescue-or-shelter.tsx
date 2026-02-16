'use client';

import Head from 'next/head';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function HowDoIStartADogRescueOrShelter() {
  const locale = useLocale();

  const title =
    'How Do I Start a Dog Rescue or Shelter? Costs, Legal Requirements, Qualifications, Sourcing, and Marketing Across Six Countries';
  const date = 'August 29, 2025';
  const categories = ['rescue', 'owner', 'boarding', 'daycare'] as const;

  const categoryLabels: Record<string, string> = {
    owner: 'Pet Owners',
    boarding: 'Boarding',
    daycare: 'Daycare',
    rescue: 'Rescues',
    vet: 'Veterinary Clinics',
    sitter: 'Pet Sitters',
    walker: 'Dog Walkers',
    breeder: 'Breeders',
  };

  const description =
    'An in-depth, practical roadmap to launching a foster-based rescue or a brick-and-mortar shelter: realistic startup budgets, whether you can begin from home, state and country licensing examples (US, UK, Ireland, Canada, Australia, New Zealand), required qualifications, where to source dogs ethically, and how to market beyond social media. Includes operations checklists and a 12-month execution plan.';

  return (
    <>
      <Head>
        <title>{title} – Petunia Blog</title>
        <meta name="description" content={description} />
        {/* Per user preference, avoid the word "index" here. */}
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
            <li><a href="#startup-paths" className="underline hover:opacity-80">Startup Paths</a></li>
            <li><a href="#budget" className="underline hover:opacity-80">Budget &amp; Cost Models</a></li>
            <li><a href="#home" className="underline hover:opacity-80">Can You Start at Home?</a></li>
            <li><a href="#law" className="underline hover:opacity-80">Legal &amp; Licensing (6 Countries)</a></li>
            <li><a href="#qualifications" className="underline hover:opacity-80">Qualifications &amp; Team</a></li>
            <li><a href="#sourcing" className="underline hover:opacity-80">Sourcing Dogs Ethically</a></li>
            <li><a href="#ops" className="underline hover:opacity-80">Operations &amp; Welfare Standards</a></li>
            <li><a href="#facility" className="underline hover:opacity-80">Facility, Equipment, IT</a></li>
            <li><a href="#marketing" className="underline hover:opacity-80">Marketing: Beyond Social Media</a></li>
            <li><a href="#risk" className="underline hover:opacity-80">Risk, Insurance, Compliance</a></li>
            <li><a href="#plan" className="underline hover:opacity-80">12-Month Launch Plan</a></li>
            <li><a href="#faq" className="underline hover:opacity-80">FAQ</a></li>
            <li><a href="#sources" className="underline hover:opacity-80">Sources (Selected)</a></li>
          </ul>
        </nav>

        {/* TL;DR */}
        <section id="tldr" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Short Answer (TL;DR)</h2>
          <p className="mb-3">
            Yes, you can start a rescue, and the most practical path is a <strong>foster-based model</strong> first. Expect to invest
            <strong> USD $5k–$25k</strong> up front for legal setup, basic gear, transport, veterinary float, software, and insurance, then
            fund ongoing medical care with donations and adoption fees. A dedicated facility multiplies costs to <strong>$50k–$250k+</strong>
            for build-out, kenneling, fencing, HVAC, sanitation, and staffing. Begin with clear governance, a veterinarian-of-record,
            published welfare protocols, and transparent finance. Social media matters, but <strong>it is not sufficient alone</strong>—pair it with
            search-optimized content, local partnerships, email, and community events for sustainable adoptions and donations.
          </p>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Petunia tip:</strong> Even a tiny rescue can feel organized with shared SOPs (cleaning, isolation, intake), a cloud doc for case notes,
            and a weekly board dashboard tracking intakes, live release rate, medical spend, and cash on hand.
          </div>
        </section>

        {/* Startup paths */}
        <section id="startup-paths" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Two Startup Paths: Foster-Based vs. Facility-Based</h2>
          <h3 className="text-lg font-semibold mt-2 mb-1">1) Foster-Based Rescue (lean, fast to launch)</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>Pros:</strong> Lowest fixed costs; scalable volunteer capacity; dogs decompress in homes; flexible geography.</li>
            <li><strong>Cons:</strong> Diffuse oversight; variable biosecurity; surge capacity depends on foster availability.</li>
            <li><strong>Essentials:</strong> Foster screening, training, home-check checklist, PPE/cleaning kits, 24/7 phone tree, clear medical approval flow.</li>
          </ul>
          <h3 className="text-lg font-semibold mt-2 mb-1">2) Brick-and-Mortar Shelter (capital-intensive, predictable flow)</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Pros:</strong> Centralized care, intake control, quarantine rooms, adoption hours, on-site training.</li>
            <li><strong>Cons:</strong> High capex and opex; staffing; inspections; zoning and neighbors; facilities maintenance.</li>
            <li><strong>Essentials:</strong> Zoning approval, sanitation design (separate clean/dirty paths), HVAC &amp; pressure zones, isolation, laundry, storage.</li>
          </ul>
        </section>

        {/* Budget */}
        <section id="budget" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Budget &amp; Cost Models (Ballpark)</h2>
          <p className="mb-3">
            Costs vary by region and currency. These ranges help with ballpark planning; always price locally.
          </p>
          <h3 className="text-lg font-semibold mt-2 mb-1">Foster-Based Rescue (starter, USD)</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Legal formation &amp; accounting setup: $500–$2,500 (plus charity/501(c)(3) or national equivalent filing fees).</li>
            <li>Insurance (general liability; foster rider): ~$500–$1,700/yr typical small-nonprofit range. </li>
            <li>Transport van (used) or mileage reimbursements; crates, x-pens, ID tags: $2,000–$10,000.</li>
            <li>Medical float per active dog: $150–$400 (vaccines, deworm, preventives, microchip) before spay/neuter.</li>
            <li>Software (adoptions, scheduling, email, bookkeeping): $50–$300/mo.</li>
            <li>Marketing starter (branding, photos, launch site): $500–$3,000.</li>
          </ul>
          <h3 className="text-lg font-semibold mt-2 mb-1">Facility-Based Shelter (starter, USD)</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Leasehold improvements, kennels/runs, fencing (chain-link often $10–$40/ft installed), drainage, laundry: $25k–$150k+.</li>
            <li>Caging/kennels: $700–$2,000 per run (quality varies).</li>
            <li>HVAC, negative-pressure isolation, hot-water capacity: $10k–$60k+ depending on building.</li>
            <li>Medical startup kit (exam table, fridge, scales, consumables): $3k–$15k.</li>
            <li>Insurance (GL, property, volunteer accident, D&amp;O): $1,000–$6,000/yr+ depending on limits.</li>
          </ul>
          <p className="text-sm text-gray-600">
            Notes: Recent U.S. pricing shows low-cost spay/neuter commonly $95–$325 per dog; microchips typically $20–$50 at clinics; general liability for small nonprofits ~\$500/yr+ baseline; chain-link fencing $10–$40/ft installed. These are references, not quotes.
          </p>
        </section>

        {/* Home start */}
        <section id="home" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Can You Start Out of Your Home and Save Money?</h2>
          <p className="mb-3">
            You can begin as a <strong>home-based, foster-network rescue</strong>, which dramatically reduces overhead. Focus on governance, foster SOPs,
            medical protocols, and insurance before scaling. Running a <em>kennel-like</em> operation from a residence often violates local zoning
            and noise ordinances. The practical compromise: centralize admin at home, but place dogs in vetted foster homes, hold adoption
            events in partner locations, and rent short-term clinic space for spay/neuter days where permitted.
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Check municipal rules (zoning, noise, waste disposal). Many areas cap animals on site and require special permits.</li>
            <li>Keep <strong>isolation options</strong> for contagious intake (bathroom with exhaust fan, separate entry/exit protocols, PPE).</li>
            <li>Use a <strong>veterinarian-of-record</strong> and follow published treatment/triage decision trees to protect animals and volunteers.</li>
          </ul>
        </section>

        {/* Law & licensing */}
        <section id="law" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Legal &amp; Licensing — Highlights Across 6 Countries</h2>

          <h3 className="text-lg font-semibold mt-2 mb-1">United States (examples)</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>Entity &amp; charity status:</strong> Incorporate at state level; seek IRS 501(c)(3) recognition (Form 1023/1023-EZ) for tax-deductible donations.</li>
            <li><strong>State shelter/rescue rules:</strong> Vary widely. Examples include <em>New York</em> mandatory rescue/shelter registration; <em>Pennsylvania</em> kennel licensing with inspections; <em>Colorado</em> PACFA licensing covering shelters and rescues.</li>
            <li><strong>Movement/import:</strong> For interstate transport, destination-state CVI and rabies rules may apply. For international intake, the updated CDC dog-import rule (Aug 1, 2024) adds microchip, age, forms, and rabies documentation based on origin country.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">United Kingdom &amp; Ireland</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>Scotland:</strong> Licensable <em>animal rehoming activities</em> (apply via local authority); thresholds and guidance published by the Scottish Government.</li>
            <li><strong>England:</strong> 2018 regulations license pet sales, boarding, day care, breeding, exhibition—<em>rescues/rehoming centres are not yet within that framework</em>; proposals for “animal welfare establishments” are under discussion.</li>
            <li><strong>Wales:</strong> LAIA 2021 governs pet sales; Welsh Government has consulted on regulating rescue/rehoming (sector currently moving toward reform).</li>
            <li><strong>Northern Ireland:</strong> DAERA plan (2025–27) signposts forthcoming reforms; expect registration/licensing proposals for rescues.</li>
            <li><strong>Ireland (Republic):</strong> Sellers/suppliers of ≥6 pet animals per year must <em>register</em> with DAFM; applies to charitable rehoming organisations. Ads must carry required info (e.g., microchip for dogs). Charities register under the Charities Act.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Canada</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Animal-welfare enforcement is provincial/territorial (e.g., Ontario PAWS O. Reg. 444/19 standards of care; BC PCA Act). Municipal kennel/pound bylaws often apply.</li>
            <li>Charity registration through the CRA (animal-welfare guidance for eligibility and public benefit).</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Australia</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Register with the <em>ACNC</em> to become a charity; state fundraising licences may also apply.</li>
            <li><em>Victoria</em>: binding Code of Practice for Shelters &amp; Pounds under the Domestic Animals Act; <em>NSW</em> and <em>QLD</em> have enforceable welfare frameworks and codes under POCTA/A-CAP Acts.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">New Zealand</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li><em>Animal Welfare Act 1999</em> plus <em>Code of Welfare: Dogs (2018)</em> set standards for care.</li>
            <li><em>Dog Control Act 1996</em> governs registration/microchipping; Charities Services regulates charity registration under the Charities Act 2005.</li>
          </ul>

          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Practical rule:</strong> Always check <em>national/central</em> charity and welfare law, <em>regional/provincial</em> animal-care statutes, and <em>local</em> bylaws (zoning, kennels, waste). Where in doubt, ask the competent authority <em>in writing</em> and file/retain their reply.
          </div>
        </section>

        {/* Qualifications */}
        <section id="qualifications" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Qualifications &amp; Team Structure</h2>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>Board &amp; governance:</strong> Chair, treasurer, secretary; conflict-of-interest and financial controls; quarterly risk review.</li>
            <li><strong>Veterinarian-of-record:</strong> Written standing orders for intake, vaccination, deworm, pain control, isolation, and euthanasia criteria.</li>
            <li><strong>Medical lead (could be the vet or trained nurse):</strong> Drug log, controlled-substances policy, biosecurity training.</li>
            <li><strong>Foster coordinator:</strong> Recruiting, onboarding, home checks, hotline triage, supply logistics.</li>
            <li><strong>Behavior lead:</strong> Standardized assessments, decompression plans, enrichment schedules, bite-risk policy.</li>
            <li><strong>Data/IT:</strong> Case management, consent forms, microchip registration, vaccine expiry reminders, report dashboards.</li>
          </ul>
          <p className="text-sm text-gray-600">
            Align protocols with the 2022 ASV Guidelines (housing, disease control, capacity for care, outcome decision-making).
          </p>
        </section>

        {/* Sourcing */}
        <section id="sourcing" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Where Do You Source Dogs to Rescue and Rehome—Ethically?</h2>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>Municipal shelters/pounds:</strong> Transfer MOUs and scheduled pulls reduce length of stay and avoid last-minute scrambles.</li>
            <li><strong>Owner surrenders:</strong> Clear criteria (medical/behavior capacity) and a waitlist with triage questions; require proof of ownership.</li>
            <li><strong>Inter-regional transfers:</strong> When importing across borders or oceans, follow health certificates, vaccinations, and (for the U.S.) CDC rules (age, microchip, documentation) before booking travel.</li>
            <li><strong>Local vets and trainers:</strong> Referrals for medical/behavior cases you are equipped to handle; no “rescue hoarding.”</li>
          </ul>
          <p>
            Set policy that you will not source from breeders selling directly to you for profit. Prioritize community need, medical urgency, and adoptability signals (with honesty about lifetime care).
          </p>
        </section>

        {/* Ops & welfare */}
        <section id="ops" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Operations &amp; Welfare Standards (Your Non-Negotiables)</h2>
          <ol className="list-decimal pl-5 space-y-2 mb-3">
            <li><strong>Capacity for care:</strong> Do not exceed space/staffing that permits daily cleaning, enrichment, and timely vetting.</li>
            <li><strong>Intake flow:</strong> Health exam, vaccs, parasite control, microchip, photo, unique ID, quarantine/isolation decision.</li>
            <li><strong>Housing:</strong> Separate clean/dirty paths, species/size segregation, noise reduction, weather protection.</li>
            <li><strong>Infection control:</strong> SOPs for outbreaks (parvo, kennel cough), PPE carts, disinfectant dwell times, laundry protocol.</li>
            <li><strong>Behavior &amp; enrichment:</strong> Daily plan (sniff walks, food puzzles, training minutes); record stress signs; decompression timelines.</li>
            <li><strong>Outcome ethics:</strong> Transparent criteria for adoption, transfer, long-term sanctuary care, or humane euthanasia.</li>
          </ol>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Petunia tip:</strong> Track every dog&#39;s “7s”: 7-day intake check, 7 enrichment logs, 7 photos/notes for marketing. Consistency saves lives.
          </div>
        </section>

        {/* Facility */}
        <section id="facility" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Facility, Equipment, and IT Stack</h2>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>Space plan:</strong> Intake, isolation, healthy housing, meet-and-greet, storage, laundry, clinical nook, waste handling.</li>
            <li><strong>Kennels &amp; fencing:</strong> Durable, cleanable surfaces; chain-link heights and privacy slats; secure transfer corridors.</li>
            <li><strong>HVAC:</strong> Adequate fresh-air exchange; negative pressure in isolation; temperature/humidity monitoring.</li>
            <li><strong>Kennel math:</strong> Design to your realistic daily care minutes per dog, not just square footage.</li>
            <li><strong>Software:</strong> Case management (intake→adoption), e-signs, microchip registry, volunteer shifts, email/SMS, accounting, donor CRM.</li>
          </ul>
        </section>

        {/* Marketing */}
        <section id="marketing" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Marketing: Is Social Media Enough?</h2>
          <p className="mb-3">
            Social media is necessary but not sufficient. Treat it as the top of a funnel that feeds owned channels and real-world partnerships.
          </p>
          <ol className="list-decimal pl-5 space-y-2 mb-3">
            <li><strong>Google Business Profile:</strong> Post adoptables and hours; add “adoptable dogs near me” keywords in your description.</li>
            <li><strong>Website with SEO:</strong> Create evergreen pages: adoption process, fees, vetting included, surrender policy, volunteer/foster sign-up.</li>
            <li><strong>Email list first:</strong> Collect emails at every touchpoint; send a weekly “New Faces Friday.”</li>
            <li><strong>Partnerships:</strong> Vets, trainers, groomers, pet-friendly cafes, breweries—co-host events and cross-post adoptables.</li>
            <li><strong>PR basics:</strong> 1-page media sheet, high-quality photos, and a short origin story. Pitch local reporters monthly.</li>
            <li><strong>Data-driven creative:</strong> Short clips showing intake→rehab→adoption; clear CTAs; donation match drives.</li>
          </ol>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Petunia tip:</strong> Build a reusable “adoptable profile” template and require 5 assets per dog: 2 photos, 1 15-sec video, 3 personality bullets, and a foster quote.
          </div>
        </section>

        {/* Risk */}
        <section id="risk" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Risk, Insurance, and Compliance</h2>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>Insurance:</strong> General liability; volunteer accident; D&amp;O for the board; property if you lease/own; commercial auto if you run a van.</li>
            <li><strong>Contracts:</strong> Adoption agreement; foster agreement with medical authorization; surrender form; media consent; transporter MOU.</li>
            <li><strong>Finance controls:</strong> Dual-signature thresholds; receipt uploads; monthly board review; restricted funds log.</li>
            <li><strong>Records:</strong> Unique ID, microchip, vaccines, treatments, behavior notes, adopter contact, and post-adoption follow-ups.</li>
            <li><strong>Safety:</strong> Bite-incident protocol; incident reports; PPE and hazard signage; after-hours escalation plan.</li>
          </ul>
        </section>

        {/* Plan */}
        <section id="plan" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">A 12-Month Launch Plan (Lean Foster-Based)</h2>
          <ol className="list-decimal pl-5 space-y-2 mb-3">
            <li><strong>Month 1–2:</strong> Form entity; draft bylaws; open bank; apply for charity status; recruit 3–5 core board/lead volunteers.</li>
            <li><strong>Month 2–3:</strong> Vet-of-record; write SOPs; select software; build website and GBP; launch email list.</li>
            <li><strong>Month 3–4:</strong> Foster recruitment sprint (orientation + home checks); assemble starter medical kits; transport plan.</li>
            <li><strong>Month 4–6:</strong> First 10–20 dogs: intake cadence, isolation, enrichment; measure LOS (length of stay) and adoption conversion.</li>
            <li><strong>Month 6–9:</strong> Quarterly fundraising campaign; add volunteer shift leads; PR outreach; refine adoption pricing.</li>
            <li><strong>Month 9–12:</strong> Add medical partners (spay/neuter days); consider limited facility lease only if demand and cash flow justify.</li>
          </ol>
          <p className="text-sm text-gray-600">
            Facility phase-in: only when you consistently have more fosters than dogs waiting and your cash runway &gt; 6 months of opex.
          </p>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">FAQ</h2>

          <p className="mb-3">
            <strong>How much should I charge for adoption?</strong><br />
            Price to cover typical medical (vaccs, microchip, deworm, spay/neuter) plus a contribution to overhead. Publish what vetting is included. Offer fee-waived promotions only with a donor match so cash flow is protected.
          </p>

          <p className="mb-3">
            <strong>Is transport importing risky?</strong><br />
            It can be if paperwork or disease control is weak. Follow destination rules (CVI/rabies) and, for the U.S., CDC dog-import requirements—age ≥ 6 months, microchip, forms, and vaccinations/documentation aligned to origin risk.
          </p>

          <p className="mb-3">
            <strong>Do I need qualifications?</strong><br />
            No specific degree is universally required, but you need a veterinarian-of-record and training aligned to the ASV Guidelines (biosecurity, behavior, humane handling). Charity trustees/directors must meet your country&#39;s fit-and-proper standards.
          </p>

          <p className="mb-3">
            <strong>Is social media enough?</strong><br />
            It&#39;s the start, not the finish. Pair it with SEO content, a weekly email, Google Business posts, and local partnerships with vets and small businesses that can host adopt-a-pet events.
          </p>

          <p className="text-xs text-gray-600">
            Educational content only. Regulations vary by jurisdiction and change over time. Always confirm requirements with your local authority and licensed professionals.
          </p>
        </section>

        {/* Sources */}
        <section id="sources" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">📚 Sources (Selected)</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            <li>Scotland animal rehoming licensing (regs &amp; guidance). <a href="https://www.legislation.gov.uk/sdsi/2021/9780111048474" target="_blank" rel="noopener noreferrer">Regulations</a> | <a href="https://www.gov.scot/publications/animal-welfare-licensing-activities-involving-animals-scotland-regulations-2021-guidance-animal-rehoming-activities/" target="_blank" rel="noopener noreferrer">Guidance</a></li>
            <li>England animal activities licensing overview (what is covered). <a href="https://www.gov.uk/government/publications/animal-activities-licensing-guidance-for-local-authorities" target="_blank" rel="noopener noreferrer">GOV.UK</a></li>
            <li>Wales LAIA 2021 &amp; consultation on rescue/rehoming regulation. <a href="https://www.gov.wales/sites/default/files/publications/2021-10/the-animal-welfare-licensing-of-activities-involving-animals-wales-regulation-2021-guidance.pdf" target="_blank" rel="noopener noreferrer">Guidance</a> | <a href="https://www.gov.wales/sites/default/files/consultations/2025-02/licensing-of-animal-welfare-establishments-summary-of-responses.pdf" target="_blank" rel="noopener noreferrer">Consultation summary</a></li>
            <li>Northern Ireland animal welfare pathway &amp; proposals. <a href="https://www.daera-ni.gov.uk/news/muir-sets-out-pathway-stronger-animal-welfare-standards" target="_blank" rel="noopener noreferrer">DAERA</a></li>
            <li>Ireland S.I. No. 681/2019 (sale/supply registration incl. charities). <a href="https://www.irishstatutebook.ie/eli/2019/si/681/made/en/print" target="_blank" rel="noopener noreferrer">Irish Statute Book</a> | <a href="https://www.gov.ie/en/department-of-agriculture-food-and-the-marine/publications/rules-on-the-sale-supply-and-advertising-of-pet-animals/" target="_blank" rel="noopener noreferrer">DAFM explainer</a></li>
            <li>Canada provincial frameworks &amp; CRA charity guidance. <a href="https://www.ontario.ca/laws/regulation/190444" target="_blank" rel="noopener noreferrer">Ontario O. Reg. 444/19</a> | <a href="https://www.bclaws.gov.bc.ca/civix/document/id/complete/statreg/96372_01" target="_blank" rel="noopener noreferrer">BC PCA Act</a> | <a href="https://www.canada.ca/en/revenue-agency/services/charities-giving/charities/policies-guidance/promotion-animal-welfare-charitable-registration.html" target="_blank" rel="noopener noreferrer">CRA guidance</a></li>
            <li>Australia ACNC charity registration; Victoria shelter code; QLD A-CAP Act. <a href="https://www.acnc.gov.au/for-charities/start-charity/apply" target="_blank" rel="noopener noreferrer">ACNC</a> | <a href="https://agriculture.vic.gov.au/livestock-and-animals/animal-welfare-victoria/domestic-animals-act/codes-of-practice/code-of-practice-for-the-management-of-dogs-and-cats-in-shelters-and-pounds" target="_blank" rel="noopener noreferrer">Vic Code</a> | <a href="https://www.legislation.qld.gov.au/view/pdf/current/act-2001-064" target="_blank" rel="noopener noreferrer">QLD Act</a></li>
            <li>New Zealand Animal Welfare Act; Code of Welfare: Dogs; Dog Control Act; Charities Services. <a href="https://www.mpi.govt.nz/animals/animal-welfare/codes/all-animal-welfare-codes/code-of-welfare-dogs/" target="_blank" rel="noopener noreferrer">MPI Dogs Code</a> | <a href="https://www.legislation.govt.nz/act/public/1996/0013/latest/DLM374410.html" target="_blank" rel="noopener noreferrer">Dog Control Act</a> | <a href="https://www.charities.govt.nz/ready-to-register/starting-a-new-charity" target="_blank" rel="noopener noreferrer">Charities Services</a></li>
            <li>U.S. examples: NY rescue registration; PA kennel licensing; CO PACFA; IRS charity recognition. <a href="https://agriculture.ny.gov/animals/shelter-and-rescue-registration" target="_blank" rel="noopener noreferrer">NY Ag &amp; Markets</a> | <a href="https://www.pa.gov/services/pda/apply-for-a-new-kennel-license.html" target="_blank" rel="noopener noreferrer">PA Kennel License</a> | <a href="https://www.sos.state.co.us/CCR/Upload/AGORequest/Redline2022-00105.pdf" target="_blank" rel="noopener noreferrer">CO PACFA rules</a> | <a href="https://www.irs.gov/forms-pubs/about-form-1023" target="_blank" rel="noopener noreferrer">IRS 1023</a></li>
            <li>U.S. transport/import: CVI &amp; CDC dog-import rules (Aug 1, 2024). <a href="https://www.avma.org/resources-tools/animal-health-and-welfare/animal-travel-transport/certificates-veterinary-inspection" target="_blank" rel="noopener noreferrer">AVMA CVI</a> | <a href="https://www.cdc.gov/importation/dogs/dog-import-form-instructions.html" target="_blank" rel="noopener noreferrer">CDC Dog Import Form</a> | <a href="https://www.federalregister.gov/documents/2024/05/13/2024-09676/control-of-communicable-diseases-foreign-quarantine-importation-of-dogs-and-cats" target="_blank" rel="noopener noreferrer">Final Rule</a></li>
            <li>Standards of care: 2022 ASV Guidelines. <a href="https://www.sheltervet.org/guidelines-for-standards-of-care-in-animal-shelters" target="_blank" rel="noopener noreferrer">ASV overview</a> | <a href="https://www.aspcapro.org/sites/default/files/2023-05/asvguidelinessecondedition-2022.pdf" target="_blank" rel="noopener noreferrer">PDF</a></li>
            <li>Cost anchors: spay/neuter &amp; fencing; nonprofit insurance ranges. <a href="https://www.forbes.com/advisor/pet-insurance/pet-care/cost-to-neuter-a-dog/" target="_blank" rel="noopener noreferrer">Forbes Advisor</a> | <a href="https://homeguide.com/costs/fencing-prices" target="_blank" rel="noopener noreferrer">HomeGuide fencing</a> | <a href="https://www.insureon.com/nonprofit-business-insurance/cost" target="_blank" rel="noopener noreferrer">Insureon nonprofit cost</a></li>
          </ul>
          <p className="text-xs text-gray-600 mt-4">
            Sources are provided for general education; confirm current rules with your local authority before operating.
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
