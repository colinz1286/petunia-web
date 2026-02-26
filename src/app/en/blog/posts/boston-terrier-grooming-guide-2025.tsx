'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function BostonTerrierGroomingGuide2025() {
  const locale = useLocale();

  const title =
    'Boston Terrier Grooming Guide (2025): Brushing, Bathing, Facial Folds, Nails & Shedding Patterns';
  const date = 'November 9, 2025';
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
            <li><a href="#brushing" className="underline hover:opacity-80">Weekly Brushing</a></li>
            <li><a href="#bathing" className="underline hover:opacity-80">Bathing Schedule</a></li>
            <li><a href="#folds" className="underline hover:opacity-80">Facial Fold Care</a></li>
            <li><a href="#nails" className="underline hover:opacity-80">Nail Trimming</a></li>
            <li><a href="#ears" className="underline hover:opacity-80">Ear Cleaning</a></li>
            <li><a href="#shedding" className="underline hover:opacity-80">Shedding Patterns</a></li>
            <li><a href="#redflags" className="underline hover:opacity-80">Red Flags</a></li>
            <li><a href="#references" className="underline hover:opacity-80">📚 References</a></li>
          </ul>
        </nav>

        {/* TLDR */}
        <section id="tl-dr" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Short Answer (TL;DR)</h2>
          <p className="mb-4">
            Boston Terriers have low-maintenance coats but require routine care — especially facial folds, nails, and
            ears. Weekly brushing controls shedding, monthly baths prevent odor, and regular checks help catch
            allergies early (a common issue in this breed).
          </p>

          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Quick note:</strong> Most grooming problems stem from allergies or skin sensitivity — something
            Boston Terriers are prone to.
          </div>
        </section>

        {/* BRUSHING */}
        <section id="brushing" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Weekly Brushing Routine</h2>
          <p className="mb-3">
            Boston Terriers have smooth, short coats that shed lightly year-round. Weekly brushing keeps the coat shiny
            and reduces loose hair.
          </p>

          <h3 className="font-semibold mb-2">Recommended Tools</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Soft bristle brush</li>
            <li>Rubber curry brush or grooming mitt</li>
          </ul>

          <p className="text-sm text-gray-700">
            Skin-related grooming issues? Review:{' '}
            <Link href="/en/blog/boston-terrier-health-problems" className="underline hover:opacity-80">
              Boston Terrier Health Problems
            </Link>.
          </p>
        </section>

        {/* BATHING */}
        <section id="bathing" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Bathing Schedule & Recommended Products</h2>
          <p className="mb-3">
            Overbathing can dry out a Boston Terrier’s skin, while too little can lead to odor and irritation.
            Balance is key.
          </p>

          <h3 className="font-semibold mb-2">Bathing Frequency</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>Every 4–6 weeks</strong> for most dogs</li>
            <li><strong>Every 2–4 weeks</strong> for allergy-prone dogs</li>
          </ul>

          <h3 className="font-semibold mb-2">Shampoo Recommendations</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Hypoallergenic, scent-free shampoo</li>
            <li>Oatmeal-based formulas for sensitive skin</li>
            <li>Medicated shampoo (only when prescribed)</li>
          </ul>
        </section>

        {/* FACIAL FOLD CARE */}
        <section id="folds" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Facial Fold Care (Very Important)</h2>
          <p className="mb-3">
            Boston Terriers have shallow facial folds that trap moisture. Without routine cleaning, these areas can
            develop yeast infections, odor, and irritation.
          </p>

          <h3 className="font-semibold mb-2">Routine Care</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Wipe folds 2–4× per week</li>
            <li>Dry thoroughly after bathing</li>
            <li>Use vet-approved wipes for sensitive areas</li>
          </ul>

          <p className="text-sm text-gray-700 mt-3">
            Facial fold irritation often overlaps with allergies. More here:{' '}
            <Link href="/en/blog/boston-terrier-health-problems" className="underline hover:opacity-80">
              Boston Terrier Health Problems
            </Link>.
          </p>
        </section>

        {/* NAILS */}
        <section id="nails" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Nail Trimming Frequency</h2>
          <p className="mb-3">
            Boston Terriers often hate nail trims — but overgrown nails affect posture and comfort.
          </p>

          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>Trim every 2–4 weeks</strong></li>
            <li>Use a grinder if clippers cause discomfort</li>
            <li>Reward heavily to build positive associations</li>
          </ul>
        </section>

        {/* EAR CLEANING */}
        <section id="ears" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Ear Cleaning Routine & Tools</h2>
          <p className="mb-3">
            Their upright ears allow airflow — but wax buildup and allergies still make regular cleaning important.
          </p>

          <h3 className="font-semibold mb-2">How Often to Clean</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Every 2–4 weeks for maintenance</li>
            <li>Weekly during allergy flare-ups</li>
          </ul>

          <h3 className="font-semibold mb-2">Recommended Tools</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Vet-approved ear cleaner</li>
            <li>Cotton pads (never cotton swabs deep in the canal)</li>
          </ul>
        </section>

        {/* SHEDDING */}
        <section id="shedding" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Shedding Patterns & Seasonal Variation</h2>
          <p className="mb-3">
            Boston Terriers shed lightly throughout the year, with noticeable increases in spring and fall.
          </p>

          <h3 className="font-semibold mb-2">What’s Normal</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Light weekly shedding</li>
            <li>Seasonal shedding 2× per year</li>
            <li>More visible shed on dark furniture and clothing</li>
          </ul>
        </section>

        {/* RED FLAGS */}
        <section id="redflags" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Red Flags in Skin, Coat & Ears</h2>
          <p className="mb-3">
            Boston Terriers are prone to allergies, environmental sensitivities, and hotspots. Early detection prevents
            chronic issues.
          </p>

          <h3 className="font-semibold mb-2">Contact a Vet If You See:</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Persistent redness or flaky skin</li>
            <li>Yeasty smell in folds or ears</li>
            <li>Hair thinning or bald patches</li>
            <li>Scratching more than normal</li>
            <li>Scabs, sores, or excessive coat dullness</li>
          </ul>

          <p className="text-sm text-gray-700 mt-3">
            For puppy-specific grooming needs, see:{' '}
            <Link href="/en/blog/boston-terrier-puppy-guide-2025" className="underline hover:opacity-80">
              Boston Terrier Puppy Guide
            </Link>.
          </p>
        </section>

        {/* REFERENCES */}
        <section id="references" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">📚 References</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            <li>Veterinary dermatology studies</li>
            <li>Breed grooming and coat health guidelines</li>
            <li>Allergy management recommendations, 2024–2025</li>
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
