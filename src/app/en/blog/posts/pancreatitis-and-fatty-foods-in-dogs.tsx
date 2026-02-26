'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function PancreatitisAndFattyFoodsInDogs() {
  const locale = useLocale();

  const title =
    'Pancreatitis and High-Fat Foods in Dogs: Symptoms, Risks, Treatment, and Prevention';
  const date = 'December 17, 2025';
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
          Pancreatitis is one of the most serious gastrointestinal conditions dogs can develop, and
          it is often linked to dietary fat exposure. Many cases appear suddenly after a dog eats a
          rich meal, table scraps, or an unusually fatty treat. Others develop gradually due to
          repeated dietary stress on the pancreas.
        </p>

        <p className="mb-6">
          This article explains what pancreatitis is, why fat plays such a central role, how the
          condition is diagnosed and treated, and how owners can reduce the risk of recurrence
          through long-term management.
        </p>

        {/* TL;DR */}
        <h2 className="text-2xl font-semibold mt-8 mb-3">TL;DR</h2>
        <ul className="list-disc pl-5 space-y-2 mb-8">
          <li>Pancreatitis is inflammation of the pancreas and can be mild or life-threatening.</li>
          <li>High-fat foods are a major trigger, especially in susceptible dogs.</li>
          <li>Symptoms often include vomiting, abdominal pain, and loss of appetite.</li>
          <li>Dietary management is critical for both recovery and long-term prevention.</li>
        </ul>

        {/* Table of Contents */}
        <h2 className="text-2xl font-semibold mb-3">Table of Contents</h2>
        <ul className="list-disc pl-5 space-y-1 mb-10">
          <li>What Pancreatitis Is and Why It Occurs</li>
          <li>The Role of Dietary Fat</li>
          <li>High-Risk Breeds and Individuals</li>
          <li>Acute vs Chronic Pancreatitis</li>
          <li>Symptoms and Disease Progression</li>
          <li>Diagnostic Testing and Imaging</li>
          <li>Treatment and Recovery Timelines</li>
          <li>Long-Term Dietary Management</li>
          <li>Preventing Recurrence</li>
          <li>Myths About Treats and Table Scraps</li>
        </ul>

        {/* Section 1 */}
        <h2 className="text-2xl font-semibold mt-10 mb-3">
          What Pancreatitis Is and Why It Occurs
        </h2>
        <p className="mb-4">
          The pancreas is an organ that produces digestive enzymes and hormones involved in blood
          sugar regulation. In pancreatitis, digestive enzymes activate prematurely inside the
          pancreas instead of in the intestines. This leads to inflammation, tissue damage, and pain.
        </p>
        <p className="mb-6">
          The exact cause is not always clear, but dietary factors, metabolic stress, and individual
          susceptibility all play a role. Once inflamed, the pancreas can affect nearby organs and
          trigger systemic illness.
        </p>

        {/* Section 2 */}
        <h2 className="text-2xl font-semibold mt-10 mb-3">
          The Role of Dietary Fat in Triggering Episodes
        </h2>
        <p className="mb-4">
          Fat is a potent stimulus for pancreatic enzyme release. In dogs that are predisposed,
          sudden ingestion of high-fat foods can overwhelm pancreatic regulation and initiate
          inflammation.
        </p>
        <p className="mb-6">
          This is why many pancreatitis cases appear after holidays, parties, or unexpected access to
          table scraps. Even a single high-fat meal can be enough to trigger an episode in some dogs.
        </p>

        {/* Section 3 */}
        <h2 className="text-2xl font-semibold mt-10 mb-3">
          High-Risk Breeds and Individuals
        </h2>
        <p className="mb-4">
          While any dog can develop pancreatitis, certain dogs appear to be at higher risk. This
          includes dogs with prior pancreatitis episodes, obesity, endocrine disease, or chronic GI
          sensitivity.
        </p>
        <ul className="list-disc pl-5 space-y-2 mb-8">
          <li>Dogs with a history of pancreatitis</li>
          <li>Overweight or obese dogs</li>
          <li>Dogs with diabetes or endocrine disorders</li>
          <li>Dogs with repeated dietary indiscretion</li>
          <li>Some small and toy breeds (risk varies by individual)</li>
        </ul>

        {/* Internal Links */}
        <div className="rounded-xl bg-[#f7f4ee] border border-[#d9cfc2] p-4 mb-10">
          <p className="mb-3 font-semibold">Related reading in this GI cluster:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              For a full overview of GI symptoms and causes, see{' '}
              <Link href={`/${locale}/blog/common-gi-problems-in-dogs`} className="underline">
                Common Gastrointestinal Problems in Dogs
              </Link>.
            </li>
            <li>
              If pancreatitis followed scavenging or rich food ingestion, read{' '}
              <Link href={`/${locale}/blog/dietary-indiscretion-in-dogs`} className="underline">
                Dietary Indiscretion in Dogs
              </Link>.
            </li>
            <li>
              If vomiting occurs with decreased stool output or abdominal pain, see{' '}
              <Link href={`/${locale}/blog/intestinal-blockage-dogs-symptoms`} className="underline">
                Intestinal Blockages in Dogs
              </Link>.
            </li>
          </ul>
        </div>

        {/* Section 4 */}
        <h2 className="text-2xl font-semibold mt-10 mb-3">
          Acute vs Chronic Pancreatitis
        </h2>
        <p className="mb-4">
          Acute pancreatitis appears suddenly and can range from mild to life-threatening. Some dogs
          recover fully after one episode, while others experience severe complications.
        </p>
        <p className="mb-6">
          Chronic pancreatitis involves repeated or persistent inflammation. Over time, it can
          reduce pancreatic function and increase sensitivity to dietary fat, making long-term
          management essential.
        </p>

        {/* Section 5 */}
        <h2 className="text-2xl font-semibold mt-10 mb-3">
          Symptoms and Disease Progression
        </h2>
        <p className="mb-4">
          Symptoms often progress rapidly and may worsen over hours to days. Dogs may become
          dehydrated and painful, and some refuse to eat entirely.
        </p>
        <ul className="list-disc pl-5 space-y-2 mb-8">
          <li>Repeated vomiting or retching</li>
          <li>Abdominal pain or a hunched posture</li>
          <li>Lethargy and weakness</li>
          <li>Loss of appetite</li>
          <li>Diarrhea in some cases</li>
          <li>Fever or signs of systemic illness in severe cases</li>
        </ul>

        {/* Section 6 */}
        <h2 className="text-2xl font-semibold mt-10 mb-3">
          Diagnostic Testing and Imaging
        </h2>
        <p className="mb-4">
          Diagnosis usually involves a combination of clinical signs, blood testing, and imaging.
          Specific pancreatic enzyme tests can support the diagnosis, but no single test is perfect.
        </p>
        <p className="mb-6">
          Abdominal ultrasound is often used to evaluate pancreatic inflammation and rule out other
          causes of vomiting and pain, such as obstruction.
        </p>

        {/* Section 7 */}
        <h2 className="text-2xl font-semibold mt-10 mb-3">
          Treatment and Recovery Timelines
        </h2>
        <p className="mb-4">
          Treatment focuses on supportive care: controlling pain, managing nausea, correcting
          dehydration, and allowing the pancreas to rest. Hospitalization may be required in
          moderate-to-severe cases.
        </p>
        <p className="mb-6">
          Recovery time varies. Mild cases may improve within days, while severe cases can take weeks
          and require ongoing monitoring.
        </p>

        {/* Section 8 */}
        <h2 className="text-2xl font-semibold mt-10 mb-3">
          Long-Term Dietary Management
        </h2>
        <p className="mb-4">
          Long-term management usually includes a carefully selected low-fat diet. The goal is to
          reduce pancreatic stimulation while still meeting nutritional needs.
        </p>
        <p className="mb-6">
          Treats, chews, and supplements must also be evaluated for fat content. Many relapses occur
          because hidden fat sources are overlooked.
        </p>

        {/* Section 9 */}
        <h2 className="text-2xl font-semibold mt-10 mb-3">
          Preventing Recurrence
        </h2>
        <p className="mb-4">
          Prevention is centered on consistency and avoidance of high-fat exposure. Dogs with a
          pancreatitis history should not receive table scraps or rich treats, even in small amounts.
        </p>
        <ul className="list-disc pl-5 space-y-2 mb-10">
          <li>Feed a veterinarian-recommended low-fat diet</li>
          <li>Avoid table scraps, fatty treats, and unpredictable food exposure</li>
          <li>Maintain a healthy body weight</li>
          <li>Transition foods slowly and deliberately</li>
          <li>Discuss any diet or treat changes with your veterinarian</li>
        </ul>

        {/* Section 10 */}
        <h2 className="text-2xl font-semibold mt-10 mb-3">
          Myths About “Treats” and Table Scraps
        </h2>
        <p className="mb-4">
          A common myth is that a small amount of rich food is harmless. For dogs prone to
          pancreatitis, even a single exposure can trigger a flare-up. Another misconception is that
          homemade or &ldquo;natural&rdquo; treats are always safer, which is not necessarily true if fat
          content is high.
        </p>
        <p className="mb-10">
          The safest approach is clarity and consistency. Every calorie counts, and preventing
          pancreatitis is far easier than treating it.
        </p>

        {/* References */}
        <h2 className="text-2xl font-semibold mt-10 mb-3">References</h2>
        <ul className="list-disc pl-5 space-y-2 mb-10">
          <li>Merck Veterinary Manual</li>
          <li>American College of Veterinary Internal Medicine (ACVIM)</li>
          <li>American Veterinary Medical Association (AVMA)</li>
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
          This article is for educational purposes only and does not replace professional veterinary
          diagnosis or treatment. If your dog has repeated vomiting, severe abdominal pain, lethargy,
          or collapse, seek veterinary care immediately.
        </p>
      </main>
    </>
  );
}
