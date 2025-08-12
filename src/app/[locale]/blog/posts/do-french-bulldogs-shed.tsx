'use client';

import Head from 'next/head';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function DoFrenchBulldogsShed() {
  const locale = useLocale();

  const title =
    'Do French Bulldogs Shed? Shedding Levels, Seasonality & Practical Coat Care';
  const date = 'August 12, 2025';
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
    'Do French Bulldogs shed? Yes—typically light to moderate. Here’s what to expect by season and life stage, plus operator-grade coat care: weekly grooming, skin-fold hygiene, nutrition for skin, allergy management, home systems (HEPA, laundry cadence), and “when to call the vet.” Evidence-based guidance and sources included.';

  return (
    <>
      <Head>
        <title>{title} – Petunia Blog</title>
        <meta name="description" content={description} />
        <meta name="robots" content="index,follow" />
        <link
          rel="canonical"
          href={`https://www.petuniapets.com/${locale}/blog/do-french-bulldogs-shed`}
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
            <li><a href="#tl-dr" className="underline hover:opacity-80">TL;DR</a></li>
            <li><a href="#quick-facts" className="underline hover:opacity-80">Quick Facts</a></li>
            <li><a href="#coat-biology" className="underline hover:opacity-80">Coat Biology 101</a></li>
            <li><a href="#seasonality" className="underline hover:opacity-80">Seasonality & Climate</a></li>
            <li><a href="#grooming" className="underline hover:opacity-80">Grooming That Actually Works</a></li>
            <li><a href="#skin" className="underline hover:opacity-80">Skin Folds, Ears & Red Flags</a></li>
            <li><a href="#nutrition" className="underline hover:opacity-80">Nutrition for Skin & Coat</a></li>
            <li><a href="#allergies" className="underline hover:opacity-80">Allergies, Dander & Air</a></li>
            <li><a href="#home" className="underline hover:opacity-80">Home Setup & Laundry Rhythm</a></li>
            <li><a href="#daycare" className="underline hover:opacity-80">Daycare/Boarding Playbook</a></li>
            <li><a href="#life-stages" className="underline hover:opacity-80">Puppies, Adults & Seniors</a></li>
            <li><a href="#abnormal" className="underline hover:opacity-80">Shedding vs. Hair Loss</a></li>
            <li><a href="#templates" className="underline hover:opacity-80">Checklists & Templates</a></li>
            <li><a href="#faq" className="underline hover:opacity-80">FAQ</a></li>
            <li><a href="#sources" className="underline hover:opacity-80">📚 Sources (Selected)</a></li>
          </ul>
        </nav>

        {/* TL;DR */}
        <section id="tl-dr" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Short Answer (TL;DR)</h2>
          <p className="mb-4">
            <strong>Yes, French Bulldogs shed</strong>—typically <strong>light to moderate</strong> compared with many breeds. Most homes do well with a
            <strong> weekly brush</strong> (rubber grooming mitt or hound glove), <strong>monthly bath</strong> as needed, and <strong>daily fold/ear checks</strong>.
            Spring/fall can bring a little uptick. If you’re seeing <em>patchy hair loss</em>, <em>itching</em>, <em>odor</em> or <em>redness</em>, that’s not “just shedding”—call your veterinarian.
          </p>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Petunia tip:</strong> Put coat care on autopilot. Store your Frenchie’s <em>grooming rhythm</em> (brush days, bath cadence),
            <em> fold/ear plan</em>, and <em>allergy notes</em> in Petunia. Share with family and your daycare/boarding team so everyone follows the same playbook.
          </div>
        </section>

        {/* QUICK FACTS */}
        <section id="quick-facts" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Frenchie Shedding: Quick Facts</h2>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li><strong>Coat type:</strong> single, short, smooth coat—no undercoat “blowouts,” but steady low-grade shedding.</li>
            <li><strong>Typical level:</strong> <em>light–moderate</em> (individuals vary); weekly brushing keeps most homes tidy.</li>
            <li><strong>Seasonality:</strong> mild spring/fall peaks driven more by <em>day length</em> than temperature.</li>
            <li><strong>Frenchie-specific watch-outs:</strong> <em>skin folds</em> (moisture → yeast/bacteria), <em>allergies/pyoderma</em>, and <em>ear issues</em> can masquerade as “shedding problems.”</li>
            <li><strong>Hypoallergenic?</strong> No breed is truly hypoallergenic. Dander and saliva proteins are the usual triggers—not hair length.</li>
          </ul>
          <p className="text-sm text-gray-700">
            Reference points: major breed registries/guides characterize Frenchies as short-coated dogs with modest grooming needs; routine brushing limits loose hair in the home (see sources).
          </p>
        </section>

        {/* COAT BIOLOGY */}
        <section id="coat-biology" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Coat Biology 101: Why Hair Sheds</h2>
          <p className="mb-3">
            Dog hair cycles through <strong>anagen</strong> (growth), <strong>catagen</strong> (transition), and <strong>telogen</strong> (rest/shedding). Photoperiod (day length), hormones,
            nutrition, and skin health influence the cycle. French Bulldogs have a <strong>short, single coat</strong> with many hairs resting in telogen at any
            time—hence the steady trickle of loose hair you notice on dark clothes or the sofa.
          </p>
          <p className="mb-3">
            “More shedding” can mean two different things: (1) <em>normal hair turnover</em> that wasn’t brushed out, or (2) <em>pathologic hair loss (alopecia)</em>
            from allergies, infections (pyoderma/yeast), parasites, endocrine conditions, or self-trauma. The first is solved with grooming; the second needs a vet plan.
          </p>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Operator mindset:</strong> Before buying gizmos, build the <em>rhythm</em>: quick brush, quick fold/ear look, quick mat check. Small, daily,
            low-friction habits protect the coat better than occasional long sessions.
          </div>
        </section>

        {/* SEASONALITY */}
        <section id="seasonality" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Seasonality, Climate & Household Triggers</h2>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li><strong>Photoperiod:</strong> many dogs shed a bit more in spring/fall as day length shifts. Expect more loose hair on brushes and lint rollers.</li>
            <li><strong>Indoor life:</strong> artificial light/indoor heating smooths peaks; you may see mild, <em>year-round</em> low-grade shed instead of big swings.</li>
            <li><strong>Humidity & bathing:</strong> overly dry air or harsh shampoos can leave coats dull and skin flaky; balanced bathing and rinse quality matter.</li>
            <li><strong>Stress & illness:</strong> surgery, fever, endocrine disease, or chronic itch can push hair into shed phases—call your veterinarian if the pattern looks new or patchy.</li>
          </ul>
          <p>
            Bottom line: for Frenchies, seasonality is real but modest; routine care and moisture-balanced skin keep things stable.
          </p>
        </section>

        {/* GROOMING */}
        <section id="grooming" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Grooming That Actually Works (and What to Skip)</h2>
          <p className="mb-3">
            You don’t need a complex kit. A <strong>rubber curry mitt or hound glove</strong> plus a <strong>soft slicker</strong> for light de-shedding is plenty for most Frenchies.
            Pair brushing with <em>cooperative care</em> (reward calm chin rest) so it stays easy. Then add <strong>fold/ear hygiene</strong>, which is where Frenchie
            comfort is won or lost.
          </p>
          <h3 className="text-lg font-semibold mt-2 mb-1">Weekly Grooming Rhythm (20–30 minutes total)</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>Brush:</strong> 3–5 minutes with a rubber mitt to lift dead hair and dander. Follow with a quick slicker pass if needed.</li>
            <li><strong>Fold care:</strong> gently wipe facial folds; dry thoroughly to avoid moisture traps (yeast/bacteria love warm folds).</li>
            <li><strong>Ears:</strong> visual check; clean with vet-approved solution only if waxy/dirty; avoid poking deep.</li>
            <li><strong>Nails:</strong> short nails protect posture and skin; a weekly “one paw” session keeps up without drama.</li>
            <li><strong>Bath:</strong> about monthly (or as advised); rinse thoroughly; dry folds and ears after. Overbathing dries skin; medicated shampoos only if prescribed.</li>
          </ul>
          <h3 className="text-lg font-semibold mt-2 mb-1">Tools We Like (Categories, not brands)</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Rubber grooming mitt or hound glove for short coats.</li>
            <li>Soft slicker brush (gentle pressure).</li>
            <li>Microfiber towels; fragrance-free, dog-safe shampoo.</li>
            <li>Vet-approved ear cleaner; soft, non-abrasive fold wipes if recommended by your vet.</li>
          </ul>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm mt-3">
            <strong>Petunia tip:</strong> Log your dog’s <em>“grooming stack”</em> (mitt, slicker, ear solution), set recurrence reminders, and share the
            plan with sitters/daycare so routines don’t lapse during handoffs.
          </div>
        </section>

        {/* SKIN / EARS / RED FLAGS */}
        <section id="skin" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Skin Folds, Ears & Red Flags (Don’t Ignore These)</h2>
          <p className="mb-3">
            French Bulldogs’ <strong>facial folds</strong> and compact build predispose them to <em>skin fold dermatitis (intertrigo)</em>, <em>yeast overgrowth</em>, and
            <em> superficial bacterial infections (pyoderma)</em>. These issues can look like “excess shedding” but are actually <em>skin disease</em>—and they need treatment.
          </p>
          <h3 className="text-lg font-semibold mt-2 mb-1">Call your veterinarian now if you notice:</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Patches of missing hair, scabs, <strong>redness</strong>, <strong>odor</strong>, or <strong>brown waxy debris</strong> in folds/ears.</li>
            <li>Scratching, face rubbing, paw chewing, or sudden sensitivity to brushing.</li>
            <li>Oily/dull coat, dandruff that persists, or recurrent “hot spots.”</li>
          </ul>
          <p className="mb-3">
            Vets may perform <em>skin cytology</em> (tape/impression), <em>scrapings</em>, or <em>cultures</em> to identify yeast/bacteria/mites and then treat with targeted
            topicals or systemic meds—plus address underlying allergies or other causes.
          </p>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Boarding/daycare note:</strong> Ask facilities to <em>dry folds</em> after any water play and flag ear/fold changes to you the same day.
          </div>
        </section>

        {/* NUTRITION */}
        <section id="nutrition" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Nutrition for Skin & Coat: Simple, Evidence-Informed</h2>
          <p className="mb-3">
            Feed a <strong>complete and balanced</strong> diet appropriate to life stage and health status. Consistent calories and a lean body condition
            support skin integrity. For itchy dogs, your vet may recommend <strong>omega-3 (EPA/DHA)</strong> or a <strong>therapeutic diet</strong> (allergy trials)—
            but supplements and medicated foods should be guided by a clinician.
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Transition new foods over 7–10 days; rapid switches can flare sensitive skin/guts.</li>
            <li>Use part of daily rations for training to avoid “mystery calories” and weight creep.</li>
            <li>If doing a <em>diet trial</em> for suspected food allergy, follow your vet’s protocol strictly (no off-diet treats).</li>
          </ul>
        </section>

        {/* ALLERGIES / AIR */}
        <section id="allergies" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Allergies, Dander & Indoor Air: What Helps</h2>
          <p className="mb-3">
            People react to <strong>dander and saliva proteins</strong> more than hair itself. While no dog is hypoallergenic, you can reduce allergen load with
            <strong> routine brushing</strong>, <strong>regular laundering</strong> of pet linens, and <strong>HEPA filtration</strong> in living/sleeping areas. If any family member has asthma
            or allergies, coordinate with their clinician.
          </p>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>HEPA air cleaning:</strong> a HEPA purifier (or HVAC HEPA-grade filter where appropriate) reduces airborne dander; follow device sizing/placement guidance.</li>
            <li><strong>Bedroom boundaries:</strong> pet-free sleep zones + frequent hot-water bedding washes lower symptoms for sensitive humans.</li>
            <li><strong>Vacuum rhythm:</strong> use a HEPA vacuum on rugs/soft furnishings; wash throws weekly.</li>
          </ul>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Petunia workflow:</strong> Store “allergy rules” (bedroom access, purifier run-times, laundry cadence) in Petunia so housemates and sitters keep the system consistent.
          </div>
        </section>

        {/* HOME SETUP */}
        <section id="home" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Home Setup & Laundry Rhythm (Keep Hair Contained)</h2>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>Dedicated throws:</strong> washable covers for favorite nap spots; rotate two sets.</li>
            <li><strong>Brush-then-bathe:</strong> brushing before baths removes loose hair and prevents drain clogs.</li>
            <li><strong>Microfiber loop rugs:</strong> at entries to trap hair/dander before it spreads.</li>
            <li><strong>Laundry cadence:</strong> crate pads/throws weekly; bed covers biweekly; lint roll between washes.</li>
            <li><strong>Grooming station:</strong> keep mitt, slicker, wipes, and ear solution together; log dates.</li>
          </ul>
        </section>

        {/* DAYCARE/BOARDING */}
        <section id="daycare" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Daycare & Boarding: The Shedding-Aware Playbook</h2>
          <p className="mb-3">
            Great facilities focus on <em>structured play → rest → hygiene</em>. For Frenchies, add <strong>fold-dry routines</strong>, <strong>cool-downs</strong>, and
            <strong> short sessions</strong>—overheating worsens skin issues. Ask staff to report new itching, redness, or ear odor the same day.
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Provide your Petunia profile (grooming steps, ear/fold plan, product list).</li>
            <li>Request post–water play fold drying; confirm indoor climate control during heat waves.</li>
            <li>Ask for weekly photo of coat/skin “checkpoints” during longer board-and-trains.</li>
          </ul>
        </section>

        {/* LIFE STAGES */}
        <section id="life-stages" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Puppies, Adults & Seniors: How Shedding Changes</h2>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>Puppies:</strong> will “swap coats” in adolescence—expect some extra hair; keep sessions fun and brief.</li>
            <li><strong>Adults:</strong> steady, low-grade shed; weekly rhythm is enough for most homes.</li>
            <li><strong>Seniors:</strong> skin may dry; gentler shampoos, humidified rooms in winter, and more frequent moisturizing wipes (per vet advice) can help. Monitor lumps/bumps; report change early.</li>
          </ul>
        </section>

        {/* ABNORMAL */}
        <section id="abnormal" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Shedding vs. Hair Loss (Alopecia): When It’s Not Normal</h2>
          <p className="mb-3">
            Normal shedding = <em>even</em> hair release without inflamed skin. <strong>Alopecia</strong> = <em>patches</em>, <em>moth-eaten areas</em>, <em>erythema</em>, <em>odor</em>, or <em>itch</em>.
            Common causes include allergic dermatitis (environmental/food), <em>pyoderma</em>, <em>yeast</em>, mites (mange), endocrine disease, and less commonly congenital conditions.
          </p>
          <h3 className="text-lg font-semibold mt-2 mb-1">Vet visit checklist</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Timeline + photos of hair loss; note seasonality, new products, diet changes.</li>
            <li>Where it started (face/feet/abdomen often = allergy; folds/ears = yeast/bacteria risk).</li>
            <li>Any recent illness, heat stress, or meds. Bring your product list and doses.</li>
          </ul>
        </section>

        {/* TEMPLATES */}
        <section id="templates" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Checklists & Templates</h2>

          <h3 className="text-lg font-semibold mt-2 mb-1">Weekly Frenchie Coat Rhythm (Copy/Paste)</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>Mon:</strong> 5-min rubber mitt brush → fold wipe/dry → reward calm chin rest.</li>
            <li><strong>Wed:</strong> quick mitt + slicker pass → ear glance/clean if waxy.</li>
            <li><strong>Fri:</strong> nails (one paw) → brush → fold check → treat scatter for decompression.</li>
            <li><strong>Weekend:</strong> light bath if needed → thorough rinse → dry folds/ears → swap/clean throws.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Home Hair Control System</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>HEPA air purifier in living/sleep area (sized to room); run daily.</li>
            <li>HEPA vacuum 2–3×/week; lint rollers at key spots (entry, sofa, car).</li>
            <li>Throw rotation: couch cover + crate pad weekly; bed cover biweekly.</li>
            <li>Grooming caddy by the door; refill wipes/ear solution monthly.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">When to Call the Vet Now</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Patchy hair loss, red/greasy skin, strong odor, or recurrent “hot spots.”</li>
            <li>Head shaking, ear pain/odor, or dark discharge.</li>
            <li>Open sores, bleeding folds, or sudden coat change after illness/meds.</li>
          </ul>

          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm mt-3">
            <strong>Petunia workflow:</strong> Save this rhythm as a <em>repeatable routine</em>; attach photos of any skin changes so your veterinarian sees trends, not guesswork.
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">Frequently Asked Questions</h2>

          <p className="mb-3">
            <strong>Do French Bulldogs shed a lot?</strong><br />
            Usually <strong>light to moderate</strong>. Weekly brushing and basic hygiene keep most homes tidy. Individuals vary—hormones, season, nutrition, and skin health matter.
          </p>

          <p className="mb-3">
            <strong>Are French Bulldogs hypoallergenic?</strong><br />
            No breed is truly hypoallergenic. Human symptoms are often driven by <strong>dander and saliva proteins</strong>, not hair length. HEPA, hot-water laundry, and room rules help.
          </p>

          <p className="mb-3">
            <strong>Best brush for a Frenchie?</strong><br />
            A <strong>rubber grooming mitt or hound glove</strong> for daily/weekly use; a <strong>soft slicker</strong> for gentle de-shedding. Avoid aggressive tools on thin coats.
          </p>

          <p className="mb-3">
            <strong>How often should I bathe my Frenchie?</strong><br />
            About <strong>monthly</strong> (or as advised by your vet). Overbathing can dry skin. Always dry folds and ears thoroughly after water exposure.
          </p>

          <p className="mb-3">
            <strong>Can diet reduce shedding?</strong><br />
            A <strong>complete and balanced</strong> diet plus maintaining a <strong>lean body condition</strong> supports skin and coat. For itchy dogs, ask your vet about omega-3s or diet trials.
          </p>

          <p>
            <strong>How do I know if it’s allergies or just shedding?</strong><br />
            <em>Even</em> hair on the brush = normal shedding. <em>Patches</em>, <em>redness</em>, <em>odor</em>, <em>itch</em>, or <em>ear debris</em> = likely skin disease. Call your veterinarian.
          </p>
        </section>

        {/* SOURCES */}
        <section id="sources" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">📚 Sources (Selected)</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            <li>
              American Kennel Club (AKC). French Bulldog breed overview (grooming/shedding guidance).{' '}
              <a href="https://www.akc.org/dog-breeds/french-bulldog/" target="_blank" rel="noopener noreferrer">
                https://www.akc.org/dog-breeds/french-bulldog/
              </a>
            </li>
            <li>
              AKC Expert Advice. <em>Dog Shedding: What to Expect &amp; How to Manage It</em> (brushing and bath basics).{' '}
              <a href="https://www.akc.org/expert-advice/health/dog-shedding-what-to-expect-and-how-to-manage-it/" target="_blank" rel="noopener noreferrer">
                https://www.akc.org/expert-advice/health/dog-shedding-what-to-expect-and-how-to-manage-it/
              </a>
            </li>
            <li>
              Merck Veterinary Manual (Pet Owner &amp; Professional versions). <em>Hair Loss (Alopecia) in Dogs</em>; <em>Dermatitis &amp; Dermatologic Problems</em>; <em>Pyoderma</em>.{' '}
              <a href="https://www.merckvetmanual.com/dog-owners/skin-disorders-of-dogs/hair-loss-alopecia-in-dogs" target="_blank" rel="noopener noreferrer">
                https://www.merckvetmanual.com/dog-owners/skin-disorders-of-dogs/hair-loss-alopecia-in-dogs
              </a>{' '}
              |{' '}
              <a href="https://www.merckvetmanual.com/dog-owners/skin-disorders-of-dogs/dermatitis-and-dermatologic-problems-in-dogs" target="_blank" rel="noopener noreferrer">
                https://www.merckvetmanual.com/dog-owners/skin-disorders-of-dogs/dermatitis-and-dermatologic-problems-in-dogs
              </a>{' '}
              |{' '}
              <a href="https://www.merckvetmanual.com/integumentary-system/pyoderma/pyoderma-in-dogs-and-cats" target="_blank" rel="noopener noreferrer">
                https://www.merckvetmanual.com/integumentary-system/pyoderma/pyoderma-in-dogs-and-cats
              </a>
            </li>
            <li>
              Merck Veterinary Manual. <em>Lip Fold Dermatitis</em> (discussion within oral disorders; fold care concepts).{' '}
              <a href="https://www.merckvetmanual.com/dog-owners/digestive-disorders-of-dogs/disorders-of-the-mouth-in-dogs" target="_blank" rel="noopener noreferrer">
                https://www.merckvetmanual.com/dog-owners/digestive-disorders-of-dogs/disorders-of-the-mouth-in-dogs
              </a>
            </li>
            <li>
              Cornell University College of Veterinary Medicine. <em>Atopic Dermatitis (Atopy)</em> overview.{' '}
              <a href="https://www.vet.cornell.edu/departments-centers-and-institutes/riney-canine-health-center/canine-health-information/atopic-dermatitis-atopy" target="_blank" rel="noopener noreferrer">
                https://www.vet.cornell.edu/.../atopic-dermatitis-atopy
              </a>
            </li>
            <li>
              World Small Animal Veterinary Association (WSAVA). <em>Global Nutrition Guidelines</em> &amp; <em>Selecting a Pet Food</em> (complete/balanced diet principles).{' '}
              <a href="https://wsava.org/global-guidelines/" target="_blank" rel="noopener noreferrer">
                https://wsava.org/global-guidelines/
              </a>{' '}
              |{' '}
              <a href="https://wsava.org/wp-content/uploads/2021/04/Selecting-a-pet-food-for-your-pet-updated-2021_WSAVA-Global-Nutrition-Toolkit.pdf" target="_blank" rel="noopener noreferrer">
                Nutrition Toolkit (PDF)
              </a>
            </li>
            <li>
              AAFA (Asthma &amp; Allergy Foundation of America). <em>Allergic to Your Pet?</em> (HEPA &amp; household strategies).{' '}
              <a href="https://aafa.org/allergies/types-of-allergies/pet-dog-cat-allergies/" target="_blank" rel="noopener noreferrer">
                https://aafa.org/allergies/types-of-allergies/pet-dog-cat-allergies/
              </a>
            </li>
            <li>
              U.S. EPA. <em>Guide to Air Cleaners in the Home</em> (HEPA and HVAC filtration overview).{' '}
              <a href="https://www.epa.gov/indoor-air-quality-iaq/guide-air-cleaners-home" target="_blank" rel="noopener noreferrer">
                https://www.epa.gov/indoor-air-quality-iaq/guide-air-cleaners-home
              </a>
            </li>
            <li>
              RVC VetCompass / O’Neill et&nbsp;al. 2021. <em>French Bulldogs differ from other dogs in the UK in propensity for many common disorders</em> (context: skin/allergy predisposition).{' '}
              <a href="https://pubmed.ncbi.nlm.nih.gov/34911586/" target="_blank" rel="noopener noreferrer">
                PubMed
              </a>{' '}
              |{' '}
              <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC8675495/" target="_blank" rel="noopener noreferrer">
                Open Access
              </a>
            </li>
            <li>
              VCA Animal Hospitals. <em>Grooming and Coat Care for Your Dog</em> (brushing reduces loose hair/dander).{' '}
              <a href="https://vcahospitals.com/know-your-pet/grooming-and-coat-care-for-your-dog" target="_blank" rel="noopener noreferrer">
                https://vcahospitals.com/know-your-pet/grooming-and-coat-care-for-your-dog
              </a>
            </li>
          </ul>
          <p className="text-xs text-gray-600 mt-4">
            Educational content only. Always consult your veterinarian for diagnosis and treatment individualized to your dog.
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
