'use client';

import Head from 'next/head';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function AreGermanShepherdsGoodWithKids() {
  const locale = useLocale();

  // --- Metadata ---------------------------------------------------------------
  const title =
    'Are German Shepherds Good Family Dogs—and Good with Kids? A Practical, Evidence-Informed Owner Guide';
  const date = 'July 19, 2025';
  const categories = ['owner', 'breed_specific_guides'] as const;

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

  const slug = 'are-german-shepherds-good-with-kids';
  const description =
    'A calm, step-by-step framework for deciding whether a German Shepherd is the right fit for a family with children—temperament, socialization, home setup, training plans, play rules, safety systems, red flags, and printable checklists.';

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
            <li><a href="#summary" className="underline hover:opacity-80">TL;DR + Petunia Tip</a></li>
            <li><a href="#how-to-think" className="underline hover:opacity-80">How to Think About “Family Dog” Fit</a></li>
            <li><a href="#temperament" className="underline hover:opacity-80">GSD Temperament: Standards vs. Real Homes</a></li>
            <li><a href="#age-choice" className="underline hover:opacity-80">Puppy, Adolescent, Adult, Senior—What Works with Kids</a></li>
            <li><a href="#family-types" className="underline hover:opacity-80">Family Types &amp; Typical Routines</a></li>
            <li><a href="#socialization" className="underline hover:opacity-80">Kid-Smart Socialization Blueprint (Weeks 3–14+)</a></li>
            <li><a href="#training" className="underline hover:opacity-80">Training That Makes Family Life Easy</a></li>
            <li><a href="#home-setup" className="underline hover:opacity-80">Home Setup &amp; Safety (Zones, Gates, Gear)</a></li>
            <li><a href="#play-protocols" className="underline hover:opacity-80">Play Protocols (Tug, Fetch, Chase, Toys)</a></li>
            <li><a href="#introductions" className="underline hover:opacity-80">Introductions: Babies, Toddlers, Big Kids, Teens</a></li>
            <li><a href="#multi-pet" className="underline hover:opacity-80">Multi-Pet Homes (Cats, Other Dogs)</a></li>
            <li><a href="#visitors" className="underline hover:opacity-80">Friends Over: Parties, Playdates, Holidays</a></li>
            <li><a href="#public" className="underline hover:opacity-80">Out-in-Public: School Runs, Parks, Sports</a></li>
            <li><a href="#health" className="underline hover:opacity-80">Health &amp; Behavior: Pain, Growth, Hormones</a></li>
            <li><a href="#red-flags" className="underline hover:opacity-80">Red Flags &amp; When to Call a Pro</a></li>
            <li><a href="#operator-systems" className="underline hover:opacity-80">Operator-Grade Systems (Home &amp; Facility)</a></li>
            <li><a href="#checklists" className="underline hover:opacity-80">Printable Checklists</a></li>
            <li><a href="#faq" className="underline hover:opacity-80">FAQ</a></li>
            <li><a href="#sources" className="underline hover:opacity-80">📚 Sources (Selected)</a></li>
          </ul>
        </nav>

        {/* TL;DR */}
        <section id="summary" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">TL;DR + Petunia Tip</h2>
          <p className="mb-4">
            German Shepherd Dogs (GSDs) can be <strong>excellent family dogs</strong> when you choose a <em>stable individual</em>, meet their daily needs, and run the home with smart systems. Correct temperament is confident, steady, biddable, and people-focused—not nervy or sharp. Because GSDs are large and athletic, good management and modern, reward-based training are non-negotiable. The best family results come from: careful selection; early, structured socialization; clear kid-dog rules; daily outlets (mental + physical); health oversight; and a home layout that supports calm behavior.
          </p>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Petunia tip:</strong> Create a “Family Handling SOP” note in your Petunia profile. List: greeting protocol, kid rules, go-to reinforcers, gear, quiet zones, and your “pause plan” for doorbells and visitors. Share it with sitters, relatives, and daycare/boarding so everyone handles your dog the same way.
          </div>
        </section>

        {/* HOW TO THINK */}
        <section id="how-to-think" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">How to Think About “Family Dog” Fit</h2>
          <p className="mb-3">
            “Family-friendly” is not a breed switch—it’s a <em>fit</em> between a real dog and your real routine. A good family dog:
          </p>
          <ul className="list-disc pl-5 space-y-2 mb-3">
            <li><strong>Predictable temperament:</strong> curious, stable, recovers quickly after novelty.</li>
            <li><strong>Trainable and biddable:</strong> enjoys working for food/play; adjusts to house rules.</li>
            <li><strong>Has an off-switch:</strong> settles after exercise and enrichment.</li>
            <li><strong>Comfortable with handling:</strong> tolerates kid-adjacent chaos because you trained and managed for success.</li>
          </ul>
          <p className="mb-3">
            Risk with kids is a function of probability and consequence. Small dogs may nip more often but do less damage; large dogs may bite rarely but can cause serious injury if things go wrong. Systems—not slogans—keep risk low: <em>selection, socialization, training, management, and health care</em>.
          </p>
        </section>

        {/* TEMPERAMENT */}
        <section id="temperament" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">GSD Temperament: Standards vs. Real Homes</h2>
          <p className="mb-3">
            Breed standards describe the target: <em>self-assured, even-tempered, confident, courageous, willing to please, and steady around novelty</em>. Aloofness is normal; hostility and chronic fearfulness are not. Real populations contain variance. That’s why you evaluate the individual:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Watch the dog in busy spaces: does curiosity beat suspicion?</li>
            <li>Startle &amp; recovery: can the dog bounce back quickly?</li>
            <li>Handler engagement: when unsure, does the dog look to people?</li>
            <li>Noise/body-handling tolerance: nails, ears, hugs-by-kids simulation (done kindly), gentle restraint.</li>
          </ul>
          <p className="text-sm text-gray-700 mt-2">
            If any adult in the household dislikes training or noise management, choose a mellower individual (often an adult) and commit to simple, consistent routines.
          </p>
        </section>

        {/* AGE CHOICE */}
        <section id="age-choice" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Puppy, Adolescent, Adult, Senior—What Works with Kids</h2>
          <p className="mb-3">
            Age changes the <em>workload</em> and <em>predictability</em> of family life. There is no universally “best” age; there is a best match for your bandwidth.
          </p>
          <h3 className="text-lg font-semibold mt-2 mb-1">Puppy (8–16 weeks starting at home)</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Pros: blank slate, socialization window wide open; you can build kid-smart associations from day one.</li>
            <li>Cons: house-training, nipping, sleep schedule, constant supervision. Toddlers + puppy teeth = management heavy.</li>
          </ul>
          <h3 className="text-lg font-semibold mt-2 mb-1">Adolescent (6–24 months)</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Pros: vaxed, ready for fuller outings; energy for active families.</li>
            <li>Cons: impulse control still under construction; size + enthusiasm can bowl kids over; needs structured outlets.</li>
          </ul>
          <h3 className="text-lg font-semibold mt-2 mb-1">Adult (2–6 years)</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Pros: temperament largely known; often house-trained; easier for busy households.</li>
            <li>Cons: habits to reshape; evaluate carefully for soundness with kids before adoption.</li>
          </ul>
          <h3 className="text-lg font-semibold mt-2 mb-1">Senior (7+ years)</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Pros: calmer pace, excellent cuddle partners; great with older kids who follow rules.</li>
            <li>Cons: medical needs; teach kids gentle handling and protect rest.</li>
          </ul>
        </section>

        {/* FAMILY TYPES */}
        <section id="family-types" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Family Types &amp; Typical Routines</h2>
          <p className="mb-3">
            Use these archetypes as starting points. Individual dogs vary; your routine is what makes the fit.
          </p>
          <h3 className="text-lg font-semibold mt-2 mb-1">“Busy Week, Active Weekends”</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Plan short weekday training bursts (2×5 minutes), enrichment meals, and decompression walks. Double down on structured weekend hikes and games.</li>
          </ul>
          <h3 className="text-lg font-semibold mt-2 mb-1">“Toddler Tornado” (under 4s)</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Create two zones with gates. Teach your dog to love their mat/crate. Rotate freedom with supervision. Avoid chase games.</li>
          </ul>
          <h3 className="text-lg font-semibold mt-2 mb-1">“School-Age Rhythm” (5–12)</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Kids can help with training: name game, hand targets, scatter “find-it” for calm greetings. Supervise always; rehearse rules.</li>
          </ul>
          <h3 className="text-lg font-semibold mt-2 mb-1">“Teens &amp; Sports”</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Leverage predictable practice times for walks. Teach car manners, bleacher settle, and polite passing around strollers and coolers.</li>
          </ul>
        </section>

        {/* SOCIALIZATION */}
        <section id="socialization" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Kid-Smart Socialization Blueprint (Weeks 3–14+)</h2>
          <p className="mb-3">
            The goal: a dog that sees children as <em>predictors of good things</em> and recovers quickly from novelty. Short, structured sessions beat chaotic marathons.
          </p>
          <ol className="list-decimal pl-5 space-y-1 mb-3">
            <li><strong>Picture book of kids:</strong> Expose to kids of different ages, sizes, voices, clothing (hats, helmets, backpacks), mobility aids, and movement styles—always paired with treats/play.</li>
            <li><strong>Sounds:</strong> Baby cries, squeals, ball bounces, skateboard rattles at low volume first; feed while the sound plays; fade away if the pup looks unsure.</li>
            <li><strong>Handling:</strong> Cooperative-care micro-drills: touch paws, look in ears, brief hugs with immediate treat release; condition muzzle as a fun trick.</li>
            <li><strong>Places:</strong> School perimeter at a distance, playgrounds from afar (noisy edges), vet “happy visits.”</li>
            <li><strong>Rest:</strong> Socialization is not endurance. Stop while the puppy still wants more.</li>
          </ol>
          <p className="text-sm text-gray-700">
            If eating stops or the body goes stiff, back up two steps. Feed, breathe, and try an easier version later.
          </p>
        </section>

        {/* TRAINING */}
        <section id="training" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Training That Makes Family Life Easy</h2>
          <p className="mb-3">
            Reward-based training gives you reliable behavior without adding fear. These skills are the backbone of a kid-friendly home:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Go to Mat:</strong> Park the dog on a defined spot for meals, homework, doorbells, and guest arrivals.</li>
            <li><strong>Hand Target:</strong> Kids cue a nose-to-palm touch to redirect motion without grabbing collars.</li>
            <li><strong>Leave-It &amp; Drop:</strong> Trade for better, praise the release. No prying jaws.</li>
            <li><strong>Settle:</strong> Teach calm downs with slow breathing and reinforced stillness.</li>
            <li><strong>Recall:</strong> Play rocket-recall games in hallways and yards before you need them for real.</li>
            <li><strong>Cooperative Care:</strong> Teach a “consent” start button (chin rest) and “all done” release.</li>
          </ul>
          <p className="text-sm text-gray-700 mt-2">
            Avoid “alpha” myths and coercive tools; they often suppress warnings without fixing the cause and can backfire around kids.
          </p>
        </section>

        {/* HOME SETUP */}
        <section id="home-setup" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Home Setup &amp; Safety (Zones, Gates, Gear)</h2>
          <p className="mb-3">
            Layout is behavior. Design your space so calm is easy and chaos is hard.
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Two-zone living:</strong> Kid zone and dog zone separated by baby gates or pens. Rotate freedom with supervision.</li>
            <li><strong>Station mats:</strong> One per common room (kitchen, living room, office). Feed chewies there.</li>
            <li><strong>Gear:</strong> Y-front harness, front-clip option, long line for parks, and a basket muzzle conditioned as a “party hat” for vet/ER or crowded events.</li>
            <li><strong>Storage:</strong> Lock away toys that trigger conflict; create color-coded bins (kid toys vs dog toys).</li>
            <li><strong>Door protocol:</strong> Leash on a hook, treats by the door, mat in sight line. Practice at low stakes.</li>
          </ul>
        </section>

        {/* PLAY PROTOCOLS */}
        <section id="play-protocols" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Play Protocols (Tug, Fetch, Chase, Toys)</h2>
          <p className="mb-3">
            Play should build skills, not risk. Use rules that kids can remember.
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Tug with Rules:</strong> Start cue (“get it”), stop cue (“drop”), and calm restart. Keep the toy low; no face-level tug with small children.</li>
            <li><strong>Fetch:</strong> Toss down a hallway, not over kids. Reward returns with a second toy—no wrestling.</li>
            <li><strong>Chase:</strong> Replace kid-chase with “find-it” scatters, flirt-pole with rules in a yard, or hide-and-seek to a mat.</li>
            <li><strong>Chews &amp; Food Toys:</strong> Use stuffed Kongs and lick mats to create quiet time during dinner or homework.</li>
          </ul>
        </section>

        {/* INTRODUCTIONS */}
        <section id="introductions" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Introductions: Babies, Toddlers, Big Kids, Teens</h2>

          <h3 className="text-lg font-semibold mt-2 mb-1">New Baby Homecoming</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Before birth: play baby sounds low volume while feeding. Practice stroller heel and “go to mat” with a doll bundle.</li>
            <li>First days: rotate zones; short, sniff-and-feed sessions; never force proximity. Reward calm glances toward baby.</li>
            <li>Protect sleep: baby movement/noise can be arousing; use white noise and closed doors.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Toddlers (1–3 years)</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>No hugging, no leaning, no climbing. Teach “blow a kiss” from a distance or toss a treat to a mat.</li>
            <li>Gates up during high arousal (running, shrieking). Give your dog a job: lie on a mat and lick a stuffed Kong.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">School-Age (4–12 years)</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Kids cue hand-targets, scatter “find-it,” and help with brushing using a consent cue. Adults supervise all direct interactions.</li>
            <li>Teach the “ask-pet-pause” rule: ask adult → ask dog (offer hand for sniff; if the dog approaches, pet briefly; if not, respect the no).</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Teens</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Train car safety, hand-offs with friends, polite hallway passes, and door-dash prevention. Teens can lead decompression walks and recall games.</li>
          </ul>
        </section>

        {/* MULTI-PET */}
        <section id="multi-pet" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Multi-Pet Homes (Cats, Other Dogs)</h2>
          <p className="mb-3">
            Success = slow intros + resource management + exits.
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Cats:</strong> Bar-height escapes, three vertical perches, and a gate with a cat door. Leash the dog early; reward calm look-aways.</li>
            <li><strong>Dogs:</strong> Parallel walks first, then decompression sniff fence-lines, then brief, low-arousal yard time. Feed and rest separately at the start.</li>
          </ul>
        </section>

        {/* VISITORS */}
        <section id="visitors" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Friends Over: Parties, Playdates, Holidays</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Stage your gear: leash on hook, treats in jar, station mats placed, gates ready. Practice the door routine before guests arrive.</li>
            <li>Give the dog a scripted job: “go to mat” → feed scatter → chew toy. If arousal climbs, rotate to a quiet room with a chew and fan/white noise.</li>
            <li>Post rules on a card: no running past the dog, no grabbing collars, no sharing snacks.</li>
          </ul>
        </section>

        {/* PUBLIC */}
        <section id="public" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Out-in-Public: School Runs, Parks, Sports</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>School lines:</strong> Hang back from the densest crowd. Reward head turns and calm sits. If kids rush to pet, say “We’re training—thanks!” and toss a treat away while you create space.</li>
            <li><strong>Sports fields:</strong> Pick a wind-break corner behind a fence. Teach a long-duration mat settle with a chew. Keep greetings brief and scripted.</li>
            <li><strong>Parks:</strong> Skip chaotic off-leash zones. Choose decompression trails and quiet hours.</li>
          </ul>
        </section>

        {/* HEALTH */}
        <section id="health" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Health &amp; Behavior: Pain, Growth, Hormones</h2>
          <p className="mb-3">
            Behavior rides on health. If temperament shifts suddenly—grumpiness, touch sensitivity, growling when lifted—book a vet exam. Orthopedic pain, ear infections, GI upset, dental pain, and endocrine changes can all spill into family life. Adolescence brings big hormonal and brain changes; expect boundary testing and make rest a skill.
          </p>
        </section>

        {/* RED FLAGS */}
        <section id="red-flags" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Red Flags &amp; When to Call a Pro</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Hard stare with still body toward children; freezing when approached; cornering or blocking pathways.</li>
            <li>Resource guarding that escalates despite trade-ups.</li>
            <li>Sound sensitivity that does not recover (hiding, panting, no eating in safe settings).</li>
            <li>Any bite that breaks skin, or repeated air-snaps. Pair a veterinary exam with a behavior consult.</li>
          </ul>
          <p className="text-sm text-gray-700 mt-2">
            Look for board-certified veterinary behaviorists (ACVB) or certified behavior professionals (IAABC/CCPDT) who use reward-based methods.
          </p>
        </section>

        {/* OPERATOR SYSTEMS */}
        <section id="operator-systems" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Operator-Grade Systems (Home &amp; Facility)</h2>

          <h3 className="text-lg font-semibold mt-2 mb-1">1) Pre-Selection Protocol</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Meet parents/relatives or review credible video in novel places. Favor curiosity, easy recovery, and handler focus.</li>
            <li>Ask for health tests (hips, elbows) and a written socialization plan. Decline if the provider discourages reward-based training.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">2) Family Rules Card (print &amp; post)</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>“Ask-Pet-Pause,” no hugging/leaning, no running past the dog, feed only at a bowl, doors stay latched.</li>
            <li>Adults manage; kids assist with simple cues (hand target, find-it, toss to mat).</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">3) Visitor SOP</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Dog parked before the knock. Enter guests after calm behaviors are reinforced or rotate the dog to a quiet zone.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">4) Facility Playbook (Daycare/Boarding/Rescue)</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Structured intake: note kid exposure history, triggers, handling preferences; color-coded kennel cards.</li>
            <li>Reward-based handling only; staff drilled on reading stress signals; easy exits from group play.</li>
            <li>Family coaching at pickup: what went well, what to practice, and a sheet of home games.</li>
          </ul>
        </section>

        {/* CHECKLISTS */}
        <section id="checklists" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Printable Checklists</h2>

          <h3 className="text-lg font-semibold mt-2 mb-1">Fit &amp; Readiness</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Daily time for exercise/training (weekday/weekend reality).</li>
            <li>Noise tolerance in your building/neighborhood; plan for barking management.</li>
            <li>Gates, pens, mats, crate purchased and staged.</li>
            <li>Veterinary relationship and 24/7 ER mapped; budget for preventives and emergencies.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Kid Rules (Post on Fridge)</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Ask-Pet-Pause; pet chest/shoulders, not head; 3-second pet then hands off.</li>
            <li>No touching when the dog is eating, sleeping, chewing, or on their mat/crate.</li>
            <li>Use hand-target or toss treats to the mat to move the dog—no pushing or pulling.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Daily Flow</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Morning: potty, walk or sniffari, breakfast in a puzzle, 3–5 minute training.</li>
            <li>Afternoon: decompression walk, nap in quiet zone, chew time.</li>
            <li>Evening: training game + settle on mat during dinner; bedtime routine.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">Frequently Asked Questions</h2>

          <p className="mb-3">
            <strong>Are German Shepherds naturally good with children?</strong><br />
            Many are wonderful with kids, but it depends on the individual and the system around them—selection, socialization, training, management, and health. Choose stability first, not coat color or hype.
          </p>

          <p className="mb-3">
            <strong>What age of GSD is best for families?</strong><br />
            Adults with known temperaments are often easiest for busy homes. Puppies are great if you have time for socialization and supervision. Adolescents need structure and outlets.
          </p>

          <p className="mb-3">
            <strong>Is roughhousing okay if the dog “likes it”?</strong><br />
            Skip it. Use games with rules (tug with cues, fetch lanes, find-it). Roughhousing blurs lines and increases risk.
          </p>

          <p className="mb-3">
            <strong>Should we muzzle train?</strong><br />
            Yes—muzzle-positive culture is smart. It’s a safety seatbelt for vet care, public crowds, and behavior rehab.
          </p>

          <p>
            <strong>Can we leave the dog and kids together if they get along?</strong><br />
            No. Supervise or separate. Even great dogs and great kids can make mistakes when tired, sick, or over-aroused.
          </p>
        </section>

        {/* SOURCES */}
        <section id="sources" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">📚 Sources (Selected)</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            <li>
              American Veterinary Medical Association (AVMA). <em>The Role of Breed in Dog Bite Risk and Prevention</em> (backgrounders).
              <a href="https://www.avma.org/sites/default/files/resources/dog_bite_risk_and_prevention_bgnd.pdf" target="_blank" rel="noopener noreferrer"> avma.org</a>
            </li>
            <li>
              American Veterinary Society of Animal Behavior (AVSAB). <em>Position Statement on Puppy Socialization</em>.
              <a href="https://avsab.org/resources/position-statements/" target="_blank" rel="noopener noreferrer"> avsab.org</a>
            </li>
            <li>
              AVSAB. <em>Humane Dog Training Position Statement</em>.
              <a href="https://avsab.org/resources/position-statements/" target="_blank" rel="noopener noreferrer"> avsab.org</a>
            </li>
            <li>
              American Animal Hospital Association (AAHA). <em>Behavior Management Guidelines</em>.
              <a href="https://www.aaha.org" target="_blank" rel="noopener noreferrer"> aaha.org</a>
            </li>
            <li>
              AKC &amp; The Kennel Club. <em>German Shepherd Dog Breed Standards</em> (temperament descriptors).
              <a href="https://images.akc.org/pdf/breeds/standards/GermanShepherdDog.pdf" target="_blank" rel="noopener noreferrer"> AKC</a> ·
              <a href="https://www.thekennelclub.org.uk/breed-standards/pastoral/german-shepherd-dog/" target="_blank" rel="noopener noreferrer"> The Kennel Club</a>
            </li>
            <li>
              Centers for Disease Control &amp; Prevention (CDC). <em>Dog Bite Prevention</em> (owner guidance).
              <a href="https://www.cdc.gov/healthypets/keeping-pets-and-people-healthy/dog-bite-prevention.html" target="_blank" rel="noopener noreferrer"> cdc.gov</a>
            </li>
            <li>
              Family-focused safety resources (consent-based petting, supervision models).
              <a href="https://www.rspca.org.uk/adviceandwelfare/pets/dogs/company/kids" target="_blank" rel="noopener noreferrer"> RSPCA</a>
            </li>
          </ul>
          <p className="text-xs text-gray-600 mt-4">
            This article is educational and not a substitute for individualized veterinary or behavior care. For behavior concerns or safety planning, contact your veterinarian or a board-certified veterinary behaviorist.
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
                href="https://www.petuniapets.com/en/blog/how-long-do-german-shepherds-live"
                className="underline hover:opacity-80"
              >
                How Long Do German Shepherds Live?
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
                href="https://www.petuniapets.com/en/blog/what-health-problems-are-common-in-german-shepherds"
                className="underline hover:opacity-80"
              >
                What Health Problems Are Common in German Shepherds?
              </Link>
            </li>
          </ul>
        </div>

        <Link href={`/${locale}/blog`} className="underline text-[#2c4a30] font-medium hover:opacity-80">
          ← Back to Blog
        </Link>
      </main>
    </>
  );
}
