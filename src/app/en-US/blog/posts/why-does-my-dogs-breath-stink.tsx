'use client';

import Head from 'next/head';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function WhyDoesMyDogsBreathStink() {
  const locale = useLocale();

  const title =
    'Why Does My Dog&#39;s Breath Stink? Dental Health, Real Causes, Red Flags, Fixes, Costs, and Breed Risk—An In-Depth Owner Guide';
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
    'A 4,000+ word, evidence-informed guide to dog halitosis: how dental disease actually develops, the specific smells that mean “go now,” what really fixes it (and what doesn&#39;t), realistic U.S. cost ranges, which breeds are higher-risk, and a step-by-step plan to keep teeth healthy for life. Includes VOHC-style home care and clinic checklists.';

  return (
    <>
      <Head>
        <title>{title} – Petunia Blog</title>
        <meta name="description" content={description} />
        {/* Per user preference, avoid the word "index" here. */}
        <meta name="robots" content="all" />
        <link
          rel="canonical"
          href={`https://www.petuniapets.com/${locale}/blog/why-does-my-dogs-breath-stink`}
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
            <li><a href="#decoder" className="underline hover:opacity-80">Bad-Breath Decoder</a></li>
            <li><a href="#science" className="underline hover:opacity-80">What&#39;s Really Happening</a></li>
            <li><a href="#causes" className="underline hover:opacity-80">Common Causes (Mouth, Around Mouth, Systemic)</a></li>
            <li><a href="#risk" className="underline hover:opacity-80">Are Some Dogs More at Risk?</a></li>
            <li><a href="#red-flags" className="underline hover:opacity-80">When to Be Concerned</a></li>
            <li><a href="#fix" className="underline hover:opacity-80">How to Fix It (Home &amp; Clinic)</a></li>
            <li><a href="#costs" className="underline hover:opacity-80">What It Costs</a></li>
            <li><a href="#plan90" className="underline hover:opacity-80">A 90-Day Turnaround Plan</a></li>
            <li><a href="#faq" className="underline hover:opacity-80">FAQ</a></li>
            <li><a href="#sources" className="underline hover:opacity-80">Sources (Selected)</a></li>
          </ul>
        </nav>

        {/* TL;DR */}
        <section id="tldr" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Short Answer (TL;DR)</h2>
          <div className="space-y-3">
            <p>
              Most stinky dog breath is not “normal”—it&#39;s an early warning for <strong>plaque-driven gum disease</strong>.
              A sticky biofilm forms on the teeth, bacteria flourish under the gumline, and the mouth releases volatile sulfur compounds (the rotten-egg smell).
              Without intervention, gingivitis progresses to periodontitis, bone loss, loose teeth, and pain. Professional cleaning <em>under anesthesia</em> plus
              <strong> daily brushing</strong> and <strong>VOHC-accepted products</strong> keep things healthy long-term.
            </p>
            <p>
              Certain smells merit faster action: <strong>sweet/acetone</strong> can hint at diabetes, <strong>ammonia/urine-like</strong> can appear with kidney disease,
              and a <strong>putrid, one-sided odor with nasal discharge</strong> can accompany an oronasal fistula or severe dental disease.
              If breath changes suddenly or your dog is drooling, pawing at the mouth, or off food, book a veterinary exam promptly.
            </p>
            <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
              <strong>Petunia tip:</strong> Add brushing to your Petunia weekly plan, track VOHC chews used, and log dental photos on the first day of each month.
            </div>
          </div>
        </section>

        {/* Decoder */}
        <section id="decoder" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Bad-Breath Decoder: What the Smell Can Mean</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Rotten egg / sulfurous:</strong> classic periodontal biofilm odor (volatile sulfur compounds). Often improves after proper cleaning and home care.</li>
            <li><strong>Sweet / fruity (like nail polish remover):</strong> possible ketosis from <em>diabetes mellitus</em>; urgent same-week vet visit, sooner if drinking/urinating more, losing weight, or lethargic.</li>
            <li><strong>Ammonia / urine-like:</strong> possible uremic odor with significant <em>kidney disease</em>; needs lab work and exam.</li>
            <li><strong>Fecal / sewage:</strong> coprophagia (eating feces) or severe dental disease; also consider GI disease or anal-gland contamination around lips/hair.</li>
            <li><strong>Putrid with one-sided nasal discharge, sneezing after eating:</strong> consider <em>oronasal fistula</em> or foreign body; veterinary dental exam with radiographs is indicated.</li>
          </ul>
          <p className="text-sm text-gray-600 mt-2">Odor alone is not diagnostic. Use it as a clue, then let your veterinarian confirm the cause and the plan.</p>
        </section>

        {/* Science */}
        <section id="science" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">What&#39;s Really Happening in Dog Mouths (The Simple Science)</h2>
          <p className="mb-3">
            Within hours of a meal, a microscopic biofilm (plaque) coats teeth. Anaerobic bacteria thrive, especially just under the gumline.
            These bacteria produce <strong>volatile sulfur compounds (VSCs)</strong> such as hydrogen sulfide and methyl mercaptan—the chemicals responsible for
            that unmistakable “dog breath.” As inflammation sets in, gums redden and bleed (gingivitis). With time, the immune system and bacteria
            damage the periodontal tissues and bone (periodontitis), teeth loosen, and pain quietly escalates. Even before teeth get loose, the smell
            tells the story.
          </p>
          <p className="mb-3">
            Two key truths: (1) <strong>daily</strong> brushing disrupts plaque best; (2) once calculus (tartar) and subgingival plaque are established, you cannot
            fix it with chews alone—your dog needs a thorough professional cleaning with <em>dental radiographs</em> under general anesthesia so the vet team can
            clean below the gumline, assess hidden roots, and treat disease safely.
          </p>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Owner reality check:</strong> “Anesthesia-free” scraping makes crowns look whiter but leaves disease under the gums. It is cosmetic, not curative,
            and can delay proper care. Always choose anesthetized veterinary dentistry.
          </div>
        </section>

        {/* Causes */}
        <section id="causes" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Common Causes of Bad Breath</h2>

          <h3 className="text-lg font-semibold mt-2 mb-1">A) Inside the Mouth (most common)</h3>
          <ul className="list-disc pl-5 space-y-2 mb-3">
            <li><strong>Gingivitis → Periodontitis:</strong> plaque biofilm, calculus, gum inflammation, pocketing, bone loss.</li>
            <li><strong>Fractured or worn teeth with pulp exposure:</strong> painful, often infected; may smell sharply foul.</li>
            <li><strong>Retained baby teeth / malocclusions:</strong> trap plaque, crowding in toy/brachycephalic mouths accelerates disease.</li>
            <li><strong>Foreign bodies:</strong> sticks, burrs, string, bone shards lodged under tongue or across palate—sudden odor, drool, pawing.</li>
            <li><strong>Oral masses / ulcerative conditions:</strong> less common but serious; any bleeding, mass, or non-healing sore warrants exam.</li>
            <li><strong>Oronasal fistula (often upper canine region):</strong> oral-to-nasal hole from advanced disease; fetid odor, unilateral nasal discharge, sneezing after eating.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">B) Around the Mouth</h3>
          <ul className="list-disc pl-5 space-y-2 mb-3">
            <li><strong>Coprophagia:</strong> fecal eating quickly turns breath foul; also contamination from licking anal area or soiled hair.</li>
            <li><strong>Lip-fold dermatitis / skin infection:</strong> moisture and bacteria in lip folds create persistent odor.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">C) Systemic Causes (breath as a medical clue)</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Diabetes mellitus:</strong> sweet/acetone breath with increased thirst/urination and weight loss.</li>
            <li><strong>Kidney disease:</strong> uremic (ammonia-like) breath, inappetence, vomiting, ulcers in severe cases.</li>
            <li><strong>Liver disease:</strong> unusual musty/foul odor with lethargy, vomiting, or neurologic signs; immediate care is wise.</li>
            <li><strong>Severe GI disease or EPI:</strong> maldigestion/malabsorption can alter oral microenvironment and odor.</li>
          </ul>
        </section>

        {/* Risk */}
        <section id="risk" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Are Some Dogs More at Risk Than Others?</h2>
          <ul className="list-disc pl-5 space-y-2 mb-3">
            <li><strong>Toy and small breeds</strong> (e.g., Yorkies, Chihuahuas, Dachshunds, Poodles): crowded teeth and tighter spacing mean plaque packs in fast.</li>
            <li><strong>Brachycephalic breeds</strong> (flat-faced): shortened jaws → overcrowding and rotated teeth; hygiene is harder, disease accelerates.</li>
            <li><strong>Older dogs</strong>: years of plaque cycles, prior extractions, or gum recession raise risk.</li>
            <li><strong>Endocrine/immune issues</strong> (diabetes, Cushing&#39;s): impaired healing and higher infection risk.</li>
            <li><strong>Diet &amp; chewing habits</strong>: soft sticky diets without mechanical abrasion; chewing on hard bones hoovers calculus <em>but</em> breaks teeth—avoid fractured carnassials by skipping antlers/bones/rocks.</li>
          </ul>
          <p className="text-sm text-gray-600">Genetics and skull shape set the baseline; <em>daily</em> home care changes the outcome.</p>
        </section>

        {/* Red flags */}
        <section id="red-flags" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">When Should I Be Concerned?</h2>
          <div className="grid gap-3">
            <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4">
              <h3 className="font-semibold mb-1">Same-day / Emergency</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Severe drooling, pawing at the mouth, unable to close/open mouth, or facial swelling.</li>
                <li>Sweet/acetone breath with vomiting, lethargy, or deep/labored breathing.</li>
                <li>Ammonia odor with vomiting, ulcers, or profound lethargy.</li>
                <li>Bloody saliva, sudden refusal to eat, or suspected foreign body/bone shard.</li>
              </ul>
            </div>
            <div className="rounded-md border border-[#d9cfc2] p-4">
              <h3 className="font-semibold mb-1">Soon (within a few days)</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Bad breath that’s new or worsening, especially with red, bleeding gums or loose teeth.</li>
                <li>Unilateral nasal discharge, sneezing after eating, or “honk” cough associated with meals.</li>
                <li>Chronic ear/skin infections plus malodor—check for lip folds, diet issues, or allergies.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Fix */}
        <section id="fix" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">How to Fix It—What Works (and What Doesn&#39;t)</h2>

          <h3 className="text-lg font-semibold mt-2 mb-1">Step 1: Professional Cleaning Under Anesthesia</h3>
          <p className="mb-3">
            A proper veterinary dental (prophy) includes pre-anesthetic exam, bloodwork as indicated, IV catheter, airway protection, monitoring,
            <strong> full-mouth dental radiographs</strong>, scaling both above and below the gumline, polishing, probing, and treatment planning.
            Extractions or advanced procedures are decided by your veterinarian based on radiographs and exam findings. This is the only way to
            address the disease <em>where it actually lives</em>—beneath the gumline.
          </p>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm mb-3">
            <strong>Important:</strong> “Anesthesia-free” cleanings are cosmetic and cannot clean under the gumline or take radiographs. They risk
            missing painful disease and can create a false sense of security.
          </div>

          <h3 className="text-lg font-semibold mt-2 mb-1">Step 2: Daily Home Care (Gold Standard)</h3>
          <ol className="list-decimal pl-5 space-y-2 mb-3">
            <li><strong>Brush daily.</strong> Use a soft pet toothbrush or finger brush and pet-specific toothpaste (never human paste—xylitol can be toxic).</li>
            <li><strong>Target the gumline.</strong> Gentle circular strokes where teeth meet gum; count slow to ten per quadrant.</li>
            <li><strong>Pair with rewards.</strong> Start with muzzle handling, then paste licking, then one tooth, then a row. Keep sessions short and upbeat.</li>
            <li><strong>Add VOHC-accepted aids.</strong> Dental diets, chews, water additives, gels, and wipes with the VOHC seal help control plaque/tartar.</li>
            <li><strong>Track it.</strong> In Petunia, set a repeating nightly reminder and attach quick photos monthly to spot trends early.</li>
          </ol>

          <h3 className="text-lg font-semibold mt-2 mb-1">Step 3: Smart Chewing (Without Broken Teeth)</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Choose <strong>VOHC-accepted</strong> chews sized for your dog’s jaw; supervise to avoid gulping.</li>
            <li>Avoid antlers, real bones, rocks—if a thumbnail can’t dent it, it’s hard enough to fracture teeth.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Step 4: Treat the Root Cause</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Foreign body:</strong> remove and treat wounds; antibiotics/pain relief as prescribed.</li>
            <li><strong>Oronasal fistula:</strong> surgical repair and addressing the underlying periodontal disease.</li>
            <li><strong>Diabetes / kidney / liver disease:</strong> manage the medical condition—breath improves as control returns.</li>
          </ul>
        </section>

        {/* Costs */}
        <section id="costs" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">What Does It Cost to Maintain Healthy Teeth?</h2>
          <p className="mb-3">
            Prices vary by region, hospital type, pet size/age, and disease severity. Ballpark U.S. ranges (not quotes):
          </p>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>Anesthetized cleaning with radiographs (uncomplicated):</strong> often <strong>~$170–$750</strong> at general practices; specialty hospitals and advanced cases can run higher.</li>
            <li><strong>With extractions and advanced therapy:</strong> can exceed <strong>$1,000–$2,000+</strong> depending on number of teeth, surgical time, and medications.</li>
            <li><strong>Home care:</strong> toothbrush + pet toothpaste ~$10–$25; VOHC chews/diets/water additives vary—budget <strong>$10–$40/month</strong> depending on product and dog size.</li>
          </ul>
          <p className="text-sm text-gray-600">
            Ask what your clinic’s dental package includes (radiographs, nerve blocks, pain meds, recheck). Consider pet insurance wellness add-ons or
            dedicated savings for dentals in middle-aged and senior dogs.
          </p>
        </section>

        {/* Plan 90 */}
        <section id="plan90" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">A 90-Day Turnaround Plan (Owner Playbook)</h2>
          <h3 className="text-lg font-semibold mt-2 mb-1">Days 1–7: Reset &amp; Baseline</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Book a dental exam; ask about radiographs and a same-day prophy if indicated.</li>
            <li>Start desensitization to brushing: touch muzzle → lift lip → lick paste → brush one tooth.</li>
            <li>Switch to a <strong>VOHC-accepted</strong> daily chew; log usage in Petunia.</li>
            <li>Photograph teeth today (left/right molars, front incisors) for comparison later.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Weeks 2–6: Build the Routine</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Brush at least 5 nights a week; add a water additive if your vet approves.</li>
            <li>Teach a calm “chin rest” cue so your dog holds still while you brush.</li>
            <li>Feed measured meals; avoid sticky, sugary treats that cling to teeth.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Weeks 7–12: Lock It In</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Re-photo teeth at week 8; compare to baseline.</li>
            <li>Brush nightly; keep a backup brush and paste in the living room for quick sessions during TV time.</li>
            <li>Schedule the next dental recheck or prophy per your veterinarian’s plan.</li>
          </ul>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm mt-3">
            <strong>Petunia tip:</strong> Create a shared “Dental” routine card for your family—assign one person to brush and another to log photos and chews.
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">Frequently Asked Questions</h2>

          <p className="mb-3">
            <strong>Is puppy breath supposed to smell weird?</strong><br />
            Mild, temporary odor during teething can happen. Persistent foul smell, bleeding, pain, or reluctance to eat warrants a veterinary exam to check for
            retained baby teeth, malocclusions, or foreign bodies.
          </p>

          <p className="mb-3">
            <strong>How often should professional cleanings be done?</strong><br />
            Depends on breed risk and home care. Many dogs benefit from annual anesthetized cleanings with full-mouth radiographs; high-risk mouths (toy/brachy breeds)
            may need more frequent care. Your veterinarian will tailor the schedule to your dog’s mouth and medical status.
          </p>

          <p className="mb-3">
            <strong>What if I can&#39;t brush every day?</strong><br />
            Aim for daily as the gold standard. If that’s not feasible, commit to several times per week and add VOHC-accepted aids (chews/diets/water additives).
            Even then, plan on regular professional cleanings—home care complements, it doesn’t replace, what happens under anesthesia.
          </p>

          <p className="mb-3">
            <strong>Is bad breath dangerous to overall health?</strong><br />
            The smell itself isn’t the danger—the underlying infection and inflammation are. Periodontal disease hurts, can seed bacteria into the bloodstream,
            and often coexists with other medical problems. Treat the cause, and breath and comfort improve together.
          </p>

          <p className="mb-3">
            <strong>Can supplements or “miracle gels” replace brushing?</strong><br />
            No single product replaces the mechanical disruption of plaque. Choose products with the <em>VOHC Seal of Acceptance</em> and use them <em>with</em> brushing.
          </p>

          <p className="text-xs text-gray-600">
            Educational content only. Always consult your veterinarian for individualized medical advice, diagnostics, and anesthesia decisions.
          </p>
        </section>

        {/* Sources */}
        <section id="sources" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">📚 Sources (Selected)</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            <li>
              AAHA Dental Care Guidelines for Dogs and Cats (2019).{' '}
              <a href="https://www.aaha.org/resources/2019-aaha-dental-care-guidelines-for-dogs-and-cats/" target="_blank" rel="noopener noreferrer">Guideline hub</a>{' '}
              | <a href="https://www.aaha.org/wp-content/uploads/globalassets/02-guidelines/dental/aaha_dental_guidelines.pdf" target="_blank" rel="noopener noreferrer">PDF</a>
            </li>
            <li>
              American Veterinary Dental College (AVDC): Anesthesia-free dental cleaning facts and risks.{' '}
              <a href="https://afd.avdc.org/" target="_blank" rel="noopener noreferrer">Owner hub</a>{' '}
              | <a href="https://afd.avdc.org/risks-of-anesthesia-free-pet-dental-cleanings/" target="_blank" rel="noopener noreferrer">Risks</a>{' '}
              | <a href="https://www.avma.org/javma-news/2016-02-01/below-surface-anesthesia-free-dentistry" target="_blank" rel="noopener noreferrer">AVMA overview</a>
            </li>
            <li>
              Veterinary Oral Health Council (VOHC): Accepted products for dogs.{' '}
              <a href="https://vohc.org/accepted-products/" target="_blank" rel="noopener noreferrer">Directory</a>{' '}
              | <a href="https://vohc.org/wp-content/uploads/2025/02/VOHCAcceptedProductsTable_Dogs-02.07.2025-1.pdf" target="_blank" rel="noopener noreferrer">Latest canine list</a>
            </li>
            <li>
              Merck/MSD Veterinary Manual: Periodontal disease, dental disorders, mouth disorders, diabetes, kidney disease.{' '}
              <a href="https://www.merckvetmanual.com/digestive-system/dentistry-in-small-animals/periodontal-disease-in-small-animals" target="_blank" rel="noopener noreferrer">Periodontal disease</a>{' '}
              | <a href="https://www.merckvetmanual.com/dog-owners/digestive-disorders-of-dogs/dental-disorders-of-dogs" target="_blank" rel="noopener noreferrer">Dental disorders (owners)</a>{' '}
              | <a href="https://www.msdvetmanual.com/urinary-system/noninfectious-diseases-of-the-urinary-system-in-small-animals/renal-dysfunction-in-dogs-and-cats" target="_blank" rel="noopener noreferrer">Renal dysfunction</a>{' '}
              | <a href="https://www.merckvetmanual.com/endocrine-system/the-pancreas/diabetes-mellitus-in-dogs-and-cats" target="_blank" rel="noopener noreferrer">Diabetes mellitus</a>
            </li>
            <li>
              VCA Animal Hospitals: Halitosis in dogs; brushing instructions.{' '}
              <a href="https://vcahospitals.com/know-your-pet/halitosis-in-dogs" target="_blank" rel="noopener noreferrer">Halitosis</a>{' '}
              | <a href="https://vcahospitals.com/know-your-pet/brushing-teeth-in-dogs" target="_blank" rel="noopener noreferrer">Brushing guide</a>
            </li>
            <li>
              Halitosis &amp; volatile sulfur compounds in dogs: recent evidence and reviews.{' '}
              <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10458929/" target="_blank" rel="noopener noreferrer">Porphyromonas &amp; VSCs (2023)</a>{' '}
              | <a href="https://bmcvetres.biomedcentral.com/articles/10.1186/s12917-022-03267-8" target="_blank" rel="noopener noreferrer">Oral-care interventions &amp; malodour (2022)</a>{' '}
              | <a href="https://pubmed.ncbi.nlm.nih.gov/38477668/" target="_blank" rel="noopener noreferrer">Dental chews &amp; VSCs (2024)</a>
            </li>
            <li>
              Cost anchors (non-binding; varies by market).{' '}
              <a href="https://www.forbes.com/advisor/pet-insurance/pet-care/dog-teeth-cleaning-costs/" target="_blank" rel="noopener noreferrer">Forbes Advisor (2025)</a>{' '}
              | <a href="https://www.carecredit.com/well-u/pet-care/cat-and-dog-teeth-cleaning-cost-and-financing/" target="_blank" rel="noopener noreferrer">CareCredit cost explainer</a>{' '}
              | <a href="https://www.petmd.com/dog/care/how-much-does-dog-teeth-cleaning-cost" target="_blank" rel="noopener noreferrer">PetMD overview</a>
            </li>
          </ul>
          <p className="text-xs text-gray-600 mt-4">
            Figures and guidance are illustrative. Confirm specifics (diagnostics, anesthesia plans, itemized costs) with your veterinary team.
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
