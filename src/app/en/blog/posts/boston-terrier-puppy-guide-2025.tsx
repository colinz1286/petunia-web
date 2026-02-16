'use client';

import Head from 'next/head';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function BostonTerrierPuppyGuide2025() {
  const locale = useLocale();

  const title =
    'Boston Terrier Puppy Guide (2025): Growth Milestones, Training, Feeding, Socialization & Vet Schedule';
  const date = 'November 8, 2025';
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
    'A 2025 Boston Terrier puppy guide covering growth milestones, socialization timelines, feeding charts, crate training, early behavior shaping, vet schedules, and safe exercise limits.';

  return (
    <>
      <Head>
        <title>{title} – Petunia Blog</title>
        <meta name="description" content={description} />
        <meta name="robots" content="all" />
       
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
            <li><a href="#milestones" className="underline hover:opacity-80">Growth Milestones</a></li>
            <li><a href="#setup" className="underline hover:opacity-80">First-Week Setup</a></li>
            <li><a href="#socialization" className="underline hover:opacity-80">Socialization Timeline</a></li>
            <li><a href="#feeding" className="underline hover:opacity-80">Feeding Chart</a></li>
            <li><a href="#crate" className="underline hover:opacity-80">Crate Training</a></li>
            <li><a href="#behavior" className="underline hover:opacity-80">Early Behavior Shaping</a></li>
            <li><a href="#vaccines" className="underline hover:opacity-80">Vaccination & Vet Schedule</a></li>
            <li><a href="#exercise" className="underline hover:opacity-80">Exercise Limits</a></li>
            <li><a href="#references" className="underline hover:opacity-80">📚 References</a></li>
          </ul>
        </nav>

        {/* TLDR */}
        <section id="tl-dr" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Short Answer (TL;DR)</h2>
          <p className="mb-4">
            Boston Terrier puppies grow rapidly from 8 weeks to 12 months. Socialization before 16 weeks is critical,
            crate training should begin immediately, and structured feeding helps prevent stomach sensitivity. Safe
            exercise limits are essential because Boston Terriers are brachycephalic and still developing.
          </p>

          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Quick note:</strong> Early routines — sleep, feeding, potty breaks, training — shape their adult
            behavior more than anything else.
          </div>
        </section>

        {/* GROWTH MILESTONES */}
        <section id="milestones" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Puppy Growth Milestones (8 Weeks → 12 Months)</h2>

          <h3 className="font-semibold mb-2">8–12 Weeks</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Rapid brain development</li>
            <li>Socialization window fully open</li>
            <li>Potty training begins</li>
            <li>Teething starts around week 12</li>
          </ul>

          <h3 className="font-semibold mb-2">3–6 Months</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Adult teeth coming in (chewing increases)</li>
            <li>Growing independence and “testing boundaries” phase</li>
            <li>Leash and crate training progress rapidly</li>
          </ul>

          <h3 className="font-semibold mb-2">6–12 Months</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Approaching adult size</li>
            <li>Adolescent stubbornness peaks</li>
            <li>Exercise capacity increases, but limits still apply</li>
          </ul>

          <p className="text-sm text-gray-700">
            See breed expectations in:{' '}
            <Link href="/en/blog/boston-terrier-breed-guide-2025" className="underline hover:opacity-80">
              Boston Terrier Breed Guide 2025
            </Link>.
          </p>
        </section>

        {/* FIRST WEEK SETUP */}
        <section id="setup" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">First-Week Setup Checklist</h2>
          <p className="mb-3">Set these up before your puppy arrives to reduce stress and speed up training.</p>

          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Crate + comfy bedding</li>
            <li>Puppy playpen for supervised confinement</li>
            <li>Food & water bowls + feeding mat</li>
            <li>Puppy-safe chew toys (Boston Terriers teethe early)</li>
            <li>Puppy pee pads (as backup only)</li>
            <li>Collar, harness, and lightweight leash</li>
            <li>Enzymatic cleaner for potty accidents</li>
          </ul>

          <p className="text-sm text-gray-700">
            Cost planning? Review:{' '}
            <Link href="/en/blog/how-much-do-boston-terriers-cost-2025" className="underline hover:opacity-80">
              How Much Do Boston Terriers Cost in 2025?
            </Link>
          </p>
        </section>

        {/* SOCIALIZATION */}
        <section id="socialization" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Socialization Timeline & Critical Window</h2>
          <p className="mb-3">
            The most influential period of a Boston Terrier’s life is from **8 to 16 weeks**. Puppies learn what is safe,
            normal, and non-threatening during this stage.
          </p>

          <h3 className="font-semibold mb-2">Key Experiences to Introduce</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>New people (varying ages, clothing, mobility aids)</li>
            <li>Other friendly dogs</li>
            <li>Car rides</li>
            <li>Different surfaces (grass, tile, carpet)</li>
            <li>Household noises</li>
          </ul>

          <p className="text-sm text-gray-700 mt-3">
            For future behavior concerns, see:{' '}
            <Link href="/en/blog/boston-terrier-behavior-problems-2025" className="underline hover:opacity-80">
              Boston Terrier Behavior Problems
            </Link>.
          </p>
        </section>

        {/* FEEDING */}
        <section id="feeding" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Puppy Feeding Chart + Sensitive Stomach Notes</h2>
          <p className="mb-3">
            Boston Terrier puppies often have sensitive digestion. A consistent feeding plan prevents stomach upset,
            gas, and loose stool — all common in this breed.
          </p>

          <h3 className="font-semibold mb-2">General Feeding Chart</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>8–12 Weeks:</strong> 3–4 meals/day</li>
            <li><strong>3–6 Months:</strong> 3 meals/day</li>
            <li><strong>6–12 Months:</strong> 2–3 meals/day</li>
          </ul>

          <p className="text-sm text-gray-700">
            Learn about allergies and digestion in:{' '}
            <Link href="/en/blog/boston-terrier-health-problems" className="underline hover:opacity-80">
              Boston Terrier Health Problems
            </Link>.
          </p>
        </section>

        {/* CRATE TRAINING */}
        <section id="crate" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Crate Training Schedule (8 Weeks+)</h2>
          <p className="mb-3">
            Boston Terriers respond well to crate routines. It helps with potty training, prevents chewing, and creates a
            safe sleeping space.
          </p>

          <h3 className="font-semibold mb-2">Sample Day Schedule</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Wake up → potty → breakfast</li>
            <li>Short play → crate nap</li>
            <li>Potty break every 1–2 hours</li>
            <li>Training sessions 2–3× per day</li>
            <li>Quiet crate time before bedtime</li>
          </ul>

          <p className="text-sm text-gray-700 mt-3">
            Training foundation is covered here:{' '}
            <Link href="/en/blog/boston-terrier-training-101" className="underline hover:opacity-80">
              Boston Terrier Training 101
            </Link>.
          </p>
        </section>

        {/* EARLY BEHAVIOR SHAPING */}
        <section id="behavior" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Early Behavior Shaping: Biting, Chewing & Boundaries</h2>
          <p className="mb-3">
            Puppies explore the world with their mouths. Teething, boredom, and overstimulation all contribute to
            nipping and chewing.
          </p>

          <h3 className="font-semibold mb-2">Healthy Outlets</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Frozen teething toys</li>
            <li>Redirecting to acceptable chews</li>
            <li>Ending play if biting escalates</li>
          </ul>
        </section>

        {/* VACCINATION */}
        <section id="vaccines" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Vaccination & Vet Schedule</h2>
          <p className="mb-3">
            Boston Terriers should follow the core vaccination timeline recommended by veterinarians. Discuss add-ons
            based on lifestyle (boarders/daycare may require Bordetella earlier).
          </p>

          <h3 className="font-semibold mb-2">Typical Puppy Vaccine Schedule</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>8 Weeks:</strong> DHPP</li>
            <li><strong>12 Weeks:</strong> DHPP + optional Bordetella</li>
            <li><strong>16 Weeks:</strong> DHPP booster + Rabies</li>
            <li><strong>Annual:</strong> Renew core vaccines as needed</li>
          </ul>
        </section>

        {/* EXERCISE */}
        <section id="exercise" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Safe Exercise Limits for Boston Terrier Puppies</h2>
          <p className="mb-3">
            Because of their compact bodies and flat faces, Boston Terrier puppies should avoid overexertion — especially
            in heat or humidity.
          </p>

          <h3 className="font-semibold mb-2">General Guideline</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>5 minutes of exercise per month of age (controlled play)</li>
            <li>Frequent short potty breaks</li>
            <li>Avoid forced running or long-distance walking</li>
          </ul>

          <p className="text-sm text-gray-700 mt-3">
            For adult exercise expectations, see:{' '}
            <Link href="/en/blog/boston-terrier-exercise-requirements" className="underline hover:opacity-80">
              Boston Terrier Exercise Requirements
            </Link>.
          </p>
        </section>

        {/* REFERENCES */}
        <section id="references" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">📚 References</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            <li>Veterinary pediatric growth guidelines</li>
            <li>AAHA puppy vaccine recommendations</li>
            <li>Breed-specific development studies</li>
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
