'use client';

import Head from 'next/head';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function HowToPottyTrainAPuppy() {
  const locale = useLocale();

  const title = 'How to Potty Train a Puppy: The Calm, Science-Backed Guide to Faster Results';
  const date = 'August 28, 2025';
  const categories = ['owner', 'daycare', 'boarding', 'training'] as const;

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
    training: 'Training',
  };

  const description =
    'A complete housetraining playbook for new puppy families: setup, schedules by age, crate and playpen routines, reward timing, accident cleanup, apartment strategies, bad weather plans, medical watch-outs, regression fixes, and copy-paste checklists. Calm, consistent, and kinder for everyone.';

  return (
    <>
      <Head>
        <title>{title} – Petunia Blog</title>
        <meta name="description" content={description} />
        <meta name="robots" content="all" />
        <link
          rel="canonical"
          href={`https://www.petuniapets.com/${locale}/blog/how-to-potty-train-a-puppy`}
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
            <li><a href="#why" className="underline hover:opacity-80">Why Housetraining Matters</a></li>
            <li><a href="#supplies" className="underline hover:opacity-80">Supplies & Setup</a></li>
            <li><a href="#layout" className="underline hover:opacity-80">Home Layout & Management</a></li>
            <li><a href="#science" className="underline hover:opacity-80">How Housetraining Works</a></li>
            <li><a href="#schedules" className="underline hover:opacity-80">Schedules by Age</a></li>
            <li><a href="#crate" className="underline hover:opacity-80">Crate & Playpen</a></li>
            <li><a href="#potty-spot" className="underline hover:opacity-80">Potty Spot Strategy</a></li>
            <li><a href="#signals" className="underline hover:opacity-80">Reading Puppy Signals</a></li>
            <li><a href="#rewards" className="underline hover:opacity-80">Reward Timing</a></li>
            <li><a href="#night" className="underline hover:opacity-80">Night Routine</a></li>
            <li><a href="#accidents" className="underline hover:opacity-80">If Accidents Happen</a></li>
            <li><a href="#regression" className="underline hover:opacity-80">Regressions & Growth Spurts</a></li>
            <li><a href="#special" className="underline hover:opacity-80">Apartments, Weather, Workdays</a></li>
            <li><a href="#health" className="underline hover:opacity-80">Medical Watch-Outs</a></li>
            <li><a href="#troubleshooting" className="underline hover:opacity-80">Troubleshooting Scenarios</a></li>
            <li><a href="#daycare" className="underline hover:opacity-80">Daycare & Boarding Coordination</a></li>
            <li><a href="#templates" className="underline hover:opacity-80">Checklists & Templates</a></li>
            <li><a href="#faq" className="underline hover:opacity-80">FAQ</a></li>
            <li><a href="#sources" className="underline hover:opacity-80">📚 Sources (Selected)</a></li>
          </ul>
        </nav>

        {/* TL;DR */}
        <section id="tldr" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Short Answer (TL;DR)</h2>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm mb-4">
            <p className="mb-2">
              Potty training is a <strong>management problem first</strong> and a <strong>learning problem second</strong>. Limit unsupervised freedom, give frequent outdoor trips tied to natural rhythms (after sleep, after eating, after play), and <strong>reward at the exact moment your puppy finishes outside</strong>. Crates and playpens are tools for naps and safety, not punishment. Use an <strong>enzymatic cleaner</strong> for any indoor accident and move on. Progress is measured in weeks, not hours; consistency wins.
            </p>
            <p className="mb-0">
              Call your veterinarian if you see <em>painful urination, blood, constant dribbling, persistent diarrhea,</em> or if house training suddenly unravels after previously stable success.
            </p>
          </div>
        </section>

        {/* WHY */}
        <section id="why" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Why Housetraining Matters (Beyond a Clean Floor)</h2>
          <p className="mb-3">
            Housetraining is one of the first shared projects your family and puppy complete together. It shapes daily rhythms, builds trust, and teaches your puppy that human cues are worth following. When families get this right, they reduce stress, safeguard the home, and make every later skill easier because the puppy already understands how to earn rewards in a human world. When families struggle, frustration rises, accidents multiply, and a puppy may become confused or anxious. The good news: the solution is not complicated; it is <strong>structured consistency</strong>.
          </p>
          <p className="mb-3">
            Puppies are born with no understanding of indoor vs. outdoor toilets. They learn by <strong>where relief works</strong> and <strong>what gets rewarded</strong>. By creating an environment that makes the right choice easy and the wrong choice improbable, you turn biology into a predictable routine. Housetraining is not a moral test of your puppy&rsquo;s goodness. It is logistics, timing, and practice.
          </p>
        </section>

        {/* SUPPLIES */}
        <section id="supplies" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Supplies &amp; Setup: What You Really Need</h2>
          <p className="mb-3">
            You do not need a gadget wall. You need a handful of well-chosen tools sized for your puppy and home. Think &ldquo;reduce mistakes, increase good reps, and capture success right now.&rdquo;
          </p>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>Crate with divider:</strong> right-sized for naps and overnight sleep. Large enough to stand up, turn around, and lie down; not so large that a corner becomes a toilet.</li>
            <li><strong>Exercise pen or baby gates:</strong> a play zone for supervised awake time when you cannot have eyes on every second.</li>
            <li><strong>Leash &amp; flat harness:</strong> a light leash and comfortable harness help guide to the potty spot and minimize zoomies that delay relief.</li>
            <li><strong>Cleanup:</strong> enzymatic cleaner for accidents; paper towels; a small caddy near typical spots to make cleanup instant.</li>
            <li><strong>Treats:</strong> pea-sized, soft, high-value rewards kept in a sealed jar near the potty door to avoid frantic kitchen trips at the decisive moment.</li>
            <li><strong>Weather kit:</strong> umbrella by the door, non-slip shoes, a small flashlight for night trips, and an outdoor mat to reduce tracking in.</li>
            <li><strong>Logbook:</strong> a simple note on your phone or a sheet on the fridge that tracks <em>time, pee/poop, meal, nap</em>. Patterns emerge quickly.</li>
          </ul>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Petunia tip:</strong> Log potty events, meals, and naps in Petunia. Set reminders for expected windows (after wake-ups, after meals), and share the routine with family or your sitter so everyone acts in sync.
          </div>
        </section>

        {/* LAYOUT */}
        <section id="layout" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Home Layout &amp; Management: Make Success Easy</h2>
          <p className="mb-3">
            Housetraining improves fastest when your home makes the right choice obvious. Give your puppy three states only: <em>outside on mission</em>, <em>supervised in a small space</em>, or <em>resting in crate</em>. Unrestricted roaming is for later.
          </p>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>Crate near family life:</strong> puppies sleep better when they can hear you. A covered wire crate can reduce visual stimuli while preserving airflow.</li>
            <li><strong>Playpen adjacency:</strong> attach the pen to the crate or keep it in the same room. Put durable toys inside to encourage calm exploration.</li>
            <li><strong>Potty path:</strong> stage leash, treats, and poop bags at the door. Reduce seconds between door opening and first sniff at the potty spot.</li>
            <li><strong>Flooring:</strong> use non-slip mats in the pen to support hips and knees. Roll up expensive rugs until training stabilizes.</li>
          </ul>
          <p>
            The more you control doors, distance, and distractions, the more your puppy discovers that going outside quickly produces comfort and a tasty paycheck.
          </p>
        </section>

        {/* SCIENCE */}
        <section id="science" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">How Housetraining Works (The Science You Can Use)</h2>
          <p className="mb-3">
            Behavior analysts would describe housetraining as shaping a <strong>cue-driven elimination routine</strong> in a specific location, maintained by reinforcement. Translation: you arrange for your puppy to feel the urge outside, attach a cue like &ldquo;go potty,&rdquo; reward completion, and repeat often until the chain becomes habit.
          </p>
          <h3 className="text-lg font-semibold mt-2 mb-1">Four Levers You Control</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>Biology:</strong> when bladders fill (after sleep, after water, after play, after meals). You schedule trips around these moments.</li>
            <li><strong>Access:</strong> limit indoor wandering so a small urge cannot become a silent accident behind the sofa.</li>
            <li><strong>Location:</strong> bring your puppy to the same place. Familiar scent helps trigger elimination quickly.</li>
            <li><strong>Paycheck:</strong> deliver a small jackpot <em>as the puppy finishes</em>, not five steps later inside the kitchen.</li>
          </ul>
          <p className="mb-3">
            Over time, the outdoor context and your calm cue predict relief and reward. That prediction becomes its own motivator. Your puppy begins holding a little longer indoors to go out where good things happen.
          </p>
        </section>

        {/* SCHEDULES */}
        <section id="schedules" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Schedules by Age: Reasonable Expectations</h2>
          <p className="mb-3">
            Every puppy is an individual, but growth biology gives us useful starting points. Tiny bladders cannot hold for adult timeframes. Err on the side of <strong>more frequent trips</strong> while you build the habit, then stretch gently.
          </p>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm mb-4">
            <strong>Rule of thumb:</strong> many puppies can hold roughly their age in months <em>plus one</em> hours during the day under calm conditions (e.g., 2-month puppy ≈ 3 hours). Overnight can be a bit longer due to lower activity. Do not apply this aggressively; it is a ceiling, not a target.
          </div>

          <h3 className="text-lg font-semibold mt-2 mb-1">8–10 Weeks</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Outside: every 60–90 minutes, plus after waking, after meals, after play.</li>
            <li>Meals: 3–4 small meals per day; brief water break after play.</li>
            <li>Crate: many short naps; crate near your bed at night for quicker potty trips.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">10–12 Weeks</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Outside: every 90–120 minutes, plus routine triggers.</li>
            <li>Introduce a simple door cue (tapping a bell or sitting by the mat) after you have a week of successful trips.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">12–16 Weeks</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Outside: every 2–3 hours; start testing slightly longer intervals when you have a streak of dry days.</li>
            <li>Crate naps continue; playpen time expands with closely supervised freedom bursts after successful potty trips.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">4–6 Months</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Outside: every 3–4 hours, based on your puppy&rsquo;s pattern. Water management helps (free access, but guided timing before bed).</li>
            <li>Many families see daytime consistency and rare accidents. Expect an occasional miss during growth spurts or exciting changes.</li>
          </ul>
        </section>

        {/* CRATE & PLAYPEN */}
        <section id="crate" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Crate &amp; Playpen: Tools for Rest and Success</h2>
          <p className="mb-3">
            A crate is a bedroom, not a jail. It gives your puppy a predictable sleep space and gives you a safe way to prevent wandering when you cannot supervise. A playpen expands that space for awake time with a couple of toys and a chew.
          </p>
          <h3 className="text-lg font-semibold mt-2 mb-1">Crate Comfort Steps</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Feed one meal per day in the crate with the door open. Pair it with a calm phrase like &ldquo;bedtime.&rdquo;</li>
            <li>Close the door during the last few bites, then open as the bowl finishes. Build to short naps.</li>
            <li>At night, set alarms for expected wake times the first week. You are teaching an overnight pattern, not testing endurance.</li>
          </ul>
          <p>
            Puppies who learn that the crate predicts calm rest and relief afterward settle faster and have fewer accidents. If your puppy cries, check physical needs first, then give a brief, quiet potty break and reset without play.
          </p>
        </section>

        {/* POTTY SPOT */}
        <section id="potty-spot" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Potty Spot Strategy: Yard, Leash, Pads, or Balcony?</h2>
          <p className="mb-3">
            Choose a primary plan that fits your living space and future. If you want an outdoor dog, teach outdoor from the start. Pads can be a temporary bridge for high-rise living or extreme weather, but they add a step to unlearn later. You can have a hybrid plan if you are disciplined about cues and context.
          </p>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>Yard/leash:</strong> go to the same patch. Stand still, be boring, cue softly, and wait. Praise the instant your puppy finishes.</li>
            <li><strong>Pads:</strong> place them in a fixed corner away from bedding and food. Reward on-pad success; gradually move pads toward the door, then outside, and finally phase out.</li>
            <li><strong>Balcony/artificial turf:</strong> ensure drainage, hygiene, and safety barriers. Clean frequently with pet-safe products.</li>
          </ul>
        </section>

        {/* SIGNALS */}
        <section id="signals" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Reading Puppy Signals (Catch the Whisper)</h2>
          <p className="mb-3">
            Many puppies broadcast subtle pre-potty signals before an accident. When you see one, pivot to the door calmly and quickly.
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Sudden disengagement from play, then slow circling or sniffing a corner.</li>
            <li>Bee-line to a previous accident spot.</li>
            <li>Wiggly restlessness right after drinking water, or a short whine mid-play.</li>
            <li>Drifting away from humans toward soft surfaces (rugs, piles of laundry).</li>
          </ul>
        </section>

        {/* REWARDS */}
        <section id="rewards" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Reward Timing: The Two-Second Window</h2>
          <p className="mb-3">
            Reinforcement works best when delivered <strong>immediately</strong>. Bring treats outside and pay the moment your puppy finishes. If you pay several steps later inside, you are rewarding coming back to the kitchen, not elimination outdoors. Keep a jar by the door so you never fumble for it.
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Use tiny treats; the repetition matters more than the size.</li>
            <li>Layer praise on top of food. Calm, low-key, not a pep rally.</li>
            <li>After the reward, give a few minutes of sniffy exploration as a bonus when time allows. Moving from &ldquo;mission&rdquo; to &ldquo;free time&rdquo; teaches patience.</li>
          </ul>
        </section>

        {/* NIGHT */}
        <section id="night" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Night Routine: From Wake-Ups to Sleeping Through</h2>
          <p className="mb-3">
            Night wakings are normal. Reduce drama and you reduce duration. Keep lights low, voices quiet, and trips surgical: out, relief, praise, back to bed. Many families see the first full night around 12–16 weeks; some take a bit longer.
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Last water about an hour before bed unless your veterinarian says otherwise.</li>
            <li>Last potty trip right before lights out; use the same path and cue.</li>
            <li>Crate near the bed for the first week. Respond to a true wake-up with a quick trip; ignore a brief settling grumble.</li>
          </ul>
        </section>

        {/* ACCIDENTS */}
        <section id="accidents" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">If Accidents Happen (They Will): Fix and Move On</h2>
          <p className="mb-3">
            Accidents do not mean failure; they mean the schedule or supervision window did not match biology. Avoid scolding, nose rubbing, or punishment. These backfire by teaching your puppy to hide. Instead, adjust the plan and capture more outdoor successes.
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Blot, then saturate the area with an enzymatic cleaner to break down odor compounds. Ordinary cleaners leave scent maps that invite repeats.</li>
            <li>Identify the miss: was it <em>right after drinking</em>, <em>during wild play</em>, or <em>ten minutes after coming inside</em>? Add a scheduled trip at that time tomorrow.</li>
            <li>If your puppy starts to squat, interrupt gently with a neutral &ldquo;outside&rdquo; and guide to the door. Reward anything finished outdoors.</li>
          </ul>
        </section>

        {/* REGRESSION */}
        <section id="regression" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Regressions &amp; Growth Spurts</h2>
          <p className="mb-3">
            Expect minor setbacks during teething, big schedule changes, or exciting new environments. The fix is always the same: tighten management, increase trips for 3–5 days, and rebuild the streak. Puppies who once knew what to do still know; they just need the pattern re-installed.
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Travel week? Use the crate more and shrink freedom zones.</li>
            <li>New carpet? Lead your puppy on leash for the first few days so that scent novelty does not invite testing.</li>
            <li>Visitors? Do potty first, greet second. Excitement accelerates biology.</li>
          </ul>
        </section>

        {/* SPECIAL CASES */}
        <section id="special" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Apartments, Weather, and Workday Realities</h2>
          <h3 className="text-lg font-semibold mt-2 mb-1">Apartments &amp; Elevators</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Carry tiny puppies to the outdoor spot to reduce mid-hall accidents. For larger breeds, brisk but calm leash guidance helps.</li>
            <li>Keep a pad or turf square on the balcony <em>only as a bridge</em>. Wean it methodically once outdoor trips are reliable.</li>
            <li>Stash a small treat jar near the exit. Elevators can add precious minutes; be ready the instant you hit grass.</li>
          </ul>
          <h3 className="text-lg font-semibold mt-2 mb-1">Bad Weather</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Rain jackets and a big umbrella for you make you more consistent. Consistency is the real tool.</li>
            <li>Create a &ldquo;rain corner&rdquo; with a wind break. Many puppies prefer the same spot that drains well.</li>
            <li>Reward heavily in storms; bravery deserves a bonus.</li>
          </ul>
          <h3 className="text-lg font-semibold mt-2 mb-1">Workdays &amp; Alone Time</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Use midday help the first months: a neighbor, sitter, or vetted walker who follows your routine.</li>
            <li>Leave in a calm state after a potty trip. Do not make departures theatrical.</li>
            <li>On return, go straight out for a cheerful relief trip before hellos on the couch.</li>
          </ul>
        </section>

        {/* HEALTH */}
        <section id="health" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Medical Watch-Outs (When to Call Your Veterinarian)</h2>
          <p className="mb-3">
            Most housetraining challenges are schedule and management. Some are medical. If progress stalls despite a clean plan, rule out health issues.
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Urinary tract irritation:</strong> frequent small pees, straining, licking, or discomfort.</li>
            <li><strong>Parasites or gastrointestinal upset:</strong> diarrhea, mucus, blood, or sudden changes that persist more than a day.</li>
            <li><strong>Congenital issues:</strong> very rare, but your veterinarian will consider them if signs point that way.</li>
            <li><strong>Medication side effects:</strong> some drugs increase thirst or urgency; ask your veterinarian what to expect.</li>
          </ul>
        </section>

        {/* TROUBLESHOOTING */}
        <section id="troubleshooting" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Troubleshooting Scenarios (Fast Fixes)</h2>
          <h3 className="text-lg font-semibold mt-2 mb-1">1) Always Peeing Right After Coming Back Inside</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Make outdoor trips more boring: stand still, reduce play until after the deed. Your puppy may be holding in order to keep playing.</li>
            <li>Extend the outdoor window by a couple of minutes, especially after rain or wind where sniffing takes longer.</li>
            <li>Try a quiet corner with fewer distractions and a consistent scent history.</li>
          </ul>
          <h3 className="text-lg font-semibold mt-2 mb-1">2) Hiding to Eliminate</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Roll back freedom. Use leash indoors for twenty-minute bursts after meals and naps.</li>
            <li>Reward outdoor completion with an extra two minutes of sniffy free time to build value.</li>
          </ul>
          <h3 className="text-lg font-semibold mt-2 mb-1">3) Pads Become Shredded Toys</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Switch to a tray-style holder or to washable fabric pads that are less fun to tear.</li>
            <li>Meet chewing needs separately with scheduled chew sessions so pads carry one meaning only.</li>
          </ul>
          <h3 className="text-lg font-semibold mt-2 mb-1">4) Night Wakings Every Hour</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Audit evening water and last meal timing. Many puppies do best with last meal two to three hours before bed, last water an hour before.</li>
            <li>Place the crate near your bed for faster, lower-drama trips and quicker resettling.</li>
            <li>If diarrhea or discomfort appears, call your veterinarian.</li>
          </ul>
          <h3 className="text-lg font-semibold mt-2 mb-1">5) Multi-Dog Household</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Give the puppy a solo potty trip first. Other dogs can distract or even intimidate.</li>
            <li>Reward both dogs separately for calm waits and clean completion outdoors.</li>
          </ul>
          <h3 className="text-lg font-semibold mt-2 mb-1">6) Big Weather Swings</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Create a sheltered corner. Practice dry-runs in mild drizzle with a big payout, so storms feel familiar later.</li>
            <li>Use a balcony turf as a backup only if necessary and wean as soon as outdoor trips are steady again.</li>
          </ul>
          <h3 className="text-lg font-semibold mt-2 mb-1">7) Family Members Inconsistent</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Post the schedule on the fridge and in your Petunia routine. Every helper follows the same steps and cue words.</li>
            <li>Put treat jars at every door you use. Logistics create consistency.</li>
          </ul>
        </section>

        {/* DAYCARE & BOARDING */}
        <section id="daycare" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Daycare, Sitters &amp; Boarding: Keep the Plan Consistent</h2>
          <p className="mb-3">
            Puppies do best when your extended care team mirrors your routine. Share your schedule, cues, and reward timing. Ask providers to log events so you can adjust at home.
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Provide your Petunia profile with potty cadence, door cue, and reward rules.</li>
            <li>Request outdoor trips after naps, after meals, and after play blocks; ask for a quick note if stool changes appear.</li>
            <li>Confirm climate controls in heat and cold, and ask for quiet decompression breaks between play.</li>
          </ul>
        </section>

        {/* TEMPLATES */}
        <section id="templates" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Checklists &amp; Templates (Copy/Paste)</h2>

          <h3 className="text-lg font-semibold mt-2 mb-1">Daily Housetraining Rhythm</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>Wake-up:</strong> straight outside → reward → brief free sniff → breakfast → calm play → nap.</li>
            <li><strong>Mid-morning:</strong> outside after nap → reward → crate chew for 15 minutes while you work.</li>
            <li><strong>Mid-day:</strong> outside → lunch → short walk on harness → nap.</li>
            <li><strong>Afternoon:</strong> outside → playpen time with two toys → training mini-session → nap.</li>
            <li><strong>Evening:</strong> outside → dinner → family time with supervised freedom after a successful trip.</li>
            <li><strong>Bedtime:</strong> outside → lights down → crate near bed for the first weeks.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Accident Response Card</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Blot → enzymatic cleaner → block off until fully dry.</li>
            <li>Add a scheduled outdoor trip at the same time tomorrow.</li>
            <li>Review supervision windows; shrink freedom by one notch for 48–72 hours.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Weaning Pads Plan (If You Used Them)</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Move the pad closer to the door over three to five days.</li>
            <li>Place a second pad just outside. Reward outdoors twice as much as indoors.</li>
            <li>Remove the indoor pad once outdoor successes dominate. Keep rewarding outdoors for another two weeks.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Apartment Quick-Start</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Carry to grass when tiny; treat jar at the door; boring human outside until deed is done.</li>
            <li>Practice elevator calm: cue sit before doors open; step out and head straight to the spot.</li>
          </ul>

          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm mt-3">
            <strong>Petunia workflow:</strong> Save your rhythm as a routine with notifications for after-meal and after-nap windows. Attach a stool quality log and weight entries, then share with your veterinarian during wellness visits.
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">Frequently Asked Questions</h2>

          <p className="mb-3">
            <strong>How long does it take to potty train a puppy?</strong><br />
            Most families see steady progress within a few weeks and near-reliability by four to six months, with minor setbacks during growth spurts or schedule changes. Breed, size, and individual differences matter.
          </p>

          <p className="mb-3">
            <strong>Should I use a bell on the door?</strong><br />
            Bells can be helpful once your puppy already understands that outside is for relief. Teach it after a week of consistent outdoor success. Pair the bell with the trip and reward the outdoor completion, not the bell itself.
          </p>

          <p className="mb-3">
            <strong>Is it ever okay to scold for accidents?</strong><br />
            No. Scolding teaches hiding and anxiety. Fix the schedule and supervision; pay outdoor success. That approach trains faster and preserves trust.
          </p>

          <p className="mb-3">
            <strong>How late should my puppy eat or drink before bed?</strong><br />
            Many puppies do best with the last meal two to three hours before bed and last water about an hour before, unless your veterinarian advises differently. Always allow water after play and in heat.
          </p>

          <p>
            <strong>What if my puppy seems fearful outdoors?</strong><br />
            Start with a quiet corner, reduce noise, and add extra rewards for stepping onto grass. Use short, frequent trips and a patient tone. Confidence grows with repetition.
          </p>
        </section>

        {/* SOURCES */}
        <section id="sources" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">📚 Sources (Selected)</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            <li>
              American Veterinary Medical Association (AVMA). <em>Your New Puppy</em> (wellness, housetraining basics).{' '}
              <a href="https://www.avma.org/resources/pet-owners/petcare/your-new-puppy" target="_blank" rel="noopener noreferrer">
                https://www.avma.org/resources/pet-owners/petcare/your-new-puppy
              </a>
            </li>
            <li>
              American Animal Hospital Association (AAHA). <em>Canine Life Stage Guidelines</em> (routine care that intersects with housetraining).{' '}
              <a href="https://www.aaha.org/education/guidelines/" target="_blank" rel="noopener noreferrer">
                https://www.aaha.org/education/guidelines/
              </a>
            </li>
            <li>
              Merck Veterinary Manual (Consumer &amp; Professional). <em>House-Training, Gastrointestinal Issues, Urinary Disorders</em>.{' '}
              <a href="https://www.merckvetmanual.com" target="_blank" rel="noopener noreferrer">
                https://www.merckvetmanual.com
              </a>
            </li>
            <li>
              WSAVA Global Nutrition Guidelines (meal timing and body condition fundamentals).{' '}
              <a href="https://wsava.org/global-guidelines/" target="_blank" rel="noopener noreferrer">
                https://wsava.org/global-guidelines/
              </a>
            </li>
            <li>
              International Association of Animal Behavior Consultants (IAABC) &amp; APDT resources on positive reinforcement training.{' '}
              <a href="https://m.iaabc.org/resources/" target="_blank" rel="noopener noreferrer">
                https://m.iaabc.org/resources/
              </a>{' '}
              |{' '}
              <a href="https://apdt.com/resource-center/" target="_blank" rel="noopener noreferrer">
                https://apdt.com/resource-center/
              </a>
            </li>
          </ul>
          <p className="text-xs text-gray-600 mt-4">
            Educational content only. Always consult your veterinarian for diagnosis and individualized care.
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
