'use client';

import Head from 'next/head';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function RawDogFoodRecipesYouCanMakeAtHome() {
  const locale = useLocale();

  const title = 'Raw Dog Food Recipes You Can Make at Home (Balanced & Nutritious)';
  const date = 'December 8, 2025';
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
    'A practical, safety-first guide to homemade raw feeding: what a balanced recipe must include, simple meal frameworks, common supplements, portion sizing basics, and the risks of DIY feeding without formulation support.';

  return (
    <>
      <Head>
        <title>{title} – Petunia Blog</title>
        <meta name="description" content={description} />
        <meta name="robots" content="all" />
        <link
          rel="canonical"
          href={`https://www.petuniapets.com/${locale}/blog/raw-dog-food-recipes-you-can-make-at-home`}
        />
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
              <a href="#non-negotiables" className="underline hover:opacity-80">
                Balanced Recipe Basics
              </a>
            </li>
            <li>
              <a href="#macro-balance" className="underline hover:opacity-80">
                Protein, Organ, Bone, Fat
              </a>
            </li>
            <li>
              <a href="#frameworks" className="underline hover:opacity-80">
                Meal Frameworks
              </a>
            </li>
            <li>
              <a href="#supplements" className="underline hover:opacity-80">
                Supplements
              </a>
            </li>
            <li>
              <a href="#portion-sizing" className="underline hover:opacity-80">
                Portion Sizing
              </a>
            </li>
            <li>
              <a href="#long-term-risks" className="underline hover:opacity-80">
                Long-Term Risks
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
            Homemade raw can be done well, but it is not as simple as tossing meat in a bowl. A balanced raw recipe must
            reliably cover calories, protein, fat, calcium and phosphorus balance, and key micronutrients (like iodine,
            zinc, and vitamin D). The safest DIY approach is to follow a repeatable meal framework, use a scale, keep
            food handling strict, and understand that supplements are often required. If you want the lowest-risk path,
            consider a complete-and-balanced commercial raw diet instead of improvising long term.
          </p>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Important note:</strong> This article is educational and not veterinary medical advice. Puppies,
            pregnant dogs, dogs with chronic disease, and households with higher-risk people should get professional
            guidance before feeding homemade raw.
          </div>
        </section>

        {/* BALANCED RECIPE BASICS */}
        <section id="non-negotiables" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">What a Balanced Homemade Raw Recipe Must Meet</h2>
          <p className="mb-4">
            The most common DIY mistake is building meals around what looks healthy instead of what is nutritionally
            complete. A &ldquo;balanced&rdquo; recipe is one your dog can eat day after day without drifting into
            deficiency or excess.
          </p>

          <div className="rounded-lg border border-[#d9cfc2] p-4 bg-[#f6efe4] mb-4">
            <p className="text-sm mb-2">
              <strong>Non-negotiables for long-term homemade feeding:</strong>
            </p>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>
                <strong>Energy balance:</strong> calories match your dog&rsquo;s needs so weight stays stable.
              </li>
              <li>
                <strong>Mineral balance:</strong> calcium and phosphorus are in a safe range (especially critical).
              </li>
              <li>
                <strong>Essential fatty acids:</strong> particularly omega-3 sources over time.
              </li>
              <li>
                <strong>Micronutrients:</strong> iodine, zinc, selenium, copper, vitamin D, and vitamin E often require attention.
              </li>
              <li>
                <strong>Consistency:</strong> the plan is repeatable, not random.
              </li>
            </ul>
          </div>

          <p className="mb-4">
            If you are new to raw feeding, you will get more value by understanding the overall model first, then
            deciding whether DIY is realistic for your household and schedule.
          </p>

          <p className="text-sm text-gray-700">
            Start with the full overview here:{' '}
            <Link
              href={`/${locale}/blog/the-ultimate-guide-to-raw-dog-food`}
              className="underline font-medium hover:opacity-80"
            >
              The Ultimate Guide to Raw Dog Food
            </Link>
            .
          </p>
        </section>

        {/* MACRO BALANCE */}
        <section id="macro-balance" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Protein, Organ, Bone, and Fat Balance (Explained Simply)</h2>
          <p className="mb-4">
            Most homemade raw plans are built from four core building blocks. Getting the categories right is the first
            step. Getting the amounts right is the second step.
          </p>

          <h3 className="text-xl font-semibold mb-2">Muscle meat (the base)</h3>
          <p className="mb-4">
            Muscle meat is where most calories and protein come from. The fat level can vary a lot between cuts, which
            is one reason stool and weight can change quickly during DIY feeding.
          </p>

          <h3 className="text-xl font-semibold mb-2">Organs (powerful, but easy to overdo)</h3>
          <p className="mb-4">
            Organs provide important micronutrients. The most common pitfall is &ldquo;more organ must be better,&rdquo;
            which can overshoot certain nutrients over time. A consistent plan is safer than rotating huge organ amounts
            randomly.
          </p>

          <h3 className="text-xl font-semibold mb-2">Edible bone (where mineral balance can go wrong)</h3>
          <p className="mb-4">
            Bone is often used as a calcium source. Too little can create deficiency. Too much can create constipation,
            overly hard stools, and long-term mineral imbalance. Bone also introduces safety considerations beyond
            nutrition.
          </p>

          <h3 className="text-xl font-semibold mb-2">Fat (energy, skin, coat, and tolerance)</h3>
          <p className="mb-4">
            Some dogs tolerate higher fat easily. Others do not. A DIY plan should be consistent enough that you can
            adjust fat intentionally instead of accidentally changing it meal to meal.
          </p>

          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Reality check:</strong> Ratios are a starting framework, not proof of nutritional completeness. The
            same ratio can be balanced for one dog and problematic for another depending on ingredient choices and
            supplements.
          </div>
        </section>

        {/* FRAMEWORKS */}
        <section id="frameworks" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Sample Balanced Raw Meal Frameworks (Not Just Ingredient Lists)</h2>
          <p className="mb-4">
            The goal of a framework is repeatability. Ingredient lists without structure often lead to random meals,
            which is how imbalance happens over time. Use these as planning templates and keep changes slow and tracked.
          </p>

          <h3 className="text-xl font-semibold mb-2">Framework A: Beginner &ldquo;single protein, simple plan&rdquo;</h3>
          <div className="rounded-lg border border-[#d9cfc2] p-4 bg-[#f6efe4] mb-4">
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li><strong>Choose one protein</strong> for 2–4 weeks (consistency first).</li>
              <li><strong>Build meals from the same set of components</strong> each week.</li>
              <li><strong>Use a scale</strong> so portions do not drift.</li>
              <li><strong>Add only one new variable at a time</strong> (new protein, new organ, or new supplement).</li>
            </ul>
          </div>

          <h3 className="text-xl font-semibold mb-2">Framework B: BARF-style structure (for owners who want plants included)</h3>
          <p className="mb-4">
            A BARF approach typically includes a plant mix alongside animal ingredients. This can be a useful structure,
            but it still requires mineral and micronutrient planning. Vegetables do not automatically solve mineral
            gaps.
          </p>

          <div className="rounded-lg border border-[#d9cfc2] p-4 bg-[#f6efe4] mb-4">
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li><strong>Animal base:</strong> muscle meat plus a controlled organ plan.</li>
              <li><strong>Calcium plan:</strong> edible bone in a consistent, measured way (or a professional alternative).</li>
              <li><strong>Plant mix:</strong> a small, repeatable blend for fiber and variety (optional, depending on your plan).</li>
              <li><strong>Omega-3 plan:</strong> consistent source over time (do not rely on meat alone).</li>
            </ul>
          </div>

          <p className="text-sm text-gray-700">
            If you want a beginner-focused explanation of BARF, read:{' '}
            <Link href={`/${locale}/blog/barf-diet-explained`} className="underline font-medium hover:opacity-80">
              BARF Diet Explained: The Complete Beginner&rsquo;s Guide
            </Link>
            .
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-2">Framework C: &ldquo;weekly batching&rdquo; to reduce handling and mistakes</h3>
          <p className="mb-4">
            Many owners fail DIY raw because daily prep becomes chaotic. Weekly batching reduces handling steps, which
            improves hygiene and consistency.
          </p>

          <ul className="list-disc pl-5 space-y-1">
            <li>Choose a weekly menu and portion the full week at once.</li>
            <li>Label portions and thaw in the fridge on a schedule.</li>
            <li>Keep your dog on a stable plan before adding variety.</li>
          </ul>

          <p className="mt-4 text-sm text-gray-700">
            For food-handling practices that keep risk lower, read:{' '}
            <Link href={`/${locale}/blog/raw-dog-food-safety`} className="underline font-medium hover:opacity-80">
              Raw Dog Food Safety: How to Handle &amp; Prepare Raw Diets Without Risk
            </Link>
            .
          </p>
        </section>

        {/* SUPPLEMENTS */}
        <section id="supplements" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Supplements Commonly Needed in Homemade Raw Diets</h2>
          <p className="mb-4">
            Supplements are not a sign you are doing something wrong. They are often how homemade diets cover nutrients
            that are hard to hit consistently with ingredients alone. The exact needs depend on the recipe, the dog, and
            the ingredients used.
          </p>

          <div className="rounded-lg border border-[#d9cfc2] p-4 bg-[#f6efe4] mb-4">
            <p className="text-sm mb-2">
              <strong>Common &ldquo;watch list&rdquo; nutrients in DIY feeding:</strong>
            </p>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li><strong>Calcium and phosphorus:</strong> the foundation that must be right.</li>
              <li><strong>Iodine:</strong> often missed unless there is a consistent iodine plan.</li>
              <li><strong>Zinc and copper:</strong> can be low depending on ingredient choices.</li>
              <li><strong>Vitamin D:</strong> easy to miss in many homemade patterns.</li>
              <li><strong>Vitamin E:</strong> may need attention, especially when adding certain fats over time.</li>
              <li><strong>Omega-3 fatty acids:</strong> consistency matters more than occasional additions.</li>
            </ul>
          </div>

          <p className="mb-4">
            The safest strategy is to avoid &ldquo;supplement stacking&rdquo; based on social media. Adding multiple
            powders and oils without a plan can overshoot nutrients just as easily as it can fill gaps.
          </p>

          <ul className="list-disc pl-5 space-y-1">
            <li>Use fewer supplements, but use them consistently and intentionally.</li>
            <li>Change one thing at a time so you can track stool and tolerance.</li>
            <li>If you feel unsure, that is a signal to seek formulation support.</li>
          </ul>
        </section>

        {/* PORTION SIZING */}
        <section id="portion-sizing" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Portion Sizing by Weight, Age, and Activity Level</h2>
          <p className="mb-4">
            Portion sizing is not one-size-fits-all. Most owners do best when they start with a conservative baseline,
            then adjust based on body condition and weekly weight trends.
          </p>

          <div className="rounded-lg border border-[#d9cfc2] p-4 bg-[#f6efe4] mb-4">
            <p className="text-sm mb-2">
              <strong>Simple portioning approach (owner-friendly):</strong>
            </p>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>
                <strong>Start with your dog&rsquo;s ideal weight, not current weight</strong> (if your dog is overweight).
              </li>
              <li>
                <strong>Measure daily food by weight</strong> using a scale and keep it consistent for 7–10 days.
              </li>
              <li>
                <strong>Adjust slowly</strong> based on body condition and weekly trend, not day-to-day fluctuation.
              </li>
              <li>
                <strong>Puppies:</strong> do not guess. Growth nutrition is unforgiving and needs professional oversight.
              </li>
            </ul>
          </div>

          <p className="mb-4">
            Activity matters, too. A highly active dog may need more calories than a sedentary dog of the same weight.
            Seniors often need fewer calories and may need a plan that is gentler on digestion.
          </p>

          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Weight gain:</strong> increase calories modestly and track weekly.</li>
            <li><strong>Weight loss:</strong> reduce calories modestly and prioritize protein quality.</li>
            <li><strong>Loose stool:</strong> avoid rapid changes and simplify the plan.</li>
          </ul>

          <p className="mt-4 mb-4">
            If budget is the reason you are considering DIY, it helps to look at the full cost picture, including
            freezer space, supplements, and the time spent prepping.
          </p>

          <p className="text-sm text-gray-700">
            Cost trade-offs are covered here:{' '}
            <Link href={`/${locale}/blog/is-raw-dog-food-worth-the-cost`} className="underline font-medium hover:opacity-80">
              Is Raw Dog Food Worth the Cost?
            </Link>
            .
          </p>
        </section>

        {/* LONG-TERM RISKS */}
        <section id="long-term-risks" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Risks of Long-Term DIY Feeding Without Formulation Support</h2>
          <p className="mb-4">
            The risk of DIY feeding is rarely obvious in week one. It is the slow drift over months that matters most.
            Dogs can look fine until a deficiency or excess becomes clinically meaningful.
          </p>

          <div className="rounded-lg border border-[#d9cfc2] p-4 bg-[#f6efe4] mb-4">
            <p className="text-sm mb-2">
              <strong>Common long-term DIY failure patterns:</strong>
            </p>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Portions gradually change because meals are eyeballed instead of weighed.</li>
              <li>Bone and organ amounts drift over time, shifting mineral and vitamin exposure.</li>
              <li>Supplements are added inconsistently, which defeats the point of the plan.</li>
              <li>Owners rotate too many proteins too quickly and digestion never stabilizes.</li>
              <li>Labels and marketing claims are misunderstood, leading to incomplete diets being used as full diets.</li>
            </ul>
          </div>

          <p className="mb-4">
            If you buy commercial raw products as part of your DIY routine, knowing how to read labels can prevent major
            mistakes (like feeding an &ldquo;intermittent or supplemental&rdquo; product as the main diet).
          </p>

          <p className="text-sm text-gray-700">
            Learn how to evaluate labels here:{' '}
            <Link
              href={`/${locale}/blog/how-to-evaluate-raw-food-labels-and-ingredients`}
              className="underline font-medium hover:opacity-80"
            >
              How to Evaluate Raw Food Labels &amp; Ingredients
            </Link>
            .
          </p>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">Frequently Asked Questions</h2>

          <p className="mb-3">
            <strong>Can I use online recipes I find for free?</strong>
            <br />
            Some free recipes are thoughtful, but many are not formulated to meet nutrient needs long term. If you use a
            recipe, choose one with clear structure, consistent portions, and a plan for minerals and micronutrients.
            If anything feels vague, that is a red flag.
          </p>

          <p className="mb-3">
            <strong>Is it okay to improvise different meals every day?</strong>
            <br />
            Improvisation is where drift happens. A repeatable framework makes it easier to stay consistent, track stool
            and weight, and adjust intentionally.
          </p>

          <p className="mb-3">
            <strong>Do I need to use bone?</strong>
            <br />
            Many homemade raw plans use bone for calcium, but bone introduces safety and stool issues if it is used
            incorrectly. If you remove bone, you still need a reliable calcium plan. Do not guess.
          </p>

          <p>
            <strong>What is the simplest alternative to DIY raw?</strong>
            <br />
            For many households, a complete-and-balanced commercial raw diet is a simpler and lower-risk way to explore
            raw feeding without managing every nutrient yourself.
          </p>
        </section>

        {/* SOURCES */}
        <section id="sources" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">📚 Sources &amp; References (Selected)</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            <li>
              WSAVA global nutrition guidelines (owner-facing diet evaluation concepts):{' '}
              <a
                href="https://wsava.org/global-guidelines/global-nutrition-guidelines/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://wsava.org/global-guidelines/global-nutrition-guidelines/
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
            <li>
              AVMA policy on raw or undercooked animal-source protein diets:{' '}
              <a
                href="https://www.avma.org/resources-tools/avma-policies/raw-or-undercooked-animal-source-protein-cat-and-dog-diets"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.avma.org/resources-tools/avma-policies/raw-or-undercooked-animal-source-protein-cat-and-dog-diets
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
