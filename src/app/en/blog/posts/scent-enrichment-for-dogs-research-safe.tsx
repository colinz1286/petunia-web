'use client';

import Head from 'next/head';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function ScentEnrichmentForDogsResearchSafe() {
  const locale = useLocale();

  const title =
    'Scent Enrichment for Dogs: What Research Looks At (and How to Do It Safely)';
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
    'A comprehensive, evidence-informed guide to scent enrichment for dogs—what shelter and kennel research suggests, which approaches are safest, how to run low-risk sniff activities, and how to avoid common pitfalls like concentrated essential oils.';

  return (
    <>
      <Head>
        <title>{title} – Petunia Blog</title>
        <meta name="description" content={description} />
        <meta name="robots" content="all" />
        <link
          rel="canonical"
          href={`https://www.petuniapets.com/${locale}/blog/scent-enrichment-for-dogs-research-safe`}
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
              <a href="#what-is-scent-enrichment" className="underline hover:opacity-80">
                What It Is
              </a>
            </li>
            <li>
              <a href="#what-research-looks-at" className="underline hover:opacity-80">
                What Research Looks At
              </a>
            </li>
            <li>
              <a href="#what-the-evidence-suggests" className="underline hover:opacity-80">
                What Studies Suggest
              </a>
            </li>
            <li>
              <a href="#safe-methods" className="underline hover:opacity-80">
                Safe Methods
              </a>
            </li>
            <li>
              <a href="#essential-oils-caution" className="underline hover:opacity-80">
                Essential Oil Caution
              </a>
            </li>
            <li>
              <a href="#boarding-daycare-protocol" className="underline hover:opacity-80">
                Kennel Protocol
              </a>
            </li>
            <li>
              <a href="#tracking" className="underline hover:opacity-80">
                Tracking Results
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
            Scent enrichment is a low-cost way to help dogs cope with kennel life by giving them safe opportunities to
            sniff, investigate, and engage in species-typical behavior. Shelter research has tested approaches like
            lavender scent, dog-appeasing pheromone, and structured scent activities, with measurable changes in behavior
            (often more resting or calmer activity patterns) under specific conditions.
            The safest, most practical methods use <strong>food-based sniffing</strong> (snuffle mats, scatter feeding, towel rolls)
            and <strong>supervised scent games</strong> using dog-safe materials. Be cautious with concentrated essential oils:
            veterinary and animal welfare sources warn that some oils and potpourri products can be toxic to dogs via ingestion
            or skin exposure.
          </p>

          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Best starting point:</strong> Run short, supervised sniff sessions (5–10 minutes) during quiet blocks,
            rotate options to prevent boredom, and stop immediately if a dog shows avoidance, agitation, or tries to eat
            unsafe items.
          </div>
        </section>

        {/* WHAT IT IS */}
        <section id="what-is-scent-enrichment" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">What Scent Enrichment Is (and What It Is Not)</h2>
          <p className="mb-4">
            Scent enrichment is any safe setup that lets a dog use their nose in a calm, voluntary way. It can be as simple
            as a snuffle mat with kibble or as structured as a short &ldquo;find it&rdquo; search game. In kennel settings, the best
            scent enrichment has two goals:
          </p>

          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>
              <strong>Lower arousal:</strong> promote calmer, slower behavior patterns (sniffing, licking, resting) rather than frantic activity.
            </li>
            <li>
              <strong>Increase perceived control:</strong> give the dog a predictable, safe way to engage with their environment.
            </li>
          </ul>

          <p className="mb-4">
            What scent enrichment is <strong>not</strong>: it is not forcing a dog to smell something, flooding a room with fragrance,
            or using strong essential oils without careful risk assessment. More scent is not automatically better.
          </p>

          <p className="mb-4">
            This article is part of our kennel-stress cluster. If you want the complete system view (sound + scent + routine + choice),
            start with the pillar guide:{' '}
            <Link
              href={`/${locale}/blog/reducing-boarding-stress-sound-scent-routine-choice`}
              className="underline font-medium hover:opacity-80"
            >
              Reducing Boarding Stress: Evidence-Informed Enrichment
            </Link>
            .
          </p>
        </section>

        {/* WHAT RESEARCH LOOKS AT */}
        <section id="what-research-looks-at" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">What Research Typically Looks At in Kennels and Shelters</h2>
          <p className="mb-4">
            A lot of scent enrichment research comes from shelter contexts because shelters have clear welfare needs and
            standardized housing. Studies often evaluate:
          </p>

          <h3 className="text-lg font-semibold mb-2">Common study designs</h3>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>
              <strong>Specific scents:</strong> for example, lavender or herbal scents applied in controlled ways (diffusion or cloths).
            </li>
            <li>
              <strong>Pheromones:</strong> dog-appeasing pheromone (DAP) compared to controls.
            </li>
            <li>
              <strong>Behavioral outcomes:</strong> time resting, vocalization, pacing, engagement, approach/avoidance patterns.
            </li>
            <li>
              <strong>Physiologic outcomes:</strong> studies sometimes use heart rate variability or other markers to detect stress changes.
            </li>
          </ul>

          <p className="mb-4">
            A key caveat: many studies are short, sample sizes can be modest, and kennel environments vary widely. The most
            responsible way to use the evidence is to treat it as a guide for &ldquo;what might help&rdquo; and then run small,
            measurable trials in your own facility.
          </p>
        </section>

        {/* WHAT THE EVIDENCE SUGGESTS */}
        <section id="what-the-evidence-suggests" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">What Studies Suggest (and How to Interpret It Responsibly)</h2>
          <p className="mb-4">
            One shelter study tested lavender scent, dog-appeasing pheromone, music, and a control condition under shelter
            housing and reported differences in resting-related behaviors in the enriched groups compared to control.
            A related study examined physiologic effects using heart rate variability, highlighting that sensory enrichment can
            have measurable impacts beyond what we see casually.
          </p>

          <p className="mb-4">
            More recent research continues to explore which enrichment types are calming versus arousing in shelter dogs, including
            scent-based options as part of broader enrichment sets.
            These findings support a practical conclusion: scent enrichment is worth using, but it should be gentle, brief, and
            paired with routines that protect rest.
          </p>

          <div className="rounded-lg border border-[#d9cfc2] p-4 bg-[#f6efe4] mb-4">
            <h3 className="text-lg font-semibold mb-2">A conservative way to apply the evidence</h3>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Prefer <strong>low-risk sniffing activities</strong> over strong fragrances.</li>
              <li>Use <strong>short sessions</strong> that end while the dog is still calm (not frantic).</li>
              <li>Rotate enrichment types to prevent fatigue or over-fixation.</li>
              <li>Track changes in resting, barking, and recovery time rather than guessing.</li>
            </ul>
          </div>

          <p className="mb-4">
            Scent enrichment is most effective when it fits a calm routine. If you are also running auditory enrichment, pair this
            with the music guide in this cluster:{' '}
            <Link
              href={`/${locale}/blog/music-for-kennelled-dogs-studies-habituation`}
              className="underline font-medium hover:opacity-80"
            >
              Music for Kennelled Dogs: What Studies Suggest
            </Link>
            .
          </p>
        </section>

        {/* SAFE METHODS */}
        <section id="safe-methods" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Safe, Practical Scent Enrichment Methods You Can Use Today</h2>
          <p className="mb-4">
            The safest kennel scent enrichment uses items dogs can interact with safely and that staff can supervise easily.
            Most facilities do best with food-based sniffing and controlled &ldquo;search&rdquo; games rather than room-wide scent diffusion.
          </p>

          <h3 className="text-lg font-semibold mb-2">Low-risk, high-value options</h3>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>
              <strong>Snuffle mat meals:</strong> feed part of a meal in a snuffle mat to slow intake and promote sniffing.
            </li>
            <li>
              <strong>Scatter feeding:</strong> toss kibble across a clean surface or grass run (best for dogs who do not guard food).
            </li>
            <li>
              <strong>Towel roll search:</strong> roll kibble or treats into a towel and let the dog unroll (supervise, remove loose threads).
            </li>
            <li>
              <strong>&ldquo;Find it&rdquo; cups:</strong> hide a treat under one of several cups; let the dog choose (low intensity, short rounds).
            </li>
            <li>
              <strong>Scent box explore:</strong> a sturdy box with safe paper packing (no strings) and a few treats mixed in (supervised).
            </li>
          </ul>

          <h3 className="text-lg font-semibold mb-2">How to keep scent enrichment calming</h3>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>
              Keep sessions short (5–10 minutes) and end before the dog escalates into frantic digging or shredding.
            </li>
            <li>
              Pair with a settle period afterward (dim lights, fewer hallway triggers, calmer handling).
            </li>
            <li>
              Use predictable cues (same start phrase, same end phrase, same cleanup routine) to reduce uncertainty.
            </li>
          </ul>

          <p className="mb-4">
            If you want a structured rotation system (lick/chew/sniff) designed to avoid overstimulation, we&rsquo;re building it next:{' '}
            <Link
              href={`/${locale}/blog/enrichment-menus-rotate-lick-chew-sniff-without-overstimulating-dogs`}
              className="underline font-medium hover:opacity-80"
            >
              Enrichment Menus: Rotating Lick, Chew, and Sniff
            </Link>
            .
          </p>
        </section>

        {/* ESSENTIAL OILS CAUTION */}
        <section id="essential-oils-caution" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Safety First: Essential Oils, Diffusers, and Why Caution Is Warranted</h2>
          <p className="mb-4">
            Many people hear &ldquo;lavender scent&rdquo; in studies and assume that running essential oil diffusers is an easy
            answer. In real life, concentrated oils vary widely in purity and strength, and dogs can be exposed through
            ingestion, skin contact, and inhalation. Veterinary sources warn that some essential oils and liquid potpourri
            products can be poisonous to dogs, and that both ingestion and skin exposure can be toxic.
          </p>

          <h3 className="text-lg font-semibold mb-2">Practical warnings you should take seriously</h3>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>
              The ASPCA cautions that concentrated tea tree oil can cause problems for pets even in small amounts and advises avoiding direct application.
            </li>
            <li>
              Pet Poison Helpline (vetmeds.org) lists clinical signs for tea tree oil toxicity and states that exposures should be reported immediately.
            </li>
            <li>
              VCA warns that many essential oils and liquid potpourri products are poisonous to dogs and provides a list of oils of concern.
            </li>
            <li>
              An animal welfare organization (BC SPCA) also warns about risks from certain oils, including tea tree oil.
            </li>
          </ul>

          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Safer alternative:</strong> If you want &ldquo;scent enrichment,&rdquo; prioritize food-based sniff activities and
            supervised scent games. Avoid direct application of oils to dogs and avoid diffusing concentrated oils in shared kennel air
            unless you have veterinary guidance and a controlled protocol.
          </div>
        </section>

        {/* KENNEL PROTOCOL */}
        <section id="boarding-daycare-protocol" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">A Boarding and Daycare Scent Enrichment Protocol That Staff Can Actually Run</h2>
          <p className="mb-4">
            The best kennel protocols are simple, repeatable, and easy to document. Start with a small pilot (one wing,
            one time block) so staff can see what works before expanding facility-wide.
          </p>

          <h3 className="text-lg font-semibold mb-2">Step-by-step protocol</h3>
          <ol className="list-decimal pl-6 space-y-1 mb-4">
            <li>
              <strong>Pick a calm window:</strong> run scent enrichment during a planned quiet block (not during peak drop-off).
            </li>
            <li>
              <strong>Select a safe method:</strong> snuffle mat meal, scatter feeding, towel roll, or cup game.
            </li>
            <li>
              <strong>Set a timer:</strong> 5–10 minutes. End calmly before the dog escalates.
            </li>
            <li>
              <strong>Follow with rest:</strong> lights lower if possible, fewer hallway triggers, calm handling, and a predictable settle cue.
            </li>
            <li>
              <strong>Clean and reset:</strong> remove items, sanitize as appropriate, and document response in a quick note.
            </li>
          </ol>

          <h3 className="text-lg font-semibold mb-2">Contraindications and &ldquo;not today&rdquo; cases</h3>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>Dogs who swallow fabric, shred and ingest paper, or guard food aggressively (choose safer alternatives).</li>
            <li>Dogs in acute GI upset (keep routine simple until stable).</li>
            <li>Dogs who become frantic with sniff games (switch to calmer licking enrichment and shorten sessions).</li>
          </ul>

          <p className="mb-4">
            If your team is building out a broader stress-reduction routine, scent enrichment works best when it supports predictability and choice.
            The pillar guide walks through how these pieces fit together:{' '}
            <Link
              href={`/${locale}/blog/reducing-boarding-stress-sound-scent-routine-choice`}
              className="underline font-medium hover:opacity-80"
            >
              Reducing Boarding Stress: Evidence-Informed Enrichment
            </Link>
            .
          </p>
        </section>

        {/* TRACKING */}
        <section id="tracking" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">How to Track Whether Scent Enrichment Is Working</h2>
          <p className="mb-4">
            You do not need expensive tools. You need consistent observations. Track the same dogs at the same time window
            for a week, then compare with and without scent enrichment.
          </p>

          <h3 className="text-lg font-semibold mb-2">Simple metrics that matter</h3>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>Time to settle after the session (minutes)</li>
            <li>Resting posture frequency (lying down, head down)</li>
            <li>Barking frequency during the next hour</li>
            <li>Handling cooperation (leash, kennel exit, return)</li>
            <li>GI tolerance (any vomiting, diarrhea, appetite changes)</li>
          </ul>

          <p className="mb-4">
            We&rsquo;re building a plug-and-play settle score and notes system specifically for boarding/daycare operations here:{' '}
            <Link
              href={`/${locale}/blog/tracking-welfare-settle-score-notes-system`}
              className="underline font-medium hover:opacity-80"
            >
              Tracking Welfare Without Fancy Tools
            </Link>
            .
          </p>

          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>What success looks like:</strong> shorter recovery time after triggers, more resting, fewer sustained barking waves,
            and calmer transitions between kennel and yard.
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">Frequently Asked Questions</h2>

          <p className="mb-3">
            <strong>Is scent enrichment only for anxious dogs?</strong>
            <br />
            No. Most dogs benefit from safe sniff opportunities. The key is keeping it calm and appropriately supervised.
          </p>

          <p className="mb-3">
            <strong>If a study used lavender, does that mean I should diffuse lavender oil?</strong>
            <br />
            Not automatically. Real-world safety depends on concentration, ventilation, and exposure route. Veterinary sources warn that some essential oils can be toxic to dogs, and concentrated tea tree oil is specifically cautioned about by multiple sources.
          </p>

          <p className="mb-3">
            <strong>What is the safest scent enrichment for a boarding facility?</strong>
            <br />
            Food-based sniffing (snuffle mats, scatter feeding) and supervised short search games are usually safer than building-wide fragrance diffusion.
          </p>

          <p className="mb-3">
            <strong>What if a dog tries to eat the snuffle mat or towel?</strong>
            <br />
            Stop the session, remove the item, and switch to a safer option such as a slow feeder, a lick mat appropriate for supervision, or a controlled cup game.
          </p>

          <p>
            <strong>How does scent enrichment connect to sound enrichment?</strong>
            <br />
            They work best together during quiet blocks: calm music + sniff activity + predictable rest. For the music evidence and habituation considerations, see:{' '}
            <Link
              href={`/${locale}/blog/music-for-kennelled-dogs-studies-habituation`}
              className="underline font-medium hover:opacity-80"
            >
              Music for Kennelled Dogs
            </Link>
            .
          </p>
        </section>

        {/* SOURCES */}
        <section id="sources" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">📚 Sources &amp; Research References (Selected)</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            <li>
              Amaya et al. (2020): Effects of olfactory and auditory enrichment on shelter dogs (open access):{' '}
              <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC7222336/" target="_blank" rel="noopener noreferrer">
                https://pmc.ncbi.nlm.nih.gov/articles/PMC7222336/
              </a>{' '}
            </li>
            <li>
              PubMed record: Amaya et al. (2020) sensory enrichment study summary:{' '}
              <a href="https://pubmed.ncbi.nlm.nih.gov/32235593/" target="_blank" rel="noopener noreferrer">
                https://pubmed.ncbi.nlm.nih.gov/32235593/
              </a>{' '}
            </li>
            <li>
              PubMed: Heart rate variability effects of sensory enrichment (lavender, DAP, music):{' '}
              <a href="https://pubmed.ncbi.nlm.nih.gov/32785115/" target="_blank" rel="noopener noreferrer">
                https://pubmed.ncbi.nlm.nih.gov/32785115/
              </a>{' '}
            </li>
            <li>
              Dare et al. (2023): Environmental enrichment including scent items (open access):{' '}
              <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10177596/" target="_blank" rel="noopener noreferrer">
                https://pmc.ncbi.nlm.nih.gov/articles/PMC10177596/
              </a>{' '}
            </li>
            <li>
              Purdue Canine Welfare Center resource: influence of olfactory stimulation in rescue shelter dogs:{' '}
              <a
                href="https://caninewelfare.centers.purdue.edu/resource/the-influence-of-olfactory-stimulation-on-the-behaviour-of-dogs-housed-in-a-rescue-shelter/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://caninewelfare.centers.purdue.edu/resource/the-influence-of-olfactory-stimulation-on-the-behaviour-of-dogs-housed-in-a-rescue-shelter/
              </a>{' '}
            </li>
            <li>
              VCA: Essential oil and liquid potpourri poisoning in dogs:{' '}
              <a href="https://vcahospitals.com/know-your-pet/essential-oil-and-liquid-potpourri-poisoning-in-dogs" target="_blank" rel="noopener noreferrer">
                https://vcahospitals.com/know-your-pet/essential-oil-and-liquid-potpourri-poisoning-in-dogs
              </a>{' '}
            </li>
            <li>
              ASPCA: Essential oils around pets (risk and exposure cautions):{' '}
              <a href="https://www.aspca.org/news/essentials-essential-oils-around-pets" target="_blank" rel="noopener noreferrer">
                https://www.aspca.org/news/essentials-essential-oils-around-pets
              </a>{' '}
            </li>
            <li>
              Pet Poison Helpline (vetmeds.org): Tea tree oil toxicity signs:{' '}
              <a href="https://vetmeds.org/pet-poison-control-list/tea-tree-oil/" target="_blank" rel="noopener noreferrer">
                https://vetmeds.org/pet-poison-control-list/tea-tree-oil/
              </a>{' '}
            </li>
            <li>
              BC SPCA: Essential oils and pets safety alert:{' '}
              <a href="https://spca.bc.ca/news/aromatherapy-pets/" target="_blank" rel="noopener noreferrer">
                https://spca.bc.ca/news/aromatherapy-pets/
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
