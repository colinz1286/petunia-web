'use client';

import Head from 'next/head';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function CavalierKingCharlesOwnershipCosts() {
  const locale = useLocale();

  const title =
    'Cavalier King Charles Ownership Costs: Vet Bills, Grooming, and Boarding';
  const date = 'September 18, 2025';
  const description =
    'A full, operator-grade breakdown of Cavalier King Charles Spaniel ownership costs: realistic budgets for vet care, grooming, food, insurance, daycare/boarding, travel, training, supplies, and senior care—plus cost-control systems that keep comfort high without surprise bills.';

  const categoryLabels: Record<string, string> = {
    owner: 'Pet Owners',
    boarding: 'Boarding',
    budgeting: 'Budgeting',
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
      <Head>
        <title>{title} – Petunia Blog</title>
        <meta name="description" content={description} />
        {/* House rule: do not use the forbidden word; use "all" */}
        <meta name="robots" content="all" />
       
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
      </Head>

      <main className="max-w-3xl mx-auto px-4 py-10 text-[#2c4a30]">
        {/* Meta */}
        <p className="text-sm text-gray-500 mb-2">Posted on {date}</p>
        <h1 className="text-3xl font-bold mb-4">{title}</h1>

        {/* Category pills (explicit; no array mapping needed) */}
        <div className="flex flex-wrap gap-2 mb-6">
          <span className="text-xs bg-[#e4dbcb] text-[#2c4a30] px-3 py-1 rounded-full border border-[#d9cfc2]">
            {categoryLabels.owner}
          </span>
          <span className="text-xs bg-[#e4dbcb] text-[#2c4a30] px-3 py-1 rounded-full border border-[#d9cfc2]">
            {categoryLabels.budgeting}
          </span>
          <span className="text-xs bg-[#e4dbcb] text-[#2c4a30] px-3 py-1 rounded-full border border-[#d9cfc2]">
            {categoryLabels.boarding}
          </span>
        </div>

        {/* Local anchor nav (explicit list; no loops) */}
        <nav className="mb-8 text-sm">
          <ul className="flex flex-wrap gap-3">
            <li><a href="#tl-dr" className="underline hover:opacity-80">TL;DR</a></li>
            <li><a href="#why-cavaliers" className="underline hover:opacity-80">Why Cavaliers Have Distinct Costs</a></li>
            <li><a href="#startup" className="underline hover:opacity-80">Start-Up Costs (First 60 Days)</a></li>
            <li><a href="#recurring" className="underline hover:opacity-80">Recurring Monthly &amp; Annual Costs</a></li>
            <li><a href="#health-risks" className="underline hover:opacity-80">Health Risks That Drive Budgets</a></li>
            <li><a href="#grooming" className="underline hover:opacity-80">Grooming &amp; Coat Care</a></li>
            <li><a href="#training" className="underline hover:opacity-80">Training &amp; Enrichment</a></li>
            <li><a href="#boarding" className="underline hover:opacity-80">Daycare &amp; Boarding</a></li>
            <li><a href="#lifestage" className="underline hover:opacity-80">Life-Stage Budgets (Puppy → Senior)</a></li>
            <li><a href="#sample-budgets" className="underline hover:opacity-80">Sample Yearly Budgets</a></li>
            <li><a href="#save-smart" className="underline hover:opacity-80">How to Save Without Cutting Corners</a></li>
            <li><a href="#red-flags" className="underline hover:opacity-80">Red Flags &amp; Surprise Bills</a></li>
            <li><a href="#templates" className="underline hover:opacity-80">Budget Templates &amp; Checklists</a></li>
            <li><a href="#faq" className="underline hover:opacity-80">FAQ</a></li>
            <li><a href="#sources" className="underline hover:opacity-80">Sources &amp; Notes</a></li>
          </ul>
        </nav>

        {/* TL;DR */}
        <section id="tl-dr" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Short Answer (TL;DR)</h2>
          <p className="mb-4">
            A well-cared-for Cavalier King Charles Spaniel typically costs <strong>$2,200–$4,300 per year</strong> in routine
            expenses (food, parasite prevention, wellness exams, basic grooming, insurance, and a modest training/boarding
            cadence). The wide range stems from location, insurance choices, grooming frequency, and how often you travel or
            use daycare. Acute or chronic health conditions—especially heart disease (mitral valve), eye issues, and ear/skin
            care—can add <strong>$500–$3,000+</strong> in a single year. The most reliable way to control costs is to build
            simple, repeatable systems: measured feeding, weight control, ear care every week, regular dental maintenance,
            parasite prevention, and an emergency fund reserved for unexpected care.
          </p>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Petunia tip:</strong> Store your Cavalier&#39;s care plan—parasite refills, ear cleaning cadence, grooming
            appointments, and boarding preferences—in Petunia so everyone in your family and care network follows the same
            playbook. Consistency shrinks surprise bills.
          </div>
        </section>

        {/* Why Cavaliers */}
        <section id="why-cavaliers" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Why Cavaliers Have Distinct Costs</h2>
          <p className="mb-4">
            Cavaliers are gentle, people-oriented spaniels with glorious feathering and soft temperaments. Their popularity
            comes with specific cost patterns: regular grooming to prevent mats in the ears, trousers, and tail; a high rate
            of <strong>mitral valve disease</strong> that can progress to heart enlargement with medication needs; a tendency
            toward <strong>ear problems</strong> due to long, pendulous ears; and a coat that benefits from frequent brushing
            to avoid clip-downs. None of this is a reason to panic. It simply means your budget should assume preventive care
            and set aside a steady reserve for cardiology consults later in life, even if you hope not to need them.
          </p>
        </section>

        {/* Start-Up */}
        <section id="startup" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Start-Up Costs (First 60 Days)</h2>
          <p className="mb-4">
            Getting a Cavalier settled requires a few quality purchases and initial veterinary work. Prices vary by region;
            the ranges below reflect common urban/suburban costs in North America.
          </p>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li><strong>Initial exam &amp; vaccines:</strong> $150–$350 per visit; puppies may need multiple visits.</li>
            <li><strong>Spay/neuter (if applicable):</strong> $300–$900 depending on weight, clinic, and region.</li>
            <li><strong>Microchip &amp; license:</strong> $40–$100.</li>
            <li><strong>Crate/pen, bed, bowls, leash/harness:</strong> $150–$300. Choose a well-fitted Y-front harness.</li>
            <li><strong>Grooming starter kit:</strong> $60–$150 (slicker brush, pin brush, metal comb, nail tools, gentle shampoo).</li>
            <li><strong>Training plan:</strong> $150–$500 for a manners course or private sessions to build calm habits.</li>
            <li><strong>Insurance enrollment:</strong> typically $35–$90 per month starting immediately to avoid exclusions.</li>
          </ul>
          <p>
            Expect an initial outlay of <strong>$900–$2,300</strong> excluding acquisition costs. Building the routine now
            (brushing, ear care, dental chews, measured meals) saves money later.
          </p>
        </section>

        {/* Recurring */}
        <section id="recurring" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Recurring Monthly &amp; Annual Costs</h2>
          <p className="mb-3">
            The easiest way to keep finances predictable is to think in monthly lines. Here is a realistic breakdown.
          </p>

          <h3 className="text-lg font-semibold mt-2 mb-1">Food &amp; treats</h3>
          <p className="mb-2">
            Cavaliers are small to medium and do not eat huge volumes, but quality still matters. Expect <strong>$35–$75</strong>
            monthly for complete, balanced food. Keep treats tiny; count calories toward the daily total to avoid weight-related
            health costs later.
          </p>

          <h3 className="text-lg font-semibold mt-2 mb-1">Parasite prevention</h3>
          <p className="mb-2">
            Heartworm, flea, and tick products typically run <strong>$15–$35</strong> per month depending on region and product
            type. Prevention is far cheaper than treatment for flea allergy dermatitis or tick-borne disease.
          </p>

          <h3 className="text-lg font-semibold mt-2 mb-1">Routine veterinary care</h3>
          <p className="mb-2">
            Annual wellness exams with core vaccines and fecal testing usually total <strong>$200–$400</strong>. Add a dental
            cleaning every 12–18 months for <strong>$400–$1,200</strong> depending on clinic and dental disease severity.
            Cavaliers can collect tartar quickly; routine dental care prevents costly extractions.
          </p>

          <h3 className="text-lg font-semibold mt-2 mb-1">Insurance vs. self-funding</h3>
          <p className="mb-2">
            Many families choose accident/illness insurance with a wellness add-on. Typical premiums run <strong>$35–$90</strong>
            monthly with deductibles in the $250–$500 range and reimbursement at 70–90%. If you self-fund, auto-transfer
            <strong> $50–$150</strong> monthly to a veterinary sinking fund and leave it untouched.
          </p>

          <h3 className="text-lg font-semibold mt-2 mb-1">Grooming</h3>
          <p className="mb-2">
            Expect a professional session every 6–8 weeks at <strong>$60–$120</strong> depending on services and location, plus
            at-home brushing several times per week. Cavaliers look elegant with feathering maintained; shaving is avoidable if
            you keep mats from forming.
          </p>

          <h3 className="text-lg font-semibold mt-2 mb-1">Training &amp; enrichment</h3>
          <p className="mb-2">
            Budget <strong>$5–$25</strong> monthly for puzzle toys, chews, and occasional refreshers. One well-run group class
            each year keeps manners sharp and social skills current.
          </p>
        </section>

        {/* Health drivers */}
        <section id="health-risks" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Health Risks That Drive Budgets</h2>
          <p className="mb-4">
            You cannot predict any single dog&#39;s medical path, but you can budget for probabilities. Cavaliers are famous for
            sweetness and lap-dog charm, yet they deserve strategic planning around the following:
          </p>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li>
              <strong>Mitral valve disease (MVD):</strong> age-related heart valve degeneration; early detection via auscultation
              at wellness visits. If a murmur is found, your veterinarian may recommend radiographs, blood pressure checks, or a
              cardiology referral with echocardiography. Once medication is needed, monthly costs can add <strong>$30–$150</strong>.
            </li>
            <li>
              <strong>Ear disease:</strong> long ears trap moisture. Weekly checks and routine cleaning reduce infections. Chronic
              otitis can require cytology, prescription drops, and rechecks—plan a modest yearly line.
            </li>
            <li>
              <strong>Dental disease:</strong> small mouths, tight spacing. Annual cleanings are your friend; ignoring plaque leads
              to extractions and higher anesthesia time later.
            </li>
            <li>
              <strong>Skin &amp; allergies:</strong> mild itch or seasonal flares are common. Budget for medicated shampoos or ear
              solutions and an occasional recheck.
            </li>
            <li>
              <strong>Orthopedic surprises:</strong> less common than in some breeds, but luxating patella or soft-tissue strains can
              happen. Keep nails short and weight lean to reduce risk.
            </li>
          </ul>
          <p>
            The theme is not fear; it is prevention and early response. Modest, steady effort keeps expensive spirals rare.
          </p>
        </section>

        {/* Grooming */}
        <section id="grooming" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Grooming &amp; Coat Care</h2>
          <p className="mb-3">
            Plan a simple weekly routine and stick to it. Cavaliers have a silky, medium-length coat with feathering at ears,
            legs, and tail. Mats start in friction zones—behind ears, under collar, armpits, and trousers. A few minutes prevents
            full shaves and emergency dematting fees.
          </p>
          <h3 className="text-lg font-semibold mt-2 mb-1">Weekly at-home plan</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Quick slicker pass against the lay, then with the lay; follow with a metal comb to check for snags.</li>
            <li>Ear hygiene: lift and air out; clean with vet-approved solution if waxy; dry thoroughly after baths.</li>
            <li>Nails every 1–2 weeks; tiny trims avoid stressful overgrowth appointments.</li>
            <li>Feathering check after wet walks; blow-dry on cool to prevent tangles.</li>
          </ul>
          <h3 className="text-lg font-semibold mt-2 mb-1">Professional services</h3>
          <p className="mb-2">
            A light tidy (sanitary trim, feet, feathers neatened) keeps the natural look. Frequent full clip-downs often start a
            cycle of faster matting and duller coat; consistent brushing is cheaper and looks better.
          </p>
        </section>

        {/* Training */}
        <section id="training" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Training &amp; Enrichment</h2>
          <p className="mb-3">
            Cavaliers are eager, sensitive companions. A little structure goes a long way. Spend a small budget on habits that
            prevent larger costs: polite leash skills, calm greetings, alone-time conditioning, and crate comfort. These reduce
            property damage and anxiety-related bills and make boarding or travel easier.
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Five minutes daily of basic skills: sit, stay, loose leash, place, and recall.</li>
            <li>Rotate food puzzles to occupy the mind without extra calories.</li>
            <li>Practice calm crate time with a stuffed toy after a short walk to build routine.</li>
          </ul>
        </section>

        {/* Boarding */}
        <section id="boarding" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Daycare &amp; Boarding</h2>
          <p className="mb-3">
            Prices vary with region and amenities. Boutique facilities with lower dog-to-staff ratios cost more but often deliver
            better rest, cleaner ears, and fewer stress-related stomach upsets. Your budget should reflect your travel pattern and
            how social your Cavalier is.
          </p>
          <h3 className="text-lg font-semibold mt-2 mb-1">Typical pricing</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>Daycare:</strong> $25–$55 per day; discounted packs reduce the per-day cost.</li>
            <li><strong>Boarding:</strong> $45–$95 per night in many markets; holiday periods run higher.</li>
            <li><strong>Add-ons:</strong> exit baths ($20–$45), medication administration ($1–$5 per dose), photo updates.</li>
          </ul>
          <h3 className="text-lg font-semibold mt-2 mb-1">What matters more than price</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Rest-focused schedule: structured play windows and quiet naps lower injury and stomach upset.</li>
            <li>Vaccination and parasite policies are enforced consistently.</li>
            <li>Transparent incident reporting and medication logs.</li>
            <li>Staff trained in gentle handling and low-stress housing.</li>
          </ul>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Petunia workflow:</strong> Share feeding, medication, ear-care notes, and leash preferences through your
            dog&#39;s Petunia profile so the facility follows your routine exactly.
          </div>
        </section>

        {/* Life stages */}
        <section id="lifestage" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Life-Stage Budgets (Puppy → Senior)</h2>
          <h3 className="text-lg font-semibold mt-2 mb-1">Puppy (0–12 months)</h3>
          <p className="mb-2">
            Higher vaccine cadence, spay/neuter, puppy classes, and chew replacements push the first-year total upward.
            Expect <strong>$3,000–$5,000</strong> including start-up gear and training. Save by buying quality once and
            reusing durable items (crate, harness, puzzle feeders) for years.
          </p>
          <h3 className="text-lg font-semibold mt-2 mb-1">Adult (1–7 years)</h3>
          <p className="mb-2">
            Costs stabilize at <strong>$2,200–$4,300</strong> annually for most families. Dental cleanings, grooming, and
            routine wellness dominate this period. Keep weight lean to avoid preventable vet bills.
          </p>
          <h3 className="text-lg font-semibold mt-2 mb-1">Senior (8+ years)</h3>
          <p className="mb-2">
            Plan for more frequent vet visits and screening bloodwork. Heart monitoring may begin if a murmur is detected.
            Annual costs can rise by <strong>$500–$2,000+</strong> depending on diagnostics and medications. Early detection
            and consistent routines are the best cost control.
          </p>
        </section>

        {/* Sample budgets */}
        <section id="sample-budgets" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Sample Yearly Budgets</h2>

          <h3 className="text-lg font-semibold mt-2 mb-1">Lean &amp; Predictable (minimal travel)</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Food &amp; treats: $550</li>
            <li>Parasite prevention: $240</li>
            <li>Wellness exam &amp; vaccines: $300</li>
            <li>Dental cleaning (every 18 months averaged): $500</li>
            <li>Grooming (every 8 weeks, modest): $520</li>
            <li>Insurance or vet fund: $600</li>
            <li>Training/enrichment: $120</li>
            <li><strong>Estimated total:</strong> <strong>$2,830</strong></li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Active Traveler (moderate daycare/boarding)</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Everything above, plus 25 daycare days: $900</li>
            <li>Ten boarding nights with exit baths: $800</li>
            <li>Extra grooming for travel photos (2 add-ons): $70</li>
            <li><strong>Estimated total:</strong> <strong>$4,600</strong></li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Medical-Forward Year (murmur discovered)</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>All baseline items from Lean &amp; Predictable</li>
            <li>Cardiology consult &amp; echocardiogram: $600–$1,200</li>
            <li>Heart medication for 12 months: $360–$1,200</li>
            <li>Two recheck visits: $250–$400</li>
            <li><strong>Estimated total:</strong> <strong>$4,000–$5,600</strong></li>
          </ul>
        </section>

        {/* Save smart */}
        <section id="save-smart" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">How to Save Without Cutting Corners</h2>
          <ul className="list-disc pl-5 space-y-2 mb-3">
            <li><strong>Buy quality once:</strong> durable crate, clipper, combs, and harness last years.</li>
            <li><strong>Measure meals:</strong> leanness lowers anesthesia time, dental difficulty, and joint care later.</li>
            <li><strong>Schedule hygiene:</strong> weekly ear and coat routines prevent infection fees and shave-downs.</li>
            <li><strong>Bundle care:</strong> ask about vaccine/dental package pricing and use refill reminders to avoid lapses.</li>
            <li><strong>Use daycare strategically:</strong> choose fewer, higher-quality days with good rest rather than daily chaos.</li>
            <li><strong>Enroll in insurance early</strong> if you choose it; waiting can create exclusions.</li>
            <li><strong>Maintain a sinking fund:</strong> auto-transfer a fixed amount every month, no exceptions.</li>
          </ul>
        </section>

        {/* Red flags */}
        <section id="red-flags" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Red Flags &amp; Surprise Bills</h2>
          <p className="mb-3">
            Most big bills start small. Call your veterinarian sooner if you notice:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>New heart murmur, coughing at night, tiring on stairs, or fainting episodes.</li>
            <li>Head shaking, ear odor, or pain when opening the mouth.</li>
            <li>Brown tartar with red gums, bad breath, or difficulty chewing.</li>
            <li>Itch escalates, skin is red/greasy, or hot spots form.</li>
            <li>Rapid weight gain or loss despite similar feeding.</li>
          </ul>
          <p className="mt-3">
            Early appointments are cheaper and kinder. Most issues are easier to manage when addressed quickly.
          </p>
        </section>

        {/* Templates */}
        <section id="templates" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Budget Templates &amp; Checklists</h2>
          <h3 className="text-lg font-semibold mt-2 mb-1">Monthly Rhythm (stick on the fridge)</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Refill heartworm/flea/tick prevention on the same date each month.</li>
            <li>Ear check and quick clean every Sunday night; log any redness or odor.</li>
            <li>Weigh your dog on the same scale; adjust food by ±10% to maintain lean condition.</li>
            <li>Book grooming every 6–8 weeks; add a reminder to pre-brush before the appointment.</li>
            <li>Auto-transfer to the vet fund or pay the insurance premium.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Travel &amp; Boarding Pack-Out</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Food pre-bagged by meal; medication in a labeled pill case with times and doses.</li>
            <li>Harness, two leashes, ID tags, and a backup collar; recent photo on your phone.</li>
            <li>Ear solution, gentle wipes, and a short brushing card for staff.</li>
            <li>Emergency contacts and your preferred veterinary clinic info.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">Frequently Asked Questions</h2>

          <p className="mb-3">
            <strong>Do Cavaliers always develop heart disease?</strong><br />
            Not always, but many do with age. Budget for monitoring so you are ready. Early medication can keep dogs
            comfortable for a long time.
          </p>

          <p className="mb-3">
            <strong>Is insurance worth it for this breed?</strong><br />
            It depends on your cash-flow tolerance. If you cannot absorb a four-figure bill, insurance or a disciplined
            sinking fund is wise. Enroll while young for fewer exclusions.
          </p>

          <p className="mb-3">
            <strong>How often should a Cavalier see a groomer?</strong><br />
            Every 6–8 weeks for a tidy and feather maintenance works well if you brush at home. Skipping brushing leads
            to mats and higher fees.
          </p>

          <p className="mb-3">
            <strong>What is the single best way to reduce long-term costs?</strong><br />
            Keep weight lean and maintain teeth and ears. Those three habits prevent a surprising share of major bills.
          </p>

          <p>
            <strong>How much boarding should I plan for each year?</strong><br />
            Look at your actual travel habits. If you take two week-long trips plus a few weekends, plan for 12–16 nights.
            Add an exit bath on the final day so your dog comes home clean and mat-free.
          </p>
        </section>

        {/* Sources */}
        <section id="sources" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">Sources &amp; Notes</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            <li>
              Breed club health summaries on valve disease, ear care, and dental priorities; practitioner experience
              operating daycare/boarding workflows that minimize stress and matting.
            </li>
            <li>
              General veterinary references for wellness schedules, dental prophylaxis, and parasite prevention best practices.
            </li>
            <li>
              Pricing ranges reflect common urban/suburban North American markets; always check local clinics and facilities.
            </li>
          </ul>
          <p className="text-xs text-gray-600 mt-4">
            Educational content only. Always consult your veterinarian for diagnosis and treatment individualized to your dog.
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
