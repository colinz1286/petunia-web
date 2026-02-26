'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function HealthyHomemadeDogMealsForActiveBreeds() {
  const locale = useLocale();

  const title = 'Healthy Homemade Dog Meals for Active Breeds';
  const date = 'October 6, 2025';
  const categories = ['owner'] as const;

  const categoryLabels: Record<string, string> = {
    owner: 'Pet Owners',
    food: 'Dog Food & Nutrition',
    health: 'Dog Health',
  };

  return (
    <>

      <main className="max-w-3xl mx-auto px-4 py-10 text-[#2c4a30]">
        <p className="text-sm text-gray-500 mb-2">Posted on {date}</p>
        <h1 className="text-3xl font-bold mb-4">{title}</h1>

        {/* 🏷️ Category Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {categories.map((key) => (
            <span
              key={key}
              className="text-xs bg-[#e4dbcb] text-[#2c4a30] px-3 py-1 rounded-full border border-[#d9cfc2]"
            >
              {categoryLabels[key]}
            </span>
          ))}
        </div>

        {/* INTRO */}
        <p className="text-lg mb-4">
          If your dog is a runner, hiker, or agility star, their diet needs go far beyond the average
          couch companion. Active breeds burn calories quickly and require meals with balanced
          proteins, carbohydrates, fats, and micronutrients to sustain performance and recovery.
          While commercial diets can meet some of these demands, homemade dog meals—when done
          correctly—offer flexibility, quality control, and freshness. This guide walks you through
          safe recipes, calorie charts, and key veterinary nutrition principles to build meals that
          truly fuel active dogs.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-3">
          Calorie Needs by Weight and Activity Level
        </h2>
        <p className="mb-4">
          Every dog has a baseline energy requirement called the <em>Resting Energy Requirement</em>
          (RER), adjusted for activity. Here’s a simple daily calorie reference chart:
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border border-[#d9cfc2]">
            <thead className="bg-[#e4dbcb]">
              <tr>
                <th className="p-2 text-left">Weight (lbs)</th>
                <th className="p-2 text-left">Low Activity</th>
                <th className="p-2 text-left">Moderate Activity</th>
                <th className="p-2 text-left">High Activity / Working</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-[#d9cfc2]">
                <td className="p-2">25</td>
                <td className="p-2">500 kcal</td>
                <td className="p-2">650 kcal</td>
                <td className="p-2">800 kcal</td>
              </tr>
              <tr className="border-t border-[#d9cfc2]">
                <td className="p-2">50</td>
                <td className="p-2">800 kcal</td>
                <td className="p-2">1 100 kcal</td>
                <td className="p-2">1 500 kcal</td>
              </tr>
              <tr className="border-t border-[#d9cfc2]">
                <td className="p-2">75</td>
                <td className="p-2">1 100 kcal</td>
                <td className="p-2">1 500 kcal</td>
                <td className="p-2">2 000 kcal</td>
              </tr>
              <tr className="border-t border-[#d9cfc2]">
                <td className="p-2">100</td>
                <td className="p-2">1 400 kcal</td>
                <td className="p-2">1 900 kcal</td>
                <td className="p-2">2 600 kcal</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mb-6">
          These are broad guidelines; energy needs rise in cold climates, during heavy training, or
          for intact males. Always monitor body condition—ribs should be palpable but not visible,
          and the waist should remain defined when viewed from above.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-3">
          Sample High-Calorie Homemade Recipes (Vet-Informed)
        </h2>
        <p className="mb-4">
          Homemade meals can safely support high energy levels if built with nutrient balance in
          mind. Here are two examples commonly recommended by veterinary nutritionists for active
          adult dogs:
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-2">Recipe #1: Chicken &amp; Brown Rice Power Bowl</h3>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>1 cup cooked brown rice</li>
          <li>1 cup diced boiled chicken breast (no skin)</li>
          <li>½ cup steamed carrots + peas</li>
          <li>1 tsp olive or fish oil for healthy fats</li>
          <li>Calcium supplement or crushed eggshell (½ tsp powder)</li>
        </ul>
        <p className="mb-4">
          This recipe provides roughly 500 kcal per serving. Add a canine multivitamin formulated for
          homemade diets to ensure adequate trace minerals.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-2">Recipe #2: Beef, Sweet Potato &amp; Quinoa Blend</h3>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>1 lb lean ground beef (90 %+)</li>
          <li>1 cup cooked quinoa</li>
          <li>½ cup roasted sweet potato</li>
          <li>1 Tbsp canola oil or salmon oil</li>
          <li>1 Tbsp finely chopped spinach</li>
        </ul>
        <p className="mb-4">
          Offers about 650 kcal per 1 ½ cups. For dogs under 40 lbs, reduce portion sizes and add a
          calcium-phosphorus supplement to maintain a safe Ca:P ratio of roughly 1.2 : 1.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-3">
          Transitioning from Kibble to Home-Prepared Meals
        </h2>
        <p className="mb-4">
          Sudden diet changes often upset a dog’s stomach. Transition over 5–7 days by mixing a small
          portion of the new recipe with the current food and gradually increasing the ratio. Monitor
          stool quality, appetite, and energy levels. Always refrigerate homemade portions for up to
          three days or freeze weekly batches.
        </p>

        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>Start with 25 % new food on Day 1–2, increase to 50 % on Day 3–4, then 75 % by Day 5–6.</li>
          <li>Add warm water to enhance aroma and encourage eating.</li>
          <li>Keep a simple food log to track reactions, bowel changes, and energy output.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-3">
          Common Nutrient Mistakes in Homemade Dog Diets
        </h2>
        <p className="mb-4">
          Even well-intentioned homemade diets can go wrong. The most common error is calcium and
          phosphorus imbalance—especially when meals rely heavily on muscle meat without bone or
          fortified supplements.
        </p>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>
            <strong>Calcium deficiency:</strong> Leads to fragile bones and dental issues. Always
            include a canine calcium source or bone meal powder measured accurately.
          </li>
          <li>
            <strong>Too little fat:</strong> Active dogs rely on fat as energy. Low-fat diets can
            cause dull coats and fatigue.
          </li>
          <li>
            <strong>Vitamin D &amp; zinc gaps:</strong> Occur when using lean meats exclusively;
            correct through multivitamins or balanced premixes.
          </li>
          <li>
            <strong>Excess protein without carbs:</strong> Causes energy crashes in endurance dogs;
            maintain 30–40 % complex carbohydrates for glycogen support.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-3">Vet-Approved Guidance and AAFCO Standards</h2>
        <p className="mb-4">
          The <strong>AAFCO (Association of American Feed Control Officials)</strong> establishes
          nutrient profiles that all dog foods—commercial or homemade—should meet. According to the
          2025 AAFCO manual, adult maintenance diets should include at least 22.5 % crude protein and
          8.5 % crude fat on a dry-matter basis. Homemade diets should be formulated to these minimums
          or exceed them slightly for active or working dogs.
        </p>

        <blockquote className="border-l-4 border-[#d9cfc2] pl-4 italic mb-6">
          “Homemade diets can be safe and effective for dogs when balanced to meet AAFCO nutrient
          profiles. Consultation with a veterinary nutritionist is the best way to ensure long-term
          health.” — 2025 AAFCO Canine Nutrition Committee
        </blockquote>

        <h2 className="text-2xl font-semibold mt-10 mb-3">
          Learn More About Dog Food and Nutrition
        </h2>
        <ul className="list-disc pl-5 space-y-2 mb-10">
          <li>
            <Link
              href="https://www.petuniapets.com/en/blog/good-housekeeping-dog-food-roundup-analysis-2025"
              target="_blank"
              className="underline text-[#2c4a30] hover:opacity-80"
            >
              Good Housekeeping Dog Food Roundup 2025 – Our Analysis
            </Link>
          </li>
          <li>
            <Link
              href="https://www.petuniapets.com/en/blog/dog-food-ingredients-to-avoid"
              target="_blank"
              className="underline text-[#2c4a30] hover:opacity-80"
            >
              Dog Food Ingredients to Avoid
            </Link>
          </li>
          <li>
            <Link
              href="https://www.petuniapets.com/en/blog/how-to-choose-the-right-dog-food"
              target="_blank"
              className="underline text-[#2c4a30] hover:opacity-80"
            >
              How to Choose the Right Dog Food
            </Link>
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-3">Key Takeaways</h2>
        <ul className="list-disc pl-5 space-y-2 mb-10">
          <li>Active dogs need calorie-dense, balanced meals to sustain performance.</li>
          <li>Homemade diets must include calcium, fat, and trace minerals to stay safe long-term.</li>
          <li>Transition gradually from kibble to reduce stomach upset.</li>
          <li>
            Use veterinary-verified supplements and reference AAFCO nutrient minimums for
            confidence.
          </li>
        </ul>

        {/* Back link */}
        <Link
          href={`/${locale}/blog`}
          className="underline text-[#2c4a30] font-medium hover:opacity-80"
        >
          ← Back to Blog
        </Link>

        <p className="text-xs text-gray-500 mt-8">
          This article is for educational purposes only and does not replace individualized guidance
          from a licensed veterinarian or board-certified veterinary nutritionist.
        </p>
      </main>
    </>
  );
}
