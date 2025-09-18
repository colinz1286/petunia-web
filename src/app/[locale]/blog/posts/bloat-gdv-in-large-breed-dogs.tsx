'use client';

import Head from 'next/head';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function BloatGDVDogs() {
  const locale = useLocale();

  const title =
    'Bloat (GDV) in Large Breed Dogs: Recognizing the Warning Signs and Reducing Risk';
  const date = 'September 17, 2025';
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
            <li><a href="#what-is-gdv" className="underline hover:opacity-80">What GDV Is</a></li>
            <li><a href="#mechanics" className="underline hover:opacity-80">Why It Turns Deadly</a></li>
            <li><a href="#breeds-risk" className="underline hover:opacity-80">Breeds &amp; Risk Factors</a></li>
            <li><a href="#warning-signs" className="underline hover:opacity-80">Early Warning Signs</a></li>
            <li><a href="#emergency" className="underline hover:opacity-80">Emergency Response</a></li>
            <li><a href="#diagnosis-treatment" className="underline hover:opacity-80">Diagnosis &amp; Treatment</a></li>
            <li><a href="#gastropexy" className="underline hover:opacity-80">Preventive Gastropexy</a></li>
            <li><a href="#prevention" className="underline hover:opacity-80">Daily Risk Reduction</a></li>
            <li><a href="#feeding" className="underline hover:opacity-80">Feeding &amp; Exercise Rules</a></li>
            <li><a href="#boarding" className="underline hover:opacity-80">Boarding/Daycare Notes</a></li>
            <li><a href="#home-sops" className="underline hover:opacity-80">Checklists &amp; SOPs</a></li>
            <li><a href="#faq" className="underline hover:opacity-80">FAQ</a></li>
            <li><a href="#sources" className="underline hover:opacity-80">📚 Sources (Selected)</a></li>
          </ul>
        </nav>

        {/* TLDR */}
        <section id="tldr" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Short Answer (TL;DR)</h2>
          <p className="mb-4">
            <strong>Bloat (gastric dilatation-volvulus, GDV)</strong> is a life-threatening emergency in which a dog&#39;s stomach fills with gas and twists. Large, deep-chested breeds are most vulnerable. Hallmark signs include <strong>unproductive retching</strong>, a <strong>tight, distended abdomen</strong>, sudden anxiety or pacing, drooling, and collapse. This is not a wait-and-see scenario. <strong>Immediate veterinary care</strong> is the difference between life and death. You can reduce risk with <strong>multiple small meals</strong>, <strong>slow-feeder bowls</strong>, calm pre/post-meal routines, lean body weight, and in some dogs, <strong>elective gastropexy</strong>.
          </p>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Petunia tip:</strong> Treat GDV like a fire drill. Program the nearest 24/7 ER in your phone, post it on the fridge, and do a dry run drive once so you know the route under stress.
          </div>
        </section>

        {/* WHAT IS GDV */}
        <section id="what-is-gdv" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">What GDV Is (Plain-Language Overview)</h2>
          <p className="mb-3">
            The term <em>gastric dilatation-volvulus</em> describes two linked events. First, the stomach <strong>distends</strong> with gas, food, or fluid (dilatation). Second, it <strong>rotates</strong> on its axis (volvulus), trapping contents and sealing off the normal entry and exit paths. The twist also pinches off blood vessels, starving tissues of oxygen and sending the dog into <strong>shock</strong>.
          </p>
          <p className="mb-0">
            Dogs do not burp or vomit effectively once the twist occurs. Pressure rises rapidly. Without urgent decompression and surgery to correct the rotation, the dog can deteriorate within hours.
          </p>
        </section>

        {/* MECHANICS */}
        <section id="mechanics" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Why It Turns Deadly So Fast</h2>
          <p className="mb-3">
            As the stomach inflates and rotates, it compresses the <strong>caudal vena cava</strong> and other abdominal veins. Venous return to the heart drops, blood pressure falls, and tissues become hypoxic. Toxins and inflammatory mediators build. The heart becomes irritable, predisposing to <strong>arrhythmias</strong>. The stomach wall can become ischemic and necrotic. Each minute that passes makes surgical correction riskier and increases the chance of complications such as sepsis and disseminated intravascular coagulation.
          </p>
          <p className="mb-0">
            This is why owners must move from <em>recognition</em> to <em>transport</em> immediately. The best outcome is a false alarm evaluated quickly, not a late-arriving true emergency.
          </p>
        </section>

        {/* BREEDS & RISK */}
        <section id="breeds-risk" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Breeds &amp; Risk Factors</h2>
          <p className="mb-3">
            Large and giant breeds with deep, narrow chests have elevated risk. Examples commonly cited in veterinary literature include <strong>Great Danes, German Shepherd Dogs, Standard Poodles, Weimaraners, Doberman Pinschers, Irish Setters, and Saint Bernards</strong>. Mixed-breed dogs with similar body shape can also be at risk.
          </p>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>Age:</strong> risk rises with age, particularly after midlife.</li>
            <li><strong>Family history:</strong> heredity plays a role in some lines.</li>
            <li><strong>Eating pattern:</strong> single large daily meals, rapid eating, and competitive feeding environments increase risk.</li>
            <li><strong>Stress &amp; arousal:</strong> anxious or excitable temperament, especially around meals.</li>
            <li><strong>Body condition:</strong> both excess weight and extreme thinness are undesirable; aim for lean, athletic condition.</li>
            <li><strong>Prior episode:</strong> a history of bloat indicates elevated risk for recurrence without gastropexy.</li>
          </ul>
          <p className="mb-0">
            Some risk modifiers are debated or evolving in the literature. The practical takeaway: stack the controllable habits in your favor and discuss preventive surgery for truly high-risk individuals.
          </p>
        </section>

        {/* WARNING SIGNS */}
        <section id="warning-signs" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Early Warning Signs You Should Never Ignore</h2>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>Unproductive retching:</strong> dry heaves with little or no vomit.</li>
            <li><strong>Distended, tight abdomen:</strong> drum-like, painful to touch.</li>
            <li><strong>Sudden restlessness:</strong> pacing, unable to get comfortable, anxious expression.</li>
            <li><strong>Hypersalivation:</strong> ropey drool, lip licking, gulping.</li>
            <li><strong>Weakness or collapse:</strong> pale gums, rapid heartbeat, labored breathing.</li>
          </ul>
          <p className="mb-0">
            If you see these signs in a susceptible dog, <strong>act now</strong>. Drive to the nearest emergency hospital and call on the way.
          </p>
        </section>

        {/* EMERGENCY RESPONSE */}
        <section id="emergency" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Emergency Response: Your Minute-by-Minute Playbook</h2>
          <p className="mb-3">
            1) <strong>Call the ER</strong> and say you are coming in with a suspected GDV. 2) <strong>Transport promptly</strong> in a safe vehicle; do not delay for home treatments. 3) At arrival, allow staff to take your dog to the back for stabilization. Expect <strong>IV fluids, oxygen, decompression</strong> attempts, pain control, and rapid diagnostics.
          </p>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Bring your dog&#39;s <strong>medication list</strong> and any <strong>insurance or payment</strong> information to avoid delays.</li>
            <li>Authorize care decisively within your financial framework. Hesitation can cost precious time.</li>
            <li>Ask for updates and a written estimate once the team has stabilized your dog.</li>
          </ul>
          <p className="mb-0">
            Many hospitals will request consent for emergency surgery as soon as GDV is confirmed by radiographs. This speed is appropriate and lifesaving.
          </p>
        </section>

        {/* DIAGNOSIS & TREATMENT */}
        <section id="diagnosis-treatment" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Diagnosis &amp; Treatment: What Happens at the Hospital</h2>
          <p className="mb-3">
            The veterinary team will perform a focused exam and obtain <strong>radiographs</strong> to confirm stomach rotation. Initial stabilization includes <strong>large-bore IV fluids</strong>, <strong>oxygen therapy</strong>, and <strong>decompression</strong> via orogastric tube or percutaneous trocarization. Baseline labs help assess shock, electrolytes, and organ function.
          </p>
          <p className="mb-3">
            Definitive therapy is <strong>emergency surgery</strong> to derotate the stomach, evaluate tissue viability, and perform a <strong>gastropexy</strong> to reduce future rotation risk. The surgeon will check the spleen and other organs, manage any necrotic tissue, and plan postoperative care including analgesia and arrhythmia monitoring.
          </p>
          <p className="mb-0">
            Prognosis varies with <strong>speed of presentation</strong>, extent of tissue damage, and presence of complications. With rapid intervention, survival rates are high; delays reduce odds significantly.
          </p>
        </section>

        {/* GASTROPEXY */}
        <section id="gastropexy" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Preventive Gastropexy: Who Should Consider It</h2>
          <p className="mb-3">
            <strong>Gastropexy</strong> anchors the stomach to the abdominal wall to prevent or greatly reduce the chance of volvulus. It does not stop the stomach from dilating with gas, but it largely prevents the life-threatening twist. Many surgeons recommend <strong>prophylactic gastropexy</strong> for the highest-risk breeds, often combined with spay/neuter in young adults, or at the time of another abdominal procedure.
          </p>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>Open vs. laparoscopic:</strong> both are used; minimally invasive approaches may reduce discomfort and recovery time for suitable patients.</li>
            <li><strong>Timing:</strong> discuss with your veterinarian based on breed, age, lifestyle, and family history.</li>
            <li><strong>Outcomes:</strong> when performed correctly, recurrence of volvulus is very uncommon.</li>
          </ul>
          <p className="mb-0">
            If your dog has already survived a GDV, a <strong>gastropexy</strong> is typically performed during surgical correction to prevent recurrence.
          </p>
        </section>

        {/* PREVENTION HABITS */}
        <section id="prevention" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Daily Risk Reduction: Small Habits, Big Leverage</h2>
          <p className="mb-3">
            No routine removes all risk, but a handful of consistent habits make GDV less likely and improve early detection.
          </p>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>Meals:</strong> 2–3 smaller feedings rather than one large meal; measure in grams to keep portions consistent across caregivers.</li>
            <li><strong>Speed control:</strong> use <strong>slow-feeder bowls</strong> or food puzzles to reduce gulping.</li>
            <li><strong>Calm window:</strong> avoid high-arousal exercise 30–60 minutes before and after meals.</li>
            <li><strong>Hydration:</strong> offer water throughout the day; avoid frantic chugging right before vigorous play.</li>
            <li><strong>Body condition:</strong> keep a lean, athletic profile; reweigh monthly for young dogs and quarterly for adults.</li>
            <li><strong>Stress management:</strong> separate anxious eaters; keep mealtimes quiet and predictable.</li>
            <li><strong>Observation:</strong> learn your dog&#39;s normal post-meal behavior so you notice deviations fast.</li>
          </ul>
          <p className="mb-0">
            Stack these habits and reevaluate seasonally. Travel, boarding, heat, and schedule changes can alter risk dynamics.
          </p>
        </section>

        {/* FEEDING & EXERCISE */}
        <section id="feeding" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Feeding &amp; Exercise Rules of Thumb</h2>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Feed on a schedule; keep a log so multiple caregivers do not double-feed.</li>
            <li>Reserve a calm zone for meals; prevent competition by feeding dogs separately when needed.</li>
            <li>Do not encourage sprint games or high jumping right after meals.</li>
            <li>Discuss raised bowls with your vet; the evidence is mixed and case dependent.</li>
            <li>Bring meals in measured containers when traveling or boarding to preserve consistency.</li>
          </ul>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Petunia tip:</strong> Store your dog&#39;s meal grams, feeding windows, and slow-feeder note directly in Petunia so sitters and facilities match your home routine.
          </div>
        </section>

        {/* BOARDING/DAYCARE */}
        <section id="boarding" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Boarding &amp; Daycare: Facility Notes That Matter</h2>
          <p className="mb-3">
            For facilities, GDV prevention is about <strong>intake, structure, and speed</strong>. Intake forms should flag deep-chested breeds, prior bloat history, and feeding preferences. Operations should schedule calm blocks after meals and prevent chaotic group play in the immediate post-meal window.
          </p>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>Intake checklist:</strong> meal grams, slow-feeder requirement, number of meals per day, and pre/post-meal rest duration.</li>
            <li><strong>Operations:</strong> post meal times on a visible board; enforce a quiet period before rotating to play yards.</li>
            <li><strong>Escalation:</strong> if a dog exhibits unproductive retching, distension, or sudden distress, initiate the emergency plan and call the owner while preparing transport.</li>
          </ul>
          <p className="mb-0">
            Documentation protects dogs and businesses: time-stamped notes on meals, activity, and any GI signs make conversations with owners faster and clearer.
          </p>
        </section>

        {/* HOME SOPs */}
        <section id="home-sops" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Checklists &amp; SOPs (Copy/Paste)</h2>

          <h3 className="text-lg font-semibold mt-2 mb-1">Owner Daily SOP</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Measure meals in grams; feed 2–3× per day with a slow-feeder.</li>
            <li>Keep a quiet zone around meals; supervise water intake immediately before/after eating.</li>
            <li>Schedule calm rest 30–60 minutes after meals before high-energy activity.</li>
            <li>Learn early signs: unproductive retching, distended abdomen, pacing, drooling, weakness.</li>
            <li>Have ER contact info on your fridge and phone; know the fastest route.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Facility Floor SOP</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Log meal times, amounts, and slow-feeder use per dog.</li>
            <li>Enforce a post-meal quiet block before group play; post the schedule where staff can see it.</li>
            <li>Flag high-risk dogs on the whiteboard; brief shift leads at handoff.</li>
            <li>Immediate escalation for retching with no vomit or acute abdominal distension.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Emergency Transport SOP</h3>
          <ul className="list-disc pl-5 space-y-1 mb-0">
            <li>Call ER, state suspected GDV, and estimated time of arrival.</li>
            <li>Prepare transport crate or harness and a printed/client-signed medical authorization.</li>
            <li>Record times: onset, call, departure, arrival. Follow with a written incident summary.</li>
          </ul>

          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm mt-3">
            <strong>Petunia tip:</strong> Convert these SOPs into shared checklists so family members and staff follow the same playbook every time.
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">Frequently Asked Questions</h2>

          <p className="mb-3">
            <strong>Does food type determine risk?</strong><br />
            Evidence is mixed. More consistent associations relate to <em>meal size</em>, <em>feeding speed</em>, and <em>stress level</em> around meals. Your vet can tailor dietary choices to your dog&#39;s health profile.
          </p>

          <p className="mb-3">
            <strong>How fast can a GDV develop?</strong><br />
            Sometimes very quickly. A dog can look normal after dinner and then show clear signs within an hour. That uncertainty is why owners of deep-chested breeds should keep ER info handy at all times.
          </p>

          <p className="mb-3">
            <strong>Is preventive gastropexy safe?</strong><br />
            In experienced hands and with appropriate case selection, yes. It does not prevent gas expansion, but it dramatically reduces the chance of a life-threatening twist.
          </p>

          <p className="mb-0">
            <strong>If my dog already had GDV corrected, can it happen again?</strong><br />
            After surgical correction with gastropexy, recurrence of volvulus is uncommon, though gas distension can still occur and should be monitored.
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
              Veterinary Partner (VIN). Bloat in Dogs: Recognizing Early Signs and Emergency Response.{' '}
              <a
                href="https://veterinarypartner.vin.com/default.aspx?pid=19239&id=4951419"
                target="_blank"
                rel="noopener noreferrer"
              >
                VIN client education
              </a>
            </li>
            <li>
              American Kennel Club (AKC). Bloat in Dogs: Symptoms, Treatment, and Prevention.{' '}
              <a
                href="https://www.akc.org/expert-advice/health/bloat-in-dogs/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.akc.org/expert-advice/health/bloat-in-dogs/
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
            Educational content only. Always consult your veterinarian and local emergency hospital for individualized guidance. Surgical decisions and feeding recommendations must be made with your veterinary team.
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
