'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function SenolyticsForDogsExplained() {
  const locale = useLocale();

  const title =
    'Senolytics for Dogs Explained: What They Are, What They Claim to Do, What Evidence Exists, Safety Concerns, and What Is Still Unknown';
  const date = 'December 25, 2025';
  const categories = ['veterinary'] as const;

  const categoryLabels: Record<string, string> = {
    owner: 'Pet Owners',
    veterinary: 'Veterinary Clinics',
    boarding: 'Boarding',
    daycare: 'Daycare',
    rescue: 'Rescues',
    walker: 'Dog Walkers',
    sitter: 'Pet Sitters',
    breeder: 'Breeders',
    breed_specific_guides: 'Breed Specific Guides',
  };

  // Related slugs + TSX file names (keep consistent across your longevity cluster)
  // Pillar: do-dog-anti-ageing-drugs-really-work.tsx              slug: do-dog-anti-ageing-drugs-really-work
  // fda-veterinary-longevity-claims.tsx                           slug: fda-veterinary-longevity-claims
  // dog-longevity-biomarkers-guide.tsx                            slug: dog-longevity-biomarkers-guide
  // loyal-loy-002-explained.tsx                                   slug: loyal-loy-002-explained
  // rapamycin-longevity-research-dogs.tsx                         slug: rapamycin-longevity-research-dogs
  // should-you-join-dog-longevity-study.tsx                       slug: should-you-join-dog-longevity-study
  // supplements-vs-drugs-dog-longevity.tsx                        slug: supplements-vs-drugs-dog-longevity
  // metformin-for-dog-longevity-claims.tsx                        slug: metformin-for-dog-longevity-claims

  return (
    <>

      <main className="max-w-3xl mx-auto px-4 py-10">
        <p className="text-sm text-gray-600 mb-2">Posted on {date}</p>

        <h1 className="text-3xl font-bold mb-4">{title}</h1>

        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => (
            <span
              key={cat}
              className="text-xs bg-[#e4dbcb] text-[#2c4a30] px-3 py-1 rounded-full border border-[#d9cfc2]"
            >
              {categoryLabels[cat]}
            </span>
          ))}
        </div>

        {/* Intro */}
        <section className="mb-10">
          <p className="mb-4">
            If you found this page, you have probably seen the word &ldquo;senolytics&rdquo; in a longevity conversation and thought:
            &ldquo;Is this real science or just another wellness trend?&rdquo; That question is reasonable, because senolytics sit in a tricky place:
            the biology is plausible and heavily studied, but the translation from lab science to safe, meaningful outcomes in pet dogs is still developing.
          </p>

          <p className="mb-4">
            This article is written for anxious, detail-oriented owners who want practical clarity. We will explain what cellular senescence is, what senolytics are trying
            to do, how researchers measure results, why biomarkers can mislead, the biggest safety concerns for senior dogs, and how to evaluate claims without hype.
          </p>

          <div className="bg-white border border-[#d9cfc2] rounded-lg p-5 shadow-sm">
            <p className="text-sm text-gray-700 mb-0">
              <strong>Important:</strong> Educational content only. Do not self-source senolytic compounds, do not combine supplements or medications based on longevity marketing,
              and do not experiment outside a veterinarian-led plan. Older dogs often have hidden fragility, and the risk profile can change dramatically with dose, formulation,
              interactions, and pre-existing disease.
            </p>
          </div>
        </section>

        {/* TOC */}
        <nav className="mb-10 text-sm">
          <ul className="flex flex-wrap gap-4">
            <li>
              <a href="#tldr" className="underline">
                TL;DR
              </a>
            </li>
            <li>
              <a href="#what-is-senescence" className="underline">
                What Cellular Senescence Is
              </a>
            </li>
            <li>
              <a href="#what-are-senolytics" className="underline">
                What Senolytics Are
              </a>
            </li>
            <li>
              <a href="#why-people-care" className="underline">
                Why Longevity Researchers Care
              </a>
            </li>
            <li>
              <a href="#what-evidence" className="underline">
                What Evidence Exists in Dogs
              </a>
            </li>
            <li>
              <a href="#endpoints" className="underline">
                Endpoints: What They Measure and What They Prove
              </a>
            </li>
            <li>
              <a href="#biomarkers" className="underline">
                Biomarkers: Helpful Signals, Not Proof
              </a>
            </li>
            <li>
              <a href="#safety" className="underline">
                Safety, Interactions, and Monitoring
              </a>
            </li>
            <li>
              <a href="#who-not-fit" className="underline">
                Who It May Not Fit
              </a>
            </li>
            <li>
              <a href="#owner-checklist" className="underline">
                Owner Checklist
              </a>
            </li>
            <li>
              <a href="#faq" className="underline">
                FAQ
              </a>
            </li>
            <li>
              <a href="#related-reading" className="underline">
                Related Reading
              </a>
            </li>
          </ul>
        </nav>

        {/* TLDR */}
        <section id="tldr" className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">TL;DR</h2>

          <ul className="list-disc pl-5 mb-4">
            <li>
              <strong>Cellular senescence</strong> describes cells that stop dividing normally and can begin secreting signals that may contribute to chronic inflammation
              and tissue dysfunction as animals age.
            </li>
            <li>
              <strong>Senolytics</strong> are therapies intended to reduce the burden of senescent cells. In theory, lowering that burden could improve healthspan and resilience.
            </li>
            <li>
              The science is plausible, but many owner-facing claims jump ahead of what is proven in real pet dog populations.
            </li>
            <li>
              Early research often focuses on biomarkers and short-term functional signals. Those can be meaningful clues, but they are not automatic proof of longer life.
            </li>
            <li>
              Safety is the practical bottom line: dosing, interactions, organ reserve, and monitoring matter more than hype. Owners should not treat senolytics as DIY longevity supplements.
            </li>
          </ul>

          <div className="bg-[#f6efe4] border border-[#d9cfc2] rounded-lg p-5">
            <p className="text-sm text-[#2c4a30] mb-0">
              If you only take one thing: <strong>senolytics are an active area of serious research, but owners should treat them as research-in-progress unless and until dog-specific outcomes and safety are clearly demonstrated.</strong>
            </p>
          </div>
        </section>

        {/* Senescence */}
        <section id="what-is-senescence" className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">What Cellular Senescence Is (In Plain English)</h2>

          <p className="mb-4">
            Cells in the body are not supposed to divide forever. In response to stress, damage, or replication limits, some cells enter a state called senescence.
            A senescent cell is not necessarily &ldquo;dead&rdquo;. It is more like a cell that has stopped dividing normally and may behave differently than a healthy cell.
          </p>

          <p className="mb-4">Why does this matter for aging? Researchers focus on two ideas:</p>

          <ul className="list-disc pl-5 mb-4">
            <li>
              Senescent cells can accumulate with age and with certain forms of chronic stress or tissue damage.
            </li>
            <li>
              Senescent cells may release signals that promote inflammation and disrupt normal tissue function (sometimes described as a &ldquo;secretory phenotype&rdquo;).
            </li>
          </ul>

          <div className="bg-white border border-[#d9cfc2] rounded-lg p-5 shadow-sm">
            <p className="text-sm text-gray-700 mb-0">
              Important nuance: senescence is not purely &ldquo;bad.&rdquo; It can play roles in tumor suppression and wound healing. This is one reason why eliminating senescent cells indiscriminately is not automatically safe.
            </p>
          </div>
        </section>

        {/* What are senolytics */}
        <section id="what-are-senolytics" className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">What Senolytics Are (And What They Are Trying to Do)</h2>

          <p className="mb-4">
            Senolytics are interventions intended to reduce the burden of senescent cells. The concept is that by decreasing senescent-cell load, you may reduce pro-inflammatory signals and improve tissue environment,
            which could translate into better function and resilience in older animals.
          </p>

          <h3 className="text-xl font-semibold mb-3">Two categories owners may see</h3>
          <ul className="list-disc pl-5 mb-4">
            <li>
              <strong>Drug-style senolytic candidates:</strong> therapies developed and tested under research protocols with defined dosing and safety monitoring.
            </li>
            <li>
              <strong>Supplement-style marketing:</strong> products that use senescence language but may not have rigorous dog-specific outcomes data.
            </li>
          </ul>

          <div className="bg-[#f6efe4] border border-[#d9cfc2] rounded-lg p-5">
            <p className="text-sm text-[#2c4a30] mb-0">
              If you want a clear guide on how to tell research-grade drug development from supplement marketing, read:{' '}
              <Link className="underline" href={`/${locale}/blog/supplements-vs-drugs-dog-longevity`}>
                Supplements vs Drugs in Dog Longevity: How Owners Can Tell the Difference, Avoid Marketing Traps, and Make Safer Decisions
              </Link>
              .
            </p>
          </div>
        </section>

        {/* Why people care */}
        <section id="why-people-care" className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Why Longevity Researchers Care About Senolytics</h2>

          <p className="mb-4">
            Senolytics are studied because the senescence concept sits at the intersection of aging biology, inflammation, and chronic disease risk. In theory, reducing senescent-cell burden could influence:
          </p>

          <ul className="list-disc pl-5 mb-4">
            <li>Inflammation burden and immune signaling drift with age</li>
            <li>Tissue repair and functional capacity</li>
            <li>Frailty and resilience (how well an older animal handles stressors)</li>
            <li>Age-associated disease patterns, depending on tissue context</li>
          </ul>

          <p className="mb-0">
            The key word is &ldquo;could.&rdquo; The biological story is plausible, but the outcome story depends on what happens in real dogs under real conditions.
          </p>
        </section>

        {/* Evidence in dogs */}
        <section id="what-evidence" className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">What Evidence Exists in Dogs Today?</h2>

          <p className="mb-4">
            Owners will often encounter senolytic claims through articles that blend cell and mouse research with big promises. For dogs, the evidence picture is usually more limited and more fragmented.
            That does not mean the field is fake. It means the field is still developing, and dog-specific endpoints take time.
          </p>

          <h3 className="text-xl font-semibold mb-3">What owners often see first</h3>
          <ul className="list-disc pl-5 mb-4">
            <li>Mechanistic explanations (how senescence works, why clearing cells might help)</li>
            <li>Biomarker claims (inflammation markers, &ldquo;aging markers&rdquo; panels)</li>
            <li>Short-term function signals (mobility scoring, activity measures)</li>
          </ul>

          <h3 className="text-xl font-semibold mb-3">What owners often want (and may not have yet)</h3>
          <ul className="list-disc pl-5 mb-4">
            <li>Large, long-duration, controlled dog trials with clear outcomes</li>
            <li>Clear safety profiles across breeds, ages, comorbidities, and medication stacks</li>
            <li>Outcome chains that connect biomarker shifts to disease delay, disability delay, and survival</li>
          </ul>

          <div className="bg-white border border-[#d9cfc2] rounded-lg p-5 shadow-sm">
            <p className="text-sm text-gray-700 mb-0">
              Context matters: the longevity pillar article explains why early signals are not the same as proof, and how FDA language is often misread in this space:{' '}
              <Link className="underline" href={`/${locale}/blog/do-dog-anti-ageing-drugs-really-work`}>
                Do Anti-Ageing Drugs for Dogs Really Work? A Critical, Owner-First Review
              </Link>
              .
            </p>
          </div>
        </section>

        {/* Endpoints */}
        <section id="endpoints" className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Endpoints: What Researchers Measure (and What Those Measures Prove)</h2>

          <p className="mb-4">
            Longevity research rises or falls on endpoints. A senolytic program may be legitimate and still not be able to answer &ldquo;does my dog live longer?&rdquo; yet,
            because survival endpoints take years.
          </p>

          <div className="space-y-4">
            <div className="bg-white border border-[#d9cfc2] rounded-lg p-5 shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Hard endpoints</h3>
              <ul className="list-disc pl-5 mb-0">
                <li>Survival outcomes and time-to-event measures</li>
                <li>Clearly defined disease onset or progression events (when measurement is standardized)</li>
              </ul>
              <p className="text-sm text-gray-700 mt-3 mb-0">
                These endpoints are closest to &ldquo;adds years&rdquo; or &ldquo;delays disease,&rdquo; but they take time and large cohorts.
              </p>
            </div>

            <div className="bg-white border border-[#d9cfc2] rounded-lg p-5 shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Functional endpoints</h3>
              <ul className="list-disc pl-5 mb-0">
                <li>Mobility scoring, strength proxies, and standardized performance outcomes</li>
                <li>Activity measures that are objectively tracked rather than remembered</li>
                <li>Validated quality-of-life instruments paired with objective signals</li>
              </ul>
              <p className="text-sm text-gray-700 mt-3 mb-0">
                These can matter deeply to owners, but require careful design to reduce bias.
              </p>
            </div>

            <div className="bg-white border border-[#d9cfc2] rounded-lg p-5 shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Biomarkers and senescence panels</h3>
              <ul className="list-disc pl-5 mb-0">
                <li>Markers linked to inflammation burden and metabolic patterns</li>
                <li>Composite panels intended to reflect biologic age or senescence burden</li>
                <li>Signals that may guide research progression</li>
              </ul>
              <p className="text-sm text-gray-700 mt-3 mb-0">
                These can be useful signals, but they are not automatic proof of longer life or fewer diseases.
              </p>
            </div>
          </div>

          <p className="mt-4 mb-0">
            The owner-safe interpretation is: endpoints tell you what the study can answer today, and what it cannot answer yet.
          </p>
        </section>

        {/* Biomarkers */}
        <section id="biomarkers" className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Biomarkers: Helpful Signals, Not Proof</h2>

          <p className="mb-4">
            Senolytic conversations often lean heavily on biomarkers because biomarkers can move faster than long outcomes. But biomarkers create the biggest interpretation risk for owners.
            A biomarker shift can be a meaningful clue, and it can also be a dead end.
          </p>

          <h3 className="text-xl font-semibold mb-3">Four questions that make biomarker claims interpretable</h3>
          <ul className="list-disc pl-5 mb-4">
            <li>
              <strong>Which biomarker, specifically?</strong> Vague claims like &ldquo;improves aging markers&rdquo; are not enough.
            </li>
            <li>
              <strong>Compared to what?</strong> Baseline-only comparisons are weak. Controlled comparisons are stronger.
            </li>
            <li>
              <strong>Measured how?</strong> One-time measurements are noisy; trends under consistent conditions are more meaningful.
            </li>
            <li>
              <strong>Predicts what real outcome?</strong> The strongest claims show a chain from biomarker to function to disease risk.
            </li>
          </ul>

          <div className="bg-white border border-[#d9cfc2] rounded-lg p-5 shadow-sm">
            <p className="text-sm text-gray-700 mb-0">
              If you want the full deep dive, this companion article is built specifically for owners reading biomarker-heavy longevity marketing:{' '}
              <Link className="underline" href={`/${locale}/blog/dog-longevity-biomarkers-guide`}>
                Dog Longevity Biomarkers: Which Ones Matter, Which Ones Mislead, and How Owners Can Interpret Healthy Aging Claims
              </Link>
              .
            </p>
          </div>
        </section>

        {/* Safety */}
        <section id="safety" className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Safety, Interactions, and Monitoring: The Parts Owners Should Not Skip</h2>

          <p className="mb-4">
            The most important owner truth is this: even if a senolytic strategy is biologically plausible, safety in real dogs depends on the details. Senescence plays roles in normal biology,
            and older dogs have less reserve. That combination means the risk conversation matters.
          </p>

          <h3 className="text-xl font-semibold mb-3">Why safety can be complicated</h3>
          <ul className="list-disc pl-5 mb-4">
            <li>
              Senescence may have protective roles in certain contexts. Eliminating senescent cells indiscriminately could carry risks depending on timing and tissue context.
            </li>
            <li>
              Dogs are diverse in size, genetics, and disease predisposition. Risk profiles can vary.
            </li>
            <li>
              Senior dogs often take multiple medications, and interaction risks can be a bigger problem than the senolytic itself.
            </li>
          </ul>

          <h3 className="text-xl font-semibold mb-3">If your dog participates in a study, ask these safety questions</h3>
          <ul className="list-disc pl-5 mb-4">
            <li>What labs are monitored, how often, and who pays?</li>
            <li>What adverse events have been observed so far, and how are they managed?</li>
            <li>What triggers dose changes, pauses, or withdrawal for safety?</li>
            <li>What happens if my dog needs antibiotics, surgery, or new medications mid-study?</li>
            <li>What is the plan for urgent concerns outside normal clinic hours?</li>
          </ul>

          <div className="bg-[#f6efe4] border border-[#d9cfc2] rounded-lg p-5">
            <p className="text-sm text-[#2c4a30] mb-0">
              A safe mindset: the more medically vulnerable the dog, the more you should demand structure, monitoring, and clear exit rules.
            </p>
          </div>
        </section>

        {/* Who not fit */}
        <section id="who-not-fit" className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Who Senolytics May Not Fit (Common Caution Categories)</h2>

          <p className="mb-4">
            A well-run research protocol will not try to enroll every dog. Eligibility boundaries exist for safety and interpretability.
            While each study is different, these are common caution categories for older dogs considering experimental longevity interventions:
          </p>

          <ul className="list-disc pl-5 mb-4">
            <li>Dogs with unstable or advanced organ disease (kidney, liver, severe endocrine instability)</li>
            <li>Dogs with complex multi-medication regimens and high interaction risk</li>
            <li>Dogs with recurrent infections or immune fragility concerns</li>
            <li>Dogs that cannot tolerate monitoring visits or repeated exams due to severe stress or reactivity</li>
            <li>Owners who cannot realistically maintain follow-ups, because incomplete participation can be stressful and unhelpful</li>
          </ul>

          <div className="bg-white border border-[#d9cfc2] rounded-lg p-5 shadow-sm">
            <p className="text-sm text-gray-700 mb-0">
              Important nuance: being a poor match for a study does not mean you failed your dog. It means you made a safety-aligned decision for your reality.
            </p>
          </div>
        </section>

        {/* Owner checklist */}
        <section id="owner-checklist" className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Owner Checklist: How to Evaluate Any Senolytic Claim</h2>

          <p className="mb-4">
            Use this checklist anytime you see senolytic marketing or research headlines. It is designed to protect you when you feel urgent and don&rsquo;t know what follow-up questions to ask.
          </p>

          <h3 className="text-xl font-semibold mb-3">Evidence clarity</h3>
          <ul className="list-disc pl-5 mb-4">
            <li>What is the intended use and the primary endpoint?</li>
            <li>Is the evidence in dogs, or only in lab models?</li>
            <li>Was there a placebo or control group?</li>
            <li>Was the study blinded?</li>
            <li>How long was follow-up?</li>
            <li>Were results published with enough detail to evaluate methods?</li>
          </ul>

          <h3 className="text-xl font-semibold mb-3">Biomarker discipline</h3>
          <ul className="list-disc pl-5 mb-4">
            <li>Which biomarkers changed, specifically?</li>
            <li>Compared to what?</li>
            <li>Do those biomarkers predict a meaningful outcome in dogs?</li>
            <li>Was the biomarker a primary endpoint or an exploratory signal?</li>
          </ul>

          <h3 className="text-xl font-semibold mb-3">Safety and monitoring</h3>
          <ul className="list-disc pl-5 mb-4">
            <li>What labs are monitored and how often?</li>
            <li>What adverse events have occurred?</li>
            <li>What are the withdrawal rules?</li>
            <li>What interactions are possible with your dog&rsquo;s medications?</li>
          </ul>

          <div className="bg-[#f6efe4] border border-[#d9cfc2] rounded-lg p-5">
            <p className="text-sm text-[#2c4a30] mb-0">
              If you want a structured decision guide for enrolling in any longevity study, this companion article is your next stop:{' '}
              <Link className="underline" href={`/${locale}/blog/should-you-join-dog-longevity-study`}>
                Should You Enroll Your Dog in a Longevity Study? A Clear, Owner-First Checklist for Safety, Endpoints, Costs, and Real Expectations
              </Link>
              .
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">FAQ</h2>

          <div className="space-y-6">
            <div className="bg-white border border-[#d9cfc2] rounded-lg p-5 shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Do senolytics make dogs live longer?</h3>
              <p className="mb-0">
                Owners should treat lifespan claims as unproven unless supported by long, controlled dog studies with survival endpoints. Senolytics are plausible and actively researched, but the strongest real-world dog outcomes may take time to establish.
              </p>
            </div>

            <div className="bg-white border border-[#d9cfc2] rounded-lg p-5 shadow-sm">
              <h3 className="text-xl font-semibold mb-2">If a senolytic product shows better biomarkers, does that prove it works?</h3>
              <p className="mb-0">
                Not necessarily. Biomarkers can be useful signals, but they can also be surrogate endpoints that do not translate into meaningful outcomes. This is why study design and endpoints matter.
              </p>
            </div>

            <div className="bg-white border border-[#d9cfc2] rounded-lg p-5 shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Are senolytics the same thing as supplements marketed for longevity?</h3>
              <p className="mb-0">
                No. Some research-grade candidates are developed under structured protocols. Many over-the-counter products use longevity language without the same evidence standards or quality controls.
                Use the supplements vs drugs guide to evaluate claims carefully.
              </p>
            </div>

            <div className="bg-white border border-[#d9cfc2] rounded-lg p-5 shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Should I try senolytics on my dog outside a study?</h3>
              <p className="mb-0">
                No. Senescence biology is complex, and older dogs have less reserve. Any serious senolytic consideration should be veterinarian-led and ideally within a well-monitored research context.
              </p>
            </div>
          </div>
        </section>

        {/* Related reading */}
        <section id="related-reading" className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">Related Reading</h2>

          <ul className="list-disc pl-5 space-y-2">
            <li>
              <Link className="underline" href={`/${locale}/blog/do-dog-anti-ageing-drugs-really-work`}>
                Do Anti-Ageing Drugs for Dogs Really Work? A Critical, Owner-First Review
              </Link>
              {/* do-dog-anti-ageing-drugs-really-work.tsx */}
            </li>

            <li>
              <Link className="underline" href={`/${locale}/blog/fda-veterinary-longevity-claims`}>
                How the FDA Evaluates Veterinary Longevity Claims: Conditional Approval, Endpoints, and What Owners Should Understand
              </Link>
              {/* fda-veterinary-longevity-claims.tsx */}
            </li>

            <li>
              <Link className="underline" href={`/${locale}/blog/dog-longevity-biomarkers-guide`}>
                Dog Longevity Biomarkers: Which Ones Matter, Which Ones Mislead, and How Owners Can Interpret Healthy Aging Claims
              </Link>
              {/* dog-longevity-biomarkers-guide.tsx */}
            </li>

            <li>
              <Link className="underline" href={`/${locale}/blog/supplements-vs-drugs-dog-longevity`}>
                Supplements vs Drugs in Dog Longevity: How Owners Can Tell the Difference, Avoid Marketing Traps, and Make Safer Decisions
              </Link>
              {/* supplements-vs-drugs-dog-longevity.tsx */}
            </li>

            <li>
              <Link className="underline" href={`/${locale}/blog/rapamycin-longevity-research-dogs`}>
                Rapamycin-Style Longevity Research in Dogs: What Studies Measure, Potential Benefits, Safety Risks, Who It May Fit, and What Is Still Unknown
              </Link>
              {/* rapamycin-longevity-research-dogs.tsx */}
            </li>

            <li>
              <Link className="underline" href={`/${locale}/blog/should-you-join-dog-longevity-study`}>
                Should You Enroll Your Dog in a Longevity Study? A Clear, Owner-First Checklist for Safety, Endpoints, Costs, and Real Expectations
              </Link>
              {/* should-you-join-dog-longevity-study.tsx */}
            </li>

            <li>
              <Link className="underline" href={`/${locale}/blog/loyal-loy-002-explained`}>
                LOY-002 Explained: What It Is, Who It Is For, What the FDA Milestone Actually Means, What Trials Measure, and What Is Still Unknown
              </Link>
              {/* loyal-loy-002-explained.tsx */}
            </li>
          </ul>
        </section>

        {/* Back to Blog */}
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
