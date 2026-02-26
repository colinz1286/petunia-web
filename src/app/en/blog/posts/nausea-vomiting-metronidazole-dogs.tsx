'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function NauseaVomitingMetronidazoleDogs() {
  const locale = useLocale();

  const title =
    'What to Do If Your Dog Has Nausea or Vomiting While on Metronidazole';
  const date = 'December 14, 2025';
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
          <li>Nausea and vomiting can occur in dogs taking metronidazole or similar GI medications.</li>
          <li>These effects may be due to stomach irritation, central nervous system signaling, or altered gut function.</li>
          <li>Mild nausea may be managed at home, but repeated vomiting is not normal.</li>
          <li>Vomiting can quickly lead to dehydration and other serious complications.</li>
        </ul>

        {/* TOC */}
        <h2 className="text-2xl font-semibold mb-3">Table of Contents</h2>
        <ul className="list-disc pl-5 space-y-1 mb-10">
          <li>Why Metronidazole Can Cause Nausea or Vomiting</li>
          <li>The Metabolic Pathway Behind Medication-Induced Nausea</li>
          <li>Is Vomiting From Metronidazole Common?</li>
          <li>What You Can Safely Do at Home</li>
          <li>Should You Continue the Medication?</li>
          <li>Dehydration Risks and Other Medical Concerns</li>
          <li>Additional Complications Beyond Dehydration</li>
          <li>When to Call Your Veterinarian</li>
          <li>Emergency Warning Signs</li>
          <li>Supporting Recovery and Preventing Recurrence</li>
        </ul>

        {/* Section 1 */}
        <h2 className="text-2xl font-semibold mt-10 mb-3">
          Why Metronidazole Can Cause Nausea or Vomiting
        </h2>
        <p className="mb-4">
          Metronidazole is effective for treating certain gastrointestinal conditions, but it can also cause nausea or vomiting in some dogs. These effects may occur even when the medication is used correctly and at appropriate doses.
        </p>
        <p className="mb-6">
          Nausea may result from direct irritation of the stomach lining, changes in gut motility, or effects on the central nervous system that influence the vomiting center in the brain. These risks are discussed more broadly in{' '}
          <Link
            href={`/${locale}/blog/metronidazole-for-dogs`}
            className="underline"
          >
            Metronidazole for Dogs: Uses, Side Effects, and When to Be Concerned
          </Link>.
        </p>

        {/* Section 2 */}
        <h2 className="text-2xl font-semibold mt-10 mb-3">
          The Metabolic Pathway Behind Medication-Induced Nausea
        </h2>
        <p className="mb-4">
          After oral administration, metronidazole is absorbed through the gastrointestinal tract and metabolized primarily by the liver. During this process, the drug and its metabolites circulate systemically and cross the blood-brain barrier.
        </p>
        <p className="mb-6">
          Interaction with neurotransmitter pathways involved in nausea and vomiting can stimulate the chemoreceptor trigger zone, leading to nausea. Dogs may also experience altered taste perception, further suppressing appetite and increasing the likelihood of vomiting.
        </p>

        {/* Section 3 */}
        <h2 className="text-2xl font-semibold mt-10 mb-3">
          Is Vomiting From Metronidazole Common?
        </h2>
        <p className="mb-6">
          Mild nausea is relatively common, especially early in treatment. Repeated or forceful vomiting is less common and may indicate intolerance, incorrect dosing, or an underlying condition that is worsening rather than improving.
        </p>

        {/* Section 4 */}
        <h2 className="text-2xl font-semibold mt-10 mb-3">
          What You Can Safely Do at Home
        </h2>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>Give medication with a small meal if approved by your veterinarian</li>
          <li>Offer bland, low-fat foods in small portions</li>
          <li>Ensure constant access to fresh water</li>
          <li>Reduce stress and limit activity during recovery</li>
        </ul>
        <p className="mb-6">
          Do not give over-the-counter anti-nausea medications without veterinary approval, as many human drugs are unsafe for dogs.
        </p>

        {/* Section 5 */}
        <h2 className="text-2xl font-semibold mt-10 mb-3">
          Should You Continue the Medication?
        </h2>
        <p className="mb-6">
          Do not discontinue metronidazole without veterinary guidance unless instructed to do so. Stopping antibiotics prematurely may worsen infection or delay recovery. However, persistent vomiting always warrants professional advice.
        </p>

        {/* Section 6 */}
        <h2 className="text-2xl font-semibold mt-10 mb-3">
          Dehydration Risks and Other Medical Concerns
        </h2>
        <p className="mb-4">
          Vomiting can rapidly lead to dehydration, especially in small dogs, puppies, and seniors. Dehydration impairs circulation, kidney function, and overall recovery.
        </p>
        <p className="mb-6">
          Signs of dehydration include dry gums, lethargy, sunken eyes, and reduced skin elasticity.
        </p>

        {/* Section 7 */}
        <h2 className="text-2xl font-semibold mt-10 mb-3">
          Additional Complications Beyond Dehydration
        </h2>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>Electrolyte imbalances</li>
          <li>Worsening gastrointestinal inflammation</li>
          <li>Medication malabsorption</li>
          <li>Increased risk of aspiration if vomiting continues</li>
        </ul>

        {/* Section 8 */}
        <h2 className="text-2xl font-semibold mt-10 mb-3">
          When to Call Your Veterinarian
        </h2>
        <p className="mb-4">
          Contact your veterinarian if vomiting occurs more than once, if your dog refuses food for more than 24 hours, or if nausea worsens rather than improves.
        </p>

        {/* Section 9 */}
        <h2 className="text-2xl font-semibold mt-10 mb-3">
          Emergency Warning Signs
        </h2>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>Repeated vomiting over several hours</li>
          <li>Inability to keep water down</li>
          <li>Blood in vomit</li>
          <li>Severe lethargy or collapse</li>
          <li>Neurologic signs such as tremors or disorientation</li>
        </ul>
        <p className="mb-6">
          These symptoms require immediate veterinary evaluation and should not be managed at home.
        </p>

        {/* Section 10 */}
        <h2 className="text-2xl font-semibold mt-10 mb-3">
          Supporting Recovery and Preventing Recurrence
        </h2>
        <p className="mb-10">
          Successful recovery involves more than stopping vomiting. Proper hydration, nutritional support, medication monitoring, and follow-up care all play a role in restoring gastrointestinal stability and preventing future episodes.
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
