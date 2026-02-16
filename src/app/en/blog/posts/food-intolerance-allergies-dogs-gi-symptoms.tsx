'use client';

import Head from 'next/head';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function FoodIntoleranceAllergiesDogsGISymptoms() {
  const locale = useLocale();

  const title =
    'Food Intolerance vs Food Allergy in Dogs: GI Symptoms, Triggers, and the Elimination Diet Plan';
  const date = 'December 13, 2025';
  const categories = ['owner'] as const;

  const categoryLabels: Record<string, string> = {
    owner: 'Pet Owners',
    food: 'Dog Food & Nutrition',
    boarding: 'Boarding & Daycare',
    sitter: 'Pet Sitters',
    walker: 'Dog Walkers',
    rescue: 'Rescues',
    vet: 'Veterinary Clinics',
  };

  return (
    <>
      <Head>
        <title>{title} – Petunia Blog</title>
        <meta
          name="description"
          content="Food intolerance and food allergy can both cause vomiting, diarrhea, gas, and chronic soft stool in dogs. Learn the difference, common triggers, how elimination diets work, and why many limited-ingredient foods fail."
        />
        <meta name="robots" content="all" />
      </Head>

      <main className="max-w-3xl mx-auto px-4 py-10 text-[#2c4a30]">
        <p className="text-sm text-gray-500 mb-2">Posted on {date}</p>
        <h1 className="text-3xl font-bold mb-4">{title}</h1>

        {/* Category Tags */}
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

        {/* Intro */}
        <p className="text-lg mb-6">
          If your dog has recurring vomiting, intermittent diarrhea, chronic soft stool, gas, or a
          sensitive stomach that never seems to fully stabilize, food reactions are often high on the
          suspect list. The tricky part is that not all food reactions are the same. A true food allergy
          involves the immune system, while food intolerance is usually a digestive response to an
          ingredient, formulation, or nutrient profile.
        </p>

        {/* TL;DR */}
        <h2 className="text-2xl font-semibold mt-8 mb-3">TL;DR</h2>
        <ul className="list-disc pl-5 space-y-2 mb-8">
          <li>Food intolerance is a digestive response; food allergy involves the immune system.</li>
          <li>Both can cause GI symptoms such as vomiting, diarrhea, gas, or chronic soft stool.</li>
          <li>Many dogs have a mixed picture, including skin symptoms like itching or ear infections.</li>
          <li>
            The most reliable way to evaluate food reactions is a structured elimination diet guided by
            a veterinarian.
          </li>
        </ul>

        {/* Table of Contents */}
        <h2 className="text-2xl font-semibold mb-3">Table of Contents</h2>
        <ul className="list-disc pl-5 space-y-1 mb-10">
          <li>Food Intolerance vs Food Allergy</li>
          <li>Common Dietary Triggers</li>
          <li>GI-Only Symptoms vs Skin and GI Overlap</li>
          <li>Why Food Reactions Often Develop Over Time</li>
          <li>Elimination Diets</li>
          <li>Veterinary Diagnostics and Misdiagnosis Risks</li>
          <li>Novel Proteins and Hydrolyzed Diets</li>
          <li>Why Many Limited-Ingredient Diets Fail</li>
          <li>Long-Term Management Strategies</li>
          <li>Monitoring Relapse and Flare-Ups</li>
        </ul>

        {/* Section 1 */}
        <h2 className="text-2xl font-semibold mt-10 mb-3">Food Intolerance vs Food Allergy</h2>
        <p className="mb-4">
          Food intolerance is a non-immune reaction. It is often related to digestion, absorption,
          ingredient sensitivity, fat content, fiber levels, additives, or how a specific formula
          interacts with the dog&rsquo;s gut. Intolerance can look like chronic soft stool, gas, or
          intermittent diarrhea that improves with diet adjustments.
        </p>
        <p className="mb-6">
          A true food allergy involves an immune response to a protein component in the diet. Allergies
          can cause GI symptoms, skin symptoms, or both. In practice, the distinction matters because
          the long-term approach is different: intolerance may be managed with careful diet selection,
          while allergy often requires strict avoidance of the triggering proteins.
        </p>

        {/* Bullet list (meets frequency requirement) */}
        <ul className="list-disc pl-5 space-y-2 mb-8">
          <li>
            <strong>Intolerance:</strong> digestive sensitivity, dose-dependent reactions, may vary by
            formulation.
          </li>
          <li>
            <strong>Allergy:</strong> immune-mediated, can involve itching, ears, skin, and GI signs.
          </li>
          <li>
            <strong>Real-world overlap:</strong> many dogs do not fit neatly into a single category.
          </li>
        </ul>

        {/* Section 2 */}
        <h2 className="text-2xl font-semibold mt-10 mb-3">Common Dietary Triggers in Dogs</h2>
        <p className="mb-4">
          There is no universal list of triggers for every dog, but some ingredients and dietary patterns
          are repeatedly associated with GI upset or allergic reactions. The most important point is
          that a trigger is specific to the individual dog, not a general rule for all dogs.
        </p>
        <p className="mb-4">
          Proteins are often the most discussed triggers in true allergies, but intolerances can involve
          fat levels, certain fibers, dairy exposure, or additives. Additionally, frequent treats and
          table scraps can complicate the picture, making it harder to identify what is actually driving
          symptoms.
        </p>
        <ul className="list-disc pl-5 space-y-2 mb-8">
          <li>Common proteins: chicken, beef, dairy, egg, and fish (varies by dog and exposure history)</li>
          <li>High-fat diets or frequent fatty treats</li>
          <li>Sudden food changes and frequent formula switching</li>
          <li>Highly processed treats with multiple ingredients</li>
          <li>Flavorings, binders, or additives in some formulations</li>
        </ul>

        {/* Section 3 */}
        <h2 className="text-2xl font-semibold mt-10 mb-3">GI-Only Symptoms vs Skin and GI Overlap</h2>
        <p className="mb-4">
          Some dogs experience GI-only signs: chronic soft stool, intermittent diarrhea, gas, nausea,
          or vomiting. Other dogs show a mixed picture that includes itching, paw licking, recurrent ear
          infections, or skin inflammation alongside GI symptoms.
        </p>
        <p className="mb-6">
          That overlap can be a clue, but it is not definitive. Skin signs can be environmental allergies,
          parasites, infections, or irritation unrelated to food. This is one reason structured
          diagnostics matter rather than guessing based on symptom type alone.
        </p>

        {/* Internal links (no links in headings or TL;DR) */}
        <div className="rounded-xl bg-[#f7f4ee] border border-[#d9cfc2] p-4 mb-10">
          <p className="mb-3 font-semibold">Related reading in this GI cluster:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Start with the high-level overview in{' '}
              <Link href={`/${locale}/blog/common-gi-problems-in-dogs`} className="underline">
                Common Gastrointestinal Problems in Dogs
              </Link>.
            </li>
            <li>
              If digestibility and formula quality are the bigger issue, see{' '}
              <Link href={`/${locale}/blog/poor-dog-food-digestive-problems`} className="underline">
                Poor-Quality Diets and Digestive Problems in Dogs
              </Link>.
            </li>
            <li>
              If symptoms persist across multiple foods, learn about microbiome imbalance in{' '}
              <Link href={`/${locale}/blog/gut-dysbiosis-in-dogs`} className="underline">
                Gut Dysbiosis in Dogs
              </Link>.
            </li>
          </ul>
        </div>

        {/* Section 4 */}
        <h2 className="text-2xl font-semibold mt-10 mb-3">
          Why Food Reactions Often Develop Over Time
        </h2>
        <p className="mb-4">
          Many owners expect a food reaction to happen instantly. In reality, both intolerance patterns
          and immune-mediated allergies can develop gradually. A dog may tolerate a food for months or
          years and then begin showing chronic symptoms as exposures accumulate or as the gut becomes
          more sensitive.
        </p>
        <p className="mb-6">
          There are also practical reasons reactions appear later: diet changes, treat changes, aging,
          stress, illness, antibiotic exposure, and environmental shifts can all influence gut stability.
          This is why a timeline of diet history, treats, and symptom onset is so valuable.
        </p>

        {/* Section 5 */}
        <h2 className="text-2xl font-semibold mt-10 mb-3">Elimination Diets</h2>
        <p className="mb-4">
          The elimination diet is considered the most reliable tool for evaluating food reactions in
          dogs. The core concept is simple: remove suspected triggers by feeding a tightly controlled
          diet for long enough to see whether symptoms improve, then reintroduce components in a
          structured way to identify the trigger.
        </p>
        <p className="mb-4">
          The execution is what makes it hard. An elimination diet only works if it is strict. That
          means no flavored medications, no random treats, no table scraps, and no additional foods
          unless they are part of the plan.
        </p>

        <ul className="list-disc pl-5 space-y-2 mb-8">
          <li>
            <strong>Trial duration:</strong> many plans run 8–12 weeks, depending on symptoms and your
            veterinarian&rsquo;s guidance.
          </li>
          <li>
            <strong>Strict control:</strong> every calorie matters, including chew items and training
            treats.
          </li>
          <li>
            <strong>Structured re-challenge:</strong> improvements alone do not identify the trigger; a
            careful reintroduction phase is often needed.
          </li>
        </ul>

        {/* Section 6 */}
        <h2 className="text-2xl font-semibold mt-10 mb-3">
          Veterinary Diagnostics and Misdiagnosis Risks
        </h2>
        <p className="mb-4">
          Food reactions are frequently over-suspected and under-confirmed. GI symptoms can be caused by
          parasites, stress colitis, infections, pancreatic disease, foreign body risk, endocrine
          disease, and more. A food trial makes sense when the overall clinical picture supports it, but
          it should not be used to avoid investigating serious red flags.
        </p>
        <p className="mb-6">
          Another common issue is misdiagnosis driven by incomplete trials. If a dog eats chicken-based
          treats while on a chicken-free diet, the trial is no longer controlled. If owners change three
          variables at once, it becomes impossible to know what helped.
        </p>

        {/* Bullet list (meets frequency requirement) */}
        <ul className="list-disc pl-5 space-y-2 mb-8">
          <li>Fecal testing may be needed to rule out parasites, especially in chronic diarrhea.</li>
          <li>Bloodwork can help identify dehydration, inflammation, or organ dysfunction.</li>
          <li>Some dogs need imaging when pain, bloating, or repeated vomiting is present.</li>
          <li>Diet trials should be coordinated with your veterinarian for safety and clarity.</li>
        </ul>

        {/* Section 7 */}
        <h2 className="text-2xl font-semibold mt-10 mb-3">
          Novel Proteins and Hydrolyzed Diets
        </h2>
        <p className="mb-4">
          Two common elimination diet approaches are novel protein diets and hydrolyzed protein diets.
          Novel protein diets use a protein source the dog has not been exposed to before, with limited
          additional ingredients. Hydrolyzed diets contain proteins that are broken into smaller
          components designed to reduce immune recognition in allergic dogs.
        </p>
        <p className="mb-6">
          Which approach is appropriate depends on the dog&rsquo;s history, symptom pattern, and the
          veterinarian&rsquo;s assessment. Dogs with many prior diet exposures may not have a truly novel
          protein left, which is one reason hydrolyzed diets are frequently used in veterinary plans.
        </p>

        {/* Section 8 */}
        <h2 className="text-2xl font-semibold mt-10 mb-3">
          Why Many Limited-Ingredient Diets Fail
        </h2>
        <p className="mb-4">
          Many over-the-counter limited-ingredient foods are helpful for some dogs, but they fail for
          others. One reason is that the term &ldquo;limited ingredient&rdquo; does not guarantee a diet
          is appropriate for an elimination trial or an allergic dog.
        </p>
        <p className="mb-4">
          Another reason is formulation variability. Two limited-ingredient diets may have different fat
          levels, fiber types, processing methods, and digestibility. If your dog is intolerant to fat
          level changes, switching to a new limited-ingredient formula can still trigger symptoms even
          when the label looks &ldquo;simple.&rdquo;
        </p>
        <ul className="list-disc pl-5 space-y-2 mb-8">
          <li>Some diets include multiple proteins through additives or flavorings.</li>
          <li>Frequent treat use can undermine diet consistency.</li>
          <li>Fat and fiber shifts can cause intolerance-style symptoms.</li>
          <li>Ingredient lists do not capture digestibility or processing effects.</li>
        </ul>

        {/* Section 9 */}
        <h2 className="text-2xl font-semibold mt-10 mb-3">
          Long-Term Dietary Management Strategies
        </h2>
        <p className="mb-4">
          Long-term management depends on what the diagnostic process reveals. For intolerance patterns,
          success often comes from consistency, controlled transitions, and selecting a formula that your
          dog reliably tolerates. For confirmed allergies, the goal is strict avoidance of triggering
          proteins and a stable plan that is realistic for your household.
        </p>
        <p className="mb-6">
          Once stability is achieved, many owners make the mistake of rapidly expanding treat variety or
          frequently changing foods again. That often reintroduces the same cycle. A better approach is
          to build a small set of safe foods and treats and maintain them consistently.
        </p>

        {/* Section 10 */}
        <h2 className="text-2xl font-semibold mt-10 mb-3">
          Monitoring Relapse and Flare-Ups
        </h2>
        <p className="mb-4">
          Food reactions can be monitored like a system: track stool quality, vomiting frequency, appetite,
          skin symptoms, and ear issues. When a flare-up occurs, look for recent changes: new treats, a
          different bag of food, boarding stress, antibiotics, or a rapid diet shift.
        </p>
        <p className="mb-10">
          If symptoms recur frequently despite consistent diet control, it is worth discussing broader
          workup with your veterinarian. Some dogs have overlapping problems such as stress colitis,
          dysbiosis, or chronic inflammatory disease that require a multi-layer plan.
        </p>

        {/* References */}
        <h2 className="text-2xl font-semibold mt-10 mb-3">References</h2>
        <ul className="list-disc pl-5 space-y-2 mb-10">
          <li>American College of Veterinary Internal Medicine (ACVIM)</li>
          <li>American Veterinary Medical Association (AVMA)</li>
          <li>Merck Veterinary Manual</li>
        </ul>

        {/* Back to Blog */}
        <Link
          href={`/${locale}/blog`}
          className="underline text-[#2c4a30] font-medium hover:opacity-80"
        >
          ← Back to Blog
        </Link>

        {/* Disclaimer */}
        <p className="text-xs text-gray-500 mt-8">
          This article is for general education and does not replace veterinary diagnosis or treatment.
          If your dog has persistent vomiting, diarrhea, weight loss, blood in stool, or signs of pain,
          seek professional veterinary care.
        </p>
      </main>
    </>
  );
}
