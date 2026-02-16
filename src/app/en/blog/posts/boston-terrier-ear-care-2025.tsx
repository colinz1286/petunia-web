'use client';

import Head from 'next/head';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function BostonTerrierEarCare2025() {
  const locale = useLocale();

  const title =
    'Boston Terrier Ear Care (2025): Cleaning Routine, Infection Signs, Allergies & Prevention';
  const date = 'November 29, 2025';
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
    'A complete 2025 guide to Boston Terrier ear care, including ear anatomy, signs of infection, step-by-step cleaning, allergy-related inflammation, when vet care is needed, and long-term prevention strategies.';

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
            <li><a href="#anatomy" className="underline hover:opacity-80">Ear Anatomy</a></li>
            <li><a href="#signs" className="underline hover:opacity-80">Signs of Infection</a></li>
            <li><a href="#cleaning" className="underline hover:opacity-80">Cleaning Routine</a></li>
            <li><a href="#allergies" className="underline hover:opacity-80">Allergies & Inflammation</a></li>
            <li><a href="#vet" className="underline hover:opacity-80">When Vet Care Is Needed</a></li>
            <li><a href="#prevention" className="underline hover:opacity-80">Preventive Care</a></li>
            <li><a href="#references" className="underline hover:opacity-80">📚 References</a></li>
          </ul>
        </nav>

        {/* TLDR */}
        <section id="tldr" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Short Answer (TL;DR)</h2>
          <p className="mb-4">
            Boston Terriers have upright ears that allow airflow, but they are still prone to wax buildup, allergies, 
            and yeast infections. Watch for odors, redness, excess wax, or head shaking. Clean ears weekly, use vet-approved 
            solutions, and seek veterinary care if symptoms worsen. Allergies are the #1 underlying cause of chronic ear issues.
          </p>

          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Important:</strong> Never use cotton swabs inside the ear canal. Clean only what you can see.
          </div>
        </section>

        {/* EAR ANATOMY */}
        <section id="anatomy" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Ear Anatomy of Boston Terriers</h2>
          <p className="mb-4">
            Boston Terriers have naturally erect ears, which provide better airflow than floppy-eared breeds. 
            However, their narrow ear canals and sensitive skin make them prone to yeast or bacterial overgrowth, 
            especially if allergies are present.
          </p>

          <p className="mb-3">
            Their upright ears also collect dust, pollen, and debris easily, which can irritate the skin and create 
            inflammation.
          </p>

          <p className="text-sm text-gray-700">
            For more allergy-related sensitivities, see:{' '}
            <Link
              href="/en/blog/boston-terrier-allergies-2025"
              className="underline hover:opacity-80"
            >
              Boston Terrier Allergies
            </Link>.
          </p>
        </section>

        {/* SIGNS OF INFECTION */}
        <section id="signs" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Signs of Infection: Smell, Wax, Redness & Head Shaking</h2>
          <p className="mb-4">
            Knowing the early signs of ear discomfort helps prevent chronic infections.
          </p>

          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Strong odor (yeasty or sour smell)</li>
            <li>Dark brown or yellow wax buildup</li>
            <li>Redness inside the ear flap</li>
            <li>Constant head shaking or ear scratching</li>
            <li>Crusty residue around the canal opening</li>
            <li>Pain when touched</li>
          </ul>

          <p className="text-sm text-gray-700">
            Secondary infections from allergies also show up around paws and skin—see:{' '}
            <Link
              href="/en/blog/boston-terrier-allergies-2025"
              className="underline hover:opacity-80"
            >
              Boston Terrier Allergies
            </Link>.
          </p>
        </section>

        {/* CLEANING ROUTINE */}
        <section id="cleaning" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Step-by-Step Ear Cleaning Routine</h2>
          <p className="mb-4">
            Proper cleaning prevents infection and keeps ears healthy. Follow this gentle routine:
          </p>

          <h3 className="font-semibold mb-2">1. Choose the Right Cleaner</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Use a vet-approved dog ear cleaning solution</li>
            <li>Avoid alcohol or hydrogen peroxide</li>
          </ul>

          <h3 className="font-semibold mb-2">2. Apply the Solution</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Lift the ear flap and squeeze enough solution to fill the canal</li>
            <li>Gently massage the base of the ear for 20–30 seconds</li>
          </ul>

          <h3 className="font-semibold mb-2">3. Let Your Dog Shake</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>This helps bring debris to the surface</li>
          </ul>

          <h3 className="font-semibold mb-2">4. Wipe the Visible Area</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Use a cotton pad or soft cloth</li>
            <li>Do not insert anything deep into the ear canal</li>
          </ul>

          <p className="text-sm text-gray-700">
            If your dog dislikes handling due to anxiety, see:{' '}
            <Link
              href="/en/blog/boston-terrier-behavior-problems-2025"
              className="underline hover:opacity-80"
            >
              Boston Terrier Behavior Problems
            </Link>.
          </p>
        </section>

        {/* ALLERGIES */}
        <section id="allergies" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">How Allergies Contribute to Ear Inflammation</h2>
          <p className="mb-4">
            Allergies—especially food and environmental allergies—are the leading cause of recurring ear problems 
            in Boston Terriers. When inflammation increases, yeast and bacteria grow more easily.
          </p>

          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Pollen exposure causes itchy, inflamed ears</li>
            <li>Dust mites can trigger chronic irritation</li>
            <li>Food allergens often lead to recurrent infections</li>
            <li>Ear rubbing and scratching worsen inflammation</li>
          </ul>

          <p className="text-sm text-gray-700">
            For in-depth allergy management, read:{' '}
            <Link
              href="/en/blog/boston-terrier-allergies-2025"
              className="underline hover:opacity-80"
            >
              Boston Terrier Allergies
            </Link>.
          </p>
        </section>

        {/* VET CARE */}
        <section id="vet" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">When Veterinary Care Is Required</h2>
          <p className="mb-4">
            Some ear issues require professional treatment—especially if infections become recurrent.
          </p>

          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Strong odor that persists after cleaning</li>
            <li>Thick discharge or bleeding</li>
            <li>Severe redness or swelling</li>
            <li>Pain when touching the ear</li>
            <li>Head tilt or balance changes</li>
            <li>Symptoms lasting longer than 48–72 hours</li>
          </ul>

          <p className="text-sm text-gray-700">
            Chronic inflammation may be linked to other health issues—see:{' '}
            <Link
              href="/en/blog/boston-terrier-health-problems"
              className="underline hover:opacity-80"
            >
              Boston Terrier Health Problems
            </Link>.
          </p>
        </section>

        {/* PREVENTION */}
        <section id="prevention" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Preventive Care Plan for Healthy Ears</h2>
          <p className="mb-4">
            A proactive routine helps prevent ear infections and keeps your Boston Terrier comfortable.
          </p>

          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Weekly ear cleaning</li>
            <li>Wipe ears after baths or swimming</li>
            <li>Monitor for excess wax or odor</li>
            <li>Keep hair around ears neatly trimmed</li>
            <li>Manage allergies consistently</li>
            <li>Use a humidifier in dry climates to prevent irritation</li>
          </ul>
        </section>

        {/* REFERENCES */}
        <section id="references" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">📚 References</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            <li>Veterinary dermatology & otology sources</li>
            <li>Canine allergy & yeast overgrowth literature</li>
            <li>Ear infection diagnostic guidelines</li>
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
