'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function CommonGIProblemsInDogs() {
  const locale = useLocale();

  const title =
    'Common Gastrointestinal (GI) Problems in Dogs: Symptoms, Causes, and When to Worry';
  const date = 'December 10, 2025';
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
          <li>GI distress in dogs commonly presents as vomiting, diarrhea, gas, appetite changes, or abnormal stools.</li>
          <li>Many cases are mild and self-limiting, but some indicate serious or life-threatening disease.</li>
          <li>Recurring or severe symptoms should always be evaluated by a veterinarian.</li>
          <li>Diet, stress, and environment all play a major role in digestive health.</li>
        </ul>

        {/* TOC */}
        <h2 className="text-2xl font-semibold mb-3">Table of Contents</h2>
        <ul className="list-disc pl-5 space-y-1 mb-10">
          <li>What Counts as GI Distress in Dogs</li>
          <li>How the Canine Digestive System Works</li>
          <li>Acute vs Chronic GI Symptoms</li>
          <li>Most Common Causes of GI Problems</li>
          <li>Red-Flag Symptoms That Require Urgent Care</li>
          <li>How Veterinarians Evaluate GI Issues</li>
          <li>Home Care vs Professional Treatment</li>
          <li>The Role of Diet, Stress, and Environment</li>
          <li>Preventing GI Flare-Ups</li>
          <li>When Recurring Symptoms Signal a Bigger Problem</li>
        </ul>

        {/* Section 1 */}
        <h2 className="text-2xl font-semibold mt-10 mb-3">
          What Counts as Gastrointestinal Distress in Dogs
        </h2>
        <p className="mb-4">
          Gastrointestinal distress refers to any disruption of the digestive system that affects how food is processed, absorbed, or eliminated. In dogs, GI symptoms are among the most common reasons for veterinary visits.
        </p>
        <p className="mb-6">
          Common signs include vomiting, diarrhea, excessive gas, abdominal discomfort, changes in appetite, abnormal stool consistency, mucus or blood in stool, and unexplained weight loss. Some dogs may show subtle signs such as restlessness, lethargy, or reluctance to eat.
        </p>

        {/* Section 2 */}
        <h2 className="text-2xl font-semibold mt-10 mb-3">
          How the Canine Digestive System Works
        </h2>
        <p className="mb-4">
          A dog&rsquo;s digestive system is designed to process food efficiently but is sensitive to sudden changes. Digestion begins in the mouth, continues through the stomach where acids break down food, and then moves into the intestines where nutrients are absorbed.
        </p>
        <p className="mb-6">
          The gut also houses trillions of bacteria that play a critical role in digestion and immune function. When this balance is disrupted, gastrointestinal symptoms often follow.
        </p>

        {/* Section 3 */}
        <h2 className="text-2xl font-semibold mt-10 mb-3">
          Acute vs Chronic GI Symptoms
        </h2>
        <p className="mb-4">
          Acute GI symptoms appear suddenly and often resolve within a few days. These may be caused by dietary indiscretion, mild infections, or stress.
        </p>
        <p className="mb-6">
          Chronic GI issues persist for weeks or recur frequently. These cases are more concerning and may indicate food intolerance, inflammatory conditions, chronic infections, or systemic disease.
        </p>

        {/* Section 4 */}
        <h2 className="text-2xl font-semibold mt-10 mb-3">
          The Most Common Causes of GI Problems in Dogs
        </h2>
        <p className="mb-4">
          The majority of GI issues fall into a few high-probability categories. These include dietary indiscretion, sudden food changes, stress-related colitis, intestinal parasites, and poor-quality diets.
        </p>
        <p className="mb-6">
          More serious but less common causes include pancreatitis, intestinal blockages, chronic inflammatory disease, and organ dysfunction. Each of these topics is explored in depth throughout this GI article cluster.
        </p>

        {/* Internal Links */}
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>
            Learn how scavenging and foreign object ingestion affect digestion in{' '}
            <Link
              href={`/${locale}/blog/dietary-indiscretion-in-dogs`}
              className="underline"
            >
              Dietary Indiscretion in Dogs
            </Link>.
          </li>
          <li>
            Understand why abrupt food changes cause digestive upset in{' '}
            <Link
              href={`/${locale}/blog/sudden-diet-changes-gi-upset-dogs`}
              className="underline"
            >
              Sudden Diet Changes and GI Upset
            </Link>.
          </li>
          <li>
            Explore the gut-brain connection in{' '}
            <Link
              href={`/${locale}/blog/stress-colitis-in-dogs`}
              className="underline"
            >
              Stress-Induced Colitis in Dogs
            </Link>.
          </li>
        </ul>

        {/* Section 5 */}
        <h2 className="text-2xl font-semibold mt-10 mb-3">
          Red-Flag Symptoms That Require Urgent Veterinary Care
        </h2>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>Persistent vomiting or diarrhea lasting more than 24–48 hours</li>
          <li>Blood in vomit or stool</li>
          <li>Severe lethargy or collapse</li>
          <li>Abdominal pain or bloating</li>
          <li>Vomiting without passing stool</li>
          <li>Rapid dehydration, especially in puppies or seniors</li>
        </ul>

        {/* Section 6 */}
        <h2 className="text-2xl font-semibold mt-10 mb-3">
          What Veterinarians Look for During GI Workups
        </h2>
        <p className="mb-6">
          Veterinarians assess GI cases by evaluating symptom duration, diet history, recent stressors, medications, and exposure risks. Diagnostics may include fecal testing, blood work, imaging, or dietary trials depending on severity and chronicity.
        </p>

        {/* Section 7 */}
        <h2 className="text-2xl font-semibold mt-10 mb-3">
          Home Care vs Professional Treatment
        </h2>
        <p className="mb-6">
          Mild GI upset may be managed with short-term dietary modification under veterinary guidance. However, repeated home treatment without diagnosis can delay care and worsen outcomes when serious disease is present.
        </p>

        {/* Section 8 */}
        <h2 className="text-2xl font-semibold mt-10 mb-3">
          How Diet, Stress, and Environment Interact
        </h2>
        <p className="mb-6">
          Digestive health is influenced by more than food alone. Stress, routine changes, boarding, travel, and environmental exposure can all disrupt gut function, even in otherwise healthy dogs.
        </p>

        {/* Section 9 */}
        <h2 className="text-2xl font-semibold mt-10 mb-3">
          Preventative Strategies for Reducing GI Flare-Ups
        </h2>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>Maintain consistent, high-quality diets</li>
          <li>Transition foods slowly</li>
          <li>Use parasite prevention year-round</li>
          <li>Limit access to trash and foreign objects</li>
          <li>Manage stress during routine changes</li>
        </ul>

        {/* Section 10 */}
        <h2 className="text-2xl font-semibold mt-10 mb-3">
          When Recurring GI Issues Indicate an Underlying Condition
        </h2>
        <p className="mb-10">
          Dogs with frequent GI symptoms should not be dismissed as having a &ldquo;sensitive stomach.&rdquo; Recurrent digestive distress often signals a treatable medical condition that requires proper diagnosis and long-term management.
        </p>

        {/* References */}
        <h2 className="text-2xl font-semibold mt-10 mb-3">References</h2>
        <ul className="list-disc pl-5 space-y-2 mb-10">
          <li>American College of Veterinary Internal Medicine (ACVIM)</li>
          <li>Merck Veterinary Manual</li>
          <li>American Veterinary Medical Association (AVMA)</li>
        </ul>

        {/* Back to Blog */}
        <Link
          href={`/${locale}/blog`}
          className="underline text-[#2c4a30] font-medium hover:opacity-80"
        >
          ← Back to Blog
        </Link>

        {/* Disclaimer */}
        <p className="text-xs text-gray-500 mt-8">
          This article is for educational purposes only and does not replace professional veterinary care.
        </p>
      </main>
    </>
  );
}
