'use client';

import Head from 'next/head';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function AreCaneCorsosAnActiveBreed() {
  const locale = useLocale();

  const title =
    'Are Cane Corsos an Active Breed? Exercise, Mental Work, Joint Health, Diet, and Socialization by Life Stage';
  const date = 'August 5, 2025';
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
    'Cane Corsos are thoughtful, powerful working dogs who need daily movement and mental work—but not chaotic, high-arousal activity. This life-stage guide covers exercise targets, enrichment, joint supplements, diet and body condition, public neutrality training, busy-family routines, and sample weekly plans for puppies, adults, and seniors.';

  return (
    <>
      <Head>
        <title>{title} – Petunia Blog</title>
        <meta name="description" content={description} />
        {/* Per user preference, avoid the word "index" here. */}
        <meta name="robots" content="all" />
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
            <li><a href="#snapshot" className="underline hover:opacity-80">Activity Snapshot</a></li>
            <li><a href="#energy-curve" className="underline hover:opacity-80">Energy Curve by Life Stage</a></li>
            <li><a href="#exercise" className="underline hover:opacity-80">Exercise Requirements</a></li>
            <li><a href="#mental" className="underline hover:opacity-80">Mental Stimulation &amp; Enrichment</a></li>
            <li><a href="#socialization" className="underline hover:opacity-80">Socialization &amp; Public Neutrality</a></li>
            <li><a href="#training" className="underline hover:opacity-80">Training Framework &amp; Busy Homes</a></li>
            <li><a href="#diet" className="underline hover:opacity-80">Healthy Diet &amp; Body Condition</a></li>
            <li><a href="#joints" className="underline hover:opacity-80">Joint Health &amp; Supplements</a></li>
            <li><a href="#safety" className="underline hover:opacity-80">Heat, Cold, and Safety</a></li>
            <li><a href="#indoor-days" className="underline hover:opacity-80">Indoor Days &amp; Bad Weather Plans</a></li>
            <li><a href="#multipet" className="underline hover:opacity-80">Multi-Pet Homes &amp; Public Places</a></li>
            <li><a href="#daycare" className="underline hover:opacity-80">Daycare &amp; Boarding for Active Corsos</a></li>
            <li><a href="#weekly-plans" className="underline hover:opacity-80">Sample Weekly Plans</a></li>
            <li><a href="#first90" className="underline hover:opacity-80">First 90 Days Program</a></li>
            <li><a href="#checklists" className="underline hover:opacity-80">Checklists &amp; Templates</a></li>
            <li><a href="#faq" className="underline hover:opacity-80">FAQ</a></li>
            <li><a href="#sources" className="underline hover:opacity-80">Sources (Selected)</a></li>
          </ul>
        </nav>

        {/* TL;DR */}
        <section id="tldr" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Short Answer (TL;DR)</h2>
          <p className="mb-4">
            Cane Corsos are <strong>active in a deliberate way</strong>: they need <strong>daily movement</strong>, <strong>consistent training</strong>, and <strong>regular mental work</strong>, but rarely
            thrive on chaotic, high-arousal play. Think <em>steady walks, strength basics, scent games, and public neutrality</em>, not endless fetch or dog-park
            brawls. The best outcomes come from <strong>lean body condition</strong>, <strong>structured routines</strong>, and <strong>calm leadership</strong>. With those pieces in place, most Corsos
            fit well into active families who enjoy purposeful exercise and quiet evenings.
          </p>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Petunia tip:</strong> In Petunia, create a weekly rhythm card: two calm walks daily, one short skills block, two strength days, and three
            enrichment sessions. Assign owners and teens specific roles so the plan actually happens.
          </div>
        </section>

        <section id="snapshot" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Activity Snapshot: What &quot;Active&quot; Means for a Corso</h2>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li><strong>Movement needs:</strong> 60–90 minutes of <em>purposeful</em> activity across the day for healthy adults, split into calm walks and short skills.</li>
            <li><strong>Mind work:</strong> daily problem solving beats sprinting. Ten minutes of scent or training is real exercise for the brain.</li>
            <li><strong>Arousal control:</strong> neutrality around people and dogs is a core sport; teach the dog to ignore rather than engage.</li>
            <li><strong>Surfaces matter:</strong> traction over speed. Avoid repetitive ball-chasing on slick floors or sharp turns that stress joints.</li>
            <li><strong>Recovery:</strong> steady routines, quality sleep, and lean weight protect joints more than weekend marathons ever will.</li>
          </ul>
          <p>
            Corsos are capable athletes when conditioned, but their superpower is <strong>self-possession under control</strong>. Because they are large,
            powerful dogs, activity planning must respect body mass and joint load as outlined in{' '}
            <Link
              href={`/${locale}/blog/how-big-are-cane-corsos`}
              className="underline hover:opacity-80"
            >
              How Big Are Cane Corsos
            </Link>
            . You build durability with predictable, repeatable habits—little things done daily.
          </p>
        </section>

        {/* Energy curve by life stage */}
        <section id="energy-curve" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Energy Curve by Life Stage: Puppies → Seniors</h2>

          <h3 className="text-lg font-semibold mt-2 mb-1">Puppies (0–6 months)</h3>
          <p className="mb-3">
            Growth plates are open, coordination is developing, and attention spans are short. Activity looks like <strong>short, frequent</strong> outings:
            potty walks, sniffy exploration, and two- to three-minute training bursts. Choose large-breed puppy nutrition or appropriate all-life-stage
            diets to support steady, <strong>lean</strong> growth. Avoid stairs sprints and repetitive jumping; your goal is movement literacy, not miles.
          </p>

          <h3 className="text-lg font-semibold mt-2 mb-1">Juveniles (6–18 months)</h3>
          <p className="mb-3">
            Adolescence brings size without full judgment. Increase walk duration gradually, add simple strength (sit-to-stand, balance stands), and
            practice neutrality in public. Expect arousal spikes and protect success with <strong>management</strong>: long line outdoors, gate the front door, and coach
            visitors to ignore the dog initially. This is when habits stick, good or bad.
          </p>

          <h3 className="text-lg font-semibold mt-2 mb-1">Young Adults (18 months–~5 years)</h3>
          <p className="mb-3">
            The athletic window. Build a <strong>two-walk plus one skill-block</strong> day. Add varied surfaces and gentle hills. Corsos do well with scent games,
            tracking-style searches, and calm strength patterns two to three times weekly. Keep arousal low; <em>think quiet competence</em> over chaos.
          </p>

          <h3 className="text-lg font-semibold mt-2 mb-1">Mature Adults (~5–8 years)</h3>
          <p className="mb-3">
            Maintain fitness with a little more recovery. Keep nails short, add warm-ups and cool-downs, and watch for subtle lameness. Adjust volume
            before pain forces long rest. Dental care and body condition vigilance pay outsized dividends now.
          </p>

          <h3 className="text-lg font-semibold mt-2 mb-1">Seniors (8+ years)</h3>
          <p>
            Shorter, more frequent walks, predictable schedules, traction runners at home, ramps for car and sofa, and strength micro-sessions keep
            mobility high. Enrichment shifts toward scent, puzzle feeding, and calm social time. Twice-yearly vet visits help tune the plan.
          </p>
        </section>

        {/* Exercise requirements */}
        <section id="exercise" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Exercise Requirements: How Much &amp; What Kind</h2>
          <p className="mb-3">
            Healthy adult Corsos commonly thrive on <strong>60–90 minutes</strong> of total movement per day, split into pieces. That does not mean sprinting or high
            arousal. It means <strong>steady walks</strong>, <strong>small skill blocks</strong>, and <strong>planned recovery</strong>. Puppies and seniors need far less volume but benefit from
            frequent, gentle motion and brain work. Always scale based on weather, surfaces, and your dog&#39;s individual temperament and health.
          </p>
          <h3 className="text-lg font-semibold mt-2 mb-1">A practical daily template</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>Morning:</strong> 15–30 minute sniff walk + 3–5 minute skills (hand targets, leash mechanics, settle on a mat).</li>
            <li><strong>Midday:</strong> 5–8 minute enrichment: scatter sniff, cardboard rip &amp; forage, frozen lick mat, or simple scent box search.</li>
            <li><strong>Evening:</strong> 20–40 minute calm walk or light hike + 5-minute strength block (sit-to-stand sets, balance stand, diagonal leg lifts).</li>
          </ul>
          <h3 className="text-lg font-semibold mt-2 mb-1">Strength basics (2–3 days/week)</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>Sit-to-stand:</strong> 3 sets of 5 with perfect form.</li>
            <li><strong>Balance stand:</strong> 3 holds of 10–20 seconds; reward calm stillness.</li>
            <li><strong>Cookie stretches:</strong> nose to shoulder/hip; slow and symmetric.</li>
            <li><strong>Cavaletti poles:</strong> low height, slow pace, both directions.</li>
          </ul>
          <p>
            Warm up with three to five minutes of easy walking. Cool down the same. Avoid repetitive fetch on slick surfaces or hard, tight turns.
            The point is durability, not exhaustion.
          </p>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm mt-3">
            <strong>Petunia tip:</strong> Log distance, duration, and a 1–5 excitement score for each outing. You will notice that lower-arousal sessions often
            produce calmer evenings and better learning next day.
          </div>
        </section>

        {/* Mental stimulation */}
        <section id="mental" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Mental Stimulation &amp; Enrichment: Work the Brain</h2>
          <p className="mb-3">
            For guardian breeds, thinking work matters as much as steps. Ten minutes of <strong>nosework</strong> can settle a Corso better than a 40-minute game
            of fetch. Rotate low-cost games and keep difficulty just above baseline so your dog wins with effort.
          </p>
          <h3 className="text-lg font-semibold mt-2 mb-1">Rotation ideas</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>Find-it scatter:</strong> toss kibble into short grass; release to search.</li>
            <li><strong>Box searches:</strong> hide food in one of three boxes; shuffle and let the dog solve.</li>
            <li><strong>Sniff trails:</strong> drag a treat-filled sock for 20 feet; lay turns; release to track.</li>
            <li><strong>Lick mats &amp; chews:</strong> spread thinned food on a mat or offer a safe chew for decompression.</li>
            <li><strong>Trick micro-sessions:</strong> chin rest, paw target, bow, spin—two minutes counts.</li>
          </ul>
          <p>
            Finish enrichment with a short <strong>settle</strong> on a mat to let the nervous system downshift. Over time, this pattern builds a dog who can
            flip between activity and rest on cue.
          </p>
        </section>

        {/* Socialization & neutrality */}
        <section id="socialization" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Socialization &amp; Public Neutrality at All Ages</h2>
          <p className="mb-3">
            For a guardian breed, socialization does not mean greeting every person and dog. It means <strong>calm exposure without obligation</strong>.
            Puppy&#39;s first year should include quiet observation of strollers, wheelchairs, kids playing, hats and hoods, umbrellas, traffic, and polite
            ignoring of strangers. The dog learns that these are background, not problems to fix.
          </p>
          <h3 className="text-lg font-semibold mt-2 mb-1">Rules of thumb</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Expose at a distance where your dog stays <strong>under threshold</strong> and can earn rewards for disengaging.</li>
            <li>Use a <strong>long line</strong> for freedom without chaos; reward check-ins.</li>
            <li>End sessions early while success is high. Wins build confidence faster than white-knuckled endurance.</li>
            <li>Teach &quot;look at that&quot;: mark the glance at a trigger, then reward returning attention.</li>
          </ul>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Petunia tip:</strong> Track a weekly exposure list in Petunia with a 1–5 calm score and the distance where neutrality holds. Progress is
            measured in calm seconds and shorter distances over time.
          </div>
        </section>

        {/* Training framework */}
        <section id="training" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Training Framework &amp; Busy Homes: Clarity Beats Intensity</h2>
          <p className="mb-3">
            Corsos are very trainable but not forgiving of fuzzy rules. The right approach is <strong>calm, reward-based training</strong> paired with consistent
            boundaries. Avoid both harshness and permissiveness. Think <em>matter-of-fact leadership</em>. Daily activity and training structure also
            play a major role in whether a Corso is a good match for a household, especially with kids and frequent visitors (explored in{' '}
            <Link
              href={`/${locale}/blog/are-cane-corsos-good-family-dogs`}
              className="underline hover:opacity-80"
            >
              Are Cane Corsos Good Family Dogs
            </Link>
            ).
          </p>
          <h3 className="text-lg font-semibold mt-2 mb-1">Core family skills</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Leash mechanics: heel at the thigh, automatic sit at curbs, default attention cue.</li>
            <li>Place/settle: go to mat and relax while life happens.</li>
            <li>Door protocol: leash on before door opens; guests ignore initially; optional greeting on cue.</li>
            <li>Out/drop: easy release of toys and food bowls; prevents resource guarding.</li>
            <li>Recall: cheerful &quot;come&quot; that works when arousal rises.</li>
          </ul>
          <h3 className="text-lg font-semibold mt-2 mb-1">Busy-family adaptations</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Gate the front hall so the dog cannot rush the door.</li>
            <li>Use crates or behind-gate &quot;rest zones&quot; during kid parties or loud play.</li>
            <li>Assign specific walking and training blocks to family members via Petunia.</li>
          </ul>
        </section>

        {/* Diet & body condition */}
        <section id="diet" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Healthy Food &amp; Healthy Diet: Fuel the Athlete You Want</h2>
          <p className="mb-3">
            The single biggest longevity lever is <strong>body condition</strong>. Lean dogs live longer and move more comfortably across breeds. Feed a complete
            diet that meets AAFCO or FEDIAF profiles for your dog&#39;s life stage. Measure meals to calories, not scoops, and re-check portions every two
            weeks based on weight and a 9-point body condition score target of 4–5.
          </p>
          <h3 className="text-lg font-semibold mt-2 mb-1">Practical nutrition habits</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Add water to kibble for hydration and satiety.</li>
            <li>Cap treats at ten percent of daily calories; use part of the ration as training rewards.</li>
            <li>For sensitive stomachs, transition foods slowly and favor consistency over novelty.</li>
            <li>Ask your veterinarian about omega-3 support from marine sources for joint and coat health.</li>
          </ul>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Petunia tip:</strong> Photograph your measuring cup next to the bag label and bowl. Upload side/top/rear body photos monthly to keep trends honest.
          </div>
        </section>

        {/* Joint health & supplements */}
        <section id="joints" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Joint Health &amp; Supplements: Protect the Hardware</h2>
          <p className="mb-3">
            Corsos carry mass on big joints. The most powerful joint protector is a <strong>lean physique</strong>, followed by smart surfaces and controlled patterns.
            Supplements can help some individuals, especially combined with weight control and exercise.
          </p>
          <h3 className="text-lg font-semibold mt-2 mb-1">Common options to discuss with your veterinarian</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>Omega-3 fatty acids (EPA/DHA):</strong> joint and skin support; dose and product quality matter.</li>
            <li><strong>Glucosamine/chondroitin/green-lipped mussel:</strong> widely used for joint comfort in some dogs.</li>
            <li><strong>Hyaluronic acid, collagen, or undenatured type-II collagen:</strong> emerging adjuncts for joint support.</li>
            <li><strong>Joint-friendly pain plans:</strong> your vet may recommend anti-inflammatories or rehab programs when indicated.</li>
          </ul>
          <p>
            Supplements are not a substitute for management. Keep nails short, use traction runners at home, avoid slippery fetch, and warm up
            before activity. Small daily habits preserve mobility.
          </p>
        </section>

        {/* Heat, cold & safety */}
        <section id="safety" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Heat, Cold, and Safety: Conditions Matter</h2>
          <p className="mb-3">
            Large, dark-coated dogs can overheat quickly. In hot months, shift walks to dawn and dusk, favor shade and water breaks, and monitor
            panting recovery time. In cold months, protect paws and avoid icy slips. Year-round, bring water on longer outings and know your
            emergency hospital route.
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Heat plan: walk early/late, carry water, rest after meals, and watch for unusual fatigue.</li>
            <li>Cold plan: trim paw fur lightly, use paw balm or boots if needed, and keep nails short for traction.</li>
            <li>Vehicle plan: treat cars like ovens in heat and fridges in winter; err on safety.</li>
          </ul>
        </section>

        {/* Indoor days */}
        <section id="indoor-days" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Indoor Days &amp; Bad Weather Plans</h2>
          <p className="mb-3">
            Activity is a pattern, not a location. On storm days, run <strong>two</strong> short enrichment blocks and a leash-walk circuit indoors with sit/down at
            each doorway. Add a sniff box search and a five-minute mat settle. You will be surprised how tired a Corso becomes from thinking work and
            calm obedience reps.
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Leash &quot;house laps&quot; with polite sits.</li>
            <li>Stair-free strength micro-sets (if joints are healthy): sit-to-stand, balance stands.</li>
            <li>Smell games: tea bag in a vented container as a target scent to hunt.</li>
          </ul>
        </section>

        {/* Multi-pet & public places */}
        <section id="multipet" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Multi-Pet Homes &amp; Public Places</h2>
          <p className="mb-3">
            Many Corsos live peacefully with other animals when introductions are structured. Feed separately, store chews when dogs are
            together, and teach turn-taking during affection. In public, prioritize <strong>neutrality</strong> over mingling. Parallel walks with known dogs beat
            chaotic dog-park scenes for this breed.
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Gate swapping at home during week one of new introductions.</li>
            <li>Parallel walks before close contact; permit brief sniffing only if both dogs are loose and soft.</li>
            <li>End on success, not on &quot;one more rep&quot; that tips arousal over the edge.</li>
          </ul>
        </section>

        {/* Daycare & Boarding */}
        <section id="daycare" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Daycare &amp; Boarding for Active Corsos</h2>
          <p className="mb-3">
            Corsos often prefer <strong>small groups</strong>, <strong>short play sets</strong>, and <strong>structured sniff walks</strong> over all-day free-for-all play. When evaluating care:
          </p>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Ask about staff-to-dog ratios, play style matching, and rest schedules.</li>
            <li>Look for traction surfaces, ramps, and careful introductions.</li>
            <li>Share your home management rules: door protocol, &quot;place&quot; cue, and preferred greeting style (often polite ignoring).</li>
          </ul>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Petunia tip:</strong> Attach your Petunia &quot;activity card&quot; to boarding reservations so staff mirror your routines—same leash cues, settle spots,
            and food portions.
          </div>
        </section>

        {/* Weekly plans */}
        <section id="weekly-plans" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Sample Weekly Plans (Print-Friendly)</h2>

          <h3 className="text-lg font-semibold mt-2 mb-1">Puppy (under 6 months)</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>6–8 tiny outings/day: potty + 5–10 minute sniff walk loops.</li>
            <li>3–5 micro training sessions/day: hand target, name game, settle on mat.</li>
            <li>Daily novel surface exposure: rubber mat, grass, gravel, wood deck.</li>
            <li>2–3 enrichment sessions: sniff scatter, cardboard forage box, lick mat.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Young adult (18 months–~5 years)</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>2 walks/day (20–40 min each) at calm pace, hills if joints tolerate.</li>
            <li>1 skill block/day (5–10 min): leash skills, place, recall games.</li>
            <li>2–3 strength sessions/week (6–10 min): sit-to-stand, balance, cavaletti.</li>
            <li>3 enrichment sessions/week (8–12 min): scent searches, puzzle feed, carton rip.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Senior (8+ years)</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>3 short walks/day (10–20 min), cooler hours, even surfaces.</li>
            <li>Strength micro-sets 3x/week with perfect form and long rest.</li>
            <li>Daily scent or puzzle work; increase decompression time.</li>
            <li>Weekly nail, ear, and coat checks to prevent discomfort.</li>
          </ul>
        </section>

        {/* First 90 days */}
        <section id="first90" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Your First 90 Days: Build the Active Corso You Want</h2>

          <h3 className="text-lg font-semibold mt-2 mb-1">Days 1–7: Pattern beats intensity</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Morning sniff loop + 3-minute skills; quiet exposure to neighborhood sounds.</li>
            <li>Teach &quot;place&quot; and door protocol; guests ignore initially.</li>
            <li>Set food measurements and photograph portions; start a weight log.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Weeks 2–6: Layer the work</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Add strength basics 2–3 days/week; track sets and form.</li>
            <li>Neutrality walks past schools, parks, and shops at non-peak hours.</li>
            <li>Rotate two enrichment games per day; end with a mat settle.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Weeks 7–12: Proof &amp; prepare</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Quiet cafe sits, corner table, short stays; pay for calm glances and disengagement.</li>
            <li>Muzzle training as a life skill for vet and grooming comfort.</li>
            <li>Review body photos; adjust calories if BCS drifts above 5/9.</li>
          </ul>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm mt-3">
            <strong>Petunia tip:</strong> Convert this 90-day plan into repeating Petunia tasks with checkboxes. Consistency makes &quot;active&quot; sustainable.
          </div>
        </section>

        {/* Checklists */}
        <section id="checklists" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Checklists &amp; Templates</h2>

          <h3 className="text-lg font-semibold mt-2 mb-1">Daily Rhythm Card</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>AM: Sniff walk + 3–5 minute skills.</li>
            <li>Midday: Enrichment rotation or long-line decompression sniff.</li>
            <li>PM: Calm walk/hike + 5-minute strength block; evening mat settle.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Visitor Script (Family Rules)</h3>
          <ol className="list-decimal pl-5 space-y-2 mb-3">
            <li>Leash on; send to &quot;place&quot; behind a gate or on a mat.</li>
            <li>Guests ignore the dog for five minutes while coats and voices settle.</li>
            <li>Optional single-person greeting on cue; side angle, one calm pet, then disengage.</li>
            <li>Return to &quot;place&quot; or relax near handler; reward calm, quiet breathing.</li>
          </ol>

          <h3 className="text-lg font-semibold mt-2 mb-1">Gear List</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Flat collar + sturdy front-clip harness for leverage.</li>
            <li>6-foot leash for sidewalks; 15–20 foot line for decompression walks.</li>
            <li>Mat for &quot;place&quot;; water bottle; night visibility for evening walks.</li>
            <li>Nail trimmer or grinder; slicker brush and comb; towel for quick dry.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">Frequently Asked Questions</h2>

          <p className="mb-3">
            <strong>Are Cane Corsos high-energy dogs?</strong><br />
            They are <em>steady-energy</em> dogs. Most need consistent movement and mental work but do best with lower arousal and clear routines. Think hikers,
            walkers, and backyard sniffers—not endless ball machines.
          </p>

          <p className="mb-3">
            <strong>How many miles should a healthy adult Corso walk?</strong><br />
            There is no single number. Many adults thrive on 60–90 minutes of total movement split into sessions, scaled to weather and surfaces. Quality of
            movement and neutrality matter more than absolute distance.
          </p>

          <p className="mb-3">
            <strong>Is a dog park a good outlet?</strong><br />
            Usually not. Most Corsos prefer known companions, parallel walks, and structured play with rests. Dog-park chaos creates arousal and friction.
          </p>

          <p className="mb-3">
            <strong>Which joint supplements are worth trying?</strong><br />
            Discuss omega-3s from marine sources, glucosamine/chondroitin or green-lipped mussel, and other adjuncts with your veterinarian. Weight control
            and surfaces will beat any pill if you must choose one thing.
          </p>

          <p className="mb-3">
            <strong>What is the single best habit to add this week?</strong><br />
            Photograph portions, measure meals to calories, and add one five-minute skill block per day. You will see calmer behavior within a week.
          </p>

          <p className="text-xs text-gray-600">
            Educational content only. Always consult your veterinarian and a qualified trainer for individualized medical and behavior guidance.
          </p>
        </section>

        {/* Sources */}
        <section id="sources" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">📚 Sources (Selected)</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            <li>
              American Kennel Club (AKC). Cane Corso breed overview and activity basics.
              <a href="https://www.akc.org/dog-breeds/cane-corso/" target="_blank" rel="noopener noreferrer"> AKC profile</a>
            </li>
            <li>
              Fédération Cynologique Internationale (FCI). Cane Corso Italiano standard (FCI No. 343).
              <a href="https://www.fci.be/en/nomenclature/CANE-CORSO-ITALIANO-343.html" target="_blank" rel="noopener noreferrer"> FCI standard</a>
            </li>
            <li>
              American Animal Hospital Association (AAHA). Canine life stage guidelines (preventive care, weight, exercise).
              <a href="https://www.aaha.org/education/guidelines/canine-life-stage-guidelines/" target="_blank" rel="noopener noreferrer"> AAHA guideline hub</a>
            </li>
            <li>
              World Small Animal Veterinary Association (WSAVA). Global dental guidelines.
              <a href="https://wsava.org/global-guidelines/dental-guidelines/" target="_blank" rel="noopener noreferrer"> WSAVA dental</a>
            </li>
            <li>
              American College of Veterinary Surgeons (ACVS). Gastric dilatation-volvulus overview and prophylactic gastropexy.
              <a href="https://www.acvs.org/small-animal/gastric-dilatation-volvulus" target="_blank" rel="noopener noreferrer"> ACVS resource</a>
            </li>
            <li>
              American Heartworm Society (AHS). Parasite prevention guidelines.
              <a href="https://www.heartwormsociety.org/veterinary-resources/american-heartworm-society-guidelines" target="_blank" rel="noopener noreferrer"> AHS guidelines</a>
            </li>
            <li>
              International Association of Animal Behavior Consultants (IAABC). Best practices for family dog management and safety.
              <a href="https://iaabc.org/" target="_blank" rel="noopener noreferrer"> IAABC</a>
            </li>
            <li>
              Orthopedic Foundation for Animals (OFA). Hip and elbow resources; joint screening frameworks.
              <a href="https://ofa.org/" target="_blank" rel="noopener noreferrer"> OFA</a>
            </li>
          </ul>
          <p className="text-xs text-gray-600 mt-4">
            Sources are provided for general education. Training and medical plans should be individualized with your veterinary and behavior teams.
          </p>
        </section>

        {/* Related Cane Corso Articles */}
        <div className="mt-16 border-t border-[#d9cfc2] pt-8">
          <h2 className="text-xl font-semibold mb-4 text-[#2c4a30]">
            More Cane Corso Guides You May Like
          </h2>

          <ul className="list-disc pl-6 space-y-2 text-[#2c4a30]">
            <li>
              <Link
                href="https://www.petuniapets.com/en/blog/what-is-the-bite-force-of-a-cane-corso"
                className="underline hover:opacity-80"
              >
                What Is the Bite Force of a Cane Corso?
              </Link>
            </li>
            <li>
              <Link
                href="https://www.petuniapets.com/en/blog/are-cane-corsos-good-family-dogs"
                className="underline hover:opacity-80"
              >
                Are Cane Corsos Good Family Dogs?
              </Link>
            </li>
            <li>
              <Link
                href="https://www.petuniapets.com/en/blog/do-cane-corsos-have-health-issues"
                className="underline hover:opacity-80"
              >
                Do Cane Corsos Have Common Health Issues?
              </Link>
            </li>
            <li>
              <Link
                href="https://www.petuniapets.com/en/blog/how-big-are-cane-corsos"
                className="underline hover:opacity-80"
              >
                How Big Are Cane Corsos?
              </Link>
            </li>
            <li>
              <Link
                href="https://www.petuniapets.com/en/blog/how-much-does-a-cane-corso-cost-to-own"
                className="underline hover:opacity-80"
              >
                How Much Does a Cane Corso Cost to Own?
              </Link>
            </li>
          </ul>
        </div>

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
