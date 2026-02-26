'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function DogAgeingScienceCellularPathways() {
  const locale = useLocale();

  const title =
    'How Dog Ageing Actually Works: Cellular Pathways, Inflammation, and Metabolic Decline Explained';
  const date = 'November 20, 2025';
  const categories = ['owner', 'veterinary'] as const;

  const categoryLabels: Record<string, string> = {
    owner: 'Pet Owners',
    veterinary: 'Veterinary Clinics',
    boarding: 'Boarding',
    daycare: 'Daycare',
    rescue: 'Rescues',
    walker: 'Dog Walkers',
    sitter: 'Pet Sitters',
    breeder: 'Breeders',
    breed_specific_guides: 'Breed Specific Guides'
  };

  return (
    <>

      <main className="max-w-3xl mx-auto px-4 py-10">
        {/* Date */}
        <p className="text-sm text-gray-600 mb-2">Posted on {date}</p>

        {/* Title */}
        <h1 className="text-3xl font-bold mb-4">
          {title}
        </h1>

        {/* Category Pills */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => (
            <span
              key={cat}
              className="text-xs bg-[#e4dbcb] text-[#2c4a30] px-3 py-1 rounded-full border border-[#d9cfc2]"
            >
              {categoryLabels[cat] ?? cat}
            </span>
          ))}
        </div>

        {/* Table of Contents */}
        <nav className="mb-8 text-sm">
          <ul className="flex flex-wrap gap-4">
            <li><a href="#tldr" className="underline hover:opacity-80">TL;DR</a></li>
            <li><a href="#definition" className="underline hover:opacity-80">What Ageing Means in Dogs</a></li>
            <li><a href="#inflammation" className="underline hover:opacity-80">Inflammation and Ageing</a></li>
            <li><a href="#cellular" className="underline hover:opacity-80">Cellular & Mitochondrial Decline</a></li>
            <li><a href="#metabolism" className="underline hover:opacity-80">Metabolic Slowdown</a></li>
            <li><a href="#immune" className="underline hover:opacity-80">Immune System Weakening</a></li>
            <li><a href="#symptoms" className="underline hover:opacity-80">How These Processes Appear Clinically</a></li>
            <li><a href="#pathway" className="underline hover:opacity-80">Why Pathways Matter</a></li>
            <li><a href="#drug" className="underline hover:opacity-80">Longevity Drug Pathway Targeting</a></li>
            <li><a href="#conclusion" className="underline hover:opacity-80">Conclusion</a></li>
            <li><a href="#references" className="underline hover:opacity-80">Sources</a></li>
          </ul>
        </nav>

        {/* TL;DR */}
        <section id="tldr" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Short Answer (TL;DR)</h2>
          <p className="mb-4">
            Dog ageing is driven by inflammation, cellular damage, mitochondrial decline, metabolic slowdown, and immune weakening.
            These processes interact to reduce mobility, cognition, and overall resilience. Modern longevity medicine focuses on
            targeting the underlying pathways rather than treating symptoms alone, which is why the FDA&apos;s recent support for a
            canine anti-ageing drug represents a major turning point in veterinary science.
          </p>
        </section>

        {/* Section 1 */}
        <section id="definition" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">What Ageing Actually Means in Dogs</h2>
          <p className="mb-4">
            In veterinary science, ageing is not defined by chronological time but by physiological decline. Ageing results from
            cellular wear, accumulated damage, inflammatory signaling, slower repair mechanisms, and increased susceptibility to
            disease. Senior dogs experience changes in metabolism, immune function, organ reserve, and musculoskeletal health.
          </p>

          <p className="mb-4">
            Ageing research in mammals shows that the same molecular pathways appear across species, which is why discoveries in
            dogs parallel findings in humans. These pathways include inflammation, mitochondrial energy regulation, oxidative stress,
            and genomic stability.
          </p>
        </section>

        {/* Section 2 - Inflammation */}
        <section id="inflammation" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Inflammation: The Engine of Ageing</h2>
          <p className="mb-4">
            Chronic low-level inflammation, called inflammaging, drives many of the problems associated with getting older. As dogs
            age, inflammatory molecules increase, amplifying tissue damage, accelerating arthritis, impairing metabolism, and reducing
            organ efficiency.
          </p>

          <ul className="list-disc pl-5 mb-4">
            <li>Inflammation increases cartilage breakdown.</li>
            <li>Inflammatory signaling contributes to cognitive decline.</li>
            <li>Chronic inflammation disrupts insulin regulation.</li>
            <li>Inflammatory cytokines weaken immune coordination.</li>
          </ul>

          <p className="mb-4">
            This process does not produce immediate symptoms, which is why many dogs appear healthy until noticeable functional
            decline occurs.
          </p>
        </section>

        {/* Section 3 - Cellular Decline */}
        <section id="cellular" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Mitochondrial Decline, Cellular Damage, and Telomere Shortening</h2>
          <p className="mb-4">
            Cells accumulate damage from oxidative stress, toxins, and normal metabolic processes. Mitochondria, which generate the
            cell&apos;s energy, lose efficiency as dogs age. When mitochondria decline, tissues have less resilience and slower repair
            rates.
          </p>

          <ul className="list-disc pl-5 mb-4">
            <li>Damaged cells clear more slowly.</li>
            <li>Energy production decreases across tissues.</li>
            <li>Telomeres shorten, affecting genomic stability.</li>
            <li>Repair mechanisms weaken during stress or injury.</li>
          </ul>

          <p className="mb-4">
            These changes explain why older dogs cannot bounce back from illness, injury, or surgery as easily as younger dogs.
          </p>
        </section>

        {/* Section 4 - Metabolism */}
        <section id="metabolism" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Metabolic Slowdown and Insulin Resistance</h2>
          <p className="mb-4">
            Metabolism slows with age due to reduced muscle mass, hormonal changes, mitochondrial decline, and chronic inflammation.
            Older dogs may develop insulin resistance, altered fat storage, and lower energy expenditure, which influences weight,
            appetite, and mobility.
          </p>

          <ul className="list-disc pl-5 mb-4">
            <li>Body composition shifts toward increased fat storage.</li>
            <li>Muscle loss reduces metabolic rate.</li>
            <li>Insulin resistance becomes more common.</li>
            <li>Cellular energy signaling becomes less efficient.</li>
          </ul>
        </section>

        {/* Section 5 - Immune */}
        <section id="immune" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Immune System Weakening (Immunosenescence)</h2>
          <p className="mb-4">
            Immunosenescence describes how the immune system becomes slower, less coordinated, and less adaptive over time. Senior
            dogs often experience increased infection risk, decreased vaccine responsiveness, and slower recovery.
          </p>

          <p className="mb-4">
            Combined with inflammaging, this creates a paradox: immune activity is both weaker and more inflammatory at the same
            time.
          </p>
        </section>

        {/* Section 6 - Symptoms */}
        <section id="symptoms" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">How These Processes Appear Clinically</h2>
          <p className="mb-4">
            Ageing pathways manifest in ways owners commonly recognize. Because multiple pathways shift simultaneously, symptoms
            often appear gradually.
          </p>

          <ul className="list-disc pl-5 mb-4">
            <li>Slower movement and reduced exercise tolerance.</li>
            <li>More frequent stiffness or limping.</li>
            <li>Reduced appetite or increased weight gain.</li>
            <li>Changes in sleep patterns.</li>
            <li>Decreased immune resilience.</li>
            <li>Early cognitive changes such as pacing or disorientation.</li>
          </ul>

          <p className="mb-4">
            Linking symptoms to pathways helps veterinarians design preventive plans rather than reactive treatments.
          </p>
        </section>

        {/* Internal Backlinks */}
        <section className="mb-8">
          <p className="mb-4">
            For related reading, explore:
          </p>
          <ul className="list-disc pl-5 mb-4">
            <li>
              <Link href={`/${locale}/blog/anti-ageing-for-dogs`} className="underline">
                Anti Ageing for Dogs (2026 Drug Overview)
              </Link>
            </li>
            <li>
              <Link href={`/${locale}/blog/senior-dog-health-checklist-2025`} className="underline">
                Senior Dog Health Checklist (2025)
              </Link>
            </li>
          </ul>
        </section>

        {/* Section 7 - Pathway Targeting */}
        <section id="pathway" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Why Targeting Ageing Pathways Matters</h2>
          <p className="mb-4">
            Traditional veterinary care treats symptoms such as arthritis, obesity, or cognitive decline as separate issues.
            Longevity medicine reframes these as downstream expressions of upstream molecular changes. By targeting pathways
            that regulate inflammation, mitochondrial efficiency, metabolism, and immune responsiveness, we shift from reactive
            care to preventive physiology.
          </p>

          <ul className="list-disc pl-5 mb-4">
            <li>Improved resilience across organs.</li>
            <li>Better metabolic stability.</li>
            <li>Slower cognitive decline.</li>
            <li>Greater mobility and quality of life.</li>
          </ul>
        </section>

        {/* Section 8 - Longevity Drug */}
        <section id="drug" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">How the New Anti-Ageing Drug Interacts With These Pathways</h2>
          <p className="mb-4">
            The canine longevity drug currently under FDA review was designed to target core signalling pathways associated with
            metabolic regulation and inflammation. Early reports suggest that its mechanism of action may help recalibrate the
            metabolic and inflammatory environment, allowing cellular systems to function more youthfully.
          </p>

          <p className="mb-4">
            While more data are needed following formal approval, the drug&apos;s development represents a historic moment for veterinary
            ageing science.
          </p>
        </section>

        {/* Conclusion */}
        <section id="conclusion" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Conclusion</h2>
          <p className="mb-4">
            Dog ageing is not a single process but a network of interconnected physiological shifts. Understanding these pathways
            allows owners and veterinarians to intervene earlier, support resilience, and improve quality of life. As longevity
            research advances, pathway-based medicine will shape the next decade of canine health.
          </p>
        </section>

        {/* Sources */}
        <section id="references" className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">📚 Sources (Selected)</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            <li>Lopez-Otin C. (2013). The Hallmarks of Ageing. Cell.</li>
            <li>Promislow D. (2023). Dog Ageing Project Findings. Nature.</li>
            <li>Mella S. (2024). Inflammaging in Companion Animals. Vet Immunol Immunopathol.</li>
            <li>FDA Veterinary Innovation Program Communications (2024–2025).</li>
            <li>Mitochondrial dysfunction in canine ageing. J Vet Intern Med.</li>
            <li>Canine insulin resistance and metabolic ageing. J Anim Sci.</li>
          </ul>

          <p className="text-xs text-gray-600 mt-4">
            Educational content only — always follow your veterinarian&apos;s guidance for diagnosis and treatment.
          </p>
        </section>

        <Link
          href={`/${locale}/blog`}
          className="underline text-[#2c4a30] font-medium hover:opacity-80"
        >
          ← Back to Blog
        </Link>
      </main>
    </>
  );
}
