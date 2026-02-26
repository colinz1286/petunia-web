'use client';

import { useLocale } from 'next-intl';
import Link from 'next/link';

export default function CavalierHealthRisks() {
  const locale = useLocale();

  return (
    <>

      <article className="prose lg:prose-xl mx-auto px-4 py-8">
        <p className="text-sm text-gray-500 mb-4">Written on September 28, 2025</p>

        <h1 className="text-3xl font-bold mb-4">
          Cavalier King Charles Spaniel Health Risks: Heart, Eyes, and Lifespan
        </h1>

        <div className="mb-6">
          <span className="inline-block bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full mr-2">
            Pet Owners
          </span>
          <span className="inline-block bg-red-100 text-red-800 text-xs px-3 py-1 rounded-full">
            Health
          </span>
        </div>

        <nav className="mb-6">
          <h2 className="font-semibold">Table of Contents</h2>
          <ul className="list-disc list-inside">
            <li><a href="#tldr">TL;DR</a></li>
            <li><a href="#overview">Breed Overview</a></li>
            <li><a href="#heart">Heart Disease in Cavaliers</a></li>
            <li><a href="#eyes">Eye Problems in Cavaliers</a></li>
            <li><a href="#neurological">Neurological Concerns</a></li>
            <li><a href="#lifespan">Typical Lifespan and Longevity Factors</a></li>
            <li><a href="#care">How Owners Can Support Cavalier Health</a></li>
            <li><a href="#boarding">Boarding and Daycare Considerations</a></li>
            <li><a href="#conclusion">Conclusion</a></li>
            <li><a href="#sources">Sources</a></li>
          </ul>
        </nav>

        <section id="tldr" className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">TL;DR</h2>
          <p>
            Cavalier King Charles Spaniels are beloved companion dogs, but they face serious 
            health challenges. The most common are <strong>mitral valve disease (heart)</strong>, 
            <strong>eye disorders</strong> like cataracts and retinal problems, and a lifespan 
            shorter than many small breeds due to genetic risks. With careful veterinary care, 
            heart screenings, and preventive lifestyle choices, many Cavaliers can live longer, 
            healthier lives.
          </p>
        </section>

        <section id="overview" className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Breed Overview</h2>
          <p>
            The Cavalier King Charles Spaniel is a toy breed known for its affectionate personality, 
            silky coat, and expressive eyes. Weighing 13–18 pounds, Cavaliers adapt well to both 
            apartments and family homes. Unfortunately, selective breeding practices have contributed 
            to a higher incidence of inherited health issues, especially heart and eye disease.
          </p>
        </section>

        <section id="heart" className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Heart Disease in Cavaliers</h2>
          <p>
            The number one health concern in this breed is <strong>mitral valve disease (MVD)</strong>. 
            This degenerative condition affects the heart’s mitral valve, leading to blood leaking 
            backward into the heart. Over time, it can progress to congestive heart failure.
          </p>
          <p>
            Studies suggest that up to 50% of Cavaliers develop a heart murmur by age five, and nearly 
            all are affected by age 10. Symptoms include:
          </p>
          <ul className="list-disc list-inside">
            <li>Persistent coughing, especially at night</li>
            <li>Exercise intolerance or fatigue</li>
            <li>Labored breathing or rapid breathing at rest</li>
            <li>Fainting spells or collapse</li>
          </ul>
          <p>
            Early detection through regular veterinary exams and cardiac ultrasounds is critical. 
            While MVD cannot be cured, medications can slow its progression and improve quality of life.
          </p>
        </section>

        <section id="eyes" className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Eye Problems in Cavaliers</h2>
          <p>
            Cavaliers are also prone to a range of eye conditions that can lead to discomfort or blindness:
          </p>
          <ul className="list-disc list-inside">
            <li><strong>Cataracts:</strong> Clouding of the lens, causing impaired vision</li>
            <li><strong>Progressive Retinal Atrophy (PRA):</strong> Degeneration of the retina leading to eventual blindness</li>
            <li><strong>Dry Eye (Keratoconjunctivitis Sicca):</strong> Reduced tear production, causing irritation and infection risk</li>
            <li><strong>Corneal ulcers:</strong> Painful sores from trauma or poor tear protection</li>
          </ul>
          <p>
            Regular veterinary ophthalmology exams can catch these problems early. Treatments range 
            from medicated drops for dry eye to surgery for cataracts. PRA, unfortunately, has no cure.
          </p>
        </section>

        <section id="neurological" className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Neurological Concerns</h2>
          <p>
            Another issue affecting Cavaliers is <strong>syringomyelia</strong>, a painful neurological 
            condition where fluid-filled cavities form in the spinal cord. Symptoms include scratching 
            at the neck, sensitivity to touch, weakness, and in severe cases, paralysis.
          </p>
          <p>
            MRI scans are needed for diagnosis, and treatment may involve medication or surgery. 
            While not every Cavalier develops syringomyelia, the breed has a higher prevalence 
            than most others due to skull structure.
          </p>
        </section>

        <section id="lifespan" className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Typical Lifespan and Longevity Factors</h2>
          <p>
            The average lifespan of a Cavalier King Charles Spaniel is around 9–12 years—shorter 
            than many small breeds. Heart disease is the leading cause of death, followed by cancer 
            and neurological disease.
          </p>
          <p>
            Factors that influence lifespan include:
          </p>
          <ul className="list-disc list-inside">
            <li>Genetics and breeding quality</li>
            <li>Regular veterinary care and screenings</li>
            <li>Healthy diet and weight management</li>
            <li>Exercise tailored to their size and condition</li>
          </ul>
          <p>
            Responsible breeding programs that screen for heart and eye conditions are critical 
            for improving the breed’s longevity.
          </p>
        </section>

        <section id="care" className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">How Owners Can Support Cavalier Health</h2>
          <p>
            While some conditions are genetic, owners can make choices that maximize their Cavalier’s 
            health and comfort:
          </p>
          <ul className="list-disc list-inside">
            <li>Schedule annual (or biannual for seniors) veterinary checkups</li>
            <li>Request heart auscultations and echocardiograms after age 5</li>
            <li>Maintain a healthy weight to reduce strain on the heart and joints</li>
            <li>Provide eye checks and keep eyes clean and moist</li>
            <li>Watch for subtle changes in behavior that may signal pain</li>
          </ul>
          <p>
            Cavaliers thrive in environments where their medical needs are taken seriously and 
            preventive care is prioritized.
          </p>
        </section>

        <section id="boarding" className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Boarding and Daycare Considerations</h2>
          <p>
            Cavalier King Charles Spaniels can enjoy daycare and boarding, but facilities should be 
            informed of their potential vulnerabilities. Tips include:
          </p>
          <ul className="list-disc list-inside">
            <li>Choose quieter playgroups with gentle companions</li>
            <li>Request extra monitoring for signs of coughing or fatigue</li>
            <li>Provide medication schedules in detail for staff</li>
            <li>Pack familiar bedding to reduce stress</li>
          </ul>
          <p>
            Older Cavaliers or those with advanced heart disease may be better suited to in-home 
            pet sitting rather than group daycare.
          </p>
        </section>

        <section id="conclusion" className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Conclusion</h2>
          <p>
            The Cavalier King Charles Spaniel is a loving and loyal breed, but one that requires 
            vigilant health care. By understanding the risks—particularly heart disease, eye 
            conditions, and neurological problems—owners can take proactive steps to extend 
            their dog’s quality of life. With regular vet visits, responsible breeding, and 
            thoughtful care, Cavaliers can enjoy many joyful years as cherished companions.
          </p>
        </section>

        <section id="sources" className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Sources</h2>
          <ul className="list-disc list-inside">
            <li>American Kennel Club (AKC) – Cavalier King Charles Spaniel Breed Information</li>
            <li>American Veterinary Medical Association (AVMA) – Canine Heart and Eye Health</li>
            <li>Royal Veterinary College – Cavalier Health Studies on MVD and Syringomyelia</li>
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
