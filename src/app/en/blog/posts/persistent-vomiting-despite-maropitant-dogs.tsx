'use client';

import Head from 'next/head';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function PersistentVomitingDespiteMaropitantDogs() {
  const locale = useLocale();

  const title =
    'Why Dogs Can Continue Vomiting Despite Maropitant (Cerenia®)';
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
      <Head>
        <title>{title} – Petunia Blog</title>
        <meta
          name="description"
          content="Maropitant (Cerenia®) is a powerful anti-vomiting medication, yet some dogs continue vomiting despite treatment. Learn why this happens, the physiologic pathways involved, emergency warning signs, and what veterinarians do next."
        />
        <meta name="robots" content="all" />
        <link
          rel="canonical"
          href={`https://www.petuniapets.com/${locale}/blog/persistent-vomiting-despite-maropitant-dogs`}
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
          <li>Maropitant blocks one major vomiting pathway, but not all causes of vomiting.</li>
          <li>Persistent vomiting usually indicates severe disease, obstruction, toxin exposure, or ongoing GI injury.</li>
          <li>Vomiting despite treatment is never something to ignore.</li>
          <li>Repeated vomiting quickly leads to dehydration, electrolyte imbalance, and shock.</li>
        </ul>

        {/* TOC */}
        <h2 className="text-2xl font-semibold mb-3">Table of Contents</h2>
        <ul className="list-disc pl-5 space-y-1 mb-10">
          <li>What Maropitant Is Designed to Do</li>
          <li>Why Vomiting Can Persist Despite Treatment</li>
          <li>The Physiologic and Metabolic Pathways Involved</li>
          <li>Common Conditions Where Maropitant Alone Is Insufficient</li>
          <li>Signs and Symptoms That Often Accompany Persistent Vomiting</li>
          <li>Why Persistent Vomiting Is Dangerous</li>
          <li>When to Seek Immediate Emergency Veterinary Care</li>
          <li>What Veterinarians Do When Maropitant Fails</li>
          <li>Alternative and Adjunctive Treatments</li>
          <li>Key Takeaways for Dog Owners</li>
        </ul>

        {/* Section 1 */}
        <h2 className="text-2xl font-semibold mt-10 mb-3">
          What Maropitant Is Designed to Do
        </h2>
        <p className="mb-4">
          Maropitant citrate, commonly known by the brand name Cerenia®, is a neurokinin-1 (NK1) receptor antagonist. It works by blocking substance P, a neurotransmitter that plays a central role in activating the vomiting center of the brain.
        </p>
        <p className="mb-6">
          This mechanism makes maropitant highly effective for many causes of nausea and vomiting, which is why it is widely prescribed for GI upset, medication-induced nausea, motion sickness, and post-operative vomiting. Its role in GI care is discussed in{' '}
          <Link
            href={`/${locale}/blog/maropitant-for-dogs`}
            className="underline"
          >
            Maropitant for Dogs: Uses, Side Effects, and When It Should Be Avoided
          </Link>.
        </p>

        {/* Section 2 */}
        <h2 className="text-2xl font-semibold mt-10 mb-3">
          Why Vomiting Can Persist Despite Treatment
        </h2>
        <p className="mb-4">
          The most important concept for owners to understand is that maropitant does not &ldquo;shut off vomiting entirely.&rdquo; It blocks one major signaling pathway, but vomiting can be triggered through multiple mechanisms.
        </p>
        <p className="mb-6">
          When vomiting continues despite maropitant, it usually means the underlying stimulus is overwhelming, ongoing, or originating from a pathway that maropitant does not fully control.
        </p>

        {/* Section 3 */}
        <h2 className="text-2xl font-semibold mt-10 mb-3">
          The Physiologic and Metabolic Pathways Involved
        </h2>
        <p className="mb-4">
          Vomiting is controlled by an integrated network involving the gastrointestinal tract, the brainstem vomiting center, and the chemoreceptor trigger zone. Maropitant specifically blocks substance P at NK1 receptors, but other pathways remain active.
        </p>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>
            <strong>Peripheral GI irritation:</strong> Severe inflammation, ulceration, or obstruction can trigger vomiting through vagal afferent signals that bypass NK1 blockade.
          </li>
          <li>
            <strong>Mechanical stimulation:</strong> Foreign bodies, intestinal blockages, or gastric dilation physically stimulate stretch receptors that provoke vomiting regardless of antiemetic use.
          </li>
          <li>
            <strong>Toxins and metabolic disturbances:</strong> Certain toxins, uremia, liver dysfunction, or electrolyte imbalances stimulate vomiting through pathways not fully suppressed by maropitant.
          </li>
          <li>
            <strong>Central nervous system input:</strong> Increased intracranial pressure or neurologic disease can override standard antiemetic control.
          </li>
        </ul>
        <p className="mb-6">
          In these cases, maropitant may reduce nausea intensity but cannot fully prevent vomiting because the stimulus remains unaddressed.
        </p>

        {/* Section 4 */}
        <h2 className="text-2xl font-semibold mt-10 mb-3">
          Common Conditions Where Maropitant Alone Is Insufficient
        </h2>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>Gastrointestinal obstruction or foreign body ingestion</li>
          <li>Severe pancreatitis</li>
          <li>Hemorrhagic gastroenteritis</li>
          <li>Toxin ingestion</li>
          <li>Advanced kidney or liver disease</li>
          <li>Uncontrolled infection or sepsis</li>
        </ul>
        <p className="mb-6">
          In these scenarios, vomiting is a symptom of a larger medical emergency rather than a standalone problem.
        </p>

        {/* Section 5 */}
        <h2 className="text-2xl font-semibold mt-10 mb-3">
          Signs and Symptoms That Often Accompany Persistent Vomiting
        </h2>
        <p className="mb-4">
          Persistent vomiting rarely occurs in isolation. Additional warning signs often develop as the condition worsens.
        </p>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>Severe lethargy or collapse</li>
          <li>Refusal to eat or drink</li>
          <li>Abdominal pain or bloating</li>
          <li>Excessive drooling or gagging</li>
          <li>Diarrhea or bloody stool</li>
          <li>Signs of dehydration</li>
        </ul>
        <p className="mb-6">
          If vomiting is paired with drooling or nausea behaviors, supportive care guidance is discussed in{' '}
          <Link
            href={`/${locale}/blog/excessive-drooling-metronidazole-dogs`}
            className="underline"
          >
            Excessive Drooling in Dogs on GI Medications
          </Link>.
        </p>

        {/* Section 6 */}
        <h2 className="text-2xl font-semibold mt-10 mb-3">
          Why Persistent Vomiting Is Dangerous
        </h2>
        <p className="mb-4">
          Vomiting rapidly disrupts fluid balance, electrolytes, and acid-base status. Dogs can deteriorate much faster than owners expect.
        </p>
        <p className="mb-6">
          Beyond dehydration, persistent vomiting increases the risk of aspiration pneumonia, kidney injury, shock, and delayed diagnosis of life-threatening disease.
        </p>

        {/* Section 7 */}
        <h2 className="text-2xl font-semibold mt-10 mb-3">
          When to Seek Immediate Emergency Veterinary Care
        </h2>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>Repeated vomiting over several hours despite medication</li>
          <li>Inability to keep water down</li>
          <li>Vomiting blood or dark material</li>
          <li>Severe abdominal pain or distension</li>
          <li>Collapse, weakness, or unresponsiveness</li>
          <li>Suspected toxin or foreign body ingestion</li>
        </ul>
        <p className="mb-6">
          These situations require emergency evaluation and should not be managed at home.
        </p>

        {/* Section 8 */}
        <h2 className="text-2xl font-semibold mt-10 mb-3">
          What Veterinarians Do When Maropitant Fails
        </h2>
        <p className="mb-4">
          When vomiting persists despite maropitant, veterinarians shift focus from symptom suppression to identifying and stabilizing the underlying cause.
        </p>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>Intravenous fluid therapy</li>
          <li>Blood work and electrolyte analysis</li>
          <li>Abdominal imaging</li>
          <li>Pain management</li>
          <li>Hospitalization for monitoring</li>
        </ul>

        {/* Section 9 */}
        <h2 className="text-2xl font-semibold mt-10 mb-3">
          Alternative and Adjunctive Treatments
        </h2>
        <p className="mb-4">
          Depending on the diagnosis, additional therapies may be added.
        </p>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>Ondansetron or other antiemetics targeting different pathways</li>
          <li>Acid suppressants and GI protectants</li>
          <li>Antibiotics or antiparasitic treatment when indicated</li>
          <li>Surgical intervention for obstruction or torsion</li>
        </ul>
        <p className="mb-6">
          These decisions are individualized and based on diagnostic findings rather than trial-and-error medication use.
        </p>

        {/* Section 10 */}
        <h2 className="text-2xl font-semibold mt-10 mb-3">
          Key Takeaways for Dog Owners
        </h2>
        <p className="mb-10">
          Maropitant is an excellent anti-vomiting medication, but it is not a cure-all. Persistent vomiting despite treatment is a red flag that the underlying problem is serious and requires immediate veterinary attention. Early intervention saves lives.
        </p>

        {/* References */}
        <h2 className="text-2xl font-semibold mt-10 mb-3">References</h2>
        <ul className="list-disc pl-5 space-y-2 mb-10">
          <li>Merck Veterinary Manual – Vomiting mechanisms and antiemetic therapy</li>
          <li>FDA Center for Veterinary Medicine – Cerenia® (maropitant) labeling</li>
          <li>American College of Veterinary Internal Medicine – Acute GI disease management</li>
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
