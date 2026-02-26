'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function DogHeartMurmursGuide2025() {
  const locale = useLocale();

  const title = 'Heart Murmurs in Dogs: Detection, Testing & What It Means for Your Pet';
  const date = 'December 2, 2025';
  const categories = ['owner', 'vet', 'health'] as const;

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

        <p className="text-sm text-gray-500 mb-2">Posted on {date}</p>
        <h1 className="text-3xl font-bold mb-4">{title}</h1>

        <div className="flex flex-wrap gap-2 mb-6">
          {categories.map((c) => (
            <span
              key={c}
              className="text-xs bg-[#e4dbcb] text-[#2c4a30] px-3 py-1 rounded-full border border-[#d9cfc2]"
            >
              {categoryLabels[c] ?? c}
            </span>
          ))}
        </div>

        <nav className="mb-8 text-sm">
          <ul className="flex flex-wrap gap-3">
            <li><a href="#what-is-a-murmur" className="underline hover:opacity-80">What Is a Murmur?</a></li>
            <li><a href="#detection" className="underline hover:opacity-80">How Vets Detect Murmurs</a></li>
            <li><a href="#grading" className="underline hover:opacity-80">Grades of Murmurs</a></li>
            <li><a href="#testing" className="underline hover:opacity-80">Diagnostic Tests</a></li>
            <li><a href="#life" className="underline hover:opacity-80">Life Expectancy</a></li>
            <li><a href="#owner" className="underline hover:opacity-80">Steps for Owners</a></li>
            <li><a href="#breed" className="underline hover:opacity-80">Breed Risks</a></li>
            <li><a href="#sources" className="underline hover:opacity-80">Sources</a></li>
          </ul>
        </nav>

        {/* WHAT IS A MURMUR */}
        <section id="what-is-a-murmur" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">What Is a Heart Murmur?</h2>
          <p className="mb-3">
            A heart murmur is an unusual sound caused by turbulent blood flow inside the heart.
            It may occur when a valve leaks or narrows, or when a structural abnormality is present.
          </p>
          <p className="mb-3">
            Some murmurs are harmless, especially in young puppies. Others signal conditions like
            valve disease or congenital defects.
          </p>
        </section>

        {/* DETECTION */}
        <section id="detection" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">How Heart Murmurs Are Detected</h2>
          <p className="mb-3">
            Most murmurs are discovered during routine exams when your veterinarian listens
            to your dog’s heart using a stethoscope.
          </p>
          <p className="mb-3">
            If a murmur is heard, especially in adult dogs, further testing is often recommended
            to determine whether it is harmless or linked to heart disease.
          </p>
        </section>

        {/* GRADING */}
        <section id="grading" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Grades of Heart Murmurs</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Grade 1:</strong> Barely audible.</li>
            <li><strong>Grade 2:</strong> Soft but clearly heard.</li>
            <li><strong>Grade 3:</strong> Moderate loudness.</li>
            <li><strong>Grade 4:</strong> Loud murmur audible on both sides of the chest.</li>
            <li><strong>Grade 5:</strong> Very loud with a chest vibration.</li>
            <li><strong>Grade 6:</strong> Extremely loud with strong vibration.</li>
          </ul>

          <p className="mt-3">
            Loudness alone does not determine severity. A soft murmur may hide serious disease,
            while a loud one may reflect manageable valve leakage.
          </p>
        </section>

        {/* TESTS */}
        <section id="testing" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Diagnostic Tests Your Vet May Recommend</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Echocardiogram:</strong> Ultrasound of the heart; the gold standard.</li>
            <li><strong>Chest X-rays:</strong> Evaluates heart size and lung changes.</li>
            <li><strong>Electrocardiogram:</strong> Measures electrical rhythm.</li>
            <li><strong>Blood tests:</strong> Helps rule out non-cardiac causes and assess organ health.</li>
          </ul>
        </section>

        {/* LIFE EXPECTANCY */}
        <section id="life" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Life Expectancy Based on Severity</h2>
          <p className="mb-3">
            Many dogs with mild murmurs live completely normal lifespans. Dogs with moderate
            valve disease often live several years with medication and monitoring.
          </p>
          <p className="mb-3">
            Once a dog progresses to congestive heart failure, survival times vary widely but
            often range from months to a couple of years, depending on response to treatment.
          </p>
        </section>

        {/* WHAT OWNERS SHOULD DO */}
        <section id="owner" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">What Owners Should Do After a Murmur Is Found</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Ask your vet for the murmur grade and recommended tests.</li>
            <li>Consider a referral to a veterinary cardiologist.</li>
            <li>Monitor for coughing, exercise intolerance, or breathing changes.</li>
            <li>Follow all medication and diet recommendations precisely.</li>
            <li>Schedule regular follow-ups to track progression.</li>
          </ul>
        </section>

        {/* BREED RISKS */}
        <section id="breed" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Breed-Related Heart Considerations</h2>
          <p className="mb-3">
            Some breeds are genetically predisposed to valve disease or congenital conditions.
            Owners of these breeds should consider periodic heart screenings.
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li><Link href="https://www.petuniapets.com/en/blog/cavalier-king-charles-spaniel-health-risks">Cavalier King Charles Spaniel</Link></li>
            <li><Link href="https://www.petuniapets.com/en/blog/yorkshire-terrier-health-lifespan">Yorkshire Terrier</Link></li>
            <li><Link href="https://www.petuniapets.com/en/blog/what-health-issues-do-poodles-have">Poodle Health Issues</Link></li>
          </ul>
        </section>

        {/* SOURCES */}
        <section id="sources" className="mb-20">
          <h2 className="text-2xl font-semibold mb-3">Sources</h2>
          <ul className="list-disc pl-5 text-sm space-y-2">
            <li>VCA Hospitals – Heart Murmurs in Dogs</li>
            <li>Cornell Veterinary College – Heart Murmur Overview</li>
            <li>American College of Veterinary Internal Medicine</li>
            <li>VRCC Cardiology – Murmur Grading Explanation</li>
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
