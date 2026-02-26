'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function RoverDogSitterInvestigationSanFrancisco2025() {
  const locale = useLocale();

  const title =
    'San Francisco Police Investigate Allegations Against a Rover Dog Sitter: What We Know, What We Don&rsquo;t, and How to Hire Pet Care Safely';
  const date = 'December 29, 2025';
  const categories = ['owner', 'boarding', 'sitter'] as const;

  const categoryLabels: Record<string, string> = {
    owner: 'Pet Owners',
    boarding: 'Boarding',
    daycare: 'Daycare',
    rescue: 'Rescues',
    veterinary: 'Veterinary Clinics',
    sitter: 'Pet Sitters',
    walker: 'Dog Walkers',
    breeder: 'Breeders',
    breed_specific_guides: 'Breed Specific Guides',
  };

  return (
    <>

      <main className="max-w-3xl mx-auto px-4 py-10 text-[#2c4a30]">
        {/* Meta */}
        <p className="text-sm text-gray-500 mb-2">Posted on {date}</p>
        <h1 className="text-3xl font-bold mb-4">{title}</h1>

        {/* Category pills */}
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

        {/* Local anchor nav */}
        <nav className="mb-8 text-sm">
          <ul className="flex flex-wrap gap-3">
            <li>
              <a href="#tl-dr" className="underline hover:opacity-80">
                TL;DR
              </a>
            </li>
            <li>
              <a href="#what-happened" className="underline hover:opacity-80">
                What Happened
              </a>
            </li>
            <li>
              <a href="#what-we-know" className="underline hover:opacity-80">
                What We Know (So Far)
              </a>
            </li>
            <li>
              <a href="#what-we-dont-know" className="underline hover:opacity-80">
                What We Don&rsquo;t Know Yet
              </a>
            </li>
            <li>
              <a href="#rover-safety-features" className="underline hover:opacity-80">
                Rover Safety Features (How They&rsquo;re Described)
              </a>
            </li>
            <li>
              <a href="#why-this-matters" className="underline hover:opacity-80">
                Why This Matters
              </a>
            </li>
            <li>
              <a href="#owner-checklist" className="underline hover:opacity-80">
                Owner Checklist
              </a>
            </li>
            <li>
              <a href="#business-takeaways" className="underline hover:opacity-80">
                Business Takeaways
              </a>
            </li>
            <li>
              <a href="#faq" className="underline hover:opacity-80">
                FAQ
              </a>
            </li>
            <li>
              <a href="#sources" className="underline hover:opacity-80">
                📚 Sources
              </a>
            </li>
          </ul>
        </nav>

        {/* TL;DR */}
        <section id="tl-dr" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Short Answer (TL;DR)</h2>
          <p className="mb-4">
            ABC7/KGO reported on December 28, 2025 that San Francisco police opened an investigation involving a pet
            sitter booked through Rover after multiple owners reported alleged abuse and neglect and at least two dogs
            reportedly died following stays connected to the sitter. The case has drawn national attention because it
            highlights a core reality of third-party pet care: even with reviews and platform safeguards, the owner is
            still responsible for vetting care, building redundancy, and preparing for emergencies.
          </p>

          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Practical note:</strong> This article is a factual summary of reporting and published safety guidance.
            Allegations are not findings. If you are choosing pet care today, the most protective approach is not panic
            &mdash; it is a structured screening process, clear written instructions, and an emergency plan you can activate
            quickly.
          </div>
        </section>

        {/* What happened */}
        <section id="what-happened" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">What Happened</h2>
          <p className="mb-4">
            On December 28, 2025, ABC7/KGO reported that a pet sitter booked through Rover was under police investigation
            in San Francisco after multiple pet owners described alleged abuse and neglect and shared accounts of severe
            distress and harm involving dogs that had been left in the sitter&rsquo;s care. The report describes owners
            experiencing an escalating pattern of alarming outcomes and then seeking accountability through law
            enforcement and the platform.
          </p>

          <p className="mb-4">
            Because this is an active investigation, reporting focuses on owner allegations and the fact that police are
            involved, rather than definitive conclusions about what occurred in each individual booking. Additional
            re-publications and segments reflecting the ABC7 report circulated widely, amplifying the story beyond the
            Bay Area.
          </p>
        </section>

        {/* What we know */}
        <section id="what-we-know" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">What We Know (So Far)</h2>
          <p className="mb-4">
            Based on the ABC7/KGO reporting and associated distribution, the key factual points currently available are:
          </p>

          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li>
              <strong>Police involvement:</strong> San Francisco police opened an investigation connected to allegations
              involving a Rover-booked sitter.
            </li>
            <li>
              <strong>Multiple complainants:</strong> The coverage describes more than one owner coming forward with
              allegations of abuse or neglect in connection with the sitter.
            </li>
            <li>
              <strong>Reports of severe outcomes:</strong> The reporting includes owners describing extreme distress in
              their dogs and states that at least two dogs reportedly died in connection with the sitter&rsquo;s care.
            </li>
            <li>
              <strong>Public attention and platform risk questions:</strong> The case spread quickly and triggered broad
              discussion about how owners should evaluate third-party pet care providers and what platform safeguards do
              and do not guarantee.
            </li>
          </ul>

          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Important framing:</strong> An investigation is not the same as an adjudicated conclusion. Reporting
            reflects allegations, owner accounts, and the fact of police scrutiny at the time of publication.
          </div>
        </section>

        {/* What we don't know */}
        <section id="what-we-dont-know" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">What We Don&rsquo;t Know Yet (or What May Change)</h2>
          <p className="mb-4">
            In fast-moving cases, it is easy for online discussion to outpace verified information. At the time of the
            reporting cited above, several important details are not fully established in public documentation:
          </p>

          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>The investigation timeline and scope:</strong> when police received reports, what incidents are
              included, and whether multiple agencies are involved.
            </li>
            <li>
              <strong>Formal findings:</strong> whether investigators establish a clear causal chain for each reported
              injury or death, and what evidence supports any allegations.
            </li>
            <li>
              <strong>Outcome:</strong> whether charges are filed, and if so, what charges and under which statutes.
            </li>
            <li>
              <strong>Platform and policy specifics:</strong> what was reported to the platform, what actions occurred
              internally, and what documentation is available.
            </li>
          </ul>

          <p className="text-sm text-gray-600 mt-4">
            This uncertainty is not a reason to ignore the story &mdash; it is a reason to separate verified reporting from
            viral speculation and to focus on practical risk reduction steps you control.
          </p>
        </section>

        {/* Rover safety features */}
        <section id="rover-safety-features" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Rover Safety Features (How They&rsquo;re Described by Rover)</h2>
          <p className="mb-4">
            Rover publicly describes a set of safety-related features and programs intended to support safer bookings.
            These are not a substitute for owner vetting, but they are relevant context for how the platform presents
            safeguards.
          </p>

          <h3 className="text-xl font-semibold mb-2">Background checks</h3>
          <p className="mb-4">
            Rover states that sitters and dog walkers on the platform pass a third-party background check (Rover refers to
            this as an enhanced criminal background check) as part of joining.
          </p>

          <h3 className="text-xl font-semibold mb-2">RoverProtect and the Rover Guarantee</h3>
          <p className="mb-4">
            Rover describes RoverProtect as a safety commitment that includes access to 24/7 support and the Rover
            Guarantee for eligible bookings. Rover also provides published information about how claims and Trust &amp;
            Safety contact pathways work.
          </p>

          <h3 className="text-xl font-semibold mb-2">Trust signals on profiles</h3>
          <p className="mb-4">
            Rover encourages owners to use multiple trust signals (reviews, repeat clients, background check status, and
            profile details) rather than relying on one factor.
          </p>

          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Reality check:</strong> A platform can reduce risk, but it cannot remove risk. Safety features help
            most when owners pair them with a structured interview, a trial booking, written instructions, and an emergency plan.
          </div>
        </section>

        {/* Why this matters */}
        <section id="why-this-matters" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Why This Matters Beyond One Case</h2>
          <p className="mb-4">
            Third-party pet care has grown quickly because it is convenient and often less expensive than traditional
            boarding. But the operational model varies: some sitters are true professionals with insurance, training, and
            well-defined processes; others are casual providers with limited systems. The gap between those two realities
            is where owners get hurt.
          </p>

          <p className="mb-4">
            The most important takeaway is not platform-specific. It is structural: when you hand off care, you are
            delegating thousands of micro-decisions (water access, supervision, separation, temperature, enrichment,
            stress management, emergency triage). If the caregiver has poor systems, small failures compound fast.
          </p>

          <p className="mb-4">
            If you are comparing in-home sitting versus a structured boarding or daycare facility and want a clear way to
            assess facility safety standards, see:{' '}
            <Link
              href={`/${locale}/blog/how-to-choose-a-good-dog-boarding-or-daycare-facility`}
              className="underline font-medium hover:opacity-80"
            >
              How to Choose a Good Dog Boarding or Daycare Facility
            </Link>
            .
          </p>
        </section>

        {/* Owner checklist */}
        <section id="owner-checklist" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Owner Checklist: How to Vet a Pet Sitter (Practical and Specific)</h2>
          <p className="mb-4">
            If this story makes you anxious, you are not overreacting &mdash; you are calibrating. Here is a high-signal,
            real-world checklist built from reputable pet-care guidance and what consistently reduces risk in practice.
          </p>

          <h3 className="text-xl font-semibold mb-2">Step 1: Do a structured interview (not just messaging)</h3>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li>
              Ask for <strong>references</strong> and actually contact them (at least two).
            </li>
            <li>
              Ask about <strong>supervision</strong>: how many pets at once, separation practices, crate use, and what
              happens during errands or overnight.
            </li>
            <li>
              Ask about <strong>emergency decisions</strong>: what triggers a vet visit, which clinic they use, and how
              they handle rapid decline.
            </li>
          </ul>

          <h3 className="text-xl font-semibold mb-2">Step 2: Run a trial booking before a long trip</h3>
          <p className="mb-4">
            A short trial lets you observe how your dog returns (hydration, appetite, stress signals, behavior changes)
            before you commit to a longer stay. The AKC explicitly recommends testing a sitter if you have time.
          </p>

          <h3 className="text-xl font-semibold mb-2">Step 3: Provide written instructions and remove ambiguity</h3>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li>
              Write feeding, medication, and exercise instructions in one place, with emergency contacts and vet details.
            </li>
            <li>
              Include what <strong>not</strong> to do (no dog parks, no off-leash, no new foods, no unsupervised yard time, etc.).
            </li>
            <li>
              Confirm how often you will receive updates and what those updates include (photos, water intake, bathroom schedule).
            </li>
          </ul>

          <h3 className="text-xl font-semibold mb-2">Step 4: Build a real emergency plan</h3>
          <div className="rounded-lg border border-[#d9cfc2] p-4 bg-[#f6efe4]">
            <ol className="list-decimal pl-6 space-y-2">
              <li>
                Choose an <strong>emergency decision-maker</strong> who can authorize care if you are unreachable.
              </li>
              <li>
                Leave a payment method and written authorization for emergency treatment if your clinic supports it.
              </li>
              <li>
                Provide the sitter with your dog&rsquo;s microchip details and your vet&rsquo;s contact information.
              </li>
              <li>
                Clarify exactly when the sitter must call you versus when they must go to the vet immediately.
              </li>
            </ol>
          </div>

          <p className="mb-4 mt-4">
            If you want a calmer, health-first way to keep your dog resilient day-to-day (which helps with travel stress too),
            see:{' '}
            <Link
              href={`/${locale}/blog/dog-exercise-for-longevity-daily-routines`}
              className="underline font-medium hover:opacity-80"
            >
              Exercise and Longevity: The Exact Daily Routines That Help Dogs Live Longer, According to Research
            </Link>
            .
          </p>
        </section>

        {/* Business takeaways */}
        <section id="business-takeaways" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Business Takeaways: What Pet Care Providers Should Learn From This</h2>
          <p className="mb-4">
            Even if you run an excellent operation, stories like this can reduce consumer trust across the entire pet
            care market. The path forward is not defensive messaging &mdash; it is visible, verifiable professionalism.
          </p>

          <h3 className="text-xl font-semibold mb-2">High-trust practices that reduce fear</h3>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li>
              <strong>Documented processes:</strong> intake checklist, medication log, emergency decision flow, and clear
              maximum capacity rules.
            </li>
            <li>
              <strong>Transparency by default:</strong> tour policies, clear separation plans, and proactive updates.
            </li>
            <li>
              <strong>Redundancy:</strong> backup caregiver coverage for illness and a clear escalation process for emergencies.
            </li>
            <li>
              <strong>Insurance and training:</strong> be prepared to explain coverage and what training you have completed.
            </li>
          </ul>

          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Bottom line:</strong> Owners don&rsquo;t just want kindness &mdash; they want systems. Systems are what prevent
            neglect when life gets chaotic.
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">Frequently Asked Questions</h2>

          <p className="mb-4">
            <strong>Is this case proven?</strong>
            <br />
            No. Public reporting describes allegations and confirms police involvement, which means the matter is being
            examined, not that facts have been legally established in a final way.
          </p>

          <p className="mb-4">
            <strong>Does a background check or good reviews guarantee safety?</strong>
            <br />
            No. They can reduce risk, but they are not guarantees. Platforms describe safety programs (background checks,
            support, and protections), yet owners should still do an interview, request references, and run a trial booking.
          </p>

          <p className="mb-4">
            <strong>What is the single most protective thing I can do before hiring any sitter?</strong>
            <br />
            Do a structured interview, verify references, and run a short trial booking before a long trip.
          </p>

          <p>
            <strong>What should I prepare in case something goes wrong while I&rsquo;m away?</strong>
            <br />
            Leave emergency contacts, veterinary details, and a clear authorization plan so someone can make decisions
            quickly if you cannot be reached.
          </p>
        </section>

        {/* Sources */}
        <section id="sources" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">📚 Sources &amp; Official References (Selected)</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            <li>
              ABC7/KGO report (Dec 28, 2025):{' '}
              <a
                href="https://abc7news.com/post/dog-deaths-reports-abuse-prompt-san-francisco-police-investigation-pet-sitter-popular-rover-app/18326040/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://abc7news.com/post/dog-deaths-reports-abuse-prompt-san-francisco-police-investigation-pet-sitter-popular-rover-app/18326040/
              </a>
            </li>
            <li>
              Yahoo re-publication of the ABC7 reporting (Dec 28, 2025):{' '}
              <a
                href="https://www.yahoo.com/news/articles/2-dog-deaths-reports-abuse-185237065.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.yahoo.com/news/articles/2-dog-deaths-reports-abuse-185237065.html
              </a>
            </li>
            <li>
              Rover: Background checks overview:{' '}
              <a href="https://www.rover.com/background-checks/" target="_blank" rel="noopener noreferrer">
                https://www.rover.com/background-checks/
              </a>
            </li>
            <li>
              Rover: RoverProtect overview:{' '}
              <a href="https://www.rover.com/rover-protect/" target="_blank" rel="noopener noreferrer">
                https://www.rover.com/rover-protect/
              </a>
            </li>
            <li>
              Rover: Rover Guarantee information:{' '}
              <a href="https://www.rover.com/rover-guarantee/" target="_blank" rel="noopener noreferrer">
                https://www.rover.com/rover-guarantee/
              </a>
            </li>
            <li>
              AVMA: Planning for who is in charge of your pet&rsquo;s care while you are away:{' '}
              <a
                href="https://www.avma.org/resources-tools/pet-owners/emergencycare/whos-charge-your-animals-care-while-youre-away"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.avma.org/resources-tools/pet-owners/emergencycare/whos-charge-your-animals-care-while-youre-away
              </a>
            </li>
            <li>
              Humane World for Animals: How to choose and prepare for a pet sitter:{' '}
              <a href="https://www.humaneworld.org/en/resources/how-choose-and-prepare-pet-sitter" target="_blank" rel="noopener noreferrer">
                https://www.humaneworld.org/en/resources/how-choose-and-prepare-pet-sitter
              </a>
            </li>
            <li>
              AKC: How to select a pet sitter:{' '}
              <a href="https://www.akc.org/expert-advice/travel/how-to-select-a-pet-sitter/" target="_blank" rel="noopener noreferrer">
                https://www.akc.org/expert-advice/travel/how-to-select-a-pet-sitter/
              </a>
            </li>
          </ul>
        </section>

        <Link href={`/${locale}/blog`} className="underline text-[#2c4a30] font-medium hover:opacity-80">
          ← Back to Blog
        </Link>
      </main>
    </>
  );
}
