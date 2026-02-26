'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function BostonTerrierPottyTraining2025() {
  const locale = useLocale();

  const title =
    'Boston Terrier Potty Training (2025): Schedules, Regression Fixes, Reinforcement & Indoor/Outdoor Setup Tips';
  const date = 'November 17, 2025';
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

        {/* Anchor Navigation */}
        <nav className="mb-8 text-sm">
          <ul className="flex flex-wrap gap-3">
            <li><a href="#tl-dr" className="underline hover:opacity-80">TL;DR</a></li>
            <li><a href="#why-slow" className="underline hover:opacity-80">Why They’re Slow</a></li>
            <li><a href="#schedule" className="underline hover:opacity-80">Potty Schedules</a></li>
            <li><a href="#crate" className="underline hover:opacity-80">Crate Intervals</a></li>
            <li><a href="#reinforcement" className="underline hover:opacity-80">Reinforcement</a></li>
            <li><a href="#accidents" className="underline hover:opacity-80">Accident Management</a></li>
            <li><a href="#regression" className="underline hover:opacity-80">Regression Periods</a></li>
            <li><a href="#indoor-outdoor" className="underline hover:opacity-80">Indoor vs Outdoor Setup</a></li>
            <li><a href="#references" className="underline hover:opacity-80">📚 References</a></li>
          </ul>
        </nav>

        {/* TLDR */}
        <section id="tl-dr" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Short Answer (TL;DR)</h2>
          <p className="mb-4">
            Boston Terriers are harder to potty train than many breeds due to their small bladders, excitability, and
            sensitivity to routine changes. Success comes from structure: scheduled breaks, crate intervals, immediate
            rewards, and avoiding punishment. Regressions are normal and usually fixable.
          </p>

          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Quick note:</strong> Potty training is won with consistency, not intensity.
          </div>
        </section>

        {/* WHY SLOW */}
        <section id="why-slow" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Why the Breed Can Be Slow to Potty Train</h2>
          <p className="mb-3">
            Boston Terriers mature slowly compared to some breeds, especially in bladder control and emotional
            regulation. Their social nature also makes them easily distracted outdoors.
          </p>

          <h3 className="font-semibold mb-2">Common Reasons for Slow Progress</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Small bladder capacity (especially under 6 months)</li>
            <li>Easily overstimulated outdoors</li>
            <li>Inconsistent feeding or potty routines</li>
            <li>Delayed signal development (“asking” to go out)</li>
            <li>Sensitivity to weather and temperature</li>
          </ul>

          <p className="text-sm text-gray-700 mt-3">
            Puppy development explained in:{' '}
            <Link href="/en/blog/boston-terrier-puppy-guide-2025" className="underline hover:opacity-80">
              Boston Terrier Puppy Guide
            </Link>.
          </p>
        </section>

        {/* SCHEDULE */}
        <section id="schedule" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Ideal Schedule for Puppies vs Adults</h2>
          <p className="mb-3">
            Schedules create prediction and success. Boston Terriers thrive when potty breaks happen before accidents
            occur—not after.
          </p>

          <h3 className="font-semibold mb-2">Puppy Potty Schedule (8 Weeks → 6 Months)</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Immediately after waking</li>
            <li>Immediately after meals</li>
            <li>After play sessions</li>
            <li>Before and after crate time</li>
            <li>Every 1–2 hours during the day</li>
          </ul>

          <h3 className="font-semibold mb-2">Adult Potty Schedule</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Morning (within 10 minutes of waking)</li>
            <li>Late morning</li>
            <li>Late afternoon</li>
            <li>Evening</li>
            <li>Right before bedtime</li>
          </ul>

          <p className="text-sm text-gray-700 mt-3">
            Diet and feeding timing impact potty success:{' '}
            <Link href="/en/blog/boston-terrier-diet-guide-2025" className="underline hover:opacity-80">
              Boston Terrier Diet Guide
            </Link>.
          </p>
        </section>

        {/* CRATE INTERVALS */}
        <section id="crate" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Crate + Potty Interval Timing</h2>
          <p className="mb-3">
            Crate training accelerates potty training by preventing accidents and teaching bladder control.
          </p>

          <h3 className="font-semibold mb-2">Recommended Crate Intervals</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>8–12 Weeks:</strong> 30–60 minutes</li>
            <li><strong>3–6 Months:</strong> Up to 2–3 hours</li>
            <li><strong>Adults:</strong> 4–6 hours maximum</li>
          </ul>

          <p className="text-sm text-gray-700">
            Full crate routines here:{' '}
            <Link href="/en/blog/boston-terrier-crate-training-2025" className="underline hover:opacity-80">
              Boston Terrier Crate Training
            </Link>.
          </p>
        </section>

        {/* REINFORCEMENT */}
        <section id="reinforcement" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Reinforcement Method: Reward Windows</h2>
          <p className="mb-3">
            Timing matters. Rewarding within **2 seconds** of eliminating outdoors builds fast, consistent habits.
          </p>

          <h3 className="font-semibold mb-2">How to Reinforce Properly</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Bring treats outside every time</li>
            <li>Reward immediately after they finish (not after walking away)</li>
            <li>Use verbal praise + a small treat</li>
            <li>Do not lure with treats — reward only after success</li>
          </ul>

          <p className="text-sm text-gray-700">
            Emotional regulation & hyper behavior context here:{' '}
            <Link href="/en/blog/why-is-my-boston-terrier-so-hyper-2025" className="underline hover:opacity-80">
              Why Is My Boston Terrier So Hyper?
            </Link>.
          </p>
        </section>

        {/* ACCIDENT MANAGEMENT */}
        <section id="accidents" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Accident Management</h2>
          <p className="mb-3">
            Accidents are part of the process. Punishment delays training and increases anxiety — a major obstacle for
            Boston Terriers.
          </p>

          <h3 className="font-semibold mb-2">Best Practices</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Interrupt if you catch them mid-accident (clap lightly, then escort outside)</li>
            <li>Use enzymatic cleaners to remove odor</li>
            <li>Never scold or rub their nose in it</li>
            <li>Increase the frequency of potty breaks temporarily</li>
          </ul>

          <p className="text-sm text-gray-700 mt-3">
            Anxiety-related accidents explained in:{' '}
            <Link href="/en/blog/boston-terrier-separation-anxiety-2025" className="underline hover:opacity-80">
              Boston Terrier Separation Anxiety
            </Link>.
          </p>
        </section>

        {/* REGRESSION */}
        <section id="regression" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Regression Periods & Why They Happen</h2>
          <p className="mb-3">
            Even well-trained Boston Terriers can regress. Common causes include teething pain, schedule changes,
            overstimulation, or illness.
          </p>

          <h3 className="font-semibold mb-2">Common Regression Triggers</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Puppy teething phases</li>
            <li>Travel or new environments</li>
            <li>Changes in family routine</li>
            <li>Regression around adolescence (6–12 months)</li>
            <li>Reduced supervision too early</li>
          </ul>

          <p className="text-sm text-gray-700">
            Broader behavior regression context found in:{' '}
            <Link href="/en/blog/boston-terrier-behavior-problems-2025" className="underline hover:opacity-80">
              Boston Terrier Behavior Problems
            </Link>.
          </p>
        </section>

        {/* INDOOR VS OUTDOOR */}
        <section id="indoor-outdoor" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Outdoor vs Indoor Potty Setup Differences</h2>
          <p className="mb-3">
            Each setup has advantages depending on your living situation. Boston Terriers adapt well to both if the
            routine is consistent.
          </p>

          <h3 className="font-semibold mb-2">Outdoor Setup</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Designate one spot in the yard</li>
            <li>Use a consistent verbal cue (“go potty”)</li>
            <li>Reward immediately afterward</li>
            <li>Helps avoid indoor confusion long-term</li>
          </ul>

          <h3 className="font-semibold mb-2">Indoor Setup (for apartments or bad weather)</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Puppy pads, turf, or litter box systems</li>
            <li>Place pads in one fixed location</li>
            <li>Transition gradually outdoors as the puppy matures</li>
          </ul>

          <p className="text-sm text-gray-700 mt-3">
            Puppy crate routines supporting potty training described in:{' '}
            <Link href="/en/blog/boston-terrier-crate-training-2025" className="underline hover:opacity-80">
              Boston Terrier Crate Training
            </Link>.
          </p>
        </section>

        {/* REFERENCES */}
        <section id="references" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">📚 References</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            <li>Veterinary potty training and bladder development research</li>
            <li>Puppy behavioral development studies</li>
            <li>Positive reinforcement training literature</li>
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
