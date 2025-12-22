'use client';

import Head from 'next/head';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function WhatToPackForANervousDogScentItemsSleepSetupAndFamiliarCues() {
  const locale = useLocale();

  const title =
    'What to Pack for a Nervous Dog: Scent Items, Sleep Setup, and Familiar Cues';
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
    'A thorough packing guide for nervous boarding dogs: which scent items help most, how to set up sleep and routine cues, and what to avoid to prevent stress and GI upset.';

  return (
    <>
      <Head>
        <title>{title} – Petunia Blog</title>
        <meta name="description" content={description} />
        <meta name="robots" content="all" />
        <link
          rel="canonical"
          href={`https://www.petuniapets.com/${locale}/blog/what-to-pack-for-a-nervous-dog-scent-items-sleep-setup-and-familiar-cues`}
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

        {/* Table of Contents */}
        <nav className="mb-8 text-sm">
          <ul className="flex flex-wrap gap-3">
            <li>
              <a href="#tldr" className="underline hover:opacity-80">
                TL;DR
              </a>
            </li>
            <li>
              <a href="#why-packing-matters" className="underline hover:opacity-80">
                Why Packing Matters
              </a>
            </li>
            <li>
              <a href="#the-goal" className="underline hover:opacity-80">
                The Goal
              </a>
            </li>
            <li>
              <a href="#scent-items" className="underline hover:opacity-80">
                Scent Items
              </a>
            </li>
            <li>
              <a href="#sleep-setup" className="underline hover:opacity-80">
                Sleep Setup
              </a>
            </li>
            <li>
              <a href="#food-and-gi" className="underline hover:opacity-80">
                Food and GI Stability
              </a>
            </li>
            <li>
              <a href="#routine-cues" className="underline hover:opacity-80">
                Familiar Cues
              </a>
            </li>
            <li>
              <a href="#what-to-avoid" className="underline hover:opacity-80">
                What to Avoid
              </a>
            </li>
            <li>
              <a href="#facility-handoff" className="underline hover:opacity-80">
                Facility Handoff
              </a>
            </li>
            <li>
              <a href="#after-pickup" className="underline hover:opacity-80">
                After Pickup
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
            Pack for a nervous dog with one goal: make the boarding environment feel more predictable and familiar, without adding
            risky items that can be swallowed or trigger GI upset. The highest-value items are your dog&rsquo;s normal food, any medications
            with clear instructions, and one or two safe, familiar scent and sleep cues (a bed or blanket that smells like home, plus a
            simple comfort item). Keep it minimal, safe, and consistent.
          </p>

          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Best rule:</strong> Bring fewer items, but choose the right ones. Familiar scent + familiar sleep setup + stable food
            typically helps more than a bag of new toys.
          </div>
        </section>

        {/* WHY PACKING MATTERS */}
        <section id="why-packing-matters" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Why Packing Matters More for Nervous Dogs</h2>
          <p className="mb-4">
            Nervous dogs struggle most with uncertainty: new smells, new people, unfamiliar routines, and the background noise of a kennel.
            Packing can reduce uncertainty by carrying pieces of home into the stay. Many veterinary and pet-care resources recommend packing
            familiar items like a blanket or toy and bringing your dog&rsquo;s usual food to avoid stomach upset.
          </p>

          <p className="mb-4">
            The best packing strategy is not &ldquo;more stuff.&rdquo; It is &ldquo;the right cues.&rdquo; Familiar scent and a predictable sleep setup can
            support rest, while stable food and clear instructions reduce avoidable stressors.
          </p>

          <p className="mb-4">
            This article is part of our boarding stress cluster. For the big-picture system (sound + scent + routine + choice), start here:{' '}
            <Link
              href={`/${locale}/blog/reducing-boarding-stress-sound-scent-routine-choice`}
              className="underline font-medium hover:opacity-80"
            >
              Reducing Boarding Stress: Sound, Scent, Routine, and Choice
            </Link>
            .
          </p>
        </section>

        {/* THE GOAL */}
        <section id="the-goal" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">The Goal: Familiarity Without New Risk</h2>
          <p className="mb-4">
            When you pack for a nervous dog, you are trying to accomplish three things:
          </p>

          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>
              <strong>Lower novelty:</strong> give your dog familiar scent and familiar textures.
            </li>
            <li>
              <strong>Protect sleep:</strong> help your dog settle into rest blocks.
            </li>
            <li>
              <strong>Stabilize the body:</strong> keep food, meds, and GI routines consistent.
            </li>
          </ul>

          <p className="mb-4">
            This is also why predictability matters more than random &ldquo;extra attention.&rdquo; If your dog is nervous at boarding, a consistent routine
            usually calms them faster than unpredictable visits and stimulation. For that full explanation, see:{' '}
            <Link
              href={`/${locale}/blog/predictability-beats-extra-attention-why-consistent-routines-calm-nervous-boarders`}
              className="underline font-medium hover:opacity-80"
            >
              Predictability Beats &ldquo;Extra Attention&rdquo;
            </Link>
            .
          </p>
        </section>

        {/* SCENT ITEMS */}
        <section id="scent-items" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Scent Items: The Highest-Value Comfort Tool</h2>
          <p className="mb-4">
            Dogs live in a scent-first world. A familiar-smelling item can function like an emotional anchor: it does not remove the boarding environment,
            but it brings something stable into it. Major pet resources commonly recommend bringing a blanket, bedding, or even a worn piece of clothing to
            carry familiar scent, especially for dogs who may feel homesick.
          </p>

          <h3 className="text-lg font-semibold mb-2">Best scent items to pack (safe and practical)</h3>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>
              <strong>Home blanket:</strong> washed in your normal detergent and used at home for several nights before boarding.
            </li>
            <li>
              <strong>Dog bed cover or crate mat cover:</strong> a familiar layer that smells like your home environment.
            </li>
            <li>
              <strong>Worn cotton T-shirt:</strong> simple, familiar, easy to replace (ask your facility if this is allowed).
            </li>
          </ul>

          <h3 className="text-lg font-semibold mb-2">How to choose the right scent item</h3>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>
              Choose <strong>durable</strong> items that your dog does not shred and swallow.
            </li>
            <li>
              Avoid strings, ribbons, or anything that can create ingestion risk.
            </li>
            <li>
              Pack <strong>one or two</strong> scent items, not five. Too many items often become management problems.
            </li>
          </ul>

          <p className="mb-4">
            If you want the deeper evidence-informed view of safe scent enrichment (including what to avoid), see:{' '}
            <Link
              href={`/${locale}/blog/scent-enrichment-for-dogs-research-safe`}
              className="underline font-medium hover:opacity-80"
            >
              Scent Enrichment for Dogs: What Research Looks At (and How to Do It Safely)
            </Link>
            .
          </p>

          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Pro tip:</strong> If your dog chews bedding, ask your facility for their safest &ldquo;comfort alternative&rdquo; (for example,
            a safer mat option or a supervised comfort period instead of overnight bedding).
          </div>
        </section>

        {/* SLEEP SETUP */}
        <section id="sleep-setup" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Sleep Setup: Pack for Rest, Not Entertainment</h2>
          <p className="mb-4">
            Many nervous dogs struggle most at night because the environment is unfamiliar and the dog is processing a full day of stimulation. Your packing list
            should support sleep and predictability. AAHA guidance on boarding preparation includes packing necessities that support comfort, such as familiar items,
            while also emphasizing practical essentials like food and meds.
          </p>

          <h3 className="text-lg font-semibold mb-2">Sleep items that tend to help</h3>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>
              <strong>Familiar bedding layer:</strong> a blanket or mat cover that smells like home.
            </li>
            <li>
              <strong>Crate cue:</strong> if your dog sleeps in a crate at home, ask if the facility supports a similar setup.
            </li>
            <li>
              <strong>Night routine notes:</strong> your dog&rsquo;s bedtime cues (last potty timing, lights, white noise, calm cue words).
            </li>
          </ul>

          <h3 className="text-lg font-semibold mb-2">What matters more than any object</h3>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>
              <strong>Consistency:</strong> similar bedtime timing and similar handling sequence.
            </li>
            <li>
              <strong>Protected rest blocks:</strong> fewer surprises, fewer pass-bys, calmer transitions.
            </li>
          </ul>

          <p className="mb-4">
            If your dog comes home exhausted, clingy, or &ldquo;off,&rdquo; that often reflects how much recovery they needed. The after-boarding decompression
            window is normal for many dogs. For a thorough plan, see:{' '}
            <Link
              href={`/${locale}/blog/decompression-after-boarding-why-dogs-seem-tired-clingy-or-off-at-home`}
              className="underline font-medium hover:opacity-80"
            >
              Decompression After Boarding: Why Dogs Seem Tired, Clingy, or Off
            </Link>
            .
          </p>
        </section>

        {/* FOOD AND GI */}
        <section id="food-and-gi" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Food and GI Stability: The Fastest Way to Avoid an &ldquo;Off&rdquo; Stay</h2>
          <p className="mb-4">
            A huge percentage of post-boarding owner stress is actually GI-related: soft stool, appetite changes, or vomiting. Even when stress is the root,
            changing food makes it worse. Multiple boarding prep guides recommend bringing your dog&rsquo;s regular food to avoid digestive upset and to keep routines
            stable during the stay.
          </p>

          <h3 className="text-lg font-semibold mb-2">What to pack for food stability</h3>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>
              <strong>Enough normal food plus extra:</strong> pack a buffer for delays and a clear feeding amount.
            </li>
            <li>
              <strong>Measured portions:</strong> pre-portion meals if your dog is sensitive or prone to overeating.
            </li>
            <li>
              <strong>Approved treats only:</strong> keep treats simple and consistent with what your dog already tolerates.
            </li>
            <li>
              <strong>Feeding instructions:</strong> timing, picky-eater notes, and any bowl preferences.
            </li>
          </ul>

          <h3 className="text-lg font-semibold mb-2">Medications and supplements</h3>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>
              Send meds in original packaging when possible, clearly labeled with dose and timing.
            </li>
            <li>
              Include a printed list of medication instructions and your veterinarian&rsquo;s contact information.
            </li>
            <li>
              If your dog has a history of stress diarrhea, ask your veterinarian about a plan before boarding.
            </li>
          </ul>

          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Simple rule:</strong> Do not add new chews, rich treats, or new foods right before boarding. Stability beats novelty.
          </div>
        </section>

        {/* ROUTINE CUES */}
        <section id="routine-cues" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Familiar Cues: Tiny Notes That Create Predictability</h2>
          <p className="mb-4">
            Nervous dogs improve when staff can replicate pieces of the dog&rsquo;s home rhythm. The good news is that you can pack predictability without packing
            objects. You pack it as a short routine sheet.
          </p>

          <h3 className="text-lg font-semibold mb-2">The one-page &ldquo;nervous dog cue sheet&rdquo; to include</h3>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>
              <strong>Potty pattern:</strong> typical times, any cues (word or hand signal), and whether your dog prefers grass, mulch, or walks.
            </li>
            <li>
              <strong>Sleep routine:</strong> bedtime cue, whether lights off matters, and whether your dog sleeps with background sound at home.
            </li>
            <li>
              <strong>Handling preferences:</strong> sensitive areas, collar shyness, towel sensitivity, or fear of carts.
            </li>
            <li>
              <strong>Soothing activities:</strong> sniff walk, food puzzle, short lick session, gentle brushing if your dog likes it.
            </li>
            <li>
              <strong>Not helpful:</strong> what escalates your dog (busy greetings, loud voices, dogs passing close to the kennel).
            </li>
          </ul>

          <p className="mb-4">
            If your facility is working on reducing stress through routine, sound, and scent, this cue sheet plugs into that system. The routines that calm nervous
            dogs are predictable and repeatable. For a deep explanation of why this beats random &ldquo;extra attention,&rdquo; see:{' '}
            <Link
              href={`/${locale}/blog/predictability-beats-extra-attention-why-consistent-routines-calm-nervous-boarders`}
              className="underline font-medium hover:opacity-80"
            >
              Predictability Beats &ldquo;Extra Attention&rdquo;
            </Link>
            .
          </p>
        </section>

        {/* WHAT TO AVOID */}
        <section id="what-to-avoid" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">What to Avoid Packing for Nervous Dogs</h2>
          <p className="mb-4">
            Nervous dogs are often more likely to chew, shred, or ingest items when stressed. That means your packing list should remove common risk items.
          </p>

          <h3 className="text-lg font-semibold mb-2">Avoid these common mistakes</h3>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>
              <strong>Stringy toys and rope toys:</strong> higher ingestion risk if shredded.
            </li>
            <li>
              <strong>Multiple new toys:</strong> novelty can increase arousal and increase guarding behavior.
            </li>
            <li>
              <strong>Rich new treats or chews:</strong> a common trigger for GI upset.
            </li>
            <li>
              <strong>Strong fragrances or oils:</strong> especially concentrated essential oils; safety guidance commonly emphasizes caution with exposure and ingestion risks.
            </li>
          </ul>

          <h3 className="text-lg font-semibold mb-2">A note about pheromone products</h3>
          <p className="mb-4">
            Some facilities and owners consider dog-appeasing pheromone products. Evidence summaries note mixed strength depending on context, with some indications
            of reduced barking intensity or relaxation-related behavior in shelter settings under certain conditions.
            If you plan to use any pheromone product, coordinate with your facility so it is implemented consistently and safely.
          </p>

          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Bottom line:</strong> Familiar scent items are different from strong added fragrances. A worn cotton item or home blanket is a safer comfort cue
            than adding concentrated scents.
          </div>
        </section>

        {/* FACILITY HANDOFF */}
        <section id="facility-handoff" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Facility Handoff: How to Pack So Staff Can Succeed</h2>
          <p className="mb-4">
            The best packing list fails if it is not usable. Your goal is to make it easy for staff to follow your dog&rsquo;s routine and to minimize mistakes.
            Use clear labeling, a simple checklist, and short instructions.
          </p>

          <h3 className="text-lg font-semibold mb-2">The boarding bag checklist (practical and staff-friendly)</h3>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>
              Food in labeled portions (or a measuring scoop) + feeding instructions
            </li>
            <li>
              Medications with dose and timing + printed instructions
            </li>
            <li>
              One scent item (blanket or worn cotton item) approved by the facility
            </li>
            <li>
              One settle-friendly item if allowed (for example: a safe mat cover)
            </li>
            <li>
              Updated identification information and emergency contacts
            </li>
          </ul>

          <p className="mb-4">
            Many resources recommend packing essentials like food, meds, and comfort items (blanket or toy) for boarding stays, and ensuring identification is current.
            Keep the bag minimal and clear.
          </p>

          <p className="mb-4">
            If your facility also runs sound routines during quiet blocks, align expectations so your dog receives consistent cues. Our evidence-informed music guide is here:{' '}
            <Link
              href={`/${locale}/blog/music-for-kennelled-dogs-studies-habituation`}
              className="underline font-medium hover:opacity-80"
            >
              Music for Kennelled Dogs: What Studies Suggest
            </Link>
            .
          </p>
        </section>

        {/* AFTER PICKUP */}
        <section id="after-pickup" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">After Pickup: Your Packing List Also Shapes Decompression</h2>
          <p className="mb-4">
            Packing does not end at drop-off. What you pack and how you structure the stay can influence how your dog feels after pickup. When a dog returns home
            and seems tired, clingy, or slightly &ldquo;off,&rdquo; it is often recovery. The fastest way to help is to keep the first couple days quiet and predictable.
          </p>

          <h3 className="text-lg font-semibold mb-2">Post-boarding decompression basics</h3>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>
              Protect sleep and keep the environment calm
            </li>
            <li>
              Use simple sniff walks and familiar routines
            </li>
            <li>
              Avoid big social events and high-arousal outings for a day or two
            </li>
          </ul>

          <p className="mb-4">
            <strong>One to two paragraph conclusion:</strong> Packing for a nervous dog is not about comforting them with more objects. It is about creating familiarity
            and predictability in a new environment. The highest-value items are stable food, clear medication instructions, and one or two safe scent and sleep cues that
            help your dog rest. When you pack thoughtfully and coordinate with your facility, nervous dogs often settle faster, bark less, and come home in a better
            emotional state. For most dogs, small consistent cues beat big one-time gestures.
          </p>

          <p className="mb-4">
            If you want a complete nervous-dog boarding strategy built around predictability, calm enrichment, and recovery, start here:{' '}
            <Link
              href={`/${locale}/blog/reducing-boarding-stress-sound-scent-routine-choice`}
              className="underline font-medium hover:opacity-80"
            >
              Reducing Boarding Stress: Sound, Scent, Routine, and Choice
            </Link>
            .
          </p>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">Frequently Asked Questions</h2>

          <p className="mb-3">
            <strong>Should I pack a worn shirt for my dog?</strong>
            <br />
            Many pet resources suggest a worn cotton item can carry familiar scent and be soothing, but always confirm your facility&rsquo;s policy and avoid anything
            your dog might shred and swallow.
          </p>

          <p className="mb-3">
            <strong>Should I pack a lot of toys so my dog is not bored?</strong>
            <br />
            Usually no for nervous dogs. Too many toys can increase arousal and create ingestion risk. One safe comfort item is typically better than a bag of novelty.
          </p>

          <p className="mb-3">
            <strong>Can I use essential oils to calm my dog during boarding?</strong>
            <br />
            Be cautious. Guidance about pets and essential oils emphasizes potential risks through inhalation, skin exposure, and ingestion, and recommends avoiding
            unsafe exposure patterns. If you want scent support, a familiar blanket is a safer starting point.
          </p>

          <p>
            <strong>What if my dog comes home exhausted?</strong>
            <br />
            Decompression after boarding is common. Focus on a quiet routine and sleep for 24–72 hours, and watch for medical red flags if symptoms worsen.
          </p>
        </section>

        {/* SOURCES */}
        <section id="sources" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">📚 Sources &amp; Research References (Selected)</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            <li>
              AAHA: Tips to prepare for boarding (packing necessities, comfort items, identification):{' '}
              <a href="https://www.aaha.org/resources/6-tips-to-prepare-your-pet-for-summertime-boarding/" target="_blank" rel="noopener noreferrer">
                https://www.aaha.org/resources/6-tips-to-prepare-your-pet-for-summertime-boarding/
              </a>{' '}
            </li>
            <li>
              AKC: What to pack when boarding a dog (includes familiar scent items like a worn shirt):{' '}
              <a href="https://www.akc.org/expert-advice/travel/things-pack-when-board-your-dog/" target="_blank" rel="noopener noreferrer">
                https://www.akc.org/expert-advice/travel/things-pack-when-board-your-dog/
              </a>{' '}
            </li>
            <li>
              AVMA: Traveling with your pet FAQ (documentation and planning considerations):{' '}
              <a href="https://www.avma.org/resources-tools/pet-owners/petcare/traveling-your-pet-faq" target="_blank" rel="noopener noreferrer">
                https://www.avma.org/resources-tools/pet-owners/petcare/traveling-your-pet-faq
              </a>{' '}
            </li>
            <li>
              Veterinary Evidence (2021): Summary of evidence on dog-appeasing pheromone across contexts, including mild evidence in shelter dogs:{' '}
              <a href="https://veterinaryevidence.org/index.php/ve/article/view/421" target="_blank" rel="noopener noreferrer">
                https://veterinaryevidence.org/index.php/ve/article/view/421
              </a>{' '}
            </li>
            <li>
              NIH open access (2010): Dog-appeasing pheromone clinical research background and reported effects in several contexts:{' '}
              <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC2839826/" target="_blank" rel="noopener noreferrer">
                https://pmc.ncbi.nlm.nih.gov/articles/PMC2839826/
              </a>{' '}
            </li>
            <li>
              SELF: Veterinary expert discussion of essential oil risks for pets (inhalation, dermal, ingestion):{' '}
              <a href="https://www.self.com/story/pets-essential-oils-diffusers" target="_blank" rel="noopener noreferrer">
                https://www.self.com/story/pets-essential-oils-diffusers
              </a>{' '}
            </li>
            <li>
              Boarding prep guide: Bring normal food and familiar items to reduce anxiety (example veterinary practice):{' '}
              <a href="https://www.oldetowneanimalhosp.com/prepare-your-pet-for-boarding-stay/" target="_blank" rel="noopener noreferrer">
                https://www.oldetowneanimalhosp.com/prepare-your-pet-for-boarding-stay/
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
