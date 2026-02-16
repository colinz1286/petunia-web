'use client';

import Head from 'next/head';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function SupplementsVsDrugsDogLongevity() {
  const locale = useLocale();

  const title =
    'Supplements vs Drugs in Dog Longevity: How Owners Can Tell the Difference, Avoid Marketing Traps, and Make Safer Decisions';
  const date = 'December 25, 2025';
  const description =
    'A comprehensive, owner-first guide to dog longevity products: the real difference between supplements and prescription drugs, what regulation does (and does not) require, how to spot misleading claims, what “clinically proven” actually means, quality and contamination risks, safe vet-guided decision making, and a practical checklist for evaluating any product.';

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
  // should-you-join-dog-longevity-study.tsx                       slug: should-you-join-dog-longevity-study
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
            If you are researching dog longevity, you will quickly run into two very different worlds that often look the same in marketing:
            supplements and drugs. Both may use scientific language. Both may show charts, biomarkers, and impressive-sounding claims.
            But they are not held to the same standards, and they do not carry the same risks or reliability.
          </p>

          <p className="mb-4">
            This article is built for owners who want clarity without fear. We will explain what supplements are (and what they are not),
            what prescription drugs must prove, how regulation differs, how to spot misleading claims, and how to make safer decisions
            with your veterinarian.
          </p>

          <div className="bg-white border border-[#d9cfc2] rounded-lg p-5 shadow-sm">
            <p className="text-sm text-gray-700 mb-0">
              <strong>Important:</strong> Educational content only. Do not start, stop, or combine supplements and medications without veterinary guidance,
              especially for senior dogs or dogs on heart, seizure, endocrine, pain, or anti-inflammatory medications.
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
              <a href="#definitions" className="underline">
                Definitions: Supplements vs Drugs
              </a>
            </li>
            <li>
              <a href="#regulation" className="underline">
                Regulation: What Is Required
              </a>
            </li>
            <li>
              <a href="#claims" className="underline">
                Claims: What They Can Say
              </a>
            </li>
            <li>
              <a href="#biomarkers" className="underline">
                Biomarkers and Surrogate Endpoints
              </a>
            </li>
            <li>
              <a href="#quality" className="underline">
                Quality, Purity, and Consistency
              </a>
            </li>
            <li>
              <a href="#interactions" className="underline">
                Safety and Drug Interactions
              </a>
            </li>
            <li>
              <a href="#how-to-evaluate" className="underline">
                How to Evaluate Any Product
              </a>
            </li>
            <li>
              <a href="#vet-conversation" className="underline">
                How to Talk to Your Veterinarian
              </a>
            </li>
            <li>
              <a href="#when-supplements-help" className="underline">
                When Supplements Can Help
              </a>
            </li>
            <li>
              <a href="#red-flags" className="underline">
                Red Flags
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
              A supplement is not the same as a prescription drug. Even when a supplement ingredient is promising, the product may not be tested to prove it changes meaningful outcomes in dogs.
            </li>
            <li>
              Drugs are evaluated through a structured approval pathway for safety, manufacturing consistency, and effectiveness for a specific intended use.
            </li>
            <li>
              Many longevity claims rely on biomarkers. Biomarkers can be helpful signals, but they can also mislead if treated as proof of longer life.
            </li>
            <li>
              The biggest supplement risks are quality variability, contamination, inaccurate dosing, and interactions with medications.
            </li>
            <li>
              The safest approach is vet-guided: define the goal, evaluate evidence, check interactions, pick high-quality products, and monitor outcomes that matter.
            </li>
          </ul>

          <div className="bg-[#f6efe4] border border-[#d9cfc2] rounded-lg p-5">
            <p className="text-sm text-[#2c4a30] mb-0">
              If you only take one thing: <strong>do not confuse scientific language with scientific proof.</strong> Ask what was measured, in dogs, compared to what, for how long, with what safety monitoring.
            </p>
          </div>
        </section>

        {/* Definitions */}
        <section id="definitions" className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Definitions: What Counts as a Supplement vs a Drug?</h2>

          <p className="mb-4">
            Owners often assume the difference is &ldquo;supplements are natural&rdquo; and &ldquo;drugs are chemicals.&rdquo; That is not the real difference.
            The difference is the <strong>regulatory category</strong> and what must be proven before the product can be sold with certain claims.
          </p>

          <h3 className="text-xl font-semibold mb-3">Supplements (practical definition)</h3>
          <ul className="list-disc pl-5 mb-4">
            <li>Typically sold over the counter without a prescription.</li>
            <li>Often contain vitamins, minerals, herbs, amino acids, oils, or blended ingredients.</li>
            <li>May be marketed using wellness language, sometimes including aging-related terms.</li>
            <li>
              Often not required to prove they improve clinically meaningful outcomes in dogs before being marketed, depending on claim structure and jurisdiction.
            </li>
          </ul>

          <h3 className="text-xl font-semibold mb-3">Prescription drugs (practical definition)</h3>
          <ul className="list-disc pl-5 mb-4">
            <li>Designed for a specific intended use, with defined dosing and monitoring expectations.</li>
            <li>Must meet standards related to manufacturing consistency.</li>
            <li>Evaluated for safety and effectiveness under a regulatory framework for the intended use.</li>
          </ul>

          <p className="mb-0">
            A supplement can be helpful, and a drug can be risky. A supplement can also be risky, and a drug can be life-changing. The category tells you what standards you can reasonably expect.
          </p>
        </section>

        {/* Regulation */}
        <section id="regulation" className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Regulation: What Is Required Before Something Can Be Sold?</h2>

          <p className="mb-4">
            Regulation is where many owners feel betrayed, because they assume everything sold for pets has to prove it works.
            In reality, the bar depends on the category. The most owner-helpful way to think about regulation is: what must be proven <strong>before</strong> the product is widely sold?
          </p>

          <div className="space-y-4">
            <div className="bg-white border border-[#d9cfc2] rounded-lg p-5 shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Prescription drugs: proof and process</h3>
              <ul className="list-disc pl-5 mb-0">
                <li>Defined intended use and label language.</li>
                <li>Structured evaluation of safety for the intended population.</li>
                <li>Manufacturing consistency and quality controls.</li>
                <li>Effectiveness evidence appropriate to the approval pathway.</li>
              </ul>
              <p className="text-sm text-gray-700 mt-3 mb-0">
                If you want a clear owner-first explanation of how veterinary drug evaluation works, read:{' '}
                <Link className="underline" href={`/${locale}/blog/fda-veterinary-longevity-claims`}>
                  How the FDA Evaluates Veterinary Longevity Claims: Conditional Approval, Endpoints, and What Owners Should Understand
                </Link>
                .
              </p>
            </div>

            <div className="bg-white border border-[#d9cfc2] rounded-lg p-5 shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Supplements: variability and owner risk</h3>
              <ul className="list-disc pl-5 mb-0">
                <li>Often sold with broader wellness framing rather than disease-treatment claims.</li>
                <li>May not have pre-market proof of clinical outcomes in dogs.</li>
                <li>Quality and dosing consistency can vary significantly by brand and batch.</li>
                <li>Owners carry a larger burden of evaluating evidence and safety.</li>
              </ul>
            </div>
          </div>

          <p className="mt-4 mb-0">
            This is not about distrusting all supplements. It is about understanding why two products can look equally &ldquo;scientific&rdquo; in marketing while being held to very different evidence standards.
          </p>
        </section>

        {/* Claims */}
        <section id="claims" className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Claims: What Products Can Say, and How Owners Get Misled</h2>

          <p className="mb-4">
            Marketing language is designed to feel medically meaningful without always crossing the line into a regulated medical claim.
            This is why owners see phrases like &ldquo;supports healthy aging&rdquo; rather than &ldquo;prevents disease&rdquo; or &ldquo;extends lifespan.&rdquo;
          </p>

          <h3 className="text-xl font-semibold mb-3">Common phrases that sound powerful but can be vague</h3>
          <ul className="list-disc pl-5 mb-4">
            <li>&ldquo;Supports cellular health&rdquo;</li>
            <li>&ldquo;Promotes longevity&rdquo;</li>
            <li>&ldquo;Supports immune function&rdquo;</li>
            <li>&ldquo;Clinically studied ingredients&rdquo;</li>
            <li>&ldquo;Backed by science&rdquo;</li>
          </ul>

          <h3 className="text-xl font-semibold mb-3">How to translate these phrases into a real question</h3>
          <ul className="list-disc pl-5 mb-4">
            <li>Studied in which species (dogs, humans, mice)?</li>
            <li>Studied as the exact product or only as an ingredient somewhere else?</li>
            <li>Measured what endpoint (biomarkers, function, disease events, survival)?</li>
            <li>Compared to what (placebo, control, baseline only)?</li>
            <li>For how long, and in how many dogs?</li>
          </ul>

          <div className="bg-[#f6efe4] border border-[#d9cfc2] rounded-lg p-5">
            <p className="text-sm text-[#2c4a30] mb-0">
              A phrase like &ldquo;clinically proven&rdquo; is meaningless unless you know what the clinical outcome was and whether it was measured in dogs using a strong design.
            </p>
          </div>
        </section>

        {/* Biomarkers */}
        <section id="biomarkers" className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Biomarkers and Surrogate Endpoints: Where Longevity Claims Go Wrong</h2>

          <p className="mb-4">
            Biomarkers are one of the most common ways longevity products try to sound scientific. Biomarkers can be useful signals, but they can also be weaponized by marketing.
            The core trap is treating a biomarker as proof of a meaningful outcome.
          </p>

          <h3 className="text-xl font-semibold mb-3">Why biomarker claims are tempting</h3>
          <ul className="list-disc pl-5 mb-4">
            <li>They can change faster than long outcomes like survival.</li>
            <li>They create the impression that a product is measurable and objective.</li>
            <li>They can be shown in charts that look persuasive.</li>
          </ul>

          <h3 className="text-xl font-semibold mb-3">Why biomarker claims can mislead</h3>
          <ul className="list-disc pl-5 mb-4">
            <li>A biomarker can change without improving real-world outcomes.</li>
            <li>Short-term shifts can disappear over time.</li>
            <li>One-time measurements can reflect stress, recent activity, or minor illness.</li>
            <li>Without controls, improvements can reflect routine changes rather than the product.</li>
          </ul>

          <div className="bg-white border border-[#d9cfc2] rounded-lg p-5 shadow-sm">
            <p className="text-sm text-gray-700 mb-0">
              If you want a deep, owner-first explainer on biomarkers and how they mislead, read:{' '}
              <Link className="underline" href={`/${locale}/blog/dog-longevity-biomarkers-guide`}>
                Dog Longevity Biomarkers: Which Ones Matter, Which Ones Mislead, and How Owners Can Interpret Healthy Aging Claims
              </Link>
              .
            </p>
          </div>
        </section>

        {/* Quality */}
        <section id="quality" className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Quality, Purity, and Consistency: The Hidden Supplement Problem</h2>

          <p className="mb-4">
            Even if an ingredient is promising, the product you buy may not match the label. This is one of the biggest practical differences between supplements and drugs:
            drug manufacturing quality standards are generally stricter and more consistently enforced for the product as sold.
          </p>

          <h3 className="text-xl font-semibold mb-3">What can go wrong with supplements</h3>
          <ul className="list-disc pl-5 mb-4">
            <li>Actual ingredient amounts differ from the label.</li>
            <li>Batch-to-batch variability changes dosing and effects.</li>
            <li>Contamination risks (unwanted compounds, heavy metals, adulterants) exist in some product categories.</li>
            <li>Multi-ingredient blends make it harder to know what is doing what.</li>
          </ul>

          <h3 className="text-xl font-semibold mb-3">What owners should look for when quality matters</h3>
          <ul className="list-disc pl-5 mb-4">
            <li>Clear dosing information for dogs (not only for humans).</li>
            <li>Transparent manufacturing and testing information.</li>
            <li>Third-party testing or verification where available.</li>
            <li>Products that avoid unnecessary proprietary blends.</li>
          </ul>

          <div className="bg-[#f6efe4] border border-[#d9cfc2] rounded-lg p-5">
            <p className="text-sm text-[#2c4a30] mb-0">
              Owner mindset: the more medically vulnerable your dog is, the more you should value consistency and quality over trendy ingredient lists.
            </p>
          </div>
        </section>

        {/* Interactions */}
        <section id="interactions" className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Safety and Drug Interactions: The Part Many Owners Never Ask About</h2>

          <p className="mb-4">
            The most dangerous supplement problems are not always side effects from the supplement itself. The danger can be the interaction between a supplement and a medication,
            especially in senior dogs who are already on heart medications, pain medications, endocrine drugs, seizure medications, or anti-inflammatory drugs.
          </p>

          <h3 className="text-xl font-semibold mb-3">Why interactions matter more in senior dogs</h3>
          <ul className="list-disc pl-5 mb-4">
            <li>Older dogs often have less organ reserve.</li>
            <li>Medication stacks are common and can change over time.</li>
            <li>Illness events (dehydration, infection) can change how drugs are processed.</li>
            <li>Supplements can alter absorption, metabolism, or bleeding risk depending on the ingredient category.</li>
          </ul>

          <h3 className="text-xl font-semibold mb-3">A simple safety rule for owners</h3>
          <p className="mb-4">
            If your dog is on prescription medications or has chronic disease, do not add a supplement without telling your veterinarian exactly what you plan to add, at what dose, and why.
          </p>

          <div className="bg-white border border-[#d9cfc2] rounded-lg p-5 shadow-sm">
            <p className="text-sm text-gray-700 mb-0">
              A practical tip: bring the supplement label or product page to your veterinarian so the conversation is specific, not vague.
            </p>
          </div>
        </section>

        {/* How to evaluate */}
        <section id="how-to-evaluate" className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">How to Evaluate Any Longevity Product: A Practical Checklist</h2>

          <p className="mb-4">
            Use this checklist for any supplement, longevity blend, or product that claims to support aging. It is designed to protect you when you feel urgent.
          </p>

          <h3 className="text-xl font-semibold mb-3">Evidence questions</h3>
          <ul className="list-disc pl-5 mb-4">
            <li>Is there dog-specific evidence for the product, not only the ingredient?</li>
            <li>Was there a control group or placebo?</li>
            <li>Was the study blinded?</li>
            <li>What was the primary endpoint?</li>
            <li>How long was follow-up?</li>
            <li>How many dogs were included and how diverse were they?</li>
            <li>Were results published with enough detail to evaluate methods?</li>
          </ul>

          <h3 className="text-xl font-semibold mb-3">Safety questions</h3>
          <ul className="list-disc pl-5 mb-4">
            <li>What are known side effects at dog-relevant doses?</li>
            <li>What medications can this interact with?</li>
            <li>What monitoring would detect harm early (labs, appetite, stool, energy, behavior)?</li>
            <li>What is the plan if your dog gets sick while using it?</li>
          </ul>

          <h3 className="text-xl font-semibold mb-3">Quality questions</h3>
          <ul className="list-disc pl-5 mb-4">
            <li>Is dosing clearly stated for dogs?</li>
            <li>Is there meaningful quality testing or verification information?</li>
            <li>Are there unnecessary blends that hide actual amounts?</li>
            <li>Is the company transparent about manufacturing and batch testing?</li>
          </ul>

          <div className="bg-[#f6efe4] border border-[#d9cfc2] rounded-lg p-5">
            <p className="text-sm text-[#2c4a30] mb-0">
              A disciplined owner does not ask &ldquo;is it natural.&rdquo; They ask: <strong>is it proven, is it safe, is it consistent, and does it match my dog&rsquo;s risk profile?</strong>
            </p>
          </div>
        </section>

        {/* Vet conversation */}
        <section id="vet-conversation" className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">How to Talk to Your Veterinarian Without Getting a Dismissive Answer</h2>

          <p className="mb-4">
            Some owners avoid discussing supplements with their veterinarian because they fear being judged. Others assume the vet will dismiss everything.
            The best approach is to make the conversation specific and goal-based.
          </p>

          <h3 className="text-xl font-semibold mb-3">A simple script that works</h3>
          <ul className="list-disc pl-5 mb-4">
            <li>&ldquo;My goal is to support comfort and mobility as my dog ages.&rdquo;</li>
            <li>&ldquo;Here is the exact product and dose I am considering.&rdquo;</li>
            <li>&ldquo;Are there interactions with my dog&rsquo;s current medications?&rdquo;</li>
            <li>&ldquo;What should we monitor to make sure this is not causing harm?&rdquo;</li>
            <li>&ldquo;Is there a better-supported option for this goal?&rdquo;</li>
          </ul>

          <p className="mb-0">
            A good veterinarian will welcome clarity. A vague conversation creates vague answers.
          </p>
        </section>

        {/* When supplements help */}
        <section id="when-supplements-help" className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">When Supplements Can Help (Without Pretending They Are Magic)</h2>

          <p className="mb-4">
            Supplements are not automatically useless. They can be helpful when they are used for a clearly defined purpose, with a realistic endpoint, and with quality and safety considered.
            The key is matching a supplement to a practical goal rather than to a vague promise.
          </p>

          <h3 className="text-xl font-semibold mb-3">Examples of practical, reality-based goals</h3>
          <ul className="list-disc pl-5 mb-4">
            <li>Supporting joint comfort and mobility when paired with weight management and appropriate exercise.</li>
            <li>Supporting appetite or GI stability in dogs with known sensitivities (under vet guidance).</li>
            <li>Supporting skin and coat health when there is a documented dietary gap or condition-specific need.</li>
          </ul>

          <h3 className="text-xl font-semibold mb-3">How to keep it honest</h3>
          <ul className="list-disc pl-5 mb-0">
            <li>Pick one goal and one measurable outcome (mobility score, stair confidence, recovery after walks).</li>
            <li>Give it a defined trial period with your veterinarian&rsquo;s input.</li>
            <li>Stop if there is no meaningful benefit or if side effects occur.</li>
          </ul>
        </section>

        {/* Red flags */}
        <section id="red-flags" className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Red Flags: When to Walk Away</h2>

          <p className="mb-4">
            Some products are not merely unproven. They are built to exploit emotional urgency. Use these red flags as a safety filter.
          </p>

          <ul className="list-disc pl-5 mb-4">
            <li>Promises of dramatic lifespan extension without clear endpoints.</li>
            <li>Claims that rely only on mouse or cell data while implying dog outcomes.</li>
            <li>Proprietary blends that hide exact ingredient amounts.</li>
            <li>Vague phrases like &ldquo;clinically proven&rdquo; without a clear dog study and measurable outcome.</li>
            <li>Pressure tactics: limited time offers, fear-based messaging, urgency to buy now.</li>
            <li>Dismissal of veterinarians as &ldquo;closed-minded&rdquo; or &ldquo;not up to date&rdquo; as a marketing strategy.</li>
            <li>No discussion of interactions, side effects, or monitoring.</li>
          </ul>

          <div className="bg-[#f6efe4] border border-[#d9cfc2] rounded-lg p-5">
            <p className="text-sm text-[#2c4a30] mb-0">
              If a product makes you feel panicked, that is a signal. High-quality science does not need panic to persuade.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">FAQ</h2>

          <div className="space-y-6">
            <div className="bg-white border border-[#d9cfc2] rounded-lg p-5 shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Are supplements safer because they are over the counter?</h3>
              <p className="mb-0">
                Not automatically. Some supplements are well-tolerated, but quality variability, contamination risk, and drug interactions can make them risky in certain dogs.
                Over-the-counter availability is not a safety guarantee.
              </p>
            </div>

            <div className="bg-white border border-[#d9cfc2] rounded-lg p-5 shadow-sm">
              <h3 className="text-xl font-semibold mb-2">If a supplement changes biomarkers, does that mean it helps longevity?</h3>
              <p className="mb-0">
                Not necessarily. Biomarkers can be signals, but they can also be surrogate endpoints that do not translate into real outcomes.
                This guide explains why, and the biomarker deep dive goes further.
              </p>
            </div>

            <div className="bg-white border border-[#d9cfc2] rounded-lg p-5 shadow-sm">
              <h3 className="text-xl font-semibold mb-2">What is the best supplement for dog longevity?</h3>
              <p className="mb-0">
                There is rarely a single best product for every dog. The safest approach is goal-based: define the problem you are trying to improve, review evidence, check interactions, and monitor outcomes that matter.
                For many dogs, the most powerful longevity steps are still weight management, mobility preservation, and preventive care.
              </p>
            </div>

            <div className="bg-white border border-[#d9cfc2] rounded-lg p-5 shadow-sm">
              <h3 className="text-xl font-semibold mb-2">How do I avoid being tricked by marketing?</h3>
              <p className="mb-0">
                Use the checklist in this article. If a company cannot clearly explain endpoints, study design, dog-specific evidence, dosing, and safety monitoring, treat the claim as unproven.
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
