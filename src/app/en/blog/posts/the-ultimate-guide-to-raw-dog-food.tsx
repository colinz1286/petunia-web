'use client';

import Head from 'next/head';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function UltimateGuideToRawDogFood() {
  const locale = useLocale();

  const title = 'The Ultimate Guide to Raw Dog Food: What Every Dog Owner Needs to Know';
  const date = 'December 3, 2025';
  const categories = ['owner','food'] as const;

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

  const description =
    'A practical, evidence-based guide to raw feeding: what it is, common styles (BARF and prey-model), nutrition basics, who it may fit, key risks, and safer decision steps.';

  return (
    <>
      <Head>
        <title>{title} – Petunia Blog</title>
        <meta name="description" content={description} />
        <meta name="robots" content="all" />
        <link
          rel="canonical"
          href={`https://www.petuniapets.com/${locale}/blog/the-ultimate-guide-to-raw-dog-food`}
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
              <a href="#tl-dr" className="underline hover:opacity-80">
                TL;DR
              </a>
            </li>
            <li>
              <a href="#what-is-raw" className="underline hover:opacity-80">
                What Raw Feeding Is
              </a>
            </li>
            <li>
              <a href="#why-popular" className="underline hover:opacity-80">
                Why It&rsquo;s Popular
              </a>
            </li>
            <li>
              <a href="#nutrition-basics" className="underline hover:opacity-80">
                Nutrition Basics
              </a>
            </li>
            <li>
              <a href="#who-should-avoid" className="underline hover:opacity-80">
                Who Should Avoid It
              </a>
            </li>
            <li>
              <a href="#raw-styles" className="underline hover:opacity-80">
                Common Raw Styles
              </a>
            </li>
            <li>
              <a href="#commercial-vs-homemade" className="underline hover:opacity-80">
                Commercial vs Homemade
              </a>
            </li>
            <li>
              <a href="#smart-next-steps" className="underline hover:opacity-80">
                Smart Next Steps
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
        <section id="tl-dr" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Short Answer (TL;DR)</h2>
          <p className="mb-4">
            A raw diet can mean anything from a professionally formulated commercial raw product to a homemade plan built
            around meat, organs, and bone. Some owners report benefits like better stool quality or coat condition, but
            the biggest risks are nutrition imbalance (especially in homemade diets) and food-safety concerns. If you
            explore raw feeding, aim for a complete-and-balanced approach, use strict hygiene practices, and talk with
            your veterinarian about your dog&rsquo;s health status and your household&rsquo;s risk profile.
          </p>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Important note:</strong> This article is educational and not veterinary medical advice. Dogs with
            medical conditions (and some households) require extra caution before making diet changes.
          </div>
        </section>

        {/* WHAT IS RAW */}
        <section id="what-is-raw" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">What Raw Feeding Actually Means</h2>
          <p className="mb-4">
            &ldquo;Raw feeding&rdquo; is an umbrella term. It can describe commercially prepared frozen patties that are
            designed to be complete-and-balanced, or it can describe homemade meals where the owner chooses ingredients
            and portions. The key difference is not &ldquo;raw vs not raw&rdquo; by itself, but whether the overall diet
            consistently meets your dog&rsquo;s nutrient requirements over time.
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <strong>Commercial raw:</strong> Pre-made frozen or freeze-dried foods marketed as complete diets.
            </li>
            <li>
              <strong>Homemade raw:</strong> Owner-prepared meals using raw ingredients (often meat, organs, and bone).
            </li>
            <li>
              <strong>Hybrid feeding:</strong> A mix of raw and cooked foods, or raw used as a topper.
            </li>
          </ul>
        </section>

        {/* WHY POPULAR */}
        <section id="why-popular" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Why Raw Feeding Has Gained Popularity</h2>
          <p className="mb-4">
            Many owners are trying to solve real problems: picky eating, stool issues, skin flare-ups, and the desire for
            a less processed diet. Social media has also amplified dramatic before-and-after stories. The reality is
            more nuanced: some dogs do well on raw diets, some do not, and a diet can appear to &ldquo;work&rdquo; in the
            short term while still being unbalanced long term.
          </p>
          <div className="rounded-lg border border-[#d9cfc2] p-4 bg-[#f6efe4]">
            <p className="text-sm mb-2">
              <strong>Common reasons owners consider raw:</strong>
            </p>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>They want simpler ingredient lists or more control over ingredients.</li>
              <li>They feel their dog does not tolerate certain kibble formulas.</li>
              <li>They prefer the philosophy of &ldquo;whole foods&rdquo; for dogs.</li>
              <li>They want to avoid frequent diet switches and find a stable routine.</li>
            </ul>
          </div>
        </section>

        {/* NUTRITION BASICS */}
        <section id="nutrition-basics" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Basic Nutrition: What Dogs Need (Regardless of Diet Style)</h2>
          <p className="mb-4">
            Dogs need the right amount of calories, adequate protein and fat, and the correct balance of essential
            vitamins and minerals. The difficult part of raw feeding is not finding ingredients that sound healthy. The
            difficult part is reliably hitting the right nutrient targets day after day.
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <strong>Energy balance:</strong> Calories must match your dog&rsquo;s activity level and body condition
              goals.
            </li>
            <li>
              <strong>Protein and fat:</strong> Needed for muscle maintenance, immune function, and skin and coat health.
            </li>
            <li>
              <strong>Minerals:</strong> Calcium and phosphorus balance matters, especially for growing puppies.
            </li>
            <li>
              <strong>Micronutrients:</strong> Vitamins and trace minerals are easy to miss in homemade plans.
            </li>
            <li>
              <strong>Consistency:</strong> &ldquo;A little of everything&rdquo; is not the same as a balanced formula.
            </li>
          </ul>

          <p className="mt-4 text-sm text-gray-700">
            If you want a deeper science-focused discussion, see:{' '}
            <Link
              href={`/${locale}/blog/raw-food-diet-pros-and-cons`}
              className="underline font-medium hover:opacity-80"
            >
              Raw Food Diet Pros &amp; Cons: What Science and Vets Say
            </Link>
            .
          </p>
        </section>

        {/* WHO SHOULD AVOID */}
        <section id="who-should-avoid" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Which Dogs (and Households) May Not Be a Good Fit</h2>
          <p className="mb-4">
            Raw feeding can add complexity and risk. For some dogs and households, those trade-offs are not worth it. A
            safe decision starts with recognizing your baseline risk factors.
          </p>

          <div className="rounded-lg border border-[#d9cfc2] p-4 bg-[#f6efe4]">
            <p className="text-sm mb-2">
              <strong>Consider avoiding raw, or proceed only with veterinary guidance, if:</strong>
            </p>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Your dog is a puppy in a critical growth phase (bone and mineral balance is unforgiving).</li>
              <li>Your dog is immunocompromised or has chronic GI disease that flares easily.</li>
              <li>
                Your household includes infants, elderly family members, pregnant people, or anyone with immune
                suppression.
              </li>
              <li>You cannot confidently maintain strict sanitation and safe food handling routines.</li>
              <li>You need a diet that is tightly controlled for a medical condition.</li>
            </ul>
          </div>

          <p className="mt-4 text-sm text-gray-700">
            Puppy-specific risks deserve their own deep dive:{' '}
            <Link
              href={`/${locale}/blog/raw-food-diet-for-puppies-is-it-safe`}
              className="underline font-medium hover:opacity-80"
            >
              Raw Food Diet for Puppies: Is It Safe?
            </Link>
            .
          </p>
        </section>

        {/* RAW STYLES */}
        <section id="raw-styles" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">The Most Common Raw Diet Styles (BARF vs Prey-Model)</h2>
          <p className="mb-4">
            Raw feeding communities often describe two popular styles. The names are helpful for understanding
            philosophy, but they do not automatically guarantee nutritional completeness.
          </p>

          <ul className="list-disc pl-5 space-y-1">
            <li>
              <strong>BARF-style:</strong> Often includes muscle meat, bone, organs, and sometimes fruits and vegetables.
            </li>
            <li>
              <strong>Prey-model raw:</strong> Often focuses on animal-based ingredients and may aim to mirror prey
              composition.
            </li>
            <li>
              <strong>Raw toppers:</strong> Raw is used as a partial addition rather than the full diet.
            </li>
          </ul>

          <p className="mt-4 text-sm text-gray-700">
            If you want a beginner-friendly walkthrough of one approach, see:{' '}
            <Link href={`/${locale}/blog/barf-diet-explained`} className="underline font-medium hover:opacity-80">
              BARF Diet Explained: The Complete Beginner&rsquo;s Guide
            </Link>
            .
          </p>
        </section>

        {/* COMMERCIAL VS HOMEMADE */}
        <section id="commercial-vs-homemade" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Commercial Raw vs Homemade Raw: The Real Trade-Offs</h2>
          <p className="mb-4">
            For many owners, the biggest decision is whether raw is a fully formulated product or a do-it-yourself plan.
            Both paths have pros and risks, but they fail in different ways.
          </p>

          <div className="not-prose overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b">
                  <th className="py-2 pr-4">Approach</th>
                  <th className="py-2 pr-4">What It Does Well</th>
                  <th className="py-2 pr-4">Where It Can Go Wrong</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b align-top">
                  <td className="py-3 pr-4">
                    <strong>Commercial raw</strong>
                  </td>
                  <td className="py-3 pr-4">
                    More consistent formulation, easier routine, and often clearer feeding directions.
                  </td>
                  <td className="py-3 pr-4">
                    Quality varies by brand, and some products may not be complete-and-balanced.
                  </td>
                </tr>
                <tr className="border-b align-top">
                  <td className="py-3 pr-4">
                    <strong>Homemade raw</strong>
                  </td>
                  <td className="py-3 pr-4">
                    Full control over ingredients, flexibility for preferences, and the ability to tailor to your dog.
                  </td>
                  <td className="py-3 pr-4">
                    Imbalance risk is high without a formulated recipe, and sanitation mistakes are easier to make.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-sm text-gray-700">
            If you want to learn how to read raw product claims and spot red flags, see:{' '}
            <Link
              href={`/${locale}/blog/how-to-evaluate-raw-food-labels-and-ingredients`}
              className="underline font-medium hover:opacity-80"
            >
              How to Evaluate Raw Food Labels &amp; Ingredients
            </Link>
            .
          </p>
        </section>

        {/* SMART NEXT STEPS */}
        <section id="smart-next-steps" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Smart Next Steps If You&rsquo;re Considering Raw</h2>
          <p className="mb-4">
            If you want to explore raw feeding, start with a plan that reduces avoidable risk. Your goal is not to chase
            perfection overnight. Your goal is to make an informed change that you can sustain safely.
          </p>

          <ol className="list-decimal pl-6 space-y-1 mb-4">
            <li>
              Decide whether you want <strong>commercial complete-and-balanced</strong> or a <strong>formulated homemade</strong> plan.
            </li>
            <li>
              Read your dog&rsquo;s current body condition and set a realistic goal (maintenance, gain, or loss).
            </li>
            <li>
              Commit to strict hygiene habits (separate utensils, clean surfaces, safe thawing, and careful storage).
            </li>
            <li>
              Transition slowly and track stool quality, appetite, and energy changes.
            </li>
            <li>
              Reassess within a few weeks and adjust based on outcomes, not hype.
            </li>
          </ol>

          <div className="rounded-lg border border-[#d9cfc2] p-4 bg-[#f6efe4]">
            <p className="text-sm mb-2">
              <strong>Helpful next reads in this cluster:</strong>
            </p>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>
                <Link
                  href={`/${locale}/blog/raw-dog-food-safety`}
                  className="underline font-medium hover:opacity-80"
                >
                  Raw Dog Food Safety: How to Handle &amp; Prepare Raw Diets Without Risk
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/blog/how-to-transition-your-dog-to-a-raw-food-diet`}
                  className="underline font-medium hover:opacity-80"
                >
                  Step-by-Step: How to Transition Your Dog to a Raw Food Diet
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/blog/is-raw-dog-food-worth-the-cost`}
                  className="underline font-medium hover:opacity-80"
                >
                  Is Raw Dog Food Worth the Cost?
                </Link>
              </li>
            </ul>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">Frequently Asked Questions</h2>

          <p className="mb-3">
            <strong>Is raw feeding automatically healthier than kibble?</strong>
            <br />
            Not automatically. The biggest predictor of long-term success is whether the diet is nutritionally complete
            for your dog and consistently fed in a safe, sustainable way.
          </p>

          <p className="mb-3">
            <strong>What is the biggest risk with homemade raw?</strong>
            <br />
            Nutrient imbalance. Many homemade plans drift over time, especially with minerals and micronutrients, unless
            the recipe is formulated and followed consistently.
          </p>

          <p className="mb-3">
            <strong>Can I do raw as a topper instead of a full diet?</strong>
            <br />
            Some owners do. If raw is only a small portion of intake, the nutrient imbalance risk is lower, but food
            safety and gastrointestinal tolerance still matter.
          </p>

          <p>
            <strong>What is the simplest &ldquo;safer&rdquo; way to try raw?</strong>
            <br />
            Many owners start with a reputable complete-and-balanced commercial option, then transition gradually while
            tracking outcomes. If you want homemade, consider working with a veterinary nutrition professional.
          </p>
        </section>

        {/* SOURCES */}
        <section id="sources" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">📚 Sources &amp; Official References (Selected)</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            <li>
              U.S. FDA consumer guidance on raw pet food and food safety:{' '}
              <a
                href="https://www.fda.gov/animal-veterinary/animal-health-literacy/tips-safe-handling-pet-food-and-treats"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.fda.gov/animal-veterinary/animal-health-literacy/tips-safe-handling-pet-food-and-treats
              </a>
            </li>
            <li>
              AVMA background and public health considerations related to raw animal-source protein:{' '}
              <a
                href="https://www.avma.org/resources-tools/avma-policies/raw-or-undercooked-animal-source-protein-cat-and-dog-diets"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.avma.org/resources-tools/avma-policies/raw-or-undercooked-animal-source-protein-cat-and-dog-diets
              </a>
            </li>
            <li>
              WSAVA nutrition resources for pet owners (how to think about complete diets):{' '}
              <a
                href="https://wsava.org/global-guidelines/global-nutrition-guidelines/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://wsava.org/global-guidelines/global-nutrition-guidelines/
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
