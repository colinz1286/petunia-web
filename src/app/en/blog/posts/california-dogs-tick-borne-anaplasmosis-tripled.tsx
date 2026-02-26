'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function CaliforniaAnaplasmosisSpike() {
  const locale = useLocale();

  return (
    <>

      <article className="mx-auto max-w-3xl px-4 py-10">
        {/* Category pills */}
        <nav aria-label="Categories" className="mb-6 flex flex-wrap gap-2">
          <span className="rounded-full border px-3 py-1 text-sm">Health</span>
          <span className="rounded-full border px-3 py-1 text-sm">Parasite Prevention</span>
          <span className="rounded-full border px-3 py-1 text-sm">Boarding &amp; Daycare</span>
        </nav>

        <h1 className="mb-3 text-3xl font-bold">
          California Dogs &amp; Tick-Borne Bacteria: Why Anaplasmosis Has Tripled
        </h1>

        <p className="mb-8 text-base text-gray-700">
          A Los Angeles Times report found that the share of California dogs testing positive for the bacterium that
          causes anaplasmosis has nearly tripled in recent years. This is more than a veterinary footnote—it signals a
          shifting tick landscape, overlapping disease risks, and practical changes owners and facilities should make
          now to reduce exposure.
        </p>

        {/* Anchor nav (explicit items; no mapping) */}
        <nav aria-label="On this page" className="mb-8 rounded-xl border p-4">
          <p className="mb-2 font-semibold">On this page</p>
          <ul className="list-inside list-disc space-y-1">
            <li><a href="#tldr" className="underline">TL;DR</a></li>
            <li><a href="#background" className="underline">What Is Anaplasmosis &amp; Why the Spike?</a></li>
            <li><a href="#overlap" className="underline">Overlap: Lyme, Ehrlichia &amp; Co-Infections</a></li>
            <li><a href="#surveillance" className="underline">Tick Surveillance &amp; Trends</a></li>
            <li><a href="#prevention" className="underline">Prevention Strategies That Work</a></li>
            <li><a href="#facilities" className="underline">What Boarding/Daycare Facilities Must Do</a></li>
            <li><a href="#owners" className="underline">What Owners Should Know &amp; Ask</a></li>
            <li><a href="#faq" className="underline">FAQ</a></li>
            <li><a href="#sources" className="underline">Sources &amp; Notes</a></li>
          </ul>
        </nav>

        {/* TL;DR */}
        <section id="tldr" className="mb-10">
          <h2 className="mb-3 text-2xl font-semibold">TL;DR</h2>
          <div className="rounded-lg border p-4">
            <ul className="list-inside list-disc space-y-2">
              <li>California dogs show ~3× higher anaplasmosis exposure than a few years ago, per regional reporting.</li>
              <li>Ticks that transmit Anaplasma also transmit Lyme and other pathogens, so co-infections occur.</li>
              <li>Use year-round tick prevention, daily checks, and yard management; consistency matters more than brand.</li>
              <li>Facilities should add intake tick checks, treatment rotations for yards, isolation protocols, and staff training.</li>
            </ul>
          </div>
        </section>

        {/* Background */}
        <section id="background" className="mb-10">
          <h2 className="mb-3 text-2xl font-semibold">What Is Anaplasmosis &amp; Why the Spike?</h2>
          <p className="mb-4">
            Anaplasmosis is a bacterial disease caused by <em>Anaplasma</em> species (commonly <em>A. phagocytophilum</em>).
            In dogs, signs can include fever, lethargy, joint pain, and, in some cases, bleeding issues; many exposed
            dogs are subclinical and only identified on screening tests.
          </p>
          <p className="mb-4">
            Rising canine positives likely reflect multiple forces: warmer seasons that lengthen tick activity windows,
            urban expansion into wildlife corridors, increases in veterinary screening, and shifts in host populations
            like deer and small mammals. The net effect is simple—owners and operators should behave as if tick exposure
            risk is higher and more persistent than before.
          </p>
        </section>

        {/* Overlap */}
        <section id="overlap" className="mb-10">
          <h2 className="mb-3 text-2xl font-semibold">Overlap: Lyme, Ehrlichia &amp; Co-Infections</h2>
          <p className="mb-4">
            The same tick species that carry Anaplasma can also carry <em>Borrelia burgdorferi</em> (Lyme), <em>Ehrlichia</em>,
            <em> Babesia</em>, and others. Co-infections complicate diagnosis and can intensify clinical signs. If your dog
            tests positive for any one tick-borne pathogen, ask your veterinarian about a panel that checks for the others.
          </p>
        </section>

        {/* Surveillance */}
        <section id="surveillance" className="mb-10">
          <h2 className="mb-3 text-2xl font-semibold">Tick Surveillance &amp; Trends</h2>
          <p className="mb-4">
            National parasite councils and state agencies publish maps and annual forecasts that closely track real-world
            results. These tools help veterinarians and facilities anticipate seasonal spikes and regional hotspots so
            prevention policies can be tightened proactively rather than reactively.
          </p>
          <p className="mb-4">
            Practical takeaway: monitor your county&rsquo;s advisories, and adjust your operations calendar—more frequent
            yard treatment and tighter screening during peak months, plus reminders to clients about prevention compliance.
          </p>
        </section>

        {/* Prevention */}
        <section id="prevention" className="mb-10">
          <h2 className="mb-3 text-2xl font-semibold">Prevention Strategies That Work</h2>
          <ul className="list-inside list-disc space-y-2">
            <li><strong>Year-round preventives:</strong> pick a vet-recommended product and stay on schedule without gaps.</li>
            <li><strong>Daily tick checks:</strong> focus on ears, around eyes, between toes, groin, and tail base; remove with a tick tool.</li>
            <li><strong>Yard management:</strong> mow, remove leaf litter, trim brush, and create gravel buffers near fence lines.</li>
            <li><strong>Trail choices:</strong> avoid tall grass edges in peak months; keep dogs on-path where possible.</li>
            <li><strong>Bathing &amp; rinse-offs:</strong> quick rinse after high-risk hikes helps dislodge unattached ticks.</li>
            <li><strong>Screening:</strong> talk with your vet about periodic testing in high-risk regions or if signs appear.</li>
          </ul>
        </section>

        {/* Facilities */}
        <section id="facilities" className="mb-10">
          <h2 className="mb-3 text-2xl font-semibold">What Boarding/Daycare Facilities Must Do</h2>
          <ul className="list-inside list-disc space-y-2">
            <li><strong>Intake tick check:</strong> a fast visual sweep at drop-off; if a tick is attached, move to an isolation area and notify the owner.</li>
            <li><strong>Yard treatment plan:</strong> documented product rotation and schedule; keep treatment logs for inspections.</li>
            <li><strong>Rotation &amp; rest:</strong> cycle yards and allow dwell time after treatment per label directions.</li>
            <li><strong>Staff training:</strong> teach early clinical signs, safe removal, and cleaning of tools between uses.</li>
            <li><strong>Owner policy language:</strong> require year-round prevention and reserve the right to refuse entry for noncompliance.</li>
            <li><strong>Incident documentation:</strong> photo the tick, log date/time/yard, and inform the client the same day.</li>
          </ul>
        </section>

        {/* Owners */}
        <section id="owners" className="mb-10">
          <h2 className="mb-3 text-2xl font-semibold">What Owners Should Know &amp; Ask</h2>
          <ul className="list-inside list-disc space-y-2">
            <li>Confirm your dog&rsquo;s prevention is current and set calendar reminders for refills.</li>
            <li>Ask your facility about intake tick checks and yard treatment schedules.</li>
            <li>Carry a tick remover on hikes; learn safe, straight-out removal.</li>
            <li>Call your vet promptly if you notice fever, lethargy, joint pain, or unexplained bruising.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-10">
          <h2 className="mb-3 text-2xl font-semibold">FAQ</h2>

          <details className="mb-3 rounded-lg border p-4">
            <summary className="cursor-pointer font-semibold">Can my dog pass anaplasmosis directly to people?</summary>
            <p className="mt-2">
              No. Dogs are sentinels for tick presence. People get infected from tick bites, not from their dogs.
            </p>
          </details>

          <details className="mb-3 rounded-lg border p-4">
            <summary className="cursor-pointer font-semibold">Is anaplasmosis treatable?</summary>
            <p className="mt-2">
              Yes. Most cases respond well to doxycycline or related antibiotics. Early detection improves outcomes.
            </p>
          </details>

          <details className="mb-3 rounded-lg border p-4">
            <summary className="cursor-pointer font-semibold">Should I test every year?</summary>
            <p className="mt-2">
              In higher-risk regions, many veterinarians recommend annual screening panels that include Anaplasma, Lyme,
              and Ehrlichia. Your vet will tailor advice to your dog&rsquo;s exposure.
            </p>
          </details>
        </section>

        {/* Sources */}
        <section id="sources" className="mb-10">
          <h2 className="mb-3 text-2xl font-semibold">Sources &amp; Notes</h2>
          <ul className="list-inside list-disc space-y-2">
            <li>Regional reporting on increased canine anaplasmosis positivity in California (Los Angeles Times, 2025).</li>
            <li>Annual parasite forecasts and surveillance maps from national veterinary councils.</li>
            <li>Peer-reviewed reviews on canine tick-borne co-infections and diagnostics.</li>
          </ul>
          <p className="mt-4 text-sm text-gray-700">
            Educational content only; not a substitute for individualized veterinary care. If your dog shows signs of
            illness after tick exposure, consult your veterinarian promptly.
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