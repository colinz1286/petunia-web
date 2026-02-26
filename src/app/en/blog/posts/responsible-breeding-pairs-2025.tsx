'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function ResponsibleBreedingPairs2025() {
  const locale = useLocale();

  const title = 'How to Choose Responsible Breeding Pairs (Genetic Testing Explained)';
  const date = 'October 16, 2025';
  const categories = ['breeder', 'vet', 'genetics'] as const;

  const categoryLabels: Record<string, string> = {
    breeder: 'Breeders',
    vet: 'Veterinary Clinics',
    genetics: 'Genetics & Reproduction',
    owner: 'Pet Owners',
    boarding: 'Boarding & Daycare',
    daycare: 'Daycare Facilities',
    rescue: 'Rescues',
  };

  return (
    <>

      <main className="max-w-3xl mx-auto px-4 py-10 text-[#2c4a30]">
        <p className="text-sm text-gray-500 mb-2">Posted on {date}</p>
        <h1 className="text-3xl font-bold mb-4">{title}</h1>

        {/* 🏷️ Category Tags */}
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

        {/* INTRO */}
        <p className="text-lg mb-4">
          Responsible breeding begins long before a litter is conceived. It starts with a
          commitment to improving the breed—not just producing puppies. Genetic testing and
          careful health screening protect both the individual dogs and the breed’s future.
        </p>

        <p className="mb-6">
          In this guide, we’ll break down the essentials of evaluating breeding pairs,
          explain key genetic metrics like the coefficient of inbreeding (COI), and outline
          how to interpret health tests from OFA, Embark, and similar programs. Whether
          you’re a new breeder or refining your line, understanding these tools ensures
          every pairing is intentional, ethical, and scientifically sound.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-3">
          Quick Answer (Straight to the Point)
        </h2>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>Perform OFA or PennHIP screenings for hips, elbows, and cardiac health.</li>
          <li>Use DNA panels (Embark, Wisdom, Paw Print) to identify recessive traits.</li>
          <li>
            Keep the coefficient of inbreeding (COI) below 10% when possible for long-term
            genetic diversity.
          </li>
          <li>Never breed carriers of the same recessive disease gene together.</li>
          <li>
            Ethical breeding prioritizes health, temperament, and welfare over profit or
            convenience.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-3">Part 1 — Why Genetic Testing Matters</h2>
        <p className="mb-4">
          Every dog carries both dominant and recessive genes. Some of these recessive genes
          can cause disease if inherited from both parents. Genetic testing identifies
          carriers before breeding decisions are made, allowing breeders to select pairs
          that complement each other safely.
        </p>
        <p className="mb-6">
          According to the Orthopedic Foundation for Animals (OFA, 2024), over 200
          breed-specific hereditary diseases are now testable through DNA panels. Common
          categories include orthopedic, cardiac, ocular, and metabolic disorders. Detecting
          these early protects not only future puppies but also the reputation of the
          breeding program.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-3">Part 2 — Overview of Health Screenings</h2>

        <div className="overflow-x-auto mb-6">
          <table className="min-w-full border border-[#d9cfc2] text-sm">
            <thead className="bg-[#e4dbcb] text-[#2c4a30]">
              <tr>
                <th className="p-2 text-left">Test</th>
                <th className="p-2 text-left">Purpose</th>
                <th className="p-2 text-left">Recommended Age</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-[#d9cfc2]">
                <td className="p-2">OFA or PennHIP</td>
                <td className="p-2">Evaluate hip and elbow dysplasia risk</td>
                <td className="p-2">≥ 24 months (final certification)</td>
              </tr>
              <tr className="border-t border-[#d9cfc2]">
                <td className="p-2">OFA Cardiac</td>
                <td className="p-2">Detect congenital or adult-onset heart conditions</td>
                <td className="p-2">≥ 12 months</td>
              </tr>
              <tr className="border-t border-[#d9cfc2]">
                <td className="p-2">Eye Certification (CAER)</td>
                <td className="p-2">Screen for hereditary cataracts, PRA, and glaucoma</td>
                <td className="p-2">Annually, beginning at 1 year</td>
              </tr>
              <tr className="border-t border-[#d9cfc2]">
                <td className="p-2">Embark / Wisdom / Paw Print DNA</td>
                <td className="p-2">Identify recessive mutations and genetic carriers</td>
                <td className="p-2">Any age (buccal swab test)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mb-6">
          These screenings form the foundation of ethical breeding. Many breed clubs require
          them for CHIC certification—a public database maintained by OFA that confirms
          health transparency.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-3">Part 3 — Common Recessive Traits by Breed</h2>
        <p className="mb-4">
          Every breed has its own set of genetic vulnerabilities. Knowing these helps you
          target testing appropriately. Below are some well-documented examples (OFA, 2024;
          Embark Veterinary, 2025):
        </p>

        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li><strong>Labrador Retrievers:</strong> Exercise-induced collapse (EIC), PRA, hip dysplasia</li>
          <li><strong>German Shepherds:</strong> Degenerative myelopathy (DM), elbow dysplasia</li>
          <li><strong>Golden Retrievers:</strong> Progressive retinal atrophy (PRA1/PRA2), subaortic stenosis</li>
          <li><strong>French Bulldogs:</strong> Brachycephalic airway syndrome, spinal disorders</li>
          <li><strong>Australian Shepherds:</strong> MDR1 drug sensitivity, Collie eye anomaly (CEA)</li>
          <li><strong>Dobermans:</strong> Dilated cardiomyopathy (DCM1/DCM2), von Willebrand’s disease</li>
          <li><strong>Border Collies:</strong> Trapped neutrophil syndrome (TNS), CEA</li>
        </ul>

        <p className="mb-6">
          Even within the same breed, prevalence rates vary geographically. Work with your
          veterinarian or a veterinary geneticist to identify which mutations are most
          relevant to your breeding lines.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-3">
          Part 4 — Understanding the Coefficient of Inbreeding (COI)
        </h2>
        <p className="mb-4">
          The COI measures how genetically related two dogs are. It predicts the likelihood
          that a puppy will inherit identical copies of the same gene from both parents.
          A lower COI indicates greater diversity and lower risk for genetic disease.
        </p>

        <p className="mb-6">
          The American Kennel Club (AKC, 2024) and the Institute of Canine Biology recommend
          keeping the 10-generation COI below 10%. For breeds with small gene pools, some
          flexibility is acceptable, but breeders should avoid repeated line breeding that
          compounds genetic bottlenecks.
        </p>

        <div className="border border-[#d9cfc2] bg-[#f5f2ed] rounded-xl p-4 mb-6">
          <h3 className="text-xl font-semibold mb-2">📊 Example:</h3>
          <p className="text-sm">
            Two unrelated Labradors might have a COI of 3–4%. If bred repeatedly within the
            same family line, that number can exceed 15%, raising risks for hip dysplasia,
            autoimmune disorders, and decreased litter viability.
          </p>
        </div>

        <p className="mb-6">
          Many modern DNA platforms like Embark automatically calculate COI and provide
          diversity graphs that visualize genetic relationships across potential mates.
          These tools help breeders balance health and breed standard traits responsibly.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-3">Part 5 — Ethical Breeding Decisions</h2>
        <p className="mb-4">
          Ethics in breeding means making decisions that prioritize animal welfare over
          convenience or aesthetics. This includes skipping a breeding if health results are
          uncertain or if pairing two carriers would risk affected puppies.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-2">Real-World Scenarios</h3>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>
            <strong>Scenario 1:</strong> Both dogs are carriers for PRA but not affected.
            They should not be bred together, but either could pair safely with a clear
            mate.
          </li>
          <li>
            <strong>Scenario 2:</strong> A stud has excellent temperament and structure but
            borderline hip results. The breeder postpones breeding until re-evaluation or
            pairs only with an OFA Excellent female.
          </li>
          <li>
            <strong>Scenario 3:</strong> A breeder retires an older dam early due to repeat
            cesarean sections, prioritizing her health despite demand for puppies.
          </li>
        </ul>

        <p className="mb-6">
          Ethical breeding isn’t about perfection—it’s about responsibility, transparency,
          and long-term impact. Every decision should move the breed toward greater
          stability, not just popularity.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-3">
          Part 6 — Building Transparency with Puppy Buyers
        </h2>
        <p className="mb-4">
          Responsible breeders share health documentation openly. Buyers should receive
          printed or digital proof of OFA clearances, DNA test results, and COI summaries.
          Transparency builds trust, reduces misinformation, and attracts educated clients.
        </p>

        <p className="mb-6">
          Consider linking your OFA or Embark breeder profile directly from your website or
          social media. This not only reassures clients but also boosts credibility in
          breeder networks and search visibility.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-3">Final Takeaway</h2>
        <p className="mb-6">
          Choosing responsible breeding pairs requires balancing science, ethics, and
          compassion. Genetic testing, OFA screening, and COI tracking protect your dogs,
          future puppies, and the breed itself. When transparency and health come first,
          breeders elevate their reputation—and ensure that every litter contributes to a
          healthier, more resilient canine future.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-3">References</h2>
        <ul className="list-disc pl-5 space-y-2 text-sm mb-10">
          <li>
            Orthopedic Foundation for Animals. (2024). <em>Genetic Testing and Health
            Screening Standards.</em>
          </li>
          <li>
            Embark Veterinary. (2025). <em>Canine Genetic Health and Diversity
            Reports.</em>
          </li>
          <li>
            American Kennel Club. (2024). <em>Understanding the Coefficient of Inbreeding in
            Dog Breeding.</em>
          </li>
          <li>
            American Animal Hospital Association. (2024). <em>Canine Reproductive Health and
            Ethics Guidelines.</em>
          </li>
        </ul>

        {/* Back link */}
        <Link
          href={`/${locale}/blog`}
          className="underline text-[#2c4a30] font-medium hover:opacity-80"
        >
          ← Back to Blog
        </Link>

        {/* Disclaimer */}
        <p className="text-xs text-gray-500 mt-8">
          This article is for educational purposes and should not replace consultation with
          a licensed veterinarian or genetic specialist. Breeding decisions should always be
          based on verified health results and breed-specific ethical standards.
        </p>
      </main>
    </>
  );
}
