'use client';

import Head from 'next/head';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function BostonTerrierExerciseRequirements() {
  const locale = useLocale();

  const title = 'Boston Terrier Exercise Requirements: Daily Needs, Mental Work & Weather Safety';
  const date = 'November 4, 2025';
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
    'Learn exactly how much exercise Boston Terriers need by age, including walking targets, mental enrichment, safe weather adjustments, and signs of under-exercising.';

  return (
    <>
      <Head>
        <title>{title} – Petunia Blog</title>
        <meta name="description" content={description} />
        <meta name="robots" content="all" />
        <link
          rel="canonical"
          href={`https://www.petuniapets.com/${locale}/blog/boston-terrier-exercise-requirements`}
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

        {/* Anchor Nav */}
        <nav className="mb-8 text-sm">
          <ul className="flex flex-wrap gap-3">
            <li><a href="#tl-dr" className="underline hover:opacity-80">TL;DR</a></li>
            <li><a href="#needs" className="underline hover:opacity-80">Daily Exercise Needs</a></li>
            <li><a href="#types" className="underline hover:opacity-80">Types of Exercise</a></li>
            <li><a href="#under" className="underline hover:opacity-80">Signs of Under-Exercising</a></li>
            <li><a href="#avoid" className="underline hover:opacity-80">Activities to Avoid</a></li>
            <li><a href="#indoor" className="underline hover:opacity-80">Indoor Exercise</a></li>
            <li><a href="#adjust" className="underline hover:opacity-80">Adjusting Activity</a></li>
            <li><a href="#references" className="underline hover:opacity-80">📚 References</a></li>
          </ul>
        </nav>

        {/* TLDR */}
        <section id="tl-dr" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Short Answer (TL;DR)</h2>
          <p className="mb-4">
            Boston Terriers need structured, age-appropriate exercise through daily walks, controlled play, and mental
            enrichment. Because of their short muzzle and heat sensitivity, owners must adjust activity during hot,
            humid, or very cold weather.
          </p>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Quick note:</strong> Over-exercising young Boston Terriers can cause breathing issues, exhaustion,
            or overheating. Slow, steady, and consistent always beats high intensity.
          </div>
        </section>

        {/* DAILY NEEDS */}
        <section id="needs" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Daily Exercise Needs (by Age)</h2>
          <p className="mb-3">
            Exercise needs vary widely between puppies, adolescents, adults, and seniors. The key is balancing physical
            movement with mental stimulation while respecting their breathing limits.
          </p>

          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Puppies (8–16 weeks):</strong> 5–10 minutes of structured play several times per day</li>
            <li><strong>Older Puppies (4–12 months):</strong> 20–30 minutes daily in short, age-safe sessions</li>
            <li><strong>Adults:</strong> 30–60 total minutes of activity per day</li>
            <li><strong>Seniors:</strong> Gentle 15–30 minute walks plus enrichment</li>
          </ul>

          <p className="text-sm text-gray-700 mt-3">
            Need puppy guidance? See{' '}
            <Link href="/en/blog/boston-terrier-puppy-guide" className="underline hover:opacity-80">
              Boston Terrier Puppy Guide
            </Link>.
          </p>
        </section>

        {/* TYPES OF EXERCISE */}
        <section id="types" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Walking vs Playtime vs Mental Stimulation</h2>
          <p className="mb-3">
            The best exercise routine blends physical activity with brain work. Boston Terriers respond extremely well
            to cognitive challenges that reduce anxiety and help prevent hyperactivity.
          </p>

          <h3 className="font-semibold mb-2">Exercise Breakdown</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Walking:</strong> Moderate-paced daily walks keep breathing safe and steady.</li>
            <li><strong>Playtime:</strong> Fetch, tug, and short backyard play sessions build coordination and confidence.</li>
            <li><strong>Mental Work:</strong> Puzzle feeders, scent games, shaping tricks, and short training sessions.</li>
          </ul>

          <p className="text-sm text-gray-700 mt-3">
            Enrichment ideas:{' '}
            <Link href="/en/blog/boston-terrier-enrichment" className="underline hover:opacity-80">
              Boston Terrier Enrichment &amp; Mental Games
            </Link>.
          </p>
        </section>

        {/* UNDER-EXERCISING */}
        <section id="under" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Signs of Under-Exercising</h2>
          <p className="mb-3">
            When a Boston Terrier does not receive enough physical or mental stimulation, the behavior clues are usually
            obvious and consistent.
          </p>

          <ul className="list-disc pl-5 space-y-1">
            <li>Frequent zoomies or nonstop indoor energy</li>
            <li>Destructive chewing or shredding toys</li>
            <li>Reactivity or barking on walks</li>
            <li>Difficulty settling at night</li>
            <li>Restlessness or constant attention-seeking</li>
          </ul>

          <p className="text-sm text-gray-700 mt-3">
            If these appear regularly, review{' '}
            <Link href="/en/blog/boston-terrier-behavior-problems" className="underline hover:opacity-80">
              Boston Terrier Behavior Problems
            </Link>.
          </p>
        </section>

        {/* ACTIVITIES TO AVOID */}
        <section id="avoid" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Activities to Avoid (Heat & Breathing Risks)</h2>
          <p className="mb-3">
            Brachycephalic breeds overheat faster than others. Boston Terriers cannot cool themselves effectively during
            intense or prolonged activity.
          </p>

          <ul className="list-disc pl-5 space-y-1">
            <li>High-intensity running or fast-paced jogging</li>
            <li>Long hikes in warm weather</li>
            <li>Outdoor play during summer midday heat</li>
            <li>Any activity causing prolonged panting or wheezing</li>
          </ul>

          <p className="text-sm text-gray-700 mt-3">
            If breathing concerns are common, see{' '}
            <Link href="/en/blog/boston-terrier-health-problems" className="underline hover:opacity-80">
              Boston Terrier Health Problems
            </Link>.
          </p>
        </section>

        {/* INDOOR EXERCISE */}
        <section id="indoor" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Indoor Exercise Ideas for Winter & Cold Weather</h2>
          <p className="mb-3">
            Because Boston Terriers have thin coats and low cold tolerance, winter exercise should take place mostly
            indoors with short outdoor trips.
          </p>

          <ul className="list-disc pl-5 space-y-1">
            <li>Short hallway fetch</li>
            <li>Puzzle toys and food-based enrichment</li>
            <li>Scent-detection games using treats</li>
            <li>Gentle tug with rules</li>
            <li>Short trick-training sessions</li>
          </ul>
        </section>

        {/* ADJUSTING ACTIVITY */}
        <section id="adjust" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">When to Increase or Decrease Exercise</h2>
          <p className="mb-3">
            Activity levels should shift based on age, weather, stamina, and any changes in breathing, body language, or
            behavior.
          </p>

          <h3 className="font-semibold mb-2">Increase Exercise When:</h3>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>Your dog is restless or frequently bored</li>
            <li>Weather conditions are cool and safe</li>
            <li>Breathing remains calm and steady during walks</li>
          </ul>

          <h3 className="font-semibold mb-2">Decrease Exercise When:</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Humidity or heat is high</li>
            <li>Your dog begins panting, wheezing, or slowing down</li>
            <li>Signs of joint discomfort appear</li>
          </ul>
        </section>

        {/* REFERENCES */}
        <section id="references" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">📚 References</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            <li>Veterinary exercise physiology literature</li>
            <li>American Kennel Club activity guidelines</li>
            <li>Brachycephalic care and heat-safety best practices</li>
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
