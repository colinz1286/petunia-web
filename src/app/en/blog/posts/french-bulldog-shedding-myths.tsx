'use client';

import { useLocale } from 'next-intl';
import Link from 'next/link';

export default function FrenchBulldogSheddingMyths() {
  const locale = useLocale();

  return (
    <>

      <article className="prose lg:prose-xl mx-auto px-4 py-8">
        <p className="text-sm text-gray-500 mb-4">Written on September 26, 2025</p>

        <h1 className="text-3xl font-bold mb-4">
          French Bulldog Shedding Myths: What Owners Really Need to Know
        </h1>

        <div className="mb-6">
          <span className="inline-block bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full mr-2">
            Pet Owners
          </span>
          <span className="inline-block bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">
            Health
          </span>
        </div>

        <nav className="mb-6">
          <h2 className="font-semibold">Table of Contents</h2>
          <ul className="list-disc list-inside">
            <li><a href="#tldr">TL;DR</a></li>
            <li><a href="#myths">The Myth of the Hypoallergenic Frenchie</a></li>
            <li><a href="#seasonal">Seasonal vs. Year-Round Shedding</a></li>
            <li><a href="#grooming">Practical Grooming Tips</a></li>
            <li><a href="#health">When Shedding Signals Health Issues</a></li>
            <li><a href="#conclusion">Conclusion</a></li>
            <li><a href="#sources">Sources</a></li>
          </ul>
        </nav>

        <section id="tldr" className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">TL;DR</h2>
          <p>
            French Bulldogs shed more than most people expect. They are <strong>not hypoallergenic</strong>, 
            and while they don&rsquo;t shed as much as double-coated breeds, regular brushing and care are essential. 
            Understanding seasonal shedding and providing proper grooming can keep your Frenchie&rsquo;s coat healthy.
          </p>
        </section>

        <section id="myths" className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">The Myth of the Hypoallergenic Frenchie</h2>
          <p>
            Many new owners are told that French Bulldogs are &ldquo;hypoallergenic.&rdquo; 
            Unfortunately, this is a <strong>myth</strong>. No dog breed is truly hypoallergenic. 
            Allergic reactions are caused by proteins found in a dog&rsquo;s dander, saliva, and urine—not just fur. 
            While Frenchies have a short, fine coat, they still release dander and shed consistently.
          </p>
        </section>

        <section id="seasonal" className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Seasonal vs. Year-Round Shedding</h2>
          <p>
            French Bulldogs shed lightly year-round, with heavier shedding phases in the spring and fall. 
            Unlike double-coated breeds, their shedding is not as intense, but it can still surprise first-time owners. 
            Seasonal changes, stress, and even hormonal shifts can increase shedding levels.
          </p>
        </section>

        <section id="grooming" className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Practical Grooming Tips</h2>
          <ul className="list-disc list-inside">
            <li>Brush weekly with a rubber curry brush or grooming mitt</li>
            <li>Bathe every 4–6 weeks with a mild, dog-safe shampoo</li>
            <li>Feed a high-quality diet rich in omega-3 fatty acids for coat health</li>
            <li>Use a damp microfiber cloth between baths to reduce dander</li>
            <li>Vacuum and wash bedding regularly to manage loose hair</li>
          </ul>
        </section>

        <section id="health" className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">When Shedding Signals Health Issues</h2>
          <p>
            Excessive shedding outside of seasonal changes may indicate health concerns such as 
            skin infections, parasites, poor diet, or thyroid problems. 
            If your Frenchie&rsquo;s coat looks dull, patchy, or is accompanied by itching, 
            consult a veterinarian for a check-up.
          </p>
        </section>

        <section id="conclusion" className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Conclusion</h2>
          <p>
            Shedding is normal for French Bulldogs, but understanding the difference between 
            typical and excessive shedding is key. With the right grooming habits and attention to diet and health, 
            you can keep your Frenchie comfortable, clean, and looking their best.
          </p>
        </section>

        <section id="sources" className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Sources</h2>
          <ul className="list-disc list-inside">
            <li>American Kennel Club (AKC) – French Bulldog Breed Standard</li>
            <li>American Veterinary Medical Association (AVMA) – Pet Allergies Guide</li>
            <li>Royal Veterinary College – Canine Dermatology Research</li>
          </ul>
        </section>

        <div className="mt-8">
          <Link href={`/${locale}/blog`} className="text-blue-600 hover:underline">
            ← Back to Blog
          </Link>
        </div>
      </article>
    </>
  );
}
