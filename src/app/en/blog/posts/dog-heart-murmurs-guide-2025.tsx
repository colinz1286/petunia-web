'use client';

// SEO weakness notes: page is still new; likely limited backlinks; year-stamped title can weaken evergreen value; schema is only baseline BlogPosting
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
        
        {/* Expanded depth content start */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Home monitoring that makes the next veterinary conversation better</h2>
          <p className="mb-4">Condition-based articles are most useful when they help owners collect better evidence. Instead of relying on memory alone, track appetite, water intake, stool, sleep, exercise tolerance, visible discomfort, and what changed first. That turns a vague story into a usable clinical timeline and makes it easier to decide whether the pattern looks mild, progressive, recurrent, or urgent.</p>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li><strong>Use the same measures each day:</strong> when symptoms start, how long they last, and what preceded them.</li>
            <li><strong>Record context:</strong> food changes, stress, heat, exercise, grooming, medications, and environment can all matter.</li>
            <li><strong>Take photos or short videos when safe:</strong> visible swelling, gait change, discharge, breathing effort, or episodes are easier to evaluate with proof.</li>
            <li><strong>Compare with baseline:</strong> the key question is not just what looks abnormal, but how far the dog has moved from normal function.</li>
          </ul>
          <p className="mb-0">That level of tracking usually improves both diagnosis and the quality of the advice you get back.</p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">When supportive care stops being enough</h2>
          <ul className="list-disc pl-5 space-y-2 mb-0">
            <li>Escalate faster when symptoms recur, intensify, or start interfering with eating, hydration, mobility, breathing, or normal sleep.</li>
            <li>Move to same-day care when pain, collapse, bleeding, significant weakness, or neurologic change enters the picture.</li>
            <li>Ask for a clearer workup plan if you keep getting temporary symptom control without a convincing explanation for the pattern.</li>
            <li>Do not let a condition stay in the watch-and-wait category indefinitely if the baseline is drifting in the wrong direction.</li>
          </ul>
        </section>
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Related Reading Inside Petunia</h2>
          <ul className="list-disc pl-5 space-y-2 mb-0">
            <li><a href="https://www.petuniapets.com/en/blog/airline-pet-travel-2025-italy-in-cabin-large-dogs-what-it-means-us" className="underline hover:opacity-80">Airline Pet Travel Is Shifting (Italy Allows Big Dogs In-Cabin): What U.S. Flyers Should Know Now</a></li>
            <li><a href="https://www.petuniapets.com/en/blog/are-pet-insurance-premiums-worth-it-in-2025" className="underline hover:opacity-80">Are Pet Insurance Premiums Worth It in 2025? What to Know Before You Enroll</a></li>
            <li><a href="https://www.petuniapets.com/en/blog/vomiting-vs-regurgitation-in-dogs" className="underline hover:opacity-80">Vomiting vs Regurgitation in Dogs: How to Tell the Difference, What It Means, and When It’s an Emergency</a></li>
          </ul>
        </section>
        {/* Expanded depth content end */}
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
