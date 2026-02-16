'use client';

import Head from 'next/head';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function HowOftenShouldYouBatheABostonTerrier2025() {
  const locale = useLocale();

  const title =
    'How Often Should You Bathe a Boston Terrier? (2025): Bathing Frequency, Skin Care & Safe Bath Routine';
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
    'A complete 2025 guide explaining how often to bathe a Boston Terrier, signs they need a bath, shampoos for sensitive skin, proper bathing steps, overbathing risks, and when medicated baths are needed.';

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

        {/* Navigation */}
        <nav className="mb-8 text-sm">
          <ul className="flex flex-wrap gap-3">
            <li><a href="#tldr" className="underline hover:opacity-80">TL;DR</a></li>
            <li><a href="#frequency" className="underline hover:opacity-80">Bathing Frequency</a></li>
            <li><a href="#signs" className="underline hover:opacity-80">Signs They Need a Bath</a></li>
            <li><a href="#shampoo" className="underline hover:opacity-80">Recommended Shampoos</a></li>
            <li><a href="#steps" className="underline hover:opacity-80">Safe Bath Steps</a></li>
            <li><a href="#risks" className="underline hover:opacity-80">Overbathing Risks</a></li>
            <li><a href="#medicated" className="underline hover:opacity-80">When Medicated Baths Are Needed</a></li>
            <li><a href="#references" className="underline hover:opacity-80">📚 References</a></li>
          </ul>
        </nav>

        {/* TLDR */}
        <section id="tldr" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Short Answer (TL;DR)</h2>
          <p className="mb-4">
            Most Boston Terriers benefit from a bath every **3–6 weeks**, depending on skin sensitivity, lifestyle, 
            and allergy status. Overbathing causes dryness and irritation, while underbathing allows buildup and odor. 
            Use gentle, hypoallergenic shampoos and follow a safe, step-by-step routine to protect their skin and ears.
          </p>

          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Tip:</strong> Allergic or itchy Boston Terriers may need specialized bathing schedules from their veterinarian.
          </div>
        </section>

        {/* FREQUENCY */}
        <section id="frequency" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Ideal Bathing Frequency</h2>
          <p className="mb-4">
            Boston Terriers have short, single-layer coats that don’t trap odor as easily as long-coated breeds. 
            Even so, they require routine bathing to maintain skin health.
          </p>

          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>Puppies:</strong> Every 4–6 weeks</li>
            <li><strong>Adults:</strong> Every 3–6 weeks depending on activity level</li>
            <li><strong>Seniors:</strong> Every 4–6 weeks unless instructed otherwise by a vet</li>
          </ul>

          <p className="text-sm text-gray-700">
            For age-specific care, see:{' '}
            <Link
              href="/en/blog/senior-boston-terrier-care-2025"
              className="underline hover:opacity-80"
            >
              Senior Boston Terrier Care
            </Link>.
          </p>
        </section>

        {/* SIGNS */}
        <section id="signs" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Signs Your Boston Terrier Needs a Bath</h2>
          <p className="mb-4">
            Bathing should match your dog’s needs, not just the calendar. Watch for these indicators:
          </p>

          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Noticeable odor (musty or oily smell)</li>
            <li>Visible buildup or flakes on the coat</li>
            <li>Itching or excessive licking</li>
            <li>Dirt or pollen after outdoor activity</li>
            <li>Skin irritation around folds or armpits</li>
          </ul>

          <p className="text-sm text-gray-700">
            Allergies can cause itching and flaky skin—learn more in:{' '}
            <Link
              href="/en/blog/boston-terrier-allergies-2025"
              className="underline hover:opacity-80"
            >
              Boston Terrier Allergies
            </Link>.
          </p>
        </section>

        {/* SHAMPOO */}
        <section id="shampoo" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Recommended Shampoos for Sensitive Skin</h2>
          <p className="mb-4">
            Boston Terriers often have sensitive skin, so choosing the right shampoo is essential.
          </p>

          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Hypoallergenic shampoo (soap-free)</li>
            <li>Oatmeal or aloe-based formulas</li>
            <li>Medicated shampoo only when prescribed</li>
            <li>Avoid strong fragrances or harsh chemicals</li>
          </ul>

          <p className="text-sm text-gray-700">
            If ear irritation accompanies skin issues, see:{' '}
            <Link
              href="/en/blog/boston-terrier-ear-care-2025"
              className="underline hover:opacity-80"
            >
              Boston Terrier Ear Care
            </Link>.
          </p>
        </section>

        {/* STEPS */}
        <section id="steps" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Steps for a Safe & Effective Bath</h2>
          <p className="mb-4">
            Follow this step-by-step routine to keep your Boston Terrier clean and comfortable:
          </p>

          <h3 className="font-semibold mb-2">1. Prep the Area</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Brush loose hair before bathing</li>
            <li>Use lukewarm water (never hot)</li>
          </ul>

          <h3 className="font-semibold mb-2">2. Protect the Ears</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Keep water out of the ear canal</li>
            <li>Lift ears gently and wipe after the bath</li>
          </ul>

          <h3 className="font-semibold mb-2">3. Wash the Body</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Lather gently, avoiding eyes and nose</li>
            <li>Clean folds and armpits thoroughly</li>
          </ul>

          <h3 className="font-semibold mb-2">4. Rinse Thoroughly</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Residue causes itching—rinse until water runs clear</li>
          </ul>

          <h3 className="font-semibold mb-2">5. Dry Completely</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Towel dry first, then use a low-heat dryer if needed</li>
            <li>Dry folds and ears to prevent moisture buildup</li>
          </ul>

          <p className="text-sm text-gray-700">
            If skin is already irritated or flaky, compare with:{' '}
            <Link
              href="/en/blog/boston-terrier-health-problems"
              className="underline hover:opacity-80"
            >
              Boston Terrier Health Problems
            </Link>.
          </p>
        </section>

        {/* OVERBATHING RISKS */}
        <section id="risks" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Overbathing Risks: Dryness, Irritation & Flaking</h2>
          <p className="mb-4">
            Frequent bathing removes natural oils from the skin, increasing sensitivity and potential infection risk.
          </p>

          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Dry, flaky skin</li>
            <li>Itching or redness</li>
            <li>Increased susceptibility to allergies</li>
            <li>Coat appearing dull or brittle</li>
          </ul>

          <p className="text-sm text-gray-700">
            If allergies worsen skin dryness, review:{' '}
            <Link
              href="/en/blog/boston-terrier-allergies-2025"
              className="underline hover:opacity-80"
            >
              Boston Terrier Allergies
            </Link>.
          </p>
        </section>

        {/* MEDICATED BATHS */}
        <section id="medicated" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">When Medicated Baths Are Appropriate</h2>
          <p className="mb-4">
            Some skin conditions require medicated baths, but these should always be veterinarian-directed.
          </p>

          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Yeast infections</li>
            <li>Bacterial skin infections</li>
            <li>Severe allergies causing inflammation</li>
            <li>Dandruff-like flaking or seborrhea</li>
          </ul>

          <p className="text-sm text-gray-700">
            Chronic skin or ear infections often overlap with allergies—compare with:{' '}
            <Link
              href="/en/blog/boston-terrier-ear-care-2025"
              className="underline hover:opacity-80"
            >
              Boston Terrier Ear Care
            </Link>.
          </p>
        </section>

        {/* REFERENCES */}
        <section id="references" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">📚 References</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            <li>Veterinary dermatology sources</li>
            <li>Canine skin physiology research</li>
            <li>Bathing guidelines for sensitive breeds</li>
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
