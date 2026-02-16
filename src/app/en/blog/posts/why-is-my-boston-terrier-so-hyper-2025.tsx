'use client';

import Head from 'next/head';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function WhyIsMyBostonTerrierSoHyper2025() {
  const locale = useLocale();

  const title =
    'Why Is My Boston Terrier So Hyper? Understanding Normal Energy, Overstimulation & When to Worry (2025 Guide)';
  const date = 'November 11, 2025';
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
    'A 2025 guide explaining why Boston Terriers are hyper, how to recognize normal vs problematic energy, exercise needs, mental stimulation, overstimulation signs, calming strategies, and when hyperactivity may be medical.';

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
            <li><a href="#normal" className="underline hover:opacity-80">Normal vs Problem Energy</a></li>
            <li><a href="#biology" className="underline hover:opacity-80">Breed Biology</a></li>
            <li><a href="#exercise" className="underline hover:opacity-80">Exercise Deficits</a></li>
            <li><a href="#mental" className="underline hover:opacity-80">Mental Stimulation</a></li>
            <li><a href="#overstimulation" className="underline hover:opacity-80">Overstimulation</a></li>
            <li><a href="#calming" className="underline hover:opacity-80">How to Calm Them</a></li>
            <li><a href="#medical" className="underline hover:opacity-80">Medical Causes</a></li>
            <li><a href="#references" className="underline hover:opacity-80">📚 References</a></li>
          </ul>
        </nav>

        {/* TLDR */}
        <section id="tl-dr" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Short Answer (TL;DR)</h2>
          <p className="mb-4">
            Boston Terriers are naturally energetic and expressive. Zoomies, playful bursts, and excitement are normal.
            Hyperactivity becomes a concern when paired with destructiveness, inability to settle, or anxiety-driven
            behaviors — often caused by lack of exercise, insufficient mental stimulation, or overstimulation.
          </p>

          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Quick note:</strong> Most “hyper” Boston Terriers are actually understimulated, not misbehaving.
          </div>
        </section>

        {/* NORMAL VS PROBLEM */}
        <section id="normal" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Normal Energy vs Problematic Hyperactivity</h2>
          <p className="mb-3">
            Boston Terriers are lively, playful, and full of personality. Normal behavior includes zoomies, toy-chasing,
            and enthusiastic greetings.
          </p>

          <h3 className="font-semibold mb-2">Normal “Hyper” Behavior</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Short evening zoomies</li>
            <li>Play-bowing and spinning with excitement</li>
            <li>Energetic play sessions</li>
          </ul>

          <h3 className="font-semibold mb-2">Signs Hyperactivity May Be a Problem</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Constant pacing or vocalizing</li>
            <li>Inability to settle even after exercise</li>
            <li>Chewing, biting, or destructive behavior</li>
            <li>Overreacting to noises or movement</li>
          </ul>

          <p className="text-sm text-gray-700">
            Behavior concerns discussed here:{' '}
            <Link href="/en/blog/boston-terrier-behavior-problems-2025" className="underline hover:opacity-80">
              Boston Terrier Behavior Problems
            </Link>.
          </p>
        </section>

        {/* BIOLOGY */}
        <section id="biology" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Biological Reasons Boston Terriers Seem Hyper</h2>
          <p className="mb-3">
            Much of their energy comes from their **breed temperament**: playful, people-oriented, and eager to interact.
            Puppyhood magnifies this — especially from 8 weeks to 12 months.
          </p>

          <h3 className="font-semibold mb-2">Common Biological Drivers</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>High social engagement needs</li>
            <li>Puppy developmental phases with elevated energy</li>
            <li>Strong desire for mental stimulation</li>
            <li>Low frustration tolerance (typical of small companion breeds)</li>
          </ul>

          <p className="text-sm text-gray-700">
            Puppy-phase energy explained in:{' '}
            <Link href="/en/blog/boston-terrier-puppy-guide-2025" className="underline hover:opacity-80">
              Boston Terrier Puppy Guide
            </Link>.
          </p>
        </section>

        {/* EXERCISE DEFICITS */}
        <section id="exercise" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Exercise Deficits: The #1 Cause of Hyper Behavior</h2>
          <p className="mb-3">
            Even though Boston Terriers are small, they still require structured exercise. Without it, excess energy
            spills into barking, jumping, zoomies, restlessness, and attention-seeking.
          </p>

          <h3 className="font-semibold mb-2">Signs Your Boston Is Under-Exercised</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Zoomies multiple times per day</li>
            <li>Demanding play constantly</li>
            <li>Hyper behavior in the evenings</li>
            <li>Chewing furniture or objects</li>
          </ul>

          <p className="text-sm text-gray-700 mt-3">
            Compare your routine with:{' '}
            <Link href="/en/blog/boston-terrier-exercise-requirements" className="underline hover:opacity-80">
              Boston Terrier Exercise Requirements
            </Link>.
          </p>
        </section>

        {/* MENTAL STIMULATION */}
        <section id="mental" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Mental Stimulation Needs (Puzzle Toys, Scent Work)</h2>
          <p className="mb-3">
            Boston Terriers are clever and easily bored. Mental activity reduces hyper behavior as effectively as
            physical exercise.
          </p>

          <h3 className="font-semibold mb-2">Great Options for Mental Work</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Puzzle feeders</li>
            <li>Treat-dispensing toys</li>
            <li>Scent-based games (hidden treats)</li>
            <li>Short obedience sessions</li>
          </ul>

          <p className="text-sm text-gray-700">
            For training support, see:{' '}
            <Link href="/en/blog/boston-terrier-training-101" className="underline hover:opacity-80">
              Boston Terrier Training 101
            </Link>.
          </p>
        </section>

        {/* OVERSTIMULATION */}
        <section id="overstimulation" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Overstimulation Signs</h2>
          <p className="mb-3">
            Boston Terriers can flip from excited to overwhelmed quickly — especially in chaotic environments.
          </p>

          <h3 className="font-semibold mb-2">Common Signs of Overstimulation</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Frantic zoomies</li>
            <li>Nipping or grabbing clothing</li>
            <li>Excessive barking during play</li>
            <li>Panting and pacing indoors</li>
            <li>Ignoring known commands</li>
          </ul>
        </section>

        {/* CALMING */}
        <section id="calming" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">How to Calm a Hyper Boston Terrier</h2>
          <p className="mb-3">
            Hyperactivity improves dramatically with structure and routine. These strategies work for both puppies and
            adults:
          </p>

          <h3 className="font-semibold mb-2">Effective Calming Strategies</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Short training sessions throughout the day</li>
            <li>Consistent morning and evening walks</li>
            <li>Designated rest periods (crate or quiet room)</li>
            <li>Chew toys for decompression</li>
            <li>Interactive feeding (slows down overstimulated eaters)</li>
          </ul>
        </section>

        {/* MEDICAL ISSUES */}
        <section id="medical" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">When Hyperactivity Is Actually a Medical Issue</h2>
          <p className="mb-3">
            In some cases, hyper behavior stems from underlying conditions rather than temperament or training.
          </p>

          <h3 className="font-semibold mb-2">Medical Causes to Rule Out</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Allergies causing discomfort</li>
            <li>Gi issues creating restlessness</li>
            <li>Thyroid abnormalities</li>
            <li>Pain or orthopedic issues</li>
            <li>Medication side effects</li>
          </ul>

          <p className="text-sm text-gray-700 mt-3">
            For related symptoms, see:{' '}
            <Link href="/en/blog/boston-terrier-health-problems" className="underline hover:opacity-80">
              Boston Terrier Health Problems
            </Link>.
          </p>
        </section>

        {/* REFERENCES */}
        <section id="references" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">📚 References</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            <li>Veterinary behavior research</li>
            <li>Puppy developmental studies</li>
            <li>Breed temperament data</li>
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
