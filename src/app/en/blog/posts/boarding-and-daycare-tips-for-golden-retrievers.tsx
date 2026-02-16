'use client';

import Head from 'next/head';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function BoardingAndDaycareTipsForGoldenRetrievers() {
  const locale = useLocale();

  const title =
    'Boarding & Daycare Tips for Golden Retrievers: A Complete Owner’s Guide';
  const date = 'August 8, 2025';
  const categories = ['owner', 'breed_specific_guides'] as const;

  // Exact labels used in prior posts (do not change keys/labels)
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
    'Operator-grade guidance for boarding or enrolling a Golden Retriever in daycare: readiness and vaccine planning, ear/skin care after water play, hot spot prevention, weight and orthopedic protection, cancer-aware monitoring, enrichment, rest architecture, heat/water safety, incident escalation, and copy/paste checklists. Professional veterinary sources included.';

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
            <li><a href="#tl-dr" className="underline hover:opacity-80">TL;DR</a></li>
            <li><a href="#overview" className="underline hover:opacity-80">Core Overview</a></li>
            <li><a href="#readiness" className="underline hover:opacity-80">Boarding &amp; Daycare Readiness</a></li>
            <li><a href="#vaccines" className="underline hover:opacity-80">Vaccines &amp; Disease Risk</a></li>
            <li><a href="#behavior" className="underline hover:opacity-80">Temperament &amp; Playstyle</a></li>
            <li><a href="#energy" className="underline hover:opacity-80">Energy, Arousal &amp; Rest</a></li>
            <li><a href="#water-heat" className="underline hover:opacity-80">Water &amp; Heat Safety</a></li>
            <li><a href="#ears-skin" className="underline hover:opacity-80">Ears, Skin &amp; Grooming</a></li>
            <li><a href="#weight-ortho" className="underline hover:opacity-80">Weight &amp; Orthopedics</a></li>
            <li><a href="#cancer" className="underline hover:opacity-80">Cancer-Aware Monitoring</a></li>
            <li><a href="#housing" className="underline hover:opacity-80">Housing, Enrichment &amp; Logs</a></li>
            <li><a href="#feeding-meds" className="underline hover:opacity-80">Feeding &amp; Medications</a></li>
            <li><a href="#puppies-seniors" className="underline hover:opacity-80">Puppies &amp; Seniors</a></li>
            <li><a href="#incidents" className="underline hover:opacity-80">Incident Escalation</a></li>
            <li><a href="#templates" className="underline hover:opacity-80">Checklists &amp; Templates</a></li>
            <li><a href="#vet-now" className="underline hover:opacity-80">When to Call the Vet Now</a></li>
            <li><a href="#faq" className="underline hover:opacity-80">FAQ</a></li>
            <li><a href="#sources" className="underline hover:opacity-80">📚 Sources (Selected)</a></li>
          </ul>
        </nav>

        {/* TL;DR */}
        <section id="tl-dr" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Short Answer (TL;DR)</h2>
          <p className="mb-4">
            Golden Retrievers are <strong>social, athletic, water-loving</strong> dogs who excel in well-run group settings—<em>if</em> intensity, rest, and hygiene are
            managed on purpose. Your plan should center on <strong>current core vaccines</strong> (plus regional noncore as advised), <strong>ear/skin care after water days</strong>,
            <strong>weight control</strong> to protect joints, <strong>non-slip surfaces</strong> and <strong>metered fetch</strong> to reduce cruciate/soft-tissue strain, <strong>heat mitigation</strong>, and <strong>structured rest</strong>.
            Because Goldens carry breed risks for <em>ear disease, skin “hot spots,” orthopedic issues, and certain cancers</em>, owners and facilities should use
            <strong>checklists and objective logs</strong> rather than memory. That’s what keeps play fun <em>and</em> safe.
          </p>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Petunia tip:</strong> Store your Golden’s <em>vaccine dates</em>, <em>diet in grams</em>, <em>ear-dry routine</em>, <em>meds</em>, <em>preferred games</em>, and <em>triggers</em> in Petunia. Share with your facility so everyone follows the same protocol (&rarr; no missed meds, no forgotten ear care).
          </div>
        </section>

        {/* OVERVIEW */}
        <section id="overview" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Core Overview: Why Goldens Need a System</h2>
          <p className="mb-3">
            Goldens are famously <strong>friendly and biddable</strong>—qualities that make them stars of daycare and easy boarders for well-designed facilities. As gundogs bred
            to work in fields and water, many Goldens will <em>chase, carry, and swim</em> long past sensible limits unless a human meters the fun. In busy playgroups, that
            drive shows up as <strong>ball fixation, joyful chase games, and rapid arousal ramps</strong>. None of that is a problem <em>if</em> the environment includes rest cycles, grip surfaces, and
            rules around toys and water. The predictable risks for this breed in group settings are <strong>otitis externa</strong> (after water play), <strong>hot spots</strong> (moisture + friction),
            <strong>overweight</strong> (which magnifies joint strain), and <strong>soft-tissue/orthopedic injuries</strong> from repeated sprints and decelerations. Good operators manage these with
            <em>checklists, rubrics, and logs</em> rather than vibes.
          </p>
          <p>
            This guide pairs <strong>owner actions</strong> (intake info, packing, health oversight) with <strong>facility systems</strong> (group assignment, water/heat rules, hygiene, documentation).
            It’s written to the professional standards of AAHA/AVMA/WSAVA guidelines and specialty-college client resources (ACVS/ACVAA), with links in the sources.
          </p>
        </section>

        {/* READINESS */}
        <section id="readiness" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Boarding &amp; Daycare Readiness (Owner &amp; Facility)</h2>
          <h3 className="text-lg font-semibold mt-2 mb-1">Owner pre-check (72–48 hours before drop-off)</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>Vaccination status:</strong> Confirm <em>core</em> (rabies, DA2PP) and discuss <em>noncore</em> (Bordetella, canine influenza, leptospirosis) based on regional risk and facility policy (per AAHA guidance).</li>
            <li><strong>Parasite control:</strong> Heartworm prevention where indicated; external/internal parasite control per your veterinarian; bring last fecal test date.</li>
            <li><strong>Medical notes:</strong> History of <em>ear infections</em>, <em>hot spots</em>, <em>allergies</em>, <em>stifle/hip issues</em>, <em>GI sensitivity</em>, or <em>lumps</em> noted at home; list meds/supplements with dosing windows.</li>
            <li><strong>Behavior &amp; triggers:</strong> Ball fixation, resource guard around toys/water, gate excitement, anxiety at rest; known cues (<em>leave it</em>, <em>mat</em>, <em>drop</em>).</li>
            <li><strong>Nutrition:</strong> Food brand and <em>daily grams</em> (not cups), feeding times, treat rules, and target body condition. Bring measured meals in labeled bags.</li>
            <li><strong>Water plan:</strong> Approve or decline pool/splashpad access; specify <em>ear-dry protocol</em> if your vet has prescribed a drying solution.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Facility intake (day-of)</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Quick screen:</strong> Demeanor, hydration, coat/skin check, ear check (odor/redness), gait symmetry, <em>body condition score</em>.</li>
            <li><strong>Group assignment:</strong> Use a rubric (see below) to place Goldens in <em>fetch-managed</em> or <em>sniff &amp; stroll</em> micro-groups with scheduled rests.</li>
            <li><strong>Consent &amp; thresholds:</strong> Written policies for heat/water rules, toy management, medical escalation, and permission for veterinary transport if needed.</li>
          </ul>

          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm mt-3">
            <strong>Operator mindset:</strong> Assume a Golden will <em>try to do more</em> than is ideal. Your job is to meter intensity, enforce rest, and do the simple hygiene that prevents 80% of avoidable issues.
          </div>
        </section>

        {/* VACCINES */}
        <section id="vaccines" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Vaccines &amp; Infectious Disease Risk</h2>
          <p className="mb-3">
            Group environments raise exposure to respiratory and enteric pathogens. Follow <strong>AAHA Canine Vaccination Guidelines</strong>: core vaccines include <strong>rabies</strong> and
            <strong> DA2PP</strong> (distemper, adenovirus, parvovirus, parainfluenza). Noncore options depend on risk and policy, commonly <strong>Bordetella bronchiseptica</strong>,
            <strong> canine influenza</strong>, and <strong>leptospirosis</strong> (zoonotic; exposure via wildlife/standing water). Facilities should have written isolation and disinfection protocols,
            with rapid owner notification if exposure is suspected.
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>CIRDC (“kennel cough” complex):</strong> Watch for cough, nasal/ocular discharge, fever, lethargy; reduce crowding and improve ventilation.</li>
            <li><strong>Leptospirosis:</strong> Consider vaccination if local risk is present; hygiene matters around urine-contaminated areas and shared yards.</li>
          </ul>
        </section>

        {/* BEHAVIOR */}
        <section id="behavior" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Temperament &amp; Playstyle: Golden-Friendly, Not Golden-Wild</h2>
          <p className="mb-3">
            The AKC describes Golden Retrievers as <strong>friendly, reliable, and trustworthy</strong>. In practice, many Goldens show three predictable daycare patterns: (1) <em>ball fixation</em>
            that amps arousal, (2) <em>chase-&amp;-tag</em> games that can turn into pileups without structure, and (3) <em>greeter energy</em> at doors/fences. Good operators channel this with
            <strong>fetch rules</strong> (one dog per throw; release line), <strong>visual barriers</strong> to reduce gate arousal, and frequent <strong>downshift cues</strong> (mat, nose-target, <em>leave it</em>).
          </p>
          <h3 className="text-lg font-semibold mt-2 mb-1">Playgroup rubric (copy/paste)</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Green:</strong> Social greeter; releases toy on cue; disengages when asked; can share space around water features.</li>
            <li><strong>Yellow:</strong> Ball-focused; chases hard; vocal at gates; needs <em>fetch partition</em>, specific throw counts, and scheduled rest.</li>
            <li><strong>Red:</strong> Resource guarding of toys/hoses/space; assign 1:1 enrichment; no group fetch.</li>
          </ul>
          <p>
            Reward the <strong>off-switch</strong>: mark and pay for eye contact, hand-targets, and relaxed body language. Rotate high-arousal with low-arousal activities (sniff work, shaping games).
          </p>
        </section>

        {/* ENERGY & REST */}
        <section id="energy" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Energy, Arousal &amp; Rest Architecture</h2>
          <p className="mb-3">
            Daycare should feel like a <strong>training plan</strong>, not an eight-hour sprint. Use a rhythm such as <strong>20–30 minutes of structured play</strong> followed by <strong>20–30 minutes of quiet rest</strong>,
            adjusted for weather, age, and condition. Quiet rooms/crates with <em>cool temps, dim light, white noise</em>, and comfy bedding help Goldens downshift and reduce overuse injuries.
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Pre-play warm-up:</strong> short leash walk, cookie stretches, simple nosework to prepare tissues and mind.</li>
            <li><strong>Cool-down:</strong> shade, slow sniff walk, tepid water; watch for <em>tongue splay, glassy eyes, slowing response</em>—early fatigue signals.</li>
            <li><strong>Surface choice:</strong> turf with grip, rubberized indoor floors, and no high-speed fetch on slick concrete or wet tile.</li>
          </ul>
        </section>

        {/* WATER & HEAT */}
        <section id="water-heat" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Water &amp; Heat Safety for Water-Loving Goldens</h2>
          <p className="mb-3">
            Many Goldens adore hoses, splash pads, and pools. Treat water zones like a <strong>lifeguarded space</strong>: one-at-a-time entries, <em>no</em> ball throws into pools, and close supervision.
            On hot/humid days, shift toward shaded sniff work, puzzle feeding, and indoor mat work. Know the signs of heat stress and cool gradually (shade, fans, tepid water).
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Slips/collisions:</strong> No sprint-and-stop fetch in wet areas; use retrieve lanes and limits.</li>
            <li><strong>Hydration:</strong> Offer water frequently; watch for gulping large volumes during play (rare risk of water intoxication).</li>
            <li><strong>Ear care:</strong> After water play, <em>towel-dry pinna and canal entry</em> and apply your vet-advised drying solution when prescribed.</li>
          </ul>
        </section>

        {/* EARS & SKIN */}
        <section id="ears-skin" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Ears, Skin &amp; Grooming: The High-Yield Habits</h2>
          <p className="mb-3">
            Goldens’ floppy ears and love of water create perfect conditions for <strong>otitis externa</strong>. Preventive care is simple and powerful: after any swim or splash day, dry the ears and,
            if your veterinarian has advised it, use a <em>drying/acetic</em> solution. Monitor for <strong>head shaking, odor, redness, discharge, pain</strong>. Early treatment prevents chronic cycles and deeper infections.
          </p>
          <p className="mb-3">
            Skin “<strong>hot spots</strong>” (pyotraumatic dermatitis) often follow moisture + friction (wet coat under harness/collar) or allergic flares. Keep coats clean/dry, rinse off chlorine,
            dry thoroughly, and use vet-directed shampoos if needed. For <strong>oral care</strong>, daily brushing is best; adjunct chews bearing the <strong>VOHC</strong> seal can help with plaque/tartar alongside brushing.
          </p>
        </section>

        {/* WEIGHT & ORTHO */}
        <section id="weight-ortho" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Weight Management &amp; Orthopedic Protection</h2>
          <p className="mb-3">
            Many Goldens are <strong>food-motivated</strong> and trend toward <strong>overweight/obesity</strong>, which multiplies joint stress and injury risk. Aim for a <strong>body condition score (BCS) of 4–5/9</strong>,
            weigh monthly at minimum, and feed by <em>grams</em> rather than cups. Use AAHA/WSAVA nutrition resources to set portions and treat budgets; reweigh every 2–4 weeks during weight change.
          </p>
          <p className="mb-3">
            Orthopedic risks include <strong>cranial cruciate ligament (CCL) disease</strong> and <strong>hip dysplasia</strong>. Reduce torque by avoiding uncontrolled stop-start sprints and slick surfaces;
            warm up before play; meter fetch volume; and keep your Golden lean. If you notice <em>hindlimb lameness, toe-touching, difficulty rising, or reluctance to jump</em>, scale activity down and contact your veterinarian.
          </p>
        </section>

        {/* CANCER */}
        <section id="cancer" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Cancer-Aware Monitoring (Breed Reality, Calm Approach)</h2>
          <p className="mb-3">
            Golden Retrievers have been the focus of large-scale research into cancer epidemiology. While this guide is about boarding/daycare, it’s worth aligning
            on <strong>early detection habits</strong>—because daily handling in facilities often spots the first clues. Ask staff to note any <strong>new lumps</strong>, <strong>rapidly growing masses</strong>,
            <strong> unexplained weight loss</strong>, <strong>pale gums</strong>, <strong>exercise intolerance</strong>, or <strong>persistent lameness</strong>. Most findings are benign, but systematic documentation helps your veterinarian triage quickly.
          </p>
          <p>
            Owners can support prevention by maintaining a <strong>lean body condition</strong>, regular veterinary exams, and prompt workups for concerning signs. Facilities contribute by sending
            timely, objective observations (photo + location + timestamp) rather than vague notes.
          </p>
        </section>

        {/* HOUSING */}
        <section id="housing" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Housing, Enrichment &amp; Objective Logs</h2>
          <p className="mb-3">
            High-quality boarding uses <strong>quiet, climate-controlled rest spaces</strong> with bedding, white noise, and low light to support true recovery between play blocks. For Goldens, mix <strong>retrieve</strong>
            (metered), <strong>sniff work</strong>, <strong>enrichment puzzles</strong>, and <strong>mat work</strong> that rehearses the off-switch. The more predictable the schedule, the better the behavior.
          </p>
          <h3 className="text-lg font-semibold mt-2 mb-1">What to track every day</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Meals (grams), treats (kcal estimate), water offered/consumed.</li>
            <li>Play intensity (low/med/high), rest periods, and any heat adjustments.</li>
            <li>Ear care performed (Y/N), skin checks (hot spots), gait notes (lameness).</li>
            <li>Behavior notes: triggers, best playmates, successful cues.</li>
          </ul>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm mt-3">
            <strong>Petunia workflow:</strong> Ask your facility to export the day’s log with photos of any ear/skin care and upload it to Petunia. Over time, you’ll build a health timeline that speeds your vet’s decisions.
          </div>
        </section>

        {/* FEEDING & MEDS */}
        <section id="feeding-meds" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Feeding &amp; Medications: Precision &gt; “He Usually Eats…”</h2>
          <p className="mb-3">
            Send food in <strong>labeled daily bags (grams)</strong> with clear treat rules and a list of <strong>no-go foods</strong>. If weight loss or maintenance is a goal, include your <em>target body weight</em> and expected weekly change
            (e.g., 1–2%/week). Slow-feeders and puzzle bowls add enrichment without over-arousal.
          </p>
          <p>
            For medications, use original containers with <strong>dosing time windows</strong>, <strong>with/without food</strong> notes, and a <strong>two-person verification</strong> or digital sign-off. Facilities should call owners immediately if a dose is refused or vomited.
          </p>
        </section>

        {/* PUPPIES & SENIORS */}
        <section id="puppies-seniors" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Puppies &amp; Seniors: Same Breed, Different Needs</h2>
          <p className="mb-3">
            <strong>Puppies</strong> require thoughtfully curated social exposure, completion of vaccine series per your vet’s schedule, and careful management of arousal so play stays positive.
            Keep sessions short, reinforce calm, and protect growing joints. <strong>Seniors</strong> benefit from <strong>shorter play blocks</strong>, <strong>softer surfaces</strong>, more frequent potty breaks, and medication schedules
            that account for arthritis or other chronic conditions. Rest architecture matters more with age.
          </p>
        </section>

        {/* INCIDENTS */}
        <section id="incidents" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Incident Escalation: Clear Thresholds Save Time</h2>
          <h3 className="text-lg font-semibold mt-2 mb-1">Escalate to owner immediately if:</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Persistent cough, fever, nasal/ocular discharge, or breathing difficulty (CIRDC concern).</li>
            <li>Repeated vomiting/diarrhea, anorexia, or dark urine after questionable water exposure (possible leptospirosis risk &rarr; veterinary guidance).</li>
            <li>Acute lameness or non-weight-bearing gait (possible CCL injury) or collapse/heat stress signs.</li>
            <li>Ear pain with head tilt, severe odor/discharge, or worrisome neurologic signs.</li>
            <li>New rapidly growing mass, pale gums, or unexplained exercise intolerance.</li>
          </ul>
          <p className="mt-3">
            Use a standardized <strong>incident form</strong>: objective description, time stamps, witnesses, photos (if appropriate), first aid provided, and next steps. Owners should receive the form and a same-day call.
          </p>
        </section>

        {/* TEMPLATES */}
        <section id="templates" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Checklists &amp; Templates (Copy/Paste)</h2>

          <h3 className="text-lg font-semibold mt-2 mb-1">Owner Packing List</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Kibble pre-portioned in daily bags (<em>grams labeled</em>), treats with kcal notes, meds in original containers.</li>
            <li>Flat collar with ID; microchip number; primary vet contact; emergency clinic address.</li>
            <li>Ears: towel + vet-advised drying solution (if prescribed); grooming brush; VOHC-approved chew for dental care.</li>
            <li>Mat/blanket and one non-guarded toy (avoid resource triggers in group areas).</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Playgroup Assignment Rubric</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Age/BCS; orthopedic history (stifle/hip); heat sensitivity.</li>
            <li>Ball fixation (Y/N); toy guard (Y/N); off-switch cues known (<em>mat</em>, <em>leave it</em>, <em>drop</em>).</li>
            <li>Assign: <em>Fetch-managed</em> cohort vs. <em>sniff &amp; stroll</em> cohort; set rest timers and retrieve limits.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Daily Log Template</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Meals (g), treats (kcal), water offered/consumed.</li>
            <li>Play blocks/rest blocks; heat adjustments; ear-dry performed (Y/N).</li>
            <li>Stool/urine notes; skin/ear checks; gait/lameness notes.</li>
            <li>Behavior: triggers, best playmates, successful cues.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Post-Swim Ear-Care Protocol</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Towel-dry pinna and canal entry.</li>
            <li>Apply vet-recommended drying solution per label.</li>
            <li>Log as performed; flag redness/odor/pain for owner.</li>
          </ul>

          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm mt-3">
            <strong>Petunia tip:</strong> Convert these into reusable checklists in Petunia so staff and owners see the same steps in real time.
          </div>
        </section>

        {/* VET NOW */}
        <section id="vet-now" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">When to Call the Vet <em>Now</em></h2>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Heat stress</strong>: collapse, disorientation, severe panting, tacky gums—cool in shade/AC and seek care.</li>
            <li><strong>Respiratory signs</strong> in a facility-exposed dog: persistent cough, labored breathing, fever (CIRDC concern).</li>
            <li><strong>Acute lameness</strong> or non-weight-bearing limb after play (possible CCL or soft-tissue injury).</li>
            <li><strong>Ear pain</strong> with head tilt, foul discharge, or neurologic signs.</li>
            <li><strong>Repeated vomiting/diarrhea</strong>, dark urine after suspect water exposure (consider leptospirosis risk; use biosecurity).</li>
            <li><strong>New fast-growing mass</strong>, pale gums, collapse, or unexplained exercise intolerance.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">Frequently Asked Questions</h2>

          <p className="mb-3">
            <strong>What vaccines should my Golden have for boarding/daycare?</strong><br />
            Core (<strong>rabies, DA2PP</strong>) and regionally appropriate noncore (<strong>Bordetella, canine influenza, leptospirosis</strong>) per your vet and facility policy.
          </p>

          <p className="mb-3">
            <strong>How can I prevent ear infections if my Golden swims?</strong><br />
            Dry ears after water play and use a vet-recommended drying solution when advised; watch for head shaking, odor, redness, or discharge.
          </p>

          <p className="mb-3">
            <strong>Are Goldens at risk for joint injuries?</strong><br />
            Yes—keep your Golden <strong>lean</strong>, warm up before play, avoid slippery sprint/stop games, and meter fetch volume. See your vet for any lameness.
          </p>

          <p className="mb-3">
            <strong>What does a “good day” in daycare look like?</strong><br />
            Batches of <em>structured play</em> and <em>enforced rest</em>, hydration, shade, ear/skin checks after water, and objective logs sent to you at pickup.
          </p>

          <p className="mb-3">
            <strong>Do dental chews help?</strong><br />
            Brushing is best; <strong>VOHC-accepted</strong> chews can assist with plaque/tartar when used alongside brushing.
          </p>

          <p>
            <strong>Do facilities really notice medical issues first?</strong><br />
            Often, yes. Daily handling and logs make facilities early “sensors” for ear/skin problems, lameness, lumps, or behavior changes—share those notes with your vet.
          </p>
        </section>

        {/* SOURCES */}
        <section id="sources" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">📚 Sources (Selected)</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            {/* Breed background & behavior */}
            <li>
              American Kennel Club (AKC). Golden Retriever breed overview.{' '}
              <a href="https://www.akc.org/dog-breeds/golden-retriever/" target="_blank" rel="noopener noreferrer">
                https://www.akc.org/dog-breeds/golden-retriever/
              </a>
            </li>

            {/* Vaccination & infectious disease */}
            <li>
              AAHA. <em>2022 Canine Vaccination Guidelines</em> (core/noncore, risk-based recommendations).{' '}
              <a href="https://www.aaha.org/resources/2022-aaha-canine-vaccination-guidelines/" target="_blank" rel="noopener noreferrer">
                https://www.aaha.org/resources/2022-aaha-canine-vaccination-guidelines/
              </a>{' '}
              | PDF:{' '}
              <a href="https://www.aaha.org/wp-content/uploads/globalassets/02-guidelines/2022-aaha-canine-vaccination-guidelines/resources/2022-aaha-canine-vaccinations-guidelines.pdf" target="_blank" rel="noopener noreferrer">
                AAHA Vaccination PDF
              </a>
            </li>
            <li>
              AVMA. Canine Infectious Respiratory Disease Complex (CIRDC, “kennel cough”).{' '}
              <a href="https://www.avma.org/resources-tools/pet-owners/petcare/canine-infectious-respiratory-disease-complex-kennel-cough" target="_blank" rel="noopener noreferrer">
                https://www.avma.org/.../canine-infectious-respiratory-disease-complex-kennel-cough
              </a>
            </li>
            <li>
              CDC. Leptospirosis &amp; pets (risk, prevention, vaccination context).{' '}
              <a href="https://www.cdc.gov/leptospirosis/pets/index.html" target="_blank" rel="noopener noreferrer">
                https://www.cdc.gov/leptospirosis/pets/
              </a>{' '}
              | About leptospirosis:{' '}
              <a href="https://www.cdc.gov/leptospirosis/about/index.html" target="_blank" rel="noopener noreferrer">
                https://www.cdc.gov/leptospirosis/about/
              </a>
            </li>

            {/* Nutrition & weight */}
            <li>
              WSAVA Global Nutrition Guidelines. Tools for assessing BCS, calories, and pet-owner communication.{' '}
              <a href="https://wsava.org/global-guidelines/global-nutrition-guidelines/" target="_blank" rel="noopener noreferrer">
                https://wsava.org/global-guidelines/global-nutrition-guidelines/
              </a>
            </li>
            <li>
              AAHA. <em>2021 Nutrition &amp; Weight Management Guidelines</em>.{' '}
              <a href="https://www.aaha.org/resources/2021-aaha-nutrition-and-weight-management-guidelines/" target="_blank" rel="noopener noreferrer">
                https://www.aaha.org/resources/2021-aaha-nutrition-and-weight-management-guidelines/
              </a>
            </li>

            {/* Ears & skin */}
            <li>
              Merck Veterinary Manual (MSD). Ear infections (otitis externa) in dogs—owner &amp; professional pages.{' '}
              <a href="https://www.merckvetmanual.com/dog-owners/ear-disorders-of-dogs/ear-infections-and-otitis-externa-in-dogs" target="_blank" rel="noopener noreferrer">
                Otitis externa (owner)
              </a>{' '}
              |{' '}
              <a href="https://www.msdvetmanual.com/ear-disorders/otitis-externa/otitis-externa-in-animals" target="_blank" rel="noopener noreferrer">
                Otitis externa (professional)
              </a>
            </li>
            <li>
              Merck Veterinary Manual (MSD). Pyotraumatic dermatitis (“hot spots”) in dogs.{' '}
              <a href="https://www.merckvetmanual.com/dog-owners/skin-disorders-of-dogs/pyotraumatic-dermatitis-hot-spots-in-dogs" target="_blank" rel="noopener noreferrer">
                https://www.merckvetmanual.com/.../pyotraumatic-dermatitis-hot-spots-in-dogs
              </a>
            </li>

            {/* Orthopedics */}
            <li>
              ACVS. Cranial Cruciate Ligament Disease—client education.{' '}
              <a href="https://www.acvs.org/small-animal/cranial-cruciate-ligament-disease/" target="_blank" rel="noopener noreferrer">
                https://www.acvs.org/small-animal/cranial-cruciate-ligament-disease/
              </a>
            </li>
            <li>
              ACVS. Hip Dysplasia—client education.{' '}
              <a href="https://www.acvs.org/small-animal/hip-dysplasia/" target="_blank" rel="noopener noreferrer">
                https://www.acvs.org/small-animal/hip-dysplasia/
              </a>
            </li>

            {/* Dental adjuncts */}
            <li>
              Veterinary Oral Health Council (VOHC). Accepted Products for Dogs.{' '}
              <a href="https://vohc.org/accepted-products/" target="_blank" rel="noopener noreferrer">
                https://vohc.org/accepted-products/
              </a>
            </li>

            {/* Cancer awareness */}
            <li>
              Morris Animal Foundation. Golden Retriever Lifetime Study (owner &amp; veterinary resources).{' '}
              <a href="https://www.morrisanimalfoundation.org/golden-retriever-lifetime-study" target="_blank" rel="noopener noreferrer">
                https://www.morrisanimalfoundation.org/golden-retriever-lifetime-study
              </a>
            </li>
            <li className="text-xs text-gray-600">
              Educational content only. Always consult your veterinarian for individualized medical advice, diagnosis, and treatment for your Golden Retriever.
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
