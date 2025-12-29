'use client';

import Head from 'next/head';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function UkAnimalWelfareReforms2025() {
  const locale = useLocale();

  const title =
    'UK Animal Welfare Reforms (2025): Puppy Farming Crackdown, Higher Dog Breeding Standards, and What Changes Next';
  const date = 'December 28, 2025';
  const categories = ['owner', 'breeder'] as const;

  const categoryLabels: Record<string, string> = {
    owner: 'Pet Owners',
    boarding: 'Boarding',
    daycare: 'Daycare',
    rescue: 'Rescues',
    veterinary: 'Veterinary Clinics',
    sitter: 'Pet Sitters',
    walker: 'Dog Walkers',
    breeder: 'Breeders',
    breed_specific_guides: 'Breed Specific Guides',
  };

  const description =
    'Plain-English, owner-first breakdown of the UK Animal Welfare Strategy (Dec 2025): proposed actions to curb low-welfare dog breeding and puppy farming, improve traceability and enforcement, regulate breeding-related services, and phase out certain cruel practices (plus what to watch in 2026).';

  const canonicalPath = 'uk-animal-welfare-reforms-2025-puppy-farming-dog-breeding-standards';

  return (
    <>
      <Head>
        <title>{title} – Petunia Blog</title>
        <meta name="description" content={description} />
        <meta name="robots" content="all" />
        <link rel="canonical" href={`https://www.petuniapets.com/${locale}/blog/${canonicalPath}`} />
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
              <a href="#tl-dr" className="underline hover:opacity-80">
                TL;DR
              </a>
            </li>
            <li>
              <a href="#what-was-announced" className="underline hover:opacity-80">
                What Was Announced
              </a>
            </li>
            <li>
              <a href="#how-strategy-works" className="underline hover:opacity-80">
                How This Works
              </a>
            </li>
            <li>
              <a href="#dog-breeding" className="underline hover:opacity-80">
                Dog Breeding &amp; Puppy Farming
              </a>
            </li>
            <li>
              <a href="#traceability" className="underline hover:opacity-80">
                Traceability &amp; Enforcement
              </a>
            </li>
            <li>
              <a href="#wider-reforms" className="underline hover:opacity-80">
                Wider Reforms
              </a>
            </li>
            <li>
              <a href="#what-owners-do" className="underline hover:opacity-80">
                What Owners Should Do
              </a>
            </li>
            <li>
              <a href="#what-breeders-do" className="underline hover:opacity-80">
                What Breeders Should Do
              </a>
            </li>
            <li>
              <a href="#timeline" className="underline hover:opacity-80">
                Timeline &amp; What to Watch
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
            On December 21–22, 2025, Defra announced and published the Animal Welfare Strategy for England. For dog
            owners and breeders, the clearest takeaway is direction: the government intends to curb low-welfare dog
            breeding and puppy farming by improving traceability and closing loopholes that let harmful supply chains
            operate outside current licensing thresholds. The Strategy also outlines wider reforms for wildlife and
            farmed-animal welfare, including commitments to ban certain practices and launch consultations in 2026.
          </p>

          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Practical note:</strong> This is a Strategy (a policy program), not a single new law that changes
            everything overnight. Some measures require consultations and future regulations or legislation. If you are
            buying a puppy, the immediate move is to prioritize traceable sourcing and transparency. If you are a breeder
            or seller, the immediate move is to tighten documentation, welfare protocols, and readiness for registration
            and expanded oversight.
          </div>
        </section>

        {/* What was announced */}
        <section id="what-was-announced" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">What Was Announced (and Why It Matters)</h2>
          <p className="mb-3">
            Defra published a government announcement on December 21, 2025 describing a major animal-welfare reform
            package and stating that the Animal Welfare Strategy would launch the next day. The Strategy was published on
            December 22, 2025 and sets out a program of actions to improve welfare across pets, farmed animals, and
            wildlife.
          </p>
          <p className="mb-3">
            For dog owners, the Strategy matters because it signals a stronger push toward traceability, clearer minimum
            standards, and fewer loopholes around breeding and sale. For reputable breeders, it can also matter for a
            different reason: reforms often create clearer separation between responsible operators and exploitative
            high-volume or low-welfare supply.
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              The Strategy is explicitly framed as a plan for England, though some actions may interact with UK-wide
              frameworks depending on how they are implemented.
            </li>
            <li>
              Many items are described as consultations or proposals, meaning details can change after stakeholder input.
            </li>
            <li>
              The most immediate effect is directional: buyers and sellers should expect increasing expectations around
              transparency and compliance.
            </li>
          </ul>
        </section>

        {/* How strategy works */}
        <section id="how-strategy-works" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">How This Strategy Turns Into Real-World Rules</h2>
          <p className="mb-3">
            In the simplest terms, a published Strategy tells you what the government intends to do and how it plans to
            get there. Implementation usually happens in several stages:
          </p>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>
              <strong>Consultations:</strong> government asks for input on the exact wording and scope (who is covered,
              what standards apply, what enforcement tools are needed).
            </li>
            <li>
              <strong>Regulations:</strong> new rules under existing legal frameworks (often the fastest route).
            </li>
            <li>
              <strong>Legislation:</strong> where primary law changes are required (often slower, but more durable).
            </li>
            <li>
              <strong>Guidance and enforcement alignment:</strong> clearer expectations for inspections, documentation,
              and compliance.
            </li>
          </ul>
          <p className="text-sm text-gray-600">
            Translation: treat the Strategy as a roadmap. If you want to anticipate what will matter later, focus on the
            problem it is trying to solve (low-welfare supply and weak traceability), because that tells you what future
            requirements will likely emphasize.
          </p>
        </section>

        {/* Dog breeding */}
        <section id="dog-breeding" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Dog Breeding &amp; Puppy Farming: What the Strategy Proposes</h2>
          <p className="mb-3">
            The Strategy includes an explicit plan to launch consultations on dog-breeding reforms aimed at improving
            traceability and enforcement across the whole sector. The core logic is straightforward: if harmful breeding
            operations can avoid licensing or operate through channels that are hard to track, welfare harm persists.
          </p>

          <h3 className="text-xl font-semibold mb-2">The big three proposals (as written)</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>
              <strong>A registration scheme for all dog breeders:</strong> intended to work alongside the existing
              licensing system so the entire sector becomes easier to trace and regulate.
            </li>
            <li>
              <strong>Upgraded health and welfare standards for licensed dog breeders:</strong> raising the baseline for
              what licensed breeders must meet.
            </li>
            <li>
              <strong>Bringing breeding-adjacent services into scope:</strong> proposals to include canine fertility
              clinics, stud-dog services, and whelping services in the licensing system.
            </li>
          </ul>

          <p className="mb-3">
            If you are reading this as an owner: the word &ldquo;registration&rdquo; sounds abstract, but it usually
            translates into fewer anonymous sales, more consistent paperwork, and clearer accountability when something
            goes wrong. If you are reading this as a breeder: the highest-value preparation is to run your program like
            it will be audited tomorrow, even if you are already doing everything right.
          </p>

          <p className="mb-3">
            If you are weighing adoption versus buying from a breeder and want a calm decision framework, see:{' '}
            <Link
              href={`/${locale}/blog/should-i-adopt-a-dog-or-buy-one-from-a-breeder`}
              className="underline font-medium hover:opacity-80"
            >
              Should I Adopt a Dog or Buy One from a Breeder?
            </Link>
            .
          </p>
        </section>

        {/* Traceability */}
        <section id="traceability" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Traceability &amp; Enforcement: What This Could Look Like in Practice</h2>
          <p className="mb-3">
            The Strategy frames better welfare as a systems problem. That means it is not only about increasing penalties.
            It is also about making it harder for low-welfare supply to hide behind fragmented transactions, vague
            advertising, or under-the-threshold activity.
          </p>

          <h3 className="text-xl font-semibold mb-2">What traceability typically means (plain English)</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>
              Clear records linking a puppy to the breeder or seller (and ideally the conditions it was raised in).
            </li>
            <li>
              More consistent documentation expectations at the point of sale (health, welfare, identification, and
              buyer details).
            </li>
            <li>
              Reduced ability to &ldquo;route around&rdquo; licensing by shifting activity into loosely regulated
              services.
            </li>
          </ul>

          <p className="mb-3">
            The Strategy also references broader reforms touching pet movement and low-welfare supply routes. While the
            details depend on future consultations and rules, the direction is the same: close gaps that allow welfare
            harm to enter the market.
          </p>

          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>If you only remember one thing:</strong> welfare reforms become real for owners at the moment of
            purchase. A seller who resists transparency, documentation, or basic welfare questions is not &ldquo;casual&rdquo;
            &mdash; they are a risk signal.
          </div>
        </section>

        {/* Wider reforms */}
        <section id="wider-reforms" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Wider Reforms in the Package (Wildlife and Farmed Animals)</h2>
          <p className="mb-3">
            The Strategy is broader than dog breeding. It outlines commitments and planned actions across pets, wildlife,
            and farmed animals. A few high-profile items reported alongside the Strategy include proposals to ban boiling
            certain crustaceans alive, bans on snare traps, and reforms related to hunting practices. Industry groups and
            professional bodies have also weighed in, describing the Strategy as a major step while emphasizing the need
            for workable implementation and enforcement.
          </p>

          <h3 className="text-xl font-semibold mb-2">Why this matters even if you only care about dogs</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>
              A Strategy-level approach usually means more coordinated enforcement and clearer expectations across
              sectors.
            </li>
            <li>
              Companion-animal reforms often travel alongside broader welfare updates (public interest and political
              momentum move together).
            </li>
            <li>
              It signals a government willing to regulate welfare outcomes more directly, which can affect future
              compliance norms for breeding and pet services.
            </li>
          </ul>
        </section>

        {/* What owners should do */}
        <section id="what-owners-do" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">What Dog Owners Should Do Now</h2>
          <p className="mb-3">
            If you are buying a puppy (or planning to), you do not need to wait for new rules to protect yourself. The
            safest decisions are already the same decisions future reforms are likely to reinforce: traceable sourcing,
            transparency, and clear documentation.
          </p>

          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>
              <strong>Ask traceability questions early:</strong> who bred the litter, where was it raised, and what
              records exist (health, welfare, identification).
            </li>
            <li>
              <strong>Verify living conditions:</strong> ideally visit. If that is not possible, request structured proof
              and be cautious with pressure tactics or vague answers.
            </li>
            <li>
              <strong>Watch for &ldquo;middleman patterns&rdquo;:</strong> sellers who cannot answer basic questions
              about upbringing are a risk signal.
            </li>
            <li>
              <strong>Keep a paper trail:</strong> retain contracts, proof of payment, health records, and any written
              representations.
            </li>
          </ul>

          <p className="mb-3">
            If you use boarding or daycare, facility standards also matter for group safety, vaccination policies, and
            incident handling. For a facility evaluation framework, see:{' '}
            <Link
              href={`/${locale}/blog/how-to-choose-a-good-dog-boarding-or-daycare-facility`}
              className="underline font-medium hover:opacity-80"
            >
              How to Choose a Good Dog Boarding or Daycare Facility
            </Link>
            .
          </p>
        </section>

        {/* What breeders should do */}
        <section id="what-breeders-do" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">What Breeders (and Sellers) Should Do Now</h2>
          <p className="mb-3">
            If you run a responsible program, reforms often feel frustrating because you already do the right thing. The
            upside is that stronger rules can reduce the competitive advantage of low-welfare operators. The best
            preparation is to assume the future standard is: verifiable welfare, traceable records, and clearer oversight.
          </p>

          <h3 className="text-xl font-semibold mb-2">Compliance-ready checklist (practical)</h3>
          <div className="rounded-lg border border-[#d9cfc2] p-4 bg-[#f6efe4]">
            <ol className="list-decimal pl-6 space-y-1">
              <li>
                <strong>Documentation:</strong> consistent records for each litter (health, welfare, identification,
                buyer details, and care protocols).
              </li>
              <li>
                <strong>Welfare baseline:</strong> housing, enrichment, socialization, veterinary oversight, and breeding
                frequency aligned to best practice.
              </li>
              <li>
                <strong>Transparency:</strong> clear buyer education, written policies, and willingness to show the
                environment and answer questions.
              </li>
              <li>
                <strong>Third-party services:</strong> if you use fertility clinics, stud services, or whelping support,
                keep records as though those services may be regulated and inspected.
              </li>
              <li>
                <strong>Consultation awareness:</strong> watch for consultation launches in 2026 and contribute feedback
                to ensure workable definitions and fair enforcement.
              </li>
            </ol>
          </div>
        </section>

        {/* Timeline */}
        <section id="timeline" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Timeline &amp; What to Watch in 2026</h2>
          <p className="mb-3">
            The Strategy signals that 2026 is likely to be a detail year: consultations, draft rules, and clearer
            implementation pathways. If you are a buyer, you may see rising expectations for paperwork and transparency.
            If you are a breeder, you may see more clarity on registration scope, standards, and oversight of related
            services.
          </p>

          <ul className="list-disc pl-5 space-y-1">
            <li>
              Consultations on breeder registration, breeder standards, and bringing breeding-related services into
              licensing scope.
            </li>
            <li>
              Guidance updates affecting compliance, inspections, and enforcement coordination.
            </li>
            <li>
              Wider welfare actions (wildlife and farmed animals) that can affect overall regulatory momentum.
            </li>
          </ul>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">Frequently Asked Questions</h2>

          <p className="mb-3">
            <strong>Is this already law?</strong>
            <br />
            The Strategy is a published policy program. Some items require consultations and future regulations or
            legislation. Use it as a directional guide and watch for consultation outcomes and enacted rules.
          </p>

          <p className="mb-3">
            <strong>What does &ldquo;registration for all dog breeders&rdquo; usually aim to do?</strong>
            <br />
            Typically: improve traceability across the whole sector, reduce anonymous sales, and make enforcement easier
            when welfare problems occur. The exact details depend on the consultation and implementation route.
          </p>

          <p className="mb-3">
            <strong>Will this end puppy farming immediately?</strong>
            <br />
            Policy programs rarely end a problem overnight. The goal is to close loopholes, raise standards, and improve
            enforcement tools so low-welfare supply becomes harder to operate and easier to shut down.
          </p>

          <p className="mb-3">
            <strong>If I am buying a puppy, what is my most protective move today?</strong>
            <br />
            Choose traceable sourcing: insist on transparency, documentation, and proof of living conditions. If a seller
            resists basic questions, that is your answer.
          </p>

          <p>
            <strong>How can responsible breeders protect themselves during reform?</strong>
            <br />
            Tight documentation, consistent welfare protocols, clear buyer education, and attention to consultations.
            Responsible operators often benefit from clearer standards and stronger enforcement against bad actors.
          </p>
        </section>

        {/* Sources */}
        <section id="sources" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">📚 Sources &amp; Official References (Selected)</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            <li>
              Defra (GOV.UK) announcement (Dec 21, 2025):{' '}
              <a
                href="https://www.gov.uk/government/news/defra-announces-biggest-animal-welfare-reforms-in-a-generation"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.gov.uk/government/news/defra-announces-biggest-animal-welfare-reforms-in-a-generation
              </a>
            </li>
            <li>
              Animal welfare strategy for England (GOV.UK hub, published Dec 22, 2025):{' '}
              <a
                href="https://www.gov.uk/government/publications/animal-welfare-strategy-for-england"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.gov.uk/government/publications/animal-welfare-strategy-for-england
              </a>
            </li>
            <li>
              Animal welfare strategy for England (HTML version):{' '}
              <a
                href="https://www.gov.uk/government/publications/animal-welfare-strategy-for-england/animal-welfare-strategy-for-england"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.gov.uk/government/publications/animal-welfare-strategy-for-england/animal-welfare-strategy-for-england
              </a>
            </li>
            <li>
              Animal welfare strategy for England (PDF):{' '}
              <a
                href="https://assets.publishing.service.gov.uk/media/694560bd3022cdf03a0eb81c/E03517059_-_CP_1474_Animal_Welfare_Strategy_Accessible.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://assets.publishing.service.gov.uk/media/694560bd3022cdf03a0eb81c/E03517059_-_CP_1474_Animal_Welfare_Strategy_Accessible.pdf
              </a>
            </li>
            <li>
              British Veterinary Association reaction (context on measures):{' '}
              <a
                href="https://www.bva.co.uk/news-and-blog/news-article/government-s-new-animal-welfare-strategy-positive-step-towards-improving-the-lives-of-millions-of-animals/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.bva.co.uk/news-and-blog/news-article/government-s-new-animal-welfare-strategy-positive-step-towards-improving-the-lives-of-millions-of-animals/
              </a>
            </li>
            <li>
              Reporting context (Financial Times, Dec 22, 2025):{' '}
              <a
                href="https://www.ft.com/content/8b0796ac-70db-4a4d-8da6-ef9921469b76"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.ft.com/content/8b0796ac-70db-4a4d-8da6-ef9921469b76
              </a>
            </li>
          </ul>
        </section>

        <Link href={`/${locale}/blog`} className="underline text-[#2c4a30] font-medium hover:opacity-80">
          ← Back to Blog
        </Link>
      </main>
    </>
  );
}
