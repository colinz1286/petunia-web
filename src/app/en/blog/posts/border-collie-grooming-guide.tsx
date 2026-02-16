'use client';

import { useLocale } from 'next-intl';
import Head from 'next/head';
import Link from 'next/link';

export default function BorderCollieGroomingGuide() {
  const locale = useLocale();

  return (
    <>
      <Head>
        <title>
          Border Collie Grooming Guide: Coat Types, Shedding, Bathing, and Brushing Schedule | Petunia Blog
        </title>
        <meta
          name="description"
          content="A complete grooming guide for Border Collies, covering coat types, brushing routines, shedding cycles, bathing schedules, ear and nail care, and long-term skin and coat health."
        />
        <meta name="robots" content="all" />
      </Head>

      <article className="prose lg:prose-xl mx-auto px-4 py-8">

        <p className="text-sm text-gray-500 mb-4">Written on November 23, 2025</p>

        <h1 className="text-3xl font-bold mb-4">
          Border Collie Grooming Guide: Coat Types, Shedding, Bathing, and Brushing Schedule
        </h1>

        <div className="mb-6">
          <span className="inline-block bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full mr-2">
            Pet Owners
          </span>
          <span className="inline-block bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">
            Breed-Specific Guides
          </span>
        </div>

        {/* Table of Contents */}
        <nav className="mb-6">
          <h2 className="font-semibold">Table of Contents</h2>
          <ul className="list-disc list-inside">
            <li><a href="#tldr">TL;DR</a></li>
            <li><a href="#coat_types">Border Collie Coat Types Explained</a></li>
            <li><a href="#shedding">Shedding Patterns Throughout the Year</a></li>
            <li><a href="#brushing">Brushing Schedule & Coat Maintenance</a></li>
            <li><a href="#bathing">Bathing Guidelines</a></li>
            <li><a href="#ears_nails">Ear Cleaning & Nail Trimming</a></li>
            <li><a href="#skin">Skin Health & Common Conditions</a></li>
            <li><a href="#behavior_links">How Grooming Impacts Behavior</a></li>
            <li><a href="#exercise_links">How Exercise Supports Coat Health</a></li>
            <li><a href="#family_links">Grooming Tips for Families</a></li>
            <li><a href="#health_links">When Grooming Problems Signal Health Issues</a></li>
            <li><a href="#conclusion">Conclusion</a></li>
            <li><a href="#sources">Sources</a></li>
          </ul>
        </nav>

        {/* TL;DR */}
        <section id="tldr" className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">TL;DR</h2>
          <p>
            Border Collies have double coats that shed year-round, with heavier shedding in spring and fall. 
            Weekly brushing (and more during shedding seasons), regular baths every 4–6 weeks, 
            and consistent ear and nail care keep their coats healthy and reduce mess in the home. 
            Grooming also helps manage behavior, reduce stress, and support overall health.
          </p>
        </section>

        {/* Coat Types */}
        <section id="coat_types" className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Border Collie Coat Types Explained</h2>
          <p>
            Border Collies typically have one of two coat types, both with a weather-resistant double coat:
          </p>
          <ul className="list-disc list-inside">
            <li><strong>Rough Coat:</strong> Medium to long fur with feathering around chest, legs, and tail</li>
            <li><strong>Smooth Coat:</strong> Shorter, sleeker fur with lighter feathering</li>
          </ul>
          <p>
            Both coat types require consistent grooming—though rough coats need slightly more frequent brushing.
          </p>
        </section>

        {/* Shedding */}
        <section id="shedding" className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Shedding Patterns Throughout the Year</h2>
          <p>
            As double-coated dogs, Border Collies shed year-round and experience heavier “coat blowouts” 
            during seasonal changes, especially:
          </p>
          <ul className="list-disc list-inside">
            <li><strong>Spring:</strong> Shedding winter undercoat</li>
            <li><strong>Fall:</strong> Shedding summer coat and preparing for cooler seasons</li>
          </ul>
          <p>
            Expect significantly more loose hair during these periods and increase brushing frequency to manage it.
          </p>
        </section>

        {/* Brushing */}
        <section id="brushing" className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Brushing Schedule & Coat Maintenance</h2>
          <p>
            Regular brushing keeps the coat free of tangles, reduces shedding, and prevents matting—especially 
            behind the ears, under the collar, and along the hind legs.
          </p>
          <p>Recommended brushing frequency:</p>
          <ul className="list-disc list-inside">
            <li><strong>1–2 times per week</strong> during normal seasons</li>
            <li><strong>3–4 times per week</strong> during heavy shedding seasons</li>
          </ul>
          <p>Best grooming tools include:</p>
          <ul className="list-disc list-inside">
            <li>Slicker brush</li>
            <li>Undercoat rake</li>
            <li>Metal comb for finishing</li>
            <li>Grooming wipes for quick cleanups</li>
          </ul>
        </section>

        {/* Bathing */}
        <section id="bathing" className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Bathing Guidelines</h2>
          <p>
            Frequent baths are not necessary for Border Collies. Overbathing can strip natural oils 
            and cause dryness or irritation.
          </p>
          <p><strong>Bath every 4–6 weeks</strong> or sooner if they get muddy, oily, or smelly.</p>
          <p>Bathing tips:</p>
          <ul className="list-disc list-inside">
            <li>Use a gentle, dog-safe shampoo</li>
            <li>Rinse thoroughly to prevent residue buildup</li>
            <li>Dry completely, especially near the undercoat</li>
          </ul>
        </section>

        {/* Ears + Nails */}
        <section id="ears_nails" className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Ear Cleaning & Nail Trimming</h2>
          <p>
            Border Collies have semi-erect ears that can still trap moisture, especially in humid or wet climates.
          </p>
          <p>Clean ears every <strong>2–4 weeks</strong> using a vet-approved ear cleaner.</p>
          <p>Nail trimming recommendations:</p>
          <ul className="list-disc list-inside">
            <li>Trim nails every <strong>3–5 weeks</strong></li>
            <li>If you hear clicking on hard floors, they are too long</li>
            <li>Use clippers or a grinder based on your dog’s comfort level</li>
          </ul>
        </section>

        {/* Skin Health */}
        <section id="skin" className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Skin Health & Common Conditions</h2>
          <p>
            Border Collies can develop skin irritations from allergies, dryness, or underlying health conditions. 
            Signs of concern include:
          </p>
          <ul className="list-disc list-inside">
            <li>Persistent itching</li>
            <li>Redness or hot spots</li>
            <li>Flaky or greasy skin</li>
            <li>Hair thinning or bald patches</li>
          </ul>
          <p>
            For more information on breed-specific health issues, see:{' '}
            <Link
              href="https://www.petuniapets.com/en/blog/border-collie-health-guide"
              className="text-blue-600 hover:underline"
            >
              Border Collie Health Guide
            </Link>
            .
          </p>
        </section>

        {/* Behavior Links */}
        <section id="behavior_links" className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">How Grooming Impacts Behavior</h2>
          <p>
            Grooming has a direct effect on behavior and stress levels. Matted coats, long nails, 
            or dirty ears can cause discomfort, which may appear as irritability, restlessness, 
            or reduced focus during training.
          </p>
          <p>
            To understand how grooming interacts with intelligence and sensitivity, visit:{' '}
            <Link
              href={`/${locale}/blog/why-are-border-collies-so-smart`}
              className="text-blue-600 hover:underline"
            >
              Why Are Border Collies So Smart?
            </Link>
            .
          </p>
        </section>

        {/* Exercise Links */}
        <section id="exercise_links" className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">How Exercise Supports Coat Health</h2>
          <p>
            Regular exercise improves circulation, reduces stress, and promotes a healthier coat and skin. 
            Active dogs often shed more evenly and maintain better coat condition.
          </p>
          <p>
            For a complete breakdown of daily physical and mental needs, see:{' '}
            <Link
              href={`/${locale}/blog/border-collie-exercise-requirements`}
              className="text-blue-600 hover:underline"
            >
              Border Collie Exercise Requirements
            </Link>
            .
          </p>
        </section>

        {/* Family Links */}
        <section id="family_links" className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Grooming Tips for Families</h2>
          <p>
            Border Collies can thrive in family households when grooming becomes part of the weekly routine. 
            Families should teach children to gently brush the dog, avoid pulling fur, and respect boundaries 
            while the dog is being bathed or dried.
          </p>
          <p>
            For a deeper look at breed suitability around children, see:{' '}
            <Link
              href={`/${locale}/blog/are-border-collies-good-family-dogs`}
              className="text-blue-600 hover:underline"
            >
              Are Border Collies Good Family Dogs?
            </Link>
            .
          </p>
        </section>

        {/* Health Signals */}
        <section id="health_links" className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">When Grooming Problems Signal Health Issues</h2>
          <p>
            Excessive shedding, recurring dandruff, persistent odor, or sudden coat dullness may indicate 
            underlying medical problems.
          </p>
          <p>
            If you notice any of these signs, refer to:{' '}
            <Link
              href="https://www.petuniapets.com/en/blog/border-collie-health-guide"
              className="text-blue-600 hover:underline"
            >
              Border Collie Health Guide
            </Link>
            .
          </p>
        </section>

        {/* Conclusion */}
        <section id="conclusion" className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Conclusion</h2>
          <p>
            Grooming is a vital part of caring for a Border Collie. Regular brushing, bathing, nail trims, 
            and skin checks ensure your dog stays healthy, comfortable, and confident. 
            With the right grooming routine, Border Collies maintain their beautiful coats and remain 
            active, happy companions for many years.
          </p>
        </section>

        {/* Sources */}
        <section id="sources" className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Sources</h2>
          <ul className="list-disc list-inside">
            <li>American Kennel Club (AKC) – Border Collie Coat & Care Guidelines</li>
            <li>Journal of Veterinary Dermatology – Canine Skin & Coat Health</li>
            <li>AVMA – Grooming & Preventive Health Standards</li>
          </ul>
        </section>

        <div className="mt-8">
          <Link 
            href={`/${locale}/blog`} 
            className="text-blue-600 hover:underline"
          >
            ← Back to Blog
          </Link>
        </div>

      </article>
    </>
  );
}
