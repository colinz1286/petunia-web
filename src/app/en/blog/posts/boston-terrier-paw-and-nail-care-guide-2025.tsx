'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function BostonTerrierPawAndNailCareGuide2025() {
  const locale = useLocale();

  const title =
    'Boston Terrier Paw & Nail Care Guide (2025): Trimming Schedule, Paw Pad Health, Seasonal Risks & Allergy Warning Signs';
  const date = 'December 1, 2025';
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
    breed_specific_guides: 'Breed Specific Guides'
  };

  return (
    <>

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

        {/* Navigation */}
        <nav className="mb-8 text-sm">
          <ul className="flex flex-wrap gap-3">
            <li><a href="#tldr" className="underline hover:opacity-80">TL;DR</a></li>
            <li><a href="#growth" className="underline hover:opacity-80">Nail Growth Patterns</a></li>
            <li><a href="#schedule" className="underline hover:opacity-80">Trimming Schedule</a></li>
            <li><a href="#steps" className="underline hover:opacity-80">How to Trim Nails</a></li>
            <li><a href="#pads" className="underline hover:opacity-80">Paw Pad Care</a></li>
            <li><a href="#seasonal" className="underline hover:opacity-80">Seasonal Risks</a></li>
            <li><a href="#warning" className="underline hover:opacity-80">Allergy & Injury Signs</a></li>
            <li><a href="#references" className="underline hover:opacity-80">📚 References</a></li>
          </ul>
        </nav>

        {/* TL;DR */}
        <section id="tldr" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Short Answer (TL;DR)</h2>
          <p className="mb-4">
            Boston Terriers often have fast-growing nails that require trimming every **2–4 weeks**. 
            Healthy paw pads need moisturizing, seasonal protection, and regular inspection. 
            Excessive licking, redness, or limping may indicate allergies, dryness, or injury. 
            Proper grooming prevents long-term joint, posture, and skin problems.
          </p>

          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Reminder:</strong> Boston Terriers walk differently when nails get long—this affects joints over time.
          </div>
        </section>

        {/* NAIL GROWTH PATTERNS */}
        <section id="growth" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Boston Terrier Nail Growth Patterns</h2>
          <p className="mb-4">
            Unlike large breeds whose nails wear down naturally, Boston Terriers often do not grind their nails enough 
            through daily activity. Their lighter build + indoor living means nails stay longer unless trimmed regularly.
          </p>

          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Puppy nails grow quickly due to rapid metabolism</li>
            <li>Adults may need trims every 2–4 weeks</li>
            <li>Seniors often have brittle nails requiring gentler handling</li>
          </ul>

          <p className="text-sm text-gray-700">
            For more senior-specific grooming needs, see:{' '}
            <Link
              href="/en/blog/senior-boston-terrier-care-2025"
              className="underline hover:opacity-80"
            >
              Senior Boston Terrier Care
            </Link>.
          </p>
        </section>

        {/* SCHEDULE */}
        <section id="schedule" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">How Often Should You Trim Boston Terrier Nails?</h2>
          <p className="mb-4">
            A consistent trimming schedule prevents discomfort and improves mobility. 
            Use these general guidelines:
          </p>

          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>Puppies:</strong> Every 1–2 weeks (nails grow fast)</li>
            <li><strong>Adults:</strong> Every 2–4 weeks</li>
            <li><strong>Seniors:</strong> Every 2–3 weeks (nails thicken and curl quicker)</li>
          </ul>

          <p className="mb-3">
            A good rule: If nails click loudly on hard floors, they’re too long.
          </p>

          <p className="text-sm text-gray-700">
            Long nails can worsen posture and joint strain—learn more about aging mobility in:{' '}
            <Link
              href="/en/blog/senior-boston-terrier-care-2025"
              className="underline hover:opacity-80"
            >
              Senior Boston Terrier Care
            </Link>.
          </p>
        </section>

        {/* STEP-BY-STEP TRIMMING */}
        <section id="steps" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Step-by-Step Nail Trimming Routine</h2>
          <p className="mb-4">
            Nail trimming is easier and safer when the dog is calm. 
            Follow this gentle, Boston-sensitive method:
          </p>

          <h3 className="font-semibold mb-2">1. Prepare the Tools</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Sharp guillotine or scissor-style trimmers</li>
            <li>Styptic powder (to stop bleeding if needed)</li>
            <li>Treats for positive reinforcement</li>
          </ul>

          <h3 className="font-semibold mb-2">2. Position the Dog Comfortably</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Sit them on your lap or a secure mat</li>
            <li>Hold each paw gently but firmly</li>
          </ul>

          <h3 className="font-semibold mb-2">3. Trim a Small Amount at a Time</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Avoid cutting into the quick (pink area)</li>
            <li>For black nails, trim tiny bits until the center looks gray—not white or pink</li>
          </ul>

          <h3 className="font-semibold mb-2">4. Smooth Edges If Needed</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Use a file or grinder for a clean finish</li>
          </ul>

          <p className="text-sm text-gray-700">
            If trimming is stressful due to anxiety or fear, compare coping techniques in:{' '}
            <Link
              href="/en/blog/boston-terrier-behavior-problems-2025"
              className="underline hover:opacity-80"
            >
              Boston Terrier Behavior Problems
            </Link>.
          </p>
        </section>

        {/* PAW PAD CARE */}
        <section id="pads" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Paw Pad Care: Balm, Cracks & Dryness</h2>
          <p className="mb-4">
            Paw pads are tough, but Boston Terriers are prone to dryness—especially in winter or on hot pavement.
          </p>

          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Apply paw balm 2–3 times per week</li>
            <li>Check for cracks, peeling, or redness</li>
            <li>Wipe paws after walks to remove irritants</li>
            <li>Use booties during extreme temperatures</li>
          </ul>

          <p className="text-sm text-gray-700">
            Dry skin and allergies often overlap—see:{' '}
            <Link
              href="/en/blog/boston-terrier-allergies-2025"
              className="underline hover:opacity-80"
            >
              Boston Terrier Allergies
            </Link>.
          </p>
        </section>

        {/* SEASONAL RISKS */}
        <section id="seasonal" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Seasonal Paw Risks: Salt, Heat & Ice</h2>
          <p className="mb-4">
            Boston Terrier paws are sensitive to environmental extremes, and seasonal hazards can cause 
            irritation or burns.
          </p>

          <h3 className="font-semibold mb-2">Winter Risks</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Salt and ice-melt chemicals (cause burns and dryness)</li>
            <li>Sharp ice edges leading to cuts</li>
            <li>Cracked pads from low humidity</li>
          </ul>

          <h3 className="font-semibold mb-2">Summer Risks</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Hot pavement causing paw burns</li>
            <li>Dehydration increasing pad dryness</li>
            <li>Increased pollen exposure irritating skin</li>
          </ul>

          <p className="text-sm text-gray-700">
            For temperature-related risks overall, compare with:{' '}
            <Link
              href="/en/blog/boston-terrier-heat-sensitivity-2025"
              className="underline hover:opacity-80"
            >
              Heat Sensitivity
            </Link>{' '}
            and{' '}
            <Link
              href="/en/blog/do-boston-terriers-get-cold-easily-2025"
              className="underline hover:opacity-80"
            >
              Cold Sensitivity
            </Link>.
          </p>
        </section>

        {/* ALLERGY & INJURY WARNING SIGNS */}
        <section id="warning" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">When Paw Discomfort Signals Allergies or Injury</h2>
          <p className="mb-4">
            Excessive licking, limping, redness, or swelling often indicates something more than dryness. 
            Boston Terriers commonly react to environmental allergens through their paws.
          </p>

          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Chewing or licking paws constantly</li>
            <li>Redness between toes</li>
            <li>Yeasty odor (sign of infection)</li>
            <li>Sudden limping or sensitivity</li>
            <li>Cracked pads that worsen despite balm</li>
          </ul>

          <p className="text-sm text-gray-700">
            Chronic paw issues are often tied to allergies—learn more in:{' '}
            <Link
              href="/en/blog/boston-terrier-allergies-2025"
              className="underline hover:opacity-80"
            >
              Boston Terrier Allergies
            </Link>.
          </p>

          <p className="text-sm text-gray-700 mt-2">
            If discomfort comes with breathing changes during walks, review:{' '}
            <Link
              href="/en/blog/boston-terrier-breathing-issues-2025"
              className="underline hover:opacity-80"
            >
              Boston Terrier Breathing Issues
            </Link>.
          </p>
        </section>

        {/* REFERENCES */}
        <section id="references" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">📚 References</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            <li>Veterinary dermatology & podiatry references</li>
            <li>Seasonal paw safety guidelines</li>
            <li>Allergy and inflammation research</li>
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
