'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function DogTiterTestingExplained() {
  const locale = useLocale();

  return (
    <>

      <article className="mx-auto max-w-3xl px-4 py-10">
        {/* Categories */}
        <nav aria-label="Categories" className="mb-6 flex flex-wrap gap-2">
          <span className="rounded-full border px-3 py-1 text-sm">Health</span>
          <span className="rounded-full border px-3 py-1 text-sm">Vaccines</span>
          <span className="rounded-full border px-3 py-1 text-sm">Diagnostics</span>
        </nav>

        <h1 className="mb-3 text-3xl font-bold">
          Dog Titer Testing Explained + Where to Get It (U.S. + UK Resources)
        </h1>

        <p className="mb-8 text-base text-gray-700">
          Titer testing is often mentioned in conversations about vaccines, natural immunity, and boarding requirements.
          But confusion is common: What exactly is a titer? Can it replace vaccines? How do boarding facilities in the
          U.S. and UK view it? This guide answers those questions in depth, clarifies when titer testing is useful, and
          provides practical resources on where owners can access reliable tests today.
        </p>

        {/* Anchor nav */}
        <nav aria-label="On this page" className="mb-8 rounded-xl border p-4">
          <p className="mb-2 font-semibold">On this page</p>
          <ul className="list-inside list-disc space-y-1">
            <li><a href="#tldr" className="underline">TL;DR</a></li>
            <li><a href="#what" className="underline">What Is a Titer Test?</a></li>
            <li><a href="#when" className="underline">When Does Titer Testing Matter?</a></li>
            <li><a href="#accuracy" className="underline">Accuracy &amp; Limitations</a></li>
            <li><a href="#boarding" className="underline">Boarding &amp; Daycare Acceptance</a></li>
            <li><a href="#us-resources" className="underline">Where to Get Titer Testing (U.S.)</a></li>
            <li><a href="#uk-resources" className="underline">Where to Get Titer Testing (UK)</a></li>
            <li><a href="#cost" className="underline">Cost Expectations</a></li>
            <li><a href="#vet" className="underline">How to Talk to Your Veterinarian</a></li>
            <li><a href="#faq" className="underline">FAQ</a></li>
            <li><a href="#sources" className="underline">Sources &amp; Notes</a></li>
          </ul>
        </nav>

        {/* TL;DR */}
        <section id="tldr" className="mb-10">
          <h2 className="mb-3 text-2xl font-semibold">TL;DR</h2>
          <div className="rounded-lg border p-4">
            <ul className="list-inside list-disc space-y-2">
              <li>Titer tests measure antibodies in blood to check if a dog has protective immunity.</li>
              <li>Most useful for core vaccines: Distemper, Parvovirus, and Adenovirus.</li>
              <li>Rabies titers are valid only for travel, not for local vaccine law exemptions.</li>
              <li>Accuracy is high for detecting strong immunity but less reliable for borderline levels.</li>
              <li>Boarding/daycare acceptance varies; most U.S. facilities still require vaccines, some UK businesses allow titers as proof.</li>
              <li>Typical costs: $70–150 USD in the U.S.; £60–100 in the UK.</li>
            </ul>
          </div>
        </section>

        {/* What */}
        <section id="what" className="mb-10">
          <h2 className="mb-3 text-2xl font-semibold">What Is a Titer Test?</h2>
          <p className="mb-4">
            A titer test is a blood test that measures the concentration of antibodies against specific pathogens.
            If the level is above a defined threshold, the dog is considered protected. Titer testing is most
            commonly applied to core vaccines:
          </p>
          <ul className="list-inside list-disc space-y-2">
            <li><strong>Canine Distemper Virus (CDV)</strong></li>
            <li><strong>Canine Parvovirus (CPV)</strong></li>
            <li><strong>Canine Adenovirus (CAV)</strong></li>
          </ul>
          <p className="mt-4">
            Some clinics also offer titers for Rabies, but in the U.S. and UK, rabies titers are recognized only
            for <strong>international travel compliance</strong> (such as EU entry or Hawaii import) and do not
            substitute for rabies vaccination under domestic law.
          </p>
        </section>

        {/* When */}
        <section id="when" className="mb-10">
          <h2 className="mb-3 text-2xl font-semibold">When Does Titer Testing Matter?</h2>
          <p className="mb-4">
            Titer testing can be useful in specific scenarios:
          </p>
          <ul className="list-inside list-disc space-y-2">
            <li>Owners seeking to <strong>avoid unnecessary boosters</strong> while ensuring protection.</li>
            <li>Dogs with <strong>medical contraindications</strong> to vaccination (autoimmune disease, reactions).</li>
            <li>Travel requirements, especially for <strong>rabies-free regions</strong> like Hawaii or the UK.</li>
            <li>Adopting from shelters/rescues to confirm <strong>immunity status</strong> before re-vaccination.</li>
          </ul>
        </section>

        {/* Accuracy */}
        <section id="accuracy" className="mb-10">
          <h2 className="mb-3 text-2xl font-semibold">Accuracy &amp; Limitations</h2>
          <p className="mb-4">
            Titers are a reliable indicator of protection when antibody levels are high. However:
          </p>
          <ul className="list-inside list-disc space-y-2">
            <li>A “negative” or “low” result doesn’t always mean no protection &mdash; cellular immunity plays a role too.</li>
            <li>Not all labs use the same thresholds; results must be interpreted by a veterinarian.</li>
            <li>Titer results may not be accepted as equivalent to vaccination by facilities, schools, or travel authorities.</li>
          </ul>
        </section>

        {/* Boarding */}
        <section id="boarding" className="mb-10">
          <h2 className="mb-3 text-2xl font-semibold">Boarding &amp; Daycare Acceptance</h2>
          <p className="mb-4">
            In the U.S., most facilities require proof of current vaccines, regardless of titer results. A minority
            of holistic or boutique daycares may accept titers as proof of protection. In the UK, titers are more
            commonly recognized by kennels, but acceptance is still facility-dependent. Always confirm policies
            before booking.
          </p>
        </section>

        {/* U.S. Resources */}
        <section id="us-resources" className="mb-10">
          <h2 className="mb-3 text-2xl font-semibold">Where to Get Titer Testing (U.S.)</h2>
          <ul className="list-inside list-disc space-y-2">
            <li><strong>Primary Care Veterinarians:</strong> Most can draw blood and send it to reference labs.</li>
            <li><strong>Specialized Labs:</strong> IDEXX, Antech, Kansas State Veterinary Diagnostic Lab.</li>
            <li><strong>Mobile Clinics:</strong> Some vaccination clinics offer in-house titer kits with rapid results.</li>
          </ul>
          <p className="mt-4">
            Ask whether results include interpretation for boarding/daycare documentation; some labs provide
            standardized reports.
          </p>
        </section>

        {/* UK Resources */}
        <section id="uk-resources" className="mb-10">
          <h2 className="mb-3 text-2xl font-semibold">Where to Get Titer Testing (UK)</h2>
          <ul className="list-inside list-disc space-y-2">
            <li><strong>First Opinion Vets:</strong> Most practices can order VacciCheck or Lab tests.</li>
            <li><strong>University Veterinary Hospitals:</strong> London, Edinburgh, and Bristol frequently offer testing.</li>
            <li><strong>National Pet Health Providers:</strong> Some chains (e.g., Medivet, CVS Group) offer titer testing.</li>
          </ul>
          <p className="mt-4">
            UK boarding kennels increasingly accept titers for Distemper/Parvo/Adenovirus. Always bring documentation
            and confirm acceptance in advance.
          </p>
        </section>

        {/* Cost */}
        <section id="cost" className="mb-10">
          <h2 className="mb-3 text-2xl font-semibold">Cost Expectations</h2>
          <p className="mb-4">
            Prices vary by clinic and region:
          </p>
          <ul className="list-inside list-disc space-y-2">
            <li>U.S.: $70–150 USD for a 3-in-1 titer panel.</li>
            <li>UK: £60–100 for VacciCheck or equivalent lab panels.</li>
          </ul>
          <p className="mt-4">
            Travel rabies titers for international requirements are more expensive: $200–400 USD or £150–300,
            depending on the lab and courier fees.
          </p>
        </section>

        {/* Vet communication */}
        <section id="vet" className="mb-10">
          <h2 className="mb-3 text-2xl font-semibold">How to Talk to Your Veterinarian</h2>
          <p className="mb-4">
            Veterinarians are partners in interpreting titer results. When asking about testing:
          </p>
          <ul className="list-inside list-disc space-y-2">
            <li>Explain your goal (boarding acceptance, minimizing unnecessary boosters, travel paperwork).</li>
            <li>Ask whether results will be provided in a format facilities recognize.</li>
            <li>Discuss what to do if results are borderline or negative.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-10">
          <h2 className="mb-3 text-2xl font-semibold">FAQ</h2>
          <details className="mb-3 rounded-lg border p-4">
            <summary className="cursor-pointer font-semibold">Can titer testing replace vaccines?</summary>
            <p className="mt-2">Not legally. For Distemper/Parvo, titers are good evidence of immunity. For rabies, titers are valid only for travel, not for domestic legal requirements.</p>
          </details>
          <details className="mb-3 rounded-lg border p-4">
            <summary className="cursor-pointer font-semibold">Do boarding facilities accept titers?</summary>
            <p className="mt-2">Some UK facilities do. Most U.S. facilities still require vaccines, though boutique kennels may accept titers with vet letters.</p>
          </details>
          <details className="mb-3 rounded-lg border p-4">
            <summary className="cursor-pointer font-semibold">Are rapid in-clinic titer kits reliable?</summary>
            <p className="mt-2">Yes, for screening. But confirmatory lab tests may be needed for official documentation.</p>
          </details>
        </section>

        {/* Sources */}
        <section id="sources" className="mb-10">
          <h2 className="mb-3 text-2xl font-semibold">Sources &amp; Notes</h2>
          <ul className="list-inside list-disc space-y-2">
            <li>American Veterinary Medical Association (AVMA) vaccine guidelines.</li>
            <li>World Small Animal Veterinary Association (WSAVA) vaccination position papers.</li>
            <li>Royal College of Veterinary Surgeons (RCVS) and DEFRA guidance (UK).</li>
            <li>Kansas State Veterinary Diagnostic Lab: Rabies FAVN testing.</li>
          </ul>
          <p className="mt-4 text-sm text-gray-600">
            Educational content only; not a substitute for individualized veterinary care.
            Always consult your veterinarian before making vaccination or travel decisions.
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