'use client';

import Head from 'next/head';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function BostonTerrierTemperament() {
  const locale = useLocale();

  const title = 'Boston Terrier Temperament: Personality, Sensitivity, Social Behavior & Training';
  const date = 'November 2, 2025';
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
    'Learn the true Boston Terrier temperament: affectionate, smart, sensitive, deeply bonded, social, and shaped by early training and structure. Includes personality traits, emotional needs, social behavior, and red flags.';

  return (
    <>
      <Head>
        <title>{title} – Petunia Blog</title>
        <meta name="description" content={description} />
        <meta name="robots" content="all" />
        <link
          rel="canonical"
          href={`https://www.petuniapets.com/${locale}/blog/boston-terrier-temperament`}
        />
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
            <li><a href="#traits" className="underline hover:opacity-80">Core Traits</a></li>
            <li><a href="#bonding" className="underline hover:opacity-80">Bonding</a></li>
            <li><a href="#social" className="underline hover:opacity-80">Social Behavior</a></li>
            <li><a href="#sensitivity" className="underline hover:opacity-80">Sensitivity</a></li>
            <li><a href="#socialization" className="underline hover:opacity-80">Socialization</a></li>
            <li><a href="#redflags" className="underline hover:opacity-80">Red Flags</a></li>
            <li><a href="#references" className="underline hover:opacity-80">📚 References</a></li>
          </ul>
        </nav>

        {/* TLDR */}
        <section id="tl-dr" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Short Answer (TL;DR)</h2>
          <p className="mb-4">
            Boston Terriers are affectionate, intelligent, deeply bonded dogs with a sensitive nature and strong desire 
            to be close to their humans. They’re playful, people-oriented, and socially adaptable, but early training 
            and structure are important because sensitivity and stubbornness can appear without guidance.
          </p>

          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Quick note:</strong> Boston Terriers thrive on gentle handling and positive reinforcement. Harsh 
            corrections or unpredictable environments can undermine confidence.
          </div>
        </section>

        {/* TRAITS */}
        <section id="traits" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Core Personality Traits</h2>
          <p className="mb-3">
            The Boston Terrier&apos;s temperament blends warmth, alertness, humor, and surprising emotional intuition. 
            They excel in households where engagement, routine, and companionship are part of daily life.
          </p>

          <h3 className="font-semibold mb-2">Common Traits</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Affectionate and highly people-oriented</li>
            <li>Smart, observant, and routine-driven</li>
            <li>Playful and energetic when properly exercised</li>
            <li>Sociable with most dogs and people when raised well</li>
            <li>Occasionally stubborn during training</li>
          </ul>

          <p className="text-sm text-gray-700">
            For full breed context, see{' '}
            <Link href="/en/blog/boston-terrier-breed-guide-2025" className="underline hover:opacity-80">
              Boston Terrier Breed Guide 2025
            </Link>.
          </p>
        </section>

        {/* BONDING */}
        <section id="bonding" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Why They Bond Deeply with Owners</h2>
          <p className="mb-3">
            Boston Terriers were bred specifically for companionship — and it shows. They love closeness, thrive on 
            eye contact, and prefer to participate in daily routines. Many follow their owners from room to room or 
            seek gentle contact throughout the day.
          </p>

          <ul className="list-disc pl-5 space-y-1">
            <li>Genetically predisposed to companionship</li>
            <li>Respond strongly to tone and emotional cues</li>
            <li>Find comfort in stable, predictable households</li>
          </ul>
        </section>

        {/* SOCIAL BEHAVIOR */}
        <section id="social" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Social Behavior with Dogs, Kids & Strangers</h2>
          <p className="mb-3">
            A well-socialized Boston Terrier is confident, friendly, and appropriate with children and other dogs. 
            Their naturally polite demeanor makes them excellent social companions — as long as early guidance is provided.
          </p>

          <h3 className="font-semibold mb-2">Social Strengths</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Playful and gentle with children (when play is supervised)</li>
            <li>Typically polite with unfamiliar people</li>
            <li>Can thrive in multi-dog households</li>
          </ul>

          <p className="text-sm text-gray-700">
            For training foundations, see{' '}
            <Link href="/en/blog/boston-terrier-training-101" className="underline hover:opacity-80">
              Boston Terrier Training 101
            </Link>.
          </p>
        </section>

        {/* SENSITIVITY */}
        <section id="sensitivity" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Emotional Sensitivity</h2>
          <p className="mb-3">
            Emotional awareness is one of the Boston Terrier&apos;s most defining traits. They respond quickly to tone, 
            volume, or tension in a household, which means positive reinforcement matters greatly.
          </p>

          <ul className="list-disc pl-5 space-y-1">
            <li>Best results with upbeat, reward-based training</li>
            <li>Do not tolerate yelling or harsh corrections</li>
            <li>Excel when expectations are consistent</li>
          </ul>
        </section>

        {/* SOCIALIZATION */}
        <section id="socialization" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">How Early Socialization Shapes Temperament</h2>
          <p className="mb-3">
            The 3–14 week window is the most influential period in a Boston Terrier&apos;s behavior development. Gentle 
            exposure to new sights, surfaces, sounds, and dogs builds confidence and reduces future anxiety.
          </p>

          <ul className="list-disc pl-5 space-y-1">
            <li>Positive exposure to diverse environments</li>
            <li>Safe, well-managed interactions with friendly dogs</li>
            <li>Learning resilience through controlled challenges</li>
          </ul>
        </section>

        {/* RED FLAGS */}
        <section id="redflags" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Temperament Red Flags</h2>
          <p className="mb-3">
            While Boston Terriers are typically stable and social, certain early behaviors can indicate a deeper 
            issue that needs attention.
          </p>

          <h3 className="font-semibold mb-2">Behaviors to Watch For</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Persistent hyperactivity despite normal exercise</li>
            <li>Reactivity toward dogs or unfamiliar people</li>
            <li>Separation anxiety (pacing, whining, destruction)</li>
            <li>Shutting down or avoidance during training</li>
          </ul>

          <p className="text-sm text-gray-700 mt-3">
            Need help? Read{' '}
            <Link href="/en/blog/boston-terrier-behavior-problems" className="underline hover:opacity-80">
              Boston Terrier Behavior Problems
            </Link>.
          </p>
        </section>

        {/* REFERENCES */}
        <section id="references" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">📚 References</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            <li>American Kennel Club breed temperament resources</li>
            <li>Veterinary behavior textbooks and peer-reviewed studies</li>
            <li>Canine socialization and development research</li>
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
