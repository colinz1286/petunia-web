'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function DoLabsMakeGoodTherapyDogs() {
  const locale = useLocale();

  const title =
    'Do Labrador Retrievers Make Good Therapy Dogs? An Evidence-Informed Guide for Owners, Handlers & Facilities';
  const date = 'August 3, 2025';
  const categories = ['owner', 'breed_specific_guides'] as const;

  // Use the exact labels object from prior posts (unchanged keys/labels)
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
            <li><a href="#definitions" className="underline hover:opacity-80">Definitions & Legal Access</a></li>
            <li><a href="#why-labs" className="underline hover:opacity-80">Why Labs Often Excel</a></li>
            <li><a href="#where-labs-shine" className="underline hover:opacity-80">Settings Where Labs Shine</a></li>
            <li><a href="#watchouts" className="underline hover:opacity-80">Breed-Specific Watch-Outs</a></li>
            <li><a href="#welfare" className="underline hover:opacity-80">Dog Welfare, Stress & Fitness to Work</a></li>
            <li><a href="#training-path" className="underline hover:opacity-80">Training Path: CGC → Registration → AKC Titles</a></li>
            <li><a href="#facility" className="underline hover:opacity-80">Facility Readiness & Infection Control</a></li>
            <li><a href="#sops" className="underline hover:opacity-80">Handler SOPs & Visit Playbooks</a></li>
            <li><a href="#risk" className="underline hover:opacity-80">Risk, Insurance & Ethics</a></li>
            <li><a href="#templates" className="underline hover:opacity-80">Checklists & Templates</a></li>
            <li><a href="#faq" className="underline hover:opacity-80">FAQ</a></li>
            <li><a href="#sources" className="underline hover:opacity-80">📚 Sources (Selected)</a></li>
          </ul>
        </nav>

        {/* TL;DR */}
        <section id="tldr" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Short Answer (TL;DR)</h2>
          <p className="mb-4">
            <strong>Yes—many Labrador Retrievers make excellent therapy dogs</strong> thanks to their
            sociability, tolerance of handling, trainability, and stable temperaments. But success is
            not automatic: you’ll need the <em>right individual</em> Lab, early socialization,
            rock-solid impulse control around food and strangers, sound health (hips/elbows/weight),
            a prepared handler, and facility partners who follow infection-control SOPs. Target the
            <em>AKC Canine Good Citizen (CGC)</em> first, then register with an
            <em> AKC-recognized therapy organization</em> to volunteer legally and safely. Therapy dogs
            don’t have public-access rights like service dogs, and sessions must protect both
            people and dogs.
          </p>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Petunia tip:</strong> Think in <em>teams</em>: Dog × Handler × Facility. Align all
            three with checklists, training ladders, and welfare gates (green/yellow/red) before you
            ever step into a hospital, school, or courthouse.
          </div>
        </section>

        {/* Definitions */}
        <section id="definitions" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Definitions & Legal Access (Know the Difference)</h2>
          <p className="mb-3">
            <strong>Therapy dogs</strong> are pets that visit multiple people to provide comfort or
            motivation in settings like hospitals, schools, libraries, and courts. They are evaluated
            for behavior and health by a <em>therapy organization</em> and work as volunteer teams with
            their handlers. <strong>Service dogs</strong> are individually trained to perform tasks for a
            person with a disability and have public access under the ADA. <strong>Emotional Support
            Animals (ESAs)</strong> provide comfort to one person; they have <em>no</em> public-access rights
            under the ADA. Always represent your dog accurately, and never use a “therapy” label to
            bypass access rules.
          </p>
          <div className="rounded-md border border-[#d9cfc2] bg-[#fffaf1] p-4 text-sm">
            <strong>Legal bottom line:</strong> Therapy dogs <em>do not</em> have ADA public access rights.
            Access is by facility invitation/policy, often through recognized therapy organizations.
          </div>
        </section>

        {/* Why Labs */}
        <section id="why-labs" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Why Labs Often Excel (Temperament & Fit)</h2>
          <p className="mb-3">
            The breed standard and common temperament in Labrador Retrievers (friendly, people-oriented,
            eager to please, highly trainable) align well with therapy work. Many Labs tolerate
            variable handling, novel equipment (wheelchairs, walkers), busy spaces, and the start-stop
            rhythm of visits. Their <em>soft mouth</em> heritage supports gentle treat taking and controlled
            retrieves for engagement games. Their size and coat invite petting—useful in settings
            where tactile interaction is therapeutic.
          </p>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>Handler responsiveness</strong> and food/play motivation make skill acquisition fast.</li>
            <li><strong>Stable sociability</strong> suits group visits (schools, assisted living, libraries).</li>
            <li><strong>Versatility</strong>: Labs adapt from low-stimulus bedside work to energetic literacy programs.</li>
          </ul>
          <p className="mb-0">
            Fit varies by individual. High-drive adolescent Labs may be too exuberant early on—plan to
            mature skills and <em>then</em> deploy.
          </p>
        </section>

        {/* Settings where Labs shine */}
        <section id="where-labs-shine" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Settings Where Labs Shine (with Examples)</h2>
          <ul className="list-disc pl-5 space-y-2 mb-3">
            <li>
              <strong>Hospitals & outpatient clinics</strong>: bedside visits, waiting room anxiety relief,
              short “walk & talk” loops for mobility encouragement. Use calm positioning and
              single-patient focus with barriers (e.g., a towel) if paws rest on bedding.
            </li>
            <li>
              <strong>Senior living</strong>: seated petting circles, reminiscence prompts (“Tell me about
              your childhood dog”), gentle nose-target games from a chair or bed.
            </li>
            <li>
              <strong>Schools & libraries</strong>: “read-to-a-dog” literacy programs, test-week de-stress
              lounges, social-skills small groups with counselors.
            </li>
            <li>
              <strong>Crisis & courts</strong>: quiet, grounding presence in sensitive settings via trained
              teams and strict welfare limits (short, handler-led, opt-out honored immediately).
            </li>
          </ul>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Petunia tip:</strong> Match the Lab to the job. A mellow, middle-aged Lab fits
            palliative care; a younger, impulse-controlled Lab can serve busy student de-stress events.
          </div>
        </section>

        {/* Watchouts */}
        <section id="watchouts" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Breed-Specific Watch-Outs (What Can Derail a Visit)</h2>
          <ul className="list-disc pl-5 space-y-2 mb-3">
            <li>
              <strong>Food obsession</strong>: many Labs are highly food-motivated (genetics can play a role).
              Unmanaged scrounging around patient trays or floor spills is disqualifying. Train a
              bulletproof <em>leave-it</em>, calm treat delivery, and bed-level neutrality.
            </li>
            <li>
              <strong>Exuberance & jumping</strong>: adolescents especially. Solve with reinforcement-rich loose-leash,
              default sits for greetings, and arousal recovery routines.
            </li>
            <li>
              <strong>Shedding & allergies</strong>: Labs shed—some facilities restrict direct bed contact without
              barriers; some programs avoid high-allergy units entirely.
            </li>
            <li>
              <strong>Musculoskeletal health</strong>: hip/elbow dysplasia and arthritis risk mean short, non-slip
              sessions; avoid stair marathons and slick floors; maintain lean body condition.
            </li>
          </ul>
          <p className="mb-0">
            None of these are dealbreakers with the right individual, thoughtful training, and welfare-first
            scheduling.
          </p>
        </section>

        {/* Welfare */}
        <section id="welfare" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Dog Welfare, Stress & Fitness to Work (Non-Negotiables)</h2>
          <p className="mb-3">
            Therapy work must be <strong>safe, voluntary, and brief</strong> from the dog’s perspective. Monitor
            behavioral stress signals (lip licks, head turns, tucked tail, shake-off, scanning), and use
            physiological commonsense: hydration breaks, cool rest areas, and session caps (many programs
            limit to ~2 hours/day with breaks). Handlers should treat every visit as an opt-in—your dog can
            decline contact and you must honor it. Research suggests therapy dogs can be kept within a
            neutral/positive welfare range when handlers are skilled, sessions are short, and facilities
            follow hygiene and space rules.
          </p>
          <div className="rounded-md border border-[#d9cfc2] bg-[#fffaf1] p-4 text-sm">
            <strong>Welfare gate:</strong> If your Lab shows <em>two or more</em> stress signals in 60 seconds or
            startles and can’t recover within 10–15 seconds, <strong>end the session</strong> and exit calmly.
          </div>
        </section>

        {/* Training Path */}
        <section id="training-path" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Training Path: CGC → Registration → AKC Therapy Dog Titles</h2>
          <h3 className="text-lg font-semibold mb-2">1) Foundations & Screens</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>
              <strong>Temperament basics</strong>: neutrality to strangers, calm handling, no reactivity
              to dogs/humans, stable noise/startle recovery.
            </li>
            <li>
              <strong>Core cues</strong>: name response, hand target, sit/down, stay, loose leash, “leave-it,”
              “drop,” settle on mat, consent-based handling (“chin”).
            </li>
          </ul>

          <h3 className="text-lg font-semibold mb-2">2) AKC Canine Good Citizen (CGC)</h3>
          <p className="mb-3">
            CGC’s 10 items (polite greetings, grooming check, walking through a crowd, stay/come, distraction
            neutrality, supervised separation) are the starting line for many therapy programs. Add Community CGC (CGCA) and Urban CGC (CGCU) as real-world proofs.
          </p>

          <h3 className="text-lg font-semibold mb-2">3) Register with a Therapy Organization</h3>
          <p className="mb-2">
            Choose an <em>AKC-recognized</em> registry (e.g., Pet Partners, Alliance of Therapy Dogs, Therapy
            Dogs International). Expect health screening, behavior evaluation, observed visits, handler
            education, and liability insurance coverage. Follow the org’s visit rules and retesting cadence.
          </p>

          <h3 className="text-lg font-semibold mb-2">4) Earn AKC Therapy Dog Titles (Optional but Motivating)</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>THDN</strong>: 10 verified visits</li>
            <li><strong>THD</strong>: 50 visits; <strong>THDA</strong>: 100; <strong>THDX</strong>: 200; <strong>THDD</strong>: 400; <strong>THDS</strong>: 600</li>
          </ul>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm mt-3">
            <strong>Petunia tip:</strong> Treat each title as a <em>quality</em> milestone, not a quota. If welfare
            slips to yellow/red, <em>reduce</em> visit frequency and intensity.
          </div>
        </section>

        {/* Facility */}
        <section id="facility" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Facility Readiness & Infection Control (Safety First)</h2>
          <p className="mb-3">
            Therapy teams partner with facilities that maintain policies for animal visits. Expect
            <em> hand hygiene before/after</em> contact, grooming within 24 hours for certain units, avoiding
            isolation rooms, using <em>single-patient barriers</em> if paws rest on beds, and clear exclusion
            criteria (fever, draining wounds, outbreaks). Puppies under one year are generally discouraged
            for hospital programs. Many programs prohibit raw protein diets for therapy animals due to
            pathogen shedding risk.
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Handler carries:</strong> sanitizer, barrier towel, waste bags, wipe cloths, brush.</li>
            <li><strong>Dog arrives:</strong> clean, dry, nails blunt, no fleas/ticks, calm demeanor, basic ID.</li>
            <li><strong>Screening:</strong> skip visits for cough, GI signs, diarrhea, skin lesions, or limping.</li>
          </ul>
        </section>

        {/* SOPs */}
        <section id="sops" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Handler SOPs & Visit Playbooks (Copyable Routines)</h2>
          <h3 className="text-lg font-semibold mb-1">Pre-Visit (T-24h → Arrival)</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Groom (brush, wipe-down), check nails/pads; pack barriers, wipes, sanitizer, water.</li>
            <li>Confirm unit policies, exclusions, and PPE. Review patient list (if provided).</li>
            <li>Warm-up cues (chin, hand target, settle) for 3–5 minutes in the parking lot.</li>
          </ul>
          <h3 className="text-lg font-semibold mb-1">During Visit (30–60 min total)</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Announce: “May we offer a visit?” &gt; sanitize &gt; barrier placed if bed contact allowed.</li>
            <li>Begin with <em>consent signals</em> (handler positions dog, offers chin); honor opt-outs.</li>
            <li>Rotate micro-interactions: petting, brief tricks, calm eye gazes, short “walk & talk.”</li>
            <li>Track welfare: green (continue), yellow (break), red (end session gracefully).</li>
          </ul>
          <h3 className="text-lg font-semibold mb-1">Post-Visit (Decompression & Notes)</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Water/sniff decompression walk; quick body check for abrasions or soreness.</li>
            <li>Log duration, units visited, patient reactions, dog welfare color, follow-ups.</li>
          </ul>
        </section>

        {/* Risk */}
        <section id="risk" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Risk, Insurance & Ethics (Protect People and Dogs)</h2>
          <ul className="list-disc pl-5 space-y-2 mb-3">
            <li>
              <strong>Liability insurance</strong>: most major registries include team liability coverage
              during approved visits. Confirm policy scope and any exclusions.
            </li>
            <li>
              <strong>Privacy</strong>: never photograph clients without written consent; follow facility HIPAA-adjacent rules.
            </li>
            <li>
              <strong>Boundaries</strong>: therapy teams cannot provide medical advice, counseling, or behavior modification;
              they follow staff lead and program goals.
            </li>
            <li>
              <strong>Stop rules</strong>: pain, fear, or persistent stress in the dog; patient agitation; hygiene
              lapses; policy conflicts; environmental hazards.
            </li>
          </ul>
        </section>

        {/* Templates */}
        <section id="templates" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Checklists & Templates (Copy/Paste)</h2>

          <h3 className="text-lg font-semibold mt-2 mb-1">Therapy-Candidate Lab: Quick Screen</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Age ≥ 1 year; stable health (hips/elbows monitored, lean BCS 4–5/9).</li>
            <li>No fear/aggro history; neutral to dogs/strangers; startle recovery &lt; 10–15s.</li>
            <li>Core cues fluent in novel spaces; takes treats gently; reliable <em>leave-it</em>.</li>
            <li>Enjoys petting; seeks contact but can settle calmly for 2–3 minutes.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">CGC-Prep Ladder (Examples)</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>Greeting</strong>: handler handshake at 6 ft → 3 ft → next to dog (no jump).</li>
            <li><strong>Grooming</strong>: brush 2 strokes → ear lift → paw lift → 10-sec chin hold.</li>
            <li><strong>Distractions</strong>: rolling IV pole pass at 10 ft → 5 ft → 2 ft; no startle lunge.</li>
            <li><strong>Separation</strong>: 30s out-of-sight → 60s → 180s supervised separation.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Visit Packing List</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Handler ID; org badge; facility pass (if issued); proof of vaccines as required.</li>
            <li>Sanitizer, barrier towel, brush/wipes, poop bags, collapsible water bowl.</li>
            <li>High-value treats (sealed); tug or soft toy <em>only if</em> allowed; treat pouch.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Welfare Scoring (Green/Yellow/Red)</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Green</strong>: relaxed face, soft body, voluntary approach → continue.</li>
            <li><strong>Yellow</strong>: lip lick, head turn, slight crouch → micro-break, reset, increase distance.</li>
            <li><strong>Red</strong>: tuck, whale eye, growl, freeze, panting out of context → end visit and exit.</li>
          </ul>

          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm mt-3">
            <strong>Petunia tip:</strong> Build a shared scoreboard with your facility: visit length, patient
            goals, and your dog’s welfare color. Aim for 80% green, 20% yellow, 0% red.
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">Frequently Asked Questions</h2>

          <p className="mb-3">
            <strong>Are Labs “naturally” therapy dogs?</strong>
            <br />
            Many are predisposed to people-friendliness and trainability, but therapy work depends on
            the individual dog’s temperament, socialization, and handler training. Screen first; don’t
            force fit.
          </p>

          <p className="mb-3">
            <strong>What health workups should I do first?</strong>
            <br />
            Annual wellness exam, joint monitoring, parasite prevention, and weight control. Maintain a
            lean body condition to protect joints. Follow your registry’s vaccine/fecal testing policies.
          </p>

          <p className="mb-3">
            <strong>Do therapy dogs have public access like service dogs?</strong>
            <br />
            No. Therapy teams visit by invitation/policy of the facility, typically through a recognized
            therapy organization. Misrepresenting access undermines programs and can be illegal.
          </p>

          <p className="mb-3">
            <strong>How long is a typical visit?</strong>
            <br />
            30–60 minutes total with breaks, often shorter for busy events. Welfare and hygiene
            outweigh quotas or title counts.
          </p>

          <p className="mb-3">
            <strong>Is the AKC Therapy Dog title required?</strong>
            <br />
            No; it recognizes your volunteer visits. Most facilities care more about your <em>registry</em>,
            training, and adherence to facility policies.
          </p>

          <p className="mb-0">
            <strong>My adolescent Lab is too bouncy—what now?</strong>
            <br />
            Press pause on visits; invest in CGC-level impulse control (default sits, calm treat taking,
            settle on mat), then re-evaluate. Some Labs peak for therapy work at 2–4 years old.
          </p>
        </section>

        {/* Sources */}
        <section id="sources" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">📚 Sources (Selected)</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            {/* Breed & temperament context */}
            <li>
              American Kennel Club (AKC). <em>Labrador Retriever—Breed Information.</em>{' '}
              <a href="https://www.akc.org/dog-breeds/labrador-retriever/" target="_blank" rel="noopener noreferrer">
                https://www.akc.org/dog-breeds/labrador-retriever/
              </a>
            </li>

            {/* CGC & AKC therapy titles */}
            <li>
              AKC. <em>Canine Good Citizen (CGC): Test Items.</em>{' '}
              <a href="https://www.akc.org/products-services/training-programs/canine-good-citizen/canine-good-citizen-test-items/" target="_blank" rel="noopener noreferrer">
                https://www.akc.org/.../canine-good-citizen-test-items/
              </a>
            </li>
            <li>
              AKC. <em>Therapy Dog Program & Title Qualifications.</em>{' '}
              <a href="https://www.akc.org/sports/title-recognition-program/therapy-dog-program/earn-title-qualifications/" target="_blank" rel="noopener noreferrer">
                https://www.akc.org/.../therapy-dog-program/earn-title-qualifications/
              </a>
            </li>

            {/* Registries */}
            <li>
              Pet Partners. <em>Volunteer & Team Requirements.</em>{' '}
              <a href="https://petpartners.org/volunteer/requirements/" target="_blank" rel="noopener noreferrer">
                https://petpartners.org/volunteer/requirements/
              </a>
            </li>
            <li>
              Alliance of Therapy Dogs (ATD). <em>Rules/Health Requirements & Insurance Summary.</em>{' '}
              <a href="https://www.therapydogs.com/wp-content/uploads/2024/11/2025-ATD-Rules-and-Regulations.pdf" target="_blank" rel="noopener noreferrer">
                https://therapydogs.com/.../2025-ATD-Rules-and-Regulations.pdf
              </a>{' '}
              |{' '}
              <a href="https://www.therapydogs.com/alliance-therapy-dogs/" target="_blank" rel="noopener noreferrer">
                https://www.therapydogs.com/alliance-therapy-dogs/
              </a>
            </li>
            <li>
              Therapy Dogs International (TDI). <em>Testing Requirements.</em>{' '}
              <a href="https://www.tdi-dog.org/HowtoJoin.aspx?Page=Testing+Requirements" target="_blank" rel="noopener noreferrer">
                https://www.tdi-dog.org/.../Testing+Requirements
              </a>
            </li>

            {/* Legal definitions */}
            <li>
              U.S. Department of Justice, ADA. <em>Service Animals—2010 Requirements & FAQs.</em>{' '}
              <a href="https://www.ada.gov/resources/service-animals-2010-requirements/" target="_blank" rel="noopener noreferrer">
                https://www.ada.gov/.../service-animals-2010-requirements/
              </a>{' '}
              |{' '}
              <a href="https://www.ada.gov/resources/service-animals-faqs/" target="_blank" rel="noopener noreferrer">
                https://www.ada.gov/.../service-animals-faqs/
              </a>
            </li>

            {/* Infection control & facility policy */}
            <li>
              CDC. <em>Animals in Health-Care Facilities: Infection Control.</em>{' '}
              <a href="https://www.cdc.gov/infection-control/hcp/environmental-control/animals-in-healthcare-facilities.html" target="_blank" rel="noopener noreferrer">
                https://www.cdc.gov/.../animals-in-healthcare-facilities.html
              </a>
            </li>
            <li>
              Society for Healthcare Epidemiology of America (SHEA). <em>Animals in Healthcare Facilities—Expert Guidance.</em>{' '}
              <a href="https://cha.com/wp-content/uploads/2017/11/SHEA_Animals-in-Healthcare-Facilities_May-2015.pdf" target="_blank" rel="noopener noreferrer">
                https://cha.com/.../SHEA_Animals-in-Healthcare-Facilities_May-2015.pdf
              </a>
            </li>
            <li>
              Pet Partners. <em>Importance of Infection Control During Visits.</em>{' '}
              <a href="https://petpartners.org/the-importance-of-infection-control-during-therapy-animal-visits/" target="_blank" rel="noopener noreferrer">
                https://petpartners.org/.../infection-control-during-therapy-animal-visits/
              </a>
            </li>

            {/* AAI definitions & welfare */}
            <li>
              IAHAIO. <em>Definitions & Guidelines for Animal-Assisted Interventions (2014–2018 update).</em>{' '}
              <a href="https://iahaio.org/wp/wp-content/uploads/2018/04/iahaio_wp_updated-2018-final.pdf" target="_blank" rel="noopener noreferrer">
                https://iahaio.org/.../iahaio_wp_updated-2018-final.pdf
              </a>
            </li>
            <li>
              Glenk LM. <em>Therapy Dog Welfare Revisited—Review (2017–2021).</em>{' '}
              <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8538106/" target="_blank" rel="noopener noreferrer">
                https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8538106/
              </a>
            </li>

            {/* Evidence on outcomes */}
            <li>
              McCullough A, et al. <em>Animal-Assisted Intervention RCT in Pediatric Oncology.</em>{' '}
              <a href="https://pubmed.ncbi.nlm.nih.gov/29268667/" target="_blank" rel="noopener noreferrer">
                https://pubmed.ncbi.nlm.nih.gov/29268667/
              </a>
            </li>
            <li>
              Waite TC, et al. <em>Meta-analysis of AAIs on pain, anxiety, distress.</em>{' '}
              <a href="https://www.sciencedirect.com/science/article/abs/pii/S1744388118300525" target="_blank" rel="noopener noreferrer">
                https://www.sciencedirect.com/.../S1744388118300525
              </a>
            </li>

            {/* Lab health & weight */}
            <li>
              Raffan E, et al. <em>POMC deletion & food motivation in Labrador Retrievers.</em>{' '}
              <a href="https://www.cell.com/cell-metabolism/fulltext/S1550-4131(16)30163-2" target="_blank" rel="noopener noreferrer">
                Cell Metabolism (2016)
              </a>
            </li>
            <li>
              OFA. <em>Disease Statistics by Breed (hips/elbows; breed browsing).</em>{' '}
              <a href="https://ofa.org/diseases/disease-statistics/" target="_blank" rel="noopener noreferrer">
                https://ofa.org/diseases/disease-statistics/
              </a>
            </li>
            <li>
              MSD Vet Manual. <em>Nutrition & Obesity—health impacts, lifespan.</em>{' '}
              <a href="https://www.merckvetmanual.com/management-and-nutrition/nutrition-small-animals/nutrition-in-disease-management-in-small-animals" target="_blank" rel="noopener noreferrer">
                https://www.merckvetmanual.com/.../nutrition-in-disease-management
              </a>
            </li>
          </ul>

          <p className="text-xs text-gray-600 mt-4">
            Educational content only. Always consult your veterinarian, therapy-dog registry, and host
            facility for individualized guidance and policies. Therapy work is voluntary and must safeguard
            both human and canine welfare at all times.
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
