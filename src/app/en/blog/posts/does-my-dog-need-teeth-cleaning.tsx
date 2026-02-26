'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function DoesMyDogNeedTeethCleaning() {
  const locale = useLocale();

  // --- Metadata ---------------------------------------------------------------
  const title =
    'Does My Dog Need Teeth Cleaning? A Complete Owner’s Guide to Dental Health, Costs, Insurance, Chews, and Senior Anesthesia Decisions';
  const date = 'August 22, 2025';
  const categories = ['owner', 'boarding', 'daycare', 'vet'] as const;

  // Keep keys/labels aligned with prior posts on your site
  const categoryLabels: Record<string, string> = {
    owner: 'Pet Owners',
    food: 'Dog Food & Nutrition',
    boarding: 'Boarding & Daycare',
    daycare: 'Daycare',
    sitter: 'Pet Sitters',
    walker: 'Dog Walkers',
    rescue: 'Rescues',
    vet: 'Veterinary Clinics',
  };

  return (
    <>

      <main className="max-w-3xl mx-auto px-4 py-10 text-[#2c4a30]">
        <p className="text-sm text-gray-500 mb-2">Posted on {date}</p>
        <h1 className="text-3xl font-bold mb-4">{title}</h1>

        {/* 🏷️ Category Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {categories.map((key) => (
            <span
              key={key}
              className="text-xs bg-[#e4dbcb] text-[#2c4a30] px-3 py-1 rounded-full border border-[#d9cfc2]"
            >
              {categoryLabels[key]}
            </span>
          ))}
        </div>

        {/* INTRO */}
        <p className="text-lg mb-4">
          Dog dental care isn&#39;t cosmetic—it&#39;s comfort, health, and longevity. Owners often ask a deceptively simple question:
          <strong> Does my dog actually need teeth cleaning?</strong> The answer depends on age, breed size, mouth
          conformation, diet, home care, and what your veterinarian sees below the gumline. A dog with a clean-looking smile can still
          have painful disease around the roots; meanwhile, another dog may keep healthy gums for years with daily brushing and the right chews.
        </p>
        <p className="mb-6">
          This guide explains how to decide <em>if</em> and <em>when</em> a professional cleaning is necessary, what that procedure really includes,
          how much it tends to cost, what pet insurance does (and does not) cover, which toys and chews help (and which hurt), and how to think
          about anesthesia—especially for seniors. You&#39;ll see clear checklists, practical at-home routines, and myth-busting notes on
          &ldquo;anesthesia-free&rdquo; cleanings. The goal is simple: help you protect your dog&#39;s mouth with the same care you&#39;d want for your own.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-3">Quick Answers (Fast Facts)</h2>
        <ul className="list-disc pl-5 space-y-2 mb-8">
          <li>
            <strong>Most dogs develop gum disease early.</strong> By age three, many already show periodontal changes—even if the crowns look
            white. Hidden disease lives <em>under</em> the gumline; that&#39;s where cleanings matter most.
          </li>
          <li>
            <strong>There&#39;s no single &ldquo;magic age&rdquo; for a first cleaning.</strong> Vets recommend an anesthetized oral exam with radiographs early in life,
            then clean as indicated. Small and toy breeds often need earlier and more frequent care than large breeds.
          </li>
          <li>
            <strong>Professional cleanings are done under anesthesia.</strong> That allows probing, subgingival cleaning, and X-rays without pain or fear.
            &ldquo;Anesthesia-free dentistry&rdquo; makes teeth look whiter but <em>doesn&#39;t</em> treat disease below the gums.
          </li>
          <li>
            <strong>Costs vary widely.</strong> A routine cleaning might be a few hundred dollars; advanced care with extractions and imaging can reach four figures.
            Ask for an <em>itemized estimate</em> covering bloodwork, radiographs, anesthesia, pain control, and any extractions.
          </li>
          <li>
            <strong>Insurance rarely covers routine cleanings.</strong> Accident/illness policies often cover extractions and dental disease; preventive
            cleanings may require a separate wellness add-on.
          </li>
          <li>
            <strong>Home care wins the long game.</strong> Daily brushing is gold-standard. Add VOHC-accepted chews/diets/water additives for extra help.
            Avoid ultra-hard chews (antlers, hooves, bones, very hard nylon) and abrasive tennis balls for habitual chewing.
          </li>
          <li>
            <strong>Senior anesthesia is a risk-managed process, not a yes/no.</strong> Modern protocols, pre-op screening, local nerve blocks, vigilant monitoring,
            and temperature support make dentistry safe for many elderly dogs. The bigger risk can be <em>living with chronic oral pain.</em>
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-3">Part 1 — Why Dog Dental Health Matters</h2>
        <p className="mb-4">
          Dogs don&#39;t show tooth pain the way people do. They keep eating, play through discomfort, and adapt. Meanwhile, plaque
          (a sticky bacterial biofilm) mineralizes into tartar, the gums inflame (gingivitis), and inflammation creeps down the root
          surface where the periodontal ligament and jawbone live (periodontitis). Once bone is lost, that support <em>doesn&#39;t regrow</em>
          without advanced procedures. The longer disease smolders, the higher the odds of loose or fractured teeth, oral abscesses,
          oronasal fistulas (a painful hole between nose and mouth), and chronic pain that owners mistake for &ldquo;slowing down.&rdquo;
        </p>
        <p className="mb-4">
          You may hear claims that dental disease causes heart, kidney, or liver problems. In people, links between periodontal disease and systemic
          illness are complex and still studied; in dogs we also see associations—and we definitely see <em>bacteremia</em> (bacteria entering the bloodstream)
          during heavy tartar removal. The take-home isn&#39;t fear; it&#39;s that a comfortable, healthy mouth removes a chronic inflammatory burden and improves
          quality of life. Most importantly: periodontal disease is largely preventable with good hygiene and timely professional care.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-3">Part 2 — When Do Dogs Need Their First &amp; Routine Cleanings?</h2>
        <p className="mb-4">
          There&#39;s no universal birthdate for dental work. Instead, veterinarians look at <em>risk</em> (breed size/shape, crowding, bite),
          <em>findings</em> (gingivitis, tartar, gum recession, malodor), and <em>imaging</em> (X-rays that reveal hidden root problems). Many practices recommend
          an early anesthetized dental evaluation with full-mouth radiographs to catch congenital issues, retained baby teeth, or early bone loss. Small and toy breeds
          (Yorkies, Chihuahuas, Dachshunds, Poodles, Cavaliers, etc.) often need proactive care sooner because their teeth are crowded in smaller jaws.
        </p>
        <p className="mb-4">
          After that first anesthetized evaluation, the interval for routine cleanings is individualized. A dog with great genetics and daily brushing might go years
          between cleanings. A tiny breed with crowding and plaque-friendly saliva might need annual cleanings to stay comfortable. Think of it like your own dental care:
          some people need a cleaning every 6 months and others do well yearly. The correct cadence is the one that keeps gums pink, breath pleasant, and X-rays stable.
        </p>
        <div className="bg-[#f7f3ec] border border-[#e6dfd2] rounded-xl p-4 mb-6">
          <h3 className="text-lg font-semibold mb-2">Rule of Thumb by Size (Not a diagnosis—talk to your vet)</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <strong>Toy &amp; small breeds:</strong> earliest risk. Expect an anesthetized evaluation when young; many benefit from annual professional cleanings thereafter.
            </li>
            <li>
              <strong>Medium breeds:</strong> schedule based on what the gums and X-rays show; many need a cleaning every 12–24 months with solid home care.
            </li>
            <li>
              <strong>Large/giant breeds:</strong> often slower plaque accumulation, but not immune. Retained baby teeth, malocclusion, fractured carnassials, and tartar under
              overgrown gum flaps still occur. Professional cleanings are done when indicated.
            </li>
          </ul>
        </div>

        <h2 className="text-2xl font-semibold mt-10 mb-3">Part 3 — What a Professional Cleaning Actually Includes (COHAT)</h2>
        <p className="mb-4">
          In veterinary dentistry you&#39;ll hear the acronym <strong>COHAT</strong>: <em>Comprehensive Oral Health Assessment and Treatment</em>. That&#39;s the gold-standard visit.
          It looks like this:
        </p>
        <ol className="list-decimal pl-5 space-y-2 mb-6">
          <li>
            <strong>Pre-op evaluation:</strong> history, physical exam, recent labwork, and anesthetic risk assessment. Senior dogs may also have thoracic radiographs or
            additional labs depending on comorbidities.
          </li>
          <li>
            <strong>Premedication &amp; catheter:</strong> pain control and anxiety reduction begin before induction; an IV catheter allows precise dosing and fluids.
          </li>
          <li>
            <strong>General anesthesia with intubation:</strong> protects the airway from water and debris, keeps the patient immobile and pain-free, and makes the procedure humane.
          </li>
          <li>
            <strong>Monitoring:</strong> continuous oxygen saturation, heart rhythm, blood pressure, CO<sub>2</sub>, and temperature with a trained technician at the table.
          </li>
          <li>
            <strong>Charting &amp; probing:</strong> tooth-by-tooth measurements of gum pockets and mobility—only possible safely under anesthesia.
          </li>
          <li>
            <strong>Intraoral radiographs (X-rays):</strong> reveal root abscesses, bone loss, retained roots, jaw lesions, and resorptive defects invisible to the naked eye.
          </li>
          <li>
            <strong>Ultrasonic &amp; hand scaling:</strong> removal of plaque and tartar <em>above and below</em> the gumline; the subgingival step is the most important for gum health.
          </li>
          <li>
            <strong>Polishing &amp; irrigation:</strong> smoothing micro-scratches left by scaling so new plaque sticks less readily.
          </li>
          <li>
            <strong>Treatment:</strong> local nerve blocks; selective extractions of diseased teeth; periodontal therapy for salvageable teeth; sutures as needed.
          </li>
          <li>
            <strong>Recovery &amp; at-home plan:</strong> pain control, soft-food plan if indicated, and a custom home-care routine.
          </li>
        </ol>
        <p className="mb-4">
          Sedation or &ldquo;awake cleanings&rdquo; cannot safely perform subgingival therapy or diagnostic radiographs. They may make crowns look prettier while leaving
          active disease underneath. That&#39;s why board-certified veterinary dentists and major veterinary organizations endorse anesthetized dentistry for true oral health.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-3">Part 4 — What Does Teeth Cleaning Cost?</h2>
        <p className="mb-4">
          Costs vary by region, hospital type, your dog&#39;s size and temperament, the extent of disease, and whether extractions or advanced imaging are needed.
          A &ldquo;routine&rdquo; professional cleaning with anesthesia and necessary radiographs at a general practice is often a few hundred dollars; if multiple extractions,
          advanced periodontal therapy, or specialist care are required, total fees can rise into the thousands. Two dogs on the same day can get very different estimates
          because one mouth is straightforward and the other hides root abscesses and mobile teeth on X-ray.
        </p>
        <div className="bg-[#e8f3ed] border border-[#cfe7dc] rounded-xl p-4 mb-6">
          <h3 className="text-lg font-semibold mb-2">Typical Line Items You&#39;ll See on an Estimate</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Pre-anesthetic bloodwork and exam</li>
            <li>IV catheter, fluids, induction drugs, and inhalant anesthesia</li>
            <li>Intraoral radiographs (full mouth vs. targeted)</li>
            <li>Scaling above/below the gums, polishing, irrigation</li>
            <li>Local nerve blocks, pain medication, antibiotics if indicated</li>
            <li>Extractions priced per tooth (simple vs. surgical) if needed</li>
            <li>Recheck visits and suture removal (if applicable)</li>
          </ul>
        </div>
        <p className="mb-6">
          To compare apples to apples, ask clinics for a <em>written, itemized</em> estimate that clearly states whether X-rays are included and how extractions are billed.
          A low up-front cleaning fee that excludes imaging and potential surgical time can end up costing more once disease is discovered mid-procedure. If budget is a concern,
          proactively build a daily home-care routine; it reduces how often advanced (and expensive) work is needed.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-3">Part 5 — Does Pet Insurance Cover Teeth Cleaning?</h2>
        <p className="mb-4">
          Most accident/illness pet insurance plans cover <em>dental disease and injury</em> (for example, fractured teeth, abscesses, or periodontal therapy) but <em>do not</em> cover
          routine prophylactic cleanings. Some providers offer <strong>wellness add-ons</strong> that reimburse a set amount toward preventive cleanings once per year.
          Coverage also depends on pre-existing conditions and compliance with annual dental exams. Read the dental section of your policy carefully and ask pointed questions:
          &ldquo;Are radiographs covered?&rdquo; &ldquo;Are extractions covered if periodontal disease is diagnosed?&rdquo; &ldquo;Do you require proof of annual dental exams to keep dental illness eligible?&rdquo;
        </p>
        <div className="bg-[#f7f3ec] border border-[#e6dfd2] rounded-xl p-4 mb-6">
          <h3 className="text-lg font-semibold mb-2">Insurance Checklist to Discuss Before You Buy</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Routine cleaning coverage: excluded vs. available via wellness add-on</li>
            <li>Dental illness &amp; injury coverage: extractions, root canals, abscess treatment</li>
            <li>Requirements: annual dental exam proof, documented home care</li>
            <li>Waiting periods and <em>pre-existing</em> dental notes (e.g., &ldquo;mild tartar&rdquo; at enrollment)</li>
            <li>Annual and per-incident caps that could limit dental reimbursements</li>
          </ul>
        </div>

        <h2 className="text-2xl font-semibold mt-10 mb-3">Part 6 — Common Tooth &amp; Gum Diseases in Dogs</h2>
        <p className="mb-4">
          <strong>Gingivitis:</strong> inflamed gums from plaque along the gingival margin; reversible with cleaning and home care. The earliest red line at the gumline means it&#39;s time to act.
        </p>
        <p className="mb-4">
          <strong>Periodontitis:</strong> infection and inflammation have moved deeper, damaging the ligament and bone that hold teeth in place. Bone loss is an <em>X-ray diagnosis</em> and
          determines staging (mild, moderate, severe). Untreated, teeth loosen and become painful. Periodontitis is controlled—not cured—by professional therapy plus daily home care.
        </p>
        <p className="mb-4">
          <strong>Fractured teeth:</strong> often from chewing very hard objects (antlers, hooves, bones, hard nylon, rocks). Exposed pulp is an emergency—painful and prone to infection—requiring
          extraction or root canal by a trained dentist.
        </p>
        <p className="mb-4">
          <strong>Worn teeth (abrasion/attrition):</strong> chronic chewing on abrasive surfaces (tennis balls with grit) or tooth-on-tooth wear can shorten crowns and, in advanced cases, expose dentin or pulp.
          Management ranges from monitoring to crowns/extractions depending on depth and pain.
        </p>
        <p className="mb-4">
          <strong>Retained deciduous teeth:</strong> baby teeth that don&#39;t fall out on schedule (common in toy breeds) crowd adult teeth and trap plaque. They are typically extracted at spay/neuter or at the first dental.
        </p>
        <p className="mb-6">
          <strong>Oral masses:</strong> from benign epulides to malignant tumors. A thorough oral exam with radiographs—and biopsy when indicated—guides treatment. Early discovery during routine dental care
          improves options.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-3">Part 7 — Chew Toys &amp; Treats: What Helps and What Hurts?</h2>
        <p className="mb-4">
          The right chews can complement brushing; the wrong ones crack teeth or sand them down. Use two simple field tests:
          <strong> (1)</strong> the <em>thumbnail test</em>—if you can&#39;t dent it with a fingernail, it&#39;s probably too hard; <strong>(2)</strong> the <em>kneecap rule</em>—if you wouldn&#39;t want it
          slammed into your kneecap, don&#39;t let your dog chew it. For most dogs, that rules out antlers, cooked bones, hooves, very hard nylon/plastic, and even ice cubes for power chewers.
        </p>
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="bg-[#eef5ff] border border-[#dbe9ff] rounded-xl p-4">
            <h3 className="text-lg font-semibold mb-2">Helps (when sized &amp; used correctly)</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Daily brushing</strong> with pet toothpaste (never human toothpaste).</li>
              <li><strong>VOHC-accepted</strong> dental chews/treats/water additives/toothpastes/diets.</li>
              <li>Rubber toys with some give (e.g., stuffable chew toys) used under supervision.</li>
              <li>Dental diets formulated to scrub plaque (kibble designed to stay intact and shear along teeth).</li>
              <li>Rope toys for <em>tug only</em>—not for hours of gnawing if strands fray and are swallowed.</li>
            </ul>
          </div>
          <div className="bg-[#fff2ef] border border-[#ffd6ce] rounded-xl p-4">
            <h3 className="text-lg font-semibold mb-2">Hurts (higher risk)</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Antlers, hooves, cooked bones, rocks, very hard nylon/plastic &mdash; tooth-fracture risk.</li>
              <li>Tennis balls for habitual chewing (abrasive nap collects grit; can wear enamel).</li>
              <li>Over-sized rawhide or compressed chews if the dog tends to gulp large pieces.</li>
              <li>Toys that are too small (choking) or poorly supervised for power chewers.</li>
            </ul>
          </div>
        </div>
        <p className="mb-4">
          Looking for proven products? The <strong>Veterinary Oral Health Council (VOHC)</strong> maintains an up-to-date list of chews, diets, water additives,
          toothpastes, and wipes that met plaque/tartar reduction standards. Use that list as your starting point and still match the chew to your dog&#39;s size and chewing style.
        </p>
        <p className="mb-6">
          A final note about toothpaste: use pet-specific pastes. Human toothpaste can contain xylitol (toxic to dogs) and foaming agents meant to be spat out—dogs swallow paste.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-3">Part 8 — The At-Home Dental Routine That Actually Works</h2>
        <div className="bg-[#f2f8f4] border border-[#dbeee1] rounded-xl p-4 mb-6">
          <h3 className="text-lg font-semibold mb-2">Daily (Gold Standard)</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Toothbrushing: short, calm sessions; smear, lift lip, target the gumline; praise and treat.</li>
            <li>Offer a VOHC-accepted chew <em>or</em> dental diet component if brushing was brief.</li>
            <li>30-second oral check: sniff breath, peek at gumline, note chips or bleeding.</li>
          </ul>
          <h3 className="text-lg font-semibold mt-3 mb-2">If Daily Isn&#39;t Realistic (Still Effective)</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Brush 3–4 days/week <em>plus</em> VOHC chew on non-brush days.</li>
            <li>Add a VOHC water additive or oral gel for extra plaque control.</li>
            <li>Schedule a reminder every 3 months to reassess: breath, tartar, gum color, and any changes in chewing.</li>
          </ul>
        </div>

        <h2 className="text-2xl font-semibold mt-10 mb-3">Part 9 — Seniors &amp; Anesthesia: How to Balance Risk and Relief</h2>
        <p className="mb-4">
          Many owners worry about putting an older dog under anesthesia. That caution is healthy—and exactly why modern veterinary anesthesia is a
          <em>protocol</em>, not a single drug. It starts with a pre-anesthetic exam and labwork; considers heart, lung, kidney, endocrine, and neurologic disease; and uses
          tailored drug choices, nerve blocks to lower general anesthetic needs, continuous monitoring, and strict temperature support. For a painful mouth, the risk of <em>not</em>
          treating is often higher: chronic infection, weight loss from oral pain, and a daily decline in quality of life.
        </p>
        <div className="bg-[#fff8e6] border border-[#f1e3b5] rounded-xl p-4 mb-6">
          <h3 className="text-lg font-semibold mb-2">Senior Safety Measures to Discuss With Your Vet</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Recent labs (CBC, chemistry ± thyroid), blood pressure, and heart evaluation if indicated.</li>
            <li>Local dental nerve blocks to reduce inhalant dose; multimodal pain relief to speed recovery.</li>
            <li>Active warming, IV fluids, and dedicated monitoring (SpO₂, ECG, blood pressure, capnography, temperature).</li>
            <li>Short, focused procedures—stage complex work across visits if needed.</li>
            <li>Home setup for the first 24–48 hours: soft food, meds, and a quiet rest area.</li>
          </ul>
        </div>
        <p className="mb-6">
          What about &ldquo;just a light sedation&rdquo; to avoid anesthesia? Unfortunately, meaningful dentistry isn&#39;t possible without an endotracheal tube and a motion-free field.
          Sedation leaves the airway unprotected and the gums un-treated; it also prevents diagnostic radiographs. If you&#39;re anxious, tell your vet—together you can design the
          safest plan your dog can comfortably tolerate.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-3">Part 10 — Putting It All Together (Scenarios)</h2>
        <h3 className="text-xl font-semibold mt-4 mb-2">A. Two-year-old small breed, mild halitosis, no brushing yet</h3>
        <ul className="list-disc pl-5 space-y-1 mb-4">
          <li>Book anesthetized evaluation with radiographs; clean if pockets/gingivitis present.</li>
          <li>Start daily brushing + VOHC chew; recheck breath and gumline in 2–3 months.</li>
        </ul>
        <h3 className="text-xl font-semibold mt-4 mb-2">B. Seven-year-old large breed, tartar visible, otherwise healthy</h3>
        <ul className="list-disc pl-5 space-y-1 mb-4">
          <li>COHAT with full-mouth X-rays; treat any pocketing; extractions only if diseased.</li>
          <li>Brush 4x/week; consider a dental diet; schedule next oral exam in 6–12 months.</li>
        </ul>
        <h3 className="text-xl font-semibold mt-4 mb-2">C. Twelve-year-old toy breed, bad breath, reduced appetite</h3>
        <ul className="list-disc pl-5 space-y-1 mb-4">
          <li>Senior work-up and risk-managed anesthesia for COHAT; expect extractions if severe bone loss.</li>
          <li>Stage long cases; aggressive pain control; soft diet during recovery; gentle brushing once healed.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-3">Frequently Asked Questions</h2>
        <h3 className="text-xl font-semibold mt-4 mb-2">Does my dog <em>really</em> need a cleaning if the teeth look white?</h3>
        <p className="mb-4">
          Possibly. Disease lives below the gumline where eyes can&#39;t see. Only anesthetized probing and dental radiographs tell the truth. If gums are red at the margins,
          breath is sour, or you see brown at the gumline, schedule an exam.
        </p>

        <h3 className="text-xl font-semibold mt-4 mb-2">At what age should I plan the first cleaning?</h3>
        <p className="mb-4">
          Plan an early anesthetized evaluation with radiographs in young adulthood, especially for small/toy breeds and cats, then clean when indicated.
          Large breeds may not need cleaning as early, but there is no &ldquo;never.&rdquo; Your veterinarian will tailor timing based on what they see and feel in the mouth.
        </p>

        <h3 className="text-xl font-semibold mt-4 mb-2">How often do most dogs need cleanings?</h3>
        <p className="mb-4">
          It varies widely. Some small breeds need annual cleanings despite excellent home care; some large breeds go longer. Think of the target not as a calendar, but as
          <em>healthy gums, good breath, and stable X-rays</em>. When those slip, it&#39;s time.
        </p>

        <h3 className="text-xl font-semibold mt-4 mb-2">Which chews are best if I can&#39;t brush daily?</h3>
        <p className="mb-4">
          Choose items on the VOHC accepted list and match the size to your dog. Offer under supervision, limit daily calories from chews, and avoid ultra-hard items that
          risk tooth fractures. A dental diet can help on days you don&#39;t brush.
        </p>

        <h3 className="text-xl font-semibold mt-4 mb-2">Is &ldquo;anesthesia-free&rdquo; cleaning an option?</h3>
        <p className="mb-4">
          Not for true oral health. Without anesthesia, no X-rays, no subgingival cleaning, no pain-free probing, and no treatment are possible. It can polish crowns while disease
          continues out of sight. If anesthesia worries you, ask your vet how they minimize risk for seniors and fragile patients.
        </p>

        <h3 className="text-xl font-semibold mt-4 mb-2">Will insurance pay for my dog&#39;s cleaning?</h3>
        <p className="mb-6">
          Usually not, unless you purchase a wellness add-on. Insurance often <em>does</em> cover extractions and dental illness under accident/illness policies (subject to terms).
          Verify details with your provider before scheduling.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-3">Owner Checklist (Print or Save)</h2>
        <ul className="list-disc pl-5 space-y-1 mb-8">
          <li>Schedule an oral exam if you notice bad breath, red gums, brown at the gumline, or chewing changes.</li>
          <li>Ask your vet: &ldquo;Will you take full-mouth radiographs? What do you expect on X-rays?&rdquo;</li>
          <li>Request an itemized estimate: labwork, anesthesia, radiographs, cleaning, extractions (if needed), and meds.</li>
          <li>Start or reinforce home care: daily brushing if possible; otherwise a mix of VOHC chews/diet/additives.</li>
          <li>Pick safe toys: pass the thumbnail and kneecap tests; save tennis balls for fetch only (not gnawing).</li>
          <li>For seniors: review recent labs; ask about nerve blocks, temperature support, and monitoring.</li>
          <li>Insurance: confirm what&#39;s covered for <em>illness</em> vs. <em>prevention</em>; consider a wellness add-on if you want cleaning reimbursement.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-3">References &amp; Further Reading</h2>
        <ul className="list-disc pl-5 space-y-2 mb-10">
          <li>
            AAHA Dental Care Guidelines for Dogs &amp; Cats (2019) — comprehensive steps for COHAT, periodontal staging, and practice standards.
            <a className="underline ml-1" href="https://www.aaha.org/resources/2019-aaha-dental-care-guidelines-for-dogs-and-cats/periodontal-disease-staging/" target="_blank" rel="noopener noreferrer">Periodontal staging</a>{' '}
            |{' '}
            <a className="underline" href="https://www.aaha.org/wp-content/uploads/globalassets/02-guidelines/dental/aaha_dental_guidelines.pdf" target="_blank" rel="noopener noreferrer">Full guideline PDF</a>
          </li>
          <li>
            AAHA Anesthesia &amp; Monitoring Guidelines for Dogs &amp; Cats (2020) — modern protocols that make anesthesia safer for seniors.
            <a className="underline ml-1" href="https://www.aaha.org/resources/2020-aaha-anesthesia-and-monitoring-guidelines-for-dogs-and-cats/" target="_blank" rel="noopener noreferrer">Overview</a>{' '}
            |{' '}
            <a className="underline" href="https://www.aaha.org/wp-content/uploads/globalassets/02-guidelines/2020-anesthesia/anesthesia_and_monitoring_guidelines_final.pdf" target="_blank" rel="noopener noreferrer">PDF</a>
          </li>
          <li>
            American Veterinary Dental College — Position &amp; owner education on periodontal disease and why &ldquo;anesthesia-free&rdquo; dentistry is inadequate.
            <a className="underline ml-1" href="https://afd.avdc.org/pet-periodontal-disease/" target="_blank" rel="noopener noreferrer">Periodontal disease</a>{' '}
            |{' '}
            <a className="underline" href="https://afd.avdc.org/reasons-not-to-choose-anethesia-free-pet-dentals/" target="_blank" rel="noopener noreferrer">Anesthesia-free dentistry</a>
          </li>
          <li>
            Veterinary Oral Health Council (VOHC) — current list of accepted chews, diets, water additives, toothpastes, and wipes that meet plaque/tartar reduction standards.
            <a className="underline ml-1" href="https://vohc.org/accepted-products/" target="_blank" rel="noopener noreferrer">Accepted products (site)</a>{' '}
            |{' '}
            <a className="underline" href="https://vohc.org/wp-content/uploads/2025/02/VOHCAcceptedProductsTable_Dogs-02.07.2025-1.pdf" target="_blank" rel="noopener noreferrer">Dog list (Feb 2025)</a>
          </li>
          <li>
            AVMA — Pet dental care basics; prevalence of periodontal disease by age three; why annual exams matter.
            <a className="underline ml-1" href="https://www.avma.org/resources-tools/pet-owners/petcare/pet-dental-care" target="_blank" rel="noopener noreferrer">Pet dental care</a>
          </li>
          <li>
            Toothpaste &amp; xylitol warning — use pet toothpaste only.
            <a className="underline ml-1" href="https://vcahospitals.com/know-your-pet/brushing-teeth-in-dogs" target="_blank" rel="noopener noreferrer">VCA: Brushing in dogs</a>
          </li>
          <li>
            Tennis ball abrasiveness &amp; alternatives for fetch.
            <a className="underline ml-1" href="https://www.akc.org/expert-advice/advice/are-tennis-balls-safe-for-dogs/" target="_blank" rel="noopener noreferrer">AKC: Tennis balls &amp; teeth</a>
          </li>
          <li>
            Cost &amp; insurance overviews.
            <a className="underline ml-1" href="https://www.forbes.com/advisor/pet-insurance/pet-care/dog-teeth-cleaning-costs/" target="_blank" rel="noopener noreferrer">Forbes Advisor: Cleaning costs</a>{' '}
            |{' '}
            <a className="underline" href="https://www.petmd.com/dog/care/how-much-does-dog-teeth-cleaning-cost" target="_blank" rel="noopener noreferrer">PetMD: Cost factors</a>{' '}
            |{' '}
            <a className="underline" href="https://www.forbes.com/advisor/pet-insurance/pet-dental-insurance/" target="_blank" rel="noopener noreferrer">Forbes Advisor: Dental insurance</a>{' '}
            |{' '}
            <a className="underline" href="https://www.embracepetinsurance.com/research/does-pet-insurance-cover-dental-teeth-cleaning" target="_blank" rel="noopener noreferrer">Embrace: Cleanings &amp; wellness add-ons</a>
          </li>
        </ul>

        {/* Back link */}
        <Link
          href={`/${locale}/blog`}
          className="underline text-[#2c4a30] font-medium hover:opacity-80"
        >
          ← Back to Blog
        </Link>

        {/* Disclaimer */}
        <p className="text-xs text-gray-500 mt-8">
          This article is educational and shares general guidance for healthy adult and senior dogs. Always follow your veterinarian&#39;s advice for your individual pet,
          especially if your dog has pre-existing medical conditions, is immunocompromised, or has a history of anesthesia complications. Product availability, costs, and insurance
          terms vary by region and over time. Never use human toothpaste for pets; xylitol is toxic to dogs.
        </p>
      </main>
    </>
  );
}
