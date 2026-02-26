'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function CfiaPetImportRulesCanada2025() {
  const locale = useLocale();

  const title = 'CFIA Pet Import Rules for Canada (2025): Dogs & Cats — What Owners Must Know';
  const date = 'October 21, 2025';
  return (
    <>

      <main className="max-w-3xl mx-auto px-4 py-10 text-[#2c4a30]">
        <p className="text-sm text-gray-500 mb-2">Posted on {date}</p>
        <h1 className="text-3xl font-bold mb-4">{title}</h1>

        {/* Category Pills */}
        <div className="flex flex-wrap gap-2 mb-6">
          <span className="text-xs bg-[#e4dbcb] text-[#2c4a30] px-3 py-1 rounded-full border border-[#d9cfc2]">
            Pet Owners
          </span>
        </div>

        <section className="mb-10">
          <p className="mb-4">
            The Canadian Food Inspection Agency (CFIA) updated its guidance in 2025 for dogs and cats
            entering Canada — whether you’re arriving from the United States, Europe, or overseas.
            These changes clarify documentation, rabies antibody standards, and microchip
            verification to ensure each animal entering the country is healthy and properly identified.
          </p>
          <p>
            Travelers and boarding facilities should review the complete requirements on the{' '}
            <a
              href="https://inspection.canada.ca/en/travelling-pets-food-plants/travelling-pets"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              official CFIA Travelling with Pets page
            </a>
            .
          </p>
        </section>

        <section id="updates" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">
            Key 2025 Updates from the Canadian Food Inspection Agency
          </h2>
          <p className="mb-3">
            The 2025 updates emphasize traceability and rabies control. Here’s what changed:
          </p>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li>
              <strong>Microchipping before vaccination:</strong> The CFIA recommends that the
              microchip be implanted before rabies vaccination. The chip number must appear on the
              vaccination certificate.
            </li>
            <li>
              <strong>Valid rabies certificate:</strong> Dogs and cats three months or older must
              have a rabies vaccination certificate signed by a licensed veterinarian, including
              vaccine manufacturer, lot number, and expiry date.
            </li>
            <li>
              <strong>Rabies antibody testing (for high-risk origins):</strong> Pets arriving from
              countries the CFIA or CDC considers high-risk for dog rabies must include a certified
              rabies antibody titer test (≥ 0.5 IU/mL) taken at least 30 days after vaccination and
              within 12 months of travel.
            </li>
            <li>
              <strong>Age & entry readiness:</strong> Puppies and kittens under 3 months may travel
              only under limited exemption, but are still subject to inspection and owner declaration.
            </li>
            <li>
              <strong>Commercial imports restricted:</strong> The CFIA will not issue import permits
              for commercial dogs from countries considered high-risk for dog rabies.
            </li>
          </ul>
        </section>

        <section id="prepare" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">How to Prepare Before Crossing the Border</h2>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li>Have your pet microchipped (ISO 11784/11785) before rabies vaccination.</li>
            <li>
              Keep printed and digital copies of the vaccination certificate with matching microchip
              number.
            </li>
            <li>
              Obtain a rabies antibody titer test if travelling from or through any high-risk
              country.
            </li>
            <li>
              Carry proof of age, microchip documentation, and an owner declaration for personal pets.
            </li>
            <li>
              Present all documents to the Canada Border Services Agency (CBSA) upon arrival for CFIA
              inspection.
            </li>
          </ul>
          <p className="text-sm">
            Official guidance: 
            <a
              href="https://www.cbsa-asfc.gc.ca/services/fpa-apa/animals-animaux-eng.html"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              CBSA – Bringing Animals to Canada
            </a>
            .
          </p>
        </section>

        <section id="for-us-travelers" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">For U.S. Travelers & Pet Businesses</h2>
          <p className="mb-3">
            Even though the U.S. and Canada are both classified as low-rabies countries, CFIA entry
            requirements still apply to every cross-border traveler with a pet. If your facility
            offers relocation or daycare services, make sure each dog or cat’s microchip, rabies
            record, and certificate dates align correctly.
          </p>
          <p>
            Rescue and adoption groups bringing animals into Canada must treat the process as
            commercial importation, requiring CFIA permits and advance approval. Pets lacking proof
            of vaccination or proper documentation may be denied entry or quarantined.
          </p>
        </section>

        <section id="faqs" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Common Questions</h2>
          <p className="mb-3">
            <strong>Is a microchip mandatory?</strong>  
            In most personal imports it is highly recommended; for dogs arriving from high-risk
            rabies countries it’s effectively mandatory for identification. Always confirm with CFIA.
          </p>
          <p className="mb-3">
            <strong>Do service animals follow the same rules?</strong>  
            Yes — documentation must still verify rabies vaccination, though working dogs may be
            processed faster if accompanied by their handler’s declaration.
          </p>
          <p>
            <strong>Do I need an import permit?</strong>  
            Only if the pet is being imported for commercial sale, adoption, or breeding. Pet owners
            entering with their personal pets generally do not require a permit.
          </p>
        </section>

        <section id="sources" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">📚 References & Official Links</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            <li>
              Canadian Food Inspection Agency (2025). 
              <i>Travelling with Pets – Dogs, Cats and Ferrets.</i>{' '}
              <a
                href="https://inspection.canada.ca/en/travelling-pets-food-plants/travelling-pets"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                inspection.canada.ca
              </a>
            </li>
            <li>
              CFIA (2025). 
              <i>Bringing animals to Canada: Importing and travelling with pets.</i>{' '}
              <a
                href="https://inspection.canada.ca/en/importing-food-plants-animals/pets"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                inspection.canada.ca
              </a>
            </li>
            <li>
              Canada Border Services Agency (2024). 
              <i>Bringing animals into Canada – Services and Information.</i>{' '}
              <a
                href="https://www.cbsa-asfc.gc.ca/services/fpa-apa/animals-animaux-eng.html"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                cbsa-asfc.gc.ca
              </a>
            </li>
            <li>
              Canadian Veterinary Medical Association (2025). 
              <i>CFIA Updates Guidelines for Dogs Travelling to the U.S.</i>{' '}
              <a
                href="https://www.canadianveterinarians.net/about-cvma/latest-news/cfia-updates-guidelines-for-dogs-travelling-to-the-u-s/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                canadianveterinarians.net
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
