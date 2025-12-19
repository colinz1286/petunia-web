'use client';

import Head from 'next/head';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function RawFoodDietForPuppiesIsItSafe() {
  const locale = useLocale();

  const title = 'Raw Food Diet for Puppies: Is It Safe and What You Should Know';
  const date = 'December 9, 2025';
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
    'A high-stakes, evidence-first guide to raw feeding puppies: growth nutrition basics, calcium and phosphorus risks, commercial vs homemade considerations, and when raw is not recommended.';

  return (
    <>
      <Head>
        <title>{title} – Petunia Blog</title>
        <meta name="description" content={description} />
        <meta name="robots" content="all" />
        <link
          rel="canonical"
          href={`https://www.petuniapets.com/${locale}/blog/raw-food-diet-for-puppies-is-it-safe`}
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
              <a href="#why-puppies-are-different" className="underline hover:opacity-80">
                Why Puppies Are Different
              </a>
            </li>
            <li>
              <a href="#calcium-phosphorus" className="underline hover:opacity-80">
                Calcium &amp; Phosphorus Risk
              </a>
            </li>
            <li>
              <a href="#skeletal-growth" className="underline hover:opacity-80">
                Skeletal Growth
              </a>
            </li>
            <li>
              <a href="#puppy-vs-adult-raw" className="underline hover:opacity-80">
                Puppy vs Adult Raw
              </a>
            </li>
            <li>
              <a href="#commercial-vs-homemade" className="underline hover:opacity-80">
                Commercial vs Homemade
              </a>
            </li>
            <li>
              <a href="#when-not-recommended" className="underline hover:opacity-80">
                When Not Recommended
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
            Puppies have unique growth nutrition requirements, and the biggest risk with raw feeding is mineral
            imbalance, especially calcium and phosphorus. A puppy can appear to do well in the short term while the diet
            quietly drifts into a ratio that is not safe for skeletal development. If you feed raw to a puppy, the
            lowest-risk route is a complete-and-balanced puppy formulation with clear feeding directions, paired with
            strict food-handling hygiene. Homemade raw is where most problems happen because growth nutrition is
            unforgiving.
          </p>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>High-stakes note:</strong> This page is educational and not veterinary medical advice. If you have a
            large-breed puppy, a puppy with orthopedic concerns, or a puppy with chronic GI issues, talk with your
            veterinarian before choosing any homemade plan.
          </div>
        </section>

        {/* WHY PUPPIES ARE DIFFERENT */}
        <section id="why-puppies-are-different" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Why Puppies Have Different Nutrition Needs Than Adult Dogs</h2>
          <p className="mb-4">
            Adult dogs are finished building their skeletons. Puppies are not. Growth is a fast, biologically expensive
            process that requires the right balance of energy, protein, and minerals at the right time. A diet can be
            high-quality in ingredients and still be wrong for growth if the nutrient profile is not correct.
          </p>

          <div className="rounded-lg border border-[#d9cfc2] p-4 bg-[#f6efe4] mb-4">
            <p className="text-sm mb-2">
              <strong>What makes puppy nutrition more sensitive:</strong>
            </p>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>
                <strong>Energy density:</strong> too many calories can push growth too fast, especially in large breeds.
              </li>
              <li>
                <strong>Mineral precision:</strong> calcium and phosphorus must stay in a safe range, consistently.
              </li>
              <li>
                <strong>Micronutrients:</strong> certain vitamins and trace minerals matter more during development.
              </li>
              <li>
                <strong>Consistency:</strong> repeating a balanced plan is more important than frequent variety.
              </li>
            </ul>
          </div>

          <p className="text-sm text-gray-700">
            If you want the complete definitions and a broader raw feeding overview, start here:{' '}
            <Link
              href={`/${locale}/blog/the-ultimate-guide-to-raw-dog-food`}
              className="underline font-medium hover:opacity-80"
            >
              The Ultimate Guide to Raw Dog Food
            </Link>
            .
          </p>
        </section>

        {/* CALCIUM PHOSPHORUS */}
        <section id="calcium-phosphorus" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">The Calcium and Phosphorus Problem (Why It Matters So Much)</h2>
          <p className="mb-4">
            Calcium and phosphorus support bone development, but more is not automatically better. Too little calcium,
            too much calcium, or an imbalanced ratio can disrupt healthy skeletal growth. This is one of the most common
            reasons veterinarians caution against homemade diets for puppies.
          </p>

          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>
              <strong>Too little calcium:</strong> can contribute to weak bone mineralization and poor growth outcomes.
            </li>
            <li>
              <strong>Too much calcium:</strong> can be especially problematic for large-breed puppies.
            </li>
            <li>
              <strong>Ratio drift:</strong> DIY meals often change day to day, and minerals drift with them.
            </li>
          </ul>

          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Practical warning:</strong> If you cannot clearly explain how your puppy diet handles calcium and
            phosphorus consistently, you are not ready for a homemade puppy plan.
          </div>
        </section>

        {/* SKELETAL GROWTH */}
        <section id="skeletal-growth" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Can Raw Feeding Support Proper Skeletal Growth?</h2>
          <p className="mb-4">
            It can, but only if the diet is formulated to meet puppy growth requirements and fed consistently. The
            challenge is that homemade raw diets are frequently built from rough ratios rather than from nutrient
            targets. That approach can work better for some adult dogs than it does for growing puppies.
          </p>

          <p className="mb-4">
            A safe puppy growth plan is not about being raw. It is about being complete-and-balanced for the life stage.
            If a raw diet is complete-and-balanced for growth and you can execute it safely, it may be a reasonable
            option for some households. If it is not, the risks outweigh the philosophy.
          </p>

          <p className="text-sm text-gray-700">
            For a balanced discussion of what research supports and where the gaps are, read:{' '}
            <Link
              href={`/${locale}/blog/raw-food-diet-pros-and-cons`}
              className="underline font-medium hover:opacity-80"
            >
              Raw Food Diet Pros &amp; Cons: What Science and Vets Say
            </Link>
            .
          </p>
        </section>

        {/* PUPPY VS ADULT RAW */}
        <section id="puppy-vs-adult-raw" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Feeding Puppies vs Adult Dogs Raw: Key Differences</h2>
          <p className="mb-4">
            The biggest difference is tolerance for imperfection. Adult dogs sometimes do fine with small day-to-day
            variation. Puppies have far less margin for error.
          </p>

          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>
              <strong>Portion accuracy matters more:</strong> overfeeding can push rapid growth.
            </li>
            <li>
              <strong>Mineral consistency matters more:</strong> growth depends on stable calcium and phosphorus intake.
            </li>
            <li>
              <strong>Diet changes should be slower:</strong> frequent protein rotation can destabilize digestion.
            </li>
            <li>
              <strong>Health monitoring should be tighter:</strong> weight, body condition, and stool trends should be tracked.
            </li>
          </ul>

          <p className="mb-4">
            Food safety also matters because puppies explore everything with their mouths. A messy feeding routine and
            inconsistent cleaning increases household exposure risk.
          </p>

          <p className="text-sm text-gray-700">
            For safe handling, sanitation, and household risk mitigation, read:{' '}
            <Link
              href={`/${locale}/blog/raw-dog-food-safety`}
              className="underline font-medium hover:opacity-80"
            >
              Raw Dog Food Safety: How to Handle &amp; Prepare Raw Diets Without Risk
            </Link>
            .
          </p>
        </section>

        {/* COMMERCIAL VS HOMEMADE */}
        <section id="commercial-vs-homemade" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Commercial Raw vs Homemade Raw for Puppies</h2>
          <p className="mb-4">
            If you are determined to feed raw to a puppy, the commercial route is usually lower risk because it can be
            formulated for the life stage and produced with consistent manufacturing controls. Homemade raw can be done
            well, but it requires formulation support and careful execution.
          </p>

          <div className="not-prose overflow-x-auto mb-4">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b">
                  <th className="py-2 pr-4">Approach</th>
                  <th className="py-2 pr-4">What Can Go Well</th>
                  <th className="py-2 pr-4">What Commonly Goes Wrong</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b align-top">
                  <td className="py-3 pr-4">
                    <strong>Commercial puppy raw</strong>
                  </td>
                  <td className="py-3 pr-4">
                    More consistent nutrient targets and clearer feeding instructions for growth.
                  </td>
                  <td className="py-3 pr-4">
                    Not all products are formulated for growth; owners may misread labels or use toppers as full diets.
                  </td>
                </tr>
                <tr className="border-b align-top">
                  <td className="py-3 pr-4">
                    <strong>Homemade puppy raw</strong>
                  </td>
                  <td className="py-3 pr-4">
                    Full ingredient control and customization when professionally formulated.
                  </td>
                  <td className="py-3 pr-4">
                    Mineral imbalance, recipe drift, inconsistent supplementation, and portioning errors.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mb-4">
            The biggest DIY trap is believing that &ldquo;variety over time&rdquo; automatically creates balance. That is
            not reliable for puppy growth. Growth nutrition needs intentional design.
          </p>

          <p className="text-sm text-gray-700">
            For a deeper look at why many veterinarians oppose raw diets (and what a productive discussion can look
            like), read:{' '}
            <Link
              href={`/${locale}/blog/veterinary-perspectives-on-raw-diets`}
              className="underline font-medium hover:opacity-80"
            >
              Veterinary Perspectives on Raw Diets
            </Link>
            .
          </p>
        </section>

        {/* WHEN NOT RECOMMENDED */}
        <section id="when-not-recommended" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">When Raw Feeding Is Not Recommended for Puppies</h2>
          <p className="mb-4">
            There are situations where the risk profile is simply too high or where the household cannot reliably
            execute the plan. In those cases, choosing a complete puppy diet that is easier to manage is the safer move.
          </p>

          <div className="rounded-lg border border-[#d9cfc2] p-4 bg-[#f6efe4]">
            <p className="text-sm mb-2">
              <strong>Consider avoiding raw for a puppy if:</strong>
            </p>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>The puppy is a large-breed type and growth needs strict mineral precision.</li>
              <li>The puppy has chronic GI issues, recurring diarrhea, or poor weight gain.</li>
              <li>The household includes high-risk people (immunocompromised, pregnant, elderly, or very young).</li>
              <li>You cannot keep storage, thawing, and cleanup routines consistent.</li>
              <li>You plan to improvise recipes without professional formulation support.</li>
            </ul>
          </div>

          <p className="mt-4 mb-4">
            The responsible goal is not to &ldquo;win&rdquo; at raw feeding. The goal is to raise a healthy puppy with a
            predictable, safe, nutritionally complete diet that supports stable growth.
          </p>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">Frequently Asked Questions</h2>

          <p className="mb-3">
            <strong>Is raw feeding automatically unsafe for puppies?</strong>
            <br />
            Not automatically, but the margin for error is much smaller than it is for adult dogs. Growth nutrition is
            highly sensitive to mineral balance and consistent formulation.
          </p>

          <p className="mb-3">
            <strong>What is the biggest risk for a puppy?</strong>
            <br />
            Calcium and phosphorus imbalance. This is why homemade puppy diets should not be improvised, even with good
            intentions.
          </p>

          <p className="mb-3">
            <strong>If I want raw, what is the lowest-risk path?</strong>
            <br />
            Use a complete-and-balanced puppy formulation with clear feeding directions, follow strict hygiene routines,
            and keep the plan consistent. If you want homemade, seek professional formulation support.
          </p>

          <p>
            <strong>Should I ask my veterinarian about this?</strong>
            <br />
            Yes. Even if opinions differ, your veterinarian can help you assess your puppy&rsquo;s growth, body
            condition, and any medical risk factors that change the decision.
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
              AVMA policy on raw or undercooked animal-source protein diets:{' '}
              <a
                href="https://www.avma.org/resources-tools/avma-policies/raw-or-undercooked-animal-source-protein-cat-and-dog-diets"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.avma.org/resources-tools/avma-policies/raw-or-undercooked-animal-source-protein-cat-and-dog-diets
              </a>
            </li>
            <li>
              FDA guidance on safe handling of pet food and treats:{' '}
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
