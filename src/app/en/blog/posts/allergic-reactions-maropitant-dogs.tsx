'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function AllergicReactionsMaropitantDogs() {
  const locale = useLocale();

  const title =
    'Allergic Reactions to Maropitant (Cerenia®) in Dogs: Facial Swelling, Hives, and What to Do';
  const date = 'December 21, 2025';
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
          <li>Allergic reactions to maropitant (Cerenia®) are uncommon but possible.</li>
          <li>Facial swelling, hives, itching, and sudden skin changes are the most typical signs.</li>
          <li>Breathing difficulty, collapse, or rapid swelling are medical emergencies.</li>
          <li>Do not give over-the-counter medications unless your veterinarian specifically instructs you to do so.</li>
        </ul>

        {/* TOC */}
        <h2 className="text-2xl font-semibold mb-3">Table of Contents</h2>
        <ul className="list-disc pl-5 space-y-1 mb-10">
          <li>Can Dogs Be Allergic to Maropitant?</li>
          <li>Why Allergic Reactions Occur</li>
          <li>Physical Signs and Symptoms to Watch For</li>
          <li>How Quickly Do These Reactions Appear?</li>
          <li>Is This an Emergency?</li>
          <li>Should You Give Over-the-Counter Medications?</li>
          <li>Immediate Steps to Take at Home</li>
          <li>Emergency Veterinary Treatment</li>
          <li>Which Dogs May Be at Higher Risk</li>
          <li>Alternative Treatments if Maropitant Is Discontinued</li>
        </ul>

        {/* Section 1 */}
        <h2 className="text-2xl font-semibold mt-10 mb-3">
          Can Dogs Be Allergic to Maropitant?
        </h2>
        <p className="mb-4">
          Yes. Although maropitant (commonly known by the brand name Cerenia®) is widely used and generally well tolerated, allergic reactions can occur in a small number of dogs. Any medication has the potential to trigger an immune-mediated hypersensitivity response.
        </p>
        <p className="mb-6">
          These reactions are not related to dosage or effectiveness. Instead, they reflect how an individual dog&rsquo;s immune system reacts to the drug or one of its components.
        </p>

        {/* Section 2 */}
        <h2 className="text-2xl font-semibold mt-10 mb-3">
          Why Allergic Reactions Occur
        </h2>
        <p className="mb-4">
          Allergic reactions occur when the immune system mistakenly identifies a substance as harmful. In response, immune cells release mediators such as histamine, which cause inflammation, swelling, redness, and itching.
        </p>
        <p className="mb-6">
          With maropitant, this immune response can involve the skin, face, gastrointestinal tract, or—most concerning—the airway. This is a different mechanism from the neurologic or metabolic side effects discussed in{' '}
          <Link
            href={`/${locale}/blog/maropitant-for-dogs`}
            className="underline"
          >
            Maropitant for Dogs: Uses, Side Effects, and When It Should Be Avoided
          </Link>.
        </p>

        {/* Section 3 */}
        <h2 className="text-2xl font-semibold mt-10 mb-3">
          Physical Signs and Symptoms to Watch For
        </h2>
        <p className="mb-4">
          Allergic reactions can look dramatic or subtle depending on severity. Owners should watch for sudden changes that were not present before dosing.
        </p>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>
            <strong>Facial swelling:</strong> puffiness around the eyes, lips, muzzle, or ears
          </li>
          <li>
            <strong>Hives:</strong> raised, firm welts on the skin, often most noticeable on the face, neck, or torso
          </li>
          <li>
            <strong>Intense itching:</strong> scratching, rubbing the face on furniture, pawing at the muzzle
          </li>
          <li>
            <strong>Redness or warmth of the skin</strong>
          </li>
          <li>
            <strong>Swollen eyelids or ears</strong>
          </li>
        </ul>
        <p className="mb-6">
          Some dogs may also show gastrointestinal signs such as vomiting or drooling, which can overlap with other maropitant-related adverse effects.
        </p>

        {/* Section 4 */}
        <h2 className="text-2xl font-semibold mt-10 mb-3">
          How Quickly Do These Reactions Appear?
        </h2>
        <p className="mb-6">
          Allergic reactions often appear within minutes to a few hours of dosing, but delayed reactions can occur. Reactions may be more pronounced after repeat exposure, even if the first dose caused no visible issue.
        </p>

        {/* Section 5 */}
        <h2 className="text-2xl font-semibold mt-10 mb-3">
          Is This an Emergency?
        </h2>
        <p className="mb-4">
          Some allergic reactions are mild, but others can escalate quickly.
        </p>
        <p className="mb-4">
          <strong>Seek emergency veterinary care immediately</strong> if you observe:
        </p>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>rapidly worsening facial swelling</li>
          <li>swelling of the throat or tongue</li>
          <li>difficulty breathing or noisy breathing</li>
          <li>collapse, weakness, or pale gums</li>
          <li>vomiting combined with swelling or hives</li>
        </ul>
        <p className="mb-6">
          These signs may indicate anaphylaxis, which is life-threatening and requires immediate treatment.
        </p>

        {/* Section 6 */}
        <h2 className="text-2xl font-semibold mt-10 mb-3">
          Should You Give Over-the-Counter Medications?
        </h2>
        <p className="mb-4">
          This is a common question, and the safest answer is: <strong>do not give over-the-counter medications unless your veterinarian explicitly instructs you to do so</strong>.
        </p>
        <p className="mb-6">
          While antihistamines are sometimes used in dogs, dosing, timing, and appropriateness depend on the individual dog and the severity of the reaction. Giving the wrong drug or dose can delay proper treatment or worsen sedation, especially if the dog is already compromised.
        </p>

        {/* Section 7 */}
        <h2 className="text-2xl font-semibold mt-10 mb-3">
          Immediate Steps to Take at Home
        </h2>
        <p className="mb-4">
          If you suspect an allergic reaction:
        </p>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>stop giving maropitant immediately</li>
          <li>prevent your dog from scratching or rubbing excessively</li>
          <li>monitor breathing, gum color, and responsiveness</li>
          <li>contact your veterinarian or emergency clinic right away</li>
        </ul>
        <p className="mb-6">
          If symptoms are progressing, do not wait for them to &ldquo;settle down.&rdquo;
        </p>

        {/* Section 8 */}
        <h2 className="text-2xl font-semibold mt-10 mb-3">
          Emergency Veterinary Treatment
        </h2>
        <p className="mb-4">
          Treatment depends on severity but often includes:
        </p>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>injectable antihistamines or corticosteroids</li>
          <li>oxygen therapy if breathing is affected</li>
          <li>IV fluids to support circulation</li>
          <li>close monitoring for progression or recurrence</li>
        </ul>

        {/* Section 9 */}
        <h2 className="text-2xl font-semibold mt-10 mb-3">
          Which Dogs May Be at Higher Risk
        </h2>
        <p className="mb-4">
          Allergic reactions are unpredictable, but certain dogs may have increased susceptibility.
        </p>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>dogs with a history of medication allergies</li>
          <li>dogs with multiple environmental or food allergies</li>
          <li>dogs with immune-mediated conditions</li>
          <li>dogs receiving many medications simultaneously</li>
        </ul>

        {/* Section 10 */}
        <h2 className="text-2xl font-semibold mt-10 mb-3">
          Alternative Treatments if Maropitant Is Discontinued
        </h2>
        <p className="mb-4">
          If maropitant is discontinued due to an allergic reaction, veterinarians may choose alternatives depending on the cause of nausea or vomiting.
        </p>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>ondansetron for nausea via a different receptor pathway</li>
          <li>metoclopramide in select cases</li>
          <li>acid suppression and GI protectants</li>
          <li>hospital-based supportive care if vomiting is severe</li>
        </ul>
        <p className="mb-6">
          If vomiting persists or worsens, review emergency considerations in{' '}
          <Link
            href={`/${locale}/blog/persistent-vomiting-despite-maropitant-dogs`}
            className="underline"
          >
            Why Dogs Can Continue Vomiting Despite Maropitant
          </Link>.
        </p>

        {/* References */}
        <h2 className="text-2xl font-semibold mt-10 mb-3">References</h2>
        <ul className="list-disc pl-5 space-y-2 mb-10">
          <li>FDA Center for Veterinary Medicine – Cerenia® (maropitant) safety information</li>
          <li>Merck Veterinary Manual – Drug hypersensitivity reactions in dogs</li>
          <li>VCA Hospitals – Maropitant citrate adverse effects and client education</li>
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
