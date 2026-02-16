'use client';

import Head from 'next/head';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function HowToEvaluateRawFoodLabelsAndIngredients() {
  const locale = useLocale();

  const title = 'How to Evaluate Raw Food Labels & Ingredients (Avoid Hidden Risks)';
  const date = 'December 15, 2025';
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
    'A practical, evidence-based guide to reading raw dog food labels: ingredient lists vs formulation, misleading marketing terms, nutrient balance statements, red flags, and how to compare raw foods objectively.';

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
            <li><a href="#tldr" className="underline hover:opacity-80">TL;DR</a></li>
            <li><a href="#why-labels-mislead" className="underline hover:opacity-80">Why Labels Mislead</a></li>
            <li><a href="#ingredient-lists" className="underline hover:opacity-80">Ingredient Lists</a></li>
            <li><a href="#red-flags" className="underline hover:opacity-80">Red Flags</a></li>
            <li><a href="#marketing-terms" className="underline hover:opacity-80">Marketing Terms</a></li>
            <li><a href="#nutrient-statements" className="underline hover:opacity-80">Nutrient Balance</a></li>
            <li><a href="#compare-foods" className="underline hover:opacity-80">Comparing Foods</a></li>
            <li><a href="#transparency" className="underline hover:opacity-80">Transparency</a></li>
            <li><a href="#sources" className="underline hover:opacity-80">📚 Sources</a></li>
          </ul>
        </nav>

        {/* TL;DR */}
        <section id="tldr" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Short Answer (TL;DR)</h2>
          <p className="mb-4">
            Raw dog food labels often emphasize appealing ingredients while obscuring formulation details that actually
            determine safety and nutritional adequacy. Ingredient lists alone do not tell you whether a diet is balanced,
            appropriate for long-term feeding, or suitable for your dog. The most reliable indicators are nutrient
            balance statements, formulation transparency, and consistency across batches.
          </p>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Important note:</strong> This article is educational and not veterinary medical advice. Sudden diet
            changes, persistent digestive upset, or growth concerns should be discussed with your veterinarian.
          </div>
        </section>

        {/* WHY LABELS MISLEAD */}
        <section id="why-labels-mislead" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Why Raw Food Labels Can Be Misleading</h2>
          <p className="mb-4">
            Pet food labels are marketing tools first and educational tools second. This is especially true in the raw
            food category, where regulatory frameworks vary and visual appeal often replaces clarity.
          </p>
          <p className="mb-4">
            Many owners assume that a short, recognizable ingredient list automatically means the food is superior.
            In reality, a label can look clean while still producing an imbalanced or incomplete diet.
          </p>

          <h3 className="text-xl font-semibold mb-2">Common sources of confusion</h3>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>Ingredients listed by weight before processing</li>
            <li>Omission of micronutrient sourcing details</li>
            <li>Lack of clarity on whether the diet is complete or supplemental</li>
            <li>Visual branding that implies balance without stating it</li>
          </ul>

          <p className="mb-4">
            Understanding these limitations helps you read labels more critically rather than emotionally.
          </p>
        </section>

        {/* INGREDIENT LISTS */}
        <section id="ingredient-lists" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Ingredient Lists vs Actual Formulation</h2>
          <p className="mb-4">
            Ingredient lists show what is included, not how nutrients add up. Two foods with nearly identical ingredient
            lists can deliver very different calcium, phosphorus, fat, and trace mineral levels.
          </p>

          <h3 className="text-xl font-semibold mb-2">What ingredient lists do tell you</h3>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>Primary protein sources</li>
            <li>Presence of organs, bones, or plant matter</li>
            <li>Use of synthetic vitamins or minerals</li>
          </ul>

          <h3 className="text-xl font-semibold mb-2">What they do not tell you</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Whether nutrients meet established requirements</li>
            <li>Mineral ratios critical for long-term health</li>
            <li>Batch-to-batch consistency</li>
          </ul>

          <p className="mt-4">
            This distinction matters whether you are buying a commercial raw food or following a structured recipe.
          </p>

          <p className="text-sm text-gray-700">
            For owners preparing food at home, structured approaches are discussed here:{' '}
            <Link
              href={`/${locale}/blog/raw-dog-food-recipes-you-can-make-at-home`}
              className="underline font-medium hover:opacity-80"
            >
              Raw Dog Food Recipes: Safe Approaches
            </Link>
            .
          </p>
        </section>

        {/* RED FLAGS */}
        <section id="red-flags" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Red Flags on Raw Dog Food Labels</h2>
          <p className="mb-4">
            Some warning signs consistently show up in products that cause problems over time. These do not guarantee
            failure, but they should prompt closer scrutiny.
          </p>

          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>No statement indicating the food is complete and balanced</li>
            <li>Vague language such as &ldquo;for supplemental feeding only&rdquo; without explanation</li>
            <li>Heavy reliance on bone without disclosed calcium content</li>
            <li>No information on vitamin or mineral sourcing</li>
            <li>Inconsistent feeding instructions across products</li>
          </ul>

          <p className="mb-4">
            These issues are especially important when evaluating diets marketed as long-term solutions rather than
            occasional toppers.
          </p>
        </section>

        {/* MARKETING TERMS */}
        <section id="marketing-terms" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Marketing Terms That Commonly Mislead Consumers</h2>
          <p className="mb-4">
            Certain phrases appear frequently on raw food packaging because they sound reassuring, not because they
            guarantee nutritional quality.
          </p>

          <h3 className="text-xl font-semibold mb-2">Examples to read critically</h3>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li><strong>&ldquo;Human-grade&rdquo;:</strong> refers to ingredient handling, not nutrient balance</li>
            <li><strong>&ldquo;Biologically appropriate&rdquo;:</strong> not a regulated nutrition standard</li>
            <li><strong>&ldquo;Ancestral&rdquo; or &ldquo;species-appropriate&rdquo;:</strong> marketing language</li>
            <li><strong>&ldquo;No fillers&rdquo;:</strong> does not mean no deficiencies</li>
          </ul>

          <p className="mb-4">
            These terms can coexist with both excellent and poor formulations. They should never replace measurable
            nutrient data.
          </p>

          <p className="text-sm text-gray-700">
            Many of these claims overlap with popular feeding frameworks like BARF, which are explained in detail here:{' '}
            <Link
              href={`/${locale}/blog/barf-diet-explained`}
              className="underline font-medium hover:opacity-80"
            >
              BARF Diet for Dogs Explained
            </Link>
            .
          </p>
        </section>

        {/* NUTRIENT STATEMENTS */}
        <section id="nutrient-statements" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Why Nutrient Balance Statements Matter More Than Ingredients</h2>
          <p className="mb-4">
            A nutrient balance statement tells you whether the food is intended for complete, long-term feeding or only
            as a supplement. This distinction is one of the most important lines on the label.
          </p>

          <h3 className="text-xl font-semibold mb-2">What to look for</h3>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>Clear indication of complete and balanced status</li>
            <li>Life stage applicability (adult maintenance vs growth)</li>
            <li>Reference to recognized nutritional standards</li>
          </ul>

          <p className="mb-4">
            Absence of this information does not automatically make a food unsafe, but it does mean the burden of proof
            shifts to the consumer.
          </p>
        </section>

        {/* COMPARE FOODS */}
        <section id="compare-foods" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">How to Compare Two Raw Foods Objectively</h2>
          <p className="mb-4">
            When comparing raw foods, step away from branding and focus on comparable data points.
          </p>

          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>Calcium and phosphorus levels per calorie</li>
            <li>Declared vitamin and mineral supplementation</li>
            <li>Consistency of feeding guidelines</li>
            <li>Transparency about sourcing and formulation</li>
          </ul>

          <p className="mb-4">
            Brand reputation matters less than whether the company can explain how the food meets nutritional needs.
          </p>

          <p className="text-sm text-gray-700">
            For a side-by-side look at popular commercial options, see:{' '}
            <Link
              href={`/${locale}/blog/best-raw-dog-food-brands-reviewed`}
              className="underline font-medium hover:opacity-80"
            >
              Best Raw Dog Food Brands Reviewed
            </Link>
            .
          </p>
        </section>

        {/* TRANSPARENCY */}
        <section id="transparency" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">Why Transparency Matters More Than Branding</h2>
          <p className="mb-4">
            Transparent brands explain not just what is in the food, but why it is there and how it contributes to the
            overall nutrient profile. This builds trust and allows informed decision-making.
          </p>

          <h3 className="text-xl font-semibold mb-2">Signs of meaningful transparency</h3>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>Accessible nutrient analyses beyond marketing summaries</li>
            <li>Clear explanation of bone and mineral sourcing</li>
            <li>Willingness to discuss formulation methodology</li>
            <li>Consistent answers across customer support channels</li>
          </ul>

          <p className="mb-4">
            If you ever feel unsure, return to the broader framework and reassess the diet from first principles rather
            than chasing individual claims.
          </p>

          <p className="text-sm text-gray-700">
            Start with the comprehensive overview:{' '}
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
            These references reflect mainstream veterinary nutrition principles and labeling standards relevant to raw
            and minimally processed pet foods.
          </p>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            <li>AAFCO Official Publication: Pet Food Labeling Guide</li>
            <li>WSAVA Global Nutrition Committee Guidelines</li>
            <li>FDA: Pet Food Labeling and Ingredient Definitions</li>
            <li>JAVMA reviews on raw diets and nutrient balance</li>
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
