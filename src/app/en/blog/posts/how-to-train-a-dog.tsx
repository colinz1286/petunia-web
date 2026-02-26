'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function HowToTrainADog() {
  const locale = useLocale();

  // --- Metadata ---------------------------------------------------------------
  const title =
    'How to Train a Dog: A Humane, Evidence-Informed Playbook (Foundation Skills, Real-World Routines, and Behavior Change that Lasts)';
  const date = 'July 16, 2025';
  const categories = ['owner'] as const;

  // Keep keys/labels EXACTLY as used in prior posts
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
    train: 'Training'
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
            <li><a href="#summary" className="underline hover:opacity-80">TL;DR + Petunia Tip</a></li>
            <li><a href="#mindset" className="underline hover:opacity-80">How to Think About Training</a></li>
            <li><a href="#learning" className="underline hover:opacity-80">Learning Basics (Humane &amp; Effective)</a></li>
            <li><a href="#setup" className="underline hover:opacity-80">Session Setup &amp; Reinforcers</a></li>
            <li><a href="#mechanics" className="underline hover:opacity-80">Mechanics: Marker, Lure, Capture, Shape</a></li>
            <li><a href="#foundation" className="underline hover:opacity-80">Foundation Plan (Weeks 1–4)</a></li>
            <li><a href="#house" className="underline hover:opacity-80">Housetraining &amp; Crate</a></li>
            <li><a href="#cooperative" className="underline hover:opacity-80">Cooperative Care (Vet/Groom)</a></li>
            <li><a href="#leash" className="underline hover:opacity-80">Loose-Leash &amp; Greeting Skills</a></li>
            <li><a href="#recall" className="underline hover:opacity-80">Recall &amp; Emergency Recall</a></li>
            <li><a href="#impulse" className="underline hover:opacity-80">Impulse Control (Pattern Games)</a></li>
            <li><a href="#socialization" className="underline hover:opacity-80">Socialization: Pup &amp; Adult</a></li>
            <li><a href="#reactivity" className="underline hover:opacity-80">Reactivity &amp; Fear (First Aid)</a></li>
            <li><a href="#enrichment" className="underline hover:opacity-80">Enrichment &amp; Mental Work</a></li>
            <li><a href="#operator" className="underline hover:opacity-80">Operator-Grade Checklists</a></li>
            <li><a href="#vet-now" className="underline hover:opacity-80">When to Call the Vet/Behaviorist</a></li>
            <li><a href="#faq" className="underline hover:opacity-80">FAQ</a></li>
            <li><a href="#sources" className="underline hover:opacity-80">📚 Sources (Selected)</a></li>
          </ul>
        </nav>

        {/* TL;DR */}
        <section id="summary" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">TL;DR + Petunia Tip</h2>
          <p className="mb-3">
            Effective, welfare-friendly dog training is built on <strong>reinforcement</strong>, clear communication, and
            <em> small, repeatable reps</em> in easy environments before you raise difficulty. Aversive-heavy approaches
            (shock/prong/“alpha” tactics) correlate with more stress and behavior fallout and offer <em>no advantage</em> over
            reward-based systems. Your fast path: <strong>marker training</strong>, rich reinforcement, clean mechanics, and a
            <strong> simple weekly plan</strong> that covers real-world routines (leash, recall, relax on a mat, cooperative care),
            plus management to prevent rehearsals of unwanted behavior.
          </p>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Petunia tip:</strong> In your Petunia profile, make a <em>“Training Ops”</em> note with your dog’s top reinforcers,
            daily schedule, trigger map (people/dogs/cats/cars), and a <em>three-line playbook</em> for each goal (cue, criteria,
            reward). Share it with sitters/boarding so everyone trains the same picture.
          </div>
        </section>

        {/* MINDSET */}
        <section id="mindset" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">How to Think About Training (Systems Over Heroics)</h2>
          <p className="mb-3">
            Training succeeds when you manage the <em>system</em>: arrange the environment so the right choice is easy, reward
            it generously, and raise difficulty in <em>tiny steps</em>. You’ll win more by engineering success than by correcting
            mistakes. Modern professional bodies (veterinary and training) recommend <strong>reinforcement-based</strong> methods
            guided by the LIMA/humane hierarchy framework: start with health, management, and positive reinforcement;
            avoid aversive tools unless a board-certified specialist directs their use within a comprehensive plan.
          </p>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>Outcomes we care about:</strong> reliable behavior, low stress, strong human-dog relationship.</li>
            <li><strong>Common failure modes:</strong> criteria jumps, thin reinforcement, unclear cues, practicing what you don’t want.</li>
            <li><strong>Ethos:</strong> safety → welfare → learning → performance.</li>
          </ul>
        </section>

        {/* LEARNING BASICS */}
        <section id="learning" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Learning Basics (Humane &amp; Effective)</h2>
          <p className="mb-3">
            Two big engines drive training: <strong>classical conditioning</strong> (emotion) and <strong>operant conditioning</strong> (consequences).
            We use classical work to make people/places/equipment predict good things, and operant work to reinforce the
            behaviors we want. Extensive research and veterinary guidelines warn that routine use of aversive methods
            increases stress signals and risk of problematic behavior without improving efficacy over reward-based methods.
          </p>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>ABCs:</strong> Antecedent (setup) → Behavior (what the dog does) → Consequence (what follows).</li>
            <li><strong>Reinforcement wins:</strong> behaviors that pay get repeated; rate, timing, and placement matter.</li>
            <li><strong>Generalization is a skill:</strong> teach in quiet rooms first, then add distance/distraction/duration in tiny steps.</li>
            <li><strong>Myth check:</strong> “Dominance”/“alpha” framing for household training is outdated and counter-productive for most pet scenarios.</li>
          </ul>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Coach’s rule:</strong> If you’re tempted to correct, try to <em>lower criteria</em>, <em>improve your timing</em>,
            or <em>increase reinforcement</em> first.
          </div>
        </section>

        {/* SESSION SETUP */}
        <section id="setup" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Session Setup &amp; Reinforcers (Make Success Easy)</h2>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>Environment:</strong> start in a distraction-light space. Use a 6–10 ft leash or long line for safety outdoors.</li>
            <li><strong>Reinforcer menu:</strong> build a list across food (soft, pea-sized), play (tug, fetch), and life rewards (sniffing, greeting).</li>
            <li><strong>Session shape:</strong> 3–5 sets × 5–8 reps; end while the dog is winning; log what worked.</li>
            <li><strong>Criteria ladder:</strong> change one thing at a time (distance, duration, distraction). If fails, step back two rungs.</li>
            <li><strong>Prevent rehearsals:</strong> management (gates, tethers, covered windows) to stop practicing problem behaviors.</li>
          </ul>
        </section>

        {/* MECHANICS */}
        <section id="mechanics" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Mechanics: Marker, Lure, Capture, Shape</h2>
          <p className="mb-3">
            Clean communication accelerates learning. A <strong>marker</strong> (click or a crisp “yes!”) pinpoints the moment the dog got it
            right; it’s always followed by a reward. We use <em>lures</em> to introduce motion, <em>capture</em> to reinforce behaviors the dog
            offers naturally, and <em>shaping</em> to build complex skills step-by-step. Fade lures quickly so cues—not hand targets—control behavior.
          </p>
          <ol className="list-decimal pl-5 space-y-2 mb-3">
            <li><strong>Load the marker:</strong> 10–15 reps: marker → treat; then test (pause, marker, observe “where’s my cookie?” look).</li>
            <li><strong>Placement:</strong> deliver food where you want the next rep to start (e.g., by your left leg for heel zone; on the mat for relax).</li>
            <li><strong>Split, don’t lump:</strong> if your rep falls apart, your step was too big.</li>
            <li><strong>Latency watch:</strong> if response slows, criteria or motivation needs adjustment.</li>
          </ol>
        </section>

        {/* FOUNDATION PLAN */}
        <section id="foundation" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Foundation Plan (Weeks 1–4, 10–15 minutes/day)</h2>
          <p className="mb-3">
            Here’s a practical four-week runway. Adjust pace to the learner; repeat weeks as needed.
          </p>

          <h3 className="text-lg font-semibold mt-2 mb-1">Week 1: Relationship &amp; Language</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>Name/Check-in:</strong> say name → mark eye contact → treat (10 reps × 2/day).</li>
            <li><strong>Hand Target:</strong> dog boops your palm → mark → treat; great for turning/greeting politely.</li>
            <li><strong>Reinforcement Zone:</strong> feed by your thigh while walking 3–4 steps; reset before adding steps.</li>
            <li><strong>Mat/Place Intro:</strong> toss treat on mat → when paws land, mark → treat between paws → release.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Week 2: Sit, Down, Settle</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>Sit:</strong> lure up/back; fade lure to a hand cue; add a soft verbal when fluent.</li>
            <li><strong>Down:</strong> from sit or stand; pay calm duration 1–3–5 seconds before release.</li>
            <li><strong>Settle on Mat:</strong> pay successive relaxation signs (hip roll, chin down, slower breathing).</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Week 3: Leash Basics &amp; Leave-It</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>Follow Me:</strong> 5–7 steps in reinforcement zone → mark → treat → reset; add turns and halts.</li>
            <li><strong>Leave-It (Two-Stage):</strong> Stage A: covered hand; dog disengages → mark → treat from the <em>other</em> hand. Stage B: on floor with safety cover.</li>
            <li><strong>Greeting Manners:</strong> sit → “say hi” → brief petting → return for treat; if popping up, ask for hand target instead.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Week 4: Drop-It, Stay, Early Recall</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>Drop-It (Trade Game):</strong> offer a <em>better</em> treat near the mouth → when the toy drops, mark → pay → give toy back sometimes.</li>
            <li><strong>Stay (1–2–3 rule):</strong> build duration (seconds), then distance (half-steps), then distraction (tiny).</li>
            <li><strong>Recall (Name → “Come!”):</strong> one cue, then pay <em>big</em>; never recall to anything unpleasant.</li>
          </ul>
        </section>

        {/* HOUSETRAINING & CRATE */}
        <section id="house" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Housetraining &amp; Crate (Sleep, Safety, Predictability)</h2>
          <p className="mb-3">
            Crates and pens are tools for rest, safety, and housetraining—not punishment. Most puppies need a tight
            outside schedule (after sleep, play, meals), a correctly sized crate, and <em>zero</em> unsupervised freedom indoors
            at first. Adults new to your home benefit from the same structure for 2–3 weeks.
          </p>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>Potty rhythm (puppies):</strong> outdoors every 2–3 hours, plus after waking, eating, playing.</li>
            <li><strong>Crate size:</strong> just enough to stand, turn, lie stretched; use a divider for growing pups.</li>
            <li><strong>Accidents:</strong> interrupt calmly, go outside; clean with enzymatic cleaner; don’t punish.</li>
            <li><strong>Alone-time reps:</strong> pair the crate/pen with food toys; build solitude in 30–90-second slices before you leave for real.</li>
          </ul>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Troubleshooting:</strong> repeated accidents, panic in the crate, or house soiling in adults warrants a vet check (UTI/GI/pain)
            and a revised plan. Some dogs with separation-related distress need a different strategy and medical support.
          </div>
        </section>

        {/* COOPERATIVE CARE */}
        <section id="cooperative" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Cooperative Care (Vet &amp; Grooming Without Drama)</h2>
          <p className="mb-3">
            Make handling predict snacks and choice. Teach a <strong>consent position</strong> (chin rest on a towel or hand) that
            earns continuous pay while nails are clipped or eyes/ears are checked; pause pay when the dog disengages,
            resume when the chin returns. Desensitization + counter-conditioning beats restraint wrestling.
          </p>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Daily 60–90-second drills: touch a paw → mark → treat; build to gentle pressure → clipper noise → single snip.</li>
            <li>Fit harnesses/muzzles with treats; your dog should <em>push into</em> equipment to get paid.</li>
            <li>At the clinic: treat scatter on floor, mat from home, and pre-visit party (drive, snacks, leave).</li>
          </ul>
        </section>

        {/* LOOSE-LEASH */}
        <section id="leash" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Loose-Leash Walking &amp; Greeting Skills</h2>
          <p className="mb-3">
            Think “choose me, not the environment.” Pay generously for position and check-ins. Use a front-clip harness
            and a fixed-length leash; avoid rehearsing sled-dog pulling on flexi leads until skills are fluent.
          </p>
          <ol className="list-decimal pl-5 space-y-2 mb-3">
            <li><strong>Micro-drills:</strong> 5–7 steps in position → mark → treat on the seam of your pants; reset often.</li>
            <li><strong>Turns &amp; halts:</strong> random right/left; pay pivots and automatic sits if you like that style.</li>
            <li><strong>Greeting gate:</strong> you get “say hi” permission when the leash is <em>loose</em> and butt is on the ground.</li>
            <li><strong>High-distraction rule:</strong> move first, then cue; distance is your friend.</li>
          </ol>
        </section>

                {/* RECALL */}
        <section id="recall" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Recall &amp; Emergency Recall (Come When It Counts)</h2>
          <p className="mb-3">
            Recall is not a “command”—it’s a <strong>reflex built through great pay and smart environments</strong>. We never poison it by
            recalling to nail trims, baths, or the end of fun. Your recall cue should predict a jackpot and relief.
          </p>

          <h3 className="text-lg font-semibold mt-2 mb-1">Core Rules</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Use <strong>one cue</strong> for everyday recall (“Come!”) and a <strong>second cue</strong> for <em>Emergency Recall</em> (e.g., “Now!”) that you protect ruthlessly.</li>
            <li><strong>Never</strong> punish or scold after a recall—even if your dog took a scenic route. Pay, leash, breathe, reset.</li>
            <li>Rehearse far more <em>easy</em> reps than hard ones. Raise difficulty in tiny pieces: distance, distraction, then duration.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Everyday Recall (6-Week Progression)</h3>
          <ol className="list-decimal pl-5 space-y-2 mb-3">
            <li><strong>Week 1 (Indoors):</strong> Say name → “Come!” once → <em>mark</em> first head-turn → toss 3–5 tiny treats at your feet → release back to fun.</li>
            <li><strong>Week 2 (Yard/Quiet Hall):</strong> Add 5–10 ft distance; lightly restrain, then release and run backwards; celebrate arrival with a <em>party</em>.</li>
            <li><strong>Week 3 (Long Line):</strong> 15–30 ft line in a boring field; say cue once; reel the party <em>to you</em> (don’t drag the dog); pay big.</li>
            <li><strong>Week 4–6 (Real Life):</strong> Layer in mild distractions (a friend, a toy on the ground). If you must help, <em>move away</em> and lower criteria.</li>
          </ol>

          <h3 className="text-lg font-semibold mt-2 mb-1">Emergency Recall (Protect This Cue)</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Pick a unique word (e.g., “NOW!”). For 10 days, do 2–3 sessions/day: say the word once → <em>rain treats</em> (10–20 pea-sized) no matter what.</li>
            <li>When used “for real,” deliver a <strong>jackpot</strong> and end the session on a calm win. Do not burn this cue on hard setups until it’s bulletproof.</li>
            <li>Refresh weekly with an easy “party” rep.</li>
          </ul>

          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Troubleshooting:</strong> If recall stalls, your environment is too hard or your reinforcement too thin. Move away fast, kneel, open arms, and turn the game back on. Pay bigger than the environment is paying.
          </div>
        </section>

        {/* IMPULSE CONTROL */}
        <section id="impulse" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Impulse Control (Pattern Games that Scale to Real Life)</h2>
          <p className="mb-3">
            “Impulse control” is not willpower—it’s <strong>repetition under easy criteria</strong> until the pattern becomes the dog’s default. Use short, upbeat sets.
          </p>

          <h3 className="text-lg font-semibold mt-2 mb-1">1) “1-2-3, Choose Me”</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Count softly “1…2…3,” feeding at your leg on “3.” Walk and repeat. If the dog drifts, reset closer to you and shorten steps.</li>
            <li>Use as a walking metronome past mild distractions. Add turns and halts to keep focus.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">2) “Look at That” (Engage/Disengage)</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>At a safe distance, mark the instant your dog <em>glances</em> at a trigger (dog, bike) and pay for <em>looking back</em> to you.</li>
            <li>Gradually shorten the glance duration; never force a stare-down. If eyes “lock,” increase distance.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">3) It’s Your Choice (IYC)</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Open palm with food; close when the nose dives; open the <em>second</em> your dog backs off; pay from the <em>other</em> hand. Build to floor food with a cover.</li>
            <li>Goal: your dog disengages from “temptations” by default—then you cue access as a reward.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">4) Settle on a Mat (Life Skill)</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Mark/pair successive relaxation signs (hip roll → chin down → slow breaths). Pay <em>on the mat</em> to grow duration.</li>
            <li>Deploy for meals, Zoom calls, and guests; proof with tiny distractions first.</li>
          </ul>
        </section>

        {/* SOCIALIZATION */}
        <section id="socialization" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Socialization (Puppies &amp; Adult Dogs)</h2>
          <p className="mb-3">
            Socialization means <strong>positive, controlled exposure</strong> to the world—people, dogs, places, sounds, handling—not chaotic “flooding.”
            Goals differ by age, but the principle is the same: <em>pair novelty with good things</em> at intensities your dog can handle.
          </p>

          <h3 className="text-lg font-semibold mt-2 mb-1">Puppies (8–16 Weeks; Continue to 24 Weeks)</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Create a checklist of sights/sounds/surfaces; aim for <em>calm, brief</em> exposures. Quality beats quantity.</li>
            <li>Keep it <strong>contagion-smart</strong> until vaccines complete: clean yards, carry in sketchy spots, avoid dog-dense floors.</li>
            <li>Practice handling (collar, paws, ears) with treats; start groomer/vet “happy visits.”</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Adults (Lifelong)</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Use <strong>DS/CC</strong> (desensitization + counter-conditioning): start below threshold, pair triggers with food, leave before it’s “too much.”</li>
            <li>Skip “he’ll get used to it” marathons; take short wins and end early. Safety and choice build confidence.</li>
          </ul>
        </section>

        {/* REACTIVITY & FEAR */}
        <section id="reactivity" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Reactivity &amp; Fear (First Aid &amp; Long Game)</h2>
          <p className="mb-3">
            Reactivity is an <strong>emotional event</strong>. Your first aid is distance, movement, and food. Your long game is systematic DS/CC and pattern games. If bites or near-bites are in play, bring in a qualified pro early.
          </p>

        <h3 className="text-lg font-semibold mt-2 mb-1">Field First Aid (Today)</h3>
        <ul className="list-disc pl-5 space-y-1 mb-3">
          <li><strong>U-turn &amp; screen:</strong> step off path, put a car or hedge between you and the trigger, feed a steady treat stream.</li>
          <li><strong>Distance is medicine:</strong> add distance until your dog can eat, sniff, and blink. If they can’t eat, you’re too close.</li>
          <li><strong>Harness + fixed leash:</strong> skip flexis; avoid corrections. You cannot punish feelings away.</li>
        </ul>

        <h3 className="text-lg font-semibold mt-2 mb-1">Plan (Weeks 1–6)</h3>
        <ol className="list-decimal pl-5 space-y-2 mb-3">
          <li>List triggers and thresholds. Start sessions below threshold only.</li>
          <li>Run <em>Look-at-That</em> and “1-2-3 Choose Me” at safe distances; mark any glance back to you.</li>
          <li>Gradually shrink distance over weeks, not days. Track data (distance, duration, recovery time).</li>
          <li>Add <strong>treat-&amp;-retreat</strong>: toss a treat <em>behind</em> your dog after they glance at the trigger—this turns them away and lowers pressure.</li>
        </ol>

        <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
          <strong>Safety:</strong> Fit a basket muzzle for dogs with bite history; train it with cookies so it predicts good things. Coordinate with your veterinarian for pain screening—pain fuels reactivity.
        </div>
        </section>

        {/* ENRICHMENT */}
        <section id="enrichment" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Enrichment &amp; Mental Work (Balance the Arousal Budget)</h2>
          <p className="mb-3">
            A well-exercised brain makes better choices. Build a rotation that matches your dog’s drives without redlining arousal.
          </p>

          <h3 className="text-lg font-semibold mt-2 mb-1">Menu Ideas</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Sniff walks (10–20 min), scatter feeding, cardboard “forage boxes.”</li>
            <li>Food puzzles/lick mats; simple scentwork (find a treat/toy by name).</li>
            <li>Trick bursts (spin, paw, bow), platform games, low-impact conditioning (back-up, pivots).</li>
            <li>Settle rituals: mat, chew, then nap. Sleep is part of training.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Structure</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Think <strong>alternation</strong>: high arousal → decompression; training → chew/nap.</li>
            <li>Keep the body <strong>lean</strong>; adjust calories as you pay with food.</li>
          </ul>
        </section>

        {/* OPERATOR CHECKLISTS */}
        <section id="operator" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Operator-Grade Checklists (Home &amp; Facilities)</h2>

          <h3 className="text-lg font-semibold mt-2 mb-1">1) Home Starter Kit</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Front-clip harness, 6–10 ft leash, long line, treat pouch, soft pea-sized treats, chew rotation, mat.</li>
            <li>House map: gates, tether points, crate/pen, window management.</li>
            <li>Daily plan: 2 short training blocks, 1–2 enrichment slots, decompression walk, alone-time reps.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">2) Weekly Audit</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Top wins, sticky skills, and where criteria jumped too fast.</li>
            <li>Trigger log: distance to success; recovery time; any “surprise” events.</li>
            <li>Reinforcer menu: what ranked high this week? Rotate to avoid boredom.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">3) Boarding/Daycare Handoff</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Provide a one-page “Training Ops” sheet (cues, reinforcement, do/don’t list, triggers, muzzle status).</li>
            <li>Require reward-based handling; no shock/prong/choke without your explicit, written veterinary/behaviorist direction.</li>
            <li>Ask for daily reports (eating, stool, arousal spikes, training games completed).</li>
          </ul>
        </section>

        {/* WHEN TO CALL THE VET/BEHAVIORIST */}
        <section id="vet-now" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">When to Call the Vet or a Veterinary Behaviorist</h2>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Bite or near-bite incidents; escalating growling/snarling despite management.</li>
            <li>Sudden behavior changes (irritability, reluctance to be touched, house-soiling) that could indicate pain or illness.</li>
            <li>Panic when left alone; howling, drooling puddles, destruction near exits.</li>
            <li>Compulsive behaviors (tail-chasing, shadow staring) that persist outside of play.</li>
            <li>Self-injury risk or severe fear responses (shutdown, flight attempts).</li>
          </ul>
          <p className="text-sm text-gray-700">
            Qualified help: look for DACVB, CCAB, CAAB, KPA-CTP, CBCC-KA, CDBC credentials. Reward-based pros will coordinate with your veterinarian to rule out medical drivers.
          </p>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">Frequently Asked Questions</h2>

          <p className="mb-3">
            <strong>How do I fade food rewards?</strong><br />
            First raise criteria (longer, harder) <em>with</em> food, then begin <strong>variable reinforcement</strong> (sometimes treats, sometimes play or sniff). Keep surprise jackpots for standout reps. Never go to zero reinforcement; life rewards count.
          </p>

          <p className="mb-3">
            <strong>My dog is “stubborn.” What now?</strong><br />
            “Stubborn” usually means <em>criteria are too high</em>, reinforcement is thin, or the environment pays better. Lower difficulty, pay better, and reduce distractions. Check health and fit of gear.
          </p>

          <p className="mb-3">
            <strong>Are prong or shock collars faster?</strong><br />
            Evidence does not show better outcomes vs. reward-based methods and does show increased stress and potential fallout. Choose reinforcement-first; consult a veterinary behavior team for severe cases.
          </p>

          <p className="mb-3">
            <strong>Two dogs—train together or separate?</strong><br />
            Start separately for clean learning; then rehearse together with easy criteria. Pay both for calm when the other works.
          </p>

          <p className="mb-3">
            <strong>What about teenage regression (6–18 months)?</strong><br />
            It’s real. Protect your training by returning to easy reps, increasing management, and keeping reinforcement rich through this phase.
          </p>

          <p className="mb-3">
            <strong>Can kids help train?</strong><br />
            Yes—with adult supervision and <em>specific jobs</em> (treat tosses, hand targets, mat feeding). Adults handle leashing, doorways, and any high-arousal tasks.
          </p>

          <p className="mb-3">
            <strong>Do bilingual cues confuse dogs?</strong><br />
            Dogs learn associations, not languages. Pick one cue per behavior to avoid clutter, or teach a second cue once the first is fluent.
          </p>

          <p className="mb-3">
            <strong>What if recall fails in public?</strong><br />
            Switch to the Emergency Recall once, pay huge, end the session, and rebuild with a long line. Don’t burn your cues in environments you haven’t trained for.
          </p>
        </section>

        {/* SOURCES */}
        <section id="sources" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">📚 Sources (Selected)</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            <li>
              AVSAB. <em>Humane Dog Training Position Statement</em> &amp; <em>Puppy Socialization</em>.{' '}
              <a href="https://avsab.org/resources/position-statements/" target="_blank" rel="noopener noreferrer">avsab.org</a>
            </li>
            <li>
              AAHA. <em>Canine and Feline Behavior Management Guidelines</em> (2015) &amp; preventive care resources.{' '}
              <a href="https://www.aaha.org/education/guidelines/" target="_blank" rel="noopener noreferrer">aaha.org</a>
            </li>
            <li>
              Ziv, G. (2017). <em>The effects of using aversive training methods in dogs—A review</em>. <em>Journal of Veterinary Behavior</em> 19:50–60.
            </li>
            <li>
              Vieira de Castro, A.C. et&nbsp;al. (2020). <em>Does training method affect dog welfare?</em> <em>PLoS ONE</em> 15(9): e0225023.
            </li>
            <li>
              Cooper, J. et&nbsp;al. (2014). <em>Remote electronic training collars: Efficacy and welfare consequences</em>. DEFRA project &amp; peer-reviewed publications.
            </li>
            <li>
              Deldalle, S., Gaunet, F. (2014). <em>Effects of 2 training methods on stress-related behaviors</em>. <em>Journal of Veterinary Behavior</em> 9(2):58–65.
            </li>
            <li>
              Hiby, E., Rooney, N., Bradshaw, J. (2004). <em>Dog training methods: Their use, effectiveness and interaction with behavior and welfare</em>. <em>Animal Welfare</em> 13:63–69.
            </li>
            <li>
              Rooney, N., Cowan, S. (2011). <em>Human–dog relationship: Effects on behavior and welfare</em>. <em>Journal of Veterinary Behavior</em> 6(4):193–206.
            </li>
            <li>
              Fear Free Pets (owner resources on low-stress handling).{' '}
              <a href="https://fearfreehappyhomes.com/" target="_blank" rel="noopener noreferrer">fearfreehappyhomes.com</a>
            </li>
            <li>
              IAABC &amp; APDT (find qualified behavior professionals).{' '}
              <a href="https://iaabc.org/" target="_blank" rel="noopener noreferrer">iaabc.org</a>{' '}
              · <a href="https://apdt.com/" target="_blank" rel="noopener noreferrer">apdt.com</a>
            </li>
          </ul>
          <p className="text-xs text-gray-600 mt-4">
            This article is educational and not a substitute for veterinary or behavioral diagnosis or treatment. Always consult your veterinarian and a qualified, reward-based trainer for individualized guidance.
          </p>
        </section>

        <Link href={`/${locale}/blog`} className="underline text-[#2c4a30] font-medium hover:opacity-80">
          &larr; Back to Blog
        </Link>
      </main>
    </>
  );
}

