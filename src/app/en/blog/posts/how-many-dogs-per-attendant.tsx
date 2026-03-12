'use client';

// SEO weakness notes: weak in-article internal linking; likely limited backlinks; schema is only baseline BlogPosting
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function HowManyDogsPerAttendant() {
  const locale = useLocale();

  const title =
    'How Many Dogs per Attendant? Daycare Ratios, Supervision & a Tour Checklist';
  const date = 'July 24, 2025';
  const categories = ['owner', 'daycare'] as const;

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
            <li><a href="#tldr" className="underline hover:opacity-80">TL;DR</a></li>
            <li><a href="#definitions" className="underline hover:opacity-80">Definitions</a></li>
            <li><a href="#risk" className="underline hover:opacity-80">Risk Variables</a></li>
            <li><a href="#training" className="underline hover:opacity-80">Training & Credentials</a></li>
            <li><a href="#benchmarks" className="underline hover:opacity-80">Typical Benchmarks</a></li>
            <li><a href="#regulatory" className="underline hover:opacity-80">Regulatory Landscape</a></li>
            <li><a href="#comparison" className="underline hover:opacity-80">Comparison Table</a></li>
            <li><a href="#tour-checklist" className="underline hover:opacity-80">Owner Tour Checklist</a></li>
            <li><a href="#day-structure" className="underline hover:opacity-80">Day Structure</a></li>
            <li><a href="#faq" className="underline hover:opacity-80">FAQ</a></li>
            <li><a href="#sources" className="underline hover:opacity-80">📚 Sources</a></li>
          </ul>
        </nav>

        {/* TLDR */}
        <section id="tldr" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Short Answer (TL;DR)</h2>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4">
            <p className="mb-3">
              <strong>Ratios are not a single “magic” number.</strong> A posted 1:15 or 1:10 means little
              unless you also know the group’s size and composition, whether staff have <em>line-of-sight</em> to
              all dogs, and how the day is structured to prevent over-arousal. Some places (e.g., Colorado) set
              specific ratio and line-of-sight rules; other jurisdictions provide guidance (e.g., UK), carve-outs
              for 10:1 (e.g., NC), or are still formalizing standards (e.g., MA). Good operators set staffing to
              the dogs in front of them—not just to a sign on the wall.
            </p>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li><strong>Look beyond the number:</strong> ask about line-of-sight, staff experience, spacing, energy mix, intact status, and rest cycles.</li>
              <li><strong>Best practice range:</strong> common safe band is 1:10–1:15 <em>with</em> trained, attentive staff and structured rotations.</li>
              <li><strong>When to walk:</strong> you see “free-for-all” play, no rest periods, poor body-language reading, or one person toggling multiple rooms.</li>
            </ul>
          </div>
        </section>

        {/* DEFINITIONS */}
        <section id="definitions" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Definitions: Ratio, Headcount, Room Population & “Line of Sight”</h2>
          <p className="mb-3">
            <strong>Ratio</strong> is the number of dogs assigned to an actively supervising human in a specific space
            at a given time (e.g., 1 staffer : 12 dogs). <strong>Headcount</strong> is total people on shift. <strong>Room
            population</strong> is how many dogs share a single enclosure or common area. The critical overlay is
            <strong> line-of-sight supervision</strong>—can the attendant directly view all commingled dogs in that space,
            continuously, without obstructions? That requirement is explicit in some rulesets (e.g., Colorado) and
            should be treated as a baseline safety practice everywhere.
          </p>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Why it matters:</strong> 1:12 is safe if one trained person is fully present and can see and reach
            every dog within seconds. The same “1:12” is unsafe if that person is splitting attention across two
            rooms, answering phones, or working behind a corner.
          </div>
        </section>

        {/* RISK VARIABLES */}
        <section id="risk" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Risk Variables That Move the Ratio (Up or Down)</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Dog size & strength mix:</strong> big-dog rooms with rough-and-tumble players generally require tighter ratios than mellow small-dog lounges.</li>
            <li><strong>Energy & arousal:</strong> young adolescents, ball-obsessed dogs, and toy/resource guarders need tighter ratios and structured activities.</li>
            <li><strong>Intact status:</strong> intact males/females, especially around estrus, can shift social dynamics; many facilities remove in-heat dogs from groups and tighten ratios for intact males during high-arousal windows.</li>
            <li><strong>Staff experience & body-language fluency:</strong> trained teams can safely manage more dogs; green teams need fewer.</li>
            <li><strong>Space per dog & room design:</strong> sightlines, multiple gates, barrier spacing, floor traction, and escape routes reduce conflict likelihood.</li>
            <li><strong>Indoor/outdoor dynamics & weather:</strong> heat, ice, or mud can increase irritability and conflict—tighten ratios and shorten sessions.</li>
            <li><strong>Group size itself:</strong> even with the same ratio, a 40-dog group behaves differently than two 20-dog groups—break large rooms into pods.</li>
          </ul>
          <p className="mt-3">
            Operators should actively <em>dial</em> ratios up/down across the day: higher ratios during calm nap
            blocks; tighter ratios during high-arousal transitions (arrivals, pre-lunch, pre-pickup).
          </p>
        </section>

        {/* TRAINING & CREDENTIALS */}
        <section id="training" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Training & Credentials: What Competence Looks Like</h2>
          <p className="mb-3">
            Look for a culture of continuing education and standardized competencies. Strong indicators:
            third-party certifications (e.g., <em>PACCC</em> Provider/Manager/Operator), documented behavior training
            (body-language literacy), and basic emergency response skills (pet first aid/CPR). Facilities should be
            able to show training logs, onboarding modules, and refresh cycles—not just say “we train our staff.”
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>PACCC certifications</strong> (independent exams; Provider/Manager/Operator; scheduled windows each year).</li>
            <li><strong>Pet First Aid/CPR</strong> coursework (e.g., American Red Cross).</li>
            <li><strong>Behavior-forward practices</strong> (Fear Free–informed handling; structured playgroups; low-force tools).</li>
            <li><strong>Escalation protocols</strong> (interruptions, splits, crate-and-rotate, when to end a session, incident reporting).</li>
          </ul>
          <p className="mt-3 text-sm text-gray-700">
            Credentials don’t replace good judgment—but they signal a safety mindset and shared
            vocabulary across the team.
          </p>
        </section>

        {/* TYPICAL BENCHMARKS */}
        <section id="benchmarks" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Typical Benchmarks (and Why One Number Misleads)</h2>
          <p className="mb-3">
            You’ll commonly hear 1:15 and 1:10 in the industry. Each can be safe or unsafe depending on
            context. Some jurisdictions codify a number (e.g., 1:15 with line-of-sight), while others publish
            guidance (e.g., 1:10 minimum; 1:8 for higher standard). Treat these as <em>floors</em>, not automatic
            green lights. A thoughtful operator flexes staffing to the room, not the marketing brochure.
          </p>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Pro move:</strong> During your tour, ask: “How do ratios change across the day? Show me today’s
            staffing plan and room counts for each block.” Then watch a transition in real time.
          </div>
        </section>

        {/* REGULATORY LANDSCAPE */}
        <section id="regulatory" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Regulatory Landscape (High-Level)</h2>
          <p className="mb-3">
            There is no single U.S. national standard for daycare ratios. Regulation is a patchwork of state,
            county, and municipal rules—some with explicit ratios, others with performance standards. A few
            snapshots, as of 2025:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Colorado (PACFA):</strong> line-of-sight supervision and ≤15 dogs per human in each commingled area; ≤60 dogs per single enclosure.</li>
            <li><strong>North Carolina:</strong> 10:1 day-care ratio language appears as a condition for certain rule exemptions (enclosure counts).</li>
            <li><strong>Massachusetts:</strong> “Ollie’s Law” framework is in progress; municipal proposals exist (e.g., Lowell). Verify current local rules.</li>
            <li><strong>UK (for comparison):</strong> national guidance suggests ≤10:1 minimum, 1:8 for higher rating, and 6 m² per dog when calculating capacity.</li>
          </ul>
          <p className="text-sm text-gray-700 mt-3">
            Always verify your locality’s current rules and any facility’s licensing/inspection status.
          </p>
        </section>

        {/* COMPARISON TABLE */}
        <section id="comparison" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Comparison Table: Ratios in Context</h2>
          <p className="mb-3">
            Use this table to translate a posted ratio into real-world expectations. Ratios assume trained staff,
            line-of-sight, and reachable dogs. If any assumption fails, tighten the ratio.
          </p>

          <div className="overflow-x-auto mb-4">
            <table className="min-w-full text-sm border border-[#d9cfc2]">
              <thead className="bg-[#e4dbcb]">
                <tr>
                  <th className="text-left p-2 border-b border-[#d9cfc2]">Scenario</th>
                  <th className="text-left p-2 border-b border-[#d9cfc2]">Group Size</th>
                  <th className="text-left p-2 border-b border-[#d9cfc2]">Energy/Composition</th>
                  <th className="text-left p-2 border-b border-[#d9cfc2]">Space & Sightlines</th>
                  <th className="text-left p-2 border-b border-[#d9cfc2]">Suggested Ratio Band</th>
                  <th className="text-left p-2 border-b border-[#d9cfc2]">Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#d9cfc2]">
                  <td className="p-2">Calm seniors lounge</td>
                  <td className="p-2">8–16</td>
                  <td className="p-2">Low arousal; no toys</td>
                  <td className="p-2">Open room; clear sightlines</td>
                  <td className="p-2">1:10–1:15</td>
                  <td className="p-2">Longer rest blocks; frequent potty walks</td>
                </tr>
                <tr className="border-b border-[#d9cfc2]">
                  <td className="p-2">Mixed medium energy</td>
                  <td className="p-2">10–20</td>
                  <td className="p-2">Adolescents + steady adults</td>
                  <td className="p-2">Two exits; no blind corners</td>
                  <td className="p-2">1:8–1:12</td>
                  <td className="p-2">Structured enrichment; rotate “rowdy” pods</td>
                </tr>
                <tr className="border-b border-[#d9cfc2]">
                  <td className="p-2">High-arousal weather day</td>
                  <td className="p-2">12–18</td>
                  <td className="p-2">Fetch-obsessed; toy interest</td>
                  <td className="p-2">Indoor only; wet entryway</td>
                  <td className="p-2">1:6–1:10</td>
                  <td className="p-2">Shorter blocks; more splits; remove toys</td>
                </tr>
                <tr className="border-b border-[#d9cfc2]">
                  <td className="p-2">Intact males present</td>
                  <td className="p-2">8–14</td>
                  <td className="p-2">Mounting risk</td>
                  <td className="p-2">Clear lines; escape gates</td>
                  <td className="p-2">1:6–1:10</td>
                  <td className="p-2">Short stints; frequent resets; break pairs</td>
                </tr>
                <tr>
                  <td className="p-2">Very large group (maxed room)</td>
                  <td className="p-2">30–60</td>
                  <td className="p-2">Mixed/variable</td>
                  <td className="p-2">Multiple zones; staff per zone</td>
                  <td className="p-2">Meet law (e.g., 1:15) + floor walkers</td>
                  <td className="p-2">Prefer two pods instead of one mega-room</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-sm text-gray-700">
            Remember: these are starting points. Competent teams constantly re-balance rooms.
          </p>
        </section>

        {/* OWNER TOUR CHECKLIST */}
        <section id="tour-checklist" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Owner Tour Checklist: 15 Questions (and What Good Answers Sound Like)</h2>
          <ol className="list-decimal pl-5 space-y-2">
            <li><strong>What’s your live ratio in this room right now?</strong> Good: “1:10. We drop to 1:8 during high-arousal windows and transitions.”</li>
            <li><strong>Do attendants have line-of-sight to all dogs?</strong> Good: “Yes—one person per zone; no blind corners; mirrored panels at the bend.”</li>
            <li><strong>How big is this room and how many dogs do you cap it at?</strong> Good: “~900 sq ft; we cap at 18 for this energy mix.”</li>
            <li><strong>How do you split groups?</strong> Good: “By size and play style; intact males rotate separately during peak hours.”</li>
            <li><strong>What’s your day plan?</strong> Good: “Arrivals → play → nap → enrichment → potty → play → cooldown → pickups.”</li>
            <li><strong>Who trains the staff? How often?</strong> Good: “PACCC-aligned onboarding, quarterly refreshers, Red Cross pet first aid/CPR.”</li>
            <li><strong>How do you interrupt mounting or guarding?</strong> Good: “Name recall → body block → split; we log repeat patterns and adjust pairings.”</li>
            <li><strong>Do you allow toys/food in group?</strong> Good: “Only in curated stations with 1:6 or better ratio and clear exits.”</li>
            <li><strong>What are your intake criteria?</strong> Good: “Behavior eval, vaccination review, health screen, trial day before full days.”</li>
            <li><strong>What’s your incident protocol?</strong> Good: “De-escalate → isolate → first aid → call owners → written report with video if available.”</li>
            <li><strong>What’s your illness policy?</strong> Good: “Immediate isolate, contact tracing by room/time block, cleaning SOPs, vet coordination.”</li>
            <li><strong>Are dogs crated?</strong> Good: “Yes for rests by owner consent; 20–45 minutes with chews; we monitor settle vs stress.”</li>
            <li><strong>What’s your floor traction & noise plan?</strong> Good: “Rubberized floors, acoustic panels, white noise; we avoid echo boxes.”</li>
            <li><strong>Licensing/inspection status?</strong> Good: “Here’s our current license; last inspection report is posted and clean.”</li>
            <li><strong>References?</strong> Good: “Yes—ask these three long-time clients and our partner clinic.”</li>
          </ol>
        </section>

        {/* DAY STRUCTURE */}
        <section id="day-structure" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Day Structure: Rotations, Rests & Enrichment Blocks</h2>
          <p className="mb-3">
            Great ratios become meaningful when paired with a calm, predictable rhythm. Here’s a sample
            schedule for a mid-size facility (two pods running concurrently).
          </p>

          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4">
            <h3 className="font-semibold mb-2">Sample Weekly Enrichment Plan</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Mon:</strong> Sniffaris + cardboard shred stations (no toys in main group).</li>
              <li><strong>Tue:</strong> Mat settle training (2–3 min reps) + recall games in micro-pods.</li>
              <li><strong>Wed:</strong> Texture walks + slow feeder puzzles (supervised individually).</li>
              <li><strong>Thu:</strong> Obstacle course (low jumps, tunnels) in pairs; no racing games.</li>
              <li><strong>Fri:</strong> “Calm carnival”: scatter finds, paw-targeting, easy tricks, photo booth.</li>
            </ul>
          </div>

          <h3 className="text-lg font-semibold mt-4 mb-2">Block Example (Pod A / Pod B)</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>08:00–09:30: Arrivals & soft play (1:10). Split adolescents early if arousal spikes.</li>
            <li>09:30–10:00: Potty walks & water checks (1:8). Clear transitions.</li>
            <li>10:00–10:40: Enrichment stations (1:6 in zone; pods of 4–6 dogs).</li>
            <li>10:40–11:20: Calm social (no toys) (1:10–1:12).</li>
            <li>11:20–12:30: Rest in suites/crates with chews (visual checks every 10–15 min).</li>
            <li>12:30–13:30: Potty & reset; late drop-off evals.</li>
            <li>13:30–14:15: Mat settles + handler engagement (1:8).</li>
            <li>14:15–15:00: Short play pods (1:8–1:10); end early for rowdy pairs.</li>
            <li>15:00–16:30: Pickups; decompressing activities; quieter room soundtrack.</li>
          </ul>

          <p className="mt-3 text-sm text-gray-700">
            Cross-linking for readers: see our{' '}
            <Link href={`/${locale}/blog/dog-daycare-safety-basics`} className="underline">
              Daycare Safety Basics
            </Link>{' '}
            and{' '}
            <Link href={`/${locale}/blog/quiet-nights-boarding-kennels`} className="underline">
              Quiet Nights: Keeping Kennels Calm
            </Link>
            .
          </p>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">Frequently Asked Questions</h2>

          <p className="mb-3">
            <strong>Is 1:15 always safe?</strong><br />
            No. 1:15 can be fine for mellow groups with clear sightlines, or risky for high-arousal adolescents or
            rooms with blind corners. Ratios must flex with conditions.
          </p>

          <p className="mb-3">
            <strong>Is 1:10 automatically “better” than 1:15?</strong><br />
            Often, but not always. A disengaged or over-tasked attendant at 1:10 can be less safe than a trained,
            focused attendant at 1:12. Supervision quality & room design matter.
          </p>

          <p className="mb-3">
            <strong>What’s “line-of-sight” supervision?</strong><br />
            The attendant can directly see every commingled dog and reach them within seconds. Mirrors, glass, and
            layout choices maintain visibility.
          </p>

          <p className="mb-3">
            <strong>Do ratios apply per whole building or per room?</strong><br />
            Safety ratios should be evaluated <em>per enclosure/common area</em>. A single building-wide headcount
            hides thin spots at room level.
          </p>

          <p className="mb-3">
            <strong>Do the best facilities post a single ratio?</strong><br />
            Good operators post a policy but also show a <em>daily staffing plan</em> with block-by-block adjustments.
          </p>

          <p className="mb-3">
            <strong>How do toys affect ratios?</strong><br />
            Toys increase resource guarding and arousal. If used, tighten ratios and run in micro-pods with trained
            handlers and clear exits.
          </p>

          <p className="mb-3">
            <strong>Are intact dogs allowed?</strong><br />
            Many daycares exclude in-heat females and manage intact males with tighter ratios and short sessions.
            Policies vary—ask directly.
          </p>

          <p className="mb-3">
            <strong>Can I rely on certifications?</strong><br />
            Certifications (e.g., PACCC) are strong signals, but watch live handling: calm voice, early interrupts,
            smooth splits, and documented incident response.
          </p>

          <p className="mb-3">
            <strong>What about space per dog?</strong><br />
            More usable square footage, better sightlines, and no choke points support safer groups. Some guidance
            frameworks (e.g., UK) specify minimum space per dog; U.S. rules vary locally.
          </p>

          <p className="mb-3">
            <strong>How should rest work?</strong><br />
            True down-time (20–45 minutes), dimmer light, white noise, cool temps, and chew items. Rest lowers
            cortisol and prevents “overtired cranky” play.
          </p>

          <p className="mb-3">
            <strong>What red flags end my tour?</strong><br />
            One staffer flipping between rooms; chaotic toy chases; punitive tools; no posted training plan;
            unwillingness to show logs or incident reports (redacted).
          </p>

          <p className="mb-3">
            <strong>Do laws require a specific ratio in my state?</strong><br />
            Sometimes. Check state/county/municipal codes and ask the facility for its license and last inspection
            report. When in doubt, call the regulator listed on the license.
          </p>

          <p className="mb-3">
            <strong>What should incident reports include?</strong><br />
            Date/time, room, staff on duty, precipitating factors, intervention steps, injuries (if any), owner
            notifications, and follow-up changes to group management.
          </p>
        </section>

        {/* SOURCES */}
        <section id="sources" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">📚 Sources (Selected)</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            <li>
              Colorado Department of Agriculture – PACFA rules (line-of-sight & 1:15 per enclosure; ≤60 dogs).
              <a href="https://www.sos.state.co.us/CCR/GenerateRulePdf.do?ruleVersionId=454" target="_blank" rel="noopener noreferrer" className="underline ml-1">
                Rule PDF
              </a>
            </li>
            <li>
              UK DEFRA – Dog day care licensing: staffing (≤10:1 min; 1:8 higher standard) & space per dog (6 m²).
              <a href="https://www.gov.uk/government/publications/animal-activities-licensing-guidance-for-local-authorities/dog-day-care-licensing-statutory-guidance-for-local-authorities" target="_blank" rel="noopener noreferrer" className="underline ml-1">
                Guidance
              </a>
            </li>
            <li>
              North Carolina General Statutes – 19A-24: day-care ratio language (≤10:1) related to enclosure restrictions.
              <a href="https://www.ncleg.gov/enactedlegislation/statutes/html/byarticle/chapter_19a/article_3.html" target="_blank" rel="noopener noreferrer" className="underline ml-1">
                Statute
              </a>
            </li>
            <li>
              Massachusetts “Ollie’s Law” (implementation notes/updates).
              <a href="https://www.massanimalcoalition.org/ollies-law/" target="_blank" rel="noopener noreferrer" className="underline ml-1">
                MAC Update
              </a>
              {' '}|{' '}
              <a href="https://massanimalcoalition.org/acom/ollies-law-and-regulation-updates/" target="_blank" rel="noopener noreferrer" className="underline">
                ACO Association Resource
              </a>
              {' '}| Local example (Lowell memo){' '}
              <a href="https://www.lowellma.gov/AgendaCenter/ViewFile/Item/26547" target="_blank" rel="noopener noreferrer" className="underline">
                Proposed Ordinance
              </a>
            </li>
            <li>
              PACCC – Professional Animal Care Certification Council (certification levels & 2025 exam windows).
              <a href="https://paccert.org/" target="_blank" rel="noopener noreferrer" className="underline ml-1">Overview</a>
              {' '}|{' '}
              <a href="https://paccert.org/exam-info/" target="_blank" rel="noopener noreferrer" className="underline">Exam Info</a>
            </li>
            <li>
              American Red Cross – Cat & Dog First Aid (pet first aid/CPR training).
              <a href="https://www.redcross.org/take-a-class/classes/cat-and-dog-first-aid-online/a6R0V0000015EUf.html" target="_blank" rel="noopener noreferrer" className="underline ml-1">
                Course
              </a>
            </li>
          </ul>

          <p className="text-xs text-gray-500 mt-4">
            <strong>Medical & safety disclaimer:</strong> This article is for general education and risk-management
            planning. Laws and best practices change; always verify current regulations and consult your
            veterinarian and local authorities before making care decisions.
          </p>
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
