'use client';

import Head from 'next/head';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function TypesOfLabradorRetrieversEnglishVsField() {
  const locale = useLocale();

  const title =
    'Types of Labrador Retrievers (English vs Field): The Complete, Vet-Informed Owner’s Guide';
  const date = 'April 13, 2025';
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
    'English vs Field Labrador Retrievers: temperament, build, energy, training needs, health, working ability, and family fit—plus breeder questions, adoption tips, and day-to-day routines. One breed, two common lines.';

  return (
    <>
      <Head>
        <title>{title} – Petunia Blog</title>
        <meta name="description" content={description} />
        <meta name="robots" content="index,follow" />
        <link
          rel="canonical"
          href={`https://www.petuniapets.com/${locale}/blog/types-of-labrador-retrievers-english-vs-field`}
        />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
      </Head>

      <main className="max-w-3xl mx-auto px-4 py-10 text-[#2c4a30]">
        {/* Meta */}
        <p className="text-sm text-gray-500 mb-2">Posted on {date}</p>
        <h1 className="text-3xl font-bold mb-4">
          Types of Labrador Retrievers (English vs Field): The Complete, Vet-Informed Owner’s Guide
        </h1>

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
            <li><a href="#are-there-two-breeds" className="underline hover:opacity-80">Are There Two Breeds?</a></li>
            <li><a href="#history" className="underline hover:opacity-80">History &amp; Development</a></li>
            <li><a href="#conformation" className="underline hover:opacity-80">Build &amp; Conformation</a></li>
            <li><a href="#temperament" className="underline hover:opacity-80">Temperament &amp; Drive</a></li>
            <li><a href="#training" className="underline hover:opacity-80">Training &amp; Daily Structure</a></li>
            <li><a href="#exercise" className="underline hover:opacity-80">Exercise, Enrichment &amp; Sports</a></li>
            <li><a href="#family-fit" className="underline hover:opacity-80">Family Fit: Home &amp; Lifestyle</a></li>
            <li><a href="#health" className="underline hover:opacity-80">Health Patterns &amp; Screening</a></li>
            <li><a href="#nutrition" className="underline hover:opacity-80">Nutrition for Each Line</a></li>
            <li><a href="#grooming" className="underline hover:opacity-80">Grooming &amp; Shedding</a></li>
            <li><a href="#breeder" className="underline hover:opacity-80">Choosing a Breeder</a></li>
            <li><a href="#adoption" className="underline hover:opacity-80">Adopting a Lab (Rescue)</a></li>
            <li><a href="#daycare-boarding" className="underline hover:opacity-80">Daycare &amp; Boarding Notes</a></li>
            <li><a href="#checklists" className="underline hover:opacity-80">Decision Checklists</a></li>
            <li><a href="#faqs" className="underline hover:opacity-80">FAQs</a></li>
            <li><a href="#sources" className="underline hover:opacity-80">📚 Sources</a></li>
          </ul>
        </nav>

        {/* TL;DR */}
        <section id="tl-dr" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Short Answer (TL;DR)</h2>
          <p className="mb-4">
            There is <strong>one</strong> Labrador Retriever breed worldwide. “English” (often called <em>bench</em> or <em>show</em>)
            and “Field” (often called <em>American</em> or <em>working</em>) describe <strong>different breeding emphases</strong> within
            the same breed standard: conformation/appearance vs field performance. English-leaning lines tend to be stockier with
            blockier heads and calmer off-switches indoors, while field-bred Labs tend to be lighter, racier athletes with intense
            retrieve drive and higher daily work needs. Either can make an excellent family dog if you match energy and training
            needs to your lifestyle and buy/adopt with health and temperament in mind.
          </p>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Petunia tip:</strong> Whichever line you choose, create a repeatable rhythm of <em>structured play → rest → enrichment</em>.
            Use Petunia to share routines, feeding notes, and meds with your daycare/boarding provider so the structure travels with your dog.
          </div>
        </section>

        {/* ARE THERE TWO BREEDS */}
        <section id="are-there-two-breeds" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Are There Really “Two” Labrador Breeds?</h2>
          <p className="mb-3">
            No. The American Kennel Club (AKC), The Kennel Club (UK), and the Fédération Cynologique Internationale (FCI) all
            recognize <strong>one</strong> Labrador Retriever breed with a single written standard. The terms
            <em> English</em> and <em>American</em> evolved as shorthand: bench/show-focused programs (historically associated with
            the UK) versus field/working-focused programs (historically emphasized in North America). Breed clubs and standards do
            not split the Labrador into separate breeds; they describe one dog whose form should support its historical function:
            an even-tempered, medium-large retriever with a water-resistant coat and the famous “otter tail.”
          </p>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Good to know:</strong> Plenty of Labs are <em>blended</em>—show lines with solid working ability and field lines with
            friendly, biddable temperaments. Ask breeders about their program’s goals and how pups are raised and evaluated.
          </div>
        </section>

        {/* HISTORY */}
        <section id="history" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">History &amp; Development: One Function, Many Paths</h2>
          <p className="mb-3">
            Labradors descend from St. John’s water dogs of Newfoundland, refined in Britain into the modern retriever for work
            with waterfowl and upland game. Over time, selective breeding emphasized different outcomes. Conformation breeders
            prioritized structure matching the written standard, head and tail type, and unflappable temperament. Field breeders
            prioritized marking ability, memory, nose, water courage, and high retrieve drive for hunt tests, field trials, and
            real-world work. Both lineages trace to the same foundation; they simply weigh tradeoffs differently.
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Bench/Show emphasis:</strong> structure, type, ring presence, calm public-venue demeanor.</li>
            <li><strong>Field/Working emphasis:</strong> speed, endurance, problem-solving, intensity, handler responsiveness at distance.</li>
            <li><strong>Blended programs:</strong> attempt dual-purpose dogs—sound structure with genuine field capacity.</li>
          </ul>
        </section>

        {/* CONFORMATION */}
        <section id="conformation" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Build &amp; Conformation: What Owners Actually See</h2>
          <p className="mb-3">
            While the standard describes one Lab, everyday observers notice typical differences. Remember: these are
            <em> tendencies</em>, not rules. Individuals vary widely.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-2">English-leaning (Bench/Show)</h3>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>More substantial bone; broader chest; shorter coupled; thicker “otter” tail.</li>
                <li>Blockier head with pronounced stop; softer expression.</li>
                <li>Coat often dense with more undercoat; classic water-resistant feel.</li>
                <li>Movement: powerful, ground-covering trot rather than sprint build.</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Field-leaning (Working)</h3>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Lighter, racier frame; longer leg/loin proportions; aerodynamic silhouette.</li>
                <li>Head often narrower; ears set slightly higher; keen, “on a mission” expression.</li>
                <li>Coat can feel a touch tighter; still double-coated and water-resistant.</li>
                <li>Movement: quick acceleration; efficient gallop; “distance runner” vibe.</li>
              </ul>
            </div>
          </div>
          <p className="mt-3">
            Both types should have the signature tail, strong topline, correct feet, and a balanced, athletic outline. Structure should
            support a day’s work in water and marsh, not just a few laps around the block.
          </p>
        </section>

        {/* TEMPERAMENT */}
        <section id="temperament" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Temperament &amp; Drive: Same Heart, Different Gears</h2>
          <p className="mb-3">
            Labs are famously friendly and biddable. In practice, English-leaning lines often present a slightly steadier “off switch”
            indoors and tolerant, unflappable public manners. Field-leaning lines often deliver rocket-fuel retrieve drive, intense
            focus on tasks, and a higher “default” energy state. Either can be a cuddly housemate or a tireless worker if you meet
            their needs.
          </p>
          <ul className="list-disc pl-5 space-y-2 mb-3">
            <li><strong>Social temperament:</strong> Both lines should be people-friendly and stable with dogs when properly socialized.</li>
            <li><strong>Handler focus:</strong> Field lines often show stronger “what’s next?” orientation and thrive with clear jobs.</li>
            <li><strong>Noise &amp; surface sensitivity:</strong> Good programs expose puppies early; ask how the litter was raised.</li>
            <li><strong>Mouthiness:</strong> Retrievers retrieve—give legal outlets and teach <em>take</em>, <em>drop</em>, and <em>leave it</em>.</li>
          </ul>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Operator note:</strong> A “calm” young English-line Lab without structure becomes bouncy and mouthy; a “high-drive”
            field-line Lab with structure becomes a fantastic family teammate. Structure is non-negotiable for both.
          </div>
        </section>

        {/* TRAINING */}
        <section id="training" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Training &amp; Daily Structure</h2>
          <p className="mb-3">
            All Labs are highly trainable. The difference is <strong>how</strong> you distribute reps and rest.
            We build day plans around short, frequent sessions and predictable naps.
          </p>
          <h3 className="text-lg font-semibold mt-2 mb-1">Core System (Both Lines)</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>2–5 minute micro-sessions: name game, place/mat, loose-leash position, impulse control.</li>
            <li>Greeting ritual: sit → eye contact → release to greet for 3–5 seconds → break → repeat.</li>
            <li>Management: crates, pens, and gates to prevent rehearsals of chaos.</li>
            <li>“Pay the calm”: reward chin-down settles on a mat after play.</li>
          </ul>
          <h3 className="text-lg font-semibold mt-2 mb-1">Line-Specific Notes</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-2">English-leaning</h4>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>May take fewer reps to reach “off switch” indoors.</li>
                <li>Watch weight; food motivation is a superpower and a risk.</li>
                <li>Great candidates for therapy work when socialized and trained.</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Field-leaning</h4>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Channel drive with daily retrieve games, nosework, and problem-solving.</li>
                <li>Plan for more structured outlets; long lines help early recall proofing.</li>
                <li>Excellent for hunt tests, detection sports, canicross, and trail running (age-appropriate).</li>
              </ul>
            </div>
          </div>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm mt-3">
            <strong>Petunia tip:</strong> Add your training micro-plan and nap schedule to Petunia so staff at your daycare/boarding
            provider keep the same cadence—your Lab comes home calmer because the routine stayed intact.
          </div>
        </section>

        {/* EXERCISE */}
        <section id="exercise" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Exercise, Enrichment &amp; Sports</h2>
          <p className="mb-3">
            Both lines need daily movement and brain work. Field lines typically need <em>more</em> and <em>smarter</em> outlets.
            Use variety (sniff walks, fetch in short sets, swimming with ear care, hill walking) rather than repetitive high-impact
            pounding—especially in adolescents with open growth plates.
          </p>
          <h3 className="text-lg font-semibold mt-2 mb-1">Weekly Template (Example)</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>Mon:</strong> sniff walk 25 min + 2 recall games + mat settle.</li>
            <li><strong>Tue:</strong> retrieve circuits (5–10 throws, twice) + shaping session (place, chin rest).</li>
            <li><strong>Wed:</strong> swim if available; rinse and dry ears; puzzle feeder afterward.</li>
            <li><strong>Thu:</strong> long-line field hike; attention games at mild distractions.</li>
            <li><strong>Fri:</strong> city walk with polite passes; brief heeling games; quiet café settle.</li>
            <li><strong>Sat:</strong> sport class (hunt test foundations, nosework, rally); nap afterward.</li>
            <li><strong>Sun:</strong> lighter day; enrichment rotation; recovery walk.</li>
          </ul>
          <h3 className="text-lg font-semibold mt-2 mb-1">Sport Fits</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>English-leaning:</strong> rally, therapy, obedience, scent work, dock diving (with conditioning).</li>
            <li><strong>Field-leaning:</strong> hunt tests/field trials, working trials, tracking, canicross/bikejor (age-appropriate), SAR foundations.</li>
          </ul>
        </section>

        {/* FAMILY FIT */}
        <section id="family-fit" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Family Fit: Home, Kids, and Lifestyle</h2>
          <p className="mb-3">
            Both lines can be superb with children when families supervise, manage resources, and protect rest. Choose based on your
            <em> calendar</em> more than your couch fabric.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-2">English-leaning Fit</h3>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Often a touch easier indoor “off switch.”</li>
                <li>May tolerate busy, visitor-heavy homes well after training.</li>
                <li>Good for families wanting hiking partner + couch buddy balance.</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Field-leaning Fit</h3>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Thrives with daily jobs and athletic owners.</li>
                <li>Excellent for working homes (hunting, SAR, dog sports).</li>
                <li>Apartment-living possible with disciplined exercise/enrichment.</li>
              </ul>
            </div>
          </div>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm mt-3">
            <strong>Kid-dog safety:</strong> two layers of management (gate + crate or gate + leash), adults control high-value items,
            and “no climb/no chase” rules for toddlers.
          </div>
        </section>

        {/* HEALTH */}
        <section id="health" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Health Patterns &amp; Screening: What Matters Most</h2>
          <p className="mb-3">
            The <strong>same</strong> core health concerns apply across lines: hip/elbow dysplasia, cruciate disease, ear infections
            in swimmers, allergic skin disease, eye conditions (PRA, cataracts), EIC in some lines, hypothyroidism, and typical
            large-breed cancers. Selection pressure can shift <em>tendencies</em>—for example, high-drive field programs may focus
            intensely on stamina and heat tolerance; some show programs emphasize heavy coats and bone—but responsible breeders in
            <em> any</em> camp screen thoroughly and track outcomes.
          </p>
          <h3 className="text-lg font-semibold mt-2 mb-1">Screening You Should See</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Hips &amp; elbows (OFA or PennHIP/OFA elbows).</li>
            <li>Eyes (board-certified ophthalmologist exams; CHIC participation where applicable).</li>
            <li>EIC DNA status (especially for field lines or mixed programs using high-drive sires/dams).</li>
            <li>Discussion of PRA testing/clearances in the pedigree.</li>
          </ul>
          <h3 className="text-lg font-semibold mt-2 mb-1">Owner-Controlled Health Levers</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Keep a lean body condition—extra weight magnifies orthopedic risk.</li>
            <li>Dry ears after water; manage allergies early to prevent infections.</li>
            <li>Age-appropriate, low-impact conditioning; traction on slick floors; ramps for cars/sofas.</li>
          </ul>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm mt-3">
            <strong>Research note:</strong> A deletion in the <em>POMC</em> gene has been associated with weight regulation in some Labradors.
            Regardless of genetics, measured meals and activity protect joints and lifespan.
          </div>
        </section>

        {/* NUTRITION */}
        <section id="nutrition" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Nutrition for Each Line</h2>
          <p className="mb-3">
            Feed a complete and balanced diet appropriate to life stage and workload. Field-line athletes in heavy training may
            need higher calories and careful hydration/electrolyte planning; off-season, reduce accordingly to maintain leanness.
            English-line couch seasons still require portion control—Labs are famously food-motivated.
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Use your Lab’s body condition score to guide calories—not just the bag’s chart.</li>
            <li>Discuss omega-3 (EPA/DHA) supplementation with your veterinarian for skin/joints.</li>
            <li>Transition foods over 7–10 days; GI upset can provoke skin/ear flares.</li>
          </ul>
        </section>

        {/* GROOMING */}
        <section id="grooming" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Grooming &amp; Shedding: Same Double Coat, Manageable Routine</h2>
          <p className="mb-3">
            Both lines are double-coated and shed. Expect baseline shedding year-round with heavier spring/fall turnover. Brush
            2–4x/week, bathe monthly or as needed, and dry ears after water. A high-velocity dryer after baths is a secret weapon
            during blowouts.
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Tools: rubber curry, slicker, optional soft undercoat rake, microfiber towels.</li>
            <li>Technique: light pressure, short sessions, reward calm on a station/mat.</li>
          </ul>
        </section>

        {/* BREEDER */}
        <section id="breeder" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Choosing a Breeder: Questions That Reveal Quality</h2>
          <h3 className="text-lg font-semibold mt-2 mb-1">Program &amp; Goals</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>What is your program’s emphasis (bench, field, dual-purpose)? What titles/clearances support that?</li>
            <li>How do you evaluate temperaments and match puppies to homes?</li>
            <li>What lifelong support do you provide (returns, training guidance)?</li>
          </ul>
          <h3 className="text-lg font-semibold mt-2 mb-1">Health Screening</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Hips, elbows, eyes, EIC status, PRA clearances—request proof, not promises.</li>
            <li>Do sires/dams have recent ophthalmology exams? Are results public (OFA/CHIC)?</li>
          </ul>
          <h3 className="text-lg font-semibold mt-2 mb-1">Puppy Raising</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Handling, sound surfaces, crate introductions, potty-area training.</li>
            <li>Early retrieval games, problem-solving, and rest rhythms.</li>
          </ul>
        </section>

        {/* ADOPTION */}
        <section id="adoption" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Adopting a Lab (Rescue): What to Ask</h2>
          <ul className="list-disc pl-5 space-y-2 mb-3">
            <li>Energy profile: daily needs, alone-time tolerance, and reactivity triggers.</li>
            <li>History with kids, cats, dogs; response to handling; resource behavior.</li>
            <li>Observe a walk near mild distractions; ask to toss a bumper and watch retrieve interest.</li>
            <li>Budget a trainer consult in week one to set routines that stick.</li>
          </ul>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Matchmaking tip:</strong> A moderate English-leaning adolescent can be easier for first-time owners; a high-drive field-bred
            adult may be perfect for sport or working homes ready to commit to daily jobs.
          </div>
        </section>

        {/* DAYCARE & BOARDING */}
        <section id="daycare-boarding" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Daycare &amp; Boarding: Making Line Differences Work for You</h2>
          <p className="mb-3">
            Well-run facilities love Labs—if rest is protected. Field-line dogs often need more structured jobs during stays
            (sniff work, retrieve circuits), while English-line dogs may settle faster with mat work after play.
          </p>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Share your dog’s routine and reinforcement plan in Petunia so staff mirror your structure.</li>
            <li>Ask for post-swim ear drying, capped fetch sets, shade, and water breaks in heat.</li>
            <li>Consider a de-shed bath before pickup during peak shedding seasons.</li>
          </ul>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>System, not heroics:</strong> play → rest → enrichment beats all-day free-for-all and sends your Lab home balanced.
          </div>
        </section>

        {/* CHECKLISTS */}
        <section id="checklists" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Decision Checklists</h2>

          <h3 className="text-lg font-semibold mt-2 mb-1">English vs Field: Self-Assessment</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>We can commit to <strong>daily structure</strong> (crates, gates, mat work) and 60–90+ minutes of activity.</li>
            <li>We want a dog for <strong>sports or work</strong> (choose field-leaning) vs primarily <strong>family &amp; therapy</strong> (English-leaning).</li>
            <li>We understand <strong>shedding</strong> and have a grooming plan (brush 2–4x/week, ear care after swims).</li>
            <li>We’ll keep a <strong>lean body condition</strong> and partner with a veterinarian for screening.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">First-Week Setup (Both Lines)</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Install gates; set crate and mat locations; pre-stage chew rotation.</li>
            <li>Write house rules (doorway ritual, greeting ritual) and post them.</li>
            <li>Block calendar for three micro-training sessions daily.</li>
            <li>Book a vet intake; upload records to Petunia; set vaccine/med reminders.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section id="faqs" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">Frequently Asked Questions</h2>
          <p className="mb-3">
            <strong>Is an “English Lab” a different breed?</strong><br />
            No. It’s informal shorthand for show/bench-oriented lines within the single Labrador Retriever breed standard.
          </p>
          <p className="mb-3">
            <strong>Which line is better with kids?</strong><br />
            Both can be excellent when families supervise and structure. Choose based on your capacity to meet energy needs.
          </p>
          <p className="mb-3">
            <strong>Do field Labs have more health problems?</strong><br />
            Not inherently. Health depends on screening, selection, and weight/management. Ask any breeder for proof of clearances.
          </p>
          <p className="mb-3">
            <strong>Can an English-line Lab succeed in hunt tests?</strong><br />
            Yes—especially from dual-purpose programs. Individual aptitude matters more than label.
          </p>
          <p>
            <strong>Apartment or city living?</strong><br />
            Possible for both lines with disciplined exercise, enrichment, and management. Elevators and hallways become training reps.
          </p>
        </section>

        {/* SOURCES */}
        <section id="sources" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">📚 Sources (Selected)</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            <li>
              American Kennel Club (AKC). Labrador Retriever breed standard &amp; overview.{' '}
              <a href="https://www.akc.org/dog-breeds/labrador-retriever/" target="_blank" rel="noopener noreferrer">
                https://www.akc.org/dog-breeds/labrador-retriever/
              </a>
            </li>
            <li>
              The Kennel Club (UK). Labrador Retriever breed standard.{' '}
              <a href="https://www.thekennelclub.org.uk/breed-standards/gundog/retriever-labrador/" target="_blank" rel="noopener noreferrer">
                https://www.thekennelclub.org.uk/breed-standards/gundog/retriever-labrador/
              </a>
            </li>
            <li>
              Labrador Retriever Club (USA). Breed information &amp; health statements (single breed, recommended testing).{' '}
              <a href="https://thelabradorclub.com/" target="_blank" rel="noopener noreferrer">
                https://thelabradorclub.com/
              </a>
            </li>
            <li>
              Orthopedic Foundation for Animals (OFA). Hip/elbow/eye screening; CHIC.{' '}
              <a href="https://ofa.org" target="_blank" rel="noopener noreferrer">https://ofa.org</a>
            </li>
            <li>
              University of Minnesota Canine Genetics Lab. Exercise-Induced Collapse (EIC) resources.{' '}
              <a href="https://vetmed.umn.edu/research/labs/canine-genetics-lab/eic" target="_blank" rel="noopener noreferrer">
                https://vetmed.umn.edu/research/labs/canine-genetics-lab/eic
              </a>
            </li>
            <li>
              American College of Veterinary Ophthalmologists (ACVO). Eye disease &amp; screening.{' '}
              <a href="https://www.acvo.org/" target="_blank" rel="noopener noreferrer">https://www.acvo.org/</a>
            </li>
            <li>
              American College of Veterinary Surgeons (ACVS). Cruciate ligament disease in dogs.{' '}
              <a href="https://www.acvs.org/small-animal/canine-cruciate-ligament-disease" target="_blank" rel="noopener noreferrer">
                https://www.acvs.org/small-animal/canine-cruciate-ligament-disease
              </a>
            </li>
            <li>
              Merck Veterinary Manual. Dermatology, endocrinology, and musculoskeletal overviews in dogs.{' '}
              <a href="https://www.merckvetmanual.com" target="_blank" rel="noopener noreferrer">
                https://www.merckvetmanual.com
              </a>
            </li>
            <li>
              WSAVA Global Nutrition Guidelines; AVMA pet owner resources.{' '}
              <a href="https://wsava.org/global-guidelines/global-nutrition-guidelines/" target="_blank" rel="noopener noreferrer">
                https://wsava.org/global-guidelines/global-nutrition-guidelines/
              </a>{' '}
              |{' '}
              <a href="https://www.avma.org/resources-tools/pet-owners" target="_blank" rel="noopener noreferrer">
                https://www.avma.org/resources-tools/pet-owners
              </a>
            </li>
            <li>
              Raffan et&nbsp;al. (2016). A deletion in the canine <em>POMC</em> gene is associated with weight and appetite in Labrador Retrievers.{' '}
              <a href="https://www.cell.com/cell-metabolism/fulltext/S1550-4131(16)30100-5" target="_blank" rel="noopener noreferrer">
                Cell Metabolism
              </a>
            </li>
          </ul>
          <p className="text-xs text-gray-600 mt-4">
            Educational content only. Always consult your veterinarian for diagnosis and treatment.
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
