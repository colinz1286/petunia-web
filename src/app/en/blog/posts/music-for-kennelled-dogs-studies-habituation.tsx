'use client';

import Head from 'next/head';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function MusicForKennelledDogsStudiesHabituation() {
  const locale = useLocale();

  const title =
    'Music for Kennelled Dogs: What Studies Suggest, and Why Dogs Can Habituate';
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

  const description =
    'An evidence-informed guide to using music as auditory enrichment for kenneled dogs, including what studies show, why effects can fade from habituation, genre considerations, practical scheduling and volume rules, and how to measure results safely.';

  return (
    <>
      <Head>
        <title>{title} – Petunia Blog</title>
        <meta name="description" content={description} />
        <meta name="robots" content="all" />
        <link
          rel="canonical"
          href={`https://www.petuniapets.com/${locale}/blog/music-for-kennelled-dogs-studies-habituation`}
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
          {categories.map((keyName) => (
            <span
              key={keyName}
              className="text-xs bg-[#e4dbcb] text-[#2c4a30] px-3 py-1 rounded-full border border-[#d9cfc2]"
            >
              {categoryLabels[keyName] ?? keyName}
            </span>
          ))}
        </div>

        {/* Local anchor nav */}
        <nav className="mb-8 text-sm">
          <ul className="flex flex-wrap gap-3">
            <li>
              <a href="#tl-dr" className="underline hover:opacity-80">
                TL;DR
              </a>
            </li>
            <li>
              <a href="#what-studies-suggest" className="underline hover:opacity-80">
                What Studies Suggest
              </a>
            </li>
            <li>
              <a href="#why-habituation" className="underline hover:opacity-80">
                Why Habituation Happens
              </a>
            </li>
            <li>
              <a href="#genre-matters" className="underline hover:opacity-80">
                Does Genre Matter
              </a>
            </li>
            <li>
              <a href="#how-to-run" className="underline hover:opacity-80">
                How to Run Music Safely
              </a>
            </li>
            <li>
              <a href="#volume-tech" className="underline hover:opacity-80">
                Volume and Setup
              </a>
            </li>
            <li>
              <a href="#measuring" className="underline hover:opacity-80">
                Measuring Impact
              </a>
            </li>
            <li>
              <a href="#limitations" className="underline hover:opacity-80">
                Limitations
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
            Research in kennel and shelter contexts suggests that some music can reduce arousal-related behavior
            (more resting, less standing or barking) for many dogs, but the effect can fade quickly as dogs
            habituate. A well-known study specifically examined how fast habituation can occur with repeated
            classical music exposure, suggesting it can happen in as little as a couple of days.
            The most practical takeaway is that music can help, but only when used as part of a broader plan:
            protected quiet periods, predictable routines, and careful management of noise triggers.
          </p>
        </section>

        {/* WHAT STUDIES SUGGEST */}
        <section id="what-studies-suggest" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">What Studies Suggest About Music in Kennels</h2>
          <p className="mb-4">
            The strongest theme across the literature is not that music magically fixes stress. It is that certain
            auditory inputs can shift behavior in a direction that looks calmer in stressful environments. A review
            of auditory enrichment research on dogs summarizes multiple studies and generally describes classical
            music as having a calming influence in stressful settings, while also noting that responses vary and
            implementation details matter.
          </p>

          <h3 className="text-lg font-semibold mb-2">Commonly reported behavioral changes</h3>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>More time lying down or resting</li>
            <li>Less time standing, pacing, or vocalizing</li>
            <li>Shorter or less intense arousal spikes during exposure windows</li>
          </ul>

          <p className="mb-4">
            Older shelter research comparing different auditory conditions found dogs rested more with classical
            music and barked more under heavy metal, which supports the idea that the type of sound matters.
            More recent work has explored multiple genres and other sound types in kennel contexts, often with
            measurable behavior shifts.
          </p>

          <p className="mb-4">
            If you are building a full stress-reduction plan, this music guide pairs best with the pillar article in
            this cluster, which covers sound, scent, routine, and choice as a single system:{' '}
            <Link
              href={`/${locale}/blog/reducing-boarding-stress-sound-scent-routine-choice`}
              className="underline font-medium hover:opacity-80"
            >
              Reducing Boarding Stress: Evidence-Informed Enrichment
            </Link>
            .
          </p>
        </section>

        {/* WHY HABITUATION */}
        <section id="why-habituation" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Why Dogs Can Habituate to Music</h2>
          <p className="mb-4">
            Habituation means a stimulus becomes less noticeable or less meaningful over time. If music plays all day,
            every day, it can become background noise. In kennel settings, that matters because many music benefits are
            tied to novelty and contrast: a calmer soundscape that feels different from the baseline barking and clanging.
          </p>

          <p className="mb-4">
            A 9-day study in a rescue center investigated the timescale of habituation to classical music and reported
            evidence consistent with dogs habituating quickly, potentially within the second day of exposure.
            A later study examining different genres also discusses habituation as a key challenge with classical music.
          </p>

          <h3 className="text-lg font-semibold mb-2">What habituation looks like in practice</h3>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>Day 1: more settling, fewer sustained barking loops</li>
            <li>Day 2–3: the change shrinks or disappears unless the protocol changes</li>
            <li>Ongoing: some dogs still benefit, others stop responding, and a few may find the added sound irritating</li>
          </ul>

          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Practical implication:</strong> Music works best as a timed tool that supports quiet blocks and recovery,
            not as constant background audio.
          </div>
        </section>

        {/* GENRE MATTERS */}
        <section id="genre-matters" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Does Genre Matter? What the Research Points Toward</h2>
          <p className="mb-4">
            Some kennel studies suggest that dogs respond differently to different genres. A study on multiple genres in
            kenneled dogs reported changes consistent with reduced stress and also emphasized variation among individual dogs,
            which supports the idea that &ldquo;one playlist&rdquo; will not fit every dog.
            Earlier shelter work also found different behavioral profiles across classical, pop, and heavy metal exposures.
          </p>

          <h3 className="text-lg font-semibold mb-2">A conservative way to interpret genre findings</h3>
          <p className="mb-4">
            The evidence does not prove that one genre is universally best for every dog. It suggests that some sound profiles
            are more likely to support calm behavior than others. The review literature is generally cautious: effects exist,
            individual variation is real, and context matters.
          </p>

          <h3 className="text-lg font-semibold mb-2">A rotation approach that reduces habituation</h3>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li><strong>Use variety:</strong> rotate calm playlists across days to keep the stimulus from becoming meaningless</li>
            <li><strong>Avoid harsh inputs:</strong> fast tempo, heavy bass, or abrupt transitions can increase arousal for some dogs</li>
            <li><strong>Watch the dogs:</strong> choose what produces more resting and fewer sustained barking loops in your building</li>
          </ul>

          <p className="mb-4">
            Music alone cannot solve noise cascades in a barking environment. If barking loops are your main issue, the next two
            articles in this cluster will go deeper on environment-driven reactivity and quiet zone design:{' '}
            <Link
              href={`/${locale}/blog/noise-barking-loops-kennel-reactivity-environment`}
              className="underline font-medium hover:opacity-80"
            >
              Noise, Barking Loops, and Kennel Reactivity
            </Link>{' '}
            and{' '}
            <Link
              href={`/${locale}/blog/designing-quiet-zones-visual-barriers-spacing-settle-setups`}
              className="underline font-medium hover:opacity-80"
            >
              Designing Quiet Zones
            </Link>
            .
          </p>
        </section>

        {/* HOW TO RUN */}
        <section id="how-to-run" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">How to Run a Music Program in a Kennel Without Backfiring</h2>
          <p className="mb-4">
            The biggest mistake is running the same playlist continuously. The second biggest mistake is playing music loud enough
            to become another stressor. If music is going to help, it should support recovery and sleep, not compete with barking.
          </p>

          <h3 className="text-lg font-semibold mb-2">A simple schedule that fits real operations</h3>
          <div className="rounded-lg border border-[#d9cfc2] p-4 bg-[#f6efe4] mb-4">
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li><strong>Quiet block 1:</strong> 60–90 minutes of calm music during mid-morning rest</li>
              <li><strong>Off block:</strong> 60–90 minutes of silence or lower-stimulus ambient sound</li>
              <li><strong>Quiet block 2:</strong> 60–90 minutes during mid-afternoon settle time</li>
              <li><strong>Evening cue:</strong> a consistent short music window that predicts bedtime routines</li>
              <li><strong>Rotate daily:</strong> swap playlists by day to reduce habituation.</li>
            </ul>
          </div>

          <h3 className="text-lg font-semibold mb-2">Pair music with low-arousal enrichment</h3>
          <p className="mb-4">
            Music works best when the dog has something calm to do. Pair quiet blocks with licking, chewing, or sniffing activities,
            and keep arousing play separate. This is also where scent enrichment can be powerful when done safely; we cover that here:{' '}
            <Link
              href={`/${locale}/blog/scent-enrichment-for-dogs-research-safe`}
              className="underline font-medium hover:opacity-80"
            >
              Scent Enrichment for Dogs: What Research Looks At
            </Link>
            .
          </p>
        </section>

        {/* VOLUME AND TECH */}
        <section id="volume-tech" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Volume, Speakers, and Setup Rules That Keep Dogs Safer</h2>
          <p className="mb-4">
            The goal is a smoother soundscape, not loud audio. In noisy buildings, music may be most helpful when it reduces sharp peaks
            and provides a steady background during rest blocks. If you need high volume to hear the music over barking, focus first on
            reducing the barking loop, because adding more sound can increase total stimulation.
          </p>

          <h3 className="text-lg font-semibold mb-2">Practical setup checklist</h3>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li><strong>Keep volume modest:</strong> low enough that staff can easily talk at normal voice level nearby</li>
            <li><strong>Avoid speaker hot spots:</strong> spread speakers evenly rather than blasting one room</li>
            <li><strong>Avoid abrupt starts:</strong> fade in and fade out (sudden noise can startle dogs)</li>
            <li><strong>Use reliable hardware:</strong> prevent random disconnects and loud reconnection tones</li>
            <li><strong>Document settings:</strong> consistency across shifts prevents accidental volume creep</li>
          </ul>

          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Special note for sensitive dogs:</strong> A subset of dogs may be noise-sensitive. For those dogs, the best
            auditory plan may be a quieter space, more visual barriers, and less overall stimulation rather than more audio.
          </div>
        </section>

        {/* MEASURING */}
        <section id="measuring" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">How to Measure Whether Music Is Helping</h2>
          <p className="mb-4">
            Music programs fail when people rely on vibes instead of tracking. You can measure impact without expensive tools by using a
            few simple, repeatable observations during the same time windows each day.
          </p>

          <h3 className="text-lg font-semibold mb-2">Track these before and after you start</h3>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>Percent of dogs lying down during quiet blocks</li>
            <li>Frequency of sustained barking waves (for example: longer than 30 seconds)</li>
            <li>How quickly the room recovers after a trigger (delivery, door slam, kennel cleaning)</li>
            <li>Handling cooperation during kennel exits and returns</li>
          </ul>

          <p className="mb-4">
            If you want a simple scoring approach you can hand to staff, we&rsquo;re building a settle score and notes template next:{' '}
            <Link
              href={`/${locale}/blog/tracking-welfare-settle-score-notes-system`}
              className="underline font-medium hover:opacity-80"
            >
              Tracking Welfare Without Fancy Tools
            </Link>
            .
          </p>
        </section>

        {/* LIMITATIONS */}
        <section id="limitations" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">Limitations and Responsible Caveats</h2>
          <p className="mb-4">
            The research base is promising, but not perfect. Many studies involve shelter dogs, small samples, and short timeframes.
            Dogs also vary in temperament, past learning history, and sensitivity to noise. Review papers emphasize the need for cautious,
            context-aware implementation rather than one-size-fits-all prescriptions.
          </p>

          <h3 className="text-lg font-semibold mb-2">Situations where music is not the main answer</h3>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>Dogs who are already over threshold due to crowding, high noise, or constant visual triggers</li>
            <li>Dogs with severe distress where medical and behavioral support is needed</li>
            <li>Buildings where music adds to an already loud environment instead of smoothing it</li>
          </ul>

          <p className="mb-4">
            In those cases, start with environment: reduce barking loops, add visual barriers, protect sleep, and increase predictability.
            Music can still be a helpful layer, but it should not replace the fundamentals.
          </p>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">Frequently Asked Questions</h2>

          <p className="mb-3">
            <strong>Should I play music all day in a kennel?</strong>
            <br />
            Usually no. Habituation is a real issue, and continuous audio can become meaningless or irritating. Timed blocks with playlist
            rotation are more consistent with the habituation findings in kennel studies.
          </p>

          <p className="mb-3">
            <strong>Is classical music the best choice?</strong>
            <br />
            Classical music has supportive evidence in multiple studies and reviews, but dogs can respond to different genres and individual
            preference appears to exist. A multi-genre study in kennelled dogs reported stress-related changes across genres and highlights
            individual variation.
          </p>

          <p className="mb-3">
            <strong>What about audiobooks or human speech?</strong>
            <br />
            Some shelter work suggests audiobooks may reduce barking and could be a useful alternative form of auditory enrichment in certain
            settings, though results and practicality vary.
          </p>

          <p className="mb-3">
            <strong>How fast should I expect results?</strong>
            <br />
            Many facilities notice changes quickly during quiet blocks, but the key question is whether the effect lasts. Because habituation
            can occur quickly, judge results over multiple days with rotation and time blocks.
          </p>

          <p>
            <strong>Can music replace training or behavior support?</strong>
            <br />
            No. Music can be one helpful layer. Severe distress requires an individualized plan and often professional guidance.
          </p>
        </section>

        {/* SOURCES */}
        <section id="sources" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">📚 Sources &amp; Research References (Selected)</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            <li>
              Lindig et al. review: Musical Dogs (auditory enrichment overview):{' '}
              <a
                href="https://pmc.ncbi.nlm.nih.gov/articles/PMC7022433/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://pmc.ncbi.nlm.nih.gov/articles/PMC7022433/
              </a>{' '}
            </li>
            <li>
              Bowman et al. (2015): &ldquo;Four Seasons&rdquo; habituation timescale study (PubMed):{' '}
              <a
                href="https://pubmed.ncbi.nlm.nih.gov/25708275/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://pubmed.ncbi.nlm.nih.gov/25708275/
              </a>{' '}
            </li>
            <li>
              Bowman et al. (2017): Different genres of music and stress levels (PubMed):{' '}
              <a
                href="https://pubmed.ncbi.nlm.nih.gov/28093218/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://pubmed.ncbi.nlm.nih.gov/28093218/
              </a>{' '}
            </li>
            <li>
              Wells et al. (2002) summary of auditory stimulation conditions (classical vs heavy metal, etc.):{' '}
              <a
                href="https://awionline.org/lab-animal-search/wells-d-l-graham-l-hepper-p-g-2002-influence-auditory-stimulation-behaviour-dogs"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://awionline.org/lab-animal-search/wells-d-l-graham-l-hepper-p-g-2002-influence-auditory-stimulation-behaviour-dogs
              </a>{' '}
            </li>
            <li>
              Maddie&rsquo;s Fund summary: audiobooks as auditory enrichment in shelter dogs:{' '}
              <a
                href="https://chewonthis.maddiesfund.org/2017/03/audiobooks/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://chewonthis.maddiesfund.org/2017/03/audiobooks/
              </a>{' '}
            </li>
            <li>
              Purdue Canine Welfare Center summary of auditory enrichment review (habituation caution):{' '}
              <a
                href="https://caninewelfare.centers.purdue.edu/resource/musical-dogs-a-review-of-the-influence-of-auditory-enrichment-on-canine-health-and-behavior/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://caninewelfare.centers.purdue.edu/resource/musical-dogs-a-review-of-the-influence-of-auditory-enrichment-on-canine-health-and-behavior/
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
