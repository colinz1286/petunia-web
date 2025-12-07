'use client';

import Head from 'next/head';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function HowMuchDoesAGermanShepherdCost() {
  const locale = useLocale();

  const title =
    'How Much Does a German Shepherd Cost? Real Purchase Prices, Regional Costs, and the True Cost of Ownership';
  const date = 'July 22, 2025';
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
    'A German Shepherd’s purchase price is the smallest line on a much bigger budget. This evidence-informed guide breaks down acquisition costs, first-year setup, food and medical care, insurance, training, grooming, dog-walking/daycare/boarding fees, and regional price differences across the U.S. (plus UK/Canada/Australia). Includes realistic monthly/annual budgets, lifetime scenarios, and cost-control tactics—without cutting corners on health or welfare.';

  return (
    <>
      <Head>
        <title>{title} – Petunia Blog</title>
        <meta name="description" content={description} />
        <meta name="robots" content="index,follow" />
        <link
          rel="canonical"
          href={`https://www.petuniapets.com/${locale}/blog/how-much-does-a-german-shepherd-cost`}
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
            <li><a href="#price-snapshot" className="underline hover:opacity-80">Quick Price Snapshot</a></li>
            <li><a href="#acquisition" className="underline hover:opacity-80">Acquisition: Breeder vs. Adoption</a></li>
            <li><a href="#first-year" className="underline hover:opacity-80">First-Year Setup</a></li>
            <li><a href="#food" className="underline hover:opacity-80">Food &amp; Nutrition</a></li>
            <li><a href="#medical" className="underline hover:opacity-80">Medical Care &amp; Insurance</a></li>
            <li><a href="#training" className="underline hover:opacity-80">Training &amp; Behavior</a></li>
            <li><a href="#grooming" className="underline hover:opacity-80">Grooming &amp; Coat Care</a></li>
            <li><a href="#exercise" className="underline hover:opacity-80">Exercise, Walkers, Daycare &amp; Boarding</a></li>
            <li><a href="#regions-us" className="underline hover:opacity-80">Regional Costs (U.S.)</a></li>
            <li><a href="#world" className="underline hover:opacity-80">UK, Canada &amp; Australia</a></li>
            <li><a href="#budgets" className="underline hover:opacity-80">Sample Budgets &amp; Lifetime Scenarios</a></li>
            <li><a href="#save" className="underline hover:opacity-80">Where to Save (Safely)</a></li>
            <li><a href="#faq" className="underline hover:opacity-80">FAQ</a></li>
            <li><a href="#sources" className="underline hover:opacity-80">📚 Sources (Selected)</a></li>
          </ul>
        </nav>

        {/* TL;DR */}
        <section id="tl-dr" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Short Answer (TL;DR)</h2>
          <p className="mb-3">
            Expect a <strong>first-year total</strong> around <strong>$3,000–$7,500+</strong> for a healthy pet GSD (purchase/adoption, initial setup,
            first vet work, training basics, food, grooming supplies, licensing/microchip, and a modest emergency fund). Ongoing
            <strong> annual costs</strong> typically land near <strong>$1,800–$4,800+</strong> depending on your region, food quality, vet fees, insurance,
            and how often you use daycare/boarders/walkers. Lifetime costs (10–13 years) regularly reach <strong>$22,000–$60,000+</strong>, and can go
            higher if you add insurance, travel, advanced training, or orthopedic surgeries common in large breeds.
          </p>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Petunia tip:</strong> The cheapest line on a GSD budget is “purchase price.” The budget busters are <em>food, veterinary care,
              training, and paid exercise/boarding</em>—all of which scale with a large, high-drive dog. Build a monthly pet sinking fund and automate it.
          </div>
        </section>

        {/* QUICK PRICE SNAPSHOT */}
        <section id="price-snapshot" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Quick Price Snapshot (Typical Ranges)</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Purchase (breeder):</strong> ~$1,500–$4,500 for pet-home puppies; much higher for titled/protection-trained adults.</li>
            <li><strong>Adoption:</strong> ~$50–$400 adoption fee; some cities run fee-waived events (still budget for vetting/gear).</li>
            <li><strong>First-year setup:</strong> ~$700–$1,800 for crate, gates, bed, bowls, ID, leash/harness, brushes, toys, training gear, etc.</li>
            <li><strong>Food:</strong> ~$70–$160/month for quality large-breed diets (higher if fresh/frozen).</li>
            <li><strong>Preventives:</strong> Heartworm + flea/tick ~$20–$50/month combined, size-dependent.</li>
            <li><strong>Routine vet care:</strong> ~$300–$800/year (wellness exam(s), vaccines, fecal/heartworm tests, basic labs).</li>
            <li><strong>Insurance:</strong> ~$45–$90+/month for accident &amp; illness, depending on age/ZIP/plan.</li>
            <li><strong>Training:</strong> Group $150–$350 per course; private $80–$160+/hour; sport/working outlets extra.</li>
            <li><strong>Grooming:</strong> Bath/brush/de-shed $55–$100+ per visit; home tools reduce costs.</li>
            <li><strong>Walkers/daycare/boarding:</strong> Walks $20–$35/30-min; daycare often ~$40–$55/day in major metros; boarding $60–$100+/night city-dependent.</li>
          </ul>
        </section>

        {/* ACQUISITION */}
        <section id="acquisition" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Acquisition: Breeder vs. Adoption</h2>
          <p className="mb-3">
            Reputable breeders of German Shepherd Dogs (GSDs) invest heavily in health testing, early socialization, and careful placement.
            That diligence shows up in the price. Pet-home puppies from responsible programs commonly land between <strong>$1,500 and $4,500</strong>,
            with working-line/protection prospects or titled adults costing significantly more. Adoption offers exceptional value: fees are often
            a few hundred dollars and frequently include core vaccines, sterilization, and microchipping. Either route, reserve cash for the
            first year’s setup and vetting.
          </p>
          <h3 className="text-lg font-semibold mt-2 mb-1">Checklist: What you’re paying for (breeder puppies)</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Hip/elbow screening in parents, and breeder-disclosed orthopedic/neurologic history.</li>
            <li>Early socialization (surfaces, sounds, handling), temperament matching, and contracts with support.</li>
            <li>Initial veterinary care (exam, deworming, vaccines) and registration paperwork.</li>
          </ul>
          <p className="mt-3">
            <em>Money-saving note:</em> Breed-specific rescues regularly place GSDs and GSD mixes into great pet homes. If your lifestyle favors an
            adult dog with known temperament—and you’re flexible about color/ear set/coat—adoption can be a smart financial and ethical choice.
          </p>
        </section>

        {/* FIRST YEAR */}
        <section id="first-year" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">First-Year Setup: Gear, Vetting, and “Hidden” Line Items</h2>
          <p className="mb-3">
            Large, athletic dogs outgrow puppy gear quickly and require sturdier equipment. Plan staged purchases and favor <em>modular</em> items
            (e.g., adjustable crates, car restraints) to avoid duplicates.
          </p>
          <h3 className="text-lg font-semibold mt-2 mb-1">Starter gear &amp; home setup (~$700–$1,800)</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Wire crate with divider (48”) and/or heavy-duty travel crate; baby gates/x-pens; non-slip rugs/runners.</li>
            <li>Flat collar + ID tag, martingale or properly fitted harness, 6–8 ft leash, long line for recall, poop bags.</li>
            <li>Stainless bowls + slow feeder, lick mats, freezer-safe toppers, food storage bin.</li>
            <li>Brushes (slicker + undercoat rake), nail grinder/clippers, canine toothbrush/gel, ear cleaner, dog-safe shampoo.</li>
            <li>Chews (rotate), durable toys (tug, fetch), puzzle feeders, treat pouch.</li>
            <li>Car restraint (crash-tested harness or secured crate), seat cover, first-aid kit.</li>
          </ul>
          <h3 className="text-lg font-semibold mt-2 mb-1">Initial veterinary care (variable)</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>New-pet exam, vaccine series/boosters, fecal/parasite testing, microchip, dewormers.</li>
            <li>Spay/neuter (timing individualized; discuss with your veterinarian, especially for large-breed growth plates).</li>
            <li>Heartworm/flea–tick prevention starter supply; baseline labs if adopting an adult.</li>
          </ul>
        </section>

        {/* FOOD */}
        <section id="food" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Food &amp; Nutrition: What a Large, Working-Breed Dog Really Eats</h2>
          <p className="mb-3">
            A healthy 65–90 lb GSD typically consumes <strong>~1,200–2,000 kcal/day</strong> depending on age, lean mass, climate, and workload.
            Large-breed-appropriate nutrition (complete &amp; balanced per AAFCO) supports skeletal health and body-condition control. Expect roughly
            <strong> $70–$160/month</strong> for quality kibble; fresh/frozen options can run <strong>$150–$350+/month</strong> for this size range. Treats and chews
            add another <strong>$10–$40/month</strong> depending on training volume and product type.
          </p>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm mb-3">
            <strong>Petunia tip:</strong> Keep your GSD near a <em>4–5/9</em> body-condition score. Fit dogs live longer, need fewer orthopedic interventions, and
            cost less to insure and treat. Portion by calories, not scoops; re-weigh monthly and adjust.
          </div>
          <h3 className="text-lg font-semibold mt-2 mb-1">Supplements &amp; extras (optional, discuss with your DVM)</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Omega-3s for joints/skin; joint nutraceuticals for seniors or orthopedic-prone dogs.</li>
            <li>Dental care: enzymatic paste, chews proven by VOHC, or periodic anesthesia dental cleanings if plaque/tartar accumulate.</li>
          </ul>
        </section>

        {/* MEDICAL & INSURANCE */}
        <section id="medical" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Medical Care &amp; Insurance: Routine, Emergencies, and Big-Ticket Risks</h2>
          <p className="mb-3">
            Annual wellness for a large dog often totals <strong>$300–$800</strong> (exams, vaccines, fecal/heartworm tests, basic labs). Dental cleanings
            vary widely with calculus and extractions; budget <strong>$400–$1,000+</strong> annually or biannually if your dog accrues tartar quickly.
            <em>Parasite prevention</em> averages roughly <strong>$20–$50/month</strong> combined (heartworm + flea/tick) for large-breed dosage tiers.
          </p>
          <p className="mb-3">
            Orthopedic issues (cruciate ligament tears, hip dysplasia) are the <em>expensive</em> outliers for GSD budgets. Surgical repairs like TPLO or hip
            replacement can run into the <strong>thousands per limb</strong>, and that’s before imaging, rehab, or complications. An emergency-only cushion of
            <strong> $1,500–$3,000</strong> is a sensible starting target; <em>$5,000+</em> is more realistic for major surgery access.
          </p>
          <h3 className="text-lg font-semibold mt-2 mb-1">Pet insurance (accident &amp; illness)</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Typical premiums for dogs in 2024–2025 clustered around <strong>$55–$75/month</strong> (nationwide averages; your ZIP/age/deductible shift this).</li>
            <li>Claims reimburse <em>after</em> you pay the vet; choose deductibles/annual limits you can carry <em>during</em> the claim window.</li>
            <li>Enroll young and keep continuous coverage to avoid pre-existing exclusions and age-related price jumps.</li>
          </ul>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Petunia tip:</strong> Whether you insure or self-insure, <em>do one</em>. We see the financial pain most often when owners intend to save “soon”
            and an orthopedic injury lands first. Automate the monthly transfer to your pet reserve the same day you pay rent/mortgage.
          </div>
        </section>

        {/* TRAINING */}
        <section id="training" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Training &amp; Behavior: The Smartest Money You’ll Spend</h2>
          <p className="mb-3">
            The GSD is brilliant, biddable, and active—traits that can blossom or backfire. Early, reward-based training prevents costly chewed drywall,
            reactivity, and leash mayhem. Budget for at least one <strong>group foundations course ($150–$350)</strong> and a few <strong>private sessions ($80–$160+/hr)</strong>
            to tune recall, neutrality around dogs/people, and home manners. Sports (IGP, herding, scentwork) and advanced obedience add fees but are
            excellent outlets for drive.
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Core skills:</strong> loose-leash walking, “go to mat,” rock-solid recall, leave/drop, calm greetings, and crate/settle.</li>
            <li><strong>Behavior insurance:</strong> teach muzzle-comfort as a life skill; it can avoid sedation fees in injury care.</li>
          </ul>
        </section>

        {/* GROOMING */}
        <section id="grooming" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Grooming &amp; Coat Care: Double Coat on a Budget</h2>
          <p className="mb-3">
            German Shepherds shed year-round with seasonal “blowouts.” Professional bath/brush/de-shed packages for a large double-coat often run <strong>$55–$100+</strong>
            per visit in many U.S. markets. Home care keeps costs down: a weekly slicker + undercoat rake routine, monthly nail care, and a quick ear/tooth check.
            <strong>Never shave a double coat</strong> for heat; manage temperature with shade, AC, hydration, and rest cycles.
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Budget saver:</strong> invest once in quality tools; set a recurring “coat day” on your calendar.</li>
            <li><strong>Health check:</strong> coat/skin quality tracks nutrition and stress—sudden changes warrant a DVM visit.</li>
          </ul>
        </section>

        {/* EXERCISE / DAYCARE / BOARDING */}
        <section id="exercise" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Exercise, Walkers, Daycare &amp; Boarding: The Big Swing Item</h2>
          <p className="mb-3">
            Routine exercise is a <em>health expense</em> as much as a time expense. Fit GSDs carry less weight on joints, cope better with stress, and need fewer
            behavior fixes. If your schedule is tight, budget for help. Typical rates in large U.S. metros: <strong>$20–$35 for a 30-minute walk</strong>, <strong>~$40–$55/day</strong> for
            doggy daycare, and <strong>$60–$100+/night</strong> for boarding (higher for holidays, single-household care, or extra-large dogs).
          </p>
          <h3 className="text-lg font-semibold mt-2 mb-1">DIY weekly rhythm (low cost, high payoff)</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Two brisk sniff-walks daily (15–30 min each) + one skill burst (2–4 min) before meals.</li>
            <li>Alternate “brain days” (scent games, shaping, trick chains) with “body days” (interval fetch, hike, structured tug).</li>
            <li>On office days, pre-book a mid-day walk or 1–2 daycare days/week to drain edge energy and protect your furniture.</li>
          </ul>
        </section>

        {/* REGIONAL (US) */}
        <section id="regions-us" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Regional Costs (U.S.): What Changes by City</h2>
          <p className="mb-3">
            Prices for veterinary services, pet insurance, daycare/boarding, and even food vary by metro. As a rule, expect <strong>higher fees in coastal
              cities</strong> and tourist hubs, and <strong>lower</strong> in smaller metros/suburbs. A few illustrative ranges:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>New York City:</strong> Daycare commonly ~<strong>$45–$50/day</strong>; boarding often <strong>$64–$108+/night</strong>; walkers around <strong>$25–$35/30-min</strong>.</li>
            <li><strong>Los Angeles:</strong> Daycare often ~<strong>$50/day</strong>; boarding around <strong>$63–$70+/night</strong>; walkers roughly <strong>$20–$30/30-min</strong>.</li>
            <li><strong>Chicago:</strong> Walkers frequently <strong>$20–$30/30-min</strong>; daycare <em>often</em> a bit below coastal rates; boarding widely variable by neighborhood.</li>
          </ul>
          <p className="mt-3">
            Licensing fees also vary widely by city and sterilization status—spayed/neutered dogs usually cost less to license annually.
          </p>
        </section>

        {/* WORLD */}
        <section id="world" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Beyond the U.S.: UK, Canada &amp; Australia (Quick Glance)</h2>
          <p className="mb-3">
            In the UK, mainstream charities estimate substantial monthly dog budgets once insurance and routine care are counted; veterinary
            price inflation has drawn regulatory attention. In Canada and Australia, official pet-care cost guides likewise put large-breed
            ownership well into the several-thousand-per-year bracket, with insurance and city location (Toronto/Vancouver/Sydney/Melbourne)
            as major swing factors. Boarding/daycare prices in capital cities often track major U.S. metros when converted to USD.
          </p>
        </section>

        {/* BUDGETS & LIFETIME */}
        <section id="budgets" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Sample Budgets &amp; Lifetime Scenarios</h2>
          <h3 className="text-lg font-semibold mt-2 mb-1">Monthly “typical” (healthy adult, no daycare)</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Food &amp; treats: $90–$180</li>
            <li>Preventives (avg’d monthly): $20–$50</li>
            <li>Routine care sinking fund: $35–$70</li>
            <li>Insurance (if used): $55–$85</li>
            <li>Training/grooming sinking fund: $20–$50</li>
            <li><strong>Total (no daycare/walker):</strong> ~$220–$435 (add exercise help as needed)</li>
          </ul>
          <h3 className="text-lg font-semibold mt-2 mb-1">Monthly with 2 daycare days/week</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Baseline from above + daycare 8–10 days: +$360–$550</li>
            <li><strong>Total:</strong> ~$580–$985/month (city/holiday surcharges push higher)</li>
          </ul>
          <h3 className="text-lg font-semibold mt-2 mb-1">Lifetime framing (10–13 years)</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Lean plan:</strong> $22k–$35k (frugal food, DIY grooming, minimal paid care, no major surgeries).</li>
            <li><strong>Typical plan:</strong> $30k–$55k (quality food, annual care, some training/daycare, insurance or savings).</li>
            <li><strong>Premium plan:</strong> $45k–$80k+ (fresh diets, robust training/sports, regular daycare/boarding, major orthopedic surgery covered).</li>
          </ul>
        </section>

        {/* SAVE */}
        <section id="save" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Where to Save (Safely)—and Where Not To</h2>
          <h3 className="text-lg font-semibold mt-2 mb-1">Smart places to economize</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>DIY grooming:</strong> the right rake + schedule beats most de-shed add-ons.</li>
            <li><strong>Training bundles:</strong> book small-group packages; ask for working-line-savvy instructors.</li>
            <li><strong>Food:</strong> pick complete &amp; balanced formulas with transparent labeling; buy larger bags and store properly.</li>
            <li><strong>Used but sturdy:</strong> crates, x-pens, gates, and car barriers from reputable resale sources.</li>
          </ul>
          <h3 className="text-lg font-semibold mt-2 mb-1">Do <em>not</em> cut corners on</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Preventives and core vaccinations (false economy; emergencies cost far more).</li>
            <li>Early training (every month of chaos costs you elsewhere—and risks injuries).</li>
            <li>Safe containment and transport (fences, gates, crash-tested restraint/crate).</li>
          </ul>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">Frequently Asked Questions</h2>

          <p className="mb-3">
            <strong>How much does it cost to buy a German Shepherd?</strong><br />
            Reputable pet-home puppies are commonly $1,500–$4,500. Adoption is often $50–$400 and can include vaccines/spay/neuter/microchip.
            Expect higher purchase prices for titled or protection-trained dogs.
          </p>

          <p className="mb-3">
            <strong>What’s the biggest long-term cost?</strong><br />
            Food, veterinary care (including a few big-ticket years), and paid exercise/boarding. Insurance premiums add predictability but
            increase monthly spend.
          </p>

          <p className="mb-3">
            <strong>Can diet and exercise really change lifetime costs?</strong><br />
            Absolutely. Keeping a lean body condition and meeting exercise needs reduce orthopedic strain, behavior fallout, and medication bills—often
            the difference between “manageable” and “runaway” costs over 10–13 years.
          </p>

          <p>
            <strong>Is insurance worth it for a GSD?</strong><br />
            Many owners say yes due to orthopedic risk. Run quotes with your ZIP/age and compare against what you could reliably self-insure. Enroll
            early and stick with one policy for best coverage continuity.
          </p>
        </section>

        {/* SOURCES */}
        <section id="sources" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">📚 Sources (Selected)</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            <li>
              American Kennel Club (AKC). German Shepherd Dog breed overview.{' '}
              <a href="https://www.akc.org/dog-breeds/german-shepherd-dog/" target="_blank" rel="noopener noreferrer">
                https://www.akc.org/dog-breeds/german-shepherd-dog/
              </a>
            </li>
            <li>
              Synchrony (CareCredit). <em>Pet Lifetime of Care</em> analysis (2025 press summary).{' '}
              <a href="https://www.synchrony.com/contenthub/newsroom/new-synchrony-study-finds-nearly-8-out-of-10-pet-owners.html" target="_blank" rel="noopener noreferrer">
                synchrony.com – Lifetime of Care (2025)
              </a>
            </li>
            <li>
              NAPHIA (North American Pet Health Insurance Association). <em>State of the Industry</em> (premium &amp; participation data).{' '}
              <a href="https://naphia.org/industry-data/" target="_blank" rel="noopener noreferrer">
                https://naphia.org/industry-data/
              </a>
            </li>
            <li>
              U.S. Bureau of Labor Statistics (BLS). CPI materials—pet services including veterinary; overall CPI context.{' '}
              <a href="https://www.bls.gov/news.release/cpi.htm" target="_blank" rel="noopener noreferrer">
                https://www.bls.gov/news.release/cpi.htm
              </a>
            </li>
            <li>
              Rover City Guides. Typical daycare and boarding costs by metro (NYC, LA, Brooklyn, etc.).{' '}
              <a href="https://www.rover.com/new-york-city--ny--doggy-day-care/" target="_blank" rel="noopener noreferrer">
                NYC Rover daycare (example)
              </a>{' '}|{' '}
              <a href="https://www.rover.com/los-angeles--ca--doggy-day-care/" target="_blank" rel="noopener noreferrer">
                LA Rover daycare (example)
              </a>{' '}|{' '}
              <a href="https://www.rover.com/los-angeles--ca--dog-boarding/" target="_blank" rel="noopener noreferrer">
                LA Rover boarding (example)
              </a>{' '}|{' '}
              <a href="https://www.rover.com/blog/new-york-dog-boarding-prices/" target="_blank" rel="noopener noreferrer">
                NYC boarding cost explainer
              </a>
            </li>
            <li>
              City licensing &amp; shelter references (adoption/licensing fees vary): NYC ACC; LA Animal Services; City of Chicago.{' '}
              <a href="https://www.nycacc.org/" target="_blank" rel="noopener noreferrer">NYC ACC</a>{' '}|{' '}
              <a href="https://www.laanimalservices.com/10-days-or-more" target="_blank" rel="noopener noreferrer">LA Animal Services</a>{' '}|{' '}
              <a href="https://www.chicago.gov/" target="_blank" rel="noopener noreferrer">City of Chicago</a>
            </li>
            <li>
              Veterinary orthopedic cost references (TPLO/THR ranges).{' '}
              <a href="https://vhc.missouri.edu/small-animal-hospital/surgery/canine-total-hip-replacement/" target="_blank" rel="noopener noreferrer">
                Univ. of Missouri – THR overview
              </a>{' '}|{' '}
              <a href="https://vety.com/costs/tplo-surgery-cost" target="_blank" rel="noopener noreferrer">
                Vety – TPLO cost explainer
              </a>
            </li>
            <li>
              UK/Canada/Australia overviews (cost-of-care context).{' '}
              <a href="https://www.gov.uk/cma-cases/vet-services-market-study" target="_blank" rel="noopener noreferrer">UK CMA – Vet services market</a>{' '}|{' '}
              <a href="https://www.rspca.org.au/" target="_blank" rel="noopener noreferrer">RSPCA Australia</a>
            </li>
          </ul>
          <p className="text-xs text-gray-600 mt-4">
            Educational content only. Always consult your veterinarian, trainer, and insurer for individualized medical and financial planning.
          </p>
        </section>

        {/* Related German Shepherd Articles */}
        <div className="mt-16 border-t border-[#d9cfc2] pt-8">
          <h2 className="text-xl font-semibold mb-4 text-[#2c4a30]">
            More German Shepherd Guides You May Like
          </h2>

          <ul className="list-disc pl-6 space-y-2 text-[#2c4a30]">
            <li>
              <Link
                href="https://www.petuniapets.com/en/blog/fun-facts-about-german-shepherds"
                className="underline hover:opacity-80"
              >
                Fun Facts About German Shepherds
              </Link>
            </li>

            <li>
              <Link
                href="https://www.petuniapets.com/en/blog/do-german-shepherds-shed-a-lot"
                className="underline hover:opacity-80"
              >
                Do German Shepherds Shed a Lot?
              </Link>
            </li>

            <li>
              <Link
                href="https://www.petuniapets.com/en/blog/how-long-do-german-shepherds-live"
                className="underline hover:opacity-80"
              >
                How Long Do German Shepherds Live?
              </Link>
            </li>

            <li>
              <Link
                href="https://www.petuniapets.com/en/blog/are-german-shepherds-aggressive-or-dangerous"
                className="underline hover:opacity-80"
              >
                Are German Shepherds Aggressive or Dangerous?
              </Link>
            </li>

            <li>
              <Link
                href="https://www.petuniapets.com/en/blog/are-german-shepherds-good-with-kids"
                className="underline hover:opacity-80"
              >
                Are German Shepherds Good with Kids?
              </Link>
            </li>

            <li>
              <Link
                href="https://www.petuniapets.com/en/blog/what-health-problems-are-common-in-german-shepherds"
                className="underline hover:opacity-80"
              >
                What Health Problems Are Common in German Shepherds?
              </Link>
            </li>
          </ul>
        </div>

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
