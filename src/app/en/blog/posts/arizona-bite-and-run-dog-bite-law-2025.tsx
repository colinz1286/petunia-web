'use client';

import Head from 'next/head';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function ArizonaBiteAndRunDogBiteLaw2025() {
  const locale = useLocale();

  const title =
  'Arizona\'s "Bite and Run" Dog Bite Law (2025): What Owners Must Do, Penalties, and Why Other States May Follow';

  const date = 'December 23, 2025';
  const categories = ['owner'] as const;

  const categoryLabels: Record<string, string> = {
    owner: 'Pet Owners',
    boarding: 'Boarding',
    daycare: 'Daycare',
    rescue: 'Rescues',
    vet: 'Veterinary Clinics',
    sitter: 'Pet Sitters',
    walker: 'Dog Walkers',
    breeder: 'Breeders',
    breed_specific_guides: 'Breed Specific Guides',
  };

  const description =
    'A plain-English guide to Arizona&#39;s 2025 &#34;Bite and Run&#34; law: when owners must share contact info after a dog bite, penalties, exceptions, and how similar laws could spread.';

  return (
    <>
      <Head>
        <title>{title} – Petunia Blog</title>
        <meta name="description" content={description} />
        <meta name="robots" content="all" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
      </Head>

      <main className="max-w-3xl mx-auto px-4 py-10 text-[#2c4a30]">
        <p className="text-sm text-gray-500 mb-2">Posted on {date}</p>
        <h1 className="text-3xl font-bold mb-4">{title}</h1>

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

        <nav className="mb-8 text-sm">
          <ul className="flex flex-wrap gap-3">
            <li>
              <a href="#tldr" className="underline hover:opacity-80">
                TL;DR
              </a>
            </li>
            <li>
              <a href="#what-the-law-is" className="underline hover:opacity-80">
                What the Law Is
              </a>
            </li>
            <li>
              <a href="#what-changed" className="underline hover:opacity-80">
                What Changed in 2025
              </a>
            </li>
            <li>
              <a href="#when-it-applies" className="underline hover:opacity-80">
                When It Applies
              </a>
            </li>
            <li>
              <a href="#what-info-to-share" className="underline hover:opacity-80">
                What Info Must Be Shared
              </a>
            </li>
            <li>
              <a href="#penalties" className="underline hover:opacity-80">
                Penalties
              </a>
            </li>
            <li>
              <a href="#what-to-do-after-a-bite" className="underline hover:opacity-80">
                What to Do After a Bite
              </a>
            </li>
            <li>
              <a href="#other-states" className="underline hover:opacity-80">
                Could Other States Follow
              </a>
            </li>
            <li>
              <a href="#policy-trend" className="underline hover:opacity-80">
                The Broader Accountability Trend
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

        <section id="tldr" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Short Answer (TL;DR)</h2>
          <p className="mb-4">
            Arizona&#39;s new &ldquo;Bite and Run&rdquo; law (effective September 26, 2025) makes it a crime for a dog
            owner (or someone responsible for the dog) to refuse to provide the owner&#39;s contact information
            to a person who was bitten. The requirement is now written directly into A.R.S. &sect; 11-1025.
          </p>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>
              This law is about <strong>dog bites to people</strong>, not general scuffles between animals.
            </li>
            <li>
              The duty applies in public places and when the bite victim is lawfully on private property,
              including the dog owner&#39;s property.
            </li>
            <li>
              Refusing to provide information can be charged as a <strong>Class 2 misdemeanor</strong> under the
              enforcement framework described by local officials.
            </li>
          </ul>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Important:</strong> This article is educational and not legal advice. Laws change and local
            enforcement practices can vary. If you need legal guidance, speak with a qualified attorney in
            your state.
          </div>
        </section>

        <section id="what-the-law-is" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">What Arizona&#39;s &ldquo;Bite and Run&rdquo; Law Actually Is</h2>
          <p className="mb-4">
            The &ldquo;Bite and Run&rdquo; nickname refers to a new legal duty added to Arizona Revised Statutes
            &sect; 11-1025. The statute now says that a person who owns a dog (or is responsible for the care
            of a dog) that bites a person must provide the owner&#39;s contact information to the person who
            suffered the dog bite in specified situations.
          </p>

          <div className="rounded-lg border border-[#d9cfc2] p-4 bg-[#f6efe4] mb-4">
            <h3 className="text-xl font-semibold mb-2">The key point most headlines miss</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                The statutory text is focused on <strong>a dog biting a person</strong>, not injuries to another dog or
                another animal.
              </li>
              <li>
                Some coverage has described it more broadly, but the controlling source is the statute itself.
              </li>
            </ul>
          </div>

          <p className="mb-4">
            Arizona already had strict liability language in this same statute for damages caused when a dog
            bites a person. The new addition is about <strong>information exchange</strong>, aimed at preventing an
            owner from leaving a victim without a way to report the incident or pursue follow-up care.
          </p>
        </section>

        <section id="what-changed" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">What Changed in 2025</h2>
          <p className="mb-4">
            Local officials and Arizona news outlets explained that, before this update, bite incidents were
            required to be reported, but there was not a clear statewide requirement that owners exchange
            contact information directly with bite victims. SB 1241 amended the statute to add that
            requirement, and it took effect September 26, 2025.
          </p>

          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>
              The bill summary for SB 1241 describes creating a new requirement that individuals who own or
              are responsible for a dog that bites someone must provide contact information to the bite victim.
            </li>
            <li>
              Maricopa County Animal Care &amp; Control publicly described the goal as supporting bite victims
              and improving accountability, citing under-reporting concerns.
            </li>
          </ul>

          <p className="mb-4">
            If you run a pet-care business, this is part of a broader theme: laws increasingly expect clear,
            documented responsibility and communication after incidents. That idea also shows up in how
            licensing and consumer notice rules work for pet-care facilities in many places. If you want a
            practical overview of that topic, see{' '}
            <Link
              href={`/${locale}/blog/dog-daycare-and-boarding-laws-by-state-2025`}
              className="underline hover:opacity-80"
            >
              Dog Daycare &amp; Boarding Laws by State (2025 Owner&#39;s Guide)
            </Link>
            .
          </p>
        </section>

        <section id="when-it-applies" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">When the Information-Exchange Duty Applies</h2>
          <p className="mb-4">
            The statute specifies the duty arises when the dog bites a person who is in or on a public place,
            or lawfully in or on a private place, including the property of the dog&#39;s owner. In other words,
            it is not limited to sidewalk incidents; it can apply when the victim is lawfully on private
            property.
          </p>

          <div className="rounded-lg border border-[#d9cfc2] p-4 bg-[#f6efe4] mb-4">
            <h3 className="text-xl font-semibold mb-2">Examples (conceptual)</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                A bite occurs on a public sidewalk or in a park and the owner attempts to leave without sharing
                identifying information.
              </li>
              <li>
                A bite occurs on private property where the victim is lawfully present (for example, a guest,
                service provider, or someone permitted to be there).
              </li>
            </ul>
          </div>

          <p className="mb-4">
            This part of the law is designed to reduce the chance that a victim cannot identify the dog or
            owner for medical follow-up, rabies-related procedures, or reporting.
          </p>
        </section>

        <section id="what-info-to-share" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">What Information Must Be Shared</h2>
          <p className="mb-4">
            The statute requires providing the owner&#39;s contact information to the person who suffered the
            dog bite. Local government messaging summarizes this as exchanging contact information after a
            bite incident.
          </p>

          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>
              The statutory language uses &ldquo;owner&#39;s contact information.&rdquo;
            </li>
            <li>
              Public explanations from Maricopa County describe it as a requirement for owners to exchange
              contact information with bite victims.
            </li>
          </ul>

          <p className="mb-4">
            If a bite happens, exchanging information is only one part of doing the right thing. Documenting
            the incident and understanding health protocols also matters for both parties. For owners who use
            daycare or boarding, choosing facilities with clear incident handling policies is important. You
            can use this guide when evaluating a facility:{' '}
            <Link
              href={`/${locale}/blog/how-to-choose-a-good-dog-boarding-or-daycare-facility`}
              className="underline hover:opacity-80"
            >
              How to Choose a Good Dog Boarding or Daycare Facility
            </Link>
            .
          </p>
        </section>

        <section id="penalties" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Penalties for Refusing to Provide Information</h2>
          <p className="mb-4">
            Arizona statutes and county explanations describe the failure to comply as a Class 2 misdemeanor.
            Local reporting and Maricopa County messaging describe potential consequences as including up
            to four months in jail and a fine up to $750 for a Class 2 misdemeanor.
          </p>

          <div className="rounded-lg border border-[#d9cfc2] p-4 bg-[#f6efe4] mb-4">
            <h3 className="text-xl font-semibold mb-2">Why this matters in real life</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                It creates a clear legal consequence for leaving a victim without identifying information.
              </li>
              <li>
                It may increase bite reporting and improve public health follow-up (for example, rabies
                protocols and quarantine rules).
              </li>
              <li>
                It sends a broader message: accountability after incidents is becoming a legal expectation.
              </li>
            </ul>
          </div>

          <p className="mb-4">
            For the most precise wording and applicability, always check the statute directly and any
            implementing guidance from local animal control.
          </p>
        </section>

        <section id="what-to-do-after-a-bite" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">What to Do After a Dog Bite</h2>
          <p className="mb-4">
            If a bite occurs, both parties should think in terms of safety, documentation, and medical follow-up.
            This is not only about legal compliance; it is about preventing complications and ensuring the
            victim can get appropriate care.
          </p>

          <div className="rounded-lg border border-[#d9cfc2] p-4 bg-[#f6efe4] mb-4">
            <h3 className="text-xl font-semibold mb-2">Owner and victim checklist</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                <strong>Exchange contact information</strong> as required (owner information to the victim).
              </li>
              <li>
                <strong>Seek medical evaluation</strong> promptly; dog bites can become infected quickly.
              </li>
              <li>
                <strong>Report the incident</strong> to local animal control as required; Arizona law includes reporting
                requirements for bites.
              </li>
              <li>
                <strong>Document details</strong> (time, location, dog description, witnesses, photos) while memories are fresh.
              </li>
            </ul>
          </div>

          <p className="mb-4">
            Arizona&#39;s framework also includes a separate statute addressing bite reporting and quarantine
            procedures after a bite incident, which is part of why prompt reporting matters.
          </p>
        </section>

        <section id="other-states" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">How This Could Impact Other States</h2>
          <p className="mb-4">
            Arizona&#39;s approach is a simple policy tool: create a clear duty to identify the owner after a bite,
            with a defined criminal penalty for refusal. Other states may watch this model because it targets
            a real enforcement gap: victims sometimes do not know who the owner is, and without that, follow-up
            care, reporting, and compensation can become difficult.
          </p>

          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>
              Some states already have detailed dangerous dog frameworks and reporting duties, but not all
              states explicitly require an owner to provide identifying information to the victim at the scene.
            </li>
            <li>
              Legislative analysis from other states has historically noted the absence of a requirement for an
              owner to identify themselves after a bite, which is the gap Arizona chose to address.
            </li>
            <li>
              Policymakers may adopt similar provisions as part of broader updates to dangerous dog or public
              safety laws, especially if high-profile incidents drive attention.
            </li>
          </ul>

          <div className="rounded-lg border border-[#d9cfc2] p-4 bg-[#f6efe4]">
            <h3 className="text-xl font-semibold mb-2">If another state copied Arizona, expect debates about</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                The exact trigger (bite to a person only, or other injury events).
              </li>
              <li>
                The definition of &ldquo;responsible for the care&rdquo; (owner vs walker vs sitter).
              </li>
              <li>
                The penalty level (civil citation vs misdemeanor).
              </li>
              <li>
                How the rule interacts with reporting and quarantine requirements.
              </li>
            </ul>
          </div>
        </section>

        <section id="policy-trend" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">The Broader Trend: Stricter Pet-Owner Accountability</h2>
          <p className="mb-4">
            Across the United States, dog-bite law already tends to emphasize accountability through strict
            liability or negligence frameworks. What is evolving is the idea that accountability should also
            include clear post-incident responsibilities (reporting, identification, and cooperation with animal
            control processes).
          </p>

          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>
              Many jurisdictions require bite reporting to authorities, partly for public health tracking and rabies
              protocols.
            </li>
            <li>
              Some states create additional obligations for owners of dangerous dogs, such as notification duties
              after specific events.
            </li>
          </ul>

          <p className="mb-4">
            The practical takeaway is that owners should assume rules will continue moving toward more
            documentation, more formal responsibility, and fewer loopholes. For pet-care businesses, it is
            another reason to maintain clear incident protocols, written policies, and strong client communication.
          </p>
        </section>

        <section id="faq" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">Frequently Asked Questions</h2>

          <p className="mb-4">
            <strong>Is Arizona&#39;s &ldquo;Bite and Run&rdquo; law about a dog injuring another animal?</strong>
            <br />
            The statutory text in A.R.S. &sect; 11-1025 addresses a dog that bites a <strong>person</strong> and requires
            providing the owner&#39;s contact information to the person who suffered the dog bite.
          </p>

          <p className="mb-4">
            <strong>When did the law take effect?</strong>
            <br />
            Maricopa County Animal Care &amp; Control states SB 1241 was signed in May and took effect
            September 26, 2025.
          </p>

          <p className="mb-4">
            <strong>Who must provide the information?</strong>
            <br />
            The statute applies to a person who owns the dog or is responsible for the dog&#39;s care in the
            specified bite situations.
          </p>

          <p className="mb-4">
            <strong>What happens if the owner refuses?</strong>
            <br />
            Public explanations describe refusal as a Class 2 misdemeanor. Always confirm current penalties
            and enforcement practice with local authorities or an attorney.
          </p>

          <p>
            <strong>Will other states adopt this?</strong>
            <br />
            It is possible. Other states have examined whether owners should be legally required to identify
            themselves after bites, and Arizona now provides a concrete model that lawmakers may copy or adapt.
          </p>
        </section>

        <section id="sources" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">📚 Sources &amp; Official References</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            <li>
              Arizona Legislature: A.R.S. &sect; 11-1025 (statutory text including owner contact information duty):{' '}
              <a
                href="https://www.azleg.gov/ars/11/01025.htm"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.azleg.gov/ars/11/01025.htm
              </a>
            </li>
            <li>
              Arizona Legislature: SB 1241 bill PDF (amending &sect; 11-1025):{' '}
              <a
                href="https://www.azleg.gov/legtext/57leg/1R/bills/SB1241P.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.azleg.gov/legtext/57leg/1R/bills/SB1241P.pdf
              </a>
            </li>
            <li>
              Arizona Legislature: SB 1241 bill summary (House engrossed summary):{' '}
              <a
                href="https://www.azleg.gov/legtext/57leg/1R/summary/H.SB1241_032125_HOUSEENGROSSED.DOCX.htm"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.azleg.gov/.../H.SB1241_...DOCX.htm
              </a>
            </li>
            <li>
              Maricopa County Animal Care &amp; Control announcement (purpose, effective date, misdemeanor framing):{' '}
              <a
                href="https://www.maricopa.gov/CivicAlerts.aspx?AID=3467"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.maricopa.gov/CivicAlerts.aspx?AID=3467
              </a>
            </li>
            <li>
              AZFamily news report (SB 1241, effective date, exchange requirement):{' '}
              <a
                href="https://www.azfamily.com/2025/09/26/new-bill-requires-arizona-dog-owners-exchange-information-if-pet-bites-someone/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.azfamily.com/.../exchange-information...
              </a>
            </li>
            <li>
              Michigan Legislature bill analysis (historical note that Michigan law did not require owners to identify themselves after bites):{' '}
              <a
                href="https://www.legislature.mi.gov/documents/2007-2008/billanalysis/Senate/htm/2007-SFA-0346-A.htm"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.legislature.mi.gov/.../2007-SFA-0346-A.htm
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
