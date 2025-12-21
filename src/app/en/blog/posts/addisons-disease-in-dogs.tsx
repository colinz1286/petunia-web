'use client';

import Head from 'next/head';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function AddisonsDiseaseDogs() {
  const locale = useLocale();

  const title =
    'Addison’s Disease in Dogs: What Owners Need to Know About Diagnosis and Daily Management';
  const date = 'September 13, 2025';
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

  const slug = 'addisons-disease-in-dogs';

  const description =
    'A practical, evidence-aware guide to Addison’s disease (hypoadrenocorticism) in dogs: what it is, why it is called the “great pretender,” early and crisis signs, ACTH stimulation test, lifelong treatment (glucocorticoids, mineralocorticoids), stress dosing, monitoring plans, travel/boarding checklists, and owner SOPs.';

  return (
    <>
      <Head>
        <title>{title} – Petunia Blog</title>
        <meta name="description" content={description} />
        <meta name="robots" content="all" />
        <link
          rel="canonical"
          href={`https://www.petuniapets.com/${locale}/blog/${slug}`}
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
            <li><a href="#tldr" className="underline hover:opacity-80">TL;DR</a></li>
            <li><a href="#what-is" className="underline hover:opacity-80">What Addison’s Is</a></li>
            <li><a href="#why-it-gets-missed" className="underline hover:opacity-80">Why It Gets Missed</a></li>
            <li><a href="#causes" className="underline hover:opacity-80">Causes &amp; Types</a></li>
            <li><a href="#breeds" className="underline hover:opacity-80">Breeds at Risk</a></li>
            <li><a href="#symptoms" className="underline hover:opacity-80">Symptoms &amp; Crisis Signs</a></li>
            <li><a href="#diagnosis" className="underline hover:opacity-80">Diagnosis &amp; Testing</a></li>
            <li><a href="#treatment" className="underline hover:opacity-80">Treatment &amp; Medications</a></li>
            <li><a href="#daily-care" className="underline hover:opacity-80">Daily Management</a></li>
            <li><a href="#stress-dosing" className="underline hover:opacity-80">Stress Dosing</a></li>
            <li><a href="#monitoring" className="underline hover:opacity-80">Monitoring &amp; Rechecks</a></li>
            <li><a href="#lifestyle" className="underline hover:opacity-80">Lifestyle, Exercise &amp; Diet</a></li>
            <li><a href="#travel" className="underline hover:opacity-80">Travel &amp; Boarding</a></li>
            <li><a href="#sops" className="underline hover:opacity-80">Home SOPs &amp; Checklists</a></li>
            <li><a href="#faq" className="underline hover:opacity-80">FAQ</a></li>
            <li><a href="#sources" className="underline hover:opacity-80">📚 Sources (Selected)</a></li>
          </ul>
        </nav>

        {/* TLDR */}
        <section id="tldr" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Short Answer (TL;DR)</h2>
          <p className="mb-4">
            <strong>Addison’s disease</strong> (hypoadrenocorticism) happens when the adrenal glands don&#39;t make enough cortisol and (in most cases) aldosterone. Dogs can look vaguely unwell for weeks: intermittent vomiting or diarrhea, poor appetite, low energy, weight loss. A minority present in a life-threatening <strong>Addisonian crisis</strong> with shock, low blood pressure, and dangerous electrolyte shifts. Diagnosis is confirmed with an <strong>ACTH stimulation test</strong>. The good news: with <strong>lifelong hormone replacement</strong> and routine monitoring, most dogs live normal, happy lives. Owners succeed by running on <strong>systems</strong>: exact med schedules, stress-dosing rules, clear travel/boarding handoffs, and consistent logs.
          </p>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Petunia tip:</strong> Turn this article into your Addison&#39;s <em>care SOP</em>. Store dosing times, milligrams/volume, refill dates, recheck labs, and your vet&#39;s contacts in Petunia so every caregiver follows the same playbook.
          </div>
        </section>

        {/* WHAT IS */}
        <section id="what-is" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">What Addison’s Disease Is</h2>
          <p className="mb-3">
            Addison&#39;s disease is an endocrine disorder where the adrenal cortex fails to produce adequate <strong>glucocorticoids</strong> (primarily cortisol) and, in the typical or &quot;primary&quot; form, insufficient <strong>mineralocorticoids</strong> (aldosterone). Cortisol affects metabolism, immune modulation, and the body&#39;s ability to cope with stress. Aldosterone regulates sodium and potassium balance and thus blood pressure and hydration. Without these, a dog may struggle to maintain normal energy, blood volume, and stress responses.
          </p>
          <p className="mb-0">
            Addison&#39;s is often called the <strong>&quot;great pretender&quot;</strong> because its signs mimic gastrointestinal disease, kidney issues, stress colitis, even behavioral changes. The non-specific nature of early symptoms is the core challenge for families and clinicians alike.
          </p>
        </section>

        {/* WHY MISSED */}
        <section id="why-it-gets-missed" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Why It Gets Missed (and How to Spot It Sooner)</h2>
          <p className="mb-3">
            Early Addison&#39;s can look like a dog who has &quot;off days&quot;: a missed meal here, a soft stool there, a quiet afternoon after usual play. Owners attribute it to weather, travel, or a random treat. Vets see fluctuating signs and a normal exam on good days. Over weeks, a pattern emerges: intermittent <strong>vomiting/diarrhea</strong>, <strong>lethargy</strong>, <strong>weight loss</strong>, or increased <strong>drinking/urination</strong>. In classic primary Addison&#39;s, routine bloodwork may show <strong>low sodium</strong> and <strong>high potassium</strong> (a low Na:K ratio), but this finding can be subtle or not present every time.
          </p>
          <p className="mb-0">
            The practical owner strategy: keep a symptom log. If vague signs persist more than a couple of weeks, ask your vet whether Addison&#39;s is on the list and whether screening cortisol or a full <strong>ACTH stimulation test</strong> is appropriate.
          </p>
        </section>

        {/* CAUSES */}
        <section id="causes" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Causes &amp; Types</h2>
          <p className="mb-3">
            Most canine Addison&#39;s cases are <strong>immune-mediated</strong>: the immune system damages the adrenal cortex. Less commonly, Addison&#39;s is <strong>secondary</strong> to pituitary disease (low ACTH) or occurs as a rare consequence of medications or surgery affecting the adrenal/pituitary axis.
          </p>
          <h3 className="text-lg font-semibold mt-2 mb-1">Primary Addison’s</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>Typical (combined) form:</strong> cortisol and aldosterone deficiency. Expect electrolyte disturbances (low sodium, high potassium) plus nonspecific illness.</li>
            <li><strong>Atypical form:</strong> cortisol deficiency with relatively normal electrolytes early on; mineralocorticoid failure may develop later. Easy to miss without an ACTH stim test.</li>
          </ul>
          <h3 className="text-lg font-semibold mt-2 mb-1">Secondary Addison’s</h3>
          <ul className="list-disc pl-5 space-y-1 mb-0">
            <li>Pituitary failure to stimulate the adrenals (low ACTH). Electrolytes can be normal, so clinical suspicion is important.</li>
            <li>Iatrogenic or drug-related impacts on the adrenal axis are rare, but abrupt withdrawal after long-term high-dose steroids can precipitate signs of cortisol deficiency.</li>
          </ul>
        </section>

        {/* BREEDS */}
        <section id="breeds" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Breeds at Higher Risk</h2>
          <p className="mb-3">
            Addison&#39;s appears in many breeds, but increased risk is reported in <strong>Standard Poodles</strong>, <strong>Portuguese Water Dogs</strong>, <strong>Bearded Collies</strong>, <strong>Nova Scotia Duck Tolling Retrievers</strong>, <strong>West Highland White Terriers</strong>, and certain lines of <strong>mixed breeds</strong>. Females and young-to-middle-aged dogs are somewhat overrepresented but Addison&#39;s can affect any age and sex.
          </p>
          <p className="mb-0">
            Breed risk is a nudge toward suspicion, not a diagnosis. Vets diagnose based on testing, not breed alone.
          </p>
        </section>

        {/* SYMPTOMS */}
        <section id="symptoms" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Symptoms &amp; Addisonian Crisis</h2>
          <p className="mb-3">
            Owners typically notice <strong>waxing-waning GI signs</strong> (vomiting, diarrhea), <strong>poor appetite</strong>, <strong>weight loss</strong>, increased <strong>thirst or urination</strong>, <strong>lethargy</strong>, or a dog who seems fine one day and flat the next. Some dogs show <strong>shivering</strong>, <strong>muscle weakness</strong>, or <strong>low temperature</strong> during bad spells. Because signs are non-specific, Addison&#39;s is easy to miss until a crisis.
          </p>
          <h3 className="text-lg font-semibold mt-2 mb-1">Typical Ongoing Signs</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Intermittent vomiting or diarrhea (sometimes with mucus or blood)</li>
            <li>Decreased appetite or picky eating</li>
            <li>Weight loss over weeks</li>
            <li>Tiredness, exercise intolerance, seeking cool floors</li>
            <li>Occasional tremors, generalized weakness</li>
          </ul>
          <h3 className="text-lg font-semibold mt-2 mb-1">Addisonian Crisis (Emergency)</h3>
          <ul className="list-disc pl-5 space-y-1 mb-0">
            <li>Collapse or near-collapse</li>
            <li>Pale gums, slow heart rate (<strong>bradycardia</strong>) despite shock</li>
            <li>Profound weakness, low body temperature</li>
            <li>Severe vomiting/diarrhea, dehydration</li>
          </ul>
        </section>

        {/* DIAGNOSIS */}
        <section id="diagnosis" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Diagnosis &amp; Testing</h2>
          <p className="mb-3">
            Vets begin with history and physical exam, then run laboratory tests. In classic Addison&#39;s, bloodwork may reveal <strong>low sodium</strong>, <strong>high potassium</strong>, azotemia, hypoglycemia, mild anemia, or low cholesterol. However, these are <em>clues</em>, not proof. The <strong>ACTH stimulation test</strong> is the gold standard for diagnosis.
          </p>
          <h3 className="text-lg font-semibold mt-2 mb-1">The ACTH Stimulation Test, Briefly</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Measure baseline cortisol.</li>
            <li>Give synthetic ACTH injection.</li>
            <li>Measure cortisol again after a set interval (commonly 60 minutes).</li>
          </ul>
          <p className="mb-3">
            In healthy dogs, cortisol rises after ACTH. In Addison&#39;s, cortisol fails to increase. Some clinicians screen with a single baseline cortisol to rule out Addison&#39;s when levels are clearly adequate; low or equivocal results push for a full stim test.
          </p>
          <p className="mb-0">
            In crisis, stabilization (IV fluids, electrolytes, supportive care) begins immediately. Full testing may wait until the dog is stable enough, with careful choice of emergency medications to avoid confounding results.
          </p>
        </section>

        {/* TREATMENT */}
        <section id="treatment" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Treatment &amp; Medications</h2>
          <p className="mb-3">
            Addison&#39;s management replaces the missing hormones and supports the patient during stress. Most dogs thrive once doses are dialed in.
          </p>
          <h3 className="text-lg font-semibold mt-2 mb-1">Glucocorticoids (Cortisol Replacement)</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>Prednisone</strong> (or prednisolone): daily oral dose, customized per dog; lowest effective dose is the goal to reduce side effects.</li>
            <li>Some dogs require small &quot;physiologic&quot; doses daily with temporary increases for stress (see <a className="underline" href="#stress-dosing">Stress Dosing</a>).</li>
          </ul>
          <h3 className="text-lg font-semibold mt-2 mb-1">Mineralocorticoids (Aldosterone Replacement)</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>DOCP</strong> (desoxycorticosterone pivalate): long-acting injection given about every 28–30 days (interval individualized). Requires periodic electrolyte checks to adjust dose and timing.</li>
            <li><strong>Fludrocortisone</strong>: an oral alternative with mineralocorticoid and mild glucocorticoid effects; dosing adjustments are guided by electrolytes and clinical signs.</li>
          </ul>
          <h3 className="text-lg font-semibold mt-2 mb-1">Crisis Management</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>IV fluids to correct dehydration and shock.</li>
            <li>Electrolyte management (hyperkalemia can cause life-threatening arrhythmias).</li>
            <li>Carefully selected steroids and supportive care; antiemetics as needed.</li>
          </ul>
          <p className="mb-0">
            Once stabilized, dogs transition to their maintenance regimen and a schedule of rechecks. Owners quickly become experts in their dog&#39;s rhythms and needs.
          </p>
        </section>

        {/* DAILY CARE */}
        <section id="daily-care" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Daily Management: Building Routine That Works</h2>
          <p className="mb-3">
            The most successful Addison&#39;s households treat care like a checklist. Same time each day, meds with food, simple logs, and attention to small changes. Many families find a rhythm in under a month.
          </p>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>Medication clock:</strong> give prednisone at the same time daily; DOCP on a consistent schedule with calendar reminders.</li>
            <li><strong>Food routine:</strong> consistent diet and meal timing reduces GI variables that can cloud the picture.</li>
            <li><strong>Water:</strong> free access; note unusual thirst changes and discuss with your vet.</li>
            <li><strong>Observation:</strong> appetite, stool, energy, and mood — quick notes help you spot early drift.</li>
          </ul>
          <p className="mb-0">
            Expect occasional dose adjustments in the first few months. After that, many dogs stay stable for long stretches with scheduled rechecks.
          </p>
        </section>

        {/* STRESS DOSING */}
        <section id="stress-dosing" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Stress Dosing: What It Is and When to Use It</h2>
          <p className="mb-3">
            Healthy dogs release more cortisol during stress: travel, illness, surgery, strenuous activity, thunderstorms for some, even boarding. Addisonian dogs may need a <strong>temporary increase</strong> in glucocorticoid dose to mimic this. Your veterinarian will set a personalized plan, but typical guidance includes:
          </p>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Double the daily prednisone dose on stressful days (or per vet direction).</li>
            <li>For procedures or acute illness, your vet may advise a higher dose or injectable steroids.</li>
            <li>Return to baseline once the stressor resolves, usually within 24–72 hours.</li>
          </ul>
          <p className="mb-0">
            Important: stress dosing <strong>does not</strong> replace emergency care. If your dog has vomiting with lethargy, collapse, or pale gums, treat as urgent and call your vet or ER.
          </p>
        </section>

        {/* MONITORING */}
        <section id="monitoring" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Monitoring &amp; Rechecks: How Vets Keep It Dialed In</h2>
          <p className="mb-3">
            Monitoring balances prevention of relapse with avoidance of over-medication. Your schedule will be individualized, but common patterns look like this:
          </p>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>After starting DOCP: electrolyte checks roughly at day 10–14 and near day 28 to fine-tune interval and dose.</li>
            <li>Stable phase: rechecks typically every 3–6 months (or as recommended), plus visits when you notice changes.</li>
            <li>For fludrocortisone: electrolytes guide dose changes; some dogs need small, periodic adjustments.</li>
          </ul>
          <p className="mb-0">
            Keep copies of lab results and note how your dog felt at those times. Patterns emerge that help you and your vet make faster, better decisions.
          </p>
        </section>

        {/* LIFESTYLE */}
        <section id="lifestyle" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Lifestyle, Exercise &amp; Diet</h2>
          <p className="mb-3">
            Most Addisonian dogs can live their normal lifestyle: walks, fetch, hikes, road trips, even sports with sensible pacing. Focus on consistency and watch for signs of overdoing it during hot weather or big schedule changes.
          </p>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>Exercise:</strong> build gradually after diagnosis; avoid abrupt &quot;weekend warrior&quot; intensity spikes.</li>
            <li><strong>Nutrition:</strong> a balanced, high-quality diet appropriate for age and body condition; discuss any special needs with your veterinarian.</li>
            <li><strong>Hydration &amp; heat:</strong> prioritize shade and water during warm months; watch for lethargy or GI upset after unusually active days.</li>
          </ul>
          <p className="mb-0">
            When life gets unpredictable, a pre-planned stress-dosing strategy is your best friend.
          </p>
        </section>

        {/* TRAVEL */}
        <section id="travel" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Travel &amp; Boarding: Smooth Hand-Offs Prevent Problems</h2>
          <p className="mb-3">
            Trips and caregiver changes are predictable stressors. Plan ahead so you can enjoy your time away with confidence.
          </p>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Pack medications in original containers with written instructions and dosing times.</li>
            <li>Send a one-page handoff sheet: diagnosis, daily doses, stress-dosing plan, vet/ER contacts, and signs that trigger a call.</li>
            <li>For flights or long drives, keep meds in carry-on and a small emergency fund accessible.</li>
            <li>If boarding, brief staff that vomiting + lethargy in an Addisonian dog is not &quot;wait-and-see.&quot;</li>
          </ul>
          <p className="mb-0">
            Many families arrange a &quot;test night&quot; with a sitter or facility before longer trips to ensure routines translate smoothly.
          </p>
        </section>

        {/* SOPs */}
        <section id="sops" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Home SOPs &amp; Checklists (Copy/Paste)</h2>

          <h3 className="text-lg font-semibold mt-2 mb-1">Daily Addison’s Care SOP</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>07:30 — Prednisone with breakfast; check appetite, energy, stool notes.</li>
            <li>12:00 — Midday wellness peek: water intake, mood, any GI signs.</li>
            <li>18:00 — Dinner; confirm no missed doses; update quick log (1–5 energy score).</li>
            <li>Monthly — DOCP injection window per calendar; schedule electrolytes as instructed.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Stress-Dosing SOP</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Trigger examples: travel day, boarding intake, minor illness, significant thunderstorm anxiety.</li>
            <li>Dose: per your vet&#39;s plan (e.g., double daily prednisone on the day of stress and possibly the day after).</li>
            <li>Reassess next morning; return to baseline if the dog is normal.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Crisis SOP (Emergency)</h3>
          <ul className="list-disc pl-5 space-y-1 mb-0">
            <li>Signs: collapse, severe weakness, repeated vomiting/diarrhea, pale gums, low temperature.</li>
            <li>Action: call ER, transport immediately; bring med list and diagnosis summary.</li>
            <li>Note times (onset, call, departure, arrival) to help the care team.</li>
          </ul>

          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm mt-3">
            <strong>Petunia tip:</strong> Save these SOPs in Petunia. Share them with family, pet sitters, and boarding staff so routines remain consistent.
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">Frequently Asked Questions</h2>

          <p className="mb-3">
            <strong>Can my dog live a normal lifespan with Addison’s?</strong><br />
            In many cases, yes. Once stabilized and well managed, Addisonian dogs commonly enjoy normal activity, travel, and play with excellent quality of life.
          </p>

          <p className="mb-3">
            <strong>Will my dog need medications forever?</strong><br />
            Yes. Addison&#39;s reflects a deficiency in hormone production. Lifelong replacement is required, with the possibility of dose tweaks over time.
          </p>

          <p className="mb-3">
            <strong>What side effects should I watch for?</strong><br />
            Excess glucocorticoid can cause increased thirst/urination, hunger, panting, or behavior changes. Too little can look like low energy or GI upset. Electrolyte shifts can signal mineralocorticoid imbalance. Report patterns to your vet promptly.
          </p>

          <p className="mb-3">
            <strong>Is atypical Addison’s less serious?</strong><br />
            Atypical cases lack early electrolyte changes, which can delay diagnosis, but cortisol deficiency is still significant. Some atypical dogs later develop mineralocorticoid deficiency; ongoing monitoring is important.
          </p>

          <p className="mb-0">
            <strong>How often are rechecks after we stabilize?</strong><br />
            Many dogs settle into 3–6 month intervals, with immediate visits for any concerning changes or before elective procedures.
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
              American College of Veterinary Internal Medicine (ACVIM). Consensus resources and clinician guidance on adrenal disease.{' '}
              <a
                href="https://www.acvim.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.acvim.org
              </a>
            </li>
            <li>
              WSAVA Global Nutrition Guidelines (owner communication, BCS, feeding plans).{' '}
              <a
                href="https://wsava.org/global-guidelines/global-nutrition-guidelines/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://wsava.org/global-guidelines/global-nutrition-guidelines/
              </a>
            </li>
            <li>
              AAHA. General canine life-stage care and chronic disease management resources.{' '}
              <a
                href="https://www.aaha.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.aaha.org
              </a>
            </li>
          </ul>
          <p className="text-xs text-gray-600 mt-4">
            Educational content only. Always consult your veterinarian for individualized diagnosis and treatment. Medication changes and stress-dosing strategies must be developed with your veterinary team.
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
