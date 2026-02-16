'use client';

import Head from 'next/head';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function RawBonesAndDogsBenefitsRisksSafeChewingTips() {
  const locale = useLocale();

  const title = 'Raw Bones & Dogs: Benefits, Risks & Safe Chewing Tips';
  const date = 'December 12, 2025';
  const categories = ['owner', 'food'] as const;

  const categoryLabels: Record<string, string> = {
    owner: 'Pet Owners',
    food: 'Food & Nutrition',
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
    'An evidence-based guide to feeding raw bones to dogs, covering benefits, real risks, raw vs cooked bone differences, safe sizing, supervision rules, and alternatives for dogs who should not chew bones.';

  return (
    <>
      <Head>
        <title>{title} – Petunia Blog</title>
        <meta name="description" content={description} />
        <meta name="robots" content="all" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
      </Head>

      <main className="max-w-3xl mx-auto px-4 py-10 text-[#2c4a30]">
        {/* Meta */}
        <p className="text-sm text-gray-500 mb-2">Posted on {date}</p>
        <h1 className="text-3xl font-bold mb-4">{title}</h1>

        {/* Category pills */}
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

        {/* Local anchor nav */}
        <nav className="mb-8 text-sm">
          <ul className="flex flex-wrap gap-3">
            <li><a href="#tldr" className="underline hover:opacity-80">TL;DR</a></li>
            <li><a href="#benefits" className="underline hover:opacity-80">Benefits</a></li>
            <li><a href="#raw-vs-cooked" className="underline hover:opacity-80">Raw vs Cooked</a></li>
            <li><a href="#risks" className="underline hover:opacity-80">Risks</a></li>
            <li><a href="#choosing-bones" className="underline hover:opacity-80">Choosing Bones</a></li>
            <li><a href="#guidelines" className="underline hover:opacity-80">Safety Guidelines</a></li>
            <li><a href="#not-for-every-dog" className="underline hover:opacity-80">Who Should Avoid Bones</a></li>
            <li><a href="#alternatives" className="underline hover:opacity-80">Alternatives</a></li>
            <li><a href="#sources" className="underline hover:opacity-80">📚 Sources</a></li>
          </ul>
        </nav>

        {/* TL;DR */}
        <section id="tldr" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Short Answer (TL;DR)</h2>
          <p className="mb-4">
            Raw bones can offer dental and behavioral benefits for some dogs, but they also carry real risks when chosen
            poorly or fed without supervision. Raw bones are fundamentally different from cooked bones, which should
            never be fed. Safety depends on bone type, size, the dog&rsquo;s chewing style, and close supervision.
            Many dogs do better with safer alternatives.
          </p>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Important note:</strong> This article is educational, not veterinary medical advice. Seek immediate
            veterinary care for choking, broken teeth, vomiting, abdominal pain, or any sudden behavioral change after
            chewing a bone.
          </div>
        </section>

        {/* BENEFITS */}
        <section id="benefits" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Potential Benefits of Raw Bones</h2>
          <p className="mb-4">
            When used appropriately, raw bones can provide mechanical and behavioral benefits that some dogs find
            highly rewarding. These benefits are not universal and depend heavily on execution.
          </p>

          <h3 className="text-xl font-semibold mb-2">Dental and oral health support</h3>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>Chewing can help scrape plaque from teeth</li>
            <li>Jaw muscles are engaged through sustained gnawing</li>
            <li>Some dogs show reduced tartar buildup over time</li>
          </ul>

          <h3 className="text-xl font-semibold mb-2">Mental enrichment and stress relief</h3>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>Provides a natural chewing outlet</li>
            <li>Can reduce boredom-related behaviors</li>
            <li>Encourages slower, focused engagement</li>
          </ul>

          <p className="text-sm text-gray-700">
            Benefits are often overstated or misunderstood. Common misconceptions are addressed in:{' '}
            <Link
              href={`/${locale}/blog/top-myths-about-raw-feeding-debunked`}
              className="underline font-medium hover:opacity-80"
            >
              Raw Dog Food Myths &amp; Misconceptions
            </Link>
            .
          </p>
        </section>

        {/* RAW VS COOKED */}
        <section id="raw-vs-cooked" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Raw Bones vs Cooked Bones: A Critical Difference</h2>
          <p className="mb-4">
            Raw and cooked bones behave very differently under pressure. This distinction is non-negotiable when it
            comes to safety.
          </p>

          <h3 className="text-xl font-semibold mb-2">Raw bones</h3>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>More pliable and flexible</li>
            <li>Tend to crush rather than splinter</li>
            <li>Still carry risks, but structurally safer than cooked bones</li>
          </ul>

          <h3 className="text-xl font-semibold mb-2">Cooked bones</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Brittle and prone to splintering</li>
            <li>Higher risk of choking and intestinal perforation</li>
            <li>Should never be fed, regardless of size or species</li>
          </ul>

          <p className="mt-4">
            Cooking changes bone density and fracture patterns in ways that significantly increase danger. This risk is
            covered further in the safety guide:
          </p>

          <p className="text-sm text-gray-700">
            <Link
              href={`/${locale}/blog/raw-dog-food-safety`}
              className="underline font-medium hover:opacity-80"
            >
              Raw Dog Food Safety: How to Handle &amp; Prepare Raw Diets Without Risk
            </Link>
            .
          </p>
        </section>

        {/* RISKS */}
        <section id="risks" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Real Risks to Understand Before Offering Bones</h2>
          <p className="mb-4">
            Even raw bones are not risk-free. Most serious incidents occur when bones are too small, too hard, or fed
            without supervision.
          </p>

          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>Choking or gagging from poorly sized bones</li>
            <li>Tooth fractures from dense weight-bearing bones</li>
            <li>Gastrointestinal obstruction or constipation</li>
            <li>Resource guarding and multi-dog conflict</li>
          </ul>

          <p className="text-sm text-gray-700">
            If problems arise, step-by-step guidance is available in:{' '}
            <Link
              href={`/${locale}/blog/raw-diet-troubleshooting-common-issues`}
              className="underline font-medium hover:opacity-80"
            >
              Raw Diet Troubleshooting: Common Issues
            </Link>
            .
          </p>
        </section>

        {/* CHOOSING BONES */}
        <section id="choosing-bones" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Choosing the Right Bone for Your Dog</h2>
          <p className="mb-4">
            Bone choice matters more than breed. Size, density, and chewing behavior should guide decisions.
          </p>

          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>Bone should be larger than the dog&rsquo;s mouth to prevent swallowing</li>
            <li>Avoid weight-bearing leg bones from large animals</li>
            <li>Match bone density to chewing intensity</li>
            <li>Discard bones once they become small or sharp</li>
          </ul>

          <p className="mb-4">
            Dogs that gulp food or attempt to swallow large pieces are generally poor candidates for bone chewing.
          </p>
        </section>

        {/* GUIDELINES */}
        <section id="guidelines" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Supervision and Feeding Guidelines</h2>
          <p className="mb-4">
            Safe bone use requires active management. Bones should never be treated as unattended toys.
          </p>

          <ul className="list-disc pl-5 space-y-1">
            <li>Always supervise chewing sessions</li>
            <li>Feed in a controlled, calm environment</li>
            <li>Limit chew time to avoid overconsumption</li>
            <li>Remove the bone if the dog tries to break off large chunks</li>
            <li>Wash hands and surfaces after handling raw bones</li>
          </ul>
        </section>

        {/* NOT FOR EVERY DOG */}
        <section id="not-for-every-dog" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Dogs Who Should Not Chew Bones</h2>
          <p className="mb-4">
            Some dogs are simply not good candidates for bone chewing, even under ideal conditions.
          </p>

          <ul className="list-disc pl-5 space-y-1">
            <li>Dogs with a history of GI obstruction</li>
            <li>Aggressive or frantic chewers</li>
            <li>Dogs with significant dental disease or broken teeth</li>
            <li>Households with high resource guarding risk</li>
            <li>Medically fragile or immunocompromised dogs</li>
          </ul>
        </section>

        {/* ALTERNATIVES */}
        <section id="alternatives" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">Safer Alternatives to Raw Bones</h2>
          <p className="mb-4">
            For dogs who should not chew bones, there are safer ways to provide dental support and enrichment.
          </p>

          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>Veterinary-approved dental chews</li>
            <li>Rubber chew toys designed for durability</li>
            <li>Food-dispensing enrichment toys</li>
            <li>Regular tooth brushing and professional cleanings</li>
          </ul>

          <p className="mb-4">
            Choosing alternatives does not mean abandoning raw feeding entirely. Raw diets can be successful without
            whole bones when structured appropriately.
          </p>
        </section>

        {/* SOURCES */}
        <section id="sources" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">📚 Sources &amp; Official References</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            <li>American Veterinary Medical Association – Raw protein policy</li>
            <li>FDA – Safe handling of pet food and treats</li>
            <li>WSAVA – Global nutrition guidelines</li>
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
