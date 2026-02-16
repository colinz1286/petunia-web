'use client';

import Head from 'next/head';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function LabradorRetrieverPuppyTrainingCompleteGuide() {
  const locale = useLocale();

  const title =
    'Labrador Retriever Puppy Training: The Complete Guide from 8 Weeks to 18 Months';
  const date = 'April 24, 2025';
  const categories = ['owner', 'breed_specific_guides'];

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
    'A step-by-step, age-staged training plan for Labrador Retriever puppies—house training, crate work, socialization, bite inhibition, leash skills, recall, impulse control, enrichment, and problem prevention—with professional sources.';

  return (
    <>
      <Head>
        <title>{title} – Petunia Blog</title>
        <meta name="description" content={description} />
        <meta name="robots" content="index,follow" />
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
            <li><a href="#intro" className="underline hover:opacity-80">Overview</a></li>
            <li><a href="#breed-traits" className="underline hover:opacity-80">Breed Traits</a></li>
            <li><a href="#training-philosophy" className="underline hover:opacity-80">Training Philosophy</a></li>
            <li><a href="#gear" className="underline hover:opacity-80">Starter Gear</a></li>
            <li><a href="#house-crate" className="underline hover:opacity-80">House & Crate</a></li>
            <li><a href="#bite-inhibition" className="underline hover:opacity-80">Bite Inhibition</a></li>
            <li><a href="#socialization" className="underline hover:opacity-80">Socialization</a></li>
            <li><a href="#obedience" className="underline hover:opacity-80">Core Obedience</a></li>
            <li><a href="#leash" className="underline hover:opacity-80">Leash Skills</a></li>
            <li><a href="#recall" className="underline hover:opacity-80">Recall</a></li>
            <li><a href="#impulse" className="underline hover:opacity-80">Impulse Control</a></li>
            <li><a href="#enrichment" className="underline hover:opacity-80">Enrichment</a></li>
            <li><a href="#exercise" className="underline hover:opacity-80">Exercise & Growth</a></li>
            <li><a href="#health" className="underline hover:opacity-80">Health & Vet</a></li>
            <li><a href="#nutrition" className="underline hover:opacity-80">Nutrition</a></li>
            <li><a href="#sleep" className="underline hover:opacity-80">Sleep & Routine</a></li>
            <li><a href="#age-plans" className="underline hover:opacity-80">Age-Staged Plans</a></li>
            <li><a href="#common-issues" className="underline hover:opacity-80">Common Issues</a></li>
            <li><a href="#checklists" className="underline hover:opacity-80">Checklists</a></li>
            <li><a href="#faq" className="underline hover:opacity-80">FAQ</a></li>
            <li><a href="#sources" className="underline hover:opacity-80">Sources</a></li>
          </ul>
        </nav>

        {/* INTRO */}
        <section id="intro" className="mb-10">
          <p className="mb-4">
            Labrador Retriever puppies are joyful, social, and famously eager to learn—yet they can be mouthy, energetic, and
            distractible. The difference between a polite, confident adult Lab and a whirlwind comes down to early structure,
            thoughtful socialization, and bite-sized training built into daily life. This guide gives you a complete plan from
            eight weeks through eighteen months: house training, crate work, bite inhibition, social skills, calm leash walking,
            a bombproof recall, rock-solid impulse control, enrichment, age-appropriate exercise, and vet-supported health habits.
          </p>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm text-gray-700">
            <strong>Quick win:</strong> Schedule everything—meals, potty breaks, naps, training micro-sessions, and play.
            Predictability is the fastest path to calm, confident behavior in Lab puppies.
          </div>
        </section>

        {/* BREED TRAITS */}
        <section id="breed-traits" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">1) Breed Traits That Shape Training</h2>
          <ul className="list-disc pl-5 space-y-2 mb-3">
            <li><strong>Retrieving drive & mouthiness:</strong> Labs love to carry and chew. Provide legal chew outlets and teach “take it,” “drop,” and “trade.”</li>
            <li><strong>Social optimism:</strong> Many Lab puppies assume all dogs/people are friends. We harness that with structured greetings and consent-based play.</li>
            <li><strong>Food motivation:</strong> A superpower for training; balance with measured meals and appropriate treats.</li>
            <li><strong>Work capacity:</strong> Labs can do many reps; keep sessions short to protect joints and prevent mental fatigue.</li>
            <li><strong>Adolescence surge (6–14 mo):</strong> Expect selective hearing and boundary testing; consistency wins.</li>
          </ul>
          <p>
            Recognizing these tendencies up front lets you design a plan that channels energy into skills instead of problems.
          </p>
        </section>

        {/* TRAINING PHILOSOPHY */}
        <section id="training-philosophy" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">2) Training Philosophy: Clarity, Consistency, and Short Reps</h2>
          <p className="mb-3">
            Great training is about clarity and consistency. We reward desired choices at high frequency, prevent rehearsals of
            unwanted behavior via management (gates, leashes, crates), and give brief, fair interruptions to redirect the pup
            when needed. Sessions are <strong>2–5 minutes</strong>, several times a day, embedded in real life: before meals,
            during leash clips, at doorways, and between play bursts. End on a win, then let the puppy rest.
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Marker words:</strong> “Yes” (reward now), “Good” (keep going), and a release word (“Free”).</li>
            <li><strong>One cue, one outcome:</strong> If you say “sit,” ensure a sit happens; don’t repeat cues.</li>
            <li><strong>Progression:</strong> Lure → fade the lure → add a hand signal → add the verbal cue → add distractions → add distance/duration.</li>
          </ul>
        </section>

        {/* STARTER GEAR */}
        <section id="gear" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">3) Starter Gear & Home Setup</h2>
          <ul className="list-disc pl-5 space-y-2 mb-3">
            <li>Crate (appropriate size with divider), playpen or baby gates.</li>
            <li>Flat collar with ID, front-attach harness (for leash training), 6-ft leash, 20–30 ft long line.</li>
            <li>Food puzzles, lick mats, safe chew rotation (rubber, nylon, or vet-approved options).</li>
            <li>Enzymatic cleaner, rewards pouch, tiny training treats (kibble works for many Labs).</li>
          </ul>
          <p>
            Arrange a “puppy zone” with crate/pen, water, and chews; remove tempting hazards (shoes, wiring, trash).
          </p>
        </section>

        {/* HOUSE & CRATE */}
        <section id="house-crate" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">4) House Training & Crate Conditioning</h2>
          <h3 className="text-lg font-semibold mt-2 mb-1">A. House Training</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Out after sleep, meals, play, and every 2–3 hours early on.</li>
            <li>Escort on-leash to a consistent spot; stand still; soft praise as pup starts; reward immediately after.</li>
            <li>Prevent indoor accidents with supervision and confinement; clean misses with enzymatic cleaner.</li>
          </ul>
          <h3 className="text-lg font-semibold mt-2 mb-1">B. Crate Conditioning</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Feed meals in the crate; scatter a few kibbles so entry pays.</li>
            <li>Short sessions first (1–3 minutes door closed), then gradually extend; add a chew for longer stints.</li>
            <li>A calm release earns outside time—avoid releasing while whining to prevent reinforcing it.</li>
          </ul>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm text-gray-700">
            <strong>Pro tip:</strong> Track potty times, meals, and crate intervals for the first 2–3 weeks. Patterns appear fast.
          </div>
        </section>

        {/* BITE INHIBITION */}
        <section id="bite-inhibition" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">5) Mouthiness & Bite Inhibition (8–20 Weeks)</h2>
          <p className="mb-3">
            Labrador puppies explore with their mouths. We want them to learn a “soft mouth” early. Redirect onto appropriate
            chews and toys, and teach “take,” “drop,” and “trade.” If teeth contact skin, calmly disengage for a brief timeout
            (10–30 seconds), then re-engage with a toy. Consistency teaches the pup what works.
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Games that teach control:</strong> Tug with rules (sit → take → tug → drop → sit → take).</li>
            <li><strong>Nip management:</strong> Stop rough play before arousal spikes; rotate to calm mat/lick mat.</li>
          </ul>
        </section>

        {/* SOCIALIZATION */}
        <section id="socialization" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">6) Socialization & Confidence (8–16 Weeks Prime)</h2>
          <p className="mb-3">
            The sensitive socialization window is roughly 3–14(–16) weeks. Safely expose your Lab puppy to novel people, friendly
            dogs, surfaces, sounds, and gentle handling. Focus on <strong>quality over quantity</strong>: the pup should choose to
            investigate and be able to retreat. Pair novel things with food and end sessions early, while the pup is still
            curious—not overwhelmed.
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Puppy class with vaccine control and size-appropriate play rotation.</li>
            <li>Handling reps: ears, paws, mouth, collar grabs, brief restraint—treats appear after.</li>
            <li>Noise & surfaces: doorbells, traffic at a distance, vet scale, grates, stairs—short, happy reps.</li>
          </ul>
        </section>

        {/* CORE OBEDIENCE */}
        <section id="obedience" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">7) Core Obedience: Foundations that Scale</h2>
          <ul className="list-disc pl-5 space-y-2 mb-3">
            <li><strong>Name & check-in:</strong> Say the name once; mark “yes” for head turn; reward. Build reflexive attention.</li>
            <li><strong>Sit, Down, Stand:</strong> Lure first, then fade; add verbal cues; practice at doors and before meals.</li>
            <li><strong>Place/Mat:</strong> Send to a bed or mat; reward calm settles; extend duration gradually.</li>
            <li><strong>Leave it/Take it:</strong> Start with a closed hand; reward disengagement; then progress to floor items.</li>
            <li><strong>Drop/Trade:</strong> Trade toy for food; then for another toy; then for nothing once reliable.</li>
            <li><strong>Stay/Wait:</strong> Teach brief duration first; then add distance; then mild distractions.</li>
          </ul>
          <p>Keep sessions short (2–3 minutes), vary locations, and mix easy wins with a single slightly harder rep.</p>
        </section>

        {/* LEASH */}
        <section id="leash" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">8) Leash Skills: From Wriggly to Polite</h2>
          <p className="mb-3">
            Build loose-leash walking as a reinforced position beside you. In low-distraction spaces, reward the pup for being
            near your hip; take one step and reward again. If the leash tightens, stop and wait for slack or step backward to
            re-engage—then move forward. Add distractions gradually (new scents, people, dogs) and use a front-attach harness
            for better control without pressure on the neck.
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>“Follow” games in the house/yard → sidewalk laps → short real walks.</li>
            <li>Reinforce check-ins; pause at curbs; sit to be leashed and unleashed.</li>
          </ul>
        </section>

        {/* RECALL */}
        <section id="recall" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">9) Recall: Make “Come” the Most Valuable Word</h2>
          <p className="mb-3">
            Start indoors. Say “Puppy, <em>come!</em>” in a happy voice; mark the turn with “yes” and reward heavily at your feet.
            Build a habit of sprinting to you. Practice hide-and-seek recalls in the house, then in a fenced yard with a long line,
            then in larger spaces. Pay recalls magnificently and occasionally end with “back to play” so it doesn’t always mean
            the fun ends.
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Two-person recalls across a room/yard; increase distance as focus improves.</li>
            <li>“Emergency recall” word with jackpots; use sparingly so it always pays big.</li>
          </ul>
        </section>

        {/* IMPULSE CONTROL */}
        <section id="impulse" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">10) Impulse Control in Real Life</h2>
          <ul className="list-disc pl-5 space-y-2 mb-3">
            <li><strong>Doorway rules:</strong> Sit → release. Slowly add distraction (family, packages, visitors).</li>
            <li><strong>Food manners:</strong> Bowl goes down when pup sits calmly; lift if jumping resumes; try again.</li>
            <li><strong>Toy arousal:</strong> Interleave tug/fetch with “drop,” “sit,” “take”; stop before the pup is frantic.</li>
            <li><strong>Calm on cue:</strong> Build “settle” on a mat after play; reward chin-down relaxation.</li>
          </ul>
          <p>Impulse control doesn’t mean no fun—it means more choices earn more freedom.</p>
        </section>

        {/* ENRICHMENT */}
        <section id="enrichment" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">11) Enrichment: Burn the Brain, Not Just the Legs</h2>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Sniffaris (let the nose lead within safe limits), scatter-feeding searches, “find it” games.</li>
            <li>Food puzzles, frozen lick mats, cardboard “shred” boxes (supervised), novel but safe textures/scents.</li>
            <li>Short shaping sessions (targeting a mat, going around a cone, chin rest for vet handling).</li>
          </ul>
          <p>Rotate novelty; keep arousal low to medium; end with calm settles.</p>
        </section>

        {/* EXERCISE & GROWTH */}
        <section id="exercise" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">12) Exercise & Growth Plates: Smart, Age-Appropriate Work</h2>
          <p className="mb-3">
            Large-breed puppies like Labs need movement without repetitive high-impact stress. Favor free play on grass, short
            fetch sets (few reps), gentle stairs, and controlled leash walks. Avoid forced running, long jumps, and repetitive
            impacts until growth plates are closing (often around 12–18 months—ask your veterinarian for guidance).
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Use duration and terrain variety over height/impact.</li>
            <li>Watch for fatigue signs: lagging behind, sloppy sits/downs, increased clumsiness—end before this point.</li>
          </ul>
        </section>

        {/* HEALTH */}
        <section id="health" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">13) Health & Veterinary Partnerships</h2>
          <ul className="list-disc pl-5 space-y-2 mb-3">
            <li><strong>Vaccinations:</strong> Follow AAHA/WSAVA schedules for core vaccines; discuss lifestyle risks (Bordetella, CIV, lepto).</li>
            <li><strong>Parasite prevention:</strong> Year-round heartworm, flea, and tick protocols as recommended by your vet.</li>
            <li><strong>Orthopedics:</strong> Track body condition; avoid obesity to protect hips/elbows and future cruciate health.</li>
            <li><strong>EIC awareness:</strong> If your puppy is from field lines or shows post-exercise wobble, ask about DNM1 testing; manage effort and heat accordingly.</li>
            <li><strong>Spay/neuter timing:</strong> Discuss with your vet; for large breeds, timing may affect orthopedic outcomes.</li>
          </ul>
          <p>Share your training goals with your veterinarian; behavior and health are linked.</p>
        </section>

        {/* NUTRITION */}
        <section id="nutrition" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">14) Nutrition for Large-Breed Puppies</h2>
          <p className="mb-3">
            Choose a large-breed puppy formula that controls calcium and energy density to support steady growth. Measure meals,
            adjust to maintain a lean body condition, and use part of the daily ration for training. Avoid rapid diet changes; if
            you switch foods, transition over 7–10 days.
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Use treats strategically; swap some kibble to keep calories in check.</li>
            <li>Fresh water and planned potty breaks after meals support house training.</li>
          </ul>
        </section>

        {/* SLEEP & ROUTINE */}
        <section id="sleep" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">15) Sleep & Routine: The Invisible Superpower</h2>
          <p className="mb-3">
            Puppies need a lot of sleep—often 16–20 hours a day. Over-tired puppies bite, zoom, and whine. Use a rhythm of
            activity → training micro-session → potty → nap. Protect two long naps daily and a quiet bedtime routine.
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>White noise near the crate; cover three sides to reduce visual stimuli.</li>
            <li>Bedtime potty, brief calm snuggle, lights out—same time each night.</li>
          </ul>
        </section>

        {/* AGE-STAGED PLANS */}
        <section id="age-plans" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">16) Age-Staged Training Plans</h2>
          <h3 className="text-lg font-semibold mt-2 mb-1">8–12 Weeks</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>House/crate routines; potty every 2–3 hours; meals on schedule.</li>
            <li>Name, check-ins, sit, down, gentle handling; 2–3 minute sessions.</li>
            <li>Short socialization field trips (carry where needed; keep it positive).</li>
            <li>Bite inhibition focus; tug with rules; trade games daily.</li>
          </ul>
          <h3 className="text-lg font-semibold mt-2 mb-1">12–16 Weeks</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Leash foundations in low-distraction areas; begin “place” and “leave it.”</li>
            <li>Puppy class; calm greetings; practice settles in public spaces.</li>
            <li>Recall games indoors and fenced yards; start long line.</li>
          </ul>
          <h3 className="text-lg font-semibold mt-2 mb-1">4–6 Months</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Add duration to “stay” and “place”; distractions at a distance.</li>
            <li>Loose-leash walks on quiet streets; reward frequent check-ins.</li>
            <li>Recall with mild distractions; emergency word jackpots.</li>
            <li>Enrichment rotation; calm crated naps between play bursts.</li>
          </ul>
          <h3 className="text-lg font-semibold mt-2 mb-1">6–9 Months (Adolescence Begins)</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Expect boundary testing; tighten management and consistency.</li>
            <li>Proof cues in new locations; increase distance/duration thoughtfully.</li>
            <li>More impulse control: doorways, car exits, greeting protocols.</li>
            <li>Introduce low-impact sport foundations (foundations only).</li>
          </ul>
          <h3 className="text-lg font-semibold mt-2 mb-1">9–12 Months</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Leash reliability in busier areas; heel games; polite passes of dogs/people.</li>
            <li>Long-line recalls at parks; random jackpot returns to keep motivation high.</li>
            <li>Structured play: fetch in short sets with obedience interleaves.</li>
          </ul>
          <h3 className="text-lg font-semibold mt-2 mb-1">12–18 Months</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Begin higher impact only with veterinary clearance; consider sport classes.</li>
            <li>Advance off-leash reliability in safe areas; maintain emergency recall.</li>
            <li>Keep up enrichment and calm settles to prevent adult restlessness.</li>
          </ul>
        </section>

        {/* COMMON ISSUES */}
        <section id="common-issues" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">17) Troubleshooting Common Lab Puppy Issues</h2>
          <h3 className="text-lg font-semibold mt-2 mb-1">A. Jumping on People</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Preempt with a sit before greetings; reward heavily for four-on-the-floor.</li>
            <li>Turn away from jump attempts; greet when paws are down. Consistency among family and visitors is key.</li>
          </ul>
          <h3 className="text-lg font-semibold mt-2 mb-1">B. Pulling on Leash</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Stop when the leash tightens; move only when slack appears; reward position near your hip.</li>
            <li>Practice in low distraction areas first; use a front-attach harness; keep sessions short.</li>
          </ul>
          <h3 className="text-lg font-semibold mt-2 mb-1">C. Chewing Household Items</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Manage the environment (gates/pen); increase legal chew options; rotate novelty.</li>
            <li>Interrupt calmly; redirect to a chew; reinforce quiet chewing on the correct item.</li>
          </ul>
          <h3 className="text-lg font-semibold mt-2 mb-1">D. Over-Excitement with Dogs</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Practice parallel walks; reward attention breaks; short play bursts with calm interludes.</li>
            <li>End sessions early; quality beats quantity for social learning.</li>
          </ul>
          <h3 className="text-lg font-semibold mt-2 mb-1">E. Selective Hearing (Adolescence)</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Reduce distractions, increase management; rebuild cue clarity at an easier level, then re-proof.</li>
            <li>Keep rewards meaningful; mix jackpots; don’t nag cues—help the dog succeed and pay well.</li>
          </ul>
        </section>

        {/* CHECKLISTS */}
        <section id="checklists" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">18) Checklists & Templates</h2>
          <h3 className="text-lg font-semibold mt-2 mb-1">Daily Rhythm (Example)</h3>
          <p className="mb-3">
            <strong>Morning:</strong> potty → short sniff walk → breakfast training (2–3 min) → crate nap<br />
            <strong>Midday:</strong> potty → leash game indoors → enrichment (lick mat) → nap<br />
            <strong>Afternoon:</strong> potty → recall games in yard → calm settle on mat → nap<br />
            <strong>Evening:</strong> potty → family time with chews → brief training → bedtime potty → sleep
          </p>
          <h3 className="text-lg font-semibold mt-2 mb-1">New-Place Protocol</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Scout the environment; start at a distance; reward curiosity.</li>
            <li>One short success rep → leave; return another day; build confidence gradually.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">19) Frequently Asked Questions</h2>
          <p className="mb-3">
            <strong>When can my Lab puppy start formal training?</strong><br />
            Immediately—keep it short and fun. Save repetitive or high-impact work for later months and always progress thoughtfully.
          </p>
          <p className="mb-3">
            <strong>Group classes or private sessions?</strong><br />
            Both help. Choose a puppy class with controlled play and skilled coaching; bring private help for specific issues early.
          </p>
          <p className="mb-3">
            <strong>How do I prevent resource guarding?</strong><br />
            Trade games, bowl approaches with bonus treats, and boundary clarity. Avoid snatching items; teach “drop” and “leave it.”
          </p>
          <p>
            <strong>How much exercise is too much?</strong><br />
            If the pup lags, gets clumsy, or can’t settle afterward, it was too much. Favor varied low-impact movement and mental work.
          </p>
        </section>

        {/* SOURCES */}
        <section id="sources" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">📚 Sources (Selected)</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            <li>
              American Kennel Club. Labrador Retriever breed overview (temperament, exercise considerations).{' '}
              <a href="https://www.akc.org/dog-breeds/labrador-retriever/">https://www.akc.org/dog-breeds/labrador-retriever/</a>
            </li>
            <li>
              American Animal Hospital Association (AAHA). Canine Vaccination Guidelines (2022).{' '}
              <a href="https://www.aaha.org/aaha-guidelines/vaccination-canine-configuration/canine-vaccination-guidelines/">
                https://www.aaha.org/aaha-guidelines/vaccination-canine-configuration/canine-vaccination-guidelines/
              </a>
            </li>
            <li>
              World Small Animal Veterinary Association (WSAVA). Vaccination Guidelines.{' '}
              <a href="https://wsava.org/global-guidelines/vaccination-guidelines/">
                https://wsava.org/global-guidelines/vaccination-guidelines/
              </a>
            </li>
            <li>
              American Veterinary Medical Association (AVMA). Puppy socialization & preventive care resources.{' '}
              <a href="https://www.avma.org/">https://www.avma.org/</a>
            </li>
            <li>
              University of Minnesota Veterinary Diagnostic Laboratory. Exercise-Induced Collapse (DNM1) in Labradors.{' '}
              <a href="https://vetmed.umn.edu/departments-centers/veterinary-diagnostic-laboratory/our-services/eic">
                https://vetmed.umn.edu/departments-centers/veterinary-diagnostic-laboratory/our-services/eic
              </a>
            </li>
            <li>
              VCA Animal Hospitals. Hip dysplasia in dogs; large-breed growth considerations.{' '}
              <a href="https://vcahospitals.com/know-your-pet/hip-dysplasia-in-dogs">
                https://vcahospitals.com/know-your-pet/hip-dysplasia-in-dogs
              </a>
            </li>
            <li>
              Merck Veterinary Manual. Canine infectious respiratory disease complex (overview).{' '}
              <a href="https://www.merckvetmanual.com/dog-owners/lung-and-airway-disorders-of-dogs/kennel-cough-in-dogs">
                https://www.merckvetmanual.com/dog-owners/lung-and-airway-disorders-of-dogs/kennel-cough-in-dogs
              </a>
            </li>
            <li>
              The Dog Gurus. Safe daycare operations (group management, rest, environment).{' '}
              <a href="https://www.thedoggurus.com/">https://www.thedoggurus.com/</a>
            </li>
            <li>
              Overall, K. L. (2013). <em>Manual of Clinical Behavioral Medicine for Dogs and Cats</em>. Elsevier.
            </li>
            <li>
              American College of Veterinary Behaviorists (ACVB). Client education resources on socialization and training.{' '}
              <a href="https://www.dacvb.org/">https://www.dacvb.org/</a>
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
