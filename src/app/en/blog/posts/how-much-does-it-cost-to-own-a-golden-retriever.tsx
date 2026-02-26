'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function GoldenRetrieverCostToOwn() {
  const locale = useLocale();

  const title = 'How Much Does It Cost to Own a Golden Retriever? A Full, Evidence-Informed Budget Guide';
  const date = 'August 5, 2025';
  const categories = ['owner', 'breed_specific_guides'] as const;

  // Use the exact labels object from prior posts (unchanged keys/labels)
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
            <li><a href="#what-drives-cost" className="underline hover:opacity-80">What Drives the Cost</a></li>
            <li><a href="#starter-budget" className="underline hover:opacity-80">Starter Budget (First Year)</a></li>
            <li><a href="#annual-budget" className="underline hover:opacity-80">Annual Budget (Years 2+)</a></li>
            <li><a href="#food-math" className="underline hover:opacity-80">Food Math for a Golden</a></li>
            <li><a href="#medical" className="underline hover:opacity-80">Medical: Wellness, Vaccines & Preventives</a></li>
            <li><a href="#grooming" className="underline hover:opacity-80">Grooming & Shedding Management</a></li>
            <li><a href="#training" className="underline hover:opacity-80">Training & Behavior</a></li>
            <li><a href="#lifestyle" className="underline hover:opacity-80">Lifestyle Add-Ons (Boarding, Daycare, Walks)</a></li>
            <li><a href="#location" className="underline hover:opacity-80">Location & Inflation Sensitivity</a></li>
            <li><a href="#risk" className="underline hover:opacity-80">Risk, Insurance & Emergency Funds</a></li>
            <li><a href="#acquisition" className="underline hover:opacity-80">Adopt vs. Breeder: Up-Front Costs</a></li>
            <li><a href="#save" className="underline hover:opacity-80">Ways to Save (Without Cutting Corners)</a></li>
            <li><a href="#templates" className="underline hover:opacity-80">Budget Templates (Copy/Paste)</a></li>
            <li><a href="#faq" className="underline hover:opacity-80">FAQ</a></li>
            <li><a href="#sources" className="underline hover:opacity-80">📚 Sources</a></li>
          </ul>
        </nav>

        {/* TL;DR */}
        <section id="tldr" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Short Answer (TL;DR)</h2>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4">
            <p className="mb-2">
              Expect a <strong>first-year spend (ex-purchase price)</strong> around <strong>$2,000–$4,000</strong> for a typical Golden Retriever, assuming mid-priced food, routine vet care + vaccines, monthly parasite preventives, a basic training class, and a few professional grooming sessions. If you add <strong>pet insurance</strong>, budget another <strong>~$700–$900/year</strong>. In high-cost metros (NYC/SF), frequent daycare/boarding, premium diets, or complex medical care can raise <strong>annual</strong> spend to <strong>$4,000–$8,000+</strong>.
            </p>
            <p className="mb-0">
              The biggest levers you control are: diet tier & portioning, how often you outsource care (grooming/daycare/walks), and whether you buy insurance or self-insure. Goldens’ size and coat make <em>food and grooming</em> meaningful line items, and breed health risks (e.g., cancers) justify a real <strong>emergency reserve</strong> or an insurance plan.
            </p>
          </div>
        </section>

        {/* What drives cost */}
        <section id="what-drives-cost" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">What Drives the Cost of Owning a Golden</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Size & appetite:</strong> Adult Goldens (55–75 lb) eat considerably more than small dogs; food becomes one of the top recurring costs.</li>
            <li><strong>Coat care:</strong> Double coat + year-round shedding ⇒ either invest time in home maintenance or pay for regular pro grooming.</li>
            <li><strong>Preventive medicine:</strong> Year-round heartworm + flea/tick prevention, vaccines, and annual exams add predictable, recurring spend.</li>
            <li><strong>Training & enrichment:</strong> Smart, biddable dogs do best with early classes and ongoing enrichment; classes, gear, and toys cost money—but prevent bigger problems later.</li>
            <li><strong>Lifestyle:</strong> Daycare, walkers, boarding, dog sports, travel—these can dwarf the “core” budget depending on your routine.</li>
            <li><strong>Health risk profile:</strong> Goldens are at higher lifetime risk for certain cancers and orthopedic issues; planning for uncertainty is financially prudent.</li>
          </ul>
        </section>

        {/* Starter budget */}
        <section id="starter-budget" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Starter Budget (First Year, Ex-Purchase)</h2>
          <p className="mb-3">
            Below is a realistic first-year budget <em>excluding</em> the acquisition price. Ranges reflect geography, clinic pricing, and owner choices (DIY vs. outsource).
          </p>

          <div className="rounded-md border border-[#d9cfc2] bg-white p-4">
            <h3 className="text-lg font-semibold mb-2">Core One-Time & First-Year Items</h3>
            <ul className="list-disc pl-5 space-y-1 mb-3 text-sm">
              <li><strong>Initial exam(s) + vaccines:</strong> ~$150–$450 depending on clinic/series & add-ons.</li>
              <li><strong>Spay/neuter (if not included):</strong> ~$350–$700 typical clinic range.</li>
              <li><strong>Microchip (if needed):</strong> ~$25–$60 incl. registration.</li>
              <li><strong>License:</strong> ~$10–$50/yr depending on city & altered status.</li>
              <li><strong>Basic supplies:</strong> crate, bed, bowls, brush/rake, nail grinder, comb, leash/harness, ID tag, poop bags: often <strong>$250–$500</strong>.</li>
              <li><strong>Training class (group):</strong> 4–6 weeks typically <strong>$120–$250</strong> (many owners take 1–2 classes the first year).</li>
            </ul>

            <h3 className="text-lg font-semibold mb-2">Recurring (First Year)</h3>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li><strong>Food:</strong> see <a href="#food-math" className="underline">Food Math</a>—a mid-range dry diet for an adult Golden often pencils at <strong>~$600–$1,000/year</strong> (brand/energy density drive variance).</li>
              <li><strong>Heartworm + flea/tick prevention:</strong> commonly <strong>~$250–$450/year</strong> (single broad-spectrum monthly or separate products).</li>
              <li><strong>Routine wellness exam(s):</strong> typically <strong>$70–$200/visit</strong> depending on clinic (often one annual).</li>
              <li><strong>Grooming:</strong> if using a pro 4–8×/year at <strong>$70–$120/session</strong>, budget <strong>$300–$960</strong>. DIY reduces this but increases brush/consumables spend.</li>
              <li><strong>Insurance (optional):</strong> U.S. average for accident & illness is roughly <strong>$700–$900/year</strong> depending on dog age, zip, deductible/co-pay.</li>
            </ul>
          </div>

          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 mt-4 text-sm">
            <strong>First-Year (ex-purchase) roll-ups:</strong>
            <ul className="list-disc pl-5 space-y-1 mt-2">
              <li><strong>Lean DIY path:</strong> ~$1,800–$2,800 (mid-priced food, one class, DIY grooming, standard preventives).</li>
              <li><strong>Typical suburban owner:</strong> ~$2,500–$4,000 (some pro grooming + two classes + routine care).</li>
              <li><strong>High-service metro:</strong> ~$3,500–$5,500 (premium diet, frequent pro grooming, boutique clinic pricing).</li>
            </ul>
          </div>
        </section>

        {/* Annual budget */}
        <section id="annual-budget" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Annual Budget (Years 2+)</h2>
          <p className="mb-3">
            After the first year, costs settle into recurring patterns—food, preventives, wellness care, grooming, and your lifestyle add-ons.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="rounded-md border border-[#d9cfc2] bg-white p-4">
              <h3 className="text-lg font-semibold mb-2">Baseline (ex-insurance)</h3>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Food: ~$600–$1,000</li>
                <li>Preventives (HW + fleas/ticks): ~$250–$450</li>
                <li>Wellness care (exam, occasional tests): ~$100–$300</li>
                <li>Grooming (if pro 4–8×): ~$300–$960</li>
                <li>Dental cleaning (amortized q18–24mo): add ~$150–$500</li>
                <li>License & microchip upkeep: ~$10–$50</li>
                <li><strong>Subtotal:</strong> ~<strong>$1,400–$3,200</strong></li>
              </ul>
            </div>
            <div className="rounded-md border border-[#d9cfc2] bg-white p-4">
              <h3 className="text-lg font-semibold mb-2">Add insurance & lifestyle</h3>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Pet insurance: +~$700–$900</li>
                <li>Daycare (1 day/week @ $30–$60): +~$1,500–$3,000</li>
                <li>Boarding (10 nights @ $50–$120): +~$500–$1,200</li>
                <li>Walks (2×/week @ $25–$35): +~$2,600–$3,600</li>
                <li><strong>Full-service lifestyle:</strong> can reach <strong>$4,000–$8,000+</strong></li>
              </ul>
            </div>
          </div>
          <p className="text-sm text-gray-700">
            Note: dental frequency varies by dog; some Goldens need annual cleanings, others less often. Brushing, VOHC-accepted chews, and home care reduce frequency but don’t replace pro dentistry forever.
          </p>
        </section>

        {/* Food math */}
        <section id="food-math" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Food Math for a Golden (Step-by-Step)</h2>
          <p className="mb-3">
            Goldens’ calorie needs hinge on age, activity, metabolism, and energy density of your chosen food. A common clinic starting point for an average, neutered adult is to estimate maintenance energy requirements (MER) and then adjust by body condition:
          </p>
          <ol className="list-decimal pl-5 space-y-2 mb-3">
            <li><strong>Estimate calories/day:</strong> Use your vet’s guidance or standard formulas (e.g., RER × activity factor). For many adult Goldens this often lands around <em>~1,200–1,600 kcal/day</em>, then adjust to keep ribs easily felt, waist visible.</li>
            <li><strong>Translate to cups:</strong> Check your bag’s kcal/cup (varies widely ~320–450+). 1,400 kcal/day ÷ 380 kcal/cup ≈ <em>~3.7 cups/day</em>.</li>
            <li><strong>Annualize:</strong> 3.7 cups/day × 365 ≈ 1,351 cups/year. If 1 cup ≈ 100 g (varies), that’s ~135 kg (~298 lb) kibble/year. Actual usage depends on your specific formula.</li>
            <li><strong>Price it:</strong> U.S. retail dry dog food averaged roughly <em>~$2.50 per lb</em> across categories; premium foods trend higher. 300 lb × $2.50 ≈ <em>$750/year</em> (change per your brand).</li>
          </ol>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Operator tip:</strong> Monitor body condition score monthly and weigh quarterly. Portion to the dog you have, not the label estimate. Treats should generally be ≤10% of daily calories.
          </div>
        </section>

        {/* Medical */}
        <section id="medical" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Medical: Wellness, Vaccines, Preventives & Routine Dentistry</h2>
          <h3 className="text-lg font-semibold mb-1">Wellness care</h3>
          <p className="mb-3">
            Routine vet visits (exam, fecal/parasite checks, guidance) typically run <strong>~$70–$200 per visit</strong> for general practice, more for emergency or specialty consults. Annual bloodwork and tick-borne disease screening may be advised based on region and age.
          </p>

          <h3 className="text-lg font-semibold mb-1">Vaccines (typical pricing)</h3>
          <p className="mb-3">
            Core vaccines (rabies; combination distemper/parvo) are commonly <strong>~$20–$60 per shot</strong>, with non-core (lepto, Bordetella, influenza, Lyme) priced similarly or slightly higher depending on your area. First-year series costs often land in the <strong>~$100–$300+</strong> range; low-cost clinics/shelters can be less.
          </p>

          <h3 className="text-lg font-semibold mb-1">Parasite prevention</h3>
          <p className="mb-3">
            Year-round heartworm prevention is a must in most of the U.S., along with flea/tick control. Broad-spectrum monthly chews that cover HW + fleas/ticks typically price to <strong>~$25–$45/month</strong> for a large dog, depending on brand and where you buy. Buying a year’s supply or using manufacturer rebates can reduce costs.
          </p>

          <h3 className="text-lg font-semibold mb-1">Spay/neuter, microchip & license</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>Spay/neuter:</strong> many clinics quote roughly <strong>$350–$700</strong> for a 60–75 lb dog; high-cost metros can exceed this.</li>
            <li><strong>Microchip:</strong> often <strong>$25–$60</strong> including registration, less at municipal clinics.</li>
            <li><strong>License:</strong> commonly <strong>$10–$50/year</strong>, with altered dogs cheaper than intact.</li>
          </ul>

          <h3 className="text-lg font-semibold mb-1">Dental care</h3>
          <p className="mb-0">
            Professional cleanings under anesthesia range widely by region, clinic, and whether full-mouth X-rays/extractions are needed. Expect roughly <strong>$300–$1,000+</strong> for general practice; complex cases with extractions or specialty dentistry can exceed <strong>$2,000</strong>. Home care (brushing, VOHC-accepted chews) stretches intervals but doesn’t replace professional care.
          </p>
        </section>

        {/* Grooming */}
        <section id="grooming" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Grooming & Shedding Management (Goldens’ Double Coat)</h2>
          <p className="mb-3">
            Goldens shed year-round and “blow coat” seasonally. Plan for regular home maintenance with a slicker, undercoat rake, and comb. If you outsource, large-breed grooming packages (bath, deshed, nails, sanitary/feet/feathers tidy) typically run <strong>~$70–$120+</strong> per session depending on coat condition and market. A six-to-eight-week cadence (6–8×/year) yields <strong>$300–$960/year</strong>.
          </p>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Operator tip:</strong> Consistent home deshedding reduces pro time (and price), and keeps skin healthy. Avoid close shaving—Goldens’ double coat insulates against heat/cold and protects skin.
          </div>
        </section>

        {/* Training */}
        <section id="training" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Training & Behavior (High ROI Line Item)</h2>
          <p className="mb-3">
            Early, positive-reinforcement classes pay off. Group puppy/obedience courses commonly cost <strong>~$120–$250</strong> for 4–6 weeks; specialty/sport classes may be higher. Private lessons vary with trainer credentials and location.
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>First-year target:</strong> at least one general manners course; many owners do two (puppy + adolescent).</li>
            <li><strong>Budget saver:</strong> use short daily reps and enrichment puzzles; invest in a long line and treat pouch rather than gadgets you won’t use.</li>
          </ul>
        </section>

        {/* Lifestyle add-ons */}
        <section id="lifestyle" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Lifestyle Add-Ons (Boarding, Daycare, Walking)</h2>
          <p className="mb-3">
            These can dwarf “core” ownership costs depending on your schedule. Typical U.S. ranges:
          </p>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>Doggy daycare:</strong> ~<strong>$25–$50+</strong> per day; packages reduce per-day cost.</li>
            <li><strong>Boarding:</strong> ~<strong>$45–$120+</strong> per night (amenities/market drive variance).</li>
            <li><strong>Walkers/pet sitters:</strong> ~<strong>$25–$35</strong> per 30-min walk; overnight in-home sitting often <strong>$75–$150/night</strong> in major metros.</li>
          </ul>
          <div className="rounded-md border border-[#d9cfc2] bg-white p-4 text-sm">
            <strong>Budgeting approach:</strong> Multiply your expected monthly usage by the midpoint of local quotes (holiday surcharges separate). For commuters, 1–2 daycare days weekly can add <strong>$1.5k–$3k/year</strong>.
          </div>
        </section>

        {/* Location */}
        <section id="location" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Location, Inflation & Market Sensitivity</h2>
          <p className="mb-3">
            Clinic fees, pro services, and even pet food shelf prices vary by metro and retailer. High-cost areas (NYC, Bay Area, Seattle) will sit at the upper end of ranges—sometimes well above national averages. Build a 10–20% buffer into your plan if you live in a top-quartile cost-of-living market.
          </p>
        </section>

        {/* Risk & Insurance */}
        <section id="risk" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Risk, Insurance & Emergency Funds (Breed-Informed)</h2>
          <p className="mb-3">
            Goldens have elevated lifetime risk for certain cancers (e.g., hemangiosarcoma, lymphoma) and orthopedic problems, which can mean costly imaging, surgery, oncology consults, chemo, or transfusions. Emergency visits alone can start around <strong>$100–$250</strong> just for the exam; major interventions quickly reach <strong>$2,000–$5,000+</strong>.
          </p>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>Pet insurance:</strong> U.S. accident & illness premiums for dogs average roughly <strong>$60–$70/month</strong>, but vary by age/zip and plan design. Large-breed oncology claims are a key reason owners elect coverage.</li>
            <li><strong>Self-insurance:</strong> If you skip insurance, ring-fence an <strong>emergency fund of $2,000–$5,000+</strong> (more if you prefer “no-compromise” specialty care).</li>
            <li><strong>Pre-approval & credit:</strong> Know your clinic’s payment policies; consider a backup line (e.g., designated savings or medical credit) reserved solely for the dog.</li>
          </ul>
        </section>

        {/* Acquisition */}
        <section id="acquisition" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Adopt vs. Breeder: Up-Front Costs (& Value)</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
            <div className="rounded-md border border-[#d9cfc2] bg-white p-4">
              <h3 className="text-lg font-semibold mb-2">Adoption/Rescue</h3>
              <p className="text-sm mb-2">
                Adoption fees for Goldens and Golden mixes often run <strong>~$200–$500</strong>, frequently including initial vaccines, exam, microchip, and spay/neuter—substantial value that reduces first-year medical spend.
              </p>
            </div>
            <div className="rounded-md border border-[#d9cfc2] bg-white p-4">
              <h3 className="text-lg font-semibold mb-2">Purpose-bred (Responsible Breeder)</h3>
              <p className="text-sm mb-0">
                Well-bred Golden puppies commonly cost <strong>~$1,500–$3,500+</strong> depending on region, health testing, and breeder credentials. Reputable breeders provide OFA health clearances (hips/elbows/eyes/heart), early socialization, and contracts that support you for life—costly to produce, but value-protective over the dog’s lifespan.
              </p>
            </div>
          </div>
          <p className="text-sm text-gray-700">
            Avoid urgency/deposit-heavy online listings with no health documentation; scams and poor breeding practices can cause large downstream medical and behavioral costs.
          </p>
        </section>

        {/* Ways to save */}
        <section id="save" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Ways to Save (Without Cutting Corners)</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Buy food smart:</strong> track cost per 1,000 kcal; large bags and subscribe-and-save are cheaper. Switch only with veterinary guidance and proper transitions.</li>
            <li><strong>Home grooming cadence:</strong> weekly brush-outs and a monthly tidy reduce pro time and cost.</li>
            <li><strong>Bundle vet care:</strong> vaccine clinics/shelter days for routine shots; keep records centralized.</li>
            <li><strong>Preventives on autopilot:</strong> annual scripts + pharmacy comparison (rebates, generics where appropriate).</li>
            <li><strong>Training prevents costs:</strong> investing in recall/loose-leash skills reduces emergency risks and the need for management tools or multiple services.</li>
            <li><strong>Share services:</strong> co-op dog sitting with trusted friends to offset peak holiday pricing.</li>
          </ul>
        </section>

        {/* Templates */}
        <section id="templates" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Budget Templates (Copy/Paste)</h2>

          <h3 className="text-lg font-semibold mb-1">A) Lean DIY (ex-insurance)</h3>
          <ul className="list-disc pl-5 space-y-1 text-sm mb-3">
            <li>Food: $650</li>
            <li>Preventives (HW + fleas/ticks): $300</li>
            <li>Wellness care: $150</li>
            <li>Grooming (2–4× pro + supplies): $200–$400</li>
            <li>Dental (amortized): $150</li>
            <li>License/microchip upkeep: $20</li>
            <li><strong>Annual total:</strong> ~$1,470–$1,670</li>
          </ul>

          <h3 className="text-lg font-semibold mb-1">B) Typical Suburban</h3>
          <ul className="list-disc pl-5 space-y-1 text-sm mb-3">
            <li>Food: $800</li>
            <li>Preventives: $400</li>
            <li>Wellness: $200</li>
            <li>Grooming (6× pro): $600</li>
            <li>Dental (amortized): $300</li>
            <li>License/microchip upkeep: $30</li>
            <li>Pet insurance: $800</li>
            <li><strong>Annual total:</strong> ~$3,130</li>
          </ul>

          <h3 className="text-lg font-semibold mb-1">C) High-Service Metro</h3>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>Food (premium): $1,100</li>
            <li>Preventives: $450</li>
            <li>Wellness: $300</li>
            <li>Grooming (8× pro): $960</li>
            <li>Dental (amortized): $500</li>
            <li>License: $40</li>
            <li>Insurance: $900</li>
            <li>Daycare (1×/wk): $2,000</li>
            <li><strong>Annual total:</strong> ~$6,250</li>
          </ul>

          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm mt-3">
            <strong>Adjusters:</strong> add boarding, sport classes, travel fees, or specialist care as needed. For seniors, anticipate more diagnostics/meds and higher dentistry frequency.
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">Frequently Asked Questions</h2>

          <p className="mb-3">
            <strong>Is pet insurance “worth it” for Goldens?</strong><br />
            If a $2k–$5k sudden bill would strain your budget, insurance offers downside protection. Premiums rise with age/claims; choose a deductible/co-pay you can sustain. If you self-insure, keep a real emergency reserve and discipline yourself to replenish it after any use.
          </p>

          <p className="mb-3">
            <strong>How often should a Golden be professionally groomed?</strong><br />
            Many do well at 6–8 week intervals for a bath/deshed/nails/trim, with weekly home brushing. Heavy seasonal shed may warrant an extra deshed session.
          </p>

          <p className="mb-3">
            <strong>Can I materially lower food costs without compromising quality?</strong><br />
            Yes: buy larger bags, compare cost per 1,000 kcal (not just per pound), use retailer subscriptions, and avoid overfeeding. Keep your vet in the loop before switching diets.
          </p>

          <p className="mb-3">
            <strong>What surprise costs catch first-time owners?</strong><br />
            Emergency care (GI obstructions, injuries), advanced dentistry, seasonal tick-borne disease testing/treatment, and travel/boarding during holidays. Plan for the “unknowns.”
          </p>

          <p className="mb-0">
            <strong>Do Goldens’ breed risks change the budget materially?</strong><br />
            They can. Oncology and orthopedic cases can be expensive. This is why we emphasize either robust savings or an insurance plan sized to your risk tolerance.
          </p>
        </section>

        {/* Sources */}
        <section id="sources" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">📚 Sources (Selected)</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            {/* Food economics */}
            <li>
              Petfood Industry. <em>U.S. inflation shrinks premium dry dog food spending per lb.</em> Average price per pound data.{' '}
              <a href="https://www.petfoodindustry.com/pet-food-market/market-trends-news/article/15666008/us-inflation-shrinks-premium-dry-dog-food-spending-per-lb" target="_blank" rel="noopener noreferrer">Link</a>
            </li>

            {/* Vaccines & wellness */}
            <li>
              Chewy Health. <em>How Much Do Dog Vaccinations Cost?</em> Typical per-shot and first-year ranges.{' '}
              <a href="https://www.chewy.com/education/dog/health-and-wellness/dog-vaccines-how-much-do-dog-vaccinations-cost" target="_blank" rel="noopener noreferrer">Link</a>
            </li>
            <li>
              MetLife Pet Insurance. <em>Dog Vaccination Costs (2025).</em> Common vaccine price bands.{' '}
              <a href="https://www.metlifepetinsurance.com/blog/pet-health/dog-vaccinations-cost/" target="_blank" rel="noopener noreferrer">Link</a>
            </li>
            <li>
              CareCredit. <em>Veterinary Exam & Procedure Costs.</em> Routine visit national ranges.{' '}
              <a href="https://www.carecredit.com/vetmed/costs/" target="_blank" rel="noopener noreferrer">Link</a>
            </li>

            {/* Spay/neuter & microchip */}
            <li>
              Forbes Advisor. <em>Spay/Neuter Costs (2025 guide).</em> Typical U.S. pricing.{' '}
              <a href="https://www.forbes.com/advisor/pet-insurance/spay-neuter-cost/" target="_blank" rel="noopener noreferrer">Link</a>
            </li>
            <li>
              GoodRx. <em>Microchip Costs & options.</em> Typical U.S. range.{' '}
              <a href="https://www.goodrx.com/pet-health/pets/how-much-does-it-cost-to-microchip-your-pet" target="_blank" rel="noopener noreferrer">Link</a>
            </li>

            {/* Licensing (examples) */}
            <li>
              NYC. <em>Dog license fees.</em> Altered vs. unaltered examples.{' '}
              <a href="https://www.nyc.gov/site/doh/services/dog-licenses.page" target="_blank" rel="noopener noreferrer">Link</a>
            </li>
            <li>
              Pasadena/Glendale. <em>DocuPet license fees.</em> City example.{' '}
              <a href="https://pasadenahumane.docupet.com/en_US/licensing/glendale" target="_blank" rel="noopener noreferrer">Link</a>
            </li>

            {/* Preventives */}
            <li>
              GoodRx. <em>Heartworm treatment & prevention cost comparison.</em>{' '}
              <a href="https://www.goodrx.com/pet-health/dog/heartworm-treatment-cost-for-dogs" target="_blank" rel="noopener noreferrer">Link</a>
            </li>
            <li>
              GoodRx. <em>Simparica Trio price overview.</em>{' '}
              <a href="https://www.goodrx.com/simparica-trio" target="_blank" rel="noopener noreferrer">Link</a>
            </li>

            {/* Dentistry */}
            <li>
              Forbes Advisor. <em>Dog Teeth Cleaning Costs (2025).</em>{' '}
              <a href="https://www.forbes.com/advisor/pet-insurance/pet-care/dog-teeth-cleaning-costs/" target="_blank" rel="noopener noreferrer">Link</a>
            </li>
            <li>
              PetMD. <em>How Much Does Dog Teeth Cleaning Cost?</em>{' '}
              <a href="https://www.petmd.com/dog/care/how-much-does-dog-teeth-cleaning-cost" target="_blank" rel="noopener noreferrer">Link</a>
            </li>

            {/* Grooming */}
            <li>
              HomeGuide. <em>Dog Grooming Prices (2025).</em> National range overview.{' '}
              <a href="https://homeguide.com/costs/dog-grooming-prices" target="_blank" rel="noopener noreferrer">Link</a>
            </li>
            <li>
              PetSmart. <em>Grooming pricing.</em> Major chain reference.{' '}
              <a href="https://services.petsmart.com/grooming" target="_blank" rel="noopener noreferrer">Link</a>
            </li>

            {/* Training */}
            <li>
              Rover. <em>Dog Training Costs (2024–2025 ranges).</em>{' '}
              <a href="https://www.rover.com/blog/dog-training-cost/" target="_blank" rel="noopener noreferrer">Link</a>
            </li>
            <li>
              Toledo Dog Trainers. <em>Group class price bands.</em>{' '}
              <a href="https://toledodogtrainers.com/dog-training-cost/" target="_blank" rel="noopener noreferrer">Link</a>
            </li>

            {/* Daycare/boarding/walkers */}
            <li>
              Yelp Cost Guides. <em>Dog Daycare Cost Guide.</em>{' '}
              <a href="https://www.yelp.com/costs/dog-daycare" target="_blank" rel="noopener noreferrer">Link</a>
            </li>
            <li>
              Pet Resorts USA. <em>How Much Does Overnight Pet Boarding Cost?</em>{' '}
              <a href="https://www.petresortsusa.com/blog/2024/06/14/overnight-pet-boarding-cost/" target="_blank" rel="noopener noreferrer">Link</a>
            </li>
            <li>
              Time To Pet. <em>Dog Walking Rate Calculator (U.S. averages).</em>{' '}
              <a href="https://www.timetopet.com/dog-walking-rate-calculator" target="_blank" rel="noopener noreferrer">Link</a>
            </li>

            {/* Insurance (industry averages) */}
            <li>
              NAPHIA. <em>State of the Industry (2025) – Average U.S. dog premium (accident & illness) ~$749/year.</em>{' '}
              <a href="https://naphia.org/industry-data/2024-report/average-premiums/" target="_blank" rel="noopener noreferrer">Link</a>
            </li>

            {/* Breed health context */}
            <li>
              UC Davis Health. <em>Golden retriever longevity & cancer context.</em>{' '}
              <a href="https://www.ucdavis.edu/health/news/can-golden-retrievers-live-longer" target="_blank" rel="noopener noreferrer">Link</a>
            </li>
            <li>
              Morris Animal Foundation. <em>Golden Retriever Lifetime Study (overview + cancer focus).</em>{' '}
              <a href="https://www.morrisanimalfoundation.org/golden-retriever-lifetime-study" target="_blank" rel="noopener noreferrer">Link</a>
            </li>

            {/* Acquisition price context */}
            <li>
              AKC Marketplace (pricing varies by breeder/region).{' '}
              <a href="https://marketplace.akc.org/puppies/golden-retriever" target="_blank" rel="noopener noreferrer">Link</a>
            </li>
            <li>
              Dogster. <em>Golden Retriever adoption fee ranges.</em>{' '}
              <a href="https://www.dogster.com/lifestyle/how-much-does-it-cost-to-own-golden-retriever" target="_blank" rel="noopener noreferrer">Link</a>
            </li>
          </ul>

          <p className="text-xs text-gray-600 mt-4">
            Educational planning guide only; actual costs vary by dog, clinic, geography, and market conditions. Always consult your veterinary team for individualized medical guidance and your local providers for quotes.
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
