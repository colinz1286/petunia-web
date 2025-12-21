'use client';

import Head from 'next/head';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function MaropitantForDogs() {
  const locale = useLocale();

  const title =
    'Maropitant for Dogs: Uses, Side Effects, and When It Should Be Avoided';
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
          content="Maropitant, commonly known as Cerenia®, is a prescription medication used to control nausea and vomiting in dogs. Learn how it works, when it is prescribed, potential side effects, and when it should be used cautiously."
        />
        <meta name="robots" content="all" />
        <link
          rel="canonical"
          href={`https://www.petuniapets.com/${locale}/blog/maropitant-for-dogs`}
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
          <li>Maropitant is a prescription anti-nausea and anti-vomiting medication for dogs.</li>
          <li>It is most commonly known by the brand name Cerenia®.</li>
          <li>The drug works by blocking a key nausea and vomiting pathway in the brain.</li>
          <li>While generally safe, it is not appropriate for every dog or every cause of vomiting.</li>
        </ul>

        {/* TOC */}
        <h2 className="text-2xl font-semibold mb-3">Table of Contents</h2>
        <ul className="list-disc pl-5 space-y-1 mb-10">
          <li>What Maropitant Is and Its Common Names</li>
          <li>Available Formulations and How It Is Given</li>
          <li>How Maropitant Works in the Body</li>
          <li>Situations Where Maropitant Is Commonly Prescribed</li>
          <li>When Maropitant May Be Avoided or Used Cautiously</li>
          <li>Potential Side Effects in Dogs</li>
          <li>Warning Signs That Require Veterinary Attention</li>
          <li>Maropitant Versus Other GI Medications</li>
          <li>How Long Maropitant Is Typically Used</li>
          <li>Key Takeaways for Dog Owners</li>
        </ul>

        {/* Section 1 */}
        <h2 className="text-2xl font-semibold mt-10 mb-3">
          What Maropitant Is and Its Common Names
        </h2>
        <p className="mb-4">
          Maropitant citrate is a prescription medication used in veterinary medicine to prevent and treat nausea and vomiting in dogs. Most pet owners recognize it by its brand name, Cerenia®.
        </p>
        <p className="mb-6">
          While the generic name maropitant refers to the active ingredient, Cerenia® is the FDA-approved veterinary product most commonly prescribed. Both names describe the same medication and mechanism of action.
        </p>

        {/* Section 2 */}
        <h2 className="text-2xl font-semibold mt-10 mb-3">
          Available Formulations and How It Is Given
        </h2>
        <p className="mb-4">
          Maropitant is available in two primary formulations, which allows veterinarians to tailor treatment to the dog&rsquo;s condition.
        </p>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>Oral tablets, typically given once daily</li>
          <li>Injectable formulation administered by a veterinarian</li>
        </ul>
        <p className="mb-6">
          The injectable form is often used in hospital settings for dogs with active vomiting, while tablets are commonly prescribed for home use once vomiting is controlled.
        </p>

        {/* Section 3 */}
        <h2 className="text-2xl font-semibold mt-10 mb-3">
          How Maropitant Works in the Body
        </h2>
        <p className="mb-4">
          Maropitant works by blocking neurokinin-1 (NK1) receptors in the brain. These receptors bind substance P, a neurotransmitter that plays a central role in triggering nausea and vomiting.
        </p>
        <p className="mb-6">
          By interrupting this pathway, maropitant suppresses the vomiting reflex regardless of the underlying trigger. This makes it effective for a wide range of causes, including GI disease, medication side effects, and motion sickness.
        </p>

        {/* Section 4 */}
        <h2 className="text-2xl font-semibold mt-10 mb-3">
          Situations Where Maropitant Is Commonly Prescribed
        </h2>
        <p className="mb-4">
          Veterinarians prescribe maropitant in a variety of clinical scenarios.
        </p>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>Acute vomiting from gastrointestinal upset</li>
          <li>Nausea associated with pancreatitis or systemic illness</li>
          <li>Medication-induced nausea, including from antibiotics</li>
          <li>Motion sickness prevention</li>
          <li>Post-operative nausea management</li>
        </ul>
        <p className="mb-6">
          Maropitant is discussed as part of broader GI treatment strategies in{' '}
          <Link
            href={`/${locale}/blog/gi-medications-for-dogs`}
            className="underline"
          >
            Common GI Medications for Dogs
          </Link>.
        </p>

        {/* Section 5 */}
        <h2 className="text-2xl font-semibold mt-10 mb-3">
          When Maropitant May Be Avoided or Used Cautiously
        </h2>
        <p className="mb-4">
          Although maropitant is widely used, it is not appropriate in every situation.
        </p>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>Puppies under a certain age or weight threshold</li>
          <li>Dogs with suspected gastrointestinal obstruction</li>
          <li>Cases where vomiting is protective and diagnostic clarity is needed</li>
          <li>Dogs with known hypersensitivity to the drug</li>
        </ul>
        <p className="mb-6">
          In these situations, suppressing vomiting may delay diagnosis or mask worsening disease, which is why veterinary oversight is critical.
        </p>

        {/* Section 6 */}
        <h2 className="text-2xl font-semibold mt-10 mb-3">
          Potential Side Effects in Dogs
        </h2>
        <p className="mb-4">
          Most dogs tolerate maropitant well, but side effects can occur.
        </p>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>Lethargy or decreased activity</li>
          <li>Reduced appetite</li>
          <li>Drooling or lip licking</li>
          <li>Injection site discomfort with injectable use</li>
        </ul>
        <p className="mb-6">
          These effects are usually mild and temporary, resolving once the medication is discontinued.
        </p>

        {/* Section 7 */}
        <h2 className="text-2xl font-semibold mt-10 mb-3">
          Warning Signs That Require Veterinary Attention
        </h2>
        <p className="mb-4">
          Although uncommon, more serious reactions require prompt evaluation.
        </p>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>Persistent vomiting despite treatment</li>
          <li>Severe lethargy or collapse</li>
          <li>Behavioral changes or disorientation</li>
          <li>Signs of allergic reaction such as facial swelling or hives</li>
        </ul>
        <p className="mb-6">
          If these occur, contact your veterinarian immediately.
        </p>

        {/* Section 8 */}
        <h2 className="text-2xl font-semibold mt-10 mb-3">
          Maropitant Versus Other GI Medications
        </h2>
        <p className="mb-6">
          Maropitant specifically targets nausea and vomiting pathways. It does not treat inflammation, infection, or the underlying cause of GI disease. For this reason, it is often used alongside other therapies rather than as a standalone solution.
        </p>

        {/* Section 9 */}
        <h2 className="text-2xl font-semibold mt-10 mb-3">
          How Long Maropitant Is Typically Used
        </h2>
        <p className="mb-4">
          Treatment duration depends on the clinical scenario.
        </p>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>Acute GI upset: 1–5 days</li>
          <li>Motion sickness prevention: given prior to travel</li>
          <li>Chronic disease flares: short courses as needed</li>
        </ul>
        <p className="mb-6">
          Long-term continuous use is uncommon and typically avoided unless clearly indicated.
        </p>

        {/* Section 10 */}
        <h2 className="text-2xl font-semibold mt-10 mb-3">
          Key Takeaways for Dog Owners
        </h2>
        <p className="mb-10">
          Maropitant is a powerful and effective tool for managing nausea and vomiting in dogs when used appropriately. Understanding when it helps, when it should be avoided, and what side effects to watch for allows owners to partner effectively with their veterinarian and support safe recovery.
        </p>

        {/* References */}
        <h2 className="text-2xl font-semibold mt-10 mb-3">References</h2>
        <ul className="list-disc pl-5 space-y-2 mb-10">
          <li>Merck Veterinary Manual – Maropitant and antiemetic therapy</li>
          <li>American Veterinary Medical Association – Vomiting and nausea management</li>
          <li>FDA Center for Veterinary Medicine – Cerenia® (maropitant) labeling information</li>
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
