// File: src/app/[locale]/blog/posts/occupational-noise-exposure-dog-daycare-hearing-protection.tsx
'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function OccupationalNoiseExposureDogDaycare() {
  const locale = useLocale();

  const title =
    'Occupational Noise Exposure in Dog Boarding & Daycare: Why Hearing Protection Is Being Ignored (and How to Fix It)';
  const date = 'January 1, 2026';
  const categories = ['boarding', 'daycare', 'sitter', 'walker'] as const;

  const categoryLabels: Record<string, string> = {
    boarding: 'Boarding & Daycare',
    daycare: 'Boarding & Daycare',
    sitter: 'Pet Sitters',
    walker: 'Dog Walkers',
    rescue: 'Rescues',
    vet: 'Veterinary Clinics',
    owner: 'Pet Owners',
    trainer: 'Pet Trainers',
    groomer: 'Groomers',
  };

  return (
    <>

      <main className="max-w-3xl mx-auto px-4 py-10 text-[#2c4a30]">
        <p className="text-sm text-gray-500 mb-2">Posted on {date}</p>
        <h1 className="text-3xl font-bold mb-4">{title}</h1>

        {/* 🏷️ Category Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {categories.map((key) => (
            <span
              key={key}
              className="text-xs bg-[#e4dbcb] text-[#2c4a30] px-3 py-1 rounded-full border border-[#d9cfc2]"
            >
              {categoryLabels[key] ?? key}
            </span>
          ))}
        </div>

        {/* TLDR */}
        <section
          id="tldr"
          className="bg-[#f6efe4] border border-[#d9cfc2] rounded-xl p-4 mb-8"
        >
          <h2 className="text-xl font-semibold mb-2">TL;DR</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Dog boarding and daycare can expose staff to frequent, high-volume barking that may
              reach harmful levels, especially over long shifts.
            </li>
            <li>
              OSHA uses a <strong>90 dBA</strong> 8-hour permissible exposure limit (PEL) and requires a
              <strong> hearing conservation program</strong> at an <strong>85 dBA</strong> 8-hour average action level
              in general industry.
            </li>
            <li>
              NIOSH recommends a more protective limit of <strong>85 dBA</strong> over 8 hours using a
              <strong> 3 dB exchange rate</strong>, meaning allowable exposure time drops quickly as sound levels rise.
            </li>
            <li>
              The biggest problem is not awareness. It is normalization: many facilities treat noise as
              &ldquo;just part of the job&rdquo; and fail to offer basic hearing protection.
            </li>
            <li>
              The fix is realistic: measure noise, reduce it where you can, and make hearing protection
              easy, clean, and optional-but-normal (without shaming anyone).
            </li>
          </ul>
        </section>

        <p className="text-lg mb-4">
          In dog boarding and daycare, the sound environment is not a minor inconvenience. It is a
          workplace exposure that can quietly damage hearing over time. And in my experience, the vast
          majority of facilities do not treat it that way.
        </p>

        <p className="text-lg mb-6">
          This article is a practical, operator-first guide to occupational noise in pet care facilities:
          what the standards say, why so many workplaces ignore them, and how to implement a plan that
          actually works for real staff and real dogs.
        </p>

        <div className="border border-[#d9cfc2] rounded-xl p-4 mb-8">
          <p className="text-sm text-gray-700">
            <strong>Important note:</strong> This is educational content, not legal advice. OSHA rules can vary by
            industry details and by state plan enforcement. When in doubt, consult a qualified safety
            professional.
          </p>
        </div>

        {/* Why this matters */}
        <h2 className="text-2xl font-semibold mt-8 mb-3">
          Why noise is a real hazard in dog boarding and daycare
        </h2>
        <p className="mb-4">
          Noise-induced hearing loss is one of those workplace injuries that rarely happens all at once.
          It accumulates. That is exactly why it gets ignored. Staff get used to the environment. Owners
          get used to the environment. And after enough time, the baseline becomes &ldquo;normal.&rdquo;
        </p>
        <p className="mb-4">
          In dog daycare, noise is often not a single loud event. It is repeated barking spikes, sustained
          background noise, echo from hard surfaces, and high-energy environments where arousal can
          spread fast. Even if the average noise level feels tolerable, the pattern can still be risky over
          long shifts.
        </p>

        {/* OSHA basics */}
        <h2 className="text-2xl font-semibold mt-10 mb-3">
          The standards in plain English: OSHA and NIOSH
        </h2>

        <h3 className="text-xl font-semibold mt-6 mb-2">OSHA: what triggers a hearing conservation program</h3>
        <p className="mb-4">
          In general industry, OSHA&apos;s occupational noise standard is{' '}
          <a
            className="underline font-medium hover:opacity-80"
            href="https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.95"
            target="_blank"
            rel="noreferrer"
          >
            29 CFR 1910.95
          </a>
          . OSHA describes a framework where employers should reduce exposures using controls, and when
          workers are exposed at or above certain thresholds, a hearing conservation program is required.
        </p>

        <ul className="list-disc pl-5 space-y-2 mb-4">
          <li>
            <strong>Action level:</strong> At an <strong>85 dBA</strong> 8-hour time-weighted average (TWA), OSHA
            requires a hearing conservation program (monitoring, training, audiometric testing, and
            hearing protection availability).{' '}
            <a
              className="underline font-medium hover:opacity-80"
              href="https://www.osha.gov/noise"
              target="_blank"
              rel="noreferrer"
            >
              OSHA noise overview
            </a>
          </li>
          <li>
            <strong>PEL:</strong> OSHA&apos;s permissible exposure limit is <strong>90 dBA</strong> as an 8-hour TWA,
            using a <strong>5 dB exchange rate</strong> (roughly: every 5 dB increase cuts allowable time in half).
            The OSHA fact sheet on noise summarizes this clearly.{' '}
            <a
              className="underline font-medium hover:opacity-80"
              href="https://www.osha.gov/sites/default/files/publications/OSHAfactsheet-laboratory-safety-noise.pdf"
              target="_blank"
              rel="noreferrer"
            >
              OSHA noise fact sheet (PDF)
            </a>
          </li>
        </ul>

        <p className="mb-4">
          The key takeaway: you do not need to be a factory for this to matter. Dog boarding and daycare
          is a workplace. If noise exposure is high enough, the hearing conservation requirements are a
          real consideration.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-2">NIOSH: the more protective recommendation</h3>
        <p className="mb-4">
          NIOSH (part of the CDC) publishes guidance that is widely used in occupational health. NIOSH
          recommends limiting occupational noise exposure to <strong>85 dBA</strong> over 8 hours and uses a{' '}
          <strong>3 dB exchange rate</strong> (every 3 dB increase halves allowable time). This is more protective
          than OSHA&apos;s enforcement limit.{' '}
          <a
            className="underline font-medium hover:opacity-80"
            href="https://www.cdc.gov/niosh/noise/prevent/understand.html"
            target="_blank"
            rel="noreferrer"
          >
            NIOSH explanation of exposure and exchange rate
          </a>
        </p>

        <p className="mb-4">
          NIOSH is also explicit that workers exposed at or above the recommended limit are at risk of
          significant hearing loss over a working lifetime, even though individual susceptibility varies.{' '}
          <a
            className="underline font-medium hover:opacity-80"
            href="https://www.cdc.gov/niosh/noise/about/noise.html"
            target="_blank"
            rel="noreferrer"
          >
            NIOSH overview on noise-induced hearing loss
          </a>
        </p>

        {/* Why ignored */}
        <h2 className="text-2xl font-semibold mt-10 mb-3">
          Why hearing protection gets ignored in pet care facilities
        </h2>
        <p className="mb-4">
          If you asked most owners, they would say they care about employees. And they usually do. The
          issue is that hearing protection in dog daycare falls into a blind spot: it feels optional until
          it is too late.
        </p>

        <ul className="list-disc pl-5 space-y-2 mb-4">
          <li>
            <strong>Normalization:</strong> People adapt. What sounded extreme on day one feels routine by month
            three.
          </li>
          <li>
            <strong>Misunderstanding compliance:</strong> Many owners think OSHA only applies to certain industries
            or only applies if they have &ldquo;heavy machinery.&rdquo;
          </li>
          <li>
            <strong>Operational friction:</strong> PPE programs fail when they create hassle: where do you store it,
            how do you keep it sanitary, how do you make sure it is available on busy shifts?
          </li>
          <li>
            <strong>Culture concerns:</strong> Some managers worry earplugs will make staff &ldquo;less attentive&rdquo; or
            will look excessive to clients.
          </li>
          <li>
            <strong>Cost myths:</strong> People overestimate cost. Basic hearing protection is one of the cheapest
            safety upgrades you can make.
          </li>
        </ul>

        <p className="mb-4">
          The good news: these are solvable problems. But you have to treat hearing protection as a
          normal workplace resource, not a weird optional accessory that staff have to ask for.
        </p>

        {/* What a practical plan looks like */}
        <h2 className="text-2xl font-semibold mt-10 mb-3">
          A practical hearing conservation approach for dog daycare
        </h2>

        <h3 className="text-xl font-semibold mt-6 mb-2">Step 1: start with measurement (even simple measurement)</h3>
        <p className="mb-4">
          You do not need a perfect industrial hygiene study to make progress. The point is to stop
          guessing. Many facilities can take an initial baseline using a calibrated meter or validated
          approach, then decide whether deeper monitoring makes sense.
        </p>
        <p className="mb-4">
          OSHA&apos;s hearing conservation concept emphasizes monitoring and awareness when exposures may
          reach the action level.{' '}
          <a
            className="underline font-medium hover:opacity-80"
            href="https://www.ecfr.gov/current/title-29/subtitle-B/chapter-XVII/part-1910/subpart-G/section-1910.95"
            target="_blank"
            rel="noreferrer"
          >
            eCFR text of 29 CFR 1910.95
          </a>
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-2">Step 2: reduce noise where you can (controls first)</h3>
        <p className="mb-4">
          In an ideal world, you reduce noise at the source before relying on PPE. In dog daycare, that
          often means combining training, facility design, and workflow:
        </p>
        <ul className="list-disc pl-5 space-y-2 mb-4">
          <li>Limit over-arousal: smaller play groups, calmer grouping, and structured breaks.</li>
          <li>Reduce echo: add acoustic treatments where feasible (especially in high-bark areas).</li>
          <li>Rotate staff: reduce continuous time in the loudest rooms during peak noise windows.</li>
          <li>Quiet zones: give dogs and staff a lower-noise decompression area.</li>
        </ul>

        <p className="mb-4">
          Even modest reductions can matter because noise exposure compounds over time and allowable
          exposure time decreases rapidly as levels rise, especially under the more protective NIOSH
          framework.{' '}
          <a
            className="underline font-medium hover:opacity-80"
            href="https://www.cdc.gov/niosh/noise/prevent/understand.html"
            target="_blank"
            rel="noreferrer"
          >
            NIOSH: how exposure time changes with level
          </a>
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-2">Step 3: make hearing protection easy, clean, and normal</h3>
        <p className="mb-4">
          This is where most facilities fail. They do not need a complicated program to start. They need
          availability, variety, and hygiene.
        </p>

        <ul className="list-disc pl-5 space-y-2 mb-4">
          <li>
            Stock multiple options so employees can choose what they will actually wear (comfort drives
            compliance).
          </li>
          <li>
            Place PPE where it is used: near entrances to loud rooms, near kennels, near cleaning areas.
          </li>
          <li>
            Keep it sanitary: sealed disposables, labeled bins, and clear replacement rules.
          </li>
          <li>
            Train briefly and practically: how to insert earplugs correctly, when to use them, and how to
            avoid a false sense of protection.
          </li>
        </ul>

        <p className="mb-4">
          NIOSH guidance to employers explicitly recommends providing a variety of hearing protection
          options that reduce exposure and re-evaluating options as conditions change.{' '}
          <a
            className="underline font-medium hover:opacity-80"
            href="https://www.cdc.gov/niosh/noise/prevent/ppe.html"
            target="_blank"
            rel="noreferrer"
          >
            NIOSH: provide hearing protection
          </a>
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-2">Step 4: train without creating fear</h3>
        <p className="mb-4">
          Good safety culture is calm. You do not need dramatic messaging. The best framing is:
          &ldquo;This is a loud environment. Hearing damage is preventable. We make protection available and
          we want you to leave this job with your hearing intact.&rdquo;
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-2">Step 5: consider audiometric testing if exposures warrant it</h3>
        <p className="mb-4">
          Hearing conservation programs often involve annual hearing tests for exposed employees. Whether
          that level of program is appropriate depends on exposure levels and your facility setup, but it
          is part of OSHA&apos;s standard framework for workplaces at or above the action level.{' '}
          <a
            className="underline font-medium hover:opacity-80"
            href="https://www.osha.gov/noise"
            target="_blank"
            rel="noreferrer"
          >
            OSHA: hearing conservation program overview
          </a>
        </p>

        {/* FAQ */}
        <h2 className="text-2xl font-semibold mt-10 mb-3">FAQ</h2>

        <p className="mb-4">
          <strong>Will earplugs make employees unsafe because they cannot hear dogs or coworkers?</strong>
          <br />
          Used correctly, hearing protection can reduce harmful exposure while still allowing communication,
          especially if you choose options staff will tolerate and train proper use. A common failure mode
          is poor fit, which can reduce protection. Fit and training matter.
        </p>

        <p className="mb-4">
          <strong>Do we have to force employees to wear hearing protection?</strong>
          <br />
          Policies vary by workplace and exposure level. Many facilities start by offering protection,
          normalizing its use, and reducing noise through facility and operational controls. If exposures
          are high, a more formal program may be appropriate.
        </p>

        <p className="mb-4">
          <strong>What is the simplest first step that actually moves the needle?</strong>
          <br />
          Provide hearing protection at no cost, put it where it is used, and include a short training on
          proper insertion and hygiene. Then evaluate noise hot spots and reduce exposure time through
          workflow changes.
        </p>

        {/* Internal links */}
        <h2 className="text-2xl font-semibold mt-10 mb-3">Related reading</h2>
        <p className="mb-3">
          Footwear is another overlooked safety topic in facilities. If you missed it, here is our post on
          whether Crocs are safe for dog boarding and daycare staff:{' '}
          <Link
            href={`/${locale}/blog/are-crocs-safe-to-wear-at-dog-boarding-and-daycare-facilities`}
            className="underline font-medium hover:opacity-80"
          >
            Are Crocs Safe to Wear at Dog Boarding &amp; Daycare Facilities?
          </Link>
          .
        </p>

        {/* Sources */}
        <h2 className="text-2xl font-semibold mt-10 mb-3">Sources</h2>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>
            OSHA: 29 CFR 1910.95 Occupational Noise Exposure:{' '}
            <a
              className="underline font-medium hover:opacity-80"
              href="https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.95"
              target="_blank"
              rel="noreferrer"
            >
              osha.gov
            </a>
          </li>
          <li>
            OSHA: Occupational Noise Exposure overview and hearing conservation program summary:{' '}
            <a
              className="underline font-medium hover:opacity-80"
              href="https://www.osha.gov/noise"
              target="_blank"
              rel="noreferrer"
            >
              osha.gov
            </a>
          </li>
          <li>
            OSHA fact sheet (noise): action level, PEL, and exchange rate summary:{' '}
            <a
              className="underline font-medium hover:opacity-80"
              href="https://www.osha.gov/sites/default/files/publications/OSHAfactsheet-laboratory-safety-noise.pdf"
              target="_blank"
              rel="noreferrer"
            >
              PDF
            </a>
          </li>
          <li>
            NIOSH (CDC): Understand noise exposure and the 3 dB exchange rate:{' '}
            <a
              className="underline font-medium hover:opacity-80"
              href="https://www.cdc.gov/niosh/noise/prevent/understand.html"
              target="_blank"
              rel="noreferrer"
            >
              cdc.gov
            </a>
          </li>
          <li>
            NIOSH (CDC): Provide hearing protection guidance for employers:{' '}
            <a
              className="underline font-medium hover:opacity-80"
              href="https://www.cdc.gov/niosh/noise/prevent/ppe.html"
              target="_blank"
              rel="noreferrer"
            >
              cdc.gov
            </a>
          </li>
          <li>
            NIOSH (CDC): Noise-induced hearing loss overview and risk framing:{' '}
            <a
              className="underline font-medium hover:opacity-80"
              href="https://www.cdc.gov/niosh/noise/about/noise.html"
              target="_blank"
              rel="noreferrer"
            >
              cdc.gov
            </a>
          </li>
        </ul>

        {/* Call to action */}
        <div className="border border-[#d9cfc2] rounded-xl p-4 mb-8 bg-[#f6efe4]">
          <h2 className="text-xl font-semibold mb-2">Want help building a simple PPE plan?</h2>
          <p className="mb-0">
            If you run a dog boarding or daycare facility and want a practical, low-friction approach to
            hearing protection (including where to place PPE stations and how to train staff in under 10
            minutes), email us at{' '}
            <a
              href="mailto:admin@petuniapets.com"
              className="underline font-medium hover:opacity-80"
            >
              admin@petuniapets.com
            </a>
            .
          </p>
        </div>

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
