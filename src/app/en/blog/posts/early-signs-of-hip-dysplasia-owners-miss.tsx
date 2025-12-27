'use client';

import Head from 'next/head';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function EarlySignsHipDysplasiaOwnersMiss() {
  const locale = useLocale();

  const title =
    'Early Signs of Hip Dysplasia Owners Miss: Subtle Clues Before Limping Starts';
  const date = 'December 27, 2025';
  const slug = 'early-signs-of-hip-dysplasia-owners-miss';

  const description =
    'A deeply practical, owner-focused guide to the early and often-overlooked signs of hip dysplasia in dogs, including behavior changes, posture shifts, movement patterns, and daily-life clues that appear long before obvious limping.';

  const categories = ['owner'] as const;

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
      <Head>
        <title>{title} – Petunia Blog</title>
        <meta name="description" content={description} />
        <meta name="robots" content="all" />
        <link
          rel="canonical"
          href={`https://www.petuniapets.com/${locale}/blog/${slug}`}
        />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
      </Head>

      <main className="max-w-3xl mx-auto px-4 py-10 text-[#2c4a30]">
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

        {/* TOC */}
        <nav className="mb-8 text-sm">
          <ul className="flex flex-wrap gap-3">
            <li><a href="#tldr" className="underline">TL;DR</a></li>
            <li><a href="#why-missed" className="underline">Why Early Signs Are Missed</a></li>
            <li><a href="#movement-clues" className="underline">Subtle Movement Clues</a></li>
            <li><a href="#posture-rest" className="underline">Posture &amp; Resting Changes</a></li>
            <li><a href="#behavior" className="underline">Behavioral &amp; Mood Shifts</a></li>
            <li><a href="#daily-life" className="underline">Everyday Life Signals</a></li>
            <li><a href="#when-to-act" className="underline">When to Act</a></li>
            <li><a href="#next-steps" className="underline">Next Steps</a></li>
            <li><a href="#sources" className="underline">Sources</a></li>
          </ul>
        </nav>

        {/* TLDR */}
        <section id="tldr" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Short Answer (TL;DR)</h2>
          <p className="mb-4">
            Many dogs with hip dysplasia show <strong>weeks to months of subtle signs</strong> before limping appears. Owners often miss early clues like hesitation, posture changes, fatigue patterns, or mood shifts. Recognizing these signals early allows weight control, rehab, environment changes, and diagnostics to begin <strong>before arthritis accelerates</strong>.
          </p>
        </section>

        {/* WHY MISSED */}
        <section id="why-missed" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Why Early Signs Are So Often Missed</h2>
          <p className="mb-4">
            Hip dysplasia rarely starts as dramatic pain. Instead, it develops as a slow mechanical mismatch between the hip joint and the forces placed on it. Dogs compensate extremely well, masking discomfort through altered movement and behavior.
          </p>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>Dogs instinctively hide pain rather than vocalize it.</li>
            <li>Early discomfort comes and goes, especially after rest.</li>
            <li>Owners normalize changes as aging, laziness, or personality.</li>
            <li>Symptoms fluctuate with activity, weather, and surfaces.</li>
          </ul>
          <p className="mb-0">
            By the time a clear limp appears, joint damage is often already established.
          </p>
        </section>

        {/* MOVEMENT CLUES */}
        <section id="movement-clues" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Subtle Movement Clues Owners Overlook</h2>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>Shortened rear stride that looks more like a shuffle than a limp.</li>
            <li>Rear end swaying slightly when walking away from you.</li>
            <li>Reluctance to fully extend hips during running.</li>
            <li>Using front legs more aggressively to pull forward.</li>
            <li>Bunny-hopping only at faster speeds, not during slow walks.</li>
          </ul>
          <p className="mb-0">
            These patterns often disappear on soft ground and reappear on slick surfaces.
          </p>
        </section>

        {/* POSTURE */}
        <section id="posture-rest" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Posture and Resting Changes</h2>
          <p className="mb-4">
            Dogs with early hip discomfort adjust how they sit, lie down, and rise.
          </p>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>Sitting with one hip kicked out to the side.</li>
            <li>Avoiding symmetrical “square sits.”</li>
            <li>Taking extra seconds to stand after resting.</li>
            <li>Choosing soft or carpeted spots exclusively.</li>
            <li>Frequent repositioning during sleep.</li>
          </ul>
        </section>

        {/* BEHAVIOR */}
        <section id="behavior" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Behavioral and Mood Shifts</h2>
          <p className="mb-4">
            Pain changes behavior long before it changes gait.
          </p>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>Shorter play sessions followed by sudden disengagement.</li>
            <li>Reduced enthusiasm for walks despite normal energy indoors.</li>
            <li>Irritability during grooming or nail trims.</li>
            <li>Less tolerance for other dogs bumping into them.</li>
            <li>Seeking more rest or isolation than usual.</li>
          </ul>
        </section>

        {/* DAILY LIFE */}
        <section id="daily-life" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Everyday Life Signals That Matter</h2>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>Hesitating before jumping into the car.</li>
            <li>Pausing at the bottom of stairs.</li>
            <li>Needing encouragement to get up after naps.</li>
            <li>Slipping slightly on tile or wood more often.</li>
            <li>Choosing slower routes during familiar walks.</li>
          </ul>
          <p className="mb-0">
            These are often dismissed as training issues but are frequently physical.
          </p>
        </section>

        {/* WHEN TO ACT */}
        <section id="when-to-act" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">When These Signs Should Trigger Action</h2>
          <p className="mb-4">
            One isolated sign may not indicate hip dysplasia. Patterns matter.
          </p>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>Changes persist for more than two weeks.</li>
            <li>Multiple signs appear together.</li>
            <li>Symptoms worsen after activity.</li>
            <li>Recovery from exercise takes longer than before.</li>
          </ul>
          <p className="mb-0">
            At this point, early evaluation can significantly change long-term outcomes.
          </p>
        </section>

        {/* NEXT STEPS */}
        <section id="next-steps" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Next Steps: How This Fits Into the Bigger Picture</h2>
          <p className="mb-4">
            Early recognition is only the first step. Diagnosis, imaging, and long-term planning determine outcomes.
          </p>
          <p className="mb-4">
            For a complete, step-by-step overview of hip dysplasia including treatment paths, home care, rehab, and surgical options, see our pillar guide:{' '}
            <Link
              href={`/${locale}/blog/hip-dysplasia-in-dogs-guide`}
              className="underline font-medium"
            >
              Hip Dysplasia in Dogs: Early Signs, Prevention, Treatment Options, and Life-Care Planning
            </Link>
            .
          </p>
          <p className="mb-0">
            If you are ready to move into imaging and clinical confirmation, continue to our diagnostic deep dive next.
          </p>
        </section>

        {/* SOURCES */}
        <section id="sources" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">Sources (Selected)</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            <li>American College of Veterinary Surgeons. Canine Hip Dysplasia.</li>
            <li>Orthopedic Foundation for Animals. Hip Evaluation Resources.</li>
            <li>AAHA. Canine Pain Management Guidelines.</li>
            <li>WSAVA. Global Nutrition and Weight Management Guidelines.</li>
          </ul>
          <p className="text-xs text-gray-600 mt-4">
            Educational content only. Always consult your veterinarian for diagnosis and treatment decisions.
          </p>
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
