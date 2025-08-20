'use client';

import Head from 'next/head';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function HowMuchDoesACaneCorsoCostToOwn() {
  const locale = useLocale();

  const title =
    'How Much Does a Cane Corso Cost to Own? Purchase vs Adoption, Food by Life Stage, Healthcare, Insurance Math, Boarding/Daycare, Gear, and Lifetime Total';
  const date = 'July 15, 2025';
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
    'A practical, number-driven guide to Cane Corso ownership costs: purchase or adoption ranges, food and calories by life stage, preventive care, expected vet bills and big-ticket surgeries, insurance versus self-insuring, daycare and boarding, training, gear, and an evidence-informed lifetime total with sample budgets.';

  return (
    <>
      <Head>
        <title>{title} – Petunia Blog</title>
        <meta name="description" content={description} />
        {/* Per user preference, avoid the word "index" here. */}
        <meta name="robots" content="all" />
        <link
          rel="canonical"
          href={`https://www.petuniapets.com/${locale}/blog/how-much-does-a-cane-corso-cost-to-own`}
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
            <li><a href="#tldr" className="underline hover:opacity-80">TL;DR</a></li>
            <li><a href="#assumptions" className="underline hover:opacity-80">Assumptions &amp; Lifespan</a></li>
            <li><a href="#one-time" className="underline hover:opacity-80">One-Time Costs</a></li>
            <li><a href="#food" className="underline hover:opacity-80">Food by Life Stage</a></li>
            <li><a href="#preventive" className="underline hover:opacity-80">Preventive Vet Care</a></li>
            <li><a href="#parasites" className="underline hover:opacity-80">Parasite Prevention</a></li>
            <li><a href="#dental" className="underline hover:opacity-80">Dental Care</a></li>
            <li><a href="#emergencies" className="underline hover:opacity-80">Emergencies &amp; Big Surgeries</a></li>
            <li><a href="#insurance" className="underline hover:opacity-80">Insurance vs Self-Insure</a></li>
            <li><a href="#training" className="underline hover:opacity-80">Training &amp; Behavior</a></li>
            <li><a href="#groom-gear" className="underline hover:opacity-80">Grooming &amp; Gear</a></li>
            <li><a href="#daycare" className="underline hover:opacity-80">Daycare &amp; Boarding</a></li>
            <li><a href="#housing" className="underline hover:opacity-80">Housing &amp; Miscellaneous</a></li>
            <li><a href="#scenarios" className="underline hover:opacity-80">Two Sample Budgets</a></li>
            <li><a href="#lifetime" className="underline hover:opacity-80">Lifetime Cost Model</a></li>
            <li><a href="#faq" className="underline hover:opacity-80">FAQ</a></li>
            <li><a href="#sources" className="underline hover:opacity-80">Sources (Selected)</a></li>
          </ul>
        </nav>

        {/* TL;DR */}
        <section id="tldr" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Short Answer (TL;DR)</h2>
          <p className="mb-4">
            A Cane Corso is a large, powerful guardian breed. Total cost of ownership depends on food choices, health events, and whether you
            carry pet insurance. Realistic modern ranges for a large dog place <strong>annual recurring costs</strong> commonly in the <strong>USD 2,000–4,500+</strong> span for
            food, routine vet care, parasite prevention, dental, training, and gear, before daycare/boarding. Add <strong>USD 1,500–3,000+</strong> per year for
            regular daycare or frequent boarding. Rare but possible big-ticket events (for example cruciate or hip surgery) can add <strong>USD 3,000–7,500+</strong>
            per procedure. Owners who plan for these realities avoid financial stress and protect decision quality if an emergency occurs.
          </p>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Petunia tip:</strong> In Petunia, create a budget card with three lines: recurring monthly, emergency fund target, and optional insurance premium.
            Update it when food, rent, or veterinary prices change.
          </div>
        </section>

        {/* Assumptions */}
        <section id="assumptions" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Assumptions &amp; Lifespan</h2>
          <p className="mb-3">
            The AKC lists Cane Corso height ranges and an expected lifespan near <strong>9–12 years</strong>. This article models two horizons: a <strong>10-year</strong> life and a
            <strong> 12-year</strong> life to bracket totals. Costs are in U.S. dollars and reflect typical national ranges from veterinary and industry sources; local
            markets can be higher or lower. For planning, set a cushion above any median number. Sources for lifespan and breed basics: AKC breed profile. <a
              href="https://www.akc.org/dog-breeds/cane-corso/"
              target="_blank"
              rel="noopener noreferrer"
            >AKC profile</a>
          </p>
          <p>
            We will also reference third-party data on boarding/daycare averages, insurance premiums, and common surgery costs so that the totals you
            compute match what owners are paying in 2024–2025 markets. Citations are included at the end for transparency.
          </p>
        </section>

        {/* One-time costs */}
        <section id="one-time" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">One-Time Costs: Purchase, Adoption, Setup</h2>

          <h3 className="text-lg font-semibold mt-2 mb-1">Purchase price vs adoption</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>Reputable breeder:</strong> many Cane Corso puppies from health-focused U.S. breeders fall roughly in the <strong>USD 1,500–5,000+</strong> span (show and working
              lines can exceed that). <a href="https://www.carecredit.com/well-u/pet-care/cane-corso-dog-breed/" target="_blank" rel="noopener noreferrer">CareCredit breed guide</a></li>
            <li><strong>Adoption/shelter:</strong> general U.S. dog adoption fees often range <strong>USD 50–350+</strong>; breed-specific rescues for Corsos commonly post tiered fees
              (for example <strong>USD 200–600</strong> depending on age). <a href="https://www.chewy.com/education/dog/pet-parenting/pet-parenting-pet-lovers-dog-adoption-fees-explained" target="_blank" rel="noopener noreferrer">Chewy: adoption fees</a> · <a href="https://faq.canecorsorescue.org/faqs/how-much-is-the-adoption-donation" target="_blank" rel="noopener noreferrer">Cane Corso Rescue fee</a></li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Initial medical &amp; ID</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Spay/neuter, vaccines, exam, microchip, deworming: plan a few hundred dollars in a private practice; community programs can reduce cost.</li>
            <li>Early training class enrollment: <strong>USD 100–300</strong> for basic group classes in many markets.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Home setup &amp; transport</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Crate sized for an adult large mastiff build (many adults use 48&quot; length): <strong>USD 120–400</strong> depending on material and crash rating.</li>
            <li>Orthopedic bed or raised cot, XXL: <strong>USD 100–300</strong>.</li>
            <li>Front-clip harness + 6-foot leash + long line + ID tags: <strong>USD 80–180</strong>.</li>
            <li>Bowls, grooming tools, nail grinder, storage bins: <strong>USD 60–150</strong>.</li>
          </ul>

          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm mt-3">
            <strong>Quick math (setup baseline):</strong> adoption path with basic setup might run <strong>USD 600–1,400</strong> before food; a breeder path with the same setup might
            land in the <strong>USD 2,100–5,900+</strong> window depending on puppy price and local services.
          </div>
        </section>

        {/* Food by Life Stage */}
        <section id="food" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Food by Life Stage: Calories, Portions, and Real Budgets</h2>
          <p className="mb-3">
            A Corso&#39;s size and activity drive calories. A common starting point is <strong>Resting Energy Requirement (RER)</strong> ≈ 70 × (weight in kg<sup>0.75</sup>);
            multiply by an activity factor. Many adult household Corsos land near factors <strong>1.2–1.6</strong>. Use the scale and body photos every two weeks to
            adjust portions rather than trusting the bag&#39;s generic chart.
          </p>

          <h3 className="text-lg font-semibold mt-2 mb-1">Budgeting two ways</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>Kibble-only baseline:</strong> wide national estimates for dog food span roughly <strong>USD 20–60 per month</strong> for small dogs and higher for large dogs; for
              a 90–110 lb Corso on complete kibble, many owners report <strong>USD 60–150+/month</strong> depending on calories per cup and brand price. Industry roundups
              place medium dog food spend at <strong>USD 58–268/month</strong>, highlighting how product choice moves totals. <a href="https://www.rover.com/blog/how-much-is-dog-food/" target="_blank" rel="noopener noreferrer">Rover food cost</a></li>
            <li><strong>Fresh or hybrid:</strong> fresh subscriptions can run roughly <strong>USD 7–10/day</strong> for large dogs, or <strong>USD 200–300+/month</strong>, with broad ranges by plan.
              <a href="https://articles.hepper.com/how-much-does-dog-food-cost/" target="_blank" rel="noopener noreferrer">Hepper price ranges</a> · <a href="https://blog.myollie.com/how-much-does-fresh-dog-food-cost/" target="_blank" rel="noopener noreferrer">Ollie guide</a> · <a href="https://www.petful.com/food/the-farmers-dog-cost/" target="_blank" rel="noopener noreferrer">Farmer&#39;s Dog ranges</a></li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Example calculation (adult ~100 lb / 45 kg)</h3>
          <p className="mb-3">
            RER ≈ 70 × 45<sup>0.75</sup> ≈ 1,211 kcal. At a 1.4 factor, target ≈ <strong>1,695 kcal/day</strong>. If your food is 380 kcal/cup, you would feed about <strong>4.5 cups/day</strong>
            split into meals. If weight drifts up, cut 10 percent and re-check in two weeks.
          </p>

          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Petunia tip:</strong> Photograph the measuring cup beside the label and bowl. Log side/top/rear body photos monthly with notes on stool and energy.
          </div>
        </section>

        {/* Preventive care */}
        <section id="preventive" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Preventive Veterinary Care: Annual Rhythm</h2>
          <p className="mb-3">
            Most dogs benefit from at least <strong>one wellness exam per year</strong>, and seniors often from <strong>twice-yearly</strong> visits. Routine visit fees vary widely by market;
            national averages for a basic wellness exam commonly fall within double-digit to low-hundreds dollars. <a href="https://www.avma.org/resources-tools/avma-policies/aaha-avma-canine-preventive-healthcare-guidelines" target="_blank" rel="noopener noreferrer">AVMA/AAHA preventive guidance</a> · <a href="https://www.carecredit.com/vetmed/costs/" target="_blank" rel="noopener noreferrer">CareCredit: exam cost ranges</a>
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Core vaccines</strong> per regional risk and vet advice; titer testing is an option in some cases.</li>
            <li><strong>Baseline labs</strong> in early adulthood; annual labs thereafter; semiannual in seniors as advised.</li>
            <li><strong>Weight and body photos</strong> at every visit; the cheapest longevity lever is lean condition.</li>
          </ul>
        </section>

        {/* Parasites */}
        <section id="parasites" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Parasite Prevention: Small Bills Prevent Big Ones</h2>
          <p className="mb-3">
            Heartworm infection treatment for a large dog can reach <strong>four figures</strong>, while preventives cost far less. Industry and veterinary sources
            consistently emphasize prevention over treatment. <a href="https://www.heartwormsociety.org/resources/vet/infographics/355-weigh-the-costs" target="_blank" rel="noopener noreferrer">AHS: prevention vs treatment</a> · <a href="https://www.petmd.com/dog/parasites/how-much-does-heartworm-treatment-cost-dogs" target="_blank" rel="noopener noreferrer">PetMD: treatment cost</a>
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Heartworm prevention:</strong> many owners spend in the low-hundreds per year depending on product and size.</li>
            <li><strong>Flea/tick control:</strong> budget several hundred dollars per year for a large dog on modern preventives.</li>
          </ul>
          <p>
            Exact products and dosing are veterinary decisions; cost planning is about annual totals so that adherence never lapses.
          </p>
        </section>

        {/* Dental */}
        <section id="dental" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Dental Care: Routine That Pays Back</h2>
          <p className="mb-3">
            Professional dental cleanings under anesthesia vary by region and case complexity; national ranges frequently run from a few hundred
            dollars to four figures when radiographs and extractions are included. <a href="https://www.carecredit.com/well-u/pet-care/cat-and-dog-teeth-cleaning-cost-and-financing/" target="_blank" rel="noopener noreferrer">CareCredit: dental cleaning cost</a> · <a href="https://www.petmd.com/dog/care/how-much-does-dog-teeth-cleaning-cost" target="_blank" rel="noopener noreferrer">PetMD: dental cost factors</a>
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Brush 4–7 days per week; use veterinary toothpaste.</li>
            <li>Ask about dental radiographs during cleanings; hidden problems often live under the gumline.</li>
          </ul>
        </section>

        {/* Emergencies & big surgeries */}
        <section id="emergencies" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Emergencies &amp; Big Surgeries: The Outliers Worth Planning For</h2>
          <p className="mb-3">
            Large dogs face the same orthopedic and surgical possibilities as others, but size increases anesthesia and materials. Modern U.S. ranges
            for cruciate repair and hip replacement commonly fall in the several-thousand-dollar tier. <a href="https://vcahospitals.com/ballston-spa/services/advanced-care/tplo" target="_blank" rel="noopener noreferrer">VCA TPLO example</a> · <a href="https://vcahospitals.com/know-your-pet/total-hip-replacement-in-dogs" target="_blank" rel="noopener noreferrer">VCA: hip replacement overview</a>
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Cruciate (TPLO/TTA) per knee:</strong> often <strong>USD 3,000–6,000+</strong> depending on region, hospital, and size.</li>
            <li><strong>Total hip replacement (per hip):</strong> often <strong>USD 5,000–7,500+</strong> depending on technique and market.</li>
            <li><strong>GDV (bloat) surgery with hospitalization:</strong> roughly <strong>USD 3,000–7,000</strong> in many markets.</li>
            <li><strong>MRI with neurology consult:</strong> often <strong>USD 2,000–4,000</strong>.</li>
          </ul>
          <p>
            The goal of budgeting is not pessimism. It is to prevent financial triage pressure if a rare but solvable problem appears.
          </p>
        </section>

        {/* Insurance vs self-insure */}
        <section id="insurance" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Insurance vs Self-Insure: Which Fits Your Risk Profile?</h2>
          <p className="mb-3">
            U.S. accident-and-illness premiums for dogs averaged about <strong>USD 62/month</strong> in 2024 industry data; accident-only averaged about <strong>USD 16/month</strong>.
            Large guardian breeds often price above average because size and claim severity move premiums. <a href="https://naphia.org/industry-data/section-3-average-premiums/" target="_blank" rel="noopener noreferrer">NAPHIA average premiums</a>
          </p>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>If an unplanned USD 5,000 surgery would be hard to fund quickly,</strong> insurance is worth serious consideration.</li>
            <li><strong>If you maintain a robust emergency fund,</strong> disciplined self-insuring can work well with strict prevention and weight control.</li>
            <li>Pre-existing conditions are typically excluded; enroll early if you intend to carry a policy.</li>
          </ul>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Petunia tip:</strong> Whether you choose insurance or self-insure, automate the money movement. Owners fail when transfers require willpower.
          </div>
        </section>

        {/* Training & behavior */}
        <section id="training" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Training &amp; Behavior: Budget for Success</h2>
          <p className="mb-3">
            A Corso is intelligent and powerful. Group classes commonly run <strong>USD 100–300</strong> per course; private lessons can run <strong>USD 75–150+</strong> per hour depending
            on region and trainer experience. Early investment reduces downstream costs from preventable behavior issues and improves veterinary handling.
          </p>
        </section>

        {/* Grooming & Gear */}
        <section id="groom-gear" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Grooming &amp; Gear Replacement</h2>
          <p className="mb-3">
            Corsos have a short double coat. Most owners can handle routine brushing and nail care at home; budget <strong>USD 15–30</strong> for nail trims if a groomer handles
            them. Expect to replace beds and crates less often but at higher price points due to XXL sizing. Plan a small monthly set-aside for wear and tear.
          </p>
        </section>

        {/* Daycare & Boarding */}
        <section id="daycare" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Daycare &amp; Boarding: What Active Families Actually Spend</h2>
          <p className="mb-3">
            National summaries place dog daycare around <strong>USD 40/day</strong> on average and boarding commonly <strong>USD 40–60/night</strong>, with wide city-to-city variance.
            <a href="https://www.rover.com/blog/how-much-does-doggy-daycare-cost/" target="_blank" rel="noopener noreferrer">Rover daycare average</a> · <a href="https://www.rover.com/blog/how-much-does-dog-boarding-cost/" target="_blank" rel="noopener noreferrer">Rover boarding range</a> · <a href="https://www.dogster.com/lifestyle/how-much-does-dog-boarding-cost" target="_blank" rel="noopener noreferrer">Dogster price guide</a>
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>One day of daycare per week for a year at USD 40/day: ≈ <strong>USD 2,080</strong>.</li>
            <li>Two weeks of boarding per year at USD 55/night: ≈ <strong>USD 770</strong>.</li>
          </ul>
          <p>
            Guardian breeds often do best in structured, small-group programs. Ask about play style matching and staff ratios rather than shopping on price alone.
          </p>
        </section>

        {/* Housing & Misc */}
        <section id="housing" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Housing &amp; Miscellaneous</h2>
          <p className="mb-3">
            Some rentals charge pet rent (for example dozens of dollars per month). Licenses are typically modest annual fees. Vehicle choices and crate
            sizes can influence transportation costs. These items are real even if they are not veterinary bills.
          </p>
        </section>

        {/* Scenario budgets */}
        <section id="scenarios" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Two Sample Budgets (Annual, Before Taxes)</h2>

          <h3 className="text-lg font-semibold mt-2 mb-1">Scenario A: Kibble baseline, no daycare, self-insured</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Food (complete kibble): <strong>USD 900–1,500</strong> depending on calories and brand.</li>
            <li>Wellness exams, vaccines, labs: <strong>USD 250–700+</strong> depending on region and senior status.</li>
            <li>Parasite prevention (heartworm + flea/tick): <strong>USD 250–450</strong>.</li>
            <li>Dental fund (set aside even if not yearly): <strong>USD 200–600</strong>.</li>
            <li>Training refreshers, gear, toys, incidentals: <strong>USD 300–700</strong>.</li>
            <li><strong>Estimated annual subtotal:</strong> ≈ <strong>USD 1,900–3,950</strong> excluding emergencies.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Scenario B: Hybrid diet, insurance, daycare weekly, some boarding</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Food (hybrid fresh + kibble): <strong>USD 2,400–3,600</strong>.</li>
            <li>Insurance premium (accident &amp; illness): <strong>USD 750–1,500+</strong> depending on age/region/plan. <a href="https://naphia.org/industry-data/section-3-average-premiums/" target="_blank" rel="noopener noreferrer">NAPHIA</a></li>
            <li>Wellness out-of-pocket (exam fees, add-ons): <strong>USD 300–700</strong>.</li>
            <li>Parasite prevention: <strong>USD 300–500</strong>.</li>
            <li>Dental fund: <strong>USD 300–800</strong>.</li>
            <li>Daycare one day/week: ≈ <strong>USD 2,080</strong>. Boarding two weeks: ≈ <strong>USD 770</strong>.</li>
            <li>Training refreshers, gear: <strong>USD 400–800</strong>.</li>
            <li><strong>Estimated annual subtotal:</strong> ≈ <strong>USD 6,300–10,000+</strong> depending on diet and local prices.</li>
          </ul>
        </section>

        {/* Lifetime model */}
        <section id="lifetime" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Lifetime Cost Model: Putting It All Together</h2>
          <p className="mb-3">
            The lifetime total is sensitive to food and daycare choices, plus any big medical events. Use the scenarios above and multiply by your expected
            lifespan. Reference points from national consumer research place lifetime dog costs in the tens of thousands even without major surgeries, and
            higher for large breeds with regular services. <a href="https://www.rover.com/blog/press-release/cost-of-pet-parenthood-2025/" target="_blank" rel="noopener noreferrer">Rover 2025 lifetime figure</a>
          </p>

          <h3 className="text-lg font-semibold mt-2 mb-1">Example lifetime sums (ownership from 10 to 12 years)</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Lean baseline lifestyle, no weekly daycare:</strong> <em>USD 1,900–3,950</em> × 10–12 years = roughly <strong>USD 19,000–47,400</strong>, plus one-time setup and any
              emergencies.</li>
            <li><strong>Premium lifestyle with weekly daycare and insurance:</strong> <em>USD 6,300–10,000+</em> × 10–12 years = roughly <strong>USD 63,000–120,000+</strong>, plus setup and any
              non-covered expenses.</li>
          </ul>

          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm mt-3">
            <strong>Petunia tip:</strong> Model a <em>low</em>, <em>expected</em>, and <em>high</em> case. Fund the expected case with monthly automation and keep a separate emergency buffer
            for the high case so decisions remain calm during a bad day.
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">Frequently Asked Questions</h2>

          <p className="mb-3">
            <strong>Is adoption always the cheapest path?</strong><br />
            Often yes on day one, since fees frequently include vaccines, spay/neuter, and microchip. Over a lifetime, food, prevention, and training dwarf the
            initial price. Plan for recurring costs first.
          </p>

          <p className="mb-3">
            <strong>Will insurance always save money?</strong><br />
            Not always. Insurance smooths volatility. Some owners pay more in premiums than claims; others avoid five-figure shocks. The right choice is the
            one that preserves decision quality in your household.
          </p>

          <p className="mb-3">
            <strong>What one lever lowers costs the most without sacrificing care?</strong><br />
            Lean body condition. It reduces orthopedic strain, medication usage, and emergency risk. Portion control plus consistent walks and strength basics
            save more money than any single product swap.
          </p>
        </section>

        {/* Sources */}
        <section id="sources" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">📚 Sources (Selected)</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            <li>
              AKC Cane Corso breed profile: size and lifespan.{' '}
              <a href="https://www.akc.org/dog-breeds/cane-corso/" target="_blank" rel="noopener noreferrer">AKC</a>
            </li>
            <li>
              NAPHIA State of the Industry: average U.S. dog premiums (2024).{' '}
              <a href="https://naphia.org/industry-data/section-3-average-premiums/" target="_blank" rel="noopener noreferrer">NAPHIA data</a>
            </li>
            <li>
              Heartworm prevention vs treatment cost awareness.{' '}
              <a href="https://www.heartwormsociety.org/resources/vet/infographics/355-weigh-the-costs" target="_blank" rel="noopener noreferrer">American Heartworm Society</a> ·{' '}
              <a href="https://www.petmd.com/dog/parasites/how-much-does-heartworm-treatment-cost-dogs" target="_blank" rel="noopener noreferrer">PetMD treatment cost</a>
            </li>
            <li>
              Dental cleaning cost ranges and factors.{' '}
              <a href="https://www.carecredit.com/well-u/pet-care/cat-and-dog-teeth-cleaning-cost-and-financing/" target="_blank" rel="noopener noreferrer">CareCredit cost guide</a> ·{' '}
              <a href="https://www.petmd.com/dog/care/how-much-does-dog-teeth-cleaning-cost" target="_blank" rel="noopener noreferrer">PetMD overview</a>
            </li>
            <li>
              TPLO and hip replacement context/cost examples.{' '}
              <a href="https://vcahospitals.com/ballston-spa/services/advanced-care/tplo" target="_blank" rel="noopener noreferrer">VCA TPLO example pricing</a> ·{' '}
              <a href="https://vcahospitals.com/know-your-pet/total-hip-replacement-in-dogs" target="_blank" rel="noopener noreferrer">VCA hip replacement</a>
            </li>
            <li>
              Daycare and boarding averages.{' '}
              <a href="https://www.rover.com/blog/how-much-does-doggy-daycare-cost/" target="_blank" rel="noopener noreferrer">Rover daycare</a> ·{' '}
              <a href="https://www.rover.com/blog/how-much-does-dog-boarding-cost/" target="_blank" rel="noopener noreferrer">Rover boarding</a> ·{' '}
              <a href="https://www.dogster.com/lifestyle/how-much-does-dog-boarding-cost" target="_blank" rel="noopener noreferrer">Dogster guide (2025)</a>
            </li>
            <li>
              Food spending ranges and fresh diet cost context.{' '}
              <a href="https://www.rover.com/blog/how-much-is-dog-food/" target="_blank" rel="noopener noreferrer">Rover food cost analysis</a> ·{' '}
              <a href="https://articles.hepper.com/how-much-does-dog-food-cost/" target="_blank" rel="noopener noreferrer">Hepper 2025 price update</a> ·{' '}
              <a href="https://blog.myollie.com/how-much-does-fresh-dog-food-cost/" target="_blank" rel="noopener noreferrer">Ollie guide</a> ·{' '}
              <a href="https://www.petful.com/food/the-farmers-dog-cost/" target="_blank" rel="noopener noreferrer">Farmer&#39;s Dog ranges</a>
            </li>
            <li>
              Adoption fee ranges and breed-specific rescue example.{' '}
              <a href="https://www.chewy.com/education/dog/pet-parenting/pet-parenting-pet-lovers-dog-adoption-fees-explained" target="_blank" rel="noopener noreferrer">Chewy: fees</a> ·{' '}
              <a href="https://faq.canecorsorescue.org/faqs/how-much-is-the-adoption-donation" target="_blank" rel="noopener noreferrer">Cane Corso Rescue</a>
            </li>
            <li>
              Lifetime cost context.{' '}
              <a href="https://www.rover.com/blog/press-release/cost-of-pet-parenthood-2025/" target="_blank" rel="noopener noreferrer">Rover 2025 report</a>
            </li>
          </ul>
          <p className="text-xs text-gray-600 mt-4">
            Educational budgeting only. Costs vary by region, hospital, and plan design. Always consult your veterinarian and trainer for individualized
            guidance. Prices and ranges reflect U.S. sources available in 2024–2025.
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
