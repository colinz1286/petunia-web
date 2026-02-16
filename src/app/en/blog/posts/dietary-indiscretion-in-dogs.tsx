'use client';

import Head from 'next/head';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function DietaryIndiscretionInDogs() {
  const locale = useLocale();

  const title = 'Dietary Indiscretion in Dogs: Causes, Symptoms, Risks, and Prevention';
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
          content="Dietary indiscretion is one of the most common causes of vomiting and diarrhea in dogs. Learn why dogs scavenge, what they commonly ingest, warning signs of obstruction, how veterinarians diagnose these cases, and how to prevent repeat episodes."
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
          <li>Dietary indiscretion refers to dogs eating inappropriate or non-food items.</li>
          <li>It is one of the most common causes of acute vomiting and diarrhea.</li>
          <li>Most mild cases resolve, but some progress to obstruction or toxicity.</li>
          <li>Repeated indiscretion increases long-term digestive risk.</li>
        </ul>

        {/* TOC */}
        <h2 className="text-2xl font-semibold mb-3">Table of Contents</h2>
        <ul className="list-disc pl-5 space-y-1 mb-10">
          <li>What Dietary Indiscretion Means</li>
          <li>Why Dogs Are Prone to Scavenging</li>
          <li>Common Foods and Objects Dogs Ingest</li>
          <li>Symptoms and Timelines After Ingestion</li>
          <li>When Mild Cases Escalate</li>
          <li>Foreign Body Risks and Obstruction Signs</li>
          <li>How Veterinarians Diagnose Dietary Indiscretion</li>
          <li>Home Care vs Veterinary Treatment</li>
          <li>Prevention Strategies</li>
          <li>Long-Term Risks of Repeated Indiscretion</li>
        </ul>

        {/* Section 1 */}
        <h2 className="text-2xl font-semibold mt-10 mb-3">
          What “Dietary Indiscretion” Actually Means
        </h2>
        <p className="mb-4">
          Dietary indiscretion is a clinical term used to describe the ingestion of food items,
          substances, or objects that are not part of a dog&rsquo;s regular diet. This can range
          from eating spoiled food to swallowing foreign objects.
        </p>
        <p className="mb-6">
          It is not a diagnosis by itself, but rather a category of behavior that frequently leads
          to gastrointestinal upset and, in some cases, serious medical emergencies.
        </p>

        {/* Section 2 */}
        <h2 className="text-2xl font-semibold mt-10 mb-3">
          Why Dogs Are Biologically Prone to Scavenging
        </h2>
        <p className="mb-4">
          Dogs evolved as opportunistic feeders. Unlike obligate carnivores, they are highly
          adaptable scavengers capable of digesting a wide range of substances.
        </p>
        <p className="mb-6">
          Modern environments amplify this instinct. Trash access, unattended food, and household
          objects provide constant temptation, especially for young dogs and breeds with strong
          foraging tendencies.
        </p>

        {/* Section 3 */}
        <h2 className="text-2xl font-semibold mt-10 mb-3">
          Common Foods and Objects Dogs Ingest Accidentally
        </h2>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>Table scraps and high-fat foods</li>
          <li>Garbage and spoiled food</li>
          <li>Bones, corn cobs, and fruit pits</li>
          <li>Toys, socks, underwear, and fabric</li>
          <li>Plastic wrappers and packaging</li>
        </ul>

        {/* Section 4 */}
        <h2 className="text-2xl font-semibold mt-10 mb-3">
          Typical Symptoms and Timelines After Ingestion
        </h2>
        <p className="mb-4">
          Symptoms usually appear within a few hours to 24 hours after ingestion. Common signs
          include vomiting, diarrhea, gas, abdominal discomfort, and appetite changes.
        </p>
        <p className="mb-6">
          Some dogs may show delayed symptoms if the ingested item moves slowly through the
          digestive tract or causes partial obstruction.
        </p>

        {/* Section 5 */}
        <h2 className="text-2xl font-semibold mt-10 mb-3">
          When Mild Cases Resolve vs Escalate
        </h2>
        <p className="mb-6">
          Mild dietary indiscretion often resolves with short-term gastrointestinal rest and
          supportive care. Escalation occurs when vomiting persists, pain develops, or stool output
          decreases significantly.
        </p>

        {/* Section 6 */}
        <h2 className="text-2xl font-semibold mt-10 mb-3">
          Foreign Body Risks and Obstruction Warning Signs
        </h2>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>Repeated vomiting without diarrhea</li>
          <li>Abdominal bloating or pain</li>
          <li>Lethargy and refusal to eat</li>
          <li>Straining without stool production</li>
        </ul>

        {/* Internal Links */}
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>
            For a broader overview of digestive symptoms, see{' '}
            <Link
              href={`/${locale}/blog/common-gi-problems-in-dogs`}
              className="underline"
            >
              Common Gastrointestinal Problems in Dogs
            </Link>.
          </li>
          <li>
            Learn how parasites can mimic indiscretion-related diarrhea in{' '}
            <Link
              href={`/${locale}/blog/intestinal-parasites-causing-diarrhea-dogs`}
              className="underline"
            >
              Intestinal Parasites Causing Diarrhea in Dogs
            </Link>.
          </li>
          <li>
            Understand how gut imbalance may follow repeated episodes in{' '}
            <Link
              href={`/${locale}/blog/gut-dysbiosis-in-dogs`}
              className="underline"
            >
              Gut Dysbiosis in Dogs
            </Link>.
          </li>
        </ul>

        {/* Section 7 */}
        <h2 className="text-2xl font-semibold mt-10 mb-3">
          How Veterinarians Diagnose Dietary Indiscretion
        </h2>
        <p className="mb-6">
          Diagnosis relies on history, physical examination, and symptom pattern. Imaging such as
          radiographs or ultrasound may be required if obstruction is suspected.
        </p>

        {/* Section 8 */}
        <h2 className="text-2xl font-semibold mt-10 mb-3">
          At-Home Management vs Veterinary Intervention
        </h2>
        <p className="mb-6">
          While mild cases may resolve with dietary adjustment under veterinary guidance, delaying
          care when red-flag symptoms are present can significantly worsen outcomes.
        </p>

        {/* Section 9 */}
        <h2 className="text-2xl font-semibold mt-10 mb-3">
          Prevention Strategies
        </h2>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>Secure trash and food storage</li>
          <li>Supervise play with chewable items</li>
          <li>Use enrichment to reduce boredom</li>
          <li>Train reliable leave-it cues</li>
        </ul>

        {/* Section 10 */}
        <h2 className="text-2xl font-semibold mt-10 mb-3">
          Long-Term Risks of Repeated Indiscretion
        </h2>
        <p className="mb-10">
          Repeated episodes increase the risk of chronic inflammation, gut dysbiosis, pancreatitis,
          and behavioral reinforcement of scavenging. Addressing the underlying causes is essential
          for long-term digestive health.
        </p>

        {/* References */}
        <h2 className="text-2xl font-semibold mt-10 mb-3">References</h2>
        <ul className="list-disc pl-5 space-y-2 mb-10">
          <li>Merck Veterinary Manual</li>
          <li>American Veterinary Medical Association (AVMA)</li>
          <li>American College of Veterinary Internal Medicine (ACVIM)</li>
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
          care.
        </p>
      </main>
    </>
  );
}
