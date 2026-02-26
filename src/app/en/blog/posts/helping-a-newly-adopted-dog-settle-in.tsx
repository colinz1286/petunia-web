// File: src/app/blog/posts/helping-a-newly-adopted-dog-settle-in.tsx
'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function HelpingANewlyAdoptedDogSettleIn() {
  const locale = useLocale();

  const title =
    'Helping a Newly Adopted Dog Settle In: A Complete Guide for the First Days, Weeks, and Months';
  const date = 'August 9, 2025';
  const categories = ['owner', 'rescue'];

  const categoryLabels: Record<string, string> = {
    boarding: 'Boarding & Daycare',
    sitter: 'Pet Sitters',
    walker: 'Dog Walkers',
    rescue: 'Rescues',
    vet: 'Veterinary Clinics',
    owner: 'Pet Owners',
  };

  return (
    <>

      <main className="max-w-3xl mx-auto px-4 py-10 text-[#2c4a30]">
        <p className="text-sm text-gray-500 mb-2">Posted on {date}</p>
        <h1 className="text-3xl font-bold mb-4">{title}</h1>

        <div className="flex flex-wrap gap-2 mb-6">
          {categories.map((key) => (
            <span
              key={key}
              className="text-xs bg-[#e4dbcb] text-[#2c4a30] px-3 py-1 rounded-full border border-[#d9cfc2]"
            >
              {categoryLabels[key]}
            </span>
          ))}
        </div>

        {/* Local anchor nav for long-form reading */}
        <nav className="mb-10 text-sm">
          <ul className="flex flex-wrap gap-3">
            <li>
              <a href="#overview" className="underline hover:opacity-80">
                Overview
              </a>
            </li>
            <li>
              <a href="#first-72" className="underline hover:opacity-80">
                First 72 Hours
              </a>
            </li>
            <li>
              <a href="#routine" className="underline hover:opacity-80">
                Routine
              </a>
            </li>
            <li>
              <a href="#bonding" className="underline hover:opacity-80">
                Bonding
              </a>
            </li>
            <li>
              <a href="#other-pets" className="underline hover:opacity-80">
                Other Pets
              </a>
            </li>
            <li>
              <a href="#mistakes" className="underline hover:opacity-80">
                Common Mistakes
              </a>
            </li>
            <li>
              <a href="#training" className="underline hover:opacity-80">
                Training Philosophy
              </a>
            </li>
            <li>
              <a href="#health" className="underline hover:opacity-80">
                Health & Vet Care
              </a>
            </li>
            <li>
              <a href="#house-training" className="underline hover:opacity-80">
                House-Training
              </a>
            </li>
            <li>
              <a href="#enrichment" className="underline hover:opacity-80">
                Enrichment
              </a>
            </li>
            <li>
              <a href="#separation" className="underline hover:opacity-80">
                Separation
              </a>
            </li>
            <li>
              <a href="#333" className="underline hover:opacity-80">
                3-3-3 Rule
              </a>
            </li>
            <li>
              <a href="#safety" className="underline hover:opacity-80">
                Safety & Legal
              </a>
            </li>
            <li>
              <a href="#budget" className="underline hover:opacity-80">
                Budget
              </a>
            </li>
            <li>
              <a href="#pros" className="underline hover:opacity-80">
                Pros to Call
              </a>
            </li>
            <li>
              <a href="#mindset" className="underline hover:opacity-80">
                Owner Mindset
              </a>
            </li>
            <li>
              <a href="#templates" className="underline hover:opacity-80">
                Templates
              </a>
            </li>
            <li>
              <a href="#global" className="underline hover:opacity-80">
                Global Notes
              </a>
            </li>
            <li>
              <a href="#faq" className="underline hover:opacity-80">
                FAQ
              </a>
            </li>
            <li>
              <a href="#wrap" className="underline hover:opacity-80">
                Wrap-Up
              </a>
            </li>
            <li>
              <a href="#sources" className="underline hover:opacity-80">
                Sources
              </a>
            </li>
          </ul>
        </nav>

        {/* OVERVIEW */}
        <section id="overview" className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">
            Overview — Why This Transition Matters
          </h2>
          <p className="mb-4">
            Adopting a dog is a big deal. You’re not just taking an animal
            home; you’re giving someone a second chance. That transition—from
            shelter, street, foster, or previous home into your living
            room—can be overwhelming for dogs and humans. I’ve personally been
            lucky: I’ve never had a major issue with an adopted dog. But I’ve
            watched many owners struggle during those first weeks. Most
            problems come down to three things: <strong>time</strong>,{' '}
            <strong>consistency</strong>, and <strong>realistic
            expectations</strong>.
          </p>
          <p className="mb-4">
            This guide blends my on-the-ground perspective with global best
            practices from veterinary and animal-welfare organizations (AVMA,
            RSPCA, Dogs Trust, Blue Cross, AAHA/WSAVA, and more). The aim:
            help your new dog <strong>decompress</strong>, understand your{' '}
            <strong>routine</strong>, and <strong>bond</strong> with you so
            you can enjoy a long, healthy life together.
          </p>
        </section>

        {/* FIRST 72 HOURS */}
        <section id="first-72" className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">
            Part 1 — The First 72 Hours: Build Trust First, Do Everything Else
            Later
          </h2>
          <blockquote className="italic border-l-4 border-[#d9cfc2] pl-4 mb-4 text-gray-700">
            <strong>
              Spend as much time as you can with your new dog for the first
              three days and make sure that when they’re stressed or confused,
              they can count on you.
            </strong>
          </blockquote>
          <p className="mb-4">
            The first three days are not about impressive training or rapid
            socialization. They’re about trust and decompression. Research
            shows that dogs coming from shelter environments often have
            elevated cortisol (stress) and that it takes days for those levels
            to come back down after leaving the kennel environment (Hennessy
            et al., 2001). In practice, that looks like one of two extremes:
          </p>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li>
              <strong>Shut-down:</strong> hiding, low appetite, low energy,
              minimal engagement.
            </li>
            <li>
              <strong>Over-amped:</strong> pacing, restlessness, vocalization,
              hyperactivity.
            </li>
          </ul>
          <p className="mb-4">
            Both are normal. Your job is to make the environment predictable
            and safe.
          </p>
          <h3 className="text-xl font-semibold mt-6 mb-2">
            What I do, step-by-step
          </h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Presence over everything.</strong> If possible, take a
              few days off or work from home. Calm proximity is the fastest
              trust-builder.
            </li>
            <li>
              <strong>Keep the house boring.</strong> No welcome-home
              parties, no crowd of neighbors, no chaotic errands.
            </li>
            <li>
              <strong>Show them “their spot.”</strong> Crate, pen, quiet room,
              or bed in a low-traffic corner. Don’t force it; let them retreat
              when they want.
            </li>
            <li>
              <strong>Start your real routine on Day 1.</strong> Feed, walk,
              potty, and rest at the same times you intend to keep long-term.
            </li>
            <li>
              <strong>Observe, don’t push.</strong> If they approach—great. If
              they hang back—also great. You’re the safe constant either way.
            </li>
            <li>
              <strong>Keep outings short and predictable.</strong> Quiet
              streets or the yard; avoid busy dog parks or crowded pet stores
              in the first 72 hours.
            </li>
          </ul>
          <blockquote className="italic border-l-4 border-[#d9cfc2] pl-4 mt-4 text-gray-700">
            “In those early days, you’re not just showing them a house—you’re
            showing them who you are: calm, consistent, dependable.”
          </blockquote>
        </section>

        {/* ROUTINE */}
        <section id="routine" className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">
            Part 2 — Set the Routine Early (It’s the Backbone of Adjustment)
          </h2>
          <p className="mb-4">
            Dogs relax when life is predictable. I’m a firm believer in a
            <strong> strict schedule</strong> for the first weeks—especially
            feeding times. Put the dog on a routine that matches your
            lifestyle, not the other way around. If you establish the “forever
            schedule” now, you won’t have to unteach anything later.
          </p>
          <h3 className="text-xl font-semibold mt-6 mb-2">
            Sample first-weeks schedule (tweak to your household)
          </h3>
          <ul className="list-disc pl-5 space-y-1 mb-6">
            <li>
              <strong>7:00 AM</strong> — Potty & short walk
            </li>
            <li>
              <strong>7:30 AM</strong> — Breakfast
            </li>
            <li>
              <strong>Midday</strong> — Potty & brief play/sniff walk
            </li>
            <li>
              <strong>5:30 PM</strong> — Dinner
            </li>
            <li>
              <strong>Evening</strong> — Bonding game or light training
            </li>
            <li>
              <strong>Bedtime</strong> — Final potty, then sleep
            </li>
          </ul>
          <p className="mb-4">
            Predictable events reduce anxiety and create “environmental
            control” for the dog (Overall, 2013). Set meal windows anchor
            house-training and GI regularity. Scheduled mental/physical outlets
            prevent pent-up energy from showing up as “behavior problems.”
          </p>
        </section>

        {/* BONDING */}
        <section id="bonding" className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">
            Part 3 — Bonding: Shared Joy Beats Endless Cuddles
          </h2>
          <p className="mb-4">
            Affection matters—but it’s not the only language. For newly adopted
            dogs, “too much” fuss can overwhelm them. I get the best results by
            finding a <strong>high-energy game or activity</strong> the dog
            genuinely loves and doing it together:
          </p>
          <ul className="list-disc pl-5 space-y-1 mb-6">
            <li>Fetch or tug with a favorite toy</li>
            <li>Exploring a quiet trail (sniffari walks are magic)</li>
            <li>Learning a fun, low-pressure trick with lots of success reps</li>
          </ul>
          <p className="mb-4">
            Shared success and novelty build positive associations with you
            faster than passive closeness. The dog learns: “Good things happen
            when I’m with this person.”
          </p>
        </section>

        {/* OTHER PETS */}
        <section id="other-pets" className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">
            Part 4 — Other Pets: Wait, Then Make Every Early Rep Positive
          </h2>
          <p className="mb-4">
            I wait <strong>three to four weeks</strong> before introducing new
            dogs to resident pets unless it’s absolutely necessary. Early
            experiences are heavy. A single ugly interaction can set your
            timeline back months.
          </p>
          <h3 className="text-xl font-semibold mt-6 mb-2">My rules</h3>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li>
              <strong>Neutral ground.</strong> Driveway, sidewalk, park—not a
              tight hallway or crowded room.
            </li>
            <li>
              <strong>Loose leashes.</strong> Safety without tension.
            </li>
            <li>
              <strong>High-value rewards.</strong> Mark calm approaches and
              polite breaks in attention.
            </li>
            <li>
              <strong>Quit while you’re ahead.</strong> End before anyone gets
              snappy or tired.
            </li>
          </ul>
          <p className="mb-4">
            For cats: slow it down further—visual exposure at distance, gated
            doorways, scent swaps, safe vertical space, and retreats.
          </p>
        </section>

        {/* MISTAKES */}
        <section id="mistakes" className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">
            Part 5 — The Biggest Mistakes New Adopters Make
          </h2>
          <ul className="list-disc pl-5 space-y-2 mb-6">
            <li>
              <strong>Expecting too much, too soon.</strong> Especially with
              young dogs. You can stack many reps; development still takes
              time.
            </li>
            <li>
              <strong>Flooding with novelty.</strong> Ten new locations,
              twelve new people, three new dogs—all in week one.
            </li>
            <li>
              <strong>Inconsistent rules.</strong> One person invites the dog
              on the couch; another corrects it.
            </li>
            <li>
              <strong>Zero environment management.</strong> Freedom too soon,
              shoes on the floor, trash accessible—then blaming the dog for
              obvious opportunities.
            </li>
            <li>
              <strong>Expecting instant affection.</strong> Bonding is earned
              through experience, not assumed at intake.
            </li>
          </ul>
          <p className="mb-4">
            Most of these vanish when you slow down, manage the environment,
            and communicate consistently.
          </p>
        </section>

        {/* TRAINING */}
        <section id="training" className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">
            Part 6 — Training Philosophy: Why I Wait for Formal Work (9–12
            Months)
          </h2>
          <p className="mb-4">
            I don’t start <strong>formal, intensive</strong> training until a
            dog is <strong>9–12 months</strong> old. Before that I focus on
            life skills: recall foundations, loose-lead walking, calm public
            behavior, and household rules—kept short, fun, and
            confidence-building.
          </p>
          <p className="mb-4">
            I also don’t rely on constant reward-only protocols. Rewards are
            important, but dogs benefit from <strong>clear boundaries</strong>,
            <strong> fair corrections</strong> when needed, and{' '}
            <strong>balanced feedback</strong>. The goal is clarity, not treat
            dependence.
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>0–8 months:</strong> confidence, exploration, short fun
              reps, social composure
            </li>
            <li>
              <strong>9–12 months:</strong> layer in formal structure if the
              dog is ready
            </li>
            <li>
              <strong>Always:</strong> short sessions, high rate of success,
              end on a win
            </li>
          </ul>
          <p className="mt-4">
            If you need help—especially for safety issues—loop in a qualified
            trainer or veterinary behaviorist early. The sooner you get skilled
            eyes on a real problem, the faster and kinder the fix.
          </p>
        </section>

        {/* HEALTH */}
        <section id="health" className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">
            Part 7 — Health & Veterinary Care: Lock the Plan, Then Follow It
          </h2>
          <p className="mb-4">
            First call: your adoption center or breeder. Ask for complete
            medical records (vaccines, deworming, flea/tick/heartworm
            prevention, spay/neuter status, any meds). If their next-step
            guidance is vague, call your veterinarian with the records and
            follow their schedule strictly.
          </p>
          <h3 className="text-xl font-semibold mt-6 mb-2">
            “Welcome exam” (ideally within the first week)
          </h3>
          <ul className="list-disc pl-5 space-y-2 mb-6">
            <li>Full physical and baseline vitals</li>
            <li>
              Vaccine catch-up/boosters according to age & history (AAHA/WSAVA
              guidance)
            </li>
            <li>Parasite screening and prevention</li>
            <li>Nutrition assessment and safe diet transition</li>
            <li>Microchip scan and registration/ID check</li>
            <li>Discuss boarding/travel requirements in your region</li>
          </ul>
        </section>

        {/* HOUSE-TRAINING */}
        <section id="house-training" className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">
            Part 8 — House-Training & Home Habits (Fast Wins You Can Bank)
          </h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Confinement is kind.</strong> Crate/pen as a “nursery,”
              not a punishment; freedom is earned.
            </li>
            <li>
              <strong>Timing.</strong> Out after sleep, meals, play; every 2–3
              hours early on.
            </li>
            <li>
              <strong>Reward the act outside.</strong> Praise/treat during or
              immediately after elimination.
            </li>
            <li>
              <strong>Enzymatic cleanup.</strong> Remove “pee maps”; household
              cleaners leave scent cues.
            </li>
            <li>
              <strong>Quiet nights.</strong> Predictable bedtime; last potty,
              then lights out.
            </li>
          </ul>
        </section>

        {/* ENRICHMENT */}
        <section id="enrichment" className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">
            Part 9 — Enrichment: Burn the Brain, Not Just the Legs
          </h2>
          <p className="mb-4">
            A decompressed brain makes better choices. Mix mental and sensory
            work into your day:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Sniff-walks (let the nose lead within safe limits)</li>
            <li>Scatter feeding or “find-it” games</li>
            <li>Food puzzles and safe chews (rotate novelty)</li>
            <li>
              Short shaping sessions (micro-tricks, targeting, calm settle on a
              mat)
            </li>
            <li>Calming routines (lick mats, stuffed Kongs during downtime)</li>
          </ul>
        </section>

        {/* SEPARATION */}
        <section id="separation" className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">
            Part 10 — Separation: Prevent Problems Instead of Fixing Them Later
          </h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Start with micro-absences (30–90 seconds); return casually.</li>
            <li>Pair alone-time with chews/puzzles.</li>
            <li>Use a camera to monitor—relaxing or spiraling?</li>
            <li>
              If distress escalates, get help early; prevention is far kinder
              than rehab.
            </li>
          </ul>
        </section>

        {/* 3-3-3 RULE */}
        <section id="333" className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">
            Part 11 — The 3-3-3 Rule: A Practical Expectations Map
          </h2>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li>
              <strong>3 days:</strong> decompression; shut-down or amped; you
              build safety and predictability.
            </li>
            <li>
              <strong>3 weeks:</strong> routine learned; boundaries tested; be
              consistent.
            </li>
            <li>
              <strong>3 months:</strong> secure attachment; truer personality;
              solid rhythms.
            </li>
          </ul>
          <p>
            It’s a mindset, not a law. Some dogs move faster, some slower. Zoom
            out and measure progress in weeks and months, not days.
          </p>
        </section>

        {/* SAFETY & LEGAL */}
        <section id="safety" className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">
            Part 12 — Safety, Legal & ID Basics (U.S., Canada, U.K., Ireland,
            Australia, New Zealand)
          </h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Microchip & ID tags.</strong> Keep info current;
              registration often required.
            </li>
            <li>
              <strong>Leash laws/public rules.</strong> Check local
              expectations; safety first.
            </li>
            <li>
              <strong>Vaccination proofs.</strong> Needed for boarding/daycare
              and often travel.
            </li>
            <li>
              <strong>Insurance/liability.</strong> Common in U.K./E.U.; worth
              exploring elsewhere.
            </li>
            <li>
              <strong>Housing contracts.</strong> Know pet clauses to avoid
              rehoming pressure later.
            </li>
          </ul>
        </section>

        {/* BUDGET */}
        <section id="budget" className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">
            Part 13 — Money: Budget the Boring Stuff So You Can Enjoy the Fun
            Stuff
          </h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>One-offs:</strong> crate/pen, beds, gates, bowls, tags,
              harness/leash, long line, chew/puzzle rotation, brush/nail tools,
              poop bags.
            </li>
            <li>
              <strong>Recurring:</strong> quality diet, preventives, insurance
              (if used), routine vet care, training classes/consults,
              daycare/boarding buffer for travel.
            </li>
          </ul>
        </section>

        {/* PRO HELP */}
        <section id="pros" className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">
            Part 14 — When to Call a Professional (and Who to Call)
          </h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Immediate safety issues:</strong> biting, serious
              resource guarding, attacks on other pets — call a qualified
              trainer or a veterinary behaviorist now.
            </li>
            <li>
              <strong>Medical red flags:</strong> refusal to eat &gt;24–36h,
              persistent GI upset, lethargy, pain, sudden behavior change — call
              your vet.
            </li>
            <li>
              <strong>Severe separation distress:</strong> don’t wait months.
              Early intervention is kinder on the dog and your life.
            </li>
          </ul>
        </section>

        {/* MINDSET */}
        <section id="mindset" className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">
            Part 15 — Owner Mindset: All In, or Not at All
          </h2>
          <p className="mb-4">
            When you adopt a dog, you’re all in. If you’re not, wait until you
            are. That means: work the plan even when it’s inconvenient; ask for
            help instead of hoping; be consistent even when you’re tired; and
            protect early experiences so your dog forms the right conclusions
            about the world.
          </p>
          <blockquote className="italic border-l-4 border-[#d9cfc2] pl-4 text-gray-700">
            The reward isn’t just a well-behaved pet. It’s a deep, durable bond
            with a living being who trusts you completely.
          </blockquote>
        </section>

        {/* TEMPLATES */}
        <section id="templates" className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">
            Part 16 — Practical Templates You Can Steal
          </h2>
          <h3 className="text-xl font-semibold mt-4 mb-2">
            1) First-Week Daily Card
          </h3>
          <p className="mb-4">
            <strong>Morning:</strong> potty → walk (10–20 min) → breakfast →
            calm rest
            <br />
            <strong>Midday:</strong> potty → brief play/enrichment (10–15 min)
            → rest
            <br />
            <strong>Late afternoon:</strong> potty → walk (15–30 min)
            <br />
            <strong>Evening:</strong> dinner → bonding game or light training
            (5–10 min) → chew/puzzle → bedtime potty → sleep
          </p>

          <h3 className="text-xl font-semibold mt-4 mb-2">
            2) New-Dog House Rules (print this)
          </h3>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>We keep the schedule even on weekends.</li>
            <li>One cue = one outcome (no mixed messages).</li>
            <li>Doors/gates close behind us. No free-for-alls.</li>
            <li>We reward good choices we want repeated.</li>
            <li>We manage the environment so the dog can win.</li>
            <li>We end sessions before frustration shows up.</li>
            <li>We ask for help early if we feel stuck.</li>
          </ul>

          <h3 className="text-xl font-semibold mt-4 mb-2">
            3) Scripts for Boundary Moments
          </h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>“Can friends come meet her tonight?”</strong> “Not
              yet—we’re keeping things calm this week so she can decompress.”
            </li>
            <li>
              <strong>“Can I bring my dog over to say hi?”</strong> “We’re
              waiting three weeks for intros and doing them slowly on neutral
              ground.”
            </li>
            <li>
              <strong>“He keeps chewing my shoes.”</strong> “Let’s gate the
              hallway and rotate chews; I’ll set up his crate with a stuffed
              Kong when we’re busy.”
            </li>
          </ul>
        </section>

        {/* GLOBAL NOTES */}
        <section id="global" className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">
            Part 17 — Global Adoption Notes (U.S., Canada, U.K., Ireland,
            Australia, New Zealand)
          </h2>
          <ul className="list-disc pl-5 space-y-3">
            <li>
              <strong>United States:</strong> High intake and adoption numbers;
              behavior is a common surrender reason. Many shelters require or
              encourage microchipping and basic vaccines at intake; adopters
              should confirm booster timelines with their vets (ASPCA; AVMA).
            </li>
            <li>
              <strong>Canada:</strong> Similar patterns with municipal bylaws
              for licensing/microchipping; alone-time issues spiked after
              pandemic routine shifts.
            </li>
            <li>
              <strong>United Kingdom & Ireland:</strong> Microchipping standard
              or required; Dogs Trust, Blue Cross, and RSPCA publish excellent
              adopter guides. Third-party liability insurance is common.
            </li>
            <li>
              <strong>Australia:</strong> State rules vary; microchipping and
              registration widespread; RSPCA Australia provides adoption and
              care standards.
            </li>
            <li>
              <strong>New Zealand:</strong> Registration and microchipping
              required for most dogs; SPCA NZ publishes adopter resources.
            </li>
          </ul>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">
            Part 18 — Frequently Asked (But Stress-Saving) Questions
          </h2>
          <p className="mb-4">
            <strong>How soon should I start any training at all?</strong>
            <br />
            Right away—but keep it light and confidence-building. Reinforce the
            basics (name response, following you, calmly settling on a mat). I
            wait for formal intensity until 9–12 months.
          </p>
          <p className="mb-4">
            <strong>Is it okay to crate a newly adopted dog?</strong>
            <br />
            Yes—introduced gently and paired with good things (chews, food
            puzzles, naps). Crates are tools for management and safety, not
            punishment.
          </p>
          <p className="mb-4">
            <strong>What if my dog won’t eat?</strong>
            <br />
            Mild appetite dips happen during decompression. Warm food slightly,
            add a spoon of wet, or hand-feed a few pieces to kickstart interest.
            If appetite stays low &gt;24–36 hours or your dog seems unwell,
            call your vet.
          </p>
          <p className="mb-4">
            <strong>When can I go to the dog park?</strong>
            <br />
            Not in the decompression window. Wait until your dog is responsive
            to you, fully vaccinated, and enjoys neutral, low-pressure dog
            interactions.
          </p>
          <p className="mb-4">
            <strong>
              How do I know if a behavior is “normal settling” vs. a red flag?
            </strong>
            <br />
            If it’s escalating, risking safety, or not improving week-over-week,
            get help. Sooner is kinder.
          </p>
        </section>

        {/* WRAP */}
        <section id="wrap" className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">Conclusion</h2>
          <p className="mb-4">
            Helping a newly adopted dog settle in is less about “fixing
            behavior” and more about <strong>engineering good outcomes</strong>:
            the right environment, the right routine, the right early
            experiences, and the right expectations. Do that, and you’ll see
            the dog relax into the life you’re offering—without forcing it and
            without rushing.
          </p>
          <p>
            The biggest win isn’t just a calm, confident dog. It’s the bond you
            build by showing up the same way every day—dependable, clear, kind.
            That bond is the foundation for everything you’ll do together for
            the rest of their life.
          </p>
        </section>

        {/* SOURCES */}
        <section id="sources" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">📚 Sources (APA)</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            <li>
              American Humane Association. (2020). <em>Keeping pets: Factors
              associated with pet retention and relinquishment</em>.
              Washington, DC: Author.
            </li>
            <li>
              American Veterinary Medical Association. (2023).{' '}
              <em>Bringing a new dog home</em>.{' '}
              https://www.avma.org/resources/pet-owners/petcare/bringing-new-dog-home
            </li>
            <li>
              American Veterinary Society of Animal Behavior. (2019).{' '}
              <em>AVSAB position statement: Humane dog training</em>.{' '}
              https://avsab.org
            </li>
            <li>
              ASPCA. (2024). <em>Pet statistics</em>. American Society for the
              Prevention of Cruelty to Animals.{' '}
              https://www.aspca.org/helping-people-pets/shelter-intake-and-surrender/pet-statistics
            </li>
            <li>
              Beerda, B., Schilder, M. B. H., van Hooff, J. A. R. A. M., de
              Vries, H. W., & Mol, J. A. (1998). Chronic stress in dogs
              subjected to social and environmental isolation.{' '}
              <em>Physiology & Behavior, 66</em>(2), 233–242.
            </li>
            <li>
              Blue Cross. (2022). <em>Introducing dogs and cats</em>.{' '}
              https://www.bluecross.org.uk
            </li>
            <li>
              Dogs Trust. (2023). <em>Adopting a dog: Advice & introductions</em>.{' '}
              https://www.dogstrust.org.uk
            </li>
            <li>
              Hennessy, M. B., Davis, H. N., Williams, M. T., Mellott, C., & Douglas,
              C. W. (2001). Plasma cortisol levels of dogs at a county animal
              shelter. <em>Physiology & Behavior, 73</em>(1–2), 75–81.{' '}
              https://doi.org/10.1016/S0031-9384(01)00469-8
            </li>
            <li>
              Overall, K. L. (2013). <em>Manual of Clinical Behavioral Medicine
              for Dogs and Cats</em>. St. Louis, MO: Elsevier.
            </li>
            <li>
              RSPCA. (2022). <em>Settling your new dog</em>.{' '}
              https://www.rspca.org.uk/adviceandwelfare/pets/dogs/environment/settle
            </li>
            <li>
              RSPCA Australia. (2023). <em>Annual report</em> (adoption &
              surrender trends). https://www.rspca.org.au
            </li>
            <li>
              WSAVA Vaccination Guidelines Group. (2015/2020 updates).{' '}
              <em>WSAVA guidelines for the vaccination of dogs and cats</em>.{' '}
              https://wsava.org
            </li>
            <li>
              AAHA Canine Vaccination Task Force. (2022).{' '}
              <em>AAHA canine vaccination guidelines</em>. https://www.aaha.org
            </li>
            <li>
              SPCA New Zealand. (2023). <em>Caring for your adopted dog</em>.{' '}
              https://www.spca.nz
            </li>
            <li>
              Canadian Veterinary Medical Association. (2023).{' '}
              <em>Pet adoption and responsible ownership</em>.{' '}
              https://www.canadianveterinarians.net
            </li>
          </ul>
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
