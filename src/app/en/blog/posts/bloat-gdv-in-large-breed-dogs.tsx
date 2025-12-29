'use client';

import Head from 'next/head';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function BloatGDVDogs() {
  const locale = useLocale();

  const title =
    'Bloat (GDV) in Large Breed Dogs: Recognizing the Warning Signs and Reducing Risk';
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

  const slug = 'bloat-gdv-in-large-breed-dogs';

  const description =
    'A comprehensive, evidence-aware guide to canine bloat (gastric dilatation-volvulus): what it is, early signs, emergency response, diagnostics and surgery, preventive gastropexy, feeding and exercise rules, and SOPs for households and boarding/daycare facilities.';

  const canonicalUrl = `https://www.petuniapets.com/${locale}/blog/${slug}`;

  return (
    <>
      <Head>
        <title>{title} – Petunia Blog</title>
        <meta name="description" content={description} />
        <meta name="robots" content="all" />
        <link rel="canonical" href={canonicalUrl} />
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
            <li>
              <a href="#tldr" className="underline hover:opacity-80">
                TL;DR
              </a>
            </li>
            <li>
              <a href="#what-is-gdv" className="underline hover:opacity-80">
                What GDV Is
              </a>
            </li>
            <li>
              <a href="#mechanics" className="underline hover:opacity-80">
                Why It Turns Deadly
              </a>
            </li>
            <li>
              <a href="#breeds-risk" className="underline hover:opacity-80">
                Breeds &amp; Risk Factors
              </a>
            </li>
            <li>
              <a href="#warning-signs" className="underline hover:opacity-80">
                Early Warning Signs
              </a>
            </li>
            <li>
              <a href="#emergency" className="underline hover:opacity-80">
                Emergency Response
              </a>
            </li>
            <li>
              <a href="#diagnosis-treatment" className="underline hover:opacity-80">
                Diagnosis &amp; Treatment
              </a>
            </li>
            <li>
              <a href="#gastropexy" className="underline hover:opacity-80">
                Preventive Gastropexy
              </a>
            </li>
            <li>
              <a href="#prevention" className="underline hover:opacity-80">
                Daily Risk Reduction
              </a>
            </li>
            <li>
              <a href="#feeding" className="underline hover:opacity-80">
                Feeding &amp; Exercise Rules
              </a>
            </li>
            <li>
              <a href="#boarding" className="underline hover:opacity-80">
                Boarding/Daycare Notes
              </a>
            </li>
            <li>
              <a href="#home-sops" className="underline hover:opacity-80">
                Checklists &amp; SOPs
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
          <h2 className="text-2xl font-semibold mb-3">Short Answer (TL;DR)</h2>

          <p className="mb-4">
            <strong>Bloat (gastric dilatation-volvulus, GDV)</strong> is a life-threatening emergency in which a dog&apos;s stomach
            rapidly distends with gas (and sometimes food or fluid) and then twists. The twist traps pressure, cuts off blood flow,
            and can send the dog into shock within hours. Large, deep-chested dogs are most vulnerable, but any dog with the right
            body shape can be at risk.
          </p>

          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm mb-4">
            <p className="mb-2">
              <strong>Two signs that should immediately put GDV on your radar:</strong>
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                <strong>Unproductive retching</strong> (repeated attempts to vomit with little or nothing coming up)
              </li>
              <li>
                <strong>Sudden distress</strong> (pacing, anxiety, unable to get comfortable), often with drooling and a tight belly
              </li>
            </ul>
            <p className="mt-3 mb-0">
              If you see these in a high-risk dog, assume it is an emergency until proven otherwise.
            </p>
          </div>

          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Petunia tip:</strong> Treat GDV like a fire drill. Program the nearest 24/7 ER in your phone, post it on the fridge,
            and do a dry run drive once so you know the route under stress.
          </div>
        </section>

        {/* WHAT IS GDV */}
        <section id="what-is-gdv" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">What GDV Is (Plain-Language Overview)</h2>

          <p className="mb-3">
            The term <em>gastric dilatation-volvulus</em> describes two linked events.
            First, the stomach <strong>distends</strong> (dilatation) with gas, food, and/or fluid.
            Second, it <strong>rotates</strong> (volvulus), trapping contents and sealing off the normal entry and exit paths.
            Once the stomach twists, dogs cannot burp or vomit effectively, and pressure rises quickly.
          </p>

          <p className="mb-3">
            People often say &ldquo;bloat&rdquo; to mean any swollen belly, but GDV is specifically the dangerous combination where rotation occurs.
            The practical owner rule is simple: if your dog is retching with no vomit and looks acutely distressed, do not spend time trying to decide
            which version it is. Go to the ER.
          </p>

          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <p className="mb-2">
              <strong>Two related terms you may hear at the hospital:</strong>
            </p>
            <ul className="list-disc pl-5 space-y-1 mb-0">
              <li>
                <strong>Gastric dilatation:</strong> the stomach is enlarged, but may not be twisted
              </li>
              <li>
                <strong>GDV:</strong> the stomach is enlarged and twisted, and surgery is usually needed
              </li>
            </ul>
          </div>
        </section>

        {/* MECHANICS */}
        <section id="mechanics" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Why It Turns Deadly So Fast</h2>

          <p className="mb-3">
            As the stomach inflates and rotates, it compresses major abdominal veins, decreasing blood return to the heart.
            Blood pressure falls, organs become oxygen-starved, and the dog enters <strong>shock</strong>.
            The heart becomes electrically unstable, which increases the risk of <strong>arrhythmias</strong>.
            Meanwhile, the stomach wall can lose blood supply, become ischemic, and in severe cases necrotic.
          </p>

          <p className="mb-3">
            GDV is dangerous not because it looks dramatic, but because it creates a rapid internal cascade.
            Owners can do almost nothing at home to reverse it safely. The winning move is speed: recognize, call, transport.
          </p>

          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <p className="mb-2">
              <strong>Most important mindset:</strong> the best outcome is a fast evaluation that turns out to be a false alarm,
              not a delayed arrival for a true GDV.
            </p>
            <p className="mb-0">
              If you are wrong and it is not GDV, you still did the right thing by treating the signs with urgency.
            </p>
          </div>
        </section>

        {/* BREEDS & RISK */}
        <section id="breeds-risk" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Breeds &amp; Risk Factors</h2>

          <p className="mb-3">
            GDV risk is strongly linked to <strong>body shape</strong>, especially a <strong>deep, narrow chest</strong>.
            Large and giant breeds are overrepresented, but mixed-breed dogs with similar anatomy can also be vulnerable.
            Breeds commonly cited by veterinary sources include <strong>Great Danes</strong>, <strong>Weimaraners</strong>, <strong>Saint Bernards</strong>,
            <strong>Irish Setters</strong>, <strong>German Shepherd Dogs</strong>, and others. Deep-chested sporting and working dogs often show up on risk lists.
          </p>

          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm mb-4">
            <p className="mb-2">
              <strong>High-risk physical traits:</strong>
            </p>
            <ul className="list-disc pl-5 space-y-1 mb-0">
              <li>Deep, narrow thorax (a &ldquo;tall&rdquo; chest front-to-back compared to side-to-side)</li>
              <li>Large or giant size, especially as the dog ages</li>
              <li>Family history of GDV in a first-degree relative</li>
            </ul>
          </div>

          <h3 className="text-lg font-semibold mt-2 mb-1">Risk factors you can influence (partially)</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>
              <strong>Meal size and frequency:</strong> one very large meal daily is a common risk pattern
            </li>
            <li>
              <strong>Speed of eating:</strong> rapid gulping and competitive feeding environments increase risk
            </li>
            <li>
              <strong>Stress and arousal:</strong> anxious or excitable temperament, especially around meals, can raise risk
            </li>
            <li>
              <strong>Activity timing:</strong> intense post-meal exercise is a preventable mistake
            </li>
            <li>
              <strong>Body condition:</strong> aim for lean and athletic, avoiding extremes in either direction
            </li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Risk factors you cannot change</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Chest conformation and overall anatomy</li>
            <li>Age-related risk increase</li>
            <li>Genetic risk in some lines</li>
            <li>Past GDV episode (recurrence risk without gastropexy is higher)</li>
          </ul>

          <p className="mb-0">
            The practical takeaway: you cannot &ldquo;prevent&rdquo; GDV with one hack, but you can stack habits in your favor,
            and you can discuss <strong>preventive gastropexy</strong> for dogs that truly live in the high-risk bucket.
          </p>
        </section>

        {/* WARNING SIGNS */}
        <section id="warning-signs" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Early Warning Signs You Should Never Ignore</h2>

          <p className="mb-3">
            Owners often expect a dramatic swollen belly first. In real life, the earliest sign is frequently behavioral:
            a dog that suddenly cannot settle, looks uncomfortable, and starts retching. Abdominal distension may be subtle early,
            especially in large dogs.
          </p>

          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm mb-4">
            <p className="mb-2">
              <strong>Classic GDV warning cluster:</strong>
            </p>
            <ul className="list-disc pl-5 space-y-1 mb-0">
              <li>
                <strong>Unproductive retching</strong> (repeated attempts, nothing comes up)
              </li>
              <li>
                <strong>Restlessness</strong> (pacing, getting up and down, cannot get comfortable)
              </li>
              <li>
                <strong>Drooling</strong> (ropey saliva, gulping, lip licking)
              </li>
              <li>
                <strong>Abdominal discomfort</strong> (guarding belly, stretching, looking at the abdomen)
              </li>
              <li>
                <strong>Weakness</strong> (wobbly, pale gums, collapse as it worsens)
              </li>
            </ul>
          </div>

          <h3 className="text-lg font-semibold mt-2 mb-1">Signs that mean you should already be leaving</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Repeated retching with no vomit</li>
            <li>A rapidly enlarging or tight abdomen</li>
            <li>Pale gums, weakness, collapse, or labored breathing</li>
            <li>A dog that looks panicked and cannot settle</li>
          </ul>

          <p className="mb-0">
            If you are asking yourself &ldquo;Is this real?&rdquo; treat it as real until an emergency veterinarian tells you otherwise.
          </p>
        </section>

        {/* EMERGENCY RESPONSE */}
        <section id="emergency" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Emergency Response: Your Minute-by-Minute Playbook</h2>

          <p className="mb-3">
            The goal is speed without chaos. Your job is to get your dog to a facility that can take radiographs,
            stabilize shock, and perform emergency surgery if needed.
          </p>

          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm mb-4">
            <p className="mb-2">
              <strong>Step-by-step:</strong>
            </p>
            <ol className="list-decimal pl-5 space-y-1 mb-0">
              <li>
                <strong>Call the ER</strong> and say: &ldquo;I am coming now with a suspected bloat/GDV. My dog is retching and distressed.&rdquo;
              </li>
              <li>
                <strong>Leave immediately.</strong> Do not delay for internet searches, gas relief products, or home remedies.
              </li>
              <li>
                <strong>Transport safely.</strong> Use a harness/leash. Keep the dog as calm as possible.
              </li>
              <li>
                <strong>At arrival, let staff take your dog back.</strong> Rapid stabilization is the priority.
              </li>
            </ol>
          </div>

          <h3 className="text-lg font-semibold mt-2 mb-1">What not to do</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Do not give food or large amounts of water</li>
            <li>Do not attempt to induce vomiting</li>
            <li>Do not try to &ldquo;walk it off&rdquo; or massage the abdomen</li>
            <li>Do not wait for distension to become obvious</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">What to bring (if it does not slow you down)</h3>
          <ul className="list-disc pl-5 space-y-1 mb-0">
            <li>Medication list and medical history highlights</li>
            <li>Proof of microchip/ID and your contact information</li>
            <li>Insurance information if applicable</li>
            <li>A pre-decided financial plan so you can consent quickly</li>
          </ul>
        </section>

        {/* DIAGNOSIS & TREATMENT */}
        <section id="diagnosis-treatment" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Diagnosis &amp; Treatment: What Happens at the Hospital</h2>

          <p className="mb-3">
            Emergency teams typically do three things at once: confirm the diagnosis, stabilize shock, and prepare for surgery.
            The fastest confirmation comes from <strong>radiographs</strong> (X-rays) showing a rotated stomach.
            While diagnostics happen, your dog may receive <strong>IV fluids</strong>, <strong>oxygen</strong>, pain control,
            and attempts to <strong>decompress</strong> the stomach (often with a tube or trocarization).
          </p>

          <h3 className="text-lg font-semibold mt-2 mb-1">Stabilization goals</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Support blood pressure and perfusion with fluids</li>
            <li>Reduce stomach pressure if possible</li>
            <li>Control pain and nausea</li>
            <li>Monitor heart rhythm (arrhythmias can occur)</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Surgery (definitive treatment)</h3>
          <p className="mb-3">
            Definitive therapy is <strong>emergency surgery</strong> to untwist the stomach, evaluate tissue viability, and perform a <strong>gastropexy</strong>
            (anchoring the stomach to reduce future twisting). The surgeon may also assess the spleen and other organs, and remove any necrotic tissue if present.
          </p>

          <h3 className="text-lg font-semibold mt-2 mb-1">What influences outcome</h3>
          <ul className="list-disc pl-5 space-y-1 mb-0">
            <li>How quickly the dog arrived after signs began</li>
            <li>Degree of shock and dehydration at presentation</li>
            <li>Whether stomach tissue is viable</li>
            <li>Whether complications occur (arrhythmias, sepsis, coagulation issues)</li>
          </ul>
        </section>

        {/* GASTROPEXY */}
        <section id="gastropexy" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Preventive Gastropexy: Who Should Consider It</h2>

          <p className="mb-3">
            <strong>Gastropexy</strong> anchors the stomach to the abdominal wall to prevent or greatly reduce the chance of volvulus (the life-threatening twist).
            It does not prevent the stomach from dilating with gas, but it makes the catastrophic rotation far less likely.
            Many surgeons recommend <strong>prophylactic gastropexy</strong> for the highest-risk dogs, especially deep-chested giant breeds and dogs with strong family history.
          </p>

          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm mb-4">
            <p className="mb-2">
              <strong>A practical decision framework:</strong>
            </p>
            <ul className="list-disc pl-5 space-y-1 mb-0">
              <li>
                If your dog is a high-risk conformation (deep-chested) plus high-risk breed and has family history, gastropexy deserves serious discussion
              </li>
              <li>
                If your dog already had GDV, gastropexy is usually performed during corrective surgery to reduce recurrence
              </li>
              <li>
                If your dog is undergoing another abdominal procedure, ask whether combining procedures makes sense for your risk profile
              </li>
            </ul>
          </div>

          <h3 className="text-lg font-semibold mt-2 mb-1">Open vs. laparoscopic</h3>
          <p className="mb-3">
            Both open and minimally invasive (laparoscopic-assisted) approaches are used. The best choice depends on surgeon experience,
            your dog&apos;s anatomy, and concurrent procedures. Ask your veterinarian what they recommend for your situation and why.
          </p>

          <p className="mb-0">
            Important nuance: even with gastropexy, severe gastric dilation can still happen, and it should still be evaluated urgently.
            Gastropexy lowers the risk of twisting, not the need for fast action when signs appear.
          </p>
        </section>

        {/* PREVENTION HABITS */}
        <section id="prevention" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Daily Risk Reduction: Small Habits, Big Leverage</h2>

          <p className="mb-3">
            No routine removes all risk, but consistent habits reduce the likelihood of a high-risk chain reaction and improve early detection.
            Think of prevention as stacking margins in your favor.
          </p>

          <h3 className="text-lg font-semibold mt-2 mb-1">The high-impact basics</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>
              <strong>Multiple smaller meals:</strong> 2–3 daily feedings rather than one large meal
            </li>
            <li>
              <strong>Slow the speed:</strong> slow-feeder bowls or food puzzles reduce gulping and competition
            </li>
            <li>
              <strong>Calm feeding environment:</strong> separate dogs if anyone is a competitive eater
            </li>
            <li>
              <strong>Post-meal calm:</strong> plan a quiet window after meals before intense activity
            </li>
            <li>
              <strong>Lean body condition:</strong> keep your dog athletic and avoid significant weight swings
            </li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Stress management matters more than most people realize</h3>
          <p className="mb-3">
            Stress and arousal can change how dogs eat and behave after meals. If your dog is anxious, excitable, or reactive, focus on predictability:
            calm meal routines, separation from other dogs while eating, and a consistent post-meal rest routine.
          </p>

          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <p className="mb-2">
              <strong>Reality check:</strong> prevention is not a guarantee.
            </p>
            <p className="mb-0">
              The goal is risk reduction plus faster recognition. Owners do best when they treat early warning signs as a true emergency.
            </p>
          </div>
        </section>

        {/* FEEDING & EXERCISE */}
        <section id="feeding" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Feeding &amp; Exercise Rules of Thumb (Practical and Repeatable)</h2>

          <p className="mb-3">
            Owners often want an exact &ldquo;minutes before and after meals&rdquo; rule. Different vets may recommend slightly different windows,
            but the concept is consistent: avoid high-intensity arousal right around large meals. The bigger and deeper-chested the dog, the more conservative you should be.
          </p>

          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>
              Feed on a schedule; keep a log so multiple caregivers do not double-feed
            </li>
            <li>
              Measure portions consistently (grams are ideal if you use kibble)
            </li>
            <li>
              Use a slow-feeder if your dog gulps food
            </li>
            <li>
              Keep meals calm and separate if you have multiple dogs
            </li>
            <li>
              Avoid intense sprinting, wrestling, or high-arousal play immediately after meals
            </li>
            <li>
              If your dog is a &ldquo;chugger,&rdquo; manage frantic water gulping around extreme activity with calmer pacing, not restriction
            </li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Raised bowls</h3>
          <p className="mb-3">
            Raised bowls are a common question. Evidence and recommendations can vary based on individual anatomy and veterinary guidance.
            If you are considering raised feeding, discuss it with your veterinarian in the context of your dog&apos;s conformation and risk profile.
          </p>
        </section>

        {/* BOARDING/DAYCARE */}
        <section id="boarding" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Boarding &amp; Daycare: Notes That Actually Reduce Risk</h2>

          <p className="mb-3">
            For facilities, GDV prevention is mostly operational: intake, meal protocols, post-meal rest blocks, and rapid escalation when signs appear.
            The best facilities treat high-risk dogs as a known category and design routines around that reality.
          </p>

          <h3 className="text-lg font-semibold mt-2 mb-1">Intake (what you should collect and document)</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Breed and body type (deep chest flag)</li>
            <li>History of bloat or GI emergencies</li>
            <li>Meal grams, number of meals, slow-feeder requirement</li>
            <li>Post-meal rest duration and activity restrictions</li>
            <li>Owner-approved ER plan and transport authorization</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Operations (what staff should actually do)</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Post meal times on a visible board and enforce calm blocks after feeding</li>
            <li>Prevent chaotic group play right after meals</li>
            <li>Assign responsibility for post-meal observation during the risk window</li>
            <li>Train staff on the early behavior cluster (retching, pacing, drooling, discomfort)</li>
          </ul>

          <p className="mb-0">
            If a dog shows unproductive retching, abdominal distension, or sudden distress, do not delay for &ldquo;monitoring.&rdquo;
            Initiate the emergency plan and contact the owner while preparing transport.
          </p>
        </section>

        {/* HOME SOPs */}
        <section id="home-sops" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Checklists &amp; SOPs (Copy/Paste)</h2>

          <h3 className="text-lg font-semibold mt-2 mb-1">Owner Daily SOP</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Measure meals; feed multiple smaller meals instead of one large meal</li>
            <li>Use a slow-feeder if your dog eats quickly</li>
            <li>Feed in a calm environment; separate dogs if needed</li>
            <li>Plan a post-meal calm block before intense activity</li>
            <li>Know your dog&apos;s normal post-meal behavior so deviations stand out</li>
            <li>Keep ER info visible and saved in your phone</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">What to do if you suspect GDV (Owner SOP)</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Call the nearest ER and say &ldquo;suspected bloat/GDV&rdquo;</li>
            <li>Leave immediately; do not attempt home treatment</li>
            <li>Transport safely and keep your dog as calm as possible</li>
            <li>Let staff take your dog back on arrival (stabilization first)</li>
            <li>Expect radiographs, fluids, decompression attempts, and rapid surgical discussion if confirmed</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Facility Floor SOP</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Log meal times, amounts, slow-feeder use, and post-meal rest enforcement</li>
            <li>Flag high-risk dogs on the daily board (deep-chested, large/giant, prior bloat)</li>
            <li>Assign a staff member for post-meal observation during the risk window</li>
            <li>Immediate escalation for unproductive retching, distension, sudden distress, weakness, or collapse</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Emergency Transport SOP</h3>
          <ul className="list-disc pl-5 space-y-1 mb-0">
            <li>Call ER, state suspected GDV, and estimated time of arrival</li>
            <li>Secure the dog (harness/leash); prepare transport safely</li>
            <li>Record times: onset, call time, departure, arrival</li>
            <li>Follow up with an incident summary for the owner and medical record</li>
          </ul>

          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm mt-3">
            <strong>Petunia tip:</strong> Convert these SOPs into shared checklists so family members and staff follow the same playbook every time.
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">Frequently Asked Questions</h2>

          <p className="mb-3">
            <strong>How fast can GDV develop?</strong>
            <br />
            Sometimes very quickly. A dog can look normal after dinner and show clear signs within an hour. That is why high-risk owners keep ER information handy.
          </p>

          <p className="mb-3">
            <strong>Can GDV happen without a huge swollen belly?</strong>
            <br />
            Yes. Early on, distension may be subtle, especially in large dogs. The combination of unproductive retching and sudden distress should be treated as urgent.
          </p>

          <p className="mb-3">
            <strong>Does gastropexy prevent all bloat?</strong>
            <br />
            Gastropexy dramatically reduces the risk of the stomach twisting, but it does not prevent the stomach from dilating with gas. Signs still deserve urgent evaluation.
          </p>

          <p className="mb-3">
            <strong>Does food type determine risk?</strong>
            <br />
            Evidence is mixed. The most consistent practical factors owners can control include meal size, feeding speed, and stress/arousal around meals.
            Your veterinarian can tailor diet recommendations to your dog&apos;s needs.
          </p>

          <p className="mb-0">
            <strong>If my dog had GDV corrected, can it happen again?</strong>
            <br />
            After surgical correction with gastropexy, recurrence of volvulus is uncommon, though gas distension can still occur and should be treated seriously.
          </p>
        </section>

        {/* SOURCES */}
        <section id="sources" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">📚 Sources (Selected)</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            <li>
              American College of Veterinary Surgeons (ACVS). Gastric Dilatation-Volvulus (Bloat) in Dogs.{' '}
              <a
                href="https://www.acvs.org/small-animal/gastric-dilatation-volvulus"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.acvs.org/small-animal/gastric-dilatation-volvulus
              </a>
            </li>
            <li>
              Cornell University Riney Canine Health Center. Gastric Dilatation-Volvulus (GDV) or Bloat.{' '}
              <a
                href="https://www.vet.cornell.edu/departments-centers-and-institutes/riney-canine-health-center/canine-health-information/gastric-dilatation-volvulus-gdv-or-bloat"
                target="_blank"
                rel="noopener noreferrer"
              >
                Cornell GDV overview
              </a>
            </li>
            <li>
              VCA Hospitals. Bloat: Gastric Dilatation and Volvulus in Dogs.{' '}
              <a
                href="https://vcahospitals.com/know-your-pet/bloat-gastric-dilatation-and-volvulus-in-dogs"
                target="_blank"
                rel="noopener noreferrer"
              >
                VCA GDV signs and response
              </a>
            </li>
            <li>
              Merck Veterinary Manual (Professional). Gastric Dilation and Volvulus in Small Animals.{' '}
              <a
                href="https://www.merckvetmanual.com/digestive-system/surgical-problems-of-the-gastrointestinal-tract-in-small-animals/gastric-dilation-and-volvulus-in-small-animals"
                target="_blank"
                rel="noopener noreferrer"
              >
                Merck GDV pathophysiology
              </a>
            </li>
            <li>
              Veterinary Partner (VIN). Bloat resources (client education and prevention discussions).{' '}
              <a
                href="https://veterinarypartner.vin.com/doc/?id=4951541&pid=19239"
                target="_blank"
                rel="noopener noreferrer"
              >
                VIN bloat overview
              </a>
            </li>
            <li>
              WSAVA Global Nutrition Guidelines: body condition, feeding plans, and caregiver communication.{' '}
              <a
                href="https://wsava.org/global-guidelines/global-nutrition-guidelines/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://wsava.org/global-guidelines/global-nutrition-guidelines/
              </a>
            </li>
          </ul>

          <p className="text-xs text-gray-600 mt-4">
            Educational content only. Always consult your veterinarian and local emergency hospital for individualized guidance.
            Surgical decisions and feeding recommendations must be made with your veterinary team.
          </p>
        </section>

        <Link href={`/${locale}/blog`} className="underline text-[#2c4a30] font-medium hover:opacity-80">
          ← Back to Blog
        </Link>
      </main>
    </>
  );
}
