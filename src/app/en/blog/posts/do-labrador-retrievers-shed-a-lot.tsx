'use client';

import Head from 'next/head';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function DoLabradorRetrieversShedALot() {
  const locale = useLocale();

  const title = 'Do Labrador Retrievers Shed a Lot? The Complete Owner’s Guide to Shedding, Allergies, and Coat Care';
  const date = 'April 17, 2025';
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
    'Do Labrador Retrievers shed a lot? Yes—here’s exactly how much, why it happens, and what to do about it. A practical, evidence-informed guide covering coat biology, seasonal “blowouts,” allergy realities, grooming tools and routines, diet and skin health, boarding/daycare tips, home cleaning strategies, and red flags for veterinary care.';

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
            <li><a href="#shedding-101" className="underline hover:opacity-80">Shedding 101</a></li>
            <li><a href="#how-much" className="underline hover:opacity-80">How Much Do Labs Shed?</a></li>
            <li><a href="#seasons" className="underline hover:opacity-80">Seasonal vs Year-Round</a></li>
            <li><a href="#factors" className="underline hover:opacity-80">What Increases Shedding</a></li>
            <li><a href="#grooming" className="underline hover:opacity-80">Grooming Tools & Routines</a></li>
            <li><a href="#diet-coat" className="underline hover:opacity-80">Diet, Skin & Coat Health</a></li>
            <li><a href="#allergies-people" className="underline hover:opacity-80">Human Allergies & Dander Control</a></li>
            <li><a href="#allergies-dogs" className="underline hover:opacity-80">Dog Allergies: When Shedding Isn’t Normal</a></li>
            <li><a href="#home" className="underline hover:opacity-80">Home Setup & Hair Management</a></li>
            <li><a href="#daycare-boarding" className="underline hover:opacity-80">Daycare & Boarding Considerations</a></li>
            <li><a href="#training-grooming" className="underline hover:opacity-80">Training for Stress-Free Grooming</a></li>
            <li><a href="#checklists" className="underline hover:opacity-80">Checklists & Templates</a></li>
            <li><a href="#pros-cons" className="underline hover:opacity-80">Pros & Cons for Families</a></li>
            <li><a href="#faq" className="underline hover:opacity-80">FAQ</a></li>
            <li><a href="#sources" className="underline hover:opacity-80">📚 Sources</a></li>
          </ul>
        </nav>

        {/* TL;DR */}
        <section id="tl-dr" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Short Answer (TL;DR)</h2>
          <p className="mb-4">
            <strong>Yes, Labrador Retrievers shed—a lot.</strong> As double-coated sporting dogs, Labs shed a steady amount all year and experience
            heavier seasonal “blowouts” in spring and fall when undercoat density changes. The good news: shedding is manageable with the
            right tools, a repeatable grooming routine, smart home setup, and attention to skin/coat health (nutrition, parasites, allergies).
            For households with <em>severe</em> dog dander allergies, Labs are usually not the best match; they are <strong>not hypoallergenic</strong>.
          </p>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Bottom line:</strong> Expect hair on your floors and clothes. Control it with a plan—brush 2–4x/week, bathe and blow-dry
            monthly or as needed, maintain a lean diet with adequate omega-3s, keep up with parasite prevention, and get veterinary help
            for itching, hot spots, or patchy hair loss.
          </div>
        </section>

        {/* SHEDDING 101 */}
        <section id="shedding-101" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Shedding 101: Why Labs Lose Hair (and Why That’s Normal)</h2>
          <p className="mb-3">
            Labrador Retrievers are <strong>double-coated</strong>: a weather-resistant outer coat (guard hairs) and a softer, insulating
            <strong> undercoat</strong>. Hair grows in cycles—anagen (growth), catagen (transition), telogen (rest), and exogen (shedding).
            Factors like daylight length, temperature, hormones, nutrition, stress, and overall health influence where hairs are in the cycle.
          </p>
          <p className="mb-3">
            The undercoat acts like a thermal buffer, helping Labs stay warm in cold water and cool with air circulation near the skin. When seasons
            shift, the dog’s biology “rebalances” coat density to match new conditions; that’s the classic tumbleweed moment for Lab families.
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Outer coat:</strong> slightly oily, water-resistant, provides directional protection against the elements.</li>
            <li><strong>Undercoat:</strong> fine, dense hairs that trap air for insulation; varies with season and individual genetics.</li>
            <li><strong>Shedding:</strong> a normal turnover process; “excessive” only when paired with itch, odor, dandruff, redness, or bald patches.</li>
          </ul>
        </section>

        {/* HOW MUCH */}
        <section id="how-much" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">How Much Do Labs Shed—Really?</h2>
          <p className="mb-3">
            On a shedding scale, Labs are a <strong>moderate-to-heavy</strong> shedding breed. You’ll see a consistent baseline of hair on floors,
            furniture, and clothing, plus twice-yearly peaks when the undercoat thickens or thins. Individual variation is real:
            field-bred lines may have slightly different coat textures than show lines, indoor-only dogs may have more diffuse year-round shedding,
            and neuter status, age, and latitude/climate all play roles.
          </p>
          <p className="mb-3">
            If you’ve lived with a short-haired “low-shed” dog before, a Lab will likely feel like a big step up. If you’ve had Huskies or
            German Shepherds, your reaction may be, “manageable, but get the right brush.” The key difference is <strong>routine</strong>:
            Labs respond extremely well to frequent, short grooming sessions baked into weekly life.
          </p>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Operator tip:</strong> You don’t “stop” shedding—you channel it. Hair caught in a brush or on a towel now is hair that won’t be
            spread across your sofa later.
          </div>
        </section>

        {/* SEASONS */}
        <section id="seasons" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Seasonal vs. Year-Round: Why “Blowouts” Happen</h2>
          <p className="mb-3">
            Double-coated dogs like Labs often “blow coat” (shed heavily) as days lengthen (spring) and again as they shorten (fall). Photoperiod
            affects hormone signals that tell hair follicles to hang on or let go. In modern homes with artificial lighting and HVAC, the blowout
            can be less synchronized—more of a rolling shedding pattern all year—but most families still notice one or two peak periods.
          </p>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>Spring:</strong> thicker winter undercoat thins out → heavy shedding.</li>
            <li><strong>Fall:</strong> summer undercoat turns over in prep for cooler weather → noticeable shedding again.</li>
            <li><strong>Indoor living:</strong> softer, steady shedding; still expect spikes after big temperature or daylight changes.</li>
          </ul>
          <p>
            Pro-tip for timing: brushing 3–4x/week during blowouts plus a bath-and-blow (with an appropriate dryer) will remove an impressive amount
            of undercoat in a controlled way, dramatically reducing “confetti” around the house.
          </p>
        </section>

        {/* FACTORS */}
        <section id="factors" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">What Increases Shedding? (And What You Can Influence)</h2>
          <p className="mb-3">
            Some shedding drivers are genetic or environmental; others you can control. Understanding both helps you set realistic expectations and
            focus effort where it matters.
          </p>
          <h3 className="text-lg font-semibold mt-2 mb-1">1) Genetics & Line Differences</h3>
          <p className="mb-3">
            All Labs are double-coated, but coat density and texture vary. Show lines may have denser coats; field lines sometimes feel slightly
            lighter. Color (black, yellow, chocolate) doesn’t meaningfully change shedding volume, though contrast makes hair more visible on certain
            fabrics and floors.
          </p>
          <h3 className="text-lg font-semibold mt-2 mb-1">2) Hormones & Neuter Status</h3>
          <p className="mb-3">
            Hormonal shifts—heat cycles, postpartum, and neuter/spay—can alter coat turnover. Some neutered dogs develop a softer, woolier coat
            and more diffuse year-round shedding. That’s normal biology, not a hygiene problem.
          </p>
          <h3 className="text-lg font-semibold mt-2 mb-1">3) Climate, Daylight & Indoor Environment</h3>
          <p className="mb-3">
            Latitude (photoperiod), seasonal temps, indoor heating/cooling, and artificial light all influence hair cycle timing. Sudden weather
            swings can trigger mini-blowouts.
          </p>
          <h3 className="text-lg font-semibold mt-2 mb-1">4) Nutrition & Skin Health</h3>
          <p className="mb-3">
            Insufficient essential fatty acids, poor-quality protein, or unbalanced homemade diets can show up as dull coat, dandruff, and greater
            hair breakage. On the flip side, a complete and balanced diet with adequate omega-3s supports skin barrier function and coat quality.
            (We dig into diet specifics below.)
          </p>
          <h3 className="text-lg font-semibold mt-2 mb-1">5) Parasites, Allergies & Medical Issues</h3>
          <p className="mb-3">
            Fleas, mites, atopic dermatitis (environmental allergies), food allergies, bacterial/yeast infections, and endocrine disease (e.g.,
            hypothyroidism) can cause “shedding” that’s actually <em>hair loss</em> with itch, odor, redness, or scabs. Those need a veterinary exam
            and targeted treatment. (Red flags below.)
          </p>
          <h3 className="text-lg font-semibold mt-2 mb-1">6) Stress & Grooming Avoidance</h3>
          <p>
            Dogs under chronic stress may shed more, and families who avoid brushing because it’s stressful end up with more hair around the house.
            Training your Lab to enjoy grooming (cooperative care) pays for life.
          </p>
        </section>

        {/* GROOMING */}
        <section id="grooming" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Grooming Tools & Routines That Actually Work</h2>
          <p className="mb-3">
            You don’t need a dozen tools; you need the right few and a calendar. The goal is to remove loose undercoat before it distributes itself
            on your baseboards. For Labs, we use a simple stack: <strong>rubber curry or grooming glove</strong> for loosening and massaging, a
            <strong> slicker brush</strong> or soft undercoat rake for collection, and a <strong>microfiber towel</strong> post-bath. If you have access
            to a dog-safe <strong>high-velocity dryer</strong>, that’s the closest thing to a cheat code during blowouts.
          </p>

          <h3 className="text-lg font-semibold mt-2 mb-1">Core Tools (Simple & Effective)</h3>
          <ul className="list-disc pl-5 space-y-2 mb-3">
            <li><strong>Rubber curry/glove:</strong> loosens shedding hair; gentle on skin; great for short daily sessions.</li>
            <li><strong>Slicker brush:</strong> gathers loosened hair; use with light pressure to avoid skin irritation.</li>
            <li><strong>Undercoat rake (soft pins):</strong> optional for heavier seasonal turnover; short, careful strokes.</li>
            <li><strong>Microfiber towels:</strong> post-bath wipe-down removes additional loose hair.</li>
            <li><strong>High-velocity dryer:</strong> for experienced users/pro groomers; quickly blows out undercoat after a bath.</li>
            <li><strong>Nail trimmers/grinder & ear cleaner:</strong> not about hair, but essential to overall grooming health.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Weekly Routine (Non-Negotiable)</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>2–4x/week brush:</strong> 5–10 minutes. Curry to loosen, slicker to collect. Reward calm behavior.</li>
            <li><strong>Monthly bath</strong> (or as needed): canine shampoo, thorough rinse, towel dry; optionally blow-dry to lift undercoat.</li>
            <li><strong>Ears:</strong> quick visual check after swimming/baths; dry gently; use vet-approved cleaner if prone to moisture.</li>
            <li><strong>Nails:</strong> trim weekly or biweekly; shorter nails help movement and reduce skids/tears.</li>
            <li><strong>Teeth:</strong> brushing or VOHC-approved dental chews; coat health correlates with general wellness.</li>
          </ul>

          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm mb-3">
            <strong>Technique tips:</strong> Brush <em>with</em> the lay of the coat; keep sessions short and upbeat; stop before your dog gets fidgety.
            Use light pressure—skin should never be pink afterward. If a tool seems too harsh, it probably is.
          </div>

          <h3 className="text-lg font-semibold mt-2 mb-1">Bath & Blow Strategy (During Blowouts)</h3>
          <ol className="list-decimal pl-5 space-y-1 mb-3">
            <li>Brush lightly before the bath to remove surface hair.</li>
            <li>Shampoo, then rinse longer than you think—residual shampoo can irritate skin.</li>
            <li>Towel-dry thoroughly; if trained and safe, use a dog dryer away from face/ears to lift undercoat.</li>
            <li>Finish with a gentle slicker pass once fully dry.</li>
          </ol>

          <h3 className="text-lg font-semibold mt-2 mb-1">Professional Groomer or DIY?</h3>
          <p className="mb-3">
            Many Lab families do 80% at home and schedule a professional “bath, de-shed, ears, nails” service every 6–8 weeks, especially in
            spring/fall. If your dog is anxious or the hair volume overwhelms you, a groomer’s table, dryer, and experience make a big difference.
          </p>
        </section>

        {/* DIET & COAT */}
        <section id="diet-coat" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Diet, Skin & Coat: What You Feed Shows Up on the Floor</h2>
          <p className="mb-3">
            Skin is a fast-renewing organ. Diets that are complete and balanced, provide adequate high-quality protein, essential fatty acids,
            vitamins, and trace minerals support a glossy, resilient coat that sheds in a healthy pattern. Diets that are imbalanced or too
            calorie-dense can contribute to dandruff, brittle hair, obesity (itself a health risk), and secondary skin issues.
          </p>
          <h3 className="text-lg font-semibold mt-2 mb-1">Core Nutrition Principles</h3>
          <ul className="list-disc pl-5 space-y-2 mb-3">
            <li><strong>Complete & balanced:</strong> Choose commercial diets that meet AAFCO profiles or are formulated to be complete and balanced.</li>
            <li><strong>Omega-3 fatty acids:</strong> EPA/DHA from marine sources (fish oil) support skin barrier and can reduce inflammatory itch.</li>
            <li><strong>Calorie control:</strong> Keep Labs lean—excess calories → obesity → skin folds & reduced mobility.</li>
            <li><strong>Slow transitions:</strong> If switching food, transition over 7–10 days to protect the gut and the coat.</li>
          </ul>

          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm mb-3">
            <strong>Practical target:</strong> Many veterinarians suggest fish oil supplementation when appropriate; dosing is often based on EPA+DHA
            per kilogram of body weight. Work with your veterinarian for a safe, individualized plan and to avoid GI upset or interactions.
          </div>

          <h3 className="text-lg font-semibold mt-2 mb-1">Hydration & Environment</h3>
          <p className="mb-3">
            Fresh water at all times, plus indoor humidity in a comfortable range, helps skin comfort. Excessively dry homes (heated winters) can
            worsen dander; a humidifier in sleeping areas often helps people and pets.
          </p>

          <h3 className="text-lg font-semibold mt-2 mb-1">Parasite Prevention = Skin Protection</h3>
          <p>
            Year-round flea/tick/heartworm prevention (as recommended by your veterinarian) prevents many itch cascades that end in hair loss and
            “mystery shedding.” Once a dog starts scratching, hair breaks—fix the cause, not just the symptom.
          </p>
        </section>

        {/* HUMAN ALLERGIES */}
        <section id="allergies-people" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Human Allergies & Dander Control: Hard Truths, Helpful Habits</h2>
          <p className="mb-3">
            Labs are <strong>not</strong> hypoallergenic. People tend to react to a mixture of dander (tiny skin flakes), saliva proteins, and
            environmental allergens that hitch a ride on the coat. If someone in your home has <em>severe</em> dog allergies or allergic asthma,
            a Lab may not be a safe choice. For mild-to-moderate sensitivities, consistent environmental controls often make co-living possible.
          </p>

          <h3 className="text-lg font-semibold mt-2 mb-1">Dander-Reduction Protocol</h3>
          <ul className="list-disc pl-5 space-y-2 mb-3">
            <li><strong>Zones:</strong> Make at least one allergy-safe room (often the primary bedroom) that is <em>dog-free</em>.</li>
            <li><strong>Air:</strong> Use HEPA filtration in common spaces and bedrooms; change HVAC filters on schedule.</li>
            <li><strong>Surfaces:</strong> Prefer hard floors; vacuum (true-HEPA) and damp mop routinely; wash dog bedding weekly.</li>
            <li><strong>Fabrics:</strong> Choose washable throws on couches; launder weekly; keep lint rollers in high-traffic spots.</li>
            <li><strong>Grooming rhythm:</strong> Frequent light brushing outdoors or in a controlled area reduces indoor hair load.</li>
          </ul>

          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Reality check:</strong> No shampoo, spray, or supplement eliminates dander. Lifestyle controls + regular grooming are the levers
            you own. If symptoms persist or worsen, talk with an allergist about medical options or breed suitability.
          </div>
        </section>

        {/* DOG ALLERGIES / ABNORMAL SHEDDING */}
        <section id="allergies-dogs" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Dog Allergies & Skin Disease: When Shedding Isn’t Normal</h2>
          <p className="mb-3">
            “My Lab is shedding like crazy” can sometimes mean <em>pathologic hair loss</em>. Look for itch (scratching, licking, chewing), odor,
            redness, scabs, darkened skin, ear infections, or obvious bald spots. Those signs point to veterinary issues, not a grooming problem.
          </p>
          <h3 className="text-lg font-semibold mt-2 mb-1">Common Culprits</h3>
          <ul className="list-disc pl-5 space-y-2 mb-3">
            <li><strong>Fleas & mites:</strong> parasite control prevents many cases of “mystery itch.” Even indoor dogs can be affected.</li>
            <li><strong>Atopic dermatitis (environmental allergy):</strong> pollens, dust mites, molds; often seasonal but may become year-round.</li>
            <li><strong>Food allergy:</strong> less common than environmental allergies but possible; true diagnosis requires a vet-guided elimination diet.</li>
            <li><strong>Secondary infections:</strong> bacterial or yeast overgrowth from chronic itch/lick cycles.</li>
            <li><strong>Endocrine disease:</strong> hypothyroidism can cause thinning coat, weight gain, lethargy—seek veterinary testing.</li>
          </ul>

          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm mb-3">
            <strong>See your veterinarian if:</strong> your Lab has hot spots, intense itching, hair coming out in clumps, odor, or skin color changes.
            Early treatment prevents chronic cycles.
          </div>

          <h3 className="text-lg font-semibold mt-2 mb-1">Allergy Management Playbook (With Your Vet)</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Confirm year-round parasite control first.</li>
            <li>Discuss diet history and whether a balanced elimination trial is warranted.</li>
            <li>Consider itch control medications, medicated shampoos, and ear treatments as prescribed.</li>
            <li>Ask about dermatology referral or allergy testing for chronic cases.</li>
          </ul>
        </section>

        {/* HOME SETUP */}
        <section id="home" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Home Setup &amp; Hair Management: System &gt; Willpower</h2>
          <p className="mb-3">
            If you try to “keep up” with hair, you’ll lose. Build a <strong>system</strong> that does the work for you. Small habits multiplied across
            the week beat marathon clean-ups you never want to do.
          </p>

          <h3 className="text-lg font-semibold mt-2 mb-1">House Rules That Save Sanity</h3>
          <ul className="list-disc pl-5 space-y-2 mb-3">
            <li><strong>Entry mats & wipes:</strong> a minute at the door prevents debris that tangles in coat and spreads indoors.</li>
            <li><strong>Washable throws:</strong> on favorite couches and beds. Swap mid-week; wash weekly.</li>
            <li><strong>Dedicated grooming spot:</strong> backyard, garage, or laundry area with a small bin for tools and towels.</li>
            <li><strong>Weekly rhythm:</strong> light brush every other day; quick vacuum after; laundry day includes dog bedding.</li>
            <li><strong>Car covers:</strong> seat covers or cargo liners are cheap insurance against embedded hair.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Floors & Fabrics</h3>
          <p className="mb-3">
            Hard floors (wood, tile, vinyl) are easier than high-pile carpet. For rugs, choose tight weave, low pile, and washable. For clothing,
            lint rollers at exits make life easier. Microfiber cloths beat dry dusters for baseboards and corners where hair swirls collect.
          </p>
        </section>

        {/* DAYCARE & BOARDING */}
        <section id="daycare-boarding" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Daycare & Boarding: What to Expect With a Shedding Breed</h2>
          <p className="mb-3">
            Labs generally thrive in well-run daycare programs and adapt well to boarding. But more movement, more play, and more social contact
            can accelerate hair turnover—especially during blowouts. Good facilities manage this with structured play → rest → enrichment cycles,
            crate naps, and routine cleaning.
          </p>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Ask if de-shed baths are available before pickup during peak seasons.</li>
            <li>Send labeled food, a familiar mat/blanket, and ear-care notes if your Lab swims frequently.</li>
            <li>On return home, expect some hair—plan a quick outdoor brushing session before heading inside.</li>
          </ul>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Operator note:</strong> We schedule outdoor brush-outs during seasonal peaks and use calm crate naps to down-shift arousal so dogs
            don’t overheat or over-exert. That’s good for their skin, coat, and overall behavior.
          </div>
        </section>

        {/* TRAINING FOR GROOMING */}
        <section id="training-grooming" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Training for Grooming: Cooperative Care Pays Forever</h2>
          <p className="mb-3">
            The fastest way to reduce at-home hair chaos is to make grooming <em>easy</em>. A Lab that stands quietly for brushing and ear care lets
            you keep sessions short and frequent—exactly what you need. We use cooperative-care basics: teach a chin rest, a station (mat or platform),
            and a “start button” behavior that lets you know the dog is ready.
          </p>
          <h3 className="text-lg font-semibold mt-2 mb-1">Micro-Session Plan (2–3 Minutes)</h3>
          <ol className="list-decimal pl-5 space-y-1 mb-3">
            <li>Set up: mat down, treats ready, tool in sight. Cue “place.”</li>
            <li>Chin rest on your palm or a towel → treat. Repeat 3–5 times.</li>
            <li>Brush one side in short strokes → treat. Switch sides. Stop while it’s still easy.</li>
            <li>Release cue and play a quick, calm game or give a chew on the mat.</li>
          </ol>
          <p>
            Build duration gradually; keep the ratio of easy reps high. If your Lab fidgets, you went too long—shorten the next session and pay more
            frequently for stillness.
          </p>
        </section>

        {/* CHECKLISTS */}
        <section id="checklists" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Checklists & Templates</h2>

          <h3 className="text-lg font-semibold mt-2 mb-1">Weekly Shedding Control (Example)</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Mon: 5–8 min curry + slicker, quick vacuum pass in living room.</li>
            <li>Wed: 5–8 min curry + slicker, swap couch throws.</li>
            <li>Fri: bath if needed → towel dry (and blow-dry if trained); ear check.</li>
            <li>Sun: launder dog bedding; wipe baseboards; recharge lint rollers.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Allergy-Aware Home (People)</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Dog-free bedroom zone + HEPA filter running.</li>
            <li>True-HEPA vacuum 3–4x/week; damp mop hard floors.</li>
            <li>Wash throws and bedding weekly; consider mattress encasements for sensitive sleepers.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Red Flags → Vet Visit</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Itching, chewing, redness, odor, or hot spots.</li>
            <li>Patchy hair loss or clumps of hair coming out with minimal brushing.</li>
            <li>Ear scratching/shaking after swimming; head tilt or odor from ears.</li>
            <li>Sudden coat dullness with weight gain or lethargy (ask about thyroid testing).</li>
          </ul>
        </section>

        {/* PROS & CONS */}
        <section id="pros-cons" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Pros & Cons of a Heavy-Shedding Family Breed</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-2">✅ Pros</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Healthy shedding is normal and manageable with routine.</li>
                <li>Short coat dries quickly and is easy to brush at home.</li>
                <li>Regular grooming doubles as bonding and handling practice.</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">⚠️ Cons</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Visible hair on floors, clothes, car—especially during blowouts.</li>
                <li>Not suitable for families with severe dog dander allergies.</li>
                <li>Requires consistent time investment (brushing, cleaning, laundry).</li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">Frequently Asked Questions</h2>

          <p className="mb-3">
            <strong>Are Labs hypoallergenic?</strong><br />
            No. Labs shed and produce dander and saliva proteins that commonly trigger allergies. Consider low-shedding breeds if allergies are severe.
          </p>

          <p className="mb-3">
            <strong>Do yellow Labs shed more than black or chocolate?</strong><br />
            Shedding volume is similar; lighter hair is simply more visible on dark clothing and furniture.
          </p>

          <p className="mb-3">
            <strong>How often should I brush my Lab?</strong><br />
            2–4 times per week for 5–10 minutes, and more frequently during spring/fall blowouts.
          </p>

          <p className="mb-3">
            <strong>How often should I bathe my Lab?</strong><br />
            About monthly, or when dirty. Over-bathing can dry skin; always rinse thoroughly and dry ears after water play or baths.
          </p>

          <p className="mb-3">
            <strong>Will supplements stop shedding?</strong><br />
            No supplement “stops” normal shedding. Under veterinary guidance, omega-3s (EPA/DHA) can support skin/coat health and reduce inflammation.
          </p>

          <p className="mb-3">
            <strong>Can diet fix shedding?</strong><br />
            Diet can improve coat quality and reduce breakage, but healthy dogs will still shed. Feed a complete and balanced diet and keep your Lab lean.
          </p>

          <p>
            <strong>What if my Lab suddenly sheds in clumps?</strong><br />
            That’s abnormal—book a veterinary exam to check for parasites, skin infections, allergies, or endocrine disease.
          </p>
        </section>

        {/* SOURCES */}
        <section id="sources" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">📚 Sources (Selected)</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            <li>
              American Kennel Club (AKC). Labrador Retriever breed overview (double coat, activity, grooming basics).{' '}
              <a href="https://www.akc.org/dog-breeds/labrador-retriever/" target="_blank" rel="noopener noreferrer">
                https://www.akc.org/dog-breeds/labrador-retriever/
              </a>
            </li>
            <li>
              American Veterinary Medical Association (AVMA). Pet owner resources on preventive care, obesity, and skin/coat health.{' '}
              <a href="https://www.avma.org/resources-tools/pet-owners" target="_blank" rel="noopener noreferrer">
                https://www.avma.org/resources-tools/pet-owners
              </a>
            </li>
            <li>
              American Animal Hospital Association (AAHA). Canine Vaccination Guidelines (context for boarding/daycare and skin health).{' '}
              <a href="https://www.aaha.org/aaha-guidelines/vaccination-canine-configuration/canine-vaccination-guidelines/" target="_blank" rel="noopener noreferrer">
                https://www.aaha.org/aaha-guidelines/vaccination-canine-configuration/canine-vaccination-guidelines/
              </a>
            </li>
            <li>
              World Small Animal Veterinary Association (WSAVA). Global Nutrition Toolkit & Guidelines (owner handouts, diet assessment).{' '}
              <a href="https://wsava.org/global-guidelines/global-nutrition-guidelines/" target="_blank" rel="noopener noreferrer">
                https://wsava.org/global-guidelines/global-nutrition-guidelines/
              </a>
            </li>
            <li>
              Merck Veterinary Manual. Canine dermatology overview: atopic dermatitis, food allergy, endocrine dermatoses.{' '}
              <a href="https://www.merckvetmanual.com" target="_blank" rel="noopener noreferrer">
                https://www.merckvetmanual.com
              </a>
            </li>
            <li>
              Orthopedic Foundation for Animals (OFA). Breeder health testing (hips, elbows, eyes) that correlates with overall wellness.{' '}
              <a href="https://ofa.org" target="_blank" rel="noopener noreferrer">
                https://ofa.org
              </a>
            </li>
            <li>
              American College of Veterinary Dermatology (ACVD). Owner resources for allergies and skin disease.{' '}
              <a href="https://www.acvd.org/owner-resources" target="_blank" rel="noopener noreferrer">
                https://www.acvd.org/owner-resources
              </a>
            </li>
            <li>
              VCA Animal Hospitals. Shedding and haircoat disorders in dogs (client education).{' '}
              <a href="https://vcahospitals.com/know-your-pet/shedding-in-dogs" target="_blank" rel="noopener noreferrer">
                https://vcahospitals.com/know-your-pet/shedding-in-dogs
              </a>
            </li>
            <li>
              University of Minnesota Veterinary Dermatology & Diagnostic resources (owner-facing summaries on skin/coat and allergies).{' '}
              <a href="https://vetmed.umn.edu/" target="_blank" rel="noopener noreferrer">
                https://vetmed.umn.edu/
              </a>
            </li>
          </ul>
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
