'use client';

import Head from 'next/head';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function BostonTerrierSheddingGuide2025() {
  const locale = useLocale();

  const title =
    'Boston Terrier Shedding Guide (2025): Year-Round Shedding, Grooming Tools, Diet Links & When to See a Vet';
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

  const description =
    'A complete 2025 guide explaining how much Boston Terriers shed, seasonal shedding changes, grooming tools, shedding reduction techniques, links to diet and allergies, and signs of abnormal shedding that require veterinary care.';

  return (
    <>
      <Head>
        <title>{title} – Petunia Blog</title>
        <meta name="description" content={description} />
        <meta name="robots" content="all" />
        <link
          rel="canonical"
          href={`https://www.petuniapets.com/${locale}/blog/boston-terrier-shedding-guide-2025`}
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

        {/* Navigation */}
        <nav className="mb-8 text-sm">
          <ul className="flex flex-wrap gap-3">
            <li><a href="#tldr" className="underline hover:opacity-80">TL;DR</a></li>
            <li><a href="#expectations" className="underline hover:opacity-80">Shedding Expectations</a></li>
            <li><a href="#seasonal" className="underline hover:opacity-80">Seasonal Changes</a></li>
            <li><a href="#brushes" className="underline hover:opacity-80">Best Brushes</a></li>
            <li><a href="#reduce" className="underline hover:opacity-80">Reducing Shedding</a></li>
            <li><a href="#diet" className="underline hover:opacity-80">Diet & Allergies</a></li>
            <li><a href="#vet" className="underline hover:opacity-80">When Shedding Is a Problem</a></li>
            <li><a href="#references" className="underline hover:opacity-80">📚 References</a></li>
          </ul>
        </nav>

        {/* TLDR */}
        <section id="tldr" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Short Answer (TL;DR)</h2>
          <p className="mb-4">
            Boston Terriers shed **lightly but consistently year-round** due to their short, single-layer coat. 
            Seasonal increases happen in spring and fall. Weekly brushing, proper diet, and allergy management 
            significantly reduce shedding. Sudden or patchy hair loss usually signals a skin condition, allergy flare, 
            or medical issue requiring veterinary care.
          </p>

          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Key point:</strong> Shedding is normal—hair loss is not. Monitor for patterns and skin changes.
          </div>
        </section>

        {/* EXPECTATIONS */}
        <section id="expectations" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Shedding Expectations: Low but Year-Round</h2>
          <p className="mb-4">
            Boston Terriers shed far less than double-coated breeds, but their short hairs fall out continuously. 
            Because the coat is short, shed hairs stick to fabrics and are more noticeable than people expect.
          </p>

          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Shedding is light to moderate year-round</li>
            <li>No heavy “blowing coat” like Huskies or Shepherds</li>
            <li>Short hairs shed frequently but in small amounts</li>
          </ul>

          <p className="text-sm text-gray-700">
            For grooming frequency related to skin health, compare with:{' '}
            <Link
              href="/en/blog/how-often-should-you-bathe-a-boston-terrier-2025"
              className="underline hover:opacity-80"
            >
              How Often Should You Bathe a Boston Terrier?
            </Link>.
          </p>
        </section>

        {/* SEASONAL */}
        <section id="seasonal" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Seasonal Shedding: Why It Happens</h2>
          <p className="mb-4">
            Even though Boston Terriers lack an undercoat, they still shed more during seasonal daylight changes—especially 
            in **spring** and **fall**. These changes signal the body to refresh the coat for temperature shifts.
          </p>

          <h3 className="font-semibold mb-2">Common Seasonal Triggers</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Increased daylight or warmer temperatures</li>
            <li>Indoor heating during colder months</li>
            <li>Higher pollen exposure causing skin irritation</li>
          </ul>

          <p className="text-sm text-gray-700">
            Seasonal allergies often worsen shedding—learn more in:{' '}
            <Link
              href="/en/blog/boston-terrier-allergies-2025"
              className="underline hover:opacity-80"
            >
              Boston Terrier Allergies
            </Link>.
          </p>
        </section>

        {/* BRUSHES */}
        <section id="brushes" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Best Brushes for Boston Terrier Coats</h2>
          <p className="mb-4">
            Boston Terriers require gentle grooming tools because their skin is thin and sensitive. The right brush 
            helps remove loose hair without irritation.
          </p>

          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Soft bristle brush (ideal for weekly use)</li>
            <li>Rubber curry brush for short coats</li>
            <li>Grooming mitts for sensitive skin</li>
          </ul>

          <p className="mt-3 text-sm text-gray-700">
            If you notice irritation around ears or folds during grooming, see:{' '}
            <Link
              href="/en/blog/boston-terrier-ear-care-2025"
              className="underline hover:opacity-80"
            >
              Boston Terrier Ear Care
            </Link>.
          </p>
        </section>

        {/* REDUCE SHEDDING */}
        <section id="reduce" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Techniques to Reduce Shedding</h2>
          <p className="mb-4">
            While you can’t stop shedding, you can reduce how much hair ends up around your home.
          </p>

          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Weekly brushing with a soft bristle or rubber curry brush</li>
            <li>Monthly baths with moisturizing shampoo</li>
            <li>Omega-3 supplements for skin health</li>
            <li>Use a humidifier to prevent dry skin in winter</li>
            <li>Keep bedding and blankets clean to reduce loose hair buildup</li>
          </ul>

          <p className="text-sm text-gray-700">
            Excess dryness from overbathing can worsen shedding—compare with:{' '}
            <Link
              href="/en/blog/how-often-should-you-bathe-a-boston-terrier-2025"
              className="underline hover:opacity-80"
            >
              Bathing Guidelines
            </Link>.
          </p>
        </section>

        {/* DIET & ALLERGIES */}
        <section id="diet" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Links Between Shedding, Diet & Allergies</h2>
          <p className="mb-4">
            Nutrition plays a major role in coat quality. Allergies are also a leading cause of excessive shedding, 
            flaking, and hair loss in Boston Terriers.
          </p>

          <h3 className="font-semibold mb-2">Diet Factors</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Low-quality protein contributes to weak coat growth</li>
            <li>Omega-3 deficiency leads to dry skin</li>
            <li>Food sensitivities cause inflammation and shedding</li>
          </ul>

          <p className="text-sm text-gray-700">
            Diet planning guidance available in:{' '}
            <Link
              href="/en/blog/boston-terrier-diet-guide-2025"
              className="underline hover:opacity-80"
            >
              Boston Terrier Diet Guide
            </Link>.
          </p>

          <p className="text-sm text-gray-700 mt-2">
            Allergy flare-ups often cause sudden shedding—see:{' '}
            <Link
              href="/en/blog/boston-terrier-allergies-2025"
              className="underline hover:opacity-80"
            >
              Boston Terrier Allergies
            </Link>.
          </p>
        </section>

        {/* VET ISSUE */}
        <section id="vet" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">When Unusual Shedding Indicates a Vet Issue</h2>
          <p className="mb-4">
            While regular shedding is normal, **hair loss**, bald spots, redness, odor, or sudden shedding spikes 
            often point to underlying medical problems.
          </p>

          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Patchy or circular bald spots</li>
            <li>Red, inflamed skin</li>
            <li>Yeasty or sour odor</li>
            <li>Scabs or crusting</li>
            <li>Sudden shedding increase with itching</li>
            <li>Behavior changes from discomfort</li>
          </ul>

          <p className="text-sm text-gray-700">
            Chronic infections or inflammation covered in:{' '}
            <Link
              href="/en/blog/boston-terrier-health-problems"
              className="underline hover:opacity-80"
            >
              Boston Terrier Health Problems
            </Link>.
          </p>
        </section>

        {/* REFERENCES */}
        <section id="references" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">📚 References</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            <li>Veterinary dermatology & coat health sources</li>
            <li>Seasonal shedding studies</li>
            <li>Nutrition and allergy research</li>
          </ul>
        </section>

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
