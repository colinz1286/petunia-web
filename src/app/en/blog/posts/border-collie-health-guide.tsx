'use client';

import { useLocale } from 'next-intl';
import Head from 'next/head';
import Link from 'next/link';

export default function BorderCollieHealthGuide() {
  const locale = useLocale();

  return (
    <>
      <Head>
        <title>
          Border Collie Health Guide: Joint Care, Seizures, and Longevity | Petunia Blog
        </title>
        <meta
          name="description"
          content="Border Collies are active, intelligent dogs with unique health needs. Learn about joint care, seizures, and how to support longevity in this detailed breed health guide."
        />
        <meta name="robots" content="all" />
        <link
          rel="canonical"
          href={`https://www.petuniapets.com/${locale}/blog/border-collie-health-guide`}
        />
      </Head>

      <article className="prose lg:prose-xl mx-auto px-4 py-8">
        <p className="text-sm text-gray-500 mb-4">Written on October 1, 2025</p>

        <h1 className="text-3xl font-bold mb-4">
          Border Collie Health Guide: Joint Care, Seizures, and Longevity
        </h1>

        <div className="mb-6">
          <span className="inline-block bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full mr-2">
            Pet Owners
          </span>
          <span className="inline-block bg-red-100 text-red-800 text-xs px-3 py-1 rounded-full">
            Breed-Specific Guides
          </span>
        </div>

        <nav className="mb-6">
          <h2 className="font-semibold">Table of Contents</h2>
          <ul className="list-disc list-inside">
            <li><a href="#tldr">TL;DR</a></li>
            <li><a href="#overview">Border Collie Breed Overview</a></li>
            <li><a href="#joints">Joint Health and Care</a></li>
            <li><a href="#seizures">Seizures and Neurological Conditions</a></li>
            <li><a href="#other-issues">Other Common Health Concerns</a></li>
            <li><a href="#longevity">Supporting Longevity in Border Collies</a></li>
            <li><a href="#diet">Diet and Exercise Needs</a></li>
            <li><a href="#boarding">Boarding and Daycare Considerations</a></li>
            <li><a href="#conclusion">Conclusion</a></li>
            <li><a href="#sources">Sources</a></li>
          </ul>
        </nav>

        <section id="tldr" className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">TL;DR</h2>
          <p>
            Border Collies are highly active working dogs with strong genetics for herding and problem-solving. 
            Their health concerns often include joint problems like hip dysplasia, neurological conditions such as epilepsy, and age-related challenges. 
            With proactive veterinary care, tailored nutrition, and balanced exercise, many Border Collies live 12–15 years or more in excellent condition.
          </p>
        </section>

        <section id="overview" className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Border Collie Breed Overview</h2>
          <p>
            Known as one of the most intelligent dog breeds in the world, the Border Collie is famous for its herding ability, athleticism, and problem-solving skills. 
            Originally bred along the border between England and Scotland, these dogs thrive on mental and physical stimulation. 
            Their active lifestyle supports overall health but also exposes them to certain risks, especially joint stress and neurological disorders.
          </p>
        </section>

        <section id="joints" className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Joint Health and Care</h2>
          <p>
            Border Collies are agile and athletic, but their active lives put significant stress on their joints. 
            The most common joint-related conditions include:
          </p>
          <ul className="list-disc list-inside">
            <li><strong>Hip Dysplasia:</strong> Abnormal development of the hip joint leading to arthritis and pain.</li>
            <li><strong>Elbow Dysplasia:</strong> Malformation of the elbow joint causing lameness.</li>
            <li><strong>Arthritis:</strong> Degenerative joint disease common in older Border Collies after years of activity.</li>
          </ul>
          <p>
            Preventive strategies include feeding large-breed puppy food during growth, maintaining a lean weight, and providing supplements like glucosamine, chondroitin, and omega-3 fatty acids. 
            Low-impact exercises, such as swimming and controlled running, keep joints strong without unnecessary wear and tear.
          </p>
        </section>

        <section id="seizures" className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Seizures and Neurological Conditions</h2>
          <p>
            Border Collies are predisposed to certain neurological issues, particularly epilepsy. 
            Canine epilepsy is a seizure disorder that can range from mild episodes to severe, frequent seizures. 
            While exact causes vary, genetics play a strong role in this breed.
          </p>
          <p>
            Symptoms of seizures include:
          </p>
          <ul className="list-disc list-inside">
            <li>Sudden collapse or loss of coordination</li>
            <li>Stiffening or uncontrolled muscle movements</li>
            <li>Drooling or foaming at the mouth</li>
            <li>Temporary disorientation afterward</li>
          </ul>
          <p>
            While seizures are frightening, many dogs with epilepsy live normal lives with proper management. 
            Treatment typically includes anti-seizure medications, lifestyle adjustments, and regular veterinary monitoring.
          </p>
        </section>

        <section id="other-issues" className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Other Common Health Concerns</h2>
          <ul className="list-disc list-inside">
            <li><strong>Eye Disorders:</strong> Collie Eye Anomaly (CEA) and progressive retinal atrophy can cause vision problems.</li>
            <li><strong>Deafness:</strong> Some Border Collies carry genetic deafness, particularly those with merle coloring.</li>
            <li><strong>Osteochondritis Dissecans (OCD):</strong> Joint cartilage disease that affects young, fast-growing dogs.</li>
            <li><strong>Hypothyroidism:</strong> Low thyroid hormone levels can affect energy, coat, and weight regulation.</li>
          </ul>
          <p>
            Regular screenings and responsible breeding help reduce the prevalence of these conditions in the breed.
          </p>
        </section>

        <section id="longevity" className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Supporting Longevity in Border Collies</h2>
          <p>
            With proper care, Border Collies often live 12–15 years, with some reaching beyond 16. 
            To maximize their lifespan:
          </p>
          <ul className="list-disc list-inside">
            <li>Keep them lean to reduce joint stress</li>
            <li>Provide daily mental and physical exercise</li>
            <li>Schedule annual vet checkups, increasing frequency as they age</li>
            <li>Screen for hip dysplasia and epilepsy in young dogs</li>
            <li>Maintain a clean dental routine to prevent systemic infections</li>
          </ul>
          <p>
            Early intervention and preventive care make a significant difference in longevity.
          </p>
        </section>

        <section id="diet" className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Diet and Exercise Needs</h2>
          <p>
            Border Collies are high-energy dogs that require high-quality nutrition to fuel their activity. 
            Owners should focus on diets with lean protein, joint-supporting nutrients, and sufficient calories for active dogs. 
            Exercise should balance physical work with mental stimulation:
          </p>
          <ul className="list-disc list-inside">
            <li>Daily walks and off-leash running in safe areas</li>
            <li>Agility, flyball, or herding trials to challenge their intelligence</li>
            <li>Puzzle feeders and obedience training for mental engagement</li>
          </ul>
          <p>
            Overexercising young puppies, however, can worsen joint issues. Controlled activity is essential until full skeletal maturity around 18–24 months.
          </p>
        </section>

        <section id="boarding" className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Boarding and Daycare Considerations</h2>
          <p>
            Border Collies do well in active daycare environments but require outlets for both energy and intelligence. 
            Facilities should provide structured play, training, or enrichment games. 
            Owners should inform staff about any joint concerns or seizure history, so accommodations can be made.
          </p>
        </section>

        <section id="conclusion" className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Conclusion</h2>
          <p>
            Border Collies are brilliant, athletic companions with unique health considerations. 
            Joint issues and seizures are among their most common problems, but with proactive care, these dogs live long, fulfilling lives. 
            Responsible ownership—focused on diet, exercise, veterinary care, and mental stimulation—ensures Border Collies thrive as both working dogs and beloved family members.
          </p>
        </section>

        <section id="sources" className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Sources</h2>
          <ul className="list-disc list-inside">
            <li>American Kennel Club (AKC) – Border Collie Breed Profile</li>
            <li>American Veterinary Medical Association (AVMA) – Joint Health Guidelines</li>
            <li>Journal of Veterinary Internal Medicine – Studies on Canine Epilepsy and Longevity</li>
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
