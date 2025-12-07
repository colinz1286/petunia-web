'use client';

import Head from 'next/head';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function LeptospirosisInDogsSymptomsPrevention2025() {
  const locale = useLocale();

  const title =
    'Leptospirosis in Dogs: Symptoms, Transmission, and Protection (2025 Update)';
  const date = 'October 24, 2025';
  const description =
    'Leptospirosis is a serious bacterial disease that affects both dogs and humans. Learn the early symptoms, how it spreads, treatment options, and the latest 2025 prevention recommendations.';
  const canonical = `https://www.petuniapets.com/${locale}/blog/leptospirosis-in-dogs-symptoms-prevention-2025`;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    datePublished: date,
    dateModified: date,
    author: { '@type': 'Organization', name: 'Petunia Pets' },
    publisher: { '@type': 'Organization', name: 'Petunia Pets' },
    description,
    image: 'https://cdn.petuniapets.com/blog/leptospirosis-in-dogs-symptoms-prevention-2025.jpg',
    mainEntityOfPage: canonical,
  };

  return (
    <>
      <Head>
        <title>{title} – Petunia Blog</title>
        <meta name="description" content={description} />
        <meta name="robots" content="all" />
        <link rel="canonical" href={canonical} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>

      <main className="max-w-3xl mx-auto px-4 py-10 text-[#2c4a30]">
        <p className="text-sm text-gray-500 mb-2">Written on {date}</p>
        <h1 className="text-3xl font-bold mb-4">{title}</h1>

        {/* Category Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          <span className="text-xs bg-[#e4dbcb] text-[#2c4a30] px-3 py-1 rounded-full border border-[#d9cfc2]">
            Pet Owners
          </span>
          <span className="text-xs bg-[#e4dbcb] text-[#2c4a30] px-3 py-1 rounded-full border border-[#d9cfc2]">
            Veterinary Health
          </span>
        </div>

        <section className="mb-10">
          <p className="mb-4">
            Leptospirosis is a bacterial disease that affects dogs, wildlife, livestock, and people.
            It spreads through contaminated water, soil, and the urine of infected animals. 
            Once considered rare, leptospirosis is now recognized by major veterinary associations
            as a widespread zoonotic risk — one that can cause severe illness or even death if left untreated.
          </p>

          <p className="mb-4">
            For an in-depth look at how vaccination guidelines have changed, read our companion article:{' '}
            <Link
              href="https://www.petuniapets.com/en/blog/leptospirosis-core-guideline-update-2024-2025"
              className="underline font-medium"
            >
              2024–2025 Vaccine Guideline Updates: Leptospirosis as “Core” & What That Means for Boarding and Travel
            </Link>.
          </p>
        </section>

        <section id="overview" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">What Is Leptospirosis?</h2>
          <p className="mb-3">
            Leptospirosis is caused by spiral-shaped bacteria of the genus <em>Leptospira</em>. 
            Dogs typically become infected by coming into contact with water, mud, or soil contaminated 
            with the urine of infected animals such as rats, raccoons, skunks, or livestock.
          </p>
          <p>
            The bacteria can enter through mucous membranes or small cuts in the skin and 
            spread rapidly through the bloodstream, damaging organs like the liver and kidneys.
            The <a href="https://www.cdc.gov/leptospirosis/index.html" target="_blank" rel="noopener noreferrer" className="underline">Centers for Disease Control and Prevention (CDC)</a> warns that it can 
            also spread from dogs to humans, making prevention essential for both pets and families.
          </p>
        </section>

        <section id="symptoms" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Early Symptoms in Dogs</h2>
          <p className="mb-3">
            Symptoms vary widely and can resemble other diseases. Mild cases may go unnoticed, 
            while severe infections can progress quickly and become life-threatening. 
            Common signs include:
          </p>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li>Fever and lethargy</li>
            <li>Vomiting and loss of appetite</li>
            <li>Increased thirst and frequent urination</li>
            <li>Jaundice (yellowing of gums or eyes)</li>
            <li>Muscle pain or reluctance to move</li>
            <li>Blood in urine or dark-colored urine</li>
          </ul>
          <p>
            Dogs with acute leptospirosis may develop kidney or liver failure. 
            Immediate veterinary attention is critical once symptoms appear.
          </p>
        </section>

        <section id="diagnosis" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Diagnosis</h2>
          <p className="mb-3">
            Veterinarians diagnose leptospirosis through blood and urine tests that detect 
            bacterial DNA (PCR testing) or antibodies. In some cases, imaging and blood chemistry 
            are used to assess organ damage. 
          </p>
          <p>
            According to the <a href="https://vcahospitals.com/know-your-pet/leptospirosis-in-dogs" target="_blank" rel="noopener noreferrer" className="underline">VCA Animal Hospitals</a>, 
            dogs with suspected lepto should be treated immediately, as waiting for test results 
            may worsen the prognosis.
          </p>
        </section>

        <section id="treatment" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Treatment and Recovery</h2>
          <p className="mb-3">
            Leptospirosis is treatable, especially if caught early. Most dogs recover fully with 
            aggressive therapy, though hospitalization is often required. 
          </p>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li><strong>Antibiotics:</strong> Doxycycline or penicillin-class drugs eliminate bacteria and prevent shedding.</li>
            <li><strong>IV fluids:</strong> Support kidney function and prevent dehydration.</li>
            <li><strong>Anti-nausea and pain medications:</strong> Help manage symptoms during recovery.</li>
            <li><strong>Isolation protocols:</strong> Prevent transmission to people or other pets.</li>
          </ul>
          <p>
            In severe cases, dialysis or plasma therapy may be needed to manage acute kidney or liver failure.
          </p>
        </section>

        <section id="prevention" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">How to Prevent Leptospirosis</h2>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li>Vaccinate annually — most vets now treat lepto as a core vaccine for all at-risk dogs.</li>
            <li>Avoid letting dogs drink from puddles, ponds, or standing water.</li>
            <li>Control rodents and wildlife around your home or boarding facility.</li>
            <li>Wash hands thoroughly after handling pets, especially in kennels or shelters.</li>
            <li>Use gloves when cleaning urine from infected animals.</li>
          </ul>
          <p>
            For a complete overview of current vaccine guidance, refer to our full article:{' '}
            <Link
              href="https://www.petuniapets.com/en/blog/leptospirosis-core-guideline-update-2024-2025"
              className="underline font-medium"
            >
              2024–2025 Vaccine Guideline Updates: Leptospirosis as “Core”
            </Link>.
          </p>
        </section>

        <section id="boarding" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Boarding, Daycare, and Public Safety</h2>
          <p className="mb-3">
            Because leptospirosis is zoonotic, many boarding facilities now require proof of 
            vaccination before check-in. The <a href="https://www.avma.org" target="_blank" rel="noopener noreferrer" className="underline">American Veterinary Medical Association (AVMA)</a> 
            and the <a href="https://wsava.org/global-guidelines/vaccination-guidelines/" target="_blank" rel="noopener noreferrer" className="underline">World Small Animal Veterinary Association (WSAVA)</a> 
            both classify lepto as regionally core. Staff in boarding and daycare settings should wear 
            gloves when cleaning, disinfect surfaces daily, and ensure dogs have access to clean water bowls.
          </p>
          <p>
            Pet owners traveling with dogs internationally should confirm destination vaccine 
            requirements in advance; some nations mandate lepto vaccination proof before boarding or entry.
          </p>
        </section>

        <section id="conclusion" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Conclusion</h2>
          <p className="mb-3">
            Leptospirosis remains a preventable yet potentially fatal disease. With early diagnosis, 
            modern treatment, and widespread vaccination, most dogs recover fully. 
            Protecting against lepto is not only an act of love for your dog — it’s an important step 
            in community public health.
          </p>
          <p>
            Always consult your veterinarian for personalized vaccination and prevention strategies 
            based on your region’s risk level.
          </p>
        </section>

        <section id="sources" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">📚 References & Further Reading</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            <li>
              Centers for Disease Control and Prevention (CDC). (2025).{' '}
              <i>Leptospirosis: Information for Pet Owners.</i>{' '}
              <a
                href="https://www.cdc.gov/leptospirosis/index.html"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                cdc.gov/leptospirosis
              </a>
            </li>
            <li>
              VCA Animal Hospitals. (2025).{' '}
              <i>Leptospirosis in Dogs.</i>{' '}
              <a
                href="https://vcahospitals.com/know-your-pet/leptospirosis-in-dogs"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                vcahospitals.com
              </a>
            </li>
            <li>
              American Veterinary Medical Association (AVMA). (2024).{' '}
              <i>Leptospirosis: Zoonotic Disease Prevention for Dog Owners.</i>{' '}
              <a
                href="https://www.avma.org/resources-tools/animal-health-and-welfare/leptospirosis"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                avma.org/leptospirosis
              </a>
            </li>
            <li>
              WSAVA. (2024).{' '}
              <i>Global Vaccination Guidelines.</i>{' '}
              <a
                href="https://wsava.org/global-guidelines/vaccination-guidelines/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                wsava.org/vaccination-guidelines
              </a>
            </li>
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
