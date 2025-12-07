'use client';

import { useLocale } from 'next-intl';
import Head from 'next/head';
import Link from 'next/link';

export default function DogVaccines() {
  const locale = useLocale();

  return (
    <>
      <Head>
        <title>
          Most Common Dog Vaccines: What They Protect Against and Why They Matter | Petunia Blog
        </title>
        <meta
          name="description"
          content="Learn about the most common dog vaccines, what they protect against, boarding and daycare requirements, and emerging vaccines that may benefit your pet."
        />
        <meta name="robots" content="all" />
        <link
          rel="canonical"
          href={`https://www.petuniapets.com/${locale}/blog/dog-vaccines-what-they-protect`}
        />
      </Head>

      <article className="prose lg:prose-xl mx-auto px-4 py-8">
        <p className="text-sm text-gray-500 mb-4">Written on September 26, 2025</p>

        <h1 className="text-3xl font-bold mb-4">
          Most Common Dog Vaccines: What They Protect Against and Why They Matter
        </h1>

        <div className="mb-6">
          <span className="inline-block bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full mr-2">
            Pet Owners
          </span>
          <span className="inline-block bg-purple-100 text-purple-800 text-xs px-3 py-1 rounded-full">
            Veterinary
          </span>
        </div>

        <nav className="mb-6">
          <h2 className="font-semibold">Table of Contents</h2>
          <ul className="list-disc list-inside">
            <li><a href="#tldr">TL;DR</a></li>
            <li><a href="#core">Core Vaccines for All Dogs</a></li>
            <li><a href="#noncore">Non-Core Vaccines Based on Lifestyle</a></li>
            <li><a href="#boarding">Boarding and Daycare Vaccine Requirements</a></li>
            <li><a href="#emerging">Emerging and Regional Vaccines</a></li>
            <li><a href="#schedule">Typical Puppy & Adult Vaccine Schedule</a></li>
            <li><a href="#safety">Vaccine Safety and Side Effects</a></li>
            <li><a href="#conclusion">Conclusion</a></li>
            <li><a href="#sources">Sources</a></li>
          </ul>
        </nav>

        <section id="tldr" className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">TL;DR</h2>
          <p>
            Vaccines protect dogs from deadly and contagious diseases. Core vaccines like rabies,
            distemper, parvovirus, and adenovirus are essential for every dog. Non-core vaccines 
            like Bordetella or canine influenza are recommended based on lifestyle, especially if 
            your dog attends daycare or boarding. Emerging vaccines (Lyme, leptospirosis) add 
            protection depending on region. Vaccination keeps both pets and communities safe.
          </p>
        </section>

        <section id="core" className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Core Vaccines for All Dogs</h2>
          <p>
            Core vaccines are those recommended for every single dog, regardless of age, lifestyle,
            or geography. They target life-threatening diseases with widespread risk and public health implications.
          </p>
          <ul className="list-disc list-inside">
            <li><strong>Rabies:</strong> Fatal viral disease transmissible to humans. Legally required in most regions.</li>
            <li><strong>Canine Distemper:</strong> Highly contagious virus causing fever, respiratory and neurological issues.</li>
            <li><strong>Parvovirus:</strong> Severe gastrointestinal infection, especially deadly in puppies.</li>
            <li><strong>Adenovirus (Hepatitis):</strong> Targets the liver and respiratory system.</li>
          </ul>
          <p>
            These vaccines form the foundation of responsible dog ownership. Rabies, in particular, 
            is mandated by law in most U.S. states and countries around the world.
          </p>
        </section>

        <section id="noncore" className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Non-Core Vaccines Based on Lifestyle</h2>
          <p>
            Non-core vaccines are optional depending on your dog’s activities, geography, and risk factors:
          </p>
          <ul className="list-disc list-inside">
            <li><strong>Bordetella (Kennel Cough):</strong> Strongly recommended for daycare, boarding, training classes, or dog parks.</li>
            <li><strong>Canine Influenza (CIV):</strong> Protects against respiratory flu strains; required by many facilities since outbreaks are common.</li>
            <li><strong>Leptospirosis:</strong> Bacterial disease spread through contaminated water or wildlife urine; zoonotic risk to humans.</li>
            <li><strong>Lyme Disease:</strong> Spread by ticks, especially in the Northeast and Midwest United States.</li>
            <li><strong>Coronavirus (not COVID-19):</strong> Canine enteric coronavirus, less common but sometimes included in combo vaccines.</li>
          </ul>
          <p>
            A veterinarian will recommend these based on lifestyle—urban apartment dogs may only 
            need Bordetella, while rural or hiking dogs may also need leptospirosis and Lyme protection.
          </p>
        </section>

        <section id="boarding" className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Boarding and Daycare Vaccine Requirements</h2>
          <p>
            Most boarding kennels, daycares, and grooming facilities require proof of up-to-date
            vaccines to protect all dogs on the premises. The most common requirements include:
          </p>
          <ul className="list-disc list-inside">
            <li>Rabies (mandatory, with valid certificate)</li>
            <li>DHPP combo (Distemper, Hepatitis, Parvovirus, Parainfluenza)</li>
            <li>Bordetella (within the past 6–12 months)</li>
            <li>Canine Influenza (increasingly required since regional outbreaks)</li>
          </ul>
          <p>
            Owners should confirm requirements well in advance, since some vaccines require 
            boosters or a waiting period after administration before becoming effective.
          </p>
        </section>

        <section id="emerging" className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Emerging and Regional Vaccines</h2>
          <p>
            Beyond core and common non-core vaccines, veterinarians are beginning to recommend 
            emerging vaccines in response to local conditions:
          </p>
          <ul className="list-disc list-inside">
            <li><strong>Rattlesnake Vaccine:</strong> Offered in some western U.S. states where snake bites are common.</li>
            <li><strong>Lepto Boosters:</strong> More widely given in urban areas due to rat populations.</li>
            <li><strong>Updated Influenza Strains:</strong> Facilities may shift requirements if new outbreaks occur.</li>
          </ul>
          <p>
            Staying informed about regional risks helps owners make the right preventive choices.
          </p>
        </section>

        <section id="schedule" className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Typical Puppy & Adult Vaccine Schedule</h2>
          <p>
            Puppies receive a series of vaccinations starting around 6–8 weeks of age, with boosters every 3–4 weeks until about 16 weeks. 
            Adults then receive booster shots on a 1–3 year cycle, depending on the vaccine and regional laws.
          </p>
          <ul className="list-disc list-inside">
            <li>6–8 weeks: First DHPP</li>
            <li>10–12 weeks: Second DHPP, Bordetella optional</li>
            <li>14–16 weeks: Final DHPP, Rabies</li>
            <li>Annually: Bordetella, Lepto, Influenza as needed</li>
            <li>Every 1–3 years: Rabies (depending on jurisdiction)</li>
          </ul>
          <p>
            Following a veterinarian&rsquo;s guidance ensures your dog is protected without over-vaccination.
          </p>
        </section>

        <section id="safety" className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Vaccine Safety and Side Effects</h2>
          <p>
            Vaccines are overwhelmingly safe, though mild side effects such as soreness at the injection site, lethargy, or mild fever can occur. 
            Serious reactions are rare but should be reported to a veterinarian immediately. 
            For dogs with chronic illness, vets may adjust schedules or recommend titer testing (bloodwork to measure immunity levels).
          </p>
        </section>

        <section id="conclusion" className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Conclusion</h2>
          <p>
            Vaccines save lives. By keeping your dog up to date on both core and recommended 
            non-core vaccines, you protect them, other dogs, and even humans. Whether you&rsquo;re 
            preparing for boarding, daycare, or just everyday adventures, vaccination is the most 
            effective preventive step you can take for long-term health and peace of mind.
          </p>
        </section>

        <section id="sources" className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Sources</h2>
          <ul className="list-disc list-inside">
            <li>American Veterinary Medical Association (AVMA) – Canine Vaccination Guidelines</li>
            <li>World Small Animal Veterinary Association (WSAVA) – Vaccination for Dogs and Cats</li>
            <li>Centers for Disease Control and Prevention (CDC) – Rabies and Zoonotic Diseases</li>
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
