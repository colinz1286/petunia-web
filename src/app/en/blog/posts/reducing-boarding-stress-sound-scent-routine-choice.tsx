'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function ReducingBoardingStressSoundScentRoutineChoice() {
  const locale = useLocale();

  const title =
    'Reducing Boarding Stress: Evidence-Informed Enrichment (Sound, Scent, Routine, and Choice)';
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

        {/* Local anchor nav (Table of Contents) */}
        <nav className="mb-8 text-sm">
          <ul className="flex flex-wrap gap-3">
            <li>
              <a href="#tl-dr" className="underline hover:opacity-80">
                TL;DR
              </a>
            </li>
            <li>
              <a href="#what-stress-looks-like" className="underline hover:opacity-80">
                What Stress Looks Like
              </a>
            </li>
            <li>
              <a href="#four-levers" className="underline hover:opacity-80">
                The 4 Levers
              </a>
            </li>
            <li>
              <a href="#sound" className="underline hover:opacity-80">
                Sound
              </a>
            </li>
            <li>
              <a href="#scent" className="underline hover:opacity-80">
                Scent
              </a>
            </li>
            <li>
              <a href="#routine" className="underline hover:opacity-80">
                Routine
              </a>
            </li>
            <li>
              <a href="#choice" className="underline hover:opacity-80">
                Choice
              </a>
            </li>
            <li>
              <a href="#implementation" className="underline hover:opacity-80">
                Implementation Plan
              </a>
            </li>
            <li>
              <a href="#common-mistakes" className="underline hover:opacity-80">
                Common Mistakes
              </a>
            </li>
            <li>
              <a href="#tracking" className="underline hover:opacity-80">
                Tracking Welfare
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
        <section id="tl-dr" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Short Answer (TL;DR)</h2>
          <p className="mb-4">
            Boarding and daycare can be stressful because dogs face noise, novelty, confinement, social uncertainty,
            and reduced control over their environment. The most practical, evidence-informed way to reduce stress
            is to use four levers consistently: <strong>sound</strong> (auditory enrichment that reduces arousal),
            <strong> scent</strong> (olfactory enrichment that supports calm exploration), <strong>routine</strong> (predictable
            schedules that reduce uncertainty), and <strong>choice</strong> (giving dogs safe options that increase perceived control).
            Studies and reviews in shelter and kennel contexts suggest that auditory and olfactory enrichment can produce
            measurable benefits, but effects can fade if dogs habituate—so implementation matters.
          </p>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Big takeaway:</strong> The goal is not &ldquo;more stimulation.&rdquo; The goal is a calmer nervous system:
            lower noise peaks, fewer surprises, more rest, and predictable access to basic needs.
          </div>
        </section>

        {/* WHAT STRESS LOOKS LIKE */}
        <section id="what-stress-looks-like" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">What Boarding Stress Looks Like in Real Life</h2>
          <p className="mb-4">
            Stress does not always look dramatic. Some dogs get loud and frantic. Others get quiet and shut down.
            A practical stress-reduction plan starts with recognizing common patterns and building your day around
            what helps dogs settle, sleep, and feel safe.
          </p>

          <h3 className="text-lg font-semibold mb-2">Common signs of stress in kennel settings</h3>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li><strong>High arousal:</strong> pacing, spinning, jumping, fence-running, nonstop barking</li>
            <li><strong>Hypervigilance:</strong> staring, stiff posture, scanning, startled responses</li>
            <li><strong>Displacement behaviors:</strong> excessive licking, yawning, panting when not hot, lip-licking</li>
            <li><strong>GI changes:</strong> loose stool, decreased appetite, stress vomiting</li>
            <li><strong>Shut-down behavior:</strong> frozen posture, hiding, avoiding contact, low engagement</li>
            <li><strong>Reactivity loops:</strong> barking spreads, one dog triggers the next, arousal escalates</li>
          </ul>

          <p className="mb-4">
            If you regularly see stress-related behavior clusters in your facility, it is worth thinking about the
            environment itself (noise, visual exposure, spacing, predictability) rather than assuming the dog simply
            &ldquo;needs more attention.&rdquo; Kennel welfare reviews emphasize how shelter and kennel environments can shape
            behavior and physiological stress responses over time.
          </p>
        </section>

        {/* THE FOUR LEVERS */}
        <section id="four-levers" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">The Four Levers: Sound, Scent, Routine, and Choice</h2>
          <p className="mb-4">
            These levers work best together. Sound reduces noise-driven arousal. Scent provides calm information-gathering.
            Routine reduces uncertainty. Choice reduces helplessness and builds cooperative participation.
          </p>

          <div className="rounded-lg border border-[#d9cfc2] p-4 bg-[#f6efe4] mb-4">
            <h3 className="text-lg font-semibold mb-2">A simple target state</h3>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Dogs spend more time resting, chewing, sniffing, and calmly observing.</li>
              <li>Barking peaks are shorter and recoveries are faster.</li>
              <li>Handling becomes more cooperative because dogs can predict what happens next.</li>
              <li>Staff time shifts from crisis control to prevention.</li>
            </ul>
          </div>

          <p className="mb-4">
            In the next sections, we&rsquo;ll translate the research into practical routines you can run daily
            without expensive tools or unrealistic staffing.
          </p>
        </section>

        {/* SOUND */}
        <section id="sound" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Sound: Auditory Enrichment That Supports Calm</h2>
          <p className="mb-4">
            Multiple studies and reviews suggest that music can change kennel dog behavior in ways that look calmer
            (more resting, less barking), especially with specific styles. However, dogs can habituate, meaning the
            effect can fade with repeated exposure.
          </p>

          <h3 className="text-lg font-semibold mb-2">What the evidence tends to support</h3>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>Calming effects are often reported with classical or slow-tempo music in kennel contexts.</li>
            <li>Habituation can occur quickly if the same playlist runs all day, every day.</li>
            <li>Rotating genres and using time blocks may help preserve benefits (and reduce annoyance for staff).</li>
          </ul>

          <h3 className="text-lg font-semibold mb-2">A practical kennel music protocol</h3>
          <div className="rounded-lg border border-[#d9cfc2] p-4 bg-[#f6efe4] mb-4">
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li><strong>Use blocks:</strong> 60–90 minutes on, 60–90 minutes off (avoid nonstop audio all day).</li>
              <li><strong>Rotate:</strong> switch playlists daily (or at least every other day) to reduce habituation.</li>
              <li><strong>Keep volume modest:</strong> the goal is masking peaks, not adding stimulation.</li>
              <li><strong>Pair with rest:</strong> run music during scheduled settle times, not during peak excitement.</li>
            </ul>
          </div>

          <p className="mb-4">
            We&rsquo;ll publish a dedicated deep dive with study summaries, habituation strategies, and a ready-to-use playlist rotation plan here:{' '}
            <Link
              href={`/${locale}/blog/music-for-kennelled-dogs-studies-habituation`}
              className="underline font-medium hover:opacity-80"
            >
              Music for Kennelled Dogs: What Studies Suggest
            </Link>
            .
          </p>
        </section>

        {/* SCENT */}
        <section id="scent" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Scent: Olfactory Enrichment Without Overstimulation</h2>
          <p className="mb-4">
            Dogs experience the world through scent. Olfactory enrichment can encourage calm exploration and
            reduce arousal-related behaviors in some shelter and kennel studies, especially when implemented
            thoughtfully and safely.
          </p>

          <h3 className="text-lg font-semibold mb-2">Safe, low-risk scent enrichment ideas</h3>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li><strong>Sniff trails:</strong> scatter a few treats in a towel or snuffle mat to encourage slow searching.</li>
            <li><strong>Novel safe objects:</strong> rotate clean cardboard, paper bags, or dog-safe toys with different textures.</li>
            <li><strong>Handler scent cues:</strong> consistent staff scent + calm handling routines can become safety signals.</li>
            <li><strong>Familiar owner scent items:</strong> a clean worn T-shirt from home (if safe to launder and supervise).</li>
          </ul>

          <h3 className="text-lg font-semibold mb-2">Important cautions</h3>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>Do not introduce scent items that can be swallowed (loose strings, stuffing, small parts).</li>
            <li>Be cautious with essential oils and concentrated fragrances; keep ventilation strong and exposure limited.</li>
            <li>Use short sessions and watch for stress signals (sneezing fits, avoidance, agitation, frantic scratching).</li>
          </ul>

          <p className="mb-4">
            A 2020 open-access study examining olfactory and auditory enrichment in shelter dogs reports measurable
            effects on behavior and physiologic outcomes, supporting the idea that sensory enrichment can be helpful
            when applied carefully.
          </p>

          <p className="mb-4">
            We&rsquo;ll publish a dedicated practical guide that summarizes the research and gives a safe implementation checklist here:{' '}
            <Link
              href={`/${locale}/blog/scent-enrichment-for-dogs-research-safe`}
              className="underline font-medium hover:opacity-80"
            >
              Scent Enrichment for Dogs: What Research Looks At
            </Link>
            .
          </p>
        </section>

        {/* ROUTINE */}
        <section id="routine" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Routine: Predictability Often Calms More Than &ldquo;Extra Attention&rdquo;</h2>
          <p className="mb-4">
            Many nervous dogs are not asking for constant interaction. They are asking for certainty: when they will eat,
            when they will potty, when they will rest, and what handling will look like. Predictability reduces the
            cognitive load of uncertainty and can improve coping. Practical welfare writing in shelters emphasizes
            predictability and scheduling as a major way to reduce stress.
          </p>

          <h3 className="text-lg font-semibold mb-2">What an effective routine actually means</h3>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li><strong>Consistent timing:</strong> meals, potty breaks, quiet periods, and bedtime cues happen reliably.</li>
            <li><strong>Consistent sequence:</strong> the order is predictable (potty → settle → enrichment → rest).</li>
            <li><strong>Consistent handling language:</strong> the same words, body positions, and pacing from staff.</li>
          </ul>

          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Rule of thumb:</strong> If your facility is busy, protect rest blocks. Many behavior spirals start when
            dogs miss sleep and remain in a noise loop all day.
          </div>

          <p className="mb-4">
            We&rsquo;ll publish a focused article on why routine beats &ldquo;more attention&rdquo; (and how to build routines in real facilities) here:{' '}
            <Link
              href={`/${locale}/blog/predictability-beats-extra-attention-consistent-routines`}
              className="underline font-medium hover:opacity-80"
            >
              Predictability Beats Extra Attention
            </Link>
            .
          </p>
        </section>

        {/* CHOICE */}
        <section id="choice" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Choice: The Most Underrated Stress-Reducer</h2>
          <p className="mb-4">
            In kennel environments, stress is often amplified by loss of control. Even small choices can change how a dog
            experiences the day. Choice-based welfare literature across species emphasizes that giving animals control over
            aspects of their environment can support better welfare outcomes.
          </p>

          <h3 className="text-lg font-semibold mb-2">What &ldquo;choice&rdquo; looks like in a boarding routine</h3>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li><strong>Approach choice:</strong> allow the dog to come to the handler rather than being reached for immediately.</li>
            <li><strong>Location choice:</strong> provide a quiet corner, covered crate option, or visual barrier if safe.</li>
            <li><strong>Enrichment choice:</strong> offer two low-arousal options (for example: lick mat vs chew).</li>
            <li><strong>Social choice:</strong> for daycare, choose smaller groups or solo time when the dog is overwhelmed.</li>
          </ul>

          <p className="mb-4">
            Choice does not mean &ldquo;anything goes.&rdquo; It means offering safe options that lead to calmer behavior and
            more cooperative handling.
          </p>
        </section>

        {/* IMPLEMENTATION */}
        <section id="implementation" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">A Practical Implementation Plan for Boarding and Daycare</h2>
          <p className="mb-4">
            You do not need fancy equipment. You need consistency, a schedule, and a written plan staff can follow.
            Start small, measure changes, and build from there.
          </p>

          <h3 className="text-lg font-semibold mb-2">Step 1: Establish protected quiet blocks</h3>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>Pick 2–3 daily windows where lights are lower (if possible), movement is reduced, and handling is minimal.</li>
            <li>Run music during these blocks (not during peak barking times).</li>
            <li>Offer low-arousal enrichment (licking/chewing/sniffing) rather than high-intensity play.</li>
          </ul>

          <h3 className="text-lg font-semibold mb-2">Step 2: Build an enrichment menu (rotation prevents burnout)</h3>
          <div className="rounded-lg border border-[#d9cfc2] p-4 bg-[#f6efe4] mb-4">
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li><strong>Lick:</strong> frozen lick mats, food puzzles that slow intake</li>
              <li><strong>Chew:</strong> long-lasting chews appropriate for the dog and fully supervised</li>
              <li><strong>Sniff:</strong> snuffle mats, scatter feeding, towel rolls</li>
              <li><strong>Settle:</strong> a defined rest cue paired with the same bedding setup</li>
            </ul>
          </div>

          <p className="mb-4">
            We&rsquo;ll publish a full &ldquo;enrichment menu&rdquo; system designed specifically to avoid overstimulation here:{' '}
            <Link
              href={`/${locale}/blog/enrichment-menus-rotate-lick-chew-sniff-without-overstimulation`}
              className="underline font-medium hover:opacity-80"
            >
              Enrichment Menus: Rotating Without Overstimulating Dogs
            </Link>
            .
          </p>

          <h3 className="text-lg font-semibold mb-2">Step 3: Reduce noise loops and visual triggers</h3>
          <p className="mb-4">
            In many kennels, barking spreads like a chain reaction. If your environment creates constant sight-lines and
            frequent startle events, dogs struggle to recover. Studies and welfare discussions emphasize how noise levels
            and kennel conditions can affect dog behavior and coping.
          </p>
        </section>

        {/* COMMON MISTAKES */}
        <section id="common-mistakes" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Common Mistakes That Make Stress Worse</h2>
          <p className="mb-4">
            Stress-reduction tools can backfire if they increase arousal, remove rest, or overload the dog with novelty.
            Use this checklist to avoid common pitfalls.
          </p>

          <h3 className="text-lg font-semibold mb-2">Mistakes to avoid</h3>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li><strong>Constant audio:</strong> nonstop music can lose effect due to habituation and can irritate some dogs.</li>
            <li><strong>Too much scent:</strong> strong fragrances can overwhelm; keep exposure light and ventilated.</li>
            <li><strong>Replacing routine with random &ldquo;fun&rdquo;:</strong> novelty without predictability increases uncertainty.</li>
            <li><strong>Over-grouping:</strong> social overload increases reactivity and reduces recovery time.</li>
            <li><strong>Skipping decompression:</strong> some dogs need a calm transition back home after boarding.</li>
          </ul>

          <p className="mb-4">
            If you notice dogs acting &ldquo;tired, clingy, or off&rdquo; after pickup, that transition piece matters. We&rsquo;ll cover it here:{' '}
            <Link
              href={`/${locale}/blog/decompression-after-boarding-tired-clingy-off`}
              className="underline font-medium hover:opacity-80"
            >
              Decompression After Boarding
            </Link>
            .
          </p>
        </section>

        {/* TRACKING */}
        <section id="tracking" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">Tracking Welfare Without Fancy Tools</h2>
          <p className="mb-4">
            You do not need advanced monitoring to see whether your plan is working. You need consistent notes and a shared
            definition of &ldquo;settled.&rdquo; Over time, patterns emerge: certain dogs settle with scent work, others settle
            after quiet blocks, others need more choice and less social pressure.
          </p>

          <h3 className="text-lg font-semibold mb-2">What to track daily</h3>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>How long it takes the dog to settle after arrival</li>
            <li>Sleep/rest quality (frequent startles vs longer rest periods)</li>
            <li>Appetite and stool quality</li>
            <li>Barking frequency (especially during peak times)</li>
            <li>Handling cooperation (approach, leash, kennel exit, return)</li>
          </ul>

          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Tip:</strong> Keep it simple. A short daily note is more useful than a complex form nobody completes.
          </div>

          <p className="mb-4">
            We&rsquo;ll publish a plug-and-play settle scoring system and notes template here:{' '}
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
            <strong>Does music always calm dogs in kennels?</strong>
            <br />
            Not always. Evidence suggests it can help, but individual responses vary and habituation can reduce effects over time.
            Rotating playlists and using time blocks tends to be more practical than leaving the same audio on continuously.
          </p>

          <p className="mb-3">
            <strong>Should I use essential oils for scent enrichment?</strong>
            <br />
            Be cautious. Use only low-intensity approaches with strong ventilation and short exposures, and stop if dogs show avoidance
            or agitation. When in doubt, use food-based sniffing and familiar owner scent items instead.
          </p>

          <p className="mb-3">
            <strong>What matters more: enrichment or routine?</strong>
            <br />
            For many anxious boarders, routine is the foundation. Enrichment works best when it supports calm and fits a predictable schedule.
          </p>

          <p>
            <strong>How can I tell if a dog needs more choice?</strong>
            <br />
            If the dog shows avoidance, freezes, struggles with handling, or escalates when approached, small choices (approach pace, location,
            lower social pressure) often help.
          </p>
        </section>

        {/* SOURCES */}
        <section id="sources" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">📚 Sources &amp; Research References (Selected)</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            <li>
              Review: Auditory enrichment and music effects in dogs (open access):{' '}
              <a
                href="https://pmc.ncbi.nlm.nih.gov/articles/PMC7022433/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://pmc.ncbi.nlm.nih.gov/articles/PMC7022433/
              </a>{' '}
            </li>
            <li>
              PubMed: Classical music and habituation in kennelled dogs:{' '}
              <a
                href="https://pubmed.ncbi.nlm.nih.gov/25708275/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://pubmed.ncbi.nlm.nih.gov/25708275/
              </a>{' '}
            </li>
            <li>
              PubMed: Music genres and habituation discussion in kennel dogs:{' '}
              <a
                href="https://pubmed.ncbi.nlm.nih.gov/28093218/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://pubmed.ncbi.nlm.nih.gov/28093218/
              </a>{' '}
            </li>
            <li>
              PMC: Effects of olfactory and auditory enrichment on shelter dogs:{' '}
              <a
                href="https://pmc.ncbi.nlm.nih.gov/articles/PMC7222336/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://pmc.ncbi.nlm.nih.gov/articles/PMC7222336/
              </a>{' '}
            </li>
            <li>
              PMC: Olfactory and auditory enrichment and physiologic measures (open access):{' '}
              <a
                href="https://pmc.ncbi.nlm.nih.gov/articles/PMC7460225/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://pmc.ncbi.nlm.nih.gov/articles/PMC7460225/
              </a>{' '}
            </li>
            <li>
              Kennel dog welfare review (animal-based measures, open access):{' '}
              <a
                href="https://pmc.ncbi.nlm.nih.gov/articles/PMC7126575/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://pmc.ncbi.nlm.nih.gov/articles/PMC7126575/
              </a>{' '}
            </li>
            <li>
              Scoping review: Choice-based welfare studies (broader welfare context):{' '}
              <a
                href="https://www.sciencedirect.com/science/article/pii/S0168159124001187"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.sciencedirect.com/science/article/pii/S0168159124001187
              </a>{' '}
            </li>
            <li>
              Pilot: Quiet Kennel Exercise and barking reduction (open access):{' '}
              <a
                href="https://www.mdpi.com/2076-2615/12/2/171"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.mdpi.com/2076-2615/12/2/171
              </a>{' '}
            </li>
            <li>
              Humane Society of Missouri: Predictability and scheduling (practical shelter guidance):{' '}
              <a
                href="https://hsmo.org/portfolio-item/using-enrichment-predictability-and-scheduling-to-train-your-dog/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://hsmo.org/portfolio-item/using-enrichment-predictability-and-scheduling-to-train-your-dog/
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
