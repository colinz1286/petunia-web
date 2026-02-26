'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function DogMobilityAndJointPreservation() {
  const locale = useLocale();

  const title =
    'Mobility and Joint Preservation: How to Prevent Arthritis, Muscle Loss, and Balance Decline in Ageing Dogs';
  const date = 'November 27, 2025';
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

        {/* Categories */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => (
            <span
              key={cat}
              className="text-xs bg-[#e4dbcb] text-[#2c4a30] px-3 py-1 rounded-full border border-[#d9cfc2]"
            >
              {categoryLabels[cat] ?? cat}
            </span>
          ))}
        </div>

        {/* TOC */}
        <nav className="mb-8 text-sm">
          <ul className="flex flex-wrap gap-4">
            <li><a href="#tldr" className="underline hover:opacity-80">TL;DR</a></li>
            <li><a href="#healthspan" className="underline hover:opacity-80">Mobility & Healthspan</a></li>
            <li><a href="#differences" className="underline hover:opacity-80">Muscle Loss vs Arthritis vs Nerve Decline</a></li>
            <li><a href="#environment" className="underline hover:opacity-80">Flooring & Home Environment</a></li>
            <li><a href="#strength" className="underline hover:opacity-80">Strength Exercises for Seniors</a></li>
            <li><a href="#therapies" className="underline hover:opacity-80">Complementary Therapies</a></li>
            <li><a href="#nutrition" className="underline hover:opacity-80">Nutrition & Supplements</a></li>
            <li><a href="#conclusion" className="underline hover:opacity-80">Conclusion</a></li>
            <li><a href="#sources" className="underline hover:opacity-80">Sources</a></li>
          </ul>
        </nav>

        {/* TL;DR */}
        <section id="tldr" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Short Answer (TL;DR)</h2>
          <p className="mb-4">
            Mobility is the strongest predictor of lifespan in ageing dogs. Preventing muscle loss, reducing arthritis progression,
            supporting balance, modifying the home environment, and adding targeted nutrition and therapeutic exercise can extend
            healthspan by years. Strength work and daily movement matter more than intensity.
          </p>
        </section>

        {/* Section: Mobility is #1 Predictor */}
        <section id="healthspan" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Why Mobility Is the #1 Predictor of Healthspan</h2>
          <p className="mb-4">
            In canine gerontology, mobility is one of the strongest indicators of healthy ageing. Dogs who maintain the ability to
            walk confidently, climb stairs, and rise from rest are far less likely to experience rapid decline.
          </p>

          <ul className="list-disc pl-5 mb-4">
            <li>Movement preserves joint lubrication and cartilage health.</li>
            <li>Muscle mass protects bones and joints from overload.</li>
            <li>Stable gait reduces fall risk—one of the top lifespan predictors.</li>
            <li>Activity improves metabolic health and reduces inflammation.</li>
          </ul>

          <p className="mb-4">
            The Dog Ageing Project reports that preserved mobility strongly correlates with longer, healthier lives in senior dogs.
          </p>
        </section>

        {/* Section: Muscle Loss vs Arthritis vs Nerve Degeneration */}
        <section id="differences" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Muscle Atrophy, Arthritis, and Nerve Degeneration: Key Differences</h2>
          <p className="mb-4">
            Age-related mobility decline stems from three main sources: muscle atrophy, joint degeneration, and neurological changes.
            Each contributes to gait instability and functional loss, but requires a different management approach.
          </p>

          <ul className="list-disc pl-5 mb-4">
            <li><strong>Muscle atrophy</strong>: reduced mass and strength due to inactivity, poor nutrition, or illness.</li>
            <li><strong>Arthritis</strong>: inflammation and deterioration of joint cartilage, causing pain and stiffness.</li>
            <li><strong>Nerve degeneration</strong>: loss of coordination, slower reflexes, and difficulty correcting posture.</li>
          </ul>

          <p className="mb-4">
            Understanding the root cause guides the best interventions, from strength-building to joint support to neurological
            enrichment.
          </p>
        </section>

        {/* Section: Flooring & Environment */}
        <section id="environment" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Flooring, Traction Mats, Ramps, and Daily Movement Patterns</h2>
          <p className="mb-4">
            Environmental modifications significantly reduce fall risk and joint strain in ageing dogs. Even healthy seniors benefit
            from traction support and reduced jumping.
          </p>

          <ul className="list-disc pl-5 mb-4">
            <li>Traction mats on hardwood floors prevent slipping and improve stability.</li>
            <li>Ramps reduce stress on hips and elbows when entering cars or climbing furniture.</li>
            <li>Soft but supportive bedding eases pressure on joints overnight.</li>
            <li>Frequent short walks maintain mobility better than occasional long outings.</li>
          </ul>

          <p className="mb-4">
            These small adjustments reduce inflammation and protect joints from repetitive micro-injuries.
          </p>
        </section>

        {/* Section: Strength Exercises */}
        <section id="strength" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Strength-Based Exercises for Senior Dogs</h2>
          <p className="mb-4">
            Strength work is essential for preventing sarcopenia (age-related muscle loss). These exercises should be low impact,
            controlled, and tailored to the individual dog&apos;s comfort level.
          </p>

          <ul className="list-disc pl-5 mb-4">
            <li><strong>Hill walking</strong>: builds glute and hind-leg strength.</li>
            <li><strong>Controlled tug</strong>: improves core stability and coordination.</li>
            <li><strong>Step-ups</strong>: low platforms enhance joint control and muscle balance.</li>
            <li><strong>Figure-eights</strong>: improves balance, proprioception, and hind-leg engagement.</li>
          </ul>

          <p className="mb-4">
            Start slowly and increase difficulty only when movement remains smooth and pain-free.
          </p>
        </section>

        {/* Section: Complementary Therapies */}
        <section id="therapies" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Complementary Therapies: Hydrotherapy, Laser Therapy, and Acupuncture</h2>
          <p className="mb-4">
            Complementary therapies provide non-impact or targeted relief for ageing dogs. Many veterinarians integrate these
            modalities into arthritis and senior-strength programs.
          </p>

          <ul className="list-disc pl-5 mb-4">
            <li><strong>Hydrotherapy</strong>: buoyancy reduces joint load while building strength.</li>
            <li><strong>Laser therapy</strong>: decreases inflammation and promotes circulation.</li>
            <li><strong>Acupuncture</strong>: improves comfort, mobility, and neurological function.</li>
            <li><strong>Massage therapy</strong>: reduces stiffness and enhances recovery after exercise.</li>
          </ul>

          <p className="mb-4">
            When combined with daily mobility routines, these therapies significantly improve long-term quality of life.
          </p>
        </section>

        {/* Section: Nutrition & Supplements */}
        <section id="nutrition" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Nutrition and Supplements for Joint Preservation</h2>
          <p className="mb-4">
            Nutrition plays a critical role in protecting joints and reducing inflammation. Targeted supplements can offer additional
            support when combined with weight control and exercise.
          </p>

          <ul className="list-disc pl-5 mb-4">
            <li><strong>Omega-3 fatty acids</strong>: powerful anti-inflammatory effects.</li>
            <li><strong>Glucosamine & chondroitin</strong>: joint cartilage support.</li>
            <li><strong>Green-lipped mussel</strong>: reduces pain and stiffness.</li>
            <li><strong>Vitamin E & antioxidant blends</strong>: protect cellular structures from oxidative damage.</li>
            <li><strong>L-carnitine</strong>: supports muscle metabolism.</li>
          </ul>

          <p className="mb-4">
            These components work synergistically to slow joint deterioration and maintain strength.
          </p>
        </section>

        {/* Internal Backlinks */}
        <section className="mb-8">
          <p className="mb-4">For more longevity-focused guidance, explore:</p>
          <ul className="list-disc pl-5 mb-4">
            <li>
              <Link href={`/${locale}/blog/dog-exercise-for-longevity-daily-routines`} className="underline">
                Exercise and Longevity (Daily Routines for Longer Life)
              </Link>
            </li>
            <li>
              <Link href={`/${locale}/blog/dog-weight-and-lifespan-data-analysis`} className="underline">
                How Weight Impacts Lifespan (Lean Dogs Live Longer)
              </Link>
            </li>
          </ul>
        </section>

        {/* Conclusion */}
        <section id="conclusion" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Conclusion</h2>
          <p className="mb-4">
            Mobility preservation is one of the most effective longevity interventions available to dog owners. By strengthening
            muscles, reducing inflammation, modifying the environment, and supporting joint integrity through nutrition and
            complementary therapies, owners can add years of comfortable, active life to their dog&apos;s senior years.
          </p>
        </section>

        {/* Sources */}
        <section id="sources" className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">📚 Sources (Selected)</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            <li>Dog Ageing Project. Mobility and lifespan correlations. Nature.</li>
            <li>Osteoarthritis in senior dogs. Vet J.</li>
            <li>Hydrotherapy benefits in canine rehabilitation. J Small Anim Pract.</li>
            <li>Joint supplements and canine ageing. J Vet Intern Med.</li>
            <li>Strength training and sarcopenia prevention. Physiol Rev.</li>
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
