'use client';

import Head from 'next/head';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function BehaviorTemperamentNotesForBoardingAndDaycare() {
  const locale = useLocale();

  // --- Metadata ---------------------------------------------------------------
  const title =
    'Behavior & Temperament Notes in Dog Boarding Software & Dog Daycare Software: Safety, Group Play, Staff Matching, and Incident Prevention';
  const date = 'August 23, 2025';
  const categories = ['boarding'] as const;

  // Keep keys/labels EXACTLY as used in prior posts
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
    'Why structured behavior & temperament notes belong at the heart of dog boarding software and dog daycare software. Build safer group play, smarter staff assignments, and calmer operations with standardized tags, incident logs, and proactive alerts.';

  const slug = 'behavior-temperament-notes-dog-boarding-daycare-software';

  return (
    <>
      <Head>
        <title>{title} – Petunia Blog</title>
        <meta name="description" content={description} />
        {/* Per user preference, do not use the word "index" here. */}
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
            <li><a href="#tldr" className="underline hover:opacity-80">TL;DR</a></li>
            <li><a href="#why" className="underline hover:opacity-80">Why It Matters</a></li>
            <li><a href="#taxonomy" className="underline hover:opacity-80">Behavior Taxonomy</a></li>
            <li><a href="#intake" className="underline hover:opacity-80">Owner Intake &amp; Assessments</a></li>
            <li><a href="#data-model" className="underline hover:opacity-80">Data Model &amp; Note Structure</a></li>
            <li><a href="#groupplay" className="underline hover:opacity-80">Group Play Decisions</a></li>
            <li><a href="#staff-matching" className="underline hover:opacity-80">Staff Matching &amp; Permissions</a></li>
            <li><a href="#risk" className="underline hover:opacity-80">Risk Scoring &amp; Flags</a></li>
            <li><a href="#incidents" className="underline hover:opacity-80">Incidents &amp; Post-Event Learning</a></li>
            <li><a href="#daycare-vs-boarding" className="underline hover:opacity-80">Daycare vs Boarding Nuance</a></li>
            <li><a href="#ops" className="underline hover:opacity-80">Shift Handoffs &amp; Ops Rhythm</a></li>
            <li><a href="#owners" className="underline hover:opacity-80">Owner Communication</a></li>
            <li><a href="#reporting" className="underline hover:opacity-80">Reporting, Audits &amp; ROI</a></li>
            <li><a href="#kpis" className="underline hover:opacity-80">KPIs That Matter</a></li>
            <li><a href="#checklists" className="underline hover:opacity-80">Checklists &amp; Templates</a></li>
            <li><a href="#faq" className="underline hover:opacity-80">FAQ</a></li>
            <li><a href="#sources" className="underline hover:opacity-80">Sources (Selected)</a></li>
          </ul>
        </nav>

        {/* TL;DR */}
        <section id="tldr" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Short Answer (TL;DR)</h2>
          <p className="mb-4">
            Behavior &amp; temperament notes turn guesswork into safety. In dog boarding software and dog daycare software, standardized behavior tags, structured assessments, and incident logs drive smarter group play, better staff-to-dog matching, and calmer operations. The payoff is practical: fewer fights or near-misses, faster shift handoffs, and a brand owners trust because your team reads dogs consistently instead of improvising.
          </p>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Petunia tip:</strong> Treat behavior like a living medical chart: <em>observe, tag, act, review</em>. Notes should be searchable, time-stamped, and tied to decisions (play group, handler level, kennel placement). That trail is your safety net and your training curriculum.
          </div>
        </section>

        {/* Why it matters */}
        <section id="why" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Why Behavior Notes Matter for Facilities</h2>
          <p className="mb-3">
            Every facility runs on a rhythm of arrivals, play blocks, naps, and departures. The difference between an easy day and a stressful one is not luck—it is data. When behavior and temperament notes are captured consistently in your dog boarding software or dog daycare software, decisions get faster and safer. New hires learn your standards, senior staff spot patterns early, and owners see a professional system rather than ad-hoc opinions.
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Safety:</strong> Reduce escalation by seeing early signals—stiff posture, hard eye, guarding around gates, heat stacking in crowded yards.</li>
            <li><strong>Predictability:</strong> A stable routine lowers arousal. Notes help you design that routine for each dog.</li>
            <li><strong>Training:</strong> Notes become a curriculum: what to reinforce, what to avoid, which handler to assign.</li>
            <li><strong>Trust:</strong> Owners respond to specifics: &quot;Loose body during parallel walk; relaxed after 4 minutes; prefers gentle buddies.&quot;</li>
          </ul>
        </section>

        {/* Behavior taxonomy */}
        <section id="taxonomy" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Behavior Taxonomy: Speak the Same Language</h2>
          <p className="mb-3">
            Consistency begins with shared words. A simple, practical taxonomy turns scattered observations into usable signals. You do not need a graduate seminar—just clear buckets the whole team can learn and apply.
          </p>
          <h3 className="text-lg font-semibold mt-2 mb-1">Core note categories</h3>
          <ul className="list-disc pl-5 space-y-2 mb-3">
            <li><strong>Sociability:</strong> people-friendly, dog-selective, dog-social, people-cautious, stranger-danger.</li>
            <li><strong>Play style:</strong> chase, mouthy/wrestle, body-slam, tug-enjoyer, soft &amp; curvy, shy &amp; shadow.</li>
            <li><strong>Arousal &amp; recovery:</strong> how fast the dog revs up and how quickly they settle.</li>
            <li><strong>Handling sensitivity:</strong> collar grabs ok/not ok, towel tolerance, paw/ear handling.</li>
            <li><strong>Resource guarding:</strong> food, toys, space, people—note context and intensity.</li>
            <li><strong>Thresholds &amp; triggers:</strong> doorways, tight halls, fence lines, vehicles, intact males/females in heat.</li>
            <li><strong>Noise &amp; novelty:</strong> startle response, storm/fireworks sensitivity, blower/crate reaction.</li>
            <li><strong>Body language tells:</strong> high/tight tail, hard eye, freeze/micro-movements, shake-off, sniff breaks, tongue flicks.</li>
          </ul>
          <p className="mb-3">
            Keep definitions short and referenceable in-app. A one-screen glossary with examples prevents &quot;we meant different things&quot; arguments and aligns your team under one standard.
          </p>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Petunia tip:</strong> Add a three-color scheme to every category: <strong>Green</strong> (safe baseline), <strong>Yellow</strong> (caution/coach), <strong>Red</strong> (manage/avoid). It becomes your everyday shorthand.
          </div>
        </section>

        {/* Intake & assessments */}
        <section id="intake" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Owner Intake &amp; Assessments: Win on Day Zero</h2>
          <p className="mb-3">
            You cannot fix what you never ask. Owner intake should prompt for behavior context, then your staff assessment confirms, re-grades, and adds nuance. Your dog boarding software or dog daycare software should unify both into a single behavior profile.
          </p>
          <h3 className="text-lg font-semibold mt-2 mb-1">Owner intake prompts (per dog)</h3>
          <ul className="list-disc pl-5 space-y-2 mb-3">
            <li>Dog-dog history (positive/neutral/negative); preferred playmates (size/energy).</li>
            <li>Handling comfort (collar grabs, towel dry, nail trims, ear cleaning).</li>
            <li>Resource sensitivity (food/toys/people/space); examples.</li>
            <li>Noise &amp; novelty tolerance (storms, blowers, vacuums, kids).</li>
            <li>Crate/room history (settles, vocalizes, attempts to escape).</li>
            <li>Walk behavior (pulling, reactivity to dogs/people/cars).</li>
            <li>Medical or pain notes that may change behavior (hips, back, skin issues).</li>
          </ul>
          <h3 className="text-lg font-semibold mt-2 mb-1">Assessment day structure</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Arrival decompression (5–10 minutes) with low-pressure greetings through a barrier.</li>
            <li>Parallel walk with a known &quot;helper&quot; dog; watch recovery after novel sights.</li>
            <li>Short, curated meet-and-greet with a compatible buddy; end on neutral success.</li>
            <li>Quiet crate rest and release; log settle time and vocalization type.</li>
            <li>Handler handling: collar touches, towel, wipe paws; note thresholds.</li>
          </ul>
          <p className="mb-3">
            Assessments are not pass/fail; they are a recipe. The outcome is a starting plan: play group type, handler level, rest schedule, and any &quot;coach&quot; goals for the next visit.
          </p>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Petunia tip:</strong> Stamp an <code>assessmentVersion</code> and reviewer on the profile. When dogs mature or conditions change, you can explain <em>why</em> the plan changed.
          </div>
        </section>

        {/* Data model */}
        <section id="data-model" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Data Model &amp; Note Structure: Make It Searchable</h2>
          <p className="mb-3">
            Behavior data belongs to the dog profile as structured, queryable fields—not buried in free-text. Notes need to surface instantly in the yard, kitchen, or at the desk when a question arises.
          </p>
          <ul className="list-disc pl-5 space-y-2 mb-3">
            <li><strong>Behavior profile object:</strong> <code>sociality</code>, <code>playStyle[]</code>, <code>arousalRecovery</code>, <code>handling</code>, <code>guarding</code>, <code>triggers[]</code>, <code>noiseSensitivity</code>, <code>kennelTolerance</code>, <code>compatibilityTags[]</code>, <code>staffLevel</code>, <code>lastReviewedAt</code>, <code>assessmentVersion</code>.</li>
            <li><strong>Note entries:</strong> time-stamped snippets with <code>tag</code> (e.g., &quot;fence arousal&quot;), <code>context</code>, <code>whatWeDid</code>, <code>outcome</code>, <code>reviewer</code>.</li>
            <li><strong>Visibility:</strong> some notes are staff-only (e.g., safeguarding or sensitive owner info). Use role-based visibility flags.</li>
          </ul>
          <p className="mb-3">
            Free-text is still valuable—for nuance and story—but keep the decision-critical parts as fields the system can filter for group and staffing decisions.
          </p>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Petunia tip:</strong> Add quick-tap tags to the yard screen (e.g., &quot;shake-off&quot;, &quot;sniff break&quot;, &quot;hard eye&quot;). The more staff can log without typing, the richer your dataset becomes.
          </div>
        </section>

        {/* Group play */}
        <section id="groupplay" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Group Play: From Notes to Decisions</h2>
          <p className="mb-3">
            Group play is where behavior data pays for itself. A few clear rules, driven by notes, reduce collisions before they happen.
          </p>
          <h3 className="text-lg font-semibold mt-2 mb-1">Compatibility matrix</h3>
          <ul className="list-disc pl-5 space-y-2 mb-3">
            <li><strong>Energy match:</strong> sprint-happy dogs with sprint-happy buddies; soft wrestlers with soft wrestlers; wallflowers with gentle escorts.</li>
            <li><strong>Size considerations:</strong> mixed-size groups only when play styles and handler ratios allow safe management.</li>
            <li><strong>Play interrupts:</strong> pre-planned micro-breaks lower arousal; notes track which dogs benefit from shorter blocks.</li>
            <li><strong>Gate transitions:</strong> if a dog guards thresholds, the plan may require individual entry/exit with a handler shield.</li>
          </ul>
          <h3 className="text-lg font-semibold mt-2 mb-1">Green / Yellow / Red groups</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Green:</strong> loose bodies, curvy approaches, soft mouths—standard staffing works.</li>
            <li><strong>Yellow:</strong> coachable dogs—shorter play sets, more parallel walking, handler proximity, higher ratio.</li>
            <li><strong>Red:</strong> solo yard or hand-walks only; enrichment, sniffaris, and training games replace free play.</li>
          </ul>
          <p className="mb-3">
            Your dog boarding software or dog daycare software should auto-suggest groups based on tags and staff availability, then log the group decision for audit and training.
          </p>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Petunia tip:</strong> Add a &quot;group snapshot&quot; after each block: overall vibe, any coaching moments, who should switch rooms next time.
          </div>
        </section>

        {/* Staff matching */}
        <section id="staff-matching" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Staff Matching &amp; Permissions: The Right Handler for the Dog</h2>
          <p className="mb-3">
            Not every staffer should handle every dog. Matching experience to need is a safety practice, not a luxury. Your behavior notes become the routing rules for staffing.
          </p>
          <h3 className="text-lg font-semibold mt-2 mb-1">Staff capability tags</h3>
          <ul className="list-disc pl-5 space-y-2 mb-3">
            <li>Puppy mentorship, shy-dog coaching, reactivity-aware handling.</li>
            <li>Gate/threshold management, resource-guarding management.</li>
            <li>Senior-dog care, mobility/pain-aware handling.</li>
          </ul>
          <p className="mb-3">
            Pair dog flags with staff capability tags so the schedule suggests &quot;who&quot; automatically. If a &quot;Yellow&quot; dog arrives and only Green-approved staff are on shift, the app surfaces a plan B: solo yard or enrichment slot.
          </p>
          <h3 className="text-lg font-semibold mt-2 mb-1">Permissions &amp; visibility</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Only leads edit core behavior fields; all staff can add quick notes.</li>
            <li>Sensitive notes (home safety, legal items) restricted to managers.</li>
            <li>New hires see a slimmed view to reduce overwhelm while training.</li>
          </ul>
        </section>

        {/* Risk & flags */}
        <section id="risk" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Risk Scoring &amp; Flags: See the Page at a Glance</h2>
          <p className="mb-3">
            A good system collapses many signals into a single, glanceable view. That does not mean oversimplifying dogs—it means summarizing what matters for the next hour.
          </p>
          <ul className="list-disc pl-5 space-y-2 mb-3">
            <li><strong>Dynamic color badge:</strong> calculated from recent notes, incident proximity, and recovery patterns.</li>
            <li><strong>Contextual flags:</strong> &quot;no gate crowding,&quot; &quot;solo entry,&quot; &quot;toy-free yard,&quot; &quot;needs sniff walk before play.&quot;</li>
            <li><strong>Time-bound modifiers:</strong> heat, intact status, medication changes, pain flare-ups.</li>
          </ul>
          <p className="mb-3">
            Risk badges should update in real time as new notes land and as staffing ratio changes. That keeps decisions honest during peak chaos.
          </p>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Petunia tip:</strong> Expire flags automatically unless renewed. Stale &quot;caution&quot; labels create learned helplessness and bias.
          </div>
        </section>

        {/* Incidents */}
        <section id="incidents" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Incidents &amp; Post-Event Learning: Turn Stress Into Systems</h2>
          <p className="mb-3">
            Even great programs will log scuffles and near-misses. What matters is the loop: capture the moment, decide the next step, and update the plan so it does not repeat.
          </p>
          <h3 className="text-lg font-semibold mt-2 mb-1">Structured incident logging</h3>
          <ul className="list-disc pl-5 space-y-2 mb-3">
            <li>Type (scuffle, redirected nip, fence-line arousal, resource spat), location, dogs involved, staff present.</li>
            <li>Antecedents (gate, new arrival, toy in yard), behavior sequence, interventions, outcome (no injury/minor/moderate).</li>
            <li>Immediate actions: separation, decompression walk, swap groups, call owner if required.</li>
            <li>Plan change: flags, group change, handler level, arrival routine.</li>
          </ul>
          <p className="mb-3">
            Incidents become training material. A monthly review with short video clips (when available) and anonymized notes helps the whole team level up without blame.
          </p>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Petunia tip:</strong> Pair each incident with a &quot;prevention recipe&quot; card stored on the dog profile and in a searchable library for staff refreshers.
          </div>
        </section>

        {/* Daycare vs boarding */}
        <section id="daycare-vs-boarding" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Daycare vs Boarding: Different Rhythms, Shared Standards</h2>
          <h3 className="text-lg font-semibold mt-2 mb-1">Daycare</h3>
          <p className="mb-3">
            Daycare is density and transitions: more gates, more greetings, more arousal. Notes should emphasize threshold behavior, recall in groups, and recovery after bump-ups. Shorter play sets and planned sniffs help Yellow dogs stay successful.
          </p>
          <h3 className="text-lg font-semibold mt-2 mb-1">Boarding</h3>
          <p className="mb-3">
            Boarding is duration and routine drift. Dogs can be angelic on day one and cranky on day four if sleep, pain, or diet are off. Notes should track sleep quality, vocalization type, and &quot;best time for yard&quot; windows to keep stress low.
          </p>
        </section>

        {/* Ops rhythm */}
        <section id="ops" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Shift Handoffs &amp; Operational Rhythm</h2>
          <p className="mb-3">
            Handoffs are where context vanishes. A concise behavior snapshot and a &quot;what changed&quot; section prevent friction and repeated mistakes.
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Yard dashboard:</strong> shows group lists with flags and a one-line coaching note per dog.</li>
            <li><strong>What changed:</strong> highlight new tags since last shift and any plan edits that affect today.</li>
            <li><strong>Escalations:</strong> overdue reviews, repeated scuffles, or high arousal dogs rise to the top of the list.</li>
          </ul>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Petunia tip:</strong> Adopt a 60-second &quot;yard briefing&quot; at the start of every block. It pays for itself all day.
          </div>
        </section>

        {/* Owner communication */}
        <section id="owners" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Owner Communication: Calm, Clear, Professional</h2>
          <p className="mb-3">
            Owners want to know two things: &quot;Was my dog safe and happy?&quot; and &quot;What are you doing next?&quot; When your behavior notes are structured, your client messages are simple, specific, and reassuring.
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Daily or per-visit summaries for new or Yellow dogs: short wins, precise coaching, and next steps.</li>
            <li>Incident language that is factual and humane: behavior facts, interventions, outcomes, and follow-up.</li>
            <li>Graduation moments: &quot;moved from Yellow to Green group&quot; based on recovery and consistency.</li>
          </ul>
        </section>

        {/* Reporting/ROI */}
        <section id="reporting" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Reporting, Audits &amp; ROI: Prove the Program Works</h2>
          <p className="mb-3">
            Behavior data is not just for emergencies. It is your story to future clients, insurers, and partners. The right dog boarding software or dog daycare software turns daily notes into trend lines that justify pricing and staffing.
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Heat maps:</strong> when and where scuffles happen; adjust room flow and staffing.</li>
            <li><strong>De-escalation wins:</strong> % of Yellow dogs moving to Green after a month of coaching.</li>
            <li><strong>Retention:</strong> owners of coached dogs rebook more; your transparency builds loyalty.</li>
            <li><strong>Training ROI:</strong> fewer incidents per 1,000 dog-hours after staff refreshers.</li>
          </ul>
        </section>

        {/* KPIs */}
        <section id="kpis" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">KPIs That Matter (Track Monthly)</h2>
          <ul className="list-disc pl-5 space-y-2 mb-3">
            <li><strong>Incident rate:</strong> scuffles per 1,000 dog-hours, by room and time of day.</li>
            <li><strong>Yellow-to-Green transitions:</strong> % of coached dogs graduating within 30 days.</li>
            <li><strong>Near-miss capture rate:</strong> % of &quot;almost&quot; moments logged; higher is better for learning.</li>
            <li><strong>Owner confidence:</strong> survey scores after behavior summaries and transparent updates.</li>
            <li><strong>Shift alignment:</strong> reduction in &quot;plan ignored&quot; events after introducing handoff briefs.</li>
          </ul>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Petunia tip:</strong> Celebrate quiet wins. &quot;Zero incidents for 14 days in Large Dog Yard&quot; is a morale booster and a marketing line.
          </div>
        </section>

        {/* Checklists */}
        <section id="checklists" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Checklists &amp; Templates</h2>
          <h3 className="text-lg font-semibold mt-2 mb-1">Owner Intake (2 minutes)</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Play style &amp; favorite buddies; size/energy match.</li>
            <li>Handling comfort &amp; sensitivities; vet/pain notes.</li>
            <li>Resource guarding context; triggers &amp; recovery.</li>
            <li>Crate/room history; noise sensitivity; home routines.</li>
          </ul>
          <h3 className="text-lg font-semibold mt-2 mb-1">Assessment Day (5 steps)</h3>
          <ol className="list-decimal pl-5 space-y-1 mb-3">
            <li>Decompression; barrier greetings.</li>
            <li>Parallel walk; log recovery and eye softness.</li>
            <li>One curated meet; interrupt and end on neutral.</li>
            <li>Short crate rest; log settle time.</li>
            <li>Handling touches; confirm thresholds.</li>
          </ol>
          <h3 className="text-lg font-semibold mt-2 mb-1">Yard Block (60-second briefing)</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Group list + flags; who needs micro-breaks.</li>
            <li>Gate plan; toy policy; handler zones.</li>
            <li>Exit plan; what to log after the block.</li>
          </ul>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm mt-3">
            <strong>Petunia tip:</strong> Pin these checklists inside the app and print mini cards for clipboards. New hires will thank you.
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">Frequently Asked Questions</h2>
          <p className="mb-3">
            <strong>Do behavior notes scare owners?</strong><br />
            Clear language <em>reassures</em> owners. You are not labeling dogs; you are designing success. Share calm summaries, not raw staff shorthand.
          </p>
          <p className="mb-3">
            <strong>Should we ever allow toys in group play?</strong><br />
            Only with compatible groups and &quot;no guarding&quot; dogs. Notes help decide when it is appropriate and when to skip.
          </p>
          <p className="mb-3">
            <strong>Can Yellow dogs ever enjoy daycare?</strong><br />
            Absolutely. With micro-breaks, matched buddies, and handler coaching, many dogs move from Yellow to Green over time. Your notes track that journey.
          </p>
          <p className="mb-3">
            <strong>How often should we review profiles?</strong><br />
            Review after assessment, after any incident, and at least quarterly for frequent visitors. Maturing adolescents and aging seniors need updates more often.
          </p>
          <p className="text-xs text-gray-600">
            Educational content only. Always consult a qualified trainer or behavior professional for complex cases and follow local safety regulations.
          </p>
        </section>

        {/* Sources */}
        <section id="sources" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">📚 Sources (Selected)</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            <li>
              American Veterinary Society of Animal Behavior (AVSAB). Position statements on socialization and humane training.
              <a
                href="https://avsab.org/resources/position-statements/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline ml-1"
              >
                AVSAB
              </a>
            </li>
            <li>
              International Association of Animal Behavior Consultants (IAABC). Best practices and continuing education.
              <a
                href="https://iaabc.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline ml-1"
              >
                IAABC
              </a>
            </li>
            <li>
              Association of Professional Dog Trainers (APDT). Handling and group play resources.
              <a
                href="https://apdt.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline ml-1"
              >
                APDT
              </a>
            </li>
            <li>
              RSPCA &amp; ASPCA public guidance on dog body language and safety around children.
              <a
                href="https://www.rspca.org.uk/adviceandwelfare/pets/dogs/behaviour/bodylanguage"
                target="_blank"
                rel="noopener noreferrer"
                className="underline ml-1"
              >
                RSPCA
              </a>{' '}
              ·
              <a
                href="https://www.aspca.org/pet-care/dog-care/dog-behavior-tips"
                target="_blank"
                rel="noopener noreferrer"
                className="underline ml-1"
              >
                ASPCA
              </a>
            </li>
          </ul>
          <p className="text-xs text-gray-600 mt-4">
            Links above are provided for general education and are not exhaustive. Consult your veterinary and behavior teams for individualized guidance.
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
