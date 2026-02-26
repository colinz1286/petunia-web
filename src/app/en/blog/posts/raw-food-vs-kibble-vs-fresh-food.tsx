'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function RawFoodVsKibbleVsFreshFood() {
  const locale = useLocale();

  const title = 'Raw Food vs. Kibble vs. Fresh Food: Which Diet Is Best for Your Dog?';
  const date = 'December 11, 2025';
  const categories = ['owner', 'food'] as const;

  const categoryLabels: Record<string, string> = {
    owner: 'Pet Owners',
    food: 'Food & Nutrition',
    boarding: 'Boarding',
    daycare: 'Daycare',
    rescue: 'Rescues',
    vet: 'Veterinary Clinics',
    sitter: 'Pet Sitters',
    walker: 'Dog Walkers',
    breeder: 'Breeders',
    breed_specific_guides: 'Breed Specific Guides',
  };

  return (
    <>

      <main className="max-w-3xl mx-auto px-4 py-10 text-[#2c4a30]">
        {/* Meta */}
        <p className="text-sm text-gray-500 mb-2">Posted on {date}</p>
        <h1 className="text-3xl font-bold mb-4">{title}</h1>

        {/* Category pills */}
        <div className="flex flex-wrap gap-2 mb-6">
          {categories.map((key) => (
            <span
              key={key}
              className="text-xs bg-[#e4dbcb] text-[#2c4a30] px-3 py-1 rounded-full border border-[#d9cfc2]"
            >
              {categoryLabels[key] ?? key}
            </span>
          ))}
        </div>

        {/* Local anchor nav */}
        <nav className="mb-8 text-sm">
          <ul className="flex flex-wrap gap-3">
            <li>
              <a href="#tldr" className="underline hover:opacity-80">
                TL;DR
              </a>
            </li>
            <li>
              <a href="#models-overview" className="underline hover:opacity-80">
                Feeding Models
              </a>
            </li>
            <li>
              <a href="#digestibility-quality" className="underline hover:opacity-80">
                Digestibility &amp; Quality
              </a>
            </li>
            <li>
              <a href="#cost-convenience" className="underline hover:opacity-80">
                Cost &amp; Convenience
              </a>
            </li>
            <li>
              <a href="#health-claims" className="underline hover:opacity-80">
                Claims vs Outcomes
              </a>
            </li>
            <li>
              <a href="#when-each-fits" className="underline hover:opacity-80">
                When Each Diet Fits
              </a>
            </li>
            <li>
              <a href="#decision-framework" className="underline hover:opacity-80">
                How to Choose
              </a>
            </li>
            <li>
              <a href="#faq" className="underline hover:opacity-80">
                FAQ
              </a>
            </li>
            <li>
              <a href="#sources" className="underline hover:opacity-80">
                📚 Sources
              </a>
            </li>
          </ul>
        </nav>

        {/* TL;DR */}
        <section id="tldr" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Short Answer (TL;DR)</h2>
          <p className="mb-4">
            There is no single &ldquo;best&rdquo; diet for every dog. Kibble can be the easiest way to feed a complete
            diet consistently, fresh cooked can offer high palatability and often feels easier on sensitive stomachs, and
            raw can work for some households that can manage food-safety routines and nutrition consistency. The best
            choice depends on your dog&rsquo;s health, your household risk factors, your budget, and whether you can
            execute the diet reliably for months, not just days.
          </p>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Important note:</strong> This article is educational and not veterinary medical advice. Dogs with
            chronic disease, puppies, and households with higher-risk people should consult a veterinarian before major
            diet changes.
          </div>
        </section>

        {/* MODELS OVERVIEW */}
        <section id="models-overview" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Overview of the Three Main Feeding Models</h2>
          <p className="mb-4">
            These labels describe how food is prepared and delivered, not whether it is automatically high-quality. Any
            of the three can be done well or poorly depending on formulation, consistency, and owner execution.
          </p>

          <h3 className="text-xl font-semibold mb-2">Raw feeding</h3>
          <p className="mb-4">
            Raw diets range from commercially prepared frozen or freeze-dried formulas to homemade plans built from meat,
            organs, and bone. The upside is ingredient control and high palatability for many dogs. The key risks are
            nutrition drift in homemade plans and food-safety exposure during storage, prep, and cleanup.
          </p>

          <h3 className="text-xl font-semibold mb-2">Kibble (dry food)</h3>
          <p className="mb-4">
            Kibble is shelf-stable and convenient. High-quality kibble can be complete and balanced with clear feeding
            directions. The downside is that ingredient quality varies widely by brand and price tier, and some dogs do
            not tolerate certain formulas well.
          </p>

          <h3 className="text-xl font-semibold mb-2">Fresh cooked (gently cooked, refrigerated, or frozen)</h3>
          <p className="mb-4">
            Fresh cooked diets include subscription meal plans and homemade cooked options. Many owners choose fresh for
            palatability and ingredient simplicity. The biggest risk is assuming homemade cooked diets are automatically
            balanced. As with raw, formulation is what determines long-term success.
          </p>

          <p className="text-sm text-gray-700">
            For the full raw feeding vocabulary, definitions, and decision context, start here:{' '}
            <Link
              href={`/${locale}/blog/the-ultimate-guide-to-raw-dog-food`}
              className="underline font-medium hover:opacity-80"
            >
              The Ultimate Guide to Raw Dog Food
            </Link>
            .
          </p>
        </section>

        {/* DIGESTIBILITY & QUALITY */}
        <section id="digestibility-quality" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Digestibility and Ingredient Quality: What Changes (and What Doesn&rsquo;t)</h2>
          <p className="mb-4">
            Many diet debates focus on &ldquo;processing&rdquo; versus &ldquo;freshness,&rdquo; but your dog&rsquo;s
            outcome is more often driven by a few practical factors: protein source, fat tolerance, fiber level, and
            whether the formula is complete and consistent.
          </p>

          <div className="rounded-lg border border-[#d9cfc2] p-4 bg-[#f6efe4] mb-4">
            <p className="text-sm mb-2">
              <strong>What owners often notice when switching diets:</strong>
            </p>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Stool volume and firmness change (often tied to fiber and moisture).</li>
              <li>Skin and coat can change (often tied to fat type and omega-3 consistency).</li>
              <li>Appetite and meal enthusiasm change (palatability and scent can matter a lot).</li>
              <li>Gas and bloating can change (individual tolerance and ingredient choices).</li>
            </ul>
          </div>

          <p className="mb-4">
            Digestibility is not automatically &ldquo;better&rdquo; because a diet is raw. Some dogs do better on fresh
            cooked foods, and some do best on a stable kibble that is tolerated well. The best test is not ideology. It
            is stable stool, stable weight, and a dog that feels good consistently.
          </p>

          <p className="text-sm text-gray-700">
            For a balanced discussion of raw claims and the evidence behind them, read:{' '}
            <Link
              href={`/${locale}/blog/raw-food-diet-pros-and-cons`}
              className="underline font-medium hover:opacity-80"
            >
              Raw Food Diet Pros &amp; Cons: What Science and Vets Say
            </Link>
            .
          </p>
        </section>

        {/* COST & CONVENIENCE */}
        <section id="cost-convenience" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Cost, Convenience, and Storage: The Real-World Trade-Offs</h2>
          <p className="mb-4">
            Many owners pick a diet based on what sounds healthiest, then struggle to maintain it. A diet you can execute
            for a year is better than a &ldquo;perfect&rdquo; diet you quit after two weeks.
          </p>

          <div className="not-prose overflow-x-auto mb-4">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b">
                  <th className="py-2 pr-4">Factor</th>
                  <th className="py-2 pr-4">Kibble</th>
                  <th className="py-2 pr-4">Fresh Cooked</th>
                  <th className="py-2 pr-4">Raw</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b align-top">
                  <td className="py-3 pr-4"><strong>Storage</strong></td>
                  <td className="py-3 pr-4">Shelf-stable</td>
                  <td className="py-3 pr-4">Fridge/freezer</td>
                  <td className="py-3 pr-4">Freezer (often)</td>
                </tr>
                <tr className="border-b align-top">
                  <td className="py-3 pr-4"><strong>Prep time</strong></td>
                  <td className="py-3 pr-4">Low</td>
                  <td className="py-3 pr-4">Low to medium</td>
                  <td className="py-3 pr-4">Medium to high</td>
                </tr>
                <tr className="border-b align-top">
                  <td className="py-3 pr-4"><strong>Food safety routine</strong></td>
                  <td className="py-3 pr-4">Simplest</td>
                  <td className="py-3 pr-4">Moderate</td>
                  <td className="py-3 pr-4">Strictest</td>
                </tr>
                <tr className="border-b align-top">
                  <td className="py-3 pr-4"><strong>Typical cost</strong></td>
                  <td className="py-3 pr-4">Low to high</td>
                  <td className="py-3 pr-4">Medium to high</td>
                  <td className="py-3 pr-4">High (often)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mb-4">
            Convenience is not a minor detail. Convenience determines compliance. If you travel often, have limited
            freezer space, or have multiple pets with complex feeding needs, a simpler plan may keep your dog more stable
            long term.
          </p>

          <p className="mb-4">
            If commercial raw is on your shortlist, a practical starting point is to compare brands using consistent
            criteria rather than marketing claims.
          </p>

          <p className="text-sm text-gray-700">
            See:{' '}
            <Link
              href={`/${locale}/blog/best-raw-dog-food-brands-reviewed`}
              className="underline font-medium hover:opacity-80"
            >
              Best Raw Dog Food Brands Reviewed (Current Year Edition)
            </Link>
            .
          </p>
        </section>

        {/* CLAIMS VS OUTCOMES */}
        <section id="health-claims" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Health Claims vs Real-World Outcomes</h2>
          <p className="mb-4">
            Many claims are not exclusive to one diet type. A dog might improve on raw because the previous food was a
            poor fit, not because raw is inherently superior. A dog might improve on fresh cooked for the same reason.
            Long-term outcomes depend on nutrition completeness, stability, and the dog&rsquo;s individual tolerance.
          </p>

          <div className="rounded-lg border border-[#d9cfc2] p-4 bg-[#f6efe4] mb-4">
            <p className="text-sm mb-2">
              <strong>When owners report improvements, the real drivers are often:</strong>
            </p>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Switching to a protein source that the dog tolerates better</li>
              <li>More consistent portion control and fewer table scraps</li>
              <li>More moisture in the diet (fresh or raw)</li>
              <li>A formula with a better fat profile for that dog</li>
              <li>Improved routine and fewer &ldquo;random&rdquo; ingredients</li>
            </ul>
          </div>

          <p className="mb-4">
            The most important outcome measures are boring but reliable: stable weight, stable stool, strong appetite,
            comfortable energy, and veterinary checkups that show no red flags.
          </p>
        </section>

        {/* WHEN EACH FITS */}
        <section id="when-each-fits" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Situations Where Each Diet May Be Appropriate</h2>
          <p className="mb-4">
            The best diet depends on the dog and the owner. These are common &ldquo;fit&rdquo; patterns that show up in
            real households.
          </p>

          <h3 className="text-xl font-semibold mb-2">Kibble may be a strong fit when</h3>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>You want simplicity, travel-friendly feeding, and predictable storage.</li>
            <li>Your dog does well on a stable complete-and-balanced formula.</li>
            <li>Your household prefers minimal food-safety complexity.</li>
            <li>You need a prescription diet or medically targeted formula.</li>
          </ul>

          <h3 className="text-xl font-semibold mb-2">Fresh cooked may be a strong fit when</h3>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>Your dog is picky and responds well to higher palatability.</li>
            <li>You want more moisture and softer textures.</li>
            <li>You can maintain refrigeration routines consistently.</li>
            <li>You want a middle ground between convenience and ingredient simplicity.</li>
          </ul>

          <h3 className="text-xl font-semibold mb-2">Raw may be a strong fit when</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>You can maintain strict storage, thawing, and sanitation routines.</li>
            <li>You value ingredient control and your dog tolerates raw consistently.</li>
            <li>You choose a complete-and-balanced commercial option or a formulated recipe framework.</li>
            <li>Your household risk profile is low and you are comfortable with the extra steps.</li>
          </ul>
        </section>

        {/* DECISION FRAMEWORK */}
        <section id="decision-framework" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">How to Choose: A Simple Decision Framework</h2>
          <p className="mb-4">
            If you want a decision you will still feel good about six months from now, make it on execution realities,
            not on social media intensity. Ask two core questions: can you feed it safely, and can you feed it
            consistently?
          </p>

          <ol className="list-decimal pl-6 space-y-1 mb-4">
            <li><strong>Start with your dog:</strong> age, medical history, GI sensitivity, activity level.</li>
            <li><strong>Assess your household:</strong> high-risk people, storage space, schedule, cleanliness routines.</li>
            <li><strong>Prioritize completeness:</strong> choose a diet intended as a full diet for your dog&rsquo;s life stage.</li>
            <li><strong>Transition slowly:</strong> track stool, appetite, and weight, and change one variable at a time.</li>
          </ol>

          <p className="mb-4">
            If you decide to try raw, do not &ldquo;wing it&rdquo; during the first few weeks. Follow a simple plan and
            slow down if stools become unstable.
          </p>

          <p className="text-sm text-gray-700">
            Step-by-step transition guidance is here:{' '}
            <Link
              href={`/${locale}/blog/how-to-transition-your-dog-to-a-raw-food-diet`}
              className="underline font-medium hover:opacity-80"
            >
              Step-by-Step: How to Transition Your Dog to a Raw Food Diet
            </Link>
            .
          </p>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">Frequently Asked Questions</h2>

          <p className="mb-3">
            <strong>Is raw always better for stool quality?</strong>
            <br />
            Not always. Some dogs have firmer stools on raw due to moisture and fiber differences, but others do better
            on fresh cooked or a stable kibble. Stool stability matters more than ideology.
          </p>

          <p className="mb-3">
            <strong>Can I mix raw and kibble long term?</strong>
            <br />
            Some owners do, but consistency matters. If your dog&rsquo;s stool becomes unstable, simplify. If you are
            feeding raw as a topper, make sure the main diet is still complete and balanced.
          </p>

          <p className="mb-3">
            <strong>What is the biggest mistake owners make?</strong>
            <br />
            Choosing a diet that is too complicated to maintain. The second biggest mistake is changing too many things
            at once and not knowing what caused an issue.
          </p>

          <p>
            <strong>Where should I start if I want to learn about raw feeding?</strong>
            <br />
            Start with the pillar guide so you understand the definitions, common models, and the safety and nutrition
            trade-offs.
          </p>
        </section>

        {/* SOURCES */}
        <section id="sources" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">📚 Sources &amp; References (Selected)</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            <li>
              WSAVA global nutrition guidelines and owner resources:{' '}
              <a
                href="https://wsava.org/global-guidelines/global-nutrition-guidelines/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://wsava.org/global-guidelines/global-nutrition-guidelines/
              </a>
            </li>
            <li>
              AAFCO: Reading labels and nutritional adequacy statements:{' '}
              <a
                href="https://www.aafco.org/consumers/understanding-pet-food/reading-labels/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.aafco.org/consumers/understanding-pet-food/reading-labels/
              </a>
            </li>
            <li>
              AVMA policy on raw animal-source protein diets (public health considerations):{' '}
              <a
                href="https://www.avma.org/resources-tools/avma-policies/raw-or-undercooked-animal-source-protein-cat-and-dog-diets"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.avma.org/resources-tools/avma-policies/raw-or-undercooked-animal-source-protein-cat-and-dog-diets
              </a>
            </li>
            <li>
              U.S. FDA guidance on safe handling of pet food and treats:{' '}
              <a
                href="https://www.fda.gov/animal-veterinary/animal-health-literacy/tips-safe-handling-pet-food-and-treats"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.fda.gov/animal-veterinary/animal-health-literacy/tips-safe-handling-pet-food-and-treats
              </a>
            </li>
          </ul>
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
