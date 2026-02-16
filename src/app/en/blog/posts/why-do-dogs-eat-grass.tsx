'use client';

import Head from 'next/head';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function WhyDoDogsEatGrass() {
  const locale = useLocale();

  // --- Metadata ---------------------------------------------------------------
  const title =
    'Why Do Dogs Eat Grass? A Vet-Informed, Owner-Friendly Guide (Myths, What’s Normal vs Concerning, Risks, and What to Do)';
  const date = 'July 17, 2025';
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
    'Dogs grazing on grass is common and usually normal. This guide unpacks the best evidence on “why,” sorts normal vs. concerning patterns, flags real risks (chemicals, parasites, toxic plants), and gives a practical, checklist-driven plan to manage it safely.';

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
            <li><a href="#what-we-know" className="underline hover:opacity-80">What We Know (Evidence Snapshot)</a></li>
            <li><a href="#theories" className="underline hover:opacity-80">Why Dogs Eat Grass (Theories)</a></li>
            <li><a href="#normal-vs-concerning" className="underline hover:opacity-80">Normal vs. Concerning</a></li>
            <li><a href="#risks" className="underline hover:opacity-80">Real-World Risks (Chemicals, Parasites, Plants)</a></li>
            <li><a href="#playbook" className="underline hover:opacity-80">Owner Playbook (Prevention &amp; Management)</a></li>
            <li><a href="#checklists" className="underline hover:opacity-80">Operator-Grade Checklists</a></li>
            <li><a href="#vet-now" className="underline hover:opacity-80">When to Call the Vet Now</a></li>
            <li><a href="#faq" className="underline hover:opacity-80">FAQ</a></li>
            <li><a href="#sources" className="underline hover:opacity-80">📚 Sources (Selected)</a></li>
          </ul>
        </nav>

        {/* TL;DR */}
        <section id="summary" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">TL;DR + Petunia Tip</h2>
          <p className="mb-3">
            Occasional grass eating—<em>grazing</em>—is common and usually normal in otherwise healthy dogs. 
            The best data we have suggests most dogs <em>do not</em> look ill before grazing and <em>do not</em> vomit afterward; 
            the behavior likely reflects normal canine biology (curiosity, taste/texture, roughage) more than a medical emergency.
            That said, watch for patterns: frequency, intensity, and any <em>new</em> GI signs (vomiting, diarrhea, appetite changes).
          </p>
          <p className="mb-3">
            Your job is to <strong>reduce real risks</strong> (chemicals on lawns, parasites, toxic plants) and <strong>shape the habit</strong> (training, enrichment,
            diet tweaks) while knowing <strong>red flags</strong> that warrant a vet visit. Most families won’t need to “eliminate” grazing—
            just manage it with a clean, safe environment and a lean, well-balanced routine.
          </p>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Petunia tip:</strong> In your Petunia profile, add a <em>“Grazing Safety”</em> note: lawn service schedule/chemicals, a list of
            plants on your property (with <em>toxic</em> species starred), your prevention plan (monthly parasite control, dog-park hygiene),
            and a quick action card (poison control numbers, nearest 24/7 ER). Share this note with sitters/boarding staff so everyone
            responds consistently if your dog overindulges or looks unwell.
          </div>
        </section>

        {/* WHAT WE KNOW */}
        <section id="what-we-know" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">What We Know (Evidence Snapshot)</h2>
          <p className="mb-3">
            Formal research on grass eating is limited, but one of the better-known survey series of pet owners found:
          </p>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>Grass/plant eating is common:</strong> a large web survey (n≈1,500+ analyzed responses) reported that many dogs ingest plants daily or weekly.</li>
            <li><strong>Not typically a “vomit switch”:</strong> a small minority of dogs showed illness before eating plants, and only a subset vomited afterward.</li>
            <li><strong>Not strongly tied to diet type/fiber</strong> in that dataset (owners’ reports did not show a clear fiber effect).</li>
          </ul>
          <p className="mb-3">
            Behavior texts and veterinary manuals frame grass eating as a form of <em>normal ingestive or exploratory behavior</em> for many dogs,
            while also noting that <em>pica</em> (ingesting non-food items) can be a medical or behavioral problem in some individuals. 
            Context matters: a curious grazer is different from a dog frantically swallowing non-food objects or repeatedly vomiting after grazing.
          </p>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Data snapshot:</strong> In one widely cited summary, ~<em>68%</em> of plant-eating dogs ingested plants daily or weekly; ~<em>8%</em> showed illness prior to eating;
            ~<em>22%</em> regularly vomited after. Younger dogs tended to eat plants more frequently and were less likely to appear ill prior to grazing.
            (See Sources for details and methodology.)
          </div>
        </section>

        {/* THEORIES */}
        <section id="theories" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Why Dogs Eat Grass (Theories: From Instinct to Fiber to Fun)</h2>
          <p className="mb-3">
            There isn’t a single, proven universal reason. Instead, several <em>overlapping</em> explanations likely cover most dogs, with
            individual variation. Here’s how to think about the main hypotheses as an owner or facility operator.
          </p>

          <h3 className="text-lg font-semibold mt-2 mb-1">1) Normal, Species-Typical Grazing</h3>
          <p className="mb-3">
            Wild canids routinely ingest plant matter, and domestic dogs retain a taste for grass. The behavior may be partly instinctive and
            partly driven by <em>sensory reinforcement</em>—the cool, juicy texture of fresh blades, the smell after mowing, and novelty on walks.
            In healthy dogs with stable stools and appetite, occasional grazing likely reflects this normal spectrum of behavior.
          </p>

          <h3 className="text-lg font-semibold mt-2 mb-1">2) “Parasite Purge” (Ethologic Hypothesis)</h3>
          <p className="mb-3">
            One research team proposed that routine plant eating in wild ancestors helped <em>mechanically escort</em> intestinal worms out by
            increasing gut motility and trapping parasites in fibrous material. It’s a compelling evolutionary story, and while it doesn’t mean
            your pet has worms, it&rsquo;s consistent with younger dogs grazing more often. Practically, this reinforces the value of <em>modern</em>
            parasite prevention rather than relying on grass to “self-treat.”
          </p>

          <h3 className="text-lg font-semibold mt-2 mb-1">3) Roughage/Fiber &amp; GI Regulation</h3>
          <p className="mb-3">
            Grass contains insoluble fiber that can influence stool bulk and transit. Some owners notice that dogs who seek grass regularly do
            better on diets with a bit more fiber (within a balanced formulation). Not all grazers are fiber-seeking, but if your dog habitually
            hunts lawns, it&rsquo;s reasonable—after medical rule-out—to trial a modest fiber adjustment with your veterinarian’s guidance.
          </p>

          <h3 className="text-lg font-semibold mt-2 mb-1">4) Taste, Texture, and Sensory Enrichment</h3>
          <p className="mb-3">
            Many dogs seem to simply <em>enjoy</em> the act of plucking and crunching grass, especially tender new growth. Like stick-carrying or
            pinecone “collecting,” the behavior can be <em>self-rewarding</em>. If this resonates with your dog, your plan should focus less on
            “stopping” grazing and more on <em>channeling</em> it safely—structured sniff-walks, better chews, and access to safe greens.
          </p>

          <h3 className="text-lg font-semibold mt-2 mb-1">5) Upset Stomach &amp; the Vomiting Myth</h3>
          <p className="mb-3">
            Many owners assume grass is a dog’s “emetic of choice.” The evidence suggests otherwise: most dogs aren’t visibly ill before grazing,
            and many don’t vomit afterward. That said, dogs <em>with</em> nausea may grab grass frantically and then vomit—so the <em>pattern</em>
            (calm nibbling vs. frantic mowing + vomiting + lethargy) matters far more than the behavior in isolation.
          </p>

          <h3 className="text-lg font-semibold mt-2 mb-1">6) Boredom, Anxiety, or Compulsion</h3>
          <p className="mb-3">
            In some dogs, persistent lawn “mowing” can function like displacement or repetitive behavior, especially in under-exercised,
            under-enriched adolescents. If grass-eating spikes with stressors (guests, construction noise) or when routine slides, address
            the <em>arousal budget</em> and enrichment plan. Reserve the term <em>pica</em> for non-food ingestion that’s risky or compulsive (rocks, fabric),
            and loop your veterinarian in for medical/behavioral screening if you see that pattern.
          </p>

          <h3 className="text-lg font-semibold mt-2 mb-1">7) Nutritional Deficiency?</h3>
          <p className="mb-3">
            Classic advice blamed mineral or vitamin gaps. Modern complete diets make true deficiency less likely in healthy pets. If your dog’s
            grazing escalates or coincides with weight loss, coat changes, or stool shifts, your vet may run targeted labs and consider a diet
            review—especially if you feed significant homemade/raw components without a board-certified nutritionist’s input.
          </p>
        </section>

        {/* NORMAL VS CONCERNING */}
        <section id="normal-vs-concerning" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">What’s “Normal” vs. When to Be Concerned</h2>
          <p className="mb-3">
            Think in terms of <strong>pattern, intensity, and consequences</strong>. The same nibble can be normal in one dog and a red flag in another.
          </p>

          <h3 className="text-lg font-semibold mt-2 mb-1">Normal Grazing Profile</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Calm nibbling during sniff-walks or yard time, especially on fresh, tender blades.</li>
            <li>No other GI signs: normal appetite, no repeated vomiting, normal stool quality.</li>
            <li>Stable weight, normal energy, good coat/skin.</li>
            <li>Easy to interrupt with a cue (“let’s go,” “leave it”) and redirect to a chew or sniff task.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Concerning Pattern (Call Your Vet)</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Frantic lawn “mowing,” drooling, or ingesting large amounts in minutes.</li>
            <li>Repeated vomiting (with or without grass), abdominal pain, diarrhea, black/tarry stool, or lethargy.</li>
            <li>New grass obsession with <em>other</em> changes: weight loss, poor coat, appetite loss, polydipsia/polyuria.</li>
            <li>Non-food ingestion (rocks, fabric, sticks) or persistent coprophagia (pica profile).</li>
            <li>Any exposure risk to <em>treated lawns</em>, <em>toxic plants</em>, or <em>parasite-heavy</em> environments (dog parks with poor hygiene).</li>
          </ul>

          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Decision rule of thumb:</strong> If grass eating is <em>calm, occasional, interruptible</em>, and your dog otherwise thrives, manage it.
            If it’s <em>frantic, frequent, or symptomatic</em>, treat it like a clinical clue—book your veterinarian.
          </div>
        </section>

        {/* RISKS */}
        <section id="risks" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Real-World Risks to Control (Chemicals, Parasites, Plants, Foreign Bodies)</h2>
          <p className="mb-3">
            Grazing itself isn’t the main danger—<em>what’s on or near the grass is</em>. A few controls turn a vague worry into a safe routine.
          </p>

            <h3 className="text-lg font-semibold mt-2 mb-1">1) Lawn Chemicals &amp; Garden Products</h3>
            <p className="mb-3">
              Fertilizers, herbicides, insecticides, and slug/snail baits can be hazardous if ingested. Keep pets off recently treated areas,
              follow label re-entry times, and store products out of reach. If exposure is suspected, contact your veterinarian or a poison-control
              service immediately (numbers in Sources).
            </p>

            <h3 className="text-lg font-semibold mt-2 mb-1">2) Parasites in Public Spaces</h3>
            <p className="mb-3">
              Dog parks and high-traffic lawns can be contaminated with <em>Giardia</em>, hookworms, or whipworms. Consistent monthly prevention,
              prompt poop pick-up, and avoiding standing water/muddy areas reduce risk. If soft stools or diarrhea follows a spree of grazing
              in public turf, talk to your vet about fecal testing and treatment.
            </p>

            <h3 className="text-lg font-semibold mt-2 mb-1">3) Toxic or Irritant Plants</h3>
            <p className="mb-3">
              Many ornamental plants (e.g., sago palm, lilies-of-the-valley, daffodils, azaleas) are toxic. Identify your yard’s species and
              remove or fence off hazardous ones. Indoors, place risky houseplants out of reach or swap for pet-safe alternatives.
            </p>

            <h3 className="text-lg font-semibold mt-2 mb-1">4) Foreign Body (Non-Food) Ingestion</h3>
            <p className="mb-3">
              Dogs that escalate from nibbling grass to swallowing sticks, mulch, plastic, or fabric are drifting from <em>grazing</em> to <em>pica</em>.
              That shift raises obstruction and toxicity risks and merits a vet-led work-up plus a management reset (gates, muzzles, training).
            </p>
        </section>

        {/* OWNER PLAYBOOK */}
        <section id="playbook" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Owner Playbook (Prevention, Management, and Safer Substitutes)</h2>
          <p className="mb-3">
            Your plan should be simple, repeatable, and tailored to your dog’s profile. Start with management and enrichment, add training,
            and tweak diet only as needed with your veterinary team.
          </p>

          <h3 className="text-lg font-semibold mt-2 mb-1">A) Environment &amp; Lawn Hygiene</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>Chemical control:</strong> coordinate with lawn services; post re-entry times in your Petunia note; rinse paws after public lawns.</li>
            <li><strong>Dog park rules:</strong> avoid muddy/poorly maintained areas; pick up immediately; prevent puddle drinking; favor off-peak times.</li>
            <li><strong>Plant inventory:</strong> identify/remove toxic plants; use raised beds or barriers; swap to pet-safe landscaping where feasible.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">B) Training &amp; Behavior</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>Interrupt &amp; pay:</strong> teach “leave it” and “let’s go”; reward head turns away from turf; reinforce sniffing over plucking.</li>
            <li><strong>Structured sniff-walks:</strong> 10–20 minutes of “follow the nose” lowers arousal and reduces lawn-mowing intensity.</li>
            <li><strong>Enrichment rotation:</strong> scatter feeding in clean areas, lick mats, novel chews, and foragers on heavy-graze days.</li>
            <li><strong>Alone-time plan:</strong> boredom is a grazer’s friend; place chews/enrichment before calls/meetings; rotate items.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">C) Diet Tweaks (If Indicated)</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>Fiber nudge:</strong> after vet review, consider modest fiber adjustments (within a complete diet) if your dog seeks grass regularly.</li>
            <li><strong>Regular feeding windows:</strong> predictable meals and a lean body condition stabilize many GI quirks.</li>
            <li><strong>Hydration &amp; gut support:</strong> fresh water; discuss probiotics where appropriate; avoid rapid food switches.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">D) Safer Substitutes for Avid Grazers</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Offer a tray of <em>pet-safe “grass”</em> (e.g., wheatgrass) indoors or on a balcony; rotate to keep novelty high.</li>
            <li>Pair “grass time” with a cue and end with a trade to a chew or training game.</li>
            <li>Use a basket-style muzzle for intensive foragers in high-risk areas while you retrain and tighten management.</li>
          </ul>

          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Facility tip (boarding/daycare):</strong> Post your lawn-care calendar, confirm monthly parasite prevention on intake, 
            and designate <em>clean grazing zones</em> (no herbicides, frequent poop pickup, rinse access). Train “leave it” as part of day-one orientation.
          </div>
        </section>

        {/* CHECKLISTS */}
        <section id="checklists" className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">Operator-Grade Checklists (Owners &amp; Facilities)</h2>

          <h3 className="text-lg font-semibold mt-2 mb-1">1) Home Setup for a Grass-Lover</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Lawn log: service dates, products used, re-entry intervals.</li>
            <li>Plant map: highlight toxic plants; fence/remove or elevate planters.</li>
            <li>Gear: front-clip harness, fixed-length leash, treats, basket muzzle (for chronic foragers), paw rinse bucket/towels.</li>
            <li>Enrichment shelf: chews, lick mats, puzzle feeders, sniff boxes; rotate daily.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">2) Walk Script (Repeatable)</h3>
          <ol className="list-decimal pl-5 space-y-2 mb-3">
            <li>Begin with 3–5 minutes of decompression sniffing.</li>
            <li>On approach to grass, cue “leave it” → mark eye contact → pay → pivot to a short training burst (hand target, U-turns).</li>
            <li>Release to <em>brief</em> grazing on clean turf if desired; end with a calm trade to a chew or scatter feed away from the patch.</li>
            <li>Log stools and any vomiting for pattern tracking.</li>
          </ol>

          <h3 className="text-lg font-semibold mt-2 mb-1">3) Monthly Owner Audit</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Frequency/intensity of grazing (daily? frantic? interruptible?).</li>
            <li>GI status (stool quality, appetite, weight, vomiting events).</li>
            <li>Environment (chemical exposures, dog-park hygiene, puddles/mud, plant changes).</li>
            <li>Training/enrichment adherence; adjust the arousal budget if grazing creeps up.</li>
          </ul>
        </section>

        {/* (The remainder—continued in Part 2.) */}
        {/* WHEN TO CALL THE VET NOW */}
        <section id="vet-now" className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">When to Call the Vet Now</h2>
          <p className="mb-3">
            Most grazing is harmless, but some patterns signal a medical problem or an exposure risk that cannot wait. 
            If you are unsure, call; tele-triage from your veterinary team will help you decide next steps.
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Frantic ingestion + vomiting or retching</strong> (especially repeated attempts within an hour), abdominal pain, or lethargy.</li>
            <li><strong>Black/tarry stool</strong> (melena), bright-red blood in vomit or stool, or persistent diarrhea.</li>
            <li><strong>Suspected chemical exposure</strong> (recent lawn treatment, pellets, baits) or a <strong>toxic plant</strong> ingestion.</li>
            <li><strong>Non-food items swallowed</strong> (rocks, fabric, sticks) or symptoms of obstruction (unproductive retching, painful abdomen, no stool).</li>
            <li><strong>Systemic changes</strong>: appetite loss, weight loss, dull coat, increased thirst/urination, or behavior change paired with grass obsession.</li>
          </ul>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm mt-3">
            <strong>Emergency note:</strong> If you suspect poisoning or a foreign-body obstruction, seek care immediately. Keep product labels, plant samples, or timing details handy for the veterinary team.
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">Frequently Asked Questions</h2>

          <p className="mb-3">
            <strong>Does grass make dogs vomit on purpose?</strong><br />
            Not typically. Many dogs graze without vomiting. When vomiting follows, it is more useful to treat it as a <em>signal</em> about the dog&rsquo;s current state (e.g., nausea) than as evidence that grass is a deliberate emetic.
          </p>

          <p className="mb-3">
            <strong>Is grass-eating a sign of a dietary deficiency?</strong><br />
            Rarely on modern complete diets. If grazing is escalating or accompanied by weight loss, stool changes, or skin/coat issues, your veterinarian may review the diet and run targeted tests. Some dogs seem to do well with modest fiber adjustments, but that is not a universal fix.
          </p>

          <p className="mb-3">
            <strong>My dog beelines for grass at the park. Should I stop going?</strong><br />
            You may not need to stop, but you <em>should</em> manage: pick cleaner areas, avoid muddy or poorly maintained sections, practice &ldquo;leave it&rdquo; and U-turns, and rinse paws/muzzle after. If diarrhea follows park trips, ask your vet about fecal testing and prevention.
          </p>

          <p className="mb-3">
            <strong>Could parasites be the reason?</strong><br />
            Parasites are part of the risk landscape in public turf. Use monthly prevention, pick up promptly, and test if signs develop. The &ldquo;parasite purge&rdquo; evolutionary story is interesting but not a reason to skip modern preventives.
          </p>

          <p className="mb-3">
            <strong>Is wheatgrass or &ldquo;cat grass&rdquo; safe for dogs?</strong><br />
            Yes, many owners offer pet-safe grasses as a controlled alternative. Place the tray where chemicals cannot drift and rotate to keep it novel. It is a <em>supplemental outlet</em>, not a treatment for GI disease.
          </p>

          <p className="mb-3">
            <strong>What if my adolescent is mowing the lawn every chance he gets?</strong><br />
            Increase decompression and sniff-walks, pre-load the environment with legal chews, and rehearse &ldquo;leave it&rdquo;/&ldquo;let&rsquo;s go.&rdquo; Add structured alone-time training so boredom does not drive foraging. If intensity stays high or expands to non-food items, loop in your veterinarian and a reward-based trainer.
          </p>

          <p className="mb-3">
            <strong>Can I use a muzzle to prevent ingestion on walks?</strong><br />
            A basket-style muzzle can be a humane, temporary tool while you retrain and clean up routes. Muzzle-train gradually with rewards so it predicts good things. Use alongside management and training rather than as a stand-alone solution.
          </p>

          <p className="mb-3">
            <strong>Are certain seasons worse?</strong><br />
            Yes—spring flush brings tender new growth and heavier lawn-care schedules; summer parks can concentrate parasites in warm, damp areas. Adjust your plan with seasons: timing of walks, rinsing, and avoidance of freshly treated or high-traffic zones.
          </p>

          <p className="mb-3">
            <strong>What should a boarding/daycare facility tell me about grass policies?</strong><br />
            Look for posted lawn-care calendars, defined &ldquo;clean&rdquo; zones, parasite-prevention requirements, and a plan for dogs who graze compulsively (training, redirect, or muzzle policy). Transparency is a green flag.
          </p>

          <p className="mb-3">
            <strong>Is there any benefit to letting my dog graze?</strong><br />
            For most healthy dogs, brief nibbling on clean turf is neutral—neither a problem nor a &ldquo;treatment.&rdquo; Focus on risk control and training. If grazing is the <em>only</em> way your dog seeks enrichment, expand your sniff/exploration menu so the behavior is one option among many.
          </p>

          <p className="mb-3">
            <strong>What records should I keep if my dog is a chronic grazer?</strong><br />
            Track frequency/intensity, triggers (weather, lawn schedule, time of day), stool quality, vomiting episodes, and any diet changes. Patterns drive better decisions and help your vet triage quickly.
          </p>
        </section>

        {/* SOURCES */}
        <section id="sources" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">📚 Sources (Selected)</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            <li>
              Merck Veterinary Manual (Professional &amp; Owner). Topics: <em>Gastrointestinal Disorders</em>; <em>Pica</em>; <em>Poisoning: Plants &amp; Pesticides</em>.{' '}
              <a href="https://www.merckvetmanual.com/" target="_blank" rel="noopener noreferrer">https://www.merckvetmanual.com/</a>
            </li>
            <li>
              AVSAB Position Statements (Humane Dog Training; Puppy Socialization).{' '}
              <a href="https://avsab.org/resources/position-statements/" target="_blank" rel="noopener noreferrer">https://avsab.org/resources/position-statements/</a>
            </li>
            <li>
              AAHA Preventive Care &amp; Canine Vaccination Guidelines (2022).{' '}
              <a href="https://www.aaha.org/education/guidelines/" target="_blank" rel="noopener noreferrer">https://www.aaha.org/education/guidelines/</a>
            </li>
            <li>
              WSAVA Global Vaccination Guidelines (context for preventive care).{' '}
              <a href="https://wsava.org/global-guidelines/vaccination-guidelines/" target="_blank" rel="noopener noreferrer">https://wsava.org/global-guidelines/vaccination-guidelines/</a>
            </li>
            <li>
              ASPCA Animal Poison Control Center (plant/toxin database &amp; hotline).{' '}
              <a href="https://www.aspca.org/pet-care/animal-poison-control" target="_blank" rel="noopener noreferrer">https://www.aspca.org/pet-care/animal-poison-control</a>
            </li>
            <li>
              Pet Poison Helpline (owner resources &amp; emergency number).{' '}
              <a href="https://www.petpoisonhelpline.com/" target="_blank" rel="noopener noreferrer">https://www.petpoisonhelpline.com/</a>
            </li>
            <li>
              CDC Healthy Pets, Healthy People — Dogs (parasite &amp; hygiene context).{' '}
              <a href="https://www.cdc.gov/healthypets/pets/dogs.html" target="_blank" rel="noopener noreferrer">https://www.cdc.gov/healthypets/pets/dogs.html</a>
            </li>
            <li>
              Sueda K.L., Hart B.L., Cliff K.D. <em>Characterization of plant eating in dogs</em>. (Owner survey describing frequency, illness before eating, vomiting after).{' '}
              <a href="https://pubmed.ncbi.nlm.nih.gov/" target="_blank" rel="noopener noreferrer">PubMed index</a>
            </li>
            <li>
              Hart B.L., et&nbsp;al. Additional summaries on canine plant-eating behavior and hypotheses (parasite-purge, fiber, exploratory).{' '}
              <a href="https://pubmed.ncbi.nlm.nih.gov/" target="_blank" rel="noopener noreferrer">PubMed index</a>
            </li>
          </ul>
          <p className="text-xs text-gray-600 mt-4">
            This article is educational and not a substitute for veterinary diagnosis or treatment. Always consult your veterinarian for medical decisions. 
            If you suspect a toxin exposure or an obstruction, seek immediate care.
          </p>
        </section>

        <Link href={`/${locale}/blog`} className="underline text-[#2c4a30] font-medium hover:opacity-80">
          &larr; Back to Blog
        </Link>
      </main>
    </>
  );
}
