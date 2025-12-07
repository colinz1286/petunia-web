'use client';

import Head from 'next/head';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function BostonTerrierDietGuide2025() {
  const locale = useLocale();

  const title =
    'Boston Terrier Diet Guide (2025): Nutrition, Feeding Schedules, Allergies & Sensitive Stomach Tips';
  const date = 'November 10, 2025';
  const categories = ['owner', 'breed_specific_guides'] as const;

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
    'A complete 2025 Boston Terrier diet guide covering macronutrients, sensitive stomach issues, allergies, portion sizes, food types, treat limits, and feeding schedules.';

  return (
    <>
      <Head>
        <title>{title} – Petunia Blog</title>
        <meta name="description" content={description} />
        <meta name="robots" content="all" />
        <link
          rel="canonical"
          href={`https://www.petuniapets.com/${locale}/blog/boston-terrier-diet-guide-2025`}
        />
      </Head>

      <main className="max-w-3xl mx-auto px-4 py-10 text-[#2c4a30]">
        {/* Meta */}
        <p className="text-sm text-gray-500 mb-2">Posted on {date}</p>
        <h1 className="text-3xl font-bold mb-4">{title}</h1>

        {/* Category Pills */}
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

        {/* Anchor Navigation */}
        <nav className="mb-8 text-sm">
          <ul className="flex flex-wrap gap-3">
            <li><a href="#tl-dr" className="underline hover:opacity-80">TL;DR</a></li>
            <li><a href="#macros" className="underline hover:opacity-80">Macronutrients</a></li>
            <li><a href="#sensitive" className="underline hover:opacity-80">Sensitive Stomachs</a></li>
            <li><a href="#food-types" className="underline hover:opacity-80">Wet vs Dry vs Fresh</a></li>
            <li><a href="#portions" className="underline hover:opacity-80">Portion Sizes</a></li>
            <li><a href="#avoid" className="underline hover:opacity-80">Foods to Avoid</a></li>
            <li><a href="#allergies" className="underline hover:opacity-80">Allergies</a></li>
            <li><a href="#treats" className="underline hover:opacity-80">Treat Limits</a></li>
            <li><a href="#schedule" className="underline hover:opacity-80">Feeding Schedule</a></li>
            <li><a href="#references" className="underline hover:opacity-80">📚 References</a></li>
          </ul>
        </nav>

        {/* TLDR */}
        <section id="tl-dr" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Short Answer (TL;DR)</h2>
          <p className="mb-4">
            Boston Terriers thrive on a balanced diet with moderate protein, healthy fats, and digestible carbohydrates.
            Because the breed is prone to allergies and sensitive digestion, gradual transitions, limited-ingredient
            foods, and careful treat moderation are essential.
          </p>

          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Quick note:</strong> Most Boston Terrier stomach issues stem from rapid food changes, high-fat
            treats, or undiscovered allergies — all of which are manageable.
          </div>
        </section>

        {/* MACRONUTRIENTS */}
        <section id="macros" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Ideal Macronutrient Breakdown for Boston Terriers</h2>
          <p className="mb-3">
            Boston Terriers benefit from a nutrient profile that balances energy needs with digestive comfort.
          </p>

          <h3 className="font-semibold mb-2">General Nutrition Targets</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>Protein:</strong> 22–28% for adults, 26–30% for puppies</li>
            <li><strong>Fat:</strong> 10–18% depending on activity</li>
            <li><strong>Carbohydrates:</strong> Easily digestible sources like rice, oats, or sweet potato</li>
            <li><strong>Fiber:</strong> Moderate levels to prevent gas (common in the breed)</li>
          </ul>

          <p className="text-sm text-gray-700">
            Growth phases explained here:{' '}
            <Link href="/en/blog/boston-terrier-puppy-guide-2025" className="underline hover:opacity-80">
              Boston Terrier Puppy Guide
            </Link>.
          </p>
        </section>

        {/* SENSITIVE STOMACH */}
        <section id="sensitive" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Sensitive Stomach Considerations</h2>
          <p className="mb-3">
            Boston Terriers frequently experience digestive issues such as gas, loose stool, and food intolerances.
            Slow, consistent dietary changes are essential.
          </p>

          <h3 className="font-semibold mb-2">Best Practices</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Choose limited-ingredient diets (LID) when possible</li>
            <li>Transition foods over 7–10 days</li>
            <li>Monitor stool quality during changes</li>
            <li>Avoid high-fat table foods (major source of GI upset)</li>
          </ul>

          <p className="text-sm text-gray-700 mt-3">
            See common health triggers in:{' '}
            <Link href="/en/blog/boston-terrier-health-problems" className="underline hover:opacity-80">
              Boston Terrier Health Problems
            </Link>.
          </p>
        </section>

        {/* FOOD TYPES */}
        <section id="food-types" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Wet vs Dry vs Fresh Food</h2>
          <p className="mb-3">
            Each food type has pros and cons, and many Boston Terrier owners find success with mixed feeding.
          </p>

          <h3 className="font-semibold mb-2">Dry Food (Kibble)</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Affordable and convenient</li>
            <li>Supports dental health when combined with brushing</li>
            <li>Choose formulas designed for small breeds</li>
          </ul>

          <h3 className="font-semibold mb-2">Wet Food</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>More palatable for picky eaters</li>
            <li>Higher moisture content</li>
            <li>Best used as a topper to avoid excess calories</li>
          </ul>

          <h3 className="font-semibold mb-2">Fresh / Gently Cooked</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Highly digestible</li>
            <li>Excellent for sensitive stomachs</li>
            <li>Often pricier but customizable</li>
          </ul>
        </section>

        {/* PORTION SIZES */}
        <section id="portions" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Portion Sizes by Age & Weight</h2>
          <p className="mb-3">
            Boston Terriers vary from 12–25 pounds, so portions depend on size, age, and activity level.
          </p>

          <h3 className="font-semibold mb-2">General Guidelines</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>Puppies:</strong> 3–4 meals/day based on growth stage</li>
            <li><strong>Adults:</strong> 1–1.5 cups/day split into two meals</li>
            <li><strong>Seniors:</strong> Lower calorie density to prevent weight gain</li>
          </ul>

          <p className="text-sm text-gray-700">
            Puppy feeding schedules explained in:{' '}
            <Link href="/en/blog/boston-terrier-puppy-guide-2025" className="underline hover:opacity-80">
              Boston Terrier Puppy Guide
            </Link>.
          </p>
        </section>

        {/* FOODS TO AVOID */}
        <section id="avoid" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Foods Boston Terriers Should Avoid</h2>

          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Grapes & raisins</li>
            <li>Onions & garlic</li>
            <li>Chocolate</li>
            <li>High-fat leftovers (pancreatitis risk)</li>
            <li>Rawhide chews (digestive hazard)</li>
            <li>Artificial sweeteners (especially xylitol)</li>
          </ul>
        </section>

        {/* ALLERGIES */}
        <section id="allergies" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Allergies & Elimination Diet Steps</h2>
          <p className="mb-3">
            Allergies are extremely common in Boston Terriers, and diet trials help pinpoint triggers.
          </p>

          <h3 className="font-semibold mb-2">Elimination Diet Guide</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Choose one novel protein (e.g., duck, venison, or salmon)</li>
            <li>Feed exclusively for 6–8 weeks</li>
            <li>Monitor symptoms (itching, ear redness, stool quality)</li>
            <li>Reintroduce foods one at a time</li>
          </ul>

          <p className="text-sm text-gray-700 mt-3">
            For grooming signs of allergies, see:{' '}
            <Link href="/en/blog/boston-terrier-grooming-guide-2025" className="underline hover:opacity-80">
              Boston Terrier Grooming Guide
            </Link>.
          </p>
        </section>

        {/* TREATS */}
        <section id="treats" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Treat Limits & Obesity Prevention</h2>
          <p className="mb-3">
            Boston Terriers gain weight easily, especially if treats make up more than 10% of their daily calories.
          </p>

          <h3 className="font-semibold mb-2">Guidelines</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Treats should be ≤ 10% of daily intake</li>
            <li>Avoid high-fat jerky and cheese</li>
            <li>Use veggies like carrots or green beans as low-cal options</li>
          </ul>

          <p className="text-sm text-gray-700">
            For activity level expectations, see:{' '}
            <Link href="/en/blog/boston-terrier-exercise-requirements" className="underline hover:opacity-80">
              Boston Terrier Exercise Requirements
            </Link>.
          </p>
        </section>

        {/* SAMPLE FEEDING SCHEDULE */}
        <section id="schedule" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Sample Feeding Schedule (Morning & Evening)</h2>
          <p className="mb-3">
            Split meals help maintain stable energy levels and prevent stomach upset — something Boston Terriers are
            known for.
          </p>

          <h3 className="font-semibold mb-2">Example Daily Schedule</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>7:00 AM:</strong> Breakfast + quick potty break</li>
            <li><strong>12:00 PM:</strong> Light training treats only</li>
            <li><strong>5:30 PM:</strong> Dinner + short walk</li>
            <li><strong>8:00 PM:</strong> Final potty break</li>
          </ul>

          <p className="text-sm text-gray-700 mt-3">
            Behavioral support notes:{' '}
            <Link href="/en/blog/boston-terrier-behavior-problems-2025" className="underline hover:opacity-80">
              Boston Terrier Behavior Problems
            </Link>.
          </p>
        </section>

        {/* REFERENCES */}
        <section id="references" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">📚 References</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            <li>Veterinary nutrition guidelines</li>
            <li>AAFCO dog food nutrient profiles</li>
            <li>Breed-specific digestive studies</li>
          </ul>
        </section>

        {/* Back to Blog */}
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
