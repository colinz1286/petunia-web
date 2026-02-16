'use client';

import Head from 'next/head';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function DoGoldenRetrieversShedALot() {
  const locale = useLocale();

  const title =
    'Do Golden Retrievers Shed a Lot? The Complete Owner’s Guide to Shedding, Allergies, and Coat Care';
  const date = 'August 10, 2025';
  const categories = ['owner', 'breed_specific_guides'] as const;

  // Exact labels used in prior posts (do not change keys/labels)
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
    'Yes—Golden Retrievers shed. This evidence-informed field guide explains why, how to manage “coat blow,” allergy realities and dander control, grooming schedules and tools, bathing & drying protocols, nutrition for skin/coat, medical red flags for excessive hair loss, and copy/paste checklists that keep hair under control.';

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
            <li><a href="#overview" className="underline hover:opacity-80">Core Overview</a></li>
            <li><a href="#shedding-basics" className="underline hover:opacity-80">How Much Do Goldens Shed?</a></li>
            <li><a href="#coat-anatomy" className="underline hover:opacity-80">Coat Anatomy &amp; Hair Cycle</a></li>
            <li><a href="#seasons" className="underline hover:opacity-80">Seasonal “Coat Blow” Playbook</a></li>
            <li><a href="#allergies" className="underline hover:opacity-80">Allergies, Dander &amp; Reality Check</a></li>
            <li><a href="#home-care" className="underline hover:opacity-80">Home Hair Control Systems</a></li>
            <li><a href="#grooming" className="underline hover:opacity-80">Brushing &amp; De-Shedding</a></li>
            <li><a href="#bathing-drying" className="underline hover:opacity-80">Bathing, Conditioning &amp; Drying</a></li>
            <li><a href="#tools" className="underline hover:opacity-80">Tools &amp; Setup</a></li>
            <li><a href="#nutrition" className="underline hover:opacity-80">Nutrition for Skin &amp; Coat</a></li>
            <li><a href="#medical-causes" className="underline hover:opacity-80">When Shedding Isn’t “Normal”</a></li>
            <li><a href="#home-allergen-control" className="underline hover:opacity-80">Allergen Reduction at Home</a></li>
            <li><a href="#templates" className="underline hover:opacity-80">Checklists &amp; Templates</a></li>
            <li><a href="#vet-now" className="underline hover:opacity-80">When to Call the Vet Now</a></li>
            <li><a href="#faq" className="underline hover:opacity-80">FAQ</a></li>
            <li><a href="#sources" className="underline hover:opacity-80">📚 Sources (Selected)</a></li>
          </ul>
        </nav>

        {/* TL;DR */}
        <section id="tl-dr" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Short Answer (TL;DR)</h2>
          <p className="mb-4">
            <strong>Yes—Golden Retrievers shed a lot.</strong> They have a water-resistant double coat (guard hairs + insulating undercoat) that releases hair year-round and “blows” seasonally. Most hair control is <strong>systems work</strong>: consistent brushing, strategic bathing &amp; high-velocity drying, room-by-room allergen control, lean nutrition with skin support, and a vet plan for itch, infection, or endocrine causes when shedding seems excessive. Run the routines and the hair gets predictable.
          </p>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Petunia tip:</strong> Store your <em>weekly grooming SOP</em>, <em>bath/dry protocol</em>, <em>tool list</em>, and <em>ear-care calendar</em> in Petunia. Share with family, sitters, and groomers so everyone executes the same playbook—less hair, fewer hot spots, happier skin.
          </div>
        </section>

        {/* OVERVIEW */}
        <section id="overview" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Core Overview: Why Goldens Shed (and Why It’s Manageable)</h2>
          <p className="mb-3">
            Golden Retrievers were bred to work on land and in water. Their <strong>double coat</strong> keeps skin dry and thermoregulated: oily, longer <em>guard hairs</em> shed water and debris; the soft <em>undercoat</em> traps insulating air. Shedding is not a “problem” to solve so much as a biological process to <em>manage</em>. Good management means three things: (1) <strong>regular mechanical removal</strong> of loose hair before it migrates to furniture; (2) <strong>clean skin</strong> that’s neither greasy nor stripped; and (3) <strong>attention to health</strong> so you can tell the difference between normal coat turnover and medical hair loss.
          </p>
          <p className="mb-3">
            Families succeed when they replace “random brushing when the hair gets bad” with a <strong>repeatable routine</strong>. This guide gives you that routine, plus operator-grade checklists you can hand to a partner, teen, sitter, or groomer so results stay consistent even when the primary human is busy.
          </p>
          <p className="mb-0">
            If you’re allergic to pets, Goldens are not hypoallergenic. They can still fit allergy-aware homes when you combine <strong>room controls</strong> (HEPA filtration, fabric choices, laundry cadence) with <strong>on-dog care</strong> that reduces loose hair and dander. We’ll show you how to set these systems up and when to involve your veterinarian for itchy, inflamed, or thinning coats.
          </p>
        </section>

        {/* SHEDDING BASICS */}
        <section id="shedding-basics" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">How Much Do Goldens Shed? Setting Realistic Expectations</h2>
          <p className="mb-3">
            On a spectrum from “light-shedding” to “heavy-shedding,” Golden Retrievers land toward the heavy end. Expect <strong>baseline daily shedding</strong> plus <strong>seasonal surges</strong> (often spring and fall) when undercoat density changes. Individual dogs vary: indoor climate, daylight exposure, diet, health status, and grooming frequency all modulate what you see on your floors.
          </p>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>Daily drift:</strong> a steady trickle of guard hairs and undercoat, easily captured with weekly brushing and fabric-aware housekeeping.</li>
            <li><strong>“Coat blow” spikes:</strong> large tufts release over 1–4 weeks; you’ll see rolling clouds of undercoat unless you brush and dry thoroughly.</li>
            <li><strong>Medical shedding:</strong> focal bald spots, broken hairs, dandruff, odor, redness, or itch. Different game—see <a className="underline" href="#medical-causes">When Shedding Isn’t “Normal”</a>.</li>
          </ul>
          <p className="mb-0">
            The payoff for consistent care is big: homes feel cleaner, dogs smell better, and skin stays healthier. Most families report a <strong>visible reduction in shed hair within 2–3 weeks</strong> after adopting a schedule that includes weekly brushing and periodic bath + high-velocity drying.
          </p>
        </section>

        {/* COAT ANATOMY */}
        <section id="coat-anatomy" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Coat Anatomy &amp; Hair Cycle: The Why Behind the Hair</h2>
          <p className="mb-3">
            Dog hair grows in <strong>phases</strong>: <em>anagen</em> (active growth), <em>catagen</em> (transition), <em>telogen</em> (rest), and <em>exogen</em> (shedding/release). Breed genetics influence how much of the coat sits in each phase and for how long. Goldens maintain a substantial undercoat that shifts with daylight and temperature, which is why you see seasonal “blows.” Because much of the coat is in telogen at any given time, mechanical removal (brushing and drying) has leverage—there’s always hair <em>ready</em> to let go.
          </p>
          <p className="mb-0">
            The outer coat’s <strong>lipid content</strong> (natural oils) contributes to water resistance. Over-bathing with harsh products strips these oils, prompting compensatory greasiness or dry, flaky skin. The art is to clean <strong>enough</strong> to help skin and remove dead hair, but not so aggressively that you destabilize the barrier. The protocols below aim for that balance.
          </p>
        </section>

        {/* SEASONAL PLAYBOOK */}
        <section id="seasons" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Seasonal “Coat Blow” Playbook (Spring/Fall)</h2>
          <p className="mb-3">
            When undercoat shifts, think <strong>short sprints, not marathons</strong>. The goal isn’t one epic de-shed—it’s <em>frequent light passes</em> that prevent mats and reduce airborne fluff. Here’s a practical cadence for 2–4 weeks during peak shedding:
          </p>
          <ol className="list-decimal pl-5 space-y-2 mb-3">
            <li><strong>Every 2–3 days:</strong> 10–15 minutes of line-brushing (see technique below) + quick undercoat rake pass, then a 2–3 minute hand vacuum of favorite nap zones.</li>
            <li><strong>Once weekly:</strong> bath with coat-friendly shampoo → thorough rinse → <strong>conditioner</strong> (comb through) → <strong>high-velocity dry</strong> while brushing in sections. Capture clouds in the bathroom, not on the couch.</li>
            <li><strong>Ear &amp; skin check:</strong> after water exposure and drying, lift ear flaps, look for redness/odor/moisture, and dry the canal entry. Note any hot spots or dandruff flares.</li>
          </ol>
          <p className="mb-0">
            Keep sessions short; stop before your dog is fidgety. A relaxed, predictable routine beats a single, exhausting “coat war” every time.
          </p>
        </section>

        {/* ALLERGIES */}
        <section id="allergies" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Allergies, Dander &amp; Reality Check</h2>
          <p className="mb-3">
            No dog breed is truly <em>hypoallergenic</em>. Most people with pet allergies react to <strong>proteins</strong> in dander (skin flakes), saliva, and urine—not the hair itself. Hair is still relevant because it transports dander through the house. The reduction strategy is simple: <strong>less loose hair + targeted room controls</strong> = less allergen spread. For allergic households, combine on-dog routines (brushing, bath/dry) with home measures in <a className="underline" href="#home-allergen-control">Allergen Reduction at Home</a>. Speak with your physician for personalized medical strategies; your veterinarian can address the dog’s skin health so shedding isn’t amplified by itch or infection.
          </p>
          <p className="mb-0">
            Allergic kids often tolerate a well-groomed Golden better than a neglected one. Systems—not wishful thinking—make the difference.
          </p>
        </section>

        {/* HOME HAIR CONTROL */}
        <section id="home-care" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Home Hair Control Systems: Make Clean Easy</h2>
          <p className="mb-3">
            Hair management is about <strong>paths and traps</strong>: where does your dog rest, shake, and pass through? Optimize those zones and the rest of your house gets easier. Start with one “hair station” (a small room or bathroom with good lighting and an outlet) where you brush and dry. Then turn high-hair surfaces into quick-clean surfaces.
          </p>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>Contain:</strong> brush/dry in the same room; close doors during sessions.</li>
            <li><strong>Capture:</strong> keep a handheld vacuum by favorite nap spots; do 2–3 minute passes after grooming and every day or two during coat blow.</li>
            <li><strong>Protect:</strong> use washable throws on couches; launder weekly; choose dog beds with removable covers.</li>
            <li><strong>Filter:</strong> run a HEPA purifier in sleeping areas; change filters on schedule; vacuum floors with a HEPA-equipped unit.</li>
          </ul>
          <p className="mb-0">
            Measurable goal: can you reset common areas to “guest-ready” in &lt;10 minutes? If not, shrink the dog’s fabric zones or increase the cadence of quick passes. Small, frequent chores beat weekend hair crises.
          </p>
        </section>

        {/* GROOMING */}
        <section id="grooming" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Brushing &amp; De-Shedding: Techniques That Work</h2>
          <p className="mb-3">
            Many owners brush “where the hair looks fluffy” and miss the dense zones where undercoat packs: neck ruff, behind ears, chest, breeches, undercarriage, and tail base. Use <strong>line-brushing</strong>: part the coat, brush a narrow “line” from skin to tips, then move the line over and repeat. Pair with an <em>undercoat rake</em> for the soft insulation layer and a <em>slicker brush</em> for feathering.
          </p>
          <h3 className="text-lg font-semibold mt-2 mb-1">Weekly Routine (Outside of Coat Blow)</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>5–10 minute body pass with slicker on feathering and a rake on undercoat-heavy zones.</li>
            <li>Comb check (fine/medium) to catch tangles behind ears, pants, and tail fringes.</li>
            <li>Quick paw, armpit, and collar area check—these mat first.</li>
          </ul>
          <h3 className="text-lg font-semibold mt-2 mb-1">During Coat Blow (Every 2–3 Days)</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>10–15 minute line-brushing with rake + slicker, then a 1–2 minute “fist test”: can you press your hand into coat and feel air reach skin?</li>
            <li>Finish with a microfiber wipe to collect loose floaters before they travel.</li>
          </ul>
          <p className="mb-0">
            Avoid aggressive tools that cut the topcoat or strip excessively. The goal is to free what’s ready, not to thin the coat into a different texture.
          </p>
        </section>

        {/* BATHING & DRYING */}
        <section id="bathing-drying" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Bathing, Conditioning &amp; Drying: Clean Skin, Happy Coat</h2>
          <p className="mb-3">
            Bathing is powerful for hair control when paired with a <strong>thorough rinse</strong>, <strong>conditioning</strong>, and <strong>high-velocity drying</strong>. Water lifts loose undercoat; conditioner reduces friction; the dryer blows free hairs out <em>in the bathroom</em> instead of onto your couch. Frequency varies with lifestyle: many families do every 3–6 weeks; increase during coat blow or after lake/pool days.
          </p>
          <ol className="list-decimal pl-5 space-y-2 mb-3">
            <li><strong>Pre-brush</strong> 3–5 minutes to remove surface tangles (mats trap shampoo).</li>
            <li><strong>Shampoo</strong> with a canine formula; massage to the skin; avoid harsh degreasers unless your vet prescribes.</li>
            <li><strong>Rinse longer than you think</strong>—residue causes itch and dullness.</li>
            <li><strong>Condition</strong>; comb through feathering; let sit per label; rinse thoroughly.</li>
            <li><strong>Dry</strong> with towels, then high-velocity dryer while brushing line by line; aim airflow with the coat to lift loose undercoat.</li>
            <li><strong>Ears</strong>: towel-dry pinnae and canal entry; apply vet-advised drying solution if recommended; log redness/odor.</li>
          </ol>
          <p className="mb-0">
            If your Golden is noise-sensitive, start dryer acclimation with short, treat-laden sessions. Many families find a bathroom or garage setup easiest to clean and contain.
          </p>
        </section>

        {/* TOOLS */}
        <section id="tools" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Tools &amp; Setup: What You Really Need</h2>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>Slicker brush</strong> with soft/medium pins for feathering and line-brushing.</li>
            <li><strong>Undercoat rake</strong> (medium/fine teeth) for dense zones.</li>
            <li><strong>Comb</strong> (medium/fine) for behind ears, pants, tail fringes.</li>
            <li><strong>High-velocity dryer</strong> (variable speed if possible) + ear protection options for sound-sensitive dogs.</li>
            <li><strong>Shampoo &amp; conditioner</strong> designed for dogs; discuss medicated options with your veterinarian if there’s a skin condition.</li>
            <li><strong>Microfiber towels</strong>, <strong>nonslip mat</strong>, and a <strong>grooming loop</strong> or helper for safety.</li>
            <li><strong>Handheld vacuum</strong> + <strong>HEPA room purifier</strong> for the hair station.</li>
          </ul>
          <p className="mb-0">
            Optional but helpful: grooming table (even a low, non-slip DIY surface), silicone drain cover, and storage bins so your kit is always ready.
          </p>
        </section>

        {/* NUTRITION */}
        <section id="nutrition" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Nutrition for Skin &amp; Coat: Fuel the Barrier</h2>
          <p className="mb-3">
            Skin is a metabolically active organ. Balanced diets that meet recognized standards and maintain a <strong>lean body condition</strong> support a glossy, resilient coat. Work with your veterinary team to choose a complete diet appropriate for life stage and activity and to set treat budgets. Discuss whether <strong>omega-3 fatty acids</strong> (EPA/DHA) or a therapeutic dermatology diet make sense if your dog has chronic itch or recurrent skin infections.
          </p>
          <p className="mb-0">
            Over-supplementing without a plan can unbalance nutrients. If you’re considering supplements, ask your veterinarian to review the product and dose.
          </p>
        </section>

        {/* MEDICAL CAUSES */}
        <section id="medical-causes" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">When Shedding Isn’t “Normal”: Medical Red Flags</h2>
          <p className="mb-3">
            Distinguish <em>diffuse, even</em> hair release (normal shedding) from <em>patchy</em> or <em>itchy</em> hair loss, odor, skin color change, or scabs. Common medical culprits include:
          </p>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>Otitis externa</strong> and moist dermatitis (“hot spots”)—often secondary to moisture, allergies, or scratching.</li>
            <li><strong>Flea allergy dermatitis</strong>—even a few bites can trigger intense itch in sensitive dogs.</li>
            <li><strong>Atopic dermatitis</strong> (environmental allergies)—face/ear/paw itch, recurrent skin or ear infections.</li>
            <li><strong>Food allergy</strong>—chronic itch, GI signs in some dogs; needs a veterinary elimination diet to diagnose.</li>
            <li><strong>Endocrine disease</strong>—<em>hypothyroidism</em> (dull coat, weight gain, lethargy), <em>hyperadrenocorticism</em> (thin skin, pattern baldness, drinking/urinating more).</li>
            <li><strong>Mites/parasites</strong>—sarcoptic mange (intense itch), demodex (patchy loss), cheyletiella (“walking dandruff”).</li>
          </ul>
          <p className="mb-0">
            If you see any of the above or shedding suddenly spikes with itch, odor, or sores, pause DIY fixes and book a veterinary exam. Early treatment prevents chronic cycles and preserves the coat.
          </p>
        </section>

        {/* HOME ALLERGEN CONTROL */}
        <section id="home-allergen-control" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Allergen Reduction at Home: Practical Steps</h2>
          <p className="mb-3">
            Reduce dander <em>load</em> and <em>spread</em>. The following steps, paired with medical guidance from your physician for human allergies and your veterinarian for the dog’s skin, make shared living much more comfortable:
          </p>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>Dog-first:</strong> regular brushing; bath/condition/dry cadence; ear care after water days; treat skin disease promptly.</li>
            <li><strong>Room rules:</strong> make at least one <em>allergen-light room</em> (often the primary bedroom) with a door, washable fabrics, and a HEPA purifier.</li>
            <li><strong>Fabric strategy:</strong> washable throws; weekly hot-water laundry for bedding; limit “hair trap” textiles where feasible.</li>
            <li><strong>Air &amp; floors:</strong> HEPA vacuum 2–4×/week in dog zones; change HVAC filters on schedule; consider doormats and paw wipes to reduce outdoor debris.</li>
          </ul>
          <p className="mb-0">
            Track symptoms and interventions for two months and review with your healthcare and veterinary teams. Small, consistent actions add up.
          </p>
        </section>

        {/* TEMPLATES */}
        <section id="templates" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Checklists &amp; Templates (Copy/Paste)</h2>

          <h3 className="text-lg font-semibold mt-2 mb-1">Weekly Grooming SOP</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Pre-brush 3–5 min (slicker on feathering, rake on undercoat zones).</li>
            <li>Comb check behind ears, pants, tail.</li>
            <li>Microfiber wipe-down; quick handheld vacuum pass in nap zones.</li>
            <li>Ear glance &amp; sniff; log redness/odor; dry after water play.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Bath/Condition/Dry Protocol</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Shampoo → long rinse → conditioner → comb through → long rinse.</li>
            <li>High-velocity dry while line-brushing; contain hair to the bathroom.</li>
            <li>Ears: towel-dry pinnae &amp; canal entry; apply vet-advised drying solution if recommended.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Coat Blow Schedule (2–4 Weeks)</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Mon/Thu: 10–15 min line-brush + rake; microfiber wipe.</li>
            <li>Sat: bath/condition/dry; full brush while drying.</li>
            <li>Daily: 2–3 min handheld vacuum in hair zones.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Allergen-Light Room Setup</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Door and rules (dog invited, not default; optional no-dog policy).</li>
            <li>HEPA purifier sized for the room; filter change dates logged.</li>
            <li>Washable bedding and throws; weekly laundry cadence.</li>
            <li>Under-bed storage bins to reduce dust traps.</li>
          </ul>

          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm mt-3">
            <strong>Petunia tip:</strong> Turn these into repeatable checklists in Petunia with photo notes (ear color, hot spot map, coat density). Consistency &gt; intensity.
          </div>
        </section>

        {/* VET NOW */}
        <section id="vet-now" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">When to Call the Vet <em>Now</em></h2>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Itch that won’t quit</strong>—face rubbing, paw chewing, frequent scratching, or sleep disruption.</li>
            <li><strong>Ear signs</strong>—head shaking, odor, redness, pain on touch, discharge.</li>
            <li><strong>Hot spots</strong>—rapidly expanding, moist, painful skin patches.</li>
            <li><strong>Patchy hair loss</strong>, darkened/thickened skin, recurrent skin infections.</li>
            <li><strong>Systemic changes</strong>—weight gain with lethargy (possible hypothyroidism) or drinking/urinating more with skin/coat thinning (possible Cushing’s): request evaluation.</li>
            <li><strong>Parasite exposure</strong> or visible fleas—start veterinary-grade prevention and treatment.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">Frequently Asked Questions</h2>

          <p className="mb-3">
            <strong>Do Golden Retrievers shed year-round?</strong><br />
            Yes—daily baseline shedding plus seasonal spikes. Weekly brushing and periodic bath/condition/dry is the easiest control plan.
          </p>

          <p className="mb-3">
            <strong>Will shaving stop shedding?</strong><br />
            No. Shaving does not stop shedding and can damage coat function and texture. Stick with brushing, drying, and home hair controls.
          </p>

          <p className="mb-3">
            <strong>What brush works best?</strong><br />
            Use a <em>slicker</em> for feathering and line-brushing, an <em>undercoat rake</em> for dense zones, and a <em>comb</em> for tangles. Technique beats tool hype.
          </p>

          <p className="mb-3">
            <strong>How often should I bathe my Golden?</strong><br />
            Many families do every 3–6 weeks, more often during coat blow or after dirty adventures. Always condition and rinse thoroughly; dry completely.
          </p>

          <p className="mb-3">
            <strong>Can diet reduce shedding?</strong><br />
            Balanced nutrition supports healthy skin and hair; omega-3s may help itchy, inflamed skin. Diet won’t eliminate normal shedding but can improve coat quality—ask your veterinarian.
          </p>

          <p className="mb-0">
            <strong>Are Goldens OK for people with allergies?</strong><br />
            They’re not hypoallergenic, but many allergic households do well with strong grooming and room controls plus medical guidance for the human.
          </p>
        </section>

        {/* SOURCES */}
        <section id="sources" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">📚 Sources (Selected)</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            {/* Breed background */}
            <li>
              American Kennel Club (AKC). Golden Retriever breed overview.{' '}
              <a href="https://www.akc.org/dog-breeds/golden-retriever/" target="_blank" rel="noopener noreferrer">
                https://www.akc.org/dog-breeds/golden-retriever/
              </a>
            </li>

            {/* Dermatology & shedding/alopecia context */}
            <li>
              Merck Veterinary Manual (MSD). <em>Hair Loss (Alopecia) in Dogs</em>—owner overview.{' '}
              <a href="https://www.merckvetmanual.com/dog-owners/skin-disorders-of-dogs/hair-loss-alopecia-in-dogs" target="_blank" rel="noopener noreferrer">
                https://www.merckvetmanual.com/.../hair-loss-alopecia-in-dogs
              </a>
            </li>
            <li>
              Merck Veterinary Manual (MSD). <em>Atopic Dermatitis (Atopy) in Dogs</em>.{' '}
              <a href="https://www.merckvetmanual.com/dog-owners/skin-disorders-of-dogs/atopic-dermatitis-atopy-in-dogs" target="_blank" rel="noopener noreferrer">
                https://www.merckvetmanual.com/.../atopic-dermatitis-atopy-in-dogs
              </a>
            </li>
            <li>
              Merck Veterinary Manual (MSD). <em>Flea Allergy Dermatitis</em>.{' '}
              <a href="https://www.merckvetmanual.com/dog-owners/skin-disorders-of-dogs/flea-allergy-dermatitis-in-dogs" target="_blank" rel="noopener noreferrer">
                https://www.merckvetmanual.com/.../flea-allergy-dermatitis-in-dogs
              </a>
            </li>
            <li>
              Merck Veterinary Manual (MSD). <em>Food Allergy</em> in dogs.{' '}
              <a href="https://www.merckvetmanual.com/dog-owners/skin-disorders-of-dogs/food-allergy-in-dogs" target="_blank" rel="noopener noreferrer">
                https://www.merckvetmanual.com/.../food-allergy-in-dogs
              </a>
            </li>
            <li>
              Merck Veterinary Manual (MSD). <em>Hypothyroidism in Dogs</em>.{' '}
              <a href="https://www.merckvetmanual.com/dog-owners/endocrine-system-disorders-of-dogs/hypothyroidism-in-dogs" target="_blank" rel="noopener noreferrer">
                https://www.merckvetmanual.com/.../hypothyroidism-in-dogs
              </a>
            </li>
            <li>
              Merck Veterinary Manual (MSD). <em>Hyperadrenocorticism (Cushing’s Disease) in Dogs</em>.{' '}
              <a href="https://www.merckvetmanual.com/dog-owners/endocrine-system-disorders-of-dogs/cushing-disease-hyperadrenocorticism-in-dogs" target="_blank" rel="noopener noreferrer">
                https://www.merckvetmanual.com/.../cushing-disease-hyperadrenocorticism-in-dogs
              </a>
            </li>
            <li>
              Merck Veterinary Manual (MSD). <em>Otitis Externa in Dogs</em>.{' '}
              <a href="https://www.merckvetmanual.com/dog-owners/ear-disorders-of-dogs/ear-infections-and-otitis-externa-in-dogs" target="_blank" rel="noopener noreferrer">
                https://www.merckvetmanual.com/.../ear-infections-and-otitis-externa-in-dogs
              </a>
            </li>
            <li>
              Merck Veterinary Manual (MSD). <em>Pyotraumatic Dermatitis (Hot Spots)</em>.{' '}
              <a href="https://www.merckvetmanual.com/dog-owners/skin-disorders-of-dogs/pyotraumatic-dermatitis-hot-spots-in-dogs" target="_blank" rel="noopener noreferrer">
                https://www.merckvetmanual.com/.../pyotraumatic-dermatitis-hot-spots-in-dogs
              </a>
            </li>

            {/* Preventive care & nutrition */}
            <li>
              WSAVA. <em>Global Nutrition Guidelines</em>—body condition and nutrition conversations.{' '}
              <a href="https://wsava.org/global-guidelines/global-nutrition-guidelines/" target="_blank" rel="noopener noreferrer">
                https://wsava.org/global-guidelines/global-nutrition-guidelines/
              </a>
            </li>

            {/* Allergies & households */}
            <li>
              AVMA. <em>Allergies: Pets</em>—living with pets when people are allergic; environmental management basics.{' '}
              <a href="https://www.avma.org/resources-tools/pet-owners/petcare/allergies-pets" target="_blank" rel="noopener noreferrer">
                https://www.avma.org/resources-tools/pet-owners/petcare/allergies-pets
              </a>
            </li>

            {/* Epidemiology & breed health context */}
            <li>
              Royal Veterinary College (RVC) VetCompass. Breed health research resources.{' '}
              <a href="https://www.rvc.ac.uk/vetcompass" target="_blank" rel="noopener noreferrer">
                https://www.rvc.ac.uk/vetcompass
              </a>
            </li>
          </ul>
          <p className="text-xs text-gray-600 mt-4">
            Educational content only. Always consult your veterinarian for individualized skin, coat, and allergy care.
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
