'use client';

import Head from 'next/head';
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
      <Head>
        <title>{title} – Petunia Blog</title>
        <meta
          name="description"
          content="Dogs with gastrointestinal distress are often treated with medications tailored to vomiting, diarrhea, nausea, acid reflux, inflammation, or infection. Learn which GI medications veterinarians prescribe, how they work, and how long they are typically used."
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
