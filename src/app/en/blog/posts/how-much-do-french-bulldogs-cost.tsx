'use client';

import Head from 'next/head';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function HowMuchDoFrenchBulldogsCost() {
  const locale = useLocale();

  const title =
    'How Much Do French Bulldogs Cost? Realistic First-Year, Annual & Lifetime Budgets';
  const date = 'April 9, 2025';
  const categories = ['owner', 'breed_specific_guides'] as const;

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
    'French Bulldog cost breakdown with realistic numbers: purchase or adoption fees, first-year setup, annual vet/food/insurance, lifetime totals, and risk-adjusted “Frenchie factors” like BOAS and IVDD. Includes money-saving systems, checklists, and professional sources.';

  return (
    <>
      <Head>
        <title>{title} – Petunia Blog</title>
        <meta name="description" content={description} />
        <meta name="robots" content="index,follow" />
        <link
          rel="canonical"
          href={`https://www.petuniapets.com/${locale}/blog/how-much-do-french-bulldogs-cost`}
        />
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
            <li><a href="#tl-dr" className="underline hover:opacity-80">TL;DR</a></li>
            <li><a href="#sticker" className="underline hover:opacity-80">Sticker Price vs. Adoption</a></li>
            <li><a href="#first-year" className="underline hover:opacity-80">First-Year Budget</a></li>
            <li><a href="#annual" className="underline hover:opacity-80">Annual (Years 2+)</a></li>
            <li><a href="#lifetime" className="underline hover:opacity-80">Lifetime Cost</a></li>
            <li><a href="#frenchie-factors" className="underline hover:opacity-80">“Frenchie Factors” (BOAS, IVDD)</a></li>
            <li><a href="#insurance" className="underline hover:opacity-80">Pet Insurance</a></li>
            <li><a href="#care-services" className="underline hover:opacity-80">Daycare, Boarding & Travel</a></li>
            <li><a href="#training" className="underline hover:opacity-80">Training & Socialization</a></li>
            <li><a href="#supplies" className="underline hover:opacity-80">Supplies You’ll Actually Use</a></li>
            <li><a href="#regional" className="underline hover:opacity-80">Regional Price Differences</a></li>
            <li><a href="#systems" className="underline hover:opacity-80">Money-Saving Systems</a></li>
            <li><a href="#templates" className="underline hover:opacity-80">Checklists & Templates</a></li>
            <li><a href="#faq" className="underline hover:opacity-80">FAQ</a></li>
            <li><a href="#sources" className="underline hover:opacity-80">📚 Sources (Selected)</a></li>
          </ul>
        </nav>

        {/* TL;DR */}
        <section id="tl-dr" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Short Answer (TL;DR)</h2>
          <p className="mb-4">
            A French Bulldog’s <strong>purchase price</strong> from a reputable U.S. breeder typically runs about
            <strong> $1,500–$3,000</strong> (rarely higher for show prospects or fad colors), while <strong>adoption fees</strong> at shelters/rescues often fall around
            <strong> $75–$350+</strong> depending on location and age. Realistic non-purchase costs look like
            <strong> ~$3,000+</strong> in the <strong>first year</strong> (setup + routine care) and <strong>~$1,400–$2,800+</strong> per year thereafter depending on your vet,
            food, insurance, and services. Over a <strong>10–12 year</strong> life, plan a base lifetime of <strong>$18k–$35k+</strong> before any major medical or travel costs.
          </p>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Petunia tip:</strong> Build a <em>cost autopilot</em>—standardize food portions, parasite prevention, insurance,
            and a set amount to savings every payday. Share your Frenchie’s play/rest plan and any “heat rules” in Petunia so
            everyone (family, sitter, daycare) runs the same playbook and avoids expensive mistakes.
          </div>
        </section>

        {/* STICKER PRICE VS ADOPTION */}
        <section id="sticker" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Sticker Price vs. Adoption: What People Actually Pay</h2>
          <p className="mb-3">
            In the U.S., a typical French Bulldog puppy from a reputable breeder is often quoted in the
            <strong> $1,500–$3,000</strong> range, with higher outliers tied to pedigree, geography, and demand. Media and marketplace
            reports document occasional five-figure asking prices, usually for show prospects, “rare” colors, or during surge
            demand periods—but those highs are not the norm and <em>are not guarantees of health</em>.
          </p>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>
              <strong>Breeder price (typical):</strong> around <strong>$1,500–$3,000</strong> for pet homes, potentially higher for
              titled lines or exceptional show prospects.
            </li>
            <li>
              <strong>Adoption fees:</strong> commonly <strong>$75–$350+</strong> depending on the shelter/rescue, age, and promotions
              (many include spay/neuter, vaccines, and microchip).
            </li>
            <li>
              <strong>“Rare color” markup:</strong> Blues, lilacs, merles, and other non-standard colors can command
              extreme prices. Breed club standards and health-first breeders emphasize <em>soundness over color trends</em>.
            </li>
          </ul>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm mb-3">
            <strong>Buyer guardrails:</strong> Prioritize breeders who do health screening, discuss brachycephalic risks,
            and welcome questions. Verify contracts, veterinary records, and aftercare support. If a seller will ship a puppy sight-unseen,
            won’t let you meet the dam, or pushes “exotic colors,” slow down.
          </div>
          <p className="text-sm text-gray-700">
            Sources: Market analyses on French Bulldog pricing, adoption fee schedules from large shelters (examples in Sources),
            AKC guidance on responsible breeders, and breed club color standards.
          </p>
        </section>

        {/* FIRST YEAR */}
        <section id="first-year" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">First-Year Budget: The “Setup + Stabilize” Phase</h2>
          <p className="mb-3">
            The first year includes one-time setup costs (crate, bed, harnesses, training), spay/neuter, initial vaccines,
            and a little trial-and-error to find food and routines that work. A national nonprofit estimate places a dog’s
            <strong> initial setup around ~$1,030</strong> and <strong>first-year total near ~$3,221</strong> (including annual care and special items like professional grooming and dental when needed). Your local reality may skew up or down with city prices and how much training/boarding you buy.
          </p>
          <h3 className="text-lg font-semibold mt-2 mb-1">Line Items to Expect</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>Spay/neuter:</strong> often ~$300 at general practices or included in adoption fees.</li>
            <li><strong>Initial medical:</strong> puppy vaccines/boosters, deworming, microchip; plan a few hundred dollars.</li>
            <li><strong>Crate, bed, bowls, harness/leash, ID:</strong> budget a few hundred total—buy once, cry once.</li>
            <li><strong>Training:</strong> quality group puppy classes commonly $139–$200 for a 6-week program; private sessions vary widely.</li>
            <li><strong>Dental + grooming:</strong> short-coat breed = mostly nails/ears/fold care at home; professional grooming and a baseline dental add cost but aren’t monthly.</li>
          </ul>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Petunia tip:</strong> Store your product list (sizes, brands), feeding amounts, vaccine due dates, and trainer contact info in Petunia.
            Reorders and handoffs to sitters become automatic—and cheaper.
          </div>
        </section>

        {/* ANNUAL */}
        <section id="annual" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Annual Costs (Years 2+): Where the Money Actually Goes</h2>
          <p className="mb-3">
            After the first year, most families spend in the <strong>~$1,400–$2,800+</strong> range annually for a small-to-medium dog,
            depending on local vet pricing, food quality, parasite prevention, and insurance/boarding choices. For Frenchies,
            allow <strong>headroom</strong> for heat safety gear, potential BOAS discussions, and occasional skin/ear care.
          </p>
          <h3 className="text-lg font-semibold mt-2 mb-1">Typical Annual Buckets</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Routine vet care:</strong> wellness exam, core vaccines as due, fecal/heartworm tests.</li>
            <li><strong>Parasite prevention:</strong> flea/tick + heartworm preventives.</li>
            <li><strong>Food & treats:</strong> complete and balanced diet, measured portions; treat spend creeps—watch it.</li>
            <li><strong>Insurance or savings:</strong> premiums for accident/illness coverage or a dedicated medical fund.</li>
            <li><strong>Training refreshers & enrichment:</strong> classes, puzzle toys, mats—small spends, big behavior wins.</li>
            <li><strong>Boarding/daycare/pet sitters:</strong> varies widely by city and season.</li>
          </ul>
        </section>

        {/* LIFETIME */}
        <section id="lifetime" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Lifetime Cost: Putting It All Together</h2>
          <p className="mb-3">
            If a French Bulldog lives <strong>10–12 years</strong>, a base lifetime (excluding major surgeries) commonly lands in the
            <strong> $18,000–$35,000+</strong> span. Add regular travel/boarding or higher-end food/insurance and the lifetime easily passes
            <strong> $40,000</strong>. A single emergency (e.g., spinal or airway surgery) can add <strong>$2,000–$8,000+</strong> in a week, sometimes more.
          </p>
          <p className="text-sm text-gray-700">
            Benchmarks here reflect national nonprofit budgets, market insurance data, and typical service rates; your local reality may vary.
          </p>
        </section>

        {/* FRENCHIE FACTORS */}
        <section id="frenchie-factors" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">The “Frenchie Factors”: BOAS, Spine, Skin & the Budget</h2>
          <p className="mb-3">
            French Bulldogs are <em>brachycephalic</em> (short-muzzled) and have higher risk for <strong>brachycephalic obstructive airway syndrome (BOAS)</strong>,
            plus orthopedic and spinal issues like <strong>intervertebral disc disease (IVDD)</strong>. These risks don’t doom your budget, but they do
            change the <em>plan</em>: keep them lean, avoid heat stress, and tackle airway/spine changes <em>early</em>.
          </p>
          <h3 className="text-lg font-semibold mt-2 mb-1">What the numbers look like if intervention is needed</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>
              <strong>Airway surgery (stenotic nares + soft palate):</strong> published clinic estimates often <strong>~$1,900–$2,300</strong> all-in
              for routine cases; more with complexity or hospitalization.
            </li>
            <li>
              <strong>IVDD (spinal) surgery:</strong> common veterinary ranges cite <strong>~$3,000–$8,000</strong> total (imaging + surgery + stay);
              some specialty centers can exceed <strong>$10,000+</strong>, especially with advanced imaging and rehab.
            </li>
            <li>
              <strong>Skin/ears/eyes:</strong> small, steady spend on wipes/ear cleaner and prompt vet care prevents big flare costs later.
            </li>
          </ul>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Budget move:</strong> Either carry robust insurance <em>or</em> set a monthly automatic transfer to a “medical buffer” account
            big enough to handle a same-week surgery quote. This one habit prevents crisis financing.
          </div>
        </section>

        {/* INSURANCE */}
        <section id="insurance" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Pet Insurance: What Frenchie Families Actually Pay</h2>
          <p className="mb-3">
            National averages for <strong>dog insurance</strong> hover around <strong>$44–$66/month</strong> depending on coverage limits and deductibles.
            Breed-specific quotes for French Bulldogs commonly price higher than mixed-breed averages—sample analyses show about
            <strong> ~$100+/month</strong> for $10k-unlimited coverage with mid-range deductibles in many markets (young dogs).
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Accident/illness</strong> covers big-ticket items (ER visits, surgeries) and meds after your deductible.</li>
            <li><strong>Accident-only</strong> lowers premiums but won’t cover BOAS, allergies, or IVDD.</li>
            <li><strong>Preexisting conditions:</strong> almost never covered—enroll early if you choose insurance.</li>
            <li><strong>Direct pay options:</strong> some carriers can pay vets directly, reducing your up-front outlay.</li>
          </ul>
        </section>

        {/* CARE SERVICES */}
        <section id="care-services" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Daycare, Boarding & Travel: The Variable Column</h2>
          <p className="mb-3">
            Service prices swing with city and season. As broad reference points, <strong>boarding</strong> often averages
            <strong> ~$40–$50/night</strong> nationally, with big-city ranges from the mid-$40s to $70+ for standard care. <strong>Daycare</strong> frequently runs
            around <strong>~$30–$40/day</strong>. Holiday weeks and private sitters trend higher. For brachycephalics, choose facilities that
            understand heat risk and build in <em>structured play → rest → cool-down</em>.
          </p>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Boarding script:</strong> Ask about heat protocols, indoor climate control, handler-to-dog ratios, and cool-down rules.
            Share your Petunia profile so staff follow your Frenchie’s airway/heat plan automatically.
          </div>
        </section>

        {/* TRAINING */}
        <section id="training" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Training & Socialization: Small Spend, Big ROI</h2>
          <p className="mb-3">
            Expect <strong>~$139–$200</strong> for a quality <strong>6-week puppy class</strong> at national chains; independent trainers vary widely.
            Private sessions can range <strong>$45–$200/hour</strong> depending on specialization and city. Budget a little each year for
            skills refreshers and cooperative care (nail trims, fold care)—these reduce vet visits and stress.
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Goal:</strong> calm leash skills, heat-aware play, polite greetings, and comfy vet/groom handling.</li>
            <li><strong>Budget hack:</strong> use part of daily food as training rewards—cuts treat spend and waistlines.</li>
          </ul>
        </section>

        {/* SUPPLIES */}
        <section id="supplies" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Supplies You’ll Actually Use (and What to Skip)</h2>
          <p className="mb-3">
            Keep your kit tight. Upfront overspending on cute duplicates is how budgets leak. Frenchies need <strong>harnesses (Y-front)</strong>,
            <strong> traction runners</strong> for slick floors, a <strong>crate or pen</strong>, and <strong>cooling strategies</strong> for summer.
          </p>
          <h3 className="text-lg font-semibold mt-2 mb-1">Buy Once, Use Daily</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Crate or pen; washable bed; water-proof throw for couch/bed.</li>
            <li>Two harnesses (backup), flat ID tag, and microchip registry up to date.</li>
            <li>Food scale + measuring scoop; slow-feeder if needed; puzzle feeder.</li>
            <li>Fold/ear care supplies per vet plan; nail grinder or frequent trim plan.</li>
            <li>Traction runners/tiles on slick spots; ramps to sofa/bed/car.</li>
            <li>Heat kit: travel water, shade cloth, cooling mat; avoid midday exertion.</li>
          </ul>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Petunia tip:</strong> Track sizes, brands, and reorder intervals in Petunia. Share with sitters/daycare to eliminate “mystery gear”
            purchases and duplicate leashes/beds.
          </div>
        </section>

        {/* REGIONAL */}
        <section id="regional" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Regional Price Differences & Timing the Market</h2>
          <p className="mb-3">
            Urban clinics and premium neighborhoods tend to run higher for medical care, training, and boarding. Adoption fees
            vary by shelter capacity and promotions—some months include <em>fee-waived</em> events. For breeder purchases, travel to
            meet health-focused breeders can be smarter than paying urban premiums. The key is <strong>quality vetting</strong>, not
            chasing the lowest sticker.
          </p>
        </section>

        {/* SYSTEMS */}
        <section id="systems" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Money-Saving Systems (Operator Grade)</h2>
          <ol className="list-decimal pl-5 space-y-2 mb-3">
            <li><strong>Automation:</strong> Auto-ship food/parasite preventives; calendar vaccine and dental cycles.</li>
            <li><strong>Weight control:</strong> measured portions + regular weigh-ins prevent costly airway/orthopedic issues.</li>
            <li><strong>Heat rules:</strong> dawn/dusk walks, session caps, AC cool-downs—prevents ER bills.</li>
            <li><strong>Insurance or fund:</strong> pick one and stick with it; build to cover a major surgery.</li>
            <li><strong>Routine hygiene:</strong> weekly nails/ears/folds; early tele-vet for minor issues.</li>
            <li><strong>Network consistency:</strong> share your Petunia profile so every caregiver follows the same plan.</li>
          </ol>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Petunia workflow:</strong> Store your budget, reorder schedule, and clinic notes in Petunia. Handlers get the same
            instructions; you get predictable spend.
          </div>
        </section>

        {/* TEMPLATES */}
        <section id="templates" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Checklists & Templates</h2>

          <h3 className="text-lg font-semibold mt-2 mb-1">Frenchie Budget Template (Copy/Paste)</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>Recurring monthly:</strong> food $__, parasite prevention $__, insurance $__, savings $__.</li>
            <li><strong>Quarterly:</strong> grooming/hygiene $__, training refreshers $__, enrichment $__.</li>
            <li><strong>Annual:</strong> wellness visit $__, vaccines as due $__, dental $__ (if recommended), boarding $__.</li>
            <li><strong>Reserve:</strong> surgery/ER target $____ (build via auto-transfer).</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Breeder Vetting Questions</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>What health testing do you do (airway/spine/eyes/heart)? May I see results?</li>
            <li>How do you place puppies (temperament, pet vs. show prospects)?</li>
            <li>What support do you offer post-sale? Health guarantees and return contract?</li>
            <li>Do you breed to the AKC/club color standard (no “rare color” upsell)?</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Adoption Day Checklist</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Vaccination/microchip records, spay/neuter status, known medical history.</li>
            <li>Starter meds/food, fit-checked harness, and climate-controlled travel.</li>
            <li>Primary care vet appointment scheduled within 7–10 days.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">Frequently Asked Questions</h2>

          <p className="mb-3">
            <strong>What does a French Bulldog puppy cost in the U.S.?</strong><br />
            Many reputable pet-home placements land around <strong>$1,500–$3,000</strong>. Expect variation by geography, pedigree,
            and breeder reputation. Extremely high “rare color” asks exist but don’t guarantee health.
          </p>

          <p className="mb-3">
            <strong>How much is adoption?</strong><br />
            Typical shelter/rescue fees range <strong>$75–$350+</strong>, often including spay/neuter, vaccines, and microchip. Some cities
            offer fee-waived events during campaigns like “Clear the Shelters.”
          </p>

          <p className="mb-3">
            <strong>What will I spend the first year?</strong><br />
            Around <strong>~$3,000+</strong> including setup, routine vet care, and training—more if you add frequent boarding or private training.
          </p>

          <p className="mb-3">
            <strong>Is insurance worth it for Frenchies?</strong><br />
            Many owners choose it because single events (airway/spine surgery) can run <strong>thousands</strong>. Young-dog premiums for French Bulldogs
            often hover near <strong>~$100/month</strong> for robust coverage; shop deductibles/limits to fit your risk tolerance.
          </p>

          <p className="mb-3">
            <strong>Do non-standard colors cost more to maintain?</strong><br />
            The color itself doesn’t raise vet bills, but fad-driven breeding may correlate with <em>poorer selection for health</em>.
            Prioritize breeders/rescues who center health testing and lifelong support.
          </p>

          <p>
            <strong>Where can I trim costs safely?</strong><br />
            Keep your dog <strong>lean</strong>, master <strong>heat rules</strong>, do <strong>routine hygiene</strong>, and use
            <strong> group classes</strong> for fundamentals. These shift spend from ER to prevention.
          </p>
        </section>

        {/* SOURCES */}
        <section id="sources" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">📚 Sources (Selected)</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            {/* Costs & budgets */}
            <li>
              ASPCA. <em>Cutting Pet Care Costs</em> (2021 update: dog first-year, annual, and initial cost tables).{' '}
              <a href="https://www.aspca.org/pet-care/general-pet-care/cutting-pet-care-costs" target="_blank" rel="noopener noreferrer">
                https://www.aspca.org/pet-care/general-pet-care/cutting-pet-care-costs
              </a>
            </li>
            <li>
              MarketWatch Guides. <em>French Bulldog Cost: 2025 Guide</em> (typical purchase ranges; high outliers).{' '}
              <a href="https://www.marketwatch.com/insurance-services/pet-insurance/french-bulldog-cost/" target="_blank" rel="noopener noreferrer">
                https://www.marketwatch.com/insurance-services/pet-insurance/french-bulldog-cost/
              </a>
            </li>
            <li>
              Vanity Fair. <em>The French Bulldog Revolution</em> (context on high-end pricing and color controversy).{' '}
              <a href="https://www.vanityfair.com/style/2023/11/the-french-bulldog-revolution" target="_blank" rel="noopener noreferrer">
                https://www.vanityfair.com/style/2023/11/the-french-bulldog-revolution
              </a>
            </li>

            {/* Adoption fee examples */}
            <li>
              Best Friends (NYC). <em>Dog &amp; Cat Adoption</em> (fees for dogs/puppies).{' '}
              <a href="https://bestfriends.org/new-york-city/adopt" target="_blank" rel="noopener noreferrer">
                https://bestfriends.org/new-york-city/adopt
              </a>
              {' '}• NYC ACC. <em>Adoption fees</em> (dogs $75–$250 tiers).{' '}
              <a href="https://www.nycacc.org/adoption/process/" target="_blank" rel="noopener noreferrer">
                https://www.nycacc.org/adoption/process/
              </a>
              {' '}• Humane Society of Missouri. <em>Adoption Fees</em>.{' '}
              <a href="https://hsmo.org/adoptionfees/" target="_blank" rel="noopener noreferrer">
                https://hsmo.org/adoptionfees/
              </a>
              {' '}• ASPCA. <em>Clear the Shelters 2025</em> (fee-waived promos).{' '}
              <a href="https://www.aspca.org/news/join-us-clear-shelters-2025-visit-aspca-adoption-center-august" target="_blank" rel="noopener noreferrer">
                https://www.aspca.org/news/join-us-clear-shelters-2025-visit-aspca-adoption-center-august
              </a>
            </li>

            {/* Insurance */}
            <li>
              Forbes Advisor. <em>How Much Does Pet Insurance Cost? (2025)</em> (national averages by coverage).{' '}
              <a href="https://www.forbes.com/advisor/pet-insurance/pet-insurance-cost/" target="_blank" rel="noopener noreferrer">
                https://www.forbes.com/advisor/pet-insurance/pet-insurance-cost/
              </a>
              {' '}• Pawlicy Advisor. <em>Trupanion Review</em> (sample French Bulldog quotes).{' '}
              <a href="https://www.pawlicy.com/insurance-company/trupanion/" target="_blank" rel="noopener noreferrer">
                https://www.pawlicy.com/insurance-company/trupanion/
              </a>
              {' '}• Forbes Advisor. <em>ASPCA Pet Insurance Review</em> (breed-specific monthly examples).{' '}
              <a href="https://www.forbes.com/advisor/pet-insurance/aspca-pet-insurance-review/" target="_blank" rel="noopener noreferrer">
                https://www.forbes.com/advisor/pet-insurance/aspca-pet-insurance-review/
              </a>
            </li>

            {/* Boarding & daycare */}
            <li>
              Rover. <em>How Much Does Dog Boarding Cost?</em> (national overview).{' '}
              <a href="https://www.rover.com/blog/how-much-does-dog-boarding-cost/" target="_blank" rel="noopener noreferrer">
                https://www.rover.com/blog/how-much-does-dog-boarding-cost/
              </a>
              {' '}• Dogster. <em>Pet Daycare &amp; Boarding Statistics (2025)</em> (avg daycare/boarding figures).{' '}
              <a href="https://www.dogster.com/statistics/pet-daycare-dog-boarding-industry-statistics" target="_blank" rel="noopener noreferrer">
                https://www.dogster.com/statistics/pet-daycare-dog-boarding-industry-statistics
              </a>
            </li>

            {/* Training */}
            <li>
              PetSmart. <em>Dog Training</em> (typical 6-week class pricing).{' '}
              <a href="https://services.petsmart.com/training/" target="_blank" rel="noopener noreferrer">
                https://services.petsmart.com/training/
              </a>
              {' '}• Petco. <em>Dog &amp; Puppy Training</em>.{' '}
              <a href="https://www.petco.com/shop/en/petcostore/s/petco-dog-training" target="_blank" rel="noopener noreferrer">
                https://www.petco.com/shop/en/petcostore/s/petco-dog-training
              </a>
              {' '}• Whole Dog Journal. <em>How Much Does Dog Training Cost?</em> (private session ranges).{' '}
              <a href="https://www.whole-dog-journal.com/training/how-much-does-dog-training-cost/" target="_blank" rel="noopener noreferrer">
                https://www.whole-dog-journal.com/training/how-much-does-dog-training-cost/
              </a>
            </li>

            {/* Health background & procedures */}
            <li>
              Cambridge BOAS Research Group. <em>About BOAS</em> (brachycephalic airway syndrome overview).{' '}
              <a href="https://www.vet.cam.ac.uk/boas/about-boas" target="_blank" rel="noopener noreferrer">
                https://www.vet.cam.ac.uk/boas/about-boas
              </a>
              {' '}• RVC VetCompass / O’Neill et&nbsp;al. 2021 (French Bulldog disorder profile vs. other dogs).{' '}
              <a href="https://pubmed.ncbi.nlm.nih.gov/34911586/" target="_blank" rel="noopener noreferrer">
                https://pubmed.ncbi.nlm.nih.gov/34911586/
              </a>
            </li>
            <li>
              Veterinary Surgical Solutions (Austin, TX). <em>Price Sheet</em> (sample: stenotic nares + soft palate).{' '}
              <a href="https://vssaustin.com/price-sheet-surgery/" target="_blank" rel="noopener noreferrer">
                https://vssaustin.com/price-sheet-surgery/
              </a>
              {' '}• PetMD. <em>Spinal Surgery in Dogs</em> (IVDD cost ranges).{' '}
              <a href="https://www.petmd.com/dog/procedure/spinal-surgery-in-dogs" target="_blank" rel="noopener noreferrer">
                https://www.petmd.com/dog/procedure/spinal-surgery-in-dogs
              </a>
            </li>

            {/* Breed standards & color notes */}
            <li>
              French Bulldog Club of America. <em>Color Interpretation</em> (AKC standard colors & disqualifications).{' '}
              <a href="https://frenchbulldogclub.org/color/" target="_blank" rel="noopener noreferrer">
                https://frenchbulldogclub.org/color/
              </a>
              {' '}• The Kennel Club (UK). <em>French Bulldog – Breed Standard Colours</em>.{' '}
              <a href="https://www.thekennelclub.org.uk/search/breeds-a-to-z/breeds/utility/french-bulldog/" target="_blank" rel="noopener noreferrer">
                https://www.thekennelclub.org.uk/search/breeds-a-to-z/breeds/utility/french-bulldog/
              </a>
              {' '}• AKC. <em>Finding &amp; Working With a Responsible Breeder</em>.{' '}
              <a href="https://www.akc.org/expert-advice/advice/9-tips-finding-working-responsible-breeder/" target="_blank" rel="noopener noreferrer">
                https://www.akc.org/expert-advice/advice/9-tips-finding-working-responsible-breeder/
              </a>
            </li>
          </ul>
          <p className="text-xs text-gray-600 mt-4">
            Educational content only. Always consult your veterinarian and trusted local professionals for individualized medical and
            financial advice. Prices vary by region and time.
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
