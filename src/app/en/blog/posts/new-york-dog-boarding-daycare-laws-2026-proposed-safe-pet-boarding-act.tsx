'use client';

import Head from 'next/head';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function NewYorkSafePetBoardingActFullArticle() {
  const locale = useLocale();

  const title =
    'New York’s Safe Pet Boarding Act: What It Would Change for Dog Boarding & Daycare Facilities';
  const date = 'January 15, 2026';

  const description =
    'A full, detailed, factual explanation of New York’s proposed Safe Pet Boarding Act (A09123 / S08510), including every operational, staffing, facility, training, recordkeeping, inspection, and enforcement requirement for dog boarding and daycare businesses.';

  return (
    <>
      <Head>
        <title>{title} – Petunia Blog</title>
        <meta name="description" content={description} />
        <meta name="robots" content="all" />
        
      </Head>

      <main className="max-w-3xl mx-auto px-4 py-10 text-[#2c4a30]">
        <p className="text-sm text-gray-500 mb-2">Posted on {date}</p>
        <h1 className="text-3xl font-bold mb-6">{title}</h1>

        <p className="mb-4">
          <strong>Bottom line:</strong> New York currently does{' '}
          <strong>not</strong> have a single, statewide licensing and routine
          inspection program specifically for commercial pet boarding kennels or
          doggy daycares. The proposed{' '}
          <strong>NYS Safe Pet Boarding Act</strong> would create one by setting
          statewide minimum standards, requiring annual licensing, and granting
          the New York State Department of Agriculture &amp; Markets clear
          authority to inspect and enforce.
        </p>

        <p className="mb-6">
          This article is split into two parts:
        </p>

        <ol className="list-decimal pl-6 mb-10 space-y-1">
          <li>
            <strong>Strictly factual:</strong> What the bill would require if
            passed as written.
          </li>
          <li>
            <strong>Business and industry analysis:</strong> What typically
            happens when stricter regulation is imposed and how owners should
            think strategically.
          </li>
        </ol>

        <h2 className="text-2xl font-semibold mb-4">
          Part 1 — Factual: What the NYS Safe Pet Boarding Act Would Require
        </h2>

        <h3 className="text-xl font-semibold mt-6 mb-2">
          What bill is being proposed?
        </h3>

        <ul className="list-disc pl-5 space-y-1 mb-6">
          <li>
            Assembly Bill A09123 (
            <a
              href="https://assembly.state.ny.us/leg/?Text=Y&bn=A9123&term=2025"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              New York State Assembly
            </a>
            )
          </li>
          <li>
            Senate Bill S08510 (
            <a
              href="https://assembly.state.ny.us/leg/?Text=Y&bn=S8510&term=2025"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              New York State Assembly
            </a>
            )
          </li>
          <li>
            The bill formally names the legislation the{' '}
            <strong>NYS Safe Pet Boarding Act</strong>.
          </li>
          <li>
            Legislative intent states that the bill responds to recent tragedies
            and addresses gaps in statewide oversight.
          </li>
        </ul>

        <h3 className="text-xl font-semibold mb-2">
          Facilities covered by the law
        </h3>

        <p className="mb-4">
          The bill defines a boarding kennel as any facility maintained for the
          care or custody of pet animals for compensation, including facilities
          operated within a personal residence. The definition explicitly
          includes facilities commonly known as{' '}
          <strong>doggy daycare</strong>.
        </p>

        <h3 className="text-xl font-semibold mb-2">Facilities exempt</h3>

        <p className="mb-4">
          Boarding kennels located on premises owned and operated as a duly
          licensed veterinary practice are excluded from the requirements of the
          act.
        </p>

        <h3 className="text-xl font-semibold mb-6">Effective date</h3>

        <p className="mb-10">
          The act would take effect 18 months after becoming law, with rulemaking
          authority granted immediately to allow agencies to prepare.
        </p>

        {/* ARTICLE 26-D */}
        <h2 className="text-2xl font-semibold mb-4">
          Article 26-D — Statewide Regulatory Framework
        </h2>

        <p className="mb-6">
          Below is what the bill text requires, organized by statutory section.
        </p>

        <h3 className="text-xl font-semibold mb-2">
          Section 440 — Definitions
        </h3>

        <p className="mb-2">
          The bill defines key operational terms used for enforcement, including:
        </p>

        <ul className="list-disc pl-5 mb-6 space-y-1">
          <li>
            Animal (dogs, cats, and other companion animals; not livestock)
          </li>
          <li>
            Air handling system, ambient temperature, enclosure, primary
            enclosure, infectious disease, enrichment, and long-term stay (14 or
            more days)
          </li>
          <li>
            The statutory definition of boarding kennel explicitly includes
            doggy daycare
          </li>
        </ul>

        <p className="mb-10">
          These definitions establish the language used during inspections and
          enforcement actions.
        </p>

        <p className="mb-10">
          <strong>Why this matters:</strong> These definitions become the vocabulary used
          to enforce requirements. Terms such as &ldquo;primary enclosure,&rdquo;
          &ldquo;long-term stay,&rdquo; and &ldquo;air handling system&rdquo; are the
          exact language inspectors and regulators will rely on during compliance
          reviews.
        </p>

        <h4 className="font-semibold mb-2">
          License application requirements
        </h4>

        <p className="mb-2">
          Licensure would be annual and submitted on a department form. At minimum,
          applications must include:
        </p>

        <ul className="list-disc pl-5 mb-6 space-y-1">
          <li>Applicant name and all business names used within the past five years</li>
          <li>Whether the applicant has previously held a pet dealer license</li>
          <li>Business address, phone number, and any additional premises used for boarding</li>
          <li>Employer Identification Number (EIN)</li>
          <li>Website and business email address</li>
          <li>Number of animals boarded in the prior year</li>
          <li>Number of animals currently boarded</li>
          <li>Species typically boarded</li>
          <li>General facility description</li>
          <li>Current staff training protocols and procedural practices</li>
          <li>
            Any other information required to establish the applicant&rsquo;s character
            and responsibility
          </li>
          <li>
            Renewal applications must be submitted at least <strong>30 days</strong>
            prior to license expiration
          </li>
        </ul>

        <h3 className="text-xl font-semibold mb-2">
          Section 441 — Licensing and inspections
        </h3>

        <ul className="list-disc pl-5 mb-6 space-y-1">
          <li>
            Any person operating a boarding kennel must be licensed by the
            Department of Agriculture and Markets.
          </li>
          <li>
            Existing operators may continue operating while an initial license
            application is pending.
          </li>
          <li>
            Licenses are issued annually and require inspection prior to
            issuance.
          </li>
          <li>
            Annual inspections are required for renewal.
          </li>
          <li>
            Unannounced and complaint-driven inspections are authorized.
          </li>
          <li>
            Licenses must be conspicuously displayed on the premises.
          </li>
          <li>
            Application and renewal fees are $150 each, and license fee revenue is deposited
            into the animal shelter regulation fund.
          </li>
          <li>
            Licenses may be denied, suspended, or revoked for misstatements,
            falsified records, violations, or failure to comply.
          </li>
        </ul>

        <h3 className="text-xl font-semibold mb-2">
          Section 442 — Personnel training
        </h3>

        <ul className="list-disc pl-5 mb-6 space-y-1">
          <li>
            All staff members and volunteers with direct animal care
            responsibilities must receive training.
          </li>
          <li>
            Training must occur within 60 days of hire and at least annually
            thereafter.
          </li>
          <li>
            Training must cover humane handling, infectious disease, zoonotic
            disease, animal cruelty, sanitation, animal behavior, and required
            documentation.
          </li>
          <li>
            Training records must be maintained for at least three years.
          </li>
        </ul>

        <p className="mb-10">
          Training documentation must be retained for at least three years and must
          include the date training was delivered or completed, the topics covered,
          the training provider, and a list of staff members or volunteers who attended.
        </p>

        {/* CONTINUED — remainder fully preserved */}

        <h3 className="text-xl font-semibold mb-2">
          Section 443 — Recordkeeping and written protocols
        </h3>

        <h4 className="font-semibold mb-2">
          Required animal records
        </h4>

        <p className="mb-2">
          Each boarding kennel must create and maintain a record for every animal
          housed at the facility. Records must include:
        </p>

        <ul className="list-disc pl-5 mb-6 space-y-1">
          <li>Owner name, address, and phone number</li>
          <li>Name and contact information of any person delivering the animal</li>
          <li>Intake date and departure date</li>
          <li>
            Species, age, sex, physical description or color, and spay or neuter
            status if determinable
          </li>
          <li>
            Identifying information including tattoos, official identification
            numbers, rabies tags, and microchip numbers if present
          </li>
          <li>
            Behavioral and health history obtained at intake, including bite
            history
          </li>
          <li>
            Vaccination status:
            <ul className="list-disc pl-6 mt-1">
              <li>Dogs: rabies, distemper, bordetella bronchiseptica</li>
              <li>
                Cats: rabies, feline viral rhinotracheitis, calicivirus,
                panleukopenia
              </li>
            </ul>
          </li>
          <li>
            Documentation of food and water provided and any medications
            administered during the stay
          </li>
        </ul>

        <p className="mb-4">
          Animal records must be retained for a minimum of three years following
          the animal&rsquo;s departure from the facility.
        </p>

        <h4 className="font-semibold mb-2">
          Written protocols
        </h4>

        <p className="mb-2">
          Each boarding kennel must develop and maintain written protocols
          sufficient to achieve and maintain compliance with the law. These
          protocols must include, at minimum:
        </p>

        <ul className="list-disc pl-5 mb-6 space-y-1">
          <li>Animal handling procedures</li>
          <li>Behavioral assessment practices</li>
          <li>Enrichment and stress-reduction practices</li>
          <li>Bite and scratch incident management</li>
          <li>Sanitation procedures</li>
        </ul>

        <p className="mb-10">
          All protocols must be reviewed annually, updated as needed, and made
          readily accessible to staff and volunteers.
        </p>

        <h3 className="text-xl font-semibold mb-2">
          Section 444 — General facility standards
        </h3>

        <p className="mb-2">
          The bill establishes detailed minimum facility standards, including:
        </p>

        <ul className="list-disc pl-5 mb-6 space-y-1">
          <li>
            Structural integrity sufficient to prevent injury, ensure
            containment, and restrict unauthorized entry
          </li>
          <li>
            Non-porous, water-resistant, non-toxic surfaces capable of regular
            cleaning and disinfection
          </li>
          <li>Proper drainage to prevent liquid accumulation</li>
          <li>
            Continuous access to electrical power and running water in all animal
            housing areas
          </li>
          <li>
            Written emergency plans for power or water outages exceeding four
            hours
          </li>
          <li>
            Accessible hand-washing sinks with soap and single-service towels or
            hand dryers
          </li>
          <li>
            Ambient indoor temperatures maintained between 60°F and 80°F, with
            monitoring appropriate to animal breed, age, and medical condition
          </li>
          <li>
            Documented maintenance of air-handling systems according to
            manufacturer recommendations
          </li>
          <li>Ammonia levels maintained below two parts per million</li>
          <li>
            Isolation areas for animals showing signs of infectious disease, with
            species separation and closed doors
          </li>
          <li>
            Noise mitigation practices to minimize continuous exposure above 85 decibels,
            including use of a decibel meter at least once weekly, with measurements taken
            during both cleaning periods and resting periods, and documented records of
            dates and sound levels
          </li>
          <li>
            Lighting sufficient to maintain diurnal cycles, with at least eight
            hours of light and eight hours of darkness in each 24-hour period
          </li>
          <li>
            Written pest and vermin control plans, service records, and rodent-
            proof food storage
          </li>
        </ul>

        <h3 className="text-xl font-semibold mb-2">
          Section 445 — Animal housing requirements
        </h3>

        <ul className="list-disc pl-5 mb-6 space-y-1">
          <li>Each animal must be provided a suitable primary enclosure</li>
          <li>
            Unsupervised tethering exceeding 30 minutes is prohibited
          </li>
          <li>
            Wire or slat-bottom cages are prohibited unless a solid tray is
            provided
          </li>
          <li>
            Dogs and cats must be housed in separate rooms, with efforts to
            minimize noise exposure
          </li>
          <li>
            Animals must be segregated by age group unless housed with nursing
            parents
          </li>
          <li>
            Animals showing signs of infectious disease must be housed in
            isolation
          </li>
          <li>
            Compatible animals belonging to the same owner may be housed
            together
          </li>
          <li>
            Each enclosure must clearly identify the animals housed within
          </li>
          <li>
            Enclosures must allow animals to stand, stretch, turn, rest, and eat
            away from elimination areas
          </li>
          <li>
            Maximum cohousing limits apply regardless of enclosure size:
            <ul className="list-disc pl-6 mt-1">
              <li>12 adult cats</li>
              <li>Two litters of kittens, not to exceed ten kittens</li>
              <li>Five adult dogs</li>
              <li>One litter of puppies</li>
            </ul>
          </li>
          <li>
            Animals under 16 weeks may not be housed with adults other than
            nursing parents
          </li>
          <li>
            Animals housed together must be separated or monitored during
            feeding
          </li>
          <li>
            Outdoor housing is limited to no more than 12 hours in any 24-hour
            period
          </li>
          <li>
            Outdoor primary enclosures must provide protection from the elements at all
            times, including moisture-proof insulated shelter large enough for all animals
          </li>
          <li>
            A heat source must be provided when temperatures fall below 50°F
          </li>
          <li>
            Shaded areas and clean, dry bedding must be available
          </li>
          <li>
            Outdoor cat access areas must be fully enclosed to prevent escape
          </li>
        </ul>

        <h3 className="text-xl font-semibold mb-2">
          Section 446 — Sanitation requirements
        </h3>

        <ul className="list-disc pl-5 mb-6 space-y-1">
          <li>
            Use of disinfectants effective against pathogens animals are at risk
            for
          </li>
          <li>
            Removal of animals from enclosures during cleaning and disinfection
          </li>
          <li>
            Separate cleaning equipment for dog and cat areas
          </li>
          <li>
            Cleaning and disinfection of enclosures before new animal occupancy
          </li>
          <li>
            Daily cleaning and weekly disinfection during long-term stays
          </li>
          <li>
            Bedding laundering, waste removal, protective garment handling, and
            hygiene supervision
          </li>
        </ul>

        <h3 className="text-xl font-semibold mb-2">
          Section 447 — Management protocols
        </h3>

        <ul className="list-disc pl-5 mb-6 space-y-1">
          <li>
            A written management structure defining authority and
            responsibilities
          </li>
          <li>
            Staffing sufficient to meet cleaning, feeding, and enrichment needs
          </li>
          <li>
            Animal populations may not exceed housing capacity except during
            disasters
          </li>
          <li>
            Daily observation of all animals by management or designees
          </li>
        </ul>

        <h3 className="text-xl font-semibold mb-2">
          Section 448 — Animal husbandry standards
        </h3>

        <ul className="list-disc pl-5 mb-6 space-y-1">
          <li>Fresh potable water must be available at all times</li>
          <li>
            Animals must be fed owner-provided or nutritionally complete diets
          </li>
          <li>
            Feeding frequency requirements:
            <ul className="list-disc pl-6 mt-1">
              <li>Adults: at least once daily</li>
              <li>Under six months: at least twice daily</li>
              <li>Under two months: at least three times daily</li>
            </ul>
          </li>
          <li>Perishable animal food must be refrigerated</li>
          <li>
            Food and water bowls must be sanitized between animals
          </li>
          <li>
            Feeding observations must be documented
          </li>
          <li>
            Humane handling and restraint practices are required
          </li>
          <li>
            Behavioral history must be collected at intake
          </li>
          <li>
            Daily schedules and positive human interaction are expected unless
            unsafe
          </li>
        </ul>

        <h3 className="text-xl font-semibold mb-2">
          Section 449 — Violations and penalties
        </h3>

        <ul className="list-disc pl-5 mb-6 space-y-1">
          <li>
            Licenses may be denied, suspended, revoked, or refused renewal
          </li>
          <li>
            Civil penalties range from $100 to $1,000 per violation
          </li>
          <li>
            Violations must be corrected within 10 days, or 72 hours if posing an
            immediate threat
          </li>
          <li>
            The commissioner may suspend operations until violations are
            corrected
          </li>
          <li>
            Written notice of violations and corrective actions is required
          </li>
        </ul>

        <h3 className="text-xl font-semibold mb-2">
          Section 449-a — Disaster emergency waiver authority
        </h3>
        <p className="mb-10">
          The commissioner may waive requirements during a declared disaster
          emergency.
        </p>
        <h3 className="text-xl font-semibold mb-2">
          Administrative expansion of state authority and public reporting
        </h3>

        <p className="mb-4">
          The bill also amends New York Agriculture &amp; Markets Law §16 to explicitly
          expand state authority over boarding kennels.
        </p>

        <ul className="list-disc pl-5 mb-10 space-y-1">
          <li>
            Authorizes the Department of Agriculture and Markets to inspect, license, and
            regulate boarding kennels under the new article
          </li>
          <li>
            Grants authority to adopt rules, issue orders, and investigate violations
          </li>
          <li>
            Requires preparation of an annual compliance report, which must be posted
            publicly on the department&rsquo;s website within 30 days of completion
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">
          Part 2 — Analysis (deductive reasoning): What typically happens when strict regulation is imposed
        </h2>

        <p className="mb-4">
          Everything in this section is generalized industry reasoning, not a claim
          about what New York will do in every case. It reflects what commonly
          happens when a state moves from patchwork oversight to statewide
          licensing, routine inspections, and written operational standards.
        </p>

        <h3 className="text-xl font-semibold mb-2">
          1) The cost of compliance becomes real — and it lands unevenly
        </h3>

        <p className="mb-4">
          Laws like the Safe Pet Boarding Act tend to divide operators into two
          broad categories.
        </p>

        <p className="mb-2">
          <strong>Facilities already built for compliance:</strong>
        </p>

        <ul className="list-disc pl-5 mb-4 space-y-1">
          <li>Newer or purpose-built facilities</li>
          <li>Modern HVAC and ventilation systems</li>
          <li>Existing written protocols and documentation</li>
          <li>Stronger staffing coverage and supervision</li>
        </ul>

        <p className="mb-4">
          For these operators, the incremental burden is primarily administrative:
          documentation, training logs, inspection readiness, and ongoing record
          maintenance.
        </p>

        <p className="mb-2">
          <strong>Legacy, informal, or low-margin operators:</strong>
        </p>

        <ul className="list-disc pl-5 mb-4 space-y-1">
          <li>Older buildings with limited HVAC redundancy</li>
          <li>Inconsistent or informal documentation practices</li>
          <li>Thin staffing margins</li>
        </ul>

        <p className="mb-4">
          For these facilities, the largest costs are rarely the $150 license fee.
          The real expenses tend to be:
        </p>

        <ul className="list-disc pl-5 mb-6 space-y-1">
          <li>HVAC and air-handling upgrades and maintenance documentation</li>
          <li>Sound mitigation and decibel monitoring</li>
          <li>Creation of isolation areas</li>
          <li>Formal recordkeeping systems and retention</li>
          <li>Training programs with annual documentation</li>
        </ul>

        <p className="mb-6">
          The net effect is that regulation raises the operational floor but also
          raises fixed costs, compressing margins for smaller or poorly capitalized
          businesses.
        </p>

        <h3 className="text-xl font-semibold mb-2">
          2) Some facilities do close — usually for predictable reasons
        </h3>

        <p className="mb-4">
          When closures occur after new regulatory regimes are introduced, they
          are typically driven by a small number of factors:
        </p>

        <ul className="list-disc pl-5 mb-6 space-y-1">
          <li>Inability to finance required facility upgrades</li>
          <li>Inability to staff adequately to meet daily operational standards</li>
          <li>Repeated citations followed by enforcement pressure</li>
          <li>
            Businesses that previously operated below regulatory visibility and
            can no longer do so
          </li>
        </ul>

        <p className="mb-6">
          Closures are rarely ideological opposition to regulation. They are
          usually a function of cash flow, facility constraints, and staffing
          reality.
        </p>

        <h3 className="text-xl font-semibold mb-2">
          3) Prices tend to rise and capacity can tighten
        </h3>

        <p className="mb-4">
          When compliance requires more staff time per animal, more documentation,
          and stricter limits on overcrowding, operators are generally left with
          three options:
        </p>

        <ul className="list-disc pl-5 mb-6 space-y-1">
          <li>Raise prices</li>
          <li>Reduce capacity</li>
          <li>Do both</li>
        </ul>

        <p className="mb-6">
          This often results in fewer low-cost slots during peak seasons and
          tighter availability overall.
        </p>

        <h3 className="text-xl font-semibold mb-2">
          4) The market consolidates toward higher-trust brands
        </h3>

        <p className="mb-4">
          State licensure and inspection outcomes tend to shift consumer behavior.
          When licensing and compliance information is visible or easily verified:
        </p>

        <ul className="list-disc pl-5 mb-6 space-y-1">
          <li>Consumers gravitate toward licensed facilities</li>
          <li>Documentation becomes a trust signal</li>
          <li>Well-run facilities gain a marketing advantage</li>
        </ul>

        <p className="mb-6">
          Over time, this rewards operators with strong systems, consistent
          documentation, and a safety-first culture.
        </p>

        <h3 className="text-xl font-semibold mb-2">
          5) Enforcement matters more than the wording of the law
        </h3>

        <p className="mb-6">
          Two states can have similarly strict laws on paper but vastly different
          outcomes depending on inspection frequency, consistency, and enforcement
          philosophy. Robust enforcement removes low-quality operators quickly.
          Weak enforcement leaves compliant businesses bearing the cost while bad
          actors linger.
        </p>

        <h2 className="text-2xl font-semibold mb-4">
          Business strategy: What New York boarding and daycare owners should do now
        </h2>

        <h3 className="text-xl font-semibold mb-2">
          Treat documentation as a profit lever, not paperwork
        </h3>

        <p className="mb-4">
          If the bill passes, the ability to demonstrate compliance quickly and
          clearly becomes a competitive advantage. High-performing operators tend
          to systematize:
        </p>

        <ul className="list-disc pl-5 mb-6 space-y-1">
          <li>Training logs</li>
          <li>Animal-level records and retention</li>
          <li>Feeding, water, and medication observations</li>
          <li>Sanitation protocols and logs</li>
          <li>HVAC maintenance documentation</li>
          <li>Pest control plans and service reports</li>
          <li>Noise and environmental monitoring</li>
        </ul>

        <h3 className="text-xl font-semibold mb-2">
          Invest first where inspectors are most likely to focus
        </h3>

        <p className="mb-4">
          Based on the bill text, the most common inspection focal points are
          expected to be:
        </p>

        <ul className="list-disc pl-5 mb-10 space-y-1">
          <li>Temperature control and outage contingency planning</li>
          <li>Ventilation and air-handling maintenance records</li>
          <li>Isolation capability for infectious disease</li>
          <li>Sanitation protocols and execution</li>
          <li>Enclosure crowding limits and segregation practices</li>
          <li>Training documentation and annual refreshes</li>
        </ul>

        <p className="mb-10">
          Even before passage, increased public scrutiny often leads insurers and
          legal counsel to ask for the same controls. Consistent, written,
          verifiable procedures are the strongest defense.
        </p>

        <h2 className="text-2xl font-semibold mb-4">
          Official sources and reporting
        </h2>

        <ul className="list-disc pl-5 mb-10 space-y-2">
          <li>
            New York State Assembly — A09123:{' '}
            <a
              href="https://assembly.state.ny.us/leg/?Text=Y&bn=A9123&term=2025"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              https://assembly.state.ny.us/leg/?Text=Y&bn=A9123&term=2025
            </a>
          </li>
          <li>
            New York State Assembly — S08510:{' '}
            <a
              href="https://assembly.state.ny.us/leg/?Text=Y&bn=S8510&term=2025"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              https://assembly.state.ny.us/leg/?Text=Y&bn=S8510&term=2025
            </a>
          </li>
          <li>
            Spectrum News — Safe Pet Boarding Act:{' '}
            <a
              href="https://spectrumlocalnews.com/nys/capital-region/public-safety/2025/09/23/new-york-state-safe-pet-boarding-act-legislation-push"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              https://spectrumlocalnews.com/…
            </a>
          </li>
          <li>
            Associated Press — Argyle kennel case:{' '}
            <a
              href="https://apnews.com/article/a944ea188920514ea5404e73a569fd5b"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              https://apnews.com/article/a944ea188920514ea5404e73a569fd5b
            </a>
          </li>
        </ul>

        <Link
          href={`/${locale}/blog`}
          className="underline font-medium text-[#2c4a30]"
        >
          ← Back to Blog
        </Link>
      </main>
    </>
  );
}
