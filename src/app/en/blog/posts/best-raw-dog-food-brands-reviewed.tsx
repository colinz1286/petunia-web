'use client';

import Head from 'next/head';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function BestRawDogFoodBrandsReviewed() {
  const locale = useLocale();

  const title = 'Best Raw Dog Food Brands Reviewed (Current Year Edition)';
  const date = 'December 10, 2025';
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
    'A credibility-first guide to evaluating raw dog food brands: sourcing, transparency, AAFCO statements, safety steps like HPP and third-party testing, cost/value trade-offs, and who commercial raw fits best.';

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
              <a href="#how-to-evaluate" className="underline hover:opacity-80">
                How to Evaluate Brands
              </a>
            </li>
            <li>
              <a href="#transparency-sourcing" className="underline hover:opacity-80">
                Sourcing &amp; Transparency
              </a>
            </li>
            <li>
              <a href="#aafco" className="underline hover:opacity-80">
                AAFCO &amp; Formulation
              </a>
            </li>
            <li>
              <a href="#safety" className="underline hover:opacity-80">
                Safety Practices
              </a>
            </li>
            <li>
              <a href="#brand-roundup" className="underline hover:opacity-80">
                Brand Roundup
              </a>
            </li>
            <li>
              <a href="#cost-value" className="underline hover:opacity-80">
                Cost &amp; Value
              </a>
            </li>
            <li>
              <a href="#who-commercial-fits" className="underline hover:opacity-80">
                Who Commercial Raw Fits
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
            The best raw dog food brand is the one that is transparent, consistently formulated for your dog&rsquo;s life
            stage, and realistic for your routine. Prioritize a clear &ldquo;complete and balanced&rdquo; nutrition
            statement (and the life stage it applies to), straightforward feeding directions, and documented safety
            practices like lot tracking and pathogen mitigation steps. If you cannot maintain strict storage and
            sanitation habits, commercial raw is usually safer than DIY because it reduces handling and measurement
            errors.
          </p>

          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Important note:</strong> This guide is educational and not veterinary medical advice. If your dog is a
            puppy, has chronic GI disease, or your household includes higher-risk people (very young, elderly, pregnant,
            or immunocompromised), talk with your veterinarian before feeding raw.
          </div>
        </section>

        {/* HOW TO EVALUATE */}
        <section id="how-to-evaluate" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">How to Evaluate Raw Dog Food Brands Objectively</h2>
          <p className="mb-4">
            Brand lists on the internet often mix marketing, personal preference, and incomplete criteria. A better
            approach is to score each brand on the same checklist. You are looking for repeatable signals of quality,
            not hype.
          </p>

          <div className="rounded-lg border border-[#d9cfc2] p-4 bg-[#f6efe4] mb-4">
            <p className="text-sm mb-2">
              <strong>Owner-first evaluation checklist:</strong>
            </p>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>
                <strong>Nutrition statement:</strong> Does it clearly say complete and balanced for a specific life stage?
              </li>
              <li>
                <strong>Feeding directions:</strong> Are portions stated clearly, with a practical table or instructions?
              </li>
              <li>
                <strong>Transparency:</strong> Do they explain ingredients, sourcing, and contact information plainly?
              </li>
              <li>
                <strong>Safety steps:</strong> Do they describe pathogen mitigation and lot tracking or testing?
              </li>
              <li>
                <strong>Consistency:</strong> Do formulas and instructions stay stable, or do they change often?
              </li>
              <li>
                <strong>Fit:</strong> Frozen vs freeze-dried, subscription vs retail, and your storage capacity.
              </li>
            </ul>
          </div>

          <p className="mb-4">
            If you want the full context on why raw feeding is debated (and what evidence does and does not show), read:{' '}
            <Link
              href={`/${locale}/blog/raw-food-diet-pros-and-cons`}
              className="underline font-medium hover:opacity-80"
            >
              Raw Food Diet Pros &amp; Cons: What Science and Vets Say
            </Link>
            .
          </p>
        </section>

        {/* SOURCING & TRANSPARENCY */}
        <section id="transparency-sourcing" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Ingredient Sourcing and Transparency: What Actually Matters</h2>
          <p className="mb-4">
            &ldquo;High quality&rdquo; is not a measurable claim by itself. Transparency is more useful than buzzwords.
            A trustworthy brand should make it easy to answer basic questions without a scavenger hunt.
          </p>

          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>Where is the food made (and is that stated clearly)?</li>
            <li>Can you find an ingredient list without downloading a marketing PDF?</li>
            <li>Do they tell you whether the product is a full diet or meant as a topper?</li>
            <li>Do they provide lot numbers and a way to identify product batches?</li>
            <li>Do they explain how they reduce pathogen risk in raw products?</li>
          </ul>

          <p className="mb-4">
            Transparency also helps you compare two products that both look premium on the front of the bag.
            Marketing can hide major differences in formulation intent.
          </p>

          <p className="text-sm text-gray-700">
            For a deeper, step-by-step label walkthrough, read:{' '}
            <Link
              href={`/${locale}/blog/how-to-evaluate-raw-food-labels-and-ingredients`}
              className="underline font-medium hover:opacity-80"
            >
              How to Evaluate Raw Food Labels &amp; Ingredients
            </Link>
            .
          </p>
        </section>

        {/* AAFCO */}
        <section id="aafco" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Formulation Standards and AAFCO Alignment (How to Read the Signal)</h2>
          <p className="mb-4">
            In the U.S., the most practical nutrition signal for owners is the nutritional adequacy statement. It is the
            part of the label that tells you whether a food is intended to be complete and balanced, and for which life
            stage. AAFCO explains how these standardized statements are used on labels and why they matter for comparing
            products.{' '}
            <span className="text-gray-700">
              (This is also why a &ldquo;toppers only&rdquo; raw product can look amazing but still be the wrong choice as
              the main diet.)
            </span>
          </p>

          <div className="rounded-lg border border-[#d9cfc2] p-4 bg-[#f6efe4] mb-4">
            <p className="text-sm mb-2">
              <strong>Quick AAFCO sanity checks:</strong>
            </p>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>
                Look for the words <strong>complete and balanced</strong> and the <strong>life stage</strong> (adult
                maintenance, growth, or all life stages).
              </li>
              <li>
                Confirm the food is intended as the main diet (not intermittent or supplemental).
              </li>
              <li>
                Make sure feeding directions are present and practical to follow.
              </li>
            </ul>
          </div>

          <p className="text-sm text-gray-700">
            If you are new to raw feeding and want the full vocabulary and decision framework, start here:{' '}
            <Link
              href={`/${locale}/blog/the-ultimate-guide-to-raw-dog-food`}
              className="underline font-medium hover:opacity-80"
            >
              The Ultimate Guide to Raw Dog Food
            </Link>
            .
          </p>
        </section>

        {/* SAFETY */}
        <section id="safety" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Safety Practices: HPP, Sourcing, and Testing (What to Look For)</h2>
          <p className="mb-4">
            Raw diets can pose cross-contamination risk in the home, which is why handling practices matter. AAFCO notes
            that raw products raise concerns about bacterial cross-contamination, especially for higher-risk people in
            the household. Some brands describe additional pathogen mitigation steps such as high pressure processing
            (HPP), along with quality systems like lot testing and &ldquo;test and hold&rdquo; approaches.
          </p>

          <div className="rounded-lg border border-[#d9cfc2] p-4 bg-[#f6efe4] mb-4">
            <p className="text-sm mb-2">
              <strong>Safety signals worth valuing:</strong>
            </p>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Clear storage and thawing instructions (and packaging that reduces leaks).</li>
              <li>Lot numbers and a recall communication system.</li>
              <li>Third-party testing or an explained quality system (such as test and hold).</li>
              <li>Pathogen mitigation steps explained in plain language (some brands cite HPP).</li>
              <li>Transparency about where products are made and how they are handled before shipping.</li>
            </ul>
          </div>

          <p className="mb-4">
            Remember: brand safety steps do not replace safe handling at home. If you feed raw, your kitchen routine is
            part of the system.
          </p>

          <p className="text-sm text-gray-700">
            If you want a practical kitchen routine and household risk guide, read:{' '}
            <Link
              href={`/${locale}/blog/raw-dog-food-safety`}
              className="underline font-medium hover:opacity-80"
            >
              Raw Dog Food Safety: How to Handle &amp; Prepare Raw Diets Without Risk
            </Link>
            .
          </p>
        </section>

        {/* BRAND ROUNDUP */}
        <section id="brand-roundup" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Brand Roundup: Reputable Options to Compare</h2>
          <p className="mb-4">
            The goal of this section is not to declare one universally &ldquo;perfect&rdquo; brand. It is to give you a
            practical shortlist of widely discussed commercial raw options, then show you exactly what to verify before
            buying. Availability varies by region, and formulas can change, so always confirm the current label
            statement and feeding directions on the specific product you plan to purchase.
          </p>

          <h3 className="text-xl font-semibold mb-2">Frozen raw (common for daily feeding)</h3>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li className="text-sm">
              <strong>Viva Raw:</strong> Frequently referenced in consumer reviews and tested lists (including a 2025
              Forbes Vetted roundup). Verify the specific recipe&rsquo;s life-stage statement and whether it is complete
              and balanced for your dog.{' '}
              <span className="text-gray-700">
                (Some brands also offer different lines or formats that may not all be intended as full diets.)
              </span>
            </li>
            <li className="text-sm">
              <strong>We Feed Raw:</strong> Subscription-style frozen raw commonly discussed as complete and balanced,
              with clear portion guidance. Confirm storage, shipping, and how the brand communicates quality and safety.
            </li>
            <li className="text-sm">
              <strong>Maev:</strong> A frozen raw option marketed as a full diet in some product formats. Confirm the
              nutrition statement for the specific product you are considering and match it to your dog&rsquo;s life stage.
            </li>
          </ul>

          <h3 className="text-xl font-semibold mb-2">Freeze-dried raw (convenience and travel-friendly)</h3>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li className="text-sm">
              <strong>Stella &amp; Chewy&rsquo;s:</strong> Frequently included in freeze-dried best-of lists and widely
              available. The brand describes pathogen mitigation using HPP and also describes a test-and-hold style
              quality process for batches. Verify the nutrition statement and feeding directions on the exact product.
            </li>
            <li className="text-sm">
              <strong>Primal:</strong> Often included in freeze-dried lists and widely available in independent pet
              retail. The brand describes HPP as part of pathogen mitigation for certain raw products. Verify the life
              stage and whether the product is a full diet vs a supplemental option.
            </li>
            <li className="text-sm">
              <strong>Instinct (Fresh &amp; Frozen line):</strong> A widely distributed brand with frozen raw and other
              formats, often labeled as complete and balanced on specific products. Confirm the statement for your dog&rsquo;s life stage.
            </li>
          </ul>

          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>How to use this list:</strong> Pick 2–3 brands you can actually buy consistently, then compare them
            using the checklist above. Your best option is usually the one you can feed reliably with clear labeling,
            predictable storage, and a routine you can maintain.
          </div>
        </section>

        {/* COST & VALUE */}
        <section id="cost-value" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Cost Comparison and Value Assessment</h2>
          <p className="mb-4">
            Raw food is often more expensive than premium kibble, but cost is not just the price per bag. Real value is a
            combination of nutrition clarity, safety steps, convenience, and how reliably your dog does on the diet.
          </p>

          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>
              <strong>Frozen raw:</strong> Often higher ongoing cost, plus freezer space and shipping considerations.
            </li>
            <li>
              <strong>Freeze-dried raw:</strong> Often higher per-calorie cost, but easier storage and travel convenience.
            </li>
            <li>
              <strong>Retail availability:</strong> Can reduce shipping cost, but selection may vary locally.
            </li>
          </ul>

          <p className="mb-4">
            For a full breakdown of commercial vs DIY cost drivers and realistic budgeting, read:{' '}
            <Link
              href={`/${locale}/blog/is-raw-dog-food-worth-the-cost`}
              className="underline font-medium hover:opacity-80"
            >
              Is Raw Dog Food Worth the Cost?
            </Link>
            .
          </p>
        </section>

        {/* WHO COMMERCIAL FITS */}
        <section id="who-commercial-fits" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Who Commercial Raw Is Best Suited For vs DIY</h2>
          <p className="mb-4">
            DIY raw can work for highly detail-oriented owners who can follow a structured plan, weigh ingredients, and
            keep supplementation consistent. But for most households, commercial raw is a lower-friction way to reduce
            the biggest DIY failure mode: nutrition drift.
          </p>

          <h3 className="text-xl font-semibold mb-2">Commercial raw tends to fit best when</h3>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>You want raw feeding with fewer measurement and planning steps.</li>
            <li>You want clearer life-stage targeting and repeatable feeding directions.</li>
            <li>You are willing to pay for convenience and consistency.</li>
            <li>You can store and handle raw safely at home.</li>
          </ul>

          <h3 className="text-xl font-semibold mb-2">DIY raw tends to fit best when</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>You can follow a formulated recipe framework consistently.</li>
            <li>You are comfortable using a scale, batching, and tracking outcomes.</li>
            <li>You understand that supplements may be required long term.</li>
            <li>You can keep food safety habits strict every day.</li>
          </ul>

          <p className="mt-4 mb-4">
            If you are comparing feeding styles at a high level before you commit, the bigger landscape is covered here:
            <Link
              href={`/${locale}/blog/raw-food-vs-kibble-vs-fresh-food`}
              className="underline font-medium hover:opacity-80 ml-1"
            >
              Raw Food vs. Kibble vs. Fresh Food
            </Link>
            .
          </p>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">Frequently Asked Questions</h2>

          <p className="mb-3">
            <strong>How do I know if a raw product is a full diet or a topper?</strong>
            <br />
            Look for the nutritional adequacy statement and feeding directions. A full diet should clearly indicate it is
            complete and balanced for a life stage, and it should provide practical feeding instructions.
          </p>

          <p className="mb-3">
            <strong>Is HPP a guarantee that raw food is &ldquo;safe&rdquo;?</strong>
            <br />
            No single step is a guarantee. Some brands describe HPP as part of pathogen mitigation, but household food
            handling still matters. If your household includes higher-risk people, consider a different feeding approach
            or speak with your veterinarian.
          </p>

          <p className="mb-3">
            <strong>Should I choose frozen or freeze-dried raw?</strong>
            <br />
            Frozen is often used for daily feeding; freeze-dried is often chosen for convenience and travel. Your best
            choice depends on budget, storage, and whether your dog tolerates the product consistently.
          </p>

          <p>
            <strong>What should I do first if I want to try commercial raw?</strong>
            <br />
            Pick 2–3 brands you can buy reliably, confirm the label statement and life stage, then transition slowly and
            track stool and weight. If anything becomes unstable, pause and reassess.
          </p>
        </section>

        {/* SOURCES */}
        <section id="sources" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">📚 Sources &amp; Official References (Selected)</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            <li>
              AAFCO: Raw foods overview and handling considerations:{' '}
              <a
                href="https://www.aafco.org/consumers/understanding-pet-food/raw-foods/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.aafco.org/consumers/understanding-pet-food/raw-foods/
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
              Forbes Vetted (2025): Raw dog food roundup mentioning Viva Raw:{' '}
              <a
                href="https://www.forbes.com/sites/forbes-personal-shopper/article/best-raw-dog-food/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.forbes.com/sites/forbes-personal-shopper/article/best-raw-dog-food/
              </a>
            </li>
            <li>
              Canine Journal (2025): Freeze-dried dog food best-of list (includes several raw-style brands):{' '}
              <a
                href="https://www.caninejournal.com/best-freeze-dried-dog-food/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.caninejournal.com/best-freeze-dried-dog-food/
              </a>
            </li>
            <li>
              Stella &amp; Chewy&rsquo;s: HPP overview and quality process examples (including test-and-hold statements):{' '}
              <a
                href="https://www.stellaandchewys.com/blogs/articles/high-pressure-processing"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.stellaandchewys.com/blogs/articles/high-pressure-processing
              </a>{' '}
              &middot{' '}
              <a
                href="https://www.stellaandchewys.com/blogs/articles/why-our-freeze-dried-raw"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.stellaandchewys.com/blogs/articles/why-our-freeze-dried-raw
              </a>
            </li>
            <li>
              Primal: Brand statements on HPP and raw product safety approaches:{' '}
              <a
                href="https://www.primalpetfoods.com/pages/quality-guarantee"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.primalpetfoods.com/pages/quality-guarantee
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
