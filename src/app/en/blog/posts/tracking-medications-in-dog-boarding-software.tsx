'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function TrackingMedicationsInDogBoardingSoftware() {
  const locale = useLocale();

  // --- Metadata ---------------------------------------------------------------
  const title =
    'Tracking Medications in Dog Boarding Software: Multi-Day Safety, Overnight Protocols, and Petunia’s Real-Time Workflow from Pre-Arrival to Check-Out';
  const date = 'August 12, 2025';
  const categories = ['boarding'] as const;

  // Keep keys/labels EXACTLY as used in prior posts
  const categoryLabels: Record<string, string> = {
    owner: 'Pet Owners',
    breeder: 'Breeders',
    rescue: 'Rescues',
    boarding: 'Boarding & Daycare',
    sitter: 'Pet Sitters',
    walker: 'Dog Walkers',
    vet: 'Veterinary Clinics',
    food: 'Dog Food & Nutrition',
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
          Boarding is not daycare stretched across more hours; it is a different operational reality.
          In boarding, dogs eat and sleep on site, medications follow a home-like cadence, and small
          changes in appetite, sleep, or stress can compound across several days and nights. What
          keeps a facility safe is the same principle that keeps a hospital safe: the right
          information, visible to the right person, at the right moment, every time. Petunia was built
          for that exact job. Owners populate their pet profiles once, and those medication details
          automatically flow to the screens your team uses before the stay, during check-in, across
          every shift, and at check-out.
        </p>

        <p className="mb-4">
          Here is how it works in practice. The owner completes their Petunia profile with medication
          names, concentrations, doses, timing, storage needs, label photos, behavioral notes, and
          clinic contacts. The moment a boarding reservation is created, those meds appear in the
          <strong> Upcoming Reservations</strong> view—visible to the owner, the business owner, and staff even
          before arrival. When the dog is <strong>checked in</strong>, that same information becomes a persistent med
          banner on the dog&rsquo;s card throughout <strong>Dogs on Property</strong>. Every staff member on every shift
          can confirm what to give, when to give it, and what to watch for without chasing sticky
          notes or logging into another system. Updates propagate immediately via Petunia&rsquo;s real-time
          database so that your night shift sees exactly what your morning shift recorded.
        </p>

        <p className="mb-4">
          From running a boarding and daycare operation for more than eight years, one pattern stands
          out: many dogs cruise through short stays with minimal issues, but longer stays—especially
          for dogs with separation anxiety—can get harder as days stack up. The most challenging phase
          often starts around day five and beyond, when cumulative stress, sleep changes, and routine
          drift begin to show. We often recommend a trusted in-home sitter for severe cases, but not
          every family wants someone inside their house, and not every dog relaxes in a stranger&rsquo;s
          home. Some dogs with deep separation distress struggle wherever they are as long as they are
          not with their people. There is no simple formula. Software cannot erase that reality, but
          it can put your team in the best position to manage it safely and communicate clearly.
        </p>

        {/* SECTION: WHY BOARDING IS DIFFERENT */}
        <h2 className="text-2xl font-semibold mt-8 mb-3">Why Medication Tracking in Boarding Is Different from Daycare</h2>
        <p className="mb-4">
          Daycare is measured in hours; boarding is measured in days and nights. That span changes the
          risk profile. In boarding, appetite can ebb, sleep can fragment, and stress may rise or fall
          in waves. Doses gate on meals, and some therapies only make sense if the dog actually eats.
          Nighttime schedules, lighting, noise, and kennel location all influence behavior and
          physiology. Over multiple days, small deviations add up.
        </p>

        <div className="rounded-xl border border-[#d9cfc2] bg-[#f7f4ee] p-4 mb-6">
          <h3 className="text-lg font-semibold mb-2">Boarding-specific risk factors your team should expect</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Appetite drift:</strong> Dogs may eat half portions for the first one to two days, then
              normalize—or skip meals entirely when stress peaks. Many medications depend on adequate
              food intake.
            </li>
            <li>
              <strong>Sleep debt:</strong> New sounds, smells, and neighbors can fragment sleep, especially for
              anxious dogs. Tired dogs can become irritable or lethargic, complicating assessments.
            </li>
            <li>
              <strong>Schedule slide:</strong> A dose at 7 p.m. at home slips toward 9 p.m. after two busy
              evenings. Across a week, that drift matters for some therapies (e.g., insulin, seizure
              prophylaxis).
            </li>
            <li>
              <strong>Compounding anxiety:</strong> Behavioral stress can build around days four to six for
              susceptible dogs. Physical signs (pacing, panting, drooling) can suppress appetite and
              interact with meds that rely on food.
            </li>
            <li>
              <strong>Shift handoffs:</strong> Days &rarr; evenings &rarr; nights &rarr; mornings. Every handoff is a
              potential failure point if information is not visible and standardized.
            </li>
          </ul>
        </div>

        {/* SECTION: HOW PETUNIA SURFACES MEDS IN BOARDING */}
        <h2 className="text-2xl font-semibold mt-8 mb-3">Collect Once, Show Everywhere: Petunia’s Boarding Flow</h2>
        <p className="mb-4">
          Petunia&rsquo;s approach is straightforward: the owner provides high-quality data once, and the
          system guarantees consistent visibility where it matters most. For boarding, there are four
          high-leverage surfaces:
        </p>

        <ol className="list-decimal pl-5 space-y-2 mb-4">
          <li>
            <strong>Client Management:</strong> A complete record by owner and pet: vaccine status, meds,
            behavior flags, documents, and clinic contacts. Use this to prep for long stays and
            confirm that label photos match what arrives at check-in.
          </li>
          <li>
            <strong>Upcoming Reservations:</strong> As soon as a boarding reservation is made, the pet&rsquo;s
            current medications appear inline with dose, route, timing, and admin notes (for example,
            &ldquo;with dinner only,&rdquo; &ldquo;store in fridge,&rdquo; &ldquo;do not give if dog refuses food&rdquo;).
          </li>
          <li>
            <strong>Dogs on Property:</strong> After check-in, the dog&rsquo;s card carries a persistent med banner
            that is readable across devices. Staff on evenings and nights see exactly what mornings
            recorded without refreshing or navigating away.
          </li>
          <li>
            <strong>Admin Log:</strong> Each administration is timestamped with the staff member, dose, route,
            relation to meals, and notes. Exportable histories support owner updates and clean handoffs
            to the dog&rsquo;s veterinarian.
          </li>
        </ol>

        <p className="mb-4">
          Because Petunia stores live medication and reservation data in a real-time database, edits
          by one person appear for everyone else immediately. A manager can correct a dose unit or add
          a &ldquo;with food&rdquo; badge at 6:05 p.m., and the evening staff sees it at 6:05 p.m. That
          immediacy is not a convenience; it is a safety feature.
        </p>

        {/* SECTION: OWNER-BUILT PROFILES */}
        <h2 className="text-2xl font-semibold mt-8 mb-3">Owner-Built Profiles: The Source of Truth for Long Stays</h2>
        <p className="mb-4">
          Everything starts with clean inputs. Require owners to complete profiles before you accept a
          boarding booking. Ask for the exact name on the label (brand and generic if listed),
          concentration, dose with units, route, timing, relation to meals, storage needs, and a
          high-resolution label photo. Encourage owners to include practical notes such as &ldquo;makes dog
          sleepy for an hour&rdquo; or &ldquo;mix with small spoon of canned food.&rdquo; With those data in place,
          your team can execute consistently instead of improvising.
        </p>

        <div className="rounded-xl border border-[#d9cfc2] bg-[#f7f4ee] p-4 mb-6">
          <h4 className="font-semibold mb-2">Profile requirements that pay off all week</h4>
          <ul className="list-disc pl-5 space-y-2">
            <li>Exact drug name and strength (e.g., 100&nbsp;mg tablet, U-40 insulin, 5&nbsp;mg/mL liquid).</li>
            <li>Dose, route, timing, and whether it must follow a full or partial meal.</li>
            <li>Storage notes (refrigeration, protect from light) and measuring device details.</li>
            <li>Label photo and, if relevant, a photo of the measuring syringe at the correct mark.</li>
            <li>Veterinarian and clinic contact with after-hours numbers and emergency plan.</li>
          </ul>
        </div>

        {/* SECTION: THE SIX RIGHTS FOR BOARDING */}
        <h2 className="text-2xl font-semibold mt-8 mb-3">The Six Rights of Medication Administration, Adapted for Boarding</h2>
        <p className="mb-4">
          Boarding facilities are not clinics, and staff should never make medical decisions. But the
          structure used in clinical settings adapts well to multi-day care and creates common habits
          across shifts:
        </p>

        <div className="rounded-xl border border-[#d9cfc2] bg-[#f7f4ee] p-4 mb-6">
          <ol className="list-decimal pl-5 space-y-2">
            <li>
              <strong>Right dog:</strong> Match pet name and photo before handling any medication. Keep the
              photo beside the med banner to reduce look-alike errors.
            </li>
            <li>
              <strong>Right medication:</strong> Label text and concentration must match the profile. If the
              bottle in hand differs from what is on file, stop and escalate before giving.
            </li>
            <li>
              <strong>Right dose:</strong> Verify units and measuring device. For liquids, draw to the mark,
              confirm with a second person for high-risk cases, and avoid household spoons.
            </li>
            <li>
              <strong>Right route:</strong> Oral tablet or liquid, eye/ear drops, topical. Injectable
              administration should only occur if your policies and the veterinarian explicitly allow
              it and staff are trained.
            </li>
            <li>
              <strong>Right time:</strong> Use timing windows relative to meals and sleep. In boarding,
              nighttime timing matters—decide up front which shift owns the 10 p.m. dose.
            </li>
            <li>
              <strong>Right documentation:</strong> Log immediately with staff name, dose, relation to meals,
              and any deviations (&ldquo;dog ate half dinner; per plan, held medication and called owner&rdquo;).
            </li>
          </ol>
        </div>

        {/* SECTION: STORAGE, LABELING, AND CHAIN OF CUSTODY */}
        <h2 className="text-2xl font-semibold mt-8 mb-3">Storage, Labeling, and Chain of Custody for Multi-Day Stays</h2>
        <p className="mb-4">
          Boarding adds storage complexity. Your refrigerator and medication drawers should have clear
          zones, tamper-evident bags for each dog, and labels that match the profile. Separate shelves
          for cold items and bins for room-temperature items keep mornings sane. For controlled
          substances supplied by owners, follow your jurisdiction&rsquo;s rules and require counted
          handoffs: count at intake, count per shift, and count at check-out with both parties signing
          off. Petunia&rsquo;s admin log can capture these counts as part of the record.
        </p>

        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>Store each dog&rsquo;s meds in a labeled container with the pet name and owner name.</li>
          <li>Keep insulin and other refrigerated items in a dedicated bin; never co-store food items.</li>
          <li>Do not share syringes or measuring devices between pets; owners should supply their own.</li>
          <li>Place label photos at the top of the dog card for quick verification at every dose.</li>
          <li>Limit edit permissions; only managers update profiles while general staff record doses.</li>
        </ul>

        {/* SECTION: APPETITE-DEPENDENT DOSING */}
        <h2 className="text-2xl font-semibold mt-8 mb-3">Appetite-Dependent Dosing: Hold, Proceed, or Escalate</h2>
        <p className="mb-4">
          The most common boarding dilemma is simple: &ldquo;The dog didn&rsquo;t eat. Do we still give the
          medication?&rdquo; The answer depends on the drug and the plan from the veterinarian. Build
          clear rules into the profile and mirror them in your SOP. Petunia supports this with badges
          (e.g., &ldquo;with food&rdquo;) and admin notes pinned to the med banner.
        </p>

        <div className="rounded-xl border border-[#d9cfc2] bg-[#f7f4ee] p-4 mb-6">
          <h4 className="font-semibold mb-2">Decision guide (always defer to the dog&rsquo;s veterinarian)</h4>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Must follow a meal:</strong> If the plan requires a full or half meal, do not give the
              medication when food is refused. Offer a small palatable topper if permitted; if still
              refused, hold and contact the owner.
            </li>
            <li>
              <strong>Flexible with snacks:</strong> Some meds are safe with a small treat. Use owner-approved
              treats and log that the dog ate before the dose.
            </li>
            <li>
              <strong>Gastroprotectants:</strong> For dogs on stomach support, timing may be specific
              (e.g., 30 minutes before food). Use timers and note the relation to meals in the log.
            </li>
          </ul>
        </div>

        {/* SECTION: DIABETES IN BOARDING */}
        <h2 className="text-2xl font-semibold mt-8 mb-3">Diabetic Dogs in Boarding: Meals, Doses, and Night Shift Roles</h2>
        <p className="mb-4">
          Diabetes management in boarding succeeds when meal timing and insulin timing mirror home as
          closely as possible. Decide which shift owns each dose and build a predictable routine.
          Require owners to bring the same syringes or pen needles used at home, labeled for their dog.
          Keep a dedicated, clearly labeled refrigerator bin for each diabetic pet and never mix
          supplies between dogs.
        </p>

        <h3 className="text-xl font-semibold mt-4 mb-2">Operational playbook</h3>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>
            <strong>Pre-arrival:</strong> Confirm insulin type and strength (U-40 vs U-100), dose, timing
            relative to meals, storage, and label photos. Add &ldquo;with food&rdquo; and &ldquo;call owner if refused&rdquo;
            badges in Petunia as needed.
          </li>
          <li>
            <strong>Check-in:</strong> Review the routine with owners and clarify what to do if a meal is
            refused or only half eaten. Document the exact thresholds.
          </li>
          <li>
            <strong>During stay:</strong> Use timers for dose windows; have a second staffer verify insulin
            volumes before administration. Monitor for signs of low blood sugar (lethargy, tremors,
            unsteady gait) and follow the written emergency plan.
          </li>
          <li>
            <strong>Night shift:</strong> Assign responsibility explicitly. If the dose is due at 9 p.m., the
            night shift owns it; they also document relation to the 6–7 p.m. dinner.
          </li>
        </ul>

        <p className="mb-4">
          Petunia&rsquo;s admin log records who dosed, when, and what relation to meals existed. For
          high-risk cases, enable a co-sign step so that two staff members verify insulin before it is
          given. That extra step pays for itself in confidence and in cleaner incident reviews.
        </p>

        {/* SECTION: SEIZURE PLANS IN BOARDING */}
        <h2 className="text-2xl font-semibold mt-8 mb-3">Seizure-Prone Dogs: Baseline Meds, Rescue Plans, and Overnight Readiness</h2>
        <p className="mb-4">
          Dogs with chronic seizure disorders often do well on maintenance therapy, but boarding adds
          environmental triggers: new sleep patterns, new neighbors, and schedule drift. Require a
          written plan from the veterinarian for any rescue therapy that might be used on site, and
          keep supplies in the dog&rsquo;s labeled bin. Train night staff to identify events, clear space,
          track time, and follow the plan exactly—or to protect and escalate if a plan is not on file.
        </p>

        <div className="rounded-xl border border-[#d9cfc2] bg-[#f7f4ee] p-4 mb-6">
          <h4 className="font-semibold mb-2">Seizure readiness checklist (day and night)</h4>
          <ul className="list-disc pl-5 space-y-2">
            <li>Owner-signed plan and veterinary instructions attached in Petunia.</li>
            <li>Labeled rescue medication provided by the owner if permitted by policy.</li>
            <li>Timer visible to record duration; call out time at one-minute intervals.</li>
            <li>Clear path to exit and a pre-chosen ER destination with phone number on the wall.</li>
            <li>Post-event documentation template and immediate owner/vet notification.</li>
          </ul>
        </div>

        {/* SECTION: BEHAVIOR AND ANXIETY OVER MULTI-DAY STAYS */}
        <h2 className="text-2xl font-semibold mt-8 mb-3">Anxiety Across a Week: What Changes Around Day Five</h2>
        <p className="mb-4">
          In our experience, the toughest phase for anxiety-prone dogs often starts after the novelty
          wears off—frequently around day five. Dogs that held it together initially may begin to pace,
          pant, or refuse food. Some families can arrange in-home care, which we often suggest for
          severe cases, but not everyone is comfortable with that, and not every dog relaxes in a new
          house. The core reality remains: some dogs show the same distress in any environment away
          from their people. When that happens, your job is to keep the dog safe, minimize stress,
          communicate proactively, and follow pre-written plans on situational medications.
        </p>

        <div className="rounded-xl border border-[#d9cfc2] bg-[#f7f4ee] p-4 mb-6">
          <h4 className="font-semibold mb-2">Practical supports for anxious boarders</h4>
          <ul className="list-disc pl-5 space-y-2">
            <li>Quiet rooms, softer lighting at night, white noise, and consistent bedtime routines.</li>
            <li>
              Food strategies: owner-approved toppers, warmed meals, or split portions to encourage
              eating before appetite-dependent doses.
            </li>
            <li>
              Clearly written situational med plans from the veterinarian (e.g., trazodone,
              gabapentin) with timing and maximum daily limits.
            </li>
            <li>Daily notes to owners summarizing meals, meds, rest, and behavior—short and factual.</li>
            <li>Escalation thresholds: at what point you call, seek veterinary input, or end the stay.</li>
          </ul>
        </div>

        {/* SECTION: COMMON MED CATEGORIES IN BOARDING */}
        <h2 className="text-2xl font-semibold mt-8 mb-3">Common Categories of Medications You’ll See in Boarding</h2>
        <p className="mb-4">
          The medication list in boarding mirrors what primary and specialty teams manage daily. Your
          staff should never change a therapy, but they can execute accurately and monitor for
          expected effects. These categories appear frequently:
        </p>

        <h3 className="text-xl font-semibold mt-4 mb-2">Pain and inflammation</h3>
        <p className="mb-4">
          Prescription anti-inflammatories for arthritis or post-surgical care require meal timing,
          dose accuracy, and monitoring for appetite changes, vomiting, diarrhea, or unusual
          lethargy. Never add human medications. If a morning dose was given at home, do not repeat
          it. Log what the owner reports and confirm at check-in.
        </p>

        <h3 className="text-xl font-semibold mt-4 mb-2">Allergies and dermatology</h3>
        <p className="mb-4">
          Expect oral itch control medications, short steroid tapers, medicated ear drops, and topical
          ointments. Note practical handling in Petunia (&ldquo;ear drops after dinner&rdquo; or &ldquo;apply with
          gloves&rdquo;). For food trials or allergies, attach a &ldquo;No treats&rdquo; or &ldquo;Owner-approved treats
          only&rdquo; badge and separate kitchen bins.
        </p>

        <h3 className="text-xl font-semibold mt-4 mb-2">Gastrointestinal support</h3>
        <p className="mb-4">
          Stomach acid reducers, bile-acid binders, and probiotics are common. Timing may be specific
          relative to meals. Use timers and document relation to food for each dose.
        </p>

        <h3 className="text-xl font-semibold mt-4 mb-2">Cardiac and endocrine</h3>
        <p className="mb-4">
          Heart medications can have rigid timing expectations. Endocrine therapies beyond diabetes
          (e.g., thyroid supplementation) benefit from consistent timing relative to meals and sleep.
          Mirror the home routine as closely as possible.
        </p>

        <h3 className="text-xl font-semibold mt-4 mb-2">Behavioral medications</h3>
        <p className="mb-4">
          Daily maintenance therapies and situational plans appear frequently in boarding. Normalize
          them as routine care. Keep details private from other clients, and confirm that &ldquo;as needed&rdquo;
          doses align with the owner&rsquo;s and veterinarian&rsquo;s written plan, especially overnight.
        </p>

        {/* SECTION: SHIFT HUDDLES AND NIGHT OPERATIONS */}
        <h2 className="text-2xl font-semibold mt-8 mb-3">Shift Huddles, Night Operations, and Documentation Discipline</h2>
        <p className="mb-4">
          Multi-day safety is mostly about doing ordinary things the same way every time. Make your
          shift huddle a habit: review due-soon doses, appetite notes, and any dogs with rescue plans
          or insulin. Confirm who owns each evening and night task, and agree on escalation
          thresholds. Then document relentlessly. Measure once, give once, log once.
        </p>

        <div className="rounded-xl border border-[#d9cfc2] bg-[#f7f4ee] p-4 mb-6">
          <h4 className="font-semibold mb-2">Five-Minute Med Huddle (morning, evening, and night)</h4>
          <ul className="list-disc pl-5 space-y-2">
            <li>Review appetite for each dog with meal-dependent meds; note who refused or ate half.</li>
            <li>Identify insulin cases and confirm syringe or pen supplies for the shift.</li>
            <li>Verify any rescue plans and check that the labeled medications are on site.</li>
            <li>Assign dose ownership by time block (e.g., 6–8 p.m., 9–11 p.m., early morning).</li>
            <li>Rehearse the escalation path: owner &rarr; primary vet &rarr; local ER.</li>
          </ul>
        </div>

        <h3 className="text-xl font-semibold mt-4 mb-2">Documentation standards</h3>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>Log immediately after administration with dose, route, and relation to meals.</li>
          <li>Use neutral, factual language for deviations (&ldquo;refused dinner; held per plan&rdquo;).</li>
          <li>Attach quick photos if a label or device changed mid-stay (owner brought a new bottle).</li>
          <li>Export the stay&rsquo;s med history at check-out for the owner and veterinarian if requested.</li>
        </ul>

        {/* SECTION: COMMUNICATION WITH OWNERS */}
        <h2 className="text-2xl font-semibold mt-8 mb-3">Owner Communication: Daily Notes, Escalations, and Check-Out Summaries</h2>
        <p className="mb-4">
          Clients care about two things: &ldquo;Is my dog okay?&rdquo; and &ldquo;Did you follow the plan?&rdquo; Short daily
          summaries build trust. Keep them simple: meals, meds, rest, play, and any observations. If a
          dose is skipped per plan due to poor appetite, say so clearly and without drama. If anxiety
          increased, describe what you saw and what you tried, and state the next step you recommend.
        </p>

        <div className="rounded-xl border border-[#d9cfc2] bg-[#f7f4ee] p-4 mb-6">
          <h4 className="font-semibold mb-2">Check-out packet (optional but appreciated)</h4>
          <ul className="list-disc pl-5 space-y-2">
            <li>Med administration history by date and time, including any holds or deviations.</li>
            <li>Meal notes and weight trend if you track it for long stays.</li>
            <li>Any incidents and how they were handled; attach ER discharge paperwork if applicable.</li>
            <li>Suggestions for next time (e.g., send measured syringes, bring higher-value topper).</li>
          </ul>
        </div>

        {/* SECTION: POLICY AND TRAINING */}
        <h2 className="text-2xl font-semibold mt-8 mb-3">Policy and Training: Turn Features into Habits</h2>
        <p className="mb-4">
          Software shows the plan; policy and training make it happen. Write your SOP so that a new
          hire can succeed on day one with supervision and be independently reliable by week two.
          Include photos of correct storage, examples of good documentation, and a troubleshooting
          page for &ldquo;dog refused meal,&rdquo; &ldquo;label does not match profile,&rdquo; and &ldquo;client asked for a
          change.&rdquo; Make your &ldquo;no improvisation&rdquo; rule explicit: if a client believes a change is
          needed, it must come from their veterinarian in writing.
        </p>

        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>Run shadow scenarios that include evening and night doses, not just daytime drills.</li>
          <li>Teach staff to rely on the med banner, not hallway conversations or memory.</li>
          <li>Use role-based permissions so only managers edit profiles; staff record administrations.</li>
          <li>Audit a random stay each week for accuracy and timing; give feedback fast.</li>
        </ul>

        {/* SECTION: PETUNIA FEATURES THAT MATTER MOST IN BOARDING */}
        <h2 className="text-2xl font-semibold mt-8 mb-3">Petunia Features That Matter Most in Boarding</h2>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>
            <strong>Real-time med banner:</strong> Always-visible list for each dog on property with timing
            badges and &ldquo;with food&rdquo; flags.
          </li>
          <li>
            <strong>Due-soon alerts:</strong> Visual cues for doses coming up within a configurable window,
            including late-evening and early-morning windows.
          </li>
          <li>
            <strong>Double-check workflow:</strong> Optional co-sign for high-risk items like insulin or
            controlled substances.
          </li>
          <li>
            <strong>Photo verification:</strong> Compare the bottle in hand with the on-file label before
            administering; log &ldquo;mismatch&rdquo; if anything differs.
          </li>
          <li>
            <strong>Role-based permissions:</strong> Separate edit rights from administration rights to reduce
            accidental changes during rush periods.
          </li>
          <li>
            <strong>Exportable logs:</strong> Share a med history for a date range for owner communication or a
            veterinary recheck.
          </li>
        </ul>

        {/* SECTION: EMERGENCY READINESS */}
        <h2 className="text-2xl font-semibold mt-8 mb-3">Emergency Readiness: Seconds, Roles, and Routes</h2>
        <p className="mb-4">
          Emergencies do not care about shift changes. Prep your environment so any staffer can act:
          a laminated seizure plan near play yards and the med area, ER directions printed by the
          exit, and a clear script for who calls whom. Practice quarterly. The goal is not heroics; it
          is calm execution of a rehearsed plan.
        </p>

        <div className="rounded-xl border border-[#d9cfc2] bg-[#f7f4ee] p-4 mb-6">
          <h4 className="font-semibold mb-2">Rapid-response flow (practice with timers)</h4>
          <ol className="list-decimal pl-5 space-y-2">
            <li>Clear space and note the exact time the event began.</li>
            <li>Open the dog card in Petunia: is there a written plan? Are supplies on site?</li>
            <li>Execute the plan if authorized; otherwise protect the dog and call owner and clinic.</li>
            <li>Prepare transport if advised; one person drives, one calls ahead to the ER.</li>
            <li>Document: duration, intervention, contacts, and outcome.</li>
          </ol>
        </div>

        {/* SECTION: PRIVACY AND PROFESSIONALISM */}
        <h2 className="text-2xl font-semibold mt-8 mb-3">Privacy, Consent, and Professional Tone</h2>
        <p className="mb-4">
          Medication details are personal health information. Limit access to staff who need it,
          position screens away from the lobby, and keep conversations private. Use neutral, respectful
          language in all notes and messages. After an incident, provide a clear account of facts and
          next steps without speculation.
        </p>

        {/* SECTION: PUTTING IT TOGETHER */}
        <h2 className="text-2xl font-semibold mt-8 mb-3">Software + SOP + Habits = Safer Stays</h2>
        <p className="mb-4">
          Boarding safety lives in tiny, ordinary things repeated the same way across many days and
          nights. Petunia centralizes owner-provided data, keeps it visible where staff work, and
          records what happens. Your SOP and training then turn that visibility into reliable action.
          For anxious dogs and long stays, that reliability is not just operational—it is humane.
        </p>

        {/* REFERENCES */}
        <h2 className="text-2xl font-semibold mt-8 mb-3">References &amp; Source Notes</h2>
        <p className="mb-4">
          The clinical resources below support general concepts referenced in this article. Facilities
          must always follow case-specific instructions from each dog&rsquo;s veterinarian.
        </p>
        <ul className="list-disc pl-5 space-y-2 mb-10">
          <li>
            AAHA Diabetes Management Guidelines for Dogs and Cats (insulin choices, handling,
            monitoring; updates and summaries).{' '}
            <a
              className="underline"
              href="https://www.aaha.org/resources/2018-aaha-diabetes-management-guideline-for-dogs-and-cats/"
              target="_blank"
              rel="noopener noreferrer"
            >
              aaha.org
            </a>{' '}
            and 2022 PDF update.
          </li>
          <li>
            Merck Veterinary Manual: Diabetes mellitus in dogs and cats; anticonvulsant overviews and
            emergency management.{' '}
            <a
              className="underline"
              href="https://www.merckvetmanual.com/endocrine-system/the-pancreas/diabetes-mellitus-in-dogs-and-cats"
              target="_blank"
              rel="noopener noreferrer"
            >
              merckvetmanual.com
            </a>
            .
          </li>
          <li>
            ACVIM consensus recommendations on seizure management in dogs; guidance on status
            epilepticus and cluster seizures.{' '}
            <a
              className="underline"
              href="https://pmc.ncbi.nlm.nih.gov/articles/PMC4913615/"
              target="_blank"
              rel="noopener noreferrer"
            >
              ACVIM Consensus (2015)
            </a>{' '}
            and{' '}
            <a
              className="underline"
              href="https://pubmed.ncbi.nlm.nih.gov/37921621/"
              target="_blank"
              rel="noopener noreferrer"
            >
              status epilepticus update
            </a>
            .
          </li>
          <li>
            Comparative discussion of intranasal midazolam and rectal diazepam for out-of-hospital
            rescue.{' '}
            <a
              className="underline"
              href="https://pmc.ncbi.nlm.nih.gov/articles/PMC5508334/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Charalambous et&nbsp;al., 2017
            </a>
            .
          </li>
          <li>
            FDA and AVMA public guidance on veterinary prescription medications and dispensing
            considerations.{' '}
            <a
              className="underline"
              href="https://www.fda.gov/animal-veterinary/product-safety-information/veterinary-nonsteroidal-anti-inflammatory-drugs-nsaids"
              target="_blank"
              rel="noopener noreferrer"
            >
              fda.gov (NSAIDs)
            </a>{' '}
            and{' '}
            <a
              className="underline"
              href="https://www.avma.org/resources-tools/avma-policies/use-prescription-drugs-veterinary-medicine"
              target="_blank"
              rel="noopener noreferrer"
            >
              avma.org (dispensing policy)
            </a>
            .
          </li>
        </ul>

        <Link
          href={`/${locale}/blog`}
          className="underline text-[#2c4a30] font-medium hover:opacity-80"
        >
          ← Back to Blog
        </Link>

        {/* Disclaimer */}
        <p className="text-xs text-gray-500 mt-8">
          This article is informational and operational in nature. It is not medical or veterinary
          advice. Always follow the dog&rsquo;s attending veterinarian for case-specific instructions,
          medication selections, dosing, and emergencies.
        </p>
      </main>
    </>
  );
}
