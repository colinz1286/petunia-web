'use client';

import Head from 'next/head';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function RawDietTroubleshootingCommonIssues() {
  const locale = useLocale();

  const title = 'Raw Diet Troubleshooting: Common Issues and How to Fix Them';
  const date = 'December 16, 2025';
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

  const description =
    'A practical troubleshooting guide for common raw diet problems: diarrhea, constipation, picky eating, weight changes, skin or coat issues, fat balance, bone-related stool problems, and when to seek professional help.';

  return (
    <>
      <Head>
        <title>{title} – Petunia Blog</title>
        <meta name="description" content={description} />
        <meta name="robots" content="all" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
      </Head>

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
              <a href="#first-steps" className="underline hover:opacity-80">
                First Steps
              </a>
            </li>
            <li>
              <a href="#diarrhea" className="underline hover:opacity-80">
                Diarrhea
              </a>
            </li>
            <li>
              <a href="#constipation" className="underline hover:opacity-80">
                Constipation
              </a>
            </li>
            <li>
              <a href="#picky" className="underline hover:opacity-80">
                Picky Eating
              </a>
            </li>
            <li>
              <a href="#weight" className="underline hover:opacity-80">
                Weight Changes
              </a>
            </li>
            <li>
              <a href="#skin-coat" className="underline hover:opacity-80">
                Skin &amp; Coat
              </a>
            </li>
            <li>
              <a href="#fat-protein" className="underline hover:opacity-80">
                Fat &amp; Protein
              </a>
            </li>
            <li>
              <a href="#when-to-seek-help" className="underline hover:opacity-80">
                When to Seek Help
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
            Most raw diet problems come from moving too fast, changing too many variables at once, feeding a formula
            that is too rich for the dog, or inconsistently handling bone and fat. The fastest way to fix issues is to
            simplify: use one protein, one product or recipe framework, consistent portions, and careful hygiene.
            If symptoms are severe, persistent, or involve blood, pain, dehydration, or choking concerns, do not try to
            troubleshoot at home.
          </p>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Important note:</strong> This article is educational and not veterinary medical advice. Seek urgent
            veterinary care for repeated vomiting, bloody diarrhea, black tar-like stool, severe lethargy, dehydration,
            suspected obstruction, or choking.
          </div>
        </section>

        {/* FIRST STEPS */}
        <section id="first-steps" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Before You Troubleshoot: Do These First</h2>
          <p className="mb-4">
            Troubleshooting works best when you reduce variables. If you change protein, fat level, treats, toppers,
            chew items, and feeding schedule at the same time, it becomes hard to identify the true trigger.
          </p>

          <h3 className="text-xl font-semibold mb-2">A simple stabilization plan (48–72 hours)</h3>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>Use one protein only (do not rotate during symptoms).</li>
            <li>Stop adding new treats, chews, or table scraps.</li>
            <li>Measure portions with a scale for consistency.</li>
            <li>Track stool once or twice daily with brief notes.</li>
            <li>Confirm safe storage, thawing, and cleanup routines.</li>
          </ul>

          <p className="mb-4">
            Hygiene matters because raw foods can carry pathogens and pets can shed them even if they look healthy,
            which is why major public health and veterinary groups emphasize safe handling practices.
          </p>

          <p className="text-sm text-gray-700">
            For a complete sanitation and household-risk checklist, read:{' '}
            <Link
              href={`/${locale}/blog/raw-dog-food-safety`}
              className="underline font-medium hover:opacity-80"
            >
              Raw Dog Food Safety
            </Link>
            .
          </p>
        </section>

        {/* DIARRHEA */}
        <section id="diarrhea" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Diarrhea and Loose Stool</h2>
          <p className="mb-4">
            Loose stool is one of the most common complaints during raw transitions. Sometimes it is a short adjustment
            to moisture and fat differences. Sometimes it is a sign you moved too quickly, used a rich formula, or the
            dog has an intolerance. And sometimes it is unrelated to diet entirely (infection, parasites, stress, or
            a different medical issue).
          </p>

          <h3 className="text-xl font-semibold mb-2">Most common raw-feeding triggers</h3>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>Transition was too fast (multiple changes in the same week).</li>
            <li>Fat level increased sharply compared to the previous diet.</li>
            <li>Too much organ introduced at once.</li>
            <li>Multiple proteins rotated before tolerance was established.</li>
            <li>New chew items added during the switch.</li>
          </ul>

          <h3 className="text-xl font-semibold mb-2">What to do (practical steps)</h3>
          <div className="rounded-lg border border-[#d9cfc2] p-4 bg-[#f6efe4] mb-4">
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Hold steady on one protein and one product for several days.</li>
              <li>Reduce richness (choose a leaner formula or remove fatty extras).</li>
              <li>Stop all treats and chews until stools stabilize.</li>
              <li>Confirm food is thawed and stored properly, with clean bowls and surfaces.</li>
              <li>If diarrhea persists beyond 24–48 hours, or the dog seems unwell, contact your veterinarian.</li>
            </ul>
          </div>

          <p className="mb-4">
            If diarrhea started immediately after a rapid change, revisit your switching method and slow down. Many
            issues resolve when the transition becomes structured and consistent.
          </p>

          <p className="text-sm text-gray-700">
            Step-by-step transition methods are here:{' '}
            <Link
              href={`/${locale}/blog/how-to-transition-your-dog-to-a-raw-food-diet`}
              className="underline font-medium hover:opacity-80"
            >
              How to Transition Your Dog to a Raw Food Diet
            </Link>
            .
          </p>
        </section>

        {/* CONSTIPATION */}
        <section id="constipation" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Constipation, Hard Stool, and Straining</h2>
          <p className="mb-4">
            Hard, chalky stool and straining can happen when bone content is too high for a specific dog or when the
            diet lacks moisture relative to the dog&rsquo;s needs. This is not something to ignore, because severe
            constipation can become painful and may require veterinary treatment.
          </p>

          <h3 className="text-xl font-semibold mb-2">Common causes</h3>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>Too much bone content (especially when owners add bones or bone-heavy mixes).</li>
            <li>Large, dense chews that contribute extra bone intake.</li>
            <li>Not enough hydration or moisture in the overall plan.</li>
          </ul>

          <h3 className="text-xl font-semibold mb-2">What to do (safely)</h3>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>Stop bone additions until stools normalize.</li>
            <li>Use a simpler, consistent formula and track stool changes.</li>
            <li>If straining persists, the dog appears painful, or appetite drops, contact your veterinarian.</li>
          </ul>

          <p className="mb-4">
            If bones are part of your plan, bone choice and supervision matter more than most owners realize. Chew
            injuries and obstruction risk are also important considerations when bones are involved.
          </p>

          <p className="text-sm text-gray-700">
            For bone selection and safer chewing rules, read:{' '}
            <Link
              href={`/${locale}/blog/raw-bones-and-dogs-benefits-risks-safe-chewing-tips`}
              className="underline font-medium hover:opacity-80"
            >
              Raw Bones &amp; Dogs: Benefits, Risks &amp; Safe Chewing Tips
            </Link>
            .
          </p>
        </section>

        {/* PICKY EATING */}
        <section id="picky" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Picky Eating and Food Refusal</h2>
          <p className="mb-4">
            Some dogs hesitate when you change texture, temperature, or routine. Others refuse because the food is too
            rich, the portion is too large, or an underlying issue is present. A short-term refusal can happen, but a
            consistent refusal should be treated as information, not stubbornness.
          </p>

          <h3 className="text-xl font-semibold mb-2">Common reasons dogs refuse raw</h3>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>The food is served too cold straight from the refrigerator.</li>
            <li>Too much variety too soon creates confusion and inconsistent appetite.</li>
            <li>GI discomfort from rich meals lowers food motivation.</li>
            <li>Dental pain can make chewing unpleasant.</li>
          </ul>

          <h3 className="text-xl font-semibold mb-2">What to do</h3>
          <div className="rounded-lg border border-[#d9cfc2] p-4 bg-[#f6efe4] mb-4">
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Stick to one protein and one product for a full week.</li>
              <li>Serve at a consistent temperature and schedule.</li>
              <li>Remove the bowl after a reasonable window rather than free-feeding.</li>
              <li>If refusal persists or the dog seems nauseated or painful, contact your veterinarian.</li>
            </ul>
          </div>
        </section>

        {/* WEIGHT */}
        <section id="weight" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Weight Loss or Weight Gain on Raw</h2>
          <p className="mb-4">
            Weight changes are usually a calories-and-consistency problem, not a mysterious raw-feeding effect. Raw
            foods can be energy-dense, and portioning by eye leads to drift over time. The fix is objective measuring
            and a simple monitoring routine.
          </p>

          <h3 className="text-xl font-semibold mb-2">A practical monitoring approach</h3>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>Weigh your dog weekly for 4–6 weeks after a major diet change.</li>
            <li>Use a kitchen scale for portions rather than guesswork.</li>
            <li>Adjust slowly (small changes, then reassess after 10–14 days).</li>
          </ul>

          <p className="mb-4">
            If weight loss is rapid or accompanied by vomiting, diarrhea, lethargy, or poor appetite, do not treat it as
            a simple portion issue. That combination can indicate an underlying medical problem.
          </p>
        </section>

        {/* SKIN & COAT */}
        <section id="skin-coat" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Skin or Coat Issues After Switching</h2>
          <p className="mb-4">
            Some owners report coat improvements with raw feeding, while others see itchiness, ear issues, or flaky skin
            after switching. When skin or coat worsens, the usual drivers are intolerance to a protein, too much fat,
            inconsistent nutrient balance, or unrelated allergy and environmental triggers.
          </p>

          <h3 className="text-xl font-semibold mb-2">Common patterns</h3>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>Symptoms appear after introducing a new protein or rotating too quickly.</li>
            <li>Greasy coat or itchiness increases with richer formulas.</li>
            <li>Skin issues persist even after diet changes, suggesting a non-diet trigger.</li>
          </ul>

          <p className="mb-4">
            If skin issues are severe, persistent, or paired with GI symptoms, work with your veterinarian. A diet
            change can help some dogs, but it can also mask a condition that needs a structured medical plan.
          </p>
        </section>

        {/* FAT & PROTEIN */}
        <section id="fat-protein" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Balancing Fat and Protein Properly</h2>
          <p className="mb-4">
            Many raw diet setbacks come from formulas that are too rich for that dog. Fat drives calories and can
            influence stool quality. Some dogs thrive on higher fat. Others develop loose stool or low appetite when fat
            jumps quickly.
          </p>

          <h3 className="text-xl font-semibold mb-2">Simple rules that prevent most problems</h3>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>Increase richness slowly, especially during transitions.</li>
            <li>Do not add extra fatty items while troubleshooting diarrhea.</li>
            <li>Keep protein rotation slow so intolerances are identifiable.</li>
          </ul>

          <p className="mb-4">
            Public health agencies and veterinary organizations emphasize that raw diets can raise contamination risk
            compared to other pet foods, which makes careful handling and consistent routines part of responsible raw
            feeding.
          </p>
        </section>

        {/* WHEN TO SEEK HELP */}
        <section id="when-to-seek-help" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">When to Seek Professional Help</h2>
          <p className="mb-4">
            There is a difference between a short adjustment and a situation that needs medical evaluation. If you are
            unsure, err on the side of safety. The cost of waiting is often higher than the cost of getting guidance
            early.
          </p>

          <h3 className="text-xl font-semibold mb-2">Seek veterinary help promptly if you see</h3>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>Repeated vomiting or inability to keep water down</li>
            <li>Blood in stool or black tar-like stool</li>
            <li>Signs of dehydration (dry gums, weakness, collapse)</li>
            <li>Severe abdominal pain, bloating, or repeated straining</li>
            <li>Suspected obstruction, choking episode, or broken tooth</li>
          </ul>

          <div className="rounded-lg border border-[#d9cfc2] p-4 bg-[#f6efe4] mb-4">
            <p className="text-sm mb-2">
              <strong>Most effective troubleshooting mindset:</strong> simplify, measure, and track. If you cannot
              confidently describe what changed in the last 7 days, you are changing too many variables.
            </p>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>One protein at a time</li>
              <li>Consistent portions by weight</li>
              <li>Stop treats and chews during symptoms</li>
              <li>Use a structured transition plan</li>
            </ul>
          </div>

          <p className="mb-4">
            If you want to rebuild your raw plan from the fundamentals, the comprehensive overview can help you choose
            a model that fits your dog and your household.
          </p>

          <p className="text-sm text-gray-700">
            Start here:{' '}
            <Link
              href={`/${locale}/blog/the-ultimate-guide-to-raw-dog-food`}
              className="underline font-medium hover:opacity-80"
            >
              The Ultimate Guide to Raw Dog Food
            </Link>
            .
          </p>
        </section>

        {/* SOURCES */}
        <section id="sources" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">📚 Sources &amp; Official References</h2>
          <p className="mb-4 text-sm text-gray-700">
            These sources reflect mainstream veterinary and public health perspectives on raw feeding risk, including
            contamination concerns and the importance of safe handling and nutritionally complete diets.
          </p>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            <li>
              CDC: Pet food safety and raw pet food guidance:{' '}
              <a
                href="https://www.cdc.gov/healthy-pets/about/pet-food-safety.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.cdc.gov/healthy-pets/about/pet-food-safety.html
              </a>
            </li>
            <li>
              FDA: Raw pet food diets can be dangerous to you and your pet:{' '}
              <a
                href="https://www.fda.gov/animal-veterinary/animal-health-literacy/get-facts-raw-pet-food-diets-can-be-dangerous-you-and-your-pet"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.fda.gov/animal-veterinary/animal-health-literacy/get-facts-raw-pet-food-diets-can-be-dangerous-you-and-your-pet
              </a>
            </li>
            <li>
              AVMA policy: Raw or undercooked animal-source protein in cat and dog diets:{' '}
              <a
                href="https://www.avma.org/resources-tools/avma-policies/raw-or-undercooked-animal-source-protein-cat-and-dog-diets"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.avma.org/resources-tools/avma-policies/raw-or-undercooked-animal-source-protein-cat-and-dog-diets
              </a>
            </li>
            <li>
              WSAVA: Statement on risks of raw meat-based diets (PDF):{' '}
              <a
                href="https://wsava.org/wp-content/uploads/2020/05/WSAVA-Global-Nutrition-Committee-Statement-on-Risks-of-Raw-Meat.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://wsava.org/wp-content/uploads/2020/05/WSAVA-Global-Nutrition-Committee-Statement-on-Risks-of-Raw-Meat.pdf
              </a>
            </li>
            <li>
              Review article (2025): Current evidence on raw meat diets in pets (PMC):{' '}
              <a
                href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11816250/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://pmc.ncbi.nlm.nih.gov/articles/PMC11816250/
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
