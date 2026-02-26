'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function EnrichmentMenusRotateLickChewSniffWithoutOverstimulatingDogs() {
  const locale = useLocale();

  const title =
    'Enrichment Menus: Rotating Lick/Chew/Sniff Activities Without Overstimulating Dogs';
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
              <a href="#why-menus-work" className="underline hover:opacity-80">
                Why Menus Work
              </a>
            </li>
            <li>
              <a href="#three-calming-lanes" className="underline hover:opacity-80">
                Lick, Chew, Sniff
              </a>
            </li>
            <li>
              <a href="#rotation-rules" className="underline hover:opacity-80">
                Rotation Rules
              </a>
            </li>
            <li>
              <a href="#lick-menu" className="underline hover:opacity-80">
                Lick Menu
              </a>
            </li>
            <li>
              <a href="#chew-menu" className="underline hover:opacity-80">
                Chew Menu
              </a>
            </li>
            <li>
              <a href="#sniff-menu" className="underline hover:opacity-80">
                Sniff Menu
              </a>
            </li>
            <li>
              <a href="#match-to-dog" className="underline hover:opacity-80">
                Match to the Dog
              </a>
            </li>
            <li>
              <a href="#avoid-overstimulation" className="underline hover:opacity-80">
                Avoid Overstimulation
              </a>
            </li>
            <li>
              <a href="#facility-protocol" className="underline hover:opacity-80">
                Facility Protocol
              </a>
            </li>
            <li>
              <a href="#tracking" className="underline hover:opacity-80">
                Tracking
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
            Enrichment works best when it is predictable, brief, and matched to the dog. A simple menu that rotates
            lick, chew, and sniff activities can reduce boredom and support calmer behavior in boarding and daycare.
            The mistake is piling on high-intensity options. Keep sessions short, choose low-risk items, and protect
            quiet blocks so dogs can recover.
          </p>

          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Quick starter plan:</strong> Run one calm activity per dog per quiet block (5–10 minutes), rotate
            categories across the day, and stop the session while the dog is still calm.
          </div>
        </section>

        {/* WHY MENUS WORK */}
        <section id="why-menus-work" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Why Enrichment Menus Work Better Than Random Activities</h2>
          <p className="mb-4">
            Dogs in kennels often face a predictable set of challenges: noise, novelty, reduced sleep quality, and
            barrier frustration. When enrichment is delivered randomly, it can accidentally increase arousal rather
            than reduce it. A menu helps because it builds a repeatable pattern: the dog learns that calm activities
            happen during calm windows, and that rest is protected afterward.
          </p>

          <p className="mb-4">
            Welfare-focused enrichment is widely described as an approach that changes the environment to support
            behavioral and physical wellness, including reducing abnormal behaviors and supporting coping.
            Practical guidance for shelters commonly emphasizes food puzzles, foraging, and other structured options
            that fit daily husbandry, rather than constant stimulation.
          </p>

          <p className="mb-4">
            If you want the full system view (sound + scent + routine + choice), start with:{' '}
            <Link
              href={`/${locale}/blog/reducing-boarding-stress-sound-scent-routine-choice`}
              className="underline font-medium hover:opacity-80"
            >
              Reducing Boarding Stress: Sound, Scent, Routine, and Choice
            </Link>
            .
          </p>
        </section>

        {/* THREE CALMING LANES */}
        <section id="three-calming-lanes" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">The Three Calming Lanes: Lick, Chew, and Sniff</h2>
          <p className="mb-4">
            Most practical enrichment for boarding and daycare falls into three low-arousal lanes. These activities
            tend to keep the dog&rsquo;s focus downward and repetitive, which can help many dogs settle during quiet blocks.
            The key is to choose options that are safe, supervised appropriately, and not so exciting that they trigger
            frantic behavior.
          </p>

          <h3 className="text-lg font-semibold mb-2">What each lane is best for</h3>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>
              <strong>Lick:</strong> best for downshifting and gentle calming during rest windows (short sessions).
            </li>
            <li>
              <strong>Chew:</strong> best for occupying and self-soothing when a dog is mildly restless (safety first).
            </li>
            <li>
              <strong>Sniff:</strong> best for decompression and calm engagement without needing high physical intensity.
            </li>
          </ul>

          <p className="mb-4">
            Sensory enrichment research in shelter settings has explored calm inputs like music, dog-appeasing pheromone,
            and scent conditions and reported differences in resting-related behavior compared with control conditions.
            In real facilities, the safest “sensory” approach is often food-based sniffing and structured calm routines.
          </p>
        </section>

        {/* ROTATION RULES */}
        <section id="rotation-rules" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Rotation Rules That Prevent Overstimulation</h2>
          <p className="mb-4">
            A menu is only calming if it is delivered with rules. Without rules, enrichment becomes “more stuff,” and
            “more stuff” can become more arousal. Use a simple rotation framework that respects recovery time.
          </p>

          <h3 className="text-lg font-semibold mb-2">The core rules</h3>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>
              <strong>One lane per block:</strong> choose lick <em>or</em> chew <em>or</em> sniff, not all three at once.
            </li>
            <li>
              <strong>Short sessions:</strong> end while the dog is calm (often 5–10 minutes for sniff and lick).
            </li>
            <li>
              <strong>Protect quiet blocks:</strong> enrichment should lead into rest, not into another high-intensity event.
            </li>
            <li>
              <strong>Rotate to prevent fixation:</strong> do not repeat the same item all day for the same dog.
            </li>
            <li>
              <strong>Start conservative:</strong> increase complexity only if the dog stays calm and recovers quickly.
            </li>
          </ul>

          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Operational reality:</strong> A perfect enrichment plan fails if the environment is loud and chaotic.
            If your wing is stuck in barking waves, address noise and traffic patterns first.
          </div>

          <p className="mb-4">
            For the environment side (noise, barking loops, and how the kennel shape drives behavior), see:{' '}
            <Link
              href={`/${locale}/blog/noise-barking-loops-and-kennel-reactivity-how-environment-shapes-behavior`}
              className="underline font-medium hover:opacity-80"
            >
              Noise, Barking Loops, and Kennel Reactivity
            </Link>
            .
          </p>
        </section>

        {/* LICK MENU */}
        <section id="lick-menu" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Lick Menu: Calm, Short, and Easy to Supervise</h2>
          <p className="mb-4">
            Licking is commonly used as a calming enrichment lane because it is repetitive and often slower than
            high-energy play. The goal is gentle downshifting, not frantic licking or guarding.
          </p>

          <h3 className="text-lg font-semibold mb-2">Low-risk lick options</h3>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>
              <strong>Frozen lick mat:</strong> thin layer of dog-safe wet food or yogurt alternative if appropriate.
            </li>
            <li>
              <strong>Stuffed feeder:</strong> frozen food in a rubber feeder designed for licking (supervised).
            </li>
            <li>
              <strong>Slow smear on a safe surface:</strong> controlled portion, short session, remove promptly.
            </li>
          </ul>

          <h3 className="text-lg font-semibold mb-2">Lick lane safety notes</h3>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>
              Avoid lick options for dogs who resource guard intensely unless you have a safe protocol.
            </li>
            <li>
              Avoid rich foods that can trigger GI upset, especially right after arrival.
            </li>
            <li>
              Supervise to prevent chewing and ingestion of mats.
            </li>
          </ul>
        </section>

        {/* CHEW MENU */}
        <section id="chew-menu" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Chew Menu: Occupy and Self-Soothe Without Creating Chaos</h2>
          <p className="mb-4">
            Chewing can be helpful, but it is also the lane where safety varies the most. Choose options that match the
            dog&rsquo;s chew style and your facility&rsquo;s risk tolerance. If in doubt, choose a lower-risk alternative.
          </p>

          <h3 className="text-lg font-semibold mb-2">Chew options by risk level</h3>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>
              <strong>Lower risk:</strong> rubber chew feeders, durable supervised chew items designed for dogs.
            </li>
            <li>
              <strong>Moderate risk:</strong> edible chews matched to size and chew intensity (strict supervision).
            </li>
            <li>
              <strong>Higher risk:</strong> brittle chews or items that splinter (avoid in most boarding settings).
            </li>
          </ul>

          <h3 className="text-lg font-semibold mb-2">Chew lane safety rules that prevent emergencies</h3>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>
              Supervise and remove small fragments promptly.
            </li>
            <li>
              Use dog-specific sizing guidelines and match to chew intensity.
            </li>
            <li>
              Skip chews for dogs with a history of swallowing large pieces.
            </li>
            <li>
              Avoid chews for dogs who are already escalated; use sniff or calm lick instead.
            </li>
          </ul>
        </section>

        {/* SNIFF MENU */}
        <section id="sniff-menu" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Sniff Menu: The Best Lane for Decompression and Calm Engagement</h2>
          <p className="mb-4">
            Sniff-based enrichment is often the easiest lane to run safely at scale. It helps dogs engage in a natural,
            species-typical behavior without requiring high physical intensity. Shelter-focused enrichment guidance commonly
            includes searching and food-based foraging as accessible options.
          </p>

          <h3 className="text-lg font-semibold mb-2">Low-risk sniff options for boarding and daycare</h3>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>
              <strong>Scatter feeding:</strong> controlled kibble scatter in a clean run for non-guarding dogs.
            </li>
            <li>
              <strong>Snuffle mat meals:</strong> portioned meal served in a snuffle mat under supervision.
            </li>
            <li>
              <strong>Towel roll search:</strong> kibble rolled in a towel, supervised, remove loose threads.
            </li>
            <li>
              <strong>Find-it cups:</strong> treat under one cup, dog chooses, short rounds, low intensity.
            </li>
            <li>
              <strong>Sniff walk:</strong> short decompression walk with permission to sniff, not a strict training drill.
            </li>
          </ul>

          <p className="mb-4">
            For a deep, safety-first guide to scent enrichment in kennels (including what research looks at and what to avoid),
            see:{' '}
            <Link
              href={`/${locale}/blog/scent-enrichment-for-dogs-research-safe`}
              className="underline font-medium hover:opacity-80"
            >
              Scent Enrichment for Dogs: What Research Looks At (and How to Do It Safely)
            </Link>
            .
          </p>
        </section>

        {/* MATCH TO THE DOG */}
        <section id="match-to-dog" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Match the Menu to the Dog: Choose the Lane That Fits the Nervous System</h2>
          <p className="mb-4">
            The same enrichment can calm one dog and overstimulate another. Matching is the whole game. Use the dog&rsquo;s
            arousal level, history, and recovery speed to pick a lane.
          </p>

          <h3 className="text-lg font-semibold mb-2">A quick matching guide</h3>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>
              <strong>Dog is wired and scanning:</strong> start with sniff, then quiet rest.
            </li>
            <li>
              <strong>Dog is mildly restless but not frantic:</strong> chew can work if safe for that dog.
            </li>
            <li>
              <strong>Dog is tired but cannot settle:</strong> short lick session can bridge into sleep.
            </li>
            <li>
              <strong>Dog is guarding resources:</strong> avoid high-value food lanes near other dogs.
            </li>
            <li>
              <strong>Dog has GI sensitivity:</strong> keep foods consistent and portions small.
            </li>
          </ul>

          <p className="mb-4">
            Predictability matters as much as the item itself. A consistent routine usually calms nervous boarders faster than
            random “extra attention.” If you want that routine blueprint, see:{' '}
            <Link
              href={`/${locale}/blog/predictability-beats-extra-attention-why-consistent-routines-calm-nervous-boarders`}
              className="underline font-medium hover:opacity-80"
            >
              Predictability Beats “Extra Attention”
            </Link>
            .
          </p>
        </section>

        {/* AVOID OVERSTIMULATION */}
        <section id="avoid-overstimulation" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">How to Avoid Overstimulation: The Warning Signs and Fixes</h2>
          <p className="mb-4">
            Overstimulation usually looks like escalation: frantic digging, intense vocalizing, inability to disengage,
            barrier slamming, or difficulty settling after the activity ends. When you see these signs, the solution is
            not to “add more.” The solution is to lower intensity and increase recovery time.
          </p>

          <h3 className="text-lg font-semibold mb-2">Overstimulation signs during enrichment</h3>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>
              Frenzied behavior (scratching, shredding, frantic looping) rather than steady engagement
            </li>
            <li>
              Guarding, hard staring, stiff posture around food items
            </li>
            <li>
              Barking increases during the activity
            </li>
            <li>
              The dog cannot settle afterward and remains activated
            </li>
          </ul>

          <h3 className="text-lg font-semibold mb-2">Immediate fixes that work</h3>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>
              Shorten sessions and end sooner.
            </li>
            <li>
              Switch to a calmer lane (often sniff) and then protect rest.
            </li>
            <li>
              Reduce environmental triggers during and after the activity.
            </li>
            <li>
              Use a simpler version of the same activity (less challenging, less exciting).
            </li>
          </ul>

          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Core principle:</strong> Enrichment should make it easier for the dog to rest afterward. If it makes rest harder,
            it needs to be modified.
          </div>
        </section>

        {/* FACILITY PROTOCOL */}
        <section id="facility-protocol" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">A Facility Protocol Staff Can Run: Menus, Not Guessing</h2>
          <p className="mb-4">
            The best enrichment program is simple enough to run on a busy day. Start with a menu board (three lanes),
            a small approved item list, and a basic rule set. Shelter enrichment resources often encourage implementing
            enrichment in a consistent, practical way that fits daily care routines.
          </p>

          <h3 className="text-lg font-semibold mb-2">A practical menu protocol</h3>
          <ol className="list-decimal pl-6 space-y-1 mb-4">
            <li>
              <strong>Assign the lane:</strong> each dog gets a primary lane for the day (lick, chew, or sniff).
            </li>
            <li>
              <strong>Choose the item:</strong> pick from a small approved list with clear supervision requirements.
            </li>
            <li>
              <strong>Time the session:</strong> 5–10 minutes for most sniff and lick sessions.
            </li>
            <li>
              <strong>End calm:</strong> remove the item while the dog is calm.
            </li>
            <li>
              <strong>Protect rest:</strong> schedule a quiet block immediately after.
            </li>
            <li>
              <strong>Record a quick note:</strong> engagement, stress signs, time-to-settle.
            </li>
          </ol>

          <p className="mb-4">
            If you are also using calm sound as part of quiet blocks, you can coordinate the menu with your sound routine.
            For evidence-informed guidance and habituation considerations, see:{' '}
            <Link
              href={`/${locale}/blog/music-for-kennelled-dogs-studies-habituation`}
              className="underline font-medium hover:opacity-80"
            >
              Music for Kennelled Dogs: What Studies Suggest
            </Link>
            .
          </p>
        </section>

        {/* TRACKING */}
        <section id="tracking" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">Tracking: How to Know Your Menu Is Helping</h2>
          <p className="mb-4">
            You do not need expensive tools. You need consistent observations. Track the same metrics for a week,
            then adjust the menu based on what actually improves rest and recovery.
          </p>

          <h3 className="text-lg font-semibold mb-2">Simple metrics that matter</h3>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>
              Time-to-settle after the session (minutes)
            </li>
            <li>
              Rest posture frequency (lying down, head down)
            </li>
            <li>
              Barking waves during the next hour (count)
            </li>
            <li>
              GI tolerance (vomiting, diarrhea, appetite changes)
            </li>
            <li>
              Handling cooperation after enrichment (leash, exit, return)
            </li>
          </ul>

          <p className="mb-4">
            <strong>One to two paragraph conclusion:</strong> Enrichment menus are not about entertainment. They are about
            predictable, low-arousal activities that help dogs cope with boarding and daycare. When you rotate lick, chew,
            and sniff thoughtfully, you reduce boredom without creating chaos. Keep sessions short, match the lane to the
            dog, and protect recovery time. Over time, a good menu produces calmer dogs, fewer barking loops, and easier handling.
          </p>

          <p className="mb-4">
            If you want a plug-and-play settle score and notes system designed for boarding and daycare, we are building it here:{' '}
            <Link
              href={`/${locale}/blog/tracking-welfare-settle-score-notes-system`}
              className="underline font-medium hover:opacity-80"
            >
              Tracking Welfare Without Fancy Tools
            </Link>
            .
          </p>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">Frequently Asked Questions</h2>

          <p className="mb-3">
            <strong>How often should we offer enrichment in boarding?</strong>
            <br />
            Most facilities do best with short sessions during planned quiet blocks. The goal is calm engagement followed by rest,
            not constant activity throughout the day.
          </p>

          <p className="mb-3">
            <strong>What if a dog guards food enrichment?</strong>
            <br />
            Use safer alternatives, increase spacing, and avoid offering high-value food items near other dogs. In some cases, choose
            non-food enrichment or structured sniff walks instead.
          </p>

          <p className="mb-3">
            <strong>Do we need dozens of items?</strong>
            <br />
            No. A small approved list works better. Rotating lanes and running sessions predictably matters more than having a large inventory.
          </p>

          <p>
            <strong>Is sensory enrichment like music actually supported in shelter research?</strong>
            <br />
            Controlled shelter studies have tested music, dog-appeasing pheromone, and scent conditions and reported differences in
            resting-related behavior compared with control conditions.
          </p>
        </section>

        {/* SOURCES */}
        <section id="sources" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">📚 Sources &amp; Research References (Selected)</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            <li>
              Purdue Canine Welfare Science Center: Enrichment overview and goals:{' '}
              <a
                href="https://caninewelfare.centers.purdue.edu/environment/enrichment/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://caninewelfare.centers.purdue.edu/environment/enrichment/
              </a>{' '}
            </li>
            <li>
              Purdue Canine Welfare Science Center PDF: Five Types of Environmental Enrichment (food puzzles, searching):{' '}
              <a
                href="https://caninewelfare.centers.purdue.edu/wp-content/uploads/2021/08/Five-Types-of-Environmental-Enrichment.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://caninewelfare.centers.purdue.edu/wp-content/uploads/2021/08/Five-Types-of-Environmental-Enrichment.pdf
              </a>{' '}
            </li>
            <li>
              Purdue Extension: Implementing Environmental Enrichment for Dogs (practical shelter guidance):{' '}
              <a
                href="https://extension.purdue.edu/extmedia/VA/VA-13-W.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://extension.purdue.edu/extmedia/VA/VA-13-W.pdf
              </a>{' '}
            </li>
            <li>
              Amaya et al. (2020) PubMed: Olfactory and auditory enrichment in shelter dogs (music, dog-appeasing pheromone, lavender):{' '}
              <a
                href="https://pubmed.ncbi.nlm.nih.gov/32235593/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://pubmed.ncbi.nlm.nih.gov/32235593/
              </a>{' '}
            </li>
            <li>
              Amaya et al. (2020) MDPI Animals: Full paper on sensory enrichment comparisons:{' '}
              <a
                href="https://www.mdpi.com/2076-2615/10/4/581"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.mdpi.com/2076-2615/10/4/581
              </a>{' '}
            </li>
            <li>
              Desforges et al. (2021) open access: Challenges and solutions surrounding environmental enrichment (Waltham Institute):{' '}
              <a
                href="https://pmc.ncbi.nlm.nih.gov/articles/PMC8532686/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://pmc.ncbi.nlm.nih.gov/articles/PMC8532686/
              </a>{' '}
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
