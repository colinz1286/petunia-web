'use client';

import Head from 'next/head';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function AreFrenchBulldogsGoodWithChildrenAndOtherPets() {
  const locale = useLocale();

  const title =
    'Are French Bulldogs Good with Children and Other Pets? Temperament, Training, and a Proven Home Playbook';
  const date = 'April 6, 2025';
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
    'French Bulldogs are typically affectionate, social companions, but no breed is “childproof.” This evidence-informed guide covers temperament, child-by-age safety, dog–dog and dog–cat introductions, resource guarding, body language, training plans, daycare/boarding policies, and ready-to-use checklists—plus professional sources.';

  return (
    <>
      <Head>
        <title>{title} – Petunia Blog</title>
        <meta name="description" content={description} />
        <meta name="robots" content="index,follow" />
        <link
          rel="canonical"
          href={`https://www.petuniapets.com/${locale}/blog/are-french-bulldogs-good-with-children-and-other-pets`}
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
            <li><a href="#tl-dr" className="underline hover:opacity-80">TL;DR</a></li>
            <li><a href="#temperament" className="underline hover:opacity-80">Temperament Snapshot</a></li>
            <li><a href="#kids-overview" className="underline hover:opacity-80">Are They Good with Kids?</a></li>
            <li><a href="#age-buckets" className="underline hover:opacity-80">Child-by-Age Safety Plan</a></li>
            <li><a href="#body-language" className="underline hover:opacity-80">Dog Body Language 101</a></li>
            <li><a href="#training" className="underline hover:opacity-80">Training &amp; Socialization</a></li>
            <li><a href="#introductions-baby" className="underline hover:opacity-80">New Baby &amp; Toddler Introductions</a></li>
            <li><a href="#dogs" className="underline hover:opacity-80">Other Dogs: Play Styles &amp; Tolerance</a></li>
            <li><a href="#cats" className="underline hover:opacity-80">Cats &amp; Small Pets</a></li>
            <li><a href="#guarding" className="underline hover:opacity-80">Resource Guarding Prevention</a></li>
            <li><a href="#home" className="underline hover:opacity-80">Home Setup &amp; Default Rules</a></li>
            <li><a href="#daycare" className="underline hover:opacity-80">Daycare/Boarding Policies</a></li>
            <li><a href="#templates" className="underline hover:opacity-80">Checklists &amp; Templates</a></li>
            <li><a href="#faq" className="underline hover:opacity-80">FAQ</a></li>
            <li><a href="#sources" className="underline hover:opacity-80">📚 Sources (Selected)</a></li>
          </ul>
        </nav>

        {/* TL;DR */}
        <section id="tl-dr" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Short Answer (TL;DR)</h2>
          <p className="mb-4">
            <strong>Yes—many French Bulldogs do very well with children and other pets</strong> when you provide structure:
            thoughtful introductions, supervision, body-language awareness, and consistent training. They are typically
            affectionate, people-focused, and playful. But <strong>no breed is “childproof”</strong>. Safety depends more on
            <em> management systems</em> than on personality: predictable rules, safe zones, and calm routines. For other pets,
            most Frenchies coexist well with dogs and many can live peacefully with cats if introductions are slow and you
            control arousal. Small prey-type pets require strict separation.
          </p>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Petunia tip:</strong> Put your household’s rules—<em>kid interactions, door greetings, cat gates, feeding zones, and “pause words”</em>—
            in Petunia so every caregiver follows the same playbook. Consistency is what makes “good with kids” reliable.
          </div>
        </section>

        {/* TEMPERAMENT */}
        <section id="temperament" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Temperament Snapshot: What Frenchies Bring to a Family</h2>
          <p className="mb-3">
            Breed guides describe French Bulldogs as <strong>affectionate, adaptable, even-tempered clowns</strong> who thrive on human
            company and short bursts of play. Their compact size and low-to-moderate exercise needs suit busy households,
            apartments, and city living. The same stocky build, however, can reduce heat tolerance, and their short muzzles
            may change how they play (shorter sessions, more breaks).
          </p>
          <p className="mb-3">
            From a behavior lens, what matters is not just “friendliness” but <em>frustration tolerance</em>, <em>arousal recovery</em>,
            and <em>history of reinforcement</em>. A Frenchie that regularly earns reinforcement for calm sits, loose-leash walking,
            and “go to mat” will generalize those skills around kids and other pets. A Frenchie who practices jumping,
            wrestling, and door-dashing as the only fun outlets will be charming—but chaotic.
          </p>
          <p>
            Translation: temperament is the seed; <strong>systems and training</strong> are the soil, water, and sun.
          </p>
        </section>

        {/* KIDS OVERVIEW */}
        <section id="kids-overview" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Are French Bulldogs Good with Children?</h2>
          <p className="mb-3">
            With appropriate management, many Frenchies are <strong>excellent family dogs</strong>. They tend to seek human contact,
            enjoy brief games, and nap near their people. Success with children hinges on <strong>supervision</strong>, <strong>predictable rules</strong>,
            and <strong>teaching kids how to interact</strong> (no hugging, leaning, grabbing; reward calm behaviors). National veterinary and
            public-health organizations emphasize that preventing bites (especially to children) is primarily about <em>adult
            management</em>—not finding the “perfect breed.” Clear household rules and body-language literacy dramatically reduce risk.
          </p>
          <p>
            If your household is noisy or full of sudden movement, you’ll simply lean harder on management skills: safe zones,
            “dog off-duty” times, and short, structured play sequences with planned recoveries.
          </p>
        </section>

        {/* AGE BUCKETS */}
        <section id="age-buckets" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Child-by-Age Safety Plan</h2>
          <p className="mb-3">
            Kids at different stages interact differently. Equip each age group with a simple playbook and make it consistent
            across caregivers (parents, grandparents, sitters). Use these as starting points and adapt with your trainer or
            veterinarian if needed.
          </p>
          <h3 className="text-lg font-semibold mt-2 mb-1">Infants (0–12 months)</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Frenchie has a <strong>rest zone</strong> (pen or room gate) the dog can access anytime. Baby gear (swing, mat) is off-limits to the dog.</li>
            <li>Introduce baby scents and sounds gradually; pair with treats on a <em>mat</em> at a safe distance.</li>
            <li>All proximity is <strong>supervised</strong>. If baby fusses, give the dog a “mat and chew” assignment in another room.</li>
          </ul>
          <h3 className="text-lg font-semibold mt-2 mb-1">Toddlers (1–3 years)</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Toddlers move unpredictably. Default to <strong>barriers</strong> (gates, pens) and <strong>two-adult management</strong> for close contact.</li>
            <li>Teach a “<strong>rocket-free zone</strong>” around the dog: no running toward, no hugging, no climbing. Adults reward toddler for calm choices.</li>
            <li>Frenchie gets frequent <strong>“off-duty”</strong> breaks with a stuffed Kong in a cool, quiet room.</li>
          </ul>
          <h3 className="text-lg font-semibold mt-2 mb-1">Preschool &amp; Early School (4–8 years)</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Kids earn “dog helper” badges: refill water, place the bed, cue “sit” and “go to mat,” and scatter-feed kibble for sniffing games.</li>
            <li>Teach <strong>pause words</strong> (e.g., “Space, please”) that mean step back from the dog; adult backs the child up.</li>
            <li>Short, structured games: 30–60 seconds of treat toss to the mat, hand-targets, or hide-and-seek with an adult spotting.</li>
          </ul>
          <h3 className="text-lg font-semibold mt-2 mb-1">Tweens &amp; Teens (9+ years)</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Teens can run advanced training: loose-leash town walks at off-peak hours, nosework searches, trick chains.</li>
            <li>They also help enforce <strong>heat rules</strong>, crate cool-downs, and post-walk fold/ear checks.</li>
            <li>Rotate responsibility: teen logs the day’s “two calm sits” and “one mat settle” in Petunia.</li>
          </ul>
        </section>

        {/* BODY LANGUAGE */}
        <section id="body-language" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Dog Body Language 101 (Teach the Whole Family)</h2>
          <p className="mb-3">
            Children are safer when adults can decode early stress signals and intervene <em>before</em> a snap or bite. Learn and teach
            these cues:
          </p>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>Ambivalence/avoidance:</strong> turning the head away, whale eye (white of the eye showing), lip-licking, yawning out of context.</li>
            <li><strong>Tension:</strong> stiff body, closed mouth, high still tail, freezing even for a second.</li>
            <li><strong>Escalation:</strong> growl, air snap, retreat to bed—these are <em>communication</em>, not “badness.” Respect them and provide space.</li>
            <li><strong>Comfort:</strong> soft eyes, loose body curves, wagging hips, and an easy pant with smooth breathing (watch Frenchies in heat).</li>
          </ul>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Petunia tip:</strong> Add a one-page “Dog Body Language” card to your Petunia profile. Houseguests and babysitters read it
            before interacting. Normalize backing off at the first sign of tension.
          </div>
        </section>

        {/* TRAINING & SOCIALIZATION */}
        <section id="training" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Training &amp; Socialization: Humane, Reward-Based—and Practical</h2>
          <p className="mb-3">
            Early socialization and positive reinforcement create resilient, flexible companions. Veterinary behavior
            organizations recommend <strong>reward-based methods</strong> (treats, toys, praise) because they reduce fear and improve learning,
            which directly supports safety with kids and other animals. Avoid punishment or “dominance” frameworks that increase
            anxiety and suppress warning signals.
          </p>
          <h3 className="text-lg font-semibold mt-2 mb-1">Core skills for family life</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>Patterned greetings:</strong> sit to say hi; reinforcement appears when all four paws are down.</li>
            <li><strong>“Go to mat”:</strong> send to a bed for meals, doorbells, and kid chaos; reward duration.</li>
            <li><strong>Hand target (“touch”):</strong> moves the dog gently without grabbing collar; kids can cue it from a safe distance.</li>
            <li><strong>Drop/leave it:</strong> swap for high-value treats; practice with toys before food.</li>
            <li><strong>Recall:</strong> short-distance “come” games indoors; layer distractions gradually.</li>
          </ul>
          <h3 className="text-lg font-semibold mt-2 mb-1">Socialization checklist (puppies &amp; adults)</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Exposure to <strong>calm kids</strong> at varied ages with treats from a distance; end before arousal spikes.</li>
            <li>Neutral dogs of different sizes and play styles (polite greeters, not body slammers).</li>
            <li>Environmental textures (rugs, ramps), sounds (doorbells, blenders), and handling (gentle ear/fold checks).</li>
            <li>Short car rides, crate time with chews, and “settle” in a café patio during cool weather.</li>
          </ul>
          <p>
            If your dog shows fear or aggression, consult your veterinarian and consider a referral to a <strong>veterinary behaviorist</strong>
            or a certified positive-reinforcement trainer.
          </p>
        </section>

        {/* NEW BABY & TODDLER INTRODUCTIONS */}
        <section id="introductions-baby" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">New Baby &amp; Toddler Introductions: A Phased Plan</h2>
          <p className="mb-3">
            Big life change? Make a plan that keeps everyone under threshold. The goal is <em>calm curiosity</em>, not close contact.
          </p>
          <ol className="list-decimal pl-5 space-y-2 mb-3">
            <li><strong>Before arrival:</strong> Install gates and a pen; teach “go to mat.” Play baby soundtracks at low volume, pairing with treats.</li>
            <li><strong>Homecoming:</strong> Greet your dog first to drain initial excitement; then dog relaxes on mat with chew while baby enters.</li>
            <li><strong>Weeks 1–2:</strong> Short, supervised sniffing at a <em>parent-chosen distance</em>. Reward the dog for disengaging on cue.</li>
            <li><strong>Ongoing:</strong> Dog never shares baby floor spaces. If baby fussing elevates arousal, dog takes a calm break in a cool room.</li>
          </ol>
          <p>
            For toddlers, narrate their choices (“Hands to yourself. We toss treats to the mat.”) and reinforce them for stepping away
            when the dog shows any stress signals.
          </p>
        </section>

        {/* OTHER DOGS */}
        <section id="dogs" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Other Dogs: Play Styles, Arousal &amp; Recovery</h2>
          <p className="mb-3">
            Frenchies often enjoy dog friends but do best with <strong>compatible play styles</strong>: sniff-and-stroll, short chase bursts,
            and play bows over body slams. Because brachycephalic dogs can overheat, keep sessions brief and add water/AC breaks.
          </p>
          <h3 className="text-lg font-semibold mt-2 mb-1">Dog–dog introduction steps</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>Parallel walk</strong> at a distance; reward check-ins and loose bodies.</li>
            <li>Gradually allow <strong>sniff–disengage</strong> cycles; avoid head-on approaches and tight leashes.</li>
            <li>Keep first play sessions to <strong>5 minutes</strong>; end on a high note and separate for a calm chew.</li>
          </ul>
          <p>
            Watch for imbalance (one dog always chasing/pinning). Advocate with breaks. If your Frenchie guards toys or people around
            dogs, run toy-free play and practice “go to mat” on arrival.
          </p>
        </section>

        {/* CATS & SMALL PETS */}
        <section id="cats" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Cats &amp; Small Pets: Peace via Gates and Escape Routes</h2>
          <p className="mb-3">
            Many Frenchies live peacefully with cats. The key is <strong>barrier-based introductions</strong>, predictable routines, and
            giving cats vertical escapes. For small prey animals (rabbits, rodents, birds, reptiles), plan <strong>absolute separation</strong>
            (closed doors and independent air/time), not casual coexistence.
          </p>
          <h3 className="text-lg font-semibold mt-2 mb-1">Dog–cat introduction plan</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Start with <strong>scent swaps</strong> (beds/blankets) and closed-door feeding on each side.</li>
            <li>Move to <strong>visual only</strong> behind a gate; reward calm looking and disengaging. Cat controls proximity.</li>
            <li>Graduate to <strong>leashed sessions</strong> in large rooms with escape routes and high perches.</li>
            <li>Transition to <strong>short, off-leash coexistence</strong> only when the dog can stay calm on cue.</li>
          </ul>
          <p>
            Maintain separate feeding stations and litter areas. Cats should never be cornered; dogs should never be allowed to
            practice chases indoors.
          </p>
        </section>

        {/* GUARDING */}
        <section id="guarding" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Resource Guarding Prevention (Food, Toys, Spaces)</h2>
          <p className="mb-3">
            Guarding is normal canine behavior that can be <em>prevented</em> or <em>reduced</em> with smart habits. Your goals: reduce
            conflict opportunities, teach swaps, and give the dog agency. Avoid prying items from mouths or punishing growls
            (which only hide warnings).
          </p>
          <h3 className="text-lg font-semibold mt-2 mb-1">House rules</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Safe feeding zones behind a gate; kids never approach food bowls or high-value chews.</li>
            <li>Teach <strong>“drop”</strong> as a fun trade; practice daily with toys before trying food items.</li>
            <li>Use <strong>management</strong> (pick up laundry, secure trash) so snatchable items aren’t rehearsed.</li>
          </ul>
          <p>
            If you already see stiffening, growling, or snapped air when approached, consult your veterinarian and a credentialed
            behavior professional for a tailored plan.
          </p>
        </section>

        {/* HOME SETUP */}
        <section id="home" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Home Setup &amp; Default Rules: Make Good Choices Automatic</h2>
          <p className="mb-3">
            Dogs and kids both thrive on predictable structure. Build a house where calm behaviors are the default and where the
            dog can always choose to be “off duty.”
          </p>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>Zones:</strong> baby gates, pen, and a mat in a cool, low-traffic room; crate optional if your dog enjoys it.</li>
            <li><strong>Rules on the fridge:</strong> no hugging, no leaning, no riding, no teasing; ask for a sit to pet.</li>
            <li><strong>Heat &amp; arousal plan:</strong> short play sets → water/AC → “go to mat”—especially for brachycephalic dogs.</li>
            <li><strong>Tidy habits:</strong> toys rotated, laundry off floors, cat litter behind a gate or in a closet with a cat door.</li>
          </ul>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Petunia workflow:</strong> Save the house rules, gate map, and daily rhythm in Petunia. Share with family, sitters,
            and visiting relatives so handoffs stay safe and calm.
          </div>
        </section>

        {/* DAYCARE/BOARDING */}
        <section id="daycare" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Daycare &amp; Boarding: Breed-Aware, Kid-Safe Adjacent</h2>
          <p className="mb-3">
            Great facilities support your home standards. For Frenchies, we want <strong>structured play → rest → cool-down</strong>, traction
            surfaces, ramp access, and staff trained to read body language. Ask how they separate dogs who prefer people
            time from high-octane playgroups and how they manage heat risk for brachycephalics.
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Provide your Petunia profile: heat rules, “go to mat,” toy rules, and any guarding notes.</li>
            <li>Confirm <strong>small-group or 1:1 options</strong> for dogs who prefer quieter social time.</li>
            <li>Request same-day reports for ear/eye redness, coughing/overheating, or scuffles.</li>
          </ul>
        </section>

        {/* TEMPLATES */}
        <section id="templates" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Checklists &amp; Templates</h2>

          <h3 className="text-lg font-semibold mt-2 mb-1">House Rules (Print This)</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>No hugging, leaning, or climbing on the dog. Hands off the face and ears.</li>
            <li>Ask for a <strong>sit</strong> before petting. If the dog walks away, we respect “no thanks.”</li>
            <li>Dog eats and chews behind a gate. Kids never enter those zones.</li>
            <li>Grown-ups manage doors and guest greetings. Dog goes to mat when the doorbell rings.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Daily Family Rhythm (Frenchie Edition)</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Dawn/dusk sniff walk 10–20 minutes → water/AC → nap.</li>
            <li>Two 2-minute training bursts (sit, touch, mat) before meals; meals measured.</li>
            <li>Afternoon enrichment: food puzzle, snuffle scatter, or calm find-the-toy game.</li>
            <li>Evening: short play set → fold wipe/ear glance → “go to mat” while kids wind down.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Dog–Dog Play Rules</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Start with parallel walks. First off-leash play lasts <strong>5 minutes</strong> with water ready.</li>
            <li>Enforce <strong>sniff–disengage</strong> cycles; interrupt repeated pinning or humping; swap to sniffing or a walk break.</li>
            <li>Stop early in heat and humidity. Frenchies recover best with AC cool-downs.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Dog–Cat Peace Plan</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Gate first; cat decides proximity; high perches in each shared room.</li>
            <li>Separate feeding; litter behind a barrier; reward the dog for <strong>looking away</strong> on cue.</li>
            <li>Short sessions; end with a calm chew or scatter on the dog’s mat.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">When to Call a Trainer/Veterinary Behaviorist</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Growling or freezing around children, food, or toys.</li>
            <li>Escalating dog–dog scuffles or persistent chasing of the cat.</li>
            <li>Signs of anxiety: pacing, panting at rest (rule out heat), destruction when alone.</li>
          </ul>

          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm mt-3">
            <strong>Petunia tip:</strong> Store these checklists and your trainer’s homework in Petunia. Add short videos of greetings and
            play so your team spots trends—not just single moments.
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">Frequently Asked Questions</h2>

          <p className="mb-3">
            <strong>Are French Bulldogs good with small children?</strong><br />
            Often yes—with active supervision and firm household rules. Build gates, teach “go to mat,” and reward kids for calm
            choices. No breed is guaranteed safe without management.
          </p>

          <p className="mb-3">
            <strong>Can Frenchies live with cats?</strong><br />
            Many do. Use a <strong>barrier-first</strong> plan (gates, scent swaps, leashed sessions) and maintain separate feeding and litter
            areas. Reward calm disengagement; don’t allow chase games indoors.
          </p>

          <p className="mb-3">
            <strong>What about other dogs?</strong><br />
            Match on play style and size. Keep sessions short with built-in breaks, especially in warm weather. Avoid toy conflicts at first.
          </p>

          <p className="mb-3">
            <strong>How do we prevent bites?</strong><br />
            Teach kids to give space, learn body language, and ask for a sit to pet. Adults manage food/chews, doorways, and greetings.
            Choose reward-based trainers who build calm habits rather than suppress signals.
          </p>

          <p>
            <strong>Do Frenchies protect toys or food?</strong><br />
            Any dog can. Prevent it with safe feeding zones, trade games, and management. If guarding appears, get professional help early.
          </p>
        </section>

        {/* SOURCES */}
        <section id="sources" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">📚 Sources (Selected)</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            <li>
              American Kennel Club (AKC). French Bulldog breed overview (temperament &amp; care).{' '}
              <a href="https://www.akc.org/dog-breeds/french-bulldog/" target="_blank" rel="noopener noreferrer">
                https://www.akc.org/dog-breeds/french-bulldog/
              </a>
            </li>
            <li>
              American Veterinary Society of Animal Behavior (AVSAB). Position statements on <em>Puppy Socialization</em>, <em>Humane Dog Training</em>, and <em>Dominance</em>.{' '}
              <a href="https://avsab.org/resources/position-statements/" target="_blank" rel="noopener noreferrer">
                https://avsab.org/resources/position-statements/
              </a>
            </li>
            <li>
              AVMA (American Veterinary Medical Association). <em>Dog Bite Prevention</em> resources (children &amp; families).{' '}
              <a href="https://www.avma.org/resources-tools/pet-owners/dog-bite-prevention" target="_blank" rel="noopener noreferrer">
                https://www.avma.org/resources-tools/pet-owners/dog-bite-prevention
              </a>
            </li>
            <li>
              RSPCA. <em>Dogs and Children: Safe Interactions</em> (UK guidance on supervision &amp; body language).{' '}
              <a href="https://www.rspca.org.uk/adviceandwelfare/pets/dogs/behaviour/children" target="_blank" rel="noopener noreferrer">
                https://www.rspca.org.uk/adviceandwelfare/pets/dogs/behaviour/children
              </a>
            </li>
            <li>
              ASPCA. <em>Introducing Your Cat to a New Dog</em> (stepwise, barrier-first cat–dog plan).{' '}
              <a href="https://www.aspca.org/pet-care/cat-care/common-cat-behavior-issues/introducing-your-cat-new-dog" target="_blank" rel="noopener noreferrer">
                https://www.aspca.org/pet-care/cat-care/common-cat-behavior-issues/introducing-your-cat-new-dog
              </a>
            </li>
            <li>
              International Cat Care. <em>Introducing Cats and Dogs</em> (environmental needs &amp; escape routes).{' '}
              <a href="https://icatcare.org/advice/introducing-cats-and-dogs/" target="_blank" rel="noopener noreferrer">
                https://icatcare.org/advice/introducing-cats-and-dogs/
              </a>
            </li>
            <li>
              Merck Veterinary Manual. <em>Aggression and Related Problems in Dogs</em>; <em>Normal Canine Behavior</em> (body language &amp; stress signals).{' '}
              <a href="https://www.merckvetmanual.com/behavior/behavior-of-dogs-and-cats/behavior-problems-in-dogs" target="_blank" rel="noopener noreferrer">
                https://www.merckvetmanual.com/behavior/behavior-of-dogs-and-cats/behavior-problems-in-dogs
              </a>{' '}
              |{' '}
              <a href="https://www.merckvetmanual.com/behavior/behavior-of-dogs-and-cats/normal-behavior-of-dogs" target="_blank" rel="noopener noreferrer">
                https://www.merckvetmanual.com/behavior/behavior-of-dogs-and-cats/normal-behavior-of-dogs
              </a>
            </li>
            <li>
              WSAVA. <em>Global Guidelines</em> (behavior, welfare, and home-environment considerations).{' '}
              <a href="https://wsava.org/global-guidelines/" target="_blank" rel="noopener noreferrer">
                https://wsava.org/global-guidelines/
              </a>
            </li>
            <li>
              Royal Veterinary College (RVC) VetCompass. <em>French Bulldog breed health summaries</em> (context for breed management).{' '}
              <a href="https://www.rvc.ac.uk/vetcompass" target="_blank" rel="noopener noreferrer">
                https://www.rvc.ac.uk/vetcompass
              </a>
            </li>
          </ul>
          <p className="text-xs text-gray-600 mt-4">
            Educational content only. Always consult your veterinarian or a board-certified veterinary behaviorist for individualized
            behavior and safety guidance for your dog and family.
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
