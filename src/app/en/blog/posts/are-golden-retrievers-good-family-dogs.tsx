'use client';

import Head from 'next/head';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function AreGoldenRetrieversGoodFamilyDogs() {
  const locale = useLocale();

  const title =
    'Are Golden Retrievers Good Family Dogs? An Expert, Real-World Guide';
  const date = 'August 11, 2025';
  const categories = ['owner', 'breed_specific_guides'] as const;

  // Exact labels from prior posts (do not change keys/labels)
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
    'A field-tested, evidence-informed guide to Golden Retrievers as family dogs: temperament, kid safety systems, training and enrichment, exercise needs, shedding/grooming, health predispositions, budgeting, adoption vs. breeder due diligence, travel/boarding policies, and ready-to-use checklists. Professional veterinary sources included.';

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
            <li><a href="#fit-snapshot" className="underline hover:opacity-80">Family-Fit Snapshot</a></li>
            <li><a href="#temperament" className="underline hover:opacity-80">Temperament &amp; Behavior</a></li>
            <li><a href="#training" className="underline hover:opacity-80">Training &amp; Enrichment</a></li>
            <li><a href="#exercise" className="underline hover:opacity-80">Exercise &amp; Lifestyle</a></li>
            <li><a href="#kids-safety" className="underline hover:opacity-80">Kids &amp; Safety Systems</a></li>
            <li><a href="#multi-pet" className="underline hover:opacity-80">Multi-Pet Households</a></li>
            <li><a href="#home-setup" className="underline hover:opacity-80">Home Setup &amp; House Rules</a></li>
            <li><a href="#health" className="underline hover:opacity-80">Health &amp; Preventive Care</a></li>
            <li><a href="#grooming" className="underline hover:opacity-80">Grooming &amp; Shedding</a></li>
            <li><a href="#budget" className="underline hover:opacity-80">Costs &amp; Budgeting</a></li>
            <li><a href="#choose" className="underline hover:opacity-80">Choosing a Golden (Adopt or Breeder)</a></li>
            <li><a href="#life-changes" className="underline hover:opacity-80">New Baby &amp; Life Changes</a></li>
            <li><a href="#travel" className="underline hover:opacity-80">Travel, Boarding &amp; Daycare</a></li>
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
            <strong>Yes—Golden Retrievers are generally excellent family dogs</strong>: friendly, people-oriented, and trainable. The best outcomes happen when families run on <strong>systems</strong>: kid-safe handling rules, daily exercise/enrichment, <strong>structured rest</strong>, clear training routines, and proactive care for the breed’s common issues (ears/skin, weight, joints). If you want a sociable companion who loves to learn and participate in family life, a Golden can be outstanding—<em>provided</em> you’re ready for shedding, grooming, and reliable daily time for training and play.
          </p>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Petunia tip:</strong> Turn this article into your home’s SOP. Store your <em>family dog rules</em>, <em>feeding grams</em>, <em>exercise plan</em>, <em>grooming calendar</em>, and <em>ear-care protocol</em> in Petunia and share with caregivers so everyone follows the same checklist.
          </div>
        </section>

        {/* OVERVIEW */}
        <section id="overview" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Core Overview: Why Goldens Fit Families (and When They Don’t)</h2>
          <p className="mb-3">
            Golden Retrievers earned their reputation the honest way: they were bred to work closely with people, retrieving calmly and reliably over varied terrain and in water. That partnership heritage shows up at home as <strong>willingness to learn, social generosity, and playfulness</strong>. For many families, a Golden feels like another upbeat teammate—equally ready for hikes, fetch in the yard, or couch-time with a chew. 
          </p>
          <p className="mb-3">
            But “friendly” doesn’t mean “easy.” Goldens are <strong>athletic, smart, and persistent</strong>. Without <em>deliberate outlets</em> (training games, sniff walks, structured fetch, puzzle feeders) and <em>house rules</em>, that enthusiasm can become counter-surfing, sock collecting, or door-dashing. Their <strong>double coat sheds</strong> year-round, ears require regular care, and the breed carries <strong>orthopedic and some cancer risks</strong>. The families who thrive with Goldens are the ones who enjoy <em>routine</em> and <em>participation</em>: they reinforce good manners daily and treat exercise, grooming, and training like brushing teeth—ordinary, scheduled, and shared.
          </p>
          <p className="mb-0">
            If your family wants a sociable dog who can keep up with kid energy, run errands, and join vacations—and you’re comfortable with hair, mud, and daily time budgets—Goldens are a strong match. If you need an ultra-low-maintenance, low-shedding, minimal-exercise dog, look elsewhere.
          </p>
        </section>

        {/* FAMILY-FIT SNAPSHOT */}
        <section id="fit-snapshot" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Family-Fit Snapshot</h2>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>Temperament:</strong> typically friendly, people-loving, tolerant with appropriate management; not guard-oriented.</li>
            <li><strong>Energy:</strong> medium-high; needs daily physical + mental work (not just a yard).</li>
            <li><strong>Trainability:</strong> high; thrives with positive reinforcement, clear routines, and jobs.</li>
            <li><strong>Shedding/Grooming:</strong> heavy seasonal shedding + routine brushing, de-shedding, ear care.</li>
            <li><strong>Space:</strong> adapts to houses or apartments if exercise/enrichment needs are met.</li>
            <li><strong>Time cost:</strong> real; plan on daily exercise, short training reps, and regular grooming.</li>
            <li><strong>Health focus:</strong> ears/skin, weight, joints; routine veterinary care and lean body condition matter.</li>
          </ul>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Operator mindset:</strong> Assume your Golden will happily <em>do too much</em>. Your systems—play quotas, rest windows, kid-safe interactions, grooming cadence—keep the “too much” fun and safe.
          </div>
        </section>

        {/* TEMPERAMENT */}
        <section id="temperament" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Temperament &amp; Behavior: What “Friendly” Really Means</h2>
          <p className="mb-3">
            The AKC characterizes Golden Retrievers as <strong>friendly, reliable, and trustworthy</strong>. In real households that often looks like: a cheerful greeter at the door, a dog who loves fetch and carrying things, and a companion who shadows family members from room to room. Many Goldens are <strong>socially tolerant</strong> with people and dogs <em>when</em> owners manage arousal and resources thoughtfully (few dogs enjoy group chaos around high-value toys or food).
          </p>
          <p className="mb-3">
            Most behavior hiccups in family Goldens trace back to <strong>unstructured energy</strong> and <strong>inadvertent reinforcement</strong> (attention, access, chase). Common themes: jumping on guests, mouthing sleeves, grabbing socks, and pulling on leash. These respond well to <strong>management + training</strong> combos: baby gates and tethers, ample enrichment, and short, frequent training reps that build <em>default sit</em>, <em>drop</em>, <em>leave it</em>, <em>mat settle</em>, and <em>rocket recall</em>.
          </p>
          <p className="mb-0">
            Pro tip: build a <strong>“calm pays” culture</strong>. Everyone in the family quietly marks and treats calm approaches, four-on-the-floor greetings, and sustained relaxation on a mat. Over weeks, your Golden learns that serenity opens doors and earns attention faster than chaos.
          </p>
        </section>

        {/* TRAINING & ENRICHMENT */}
        <section id="training" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Training &amp; Enrichment: Jobs Make the Dog</h2>
          <p className="mb-3">
            A bored Golden will invent hobbies (counter-surfing, excavating, sock hoarding). Training and enrichment aren’t extra—they’re the <em>structure</em> that channels drive. Use marker-based, positive reinforcement and split skills into tiny steps. Keep sessions short (60–120 seconds) and frequent. 
          </p>
          <h3 className="text-lg font-semibold mt-2 mb-1">High-Yield Family Skills</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>Name response + hand target:</strong> “come touch” for redirecting from mischief and greeting calmly.</li>
            <li><strong>Default sit:</strong> at doors, food time, leashing, and to greet visitors.</li>
            <li><strong>Drop/Trade:</strong> sock insurance. Trade for food often, give the item back to reduce guarding risk.</li>
            <li><strong>Leave it:</strong> for tempting floor items and wildlife on walks.</li>
            <li><strong>Mat settle:</strong> your off-switch—build duration with a stuffed toy.</li>
            <li><strong>Loose-leash walking:</strong> treat at your pant seam; alternate “training blocks” with “sniff &amp; stroll.”</li>
            <li><strong>Recall:</strong> condition a cue that always pays big; practice on a long line before privileges.</li>
          </ul>
          <h3 className="text-lg font-semibold mt-2 mb-1">Enrichment Menu</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>Sniff work:</strong> scatter-feeds, “find it,” simple scent boxes—calming and tiring.</li>
            <li><strong>Retrieve channels:</strong> short, controlled fetch with rules (one retrieve at a time, clean drop).</li>
            <li><strong>Puzzle feeders:</strong> adjust meal portions into enrichment devices to slow intake and exercise the brain.</li>
            <li><strong>Shaping games:</strong> teach tricks and chores (bring the leash, put toys in a bin) to harness the carry instinct.</li>
          </ul>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Petunia tip:</strong> Track <em>criteria ladders</em> (e.g., recall at 5 ft → 10 ft → 20 ft with distractions). Only progress when 4/5 reps at a step are solid.
          </div>
        </section>

        {/* EXERCISE & LIFESTYLE */}
        <section id="exercise" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Exercise &amp; Lifestyle: Metered, Not Marathon</h2>
          <p className="mb-3">
            Healthy adult Goldens typically need <strong>daily aerobic movement</strong> plus <strong>mental work</strong>. Think layered days: a brisk sniff walk in the morning, a short fetch or training block mid-day, and a longer family walk or low-impact play in the evening, buffered by naps. Puppies and seniors need tailored plans: frequent short outings for pups; shorter, softer routines for seniors. 
          </p>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>Weather strategy:</strong> In heat/humidity, switch to shade, water breaks, and brain games. Watch for over-arousal and heat stress (see <a className="underline" href="#vet-now">Vet Now</a>).</li>
            <li><strong>Surfaces &amp; torque:</strong> Prefer turf or rubberized floors; avoid repeated stop-start sprints on slick surfaces.</li>
            <li><strong>Balance:</strong> end arousing play with a 1–2 minute decompression (sniff &amp; stroll, mat settle).</li>
          </ul>
          <p className="mb-0">
            A good rule: if your Golden struggles to settle or is creatively naughty, add <em>structured</em> outlets (sniff games, short training) and make sure you’re not overshooting with chaotic high-arousal play.
          </p>
        </section>

        {/* KIDS & SAFETY */}
        <section id="kids-safety" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Kids &amp; Safety Systems: How Families Keep “Friendly” Friendly</h2>
          <p className="mb-3">
            Most Goldens are excellent with children <em>when</em> families run play by rules. The goal isn’t to test tolerance; it’s to set up interactions so <strong>everyone has fun and feels safe</strong>. Use <em>management first</em> (baby gates, tethers, crates, playpens) and teach kids a simple safety protocol.
          </p>
          <h3 className="text-lg font-semibold mt-2 mb-1">Family Rules (Copy/Paste)</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>1-2-3 Consent Test:</strong> Ask to pet → hold your hand out → if the dog leans in for 3 seconds, pet; if they turn away, give space.</li>
            <li><strong>No rough play:</strong> no hugging, climbing, ear/tail pulling, or sitting on the dog—ever.</li>
            <li><strong>Rest means rest:</strong> no touching a sleeping dog, a dog eating, or a dog in their crate.</li>
            <li><strong>Toy &amp; food zones:</strong> pick up high-value chews when kids are active; feed the dog in a quiet area.</li>
            <li><strong>Adults supervise:</strong> if an adult can’t supervise, use management (gates/pen/crate).</li>
          </ul>
          <p className="mb-0">
            Teach kids to spot <strong>“give me space” signals</strong>: turning the head away, lip licking, yawning, suddenly going still, or moving behind an adult. Reward children for noticing and giving space—make safety a game everyone can win.
          </p>
        </section>

        {/* MULTI-PET */}
        <section id="multi-pet" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Multi-Pet Households: Smooth Integrations</h2>
          <p className="mb-3">
            Goldens often mesh well with other dogs and many cats, but introductions still benefit from structure. Use parallel walks and baby gates first. Keep resources <strong>separate</strong> (food bowls, chews, beds) and supervise toy play until you know how dogs negotiate possession. 
          </p>
          <ul className="list-disc pl-5 space-y-1 mb-0">
            <li><strong>Dog–dog:</strong> initial meets on neutral ground; short positive sessions; remove high-value toys.</li>
            <li><strong>Dog–cat:</strong> up-front management (gates, high perches); reward calm observe-and-withdraw; discourage chase with leashes and distance.</li>
          </ul>
        </section>

        {/* HOME SETUP */}
        <section id="home-setup" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Home Setup &amp; House Rules</h2>
          <p className="mb-3">
            A great family dog is mostly the product of a great <em>system</em>. Use zones, routines, and clear policies so your Golden knows how to win.
          </p>
          <h3 className="text-lg font-semibold mt-2 mb-1">Zones &amp; Gear</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Baby gates to separate kid play and dog rest times.</li>
            <li>Crate/pen as a calm nap area; a visible <strong>mat station</strong> for settles near family activity.</li>
            <li>Leash hooks at exits; treat jars where you need behavior (doorway sits, mat settles).</li>
            <li>Closed hampers and secure trash—retrievers retrieve.</li>
          </ul>
          <h3 className="text-lg font-semibold mt-2 mb-1">House Rules</h3>
          <ul className="list-disc pl-5 space-y-1 mb-0">
            <li>Default sit earns doors, meals, and greetings.</li>
            <li>Counter-surf prevention: management (no access), train <em>leave it</em>, reward four-on-the-floor near counters.</li>
            <li>Toy policy: rotate 3–5 toys; trade, don’t chase, for items the dog finds.</li>
            <li>Quiet hours: at least two formal rest blocks/day to prevent over-arousal.</li>
          </ul>
        </section>

        {/* HEALTH */}
        <section id="health" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Health &amp; Preventive Care: What Families Should Plan For</h2>
          <p className="mb-3">
            Golden Retrievers are generally robust but carry known risks that respond well to <strong>prevention and early management</strong>. Work closely with your veterinary team on vaccines, parasite control, nutrition, body-condition monitoring, and screening based on life stage.
          </p>
          <h3 className="text-lg font-semibold mt-2 mb-1">Focus Areas (Family Edition)</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>Ears:</strong> drop ears + water love → <em>otitis externa</em> risk. Dry ears after swims; use vet-advised cleansers; act early on head shaking/odor/redness.</li>
            <li><strong>Skin:</strong> “hot spots” (pyotraumatic dermatitis) can follow moisture/friction; keep coats clean/dry and treat early.</li>
            <li><strong>Weight:</strong> Goldens are food-motivated; lean body condition (<em>4–5/9</em>) protects joints and longevity.</li>
            <li><strong>Orthopedics:</strong> predisposition to cranial cruciate ligament disease and hip dysplasia; maintain lean weight and avoid uncontrolled stop-start sprints on slick surfaces.</li>
            <li><strong>Dental:</strong> daily brushing is best; consider VOHC-accepted chews as adjuncts.</li>
            <li><strong>Life stage care:</strong> puppies (vaccine series, socialization), adults (annual wellness), seniors (more frequent checks per guidelines).</li>
          </ul>
          <p className="mb-0">
            Ask your vet to help you set a <strong>nutrition plan</strong> with measured grams, treat budgets, and reweigh intervals. Prevention is cheaper—and kinder—than treatment.
          </p>
        </section>

        {/* GROOMING */}
        <section id="grooming" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Grooming &amp; Shedding: Realistic Expectations</h2>
          <p className="mb-3">
            Goldens shed. A lot. You’ll find hair on clothes, floors, and couches—and still think the dog looks perfect. Plan on <strong>regular brushing</strong> (several times weekly), <strong>de-shedding cycles</strong> in heavy seasons, routine <strong>ear care</strong>, nail trims, and the occasional bath. Keep sessions short and reinforce calm cooperative care (chin rest, hand target).
          </p>
          <ul className="list-disc pl-5 space-y-1 mb-0">
            <li>Rinse off pool chlorine/lake water; dry thoroughly to reduce hot spots.</li>
            <li>Teach a “grooming station” routine: dog hops up, chin rest, brush 30–60 seconds, treat, break.</li>
          </ul>
        </section>

        {/* BUDGET */}
        <section id="budget" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Costs &amp; Budgeting: Owning the Numbers</h2>
          <p className="mb-3">
            The recurring costs that matter most over time are <strong>food, veterinary care, preventives, grooming supplies, and training/enrichment</strong>. Budget a veterinary emergency fund and consider insurance to buffer surprises. A lean, well-exercised, well-trained Golden tends to be cheaper over a lifetime than a bored, overweight, frequently injured one.
          </p>
          <ul className="list-disc pl-5 space-y-1 mb-0">
            <li>Food &amp; treats (quality diet, measured by grams).</li>
            <li>Preventives (heartworm, flea/tick), vaccines, wellness visits.</li>
            <li>Grooming tools, VOHC chews, puzzle feeders.</li>
            <li>Training class budget (especially in the first year) and refreshers as needed.</li>
          </ul>
        </section>

        {/* CHOOSING */}
        <section id="choose" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Choosing a Golden: Adopt or Breeder (Due Diligence)</h2>
          <p className="mb-3">
            Wonderful family Goldens come from rescues and responsible breeders. Your job is to <strong>ask good questions</strong> and match the dog to your household. For puppies, ethical breeders prioritize <strong>health testing, temperament, and lifelong support</strong>. For adoption, reputable rescues provide honest behavior histories, vetting, and post-adoption support.
          </p>
          <h3 className="text-lg font-semibold mt-2 mb-1">Breeder Due Diligence (Highlights)</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Health testing aligned with club recommendations (hips, elbows, eyes, cardiac; discuss family history).</li>
            <li>Puppies raised with socialization protocols; clean, enriched environment; written health guarantees and return policies.</li>
            <li>Transparent about adult temperament and suitability for busy family homes.</li>
          </ul>
          <h3 className="text-lg font-semibold mt-2 mb-1">Adoption Fit</h3>
          <ul className="list-disc pl-5 space-y-1 mb-0">
            <li>Meet-and-greets with all family members (and pets) using management.</li>
            <li>Honest discussion of exercise/time budgets and kid ages; look for calm, resilient candidates.</li>
          </ul>
        </section>

        {/* LIFE CHANGES */}
        <section id="life-changes" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">New Baby &amp; Life Changes: Keep Attachment, Add Structure</h2>
          <p className="mb-3">
            Goldens often weather big changes well if you <strong>maintain routines</strong> and pre-train skills. Before baby arrives, practice walking with an empty stroller, teach “go to mat,” and create <strong>gated zones</strong>. Pair baby noises/scents with treats. Keep the dog’s daily jobs (sniff walks, chew time) intact—attachment to <em>their</em> routine prevents mischief.
          </p>
          <ul className="list-disc pl-5 space-y-1 mb-0">
            <li>Establish a <strong>quiet room</strong> the dog can retreat to; model kids respecting it.</li>
            <li>Use <strong>consent-based greetings</strong> and supervised proximity early on.</li>
          </ul>
        </section>

        {/* TRAVEL */}
        <section id="travel" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Travel, Boarding &amp; Daycare: Policies That Keep It Fun</h2>
          <p className="mb-3">
            Goldens can be excellent travelers and daycare participants if you manage <strong>arousal, heat, water access, and ear care</strong>. Choose facilities with clear vaccine policies (core + risk-based noncore), rest architecture, and objective daily logs. After water play, have staff dry ears and note any redness/odor.
          </p>
          <ul className="list-disc pl-5 space-y-1 mb-0">
            <li>Pack measured meals (grams), meds in original containers, grooming/ear supplies, and a VOHC-accepted chew.</li>
            <li>Ask for structured fetch (one dog per throw) and non-slip surfaces to protect joints.</li>
          </ul>
        </section>

        {/* TEMPLATES */}
        <section id="templates" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Checklists &amp; Templates</h2>

          <h3 className="text-lg font-semibold mt-2 mb-1">Family Dog Rules (Print for the Fridge)</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Default sit for doors, meals, and greetings; adults reinforce calmly.</li>
            <li>1-2-3 Consent Test before petting; no hugging or climbing on the dog.</li>
            <li>Dog eats/chews in a quiet zone; no touching when eating or sleeping.</li>
            <li>Two rest blocks/day (doors closed, lights down, white noise).</li>
            <li>Toys are traded, not chased; high-value chews only when kids are seated or separated.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Daily Schedule (Example)</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>07:00 — Potty + breakfast (reserve 20–30% ration for training).</li>
            <li>07:20 — 3 × 60–90s training reps (mat settle, hand target, recall).</li>
            <li>07:30 — Sniff &amp; stroll (15–20 min) → nap block (60–90 min).</li>
            <li>12:00 — Short training + puzzle feeder; ear/skin check if needed.</li>
            <li>17:30 — Family walk; controlled fetch in yard (limits + rules).</li>
            <li>Evening — Brush/ear-care as needed; mat settle during family time; bedtime routine.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Grooming &amp; Ear-Care Protocol</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Brush 3–5× weekly; quick de-shedding during heavy seasons.</li>
            <li>After swims: towel-dry body → lift ear flap and gently dry canal entry → apply vet-advised drying solution if prescribed → note any odor/redness.</li>
            <li>Nails: brief sessions 2–3× weekly; pair each nail with a treat; stop before struggle.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Boarding/Daycare Drop-Off List</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Vaccine dates; food (grams labeled); meds with dosing windows.</li>
            <li>Ear-care note (post-swim); preferred games; triggers; off-switch cues.</li>
            <li>Request daily log with play/rest times and any ear/skin/lameness notes.</li>
          </ul>

          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm mt-3">
            <strong>Petunia tip:</strong> Save these as <em>repeatable checklists</em> in Petunia and share with family and sitters so every day looks the same to your dog.
          </div>
        </section>

        {/* VET NOW */}
        <section id="vet-now" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">When to Call the Vet <em>Now</em></h2>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Heat stress:</strong> collapse, disorientation, severe panting, tacky or bright red gums—move to shade/AC, cool with tepid water, seek care.</li>
            <li><strong>Ear infection signs:</strong> persistent head shaking, odor, redness, pain on touch.</li>
            <li><strong>Skin “hot spot” rapidly expanding:</strong> oozing, hair loss, pain—early treatment prevents escalation.</li>
            <li><strong>Acute lameness/non-weight-bearing limb:</strong> rest and evaluation for possible cruciate/soft-tissue injury.</li>
            <li><strong>GI obstruction concern:</strong> repeated vomiting, painful abdomen, anorexia; suspected sock/corncob/rock ingestion—urgent exam.</li>
            <li><strong>Respiratory signs post-facility exposure:</strong> persistent cough, fever, labored breathing.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">Frequently Asked Questions</h2>

          <p className="mb-3">
            <strong>Are Golden Retrievers good with young kids?</strong><br />
            Generally yes—with <em>management</em> and <em>rules</em>. Use gates, consent-based petting, and adult supervision. Reward calm on both ends of the leash.
          </p>

          <p className="mb-3">
            <strong>Do Goldens do well in apartments?</strong><br />
            Yes, if you provide daily exercise, sniff walks, enrichment, and structured rest. A yard is helpful, not required.
          </p>

          <p className="mb-3">
            <strong>Are Goldens hypoallergenic?</strong><br />
            No. They shed and carry dander. Allergy-prone families should meet individual dogs and discuss management with their physician.
          </p>

          <p className="mb-3">
            <strong>How much exercise do they actually need?</strong><br />
            Plan on layered activity every day: brisk sniff walk(s), short training blocks, and a play channel like controlled fetch—plus naps. Puppies/seniors need tailored plans.
          </p>

          <p className="mb-3">
            <strong>Is professional training worth it?</strong><br />
            Yes—especially in the first year. Choose reward-based programs and keep practicing at home. Consistency &gt; intensity.
          </p>

          <p className="mb-0">
            <strong>Will a Golden protect the home?</strong><br />
            Some will alert bark, but the breed is not guard-oriented. Choose a different breed if you need a true deterrent; choose a Golden if you want a greeter and companion.
          </p>
        </section>

        {/* SOURCES */}
        <section id="sources" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">📚 Sources (Selected)</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            {/* Breed background & health */}
            <li>
              American Kennel Club (AKC). Golden Retriever breed overview.{' '}
              <a href="https://www.akc.org/dog-breeds/golden-retriever/" target="_blank" rel="noopener noreferrer">
                https://www.akc.org/dog-breeds/golden-retriever/
              </a>
            </li>
            <li>
              Golden Retriever Club of America (GRCA). Breed resources &amp; health.{' '}
              <a href="https://grca.org/" target="_blank" rel="noopener noreferrer">
                https://grca.org/
              </a>
            </li>
            <li>
              Royal Veterinary College (RVC) VetCompass. Epidemiology of common canine disorders; Labrador/Golden cohort insights.{' '}
              <a href="https://www.rvc.ac.uk/vetcompass" target="_blank" rel="noopener noreferrer">
                https://www.rvc.ac.uk/vetcompass
              </a>
            </li>
            <li>
              Morris Animal Foundation. Golden Retriever Lifetime Study.{' '}
              <a href="https://www.morrisanimalfoundation.org/golden-retriever-lifetime-study" target="_blank" rel="noopener noreferrer">
                https://www.morrisanimalfoundation.org/golden-retriever-lifetime-study
              </a>
            </li>

            {/* Preventive care & life stage */}
            <li>
              AAHA. Canine Life Stage resources (puppy, adult, senior).{' '}
              <a href="https://www.aaha.org/resources/how-often-should-my-dog-go-to-the-vet-a-dog-life-stage-guide/" target="_blank" rel="noopener noreferrer">
                https://www.aaha.org/.../dog-life-stage-guide/
              </a>
            </li>
            <li>
              WSAVA. Global Nutrition Guidelines (BCS, feeding plans, communication).{' '}
              <a href="https://wsava.org/global-guidelines/global-nutrition-guidelines/" target="_blank" rel="noopener noreferrer">
                https://wsava.org/global-guidelines/global-nutrition-guidelines/
              </a>
            </li>

            {/* Ears, skin, emergencies */}
            <li>
              Merck Veterinary Manual (MSD). Ear infections (otitis externa) in dogs—owner &amp; professional pages.{' '}
              <a href="https://www.merckvetmanual.com/dog-owners/ear-disorders-of-dogs/ear-infections-and-otitis-externa-in-dogs" target="_blank" rel="noopener noreferrer">
                Owner version
              </a>{' '}
              |{' '}
              <a href="https://www.msdvetmanual.com/ear-disorders/otitis-externa/otitis-externa-in-animals" target="_blank" rel="noopener noreferrer">
                Professional version
              </a>
            </li>
            <li>
              Merck Veterinary Manual (MSD). Pyotraumatic dermatitis (“hot spots”) in dogs.{' '}
              <a href="https://www.merckvetmanual.com/dog-owners/skin-disorders-of-dogs/pyotraumatic-dermatitis-hot-spots-in-dogs" target="_blank" rel="noopener noreferrer">
                https://www.merckvetmanual.com/.../pyotraumatic-dermatitis-hot-spots-in-dogs
              </a>
            </li>
            <li>
              MSD Vet Manual. Gastrointestinal foreign body obstruction (clinical signs, management).{' '}
              <a href="https://www.msdvetmanual.com/digestive-system/surgical-problems-of-the-gastrointestinal-tract-in-small-animals/gastrointestinal-obstruction-in-small-animals" target="_blank" rel="noopener noreferrer">
                https://www.msdvetmanual.com/.../gastrointestinal-obstruction
              </a>
            </li>

            {/* Orthopedics */}
            <li>
              American College of Veterinary Surgeons (ACVS). Cranial Cruciate Ligament Disease—client education.{' '}
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

            {/* Behavior & family safety */}
            <li>
              AVMA. Dog bite prevention &amp; family safety resources.{' '}
              <a href="https://www.avma.org/resources-tools/animal-health-and-welfare/dog-bite-prevention" target="_blank" rel="noopener noreferrer">
                https://www.avma.org/.../dog-bite-prevention
              </a>
            </li>
          </ul>
          <p className="text-xs text-gray-600 mt-4">
            Educational content only. Always consult your veterinarian and qualified trainers/behavior professionals for individualized guidance for your household.
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
