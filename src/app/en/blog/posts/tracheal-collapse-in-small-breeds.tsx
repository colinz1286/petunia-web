'use client';

import Head from 'next/head';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function TrachealCollapseSmallBreeds() {
  const locale = useLocale();

  const title =
    'Tracheal Collapse in Small Breeds: Symptoms, Lifestyle Adjustments, and Veterinary Care';
  const date = 'September 8, 2025';
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

  const description =
    'A practical, evidence-aware guide for owners of small dogs with tracheal collapse: hallmark cough patterns, triggers, at-home environment changes, harness and weight strategies, veterinary medications, anesthesia and dental considerations, stent/surgery pathways, monitoring, and SOPs.';

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
            <li><a href="#what-it-is" className="underline hover:opacity-80">What It Is</a></li>
            <li><a href="#breeds-risk" className="underline hover:opacity-80">Breeds &amp; Risk Factors</a></li>
            <li><a href="#symptoms" className="underline hover:opacity-80">Symptoms &amp; Triggers</a></li>
            <li><a href="#diagnosis" className="underline hover:opacity-80">Diagnosis &amp; Grading</a></li>
            <li><a href="#home" className="underline hover:opacity-80">Home &amp; Lifestyle Adjustments</a></li>
            <li><a href="#weight-harness" className="underline hover:opacity-80">Weight &amp; Harness Strategy</a></li>
            <li><a href="#medical" className="underline hover:opacity-80">Medications &amp; Supportive Care</a></li>
            <li><a href="#dental" className="underline hover:opacity-80">Dental &amp; Anesthesia Considerations</a></li>
            <li><a href="#crisis" className="underline hover:opacity-80">Cough Spikes &amp; When to Seek ER</a></li>
            <li><a href="#interventions" className="underline hover:opacity-80">Interventional &amp; Surgical Options</a></li>
            <li><a href="#boarding" className="underline hover:opacity-80">Boarding/Daycare Notes</a></li>
            <li><a href="#sops" className="underline hover:opacity-80">Owner SOPs &amp; Checklists</a></li>
            <li><a href="#faq" className="underline hover:opacity-80">FAQ</a></li>
            <li><a href="#sources" className="underline hover:opacity-80">📚 Sources (Selected)</a></li>
          </ul>
        </nav>

        {/* TL;DR */}
        <section id="tldr" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Short Answer (TL;DR)</h2>
          <p className="mb-4">
            <strong>Tracheal collapse</strong> is a structural weakness of the windpipe that leads to a classic <strong>&quot;goose-honk&quot; cough</strong>, especially in excited or warm conditions. Many small dogs do well long-term with <strong>weight control</strong>, a <strong>front-clip harness</strong>, cool/quiet spaces, and <strong>vet-guided anti-tussives</strong> and other medications. Severe, refractory cases may benefit from <strong>interventional stenting</strong> or surgery under a specialist, with careful risk-benefit discussion. The most powerful tools are the boring ones: lower body weight, fewer cough triggers, and consistent routines.
          </p>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Petunia tip:</strong> Turn this into your dog&#39;s airway <em>care SOP</em>—harness type and fit photos, weight target, room temp limits, medication schedule, and a cough-spike plan with ER numbers.
          </div>
        </section>

        {/* WHAT IT IS */}
        <section id="what-it-is" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">What Tracheal Collapse Is (Plain-Language)</h2>
          <p className="mb-3">
            The canine trachea is a flexible tube made of C-shaped cartilage rings connected by a muscular membrane. In tracheal collapse, those rings weaken or flatten and the dorsal membrane may become lax, allowing the airway to narrow during breathing. Collapse can occur in the <strong>cervical</strong> (neck) portion, the <strong>intrathoracic</strong> portion (inside the chest), or both. Because airway pressures differ between inhalation and exhalation, some dogs cough more on inspiration, others on expiration, and some on both.
          </p>
          <p className="mb-0">
            While alarming to hear, many dogs with mild to moderate collapse are <strong>comfortable and active</strong> when owners control triggers and follow a consistent medical plan. Your job is to lower the &quot;load&quot; on the windpipe—less pulling, less heat, less weight, less chaos—and to have a priority path for bad days.
          </p>
        </section>

        {/* BREEDS & RISK */}
        <section id="breeds-risk" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Breeds &amp; Risk Factors</h2>
          <p className="mb-3">
            Tracheal collapse is seen most often in <strong>toy and small breeds</strong>: Yorkshire Terriers, Pomeranians, Chihuahuas, Toy Poodles, Pugs, Shih Tzus, and Maltese are frequently listed. Age of onset varies—some dogs show signs in early adulthood; others present later with a lifetime of subtle coughing that worsens with weight gain or heat.
          </p>
          <ul className="list-disc pl-5 space-y-1 mb-0">
            <li><strong>Body weight:</strong> overweight dogs cough more and recover slower.</li>
            <li><strong>Neck pressure:</strong> collar pulling can trigger cough fits; switch to harness.</li>
            <li><strong>Heat &amp; humidity:</strong> warm, sticky days worsen panting and airway collapse.</li>
            <li><strong>Air irritants:</strong> smoke, aerosols, heavy perfumes, dust.</li>
            <li><strong>Concurrent disease:</strong> dental disease, airway infections, heart enlargement can amplify cough.</li>
          </ul>
        </section>

        {/* SYMPTOMS */}
        <section id="symptoms" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Symptoms &amp; Common Triggers</h2>
          <p className="mb-3">
            The hallmark is a harsh, resonant cough many owners describe as a <strong>&quot;goose-honk&quot;</strong>. Episodes can be brief or last minutes, and often follow leash pulling, excitement at the door, barking at windows, inhaled irritants, or hot car transitions. Some dogs gag or retch at the end of a bout; others have noisy breathing (stridor) or wheeze.
          </p>
          <h3 className="text-lg font-semibold mt-2 mb-1">Typical Triggers</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Leash pressure on a neck collar; sudden pulling.</li>
            <li>Heat/humidity; exercise right after a meal.</li>
            <li>Excited barking at visitors or doorbells.</li>
            <li>Dusty rooms, cigarette or vape smoke, strong cleaning sprays.</li>
            <li>Pressure from tight grooming loops or muzzles.</li>
          </ul>
          <p className="mb-0">
            Persistent cyanosis (blue tongue), collapse, or sharp increases in effort are <strong>not</strong> normal and require emergency assessment.
          </p>
        </section>

        {/* DIAGNOSIS */}
        <section id="diagnosis" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Diagnosis &amp; Grading</h2>
          <p className="mb-3">
            Vets diagnose by combining <strong>history</strong> and <strong>exam</strong> with imaging. Standard radiographs can show narrowed tracheal diameter, though collapse can be intermittent. Dynamic fluoroscopy (real-time X-ray), airway endoscopy, and ultrasound of the neck are used in selected cases. Endoscopy allows grading of collapse, assessment of the larynx and bronchi, and collection of samples if infection is suspected.
          </p>
          <p className="mb-0">
            Many clinicians use a <strong>grade 1–4</strong> scheme (mild to severe). Treatment plans scale with grade and with clinical impact: some grade-2 dogs cough rarely; some grade-1 dogs cough often because of triggers or weight.
          </p>
        </section>

        {/* HOME */}
        <section id="home" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Home &amp; Lifestyle Adjustments (High-Yield)</h2>
          <p className="mb-3">
            These are the &quot;boring&quot; changes that create real comfort. Do them first, and stick with them—most dogs improve here before any medication is even adjusted.
          </p>
          <h3 className="text-lg font-semibold mt-2 mb-1">Environment</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Keep <strong>cool, dry air</strong>; avoid hot, humid rooms. Use fans or AC to reduce panting.</li>
            <li><strong>Remove irritants:</strong> no smoking indoors; avoid aerosols, strong fragrances, dust.</li>
            <li><strong>Quiet windows:</strong> limit access to bark triggers with film, curtains, or baby gates.</li>
          </ul>
          <h3 className="text-lg font-semibold mt-2 mb-1">Routines</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Short, frequent walks during cool hours; avoid heavy play in heat.</li>
            <li>Pause after excitement; let breathing settle before activity or meals.</li>
            <li>Teach <strong>calm-on-cue</strong> behaviors (mat settle, hand target) to defuse doorbell arousal.</li>
          </ul>
          <h3 className="text-lg font-semibold mt-2 mb-1">Equipment</h3>
          <ul className="list-disc pl-5 space-y-1 mb-0">
            <li>Switch to a <strong>front-clip harness</strong> fitted to avoid neck pressure.</li>
            <li>Use a short, <strong>lightweight leash</strong> and avoid heavy retractables that encourage pulling.</li>
          </ul>
        </section>

        {/* WEIGHT & HARNESS */}
        <section id="weight-harness" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Weight &amp; Harness Strategy: The Biggest Wins</h2>
          <p className="mb-3">
            Even small weight losses reduce airway load and heat stress. Aim for a <strong>lean body condition</strong> (ribs easily felt with light cover). Feed measured grams, trim calorie-dense treats, and use puzzle feeders that don&#39;t spike arousal. Pair weight control with a <strong>front-clip harness</strong> sized and adjusted for your dog. A comfortable harness converts pulling into shoulder guidance rather than neck compression.
          </p>
          <ul className="list-disc pl-5 space-y-1 mb-0">
            <li>Reweigh every two to four weeks; adjust portions by grams, not scoops.</li>
            <li>Demonstrate harness fit for every caregiver; store photos of correct fit.</li>
          </ul>
        </section>

        {/* MEDICAL */}
        <section id="medical" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Medications &amp; Supportive Care (Vet-Guided)</h2>
          <p className="mb-3">
            Medication plans are individualized. Many dogs need them only during seasonal flares or stressful periods; others benefit from longer courses. Work closely with your veterinarian and never share human cough meds without guidance.
          </p>
          <h3 className="text-lg font-semibold mt-2 mb-1">Commonly Used Options</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>Anti-tussives</strong> (cough suppressants) to break the cough cycle and reduce airway irritation.</li>
            <li><strong>Bronchodilators</strong> for lower airway contribution or concurrent bronchitis (case dependent).</li>
            <li><strong>Anti-inflammatories</strong> (including brief steroid courses when indicated) to reduce mucosal swelling.</li>
            <li><strong>Sedatives/anxiolytics</strong> in carefully chosen situations to limit panic-driven cough fits.</li>
            <li><strong>Antibiotics</strong> only if infection is documented or strongly suspected; they are not routine.</li>
          </ul>
          <h3 className="text-lg font-semibold mt-2 mb-1">Nebulization &amp; Humidification</h3>
          <p className="mb-3">
            Some vets recommend <strong>nebulization</strong> (moist air) or saline inhalation to soothe airways, especially during dry winter months. Avoid over-humidifying rooms—excess humidity can worsen breathing comfort in some dogs.
          </p>
          <h3 className="text-lg font-semibold mt-2 mb-1">Vaccines &amp; Infections</h3>
          <p className="mb-0">
            Respiratory infections can amplify cough. Keep your dog current on vet-advised vaccines and avoid high-risk exposures during outbreaks.
          </p>
        </section>

        {/* DENTAL & ANESTHESIA */}
        <section id="dental" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Dental &amp; Anesthesia Considerations</h2>
          <p className="mb-3">
            Dental disease inflames the oropharynx and can worsen cough. Ironically, dental care requires anesthesia, which can pose airway management challenges in dogs with collapse. Talk with your vet about <strong>pre-anesthetic planning</strong>: gentle induction, experienced anesthesia monitoring, and postoperative cough control. Proactive dental hygiene at home (brushing, VOHC-accepted chews under guidance) reduces the frequency of anesthetic events over a lifetime.
          </p>
          <p className="mb-0">
            For grooming, avoid tight neck loops; ask groomers to use chest harness tethers when possible.
          </p>
        </section>

        {/* CRISIS */}
        <section id="crisis" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Cough Spikes: What to Do &amp; When to Seek ER</h2>
          <p className="mb-3">
            Most cough fits resolve with <strong>calm handling</strong>, cool air, and gentle chest strokes. Keep lights low and remove stimuli. If you have vet-approved rescue medications, use them as directed. Escalate care if you see:
          </p>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Blue or gray gums/tongue, collapse, or persistent open-mouth breathing.</li>
            <li>Cough that does not stop after your usual rescue plan.</li>
            <li>Labored breathing at rest, or severe lethargy after a bout.</li>
          </ul>
          <p className="mb-0">
            Call ahead to the ER so oxygen and monitoring are ready on arrival.
          </p>
        </section>

        {/* INTERVENTIONS */}
        <section id="interventions" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Interventional &amp; Surgical Options</h2>
          <p className="mb-3">
            When diligent lifestyle control and medications are not enough, your vet may refer you to a specialist for advanced options. The two major paths are <strong>extratracheal ring prostheses</strong> (open surgery, most suited to cervical collapse) and <strong>intraluminal stenting</strong> (minimally invasive, commonly used for intrathoracic collapse or diffuse disease). Each has tradeoffs.
          </p>
          <h3 className="text-lg font-semibold mt-2 mb-1">Extratracheal Rings (Open Surgery)</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Rings placed around the trachea to restore shape; typically for neck-region collapse.</li>
            <li>Requires careful case selection; risks include recurrent laryngeal nerve injury or postoperative complications.</li>
          </ul>
          <h3 className="text-lg font-semibold mt-2 mb-1">Intraluminal Stents (Interventional)</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Self-expanding metallic stents placed endoscopically/fluoroscopically inside the trachea.</li>
            <li>Rapid symptom relief for many dogs; risks include granulation tissue, stent fracture/migration, and continued need for medications in some cases.</li>
          </ul>
          <p className="mb-0">
            A thorough consult weighs <strong>quality-of-life gains</strong> against costs, complications, and aftercare. Many families prefer to exhaust conservative measures first; others pursue stenting earlier to restore daily comfort. There is no single &quot;right&quot; answer—only the right answer for your dog and household.
          </p>
        </section>

        {/* BOARDING/DAYCARE */}
        <section id="boarding" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Boarding/Daycare Notes: Set the Dog Up for Calm</h2>
          <p className="mb-3">
            Facilities should treat airway dogs as &quot;calm priority&quot; guests. Share your dog&#39;s triggers, harness fit photos, and medication windows. Ask for cooler rooms, minimal bark exposure, and gentle play or solo enrichment. Request that <strong>no neck collars</strong> be used for handling—harness only.
          </p>
          <ul className="list-disc pl-5 space-y-1 mb-0">
            <li>Time-stamped notes for cough episodes and what resolved them.</li>
            <li>Water available at all times, shade outdoors, and AC breaks in heat.</li>
            <li>Escalation plan posted: who calls whom, and where the nearest ER is located.</li>
          </ul>
        </section>

        {/* SOPs */}
        <section id="sops" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Owner SOPs &amp; Checklists (Copy/Paste)</h2>

          <h3 className="text-lg font-semibold mt-2 mb-1">Daily Airway SOP</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Morning cool walk on <strong>front-clip harness</strong>; avoid sprinting and excitement spikes.</li>
            <li>Medications at set times; log doses and cough score (0–10).</li>
            <li>Limit bark triggers (window film, white noise); run AC or fan mid-day in warm months.</li>
            <li>Measured meals by grams; no heavy play right after eating.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Cough Spike Plan</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Move to cool, quiet room; lift gently with harness support if needed.</li>
            <li>Use vet-approved rescue meds as directed; set a 10–15 minute timer to reassess.</li>
            <li>If cyanosis, collapse, or unresolved distress → <strong>go to ER</strong>; call on the way.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Weight &amp; Fit SOP</h3>
          <ul className="list-disc pl-5 space-y-1 mb-0">
            <li>Reweigh every two to four weeks; adjust food grams; record target body condition.</li>
            <li>Store two photos of correct harness fit; check strap tension weekly.</li>
          </ul>

          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm mt-3">
            <strong>Petunia tip:</strong> Save these SOPs in Petunia with photos and recheck dates so sitters and facilities reproduce the same routine.
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">Frequently Asked Questions</h2>

          <p className="mb-3">
            <strong>Will my dog outgrow tracheal collapse?</strong><br />
            It is typically a chronic condition. Many dogs stabilize with weight control, harness use, and trigger management, and they enjoy excellent quality of life with periodic medical support.
          </p>

          <p className="mb-3">
            <strong>Is a collar ever okay?</strong><br />
            For ID tags, yes. For walking, use a harness. Even occasional pulling can set off prolonged cough fits.
          </p>

          <p className="mb-3">
            <strong>Can I use human cough medicines?</strong><br />
            Only under veterinary guidance. Dosing and suitability vary, and some combinations are unsafe for dogs.
          </p>

          <p className="mb-3">
            <strong>How do I pick between stent and surgery?</strong><br />
            It depends on collapse location, extent, comorbidities, and your goals. A specialist consult will outline likely benefits, complications, costs, and aftercare for your dog&#39;s exact anatomy.
          </p>

          <p className="mb-0">
            <strong>Does stress really make it worse?</strong><br />
            Yes—excitement and anxiety raise respiratory drive and muscular effort, which narrows the airway further. Calm routines are medicine for airway dogs.
          </p>
        </section>

        {/* SOURCES */}
        <section id="sources" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">📚 Sources (Selected)</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            <li>
              MSD/Merck Veterinary Manual. Tracheal Collapse in Dogs — owner &amp; professional resources.{' '}
              <a
                href="https://www.merckvetmanual.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.merckvetmanual.com
              </a>
            </li>
            <li>
              American College of Veterinary Surgeons (ACVS). Client education on airway surgery and tracheal interventions.{' '}
              <a
                href="https://www.acvs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.acvs.org
              </a>
            </li>
            <li>
              American College of Veterinary Internal Medicine (ACVIM). Small animal respiratory disease resources and proceedings.{' '}
              <a
                href="https://www.acvim.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.acvim.org
              </a>
            </li>
            <li>
              AAHA. General canine chronic disease &amp; anesthesia guidelines for small patients.{' '}
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
            Educational content only. Always consult your veterinarian for individualized diagnosis and treatment. Medication and interventional decisions must be made with your veterinary team.
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
