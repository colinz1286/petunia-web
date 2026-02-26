'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function ShouldYouJoinDogLongevityStudy() {
  const locale = useLocale();

  const title =
    'Should You Enroll Your Dog in a Longevity Study? A Clear, Owner-First Checklist for Safety, Endpoints, Costs, and Real Expectations';
  const date = 'December 25, 2025';
  const categories = ['owner', 'veterinary'] as const;

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
            If you are considering enrolling your dog in a longevity study, you are probably carrying two emotions at once: hope and fear.
            Hope that the science might buy you more good time, and fear that you could make the wrong decision for your dog.
          </p>

          <p className="mb-4">
            This guide is designed to remove ambiguity. You will get a practical checklist of the exact questions to ask, how to interpret answers,
            what the real risks and commitments are, and how to decide in a calm, evidence-driven way even if you feel emotionally urgent.
          </p>

          <div className="bg-white border border-[#d9cfc2] rounded-lg p-5 shadow-sm">
            <p className="text-sm text-gray-700 mb-0">
              <strong>Important:</strong> Educational content only. A well-run study will never pressure you to enroll quickly.
              You have the right to ask questions, read paperwork slowly, and walk away if anything feels unclear.
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
              <a href="#what-a-study-is" className="underline">
                What a Longevity Study Is
              </a>
            </li>
            <li>
              <a href="#is-your-dog-a-fit" className="underline">
                Is Your Dog a Fit?
              </a>
            </li>
            <li>
              <a href="#endpoints" className="underline">
                Endpoints: What the Study Is Proving
              </a>
            </li>
            <li>
              <a href="#placebo" className="underline">
                Placebo, Blinding, and Bias
              </a>
            </li>
            <li>
              <a href="#safety" className="underline">
                Safety Monitoring and Withdrawal Rules
              </a>
            </li>
            <li>
              <a href="#time-and-logistics" className="underline">
                Time, Travel, and Logistics
              </a>
            </li>
            <li>
              <a href="#costs" className="underline">
                Costs: What Is Covered and What Is Not
              </a>
            </li>
            <li>
              <a href="#data" className="underline">
                Data, Privacy, and What Is Shared
              </a>
            </li>
            <li>
              <a href="#how-to-decide" className="underline">
                How to Decide
              </a>
            </li>
            <li>
              <a href="#script" className="underline">
                Questions Script
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
              A good longevity study is not a sales pitch. It is a structured, monitored experiment designed to answer a specific question with defined endpoints.
            </li>
            <li>
              Your top priorities should be: <strong>endpoint clarity</strong>, <strong>safety monitoring</strong>, <strong>withdrawal rules</strong>, and <strong>time commitment realism</strong>.
            </li>
            <li>
              If you do not understand what the study is trying to prove, how adverse events are handled, or what happens if your dog gets sick mid-study, do not enroll until you do.
            </li>
            <li>
              Being randomized to placebo can be emotionally hard. Blinding exists to protect the truth, not to trick you.
            </li>
            <li>
              It is always acceptable to decline. The &ldquo;right&rdquo; decision is the one that protects your dog and fits your ability to follow the protocol.
            </li>
          </ul>

          <div className="bg-[#f6efe4] border border-[#d9cfc2] rounded-lg p-5">
            <p className="text-sm text-[#2c4a30] mb-0">
              If you only take one thing: <strong>a study that cannot clearly explain endpoints and safety monitoring is not a study you should join.</strong>
            </p>
          </div>
        </section>

        {/* What a study is */}
        <section id="what-a-study-is" className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">What a Dog Longevity Study Actually Is</h2>

          <p className="mb-4">
            A dog longevity study is a research program designed to measure how an intervention affects aging-related outcomes in dogs.
            That intervention might be a drug, a diet strategy, a monitoring program, or another approach designed to influence healthspan.
          </p>

          <p className="mb-4">
            A legitimate study should have:
          </p>

          <ul className="list-disc pl-5 mb-4">
            <li>A written protocol with defined inclusion and exclusion criteria.</li>
            <li>Clear endpoints (what the study is trying to prove).</li>
            <li>Defined monitoring schedules and safety rules.</li>
            <li>A consent process that explains risks, benefits, and uncertainty.</li>
            <li>A plan for data collection, storage, and analysis.</li>
          </ul>

          <div className="bg-white border border-[#d9cfc2] rounded-lg p-5 shadow-sm">
            <p className="text-sm text-gray-700 mb-0">
              If you want context on why endpoints matter so much (and why biomarker-only claims can mislead), these two supporting pieces explain it clearly:
              <br />
              <Link className="underline" href={`/${locale}/blog/dog-longevity-biomarkers-guide`}>
                Dog Longevity Biomarkers: Which Ones Matter, Which Ones Mislead, and How Owners Can Interpret Healthy Aging Claims
              </Link>
              <br />
              <Link className="underline" href={`/${locale}/blog/do-dog-anti-ageing-drugs-really-work`}>
                Do Anti-Ageing Drugs for Dogs Really Work? A Critical, Owner-First Review
              </Link>
            </p>
          </div>
        </section>

        {/* Fit */}
        <section id="is-your-dog-a-fit" className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Is Your Dog a Fit? (And Why &ldquo;Not Eligible&rdquo; Is Not an Insult)</h2>

          <p className="mb-4">
            Study eligibility is about safety and interpretability. Early-stage studies often exclude dogs with unstable disease, advanced organ dysfunction, or complex medication stacks,
            not because those dogs matter less, but because early trials must reduce confounding and protect higher-risk participants.
          </p>

          <h3 className="text-xl font-semibold mb-3">Common reasons a dog may not be eligible</h3>
          <ul className="list-disc pl-5 mb-4">
            <li>Recent major illness, hospitalization, or surgery.</li>
            <li>Advanced kidney or liver disease.</li>
            <li>Uncontrolled endocrine disease.</li>
            <li>Frequent infections or immune fragility concerns.</li>
            <li>Complex multi-medication regimens with interaction risk.</li>
            <li>Behavioral or stress limitations that make repeated visits unsafe or unrealistic.</li>
          </ul>

          <h3 className="text-xl font-semibold mb-3">What you can do if your dog is not eligible</h3>
          <ul className="list-disc pl-5 mb-4">
            <li>Ask whether future protocols may include broader populations.</li>
            <li>Ask about observational studies that do not involve experimental drugs.</li>
            <li>Focus on high-confidence healthspan care with your veterinarian.</li>
          </ul>

          <p className="mb-0">
            A study should never pressure you to view ineligibility as failure. It is a safety boundary.
          </p>
        </section>

        {/* Endpoints */}
        <section id="endpoints" className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Endpoints: What the Study Is Actually Trying to Prove</h2>

          <p className="mb-4">
            If you ask only one question before joining a study, make it this: <strong>What is the primary endpoint?</strong>
            The primary endpoint is the outcome the study is designed to prove.
          </p>

          <h3 className="text-xl font-semibold mb-3">Common endpoint types in longevity research</h3>
          <ul className="list-disc pl-5 mb-4">
            <li>
              <strong>Survival endpoints:</strong> time-to-event measures that relate directly to lifespan, usually requiring long follow-up.
            </li>
            <li>
              <strong>Disease delay endpoints:</strong> delayed onset of defined age-related conditions, if criteria are clear and consistent.
            </li>
            <li>
              <strong>Functional endpoints:</strong> mobility, activity, strength, cognition proxies, and quality-of-life tools.
            </li>
            <li>
              <strong>Biomarkers:</strong> metabolic or inflammatory markers used as signals or surrogates.
            </li>
          </ul>

          <h3 className="text-xl font-semibold mb-3">Owner rule of thumb</h3>
          <p className="mb-4">
            The bigger the claim, the stronger the endpoint should be. A study that is only measuring biomarkers cannot responsibly promise extra years.
          </p>

          <div className="bg-[#f6efe4] border border-[#d9cfc2] rounded-lg p-5">
            <p className="text-sm text-[#2c4a30] mb-0">
              If you want to become fluent in biomarker-based claims, read this supporting article:
              <br />
              <Link className="underline" href={`/${locale}/blog/dog-longevity-biomarkers-guide`}>
                Dog Longevity Biomarkers: Which Ones Matter, Which Ones Mislead, and How Owners Can Interpret Healthy Aging Claims
              </Link>
            </p>
          </div>
        </section>

        {/* Placebo */}
        <section id="placebo" className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Placebo, Blinding, and Bias: Why They Exist</h2>

          <p className="mb-4">
            Owners sometimes feel offended by placebo and blinding. It can feel like the researchers are not taking your dog seriously. The truth is the opposite.
            Blinding and placebo control exist to protect the accuracy of results in a setting where love and hope can distort perception.
          </p>

          <h3 className="text-xl font-semibold mb-3">What placebo and blinding protect against</h3>
          <ul className="list-disc pl-5 mb-4">
            <li>Normal day-to-day variability interpreted as treatment effect.</li>
            <li>Owner attention changes (more exercise, better routine, more monitoring) when starting a new intervention.</li>
            <li>Unconscious reporting bias when owners know or suspect treatment status.</li>
          </ul>

          <h3 className="text-xl font-semibold mb-3">Questions to ask about study design</h3>
          <ul className="list-disc pl-5 mb-4">
            <li>Is the study randomized?</li>
            <li>Is there a placebo or control group?</li>
            <li>Is it blinded, and who is blinded?</li>
            <li>What steps reduce bias if full blinding is not possible?</li>
          </ul>
        </section>

        {/* Safety */}
        <section id="safety" className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Safety Monitoring and Withdrawal Rules: What You Must Understand Before Signing</h2>

          <p className="mb-4">
            Safety is not &ldquo;did anyone die.&rdquo; Safety is the monitoring plan, the adverse event plan, and the withdrawal rules.
            A well-run study should clearly explain what happens if your dog gets sick, needs surgery, develops a new diagnosis, or has abnormal labs.
          </p>

          <h3 className="text-xl font-semibold mb-3">The monitoring questions you should ask</h3>
          <ul className="list-disc pl-5 mb-4">
            <li>What labs are monitored, and how often?</li>
            <li>What is normal variance vs what triggers concern?</li>
            <li>Who reviews results and contacts you?</li>
            <li>What happens if a result is abnormal after hours?</li>
          </ul>

          <h3 className="text-xl font-semibold mb-3">The adverse event questions you should ask</h3>
          <ul className="list-disc pl-5 mb-4">
            <li>What side effects have been observed so far?</li>
            <li>How do you report symptoms, and how quickly do you get a response?</li>
            <li>What triggers dose changes, pauses, or withdrawal?</li>
            <li>What happens if my dog needs another medication while enrolled?</li>
          </ul>

          <h3 className="text-xl font-semibold mb-3">Withdrawal rules should be explicit</h3>
          <p className="mb-0">
            You should know exactly what would cause the study to withdraw your dog for safety, and you should also know your rights to withdraw voluntarily at any time.
          </p>
        </section>

        {/* Logistics */}
        <section id="time-and-logistics" className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Time, Travel, and Logistics: The Part That Quietly Breaks Participation</h2>

          <p className="mb-4">
            Many owners underestimate the practical burden of participation. Even if the science is solid, a study fails for an individual dog if the owner cannot realistically maintain follow-ups.
            Be honest about logistics before you commit.
          </p>

          <h3 className="text-xl font-semibold mb-3">Questions to ask about logistics</h3>
          <ul className="list-disc pl-5 mb-4">
            <li>How often are in-person visits required?</li>
            <li>How long do visits typically take?</li>
            <li>Are there home monitoring requirements (activity trackers, logs, videos)?</li>
            <li>What happens if I miss a visit or need to reschedule?</li>
            <li>Is travel reimbursed, or is this fully on the owner?</li>
          </ul>

          <div className="bg-white border border-[#d9cfc2] rounded-lg p-5 shadow-sm">
            <p className="text-sm text-gray-700 mb-0">
              A well-run study will not shame you for saying &ldquo;this is too much.&rdquo; They would rather you decline than drop out mid-stream and compromise your dog&rsquo;s experience and the data.
            </p>
          </div>
        </section>

        {/* Costs */}
        <section id="costs" className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Costs: What Is Covered and What Is Not</h2>

          <p className="mb-4">
            Study participation is sometimes low-cost and sometimes not. Some studies cover exams, labs, and the intervention. Others cover only part of care.
            You must clarify costs up front so you are not surprised later.
          </p>

          <h3 className="text-xl font-semibold mb-3">Questions to ask about costs</h3>
          <ul className="list-disc pl-5 mb-4">
            <li>What costs are covered (exams, labs, medication, imaging, follow-ups)?</li>
            <li>What costs are not covered (emergency care, unrelated illness, routine vet care)?</li>
            <li>Is travel reimbursed?</li>
            <li>What happens financially if my dog is withdrawn for safety?</li>
            <li>What happens financially if I withdraw voluntarily?</li>
          </ul>

          <p className="mb-0">
            A study team should be comfortable discussing money clearly. If answers are vague, pause.
          </p>
        </section>

        {/* Data */}
        <section id="data" className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Data, Privacy, and What Is Shared</h2>

          <p className="mb-4">
            Longevity studies often collect detailed health data. That can include lab results, imaging summaries, activity data, and owner-reported surveys.
            It can also include information about your dog&rsquo;s breed, age, and medical history.
          </p>

          <h3 className="text-xl font-semibold mb-3">Questions to ask about data</h3>
          <ul className="list-disc pl-5 mb-4">
            <li>What data is collected and how is it stored?</li>
            <li>Is data anonymized or de-identified?</li>
            <li>Will data be shared with partners or used in future studies?</li>
            <li>Will you receive your dog&rsquo;s results (labs, findings), and when?</li>
            <li>Can you opt out of certain data sharing while remaining in the study?</li>
          </ul>

          <p className="mb-0">
            You should not feel weird asking these questions. Data privacy is part of responsible research.
          </p>
        </section>

        {/* How to decide */}
        <section id="how-to-decide" className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">How to Decide: A Calm Decision Framework</h2>

          <p className="mb-4">
            The best decisions are made when you separate emotion from structure. Use this framework to decide without rushing.
          </p>

          <div className="space-y-4">
            <div className="bg-white border border-[#d9cfc2] rounded-lg p-5 shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Step 1: Define your non-negotiables</h3>
              <ul className="list-disc pl-5 mb-0">
                <li>Clear endpoint explanation</li>
                <li>Clear monitoring plan</li>
                <li>Clear withdrawal rules</li>
                <li>Clear cost expectations</li>
              </ul>
            </div>

            <div className="bg-white border border-[#d9cfc2] rounded-lg p-5 shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Step 2: Evaluate the risk profile for your dog</h3>
              <p className="mb-0">
                If your dog has fragile health, complex medications, or severe anxiety at the vet, the risk may outweigh the potential benefit even in a well-run study.
              </p>
            </div>

            <div className="bg-white border border-[#d9cfc2] rounded-lg p-5 shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Step 3: Evaluate your ability to follow the protocol</h3>
              <p className="mb-0">
                If you cannot realistically maintain visits and monitoring, declining is responsible and kind.
              </p>
            </div>

            <div className="bg-white border border-[#d9cfc2] rounded-lg p-5 shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Step 4: Sleep on it</h3>
              <p className="mb-0">
                Any study worth joining will still be there tomorrow. Do not sign in a rush unless you have full clarity.
              </p>
            </div>
          </div>

          <div className="bg-[#f6efe4] border border-[#d9cfc2] rounded-lg p-5 mt-5">
            <p className="text-sm text-[#2c4a30] mb-0">
              A compassionate reminder: declining a study does not mean you failed your dog. It means you protected your dog in the way that fits your reality.
            </p>
          </div>
        </section>

        {/* Script */}
        <section id="script" className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">A Simple Questions Script You Can Use With Any Study Team</h2>

          <p className="mb-4">
            If you freeze in the moment (very normal), you can read these questions directly. A high-quality study team will welcome them.
          </p>

          <ul className="list-disc pl-5 mb-4">
            <li>What is the primary endpoint, and how long does the study run?</li>
            <li>Is it randomized, placebo-controlled, and blinded?</li>
            <li>What monitoring is required, and what triggers safety withdrawal?</li>
            <li>What side effects have you seen so far, and how are emergencies handled?</li>
            <li>What costs are covered, what is not covered, and is travel reimbursed?</li>
            <li>What happens if my dog needs other medications or surgery during the study?</li>
            <li>What data do you collect, and what is shared outside the study?</li>
            <li>Will I receive my dog&rsquo;s lab results and findings during the study?</li>
            <li>What happens at the end of the study, and is there follow-up?</li>
          </ul>

          <p className="mb-0">
            If answers are vague, ask again. If they are still vague, that is a signal.
          </p>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">FAQ</h2>

          <div className="space-y-6">
            <div className="bg-white border border-[#d9cfc2] rounded-lg p-5 shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Is it bad if my dog gets placebo?</h3>
              <p className="mb-0">
                It can feel disappointing, but placebo is not punishment. Placebo controls protect the truth and prevent false conclusions.
                A well-run study should also ensure your dog still receives appropriate standard veterinary care during participation.
              </p>
            </div>

            <div className="bg-white border border-[#d9cfc2] rounded-lg p-5 shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Can I withdraw if I get uncomfortable?</h3>
              <p className="mb-0">
                In ethical research, yes. You should be able to withdraw at any time. Ask exactly what the withdrawal process looks like and what happens with follow-up care and costs.
              </p>
            </div>

            <div className="bg-white border border-[#d9cfc2] rounded-lg p-5 shadow-sm">
              <h3 className="text-xl font-semibold mb-2">What if my dog gets sick during the study?</h3>
              <p className="mb-0">
                This is one of the most important questions. The study team should explain how illness is handled, what triggers medication pauses, and whether emergency care is covered.
                If they cannot explain this clearly, do not enroll yet.
              </p>
            </div>

            <div className="bg-white border border-[#d9cfc2] rounded-lg p-5 shadow-sm">
              <h3 className="text-xl font-semibold mb-2">How can I tell if a study is high quality?</h3>
              <p className="mb-0">
                Look for clear endpoints, blinding and controls when feasible, transparent safety monitoring, and a consent process that welcomes questions.
                A trustworthy team is not threatened by careful owners.
              </p>
            </div>
          </div>
        </section>

        {/* Related */}
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
              <Link className="underline" href={`/${locale}/blog/loyal-loy-002-explained`}>
                LOY-002 Explained: What It Is, Who It Is For, What the FDA Milestone Actually Means, What Trials Measure, and What Is Still Unknown
              </Link>
              {/* loyal-loy-002-explained.tsx */}
            </li>
            <li>
              <Link className="underline" href={`/${locale}/blog/rapamycin-longevity-research-dogs`}>
                Rapamycin-Style Longevity Research in Dogs: What Studies Measure, Potential Benefits, Safety Risks, Who It May Fit, and What Is Still Unknown
              </Link>
              {/* rapamycin-longevity-research-dogs.tsx */}
            </li>
          </ul>
        </section>

        {/* Back */}
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
