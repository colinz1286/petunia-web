'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function LabradorRetrieverLifeExpectancyAndLifespan() {
  const locale = useLocale();

  const title =
    'Labrador Retriever Life Expectancy & Lifespan: How to Maximize Your Lab’s Healthy Years';
  const date = 'April 12, 2025';
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
            <li><a href="#tl-dr" className="underline hover:opacity-80">TL;DR</a></li>
            <li><a href="#what-to-expect" className="underline hover:opacity-80">Lifespan: What to Expect</a></li>
            <li><a href="#big-levers" className="underline hover:opacity-80">The 5 Big Longevity Levers</a></li>
            <li><a href="#weight" className="underline hover:opacity-80">Weight &amp; Body Condition</a></li>
            <li><a href="#nutrition" className="underline hover:opacity-80">Nutrition &amp; Supplements</a></li>
            <li><a href="#preventive" className="underline hover:opacity-80">Preventive Vet Care</a></li>
            <li><a href="#orthopedic" className="underline hover:opacity-80">Orthopedic Protection</a></li>
            <li><a href="#cancer" className="underline hover:opacity-80">Cancer Awareness</a></li>
            <li><a href="#endocrine" className="underline hover:opacity-80">Endocrine &amp; Metabolic</a></li>
            <li><a href="#skin-ears" className="underline hover:opacity-80">Skin &amp; Ears</a></li>
            <li><a href="#fitness" className="underline hover:opacity-80">Daily Fitness &amp; Recovery</a></li>
            <li><a href="#safety" className="underline hover:opacity-80">Safety: Heat, Water, Environment</a></li>
            <li><a href="#genetics" className="underline hover:opacity-80">Genetics, Color &amp; Testing</a></li>
            <li><a href="#senior" className="underline hover:opacity-80">Senior Care &amp; Comfort</a></li>
            <li><a href="#qol" className="underline hover:opacity-80">Quality of Life Tools</a></li>
            <li><a href="#templates" className="underline hover:opacity-80">Checklists &amp; Templates</a></li>
            <li><a href="#faq" className="underline hover:opacity-80">FAQ</a></li>
            <li><a href="#sources" className="underline hover:opacity-80">📚 Sources</a></li>
          </ul>
        </nav>

        {/* TL;DR */}
        <section id="tl-dr" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Short Answer (TL;DR)</h2>
          <p className="mb-4">
            Most Labrador Retrievers live <strong>about 11–13 years</strong>. Large, real-world UK data suggest a <strong>median of ~12 years</strong>,
            with some variation by coat color and health history. What moves the needle most? <strong>Keeping a lean body condition</strong>,
            smart daily exercise with <em>recovery</em>, vigilant ear/skin care for swimmers, early veterinary attention for lumps, limps,
            and itch, and a calm, structured routine that prevents injuries and stress. Weight control alone can add meaningful healthy years.
          </p>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Petunia tip:</strong> Use Petunia to keep feed amounts, weight logs, vaccine dates, meds, and senior checkups synchronized
            across family, veterinarian, and daycare/boarding. Better data sharing = faster, safer decisions when something changes.
          </div>
        </section>

        {/* WHAT TO EXPECT */}
        <section id="what-to-expect" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Labrador Life Expectancy: What the Data Say</h2>
          <p className="mb-3">
            Population-level studies are more useful than anecdotes. The largest UK primary-care dataset reported a <strong>median lifespan around 12 years</strong> for Labrador Retrievers, with chocolate-coated dogs about <strong>1.4 years shorter</strong> median longevity than black or yellow Labs. Colors do not cause short life by themselves—associated skin/ear disease patterns and breeder selection choices likely play roles—but the trend is notable in big data.
          </p>
          <p className="mb-3">
            The most powerful single intervention owners control is <strong>keeping dogs lean</strong>. A landmark lifetime study of 48
            Labrador littermates showed that maintaining ideal body condition via calorie control <strong>extended median lifespan by ~15%</strong>
            (nearly <em>two years</em>) and delayed chronic disease.
          </p>
          <p>
            Put simply: Labs can live a long time for a medium-large breed—often into the teens—when families stack small, consistent habits.
          </p>
        </section>

        {/* BIG LEVERS */}
        <section id="big-levers" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">The 5 Big Longevity Levers You Control</h2>
          <ol className="list-decimal pl-5 space-y-2 mb-3">
            <li><strong>Lean body condition:</strong> the #1 variable tied to lifespan across breeds, including Labs.</li>
            <li><strong>Structured movement &amp; recovery:</strong> daily exercise plus rest prevents injuries and supports joints.</li>
            <li><strong>Preventive veterinary care:</strong> vaccines, parasite prevention, dental care, and early diagnostics.</li>
            <li><strong>Allergy/ear management:</strong> control itch and moisture to avoid chronic inflammation and infections.</li>
            <li><strong>Early detection of lumps/lameness:</strong> small tumors are easier to remove; early orthopedic care preserves mobility.</li>
          </ol>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Operator mindset:</strong> Don’t chase perfection; install a <em>repeatable system</em>. We give you weekly templates below.
          </div>
        </section>

        {/* WEIGHT */}
        <section id="weight" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Weight &amp; Body Condition: Add Years by Avoiding “Just a Few Pounds”</h2>
          <p className="mb-3">
            Obesity shortens life and worsens nearly every chronic disease: arthritis, heat intolerance, respiratory strain, some cancers,
            anesthesia risk, and skin disease. Lean Labs live longer and move better.
          </p>
          <h3 className="text-lg font-semibold mt-2 mb-1">How “Lean” Should a Lab Be?</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Ribs easily felt with light pressure; not protruding.</li>
            <li>Visible waist from above; abdominal tuck from the side.</li>
            <li>Bright energy and comfortable movement on walks.</li>
          </ul>
          <h3 className="text-lg font-semibold mt-2 mb-1">Practical Feeding Framework</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Measure meals; use part of the ration for training.</li>
            <li>Re-weigh monthly; if trending up, reduce calories ~10–15% and add low-impact movement.</li>
            <li>Swap biscuits for veggie snacks or tiny training treats.</li>
            <li>Feed a <strong>complete &amp; balanced</strong> diet appropriate for life stage/activity; ask your veterinarian if unsure.</li>
          </ul>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Petunia tip:</strong> Log weight and portions in Petunia; share with your vet and daycare. Clear instructions prevent overfeeding away from home.
          </div>
        </section>

        {/* NUTRITION */}
        <section id="nutrition" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Nutrition &amp; Supplements (Evidence-Informed)</h2>
          <p className="mb-3">
            Nutrition is a lever you use 2–3 times daily. Choose products that disclose who formulates the diet, how it’s tested, and whether it meets
            recognized standards for completeness and balance. Consider omega-3 fatty acids (EPA/DHA) for skin/joint support under veterinary guidance.
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Complete &amp; balanced:</strong> look for statements aligned with AAFCO/WSAVA guidance; avoid “intermittent use only” as the main diet.</li>
            <li><strong>Slow transitions:</strong> change foods over 7–10 days to protect the gut and avoid flares that derail ear/skin stability.</li>
            <li><strong>Fish oil:</strong> discuss dosing with your veterinarian; more isn’t better if it upsets the GI tract.</li>
          </ul>
        </section>

        {/* PREVENTIVE CARE */}
        <section id="preventive" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Preventive Vet Care: The Boring Stuff That Saves Years</h2>
          <p className="mb-3">
            Vaccinations, parasite prevention, dental care, and periodic screening catch small problems before they become big ones. Large-breed dogs
            hide pain well; don’t rely on “acting normal.”
          </p>
          <ul className="list-disc pl-5 space-y-2 mb-3">
            <li><strong>Vaccines:</strong> follow AAHA/WSAVA-aligned schedules tailored to your dog’s risks.</li>
            <li><strong>Parasites:</strong> prevent fleas/ticks/heartworm year-round as recommended; parasites drive itch, infections, and systemic disease.</li>
            <li><strong>Dental:</strong> daily brushing or VOHC-approved chews; dental disease is inflammatory and painful—treat it like it steals years (it does).</li>
            <li><strong>Screening labs (adult/senior):</strong> discuss timing with your veterinarian; early thyroid, kidney, or liver trends inform decisions.</li>
          </ul>
        </section>

        {/* ORTHOPEDIC */}
        <section id="orthopedic" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Orthopedic Protection: Preserve Mobility, Preserve Years</h2>
          <p className="mb-3">
            Hips, elbows, and cruciate ligaments are common pain points in medium-large athletes like Labs. You can’t rewrite genetics, but you can
            cut risk: build muscle, protect joints from repetitive impact, and keep nails short and floors grippy.
          </p>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>Routine:</strong> warm up → activity block → cool down → nap. Predictable rhythms reduce injuries.</li>
            <li><strong>Surfaces:</strong> traction runners over slick floors; ramps for cars/sofas.</li>
            <li><strong>Conditioning:</strong> hill walks, controlled fetch in short sets, swimming with ear care afterward.</li>
            <li><strong>Flag pain early:</strong> stiffness after rest, reluctance to jump, or asymmetric sit → book a veterinary exam.</li>
          </ul>
        </section>

        {/* CANCER */}
        <section id="cancer" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Cancer Awareness: Find Small, Act Early</h2>
          <p className="mb-3">
            Common cancers in Labs include mast cell tumors, lymphoma, and hemangiosarcoma. Early detection improves options. Do a monthly
            “nose-to-tail” scan: note new lumps, weight/energy changes, gum color, and any unexplained bruising or collapse. Small masses are easier
            to remove with clean margins—don’t “watch it” for months.
          </p>
        </section>

        {/* ENDOCRINE */}
        <section id="endocrine" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Endocrine &amp; Metabolic: Hypothyroidism, Weight Biology &amp; Appetite</h2>
          <p className="mb-3">
            Hypothyroidism is a common mid-life issue in dogs, with signs like weight gain without diet changes, lethargy, and skin/ear problems.
            Your veterinarian can diagnose with blood tests and manage with medication. Separate from thyroid, some Labs carry a <em>POMC</em> gene
            deletion associated with increased weight and appetite—biology, not “stubbornness.” That makes structured feeding and exercise even more
            crucial.
          </p>
        </section>

        {/* SKIN & EARS */}
        <section id="skin-ears" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Skin &amp; Ears: Control Itch, Protect Years</h2>
          <p className="mb-3">
            Labs love water and have floppy ears—moisture plus allergies can spiral into chronic infections and misery. Atopic dermatitis (environmental
            allergy) is common across breeds; it’s manageable but rarely “curable.” Proactive care preserves comfort and sleep for everyone.
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Dry ears after swims/baths; use vet-approved cleaners if prone to otitis.</li>
            <li>Treat itch early to avoid skin breaks and secondary infections.</li>
            <li>Year-round parasite prevention first—fleas magnify everything.</li>
          </ul>
        </section>

        {/* FITNESS */}
        <section id="fitness" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Daily Fitness &amp; Recovery: Consistency Beats Weekend Marathons</h2>
          <p className="mb-3">
            Labs thrive on movement—sniff walks, retrieve games in short sets, hill work, swimming with ear care, and brain games like scentwork.
            What extends lifespan isn’t just activity; it’s <strong>the routine</strong>: predictable cycles of play → training micro-session → potty
            → nap. Over-arousal and random sprints produce injuries; structure builds stamina and keeps joints happy.
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Adolescents: protect open growth plates—avoid repetitive high-impact jumps and forced running.</li>
            <li>Seniors: shorter, more frequent walks; traction mats; pain plans with your veterinarian.</li>
          </ul>
        </section>

        {/* SAFETY */}
        <section id="safety" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Safety: Heat, Water &amp; Environmental Risk</h2>
          <p className="mb-3">
            Longevity isn’t only disease prevention—it’s avoiding catastrophes. Labs can overheat because they’ll <em>keep going</em> for a ball.
            In hot/humid weather, move sessions to mornings/evenings, cap fetch sets, and carry water. Water safety matters too: rinse/dry after
            lakes, avoid toxic algae, and teach a repeatable recall off the shoreline.
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Use shade breaks and “settle” on a mat between play blocks.</li>
            <li>Car safety: seat-belt tether or crate with anchor points.</li>
            <li>Home: secure trash/meds; use gates to separate children and high-value items; traction on stairs.</li>
          </ul>
        </section>

        {/* GENETICS */}
        <section id="genetics" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Genetics, Color &amp; Testing: What to Ask Breeders</h2>
          <p className="mb-3">
            There is one Labrador breed; lines vary in emphasis. Regardless of “English” vs “Field,” ask for health clearances: hips, elbows, eyes, and
            discussion of EIC/PRA status. In population data, chocolate Labs had shorter median lifespan, likely reflecting complex factors (skin/ear
            disease burden, selection). Screening plus weight control are your controllables.
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Ask to see OFA/PennHIP and current ophthalmology exam results.</li>
            <li>Ask about EIC DNA status and eye disease in the pedigree; test if history suggests risk.</li>
          </ul>
        </section>

        {/* SENIOR */}
        <section id="senior" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Senior Care &amp; Comfort: Add Life to Years</h2>
          <p className="mb-3">
            Many Labs are “young seniors” at seven. Twice-yearly veterinary visits, pain control, traction, and predictable routines add comfort and
            reduce anxiety. Hearing and vision changes are common—use hand signals and brighter lighting; avoid furniture layout changes that confuse.
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Revisit calories—metabolism slows; keep lean to protect arthritic joints.</li>
            <li>Short, frequent outings; warm-ups matter in cool weather.</li>
            <li>Gentle bodywork and cooperative care training (chin rest, stationing) make daily meds and grooming low-stress.</li>
          </ul>
        </section>

        {/* QOL */}
        <section id="qol" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Quality-of-Life Tools: Clarity When It Matters</h2>
          <p className="mb-3">
            When dogs reach late senior stages or serious illness, objective tools help families make humane decisions. The <strong>“HHHHHMM”</strong>
            scale (Hurt, Hunger, Hydration, Hygiene, Happiness, Mobility, and More Good Days than Bad) offers a structured way to track trends over time.
            Talk with your veterinarian about how often to score and how to interpret your dog’s pattern.
          </p>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Compassionate planning:</strong> Give yourself time to think when your Lab is comfortable—document preferences, set thresholds,
            and make a plan with your vet team. Tools help reduce doubt in hard moments.
          </div>
        </section>

        {/* TEMPLATES */}
        <section id="templates" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Checklists &amp; Templates</h2>

          <h3 className="text-lg font-semibold mt-2 mb-1">Weekly Longevity Rhythm (Example)</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>Mon:</strong> 25–30 min sniff walk + 2 recall games + weigh/BCS note.</li>
            <li><strong>Tue:</strong> hill walk 20 min + mat settle + nail check.</li>
            <li><strong>Wed:</strong> swim or fetch circuits (short sets) + ear dry + brush-out.</li>
            <li><strong>Thu:</strong> long-line field hike + “leave it/drop” reps.</li>
            <li><strong>Fri:</strong> city walk with polite passes + café settle.</li>
            <li><strong>Sat:</strong> sport class or scentwork + nap window protected.</li>
            <li><strong>Sun:</strong> lighter day + laundry: bedding/throws + baseboard wipe.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Monthly “Nose-to-Tail” Scan</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Run hands over skin; map new lumps/bumps; photograph with a coin for scale.</li>
            <li>Check ears (redness/odor), teeth (tartar), eyes (cloudiness), nails (length).</li>
            <li>Watch gait after rest &amp; after a brisk walk; note stiffness or limping.</li>
            <li>Record weight and food amount; adjust to keep a visible waist.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">“When to Call the Vet Now”</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Unproductive retching, distended abdomen, collapse (suspect bloat) → emergency.</li>
            <li>Collapse/wobble after exertion; heat distress; sudden non–weight-bearing lameness.</li>
            <li>New mass growing over days/weeks; oozing/ulcerated skin lesions.</li>
            <li>Ear pain/odor, head tilt, disorientation, or repeated eye rubbing.</li>
          </ul>

          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm mt-3">
            <strong>Petunia workflow:</strong> Store feeding amounts, meds, vaccine dates, and weight logs in Petunia; share with your boarding/daycare
            provider and vet so every handoff keeps your longevity plan intact.
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">Frequently Asked Questions</h2>

          <p className="mb-3">
            <strong>How long do most Labrador Retrievers live?</strong><br />
            Many Labs live <strong>11–13 years</strong>; large UK datasets report a median around <strong>12 years</strong>. Genetics, weight, and medical care
            shift individuals above or below that range.
          </p>

          <p className="mb-3">
            <strong>Is it true chocolate Labs live shorter lives?</strong><br />
            In UK primary-care data, chocolate-coated Labs had a <strong>shorter median lifespan (≈10.7 years)</strong> than black/yellow (~12.1). Color is a
            proxy for other factors; still, the pattern is worth noting. Keep any Lab lean and well-cared-for.
          </p>

          <p className="mb-3">
            <strong>What single change adds the most years?</strong><br />
            <strong>Leanness.</strong> A controlled-feeding study in Labradors extended median lifespan by roughly <strong>15%</strong> and delayed chronic disease.
          </p>

          <p className="mb-3">
            <strong>Should I test for EIC?</strong><br />
            If history suggests exertional wobble/collapse or you’re breeding/working a Lab, discuss testing with your veterinarian and adjust activity plans.
          </p>

          <p className="mb-3">
            <strong>Which vaccines are “core” for longevity?</strong><br />
            Core vaccines (e.g., rabies, distemper, parvovirus, adenovirus) prevent severe, life-threatening disease. Follow AAHA-aligned guidance individualized to your dog.
          </p>

          <p>
            <strong>Does Petunia replace veterinary care?</strong><br />
            No—Petunia organizes routines and records. Your veterinarian diagnoses and treats. Use both for the best outcomes.
          </p>
        </section>

        {/* SOURCES */}
        <section id="sources" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">📚 Sources (Selected)</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            <li>
              McGreevy, P. D., et al. (2018). <em>Labrador retrievers under primary veterinary care in the UK</em> (VetCompass/PLOS One): median lifespan ~12 years; chocolate shorter.{' '}
              <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC6196571/" target="_blank" rel="noopener noreferrer">Open access summary</a>.
            </li>
            <li>
              Royal Veterinary College VetCompass. <em>Chocolate Labradors have shorter lifespan than rest of the breed</em> (news summary).{' '}
              <a href="https://www.rvc.ac.uk/vetcompass/news/chocolate-labradors-have-shorter-lifespan-than-rest-of-breed" target="_blank" rel="noopener noreferrer">RVC VetCompass</a>.
            </li>
            <li>
              Kealy, R. D., et&nbsp;al. (2002). <em>Effects of diet restriction on life span and age-related changes in dogs</em>. <strong>JAVMA</strong>.{' '}
              <a href="https://pubmed.ncbi.nlm.nih.gov/11991408/" target="_blank" rel="noopener noreferrer">PubMed</a>{' '}|{' '}
              <a href="https://avmajournals.avma.org/view/journals/javma/220/9/javma.2002.220.1315.pdf" target="_blank" rel="noopener noreferrer">PDF</a>.
            </li>
            <li>
              Salt, C., et&nbsp;al. (2018). Association between life span and body condition in dogs across 12 breeds. <em>J Vet Intern Med</em>.{' '}
              <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC6335446/" target="_blank" rel="noopener noreferrer">Open access</a>.
            </li>
            <li>
              AAHA Canine Vaccination Guidelines (2022).{' '}
              <a href="https://www.aaha.org/resources/2022-aaha-canine-vaccination-guidelines/" target="_blank" rel="noopener noreferrer">Overview</a>{' '}|{' '}
              <a href="https://www.aaha.org/wp-content/uploads/globalassets/02-guidelines/2022-aaha-canine-vaccination-guidelines/resources/2022-aaha-canine-vaccinations-guidelines.pdf" target="_blank" rel="noopener noreferrer">Full PDF</a>.
            </li>
            <li>
              WSAVA Global Nutrition Guidelines &amp; Toolkit.{' '}
              <a href="https://wsava.org/global-guidelines/global-nutrition-guidelines/" target="_blank" rel="noopener noreferrer">Guidelines</a>{' '}|{' '}
              <a href="https://wsava.org/wp-content/uploads/2021/04/Selecting-a-pet-food-for-your-pet-updated-2021_WSAVA-Global-Nutrition-Toolkit.pdf" target="_blank" rel="noopener noreferrer">Selecting a Pet Food</a>.
            </li>
            <li>
              Merck Veterinary Manual. Obesity and associated health risks in small animals.{' '}
              <a href="https://www.merckvetmanual.com/management-and-nutrition/nutrition-small-animals/nutrition-in-disease-management-in-small-animals" target="_blank" rel="noopener noreferrer">Merck Vet Manual</a>.
            </li>
            <li>
              University of Minnesota Canine Genetics Lab. Exercise-Induced Collapse (DNM1/EIC).{' '}
              <a href="https://canine-genetics.umn.edu/canine-genetic-testing/dynamin-1-associated-exercise-induced-collapse" target="_blank" rel="noopener noreferrer">UMN EIC page</a>.
            </li>
            <li>
              Raffan, E., et&nbsp;al. (2016). <em>A deletion in the canine POMC gene is associated with weight and appetite in obesity-prone Labrador retriever dogs</em>. <strong>Cell Metabolism</strong>.{' '}
              <a href="https://www.cell.com/cell-metabolism/fulltext/S1550-4131(16)30163-2" target="_blank" rel="noopener noreferrer">Publisher page</a>{' '}|{' '}
              <a href="https://pubmed.ncbi.nlm.nih.gov/27157046/" target="_blank" rel="noopener noreferrer">PubMed</a>.
            </li>
            <li>
              AAHA (2023). Management of Allergic Skin Diseases in Dogs &amp; Cats (diagnosis/treatment framework).{' '}
              <a href="https://www.aaha.org/wp-content/uploads/globalassets/02-guidelines/2023-aaha-management-of-allergic-skin-diseases-in-dogs-and-cats-guidelines/resources/2023-aaha-management-of-allergic-skin-diseases-guidelines.pdf" target="_blank" rel="noopener noreferrer">PDF</a>.
            </li>
            <li>
              Cornell University Riney Canine Health Center. Atopic dermatitis overview.{' '}
              <a href="https://www.vet.cornell.edu/departments-centers-and-institutes/riney-canine-health-center/canine-health-information/atopic-dermatitis-atopy" target="_blank" rel="noopener noreferrer">Cornell</a>.
            </li>
            <li>
              Villalobos, A. “HHHHHMM” Quality-of-Life Scale resources (examples and adaptations).{' '}
              <a href="https://vmc.vet.osu.edu/sites/default/files/documents/how-will-i-know_rev_mar2024ms_0.pdf" target="_blank" rel="noopener noreferrer">Ohio State VMC</a>{' '}|{' '}
              <a href="https://caringpathways.com/wp-content/uploads/2018/02/QualityofLifeScale.pdf" target="_blank" rel="noopener noreferrer">Caring Pathways</a>.
            </li>
          </ul>
          <p className="text-xs text-gray-600 mt-4">
            Educational content only—use alongside your veterinarian’s guidance for diagnosis and treatment.
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