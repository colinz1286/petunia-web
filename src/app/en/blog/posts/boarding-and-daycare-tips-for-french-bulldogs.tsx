'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function BoardingAndDaycareTipsForFrenchBulldogs() {
  const locale = useLocale();

  const title =
    'Boarding & Daycare Tips for French Bulldogs: A Complete Owner’s Guide';
  const date = 'April 5, 2025';
  const categories = ['owner', 'boarding', 'breed_specific_guides'] as const;

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
            <li><a href="#tl-dr" className="underline hover:opacity-80">TL;DR</a></li>
            <li><a href="#who" className="underline hover:opacity-80">Who This Guide Helps</a></li>
            <li><a href="#audit" className="underline hover:opacity-80">Pre-Boarding Facility Audit</a></li>
            <li><a href="#health" className="underline hover:opacity-80">Health, Vaccines &amp; Paperwork</a></li>
            <li><a href="#airway-heat" className="underline hover:opacity-80">Airway (BOAS) &amp; Heat Safety</a></li>
            <li><a href="#housing" className="underline hover:opacity-80">Housing, Crates &amp; Climate</a></li>
            <li><a href="#playgroups" className="underline hover:opacity-80">Playgroup Design &amp; Safe Play</a></li>
            <li><a href="#feeding-meds" className="underline hover:opacity-80">Feeding, Water &amp; Meds</a></li>
            <li><a href="#stress" className="underline hover:opacity-80">Stress, Enrichment &amp; Noise</a></li>
            <li><a href="#special" className="underline hover:opacity-80">Puppies, Seniors &amp; Special Cases</a></li>
            <li><a href="#dropoff" className="underline hover:opacity-80">Drop-Off Day: Smooth Handoffs</a></li>
            <li><a href="#daily" className="underline hover:opacity-80">Daily Schedule Templates</a></li>
            <li><a href="#emergencies" className="underline hover:opacity-80">Emergency &amp; Illness Protocols</a></li>
            <li><a href="#travel" className="underline hover:opacity-80">Travel &amp; Transport Safety</a></li>
            <li><a href="#after" className="underline hover:opacity-80">After Boarding: Decompression</a></li>
            <li><a href="#templates" className="underline hover:opacity-80">Checklists &amp; Templates</a></li>
            <li><a href="#faq" className="underline hover:opacity-80">FAQ</a></li>
            <li><a href="#sources" className="underline hover:opacity-80">📚 Sources (Selected)</a></li>
          </ul>
        </nav>

        {/* TL;DR */}
        <section id="tl-dr" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Short Answer (TL;DR)</h2>
          <p className="mb-4">
            French Bulldogs can board and attend daycare successfully when the plan centers <strong>airway safety</strong>,
            <strong> heat control</strong>, <strong>short play blocks with recovery</strong>, and <strong>consistent hygiene</strong>. Choose facilities
            that understand <strong>brachycephalic risk</strong> (BOAS), require appropriate vaccines, monitor for kennel cough/CIRDC,
            and run quiet, climate-controlled housing with traction surfaces and ramps. Share a written playbook (feeding,
            meds, heat rules, fold/ear care) and ask for same-day updates if anything changes. If travel or heat risk is
            high, consider <strong>in-home care</strong> with trained sitters as your dog’s default.
          </p>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Petunia tip:</strong> Build a reusable <em>Boarding &amp; Daycare Profile</em> in Petunia—feeding grams, meds with times,
            <em> heat rules</em>, <em>BOAS flags</em>, fold/ear care steps, and emergency contacts. Share it by link so staff always have the
            latest version.
          </div>
        </section>

        {/* WHO */}
        <section id="who" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Who This Guide Helps</h2>
          <p className="mb-3">
            This playbook is for Frenchie families, sitters, and facility operators who want a <em>repeatable, low-drama system</em>
            for boarding and daycare. It assumes a typical, friendly French Bulldog with no active illness. If your dog has
            a history of severe BOAS, IVDD, corneal ulcers, recurrent otitis/skin disease, or anxiety, you’ll still follow
            these steps—you’ll just tighten margins (shorter play, cooler rooms, more check-ins) and coordinate closely with
            your veterinarian. If you’re a facility operator, adapt the checklists for staff training and shift handovers.
          </p>
        </section>

        {/* AUDIT */}
        <section id="audit" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Pre-Boarding Facility Audit (Call + Tour)</h2>
          <p className="mb-3">
            A short, well-structured audit tells you more than an hour of marketing. Ask targeted questions and watch for
            <em> systems</em>—not one-off promises.
          </p>
          <h3 className="text-lg font-semibold mt-2 mb-1">Questions to ask (Frenchie-specific)</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>Climate:</strong> What are your indoor temperature and humidity targets? How do you monitor them continuously?</li>
            <li><strong>Heat rules:</strong> How do you adjust play duration with heat/humidity? What’s your <em>max session length</em> for brachycephalics?</li>
            <li><strong>Airflow:</strong> Do playrooms and housing have good ventilation and filtration? How do you respond to cough clusters?</li>
            <li><strong>Rest blocks:</strong> Do you run <em>structured play → water → AC cool-down</em> cycles? What’s the quiet hour plan?</li>
            <li><strong>Traction &amp; ramps:</strong> Are there runners on slick floors and ramps to raised areas to protect knees/spines?</li>
            <li><strong>Crate/room size:</strong> Can you house a Frenchie in a cool, low-stim space on request?</li>
            <li><strong>Hygiene:</strong> What’s your cleaning/disinfection protocol and contact times? How do you dry facial folds after water play?</li>
            <li><strong>Medical:</strong> What vaccines and parasite preventives do you require? What’s your policy for canine influenza and Bordetella?</li>
            <li><strong>Emergencies:</strong> Which ER do you use? Who makes go-now decisions? How fast do you notify owners?</li>
            <li><strong>Reporting:</strong> Can you send a same-day note for noisy breathing, cough, eye squinting, limping, diarrhea, or skipped meals?</li>
          </ul>
          <p className="mb-3">
            On tour, look for <strong>calm dogs</strong>, <strong>cleanable surfaces</strong>, staff using <strong>reward-based handling</strong>, and <strong>organized
            equipment</strong>. Ask to see <em>where your Frenchie will rest</em>, not just the play floor. Sniff the air—stale odor and
            chronic humidity hint at ventilation problems.
          </p>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Operator note:</strong> Post your heat rules by each playroom door and train to them. Make staff sign off on
            <em> “cool-down happens on the clock, not when convenient.”</em>
          </div>
        </section>

        {/* HEALTH, VACCINES, PAPERWORK */}
        <section id="health" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Health, Vaccines &amp; Paperwork</h2>
          <p className="mb-3">
            Reputable facilities require vaccines and parasite prevention to reduce serious disease risk and outbreaks of
            <strong> canine infectious respiratory disease complex (CIRDC)</strong>—the group that includes “kennel cough.” Policies vary by
            region and facility, but a common standard is current <strong>core vaccines</strong> (distemper, adenovirus, parvovirus; rabies),
            plus <strong>Bordetella</strong> and, in many regions or during outbreaks, <strong>canine influenza (CIV H3N2/H3N8)</strong>. Align timing with
            your veterinarian and the facility’s rules. (See AAHA, WSAVA, AVMA and CDC resources in the Sources.)
          </p>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>Core:</strong> DA2PP (or equivalent) and rabies per local law and veterinary guidance.</li>
            <li><strong>Non-core by risk:</strong> Bordetella, canine influenza, and leptospirosis are commonly required or recommended.</li>
            <li><strong>Parasites:</strong> Year-round flea/tick prevention where indicated; heartworm prevention per region and vet plan.</li>
            <li><strong>Records:</strong> Bring printed or digital vaccine records, a current photo, microchip number, and your veterinary contacts.</li>
            <li><strong>Med authorization:</strong> Sign permission for staff to administer owner-provided meds and to seek veterinary care if needed.</li>
          </ul>
          <p className="text-sm text-gray-700">
            Tip: Ask your vet about timing vaccines several days before boarding so any post-vaccine malaise resolves at home.
          </p>
        </section>

        {/* AIRWAY & HEAT */}
        <section id="airway-heat" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Airway (BOAS) &amp; Heat Safety: The Non-Negotiables</h2>
          <p className="mb-3">
            Frenchies are <strong>brachycephalic</strong> and many have some degree of <strong>BOAS</strong>—narrow nostrils, elongated/thickened soft
            palate, everted laryngeal saccules, +/- narrowed trachea. Combine that with excitement and heat, and margins shrink.
            Facilities must run conservative rules by default.
          </p>
          <h3 className="text-lg font-semibold mt-2 mb-1">Airway plan</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>Harness-only handling</strong> (no neck pressure) with a well-fitted Y-front harness.</li>
            <li><strong>Short sets:</strong> 5–10 minute play blocks → water break → cool, quiet rest.</li>
            <li><strong>Heat/humidity thresholds:</strong> move play indoors earlier than for long-muzzle breeds; fans + AC on.</li>
            <li><strong>Fast flagging:</strong> noisy breathing, prolonged recovery, blue/pale gums, wobble, collapse—<em>cool aggressively and go to ER</em>.</li>
          </ul>
          <h3 className="text-lg font-semibold mt-2 mb-1">Water &amp; pools</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Frenchies are poor swimmers; <strong>life vests</strong> for any water play. No unsupervised pools.</li>
            <li><strong>After water:</strong> dry <em>facial folds</em> and ears to prevent yeast/bacteria growth.</li>
          </ul>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Petunia tip:</strong> Put your dog’s <em>“heat rules”</em>, any airway meds, and post-play recovery notes in your Petunia
            profile so staff don’t guess when excitement rises.
          </div>
        </section>

        {/* HOUSING */}
        <section id="housing" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Housing, Crates &amp; Climate</h2>
          <p className="mb-3">
            Rest is where Frenchies win or lose comfort. Prioritize cool, quiet housing with traction to prevent slip injuries and
            ramps to avoid repeated jumps. Ask for a <strong>lower-arousal room</strong> if your dog gets revved up easily.
          </p>
          <h3 className="text-lg font-semibold mt-2 mb-1">Crate/room setup</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Crate large enough to <em>stand, turn, and lie flat</em>; no oversized dens that invite pacing.</li>
            <li>Raised cot or breathable bed; avoid deep, heat-trapping foam in warm seasons.</li>
            <li>Traction mat outside the door; <strong>ramps</strong> for any raised surfaces.</li>
            <li>Water bowl that’s hard to tip; separate “snack mat” to slow excited eating.</li>
          </ul>
          <h3 className="text-lg font-semibold mt-2 mb-1">Climate &amp; air</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Cool rooms; avoid stagnant, humid air. Prefer facilities with good ventilation and filtration.</li>
            <li>Quiet hours after lunch and late evening; dim lights support naps and lower arousal.</li>
          </ul>
          <p className="text-sm text-gray-700">
            Shelter-medicine principles emphasize ventilation, surface disinfection with proper contact times, and stress reduction to
            control infectious disease and keep dogs comfortable (see Sources).
          </p>
        </section>

        {/* PLAYGROUPS */}
        <section id="playgroups" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Playgroup Design &amp; Safe Play</h2>
          <p className="mb-3">
            Good daycare looks more like <em>recess with referees</em> than a “let’s run forever” rave. Frenchies thrive with compatible
            partners, short sets, and clear breaks.
          </p>
          <h3 className="text-lg font-semibold mt-2 mb-1">Grouping</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Match on <strong>size</strong>, <strong>arousal level</strong>, and <strong>play style</strong> (sniff-and-stroll, bow-and-bounce, not body-slam).</li>
            <li>New dogs start small: parallel walks, sniff-disengage cycles, then 5-minute play.</li>
            <li>Remove toys/food initially to prevent resource guarding until history is known.</li>
          </ul>
          <h3 className="text-lg font-semibold mt-2 mb-1">Staff skills</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Reward-based handling; interrupt play graciously (call-away, scatter, “go to mat”).</li>
            <li>Read early stress: head turns, whale eye, lip licks, freeze. End sets before escalation.</li>
            <li>Document <strong>breathing effort</strong> and recovery times for brachycephalics.</li>
          </ul>
          <p>
            If your Frenchie prefers people to dogs, request <strong>enrichment-only</strong> days (snuffle mats, scent games, training) instead of
            group play. That’s a win, not a failure.
          </p>
        </section>

        {/* FEEDING & MEDS */}
        <section id="feeding-meds" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Feeding, Water &amp; Medications</h2>
          <p className="mb-3">
            Boarding is the place where “mystery calories” creep in. Tighten process so weight and GI stay steady.
          </p>
          <h3 className="text-lg font-semibold mt-2 mb-1">Feeding</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Pack food in <strong>measured, labeled meals</strong> (grams, not scoops). Include a little extra for travel delays.</li>
            <li>Note <strong>feeding position</strong> if your dog has reflux/hiatal hernia tendencies (see your vet).</li>
            <li>Training treats come from the daily ration; <em>no extras</em> unless pre-approved and logged.</li>
          </ul>
          <h3 className="text-lg font-semibold mt-2 mb-1">Water</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Fresh, available water; shaded/wind-cooled water stations in play areas.</li>
            <li>For splash-happy dogs, towel dry folds and chest afterward to prevent moisture problems.</li>
          </ul>
          <h3 className="text-lg font-semibold mt-2 mb-1">Medications &amp; supplements</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Provide <strong>original packaging</strong> with vet label; include a printed <em>med map</em> (drug, dose, time, with/without food).</li>
            <li>Log doses in real time; missed doses trigger a same-day owner call.</li>
            <li>Ask the facility about <strong>anesthesia-free services</strong> (they should be avoided for dental “cleanings”) and how they coordinate vet care.</li>
          </ul>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Petunia workflow:</strong> Store feed grams, med schedules, and “do not feed” lists in Petunia. Staff can mark doses
            complete and attach photos if your plan requires it.
          </div>
        </section>

        {/* STRESS, ENRICHMENT */}
        <section id="stress" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Stress, Enrichment &amp; Noise</h2>
          <p className="mb-3">
            Kennel stress drives barking, GI upset, and skin flares. Lower arousal and provide <strong>predictable enrichment</strong>.
          </p>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Quiet hours with dim lights and soft music/white noise as appropriate.</li>
            <li>Food puzzles, snuffle scatter, lick mats, and short training bursts.</li>
            <li>Cover part of the crate to reduce visual triggers if your dog relaxes better in a “den.”</li>
            <li>For noise-reactive dogs, request a <strong>rear or corner run</strong> and staff note “no loud approach.”</li>
          </ul>
          <p>
            If your dog shows separation distress at home, discuss pre-boarding <strong>training plans</strong> and, if indicated, <strong>medications</strong>
            with your veterinarian or veterinary behaviorist well before travel.
          </p>
        </section>

        {/* SPECIAL POPULATIONS */}
        <section id="special" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Puppies, Seniors &amp; Special Cases</h2>
          <h3 className="text-lg font-semibold mt-2 mb-1">Puppies</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Follow your veterinarian’s vaccine timing. Until fully vaccinated, use controlled environments with excellent hygiene.</li>
            <li>Short social exposures with healthy, well-matched dogs; prioritize positive experiences over volume.</li>
            <li>Frequent potty breaks; reward outdoor eliminations to preserve house-training.</li>
          </ul>
          <h3 className="text-lg font-semibold mt-2 mb-1">Seniors</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Lower play intensity; more naps; traction everywhere; ramps to bed/sofa.</li>
            <li>Daily medication checks; monitor water intake and mobility. Use raised bowls if advised.</li>
          </ul>
          <h3 className="text-lg font-semibold mt-2 mb-1">Medical considerations</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>BOAS:</strong> heat rules, shorter sessions, fast escalation to rest at first noisy breathing.</li>
            <li><strong>IVDD history:</strong> avoid jumps and rough play; traction and ramps; staff trained to spot pain.</li>
            <li><strong>Eyes:</strong> no stick games; report squinting immediately; flush grit with sterile saline if instructed by your vet.</li>
            <li><strong>Skin/ears:</strong> dry folds and ears after water; medicated wipes if prescribed; report odor/redness same day.</li>
          </ul>
        </section>

        {/* DROPOFF */}
        <section id="dropoff" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Drop-Off Day: Smooth Handoffs</h2>
          <p className="mb-3">
            Handoffs fail when information lives in heads. Externalize everything and make it boringly clear.
          </p>
          <h3 className="text-lg font-semibold mt-2 mb-1">Owner’s handoff packet</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Petunia profile link (feed grams, meds, heat rules, fold/ear routine, emergency contacts).</li>
            <li>Printed med map + meds in original packaging; feeding portions labeled by meal.</li>
            <li>Collar with ID + fitted harness; 6-ft leash (no retractables); a familiar bed/throw.</li>
            <li>Behavior notes: dog–dog preferences, toy rules, arousal triggers, and decompression cues.</li>
          </ul>
          <h3 className="text-lg font-semibold mt-2 mb-1">Staff intake checklist</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Scan for cough, eye discharge, skin/ear redness, lameness; log baseline appetite and stool history.</li>
            <li>Record weight; confirm microchip; verify vaccines/parasite preventives.</li>
            <li>Assign housing and playgroup track (enrichment-only OK). Tag file as <strong>brachycephalic</strong> with heat rules.</li>
          </ul>
        </section>

        {/* DAILY SCHEDULES */}
        <section id="daily" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Daily Schedule Templates</h2>

          <h3 className="text-lg font-semibold mt-2 mb-1">Daycare (Frenchie Edition)</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>08:00 Intake &amp; calm greeting → “go to mat” reward → water.</li>
            <li>08:30 Play Set 1 (5–10 min) → water + AC cool-down (10–20 min).</li>
            <li>09:30 Enrichment block (snuffle, puzzle, training, nail check one paw).</li>
            <li>11:30 Potty → lunch if applicable → <strong>quiet hour</strong> (dim lights, white noise).</li>
            <li>13:30 Play Set 2 (shorter if warm) → water + AC → fold/ear quick dry if needed.</li>
            <li>15:00 Scent walk/parallel strolls → rest.</li>
            <li>16:00 Report card: appetite, stool, play notes, heat tolerance, any flags.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Boarding (24-hour rhythm)</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>07:00 Potty walk → breakfast (measured) → meds → rest.</li>
            <li>09:30 Enrichment or Play Set 1 → water + AC cool-down.</li>
            <li>12:00 Quiet hour nap → soft music → minimal foot traffic.</li>
            <li>14:00 Enrichment or Play Set 2 (short if warm) → fold/ear check → traction strolls.</li>
            <li>17:30 Dinner (measured) → meds → calm settle.</li>
            <li>20:30 Last potty → bedtime routine → lights down and white noise.</li>
          </ul>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm mt-3">
            <strong>Petunia tip:</strong> Attach the daily schedule in Petunia and ask staff to check off sets. Over a week, you’ll see
            patterns in heat tolerance, appetite, and sleep.
          </div>
        </section>

        {/* EMERGENCIES */}
        <section id="emergencies" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Emergency &amp; Illness Protocols</h2>
          <p className="mb-3">
            Facilities should keep a written decision tree for common events: <strong>heat stress</strong>, <strong>BOAS crises</strong>,
            <strong> corneal injuries</strong>, <strong>vomiting/diarrhea</strong>, <strong>coughing</strong>, <strong>lameness</strong>, and <strong>fight wounds</strong>. Rapid recognition and
            standard steps save lives and avoid delays.
          </p>
          <h3 className="text-lg font-semibold mt-2 mb-1">Go-now cues (call owner on the way)</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Open-mouth breathing at rest, blue/pale gums, collapse, or heat distress.</li>
            <li>Squinting/pawing at an eye; sudden corneal haze or visible corneal defect.</li>
            <li>Acute hind-end weakness, knuckling, screams on movement.</li>
            <li>Repeated vomiting with lethargy; suspected bloat; blood in stool with depression.</li>
          </ul>
          <h3 className="text-lg font-semibold mt-2 mb-1">CIRDC (“Kennel Cough”) response</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Isolate coughing dogs; mask/hand hygiene; enhance ventilation and cleaning per vet advice.</li>
            <li>Notify owners same day; recommend veterinary follow-up; adjust intakes to reduce traffic if multiple cases.</li>
          </ul>
          <p className="text-sm text-gray-700">
            Staff must know the closest emergency hospital and have owner/vet contacts at hand. For brachycephalics, emphasize
            <strong> pre-oxygenation</strong> and careful airway management if anesthesia is required (see ACVAA).
          </p>
        </section>

        {/* TRAVEL */}
        <section id="travel" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Travel &amp; Transport Safety</h2>
          <p className="mb-3">
            Transport is part of boarding/daycare. Keep cars cool, use <strong>crash-tested crates or seatbelt harnesses</strong>, and never
            leave dogs in vehicles unattended. Airline cargo holds are generally unsafe for brachycephalic breeds; if air travel is
            unavoidable, consult your veterinarian for risk mitigation.
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Pre-cool the vehicle; set crate near air vents; offer water at stops.</li>
            <li>Plan early-morning drop-offs/pick-ups during heat waves.</li>
          </ul>
        </section>

        {/* AFTER BOARDING */}
        <section id="after" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">After Boarding: Decompression at Home</h2>
          <p className="mb-3">
            Expect a sleepy 24–48 hours. Provide calm routines, measured meals, and short sniff walks. Watch for <strong>cough</strong>,
            <strong> diarrhea</strong>, <strong>eye squinting</strong>, or <strong>limping</strong> and contact your veterinarian if signs persist or worsen.
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Laundry: wash throws and bedding; wipe and dry facial folds.</li>
            <li>Weigh within a week; adjust calories if boarding treats crept in.</li>
            <li>Resume your home training cues to refresh manners after vacation freedom.</li>
          </ul>
        </section>

        {/* CHECKLISTS */}
        <section id="templates" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Checklists &amp; Templates</h2>

          <h3 className="text-lg font-semibold mt-2 mb-1">Owner Pre-Boarding Checklist</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Vet visit if due; update vaccines per facility and vet advice.</li>
            <li>Parasite prevention current; note last dose date.</li>
            <li>Pack meals in labeled portions (grams); bring harness, 6-ft leash, ID tags.</li>
            <li>Print &amp; share Petunia profile: feed/meds, heat rules, fold/ear routine, emergency plan.</li>
            <li>Behavior notes: dog–dog play style, toy rules, triggers, decompression cues.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Facility Intake Checklist (Frenchie)</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Health screen: cough, ocular discharge, ear/skin redness, lameness.</li>
            <li>Weight, microchip, vaccine verification; parasite prevention confirmed.</li>
            <li>Assign housing in a cool, low-stim room; traction mats and ramps in place.</li>
            <li>Play track: group vs. enrichment-only; heat rules posted on card.</li>
            <li>Owner contact tested (text/email); emergency hospital listed.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Daily Report Card Fields</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Appetite &amp; water intake; stool (normal/soft/diarrhea).</li>
            <li>Play style &amp; duration; recovery time; breathing notes.</li>
            <li>Fold/ear/eye check; any redness or odor.</li>
            <li>Med doses given; behavior notes (calm settles, crate comfort).</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Heat Rules (Post on the Wall)</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Play sets 5–10 minutes max when warm; earlier indoor transitions for brachycephalics.</li>
            <li>Water always out; cool mats/fans; AC cool-downs built into the schedule.</li>
            <li>Stop at <em>first</em> noisy breathing; rest until breathing is quiet and easy.</li>
          </ul>

          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm mt-3">
            <strong>Petunia workflow:</strong> Convert each checklist into a reusable Petunia routine. Staff (or sitters) tick boxes and
            attach notes/photos so you have a clean, searchable history.
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">Frequently Asked Questions</h2>

          <p className="mb-3">
            <strong>Are French Bulldogs safe at daycare?</strong><br />
            Yes—with the right program. Look for short play sets with planned recovery, cool indoor spaces, traction surfaces,
            and staff trained in brachycephalic care and positive handling.
          </p>

          <p className="mb-3">
            <strong>What vaccines do most facilities require?</strong><br />
            Core vaccines (DA2PP and rabies) plus Bordetella are common; many also require or recommend canine influenza and
            leptospirosis depending on regional risk. Confirm with your vet and the facility.
          </p>

          <p className="mb-3">
            <strong>Can my Frenchie swim at daycare?</strong><br />
            Assume <strong>no</strong> unless life vests and direct staff supervision are used. Many Frenchies cannot swim safely due to body shape.
          </p>

          <p className="mb-3">
            <strong>What’s the biggest risk for Frenchies during boarding/daycare?</strong><br />
            Heat stress and airway overload during high arousal. Conservative heat rules, short play sets, and prompt rest are
            non-negotiable.
          </p>

          <p className="mb-3">
            <strong>My dog gets “kennel cough” easily. Should we board?</strong><br />
            Discuss vaccine timing and regional risk with your veterinarian. Consider in-home care or enrichment-only services during
            outbreaks, and choose facilities with solid ventilation and isolation protocols.
          </p>

          <p>
            <strong>What should the facility do if my dog starts coughing or squinting?</strong><br />
            Separate, notify you same day, and recommend a veterinary exam. For eye pain, same-day veterinary care is important in
            Frenchies due to ulcer risk.
          </p>
        </section>

        {/* SOURCES */}
        <section id="sources" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">📚 Sources (Selected)</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            <li>
              American Animal Hospital Association (AAHA). <em>2022 Canine Vaccination Guidelines</em>.{' '}
              <a href="https://www.aaha.org/resources/2022-aaha-canine-vaccination-guidelines/" target="_blank" rel="noopener noreferrer">
                https://www.aaha.org/resources/2022-aaha-canine-vaccination-guidelines/
              </a>
            </li>
            <li>
              World Small Animal Veterinary Association (WSAVA). <em>Global Guidelines</em> (Vaccination &amp; Nutrition toolkits).{' '}
              <a href="https://wsava.org/global-guidelines/" target="_blank" rel="noopener noreferrer">
                https://wsava.org/global-guidelines/
              </a>
            </li>
            <li>
              AVMA (American Veterinary Medical Association). <em>Hot Weather Safety for Pets</em>.{' '}
              <a href="https://www.avma.org/resources/pet-owners/petcare/hot-weather-safety-pets" target="_blank" rel="noopener noreferrer">
                https://www.avma.org/resources/pet-owners/petcare/hot-weather-safety-pets
              </a>
            </li>
            <li>
              Cambridge BOAS Research Group. Brachycephalic obstructive airway syndrome resources (owner guidance).{' '}
              <a href="https://www.vet.cam.ac.uk/boas" target="_blank" rel="noopener noreferrer">
                https://www.vet.cam.ac.uk/boas
              </a>
            </li>
            <li>
              American College of Veterinary Anesthesia and Analgesia (ACVAA). Owner resources; anesthesia considerations in brachycephalics.{' '}
              <a href="https://acvaa.org/owner-resources/" target="_blank" rel="noopener noreferrer">
                https://acvaa.org/owner-resources/
              </a>
            </li>
            <li>
              Merck Veterinary Manual. <em>Brachycephalic Airway Syndrome</em>.{' '}
              <a href="https://www.merckvetmanual.com/respiratory-system/respiratory-diseases-of-dogs-and-cats/brachycephalic-airway-syndrome" target="_blank" rel="noopener noreferrer">
                https://www.merckvetmanual.com/respiratory-system/respiratory-diseases-of-dogs-and-cats/brachycephalic-airway-syndrome
              </a>
            </li>
            <li>
              Merck Veterinary Manual. <em>Infectious Tracheobronchitis (Kennel Cough) and Canine Infectious Respiratory Disease Complex</em>.{' '}
              <a href="https://www.merckvetmanual.com/respiratory-system/respiratory-diseases-of-dogs-and-cats/infectious-tracheobronchitis-in-dogs" target="_blank" rel="noopener noreferrer">
                https://www.merckvetmanual.com/respiratory-system/respiratory-diseases-of-dogs-and-cats/infectious-tracheobronchitis-in-dogs
              </a>
            </li>
            <li>
              CDC. <em>Canine Influenza</em> (H3N2/H3N8) overview for pet owners and facilities.{' '}
              <a href="https://www.cdc.gov/flu/other/canine-flu/keyfacts.html" target="_blank" rel="noopener noreferrer">
                https://www.cdc.gov/flu/other/canine-flu/keyfacts.html
              </a>
            </li>
            <li>
              UC Davis Koret Shelter Medicine Program. <em>Housing, Sanitation, and Ventilation Principles</em> (overview articles and resources).{' '}
              <a href="https://www.sheltermedicine.com/library" target="_blank" rel="noopener noreferrer">
                https://www.sheltermedicine.com/library
              </a>
            </li>
            <li>
              EPA. <em>Guide to Air Cleaners in the Home</em> (HEPA &amp; filtration background for indoor air).{' '}
              <a href="https://www.epa.gov/indoor-air-quality-iaq/guide-air-cleaners-home" target="_blank" rel="noopener noreferrer">
                https://www.epa.gov/indoor-air-quality-iaq/guide-air-cleaners-home
              </a>
            </li>
            <li>
              Royal Veterinary College (RVC) VetCompass. French Bulldog breed health summaries (context for breed management).{' '}
              <a href="https://www.rvc.ac.uk/vetcompass" target="_blank" rel="noopener noreferrer">
                https://www.rvc.ac.uk/vetcompass
              </a>
            </li>
            <li>
              VCA Animal Hospitals. <em>Otitis Externa in Dogs</em>; <em>Grooming and Coat Care</em> (practical hygiene points).{' '}
              <a href="https://vcahospitals.com/know-your-pet/otitis-externa-in-dogs" target="_blank" rel="noopener noreferrer">
                https://vcahospitals.com/know-your-pet/otitis-externa-in-dogs
              </a>{' '}
              |{' '}
              <a href="https://vcahospitals.com/know-your-pet/grooming-and-coat-care-for-your-dog" target="_blank" rel="noopener noreferrer">
                https://vcahospitals.com/know-your-pet/grooming-and-coat-care-for-your-dog
              </a>
            </li>
            <li>
              Veterinary Oral Health Council (VOHC). <em>Accepted Products</em> (dental home care).{' '}
              <a href="https://vohc.org" target="_blank" rel="noopener noreferrer">
                https://vohc.org
              </a>
            </li>
          </ul>
          <p className="text-xs text-gray-600 mt-4">
            Educational content only. Always consult your veterinarian for diagnosis and treatment individualized to your dog.
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
