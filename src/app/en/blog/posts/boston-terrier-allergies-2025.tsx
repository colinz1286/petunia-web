'use client';

import Head from 'next/head';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function BostonTerrierAllergies2025() {
  const locale = useLocale();

  const title =
    'Boston Terrier Allergies (2025): Food, Seasonal, Environmental Triggers, Itching Patterns & Treatment Options';
  const date = 'November 23, 2025';
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
    'A complete 2025 guide to Boston Terrier allergies, including food, environmental, and seasonal triggers, unique itching patterns, common allergens, home care strategies, vet treatment options, and how allergies lead to secondary infections.';

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
            <li><a href="#tldr" className="underline hover:opacity-80">TL;DR</a></li>
            <li><a href="#types" className="underline hover:opacity-80">Types of Allergies</a></li>
            <li><a href="#itching" className="underline hover:opacity-80">Unique Itching Patterns</a></li>
            <li><a href="#triggers" className="underline hover:opacity-80">Common Triggers</a></li>
            <li><a href="#home" className="underline hover:opacity-80">Home Management</a></li>
            <li><a href="#vet" className="underline hover:opacity-80">Veterinary Treatment</a></li>
            <li><a href="#infections" className="underline hover:opacity-80">Secondary Infections</a></li>
            <li><a href="#references" className="underline hover:opacity-80">📚 References</a></li>
          </ul>
        </nav>

        {/* TLDR */}
        <section id="tldr" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Short Answer (TL;DR)</h2>
          <p className="mb-4">
            Boston Terriers are highly prone to allergies, especially seasonal and environmental ones. Itching on the belly,
            paws, and face is common. Triggers include pollen, dust mites, chicken, and household irritants. Treatment
            includes medicated baths, diet trials, supplements, and prescription medications. Untreated allergies often lead
            to secondary ear and skin infections.
          </p>

          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Important:</strong> Allergies rarely go away on their own. Early management prevents chronic skin damage.
          </div>
        </section>

        {/* TYPES */}
        <section id="types" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Food vs Environmental vs Seasonal Allergies</h2>
          <p className="mb-4">
            Boston Terriers tend to experience all three allergy categories, but the most common are environmental and
            seasonal. Food allergies typically present year-round, while seasonal flare-ups occur during spring and fall.
          </p>

          <h3 className="font-semibold mb-2">Food Allergies</h3>
          <p className="mb-3">
            Caused by immune reactions to specific ingredients. Symptoms include itching, chronic ear infections,
            gastrointestinal upset, or face rubbing.
          </p>

          <h3 className="font-semibold mb-2">Environmental Allergies (Atopy)</h3>
          <p className="mb-3">
            Triggered by indoor allergens like dust, mold, cleaning sprays, or fabrics. Often cause year-round itching.
          </p>

          <h3 className="font-semibold mb-2">Seasonal Allergies</h3>
          <p className="mb-3">
            Driven by outdoor pollen from trees, grass, and weeds. Symptoms come and go with weather patterns.
          </p>

          <p className="text-sm text-gray-700">
            For broader Boston Terrier wellness, see:{' '}
            <Link href="/en/blog/boston-terrier-health-problems" className="underline hover:opacity-80">
              Boston Terrier Health Problems
            </Link>.
          </p>
        </section>

        {/* ITCHING PATTERNS */}
        <section id="itching" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Itching Patterns Unique to Boston Terriers</h2>
          <p className="mb-4">
            Because of their short coat and sensitive skin, Boston Terriers develop redness and irritation much faster than
            many breeds. Their itching patterns often reveal the type of allergy.
          </p>

          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Paw chewing or licking</li>
            <li>Red belly or armpit rash</li>
            <li>Frequent ear scratching</li>
            <li>Face rubbing along furniture or carpet</li>
            <li>Hot spots from over-licking</li>
          </ul>

          <p className="text-sm text-gray-700">
            Overexcitement and stress can worsen itching. See:{' '}
            <Link href="/en/blog/boston-terrier-behavior-problems-2025" className="underline hover:opacity-80">
              Boston Terrier Behavior Problems
            </Link>.
          </p>
        </section>

        {/* TRIGGERS */}
        <section id="triggers" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Common Triggers: Pollen, Chicken, Dust Mites & More</h2>
          <p className="mb-4">
            Allergies come from repeated exposure to irritants. Boston Terriers are especially sensitive to:
          </p>

          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Pollen (trees, grass, weeds)</li>
            <li>Chicken or beef protein</li>
            <li>Dust mites</li>
            <li>Mold spores</li>
            <li>Shampoos or detergents</li>
            <li>Certain fabrics or sprays used inside the home</li>
          </ul>

          <p className="text-sm text-gray-700">
            If allergies affect behavior or sleep, see:{' '}
            <Link href="/en/blog/boston-terrier-separation-anxiety-2025" className="underline hover:opacity-80">
              Boston Terrier Separation Anxiety
            </Link>.
          </p>
        </section>

        {/* HOME MANAGEMENT */}
        <section id="home" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Home Management: Baths, Diet Trials & Supplements</h2>
          <p className="mb-4">
            Consistent home care dramatically reduces flare-ups, especially for seasonal and environmental allergies.
          </p>

          <h3 className="font-semibold mb-2">Medicated or Hypoallergenic Baths</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Use veterinary-approved soothing shampoos</li>
            <li>Rinse pollen off paws after walks</li>
            <li>Weekly baths during peak allergy seasons</li>
          </ul>

          <h3 className="font-semibold mb-2">Food Elimination Trials</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>8–12 week single-protein diet</li>
            <li>No treats except allowed proteins</li>
            <li>Slowly reintroduce ingredients to test reaction</li>
          </ul>

          <h3 className="font-semibold mb-2">Supplements</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Omega-3 fatty acids</li>
            <li>Probiotics</li>
            <li>Skin-support vitamins</li>
          </ul>

          <p className="text-sm text-gray-700">
            For total wellness support, see:{' '}
            <Link href="/en/blog/boston-terrier-diet-guide-2025" className="underline hover:opacity-80">
              Boston Terrier Diet Guide
            </Link>.
          </p>
        </section>

        {/* VET OPTIONS */}
        <section id="vet" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Veterinary Treatment Options</h2>
          <p className="mb-4">
            Many Boston Terriers require veterinary prescriptions to manage moderate or severe allergies effectively.
          </p>

          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Antihistamines</li>
            <li>Prescription allergy medications (Apoquel, Cytopoint)</li>
            <li>Steroids for short-term relief</li>
            <li>Allergy testing (intradermal or blood tests)</li>
            <li>Immunotherapy (allergy shots)</li>
          </ul>

          <p className="text-sm text-gray-700">
            For related chronic conditions, see:{' '}
            <Link href="/en/blog/boston-terrier-eye-problems-2025" className="underline hover:opacity-80">
              Boston Terrier Eye Problems
            </Link>.
          </p>
        </section>

        {/* SECONDARY INFECTIONS */}
        <section id="infections" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">How Allergies Can Lead to Secondary Infections</h2>
          <p className="mb-4">
            When Boston Terriers itch or chew excessively, the skin barrier breaks down. This creates the perfect environment
            for bacteria and yeast to grow. The most common secondary conditions include:
          </p>

          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Ear infections (yeast overgrowth)</li>
            <li>Hot spots</li>
            <li>Skin fold dermatitis</li>
            <li>Chronic paw infections</li>
          </ul>

          <p className="mb-3">
            Early treatment prevents these infections from becoming recurring problems. If your dog&rsquo;s skin smells
            musty, appears red, or has greasy buildup, veterinary care is needed.
          </p>

          <p className="text-sm text-gray-700">
            For behavioral triggers that worsen skin issues, see:{' '}
            <Link href="/en/blog/how-to-stop-a-boston-terrier-from-barking-2025" className="underline hover:opacity-80">
              How to Stop a Boston Terrier from Barking
            </Link>.
          </p>
        </section>

        {/* REFERENCES */}
        <section id="references" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">📚 References</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            <li>Veterinary dermatology studies</li>
            <li>Canine atopy and food allergy research</li>
            <li>Clinical guidelines for allergy management</li>
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
