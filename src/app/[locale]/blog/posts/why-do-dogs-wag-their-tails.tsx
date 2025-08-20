'use client';

import Head from 'next/head';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function WhyDoDogsWagTheirTails() {
  const locale = useLocale();

  const title =
    'Why Do Dogs Wag Their Tails? What Wags Really Mean (and Don’t), How to Read Context, and Practical Safety/Training Tips for Every Age';
  const date = 'July 7, 2025';
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
    'Dogs wag for many reasons: arousal, intention, and emotional valence—sometimes friendly, sometimes conflicted, sometimes stressed. This evidence-informed guide explains tail anatomy and biomechanics, left–right asymmetry research, breed/tail-shape caveats, life-stage nuances, safety with kids, training applications, health issues (like “limber tail”), and how to build calm, reliable communication at home and in public. Includes checklists, scenarios, and practical routines.';

  return (
    <>
      <Head>
        <title>{title} – Petunia Blog</title>
        <meta name="description" content={description} />
        {/* Per user preference, do not use the word "index" here. */}
        <meta name="robots" content="all" />
        <link
          rel="canonical"
          href={`https://www.petuniapets.com/${locale}/blog/why-do-dogs-wag-their-tails`}
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
            <li><a href="#myth" className="underline hover:opacity-80">Myth: Wag = Happy</a></li>
            <li><a href="#anatomy" className="underline hover:opacity-80">Tail Anatomy &amp; Biomechanics</a></li>
            <li><a href="#asymmetry" className="underline hover:opacity-80">Left–Right Wag Asymmetry</a></li>
            <li><a href="#variables" className="underline hover:opacity-80">Speed, Height, and Stiffness</a></li>
            <li><a href="#context" className="underline hover:opacity-80">Context: People, Dogs, Places</a></li>
            <li><a href="#breeds" className="underline hover:opacity-80">Breed &amp; Tail Shape Caveats</a></li>
            <li><a href="#lifestage" className="underline hover:opacity-80">Life Stages: Puppies → Seniors</a></li>
            <li><a href="#kids" className="underline hover:opacity-80">Safety With Babies &amp; Kids</a></li>
            <li><a href="#training" className="underline hover:opacity-80">Training: Using Wags as Data</a></li>
            <li><a href="#daycare" className="underline hover:opacity-80">Daycare &amp; Boarding Considerations</a></li>
            <li><a href="#health" className="underline hover:opacity-80">Health Issues Affecting Tails</a></li>
            <li><a href="#checklists" className="underline hover:opacity-80">Checklists &amp; Scenarios</a></li>
            <li><a href="#faq" className="underline hover:opacity-80">FAQ</a></li>
            <li><a href="#sources" className="underline hover:opacity-80">Sources (Selected)</a></li>
          </ul>
        </nav>

        {/* TL;DR */}
        <section id="tldr" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Short Answer (TL;DR)</h2>
          <p className="mb-4">
            A wag is not a universal &quot;I am happy&quot; sign. It is a <strong>moving flag for arousal and social intention</strong>. The meaning changes with tail height,
            speed, stiffness, direction, and the rest of the dog&#39;s body (eyes, mouth, ears, posture, movement). Research also shows <strong>left–right asymmetry</strong>:
            bias to one side can reflect emotional valence. Always read the whole dog and the situation: a loose, sweeping, mid-height wag paired with soft
            eyes and relaxed muscles often means prosocial intent; a <strong>high, tight, fast, stiff wag</strong> can signal tension; a <strong>low tuck or micro-wags</strong> may indicate
            fear or appeasement. Context decides.
          </p>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Petunia tip:</strong> Log short videos of common routines—door greetings, family returns, passerby at the window—and tag each clip with a 1–5 calm
            score and one word for tail style (loose, helicopter, tight, micro). Patterns appear fast and guide training targets.
          </div>
        </section>

        {/* Myth */}
        <section id="myth" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Myth Busting: &quot;If the Tail Wags, the Dog Is Happy&quot;</h2>
          <p className="mb-3">
            Many bites occur because humans over-trust a wag. A dog can wag while <strong>conflicted, stressed, or guarding</strong>. Dogs wag when they are aroused, which
            includes excitement, social interest, and also agitation. Think of a wag as an <em>exclamation point</em> that needs a sentence around it. The sentence is
            the rest of the body and the situation. If the sentence says, &quot;I am uneasy&quot;—tight mouth corners, weight pitched forward, hard eyes—then a fast,
            tight wag is closer to a warning light than a &quot;come cuddle&quot; sign.
          </p>
          <p>
            Once you practice reading whole-dog signals, your decisions get easier: you will pause greetings, increase space, or ask for a settle before contact.
            As a result, the dog&#39;s wags become <strong>looser and friendlier</strong> because you are removing pressure that had been causing mixed messages.
          </p>
        </section>

        {/* Anatomy */}
        <section id="anatomy" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Tail Anatomy &amp; Biomechanics: Why the Flag Talks So Well</h2>
          <p className="mb-3">
            The tail is a mobile extension of the spine—individual vertebrae moved by muscles and steered by the nervous system. It balances the body during
            turns, acts as a rudder during swimming, and broadcasts motor patterns that reflect internal state. Because tail movement is tied to <strong>central
            arousal systems</strong>, even small emotional shifts can produce noticeable changes in angle, amplitude, and rhythm.
          </p>
          <p>
            Tail <strong>carriage</strong> (resting height relative to the back), <strong>set</strong> (where the tail emerges from the croup), and <strong>fur</strong> density all affect visual impact. A spitz-type
            dog with a plume over the back can look &quot;up&quot; even at rest, while a sighthound with a downward set can appear cautious when simply neutral. That is
            why we never read tails in isolation.
          </p>
        </section>

        {/* Asymmetry */}
        <section id="asymmetry" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Left–Right Wag Asymmetry: What Studies Suggest</h2>
          <p className="mb-3">
            A line of research has shown that dogs sometimes wag with a <strong>side bias</strong> related to emotional valence and perception. In controlled settings, dogs
            displayed different asymmetries when viewing familiar humans or dogs versus unfamiliar or threatening stimuli. Follow-up work suggested that
            dogs can <strong>perceive and respond</strong> to those asymmetries in other dogs, implying a social signaling role.
          </p>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>One study reported that dogs showed a lateralized wag pattern that varied with the stimulus category (<em>Current Biology</em>, 2007).</li>
            <li>Later research suggested dogs notice another dog&#39;s wag asymmetry and adjust arousal accordingly (<em>Current Biology</em>, 2013).</li>
          </ul>
          <p>
            We should not over-interpret single moments; home lighting, camera angle, and tail structure complicate analysis. But as a rule of thumb, combine
            any side bias you think you see with posture, eyes, mouth, and movement to form a full picture before deciding how to proceed.
          </p>
        </section>

        {/* Variables */}
        <section id="variables" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Speed, Height, Stiffness, &amp; Pattern: The Four Big Variables</h2>
          <p className="mb-3">
            Tail language is a set of dials, not a single switch. The most practical dials for everyday owners and handlers:
          </p>
          <ul className="list-disc pl-5 space-y-2 mb-3">
            <li><strong>Height:</strong> higher tails often correlate with alert arousal or confidence; lower tails signal caution or appeasement, especially if tucked.</li>
            <li><strong>Speed:</strong> faster means more arousal of any type; slow, sweeping arcs tend to pair with relaxation and prosocial intent.</li>
            <li><strong>Stiffness:</strong> a tight, vibrating &quot;flag&quot; at high carriage is a watch-this cue; loose musculature suggests comfort.</li>
            <li><strong>Pattern:</strong> helicopter circles often show enthusiasm; micro-wags can mean &quot;I see you; please keep distance&quot; or &quot;I am unsure&quot; depending on the rest of the dog.</li>
          </ul>
          <p>
            Add <strong>weight shift</strong> (forward vs back), <strong>eye softness</strong> (blink rate, squint), <strong>mouth</strong> (open/closed, commissure tension), <strong>ear set</strong>, and <strong>movement</strong> (approach arc,
            head turns) to arrive at a reliable meaning.
          </p>
        </section>

        {/* Context */}
        <section id="context" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Context Is King: People, Dogs, and Places</h2>
          <h3 className="text-lg font-semibold mt-2 mb-1">With familiar people</h3>
          <p className="mb-3">
            Classic &quot;full-body&quot; wags on family return—hips, shoulders, loose tail—signal joy and connection. Build on these by rewarding sit-for-greeting so enthusiasm
            becomes compatible with manners. This turns a bouncy hello into a predictable routine (sit, release to greet, settle).
          </p>

          <h3 className="text-lg font-semibold mt-2 mb-1">With unfamiliar people</h3>
          <p className="mb-3">
            Many dogs wag when a stranger approaches yet remain <strong>ambivalent</strong>. If the tail is high and tight, body tall, eyes hard, or the dog freezes between wags,
            assume tension. Ask the person to pause, turn slightly sideways, and ignore the dog while you create space. If the wag loosens and the dog chooses
            to approach with a soft body, offer a brief chest rub, then disengage to prevent crowding.
          </p>

          <h3 className="text-lg font-semibold mt-2 mb-1">Dog–dog greetings</h3>
          <p className="mb-3">
            Smooth greetings are parallel, brief, and curved, not head-on. Tails should be mobile but not buzzing like a power line. If both dogs shift weight
            forward, tails go high and tight, or one dog freezes with a micro-wag, guide a gentle separation and walk together instead. Parallel movement lowers
            pressure and lets tails relax into normal swing rather than duel flags.
          </p>

          <h3 className="text-lg font-semibold mt-2 mb-1">Places &amp; triggers</h3>
          <p>
            At doors, fences, windows, or vehicles, arousal spikes easily. Tails here often look higher and faster, regardless of friendliness. Treat all barrier
            scenarios as <strong>pressure cookers</strong>: add distance, ask for a settle on a mat, and pay for quiet breaths. You will see the tail descend and soften as the dog
            re-enters thinking mode.
          </p>
        </section>

        {/* Breeds */}
        <section id="breeds" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Breed &amp; Tail Shape Caveats: Reading More Than the Flag</h2>
          <p className="mb-3">
            Tail <strong>length and set</strong> vary widely. Some dogs have natural bob tails; others are docked where that practice remains legal; spitz and many northern breeds
            carry a tail over the back; sighthounds carry low; bully breeds may have short, muscular tails that move subtly. In these cases, the smartest plan is to
            read the <strong>whole dog</strong> and rely more on weight shift, ear/eye/mouth, and gait than on tail alone. A spitz&#39;s &quot;neutral&quot; can be another breed&#39;s &quot;confident high.&quot;
          </p>
          <p>
            Coat also misleads: dense plumes look &quot;bigger&quot; than they feel; sleek tails can appear low even when neutral. Build a baseline photo set of your own dog in
            calm contexts so you know what <em>neutral</em> looks like for <em>this</em> body.
          </p>
        </section>

        {/* Life stages */}
        <section id="lifestage" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Life Stages: How Wags Evolve From Puppyhood to Senior Years</h2>
          <h3 className="text-lg font-semibold mt-2 mb-1">Puppies</h3>
          <p className="mb-3">
            Puppies wag early and often—social curiosity plus novelty. They also practice <strong>appeasement micro-wags</strong> when unsure. Reward calm investigation, not
            rush-ins. Pair new sights and sounds with food. If the tail tucks, increase distance and allow slow approach. Never force greetings; consent grows confidence.
          </p>

          <h3 className="text-lg font-semibold mt-2 mb-1">Adolescents</h3>
          <p className="mb-3">
            Hormones, strength, and emerging opinions collide. You will see higher, faster wags during doorbells and yard patrols. Teach door routines (leash on,
            go... go to mat) and reinforce &quot;watch&quot; and &quot;leave it&quot; so the wag dial turns down faster after a trigger. Parallel walks &gt; face-to-face meetups during this stage.
          </p>

          <h3 className="text-lg font-semibold mt-2 mb-1">Adults</h3>
          <p className="mb-3">
            Mature dogs should display <strong>flexible</strong> wag patterns: loose with friends, neutral in public, alert-but-responsive with novel stimuli. If the tail seems
            stuck high-and-tight in daily life, audit sleep, enrichment, and structure—chronic stress keeps the dial up. Train predictable hospitality routines so
            guests do not spike arousal every weekend.
          </p>

          <h3 className="text-lg font-semibold mt-2 mb-1">Seniors</h3>
          <p>
            Aches and sensory changes affect tails. Some seniors wag less vigorously but still communicate clearly. Protect traction, keep nails short, and schedule
            shorter, more frequent walks. If a normally waggish dog stops wagging or holds the tail differently, consider pain, &quot;limber tail,&quot; or neurologic issues and
            schedule a veterinary exam.
          </p>
        </section>

        {/* Kids */}
        <section id="kids" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Safety With Babies &amp; Kids: Reading Wags in Family Life</h2>
          <p className="mb-3">
            Kids squeal, sprint, and loom—ingredients for mixed signals. A wag around children can be friendly or conflicted. Teach a <strong>house rule card</strong>:
          </p>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Do not disturb a resting dog. Adults call the dog away first; dog chooses to engage or not.</li>
            <li>Hands to self unless an adult says &quot;yes&quot; and the dog sits; pet under the chin or chest, not over the head.</li>
            <li>No chasing games. Use &quot;find it&quot; scatter, trick training, or gentle parallel walks.</li>
            <li>Gates for playrooms; the dog rests behind a barrier during chaotic moments.</li>
          </ul>
          <p>
            Your best early-warning signs: tail tightens, speed increases, body stiffens, mouth closes, eyes harden. Intervene cheerfully: create space, redirect to
            a mat, and pay for a breath cycle. The tail will often &quot;exhale&quot;—height lowers, sweep widens—once pressure drops.
          </p>
        </section>

        {/* Training */}
        <section id="training" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Training: Using Wags as Actionable Data</h2>
          <p className="mb-3">
            Good handlers treat tails like dashboards. A wag that drifts high and tight at 20 feet from a trigger tells you to add distance, turn to parallel, and
            pay for disengagement. Over time, you can &quot;shape&quot; the wag toward neutral by changing the picture before the dog needs to crank the dial.
          </p>
          <h3 className="text-lg font-semibold mt-2 mb-1">Simple protocols that leverage tail data</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>Look at That (LAT):</strong> mark a glance at a trigger, pay for turning back to you. Tails soften as the dog learns it controls the game.</li>
            <li><strong>Pattern games:</strong> predictable sequences (e.g., &quot;1-2-3&quot; game) lower arousal; tails drop from tight to loose as the brain shifts to a known rule.</li>
            <li><strong>Consent tests for petting:</strong> pet for 3 seconds, pause; if the dog re-initiates with loose body and wag, continue; if not, disengage.</li>
          </ul>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Petunia tip:</strong> Create a &quot;trigger ledger&quot; in Petunia: distance, tail note, recovery time. Trends guide when to decrease distance or raise criteria.
          </div>
        </section>

        {/* Daycare */}
        <section id="daycare" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Daycare &amp; Boarding: Reading Wags at Scale</h2>
          <p className="mb-3">
            In group settings, tails can look &quot;higher&quot; simply because arousal is widespread. Skilled staff make small adjustments—smaller playgroups, scent walks,
            and micro-breaks—to convert tight tails into loose, rhythmic swings. Green flags: <strong>matched play styles</strong>, <strong>rest cycles</strong>, <strong>traction surfaces</strong>, and
            staff who narrate &quot;what I am seeing&quot; so owners learn too. Red flags: constant chase games, little coaching, or &quot;dogs figure it out&quot; attitudes.
          </p>
          <p>
            For boarding, request videos of your dog at key times (yard entry, mealtime, evening). Look for loose tails and soft bodies rather than just high counts
            of &quot;playtime minutes.&quot; Calm quality beats raw volume for mental health and joints.
          </p>
        </section>

        {/* Health */}
        <section id="health" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Health Issues That Change Wags (and When to Call Your Vet)</h2>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>Acute caudal myopathy (&quot;limber tail&quot;):</strong> sudden flaccid tail after vigorous exercise or cold-water exposure; usually painful; see your veterinarian.</li>
            <li><strong>Orthopedic pain:</strong> lumbar or hip discomfort reduces wag amplitude or changes carriage; look for reluctance to jump and new stiffness.</li>
            <li><strong>Neurologic issues:</strong> nerve injuries can alter movement or sensation at the tail tip; prompt evaluation matters.</li>
            <li><strong>Dermatologic problems:</strong> hot spots or parasites near the tail base can cause unusual wagging or guarding.</li>
            <li><strong>Medication/sedation effects:</strong> some drugs reduce wag vigor transiently; discuss any persistent changes with your veterinarian.</li>
          </ul>
          <p>
            Rule of thumb: a clear, sustained change in a known dog&#39;s wag without an obvious training or environment cause deserves a medical check, especially if
            accompanied by pain signs or movement changes.
          </p>
        </section>

        {/* Checklists */}
        <section id="checklists" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Checklists &amp; Scenarios</h2>

          <h3 className="text-lg font-semibold mt-2 mb-1">Green / Yellow / Red Wag Guide (Quick Read)</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>Green:</strong> mid-height, loose sweep, soft eyes, relaxed mouth, weight neutral or wiggly hips → proceed; brief greeting or reinforce calm.</li>
            <li><strong>Yellow:</strong> higher or lower than usual, faster tempo, mild stiffness, mixed face → create space, curve approach, ask for a settle, reassess.</li>
            <li><strong>Red:</strong> high and tight &quot;flag&quot; or low tuck with freeze, hard eyes, weight forward or locked → end greeting, add distance, redirect to pattern game.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Doorbell Plan</h3>
          <ol className="list-decimal pl-5 space-y-2 mb-3">
            <li>Leash on or gate closed before the knock or bell becomes rehearsed chaos.</li>
            <li>Send to mat; pay for two slow breaths; tail should descend from tight to loose.</li>
            <li>Invite guest to ignore for 2–3 minutes; optional one-at-a-time greeting on cue.</li>
          </ol>

          <h3 className="text-lg font-semibold mt-2 mb-1">Kid Party Plan</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Dog rests behind a gate with a safe chew during peak noise.</li>
            <li>Reintroduce for short intervals; end on success before the tail tightens.</li>
            <li>Adults monitor &quot;no disturb while resting&quot; rule.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Parallel Walk Script</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Start at a distance where both tails stay loose.</li>
            <li>Walk in the same direction; gradually decrease space as bodies soften.</li>
            <li>Optional brief sniff and disengage if both dogs remain loose.</li>
          </ul>

          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm mt-3">
            <strong>Petunia tip:</strong> Add these checklists as pinned cards in Petunia. Share them with family and sitters so tail-language rules stay consistent.
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">Frequently Asked Questions</h2>

          <p className="mb-3">
            <strong>Does a wag always mean friendliness?</strong><br />
            No. It means arousal. Friendly wags are usually loose and mid-height with soft bodies. Tight, high, fast wags or low micro-wags can signal tension.
            Read the whole dog, not the tail alone.
          </p>

          <p className="mb-3">
            <strong>What is a &quot;helicopter&quot; tail?</strong><br />
            Large circular wags often show high enthusiasm and comfort, especially on family return. Pair with sit-for-greeting so joy equals manners.
          </p>

          <p className="mb-3">
            <strong>My dog has a docked or naturally short tail. How do I read signals?</strong><br />
            Focus on weight shift, eyes, ears, mouth, gait, and spine. Short tails still have carriage and stiffness cues, but the rest of the body carries more
            meaning. Build a photo/video baseline for <em>your</em> dog in calm contexts.
          </p>

          <p className="mb-3">
            <strong>Is left–right bias real?</strong><br />
            Studies suggest lateralization linked to emotional valence, and dogs may notice each other&#39;s asymmetry. Treat it as <em>one data point</em> among many, not
            a solitary diagnostic.
          </p>

          <p className="mb-3">
            <strong>What if my dog suddenly stops wagging?</strong><br />
            Consider pain, &quot;limber tail,&quot; neurologic issues, or stress. If the change is abrupt and persistent, or paired with movement changes, call your veterinarian.
          </p>

          <p className="mb-3">
            <strong>Can training change wags?</strong><br />
            Yes—by changing <em>contexts</em>. When we make greetings predictable, add distance to triggers, and reinforce disengagement, arousal drops and tails settle into
            looser, friendlier patterns.
          </p>

          <p className="text-xs text-gray-600">
            Educational content only. Always consult your veterinarian and a qualified behavior professional for individualized guidance.
          </p>
        </section>

        {/* Sources */}
        <section id="sources" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">📚 Sources (Selected)</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            <li>
              Quaranta A, Siniscalchi M, Vallortigara G. Asymmetric tail-wagging responses by dogs to different emotive stimuli. <em>Current Biology</em> (2007).
              <a href="https://www.sciencedirect.com/science/article/pii/S096098220700127X" target="_blank" rel="noopener noreferrer"> Study</a>
            </li>
            <li>
              Siniscalchi M, Sasso R, Pepe AM, Vallortigara G, Quaranta A. Dogs recognize the emotional state of other dogs by viewing tail wagging asymmetry.
              <em>Current Biology</em> (2013).
              <a href="https://www.cell.com/current-biology/fulltext/S0960-9822(13)01150-3" target="_blank" rel="noopener noreferrer"> Study</a>
            </li>
            <li>
              American Veterinary Society of Animal Behavior (AVSAB). Position statements on socialization and humane training.
              <a href="https://avsab.org/resources/position-statements/" target="_blank" rel="noopener noreferrer"> AVSAB</a>
            </li>
            <li>
              American Animal Hospital Association (AAHA). Canine life stage guidelines (communication and preventive frameworks).
              <a href="https://www.aaha.org/education/guidelines/canine-life-stage-guidelines/" target="_blank" rel="noopener noreferrer"> AAHA guideline hub</a>
            </li>
            <li>
              International Association of Animal Behavior Consultants (IAABC). Best practices for behavior and safety in homes with children.
              <a href="https://iaabc.org/" target="_blank" rel="noopener noreferrer"> IAABC</a>
            </li>
            <li>
              Merck Veterinary Manual (consumer and professional portals). Overviews on acute caudal myopathy (&quot;limber tail&quot;) and musculoskeletal pain.
              <a href="https://www.merckvetmanual.com/" target="_blank" rel="noopener noreferrer"> Merck Vet Manual</a>
            </li>
            <li>
              RSPCA &amp; ASPCA educational resources on dog body language (public guidance, safety with children).
              <a href="https://www.rspca.org.uk/adviceandwelfare/pets/dogs/behaviour/bodylanguage" target="_blank" rel="noopener noreferrer"> RSPCA</a> ·
              <a href="https://www.aspca.org/pet-care/dog-care/dog-behavior-tips" target="_blank" rel="noopener noreferrer"> ASPCA</a>
            </li>
          </ul>
          <p className="text-xs text-gray-600 mt-4">
            Links above are provided for general education and are not exhaustive. Always consult your local veterinary and behavior teams for personalized advice.
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
