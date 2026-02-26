'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function IsRawDogFoodWorthTheCost() {
  const locale = useLocale();

  const title = 'Is Raw Dog Food Worth the Cost? Budgeting & Long-Term Value Explained';
  const date = 'December 17, 2025';
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
              <a href="#why-costs-vary" className="underline hover:opacity-80">
                Why Costs Vary
              </a>
            </li>
            <li>
              <a href="#commercial-vs-homemade" className="underline hover:opacity-80">
                Commercial vs Homemade
              </a>
            </li>
            <li>
              <a href="#compare-to-kibble-fresh" className="underline hover:opacity-80">
                Compare to Kibble &amp; Fresh
              </a>
            </li>
            <li>
              <a href="#hidden-costs" className="underline hover:opacity-80">
                Hidden Costs
              </a>
            </li>
            <li>
              <a href="#health-cost-reality" className="underline hover:opacity-80">
                Health Cost Reality
              </a>
            </li>
            <li>
              <a href="#budget-strategies" className="underline hover:opacity-80">
                Budget Strategies
              </a>
            </li>
            <li>
              <a href="#value-beyond-price" className="underline hover:opacity-80">
                Value Beyond Price
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
            Raw feeding is usually more expensive than kibble, and often comparable to or more expensive than fresh
            cooked options, depending on the dog&rsquo;s size and the product type. In a Tufts cost comparison, fresh
            and raw foods were dramatically more expensive than dry food, with fresh foods in the review costing
            multiple times more than the most expensive dry food.
          </p>
          <p className="mb-4">
            Whether raw is worth it depends on your budget, your ability to execute safe handling consistently, and your
            dog&rsquo;s individual needs. The best value choice is the one you can sustain long term without cutting
            corners on safety or nutrition.
          </p>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Important note:</strong> This article is educational and not veterinary medical advice. If your dog
            has medical conditions or you are making a major diet change, discuss it with your veterinarian.
          </div>
        </section>

        {/* WHY COSTS VARY */}
        <section id="why-costs-vary" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Why Raw Feeding Costs Vary So Much</h2>
          <p className="mb-4">
            Raw-feeding cost is not one number. It is a combination of your dog&rsquo;s calorie needs, the product
            category you choose (commercial complete, homemade, partial raw), and how much waste and inefficiency you
            have in storage and prep.
          </p>

          <h3 className="text-xl font-semibold mb-2">The main drivers of price</h3>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>Dog size and activity level (calories drive cost)</li>
            <li>Commercial complete raw vs DIY</li>
            <li>Protein type (some proteins are consistently higher cost)</li>
            <li>Shipping and cold-chain delivery fees</li>
            <li>Portion precision (overfeeding is an invisible cost)</li>
          </ul>

          <p className="mb-4">
            If you want the full raw-feeding overview first, including who raw is (and is not) a good fit for, start
            with the foundation guide and come back to budgeting with that framework.
          </p>

          <p className="text-sm text-gray-700">
            Read:{' '}
            <Link
              href={`/${locale}/blog/the-ultimate-guide-to-raw-dog-food`}
              className="underline font-medium hover:opacity-80"
            >
              The Ultimate Guide to Raw Dog Food
            </Link>
            .
          </p>
        </section>

        {/* COMMERCIAL VS HOMEMADE */}
        <section id="commercial-vs-homemade" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Average Cost: Commercial Raw vs Homemade Raw</h2>
          <p className="mb-4">
            Commercial raw often costs more per calorie than kibble because you are paying for ingredient sourcing,
            processing, packaging, cold storage, and distribution. Homemade can be cheaper in some situations, but it
            can also become more expensive if you require specialty items, supplements, or frequent small-batch prep.
          </p>

          <h3 className="text-xl font-semibold mb-2">Commercial raw: what you are paying for</h3>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>Convenience (minimal prep time)</li>
            <li>Portion consistency (easier to measure)</li>
            <li>Formulation standards vary, so transparency matters</li>
            <li>Cold-chain costs (shipping and packaging)</li>
          </ul>

          <h3 className="text-xl font-semibold mb-2">Homemade raw: where costs can drop or rise</h3>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>Bulk buying can reduce cost per meal</li>
            <li>Time cost increases (shopping, prep, sanitation)</li>
            <li>Supplement costs can add up if the plan requires them</li>
            <li>Waste increases if storage routines are inconsistent</li>
          </ul>

          <p className="mb-4">
            If you are comparing recipes or building a structured DIY plan, use a guide that focuses on execution and
            consistency rather than vibes.
          </p>

          <p className="text-sm text-gray-700">
            Read:{' '}
            <Link
              href={`/${locale}/blog/raw-dog-food-recipes-you-can-make-at-home`}
              className="underline font-medium hover:opacity-80"
            >
              Raw Dog Food Recipes: Safe Approaches
            </Link>
            .
          </p>

          <p className="mb-4">
            If you are shopping commercial options, brand comparisons can help you spot what varies across products
            (and what questions to ask).
          </p>

          <p className="text-sm text-gray-700">
            Read:{' '}
            <Link
              href={`/${locale}/blog/best-raw-dog-food-brands-reviewed`}
              className="underline font-medium hover:opacity-80"
            >
              Best Raw Dog Food Brands Reviewed
            </Link>
            .
          </p>
        </section>

        {/* COMPARE TO KIBBLE & FRESH */}
        <section id="compare-to-kibble-fresh" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Commercial Raw vs Premium Kibble vs Fresh Food</h2>
          <p className="mb-4">
            Most owners feel cost pressure when they compare raw to premium kibble because dry food is often the most
            cost-efficient way to deliver calories. Tufts reviewed cost differences by food type and found that both
            dry and wet foods were dramatically less expensive than fresh or raw categories.
          </p>

          <h3 className="text-xl font-semibold mb-2">How to compare fairly</h3>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>Compare cost per day for your dog&rsquo;s calorie needs, not cost per bag or cost per pound.</li>
            <li>Compare food that is intended for the same life stage (adult vs growth).</li>
            <li>Include delivery fees and wasted portions in your math.</li>
            <li>Separate convenience from nutrition (they are different value levers).</li>
          </ul>

          <p className="mb-4">
            If you want a decision checklist across feeding models, use a consistent set of criteria rather than
            debating one claim at a time.
          </p>

          <p className="text-sm text-gray-700">
            Read:{' '}
            <Link
              href={`/${locale}/blog/raw-food-vs-kibble-vs-fresh-food`}
              className="underline font-medium hover:opacity-80"
            >
              Raw Food vs. Kibble vs. Fresh Food
            </Link>
            .
          </p>
        </section>

        {/* HIDDEN COSTS */}
        <section id="hidden-costs" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Hidden Costs Owners Often Forget</h2>
          <p className="mb-4">
            The sticker price is only part of the real cost. Hidden costs are usually where raw feeding surprises
            people, especially in the first 60 days.
          </p>

          <h3 className="text-xl font-semibold mb-2">Common hidden costs</h3>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>
              <strong>Storage:</strong> freezer space, containers, and the cost of running extra cold storage
            </li>
            <li>
              <strong>Supplements:</strong> if your plan requires vitamin and mineral balancing
            </li>
            <li>
              <strong>Prep time:</strong> shopping, portioning, sanitation, and cleanup
            </li>
            <li>
              <strong>Travel:</strong> boarding, pet sitters, or travel logistics may be harder with frozen food
            </li>
            <li>
              <strong>Food-safety tools:</strong> gloves, disinfectants, dedicated cutting boards, and routine cleanup
            </li>
          </ul>

          <p className="mb-4">
            Food safety is a real layer of cost because raw diets can have higher contamination risk compared with other
            pet food types. That risk is a core reason veterinary organizations emphasize careful handling and household
            suitability.
          </p>
        </section>

        {/* HEALTH COST REALITY */}
        <section id="health-cost-reality" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Long-Term Health Cost Considerations</h2>
          <p className="mb-4">
            Some owners hope raw feeding will reduce vet bills. Others worry it will increase risk. The honest answer is
            that outcomes depend heavily on the specific diet, the dog, and how consistently the plan is executed.
          </p>

          <h3 className="text-xl font-semibold mb-2">What the evidence supports most clearly</h3>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>Raw diets can carry food-safety risk, including pathogen exposure for pets and humans.</li>
            <li>Nutrition quality depends on formulation, not the label category.</li>
            <li>Some claims of universal health benefits are not supported by strong clinical evidence.</li>
          </ul>

          <p className="mb-4">
            A practical way to handle this is to budget as if you will not &ldquo;save money&rdquo; from diet alone.
            If you later observe improvements (and your vet agrees the dog is doing well), treat that as a bonus, not as
            the justification for stretching your budget.
          </p>
        </section>

        {/* BUDGET STRATEGIES */}
        <section id="budget-strategies" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Budget Strategies for Raw-Feeding Households</h2>
          <p className="mb-4">
            If raw feeding stretches your budget, the goal is not to force it. The goal is to make a plan that is
            sustainable and safe. Many households find a middle path by prioritizing consistency and reducing waste.
          </p>

          <h3 className="text-xl font-semibold mb-2">Ways to reduce cost without cutting corners</h3>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>Buy in larger quantities if you have reliable freezer capacity</li>
            <li>Measure portions by weight to prevent slow overfeeding</li>
            <li>Use a single protein for longer periods to reduce complexity and waste</li>
            <li>Limit costly extras and rotate only after tolerance is established</li>
            <li>Build a travel plan so you do not abandon the routine under stress</li>
          </ul>

          <div className="rounded-lg border border-[#d9cfc2] p-4 bg-[#f6efe4]">
            <p className="text-sm mb-2">
              <strong>Budget reality check:</strong> If your plan depends on frequent last-minute shopping, repeated
              small orders, or inconsistent freezer routines, it will feel expensive even if the product price is
              reasonable.
            </p>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Consistency lowers waste.</li>
              <li>Measurement prevents drift.</li>
              <li>Simple plans are easier to sustain.</li>
            </ul>
          </div>
        </section>

        {/* VALUE BEYOND PRICE */}
        <section id="value-beyond-price" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">Determining Value Beyond Price Alone</h2>
          <p className="mb-4">
            Value is not just cost. Value is what you get for the money you spend, including convenience, confidence,
            and how well your dog does on the plan.
          </p>

          <h3 className="text-xl font-semibold mb-2">A practical value checklist</h3>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>Can you execute the plan safely every day?</li>
            <li>Is the diet designed for long-term feeding, not just as a topper?</li>
            <li>Can you sustain the cost for at least 6–12 months without stress?</li>
            <li>Is your dog stable: stool, appetite, energy, and body condition?</li>
            <li>Can you describe your plan clearly to your veterinarian if needed?</li>
          </ul>

          <p className="mb-4">
            If your answers are mostly no, raw may not be the best fit right now, and that is completely fine. A
            well-chosen feeding plan you can sustain is often the best value decision.
          </p>

          <p className="mb-4">
            If you want to zoom back out and evaluate raw feeding with a full decision framework, use the pillar guide
            as your reference point.
          </p>

          <p className="text-sm text-gray-700">
            Read:{' '}
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
            These references include cost comparisons by food type and mainstream veterinary guidance on raw diet risk
            and food-safety considerations.
          </p>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            <li>
              Tufts Petfoodology: cost comparison by food type:{' '}
              <a
                href="https://sites.tufts.edu/petfoodology/2022/03/21/pet-food-costs-by-type/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://sites.tufts.edu/petfoodology/2022/03/21/pet-food-costs-by-type/
              </a>
            </li>
            <li>
              FDA: raw pet food contamination risk overview:{' '}
              <a
                href="https://www.fda.gov/animal-veterinary/animal-health-literacy/get-facts-raw-pet-food-diets-can-be-dangerous-you-and-your-pet"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.fda.gov/animal-veterinary/animal-health-literacy/get-facts-raw-pet-food-diets-can-be-dangerous-you-and-your-pet
              </a>
            </li>
            <li>
              WSAVA Global Nutrition Committee statement on risks of raw meat-based diets (PDF):{' '}
              <a
                href="https://wsava.org/wp-content/uploads/2020/05/WSAVA-Global-Nutrition-Committee-Statement-on-Risks-of-Raw-Meat.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://wsava.org/wp-content/uploads/2020/05/WSAVA-Global-Nutrition-Committee-Statement-on-Risks-of-Raw-Meat.pdf
              </a>
            </li>
            <li>
              WSAVA Global Nutrition Toolkit: raw meat-based diets summary (PDF):{' '}
              <a
                href="https://wsava.org/wp-content/uploads/2021/04/Raw-Meat-Based-Diets-for-Pets_WSAVA-Global-Nutrition-Toolkit.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://wsava.org/wp-content/uploads/2021/04/Raw-Meat-Based-Diets-for-Pets_WSAVA-Global-Nutrition-Toolkit.pdf
              </a>
            </li>
            <li>
              JAVMA review: current knowledge about risks and benefits of raw meat-based diets:{' '}
              <a
                href="https://avmajournals.avma.org/view/journals/javma/243/11/javma.243.11.1549.xml"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://avmajournals.avma.org/view/journals/javma/243/11/javma.243.11.1549.xml
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
