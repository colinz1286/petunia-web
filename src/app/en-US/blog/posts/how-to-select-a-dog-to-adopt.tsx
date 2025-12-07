'use client';

import Head from 'next/head';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function HowToSelectADogToAdopt() {
  const locale = useLocale();

  // --- Metadata ---------------------------------------------------------------
  const title =
    'How to Select a Dog to Adopt: A Practical, Evidence-Informed Playbook (Lifestyle Fit, Behavior, Health, and a 30-Day Success Plan)';
  const date = 'August 18, 2025';
  const categories = ['owner', 'rescue'] as const;

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

  const slug = 'how-to-select-a-dog-to-adopt';
  const description =
    'A step-by-step adoption guide: define your lifestyle, evaluate behavior and temperament, understand health/age trade-offs, run a structured meet-and-greet, ask the right questions, and follow a 30-day plan to set your new dog up for success. Includes checklists and red-flag audits.';

  return (
    <>
      <Head>
        <title>{title} – Petunia Blog</title>
        <meta name="description" content={description} />
        <meta name="robots" content="index,follow" />
        <link
          rel="canonical"
          href={`https://www.petuniapets.com/${locale}/blog/${slug}`}
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
            <li><a href="#summary" className="underline hover:opacity-80">TL;DR + Petunia Tip</a></li>
            <li><a href="#mindset" className="underline hover:opacity-80">How to Think About Adoption</a></li>
            <li><a href="#lifestyle" className="underline hover:opacity-80">Lifestyle Fit (Time, Space, Energy)</a></li>
            <li><a href="#constraints" className="underline hover:opacity-80">Constraints: Housing, Budget, Access</a></li>
            <li><a href="#where" className="underline hover:opacity-80">Where to Adopt: Shelter vs. Foster-based Rescue</a></li>
            <li><a href="#behavior" className="underline hover:opacity-80">Behavior &amp; Temperament: What Matters</a></li>
            <li><a href="#meet" className="underline hover:opacity-80">Meet-and-Greet Script (60 Minutes)</a></li>
            <li><a href="#kids-pets" className="underline hover:opacity-80">Kids, Cats, and Resident Dogs</a></li>
            <li><a href="#health-age" className="underline hover:opacity-80">Health &amp; Age: Puppy → Senior</a></li>
            <li><a href="#questions" className="underline hover:opacity-80">Questions to Ask the Shelter/Rescue</a></li>
            <li><a href="#redflags" className="underline hover:opacity-80">Red Flags (Listings &amp; Process)</a></li>
            <li><a href="#checklists" className="underline hover:opacity-80">Operator-Grade Checklists</a></li>
            <li><a href="#day1-30" className="underline hover:opacity-80">Adoption Day &amp; First 30 Days</a></li>
            <li><a href="#faq" className="underline hover:opacity-80">FAQ</a></li>
            <li><a href="#sources" className="underline hover:opacity-80">📚 Sources (Selected)</a></li>
          </ul>
        </nav>

        {/* TL;DR */}
        <section id="summary" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">TL;DR + Petunia Tip</h2>
          <p className="mb-3">
            Selecting the right dog is about <strong>fit first</strong>: your time, energy, housing, budget, and tolerance for training and management. 
            Build a short list with staff or the foster family, run a <strong>structured meet-and-greet</strong>, audit health/age trade-offs, and 
            commit to a <strong>30-day onboarding plan</strong> with positive-reinforcement training and clear household rules. Reward-based training 
            is the modern standard, and an early veterinary visit plus identification (collar tags + microchip registration) are non-negotiable.
          </p>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Petunia tip:</strong> In Petunia, create a <em>“New Dog 30-Day Plan”</em> note with routines (wake/meal/potty), decompression rules,
            trainer contact, a supply checklist, and a weekly behavior log. Attach the adoption paperwork, vaccination records, and microchip number so 
            everything lives in one place you can share with sitters or boarding teams.
          </div>
        </section>

        {/* MINDSET */}
        <section id="mindset" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">How to Think About Adoption (Systems, Not Impulse)</h2>
          <p className="mb-3">
            Great adoptions rarely hinge on a single trait like size or color. They come from <strong>systems</strong>: a clear goal, a short list,
            a consistent evaluation script, and a realistic onboarding plan. Shelters and rescues have valuable information (daily notes, enrichment logs,
            playgroup observations, foster feedback), and your job is to <em>translate that context into your life</em>. 
            The outcome you want is not a perfect dog—it&rsquo;s a <strong>predictable first month</strong> where you can teach, reinforce, and adjust.
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Modern training:</strong> Favor reward-based methods that minimize fear and pain. Build behaviors you want, manage those you don&rsquo;t.</li>
            <li><strong>Evidence lens:</strong> Returns most often relate to behavior fit and owner expectations; plan support early.</li>
            <li><strong>Capacity:</strong> If you cannot offer consistency right now (schedule, housing stability, finances), hit pause and foster or volunteer instead.</li>
          </ul>
        </section>

        {/* LIFESTYLE FIT */}
        <section id="lifestyle" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Lifestyle Fit (Time, Space, Energy)</h2>
          <p className="mb-3">
            Build a picture of your daily and weekly rhythm, then match dogs who thrive within those constraints. This is more predictive than breed 
            stereotyping and eliminates most mismatches before you ever step into a meet-and-greet.
          </p>
          <h3 className="text-lg font-semibold mt-2 mb-1">Time &amp; attention budget</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>Training:</strong> Can you deliver 15–20 minutes of focused training per day for the first 60–90 days?</li>
            <li><strong>Exercise:</strong> Do you have slots for sniff walks, decompression, and enrichment—even on bad-weather days?</li>
            <li><strong>Supervision:</strong> Puppies and adolescents need higher supervision and management (doors, trash, counters) than steady adults.</li>
          </ul>
          <h3 className="text-lg font-semibold mt-2 mb-1">Space &amp; environment</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Elevator buildings, shared hallways, or tight stairwells can amplify reactivity; choose dogs already comfortable with that traffic.</li>
            <li>Yards are optional; <em>predictable routines</em> matter more than square footage.</li>
          </ul>
          <h3 className="text-lg font-semibold mt-2 mb-1">Energy &amp; drive</h3>
          <p className="mb-3">
            Think in <em>jobs</em> rather than labels. Dogs with high play or work drive need durable outlets (training games, scentwork, hiking). 
            Companion-mode dogs prefer routine, soft exercise, and naps. Many wonderful dogs sit in the middle—happy with a daily walk, some training, 
            and predictable downtime.
          </p>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Quick self-audit:</strong> How many minutes can you reliably invest on a <em>bad</em> weekday? Which two behaviors matter most to teach first?
            Where will the dog rest uninterrupted?
          </div>
        </section>

        {/* CONSTRAINTS */}
        <section id="constraints" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Constraints: Housing, Budget, Access</h2>
          <p className="mb-3">
            Constraints are not negative; they are design inputs. A tight budget, strict landlord, or limited transport will shape your short list and your 
            support plan. Surface those limits now so adoption day feels calm, not improvised.
          </p>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>Housing:</strong> Confirm pet policies, weight limits, deposits, insurance requirements, and any breed-related rules where you live.</li>
            <li><strong>Budget:</strong> Map initial costs (adoption fee, supplies, vet intake) and recurring costs (food, parasite prevention, grooming, training, insurance).</li>
            <li><strong>Access:</strong> Identify nearby vets, 24/7 ER, and a reward-based trainer. If transport is limited, choose dogs comfortable with rideshares or urban walking.</li>
          </ul>
        </section>

        {/* WHERE TO ADOPT */}
        <section id="where" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Where to Adopt: Shelter vs. Foster-based Rescue</h2>
          <p className="mb-3">
            Municipal and nonprofit shelters typically operate on-site with staff/volunteers observing dogs daily. Foster-based rescues place dogs in homes 
            until adoption. Both can be excellent. What matters most is <strong>good information flow</strong>: daily notes, behavior history, medical records, and a team 
            willing to discuss fit openly. Ask how the organization gathers behavior info (playgroups, handling notes, foster diaries) and what support they provide 
            post-adoption (hotline, training vouchers, return policies).
          </p>
          <p className="mb-3">
            Expect transparent process steps: application, interview, meet-and-greet, and a clear contract covering identification, sterilization, vaccines, and return terms. 
            Many teams encourage a quiet meet space so you can see the dog&rsquo;s baseline outside of kennel arousal—that&rsquo;s a green flag.
          </p>
        </section>

        {/* BEHAVIOR & TEMPERAMENT */}
        <section id="behavior" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Behavior &amp; Temperament: What Actually Matters</h2>
          <p className="mb-3">
            Think in domains: <strong>social comfort with people</strong>, <strong>dog-dog behavior</strong>, <strong>frustration tolerance</strong>, 
            <strong>novelty resilience</strong> (surfaces, sounds, equipment), <strong>handling tolerance</strong>, and <strong>food/toy manners</strong>. 
            Shelter behavior snapshots are context-dependent, so combine on-site observations with foster notes and your structured meet-and-greet.
          </p>
          <h3 className="text-lg font-semibold mt-2 mb-1">Green-flag behaviors</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Recovers after startle (shakes off, returns to sniffing or eating).</li>
            <li>Chooses people voluntarily (soft eye, loose body, curved approach).</li>
            <li>Takes treats gently and can disengage from food/toys with simple trades.</li>
            <li>Walks away instead of escalating when unsure.</li>
          </ul>
          <h3 className="text-lg font-semibold mt-2 mb-1">Orange-flag behaviors (plan/management needed)</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Hard freezing under touch, persistent lip licking, tucked tail that does not release with space and time.</li>
            <li>Explosive barrier reactivity that does not soften away from the kennel or fence line.</li>
            <li>Intense resource guarding with a known bite history <em>without</em> professional support lined up.</li>
          </ul>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Training stance:</strong> Start with reward-based methods; avoid punishment for fear or uncertainty. If you see big feelings, 
            downshift the environment and ask for easy behaviors the dog already knows. Build trust; the rest follows.
          </div>
        </section>

        {/* MEET-AND-GREET */}
        <section id="meet" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Meet-and-Greet Script (60 Minutes, Calm &amp; Structured)</h2>
          <p className="mb-3">
            Ask for a quiet room or outdoor corner away from kennel noise. The goal is a <strong>fair sample</strong> of the dog&rsquo;s behavior, not a circus of stimuli. 
            Have soft treats, a slip lead or harness fitted by staff, and a toy you can trade. Keep voices low and movements smooth.
          </p>
          <ol className="list-decimal pl-5 space-y-2 mb-3">
            <li><strong>Minutes 0–10:</strong> Let staff bring the dog in; ignore for a minute; toss a treat on the ground; observe sniffing, approach/retreat, and recovery if startled.</li>
            <li><strong>Minutes 10–20:</strong> Light handling: collar touch, harness clip, gentle paw/ear check if the dog is comfortable. If the dog says no, listen.</li>
            <li><strong>Minutes 20–35:</strong> Short walk to a calmer area. Note traffic sensitivity, leash manners, check-ins, and if the dog can eat outside the kennel.</li>
            <li><strong>Minutes 35–45:</strong> Simple training (name game, hand target). This shows how the dog learns, not what they already know.</li>
            <li><strong>Minutes 45–60:</strong> Low-key downtime: sit on a bench; see if the dog settles near you. Review questions with staff while the dog rests.</li>
          </ol>
          <p className="mb-3">
            If you have a resident dog, follow the organization&rsquo;s policy for intros. Many will stage <em>dog-dog</em> meets after an initial human session and may split them across visits. 
            Do not rush cat or kid testing in chaotic spaces—plan those thoughtfully with the team&rsquo;s help.
          </p>
        </section>

        {/* KIDS & OTHER PETS */}
        <section id="kids-pets" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Kids, Cats, and Resident Dogs</h2>
          <p className="mb-3">
            Family fit is about management and modeling, not just the dog. Teach children to give space during rest, to use gentle touch, and to recruit an adult if the dog 
            takes an object. For dogs and cats, management first: doors, gates, crates, leashes, and <em>separate decompression zones</em>.
          </p>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>Dogs + dogs:</strong> Parallel walks and decompression before any indoor time together. Short, structured sessions. End on easy wins.</li>
            <li><strong>Dogs + cats:</strong> Leash the dog, elevate cat resources, add safe-room retreats, feed on opposite sides of a closed door initially.</li>
            <li><strong>Kids:</strong> Adults handle feeding, leashing, and higher-risk tasks for the first month. Rehearse quiet greeting routines.</li>
          </ul>
        </section>

        {/* HEALTH & AGE */}
        <section id="health-age" className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">Health &amp; Age: Puppy → Senior</h2>
          <p className="mb-3">
            Every age band carries trade-offs. Puppies offer a long runway but high supervision and house-training. Adolescents are powerful and impulsive but moldable with 
            consistency. Adults are often predictable day to day. Seniors can be blissfully easy roommates but may need medical budgeting. Your decision is about <strong>capacity</strong>, not virtue.
          </p>
          <h3 className="text-lg font-semibold mt-2 mb-1">Medical intake &amp; preventive care</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Plan a veterinary intake within the first week: full exam, fecal test, parasite prevention, vaccine review, and microchip scan/update.</li>
            <li>Ask which vaccines were given and when the next boosters are due; note any shelter-specific protocols and local rabies rules.</li>
            <li>Confirm sterilization status, dental findings, and any meds the dog is currently taking.</li>
          </ul>
          <h3 className="text-lg font-semibold mt-2 mb-1">Age-band snapshots</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Puppy (≤6 months):</strong> Highest supervision, two-week quarantine from dog-dense spaces if vaccine series is incomplete, intensive socialization and training.</li>
            <li><strong>Adolescent (6–24 months):</strong> Big feelings, big body. Prioritize impulse control games, decompression, and protected rest.</li>
            <li><strong>Adult (2–7 years):</strong> Often the sweet spot for predictability; verify prior routines and reinforce what works.</li>
            <li><strong>Senior (7+ years):</strong> Budget for arthritis care and diagnostics. Many seniors are delightfully easy companions.</li>
          </ul>
        </section>

        {/* QUESTIONS FOR ORGS */}
        <section id="questions" className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">Questions to Ask the Shelter/Rescue</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Daily life:</strong> What does a typical day look like? Any crate time? How does the dog handle downtime?</li>
            <li><strong>People:</strong> Reactions to new visitors, handling for collars/harnesses, and any notes about grooming or vetting.</li>
            <li><strong>Dogs:</strong> Playgroup notes, on-leash reactivity, preferred play style, and decompression after excitement.</li>
            <li><strong>Environment:</strong> Elevator/hallway comfort, traffic noise, surfaces, car rides.</li>
            <li><strong>Health:</strong> Vaccine dates, parasite tests, sterilization, dental, meds, and any chronic issues.</li>
            <li><strong>History:</strong> Stray or owner-surrender? Any known triggers or prior training?</li>
            <li><strong>Support:</strong> Post-adoption assistance, training vouchers, hotline, and return policy.</li>
          </ul>
        </section>

        {/* RED FLAGS */}
        <section id="redflags" className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">Red Flags (Listings &amp; Process)</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Vague or boilerplate behavior notes with no daily context, or refusal to discuss observations.</li>
            <li>Pressure to adopt same-day without time for a quiet meet or questions.</li>
            <li>Missing or unverifiable vaccine/microchip records, or unclear return policy.</li>
            <li>Promises of a <em>“guaranteed kid-safe dog”</em> without management and training guidance.</li>
          </ul>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Reality check:</strong> A great process feels collaborative. If the team cannot or will not share behavior context, expand your search.
          </div>
        </section>

        {/* OPERATOR CHECKLISTS (Part 1 ends mid-article; continued in Part 2) */}
        <section id="checklists" className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">Operator-Grade Checklists (Snapshot)</h2>

          <h3 className="text-lg font-semibold mt-2 mb-1">1) Personal Readiness</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Daily time budget and backup coverage mapped.</li>
            <li>Housing and financial constraints verified; initial and recurring costs listed.</li>
            <li>Vet, ER, trainer, and sitter/boarding options identified.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">2) Pre-Meet Packet</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Short-list profiles with behavior notes and health snapshots.</li>
            <li>Meet-and-greet script printed; quiet space requested.</li>
            <li>Treats, harness plan, and trade toy packed; calm schedule afterward for reflection.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">3) Adoption Day Essentials</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Tags with your phone, sturdy collar, secure harness, and non-retractable leash.</li>
            <li>Crate or car restraint, soft bedding, and a gate plan for your home entry.</li>
            <li>Paperwork copies, microchip registration info, and first-week vet appointment booked.</li>
          </ul>
        </section>

                {/* OPERATOR CHECKLISTS — continued */}
        <section id="checklists-continued" className="mb-12">
          <h3 className="text-lg font-semibold mt-2 mb-1">4) Home Setup (Before Adoption Day)</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Zones &amp; flow: gates, crate, resting spot, potty door path, and a quiet decompression room.</li>
            <li>Management: trash can with lid, counter clear, shoes/cords secured, litter box and cat food elevated.</li>
            <li>Supplies staged: ID tag, flat collar, front-clip harness, fixed-length leash, treats, chews, puzzle toys, stain/odor remover.</li>
            <li>Family rules posted: how to greet, when to give space, who handles feeding/walks/overnight.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">5) Safety, Travel, and Identification</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Two forms of ID: tag with your phone and a registered microchip (confirm number and update registry).</li>
            <li>Car restraint: crash-tested crate or seat-belt harness; no loose dogs in vehicles.</li>
            <li>Emergency card: nearest 24/7 ER, your primary vet, and a backup caregiver.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">6) Paperwork &amp; Records</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Adoption contract, spay/neuter certificate, vaccine history with dates, deworming/flea/tick prevention logs.</li>
            <li>Behavior notes from shelter/foster: handling, playgroup observations, routines, triggers, meds.</li>
            <li>Upload PDFs/photos of records into your Petunia profile for one-tap sharing with sitters or boarding teams.</li>
          </ul>
        </section>

        {/* ADOPTION DAY & FIRST 30 DAYS */}
        <section id="day1-30" className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">Adoption Day &amp; First 30 Days</h2>
          <p className="mb-3">
            Your first month is about decompression, predictability, and gentle skill-building. Think quiet routines, clear boundaries, and many easy wins. 
            The goal is not perfection; it&rsquo;s trust plus habits that make good choices automatic.
          </p>

          <h3 className="text-lg font-semibold mt-2 mb-1">Day 0: The Hand-Off</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Travel straight home. Skip pet-store detours and busy introductions. Carry a few soft treats and water.</li>
            <li>Walk to potty spot first, then inside to the prepped decompression room. Keep voices low and motions smooth.</li>
            <li>Offer water, then food in a calm corner. No tug-of-war over bowls or toys on day one—set up for success.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Days 1–3: Decompression</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Short, predictable routines: wake &rarr; potty &rarr; breakfast &rarr; rest; repeat with gentle enrichment.</li>
            <li>Leash indoors if needed to prevent rehearsal of door dashing or counter surfing.</li>
            <li>House-training refresher: outside after wake, after meals, after play, and every 2–3 hours initially.</li>
            <li>Introduce crate or resting zone with food sprinkled inside; door open at first; close briefly only when calm.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Week 1: Foundations</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Name game, hand target, settle on mat, trade/drop, and walking basics (reward check-ins).</li>
            <li>Alone-time training: start with 30–60 seconds out of sight, return &rarr; treat &rarr; downshift; build gradually.</li>
            <li>Two 10–15 minute training blocks per day beat one long session. Keep reps short and successful.</li>
            <li>Vet intake visit (or tele-vet triage) to review records and schedule anything due.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Week 2: Expanding the World</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Low-stakes field trips: quiet streets, a friend&rsquo;s yard, elevator lobbies at off hours.</li>
            <li>Introduce handling routines: collar touch, harness clip, gentle paw/ear checks with treats.</li>
            <li>Practice consent: if the dog turns away, pause; re-offer later; reward re-engagement.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Week 3: Structure + Freedom</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Add predictable privileges: bedroom door open at night, larger house zones, new toys under supervision.</li>
            <li>Refine leash skills; start &ldquo;leave it&rdquo; and &ldquo;go to mat&rdquo; with easy distractions.</li>
            <li>Track patterns: sleep, stool, appetite, energy, and triggers. Adjust exercise/food accordingly.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Week 4: Sustainment Plan</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Graduate to your steady routine: exercise menu, enrichment cadence, weekly training goals.</li>
            <li>Line up a reward-based trainer for a three-session package; practice between sessions.</li>
            <li>Confirm pet insurance or emergency savings, microchip registration, and your care network.</li>
          </ul>

          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm mt-3">
            <strong>Template schedule:</strong> 07:00 potty/breakfast → 09:00 training 10 min → 12:30 sniff walk → 16:00 enrichment 
            (lick mat, scatter feed) → 18:00 dinner → 19:30 training 10 min → 21:30 last potty → quiet overnight.
          </div>
        </section>

        {/* TRAINING STARTUP PLAN */}
        <section id="training" className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">Training Startup Plan (Reward-Based)</h2>
          <p className="mb-3">
            Begin with easy, high-frequency wins and clear management. Avoid rehearsing problem behaviors; prevent, then teach alternatives. 
            Reinforcement drives repetition; position your dog to choose right.
          </p>

          <h3 className="text-lg font-semibold mt-2 mb-1">Core Skills (First 30–60 Days)</h3>
          <ol className="list-decimal pl-5 space-y-2 mb-3">
            <li><strong>Name &rarr; orient</strong> (mark/reward eye contact).</li>
            <li><strong>Hand target</strong> (move through space calmly; great for doorways or greeting).</li>
            <li><strong>Mat settle</strong> (downshift during meals, calls, guests).</li>
            <li><strong>Trade &amp; drop</strong> (proactive guarding prevention; reward the release).</li>
            <li><strong>Loose-leash walking</strong> (reinforce check-ins; U-turns as resets).</li>
            <li><strong>Leave it</strong> (start with covered food; work up to floor items).</li>
            <li><strong>Door etiquette</strong> (sit, eye contact, release word).</li>
            <li><strong>Alone-time skills</strong> (graduated departures; enrich before rest).</li>
            <li><strong>Handling consent</strong> (chin rest to opt in; pause if the dog opts out).</li>
            <li><strong>Calm greeting</strong> (four feet on floor earns attention; jumpers lose access, not scolding).</li>
          </ol>

          <h3 className="text-lg font-semibold mt-2 mb-1">Management First, Then Training</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Prevent practice: gates, tethers, covered counters, closed hampers, trash lids, and toy rotation.</li>
            <li>Reinforce what you like: pay generously for quiet, check-ins, and choosing the mat over pacing.</li>
            <li>Keep arousal moderate: alternate sniff walks, training games, and calm decompression.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Reactivity &amp; Big Feelings (Snapshot)</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Increase distance; use U-turns and parked-car shields; feed a steady treat stream while passing.</li>
            <li>Mark curiosity over staring; reinforce easy disengagement (look at trigger → look back to you).</li>
            <li>Skip dog-dense crowds until your foundation is solid. Seek a trainer if reactions escalate.</li>
          </ul>
        </section>

        {/* COMMON SCENARIOS & FIXES */}
        <section id="scenarios" className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">Common Scenarios &amp; Quick Fixes</h2>
          <h3 className="text-lg font-semibold mt-2 mb-1">Jumping on People</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Preempt: cue &ldquo;go to mat&rdquo; as guests enter; reward four-on-floor.</li>
            <li>Remove access for jumping (step out of reach), then reset calmly; pay generously for sits.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Mouthy Adolescent</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Swap hands for toys; end game briefly if teeth touch skin; resume when calm.</li>
            <li>Add rest; many adolescents bite when overtired or under-enriched.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Crate Whining</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Introduce after exercise and enrichment; start with door open; close briefly only on calm.</li>
            <li>Reward quiet moments; open on calm, not on protest. Use nearby presence to start, then fade.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">House-Soiling</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Back to basics: outside on wake/after meals/after play; reward within 2 seconds of finishing.</li>
            <li>Rule out medical causes if frequent, urgent, or accompanied by drinking changes.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Chewing/Counters</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Prevention: remove access; teach &ldquo;leave it&rdquo;; provide legal chews; rotate to keep novelty.</li>
            <li>Interrupt with a trade, not scolding; pay for choosing a chew on their own.</li>
          </ul>
        </section>

        {/* WHEN TO SEEK PROFESSIONAL HELP */}
        <section id="pro-help" className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">When to Call a Pro (Trainer or Veterinary Behaviorist)</h2>
          <ul className="list-disc pl-5 space-y-2 mb-3">
            <li>Growling or snapping around food, toys, resting spaces, or people. Plan trades, add gates, and contact help early.</li>
            <li>Panic when left alone that does not improve with graduated departures.</li>
            <li>Persistent reactivity that worsens despite distance and management.</li>
            <li>Any bite that breaks skin. Press pause on triggers; get a qualified, reward-based professional on board.</li>
          </ul>
          <p className="text-sm text-gray-700">
            Tip: Look for credentials such as CBCC-KA, KPA-CTP, CDBC, CCAB, or DACVB. Avoid trainers who rely on fear, pain, or intimidation.
          </p>
        </section>

        {/* HEALTH RED FLAGS */}
        <section id="vet-now" className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">Health Red Flags (Call Your Vet Now)</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Repeated vomiting, black/tarry stool, or diarrhea with blood; lethargy with appetite loss.</li>
            <li>Labored breathing, persistent cough with distress, or pale/gray gums.</li>
            <li>Heat stress signs: heavy panting, drooling, disorientation; move to shade, cool gradually, call immediately.</li>
            <li>Inability to urinate, straining with no output, or extreme pain.</li>
            <li>Toxin exposures (xylitol, grapes/raisins, certain meds/cleaners, chocolate): call poison control and your vet.</li>
          </ul>
        </section>

        {/* BUDGETING & INSURANCE */}
        <section id="budget" className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">Budgeting, Insurance, and Preventive Care</h2>
          <p className="mb-3">
            Adoption fees are only the starting line. Build a simple budget that covers preventive care, food, training, and an emergency fund or insurance. 
            Keep your dog lean, brush teeth, trim nails, and stick to parasite prevention and vaccine schedules recommended by your veterinarian.
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>First month: supplies, vet intake, ID, and training sessions.</li>
            <li>Recurring: food, preventives, enrichment, grooming; consider pet insurance or a dedicated savings bucket.</li>
            <li>Annual: wellness exam, dental planning, and behavior tune-ups.</li>
          </ul>
        </section>

        {/* BOARDING & DAYCARE READINESS */}
        <section id="boarding-readiness" className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">Boarding &amp; Daycare Readiness</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Share vaccine records, microchip, meds, and your dog&rsquo;s routines in Petunia before any stay.</li>
            <li>Trial half-days first; choose facilities that use reward-based handling and transparent reporting.</li>
            <li>Send familiar bedding and chews; request rest breaks and decompression walks.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">Frequently Asked Questions</h2>

          <p className="mb-3">
            <strong>Is a puppy or adult better for first-time owners?</strong><br />
            Adults are often easier because their baseline temperament and needs are clearer. Puppies offer a long runway but require 
            high supervision and house-training. Choose based on your <em>capacity</em> for structure the next 6–12 months.
          </p>

          <p className="mb-3">
            <strong>How do I pick between two great dogs?</strong><br />
            Re-run the meet script with both, then map each dog against your time/space/energy. Which dog thrives on your <em>bad</em> weekday? 
            Pick the better fit, not the cuter photo.
          </p>

          <p className="mb-3">
            <strong>What if my new dog growls?</strong><br />
            Growling is information. Give space, reduce pressure, and consult a reward-based professional. Avoid punishment; it suppresses warning signs without fixing feelings.
          </p>

          <p className="mb-3">
            <strong>How soon can I go to the dog park?</strong><br />
            Only after reliable recall, good social signaling, and a strong relationship. Many adopters skip dog parks and choose 
            playdates with known, compatible dogs.
          </p>

          <p className="mb-3">
            <strong>How long until my dog feels at home?</strong><br />
            Expect the &ldquo;3-3-3&rdquo; pattern: first 3 days to decompress, 3 weeks to learn routines, about 3 months to truly settle. 
            Dogs differ; move at your dog&rsquo;s pace.
          </p>

          <p className="mb-3">
            <strong>Should I change the name?</strong><br />
            Sure. Pair the new name with treats for a week to build a reflexive orient response.
          </p>
        </section>

        {/* SOURCES */}
        <section id="sources" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">📚 Sources (Selected)</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            <li>
              AVSAB Position Statements (Humane Dog Training; Puppy Socialization).{' '}
              <a href="https://avsab.org/resources/position-statements/" target="_blank" rel="noopener noreferrer">https://avsab.org/resources/position-statements/</a>
            </li>
            <li>
              AAHA Canine Vaccination Guidelines (2022) &amp; Preventive Care resources.{' '}
              <a href="https://www.aaha.org/education/guidelines/" target="_blank" rel="noopener noreferrer">https://www.aaha.org/education/guidelines/</a>
            </li>
            <li>
              WSAVA Vaccination Guidelines (Global).{' '}
              <a href="https://wsava.org/global-guidelines/vaccination-guidelines/" target="_blank" rel="noopener noreferrer">https://wsava.org/global-guidelines/vaccination-guidelines/</a>
            </li>
            <li>
              CDC Healthy Pets, Healthy People — Dogs.{' '}
              <a href="https://www.cdc.gov/healthypets/pets/dogs.html" target="_blank" rel="noopener noreferrer">https://www.cdc.gov/healthypets/pets/dogs.html</a>
            </li>
            <li>
              ASPCA Adoption &amp; Behavior Tips.{' '}
              <a href="https://www.aspca.org/adopt" target="_blank" rel="noopener noreferrer">https://www.aspca.org/adopt</a>
            </li>
            <li>
              Maddie&rsquo;s Fund &amp; Shelter Medicine resources (adoption best practices, behavior).{' '}
              <a href="https://www.maddiesfund.org/" target="_blank" rel="noopener noreferrer">https://www.maddiesfund.org/</a>
            </li>
            <li>
              Fear Free (owner education on low-stress handling).{' '}
              <a href="https://fearfreehappyhomes.com/" target="_blank" rel="noopener noreferrer">https://fearfreehappyhomes.com/</a>
            </li>
            <li>
              Shelter Playgroup Alliance (dog-dog observations, best practices).{' '}
              <a href="https://www.shelterdogplay.org/" target="_blank" rel="noopener noreferrer">https://www.shelterdogplay.org/</a>
            </li>
            <li>
              IAABC &amp; APDT (finding qualified behavior pros).{' '}
              <a href="https://iaabc.org/" target="_blank" rel="noopener noreferrer">https://iaabc.org/</a>{' '}
              · <a href="https://apdt.com/" target="_blank" rel="noopener noreferrer">https://apdt.com/</a>
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
