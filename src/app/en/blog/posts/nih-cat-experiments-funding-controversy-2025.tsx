'use client';

import Head from 'next/head';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function NIHCatExperimentsFundingControversy2025() {
  const locale = useLocale();

  const title =
    'NIH Funding for New Cat Experiments (2025): What Was Reported, What NIH Actually Announced, and What Could Change Next';
  const date = 'December 23, 2025';
  const categories = ['owner'] as const;

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
    'A factual, plain-English explainer of the December 2025 reporting that NIH funded new cat experiments: what was alleged, what NIH policy changes really say, how NIH grants work, and what outcomes are realistic.';

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

        {/* Table of contents */}
        <nav className="mb-8 text-sm">
          <ul className="flex flex-wrap gap-3">
            <li>
              <a href="#tldr" className="underline hover:opacity-80">
                TL;DR
              </a>
            </li>
            <li>
              <a href="#what-was-reported" className="underline hover:opacity-80">
                What Was Reported
              </a>
            </li>
            <li>
              <a href="#what-nih-announced" className="underline hover:opacity-80">
                What NIH Announced
              </a>
            </li>
            <li>
              <a href="#how-nih-funding-works" className="underline hover:opacity-80">
                How NIH Funding Works
              </a>
            </li>
            <li>
              <a href="#what-policy-does-and-does-not-do" className="underline hover:opacity-80">
                What Policy Does and Does Not Do
              </a>
            </li>
            <li>
              <a href="#why-cats-are-used" className="underline hover:opacity-80">
                Why Cats Are Used
              </a>
            </li>
            <li>
              <a href="#what-could-change" className="underline hover:opacity-80">
                What Could Change Next
              </a>
            </li>
            <li>
              <a href="#why-this-matters-to-pet-owners" className="underline hover:opacity-80">
                Why Pet Owners Care
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

        <article className="prose prose-slate max-w-none prose-headings:text-[#2c4a30] prose-a:text-[#2c4a30]">
          {/* TL;DR */}
          <section id="tldr" className="mb-8">
            <h2 className="text-2xl font-semibold mb-3">Short Answer (TL;DR)</h2>
            <p className="mb-4">
              In early December 2025, major reporting said the National Institutes of Health (NIH) had
              awarded new or extended funding for some research involving cats, even as NIH has publicly
              emphasized a shift toward more human-focused, non-animal research approaches. The story
              triggered strong reactions because cats are widely viewed as companion animals, and because
              NIH has described plans to reduce animal use where scientifically appropriate.
            </p>
            <p className="mb-4">
              Two things can be true at once: NIH can be moving policy toward broader acceptance of
              non-animal methods while still funding some animal research under existing review and
              oversight rules. The real question is how fast and how explicitly NIH will limit or phase out
              specific categories of dog-and-cat studies, and what accountability measures follow.
            </p>
            <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
              <strong>Note:</strong> This article summarizes public reporting and official policy documents and is
              not legal, medical, or scientific advice.
            </div>
          </section>

          {/* What was reported */}
          <section id="what-was-reported" className="mb-8">
            <h2 className="text-2xl font-semibold mb-3">What Was Reported</h2>
            <p className="mb-4">
              The Guardian reported on December 3, 2025 that NIH had provided new and extended funding
              for cat research, citing documents obtained and highlighted by the watchdog group White Coat
              Waste. The report said the funding decisions occurred after NIH leaders had publicly talked
              about shifting away from certain dog and cat testing and prioritizing human-based research
              alternatives.
            </p>

            <div className="rounded-lg border border-[#d9cfc2] bg-[#f6efe4] p-4 mb-4">
              <h3 className="text-xl font-semibold mb-2">What the reporting specifically claimed</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  NIH awarded more than one million dollars in new and extended funding connected to cat
                  studies after public comments about reducing cat and dog testing.
                </li>
                <li>
                  The reporting described the studies as invasive and said they involved kittens or adult cats
                  and ended with euthanasia.
                </li>
                <li>
                  NIH responded that a senior official&#39;s comments cited by critics reflected a personal view and
                  that NIH continues to work toward broader adoption of non-animal methods where
                  scientifically appropriate.
                </li>
              </ul>
            </div>

            <p className="mb-4">
              It is important to be precise about what is known from public sources: the key factual backbone
              of this story comes from a news report summarizing documents cited by an advocacy watchdog,
              paired with NIH statements about the scope of policy and agency goals. The underlying grant
              documents and the full scope of animal use in each project are best evaluated through official
              databases and the specific grant abstracts.
            </p>
          </section>

          {/* What NIH announced */}
          <section id="what-nih-announced" className="mb-8">
            <h2 className="text-2xl font-semibold mb-3">What NIH Announced in 2025</h2>
            <p className="mb-4">
              NIH released a formal announcement on April 29, 2025 stating it would prioritize human-based
              research technologies and reduce the use of animals in NIH-funded research. NIH also said it
              intends to establish a new office, the Office of Research Innovation, Validation, and Application
              (ORIVA), to coordinate efforts to develop, validate, and scale non-animal approaches.
            </p>

            <p className="mb-4">
              In July 2025, NIH published additional policy clarifications through its Extramural Nexus
              explaining how the initiative affects funding opportunities and applications. NIH said it would no
              longer develop new funding opportunities focused exclusively on animal models of human disease.
              NIH also clarified that researchers can still propose a range of approaches, including studies that
              involve laboratory animals, if that approach is justified and appropriate.
            </p>

            <div className="rounded-lg border border-[#d9cfc2] bg-[#f6efe4] p-4 mb-4">
              <h3 className="text-xl font-semibold mb-2">What this means in plain English</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  NIH is steering new funding language to include human-focused and non-animal approaches,
                  not just animal models.
                </li>
                <li>
                  That policy shift does not automatically end animal research. It changes how NIH frames new
                  funding opportunities and encourages alternatives.
                </li>
                <li>
                  NIH continues to fund animal studies when reviewers conclude they are scientifically
                  justified and compliant with welfare oversight.
                </li>
              </ul>
            </div>

            <p className="mb-4">
              For readers interested in how rules and accountability frameworks shape animal-related
              outcomes in other contexts, our own guide on facility regulation can be useful background on
              how oversight systems are designed to work:
              {' '}
              <Link
                href={`/${locale}/blog/dog-daycare-and-boarding-laws-by-state-2025`}
                className="underline hover:opacity-80"
              >
                Dog Daycare &amp; Boarding Laws by State (2025 Owner&#39;s Guide)
              </Link>
              .
            </p>
          </section>

          {/* How NIH funding works */}
          <section id="how-nih-funding-works" className="mb-8">
            <h2 className="text-2xl font-semibold mb-3">How NIH Funding Decisions Work</h2>
            <p className="mb-4">
              NIH does not approve experiments in a single yes-or-no moment the way people sometimes
              imagine. NIH primarily funds research through grants. Applications are reviewed by peer review
              panels for scientific merit and other criteria. Separately, animal research is subject to welfare
              oversight requirements and institutional review processes.
            </p>

            <p className="mb-4">
              This matters because a public policy statement about research direction can influence future
              funding opportunities and program priorities while existing grants still proceed within the
              existing framework. It can also take time for a policy emphasis to translate into measurable
              portfolio change because grants run for years and are renewed or extended under defined rules.
            </p>

            <div className="rounded-lg border border-[#d9cfc2] bg-[#f6efe4] p-4 mb-4">
              <h3 className="text-xl font-semibold mb-2">Why a policy shift can coexist with new grants</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  Some projects are continuations or extensions of existing lines of research and can be funded
                  under current program authority.
                </li>
                <li>
                  NIH can broaden funding opportunity language to encourage alternatives without immediately
                  prohibiting all animal use in grants.
                </li>
                <li>
                  Changes that fully prohibit a category of studies often require new binding rules,
                  legislative action, or explicit NIH internal directives.
                </li>
              </ul>
            </div>

            <p className="mb-4">
              The practical takeaway: when you see a headline that sounds like a contradiction, it is often a
              sign that policy direction, grant cycles, and oversight processes are moving on different
              timelines.
            </p>
          </section>

          {/* What policy does and does not do */}
          <section id="what-policy-does-and-does-not-do" className="mb-8">
            <h2 className="text-2xl font-semibold mb-3">What NIH&#39;s 2025 Policy Does and Does Not Do</h2>
            <p className="mb-4">
              Based on NIH&#39;s published statements, the 2025 initiative is mainly about prioritizing and scaling
              human-relevant research tools and encouraging non-animal approaches across the funding
              portfolio. NIH&#39;s Extramural Nexus clarifications indicate that animal research can still be
              proposed and funded if justified.
            </p>

            <div className="rounded-lg border border-[#d9cfc2] bg-[#f6efe4] p-4 mb-4">
              <h3 className="text-xl font-semibold mb-2">What the policy clearly does</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  Changes how NIH designs new funding opportunities so they are not exclusively framed around
                  animal models of disease.
                </li>
                <li>
                  Creates infrastructure goals, including ORIVA, intended to validate and scale alternatives.
                </li>
                <li>
                  Encourages researchers and reviewers to consider the most appropriate model for a question,
                  including non-animal methods.
                </li>
              </ul>
            </div>

            <div className="rounded-lg border border-[#d9cfc2] bg-[#f6efe4] p-4 mb-4">
              <h3 className="text-xl font-semibold mb-2">What the policy does not automatically do</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  It does not instantly end all animal research funded by NIH.
                </li>
                <li>
                  It does not, by itself, create a statutory ban on cat or dog research.
                </li>
                <li>
                  It does not guarantee that every research question can be answered with alternatives today.
                </li>
              </ul>
            </div>

            <p className="mb-4">
              This is where the ethical debate becomes a policy design problem: how to accelerate adoption
              of alternatives without undermining legitimate safety, disease, and translational research aims,
              and how to set clear boundaries for companion animal species if that is the goal.
            </p>
          </section>

          {/* Why cats are used */}
          <section id="why-cats-are-used" className="mb-8">
            <h2 className="text-2xl font-semibold mb-3">Why Cats Are Used in Some Research</h2>
            <p className="mb-4">
              Cat research is relatively uncommon compared with rodents, but it has historically been used in
              specific areas such as neuroscience, sensory systems, and vision research. Researchers have
              argued that certain aspects of feline physiology can be relevant for specific scientific questions.
              Critics argue that modern non-animal methods and human-based tools can often provide more
              directly relevant results without using companion animal species.
            </p>

            <p className="mb-4">
              The larger scientific context is shifting quickly. Federal policy changes and regulatory signals
              have increasingly encouraged New Approach Methodologies (often called NAMs), such as
              organoids, organ-on-chip systems, and computational approaches, to reduce reliance on animals.
              The FDA has also publicly described efforts to reduce or replace certain animal testing
              requirements in drug development when scientifically justified.
            </p>

            <div className="rounded-lg border border-[#d9cfc2] bg-[#f6efe4] p-4 mb-4">
              <h3 className="text-xl font-semibold mb-2">Why this matters for the cat controversy</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  If alternatives are credible and validated, the ethical and scientific case for using cats becomes
                  harder to justify.
                </li>
                <li>
                  If alternatives are not yet sufficient for a narrow question, policymakers face a timing
                  challenge: accelerate validation versus impose bans.
                </li>
                <li>
                  The debate is not only about compassion; it is also about scientific predictiveness and
                  how to allocate limited public research dollars.
                </li>
              </ul>
            </div>

            <p className="mb-4">
              For pet owners, it can also be helpful to remember that policy changes in government systems
              often happen through incremental steps, even when public attention spikes. That pattern is
              similar to how states build stricter accountability rules in other animal-related areas:
              {' '}
              <Link
                href={`/${locale}/blog/arizona-bite-and-run-dog-bite-law-2025`}
                className="underline hover:opacity-80"
              >
                Arizona&#39;s &#34;Bite and Run&#34; Dog Bite Law (2025)
              </Link>
              .
            </p>
          </section>

          {/* What could change */}
          <section id="what-could-change" className="mb-8">
            <h2 className="text-2xl font-semibold mb-3">What Could Change Next (Realistic Paths)</h2>
            <p className="mb-4">
              The most realistic ways this controversy could produce change are procedural and legislative,
              not purely symbolic. In practice, it is hard to alter a federal research portfolio overnight, but it
              is possible to narrow what is funded going forward.
            </p>

            <div className="rounded-lg border border-[#d9cfc2] bg-[#f6efe4] p-4 mb-4">
              <h3 className="text-xl font-semibold mb-2">Potential policy outcomes</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  NIH could publish clearer internal guidance defining when cat (and dog) research is
                  acceptable and when it is not.
                </li>
                <li>
                  NIH could add additional transparency requirements for grants involving companion animal
                  species, including stronger public justification for why alternatives are insufficient.
                </li>
                <li>
                  Congress could pursue restrictions through legislation that directly limits NIH funding for
                  studies causing significant pain or distress to dogs or cats.
                </li>
                <li>
                  ORIVA could accelerate validation and scaling of alternatives, creating a practical pathway
                  to reduce animal use over time rather than only changing rhetoric.
                </li>
              </ul>
            </div>

            <p className="mb-4">
              One example of a legislative approach is the Preventing Animal Abuse and Waste Act (PAAW
              Act), which was introduced in the U.S. House in 2025 and proposes limiting NIH funding for
              certain dog and cat research meeting a defined pain-or-distress threshold. Whether a bill like
              that advances is a political question, but it illustrates the concrete mechanisms that can alter
              agency behavior.
            </p>
          </section>

          {/* Why this matters */}
          <section id="why-this-matters-to-pet-owners" className="mb-8">
            <h2 className="text-2xl font-semibold mb-3">Why This Matters to Pet Owners (Even If You Never Follow Science Policy)</h2>
            <p className="mb-4">
              Many pet owners react strongly to stories involving cats in laboratories because cats are
              culturally understood as family members. That emotional reality intersects with two practical
              questions: what public institutions fund and how rapidly science is moving toward non-animal
              methods.
            </p>

            <p className="mb-4">
              A careful, factual way to view this story is to separate three layers:
            </p>

            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li>
                <strong>Ethics:</strong> Should companion animals be used in invasive research at all, regardless of potential benefit?
              </li>
              <li>
                <strong>Science:</strong> Are there validated alternatives that answer the same questions with equal or better relevance?
              </li>
              <li>
                <strong>Governance:</strong> Are rules, transparency, and oversight strong enough that public trust is warranted?
              </li>
            </ul>

            <p className="mb-4">
              Pet owners often engage most strongly with the governance layer because it is measurable:
              public statements, official policy documents, and the reality of what gets funded. When those
              appear to diverge, even for procedural reasons, trust erodes.
            </p>

            <p className="mb-4">
              If your day-to-day focus is practical animal welfare, this is also a reminder that transparency
              systems matter. The same logic applies in everyday pet care: clear policies, documentation, and
              responsible standards are how trust is earned. If you are choosing a pet-care facility, this
              owner-first guide can help you ask better questions:
              {' '}
              <Link
                href={`/${locale}/blog/how-to-choose-a-good-dog-boarding-or-daycare-facility`}
                className="underline hover:opacity-80"
              >
                How to Choose a Good Dog Boarding or Daycare Facility
              </Link>
              .
            </p>
          </section>

          {/* FAQ */}
          <section id="faq" className="mb-8">
            <h2 className="text-2xl font-semibold mb-3">Frequently Asked Questions</h2>

            <p className="mb-4">
              <strong>Did NIH officially promise to stop all cat experiments?</strong>
              <br />
              NIH publicly announced a shift toward prioritizing human-based research and reducing animal
              use, and published clarifications about how new funding opportunities would be designed. A
              widely quoted personal statement from an NIH official was reported separately in news coverage,
              but NIH&#39;s official policy documents focus on broad funding language changes and support for
              alternatives rather than an immediate, absolute end to all animal studies.
            </p>

            <p className="mb-4">
              <strong>Can NIH still fund animal studies under the 2025 policy?</strong>
              <br />
              Yes. NIH stated that researchers may propose a range of models, including laboratory animals,
              and that new funding opportunities will be broader rather than animal-only. Funding decisions
              remain subject to peer review and oversight requirements.
            </p>

            <p className="mb-4">
              <strong>What is ORIVA?</strong>
              <br />
              NIH said it intends to establish ORIVA to coordinate NIH-wide efforts to develop, validate, and
              scale non-animal methods, serving as a hub for translation and coordination.
            </p>

            <p className="mb-4">
              <strong>Is there a federal law that bans NIH from funding dog or cat research?</strong>
              <br />
              Not broadly under current law. In 2025, at least one bill was introduced proposing restrictions
              focused on significant pain or distress in dog and cat research, but proposed legislation is not
              the same thing as enacted law.
            </p>

            <p>
              <strong>How should I talk about this topic responsibly?</strong>
              <br />
              Stick to primary sources (NIH statements and official policy documents), accurately describe
              what reporting claims, and avoid assuming that policy direction automatically equals immediate
              portfolio change.
            </p>
          </section>

          {/* Sources */}
          <section id="sources" className="mb-8">
            <h2 className="text-2xl font-semibold mb-3">📚 Sources</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
              <li>
                The Guardian report on NIH funding for cat experiments (Dec 3, 2025):{' '}
                <a
                  href="https://www.theguardian.com/world/2025/dec/03/nih-funds-cat-experiments"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.theguardian.com/world/2025/dec/03/nih-funds-cat-experiments
                </a>
              </li>
              <li>
                NIH news release (Apr 29, 2025): NIH to prioritize human-based research technologies:{' '}
                <a
                  href="https://www.nih.gov/news-events/news-releases/nih-prioritize-human-based-research-technologies"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.nih.gov/news-events/news-releases/nih-prioritize-human-based-research-technologies
                </a>
              </li>
              <li>
                NIH Extramural Nexus (Jul 18, 2025): clarification on how the initiative affects animal studies proposals:{' '}
                <a
                  href="https://grants.nih.gov/news-events/nih-extramural-nexus-news/2025/07/how-does-the-nih-initiative-to-prioritize-human-based-research-affect-research-proposing-the-use-of-laboratory-animals"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://grants.nih.gov/news-events/nih-extramural-nexus-news/2025/07/how-does-the-nih-initiative-to-prioritize-human-based-research-affect-research-proposing-the-use-of-laboratory-animals
                </a>
              </li>
              <li>
                NIH Extramural Nexus (Jul 10, 2025): aligning funding announcements with the initiative:{' '}
                <a
                  href="https://grants.nih.gov/news-events/nih-extramural-nexus-news/2025/07/nih-funding-announcements-to-align-with-nih-initiative-to-prioritize-human-based-research"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://grants.nih.gov/news-events/nih-extramural-nexus-news/2025/07/nih-funding-announcements-to-align-with-nih-initiative-to-prioritize-human-based-research
                </a>
              </li>
              <li>
                Congress.gov: text of the 2025 PAAW Act bill proposal (H.R. 4698):{' '}
                <a
                  href="https://www.congress.gov/bill/119th-congress/house-bill/4698/text"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.congress.gov/bill/119th-congress/house-bill/4698/text
                </a>
              </li>
              <li>
                FDA press announcement (Apr 10, 2025): plan to phase out certain animal testing requirements for specific drug pathways:{' '}
                <a
                  href="https://www.fda.gov/news-events/press-announcements/fda-announces-plan-phase-out-animal-testing-requirement-monoclonal-antibodies-and-other-drugs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.fda.gov/news-events/press-announcements/fda-announces-plan-phase-out-animal-testing-requirement-monoclonal-antibodies-and-other-drugs
                </a>
              </li>
            </ul>
          </section>
        </article>

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
