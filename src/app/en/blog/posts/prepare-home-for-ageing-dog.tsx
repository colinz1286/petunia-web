'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function PrepareHomeForAgeingDog() {
  const locale = useLocale();

  const title =
    'How to Prepare Your Home for an Ageing Dog: Surfaces, Lighting, Temperature, and Safety Layouts';
  const date = 'December 3, 2025';
  const categories = ['owner', 'veterinary'] as const;

  const categoryLabels: Record<string, string> = {
    owner: 'Pet Owners',
    veterinary: 'Veterinary Clinics',
    boarding: 'Boarding',
    daycare: 'Daycare',
    rescue: 'Rescues',
    walker: 'Dog Walkers',
    sitter: 'Pet Sitters',
    breeder: 'Breeders',
    breed_specific_guides: 'Breed Specific Guides'
  };

  return (
    <>

      <main className="max-w-3xl mx-auto px-4 py-10">
        {/* Date */}
        <p className="text-sm text-gray-600 mb-2">Posted on {date}</p>

        {/* Title */}
        <h1 className="text-3xl font-bold mb-4">{title}</h1>

        {/* Category Pills */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => (
            <span
              key={cat}
              className="text-xs bg-[#e4dbcb] text-[#2c4a30] px-3 py-1 rounded-full border border-[#d9cfc2]"
            >
              {categoryLabels[cat]}
            </span>
          ))}
        </div>

        {/* Table of Contents */}
        <nav className="mb-8 text-sm">
          <ul className="flex flex-wrap gap-4">
            <li><a href="#tldr" className="underline hover:opacity-80">TL;DR</a></li>
            <li><a href="#flooring" className="underline hover:opacity-80">Flooring Solutions</a></li>
            <li><a href="#lighting" className="underline hover:opacity-80">Lighting for Ageing Eyes</a></li>
            <li><a href="#temperature" className="underline hover:opacity-80">Temperature Regulation</a></li>
            <li><a href="#layouts" className="underline hover:opacity-80">Safe Sleeping, Feeding & Walk Paths</a></li>
            <li><a href="#falls" className="underline hover:opacity-80">Preventing Slips & Nighttime Disorientation</a></li>
            <li><a href="#modifications" className="underline hover:opacity-80">Affordable vs Premium Modifications</a></li>
            <li><a href="#conclusion" className="underline hover:opacity-80">Conclusion</a></li>
            <li><a href="#sources" className="underline hover:opacity-80">Sources</a></li>
          </ul>
        </nav>

        {/* TL;DR */}
        <section id="tldr" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Short Answer (TL;DR)</h2>
          <p className="mb-4">
            Senior dogs benefit from a home designed for stability, comfort, and predictability. Traction mats, improved lighting,
            warm but ventilated spaces, safe walk paths, and nighttime visibility reduce stress and prevent falls. Many modifications
            are low-cost and significantly improve quality of life for ageing dogs.
          </p>
        </section>

        {/* Section 1 — Flooring */}
        <section id="flooring" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Flooring Solutions That Protect Joints</h2>
          <p className="mb-4">
            Slippery floors are one of the top hazards for senior dogs. Reduced traction causes instability, joint strain, and falls.
            Improving floor grip immediately increases mobility confidence.
          </p>

          <ul className="list-disc pl-5 mb-4">
            <li>Use non-slip runners on hardwood or tile.</li>
            <li>Place traction mats where dogs frequently stand—food bowl areas, doorways, hallways.</li>
            <li>Choose supportive rugs that stay flat and resist sliding.</li>
            <li>Avoid high-pile rugs that catch paws and cause tripping.</li>
          </ul>

          <p className="mb-4">
            These changes reduce inflammation-causing micro-slips and protect arthritic joints.
          </p>
        </section>

        {/* Section 2 — Lighting */}
        <section id="lighting" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Lighting Improvements for Aging Eyes</h2>
          <p className="mb-4">
            Senior dogs often experience reduced vision, slower pupil response, and difficulty adjusting to darkness. Improved lighting
            prevents confusion and helps dogs navigate confidently.
          </p>

          <ul className="list-disc pl-5 mb-4">
            <li>Use warm pathway night lights in hallways and stairs.</li>
            <li>Brighten commonly used rooms to reduce shadow contrast.</li>
            <li>Ensure outdoor areas have gentle, even lighting at dusk.</li>
            <li>Avoid harsh overhead lights that cause glare for cloudy lenses.</li>
          </ul>

          <p className="mb-4">
            Lighting upgrades dramatically reduce nighttime anxiety and wandering.
          </p>
        </section>

        {/* Section 3 — Temperature */}
        <section id="temperature" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Temperature Regulation for Slower Senior Metabolism</h2>
          <p className="mb-4">
            Senior dogs do not regulate temperature as efficiently due to reduced muscle mass and metabolic rate. Comfortable,
            consistent temperature control improves sleep and joint comfort.
          </p>

          <ul className="list-disc pl-5 mb-4">
            <li>Provide warm bedding away from drafts.</li>
            <li>Use orthopedic beds to reduce pressure on joints.</li>
            <li>Keep rooms between 68–75 degrees for comfort.</li>
            <li>Offer cooling mats in summer for dogs with thick coats or heart disease.</li>
          </ul>

          <p className="mb-4">
            Temperature stability is especially important for dogs with arthritis or endocrine conditions.
          </p>
        </section>

        {/* Section 4 — Layouts */}
        <section id="layouts" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Designing Safe Sleeping, Feeding, and Walking Areas</h2>
          <p className="mb-4">
            Spatial design has a major impact on senior-dog confidence and safety. Clear, consistent layouts lower stress and prevent
            collisions or falls.
          </p>

          <ul className="list-disc pl-5 mb-4">
            <li>Keep furniture layouts stable to preserve spatial memory.</li>
            <li>Create wide, clutter-free pathways between common areas.</li>
            <li>Elevate food and water bowls to reduce neck strain.</li>
            <li>Place beds in quiet but accessible locations.</li>
          </ul>

          <p className="mb-4">
            These adjustments improve independence and reduce anxiety in dogs with cognitive or mobility decline.
          </p>
        </section>

        {/* Section 5 — Falls */}
        <section id="falls" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Preventing Slips, Falls, and Nighttime Disorientation</h2>
          <p className="mb-4">
            Falls are one of the strongest predictors of accelerated decline in senior dogs. Preventing them preserves mobility,
            confidence, and overall healthspan.
          </p>

          <ul className="list-disc pl-5 mb-4">
            <li>Add night lights to reduce disorientation.</li>
            <li>Install ramps for cars, beds, and couches.</li>
            <li>Use gates to block off stairs if vision or strength is reduced.</li>
            <li>Provide stable surfaces for getting up from sleep.</li>
          </ul>

          <p className="mb-4">
            Proactive fall prevention preserves muscle mass and reduces inflammation.
          </p>
        </section>

        {/* Section 6 — Affordable vs Premium Modifications */}
        <section id="modifications" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Affordable vs. Premium Environmental Modifications</h2>
          <p className="mb-4">
            Owners do not need high-cost equipment to create a senior-friendly home. Many of the most effective changes are simple,
            inexpensive, and immediately beneficial.
          </p>

          <h3 className="text-xl font-semibold mb-3">Affordable Options</h3>
          <ul className="list-disc pl-5 mb-4">
            <li>Non-slip yoga mats or inexpensive runners.</li>
            <li>Clip-on night lights for hallways.</li>
            <li>Towels or blankets folded for joint padding.</li>
            <li>Budget-friendly raised feeders.</li>
          </ul>

          <h3 className="text-xl font-semibold mb-3">Premium Options</h3>
          <ul className="list-disc pl-5 mb-4">
            <li>Custom orthopedic beds with memory foam.</li>
            <li>High-quality ramps for SUVs and furniture.</li>
            <li>Whole-home lighting automation for seniors with CCD.</li>
            <li>Temperature-regulated bedding for arthritis support.</li>
          </ul>

          <p className="mb-4">
            Both affordable and premium solutions can significantly improve senior-dog comfort and safety.
          </p>
        </section>

        {/* Internal Backlinks */}
        <section className="mb-8">
          <p className="mb-4">For more senior-dog longevity support, explore:</p>
          <ul className="list-disc pl-5 mb-4">
            <li>
              <Link href={`/${locale}/blog/dog-mobility-and-joint-preservation`} className="underline">
                Mobility and Joint Preservation
              </Link>
            </li>
            <li>
              <Link href={`/${locale}/blog/dog-cognitive-decline-ccd-guide`} className="underline">
                Understanding Dog Cognitive Decline
              </Link>
            </li>
          </ul>
        </section>

        {/* Conclusion */}
        <section id="conclusion" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Conclusion</h2>
          <p className="mb-4">
            Preparing your home for an ageing dog is one of the most powerful ways to extend comfort, mobility, and confidence during
            senior years. Thoughtful environmental design—surfaces, lighting, temperature, and layout—reduces stress and supports
            healthy ageing. Even small adjustments make life significantly easier and safer for senior dogs.
          </p>
        </section>

        {/* Sources */}
        <section id="sources" className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">📚 Sources (Selected)</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            <li>Dog Ageing Project. Environmental and mobility correlations.</li>
            <li>Osteoarthritis and home safety interventions. Vet J.</li>
            <li>Lighting and sensory decline in senior dogs. Vet Ophthalmol.</li>
            <li>Temperature regulation and senior-dog comfort. J Vet Intern Med.</li>
            <li>Home modification research in ageing companion animals. Appl Anim Behav Sci.</li>
          </ul>

          <p className="text-xs text-gray-600 mt-4">
            Educational content only — always follow your veterinarian&apos;s guidance for diagnosis and treatment.
          </p>
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
