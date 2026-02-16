'use client';

import Head from 'next/head';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function HelpDogEatWhileOnMetronidazole() {
  const locale = useLocale();

  const title =
    'How to Help a Dog Eat While on Metronidazole or Other GI Medications';
  const date = 'December 13, 2025';
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
          content="Dogs taking metronidazole or similar GI medications may lose interest in food. Learn safe ways to encourage eating, grocery-store foods that are gentle on the stomach, what to avoid, and when appetite loss becomes a medical concern."
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
          <li>Decreased appetite is common in dogs taking metronidazole and other GI medications.</li>
          <li>Mild nausea, taste aversion, and gut irritation can all reduce interest in food.</li>
          <li>Bland, low-fat, highly digestible foods are often safest short-term options.</li>
          <li>Persistent appetite loss or worsening symptoms should always prompt a veterinary call.</li>
        </ul>

        {/* TOC */}
        <h2 className="text-2xl font-semibold mb-3">Table of Contents</h2>
        <ul className="list-disc pl-5 space-y-1 mb-10">
          <li>Why GI Medications Can Reduce Appetite</li>
          <li>How Long Appetite Changes Usually Last</li>
          <li>General Feeding Principles During GI Treatment</li>
          <li>Safe Grocery-Store Foods That Often Help</li>
          <li>Is Boiled Chicken and Rice a Good Option?</li>
          <li>Foods and Ingredients to Avoid</li>
          <li>Fat, Carbohydrates, and Protein Considerations</li>
          <li>Practical Tips to Encourage Eating</li>
          <li>When Appetite Loss Becomes a Red Flag</li>
          <li>Supporting Recovery Beyond the Food Bowl</li>
        </ul>

        {/* Section 1 */}
        <h2 className="text-2xl font-semibold mt-10 mb-3">
          Why GI Medications Can Reduce Appetite
        </h2>
        <p className="mb-4">
          Many gastrointestinal medications, including metronidazole, can cause nausea, altered taste perception, or mild stomach irritation. These effects alone can reduce appetite, even when the underlying GI condition is improving.
        </p>
        <p className="mb-6">
          In some cases, appetite loss reflects the original illness rather than the medication itself. This is why appetite trends should always be interpreted alongside other symptoms discussed in{' '}
          <Link
            href={`/${locale}/blog/metronidazole-for-dogs`}
            className="underline"
          >
            Metronidazole for Dogs: Uses, Side Effects, and When to Be Concerned
          </Link>.
        </p>

        {/* Section 2 */}
        <h2 className="text-2xl font-semibold mt-10 mb-3">
          How Long Appetite Changes Usually Last
        </h2>
        <p className="mb-6">
          Mild appetite suppression often resolves within a few days as the dog adjusts to medication or as inflammation improves. Short-term decreases in intake are usually acceptable if hydration is maintained and energy levels are stable.
        </p>

        {/* Section 3 */}
        <h2 className="text-2xl font-semibold mt-10 mb-3">
          General Feeding Principles During GI Treatment
        </h2>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>Prioritize digestibility over calorie density</li>
          <li>Feed small, frequent meals instead of large portions</li>
          <li>Keep foods simple and minimally seasoned</li>
          <li>Avoid frequent diet changes once a tolerated option is found</li>
        </ul>

        {/* Section 4 */}
        <h2 className="text-2xl font-semibold mt-10 mb-3">
          Safe Grocery-Store Foods That Often Help
        </h2>
        <p className="mb-4">
          Several plain foods commonly available at grocery stores are often well tolerated by dogs with reduced appetite due to GI upset.
        </p>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>Plain boiled chicken breast with no skin or seasoning</li>
          <li>Plain white rice or well-cooked white pasta</li>
          <li>Plain scrambled or hard-boiled eggs in small amounts</li>
          <li>Low-sodium bone broth without onions or garlic</li>
        </ul>

        {/* Section 5 */}
        <h2 className="text-2xl font-semibold mt-10 mb-3">
          Is Boiled Chicken and Rice a Good Option?
        </h2>
        <p className="mb-6">
          Boiled chicken and white rice remains a widely used short-term option because it is bland, low fat, and easy to digest. While not nutritionally complete long-term, it is often appropriate for a few days during recovery when appetite is reduced.
        </p>

        {/* Section 6 */}
        <h2 className="text-2xl font-semibold mt-10 mb-3">
          Foods and Ingredients to Avoid
        </h2>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>Fatty meats, bacon, sausage, or fried foods</li>
          <li>Dairy products, especially in lactose-sensitive dogs</li>
          <li>Spicy, seasoned, or heavily processed foods</li>
          <li>Foods containing onions, garlic, or artificial sweeteners</li>
        </ul>

        {/* Section 7 */}
        <h2 className="text-2xl font-semibold mt-10 mb-3">
          Fat, Carbohydrates, and Protein Considerations
        </h2>
        <p className="mb-4">
          Low-fat diets are generally preferred during GI recovery, particularly if pancreatitis or fat intolerance is a concern. Simple carbohydrates such as white rice are often easier to digest than complex or high-fiber options.
        </p>
        <p className="mb-6">
          Lean proteins are usually better tolerated than fatty cuts, but excessive protein can still exacerbate symptoms in some dogs.
        </p>

        {/* Section 8 */}
        <h2 className="text-2xl font-semibold mt-10 mb-3">
          Practical Tips to Encourage Eating
        </h2>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>Warm food slightly to enhance aroma</li>
          <li>Offer meals in a quiet, low-stress environment</li>
          <li>Hand-feed small amounts if needed</li>
          <li>Avoid pressure or force-feeding</li>
        </ul>

        {/* Section 9 */}
        <h2 className="text-2xl font-semibold mt-10 mb-3">
          When Appetite Loss Becomes a Red Flag
        </h2>
        <p className="mb-4">
          While short-term appetite reduction can be normal, prolonged refusal to eat is not.
        </p>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>No food intake for more than 24–48 hours</li>
          <li>Worsening lethargy or weakness</li>
          <li>Vomiting after eating or drinking</li>
          <li>New neurologic or behavioral changes</li>
        </ul>

        {/* Section 10 */}
        <h2 className="text-2xl font-semibold mt-10 mb-3">
          Supporting Recovery Beyond the Food Bowl
        </h2>
        <p className="mb-10">
          Nutrition is only one component of GI recovery. Adequate hydration, medication compliance, stress reduction, and follow-up care all contribute to restoring appetite and digestive health.
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
