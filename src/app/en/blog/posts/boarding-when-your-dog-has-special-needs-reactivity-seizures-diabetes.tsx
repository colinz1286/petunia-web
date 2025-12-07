'use client';

import Head from 'next/head';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function BoardingSpecialNeeds() {
  const locale = useLocale();

  const title =
    'Boarding When Your Dog Has Special Needs (Reactivity, Seizures, Diabetes)';
  const date = 'July 27, 2025';
  const categories = ['owner', 'boarding'] as const;

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
    'A practical, evidence-informed guide for boarding dogs with behavioral or medical complexities—reactivity/anxiety, seizure disorders, diabetes, cardiac/renal disease, allergies, mobility challenges, and seniors. Includes decision trees, staff scripts, packing lists, and printable medication logs.';

  return (
    <>
      <Head>
        <title>{title} – Petunia Blog</title>
        <meta name="description" content={description} />
        <meta name="robots" content="index,follow" />
        <link
          rel="canonical"
          href={`https://www.petuniapets.com/${locale}/blog/boarding-when-your-dog-has-special-needs-reactivity-seizures-diabetes`}
        />
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
            <li><a href="#tl-dr" className="underline hover:opacity-80">TL;DR</a></li>
            <li><a href="#disclaimer" className="underline hover:opacity-80">Medical Disclaimer</a></li>
            <li><a href="#who" className="underline hover:opacity-80">Who This Is For</a></li>
            <li><a href="#decision" className="underline hover:opacity-80">Board or Not? (Decision Tree)</a></li>
            <li><a href="#reactivity" className="underline hover:opacity-80">Reactivity & Anxiety</a></li>
            <li><a href="#seizures" className="underline hover:opacity-80">Seizure Disorders</a></li>
            <li><a href="#diabetes" className="underline hover:opacity-80">Diabetes Mellitus</a></li>
            <li><a href="#other-needs" className="underline hover:opacity-80">Other Common Needs</a></li>
            <li><a href="#packing" className="underline hover:opacity-80">Packing & Paperwork</a></li>
            <li><a href="#facility" className="underline hover:opacity-80">Facility Fit & Trial Overnight</a></li>
            <li><a href="#scripts" className="underline hover:opacity-80">Staff Scripts & Daily Rhythm</a></li>
            <li><a href="#templates" className="underline hover:opacity-80">Templates & Logs</a></li>
            <li><a href="#faq" className="underline hover:opacity-80">FAQ</a></li>
            <li><a href="#sources" className="underline hover:opacity-80">📚 Sources</a></li>
          </ul>
        </nav>

        {/* TL;DR */}
        <section id="tl-dr" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Short Answer (TL;DR)</h2>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4">
            <p className="mb-3">
              <strong>Yes—many behaviorally or medically complex dogs can board safely,</strong> but success depends on honest screening, a
              facility that can truly deliver what your dog needs, and crystal-clear instructions and medication plans. You’re looking for
              <em> predictability</em> (same handlers, same schedule), <em>low arousal</em> (quiet housing, sensible enrichment), and <em>redundancy</em> (double-checks for meds, escalation paths).
            </p>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li><strong>Reactivity/anxiety:</strong> do an evaluation visit; consider a <em>boarding-only</em> plan (no daycare); muzzle-train for safety; use Fear Free, reward-based handling.</li>
              <li><strong>Seizures:</strong> keep medication timing exact; identify triggers; provide written emergency steps and ER contacts; expect shorter, calmer play windows and dark, quiet rest.</li>
              <li><strong>Diabetes:</strong> meals and insulin on a strict, vet-approved schedule; U-40 vs U-100 syringe checks; hypoglycemia monitoring plan; logs with two-person sign-offs.</li>
            </ul>
          </div>
        </section>

        {/* DISCLAIMER */}
        <section id="disclaimer" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Medical Disclaimer</h2>
          <p>
            This guide is educational and <strong>not</strong> a substitute for veterinary care. Always follow your own veterinarian’s
            instructions and ask them to review and approve any boarding plan, including medication timing, emergency thresholds, and
            contact preferences. If your dog experiences a medical emergency, seek veterinary care immediately.
          </p>
        </section>

        {/* WHO */}
        <section id="who" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Who This Is For (and How to Use It)</h2>
          <p className="mb-3">
            This article is for pet owners planning boarding for dogs with complex behavior (e.g., reactivity, fear, separation distress)
            or medical needs (e.g., seizure disorders, diabetes, cardiac/renal disease, allergies, mobility limits, geriatric care).
            Use it to <em>prepare</em> (packing, paperwork), <em>select</em> a suitable facility (capabilities, red flags), and <em>operate</em>
            a clear plan (daily routine, staff scripts, emergency pathways). Share the relevant sections—and the printable templates—with
            your boarding provider and your veterinarian.
          </p>
        </section>

        {/* DECISION TREE */}
        <section id="decision" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Board or Not? Quick Decision Tree</h2>
          <ol className="list-decimal pl-5 space-y-2 mb-3">
            <li><strong>Stability check:</strong> Has your dog been <em>stable</em> (behavior/medical) for at least 2–4 weeks? If <em>no</em>, talk to your vet about postponing or arranging in-home care.</li>
            <li><strong>Medication complexity:</strong> More than 4 meds/day or insulin + comorbidities? Prefer facilities with dedicated medical staff and 24/7 oversight—or a veterinary boarding hospital.</li>
            <li><strong>Reactivity risk:</strong> If your dog has a bite history or severe barrier reactivity, look for private housing, handler consistency, and muzzle training; skip group daycare.</li>
            <li><strong>Emergency distance:</strong> Is there 24/7 ER care within 20–30 minutes? If not, ensure on-call veterinary coverage and transport protocols.</li>
            <li><strong>Trial run:</strong> Schedule a <em>day trial</em> and a <em>single overnight</em> with full meds before a longer stay.</li>
          </ol>
          <p className="text-sm text-gray-700">
            If any step feels shaky, favor <strong>in-home care</strong> with a medical-experienced sitter or a veterinary boarding facility.
          </p>
        </section>

        {/* REACTIVITY & ANXIETY */}
        <section id="reactivity" className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">Reactivity & Anxiety: Calm Systems Beat Heroics</h2>
          <p className="mb-3">
            “Reactivity” usually means <em>big feelings</em> about specific triggers—other dogs near barriers, strangers in uniforms, clanging gates,
            food bowls in sightlines. The solution isn’t “more socialization” in chaotic spaces; it’s structured predictability, minimal triggers, and
            humane handling. Choose facilities that commit to <strong>reward-based, Fear Free–style</strong> care and reject aversive tools. Ask for a
            <strong> handler consistency</strong> plan and a quiet housing option away from high-traffic corridors.
          </p>

          <h3 className="text-lg font-semibold mt-2 mb-1">What an Evaluation Visit Should Include</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Meet-and-greet in a low-stimulus area; allow sniffing time; no rushed greetings.</li>
            <li>Walk-through of housing and routes; note sightlines (use of visual barriers), noise, and door hardware noise.</li>
            <li>Short handling trial: gentle collar touch, harness on/off, mock medication “pretend pill” with treats.</li>
            <li>Discussion of <strong>boarding-only</strong> (no daycare) vs. tiny curated playpairs vs. solo enrichment plans.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Muzzle Training = More Options, More Safety</h3>
          <p className="mb-3">
            A well-fitted <strong>basket muzzle</strong> allows panting and drinking and makes vet visits, injections, and nail trims safer and calmer.
            Start at home weeks in advance: pair the muzzle with treats, build duration slowly, and practice calm handling games. Provide your dog’s fitted
            muzzle at check-in and add it to the care plan.
          </p>

          <h3 className="text-lg font-semibold mt-2 mb-1">Enrichment That Soothes (Not Spins-Up)</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Sniff and forage games, lickmats, scatter feeding in private areas.</li>
            <li>Short, predictable leash walks with the <em>same</em> two handlers.</li>
            <li>Quiet-time chews for known safe chewers only; otherwise fleece “snuffle” routines.</li>
            <li>Avoid high-arousal group play, squeaky toys in bays, or face-offs at gate fronts.</li>
          </ul>

          <div className="rounded-md border border-[#d9cfc2] bg-[#fffaf2] p-4 text-sm">
            <strong>Medication note:</strong> Any behavior meds (e.g., trazodone, gabapentin) should be prescribed and timed by your veterinarian. Facilities
            should never add or change medication without veterinary direction.
          </div>
        </section>

        {/* SEIZURES */}
        <section id="seizures" className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">Seizure Disorders: Timing, Triggers & Emergency Planning</h2>
          <p className="mb-3">
            Dogs with epilepsy or other seizure disorders can board safely when medication timing is precise, rest is protected, and staff know exactly what to do.
            You’ll prepare a <strong>Seizure Plan</strong> with your veterinarian (include meds, triggers, thresholds, ER contacts) and attach it to your boarding file.
          </p>

          <h3 className="text-lg font-semibold mt-2 mb-1">Medication Timing Is Non-Negotiable</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Bring meds in original containers with clear labels and a printed dosing chart.</li>
            <li>Request <strong>two-person verification</strong> for each dose (initials on the log).</li>
            <li>Ask for phone photo-confirmation of admin times if that helps you feel secure.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Triggers & Environment</h3>
          <p className="mb-3">
            Commonly reported precipitants in dogs include <em>stress</em> and <em>sleep disruption</em>. True <em>photosensitivity</em> (light-triggered seizures)
            exists in some dogs but is uncommon; still, avoid strobe-like flicker and keep overnights dark and quiet. Staff should minimize startle noises after lights-down.
          </p>

          <h3 className="text-lg font-semibold mt-2 mb-1">Emergency Protocol (Discuss with Your Vet)</h3>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>When to <strong>start emergency medication</strong> (e.g., seizure lasting &gt; X minutes or cluster pattern)—as prescribed by your veterinarian.</li>
            <li><strong>How</strong> to administer owner-provided emergency medication (e.g., intranasal device) and when to transport to ER.</li>
            <li>Post-ictal care: dim lights, minimal handling, water available when coordinated, quiet rest.</li>
            <li>What to record: time started, duration, what was given, recovery notes, and when you/your vet were contacted.</li>
          </ul>

          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Safety note:</strong> Do not place hands near a seizing dog’s mouth. Time the event, follow the written plan, and escalate per thresholds.
          </div>
        </section>

        {/* DIABETES */}
        <section id="diabetes" className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">Diabetes Mellitus: Meals, Insulin & Monitoring</h2>
          <p className="mb-3">
            Boarding with diabetes is feasible with a <strong>locked-in routine</strong>: predictable feeding times, correct insulin type/syringe pairing, dose
            double-checks, and clear hypoglycemia steps. Align all details with your veterinarian and use the medication log template below.
          </p>

          <h3 className="text-lg font-semibold mt-2 mb-1">Feeding & Insulin Rhythm</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Most diabetic dogs eat <strong>twice daily</strong> with insulin tied to meals on a fixed schedule (time windows approved by your vet).</li>
            <li>Provide exact food brand, formula, and measuring method; pack extra for delays.</li>
            <li>Leave written instructions for what to do if appetite is poor (who to call, whether to delay/adjust per your vet’s plan).</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Insulin Handling & Checks</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Confirm insulin <strong>type</strong> and <strong>syringe</strong>: U-40 (e.g., porcine insulin zinc suspension) vs U-100 human syringes—<em>mismatch causes dosing errors</em>.</li>
            <li>Storage: keep refrigerated per label; follow product-specific mixing instructions; avoid foam/bubbles.</li>
            <li>Require <strong>two-person sign-off</strong> for every dose drawn and administered.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Hypoglycemia Readiness</h3>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>Know early signs (quiet, shivering, ataxia) and severe signs (collapse, seizures).</li>
            <li>Have a vet-approved plan for what to do if your dog is symptomatic and <em>conscious</em> vs. nonresponsive; call the vet/ER immediately.</li>
            <li>Document events in the log and notify you and your veterinarian without delay.</li>
          </ul>

          <div className="rounded-md border border-[#d9cfc2] bg-[#fffaf2] p-4 text-sm">
            <strong>Pro tip:</strong> Bring labeled backup vials/pens, spare syringes, and a copy of your dog’s most recent curves/fructosamine if available.
          </div>
        </section>

        {/* OTHER NEEDS */}
        <section id="other-needs" className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">Other Common Needs (Cardiac, Renal, Allergies, Mobility, Seniors)</h2>

          <h3 className="text-lg font-semibold mt-2 mb-1">Cardiac Medications (e.g., MMVD/Heart Failure)</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Exact timing matters (e.g., pimobendan before meals per your vet’s directive).</li>
            <li>Watch for cough changes, exercise intolerance, respiratory rate spikes; know your vet’s threshold for ER.</li>
            <li>Avoid high-arousal play; prefer leash walks and calm enrichment.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Renal Diets & CKD</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Bring the prescribed renal diet; do not substitute.</li>
            <li>Encourage hydration; note appetite trends and vomiting promptly.</li>
            <li>If subcutaneous fluids are part of the plan, confirm trained staff and written veterinary authorization.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Allergies & Dermatitis</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Pack approved treats/chews only; no pantry surprises; post “<em>Do Not Feed</em>” signage on run.</li>
            <li>Ear/skin meds require calm handling; provide cotton, gloves, and exact instructions.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Mobility Limits & Arthritis</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Non-slip flooring, ramps, lift harnesses, slow leash walks.</li>
            <li>Schedule meds <em>before</em> activity if directed; monitor for soreness after play.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Seniors & Cognitive Changes</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Protect sleep with early-evening wind-down and darker, quieter housing.</li>
            <li>Keep routines simple and consistent; avoid large group play.</li>
            <li>Note night-waking, pacing, vocalization; reduce stimulation after dinner.</li>
          </ul>
        </section>

        {/* PACKING & PAPERWORK */}
        <section id="packing" className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">Packing & Paperwork (What to Bring, Exactly)</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-2">📄 Documents</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Printed medication list with exact times; dosing chart (see template).</li>
                <li>Veterinary <strong>Seizure Plan</strong> and/or <strong>Diabetes Plan</strong> signed by your vet.</li>
                <li>Consent for emergency treatment + payment authorization.</li>
                <li>Primary vet + backup vet + 24/7 ER hospital contacts.</li>
                <li>Behavior notes (triggers, handling preferences, muzzle-fit size).</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">🧳 Gear & Supplies</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Exact diet (labeled), measuring cup, treats that fit the diet.</li>
                <li>All meds in original containers; emergency meds if prescribed.</li>
                <li>Fitted basket muzzle (if trained), harness, ID tags, backup leash.</li>
                <li>Bedding or worn T-shirt for scent comfort (washable).</li>
                <li>Chews/lickmats you’ve already vetted for safety.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* FACILITY FIT */}
        <section id="facility" className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">Facility Fit & Trial Overnight (Verify Before You Book)</h2>
          <h3 className="text-lg font-semibold mt-2 mb-1">Capabilities to Confirm</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Can they keep <strong>strict medication timing</strong> with two-person checks?</li>
            <li>Quiet housing with visual barriers; individual enrichment plans.</li>
            <li>Handler consistency; staff trained in <em>humane</em>, reward-based handling.</li>
            <li>24/7 presence or reliable night checks; clear ER transport plan.</li>
            <li>Comfort with muzzles and special diets; secure food storage.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Red Flags</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>“We can adjust meds as we see fit” or refusal to use your dosing chart.</li>
            <li>Only large-group daycare as enrichment; no private options.</            li>
            <li>High-noise, high-traffic housing with no option to reduce stimulation.</li>
            <li>No written emergency protocol; vague answers about ER partnerships.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Trial Plan</h3>
          <ol className="list-decimal pl-5 space-y-1">
            <li><strong>Day trial:</strong> drop-off after breakfast; one mid-day med or handling task; pick-up before dinner; review notes.</li>
            <li><strong>Single overnight:</strong> full meal/med schedule; practice emergency communication tree (no meds given unless needed).</li>
            <li>Debrief and adjust the plan; only then schedule a multi-night stay.</li>
          </ol>
        </section>

        {/* STAFF SCRIPTS */}
        <section id="scripts" className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">Staff Scripts & Daily Rhythm (What Good Looks Like)</h2>

          <h3 className="text-lg font-semibold mt-2 mb-1">Sample Day for a Special-Needs Boarder</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>7:00</strong> — Lights up; calm greeting; outside potty walk.</li>
            <li><strong>7:30</strong> — Breakfast; <em>verify appetite</em>.</li>
            <li><strong>7:45</strong> — Morning meds/insulin with two-person check; log signatures.</li>
            <li><strong>10:30</strong> — Low-arousal enrichment (sniff walk, scatter feed, puzzle).</li>
            <li><strong>12:30</strong> — Quiet rest (darkened bay, whiteboard “Do Not Disturb”).</li>
            <li><strong>3:00</strong> — Short handling session (muzzle practice, ear check if needed).</li>
            <li><strong>5:30</strong> — Dinner; note appetite and stool.</li>
            <li><strong>5:45–6:00</strong> — Evening meds/insulin; two-person check; log.</li>
            <li><strong>9:00</strong> — Last outs; lights-down; silent rounds.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Three Handy Staff Scripts</h3>
          <div className="rounded-md border border-[#d9cfc2] bg-[#fffaf2] p-4 text-sm space-y-3">
            <p><strong>Greeting a reactive dog:</strong> “Hi, {`{Dog}`}. I’m going to step sideways and toss a treat. When you look away from the door, I’ll open it. Thank you.”</p>
            <p><strong>Seizure event call:</strong> “{`{Owner}`}, this is {`{Facility}`}. {`{Dog}`} started a seizure at 3:12 pm. We followed the plan, administered the prescribed emergency med at 3:15 pm, and the seizure ended at 3:18 pm. {`{Dog}`} is resting; we are en route to {`{ER Hospital}`} per your plan.”</p>
            <p><strong>Hypoglycemia alert:</strong> “{`{Owner}`}, {`{Dog}`} showed wobbliness before dinner and didn’t want to eat. We paused insulin, contacted {`{Vet}`}, and are following their instructions now. We’ll text updates every 15 minutes until stable.”</p>
          </div>
        </section>

        {/* TEMPLATES */}
        <section id="templates" className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">Templates & Logs (Copy/Paste)</h2>

          <h3 className="text-lg font-semibold mt-2 mb-1">1) Medication Log (Two-Person Check)</h3>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm mb-4">
            <p className="mb-2"><strong>Fields:</strong> Date • Time Due • Time Given • Medication • Dose • Route • Food Eaten? • Initials (Giver) • Initials (Verifier) • Comments</p>
            <p>Example row: 8/15 • 7:45a • Phenobarbital • 64 mg • PO • Ate 100% • AB • KL • Calm, no issues</p>
          </div>

          <h3 className="text-lg font-semibold mt-2 mb-1">2) Daily Report Card</h3>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>Appetite (%, notes) • Water intake (normal ↑ ↓) • Stool (normal/soft/diarrhea) • Urination (normal/frequent/scant)</li>
            <li>Energy/arousal (calm / alert / amped) • Notable triggers • Enrichment used • Rest quality (day/night)</li>
            <li>Medications given (Y/N—see log) • Any incidents or staff notes • Photos (optional)</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">3) Emergency Instruction Sheet (Owner + Vet Signed)</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Primary diagnosis: {`{e.g., Idiopathic Epilepsy / Diabetes Mellitus}`}</li>
            <li>Usual medications & exact times</li>
            <li>Emergency thresholds (what triggers action)</li>
            <li>Emergency medication name, location, route (as prescribed), and <em>who</em> is authorized to use it</li>
            <li>Preferred ER hospital • Transport method • Who to call first/second</li>
            <li>Owner contact priority (text/call) • Permission to authorize treatment up to ${`{amount}`}</li>
          </ul>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">Frequently Asked Questions</h2>

          <p className="mb-3">
            <strong>Is group daycare ever appropriate for a reactive dog?</strong><br />
            Sometimes, but often <em>no</em>. Many reactive dogs thrive on solo enrichment and predictable leash walks instead of free-play groups.
          </p>

          <p className="mb-3">
            <strong>Should I sedate my dog for boarding?</strong><br />
            Only under your veterinarian’s guidance. Sedation without true anxiolysis can backfire; ask about behavior-med plans tailored to your dog.
          </p>

          <p className="mb-3">
            <strong>How exact must seizure meds be?</strong><br />
            Very. Ask the facility to set phone alarms and use two-person verification for each dose.
          </p>

          <p className="mb-3">
            <strong>What if my dog has a seizure overnight?</strong><br />
            Staff should follow your written plan, administer owner-provided emergency medication if indicated, record times/actions, and transport to the ER per instructions.
          </p>

          <p className="mb-3">
            <strong>Will flickering lights set off seizures?</strong><br />
            True photosensitivity is uncommon in dogs, but reducing flicker and keeping nights dark/quiet is prudent.
          </p>

          <p className="mb-3">
            <strong>Can the facility change insulin doses?</strong><br />
            No—only your veterinarian should adjust insulin. The facility should call you and your vet if appetite changes or signs of hypoglycemia appear.
          </p>

          <p className="mb-3">
            <strong>U-40 vs U-100 syringes—what’s the risk?</strong><br />
            Using the wrong syringe with a given insulin can cause major dosing errors. Label everything and train staff on your exact insulin system.
          </p>

          <p className="mb-3">
            <strong>What hypoglycemia signs should staff watch for?</strong><br />
            Early: unusual quiet, trembling, wobbliness; severe: collapse or seizures. Follow the vet-approved response plan and contact the vet/ER immediately.
          </p>

          <p className="mb-3">
            <strong>My senior dog is up at night—board or sit?</strong><br />
            If night pacing/vocalization is intense, in-home care is often kinder. If boarding, choose the quietest housing and maintain the home bedtime routine.
          </p>

          <p className="mb-3">
            <strong>How do I know a facility truly follows “Fear Free” handling?</strong><br />
            Ask about certifications, continuing education, and to observe a calm handling session. Your dog’s body language should soften—not escalate—over minutes.
          </p>

          <p className="mb-3">
            <strong>What’s the value of a trial overnight?</strong><br />
            It surfaces pain points early (timing, triggers, appetite) so you can fix them while you’re local and reachable.
          </p>

          <p>
            <strong>Should I pack emergency meds myself?</strong><br />
            Yes—if your veterinarian prescribes them for boarding. Label clearly and teach staff how to access and administer per the plan.
          </p>
        </section>

        {/* SOURCES */}
        <section id="sources" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">📚 Sources (Selected)</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            <li>
              2018 AAHA Diabetes Management Guidelines for Dogs & Cats (with 2022 updates).{' '}
              <a href="https://www.aaha.org/resources/2018-aaha-diabetes-management-guideline-for-dogs-and-cats/" target="_blank" rel="noopener noreferrer">
                AAHA overview
              </a>{' '}
              ·{' '}
              <a href="https://www.aaha.org/wp-content/uploads/globalassets/02-guidelines/diabetes/2018-aaha-diabetes-management-guidelines-2022-update.pdf" target="_blank" rel="noopener noreferrer">
                PDF
              </a>
            </li>
            <li>
              International Veterinary Epilepsy Task Force (IVETF) consensus on medical treatment and diagnosis of canine epilepsy.{' '}
              <a href="https://bmcvetres.biomedcentral.com/articles/10.1186/s12917-015-0464-z" target="_blank" rel="noopener noreferrer">
                Treatment (BMC Vet Res)
              </a>{' '}
              ·{' '}
              <a href="https://www.veterinair-neuroloog.nl/media/pages/publicaties/https-www-veterinair-neuroloog-nl-publicaties/42f51ad9d4-1711595895/epilepsy-diagnostics-2015-5.pdf" target="_blank" rel="noopener noreferrer">
                Diagnosis (PDF)
              </a>
            </li>
            <li>
              Intranasal midazolam vs rectal diazepam for canine status epilepticus: evidence review and study reports.{' '}
              <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC5508334/" target="_blank" rel="noopener noreferrer">
                Charalambous et&nbsp;al., 2017 (PMC)
              </a>{' '}
              ·{' '}
              <a href="https://veterinaryevidence.org/index.php/ve/article/view/689" target="_blank" rel="noopener noreferrer">
                Veterinary Evidence review (2024)
              </a>
            </li>
            <li>
              Photosensitivity in specific canine epilepsies (rare; Rhodesian Ridgeback model).{' '}
              <a href="https://www.pnas.org/doi/pdf/10.1073/pnas.1614478114" target="_blank" rel="noopener noreferrer">
                Wielaender et&nbsp;al., PNAS 2017
              </a>
            </li>
            <li>
              Seizure-precipitating factors (stress, sleep disruption) in dogs with idiopathic epilepsy.{' '}
              <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC6430923/" target="_blank" rel="noopener noreferrer">
                Forsgård et&nbsp;al., 2018
              </a>
            </li>
            <li>
              Vetsulin (porcine insulin zinc suspension) labeling & owner materials (U-40, mixing, storage).{' '}
              <a href="https://www.vetsulin.com/dogs/wp-content/uploads/sites/179/2022/03/Vetsulin-Package-Insert-1.pdf" target="_blank" rel="noopener noreferrer">
                Package insert
              </a>{' '}
              ·{' '}
              <a href="https://www.merck-animal-health-usa.com/vetsulin/dogs/syringe-administration-canine" target="_blank" rel="noopener noreferrer">
                Syringe admin
              </a>
            </li>
            <li>
              Hypoglycemia signs and management context (veterinary).{' '}
              <a href="https://www.merckvetmanual.com/endocrine-system/the-pancreas/diabetes-mellitus-in-dogs-and-cats" target="_blank" rel="noopener noreferrer">
                Merck Vet Manual: Diabetes
              </a>
            </li>
            <li>
              IRIS CKD staging & guidelines (renal diets/hydration emphasis).{' '}
              <a href="https://www.iris-kidney.com/iris-guidelines-1" target="_blank" rel="noopener noreferrer">
                IRIS Kidney
              </a>
            </li>
            <li>
              ACVIM consensus (canine myxomatous mitral valve disease—cardiac care context).{' '}
              <a href="https://onlinelibrary.wiley.com/doi/10.1111/jvim.15488" target="_blank" rel="noopener noreferrer">
                J Vet Intern Med 2019
              </a>
            </li>
            <li>
              AVSAB Position Statement: Humane (reward-based) Dog Training—handling philosophy for reactive/anxious dogs.{' '}
              <a href="https://avsab.org/wp-content/uploads/2021/08/AVSAB-Humane-Dog-Training-Position-Statement-2021.pdf" target="_blank" rel="noopener noreferrer">
                PDF
              </a>
            </li>
            <li>
              Fear Free Shelter Program (stress-reduction concepts transferable to boarding).{' '}
              <a href="https://fearfreeshelters.com/" target="_blank" rel="noopener noreferrer">
                fearfreeshelters.com
              </a>
            </li>
            <li>
              ASV 2022 Guidelines for Standards of Care in Animal Shelters (housing, enrichment, behavior).{' '}
              <a href="https://www.aspcapro.org/sites/default/files/2023-05/asvguidelinessecondedition-2022.pdf" target="_blank" rel="noopener noreferrer">
                PDF
              </a>
            </li>
            <li>
              Muzzle Up!—owner-friendly muzzle training resources.{' '}
              <a href="https://muzzleupproject.com/muzzle-training/" target="_blank" rel="noopener noreferrer">
                Training hub
              </a>
            </li>
            <li>
              2023 AAHA Senior Care Guidelines (senior routines and monitoring).{' '}
              <a href="https://www.aaha.org/resources/2023-aaha-senior-care-guidelines-for-dogs-and-cats/" target="_blank" rel="noopener noreferrer">
                AAHA summary
              </a>{' '}
              ·{' '}
              <a href="https://www.aaha.org/wp-content/uploads/globalassets/02-guidelines/2023-aaha-senior-care-guidelines-for-dogs-and-cats/resources/2023-aaha-senior-care-guidelines-for-dogs-and-cats.pdf" target="_blank" rel="noopener noreferrer">
                PDF
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
