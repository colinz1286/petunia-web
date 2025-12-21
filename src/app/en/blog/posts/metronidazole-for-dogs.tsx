'use client';

import Head from 'next/head';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function MetronidazoleForDogs() {
  const locale = useLocale();

  const title =
    'Metronidazole for Dogs: Uses, Side Effects, and When to Be Concerned';
  const date = 'December 12, 2025';
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
          content="Metronidazole is frequently prescribed for dogs with diarrhea, colitis, and certain infections. Learn how it works, how long it is used, possible side effects, warning signs of toxicity, and when veterinary care is necessary."
        />
        <meta name="robots" content="all" />
        <link
          rel="canonical"
          href={`https://www.petuniapets.com/${locale}/blog/metronidazole-for-dogs`}
        />
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
          <li>Metronidazole is commonly prescribed for diarrhea, colitis, and certain infections in dogs.</li>
          <li>Most dogs tolerate it well, but side effects can occur, especially with prolonged use.</li>
          <li>Neurologic side effects are uncommon but require immediate veterinary attention.</li>
          <li>The medication is typically prescribed short-term, though some cases require longer courses.</li>
        </ul>

        {/* TOC */}
        <h2 className="text-2xl font-semibold mb-3">Table of Contents</h2>
        <ul className="list-disc pl-5 space-y-1 mb-10">
          <li>What Metronidazole Is and Its Common Names</li>
          <li>Why Veterinarians Prescribe Metronidazole</li>
          <li>Conditions Commonly Treated with Metronidazole</li>
          <li>Typical Dosage and Duration of Treatment</li>
          <li>Common Side Effects in Dogs</li>
          <li>Neurologic Side Effects and Toxicity</li>
          <li>Warning Signs That Require Veterinary Attention</li>
          <li>Drug Interactions and Special Considerations</li>
          <li>Is Metronidazole Always Necessary?</li>
          <li>How This Medication Fits into a Broader GI Treatment Plan</li>
        </ul>

        {/* Section 1 */}
        <h2 className="text-2xl font-semibold mt-10 mb-3">
          What Metronidazole Is and Its Common Names
        </h2>
        <p className="mb-4">
          Metronidazole is an antimicrobial medication that has both antibacterial and antiprotozoal properties. In veterinary medicine, it has been used for decades to treat gastrointestinal conditions and certain infections in dogs.
        </p>
        <p className="mb-6">
          It is commonly referred to simply as metronidazole, but some pet owners may recognize brand names such as Flagyl. Regardless of the name, the active ingredient and clinical effects are the same.
        </p>

        {/* Section 2 */}
        <h2 className="text-2xl font-semibold mt-10 mb-3">
          Why Veterinarians Prescribe Metronidazole
        </h2>
        <p className="mb-4">
          Veterinarians prescribe metronidazole primarily to reduce inflammation and target specific organisms within the gastrointestinal tract. It is often selected when diarrhea is persistent, severe, or associated with inflammation of the colon.
        </p>
        <p className="mb-6">
          This medication is discussed as part of broader GI treatment strategies in{' '}
          <Link
            href={`/${locale}/blog/gi-medications-for-dogs`}
            className="underline"
          >
            Common GI Medications for Dogs
          </Link>.
        </p>

        {/* Section 3 */}
        <h2 className="text-2xl font-semibold mt-10 mb-3">
          Conditions Commonly Treated with Metronidazole
        </h2>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>Acute or chronic diarrhea</li>
          <li>Stress-related or inflammatory colitis</li>
          <li>Protozoal infections such as Giardia</li>
          <li>Inflammatory bowel disease as part of combination therapy</li>
          <li>Anaerobic bacterial infections</li>
        </ul>
        <p className="mb-6">
          It is important to note that metronidazole is not appropriate for all causes of diarrhea and should not be used as a routine or preventative medication without proper diagnosis.
        </p>

        {/* Section 4 */}
        <h2 className="text-2xl font-semibold mt-10 mb-3">
          Typical Dosage and Duration of Treatment
        </h2>
        <p className="mb-4">
          The dosage and length of treatment depend on the condition being treated, the dog&rsquo;s size, and overall health status.
        </p>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>Acute diarrhea or colitis: typically 5–7 days</li>
          <li>Giardia infections: often 5–10 days</li>
          <li>Chronic inflammatory conditions: longer courses under close supervision</li>
        </ul>
        <p className="mb-6">
          Prolonged use increases the risk of side effects, which is why veterinarians carefully weigh risks and benefits.
        </p>

        {/* Section 5 */}
        <h2 className="text-2xl font-semibold mt-10 mb-3">
          Common Side Effects in Dogs
        </h2>
        <p className="mb-4">
          Many dogs tolerate metronidazole without issue, especially when used short-term. However, mild side effects may occur.
        </p>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>Decreased appetite</li>
          <li>Nausea or vomiting</li>
          <li>Excessive drooling</li>
          <li>Lethargy</li>
        </ul>

        {/* Section 6 */}
        <h2 className="text-2xl font-semibold mt-10 mb-3">
          Neurologic Side Effects and Toxicity
        </h2>
        <p className="mb-6">
          Neurologic side effects are uncommon but serious. These effects are more likely with high doses or prolonged administration and require immediate veterinary evaluation.
        </p>

        {/* Section 7 */}
        <h2 className="text-2xl font-semibold mt-10 mb-3">
          Warning Signs That Require Veterinary Attention
        </h2>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>Uncoordinated walking or stumbling</li>
          <li>Head tilt or abnormal eye movements</li>
          <li>Seizures or tremors</li>
          <li>Sudden behavioral changes</li>
        </ul>
        <p className="mb-6">
          If any of these signs occur, the medication should be stopped and a veterinarian contacted immediately.
        </p>

        {/* Section 8 */}
        <h2 className="text-2xl font-semibold mt-10 mb-3">
          Drug Interactions and Special Considerations
        </h2>
        <p className="mb-6">
          Metronidazole may interact with other medications and should be used cautiously in dogs with liver disease, pregnant dogs, or those receiving long-term therapy.
        </p>

        {/* Section 9 */}
        <h2 className="text-2xl font-semibold mt-10 mb-3">
          Is Metronidazole Always Necessary?
        </h2>
        <p className="mb-6">
          Not all diarrhea requires antibiotics. Overuse can contribute to resistance and disrupt normal gut flora, which is why accurate diagnosis is critical.
        </p>

        {/* Section 10 */}
        <h2 className="text-2xl font-semibold mt-10 mb-3">
          How Metronidazole Fits into a Broader GI Treatment Plan
        </h2>
        <p className="mb-10">
          Metronidazole is most effective when used as part of a comprehensive plan that may include dietary management, probiotics, and environmental stability rather than as a standalone solution.
        </p>

        {/* References */}
        <h2 className="text-2xl font-semibold mt-10 mb-3">References</h2>
        <ul className="list-disc pl-5 space-y-2 mb-10">
          <li>Merck Veterinary Manual</li>
          <li>American College of Veterinary Internal Medicine</li>
          <li>American Veterinary Medical Association</li>
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
