'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function RawFoodDietProsAndCons() {
  const locale = useLocale();

  const title = 'Raw Food Diet Pros & Cons: What Science and Vets Say';
  const date = 'December 5, 2025';
  const categories = ['owner', 'food'] as const;

  const categoryLabels: Record<string, string> = {
    owner: 'Pet Owners',
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

        {/* Anchor nav */}
        <nav className="mb-8 text-sm">
          <ul className="flex flex-wrap gap-3">
            <li><a href="#tldr" className="underline hover:opacity-80">TL;DR</a></li>
            <li><a href="#claimed-benefits" className="underline hover:opacity-80">Claimed Benefits</a></li>
            <li><a href="#what-science-says" className="underline hover:opacity-80">What Science Says</a></li>
            <li><a href="#vet-concerns" className="underline hover:opacity-80">Veterinary Concerns</a></li>
            <li><a href="#nutrition-risks" className="underline hover:opacity-80">Nutrition Risks</a></li>
            <li><a href="#why-opinions-differ" className="underline hover:opacity-80">Why Opinions Differ</a></li>
            <li><a href="#decision-framework" className="underline hover:opacity-80">How to Decide</a></li>
            <li><a href="#faq" className="underline hover:opacity-80">FAQ</a></li>
            <li><a href="#sources" className="underline hover:opacity-80">📚 Sources</a></li>
          </ul>
        </nav>

        {/* TL;DR */}
        <section id="tldr" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Short Answer (TL;DR)</h2>
          <p className="mb-4">
            Raw feeding has potential upsides for some dogs, but many popular claims are supported more by owner reports
            than by controlled research. The biggest, best-documented risks are nutritional imbalance and food-safety
            exposure when diets are poorly designed or handled. Veterinary opinions differ because raw diets sit at the
            intersection of nutrition science, public health, and real-world owner behavior. A thoughtful decision
            weighs evidence, household risk, and the owner&rsquo;s ability to execute the diet correctly.
          </p>
        </section>

        {/* CLAIMED BENEFITS */}
        <section id="claimed-benefits" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Commonly Claimed Benefits of Raw Feeding</h2>
          <p className="mb-4">
            Owners who switch to raw diets often report noticeable changes, especially in the first weeks or months.
            These observations are real experiences, but they are not the same thing as controlled scientific proof.
          </p>

          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li><strong>Improved stool quality:</strong> Smaller, firmer stools are frequently reported.</li>
            <li><strong>Coat and skin changes:</strong> Some owners notice shinier coats or reduced itching.</li>
            <li><strong>Increased enthusiasm for meals:</strong> Palatability can be high for many dogs.</li>
            <li><strong>Dental effects:</strong> Chewing certain raw items may reduce visible plaque for some dogs.</li>
            <li><strong>Perceived energy or vitality:</strong> Often reported, but difficult to measure objectively.</li>
          </ul>

          <p className="text-sm text-gray-700">
            Many of these improvements can also occur when switching from a poorly tolerated diet to a more digestible
            one, regardless of whether it is raw, cooked, or fresh.
          </p>
        </section>

        {/* WHAT SCIENCE SAYS */}
        <section id="what-science-says" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">What Scientific Research Actually Supports (and What It Does Not)</h2>
          <p className="mb-4">
            Research on raw feeding is limited compared with research on commercial kibble diets. Most studies focus on
            nutrient composition, digestibility, and microbial risk rather than long-term health outcomes.
          </p>

          <h3 className="text-xl font-semibold mb-2">Areas with some supporting evidence</h3>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>Digestibility of certain raw ingredients can be high.</li>
            <li>Stool volume may decrease due to lower fiber content.</li>
            <li>Chewing activity can mechanically reduce plaque on some teeth.</li>
          </ul>

          <h3 className="text-xl font-semibold mb-2">Areas without strong evidence</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Long-term disease prevention or lifespan extension.</li>
            <li>Superior immune function compared to balanced cooked diets.</li>
            <li>Broad claims of detoxification or disease reversal.</li>
          </ul>

          <p className="mt-4 text-sm text-gray-700">
            A broader comparison of feeding styles is covered here:{' '}
            <Link
              href={`/${locale}/blog/raw-food-vs-kibble-vs-fresh-food`}
              className="underline font-medium hover:opacity-80"
            >
              Raw Food vs. Kibble vs. Fresh Food
            </Link>
            .
          </p>
        </section>

        {/* VET CONCERNS */}
        <section id="vet-concerns" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Veterinary Concerns Commonly Raised About Raw Diets</h2>
          <p className="mb-4">
            Many veterinarians approach raw feeding cautiously. This stance is not typically based on ideology, but on
            patterns seen in clinical practice and public health guidance.
          </p>

          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>Risk of bacterial exposure to people and other pets.</li>
            <li>Calcium and phosphorus imbalance, especially in puppies.</li>
            <li>Micronutrient deficiencies or excesses in homemade plans.</li>
            <li>Bone-related injuries such as fractures or obstruction.</li>
            <li>Difficulty monitoring consistency when owners modify recipes.</li>
          </ul>

          <p className="text-sm text-gray-700">
            A deeper look at how veterinarians approach this topic is covered in:{' '}
            <Link
              href={`/${locale}/blog/veterinary-perspectives-on-raw-diets`}
              className="underline font-medium hover:opacity-80"
            >
              Veterinary Perspectives on Raw Diets
            </Link>
            .
          </p>
        </section>

        {/* NUTRITION RISKS */}
        <section id="nutrition-risks" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Nutritional Imbalance: The Most Consistent Risk</h2>
          <p className="mb-4">
            The most well-documented problem with raw diets is not bacteria. It is imbalance. Dogs can look healthy
            while quietly drifting into deficiency or excess, particularly with minerals and fat-soluble vitamins.
          </p>

          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>Calcium deficiency or excess can affect bones and joints.</li>
            <li>Vitamin A excess can occur with heavy organ use.</li>
            <li>Iodine and zinc are commonly missed in homemade plans.</li>
            <li>Energy density may not match activity level, leading to weight changes.</li>
          </ul>

          <p className="text-sm text-gray-700">
            Safety practices and food handling are discussed in detail here:{' '}
            <Link
              href={`/${locale}/blog/raw-dog-food-safety`}
              className="underline font-medium hover:opacity-80"
            >
              Raw Dog Food Safety: How to Handle &amp; Prepare Raw Diets Without Risk
            </Link>
            .
          </p>
        </section>

        {/* WHY OPINIONS DIFFER */}
        <section id="why-opinions-differ" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Why Professional Opinions Differ So Widely</h2>
          <p className="mb-4">
            Raw feeding sits in a gray area where strong personal experiences meet limited long-term data. Veterinarians
            are trained to prioritize population-level safety and evidence, while owners experience individual outcomes
            with their own dogs.
          </p>

          <ul className="list-disc pl-5 space-y-1">
            <li>Research gaps leave room for interpretation.</li>
            <li>Clinical experience varies by practice type and caseload.</li>
            <li>Owner compliance and execution quality differ dramatically.</li>
            <li>Public health guidance emphasizes worst-case scenarios.</li>
          </ul>
        </section>

        {/* DECISION FRAMEWORK */}
        <section id="decision-framework" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">How Owners Can Make Evidence-Informed Decisions</h2>
          <p className="mb-4">
            A responsible decision is not about choosing a &ldquo;side.&rdquo; It is about matching a feeding approach
            to your dog, your household, and your ability to execute the plan safely and consistently.
          </p>

          <ol className="list-decimal pl-6 space-y-1 mb-4">
            <li>Separate anecdote from evidence.</li>
            <li>Assess household risk honestly.</li>
            <li>Prioritize nutritional completeness over philosophy.</li>
            <li>Re-evaluate regularly using body condition and veterinary input.</li>
          </ol>

          <p className="text-sm text-gray-700">
            For the broader framework and definitions, start here:{' '}
            <Link
              href={`/${locale}/blog/the-ultimate-guide-to-raw-dog-food`}
              className="underline font-medium hover:opacity-80"
            >
              The Ultimate Guide to Raw Dog Food
            </Link>
            .
          </p>

          <p className="mt-2 text-sm text-gray-700">
            Cost considerations are addressed separately in:{' '}
            <Link
              href={`/${locale}/blog/is-raw-dog-food-worth-the-cost`}
              className="underline font-medium hover:opacity-80"
            >
              Is Raw Dog Food Worth the Cost?
            </Link>
            .
          </p>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">Frequently Asked Questions</h2>

          <p className="mb-3">
            <strong>Do vets oppose raw diets across the board?</strong><br />
            No. Opinions vary widely. Many vets are cautious due to public health and nutrition risks, while some support
            raw feeding when it is professionally formulated and carefully managed.
          </p>

          <p className="mb-3">
            <strong>Are owner-reported benefits meaningless?</strong><br />
            No. They are valuable observations, but they do not replace controlled research when evaluating long-term
            safety and effectiveness.
          </p>

          <p>
            <strong>What is the lowest-risk way to try raw?</strong><br />
            Many owners begin with a reputable complete-and-balanced commercial option, then reassess with veterinary
            guidance before considering homemade plans.
          </p>
        </section>

        {/* SOURCES */}
        <section id="sources" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">📚 Sources &amp; References (Selected)</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            <li>
              AVMA policy on raw animal-source protein diets:{' '}
              <a
                href="https://www.avma.org/resources-tools/avma-policies/raw-or-undercooked-animal-source-protein-cat-and-dog-diets"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.avma.org/resources-tools/avma-policies/raw-or-undercooked-animal-source-protein-cat-and-dog-diets
              </a>
            </li>
            <li>
              WSAVA global nutrition guidelines:{' '}
              <a
                href="https://wsava.org/global-guidelines/global-nutrition-guidelines/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://wsava.org/global-guidelines/global-nutrition-guidelines/
              </a>
            </li>
            <li>
              FDA guidance on pet food handling and safety:{' '}
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
