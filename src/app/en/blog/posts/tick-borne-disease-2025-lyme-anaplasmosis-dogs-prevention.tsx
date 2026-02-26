'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function TicksSurging2025LymeAnaplasmosisDogsPrevention() {
  const locale = useLocale();

  const title =
    'Ticks Are Surging in 2025: Lyme, Anaplasmosis & ER Visits—What That Means for Dogs (State Snapshots, Checklists, and Facility SOPs)';
  const date = 'August 25, 2025';
  const categories = ['owner', 'vet'] as const;

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
          Ticks and tick-borne illnesses are having a big year. In 2025, multiple newsrooms and
          health systems have reported a surge in tick-bite emergency department visits, and
          veterinary data are flagging increases in canine exposure to tick-borne pathogens in parts
          of the country. For dog owners and for boarding/daycare facilities that run outdoor yards
          or trails, this isn&#39;t just a summer headline—it&#39;s an operational reality that touches
          daily routines, client communications, and policy.
        </p>
        <p className="mb-6">
          This deep dive translates the latest public reports and state snapshots into plain-English
          guidance you can act on. We&#39;ll walk through what the surge means for canine Lyme disease
          and anaplasmosis risk, how to build an airtight prevention plan by state and season,
          product choices (monthly orals, 12-week chews, and the new once-yearly veterinary
          injection), grooming and yard SOPs for facilities, and step-by-step checklists owners can
          use at home. We also cover what symptoms warrant a vet visit and how to handle tick
          incidents calmly and effectively.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-3">Quick Answer (Straight to the Point)</h2>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>
            <strong>National picture:</strong> Emergency department visits for tick bites in 2025
            are trending at their highest levels since the late 2010s. Owners should assume higher
            encounter rates during spring–fall and tighten prevention and post-hike checks.
          </li>
          <li>
            <strong>California:</strong> Dogs testing positive for exposure to the bacterium that
            causes anaplasmosis <em>nearly tripled</em> statewide from 2021–2024, with Los Angeles
            County&#39;s canine positivity more than doubling in five years (still lower than northern
            hot spots). That&#39;s a sentinel warning for people and pets.
          </li>
          <li>
            <strong>New York & Northeast:</strong> Lab submissions of ticks removed from people have
            about doubled vs. 2024 in early 2025, and roughly a third of tested ticks are carrying
            at least one pathogen. Co-infections are not rare.
          </li>
          <li>
            <strong>Southeast/Mid-Atlantic:</strong> Health systems and media in Virginia and
            Georgia highlight record or near-record tick-bite ER visits this summer—expect brisk
            activity through early fall and a smaller secondary spike later.
          </li>
          <li>
            <strong>For dogs:</strong> Year-round prevention (monthly orals, 12-week chews, or the
            once-yearly veterinary injection) + daily tick checks after outdoor exposure + fast,
            correct tick removal are the pillars. Talk to your veterinarian about a Lyme vaccine if
            you live or travel in high-risk areas.
          </li>
          <li>
            <strong>For facilities:</strong> Formalize grooming and yard SOPs: permethrin-treated
            uniforms, trail-edge avoidance, systematic tick checks, incident logging, and region-
            specific product requirements in your client policy.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-3">State Snapshots You Can Use</h2>
        <p className="mb-4">
          State risk isn&#39;t uniform. Microclimates, tick species mix, local wildlife, and owner
          habits matter. These snapshots pair public reporting with practical implications for dogs
          and facilities.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-2">California (Western Blacklegged Tick; Anaplasmosis &amp; Lyme)</h3>
        <p className="mb-4">
          California&#39;s big 2025 story: canine exposure to <em>Anaplasma</em> bacteria has risen
          sharply. Statewide, the share of dogs testing positive for exposure nearly tripled between
          2021 and 2024. In Los Angeles County (moderate risk), about 1.2% of dogs now test positive
          for anaplasma exposure—more than double five years ago—while northern coastal hot spots can
          run higher. The same western blacklegged tick that spreads anaplasmosis spreads Lyme. In
          practice, this means SoCal owners should stop treating ticks as a rare mountain-trail
          issue; even urban-adjacent canyons, foothills, and beaches with brush corridors can harbor
          ticks. Annual prevention is appropriate, with a spring and fall emphasis.
        </p>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>
            <strong>Dogs as sentinels:</strong> Veterinary testing often detects regional risk
            earlier than human data (dogs are outdoors daily and tested more routinely). Treat rising
            canine positivity as a public-health &quot;heads up&quot; for households and facilities.
          </li>
          <li>
            <strong>Facility note (CA):</strong> Add a tick-check step for all dogs returning from
            outdoor play yards or canyon walks; log finds and notify owners. Consider mandating a
            veterinary-grade preventive year-round and posting trail maps with &quot;edge risk&quot; zones.
          </li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-2">New York &amp; the Northeast (Deer Tick; Lyme, Anaplasmosis, Babesiosis)</h3>
        <p className="mb-4">
          New York laboratories report roughly double the number of ticks submitted by the public in
          the first half of 2025 vs. 2024, with ~31% of tested ticks carrying at least one pathogen.
          Co-infections (e.g., Lyme + anaplasma or babesiosis) occur often enough to complicate
          diagnosis and prolong recovery. For dog owners, this means consistent preventives and a
          habit of fingertip tick checks around ear fringes, collars, armpits, groin, and between
          toes after every yard session or wooded walk—not just hiking days.
        </p>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>
            <strong>Seasonality:</strong> Risk peaks spring–early summer and again in fall, but mild
            winters and leaf-littered yards keep background risk alive in many neighborhoods.
          </li>
          <li>
            <strong>Facility note (NY):</strong> Yard protocols matter: leaf-litter removal,
            perimeter mulch barriers, trail-edge avoidance during group walks, and a &quot;check-scan-log&quot;
            routine after outdoor time. Consider a Lyme vaccine policy recommendation for frequently
            boarding dogs living along the Hudson Valley or on Long Island.
          </li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-2">Virginia, Georgia &amp; the Mid-Atlantic/Southeast (Multiple Species; Lone Star Tick Prominent)</h3>
        <p className="mb-4">
          Health systems and media in the Mid-Atlantic and Southeast report a surge in tick-bite ER
          visits this summer, with the Northeast showing the highest per-capita visit rates and the
          South not far behind. Virginia experts point to warm, humid stretches, favorable winters,
          and abundant small mammals (rodent &amp; bird cycles) as drivers. In Georgia, local
          reporting using CDC data frames 2025 as the worst year for tick-bite ER visits since 2019.
          For dogs, lone star ticks add risks like <em>Ehrlichia</em> infections and, for people,
          alpha-gal syndrome.
        </p>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>
            <strong>Species mix:</strong> Expect deer ticks in wooded edges, American dog ticks in
            open fields, and lone star ticks in brush/edge habitats—each with different pathogen
            profiles. That mix changes county-to-county.
          </li>
          <li>
            <strong>Facility note (VA/GA):</strong> Emphasize first-week caution with any new
            preventive (monthly, 12-week, or injection), since some labels specify several days to
            reach full tick kill after attachment. For nature-trail daycares, route walks away from
            brushy trail margins and rotate high-traffic play areas to reduce habitat.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-3">Diseases to Watch in Dogs (What They Look Like)</h2>
        <p className="mb-4">
          Tick-borne diseases in dogs share non-specific &quot;flu-like&quot; starts—fever, lethargy,
          appetite drop, and shifting leg lameness—but details differ. This isn&#39;t exhaustive, but
          it covers what owners and facilities most commonly encounter.
        </p>

        <h3 className="text-xl font-semibold mt-4 mb-2">Lyme Disease (Borreliella burgdorferi)</h3>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>
            <strong>Early signs:</strong> fever, lethargy, joint pain or shifting lameness, swollen
            lymph nodes. Some dogs remain subclinical but test positive later.
          </li>
          <li>
            <strong>Timing:</strong> Transmission typically requires prolonged attachment (classically
            ≥36–48 hours). That&#39;s why daily checks after outdoor exposure are high-yield.
          </li>
          <li>
            <strong>Complications:</strong> Rarely, Lyme nephritis (kidney involvement) can be
            life-threatening; prompt veterinary care matters when you see lethargy + vomiting + loss
            of appetite and changes in urination.
          </li>
          <li>
            <strong>Prevention:</strong> Veterinary preventives + daily tick checks; discuss the
            canine Lyme vaccine if risk is high where you live or travel.
          </li>
        </ul>

        <h3 className="text-xl font-semibold mt-4 mb-2">Anaplasmosis (Anaplasma phagocytophilum)</h3>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>
            <strong>Signs:</strong> fever, lethargy, low appetite, joint pain; sometimes neurologic
            signs. Many dogs are asymptomatic but antibody-positive.
          </li>
          <li>
            <strong>Where:</strong> Northeast, Upper Midwest, West Coast (western blacklegged tick).
            California dogs are increasingly testing positive for exposure.
          </li>
          <li>
            <strong>Prevention:</strong> Same as Lyme. If your region has both pathogens, consider
            products with strong tick efficacy and keep up daily checks.
          </li>
        </ul>

        <h3 className="text-xl font-semibold mt-4 mb-2">Ehrlichiosis, Babesiosis &amp; Others</h3>
        <p className="mb-4">
          The lone star tick is a major vector for <em>Ehrlichia</em>; symptoms can include fever,
          bruising/bleeding tendencies, and low platelets. Babesiosis is a red-blood-cell parasite
          that can cause anemia and weakness. Rocky Mountain spotted fever and tularemia are
          regionally important. Your veterinarian will guide testing based on signs and what ticks
          in your county carry.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-3">Prevention Options for Dogs (Monthly, 12-Week, or Once-Yearly)</h2>
        <p className="mb-4">
          The best product is the one you&#39;ll actually use on time, year-round. Here&#39;s a
          high-level map (work with your veterinarian for the exact choice, dosing, and scheduling):
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border border-[#d9cfc2]">
            <thead className="bg-[#e4dbcb]">
              <tr>
                <th className="text-left p-2">Option</th>
                <th className="text-left p-2">How Often</th>
                <th className="text-left p-2">What It Covers</th>
                <th className="text-left p-2">Pros</th>
                <th className="text-left p-2">Trade-Offs</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-[#d9cfc2]">
                <td className="p-2">Monthly oral (isoxazoline)</td>
                <td className="p-2">Every month</td>
                <td className="p-2">Fleas &amp; several tick species</td>
                <td className="p-2">Flexible; easy to pair with a monthly heartworm plan</td>
                <td className="p-2">Missed doses reduce protection; GI upset in some dogs</td>
              </tr>
              <tr className="border-t border-[#d9cfc2]">
                <td className="p-2">12-week oral (fluralaner chew)</td>
                <td className="p-2">Every 12 weeks (≈4 doses/year)</td>
                <td className="p-2">Fleas &amp; ticks with long dosing interval</td>
                <td className="p-2">Fewer doses per year; strong tick efficacy</td>
                <td className="p-2">Still owner-administered; separate heartworm prevention</td>
              </tr>
              <tr className="border-t border-[#d9cfc2]">
                <td className="p-2">Once-yearly vet injection</td>
                <td className="p-2">Every 12 months (8 months if lone star risk)</td>
                <td className="p-2">Fleas; multiple tick species</td>
                <td className="p-2">Eliminates missed doses; bathing/swimming irrelevant</td>
                <td className="p-2">Clinic-administered; separate heartworm prevention; not for cats</td>
              </tr>
              <tr className="border-t border-[#d9cfc2]">
                <td className="p-2">Monthly topicals</td>
                <td className="p-2">Every month</td>
                <td className="p-2">Fleas; some tick species</td>
                <td className="p-2">Alternative to orals; useful for GI-sensitive dogs</td>
                <td className="p-2">Bathing/swimming can affect some; owner technique matters</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mb-6">
          New in 2025, veterinarians have access to a long-acting, extended-release injection that
          covers fleas and multiple tick species for up to a year (8 months for lone star ticks).
          This is a strong compliance tool for households that struggle with monthly schedules; talk
          to your clinic about eligibility and timing, and remember you still need a heartworm plan.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-3">Owner Playbook: Monthly Prevention &amp; Daily Habits</h2>
        <h3 className="text-xl font-semibold mt-4 mb-2">Month-by-Month Checklist</h3>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li><strong>January–February:</strong> Do not pause prevention; set digital reminders for doses.</li>
          <li>
            <strong>March–April:</strong> Spring spike begins. Add a nightly fingertip &quot;tick tour&quot;
            after yard time; schedule a spring wellness exam and ask if a Lyme vaccine is appropriate.
          </li>
          <li>
            <strong>May–July:</strong> Peak season. Carry a tick key/tweezers on trail days; pre-treat
            hiking clothes with permethrin (human clothing, not skin).
          </li>
          <li>
            <strong>August–October:</strong> Secondary surge. Keep lawn cut; bag leaves; clear brushy
            trail edges from your regular walking routes.
          </li>
          <li>
            <strong>November–December:</strong> Keep doses going; review next-year plan with your vet,
            including whether the once-yearly injection fits your household.
          </li>
        </ul>

        <h3 className="text-xl font-semibold mt-4 mb-2">Daily &amp; Weekly Routine</h3>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>
            <strong>Fingertip tick tour:</strong> Ears (inside/outside), collar line, armpits, groin,
            under tail, between toes. Use bright light and part fur to the skin.
          </li>
          <li>
            <strong>Bath &amp; brush cadence:</strong> Post-trail rinse and undercoat rake for
            thick-coated breeds; blow-dry low/medium to lift fur and spot attached ticks.
          </li>
          <li>
            <strong>Gear staging:</strong> Keep tweezers/tick key + alcohol wipes by the door;
            store a small &quot;tick bag&quot; in the car for trail days.
          </li>
          <li>
            <strong>Removal method:</strong> Steady upward pull with fine tweezers at skin level.
            No oils, matches, or smearing. Disinfect skin; bag the tick for reference if your vet
            requests it. Monitor the site for redness or swelling.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-3">Boarding &amp; Daycare SOPs (Yards, Trails, Grooming)</h2>
        <p className="mb-4">
          Facilities succeed when prevention and communication are standardized. Below is a practical
          SOP set you can copy and adapt to your property and region.
        </p>

        <h3 className="text-xl font-semibold mt-4 mb-2">Policy &amp; Client Communications</h3>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>
            <strong>Prevention requirement:</strong> Confirm year-round veterinary prevention for all
            dogs. Allow monthly orals, 12-week chews, or the once-yearly injection (note lone star
            caveat at 8 months). Record product name and &quot;next due&quot; date.
          </li>
          <li>
            <strong>Regional clause:</strong> If you operate in lone star tick regions, set &quot;next due&quot;
            reminders to 8 months for the injection unless the pet&#39;s veterinarian specifies 12.
          </li>
          <li>
            <strong>First-week ramp:</strong> For any new product start, staff perform extra tick
            checks for 7 days (some labels require several days to reach full tick kill).
          </li>
          <li>
            <strong>Incident logging:</strong> Create a simple tick-log (date, dog, location found,
            product used, last dose date); share a brief end-of-day note if a tick was removed.
          </li>
        </ul>

        <h3 className="text-xl font-semibold mt-4 mb-2">Yard &amp; Trail Operations</h3>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>
            <strong>Habitat reduction:</strong> Weekly leaf-litter removal, 3-foot mulch or gravel
            buffer along fence lines, trim shrubs back from play areas, elevate woodpiles.
          </li>
          <li>
            <strong>Trail routing:</strong> Avoid brushy trail edges; keep dogs centered; use
            permethrin-treated staff pants/socks (follow label; never apply permethrin to pets).
          </li>
          <li>
            <strong>Rotation:</strong> Rotate high-traffic lawn zones; rest/heal worn edges that
            attract small mammals. Close overflow areas after storms until dry.
          </li>
          <li>
            <strong>Professional treatments:</strong> Coordinate with licensed applicators for
            perimeter sprays when appropriate; schedule after-hours with re-entry times posted.
          </li>
        </ul>

        <h3 className="text-xl font-semibold mt-4 mb-2">Grooming Line SOP (Return From Yard/Trail)</h3>
        <ol className="list-decimal pl-5 space-y-3 mb-6">
          <li>Hang leashes; visual scan of ear fringes, collar line, and armpits.</li>
          <li>Use undercoat rake for double coats; part fur with a blunted rat-tail comb to skin.</li>
          <li>If tick seen: remove with tweezers; disinfect; place in bag with date/dog/location.</li>
          <li>Log in tick register; text owner if enrolled in alerts; flag on day sheet.</li>
          <li>Sanitize station tools between dogs; launder towels daily on hot + high heat.</li>
        </ol>

        <h2 className="text-2xl font-semibold mt-10 mb-3">A Note on People (Owners and Staff)</h2>
        <p className="mb-4">
          Tick risk runs in parallel for people and pets. Use permethrin-treated clothing for staff,
          repellent on exposed skin (per label), and the same &quot;Avoid, Inspect, Remove&quot; routine
          after outdoor shifts. Prompt removal reduces transmission risk for several pathogens.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-3">When to Call the Vet (Dogs)</h2>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>Fever, lethargy, limping or shifting leg lameness, or a sustained appetite drop.</li>
          <li>Bruising/bleeding, pale gums, or collapse (urgent).</li>
          <li>
            A tick attached &gt;36–48 hours by your estimate, or any tick with swelling/redness that
            worsens over 24–48 hours.
          </li>
          <li>Vomiting or diarrhea that accompanies other systemic signs.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-3">FAQ (Owner-Style Questions, Clinic-Style Answers)</h2>
        <h3 className="text-xl font-semibold mt-4 mb-2">Do indoor dogs really need prevention?</h3>
        <p className="mb-4">
          Yes—ticks hitchhike on people, other pets, and wildlife. Many &quot;indoor only&quot; dogs have
          yard access or ride in cars to parks. The point is not perfection—it&#39;s reducing risk over
          thousands of exposures in a year.
        </p>

        <h3 className="text-xl font-semibold mt-4 mb-2">Is a Lyme vaccine worth it?</h3>
        <p className="mb-4">
          If you live in, or regularly visit, endemic areas (Northeast, Upper Midwest, pockets of the
          West Coast), ask your veterinarian. Vaccines don&#39;t replace preventives or daily checks,
          but they add a layer of protection for dogs with regular exposure.
        </p>

        <h3 className="text-xl font-semibold mt-4 mb-2">Should I switch products during a surge?</h3>
        <p className="mb-4">
          Surge years magnify the cost of missed doses. If compliance is your weak spot, discuss the
          once-yearly veterinary injection with your clinic. If your dog tolerates monthly or 12-week
          orals well and you&#39;re consistent, staying the course is fine. There is no perfect product;
          there is a perfect routine for your household and region.
        </p>

        <h3 className="text-xl font-semibold mt-4 mb-2">We found a tick on day 2 of boarding—what now?</h3>
        <p className="mb-4">
          Facilities should remove it correctly, log it, disinfect, and notify you with the location
          and a photo. Your veterinarian may recommend watchful waiting or a single antibiotic dose
          in some high-risk human scenarios; in dogs, decisions are individualized. Expect clear
          documentation either way.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-3">Key Takeaways</h2>
        <ul className="list-disc pl-5 space-y-2 mb-10">
          <li>
            2025 is a high-activity tick year nationally, with ER visits for bites up and multiple
            states reporting surges.
          </li>
          <li>
            California&#39;s rise in canine anaplasma exposure is a sentinel for human and pet risk,
            even in counties that historically felt &quot;low risk.&quot;
          </li>
          <li>
            Do the basics extremely well: year-round veterinary preventives + fingertip checks after
            outdoor time + calm, correct removal.
          </li>
          <li>
            Facilities should formalize prevention policy, yard &amp; trail SOPs, a first-week ramp
            after new product starts, and incident logging with owner notifications.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-3">References &amp; Further Reading</h2>
        <ul className="list-disc pl-5 space-y-2 mb-10">
          <li>
            Los Angeles Times (Aug 18, 2025): California dogs increasingly exposed to tick-borne
            bacteria (anaplasmosis &amp; Lyme); canine positivity trends and CAPC context.{' '}
            <a
              className="underline"
              href="https://www.latimes.com/environment/story/2025-08-18/california-dogs-increasingly-test-positive-for-exposure-to-tickborne-bacteria"
              target="_blank"
              rel="noopener noreferrer"
            >
              latimes.com
            </a>
          </li>
          <li>
            11Alive (July 9, 2025): CDC data show 2025 tick-bite ER visits tracking worst since
            2019; national perspective.{' '}
            <a
              className="underline"
              href="https://www.11alive.com/article/news/nation-world/tick-bites-er-increase-across-us/507-fab78c44-640a-4146-9310-8838e0158a85"
              target="_blank"
              rel="noopener noreferrer"
            >
              11alive.com
            </a>
          </li>
          <li>
            VCU Health (July 16, 2025): Why there&#39;s a national surge in ED visits for tick bites
            (Q&amp;A; Virginia context; seasonality and climate factors).{' '}
            <a
              className="underline"
              href="https://www.vcuhealth.org/news/why-theres-a-national-surge-in-ed-visits-because-of-tick-bites/"
              target="_blank"
              rel="noopener noreferrer"
            >
              vcuhealth.org
            </a>
          </li>
          <li>
            Times Union (July 4, 2025): Expert says NY bound to see increasing tick-borne disease in
            2025 (tick submissions doubled; ~31% pathogen-positive; co-infections).{' '}
            <a
              className="underline"
              href="https://www.timesunion.com/news/article/experts-say-take-precaution-amid-growing-20416041.php"
              target="_blank"
              rel="noopener noreferrer"
            >
              timesunion.com
            </a>
          </li>
          <li>
            CDC Tick Bite Data Tracker (methodology &amp; regional trends; updated weekly).{' '}
            <a
              className="underline"
              href="https://www.cdc.gov/ticks/data-research/facts-stats/tick-bite-data-tracker.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              cdc.gov
            </a>
          </li>
          <li>
            FYI—New in 2025: FDA CVM update on the once-yearly flea &amp; tick injection for dogs
            (Bravecto Quantum) referenced for prevention planning.{' '}
            <a
              className="underline"
              href="https://www.fda.gov/animal-veterinary/cvm-updates/fda-approves-first-long-acting-flea-and-tick-treatment-dogs"
              target="_blank"
              rel="noopener noreferrer"
            >
              fda.gov
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
          This article is for general information and does not replace professional veterinary care.
          Always consult your veterinarian about tick prevention, vaccines, and treatment decisions,
          especially if your dog has underlying health conditions or a history of medication
          sensitivities.
        </p>
      </main>
    </>
  );
}
