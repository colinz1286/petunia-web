'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function ManagingGroupPlaySafely() {
  const locale = useLocale();

  const title =
    'Managing Group Play Safely: Behavior Assessment, Supervision Ratios, and Incident Prevention';
  const date = 'September 14, 2025';
  const categories = ['boarding', 'daycare'] as const;

  // Exact labels from prior posts (do not change keys/labels)
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
            <li><a href="#why-risk" className="underline hover:opacity-80">Why Playgroups Carry Risk</a></li>
            <li><a href="#intake" className="underline hover:opacity-80">Intake Behavior Assessment</a></li>
            <li><a href="#grouping" className="underline hover:opacity-80">Selection &amp; Grouping Logic</a></li>
            <li><a href="#ratios" className="underline hover:opacity-80">Supervision Ratios</a></li>
            <li><a href="#arousal" className="underline hover:opacity-80">Arousal &amp; Energy Management</a></li>
            <li><a href="#environment" className="underline hover:opacity-80">Environment &amp; Equipment</a></li>
            <li><a href="#protocols" className="underline hover:opacity-80">Break-Up &amp; Incident Protocols</a></li>
            <li><a href="#documentation" className="underline hover:opacity-80">Documentation &amp; Owner Comms</a></li>
            <li><a href="#training" className="underline hover:opacity-80">Staff Training &amp; Drills</a></li>
            <li><a href="#daily-schedule" className="underline hover:opacity-80">Daily Schedule Template</a></li>
            <li><a href="#sops" className="underline hover:opacity-80">Printable SOPs &amp; Checklists</a></li>
            <li><a href="#faq" className="underline hover:opacity-80">FAQ</a></li>
            <li><a href="#sources" className="underline hover:opacity-80">📚 Sources (Selected)</a></li>
          </ul>
        </nav>

        {/* TL;DR */}
        <section id="tldr" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Short Answer (TL;DR)</h2>
          <p className="mb-4">
            Playgroups are safe when the facility runs on <strong>systems</strong>: objective intake assessments, conservative <strong>grouping rules</strong>, posted <strong>ratios</strong>, clear <strong>arousal limits</strong>, engineered <strong>traction and airflow</strong>, and rehearsed <strong>break-up protocols</strong> with documentation. Staff should be trained to read body language early and to stop play <em>before</em> it becomes conflict. When in doubt, shrink the group, lower arousal, and add structure.
          </p>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Operator tip:</strong> Assign ownership per domain: Assessment, Floor Ops, Environment, Incident Review. Review metrics weekly. What is not owned will drift.
          </div>
        </section>

        {/* WHY RISK */}
        <section id="why-risk" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Why Playgroups Carry Risk</h2>
          <p className="mb-3">
            Most injuries and complaints arise from predictable patterns: mismatched play styles, over-arousal, resource tension, slippery floors, and inexperienced supervision. Safe operations treat play as a <strong>structured activity</strong>, not free-for-all chaos. Success depends on three levers: <strong>the dogs you accept</strong>, <strong>the environment you put them in</strong>, and <strong>the humans who supervise</strong>.
          </p>
          <p className="mb-0">
            Think in layers: policy → training → physical room → audit. Write the rule, teach it, build the space so it enforces the rule, then verify with logs and debriefs.
          </p>
        </section>

        {/* INTAKE */}
        <section id="intake" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Intake Behavior Assessment</h2>
          <p className="mb-3">
            Your intake determines 80% of your downstream safety. Use a standard assessment that captures behavior history, health factors, and handling notes. The goal is not to find a perfect dog; it is to <strong>place each dog in the right context</strong> or to route them to alternatives when group play is not appropriate.
          </p>
          <h3 className="text-lg font-semibold mt-2 mb-1">History &amp; Health Screen</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Household composition, prior daycare/boarding exposure, and known triggers.</li>
            <li>Muzzle training, resource guarding history, and handling sensitivities (paws, collar grabs).</li>
            <li>Medical constraints: orthopedic issues, respiratory limits, meds, heat sensitivity.</li>
            <li>Recent illness, cough, GI signs, or skin lesions that would postpone group play.</li>
          </ul>
          <h3 className="text-lg font-semibold mt-2 mb-1">Assessment Flow (Low Arousal First)</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Neutral greeting with trained handler; observe startle recovery, engagement, and treat interest.</li>
            <li>Gate test and doorway pressure: does the dog blast through or offer default sit?</li>
            <li>Body handling: gentle collar touch, light pressure on shoulders; note consent and relax/tense patterns.</li>
            <li>One calm greeter dog, then second, then small trio. No toys or food present.</li>
          </ul>
          <p className="mb-0">
            Record thresholds rather than labels: what intensity level produced stress signals, how quickly the dog recovered, and in which contexts they excel.
          </p>
        </section>

        {/* GROUPING */}
        <section id="grouping" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Selection &amp; Grouping Logic</h2>
          <p className="mb-3">
            Group composition drives safety. Treat grouping like seating a busy restaurant: size, play style, age, and arousal tolerance matter more than calendar convenience. Proactively <strong>cap group size</strong>, and post a maximum per room based on square footage, sight lines, and staff experience.
          </p>
          <h3 className="text-lg font-semibold mt-2 mb-1">Core Grouping Rules</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Separate by size range when needed; avoid mixing true toy breeds with powerful adolescents.</li>
            <li>Match play styles (wrestle, chase, body-slam, gentle spar) to avoid friction.</li>
            <li>Route pushy greeters and resource keepers into more structured, smaller groups.</li>
            <li>Do not add toys or food to general play. Reserve for structured one-dog-at-a-time games.</li>
          </ul>
          <h3 className="text-lg font-semibold mt-2 mb-1">Red &amp; Yellow Flags</h3>
          <ul className="list-disc pl-5 space-y-1 mb-0">
            <li>Hard stare, high tail carriage with stiffness, freeze before lunge, fast escalating chase.</li>
            <li>Excess mounting despite redirects, shadowing one dog, guarding access points.</li>
            <li>Inability to disengage after a handler cue. These call for smaller groups or solo enrichment.</li>
          </ul>
        </section>

        {/* RATIOS */}
        <section id="ratios" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Supervision Ratios: Setting a Realistic Baseline</h2>
          <p className="mb-3">
            The &quot;right&quot; ratio depends on <strong>group size, play intensity, room design, and staff experience</strong>. Set conservative defaults and empower leads to reduce group counts when arousal rises. Post ratios and maximum dogs per room where staff can see them.
          </p>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Smaller, low-arousal groups can be safely supervised at higher counts.</li>
            <li>High-energy adolescents, mixed sizes, or narrow rooms require fewer dogs per handler.</li>
            <li>Floaters cover bathroom breaks, intake, and turnovers so floor handlers are never alone.</li>
          </ul>
          <p className="mb-0">
            Ratios are not goals; they are <strong>ceilings</strong>. If your gut says the room is spicy, cap the group and slow the tempo.
          </p>
        </section>

        {/* AROUSAL */}
        <section id="arousal" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Arousal &amp; Energy Management</h2>
          <p className="mb-3">
            Most incidents are arousal problems dressed up as behavior problems. Excess speed, slippery floors, bottlenecks, and retrieve games with multiple dogs build the exact conditions that end in conflict. Your toolset: <strong>structured play</strong>, <strong>decompression blocks</strong>, and <strong>criteria for pausing</strong>.
          </p>
          <h3 className="text-lg font-semibold mt-2 mb-1">Structured Play Menu</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>&quot;One dog per throw&quot; fetch on non-slip surfaces; clean drop before next throw.</li>
            <li>Follow-me walking patterns through cones to reset tempo.</li>
            <li>Place/mat settles paired with quiet petting to reduce heart rate.</li>
          </ul>
          <h3 className="text-lg font-semibold mt-2 mb-1">Decompression Blocks</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Short leash walks around the perimeter, sniff breaks, or quiet crate time between play bursts.</li>
            <li>White noise, soft lighting, and visual barriers reduce feedback loops from barking.</li>
          </ul>
          <p className="mb-0">
            Use a &quot;two strikes&quot; rule: after two redirects for the same dog in a short window, move them to a calmer group or provide solo enrichment.
          </p>
        </section>

        {/* ENVIRONMENT */}
        <section id="environment" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Environment &amp; Equipment: Design the Room to Enforce the Rules</h2>
          <p className="mb-3">
            The room should make safe choices easy. Engineer traction, airflow, and sight lines so handlers can intervene early and dogs can settle. Remove choke points where pressure builds.
          </p>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>Traction:</strong> rubberized flooring or non-slip runners at entries and turns.</li>
            <li><strong>Ventilation:</strong> sufficient air exchanges and temperature control; hot, stale air fuels agitation.</li>
            <li><strong>Sight lines:</strong> avoid blind corners; use gates to create predictable flow.</li>
            <li><strong>Staging:</strong> slip leads, break-up boards, noise interrupters, and air horns stored in fixed locations.</li>
          </ul>
          <p className="mb-0">
            Micro-changes matter: adding a runner at a door can prevent a pileup that otherwise ends in a snark.
          </p>
        </section>

        {/* PROTOCOLS */}
        <section id="protocols" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Break-Up &amp; Incident Protocols</h2>
          <p className="mb-3">
            Breaking up a scuffle is a <strong>rehearsed skill</strong>. Handlers should not improvise in the moment. Use a staged sequence: <strong>interrupt</strong>, <strong>block</strong>, <strong>split</strong>, and <strong>reset</strong>. After any incident, run a full debrief to find the upstream system miss.
          </p>
          <h3 className="text-lg font-semibold mt-2 mb-1">Break-Up Sequence (Handler A &amp; B)</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Brief noise interrupt or water mist aimed near shoulders, not directly in faces.</li>
            <li>Slide a board or large object to separate bodies; avoid grabbing collars mid-thrash.</li>
            <li>Use slip leads to walk dogs away to visual barriers; breathe, assess, and scan for injuries.</li>
            <li>Record the timeline: trigger, first escalation sign, tools used, handler positions.</li>
          </ul>
          <h3 className="text-lg font-semibold mt-2 mb-1">Post-Incident Flow</h3>
          <ul className="list-disc pl-5 space-y-1 mb-0">
            <li>First aid as trained; vet referral when indicated.</li>
            <li>Owner notification with calm facts and next steps; avoid blame language.</li>
            <li>Internal debrief within 24 hours: what environmental or procedural changes prevent a repeat.</li>
          </ul>
        </section>

        {/* DOCUMENTATION */}
        <section id="documentation" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Documentation &amp; Owner Communication</h2>
          <p className="mb-3">
            If it is not documented, it did not happen. Link each reservation to vaccination dates, waiver version, behavior flags, and med/feeding notes. Time-stamp play rotations, quiet blocks, and any redirects for specific dogs.
          </p>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>Red board:</strong> daily list of dogs needing special handling, medications, or isolation.</li>
            <li><strong>Incident note:</strong> neutral sequence of events, interventions used, injuries, and owner contact time.</li>
            <li><strong>Follow-up:</strong> written summary with what the facility changed to reduce repeat risk.</li>
          </ul>
          <p className="mb-0">
            Owners trust clarity. Calm, factual communication is your best reputation tool after a tough moment.
          </p>
        </section>

        {/* TRAINING */}
        <section id="training" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Staff Training &amp; Drills</h2>
          <p className="mb-3">
            Great playgroups come from great handlers. Build a simple curriculum and certify staff by observable skills rather than time served.
          </p>
          <h3 className="text-lg font-semibold mt-2 mb-1">Curriculum Milestones</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Reading dog body language: play bows vs. stiffness, curved vs. straight approaches.</li>
            <li>Positioning: where to stand, how to move, and how to block pressure at gates.</li>
            <li>Tool use: slip leads, boards, noise interrupters, with emphasis on timing.</li>
            <li>Documentation: accurate time-stamping and neutral, non-judgmental language.</li>
          </ul>
          <h3 className="text-lg font-semibold mt-2 mb-1">Drills</h3>
          <ul className="list-disc pl-5 space-y-1 mb-0">
            <li>Two-person break-up with props twice monthly.</li>
            <li>Doorway pressure simulation: practice metered entry and default sit rewards.</li>
            <li>Equipment scavenger hunt: handlers must locate all staged tools in under 30 seconds.</li>
          </ul>
        </section>

        {/* DAILY SCHEDULE */}
        <section id="daily-schedule" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Daily Schedule Template (Copy/Paste)</h2>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>07:00 — Intake health checks; red board briefing; rooms staged with tools.</li>
            <li>08:00 — First rotation: small, matched groups; no toys; handlers post positions.</li>
            <li>09:00 — Decompression: mat settles, sniff walks, water breaks; quick floor clean.</li>
            <li>10:00 — Structured play blocks (one dog per throw), calm transitions between rooms.</li>
            <li>12:00 — Quiet block; feeding for boarding dogs; med window with double-checks.</li>
            <li>13:30 — Second rotation; adjust groups based on morning notes; cap counts proactively.</li>
            <li>15:00 — Decompression; soft lights and white noise; short staff debrief for trend notes.</li>
            <li>16:00 — Final rotation; individual enrichment for spicy dogs; incident review if needed.</li>
            <li>17:30 — Closing checklist; sanitation logs; tomorrow’s red board drafted.</li>
          </ul>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Petunia tip:</strong> Convert this schedule into shared checklists so every shift runs the same day, regardless of who is on the floor.
          </div>
        </section>

        {/* SOPs */}
        <section id="sops" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Printable SOPs &amp; Checklists</h2>

          <h3 className="text-lg font-semibold mt-2 mb-1">Playgroup Entry SOP</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Confirm room count &amp; ratio; stage tools; review red board names.</li>
            <li>Meter entries one at a time; default sit earns entry; no toys present.</li>
            <li>Handlers take posted positions; first 3 minutes are observation-only.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Arousal Reset Protocol</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Two fast redirects or a doorway scrum → stop play, run a calm lap, then mat settle.</li>
            <li>If arousal persists, split into subgroups or move to solo enrichment.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Incident Response SOP</h3>
          <ul className="list-disc pl-5 space-y-1 mb-0">
            <li>Interrupt → block → split → reset; first aid; injury scan; time stamps.</li>
            <li>Owner call within 30–60 minutes for minor events; immediate call for serious events.</li>
            <li>Debrief within 24 hours; adjust grouping or environment; log change in the playbook.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">Frequently Asked Questions</h2>

          <p className="mb-3">
            <strong>What is the &quot;right&quot; ratio for group play?</strong><br />
            There is no universal number. Start with conservative ceilings and empower leads to reduce counts based on intensity, room design, and staff experience. Ratios are a ceiling, not a quota.
          </p>

          <p className="mb-3">
            <strong>Can toys ever be used in playgroups?</strong><br />
            Yes, under structure: one dog per throw, clear drop criteria, and non-slip surfaces. Free-for-all toy access is a common trigger for conflict.
          </p>

          <p className="mb-3">
            <strong>Should intact dogs join playgroups?</strong><br />
            Case-by-case with conservative grouping and timing. Intact status can influence arousal and interactions; route to smaller or solo sessions if needed.
          </p>

          <p className="mb-0">
            <strong>How do we talk to owners after a scuffle?</strong><br />
            Use calm, factual sequences of events, what you did, and what will change. Avoid blame language. Offer reasonable remedies within your policy and focus on prevention steps implemented.
          </p>
        </section>

        {/* SOURCES */}
        <section id="sources" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">📚 Sources (Selected)</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            <li>
              AVMA. Dog bite prevention &amp; safety resources.{' '}
              <a
                href="https://www.avma.org/resources-tools/animal-health-and-welfare/dog-bite-prevention"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.avma.org/resources-tools/animal-health-and-welfare/dog-bite-prevention
              </a>
            </li>
            <li>
              IAABC Foundation. Canine body language &amp; play styles (education materials).{' '}
              <a
                href="https://iaabcfoundation.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://iaabcfoundation.org/
              </a>
            </li>
            <li>
              Fear Free Pets. Reducing stress in care environments (guides).{' '}
              <a
                href="https://fearfreepets.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://fearfreepets.com
              </a>
            </li>
            <li>
              OSHA Small Business. Workplace safety planning (general frameworks).{' '}
              <a
                href="https://www.osha.gov/smallbusiness"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.osha.gov/smallbusiness
              </a>
            </li>
          </ul>
          <p className="text-xs text-gray-600 mt-4">
            Educational content only. Consult your attorney and veterinarian for jurisdiction-specific legal and medical protocols. Train staff on these SOPs and adapt them to your building, climate, and clientele.
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
