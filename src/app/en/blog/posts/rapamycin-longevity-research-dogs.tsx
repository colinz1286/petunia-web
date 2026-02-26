'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function RapamycinLongevityResearchDogs() {
  const locale = useLocale();

  const title =
    'Rapamycin-Style Longevity Research in Dogs: What Studies Measure, Potential Benefits, Safety Risks, Who It May (Not) Fit, and What Is Still Unknown';
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
  // should-you-join-dog-longevity-study.tsx                       slug: should-you-join-dog-longevity-study
  // supplements-vs-drugs-dog-longevity.tsx                        slug: supplements-vs-drugs-dog-longevity
  // senolytics-for-dogs-explained.tsx                             slug: senolytics-for-dogs-explained
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
            Rapamycin is one of the most talked-about drugs in longevity science, and it is increasingly discussed in the context of dog aging research.
            If you have a senior dog, you might have seen claims ranging from &ldquo;this could add years&rdquo; to &ldquo;this is too risky.&rdquo;
            The truth is more nuanced: rapamycin is scientifically interesting, early dog research exists, and large trials are underway, but it is not a do-it-yourself longevity hack.
          </p>

          <p className="mb-4">
            This article is designed for owners who want clarity without hype. We will cover what rapamycin is, why researchers study it for healthy aging,
            what major dog trials aim to measure, the safety risks that matter most for older dogs, and how to evaluate any claim without false certainty.
          </p>

          <div className="bg-white border border-[#d9cfc2] rounded-lg p-5 shadow-sm">
            <p className="text-sm text-gray-700 mb-0">
              <strong>Important:</strong> Educational content only. Do not self-source rapamycin, do not repurpose human prescriptions, and do not experiment with dosing outside a veterinarian-led plan.
              Older dogs often have hidden fragility, and the safety profile depends on dosing, monitoring, individual health status, and medication interactions.
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
              <a href="#what-is-rapamycin" className="underline">
                What Is Rapamycin?
              </a>
            </li>
            <li>
              <a href="#why-longevity" className="underline">
                Why Scientists Study It for Aging
              </a>
            </li>
            <li>
              <a href="#what-dog-studies" className="underline">
                What Dog Studies Have Looked At
              </a>
            </li>
            <li>
              <a href="#triad" className="underline">
                TRIAD: What the Big Trial Is Testing
              </a>
            </li>
            <li>
              <a href="#endpoints" className="underline">
                Endpoints and What They Prove
              </a>
            </li>
            <li>
              <a href="#safety" className="underline">
                Safety Risks and Monitoring
              </a>
            </li>
            <li>
              <a href="#who-should-not" className="underline">
                Who It May Not Fit
              </a>
            </li>
            <li>
              <a href="#owner-decision" className="underline">
                Owner Decision Guide
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
              Rapamycin is a drug best known for immune-related uses in humans, but in low-dose longevity research it is studied because it affects a cellular pathway linked to aging biology.
            </li>
            <li>
              Dog aging research programs are testing whether carefully selected dosing regimens can improve healthspan outcomes (mobility, heart-related measures, cognition proxies, resilience) and possibly lifespan.
            </li>
            <li>
              The strongest dog evidence will come from long, controlled trials that follow dogs over time, not from anecdotes or short-term biomarker shifts.
            </li>
            <li>
              Safety is the practical bottom line: immune effects, metabolic changes, mouth and GI issues, wound healing concerns, and drug interactions can matter, especially in senior dogs.
            </li>
            <li>
              Owners should not treat rapamycin as a DIY anti-aging supplement. If a dog participates, it should be through a well-run research protocol with monitoring and clear withdrawal criteria.
            </li>
          </ul>

          <div className="bg-[#f6efe4] border border-[#d9cfc2] rounded-lg p-5">
            <p className="text-sm text-[#2c4a30] mb-0">
              The most responsible mindset: rapamycin in dogs is <strong>promising research in progress</strong>, not a proven guarantee of extra years.
            </p>
          </div>
        </section>

        {/* What is rapamycin */}
        <section id="what-is-rapamycin" className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">What Is Rapamycin?</h2>

          <p className="mb-4">
            Rapamycin (also called sirolimus in human medicine contexts) is a drug that influences a major cellular signaling pathway often discussed in longevity science.
            In simplified terms, this pathway is involved in how cells respond to nutrients, growth signals, stress, and repair demands.
          </p>

          <p className="mb-4">
            Rapamycin has a long scientific history, but the most important distinction for owners is this:
          </p>

          <ul className="list-disc pl-5 mb-4">
            <li>
              In many clinical settings, rapamycin is associated with <strong>immune modulation</strong>, which is why safety discussions often focus on infection risk and healing.
            </li>
            <li>
              In longevity research, investigators often explore <strong>lower or intermittent dosing</strong> strategies, aiming to capture potential healthy-aging effects while reducing risk.
            </li>
          </ul>

          <div className="bg-white border border-[#d9cfc2] rounded-lg p-5 shadow-sm">
            <p className="text-sm text-gray-700 mb-0">
              Owner takeaway: when you see &ldquo;rapamycin slows aging&rdquo; headlines, always ask what dose pattern was used and what outcomes were measured.
              Longevity-style dosing is not the same as every other rapamycin use case.
            </p>
          </div>
        </section>

        {/* Why longevity */}
        <section id="why-longevity" className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Why Scientists Study Rapamycin for Aging and Healthspan</h2>

          <p className="mb-4">
            The reason rapamycin is studied in aging biology is not because scientists believe there is one &ldquo;aging switch.&rdquo; It is because changing certain cellular pathways
            can influence multiple downstream processes that often worsen with age: inflammatory burden, metabolic drift, cellular stress response, and functional decline.
          </p>

          <h3 className="text-xl font-semibold mb-3">Why dogs are a meaningful model for this research</h3>
          <ul className="list-disc pl-5 mb-4">
            <li>
              Dogs share human environments, lifestyles, and many age-associated diseases.
            </li>
            <li>
              Dogs age faster than humans, so long-term outcomes can be observed sooner.
            </li>
            <li>
              Dogs receive real-world veterinary care, meaning results can be more relevant than lab-only models.
            </li>
          </ul>

          <p className="mb-0">
            The goal is not to make dogs immortal. The goal is to test whether a targeted intervention can extend the number of good, healthy, functional years.
          </p>
        </section>

        {/* What dog studies */}
        <section id="what-dog-studies" className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">What Dog Studies Have Looked At So Far</h2>

          <p className="mb-4">
            Dog research on rapamycin has included earlier controlled work in smaller groups and has progressed toward larger, longer trials designed to answer the questions owners care about most.
            Early studies can help establish safety signals and short-term physiologic effects, but they cannot prove lifespan extension on their own.
          </p>

          <h3 className="text-xl font-semibold mb-3">What early-stage studies can tell us</h3>
          <ul className="list-disc pl-5 mb-4">
            <li>
              Whether a dosing pattern is tolerated in generally healthy dogs.
            </li>
            <li>
              Whether measurable physiologic or functional signals shift in plausible directions.
            </li>
            <li>
              What adverse events show up, what lab patterns change, and how frequently monitoring is needed.
            </li>
          </ul>

          <h3 className="text-xl font-semibold mb-3">What early-stage studies cannot prove</h3>
          <ul className="list-disc pl-5 mb-4">
            <li>That dogs live longer.</li>
            <li>That serious disease is delayed in a meaningful way across real-world populations.</li>
            <li>That the risk profile is acceptable for older dogs with multiple comorbidities.</li>
          </ul>

          <div className="bg-[#f6efe4] border border-[#d9cfc2] rounded-lg p-5">
            <p className="text-sm text-[#2c4a30] mb-0">
              This is the central theme of longevity science: signals can be real and still fail to become a final outcome when tested harder.
              That is why large, long trials exist.
            </p>
          </div>
        </section>

        {/* TRIAD */}
        <section id="triad" className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">TRIAD: What the Big Trial Is Testing (and Why Owners Should Care)</h2>

          <p className="mb-4">
            One of the most important reasons rapamycin is taken seriously in dog longevity research is that it is being tested in large, structured clinical trials designed around meaningful outcomes.
            The Test of Rapamycin in Aging Dogs (often called TRIAD) is designed to evaluate rapamycin&rsquo;s effects on health and aging in companion dogs under controlled conditions.
          </p>

          <h3 className="text-xl font-semibold mb-3">What a well-run longevity trial tries to do</h3>
          <ul className="list-disc pl-5 mb-4">
            <li>
              Use a placebo control and blinding when feasible to reduce expectation bias.
            </li>
            <li>
              Follow dogs long enough to detect meaningful differences in healthspan outcomes and, when designed for it, survival.
            </li>
            <li>
              Monitor safety systematically rather than relying on anecdote.
            </li>
            <li>
              Track function and clinically meaningful outcomes, not only biomarkers.
            </li>
          </ul>

          <div className="bg-white border border-[#d9cfc2] rounded-lg p-5 shadow-sm">
            <p className="text-sm text-gray-700 mb-0">
              Owner takeaway: the existence of large, controlled trials is what separates &ldquo;interesting theory&rdquo; from serious evidence-building.
              But until final outcomes are available, you should still treat rapamycin as research rather than as a proven longevity prescription for the general public.
            </p>
          </div>
        </section>

        {/* Endpoints */}
        <section id="endpoints" className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Endpoints and What They Actually Prove</h2>

          <p className="mb-4">
            Longevity research often becomes confusing because owners assume all endpoints mean the same thing. They do not.
            Below is a practical way to interpret common endpoints in rapamycin-style dog studies.
          </p>

          <div className="space-y-4">
            <div className="bg-white border border-[#d9cfc2] rounded-lg p-5 shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Hard endpoints</h3>
              <ul className="list-disc pl-5 mb-0">
                <li>
                  Survival outcomes (time-to-event) are the closest match to the phrase &ldquo;extends lifespan,&rdquo; but they take years and require large enrollment.
                </li>
                <li>
                  Clearly defined disease events (for example, onset of a diagnosed age-related condition) can also be meaningful if measurement is standardized.
                </li>
              </ul>
            </div>

            <div className="bg-white border border-[#d9cfc2] rounded-lg p-5 shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Functional endpoints</h3>
              <ul className="list-disc pl-5 mb-0">
                <li>
                  Mobility and activity outcomes can be directly meaningful to owners if measured objectively and consistently.
                </li>
                <li>
                  Cognitive and sleep-wake proxies may be explored, but interpretation depends heavily on measurement rigor.
                </li>
              </ul>
            </div>

            <div className="bg-white border border-[#d9cfc2] rounded-lg p-5 shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Biomarkers</h3>
              <ul className="list-disc pl-5 mb-0">
                <li>
                  Biomarkers can be useful signals, but they are not proof of longer life.
                </li>
                <li>
                  Biomarker interpretation requires controls, trend analysis, and an evidence-based link to real outcomes.
                </li>
              </ul>
              <p className="text-sm text-gray-700 mt-3 mb-0">
                Deep dive:{" "}
                <Link className="underline" href={`/${locale}/blog/dog-longevity-biomarkers-guide`}>
                  Dog Longevity Biomarkers: Which Ones Matter, Which Ones Mislead, and How Owners Can Interpret Healthy Aging Claims
                </Link>
                .
              </p>
            </div>
          </div>

          <p className="mt-4 mb-0">
            The most common owner mistake is assuming that a biomarker improvement automatically implies a survival benefit. That assumption is not scientifically safe.
          </p>
        </section>

        {/* Safety */}
        <section id="safety" className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Safety Risks and Monitoring: The Parts Owners Should Not Skip</h2>

          <p className="mb-4">
            Safety is not a side note in aging research. It is the practical bottom line. Even if a drug improves certain measures, the question becomes: is it safe enough, for long enough, in real dogs?
            This is especially true for senior dogs who may have less organ reserve and more medications.
          </p>

          <h3 className="text-xl font-semibold mb-3">Practical safety concerns owners should understand</h3>
          <ul className="list-disc pl-5 mb-4">
            <li>
              <strong>Immune-related effects:</strong> rapamycin is associated with immune modulation, which is why infection risk, wound healing, and immune resilience are frequent concerns.
            </li>
            <li>
              <strong>Metabolic changes:</strong> some animals may experience changes in lipid patterns or glucose regulation, which can matter in older dogs.
            </li>
            <li>
              <strong>Mouth and GI issues:</strong> appetite changes, GI upset, and mouth irritation are concerns owners should know to watch for and report.
            </li>
            <li>
              <strong>Medication interactions:</strong> older dogs may be on pain meds, heart meds, endocrine meds, or seizure meds, and interaction risk must be evaluated case by case by a veterinarian.
            </li>
            <li>
              <strong>Illness interruptions:</strong> what happens if a dog becomes sick during treatment matters as much as what happens when the dog is stable.
            </li>
          </ul>

          <h3 className="text-xl font-semibold mb-3">If your dog participates in a study, ask these monitoring questions</h3>
          <ul className="list-disc pl-5 mb-4">
            <li>What labs are monitored, how often, and who pays?</li>
            <li>What adverse events have been observed so far, and how are they handled?</li>
            <li>What criteria trigger dose changes or withdrawal for safety?</li>
            <li>What is the plan if the dog needs antibiotics, surgery, or new medications mid-trial?</li>
            <li>How do you contact the study team for urgent concerns after hours?</li>
          </ul>

          <div className="bg-[#f6efe4] border border-[#d9cfc2] rounded-lg p-5">
            <p className="text-sm text-[#2c4a30] mb-0">
              Asking safety questions is not being negative. It is being a good guardian for a senior dog with less margin for error.
            </p>
          </div>
        </section>

        {/* Who should not */}
        <section id="who-should-not" className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Who Rapamycin Research Participation May Not Fit</h2>

          <p className="mb-4">
            Even in a well-run study, not every dog is a good match. Exclusions and caution categories exist to protect dogs and to keep data interpretable.
            Below are common categories that may make participation less appropriate, depending on the protocol and the dog&rsquo;s health status.
          </p>

          <ul className="list-disc pl-5 mb-4">
            <li>
              Dogs with unstable or advanced organ disease (kidney, liver, severe endocrine instability).
            </li>
            <li>
              Dogs with complex multi-medication regimens where interaction risk is high or hard to interpret.
            </li>
            <li>
              Dogs with recurrent infections or immune fragility concerns.
            </li>
            <li>
              Dogs who cannot reliably attend follow-ups or tolerate monitoring (because of stress, distance, or logistics).
            </li>
          </ul>

          <div className="bg-white border border-[#d9cfc2] rounded-lg p-5 shadow-sm">
            <p className="text-sm text-gray-700 mb-0">
              Important nuance: being a poor match for a study does not mean a dog matters less. It means the risk-benefit and interpretability may not be favorable.
              This is why protocols have eligibility boundaries.
            </p>
          </div>
        </section>

        {/* Owner decision */}
        <section id="owner-decision" className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Owner Decision Guide: How to Think Clearly About Rapamycin</h2>

          <p className="mb-4">
            If you are reading this because your dog is aging, you may feel urgency. Urgency makes people vulnerable to overpromises.
            Here is a grounded way to think about rapamycin-style research without falling into hype or despair.
          </p>

          <div className="space-y-4">
            <div className="bg-white border border-[#d9cfc2] rounded-lg p-5 shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Step 1: Decide what outcome you care about most</h3>
              <ul className="list-disc pl-5 mb-0">
                <li>Comfort and mobility?</li>
                <li>Resilience and fewer scary downturns?</li>
                <li>Delaying disease?</li>
                <li>More years overall?</li>
              </ul>
            </div>

            <div className="bg-white border border-[#d9cfc2] rounded-lg p-5 shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Step 2: Match that outcome to endpoints</h3>
              <p className="mb-0">
                If the evidence is mostly biomarkers, treat it as a signal. If it includes objective functional outcomes, that may be more directly meaningful.
                If it includes survival endpoints, expect long timelines.
              </p>
            </div>

            <div className="bg-white border border-[#d9cfc2] rounded-lg p-5 shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Step 3: Treat safety as the core question</h3>
              <p className="mb-0">
                Ask how monitoring works, what happens during illness, and how adverse events are managed.
                A drug that is &ldquo;fine&rdquo; on a good week may behave differently during stress.
              </p>
            </div>

            <div className="bg-white border border-[#d9cfc2] rounded-lg p-5 shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Step 4: If you are considering a study, use a structured checklist</h3>
              <p className="mb-0">
                This guide is built for owners making that exact decision:{' '}
                <Link className="underline" href={`/${locale}/blog/should-you-join-dog-longevity-study`}>
                  Should You Enroll Your Dog in a Longevity Study? A Clear, Owner-First Guide
                </Link>
                .
              </p>
            </div>
          </div>

          <div className="bg-[#f6efe4] border border-[#d9cfc2] rounded-lg p-5 mt-5">
            <p className="text-sm text-[#2c4a30] mb-0">
              The goal is not to &ldquo;believe&rdquo; or &ldquo;dismiss.&rdquo; The goal is to stay emotionally honest and evidence-driven at the same time.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">FAQ</h2>

          <div className="space-y-6">
            <div className="bg-white border border-[#d9cfc2] rounded-lg p-5 shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Is rapamycin proven to extend dogs&rsquo; lives?</h3>
              <p className="mb-0">
                Definitive proof requires long, controlled trials with meaningful endpoints. Rapamycin is being studied seriously, but owners should not treat early signals as final proof of extra years.
              </p>
            </div>

            <div className="bg-white border border-[#d9cfc2] rounded-lg p-5 shadow-sm">
              <h3 className="text-xl font-semibold mb-2">If my dog seems better on something, does that mean it is working?</h3>
              <p className="mb-0">
                It might, but it could also be normal variability, routine changes, or expectation bias. This is why controlled trials and objective measures matter.
              </p>
            </div>

            <div className="bg-white border border-[#d9cfc2] rounded-lg p-5 shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Why do studies focus on biomarkers?</h3>
              <p className="mb-0">
                Because biomarkers can move faster than survival outcomes. The mistake is treating biomarker shifts as guarantees. This guide explains how to interpret them safely.
              </p>
            </div>

            <div className="bg-white border border-[#d9cfc2] rounded-lg p-5 shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Should I try to get rapamycin for my dog outside a trial?</h3>
              <p className="mb-0">
                No. Rapamycin is not a casual supplement, and senior dogs often have hidden risks. Any consideration of this drug requires veterinary supervision, careful dosing strategy, and monitoring.
              </p>
            </div>
          </div>
        </section>

        {/* Related reading */}
        <section id="related-reading" className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">Related Reading</h2>

          <p className="mb-4">
            These pages are designed to work together so an anxious reader can get clarity without hype.
          </p>

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
              <Link className="underline" href={`/${locale}/blog/loyal-loy-002-explained`}>
                LOY-002 Explained: What It Is, Who It Is For, What the FDA Milestone Actually Means, What Trials Measure, and What Is Still Unknown
              </Link>
              {/* loyal-loy-002-explained.tsx */}
            </li>

            <li>
              <Link className="underline" href={`/${locale}/blog/should-you-join-dog-longevity-study`}>
                Should You Enroll Your Dog in a Longevity Study? A Clear, Owner-First Guide
              </Link>
              {/* should-you-join-dog-longevity-study.tsx */}
            </li>

            <li>
              <Link className="underline" href={`/${locale}/blog/supplements-vs-drugs-dog-longevity`}>
                Supplements vs Drugs in Dog Longevity: How Owners Can Tell the Difference
              </Link>
              {/* supplements-vs-drugs-dog-longevity.tsx */}
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
