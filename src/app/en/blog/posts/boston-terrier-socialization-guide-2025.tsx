'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function BostonTerrierSocializationGuide2025() {
  const locale = useLocale();

  const title =
    'Boston Terrier Socialization Guide (2025): Confidence Building, Safe Exposure, Play Sessions & Adult Socialization';
  const date = 'November 19, 2025';
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
            <li><a href="#windows" className="underline hover:opacity-80">Socialization Windows</a></li>
            <li><a href="#exposure" className="underline hover:opacity-80">Exposure Checklist</a></li>
            <li><a href="#confidence" className="underline hover:opacity-80">Building Confidence</a></li>
            <li><a href="#safe" className="underline hover:opacity-80">Safe vs Overwhelming</a></li>
            <li><a href="#play" className="underline hover:opacity-80">Structured Play Sessions</a></li>
            <li><a href="#mistakes" className="underline hover:opacity-80">Common Mistakes</a></li>
            <li><a href="#adult" className="underline hover:opacity-80">Adult Socialization</a></li>
            <li><a href="#references" className="underline hover:opacity-80">📚 References</a></li>
          </ul>
        </nav>

        {/* TLDR */}
        <section id="tl-dr" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Short Answer (TL;DR)</h2>
          <p className="mb-4">
            Boston Terriers are social, sensitive dogs who thrive when exposed early and positively to people, animals,
            environments, and sounds. The key is **gradual exposure**, confidence building, and avoiding overwhelming
            situations. Socialization continues into adulthood and shapes long-term behavior.
          </p>

          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Quick note:</strong> Good socialization prevents fear, reactivity, and anxiety — three issues common
            in under-socialized Boston Terriers.
          </div>
        </section>

        {/* SOCIALIZATION WINDOWS */}
        <section id="windows" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Socialization Windows & Timing</h2>
          <p className="mb-3">
            The most influential period for Boston Terrier socialization occurs between **8 and 16 weeks**. Experiences
            in this window permanently shape confidence and adaptability.
          </p>

          <h3 className="font-semibold mb-2">Key Phases</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>8–12 Weeks:</strong> Introduce people, sounds, gentle handling</li>
            <li><strong>12–16 Weeks:</strong> Exposure to dogs, environments, grooming tools</li>
            <li><strong>4–6 Months:</strong> Reinforce confidence, controlled dog play</li>
            <li><strong>6–12 Months:</strong> Adolescent fear periods — keep sessions positive</li>
          </ul>

          <p className="text-sm text-gray-700 mt-3">
            Developmental timelines covered in:{' '}
            <Link href="/en/blog/boston-terrier-puppy-guide-2025" className="underline hover:opacity-80">
              Boston Terrier Puppy Guide
            </Link>.
          </p>
        </section>

        {/* EXPOSURE CHECKLIST */}
        <section id="exposure" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">People, Dogs, Environments & Sounds</h2>
          <p className="mb-3">
            A well-socialized Boston Terrier is confident, curious, and adaptable. Checklist-based exposure ensures your
            puppy encounters a healthy variety of experiences.
          </p>

          <h3 className="font-semibold mb-2">People</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Men, women, children</li>
            <li>People wearing hats, coats, glasses</li>
            <li>Mobility aids: canes, wheelchairs</li>
          </ul>

          <h3 className="font-semibold mb-2">Dogs</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Calm, fully vaccinated adult dogs</li>
            <li>Puppies with compatible play styles</li>
            <li>Small, medium, and larger dogs (with space)</li>
          </ul>

          <p className="text-sm text-gray-700">
            Reactivity issues reduced through early exposure:{' '}
            <Link href="/en/blog/boston-terrier-reactivity-around-dogs-2025" className="underline hover:opacity-80">
              Boston Terrier Reactivity Around Dogs
            </Link>.
          </p>

          <h3 className="font-semibold mb-2">Environments</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Car rides</li>
            <li>Sidewalks, busy streets, quiet parks</li>
            <li>Vet clinics & pet-friendly stores</li>
            <li>Different flooring textures</li>
          </ul>

          <h3 className="font-semibold mb-2">Sounds</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Vacuum, blender, dishwasher</li>
            <li>Doorbells & knocks</li>
            <li>Traffic and distant sirens</li>
          </ul>
        </section>

        {/* CONFIDENCE BUILDING */}
        <section id="confidence" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">How to Build Confidence in Sensitive Boston Terriers</h2>
          <p className="mb-3">
            Some Boston Terriers are naturally cautious. Confidence building prevents fear-based reactivity and helps
            puppies navigate new experiences without shutting down.
          </p>

          <h3 className="font-semibold mb-2">Confidence Tools</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Short, successful exposures (not long, chaotic ones)</li>
            <li>Using high-value treats during new experiences</li>
            <li>Praise for calm investigation</li>
            <li>Retreating when overwhelmed — never forcing</li>
          </ul>

          <p className="text-sm text-gray-700 mt-3">
            Behavior patterns that overlap with sensitivity in:{' '}
            <Link href="/en/blog/boston-terrier-behavior-problems-2025" className="underline hover:opacity-80">
              Boston Terrier Behavior Problems
            </Link>.
          </p>
        </section>

        {/* SAFE VS OVERWHELMING */}
        <section id="safe" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Safe Exposure vs Overwhelming Exposure</h2>
          <p className="mb-3">
            The goal is **positive** exposure, not simply exposure. Flooding a puppy with intense stimuli can create
            fear later in life.
          </p>

          <h3 className="font-semibold mb-2">Safe Exposure</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Controlled distance from other dogs</li>
            <li>Short sessions with breaks</li>
            <li>Predictable interactions with calm people</li>
          </ul>

          <h3 className="font-semibold mb-2">Overwhelming Exposure</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Dog parks during peak hours</li>
            <li>Loud environments without escape options</li>
            <li>Forcing greetings when the puppy is nervous</li>
          </ul>

          <p className="text-sm text-gray-700 mt-3">
            Confidence-based training explained in:{' '}
            <Link href="/en/blog/how-to-train-a-boston-terrier-puppy-2025" className="underline hover:opacity-80">
              How to Train a Boston Terrier Puppy
            </Link>.
          </p>
        </section>

        {/* STRUCTURED PLAY */}
        <section id="play" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Structured Play Sessions</h2>
          <p className="mb-3">
            Structured play helps puppies learn bite inhibition, body language, and impulse control — all critical for
            reducing reactivity and aggression later in life.
          </p>

          <h3 className="font-semibold mb-2">What Good Play Looks Like</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Loose, wiggly bodies</li>
            <li>Play bows</li>
            <li>Taking turns during chasing or wrestling</li>
            <li>Easy separation when called away</li>
          </ul>

          <p className="text-sm text-gray-700">
            Aggression prevention guide:{' '}
            <Link href="/en/blog/boston-terrier-aggression-2025" className="underline hover:opacity-80">
              Boston Terrier Aggression
            </Link>.
          </p>
        </section>

        {/* COMMON MISTAKES */}
        <section id="mistakes" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Socialization Mistakes Owners Commonly Make</h2>
          <p className="mb-3">
            Even well-intentioned owners can accidentally teach fear or reactivity if exposures are unstructured or
            overwhelming.
          </p>

          <h3 className="font-semibold mb-2">Avoid These Mistakes</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Waiting too long to begin socialization</li>
            <li>Flooding the puppy with loud or chaotic environments</li>
            <li>Allowing rough or mismatched play</li>
            <li>Forcing greetings with nervous puppies</li>
            <li>Assuming socialization ends after puppyhood</li>
          </ul>

          <p className="text-sm text-gray-700 mt-3">
            Anxiety-related mistakes discussed here:{' '}
            <Link href="/en/blog/boston-terrier-separation-anxiety-2025" className="underline hover:opacity-80">
              Boston Terrier Separation Anxiety
            </Link>.
          </p>
        </section>

        {/* ADULT SOCIALIZATION */}
        <section id="adult" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Adult Socialization Strategies</h2>
          <p className="mb-3">
            Adult Boston Terriers can still improve confidence and reduce reactivity with the right structure. Socialization
            is lifelong, not a one-time event.
          </p>

          <h3 className="font-semibold mb-2">How to Socialize an Adult Boston Terrier</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Use slow, distance-based exposure</li>
            <li>Pair new experiences with high-value rewards</li>
            <li>Keep play sessions short with well-matched dogs</li>
            <li>Avoid high-pressure dog parks</li>
          </ul>

          <p className="text-sm text-gray-700">
            Adult reactivity improvement tips in:{' '}
            <Link href="/en/blog/boston-terrier-reactivity-around-dogs-2025" className="underline hover:opacity-80">
              Boston Terrier Reactivity Around Dogs
            </Link>.
          </p>
        </section>

        {/* REFERENCES */}
        <section id="references" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">📚 References</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            <li>Veterinary socialization research</li>
            <li>Behavioral development studies</li>
            <li>Canine fear & confidence-building literature</li>
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
