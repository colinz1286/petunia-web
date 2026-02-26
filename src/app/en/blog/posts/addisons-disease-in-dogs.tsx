'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function AddisonsDiseaseDogs() {
  const locale = useLocale();

  const title =
    'Addison’s Disease in Dogs: What Owners Need to Know About Diagnosis and Daily Management';
  const date = 'December 28, 2025';
  const categories = ['owner'] as const;

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
            <li>
              <a href="#tldr" className="underline hover:opacity-80">
                TL;DR
              </a>
            </li>
            <li>
              <a href="#what-is" className="underline hover:opacity-80">
                What Addison’s Is
              </a>
            </li>
            <li>
              <a href="#why-it-gets-missed" className="underline hover:opacity-80">
                Why It Gets Missed
              </a>
            </li>
            <li>
              <a href="#causes" className="underline hover:opacity-80">
                Causes &amp; Types
              </a>
            </li>
            <li>
              <a href="#breeds" className="underline hover:opacity-80">
                Dogs at Higher Risk
              </a>
            </li>
            <li>
              <a href="#symptoms" className="underline hover:opacity-80">
                Symptoms &amp; Crisis Signs
              </a>
            </li>
            <li>
              <a href="#quick-triage" className="underline hover:opacity-80">
                Quick Triage
              </a>
            </li>
            <li>
              <a href="#diagnosis" className="underline hover:opacity-80">
                Diagnosis &amp; Testing
              </a>
            </li>
            <li>
              <a href="#treatment" className="underline hover:opacity-80">
                Treatment &amp; Medications
              </a>
            </li>
            <li>
              <a href="#daily-care" className="underline hover:opacity-80">
                Daily Management
              </a>
            </li>
            <li>
              <a href="#stress-dosing" className="underline hover:opacity-80">
                Stress Dosing
              </a>
            </li>
            <li>
              <a href="#monitoring" className="underline hover:opacity-80">
                Monitoring &amp; Rechecks
              </a>
            </li>
            <li>
              <a href="#lifestyle" className="underline hover:opacity-80">
                Lifestyle, Exercise &amp; Diet
              </a>
            </li>
            <li>
              <a href="#travel" className="underline hover:opacity-80">
                Travel &amp; Boarding
              </a>
            </li>
            <li>
              <a href="#sops" className="underline hover:opacity-80">
                Home SOPs &amp; Checklists
              </a>
            </li>
            <li>
              <a href="#faq" className="underline hover:opacity-80">
                FAQ
              </a>
            </li>
            <li>
              <a href="#sources" className="underline hover:opacity-80">
                📚 Sources (Selected)
              </a>
            </li>
          </ul>
        </nav>

        {/* TLDR */}
        <section id="tldr" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">TL;DR (What Matters Most)</h2>

          <p className="mb-4">
            <strong>Addison’s disease</strong> (hypoadrenocorticism) happens when the adrenal glands do not make enough cortisol
            and (in many cases) aldosterone. It can look like vague, on-and-off illness for weeks: intermittent vomiting or diarrhea,
            poor appetite, low energy, and weight loss. Some dogs present in a true emergency called an <strong>Addisonian crisis</strong>,
            where dehydration, low blood pressure, and dangerous electrolyte shifts can cause collapse and life-threatening heart rhythm problems.
            Diagnosis is confirmed with an <strong>ACTH stimulation test</strong>. The good news: with <strong>lifelong hormone replacement</strong>
            and routine monitoring, most dogs live normal, happy lives.
          </p>

          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <p className="mb-2">
              <strong>The owner mental model:</strong> Addison’s is a &ldquo;systems&rdquo; disease. Most success comes from:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Exact medication timing (and refills before you run low)</li>
              <li>Clear stress-dosing rules for illness and travel</li>
              <li>A consistent monitoring schedule for electrolytes</li>
              <li>Fast action when vomiting plus lethargy shows up (do not wait it out)</li>
            </ul>
            <p className="mt-3 mb-0">
              <strong>Petunia tip:</strong> Turn this article into your Addison’s care SOP. Store dosing times, milligrams/volume, refill dates,
              recheck labs, and your vet’s contacts in Petunia so every caregiver follows the same playbook.
            </p>
          </div>
        </section>

        {/* WHAT IS */}
        <section id="what-is" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">What Addison’s Disease Is</h2>

          <p className="mb-3">
            Addison’s disease is an endocrine disorder where the adrenal cortex fails to produce adequate <strong>glucocorticoids</strong>
            (primarily cortisol) and, in the typical or &ldquo;primary&rdquo; form, insufficient <strong>mineralocorticoids</strong> (aldosterone).
            Cortisol affects metabolism, blood sugar stability, immune modulation, and the body’s ability to cope with stress. Aldosterone regulates sodium
            and potassium balance and helps maintain blood volume and blood pressure.
          </p>

          <p className="mb-3">
            When these hormones are deficient, the body can drift into dehydration, low blood pressure, nausea, weakness, and electrolyte abnormalities.
            In severe cases, the heart becomes vulnerable to dangerous rhythm disturbances due to elevated potassium.
          </p>

          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <p className="mb-2">
              <strong>Why the nickname &ldquo;the great pretender&rdquo; is accurate:</strong>
            </p>
            <ul className="list-disc pl-5 space-y-1 mb-0">
              <li>Early signs mimic common GI bugs, food intolerance, pancreatitis, kidney issues, stress colitis, and even anxiety</li>
              <li>Many dogs look normal between episodes, which delays testing</li>
              <li>Some dogs have normal electrolytes early (atypical Addison’s), which removes a common lab clue</li>
            </ul>
          </div>
        </section>

        {/* WHY MISSED */}
        <section id="why-it-gets-missed" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Why It Gets Missed (and How to Spot It Sooner)</h2>

          <p className="mb-3">
            Early Addison’s often looks like &ldquo;off days&rdquo;: a skipped meal, soft stool, mild vomiting, or a quiet afternoon after normal activity.
            Owners understandably blame treats, weather, stress, travel, or a minor stomach bug. Veterinarians may see a normal exam on a good day. Over time,
            a pattern emerges: intermittent <strong>vomiting/diarrhea</strong>, <strong>lethargy</strong>, <strong>weight loss</strong>, shakiness, and reduced endurance.
            Some dogs also show increased <strong>drinking/urination</strong>.
          </p>

          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm mb-3">
            <p className="mb-2">
              <strong>Owner shortcut for earlier detection:</strong> treat recurrence as information.
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>If GI upset keeps returning (especially with fatigue), ask your vet whether Addison’s should be ruled out</li>
              <li>Bring a simple timeline: dates, symptoms, appetite, stool, energy, triggers (stress, heat, boarding, long hikes)</li>
              <li>Record videos of weakness, tremors, or abnormal behavior (when safe to do so)</li>
            </ul>
            <p className="mt-3 mb-0">
              Addison’s is not diagnosed by &ldquo;vibes&rdquo; or breed alone. But patterns can justify earlier testing and prevent a crisis.
            </p>
          </div>

          <p className="mb-0">
            In classic primary Addison’s, routine bloodwork may show <strong>low sodium</strong> and <strong>high potassium</strong> (a low Na:K ratio),
            but that clue is not always present. The practical next step is discussing whether screening cortisol or a full <strong>ACTH stimulation test</strong> is appropriate.
          </p>
        </section>

        {/* CAUSES */}
        <section id="causes" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Causes &amp; Types (Primary vs Secondary, Typical vs Atypical)</h2>

          <p className="mb-3">
            Most canine Addison’s cases are <strong>immune-mediated</strong>, meaning the immune system damages the adrenal cortex over time.
            Less commonly, Addison’s is <strong>secondary</strong> to pituitary disease (insufficient ACTH stimulation), or occurs due to medication-related effects
            on the adrenal axis in rare situations. Your veterinarian determines the type using history, lab patterns, and confirmatory testing.
          </p>

          <h3 className="text-lg font-semibold mt-2 mb-1">Primary Addison’s</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>
              <strong>Typical (combined) form:</strong> cortisol and aldosterone deficiency. Electrolyte disturbances are common (low sodium, high potassium),
              and dehydration/low blood pressure can be pronounced during episodes.
            </li>
            <li>
              <strong>Atypical form:</strong> cortisol deficiency with relatively normal electrolytes early on. This version is easier to miss because a common lab clue is absent.
              Some atypical dogs later develop mineralocorticoid deficiency, which is why monitoring matters even if electrolytes start normal.
            </li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Secondary Addison’s</h3>
          <ul className="list-disc pl-5 space-y-1 mb-0">
            <li>Pituitary failure to stimulate the adrenal glands (low ACTH). Electrolytes may remain normal.</li>
            <li>
              Rarely, abrupt withdrawal after long-term high-dose steroids can cause cortisol deficiency signs. This should always be managed with veterinary guidance.
            </li>
          </ul>
        </section>

        {/* BREEDS */}
        <section id="breeds" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Dogs at Higher Risk (Breed and Life Stage Patterns)</h2>

          <p className="mb-3">
            Addison’s can occur in any dog, but increased risk has been reported in several breeds and breed families. This does not mean a dog will develop Addison’s,
            and it does not replace testing. It simply raises clinical suspicion when symptoms fit.
          </p>

          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm mb-3">
            <p className="mb-2">
              <strong>Breeds with reported higher risk include:</strong>
            </p>
            <ul className="list-disc pl-5 space-y-1 mb-0">
              <li>Standard Poodles</li>
              <li>Portuguese Water Dogs</li>
              <li>Bearded Collies</li>
              <li>Nova Scotia Duck Tolling Retrievers</li>
              <li>West Highland White Terriers</li>
              <li>Other breeds and mixed-breed lines may also be affected</li>
            </ul>
          </div>

          <p className="mb-0">
            Addison’s is often diagnosed in young-to-middle-aged dogs, and females may be somewhat overrepresented in some studies, but any age and sex can be affected.
            The right takeaway is not fear. It is earlier pattern recognition and earlier testing when the symptom picture fits.
          </p>
        </section>

        {/* SYMPTOMS */}
        <section id="symptoms" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Symptoms &amp; Addisonian Crisis (What Owners Actually See)</h2>

          <p className="mb-3">
            Owners most often report a dog who cycles between normal days and sudden &ldquo;not themselves&rdquo; days. GI signs are common, but Addison’s can also show up as
            weakness, shaking, and unusually low stamina. Some dogs become extremely quiet, seek cool floors, or seem unwilling to stand or walk during bad episodes.
          </p>

          <h3 className="text-lg font-semibold mt-2 mb-1">Typical Ongoing Signs (Often Intermittent)</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Intermittent vomiting or diarrhea (sometimes with mucus or blood)</li>
            <li>Decreased appetite, picky eating, or refusing meals during episodes</li>
            <li>Weight loss over weeks</li>
            <li>Low energy, exercise intolerance, &ldquo;shuts down&rdquo; sooner than normal</li>
            <li>Tremors, shakiness, generalized weakness</li>
            <li>Increased drinking/urination in some dogs</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Addisonian Crisis (Emergency)</h3>
          <ul className="list-disc pl-5 space-y-1 mb-0">
            <li>Collapse or near-collapse</li>
            <li>Pale gums, profound weakness, low body temperature</li>
            <li>Severe vomiting/diarrhea with dehydration</li>
            <li>Low blood pressure (shock); some dogs show a slow heart rate despite being critically ill</li>
          </ul>
        </section>

        {/* QUICK TRIAGE */}
        <section id="quick-triage" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Quick Triage: When to Wait, When to Call, When to Go Now</h2>

          <p className="mb-4">
            This section is not meant to replace a veterinarian. It exists because Addison’s can look mild until it is not, and owners need practical thresholds.
          </p>

          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm mb-4">
            <p className="mb-2">
              <strong>Go to an emergency clinic now if your dog has:</strong>
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Collapse, cannot stand, or severe weakness</li>
              <li>Repeated vomiting or diarrhea with lethargy and dehydration</li>
              <li>Pale gums, very slow movement, or signs of shock</li>
              <li>Known Addison’s plus vomiting, refusal to eat, or abnormal weakness (do not wait)</li>
            </ul>
            <p className="mt-3 mb-0">
              If you are unsure, call your veterinarian or ER and describe what you see. Phone triage is often enough to prevent a dangerous delay.
            </p>
          </div>

          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <p className="mb-2">
              <strong>If symptoms are mild but recurring, do this next:</strong>
            </p>
            <ul className="list-disc pl-5 space-y-1 mb-0">
              <li>Start a simple log (dates, vomiting/diarrhea, appetite, energy, triggers like stress or travel)</li>
              <li>Bring that log to your vet and ask whether Addison’s belongs on the rule-out list</li>
              <li>Ask what screening step is appropriate for your dog (baseline cortisol screening vs ACTH stimulation test)</li>
            </ul>
          </div>
        </section>

        {/* DIAGNOSIS */}
        <section id="diagnosis" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Diagnosis &amp; Testing (How Vets Confirm It)</h2>

          <p className="mb-3">
            Veterinarians start with your history (this is where your timeline and videos help), then evaluate hydration status, heart rate, temperature, and abdominal comfort.
            They usually run baseline lab work to look for patterns that fit Addison’s, as well as patterns that suggest other causes (kidney disease, pancreatitis, GI disease, infection).
          </p>

          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm mb-3">
            <p className="mb-2">
              <strong>Lab clues that can support suspicion (not proof):</strong>
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Low sodium and high potassium (especially in typical primary Addison’s)</li>
              <li>Dehydration and azotemia patterns that can mimic kidney disease</li>
              <li>Low blood sugar, mild anemia, or other supportive patterns depending on the case</li>
              <li>Normal electrolytes do not rule it out (atypical or secondary cases)</li>
            </ul>
          </div>

          <h3 className="text-lg font-semibold mt-2 mb-1">The ACTH Stimulation Test (Gold Standard)</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Measure baseline cortisol</li>
            <li>Give synthetic ACTH</li>
            <li>Measure cortisol again after the set interval (commonly around 60 minutes)</li>
          </ul>

          <p className="mb-3">
            In healthy dogs, cortisol increases after ACTH. In Addison’s, cortisol fails to rise. Some clinicians use a baseline cortisol test as a screening step
            to help rule Addison’s out when cortisol is clearly adequate. If screening results are low or symptoms strongly fit, a full ACTH stimulation test is typically recommended.
          </p>

          <p className="mb-0">
            In crisis cases, stabilization begins immediately with IV fluids and supportive care. Veterinarians may adapt emergency medication choices to avoid confounding test results,
            then confirm diagnosis once the dog is stable.
          </p>
        </section>

        {/* TREATMENT */}
        <section id="treatment" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Treatment &amp; Medications (What Replacement Therapy Usually Includes)</h2>

          <p className="mb-3">
            Addison’s is treated by replacing missing hormones and supporting the dog through periods of stress. Most dogs do extremely well once doses are dialed in.
            Early in treatment, dose adjustments are common. Long-term, many dogs stabilize and need only routine rechecks plus stress-dosing during illness or major stress.
          </p>

          <h3 className="text-lg font-semibold mt-2 mb-1">Glucocorticoids (Cortisol Replacement)</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>
              <strong>Prednisone</strong> (or prednisolone) is commonly used. The goal is the <strong>lowest effective daily dose</strong> to reduce side effects.
            </li>
            <li>
              Many dogs take a small daily dose as baseline, then temporarily increase it for stress (see stress dosing below).
            </li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Mineralocorticoids (Aldosterone Replacement)</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>
              <strong>DOCP</strong> (desoxycorticosterone pivalate) is a long-acting injection often given about every 28–30 days, but the schedule is individualized.
              Electrolyte checks guide dose and interval.
            </li>
            <li>
              <strong>Fludrocortisone</strong> is an oral alternative with mineralocorticoid and some glucocorticoid activity. Electrolytes and clinical signs guide adjustments.
            </li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Crisis Management (Emergency Care)</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>IV fluids to correct dehydration and shock</li>
            <li>Electrolyte management (high potassium can cause life-threatening arrhythmias)</li>
            <li>Antiemetics and GI support as needed</li>
            <li>Appropriate steroid support selected by the treating veterinarian</li>
          </ul>

          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <p className="mb-2">
              <strong>Owner expectation setting:</strong> the first 1–3 months are often the &ldquo;dialing in&rdquo; phase.
            </p>
            <ul className="list-disc pl-5 space-y-1 mb-0">
              <li>Electrolytes may be checked more frequently after starting or adjusting mineralocorticoids</li>
              <li>You and your vet fine-tune based on labs and how your dog feels</li>
              <li>Once stable, many dogs go long stretches with predictable routines</li>
            </ul>
          </div>
        </section>

        {/* DAILY CARE */}
        <section id="daily-care" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Daily Management: Building a Routine That Actually Works</h2>

          <p className="mb-3">
            The most successful Addison’s households treat care like a checklist: meds at the same time, simple logs, and clear rules for what triggers a call.
            Once you have a rhythm, daily care is usually straightforward.
          </p>

          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>
              <strong>Medication clock:</strong> prednisone at the same time daily; mineralocorticoid dosing exactly as scheduled.
            </li>
            <li>
              <strong>Food routine:</strong> consistent diet and meal timing reduce GI variables that can cloud symptom interpretation.
            </li>
            <li>
              <strong>Water access:</strong> normal, free access; note sudden increases or decreases and discuss with your vet.
            </li>
            <li>
              <strong>Quick daily check:</strong> appetite, stool, energy, and willingness to walk or play.
            </li>
          </ul>

          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <p className="mb-2">
              <strong>Signs you should report sooner (not months later):</strong>
            </p>
            <ul className="list-disc pl-5 space-y-1 mb-0">
              <li>Vomiting or diarrhea that recurs, especially with fatigue</li>
              <li>Reduced appetite that lasts beyond a normal &ldquo;off meal&rdquo;</li>
              <li>Weakness, trembling, or unusually low endurance</li>
              <li>Marked thirst/urination changes, panting changes, or restlessness (could indicate over- or under-replacement)</li>
            </ul>
          </div>
        </section>

        {/* STRESS DOSING */}
        <section id="stress-dosing" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Stress Dosing: What It Is and How to Use It Safely</h2>

          <p className="mb-3">
            Healthy dogs naturally release more cortisol during stress: illness, surgery, travel, boarding, intense exercise, or major routine changes.
            Dogs with Addison’s cannot reliably do that without help. Stress dosing is a temporary increase in glucocorticoids to mimic the normal stress response.
          </p>

          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm mb-3">
            <p className="mb-2">
              <strong>Common stress-dosing triggers:</strong>
            </p>
            <ul className="list-disc pl-5 space-y-1 mb-0">
              <li>Travel day or long road trip</li>
              <li>Boarding intake day (new environment is stress, even for confident dogs)</li>
              <li>Acute illness (vomiting, diarrhea, fever, painful injury)</li>
              <li>Procedures, surgery, or anesthesia (your vet will guide)</li>
              <li>Unusually strenuous activity (big hike after a sedentary week)</li>
            </ul>
          </div>

          <p className="mb-3">
            Your veterinarian must set your specific plan, but many strategies involve temporarily increasing the daily prednisone dose on stressful days and returning to baseline
            once the stressor resolves (often within 24–72 hours). The goal is to cover the stress window without long-term over-medication.
          </p>

          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <p className="mb-0">
              <strong>Important:</strong> stress dosing does not replace emergency care. If your dog has vomiting plus lethargy, weakness, collapse, or pale gums,
              treat it as urgent and call your vet or ER immediately.
            </p>
          </div>
        </section>

        {/* MONITORING */}
        <section id="monitoring" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Monitoring &amp; Rechecks: How Vets Keep Treatment Dialed In</h2>

          <p className="mb-3">
            Monitoring is how your veterinarian confirms the mineralocorticoid plan is protecting electrolytes without overshooting. The exact schedule varies, but the logic is consistent:
            check more often early, then shift to routine maintenance once stable.
          </p>

          <h3 className="text-lg font-semibold mt-2 mb-1">Common Monitoring Rhythm (General Pattern)</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>
              After starting or adjusting DOCP: electrolyte checks at intervals recommended by your vet (often earlier in the cycle and near the next dose window)
            </li>
            <li>
              After stabilization: rechecks commonly every 3–6 months, plus extra checks if symptoms drift or before major travel/procedures
            </li>
            <li>
              For fludrocortisone: electrolytes guide dose adjustments; some dogs need periodic small changes over time
            </li>
          </ul>

          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <p className="mb-2">
              <strong>Owner pro move:</strong> keep lab results with a note about how your dog felt that week.
            </p>
            <ul className="list-disc pl-5 space-y-1 mb-0">
              <li>Normal appetite? Normal stool?</li>
              <li>Energy stable? Any tremors or weakness?</li>
              <li>Any travel, boarding, illness, or major stress that month?</li>
            </ul>
          </div>
        </section>

        {/* LIFESTYLE */}
        <section id="lifestyle" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Lifestyle, Exercise &amp; Diet (Most Dogs Can Live Normally)</h2>

          <p className="mb-3">
            Most dogs with well-managed Addison’s can do normal dog life: walks, play, hikes, travel, and even sports with sensible pacing.
            The key is avoiding extreme unpredictability without a plan. Treat big schedule changes as a predictable stressor and follow your stress-dosing guidance.
          </p>

          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>
              <strong>Exercise:</strong> build gradually after diagnosis; avoid sudden &ldquo;weekend warrior&rdquo; intensity spikes.
            </li>
            <li>
              <strong>Diet:</strong> a balanced, complete diet appropriate for life stage and body condition; keep diet changes structured (not random) if GI signs exist.
            </li>
            <li>
              <strong>Hydration &amp; heat:</strong> plan shade, water, and breaks in warm weather; watch for post-activity GI upset or fatigue.
            </li>
          </ul>

          <p className="mb-0">
            If you feel like your dog becomes symptomatic after specific activities, bring that pattern to your veterinarian. Small plan changes can make a big difference.
          </p>
        </section>

        {/* TRAVEL */}
        <section id="travel" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Travel &amp; Boarding: Smooth Hand-Offs Prevent Problems</h2>

          <p className="mb-3">
            Trips and caregiver changes are predictable stressors. Your goal is not perfection. Your goal is a clean, repeatable handoff so nobody guesses under pressure.
          </p>

          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm mb-3">
            <p className="mb-2">
              <strong>What to hand to any caregiver (one page):</strong>
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Diagnosis: Addison’s disease (hypoadrenocorticism)</li>
              <li>Daily meds: names, dose, times, and how they are given (with food, etc.)</li>
              <li>Stress-dosing plan: what triggers it and exactly what to do</li>
              <li>Red flags: vomiting plus lethargy, weakness, collapse, pale gums (call you and call ER)</li>
              <li>Vet and ER contacts</li>
            </ul>
            <p className="mt-3 mb-0">
              Pack extra medication for delays. Keep meds in original containers when traveling.
            </p>
          </div>

          <p className="mb-0">
            Many families do a short &ldquo;test run&rdquo; with a sitter or facility before longer trips to make sure routines translate smoothly.
          </p>
        </section>

        {/* SOPs */}
        <section id="sops" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Home SOPs &amp; Checklists (Copy/Paste)</h2>

          <h3 className="text-lg font-semibold mt-2 mb-1">Daily Addison’s Care SOP</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Give daily glucocorticoid at the scheduled time (with food if that is your routine)</li>
            <li>Confirm normal appetite, stool, and energy</li>
            <li>Quick note if anything is off (vomiting, diarrhea, weakness, shakiness)</li>
            <li>Confirm upcoming mineralocorticoid date and any required electrolyte checks</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Stress-Dosing SOP (Use Your Vet’s Plan)</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Trigger examples: travel, boarding intake, acute illness, unusually hard activity, procedures</li>
            <li>Follow your veterinarian’s written stress-dosing instruction exactly</li>
            <li>Return to baseline when the stressor resolves (per your vet’s timeline)</li>
            <li>If vomiting plus lethargy appears, call your vet or ER (do not assume stress dosing alone is enough)</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Crisis SOP (Emergency)</h3>
          <ul className="list-disc pl-5 space-y-1 mb-0">
            <li>Signs: collapse, severe weakness, repeated vomiting/diarrhea, dehydration, pale gums</li>
            <li>Action: call ER and go immediately; bring medication list and diagnosis summary</li>
            <li>Note times: symptom onset, last meds, last meal, last normal behavior</li>
          </ul>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">Frequently Asked Questions</h2>

          <p className="mb-3">
            <strong>Can my dog live a normal lifespan with Addison’s?</strong>
            <br />
            In many cases, yes. Once stabilized and well managed, Addisonian dogs commonly enjoy excellent quality of life with normal activities.
          </p>

          <p className="mb-3">
            <strong>Will my dog need medications forever?</strong>
            <br />
            Yes. Addison’s reflects hormone deficiency. Lifelong replacement is typically required, with dose adjustments over time.
          </p>

          <p className="mb-3">
            <strong>What side effects should I watch for?</strong>
            <br />
            Too much glucocorticoid can cause increased thirst/urination, hunger, panting, and restlessness. Too little can look like low energy and GI upset.
            Electrolyte shifts can signal mineralocorticoid imbalance. Report persistent patterns to your vet promptly.
          </p>

          <p className="mb-3">
            <strong>Is atypical Addison’s less serious?</strong>
            <br />
            Not necessarily. Atypical cases can be harder to diagnose because early electrolytes may be normal. Some atypical dogs later develop mineralocorticoid deficiency,
            which is why monitoring matters even after diagnosis.
          </p>

          <p className="mb-3">
            <strong>How fast should I act if my dog vomits?</strong>
            <br />
            One isolated vomit can happen in any dog, but vomiting plus lethargy, weakness, repeated vomiting, or refusal to eat should be treated as urgent in Addison’s.
            If your dog is diagnosed, do not wait it out. Call your vet or ER.
          </p>

          <p className="mb-0">
            <strong>How often are rechecks after stabilization?</strong>
            <br />
            Many dogs settle into a routine schedule (often every few months), with extra checks if symptoms drift, medications change, or a major stressor occurs.
            Your veterinarian will tailor the plan to your dog.
          </p>
        </section>

        {/* SOURCES */}
        <section id="sources" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">📚 Sources (Selected)</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            <li>
              MSD/Merck Veterinary Manual. Addison’s Disease (Hypoadrenocorticism) in Dogs — owner &amp; professional articles.{' '}
              <a
                href="https://www.merckvetmanual.com/dog-owners/endocrine-system-of-dogs/addison-disease-hypoadrenocorticism-in-dogs"
                target="_blank"
                rel="noopener noreferrer"
              >
                Owner overview
              </a>{' '}
              |{' '}
              <a
                href="https://www.msdvetmanual.com/endocrine-system/the-adrenal-glands/hypoadrenocorticism-in-animals"
                target="_blank"
                rel="noopener noreferrer"
              >
                Professional reference
              </a>
            </li>
            <li>
              ACVIM (American College of Veterinary Internal Medicine). Clinician resources and specialty guidance.{' '}
              <a href="https://www.acvim.org" target="_blank" rel="noopener noreferrer">
                https://www.acvim.org
              </a>
            </li>
            <li>
              WSAVA Global Nutrition Guidelines (body condition scoring and feeding guidance).{' '}
              <a
                href="https://wsava.org/global-guidelines/global-nutrition-guidelines/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://wsava.org/global-guidelines/global-nutrition-guidelines/
              </a>
            </li>
            <li>
              AAHA (American Animal Hospital Association). General canine life-stage care and chronic disease resources.{' '}
              <a href="https://www.aaha.org" target="_blank" rel="noopener noreferrer">
                https://www.aaha.org
              </a>
            </li>
          </ul>

          <p className="text-xs text-gray-600 mt-4">
            Educational content only. Always consult your veterinarian for individualized diagnosis and treatment. Medication changes and stress-dosing strategies must be developed with your veterinary team.
          </p>
        </section>

        <Link href={`/${locale}/blog`} className="underline text-[#2c4a30] font-medium hover:opacity-80">
          ← Back to Blog
        </Link>
      </main>
    </>
  );
}
