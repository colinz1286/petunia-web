'use client';

import Head from 'next/head';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function AreCaneCorsosGoodFamilyDogs() {
  const locale = useLocale();

  const title =
    'Are Cane Corsos Good Family Dogs? A Practical, Evidence-Informed Guide by Life Stage, Household Type, and Training Commitment';
  const date = 'August 20, 2025';
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
    'Cane Corsos can be steady, affectionate guardians in the right home, but they are powerful working dogs with strong protective instincts. This evidence-informed guide walks through temperament, socialization, training difficulty, and day-to-day management for babies, toddlers, school-age kids, teens, adults, and older adults. It also covers busy families, multi-pet homes, boarding/daycare fit, health considerations, insurance and legal issues, and a first-90-days plan.';

  return (
    <>
      <Head>
        <title>{title} – Petunia Blog</title>
        <meta name="description" content={description} />
        {/* Per user preference, do not use the word "index" here. */}
        <meta name="robots" content="all" />
        <link
          rel="canonical"
          href={`https://www.petuniapets.com/${locale}/blog/are-cane-corsos-good-family-dogs`}
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
            <li><a href="#snapshot" className="underline hover:opacity-80">Breed &amp; Household Snapshot</a></li>
            <li><a href="#temperament" className="underline hover:opacity-80">Temperament &amp; Instincts</a></li>
            <li><a href="#lifestages" className="underline hover:opacity-80">Babies → Older Adults</a></li>
            <li><a href="#busy" className="underline hover:opacity-80">Busy Families &amp; Activities</a></li>
            <li><a href="#training" className="underline hover:opacity-80">Are They Tough To Train?</a></li>
            <li><a href="#socialization" className="underline hover:opacity-80">Socialization &amp; Neutrality</a></li>
            <li><a href="#management" className="underline hover:opacity-80">Home Management &amp; Safety</a></li>
            <li><a href="#multipet" className="underline hover:opacity-80">Multi-Pet Households</a></li>
            <li><a href="#boarding" className="underline hover:opacity-80">Daycare &amp; Boarding Fit</a></li>
            <li><a href="#health" className="underline hover:opacity-80">Health, Exercise, Grooming</a></li>
            <li><a href="#legal" className="underline hover:opacity-80">Insurance &amp; Legal Considerations</a></li>
            <li><a href="#decision" className="underline hover:opacity-80">Decision Framework</a></li>
            <li><a href="#first90" className="underline hover:opacity-80">First 90 Days Plan</a></li>
            <li><a href="#checklists" className="underline hover:opacity-80">Checklists &amp; Templates</a></li>
            <li><a href="#faq" className="underline hover:opacity-80">FAQ</a></li>
            <li><a href="#sources" className="underline hover:opacity-80">Sources (Selected)</a></li>
          </ul>
        </nav>

        {/* TL;DR */}
        <section id="tldr" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Short Answer (TL;DR)</h2>
          <p className="mb-4">
            Cane Corsos can be <strong>loyal, affectionate family guardians</strong> when raised and managed with excellent socialization, consistent
            training, and thoughtful household systems. They are also <strong>large, powerful working dogs</strong> with protective instincts that demand
            adult leadership, structure, and active supervision with children. Families who thrive with Corsos usually have <strong>time for daily
            training</strong>, comfort setting rules for visitors and play, and a plan for safe management at home and in public. If your household is
            chaotic, frequently full of new guests, or short on time for training, another breed may be a better fit.
          </p>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Petunia tip:</strong> Create a simple &quot;family rules&quot; card in Petunia for your Corso: door routines, visitor plan, leash gear,
            feeding rules, and where the dog relaxes when energy runs high. Share it with sitters and relatives so everyone follows the same plan.
          </div>
        </section>

        {/* Snapshot */}
        <section id="snapshot" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Breed &amp; Household Snapshot</h2>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li><strong>Type:</strong> Italian mastiff, traditionally a property and family guardian.</li>
            <li><strong>Size &amp; power:</strong> very strong; adult males commonly 100+ lb. Handling skill matters.</li>
            <li><strong>Typical temperament:</strong> calm, confident, observant; affectionate with family; reserved with strangers; not a social butterfly.</li>
            <li><strong>Training profile:</strong> intelligent and capable; thrives with fair, consistent boundaries and reward-based training that builds neutrality.</li>
            <li><strong>Kid fit:</strong> can be excellent with kids they live with when supervision and structure are strong; management is non-negotiable.</li>
            <li><strong>Busy families:</strong> success depends on predictable routines and leadership; random, high-arousal lifestyles are challenging.</li>
            <li><strong>Daycare/boarding:</strong> often prefer quiet, small-group or one-on-one care over high-arousal free-for-all environments.</li>
          </ul>
          <p>
            The question is less &quot;Is this breed good?&quot; and more &quot;<strong>Is our household a good match for what this breed needs?</strong>&quot; The content below
            helps you answer that honestly across life stages and family types.
          </p>
        </section>

        {/* Temperament & instincts */}
        <section id="temperament" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Temperament &amp; Instincts: What You Are Working With</h2>
          <p className="mb-3">
            Corsos were shaped to notice changes in their environment, evaluate intent, and remain steady under pressure. That produces a dog that
            is usually <strong>calm at home</strong>, <strong>devoted to family</strong>, and <strong>skeptical of unknown people</strong>. They are not inherently aggressive, but they
            are <strong>honest communicators</strong> with strong opinions. A Corso that feels responsible for security will make choices unless you clearly
            take that job and show what &quot;normal&quot; looks like.
          </p>
          <p className="mb-3">
            Two instincts drive most household challenges: <strong>protective suspicion</strong> of unfamiliar people and <strong>body-blocking or resource guarding</strong> in tight
            spaces. Both improve with <em>structured neutrality training</em> and predictable routines for doors, guests, and kids. The goal is not to create
            a social butterfly. The goal is a dog that can <strong>remain calm, quiet, and responsive</strong> around typical daily stimuli.
          </p>
          <p className="mb-3">
            Because Corsos mature slowly and their confidence changes across adolescence, families should expect <strong>two to three years</strong> of active training
            and leadership. During that time, thoughtful management prevents bad habits from becoming rehearsed patterns.
          </p>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Petunia tip:</strong> Keep a weekly &quot;trigger log&quot; in Petunia: doorbell, delivery drivers, kids running, skateboards, men in hats. Track distance
            at which your dog stays calm. Progress is measured in calm seconds, not dramatic encounters.
          </div>
        </section>

        {/* Life stages */}
        <section id="lifestages" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">From Babies to Older Adults: Household Scenarios That Matter</h2>

          <h3 className="text-lg font-semibold mt-2 mb-1">Babies (0–12 months)</h3>
          <p className="mb-3">
            New parents are tired, schedules shift, and visitors come and go. A Corso can be loving and gentle, but the <strong>combination of sleep-deprived
            adults and a large adolescent dog</strong> needs a plan. Use <strong>barriers</strong> (baby gates, exercise pens) to define calm zones. Teach &quot;place&quot; early so the dog
            can relax at a distance during diaper changes and feeding. No unsupervised contact with the baby, ever. Reward quiet observation and provide
            durable chews for self-soothing when routines change.
          </p>

          <h3 className="text-lg font-semibold mt-2 mb-1">Toddlers (1–3 years)</h3>
          <p className="mb-3">
            Toddlers move unpredictably, grab skin and ears, and squeal. Corsos may tolerate a lot from &quot;their&quot; kids, but tolerance is not training. Teach
            toddlers a <strong>&quot;hands to self&quot;</strong> rule and model gentle touch. Prevent chasing games. Create &quot;no dog&quot; zones for rough play and &quot;no kid&quot; zones (crate
            with door closed, bedroom behind a gate) where the dog can rest. Guard the resting dog. If a child approaches a resting dog, the adult intervenes,
            calls the dog away, and rewards the check-in. This routine protects everyone.
          </p>

          <h3 className="text-lg font-semibold mt-2 mb-1">School-Age Kids (4–12 years)</h3>
          <p className="mb-3">
            This is a sweet spot for many families. Kids can learn to participate in training: hand-target games, simple leash skills in the driveway, and
            food preparation routines. The Corso should be <strong>neutral to play</strong> in the yard, not a referee. If kids have friends over, default to <strong>management</strong>:
            leash and bed behind a gate while greetings happen, then calm, supervised time. Visitors should ignore the dog at first; friendly indifference
            helps many guardians relax.
          </p>

          <h3 className="text-lg font-semibold mt-2 mb-1">Teens</h3>
          <p className="mb-3">
            Teens bring new variables: driving, dating, late arrivals, and friends with loud energy. Review house rules with teens and put them in Petunia:
            greet the dog calmly, leash before opening the door for guests, confirm the dog&#39;s &quot;place&quot; before social time begins, and crate or gate if a party
            is happening. A confident Corso can handle bustle, but the dog should not be tasked with &quot;guarding&quot; teen gatherings. Structure prevents mistakes.
          </p>

          <h3 className="text-lg font-semibold mt-2 mb-1">Adults</h3>
          <p className="mb-3">
            Adult households often succeed with Corsos because routines are predictable and adults can manage doors, deliveries, and walks with intention.
            The dog gets focused training and exercise, then rests. If you entertain frequently, build a guest script: leash on before the door opens, bed
            behind a gate while coats and conversation begin, and optional polite greetings on cue. Clear rules make hospitality safer and more enjoyable.
          </p>

          <h3 className="text-lg font-semibold mt-2 mb-1">Older Adults</h3>
          <p className="mb-3">
            Older adults may appreciate the calm companionship and sense of security a Corso provides, but <strong>handling strength</strong> and <strong>risk of falls</strong> matter.
            Choose a stable adult with proven leash manners. Consider a harness with front control and practice predictable routines: heel to the mailbox,
            sit before stairs, wait at curbs. Recruit a trainer or family member to handle heavier exercise. The goal is steadiness, not power.
          </p>

          <h3 className="text-lg font-semibold mt-2 mb-1">Multi-Generational &amp; Special Considerations</h3>
          <p className="mb-3">
            Households with grandparents, rotating caregivers, or kids with mobility or sensory needs should focus on <strong>predictable patterns</strong>. Post the
            &quot;Corso plan&quot; where everyone can see it: how to enter, how to move through the kitchen, when to ignore the dog, and what to do if the dog
            becomes excited. Calm patterns reduce surprises, and surprises are what wake up a guardian breed&#39;s suspicion.
          </p>
        </section>

        {/* Busy families */}
        <section id="busy" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Busy Families &amp; Lots of Activities: Realistic or Risky?</h2>
          <p className="mb-3">
            Activity by itself is not a problem. <strong>Unstructured, high-arousal activity</strong> is the problem. A Corso can accompany a family to sports sidelines,
            hiking trails, and outdoor cafes if you invest in neutrality and have a management plan. If your reality is doors opening constantly, kids racing
            through hallways, and frequent unscheduled guests, the dog will practice the wrong job: <strong>control the chaos</strong>. That is where friction begins.
          </p>
          <p className="mb-3">
            Strong candidates for a Corso include families who enjoy <strong>structured routines</strong>, like morning walks, quiet afternoons, and predictable evening
            down-time; who are comfortable <strong>telling visitors what to do</strong>; and who enjoy <strong>short daily training sessions</strong>. Less ideal are households that cannot
            control doorways, accept drop-ins at all hours, or dislike giving instructions to guests. The dog reads your comfort level and will step in if
            leadership feels vacant.
          </p>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Good match: early walker + evening training habit; kids who can follow rules; few unplanned visitors.</li>
            <li>Harder match: constant carpools, chaotic sleepovers, and doors that are routinely left open.</li>
          </ul>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Petunia tip:</strong> Build a weekly &quot;Corso rhythm&quot; in Petunia: 15-minute morning walk, 5-minute skill block at lunch, 20-minute calm sniff walk
            after dinner, and a 3-minute settle exercise during homework time. Repetition builds the dog you want.
          </div>
        </section>

        {/* Training */}
        <section id="training" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Are Cane Corsos Tough To Train?</h2>
          <p className="mb-3">
            They are <strong>very trainable</strong> and often eager to work with their people, but they are <strong>not forgiving of unclear rules</strong>. Corsos notice patterns and
            will fill leadership gaps. Harsh handling can create conflict; permissiveness creates pushy behavior. The sweet spot is <strong>calm, clear, reward-based
            training with consistent boundaries</strong>. Think matter-of-fact, not macho.
          </p>
          <h3 className="text-lg font-semibold mt-2 mb-1">Core skills for family life</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>Leash skills &amp; reactivity prevention:</strong> heel beside the thigh, automatic sit at curbs, &quot;leave it&quot; for approaching strangers, and a default &quot;watch me&quot;.</li>
            <li><strong>Place/settle:</strong> go to a mat and relax while people move, kids play, or food is served.</li>
            <li><strong>Door protocol:</strong> sit-wait, handler steps through first, permission to follow. Collar hold while opening.</li>
            <li><strong>Out/drop:</strong> easy release of toys and food bowls; prevents resource guarding from maturing.</li>
            <li><strong>Come here:</strong> cheerful recall, especially when arousal rises.</li>
          </ul>
          <h3 className="text-lg font-semibold mt-2 mb-1">Time commitment</h3>
          <p className="mb-3">
            Expect <strong>10–20 minutes</strong> of training most days for the first two years, then maintenance sessions. Add management whenever you cannot train:
            leash on when guests arrive, crate for loud kid parties, gate the kitchen during meal prep. Training and management are partners.
          </p>
          <h3 className="text-lg font-semibold mt-2 mb-1">Professional support</h3>
          <p>
            Choose a trainer who has <strong>mastiff or guardian breed experience</strong>, uses reward-based methods, and can show you how to build neutrality in public. Group
            classes are useful for controlled exposure; private sessions help tune household rules. If behavior changes suddenly, schedule a veterinary exam
            to rule out pain, thyroid changes, or other medical drivers.
          </p>
        </section>

        {/* Socialization */}
        <section id="socialization" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Socialization &amp; Neutrality: The Right Kind of Exposure</h2>
          <p className="mb-3">
            For a guardian breed, socialization does not mean greeting every person and dog. It means <strong>calm exposure without obligation</strong>. Puppy's first
            year is time to show what everyday life looks like: strollers, wheelchairs, delivery drivers, kids playing ball, men with beards, umbrellas,
            lawn equipment, and polite ignoring of strangers. The puppy learns that these are background events, not problems to solve.
          </p>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Reward calm observation at a distance where your puppy can remain relaxed.</li>
            <li>Teach &quot;look at that&quot;: the dog glances at a trigger, then returns attention to you for a reward.</li>
            <li>Protect recovery time. End sessions while the puppy is still successful.</li>
            <li>Use qualified puppy socials that screen participants and prevent bullying and rehearsed chasing.</li>
          </ul>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Petunia tip:</strong> Log a weekly &quot;new sights&quot; list in Petunia with a 1–5 calmness score. Patterns beat randomness, and notes help the whole family
            train the same way.
          </div>
        </section>

        {/* Management */}
        <section id="management" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Home Management &amp; Safety Systems</h2>
          <p className="mb-3">
            Management is what protects training and keeps everyone safe. Corsos do well when the environment makes good choices easy. The goal is not to
            crate forever. The goal is to <strong>give structure while skills grow</strong>, then relax systems as reliability proves itself.
          </p>
          <h3 className="text-lg font-semibold mt-2 mb-1">The &quot;Four Gates&quot; method</h3>
          <ol className="list-decimal pl-5 space-y-2 mb-3">
            <li><strong>Front door gate:</strong> leash on before opening; dog goes to place while guests enter.</li>
            <li><strong>Kitchen gate:</strong> define a line the dog does not cross during cooking and meals.</li>
            <li><strong>Kids&#39; play gate:</strong> when energy rises, dog rests behind a barrier with a chew.</li>
            <li><strong>Dog rest gate:</strong> a location where the dog is fully off duty. No child approaches a resting dog.</li>
          </ol>
          <h3 className="text-lg font-semibold mt-2 mb-1">Visitor script</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Leash and place before the door opens.</li>
            <li>Guests ignore the dog for five minutes.</li>
            <li>Optional greeting: one at a time, side angle, no looming, one gentle chest rub, then disengage.</li>
          </ul>
          <h3 className="text-lg font-semibold mt-2 mb-1">Equipment</h3>
          <p className="mb-3">
            Choose a well-fitted flat collar plus a sturdy harness with front attachment for leverage. A 6-foot leash for sidewalks and a 15- to 20-foot line for
            decompression walks in open fields. Consider <strong>muzzle training</strong> proactively so veterinary and grooming tasks are lower stress later.
          </p>
          <h3 className="text-lg font-semibold mt-2 mb-1">Resource guarding prevention</h3>
          <p>
            Feed measured meals in a quiet spot. Teach &quot;out&quot; and trade games with high-value chews. Kids never approach a dog that is eating or chewing; adults
            call the dog away and pick up items afterward. Predictability turns potential flash points into non-events.
          </p>
        </section>

        {/* Multi-pet */}
        <section id="multipet" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Multi-Pet Households</h2>
          <p className="mb-3">
            Many Corsos live peacefully with other dogs and cats at home. Challenges arise from <strong>same-sex friction</strong>, <strong>maturity changes during adolescence</strong>, and
            <strong> competition over human attention or toys</strong>. Introductions should be slow, on neutral ground, with parallel walks and gate swapping in the home.
          </p>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Feed separately; store chews when dogs are together.</li>
            <li>Teach turn-taking during affection and training.</li>
            <li>Monitor for stiffening, hard staring, or blocking; interrupt early and give space.</li>
            <li>Provide escape routes for cats and high resting spots.</li>
          </ul>
          <p>
            If you already have a pushy adult dog or you prefer dog-park lifestyles, a Corso may be a challenging addition. If you value calm coexistence and
            controlled greetings, many Corsos thrive in multi-pet families.
          </p>
        </section>

        {/* Daycare & Boarding */}
        <section id="boarding" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Daycare &amp; Boarding: Right Program, Right Expectations</h2>
          <p className="mb-3">
            Corsos are not usually the &quot;run all day with 25 dogs&quot; type. Many do better with <strong>small groups</strong>, <strong>short play blocks</strong>, and <strong>structured sniff walks</strong>.
            When shopping for care, ask about staff-to-dog ratios, play style matching, quiet rest areas, and how they handle guardian breeds. For boarding,
            request photos of where dogs sleep, ask about nail traction on floors, and share your management rules. The right facility respects your dog&#39;s
            temperament and keeps arousal low.
          </p>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Green flag: calm, clean, small-group care with experienced staff and careful introductions.</li>
            <li>Red flag: chaotic yards with constant high-energy chase games and little staff coaching.</li>
          </ul>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Petunia tip:</strong> Share your Petunia &quot;Corso card&quot; with the facility: feeding, meds, &quot;place&quot; cue, visitor rules, and a note that polite ignoring
            is preferred over crowding greetings.
          </div>
        </section>

        {/* Health, exercise, grooming */}
        <section id="health" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Health, Exercise, and Grooming Basics</h2>
          <h3 className="text-lg font-semibold mt-2 mb-1">Health profile (selected)</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Orthopedic: hip and elbow dysplasia risk exists; keep a lean body condition and grow puppies slowly.</li>
            <li>Eyes &amp; skin: entropion/ectropion and skin folds can occur; watch for irritation and keep skin clean and dry.</li>
            <li>Cardiac: some lines may have heart considerations; ask your breeder about screening and share history with your veterinarian.</li>
            <li>Gastrointestinal: as a large, deep-chested breed, discuss bloat (GDV) awareness and whether prophylactic gastropexy is appropriate.</li>
          </ul>
          <h3 className="text-lg font-semibold mt-2 mb-1">Exercise pattern</h3>
          <p className="mb-3">
            Daily movement matters, but joints matter too. Aim for <strong>two to three</strong> calm walks plus one <strong>short skill block</strong>. Use scent games and
            find-it searches for mental work. Avoid repetitive leaping for balls or slick surfaces. Warm up with a few minutes of easy walking and finish with
            a cool-down to reduce stiffness.
          </p>
          <h3 className="text-lg font-semibold mt-2 mb-1">Nutrition &amp; body condition</h3>
          <p className="mb-3">
            Choose a complete food that meets AAFCO or FEDIAF profiles for your dog&#39;s life stage. Keep your Corso <strong>lean</strong>: ribs easy to feel, waist visible
            from above, abdominal tuck from the side. Excess weight strains hips and elbows and can shorten healthy lifespan. Measure meals to calories and
            adjust every two weeks based on a body condition score of 4–5 on a 9-point scale.
          </p>
          <h3 className="text-lg font-semibold mt-2 mb-1">Grooming</h3>
          <p>
            Short coat does not mean no grooming. Weekly brushing, nail trims every 2–4 weeks, and regular tooth brushing are simple habits with outsized
            health benefits. Check ears after baths and swimming. In hot months, manage heat with shade, water, and rest; in cold months, protect paws and
            watch for ice slips.
          </p>
        </section>

        {/* Legal & Insurance */}
        <section id="legal" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Insurance &amp; Legal Considerations</h2>
          <p className="mb-3">
            Some municipalities and homeowners policies treat large guardian breeds differently. Before bringing home a Corso, check <strong>local laws</strong>, landlord
            rules, and <strong>insurance</strong> coverage. If travel or housing flexibility is important to you, plan ahead so breed-related restrictions do not put
            your dog at risk for rehoming. Use polite leash manners, clean up diligently, and be a model neighbor to keep community goodwill.
          </p>
          <p>
            Training documentation helps. Keep proof of classes, vaccination records, and your written management plan in Petunia. If a concern ever arises,
            showing your proactive systems can help diffuse tension and demonstrate responsible ownership.
          </p>
        </section>

        {/* Decision framework */}
        <section id="decision" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Decision Framework: &quot;Yes If&quot; and &quot;Not Yet If&quot;</h2>
          <h3 className="text-lg font-semibold mt-2 mb-1">Yes, a Cane Corso could be a good fit if your family:</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Wants a calm, devoted companion that prefers family time over strangers&#39; attention.</li>
            <li>Can commit to daily training and predictable routines for the first two years.</li>
            <li>Is comfortable setting visitor rules and supervising dog-kid interactions.</li>
            <li>Likes low-arousal activities: neighborhood walks, hikes, patio sitting with neutral behavior.</li>
            <li>Is prepared for the cost of quality food, training, veterinary care, and robust equipment.</li>
          </ul>
          <h3 className="text-lg font-semibold mt-2 mb-1">Not yet, or maybe choose another breed, if your family:</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Prefers spontaneous social gatherings where dogs mix freely with new people without structure.</li>
            <li>Struggles to keep doors closed or supervise kids consistently.</li>
            <li>Wants frequent dog-park play with unknown dogs.</li>
            <li>Has limited time for training and management during the dog&#39;s long adolescence.</li>
          </ul>
        </section>

        {/* First 90 days */}
        <section id="first90" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Your First 90 Days With a Cane Corso</h2>
          <h3 className="text-lg font-semibold mt-2 mb-1">Days 1–7: Set the tone</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>House map: crate spot, water, backyard route, and &quot;no dog&quot; zones.</li>
            <li>Teach name, hand target, &quot;sit&quot;, &quot;down&quot;, &quot;come&quot;, and &quot;place&quot; with food rewards.</li>
            <li>Two calm walks daily; reward check-ins and a soft eye contact &quot;watch&quot; cue.</li>
            <li>Invite zero chaotic greetings. Neutrally pass people at distance, reward calm.</li>
          </ul>
          <h3 className="text-lg font-semibold mt-2 mb-1">Weeks 2–6: Build skills and neutrality</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Leash skills on quiet streets; default &quot;sit&quot; at curbs; &quot;leave it&quot; for attention magnets.</li>
            <li>Visitor routine rehearsals with trusted friends who can follow instructions.</li>
            <li>Short &quot;place&quot; practice during meals and homework; gradually extend duration.</li>
            <li>Enroll in a reward-based group class that welcomes guardian breeds.</li>
          </ul>
          <h3 className="text-lg font-semibold mt-2 mb-1">Weeks 7–12: Proof in real life</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Go to a quiet cafe patio. Choose a corner, settle on a mat, reward calm glances.</li>
            <li>Practice calm, short greetings with your chosen &quot;greeter&quot; friend. No crowding.</li>
            <li>Introduce muzzle training as a life skill; pair with food and slow steps.</li>
            <li>Review health plan with your veterinarian; schedule baseline labs if appropriate.</li>
          </ul>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm mt-3">
            <strong>Petunia tip:</strong> Put the 90-day plan into Petunia as recurring tasks with checkboxes. Consistency turns potential into reliability.
          </div>
        </section>

        {/* Checklists */}
        <section id="checklists" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Checklists &amp; Templates</h2>

          <h3 className="text-lg font-semibold mt-2 mb-1">Visitor Script (Print This)</h3>
          <ol className="list-decimal pl-5 space-y-2 mb-3">
            <li>Leash on. Dog to &quot;place&quot; behind a gate or on a mat.</li>
            <li>Guests enter and ignore the dog for five minutes.</li>
            <li>Optional one-at-a-time greeting on cue; side angle, no leaning, one calm pet, then disengage.</li>
            <li>Dog returns to &quot;place&quot; or relaxes on leash near handler.</li>
          </ol>

          <h3 className="text-lg font-semibold mt-2 mb-1">Kid Rules (Household Card)</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Do not disturb a resting dog. Ask an adult to call the dog away first.</li>
            <li>Hands to self; pet only when an adult says &quot;yes&quot; and the dog is sitting.</li>
            <li>No running games with the dog; play find-it or trick training instead.</li>
            <li>Keep doors and gates closed. Tell an adult if the dog has a chew.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Daily Rhythm Template</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Morning: 15- to 25-minute sniff walk + 5-minute skills.</li>
            <li>Midday: place practice during lunch prep + short hand-target game.</li>
            <li>Evening: 20-minute calm walk + two 2-minute settle blocks during homework or TV.</li>
            <li>Bedtime: potty, teeth check, quiet crate or bed routine.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">Frequently Asked Questions</h2>

          <p className="mb-3">
            <strong>Are Cane Corsos &quot;naturally good&quot; with kids?</strong><br />
            Many are affectionate and patient with their own family. Success comes from supervision, training, and predictable rules. No breed is a substitute
            for adult leadership. Treat kid-dog time as an activity that adults set up and monitor, not as background noise.
          </p>

          <p className="mb-3">
            <strong>Can a first-time dog owner succeed with a Corso?</strong><br />
            Some do, especially with mentor support and a strong training plan. In general, experience helps. If you are new to dogs and live a chaotic lifestyle,
            consider a mellower breed. If you truly love the Corso temperament, partner early with a trainer, choose a calm adult or a well-raised puppy from a
            breeder who prioritizes stable temperaments, and commit to daily practice.
          </p>

          <p className="mb-3">
            <strong>How much exercise do Corsos need?</strong><br />
            Less sprinting, more structure. Two to three calm walks plus short skill sessions meet most needs. Over-arousal creates problems; neutrality creates
            freedom. Focus on steady patterns, not exhaustion.
          </p>

          <p className="mb-3">
            <strong>Are they dog-park dogs?</strong><br />
            Usually not. Many Corsos prefer calm, known companions and do not enjoy chaotic free-for-all scenes. Choose parallel walks, small compatible groups,
            or solo sniff outings instead.
          </p>

          <p className="mb-3">
            <strong>Will a Corso protect my home?</strong><br />
            A typical Corso will alert and posture if something is off. The best family guardians are trained to <em>stay calm until asked</em>. Your job is to own
            the door, set visitor routines, and teach the dog that your choices end the conversation.
          </p>

          <p className="mb-3">
            <strong>Do they drool a lot? Shed a lot?</strong><br />
            Moderate drool for most individuals and seasonal shedding. Keep towels by water bowls, brush weekly, and plan a quick vacuum routine during spring and
            fall coat changes.
          </p>

          <p className="mb-3">
            <strong>How do I pick a breeder or rescue partner?</strong><br />
            Look for temperament-first decision making, early exposure to home sounds, and adult dogs on site that are calm with visitors under handler control.
            Ask about orthopedic and cardiac screening, how puppies are matched to homes, and what support you receive post-placement. Rescue groups should
            provide behavior history, home notes, and a realistic assessment of the dog&#39;s comfort with kids, cats, and visitors.
          </p>

          <p className="text-xs text-gray-600">
            Educational content only. Always consult your veterinarian and a qualified trainer for individualized guidance.
          </p>
        </section>

        {/* Sources */}
        <section id="sources" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">📚 Sources (Selected)</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            <li>
              American Kennel Club (AKC). Cane Corso breed overview and care basics.
              <a href="https://www.akc.org/dog-breeds/cane-corso/" target="_blank" rel="noopener noreferrer"> AKC profile</a>
            </li>
            <li>
              Fédération Cynologique Internationale (FCI). Cane Corso Italiano standard (FCI No. 343).
              <a href="https://www.fci.be/en/nomenclature/CANE-CORSO-ITALIANO-343.html" target="_blank" rel="noopener noreferrer"> FCI standard</a>
            </li>
            <li>
              American Veterinary Society of Animal Behavior (AVSAB). Position statement on puppy socialization.
              <a href="https://avsab.org/resources/position-statements/" target="_blank" rel="noopener noreferrer"> AVSAB statements</a>
            </li>
            <li>
              American Animal Hospital Association (AAHA). Canine life stage guidelines and preventive care frameworks.
              <a href="https://www.aaha.org/education/guidelines/canine-life-stage-guidelines/" target="_blank" rel="noopener noreferrer"> AAHA guideline hub</a>
            </li>
            <li>
              WSAVA. Global dental guidelines for dogs.
              <a href="https://wsava.org/global-guidelines/dental-guidelines/" target="_blank" rel="noopener noreferrer"> WSAVA dental</a>
            </li>
            <li>
              ACVS. Gastric dilatation-volvulus (bloat) overview and prophylactic gastropexy.
              <a href="https://www.acvs.org/small-animal/gastric-dilatation-volvulus" target="_blank" rel="noopener noreferrer"> ACVS resource</a>
            </li>
            <li>
              American Heartworm Society. Canine heartworm prevention and guidelines.
              <a href="https://www.heartwormsociety.org/veterinary-resources/american-heartworm-society-guidelines" target="_blank" rel="noopener noreferrer"> AHS guidelines</a>
            </li>
            <li>
              International Association of Animal Behavior Consultants (IAABC). Best practices for family dog safety and management.
              <a href="https://iaabc.org/" target="_blank" rel="noopener noreferrer"> IAABC</a>
            </li>
          </ul>
          <p className="text-xs text-gray-600 mt-4">
            Sources are provided for general education. Local laws and insurance policies vary by region; verify requirements in your area.
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
