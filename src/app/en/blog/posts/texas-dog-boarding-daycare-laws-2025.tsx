'use client';

import Head from 'next/head';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function TexasDogBoardingDaycareLaws2025() {
  const locale = useLocale();

  const title = 'Dog Boarding & Daycare Laws in Texas (2025 Guide for Owners & Facilities)';
  const date = 'December 2, 2025';
  const categories = ['owner', 'boarding', 'daycare'] as const;

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
    'Plain-language guide to the 2025 Texas kennel law, informed-consent requirements, dangerous-dog rules, and local permit and zoning issues that affect dog boarding and daycare businesses across the state.';

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
              <a href="#big-picture" className="underline hover:opacity-80">
                How Texas Regulates Kennels
              </a>
            </li>
            <li>
              <a href="#state-kennel-law" className="underline hover:opacity-80">
                Texas Kennel Law (Chapter 824)
              </a>
            </li>
            <li>
              <a href="#local-permits" className="underline hover:opacity-80">
                Local Permits, Zoning &amp; Inspections
              </a>
            </li>
            <li>
              <a href="#health-safety" className="underline hover:opacity-80">
                Health, Safety &amp; Care Standards
              </a>
            </li>
            <li>
              <a href="#dangerous-dogs-liability" className="underline hover:opacity-80">
                Dangerous Dogs &amp; Liability
              </a>
            </li>
            <li>
              <a href="#compliance-checklist" className="underline hover:opacity-80">
                Compliance Checklist
              </a>
            </li>
            <li>
              <a href="#faq" className="underline hover:opacity-80">
                FAQ
              </a>
            </li>
            <li>
              <a href="#sources" className="underline hover:opacity-80">
                📚 Laws &amp; Official Links
              </a>
            </li>
          </ul>
        </nav>

        {/* TL;DR */}
        <section id="tl-dr" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Short Answer (TL;DR)</h2>
          <p className="mb-4">
            In Texas, there is now a dedicated kennel law in the Health and Safety Code
            (Chapter 824) that applies to most commercial boarding facilities and
            requires written informed consent before you can leave a dog or cat
            unattended at a kennel. At the same time, Texas does not run a single
            statewide boarding or daycare licence program, so zoning, permits,
            inspections and kennel spacing rules are handled city-by-city and
            county-by-county under local ordinances and animal-control codes. You must
            comply with the state kennel law, dangerous-dog rules, vaccination and rabies
            requirements, plus any local permits, distance rules, building codes and
            commercial-animal establishment standards. If you are planning to open or
            expand a boarding or daycare business in Texas, treat this as a
            two-layer system: state animal-health and consent rules on top of very
            specific local permitting.
          </p>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Legal note:</strong> This page is educational and not legal advice.
            Laws and ordinances change quickly and may be interpreted differently by each
            city or county attorney. Always confirm requirements with the official
            statute text and your local permitting or animal-control office before
            relying on any summary.
          </div>
        </section>

        {/* Big picture */}
        <section id="big-picture" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">
            How Texas Regulates Dog Boarding &amp; Daycare Facilities
          </h2>
          <p className="mb-3">
            When people ask whether Texas has &quot;boarding kennel licences&quot; or a
            single daycare law, the honest answer is that it depends on where you are in
            the state. Texas sets some animal-health and kennel rules at the state level,
            but most of the practical details that facilities feel day to day — permits,
            inspections, spacing from homes, sanitation, noise and complaint procedures —
            live in local city and county ordinances.
          </p>
          <p className="mb-3">
            In our broader guide on{' '}
            <Link href="https://www.petuniapets.com/en/blog/dog-daycare-and-boarding-laws-by-state-2025">
              dog daycare and boarding laws by state
            </Link>
            , we explain that Texas is one of the states where the state sets a framework
            but leaves much of the implementation to local governments. The new kennel
            chapter in the Health and Safety Code is a major update, though, and every
            boarding or daycare operator needs to understand how it works.
          </p>
        </section>

        {/* State Kennel Law */}
        <section id="state-kennel-law" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">
            Texas Kennel Law: Health &amp; Safety Code Chapter 824
          </h2>
          <p className="mb-3">
            In 2023, Texas added Chapter 824 to the Health and Safety Code, titled
            &quot;Kennels.&quot; The statute defines a kennel as a facility, including a
            veterinary clinic, that boards dogs or cats and provides related services for
            compensation or other consideration. Very small operations that board three
            or fewer animals at a time are carved out, as are animal shelters regulated
            under a separate chapter.
          </p>
          <p className="mb-3">
            The most important operational requirement sits in Section 824.003. It
            requires a kennel to obtain informed written consent before a dog or cat can
            be left unattended at the facility. The consent must clearly explain that the
            animal will be left without a person present, identify any fire-protection
            sprinklers or detection systems, and warn owners of the risk of injury or
            death from fire or other emergencies when no humans are on-site. Kennels that
            fail to follow the informed-consent rules can face civil penalties under
            Section 824.004.
          </p>
          <p className="mb-3">
            As a boarding or daycare operator, this means your intake paperwork cannot be
            a generic &quot;we will take good care of your dog&quot; form. If dogs are
            ever left alone in the building — overnight boarding with no staff present,
            early-morning drop-offs before opening, or closed-hours care — you must
            clearly spell that out, disclose your fire-safety systems, and get a signed
            acknowledgment that meets the statute&apos;s informed-consent requirements.
          </p>
        </section>

        {/* Local permits and zoning */}
        <section id="local-permits" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">
            Local Permits, Zoning &amp; Inspection Rules (City &amp; County Level)
          </h2>
          <p className="mb-3">
            Texas does not issue a single statewide boarding licence the way some other
            states do. Instead, cities and counties regulate commercial animal
            establishments through local animal-control codes, building and fire codes,
            and land-use or zoning rules. Those local rules are where you will see
            requirements for kennel permits, annual inspections, distance from homes, and
            sanitation details.
          </p>
          <p className="mb-3">
            A few examples illustrate how varied this can be across the state:
          </p>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li>
              <strong>Corpus Christi:</strong> City ordinance requires all commercial
              animal establishments, boarding kennels and stables to obtain an annual
              permit from Animal Care Services and pass inspections. Facilities must meet
              sanitation and welfare standards set by the Animal Care Services
              director, and inspections occur during reasonable daytime hours.
            </li>
            <li>
              <strong>Wichita Falls:</strong> The Wichita Falls–Wichita County Public
              Health District&apos;s Animal Services division issues permits for
              commercial animal businesses. Kennel or boarding facilities have to apply
              through that office and comply with local animal and health regulations.
            </li>
            <li>
              <strong>Fort Worth:</strong> Local code sets specific distance requirements
              for kennels, making it an offense to build or maintain a dog or cat kennel
              within a certain number of feet of nearby residences or habitable
              structures. That kind of spacing rule can heavily influence where you are
              allowed to open a dog daycare or boarding facility in practice.
            </li>
            <li>
              <strong>Other municipalities:</strong> Many Texas cities use their animal
              control or nuisance codes to define &quot;boarding kennel&quot; and require
              a permit or licence for anyone keeping dogs for compensation, often with
              additional standards for noise, drainage, waste disposal and building
              conditions.
            </li>
          </ul>
          <p className="mb-3">
            The takeaway: even if your business complies with state law and general dog
            regulations, you can still be out of compliance locally if you skip kennel
            permits, ignore distance rules, or convert a building without checking
            zoning and building-code requirements.
          </p>
        </section>

        {/* Health, safety & care */}
        <section id="health-safety" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">
            Health, Safety &amp; Care Standards That Apply in Texas
          </h2>
          <p className="mb-3">
            Texas does not publish a single &quot;boarding and daycare standards&quot;
            manual, but several sets of rules and best practices still shape how dogs
            must be housed and managed.
          </p>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li>
              <strong>Rabies vaccination and local registration:</strong> State law
              requires rabies vaccination for dogs and cats and authorizes local
              governments to require licences and proof of vaccination. Boarding and
              daycare facilities are expected to maintain records and refuse intake if
              proof is missing or expired.
            </li>
            <li>
              <strong>Animal cruelty and neglect standards:</strong> State cruelty laws
              and local animal-welfare ordinances prohibit keeping dogs in conditions
              that deny necessary food, water, shelter or veterinary care. Overcrowded,
              dirty or unsafe kennels can be treated as cruelty or public-nuisance cases
              in serious situations.
            </li>
            <li>
              <strong>Standards borrowed from breeder regulations:</strong> Texas
              commercial breeder regulations include housing and care standards such as
              adequate shelter, outdoor-housing restrictions and veterinary oversight.
              Even though these rules target breeders, many local authorities and
              inspectors informally look for similar standards in boarding and daycare
              environments.
            </li>
            <li>
              <strong>Fire, building and sanitation codes:</strong> Standard building and
              fire codes apply to kennels the same way they do to any other commercial
              occupancy. Local health departments may also set sanitation requirements
              for waste disposal, drainage, ventilation and pest control.
            </li>
          </ul>
          <p className="mb-3">
            From an operations standpoint, this means you should build your facility
            around clear written policies: vaccination requirements, sanitation
            schedules, rest and supervision plans, incident reporting, and fire and
            evacuation procedures. Those policies are your first line of defence when an
            inspector, landlord, insurer or owner asks how you are keeping dogs safe.
          </p>
        </section>

        {/* Dangerous dogs & liability */}
        <section id="dangerous-dogs-liability" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">
            Dangerous Dogs, Bites &amp; Liability Exposure
          </h2>
          <p className="mb-3">
            Texas has a separate set of dangerous-dog statutes that apply when a dog has
            attacked or seriously threatened a person or another animal. While those
            laws are often enforced in the context of private ownership, they can affect
            boarding and daycare operators in a few ways.
          </p>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li>
              If a dog has been declared dangerous and is kept at your facility, you
              must be confident the owner is complying with registration, insurance and
              confinement requirements. Failing to isolate or manage that dog correctly
              can expose you to both regulatory and civil liability.
            </li>
            <li>
              Even when a dog is not formally classified as dangerous, repeated
              aggression or serious bites at your facility can prompt local authorities
              to investigate. In extreme cases they may treat your kennel itself as a
              nuisance or safety risk.
            </li>
            <li>
              Clear temperament-testing policies, individual risk notes on each dog and
              written incident reports all help show that you are managing behaviour
              responsibly. Our broader boarding and daycare law guide walks through how
              temperament policies fit into the legal picture from a state perspective.
            </li>
          </ul>
          <p className="mb-3">
            From a practical standpoint, you should have a written intake policy that
            reserves the right to refuse dogs that pose an unreasonable risk to staff,
            other dogs or neighbours, along with a structured behaviour-review process
            for dogs who struggle in group care.
          </p>
        </section>

        {/* Compliance checklist */}
        <section id="compliance-checklist" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">
            Quick Compliance Checklist for Texas Boarding &amp; Daycare Businesses
          </h2>
          <div className="rounded-lg border border-[#d9cfc2] bg-[#f6efe4] p-4">
            <ol className="list-decimal pl-6 space-y-1 text-sm">
              <li>
                Read Chapter 824 of the Texas Health and Safety Code and update your
                intake paperwork so that informed consent for unattended boarding is
                explicit and in writing.
              </li>
              <li>
                Contact your city or county animal-services or permitting office to ask
                whether commercial kennel, animal establishment, or multi-animal permits
                are required at your address.
              </li>
              <li>
                Confirm zoning, distance and building requirements before signing a
                lease or beginning construction on a new facility.
              </li>
              <li>
                Build written policies for vaccination, health screening, sanitation,
                supervision ratios, group structure and rest periods.
              </li>
              <li>
                Train staff on dog body language, safe group play, emergency response
                and your internal incident-reporting procedures.
              </li>
              <li>
                Maintain complete records: owner contact details, vaccination proofs,
                signed consents, incident reports and copies of permits and inspections.
              </li>
              <li>
                Review your policies at least annually and whenever state law or local
                ordinances change, or when you expand or move locations.
              </li>
            </ol>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">Frequently Asked Questions</h2>

          <p className="mb-3">
            <strong>Does Texas require a single state licence for dog boarding?</strong>
            <br />
            No. Texas sets kennel and animal-health rules at the state level but leaves
            most facility-level licensing and inspections to cities and counties. You
            should expect to work with your local animal-control or permitting office for
            commercial kennel or animal-establishment permits.
          </p>

          <p className="mb-3">
            <strong>Does the new kennel law apply to home-based sitters?</strong>
            <br />
            Chapter 824 exempts kennels that board three or fewer dogs or cats at any
            time, and it does not apply to animal shelters. Very small operations may
            fall outside the chapter, but they can still be regulated by local ordinances
            and general cruelty or nuisance laws, so home-based sitters need to check
            with their city as well.
          </p>

          <p className="mb-3">
            <strong>What happens if I do not follow the informed-consent rules?</strong>
            <br />
            Failing to obtain the required written consent can expose your business to
            civil penalties under the kennel chapter and may also weaken your position in
            a civil lawsuit if an incident occurs while dogs are left unattended.
          </p>

          <p>
            <strong>Where should I start if I am planning a new facility?</strong>
            <br />
            A practical order is: verify zoning for your proposed address, call your
            local animal-services or permitting office about kennel or animal
            establishment requirements, review the state kennel chapter and dangerous-dog
            rules, then design your space and policies around those legal boundaries
            rather than retrofitting later.
          </p>
        </section>

        {/* Sources */}
        <section id="sources" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">
            📚 Key Laws &amp; Official References (Selected)
          </h2>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            <li>
              Texas Health &amp; Safety Code, Title 10, Chapter 824 – Kennels (definitions,
              exceptions, informed consent and civil penalties):{' '}
              <a
                href="https://law.justia.com/codes/texas/health-and-safety-code/title-10/chapter-824/"
                target="_blank"
                rel="noopener noreferrer"
              >
                law.justia.com/codes/texas/.../chapter-824
              </a>
            </li>
            <li>
              Texas dangerous-dog and general dog laws overview:{' '}
              <a
                href="https://www.animallaw.info/statute/tx-dog-consolidated-dog-laws"
                target="_blank"
                rel="noopener noreferrer"
              >
                animallaw.info/statute/tx-dog-consolidated-dog-laws
              </a>
            </li>
            <li>
              Corpus Christi Animal Care – Commercial animal establishment and boarding
              kennel permits:{' '}
              <a
                href="https://www.corpuschristitx.gov/department-directory/animal-care-services/get-help/animal-permits/"
                target="_blank"
                rel="noopener noreferrer"
              >
                corpuschristitx.gov/.../animal-permits
              </a>
            </li>
            <li>
              Wichita Falls Animal Services – Animal-services permitting (residential and
              commercial):{' '}
              <a
                href="https://www.wichitafallstx.gov/2889/Animal-Services-Permitting"
                target="_blank"
                rel="noopener noreferrer"
              >
                wichitafallstx.gov/2889/Animal-Services-Permitting
              </a>
            </li>
            <li>
              Fort Worth Code – Distance requirements for kennels near residences:{' '}
              <a
                href="https://codelibrary.amlegal.com/codes/ftworth/latest/ftworth_tx/0-0-0-40018"
                target="_blank"
                rel="noopener noreferrer"
              >
                codelibrary.amlegal.com/.../ftworth_tx/0-0-0-40018
              </a>
            </li>
            <li>
              Texas commercial breeder licensing (for comparison of care standards):{' '}
              <a
                href="https://www.tdlr.texas.gov/bre/breapply.htm"
                target="_blank"
                rel="noopener noreferrer"
              >
                tdlr.texas.gov/bre/breapply.htm
              </a>
            </li>
            <li>
              Petunia – National guide to daycare and boarding rules:{' '}
              <Link href="https://www.petuniapets.com/en/blog/dog-daycare-and-boarding-laws-by-state-2025">
                petuniapets.com/en/blog/dog-daycare-and-boarding-laws-by-state-2025
              </Link>
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
