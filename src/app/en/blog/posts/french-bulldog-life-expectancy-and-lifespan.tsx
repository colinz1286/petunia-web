'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function FrenchBulldogLifeExpectancyAndLifespan() {
  const locale = useLocale();

  const title =
    'French Bulldog Life Expectancy & Lifespan: Add Healthy Years with Smart Daily Systems';
  const date = 'April 11, 2025';
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
            <li><a href="#lifespan" className="underline hover:opacity-80">Life Expectancy</a></li>
            <li><a href="#levers" className="underline hover:opacity-80">The 7 Biggest Levers</a></li>
            <li><a href="#weight" className="underline hover:opacity-80">Weight &amp; Body Condition</a></li>
            <li><a href="#airway" className="underline hover:opacity-80">Airway Health (BOAS)</a></li>
            <li><a href="#heat" className="underline hover:opacity-80">Heat, Travel &amp; Safety</a></li>
            <li><a href="#activity" className="underline hover:opacity-80">Activity &amp; Conditioning</a></li>
            <li><a href="#spine" className="underline hover:opacity-80">Spine, Hips &amp; Knees</a></li>
            <li><a href="#skin" className="underline hover:opacity-80">Skin, Ears &amp; Eyes</a></li>
            <li><a href="#nutrition" className="underline hover:opacity-80">Nutrition &amp; Supplements</a></li>
            <li><a href="#preventive" className="underline hover:opacity-80">Preventive Veterinary Care</a></li>
            <li><a href="#home" className="underline hover:opacity-80">Home Setup &amp; Daily Routines</a></li>
            <li><a href="#senior" className="underline hover:opacity-80">Senior Care &amp; Comfort</a></li>
            <li><a href="#qol" className="underline hover:opacity-80">Quality-of-Life Tools</a></li>
            <li><a href="#templates" className="underline hover:opacity-80">Checklists &amp; Templates</a></li>
            <li><a href="#faq" className="underline hover:opacity-80">FAQ</a></li>
            <li><a href="#sources" className="underline hover:opacity-80">📚 Sources (Selected)</a></li>
          </ul>
        </nav>

        {/* TL;DR */}
        <section id="tl-dr" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Short Answer (TL;DR)</h2>
          <p className="mb-4">
            Most French Bulldogs live about <strong>10–12 years</strong>. You can often add healthy time by keeping them
            <strong> lean</strong>, proactively managing <strong>airway health (BOAS)</strong>, protecting them from
            <strong> heat</strong>, planning <strong>low-impact exercise with recovery</strong>, caring for
            <strong> skin/ears/eyes</strong>, and staying on top of <strong>preventive veterinary care</strong>.
            Small, boring habits (measured meals, shade breaks, ramps, routine cleaning) are what move the needle.
          </p>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Petunia tip:</strong> Put your Frenchie’s plan on autopilot. Store feed amounts, meds,
            ear/skin routines, and “heat rules” in Petunia so family members and your daycare/boarding team
            follow the same playbook—<em>structured play → rest → enrichment</em> with built-in cool-downs.
          </div>
        </section>

        {/* LIFESPAN EXPECTANCY */}
        <section id="lifespan" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">French Bulldog Life Expectancy: What to Expect</h2>
          <p className="mb-3">
            Breed clubs and veterinary references commonly quote a French Bulldog life expectancy near
            <strong> 10–12 years</strong>. Individual outcomes vary with genetics, weight, airway anatomy,
            orthopedic/spinal health, environment, and medical care. A Frenchie who stays lean, keeps a cool core
            temperature, and has a proactive airway and skin-care plan often remains active and comfortable well
            into the teens. On the other hand, chronic overheating, unmanaged allergies, or repeated spinal and knee
            injuries can shorten both <em>lifespan</em> and <em>healthspan</em> (years lived in good health).
          </p>
          <p>
            Think of longevity as a systems problem: clear routines plus early intervention.
            The rest of this guide gives you the operator-grade system we use with clients.
          </p>
        </section>

        {/* LEVERS */}
        <section id="levers" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">The 7 Biggest Levers to Extend Healthy Years</h2>
          <ol className="list-decimal pl-5 space-y-2 mb-3">
            <li><strong>Keep a lean body condition.</strong> Extra pounds worsen breathing, heat risk, joint load, and inflammation.</li>
            <li><strong>Manage BOAS early.</strong> Screen airway, build “heat rules,” and discuss surgical options if recommended.</li>
            <li><strong>Heat &amp; travel safety.</strong> Avoid midday exertion and stagnant heat; crate with good airflow; never leave in cars.</li>
            <li><strong>Low-impact activity with planned recovery.</strong> Short, frequent sessions beat weekend marathons.</li>
            <li><strong>Spine &amp; knee protection.</strong> Ramps, traction rugs, nail care, controlled jumps; watch for sudden hind-end pain.</li>
            <li><strong>Skin/ears/eyes hygiene.</strong> Folds, otitis, and corneal injury are common but manageable with routine care.</li>
            <li><strong>Preventive vet care &amp; early diagnostics.</strong> Vaccines, parasite control, dental, and timely imaging/labs when something changes.</li>
          </ol>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Mindset:</strong> Don’t rely on willpower. Build <em>default behaviors</em> into the day:
            measured meals, shade/water pauses, stairs with a harness handhold, and a quick fold wipe after walks.
          </div>
        </section>

        {/* WEIGHT */}
        <section id="weight" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Weight &amp; Body Condition: Years Hinge on a Few Ounces</h2>
          <p className="mb-3">
            Obesity is one of the most modifiable risks for chronic disease in dogs. For brachycephalics like French
            Bulldogs, carrying extra fat narrows airways, increases heat load, aggravates inflammation and skin disease,
            and accelerates arthritis. “A little chunky” isn’t cute—it’s a tax on breathing and cooling.
          </p>
          <h3 className="text-lg font-semibold mt-2 mb-1">Target Look &amp; Feel (Body Condition Guide)</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Ribs easy to feel with light pressure (no heavy poking).</li>
            <li>Defined waist from above; slight abdominal tuck from the side.</li>
            <li>Brisk recovery after short play; no snoring-level breathing at rest.</li>
          </ul>
          <h3 className="text-lg font-semibold mt-2 mb-1">Feeding Framework That Works</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Measure every meal; use part of the ration for training.</li>
            <li>Re-weigh every 2–4 weeks; adjust calories ±10% to hold body condition.</li>
            <li>Use veggie toppers (green beans, broccoli stems) to add volume with few calories if needed.</li>
            <li>Prefer <strong>tiny</strong> training rewards; count all treats in the daily total.</li>
          </ul>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Petunia tip:</strong> Log portions and weight in Petunia; share with sitters and daycare so handoffs don’t create “mystery calories.”
          </div>
        </section>

        {/* AIRWAY / BOAS */}
        <section id="airway" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Airway Health (BOAS): Breathe First, Then Everything Else</h2>
          <p className="mb-3">
            French Bulldogs are brachycephalic (short-muzzled). Many have some degree of
            <strong> brachycephalic obstructive airway syndrome (BOAS)</strong>—a combination of narrow nostrils
            (stenotic nares), an elongated/ thickened soft palate, everted laryngeal saccules, and sometimes a narrowed trachea.
            The impact ranges from mild snoring to exercise/heat intolerance and, in severe cases, airway collapse.
          </p>
          <h3 className="text-lg font-semibold mt-2 mb-1">Early Signs Worth Noticing</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Loud snoring or “snorkeling” at rest; mouth-breathing while relaxed.</li>
            <li>Stridor (harsh inspiratory noise) with light exertion or excitement.</li>
            <li>Heat intolerance, prolonged recovery, cyanotic (blue) gums, or collapse—<em>emergency</em>.</li>
          </ul>
          <h3 className="text-lg font-semibold mt-2 mb-1">Your BOAS Plan</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>Baseline exam:</strong> ask your veterinarian for an airway evaluation; track resting respiratory rate.</li>
            <li><strong>Heat rules:</strong> walk at dawn/dusk; build shade/water breaks into every outing; stop at the first sign of noisy breathing.</li>
            <li><strong>Harness only:</strong> avoid neck collars for leash pressure; use a well-fitted Y-front harness.</li>
            <li><strong>Discuss surgery when indicated:</strong> nostril widening (nares), soft palate resection, and saccules as advised by your vet/ surgeon.</li>
            <li><strong>Anesthesia plan:</strong> choose clinics experienced with brachycephalics; pre-oxygenation and careful recovery matter.</li>
          </ul>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Reality check:</strong> Surgery isn’t a “performance upgrade.” It’s about comfort, cooling, and safety.
            Pair any procedure with <em>weight control</em> and <em>heat management</em> for best long-term results.
          </div>
        </section>

        {/* HEAT & TRAVEL */}
        <section id="heat" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Heat, Travel &amp; Environmental Safety</h2>
          <p className="mb-3">
            Heat risk is the single fastest way a healthy day can turn into an emergency for a French Bulldog. Short muzzles
            limit evaporative cooling, and thick chests hold heat. Build conservative, automatic rules so nobody has to “guess.”
          </p>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>Timing:</strong> outdoors at dawn/dusk; midday = shade potty breaks only.</li>
            <li><strong>Session caps:</strong> 5–10 minute play blocks → cool-down in AC; watch for noisy breathing.</li>
            <li><strong>Surface temp:</strong> avoid hot pavement; use grass, shade, and booties if needed.</li>
            <li><strong>Hydration &amp; cooling:</strong> carry water; rest on cool mats; wet chest/belly if needed; don’t drench the back in humid heat.</li>
            <li><strong>Travel:</strong> never unattended in cars; high-airflow crates; airlines and cargo holds are generally unsafe for brachycephalics.</li>
            <li><strong>Emergency signs:</strong> wide stance, glassy eyes, thick ropey saliva, vomiting, collapse—cool aggressively and go to ER.</li>
          </ul>
        </section>

        {/* ACTIVITY */}
        <section id="activity" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Activity &amp; Conditioning: Small Sets, Big Wins</h2>
          <p className="mb-3">
            Frenchies are charming clowns who love to move—within their limits. Use <strong>short, frequent</strong> sessions
            separated by calm settles. Think <em>sniff walk → 2 minutes of training → water/AC → nap</em>. Avoid endurance-style
            work and high-arousal fetch in heat; prioritize nosework, shaping games, and problem-solving.
          </p>
          <h3 className="text-lg font-semibold mt-2 mb-1">Weekly Template (Adjust for Weather)</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>Mon:</strong> dawn sniff walk 15–20 min + two 2-min training bursts (sit, stay, place).</li>
            <li><strong>Tue:</strong> hallway recall games (3–5 reps) + food puzzle + nap.</li>
            <li><strong>Wed:</strong> shaded park mosey; practice calm greetings; fold wipe afterward.</li>
            <li><strong>Thu:</strong> scent box search (treat hidden under cups) + mat settle.</li>
            <li><strong>Fri:</strong> indoor obstacle stroll (cavaletti poles/books) + cooperative care (chin rest).</li>
            <li><strong>Sat:</strong> low-arousal playdate with compatible dog; cap at 10–15 minutes, then rest.</li>
            <li><strong>Sun:</strong> lighter day: gentle massage, ear check, Nail-a-Week (one nail session).</li>
          </ul>
        </section>

        {/* SPINE & ORTHO */}
        <section id="spine" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Spine, Hips &amp; Knees: Protect the Frame</h2>
          <p className="mb-3">
            French Bulldogs are predisposed to several orthopedic and neurologic issues: <strong>patellar luxation</strong>
            (kneecap slippage), <strong>hip dysplasia</strong>, and <strong>intervertebral disc disease (IVDD)</strong>.
            Some have vertebral malformations (e.g., hemivertebrae) associated with screw tails. You can’t control genetics,
            but you can reduce risk and catch change early.
          </p>
          <h3 className="text-lg font-semibold mt-2 mb-1">Risk-Reduction Playbook</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>Ramps &amp; traction:</strong> use ramps for sofa/bed/car; place runners on slick floors.</li>
            <li><strong>Nails &amp; core:</strong> keep nails short; add gentle core work (stand-for-cookie, slow figure-8s).</li>
            <li><strong>Jumping:</strong> avoid repeated high jumps or tight stairs sprints; carry on steep stairs when possible.</li>
            <li><strong>Red flags:</strong> sudden yelp with hind-end weakness, knuckling paws, reluctance to jump—<em>vet now</em>.</li>
          </ul>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Boarding/daycare note:</strong> Ask facilities to use ramps and traction surfaces and to keep play in short sets with rest.
            Put these instructions in Petunia so every handler follows them.
          </div>
        </section>

        {/* SKIN/EARS/EYES */}
        <section id="skin" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Skin, Ears &amp; Eyes: Small Routines, Big Comfort</h2>
          <p className="mb-3">
            Allergy-prone skin, ear infections, and corneal injuries are common quality-of-life issues. Facial folds trap
            moisture; Frenchies lead with their eyes when curious, so scratches and ulcers happen. A little prevention keeps
            problems small.
          </p>
          <h3 className="text-lg font-semibold mt-2 mb-1">Daily/Weekly Hygiene</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>Fold care:</strong> gentle wipe and dry after meals/walks; avoid harsh products; follow vet advice if medicated wipes are prescribed.</li>
            <li><strong>Ears:</strong> check weekly; clean with vet-approved solution if waxy or after baths; seek care for redness/odor/pain.</li>
            <li><strong>Eyes:</strong> keep nails/blunt objects away from face; flush with sterile saline if dusty; see a vet same day for squinting or pawing.</li>
            <li><strong>Parasites:</strong> year-round prevention; fleas can ignite allergic skin disease.</li>
          </ul>
        </section>

        {/* NUTRITION */}
        <section id="nutrition" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Nutrition &amp; Supplements: Fuel for Healthspan</h2>
          <p className="mb-3">
            Feed a <strong>complete and balanced</strong> diet tailored to life stage and activity. Your veterinarian can help
            choose products formulated by qualified nutritionists and tested for quality control. For many Frenchies, omega-3s
            (EPA/DHA) support skin and joints—dose under veterinary guidance.
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Transition foods over 7–10 days to protect the gut and avoid flare-ups in itchy dogs.</li>
            <li>Use food puzzles and training to “spend” calories productively.</li>
            <li>If your dog needs a therapeutic diet (allergies, GI), stick with it; reintroduce treats carefully.</li>
          </ul>
        </section>

        {/* PREVENTIVE VET CARE */}
        <section id="preventive" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Preventive Veterinary Care: Quiet Wins that Add Up</h2>
          <p className="mb-3">
            Vaccines protect against life-threatening disease. Parasite prevention prevents itch, anemia, and tick-borne
            infections. Dental care reduces pain and systemic inflammation. Senior screening catches problems while they
            are still fixable. Partner closely with your veterinarian and share accurate routines and logs.
          </p>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>Vaccines:</strong> follow AAHA/WSAVA-aligned plans individualized to lifestyle and local risk.</li>
            <li><strong>Parasites:</strong> year-round prevention for fleas, ticks, and heartworm where indicated.</li>
            <li><strong>Dental:</strong> brush daily if possible; use VOHC-accepted chews and schedule cleanings as advised.</li>
            <li><strong>Anesthesia:</strong> choose teams experienced with brachycephalics; pre-oxygenate; careful recovery and temperature monitoring.</li>
            <li><strong>Senior care:</strong> twice-yearly visits from ~7 years onward; labs/ imaging based on history and exam.</li>
          </ul>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Petunia tip:</strong> Keep vaccine dates, parasite refills, dental schedules, and weight logs in Petunia.
            Share the profile with boarding/daycare so no dose or instruction is missed.
          </div>
        </section>

        {/* HOME SETUP */}
        <section id="home" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Home Setup &amp; Daily Routines</h2>
          <p className="mb-3">
            If you try to “keep up” with health tasks, you’ll lose. Build a <strong>system</strong> that runs
            without willpower. Small habits beat rescue missions.
          </p>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Crate/pen near cool airflow; raised beds away from heater vents.</li>
            <li>Ramps to couch/bed; traction rugs along slick hallways and stairs.</li>
            <li>Hooks for harnesses/leashes; cooling vest ready by the door in summer.</li>
            <li>Fold-care basket (soft cloths, prescribed wipes) near the crate; set calendar reminders.</li>
            <li>“Heat card” on the fridge: walk times, session caps, and emergency clinic address.</li>
          </ul>
        </section>

        {/* SENIOR */}
        <section id="senior" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Senior Care &amp; Comfort: Add Life to Years</h2>
          <p className="mb-3">
            Many French Bulldogs become seniors around seven to eight years. You’ll often see sleep changes, stiffness
            after rest, and hearing loss. Keep life predictable, reduce jumping, and ensure pain control. Use hand
            signals for cues as hearing fades; increase lighting at night; avoid rearranging furniture.
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Short, frequent walks; warm-ups in cool weather; indoor scent games on “slow” days.</li>
            <li>Discuss anti-inflammatory and nerve pain options with your veterinarian; monitor stomach tolerance.</li>
            <li>Monitor water intake, weight, and activity; report trends early (weeks) rather than waiting months.</li>
          </ul>
        </section>

        {/* QOL */}
        <section id="qol" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Quality-of-Life Tools: Clarity for Hard Decisions</h2>
          <p className="mb-3">
            Objective tools help families make compassionate choices when chronic disease advances. The “HHHHHMM” scale
            (Hurt, Hunger, Hydration, Hygiene, Happiness, Mobility, and More Good Days than Bad) gives a simple framework
            to track comfort. Score consistently (e.g., weekly) and review with your veterinarian.
          </p>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Plan early:</strong> When your dog is comfortable, document preferences, emergency contacts,
            and thresholds that would trigger a recheck or palliative plan. Clear notes reduce doubt later.
          </div>
        </section>

        {/* TEMPLATES */}
        <section id="templates" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Checklists &amp; Templates</h2>

          <h3 className="text-lg font-semibold mt-2 mb-1">Weekly Longevity Rhythm (Frenchie Edition)</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>Mon:</strong> dawn sniff walk 15–20 min → fold wipe → weigh-in if due → nap.</li>
            <li><strong>Tue:</strong> two 2-min training bursts (place, stay) → puzzle feeder → cool mat rest.</li>
            <li><strong>Wed:</strong> shaded park mosey → calm greeting reps → nail check (one paw).</li>
            <li><strong>Thu:</strong> scent box search → ear glance/clean if waxy → mat settle.</li>
            <li><strong>Fri:</strong> hallway recall game (3–5 reps) → ramp reps → cuddle/brush.</li>
            <li><strong>Sat:</strong> short playdate (10–15 min) → AC cooldown → fold/eye check.</li>
            <li><strong>Sun:</strong> lighter day → laundry: bedding/throws → rest-heavy evening.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Monthly “Nose-to-Tail” Scan</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Run hands along spine and ribs; note any soreness or weight change.</li>
            <li>Eyes: squinting, haze, discharge? Ears: odor/redness? Folds: redness/yeast?</li>
            <li>Gait: reluctance to jump, bunny-hopping, or toe-dragging? Film a 30-sec walk for comparison.</li>
            <li>Lumps: map and photograph with a coin for size; schedule early removals when indicated.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">“When to Call the Vet Now”</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Open-mouth breathing at rest, blue/pale gums, collapse, or seizure.</li>
            <li>Acute hind-end weakness, unsteady walking, screaming pain, or knuckling paws (possible IVDD).</li>
            <li>Squinting/pawing at an eye; sudden corneal haze or redness.</li>
            <li>Unproductive retching with a distended abdomen; repeated vomiting; heat distress.</li>
          </ul>

          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm mt-3">
            <strong>Petunia workflow:</strong> Share your Frenchie’s “heat rules,” fold/ear schedule, medication doses,
            and ramp/traction instructions with your care network. Continuity = calmer, safer dogs.
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">Frequently Asked Questions</h2>

          <p className="mb-3">
            <strong>How long do French Bulldogs live?</strong><br />
            Many live about <strong>10–12 years</strong>. Genetics, weight, airway anatomy, spine/knee health, and
            daily routines shift individuals above or below that range.
          </p>

          <p className="mb-3">
            <strong>What adds the most healthy years?</strong><br />
            <strong>Leanness and airway management.</strong> Keep body condition lean, avoid heat stress, and
            address BOAS proactively with your veterinarian.
          </p>

          <p className="mb-3">
            <strong>Is exercise safe for Frenchies?</strong><br />
            Yes—<em>short and smart.</em> Prioritize sniff walks, shaping games, and nosework. Cap sessions,
            build shade/water breaks, and stop at the first sign of noisy breathing.
          </p>

          <p className="mb-3">
            <strong>Are flights safe?</strong><br />
            Cargo holds are generally unsafe for brachycephalics. If travel is unavoidable, consult your veterinarian,
            choose the coolest routes, and prioritize ground travel when possible.
          </p>

          <p>
            <strong>Do fold wipes or ear cleaners shorten lifespan?</strong><br />
            They <em>extend comfort</em> and reduce infection/inflammation—small routines with outsized impact.
          </p>
        </section>

        {/* SOURCES */}
        <section id="sources" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">📚 Sources (Selected)</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            <li>
              American Kennel Club (AKC). French Bulldog breed overview (temperament, life expectancy, grooming).{' '}
              <a href="https://www.akc.org/dog-breeds/french-bulldog/" target="_blank" rel="noopener noreferrer">
                https://www.akc.org/dog-breeds/french-bulldog/
              </a>
            </li>
            <li>
              American Animal Hospital Association (AAHA). Canine Vaccination Guidelines (2022).{' '}
              <a href="https://www.aaha.org/resources/2022-aaha-canine-vaccination-guidelines/" target="_blank" rel="noopener noreferrer">
                https://www.aaha.org/resources/2022-aaha-canine-vaccination-guidelines/
              </a>
            </li>
            <li>
              World Small Animal Veterinary Association (WSAVA). Vaccination &amp; Global Nutrition Guidelines.{' '}
              <a href="https://wsava.org/global-guidelines/" target="_blank" rel="noopener noreferrer">
                https://wsava.org/global-guidelines/
              </a>
            </li>
            <li>
              Cambridge BOAS Research Group. Brachycephalic obstructive airway syndrome resources and owner guidance.{' '}
              <a href="https://www.vet.cam.ac.uk/boas" target="_blank" rel="noopener noreferrer">
                https://www.vet.cam.ac.uk/boas
              </a>
            </li>
            <li>
              Royal Veterinary College (RVC) VetCompass. French Bulldog breed health summaries &amp; research updates.{' '}
              <a href="https://www.rvc.ac.uk/vetcompass" target="_blank" rel="noopener noreferrer">
                https://www.rvc.ac.uk/vetcompass
              </a>
            </li>
            <li>
              American College of Veterinary Surgeons (ACVS). Intervertebral Disc Disease (IVDD) in dogs; Patellar Luxation.{' '}
              <a href="https://www.acvs.org/small-animal" target="_blank" rel="noopener noreferrer">
                https://www.acvs.org/small-animal
              </a>
            </li>
            <li>
              Merck Veterinary Manual. Brachycephalic airway syndrome; dermatology and ophthalmology overviews.{' '}
              <a href="https://www.merckvetmanual.com" target="_blank" rel="noopener noreferrer">
                https://www.merckvetmanual.com
              </a>
            </li>
            <li>
              AVMA (American Veterinary Medical Association). Heat safety &amp; travel cautions for pets.{' '}
              <a href="https://www.avma.org/resources/pet-owners/petcare/hot-weather-safety-pets" target="_blank" rel="noopener noreferrer">
                https://www.avma.org/resources/pet-owners/petcare/hot-weather-safety-pets
              </a>
            </li>
            <li>
              Veterinary Oral Health Council (VOHC). Accepted dental products for dogs.{' '}
              <a href="https://vohc.org" target="_blank" rel="noopener noreferrer">https://vohc.org</a>
            </li>
            <li>
              American College of Veterinary Anesthesia and Analgesia (ACVAA). Anesthesia considerations in brachycephalic breeds (owner resources).{' '}
              <a href="https://acvaa.org/owner-resources/" target="_blank" rel="noopener noreferrer">
                https://acvaa.org/owner-resources/
              </a>
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
