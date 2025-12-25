'use client';

import Head from 'next/head';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function DogLongevityBiomarkersGuide() {
  const locale = useLocale();

  const title =
    'Dog Longevity Biomarkers: Which Ones Matter, Which Ones Mislead, and How Owners Can Interpret “Healthy Aging” Claims';
  const date = 'December 25, 2025';
  const description =
    'A practical, owner-first guide to dog longevity biomarkers: what a biomarker is, which categories are most meaningful, why surrogate endpoints can mislead, how trials use biomarkers, how to interpret lab-style claims in headlines, and what questions to ask your vet or a study team.';

  const slug = 'dog-longevity-biomarkers-guide';
  const canonicalUrl = `https://www.petuniapets.com/${locale}/blog/${slug}`;

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
  // loyal-loy-002-explained.tsx                                   slug: loyal-loy-002-explained
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
        <link rel="canonical" href={canonicalUrl} />
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
              url: canonicalUrl,
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
            If you have been reading about &ldquo;anti-ageing drugs&rdquo; or longevity studies in dogs, you have probably seen claims like
            &ldquo;improved biomarkers,&rdquo; &ldquo;healthier metabolic profile,&rdquo; or &ldquo;reduced inflammation markers.&rdquo; Those phrases can
            sound scientific and convincing, especially when you are worried about your dog getting older.
          </p>

          <p className="mb-4">
            The problem is that biomarker language is easy to misunderstand. A biomarker can move in the &ldquo;right&rdquo; direction without
            meaning a dog will live longer, avoid disease, or feel better. This article will teach you how biomarkers are used in dog aging
            research, which types are most meaningful, how surrogate endpoints can mislead, and what questions to ask before you trust a headline.
          </p>

          <div className="bg-white border border-[#d9cfc2] rounded-lg p-5 shadow-sm">
            <p className="text-sm text-gray-700 mb-0">
              <strong>Important:</strong> Educational content only. Do not change medications, supplements, or diets based on biomarker claims
              alone. If you are considering a trial or intervention, discuss safety and monitoring with your veterinarian.
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
              <a href="#what-is-a-biomarker" className="underline">
                What Is a Biomarker?
              </a>
            </li>
            <li>
              <a href="#surrogate-endpoints" className="underline">
                Surrogate Endpoints: The Core Risk
              </a>
            </li>
            <li>
              <a href="#biomarker-buckets" className="underline">
                Biomarker Categories in Dog Aging
              </a>
            </li>
            <li>
              <a href="#which-matter" className="underline">
                Which Biomarkers Matter Most?
              </a>
            </li>
            <li>
              <a href="#which-mislead" className="underline">
                Biomarkers That Commonly Mislead
              </a>
            </li>
            <li>
              <a href="#trial-context" className="underline">
                How Trials Use Biomarkers
              </a>
            </li>
            <li>
              <a href="#how-to-read-claims" className="underline">
                How to Read Biomarker Claims
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
              A biomarker is a measurable value that may correlate with health, disease risk, or biological aging. It is a signal, not a promise.
            </li>
            <li>
              The biggest trap in longevity marketing is treating biomarker changes as proof of longer life. That is a surrogate endpoint mistake.
            </li>
            <li>
              The most meaningful biomarkers are usually the ones that connect to real outcomes: function, resilience, disease onset, and safety.
            </li>
            <li>
              A biomarker claim is only as trustworthy as the trial design behind it: controls, blinding, prespecified endpoints, adequate follow-up, and transparent reporting.
            </li>
            <li>
              If you want to evaluate any longevity claim, always ask: <strong>what was measured, for how long, in what dogs, compared to what, and what outcome does it predict?</strong>
            </li>
          </ul>

          <div className="bg-[#f6efe4] border border-[#d9cfc2] rounded-lg p-5">
            <p className="text-sm text-[#2c4a30] mb-0">
              The safest mindset is not cynical. It is disciplined: <strong>biomarkers are clues</strong>. Clues can be helpful, and they can also be wrong.
            </p>
          </div>
        </section>

        {/* What is a biomarker */}
        <section id="what-is-a-biomarker" className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">What Is a Biomarker? A Plain-English Definition</h2>

          <p className="mb-4">
            A biomarker is any measurable value that researchers use to track a biological process. In dog aging research, biomarkers are often used to estimate:
          </p>

          <ul className="list-disc pl-5 mb-4">
            <li>Metabolic health (how the body processes energy)</li>
            <li>Inflammation burden (signals associated with immune activity)</li>
            <li>Organ function and physiologic reserve</li>
            <li>Stress response patterns</li>
            <li>Functional aging (mobility, strength, activity)</li>
          </ul>

          <p className="mb-4">
            A helpful analogy: a biomarker is like a dashboard gauge. A gauge can warn you something is off, and it can show improvement when you make changes.
            But a gauge improving does not automatically prove the engine will last longer.
          </p>

          <div className="bg-white border border-[#d9cfc2] rounded-lg p-5 shadow-sm">
            <p className="text-sm text-gray-700 mb-0">
              If a company claims &ldquo;our drug improves biomarkers of aging,&rdquo; the follow-up question is: <strong>which biomarkers, and what outcome do those biomarkers reliably predict?</strong>
            </p>
          </div>
        </section>

        {/* Surrogate endpoints */}
        <section id="surrogate-endpoints" className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Surrogate Endpoints: The Core Risk in Longevity Claims</h2>

          <p className="mb-4">
            Many longevity claims rely on surrogate endpoints. A surrogate endpoint is something that is easier or faster to measure than the outcome you truly care about.
            In dog longevity, the outcomes owners care about most are typically:
          </p>

          <ul className="list-disc pl-5 mb-4">
            <li>Living longer</li>
            <li>Delaying serious disease</li>
            <li>Staying mobile and comfortable longer</li>
            <li>Maintaining appetite, sleep, cognition, and engagement</li>
          </ul>

          <p className="mb-4">
            Biomarkers can be useful surrogates, but the history of medicine is full of examples where a surrogate improved and the real outcomes did not.
            This is not because researchers are dishonest. It is because biology is complicated and the body can compensate in ways we do not predict.
          </p>

          <h3 className="text-xl font-semibold mb-3">What makes a surrogate endpoint reliable?</h3>
          <ul className="list-disc pl-5 mb-4">
            <li>
              It consistently predicts the outcome you care about across many studies and many populations.
            </li>
            <li>
              Changing the surrogate reliably changes the real outcome (not just the number).
            </li>
            <li>
              The relationship holds up in real-world conditions, not only in highly selected study participants.
            </li>
          </ul>

          <div className="bg-[#f6efe4] border border-[#d9cfc2] rounded-lg p-5">
            <p className="text-sm text-[#2c4a30] mb-0">
              Owner takeaway: if the only thing a product can show is a lab marker change, you should treat longevity promises as unproven until real outcomes follow.
            </p>
          </div>
        </section>

        {/* Biomarker buckets */}
        <section id="biomarker-buckets" className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Biomarker Categories in Dog Aging Research</h2>

          <p className="mb-4">
            In practice, you will see biomarker claims fall into a few major categories. Understanding these categories helps you evaluate what is plausible and what is being overstated.
          </p>

          <div className="space-y-4">
            <div className="bg-white border border-[#d9cfc2] rounded-lg p-5 shadow-sm">
              <h3 className="text-xl font-semibold mb-2">1) Metabolic markers</h3>
              <p className="mb-3">
                These relate to energy balance, glucose regulation, lipid patterns, and body composition. They matter because metabolic dysfunction can drive inflammation, organ strain, and disease risk over time.
              </p>
              <ul className="list-disc pl-5">
                <li>Glucose regulation patterns and insulin-related signals</li>
                <li>Lipid patterns (triglycerides, cholesterol fractions)</li>
                <li>Body composition trends (lean mass vs fat mass)</li>
              </ul>
            </div>

            <div className="bg-white border border-[#d9cfc2] rounded-lg p-5 shadow-sm">
              <h3 className="text-xl font-semibold mb-2">2) Inflammation and immune signaling</h3>
              <p className="mb-3">
                Chronic, low-grade inflammation is associated with many age-related conditions, but inflammation markers are also noisy and context-dependent.
                One blood draw can reflect stress, infection, pain, or recent activity rather than &ldquo;aging&rdquo; itself.
              </p>
              <ul className="list-disc pl-5">
                <li>General inflammatory signals</li>
                <li>Immune activity patterns over time</li>
                <li>Inflammation-linked risk profiles</li>
              </ul>
            </div>

            <div className="bg-white border border-[#d9cfc2] rounded-lg p-5 shadow-sm">
              <h3 className="text-xl font-semibold mb-2">3) Organ function and physiologic reserve</h3>
              <p className="mb-3">
                Many older dogs do not suddenly become &ldquo;sick&rdquo;. They gradually lose reserve. Reserve is the buffer that lets a dog handle stress (infection, heat, dehydration, anesthesia).
                Biomarkers that estimate reserve can be clinically meaningful, especially for safety monitoring.
              </p>
              <ul className="list-disc pl-5">
                <li>Kidney-related and liver-related lab patterns</li>
                <li>Electrolyte balance trends</li>
                <li>Markers associated with chronic organ strain</li>
              </ul>
            </div>

            <div className="bg-white border border-[#d9cfc2] rounded-lg p-5 shadow-sm">
              <h3 className="text-xl font-semibold mb-2">4) Functional biomarkers (function as data)</h3>
              <p className="mb-3">
                Function is often what owners care about most. Some studies track function directly through standardized mobility scoring, gait proxies, activity data, or validated quality-of-life tools.
              </p>
              <ul className="list-disc pl-5">
                <li>Mobility and pain-related scoring systems</li>
                <li>Activity trends (sometimes wearables)</li>
                <li>Strength and balance proxies</li>
              </ul>
            </div>

            <div className="bg-white border border-[#d9cfc2] rounded-lg p-5 shadow-sm">
              <h3 className="text-xl font-semibold mb-2">5) Composite &ldquo;aging clocks&rdquo; and multi-marker panels</h3>
              <p className="mb-0">
                Some research aims to combine many data points into a single aging estimate. This can be promising, but owners should be careful:
                a tool can be statistically interesting while still being unproven as a predictor of real-life outcomes in diverse pet dogs.
              </p>
            </div>
          </div>
        </section>

        {/* Which matter */}
        <section id="which-matter" className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Which Biomarkers Tend to Matter Most for Owners?</h2>

          <p className="mb-4">
            The most useful biomarkers are usually the ones that meet two criteria at the same time:
          </p>

          <ul className="list-disc pl-5 mb-4">
            <li>They relate to a meaningful outcome (comfort, function, disease risk, resilience).</li>
            <li>They are measured in a way that is stable, repeatable, and interpreted in context.</li>
          </ul>

          <h3 className="text-xl font-semibold mb-3">Practical indicators that are often more meaningful than exotic markers</h3>
          <ul className="list-disc pl-5 mb-4">
            <li>
              <strong>Objective function trends:</strong> mobility testing, gait stability, strength proxies, and consistent activity data.
              If a dog moves better, climbs stairs more confidently, or recovers better after normal activity, that can be meaningful.
            </li>
            <li>
              <strong>Body composition and weight stability:</strong> maintaining lean muscle mass and staying in a healthy body condition is strongly tied to healthspan.
            </li>
            <li>
              <strong>Safety and reserve patterns:</strong> stable organ function trends and consistent tolerance of daily life stressors matter, especially in older dogs.
            </li>
          </ul>

          <div className="bg-white border border-[#d9cfc2] rounded-lg p-5 shadow-sm">
            <p className="text-sm text-gray-700 mb-0">
              Owner-first framing: a biomarker is more meaningful when it helps answer a practical question like &ldquo;is my dog safer, stronger, or less likely to decline soon?&rdquo;
            </p>
          </div>
        </section>

        {/* Which mislead */}
        <section id="which-mislead" className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Biomarkers That Commonly Mislead (Even When People Mean Well)</h2>

          <p className="mb-4">
            Biomarker confusion usually happens for predictable reasons. Below are common pitfalls that can make a biomarker claim sound stronger than it is.
          </p>

          <h3 className="text-xl font-semibold mb-3">Pitfall 1: One-time measurements treated as destiny</h3>
          <p className="mb-4">
            Many biomarkers vary day to day based on stress, sleep, hydration, recent exercise, and minor illness. A single measurement may be useful as a snapshot,
            but strong claims require trends over time and a clear comparison group.
          </p>

          <h3 className="text-xl font-semibold mb-3">Pitfall 2: The wrong comparison</h3>
          <p className="mb-4">
            If a company says &ldquo;biomarkers improved,&rdquo; improved compared to what? Baseline alone is not enough. Dogs can improve with routine changes, regression toward typical values, or improved owner attention.
            This is why controls, blinding, and prespecified endpoints matter.
          </p>

          <h3 className="text-xl font-semibold mb-3">Pitfall 3: Small sample sizes that create fragile conclusions</h3>
          <p className="mb-4">
            Early studies can be small and still valuable, but the smaller the study, the easier it is for chance, selection effects, and hidden confounders to create a misleading signal.
          </p>

          <h3 className="text-xl font-semibold mb-3">Pitfall 4: Biomarkers presented without clinical meaning</h3>
          <p className="mb-4">
            If you cannot translate a biomarker into a plausible outcome, treat it cautiously. The strongest claims show a chain:
            biomarker change → physiologic mechanism → measurable function → disease delay or survival impact.
          </p>

          <h3 className="text-xl font-semibold mb-3">Pitfall 5: Owner-reported outcomes presented as objective proof</h3>
          <p className="mb-0">
            Owner observations matter. They are also vulnerable to expectation bias, especially when the owner is hopeful and scared.
            The best studies pair owner-reported outcomes with objective measurements.
          </p>
        </section>

        {/* Trial context */}
        <section id="trial-context" className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">How Trials Use Biomarkers (and Why That Is Not Automatically Bad)</h2>

          <p className="mb-4">
            It is normal for serious research programs to use biomarkers. Biomarkers allow researchers to test plausibility and safety faster than waiting years for survival outcomes.
            The key is whether biomarker results are treated as:
          </p>

          <ul className="list-disc pl-5 mb-4">
            <li>
              <strong>signals</strong> that justify bigger studies, or
            </li>
            <li>
              <strong>proof</strong> that the final outcome is guaranteed.
            </li>
          </ul>

          <h3 className="text-xl font-semibold mb-3">A healthy progression in longevity research often looks like this</h3>
          <ul className="list-disc pl-5 mb-4">
            <li>Early studies establish safety and mechanistic plausibility.</li>
            <li>Biomarkers and short-term function metrics are measured to see if the intervention produces consistent signals.</li>
            <li>Larger trials refine populations, dosing, and endpoints.</li>
            <li>Longer studies evaluate real outcomes: disease delay, disability delay, resilience, and possibly survival endpoints.</li>
          </ul>

          <div className="bg-[#f6efe4] border border-[#d9cfc2] rounded-lg p-5">
            <p className="text-sm text-[#2c4a30] mb-0">
              Biomarkers are not &ldquo;fake.&rdquo; The misuse happens when biomarker results are presented to owners as a guarantee of extra years.
            </p>
          </div>
        </section>

        {/* How to read claims */}
        <section id="how-to-read-claims" className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">How to Read Biomarker Claims in Headlines, Press Releases, and Study Summaries</h2>

          <p className="mb-4">
            Use this section as a translation tool. It helps you move from hype language to an evidence-based interpretation.
          </p>

          <div className="space-y-4">
            <div className="bg-white border border-[#d9cfc2] rounded-lg p-5 shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Claim: &ldquo;Improves biomarkers of aging&rdquo;</h3>
              <ul className="list-disc pl-5 mb-0">
                <li>Ask: which biomarkers, specifically?</li>
                <li>Ask: were they prespecified primary endpoints or exploratory signals?</li>
                <li>Ask: what does changing those biomarkers predict in real dogs?</li>
              </ul>
            </div>

            <div className="bg-white border border-[#d9cfc2] rounded-lg p-5 shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Claim: &ldquo;Reduces inflammation markers&rdquo;</h3>
              <ul className="list-disc pl-5 mb-0">
                <li>Ask: what context was controlled (pain, infection, stress, diet, exercise)?</li>
                <li>Ask: is the effect durable over time?</li>
                <li>Ask: does it correlate with improved function or reduced disease events?</li>
              </ul>
            </div>

            <div className="bg-white border border-[#d9cfc2] rounded-lg p-5 shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Claim: &ldquo;Improves metabolic health&rdquo;</h3>
              <ul className="list-disc pl-5 mb-0">
                <li>Ask: what changed (body composition, lipid patterns, glucose regulation)?</li>
                <li>Ask: were routine changes controlled (diet, activity, weight loss)?</li>
                <li>Ask: what outcome is expected to improve (disease delay, function, resilience)?</li>
              </ul>
            </div>

            <div className="bg-white border border-[#d9cfc2] rounded-lg p-5 shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Claim: &ldquo;Shows a reasonable expectation of effectiveness&rdquo;</h3>
              <ul className="list-disc pl-5 mb-0">
                <li>Interpret as: &ldquo;credible early evidence&rdquo; rather than &ldquo;proven outcome.&rdquo;</li>
                <li>Ask: what intended use and endpoint does this relate to?</li>
                <li>
                  If you want the full regulatory explanation, read:{' '}
                  <Link className="underline" href={`/${locale}/blog/fda-veterinary-longevity-claims`}>
                    How the FDA Evaluates Veterinary Longevity Claims
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <p className="mt-4 mb-0">
            Your goal is not to become suspicious of everything. Your goal is to become fluent in the difference between a signal and a conclusion.
          </p>
        </section>

        {/* Owner checklist */}
        <section id="owner-checklist" className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Owner Checklist: The Questions That Prevent You From Being Misled</h2>

          <p className="mb-4">
            If your dog is aging and you feel anxious, it is easy to miss key questions. This checklist is designed to protect you from that.
            Use it for supplements, drugs, and research trials.
          </p>

          <ul className="list-disc pl-5 mb-4">
            <li>
              <strong>What is the endpoint?</strong> Is the claim about survival, disease delay, function, or a lab marker?
            </li>
            <li>
              <strong>What is the comparison?</strong> Placebo or control group, or only baseline?
            </li>
            <li>
              <strong>Was it blinded?</strong> If not, how did they reduce expectation bias?
            </li>
            <li>
              <strong>How long was follow-up?</strong> Does the timeline match the magnitude of the claim?
            </li>
            <li>
              <strong>How many dogs were studied?</strong> And were they diverse in breed, size, and baseline risk?
            </li>
            <li>
              <strong>Were outcomes prespecified?</strong> Or are results exploratory signals presented as conclusions?
            </li>
            <li>
              <strong>What is the safety monitoring plan?</strong> What labs were checked, how often, and what adverse events occurred?
            </li>
            <li>
              <strong>Is there transparent reporting?</strong> Peer-reviewed publication, detailed methods, or robust regulatory documentation.
            </li>
            <li>
              <strong>What is still unknown?</strong> Long-term safety, breed-specific effects, and whether biomarker changes translate into real outcomes.
            </li>
          </ul>

          <div className="bg-[#f6efe4] border border-[#d9cfc2] rounded-lg p-5">
            <p className="text-sm text-[#2c4a30] mb-0">
              If a claim makes you feel urgent, slow down and apply the checklist. Urgency is often the emotion that marketing relies on most.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">FAQ</h2>

          <div className="space-y-6">
            <div className="bg-white border border-[#d9cfc2] rounded-lg p-5 shadow-sm">
              <h3 className="text-xl font-semibold mb-2">If biomarkers improve, does that mean my dog will live longer?</h3>
              <p className="mb-0">
                Not necessarily. Biomarkers can be meaningful signals, but longevity requires proof through outcomes like disease delay, disability delay, resilience, and eventually survival endpoints.
                A biomarker shift can be a promising clue without being a guarantee.
              </p>
            </div>

            <div className="bg-white border border-[#d9cfc2] rounded-lg p-5 shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Why do companies talk about biomarkers instead of lifespan?</h3>
              <p className="mb-0">
                Lifespan studies take a long time. Biomarkers can move faster and help researchers decide whether a strategy is worth pursuing.
                The mistake is presenting biomarker results as if they are equivalent to lifespan proof.
              </p>
            </div>

            <div className="bg-white border border-[#d9cfc2] rounded-lg p-5 shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Are biomarkers useless?</h3>
              <p className="mb-0">
                No. Biomarkers are essential tools in modern research and medicine. They become problematic when they are treated as the final outcome rather than one piece of evidence in a larger chain.
              </p>
            </div>

            <div className="bg-white border border-[#d9cfc2] rounded-lg p-5 shadow-sm">
              <h3 className="text-xl font-semibold mb-2">What is the most practical way to help my dog&rsquo;s healthspan today?</h3>
              <p className="mb-0">
                For most dogs, high-confidence steps include healthy body condition, preserving muscle and mobility, addressing pain early, dental health, and age-appropriate screening with your veterinarian.
                The longevity pillar article includes a thorough &ldquo;what you can do now&rdquo; section.
              </p>
            </div>

            <div className="bg-white border border-[#d9cfc2] rounded-lg p-5 shadow-sm">
              <h3 className="text-xl font-semibold mb-2">If I am considering a study, what should I focus on first?</h3>
              <p className="mb-0">
                Focus on endpoints, safety monitoring, and study design (controls and blinding). Also be honest about whether you can commit to follow-ups.
                This supporting guide is built specifically for that decision:
                <br />
                <Link className="underline" href={`/${locale}/blog/should-you-join-dog-longevity-study`}>
                  Should You Enroll Your Dog in a Longevity Study? A Clear, Owner-First Guide
                </Link>
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
                How the FDA Evaluates Veterinary Longevity Claims: Endpoints, Approvals, and What &ldquo;Effectiveness&rdquo; Can Mean
              </Link>
              {/* fda-veterinary-longevity-claims.tsx */}
            </li>
            <li>
              <Link className="underline" href={`/${locale}/blog/loyal-loy-002-explained`}>
                LOY-002 Explained: What Has Been Tested, What Is Claimed, and What Would Prove It
              </Link>
              {/* loyal-loy-002-explained.tsx */}
            </li>
            <li>
              <Link className="underline" href={`/${locale}/blog/rapamycin-longevity-research-dogs`}>
                Rapamycin-Style Longevity Research in Dogs: What Studies Measure, Safety Questions, and What Is Still Unknown
              </Link>
              {/* rapamycin-longevity-research-dogs.tsx */}
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
