'use client';

import Head from 'next/head';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function CollapseLethargyMaropitantDogs() {
  const locale = useLocale();

  const title =
    'Severe Lethargy or Collapse in Dogs on Maropitant: Causes, Emergencies, and What to Do';
  const date = 'December 19, 2025';
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
          content="Although uncommon, maropitant (Cerenia®) can be associated with severe lethargy or collapse in dogs. Learn why this happens, emergency warning signs, immediate first steps owners can take, and how veterinarians treat these cases."
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
          <li>Severe lethargy or collapse while on maropitant is rare but serious.</li>
          <li>It can involve central nervous system effects, cardiovascular changes, or compounding metabolic stress.</li>
          <li>Collapse is always an emergency and requires immediate veterinary care.</li>
          <li>Early recognition and fast transport can be life-saving.</li>
        </ul>

        {/* TOC */}
        <h2 className="text-2xl font-semibold mb-3">Table of Contents</h2>
        <ul className="list-disc pl-5 space-y-1 mb-10">
          <li>What Collapse and Severe Lethargy Mean Clinically</li>
          <li>Why Maropitant Can Rarely Cause Severe Lethargy or Collapse</li>
          <li>The Metabolic and Chemical Pathways Involved</li>
          <li>Additional Signs That Often Accompany Collapse</li>
          <li>Which Dogs Are at Higher Risk</li>
          <li>Why This Is a Medical Emergency</li>
          <li>Immediate Steps Owners Can Take</li>
          <li>Emergency Veterinary Treatment</li>
          <li>Can This Reaction Be Predicted or Prevented?</li>
          <li>Key Takeaways for Dog Owners</li>
        </ul>

        {/* Section 1 */}
        <h2 className="text-2xl font-semibold mt-10 mb-3">
          What Collapse and Severe Lethargy Mean Clinically
        </h2>
        <p className="mb-4">
          Severe lethargy goes beyond a dog being &ldquo;tired.&rdquo; Clinically, it describes profound weakness, minimal responsiveness, inability or reluctance to stand, or marked mental dullness. Collapse occurs when a dog suddenly loses the ability to remain upright or conscious.
        </p>
        <p className="mb-6">
          Both signs indicate significant disruption to neurologic, cardiovascular, or metabolic function and should always be treated as emergencies, regardless of the suspected cause.
        </p>

        {/* Section 2 */}
        <h2 className="text-2xl font-semibold mt-10 mb-3">
          Why Maropitant Can Rarely Cause Severe Lethargy or Collapse
        </h2>
        <p className="mb-4">
          Maropitant (commonly known as Cerenia®) is generally very safe, but in rare cases it can contribute to profound lethargy or collapse. This typically occurs when multiple factors overlap rather than from a single isolated effect.
        </p>
        <p className="mb-6">
          These cases may involve exaggerated central nervous system depression, cardiovascular effects, drug interactions, or an already unstable physiologic state. Maropitant&rsquo;s usual role and side effects are covered in{' '}
          <Link
            href={`/${locale}/blog/maropitant-for-dogs`}
            className="underline"
          >
            Maropitant for Dogs: Uses, Side Effects, and When It Should Be Avoided
          </Link>.
        </p>

        {/* Section 3 */}
        <h2 className="text-2xl font-semibold mt-10 mb-3">
          The Metabolic and Chemical Pathways Involved
        </h2>
        <p className="mb-4">
          Understanding how maropitant works helps explain how severe reactions can occur.
        </p>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>
            <strong>NK1 receptor blockade:</strong> Maropitant blocks neurokinin-1 receptors, preventing substance P from activating the vomiting center. Substance P also plays roles in pain perception, autonomic regulation, and vascular tone.
          </li>
          <li>
            <strong>Central nervous system penetration:</strong> Maropitant crosses the blood-brain barrier. In sensitive dogs, excessive suppression of central signaling can result in sedation, altered consciousness, or neurologic depression.
          </li>
          <li>
            <strong>Autonomic nervous system effects:</strong> Substance P interacts with cardiovascular regulation. Blocking it may contribute to transient changes in blood pressure or heart rate in susceptible individuals.
          </li>
          <li>
            <strong>Liver metabolism and systemic exposure:</strong> Maropitant is metabolized by the liver. Dogs with impaired hepatic function may experience higher circulating drug levels for longer periods.
          </li>
          <li>
            <strong>Compounding metabolic stress:</strong> Vomiting, dehydration, electrolyte imbalance, or concurrent illness can lower blood pressure and energy reserves, making collapse more likely.
          </li>
        </ul>
        <p className="mb-6">
          In practice, collapse is rarely caused by maropitant alone. It almost always reflects an interaction between the drug and an already compromised physiologic state.
        </p>

        {/* Section 4 */}
        <h2 className="text-2xl font-semibold mt-10 mb-3">
          Additional Signs That Often Accompany Collapse
        </h2>
        <p className="mb-4">
          Collapse is usually preceded or accompanied by other warning signs.
        </p>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>Profound lethargy or unresponsiveness</li>
          <li>Weakness or inability to stand</li>
          <li>Pale gums or prolonged capillary refill time</li>
          <li>Rapid or very slow heart rate</li>
          <li>Vomiting or ongoing GI distress</li>
          <li>Neurologic signs such as tremors or disorientation</li>
        </ul>
        <p className="mb-6">
          If vomiting persists alongside lethargy, review emergency guidance in{' '}
          <Link
            href={`/${locale}/blog/persistent-vomiting-despite-maropitant-dogs`}
            className="underline"
          >
            Why Dogs Can Continue Vomiting Despite Maropitant
          </Link>.
        </p>

        {/* Section 5 */}
        <h2 className="text-2xl font-semibold mt-10 mb-3">
          Which Dogs Are at Higher Risk
        </h2>
        <p className="mb-4">
          While reactions are unpredictable, certain dogs may have higher vulnerability.
        </p>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>Dogs with liver disease or reduced hepatic function</li>
          <li>Dogs that are severely dehydrated or electrolyte depleted</li>
          <li>Very young, geriatric, or debilitated dogs</li>
          <li>Dogs receiving multiple medications that affect the central nervous system</li>
          <li>Dogs with severe underlying GI or systemic illness</li>
        </ul>

        {/* Section 6 */}
        <h2 className="text-2xl font-semibold mt-10 mb-3">
          Why This Is a Medical Emergency
        </h2>
        <p className="mb-6">
          Collapse signals compromised circulation, neurologic function, or both. Without rapid intervention, oxygen delivery to vital organs may be inadequate, leading to organ damage or death.
        </p>

        {/* Section 7 */}
        <h2 className="text-2xl font-semibold mt-10 mb-3">
          Immediate Steps Owners Can Take
        </h2>
        <p className="mb-4">
          If your dog collapses, every minute matters.
        </p>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>Stop giving the medication immediately unless instructed otherwise</li>
          <li>Keep your dog warm, quiet, and lying on their side</li>
          <li>Do not force food or water</li>
          <li>Check gum color and breathing if safe to do so</li>
          <li>Transport to the nearest emergency veterinary clinic immediately</li>
        </ul>
        <p className="mb-6">
          Do not attempt home remedies or wait to see if the dog improves.
        </p>

        {/* Section 8 */}
        <h2 className="text-2xl font-semibold mt-10 mb-3">
          Emergency Veterinary Treatment
        </h2>
        <p className="mb-4">
          Emergency treatment focuses on stabilization and identifying the underlying cause.
        </p>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>Intravenous fluids to restore circulation</li>
          <li>Electrolyte and blood pressure correction</li>
          <li>Oxygen support if needed</li>
          <li>Neurologic and cardiovascular monitoring</li>
          <li>Discontinuation or adjustment of medications</li>
        </ul>

        {/* Section 9 */}
        <h2 className="text-2xl font-semibold mt-10 mb-3">
          Can This Reaction Be Predicted or Prevented?
        </h2>
        <p className="mb-4">
          There is no reliable way to predict rare severe reactions, but risk can be reduced.
        </p>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>Ensure adequate hydration before starting treatment</li>
          <li>Disclose all medications and health conditions to your veterinarian</li>
          <li>Monitor closely during the first doses</li>
          <li>Seek early veterinary advice if lethargy develops</li>
        </ul>
        <p className="mb-6">
          Early intervention often prevents progression to collapse.
        </p>

        {/* Section 10 */}
        <h2 className="text-2xl font-semibold mt-10 mb-3">
          Key Takeaways for Dog Owners
        </h2>
        <p className="mb-10">
          Severe lethargy or collapse while on maropitant is rare but life-threatening. Understanding warning signs, acting quickly, and seeking emergency care without delay can make the difference between recovery and catastrophic outcomes.
        </p>

        {/* References */}
        <h2 className="text-2xl font-semibold mt-10 mb-3">References</h2>
        <ul className="list-disc pl-5 space-y-2 mb-10">
          <li>Merck Veterinary Manual – Antiemetic pharmacology and adverse reactions</li>
          <li>FDA Center for Veterinary Medicine – Cerenia® (maropitant) safety information</li>
          <li>American College of Veterinary Internal Medicine – Acute collapse and shock management</li>
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
