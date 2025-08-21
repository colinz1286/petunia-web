'use client';

import Head from 'next/head';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function TrackingMedicationsInDogDaycareSoftware() {
  const locale = useLocale();

  // --- Metadata ---------------------------------------------------------------
  const title =
    'Tracking Medications in Dog Daycare Software: Real-Time Safety, Clear Protocols, and the Petunia Workflow from Check-In to Check-Out';
  const date = 'August 21, 2025';
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
      <Head>
        <title>{title} – Petunia Blog</title>
        <meta
          name="description"
          content="Why medication tracking matters in dog daycare, how Petunia surfaces meds in Client Management, Upcoming Appointments, and Dogs on Property views, and practical protocols for diabetic and seizure-prone dogs. Real-time visibility using a Realtime Database, audit-friendly logs, and staff-ready checklists."
        />
        <meta name="robots" content="all" />
      </Head>

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
          In a busy daycare environment, medication details can become scattered across texts, paper
          instructions, and staff memory. That fragmentation is risky. The right software removes the
          guesswork by centralizing each dog&rsquo;s medications and then surfacing them automatically
          wherever staff need to see them. Petunia was designed for that exact job: clients build
          their profiles once, and the platform carries those details forward across your workflow so
          that teams can act quickly, consistently, and safely.
        </p>

        <p className="mb-4">
          In Petunia, medication data lives with the pet&rsquo;s profile and flows to the screens where it
          matters most. Inside <strong>Client Management</strong>, you get an all-in-one picture for each client:
          pets, vaccines, behavior notes, documents, and medications presented together. On the
          <strong> Upcoming Appointments</strong> view, a daycare reservation lists the dog&rsquo;s current meds in plain
          sight &mdash; no digging through files. And the moment a dog is <strong>checked in</strong>, those meds
          appear alongside the dog&rsquo;s card throughout <strong>Dogs on Property</strong> until check-out, which
          means any staff member can confirm what to give, when to monitor, and what to watch for,
          without waiting for a page load or asking a colleague. Petunia uses a real-time database to
          power this on-demand visibility, so updates post instantly for the entire team.
        </p>

        {/* SECTION: WHY THIS MATTERS */}
        <h2 className="text-2xl font-semibold mt-8 mb-3">Why Medication Tracking Matters in Daycare</h2>
        <p className="mb-4">
          Even though daycare is a daytime service, unexpected situations happen. A dog may arrive
          with a lunchtime dose of insulin, an afternoon ear drop, or a behavioral medication that
          needs precise timing. Another dog may experience a breakthrough seizure and require rescue
          medication under a veterinarian&rsquo;s plan. When meds are not visible at the exact moment
          decisions are made, teams lose time and confidence. Clear visibility prevents delays,
          mishaps, and contradictory instructions.
        </p>

        <div className="rounded-xl border border-[#d9cfc2] bg-[#f7f4ee] p-4 mb-6">
          <h3 className="text-lg font-semibold mb-2">Operational benefits of real-time medication visibility</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Speed:</strong> Staff see the dog&rsquo;s current medication list the instant they open the
              card, reducing back-and-forth and queue time at reception and during mid-day handoffs.
            </li>
            <li>
              <strong>Consistency:</strong> Every team member sees the same source of truth, preventing
              conflicting instructions between morning and afternoon shifts.
            </li>
            <li>
              <strong>Accountability:</strong> A timestamped record of what was administered and when supports
              quality control, owner confidence, and clean incident documentation.
            </li>
            <li>
              <strong>Simplified training:</strong> New hires learn to rely on the dog&rsquo;s card and the med
              banner rather than personal notes or verbal memory.
            </li>
          </ul>
        </div>

        {/* SECTION: HOW PETUNIA SURFACES MEDS */}
        <h2 className="text-2xl font-semibold mt-8 mb-3">How Petunia Surfaces Medications Across Your Workflow</h2>
        <p className="mb-4">
          Petunia&rsquo;s philosophy is simple: collect once, show everywhere it matters. Owners enter
          medications directly in their account and keep them up to date. Admins can review, request
          clarifications, or add administrative notes (for example, &ldquo;Only give if dog eats at least
          half of lunch&rdquo;). From there, medication data appears in three high-impact places:
        </p>

        <ol className="list-decimal pl-5 space-y-2 mb-4">
          <li>
            <strong>Client Management:</strong> The owner record aggregates everything needed to serve that
            client. Meds are listed with dose, route, timing, and any facility rules you attach (e.g.,
            &ldquo;store in fridge&rdquo;). Staff preparing for a busy day can scan client meds in one pass.
          </li>
          <li>
            <strong>Upcoming Appointments:</strong> Each upcoming daycare reservation shows the pet&rsquo;s current
            meds inline. This ensures that pre-arrival checks and mid-day shifts know exactly what may
            be due, what to monitor, and whether any special handling is required.
          </li>
          <li>
            <strong>Dogs on Property:</strong> Once checked in, the dog&rsquo;s card carries an always-visible med
            banner so that staff can confirm details at a glance during playgroup moves, breaks, and
            pick-up. The information stays present until check-out.
          </li>
        </ol>

        <p className="mb-4">
          Because Petunia uses a Realtime Database, any change to a pet&rsquo;s medications (an owner
          update, a staff correction, or a temporary hold) propagates immediately. There is no polling
          delay or page refresh required to see the updated state. This near-instant visibility is a
          practical safety feature in a dynamic facility.
        </p>

        {/* SECTION: THE SIX RIGHTS, ADAPTED */}
        <h2 className="text-2xl font-semibold mt-8 mb-3">The Six Rights of Medication Administration, Adapted for Daycare</h2>
        <p className="mb-4">
          Daycare teams are not veterinary hospitals, and staff should never improvise dosing or
          substitute medical judgment. Still, the structure of the &ldquo;six rights&rdquo; used in clinical
          settings adapts well to a daycare context and forms the backbone of your standard operating
          procedure:
        </p>

        <div className="rounded-xl border border-[#d9cfc2] bg-[#f7f4ee] p-4 mb-6">
          <ol className="list-decimal pl-5 space-y-2">
            <li>
              <strong>Right dog:</strong> Confirm the pet&rsquo;s name, photo, and owner before handling any
              medication. Petunia places the med list on the same card as the photo to reduce errors.
            </li>
            <li>
              <strong>Right medication:</strong> Match the label text and concentration to what is stored in
              the profile. If the bottle in hand does not match the profile, stop and escalate.
            </li>
            <li>
              <strong>Right dose:</strong> Verify the dose unit (mg, mL, units), the concentration, and the
              measuring device. Require owner-provided syringes for insulins and use your own marked
              oral syringes for liquids.
            </li>
            <li>
              <strong>Right route:</strong> Oral tablet, oral liquid, eye drops, ear drops, topical, or
              injectable (only if your facility policy and the veterinarian permit it). Avoid scope
              creep.
            </li>
            <li>
              <strong>Right time:</strong> Show due-time windows in the dog card. For meds with strict timing,
              display countdowns and alert badges. Petunia can store custom notes like &ldquo;with food&rdquo; or
              &ldquo;do not give if vomiting.&rdquo;
            </li>
            <li>
              <strong>Right documentation:</strong> Immediately log what was given, the dose, and the staff
              member. Timestamp the entry and attach a short note if anything deviated from plan (for
              example, &ldquo;partial dose per owner instruction&rdquo;).
            </li>
          </ol>
        </div>

        {/* SECTION: DIABETES PROTOCOL */}
        <h2 className="text-2xl font-semibold mt-8 mb-3">Diabetic Dogs in Daycare: Practical Guardrails</h2>
        <p className="mb-4">
          Diabetes mellitus in dogs is managed under veterinary supervision using insulin and
          structured feeding. For daycare, the goal is to align your operations with the dog&rsquo;s
          established plan: keep timing accurate, watch for signs of hypoglycemia or distress, and
          escalate promptly if something falls outside of plan. Your facility policies should state
          clearly what you can do, what requires owner permission in writing, and what is strictly
          handled by the veterinarian.
        </p>

        <h3 className="text-xl font-semibold mt-4 mb-2">Insulin types, storage, and timing</h3>
        <p className="mb-4">
          Common long-standing options for dogs include porcine zinc lente insulin (often U-40), NPH,
          and, in some cases, human analogs like glargine or detemir per the attending veterinarian.
          Your staff do not choose the insulin; they execute the plan. Petunia&rsquo;s med card should show
          the <em>exact product name</em>, strength (U-40 vs U-100 if applicable), typical dose, and timing
          window relative to meals, plus any special handling such as gentle rolling and refrigeration.
          Your refrigerator should have a dedicated, clearly labeled container for insulin pens or
          vials with each dog&rsquo;s name, and a no-exceptions rule against sharing supplies between pets.
        </p>

        <div className="rounded-xl border border-[#d9cfc2] bg-[#f7f4ee] p-4 mb-6">
          <h4 className="font-semibold mb-2">Daycare-level do&rsquo;s and don&rsquo;ts for diabetic cases</h4>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Do</strong> require the owner to provide the same syringes or pen needles used at home,
              labeled for their dog. Keep backups on site that match the insulin&rsquo;s units.
            </li>
            <li>
              <strong>Do</strong> attach a &ldquo;with food&rdquo; badge in Petunia if the veterinarian requires feeding
              before dosing. If the dog refuses food, hold per plan and contact the owner immediately.
            </li>
            <li>
              <strong>Do not</strong> adjust dosing. If owners believe a change is needed, they must coordinate
              with the veterinarian. Your role is execution, monitoring, and escalation.
            </li>
            <li>
              <strong>Do</strong> monitor for signs of hypoglycemia: lethargy, disorientation, tremors,
              unsteady gait, or collapse. If signs appear, follow the dog&rsquo;s emergency plan (e.g., offer
              food or apply a small amount of corn-syrup gel inside the cheek if explicitly directed by
              the veterinarian), then contact the owner and the dog&rsquo;s clinic or local ER.
            </li>
          </ul>
        </div>

        <p className="mb-4">
          Petunia supports these guardrails by timestamping mealtimes and doses, tracking who
          administered, and pinning emergency instructions to the top of the dog card. For high-risk
          cases, enable an alert banner that appears anywhere the card is shown. This is especially
          helpful in mixed-experience teams where a seasoned handler may step in mid-day.
        </p>

        {/* SECTION: SEIZURE DISORDERS */}
        <h2 className="text-2xl font-semibold mt-8 mb-3">Seizure-Prone Dogs: Baseline &amp; Rescue Medications</h2>
        <p className="mb-4">
          Many dogs with chronic seizure disorders live normal lives with daily antiseizure
          medication. In a daycare, staff should know the dog&rsquo;s baseline meds, common side effects,
          and whether a home rescue plan exists. Your policy should require owner-provided written
          instructions from the veterinarian for any rescue therapy that may be administered on site
          (for example, rectal diazepam gel or intranasal midazolam). Without explicit instructions
          and supplies, your team should focus on safety, timing, observation, and rapid owner and
          clinic contact.
        </p>

        <h3 className="text-xl font-semibold mt-4 mb-2">Baseline medications you will see</h3>
        <p className="mb-4">
          Common maintenance options under veterinary guidance include phenobarbital, potassium
          bromide, levetiracetam, and zonisamide, used alone or in combination depending on the
          patient&rsquo;s history. Your staff do not initiate or change these therapies, but they should be
          aware of expected effects like mild sedation or ataxia, and watch for outliers that warrant
          a call to the owner. Petunia should list each drug by name, dose, schedule, and known side
          effects to make huddles quicker at shift change.
        </p>

        <h3 className="text-xl font-semibold mt-4 mb-2">Rescue medications and emergency flow</h3>
        <p className="mb-4">
          Some dogs arrive with a veterinarian-written rescue protocol for seizures that persist past
          a set threshold or cluster in a short time. In those cases, owners provide the medication
          and authorization, and your team follows the steps exactly as written. A typical plan may
          involve rectal diazepam or intranasal midazolam, followed by immediate communication with
          the owner and veterinarian and, if needed, transport to an ER. Whether or not you administer
          rescue medication on site, your environment should be prepared: create space around the dog,
          protect the head from injury, avoid placing hands in the mouth, and track duration to the
          minute.
        </p>

        <div className="rounded-xl border border-[#d9cfc2] bg-[#f7f4ee] p-4 mb-6">
          <h4 className="font-semibold mb-2">Seizure readiness checklist for facilities</h4>
          <ul className="list-disc pl-5 space-y-2">
            <li>Owner-signed plan and veterinary instructions on file in Petunia.</li>
            <li>Labeled rescue medication provided by the owner if permitted by policy.</li>
            <li>Timer visible to record duration; staff trained to call time clearly.</li>
            <li>Clear path to exit and a pre-chosen ER destination with phone number handy.</li>
            <li>Post-event documentation template: what happened, what was given, when, and by whom.</li>
          </ul>
        </div>

        {/* SECTION: COMMON REASONS DOGS TAKE MEDS */}
        <h2 className="text-2xl font-semibold mt-8 mb-3">Common Reasons Dogs Take Medication (and What Your Team Should Know)</h2>
        <p className="mb-4">
          The medication list you see in daycare is a snapshot of what primary care and specialty
          teams manage every day. While your staff should never improvise, they can serve clients
          better when they understand the big categories and what facility-level considerations apply.
        </p>

        <h3 className="text-xl font-semibold mt-4 mb-2">Pain and inflammation</h3>
        <p className="mb-4">
          Nonsteroidal anti-inflammatory drugs prescribed for osteoarthritis and post-operative care
          are common. Staff should know that these drugs are prescription-only and have specific
          safety guidance from the dog&rsquo;s veterinarian. In a daycare setting, you simply give the dose
          at the scheduled time when authorized, log it immediately, and monitor for appetite changes,
          vomiting, diarrhea, or unusual lethargy. Never double-dose, never add human medications, and
          if a dose was already given at home, do not repeat it.
        </p>

        <h3 className="text-xl font-semibold mt-4 mb-2">Allergies and dermatology</h3>
        <p className="mb-4">
          You will see oral medications for itch control, short steroid tapers, medicated ear drops,
          and topical ointments. Note handling details in Petunia, like &ldquo;ear drops after lunch&rdquo; or
          &ldquo;apply with gloves.&rdquo; For dogs with food trials or allergies, tag their profile with a
          &ldquo;No treats&rdquo; or &ldquo;Owner-approved treats only&rdquo; badge and make sure your kitchen bin system
          keeps everything separate.
        </p>

        <h3 className="text-xl font-semibold mt-4 mb-2">Gastrointestinal support</h3>
        <p className="mb-4">
          Many dogs take short courses of stomach acid reducers, bile-acid binders, or probiotics. It
          is helpful to log whether the medication must be given with food and to schedule any noon
          doses at least 30 minutes before planned outdoor play if the veterinarian recommends that
          spacing.
        </p>

        <h3 className="text-xl font-semibold mt-4 mb-2">Cardiac and endocrine</h3>
        <p className="mb-4">
          For heart disease, you may encounter drugs like pimobendan with rigid timing expectations.
          For endocrine disorders beyond diabetes &mdash; thyroid supplementation, for example &mdash; note
          the consistency of timing relative to meals. The more faithfully you mirror the home
          routine, the steadier the dog feels during daycare hours.
        </p>

        <h3 className="text-xl font-semibold mt-4 mb-2">Behavioral medications</h3>
        <p className="mb-4">
          Selective serotonin reuptake inhibitors and situational anxiolytics appear regularly in
          daycare. Your team should normalize these meds as part of routine care. Do not remark on a
          dog&rsquo;s prescription to other clients, and make sure doses given for &ldquo;veterinary visit days&rdquo;
          or grooming align with the owner&rsquo;s plan.
        </p>

        {/* SECTION: BUILDING PROFILES THAT WORK */}
        <h2 className="text-2xl font-semibold mt-8 mb-3">Client-Built Profiles: Clean Data In, Safer Days Out</h2>
        <p className="mb-4">
          Profiles are the foundation. Ask owners to enter medication names exactly as printed on the
          label, include the concentration, specify dose and timing, and upload a photo of the label.
          Require updates for any change, even if it seems small (&ldquo;tablet strength changed from 50 mg
          to 100 mg&rdquo;). In Petunia, you can make certain fields non-optional and add helper text like
          &ldquo;Enter volume to the decimal, e.g., 1.2 mL&rdquo; or &ldquo;Attach label photo&rdquo; to improve data quality.
        </p>

        <div className="rounded-xl border border-[#d9cfc2] bg-[#f7f4ee] p-4 mb-6">
          <h4 className="font-semibold mb-2">Owner prompts that raise data quality</h4>
          <ul className="list-disc pl-5 space-y-2">
            <li>Exact drug name and strength (include brand and generic if listed).</li>
            <li>Dose with units, route, timing, and relation to meals.</li>
            <li>Storage needs (refrigeration), measuring device, and special cautions.</li>
            <li>Emergency plan if a dose is missed, refused, or vomited.</li>
            <li>Veterinarian contact, clinic address, and after-hours instructions.</li>
          </ul>
        </div>

        {/* SECTION: PETUNIA FEATURES FOR MED SAFETY */}
        <h2 className="text-2xl font-semibold mt-8 mb-3">Petunia Features That Make Medication Handling Safer</h2>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>
            <strong>Real-time med banner:</strong> A persistent, readable list for each dog on property with
            timing badges and &ldquo;with food&rdquo; flags.
          </li>
          <li>
            <strong>Due-soon alerts:</strong> Visual cues for doses coming up within a configurable window
            (for example, 30 minutes).
          </li>
          <li>
            <strong>Double-check workflow:</strong> An optional second verifier can co-sign high-risk items
            like insulin or controlled substances.
          </li>
          <li>
            <strong>Photo label verification:</strong> Compare the bottle in hand with the on-file photo before
            administering; log a &ldquo;mismatch&rdquo; if anything does not align.
          </li>
          <li>
            <strong>Incident notes:</strong> One-tap templates for &ldquo;dose declined,&rdquo; &ldquo;vomited within 15
            minutes,&rdquo; or &ldquo;owner contacted,&rdquo; time-stamped for clean handoffs.
          </li>
          <li>
            <strong>Role-based permissions:</strong> Limit who can edit meds versus who can record
            administration to prevent accidental changes during a rush.
          </li>
          <li>
            <strong>Exportable logs:</strong> Print or share a med history for a specific date range as part of
            owner communication or a veterinarian&rsquo;s recheck.
          </li>
        </ul>

        {/* SECTION: SOP & TRAINING */}
        <h2 className="text-2xl font-semibold mt-8 mb-3">Standard Operating Procedure &amp; Training Blueprint</h2>
        <p className="mb-4">
          A solid SOP turns software features into daily habits. Train every new hire on the med
          banner, walk them through mock scenarios, and require a shadow period before independent
          handling. Your written SOP should live in the same knowledge space as your opening checklist
          and safety drills and be referenced during staff huddles.
        </p>

        <div className="rounded-xl border border-[#d9cfc2] bg-[#f7f4ee] p-4 mb-6">
          <h4 className="font-semibold mb-2">Five-Minute Med Huddle (open and mid-day)</h4>
          <ul className="list-disc pl-5 space-y-2">
            <li>Review today&rsquo;s insulin cases, mealtime splits, and due-soon windows.</li>
            <li>Identify any dogs with rescue-med plans; verify supplies and authorization.</li>
            <li>Confirm which staff are primary and secondary verifiers for high-risk meds.</li>
            <li>Check fridge inventory and label photos for any new bottles or pens.</li>
            <li>Rehearse the escalation path: owner &rarr; primary vet &rarr; local ER.</li>
          </ul>
        </div>

        <h3 className="text-xl font-semibold mt-4 mb-2">Documentation discipline</h3>
        <p className="mb-4">
          Measure once, give once, log once. Do not postpone documentation. If something deviates
          from plan, say so in clear, neutral language and include times. That written record protects
          the dog, the client, and your team.
        </p>

        {/* SECTION: EMERGENCY READINESS */}
        <h2 className="text-2xl font-semibold mt-8 mb-3">Emergency Readiness: Turning Seconds into a System</h2>
        <p className="mb-4">
          When a dog becomes acutely ill or seizes, a calm team outperforms a talented individual.
          Your environment, tools, and decision tree should be pre-built. Keep a laminated &ldquo;Seizure
          Plan&rdquo; card at the front desk, by the play yards, and in the med area. Make sure the ER name
          and directions are included in your Petunia business settings and printed on the card.
        </p>

        <div className="rounded-xl border border-[#d9cfc2] bg-[#f7f4ee] p-4 mb-6">
          <h4 className="font-semibold mb-2">Rapid-response flow (practiced quarterly)</h4>
          <ol className="list-decimal pl-5 space-y-2">
            <li>Clear space and note the exact time the event began.</li>
            <li>Check the dog card: does a written rescue plan exist? Are supplies on site?</li>
            <li>Execute plan if authorized; otherwise protect the dog and call the owner and clinic.</li>
            <li>Prepare transport if advised; one person drives, one calls ahead to the ER.</li>
            <li>Document immediately: duration, intervention, contacts, and outcome.</li>
          </ol>
        </div>

        {/* SECTION: PRIVACY & COMMUNICATION */}
        <h2 className="text-2xl font-semibold mt-8 mb-3">Privacy, Professionalism, and Owner Communication</h2>
        <p className="mb-4">
          Medication details are personal. Limit access to staff who need it, avoid discussing a
          dog&rsquo;s prescriptions within earshot of other clients, and keep your tone neutral and
          supportive. Petunia&rsquo;s role-based access helps by separating who can view, record, and edit
          information. After a successful day, send owners a friendly summary of what was administered
          and how the dog did. After any incident, provide a straightforward account and next steps.
        </p>

        {/* SECTION: PUTTING IT ALL TOGETHER */}
        <h2 className="text-2xl font-semibold mt-8 mb-3">Putting It All Together: Software + SOP = Safer Days</h2>
        <p className="mb-4">
          Medication tracking in daycare is not about turning your facility into a clinic. It is about
          using software to keep the right information visible at the right time, then practicing the
          discipline to follow plans precisely. Petunia centralizes owner-provided data, presents it in
          the exact screens your team uses, and records what happens in a way that strengthens
          accountability. With that foundation, your SOP and training turn information into action.
        </p>

        {/* REFERENCES */}
        <h2 className="text-2xl font-semibold mt-8 mb-3">References &amp; Source Notes</h2>
        <p className="mb-4">
          The clinical background below supports general concepts referenced in this article. Daycare
          teams must always follow the dog&rsquo;s veterinarian for case-specific instructions.
        </p>
        <ul className="list-disc pl-5 space-y-2 mb-10">
          <li>
            AAHA Diabetes Management Guidelines for Dogs and Cats (latest update and web summaries on
            insulin choices, handling, and monitoring).{' '}
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
            ACVIM consensus on seizure management in dogs; additional guidance on status epilepticus
            and cluster seizures.{' '}
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
            Comparative data on intranasal midazolam and rectal diazepam as out-of-hospital rescue
            options.{' '}
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
            FDA and AVMA public guidance on veterinary NSAIDs and dispensing/labeling considerations.{' '}
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
