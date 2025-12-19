'use client';

import Head from 'next/head';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function BARFDietExplained() {
  const locale = useLocale();

  const title = 'BARF Diet Explained: The Complete Beginner’s Guide';
  const date = 'December 6, 2025';
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

  const description =
    'A beginner-friendly BARF guide: what it means, typical components and ratios, how it differs from prey-model raw, common mistakes, pros and limitations, and how to decide if it fits long term.';

  return (
    <>
      <Head>
        <title>{title} – Petunia Blog</title>
        <meta name="description" content={description} />
        <meta name="robots" content="all" />
        <link
          rel="canonical"
          href={`https://www.petuniapets.com/${locale}/blog/barf-diet-explained`}
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
              <a href="#what-barf-is" className="underline hover:opacity-80">
                What BARF Means
              </a>
            </li>
            <li>
              <a href="#philosophy" className="underline hover:opacity-80">
                Original Philosophy
              </a>
            </li>
            <li>
              <a href="#components" className="underline hover:opacity-80">
                Components
              </a>
            </li>
            <li>
              <a href="#ratios" className="underline hover:opacity-80">
                Ratios
              </a>
            </li>
            <li>
              <a href="#barf-vs-pmr" className="underline hover:opacity-80">
                BARF vs PMR
              </a>
            </li>
            <li>
              <a href="#common-mistakes" className="underline hover:opacity-80">
                Common Mistakes
              </a>
            </li>
            <li>
              <a href="#pros-limitations" className="underline hover:opacity-80">
                Pros &amp; Limitations
              </a>
            </li>
            <li>
              <a href="#long-term" className="underline hover:opacity-80">
                Long-Term Fit
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
            The BARF diet is a popular raw-feeding approach built around meat, edible bone, organs, and a smaller plant
            component. Done carefully, it can be a structured way to think about raw ingredients. Done casually, it can
            drift into nutrient imbalance, especially with minerals and key micronutrients. If you want to try BARF, the
            safest path is to understand the basic framework, avoid beginner mistakes, and choose a plan you can follow
            consistently.
          </p>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Important note:</strong> This article is educational and not veterinary medical advice. Puppies and
            dogs with medical conditions need extra caution with homemade diets.
          </div>
        </section>

        {/* WHAT BARF IS */}
        <section id="what-barf-is" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">What BARF Stands For (and What People Mean by It Today)</h2>
          <p className="mb-4">
            BARF is commonly explained as either <strong>Biologically Appropriate Raw Food</strong> or{' '}
            <strong>Bones and Raw Food</strong>. In practical use, most owners mean a raw diet pattern that includes:
            muscle meat, edible bone, organs, and a plant-based mix (often vegetables and sometimes fruit). The goal is
            to move away from ultra-processed feeding and toward a more whole-food style, while still keeping the diet
            structured enough to repeat.
          </p>
          <p className="mb-4">
            It helps to separate the word &ldquo;BARF&rdquo; from the question &ldquo;Is this diet nutritionally
            complete for my dog?&rdquo; Those are not the same thing. BARF is a framework. The outcomes depend on how
            accurately the diet is built and how consistently it is fed.
          </p>

          <ul className="list-disc pl-5 space-y-1">
            <li>
              Some BARF plans are carefully formulated and track nutrients.
            </li>
            <li>
              Some BARF plans rely on rough ratios and rotate ingredients loosely.
            </li>
            <li>
              Two diets can both be called BARF and have very different nutrition profiles.
            </li>
          </ul>
        </section>

        {/* PHILOSOPHY */}
        <section id="philosophy" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">The Original BARF Philosophy (Why It Was Created)</h2>
          <p className="mb-4">
            The BARF movement grew out of a belief that many dogs do well on a less processed diet and that chewing,
            variety, and whole ingredients may better match a dog&rsquo;s natural feeding biology. BARF advocates often
            emphasize ingredient quality, visible food structure, and owner control over what goes into the bowl.
          </p>
          <p className="mb-4">
            The key philosophical point is not that dogs are wolves. It is that dogs are adaptable omnivores with a
            strong ability to digest animal-based foods, and that a thoughtfully built raw plan can be a valid feeding
            style for some households.
          </p>

          <div className="rounded-lg border border-[#d9cfc2] p-4 bg-[#f6efe4]">
            <p className="text-sm mb-2">
              <strong>BARF is often chosen for goals like:</strong>
            </p>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>More control over ingredients and sourcing</li>
              <li>High palatability for picky eaters</li>
              <li>Perceived improvements in stool quality and coat condition</li>
              <li>More chewing activity in the daily routine</li>
            </ul>
          </div>
        </section>

        {/* COMPONENTS */}
        <section id="components" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Typical BARF Diet Components (What Usually Goes In)</h2>
          <p className="mb-4">
            A classic BARF plate is usually built from a few repeated categories. The exact ingredients vary by dog and
            by budget, but the categories stay similar.
          </p>

          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>
              <strong>Muscle meat:</strong> The core calorie and protein base (beef, turkey, chicken, lamb, and others).
            </li>
            <li>
              <strong>Edible bone:</strong> A mineral source (especially calcium) when used correctly.
            </li>
            <li>
              <strong>Organs:</strong> Often split into liver and other secreting organs for micronutrients.
            </li>
            <li>
              <strong>Plant mix:</strong> Frequently vegetables (and sometimes fruit) blended or chopped for digestibility.
            </li>
            <li>
              <strong>Optional add-ons:</strong> Eggs, fish, dairy in small amounts, or supplements depending on the plan.
            </li>
          </ul>

          <p className="mb-4">
            If you are new to raw feeding in general, it is worth understanding the broader landscape first so you can
            place BARF in context. That foundation is covered in the pillar guide.
          </p>

          <p className="text-sm text-gray-700">
            For the complete overview of raw feeding models and what &ldquo;raw&rdquo; can mean, read:{' '}
            <Link
              href={`/${locale}/blog/the-ultimate-guide-to-raw-dog-food`}
              className="underline font-medium hover:opacity-80"
            >
              The Ultimate Guide to Raw Dog Food
            </Link>
            .
          </p>
        </section>

        {/* RATIOS */}
        <section id="ratios" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Typical BARF Ratios (and How to Interpret Them Safely)</h2>
          <p className="mb-4">
            Many BARF resources describe ratios such as a majority animal-based portion plus a smaller plant portion.
            These ratios are used as an easy starting point, not as a guarantee of nutritional completeness. Two diets
            can follow the same ratio and still differ dramatically in minerals, fatty acids, and micronutrients.
          </p>

          <p className="mb-4">
            As a beginner, treat ratios as a <strong>structure</strong> rather than a finish line. The most important
            question is whether the full plan covers:
          </p>

          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>Enough calcium without overshooting</li>
            <li>Enough trace minerals (like zinc and iodine)</li>
            <li>Enough essential fatty acids, including omega-3 sources</li>
            <li>Reasonable energy density for your dog&rsquo;s activity level</li>
          </ul>

          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Beginner-friendly mindset:</strong> If you cannot explain how your plan meets calcium needs, do not
            rely on guesswork. Minerals are where many homemade diets quietly fail.
          </div>
        </section>

        {/* BARF VS PMR */}
        <section id="barf-vs-pmr" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">BARF vs Prey-Model Raw (PMR): What&rsquo;s the Difference?</h2>
          <p className="mb-4">
            BARF and prey-model raw (PMR) are often treated like competing teams online, but in reality they are two
            different frameworks for building a raw diet.
          </p>

          <div className="not-prose overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b">
                  <th className="py-2 pr-4">Topic</th>
                  <th className="py-2 pr-4">BARF</th>
                  <th className="py-2 pr-4">PMR</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b align-top">
                  <td className="py-3 pr-4">
                    <strong>Core idea</strong>
                  </td>
                  <td className="py-3 pr-4">Meat, bone, organs plus a plant mix</td>
                  <td className="py-3 pr-4">Animal-based focus, aiming to mirror prey composition</td>
                </tr>
                <tr className="border-b align-top">
                  <td className="py-3 pr-4">
                    <strong>Plant ingredients</strong>
                  </td>
                  <td className="py-3 pr-4">Common and often emphasized</td>
                  <td className="py-3 pr-4">Usually minimal or not included</td>
                </tr>
                <tr className="border-b align-top">
                  <td className="py-3 pr-4">
                    <strong>Beginner risk</strong>
                  </td>
                  <td className="py-3 pr-4">Over-reliance on plant mix while missing minerals</td>
                  <td className="py-3 pr-4">Mineral imbalance if bone and organ portions are off</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-4 mb-4">
            The important takeaway is that both styles can be done well, and both styles can be done poorly. The label
            does not guarantee the outcome.
          </p>

          <p className="text-sm text-gray-700">
            If you want to avoid common misinformation and oversimplified claims, read:{' '}
            <Link
              href={`/${locale}/blog/top-myths-about-raw-feeding-debunked`}
              className="underline font-medium hover:opacity-80"
            >
              Top Myths About Raw Feeding — Debunked
            </Link>
            .
          </p>
        </section>

        {/* COMMON MISTAKES */}
        <section id="common-mistakes" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Common BARF Mistakes Beginners Make (and How to Avoid Them)</h2>
          <p className="mb-4">
            Beginners often fail not because they do not care, but because they copy social media meals that look
            impressive without understanding balance. These mistakes are common, predictable, and fixable.
          </p>

          <div className="rounded-lg border border-[#d9cfc2] p-4 bg-[#f6efe4]">
            <p className="text-sm mb-2">
              <strong>Top beginner mistakes:</strong>
            </p>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li><strong>Guessing portions:</strong> Feeding by eyeballing instead of using a scale and a plan.</li>
              <li><strong>Bone confusion:</strong> Using the wrong type of bone or using too much bone too quickly.</li>
              <li><strong>Organ overload:</strong> Adding a lot of liver because it seems healthy, then overshooting vitamin A.</li>
              <li><strong>Too much variety too fast:</strong> Introducing many proteins at once and triggering GI upset.</li>
              <li><strong>Skipping omega-3 sources:</strong> Relying on meat alone without addressing fatty acid balance.</li>
              <li><strong>Assuming vegetables equal balance:</strong> A plant mix does not automatically fix missing minerals.</li>
              <li><strong>Ignoring label cues:</strong> Buying foods with unclear formulation claims or incomplete feeding directions.</li>
            </ul>
          </div>

          <p className="mt-4 mb-4">
            If you are preparing homemade meals, the safest approach is to follow a structured recipe framework rather
            than improvising daily. When people struggle, it is usually because the plan is too complex to repeat.
          </p>

          <p className="text-sm text-gray-700">
            For beginner-friendly meal framework ideas, read:{' '}
            <Link
              href={`/${locale}/blog/raw-dog-food-recipes-you-can-make-at-home`}
              className="underline font-medium hover:opacity-80"
            >
              Raw Dog Food Recipes You Can Make at Home
            </Link>
            .
          </p>
        </section>

        {/* PROS & LIMITATIONS */}
        <section id="pros-limitations" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Pros and Limitations of BARF Feeding</h2>
          <p className="mb-4">
            BARF can be a workable structure for owners who want a raw style and are willing to keep the plan consistent.
            But it has limitations that are easy to underestimate.
          </p>

          <h3 className="text-xl font-semibold mb-2">Potential pros</h3>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>Clear categories that make meal building feel more approachable</li>
            <li>High palatability for many dogs</li>
            <li>Owner control over ingredient sourcing and avoidance of certain additives</li>
            <li>Chewing activity can be a meaningful enrichment element for some dogs</li>
          </ul>

          <h3 className="text-xl font-semibold mb-2">Real limitations</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Hard to guarantee complete nutrition without a formulated plan</li>
            <li>More food-safety steps than many owners expect</li>
            <li>Costs can rise quickly with quality proteins and organs</li>
            <li>Not ideal for every household or every dog</li>
          </ul>

          <p className="mt-4 mb-4">
            One limitation deserves special attention: marketing and labeling can confuse even careful owners. A product
            can look premium and still be incomplete or unclear about whether it is intended as a full diet.
          </p>

          <p className="text-sm text-gray-700">
            To learn how to read raw product labels and spot red flags, read:{' '}
            <Link
              href={`/${locale}/blog/how-to-evaluate-raw-food-labels-and-ingredients`}
              className="underline font-medium hover:opacity-80"
            >
              How to Evaluate Raw Food Labels &amp; Ingredients
            </Link>
            .
          </p>
        </section>

        {/* LONG-TERM */}
        <section id="long-term" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Is BARF Appropriate for Long-Term Feeding?</h2>
          <p className="mb-4">
            BARF can be used long term for some dogs, but long-term success usually requires one of two things: a
            professionally formulated recipe you follow consistently, or a complete-and-balanced commercial product that
            you feed as directed. The farther you drift into improvisation, the more the risk increases over time.
          </p>

          <p className="mb-4">
            A simple way to think about long-term fit is to ask whether you can sustain the routine for the next 12
            months, not just for the next two weeks. Sustainable feeding is usually boring, repetitive, and consistent,
            because consistency is what makes nutrition reliable.
          </p>

          <div className="rounded-lg border border-[#d9cfc2] p-4 bg-[#f6efe4]">
            <p className="text-sm mb-2">
              <strong>BARF is more likely to work long term when:</strong>
            </p>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>You can portion meals consistently and track your dog&rsquo;s body condition</li>
              <li>You are willing to keep hygiene and storage habits strict</li>
              <li>You keep the plan simple enough to repeat</li>
              <li>You work with your veterinarian on any medical constraints</li>
            </ul>
          </div>

          <p className="mt-4 mb-4">
            If your goal is to make a responsible choice about raw feeding overall, not just BARF specifically, it helps
            to zoom out and consider your dog, your household, and what you can execute reliably.
          </p>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">Frequently Asked Questions</h2>

          <p className="mb-3">
            <strong>Does BARF require vegetables?</strong>
            <br />
            Many BARF plans include a plant mix, but the role and amount vary by source. Vegetables can add fiber and
            certain nutrients, but they do not automatically make a diet balanced.
          </p>

          <p className="mb-3">
            <strong>Is BARF safer than prey-model raw?</strong>
            <br />
            Neither framework is automatically safer. Safety depends on food handling, ingredient choices, and whether
            the diet is nutritionally complete.
          </p>

          <p className="mb-3">
            <strong>Can I do BARF without bone?</strong>
            <br />
            Many BARF plans rely on edible bone for calcium. If you remove bone, you need another reliable calcium plan,
            and you should not guess. This is a good moment to work with a professional.
          </p>

          <p>
            <strong>How do I know if my dog is doing well on BARF?</strong>
            <br />
            Look for stable body condition, consistent stool quality, a healthy appetite, normal energy, and absence of
            chronic GI symptoms. If your dog is losing weight, vomiting, or having recurring diarrhea, stop and consult
            your veterinarian.
          </p>
        </section>

        {/* SOURCES */}
        <section id="sources" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">📚 Sources &amp; References (Selected)</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            <li>
              WSAVA global nutrition guidelines and diet evaluation concepts:{' '}
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
              FDA consumer guidance on safe handling of pet food and treats:{' '}
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
