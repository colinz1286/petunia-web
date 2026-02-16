'use client';

import Head from 'next/head';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function DoGermanShepherdsShedALot() {
  const locale = useLocale();

  const title =
    'Do German Shepherds Shed a Lot? Coat Science, Grooming Plans, and Real-World Home Strategies';
  const date = 'August 16, 2025';
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
    'German Shepherds are heavy, year-round shedders with seasonal “coat blows.” This evidence-informed guide explains why they shed, how to groom them efficiently, what counts as normal vs. abnormal shedding, nutrition and skin-health basics, home allergen control, daycare/boarding policies, and step-by-step checklists.';

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
            <li><a href="#coat-basics" className="underline hover:opacity-80">Coat Basics</a></li>
            <li><a href="#how-much" className="underline hover:opacity-80">How Much Do They Shed?</a></li>
            <li><a href="#calendar" className="underline hover:opacity-80">Seasonal Shedding Calendar</a></li>
            <li><a href="#tools" className="underline hover:opacity-80">Grooming Tools &amp; Techniques</a></li>
            <li><a href="#bathing" className="underline hover:opacity-80">Bathing &amp; Drying</a></li>
            <li><a href="#nutrition" className="underline hover:opacity-80">Nutrition for Skin &amp; Coat</a></li>
            <li><a href="#health" className="underline hover:opacity-80">When Shedding Isn’t Normal</a></li>
            <li><a href="#home" className="underline hover:opacity-80">Home &amp; Allergy Management</a></li>
            <li><a href="#daycare" className="underline hover:opacity-80">Daycare/Boarding Policies</a></li>
            <li><a href="#templates" className="underline hover:opacity-80">Checklists &amp; Templates</a></li>
            <li><a href="#faq" className="underline hover:opacity-80">FAQ</a></li>
            <li><a href="#sources" className="underline hover:opacity-80">📚 Sources (Selected)</a></li>
          </ul>
        </nav>

        {/* TL;DR */}
        <section id="tl-dr" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Short Answer (TL;DR)</h2>
          <p className="mb-4">
            <strong>Yes—German Shepherd Dogs (GSDs) shed a lot.</strong> They have a dense <em>double coat</em> and will drop hair year-round, with
            heavier seasonal “coat blows.” You can keep it manageable with a <strong>weekly baseline brush</strong> (daily during coat blows), a
            <strong> once-monthly bath + de-shed</strong> cycle (adjust to lifestyle and vet guidance), and a <strong>home routine</strong> that includes
            HEPA-grade cleaning and washable fabrics. Avoid shaving the double coat except for medical reasons. Pair grooming with <strong>skin-healthy
              nutrition</strong> and watch for <strong>red flags</strong> (itch, bald patches, dull/brittle hair) that call for a vet visit.
          </p>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Petunia tip:</strong> Save your dog’s <em>brush/bath calendar, tool list, and “shed-storm” cleaning plan</em> in Petunia so every
            caregiver does the same thing the same way—especially during coat-blow weeks.
          </div>
        </section>

        {/* COAT BASICS */}
        <section id="coat-basics" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Coat Basics: Why German Shepherds Shed</h2>
          <p className="mb-3">
            GSDs wear a two-layer system: an <strong>outer guard coat</strong> (longer, coarser hairs that shed water and shield from sun/abrasion) and a
            <strong> soft undercoat</strong> (fine, insulating fibers). That architecture is great for weather, but it also means <em>more hair to replace</em>.
            Hair follicles cycle through growth and rest phases; when many undercoat hairs exit together—especially with seasonal light/temperature
            changes—you see dramatic shedding (“<strong>blowing coat</strong>”). Day to day, you’ll still find a steady drizzle of guard hairs and undercoat.
          </p>
          <p className="mb-3">
            Translation for your home: expect <strong>continuous low-to-moderate shedding</strong> with <strong>spikes</strong> once or twice a year.
            Lifestyle (indoor vs. outdoor light), hormones, health, stress, and diet all nudge the timing and volume.
          </p>
          <p>
            This is <em>normal biology</em>—not a training issue. Your job is to <strong>manage the inputs</strong> (tools, schedule, nutrition) and
            <strong>catch health exceptions early</strong>.
          </p>
        </section>

        {/* HOW MUCH */}
        <section id="how-much" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">How Much Do They Shed—Really?</h2>
          <p className="mb-3">
            On the shedding spectrum, German Shepherds sit firmly in the “<strong>heavy</strong>” category. Owners commonly report visible hair on floors,
            clothing, car seats, and vents without routine management. Breed organizations describe them as <em>year-round shedders</em> that benefit from
            frequent brushing and periodic de-shedding sessions. In practice, the difference between “fur everywhere” and “totally livable” is a system:
            <strong> thirty to sixty minutes of focused grooming weekly</strong>, ramped up during coat blows, plus a couple of targeted home habits.
          </p>
          <p>
            If your household is tight on time, it’s reasonable to budget <strong>professional grooming</strong> during peak seasons, then maintain at home.
            The goal isn’t zero hair (that’s not realistic); the goal is <strong>predictable, low-stress upkeep</strong>.
          </p>
        </section>

        {/* CALENDAR */}
        <section id="calendar" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">A Practical Shedding Calendar</h2>
          <p className="mb-3">
            Use this as a starting template. Indoor lighting, regional climate, age, hormones, and health will shift the exact weeks.
          </p>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>Jan–Feb:</strong> Steady baseline shedding. Weekly brush; bath + de-shed every 4–8 weeks as needed.</li>
            <li><strong>Mar–May:</strong> <em>Spring coat blow</em> window for many GSDs. Daily quick brush (10–15 min), targeted undercoat raking 2–3×/week, 1–2 de-shed baths.</li>
            <li><strong>Jun–Aug:</strong> Heat management matters; sweat the drying step. Weekly brush; extra sessions after hikes/swims.</li>
            <li><strong>Sep–Nov:</strong> <em>Fall coat blow</em> for many dogs. Mirror the spring plan.</li>
            <li><strong>Dec:</strong> Baseline again. Review tools, replace worn slicker/rake teeth, launder covers, and update your Petunia schedule.</li>
          </ul>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Petunia tip:</strong> Make “<em>mini sessions</em>” your default: 3–5 minute slicker pass after evening walks. Tiny habits prevent big
            fur avalanches.
          </div>
        </section>

        {/* TOOLS */}
        <section id="tools" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Grooming Tools &amp; Techniques (Pro Playbook)</h2>
          <p className="mb-3">
            You don’t need a closet of gadgets—just a well-matched handful and good technique. Here’s a battle-tested kit for German Shepherd coats:
          </p>
          <h3 className="text-lg font-semibold mt-2 mb-1">Core tools</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>Slicker brush</strong> (medium/large): lifts impacted undercoat and teases tangles in feathering.</li>
            <li><strong>Undercoat rake</strong> with rotating teeth: pulls loose undercoat efficiently; keep angle shallow.</li>
            <li><strong>Pin brush</strong> or <strong>coarse/fine comb</strong>: finishing pass; check elbows, belly, pants, tail.</li>
            <li><strong>De-shedding tool</strong> (blade-style) <em>used gently and sparingly</em>: can speed removal on dense areas; avoid repeated passes on the same spot to protect topcoat.</li>
            <li><strong>Nail trimmer</strong> (scissor or grinder), <strong>ear wipes</strong>, and a <strong>paw balm</strong> for seasonal dryness.</li>
            <li><strong>High-velocity dryer</strong> (HV) or force-dryer: optional but incredibly effective after baths to “blow out” undercoat before it mats. Use ear/eye protection and cool/warm air.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Weekly baseline session (20–30 minutes)</h3>
          <ol className="list-decimal pl-5 space-y-2 mb-3">
            <li><strong>Map the coat</strong>: start at shoulders → back → pants → tail → chest → belly. Work with the lay, not against it.</li>
            <li><strong>Line brushing</strong>: lift a thin “line” of hair with one hand, brush the line beneath with steady, short strokes from skin outward.</li>
            <li><strong>Rake where dense</strong>: with a shallow angle and light pressure; one or two passes per “panel” is plenty.</li>
            <li><strong>Comb to finish</strong>: confirm you can slide a comb through without snagging. Spot-treat snags with the slicker; don’t yank.</li>
            <li><strong>Quick checks</strong>: nails, pads, elbows, armpits, tail base, and ear leather for scurf or odor.</li>
          </ol>

          <h3 className="text-lg font-semibold mt-2 mb-1">During coat blows (daily 10–15 minutes)</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Slicker pass + brief rake on pants/chest/tail base.</li>
            <li>Mini HV-dry outside or in a shower if available—short bursts to pop loose undercoat.</li>
            <li>Stop when skin is a little pink or when you’re pulling fresh, anchored hair—more isn’t better.</li>
          </ul>

          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Petunia tip:</strong> Add “<em>gentle only</em>” to your tool notes. Blade-style de-shedders and repeated rake passes can chew up a topcoat.
            Technique beats force—always.
          </div>

          <h3 className="text-lg font-semibold mt-2 mb-1">Important: Don’t shave the double coat</h3>
          <p>
            Shaving a GSD for convenience removes insulation, can compromise thermoregulation and sun protection, and may alter regrowth texture. Reserve
            clipping for medical procedures per your veterinarian. Trim only hygiene areas if needed; manage heat with shade, cool water, and rest cycles.
          </p>
        </section>

        {/* BATHING */}
        <section id="bathing" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Bathing &amp; Drying: The De-Shed Accelerator</h2>
          <p className="mb-3">
            A good bath makes de-shedding faster and more comfortable. How often? It depends on lifestyle, skin health, and season. Many healthy, active GSDs
            do well with a <strong>4–8 week</strong> interval, tightening to <strong>every 3–4 weeks</strong> during heavy coat blows or muddy adventures. If your vet
            has prescribed a medicated shampoo, follow that schedule instead.
          </p>
          <h3 className="text-lg font-semibold mt-2 mb-1">Step-by-step</h3>
          <ol className="list-decimal pl-5 space-y-2 mb-3">
            <li><strong>Pre-brush</strong> thoroughly. Water tightens small tangles into mats; loosen debris first.</li>
            <li><strong>Soak completely</strong>: double coat needs time—use lukewarm water; avoid hot.</li>
            <li><strong>Shampoo</strong> with a dog-specific, skin-appropriate product. Work to skin with massage; rinse until water runs clear.</li>
            <li><strong>Condition</strong> lightly for slip and reduced static; detangling sprays can help post-bath comb-outs.</li>
            <li><strong>HV-dry</strong> (or towel + fan) until the skin is <em>fully dry</em>. Most matting starts in damp undercoat. While drying, use the slicker to “catch” lifted undercoat.</li>
            <li><strong>Finish</strong> with a gentle rake pass and comb check. Reward and water break.</li>
          </ol>
          <p className="text-sm text-gray-700">
            Notes: Always choose canine pH-appropriate products; human shampoos can disrupt barrier function. If you see dandruff, redness, odor, or repeated
            scratching after baths, pause frequency and call your vet—there may be an underlying skin condition.
          </p>
        </section>

        {/* NUTRITION */}
        <section id="nutrition" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Nutrition for Skin &amp; Coat (Evidence-Informed)</h2>
          <p className="mb-3">
            A shiny, resilient coat starts from within. Work with your veterinarian to pick a complete and balanced diet that fits your GSD’s life stage and
            activity. Many dogs with dry, flaky skin or recurrent itch benefit from targeted <strong>omega-3s (EPA/DHA)</strong> from marine sources and overall
            nutrient adequacy (quality protein, zinc, biotin, essential fatty acids). If supplements are appropriate, your vet can select product type and dose.
          </p>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>EPA/DHA</strong> (fish oil or algae) support skin barrier and have anti-inflammatory effects—especially relevant in allergic skin disease.</li>
            <li><strong>Hydration</strong> matters: add a second water station; consider wet food to support skin moisture in dry climates.</li>
            <li><strong>Body condition</strong>: excess weight increases skin fold issues and reduces heat tolerance around grooming/drying.</li>
          </ul>
          <p>
            Be cautious with fad “skin and coat” claims; look for products with transparent sourcing and veterinary guidance. More oil isn’t automatically
            better; overdose can cause GI upset and interact with some medications.
          </p>
        </section>

        {/* HEALTH RED FLAGS */}
        <section id="health" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">When Shedding Isn’t Normal: Red Flags &amp; Vet Pathways</h2>
          <p className="mb-3">
            Seasonal fluff is expected. See your veterinarian if you notice any of the following patterns alongside increased hair loss:
          </p>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>Itch</strong> (scratching, rubbing, chewing), <strong>odor</strong>, or <strong>redness</strong>.</li>
            <li><strong>Patchy bald spots</strong>, broken hairs, or “moth-eaten” look.</li>
            <li><strong>Symmetric thinning</strong> on flanks/tail base with dull, slow regrowth.</li>
            <li><strong>Scaling</strong>, crusts, pustules, or frequent ear infections.</li>
            <li><strong>Systemic signs</strong>: weight change, lethargy, panting at rest, increased thirst/urination.</li>
          </ul>
          <p className="mb-3">
            Common rule-outs include <strong>parasites</strong> (fleas/ticks; flea-allergy dermatitis can cause dramatic hair loss and secondary infection),
            <strong> allergic skin disease</strong> (environmental/food), and <strong>endocrine disease</strong> (e.g., hypothyroidism or Cushing’s), among others. Early diagnostics—
            skin scrapings/cytology, flea control trials, and targeted blood work—save time and discomfort.
          </p>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Petunia tip:</strong> Log flare patterns alongside food, meds, and cleaning products. Share the timeline with your vet or
            behavior/grooming team to spot triggers quickly.
          </div>
        </section>

        {/* HOME & ALLERGY */}
        <section id="home" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Home &amp; Allergy Management (Make Shedding Livable)</h2>
          <p className="mb-3">
            Heavy shedding doesn’t have to mean a furry chaos zone. Build a low-friction routine so hair removal happens while you live your life:
          </p>
          <h3 className="text-lg font-semibold mt-2 mb-1">Daily/weekly habits</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>Fabric smart</strong>: washable throws on favorite nap spots; pet-specific car seat covers.</li>
            <li><strong>Laundry loop</strong>: lint roll → dryer “air fluff” 10 minutes → normal wash; traps more hair in the lint screen.</li>
            <li><strong>Floor care</strong>: vacuum 1–2×/week minimum; more during coat blows. Use machines with sealed systems and high-efficiency filtration.</li>
            <li><strong>Air quality</strong>: portable HEPA air cleaner in living/sleep areas; HVAC filters changed on schedule.</li>
            <li><strong>Grooming zone</strong>: brush outdoors or in a tiled bathroom; keep a small trash can and grooming caddy ready.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">If someone in the home is allergy-prone</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Keep the <strong>bedroom dog-free</strong>; close doors and run a HEPA unit there.</li>
            <li>Choose <strong>low-pile rugs</strong> and washable curtains; damp-dust hard surfaces.</li>
            <li>Consider <strong>weekly baths</strong> <em>only if</em> your veterinarian approves for skin health; over-bathing can backfire.</li>
            <li>Coordinate with an <strong>allergist</strong> about medications or immunotherapy if symptoms persist.</li>
          </ul>
        </section>

        {/* DAYCARE/BOARDING */}
        <section id="daycare" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Daycare &amp; Boarding: Breed-Aware, Shed-Smart</h2>
          <p className="mb-3">
            Great facilities make life easier for heavy shedders. Ask questions that show staff understand double-coat care and hygiene logistics.
          </p>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>De-shed services</strong>: Do they offer a bath + HV blowout add-on before pickup during coat-blow weeks?</li>
            <li><strong>Climate control</strong>: Cool-down rooms and rest cycles to prevent heat stress after play and post-bath.</li>
            <li><strong>Surface choices</strong>: traction flooring and non-slip ramps to protect joints while carrying a dense coat.</li>
            <li><strong>Parasite prevention policy</strong>: year-round flea/tick control required; prompt reporting of any pruritus or hotspots.</li>
            <li><strong>Housekeeping</strong>: fur bunnies happen—what’s their daily vacuum/air filter plan?</li>
          </ul>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Petunia workflow:</strong> Share your GSD’s brush map, tool preferences, allergies, and post-play cool-down plan in Petunia before check-in.
            Consistency = calmer dogs and cleaner rides home.
          </div>
        </section>

        {/* CHECKLISTS */}
        <section id="templates" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Checklists &amp; Templates</h2>

          <h3 className="text-lg font-semibold mt-2 mb-1">Weekly Grooming (Print This)</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Line-brush shoulders → back → pants → tail → chest → belly (15–20 min).</li>
            <li>Rake dense zones lightly; stop at first pinkness.</li>
            <li>Comb check; clip/grind nails; quick ear wipe; paw balm as needed.</li>
            <li>Log any itch, odor, or hot spots for your vet/groomer.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Bath + De-Shed Flow (Every 4–8 Weeks)</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Pre-brush → soak → shampoo → rinse thoroughly → condition lightly → rinse again.</li>
            <li>HV-dry to the skin; use slicker while drying; finish with rake + comb.</li>
            <li>Water, shade, and calm decompression afterward.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Home Hair Control</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Washable throws on sofas/beds; lint-roll before laundry.</li>
            <li>Vacuum 1–2×/week (more in coat blows) with HEPA-equipped machine; damp-dust hard surfaces.</li>
            <li>HEPA room air cleaner in main living/sleep areas; close bedroom door.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Vet-Visit Triggers</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Itch, malodor, redness, pustules, or ear debris.</li>
            <li>Patchy or symmetric hair loss; slow regrowth; dull/brittle hair.</li>
            <li>Behavioral or systemic changes (thirst/urination, panting at rest, weight change).</li>
          </ul>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">Frequently Asked Questions</h2>

          <p className="mb-3">
            <strong>Do German Shepherds shed year-round?</strong><br />
            Yes. Expect steady background shedding with heavier seasonal “coat blows” once or twice a year. Indoor living and regional climate can smooth or shift the spikes.
          </p>

          <p className="mb-3">
            <strong>What’s the single most effective habit?</strong><br />
            A consistent <em>weekly</em> line-brush + light rake, upgraded to brief <em>daily</em> touch-ups during coat blows. Add a bath + HV dry every 4–8 weeks for speed.
          </p>

          <p className="mb-3">
            <strong>Should I shave my GSD to control shedding?</strong><br />
            No. Shaving removes essential insulation and can affect regrowth. Use brushing, de-shedding, baths, and home cleaning strategies instead. Reserve clipping for medical reasons under veterinary care.
          </p>

          <p className="mb-3">
            <strong>Which brush is “best” for GSDs?</strong><br />
            Most owners thrive with a slicker + undercoat rake + comb trio. Blade-style de-shedders can help if used gently and sparingly.
          </p>

          <p className="mb-3">
            <strong>Can food reduce shedding?</strong><br />
            A complete, balanced diet supports coat quality. Under your vet’s guidance, marine-source omega-3s (EPA/DHA) can support skin/coat health, especially for allergic dogs. Diet won’t stop normal shedding but can reduce dullness and breakage.
          </p>

          <p className="mb-3">
            <strong>My shepherd is shedding <em>way</em> more than usual. What now?</strong><br />
            Call your veterinarian to rule out parasites (especially fleas), allergic dermatitis, and endocrine issues such as hypothyroidism or Cushing’s disease. Bring a timeline, photos, and your grooming/nutrition notes.
          </p>

          <p>
            <strong>Are GSDs hypoallergenic?</strong><br />
            No breed is truly hypoallergenic. Allergies are driven by proteins in dander/saliva/urine—not just hair. You can reduce exposure with HEPA cleaning, washable fabrics, bedroom boundaries, and grooming, but sensitive people may still react.
          </p>
        </section>

        {/* SOURCES */}
        <section id="sources" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">📚 Sources (Selected)</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            <li>
              American Kennel Club (AKC). <em>Dog Shedding: What to Expect &amp; How to Manage It</em>; <em>German Shepherd Dog Grooming</em>; and <em>Double-Coated Dog Breeds</em>.{' '}
              <a href="https://www.akc.org/expert-advice/health/dog-shedding-what-to-expect-and-how-to-manage-it/" target="_blank" rel="noopener noreferrer">Shedding overview</a>{' '}
              |{' '}<a href="https://www.akc.org/expert-advice/dog-breeds/grooming-german-shepherds/" target="_blank" rel="noopener noreferrer">GSD grooming</a>{' '}
              |{' '}<a href="https://www.akc.org/expert-advice/dog-breeds/double-coated-dog-breeds/" target="_blank" rel="noopener noreferrer">Double coat basics</a>
            </li>
            <li>
              VCA Animal Hospitals. <em>Coat &amp; Skin Appearance in the Healthy Dog</em>; <em>How Often to Bathe</em> (general guidance); Omega-3 info.{' '}
              <a href="https://vcahospitals.com/know-your-pet/coat-and-skin-appearance-in-the-healthy-dog" target="_blank" rel="noopener noreferrer">Healthy coat</a>{' '}
              |{' '}<a href="https://vcahospitals.com/know-your-pet/fish-oil" target="_blank" rel="noopener noreferrer">Fish oil (EPA/DHA)</a>{' '}
              |{' '}<a href="https://vcahospitals.com/know-your-pet/the-importance-of-your-pets-skin-and-coat-and-the-role-of-diet" target="_blank" rel="noopener noreferrer">Diet &amp; skin</a>
            </li>
            <li>
              Merck Veterinary Manual (MSD). <em>Flea Allergy Dermatitis</em> (dogs/cats); <em>Hypothyroidism</em>; <em>Hair Loss in Dogs (Alopecia)</em>.{' '}
              <a href="https://www.merckvetmanual.com/integumentary-system/fleas-and-flea-allergy-dermatitis/flea-allergy-dermatitis-in-dogs-and-cats" target="_blank" rel="noopener noreferrer">FAD</a>{' '}
              |{' '}<a href="https://www.merckvetmanual.com/endocrine-system/the-thyroid-gland/hypothyroidism-in-animals" target="_blank" rel="noopener noreferrer">Hypothyroidism</a>{' '}
              |{' '}<a href="https://www.merckvetmanual.com/dog-owners/skin-disorders-of-dogs/hair-loss-alopecia-in-dogs" target="_blank" rel="noopener noreferrer">Alopecia overview</a>
            </li>
            <li>
              U.S. EPA &amp; Allergy/Immunology Orgs on HEPA and allergens.{' '}
              <a href="https://www.epa.gov/indoor-air-quality-iaq/what-hepa-filter" target="_blank" rel="noopener noreferrer">EPA: What is a HEPA filter?</a>{' '}
              |{' '}<a href="https://aafa.org/allergies/types-of-allergies/pet-dog-cat-allergies/" target="_blank" rel="noopener noreferrer">AAFA: Pet allergies</a>{' '}
              |{' '}<a href="https://acaai.org/allergies/management-treatment/living-with-allergies/air-filters/" target="_blank" rel="noopener noreferrer">ACAAI: Air filters</a>
            </li>
            <li>
              WSAVA Global Nutrition Guidelines &amp; Toolkit.{' '}
              <a href="https://wsava.org/global-guidelines/global-nutrition-guidelines/" target="_blank" rel="noopener noreferrer">Guidelines</a>{' '}
              |{' '}<a href="https://wsava.org/wp-content/uploads/2021/04/WSAVA-Global-Nutrition-Toolkit-English.pdf" target="_blank" rel="noopener noreferrer">Toolkit (owner/vet tools)</a>
            </li>
            <li>
              CDC. <em>About Fleas</em> and <em>Getting Rid of Fleas</em> (general prevention context).{' '}
              <a href="https://www.cdc.gov/fleas/about/index.html" target="_blank" rel="noopener noreferrer">CDC: About Fleas</a>{' '}
              |{' '}<a href="https://www.cdc.gov/fleas/getting-rid/index.html" target="_blank" rel="noopener noreferrer">CDC: Getting Rid of Fleas</a>
            </li>
          </ul>
          <p className="text-xs text-gray-600 mt-4">
            Educational content only. Always consult your veterinarian or a board-certified veterinary dermatologist for individualized diagnosis and treatment.
          </p>
        </section>

        {/* Related German Shepherd Articles */}
        <div className="mt-16 border-t border-[#d9cfc2] pt-8">
          <h2 className="text-xl font-semibold mb-4 text-[#2c4a30]">
            More German Shepherd Guides You May Like
          </h2>

          <ul className="list-disc pl-6 space-y-2 text-[#2c4a30]">
            <li>
              <Link
                href="https://www.petuniapets.com/en/blog/fun-facts-about-german-shepherds"
                className="underline hover:opacity-80"
              >
                Fun Facts About German Shepherds
              </Link>
            </li>

            <li>
              <Link
                href="https://www.petuniapets.com/en/blog/how-long-do-german-shepherds-live"
                className="underline hover:opacity-80"
              >
                How Long Do German Shepherds Live?
              </Link>
            </li>

            <li>
              <Link
                href="https://www.petuniapets.com/en/blog/how-much-does-a-german-shepherd-cost"
                className="underline hover:opacity-80"
              >
                How Much Does a German Shepherd Cost?
              </Link>
            </li>

            <li>
              <Link
                href="https://www.petuniapets.com/en/blog/are-german-shepherds-aggressive-or-dangerous"
                className="underline hover:opacity-80"
              >
                Are German Shepherds Aggressive or Dangerous?
              </Link>
            </li>

            <li>
              <Link
                href="https://www.petuniapets.com/en/blog/are-german-shepherds-good-with-kids"
                className="underline hover:opacity-80"
              >
                Are German Shepherds Good with Kids?
              </Link>
            </li>

            <li>
              <Link
                href="https://www.petuniapets.com/en/blog/what-health-problems-are-common-in-german-shepherds"
                className="underline hover:opacity-80"
              >
                What Health Problems Are Common in German Shepherds?
              </Link>
            </li>
          </ul>
        </div>

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
