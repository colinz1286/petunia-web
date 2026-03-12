'use client';

// SEO weakness notes: page is still new; crowded query with low perceived distinctiveness; likely limited backlinks
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function GIMedicationsForDogs() {
  const locale = useLocale();

  const title =
    'Common GI Medications for Dogs: What Veterinarians Prescribe and Why';
  const date = 'December 11, 2025';
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
          <li>GI medications for dogs are prescribed based on symptoms and the underlying cause.</li>
          <li>Vomiting, diarrhea, nausea, acid reflux, and inflammation are treated with different drug classes.</li>
          <li>Many medications are short-term, but chronic conditions may require long-term management.</li>
          <li>Never give human GI medications to dogs without veterinary guidance.</li>
        </ul>

        {/* TOC */}
        <h2 className="text-2xl font-semibold mb-3">Table of Contents</h2>
        <ul className="list-disc pl-5 space-y-1 mb-10">
          <li>Why GI Medications Are Prescribed</li>
          <li>Medications for Vomiting and Nausea</li>
          <li>Medications for Diarrhea</li>
          <li>Acid Reducers and Stomach Protectants</li>
          <li>Anti-Inflammatory and Immunomodulating Drugs</li>
          <li>Antibiotics and Antiparasitic Treatments</li>
          <li>Probiotics and Microbiome Support</li>
          <li>How Long GI Medications Are Typically Used</li>
          <li>Medication Risks and Monitoring</li>
          <li>When Medications Are Part of a Larger Plan</li>
        </ul>

        {/* Section 1 */}
        <h2 className="text-2xl font-semibold mt-10 mb-3">
          Why Gastrointestinal Medications Are Prescribed
        </h2>
        <p className="mb-4">
          Gastrointestinal medications are prescribed to relieve symptoms, protect the digestive tract, and address the underlying cause of digestive disease. Because GI distress in dogs can range from mild and self-limiting to severe and life-threatening, treatment plans vary widely.
        </p>
        <p className="mb-6">
          Veterinarians determine medication choices based on symptom severity, duration, diagnostic findings, and the dog&rsquo;s overall health. This article builds on the foundational discussion of GI disease outlined in{' '}
          <Link
            href={`/${locale}/blog/common-gi-problems-in-dogs`}
            className="underline"
          >
            Common GI Problems in Dogs
          </Link>.
        </p>

        {/* Section 2 */}
        <h2 className="text-2xl font-semibold mt-10 mb-3">
          Medications for Vomiting and Nausea
        </h2>
        <p className="mb-4">
          Vomiting is one of the most common GI symptoms prompting veterinary care. Anti-nausea and antiemetic medications help control vomiting, reduce discomfort, and prevent dehydration.
        </p>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>Maropitant is commonly prescribed to block nausea and vomiting signals.</li>
          <li>Metoclopramide may be used to improve gastric emptying in select cases.</li>
          <li>Ondansetron is sometimes prescribed for severe or refractory nausea.</li>
        </ul>
        <p className="mb-6">
          These medications are often prescribed for short courses ranging from one to five days, depending on response and underlying cause.
        </p>

        {/* Section 3 */}
        <h2 className="text-2xl font-semibold mt-10 mb-3">
          Medications for Diarrhea
        </h2>
        <p className="mb-4">
          Diarrhea can result from dietary indiscretion, infection, stress, or inflammation. Treatment focuses on protecting the intestinal lining and restoring normal motility.
        </p>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>Kaolin-pectin formulations help soothe the intestinal tract.</li>
          <li>Fiber supplements may regulate stool consistency.</li>
          <li>Bismuth-based medications are used selectively under veterinary guidance.</li>
        </ul>

        {/* Section 4 */}
        <h2 className="text-2xl font-semibold mt-10 mb-3">
          Acid Reducers and Stomach Protectants
        </h2>
        <p className="mb-4">
          Acid suppression is frequently used for dogs with gastritis, reflux, or ulcer risk.
        </p>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>Famotidine reduces stomach acid production.</li>
          <li>Omeprazole provides stronger acid suppression for chronic conditions.</li>
          <li>Sucralfate coats and protects irritated GI lining.</li>
        </ul>

        {/* Section 5 */}
        <h2 className="text-2xl font-semibold mt-10 mb-3">
          Anti-Inflammatory and Immunomodulating Medications
        </h2>
        <p className="mb-6">
          Chronic GI disease may involve immune-mediated inflammation. In these cases, medications that reduce inflammation or suppress immune activity may be prescribed for weeks to months under careful supervision.
        </p>

        {/* Section 6 */}
        <h2 className="text-2xl font-semibold mt-10 mb-3">
          Antibiotics and Antiparasitic Treatments
        </h2>
        <p className="mb-4">
          Antibiotics are reserved for confirmed or strongly suspected infections. Antiparasitic medications target organisms identified through fecal testing.
        </p>

        {/* Section 7 */}
        <h2 className="text-2xl font-semibold mt-10 mb-3">
          Probiotics and Microbiome Support
        </h2>
        <p className="mb-6">
          Probiotics are commonly used alongside other treatments to restore gut microbial balance. They may be used short-term during recovery or long-term in dogs with chronic sensitivity.
        </p>

        {/* Section 8 */}
        <h2 className="text-2xl font-semibold mt-10 mb-3">
          How Long GI Medications Are Typically Used
        </h2>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>Acute GI upset: 3–7 days</li>
          <li>Infectious disease: 7–21 days</li>
          <li>Chronic inflammatory disease: weeks to months</li>
        </ul>

        {/* Section 9 */}
        <h2 className="text-2xl font-semibold mt-10 mb-3">
          Medication Risks and Monitoring
        </h2>
        <p className="mb-6">
          All medications carry potential risks. Long-term therapy requires monitoring through exams and laboratory testing to ensure safety and effectiveness.
        </p>

        {/* Section 10 */}
        <h2 className="text-2xl font-semibold mt-10 mb-3">
          When Medications Are Part of a Larger Treatment Plan
        </h2>
        <p className="mb-10">
          Medications alone rarely resolve chronic GI disease. Long-term success often depends on dietary management, environmental stability, and regular veterinary follow-up.
        </p>

        {/* References */}
        <h2 className="text-2xl font-semibold mt-10 mb-3">References</h2>
        <ul className="list-disc pl-5 space-y-2 mb-10">
          <li>Merck Veterinary Manual</li>
          <li>American College of Veterinary Internal Medicine</li>
          <li>American Veterinary Medical Association</li>
        </ul>


        {/* Expanded depth content start */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Home monitoring that makes the next veterinary conversation better</h2>
          <p className="mb-4">Condition-based articles are most useful when they help owners collect better evidence. Instead of relying on memory alone, track appetite, water intake, stool, sleep, exercise tolerance, visible discomfort, and what changed first. That turns a vague story into a usable clinical timeline and makes it easier to decide whether the pattern looks mild, progressive, recurrent, or urgent.</p>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li><strong>Use the same measures each day:</strong> when symptoms start, how long they last, and what preceded them.</li>
            <li><strong>Record context:</strong> food changes, stress, heat, exercise, grooming, medications, and environment can all matter.</li>
            <li><strong>Take photos or short videos when safe:</strong> visible swelling, gait change, discharge, breathing effort, or episodes are easier to evaluate with proof.</li>
            <li><strong>Compare with baseline:</strong> the key question is not just what looks abnormal, but how far the dog has moved from normal function.</li>
          </ul>
          <p className="mb-0">That level of tracking usually improves both diagnosis and the quality of the advice you get back.</p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">When supportive care stops being enough</h2>
          <ul className="list-disc pl-5 space-y-2 mb-0">
            <li>Escalate faster when symptoms recur, intensify, or start interfering with eating, hydration, mobility, breathing, or normal sleep.</li>
            <li>Move to same-day care when pain, collapse, bleeding, significant weakness, or neurologic change enters the picture.</li>
            <li>Ask for a clearer workup plan if you keep getting temporary symptom control without a convincing explanation for the pattern.</li>
            <li>Do not let a condition stay in the watch-and-wait category indefinitely if the baseline is drifting in the wrong direction.</li>
          </ul>
        </section>
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Related Reading Inside Petunia</h2>
          <ul className="list-disc pl-5 space-y-2 mb-0">
            <li><a href="https://www.petuniapets.com/en/blog/common-gi-problems-in-dogs" className="underline hover:opacity-80">Common Gastrointestinal (GI) Problems in Dogs: Symptoms, Causes, and When to Worry</a></li>
            <li><a href="https://www.petuniapets.com/en/blog/help-dog-eat-while-on-metronidazole" className="underline hover:opacity-80">How to Help a Dog Eat While on Metronidazole or Other GI Medications</a></li>
            <li><a href="https://www.petuniapets.com/en/blog/airline-pet-carrier-checkin-rejections-prevention" className="underline hover:opacity-80">Airline Pet Carrier Failures: The Most Common Check-In Rejections and How to Prevent Them</a></li>
          </ul>
        </section>
        {/* Expanded depth content end */}
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
