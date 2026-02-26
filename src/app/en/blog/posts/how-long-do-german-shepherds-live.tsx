'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function HowLongDoGermanShepherdsLive() {
  const locale = useLocale();

  const title =
    'How Long Do German Shepherds Live? Longevity, Healthspan, and a Practical Owner Playbook';
  const date = 'August 15, 2025';
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
            <li><a href="#tl-dr" className="underline hover:opacity-80">TL;DR</a></li>
            <li><a href="#lifespan-snapshot" className="underline hover:opacity-80">Lifespan Snapshot</a></li>
            <li><a href="#why-it-varies" className="underline hover:opacity-80">Why Lifespan Varies</a></li>
            <li><a href="#extend-life" className="underline hover:opacity-80">How To Extend Healthspan</a></li>
            <li><a href="#nutrition" className="underline hover:opacity-80">Nutrition &amp; Body Condition</a></li>
            <li><a href="#exercise-rehab" className="underline hover:opacity-80">Exercise &amp; Joint Care</a></li>
            <li><a href="#preventive-care" className="underline hover:opacity-80">Preventive Vet Care Timeline</a></li>
            <li><a href="#dental" className="underline hover:opacity-80">Dental Health &amp; Longevity</a></li>
            <li><a href="#parasites" className="underline hover:opacity-80">Parasites &amp; Infectious Disease</a></li>
            <li><a href="#gdv" className="underline hover:opacity-80">Bloat (GDV) Risk &amp; Prevention</a></li>
            <li><a href="#genetics" className="underline hover:opacity-80">Genetics: Hips, Elbows, DM, EPI</a></li>
            <li><a href="#senior" className="underline hover:opacity-80">Senior Care &amp; Cognitive Health</a></li>
            <li><a href="#home" className="underline hover:opacity-80">Home Setup, Grooming &amp; Heat</a></li>
            <li><a href="#daycare" className="underline hover:opacity-80">Daycare/Boarding for Adults/Seniors</a></li>
            <li><a href="#templates" className="underline hover:opacity-80">Checklists &amp; Templates</a></li>
            <li><a href="#faq" className="underline hover:opacity-80">FAQ</a></li>
            <li><a href="#sources" className="underline hover:opacity-80">Sources (Selected)</a></li>
          </ul>
        </nav>

        {/* TL;DR */}
        <section id="tl-dr" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Short Answer (TL;DR)</h2>
          <p className="mb-4">
            <strong>Most German Shepherds live around 10 years on average</strong>, with many reaching 11 to 13 when they maintain an ideal body
            condition, get structured exercise that protects joints, and receive consistent preventive veterinary care. The biggest
            levers you control are <strong>lean body weight</strong>, <strong>nutrition quality and portioning</strong>, <strong>lifelong fitness and joint protection</strong>,
            <strong> dental care</strong>, <strong>parasite prevention</strong>, and <strong>timely vet screening</strong>. Genetics matter, but daily habits move the needle.
          </p>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Petunia tip:</strong> Store your GSD’s weight trend, BCS photos, exercise plan, and vet schedule in Petunia. Consistency across
            family members and sitters is what turns good intentions into extra healthy months.
          </div>
        </section>

        {/* Lifespan Snapshot */}
        <section id="lifespan-snapshot" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Lifespan Snapshot: What To Expect</h2>
          <p className="mb-3">
            Population studies in primary-care veterinary records report a <strong>median lifespan near 10.3 years</strong> for German Shepherd Dogs.
            That is typical for a large, athletic breed. Do not treat 10 as a ceiling. With proactive care, many individuals reach
            low teens with good quality of life.
          </p>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>Typical range:</strong> roughly 9 to 13 years, with tails on either side depending on genetics and care.</li>
            <li><strong>Common end-of-life drivers:</strong> musculoskeletal decline affecting mobility, cancers (including hemangiosarcoma),
              and multi-factor causes summarized by vets as inability to rise or stand.</li>
            <li><strong>Healthspan matters:</strong> the goal is more comfortable months doing normal dog things, not just more calendar days.</li>
          </ul>
          <p>
            This guide focuses on what extends both <em>lifespan</em> and <em>healthspan</em> in real homes: weight control, food quality, smart
            exercise, dental health, prevention of parasites and GDV, and early detection of treatable issues.
          </p>
        </section>

        {/* Why lifespan varies */}
        <section id="why-it-varies" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Why GSD Lifespan Varies So Much</h2>
          <p className="mb-3">
            Two German Shepherds living on the same street can age very differently. Genetics set the slope of the curve; <em>management</em>
            shifts the curve. Here are the big drivers.
          </p>

          <h3 className="text-lg font-semibold mt-2 mb-1">1) Body size and joint load</h3>
          <p className="mb-3">
            Larger dogs face higher mechanical stress on hips, elbows, and cruciate ligaments. Over time this can amplify arthritis and
            mobility decline. The lever you control is keeping a <strong>lean body condition</strong> so joints carry less work for every step.
          </p>

          <h3 className="text-lg font-semibold mt-2 mb-1">2) Genetics and breeding choices</h3>
          <p className="mb-3">
            Hip and elbow dysplasia risk, spinal disease like degenerative myelopathy (DM), and some cancer predispositions vary with lines.
            Dogs from breeders who screen hips, elbows, and relevant DNA markers shift risk in your favor. That is not a guarantee, but it
            stacks the deck toward healthier aging.
          </p>

          <h3 className="text-lg font-semibold mt-2 mb-1">3) Reproductive timing</h3>
          <p className="mb-3">
            Early spay/neuter before skeletal maturity is associated with higher rates of joint disorders in GSDs in some datasets. Work with
            your veterinarian on breeding-neutral, individualized timing that balances orthopedic risk with behavior, household management,
            pyometra or testicular cancer risk, and population control goals.
          </p>

          <h3 className="text-lg font-semibold mt-2 mb-1">4) Lifestyle: weight, diet, movement, sleep</h3>
          <p className="mb-3">
            Chronic excess calories and low activity shorten canine lifespan across breeds. In contrast, portion control, protein-forward
            diets that meet AAFCO or FEDIAF profiles, and structured exercise patterns support joint health, body composition, and energy.
          </p>

          <h3 className="text-lg font-semibold mt-2 mb-1">5) Preventive medicine access</h3>
          <p>
            Annual and then twice-yearly senior visits, dental cleanings when indicated, parasite prevention, and baseline bloodwork catch
            problems early, when they are cheaper and easier to treat. That translates directly into more comfortable months together.
          </p>
        </section>

        {/* Extend life */}
        <section id="extend-life" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">How To Extend Healthspan: The Levers You Control</h2>
          <p className="mb-3">
            Evidence from long-term studies and clinical practice points to several practical levers that add up. You do not need a perfect
            routine. You need a repeatable one. Build these into your week and share the plan with every caregiver so it sticks.
          </p>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>Hold ideal body condition:</strong> ribs easy to feel without a thick fat pad; clear waist and abdominal tuck. Aim for a 9-point
              BCS of 4 or 5. Use a kitchen scale for food portions and weigh your dog monthly.</li>
            <li><strong>Feed complete, portioned meals:</strong> choose a food that meets current AAFCO or FEDIAF profiles for your dog’s life stage;
              measure to calories, not scoops; add water for hydration and satiety.</li>
            <li><strong>Program exercise:</strong> daily walks plus skill work, scent games, and strength routines that protect joints. Warm up and cool down.</li>
            <li><strong>Brush teeth and book cleanings:</strong> teeth brushing 4 to 7 days per week; professional cleanings as recommended.</li>
            <li><strong>Prevent parasites:</strong> year-round heartworm prevention where indicated; tick and flea control based on regional risk.</li>
            <li><strong>Screen on a schedule:</strong> baseline labs in early adulthood, then annual; switch to every 6 months for seniors with trend
              tracking. Add imaging or specific tests based on risk.</li>
            <li><strong>Plan for GDV risk:</strong> know bloat signs and discuss prophylactic gastropexy at time of spay/neuter for at-risk individuals.</li>
          </ul>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Petunia tip:</strong> In Petunia, create a repeatable weekly block: weigh, brush, nail check, ear check, plus 2 joint-friendly strength
            sessions. Attach videos so every caregiver copies the same motions.
          </div>
        </section>

        {/* Nutrition */}
        <section id="nutrition" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Nutrition &amp; Body Condition: The Single Biggest Lifespan Lever</h2>
          <p className="mb-3">
            If you only optimize one thing, optimize body condition. Lean-fed dogs live longer in controlled research, and overweight status
            shortens lifespan in real-world datasets. For a large athlete like a GSD, removing 10 to 20 percent of excess weight can transform
            joint comfort and activity capacity within weeks.
          </p>

          <h3 className="text-lg font-semibold mt-2 mb-1">Targets and tools</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>BCS goal:</strong> 4 to 5 on a 9-point scale. Keep monthly photos: side, top, rear. Trend in Petunia.</li>
            <li><strong>Calories:</strong> start at Resting Energy Requirement times an activity factor your vet recommends; adjust every 2 weeks based on
              the scale and BCS, not the bag chart.</li>
            <li><strong>Protein:</strong> ensure adequate high-quality protein to support lean mass, especially in seniors and during weight loss.</li>
            <li><strong>Meal rhythm:</strong> feed measured meals, not free choice. Use slow feeders for enthusiasm. Hydrate kibble with warm water.</li>
            <li><strong>Treats:</strong> cap at 10 percent of daily calories. Use part of the measured ration for training.</li>
            <li><strong>Supplements:</strong> omega-3s from marine sources can help joints and coat; discuss dosing and product quality with your vet.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Weight loss plan (if BCS is 6 or higher)</h3>
          <ol className="list-decimal pl-5 space-y-2 mb-3">
            <li>Weigh on the same scale weekly. Record weight, BCS, and a 10-second walk video.</li>
            <li>Reduce daily calories by 10 to 15 percent; switch to a veterinary weight management diet if hunger sabotages adherence.</li>
            <li>Add two extra 10-minute sniff walks per day and one 5-minute strength routine (sit-to-stand, cookie stretches).</li>
            <li>At 2 weeks, reassess; adjust calories by another 5 to 10 percent if there is no progress and your vet agrees.</li>
          </ol>

          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Petunia tip:</strong> Photograph the measuring cup next to the food label and your dog’s bowl. Caregivers replicate portions exactly.
          </div>
        </section>

        {/* Exercise & rehab */}
        <section id="exercise-rehab" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Exercise &amp; Joint Care: Fit, Strong, and Symmetric</h2>
          <p className="mb-3">
            German Shepherds thrive on daily movement and mental work. The goal is a program that builds fitness while protecting joints so
            you can keep exercising into the senior years. Think pattern, not punishment: short, regular sessions beat weekend marathons.
          </p>

          <h3 className="text-lg font-semibold mt-2 mb-1">A weekly template you can start today</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>Daily walks:</strong> 2 sessions of 20 to 40 minutes at a conversational pace; add hills or varied surfaces if joints allow.</li>
            <li><strong>Strength twice weekly:</strong> 5 to 8 minutes of controlled sit-to-stand sets, elevated stand holds, diagonal leg lifts, cookie
              stretches, and cavaletti poles at low height.</li>
            <li><strong>Cardio bursts:</strong> 2 to 3 short fetch or tug sets with full recovery between; stop before fatigue changes gait or enthusiasm.</li>
            <li><strong>Mind work:</strong> 10 minutes of nosework searches or trick training on non-strength days.</li>
            <li><strong>Warm up and cool down:</strong> 3 to 5 minutes of easy walking at the start and end; towel dry and inspect paws and nails.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Protecting hips, elbows, and cruciates</h3>
          <p className="mb-3">
            Avoid repetitive ball throwing on slick surfaces and uncontrolled stair sprints. Build symmetry: equal turns, both directions over
            poles, and flat figure-eights. If your dog shows intermittent lameness, reluctance to jump into the car, or bunny-hopping at the
            trot, pause the athletic work and book a vet exam.
          </p>

          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Petunia tip:</strong> Upload a short weekly gait video to Petunia. Share it with your vet or rehab team to spot subtle changes early.
          </div>
        </section>

        {/* Preventive care */}
        <section id="preventive-care" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Preventive Veterinary Care: A Timeline You Can Follow</h2>
          <p className="mb-3">
            Preventive care pays back in quality of life and costs. GSDs benefit from a structured calendar that adjusts as they age. Use
            this as a starting point and tailor with your veterinary team.
          </p>

          <h3 className="text-lg font-semibold mt-2 mb-1">Puppy to 18 months</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Core vaccines per regional risk and vet guidance; early behavior and socialization support.</li>
            <li>Discuss hip and elbow screening strategy for breeding prospects or for baseline orthopedic planning.</li>
            <li>Nutrition coaching to prevent rapid growth and overweight status during skeletal development.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Young adult (18 months to 5 years)</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Annual exam with weight trend, BCS, stool test, and parasite prevention review.</li>
            <li>Baseline bloodwork once; repeat based on findings or if medications start.</li>
            <li>Dental assessment each visit; cleaning when indicated.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Mature adult (5 to 8 years)</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Annual or semiannual vet visits based on activity and orthopedic history.</li>
            <li>Yearly labs including CBC, chemistry, and urinalysis for trends; blood pressure if available.</li>
            <li>Imaging if new cough, weight loss, abdominal distension, or lameness patterns emerge.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Senior (8+ years)</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Semiannual visits with weight, BCS, muscle condition scoring, and mobility screen.</li>
            <li>Labs every 6 months; add thyroid and cardiac screening if indicated.</li>
            <li>Cancer awareness: new lumps, pale gums, weakness after exercise, or sudden collapse need urgent evaluation.</li>
          </ul>
        </section>

        {/* Dental */}
        <section id="dental" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Dental Health &amp; Longevity: Small Habit, Big Return</h2>
          <p className="mb-3">
            Periodontal disease is the most common medical condition in adult dogs and is linked with systemic inflammation. A boring habit
            like brushing is a quiet longevity play: it reduces oral pain and may reduce downstream organ burden.
          </p>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Toothbrushing 4 to 7 days per week with veterinary toothpaste.</li>
            <li>VOHC-accepted chews as adjuncts, not replacements.</li>
            <li>Professional cleanings when your vet recommends; ask for dental radiographs to find problems under the gumline.</li>
          </ul>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Petunia tip:</strong> Add a 3-minute brushing block to your evening routine in Petunia and tag the family member responsible each day.
          </div>
        </section>

        {/* Parasites */}
        <section id="parasites" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Parasites &amp; Infectious Disease: Do the Simple Things Well</h2>
          <p className="mb-3">
            Year-round heartworm prevention is still the standard in many regions. Tick and flea control depends on your location and travel.
            Preventing infections preserves quality of life and avoids costly treatment.
          </p>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Use a vet-recommended heartworm preventive and test per guidelines.</li>
            <li>Choose tick and flea control that fits your area and household; set recurring reminders.</li>
            <li>Keep core vaccines current; consider lifestyle vaccines when risk warrants.</li>
          </ul>
        </section>

        {/* GDV */}
        <section id="gdv" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Bloat (GDV) Risk &amp; Prevention: Know the Signs, Plan Ahead</h2>
          <p className="mb-3">
            Large, deep-chested breeds have risk for gastric dilatation-volvulus (GDV). While German Shepherds are not the highest-risk
            breed, awareness saves lives. Learn the signs: unproductive retching, distended abdomen, restlessness, drooling, and rapid
            decline. This is an emergency.
          </p>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Discuss <strong>prophylactic gastropexy</strong> with your vet if your dog is at elevated risk or has a close relative with GDV.</li>
            <li>Feed measured meals; avoid single large meals after intense exercise; provide water access and calm rest after eating.</li>
            <li>Know your 24-hour emergency hospital and route.</li>
          </ul>
        </section>

        {/* Genetics */}
        <section id="genetics" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Genetics &amp; Screening: Hips, Elbows, DM, and EPI</h2>
          <p className="mb-3">
            You cannot pick your dog’s parents after the fact, but you can work with what you have. Baseline exams and targeted screening
            give you early options and a clearer exercise plan.
          </p>

          <h3 className="text-lg font-semibold mt-2 mb-1">Hips and elbows</h3>
          <p className="mb-3">
            Hip and elbow dysplasia are common orthopedic issues in GSDs. If you plan athletic sports or your dog has chronic stiffness,
            discuss imaging. For breeders and working prospects, hip and elbow evaluations through established schemes are standard.
          </p>

          <h3 className="text-lg font-semibold mt-2 mb-1">Degenerative myelopathy (DM)</h3>
          <p className="mb-3">
            DM is a late-onset spinal cord disease associated with SOD1 variants in many breeds. Affected dogs develop progressive hind
            limb ataxia and weakness in later life. DNA testing cannot predict with certainty that disease will occur, but it informs breeding
            and can guide monitoring for early mobility support.
          </p>

          <h3 className="text-lg font-semibold mt-2 mb-1">Exocrine pancreatic insufficiency (EPI)</h3>
          <p className="mb-3">
            EPI is overrepresented in GSDs. Classic signs are weight loss despite a ravenous appetite and large-volume stool. If suspected,
            your vet can run a TLI test and begin pancreatic enzyme replacement and cobalamin support. Treated dogs can live full lives.
          </p>
        </section>

        {/* Senior */}
        <section id="senior" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Senior Care &amp; Cognitive Health: Twice-Yearly Rhythm</h2>
          <p className="mb-3">
            At 8 years and older, switch to a senior cadence: shorter sessions, more recovery, and tighter medical monitoring. Keep minds
            busy with scent games, puzzle feeders, and calm social time. Add traction runners and ramps at home.
          </p>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>Mobility:</strong> add low-impact hydrotherapy if joints allow; break walks into shorter, cooler segments.</li>
            <li><strong>Senses:</strong> hearing and vision changes are common; add hand signals and night lights.</li>
            <li><strong>Cognition:</strong> watch for pacing at night, new anxiety, or house soiling; discuss diet, enrichment, and medication options.</li>
            <li><strong>Comfort:</strong> orthopedic beds, nail length control, and regular grooming to prevent mats and skin infections.</li>
            <li><strong>Quality of life:</strong> track good days vs hard days using a simple scorecard. Plan early for at-home support and end-of-life preferences.</li>
          </ul>
        </section>

        {/* Home, grooming, heat */}
        <section id="home" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Home Setup, Grooming &amp; Heat: Small Systems, Big Payoff</h2>
          <p className="mb-3">
            Grooming does not just keep the home cleaner; it prevents skin infections, spots tick bites early, and helps you catch lumps
            or pain responses while they are small problems.
          </p>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>Brush the double coat:</strong> 2 to 3 times weekly with a slicker and an undercoat tool used correctly; follow with a metal comb.
              During seasonal coat blows, increase frequency so air reaches the skin.</li>
            <li><strong>Bathing:</strong> every 4 to 8 weeks or as needed, using gentle dog shampoo; rinse thoroughly and dry well to avoid hot spots.</li>
            <li><strong>Nails and paws:</strong> trim every 2 to 4 weeks; protect pads on hot pavement; check for interdigital irritation.</li>
            <li><strong>Heat management:</strong> exercise at dawn and dusk in hot months; offer shade, water, and AC rest; watch panting recovery time.</li>
            <li><strong>House traction:</strong> runners on slick floors; ramps for cars and sofas to reduce jump impact.</li>
          </ul>

          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Petunia tip:</strong> Upload a 1-page grooming map to Petunia: tools, frequency, and a quick photo of your brush and comb. Share
            it with sitters so coat care stays consistent during busy seasons.
          </div>
        </section>

        {/* Daycare/Boarding */}
        <section id="daycare" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Daycare &amp; Boarding for Adult and Senior GSDs</h2>
          <p className="mb-3">
            The right program respects age and orthopedic history. Fast, slippery play is not mandatory for a good day. Ask facilities how
            they manage large, athletic herding breeds, and how they support older dogs who prefer people time and sniff walks.
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Small-group options:</strong> match play by size and style; shorten sets and add cool-downs.</li>
            <li><strong>Traction surfaces and ramps:</strong> minimize slips and jump impact.</li>
            <li><strong>Medication and feeding protocols:</strong> measured meals; note gastropexy status and any guarding history.</li>
            <li><strong>Same-day reporting:</strong> any new lameness, cough, GI upset, or skin issues get flagged with photos.</li>
          </ul>
        </section>

        {/* Templates */}
        <section id="templates" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Checklists &amp; Templates</h2>

          <h3 className="text-lg font-semibold mt-2 mb-1">Weekly Longevity Routine (Print This)</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Weigh on the same scale; log weight and BCS photo set.</li>
            <li>Two dental sessions of at least 2 minutes each; brush more days if you can.</li>
            <li>Strength blocks twice; 5 to 8 minutes with good form.</li>
            <li>Nail trim or check; ear check; quick skin and lump scan during brushing.</li>
            <li>Parasite preventive check and refill dates; note any missed doses.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Vet Screening Timeline (Owner Quick Reference)</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Puppy: vaccine series, parasite control, growth and nutrition coaching.</li>
            <li>Young adult: annual exam, stool test, dental assessment, baseline labs once.</li>
            <li>5 to 8 years: annual or semiannual exams with labs and mobility screens.</li>
            <li>8+ years: semiannual exams with labs; discuss imaging and cancer awareness.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">GDV Emergency Cues</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Sudden distended abdomen; unproductive retching; restlessness; drooling.</li>
            <li>Collapse or pale gums: go to emergency hospital immediately.</li>
            <li>Keep a printed route and backup route in the glove box.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Weight Loss Sprint (4 Weeks)</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Reduce calories 10 to 15 percent; measure with a kitchen scale.</li>
            <li>Two extra 10-minute sniff walks daily; one 5-minute strength circuit.</li>
            <li>Reweigh at 14 days; adjust again if no change. Celebrate small wins.</li>
          </ul>

          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm mt-3">
            <strong>Petunia tip:</strong> Attach these checklists as pinned items in your Petunia profile. Tag your vet and trainer for added notes.
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">Frequently Asked Questions</h2>

          <p className="mb-3">
            <strong>What is the average lifespan of a German Shepherd?</strong><br />
            Most population studies place the median around 10.3 years. Many GSDs surpass this with lean weight, structured exercise,
            dental care, parasite prevention, and timely veterinary screening.
          </p>

          <p className="mb-3">
            <strong>Which single change adds the most healthy months?</strong><br />
            Maintaining an ideal body condition. Lean-fed dogs live longer and stay more mobile. Combine portion control with a simple,
            repeatable exercise template.
          </p>

          <p className="mb-3">
            <strong>Does early spay or neuter affect lifespan in GSDs?</strong><br />
            Early sterilization is associated with increased joint disorders in some GSD datasets. Work with your veterinarian on timing
            that considers orthopedic risk, behavior, and household needs.
          </p>

          <p className="mb-3">
            <strong>Are German Shepherds at high risk for bloat?</strong><br />
            They are a deep-chested, large breed with some risk. Learn the signs of GDV and consider prophylactic gastropexy for at-risk
            individuals, especially if there is family history or if your vet recommends it.
          </p>

          <p className="mb-3">
            <strong>What about new longevity drugs?</strong><br />
            Research is active, including programs targeting metabolic pathways and studies of rapamycin. These remain under evaluation
            for safety and effectiveness. The proven levers today are weight, nutrition, exercise, dental care, and preventive medicine.
          </p>

          <p>
            <strong>How do grooming and home setup affect lifespan?</strong><br />
            Clean skin, trimmed nails, traction on floors, and ramps reduce slips, infections, and stress. Grooming lets you find problems
            early and keeps activity comfortable.
          </p>
        </section>

        {/* Sources */}
        <section id="sources" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">📚 Sources (Selected)</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            <li>
              O’Neill DG et al. Demography and disorders of German Shepherd Dogs under primary veterinary care in the UK. Canine Genetics and Epidemiology (2017).
              <a href="https://cgejournal.biomedcentral.com/articles/10.1186/s40575-017-0046-4" target="_blank" rel="noopener noreferrer"> Study</a> |
              <a href="https://www.rvc.ac.uk/vetcompass/news/demography-and-disorders-of-german-shepherd-dogs-under-primary-veterinary-care-in-the-uk" target="_blank" rel="noopener noreferrer"> Summary</a>
            </li>
            <li>
              Kealy RD et al. Effects of diet restriction on life span and age-related changes in dogs. JAVMA (2002); Lawler DF et al. Aging observations in diet-restricted dogs (2008).
              <a href="https://pubmed.ncbi.nlm.nih.gov/11991408/" target="_blank" rel="noopener noreferrer"> 2002 study</a> |
              <a href="https://pubmed.ncbi.nlm.nih.gov/18062831/" target="_blank" rel="noopener noreferrer"> 2008 update</a>
            </li>
            <li>
              Montoya-Alonso JA et al. Association between life span and body condition in neutered client-owned dogs. J Vet Intern Med (2019).
              <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC6335446/" target="_blank" rel="noopener noreferrer"> Open access</a>
            </li>
            <li>
              Hart BL et al. Neutering of German Shepherd Dogs: joint disorders and cancers. Frontiers in Veterinary Science (2016).
              <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC5645870/" target="_blank" rel="noopener noreferrer"> Open access</a>
            </li>
            <li>
              ACVS. Gastric Dilatation-Volvulus overview; prophylactic gastropexy for at-risk breeds.
              <a href="https://www.acvs.org/small-animal/gastric-dilatation-volvulus/" target="_blank" rel="noopener noreferrer"> ACVS resource</a> |
              VIN Veterinary Partner: Prophylactic gastropexy (2024).
              <a href="https://veterinarypartner.vin.com/default.aspx?catId=102899&id=11675887&ind=257&objTypeID=1007&pid=19239" target="_blank" rel="noopener noreferrer"> VIN article</a>
            </li>
            <li>
              AAHA Canine Life Stage Guidelines (2019).
              <a href="https://www.aaha.org/resources/life-stage-canine-2019/" target="_blank" rel="noopener noreferrer"> Summary</a> |
              <a href="https://www.aaha.org/wp-content/uploads/globalassets/02-guidelines/canine-life-stage-2019/2019-aaha-canine-life-stage-guidelines-final.pdf" target="_blank" rel="noopener noreferrer"> PDF</a>
            </li>
            <li>
              WSAVA Dental Guidelines (2019/2020).
              <a href="https://wsava.org/global-guidelines/dental-guidelines/" target="_blank" rel="noopener noreferrer"> Guideline hub</a> |
              <a href="https://wsava.org/wp-content/uploads/2020/01/Dental-Guidleines-for-endorsement_0.pdf" target="_blank" rel="noopener noreferrer"> PDF</a>
            </li>
            <li>
              OFA. Degenerative Myelopathy resource; VGL UC Davis DM test.
              <a href="https://ofa.org/degenerative-myelopathy/" target="_blank" rel="noopener noreferrer"> OFA DM</a> |
              <a href="https://vgl.ucdavis.edu/test/degenerative-myelopathy" target="_blank" rel="noopener noreferrer"> UC Davis VGL</a>
            </li>
            <li>
              Merck Veterinary Manual. Exocrine Pancreatic Insufficiency overview.
              <a href="https://www.merckvetmanual.com/digestive-system/the-exocrine-pancreas/exocrine-pancreatic-insufficiency-in-dogs-and-cats" target="_blank" rel="noopener noreferrer"> EPI reference</a>
            </li>
            <li>
              AHS. American Heartworm Society Guidelines (2024 update).
              <a href="https://www.heartwormsociety.org/veterinary-resources/american-heartworm-society-guidelines" target="_blank" rel="noopener noreferrer"> Guideline hub</a> |
              <a href="https://d3ft8sckhnqim2.cloudfront.net/images/AHS_Canine_Guidelinesweb04APR2024.pdf?1712247474=" target="_blank" rel="noopener noreferrer"> PDF</a>
            </li>
            <li>
              AKC. How to groom a German Shepherd (double-coat care basics).
              <a href="https://www.akc.org/expert-advice/health/tips-for-grooming-german-shepherd/" target="_blank" rel="noopener noreferrer"> AKC article</a>
            </li>
            <li>
              VetCompass. Life tables and life expectancy methods for companion dogs.
              <a href="https://www.nature.com/articles/s41598-022-10341-6" target="_blank" rel="noopener noreferrer"> Life tables study</a>
            </li>
          </ul>
          <p className="text-xs text-gray-600 mt-4">
            Educational content only. Always consult your veterinarian for individualized medical guidance and screening plans.
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
                href="https://www.petuniapets.com/en/blog/how-much-does-a-german-shepherd-cost"
                className="underline hover:opacity-80"
              >
                How Much Does a German Shepherd Cost?
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
