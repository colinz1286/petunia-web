'use client';

import Head from 'next/head';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function LethargyMetronidazoleDogs() {
  const locale = useLocale();

  const title =
    'Lethargy in Dogs on Metronidazole: Causes, Risks, and When to Worry';
  const date = 'December 16, 2025';
  const categories = ['owner'] as const;

  const categoryLabels: Record<string, string> = {
    owner: 'Pet Owners',
    food: 'Dog Food & Nutrition',
    boarding: 'Boarding & Daycare',
    sitter: 'Pet Sitters',
    walker: 'Dog Walkers',
    rescue: 'Rescues',
    vet: 'Veterinary Clinics',
  };

  return (
    <>
      <Head>
        <title>{title} – Petunia Blog</title>
        <meta
          name="description"
          content="Metronidazole and similar GI medications can cause lethargy in some dogs. Learn why fatigue occurs, what is happening physiologically, how to monitor safely at home, and when lethargy becomes a medical emergency."
        />
        <meta name="robots" content="all" />
      </Head>

      <main className="max-w-3xl mx-auto px-4 py-10 text-[#2c4a30]">
        <p className="text-sm text-gray-500 mb-2">Posted on {date}</p>
        <h1 className="text-3xl font-bold mb-4">{title}</h1>

        {/* Category Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {categories.map((key) => (
            <span
              key={key}
              className="text-xs bg-[#e4dbcb] text-[#2c4a30] px-3 py-1 rounded-full border border-[#d9cfc2]"
            >
              {categoryLabels[key]}
            </span>
          ))}
        </div>

        {/* TL;DR */}
        <h2 className="text-2xl font-semibold mt-8 mb-3">TL;DR</h2>
        <ul className="list-disc pl-5 space-y-2 mb-8">
          <li>Lethargy can occur in dogs taking metronidazole or similar GI medications.</li>
          <li>Fatigue may reflect medication effects, the underlying illness, dehydration, or metabolic stress.</li>
          <li>Mild, short-term tiredness can be monitored, but worsening or profound lethargy is not normal.</li>
          <li>Lethargy combined with neurologic signs, vomiting, or collapse requires urgent veterinary care.</li>
        </ul>

        {/* TOC */}
        <h2 className="text-2xl font-semibold mb-3">Table of Contents</h2>
        <ul className="list-disc pl-5 space-y-1 mb-10">
          <li>What Lethargy Means in Dogs</li>
          <li>Why Metronidazole Can Cause Lethargy</li>
          <li>The Metabolic and Neurologic Pathways Involved</li>
          <li>Distinguishing Medication Effects From Illness</li>
          <li>What You Can Safely Do at Home</li>
          <li>Dehydration, Electrolytes, and Energy Balance</li>
          <li>Other Serious Conditions That Can Look Like Medication Lethargy</li>
          <li>When to Call Your Veterinarian</li>
          <li>Emergency Warning Signs</li>
          <li>How Veterinarians Evaluate Medication-Associated Lethargy</li>
        </ul>

        {/* Section 1 */}
        <h2 className="text-2xl font-semibold mt-10 mb-3">
          What Lethargy Means in Dogs
        </h2>
        <p className="mb-4">
          Lethargy refers to a noticeable decrease in a dog&rsquo;s normal energy level, engagement, or responsiveness. A lethargic dog may sleep more than usual, move slowly, show little interest in food or play, or seem mentally dull.
        </p>
        <p className="mb-6">
          Mild lethargy can occur during recovery from illness. However, marked or worsening lethargy is a clinical sign that deserves attention, especially when it appears after starting a new medication.
        </p>

        {/* Section 2 */}
        <h2 className="text-2xl font-semibold mt-10 mb-3">
          Why Metronidazole Can Cause Lethargy
        </h2>
        <p className="mb-4">
          Metronidazole is generally well tolerated, but lethargy is a documented side effect in some dogs. This does not mean the medication is dangerous in most cases, but it does mean the dog&rsquo;s body is responding to it in a way that affects energy and alertness.
        </p>
        <p className="mb-6">
          Lethargy may appear alone or alongside other signs such as nausea, drooling, or decreased appetite, which are discussed in{' '}
          <Link
            href={`/${locale}/blog/metronidazole-for-dogs`}
            className="underline"
          >
            Metronidazole for Dogs: Uses, Side Effects, and When to Be Concerned
          </Link>.
        </p>

        {/* Section 3 */}
        <h2 className="text-2xl font-semibold mt-10 mb-3">
          The Metabolic and Neurologic Pathways Involved
        </h2>
        <p className="mb-4">
          Understanding why lethargy occurs helps determine whether it is expected or concerning. The process is usually multifactorial rather than a single direct pathway.
        </p>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>
            <strong>Systemic absorption and distribution:</strong> Metronidazole is absorbed from the GI tract and distributed widely throughout the body, including the central nervous system.
          </li>
          <li>
            <strong>Liver metabolism:</strong> The drug is metabolized primarily by the liver through oxidative and conjugation pathways, producing active metabolites that circulate systemically.
          </li>
          <li>
            <strong>Central nervous system effects:</strong> Because metronidazole crosses the blood-brain barrier, it can influence neurotransmitter signaling. In some dogs, this results in sedation, dullness, or slowed responsiveness.
          </li>
          <li>
            <strong>Secondary metabolic stress:</strong> Reduced appetite, nausea, vomiting, or diarrhea can lower caloric intake and fluid balance, compounding fatigue.
          </li>
        </ul>
        <p className="mb-6">
          In rare cases, higher doses or prolonged exposure may lead to neurologic toxicity, where lethargy is accompanied by more obvious neurologic abnormalities.
        </p>

        {/* Section 4 */}
        <h2 className="text-2xl font-semibold mt-10 mb-3">
          Distinguishing Medication Effects From Illness
        </h2>
        <p className="mb-4">
          One of the biggest challenges for owners is determining whether lethargy is caused by the medication or by the condition being treated.
        </p>
        <p className="mb-6">
          GI illnesses themselves can cause fatigue through inflammation, discomfort, dehydration, and altered nutrient absorption. If lethargy appeared before medication was started or continues to worsen despite treatment, the underlying disease may still be active.
        </p>

        {/* Section 5 */}
        <h2 className="text-2xl font-semibold mt-10 mb-3">
          What You Can Safely Do at Home
        </h2>
        <p className="mb-4">
          If lethargy is mild and your dog is otherwise stable, supportive care at home is often appropriate while you monitor closely.
        </p>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>Ensure access to fresh water at all times</li>
          <li>Encourage rest in a calm, low-stress environment</li>
          <li>Offer small, easily digestible meals if appetite allows</li>
          <li>Avoid strenuous exercise during recovery</li>
        </ul>
        <p className="mb-6">
          If lethargy is paired with nausea or vomiting, review supportive steps in{' '}
          <Link
            href={`/${locale}/blog/nausea-vomiting-metronidazole-dogs`}
            className="underline"
          >
            What to Do If Your Dog Has Nausea or Vomiting While on Metronidazole
          </Link>.
        </p>

        {/* Section 6 */}
        <h2 className="text-2xl font-semibold mt-10 mb-3">
          Dehydration, Electrolytes, and Energy Balance
        </h2>
        <p className="mb-4">
          Lethargy often worsens when dehydration or electrolyte imbalances develop. Dogs losing fluids through vomiting or diarrhea may become weak even before dehydration is obvious.
        </p>
        <p className="mb-6">
          Electrolyte disturbances can impair muscle and nerve function, leading to generalized weakness, exercise intolerance, and mental dullness.
        </p>

        {/* Section 7 */}
        <h2 className="text-2xl font-semibold mt-10 mb-3">
          Other Serious Conditions That Can Look Like Medication Lethargy
        </h2>
        <p className="mb-4">
          While medication effects are common, lethargy can also signal more serious problems that should not be overlooked.
        </p>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>Worsening infection or systemic inflammation</li>
          <li>Pancreatitis or severe GI disease</li>
          <li>Hypoglycemia, especially in small dogs</li>
          <li>Neurologic toxicity associated with prolonged metronidazole use</li>
          <li>Adverse reactions to other medications given concurrently</li>
        </ul>

        {/* Section 8 */}
        <h2 className="text-2xl font-semibold mt-10 mb-3">
          When to Call Your Veterinarian
        </h2>
        <p className="mb-4">
          Contact your veterinarian if lethargy is moderate, persistent, or worsening, or if it interferes with normal eating, drinking, or mobility.
        </p>
        <p className="mb-6">
          Your veterinarian may adjust the dose, recommend supportive therapies, or reassess whether metronidazole remains the appropriate treatment.
        </p>

        {/* Section 9 */}
        <h2 className="text-2xl font-semibold mt-10 mb-3">
          Emergency Warning Signs
        </h2>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>Collapse or inability to stand</li>
          <li>Marked mental dullness or unresponsiveness</li>
          <li>Seizures, tremors, or abnormal movements</li>
          <li>Persistent vomiting or inability to keep water down</li>
          <li>Signs of severe dehydration or shock</li>
        </ul>
        <p className="mb-6">
          These signs require immediate veterinary evaluation and should not be monitored at home.
        </p>

        {/* Section 10 */}
        <h2 className="text-2xl font-semibold mt-10 mb-3">
          How Veterinarians Evaluate Medication-Associated Lethargy
        </h2>
        <p className="mb-4">
          When a dog presents with lethargy while on metronidazole, veterinarians assess hydration status, neurologic function, medication history, and progression of GI signs.
        </p>
        <p className="mb-10">
          Diagnostic steps may include blood work, electrolyte assessment, medication review, and, in rare cases, neurologic evaluation to rule out toxicity or unrelated disease.
        </p>

        {/* References */}
        <h2 className="text-2xl font-semibold mt-10 mb-3">References</h2>
        <ul className="list-disc pl-5 space-y-2 mb-10">
          <li>Merck Veterinary Manual – Metronidazole adverse effects and neurologic considerations</li>
          <li>VCA Hospitals – Client education on metronidazole side effects in dogs</li>
          <li>American College of Veterinary Internal Medicine – GI disease and systemic effects</li>
        </ul>

        <Link
          href={`/${locale}/blog`}
          className="underline text-[#2c4a30] font-medium hover:opacity-80"
        >
          ← Back to Blog
        </Link>

        <p className="text-xs text-gray-500 mt-8">
          This article is for educational purposes only and does not replace professional veterinary care.
        </p>
      </main>
    </>
  );
}
