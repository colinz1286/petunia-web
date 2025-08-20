'use client';

import Head from 'next/head';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function UnderstandingDogBodyLanguage() {
  const locale = useLocale();

  // --- Metadata ---------------------------------------------------------------
  const title = 'Understanding Dog Body Language: A Practical, Evidence-Informed Guide for Everyday Life';
  const date = 'August 6, 2025';
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
  };

  const description =
    'Learn to read your dog\'s signals with confidence—from happy wiggles and play bows to subtle stress cues like lip-licks, yawns, and whale eye. This long-form, evidence-informed guide blends veterinary behavior guidance (AAHA, AVSAB), DogFACS insights, and real-world scenarios so you can respond early, prevent conflicts, and build an even better relationship. Includes step-by-step play and greeting checklists, ladder-of-aggression context, and when to call a professional.';

  return (
    <>
      <Head>
        <title>{title} – Petunia Blog</title>
        <meta name="description" content={description} />
        <meta name="robots" content="index,follow" />
        <link
          rel="canonical"
          href={`https://www.petuniapets.com/${locale}/blog/understanding-dog-body-language`}
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
            <li><a href="#why-it-matters" className="underline hover:opacity-80">Why Body Language Matters</a></li>
            <li><a href="#how-to-read" className="underline hover:opacity-80">How To Read Dogs (Framework)</a></li>
            <li><a href="#signals" className="underline hover:opacity-80">Signals: Eyes, Ears, Mouth, Tail, Coat &amp; Posture</a></li>
            <li><a href="#wagging" className="underline hover:opacity-80">Tail Wagging: Direction, Height &amp; Speed</a></li>
            <li><a href="#play" className="underline hover:opacity-80">Play Bows &amp; Healthy Play</a></li>
            <li><a href="#happy" className="underline hover:opacity-80">Signs of Happiness &amp; Relaxation</a></li>
            <li><a href="#stress" className="underline hover:opacity-80">Early Stress &amp; Discomfort Signals</a></li>
            <li><a href="#ladder" className="underline hover:opacity-80">The Ladder of Aggression (Context, Not Destiny)</a></li>
            <li><a href="#scenarios" className="underline hover:opacity-80">Real Scenarios (Step-by-Step)</a></li>
            <li><a href="#individual-dogs" className="underline hover:opacity-80">Your Dog&rsquo;s Individual Language</a></li>
            <li><a href="#myths" className="underline hover:opacity-80">Common Myths &amp; Misreads</a></li>
            <li><a href="#kids" className="underline hover:opacity-80">Kids &amp; Dogs: Household Rules</a></li>
            <li><a href="#cooperative-care" className="underline hover:opacity-80">Cooperative Care &amp; Handling</a></li>
            <li><a href="#when-to-get-help" className="underline hover:opacity-80">When To Call a Professional</a></li>
            <li><a href="#practice" className="underline hover:opacity-80">Practice Plan &amp; Checklists</a></li>
            <li><a href="#faq" className="underline hover:opacity-80">FAQ</a></li>
            <li><a href="#sources" className="underline hover:opacity-80">Sources (Selected)</a></li>
          </ul>
        </nav>

        {/* TL;DR */}
        <section id="tldr" className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">Short Answer (TL;DR)</h2>
          <p className="mb-4">
            <strong>Dogs speak with their whole bodies.</strong> You will understand them faster if you read sequences of signals instead of single
            snapshots, compare what you see to each dog&rsquo;s personal baseline, and consider context (location, people, dogs, history).
            Early, subtle signs—like lip-licks with no food present, yawns when the dog is not tired, turning the head away, or a
            &ldquo;whale eye&rdquo; sliver of white—often appear <em>before</em> growls or snaps. Responding at the subtle stage prevents conflict and
            builds trust. Reward-based handling and low-stress techniques are the modern veterinary-behavior standard: they reduce fear,
            lower risk, and create cooperative patients and companions.
          </p>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Petunia tip:</strong> Create a shared &ldquo;Body Language Log&rdquo; in Petunia. Upload short clips from daily life (mealtimes, guests arriving,
            vet visits). Add captions like &ldquo;lip-licking at 0:07&rdquo; or &ldquo;turns away when child runs&rdquo; so the entire household responds the same way.
          </div>
        </section>

        {/* Why body language matters */}
        <section id="why-it-matters" className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">Why Body Language Matters (Health, Safety, and Relationship)</h2>
          <p className="mb-3">
            Behavior is not an add-on to health; it is part of health. Veterinary guidelines emphasize that reading normal and stress-related
            behaviors is a core skill for every team member and every family—because behavior issues are among the most common reasons
            for relinquishment and conflict. When owners learn to recognize early stress, they can change the environment, adjust their
            approach, and prevent escalation. In a clinic, that might mean treats, towel wraps, and calm handling. At home, it might mean
            giving space, stopping an interaction, or guiding kids to move more quietly.
          </p>
          <p className="mb-3">
            Body language is also <em>individual</em>. One dog&rsquo;s &ldquo;relaxed&rdquo; looks different than another&rsquo;s; one might carry the tail naturally higher,
            another lower; one may pant easily due to heat or excitement, another rarely. Instead of memorizing a single &ldquo;chart,&rdquo; you will
            get farther by learning patterns and <em>your</em> dog&rsquo;s baseline—then watching for deviations.
          </p>
          <p>
            Finally, reading the whole dog reduces misunderstandings. Tail wagging alone does not equal happiness; it can signal arousal,
            frustration, uncertainty, or even a warning. The <em>combination</em>—eyes, ears, mouth, posture, tail <em>and</em> movement over time—tells the
            story. Your goal is to notice early &ldquo;yellow lights&rdquo; and help your dog feel safe before a &ldquo;red light&rdquo; appears.
          </p>
        </section>

        {/* How to read: framework */}
        <section id="how-to-read" className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">How To Read Dogs: A Practical Framework</h2>
          <h3 className="text-lg font-semibold mt-2 mb-1">1) Start with baseline</h3>
          <p className="mb-3">
            Capture &ldquo;normal&rdquo; in calm settings: resting posture, ear carriage, tail height, blink rate, and how your dog looks when happily
            greeting familiar people. Save quick photos and short clips. Baseline helps you spot change under stress or excitement.
          </p>
          <h3 className="text-lg font-semibold mt-2 mb-1">2) Watch sequences, not snapshots</h3>
          <p className="mb-3">
            Body language unfolds like a sentence, not a single word. For example: head turn → lip-lick with no food → weight shift back →
            paw lift → freeze. One signal might be ambiguous; five in a row tell you to pause, give space, or end the interaction.
          </p>
          <h3 className="text-lg font-semibold mt-2 mb-1">3) Weigh context</h3>
          <p className="mb-3">
            Heat, pain, surfaces, novel sounds, social pressure, or simple excitement all shape what you see. A panting dog on a hot day is
            not the same as a panting dog in a quiet, cool room during grooming. Context prevents over- or under-calling signals.
          </p>
          <h3 className="text-lg font-semibold mt-2 mb-1">4) Assume honesty</h3>
          <p className="mb-3">
            Growls, freezes, and avoidant gestures are <em>information</em>, not disobedience. Modern veterinary behavior guidance discourages
            punishment of warning signals; punishing warnings teaches a dog to skip to more dangerous options. Instead, create distance,
            change the setting, and help the dog feel safe again.
          </p>
          <h3 className="text-lg font-semibold mt-2 mb-1">5) Add objective tools</h3>
          <p>
            Video review in slow motion, still photos, and simple checklists sharpen your eye. If you enjoy detail, explore DogFACS (the
            Dog Facial Action Coding System), which catalogs specific facial muscle movements so observers can score expressions in a
            standardized way. You do not need to memorize every code—just know that objective systems exist and that video helps.
          </p>
        </section>

        {/* Signals */}
        <section id="signals" className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">Signals: Eyes, Ears, Mouth, Tail, Coat, Posture &amp; Movement</h2>

          <h3 className="text-lg font-semibold mt-4 mb-1">Eyes</h3>
          <p className="mb-3">
            Soft, almond-shaped eyes with normal blinks usually signal comfort. Rapid scanning, a hard stare, or pupils that look larger
            than usual can indicate arousal. A sideways glance that reveals a crescent of white—often nicknamed &ldquo;whale eye&rdquo;—commonly
            accompanies discomfort in tight spaces, guarding contexts, or when a person leans into a dog&rsquo;s face. Blinks can slow during a
            freeze and quicken as stress rises; squinting may reflect pain or unease. Always consider lighting and medical factors.
          </p>

          <h3 className="text-lg font-semibold mt-4 mb-1">Ears</h3>
          <p className="mb-3">
            Ear position varies by breed. In general, ears that move forward with a tall posture can reflect interest or assertiveness, while
            ears drawn back with weight shifted away often reflect caution or appeasement. Sideways or &ldquo;airplane&rdquo; ears may appear with
            uncertainty. Note natural carriage: a Malinois&rsquo;s neutral ear set differs from a floppy-eared Golden Retriever&rsquo;s.
          </p>

          <h3 className="text-lg font-semibold mt-4 mb-1">Mouth</h3>
          <p className="mb-3">
            A loose, open mouth with a relaxed tongue is common in happy, panting dogs at play. Stress-related tongue flicks (quick lip-licks
            when no food is present), yawns when the dog is not tired, closed tight lips, or teeth clacking during a freeze can signal rising
            tension. Drooling in non-food contexts, or sudden refusal of treats, can also indicate stress or nausea. As always, rule out heat,
            motion sickness, and pain.
          </p>

          <h3 className="text-lg font-semibold mt-4 mb-1">Tail &amp; Tail-set</h3>
          <p className="mb-3">
            Tail height, stiffness, and sweep width convey information. A neutral, loose wag at mid-height is common in casual greetings.
            A high, tight, fast wag can accompany high arousal, alertness, or conflict. A low tail or tuck may reflect fear, uncertainty, or
            chill. Short-tailed or docked dogs require extra attention to <em>whole-body</em> movement and muscular tension to avoid misreads.
          </p>

          <h3 className="text-lg font-semibold mt-4 mb-1">Coat &amp; Hackles (Piloerection)</h3>
          <p className="mb-3">
            Raised hackles often reflect arousal—excitement, fear, or conflict—not automatically aggression. Consider the whole sequence:
            is the dog buoyant and wiggly (excitement) or stiff and still (concern)? Hackles alone cannot tell you which one.
          </p>

          <h3 className="text-lg font-semibold mt-4 mb-1">Posture &amp; Weight Shift</h3>
          <p className="mb-3">
            Proud, tall posture with forward weight shift telegraphs push and intensity. A lowered body, weight shifted back, and a paw lift
            often signal uncertainty. A <strong>freeze</strong>—stillness with muscles tight, mouth closed, eyes hard or darting—is a red light. Treat freezes
            as serious and quickly create distance or end the interaction.
          </p>

          <h3 className="text-lg font-semibold mt-4 mb-1">Movement Patterns</h3>
          <p>
            Curved approaches are polite; direct, fast lines can be confrontational. Shake-offs (like after a bath) often appear as &ldquo;reset&rdquo;
            behaviors after stress or excitement. Sniffing the ground can be a genuine scent investigation <em>or</em> a displacement activity the dog
            uses to de-escalate social pressure. The meaning comes from the sequence and context.
          </p>
        </section>

        {/* Tail wagging */}
        <section id="wagging" className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">Tail Wagging: Direction, Height &amp; Speed (It Is Not Always &ldquo;Happy&rdquo;)</h2>
          <p className="mb-3">
            Tail wagging is information about <em>arousal</em> and <em>valence</em> together with posture, eyes, and mouth. Dogs can even show left-right
            asymmetries related to emotional state; research has documented that dogs both <em>produce</em> and <em>perceive</em> asymmetric wagging in social
            contexts. Treat wagging as one slice of a larger picture rather than a simple &ldquo;yes/no&rdquo; about mood.
          </p>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>Height:</strong> higher carriage often accompanies high arousal; lower carriage can reflect uncertainty or fear.</li>
            <li><strong>Speed:</strong> quick, tight wags pair with tension; wide, sweeping wags pair with loose bodies and soft faces.</li>
            <li><strong>Direction:</strong> asymmetric biases have been observed in research; do not over-interpret in isolation.</li>
          </ul>
          <p>
            Bottom line: read wagging <em>with</em> facial tension, mouth shape, weight shift, and movement. It is the sentence, not a single word.
          </p>
        </section>

        {/* Play */}
        <section id="play" className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">Play Bows &amp; Healthy Play: How Dogs Say &ldquo;Let&rsquo;s Go!&rdquo;</h2>
          <p className="mb-3">
            The iconic play bow—front end lowered, hindquarters up—acts like punctuation in dog communication. In classic ethology work and
            more recent studies, bows bracket intense actions (like mouthing or chase) to clarify playful intent. Good play shows role reversals,
            pauses, and mutual re-engagement: the chaser becomes the chased, the dog doing the &ldquo;pin&rdquo; backs off, both dogs return by choice.
            Play can be loud, and that is often fine—what matters is that both dogs regularly opt back in with loose bodies and easy movement.
          </p>
          <p className="mb-3">
            Red flags include one dog consistently pressing while the other repeatedly avoids, hides behind people, or uses the environment
            to escape. Multiple bows cannot magically convert pressure into play. When in doubt, call a cheerful timeout and separate to reset.
          </p>
          <p>
            Puppies learn rules through these games, which is why structured, well-matched playdates are gold. Record short clips and practice
            labeling: &ldquo;bow,&rdquo; &ldquo;pause,&rdquo; &ldquo;re-engage.&rdquo; In a few sessions, your eye will catch patterns without effort.
          </p>
        </section>

        {/* Happy signs */}
        <section id="happy" className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">Signs a Dog Is Happy, Comfortable, and Engaged</h2>
          <ul className="list-disc pl-5 space-y-2 mb-3">
            <li><strong>Soft eyes</strong> with a gentle blink rhythm; face muscles loose.</li>
            <li><strong>Loose mouth</strong> that opens and closes easily; tongue resting naturally.</li>
            <li><strong>Body wiggle</strong> that starts at the shoulders and carries through to the hips; weight shifts are springy, not stiff.</li>
            <li><strong>Curved approach</strong> with self-interrupted check-ins; the dog loops back willingly.</li>
            <li><strong>Play bows</strong>, shake-offs between play bouts, and voluntary returns to the game.</li>
            <li><strong>Exploration</strong> with easy sniffing, then relaxed rest when finished.</li>
          </ul>
          <p>
            A happy dog does not need to be animated every second. Many happy moments look boring: a nap in sun, a long exhale beside you,
            a calm watch at the window. If the face is soft, breathing regular, and posture neutral, rest is not disengagement—it is contentment.
          </p>
        </section>

        {/* Stress signs */}
        <section id="stress" className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">Early Stress &amp; Discomfort Signals (Catch These First)</h2>
          <p className="mb-3">
            Subtle cues are where prevention lives. Look for tongue flicks with no food, yawns when not tired, turning the head or whole body
            away, paw lifts, sniffing that appears &ldquo;out of nowhere,&rdquo; sudden shake-offs after social pressure, &ldquo;whale eye,&rdquo; a low tail or tail tuck,
            and refusal of previously loved treats. In combination, these are yellow lights that say: &ldquo;I need space or a change.&rdquo;
          </p>
          <p className="mb-3">
            For many families, simply pausing the interaction, adding distance, and asking for a simple known behavior (then paying well) restores
            comfort. If the situation continues to create conflict—grooming, nail trims, restraint, or a crowded room—make a new plan instead of
            pushing through. Humane handling and cooperative care can turn &ldquo;no&rdquo; into &ldquo;yes&rdquo; without force.
          </p>
          <p>
            Remember medical context: nausea, pain, heat, and respiratory disease can mimic or amplify stress signals. If a dog&rsquo;s language changes
            suddenly and you cannot explain it by environment, check in with your veterinarian.
          </p>
        </section>

        {/* Ladder of Aggression */}
        <section id="ladder" className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">The Ladder of Aggression: A Useful Teaching Model—With Caveats</h2>
          <p className="mb-3">
            Many behavior professionals use a &ldquo;ladder&rdquo; illustration to show how dogs typically move from subtle appeasement and avoidance signals
            toward overt warnings when stress escalates. Lower rungs include turning the head away, blinking, yawning, and lip-licks; middle rungs
            include increased stiffness, hard stare, and growling; upper rungs include snaps and bites. The point is not inevitability but <em>prevention</em>:
            if you act when you see early rungs, dogs rarely need to climb.
          </p>
          <p className="mb-3">
            Caveats matter. Not every dog follows the same order; some skip steps; some display few early signals, especially if punished in the past
            for growling. Use the ladder as a teaching picture, not a rigid rule. And treat growls as valuable information—&ldquo;I need space&rdquo;—not as
            misbehavior to squash.
          </p>
          <p>
            If a situation repeatedly pushes your dog up the ladder, change the situation: different gear, different routine, different room, more
            distance, more pay, or professional support. The goal is not to prove a point; it is to help your dog feel safe and cooperative.
          </p>
        </section>

        {/* Scenarios */}
        <section id="scenarios" className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">Real Scenarios (Step-by-Step)</h2>

          <h3 className="text-lg font-semibold mt-2 mb-1">1) Greeting a Leashed Dog on a Walk</h3>
          <p className="mb-3">
            Leashes restrict choice and can add tension. If a stranger asks to greet, scan: soft eyes, loose body, curved approach, easy tail movement?
            Or weight shifted back, head turns, tongue flicks, and a tight mouth? If you see yellow lights, decline the greeting with a smile:
            &ldquo;We&rsquo;re training today—thank you!&rdquo; If you proceed, keep it brief, side-on, and give the dog an escape route. Feed a few treats as the
            person steps away so the last moment &ldquo;tastes good.&rdquo;
          </p>

          <h3 className="text-lg font-semibold mt-2 mb-1">2) Kids &amp; Dogs at Home</h3>
          <p className="mb-3">
            The most dangerous pattern is a dog repeatedly trying to disengage while a child keeps closing distance. Early signals—turning away,
            walking away, climbing onto furniture to avoid, lip-licks, yawns—must end the interaction immediately. Replace hugs with side-by-side
            petting, &ldquo;touch&rdquo; games, and treat tosses. Adults model quiet approaches and end sessions while the dog is still relaxed.
          </p>

          <h3 className="text-lg font-semibold mt-2 mb-1">3) Dog Park Gate Bottlenecks</h3>
          <p className="mb-3">
            Tight gates funnel dogs into face-to-face contact. Wait outside until space clears. Inside, look for curved approaches, bouncing arcs,
            play bows, and frequent role reversals. If one dog crowds a newcomer who is stiff, low, or scanning with whale eye, intervene. A cheery
            &ldquo;Let&rsquo;s give them room!&rdquo; plus a cookie scatter can reset the moment.
          </p>

          <h3 className="text-lg font-semibold mt-2 mb-1">4) Multi-Dog Play at Home</h3>
          <p className="mb-3">
            Healthy play has pauses. If two dogs stack on a third or a lightweight dog stops opting in, split briefly. Teach &ldquo;switch&rdquo; games so each
            dog takes turns possessing the toy. Video helps here: slow motion reveals whether the smaller dog truly likes the wrestling or is merely
            coping. After a short water break, re-start with a chase game that encourages arcs instead of body pressure.
          </p>

          <h3 className="text-lg font-semibold mt-2 mb-1">5) Grooming &amp; Nail Trims</h3>
          <p className="mb-3">
            For many dogs, grooming is all about predictability and consent. Watch for licking, yawning, paw lifts, turning away, or freezing as you
            touch paws or ears. Break the task into micro-steps with payment after each step: touch paw → treat; hold paw → treat; clip one nail →
            treat and release. If stress rises, stop and regroup. Teach a chin-rest behavior to signal &ldquo;ready&rdquo; and respect a head lift as &ldquo;not ready.&rdquo;
          </p>

          <h3 className="text-lg font-semibold mt-2 mb-1">6) Resource Guarding Moments</h3>
          <p className="mb-3">
            Hard stillness, low growl, hovering over a bowl, cornering with a stiff neck—these are red lights. Back away, toss high-value food
            <em>away</em> from the item, and remove pressure. Long term, work with a qualified professional on &ldquo;trade&rdquo; and &ldquo;add value&rdquo; protocols instead
            of confrontation. Do not punish warnings; they are how a dog keeps everyone safe.
          </p>

          <h3 className="text-lg font-semibold mt-2 mb-1">7) Greetings Inside Your Home</h3>
          <p className="mb-3">
            Doorways compress space and spike arousal. Park a treat station six to eight feet back. Ask guests to ignore the dog on entry—no
            reaching, no leaning, no direct eyes. When the dog is loose and wiggly, invite a side-on pet for two seconds, then stop and check:
            does the dog re-engage? If yes, another two seconds. If the dog pauses, sniffs away, or glances off with tension, end the attempt kindly.
          </p>

          <h3 className="text-lg font-semibold mt-2 mb-1">8) On-Leash Reactions to Other Dogs</h3>
          <p className="mb-3">
            Leash frustration looks loud, but the body language is clear: forward weight, tight face, fast breathing, and difficulty disengaging.
            Increase distance first. Then play &ldquo;Look at That&rdquo; with food: mark when your dog glances at the other dog and feed for turning back to
            you. Relief comes from space; learning comes from reinforcing the turn-back.
          </p>

          <h3 className="text-lg font-semibold mt-2 mb-1">9) Vet Visits &amp; Handling</h3>
          <p className="mb-3">
            Waiting rooms can be overwhelming. Choose car check-in or a quiet corner. Pack irresistible food. Advocate for low-stress handling,
            treats during exams, and breaks. If your dog freezes, pants hard in a cool room, or shows whale eye as someone leans in, speak up:
            &ldquo;Let&rsquo;s pause—she&rsquo;d do better with a towel wrap and treats.&rdquo; Reward-based handling is not indulgence—it is evidence-based patient care.
          </p>

          <h3 className="text-lg font-semibold mt-2 mb-1">10) Noise Events &amp; Fireworks</h3>
          <p className="mb-3">
            Look for scanning, trembling, panting, salivating, pacing, and attempts to hide. Provide a dark, muffled retreat with white noise.
            Feed chews or smear food on a lick mat <em>before</em> peak noise so eating is still possible. If panic persists, ask your veterinarian about
            medical help; fear does not improve by &ldquo;flooding&rdquo; through it.
          </p>

          <h3 className="text-lg font-semibold mt-2 mb-1">11) Senior Dogs</h3>
          <p className="mb-3">
            Subtle signs—hesitation at stairs, paw placement errors, new reluctance to jump—may reflect vision changes, arthritis, or cognitive
            decline. Add traction runners, contrast strips on steps, and predictable paths. Use scent and tactile cues along with visual ones.
            Seniors thrive on slower, gentler rituals with lots of notice and choice.
          </p>

          <h3 className="text-lg font-semibold mt-2 mb-1">12) Boarding &amp; Daycare Check-In</h3>
          <p className="mb-3">
            Novel kennels and crowds are demanding. At check-in, a dog who is happy to stay shows curiosity, loose movement, and easy treat taking.
            Yellow-light dogs scan, lick, and hesitate. Ask staff how they stage intros (small groups, matched play styles), how they separate dogs who
            need breaks, and how they report stress (photos, notes, &ldquo;reset&rdquo; plans). Choose facilities that treat behavior as health and communicate daily.
          </p>
        </section>

        {/* Individual dogs */}
        <section id="individual-dogs" className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">Your Dog&rsquo;s Individual Language (Baseline Beats Stereotypes)</h2>
          <p className="mb-3">
            The best readers of dogs are great readers of <em>their</em> dog. Start a short baseline record: morning greeting video, play clip, rest clip,
            and a quiet evening petting clip. Note tail set, ear carriage, eye shape, mouth shape, and movement style when calm. Then, when stress
            appears, you have a specific reference to compare against.
          </p>
          <p className="mb-3">
            Remember morphology. Docked or naturally short tails reduce tail signals; cropped ears reduce ear expressiveness; heavy coats conceal
            piloerection; brachycephalic breeds have different facial landmarks. This is why whole-body reading matters and why extended observation
            beats snap judgments.
          </p>
          <p>
            Finally, history matters. Dogs punished for growling may stop warning and &ldquo;go silent.&rdquo; For these dogs, micro-signals like a still mouth,
            a hard stare, or a breath hold are especially significant. When in doubt, assume the dog is telling the truth and make it easier.
          </p>
        </section>

        {/* Myths */}
        <section id="myths" className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">Common Myths &amp; Misreads (And Better Reframes)</h2>
          <p className="mb-3">
            <strong>Myth: &ldquo;Tail wagging means happy.&rdquo;</strong> Reality: wagging means arousal; combine with posture, eyes, and mouth before concluding.
          </p>
          <p className="mb-3">
            <strong>Myth: &ldquo;Growling is bad; stop it.&rdquo;</strong> Reality: growling is information. Thank the dog for the warning, create space, and change
            the picture. Removing warnings increases risk.
          </p>
          <p className="mb-3">
            <strong>Myth: &ldquo;He knows he did wrong—the guilty look proves it.&rdquo;</strong> Reality: the &ldquo;guilty look&rdquo; is a cluster of appeasement signals to
            human scolding and does not prove comprehension of a past event. Prevent access, manage the environment, train alternatives.
          </p>
          <p>
            <strong>Myth: &ldquo;Dominance&rdquo; explains everything.</strong> Reality: modern guidelines discourage trainer explanations that rely on dominance
            narratives and confrontational methods. Focus on teachable skills, environmental design, and humane reinforcement.
          </p>
        </section>

        {/* Kids & dogs */}
        <section id="kids" className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">Kids &amp; Dogs: Five Household Rules</h2>
          <ul className="list-disc pl-5 space-y-2 mb-3">
            <li><strong>Let sleeping dogs lie.</strong> No touching dogs on beds, in crates, or when hiding.</li>
            <li><strong>No hugs or leaning.</strong> Most dogs prefer side-by-side petting; no face-to-face squeezes.</li>
            <li><strong>Ask first.</strong> Adults ask, then children wait for the dog to approach; if the dog stays away, that is a &ldquo;no.&rdquo;</li>
            <li><strong>Two-second rule.</strong> Pet briefly, stop, and invite the dog to re-engage. If the dog does not lean in, end the session.</li>
            <li><strong>Adults supervise closely.</strong> If subtle stress appears, end the interaction gracefully and redirect to a game both enjoy.</li>
          </ul>
          <p>
            Print these on the fridge. Consistent rules are the fastest way to turn knowledge into safety.
          </p>
        </section>

        {/* Cooperative care */}
        <section id="cooperative-care" className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">Cooperative Care &amp; Handling: Turning &ldquo;No&rdquo; Into &ldquo;Yes&rdquo;</h2>
          <p className="mb-3">
            Cooperative care teaches dogs to opt in. A chin-rest on a mat says &ldquo;ready&rdquo;; lifting the head says &ldquo;pause.&rdquo; Start with easy setups
            and high-value reinforcers. Pair handling (ear look, paw hold, body brush) with pay, and always release before tension spikes.
            Over time, the dog learns that consent keeps the session predictable and safe.
          </p>
          <p className="mb-3">
            Your clinic can help here. Veterinary behavior guidance endorses low-stress handling, avoidance of forced restraint when possible,
            and referral to behavior professionals for complex cases. The result is safer patients, safer teams, and better medicine.
          </p>
          <p>
            Keep notes in Petunia: which positions your dog prefers, which tools are easiest, how long each session lasts, and which treats keep
            the &ldquo;yes&rdquo; strong. Share with groomers, sitters, and daycare so everyone speaks the same language.
          </p>
        </section>

        {/* When to get help */}
        <section id="when-to-get-help" className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">When To Call a Professional (And Who To Call)</h2>
          <p className="mb-3">
            Call sooner rather than later if you see repeated freezing, growling, snapping, biting, resource guarding, self-injury, panic, or
            distress that does not improve with basic changes. Your team may include your primary veterinarian, a board-certified veterinary
            behaviorist (DACVB), and a certified behavior consultant or trainer who uses humane, evidence-based methods.
          </p>
          <p>
            Directories to start with: DACVB (veterinary behaviorists), AVSAB member directory (veterinary behavior community), and IAABC
            (credentialed behavior consultants). Many offer teleconsults in coordination with your veterinarian.
          </p>
        </section>

        {/* Practice plan */}
        <section id="practice" className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">Practice Plan &amp; Checklists (Print This)</h2>

          <h3 className="text-lg font-semibold mt-2 mb-1">Daily Two-Minute Scan</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Morning greeting: eyes, ears, tail, posture—does today look like baseline?</li>
            <li>Meals: any hesitation, lip-licks, or guarding? Adjust setup if needed.</li>
            <li>Walks: note reactions to dogs, people, bikes. Add distance when yellow lights appear.</li>
            <li>Evening: soft face and easy rest? If not, ask why: pain, travel, schedule change?</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Play Health Checklist</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Role reversals present; both dogs re-engage by choice.</li>
            <li>Regular pauses; shake-offs or bows punctuate intensity.</li>
            <li>No pinning that persists; no cornering; no harassing a dog who is avoiding.</li>
            <li>Interruptions end with both dogs relaxed, not just quiet.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Greeting Script</h3>
          <ol className="list-decimal pl-5 space-y-2 mb-3">
            <li>Ask the dog&rsquo;s person first; if they say &ldquo;training&rdquo; or &ldquo;not today,&rdquo; smile and move on.</li>
            <li>Stand side-on, avoid looming or reaching over the head.</li>
            <li>Offer the back of your hand low and neutral; if the dog stays away, that is the answer.</li>
            <li>Two-second pet, then stop; invite re-engagement. No re-engagement means you are done.</li>
          </ol>

          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Petunia tip:</strong> Pin these checklists in your Petunia profile and share with sitters and family. Consistency is what turns knowledge
            into a safer, calmer routine.
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">Frequently Asked Questions</h2>

          <p className="mb-3">
            <strong>Does tail wagging always mean a dog is happy?</strong><br />
            No. Treat wagging as arousal information; combine with eyes, mouth, posture, and movement. Directional asymmetries exist but should
            not be over-interpreted outside full context.
          </p>

          <p className="mb-3">
            <strong>Is it wrong to correct a growl?</strong><br />
            Yes—do not punish warnings. Growls are safety valves. Increase distance, change the situation, and help the dog feel safe instead.
          </p>

          <p className="mb-3">
            <strong>What about the &ldquo;guilty look&rdquo;?</strong><br />
            Appeasement signals to scolding are not proof of understanding past actions. Prevent access and train alternatives rather than relying
            on post-hoc interpretations.
          </p>

          <p className="mb-3">
            <strong>Should I use food during stressful events?</strong><br />
            Yes, when the dog can take it—food both changes how a dog feels and pays for cooperation. If the dog will not eat, increase distance
            or ask your vet about additional support.
          </p>

          <p>
            <strong>How can I get better at reading my dog?</strong><br />
            Film 15 seconds per day and review in slow motion. Label one or two signals. In a month, you will notice patterns automatically.
          </p>
        </section>

        {/* Sources */}
        <section id="sources" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">📚 Sources (Selected)</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            <li>
              American Animal Hospital Association (AAHA). <em>2015 Canine and Feline Behavior Management Guidelines</em>.
              <a href="https://www.aaha.org/resources/2015-aaha-canine-and-feline-behavior-management-guidelines/behavior-management-home-2/" target="_blank" rel="noopener noreferrer"> Summary</a> |
              <a href="https://www.aaha.org/wp-content/uploads/globalassets/02-guidelines/behavior-management/2015_aaha_canine_and_feline_behavior_management_guidelines_final.pdf" target="_blank" rel="noopener noreferrer"> PDF</a>
            </li>
            <li>
              American Veterinary Society of Animal Behavior (AVSAB). <em>Position Statement on Humane Dog Training</em> (2021).
              <a href="https://avsab.org/wp-content/uploads/2021/08/AVSAB-Humane-Dog-Training-Position-Statement-2021.pdf" target="_blank" rel="noopener noreferrer"> PDF</a> |
              <a href="https://avsab.org/resources/position-statements/" target="_blank" rel="noopener noreferrer"> Position statements</a>
            </li>
            <li>
              DogFACS (Dog Facial Action Coding System): Waller BM, Caeiro CC, Peirce K, Burrows AM, Kaminski J (2013). Objective coding of canine facial movements.
              <a href="https://pure.port.ac.uk/ws/files/7985474/Human_attention_affects_facial.pdf" target="_blank" rel="noopener noreferrer"> Related methods paper</a> |
              <a href="https://www.semanticscholar.org/paper/DogFACS%3A-the-dog-facial-action-coding-system-Waller-Caeiro/8ba6d22adfd3efb1fe3b6a1d65095d3863e704fc" target="_blank" rel="noopener noreferrer"> Overview</a>
            </li>
            <li>
              Bremhorst A et&nbsp;al. (2021). Evaluating the accuracy of facial expressions as emotion indicators in dogs.
              <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC8904359/" target="_blank" rel="noopener noreferrer"> Open access</a>
            </li>
            <li>
              Bekoff M. (2001–2015). Ethological work on play bows and social play in canids.
              <a href="https://www.wellbeingintlstudiesrepository.org/cgi/viewcontent.cgi?article=1026&context=acwp_sata" target="_blank" rel="noopener noreferrer"> Early overview</a> |
              <a href="https://www.cell.com/current-biology/pdf/S0960-9822%2814%2901122-1.pdf" target="_blank" rel="noopener noreferrer"> Current Biology primer</a>
            </li>
            <li>
              Byosiere SE et&nbsp;al. (2016). The function of play bows in adult pet dogs (Applied Animal Behaviour Science).
              <a href="https://www.sciencedirect.com/science/article/abs/pii/S0376635716300286" target="_blank" rel="noopener noreferrer"> Abstract</a>
            </li>
            <li>
              Siniscalchi M et&nbsp;al. (2013). Asymmetric tail wagging and dogs&rsquo; emotional responses (Current Biology).
              <a href="https://www.cell.com/fulltext/S0960-9822%2813%2901143-3" target="_blank" rel="noopener noreferrer"> Article</a> |
              <a href="https://www.cell.com/cms/10.1016/j.cub.2013.09.027/attachment/af2b22fa-a727-48d3-8e8e-f2bae8126915/mmc1.pdf" target="_blank" rel="noopener noreferrer"> Supplemental</a>
            </li>
            <li>
              Sophia Yin, DVM, MS. <em>Body Language of Fear in Dogs</em> poster (educational resource).
              <a href="https://www.multcopets.org/sites/default/files/2021-05/Body-Language-of-Fear-in-Dogs-Poster.pdf" target="_blank" rel="noopener noreferrer"> PDF</a>
            </li>
            <li>
              Kendal Shepherd, MRCVS. <em>The Canine Ladder of Aggression</em> (client handout; teaching model).
              <a href="https://www.allpetseducationandtraining.com.au/uploads/2/7/9/4/27949797/ladder_of_aggression.pdf" target="_blank" rel="noopener noreferrer"> PDF</a>
            </li>
            <li>
              Professional help directories:
              <a href="https://www.dacvb.org/search/custom.asp?id=5985" target="_blank" rel="noopener noreferrer"> DACVB (veterinary behaviorists)</a> |
              <a href="https://avsab.org/directory/" target="_blank" rel="noopener noreferrer"> AVSAB directory</a> |
              <a href="https://iaabc.org/certs/members" target="_blank" rel="noopener noreferrer"> IAABC consultants</a>
            </li>
          </ul>
          <p className="text-xs text-gray-600 mt-4">
            Educational content only. Always consult your veterinarian or a qualified behavior professional for individualized advice.
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
