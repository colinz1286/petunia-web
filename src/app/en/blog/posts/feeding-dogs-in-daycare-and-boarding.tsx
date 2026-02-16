'use client';

import Head from 'next/head';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function FeedingDogsInDaycareBoarding() {
  const locale = useLocale();

  const title =
    'Feeding Dogs in Daycare and Boarding: Scheduling, Special Diets, and Risk Management';
  const date = 'September 9, 2025';
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

  const description =
    'An operator-grade guide to feeding systems in daycare and boarding: intake questions, portioning in grams, sanitation, allergy controls, raw and prescription diets, med-with-food workflows, bloat and aspiration risk, documentation, training, and ready-to-use SOPs.';

  return (
    <>
      <Head>
        <title>{title} – Petunia Blog</title>
        <meta name="description" content={description} />
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
            <li><a href="#why-it-matters" className="underline hover:opacity-80">Why Feeding Systems Matter</a></li>
            <li><a href="#intake" className="underline hover:opacity-80">Intake &amp; Documentation</a></li>
            <li><a href="#portioning" className="underline hover:opacity-80">Portioning: Grams, Tools, &amp; Labels</a></li>
            <li><a href="#scheduling" className="underline hover:opacity-80">Scheduling &amp; Floor Flow</a></li>
            <li><a href="#special-diets" className="underline hover:opacity-80">Special Diets (Allergies, Raw, Rx)</a></li>
            <li><a href="#meds" className="underline hover:opacity-80">Medications With Food</a></li>
            <li><a href="#sanitation" className="underline hover:opacity-80">Sanitation &amp; Cross-Contamination</a></li>
            <li><a href="#risk" className="underline hover:opacity-80">Risk Management: Choking, Bloat, Aspiration</a></li>
            <li><a href="#boarding-vs-daycare" className="underline hover:opacity-80">Boarding vs. Daycare Differences</a></li>
            <li><a href="#training" className="underline hover:opacity-80">Staff Training &amp; Audits</a></li>
            <li><a href="#owner-comms" className="underline hover:opacity-80">Owner Communication</a></li>
            <li><a href="#sops" className="underline hover:opacity-80">Printable SOPs &amp; Checklists</a></li>
            <li><a href="#faq" className="underline hover:opacity-80">FAQ</a></li>
            <li><a href="#sources" className="underline hover:opacity-80">📚 Sources (Selected)</a></li>
          </ul>
        </nav>

        {/* TL;DR */}
        <section id="tldr" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Short Answer (TL;DR)</h2>
          <p className="mb-4">
            Safe feeding in daycare and boarding is not about one perfect bowl—it is about a <strong>system</strong> that covers intake data, portioning in grams, sanitation, allergy controls, med windows, and post-meal rest. The big wins: <strong>measured meals</strong>, <strong>isolated prep surfaces</strong>, <strong>clear labels</strong>, <strong>staff ratios during meal windows</strong>, and <strong>structured quiet blocks</strong> after feeding. Document everything. If a task is not written, timed, and audited, it will drift.
          </p>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Operator tip:</strong> Put feeding under one accountable owner per shift. When everybody owns it, nobody owns it.
          </div>
        </section>

        {/* WHY FEEDING SYSTEMS MATTER */}
        <section id="why-it-matters" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Why Feeding Systems Matter</h2>
          <p className="mb-3">
            For most facilities, meal windows are where <strong>avoidable mistakes</strong> happen: wrong dog, wrong amount, missed med, toy left in the room, or a too-fast transition back to high-arousal play. Each is solvable with design: the right <strong>paperwork</strong>, <strong>tools</strong>, <strong>room layout</strong>, and <strong>staff choreography</strong>. You are not just feeding dogs— you are running a micro-supply chain under time pressure.
          </p>
          <p className="mb-0">
            Systems thinking helps: <em>policy → training → environment → audit</em>. Write the rules, teach them, build rooms that enforce them, then verify with logs.
          </p>
        </section>

        {/* INTAKE */}
        <section id="intake" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Intake &amp; Documentation: Getting the Data Right</h2>
          <p className="mb-3">
            Your feeding plan is only as accurate as the information you collect. The goal is a single source of truth that any staffer can follow on a busy day without guessing.
          </p>
          <h3 className="text-lg font-semibold mt-2 mb-1">Must-Have Intake Questions</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Food brand and formula; <strong>measured grams</strong> per meal (not cups).</li>
            <li>Number of daily meals; exact time windows; treat policy; food-motivated triggers.</li>
            <li>Allergies (ingredient-level), intolerances, and reaction history.</li>
            <li>Medication list tied to meals (drug, dose, route, timing, with/without food notes).</li>
            <li>Raw or home-prepared diets (prep instructions, storage temp requirements).</li>
            <li>Feeding behavior: resource guarding, speed, bowl style, raised bowl instructions if clinically advised.</li>
          </ul>
          <h3 className="text-lg font-semibold mt-2 mb-1">Labels &amp; Links</h3>
          <ul className="list-disc pl-5 space-y-1 mb-0">
            <li>Each container labeled with dog name, business ID/room, grams, frequency, and allergy icons.</li>
            <li>Digital record links meals to the reservation: versioned waiver, meds, and vet contact.</li>
          </ul>
        </section>

        {/* PORTIONING */}
        <section id="portioning" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Portioning: Grams, Tools, &amp; Labels</h2>
          <p className="mb-3">
            Cups are inconsistent; different kibbles have different densities. A gram is a gram. The fastest way to reduce GI upset and weight drift is to standardize on <strong>grams</strong> with calibrated scales.
          </p>
          <h3 className="text-lg font-semibold mt-2 mb-1">Tools</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Digital scales (calibrated monthly); spare batteries staged.</li>
            <li>Color-coded scoops for allergy control (e.g., blue non-allergen, red raw-only).</li>
            <li>Prep mats labeled by diet class: <strong>standard</strong>, <strong>allergen-controlled</strong>, <strong>raw</strong>, <strong>rx</strong>.</li>
            <li>Label printer and waterproof labels; clearly readable handwriting is an acceptable backup.</li>
          </ul>
          <h3 className="text-lg font-semibold mt-2 mb-1">Label Content</h3>
          <ul className="list-disc pl-5 space-y-1 mb-0">
            <li>Dog name; room or kennel; grams per meal; number of meals.</li>
            <li>Meds box: drug, dose, time, with/without food; staff initial/time field.</li>
            <li>Allergy icons (fish, poultry, beef, grain, dairy) and bold text line for severe allergies.</li>
          </ul>
        </section>

        {/* SCHEDULING */}
        <section id="scheduling" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Scheduling &amp; Floor Flow</h2>
          <p className="mb-3">
            Great kitchens fail when the floor flow fights them. Feeding is a choreography problem: who is staging bowls, who is delivering, who is logging, and who is guarding the med window from interruptions.
          </p>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>Posted meal windows:</strong> breakfast, mid-day (if applicable), dinner.</li>
            <li><strong>Roles:</strong> prep lead, runner, logger, meds checker; floaters cover doors and phone.</li>
            <li><strong>Quiet blocks:</strong> schedule 20–60 minutes of low-arousal time after meals before group play resumes, adjusted for age and health.</li>
            <li><strong>Door discipline:</strong> no in/out chaos during feed delivery; meter entries to avoid doorway scrums.</li>
          </ul>
          <p className="mb-0">
            If meal windows feel chaotic, the group size is too high, the roles are unclear, or the room design needs a traffic fix.
          </p>
        </section>

        {/* SPECIAL DIETS */}
        <section id="special-diets" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Special Diets (Allergies, Raw, Prescription)</h2>
          <p className="mb-3">
            Special diets are where reputations are made. Owners send their dogs to you because they trust your attention to detail. Create a lane for each diet class, then never let lanes cross.
          </p>
          <h3 className="text-lg font-semibold mt-2 mb-1">Allergy &amp; Intolerance Control</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Ingredient-level recording; do not accept vague &quot;allergic to dog food&quot; notes without follow-up.</li>
            <li>Dedicated scoops and prep mats; bowls washed and sanitized separately when feasible.</li>
            <li>Prominent allergy icon on kennel card and kitchen label; add a bright tape tag to the container.</li>
          </ul>
          <h3 className="text-lg font-semibold mt-2 mb-1">Raw Diets</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Separate refrigeration/freezer and sealed bins; clearly marked raw-only area.</li>
            <li>Dedicated tools; sanitize surfaces immediately after use with products effective against relevant pathogens and follow contact times.</li>
            <li>Staff glove protocol; waste disposal per local regulations.</li>
            <li>Disclosure in service agreement about added handling risks and owner responsibilities.</li>
          </ul>
          <h3 className="text-lg font-semibold mt-2 mb-1">Prescription &amp; Home-Prepared Diets</h3>
          <ul className="list-disc pl-5 space-y-1 mb-0">
            <li>Keep original labels; follow vet instructions verbatim; note warming requirements.</li>
            <li>Check portion changes approved by owner and vet; do not freelance recipe tweaks.</li>
            <li>For home-prepared foods, confirm storage, reheat methods, and containers that tolerate cleaning temps.</li>
          </ul>
        </section>

        {/* MEDS */}
        <section id="meds" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Medications With Food: Zero-Miss Workflows</h2>
          <p className="mb-3">
            Medication errors cluster during meal windows. Your goal is double-checks and time stamps. Build redundancy into the process so one distracted moment does not become a missed dose.
          </p>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>Two-person check:</strong> one preps, one verifies drug, dose, dog, time.</li>
            <li><strong>Label alignment:</strong> med chart matches the bowl label; initials and time recorded immediately.</li>
            <li><strong>With/without food:</strong> observe labels strictly; some meds require food to reduce GI upset; others may be separated.</li>
            <li><strong>Pill pockets:</strong> log acceptance/refusal; note alternative methods if needed (e.g., crushed per vet approval).</li>
          </ul>
          <p className="mb-0">
            Keep a &quot;med exceptions&quot; list for dogs who routinely refuse pills; owners appreciate honest patterns.
          </p>
        </section>

        {/* SANITATION */}
        <section id="sanitation" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Sanitation &amp; Cross-Contamination Controls</h2>
          <p className="mb-3">
            Sanitation is more than a clean smell—it is dwell times, tool separation, and documented compliance. Many outbreaks trace back to slow drift in cleaning discipline.
          </p>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Dishwashing: dedicated basin or commercial washer; validated temps; air-dry racks.</li>
            <li>Surface disinfectants: choose products with proven efficacy; follow contact times; keep a visible timer in the prep area.</li>
            <li>Color-coding: raw vs. standard vs. allergy tools and mats.</li>
            <li>Hand hygiene: sinks and sanitizer staged at exits; gloves for raw prep with proper change protocol.</li>
          </ul>
          <p className="mb-0">
            Document daily—<em>if it is not time-stamped, it did not happen</em>.
          </p>
        </section>

        {/* RISK MANAGEMENT */}
        <section id="risk" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Risk Management: Choking, Bloat, Aspiration</h2>
          <p className="mb-3">
            Meal windows carry medical risks that can be engineered down. The major ones: <strong>choking</strong> on hard chews or fast-gulped kibble, <strong>gastric dilatation-volvulus (bloat)</strong> in predisposed dogs, and <strong>aspiration</strong> in dogs with regurgitation history or laryngeal issues.
          </p>
          <h3 className="text-lg font-semibold mt-2 mb-1">Choking Prevention</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>No hard chews in group settings; use only under 1:1 supervision and document.</li>
            <li>Slow-feeder bowls for fast eaters; consider pre-soaking kibble for dogs with dental issues.</li>
            <li>Feed separately any dog that guards or bolts food.</li>
          </ul>
          <h3 className="text-lg font-semibold mt-2 mb-1">Bloat Risk Reduction</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Split large meals; schedule a quiet block 30–60 minutes post-meal.</li>
            <li>Flag deep-chested breeds and dogs with bloat history on the whiteboard.</li>
            <li>Never move directly from meals to high-arousal play; avoid chaotic fetch after eating.</li>
          </ul>
          <h3 className="text-lg font-semibold mt-2 mb-1">Aspiration Awareness</h3>
          <ul className="list-disc pl-5 space-y-1 mb-0">
            <li>Ask owners about regurgitation history and any swallowing issues.</li>
            <li>Elevated bowls only if vet-advised; otherwise feed at floor level to avoid unnecessary changes.</li>
            <li>Observe calmly during meals; log any cough, gag, or regurgitation episodes.</li>
          </ul>
        </section>

        {/* BOARDING VS DAYCARE */}
        <section id="boarding-vs-daycare" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Boarding vs. Daycare: Practical Differences</h2>
          <p className="mb-3">
            Daycare typically involves fewer meals (often none), while boarding requires a full diet workflow. The risks and documentation load scale accordingly.
          </p>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>Daycare:</strong> snack/treat policy, GI sensitivity tracking, and strict &quot;no food in group&quot; rule.</li>
            <li><strong>Boarding:</strong> full meal plan with prep, delivery, med windows, and quiet blocks.</li>
            <li><strong>Transitions:</strong> if a daycare dog is fed (e.g., puppy lunch), treat like boarding for that window: separate feeding, logging, quiet period.</li>
          </ul>
          <p className="mb-0">
            Keep policies consistent so staff do not have to remember different rules under pressure.
          </p>
        </section>

        {/* TRAINING */}
        <section id="training" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Staff Training &amp; Audits</h2>
          <p className="mb-3">
            Feeding safety is teachable. Certify staff on observable skills; do not assume prior experience equals proficiency in <em>your</em> system.
          </p>
          <h3 className="text-lg font-semibold mt-2 mb-1">Competencies to Sign Off</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Intake data comprehension and label creation.</li>
            <li>Scale use and portioning in grams; spot-checking calibration.</li>
            <li>Meds double-check, initials/time logging, exception handling.</li>
            <li>Sanitation steps and contact times; raw vs. standard lanes.</li>
            <li>Post-meal quiet block enforcement and incident logging.</li>
          </ul>
          <h3 className="text-lg font-semibold mt-2 mb-1">Audits &amp; Metrics</h3>
          <ul className="list-disc pl-5 space-y-1 mb-0">
            <li>Daily random bowl audit (grams vs. label).</li>
            <li>Weekly sanitation spot test (contact-time timer use, tool separation).</li>
            <li>Exception report: missed initials, med delays, regurgitation/bloat flags.</li>
          </ul>
        </section>

        {/* OWNER COMMS */}
        <section id="owner-comms" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Owner Communication: Trust Is in the Details</h2>
          <p className="mb-3">
            Clear updates prevent worried calls and build loyalty. If a dog skips a meal or vomits, owners want calm facts and a plan, not silence.
          </p>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Send a simple daily note: appetite, stool quality, meds given on time.</li>
            <li>For special diets, include a quick photo of labeled container on intake.</li>
            <li>Any GI upset gets a timestamped note with what you did and what you will monitor.</li>
          </ul>
          <p className="mb-0">
            Owners perceive professionalism through your documentation— share it wisely.
          </p>
        </section>

        {/* SOPs */}
        <section id="sops" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Printable SOPs &amp; Checklists (Copy/Paste)</h2>

          <h3 className="text-lg font-semibold mt-2 mb-1">Kitchen Prep SOP</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Wash hands; set timer for disinfectant contact when cleaning surfaces.</li>
            <li>Calibrate/tare scales; stage color-coded tools by lane (standard, allergy, raw, rx).</li>
            <li>Print/verify labels with dog name, grams, frequency, meds box, allergy icons.</li>
            <li>Prep bowls one dog at a time; place lids on prepped bowls awaiting delivery.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Delivery &amp; Logging SOP</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Runner delivers; logger confirms dog–bowl match; handler meters room entries.</li>
            <li>Med windows: two-person check; initials and time recorded immediately.</li>
            <li>Note refusals, partial meals, or vomiting with timestamps; notify lead.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Post-Meal Quiet Block SOP</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>20–60 minutes of low arousal depending on dog and meal size.</li>
            <li>Lights softened; white noise on; play suspended or redirected to sniff walks.</li>
            <li>Deep-chested breed list posted; bloat watch engaged for those dogs.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Sanitation SOP</h3>
          <ul className="list-disc pl-5 space-y-1 mb-0">
            <li>Dishwasher cycle or basin wash per label; air-dry racks only.</li>
            <li>Disinfect prep surfaces; observe full contact times; raw lane last, then full wash.</li>
            <li>Glove change protocol between lanes; hand wash after glove removal.</li>
          </ul>

          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm mt-3">
            <strong>Petunia tip:</strong> Convert these SOPs into shared checklists in Petunia so new staff run the same day as your best shift lead.
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">Frequently Asked Questions</h2>

          <p className="mb-3">
            <strong>Should we accept raw diets?</strong><br />
            Many facilities do with lane separation, dedicated tools, and rigorous sanitation. If you choose not to, state the policy clearly. If you do, document the handling steps and owner responsibilities explicitly.
          </p>

          <p className="mb-3">
            <strong>Do raised bowls help or hurt?</strong><br />
            Case dependent. Use only with veterinary guidance for dogs with specific orthopedic or swallowing issues. As a default, feed at floor level.
          </p>

          <p className="mb-3">
            <strong>How do we handle repeat refusals?</strong><br />
            Note pattern and call the owner. Offer warmed food or smaller portions; verify grams. For medical or anxiety-related refusal, develop a plan with the owner and vet.
          </p>

          <p className="mb-0">
            <strong>What about treats?</strong><br />
            Treats count as calories and allergy exposure. Log brand/ingredients; cap quantity; never share between dogs; follow owner-approved lists only.
          </p>
        </section>

        {/* SOURCES */}
        <section id="sources" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">📚 Sources (Selected)</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            <li>
              WSAVA Global Nutrition Guidelines (portioning by grams, body condition scoring, client communication).{' '}
              <a
                href="https://wsava.org/global-guidelines/global-nutrition-guidelines/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://wsava.org/global-guidelines/global-nutrition-guidelines/
              </a>
            </li>
            <li>
              AVMA. Canine infectious disease and sanitation resources (general).{' '}
              <a
                href="https://www.avma.org/resources-tools"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.avma.org/resources-tools
              </a>
            </li>
            <li>
              OSHA Small Business Safety (food-handling and sanitation frameworks, contact times, PPE).{' '}
              <a
                href="https://www.osha.gov/smallbusiness"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.osha.gov/smallbusiness
              </a>
            </li>
            <li>
              ACVS/ACVIM client education hubs (bloat, aspiration risk considerations around meals).{' '}
              <a
                href="https://www.acvs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.acvs.org
              </a>{' '}
              |{' '}
              <a
                href="https://www.acvim.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.acvim.org
              </a>
            </li>
          </ul>
          <p className="text-xs text-gray-600 mt-4">
            Educational content only. Align feeding, sanitation, and medication protocols with your veterinarian and applicable local regulations. Train staff and audit routinely.
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
