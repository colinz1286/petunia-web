'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function BravectoQuantumForDogs() {
  const locale = useLocale();

  return (
    <>

      <article className="mx-auto max-w-3xl px-4 py-10">
        {/* Category pills */}
        <nav aria-label="Categories" className="mb-6 flex flex-wrap gap-2">
          <span className="rounded-full border px-3 py-1 text-sm">Health</span>
          <span className="rounded-full border px-3 py-1 text-sm">Parasite Prevention</span>
          <span className="rounded-full border px-3 py-1 text-sm">Medications</span>
        </nav>

        <h1 className="mb-3 text-3xl font-bold">
          Bravecto Quantum for Dogs: Onset, Cost &amp; Safety vs. Alternatives
        </h1>

        <p className="mb-8 text-base text-gray-700">
          Bravecto Quantum is the newest member of the Bravecto family of flea and tick preventives. 
          Marketed for its rapid onset and extended duration, it has become a common choice for many 
          veterinarians and owners by 2025. But questions about how quickly it works, its cost in 
          different regions, its safety record, and whether alternatives might be more appropriate 
          remain front of mind for owners worldwide. This article reviews current data and helps 
          families make informed, veterinarian-aligned decisions.
        </p>

        {/* Anchor nav */}
        <nav aria-label="On this page" className="mb-8 rounded-xl border p-4">
          <p className="mb-2 font-semibold">On this page</p>
          <ul className="list-inside list-disc space-y-1">
            <li><a href="#tldr" className="underline">TL;DR</a></li>
            <li><a href="#overview" className="underline">What Is Bravecto Quantum?</a></li>
            <li><a href="#onset" className="underline">Onset of Action</a></li>
            <li><a href="#duration" className="underline">Duration of Protection</a></li>
            <li><a href="#cost" className="underline">Cost by Region</a></li>
            <li><a href="#safety" className="underline">Safety &amp; Side Effects</a></li>
            <li><a href="#alternatives" className="underline">Alternatives to Bravecto Quantum</a></li>
            <li><a href="#global" className="underline">Global Perspectives (US, UK, AU, CA, EU)</a></li>
            <li><a href="#owner" className="underline">Owner FAQs</a></li>
            <li><a href="#sources" className="underline">Sources &amp; Notes</a></li>
          </ul>
        </nav>

        {/* TL;DR */}
        <section id="tldr" className="mb-10">
          <h2 className="mb-3 text-2xl font-semibold">TL;DR</h2>
          <div className="rounded-lg border p-4">
            <ul className="list-inside list-disc space-y-2">
              <li>Bravecto Quantum begins killing fleas within hours; most dogs show protection within 4–8 hours.</li>
              <li>Duration of action is typically 3 months against fleas and ticks.</li>
              <li>Costs vary: ~$60–70 USD per dose in the U.S.; slightly higher in UK/AU; Canada and EU vary.</li>
              <li>Safety profile is favorable; side effects are rare and mild (vomiting, lethargy).</li>
              <li>Alternatives include other oral isoxazolines, topical preventives, and collars.</li>
            </ul>
          </div>
        </section>

        {/* Overview */}
        <section id="overview" className="mb-10">
          <h2 className="mb-3 text-2xl font-semibold">What Is Bravecto Quantum?</h2>
          <p className="mb-4">
            Bravecto Quantum is an oral flea and tick preventive for dogs containing the active ingredient 
            fluralaner, part of the isoxazoline class. Unlike older monthly preventives, Bravecto Quantum 
            is marketed for long-lasting protection, typically up to 12 weeks. Its appeal lies in fewer 
            doses per year, convenience for families, and broad veterinary adoption. By 2025, it is widely 
            licensed in the U.S., UK, Australia, Canada, and across much of the EU.
          </p>
        </section>

        {/* Onset */}
        <section id="onset" className="mb-10">
          <h2 className="mb-3 text-2xl font-semibold">Onset of Action</h2>
          <p className="mb-4">
            Studies confirm that Bravecto Quantum begins killing fleas within hours of administration. 
            Most dogs show measurable reductions in flea counts within 4–8 hours, and complete efficacy 
            is achieved within 24 hours. This rapid onset is important not just for comfort, but also 
            for breaking the flea life cycle in the home environment.
          </p>
        </section>

        {/* Duration */}
        <section id="duration" className="mb-10">
          <h2 className="mb-3 text-2xl font-semibold">Duration of Protection</h2>
          <p className="mb-4">
            Bravecto Quantum is designed to last up to 12 weeks against fleas and ticks. Some veterinary 
            trials report slightly shorter efficacy for certain tick species, particularly in high-burden 
            regions. Owners should work with veterinarians to confirm dosing schedules based on local risk. 
            The extended duration reduces the chance of missed doses compared to monthly products.
          </p>
        </section>

        {/* Cost */}
        <section id="cost" className="mb-10">
          <h2 className="mb-3 text-2xl font-semibold">Cost by Region</h2>
          <p className="mb-4">
            Costs vary significantly by region:
          </p>
          <ul className="list-inside list-disc space-y-2">
            <li><strong>United States:</strong> Average $60–70 per dose; vets may sell packs of 2–4 doses.</li>
            <li><strong>United Kingdom:</strong> ~£55–65 per dose; available through veterinary prescription only.</li>
            <li><strong>Australia:</strong> AU$95–120 per dose; pharmacies and clinics commonly carry it.</li>
            <li><strong>Canada:</strong> CAD$80–100; provincial pricing differences exist.</li>
            <li><strong>European Union:</strong> €60–75; varies by country and pharmacy distribution.</li>
          </ul>
          <p className="mt-4">
            While upfront costs are higher than monthly preventives, many families find the long duration 
            reduces overall expense and improves compliance.
          </p>
        </section>

        {/* Safety */}
        <section id="safety" className="mb-10">
          <h2 className="mb-3 text-2xl font-semibold">Safety &amp; Side Effects</h2>
          <p className="mb-4">
            Bravecto Quantum shares the safety profile of other isoxazoline preventives. Reported side 
            effects are rare and usually mild: vomiting, diarrhea, lethargy, or reduced appetite within 
            the first 24–48 hours. Serious neurologic reactions are extremely uncommon, though the FDA and 
            EMA advise caution in dogs with a history of seizures. Most veterinarians continue to consider 
            it safe and recommend it routinely, emphasizing that the benefits of parasite prevention far 
            outweigh the risks.
          </p>
        </section>

        {/* Alternatives */}
        <section id="alternatives" className="mb-10">
          <h2 className="mb-3 text-2xl font-semibold">Alternatives to Bravecto Quantum</h2>
          <ul className="list-inside list-disc space-y-2">
            <li><strong>Other oral isoxazolines:</strong> Simparica Trio, NexGard, Credelio (monthly).</li>
            <li><strong>Topical treatments:</strong> Advantage II, Frontline Plus (monthly applications).</li>
            <li><strong>Collars:</strong> Seresto collar (lasts up to 8 months).</li>
            <li><strong>Integrated plans:</strong> Combining oral preventives with environmental control (vacuuming, bedding hygiene).</li>
          </ul>
        </section>

        {/* Global */}
        <section id="global" className="mb-10">
          <h2 className="mb-3 text-2xl font-semibold">Global Perspectives (US, UK, AU, CA, EU)</h2>
          <p className="mb-4">
            <strong>United States:</strong> Widely prescribed; available through veterinarians and licensed online pharmacies. 
            High owner adoption due to convenience.
          </p>
          <p className="mb-4">
            <strong>United Kingdom:</strong> Prescription-only; widely used by vets for compliance benefits.
          </p>
          <p className="mb-4">
            <strong>Australia:</strong> Popular in urban centers; higher costs but valued for long duration.
          </p>
          <p className="mb-4">
            <strong>Canada:</strong> Similar to U.S. adoption; owners appreciate fewer doses per year.
          </p>
          <p className="mb-4">
            <strong>European Union:</strong> Variable adoption; Southern Europe sees higher use due to intense flea/tick seasons.
          </p>
        </section>

        {/* Owner advice */}
        <section id="owner" className="mb-10">
          <h2 className="mb-3 text-2xl font-semibold">Owner FAQs</h2>
          <details className="mb-3 rounded-lg border p-4">
            <summary className="cursor-pointer font-semibold">How quickly does Bravecto Quantum work?</summary>
            <p className="mt-2">Most dogs show flea kill within 4–8 hours; full effect by 24 hours.</p>
          </details>
          <details className="mb-3 rounded-lg border p-4">
            <summary className="cursor-pointer font-semibold">How long does it last?</summary>
            <p className="mt-2">Up to 12 weeks against fleas and ticks, though local parasite pressure may shorten duration slightly.</p>
          </details>
          <details className="mb-3 rounded-lg border p-4">
            <summary className="cursor-pointer font-semibold">Is it safe for all dogs?</summary>
            <p className="mt-2">Generally safe; caution in dogs with seizure history. Consult your vet if concerned.</p>
          </details>
          <details className="mb-3 rounded-lg border p-4">
            <summary className="cursor-pointer font-semibold">Are there cheaper options?</summary>
            <p className="mt-2">Yes. Monthly preventives may cost less per dose but require strict compliance.</p>
          </details>
        </section>

        {/* Sources */}
        <section id="sources" className="mb-10">
          <h2 className="mb-3 text-2xl font-semibold">Sources &amp; Notes</h2>
          <ul className="list-inside list-disc space-y-2">
            <li>American Veterinary Medical Association (AVMA) parasite prevention guidelines.</li>
            <li>European Medicines Agency (EMA) safety bulletins on isoxazolines.</li>
            <li>FDA product updates for Bravecto formulations.</li>
            <li>Australian Veterinary Association flea and tick prevention resources.</li>
          </ul>
          <p className="mt-4 text-sm text-gray-600">
            Educational content only; not a substitute for individualized veterinary care. 
            Always consult your veterinarian when selecting parasite prevention.
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
