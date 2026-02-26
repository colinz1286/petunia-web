'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function HowBigAreCaneCorsos() {
  const locale = useLocale();

  const title =
    'How Big Are Cane Corsos? Realistic Weights by Age, Feeding Amounts, Gear Sizes, and True Cost of Care';
  const date = 'July 25, 2025';
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
            <li><a href="#size-snapshot" className="underline hover:opacity-80">Size Snapshot</a></li>
            <li><a href="#growth" className="underline hover:opacity-80">Growth &amp; Weight by Age</a></li>
            <li><a href="#body-condition" className="underline hover:opacity-80">Body Condition vs Numbers</a></li>
            <li><a href="#feeding" className="underline hover:opacity-80">How Much Food Do They Eat?</a></li>
            <li><a href="#budget" className="underline hover:opacity-80">Feeding Budget Math</a></li>
            <li><a href="#gear" className="underline hover:opacity-80">Beds, Crates, Collars, Harnesses</a></li>
            <li><a href="#home-setup" className="underline hover:opacity-80">Home Setup &amp; Space Planning</a></li>
            <li><a href="#travel" className="underline hover:opacity-80">Car Travel &amp; Safety</a></li>
            <li><a href="#exercise-joints" className="underline hover:opacity-80">Exercise, Weight &amp; Joints</a></li>
            <li><a href="#vet-costs" className="underline hover:opacity-80">Vet Costs: Large vs Small Dogs</a></li>
            <li><a href="#insurance" className="underline hover:opacity-80">Insurance or Self-Insure?</a></li>
            <li><a href="#first90" className="underline hover:opacity-80">First 90 Days Setup Plan</a></li>
            <li><a href="#checklists" className="underline hover:opacity-80">Owner Checklists</a></li>
            <li><a href="#faq" className="underline hover:opacity-80">FAQ</a></li>
            <li><a href="#sources" className="underline hover:opacity-80">Sources (Selected)</a></li>
          </ul>
        </nav>

        {/* TL;DR */}
        <section id="tldr" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Short Answer (TL;DR)</h2>
          <p className="mb-4">
            Cane Corsos are large, muscular guardian dogs. Typical adult males land roughly in the <strong>95–120 lb</strong> range (43–54 kg) and females
            in the <strong>85–110 lb</strong> range (39–50 kg), with heights around <strong>24–28 inches at the shoulder</strong> depending on registry and lines. Growth is rapid
            through the first year and continues to fill out until two to three years. Large size means <strong>higher food costs</strong>, <strong>bigger gear</strong>, and
            potentially <strong>more expensive surgeries</strong> than for small breeds. The most important lever you control is <strong>lean body condition</strong>: it protects
            joints, lowers lifetime costs, and keeps energy steady.
          </p>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Petunia tip:</strong> Store monthly side/top/rear photos in Petunia with weight and a 1–5 appetite/energy note. Trends—not single weigh-ins—tell
            the truth about growth and adult maintenance.
          </div>
        </section>

        {/* Size snapshot */}
        <section id="size-snapshot" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Size Snapshot: Height, Weight, and What &quot;Big&quot; Feels Like Day to Day</h2>
          <p className="mb-3">
            Breed standards describe a powerful, athletic mastiff. International standards (FCI) list adult heights roughly in the <strong>23.5–26 inches</strong>
            (60–66 cm) range for females and <strong>25–27.5 inches</strong> (64–70 cm) for males, with typical adult weights around <strong>40–50 kg</strong> (88–110 lb) depending on
            sex and condition. In North America, many family Corsos finish in the mid-to-upper 90s for females and 100s for males, with outliers
            above or below. Remember: <em>numbers are averages</em>, not goals. Your individual dog’s structure and metabolism drive a healthy target.
          </p>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>Head and chest:</strong> broad skull, solid jaw, deep ribcage; mass is carried up front.</li>
            <li><strong>Muscle:</strong> even a lean Corso looks thick compared to many large breeds; fat adds harmful, hidden load.</li>
            <li><strong>Stride:</strong> efficient trot with easy drive; stiffness or bunny-hopping suggests joint or soft tissue strain.</li>
          </ul>
          <p>
            Day-to-day reality: a big bed, a bigger crate, sturdy bowls, a front-clip harness for leverage, and mindful doorways and stairs.
            Planning for size turns power into calm, safe companionship.
          </p>
        </section>

        {/* Growth & weight by age */}
        <section id="growth" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Growth &amp; Weight by Age: Puppies → Seniors</h2>
          <p className="mb-3">
            Growth patterns vary, but most Corsos follow a predictable curve: <strong>rapid skeletal growth to ~10–12 months</strong>, then <strong>gradual filling out</strong>
            of muscle and chest until <strong>24–36 months</strong>. The goal is <strong>steady, lean growth</strong>, not maximal speed. Excess calories or calcium do not create
            a stronger dog; they create heavier load on developing joints.
          </p>

          <h3 className="text-lg font-semibold mt-2 mb-1">Typical weight touchpoints (very rough, individuals vary)</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>8–10 weeks:</strong> 15–25 lb (7–11 kg). New-home period. Expect fast weekly changes.</li>
            <li><strong>4 months:</strong> 35–55 lb (16–25 kg). Limbs look long; coordination is catching up.</li>
            <li><strong>6 months:</strong> 55–80 lb (25–36 kg). Adolescence begins; manage arousal and stairs.</li>
            <li><strong>9 months:</strong> 70–95 lb (32–43 kg). Many females slow; males keep climbing.</li>
            <li><strong>12 months:</strong> 80–105 lb (36–48 kg). Height close to adult; chest will broaden.</li>
            <li><strong>18–24 months:</strong> 85–115 lb (39–52 kg). Muscle and head mature; find adult maintenance calories.</li>
            <li><strong>24–36 months:</strong> 90–120+ lb (41–54+ kg). Final fill for many lines.</li>
          </ul>
          <p>
            Outliers happen. Smaller-framed Corsos exist and are often wonderful companions. The correct target is the <strong>healthiest body condition</strong>
            for your dog’s structure and activity—not a number someone posted online.
          </p>

          <h3 className="text-lg font-semibold mt-2 mb-1">Senior weight trends</h3>
          <p className="mb-3">
            After eight years, many large dogs lose muscle if activity drops. Monitor <strong>muscle condition score</strong> (MCS) in addition to body fat. Keep
            walks frequent and short, add simple strength holds, and adjust calories to preserve lean mass without adding fat.
          </p>
        </section>

        {/* Body condition */}
        <section id="body-condition" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Body Condition Beats the Scale: How to Judge Healthy Size</h2>
          <p className="mb-3">
            A healthy Corso carries <strong>visible waist</strong> from above, a gentle <strong>abdominal tuck</strong> from the side, and <strong>easily felt ribs</strong> under a thin fat layer.
            On a 9-point body condition scale, the sweet spot is typically <strong>4–5/9</strong>. Over 6/9 adds real orthopedic load and can shorten healthy
            lifespan across breeds. Photograph side/top/rear every month and compare.
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Coat can fool you:</strong> slick the hair back when feeling ribs.</li>
            <li><strong>Chest is not fat:</strong> Corsos are deep-chested; judge fat over the ribs and waist, not the sternum.</li>
            <li><strong>Precision scales:</strong> weigh at the vet or a pet store; home scale with you holding the dog is fine for puppies.</li>
          </ul>
        </section>

        {/* Feeding amounts */}
        <section id="feeding" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">How Much Food Do Cane Corsos Eat?</h2>
          <p className="mb-3">
            Feeding is math plus observation. Start with energy needs, then tune every two weeks based on the scale and photos. A common
            starting point is <strong>Resting Energy Requirement (RER)</strong> and an activity multiplier. Your veterinarian can refine this, but a simple path is:
          </p>
          <ul className="list-disc pl-5 space-y-2 mb-3">
            <li><strong>RER (kcal/day) ≈ 70 × (body weight in kg<sup>0.75</sup>)</strong>.</li>
            <li><strong>Daily calories ≈ RER × factor</strong> (growth, adult maintenance, senior). For many adult household Corsos, factors around <strong>1.2–1.6</strong> are
              common; growing puppies often <strong>2.0–3.0</strong> depending on stage. Always personalize.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Example (adult, 100 lb / 45 kg, moderate activity)</h3>
          <p className="mb-3">
            RER ≈ 70 × 45<sup>0.75</sup> ≈ 70 × 17.3 ≈ <strong>1,211 kcal</strong>. Multiply by 1.4 (example factor) ≈ <strong>1,695 kcal/day</strong>. If your chosen food provides
            380 kcal/cup, that is roughly <strong>4.5 cups/day</strong> split into meals. If weight creeps up, reduce by 10 percent and re-check in two weeks.
          </p>

          <h3 className="text-lg font-semibold mt-2 mb-1">Puppies</h3>
          <p className="mb-3">
            Use large-breed puppy or appropriate all-life-stage food with correct calcium/phosphorus. Feed measured meals, not free choice.
            Recalculate every two weeks; growth is not linear. Avoid overfeeding in growth spurts. Slow, lean growth protects joints.
          </p>

          <h3 className="text-lg font-semibold mt-2 mb-1">Seniors</h3>
          <p>
            Older dogs may need <strong>fewer calories</strong> if activity declines, or <strong>more protein</strong> to preserve muscle. Track appetite, stool, and weight,
            and adjust with your veterinary team. Lean seniors move longer and feel better.
          </p>
        </section>

        {/* Feeding budget */}
        <section id="budget" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Feeding Budget: What It Really Costs Per Month</h2>
          <p className="mb-3">
            Monthly cost depends on calories needed, calories per cup, bag size, and bag price. Here is a simple framework you can adapt.
          </p>

          <h3 className="text-lg font-semibold mt-2 mb-1">Step-by-step meal math (example)</h3>
          <ol className="list-decimal pl-5 space-y-2 mb-3">
            <li>Pick a realistic daily calorie target (example adult: <strong>1,700 kcal</strong>).</li>
            <li>Find calories per cup on the bag (example: <strong>380 kcal/cup</strong>).</li>
            <li>Daily cups ≈ 1,700 ÷ 380 ≈ <strong>4.5 cups/day</strong>.</li>
            <li>Monthly cups ≈ 4.5 × 30 ≈ <strong>135 cups</strong>.</li>
            <li>Bag contains 30 lb at 120 kcal/oz ≈ ~<strong>3,300–3,600 kcal</strong> total (varies widely). Many bags list total kcal; use that for accuracy.</li>
            <li>Bags per month ≈ total monthly kcal ÷ kcal per bag.</li>
          </ol>
          <p className="mb-3">
            In practice, many 90–110 lb Corsos eat <strong>1 to 2 large bags/month</strong> depending on brand energy density and activity. If a bag is USD 60–110,
            a common monthly range is roughly <strong>USD 60–220</strong> for kibble alone. Add treats, toppers, and supplements if you use them.
          </p>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Petunia tip:</strong> Photograph the feeding label and your exact measuring cup. Portion drift is real. Recheck amounts every two weeks using weight
            and body photos—not the scoop you wish were correct.
          </div>
        </section>

        {/* Gear sizes */}
        <section id="gear" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Beds, Crates, Collars, and Harnesses: Sizing for a Big Dog</h2>
          <p className="mb-3">
            Right-size gear makes life easier and safer. Corsos are long, deep-chested, and heavy through the shoulder. Plan for room to
            stretch and turn comfortably without swimming in extra space that encourages pacing.
          </p>

          <h3 className="text-lg font-semibold mt-2 mb-1">Beds</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>Orthopedic foam or raised cot:</strong> XXL/giant sizing; target at least 48&quot; length.</li>
            <li><strong>Heat management:</strong> raised cots breathe; add a washable pad for joints.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Crates</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>Wire/plastic:</strong> many adults fit a <strong>48&quot;</strong> crate; some smaller females can use <strong>42&quot;</strong> if built compactly.</li>
            <li><strong>Travel crates:</strong> measure nose-to-base-of-tail and floor-to-ear tips; follow manufacturer fit charts for safety.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Collars, harnesses, leashes</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Collar:</strong> wide, well-fitted flat collar for ID and handling.</li>
            <li><strong>Harness:</strong> sturdy harness with <strong>front and back</strong> attachment points for leverage.</li>
            <li><strong>Leash:</strong> 6-foot everyday leash; <strong>15–20 foot</strong> long line for decompression walks.</li>
          </ul>
        </section>

        {/* Home setup */}
        <section id="home-setup" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Home Setup &amp; Space Planning</h2>
          <p className="mb-3">
            Big dogs need calm traffic patterns. Place beds where the dog can see family without blocking hallways. Add traction runners on
            slick floors to prevent slips. Gate the kitchen and front entry so excitement at doors does not result in collisions on tile.
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Stairs:</strong> teach slow, controlled stair work; avoid racing.</li>
            <li><strong>Water bowls:</strong> heavy or non-tip; position away from high-traffic corners.</li>
            <li><strong>Storage:</strong> large, sealed food bins; safe chew storage to prevent guarding.</li>
          </ul>
        </section>

        {/* Travel */}
        <section id="travel" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Car Travel &amp; Safety for a Large Breed</h2>
          <p className="mb-3">
            A 100 lb dog is a projectile in a sudden stop. Use a <strong>crash-tested crate</strong> sized to the dog or a <strong>properly rated harness</strong> clipped into
            a vehicle anchor. Plan the car model and cargo space before you bring home a puppy that will outgrow a compact solution.
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Load with a <strong>ramp</strong> if jumping strains joints or the vehicle is high.</li>
            <li>Carry <strong>water</strong>, a <strong>mat</strong>, and a <strong>spare leash</strong> for stops.</li>
            <li>Never leave a dog in a hot vehicle; treat cars like ovens in warm weather.</li>
          </ul>
        </section>

        {/* Exercise & joints */}
        <section id="exercise-joints" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Exercise, Weight &amp; Joints: Why Size Raises the Stakes</h2>
          <p className="mb-3">
            The larger the dog, the more each extra pound stresses hips, elbows, and cruciate ligaments. The best joint supplement is a
            <strong> lean physique</strong>. Add structured walks, short strength sets, and calm enrichment. Avoid repetitive high-impact drills and slick surfaces.
            These principles are expanded in{' '}
            <Link
              href={`/${locale}/blog/are-cane-corsos-an-active-breed`}
              className="underline hover:opacity-80"
            >
              Are Cane Corsos an Active Breed
            </Link>
            , which focuses on building sustainable movement for a dog of this size.
          </p>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>Daily plan:</strong> two calm walks + one short skill block; strength 2–3 days/week.</li>
            <li><strong>Warm up &amp; cool down:</strong> 3–5 minutes each to reduce stiffness.</li>
            <li><strong>Nails &amp; traction:</strong> short nails improve posture; runners reduce slips.</li>
          </ul>
          <p>
            Work with your veterinary team on omega-3 support and any joint adjuncts appropriate for your dog. No supplement outperforms
            portion control and smart surfaces.
          </p>
        </section>

        {/* Vet costs */}
        <section id="vet-costs" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Veterinary Costs: Large vs Small Dogs</h2>
          <p className="mb-3">
            Many routine costs are similar across sizes (exam fees, vaccines), but several categories scale with size: anesthesia doses,
            imaging time, consumables, and surgery complexity. These size-related differences explain why certain conditions discussed in{' '}
            <Link
              href={`/${locale}/blog/do-cane-corsos-have-health-issues`}
              className="underline hover:opacity-80"
            >
              Do Cane Corsos Have Health Issues
            </Link>
            {' '}carry higher financial impact in large breeds. Ballpark ranges vary by region and hospital, but here are <strong>order-of-magnitude</strong>
            comparisons to help you plan:
          </p>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>Cruciate (TPLO/TTA):</strong> large dog often <strong>USD 3,000–6,000</strong> per knee; small dogs can be meaningfully lower depending on approach.</li>
            <li><strong>Total hip replacement:</strong> large dog often <strong>USD 5,000–7,500+</strong> per hip.</li>
            <li><strong>GDV (bloat) surgery:</strong> <strong>USD 3,000–7,000</strong> with hospitalization.</li>
            <li><strong>MRI + neurology consult:</strong> <strong>USD 2,000–4,000</strong> in many markets.</li>
            <li><strong>Comprehensive dental with radiographs:</strong> <strong>USD 500–1,200+</strong> depending on disease severity and extractions.</li>
          </ul>
          <p>
            Preventive care reduces emergency risk and makes interventions cheaper by catching issues early. Weigh monthly, keep teeth clean,
            and see your veterinarian promptly for lameness, cough, GI changes, or behavior shifts that hint at pain.
          </p>
        </section>

        {/* Insurance */}
        <section id="insurance" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Insurance or Self-Insure? Budgeting for a Big Dog</h2>
          <p className="mb-3">
            Insurance converts financial volatility into a monthly line item. Large-breed premiums vary by age, region, and plan design, but
            many owners pay roughly <strong>USD 40–120/month</strong>. Plans usually have deductibles and reimbursement percentages and exclude pre-existing
            conditions. Owners who automate savings into a dedicated pet account can self-insure if they are disciplined and can cover a
            <strong> USD 3,000–7,000</strong> event without stress.
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Insurance is worth a close look if a single large surgery would be hard to fund quickly.</li>
            <li>Savings plus prevention works if you contribute consistently and monitor risk factors.</li>
          </ul>
        </section>

        {/* First 90 days */}
        <section id="first90" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">First 90 Days: Size-Smart Setup Plan</h2>

          <h3 className="text-lg font-semibold mt-2 mb-1">Days 1–7: Measure, Map, and Manage</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Weigh accurately; take side/top/rear photos; start a Petunia log.</li>
            <li>Place traction runners and set up a 48&quot; crate or travel crate sized to your dog.</li>
            <li>Choose a front-clip harness and a 6-foot leash; fit checks daily as growth surges.</li>
            <li>Photograph food portions; begin measured meals with calm sit before bowls.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Weeks 2–6: Tune Feeding, Build Patterns</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Recalculate calories every two weeks; adjust by ±10 percent based on photos and weight.</li>
            <li>Two calm walks daily + one 5-minute skill block; simple strength 2–3 days/week.</li>
            <li>Visitor script: leash on, send to place, quiet ignoring, optional one-at-a-time greeting.</li>
            <li>Car plan: crate or rated harness; practice calm loading with a ramp if helpful.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Weeks 7–12: Proof in Real Life</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Quiet cafe sits, corner table, brief sessions; pay for calm glances and disengagement.</li>
            <li>Review teeth, nails, and ear care; book dental if your veterinarian recommends.</li>
            <li>Save your nearest 24-hour emergency hospital route and a backup route.</li>
          </ul>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm mt-3">
            <strong>Petunia tip:</strong> Turn this plan into repeating Petunia tasks with checkboxes. Consistency makes a big dog feel small in day-to-day life.
          </div>
        </section>

        {/* Checklists */}
        <section id="checklists" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Owner Checklists &amp; Templates</h2>

          <h3 className="text-lg font-semibold mt-2 mb-1">Monthly Size &amp; Condition Review</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Weigh on the same scale; log in Petunia with photos.</li>
            <li>Judge waist/tuck/ribs; adjust calories by 5–10 percent if needed.</li>
            <li>Check harness fit and collar size; growth sneaks up fast.</li>
            <li>Inspect nails, paw pads, and traction runners for wear.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Gear Sizing Card</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Bed length ≥ 48&quot; (XXL/giant). Add a washable topper.</li>
            <li>Crate 48&quot; for most adults; confirm with body measurements.</li>
            <li>Front-clip harness sized for deep chest; 6-foot leash + long line.</li>
            <li>Travel crate or rated car harness; ramp if needed.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Feeding Math Card</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Daily calories target (today): _______ kcal.</li>
            <li>Food kcal/cup: _______. Cups/day: _______. Cups/month: _______.</li>
            <li>Bags/month at _______ kcal per bag: _______. Monthly food cost: _______.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">Frequently Asked Questions</h2>

          <p className="mb-3">
            <strong>How big will my Cane Corso get?</strong><br />
            Most females finish in the mid 80s to low 100s (lb) and males in the mid 90s to 120s, with individual variation. Genetics, diet, and
            activity shape the final picture. Use body condition, not internet brag weights, to set goals.
          </p>

          <p className="mb-3">
            <strong>Is heavier better?</strong><br />
            No. Extra fat stresses joints and can shorten healthy years. A lean, athletic 95 lb Corso is healthier than a soft 115 lb dog with the
            same bones. Muscle is earned with movement; fat is just load.
          </p>

          <p className="mb-3">
            <strong>How much does food cost per month?</strong><br />
            Many adult Corsos eat roughly one to two large bags per month depending on brand energy density and activity, often in the USD 60–220
            range for kibble alone. Do the math for your calories and bag kcal to be precise.
          </p>

          <p className="mb-3">
            <strong>Is a 42&quot; crate enough?</strong><br />
            Some smaller females fit 42&quot; comfortably. Many adults need 48&quot; to stretch and turn with ease. Measure nose-to base-of-tail and floor-to-ear
            tips and compare to manufacturer guidance.
          </p>

          <p className="mb-3">
            <strong>Why do surgery costs vary so much?</strong><br />
            Region, hospital type, surgeon, equipment, and case complexity all matter. Larger dogs may require more anesthesia and consumables.
            Prevention and early intervention are the cheapest paths across a lifespan.
          </p>

          <p className="text-xs text-gray-600">
            Educational content only. Always consult your veterinarian for individualized medical and nutrition guidance.
          </p>
        </section>

        {/* Sources */}
        <section id="sources" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">📚 Sources (Selected)</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            <li>
              American Kennel Club (AKC). Cane Corso breed overview and care basics.
              <a href="https://www.akc.org/dog-breeds/cane-corso/" target="_blank" rel="noopener noreferrer"> AKC profile</a>
            </li>
            <li>
              Fédération Cynologique Internationale (FCI). Cane Corso Italiano standard (FCI No. 343).
              <a href="https://www.fci.be/en/nomenclature/CANE-CORSO-ITALIANO-343.html" target="_blank" rel="noopener noreferrer"> FCI standard</a>
            </li>
            <li>
              American Animal Hospital Association (AAHA). Canine life stage guidelines.
              <a href="https://www.aaha.org/education/guidelines/canine-life-stage-guidelines/" target="_blank" rel="noopener noreferrer"> AAHA guideline hub</a>
            </li>
            <li>
              WSAVA. Global nutrition and dental guideline hubs.
              <a href="https://wsava.org/global-guidelines/global-nutrition-guidelines/" target="_blank" rel="noopener noreferrer"> Nutrition</a> ·
              <a href="https://wsava.org/global-guidelines/dental-guidelines/" target="_blank" rel="noopener noreferrer"> Dental</a>
            </li>
            <li>
              American College of Veterinary Surgeons (ACVS). Gastric dilatation-volvulus overview and prophylactic gastropexy.
              <a href="https://www.acvs.org/small-animal/gastric-dilatation-volvulus" target="_blank" rel="noopener noreferrer"> ACVS resource</a>
            </li>
            <li>
              American Heartworm Society (AHS). Parasite prevention guidelines.
              <a href="https://www.heartwormsociety.org/veterinary-resources/american-heartworm-society-guidelines" target="_blank" rel="noopener noreferrer"> AHS guidelines</a>
            </li>
            <li>
              Orthopedic Foundation for Animals (OFA). Hip and elbow screening resources.
              <a href="https://ofa.org/" target="_blank" rel="noopener noreferrer"> OFA</a>
            </li>
          </ul>
          <p className="text-xs text-gray-600 mt-4">
            Breed sizes and costs vary regionally and by individual. Use this article as a planning framework and personalize it with your veterinary team.
          </p>
        </section>

        {/* Related Cane Corso Articles */}
        <div className="mt-16 border-t border-[#d9cfc2] pt-8">
          <h2 className="text-xl font-semibold mb-4 text-[#2c4a30]">
            More Cane Corso Guides You May Like
          </h2>

          <ul className="list-disc pl-6 space-y-2 text-[#2c4a30]">
            <li>
              <Link
                href="https://www.petuniapets.com/en/blog/what-is-the-bite-force-of-a-cane-corso"
                className="underline hover:opacity-80"
              >
                What Is the Bite Force of a Cane Corso?
              </Link>
            </li>
            <li>
              <Link
                href="https://www.petuniapets.com/en/blog/are-cane-corsos-good-family-dogs"
                className="underline hover:opacity-80"
              >
                Are Cane Corsos Good Family Dogs?
              </Link>
            </li>
            <li>
              <Link
                href="https://www.petuniapets.com/en/blog/do-cane-corsos-have-health-issues"
                className="underline hover:opacity-80"
              >
                Do Cane Corsos Have Common Health Issues?
              </Link>
            </li>
            <li>
              <Link
                href="https://www.petuniapets.com/en/blog/are-cane-corsos-an-active-breed"
                className="underline hover:opacity-80"
              >
                Are Cane Corsos an Active Breed?
              </Link>
            </li>
            <li>
              <Link
                href="https://www.petuniapets.com/en/blog/how-much-does-a-cane-corso-cost-to-own"
                className="underline hover:opacity-80"
              >
                How Much Does a Cane Corso Cost to Own?
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
