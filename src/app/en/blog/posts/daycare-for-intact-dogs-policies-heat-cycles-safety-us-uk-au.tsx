'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function DaycareForIntactDogsPolicies() {
  const locale = useLocale();

  return (
    <>

      <article className="mx-auto max-w-3xl px-4 py-10">
        {/* Category pills */}
        <nav aria-label="Categories" className="mb-6 flex flex-wrap gap-2">
          <span className="rounded-full border px-3 py-1 text-sm">Boarding &amp; Daycare</span>
          <span className="rounded-full border px-3 py-1 text-sm">Operations</span>
          <span className="rounded-full border px-3 py-1 text-sm">Safety</span>
          <span className="rounded-full border px-3 py-1 text-sm">Policy</span>
        </nav>

        <h1 className="mb-3 text-3xl font-bold">
          Daycare for Intact Dogs: Policies, Heat Cycles &amp; Safety (U.S. + UK/AU Perspective)
        </h1>

        <p className="mb-8 text-base text-gray-700">
          Many modern dog daycares serve a mixed population of spayed/neutered and intact dogs. The topic is often
          emotional &mdash; owners worry about fairness and socialization, facilities worry about risk, pregnancy,
          and insurance exposure. This guide distills practical experience into a clear framework for operators and
          offers transparent expectations for owners. It covers policy choices, heat-cycle management, grouping logic,
          staffing, incident prevention, legal/insurance considerations, and day-to-day scripts that keep teams aligned.
          The aim is consistent safety with humane, professional handling across the U.S., the UK, and Australia.
        </p>

        {/* Anchor nav */}
        <nav aria-label="On this page" className="mb-8 rounded-xl border p-4">
          <p className="mb-2 font-semibold">On this page</p>
          <ul className="list-inside list-disc space-y-1">
            <li><a href="#tldr" className="underline">TL;DR</a></li>
            <li><a href="#why" className="underline">Why This Matters</a></li>
            <li><a href="#policy-models" className="underline">Policy Models You Can Choose</a></li>
            <li><a href="#heat-cycles" className="underline">Heat Cycles: Detection, Windows &amp; Exclusion</a></li>
            <li><a href="#grouping" className="underline">Grouping &amp; Yard Design for Intact Dogs</a></li>
            <li><a href="#staffing" className="underline">Staffing, Ratios &amp; Supervision</a></li>
            <li><a href="#behavior" className="underline">Behavior Flags &amp; When to Pause Daycare</a></li>
            <li><a href="#sops" className="underline">SOPs: Intake, Daily Checks, Emergencies</a></li>
            <li><a href="#legal" className="underline">Legal, Insurance &amp; Waiver Language</a></li>
            <li><a href="#regional" className="underline">Regional Notes: U.S. vs UK/AU</a></li>
            <li><a href="#owner" className="underline">Owner Communication &amp; Email Templates</a></li>
            <li><a href="#faq" className="underline">FAQ</a></li>
            <li><a href="#disclaimer" className="underline">Disclaimer</a></li>
          </ul>
        </nav>

        {/* TL;DR */}
        <section id="tldr" className="mb-10">
          <h2 className="mb-3 text-2xl font-semibold">TL;DR</h2>
          <div className="rounded-lg border p-4">
            <ul className="list-inside list-disc space-y-2">
              <li>
                It is possible to operate mixed-intact daycare safely with clear policy choices: either separated
                playgroups or limited-mix with strict rules. The safest baseline is <strong>separate intact groups</strong>
                whenever capacity allows.
              </li>
              <li>
                Females in heat (and for a buffer before/after) should not attend. The minimum exclusion window is
                <strong> 21 days from first signs</strong>; many facilities choose <strong>28 days</strong> to be safe.
              </li>
              <li>
                Intact males often increase mounting, urine marking, and competitiveness. Use <strong>smaller groups</strong>,
                <strong>higher supervision</strong>, and <strong>structured breaks</strong>.
              </li>
              <li>
                Build decisions into SOP checklists and waivers; train staff on body-language thresholds and fast
                interventions. Document behavior and communicate consistently with owners.
              </li>
              <li>
                UK/AU terminology: use &ldquo;licence&rdquo; (facility) and align with local codes; insurers may have
                specific conditions for intact populations. Always confirm with your underwriter.
              </li>
            </ul>
          </div>
        </section>

        {/* Why */}
        <section id="why" className="mb-10">
          <h2 className="mb-3 text-2xl font-semibold">Why This Matters</h2>
          <p className="mb-4">
            Demand for daycare has grown across urban and suburban regions, and many owners delay neutering/spaying
            for health or breeding reasons. Daycare supports exercise, enrichment, and social learning, but intact
            status changes risk in predictable ways. Policies must reflect these realities without stigmatizing
            owners or dogs. Clear rules protect the whole group, reduce staff stress, and prevent avoidable incidents.
          </p>
        </section>

        {/* Policy Models */}
        <section id="policy-models" className="mb-10">
          <h2 className="mb-3 text-2xl font-semibold">Policy Models You Can Choose</h2>
          <div className="rounded-lg border p-4 mb-6">
            <h3 className="mb-2 text-xl font-semibold">Model A: Spayed/Neutered Only</h3>
            <p className="mb-2">
              Lowest risk, simplest staffing, and consistent insurance acceptance. Clear to communicate. Downsides:
              excludes a subset of clients and can be unpopular in some markets.
            </p>
          </div>

          <div className="rounded-lg border p-4 mb-6">
            <h3 className="mb-2 text-xl font-semibold">Model B: Mixed but Separated</h3>
            <p className="mb-2">
              Accept intact dogs but <strong>always</strong> run them in separate playgroups by size/energy, never
              with in-heat females. This is the safest mixed model. Requires adequate space and staff.
            </p>
          </div>

          <div className="rounded-lg border p-4">
            <h3 className="mb-2 text-xl font-semibold">Model C: Limited-Mix with Strict Rules</h3>
            <p className="mb-2">
              Intact dogs may join neutered groups <em>only</em> if screening confirms low arousal, minimal marking,
              and good recall. Hard limits on group size, tighter ratios, and immediate &ldquo;bench&rdquo; rules after
              mounting/targeting. Highest operational complexity; use carefully.
            </p>
          </div>
        </section>

        {/* Heat Cycles */}
        <section id="heat-cycles" className="mb-10">
          <h2 className="mb-3 text-2xl font-semibold">Heat Cycles: Detection, Windows &amp; Exclusion</h2>
          <p className="mb-4">
            A typical estrus cycle lasts 2&ndash;3 weeks, with proestrus signs (swelling, spotting, scent changes)
            preceding estrus. Even before visible bleeding, scent shifts can trigger intense interest from males.
            For daycare safety:
          </p>
          <ul className="list-inside list-disc space-y-2">
            <li><strong>Exclusion window:</strong> at least 21 days from the first signs; 28 days is safer.</li>
            <li>
              <strong>Pre-/post-buffers:</strong> do not admit the week before a predicted cycle and for 7 days after the
              exclusion window if scent interest persists in the yard.
            </li>
            <li>
              <strong>Owner duty to disclose:</strong> require written confirmation of heat status in the intake form and
              during each check-in. Failure to disclose is grounds for suspension under the waiver.
            </li>
          </ul>
          <p className="mt-4">
            Have staff trained to spot swelling, scent-driven crowding, and persistent tail-flagging. If any are noted,
            remove the dog to a quiet area, call the owner, and arrange pickup. Document the observation with time and
            staff initials.
          </p>
        </section>

        {/* Grouping */}
        <section id="grouping" className="mb-10">
          <h2 className="mb-3 text-2xl font-semibold">Grouping &amp; Yard Design for Intact Dogs</h2>
          <p className="mb-4">
            Group composition beats breed stereotypes. Prioritize <strong>size, age, energy, and arousal level</strong>.
            Intact males often benefit from smaller, calmer groups with structured activities. Practical steps:
          </p>
          <ul className="list-inside list-disc space-y-2">
            <li><strong>Physical barriers:</strong> double-gated entries, sightline breaks, and multiple yards.</li>
            <li>
              <strong>Rotation cadence:</strong> schedule <em>shorter</em> play blocks (e.g., 20&ndash;30 minutes) for intact
              groups with structured cool-downs.
            </li>
            <li>
              <strong>Enrichment &gt; chaos:</strong> scent work, scatter feeding (controlled), and loose-leash laps reduce
              fixation and mounting opportunities.
            </li>
            <li>
              <strong>Marking mitigation:</strong> frequent yard mopping and spot rinses; intact groups produce more scent
              marking, so cleaning cadence matters.
            </li>
          </ul>
        </section>

        {/* Staffing */}
        <section id="staffing" className="mb-10">
          <h2 className="mb-3 text-2xl font-semibold">Staffing, Ratios &amp; Supervision</h2>
          <p className="mb-4">
            The &ldquo;right&rdquo; ratio depends on dog size, arousal, weather, and yard design. For intact-dog groups,
            adopt tighter ratios than for fully neutered play:
          </p>
        <ul className="list-inside list-disc space-y-2">
            <li><strong>Small-calm group:</strong> 1 staff : 8&ndash;10 dogs (only if historically low arousal).</li>
            <li><strong>Medium-mixed energy:</strong> 1 : 6&ndash;8.</li>
            <li><strong>Large/intense group:</strong> 1 : 4&ndash;6, with float support nearby.</li>
          </ul>
          <p className="mt-4">
            Train handlers to intervene <em>early</em> on escalating play: cutoff signals (T-shapes, head-over-neck),
            fixed stares, crowding, and mounting. Keep slip leads and &ldquo;reset pens&rdquo; accessible. Log
            interventions to spot patterns.
          </p>
        </section>

        {/* Behavior */}
        <section id="behavior" className="mb-10">
          <h2 className="mb-3 text-2xl font-semibold">Behavior Flags &amp; When to Pause Daycare</h2>
          <p className="mb-4">
            A dog can be lovely at home yet struggle in group play. For intact populations, set clear thresholds:
          </p>
          <ul className="list-inside list-disc space-y-2">
            <li>
              <strong>Auto-pause (2 weeks):</strong> repeated mounting despite redirects; persistent targeting of one dog;
              frantic fence-running; uncontrolled urine marking that agitates the group.
            </li>
            <li>
              <strong>Escalation path:</strong> pause &rarr; training referral &rarr; re-assessment in a smaller play set.
            </li>
            <li>
              <strong>Permanent removal:</strong> fight with punctures; redirected aggression on staff; guarding of gates or
              water in ways that resist training.
            </li>
          </ul>
        </section>

        {/* SOPs */}
        <section id="sops" className="mb-10">
          <h2 className="mb-3 text-2xl font-semibold">SOPs: Intake, Daily Checks, Emergencies</h2>
          <div className="rounded-lg border p-4 mb-6">
            <h3 className="mb-2 text-xl font-semibold">Intake &amp; Screening</h3>
            <ol className="list-inside list-decimal space-y-2">
              <li>Collect intact status, last heat date (if female), and recent behavior history.</li>
              <li>Require proof of core vaccines; add kennel cough and, where applicable, canine influenza.</li>
              <li>Run a structured temperament test in a quiet yard before group placement.</li>
            </ol>
          </div>

          <div className="rounded-lg border p-4 mb-6">
            <h3 className="mb-2 text-xl font-semibold">Daily Heat Check</h3>
            <ol className="list-inside list-decimal space-y-2">
              <li>Visual check for vulvar swelling or discharge during check-in.</li>
              <li>Ask owners to confirm &ldquo;no signs of heat in the last 28 days&rdquo; and initial the form.</li>
              <li>Handlers alert leads if intact males fixate or if crowding increases near a female.</li>
            </ol>
          </div>

          <div className="rounded-lg border p-4">
            <h3 className="mb-2 text-xl font-semibold">Emergency Response</h3>
            <ol className="list-inside list-decimal space-y-2">
              <li>Break up conflict safely; move dogs to separate pens; assess for injuries.</li>
              <li>Photograph any wounds; document timeline and witnesses; call owners.</li>
              <li>Complete an incident report and update behavior flags before next visit.</li>
            </ol>
          </div>
        </section>

        {/* Legal */}
        <section id="legal" className="mb-10">
          <h2 className="mb-3 text-2xl font-semibold">Legal, Insurance &amp; Waiver Language</h2>
          <p className="mb-4">
            Animal-business insurers sometimes attach conditions to intact populations (supervision levels, separation
            of in-heat females, documented owner disclosures). Work directly with your underwriter; put any conditions
            into the staff handbook and client waiver.
          </p>
          <div className="rounded-lg border p-4">
            <h3 className="mb-2 text-xl font-semibold">Sample Waiver Clause (Owner Disclosure)</h3>
            <p className="mb-2 text-sm">
              &ldquo;Client confirms that their dog is intact and, if female, is not currently in heat nor within 28 days
              of a heat cycle. Client agrees to notify Facility of any heat-cycle signs immediately and understands that
              Facility will decline or pause services during that period to protect all dogs.&rdquo;
            </p>
            <h3 className="mb-2 text-xl font-semibold">Sample Policy Clause (Facility Right to Pause)</h3>
            <p className="text-sm">
              &ldquo;Facility may remove any dog from group play at its discretion if behaviors such as mounting, targeting,
              or scent-marking materially increase group risk. Facility will communicate promptly with Client and may
              require training or private-play alternatives.&rdquo;
            </p>
          </div>
          <p className="mt-4">
            <strong>U.S.:</strong> policies are business-driven; check state kennel/daycare rules and local zoning.
            <strong> UK/AU:</strong> licensing/licencing frameworks may specify staffing levels and record-keeping. Align
            SOPs with local guidance and keep logs for inspections.
          </p>
        </section>

        {/* Regional */}
        <section id="regional" className="mb-10">
          <h2 className="mb-3 text-2xl font-semibold">Regional Notes: U.S. vs UK/AU</h2>
          <ul className="list-inside list-disc space-y-2">
            <li>
              <strong>U.S.:</strong> Policies vary by business and insurer. Many facilities accept intact males with
              separation rules; females in heat are universally excluded.
            </li>
            <li>
              <strong>United Kingdom:</strong> Local authority <em>licence</em> conditions and DEFRA guidance emphasize
              supervision, grouping records, and incident logging. Use UK spelling in owner materials to build trust.
            </li>
            <li>
              <strong>Australia:</strong> Council requirements vary by state/territory. Emphasis on heat exclusions,
              sturdy fencing, and shade/water provisions in high temperatures.
            </li>
          </ul>
        </section>

        {/* Owner communication */}
        <section id="owner" className="mb-10">
          <h2 className="mb-3 text-2xl font-semibold">Owner Communication &amp; Email Templates</h2>
          <div className="rounded-lg border p-4 mb-6">
            <h3 className="mb-2 text-xl font-semibold">Heat-Cycle Reminder (48 Hours Before Booking)</h3>
            <p className="text-sm">
              &ldquo;Friendly reminder: if your female dog shows any signs of heat (swelling, discharge, scent changes),
              please let us know and we will reschedule. For safety, we pause attendance for 21&ndash;28 days from the
              first signs. Thank you for helping us keep play safe and calm for everyone.&rdquo;
            </p>
          </div>
          <div className="rounded-lg border p-4 mb-6">
            <h3 className="mb-2 text-xl font-semibold">Intact Male Expectations (Onboarding)</h3>
            <p className="text-sm">
              &ldquo;We happily accept intact males. To keep group play comfortable, we may place your dog in a smaller,
              calmer group, run shorter play blocks with breaks, and redirect mounting or fixating. If arousal stays
              high despite practice, we may recommend training or private-play sessions.&rdquo;
            </p>
          </div>
          <div className="rounded-lg border p-4">
            <h3 className="mb-2 text-xl font-semibold">Incident Follow-Up</h3>
            <p className="text-sm">
              &ldquo;Today we observed behaviors that increased group arousal (mounting/targeting). We paused play,
              practiced resets, and kept your dog comfortable. For ongoing success we recommend a short training plan
              (recall, leash decompression) and a calmer play group on the next visit. We will reassess in 2 weeks.&rdquo;
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-10">
          <h2 className="mb-3 text-2xl font-semibold">FAQ</h2>

          <details className="mb-3 rounded-lg border p-4">
            <summary className="cursor-pointer font-semibold">Why exclude females in heat for so long?</summary>
            <p className="mt-2">
              Scent and behavior changes draw attention from males and elevate group arousal. Extending the buffer
              well beyond visible bleeding reduces risk of crowding, scuffles, and accidental breeding.
            </p>
          </details>

          <details className="mb-3 rounded-lg border p-4">
            <summary className="cursor-pointer font-semibold">Can intact males ever play with neutered males?</summary>
            <p className="mt-2">
              Yes, if screening shows low arousal and handlers maintain a smaller group with strong supervision.
              The decision is dynamic; facilities should pause access if mounting or targeting returns.
            </p>
          </details>

          <details className="mb-3 rounded-lg border p-4">
            <summary className="cursor-pointer font-semibold">Is separate-yard design mandatory?</summary>
            <p className="mt-2">
              Not legally in most places, but it is a best practice. Multiple yards and sightline breaks give staff
              options for resets and quiet decompression, especially with intact populations.
            </p>
          </details>

          <details className="mb-3 rounded-lg border p-4">
            <summary className="cursor-pointer font-semibold">Will my intact dog be treated differently?</summary>
            <p className="mt-2">
              Policies focus on behavior and safety, not blame. Many intact dogs do well with the right group, schedule,
              and enrichment. Clear communication helps set expectations without stigma.
            </p>
          </details>
        </section>

        {/* Disclaimer */}
        <section id="disclaimer" className="mb-10">
          <h2 className="mb-3 text-2xl font-semibold">Disclaimer</h2>
          <p className="text-sm text-gray-700">
            Educational content only; not a substitute for individualized veterinary, legal, or insurance advice.
            Regulations and best practices vary by jurisdiction and facility. Consult your veterinarian, local authority,
            and insurer when designing policies and SOPs.
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
