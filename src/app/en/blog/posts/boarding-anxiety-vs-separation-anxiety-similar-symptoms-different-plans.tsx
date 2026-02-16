'use client';

import Head from 'next/head';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function BoardingAnxietyVsSeparationAnxietySimilarSymptomsDifferentPlans() {
  const locale = useLocale();

  const title =
    'Boarding Anxiety vs Separation Anxiety: Similar Symptoms, Different Plans';
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
    'How to tell boarding anxiety from separation anxiety in dogs, why symptoms overlap, and the right plan for each—environmental routine fixes vs alone-time training and veterinary behavior support.';

  return (
    <>
      <Head>
        <title>{title} – Petunia Blog</title>
        <meta name="description" content={description} />
        <meta name="robots" content="all" />
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

        {/* Table of Contents */}
        <nav className="mb-8 text-sm">
          <ul className="flex flex-wrap gap-3">
            <li>
              <a href="#tldr" className="underline hover:opacity-80">
                TL;DR
              </a>
            </li>
            <li>
              <a href="#definitions" className="underline hover:opacity-80">
                Definitions
              </a>
            </li>
            <li>
              <a href="#why-symptoms-overlap" className="underline hover:opacity-80">
                Why Symptoms Overlap
              </a>
            </li>
            <li>
              <a href="#boarding-anxiety-profile" className="underline hover:opacity-80">
                Boarding Anxiety Profile
              </a>
            </li>
            <li>
              <a href="#separation-anxiety-profile" className="underline hover:opacity-80">
                Separation Anxiety Profile
              </a>
            </li>
            <li>
              <a href="#how-to-tell" className="underline hover:opacity-80">
                How to Tell Which It Is
              </a>
            </li>
            <li>
              <a href="#plan-boarding-anxiety" className="underline hover:opacity-80">
                Plan for Boarding Anxiety
              </a>
            </li>
            <li>
              <a href="#plan-separation-anxiety" className="underline hover:opacity-80">
                Plan for Separation Anxiety
              </a>
            </li>
            <li>
              <a href="#when-to-call-vet" className="underline hover:opacity-80">
                When to Call a Vet
              </a>
            </li>
            <li>
              <a href="#facility-what-to-ask" className="underline hover:opacity-80">
                What to Ask a Facility
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
            Boarding anxiety and separation anxiety can look similar (barking, pacing, trembling, not eating, accidents, destruction),
            but the solutions are different. Boarding anxiety is usually triggered by the kennel environment (noise, novelty, routines,
            barrier frustration), so the plan focuses on predictability, quiet zones, and calm enrichment. Separation anxiety is triggered
            by being away from an attachment figure (often at home when alone), so the plan focuses on gradual alone-time training, careful
            departure routines, and sometimes medication support under veterinary guidance.
          </p>

          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Most important point:</strong> If the dog is distressed mainly in kennels but does fine at home when alone, you are
            likely dealing with boarding-related stress. If the dog panics specifically when left alone (even at home), treat it as
            separation anxiety and get a structured behavior plan.
          </div>
        </section>

        {/* DEFINITIONS */}
        <section id="definitions" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Definitions: What Each Term Means</h2>

          <h3 className="text-lg font-semibold mb-2">Boarding anxiety</h3>
          <p className="mb-4">
            Boarding anxiety is stress, fear, or sustained over-arousal caused by the boarding or daycare environment. It can be driven by
            novelty (new smells and people), noise, disrupted sleep, traffic patterns, barrier frustration, or unpredictable routines. It is
            often situational: the dog may be fine at home, but struggles in kennels.
          </p>

          <h3 className="text-lg font-semibold mb-2">Separation anxiety</h3>
          <p className="mb-4">
            Separation anxiety is a behavioral disorder in which a dog shows distress when separated from a specific person (or sometimes a
            small group). It most commonly shows up when a dog is left alone at home, and it tends to include panic-like behaviors (vocalizing,
            destruction, elimination, drooling) that occur soon after the person leaves.
          </p>

          <p className="mb-4">
            This article fits into our broader boarding stress cluster. If you want the full systems view of how sound, scent, routine,
            and choice work together, start with:{' '}
            <Link
              href={`/${locale}/blog/reducing-boarding-stress-sound-scent-routine-choice`}
              className="underline font-medium hover:opacity-80"
            >
              Reducing Boarding Stress: Sound, Scent, Routine, and Choice
            </Link>
            .
          </p>
        </section>

        {/* WHY SYMPTOMS OVERLAP */}
        <section id="why-symptoms-overlap" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Why Symptoms Overlap (and Why That Confuses Owners)</h2>
          <p className="mb-4">
            Many &ldquo;anxiety symptoms&rdquo; are not diagnosis-specific. Barking, pacing, panting, trembling, lack of appetite, and accidents can show up in
            multiple situations because they are general stress outputs. The difference is the trigger pattern and the timeline.
          </p>

          <h3 className="text-lg font-semibold mb-2">Common stress outputs you might see in both cases</h3>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>Vocalizing (barking, whining, howling)</li>
            <li>Pacing, circling, or inability to settle</li>
            <li>Destructive behavior or scratching at barriers</li>
            <li>Drooling, panting, trembling</li>
            <li>House soiling or accidents</li>
            <li>Refusing food or eating less</li>
          </ul>

          <p className="mb-4">
            The right question is not &ldquo;does my dog show stress signs?&rdquo; It is &ldquo;when do they show them, and what reliably triggers them?&rdquo;
          </p>
        </section>

        {/* BOARDING ANXIETY PROFILE */}
        <section id="boarding-anxiety-profile" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Boarding Anxiety Profile: What It Often Looks Like</h2>
          <p className="mb-4">
            Boarding anxiety typically spikes with kennel-specific triggers: loud barking waves, doors, unfamiliar neighbors, constant hallway traffic, or reduced
            sleep quality. Some dogs do fine during play or walks and then struggle during rest blocks. Others struggle most during transitions (returning to the run,
            people walking past, or being confined near reactive dogs).
          </p>

          <h3 className="text-lg font-semibold mb-2">Clues that point toward environment-driven stress</h3>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>
              Stress is strongest in noisy wings, but improves in quieter areas or with visual barriers.
            </li>
            <li>
              Barking occurs in waves (the dog joins in when others bark).
            </li>
            <li>
              The dog settles better when routines are predictable and quiet blocks are protected.
            </li>
            <li>
              The dog is typically fine at home when left alone (or only mildly upset).
            </li>
          </ul>

          <p className="mb-4">
            If this sounds familiar, read our deep dive on how kennel noise creates barking loops and reactivity:{' '}
            <Link
              href={`/${locale}/blog/noise-barking-loops-and-kennel-reactivity-how-environment-shapes-behavior`}
              className="underline font-medium hover:opacity-80"
            >
              Noise, Barking Loops, and Kennel Reactivity
            </Link>
            .
          </p>
        </section>

        {/* SEPARATION ANXIETY PROFILE */}
        <section id="separation-anxiety-profile" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Separation Anxiety Profile: What It Often Looks Like</h2>
          <p className="mb-4">
            Separation anxiety typically appears when the dog is separated from their person, often at home. The distress often starts quickly after departure and can
            include destruction near exits, intense vocalization, drooling, pacing, and elimination. One reason it is missed is that many dogs do not show the worst
            symptoms when the owner is home to observe them.
          </p>

          <h3 className="text-lg font-semibold mb-2">Clues that point toward separation-driven distress</h3>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>
              The dog shows distress primarily when left alone, even in a familiar home setting.
            </li>
            <li>
              The dog may follow the owner constantly at home and struggle when the owner moves behind doors.
            </li>
            <li>
              Damage or scratching often occurs near doors, windows, or exit points.
            </li>
            <li>
              Incidents may occur even when the dog is otherwise fully house trained.
            </li>
          </ul>

          <p className="mb-4">
            A classic separation anxiety symptom list includes vocalization, destruction, inappropriate elimination, and other stress signs when the dog is separated.
            See ASPCA&rsquo;s overview for a widely cited summary of common signs and differentiation points.{' '}
            <a
              href="https://www.aspca.org/pet-care/dog-care/common-dog-behavior-issues/separation-anxiety"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:opacity-80"
            >
              ASPCA: Separation Anxiety
            </a>
            .
          </p>
        </section>

        {/* HOW TO TELL */}
        <section id="how-to-tell" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">How to Tell Which It Is: A Practical Differentiation Checklist</h2>
          <p className="mb-4">
            Use this checklist to narrow down the most likely driver. It is not a substitute for professional diagnosis, but it helps you choose the right next step.
          </p>

          <h3 className="text-lg font-semibold mb-2">Step 1: Where does the distress happen?</h3>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>
              <strong>Mainly in kennels or daycare environments:</strong> boarding anxiety is more likely.
            </li>
            <li>
              <strong>Mainly at home when the owner leaves:</strong> separation anxiety is more likely.
            </li>
          </ul>

          <h3 className="text-lg font-semibold mb-2">Step 2: What is the timeline?</h3>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>
              <strong>Spikes during noisy events and transitions:</strong> environment-driven stress is more likely.
            </li>
            <li>
              <strong>Starts quickly after departure and persists until return:</strong> separation anxiety is more likely.
            </li>
          </ul>

          <h3 className="text-lg font-semibold mb-2">Step 3: What improves it?</h3>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>
              <strong>Quiet zones, visual barriers, predictable routines:</strong> boarding anxiety often improves.
            </li>
            <li>
              <strong>Gradual alone-time training, desensitization to departure cues:</strong> separation anxiety improves.
            </li>
          </ul>

          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Best diagnostic habit:</strong> If you suspect separation anxiety, use a camera at home. Many dogs show the clearest pattern when nobody is present.
          </div>
        </section>

        {/* PLAN BOARDING ANXIETY */}
        <section id="plan-boarding-anxiety" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Plan for Boarding Anxiety: Change the Environment and the Rhythm</h2>
          <p className="mb-4">
            Boarding anxiety is often a systems problem. The plan focuses on reducing triggers, protecting rest, and increasing predictability. Many dogs improve
            dramatically when the facility has a consistent daily rhythm and the dog is placed in a calmer zone.
          </p>

          <h3 className="text-lg font-semibold mb-2">The highest-leverage strategies</h3>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>
              <strong>Predictable routines:</strong> consistent potty, feeding, and rest blocks. If you want the full logic, read:{' '}
              <Link
                href={`/${locale}/blog/predictability-beats-extra-attention-why-consistent-routines-calm-nervous-boarders`}
                className="underline font-medium hover:opacity-80"
              >
                Predictability Beats &ldquo;Extra Attention&rdquo;
              </Link>
              .
            </li>
            <li>
              <strong>Quiet zones and visual barriers:</strong> reduce pass-by triggers and barking contagion. See:{' '}
              <Link
                href={`/${locale}/blog/designing-quiet-zones-visual-barriers-spacing-and-settle-friendly-setups`}
                className="underline font-medium hover:opacity-80"
              >
                Designing Quiet Zones
              </Link>
              .
            </li>
            <li>
              <strong>Low-arousal enrichment menus:</strong> rotate sniff, lick, and safe chew options without creating frenzy. See:{' '}
              <Link
                href={`/${locale}/blog/enrichment-menus-rotate-lick-chew-sniff-without-overstimulating-dogs`}
                className="underline font-medium hover:opacity-80"
              >
                Enrichment Menus: Rotating Lick, Chew, and Sniff
              </Link>
              .
            </li>
            <li>
              <strong>Scent-based calming activities:</strong> food-based sniffing and safe scent games. See:{' '}
              <Link
                href={`/${locale}/blog/scent-enrichment-for-dogs-research-safe`}
                className="underline font-medium hover:opacity-80"
              >
                Scent Enrichment for Dogs: Research-Informed and Safe
              </Link>
              .
            </li>
          </ul>

          <h3 className="text-lg font-semibold mb-2">What owners can do before the stay</h3>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>
              Choose a facility that can offer quiet placement and predictable routines.
            </li>
            <li>
              Pack familiar scent and sleep cues and keep food consistent.
            </li>
            <li>
              Ask the facility for a calm plan on day one (lower intensity, more rest).
            </li>
          </ul>

          <p className="mb-4">
            If you want a packing guide specifically for nervous dogs (scent items, sleep setup, and familiar cues), see:{' '}
            <Link
              href={`/${locale}/blog/what-to-pack-for-a-nervous-dog-scent-items-sleep-setup-and-familiar-cues`}
              className="underline font-medium hover:opacity-80"
            >
              What to Pack for a Nervous Dog
            </Link>
            .
          </p>
        </section>

        {/* PLAN SEPARATION ANXIETY */}
        <section id="plan-separation-anxiety" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Plan for Separation Anxiety: Train Alone-Time, Not Kennel Tolerance</h2>
          <p className="mb-4">
            Separation anxiety usually does not resolve by changing kennels. It resolves by changing the dog&rsquo;s emotional response to being alone. That typically
            involves gradual exposure (starting below panic threshold), careful management to prevent rehearsing panic, and structured training that builds duration.
          </p>

          <h3 className="text-lg font-semibold mb-2">Core components of an effective plan</h3>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>
              <strong>Management:</strong> prevent panic rehearsals (for example, use sitters or daycare while you train).
            </li>
            <li>
              <strong>Alone-time training:</strong> gradual departures that stay below the dog&rsquo;s panic threshold.
            </li>
            <li>
              <strong>Departure cue work:</strong> reduce the dog&rsquo;s response to keys, shoes, and pre-leave routines.
            </li>
            <li>
              <strong>Camera feedback:</strong> confirm what happens when you are gone, not what you assume happens.
            </li>
          </ul>

          <h3 className="text-lg font-semibold mb-2">Medication can be appropriate in some cases</h3>
          <p className="mb-4">
            Some dogs with severe separation anxiety benefit from medication support paired with behavior modification. Veterinary behavior resources note that
            clomipramine and fluoxetine have FDA approvals for canine separation anxiety and are commonly used as part of broader treatment plans under veterinary guidance.
            Always discuss medication decisions with your veterinarian or a veterinary behaviorist.
          </p>

          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Important:</strong> If the dog is panicking, do not practice long departures hoping they will &ldquo;get used to it.&rdquo; Rehearsing panic usually
            strengthens the problem. Train below threshold and build duration gradually.
          </div>
        </section>

        {/* WHEN TO CALL VET */}
        <section id="when-to-call-vet" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">When to Call a Vet</h2>
          <p className="mb-4">
            Always rule out medical contributors, especially when symptoms are new, severe, or rapidly worsening. Pain, GI illness, urinary issues, and sleep disruption
            can change behavior. In boarding environments, also consider kennel cough or other respiratory issues if coughing, nasal discharge, or labored breathing appears.
          </p>

          <h3 className="text-lg font-semibold mb-2">Seek veterinary guidance promptly if you see</h3>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>Refusal to drink or signs of dehydration</li>
            <li>Vomiting or diarrhea that persists or worsens</li>
            <li>Labored breathing, repeated coughing, or collapse</li>
            <li>Self-injury risk (repeated escape attempts, breaking teeth, bleeding)</li>
            <li>Sudden severe behavior change that does not improve with rest</li>
          </ul>

          <p className="mb-4">
            If your dog comes home exhausted, clingy, or a little &ldquo;off&rdquo; after boarding, that can be normal decompression in the short term. For a practical
            72-hour recovery plan and red flags, see:{' '}
            <Link
              href={`/${locale}/blog/decompression-after-boarding-why-dogs-seem-tired-clingy-or-off-at-home`}
              className="underline font-medium hover:opacity-80"
            >
              Decompression After Boarding
            </Link>
            .
          </p>
        </section>

        {/* FACILITY WHAT TO ASK */}
        <section id="facility-what-to-ask" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">What to Ask a Facility if Your Dog Is Nervous</h2>
          <p className="mb-4">
            Many nervous dogs do well in boarding with the right environment. The goal is to choose a facility that can run a predictable plan and protect rest.
          </p>

          <h3 className="text-lg font-semibold mb-2">Questions that reveal whether a facility can support your dog</h3>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>
              Do you have quiet zones or lower-traffic areas for noise-sensitive dogs?
            </li>
            <li>
              Can you reduce pass-by triggers with visual barriers or placement changes?
            </li>
            <li>
              What does a typical day look like, and do you protect rest blocks?
            </li>
            <li>
              How do you handle barking waves and reactive rows?
            </li>
            <li>
              Do you offer low-arousal enrichment options for nervous dogs?
            </li>
          </ul>

          <p className="mb-4">
            <strong>One to two paragraph conclusion:</strong> Boarding anxiety and separation anxiety can look similar, but they are solved differently. If the distress
            is mainly environment-driven, focus on facility choice, predictable routines, quiet-zone placement, and calm enrichment. If the distress is specifically triggered
            by being left alone, treat it as separation anxiety and prioritize gradual alone-time training and professional behavior support. Getting the label right protects
            your dog, saves you money, and prevents you from chasing the wrong solution.
          </p>

          <p className="mb-4">
            If you want a simple way to measure whether your dog is improving in a kennel environment, we built a practical tracking approach here:{' '}
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
            <strong>Can a dog have both boarding anxiety and separation anxiety?</strong>
            <br />
            Yes. Some dogs are sensitive to kennels and also struggle when left alone at home. In those cases you usually need both plans: improve the boarding environment
            and build an alone-time training program.
          </p>

          <p className="mb-3">
            <strong>My dog only panics in a crate. Is that separation anxiety?</strong>
            <br />
            Not always. Some dogs show confinement distress rather than separation distress. A camera and a structured evaluation can help differentiate patterns.
          </p>

          <p className="mb-3">
            <strong>Will more daycare fix separation anxiety?</strong>
            <br />
            Daycare can help with management (so the dog is not alone), but it does not automatically treat the underlying panic response. A structured alone-time plan is still needed.
          </p>

          <p>
            <strong>What is the fastest improvement lever for boarding stress?</strong>
            <br />
            Predictable routine and protected rest blocks. When the dog can anticipate the rhythm and recover, many symptoms soften quickly.
          </p>
        </section>

        {/* SOURCES */}
        <section id="sources" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">📚 Sources &amp; Research References (Selected)</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            <li>
              ASPCA: Separation anxiety symptoms and differentiation notes:{' '}
              <a
                href="https://www.aspca.org/pet-care/dog-care/common-dog-behavior-issues/separation-anxiety"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.aspca.org/pet-care/dog-care/common-dog-behavior-issues/separation-anxiety
              </a>
            </li>
            <li>
              Sargisson (2014) open access review: canine separation anxiety strategies for treatment and management:{' '}
              <a
                href="https://pmc.ncbi.nlm.nih.gov/articles/PMC7521022/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://pmc.ncbi.nlm.nih.gov/articles/PMC7521022/
              </a>
            </li>
            <li>
              Today&rsquo;s Veterinary Practice: medication overview noting FDA approvals for clomipramine and fluoxetine in canine separation anxiety:{' '}
              <a
                href="https://todaysveterinarypractice.com/behavior/the-use-of-medications-in-canine-behavior-therapy/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://todaysveterinarypractice.com/behavior/the-use-of-medications-in-canine-behavior-therapy/
              </a>
            </li>
            <li>
              PetMD: separation anxiety signs and context (overview):{' '}
              <a
                href="https://www.petmd.com/dog/conditions/behavioral/separation-anxiety-dogs"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.petmd.com/dog/conditions/behavioral/separation-anxiety-dogs
              </a>
            </li>
            <li>
              VCA: signs of dog stress and how to relieve it (general stress behaviors):{' '}
              <a
                href="https://vcahospitals.com/know-your-pet/signs-your-dog-is-stressed-and-how-to-relieve-it"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://vcahospitals.com/know-your-pet/signs-your-dog-is-stressed-and-how-to-relieve-it
              </a>
            </li>
            <li>
              Dare et al. (2023) open access: environmental enrichment in kenneled dogs and effects on stress-related behaviors:{' '}
              <a
                href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10177596/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://pmc.ncbi.nlm.nih.gov/articles/PMC10177596/
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
