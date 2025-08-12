'use client';

import Head from 'next/head';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function GoldenRetrieverPuppyTrainingCompleteGuide() {
  const locale = useLocale();

  const title =
    'Golden Retriever Puppy Training: The Complete Guide from 8 Weeks to 18 Months';
  const date = 'August 7, 2025';
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

  const slug =
    'golden-retriever-puppy-training-complete-guide-8-weeks-to-18-months';

  const description =
    'A complete, evidence-informed training playbook for Golden Retriever puppies from 8 weeks to 18 months. Covers socialization, house/crate training, leash skills, recall, bite-inhibition, alone-time training, enrichment, adolescence, safety red flags, and operator-grade checklists and templates—with veterinary-sourced citations.';

  return (
    <>
      <Head>
        <title>{title} – Petunia Blog</title>
        <meta name="description" content={description} />
        <meta name="robots" content="index,follow" />
        <link
          rel="canonical"
          href={`https://www.petuniapets.com/${locale}/blog/${slug}`}
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
            <li>
              <a href="#tl-dr" className="underline hover:opacity-80">
                TL;DR
              </a>
            </li>
            <li>
              <a href="#overview" className="underline hover:opacity-80">
                Core Overview
              </a>
            </li>
            <li>
              <a href="#age-map" className="underline hover:opacity-80">
                8 Weeks → 18 Months: Age Map
              </a>
            </li>
            <li>
              <a href="#house-crate" className="underline hover:opacity-80">
                House &amp; Crate Training
              </a>
            </li>
            <li>
              <a href="#socialization" className="underline hover:opacity-80">
                Socialization &amp; Exposure Labs
              </a>
            </li>
            <li>
              <a href="#mouthing" className="underline hover:opacity-80">
                Mouthing, Bite Inhibition &amp; Teething
              </a>
            </li>
            <li>
              <a href="#alone-time" className="underline hover:opacity-80">
                Alone-Time Training (Preventing Separation Issues)
              </a>
            </li>
            <li>
              <a href="#leash" className="underline hover:opacity-80">
                Leash Skills, Recall &amp; Impulse Control
              </a>
            </li>
            <li>
              <a href="#cooperative-care" className="underline hover:opacity-80">
                Cooperative Care &amp; Grooming
              </a>
            </li>
            <li>
              <a href="#nutrition" className="underline hover:opacity-80">
                Nutrition, Treat Budgets &amp; Chews
              </a>
            </li>
            <li>
              <a href="#enrichment" className="underline hover:opacity-80">
                Enrichment, Scentwork &amp; Brain Games
              </a>
            </li>
            <li>
              <a href="#adolescence" className="underline hover:opacity-80">
                Adolescence (6–18 Months): What Changes?
              </a>
            </li>
            <li>
              <a href="#safety" className="underline hover:opacity-80">
                Safety, Exercise &amp; Risk Management
              </a>
            </li>
            <li>
              <a href="#vet-now" className="underline hover:opacity-80">
                When to Call the Vet Now
              </a>
            </li>
            <li>
              <a href="#templates" className="underline hover:opacity-80">
                Checklists &amp; Templates
              </a>
            </li>
            <li>
              <a href="#faq" className="underline hover:opacity-80">
                FAQ
              </a>
            </li>
            <li>
              <a href="#sources" className="underline hover:opacity-80">
                📚 Sources (Selected)
              </a>
            </li>
          </ul>
        </nav>

        {/* TL;DR */}
        <section id="tl-dr" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Short Answer (TL;DR)</h2>
          <p className="mb-4">
            Golden Retrievers are smart, social, and eager to please—traits that
            make puppy training both rewarding and crucial. Focus your first
            months on <strong>house/crate training</strong>, <strong>early socialization</strong> (7–12
            weeks is a key window), <strong>gentle bite-inhibition</strong>, <strong>alone-time
            skills</strong>, and <strong>foundation cues</strong> (name response, sit, down, hand
            target, recall, loose-leash). Keep sessions short (60–120 seconds),
            highly reinforced, and varied. As your puppy enters adolescence (6–12
            months), expect a temporary dip in responsiveness; double down on
            management, reinforcement, and predictable routines—not punishment.
          </p>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Petunia tip:</strong> Turn this guide into a living SOP in
            Petunia. Store your <em>daily schedule</em>, <em>potty log</em>,{' '}
            <em>socialization checklist</em>, and a simple{' '}
            <em>criteria ladder</em> for each behavior (e.g., recall at 5 ft → 10
            ft → 20 ft with distractions). Everyone in the household follows the
            same playbook.
          </div>
        </section>

        {/* Core overview */}
        <section id="overview" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">
            Core Overview: How Goldens Learn (and How to Teach Them)
          </h2>
          <p className="mb-3">
            Goldens are bred to work alongside people. They gravitate toward
            <strong>reward-based learning</strong> (food, play, praise) and shine with
            clear, consistent criteria. The big levers are: (1){' '}
            <strong>management</strong> to prevent rehearsals of unwanted behavior
            (baby gates, tethers, crates, enrichment), (2){' '}
            <strong>marker-based training</strong> (a click or a crisp “Yes!”),
            (3) <strong>high reinforcement rates</strong> in short reps, and (4){' '}
            <strong>generalization</strong>—training the same skill across more
            places, durations, and distractions.
          </p>
          <p className="mb-3">
            Your curriculum has three intertwined tracks:
            <em> life skills</em> (house/crate, alone-time, calm settling),{' '}
            <em>foundation manners</em> (name response, sit/down, hand target,
            leave-it, recall, loose leash), and <em>resilience</em> (socialization,
            positive handling, novelty). Add breed-informed outlets—retrieving,
            scent games, and controlled water play—to meet drive in ways that
            reduce mouthing and hyperarousal.
          </p>
          <p className="mb-0">
            Keep this mindset: <strong>teach what to do</strong>, reinforce
            generously, and split criteria into tiny steps. If something isn’t
            working, simplify the picture (shorter duration, smaller distance,
            fewer distractions), then build back up.
          </p>
        </section>

        {/* Age map */}
        <section id="age-map" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">
            The Age Map: 8 Weeks → 18 Months (What to Do When)
          </h2>

          <h3 className="text-lg font-semibold mb-2">8–12 Weeks</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>
              <strong>House &amp; crate</strong>: set a tight potty schedule; crate
              as a calm rest zone.
            </li>
            <li>
              <strong>Socialization</strong>: daily, curated exposures to people,
              sounds, surfaces, handling, car rides, safe puppy class.
            </li>
            <li>
              <strong>Foundation</strong>: name response, hand target, sit, trade
              games, recall at 3–5 ft, “drop” with food trades.
            </li>
            <li>
              <strong>Mouthing</strong>: redirect to chews; reinforce gentle
              mouth.
            </li>
          </ul>

          <h3 className="text-lg font-semibold mb-2">12–16 Weeks</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>
              <strong>Generalize</strong>: practice cues across rooms; add short
              outdoor reps in low-distraction areas.
            </li>
            <li>
              <strong>Leash pre-skills</strong>: focus on attention, follow,
              reward for position near your leg; micro-walks.
            </li>
            <li>
              <strong>Alone-time</strong>: predictable micro-absences (30–120
              seconds → 5–10 minutes), with chews or food puzzles.
            </li>
          </ul>

          <h3 className="text-lg font-semibold mb-2">4–6 Months</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>
              <strong>Impulse control</strong>: default sit for doors/food, leave
              it, settle on a mat.
            </li>
            <li>
              <strong>Recall expansion</strong>: long line outdoors (10–20 ft),
              reinforcement jackpots for fast turn-and-run.
            </li>
            <li>
              <strong>Cooperative care</strong>: nails, ear checks, brushing,
              mouth looks—pair with treats and choice.
            </li>
          </ul>

          <h3 className="text-lg font-semibold mb-2">6–9 Months (Adolescence I)</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>
              Expect a <strong>dip in responsiveness</strong>; increase management
              and pay. Keep sessions short and upbeat.
            </li>
            <li>
              <strong>Leash skills</strong>: loose-leash walking with frequent
              reinforcement; split routes into “training” vs. “sniff &amp; stroll.”
            </li>
            <li>
              <strong>Advanced recall</strong>: whistle or new verbal cue; build
              value away from dog-dog chaos.
            </li>
          </ul>

          <h3 className="text-lg font-semibold mb-2">9–18 Months (Adolescence II)</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <strong>Proofing</strong>: duration, distance, and distractions on
              all cues. Earn access to off-leash only via reliable recall.
            </li>
            <li>
              <strong>Sport foundations</strong>: retrieve games, shaping
              sessions, scentwork, beginner agility <em>flatwork</em> (no jumps).
            </li>
            <li>
              <strong>Canine Good Citizen (CGC)</strong> and{' '}
              <strong>AKC S.T.A.R. Puppy</strong> milestones are great targets.
            </li>
          </ul>

          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm mt-3">
            <strong>Operator mindset:</strong> goldens love routines. Create a
            simple day template: wake → potty → short train → nap → potty →
            play/enrich → nap… Consistency reduces chaos and speeds learning.
          </div>
        </section>

        {/* House & crate */}
        <section id="house-crate" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">
            House &amp; Crate Training: Clean Habits, Calm Rest
          </h2>
          <p className="mb-3">
            House training succeeds when you (1) <strong>prevent accidents</strong>{' '}
            with management, (2) <strong>predict biology</strong> (after sleeping,
            playing, eating, and every 30–60 minutes early on), and (3){' '}
            <strong>reinforce in the right place</strong>—deliver treats where your
            puppy eliminates outdoors, within 1–2 seconds of finishing. Avoid
            scolding; it suppresses signals and slows learning. Crates and puppy
            pens are rest tools, not punishments; most puppies nap better in a
            den-like, covered crate with a chew.
          </p>
          <ol className="list-decimal pl-5 space-y-2 mb-3">
            <li>
              <strong>Potty loop</strong>: leash → quiet potty area → minimal talk
              → big party for success → brief freedom → supervise or crate.
            </li>
            <li>
              <strong>Accident cleanup</strong>: enzymatic cleaner; then tighten
              the schedule. If you catch mid-squat, calmly guide outside and
              reinforce there—no reprimands.
            </li>
            <li>
              <strong>Crate rhythm</strong>: short &amp; sweet: treat scatter
              inside; door open → closed momentarily → open again; gradually add
              seconds with calm exits. Feed meals in the crate to build value.
            </li>
          </ol>
          <p className="mb-0">
            If setbacks persist, assume the schedule is too loose or the puppy is
            over-tired/over-stimulated. Tighten supervision, add naps, and
            reduce free-roaming until you’ve reestablished a clean streak.
          </p>
        </section>

        {/* Socialization */}
        <section id="socialization" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">
            Socialization &amp; Exposure Labs (Weeks 8–16, then ongoing)
          </h2>
          <p className="mb-3">
            The primary socialization window is concentrated in the early months.
            Thoughtful exposures now reduce fear later. Your job is not to “flood”
            your pup; it’s to <strong>create positive associations</strong> with the
            types of people, dogs, places, surfaces, sounds, and handling they’ll
            meet in life. Keep sessions short, reward generously, and allow your
            puppy to opt out if they’re unsure. Well-run puppy classes with health
            checks are a powerful accelerator.
          </p>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm mb-3">
            <strong>Safety note:</strong> Balance disease risk and behavior risk.
            Choose controlled settings (clean floors, verified puppy vaccines) and
            avoid high-traffic dog parks until your veterinarian clears you. Bring
            your own water bowl and treats.
          </div>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>
              <strong>People variety</strong>: hats, wheelchairs, beards, kids at
              a distance, different gaits and voices—pair with treats.
            </li>
            <li>
              <strong>Dog encounters</strong>: neutral, stable adults; supervised
              puppy peers; avoid overwhelming greeters and uncontrolled off-leash
              chaos.
            </li>
            <li>
              <strong>Handling</strong>: feet, ears, tail, collar grabs, muzzle
              touch → treat. Build a habit of “touch = food.”
            </li>
            <li>
              <strong>Environments</strong>: elevators, parking lots, vet lobby
              drive-by visits for cookies, car wash sounds, umbrellas, surfaces
              (grates, turf, tile).
            </li>
          </ul>
          <p className="mb-0">
            Track exposures with a simple checklist (see <a href="#templates" className="underline">Templates</a>). Repeat favorites; revisit
            “meh” items with more distance and better food. The goal is curious
            and confident, not fearless or reckless.
          </p>
        </section>

        {/* Mouthing, bite-inhibition & teething */}
        <section id="mouthing" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">
            Mouthing, Bite Inhibition &amp; Teething (8–24 Weeks)
          </h2>
          <p className="mb-3">
            Retrievers explore with their mouths. Mouthing is normal, especially
            during teething (around 12–24 weeks). Your aims: (1) protect skin and
            clothing, (2) teach <strong>soft mouth</strong> (inhibit pressure), and (3){' '}
            give appropriate outlets (chews, food puzzles, tug with rules).
          </p>
          <ol className="list-decimal pl-5 space-y-2 mb-3">
            <li>
              <strong>Management</strong>: park the puppy on leash near you during
              high-energy times; have chew “stations” stocked around the house.
            </li>
            <li>
              <strong>Redirect</strong>: when teeth touch skin/clothes, calmly feed
              the nearest chew and praise chewing that object. Avoid rough
              wrestling that amps arousal.
            </li>
            <li>
              <strong>Trade games</strong>: frequently swap low-value items for a
              treat and the item back. This prevents resource guarding and
              creates a conditioned “drop” cue.
            </li>
            <li>
              <strong>Cooling chews</strong>: rubber toys chilled (not frozen rock
              hard) can soothe gums. Supervise all chew sessions.
            </li>
          </ol>
          <p className="mb-0">
            If biting escalates with fatigue or overstimulation, insert a nap and
            restart later. If you see growling over chews/food, treat it as
            information: step back, run structured trades, feed in quiet, and get
            a qualified trainer on board early.
          </p>
        </section>

        {/* Alone-time */}
        <section id="alone-time" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">
            Alone-Time Training: Prevent Separation Problems
          </h2>
          <p className="mb-3">
            Many goldens are <em>very</em> people-oriented. Proactively teach
            independence: short, boring absences that predict safe chews and
            naps—never panic. Start with doors closed while you’re in the next
            room, then front-door rituals (keys, shoes) without leaving, then
            30–120 second absences that end while your puppy is calm.
          </p>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>
              <strong>Warm-up</strong>: scatter a few treats in the crate/pen,
              give a long-lasting chew, step away for 30–60 seconds, return
              neutrally, take the chew away only when finished.
            </li>
            <li>
              <strong>Build</strong>: 1–2 minute increments per day as tolerated.
              If you return to whining or barking, reduce criteria and add food
              puzzles or snuffle mats to occupy.
            </li>
            <li>
              <strong>Mix the picture</strong>: sometimes you gear up and don’t
              leave; sometimes you leave by a different door; sometimes you sit
              in the car for 30 seconds and return.
            </li>
          </ul>
          <p className="mb-0">
            Red flags include frantic attempts to escape confinement, heavy
            drooling, urination/defecation only when truly alone, or destruction
            focused at exit points. See <a href="#vet-now" className="underline">When to call the vet now</a>.
          </p>
        </section>

        {/* Leash, recall, impulse */}
        <section id="leash" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">
            Leash Skills, Recall &amp; Impulse Control
          </h2>
          <p className="mb-3">
            Goldens are enthusiastic walkers. Treat the first months like
            kindergarten for loose-leash walking—slow, lots of reinforcement, and
            short distances. Separate “training walks” (2–10 minutes of high-pay
            reps) from “sniff &amp; stroll” decompression. For recall, condition a
            cue that screams “party!” and never call to punish or end all fun.
          </p>
          <h3 className="text-lg font-semibold mb-1">Loose-Leash Formula</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>
              <strong>Position</strong>: feed at your pant seam as you move. Mark
              every 1–3 steps early, then every 3–5, then variable rewards.
            </li>
            <li>
              <strong>Pattern games</strong>: “1-2-3-freed” or “find the food”
              drops to keep pace and position. Reinforce check-ins.
            </li>
            <li>
              <strong>Long line</strong>: outdoors, use a 10–20 ft line to
              protect recall while allowing exploration. Reward frequently for
              reorientations.
            </li>
          </ul>
          <h3 className="text-lg font-semibold mb-1">Recall Protocol</h3>
          <ol className="list-decimal pl-5 space-y-2 mb-3">
            <li>
              <strong>Charge the cue</strong>: say your word or whistle → toss
              3–5 tiny treats at your feet. Repeat 5–10 times, multiple days.
            </li>
            <li>
              <strong>Short reps</strong>: 3–5 ft indoors with no distractions;
              jackpot fast arrivals.
            </li>
            <li>
              <strong>Expand</strong>: new rooms, backyard on long line, fields
              at quiet times before adding dog distractions.
            </li>
            <li>
              <strong>Maintain</strong>: randomly pay “big” forever. Reliability
              fades without reinforcement.
            </li>
          </ol>
          <h3 className="text-lg font-semibold mb-1">Impulse Control</h3>
          <ul className="list-disc pl-5 space-y-1 mb-0">
            <li>
              <strong>Default sit</strong> for doorways, meals, leashing, greeting
              people. Reward calm, not jumping.
            </li>
            <li>
              <strong>Leave-it</strong>: start with a treat in your closed fist,
              reward ignoring, then move to dropped food on the floor with leash.
            </li>
            <li>
              <strong>Settle on mat</strong>: teach duration relaxation; build to
              3–5 minutes with quiet sniffing of a stuffed toy.
            </li>
          </ul>
        </section>

        {/* Cooperative care */}
        <section id="cooperative-care" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">
            Cooperative Care &amp; Grooming (Goldens &amp; Their Coats)
          </h2>
          <p className="mb-3">
            Start day-one with consent-based handling. Teach a <strong>chin rest</strong>{' '}
            on your palm or a padded object, then reinforce calmly while you
            touch ears, feet, and tail. For brushing the double coat, pair each
            stroke with a small snack. Short, frequent sessions beat marathons.
            Create a ritual for nail care (touch nail → treat, file once → treat,
            break). Practice calm muzzling skills as a just-in-case life skill.
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <strong>Ears</strong>: floppy ears can trap moisture. Train “ear
              looks” and gentle wipes after swimming days.
            </li>
            <li>
              <strong>Bath/dry</strong>: low-slip mats, lukewarm water, slow
              desensitization to nozzle sounds; reward quiet standing.
            </li>
            <li>
              <strong>Vet prep</strong>: drive-by cookie visits; practice exam
              positions (standing, lateral recumbency) with treats.
            </li>
          </ul>
        </section>

        {/* Nutrition, treat budgets & chews */}
        <section id="nutrition" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">
            Nutrition, Treat Budgets &amp; Chews
          </h2>
          <p className="mb-3">
            Training uses food. Keep calories sensible by reserving part of your
            daily ration for training and using tiny pieces. Aim to keep treats to
            roughly <strong>≤10% of daily calories</strong> unless you’ve planned for
            more with your veterinary team. Choose age-appropriate puppy diets
            and monitor growth with body and muscle condition scoring. For
            teething and oral care, select chews and treats recognized by the
            <em> Veterinary Oral Health Council (VOHC)</em>.
          </p>
          <p className="mb-0">
            Always supervise chewing. Avoid items that are harder than your
            fingernail or that splinter. If in doubt, ask your veterinarian which
            chews are appropriate for your puppy’s stage and teeth.
          </p>
        </section>

        {/* Enrichment */}
        <section id="enrichment" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">
            Enrichment, Scentwork &amp; Brain Games (Meet the Working Brain)
          </h2>
          <p className="mb-3">
            A mentally satisfied golden is easier to live with. Rotate{' '}
            <strong>sniff-based games</strong> (scatter-feeds, find-the-cookie),
            <strong> problem feeders</strong> (snuffle mats, puzzle toys), and{' '}
            <strong>retrieving channels</strong> (short, controlled fetch with a
            calm pick-up and clean drop). Use <em>pattern games</em> (predictable
            sequences) to regulate arousal around triggers like doorbells or other
            dogs on walks. Five minutes of scentwork can often drain more steam
            than a long, over-stimulating romp.
          </p>
          <p className="mb-0">
            Keep arousal balanced: end high-energy sessions with 1–2 minutes of
            mat settles or slow sniff &amp; stroll to come back to baseline.
          </p>
        </section>

        {/* Adolescence */}
        <section id="adolescence" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">
            Adolescence (6–18 Months): Why Training Suddenly Feels Harder
          </h2>
          <p className="mb-3">
            Around 6–9 months, many dogs—goldens included—enter a developmental
            phase where responsiveness dips, especially toward primary caregivers.
            This is normal and typically <strong>temporary</strong>. Your best tools
            are: stick to routines, increase reinforcement, lower criteria when
            needed, and prevent self-rewarding chaos (e.g., sprinting to other
            dogs). This is the period when many owners feel discouraged; plan for
            it and you’ll sail through.
          </p>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>
              Keep sessions ultra-short with better pay. Use higher-value food in
              busy places.
            </li>
            <li>
              If recall falters, go back to long lines and easy reps—speed kills:
              reward the fastest turn-and-run.
            </li>
            <li>
              Social contact matters, but <strong>quality over quantity</strong>.
              Choose calm dog friends, structured greetings, and sniffy parallel
              walks.
            </li>
          </ul>
          <p className="mb-0">
            Set friendly milestones like <strong>AKC S.T.A.R. Puppy</strong> and{' '}
            <strong>Canine Good Citizen (CGC)</strong>. Graduating these programs
            motivates humans and gives goldens a job they love—working with you.
          </p>
        </section>

        {/* Safety & exercise */}
        <section id="safety" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">
            Safety, Exercise &amp; Risk Management for Growing Goldens
          </h2>
          <p className="mb-3">
            Puppies need movement, but joints and growth plates are still
            maturing. Prefer frequent, low-impact play, <em>sniff &amp; stroll</em>
            walks, and swimming <em>with</em> rests. Avoid repetitive high-impact
            activities (forced running, fetch marathons, stair sprints, repeated
            jumping) until skeletal maturity. When in doubt, ask your veterinary
            team about age-appropriate activity and build conditioning gradually.
          </p>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>
              <strong>Ear care</strong>: goldens’ drop ears hold moisture. Dry
              after swims; condition positive ear checks and cleansing.
            </li>
            <li>
              <strong>Foreign bodies</strong>: curious mouths mean risk. Manage
              the environment to prevent sock/rock/corncob ingestion. Train
              “leave it” and “drop.”
            </li>
            <li>
              <strong>Weather</strong>: hot, humid days raise heat risk for any
              breed—schedule sniffy shade walks and water play with caution.
            </li>
          </ul>
          <p className="mb-0">
            Healthy activity supports training: a puppy with their needs met is
            far less likely to rehearse problem behaviors. Train the dog in front
            of you—energy varies by day.
          </p>
        </section>

        {/* Vet now */}
        <section id="vet-now" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">When to Call the Vet Now</h2>
          <p className="mb-3">
            Training stalls can signal discomfort. Call your veterinarian promptly
            if you observe:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <strong>Ear issues</strong>: persistent head shaking, ear scratching,
              pain on touch, malodor, or discharge.
            </li>
            <li>
              <strong>GI red flags</strong>: repeated vomiting, lethargy, anorexia,
              abdominal pain, diarrhea (especially with blood), or any suspicion
              of toy/cloth/rock ingestion.
            </li>
            <li>
              <strong>Sudden behavior change</strong>: unusual fear, aggression,
              or loss of housetraining—pain or illness must be ruled out.
            </li>
          </ul>
        </section>

        {/* Templates */}
        <section id="templates" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Checklists &amp; Templates</h2>

          <h3 className="text-lg font-semibold mt-2 mb-1">
            Daily Schedule (Copy/Paste)
          </h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>
              07:00 – Potty &amp; breakfast (some ration reserved for training).
            </li>
            <li>07:15 – 3 x 60–90s training reps (name, hand target, sit).</li>
            <li>07:25 – Sniff &amp; stroll (10–15 min), then nap/crate (60–90).</li>
            <li>09:00 – Potty; enrichment (snuffle mat); calm settle on mat.</li>
            <li>
              12:00 – Potty &amp; lunch; 2 x leash micro-walks (2–5 min each).
            </li>
            <li>Afternoon – Alone-time rep(s) with chew; nap cycles.</li>
            <li>17:00 – Potty &amp; dinner; recall games on long line.</li>
            <li>Evening – Family downtime; grooming/cooperative care; bedtime.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">
            Socialization Scorecard
          </h3>
          <p className="mb-2">
            Log 3–5 new or repeated exposures daily for weeks 8–16:
          </p>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>People types (age, mobility devices, clothing, voices)</li>
            <li>Dogs (calm adult, puppy peer, neutral dog at distance)</li>
            <li>Handling (ears, feet, mouth, collar grabs, harness on/off)</li>
            <li>Places (parking lot, elevator, vet lobby cookie visit)</li>
            <li>Sounds (doorbell, cookware, traffic, recordings at low volume)</li>
            <li>Surfaces (grate, tile, turf, mulch, car ramps)</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">
            Behavior Criteria Ladders (Examples)
          </h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>
              <strong>Recall</strong>: 3 ft indoors → 10 ft → 20 ft → yard on long
              line → quiet field → presence of calm dog at 30 ft → park path with
              joggers → same with mild dog distractions → fenced off-leash field.
            </li>
            <li>
              <strong>Loose leash</strong>: 3 steps indoors → 10 steps → house
              perimeter → short sidewalk stretch → busier block with higher
              reinforcement rate → park with dogs at distance.
            </li>
            <li>
              <strong>Settle on mat</strong>: 10 seconds with chew → 30 → 60 →
              add person walking past → doorbell sound at low volume → guests
              enter (on leash), reinforce calm.
            </li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">House/Potty Log</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Time, location (spot), success/accident, notes (pre-activity).</li>
            <li>
              Aim for 3–5 days clean; then expand freedom room-by-room with gates
              and tethers.
            </li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">
            Cooperative Care Checklist
          </h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Chin rest 2–3 seconds → 10 seconds</li>
            <li>Feet touch → nail file click → 1–2 nails per session</li>
            <li>Ear flap lift → look → cotton round wipe (reward each step)</li>
            <li>Tooth look → finger brush swipe → toothpaste taste → brush pass</li>
          </ul>

          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm mt-3">
            <strong>Petunia tip:</strong> Turn each ladder into a{' '}
            <em>progress tracker</em> in Petunia. Mark green when easy, yellow
            when shaky, red when too hard. Only move to the next rung when 4/5
            reps are green.
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">
            Frequently Asked Questions
          </h2>

          <p className="mb-3">
            <strong>When should I start puppy classes?</strong>
            <br />
            As soon as your veterinarian clears a well-run class that verifies
            vaccines and hygiene. Early, positive classes during the first months
            offer big behavior dividends later in life. Bring tiny treats and
            keep breaks frequent.
          </p>

          <p className="mb-3">
            <strong>How long should training sessions be?</strong>
            <br />
            60–120 seconds per rep for young puppies, with several micro-sessions
            daily. End on success. During adolescence, keep the game short with
            better pay and lower criteria as needed.
          </p>

          <p className="mb-3">
            <strong>What if my golden pulls hard on leash?</strong>
            <br />
            Break routes into “training blocks” (10–30 yards) where you pay
            generously for nice position, then switch to “sniff &amp; stroll”
            where pulling rules are looser but you pause when the leash goes
            tight. Use a comfortable Y-harness; avoid aversive tools that can
            worsen behavior and emotion.
          </p>

          <p className="mb-3">
            <strong>My puppy eats everything outside. Help!</strong>
            <br />
            Pre-load walks with reinforcement, keep a short, safe “search strip”
            along the path where you scatter a few food bits, and train strong
            “leave it” and “drop” with high-value trades. Indoors, manage the
            environment fiercely to prevent practice.
          </p>

          <p className="mb-3">
            <strong>What sport foundations suit goldens?</strong>
            <br />
            Retrieving games with clean delivery, scentwork, rally foundations,
            and beginner agility <em>flatwork</em> (targets, balance, body
            awareness). Add impact (jumps, weaves) only after your vet confirms
            growth plate maturity and conditioning is appropriate.
          </p>

          <p className="mb-3">
            <strong>
              Should I aim for AKC S.T.A.R. Puppy or CGC during this period?
            </strong>
            <br />
            Yes—both are excellent benchmarks for teamwork and manners. They also
            keep humans consistent and motivated through adolescence.
          </p>

          <p className="mb-0">
            <strong>When should I worry about behavior vs. health?</strong>
            <br />
            If behavior changes suddenly or is accompanied by physical signs
            (ear pain, GI upset, lethargy), rule out medical issues first. Goldens
            are stoic; discomfort can show up as training “stubbornness.”
          </p>
        </section>

        {/* Sources */}
        <section id="sources" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">📚 Sources (Selected)</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            {/* Training & socialization principles */}
            <li>
              AVSAB. <em>Puppy Socialization Position Statement.</em>{' '}
              <a
                href="https://avsab.org/wp-content/uploads/2018/03/Puppy_Socialization_Position_Statement_Download_-_10-3-14.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://avsab.org/.../Puppy_Socialization_Position_Statement
              </a>
            </li>
            <li>
              AVSAB. <em>Humane Dog Training Position Statement (2021).</em>{' '}
              <a
                href="https://avsab.org/wp-content/uploads/2021/08/AVSAB-Humane-Dog-Training-Position-Statement-2021.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://avsab.org/.../AVSAB-Humane-Dog-Training-Position-Statement-2021.pdf
              </a>
            </li>
            <li>
              AVMA. <em>Socialization of Dogs and Cats.</em>{' '}
              <a
                href="https://www.avma.org/resources-tools/animal-health-and-welfare/socialization-dogs-and-cats"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.avma.org/.../socialization-dogs-and-cats
              </a>
            </li>
            <li>
              VCA. <em>Puppy Behavior &amp; Training—Training Basics.</em>{' '}
              <a
                href="https://vcahospitals.com/know-your-pet/puppy-behavior-and-training-training-basics"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://vcahospitals.com/.../training-basics
              </a>
            </li>

            {/* House/crate training, behavior fundamentals */}
            <li>
              Merck Veterinary Manual (MSD). <em>Housetraining Dogs.</em>{' '}
              <a
                href="https://www.merckvetmanual.com/dog-owners/behavior-of-dogs/housetraining-dogs"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.merckvetmanual.com/.../housetraining-dogs
              </a>
            </li>

            {/* Life stage & preventive care context */}
            <li>
              AAHA. <em>Puppy Life Stage: Owner Resource.</em>{' '}
              <a
                href="https://www.aaha.org/resources/puppy-life-stage/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.aaha.org/resources/puppy-life-stage/
              </a>
            </li>
            <li>
              AAHA. <em>Canine Life Stage Guidance.</em>{' '}
              <a
                href="https://www.aaha.org/resources/how-often-should-my-dog-go-to-the-vet-a-dog-life-stage-guide/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.aaha.org/.../dog-life-stage-guide/
              </a>
            </li>
            <li>
              WSAVA. <em>Global Nutrition Guidelines.</em>{' '}
              <a
                href="https://wsava.org/global-guidelines/global-nutrition-guidelines/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://wsava.org/global-guidelines/global-nutrition-guidelines/
              </a>
            </li>

            {/* Oral health & chews */}
            <li>
              VOHC. <em>Accepted Products for Dogs.</em>{' '}
              <a
                href="https://vohc.org/accepted-products/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://vohc.org/accepted-products/
              </a>
            </li>

            {/* Breed context & programs */}
            <li>
              AKC. <em>Golden Retriever Breed Information.</em>{' '}
              <a
                href="https://www.akc.org/dog-breeds/golden-retriever/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.akc.org/dog-breeds/golden-retriever/
              </a>
            </li>
            <li>
              AKC. <em>S.T.A.R. Puppy Program.</em>{' '}
              <a
                href="https://www.akc.org/products-services/training-programs/canine-good-citizen/akc-star-puppy/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.akc.org/.../akc-star-puppy/
              </a>
            </li>
            <li>
              AKC. <em>Canine Good Citizen (CGC).</em>{' '}
              <a
                href="https://www.akc.org/products-services/training-programs/canine-good-citizen/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.akc.org/.../canine-good-citizen/
              </a>
            </li>
            <li>
              Golden Retriever Club of America (GRCA). <em>About the Breed.</em>{' '}
              <a href="https://grca.org/" target="_blank" rel="noopener noreferrer">
                https://grca.org/
              </a>
            </li>

            {/* Adolescence evidence */}
            <li>
              Asher L, England GCW, Sommerville R, Harvey ND.{' '}
              <em>
                Teenage dogs? Evidence for adolescent-phase conflict behaviour…
              </em>{' '}
              <a
                href="https://royalsocietypublishing.org/doi/10.1098/rsbl.2020.0097"
                target="_blank"
                rel="noopener noreferrer"
              >
                Biology Letters (2020)
              </a>
            </li>

            {/* Ear & GI red flags */}
            <li>
              Merck Veterinary Manual (MSD). <em>Ear Infections and Otitis Externa in Dogs.</em>{' '}
              <a
                href="https://www.merckvetmanual.com/dog-owners/ear-disorders-of-dogs/ear-infections-and-otitis-externa-in-dogs"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.merckvetmanual.com/.../ear-infections
              </a>
            </li>
            <li>
              MSD Vet Manual. <em>Gastrointestinal Obstruction in Small Animals.</em>{' '}
              <a
                href="https://www.msdvetmanual.com/digestive-system/surgical-problems-of-the-gastrointestinal-tract-in-small-animals/gastrointestinal-obstruction-in-small-animals"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.msdvetmanual.com/.../gastrointestinal-obstruction
              </a>
            </li>
            <li>
              Cornell Riney Canine Health Center.{' '}
              <em>GI Foreign Body Obstruction: Clinical Signs.</em>{' '}
              <a
                href="https://www.vet.cornell.edu/departments-centers-and-institutes/riney-canine-health-center/canine-health-information/gastrointestinal-foreign-body-obstruction-dogs"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.vet.cornell.edu/.../gastrointestinal-foreign-body-obstruction-dogs
              </a>
            </li>
          </ul>
          <p className="text-xs text-gray-600 mt-4">
            Educational content only. Always consult your veterinarian or a
            credentialed trainer/behavior professional for individualized
            guidance. Activity intensity and training plans should reflect your
            puppy’s health status and stage of development.
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
