'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function DogDaycareIncidentReports() {
  const locale = useLocale();

  const title =
    'Dog Daycare Incident Reports: Read, Respond, and Resolve (Templates Inside)';
  const date = 'July 23, 2025';
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
            <li><a href="#disclaimers" className="underline hover:opacity-80">Disclaimers</a></li>
            <li><a href="#tldr" className="underline hover:opacity-80">TL;DR</a></li>
            <li><a href="#anatomy" className="underline hover:opacity-80">Anatomy of a Good Report</a></li>
            <li><a href="#triage" className="underline hover:opacity-80">Triage: Read → Check Dog → Decide</a></li>
            <li><a href="#flowchart" className="underline hover:opacity-80">Vet-Visit Decision Flow</a></li>
            <li><a href="#injury-tiers" className="underline hover:opacity-80">Injury Tiers & Care</a></li>
            <li><a href="#communication" className="underline hover:opacity-80">What to Say (Templates)</a></li>
            <li><a href="#costs" className="underline hover:opacity-80">Costs, Coverage & Documentation</a></li>
            <li><a href="#resolution" className="underline hover:opacity-80">Resolution Pathways</a></li>
            <li><a href="#red-flags" className="underline hover:opacity-80">Red Flags & Escalation</a></li>
            <li><a href="#faq" className="underline hover:opacity-80">FAQ</a></li>
            <li><a href="#sources" className="underline hover:opacity-80">📚 Sources</a></li>
          </ul>
        </nav>

        {/* DISCLAIMERS */}
        <section id="disclaimers" className="mb-10">
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <p className="mb-2">
              <strong>Medical disclaimer:</strong> This article is educational and not a substitute for individualized veterinary care. If you suspect an urgent problem or your dog has punctures, lacerations, heavy bleeding, breathing trouble, collapse, head/neck injuries, or significant pain, seek veterinary care immediately.
            </p>
            <p>
              <strong>Legal disclaimer:</strong> Policies, waivers, and regulations vary by location. This is not legal advice. Review your contract and consult an attorney or local regulator if you have legal questions.
            </p>
          </div>
        </section>

        {/* TLDR */}
        <section id="tldr" className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">Short Answer (TL;DR)</h2>
          <ol className="list-decimal pl-5 space-y-2">
            <li><strong>Pause & read.</strong> Skim the incident report once; read it again slowly. Note the <em>who/when/where</em>, the antecedents, the behavior descriptions, how staff separated dogs, and what first aid was provided.</li>
            <li><strong>Check your dog.</strong> In good light, part the coat and inspect the full body. If bleeding, apply gentle direct pressure with clean gauze and keep your dog calm while you contact your veterinarian. {/* AVMA/Red Cross guidance in Sources */}</li>
            <li><strong>Decide on care.</strong> For punctures, lacerations, wounds near eyes/ears/joints, chest/abdomen, limping, swelling, or pain → go to a veterinarian. When in doubt, call your clinic or nearest urgent care.</li>
            <li><strong>Document.</strong> Photograph injuries, keep the report, and save all messages. Request video and a written follow-up plan.</li>
            <li><strong>Resolve.</strong> Agree on a cooldown period, behavior plan, room change, 1:1 days, or discontinuation. Log expenses; ask about coverage and pet-insurance claims.</li>
          </ol>
          <p className="text-sm text-gray-700 mt-2">
            Related reading: our <Link href={`/${locale}/blog/how-many-dogs-per-attendant`} className="underline">daycare ratio guide</Link> and <Link href={`/${locale}/blog/dog-boarding-waiver-what-to-look-for`} className="underline">boarding/daycare waiver checklist</Link>.
          </p>
        </section>

        {/* ANATOMY */}
        <section id="anatomy" className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">Anatomy of a Good Incident Report</h2>
          <p className="mb-3">A professional report is factual, specific, and neutral. It should enable you (and your veterinarian) to understand the event, identify next steps, and prevent a repeat. Look for:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Date & time stamps</strong> for the incident, separation, first aid, owner notification, and pickup.</li>
            <li><strong>Staff present & roles</strong> (lead attendant, float/runner, manager on duty) and <strong>group info</strong> (room name, headcount, approximate size/energy mix).</li>
            <li><strong>Antecedents</strong> (what set the stage): arrival surge, toy resource, doorway crowding, intact dog dynamics, weather stress, etc.</li>
            <li><strong>Neutral behavior descriptions</strong> (“Dog A mounted Dog B; Dog B stiffened and turned; brief snap; handlers body-blocked and split”) instead of labels like “dominant” or “aggressive.”</li>
            <li><strong>Interventions</strong> (interrupt cues, body blocks, splits, crating, room change) and <strong>separation/treatment</strong> (cooldown area, first-aid steps, observed vitals/behavior afterward).</li>
            <li><strong>Injuries noted</strong> with locations, estimated sizes, bleeding status, and any photos or video references.</li>
            <li><strong>Witnesses</strong> (staff/who saw what, positioned where) and whether cameras captured the event.</li>
            <li><strong>Follow-up plan</strong> (cooldown days, re-intro conditions, staffing/ratio adjustments, pod changes, enrichment, or discontinuation), plus the person accountable and target dates.</li>
            <li><strong>Owner communication log</strong> (time contacted, method, summary) and <strong>signature/acknowledgment</strong> fields for both parties if applicable.</li>
          </ul>
        </section>

        {/* TRIAGE */}
        <section id="triage" className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">Triage: Read → Check Your Dog → Decide</h2>
          <h3 className="text-lg font-semibold mt-2 mb-1">1) Read the Report (Twice)</h3>
          <p className="mb-3">
            Mark times, room, staff, and antecedents. Circle anything unclear (“Which door?”, “Were toys out?”, “How many dogs?”) to ask about later. Keep the tone cooperative; you’re gathering facts.
          </p>

          <h3 className="text-lg font-semibold mt-2 mb-1">2) Check Your Dog Calmly</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>In bright light, visually scan, then run hands from nose to tail, parting the coat—punctures can be tiny and easy to miss.</li>
            <li>Look closely at ears, lips, armpits, groin, inner thighs, tail base, and between toes. Check for tenderness, warmth, swelling, or discharge.</li>
            <li>If bleeding, apply <em>gentle direct pressure</em> with clean gauze; do not repeatedly lift the gauze to “peek.” Keep your dog as calm and still as possible. {/* Red Cross guidance in Sources */}</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">3) Decide on Veterinary Care</h3>
          <p className="mb-3">
            Punctures, lacerations, wounds near eyes/ears/joints, chest or abdomen injuries, limping, significant swelling, pain, or any change in breathing/behavior generally warrant veterinary evaluation. When uncertain, call your clinic or the nearest urgent care and describe what you see. {/* VCA & Merck wound guidance in Sources */}
          </p>
        </section>

        {/* FLOWCHART */}
        <section id="flowchart" className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">Vet-Visit Decision Flow (Owner-Friendly)</h2>
          <div className="rounded-md border border-[#d9cfc2] bg-[#fffaf2] p-4">
            <ol className="list-decimal pl-5 space-y-2">
              <li><strong>Is there ongoing bleeding?</strong> Apply direct pressure with clean gauze. If you cannot control bleeding within a few minutes or the wound is gaping → <em>urgent vet visit now</em>.</li>
              <li><strong>Is there a puncture or laceration?</strong> Any puncture (even tiny) or open wound → <em>vet visit today</em>. Punctures can seal on the surface while infection brews underneath.</li>
              <li><strong>Where is the wound?</strong> Eyes/eyelids/ears, face/neck, joints, groin, chest, or abdomen → <em>vet visit now</em>.</li>
              <li><strong>Any swelling, limping, lethargy, vomiting, or pain?</strong> If yes → <em>vet visit today</em>.</li>
              <li><strong>None of the above?</strong> Call your veterinarian, describe the report and findings, and ask if in-person evaluation is recommended. When in doubt, go in.</li>
            </ol>
          </div>
          <p className="text-xs text-gray-600 mt-2">
            This flow is a general guide. Follow your veterinarian’s advice and local urgent-care instructions.
          </p>
        </section>

        {/* INJURY TIERS */}
        <section id="injury-tiers" className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">Injury Tiers, Infection Risk & What Care Looks Like</h2>
          <h3 className="text-lg font-semibold mt-2 mb-1">Tier A: Superficial Scrapes/Abrasions</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Shallow skin rubs; hair scuffed; oozing minimal to none.</li>
            <li>Risk: usually lower, but location matters (eyes, paws, tail tips can complicate).</li>
            <li>Care: gentle cleaning, protection from licking; vet if uncertain, large surface area, face/eye involvement, or signs of pain.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Tier B: Punctures (Teeth) & Small Holes</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Often tiny at the surface but deep; can seal quickly and trap bacteria and debris.</li>
            <li>Risk: <em>high for infection</em>; abscess formation possible if untreated.</li>
            <li>Care: veterinary evaluation recommended; cleaning/lavage, possible antibiotics/pain control, wound monitoring. {/* VCA & Merck in Sources */}</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Tier C: Lacerations (Cuts/Tears)</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Edges may gape; bleeding varies.</li>
            <li>Risk: contamination, tissue damage; may need sutures or staples.</li>
            <li>Care: prompt veterinary care; thorough lavage/debridement; closure if appropriate; bandaging and recheck. {/* Merck & VCA in Sources */}</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Signs of Infection (Any Tier)</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Increasing redness, swelling, warmth, pain, discharge, odor, or your dog seems unwell (feverish behavior, lethargy).</li>
            <li>Action: contact your veterinarian promptly; do not rely on home care alone.</li>
          </ul>
        </section>

        {/* COMMUNICATION */}
        <section id="communication" className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">What to Say (Communication Templates)</h2>
          <p className="mb-4">
            Stay factual and collaborative. Your goals: clarify the timeline and conditions, align on veterinary care, agree on costs/documentation, and map a plan to prevent repeats.
          </p>

          <h3 className="text-lg font-semibold mt-2 mb-1">Template 1: Owner → Facility (Initial Note)</h3>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm mb-4">
            <p>
              Subject: {`{Dog Name}`} – Incident on {`{Date}`} – Follow-up Info & Next Steps<br /><br />
              Hi {`{Manager Name}`}, thanks for the report today about {`{Dog Name}`}. I’m reviewing the details and having our veterinarian assess {`{him/her}`}.<br /><br />
              Could you please share:<br />
              • Room name, headcount, and energy/sizes at the time<br />
              • Staff assigned (lead/runner/manager) and the live ratio<br />
              • Antecedents noted (toys/doorway crowding/weather, etc.)<br />
              • Exact separation/first-aid steps and clock times<br />
              • Photos/video if available; any incident log or sketch of positions<br />
              • Proposed prevention plan (cooldown days, pod changes, ratio adjustments)<br /><br />
              I’ll send our vet’s notes and receipts for the file. Thank you for helping us resolve this constructively.
            </p>
          </div>

          <h3 className="text-lg font-semibold mt-2 mb-1">Template 2: Facility → Owner (Proactive Message)</h3>
          <div className="rounded-md border border-[#d9cfc2] bg-[#fffaf2] p-4 text-sm mb-4">
            <p>
              Subject: Today’s Incident with {`{Dog Name}`} – Report & Care Plan<br /><br />
              Hi {`{Owner Name}`}, I’m sorry to share that {`{Dog Name}`} was involved in an incident at {`{time}`}. We’ve attached the incident report with timestamps, staff present, room count, antecedents, and the interventions used. We separated dogs immediately, checked vitals, and applied basic first aid. We recommend a veterinary exam and will reimburse approved costs per your agreement.<br /><br />
              We propose: {`{cooldown days}`}, {`{pod/room changes}`}, and {`{enrichment/ratio adjustments}`}. Please review the attached plan and let us know your vet’s findings so we can finalize next steps.
            </p>
          </div>

          <h3 className="text-lg font-semibold mt-2 mb-1">Template 3: Insurance/Cost Clarification (Owner → Facility)</h3>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <p>
              Subject: {`{Dog Name}`} – Vet Visit & Expense Documentation<br /><br />
              Hi {`{Manager Name}`}, our veterinarian evaluated {`{Dog Name}`}. Attached are the invoice and clinical notes. Please confirm:<br />
              • Which costs you’ll cover per our contract (exam, treatment, meds, recheck).<br />
              • Where to send receipts and whether a claim number is needed.<br />
              • Contact info for your insurance, if applicable, for coordination.<br /><br />
              We’ll also file with our pet insurer (if covered). Thank you.
            </p>
          </div>
        </section>

        {/* COSTS & COVERAGE */}
        <section id="costs" className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">Costs, Coverage & Documentation (Owner Basics)</h2>
          <p className="mb-3">
            Every contract is different. Many facilities cover a vet exam and medically necessary treatment related to the incident; others cap support or require approval first. Read your waiver and ask for written confirmation of what they’ll cover. If you have pet insurance, save itemized invoices and medical notes and file a claim—reimbursements typically apply after your deductible and co-insurance, subject to limits and waiting periods.
          </p>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>Save everything:</strong> incident report, texts/emails, photos (with timestamps), itemized invoices, medical notes, and any follow-up recommendations.</li>
            <li><strong>Ask for a claim contact</strong> or internal reference number if the facility uses business insurance for customer incidents.</li>
            <li><strong>Pet insurance?</strong> Submit via your portal/app; typical reimbursements are claim amount minus deductible and co-insurance, within policy limits; Accident-only vs Accident & Illness differ. {/* NAPHIA in Sources */}</li>
          </ul>
          <p className="text-sm text-gray-700">
            For contract fine print, see our <Link href={`/${locale}/blog/dog-boarding-waiver-what-to-look-for`} className="underline">waiver guide</Link>.
          </p>
        </section>

        {/* RESOLUTION PATHWAYS */}
        <section id="resolution" className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">Resolution Pathways: Preserve Safety & Relationships</h2>
          <p className="mb-3">
            The goal after any incident is to lower risk while honoring your dog’s welfare. Most cases resolve with a combination of rest, changed context, and better structure.
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Cooldown period:</strong> 3–14 days away from group play to heal tissue and reset arousal.</li>
            <li><strong>Room/pod change:</strong> different size/energy mix; sex-separate groups; remove toys; lower density.</li>
            <li><strong>Ratio & staffing tweaks:</strong> tighter ratios during “hot” windows (arrivals, pre-pickup); veteran handlers for re-intros.</li>
            <li><strong>Enrichment days or day-training:</strong> one-on-one engagement, sniff walks, mat-settle, short structured pods.</li>
            <li><strong>Behavior plan with a pro:</strong> cooperative handling, recall, settle, call-away from play, muzzle conditioning if appropriate.</li>
            <li><strong>Trial re-introduction:</strong> staged with clear exit criteria (e.g., 0–1 interruptions in 10 minutes; no fixation or guarding).</li>
            <li><strong>Discontinuation:</strong> if risk remains high or your dog is stressed by the environment, pivot to alternatives (private walks, home-style care, training days).</li>
          </ul>
        </section>

        {/* RED FLAGS & ESCALATION */}
        <section id="red-flags" className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">Red Flags vs. Normal Transparency, and How to Escalate</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-2">✅ Normal, Transparent Handling</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Immediate owner contact; clear timestamps; neutral behavior notes.</li>
                <li>Staff identify antecedents and specific prevention steps.</li>
                <li>Offer to share video (if available) and logs; propose a written plan.</li>
                <li>Clear expense process and a single point of contact.</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">⚠️ Red Flags</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>No written report, shifting stories, or blame without facts.</li>
                <li>Refusal to discuss group size/ratio or to walk you through the room layout.</li>
                <li>Minimizing punctures/lacerations or discouraging veterinary care.</li>
                <li>Reluctance to propose any changes (pods, ratios, enrichment) going forward.</li>
              </ul>
            </div>
          </div>
          <h3 className="text-lg font-semibold mt-4 mb-1">Escalation (If Needed)</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Start local:</strong> owner–manager meeting; request a revised plan in writing.</li>
            <li><strong>Regulatory path:</strong> Many U.S. jurisdictions license daycares at the state/municipal level. Examples: Colorado’s PACFA program handles licensed-facility complaints; Massachusetts’ “Ollie’s Law” requires injury reporting to municipalities and MDAR oversight. Check your locality for the correct office. {/* See Sources */}</li>
            <li><strong>Documentation:</strong> file the incident report, your vet invoice/notes, photos, and your communication log.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">Frequently Asked Questions</h2>

          <p className="mb-3">
            <strong>1) The report says “no visible injuries,” but my dog is sore—what now?</strong><br />
            Punctures and deeper bruising can hide under fur. Do a full body check and call your veterinarian; seek in-person care if soreness worsens or you find wounds.
          </p>

          <p className="mb-3">
            <strong>2) Should I request video?</strong><br />
            Yes, politely. Video clarifies antecedents and timing and helps a trainer or vet craft a prevention plan.
          </p>

          <p className="mb-3">
            <strong>3) Who pays for the vet visit?</strong><br />
            It depends on your contract and facility policy. Ask what they typically cover and get confirmation in writing; pet insurance may reimburse you, subject to your policy.
          </p>

          <p className="mb-3">
            <strong>4) Is a single scuffle a reason to quit daycare?</strong><br />
            Not always. Many dogs return successfully after cooldown and better structure. If your dog remains stressed or requires constant interruption, consider alternatives.
          </p>

          <p className="mb-3">
            <strong>5) What if the other dog’s owner blames mine?</strong><br />
            Keep communications through the facility. Ask the manager for a clear, neutral timeline and a prevention plan that addresses both dogs’ needs.
          </p>

          <p className="mb-3">
            <strong>6) My dog hates the vet—should I still go?</strong><br />
            Yes if there are punctures, lacerations, swelling, pain, or behavior changes. Clinics can use low-stress handling and pain control as needed.
          </p>

          <p className="mb-3">
            <strong>7) Do I need antibiotics for every bite?</strong><br />
            Treatment is case-specific. Your veterinarian will evaluate location, depth, contamination, and your dog’s health to determine the plan.
          </p>

          <p className="mb-3">
            <strong>8) Can I bandage at home?</strong><br />
            You can apply gentle pressure dressings for bleeding and cover wounds to protect during transport, but bandaging is not definitive care. Follow veterinary instructions.
          </p>

          <p className="mb-3">
            <strong>9) The facility discouraged a vet visit—is that normal?</strong><br />
            No. Professional facilities support prompt evaluation when warranted and provide documentation for the clinic.
          </p>

          <p className="mb-3">
            <strong>10) Will pet insurance raise my premium after a claim?</strong><br />
            Policies vary. Read your policy or ask your insurer; generally, reimbursements are subject to deductible, co-insurance, and limits.
          </p>

          <p className="mb-3">
            <strong>11) What should be in the follow-up plan?</strong><br />
            Cooldown period, re-intro conditions, room/pod and ratio changes, staff assignments, enrichment plan, and a review date.
          </p>

          <p className="mb-3">
            <strong>12) How long should cooldown last?</strong><br />
            Typically several days to a couple of weeks, depending on medical healing and your dog’s stress level.
          </p>

          <p className="mb-3">
            <strong>13) Should my dog wear a muzzle for re-intros?</strong><br />
            Basket muzzles can add a safety margin when trained positively. Use with professional guidance; muzzles don’t replace environment changes or handling skill.
          </p>

          <p className="mb-3">
            <strong>14) What if I don’t trust the report?</strong><br />
            Ask for a manager review, video, and logs; request a second staff statement if available. If trust can’t be restored, consider moving providers and, if appropriate, contacting your local licensing authority.
          </p>

          <p>
            <strong>15) Is it normal to sign a waiver?</strong><br />
            Yes—most facilities use waivers that outline risks and dispute processes. Read before signing and keep a copy. See our <Link href={`/${locale}/blog/dog-boarding-waiver-what-to-look-for`} className="underline">waiver guide</Link>.
          </p>
        </section>

        {/* SOURCES */}
        <section id="sources" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">📚 Sources & Further Reading</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            <li>
              AVMA. Pet First Aid Tips (owner resource): emphasizes first aid is not a substitute for veterinary care.
              <a href="https://www.avma.org/resources-tools/pet-owners/emergencycare/first-aid-tips-pet-owners" target="_blank" rel="noopener noreferrer" className="ml-1 underline">avma.org</a>
            </li>
            <li>
              American Red Cross. Pet First Aid (bleeding control; bandaging; app).
              <a href="https://www.redcross.org/take-a-class/resources/learn-pet-first-aid/dog/bleeding" target="_blank" rel="noopener noreferrer" className="ml-1 underline">redcross.org</a>
            </li>
            <li>
              VCA Animal Hospitals. Bite Wounds in Dogs; Lacerations & Abrasions.
              <a href="https://vcahospitals.com/know-your-pet/bite-wounds-in-dogs" target="_blank" rel="noopener noreferrer" className="ml-1 underline">vcahospitals.com</a>
              {' '}·{' '}
              <a href="https://vcahospitals.com/urgent-care/health-concerns/lacerations-and-abrasions" target="_blank" rel="noopener noreferrer" className="underline">urgent care</a>
            </li>
            <li>
              Merck Veterinary Manual (MSD). Initial Wound Management; Management of Specific Wounds.
              <a href="https://www.merckvetmanual.com/emergency-medicine-and-critical-care/wound-management-in-small-animals/initial-wound-management-in-small-animals" target="_blank" rel="noopener noreferrer" className="ml-1 underline">merckvetmanual.com</a>
            </li>
            <li>
              NAPHIA (North American Pet Health Insurance Association). How to Claim; Coverage Types.
              <a href="https://naphia.org/find-pet-insurance/how-to-claim/" target="_blank" rel="noopener noreferrer" className="ml-1 underline">naphia.org</a>
            </li>
            <li>
              Colorado Dept. of Agriculture – PACFA: File a Complaint (licensed pet-care facilities).
              <a href="https://socgov29.my.site.com/PACFAComplaintForm/s/" target="_blank" rel="noopener noreferrer" className="ml-1 underline">PACFA complaint portal</a>
            </li>
            <li>
              Massachusetts “Ollie’s Law” info (MDAR): injury reporting to municipalities; statewide oversight framework.
              <a href="https://www.mass.gov/info-details/ollies-law-information" target="_blank" rel="noopener noreferrer" className="ml-1 underline">mass.gov</a>
            </li>
          </ul>

          <p className="text-xs text-gray-500 mt-4">
            Laws and best practices evolve; verify current local requirements with your municipality or state agency.
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
