'use client';

import Head from 'next/head';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function UKAnimalWelfareReformsPuppyFarms2025() {
  const locale = useLocale();

  const title =
    'UK Animal Welfare Reforms (2025): Puppy Farm Crackdown, Pet Protections, and What Changes Next';
  const date = 'December 23, 2025';
  const categories = ['owner', 'boarding', 'daycare'] as const;

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
    'A plain-English guide to the UK&#39;s newly announced animal welfare strategy (Dec 2025), with a focus on the puppy farm crackdown: what the reforms are, why they matter, timelines, and how dog owners can buy puppies safely.';

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
            <li>
              <a href="#tldr" className="underline hover:opacity-80">
                TL;DR
              </a>
            </li>
            <li>
              <a href="#what-was-announced" className="underline hover:opacity-80">
                What Was Announced
              </a>
            </li>
            <li>
              <a href="#why-puppy-farms-matter" className="underline hover:opacity-80">
                Why Puppy Farms Matter
              </a>
            </li>
            <li>
              <a href="#puppy-farm-crackdown" className="underline hover:opacity-80">
                The Puppy Farm Crackdown
              </a>
            </li>
            <li>
              <a href="#imports-and-smuggling" className="underline hover:opacity-80">
                Imports &amp; Smuggling
              </a>
            </li>
            <li>
              <a href="#what-owners-should-do" className="underline hover:opacity-80">
                What Owners Should Do
              </a>
            </li>
            <li>
              <a href="#impact-on-pet-services" className="underline hover:opacity-80">
                Impact on Daycare &amp; Boarding
              </a>
            </li>
            <li>
              <a href="#timeline" className="underline hover:opacity-80">
                Timeline &amp; What Happens Next
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
            In late December 2025, the UK Government announced a major Animal Welfare Strategy for England
            that ministers describe as the biggest set of reforms in a generation. The plan spans pets, farmed
            animals, wildlife, and enforcement. For dog owners, the headline is a tougher crackdown on
            low-welfare dog breeding (often called puppy farming) and tighter controls aimed at closing
            loopholes that allow irresponsible breeding, sourcing, and sales.
          </p>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>
              The strategy commits to reforming dog breeding practices, improving traceability, and ending
              low-welfare puppy production.
            </li>
            <li>
              The plan also builds on new anti-smuggling measures and proposes stronger rules around
              importing dogs and cats.
            </li>
            <li>
              Many changes will move through consultation and secondary legislation, so timing will depend
              on the final proposals and implementation plans.
            </li>
          </ul>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Legal note:</strong> This article is educational and not legal advice. Policies can evolve during
            consultation, and the UK has devolved governance (England, Scotland, Wales, Northern Ireland)
            where some rules can differ. Always check official government guidance for the latest position.
          </div>
        </section>

        {/* WHAT WAS ANNOUNCED */}
        <section id="what-was-announced" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">What the UK Announced</h2>
          <p className="mb-4">
            The UK Government announced a new Animal Welfare Strategy for England in December 2025,
            describing it as a generational step change in animal welfare. The published strategy sets out
            priorities to 2030 and includes actions across four broad areas: companion animals, wild animals,
            farmed animals, and international efforts.
          </p>

          <div className="rounded-lg border border-[#d9cfc2] p-4 bg-[#f6efe4] mb-4">
            <p className="mb-3">
              For pet owners, the companion animal portion matters most. It focuses on:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                Breeding and sourcing pets (including dog breeding traceability and welfare standards)
              </li>
              <li>
                Closing loopholes that allow poor-welfare practices to continue
              </li>
              <li>
                Strengthening enforcement so rules are meaningful in real life, not just on paper
              </li>
            </ul>
          </div>

          <p className="mb-4">
            The announcement also drew attention because it bundled many long-debated measures in one
            strategic package, including proposed changes impacting hunting practices, farm animal housing,
            and humane killing standards for certain species. While those topics extend beyond dogs, they
            help explain why the government and many commentators are calling it unusually wide-ranging.
          </p>
        </section>

        {/* WHY PUPPY FARMS MATTER */}
        <section id="why-puppy-farms-matter" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Why Puppy Farms Are a Public Concern</h2>
          <p className="mb-4">
            The phrase <em>puppy farm</em> is commonly used to describe intensive, profit-first breeding operations
            where breeding dogs can be kept in poor conditions and repeatedly bred, sometimes with
            inadequate veterinary care, enrichment, or socialization. Even when facilities meet a minimum
            legal threshold, high-volume production can create incentives to cut corners on welfare.
          </p>

          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>
              <strong>Health outcomes:</strong> poorly managed breeding increases risk of inherited disease, parasites,
              infectious disease exposure, and poor early-life care.
            </li>
            <li>
              <strong>Behavior and development:</strong> puppies raised without stable human contact and safe,
              age-appropriate handling can be more prone to fear, reactivity, and stress-related behavior.
            </li>
            <li>
              <strong>Consumer deception:</strong> third-party sales, online listings, or false provenance can hide where a
              puppy came from and what conditions the dam experienced.
            </li>
          </ul>

          <p className="mb-4">
            The strategy explicitly acknowledges that some people take advantage of loopholes in existing
            rules, and that enforcement and traceability are central to preventing low-welfare breeding and
            sourcing practices from persisting.
          </p>
        </section>

        {/* PUPPY FARM CRACKDOWN */}
        <section id="puppy-farm-crackdown" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">What &ldquo;Cracking Down on Puppy Farms&rdquo; Likely Means in Practice</h2>
          <p className="mb-4">
            The government&#39;s strategy is not a single line item called &ldquo;ban puppy farms.&rdquo; Instead, it lays out
            a set of tools designed to make low-welfare breeding harder to operate, easier to detect, and
            easier to prosecute or shut down. The document is very direct that many problematic breeders
            fall outside the existing licensing regime and that traceability needs to improve.
          </p>

          <div className="rounded-lg border border-[#d9cfc2] p-4 bg-[#f6efe4] mb-4">
            <h3 className="text-xl font-semibold mb-2">Key levers highlighted in the strategy</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                <strong>A proposed registration scheme for all dog breeders</strong> designed to dovetail with licensing,
                improving traceability and enforcement across the entire sector, not only high-volume breeders.
              </li>
              <li>
                <strong>Raising standards for licensed breeders</strong> so the minimum welfare bar is higher and better
                aligned to contemporary evidence.
              </li>
              <li>
                <strong>Bringing related services into scope</strong> such as canine fertility clinics, stud dog services, and
                whelping services, which can be linked to intensive breeding and welfare risk when poorly run.
              </li>
            </ul>
          </div>

          <p className="mb-4">
            In plain English: if every breeder is traceable, the &ldquo;invisible&rdquo; part of the market shrinks. When
            standards are clearer and broader, enforcement bodies can act earlier, and consumers can more
            easily verify legitimacy. That combination is how governments typically weaken the economic
            model behind low-welfare breeding.
          </p>

          <p className="mb-4">
            If you also run a pet-care business, you may want to compare these reforms to how regulation
            works in other jurisdictions. We cover how licensing and inspections typically function in a U.S.
            context in{' '}
            <Link
              href={`/${locale}/blog/dog-daycare-and-boarding-laws-by-state-2025`}
              className="underline hover:opacity-80"
            >
              Dog Daycare &amp; Boarding Laws by State (2025 Owner&#39;s Guide)
            </Link>
            .
          </p>
        </section>

        {/* IMPORTS AND SMUGGLING */}
        <section id="imports-and-smuggling" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Imports, Puppy Smuggling, and Closing Loopholes</h2>
          <p className="mb-4">
            The strategy frames low-welfare sourcing as both a domestic breeding issue and an import and
            smuggling issue. It points to the misuse of non-commercial pet travel rules as a cover for illegal
            importation of underage or poorly treated puppies and kittens, and notes concerns about
            imports involving painful mutilations (such as cropped ears) and heavily pregnant animals.
          </p>

          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>
              The government cites the Animal Welfare (Import of Dogs, Cats and Ferrets) Act 2025 as a key
              tool for closing loopholes and creating powers to tackle low-welfare imports.
            </li>
            <li>
              The strategy emphasizes that enforcement agencies need practical tools, guidance, and better
              intelligence-sharing to stop circumvention.
            </li>
          </ul>

          <p className="mb-4">
            This import focus matters to everyday buyers because smuggling and misrepresented imports can
            look like a &ldquo;local&rdquo; puppy sale online. Stronger controls are intended to reduce underage imports,
            risky transportation conditions, and trade-driven disease risks.
          </p>
        </section>

        {/* WHAT OWNERS SHOULD DO */}
        <section id="what-owners-should-do" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">What Dog Owners Should Do Right Now</h2>
          <p className="mb-4">
            Reforms take time, but your choices today still shape welfare outcomes. The safest strategy is to
            reduce the chance you unintentionally support low-welfare breeding by insisting on transparent,
            verifiable sourcing and prioritizing health and temperament over aesthetics and trends.
          </p>

          <div className="rounded-lg border border-[#d9cfc2] p-4 bg-[#f6efe4] mb-4">
            <h3 className="text-xl font-semibold mb-2">A practical &ldquo;safe puppy purchase&rdquo; checklist</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                <strong>Meet the puppy with the mother</strong> in the place the puppy was raised (not a parking lot,
                not a &ldquo;delivery&rdquo;).
              </li>
              <li>
                <strong>Ask for written health history</strong> and veterinary records appropriate to age, and confirm
                vaccination and parasite prevention steps.
              </li>
              <li>
                <strong>Look for transparency</strong> about breeding frequency, living conditions, socialization, and how
                puppies are matched to families.
              </li>
              <li>
                <strong>Be cautious with online-only sellers</strong> and pressure tactics. If someone will not answer
                basic questions, walk away.
              </li>
              <li>
                <strong>Consider adoption</strong> when possible, especially if your household can support a dog that may
                need decompression and training.
              </li>
            </ul>
          </div>

          <p className="mb-4">
            If you are evaluating a facility for boarding or daycare (or you run one), transparent health
            policies and clear intake standards matter for community-level welfare. Our owner-focused
            facility tour guide is here:{' '}
            <Link
              href={`/${locale}/blog/how-to-choose-a-good-dog-boarding-or-daycare-facility`}
              className="underline hover:opacity-80"
            >
              How to Choose a Good Dog Boarding or Daycare Facility
            </Link>
            .
          </p>
        </section>

        {/* IMPACT ON PET SERVICES */}
        <section id="impact-on-pet-services" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">What This Could Mean for Daycare, Boarding, and Grooming Businesses</h2>
          <p className="mb-4">
            Even though the reforms are not specifically about daycare or boarding operations, tightening
            breeding and sourcing standards has downstream effects on pet services. When more dogs are
            sourced responsibly, you tend to see fewer preventable health issues tied to poor early-life care,
            and better early socialization can reduce stress-related behaviors in group settings.
          </p>

          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>
              <strong>Intake standards may strengthen:</strong> owners may expect clearer policies on vaccines,
              parasite prevention, and behavioral screening.
            </li>
            <li>
              <strong>Documentation expectations rise:</strong> stronger national enforcement narratives often lead to
              more requests for written policies and incident handling protocols.
            </li>
            <li>
              <strong>Rescue and rehoming oversight:</strong> the strategy discusses considering new licenses for
              domestic rescue and rehoming organizations, which could influence intake partnerships.
            </li>
          </ul>

          <p className="mb-4">
            If you operate a facility, the best preparation is proactive: keep written standards, documented
            cleaning and isolation protocols, and consistent client communication. When regulation evolves,
            the most resilient businesses are the ones already running above the minimum.
          </p>
        </section>

        {/* TIMELINE */}
        <section id="timeline" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Timeline: What Happens Next</h2>
          <p className="mb-4">
            The strategy is a roadmap, and many commitments move forward through consultations,
            secondary legislation, and guidance updates. That means the exact dates will depend on the
            consultations the government launches, what final decisions are made, and how enforcement and
            compliance resources are deployed.
          </p>

          <div className="rounded-lg border border-[#d9cfc2] p-4 bg-[#f6efe4] mb-4">
            <h3 className="text-xl font-semibold mb-2">A realistic way to think about timing</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                <strong>Near term:</strong> announcements, publication of strategy, and initial consultations.
              </li>
              <li>
                <strong>Medium term:</strong> secondary legislation and guidance that clarify definitions, thresholds,
                and enforcement processes.
              </li>
              <li>
                <strong>Longer term:</strong> enforcement maturity (data-sharing, inspections, sanctions) and market
                behavior changes (more traceable sourcing, fewer low-welfare pathways).
              </li>
            </ul>
          </div>

          <p className="mb-4">
            For puppy buyers, the most important takeaway is that you do not need to wait for the law to
            change to avoid harmful sources. Your &ldquo;buying standard&rdquo; can be higher than the legal minimum.
          </p>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">Frequently Asked Questions</h2>

          <p className="mb-4">
            <strong>Does this mean puppy farms are immediately illegal everywhere in the UK?</strong>
            <br />
            Not necessarily overnight. The strategy describes the direction of travel and includes planned
            consultations and regulatory changes. Some measures may already exist in parts of the UK, while
            others require additional legal steps before they take effect.
          </p>

          <p className="mb-4">
            <strong>What is the main enforcement problem the government is trying to solve?</strong>
            <br />
            The strategy argues that too many breeders fall outside current licensing, creating gaps in
            traceability and making it harder to investigate or act against low-welfare operations. It also
            emphasizes improving coordination, transparency, and capability across enforcement bodies.
          </p>

          <p className="mb-4">
            <strong>How does this relate to puppy smuggling and imports?</strong>
            <br />
            The strategy treats low-welfare sourcing as both domestic and cross-border. It references the
            Animal Welfare (Import of Dogs, Cats and Ferrets) Act 2025 and signals further work through
            secondary legislation to prevent underage, heavily pregnant, or mutilated animals from entering
            low-welfare supply chains.
          </p>

          <p className="mb-4">
            <strong>Will this change what I see when buying a puppy?</strong>
            <br />
            Over time, stronger traceability and broader oversight should make it harder for irresponsible
            sellers to hide. But the safest approach remains the same: insist on meeting the puppy with the
            mother, verify provenance, and walk away from pressure tactics or vague answers.
          </p>

          <p>
            <strong>What should pet-care businesses do?</strong>
            <br />
            Keep standards written, consistent, and verifiable: vaccination policies, isolation procedures,
            incident documentation, and staff training. When regulation tightens anywhere in the ecosystem,
            businesses that already run above the minimum are best positioned to adapt.
          </p>
        </section>

        {/* SOURCES */}
        <section id="sources" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">📚 Sources &amp; Official References</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            <li>
              UK Government (Defra) announcement: biggest animal welfare reforms in a generation:{' '}
              <a
                href="https://www.gov.uk/government/news/defra-announces-biggest-animal-welfare-reforms-in-a-generation"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.gov.uk/government/news/defra-announces-biggest-animal-welfare-reforms-in-a-generation
              </a>
            </li>
            <li>
              Animal Welfare Strategy for England (GOV.UK landing page):{' '}
              <a
                href="https://www.gov.uk/government/publications/animal-welfare-strategy-for-england/animal-welfare-strategy-for-england"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.gov.uk/government/publications/animal-welfare-strategy-for-england/animal-welfare-strategy-for-england
              </a>
            </li>
            <li>
              Animal Welfare Strategy for England (PDF):{' '}
              <a
                href="https://assets.publishing.service.gov.uk/media/694560bd3022cdf03a0eb81c/E03517059_-_CP_1474_Animal_Welfare_Strategy_Accessible.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://assets.publishing.service.gov.uk/.../Animal_Welfare_Strategy_Accessible.pdf
              </a>
            </li>
            <li>
              UK Government: pet smuggling crackdown and Animal Welfare (Import of Dogs, Cats and Ferrets) Act 2025:{' '}
              <a
                href="https://www.gov.uk/government/news/pet-smuggling-crackdown-with-new-law"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.gov.uk/government/news/pet-smuggling-crackdown-with-new-law
              </a>
            </li>
            <li>
              House of Commons Library briefing (bill background and measures):{' '}
              <a
                href="https://commonslibrary.parliament.uk/research-briefings/cbp-10294/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://commonslibrary.parliament.uk/research-briefings/cbp-10294/
              </a>
            </li>
            <li>
              Sky News summary and reaction coverage (Dec 2025):{' '}
              <a
                href="https://news.sky.com/story/puppy-farming-and-trail-hunting-to-be-banned-but-critics-warn-of-war-on-the-countryside-13486579"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://news.sky.com/story/...-13486579
              </a>
            </li>
            <li>
              British Veterinary Association reaction statement (Dec 2025):{' '}
              <a
                href="https://www.bva.co.uk/news-and-blog/news-article/government-s-new-animal-welfare-strategy-positive-step-towards-improving-the-lives-of-millions-of-animals/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.bva.co.uk/.../animal-welfare-strategy-positive-step...
              </a>
            </li>
            <li>
              Financial Times reporting on the wider reforms bundle (Dec 2025):{' '}
              <a
                href="https://www.ft.com/content/8b0796ac-70db-4a4d-8da6-ef9921469b76"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.ft.com/content/8b0796ac-70db-4a4d-8da6-ef9921469b76
              </a>
            </li>
          </ul>

          <p className="mt-4 text-xs text-gray-600">
            Note: During drafting, the PDF screenshot tool returned a validation error in this environment,
            so this article relies on the official GOV.UK strategy page and the PDF&#39;s accessible text content
            as provided by GOV.UK, plus reputable reporting and professional reaction sources.
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