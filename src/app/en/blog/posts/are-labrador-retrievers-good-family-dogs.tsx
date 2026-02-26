'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function AreLabradorRetrieversGoodFamilyDogs() {
  const locale = useLocale();

  const title = 'Are Labrador Retrievers Good Family Dogs? An Expert, Real-World Guide';
  const date = 'April 21, 2025';
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
            <li><a href="#overview" className="underline hover:opacity-80">Overview</a></li>
            <li><a href="#what-makes-a-family-dog" className="underline hover:opacity-80">What “Good Family Dog” Means</a></li>
            <li><a href="#temperament" className="underline hover:opacity-80">Temperament</a></li>
            <li><a href="#with-kids" className="underline hover:opacity-80">Labs & Children</a></li>
            <li><a href="#with-other-pets" className="underline hover:opacity-80">Labs & Other Pets</a></li>
            <li><a href="#training" className="underline hover:opacity-80">Trainability</a></li>
            <li><a href="#exercise" className="underline hover:opacity-80">Exercise & Enrichment</a></li>
            <li><a href="#home-setup" className="underline hover:opacity-80">Home Setup & Routine</a></li>
            <li><a href="#health" className="underline hover:opacity-80">Health & Risks</a></li>
            <li><a href="#grooming" className="underline hover:opacity-80">Grooming & Shedding</a></li>
            <li><a href="#costs" className="underline hover:opacity-80">Cost of Ownership</a></li>
            <li><a href="#choosing" className="underline hover:opacity-80">Choosing a Puppy or Adult</a></li>
            <li><a href="#daycare-boarding" className="underline hover:opacity-80">Daycare & Boarding Fit</a></li>
            <li><a href="#seasonal" className="underline hover:opacity-80">Heat, Water & Seasonal Safety</a></li>
            <li><a href="#checklists" className="underline hover:opacity-80">Checklists</a></li>
            <li><a href="#pros-cons" className="underline hover:opacity-80">Pros & Cons</a></li>
            <li><a href="#faq" className="underline hover:opacity-80">FAQ</a></li>
            <li><a href="#sources" className="underline hover:opacity-80">Sources</a></li>
          </ul>
        </nav>

        {/* OVERVIEW */}
        <section id="overview" className="mb-10">
          <p className="mb-4">
            Labrador Retrievers are among the world’s most popular breeds for a reason: friendly, trainable, and adaptable.
            You’ll see them as guide dogs, search-and-rescue partners, detection dogs, hunting companions, and goofy family
            couch mates. Popularity, however, can hide nuance. A breed can be excellent for family life and still be a mismatch
            for some households. This guide breaks down the practical tradeoffs so you can decide with eyes open: can your
            family meet a Lab’s energy, training, and management needs, and will a Lab’s strengths match your daily rhythm?
          </p>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Bottom line up front:</strong> Most families that prioritize <em>daily exercise + clear structure + steady
            training</em> thrive with a Lab. Families wanting a naturally low-energy, low-shed, low-maintenance dog should look
            elsewhere. Labs are high-energy athletes with hearts of gold and mouths that love to carry things.
          </div>
        </section>

        {/* WHAT MAKES A FAMILY DOG */}
        <section id="what-makes-a-family-dog" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">What “Good Family Dog” Actually Means</h2>
          <p className="mb-3">
            “Family dog” is less about breed slogans and more about repeatable behaviors that fit real homes. In our operations
            and owner coaching, we look for the same profile across breeds:
          </p>
          <ul className="list-disc pl-5 space-y-2 mb-3">
            <li><strong>Stable social temperament:</strong> friendly optimism with people; low resource guarding tendencies.</li>
            <li><strong>Trainability:</strong> high food or play motivation; enjoys short, frequent reps and learns from outcomes.</li>
            <li><strong>Energy you can meet:</strong> exercise needs that match your calendar, weather, and mobility.</li>
            <li><strong>Resilience:</strong> recovers quickly from new sights, sounds, and surfaces; tolerates routine handling.</li>
            <li><strong>Household compatibility:</strong> reasonable shedding, size, and noise profile for your space.</li>
            <li><strong>Health outlook:</strong> known risks are understood and proactively managed with your veterinarian.</li>
          </ul>
          <p>
            Labs check many of these boxes—but success hinges on <em>owner behaviors</em>. Families who schedule exercise,
            bake training into daily tasks, and enforce child-dog boundaries consistently are the families who talk about their
            Lab as “the best decision we ever made.”
          </p>
        </section>

        {/* TEMPERAMENT */}
        <section id="temperament" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Temperament: Friendly, Social, Enthusiastic (Sometimes Too Much)</h2>
          <p className="mb-3">
            The AKC describes Labs as kind, outgoing, and eager to please. In practice that means a dog who is comfortable in
            busy homes, tends to greet visitors like friends, and can bond strongly with children. Their genetic history as
            cooperative retrievers shows up as a desire to carry things and check in with their person during work.
          </p>
          <p className="mb-3">
            The flip side is arousal. Young Labs especially can be bouncy and mouthy. Without guidance, that enthusiasm can bowl
            over toddlers or lead to opportunistic counter-surfing. Temperament gives you the starting materials; your structure
            shapes the final product. Calm greetings, crate naps, and an exercise plan turn a spark plug into a reliable family
            teammate.
          </p>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Operator note:</strong> “Friendly” doesn’t mean “boundaryless.” Teach a ritual: sit, eye contact, then greet.
            For many Labs, two minutes of obedience before guest greetings pays huge dividends in self-control.
          </div>
        </section>

        {/* WITH KIDS */}
        <section id="with-kids" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Labradors & Children: Safety by Design</h2>
          <p className="mb-3">
            Broadly, Labs do well with children. They’re tolerant, playful, and not easily offended by minor bumps. Still, safe
            kid-dog relationships are built—never assumed. The principles below apply to any breed, but we emphasize them with
            Labs because their size and enthusiasm add momentum to mistakes.
          </p>
          <h3 className="text-lg font-semibold mt-2 mb-1">Age-Specific Guidance</h3>
          <ul className="list-disc pl-5 space-y-2 mb-3">
            <li><strong>Toddlers (0–3 yrs):</strong> Always use <em>two layers</em> of management (gate + leash or crate + gate).
              Toddlers move unpredictably; Labs can trip them accidentally. Teach “no climb, no hug, no chase.” Adults handle all
              feeding, chews, and picking up dropped food.</li>
            <li><strong>Early school age (4–7 yrs):</strong> Practice short, scripted interactions: “ask to pet,” “touch shoulder,
              not face,” “place treat on the floor, not from fingers.” Dog earns breaks on a mat. Adults cue the end of play before
              arousal spikes.</li>
            <li><strong>8+ yrs:</strong> Kids can participate in structured fetch, simple training reps, and calm brushing. Still
              enforce “leave the dog alone when resting” and supervise resource access.</li>
          </ul>
          <h3 className="text-lg font-semibold mt-2 mb-1">Non-Negotiables We Teach Every Family</h3>
          <ul className="list-disc pl-5 space-y-2 mb-3">
            <li>Dogs rest undisturbed in crates, pens, or on a bed. If the dog is on the bed, <em>no one</em> approaches to hug.</li>
            <li>Adults control high-value items. Children do not take bones, chews, or food from the dog.</li>
            <li>Greeting ritual: sit → eye contact → “okay, say hi” → 3–5 seconds petting → break → repeat.</li>
          </ul>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Quick win:</strong> Install gates before the dog arrives. Management reduces 80% of preventable incidents.
          </div>
        </section>

        {/* WITH OTHER PETS */}
        <section id="with-other-pets" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Labs with Other Pets</h2>
          <p className="mb-3">
            Most Labs are socially optimistic and integrate well with other dogs. For cats and small animals, success depends on
            early introductions and impulse control. We start with leashes, baby gates, and “look → treat” protocols to build
            calm observation. Teach “leave it,” “place,” and “drop” early; these cues protect harmony when toys or food are around.
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Parallel walks for new dog-dog introductions; avoid face-to-face pressure initially.</li>
            <li>Feed dogs separately; pick up bowls afterward; rotate high-value chews rather than free-for-all access.</li>
          </ul>
        </section>

        {/* TRAINABILITY */}
        <section id="training" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Trainability: A Lab Superpower (Use It)</h2>
          <p className="mb-3">
            Labs are famously food-motivated and people-oriented. That combination makes training straightforward if you’re
            consistent. We use short, frequent sessions—2–5 minutes—embedded in daily life: sit for doors, down for leash clips,
            eye contact for meals, “place” during homework time. The dog rehearses calm behaviors in the exact contexts you need.
          </p>
          <h3 className="text-lg font-semibold mt-2 mb-1">Core Skills for Family Success</h3>
          <ul className="list-disc pl-5 space-y-2 mb-3">
            <li><strong>Place/Mat:</strong> send-to-bed skill that turns chaos time into quiet time; build duration gradually.</li>
            <li><strong>Loose-leash walking:</strong> reinforce position near your hip; stop when the leash tightens; pay generous
              check-ins.</li>
            <li><strong>Recall:</strong> “come” pays big and sometimes releases back to play so it doesn’t always end the fun.</li>
            <li><strong>Leave it/Drop:</strong> guardrails for counters, kids’ toys, and backyard treasures.</li>
            <li><strong>Settle on cue:</strong> after play, cue a down on a mat; feed calm breaths and chin-down posture.</li>
          </ul>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Progression formula:</strong> Lure → fade lure → add verbal cue → add distractions → add duration → add distance.
            Keep failure rates low; make the next rep easier, then climb again.
          </div>
        </section>

        {/* EXERCISE & ENRICHMENT */}
        <section id="exercise" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Exercise & Enrichment: The Fuel and the Brake</h2>
          <p className="mb-3">
            Labs are athletes. Plan on 60–90+ minutes of daily activity, split into two or three blocks, plus mental work. We mix
            free movement (sniff walks), structured work (loose-leash practice, recall games), and recovery (crate or mat naps).
            Over-arousal leads to jumping and mouthing; steady rhythms prevent it.
          </p>
          <h3 className="text-lg font-semibold mt-2 mb-1">Weekly Template (Example)</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>Mon/Wed/Fri:</strong> morning sniff walk 20–30 min; evening fetch in short sets + mat settle.</li>
            <li><strong>Tue/Thu:</strong> long-line recall games in a field; 10–15 min shaping session (place, chin rest).</li>
            <li><strong>Sat:</strong> hike or swimming (if safe); end with calm chew and nap.</li>
            <li><strong>Sun:</strong> lighter day; enrichment puzzles; review obedience cues.</li>
          </ul>
          <h3 className="text-lg font-semibold mt-2 mb-1">Enrichment Ideas</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Frozen lick mats and stuffed food toys to down-shift after play.</li>
            <li>Sniffaris (let the nose lead within boundaries); cardboard search boxes; “find it” games indoors.</li>
            <li>Shaping: touch a target, go around a cone, settle on a mat, chin rest for nail trims.</li>
          </ul>
        </section>

        {/* HOME SETUP & ROUTINE */}
        <section id="home-setup" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Home Setup & Routine: Structure Makes Calm</h2>
          <p className="mb-3">
            We recommend a “playpen + crate + gates” layout at first. Give your Lab clear places to succeed: a crate for deep
            naps, a pen for supervised hangs, and a mat for family room settles. Use leashes indoors early to prevent dashing,
            counter-surfing, and kid toy raids.
          </p>
          <h3 className="text-lg font-semibold mt-2 mb-1">Daily Rhythm (Sample)</h3>
          <p className="mb-3">
            <strong>Morning:</strong> potty → sniff walk → breakfast training (2–3 minutes) → crate nap<br />
            <strong>Midday:</strong> potty → recall or leash games → enrichment (lick mat) → nap<br />
            <strong>Afternoon:</strong> potty → play + obedience interleaves → mat settle during homework → nap<br />
            <strong>Evening:</strong> potty → family time with chews → short training review → bedtime potty → sleep
          </p>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Crate naps ≠ punishment.</strong> They’re how high-drive breeds learn to turn off. Protect two long naps daily.
          </div>
        </section>

        {/* HEALTH */}
        <section id="health" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Health & Lifespan: Know the Risks, Stack the Odds</h2>
          <p className="mb-3">
            Typical lifespan for Labs is ~10–12 years. The big levers families control are body condition (keep lean), exercise,
            preventive care, and early detection. Common concerns include hip and elbow dysplasia, cruciate ligament tears, ear
            infections (due to a love of water + floppy ears), obesity, dental disease, and inherited issues like progressive
            retinal atrophy (PRA) and exercise-induced collapse (EIC).
          </p>
          <h3 className="text-lg font-semibold mt-2 mb-1">Preventive Care Priorities</h3>
          <ul className="list-disc pl-5 space-y-2 mb-3">
            <li><strong>Vaccinations:</strong> Follow AAHA/WSAVA guidance for core vaccines; discuss Bordetella, leptospirosis,
              and canine influenza based on lifestyle and local risk.</li>
            <li><strong>Parasites:</strong> Year-round prevention for heartworm, fleas, and ticks per your veterinarian.</li>
            <li><strong>Weight management:</strong> Keep a visible waist and palpable ribs; obesity is a major orthopedic risk.</li>
            <li><strong>Ear care:</strong> Dry ears after swimming; use vet-approved cleaners if prone to otitis.</li>
            <li><strong>Orthopedics:</strong> Avoid repetitive high-impact jumping in adolescents; build muscle with low-impact work.</li>
            <li><strong>Genetics:</strong> Ask for OFA (hips/elbows), eye clearances, and consider EIC/PRA testing in breeding lines.</li>
          </ul>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Heat + overexertion caution:</strong> EIC presents as weakness/collapse after intense activity. Stop, cool, and
            contact your veterinarian if you see wobbling or hind-end weakness after hard sprints. Discuss testing with your vet
            if your Lab shows signs.
          </div>
        </section>

        {/* GROOMING */}
        <section id="grooming" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Grooming & Shedding: Manageable, Not Minimal</h2>
          <p className="mb-3">
            Labs have a dense double coat that sheds year-round and “blows” seasonally. Weekly brushing (more during spring/fall)
            keeps hair tumbleweeds at bay. Bathe every 6–8 weeks or after messy adventures; rinse after chlorinated pools or salt
            water and dry ears thoroughly. Nail trims and dental care (toothbrushing or dental chews approved by your vet) round
            out the routine.
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Invest in a good vacuum and a de-shedding tool; keep lint rollers by exits.</li>
            <li>Ear care is non-optional for water-loving Labs; prevent infections with post-swim drying.</li>
          </ul>
        </section>

        {/* COSTS */}
        <section id="costs" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Cost of Ownership: Budget for the Real Thing</h2>
          <p className="mb-3">
            Annual routine costs for a healthy Lab typically range from roughly $1,200–$2,500 USD: quality food, veterinary care,
            preventives, grooming supplies, training, toys, and replacements (Labs are enthusiastic chewers). Unexpected events
            (orthopedic surgery, emergency care) can add thousands. Consider pet insurance or a dedicated savings buffer.
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Large-breed nutrition and chews add up; buy durable toys to reduce replacement churn.</li>
            <li>Training classes early can prevent far costlier behavior problems later.</li>
          </ul>
        </section>

        {/* CHOOSING A DOG */}
        <section id="choosing" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Choosing a Puppy or Adult Lab</h2>
          <p className="mb-3">
            Great family Labs come from two paths: (1) reputable breeders who health-test and socialize litters, and (2) rescues
            or shelters that foster, behavior-screen, and match thoughtfully. Decide based on your timeline, training bandwidth,
            and desire for known history.
          </p>
          <h3 className="text-lg font-semibold mt-2 mb-1">If Buying from a Breeder</h3>
          <ul className="list-disc pl-5 space-y-2 mb-3">
            <li>Ask for OFA hips/elbows, eye exams, and discussion of PRA/EIC. Request proof, not promises.</li>
            <li>Meet at least the dam; assess friendliness, confidence, and recovery from new stimuli.</li>
            <li>Puppies should be raised with enriched environments, handling, and sound exposure.</li>
            <li>A good contract covers returns, spay/neuter timing discussion, and breeder support.</li>
          </ul>
          <h3 className="text-lg font-semibold mt-2 mb-1">If Adopting</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Preview foster notes: energy level, alone-time tolerance, kid/cat history, reactivity triggers.</li>
            <li>Ask to observe a walk near mild distractions; look for trainability and recovery after surprises.</li>
            <li>Budget for a trainer consult in the first two weeks to set a plan and avoid preventable issues.</li>
          </ul>
        </section>

        {/* DAYCARE & BOARDING */}
        <section id="daycare-boarding" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Do Labs Fit Daycare & Boarding?</h2>
          <p className="mb-3">
            Generally yes—Labs often excel in structured daycare programs and adapt well to boarding when routines are respected.
            The keys are screening, group management, and rest. We look for neutral or pro-social greetings, appropriate play
            styles, response to handler cues, and the ability to down-shift for crate or suite naps.
          </p>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>Daycare:</strong> rotation of play → rest → enrichment; not a six-hour free-for-all.</li>
            <li><strong>Boarding:</strong> keep home routines (meals, meds, crate naps); pack familiar bedding and labeled food.</li>
          </ul>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Heat & water caution:</strong> Labs sprint and swim hard. In summer, cap fetch sets, schedule water breaks,
            and watch for subtle fatigue before collapse or cramps.
          </div>
        </section>

        {/* SEASONAL SAFETY */}
        <section id="seasonal" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Seasonal Safety: Heat, Water, Ice & Holiday Chaos</h2>
          <ul className="list-disc pl-5 space-y-2 mb-3">
            <li><strong>Heat:</strong> avoid mid-day exertion; provide shade, cool water, and rest; know local heat index.</li>
            <li><strong>Water:</strong> rinse after pools or salt; dry ears; use canine life jackets for boating.</li>
            <li><strong>Winter:</strong> wipe paws after salted sidewalks; add mental work when outdoor time shortens.</li>
            <li><strong>Holidays:</strong> crate naps during parties; pre-place chews; gated entries to prevent door dashes.</li>
          </ul>
        </section>

        {/* CHECKLISTS */}
        <section id="checklists" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Decision & Setup Checklists</h2>
          <h3 className="text-lg font-semibold mt-2 mb-1">Family Fit Checklist</h3>
          <ul className="list-disc pl-5 space-y-2 mb-3">
            <li>We can provide 60–90+ minutes of daily activity and mental work.</li>
            <li>We will use crates, gates, and mats to structure calm time.</li>
            <li>We will train daily in short reps (2–5 minutes), not just weekends.</li>
            <li>We accept shedding and have a grooming plan (brushing, ear care).</li>
            <li>We can budget for food, vet care, training, and emergencies.</li>
            <li>We’ll supervise kid-dog interactions and control high-value items.</li>
          </ul>
          <h3 className="text-lg font-semibold mt-2 mb-1">First-Week Plan</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Install gates; set up crate and mat locations; remove temptations.</li>
            <li>Pre-book vet intake; confirm vaccines and preventives; discuss EIC if relevant.</li>
            <li>Block calendar for three training micro-sessions per day.</li>
            <li>Write the house rules and post by the door (doorway ritual, greeting ritual).</li>
          </ul>
        </section>

        {/* PROS & CONS */}
        <section id="pros-cons" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Pros & Cons Summary</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-2">✅ Pros</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Friendly, resilient temperament; typically good with kids and dogs.</li>
                <li>Highly trainable; food/play motivated; versatile in activities.</li>
                <li>Adaptable to various lifestyles when exercise and structure are provided.</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">⚠️ Cons</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>High energy; needs daily exercise and mental work.</li>
                <li>Heavy shedding; regular grooming and cleanup required.</li>
                <li>Prone to obesity and orthopedic issues without management.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">Frequently Asked Questions</h2>
          <p className="mb-3">
            <strong>Are Labs good for first-time owners?</strong><br />
            Yes—if you’re ready to train consistently and meet exercise needs. Their optimism and food motivation make learning
            fast when you’re structured.
          </p>
          <p className="mb-3">
            <strong>Do Labs bark a lot?</strong><br />
            Usually moderate. They’re more likely to alert briefly than provide sustained guarding. Under-exercised Labs may vocalize more.
          </p>
          <p className="mb-3">
            <strong>Can Labs live in apartments?</strong><br />
            Yes, with committed daily exercise, enrichment, and management. Elevators and hallways become training opportunities.
          </p>
          <p className="mb-3">
            <strong>What about allergies and shedding?</strong><br />
            Labs are not hypoallergenic and shed heavily. If allergies are significant in your household, consider lower-shedding breeds.
          </p>
          <p className="mb-3">
            <strong>When should I spay or neuter a Lab?</strong><br />
            Timing may influence orthopedic health; discuss with your veterinarian based on sex, growth, and lifestyle.
          </p>
          <p>
            <strong>Is swimming safe for Labs?</strong><br />
            Generally yes and often beloved; rinse afterward, dry ears, and avoid dangerous currents or prolonged cold exposure.
          </p>
        </section>

        {/* SOURCES */}
        <section id="sources" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">📚 Sources (Selected)</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            <li>
              American Kennel Club. Labrador Retriever breed overview and history.{' '}
              <a href="https://www.akc.org/dog-breeds/labrador-retriever/" target="_blank" rel="noopener noreferrer">
                https://www.akc.org/dog-breeds/labrador-retriever/
              </a>
            </li>
            <li>
              American Veterinary Medical Association. Dog ownership, preventive care, and obesity guidance.{' '}
              <a href="https://www.avma.org/resources-tools/pet-owners" target="_blank" rel="noopener noreferrer">
                https://www.avma.org/resources-tools/pet-owners
              </a>
            </li>
            <li>
              American Animal Hospital Association (2022). Canine Vaccination Guidelines.{' '}
              <a href="https://www.aaha.org/aaha-guidelines/vaccination-canine-configuration/canine-vaccination-guidelines/" target="_blank" rel="noopener noreferrer">
                https://www.aaha.org/aaha-guidelines/vaccination-canine-configuration/canine-vaccination-guidelines/
              </a>
            </li>
            <li>
              World Small Animal Veterinary Association. Vaccination Guidelines (global).{' '}
              <a href="https://wsava.org/global-guidelines/vaccination-guidelines/" target="_blank" rel="noopener noreferrer">
                https://wsava.org/global-guidelines/vaccination-guidelines/
              </a>
            </li>
            <li>
              Merck Veterinary Manual. Hip dysplasia; canine infectious respiratory disease complex; general care.{' '}
              <a href="https://www.merckvetmanual.com" target="_blank" rel="noopener noreferrer">
                https://www.merckvetmanual.com
              </a>
            </li>
            <li>
              Orthopedic Foundation for Animals (OFA). Hip/elbow dysplasia databases and breeder testing.{' '}
              <a href="https://ofa.org" target="_blank" rel="noopener noreferrer">
                https://ofa.org
              </a>
            </li>
            <li>
              University of Minnesota. Exercise-Induced Collapse (EIC) in Labrador Retrievers.{' '}
              <a href="https://vetmed.umn.edu/research/labs/canine-genetics-lab/eic" target="_blank" rel="noopener noreferrer">
                https://vetmed.umn.edu/research/labs/canine-genetics-lab/eic
              </a>
            </li>
            <li>
              American College of Veterinary Behaviorists (ACVB). Client education on socialization and behavior.{' '}
              <a href="https://www.dacvb.org/page/OwnerResources" target="_blank" rel="noopener noreferrer">
                https://www.dacvb.org/page/OwnerResources
              </a>
            </li>
            <li>
              VCA Animal Hospitals. Large-breed growth and orthopedic considerations.{' '}
              <a href="https://vcahospitals.com/know-your-pet/hip-dysplasia-in-dogs" target="_blank" rel="noopener noreferrer">
                https://vcahospitals.com/know-your-pet/hip-dysplasia-in-dogs
              </a>
            </li>
            <li>
              The Dog Gurus. Group play safety and rest rotation frameworks for daycare operators.{' '}
              <a href="https://www.thedoggurus.com/" target="_blank" rel="noopener noreferrer">
                https://www.thedoggurus.com/
              </a>
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
