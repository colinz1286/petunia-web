'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function HowToTrainMyDogToSit() {
  const locale = useLocale();

  // --- Metadata ---------------------------------------------------------------
  const title =
    'How to Train My Dog to Sit: Gentle Methods, Age Readiness, Household Consistency, Breed Tips, Training Aids, and Troubleshooting';
  const date = 'August 23, 2025';
  const categories = ['owner', 'train'] as const;

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
            <li><a href="#why-sit" className="underline hover:opacity-80">Why Teach Sit?</a></li>
            <li><a href="#readiness" className="underline hover:opacity-80">Age &amp; Readiness Checks</a></li>
            <li><a href="#equipment" className="underline hover:opacity-80">Training Aids &amp; Setup</a></li>
            <li><a href="#methods" className="underline hover:opacity-80">Two Core Methods</a></li>
            <li><a href="#add-cues" className="underline hover:opacity-80">Adding Cues &amp; Hand Signals</a></li>
            <li><a href="#3ds" className="underline hover:opacity-80">Proofing: Distance, Duration, Distraction</a></li>
            <li><a href="#household" className="underline hover:opacity-80">Multi-Person Consistency</a></li>
            <li><a href="#breed-notes" className="underline hover:opacity-80">Breed &amp; Individual Differences</a></li>
            <li><a href="#troubleshooting" className="underline hover:opacity-80">Troubleshooting &amp; Gentle Fixes</a></li>
            <li><a href="#plans" className="underline hover:opacity-80">14-Day Session Plan</a></li>
            <li><a href="#life" className="underline hover:opacity-80">Sit in Real Life</a></li>
            <li><a href="#books" className="underline hover:opacity-80">Recommended Books &amp; Resources</a></li>
            <li><a href="#faq" className="underline hover:opacity-80">FAQ</a></li>
            <li><a href="#sources" className="underline hover:opacity-80">Sources (Selected)</a></li>
          </ul>
        </nav>

        {/* TL;DR */}
        <section id="tldr" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Short Answer (TL;DR)</h2>
          <p className="mb-4">
            Teaching sit is about patience, clarity, and kindness. Start when your dog can focus for 30–60 seconds, train in tiny sessions, and reward the exact moment hips touch the floor. Use a simple lure or capture the behavior, add the word &quot;sit&quot; after your dog is already doing it reliably, and keep everyone in the household using the same cue and reward pattern. Avoid pushing hips, scolding, or repeating cues; instead, make it easy to win. If your dog struggles, check comfort (hips, knees, surfaces), reduce distractions, and break the skill into smaller steps. Celebrate small wins and keep sessions short and fun.
          </p>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Petunia tip:</strong> One minute, three times a day beats a single long session. End while it&#39;s going well so your dog looks forward to next time.
          </div>
        </section>

        {/* Why Sit */}
        <section id="why-sit" className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">Why Teach Sit?</h2>
          <p className="mb-3">
            Sit is a foundation behavior that teaches impulse control, gives your dog a polite default in busy moments, and helps families manage greetings, meals, doors, and leashes with less chaos. It is also a low-impact posture for most dogs when taught without pressure. Because it is easy to mark and reward, sit builds your training rhythm: get attention, ask, mark the success, and pay promptly.
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Safety:</strong> A reliable sit at doorways, curbs, and car doors prevents risky lunges and makes leashing calmer.</li>
            <li><strong>Politeness:</strong> Guests see calm behavior instead of jumping; kids can practice a simple, safe cue with supervision.</li>
            <li><strong>Confidence:</strong> Clear wins reduce frustration. Dogs who earn rewards predictably tend to offer more good choices.</li>
          </ul>
        </section>

        {/* Readiness */}
        <section id="readiness" className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">Age &amp; Readiness Checks: When to Start</h2>
          <p className="mb-3">
            Most puppies can begin learning sit as early as 8–10 weeks, but readiness is less about the calendar and more about focus, comfort, and environment. Seniors and adolescents can learn at any age; just scale sessions to their bodies and attention spans.
          </p>
          <h3 className="text-lg font-semibold mt-2 mb-1">A simple readiness checklist</h3>
          <ul className="list-disc pl-5 space-y-2 mb-3">
            <li><strong>Focus window:</strong> your dog can take treats and look at you for 30–60 seconds without leaving.</li>
            <li><strong>Comfort:</strong> no flinching when hips bend; no slipping on floors; no obvious pain on rising.</li>
            <li><strong>Environment:</strong> minimal distractions; a quiet spot with traction (mat or rug) and room to move.</li>
            <li><strong>Health:</strong> if you suspect joint or hip discomfort, ask your veterinary team before doing repeated sits.</li>
          </ul>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Petunia tip:</strong> If your dog avoids sitting on slick floors, do not push. Train on a yoga mat or carpet and reward heavily for choosing the mat.
          </div>
        </section>

        {/* Equipment */}
        <section id="equipment" className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">Training Aids &amp; Setup: What Helps (and What to Skip)</h2>
          <p className="mb-3">
            You do not need fancy gear. What you need is clarity and timing. These simple tools make that easier and keep sessions kind and efficient.
          </p>
          <ul className="list-disc pl-5 space-y-2 mb-3">
            <li><strong>Treats:</strong> pea-sized, soft rewards your dog loves. Variety keeps motivation high.</li>
            <li><strong>Marker:</strong> a clicker or a consistent marker word like &quot;yes.&quot; Mark the exact success moment.</li>
            <li><strong>Treat pouch:</strong> speeds delivery so your dog understands what earned the reward.</li>
            <li><strong>Mat or rug:</strong> traction reduces slips and builds a &quot;training spot&quot; habit.</li>
            <li><strong>Harness &amp; short leash (optional):</strong> helps in busy areas but avoid leash pressure to force positions.</li>
          </ul>
          <p className="mb-3">
            Skip harsh or aversive tools for teaching sit. You do not need prong, choke, or shock devices; sit responds beautifully to positive reinforcement, and comfort builds trust.
          </p>
        </section>

        {/* Methods */}
        <section id="methods" className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">Two Core Methods: Lure &amp; Reward vs. Shaping/Capturing</h2>

          <h3 className="text-lg font-semibold mt-2 mb-1">Method 1: Lure &amp; Reward (fastest for most dogs)</h3>
          <ol className="list-decimal pl-5 space-y-2 mb-3">
            <li><strong>Start position:</strong> dog standing on a mat. Hold a treat at nose level.</li>
            <li><strong>Lure up &amp; back:</strong> move the treat slowly up and slightly over the head, like drawing a small arc. Do not push the head; let your dog follow the treat.</li>
            <li><strong>Mark the moment:</strong> as the hips touch the floor, click or say &quot;yes&quot; once. Then deliver the treat to your dog in position.</li>
            <li><strong>Reset:</strong> toss a second treat a step away to stand the dog up. Repeat 5–8 reps.</li>
            <li><strong>Fade the lure:</strong> after 1–2 short sessions, switch to an empty hand motion; treat appears from the pouch after the mark.</li>
          </ol>
          <p className="mb-3">
            Common pitfall: moving your hand too high or too fast. If your dog jumps, lower the arc and slow it down. Keep the chin level, not sky-high.
          </p>

          <h3 className="text-lg font-semibold mt-2 mb-1">Method 2: Capturing/Shaping (great for thoughtful or shy dogs)</h3>
          <ol className="list-decimal pl-5 space-y-2 mb-3">
            <li><strong>Observe:</strong> many dogs naturally sit before meals or when you pause. Wait for a spontaneous sit.</li>
            <li><strong>Mark &amp; pay:</strong> the instant hips meet floor, mark and reward. Keep your body still so your dog learns that sitting makes good things happen.</li>
            <li><strong>Shape the picture:</strong> if sits are rare, mark smaller steps: a weight shift back, a partial bend, then full sit. Pay generously for progress.</li>
            <li><strong>Add structure:</strong> once your dog offers several sits in a few minutes, begin the cue process below.</li>
          </ol>
          <p className="mb-3">
            Capturing is low pressure and perfect for dogs who get worried by hands near their faces or who freeze when lured. It requires patience, but the sit becomes very strong because the dog discovers it.
          </p>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Petunia tip:</strong> Whether you lure or capture, pay in position. Feed two or three small treats while your dog remains seated so the posture itself becomes rewarding.
          </div>
        </section>

        {/* Add cues */}
        <section id="add-cues" className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">Adding the Verbal Cue &amp; Hand Signal</h2>
          <p className="mb-3">
            Add your verbal cue only after your dog is sitting quickly with the gesture. This keeps the word meaningful instead of becoming background noise.
          </p>
          <ol className="list-decimal pl-5 space-y-2 mb-3">
            <li><strong>Gesture first:</strong> show your empty-hand lure. As your dog begins to bend knees, say &quot;sit&quot; once in a calm tone.</li>
            <li><strong>Mark &amp; pay:</strong> when hips touch, mark and reward 2–3 small treats in position.</li>
            <li><strong>Separate the cue:</strong> after several good reps, say &quot;sit&quot; first, then give the hand signal if needed. Fade the hand signal over days.</li>
            <li><strong>Keep cues clean:</strong> avoid repeating the word. If your dog does not sit within a second or two, reset and lower difficulty.</li>
          </ol>
          <p className="mb-3">
            Choose one word the whole household will use: &quot;sit&quot; or another language of your choice. Consistency beats creativity here.
          </p>
        </section>

        {/* Proofing */}
        <section id="3ds" className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">Proofing the Sit: The 3 D&#39;s (Distance, Duration, Distraction)</h2>
          <p className="mb-3">
            Reliable behavior is built systematically. Change only one &quot;D&quot; at a time and keep jumps small so your dog keeps winning.
          </p>
          <h3 className="text-lg font-semibold mt-2 mb-1">Duration</h3>
          <ul className="list-disc pl-5 space-y-2 mb-3">
            <li>Count &quot;one, two&quot; in your head before you mark. Gradually build to 5–10 seconds for daily life. Feed during the sit.</li>
            <li>If your dog pops up, you are moving too fast. Shorten duration and increase rate of reinforcement.</li>
          </ul>
          <h3 className="text-lg font-semibold mt-2 mb-1">Distraction</h3>
          <ul className="list-disc pl-5 space-y-2 mb-3">
            <li>Start with easy distractions: you shifting weight, touching a doorknob, taking a step back. Pay for staying seated.</li>
            <li>Work up to outdoor distractions, but keep sessions very short and rewards high-value.</li>
          </ul>
          <h3 className="text-lg font-semibold mt-2 mb-1">Distance</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Ask for sit at your side, then one step away, then two. Return to pay your dog; do not call out of the sit at first.</li>
            <li>For curb safety, practice short distances with the leash on and pay often.</li>
          </ul>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Petunia tip:</strong> Change one thing at a time. If you add time and distractions together, many dogs fail and get frustrated.
          </div>
        </section>

        {/* Household */}
        <section id="household" className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">Multi-Person Consistency: Everyone Plays the Same Game</h2>
          <p className="mb-3">
            Dogs learn fastest when the same behavior earns the same outcome every time. In a busy house, that means agreeing on the rules and sticking to them.
          </p>
          <h3 className="text-lg font-semibold mt-2 mb-1">Create a tiny &quot;training agreement&quot;</h3>
          <ul className="list-disc pl-5 space-y-2 mb-3">
            <li><strong>Cue word:</strong> the household uses &quot;sit&quot; (or your chosen language), said once.</li>
            <li><strong>Marker:</strong> everyone uses the same marker (&quot;yes&quot; or a clicker).</li>
            <li><strong>Reward:</strong> small, soft treats or praise/play for dogs who are less food-motivated.</li>
            <li><strong>No pushing:</strong> never force hips down; if a dog hesitates, we lower difficulty.</li>
            <li><strong>Reset phrase:</strong> use &quot;try again&quot; or simply pause and move to an easier rep.</li>
          </ul>
          <p className="mb-3">
            Post this agreement on the fridge for a month. Invite kids to help by delivering treats to seated dogs while adults handle cues.
          </p>
        </section>

        {/* Breed Notes */}
        <section id="breed-notes" className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">Breed &amp; Individual Differences: Train the Dog in Front of You</h2>
          <p className="mb-3">
            Breed tendencies shape motivation, but every dog is an individual. Use these notes as gentle starting points and adapt to the learner you have.
          </p>
          <h3 className="text-lg font-semibold mt-2 mb-1">Scent hounds (Beagles, Coonhounds, mixes)</h3>
          <ul className="list-disc pl-5 space-y-2 mb-3">
            <li>Noses dominate. Train in low-scent rooms first; pay with aromatic treats; use sniff breaks as rewards.</li>
          </ul>
          <h3 className="text-lg font-semibold mt-2 mb-1">Sight hounds (Greyhounds, Whippets)</h3>
          <ul className="list-disc pl-5 space-y-2 mb-3">
            <li>Calm and sensitive. Keep sessions short, avoid looming body language, reward softly and consistently.</li>
          </ul>
          <h3 className="text-lg font-semibold mt-2 mb-1">Working/Guardian breeds (Rottweilers, Dobermans, LGDs)</h3>
          <ul className="list-disc pl-5 space-y-2 mb-3">
            <li>Value clarity and purpose. Add brief tasks around sits (carry a toy to you, then sit) to make training feel meaningful.</li>
          </ul>
          <h3 className="text-lg font-semibold mt-2 mb-1">Herding breeds (Border Collies, Heelers, mixes)</h3>
          <ul className="list-disc pl-5 space-y-2 mb-3">
            <li>Fast learners; avoid over-rehearsing errors. Give precise timing and reinforce calm pauses to balance their energy.</li>
          </ul>
          <h3 className="text-lg font-semibold mt-2 mb-1">Toy breeds (Yorkies, Chihuahuas)</h3>
          <ul className="list-disc pl-5 space-y-2 mb-3">
            <li>Train on soft mats to protect joints; keep lures very small; avoid towering over the dog.</li>
          </ul>
          <h3 className="text-lg font-semibold mt-2 mb-1">Brachycephalics (Pugs, Bulldogs)</h3>
          <ul className="list-disc pl-5 space-y-2 mb-3">
            <li>Watch heat and breathing. Keep reps brief and reward with easy-to-chew treats. Avoid excitement that triggers panting.</li>
          </ul>
          <h3 className="text-lg font-semibold mt-2 mb-1">Seniors &amp; dogs with mobility considerations</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Check comfort first; consider a &quot;fold-back down&quot; or stand-to-down as alternatives if sits look uncomfortable.</li>
          </ul>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Petunia tip:</strong> Motivation varies. Some dogs work for play or sniffing. Use what your dog loves, not what a chart says they should love.
          </div>
        </section>

        {/* Troubleshooting */}
        <section id="troubleshooting" className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">Troubleshooting &amp; Gentle Fixes</h2>
          <h3 className="text-lg font-semibold mt-2 mb-1">Problem: Dog will not sit with a lure</h3>
          <ul className="list-disc pl-5 space-y-2 mb-3">
            <li>Lower the lure; use a smaller arc; switch to capturing natural sits for a day or two.</li>
            <li>Train on better traction; try a higher-value treat; remove visual distractions.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Problem: Dog sits slowly or pops up immediately</h3>
          <ul className="list-disc pl-5 space-y-2 mb-3">
            <li>Pay in position (2–3 treats delivered one after the other) so staying seated is rewarding.</li>
            <li>Shorten duration goals; build &quot;one, two&quot; before trying &quot;five.&quot;</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Problem: Dog avoids sitting on certain surfaces</h3>
          <ul className="list-disc pl-5 space-y-2 mb-3">
            <li>Add a mat; generalize slowly to other floors. If avoidance persists, consult your vet to rule out discomfort.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Problem: Family repeats &quot;sit&quot; many times</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Agree to say it once. If your dog misses, reset, lower difficulty, and try again. Repetition dilutes meaning.</li>
          </ul>
        </section>

        {/* Plans */}
        <section id="plans" className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">14-Day Session Plan: Short, Sweet, Consistent</h2>
          <p className="mb-3">
            Each session is 60–90 seconds, 2–4 times a day. Keep treats tiny. End while your dog is eager for more.
          </p>
          <ol className="list-decimal pl-5 space-y-2 mb-3">
            <li><strong>Days 1–2:</strong> Lure &amp; reward on a mat (or capture). 5–8 reps per mini-session. Fade the food lure by the end of Day 2.</li>
            <li><strong>Days 3–4:</strong> Empty-hand gesture, treat after the mark. Add your marker word and begin saying &quot;sit&quot; as hips start to bend.</li>
            <li><strong>Days 5–6:</strong> Verbal first, then gesture if needed. Pay in position; add 1–2 seconds of duration.</li>
            <li><strong>Days 7–8:</strong> Add easy distractions (shift weight, touch doorknob). Keep wins high; lower difficulty when needed.</li>
            <li><strong>Days 9–10:</strong> Begin distance: ask for sit one step away; return to pay. Add a few outdoor reps in a quiet spot.</li>
            <li><strong>Days 11–12:</strong> Add sits in daily life: before meals, doors, leash on/off. Keep reinforcement frequent.</li>
            <li><strong>Days 13–14:</strong> Mix &amp; match: short indoor and outdoor reps, a few with 3–5 seconds duration, and a few with easy distractions.</li>
          </ol>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Petunia tip:</strong> Track sessions in a tiny log: date, location, difficulty, and a quick note like &quot;faded gesture&quot; or &quot;added door touch.&quot; Progress compounds when you notice patterns.
          </div>
        </section>

        {/* Life */}
        <section id="life" className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">Sit in Real Life: Where It Pays Off</h2>
          <ul className="list-disc pl-5 space-y-2 mb-3">
            <li><strong>Doors:</strong> ask for a sit, crack the door, pay for holding the sit, then release with &quot;okay&quot; to go outside.</li>
            <li><strong>Meals:</strong> bowl appears only after a sit; add a second or two of duration as your dog improves.</li>
            <li><strong>Leash:</strong> harness on/off happens during sits to keep paws grounded and minds calm.</li>
            <li><strong>Greetings:</strong> require a sit for attention; teach guests to reward the sit with calm pets.</li>
            <li><strong>Car safety:</strong> sit before exiting; clip leash first, then cue &quot;okay&quot; to hop out.</li>
          </ul>
          <p className="mb-3">
            Tie sits to things your dog loves: going out, greeting friends, getting toys. Real-life rewards keep the behavior strong when treats are scarce.
          </p>
        </section>

        {/* Books */}
        <section id="books" className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">Recommended Books, Courses &amp; Resources</h2>
          <ul className="list-disc pl-5 space-y-2 mb-3 text-sm">
            <li>Karen Pryor, &quot;Don&#39;t Shoot the Dog!&quot; — the classic on markers, timing, and reinforcement.</li>
            <li>Jean Donaldson, &quot;Train Your Dog Like a Pro&quot; — step-by-step mechanics for everyday cues.</li>
            <li>Patricia McConnell, &quot;The Puppy Primer&quot; — gentle early training with clear plans.</li>
            <li>Pat Miller, &quot;The Power of Positive Dog Training&quot; — practical plans and troubleshooting.</li>
            <li>Pamela Reid, &quot;Excel-erated Learning&quot; — deeper science behind how dogs learn.</li>
            <li>APDT, IAABC, AVSAB — directories and educational articles for finding skilled, humane trainers near you.</li>
          </ul>
          <p className="text-xs text-gray-600">
            Educational content only. For pain concerns, mobility limitations, or behavior issues that do not improve with kind training, consult your veterinary and behavior teams.
          </p>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">Frequently Asked Questions</h2>
          <p className="mb-3">
            <strong>How long should a session be?</strong><br />
            60–90 seconds is plenty. End on a win. Many tiny sessions outcompete one long drill.
          </p>
          <p className="mb-3">
            <strong>When can I fade treats?</strong><br />
            When your dog sits quickly in various rooms, start alternating food with praise, play, sniff breaks, or door opens. Keep food for tougher reps.
          </p>
          <p className="mb-3">
            <strong>Is pushing the hips down okay?</strong><br />
            Avoid it. Hands-on pressure can create resistance or discomfort. Make the environment easy and let your dog choose to sit.
          </p>
          <p className="mb-3">
            <strong>My dog seems uncomfortable sitting. What now?</strong><br />
            Switch to alternative calm behaviors like stand or down, train on soft mats, and ask your vet to screen for orthopedic discomfort.
          </p>
        </section>

        {/* Sources */}
        <section id="sources" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">📚 Sources (Selected)</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            <li>
              Association of Professional Dog Trainers (APDT) — trainer finder and education.
              <a
                href="https://apdt.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline ml-1"
              >
                APDT
              </a>
            </li>
            <li>
              International Association of Animal Behavior Consultants (IAABC) — behavior resources and certified consultants.
              <a
                href="https://iaabc.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline ml-1"
              >
                IAABC
              </a>
            </li>
            <li>
              American Veterinary Society of Animal Behavior (AVSAB) — position statements on humane training.
              <a
                href="https://avsab.org/resources/position-statements/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline ml-1"
              >
                AVSAB
              </a>
            </li>
            <li>
              American Animal Hospital Association (AAHA) — behavior &amp; wellness articles for owners.
              <a
                href="https://www.aaha.org/your-pet/pet-owner-education/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline ml-1"
              >
                AAHA
              </a>
            </li>
            <li>
              RSPCA &amp; ASPCA — guidance on humane handling and body language.
              <a
                href="https://www.rspca.org.uk/adviceandwelfare/pets/dogs/behaviour/bodylanguage"
                target="_blank"
                rel="noopener noreferrer"
                className="underline ml-1"
              >
                RSPCA
              </a>{' '}
              ·
              <a
                href="https://www.aspca.org/pet-care/dog-care/dog-behavior-tips"
                target="_blank"
                rel="noopener noreferrer"
                className="underline ml-1"
              >
                ASPCA
              </a>
            </li>
          </ul>
          <p className="text-xs text-gray-600 mt-4">
            Links above are provided for general education and are not exhaustive. Always tailor plans to your individual dog and consult your veterinary team for medical concerns.
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
