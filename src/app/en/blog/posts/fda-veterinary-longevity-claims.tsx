'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function FDAVeterinaryLongevityClaims() {
  const locale = useLocale();

  const title =
    'How the FDA Evaluates Veterinary Longevity Claims: Conditional Approval, “Reasonable Expectation of Effectiveness,” Endpoints, and What Owners Should Understand';
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

  // Related / supporting slugs + TSX file names (keep consistent across your cluster)
  // Pillar: do-dog-anti-ageing-drugs-really-work.tsx              slug: do-dog-anti-ageing-drugs-really-work
  // loyal-loy-002-explained.tsx                                   slug: loyal-loy-002-explained
  // dog-longevity-biomarkers-guide.tsx                            slug: dog-longevity-biomarkers-guide
  // rapamycin-longevity-research-dogs.tsx                         slug: rapamycin-longevity-research-dogs
  // should-you-join-dog-longevity-study.tsx                       slug: should-you-join-dog-longevity-study
  // supplements-vs-drugs-dog-longevity.tsx                        slug: supplements-vs-drugs-dog-longevity
  // metformin-for-dog-longevity-claims.tsx                        slug: metformin-for-dog-longevity-claims
  // senolytics-for-dogs-explained.tsx                             slug: senolytics-for-dogs-explained

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
            When you see headlines like &ldquo;FDA clears key hurdle&rdquo; or &ldquo;FDA says anti-ageing drug works,&rdquo; it can feel like the
            science is settled and the only thing left is time. But FDA language is precise for a reason: it often describes
            <strong> a stage of evidence</strong>, not a final proof.
          </p>

          <p className="mb-4">
            This guide explains, in plain English, how the FDA&rsquo;s Center for Veterinary Medicine (CVM) evaluates new animal drugs when
            a company is pursuing claims that sound like longevity, healthy aging, delayed disease, or improved function in older dogs.
            You will learn what conditional approval means, what &ldquo;reasonable expectation of effectiveness&rdquo; actually signals,
            what endpoints matter, and how to read a regulatory milestone without getting pulled into false certainty.
          </p>

          <div className="bg-white border border-[#d9cfc2] rounded-lg p-5 shadow-sm">
            <p className="text-sm text-gray-700 mb-0">
              <strong>Important:</strong> This article is educational and not medical advice. If your dog is aging, has chronic disease,
              or you are considering a clinical study, ask your veterinarian for guidance specific to your dog&rsquo;s health profile.
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
              <a href="#who-is-cvm" className="underline">
                Who Regulates Animal Drugs?
              </a>
            </li>
            <li>
              <a href="#approval-paths" className="underline">
                Full Approval vs Conditional Approval
              </a>
            </li>
            <li>
              <a href="#rxe" className="underline">
                What &ldquo;Reasonable Expectation&rdquo; Means
              </a>
            </li>
            <li>
              <a href="#safety-and-quality" className="underline">
                Safety and Manufacturing Quality
              </a>
            </li>
            <li>
              <a href="#endpoints" className="underline">
                Endpoints: What Proves a Claim
              </a>
            </li>
            <li>
              <a href="#trial-design" className="underline">
                Trial Design: How Bias Is Reduced
              </a>
            </li>
            <li>
              <a href="#labeling" className="underline">
                Labeling and What Vets Can Prescribe
              </a>
            </li>
            <li>
              <a href="#how-to-read-headlines" className="underline">
                How to Read FDA Milestone Headlines
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
              The FDA&rsquo;s CVM regulates new animal drugs. Their job is to ensure drugs are <strong>safe</strong>, properly manufactured,
              and <strong>effective</strong> for specific intended uses.
            </li>
            <li>
              <strong>Conditional approval</strong> generally means the drug has met major requirements (including safety and manufacturing)
              but effectiveness is supported by a <strong>reasonable expectation</strong> rather than full &ldquo;substantial evidence&rdquo;
              required for standard approval.
            </li>
            <li>
              &ldquo;Reasonable expectation of effectiveness&rdquo; is an evidence threshold that can justify continuing the approval process
              or conditional marketing in certain pathways, but it is <strong>not</strong> proof that a drug extends lifespan.
            </li>
            <li>
              The single most important thing owners should track is the <strong>endpoint</strong>: what exactly is the drug claiming to do
              (survival, disease delay, mobility, biomarkers), and how was it measured?
            </li>
            <li>
              If a claim sounds like &ldquo;adds years,&rdquo; strong evidence usually requires long follow-up, rigorous design, and results that hold up across diverse dogs.
            </li>
          </ul>

          <div className="bg-[#f6efe4] border border-[#d9cfc2] rounded-lg p-5">
            <p className="text-sm text-[#2c4a30] mb-0">
              If you want one rule: <strong>FDA milestone language is about evidence stage, not a promise.</strong> The safer your interpretation,
              the less likely you are to be misled.
            </p>
          </div>
        </section>

        {/* Who is CVM */}
        <section id="who-is-cvm" className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Who Regulates New Animal Drugs in the United States?</h2>

          <p className="mb-4">
            In the United States, the FDA&rsquo;s Center for Veterinary Medicine (CVM) oversees the approval of new animal drugs. Their role is not to judge whether a drug is exciting.
            Their role is to evaluate whether a drug is:
          </p>

          <ul className="list-disc pl-5 mb-4">
            <li>
              <strong>Safe</strong> when used according to label directions (for the intended population).
            </li>
            <li>
              <strong>Manufactured consistently</strong> (quality systems, chemistry, controls).
            </li>
            <li>
              <strong>Effective</strong> for the labeled intended use, supported by the appropriate standard of evidence.
            </li>
          </ul>

          <p className="mb-0">
            This matters for longevity-style claims because &ldquo;aging&rdquo; is not a single disease. It touches multiple body systems,
            multiple risks, and long timelines. Regulatory evaluation becomes a question of endpoints and evidence standards, not just plausibility.
          </p>
        </section>

        {/* Approval paths */}
        <section id="approval-paths" className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Full Approval vs Conditional Approval: What Is the Difference?</h2>

          <p className="mb-4">
            When owners hear &ldquo;FDA approval,&rdquo; they often imagine one finish line. In reality, veterinary drugs can be evaluated through
            different pathways, and the level of effectiveness evidence required can differ depending on the pathway and intended use.
          </p>

          <div className="space-y-4">
            <div className="bg-white border border-[#d9cfc2] rounded-lg p-5 shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Standard approval (the classic gold standard)</h3>
              <ul className="list-disc pl-5">
                <li>
                  The sponsor must provide <strong>substantial evidence of effectiveness</strong> for the labeled intended use.
                </li>
                <li>
                  Evidence typically comes from well-controlled studies, with clear endpoints and appropriate statistical analysis.
                </li>
                <li>
                  The claim on the label should match what the evidence actually supports.
                </li>
              </ul>
            </div>

            <div className="bg-white border border-[#d9cfc2] rounded-lg p-5 shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Conditional approval (why it exists)</h3>
              <ul className="list-disc pl-5">
                <li>
                  Conditional approval can allow marketing for a limited time while the sponsor continues collecting effectiveness data.
                </li>
                <li>
                  Under conditional approval, the drug has met major requirements for safety and manufacturing, but effectiveness is supported by
                  a <strong>reasonable expectation</strong> standard rather than the full substantial-evidence standard.
                </li>
                <li>
                  The sponsor must typically seek annual renewals and continue generating the data required for full approval.
                </li>
              </ul>
            </div>
          </div>

          <p className="mt-4 mb-0">
            For owners, the most important takeaway is not which pathway sounds better. It is understanding that conditional approval language is not the same as final proof of a bold claim.
          </p>
        </section>

        {/* RXE */}
        <section id="rxe" className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">
            What Does &ldquo;Reasonable Expectation of Effectiveness&rdquo; Actually Mean?
          </h2>

          <p className="mb-4">
            This phrase is widely misunderstood. It does not mean &ldquo;the drug works&rdquo; in the everyday sense. It generally means:
            given the data submitted so far, it is reasonable to expect the drug will be effective for its intended use, and the evidence supports continuing forward
            under the relevant pathway.
          </p>

          <h3 className="text-xl font-semibold mb-3">What it signals (in owner language)</h3>
          <ul className="list-disc pl-5 mb-4">
            <li>
              There is a plausible mechanism and early evidence consistent with the intended claim.
            </li>
            <li>
              The data trends in the right direction and is credible enough to justify further development, potentially including a conditional marketing period where allowed.
            </li>
            <li>
              Regulators believe the sponsor has cleared a meaningful hurdle, but the final claim still requires stronger evidence.
            </li>
          </ul>

          <h3 className="text-xl font-semibold mb-3">What it does not prove</h3>
          <ul className="list-disc pl-5 mb-4">
            <li>
              It does not prove the drug extends lifespan.
            </li>
            <li>
              It does not guarantee the drug will receive full approval for a major claim.
            </li>
            <li>
              It does not mean outcomes you care about most (disease prevention, disability delay, survival) have been demonstrated.
            </li>
          </ul>

          <div className="bg-[#f6efe4] border border-[#d9cfc2] rounded-lg p-5">
            <p className="text-sm text-[#2c4a30] mb-0">
              A helpful mental model: &ldquo;Reasonable expectation&rdquo; is closer to &ldquo;credible early signal&rdquo; than &ldquo;final answer.&rdquo;
              You can be hopeful without treating it like certainty.
            </p>
          </div>
        </section>

        {/* Safety and quality */}
        <section id="safety-and-quality" className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Safety and Manufacturing Quality: Two Things That Still Matter Even If You Love the Idea</h2>

          <p className="mb-4">
            A drug can be scientifically interesting and still be unsafe in real-world dogs. In veterinary drug approval, safety and manufacturing quality are not
            background details. They are core requirements that protect animals.
          </p>

          <h3 className="text-xl font-semibold mb-3">Safety is not just &ldquo;no one died in a small study&rdquo;</h3>
          <p className="mb-4">
            For aging dogs, safety includes tolerability and resilience. Older dogs often have less physiologic reserve and are more likely to be on multiple medications.
            Safety evaluation can involve monitoring for:
          </p>

          <ul className="list-disc pl-5 mb-4">
            <li>
              Lab trends (kidney- and liver-related parameters).
            </li>
            <li>
              GI tolerance and appetite changes.
            </li>
            <li>
              Immune-related effects (depending on mechanism).
            </li>
            <li>
              Interaction risks with common medications used in senior dogs.
            </li>
          </ul>

          <h3 className="text-xl font-semibold mb-3">Manufacturing quality matters more than most owners realize</h3>
          <p className="mb-0">
            Even if an ingredient is promising, a drug must be manufactured consistently, with validated processes and controls.
            A therapy cannot be considered reliable if every batch is slightly different.
          </p>
        </section>

        {/* Endpoints */}
        <section id="endpoints" className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Endpoints: What Actually Proves a Longevity-Style Claim?</h2>

          <p className="mb-4">
            If you want to read regulatory milestones clearly, learn one word: <strong>endpoint</strong>. An endpoint is what the study is trying to prove.
            For longevity claims, endpoints can range from &ldquo;hard&rdquo; (survival) to &ldquo;soft&rdquo; (owner-reported energy).
          </p>

          <div className="space-y-4">
            <div className="bg-white border border-[#d9cfc2] rounded-lg p-5 shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Hard endpoints (most convincing, hardest to run)</h3>
              <ul className="list-disc pl-5">
                <li>
                  Survival outcomes (time-to-event, survival curves) across a large population with long follow-up.
                </li>
                <li>
                  Delay of clinically important events (onset of a diagnosed age-related disease) when clearly defined and measured.
                </li>
              </ul>
              <p className="text-sm text-gray-700 mt-3 mb-0">
                These are slow and expensive endpoints, but they are closest to what owners mean by &ldquo;adds time.&rdquo;
              </p>
            </div>

            <div className="bg-white border border-[#d9cfc2] rounded-lg p-5 shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Functional endpoints (often meaningful, but must be measured carefully)</h3>
              <ul className="list-disc pl-5">
                <li>
                  Mobility and gait scoring using standardized methods.
                </li>
                <li>
                  Activity and performance outcomes that are objectively measured (not just remembered).
                </li>
                <li>
                  Quality-of-life instruments that are validated and ideally paired with objective measures.
                </li>
              </ul>
            </div>

            <div className="bg-white border border-[#d9cfc2] rounded-lg p-5 shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Biomarkers (useful signals, rarely proof on their own)</h3>
              <ul className="list-disc pl-5">
                <li>
                  Metabolic or inflammatory biomarkers can be legitimate research tools.
                </li>
                <li>
                  The major risk is that a biomarker shifts without changing the outcomes owners actually care about.
                </li>
              </ul>
              <p className="text-sm text-gray-700 mt-3 mb-0">
                Deep dive later:{" "}
                <Link className="underline" href={`/${locale}/blog/dog-longevity-biomarkers-guide`}>
                  Dog Longevity Biomarkers: Which Ones Matter, Which Ones Mislead, and What Owners Should Ignore
                </Link>
                {/* dog-longevity-biomarkers-guide.tsx */}
              </p>
            </div>
          </div>

          <p className="mt-4 mb-0">
            Regulatory milestones often reflect the stage of evidence for one category of endpoints, not all of them. This is how owners get confused: a milestone about early evidence is interpreted as a final answer about survival.
          </p>
        </section>

        {/* Trial design */}
        <section id="trial-design" className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Trial Design: How Bias Is Reduced in Veterinary Studies</h2>

          <p className="mb-4">
            Longevity is emotionally loaded. That makes bias more likely, not less. Good trials are designed to reduce the number of ways a result can be an illusion.
            Owners do not need to be statisticians to understand the big pieces of a strong design.
          </p>

          <h3 className="text-xl font-semibold mb-3">Key features that raise trustworthiness</h3>
          <ul className="list-disc pl-5 mb-4">
            <li>
              <strong>Blinding:</strong> owners and evaluators do not know who receives treatment vs placebo.
            </li>
            <li>
              <strong>Control group:</strong> placebo or active control so changes can be attributed more confidently to the drug.
            </li>
            <li>
              <strong>Prespecified endpoints:</strong> what the trial aims to prove is defined up front.
            </li>
            <li>
              <strong>Objective measurement:</strong> standardized tests, labs, and clear criteria instead of memory and impression alone.
            </li>
            <li>
              <strong>Enough time:</strong> longevity-style outcomes require longer follow-up than most short studies can provide.
            </li>
            <li>
              <strong>Diverse enrollment:</strong> multiple breeds, sizes, lifestyles, and real-world variability.
            </li>
          </ul>

          <h3 className="text-xl font-semibold mb-3">Why owner-reported outcomes need extra caution</h3>
          <p className="mb-4">
            Owners can be completely honest and still be influenced by expectation, hope, and normal day-to-day variability. This is not a character flaw.
            It is human attachment. That is why blinding and objective endpoints are so valuable in veterinary studies.
          </p>

          <p className="mb-0">
            If you want a fuller explanation of placebo-like effects in dog trials, the pillar article covers this in depth.
          </p>
        </section>

        {/* Labeling */}
        <section id="labeling" className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Labeling: What a Drug Is Allowed to Claim, and What Vets Can Prescribe</h2>

          <p className="mb-4">
            A key point owners miss: FDA evaluation is tied to an <strong>intended use</strong> and the evidence supporting that intended use.
            That intended use appears on labeling. The label is where marketing meets regulation.
          </p>

          <h3 className="text-xl font-semibold mb-3">Why the label matters</h3>
          <ul className="list-disc pl-5 mb-4">
            <li>
              The label defines what the drug is intended to do and for which population.
            </li>
            <li>
              The evidence is evaluated against that specific intended use.
            </li>
            <li>
              Over time, labels can evolve as evidence evolves, but labels should not race ahead of proof.
            </li>
          </ul>

          <div className="bg-white border border-[#d9cfc2] rounded-lg p-5 shadow-sm">
            <p className="text-sm text-gray-700 mb-0">
              Owner takeaway: if a headline sounds broader than the intended use (for example, &ldquo;adds years to all dogs&rdquo;), treat it as suspect until you see exactly what the intended use is and what endpoint supports it.
            </p>
          </div>
        </section>

        {/* How to read headlines */}
        <section id="how-to-read-headlines" className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">How to Read FDA Milestone Headlines Without Getting Misled</h2>

          <p className="mb-4">
            Here is a practical translation layer you can use any time you see &ldquo;FDA&rdquo; in a longevity-drug headline.
          </p>

          <div className="space-y-4">
            <div className="bg-[#f6efe4] border border-[#d9cfc2] rounded-lg p-5">
              <h3 className="text-xl font-semibold mb-2">Headline: &ldquo;FDA accepts reasonable expectation of effectiveness&rdquo;</h3>
              <ul className="list-disc pl-5 mb-0 text-sm text-[#2c4a30]">
                <li>This signals an evidence milestone, not a final proof of lifespan extension.</li>
                <li>Ask what endpoint this relates to: survival, disease delay, function, or biomarkers.</li>
                <li>Ask what comes next: safety review, manufacturing review, larger trials, longer follow-up.</li>
              </ul>
            </div>

            <div className="bg-[#f6efe4] border border-[#d9cfc2] rounded-lg p-5">
              <h3 className="text-xl font-semibold mb-2">Headline: &ldquo;FDA grants conditional approval&rdquo;</h3>
              <ul className="list-disc pl-5 mb-0 text-sm text-[#2c4a30]">
                <li>It generally means safety and manufacturing requirements are met, and there is a reasonable expectation the drug is effective for its intended use.</li>
                <li>It does not necessarily mean the strongest possible effectiveness standard has been met for a bold claim.</li>
                <li>Ask about timelines and ongoing data collection required for full approval.</li>
              </ul>
            </div>

            <div className="bg-[#f6efe4] border border-[#d9cfc2] rounded-lg p-5">
              <h3 className="text-xl font-semibold mb-2">Headline: &ldquo;FDA approves anti-ageing drug&rdquo;</h3>
              <ul className="list-disc pl-5 mb-0 text-sm text-[#2c4a30]">
                <li>Ask: approved for what intended use, in what population, with what endpoint?</li>
                <li>Approval is not a guarantee of &ldquo;adds years&rdquo; unless the endpoint supports that claim.</li>
                <li>Look for the difference between excitement and the exact wording of the approved intended use.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Owner checklist */}
        <section id="owner-checklist" className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Owner Checklist: What to Ask Before You Believe a Longevity Claim</h2>

          <p className="mb-4">
            If you are evaluating a potential longevity drug (or considering a study), use this checklist. It is designed for owners who feel anxious and do not want to miss the right questions.
          </p>

          <ul className="list-disc pl-5 mb-4">
            <li>
              <strong>What is the intended use?</strong> Is the claim about survival, disease delay, function, or biomarkers?
            </li>
            <li>
              <strong>What is the primary endpoint?</strong> What did the study set out to prove?
            </li>
            <li>
              <strong>Was the study blinded and controlled?</strong> If not, how did they reduce expectation bias?
            </li>
            <li>
              <strong>How long was follow-up?</strong> Does the timeline match the magnitude of the claim?
            </li>
            <li>
              <strong>How diverse were the dogs?</strong> Breeds, sizes, comorbidities, and real-world variability.
            </li>
            <li>
              <strong>What were the safety findings?</strong> Not just whether adverse events happened, but what monitoring and exclusions were used.
            </li>
            <li>
              <strong>Is there transparent reporting?</strong> Peer-reviewed publication, detailed methods, or robust regulatory documentation.
            </li>
            <li>
              <strong>What comes next?</strong> Larger trials, longer endpoints, confirmation in broader populations.
            </li>
          </ul>

          <div className="bg-white border border-[#d9cfc2] rounded-lg p-5 shadow-sm">
            <p className="text-sm text-gray-700 mb-0">
              If you want a deeper guide for owners considering research participation, this supporting article will pair perfectly with this one:
              <br />
              <Link className="underline" href={`/${locale}/blog/should-you-join-dog-longevity-study`}>
                Should You Enroll Your Dog in a Longevity Study? A Clear, Owner-First Guide
              </Link>
              {/* should-you-join-dog-longevity-study.tsx */}
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">FAQ</h2>

          <div className="space-y-6">
            <div className="bg-white border border-[#d9cfc2] rounded-lg p-5 shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Does &ldquo;reasonable expectation of effectiveness&rdquo; mean the FDA says the drug works?</h3>
              <p className="mb-0">
                It means the FDA considers the evidence submitted so far credible enough to support continued development under the relevant pathway and that there is a reasonable basis to expect effectiveness for the intended use.
                It does not automatically mean the boldest version of the claim is proven, especially for longevity outcomes that take years to measure.
              </p>
            </div>

            <div className="bg-white border border-[#d9cfc2] rounded-lg p-5 shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Is conditional approval the same as full approval?</h3>
              <p className="mb-0">
                No. Conditional approval generally uses a lower effectiveness evidence threshold than full approval and allows limited marketing while effectiveness evidence is still being completed, under rules and renewals.
                Owners should treat it as a meaningful milestone, not a final proof.
              </p>
            </div>

            <div className="bg-white border border-[#d9cfc2] rounded-lg p-5 shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Why is longevity so hard to evaluate in dogs?</h3>
              <p className="mb-0">
                Because the outcomes are slow, the population is diverse, and &ldquo;aging&rdquo; touches many diseases. A claim about lifespan or delayed disease requires time, careful endpoints, and strong design to rule out bias and confounding.
              </p>
            </div>

            <div className="bg-white border border-[#d9cfc2] rounded-lg p-5 shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Why do companies talk about biomarkers so much?</h3>
              <p className="mb-0">
                Biomarkers can move faster than survival outcomes, so they are useful early signals. The risk is that owners interpret biomarkers as proof of longer life. Biomarkers can be meaningful, but they must be tied to clinically relevant outcomes over time.
              </p>
            </div>

            <div className="bg-white border border-[#d9cfc2] rounded-lg p-5 shadow-sm">
              <h3 className="text-xl font-semibold mb-2">What should I do if I feel panicked and want to help my senior dog now?</h3>
              <p className="mb-0">
                Focus on high-confidence healthspan care with your veterinarian: weight management, mobility and pain management when appropriate, dental health, and age-appropriate screening.
                The pillar article on anti-ageing drugs includes a detailed, practical section on what helps right now.
              </p>
            </div>
          </div>
        </section>

        {/* Related reading */}
        <section id="related-reading" className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">Related Reading</h2>

          <p className="mb-4">
            These articles are designed to work together. The goal is that an anxious reader can click through and get real clarity without getting trapped in sensational claims.
          </p>

          <ul className="list-disc pl-5 space-y-2">
            <li>
              <Link className="underline" href={`/${locale}/blog/do-dog-anti-ageing-drugs-really-work`}>
                Do Anti-Ageing Drugs for Dogs Really Work? A Critical, Owner-First Review
              </Link>
              {/* do-dog-anti-ageing-drugs-really-work.tsx */}
            </li>

            <li>
              <Link className="underline" href={`/${locale}/blog/loyal-loy-002-explained`}>
                LOY-002 Explained: What Has Been Tested, What Is Claimed, and What Would Prove It
              </Link>
              {/* loyal-loy-002-explained.tsx */}
            </li>

            <li>
              <Link className="underline" href={`/${locale}/blog/dog-longevity-biomarkers-guide`}>
                Dog Longevity Biomarkers: Which Ones Matter, Which Ones Mislead, and What Owners Should Ignore
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

            <li>
              <Link className="underline" href={`/${locale}/blog/senolytics-for-dogs-explained`}>
                Senolytics for Dogs Explained: What They Are, What They Claim, and Where Evidence Is Thin
              </Link>
              {/* senolytics-for-dogs-explained.tsx */}
            </li>

            <li>
              <Link className="underline" href={`/${locale}/blog/metformin-for-dog-longevity-claims`}>
                Metformin-Style Longevity Claims in Dogs: What Is Evidence and What Is Marketing
              </Link>
              {/* metformin-for-dog-longevity-claims.tsx */}
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
