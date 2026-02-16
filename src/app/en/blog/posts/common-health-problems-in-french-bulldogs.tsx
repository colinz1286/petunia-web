'use client';

import Head from 'next/head';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function CommonHealthProblemsInFrenchBulldogs() {
  const locale = useLocale();

  const title =
    'Common Health Problems in French Bulldogs: Early Signs, Prevention, and Operator-Grade Care Systems';
  const date = 'April 7, 2025';
  const categories = ['owner', 'breed_specific_guides'] as const;

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
    'What health issues are most common in French Bulldogs? A practical, evidence-informed guide to airway (BOAS), heat risk, skin/ear disease, eyes, spine & knees (IVDD, patellar luxation), GI problems, dental care, and more—plus early signs, home systems, boarding/daycare protocols, and veterinarian-approved checklists.';

  return (
    <>
      <Head>
        <title>{title} – Petunia Blog</title>
        <meta name="description" content={description} />
        <meta name="robots" content="index,follow" />
       
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
            <li><a href="#overview" className="underline hover:opacity-80">Why Frenchies Have Unique Risks</a></li>
            <li><a href="#airway" className="underline hover:opacity-80">Airway &amp; Breathing (BOAS)</a></li>
            <li><a href="#heat" className="underline hover:opacity-80">Heat Stress &amp; Travel Safety</a></li>
            <li><a href="#skin-ears" className="underline hover:opacity-80">Skin &amp; Ears (Allergies, Folds, Otitis)</a></li>
            <li><a href="#eyes" className="underline hover:opacity-80">Eyes (Ulcers, Dry Eye, Pigment)</a></li>
            <li><a href="#spine-knees" className="underline hover:opacity-80">Spine &amp; Knees (IVDD, Patellas)</a></li>
            <li><a href="#hips" className="underline hover:opacity-80">Hips &amp; Mobility</a></li>
            <li><a href="#gi" className="underline hover:opacity-80">Gastrointestinal (Reflux, Hernia)</a></li>
            <li><a href="#dental" className="underline hover:opacity-80">Dental &amp; Oral Health</a></li>
            <li><a href="#neuro" className="underline hover:opacity-80">Neurologic Red Flags</a></li>
            <li><a href="#cardio-uro" className="underline hover:opacity-80">Cardiac &amp; Urinary Notes</a></li>
            <li><a href="#weight" className="underline hover:opacity-80">Weight, Conditioning &amp; Recovery</a></li>
            <li><a href="#preventive" className="underline hover:opacity-80">Preventive Care Roadmap</a></li>
            <li><a href="#home" className="underline hover:opacity-80">Home Setup &amp; Daily Systems</a></li>
            <li><a href="#boarding" className="underline hover:opacity-80">Boarding/Daycare Protocols</a></li>
            <li><a href="#templates" className="underline hover:opacity-80">Checklists &amp; Templates</a></li>
            <li><a href="#faq" className="underline hover:opacity-80">FAQ</a></li>
            <li><a href="#sources" className="underline hover:opacity-80">📚 Sources (Selected)</a></li>
          </ul>
        </nav>

        {/* TL;DR */}
        <section id="tl-dr" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Short Answer (TL;DR)</h2>
          <p className="mb-4">
            French Bulldogs are wonderful companions with a few predictable health pinch points. The most common issues we
            see involve the <strong>airway</strong> (brachycephalic obstructive airway syndrome), <strong>heat sensitivity</strong>,
            <strong> skin &amp; ears</strong> (fold dermatitis, atopy/yeast, otitis), <strong>eyes</strong> (corneal ulcers, dry eye), and
            the <strong>spine/knees</strong> (intervertebral disc disease and patellar luxation). You can move the odds in your favor by
            keeping your Frenchie <strong>lean</strong>, running <strong>heat rules</strong>, building <strong>weekly hygiene routines</strong>, and staying on
            top of <strong>preventive veterinary care</strong>. Know emergency red flags (open-mouth breathing at rest, blue gums, sudden
            hind-end weakness, eye pain) and act early.
          </p>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Petunia tip:</strong> Store your Frenchie’s playbook—feed amount, “heat rules,” fold/ear routine, and vet meds—in
            Petunia. Share it with sitters, family, and daycare so every handoff follows the same system: <em>structured play → rest → cool-down</em>.
          </div>
        </section>

        {/* OVERVIEW */}
        <section id="overview" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Why Frenchies Have Unique Risk Patterns</h2>
          <p className="mb-3">
            French Bulldogs are <strong>brachycephalic</strong> (short-muzzled) dogs bred for a compact, muscular build and a friendly,
            people-oriented temperament. Their head and airway conformation increases the risk of <strong>BOAS</strong>, while their stocky
            frame, screw tail, and vertebral anatomy can raise the risk of <strong>spinal issues</strong>. Short coats and facial folds shift
            the grooming focus toward <strong>skin, ears, and eyes</strong> rather than heavy coat maintenance. Epidemiologic work from large
            primary-care datasets highlights how often Frenchies present for <em>otitis externa</em>, <em>skin fold dermatitis</em>, <em>pyoderma</em>,
            <em> conjunctivitis</em>, and <em>gastrointestinal issues</em>—patterns that match what families and clinicians observe in everyday life.
          </p>
          <p className="mb-3">
            None of this means your Frenchie is destined for problems. It means you should run <em>systems</em> tailored to the breed:
            conservative heat management, measured meals, traction &amp; ramps, quick daily fold/ear checks, eye protection habits, and
            clear “call the vet now” criteria. Small, steady habits protect comfort—and tend to be cheaper than rescue missions.
          </p>
          <p>
            The next sections break down the most common Frenchie issues by <strong>what to watch for</strong>, <strong>home setup</strong>, and
            <strong> how your veterinary team will approach diagnosis and care</strong>.
          </p>
        </section>

        {/* AIRWAY */}
        <section id="airway" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Airway &amp; Breathing: BOAS Is the Headliner</h2>
          <p className="mb-3">
            <strong>Brachycephalic obstructive airway syndrome (BOAS)</strong> includes a cluster of anatomic features—<em>stenotic nares</em>
            (narrow nostrils), <em>elongated/thickened soft palate</em>, <em>everted laryngeal saccules</em>, and occasionally a narrowed trachea—that
            increase resistance to airflow. Clinical signs range from noisy breathing and exercise intolerance to heat stress,
            cyanosis, and collapse. Over time, chronic negative pressures can further damage airway structures, so <strong>early
            recognition</strong> matters.
          </p>
          <h3 className="text-lg font-semibold mt-2 mb-1">Early signs worth noticing</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Loud snoring or “snorkeling” at rest; mouth-breathing while relaxed.</li>
            <li>Harsh inspiratory noise with light exercise or excitement; prolonged recovery after mild play.</li>
            <li>Reluctance in warm, humid weather; heat intolerance compared with other dogs.</li>
            <li>Blue or pale gums, collapse, or panic during heat exposure—<em>this is an emergency</em>.</li>
          </ul>
          <h3 className="text-lg font-semibold mt-2 mb-1">Home system</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>Harness-only walks.</strong> Avoid neck collars for pressure control; choose a well-fitted Y-front harness.</li>
            <li><strong>Heat rules.</strong> Dawn/dusk activity; frequent water &amp; shade breaks; AC cool-downs after short play sets.</li>
            <li><strong>Weight discipline.</strong> Keep body condition lean—extra fat narrows the airway and accelerates fatigue.</li>
            <li><strong>Travel safety.</strong> High-airflow crates; never leave in vehicles; avoid cargo-hold flights.</li>
          </ul>
          <h3 className="text-lg font-semibold mt-2 mb-1">Veterinary plan</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Baseline exam</strong> and BOAS assessment; discuss resting respiratory rates and heat plans.</li>
            <li><strong>Imaging &amp; airway exam</strong> as indicated. If surgery is recommended, procedures may include nares widening and soft-palate resection.</li>
            <li><strong>Anesthesia strategy</strong> with a team experienced in brachycephalic patients (pre-oxygenation, gentle induction, cautious recovery).</li>
          </ul>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Petunia tip:</strong> Put “heat rules,” harness choice, and post-play cool-downs in your Petunia profile. Share with
            sitters and daycare so nobody improvises during hot spells.
          </div>
        </section>

        {/* HEAT */}
        <section id="heat" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Heat Stress &amp; Travel Safety: The Fastest Way a Good Day Goes Bad</h2>
          <p className="mb-3">
            Because panting drives canine cooling and Frenchies have reduced airway margins, they carry a <strong>higher risk of heat
            stress</strong>. Humidity worsens it. Build conservative rules so you do not rely on moment-to-moment judgment in the park or
            car.
          </p>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>Timing.</strong> Outdoors at dawn/dusk in warm seasons; midday = potty breaks and shade only.</li>
            <li><strong>Session caps.</strong> 5–10 minute play blocks → water break → AC rest; stop at the first sign of noisy breathing.</li>
            <li><strong>Surface temps.</strong> Hot pavement burns pads and reflects heat; prefer grass and shade.</li>
            <li><strong>Emergency cues.</strong> Wide stance, glassy eyes, thick ropey saliva, vomiting, collapse. Cool aggressively (water on chest &amp; belly, fans, AC) and go to the ER.</li>
          </ul>
          <p className="text-sm text-gray-700">
            For travel, prioritize ground transport and high-airflow crates. Airline cargo holds are generally unsafe for
            brachycephalic breeds.
          </p>
        </section>

        {/* SKIN & EARS */}
        <section id="skin-ears" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Skin &amp; Ears: Allergies, Folds, Yeast &amp; Otitis</h2>
          <p className="mb-3">
            Many Frenchies live with recurrent <strong>allergic skin disease</strong> (environmental atopy, sometimes food-responsive) that
            shows up as itch, redness, ear infections, and “hot spots.” <strong>Skin fold dermatitis (intertrigo)</strong> and <strong>pyoderma</strong> are
            common where moisture is trapped—especially facial folds. <strong>Otitis externa</strong> (outer ear infections) often travels with
            allergies and fold issues.
          </p>
          <h3 className="text-lg font-semibold mt-2 mb-1">What to watch for</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Frequent scratching, face rubbing, paw chewing, or a “yeasty” odor.</li>
            <li>Red, moist, or brown debris in facial folds; recurrent ear head-shaking or odor.</li>
            <li>Oily or flaky coat, recurrent hot spots, or skin pimples.</li>
          </ul>
          <h3 className="text-lg font-semibold mt-2 mb-1">Home system</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>Fold care.</strong> Gentle wipe and thorough dry after meals and walks; medicated wipes if your vet prescribes them.</li>
            <li><strong>Ear checks weekly.</strong> Clean with a vet-approved solution if waxy; do not over-clean healthy ears.</li>
            <li><strong>Parasite prevention.</strong> Fleas can ignite allergic skin disease; stay current year-round where indicated.</li>
          </ul>
          <h3 className="text-lg font-semibold mt-2 mb-1">Veterinary plan</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Skin cytology</strong> (look for yeast/bacteria) and targeted therapy.</li>
            <li><strong>Allergy strategy</strong>: anti-itch meds, topical therapy, and—when appropriate—diet trials or allergen immunotherapy.</li>
            <li><strong>Ear cultures</strong> for recurrent otitis; treat secondary infections and address the underlying allergy driver.</li>
          </ul>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Petunia tip:</strong> Save your fold/ear routine, product list, and refill cadence in Petunia. Consistency prevents
            small problems from flaring into big ones.
          </div>
        </section>

        {/* EYES */}
        <section id="eyes" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Eyes: Corneal Ulcers, Dry Eye &amp; Pigmentary Changes</h2>
          <p className="mb-3">
            Frenchies lead with curious, prominent eyes and short muzzles—great for expression, risky for <strong>corneal ulcers</strong>.
            They may also be prone to <strong>keratoconjunctivitis sicca (KCS, “dry eye”)</strong> and <strong>pigmentary keratitis</strong>. Ulcers can
            spiral quickly; treat eye pain as a same-day problem.
          </p>
          <h3 className="text-lg font-semibold mt-2 mb-1">Red flags (same-day vet)</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Squinting, pawing at an eye, light sensitivity, or sudden cloudiness.</li>
            <li>Thick discharge, redness of the whites, or a visible divot/blue-white spot on the cornea.</li>
            <li>“Cherry eye” (third eyelid gland prolapse) or any trauma to the face/eye.</li>
          </ul>
          <h3 className="text-lg font-semibold mt-2 mb-1">Home system</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Keep nails and rough toys away from the face; avoid stick play and bristly bushes.</li>
            <li>Flush grit with sterile saline; never use human eye drops unless your vet instructs you.</li>
            <li>After baths or swimming, gently dry facial fur and folds; watch for squinting afterward.</li>
          </ul>
          <p>
            Your veterinarian may perform a <em>fluorescein stain</em> to look for ulcers and <em>tear testing</em> for KCS. Many ulcers heal
            well with prompt care; delays increase the chance of surgery and scarring.
          </p>
        </section>

        {/* SPINE & KNEES */}
        <section id="spine-knees" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Spine &amp; Knees: IVDD and Patellar Luxation</h2>
          <p className="mb-3">
            French Bulldogs can develop <strong>intervertebral disc disease (IVDD)</strong> and <strong>patellar luxation</strong> (kneecap slippage).
            Some also have congenital vertebral malformations (e.g., <em>hemivertebrae</em>) associated with screw tails. You cannot change
            genetics, but you can reduce risk and catch change early with smart home setups and weight control.
          </p>
          <h3 className="text-lg font-semibold mt-2 mb-1">IVDD: know the early signs</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Sudden yelp with reluctance to move; arched back; guarding the neck or back.</li>
            <li>Wobbly gait, toe dragging, knuckling, or hind-end weakness—<em>urgent veterinary care</em>.</li>
            <li>Loss of bladder/bowel control or inability to stand—<em>emergency</em>.</li>
          </ul>
          <h3 className="text-lg font-semibold mt-2 mb-1">Patellar luxation: what it looks like</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Skip-step or momentary “bunny hop,” then normal gait; some dogs carry a rear leg briefly.</li>
            <li>Knees may feel unstable on exam; severity is graded by your veterinarian.</li>
          </ul>
          <h3 className="text-lg font-semibold mt-2 mb-1">Home system for the frame</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Use <strong>ramps</strong> for sofa/bed/car; lay <strong>traction runners</strong> over slick floors.</li>
            <li>Keep <strong>nails short</strong>; add gentle core work (slow figure-8s, supported stands).</li>
            <li>Avoid repetitive high jumps or stair sprints; carry on steep stairs where possible.</li>
          </ul>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Boarding/daycare note:</strong> Ask facilities to build rest blocks between play sets, use traction surfaces, and
            avoid jump-heavy play. Put instructions in your Petunia profile so every handler follows them.
          </div>
        </section>

        {/* HIPS */}
        <section id="hips" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Hips &amp; Mobility</h2>
          <p className="mb-3">
            <strong>Hip dysplasia</strong> is less notorious in Frenchies than in large breeds, but it exists and may contribute to stiffness
            and early arthritis. Keeping a lean body condition and building low-impact activity with planned recovery days protects
            comfort. Your veterinarian may recommend radiographs and, when arthritis develops, a combined plan of weight control,
            joint-friendly exercise, anti-inflammatory medications as indicated, and adjuncts such as omega-3s or physical rehab.
          </p>
        </section>

        {/* GI */}
        <section id="gi" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Gastrointestinal: Reflux, Hiatal Hernia &amp; Sensitive Stomachs</h2>
          <p className="mb-3">
            Some brachycephalic dogs experience <strong>gastroesophageal reflux</strong>, <strong>regurgitation</strong>, or <strong>hiatal hernia</strong>,
            which can appear as frequent “spit-ups,” noisy swallowing, lip-licking, or cough. Airway turbulence may interact with GI
            pressures, so a global plan (airway + GI) helps.
          </p>
          <h3 className="text-lg font-semibold mt-2 mb-1">Home system</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Measured meals; consider smaller, more frequent feedings if advised.</li>
            <li>Do calm strolls rather than vigorous play right after meals.</li>
            <li>Note patterns: time of day, food type, speed of eating; share with your vet.</li>
          </ul>
          <p>
            Your veterinarian may recommend diet trials, antacids, prokinetics, or imaging when hernia is suspected. Treating BOAS can
            also reduce GI signs in some patients.
          </p>
        </section>

        {/* DENTAL */}
        <section id="dental" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Dental &amp; Oral Health</h2>
          <p className="mb-3">
            Short muzzles can crowd teeth, predisposing to <strong>periodontal disease</strong>. Daily or near-daily home care plus
            professional cleanings as recommended will keep mouths comfortable and protect systemic health.
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Brush daily</strong> if possible; use dog-safe toothpaste.</li>
            <li>Choose <strong>VOHC-accepted</strong> chews and diets; avoid hard bones/antlers that can fracture teeth.</li>
            <li>Report drooling, oral pain, pawing at the mouth, or foul odor.</li>
          </ul>
        </section>

        {/* NEURO */}
        <section id="neuro" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Neurologic Red Flags</h2>
          <p className="mb-3">
            IVDD sits at the intersection of ortho and neuro. Add standard neuro red flags to your mental checklist so you know when to
            stop home troubleshooting and go in.
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Sudden collapse, seizure-like activity, or unresponsiveness.</li>
            <li>Progressive hind-end weakness, knuckling, or loss of coordination.</li>
            <li>Loss of bladder/bowel control or inability to rise—<em>emergency</em>.</li>
          </ul>
        </section>

        {/* CARDIO & URO */}
        <section id="cardio-uro" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Cardiac &amp; Urinary Notes (Less Common, Still Important)</h2>
          <p className="mb-3">
            Congenital heart disease (e.g., <em>pulmonic stenosis</em>) is documented in some small breeds, though it is not among the
            most frequent Frenchie presentations in primary-care datasets. Report cough with exercise, fainting, or new murmurs to your
            veterinarian. For urinary health, monitor <strong>water intake</strong>, <strong>urine frequency</strong>, and <strong>straining</strong>; bring a urine
            sample if you notice blood, pain, or frequent accidents.
          </p>
        </section>

        {/* WEIGHT & CONDITIONING */}
        <section id="weight" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Weight, Conditioning &amp; Recovery: Small, Boring Habits Win</h2>
          <p className="mb-3">
            Leanness is the single biggest lever you control. Extra pounds worsen <strong>breathing</strong>, <strong>heat risk</strong>, and
            <strong> joint loads</strong>. Aim for ribs easy to feel, a defined waist from above, and brisk recovery after short play.
          </p>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Measure every meal; use part of the ration for training.</li>
            <li>Re-weigh every 2–4 weeks; adjust calories ±10% to hold body condition.</li>
            <li>Short, frequent exercise sessions with built-in cool-downs beat weekend marathons.</li>
          </ul>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Petunia tip:</strong> Track portions, weigh-ins, and conditioning notes in Petunia. Share with your care network to
            eliminate “mystery calories” during handoffs.
          </div>
        </section>

        {/* PREVENTIVE CARE */}
        <section id="preventive" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Preventive Care Roadmap</h2>
          <p className="mb-3">
            Preventive care does the quiet, compounding work: vaccinations, parasite prevention, dental, and screening appropriate to
            life stage and history. For brachycephalic dogs, anesthesia plans and temperature management deserve extra attention.
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Vaccines</strong> aligned with AAHA/WSAVA guidance, individualized to lifestyle and local risk.</li>
            <li><strong>Parasite prevention</strong> for fleas, ticks, and heartworm where indicated, year-round in many regions.</li>
            <li><strong>Dental care</strong> at home plus professional cleanings as advised.</li>
            <li><strong>Senior screening</strong> from ~7 years onward with labs/diagnostics guided by exam and history.</li>
          </ul>
        </section>

        {/* HOME SETUP */}
        <section id="home" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Home Setup &amp; Daily Systems</h2>
          <p className="mb-3">
            Build your default day so good choices happen automatically—even when you are tired or a sitter is covering. Systems beat
            intentions.
          </p>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>Climate control.</strong> Crate/pen near airflow; raised beds away from heater vents.</li>
            <li><strong>Ramps &amp; traction.</strong> Ramps for sofa/bed/car; runners on slick floors; nail care weekly.</li>
            <li><strong>Grooming caddy.</strong> Mitt, slicker, fold wipes, ear solution together; post-walk wipe &amp; dry routine.</li>
            <li><strong>Heat card.</strong> Walk windows, session caps, emergency clinic address on the fridge and in Petunia.</li>
          </ul>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Petunia workflow:</strong> Save your routines, refill intervals, and “call-the-vet-now” criteria. Share the profile
            with family, sitters, and your boarding/daycare team.
          </div>
        </section>

        {/* BOARDING/DAYCARE */}
        <section id="boarding" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Boarding &amp; Daycare: Breed-Aware Protocols</h2>
          <p className="mb-3">
            Frenchies thrive in facilities that understand <strong>airway margins</strong>, <strong>heat risk</strong>, <strong>skin/ear care</strong>, and
            <strong> spine safety</strong>. Use your voice—ask targeted questions.
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>How do you schedule <strong>structured play → rest → cool-down</strong> blocks?</li>
            <li>What are your <strong>heat protocols</strong> and indoor climate targets?</li>
            <li>Do you use <strong>traction surfaces</strong> and avoid jump-heavy play for brachycephalic breeds?</li>
            <li>Can staff do <strong>fold-dry</strong> after water play and flag ear/eye changes the same day?</li>
          </ul>
        </section>

        {/* TEMPLATES */}
        <section id="templates" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Checklists &amp; Templates</h2>

          <h3 className="text-lg font-semibold mt-2 mb-1">Daily Airway &amp; Heat Rules (Copy/Paste)</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Dawn/dusk walks; midday = potty &amp; shade only in warm seasons.</li>
            <li>Harness-only; stop at first noisy breathing; water &amp; AC cool-down after play.</li>
            <li>Never leave in cars; high-airflow crate for travel; avoid cargo-hold flights.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Weekly Skin, Ear &amp; Eye Rhythm</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Mon: 5-min rubber mitt brush → fold wipe &amp; dry → treat for calm chin rest.</li>
            <li>Wed: quick mitt + slicker pass → ear glance; clean if waxy; check for odor/redness.</li>
            <li>Fri: nails (one paw) → fold &amp; eye check; flush grit with sterile saline if needed.</li>
            <li>Weekend: bath if due; thorough rinse; dry folds/ears; swap &amp; wash throws.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Spine &amp; Knee Protection at Home</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Ramps for sofa/bed/car; traction runners on slick floors.</li>
            <li>Low-impact play sets; avoid repetitive jumps and tight stair sprints.</li>
            <li>Core work: slow figure-8s, cookie-stands, controlled step-ups (as advised).</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">When to Call the Vet Now</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Open-mouth breathing at rest, blue/pale gums, collapse, or heat distress.</li>
            <li>Squinting/pawing at an eye; sudden corneal haze; painful eye—same day.</li>
            <li>Acute hind-end weakness, knuckling, screams on movement, or loss of bladder control.</li>
            <li>Severe ear pain/odor; widespread skin redness with fever; unrelenting itch.</li>
            <li>Repeated regurgitation with lethargy or aspiration signs (cough, fever).</li>
          </ul>

          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm mt-3">
            <strong>Petunia tip:</strong> Turn these into repeatable checklists in Petunia. Attach short videos of gait, breathing sounds,
            and skin/ear changes so your veterinary team sees trends, not snapshots.
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">Frequently Asked Questions</h2>

          <p className="mb-3">
            <strong>What are the most common French Bulldog health problems?</strong><br />
            Airway (BOAS), heat sensitivity, skin &amp; ear disease (fold dermatitis, atopy/yeast, otitis), eye injuries (corneal ulcers;
            dry eye), and musculoskeletal issues like IVDD and patellar luxation appear frequently in primary-care datasets and breed
            reports. The exact mix varies by individual and environment.
          </p>

          <p className="mb-3">
            <strong>How can I prevent problems?</strong><br />
            Keep your dog <strong>lean</strong>, run <strong>heat rules</strong>, use <strong>harness-only</strong> walks, build <strong>weekly hygiene</strong> (folds/ears/eyes), use
            <strong> ramps &amp; traction</strong>, and stay current on <strong>preventive care</strong>. Act early when something changes.
          </p>

          <p className="mb-3">
            <strong>Are Frenchies safe to exercise?</strong><br />
            Yes—<em>short and smart</em>. Favor sniff walks, shaping games, and low-impact conditioning with planned rest/cool-downs. Stop with the
            first sign of noisy breathing; avoid heat and high-arousal fetch in warm weather.
          </p>

          <p className="mb-3">
            <strong>What about surgeries like nares and soft palate?</strong><br />
            Your veterinarian (and often a surgical or airway specialist) will help decide based on signs and exam findings. For the right
            patient, these procedures can improve comfort and safety—paired with weight control and heat management.
          </p>

          <p>
            <strong>Which problems are emergencies?</strong><br />
            Open-mouth breathing at rest, blue/pale gums, collapse, severe eye pain/injury, and acute hind-end weakness with pain or loss of
            bladder control are <strong>go now</strong> situations. When unsure, call your veterinarian or an emergency clinic for guidance.
          </p>
        </section>

        {/* SOURCES */}
        <section id="sources" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">📚 Sources (Selected)</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            {/* Breed & epidemiology */}
            <li>
              Royal Veterinary College (RVC) VetCompass. O’Neill DG, et&nbsp;al. 2021. French Bulldogs differ from other dogs in the UK in propensity for many common disorders.{' '}
              <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC8675495/" target="_blank" rel="noopener noreferrer">
                Open Access (VetCompass study)
              </a>
            </li>
            <li>
              American Kennel Club (AKC). French Bulldog breed overview (temperament, grooming, health themes).{' '}
              <a href="https://www.akc.org/dog-breeds/french-bulldog/" target="_blank" rel="noopener noreferrer">
                https://www.akc.org/dog-breeds/french-bulldog/
              </a>
            </li>

            {/* BOAS & heat */}
            <li>
              Cambridge BOAS Research Group. Brachycephalic obstructive airway syndrome owner resources.{' '}
              <a href="https://www.vet.cam.ac.uk/boas" target="_blank" rel="noopener noreferrer">
                https://www.vet.cam.ac.uk/boas
              </a>
            </li>
            <li>
              Merck Veterinary Manual. <em>Brachycephalic Airway Syndrome</em>.{' '}
              <a href="https://www.merckvetmanual.com/respiratory-system/respiratory-diseases-of-dogs-and-cats/brachycephalic-airway-syndrome" target="_blank" rel="noopener noreferrer">
                https://www.merckvetmanual.com/.../brachycephalic-airway-syndrome
              </a>
            </li>
            <li>
              AVMA. <em>Hot Weather Safety for Pets</em>.{' '}
              <a href="https://www.avma.org/resources/pet-owners/petcare/hot-weather-safety-pets" target="_blank" rel="noopener noreferrer">
                https://www.avma.org/resources/pet-owners/petcare/hot-weather-safety-pets
              </a>
            </li>
            <li>
              ACVAA (American College of Veterinary Anesthesia &amp; Analgesia). Owner resources (anesthesia in brachycephalics).{' '}
              <a href="https://acvaa.org/owner-resources/" target="_blank" rel="noopener noreferrer">
                https://acvaa.org/owner-resources/
              </a>
            </li>

            {/* Skin, ears, allergies */}
            <li>
              Merck Veterinary Manual. <em>Skin Fold Pyoderma (Intertrigo)</em>.{' '}
              <a href="https://www.merckvetmanual.com/integumentary-system/pyoderma/skin-fold-pyoderma-intertrigo" target="_blank" rel="noopener noreferrer">
                https://www.merckvetmanual.com/integumentary-system/pyoderma/skin-fold-pyoderma-intertrigo
              </a>
            </li>
            <li>
              Merck Veterinary Manual (Dog Owner). <em>Atopic Dermatitis (Allergic Skin Disease) in Dogs</em>.{' '}
              <a href="https://www.merckvetmanual.com/dog-owners/skin-disorders-of-dogs/atopic-dermatitis-allergic-skin-disease-in-dogs" target="_blank" rel="noopener noreferrer">
                https://www.merckvetmanual.com/dog-owners/skin-disorders-of-dogs/atopic-dermatitis-allergic-skin-disease-in-dogs
              </a>
            </li>
            <li>
              VCA Animal Hospitals. <em>Otitis Externa in Dogs</em>.{' '}
              <a href="https://vcahospitals.com/know-your-pet/otitis-externa-in-dogs" target="_blank" rel="noopener noreferrer">
                https://vcahospitals.com/know-your-pet/otitis-externa-in-dogs
              </a>
            </li>

            {/* Eyes */}
            <li>
              Merck Veterinary Manual. <em>Corneal Ulcers in Dogs</em>.{' '}
              <a href="https://www.merckvetmanual.com/eye-and-ear/eye-diseases-of-dogs/corneal-ulcers-in-dogs" target="_blank" rel="noopener noreferrer">
                https://www.merckvetmanual.com/eye-and-ear/eye-diseases-of-dogs/corneal-ulcers-in-dogs
              </a>
            </li>
            <li>
              ACVO (American College of Veterinary Ophthalmologists). <em>Common Eye Conditions</em>.{' '}
              <a href="https://www.acvo.org/common-conditions" target="_blank" rel="noopener noreferrer">
                https://www.acvo.org/common-conditions
              </a>
            </li>

            {/* Spine & ortho */}
            <li>
              ACVS (American College of Veterinary Surgeons). <em>Intervertebral Disc Disease</em>.{' '}
              <a href="https://www.acvs.org/small-animal/intervertebral-disc-disease" target="_blank" rel="noopener noreferrer">
                https://www.acvs.org/small-animal/intervertebral-disc-disease
              </a>
            </li>
            <li>
              ACVS. <em>Patellar Luxation</em>.{' '}
              <a href="https://www.acvs.org/small-animal/patellar-luxation" target="_blank" rel="noopener noreferrer">
                https://www.acvs.org/small-animal/patellar-luxation
              </a>
            </li>
            <li>
              VCA Animal Hospitals. <em>Hemivertebrae in Dogs</em>.{' '}
              <a href="https://vcahospitals.com/know-your-pet/hemivertebrae-in-dogs" target="_blank" rel="noopener noreferrer">
                https://vcahospitals.com/know-your-pet/hemivertebrae-in-dogs
              </a>
            </li>
            <li>
              ACVS. <em>Canine Hip Dysplasia</em>.{' '}
              <a href="https://www.acvs.org/small-animal/canine-hip-dysplasia" target="_blank" rel="noopener noreferrer">
                https://www.acvs.org/small-animal/canine-hip-dysplasia
              </a>
            </li>

            {/* GI */}
            <li>
              Merck Veterinary Manual. <em>Hiatal Hernia in Small Animals</em>.{' '}
              <a href="https://www.merckvetmanual.com/digestive-system/diseases-of-the-esophagus-in-small-animals/hiatal-hernia-in-small-animals" target="_blank" rel="noopener noreferrer">
                https://www.merckvetmanual.com/.../hiatal-hernia-in-small-animals
              </a>
            </li>

            {/* Preventive & dental */}
            <li>
              AAHA. <em>2022 Canine Vaccination Guidelines</em>.{' '}
              <a href="https://www.aaha.org/resources/2022-aaha-canine-vaccination-guidelines/" target="_blank" rel="noopener noreferrer">
                https://www.aaha.org/resources/2022-aaha-canine-vaccination-guidelines/
              </a>
            </li>
            <li>
              WSAVA. <em>Global Guidelines</em> (Nutrition &amp; more).{' '}
              <a href="https://wsava.org/global-guidelines/" target="_blank" rel="noopener noreferrer">
                https://wsava.org/global-guidelines/
              </a>
            </li>
            <li>
              VOHC (Veterinary Oral Health Council). <em>Accepted Products</em>.{' '}
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
