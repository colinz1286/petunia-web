'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function DoesMyDogNeedTheInfluenzaShot() {
  const locale = useLocale();

  // --- Metadata ---------------------------------------------------------------
  const title =
    'Does My Dog Need the Influenza Shot? History, Risk-Based Decisions, Side Effects, Facility Requirements, and a Practical Owner Checklist';
  const date = 'August 22, 2025';
  const categories = ['owner', 'boarding', 'vet'] as const;

  // Keep keys/labels aligned with prior posts on your site
  const categoryLabels: Record<string, string> = {
    owner: 'Pet Owners',
    food: 'Dog Food & Nutrition',
    boarding: 'Boarding & Daycare',
    sitter: 'Pet Sitters',
    walker: 'Dog Walkers',
    rescue: 'Rescues',
    vet: 'Veterinary Clinics',
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
              {categoryLabels[key]}
            </span>
          ))}
        </div>

        {/* INTRO */}
        <p className="text-lg mb-4">
          In the last two decades, <em>canine influenza</em>—the so-called <em>dog flu</em>—has gone
          from an obscure racetrack respiratory problem to a familiar headline that periodically pops
          up in boarding and daycare communities. With that has come a recurring owner question:
          <strong> does my dog actually need the influenza vaccine?</strong> In human medicine, flu
          shots are annual and broad-based. In dogs, vaccination is <em>risk-based</em>: it is
          considered <em>noncore</em>, meaning recommended for some dogs but not for all. That nuance
          is exactly where confusion (and debate) lives.
        </p>

        <p className="mb-6">
          This article gives you a practical, clinic-ready framework: a plain-English history of how
          dog flu emerged, what today&#39;s vaccines do (and do not) do, who truly benefits most, why
          some boarding facilities require it while others don&#39;t, what side effects to expect,
          which dogs may be more prone to reactions, and how to time doses around travel, grooming,
          training classes, daycare, shows, and boarding. You will leave with a short decision tool a
          veterinarian can validate in a 5-minute conversation—and a clear plan for when to vaccinate,
          when to defer, and what to do during an outbreak.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-3">Quick Answers (Fast Facts)</h2>
        <ul className="list-disc pl-5 space-y-2 mb-8">
          <li>
            <strong>Is the canine influenza vaccine required for every dog?</strong> No. It is a{' '}
            <em>noncore</em> vaccine—recommended based on lifestyle and exposure risk. Many strictly
            at-home dogs with minimal contact do not need it. Dogs that travel, board, attend daycare,
            dog parks, training classes, shows, or live in outbreak regions often <em>do</em>.
          </li>
          <li>
            <strong>What does the vaccine accomplish?</strong> It reduces illness severity and viral
            shedding to help protect your dog <em>and</em> reduce spread. It is not a guarantee against
            infection; think of it as a seatbelt that lowers risk and downstream complications.
          </li>
          <li>
            <strong>How many doses and how long until protection?</strong> Most products use a{' '}
            <strong>two-dose series</strong> (2–4 weeks apart) followed by <strong>annual</strong>{' '}
            boosters. Functional protection ramps up after the second dose, so plan ahead of
            boarding/daycare dates.
          </li>
          <li>
            <strong>Side effects?</strong> Usually mild and short-lived: soreness, slight lethargy,
            low-grade fever, reduced appetite for a day or two. Severe reactions are uncommon; call
            your veterinarian if anything seems worrisome.
          </li>
          <li>
            <strong>Why do some facilities require it?</strong> Group settings amplify respiratory
            spread. During local activity or outbreaks, facilities use vaccination rules to reduce
            transmission and keep doors open safely.
          </li>
          <li>
            <strong>Do most clinics stock it?</strong> Many do, especially in places with daycare and
            boarding demand, but availability can ebb and flow with regional risk and supply. Call
            ahead; clinics sometimes prioritize stock for higher-risk dogs or require appointments for
            series timing.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-3">Part 1 — How We Got Here: A Short History of Dog Flu</h2>
        <p className="mb-4">
          Modern canine influenza entered the veterinary spotlight in the mid-2000s with a new
          respiratory disease in racing greyhounds. Investigators identified an influenza A virus of
          the <strong>H3N8</strong> subtype, most consistent with an equine strain that had jumped to
          dogs and adapted to efficient dog-to-dog transmission. Veterinary and public health
          communities began to track it, and racing facilities and shelters adjusted intake and
          isolation protocols. As time passed, H3N8 activity in most regions waned, with many centers
          rarely seeing it in recent years.
        </p>
        <p className="mb-6">
          A second chapter opened in <strong>2015</strong> when a different strain, <strong>H3N2</strong>,
          sparked a high-profile outbreak in the United States after circulating among dogs in Asia. It
          spread through dog-dense communities—daycare, boarding, shows, shelters—and made clear that
          a single respiratory virus can ripple quickly through social pet networks. As with most
          canine respiratory pathogens, severity ranges from a <em>mild cough and runny nose</em> to
          complications like <em>pneumonia</em>, especially in seniors, brachycephalic breeds, and
          dogs with comorbidities. Over time, vaccines expanded from the original H3N8 to cover H3N2,
          and then to <strong>bivalent</strong> products that address both.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-2">Vaccine Milestones (Why This Matters for Owners)</h3>
        <ul className="list-disc pl-5 space-y-2 mb-8">
          <li>
            <strong>2009:</strong> The first licensed canine influenza vaccine (H3N8) becomes
            available, aimed at dogs with meaningful exposure risk. Early adoption is strongest in
            shelters, boarding hubs, and active urban clinics.
          </li>
          <li>
            <strong>2015:</strong> H3N2 arrives in the U.S.; manufacturers release monovalent H3N2
            vaccines to match what clinics are seeing in practice.
          </li>
          <li>
            <strong>2016 onward:</strong> <strong>Bivalent</strong> vaccines cover both H3N2 and H3N8,
            simplifying decisions for practices that see mixed exposure risks.
          </li>
          <li>
            <strong>2024–2025:</strong> Newer platforms and formulations expand choices (including an
            RNA-particle H3N2 option and additional bivalent products), giving veterinarians more
            flexibility to match community risk and supply realities.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-3">Part 2 — What the Vaccine Does (and Does Not Do)</h2>
        <p className="mb-4">
          Veterinary influenza vaccines function like many respiratory vaccines in animals: they teach
          the immune system to recognize key viral proteins so that the dog mounts a faster, stronger
          response at exposure. In practice, that means the vaccine helps <strong>reduce illness
          severity</strong> and <strong>shorten viral shedding</strong>. Reducing shedding matters
          because it lowers the odds of a cluster at daycare or boarding. It also buys time—fewer days
          of fever and cough, and fewer cases that deteriorate into secondary infections.
        </p>
        <p className="mb-6">
          Two practical points for owners: first, <strong>series timing</strong> matters. Most dogs
          need <strong>two doses</strong>, separated by 2–4 weeks, and the immune response matures
          after the second dose. If you book boarding for next weekend and start the series today,
          your dog will have <em>some</em> priming but not full protection. Second, vaccines are not a
          sterile shield—exposed dogs may still become infected, especially with intense dose exposure
          (think nose-to-nose barking across runs), but they tend to have shorter, milder courses and
          shed fewer viral particles into the room.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-2">Strain Coverage: H3N2 vs. H3N8</h3>
        <p className="mb-4">
          Most recent activity in North America has involved <strong>H3N2</strong>, while{' '}
          <strong>H3N8</strong> has become relatively uncommon in many regions. That said, risk varies
          by geography and time. Clinics often choose <strong>bivalent</strong> products so their
          patient base has broad coverage. Your veterinarian will weigh local surveillance, supply,
          and facility requirements when selecting between monovalent H3N2 and a bivalent option.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-3">Part 3 — Do All Dogs Need It?</h2>
        <p className="mb-4">
          No. Unlike rabies and core puppy series, the <strong>canine influenza vaccine is noncore</strong>.
          That means <em>need</em> is driven by exposure, not by a blanket rule. Think in layers:
        </p>
        <ul className="list-disc pl-5 space-y-2 mb-8">
          <li>
            <strong>High exposure:</strong> Dogs that board or attend daycare, go to grooming often,
            travel for holidays, visit busy urban dog parks, compete at shows or agility, train in
            groups, or live with rotating fosters. These dogs are much more likely to encounter a
            contagious cough at some point; vaccination is usually recommended.
          </li>
          <li>
            <strong>Moderate exposure:</strong> Dogs that visit parks occasionally, live in multi-dog
            buildings, or join periodic training classes. Decision tends to hinge on local activity
            and how frequently the dog joins group settings.
          </li>
          <li>
            <strong>Low exposure:</strong> Homebodies with minimal outside contact, no daycare, no
            boarding, no group classes. Many of these dogs do not need the vaccine unless regional
            outbreaks or future travel plans change the risk calculus.
          </li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-2">A Simple Decision Tool (Use With Your Vet)</h3>
        <ol className="list-decimal pl-5 space-y-3 mb-8">
          <li>
            <strong>Proximity:</strong> In the next 6–12 months, will your dog board, attend daycare,
            join group training, compete, or travel to crowded events? If <em>yes</em>, move to step
            2. If <em>no</em>, consider deferring.
          </li>
          <li>
            <strong>Local activity:</strong> Are clinics or shelters in your area reporting canine flu
            activity this season? If <em>yes</em>, vaccination is more compelling.
          </li>
          <li>
            <strong>Facility policy:</strong> Does your boarding/daycare provider require influenza
            vaccination? If <em>yes</em>, plan the two-dose series now to meet their lead time.
          </li>
          <li>
            <strong>Dog-specific risk:</strong> Seniors, brachycephalic breeds, and dogs with chronic
            heart, lung, or immune problems may be at higher risk from respiratory infections. For
            these dogs, vaccination can be especially useful to reduce illness severity if exposure
            occurs.
          </li>
          <li>
            <strong>Timing:</strong> Are you at least 3–4 weeks out from a boarding date? Start the
            series so your dog is past the second dose before arrival.
          </li>
        </ol>

        <h2 className="text-2xl font-semibold mt-10 mb-3">Part 4 — Do Most Veterinarians Carry the Vaccine In-House?</h2>
        <p className="mb-4">
          Many general practices carry canine influenza vaccines, particularly in communities with
          active daycare, grooming, or boarding scenes. That said, availability is not uniform: some
          clinics <em>order as needed</em> when risk rises; others stock continuously because their
          clients board frequently. Periodic supply tightness can occur during outbreaks or when
          manufacturers switch lines or upgrade products. The practical advice is simple: <strong>call
          ahead</strong>, ask which product they stock (H3N2 vs. bivalent), and whether a two-dose
          series appointment will be needed.
        </p>
        <p className="mb-6">
          If your clinic is temporarily out of stock, ask for a referral to a nearby hospital that is
          vaccinating <em>currently</em> and confirm the spacing window for the second dose. If you are
          booking boarding dates, share your timeline so the hospital can schedule both doses before
          you travel.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">Part 5 — Why Some Facilities Require It and Others Don&#39;t</h2>
        <p className="mb-4">
          Boarding and daycare operators live with respiratory disease risk every day. When multiple
          dogs share indoor air, water bowls, toys, or tight passing zones, one contagious cough can
          cascade through a room. During seasons with canine influenza activity, some businesses add a
          <strong> vaccine requirement</strong> because it reduces severe cases and shortens shedding,
          which in turn keeps staff safer, owners happier, and doors open. Facilities with high daily
          density may require the vaccine year-round to maintain a consistent baseline of protection.
        </p>
        <p className="mb-6">
          On the other hand, smaller or lower-density facilities sometimes leave influenza vaccination
          <em>optional</em> outside of outbreak periods, or they accept a waiver from a veterinarian if
          a dog has a medical reason to defer. Facility design, ventilation, regional case activity,
          client expectations, and insurance or legal considerations all shape policy. The key point
          for owners: <strong>always check requirements early</strong> and plan for the two-dose series
          if it is required.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-3">Part 6 — Dosing, Timelines, and Planning Around Travel</h2>
        <ul className="list-disc pl-5 space-y-2 mb-8">
          <li>
            <strong>Series:</strong> Most dogs need <strong>two doses</strong>, spaced 2–4 weeks
            apart. Functional protection matures after the second dose.
          </li>
          <li>
            <strong>Booster:</strong> <strong>Annually</strong> thereafter, unless your veterinarian
            recommends a different interval based on product label or risk.
          </li>
          <li>
            <strong>Lead time:</strong> If boarding is on the calendar, start the series at least 3–4
            weeks before drop-off so the second dose is on board.
          </li>
          <li>
            <strong>Other respiratory vaccines:</strong> Bordetella and parainfluenza are separate
            pathogens. Your facility may require those as well; your veterinarian can coordinate
            schedules to minimize visits.
          </li>
          <li>
            <strong>Missed the window?</strong> If you start late, discuss whether one pre-trip dose
            is better than none. It will not be ideal but may still confer partial benefit; you will
            need the second dose afterward to complete the series.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-3">Part 7 — Side Effects and Which Dogs May Be More Prone</h2>
        <p className="mb-4">
          Most dogs experience no reaction or only mild, short-lived effects: a bit of tenderness at
          the injection site, slight lethargy, a low-grade fever, or a smaller dinner the day of
          vaccination. These resolve within a day or two. Call your veterinarian if your dog has
          facial swelling, hives, vomiting, collapse, persistent fever, or a cough that does not fit a
          typical vaccine day—these warrant prompt guidance.
        </p>
        <p className="mb-4">
          Large datasets on canine vaccination in general (across many vaccine types) have noted that
          <em>smaller body weight</em> and <em>multiple injections during the same visit</em> can be
          associated with a higher chance of a reported adverse event. That does <em>not</em> mean you
          should avoid needed vaccines; it simply argues for good planning—separating non-urgent
          add-ons, scheduling when staff can monitor, and using accurate dosing and technique. Your
          veterinarian may space vaccinations across visits for especially sensitive patients, tiny
          breeds, or dogs with a history of reactions.
        </p>
        <p className="mb-6">
          Product labels commonly state that safety in pregnant bitches has not been established, and
          clinics use caution with severely ill patients. If your dog has a complex medical history
          (immune-mediated disease, chemotherapy, uncontrolled endocrine disease), expect a more
          individualized conversation about timing and benefit vs. risk, especially in outbreak
          conditions or when boarding is unavoidable.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">Part 8 — Outbreak Scenarios: What to Do</h2>
        <ol className="list-decimal pl-5 space-y-3 mb-8">
          <li>
            <strong>Call your veterinarian early:</strong> Ask about current activity, testing, and
            vaccine availability. Share any planned boarding dates; request a series calendar.
          </li>
          <li>
            <strong>Reduce exposure temporarily:</strong> Pause high-density dog activities for 2–4
            weeks while you start or boost vaccination, especially if your dog is senior, has chronic
            disease, or is brachycephalic.
          </li>
          <li>
            <strong>Hygiene &amp; traffic flow:</strong> Avoid shared water bowls and toys; stagger
            drop-off and pick-up times when possible; respect isolation requests from facilities.
          </li>
          <li>
            <strong>Watch the household:</strong> Keep coughing dogs away from others; wash hands,
            launder bedding hot, and clean shared surfaces. Cats have been infected by certain dog-flu
            strains—separate species during active respiratory disease and ask your vet for guidance.
          </li>
          <li>
            <strong>Return-to-group timelines:</strong> Follow your clinic&#39;s advice on isolation
            length and when it is safe to resume daycare or boarding after illness.
          </li>
        </ol>

        <h2 className="text-2xl font-semibold mt-8 mb-3">Part 9 — Common Owner Questions</h2>

        <h3 className="text-xl font-semibold mt-4 mb-2">Is canine influenza the same as kennel cough?</h3>
        <p className="mb-4">
          No. <em>Kennel cough</em> is a catch-all term for canine infectious respiratory disease that
          can involve several pathogens (Bordetella, parainfluenza, adenovirus, etc.). Canine
          influenza is one specific virus family with distinct strains (H3N2, H3N8). Many facilities
          recommend <em>both</em> Bordetella/parainfluenza protection <em>and</em> canine influenza
          vaccination because each addresses a different slice of risk.
        </p>

        <h3 className="text-xl font-semibold mt-4 mb-2">Will the vaccine prevent infection entirely?</h3>
        <p className="mb-4">
          Not necessarily. The benefit is in <strong>reducing severity</strong> and{' '}
          <strong>shortening shedding</strong>. Dogs can still test positive, especially with intense
          exposure, but illness tends to be milder and shorter—which is critical in group settings.
        </p>

        <h3 className="text-xl font-semibold mt-4 mb-2">Which product should my dog get—monovalent H3N2 or bivalent?</h3>
        <p className="mb-4">
          That depends on <em>current local risk</em>, <em>facility requirements</em>, and{' '}
          <em>clinic inventory</em>. Many practices favor bivalent to cover both strains in one
          series. If your region is seeing H3N2 activity specifically, a monovalent H3N2 product may
          be selected. Your veterinarian will advise based on surveillance and availability.
        </p>

        <h3 className="text-xl font-semibold mt-4 mb-2">
          My dog rarely leaves the house. Should I vaccinate anyway?
        </h3>
        <p className="mb-4">
          If there is <em>no</em> group exposure and no travel on the horizon, many clinicians would
          consider influenza vaccination optional. Reassess if plans change (boarding, house guests
          with dogs, moving to a dog-dense city) or if your area reports active cases.
        </p>

        <h3 className="text-xl font-semibold mt-4 mb-2">
          My boarding facility just added a requirement. What should I do?
        </h3>
        <p className="mb-4">
          Book the <strong>two-dose series</strong> immediately. Ask the facility about their
          lead-time rule (many require the second dose to be given at least several days prior to
          arrival). If you are too close to travel, ask your veterinarian how to minimize risk with
          late starts (partial protection is still better than none, but plan to complete the series).
        </p>

        <h3 className="text-xl font-semibold mt-4 mb-2">Do cats need this vaccine?</h3>
        <p className="mb-4">
          There is currently <strong>no licensed canine influenza vaccine for cats</strong>. However,
          certain canine influenza strains have infected cats in shelter settings. If a dog in your
          home is coughing, separate species and call your veterinarian for house-specific guidance.
        </p>

        <h3 className="text-xl font-semibold mt-4 mb-2">How will I know if my dog is having a reaction?</h3>
        <p className="mb-4">
          Expect mild, short-lived fatigue or tenderness. Contact your veterinarian immediately if you
          see facial swelling, hives, repeated vomiting, collapse, persistent fever, or labored
          breathing—those require timely care.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-3">Part 10 — A 2-Minute Script to Use With Your Veterinarian</h2>
        <ul className="list-disc pl-5 space-y-2 mb-8">
          <li>
            <strong>My dog&#39;s lifestyle:</strong> &quot;We board twice a year and do daycare
            weekly.&quot;
          </li>
          <li>
            <strong>Local context:</strong> &quot;Are you seeing canine influenza in our area this
            season? What strain?&quot;
          </li>
          <li>
            <strong>Product &amp; timing:</strong> &quot;Do you recommend H3N2 or a bivalent series,
            and can we finish before our next booking?&quot;
          </li>
          <li>
            <strong>Other vaccines:</strong> &quot;We also need Bordetella/parainfluenza—can we time
            those sensibly to limit same-day injections?&quot;
          </li>
          <li>
            <strong>History:</strong> &quot;My dog had mild post-vaccine fatigue last time—should we
            plan a lighter activity day afterward?&quot;
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-3">Owner Checklist (Print or Save)</h2>
        <ul className="list-disc pl-5 space-y-1 mb-8">
          <li>Map upcoming boarding/daycare/travel dates for the next 6–12 months.</li>
          <li>Call your veterinarian to confirm vaccine availability and product type.</li>
          <li>Schedule the two-dose series 3–4 weeks before your earliest booking.</li>
          <li>Ask about Bordetella/parainfluenza scheduling to avoid crowded visits if sensitive.</li>
          <li>Pack proof of vaccination for facilities; confirm their lead-time policy.</li>
          <li>During outbreaks, pause high-density exposure until your dog finishes the series.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-3">References &amp; Further Reading</h2>
        <ul className="list-disc pl-5 space-y-2 mb-10">
          <li>
            Centers for Disease Control and Prevention (CDC): Canine influenza overview and signs
            <a
              className="underline ml-1"
              href="https://www.cdc.gov/flu/in-animals/about/canine-flu.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              cdc.gov
            </a>
          </li>
          <li>
            American Animal Hospital Association (AAHA) 2022 Canine Vaccination Guidelines (noncore
            risk-based recommendations; lifestyle calculator)
            <a
              className="underline ml-1"
              href="https://www.aaha.org/resources/2022-aaha-canine-vaccination-guidelines/"
              target="_blank"
              rel="noopener noreferrer"
            >
              aaha.org
            </a>
            {' '}|{' '}
            <a
              className="underline"
              href="https://www.aaha.org/wp-content/uploads/globalassets/02-guidelines/2022-aaha-canine-vaccination-guidelines/resources/2022-aaha-canine-vaccinations-guidelines.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              guideline PDF
            </a>
          </li>
          <li>
            American Veterinary Medical Association (AVMA): Canine influenza for pet owners &amp;
            veterinary resources
            <a
              className="underline ml-1"
              href="https://www.avma.org/resources-tools/pet-owners/petcare/canine-influenza"
              target="_blank"
              rel="noopener noreferrer"
            >
              avma.org
            </a>
          </li>
          <li>
            Cornell Animal Health Diagnostic Center: Canine influenza fact sheets and H3N2 updates
            <a
              className="underline ml-1"
              href="https://www.vet.cornell.edu/animal-health-diagnostic-center/testing/testing-protocols-interpretations/canine-influenza-h3n2-updates"
              target="_blank"
              rel="noopener noreferrer"
            >
              vet.cornell.edu
            </a>
          </li>
          <li>
            Voorhees et al., <em>Emerging Infectious Diseases</em> (2017): Spread of canine influenza
            H3N2 in the United States (Chicago introduction)
            <a
              className="underline ml-1"
              href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5708240/"
              target="_blank"
              rel="noopener noreferrer"
            >
              ncbi.nlm.nih.gov
            </a>
          </li>
          <li>
            Larson et al., <em>Clinical and Vaccine Immunology</em> (2011): Efficacy of an H3N8
            canine influenza vaccine
            <a
              className="underline ml-1"
              href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3122572/"
              target="_blank"
              rel="noopener noreferrer"
            >
              ncbi.nlm.nih.gov
            </a>
          </li>
          <li>
            AVMA News (2009): USDA approval of the first canine influenza vaccine
            <a
              className="underline ml-1"
              href="https://www.avma.org/javma-news/2009-08-01/usda-approves-canine-flu-virus-vaccine"
              target="_blank"
              rel="noopener noreferrer"
            >
              avma.org
            </a>
          </li>
          <li>
            Merck Animal Health (2024): USDA approval notice for an RNA-particle H3N2 vaccine
            <a
              className="underline ml-1"
              href="https://www.merck.com/news/usda-approves-merck-animal-healths-nobivac-nxt-canine-flu-h3n2-the-first-and-only-rna-particle-technology-vaccine-for-canine-influenza/"
              target="_blank"
              rel="noopener noreferrer"
            >
              merck.com
            </a>
          </li>
          <li>
            AVMA: Vaccination side effect basics for pet owners (what to watch for after vaccines)
            <a
              className="underline ml-1"
              href="https://www.avma.org/resources-tools/pet-owners/petcare/vaccinations"
              target="_blank"
              rel="noopener noreferrer"
            >
              avma.org
            </a>
          </li>
          <li>
            Moore et al., <em>JAVMA</em> (2023): Risk factors associated with adverse events after
            vaccination in dogs (large dataset, general canine vaccination)
            <a
              className="underline ml-1"
              href="https://avmajournals.avma.org/view/journals/javma/261/11/javma.23.03.0181.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              avmajournals.avma.org
            </a>
          </li>
        </ul>

        {/* Back link */}
        <Link
          href={`/${locale}/blog`}
          className="underline text-[#2c4a30] font-medium hover:opacity-80"
        >
          ← Back to Blog
        </Link>

        {/* Disclaimer */}
        <p className="text-xs text-gray-500 mt-8">
          This article is educational and shares general guidance for healthy adult dogs. Always
          follow your veterinarian&#39;s advice for your individual pet, especially if your dog has
          pre-existing medical conditions, is pregnant, is immunocompromised, or has a history of
          vaccine reactions. Product availability, strain activity, and facility policies can vary by
          region and time.
        </p>
      </main>
    </>
  );
}
