'use client';

import Head from 'next/head';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function CanineRetinalDiseasePennVet() {
  const locale = useLocale();

  return (
    <>
      <Head>
        <title>New Penn Vet Clinic Advances Treatment for Canine Retinal Disease</title>
        <meta
          name="description"
          content="Penn Vet has opened a new specialty clinic for canine retinal disease, including progressive retinal atrophy (PRA). Learn what retinal diseases are, why they matter, current treatment challenges, and new diagnostic innovations in the U.S. and UK."
        />
        <meta name="robots" content="all" />
        <link
          rel="canonical"
          href={`https://www.petuniapets.com/${locale}/blog/new-penn-vet-clinic-advances-treatment-for-canine-retinal-disease`}
        />
      </Head>

      <article className="mx-auto max-w-3xl px-4 py-10">
        {/* Category pills */}
        <nav aria-label="Categories" className="mb-6 flex flex-wrap gap-2">
          <span className="rounded-full border px-3 py-1 text-sm">Health</span>
          <span className="rounded-full border px-3 py-1 text-sm">Ophthalmology</span>
          <span className="rounded-full border px-3 py-1 text-sm">Chronic Disease</span>
        </nav>

        <h1 className="mb-3 text-3xl font-bold">
          New Penn Vet Clinic Advances Treatment for Canine Retinal Disease
        </h1>

        <p className="mb-8 text-base text-gray-700">
          In September 2025, Penn Vet announced the launch of a specialty clinic dedicated to diagnosing and managing
          hereditary and acquired retinal disease in dogs. Conditions such as progressive retinal atrophy (PRA) and
          sudden acquired retinal degeneration syndrome (SARDS) rob dogs of their vision, often silently until owners
          notice profound changes. This new resource highlights both the challenges and innovations in veterinary
          ophthalmology, while offering hope to families who previously faced limited options.
        </p>

        {/* Anchor nav */}
        <nav aria-label="On this page" className="mb-8 rounded-xl border p-4">
          <p className="mb-2 font-semibold">On this page</p>
          <ul className="list-inside list-disc space-y-1">
            <li><a href="#tldr" className="underline">TL;DR</a></li>
            <li><a href="#what" className="underline">What Are Canine Retinal Diseases?</a></li>
            <li><a href="#pra" className="underline">Progressive Retinal Atrophy (PRA)</a></li>
            <li><a href="#sards" className="underline">Sudden Acquired Retinal Degeneration (SARDS)</a></li>
            <li><a href="#diagnostics" className="underline">Diagnostic Challenges &amp; Advances</a></li>
            <li><a href="#treatments" className="underline">Treatment Innovations</a></li>
            <li><a href="#resources" className="underline">Owner Resources in the U.S. and UK</a></li>
            <li><a href="#faq" className="underline">FAQ</a></li>
            <li><a href="#sources" className="underline">Sources &amp; Notes</a></li>
          </ul>
        </nav>

        {/* TL;DR */}
        <section id="tldr" className="mb-10">
          <h2 className="mb-3 text-2xl font-semibold">TL;DR</h2>
          <div className="rounded-lg border p-4">
            <ul className="list-inside list-disc space-y-2">
              <li>Retinal diseases are leading causes of canine vision loss worldwide.</li>
              <li>Penn Vet has opened a new clinic focusing on hereditary conditions like PRA and degenerative syndromes like SARDS.</li>
              <li>Diagnostics are improving with electroretinography, OCT imaging, and genetic panels.</li>
              <li>Treatments under study include gene therapy, stem-cell approaches, and advanced supportive care.</li>
              <li>Resources for owners exist at specialty clinics in the U.S. and UK, but access remains uneven.</li>
            </ul>
          </div>
        </section>

        {/* What */}
        <section id="what" className="mb-10">
          <h2 className="mb-3 text-2xl font-semibold">What Are Canine Retinal Diseases?</h2>
          <p className="mb-4">
            The retina is the light-sensitive tissue at the back of the eye. Damage to the retina interrupts the
            conversion of light into electrical signals that the brain interprets as vision. Retinal diseases in dogs
            can be inherited or acquired, progressive or sudden. Once retinal cells are lost, they rarely regenerate,
            making early detection and emerging therapies critical.
          </p>
        </section>

        {/* PRA */}
        <section id="pra" className="mb-10">
          <h2 className="mb-3 text-2xl font-semibold">Progressive Retinal Atrophy (PRA)</h2>
          <p className="mb-4">
            PRA is a group of inherited disorders affecting many breeds, from toy poodles to Labrador retrievers. The
            disease causes gradual degeneration of photoreceptor cells, leading to night blindness followed by complete
            vision loss. Onset can vary from early puppyhood to later adulthood. Genetic testing has identified dozens
            of mutations, allowing breeders and veterinarians to screen dogs proactively.
          </p>
        </section>

        {/* SARDS */}
        <section id="sards" className="mb-10">
          <h2 className="mb-3 text-2xl font-semibold">Sudden Acquired Retinal Degeneration (SARDS)</h2>
          <p className="mb-4">
            Unlike PRA, SARDS strikes suddenly. Dogs may go from apparently normal vision to complete blindness within
            days or weeks. The cause is poorly understood, though autoimmune and hormonal factors are suspected. There
            is no cure, and supportive care focuses on helping dogs adapt to blindness and ensuring quality of life.
          </p>
        </section>

        {/* Diagnostics */}
        <section id="diagnostics" className="mb-10">
          <h2 className="mb-3 text-2xl font-semibold">Diagnostic Challenges &amp; Advances</h2>
          <ul className="list-inside list-disc space-y-2">
            <li><strong>Electroretinography (ERG):</strong> Measures retinal electrical activity; gold standard for PRA and SARDS.</li>
            <li><strong>Optical Coherence Tomography (OCT):</strong> Provides detailed imaging of retinal layers.</li>
            <li><strong>Genetic panels:</strong> Identify carriers and affected dogs across dozens of breeds.</li>
            <li><strong>Behavioral observation:</strong> Night vision loss, bumping into objects, and reluctance to go out at dusk.</li>
          </ul>
        </section>

        {/* Treatments */}
        <section id="treatments" className="mb-10">
          <h2 className="mb-3 text-2xl font-semibold">Treatment Innovations</h2>
          <p className="mb-4">
            Historically, retinal degeneration was untreatable. That is changing:
          </p>
          <ul className="list-inside list-disc space-y-2">
            <li><strong>Gene therapy:</strong> Experimental trials aim to deliver corrected genes directly to retinal cells.</li>
            <li><strong>Stem-cell research:</strong> Early studies explore regenerating photoreceptor cells.</li>
            <li><strong>Neuroprotective drugs:</strong> Compounds to slow cell death are under investigation.</li>
            <li><strong>Supportive care:</strong> Nutritional supplements, environmental adaptations, and training dogs to rely on other senses.</li>
          </ul>
        </section>

        {/* Resources */}
        <section id="resources" className="mb-10">
          <h2 className="mb-3 text-2xl font-semibold">Owner Resources in the U.S. and UK</h2>
          <p className="mb-4">
            Owners now have access to more resources than ever before. In the U.S., Penn Vet’s new clinic joins other
            university veterinary hospitals such as UC Davis and Colorado State that provide advanced ophthalmology
            services. In the UK, referral centers like the Animal Health Trust’s legacy clinics and RVC offer specialty
            eye care and genetic counseling.
          </p>
          <p className="mb-4">
            Owners are encouraged to seek ophthalmology referrals early if vision changes are noted. While cures are
            rare, early management helps with adaptation, and emerging therapies may benefit dogs in the near future.
          </p>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-10">
          <h2 className="mb-3 text-2xl font-semibold">FAQ</h2>
          <details className="mb-3 rounded-lg border p-4">
            <summary className="cursor-pointer font-semibold">Can retinal disease in dogs be cured?</summary>
            <p className="mt-2">At present, most retinal diseases cannot be cured. Gene therapy and stem-cell approaches are under investigation, offering cautious optimism.</p>
          </details>
          <details className="mb-3 rounded-lg border p-4">
            <summary className="cursor-pointer font-semibold">How do I know if my dog is losing vision?</summary>
            <p className="mt-2">Early signs include bumping into objects in low light, hesitation on stairs, and reluctance to go outside at night. Veterinary ophthalmology exams confirm the diagnosis.</p>
          </details>
          <details className="mb-3 rounded-lg border p-4">
            <summary className="cursor-pointer font-semibold">Is retinal disease painful?</summary>
            <p className="mt-2">Most degenerative retinal diseases are not painful. The main impact is loss of vision and associated lifestyle adjustments.</p>
          </details>
        </section>

        {/* Sources */}
        <section id="sources" className="mb-10">
          <h2 className="mb-3 text-2xl font-semibold">Sources &amp; Notes</h2>
          <ul className="list-inside list-disc space-y-2">
            <li>Penn Vet Today: announcement of new retinal disease clinic, September 2025.</li>
            <li>American College of Veterinary Ophthalmologists (ACVO) resources on PRA and SARDS.</li>
            <li>Royal College of Veterinary Surgeons (RCVS) guidance on hereditary eye disease.</li>
            <li>Recent research articles on gene therapy and retinal degeneration in companion animals.</li>
          </ul>
          <p className="mt-4 text-sm text-gray-600">
            Educational content only; not a substitute for individualized veterinary care. If your dog shows vision
            changes, consult your veterinarian promptly and request referral to an ophthalmology specialist.
          </p>
        </section>

        <div className="mt-10">
          <Link
            href={`/${locale}/blog`}
            className="inline-block rounded-xl border px-4 py-2 font-semibold underline"
          >
            &#8592; Back to Blog
          </Link>
        </div>
      </article>
    </>
  );
}