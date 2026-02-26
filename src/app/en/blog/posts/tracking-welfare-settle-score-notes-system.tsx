'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function TrackingWelfareSettleScoreNotesSystem() {
  const locale = useLocale();

  const title =
    'Tracking Welfare Without Fancy Tools: A Simple “Settle Score” and Notes System';
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
              <a href="#why-track-welfare" className="underline hover:opacity-80">
                Why Track Welfare
              </a>
            </li>
            <li>
              <a href="#what-to-measure" className="underline hover:opacity-80">
                What to Measure
              </a>
            </li>
            <li>
              <a href="#settle-score" className="underline hover:opacity-80">
                The Settle Score
              </a>
            </li>
            <li>
              <a href="#notes-template" className="underline hover:opacity-80">
                Notes Template
              </a>
            </li>
            <li>
              <a href="#how-to-use-it" className="underline hover:opacity-80">
                How to Use It Daily
              </a>
            </li>
            <li>
              <a href="#decision-rules" className="underline hover:opacity-80">
                Decision Rules
              </a>
            </li>
            <li>
              <a href="#common-mistakes" className="underline hover:opacity-80">
                Common Mistakes
              </a>
            </li>
            <li>
              <a href="#owner-version" className="underline hover:opacity-80">
                Owner Version
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
            You do not need expensive tools to track welfare in boarding or daycare. You need consistent observations that measure
            recovery and rest. A simple set of metrics (settle time, barking waves, rest posture, handling cooperation, appetite and
            stool notes) paired with a repeatable “settle score” helps teams identify which routines, quiet zones, and enrichment
            choices actually reduce stress.
          </p>

          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Best use:</strong> Score the same dogs at the same time blocks each day for one week, then adjust routines and
            traffic patterns based on what improves settle time and resting behavior.
          </div>
        </section>

        {/* WHY TRACK */}
        <section id="why-track-welfare" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Why Track Welfare at All</h2>
          <p className="mb-4">
            Kennel teams often make changes (new music, new enrichment, new quiet rules) and then rely on gut feeling to decide if it
            helped. The problem is that noise, staffing, dog mix, and daily events can change so much that your memory becomes unreliable.
            A simple tracking system turns “I think it helped” into “We saw settle time drop from 18 minutes to 6 minutes.”
          </p>

          <p className="mb-4">
            Welfare assessment frameworks for kenneled dogs commonly emphasize observable behavioral indicators because they are practical
            in real facilities. Guidance also highlights the value of consistent, repeatable measures rather than one-off impressions.
          </p>

          <p className="mb-4">
            This article fits into our broader stress-reduction system (sound + scent + routine + choice). If you want the full framework
            that explains why recovery time is the core outcome, start with:{' '}
            <Link
              href={`/${locale}/blog/reducing-boarding-stress-sound-scent-routine-choice`}
              className="underline font-medium hover:opacity-80"
            >
              Reducing Boarding Stress: Sound, Scent, Routine, and Choice
            </Link>
            .
          </p>
        </section>

        {/* WHAT TO MEASURE */}
        <section id="what-to-measure" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">What to Measure Without Fancy Tools</h2>
          <p className="mb-4">
            Your tracking system should prioritize what matters most in kennels: rest, recovery, and coping. Reviews of kenneled dog welfare
            commonly describe barking, pacing, and difficulty settling as frequent concerns, while increased resting behavior is often treated
            as a positive sign when interpreted in context.
          </p>

          <h3 className="text-lg font-semibold mb-2">The five core metrics</h3>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>
              <strong>Time-to-settle:</strong> minutes from return to kennel until calm rest posture.
            </li>
            <li>
              <strong>Barking waves:</strong> number of sustained barking bursts in a defined time block.
            </li>
            <li>
              <strong>Rest posture:</strong> head down vs head up, pacing vs lying down.
            </li>
            <li>
              <strong>Handling cooperation:</strong> leash, kennel exit, return, body tension.
            </li>
            <li>
              <strong>Appetite and GI notes:</strong> ate normally, stool quality changes, vomiting, diarrhea.
            </li>
          </ul>

          <h3 className="text-lg font-semibold mb-2">Two optional add-ons</h3>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>
              <strong>Trigger exposure count:</strong> number of pass-bys or loud events near a row during quiet blocks.
            </li>
            <li>
              <strong>Engagement quality:</strong> calm engagement with enrichment vs frantic behavior.
            </li>
          </ul>

          <p className="mb-4">
            If your facility is struggling with barking loops, tracking barking waves and settle time gives you immediate visibility into
            whether environmental changes are working. For the deeper explanation of barking loops and how environment shapes behavior, see:{' '}
            <Link
              href={`/${locale}/blog/noise-barking-loops-and-kennel-reactivity-how-environment-shapes-behavior`}
              className="underline font-medium hover:opacity-80"
            >
              Noise, Barking Loops, and Kennel Reactivity
            </Link>
            .
          </p>
        </section>

        {/* SETTLE SCORE */}
        <section id="settle-score" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">The Settle Score: A Simple 0–5 Scale Your Team Can Learn Fast</h2>
          <p className="mb-4">
            The settle score is a quick snapshot of how well a dog is coping in the current environment. It is not a personality label.
            It is a moment-in-time indicator to guide decisions. Purdue Extension resources describe practical behavioral indicators
            in kennel dogs that staff can recognize, which supports the idea that consistent observation can be formalized into a simple scale.
          </p>

          <h3 className="text-lg font-semibold mb-2">Score definitions</h3>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>
              <strong>0 — Fully settled:</strong> lying down calmly, relaxed body, minimal scanning, quiet or brief normal vocalization only.
            </li>
            <li>
              <strong>1 — Mostly settled:</strong> lying down but head up at times, mild scanning, settles back quickly.
            </li>
            <li>
              <strong>2 — Mildly activated:</strong> standing or sitting more than lying down, intermittent barking or whining, can disengage.
            </li>
            <li>
              <strong>3 — Activated:</strong> frequent barking, pacing, fence or door focus, slow recovery after triggers.
            </li>
            <li>
              <strong>4 — Stuck:</strong> sustained barking loops, pacing, barrier slamming, cannot settle within the block.
            </li>
            <li>
              <strong>5 — Escalated or unsafe:</strong> intense panic behavior, repeated attempts to escape, unsafe self-injury risk, or severe distress.
            </li>
          </ul>

          <h3 className="text-lg font-semibold mb-2">Two rules that make the score useful</h3>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>
              Score at the <strong>same moments</strong> each day (for example: 10 minutes after return, and mid-quiet block).
            </li>
            <li>
              Score based on <strong>observable behavior</strong>, not assumptions about what the dog “feels.”
            </li>
          </ul>

          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Staff training tip:</strong> Run a five-minute calibration once per week where two staff score the same dogs,
            compare scores, and align definitions.
          </div>
        </section>

        {/* NOTES TEMPLATE */}
        <section id="notes-template" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">A Notes System That Works: Short, Structured, and Repeatable</h2>
          <p className="mb-4">
            Notes fail when they are long, emotional, or inconsistent. Notes succeed when they capture the few facts that explain the score:
            what happened, what the dog did, what you changed, and what happened next.
          </p>

          <h3 className="text-lg font-semibold mb-2">The 30-second note template</h3>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>
              <strong>Time block:</strong> morning quiet block, midday, evening wind-down
            </li>
            <li>
              <strong>Settle score:</strong> score at return + score mid-block
            </li>
            <li>
              <strong>Trigger:</strong> pass-by, cleaning, loud event, new neighbor dog
            </li>
            <li>
              <strong>Response:</strong> barked, paced, lay down, ate enrichment calmly
            </li>
            <li>
              <strong>Intervention:</strong> moved location, added visual barrier, sniff activity, quiet handling
            </li>
            <li>
              <strong>Outcome:</strong> settle time (minutes), barking wave count, rest posture change
            </li>
          </ul>

          <h3 className="text-lg font-semibold mb-2">Two examples of good notes</h3>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>
              <strong>Example:</strong> “AM quiet block. Return score 3, mid-block score 1. Trigger: two dogs walked past. Intervention: partial cover + moved
              traffic route. Outcome: settled in 7 minutes, no sustained barking after 10 minutes.”
            </li>
            <li>
              <strong>Example:</strong> “Evening wind-down. Return score 4, mid-block score 3. Trigger: cleaning cart noise. Intervention: delayed return to row,
              calm handling, short sniff activity. Outcome: barking waves decreased from 3 to 1.”
            </li>
          </ul>

          <p className="mb-4">
            If you are building quiet zones, notes should explicitly track trigger exposure and recovery. Quiet zones reduce trigger exposure by design, so
            your notes should show the difference over time. For a full quiet-zone setup guide, see:{' '}
            <Link
              href={`/${locale}/blog/designing-quiet-zones-visual-barriers-spacing-and-settle-friendly-setups`}
              className="underline font-medium hover:opacity-80"
            >
              Designing Quiet Zones
            </Link>
            .
          </p>
        </section>

        {/* HOW TO USE IT */}
        <section id="how-to-use-it" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">How to Use This Daily Without Slowing Your Team Down</h2>
          <p className="mb-4">
            The system works best when you standardize when you score, and you only score the dogs who need it most at first. You can always expand.
            Start with a pilot group of 10–20 dogs or one wing.
          </p>

          <h3 className="text-lg font-semibold mb-2">Daily workflow for a boarding facility</h3>
          <ol className="list-decimal pl-6 space-y-1 mb-4">
            <li>
              <strong>Choose blocks:</strong> pick two scoring windows (example: mid-morning quiet block and evening wind-down).
            </li>
            <li>
              <strong>Score twice per block:</strong> at return and mid-block.
            </li>
            <li>
              <strong>Write the 30-second note:</strong> trigger, intervention, outcome.
            </li>
            <li>
              <strong>Flag trend:</strong> if scores are not improving over two days, adjust environment and routine.
            </li>
          </ol>

          <h3 className="text-lg font-semibold mb-2">Daily workflow for daycare</h3>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>
              Score after major transitions (group changes, breaks, meal times) rather than overnight windows.
            </li>
            <li>
              Track who needs more breaks, less social intensity, or quieter zones.
            </li>
          </ul>

          <p className="mb-4">
            If you run enrichment menus, your notes should capture whether enrichment created calm engagement or created escalation. For a practical rotation system,
            see:{' '}
            <Link
              href={`/${locale}/blog/enrichment-menus-rotate-lick-chew-sniff-without-overstimulating-dogs`}
              className="underline font-medium hover:opacity-80"
            >
              Enrichment Menus: Rotating Lick, Chew, and Sniff
            </Link>
            .
          </p>
        </section>

        {/* DECISION RULES */}
        <section id="decision-rules" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Decision Rules: What to Do With the Score</h2>
          <p className="mb-4">
            Scores matter only if they trigger consistent decisions. Your goal is to increase recovery and rest. Classical counterconditioning approaches
            such as the Quiet Kennel Exercise have been studied as low-resource interventions to reduce barking in kenneled dogs, which supports using
            simple, repeatable protocols when dogs are stuck.
          </p>

          <h3 className="text-lg font-semibold mb-2">Simple decision rules</h3>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>
              <strong>Score 0–1:</strong> keep routine stable, protect rest, avoid unnecessary changes.
            </li>
            <li>
              <strong>Score 2:</strong> add a calm lane (sniff or short lick) and reduce triggers during the next block.
            </li>
            <li>
              <strong>Score 3:</strong> reduce pass-bys, add visual barrier, move placement, shorten sessions, protect longer quiet block.
            </li>
            <li>
              <strong>Score 4:</strong> treat as a loop problem: quiet-zone placement, strict traffic rules, and repeatable counterconditioning.
            </li>
            <li>
              <strong>Score 5:</strong> escalate care plan: separate from triggers, consider veterinary input, and prioritize safety and welfare immediately.
            </li>
          </ul>

          <p className="mb-4">
            If you want the most direct explanation of why predictability is the core calming tool for nervous boarders, read:{' '}
            <Link
              href={`/${locale}/blog/predictability-beats-extra-attention-why-consistent-routines-calm-nervous-boarders`}
              className="underline font-medium hover:opacity-80"
            >
              Predictability Beats “Extra Attention”
            </Link>
            .
          </p>
        </section>

        {/* COMMON MISTAKES */}
        <section id="common-mistakes" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Common Mistakes That Make Tracking Useless</h2>
          <p className="mb-4">
            Tracking fails when it becomes inconsistent, emotional, or overly complex. Keep it simple and keep it standardized.
          </p>

          <h3 className="text-lg font-semibold mb-2">The usual failure points</h3>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>
              Scoring at random times (scores become incomparable)
            </li>
            <li>
              Changing three variables at once (you cannot tell what helped)
            </li>
            <li>
              Writing long notes that nobody reads
            </li>
            <li>
              Treating the score as a label rather than a moment-in-time snapshot
            </li>
            <li>
              Ignoring medical variables (pain and GI upset can change behavior dramatically)
            </li>
          </ul>

          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Simple fix:</strong> Score consistently, change one lever at a time, and measure recovery.
          </div>
        </section>

        {/* OWNER VERSION */}
        <section id="owner-version" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">Owner Version: A Simple At-Home Decompression Log</h2>
          <p className="mb-4">
            Owners can use a simplified version after pickup to understand whether a dog is recovering normally. This is especially helpful for dogs who come
            home tired, clingy, or a bit “off.” Track sleep, appetite, stool, and willingness to engage for 48–72 hours.
          </p>

          <h3 className="text-lg font-semibold mb-2">Two-day owner checklist</h3>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>
              Appetite normalizing (yes or no)
            </li>
            <li>
              Drinking normal (yes or no)
            </li>
            <li>
              Stool normalizing (yes or no)
            </li>
            <li>
              Rest improving (yes or no)
            </li>
            <li>
              Behavior trending toward baseline (yes or no)
            </li>
          </ul>

          <p className="mb-4">
            <strong>One to two paragraph conclusion:</strong> Welfare tracking is not about perfection. It is about clarity. When you measure settle time and resting
            behavior the same way each day, your team can see which routines, quiet-zone changes, and enrichment choices actually reduce stress. Over time, this
            improves outcomes for dogs, reduces barking loops, and makes your operation more predictable for staff and clients.
          </p>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">Frequently Asked Questions</h2>

          <p className="mb-3">
            <strong>Is the settle score meant to replace formal behavior evaluations?</strong>
            <br />
            No. It is a quick operational welfare snapshot to guide routines and environmental changes. Formal assessments are still important in shelters and some
            facilities, but daily welfare tracking can improve consistency.
          </p>

          <p className="mb-3">
            <strong>How many dogs should we score each day?</strong>
            <br />
            Start with a pilot set: noise-sensitive dogs, dogs who trigger barking waves, and dogs with poor recovery. Expand once the workflow feels easy.
          </p>

          <p className="mb-3">
            <strong>What is the most important metric if we can only do one?</strong>
            <br />
            Time-to-settle is often the best single metric because it directly measures recovery after stimulation.
          </p>

          <p>
            <strong>What if staff disagree on scores?</strong>
            <br />
            Run a short calibration once per week. Use the same definitions and score the same dogs together until the team aligns.
          </p>
        </section>

        {/* SOURCES */}
        <section id="sources" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">📚 Sources &amp; Research References (Selected)</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            <li>
              Purdue Extension (PDF): Assessing Kennel Dog Welfare (behavioral indicators staff can observe):{' '}
              <a href="https://extension.purdue.edu/extmedia/VA/VA-8-W.pdf" target="_blank" rel="noopener noreferrer">
                https://extension.purdue.edu/extmedia/VA/VA-8-W.pdf
              </a>{' '}
            </li>
            <li>
              Purdue Extension (PDF): Kenneled Dog Welfare: Challenges of Field Assessment (animal-based and management-based metrics):{' '}
              <a href="https://extension.purdue.edu/extmedia/VA/VA-17-W.pdf" target="_blank" rel="noopener noreferrer">
                https://extension.purdue.edu/extmedia/VA/VA-17-W.pdf
              </a>{' '}
            </li>
            <li>
              Polgár et al. (2019) open access review: assessing welfare of kenneled dogs and common indicators like barking:{' '}
              <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC7126575/" target="_blank" rel="noopener noreferrer">
                https://pmc.ncbi.nlm.nih.gov/articles/PMC7126575/
              </a>{' '}
            </li>
            <li>
              Raudies et al. (2021) open access: behavioral differences in shelter dogs, including resting postures:{' '}
              <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC7830969/" target="_blank" rel="noopener noreferrer">
                https://pmc.ncbi.nlm.nih.gov/articles/PMC7830969/
              </a>{' '}
            </li>
            <li>
              Quiet Kennel Exercise pilot (PubMed): classical counterconditioning to reduce barking in kenneled dogs:{' '}
              <a href="https://pubmed.ncbi.nlm.nih.gov/35049794/" target="_blank" rel="noopener noreferrer">
                https://pubmed.ncbi.nlm.nih.gov/35049794/
              </a>{' '}
            </li>
            <li>
              Quiet Kennel Exercise proof-of-concept (MDPI Animals): decibel readings and barking counts during intervention:{' '}
              <a href="https://www.mdpi.com/2076-2615/12/2/171" target="_blank" rel="noopener noreferrer">
                https://www.mdpi.com/2076-2615/12/2/171
              </a>{' '}
            </li>
            <li>
              Purdue Canine Welfare Center resource page on the Quiet Kennel Exercise (implementation summary):{' '}
              <a
                href="https://caninewelfare.centers.purdue.edu/resource/impact-of-classical-counterconditioning-quiet-kennel-exercise-on-barking-in-kenneled-dogs-a-pilot-study/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://caninewelfare.centers.purdue.edu/resource/impact-of-classical-counterconditioning-quiet-kennel-exercise-on-barking-in-kenneled-dogs-a-pilot-study/
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
