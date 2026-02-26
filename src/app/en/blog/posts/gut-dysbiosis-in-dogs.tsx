'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function GutDysbiosisInDogs() {
  const locale = useLocale();

  const title =
    'Gut Dysbiosis in Dogs: Microbiome Imbalance, Symptoms, and Evidence-Based Recovery';
  const date = 'December 18, 2025';
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

        {/* Intro */}
        <p className="text-lg mb-6">
          The canine digestive tract is home to trillions of microorganisms that help digest food,
          regulate immune function, and protect the gut lining. When this microbial ecosystem becomes
          imbalanced, the result is called gut dysbiosis. Dysbiosis is not a single disease, but a
          functional disruption that can worsen or prolong many gastrointestinal problems.
        </p>

        <p className="mb-6">
          This article explains what the gut microbiome does, how dysbiosis develops, why it can be
          difficult to diagnose directly, and what evidence-based strategies support recovery and
          long-term stability.
        </p>

        {/* TL;DR */}
        <h2 className="text-2xl font-semibold mt-8 mb-3">TL;DR</h2>
        <ul className="list-disc pl-5 space-y-2 mb-8">
          <li>Gut dysbiosis is an imbalance of beneficial and disruptive microbes in the intestines.</li>
          <li>It commonly follows antibiotics, stress, diet changes, or repeated GI illness.</li>
          <li>Symptoms include chronic soft stool, gas, bloating, and digestive instability.</li>
          <li>Recovery focuses on consistency, diet quality, and targeted support rather than quick fixes.</li>
        </ul>

        {/* Table of Contents */}
        <h2 className="text-2xl font-semibold mb-3">Table of Contents</h2>
        <ul className="list-disc pl-5 space-y-1 mb-10">
          <li>What the Canine Gut Microbiome Is</li>
          <li>How Dysbiosis Develops</li>
          <li>Common Causes of Microbial Imbalance</li>
          <li>Symptoms Linked to Dysbiosis</li>
          <li>Diagnostic Challenges and Limitations</li>
          <li>Probiotics, Prebiotics, and Diet</li>
          <li>Short-Term vs Chronic Dysbiosis</li>
          <li>Dysbiosis Overlapping With Other GI Disorders</li>
          <li>Evidence-Based Gut Restoration</li>
          <li>Maintaining Long-Term Microbial Health</li>
        </ul>

        {/* Section 1 */}
        <h2 className="text-2xl font-semibold mt-10 mb-3">
          What the Canine Gut Microbiome Is
        </h2>
        <p className="mb-4">
          The gut microbiome is the collective community of bacteria, fungi, and other microorganisms
          living primarily in the intestines. In healthy dogs, this community supports digestion,
          nutrient absorption, immune signaling, and barrier protection against pathogens.
        </p>
        <p className="mb-6">
          A balanced microbiome helps regulate stool consistency and reduces inflammation. When that
          balance shifts, digestive efficiency drops and the gut becomes more reactive to stress,
          diet changes, and illness.
        </p>

        {/* Section 2 */}
        <h2 className="text-2xl font-semibold mt-10 mb-3">
          How Dysbiosis Develops
        </h2>
        <p className="mb-4">
          Dysbiosis develops when factors disrupt the normal microbial environment. This can involve
          loss of beneficial bacteria, overgrowth of less helpful organisms, or both.
        </p>
        <p className="mb-6">
          The disruption may be temporary or persistent depending on the severity of the trigger and
          the dog&rsquo;s underlying resilience. Dogs with prior GI issues often have less buffer
          against disruption.
        </p>

        {/* Section 3 */}
        <h2 className="text-2xl font-semibold mt-10 mb-3">
          Common Causes of Microbial Imbalance
        </h2>
        <p className="mb-4">
          Many everyday situations can alter the gut microbiome. Some changes are necessary and
          lifesaving, such as antibiotic therapy. Others are environmental or dietary and occur
          gradually.
        </p>
        <ul className="list-disc pl-5 space-y-2 mb-8">
          <li>Antibiotics, especially repeated or broad-spectrum courses</li>
          <li>Sudden diet changes or poor-quality diets</li>
          <li>Stress, travel, boarding, or routine disruption</li>
          <li>Repeated GI infections or parasite exposure</li>
          <li>Chronic inflammation or untreated GI disease</li>
        </ul>

        {/* Section 4 */}
        <h2 className="text-2xl font-semibold mt-10 mb-3">
          Symptoms Linked to Microbial Imbalance
        </h2>
        <p className="mb-4">
          Dysbiosis does not have a single signature symptom. Instead, it creates digestive
          instability that fluctuates over time. Many dogs appear mostly normal but never quite
          achieve consistent stool quality.
        </p>
        <ul className="list-disc pl-5 space-y-2 mb-8">
          <li>Chronic soft stool or intermittent diarrhea</li>
          <li>Gas, bloating, or audible gut sounds</li>
          <li>Stool quality that worsens with stress or minor diet changes</li>
          <li>Increased stool frequency or urgency</li>
          <li>Reduced tolerance for treats or new foods</li>
        </ul>

        {/* Related reading */}
        <div className="rounded-xl bg-[#f7f4ee] border border-[#d9cfc2] p-4 mb-10">
          <p className="mb-3 font-semibold">Related reading in this GI cluster:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Start with the big-picture overview in{' '}
              <Link href={`/${locale}/blog/common-gi-problems-in-dogs`} className="underline">
                Common Gastrointestinal Problems in Dogs
              </Link>.
            </li>
            <li>
              If symptoms began after a rapid food switch, read{' '}
              <Link href={`/${locale}/blog/sudden-diet-changes-gi-upset-dogs`} className="underline">
                Sudden Diet Changes and GI Upset in Dogs
              </Link>.
            </li>
            <li>
              If digestibility and formulation may be driving symptoms, see{' '}
              <Link href={`/${locale}/blog/poor-dog-food-digestive-problems`} className="underline">
                Poor-Quality Dog Food and Digestive Problems
              </Link>.
            </li>
          </ul>
        </div>

        {/* Section 5 */}
        <h2 className="text-2xl font-semibold mt-10 mb-3">
          Diagnostic Challenges and Limitations
        </h2>
        <p className="mb-4">
          Dysbiosis is challenging to diagnose directly. While advanced stool tests can analyze
          microbial patterns, results must be interpreted carefully and in context. There is no
          single test that definitively labels a dog as having dysbiosis.
        </p>
        <p className="mb-6">
          In practice, veterinarians often diagnose dysbiosis based on history, response to therapy,
          and exclusion of other causes such as parasites, food reactions, pancreatitis, or
          obstruction.
        </p>

        {/* Section 6 */}
        <h2 className="text-2xl font-semibold mt-10 mb-3">
          Probiotics, Prebiotics, and Diet
        </h2>
        <p className="mb-4">
          Probiotics and prebiotics are commonly used to support microbiome recovery, but they are not
          interchangeable or universally helpful. The choice of product, dose, and duration matters.
        </p>
        <p className="mb-6">
          Diet is the foundation. Without a consistent, digestible diet, supplements alone rarely
          stabilize the gut long term.
        </p>
        <ul className="list-disc pl-5 space-y-2 mb-8">
          <li>
            <strong>Probiotics:</strong> may help reintroduce beneficial organisms or support function.
          </li>
          <li>
            <strong>Prebiotics:</strong> feed beneficial microbes but can worsen gas if introduced too quickly.
          </li>
          <li>
            <strong>Diet consistency:</strong> reduces repeated disruption and allows recovery.</li>
        </ul>

        {/* Section 7 */}
        <h2 className="text-2xl font-semibold mt-10 mb-3">
          Short-Term vs Chronic Dysbiosis
        </h2>
        <p className="mb-4">
          Short-term dysbiosis often follows a clear trigger such as antibiotics or acute illness and
          improves over weeks with supportive care. Chronic dysbiosis persists for months and often
          overlaps with other GI conditions.
        </p>
        <p className="mb-6">
          Dogs with chronic dysbiosis frequently show partial improvement with many interventions but
          relapse when routines change. These dogs benefit most from a structured, long-term plan.
        </p>

        {/* Section 8 */}
        <h2 className="text-2xl font-semibold mt-10 mb-3">
          Dysbiosis Overlapping With Other GI Disorders
        </h2>
        <p className="mb-4">
          Dysbiosis rarely exists in isolation. It commonly overlaps with food intolerance, stress
          colitis, chronic parasite exposure, and inflammatory conditions. In these cases, dysbiosis
          can worsen symptoms even when the primary trigger is addressed.
        </p>
        <p className="mb-6">
          Recognizing overlap helps explain why some dogs improve only partially with diet changes or
          medications and need layered management.
        </p>

        {/* Section 9 */}
        <h2 className="text-2xl font-semibold mt-10 mb-3">
          Evidence-Based Gut Restoration
        </h2>
        <p className="mb-4">
          Gut restoration focuses on removing ongoing disruptors and supporting gradual normalization
          rather than forcing rapid change. Consistency is more important than aggressive intervention.
        </p>
        <ul className="list-disc pl-5 space-y-2 mb-8">
          <li>Address underlying triggers such as poor diet or repeated indiscretion</li>
          <li>Stabilize feeding schedules and avoid unnecessary changes</li>
          <li>Use targeted probiotics when appropriate, not multiple products at once</li>
          <li>Monitor stool quality and adjust slowly</li>
          <li>Partner with a veterinarian for chronic or relapsing cases</li>
        </ul>

        {/* Section 10 */}
        <h2 className="text-2xl font-semibold mt-10 mb-3">
          Maintaining Long-Term Microbial Health
        </h2>
        <p className="mb-4">
          Long-term gut health is built through predictability. Dogs with stable routines, consistent
          diets, and controlled treat exposure tend to have more resilient microbiomes.
        </p>
        <p className="mb-10">
          While supplements can help during transitions or illness, the strongest foundation is a
          digestible diet, low stress load, and avoidance of unnecessary disruption. When those
          elements are in place, the microbiome often stabilizes on its own.
        </p>

        {/* References */}
        <h2 className="text-2xl font-semibold mt-10 mb-3">References</h2>
        <ul className="list-disc pl-5 space-y-2 mb-10">
          <li>Merck Veterinary Manual</li>
          <li>American College of Veterinary Internal Medicine (ACVIM)</li>
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
          This article is for educational purposes only and does not replace professional veterinary
          diagnosis or treatment. If your dog has persistent diarrhea, vomiting, weight loss, or signs
          of pain, consult your veterinarian.
        </p>
      </main>
    </>
  );
}
