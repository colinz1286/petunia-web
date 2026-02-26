'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function NoiseBarkingLoopsAndKennelReactivityHowEnvironmentShapesBehavior() {
  const locale = useLocale();

  const title =
    'Noise, Barking Loops, and Kennel Reactivity: How Environment Shapes Behavior';
  const date = 'December 22, 2025';
  const categories = ['owner', 'boarding', 'daycare'] as const;

  const categoryLabels: Record<string, string> = {
    owner: 'Pet Owners',
    boarding: 'Boarding',
    daycare: 'Daycare',
    food: 'Dog Food & Nutrition',
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
          {categories.map((keyName) => (
            <span
              key={keyName}
              className="text-xs bg-[#e4dbcb] text-[#2c4a30] px-3 py-1 rounded-full border border-[#d9cfc2]"
            >
              {categoryLabels[keyName] ?? keyName}
            </span>
          ))}
        </div>

        {/* Table of Contents */}
        <nav className="mb-8 text-sm">
          <ul className="flex flex-wrap gap-3">
            <li>
              <a href="#tldr" className="underline hover:opacity-80">
                TL;DR
              </a>
            </li>
            <li>
              <a href="#what-barking-loops-are" className="underline hover:opacity-80">
                What Barking Loops Are
              </a>
            </li>
            <li>
              <a href="#why-kennels-amplify-noise" className="underline hover:opacity-80">
                Why Kennels Amplify Noise
              </a>
            </li>
            <li>
              <a href="#how-environment-shapes-behavior" className="underline hover:opacity-80">
                How Environment Shapes Behavior
              </a>
            </li>
            <li>
              <a href="#reactivity-vs-normal-barking" className="underline hover:opacity-80">
                Reactivity vs Normal Barking
              </a>
            </li>
            <li>
              <a href="#primary-triggers" className="underline hover:opacity-80">
                Primary Triggers
              </a>
            </li>
            <li>
              <a href="#noise-control-infrastructure" className="underline hover:opacity-80">
                Noise Control Infrastructure
              </a>
            </li>
            <li>
              <a href="#operational-protocols" className="underline hover:opacity-80">
                Operational Protocols
              </a>
            </li>
            <li>
              <a href="#training-interventions" className="underline hover:opacity-80">
                Training Interventions
              </a>
            </li>
            <li>
              <a href="#owner-home-impact" className="underline hover:opacity-80">
                What Owners See at Home
              </a>
            </li>
            <li>
              <a href="#measurement" className="underline hover:opacity-80">
                Measurement
              </a>
            </li>
            <li>
              <a href="#faq" className="underline hover:opacity-80">
                FAQ
              </a>
            </li>
            <li>
              <a href="#sources" className="underline hover:opacity-80">
                📚 Sources
              </a>
            </li>
          </ul>
        </nav>

        {/* TL;DR */}
        <section id="tldr" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Short Answer (TL;DR)</h2>
          <p className="mb-4">
            In boarding and daycare settings, barking often becomes a self-reinforcing loop: noise triggers arousal, arousal triggers more
            barking, and more barking raises the noise floor again. Environment shapes behavior because dogs react to unpredictability,
            barrier frustration, sudden movement in hallways, and repeated exposure to triggers without a clear resolution. The fastest
            way to reduce reactivity is to protect quiet blocks, reduce surprise triggers, build predictable routines, and pair operations
            with simple counterconditioning protocols.
          </p>

          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Most practical takeaway:</strong> If you reduce “surprise” (random hallway movement, sudden loud handling, chaotic transitions)
            and protect recovery time, barking often drops without any single miracle product.
          </div>
        </section>

        {/* WHAT BARKING LOOPS ARE */}
        <section id="what-barking-loops-are" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">What Barking Loops Are (and Why They Feel So Hard to Stop)</h2>
          <p className="mb-4">
            A barking loop is a cycle where one dog&rsquo;s barking increases arousal in nearby dogs, causing more barking, which increases arousal
            again. In enclosed spaces, sound reflects and carries, so a single trigger can ripple down an entire wing. Once the loop is active,
            dogs who were previously quiet may join in, and dogs who were already on edge can tip into sustained reactivity.
          </p>

          <h3 className="text-lg font-semibold mb-2">A simple chain reaction</h3>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>
              <strong>Trigger:</strong> a door slam, a cart, a dog passing by, a staff member entering.
            </li>
            <li>
              <strong>Startle + arousal:</strong> dogs orient, vocalize, pace, or jump.
            </li>
            <li>
              <strong>Social contagion:</strong> other dogs bark in response to the noise.
            </li>
            <li>
              <strong>Escalation:</strong> the noise floor rises and calming becomes harder.
            </li>
            <li>
              <strong>Delayed recovery:</strong> it can take minutes to hours for some dogs to settle.
            </li>
          </ul>

          <p className="mb-4">
            The goal is not to eliminate all barking. Barking is normal communication. The goal is to prevent sustained loops that push dogs
            into prolonged arousal and reduce the quality of rest.
          </p>
        </section>

        {/* WHY KENNELS AMPLIFY NOISE */}
        <section id="why-kennels-amplify-noise" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Why Kennels Amplify Noise</h2>
          <p className="mb-4">
            Many facilities use hard, cleanable surfaces. Those surfaces are often practical for sanitation but can reflect sound and make
            barking feel louder and more continuous. On top of that, daily husbandry events (cleaning, feeding, traffic patterns) can introduce
            predictable spikes. When spikes are frequent or unpredictable, sensitive dogs can stay “on alert” rather than truly resting.
          </p>

          <p className="mb-4">
            This is why environmental management matters as much as training. If the baseline sound level stays high, it becomes harder for dogs
            to downshift, and it becomes harder for staff to reinforce calm because dogs have fewer quiet moments to practice calm.
          </p>

          <div className="rounded-lg border border-[#d9cfc2] p-4 bg-[#f6efe4] mb-4">
            <h3 className="text-lg font-semibold mb-2">Environment does two things at once</h3>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>
                It changes the <strong>sound level</strong> dogs must tolerate.
              </li>
              <li>
                It changes the <strong>predictability</strong> of events (what happens, when it happens, and how often).
              </li>
            </ul>
          </div>

          <p className="mb-4">
            If you want the big-picture framework that connects sound, scent, routine, and choice into one calm system, start here:{' '}
            <Link
              href={`/${locale}/blog/reducing-boarding-stress-sound-scent-routine-choice`}
              className="underline font-medium hover:opacity-80"
            >
              Reducing Boarding Stress: Sound, Scent, Routine, and Choice
            </Link>
            .
          </p>
        </section>

        {/* HOW ENVIRONMENT SHAPES BEHAVIOR */}
        <section id="how-environment-shapes-behavior" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">How Environment Shapes Behavior in Kennel Dogs</h2>
          <p className="mb-4">
            Dogs respond to the meaning of events, not just the decibel level. A single loud noise might be tolerable if it happens rarely and
            has a predictable follow-up. Repeated noise, unpredictable traffic, and barriers can create frustration or fear. Over time, dogs may
            learn that barking “does something” in the environment: it gets attention, it increases distance, it stops a scary approach, or it
            releases tension.
          </p>

          <h3 className="text-lg font-semibold mb-2">Three mechanisms that matter</h3>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>
              <strong>Predictability:</strong> consistent schedules reduce uncertainty and help recovery.
            </li>
            <li>
              <strong>Control:</strong> having safe choices (move away, engage with enrichment) reduces helplessness.
            </li>
            <li>
              <strong>Reinforcement:</strong> if barking changes outcomes, barking is likely to repeat.
            </li>
          </ul>

          <p className="mb-4">
            This is one reason routine is not “nice to have.” It is a behavior tool. If you want a deep routine blueprint that explains why
            predictability beats random extra attention, see:{' '}
            <Link
              href={`/${locale}/blog/predictability-beats-extra-attention-why-consistent-routines-calm-nervous-boarders`}
              className="underline font-medium hover:opacity-80"
            >
              Predictability Beats “Extra Attention”
            </Link>
            .
          </p>
        </section>

        {/* REACTIVITY VS NORMAL */}
        <section id="reactivity-vs-normal-barking" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Reactivity vs Normal Barking: What Teams Should Differentiate</h2>
          <p className="mb-4">
            Dogs bark for many normal reasons: greeting, play solicitation, alerting, and frustration. Kennel reactivity is different. It looks
            like a dog that cannot recover. The dog escalates quickly, stays elevated, and struggles to return to rest even after the trigger passes.
          </p>

          <h3 className="text-lg font-semibold mb-2">Signs a dog is stuck in a loop</h3>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>
              Sustained barking for long periods without pauses
            </li>
            <li>
              Pacing, spinning, jumping, or barrier slamming paired with barking
            </li>
            <li>
              Startle responses to routine hallway movement
            </li>
            <li>
              Reduced engagement with food or enrichment during high noise
            </li>
            <li>
              Delayed recovery even after the environment quiets
            </li>
          </ul>

          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Operational note:</strong> A dog who cannot recover needs a plan that reduces triggers and increases protected quiet blocks.
            Adding more stimulation usually makes the loop worse.
          </div>
        </section>

        {/* PRIMARY TRIGGERS */}
        <section id="primary-triggers" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Primary Triggers That Start Barking Waves</h2>
          <p className="mb-4">
            In most facilities, barking waves come from a short list of predictable triggers. The most effective teams do not argue about which
            trigger “should not matter.” They identify triggers and design the environment and schedule to reduce the surprise factor.
          </p>

          <h3 className="text-lg font-semibold mb-2">The usual top triggers</h3>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>
              <strong>Hallway traffic:</strong> dogs walking past kennels, carts, deliveries, staff clustering near a row.
            </li>
            <li>
              <strong>Door and latch sounds:</strong> repetitive metal-on-metal sounds can become conditioned cues for arousal.
            </li>
            <li>
              <strong>Cleaning bursts:</strong> hoses, loud sprayers, vacuums, sudden echoes.
            </li>
            <li>
              <strong>Excitement cues:</strong> meal prep noise, leash jingles, group release.
            </li>
            <li>
              <strong>Barrier frustration:</strong> dogs seeing other dogs move while they cannot access.
            </li>
          </ul>

          <p className="mb-4">
            Some facilities also find that scent-based enrichment (run calmly, supervised) can reduce idle arousal by giving dogs a safe activity
            during quiet blocks. If you want the safest practical approach, see:{' '}
            <Link
              href={`/${locale}/blog/scent-enrichment-for-dogs-research-safe`}
              className="underline font-medium hover:opacity-80"
            >
              Scent Enrichment for Dogs: What Research Looks At (and How to Do It Safely)
            </Link>
            .
          </p>
        </section>

        {/* INFRASTRUCTURE */}
        <section id="noise-control-infrastructure" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Noise Control Infrastructure: What Helps and What Usually Does Not</h2>
          <p className="mb-4">
            You cannot “train away” an environment that keeps dogs constantly activated. Infrastructure changes do not need to be expensive, but they
            should focus on three levers: reduce reflections, reduce sudden spikes, and reduce visibility triggers.
          </p>

          <h3 className="text-lg font-semibold mb-2">Infrastructure levers (practical examples)</h3>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>
              <strong>Reduce reflections:</strong> acoustic panels in safe locations, sound-absorbing ceiling materials, rubberized flooring where
              sanitation allows.
            </li>
            <li>
              <strong>Reduce spikes:</strong> fix squeaky doors, adjust latch systems, reduce cart clatter, add soft-close features where possible.
            </li>
            <li>
              <strong>Reduce visual triggers:</strong> partial barriers, strategic kennel placement, calm traffic patterns.
            </li>
          </ul>

          <p className="mb-4">
            Some teams consider “soundproof” cages or isolated units. These can introduce tradeoffs: reduced noise exposure may be beneficial for some
            dogs, but any isolation strategy should be evaluated for welfare and stress response and used thoughtfully. A balanced approach usually starts
            with facility-wide noise reduction and predictable operations, not maximum isolation.
          </p>
        </section>

        {/* OPERATIONAL PROTOCOLS */}
        <section id="operational-protocols" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Operational Protocols That Reduce Barking Without Fancy Equipment</h2>
          <p className="mb-4">
            Operations is the fastest lever because you can change it today. The goal is to reduce unpredictability and reduce the frequency of triggers
            during protected rest windows.
          </p>

          <h3 className="text-lg font-semibold mb-2">Protocols that reliably lower noise</h3>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>
              <strong>Protected quiet blocks:</strong> schedule non-urgent tasks away from rest windows, reduce hallway traffic, lower staff voices.
            </li>
            <li>
              <strong>Stagger transitions:</strong> avoid releasing multiple high-arousal dogs at once.
            </li>
            <li>
              <strong>Predictable patterns:</strong> consistent walk routes, consistent feeding windows, consistent handling scripts.
            </li>
            <li>
              <strong>Trigger maps:</strong> document which rows react to which events and adjust traffic accordingly.
            </li>
            <li>
              <strong>Calm entry routine:</strong> when a staff member enters a wing, move slowly and avoid immediately stopping at the loudest kennel.
            </li>
          </ul>

          <p className="mb-4">
            Sound enrichment can support these quiet blocks when used conservatively. If you are exploring music, we break down what studies suggest and how
            habituation changes effectiveness over time here:{' '}
            <Link
              href={`/${locale}/blog/music-for-kennelled-dogs-studies-habituation`}
              className="underline font-medium hover:opacity-80"
            >
              Music for Kennelled Dogs: What Studies Suggest
            </Link>
            .
          </p>
        </section>

        {/* TRAINING INTERVENTIONS */}
        <section id="training-interventions" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Training Interventions: How to Break the Loop Without Reinforcing Barking</h2>
          <p className="mb-4">
            Training in kennels has one major constraint: you must avoid rewarding barking while still teaching dogs that calm behavior pays. The cleanest
            approach is to reinforce calm moments and to pair predictable staff entry with good outcomes so the dog stops treating entry as a threat or an
            excitement explosion.
          </p>

          <h3 className="text-lg font-semibold mb-2">A practical counterconditioning outline</h3>
          <ol className="list-decimal pl-6 space-y-1 mb-4">
            <li>
              <strong>Find the smallest calm moment:</strong> one second of quiet, a pause in pacing, a head turn away from the door.
            </li>
            <li>
              <strong>Mark and reinforce:</strong> deliver a small reward for calm, not for barking.
            </li>
            <li>
              <strong>Keep sessions short:</strong> multiple micro-sessions beat one long one.
            </li>
            <li>
              <strong>Lower the intensity:</strong> if the dog cannot calm, increase distance, reduce traffic, or change timing.
            </li>
            <li>
              <strong>Generalize:</strong> repeat with different staff members and predictable scripts.
            </li>
          </ol>

          <p className="mb-4">
            These interventions work best when the entire day is built around predictability and protected rest rather than constant stimulation. If you
            are also seeing a dog come home tired, clingy, or “off,” that often reflects how much recovery time they needed after sustained arousal. We break
            down decompression and what owners can do at home here:{' '}
            <Link
              href={`/${locale}/blog/decompression-after-boarding-why-dogs-seem-tired-clingy-or-off-at-home`}
              className="underline font-medium hover:opacity-80"
            >
              Decompression After Boarding: Why Dogs Seem Tired, Clingy, or Off
            </Link>
            .
          </p>
        </section>

        {/* OWNER HOME IMPACT */}
        <section id="owner-home-impact" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">What Owners Notice: Why Noise and Barking Loops Can Echo at Home</h2>
          <p className="mb-4">
            Dogs do not always “leave the experience at the door.” After a loud, stimulating stay, some dogs return home and look exhausted, more sensitive,
            or unusually attached. This is often recovery, not regression. Owners can support recovery by keeping the first couple days calm, maintaining a
            stable routine, and avoiding high-arousal activities immediately after pickup.
          </p>

          <h3 className="text-lg font-semibold mb-2">Home decompression helps most when it is predictable</h3>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>
              Short sniff walks instead of long intense outings
            </li>
            <li>
              Calm meals and normal feeding schedule
            </li>
            <li>
              Quiet time and extra sleep, without guilt
            </li>
            <li>
              Gentle connection without constant excitement
            </li>
          </ul>

          <p className="mb-4">
            In other words: the same principle applies at home. Predictability and recovery time calm dogs faster than stimulation.
          </p>
        </section>

        {/* MEASUREMENT */}
        <section id="measurement" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">Measurement: How to Know You Are Fixing the Problem</h2>
          <p className="mb-4">
            If you cannot measure, you cannot improve. Noise feels subjective, but you can track meaningful operational indicators without special equipment.
            Choose a small set of metrics and record them the same way for two weeks.
          </p>

          <h3 className="text-lg font-semibold mb-2">Simple metrics that predict progress</h3>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>
              <strong>Barking waves per hour:</strong> count sustained barking bursts in a wing during a consistent time block.
            </li>
            <li>
              <strong>Time-to-settle:</strong> how long it takes dogs to lie down after transitions.
            </li>
            <li>
              <strong>Trigger frequency:</strong> how often carts, cleaning, or traffic occur during rest windows.
            </li>
            <li>
              <strong>Staff compliance:</strong> how often scripts and staggered transitions are followed.
            </li>
            <li>
              <strong>Owner feedback:</strong> reports of “wired” versus “calm” after pickup.
            </li>
          </ul>

          <p className="mb-4">
            We are building a plug-and-play tracking approach with a simple settle score and notes system here:{' '}
            <Link
              href={`/${locale}/blog/tracking-welfare-settle-score-notes-system`}
              className="underline font-medium hover:opacity-80"
            >
              Tracking Welfare Without Fancy Tools
            </Link>
            .
          </p>

          <p className="mb-4">
            <strong>One to two paragraph conclusion:</strong> Barking loops are rarely a “bad dog” problem. They are usually an environment and systems problem.
            When you reduce surprise triggers, protect quiet blocks, and build predictable routines, many dogs settle dramatically faster. Training helps most when
            it is layered on top of a calmer environment, not used as a substitute for it. The best facilities treat sound and predictability as core welfare tools,
            because calmer dogs rest more, recover faster, and leave the building in a better emotional state.
          </p>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">Frequently Asked Questions</h2>

          <p className="mb-3">
            <strong>Is barking always a stress sign?</strong>
            <br />
            No. Barking can be normal communication. The concern is sustained barking with poor recovery, pacing, barrier slamming, and constant arousal.
          </p>

          <p className="mb-3">
            <strong>What is the fastest way to reduce barking in a wing?</strong>
            <br />
            Protect a quiet block, reduce hallway traffic, stagger transitions, and fix the noisiest mechanical triggers (doors, carts, latches). Then add short,
            structured reinforcement for calm moments.
          </p>

          <p className="mb-3">
            <strong>Does music solve barking loops?</strong>
            <br />
            Music can support quiet blocks for some dogs, but it works best as part of a broader plan: predictable routine, reduced triggers, and consistent handling.
          </p>

          <p>
            <strong>Why does one dog set off the whole row?</strong>
            <br />
            Sound spreads quickly and barking can be socially contagious. Reducing baseline noise and protecting recovery time helps break the chain reaction.
          </p>
        </section>

        {/* SOURCES */}
        <section id="sources" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">📚 Sources &amp; Research References (Selected)</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            <li>
              Zurlinden et al. (2022): Quiet Kennel Exercise (classical counterconditioning) pilot study (open access):{' '}
              <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC8772564/" target="_blank" rel="noopener noreferrer">
                https://pmc.ncbi.nlm.nih.gov/articles/PMC8772564/
              </a>
            </li>
            <li>
              Zurlinden et al. (2022) PubMed record: Quiet Kennel Exercise summary:{' '}
              <a href="https://pubmed.ncbi.nlm.nih.gov/35049794/" target="_blank" rel="noopener noreferrer">
                https://pubmed.ncbi.nlm.nih.gov/35049794/
              </a>
            </li>
            <li>
              Purdue Extension: Auditory stress implications for kennelled dog welfare:{' '}
              <a href="https://extension.purdue.edu/extmedia/va/va-18-w.pdf" target="_blank" rel="noopener noreferrer">
                https://extension.purdue.edu/extmedia/va/va-18-w.pdf
              </a>
            </li>
            <li>
              Polgár et al. (2019): Review on welfare assessment in kennelled dogs (open access):{' '}
              <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC7126575/" target="_blank" rel="noopener noreferrer">
                https://pmc.ncbi.nlm.nih.gov/articles/PMC7126575/
              </a>
            </li>
            <li>
              Grandin resource: Noise in animal shelter environments and design considerations:{' '}
              <a href="https://www.grandin.com/references/noise.in.animal.shelter.html" target="_blank" rel="noopener noreferrer">
                https://www.grandin.com/references/noise.in.animal.shelter.html
              </a>
            </li>
            <li>
              Kinnaird et al. (2022): Auditory stimulation and dog reactions (journal page):{' '}
              <a href="https://www.sciencedirect.com/science/article/pii/S0168159122001460" target="_blank" rel="noopener noreferrer">
                https://www.sciencedirect.com/science/article/pii/S0168159122001460
              </a>
            </li>
            <li>
              Sales et al. (1997): Noise in dog kennelling welfare paper (abstract page):{' '}
              <a href="https://www.sciencedirect.com/science/article/abs/pii/S016815919601132X" target="_blank" rel="noopener noreferrer">
                https://www.sciencedirect.com/science/article/abs/pii/S016815919601132X
              </a>
            </li>
            <li>
              Canine Welfare Science Center (Purdue) summary: Quiet Kennel Exercise resource page:{' '}
              <a
                href="https://caninewelfare.centers.purdue.edu/resource/impact-of-classical-counterconditioning-quiet-kennel-exercise-on-barking-in-kenneled-dogs-a-pilot-study/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://caninewelfare.centers.purdue.edu/resource/impact-of-classical-counterconditioning-quiet-kennel-exercise-on-barking-in-kenneled-dogs-a-pilot-study/
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
