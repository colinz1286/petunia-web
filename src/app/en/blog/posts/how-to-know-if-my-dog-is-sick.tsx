'use client';

import Head from 'next/head';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function HowToKnowIfMyDogIsSick() {
  const locale = useLocale();

  const title =
    'How to Know If My Dog Is Sick: Subtle Signs, Red Flags, Home Checks, Vet Care, Costs, and a Practical 72-Hour Plan';
  const date = 'August 29, 2025';
  const categories = ['owner', 'vet'] as const;

  const categoryLabels: Record<string, string> = {
    owner: 'Pet Owners',
    vet: 'Veterinary Clinics',
    boarding: 'Boarding',
    daycare: 'Daycare',
    rescue: 'Rescues',
    sitter: 'Pet Sitters',
    walker: 'Dog Walkers',
    breeder: 'Breeders',
  };

  const description =
    'An evidence-informed, 5,000+ word guide to spotting when a dog might be sick: what to watch for, how to do quick home checks (TPR, gums/CRT, hydration), which red flags need same-day care, what a vet is likely to do, realistic U.S. cost ranges, and a calm 72-hour owner playbook. Includes puppy/senior and brachycephalic notes, vomiting vs. regurgitation, GI bleeding clues (melena), and when to call Poison Control.';

  return (
    <>
      <Head>
        <title>{title} – Petunia Blog</title>
        <meta name="description" content={description} />
        {/* Per user preference, avoid the word "index" here. */}
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
            <li><a href="#whats-sick" className="underline hover:opacity-80">What &#39;Sick&#39; Looks Like</a></li>
            <li><a href="#home-checks" className="underline hover:opacity-80">Quick Home Checks (TPR, Gums, Hydration)</a></li>
            <li><a href="#gi" className="underline hover:opacity-80">Vomiting, Regurgitation, Diarrhea</a></li>
            <li><a href="#breathing" className="underline hover:opacity-80">Cough, Breathing, Blue/Pale Gums</a></li>
            <li><a href="#energy" className="underline hover:opacity-80">Lethargy, Weakness, Pain, Behavior</a></li>
            <li><a href="#pee-poop" className="underline hover:opacity-80">Water, Pee, Poop Changes</a></li>
            <li><a href="#skin-coat" className="underline hover:opacity-80">Skin, Coat, Ears, Eyes, Nose</a></li>
            <li><a href="#who-needs-what" className="underline hover:opacity-80">Puppies, Seniors, Brachycephalics</a></li>
            <li><a href="#red-flags" className="underline hover:opacity-80">When to Go Now vs. Soon</a></li>
            <li><a href="#at-the-vet" className="underline hover:opacity-80">What Vets Do (&amp; Typical Costs)</a></li>
            <li><a href="#plan72" className="underline hover:opacity-80">A 72-Hour Owner Plan</a></li>
            <li><a href="#poison" className="underline hover:opacity-80">If You Suspect Poisoning</a></li>
            <li><a href="#faq" className="underline hover:opacity-80">FAQ</a></li>
            <li><a href="#sources" className="underline hover:opacity-80">Sources (Selected)</a></li>
          </ul>
        </nav>

        {/* TL;DR */}
        <section id="tldr" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Short Answer (TL;DR)</h2>
          <div className="space-y-3">
            <p>
              Dogs often hide illness until it is more advanced. Watch for clusters of changes: appetite and thirst shifts, vomiting/diarrhea, excessive lethargy, cough or labored breathing, limping or pain, pale or blue gums, fever, behavior change, weight loss, and anything that feels suddenly &#34;not my dog.&#34; If breathing looks hard, gums are blue/purple, there is nonstop vomiting, blood in stool or vomit, collapse, or extreme pain, treat it as an emergency.
            </p>
            <p>
              You can do quick home checks: temperature, heart rate, respiratory rate; gum color and capillary refill; hydration; and a brief nose-to-tail exam. Normal adult temperature is roughly 99.5–102.5°F; resting respiratory rate often 18–34 breaths/min; heart rate 70–120 beats/min (smaller dogs higher). Pale gums can mean anemia or internal bleeding; blue gums mean not enough oxygen and are an emergency. If unsure, call your vet or an emergency clinic.
            </p>
            <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
              <strong>Petunia tip:</strong> In Petunia, add a monthly &#34;health snapshot&#34; task: weigh your dog, take a 30-second video of normal breathing at rest, record appetite/thirst, and snap gum photos in good light. Trends beat single moments.
            </div>
          </div>
        </section>

        {/* What 'Sick' Looks Like */}
        <section id="whats-sick" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">What &#39;Sick&#39; Looks Like in Real Life</h2>
          <p className="mb-3">
            Most owners notice sickness as a vibe change first: your dog seems quiet, off routine, or less engaged. Look for specific categories of change:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Energy/activity:</strong> sleeping far more, reluctant to move, refusing walks, hiding, or pacing restlessly.</li>
            <li><strong>Appetite/thirst:</strong> eating less or not at all, raiding the trash, drinking dramatically more or less, urinating more/less or having accidents.</li>
            <li><strong>GI signs:</strong> vomiting, retching, regurgitation, diarrhea, constipation, painful belly, black/tarry stool, or red blood.</li>
            <li><strong>Breathing:</strong> coughing, gagging, wheezing, open-mouth breathing, rapid or effortful breaths, blue-tinged gums/tongue.</li>
            <li><strong>Pain/mobility:</strong> limping, yelping, hunched back or &#34;praying&#34; posture, reluctance to jump or use stairs.</li>
            <li><strong>Skin/ears/eyes:</strong> hot spots, crusts, hair loss, shaking head, ear odor, squinting, discharge.</li>
            <li><strong>Neuro/behavior:</strong> disorientation, head tilt, wobbliness, seizures, sudden anxiety or aggression.</li>
            <li><strong>Weight/body shape:</strong> visible ribs/muscle loss or unexpected pot-belly/bloat.</li>
          </ul>
          <p className="text-sm text-gray-600 mt-2">
            One abnormal sign can be benign. Multiple changes together—especially rapid onset—deserve a same-day call to your vet.
          </p>
        </section>

        {/* Home checks */}
        <section id="home-checks" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Quick Home Checks: TPR, Gums/CRT, Hydration, and a 2-Minute Exam</h2>

          <h3 className="text-lg font-semibold mt-2 mb-1">1) Take TPR (Temperature, Pulse, Respiration)</h3>
          <ul className="list-disc pl-5 space-y-2 mb-3">
            <li><strong>Temperature:</strong> use a digital rectal thermometer with lubricant. Normal adult range is about 99.5–102.5°F (38.3–39.2°C). &gt;103°F suggests fever; &lt;99°F is low and concerning. Recheck once, then call your vet if abnormal.</li>
            <li><strong>Pulse/heart rate:</strong> feel inside the hind leg (femoral artery) or place your fingers on the chest behind the elbow. Count beats for 15 seconds ×4. Many adults rest at 70–120 beats/min (smaller dogs trend faster). Note rhythm or faint/weak pulse.</li>
            <li><strong>Respiratory rate (at rest/asleep):</strong> count chest rises for 30 seconds ×2. Many healthy adults are ~18–34 breaths/min when truly at rest. If breathing seems labored even at rest, treat as urgent.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">2) Check Mucous Membranes &amp; CRT</h3>
          <ul className="list-disc pl-5 space-y-2 mb-3">
            <li><strong>Color:</strong> lift the lip. Healthy gums are pink and moist. <strong>Pale/white</strong> can point to anemia or blood loss. <strong>Blue/purple</strong> (cyanosis) means poor oxygen—emergency. <strong>Yellow</strong> (jaundice) can mean liver or blood cell problems. <strong>Brick-red</strong> can reflect heatstroke or inflammation.</li>
            <li><strong>Capillary refill time (CRT):</strong> press a pink area until it blanches white, release, and count. Normal refill is usually &lt;2 seconds. Prolonged CRT can signal poor perfusion/shock and needs veterinary evaluation.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">3) Assess Hydration</h3>
          <ul className="list-disc pl-5 space-y-2 mb-3">
            <li><strong>Gums feel:</strong> moist and slick is normal; tacky or dry suggests dehydration (context matters—panting can dry gums temporarily).</li>
            <li><strong>Skin turgor:</strong> gently lift skin over the shoulder blades; it should snap back quickly. Slow return suggests dehydration (age, weight, and skin elasticity affect this test).</li>
            <li><strong>Eyes:</strong> in significant dehydration, eyes can look dull or sunken; severe dehydration and shock are emergencies.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">4) A 2-Minute Nose-to-Tail Scan</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Nose/mouth:</strong> excessive drool, foreign objects, foul odor, ulcers, broken teeth.</li>
            <li><strong>Neck/chest:</strong> cough, honk, wheeze, effort to breathe, extended neck to breathe.</li>
            <li><strong>Belly:</strong> tense, painful, distended, or drum-like left side—especially with unproductive retching.</li>
            <li><strong>Limbs/spine:</strong> reluctance to move, pain on touch, knuckling, or stumbling.</li>
            <li><strong>Skin/coat:</strong> fleas/ticks, bald patches, scabs, hot spots, ear redness/odor.</li>
            <li><strong>Bathroom habits:</strong> urine volume/frequency changes; feces consistency, color, blood, or black/tarry appearance.</li>
          </ul>

          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm mt-3">
            <strong>Safety first:</strong> do not struggle with a painful or anxious dog to check gums or temperature. If your dog resists, call your veterinarian for guidance instead.
          </div>
        </section>

        {/* GI */}
        <section id="gi" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Vomiting, Regurgitation, Diarrhea: What Owners Can Tell</h2>

          <h3 className="text-lg font-semibold mt-2 mb-1">Vomiting vs. Regurgitation</h3>
          <ul className="list-disc pl-5 space-y-2 mb-3">
            <li><strong>Vomiting</strong> is active: nausea, drooling, abdominal heaves; contents often digested, may contain bile or foam.</li>
            <li><strong>Regurgitation</strong> is passive: material (often undigested food or saliva) flows back without effort shortly after eating/drinking; suggests esophageal issues.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">When Vomiting/Diarrhea Need Faster Care</h3>
          <ul className="list-disc pl-5 space-y-2 mb-3">
            <li>Repeated vomiting (more than 2–3 times in a few hours), inability to keep water down, or vomiting plus lethargy.</li>
            <li><strong>Blood</strong> in vomit or stool; <strong>black/tarry stool (melena)</strong> or &#34;coffee-ground&#34; vomit can indicate bleeding higher in the GI tract.</li>
            <li>Severe belly pain, distended abdomen, or &#34;praying position.&#34;</li>
            <li>Puppies, toy breeds, and seniors dehydrate quickly—err on the side of prompt exams.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Common Triggers &amp; What Vets Look For</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Dietary indiscretion:</strong> trash, fatty leftovers, sudden food changes.</li>
            <li><strong>Infections/parasites:</strong> viral (e.g., parvo in unvaccinated pups), bacterial, giardia, worms.</li>
            <li><strong>Toxins/medications:</strong> NSAIDs, chocolate, xylitol, grapes/raisins, rodenticide, household cleaners.</li>
            <li><strong>Systemic disease:</strong> kidney, liver, endocrine disorders.</li>
            <li><strong>Obstruction/foreign body:</strong> toys, socks, bones—especially with persistent vomiting and abdominal pain.</li>
          </ul>

          <div className="rounded-md border border-[#d9cfc2] p-4 text-sm mt-3">
            <strong>Owner checklist for the clinic:</strong> timeline, frequency, relation to meals, stool photo, list of foods/treats/meds, access to trash/yard, and any toxins. Bring a fresh stool sample in a sealed bag if diarrhea is present.
          </div>
        </section>

        {/* Breathing */}
        <section id="breathing" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Cough, Breathing Trouble, Blue or Pale Gums</h2>
          <p className="mb-3">
            Any dog struggling to breathe needs prompt care. Signs include rapid breathing at rest, open-mouth breathing, belly heaving, neck extended to breathe, wheeze/whistle, or a wide-stance sitting posture. <strong>Blue/purple gums</strong> mean poor oxygenation—this is an emergency. <strong>Pale/white gums</strong> suggest poor perfusion or anemia.
          </p>
          <h3 className="text-lg font-semibold mt-2 mb-1">Cough &amp; Respiratory Patterns</h3>
          <ul className="list-disc pl-5 space-y-2 mb-3">
            <li><strong>&#34;Honk&#34; cough</strong> (especially toy breeds) can be tracheal collapse.</li>
            <li><strong>Deep moist cough</strong> with exercise intolerance can be heart or lung disease.</li>
            <li><strong>After eating/drinking, one-sided nasal discharge</strong> plus foul odor can be dental or oronasal fistula.</li>
            <li><strong>Non-productive retching plus bloated, drum-like abdo</strong>men—think bloat (GDV)—go now.</li>
          </ul>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Emergency posture note:</strong> dogs with serious breathing issues often stand or sit with forelegs splayed and neck extended, avoiding lying down. Do not force them to lie; head to the vet.
          </div>
        </section>

        {/* Energy/pain/behavior */}
        <section id="energy" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Excessive Lethargy, Weakness, Pain, and Behavior Change</h2>
          <p className="mb-3">
            Lethargy is a top owner complaint and a common early clue. True red flags are <strong>collapse</strong>, <strong>unwillingness to rise</strong>, <strong>profound weakness</strong>, or <strong>pain signs</strong> (yelping, trembling, refusal to be touched, hunched back, &#34;praying position&#34;). Sudden disorientation, head tilt, circling, or seizures warrant urgent care.
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Pain:</strong> look for flinching, guarding, panting at rest, pacing, or aggression when handled.</li>
            <li><strong>Neurologic:</strong> stumbling, unequal pupils, eye flicking (nystagmus), sudden behavior change.</li>
            <li><strong>Heat stress:</strong> heavy panting, bright red gums, drooling, vomiting/diarrhea—cool gently and seek care quickly.</li>
          </ul>
        </section>

        {/* Pee/poop/water */}
        <section id="pee-poop" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Water, Pee, and Poop Changes: What They Often Mean</h2>
          <h3 className="text-lg font-semibold mt-2 mb-1">Drinking and Urinating More (or Less)</h3>
          <p className="mb-3">
            A sustained increase in thirst and urine output can be an early sign of diabetes, kidney disease, Cushing&#39;s disease, uterine infection (in intact females), or high calcium levels—among other causes. Sudden inability to urinate, straining, or frequent small dribbles merits urgent evaluation; complete urinary blockage is an emergency.
          </p>

          <h3 className="text-lg font-semibold mt-2 mb-1">Feces: Color/Consistency Clues</h3>
          <ul className="list-disc pl-5 space-y-2 mb-3">
            <li><strong>Black/tarry stool (melena):</strong> digested blood—often from the stomach/small intestine. Get prompt care.</li>
            <li><strong>Bright red streaks (hematochezia):</strong> large-bowel bleeding; can be urgent if severe or persistent.</li>
            <li><strong>Mucus/watery diarrhea:</strong> common with colitis, parasites, dietary indiscretion, or infection.</li>
            <li><strong>Straining with little output:</strong> large-bowel colitis, constipation, or obstruction—especially if painful or lethargic.</li>
          </ul>
        </section>

        {/* Skin/ears/eyes/nose */}
        <section id="skin-coat" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Skin, Coat, Ears, Eyes, and Nose</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Skin/coat:</strong> persistent itch, hair loss, hot spots, crusts, odor, or bruising/petechiae.</li>
            <li><strong>Ears:</strong> head shaking, redness, pain, discharge, bad smell—especially after swimming or allergies.</li>
            <li><strong>Eyes:</strong> squinting, redness, discharge, cloudiness, unequal pupils—eye problems get worse fast.</li>
            <li><strong>Nose:</strong> chronic discharge, bleeding, or noisy breathing; unilateral discharge plus dental odor can be oral-nasal connection.</li>
          </ul>
        </section>

        {/* Who needs what */}
        <section id="who-needs-what" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Puppies, Seniors, and Flat-Faced Dogs: Extra Considerations</h2>
          <ul className="list-disc pl-5 space-y-2 mb-3">
            <li><strong>Puppies:</strong> small energy reserves; vomiting/diarrhea can dehydrate and drop blood sugar quickly. Parvo risk if unvaccinated. Fever, bloody diarrhea, or repeated vomiting—go same day.</li>
            <li><strong>Seniors:</strong> higher rates of kidney, liver, endocrine, and cardiac disease; subtle weight/muscle changes matter. Aim for twice-yearly exams.</li>
            <li><strong>Brachycephalics (flat-faced):</strong> more prone to airway issues and heat stress; noisy breathing is common but labored breathing is never normal—seek care quickly.</li>
          </ul>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Travel/outdoors:</strong> new water sources and wildlife exposure raise risk for leptospirosis and GI parasites. If your dog is suddenly sick after hikes, swimming, or travel, tell your vet.
          </div>
        </section>

        {/* Red flags */}
        <section id="red-flags" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">When to Go Now vs. When to Book Soon</h2>
          <div className="grid gap-3">
            <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4">
              <h3 className="font-semibold mb-1">Same-Day / Emergency (Go Now)</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Blue/purple gums or tongue; obvious breathing distress; open-mouth breathing at rest.</li>
                <li>Repeated vomiting, unable to keep water down; vomiting blood; black/tarry stool; coffee-ground vomit.</li>
                <li>Non-productive retching with a distended, drum-like abdomen (concern for bloat/GDV).</li>
                <li>Collapse, inability to stand, severe weakness, seizures, or uncontrolled pain.</li>
                <li>Suspected toxin exposure (xylitol, chocolate, grapes/raisins, rodenticide, medications, cleaners).</li>
                <li>Major trauma, heavy bleeding, eye injuries, or inability to urinate.</li>
              </ul>
            </div>
            <div className="rounded-md border border-[#d9cfc2] p-4">
              <h3 className="font-semibold mb-1">See the Vet Soon (Within 24–48 Hours)</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>New or worsening cough, especially with poor exercise tolerance.</li>
                <li>Mild vomiting or diarrhea that persists &gt;24 hours, or any GI signs in puppies/seniors.</li>
                <li>Increased thirst/urination over several days, weight loss, or appetite change.</li>
                <li>Lameness, back pain, or behavior changes that don&#39;t resolve quickly.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* At the vet */}
        <section id="at-the-vet" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">What to Expect at the Vet (&amp; Typical U.S. Costs)</h2>
          <p className="mb-3">
            Vets start with history and a focused exam, then tailor diagnostics. Common tests include complete blood count and chemistry panel, urinalysis, fecal test, X-rays, and sometimes ultrasound. Costs vary by region and case complexity, but rough ranges can help you plan. These are not quotes—ask your clinic for estimates.
          </p>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>Exam fee:</strong> ~${'{'}50–150{'}'} (ER triage can be higher).</li>
            <li><strong>Basic bloodwork (CBC/chemistry):</strong> ~${'{'}100–200{'}'}; add-on thyroid or specific tests vary.</li>
            <li><strong>Urinalysis/fecal:</strong> ~${'{'}25–75{'}'} each.</li>
            <li><strong>X-rays:</strong> ~${'{'}100–400+{'}'} depending on number of views, region, and sedation.</li>
            <li><strong>Abdominal ultrasound:</strong> can be ~${'{'}300–600+{'}'}.</li>
            <li><strong>Hospitalization/IV fluids/meds:</strong> highly variable by case and length of stay.</li>
          </ul>
          <p className="text-sm text-gray-600">
            Ask what each test answers, what could change treatment, and which steps are most impactful if you need to stage care.
          </p>
        </section>

        {/* Plan 72 */}
        <section id="plan72" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">A Calm 72-Hour Owner Plan</h2>

          <h3 className="text-lg font-semibold mt-2 mb-1">Hour 0–6: Stabilize &amp; Observe</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Run the home checks (TPR, gums/CRT, hydration). If any emergency sign appears, go now.</li>
            <li>Offer water; if vomiting, small sips every 15–20 minutes. Withhold food for 6–8 hours if vomiting; then offer a bland meal (per vet guidance).</li>
            <li>Isolate from trash/yard; gather meds/foods and timeline notes for your vet.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Hour 6–24: Decide on Care Path</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>If signs persist or your dog worsens—schedule a same-day exam.</li>
            <li>Collect a fresh stool if diarrhea; capture a calm-breathing video while asleep for your vet to review.</li>
            <li>Log fluids in/out, appetite, and energy in Petunia or your notes app.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Days 2–3: Follow Through</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Follow diet/med instructions precisely; avoid treats/supplements unless approved.</li>
            <li>Recheck TPR daily; note gum color and hydration; watch stool quality.</li>
            <li>If new red flags appear (bloody stool, repeated vomiting, breathing change, blue/pale gums), return immediately.</li>
          </ul>

          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm mt-3">
            <strong>Petunia tip:</strong> Create a shared &#34;Care Plan&#34; card for the household with medication times, feeding instructions, and what to monitor so no dose is missed.
          </div>
        </section>

        {/* Poisoning */}
        <section id="poison" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">If You Suspect Poisoning</h2>
          <p className="mb-3">
            Do not induce vomiting or give home antidotes unless a veterinarian or a poison control center specifically tells you to. Secure any packaging and note the amount and timing. Then call:
          </p>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>ASPCA Animal Poison Control Center:</strong> (888) 426-4435 (fee may apply).</li>
            <li><strong>Pet Poison Helpline:</strong> (855) 764-7661 (fee may apply; they coordinate with your veterinarian).</li>
            <li>Your local emergency veterinary hospital.</li>
          </ul>
          <p className="text-sm text-gray-600">
            Typical toxin signs include drooling, vomiting/diarrhea, tremors/seizures, agitation or depression, irregular heartbeat, or temperature changes. If your dog collapses, has trouble breathing, or seizes, head to emergency care immediately.
          </p>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">Frequently Asked Questions</h2>

          <p className="mb-3">
            <strong>What is a normal temperature, heart rate, and breathing rate?</strong><br />
            Many healthy adult dogs run ~99.5–102.5°F with heart rates ~70–120 beats/min and resting breaths ~18–34/min. Puppies, small breeds, stress, and excitement can increase rates. Measure when calm.
          </p>

          <p className="mb-3">
            <strong>How can I tell dehydration at home?</strong><br />
            Tacky/dry gums, slow skin return over the shoulders, and dull/sunken eyes are classic. Context matters—panting dries gums; older or thin dogs can have looser skin. If you suspect dehydration, call your vet.
          </p>

          <p className="mb-3">
            <strong>My dog&#39;s gums look pale. Is that always an emergency?</strong><br />
            Pale/white gums can indicate anemia, blood loss, or poor circulation and deserve prompt evaluation. If pale gums occur with weakness, collapse, or belly swelling, go now.
          </p>

          <p className="mb-3">
            <strong>How do I know if a cough is serious?</strong><br />
            Cough with labored breathing, collapse, blue gums, inability to rest, or poor exercise tolerance needs urgent care. A mild, occasional cough in a bright dog still warrants a call if it persists beyond a day or two.
          </p>

          <p className="mb-3">
            <strong>What about bloat?</strong><br />
            Restlessness, non-productive retching, a rapidly enlarging drum-like abdomen, and salivation in a large/deep-chested dog are classic. Go immediately—minutes matter.
          </p>

          <p className="mb-3">
            <strong>Is black stool always blood?</strong><br />
            True tarry black stool (melena) usually signifies digested blood and needs veterinary evaluation. Snap a photo for your vet; bring a fresh sample if possible.
          </p>

          <p className="text-xs text-gray-600">
            Educational content only and not a substitute for individualized veterinary advice. If your dog looks worse at any time, seek in-person care promptly.
          </p>
        </section>

        {/* Sources */}
        <section id="sources" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">📚 Sources (Selected)</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            <li>
              Merck/MSD Veterinary Manual: Normal physiological values, vomiting/regurgitation, GI bleeding &amp; melena, dehydration assessment, GDV overview, triage signs, renal dysfunction.{' '}
              <a href="https://www.merckvetmanual.com/multimedia/table/normal-physiological-values-for-dogs" target="_blank" rel="noopener noreferrer">Normal values</a>{' '}
              | <a href="https://www.merckvetmanual.com/dog-owners/digestive-disorders-of-dogs/vomiting-in-dogs" target="_blank" rel="noopener noreferrer">Vomiting (owners)</a>{' '}
              | <a href="https://www.merckvetmanual.com/dog-owners/digestive-disorders-of-dogs/introduction-to-digestive-disorders-of-dogs" target="_blank" rel="noopener noreferrer">GI overview</a>{' '}
              | <a href="https://www.merckvetmanual.com/therapeutics/fluid-therapy/the-fluid-resuscitation-plan-in-animals" target="_blank" rel="noopener noreferrer">Dehydration signs</a>{' '}
              | <a href="https://www.merckvetmanual.com/digestive-system/diseases-of-the-stomach-and-intestines-in-small-animals/gastric-dilation-and-volvulus-in-small-animals" target="_blank" rel="noopener noreferrer">GDV</a>{' '}
              | <a href="https://www.merckvetmanual.com/emergency-medicine-and-critical-care/evaluation-and-initial-treatment-of-small-animal-emergency-patients/initial-triage-and-resuscitation-of-small-animal-emergency-patients" target="_blank" rel="noopener noreferrer">Triage</a>{' '}
              | <a href="https://www.merckvetmanual.com/urinary-system/noninfectious-diseases-of-the-urinary-system-in-small-animals/renal-dysfunction-in-dogs-and-cats" target="_blank" rel="noopener noreferrer">Renal dysfunction</a>
            </li>
            <li>
              VCA Animal Hospitals: Fever/temperature, anemia/pale gums, cyanosis, GDV signs.{' '}
              <a href="https://vcahospitals.com/know-your-pet/taking-your-pets-temperature" target="_blank" rel="noopener noreferrer">Taking temperature</a>{' '}
              | <a href="https://vcahospitals.com/know-your-pet/anemia-in-dogs" target="_blank" rel="noopener noreferrer">Anemia</a>{' '}
              | <a href="https://vcahospitals.com/know-your-pet/cyanosis-in-dogs" target="_blank" rel="noopener noreferrer">Cyanosis</a>{' '}
              | <a href="https://vcahospitals.com/know-your-pet/bloat-gastric-dilatation-and-volvulus-in-dogs" target="_blank" rel="noopener noreferrer">Bloat/GDV</a>
            </li>
            <li>
              AVMA &amp; AAHA owner resources: Emergency red flags; fluid therapy and dehydration estimates.{' '}
              <a href="https://www.avma.org/resources/pet-owners/emergencycare/13-animal-emergencies-require-immediate-veterinary-consultation-andor-care" target="_blank" rel="noopener noreferrer">Emergency list</a>{' '}
              | <a href="https://www.aaha.org/resources/2024-aaha-fluid-therapy-guidelines-for-dogs-and-cats/section-2-general-fluid-therapy-principles/" target="_blank" rel="noopener noreferrer">Fluid therapy overview</a>
            </li>
            <li>
              Cornell University (Riney Canine Health Center): Diarrhea, GDV/bloat overview.{' '}
              <a href="https://www.vet.cornell.edu/departments-centers-and-institutes/riney-canine-health-center/canine-health-information/diarrhea" target="_blank" rel="noopener noreferrer">Diarrhea</a>{' '}
              | <a href="https://www.vet.cornell.edu/departments-centers-and-institutes/riney-canine-health-center/canine-health-information/gastric-dilatation-volvulus-gdv-or-bloat" target="_blank" rel="noopener noreferrer">GDV</a>
            </li>
            <li>
              CDC: Leptospirosis signs in dogs.{' '}
              <a href="https://www.cdc.gov/leptospirosis/pets/index.html" target="_blank" rel="noopener noreferrer">CDC leptospirosis</a>
            </li>
            <li>
              Costs (non-binding anchors; vary widely by market):{' '}
              <a href="https://www.carecredit.com/vetmed/costs/" target="_blank" rel="noopener noreferrer">CareCredit diagnostics</a>{' '}
              | <a href="https://www.carecredit.com/well-u/pet-care/x-ray-cost-for-dogs/" target="_blank" rel="noopener noreferrer">X-ray ranges</a>{' '}
              | <a href="https://www.petmd.com/dog/procedure/blood-work-for-dogs-and-cats" target="_blank" rel="noopener noreferrer">PetMD bloodwork</a>{' '}
              | <a href="https://www.marketwatch.com/insurance-services/pet-insurance/how-much-does-a-vet-visit-cost/" target="_blank" rel="noopener noreferrer">MarketWatch visit</a>
            </li>
          </ul>
          <p className="text-xs text-gray-600 mt-4">
            Figures and guidance are illustrative. Confirm specifics (diagnostics, itemized costs, anesthesia plans) with your veterinary team.
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
