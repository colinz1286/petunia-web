'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function HowToChooseTheRightDogFood() {
  const locale = useLocale();

  // --- Metadata ---------------------------------------------------------------
  const title =
    'How to Choose the Right Dog Food: A Systems-Based, Evidence-Informed Owner’s Guide (Labels, Life Stages, Sensitivities, and Real-World Feeding)';
  const date = 'July 14, 2025';
  const categories = ['owner', 'food'] as const;

  // Keep keys/labels EXACTLY as used in prior posts
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
    train: 'Training'
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
            <li><a href="#summary" className="underline hover:opacity-80">TL;DR + Petunia Tip</a></li>
            <li><a href="#how-to-think" className="underline hover:opacity-80">How to Think About Dog Food</a></li>
            <li><a href="#labels" className="underline hover:opacity-80">Reading Labels (AAFCO/WSAVA)</a></li>
            <li><a href="#life-stage" className="underline hover:opacity-80">Life Stage &amp; Size (incl. Large-Breed Growth)</a></li>
            <li><a href="#calories" className="underline hover:opacity-80">Calories, BCS &amp; Portion Math</a></li>
            <li><a href="#transition" className="underline hover:opacity-80">Safe Transitions</a></li>
            <li><a href="#formats" className="underline hover:opacity-80">Food Formats 101</a></li>
            <li><a href="#ingredients" className="underline hover:opacity-80">Ingredients &amp; Myths (By-Products, Grain-Free)</a></li>
            <li><a href="#hydration" className="underline hover:opacity-80">Hydration &amp; Moisture</a></li>
            <li><a href="#macros" className="underline hover:opacity-80">Protein, Fat, Carbs &amp; Fiber</a></li>
            {/* Next parts */}
            <li><a href="#sensitivities" className="underline hover:opacity-80">Food Sensitivities &amp; Testing (Part 2)</a></li>
            <li><a href="#exercise" className="underline hover:opacity-80">Diet ↔ Exercise/Lifestyle (Part 3)</a></li>
            <li><a href="#special-diets" className="underline hover:opacity-80">Special Diets (Puppy, Senior, Medical) (Part 4)</a></li>
            <li><a href="#home-raw" className="underline hover:opacity-80">Home-Prepared &amp; Raw: Risks/Controls (Part 5)</a></li>
            <li><a href="#storage" className="underline hover:opacity-80">Storage, Safety &amp; Recalls (Part 6)</a></li>
            <li><a href="#operator" className="underline hover:opacity-80">Operator Checklists (Part 7)</a></li>
            <li><a href="#faq" className="underline hover:opacity-80">FAQ + Sources (Part 8)</a></li>
          </ul>
        </nav>

        {/* TL;DR */}
        <section id="summary" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">TL;DR + Petunia Tip</h2>
          <p className="mb-3">
            Your best diet is <strong>complete &amp; balanced for the right life stage</strong>, fits your dog’s size and activity,
            and is delivered with <strong>portion control, body condition monitoring, and consistent routines</strong>. Avoid
            marketing traps (ingredient buzzwords) and focus on four signals: (1) the AAFCO <em>nutritional adequacy</em> statement,
            (2) the manufacturer’s transparency &amp; quality control, (3) your dog’s condition/performance on the food, and
            (4) safety basics: storage, hygiene, and gradual changes.
          </p>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Petunia tip:</strong> In your Petunia profile, create a <em>“Food &amp; Feeding”</em> note with your dog’s ideal weight,
            current food (photo of the AAFCO statement + lot number), daily gram/cup portion, BCS photo (top/side), treat log
            (&lt;10% of calories), and a 7-day transition plan template. Share it with family/sitters so the plan survives real life.
          </div>
        </section>

        {/* HOW TO THINK */}
        <section id="how-to-think" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">How to Think About Dog Food (Systems, Not Slogans)</h2>
          <p className="mb-3">
            Nutrition is a <em>system</em>, not a slogan. Labels and ads are loud; your dog’s body is the quiet dashboard.
            Start with <strong>complete &amp; balanced</strong> food appropriate to age/size/activity, then run a repeatable loop:
            <em> portion by calories → observe stool/skin/energy → track weight and Body Condition Score (BCS) → adjust</em>.
            When needs change (growth, training load, medical conditions), adjust the inputs—don’t chase marketing terms.
          </p>
        </section>

        {/* LABELS */}
        <section id="labels" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Reading Labels (AAFCO, WSAVA, and What Actually Matters)</h2>
          <p className="mb-3">
            On U.S. shelves, look for the <strong>AAFCO nutritional adequacy statement</strong>. It tells you whether a product is
            “complete &amp; balanced” for a life stage (e.g., <em>growth</em>, <em>adult maintenance</em>, <em>all life stages</em>) and whether it was
            <em> formulated</em> to meet nutrient profiles or proven via <em>feeding trials</em>. Ingredients must be listed by common name
            in descending order by weight, and FDA expects truthful labeling and good manufacturing practices. “Premium/holistic”
            terms are <em>marketing</em>, not regulatory categories. Use WSAVA’s owner tools to evaluate brand transparency and nutrition support.
          </p>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>“All life stages” = meets growth/repro standards; some foods specify <em>including growth of large size dogs</em> (70 lb+).</li>
            <li>Ingredient order is by <em>pre-processing weight</em>; fresh meats rank high partly due to water.</li>
            <li>Focus on the <em>whole diet’s</em> adequacy, not single ingredients.</li>
          </ul>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm mt-3">
            <strong>Petunia tip:</strong> Snap a clear photo of the AAFCO statement on the bag/can and save it with the lot number.
            It’s gold for your vet if troubleshooting or reporting a quality issue.
          </div>
        </section>

        {/* LIFE STAGE & SIZE */}
        <section id="life-stage" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Life Stage &amp; Size: Match the Food to the Dog</h2>
          <p className="mb-3">
            Pick a diet labeled for your dog’s current life stage and relevant size/needs. Puppies require higher protein, energy, and
            precise mineral balance; seniors may benefit from adjusted calories, protein targets, and joint/renal considerations
            (with your vet). Large-breed puppies (≥70 lb adult) have <em>special growth constraints</em>—choose foods that explicitly say
            they’re appropriate for “growth, including the growth of large size dogs,” or “all life stages including large size dogs,”
            and heed calcium/phosphorus limits to reduce growth-related orthopedic risks.
          </p>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li><strong>Puppies:</strong> Growth diet; for large-breed pups, verify the “including growth of large size dogs (70 lb+)” language.</li>
            <li><strong>Adults:</strong> Adult maintenance unless breeding/working demands a higher energy density.</li>
            <li><strong>All life stages:</strong> Adequate for growth/repro; portion carefully for sedentary adults.</li>
            <li><strong>Reproduction:</strong> Use explicit repro/growth formulas late gestation through lactation.</li>
          </ul>
        </section>

        {/* CALORIES & BCS */}
        <section id="calories" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Calories, Body Condition, and Portion Math (Owner-Grade)</h2>
          <p className="mb-3">
            Start with RER (Resting Energy Requirement) ≈ <strong>70 × BW(kg)<sup>0.75</sup></strong>. Multiply by a life-stage/activity factor
            to estimate daily calories, then refine weekly using BCS and scale/measurements. Treats should be ≤<strong>10%</strong> of daily calories;
            adjust the main diet if you go over.
          </p>
          <div className="rounded-md border border-[#d9cfc2] bg-[#fffaf2] p-4 text-sm mb-3">
            <strong>Example:</strong> 20-kg adult, moderately active. RER ≈ 70 × 20<sup>0.75</sup> ≈ 662 kcal. Daily target ≈ 1.4 × RER ≈ 925 kcal.
            If treats ~90 kcal/day, main food allotment ≈ 835 kcal/day. Convert using the label’s kcal/cup or kcal/can.
          </div>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>Use a kitchen scale for accuracy (grams beat cups).</li>
            <li>Track BCS monthly with top/side photos; aim for BCS 4–5/9 unless vet advises otherwise.</li>
            <li>Re-calc during growth, season changes, training load shifts, or after neuter/spay.</li>
          </ul>
        </section>

        {/* TRANSITIONS */}
        <section id="transition" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Safe Transitions (7–10 Days, Not 7–10 Hours)</h2>
          <ol className="list-decimal pl-5 space-y-1 mb-3">
            <li>Days 1–2: 75% old / 25% new</li>
            <li>Days 3–4: 50% / 50%</li>
            <li>Days 5–6: 25% / 75%</li>
            <li>Days 7–10: 100% new (pause progression if stool softens; extend steps)</li>
          </ol>
          <p className="text-sm">
            Keep a mini-log (stool, gas, itch, appetite). If vomiting/lethargy/black stool: call your vet.
          </p>
        </section>

        {/* FORMATS */}
        <section id="formats" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Food Formats 101 (Dry, Wet, Air-Dried, Fresh-Cooked, Freeze-Dried)</h2>
          <p className="mb-3">
            Dry (kibble) is convenient, stable, and energy-dense. Canned/wet offers higher moisture and palatability. Air-dried,
            baked, or freeze-dried/frozen “fresh” diets vary widely—<em>the label must still say complete &amp; balanced</em> for your
            dog’s life stage. Moisture influences how much your dog drinks; dogs on canned diets often drink less because their
            food carries more water. Storage/hygiene practices matter regardless of format.
          </p>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Petunia tip:</strong> For picky eaters, try a “consistency first” rule: fix mealtimes, weigh portions, add a <em>measured</em>
            topper that doesn’t exceed 10% of calories, and stop free-feeding. Appetite often normalizes within a week.
          </div>
        </section>

        {/* INGREDIENTS & MYTHS */}
        <section id="ingredients" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Ingredients &amp; Myths (By-Products, “Grain-Free,” and Reality)</h2>
          <h3 className="text-lg font-semibold mt-2 mb-1">By-products &amp; meals</h3>
          <p className="mb-3">
            “By-product” means a secondary product from processing—not “waste.” Nutritional quality depends on sourcing and processing,
            and by-products/meals can be highly digestible, nutrient-dense ingredients when defined and used properly. The label’s
            <em> adequacy</em> and the company’s quality control matter more than that single word.
          </p>
          <h3 className="text-lg font-semibold mt-2 mb-1">“Grain-free” and DCM context</h3>
          <p className="mb-3">
            Diet-associated dilated cardiomyopathy (DCM) has been investigated extensively. The FDA has not established a definitive
            causal relationship with any specific ingredient or brand. Work with your veterinarian if you have a breed at risk or
            if your dog is on a legume-rich/exotic-ingredient diet—diet history and appropriate screening can be individualized.
            Above all, choose a manufacturer that provides robust formulation/QA transparency.
          </p>
        </section>

        {/* HYDRATION */}
        <section id="hydration" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Hydration &amp; Moisture: Quiet Performance Multiplier</h2>
          <p className="mb-3">
            Typical daily water needs land around ~40–70 mL/kg/day in thermoneutral conditions, modulated by diet moisture, heat,
            and activity. Canned diets contribute substantial water; dry-fed dogs should always have fresh water available. For
            dogs with low water intake or urinary issues, discuss strategies like adding moisture to meals or incorporating some
            canned food (within a complete &amp; balanced plan) with your veterinarian.
          </p>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>Refresh bowls daily; clean food/water dishes regularly.</li>
            <li>During heat or work days, plan for extra water breaks; watch for panting and dark urine as early cues.</li>
          </ul>
        </section>

        {/* MACROS */}
        <section id="macros" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">Protein, Fat, Carbs &amp; Fiber (What Owners Actually Need)</h2>
          <p className="mb-3">
            Dogs are dietary omnivores with flexible metabolism. At a minimum, protein must cover essential amino acids and support
            lean mass; fat supplies essential fatty acids and energy density; carbohydrates are a practical energy/fiber source that
            can aid stool quality and gut health. There is no single “magic” macro ratio—appropriate ranges depend on life stage,
            body condition, and activity.
          </p>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li><strong>Protein:</strong> Growth diets target higher g protein/1,000 kcal; adults need adequate but not excessive protein for maintenance.</li>
            <li><strong>Fat:</strong> Drives energy density and palatability; manage carefully in pancreatitis-prone individuals.</li>
            <li><strong>Carbs &amp; fiber:</strong> Soluble/insoluble fiber blends influence stool, satiety, and the microbiome; switch gradually to avoid GI upset.</li>
          </ul>
        </section>

                {/* FOOD SENSITIVITIES & TESTING */}
        <section id="sensitivities" className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">Food Sensitivities &amp; Testing (What Works, What Doesn’t)</h2>
          <p className="mb-3">
            Dogs can react to components of food in two broad ways: <strong>immune-mediated</strong> (often called food allergy or
            cutaneous adverse food reaction, CAFR) and <strong>non-immune</strong> intolerance (e.g., fat intolerance, additive sensitivity).
            The clinical pictures often overlap—itchy skin/ears, chronic or recurrent GI signs—so diagnosis must rely on
            <em> response to diet</em>, not marketing terms or quick tests.
          </p>

          <h3 className="text-lg font-semibold mt-2 mb-1">Gold Standard: The Elimination Diet + Challenge</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>Phase 1 (Elimination):</strong> Feed a <em>single</em> complete &amp; balanced diet that the dog has <em>never</em> eaten before (novel protein/carb) <em>or</em> a <em>veterinary hydrolyzed</em> protein diet for <strong>8 weeks</strong> without any other foods.</li>
            <li><strong>Phase 2 (Provocation/Challenge):</strong> Reintroduce the prior diet or a single suspect ingredient. <em>Flare = diagnosis.</em> Remove the trigger, return to the elimination diet, then add back items later one-by-one to map safe ingredients.</li>
            <li><strong>Why 8 weeks?</strong> Dermatologic signs may take that long to fully remit; some dogs need longer. GI signs often improve sooner (2–4 weeks) but still require the full course for clarity.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">What About Blood, Saliva, Hair, or “Mail-In” Sensitivity Tests?</h3>
          <p className="mb-3">
            They are <strong>not</strong> reliable for diagnosing food allergy in dogs. Studies show poor repeatability and results that are no
            better than chance—including “positives” from fake or inanimate samples. Use your budget on a proper diet trial and coaching instead.
          </p>

          <h3 className="text-lg font-semibold mt-2 mb-1">Hydrolyzed vs Novel Protein Diets</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>Hydrolyzed:</strong> Proteins are broken into smaller fragments to reduce immune recognition. These diets are designed for trials and long-term feeding, but <em>no</em> diet is 100% risk-free for every dog.</li>
            <li><strong>Novel protein:</strong> Use a truly <em>new-to-your-dog</em> meat/carb combination. Beware cross-contact and “flavor” ingredients that reintroduce common proteins.</li>
            <li><strong>Practical pick:</strong> If your dog has eaten many proteins already, start with a veterinary hydrolyzed diet. If your history is clean (e.g., only chicken so far), a carefully chosen novel diet can work well.</li>
          </ul>

          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm mb-4">
            <strong>Petunia tip:</strong> In your <em>Food &amp; Feeding</em> note, add a one-page <em>Diet Trial Contract</em> for the whole household:
            permitted foods (brand/flavor), exact grams/day, <em>approved treats only</em> (see list below), pill-pockets that match the trial, and a
            promise to log any slip-ups. Post it on the fridge and share with your sitter/daycare.
          </div>

          <h3 className="text-lg font-semibold mt-2 mb-1">Owner-Grade Elimination Diet Plan (8 Weeks)</h3>
          <ol className="list-decimal pl-5 space-y-2 mb-3">
            <li><strong>Pick the diet:</strong> Veterinary hydrolyzed <em>or</em> truly novel complete &amp; balanced food. Photograph the bag/can AAFCO statement and lot.</li>
            <li><strong>Lock the perimeter:</strong> Remove access to other pets’ bowls, trash, litter boxes, wildlife, and flavored chews/bones.</li>
            <li><strong>Treat list (trial-safe):</strong> Use the <em>same</em> trial diet as treats (kibble counted from daily ration), or a single-ingredient version of the trial protein/carb, or the manufacturer’s trial-approved treats. Plain water only.</li>
            <li><strong>Medications/supplements:</strong> Ask your vet to avoid flavored meds. Confirm any chewables, pastes, or “natural flavor” match the trial.</li>
            <li><strong>Track outcomes:</strong> Weekly itch score (0–10), ear debris/odor, stool log (consistency, blood/mucus), vomiting episodes, weight/BCS photos.</li>
            <li><strong>Challenge:</strong> At week 8 (or when your vet advises), reintroduce the <em>previous</em> diet or a single ingredient for 3–14 days while logging signs. If signs flare, return to trial food until calm, then add individual ingredients later to build a safe long-term menu.</li>
          </ol>

          <h3 className="text-lg font-semibold mt-2 mb-1">Label &amp; Manufacturing Traps (Don’t Let Them Sink Your Trial)</h3>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li><strong>“Limited ingredient” and “hypoallergenic”</strong> are <em>marketing terms</em>, not regulated diagnostics. Read the full ingredient list.</li>
            <li><strong>Cross-contact/mislabeling happen:</strong> DNA studies have found undeclared proteins in some commercial “novel” or “mono-protein” diets. Choose reputable manufacturers and veterinary lines when the stakes are high.</li>
            <li><strong>Watch for hidden proteins:</strong> “Natural flavor,” “animal fat,” or “broth” might derive from common allergens (e.g., poultry). Verify source with the company.</li>
            <li><strong>Treats &amp; chews:</strong> Dental sticks, rawhides, bully sticks, pig ears, jerky, and flavored toys can all break the trial.</li>
          </ul>

          <div className="rounded-md border border-[#d9cfc2] bg-[#fffaf2] p-4 text-sm mt-3">
            <strong>Quality-control call:</strong> Use WSAVA’s “questions to ask” checklist to vet brands (nutritionist on staff? feeding trials? manufacturing control? recall history?). Email the company and save responses in your Petunia note.
          </div>
        </section>

        {/* PICKING PROTEINS & FIBERS STRATEGICALLY */}
        <section id="protein-fiber" className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">Picking Proteins &amp; Fibers Strategically</h2>
          <p className="mb-3">
            After you identify safe ingredients, build a diet that your dog <em>thrives</em> on—good stool, healthy skin/ears, stable energy,
            and an ideal body condition. Two big levers are <strong>protein choice</strong> and the <strong>type/amount of fiber</strong>.
          </p>

          <h3 className="text-lg font-semibold mt-2 mb-1">Protein Playbook</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>Digestibility &amp; history:</strong> Prefer proteins your dog digests well and that have a clean history for skin/ear flares.</li>
            <li><strong>Rotate carefully:</strong> Once stable for 6–8 weeks, consider a <em>planned</em> rotation among safe options to broaden menu and resilience—<em>one</em> change at a time with a 7–10 day transition.</li>
            <li><strong>Hydrolyzed long-term:</strong> Many dogs can remain healthy on a veterinary hydrolyzed diet indefinitely; monitor BCS, labs as advised, and skin/ear status.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Fiber Toolkit (Outcomes, Not Percentages)</h3>
          <p className="mb-3">
            “Crude fiber” on labels misses soluble/insoluble nuance. Think outcomes: stool form, regularity, satiety, and GI comfort.
          </p>
          <ul className="list-disc pl-5 space-y-1 text-sm mb-3">
            <li><strong>Large-bowel diarrhea/colitis:</strong> Blends of fermentable and non-fermentable fiber (e.g., beet pulp + cellulose/psyllium) can normalize stool and reduce urgency.</li>
            <li><strong>Weight &amp; satiety:</strong> Fiber can help dogs feel full on fewer calories while supporting stool quality.</li>
            <li><strong>Prebiotics (FOS/MOS, etc.):</strong> May improve stool consistency and support a healthy microbiome in some contexts; results vary by blend and dose.</li>
            <li><strong>EPI caution:</strong> In enzyme-dependent dogs, high insoluble, non-fermentable fiber can <em>interfere</em> with fat absorption; your vet may prefer lower insoluble fiber during stabilization.</li>
          </ul>

          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>How to test fiber safely:</strong> Hold the base diet steady. Add <em>one</em> change (e.g., 1 tsp/10 kg psyllium husk mixed with water, once daily) for 5–7 days. Track stool and comfort. Stop if gas/bloating or softer stool appears.
          </div>
        </section>

        {/* PRACTICAL DECISION TREE */}
        <section id="decision-tree" className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">Decision Tree: Which Trial Diet Should I Start?</h2>
          <ol className="list-decimal pl-5 space-y-2 mb-3">
            <li><strong>Minimal prior exposures?</strong> Pick a <em>novel protein</em> complete &amp; balanced diet (verify no chicken/egg/dairy/fish components if those are common in past foods).</li>
            <li><strong>Broad exposure history or severe, year-round signs?</strong> Choose a <em>veterinary hydrolyzed</em> diet for best odds.</li>
            <li><strong>GI-dominant signs?</strong> Prefer highly digestible diets; consider those with targeted fiber blends. Avoid abrupt fat jumps.</li>
            <li><strong>After success:</strong> Map safe ingredients via single-ingredient challenges and build a sustainable plan (kibble/can wet equivalents; approved treats; pill strategies).</li>
          </ol>
        </section>

        {/* OPERATOR CHECKLISTS: DIET TRIAL */}
        <section id="operator-diet-trial" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">Operator-Grade Checklist: 8-Week Diet Trial</h2>

          <h3 className="text-lg font-semibold mt-2 mb-1">Pre-Launch (Day 0)</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Confirm <strong>complete &amp; balanced</strong> (AAFCO statement) and life stage match.</li>
            <li>Weigh the dog; document BCS (side/top photos). Create a stool log template.</li>
            <li>List <em>all</em> prior proteins and carbs; circle true “novel” options.</li>
            <li>Email manufacturer: ask about cross-contact controls; save responses.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">During Trial (Weeks 1–8)</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Weigh portions in grams; treats come from the trial food or single-ingredient matches.</li>
            <li>Block all unauthorized food sources (kids, neighbors, training class treats, daycare snacks, flavored meds).</li>
            <li>Weekly scores: itch (0–10), ear debris/odor, stool (consistency, blood/mucus), vomiting episodes.</li>
            <li>If relapse occurs, check for a breach first; then consult your veterinarian to adjust plan.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Challenge &amp; Lock-In</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Reintroduce the original diet or a single ingredient while logging signs for up to 14 days. If a flare occurs, confirm by removing it and observing improvement.</li>
            <li>Build a safe pantry: main diet + 1–2 backup SKUs, matching treats, pill strategies, and a travel plan.</li>
          </ul>
        </section>

                {/* PART 3 — Diet ↔ Exercise & Lifestyle, Timing, Hydration, Weight Management */}
        <section id="diet-exercise" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Dial the Diet to Your Dog’s Lifestyle</h2>
          <p className="mb-3">
            Food is fuel. The right choice and amount depend on daily workload, environment, physiology, and goals. Start with a science-based energy estimate, then fine-tune using body condition and performance.
          </p>
          <ol className="list-decimal pl-5 space-y-2 mb-4">
            <li><strong>Calculate a starting point:</strong> Resting Energy Requirement (RER) ≈ 70 × (body-weight in kg to the power of 0.75). Multiply by a life-stage/activity factor to get a daily target.</li>
            <li><strong>Classify the lifestyle:</strong> couch companion, weekend warrior, daily athlete, or working/sport dog. Energy needs rise with distance, duration, terrain, temperature, and coat.</li>
            <li><strong>Adjust with outcomes:</strong> re-weigh every 2–4 weeks, record Body Condition Score (BCS) and Muscle Condition Score (MCS), and adjust calories in 5–10% steps.</li>
          </ol>

          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm mb-4">
            <strong>Petunia tip:</strong> Track a simple loop for 4 weeks: workload → food grams/kcal → result (weight, BCS/MCS, stool, energy). Patterns appear fast.
          </div>

          <h3 className="text-lg font-semibold mt-2 mb-1">Lifestyle Buckets & Practical Targets</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Couch companion:</strong> many neutered adults maintain near one-and-a-half times RER; keep treats within ten percent of daily calories.</li>
            <li><strong>Weekend warrior:</strong> hold a stable weekday baseline, then add ten to twenty percent calories on long-hike days (or shift some dinner to the trail as small feedings).</li>
            <li><strong>Daily athlete:</strong> common range is roughly one-and-a-half to two-and-a-half times RER depending on mileage, terrain, and heat; prioritize digestibility and consistency.</li>
            <li><strong>Working or sport dogs:</strong> endurance work benefits from higher-fat energy density; sprint work leans more on accessible carbohydrate. Keep protein robust to protect lean mass.</li>
          </ul>
        </section>

        <section id="feeding-timing" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Meal Timing Around Exercise (Performance & GI Safety)</h2>
          <p className="mb-3">
            Two goals drive timing: optimize comfort and reduce bloat risk in deep-chested breeds. Practical guidance:
          </p>
          <ul className="list-disc pl-5 space-y-2 mb-3">
            <li>Avoid hard exercise just before or after meals; use multiple smaller meals and keep mealtime calm in bloat-prone dogs.</li>
            <li>For intense sessions, many teams feed the main meal well before exertion (often the prior evening) and use tiny, low-bulk “top-ups” away from peak activity.</li>
            <li>After training, cool down before feeding and offer several small water breaks instead of one huge chug.</li>
          </ul>

          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Petunia tip:</strong> For agility nights: full breakfast, a few pieces of the regular kibble before runs only if needed, water breaks between sets, then finish dinner after cool-down.
          </div>
        </section>

        <section id="hydration-performance" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Hydration: Heat, Humidity, and When (Not) to Use Electrolytes</h2>
          <p className="mb-3">
            Most healthy dogs meet fluid needs with free-choice water and a complete diet. A typical daily maintenance range is roughly forty to seventy milliliters per kilogram of body weight, adjusted for diet moisture, environment, and activity.
          </p>
          <h3 className="text-lg font-semibold mt-2 mb-1">Electrolytes</h3>
          <ul className="list-disc pl-5 space-y-2 mb-3">
            <li>Because dogs primarily cool by panting, many exercise bouts cause water loss with minimal electrolyte loss; routine supplementation is usually unnecessary on balanced diets.</li>
            <li>Flavored waters can increase voluntary drinking in hot conditions; use them to boost volume, not to “dose” electrolytes indiscriminately.</li>
            <li>Plan shorter sets, more shade, and more frequent water offers in heat and humidity.</li>
          </ul>
        </section>

        <section id="working-sport" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Working & Sport Dogs: Macros, Energy Density, and Recovery</h2>
          <p className="mb-3">
            Dogs are exceptional fat oxidizers. For endurance tasks, higher-fat diets often improve stamina by increasing energy density; sprint-dominant sports benefit from accessible carbohydrate. Keep protein sufficient for tissue repair.
          </p>
          <ul className="list-disc pl-5 space-y-2 mb-3">
            <li><strong>Energy density:</strong> distance, terrain, and temperature can push needs many-fold above maintenance; add calories gradually and keep the formulation consistent during a season.</li>
            <li><strong>Recovery:</strong> rehydrate, normalize temperature, then return to routine meals. Meeting daily energy and protein needs matters more than exotic supplements.</li>
          </ul>

          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Petunia tip:</strong> Endurance block routine: main meal well before heavy work (often the prior evening), tiny pre-work “crumbs” only if needed, then finish the day’s allotment after cool-down.
          </div>
        </section>

        <section id="weight-management" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Weight Management While Staying Active</h2>
          <p className="mb-3">
            Obesity blunts performance, joint comfort, and heat tolerance. A sensible weight-loss rate is about one percent of body weight per week with rechecks every two weeks and calorie adjustments as needed.
          </p>
          <ul className="list-disc pl-5 space-y-2 mb-3">
            <li><strong>Set the target:</strong> calculate RER at ideal weight and feed an energy-restricted, high-nutrient density diet; many programs start near sixty percent of maintenance for the target weight, then titrate.</li>
            <li><strong>Protein and fiber:</strong> preserve lean mass and satiety with adequate protein and smart fiber blends; consider a veterinary weight-management formula.</li>
            <li><strong>Exercise:</strong> prefer frequent, moderate sessions and skill work over repetitive high-impact fetch.</li>
          </ul>

          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Petunia tip:</strong> Weigh every fourteen days. If weekly loss is under half a percent, reduce calories by five to ten percent; if loss exceeds one-and-a-half percent and the dog is hungry, increase by about five percent and reassess.
          </div>
        </section>

        <section id="climate" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Environment: Heat, Cold, and Seasonality</h2>
          <p className="mb-3">
            Energy needs shift outside the thermoneutral zone and with coat and condition. Hot, humid days shorten safe work bouts and drive more frequent water offers; cold snaps raise caloric needs for lean, short-coated dogs. Adjust meal size gradually and monitor weight and BCS.
          </p>
        </section>

        <section id="checklists-lifestyle" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Operator Checklists (Lifestyle & Training Days)</h2>

          <h3 className="text-lg font-semibold mt-2 mb-1">Daily Athlete (Run or Agility Day)</h3>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>Morning meal as usual, or the main meal the prior evening if training at night.</li>
            <li>During the session: water breaks every ten to twenty minutes, shade, and shorter sets in heat; avoid immediate huge water chugs after finishing.</li>
            <li>After: cool down before feeding and log workload, food, and notes.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Weekend Hike</h3>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>Pre-plan route, temperature, and water; pack measured kibble and a collapsible bowl.</li>
            <li>Increase the day’s calories by ten to twenty percent or shift part of dinner to the trail as small feedings; trim back on off-days if weight creeps.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Working Team (Search/Detection)</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Main meal well before work (often the night before). Use tiny, low-bulk snacks only if necessary.</li>
            <li>Stage hydration: plain water plus a lightly flavored option if it increases drinking on very hot days; offer small, frequent drinks.</li>
          </ul>
        </section>

        {/* Sources for Part 3 (kept brief here; full bibliography in Part 8) */}
        <section id="sources-pt3" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">📚 Citations Supporting Part 3</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            <li>Merck Veterinary Manual: energy formulas, activity factors, weight-management guidance.</li>
            <li>WSAVA Global Nutrition Toolkit: brand vetting and nutrition assessment framework.</li>
            <li>Reviews on canine performance nutrition and hydration strategies in working dogs.</li>
            <li>Veterinary guidance on reducing bloat risk: exercise spacing, meal size, and feeding management.</li>
          </ul>
          <p className="text-xs text-gray-600 mt-4">
            These will be consolidated into the comprehensive Sources section in Part 8.
          </p>
        </section>

        <hr className="my-12 border-[#d9cfc2]" />

                {/* PART 4 — Life Stage Nutrition, Therapeutic Diets, and Label Literacy */}
        <section id="life-stages" className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">Life Stage Nutrition (Puppy → Adult → Senior)</h2>
          <p className="mb-3">
            Start with the <strong>nutritional adequacy statement</strong> on the label. AAFCO recognizes life stages as
            <em> gestation/lactation</em>, <em>growth</em>, <em>maintenance</em>, and <em>all life stages</em> (which also meets growth).
            “Senior” is a marketing term rather than a separate AAFCO life stage; what matters is whether the formula is complete
            and balanced for your dog’s current needs.
          </p>

          <h3 className="text-lg font-semibold mt-2 mb-1">Puppies (Small/Medium Breeds)</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Choose foods whose adequacy statement says <em>growth</em> (or <em>all life stages</em>).</li>
            <li>Feed measured meals, prioritize digestibility, and track growth with monthly weights and BCS photos.</li>
            <li>Avoid “cute chubby”—lean growth supports joints and long-term mobility.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Large-Breed Puppies (70 lb+ as Adults)</h3>
          <p className="mb-3">
            Look for the exact wording: <strong>“including growth of large size dogs (70 lb or more as an adult)”</strong>.
            If a product says <em>“except for growth of large size dogs …”</em>, it is not appropriate for large-breed puppies.
            This wording reflects tighter mineral limits (notably calcium) during growth.
          </p>

          <h3 className="text-lg font-semibold mt-2 mb-1">Adults (Maintenance)</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Select an AAFCO <em>maintenance</em> or <em>all life stages</em> diet that fits workload and climate.</li>
            <li>Use the calorie statement (kcal/kg and kcal per cup or can) to portion accurately.</li>
            <li>Re-weigh every few weeks until body weight and BCS are stable.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Seniors</h3>
          <p className="mb-3">
            Needs vary: some seniors need fewer calories; others need <em>more protein</em> to preserve lean mass.
            Let the individual guide the plan—monitor mobility, dental status, appetite, and lab work with your veterinarian.
          </p>
        </section>

        <section id="therapeutic" className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">Therapeutic Diets (When Health Conditions Drive the Menu)</h2>
          <p className="mb-3">
            Prescription diets are formulated for <em>specific diagnoses</em> and should be used under veterinary guidance.
            High-impact examples:
          </p>

          <h3 className="text-lg font-semibold mt-2 mb-1">Chronic Kidney Disease (CKD)</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Therapeutic renal diets reduce uremic crises and can <em>extend survival</em> vs. maintenance foods.</li>
            <li>Core features: restricted phosphorus, adjusted protein with emphasis on quality, controlled sodium, and added long-chain omega-3s.</li>
            <li>Transition slowly; track appetite, weight, and labs per your vet’s schedule.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Pancreatitis &amp; Hyperlipidemia</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Use low-fat, highly digestible diets; smaller, more frequent meals; strict treat control.</li>
            <li>Modern care reintroduces nutrition early once nausea and pain are controlled—avoid prolonged fasting unless directed.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Liver Disease (Copper-Associated Hepatopathy / Chronic Hepatitis)</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Diagnosis (including liver copper quantitation) guides diet. Excess dietary copper can drive hepatic accumulation in susceptible dogs.</li>
            <li>Long-term copper-restricted diets, with chelation or zinc where indicated, are standard once confirmed.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Osteoarthritis (OA)</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>EPA/DHA-enriched diets can improve lameness/weight-bearing in many dogs; effect sizes vary by dose.</li>
            <li>Pair nutrition with weight control, activity modification, and your vet’s analgesic plan.</li>
          </ul>
        </section>

        <section id="label-literacy" className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">Label Literacy: Read Past the Marketing</h2>
          <p className="mb-3">
            Pet food labels must meet AAFCO model regulations (often adopted by states) and FDA truth-in-labeling rules.
            Use this quick decoder:
          </p>

          <h3 className="text-lg font-semibold mt-2 mb-1">1) Nutritional Adequacy Statement</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Confirm “<em>complete and balanced</em>” and the life stage(s) covered (growth/gestation-lactation, maintenance, or all life stages).</li>
            <li>For puppies expected to be 70 lb+ as adults, verify the clause that the food is appropriate for <em>growth of large size dogs</em>.</li>
            <li>“Formulated to meet” (nutrient profile) vs. “animal feeding tests substantiate” (feeding trial) are both allowed pathways—know which you’re buying.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">2) Product-Name Rules (How Much of X Is Really Inside?)</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>95% rule:</strong> “95% Beef” means 95% by weight (70% including water) from the named ingredient(s).</li>
            <li><strong>25% “Dinner/Recipe/Entrée” rule:</strong> named ingredients total at least 25% (at least 10% including water).</li>
            <li><strong>“With” rule (3%):</strong> “With Chicken” requires at least 3% chicken.</li>
            <li><strong>“Flavor” rule:</strong> only a source of the named flavor is required; no minimum content of that ingredient.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">3) Claims &amp; Definitions You’ll See</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>Calorie Content:</strong> must list kcal/kg (as-fed) and kcal per common unit (cup/can)—use this for precise portions.</li>
            <li><strong>“Natural”:</strong> defined for feeds; most complete diets still include synthetic vitamins/minerals.</li>
            <li><strong>“Human grade”:</strong> every ingredient and the finished product must meet human-food handling and documentation requirements.</li>
            <li><strong>“Organic”:</strong> USDA National Organic Program rules apply; look for the USDA seal on certified products.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">4) Manufacturer Transparency (Questions to Ask)</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Who formulates the diet (name/credentials)? Do you employ a full-time qualified nutritionist?</li>
            <li>Do you conduct and publish research? What quality-control and cross-contact safeguards do you use? What is your recall history?</li>
          </ul>
        </section>

        <section id="buyers-checklist" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">Take-to-the-Store Buyer’s Checklist</h2>
          <div className="rounded-md border border-[#d9cfc2] bg-[#fffaf2] p-4">
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Adequacy statement:</strong> life stage matches your dog; large-breed pups need the explicit <em>growth of large size dogs</em> clause.</li>
              <li><strong>Calorie content:</strong> compare kcal per cup/can between options; confirm kcal/kg is listed.</li>
              <li><strong>Ingredients panel:</strong> verify protein sources your dog tolerates; remember “with” is only three percent, and “flavor” does not guarantee content.</li>
              <li><strong>Claims decoder:</strong> “natural,” “human grade,” and “organic” have specific definitions—ask for documentation before paying a premium.</li>
              <li><strong>Brand vetting:</strong> request details on formulators, QA/testing, and recall history; save responses in your Petunia note.</li>
            </ul>
          </div>
        </section>

        {/* Sources for Part 4 (kept brief here; full bibliography in Part 8) */}
        <section id="sources-pt4" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">📚 Citations Supporting Part 4</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            <li>AAFCO model regulations and nutrient profiles (life-stage statements; large-breed growth wording and calcium limits).</li>
            <li>FDA and AAFCO label-literacy resources (product-name rules; calorie statement requirements).</li>
            <li>WSAVA Global Nutrition Toolkit (manufacturer transparency questions; brand vetting).</li>
            <li>AAHA senior-care and nutrition guidance.</li>
            <li>Clinical evidence for renal diets, pancreatitis nutrition, copper-associated hepatopathy strategies, and omega-3s in osteoarthritis.</li>
          </ul>
          <p className="text-xs text-gray-600 mt-4">
            These entries will be merged into the comprehensive Sources section in Part 8.
          </p>
        </section>

        <hr className="my-12 border-[#d9cfc2]" />

                {/* PART 5 — Processing & Sourcing, Raw/Home-Prepared Controls, Grain vs. Grain-Free, Pantry Resilience */}
        <section id="processing" className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">How the Food Is Made (Processing &amp; What It Means for You)</h2>
          <p className="mb-3">
            “Kibble,” “canned,” “air-dried,” “fresh-cooked,” “freeze-dried,” and “raw” describe <em>processes</em> rather than nutrition by
            themselves. Your job is to pair a <strong>complete &amp; balanced</strong> formula with a process you can store, handle, and feed
            consistently—with safety and stool quality that fit your dog and your household.
          </p>

          <h3 className="text-lg font-semibold mt-2 mb-1">Dry/Kibble (Extruded or Baked)</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>How it’s made:</strong> Ingredients are ground, mixed into dough, then cooked under heat/pressure and dried; vitamins may be added after cooking.</li>
            <li><strong>Owner view:</strong> shelf-stable, consistent calories per cup, easy to weigh; watch storage (cool, dry, sealed) and bag lot numbers.</li>
            <li><strong>Dog view:</strong> energy-dense; stool typically firm when digestibility is good; hydration must come from water or toppers.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Canned/Wet (Retorted)</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>How it’s made:</strong> Formulated mixture is filled and sealed in cans or pouches, then sterilized under heat/pressure.</li>
            <li><strong>Owner view:</strong> higher moisture, great for appetite/urinary goals; heavier to store/ship; watch dented or bulging cans—discard.</li>
            <li><strong>Dog view:</strong> very palatable; often smaller dry-matter portions for the same calories due to water content.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Air-Dried / Dehydrated / Baked “Lightly Processed”</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Lower moisture than canned, often higher than kibble; texture varies by brand.</li>
            <li>Still requires a verified <em>complete &amp; balanced</em> adequacy statement for your life stage; “minimal processing” is marketing, not a guarantee of nutrient balance or safety.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Fresh-Cooked (Chilled or Frozen)</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Gently cooked formulas, sold chilled or frozen. Balance depends on formulation; many companies add vitamin/mineral packs.</li>
            <li>Great for palatability and moisture; requires cold-chain handling and freezer space; confirm lot tracking and company QA.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Freeze-Dried / Raw</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>Freeze-dried:</strong> water is removed under vacuum at low temps; some products are fed as-is or rehydrated. Pathogen risk depends on controls; rehydration improves safety and stool quality.</li>
            <li><strong>Raw (frozen or fresh):</strong> may be high in bacteria if not validated by pathogen-reduction steps (e.g., HPP). Requires strict kitchen hygiene and careful handling, especially around kids, older adults, and immunocompromised people or pets.</li>
            <li><strong>Bottom line:</strong> whatever the process, ensure the label states <em>complete &amp; balanced</em> and that the manufacturer can explain validation and lot testing.</li>
          </ul>

          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Petunia tip:</strong> Process ≠ nutrition. Pick the format you can store and feed reliably, then verify adequacy, calories, and the brand’s quality controls. Photograph the adequacy statement and lot code for your records.
          </div>
        </section>

        <section id="home-raw" className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">Home-Prepared &amp; Raw: Risks, Controls, and When to Get Help</h2>
          <p className="mb-3">
            Home cooking or raw feeding can meet goals for palatability or medical needs, but it’s easy to miss essential nutrients.
            If you choose this route, treat it like a project: <strong>recipe design by a qualified nutritionist, documented targets, and food-safety discipline</strong>.
          </p>

          <h3 className="text-lg font-semibold mt-2 mb-1">Nutrition Controls</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Use a recipe from a board-certified veterinary nutritionist or a peer-reviewed calculator with a full mineral/vitamin premix; “meat + veg + oil” is not balanced.</li>
            <li>Recheck weight, body condition, and stool after any change; plan bloodwork as your veterinarian recommends for long-term homemade diets.</li>
            <li>Keep a written “as-fed” recipe with gram weights, brand/premix details, and batch yield so your future self can reproduce it.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Food-Safety Controls</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Dedicated utensils and cutting boards; wash hands and surfaces; separate raw from ready-to-eat foods.</li>
            <li>Thaw in the refrigerator; keep cold below 40°F (4°C); discard leftovers per product guidance.</li>
            <li>Households with vulnerable people or pets should avoid handling raw animal products for pet diets unless pathogen-reduction is validated and you can maintain strict hygiene.</li>
          </ul>

          <div className="rounded-md border border-[#fffaf2] bg-[#fffaf2] p-4 text-sm">
            <strong>Petunia tip:</strong> If you’re exploring homemade for a medical reason (e.g., kidney, GI, or elimination trials), ask your vet for a referral to a veterinary nutritionist and set a follow-up plan (weight, BCS, stool, labs).
          </div>
        </section>

        <section id="grain" className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">Grain vs. Grain-Free (What Actually Matters)</h2>
          <p className="mb-3">
            “Grain-free” is a formulation choice, not a health guarantee. Dogs can do well on diets <em>with</em> or <em>without</em> grains as long as the
            product is complete &amp; balanced and made by a transparent manufacturer with strong quality controls. Over the last several years,
            veterinary groups and regulators have reviewed cases of dilated cardiomyopathy potentially associated with certain formulas. A single
            cause has not been proven; ingredient lists alone rarely tell the whole story. Your guardrails:
          </p>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Prioritize companies that can share who formulates their diets, how they test them, and what feeding trials or digestibility data exist.</li>
            <li>Match diet to your dog’s needs (life stage, breed size, activity) and monitor results (weight, stamina, stool, skin, and periodic exams).</li>
            <li>If you have a breed predisposed to heart disease or you’re on a legume-rich or exotic-ingredient diet, talk with your veterinarian about individualized screening.</li>
          </ul>
        </section>

        <section id="pantry" className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">Build a Resilient Pantry (Rotations, Backups, and Travel)</h2>
          <p className="mb-3">
            Supply hiccups and recalls happen. A little forethought prevents diet whiplash and GI upsets.
          </p>

          <h3 className="text-lg font-semibold mt-2 mb-1">Rotation Strategy (Optional, Done Right)</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Rotate only among <strong>known-good</strong> complete formulas from reputable brands. Keep the same life stage and similar calorie density when possible.</li>
            <li>Change one variable at a time and <strong>transition over 7–10 days</strong>; log stool quality, appetite, and skin/ear status.</li>
            <li>Some sensitive dogs do best with <em>no</em> rotation—stability beats variety for them. Let the dog’s results decide.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Backup &amp; Travel Kit</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Keep at least a two-to-four-week buffer of your main diet sealed and dated; store in a cool, dry place.</li>
            <li>Pack a travel pouch: measured portions, collapsible bowl, water plan, written feeding schedule, and any approved toppers or treats.</li>
            <li>For flights or boarding, print the adequacy statement, calories per cup/can, and your measured daily grams so staff can portion correctly.</li>
          </ul>

          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Petunia tip:</strong> Put a sticky note on the bag with “goal grams/day,” “treat budget (kcal),” and the date you opened it. Re-order when half remains.
          </div>
        </section>

        <section id="operator-pantry" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">Operator-Grade Checklists (Home, Boarding, Emergencies)</h2>

          <h3 className="text-lg font-semibold mt-2 mb-1">Home Pantry</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Main diet (lot photo saved), matching treats, pill strategy that doesn’t break diet trials.</li>
            <li>Kitchen scale, scoop labeled with grams per scoop for the current food, and a printed feeding schedule.</li>
            <li>Storage: original bag inside an airtight bin; reseal after each use; keep below 80°F and away from sun or moisture.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Boarding/Daycare Handoff</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>One-page “Food &amp; Feeding” sheet: exact grams/meal, treat rules, topper rules, emergency contacts, and vet info.</li>
            <li>If on a diet trial or therapeutic diet, label the bag clearly and include “no substitutions” in writing.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Emergency/Recall Plan</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Keep a second acceptable formula on your “approved” list. If you must switch quickly, follow a conservative blend schedule and add a bland topper if recommended by your vet.</li>
            <li>Know how to report a suspected food issue (manufacturer contact, lot, photos) and where to check for recalls.</li>
          </ul>
        </section>

        {/* Sources for Part 5 (kept brief here; full bibliography in Part 8) */}
        <section id="sources-pt5" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">📚 Citations Supporting Part 5</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            <li>Manufacturing overviews: extrusion, retort, air-drying, freeze-drying; adequacy statements and brand QA/transparency frameworks from veterinary nutrition bodies.</li>
            <li>Home-prepared diet guidance: use of complete mineral/vitamin premixes and the importance of recipe design by qualified nutritionists.</li>
            <li>Food-safety and handling basics for chilled/frozen/raw products; household risk management for vulnerable people and pets.</li>
            <li>Clinical context on grain-inclusive vs. grain-free: emphasis on complete balance, manufacturer transparency, and individualized veterinary screening when indicated.</li>
            <li>Storage best practices, recall reporting pathways, and travel/boarding feeding protocols.</li>
          </ul>
          <p className="text-xs text-gray-600 mt-4">
            These items will be consolidated into the comprehensive Sources section in Part 8.
          </p>
        </section>

        <hr className="my-12 border-[#d9cfc2]" />

                {/* PART 6 — Storage, Safety, Spoilage & Recalls */}
        <section id="storage" className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">Storage That Protects Nutrition (Temps, Oxygen, Light, Time)</h2>
          <p className="mb-3">
            Once a food leaves the factory, <strong>temperature, oxygen, light, and time</strong> start working against it—especially the fats and some vitamins.
            Good storage slows that drift so your dog eats what the label promises.
          </p>

          <h3 className="text-lg font-semibold mt-2 mb-1">Dry Food (Kibble &amp; Air-Dried)</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>Keep cool &amp; dry:</strong> target a room that stays well below hot-garage temps. Avoid sun, laundry rooms, and damp basements.</li>
            <li><strong>Bag-in-bin method:</strong> store the food <em>in its original bag</em> placed inside an airtight bin. The bag is an oxygen/light barrier and carries the <em>lot code</em> and “best by.”</li>
            <li><strong>Clip &amp; expel air:</strong> squeeze air from the bag after each use and fold/clip before closing the bin.</li>
            <li><strong>Right-size the bag:</strong> buy what you’ll use in ~4–6 weeks after opening to limit oxidation and aroma loss.</li>
            <li><strong>Keep the label:</strong> take a clear photo of the adequacy statement, ingredients, calories, lot, and best-by, and save the top panel until the bag is empty.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Cans, Tubs, &amp; Pouches</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>Before opening:</strong> store at normal room temperature; discard <em>dented, bulging, rusty, leaking</em>, or badly creased cans.</li>
            <li><strong>After opening:</strong> cover and refrigerate promptly. Most brands advise using within about <em>5–7 days</em> (check the label); stir and let warm slightly before serving.</li>
            <li><strong>Pouches/tubs:</strong> follow the same “cover, refrigerate, use soon” rule once opened.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Fresh-Cooked, Frozen, &amp; Freeze-Dried</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Cold chain:</strong> keep chilled/frozen products cold door-to-door; thaw in the fridge, not on the counter.</li>
            <li><strong>Refrigerator clock:</strong> once thawed/opened, follow the brand’s “use within” window; when in doubt, a conservative 2–3 days for fresh cooked is common.</li>
            <li><strong>Freeze-dried:</strong> store closed in a cool, dark cabinet; <em>rehydrate</em> for better stool and safety; discard leftovers per package guidance.</li>
          </ul>
        </section>

        <section id="shelf-life" className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">“Best By,” “Use By,” and Rotating Stock (FIFO)</h2>
          <p className="mb-3">
            “Best by” dates reflect <em>quality</em> under proper storage; potency and palatability fade first, then safety can follow if storage is poor.
            Treat dates as real limits and rotate with <strong>FIFO</strong>—first in, first out.
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Write the <strong>open date</strong> on the bag/case. Plan your reorder when ~half remains.</li>
            <li>Avoid splitting one big bag into many small containers unless you can preserve the label and barrier. If you must decant, keep a <em>label/lot</em> photo taped to the container.</li>
            <li>Don’t leave opened food in hot cars; move it inside promptly after purchase.</li>
          </ul>
        </section>

        <section id="recognize-spoilage" className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">How to Recognize Spoilage or Damage</h2>
          <p className="mb-3">
            Trust your senses and your logs. If something looks, smells, or acts “off,” pause and investigate before feeding more.
          </p>

          <h3 className="text-lg font-semibold mt-2 mb-1">Kibble &amp; Air-Dried</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>Rancid or “paint-like” odor</strong>, unusual sour smell, or a waxy/greasy feel.</li>
            <li><strong>Moist clumps</strong>, visible mold, or color change not typical for that brand/batch.</li>
            <li><strong>Pest signs:</strong> webbing, larvae, insects, or rodent evidence in bin/bag.</li>
            <li><strong>Excess fines/powder</strong> and stale aroma after long time open or heat exposure.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Cans &amp; Pouches</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Bulging lids/sides</strong>, spurting on opening, off-odors, or discoloration.</li>
            <li>Discard any product with <strong>seal damage</strong>, rust through, or severe dents along seams.</li>
          </ul>

          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm mt-3">
            <strong>Petunia tip:</strong> Build a quick “abnormal signs” checklist in your Food &amp; Feeding note and attach photos. Future you—and your vet—will thank you.
          </div>
        </section>

        <section id="cleaning" className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">Bowls, Scoops, and Kitchen Hygiene</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Wash food and water bowls daily</strong> with hot, soapy water or in the dishwasher (top rack for many bowls).</li>
            <li>Rinse and dry measuring cups/scoops; don’t leave them buried in oily kibble fines.</li>
            <li>For raw/fresh handling, use <strong>dedicated boards and utensils</strong>; sanitize surfaces; wash hands thoroughly.</li>
          </ul>
        </section>

        <section id="recalls" className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">Recalls &amp; Quality Alerts (How to Stay Informed)</h2>
          <p className="mb-3">
            Even good companies can have problems. Your edge is <strong>early awareness</strong> and <strong>traceability</strong>.
          </p>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>Save lot codes:</strong> keep the bag panel (or a photo) until the food is gone.</li>
            <li><strong>Subscribe:</strong> sign up for manufacturer newsletters/alerts and official recall lists; follow your veterinary clinic’s channels.</li>
            <li><strong>One-page plan:</strong> write down what you’ll feed if Product A is recalled (Approved Backup B/C) and the transition steps.</li>
          </ul>
        </section>

        <section id="suspected-issue" className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">If You Suspect a Food Issue: A Calm, Professional Playbook</h2>
          <ol className="list-decimal pl-5 space-y-2 mb-3">
            <li><strong>Stop feeding the product</strong> immediately; switch to your approved backup diet.</li>
            <li><strong>Document:</strong> photograph the bag/can (front, ingredients, adequacy statement, calories), <em>lot code</em>, best-by, and any anomalies in the food. Keep receipts.</li>
            <li><strong>Call your veterinarian:</strong> share what changed and your dog’s signs (vomit/diarrhea, lethargy, pallor, neurologic signs). Bring packaging if seen in-clinic.</li>
            <li><strong>Contact the manufacturer:</strong> provide lot and where purchased; ask for your case/incident number; note any requested product returns or holds.</li>
            <li><strong>Report to regulators (where applicable):</strong> use the official online reporting portal for pet food concerns in your country/region.</li>
            <li><strong>Preserve samples:</strong> if advised, double-bag a representative sample and freeze for potential testing; label with lot and date.</li>
            <li><strong>Monitor &amp; log:</strong> track appetite, water intake, stool, vomiting, and energy for at least 72 hours after the change.</li>
          </ol>
          <div className="rounded-md border border-[#fffaf2] bg-[#fffaf2] p-4 text-sm">
            <strong>Petunia tip:</strong> Put your vet’s after-hours number and the nearest 24/7 ER on the “Food &amp; Feeding” sheet you keep with the pantry.
          </div>
        </section>

        <section id="operator-storage" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">Operator-Grade Checklists (Home, Boarding, and Delivery Days)</h2>

          <h3 className="text-lg font-semibold mt-2 mb-1">Home (Weekly)</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Verify bin area stays cool/dry; feel the bag—no warmth or condensation.</li>
            <li>Clip/fold bag after each use; squeeze out air; lid on the bin.</li>
            <li>Audit: remaining volume vs. reorder point; confirm backup stock &gt; 1 week.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Boarding/Daycare Drop-Off</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Labeled bag with daily gram targets and treat rules; include <em>lot photo</em> and feeding schedule.</li>
            <li>For diet trials/therapeutic diets: “no substitutions” printed in bold on the sheet.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Delivery/Store Pickup</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Inspect immediately: no tears, punctures, moisture, or pests; check <em>best by</em> date.</li>
            <li>If damaged, photograph and return/exchange rather than “risking it.”</li>
          </ul>
        </section>

        {/* Sources for Part 6 (kept brief here; full bibliography in Part 8) */}
        <section id="sources-pt6" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">📚 Citations Supporting Part 6</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            <li>Veterinary and regulatory storage guidance (temperature control, original packaging, lot retention; can handling and open-can refrigeration windows).</li>
            <li>Food safety basics for chilled/frozen/raw products and kitchen hygiene practices for households.</li>
            <li>Recall monitoring and reporting frameworks; incident documentation best practices.</li>
            <li>Owner-level oxidation/spoilage recognition and FIFO stock rotation strategies.</li>
          </ul>
          <p className="text-xs text-gray-600 mt-4">
            These entries will be merged into the comprehensive Sources section in Part 8.
          </p>
        </section>

        <hr className="my-12 border-[#d9cfc2]" />

               {/* PART 7 — Printables, Operator Checklists, Quick Calculators & Troubleshooting */}
        <section id="operator" className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">Operator-Grade Printables &amp; Checklists</h2>
          <p className="mb-3">
            This section turns the guide into <strong>actionable tools</strong>—ready to print, hand to family or staff, and use in real life.
            Everything aligns with earlier parts: label literacy (Part 1/4), sensitivities &amp; elimination diets (Part 2), exercise &amp; hydration (Part 3),
            and storage/safety (Part 6).
          </p>

          {/* FLOWCHART */}
          <h3 className="text-lg font-semibold mt-3 mb-2">A) Food Selection Flowchart (Owner Version)</h3>
          <div className="rounded-md border border-[#d9cfc2] bg-[#fffaf2] p-4 text-sm leading-6">
            <ol className="list-decimal pl-5 space-y-2">
              <li><strong>Life stage?</strong> Growth / Gestation–Lactation / Maintenance / All Life Stages. If puppy will be ≥70 lb as adult → verify the label says <em>“including growth of large size dogs (70 lb+ as adult)”</em>.</li>
              <li><strong>Health flags?</strong> Known kidney, liver, pancreatitis, GI disease, or allergy history → see vet; consider therapeutic or hydrolyzed/novel-protein for trials.</li>
              <li><strong>Brand vetting (WSAVA-style):</strong> Who formulates? QA/testing? Feeding trials/digestibility data? Recall transparency? Keep their written responses.</li>
              <li><strong>Format fit?</strong> Kibble / canned / fresh-cooked / air-dried / freeze-dried / raw. Choose what you can store and feed <em>consistently</em> with good hygiene.</li>
              <li><strong>Calorie density known?</strong> Record kcal/kg and kcal per cup/can. You’ll need this for portion math and treat budgeting.</li>
              <li><strong>Transition plan?</strong> 7–10 days, blend by quarters; extend if stool softens. Log stool/itch/appetite/weight weekly.</li>
              <li><strong>Storage plan?</strong> Bag-in-bin, cool &amp; dry; save lot photo. Reorder at half bag; maintain a 2–4 week buffer.</li>
            </ol>
          </div>

          {/* PORTION MATH CARD */}
          <h3 className="text-lg font-semibold mt-6 mb-2">B) Portion Math Card (Tape to the Pantry)</h3>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <p className="mb-2"><strong>1) Daily calories:</strong> RER ≈ 70 × BW(kg)<sup>0.75</sup> → multiply by factor for lifestyle (see Part 3) to get a daily target.</p>
            <p className="mb-2"><strong>2) Convert to food amount:</strong> Daily grams = (Daily kcal ÷ kcal per kg of food) × 1000.  If you portion by cups, use kcal/cup instead.</p>
            <p className="mb-2"><strong>3) Treat budget:</strong> ≤10% of daily kcal. If treats exceed this, subtract the excess from the main food.</p>
            <p className="mb-2"><strong>4) Re-check:</strong> Weigh every 2–4 weeks; adjust ±5–10% based on BCS/MCS and workload.</p>
            <div className="mt-3 grid grid-cols-1 gap-2">
              <div className="rounded border border-[#d9cfc2] p-3">
                <div className="text-xs uppercase tracking-wide mb-1">Owner Fill-In</div>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>Dog: __________  Ideal BW: ____ kg  Current BW: ____ kg</li>
                  <li>Target kcal/day: ______  (RER × factor)</li>
                  <li>Food kcal/kg: ______  kcal/cup: ______  kcal/can: ______</li>
                  <li>Daily grams: ______  Cups: ______  Meals/day: ______</li>
                  <li>Treat budget (≤10%): ______ kcal (list approved treats)</li>
                </ul>
              </div>
            </div>
          </div>

          {/* ELIMINATION DIET CONTRACT */}
          <h3 className="text-lg font-semibold mt-6 mb-2">C) 8-Week Elimination-Diet Contract (Post on the Fridge)</h3>
          <div className="rounded-md border border-[#d9cfc2] bg-[#fffaf2] p-4 text-sm">
            <p className="mb-2"><strong>Goal:</strong> Diagnose food allergy/intolerance by feeding only the trial diet, then proving response with a challenge.</p>
            <ul className="list-disc pl-5 space-y-1 mb-3">
              <li><strong>Diet:</strong> Brand/Formula: ____________________  Lot: __________  AAFCO statement photographed.</li>
              <li><strong>Allowed:</strong> Trial food only (count out “treat” pieces from ration) <em>or</em> single-ingredient treats that match the trial protein/carb.</li>
              <li><strong>Not allowed:</strong> All other foods, flavored meds/toothpaste, table scraps, chews (bully sticks, pig ears), training treats that aren’t trial-safe.</li>
              <li><strong>Medications:</strong> Ask vet to avoid flavored options if possible; confirm pill pockets match the trial.</li>
              <li><strong>Tracking:</strong> Weekly itch (0–10), ear debris/odor, stool quality, vomiting episodes, weight/BCS photos.</li>
              <li><strong>Challenge window:</strong> After week 8 (or per vet), reintroduce prior diet or one suspect ingredient for up to 14 days; log any flare.</li>
            </ul>
            <div className="text-sm mt-2">
              Household signatures: ____________________  ____________________  Date: __________
            </div>
          </div>

          {/* SITTER / BOARDING HANDOFF */}
          <h3 className="text-lg font-semibold mt-6 mb-2">D) Sitter/Boarding Handoff Sheet</h3>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Dog:</strong> ________  Vet: __________  Phone: __________  ER: __________</li>
              <li><strong>Food:</strong> Brand/Formula __________  AAFCO life stage: __________  kcal/cup: ______  kcal/can: ______</li>
              <li><strong>Daily portion:</strong> ______ grams (______ cups) split into ______ meals; treats ≤ ______ kcal/day</li>
              <li><strong>Rules:</strong> No substitutions / no table scraps / topper rules: __________________</li>
              <li><strong>Allergy or trial notes:</strong> ____________________  (if on trial, <em>no deviations</em>)</li>
              <li><strong>Medications/supplements:</strong> ____________________  When/how given: ____________________</li>
              <li><strong>Emergency:</strong> If vomiting/lethargy/black stool or suspected food issue → call owner and vet; keep packaging.</li>
            </ul>
          </div>

          {/* QUICK CALCULATORS (OWNER-GRADE) */}
          <h3 className="text-lg font-semibold mt-6 mb-2">E) Quick Calculators (Do the Math Once, Tape It Up)</h3>
          <div className="rounded-md border border-[#d9cfc2] bg-[#fffaf2] p-4 text-sm">
            <ol className="list-decimal pl-5 space-y-2">
              <li><strong>RER:</strong> 70 × BW(kg)<sup>0.75</sup> = ______ kcal</li>
              <li><strong>Daily target (MER):</strong> RER × factor (maintenance, sport, season) = ______ kcal</li>
              <li><strong>Treat 10%:</strong> MER × 0.10 = ______ kcal → list allowed treats totaling ≤ this number</li>
              <li><strong>Food grams/day:</strong> (MER ÷ kcal/kg) × 1000 = ______ g</li>
              <li><strong>Per-meal grams:</strong> grams/day ÷ meals/day = ______ g per meal</li>
              <li><strong>Weight change rule-of-thumb:</strong> If off-target for 2 weeks → adjust food ±5–10% and recheck.</li>
            </ol>
          </div>

          {/* TROUBLESHOOTING TREES */}
          <h3 className="text-lg font-semibold mt-6 mb-2">F) Troubleshooting Trees</h3>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm space-y-4">
            <div>
              <div className="font-semibold mb-1">1) Soft Stool After a Switch</div>
              <ol className="list-decimal pl-5 space-y-1">
                <li>Pause at the current blend for 2–3 days; ensure measured portions; eliminate extras/toppers.</li>
                <li>Add time (extend transition), split meals smaller, and confirm fresh water access.</li>
                <li>If persistent &gt;7–10 days, blood or black stool, vomiting/lethargy → call your veterinarian.</li>
              </ol>
            </div>
            <div>
              <div className="font-semibold mb-1">2) Itchy Skin/Ears</div>
              <ol className="list-decimal pl-5 space-y-1">
                <li>Audit treats/chews/table food for hidden proteins; remove them.</li>
                <li>Consider an elimination trial (Part 2) if signs are chronic or recurrent.</li>
                <li>Infections (ears/skin) need veterinary assessment and culture-guided care.</li>
              </ol>
            </div>
            <div>
              <div className="font-semibold mb-1">3) Picky Eater</div>
              <ol className="list-decimal pl-5 space-y-1">
                <li>Fix mealtimes; remove bowl after 15–20 minutes; no grazing.</li>
                <li>Weigh portions; use a small, consistent topper (≤10% calories) if approved.</li>
                <li>Rule out nausea, dental pain, or other medical issues with your veterinarian if appetite remains poor.</li>
              </ol>
            </div>
            <div>
              <div className="font-semibold mb-1">4) Weight Creep</div>
              <ol className="list-decimal pl-5 space-y-1">
                <li>Re-do calorie math; weigh food; confirm treat leakage from family/sitters.</li>
                <li>Cut daily calories by 5–10% and increase low-impact activity; reweigh in 2 weeks.</li>
                <li>If no progress by 4–6 weeks or signs of endocrine disease, see your veterinarian.</li>
              </ol>
            </div>
            <div>
              <div className="font-semibold mb-1">5) Suspected Food Issue</div>
              <ol className="list-decimal pl-5 space-y-1">
                <li>Stop feeding the product; move to your approved backup.</li>
                <li>Photograph packaging (lot, best-by) and any abnormal appearance/smell; call your vet.</li>
                <li>Contact manufacturer; save case number; preserve a labeled sample if asked.</li>
              </ol>
            </div>
          </div>

          {/* PRINT TIPS */}
          <h3 className="text-lg font-semibold mt-6 mb-2">G) Print Tips</h3>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>Use your browser’s print dialog and set scale near 100% for clean layout.</li>
            <li>Print the <em>Portion Math Card</em>, <em>Elimination-Diet Contract</em>, and <em>Sitter/Boarding Handoff</em> and keep copies with the food.</li>
            <li>Save PDFs or photos of lot codes and AAFCO statements alongside these sheets.</li>
          </ul>
        </section>

        {/* Sources for Part 7 (kept brief here; full bibliography in Part 8) */}
        <section id="sources-pt7" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">📚 Citations Supporting Part 7</h2>
          <p className="text-sm text-gray-700 mb-2">
            Operational tools here consolidate guidance from earlier parts (label literacy, elimination diets, energy math, hydration, storage)
            and will be fully cited in the master Sources section in Part 8.
          </p>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            <li>Energy math, treat budgeting, and weight-management targets (see Parts 1 &amp; 3 sources).</li>
            <li>Elimination-diet protocols and challenge steps (see Part 2 sources).</li>
            <li>Label adequacy statements and large-breed growth wording (see Parts 1 &amp; 4 sources).</li>
            <li>Storage, safety, and recall procedures (see Part 6 sources).</li>
          </ul>
        </section>

        <hr className="my-12 border-[#d9cfc2]" />

                {/* PART 8 — Master Sources, Further Reading, Final Review & Print Pack */}
        <section id="sources-master" className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">📚 Master Sources &amp; Further Reading</h2>
          <p className="mb-4">
            These are the primary references and owner-facing resources that underpinned every section of this guide.
            They emphasize label literacy (AAFCO/FDA), clinical guidance (WSAVA/AAHA/IRIS/ACVIM), performance and hydration research,
            veterinary nutrition best practices, and practical storage/recall procedures.
          </p>

          {/* Core Regulatory & Label Literacy */}
          <h3 className="text-lg font-semibold mt-4 mb-2">Regulatory &amp; Label Literacy</h3>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            <li>
              AAFCO — Pet Food Labeling, Nutritional Adequacy Statements, Product-Name Rules, “Natural,” “Human Grade,” “Organic.”{' '}
              <a href="https://www.aafco.org/consumers/understanding-pet-food/" target="_blank" rel="noopener noreferrer">Understanding Pet Food</a>{' '}
              · <a href="https://www.aafco.org/consumers/what-is-in-pet-food/" target="_blank" rel="noopener noreferrer">What’s in Pet Food</a>
            </li>
            <li>
              U.S. FDA Center for Veterinary Medicine — Pet Food Basics, Labeling, Recalls, and How to Report a Problem.{' '}
              <a href="https://www.fda.gov/animal-veterinary/animal-food-feeds/pet-food" target="_blank" rel="noopener noreferrer">FDA Pet Food</a>{' '}
              · <a href="https://www.fda.gov/safety/recalls-market-withdrawals-safety-alerts" target="_blank" rel="noopener noreferrer">Recalls &amp; Safety Alerts</a>{' '}
              · <a href="https://www.fda.gov/animal-veterinary/report-problem/how-report-pet-food-complaint" target="_blank" rel="noopener noreferrer">Report a Pet Food Complaint</a>
            </li>
          </ul>

          {/* Clinical Nutrition Frameworks */}
          <h3 className="text-lg font-semibold mt-6 mb-2">Clinical Nutrition Frameworks (Dogs)</h3>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            <li>
              WSAVA Global Nutrition Committee — Global Nutrition Guidelines &amp; Toolkit (owner and vet checklists; brand-vetting questions).{' '}
              <a href="https://wsava.org/global-guidelines/global-nutrition-guidelines/" target="_blank" rel="noopener noreferrer">WSAVA Guidelines &amp; Toolkit</a>
            </li>
            <li>
              AAHA — Senior Care &amp; Nutritional Assessment guidance (life-stage reassessment, protein/calorie considerations, weight management).{' '}
              <a href="https://www.aaha.org/education/guidelines/" target="_blank" rel="noopener noreferrer">AAHA Guidelines</a>
            </li>
            <li>
              NRC (National Academies) — <em>Nutrient Requirements of Dogs and Cats</em> (reference text: energy equations, macro/micro targets).{' '}
              <a href="https://nap.nationalacademies.org/catalog/10668/nutrient-requirements-of-dogs-and-cats" target="_blank" rel="noopener noreferrer">NRC Text</a>
            </li>
            <li>
              Merck Veterinary Manual (Professional &amp; Owner) — Energy/BCS, Pancreatitis, Chronic Enteropathies, OA, GDV, and general canine nutrition pages.{' '}
              <a href="https://www.merckvetmanual.com/" target="_blank" rel="noopener noreferrer">Merck Vet Manual</a>
            </li>
          </ul>

          {/* Therapeutic Diets & Internal Medicine */}
          <h3 className="text-lg font-semibold mt-6 mb-2">Therapeutic Diets &amp; Internal Medicine</h3>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            <li>
              IRIS — Chronic Kidney Disease staging &amp; nutritional recommendations (phosphorus control, protein quality, omega-3s).{' '}
              <a href="https://www.iris-kidney.com/" target="_blank" rel="noopener noreferrer">IRIS Kidney</a>
            </li>
            <li>
              ACVIM Consensus — Copper-Associated Hepatopathy &amp; Chronic Hepatitis (diagnosis including hepatic copper; copper-restricted diets; chelation/zinc).{' '}
              <a href="https://onlinelibrary.wiley.com/journal/19391676" target="_blank" rel="noopener noreferrer">JVIM (ACVIM Consensus)</a>
            </li>
            <li>
              Pancreatitis &amp; Hyperlipidemia reviews — early nutritional support, low-fat highly digestible diets, meal frequency. See AAHA/Merck/JVIM summaries above.
            </li>
            <li>
              Osteoarthritis &amp; Omega-3 enrichment — clinical trials showing improvements in weight bearing/lameness with EPA/DHA-enriched diets.
            </li>
          </ul>

          {/* Food Sensitivities & Diet Trials */}
          <h3 className="text-lg font-semibold mt-6 mb-2">Food Sensitivities &amp; Diet Trials</h3>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            <li>
              Elimination-Diet Gold Standard — 6–8+ week elimination with controlled re-challenge; dermatology/allergy texts and review articles.
            </li>
            <li>
              Hydrolyzed vs. Novel Protein Diets — veterinary lines and peer-reviewed reports on efficacy and limitations (antigenicity not zero).
            </li>
            <li>
              Reliability caveats for blood/saliva/hair “sensitivity” tests — poor repeatability and diagnostic accuracy vs. elimination trials.
            </li>
          </ul>

          {/* Performance, Hydration, Environment */}
          <h3 className="text-lg font-semibold mt-6 mb-2">Performance, Hydration &amp; Environment</h3>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            <li>
              Working/Detection Dog hydration field studies (Frontiers in Veterinary Science; flavored-water palatability; modest electrolyte shifts).
            </li>
            <li>
              Canine performance nutrition reviews — fat oxidation in endurance; carbohydrate accessibility for sprint work; protein for lean mass.
            </li>
          </ul>

          {/* Processing, Storage & Safety */}
          <h3 className="text-lg font-semibold mt-6 mb-2">Processing, Storage &amp; Safety</h3>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            <li>
              Manufacturing overviews (extrusion/retort/air-drying/freeze-drying), adequacy statements, and brand QA transparency (WSAVA, AAFCO, FDA).
            </li>
            <li>
              Storage &amp; spoilage: original packaging (bag-in-bin), temperature and moisture control, “best by” dates, can handling. See FDA/AAFCO/Merck owner guidance.
            </li>
            <li>
              Recalls: FDA recall listings and manufacturer notifications (subscribe for alerts).
            </li>
          </ul>

          {/* Grain vs. Grain-Free */}
          <h3 className="text-lg font-semibold mt-6 mb-2">Grain vs. Grain-Free &amp; DCM Context</h3>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            <li>
              FDA updates, veterinary nutritionist commentary (e.g., university nutrition services), and peer-reviewed discussions on diet-associated DCM hypotheses.
              Emphasis remains on full diet design, manufacturer transparency, and individualized veterinary screening where appropriate.
            </li>
          </ul>

          {/* Owner-Friendly Reading */}
          <h3 className="text-lg font-semibold mt-6 mb-2">Owner-Friendly Reading</h3>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            <li>
              University veterinary nutrition services blogs and FAQs (e.g., Tufts Cummings Petfoodology).{' '}
              <a href="https://vetnutrition.tufts.edu/" target="_blank" rel="noopener noreferrer">Tufts Vet Nutrition</a>
            </li>
            <li>
              Veterinary hospital client handouts on diet transitions, body condition scoring, and therapeutic diets.
            </li>
          </ul>

          <p className="text-xs text-gray-600 mt-4">
            Note: This article is educational and not a substitute for veterinary diagnosis or treatment. Always consult your veterinarian before
            changing diets, especially if your dog has medical conditions or shows red-flag signs (vomiting with lethargy, black stool, collapse, etc.).
          </p>
        </section>

        {/* Final Review Checklist */}
        <section id="final-review" className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">Final Review Checklist (15-Minute Owner Audit)</h2>
          <div className="rounded-md border border-[#d9cfc2] bg-[#fffaf2] p-4 text-sm">
            <ol className="list-decimal pl-5 space-y-2">
              <li><strong>Label snapshot:</strong> Photo of the adequacy statement (life stage correct?), calories per cup/can, ingredients, lot &amp; best-by saved.</li>
              <li><strong>Brand vetting:</strong> You have written answers (who formulates, QA/testing, feeding trials/digestibility, recall transparency).</li>
              <li><strong>Portion math:</strong> Target kcal/day set from RER × factor; grams/day calculated; treats ≤10% kcal.</li>
              <li><strong>Transition plan:</strong> 7–10 day blend written; extend if stool softens; log stool/itch/weight.</li>
              <li><strong>Hydration &amp; timing:</strong> Water plan for climate/workload; mealtime spacing around hard exercise for bloat-prone dogs.</li>
              <li><strong>Sensitivities:</strong> If suspected, elimination-diet contract ready; treat list locked down.</li>
              <li><strong>Storage:</strong> Bag-in-bin, cool/dry; opened &lt;6 weeks; cans covered/refrigerated after opening.</li>
              <li><strong>Backups:</strong> At least one pre-approved alternate formula; travel kit packed (measured portions, bowl, schedule).</li>
              <li><strong>Recall plan:</strong> Subscribed to alerts; know how to report issues; keep lot photos until empty.</li>
              <li><strong>Re-check cadence:</strong> Re-weigh every 2–4 weeks; adjust ±5–10% based on BCS/MCS and activity.</li>
            </ol>
          </div>
        </section>

        {/* Print Pack */}
        <section id="print-pack" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">Print Pack (Use with Family, Sitters &amp; Facilities)</h2>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Portion Math Card</strong> (from Part 7) — fill in your dog’s numbers and tape to the pantry.</li>
              <li><strong>8-Week Elimination-Diet Contract</strong> (Part 7) — if doing a trial, print and sign.</li>
              <li><strong>Sitter/Boarding Handoff Sheet</strong> (Part 7) — include grams/meal, treat budget, topper rules, and vet contacts.</li>
              <li><strong>Food &amp; Feeding Note</strong> — daily ration in grams, calorie content, stool log, BCS photos, and lot snapshots.</li>
            </ul>
            <p className="text-xs text-gray-600 mt-3">
              Tip: Use your browser’s print dialog; set scale ~100% for clean layout. Save digital copies (PDFs/photos) alongside your lot code images.
            </p>
          </div>
        </section>

        <hr className="my-12 border-[#d9cfc2]" />

        <p className="italic text-sm">
          That’s a wrap. You now have a complete, systems-based feeding playbook — from labels and calories to sensitivities,
          lifestyle fueling, storage, and safety. Keep your checklists handy, watch your dog’s dashboard (weight, stool, skin, energy),
          and iterate with your veterinary team.
        </p>

        <Link href={`/${locale}/blog`} className="underline text-[#2c4a30] font-medium hover:opacity-80">
          ← Back to Blog
        </Link>
      </main>
    </>
  );
}
