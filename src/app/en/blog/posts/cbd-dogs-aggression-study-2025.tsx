'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function CbdDogsAggressionStudy() {
  const locale = useLocale();

  const title =
    'Study Finds CBD Supplements May Reduce Aggression in Aging Dogs: What the Research Really Says';
  const date = 'November 22, 2025';
  const categories = ['owner', 'health', 'behavior'] as const;

  const categoryLabels: Record<string, string> = {
    owner: 'Pet Owners',
    boarding: 'Boarding & Daycare',
    food: 'Dog Food & Nutrition',
    sitter: 'Pet Sitters',
    walker: 'Dog Walkers',
    rescue: 'Rescues',
    vet: 'Veterinary Clinics',
    health: 'Dog Health',
    behavior: 'Behavior & Training',
    grooming: 'Grooming & Care',
    breed_specific_guides: 'Breed-Specific Guides',
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

        {/* INTRO */}
        <p className="text-lg mb-4">
          A major multi-year study suggests that CBD or hemp-based supplements may help reduce
          aggression in older dogs. The findings are gaining attention from pet owners, trainers, and
          behaviorists — but the results are more nuanced than headlines suggest. Below is what the
          research truly shows and how dog owners can evaluate whether CBD is appropriate for their
          pets.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-3">What the New Study Looked At</h2>
        <p className="mb-4">
          The data comes from more than 47,000 companion dogs enrolled in the Dog Aging Project
          (DAP), using owner-reported behavior surveys collected over multiple years. Dogs were
          grouped based on how often they received CBD or hemp supplements and were tracked for
          long-term behavioral changes.
          <br />
          <strong>Source:</strong>{' '}
          <a
            href="https://www.frontiersin.org/journals/veterinary-science/articles/10.3389/fvets.2025.1666663/full?utm_source=chatgpt.com"
            className="underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Frontiers in Veterinary Science (2025)
          </a>
        </p>

        <p className="mb-4">
          Dogs receiving CBD were typically older (average ~10.2 years) and more likely to have
          chronic health conditions such as arthritis, cognitive decline, or cancer compared with
          non-CBD dogs.
          <br />
          <strong>Source:</strong> Same study above.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-3">
          Key Finding: Aggression Declined Over Time
        </h2>
        <p className="mb-4">
          Dogs whose owners regularly administered CBD supplements showed a significant decline in
          aggression intensity over time compared with dogs that were never given CBD.
          <br />
          <strong>Source:</strong>{' '}
          <a
            href="https://www.frontiersin.org/journals/veterinary-science/articles/10.3389/fvets.2025.1666663/full?utm_source=chatgpt.com"
            className="underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Frontiers in Veterinary Science (2025)
          </a>
        </p>

        <p className="mb-4">
          However, researchers found that CBD supplementation did <strong>not</strong> seem to
          reduce other behavior problems long-term, such as generalized anxiety or agitation.
          <br />
          <strong>Source:</strong>{' '}
          <a
            href="https://phys.org/news/2025-11-cbd-supplements-dogs-aggressive.html?utm_source=chatgpt.com"
            className="underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Phys.org coverage of the study
          </a>
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-3">
          What the Findings Actually Mean (and What They Don’t)
        </h2>
        <p className="mb-4">
          The results suggest CBD may help reduce aggression in senior or medically compromised dogs,
          potentially improving welfare and household harmony. This may be especially relevant for
          older dogs who experience irritability associated with pain, dementia, or chronic illness.
        </p>

        <p className="mb-6">
          But the study is observational — not a controlled clinical trial. Owner-reported data can
          be biased or incomplete. The study also cannot confirm a causal link between CBD and
          decreased aggression. Many variables (training, household changes, medication adjustments)
          were not controlled.
          <br />
          <strong>Source:</strong>{' '}
          <a
            href="https://www.frontiersin.org/journals/veterinary-science/articles/10.3389/fvets.2025.1666663/full?utm_source=chatgpt.com"
            className="underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Frontiers in Veterinary Science (2025)
          </a>
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-3">What Owners Should Know Before Using CBD</h2>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>Discuss CBD with your veterinarian, especially for older dogs or those on medications.</li>
          <li>
            Look for <strong>third-party tested</strong> CBD products with verified cannabinoid content
            and low/no THC.
          </li>
          <li>
            Monitor your dog’s behavior over months — changes may be gradual and subtle.
          </li>
          <li>
            Use CBD as part of a broader behavior plan: training, enrichment, pain management, and
            environmental modification.
          </li>
          <li>
            Maintain high-quality socialization and behavior support. For guidance, see our resource:{' '}
            <Link href="https://www.petuniapets.com/en/blog/dog-socialization-daycare-2025">
              <a className="underline" target="_blank" rel="noopener noreferrer">
                Dog Socialization & Daycare (2025 Guide)
              </a>
            </Link>
            .
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-3">Limitations of the Research</h2>
        <p className="mb-4">
          The study did not track exact CBD dosages, product quality, formulation differences, or how
          consistently owners administered supplements. It also did not include clinical evaluations
          of behavior — only owner surveys. These factors limit the strength of the conclusion.
        </p>

        <p className="mb-6">
          Researchers note that **randomized controlled trials** are needed before veterinarians can
          confidently recommend CBD as a standard aggression-treatment tool.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-3">Balanced Takeaway</h2>
        <p className="mb-10">
          CBD supplementation shows potential to help reduce aggression in aging dogs, especially
          those experiencing chronic discomfort or cognitive changes. But the science is still early,
          and CBD should be approached thoughtfully — ideally with veterinary oversight and in
          combination with behavioral support.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-3">
          Further Reading & Authoritative Sources
        </h2>
        <ul className="list-disc pl-5 space-y-2 mb-10">
          <li>
            Frontiers in Veterinary Science (2025):{' '}
            <a
              href="https://www.frontiersin.org/journals/veterinary-science/articles/10.3389/fvets.2025.1666663/full?utm_source=chatgpt.com"
              className="underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Study on CBD supplementation and dog behavior
            </a>
          </li>
          <li>
            Phys.org summary of findings:{' '}
            <a
              href="https://phys.org/news/2025-11-cbd-supplements-dogs-aggressive.html?utm_source=chatgpt.com"
              className="underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              CBD supplements may reduce aggression in dogs
            </a>
          </li>
        </ul>

        <Link
          href={`/${locale}/blog`}
          className="underline text-[#2c4a30] font-medium hover:opacity-80"
        >
          ← Back to Blog
        </Link>

        <p className="text-xs text-gray-500 mt-8">
          This article is for educational purposes only. Always consult a qualified veterinarian
          before starting CBD or any new supplement, especially for senior dogs or those with chronic
          health conditions.
        </p>
      </main>
    </>
  );
}
