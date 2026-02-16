'use client';

import Head from 'next/head';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function LoyalLOY002Explained() {
  const locale = useLocale();

  const title =
    'LOY-002 Explained: What It Is, Who It Is For, What the FDA Milestone Actually Means, What Trials Measure, and What Is Still Unknown';
  const date = 'December 25, 2025';
  const description =
    'A comprehensive, owner-first deep dive into LOY-002: what it is designed to do, eligibility basics, how the conditional approval pathway and “reasonable expectation of effectiveness” are commonly misunderstood, what endpoints are being measured, what safety questions matter most for senior dogs, and how to evaluate claims without false certainty.';

  const slug = 'loyal-loy-002-explained';

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
  // rapamycin-longevity-research-dogs.tsx                         slug: rapamycin-longevity-research-dogs
  // should-you-join-dog-longevity-study.tsx                       slug: should-you-join-dog-longevity-study
  // supplements-vs-drugs-dog-longevity.tsx                        slug: supplements-vs-drugs-dog-longevity
  // senolytics-for-dogs-explained.tsx                             slug: senolytics-for-dogs-explained
  // metformin-for-dog-longevity-claims.tsx                        slug: metformin-for-dog-longevity-claims

  return (
    <>
      <Head>
        <title>{title} – Petunia Blog</title>
        <meta name="description" content={description} />
        <meta name="robots" content="all" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'BlogPosting',
              headline: title,
              description,
              datePublished: date,
              dateModified: date,
              author: { '@type': 'Organization', name: 'Petunia' },
              publisher: {
                '@type': 'Organization',
                name: 'Petunia',
                logo: {
                  '@type': 'ImageObject',
                  url: 'https://www.petuniapets.com/logo.png',
                },
              },
            }),
          }}
        />
      </Head>

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
            If you searched for LOY-002, you are probably in one of two emotional states: hopeful (because you want more good time with your dog)
            or skeptical (because you have seen a lot of wellness marketing dressed up as science). Both are reasonable.
          </p>

          <p className="mb-4">
            This guide is built to give you practical clarity. We will explain what LOY-002 is designed to do, who it is meant for, what the FDA milestone actually means
            (and what it does not mean), what trials measure, and the safety questions that matter most for senior dogs.
          </p>

          <div className="bg-white border border-[#d9cfc2] rounded-lg p-5 shadow-sm">
            <p className="text-sm text-gray-700 mb-0">
              <strong>Important:</strong> Educational content only. Do not attempt to source, substitute, or experiment with medications outside a veterinarian-led plan.
              Longevity research involves real uncertainty, especially in older dogs with lower physiologic reserve.
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
              <a href="#what-is" className="underline">
                What LOY-002 Is
              </a>
            </li>
            <li>
              <a href="#who-for" className="underline">
                Who LOY-002 Is For
              </a>
            </li>
            <li>
              <a href="#what-claim" className="underline">
                What It Is Claiming to Do
              </a>
            </li>
            <li>
              <a href="#fda-status" className="underline">
                FDA Milestone Explained
              </a>
            </li>
            <li>
              <a href="#endpoints" className="underline">
                What Trials Measure
              </a>
            </li>
            <li>
              <a href="#biomarkers" className="underline">
                Biomarkers: Useful, Not Proof
              </a>
            </li>
            <li>
              <a href="#safety" className="underline">
                Safety Questions
              </a>
            </li>
            <li>
              <a href="#what-is-unknown" className="underline">
                What Is Still Unknown
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
              LOY-002 is a veterinary drug candidate being developed with the goal of extending healthy lifespan and maintaining quality of life in senior dogs.
            </li>
            <li>
              Public milestones you may see referenced involve the FDA&rsquo;s veterinary drug approval framework, including language like &ldquo;reasonable expectation of effectiveness.&rdquo;
              This is commonly misunderstood as &ldquo;FDA says it works.&rdquo; It is not that simple.
            </li>
            <li>
              Early-stage longevity programs often measure metabolic and inflammation-related markers, plus function and safety, because survival endpoints take years.
              Those measures can be meaningful signals, but they are not automatic proof of extra years of life.
            </li>
            <li>
              The most important owner questions are: What is the exact intended use? What endpoint is being claimed? How strong is the trial design? What is the safety monitoring plan?
            </li>
            <li>
              If you want to keep your feet on the ground, treat LOY-002 as: <strong>promising research in progress</strong>, not a proven lifespan guarantee.
            </li>
          </ul>

          <div className="bg-[#f6efe4] border border-[#d9cfc2] rounded-lg p-5">
            <p className="text-sm text-[#2c4a30] mb-0">
              If you only take one thing from this article: <strong>the FDA milestone is a stage-of-evidence statement, not a promise of extra years.</strong>
              Endpoints and trial design matter more than headlines.
            </p>
          </div>
        </section>

        {/* What is */}
        <section id="what-is" className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">What LOY-002 Is (In Plain English)</h2>

          <p className="mb-4">
            LOY-002 is a prescription-drug candidate being developed specifically for aging biology in dogs. Instead of treating one named disease (like a parasite or an infection),
            the intent is to influence aging-related decline patterns that increase risk for many downstream problems.
          </p>

          <p className="mb-4">
            The simplest owner-first framing is:
          </p>

          <ul className="list-disc pl-5 mb-4">
            <li>
              It is designed for senior dogs rather than for puppies or young adults.
            </li>
            <li>
              It is positioned around maintaining healthspan (good years) and potentially extending healthy lifespan, rather than promising something like immortality.
            </li>
            <li>
              It is being pursued through the FDA&rsquo;s veterinary drug approval process, which requires safety, manufacturing quality, and effectiveness evidence for an intended use.
            </li>
          </ul>

          <div className="bg-white border border-[#d9cfc2] rounded-lg p-5 shadow-sm">
            <p className="text-sm text-gray-700 mb-0">
              Context: This article focuses on how to interpret LOY-002 claims responsibly. For the broader landscape of anti-ageing drugs and why endpoints matter, start here:{' '}
              <Link className="underline" href={`/${locale}/blog/do-dog-anti-ageing-drugs-really-work`}>
                Do Anti-Ageing Drugs for Dogs Really Work? A Critical, Owner-First Review
              </Link>
              .
            </p>
          </div>
        </section>

        {/* Who for */}
        <section id="who-for" className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Who LOY-002 Is For (Eligibility, In Owner Terms)</h2>

          <p className="mb-4">
            LOY-002 is generally discussed in the context of senior dogs and is commonly described as being intended for older dogs rather than only one narrow breed type.
            Eligibility can vary depending on study design and regulatory stage, but owners should think about eligibility in three layers:
          </p>

          <div className="space-y-4">
            <div className="bg-white border border-[#d9cfc2] rounded-lg p-5 shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Layer 1: Age and baseline senior status</h3>
              <p className="mb-0">
                Longevity candidates for seniors typically focus on dogs who are already in the later stage of life, where aging-related metabolic and functional decline is more measurable.
              </p>
            </div>

            <div className="bg-white border border-[#d9cfc2] rounded-lg p-5 shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Layer 2: Health profile and stability</h3>
              <p className="mb-3">
                Trials often exclude dogs with unstable disease, severe organ dysfunction, or complex medication stacks where safety interpretation becomes difficult.
                That is not because those dogs matter less. It is because early trials must be able to separate drug effects from unrelated medical chaos.
              </p>
              <ul className="list-disc pl-5 mb-0">
                <li>Recent major illness or hospitalization may exclude a dog temporarily.</li>
                <li>Advanced organ disease may raise risk and limit eligibility.</li>
                <li>Some medications may create interaction concerns.</li>
              </ul>
            </div>

            <div className="bg-white border border-[#d9cfc2] rounded-lg p-5 shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Layer 3: Practical ability to participate</h3>
              <p className="mb-0">
                Many longevity studies require consistent follow-ups, lab work, and monitoring. Owner schedule and access to participating clinics can be a limiting factor.
              </p>
            </div>
          </div>
        </section>

        {/* What claim */}
        <section id="what-claim" className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">What LOY-002 Is Claiming to Do (Healthspan vs Lifespan)</h2>

          <p className="mb-4">
            When you hear longevity language, always split it into two different goals:
          </p>

          <ul className="list-disc pl-5 mb-4">
            <li>
              <strong>Healthspan:</strong> how long your dog stays comfortable, mobile, engaged, and resilient (more good years).
            </li>
            <li>
              <strong>Lifespan:</strong> total time alive (more years, period).
            </li>
          </ul>

          <p className="mb-4">
            A responsible interpretation of LOY-002 positioning is that it aims to improve the biology of aging in a way that could meaningfully extend healthy years.
            Whether that translates into proven lifespan extension is a harder claim that typically requires longer endpoints and broader replication.
          </p>

          <div className="bg-[#f6efe4] border border-[#d9cfc2] rounded-lg p-5">
            <p className="text-sm text-[#2c4a30] mb-0">
              A claim about healthspan can be meaningful even if lifespan does not change. Owners should not treat those as the same claim.
            </p>
          </div>
        </section>

        {/* FDA status */}
        <section id="fda-status" className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">The FDA Milestone Explained: What It Means and What It Does Not</h2>

          <p className="mb-4">
            Much of the public LOY-002 conversation references FDA milestones and phrases like &ldquo;reasonable expectation of effectiveness.&rdquo;
            Owners often interpret that as &ldquo;the FDA said the drug works.&rdquo; The more accurate interpretation is: it reflects a regulatory stage where early evidence is considered credible enough
            to justify continuing under a defined pathway, but it is not a final proof of the boldest possible outcome.
          </p>

          <h3 className="text-xl font-semibold mb-3">What &ldquo;reasonable expectation of effectiveness&rdquo; usually signals</h3>
          <ul className="list-disc pl-5 mb-4">
            <li>There is a plausible mechanism and early evidence consistent with the intended use.</li>
            <li>The evidence is strong enough to move forward under the relevant veterinary approval framework.</li>
            <li>It is a serious milestone, but it is not the same as &ldquo;substantial evidence&rdquo; for a final, expansive claim.</li>
          </ul>

          <h3 className="text-xl font-semibold mb-3">What it does not mean</h3>
          <ul className="list-disc pl-5 mb-4">
            <li>It does not prove a dog will live longer.</li>
            <li>It does not guarantee full approval for a lifespan-extension claim.</li>
            <li>It does not remove the need for ongoing safety, manufacturing, and effectiveness data.</li>
          </ul>

          <div className="bg-white border border-[#d9cfc2] rounded-lg p-5 shadow-sm">
            <p className="text-sm text-gray-700 mb-0">
              If you want the most complete owner-first regulatory explanation, read:{' '}
              <Link className="underline" href={`/${locale}/blog/fda-veterinary-longevity-claims`}>
                How the FDA Evaluates Veterinary Longevity Claims: Conditional Approval, Endpoints, and What Owners Should Understand
              </Link>
              .
            </p>
          </div>
        </section>

        {/* Endpoints */}
        <section id="endpoints" className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">What Trials Measure for LOY-002 Style Drugs (and Why)</h2>

          <p className="mb-4">
            Longevity research has an unavoidable problem: the outcome you care about most (years of life) takes years to measure. So early and mid-stage trials often rely on endpoints that can be measured sooner.
            That can be scientifically legitimate. It becomes misleading when those endpoints are marketed as if they are identical to survival proof.
          </p>

          <h3 className="text-xl font-semibold mb-3">Common endpoint buckets in senior-dog longevity trials</h3>
          <ul className="list-disc pl-5 mb-4">
            <li>
              <strong>Metabolic signals:</strong> markers related to metabolic health that may correlate with downstream risk.
            </li>
            <li>
              <strong>Inflammation-related signals:</strong> patterns that may reflect aging-related inflammatory burden, interpreted cautiously.
            </li>
            <li>
              <strong>Function and mobility:</strong> standardized mobility scoring, activity patterns, and quality-of-life instruments.
            </li>
            <li>
              <strong>Safety and tolerability:</strong> adverse events, lab trends, and dropout reasons.
            </li>
          </ul>

          <h3 className="text-xl font-semibold mb-3">What owners should look for in trial reporting</h3>
          <ul className="list-disc pl-5 mb-4">
            <li>Clear primary endpoint definitions (what the trial is trying to prove).</li>
            <li>Controls and blinding where feasible (reduces expectation bias).</li>
            <li>Enough follow-up time to match the magnitude of the claim.</li>
            <li>Transparent reporting of adverse events and monitoring plans.</li>
          </ul>

          <div className="bg-[#f6efe4] border border-[#d9cfc2] rounded-lg p-5">
            <p className="text-sm text-[#2c4a30] mb-0">
              Owner takeaway: a trial can be high-quality and still be unable to answer lifespan questions yet. That is normal for early-stage longevity science.
            </p>
          </div>
        </section>

        {/* Biomarkers */}
        <section id="biomarkers" className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Biomarkers: Useful Signals, But Not Automatic Proof</h2>

          <p className="mb-4">
            Biomarkers are often the center of longevity conversations because they can move faster than survival outcomes. The mistake is treating biomarker improvements as a guarantee of added years.
            The disciplined approach is to treat biomarkers as clues that may justify longer, harder studies.
          </p>

          <h3 className="text-xl font-semibold mb-3">The four questions that make biomarker claims interpretable</h3>
          <ul className="list-disc pl-5 mb-4">
            <li>
              <strong>Which biomarker, specifically?</strong> Vague phrases like &ldquo;improved aging biomarkers&rdquo; are not enough.
            </li>
            <li>
              <strong>Compared to what?</strong> Baseline alone is weak. Placebo or control comparisons matter.
            </li>
            <li>
              <strong>Measured how?</strong> One-time measurements are noisy; trends with standardized methods are more meaningful.
            </li>
            <li>
              <strong>Predicts what outcome?</strong> The biomarker needs a real-world connection to function, disease risk, or resilience.
            </li>
          </ul>

          <div className="bg-white border border-[#d9cfc2] rounded-lg p-5 shadow-sm">
            <p className="text-sm text-gray-700 mb-0">
              If you want a full owner-first guide to biomarker claims (including common ways they mislead), read:{' '}
              <Link className="underline" href={`/${locale}/blog/dog-longevity-biomarkers-guide`}>
                Dog Longevity Biomarkers: Which Ones Matter, Which Ones Mislead, and How Owners Can Interpret Healthy Aging Claims
              </Link>
              .
            </p>
          </div>
        </section>

        {/* Safety */}
        <section id="safety" className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Safety Questions That Matter Most for Senior Dogs</h2>

          <p className="mb-4">
            Even if a longevity drug eventually shows benefit, safety is the practical bottom line. Older dogs often have hidden fragility and are more likely to be on multiple medications.
            That changes the risk profile compared to young, healthy animals.
          </p>

          <h3 className="text-xl font-semibold mb-3">Safety concerns owners should think about (without panic)</h3>
          <ul className="list-disc pl-5 mb-4">
            <li>
              <strong>Organ reserve:</strong> how kidneys and liver handle stress in older age, and how labs trend over time.
            </li>
            <li>
              <strong>Medication interactions:</strong> especially common senior-dog meds (pain control, heart meds, endocrine meds, seizure meds).
            </li>
            <li>
              <strong>GI tolerance and appetite:</strong> older dogs can be more sensitive to chronic changes in appetite or digestion.
            </li>
            <li>
              <strong>Illness interruptions:</strong> what happens if a dog gets sick during treatment (infection, dehydration, anesthesia needs).
            </li>
            <li>
              <strong>Monitoring burden:</strong> how often labs must be checked and who coordinates that care.
            </li>
          </ul>

          <h3 className="text-xl font-semibold mb-3">If your dog ever joins a study, ask these directly</h3>
          <ul className="list-disc pl-5 mb-4">
            <li>What is the monitoring schedule (labs, exams, check-ins)?</li>
            <li>What adverse events have been observed so far, and how are they managed?</li>
            <li>What triggers withdrawal from the study for safety?</li>
            <li>What happens if the dog needs new medications mid-study?</li>
            <li>What is the plan for urgent concerns outside normal clinic hours?</li>
          </ul>

          <div className="bg-[#f6efe4] border border-[#d9cfc2] rounded-lg p-5">
            <p className="text-sm text-[#2c4a30] mb-0">
              A compassionate truth: asking safety questions is not being negative. It is being a good guardian for a senior dog with less reserve.
            </p>
          </div>
        </section>

        {/* Unknowns */}
        <section id="what-is-unknown" className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">What Is Still Unknown (The List Owners Deserve to See)</h2>

          <p className="mb-4">
            If you read only marketing summaries, you will often miss the uncertainty list. Here is the honest uncertainty list owners should keep in mind for LOY-002 style longevity candidates.
          </p>

          <ul className="list-disc pl-5 mb-4">
            <li>
              <strong>Lifespan proof:</strong> whether treated dogs live longer in a way that is consistent and replicable across real-world populations.
            </li>
            <li>
              <strong>Disease delay:</strong> whether the drug meaningfully reduces or delays specific age-related conditions (and which ones).
            </li>
            <li>
              <strong>Long-term safety:</strong> multi-year safety across diverse breeds, comorbidities, and medication stacks.
            </li>
            <li>
              <strong>Who benefits most:</strong> which ages, sizes, and baseline health profiles see the most meaningful effect.
            </li>
            <li>
              <strong>Durability:</strong> whether benefits persist or fade, and how interruptions (illness, stress) affect outcomes.
            </li>
            <li>
              <strong>Real-world adherence:</strong> whether owners can maintain dosing and monitoring long-term and what that means for effectiveness.
            </li>
          </ul>

          <div className="bg-white border border-[#d9cfc2] rounded-lg p-5 shadow-sm">
            <p className="text-sm text-gray-700 mb-0">
              This is exactly why the broader pillar article focuses so heavily on trial design and endpoints:{' '}
              <Link className="underline" href={`/${locale}/blog/do-dog-anti-ageing-drugs-really-work`}>
                Do Anti-Ageing Drugs for Dogs Really Work? A Critical, Owner-First Review
              </Link>
              .
            </p>
          </div>
        </section>

        {/* Owner decision */}
        <section id="owner-decision" className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Owner Decision Guide: How to Think Clearly If You Are Considering LOY-002 or a Longevity Study</h2>

          <p className="mb-4">
            If you are reading this because your dog is aging, you might feel urgency. Urgency can make people vulnerable to overpromises. Use this section to stay grounded.
          </p>

          <div className="space-y-4">
            <div className="bg-white border border-[#d9cfc2] rounded-lg p-5 shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Step 1: Decide what you actually want</h3>
              <ul className="list-disc pl-5 mb-0">
                <li>More comfortable time (healthspan)?</li>
                <li>Delaying a specific disease your dog is high-risk for?</li>
                <li>More years overall (lifespan)?</li>
              </ul>
            </div>

            <div className="bg-white border border-[#d9cfc2] rounded-lg p-5 shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Step 2: Match the goal to the endpoint</h3>
              <p className="mb-0">
                If the endpoint is biomarkers, interpret it as a signal. If the endpoint is function, it may be more directly meaningful. If the endpoint is survival, you are looking at long timelines.
              </p>
            </div>

            <div className="bg-white border border-[#d9cfc2] rounded-lg p-5 shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Step 3: Pressure-test safety</h3>
              <p className="mb-0">
                Ask how safety is monitored, how adverse events are handled, and what happens if your dog develops a new problem mid-course.
              </p>
            </div>

            <div className="bg-white border border-[#d9cfc2] rounded-lg p-5 shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Step 4: If it is a study, read the study like a grown-up contract</h3>
              <p className="mb-3">
                You should understand what you are agreeing to. A well-run trial should welcome questions and explain expectations clearly.
              </p>
              <p className="mb-0">
                If you want a complete checklist built specifically for this decision, read:{' '}
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
              <h3 className="text-xl font-semibold mb-2">Is LOY-002 currently proven to add years to dogs&rsquo; lives?</h3>
              <p className="mb-0">
                Owners should assume that definitive lifespan proof requires long follow-up and robust publication. Regulatory milestones can be meaningful without equaling final proof of added years.
                The safest approach is to treat LOY-002 as promising research in progress.
              </p>
            </div>

            <div className="bg-white border border-[#d9cfc2] rounded-lg p-5 shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Does the FDA milestone mean LOY-002 is fully approved?</h3>
              <p className="mb-0">
                Not necessarily. FDA milestone language often indicates a stage of evidence and a pathway forward. It does not automatically mean full approval for the biggest possible claim.
                If you want the regulatory breakdown, read the FDA explainer linked below.
              </p>
            </div>

            <div className="bg-white border border-[#d9cfc2] rounded-lg p-5 shadow-sm">
              <h3 className="text-xl font-semibold mb-2">If biomarkers improve, does that guarantee my dog will live longer?</h3>
              <p className="mb-0">
                No. Biomarkers can be meaningful signals, but they can also mislead when treated as guarantees. For a full explanation, read the biomarker guide linked below.
              </p>
            </div>

            <div className="bg-white border border-[#d9cfc2] rounded-lg p-5 shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Should I do something now while waiting for longevity drugs?</h3>
              <p className="mb-0">
                Yes. The highest-confidence levers for healthspan are still weight management, mobility and muscle preservation, pain recognition and management when appropriate,
                dental care, and age-appropriate screening with your veterinarian. The pillar article covers these in depth.
              </p>
            </div>
          </div>
        </section>

        {/* Related reading */}
        <section id="related-reading" className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">Related Reading</h2>

          <p className="mb-4">
            These pages are designed to work together so a worried owner can click through and get clarity, not just opinions.
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
              <Link className="underline" href={`/${locale}/blog/rapamycin-longevity-research-dogs`}>
                Rapamycin-Style Longevity Research in Dogs: What Studies Measure, Safety Questions, and What Is Still Unknown
              </Link>
              {/* rapamycin-longevity-research-dogs.tsx */}
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
