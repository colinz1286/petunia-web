'use client';

import Head from 'next/head';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function HowManyPuppiesDoFrenchBulldogsHave() {
  const locale = useLocale();

  const title =
    'How Many Puppies Do French Bulldogs Have? Typical Litter Size, Risks, and a Responsible Care Playbook';
  const date = 'April 8, 2025';
  const categories = ['owner', 'breeder', 'breed_specific_guides'] as const;

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
    'How many puppies do French Bulldogs have? Most litters are small—often 2–4—with higher-than-average rates of assisted delivery (C-sections). This guide explains typical litter size, why it varies, ethical breeding standards, pregnancy timelines, whelping vs. planned C-section, neonatal care, costs, and practical checklists. Professional veterinary sources included.';

  return (
    <>
      <Head>
        <title>{title} – Petunia Blog</title>
        <meta name="description" content={description} />
        <meta name="robots" content="index,follow" />
        <link
          rel="canonical"
          href={`https://www.petuniapets.com/${locale}/blog/how-many-puppies-do-french-bulldogs-have`}
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
            <li><a href="#typical" className="underline hover:opacity-80">Typical Litter Size</a></li>
            <li><a href="#why-varies" className="underline hover:opacity-80">Why Litter Size Varies</a></li>
            <li><a href="#frenchie-factors" className="underline hover:opacity-80">Frenchie-Specific Factors</a></li>
            <li><a href="#ethics" className="underline hover:opacity-80">Ethical Breeding Standards</a></li>
            <li><a href="#heat-cycle" className="underline hover:opacity-80">Heat Cycle & Timing</a></li>
            <li><a href="#conception" className="underline hover:opacity-80">Conception Methods & Litter Size</a></li>
            <li><a href="#timeline" className="underline hover:opacity-80">Pregnancy Timeline (Week-by-Week)</a></li>
            <li><a href="#whelping" className="underline hover:opacity-80">Whelping vs. Planned C-Section</a></li>
            <li><a href="#neonatal" className="underline hover:opacity-80">Neonatal Care: First 14 Days</a></li>
            <li><a href="#singleton" className="underline hover:opacity-80">Singleton Litters & Small Litters</a></li>
            <li><a href="#postpartum" className="underline hover:opacity-80">Postpartum Care & Red Flags</a></li>
            <li><a href="#costs" className="underline hover:opacity-80">Budgeting & Realistic Costs</a></li>
            <li><a href="#board-daycare" className="underline hover:opacity-80">Boarding/Daycare Policies</a></li>
            <li><a href="#templates" className="underline hover:opacity-80">Checklists & Templates</a></li>
            <li><a href="#faq" className="underline hover:opacity-80">FAQ</a></li>
            <li><a href="#sources" className="underline hover:opacity-80">📚 Sources (Selected)</a></li>
          </ul>
        </nav>

        {/* TL;DR */}
        <section id="tl-dr" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Short Answer (TL;DR)</h2>
          <p className="mb-4">
            <strong>Most French Bulldogs have small litters—commonly 2–4 puppies</strong>, with outliers in either direction. Litter size
            depends on dam age/health, breeding timing, genetics, and semen quality. Because of their conformation, <strong>Frenchies
            have above-average rates of assisted delivery (C-section)</strong>. Responsible planning centers the dam’s health, uses precise
            ovulation timing, and prepares for surgical delivery when indicated. If you’re a pet owner (not a breeder), talk with your
            veterinarian about spay/neuter and long-term health planning.
          </p>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Petunia tip:</strong> If your household is supporting a pregnant or postpartum Frenchie, store the <em>whelping plan</em>,
            <em> vet contacts</em>, <em>temperature targets</em>, and <em>neonatal weights</em> in Petunia. In an emergency, everyone reads the same
            instructions: who to call, what to bring, and where to go.
          </div>
        </section>

        {/* TYPICAL LITTER SIZE */}
        <section id="typical" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Typical Litter Size for French Bulldogs</h2>
          <p className="mb-3">
            In small, brachycephalic breeds like the French Bulldog, litters are usually on the <strong>small side (about 2–4 puppies)</strong>.
            Larger or smaller litters occur, but expecting four, three, or even two puppies is common. This pattern fits what veterinary
            reproduction data show across small breeds: smaller frames and certain conformations are associated with reduced litter size
            relative to larger, mesocephalic breeds.
          </p>
          <p className="mb-3">
            Why does this matter? Litter size isn’t just a curiosity—it influences nutrition during pregnancy, risk of dystocia (trouble
            whelping), neonatal workloads, veterinary planning, and costs. Smaller litters can paradoxically raise dystocia risk
            (e.g., <em>singleton pups</em> that fail to trigger labor or are too large for the maternal pelvis), while very large litters
            raise maternal depletion risk and neonatal competition. Frenchies more often face the former problem.
          </p>
          <p>
            If your veterinarian confirms pregnancy, they can estimate litter size with <strong>ultrasound</strong> (best for viability, rough counts)
            and later with <strong>radiographs</strong> (~day 55+ from ovulation) to count skulls/spines—useful for delivery planning and to ensure
            no puppy is retained after whelping or surgery.
          </p>
        </section>

        {/* WHY LITTER SIZE VARIES */}
        <section id="why-varies" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Why Litter Size Varies: The Big Levers</h2>
          <ol className="list-decimal pl-5 space-y-2 mb-3">
            <li>
              <strong>Dam age and parity.</strong> Very young and older bitches tend to have smaller litters. Peak fertility generally
              occurs in early adult years; extremes carry higher pregnancy and whelping risks.
            </li>
            <li>
              <strong>Ovulation timing and breeding management.</strong> Accurate <em>progesterone timing</em> markedly improves conception
              rates and litter size. Mis-timed breedings (too early/late) yield smaller or no litters.
            </li>
            <li>
              <strong>Semen quality and method.</strong> Fresh natural breeding tends to yield higher conception and larger litters than
              frozen AI when timing is imperfect. With <em>frozen semen</em>, precision timing and intrauterine deposition matter.
            </li>
            <li>
              <strong>Genetics and inbreeding.</strong> Genetic diversity and selection against conformations linked to obstructed whelping
              support better reproductive outcomes over time.
            </li>
            <li>
              <strong>Dam size, body condition, and health.</strong> Obesity, metabolic disease, and systemic illness reduce fertility
              and litter size. Lean, conditioned dams with complete health screening do better.
            </li>
            <li>
              <strong>Environmental and husbandry factors.</strong> Heat stress, chronic stress, poor hygiene, and parasitism
              negatively affect fertility and neonatal survival.
            </li>
          </ol>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Operator mindset:</strong> Don’t “hope” your timing was right—<em>measure</em> it. Consistent progesterone curves and a
            defined breeding plan are the difference between viable litters and costly near-misses.
          </div>
        </section>

        {/* FRENCHIE-SPECIFIC FACTORS */}
        <section id="frenchie-factors" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Frenchie-Specific Factors: Why This Breed Is Different</h2>
          <p className="mb-3">
            French Bulldogs are <strong>brachycephalic</strong> (short-muzzled) with comparatively broad shoulders and large heads relative to
            pelvic diameter. This shape predisposes many to <strong>cephalopelvic disproportion</strong>, making <em>assisted delivery (C-section)</em> more
            likely than in many other breeds. Frenchies also have higher-than-average risks for <strong>airway challenges (BOAS)</strong>, which affects
            anesthetic planning and perioperative care if a C-section is performed.
          </p>
          <p className="mb-3">
            These anatomical realities do not automatically mandate surgery for every dam, but they do shift planning toward readiness:
            facilities with experienced anesthesia teams, oxygenation/temperature support, neonatal resuscitation supplies, and rapid
            access to emergency care. Many responsible breeders use <strong>scheduled C-sections</strong> based on ovulation timing and fetal maturity
            assessment to reduce the chance of emergent dystocia, fetal distress, and maternal fatigue.
          </p>
          <p>
            In practice, this is why Frenchie litters skew small: the same conformations that make whelping harder are also linked to
            smaller average litter sizes across populations of small brachycephalic breeds.
          </p>
        </section>

        {/* ETHICAL BREEDING */}
        <section id="ethics" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Ethical Breeding Standards: Health First, Not Litter Count</h2>
          <p className="mb-3">
            If you are considering breeding, set the bar high. Ethical breeding programs prioritize the dam’s health and temperament,
            select mates to <strong>improve airway function, mobility, and overall welfare</strong>, and avoid extreme features. Work closely with a
            reproduction-experienced veterinarian and follow club/registry guidance on <strong>health testing</strong> (e.g., airway grading, patellas,
            hips, eyes, cardiac; spinal screening as advised). Good programs limit the number of lifetime litters and space pregnancies
            to allow full recovery, with the dam’s long-term well-being as the controlling objective.
          </p>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Health and genetic screening aligned with breed-club recommendations.</li>
            <li>Data-driven mate selection to avoid doubling down on airway or orthopedic issues.</li>
            <li>Clear contracts, return-to-breeder policies, and lifelong support for puppy homes.</li>
            <li>Transparent discussion of C-section planning and neonatal support capacity.</li>
          </ul>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Petunia tip:</strong> Store health test PDFs, progesterone curves, mate selection notes, consent forms, and your neonatal
            log templates in Petunia. When the whelping alarm goes off, paperwork isn’t what delays care.
          </div>
        </section>

        {/* HEAT CYCLE & TIMING */}
        <section id="heat-cycle" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Heat Cycle & Timing: Getting the Biology Right</h2>
          <p className="mb-3">
            A typical canine cycle includes <strong>proestrus → estrus → diestrus → anestrus</strong>. The fertile window occurs near <strong>ovulation</strong>
            (estrus), which is best identified with serial <strong>progesterone testing</strong> and, when needed, vaginal cytology. Because Frenchies
            often rely on AI or assisted breeding, precise timing is even more important: it affects <em>conception</em>, <em>litter size</em>, and <em>whelping date</em>.
          </p>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>Progesterone strategy:</strong> test every 48 hours as levels rise; plan breeding at the correct post-ovulation interval for fresh/chilled/frozen semen.</li>
            <li><strong>Breed-date records:</strong> document each tie/AI with time stamps. These records drive radiograph timing for puppy counts and C-section scheduling.</li>
            <li><strong>Gestation math:</strong> about <strong>63 days from ovulation</strong> (not necessarily from the first mating). Ranges vary if timing was imprecise.</li>
          </ul>
          <p>
            The tighter your timing, the fewer surprises when it’s time to whelp—or to schedule a C-section if indicated.
          </p>
        </section>

        {/* CONCEPTION METHODS */}
        <section id="conception" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Conception Methods & Litter Size: Natural vs. AI</h2>
          <p className="mb-3">
            <strong>Natural breeding</strong> with a fertile pair and precise timing generally yields the best odds for conception and robust litter
            sizes for that dam. When anatomy, logistics, or pedigree goals require <strong>artificial insemination</strong>, <em>chilled semen</em> tends to
            perform better than <em>frozen</em> unless timing and deposition are exceptionally precise (e.g., intrauterine AI by a repro specialist).
          </p>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Quality control at the stud side (collection, motility, morphology) and rapid, temperature-controlled transport protect results.</li>
            <li>For frozen semen, exact progesterone-based timing and intrauterine deposition improve conception but demand expertise.</li>
            <li>Regardless of method, mis-timed breedings shrink litter size or produce singleton pregnancies.</li>
          </ul>
          <p>
            Work with a veterinarian who routinely manages Frenchie reproduction. Experience matters more than gadgets.
          </p>
        </section>

        {/* TIMELINE */}
        <section id="timeline" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Pregnancy Timeline (Week-by-Week)</h2>
          <p className="mb-3">
            Gestation is roughly <strong>63 days from ovulation</strong>. Here’s a high-level operational timeline; your veterinarian will customize
            based on your dam and the precision of your breeding dates.
          </p>
          <ol className="list-decimal pl-5 space-y-2 mb-3">
            <li><strong>Weeks 1–2:</strong> Fertilization and early embryonic development. Keep routines calm; avoid heat stress and new medications unless prescribed.</li>
            <li><strong>Weeks 3–4:</strong> Implantation. Appetite may dip briefly. Schedule <strong>ultrasound (~day 28–32)</strong> to confirm pregnancy and viability.</li>
            <li><strong>Weeks 5–6:</strong> Fetal growth accelerates. Adjust nutrition if advised; do not overfeed. Begin <strong>neonatal supply prep</strong>.</li>
            <li><strong>Week 7:</strong> Consider <strong>radiographs (~day 55+)</strong> to count skulls/spines for delivery planning.</li>
            <li><strong>Week 8:</strong> Finalize the whelping/C-section plan. Create a <em>when-to-go</em> decision tree with your veterinarian.</li>
            <li><strong>Week 9:</strong> Monitor <strong>rectal temperature</strong> twice daily; a sustained drop often precedes labor. Keep transport crate and contacts ready.</li>
          </ol>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Petunia workflow:</strong> Store the calendar of ultrasounds, radiographs, temp logs, and the decision tree (“If no pup within X minutes of strong contractions → call clinic”).
          </div>
        </section>

        {/* WHELPING VS C-SECTION */}
        <section id="whelping" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Whelping vs. Planned C-Section: Choosing Safest First</h2>
          <p className="mb-3">
            For many French Bulldogs, <strong>planned C-section</strong> offers safer, more predictable outcomes than unassisted home whelping:
            reduced fetal distress, fewer emergency nighttime dashes, and better control of airway/temperature management for the dam.
            Your veterinarian will weigh <em>pelvic conformation</em>, <em>fetal size</em>, <em>history</em>, and <em>timing</em> to advise.
          </p>
          <h3 className="text-lg font-semibold mt-2 mb-1">If attempting whelping at home, call the vet immediately if:</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Strong contractions for <strong>20–30 minutes</strong> without a puppy, or weak contractions for <strong>2–3 hours</strong> without progress.</li>
            <li>Green/black discharge before any puppy appears (possible placental separation).</li>
            <li>Fever, collapse, extreme pain, or a puppy visible but stuck for &gt;5&ndash;10 minutes.</li>
          </ul>
          <p className="mb-3">
            For planned C-sections, teams experienced with <strong>brachycephalic anesthesia</strong> use pre-oxygenation, gentle induction, rapid delivery,
            and careful recovery. Neonatal teams dry, stimulate, and suction pups, support temperature and blood glucose, and ensure prompt
            nursing/colostrum.
          </p>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Boarding/daycare note:</strong> Pregnant or immediate-postpartum Frenchies are <em>not</em> appropriate for group play. Facilities should
            enforce medical holds, quiet housing, and strict climate control with rapid veterinary referral protocols.
          </div>
        </section>

        {/* NEONATAL CARE */}
        <section id="neonatal" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Neonatal Care: The First 14 Days Decide a Lot</h2>
          <p className="mb-3">
            Newborn puppies cannot regulate temperature well, are prone to hypoglycemia and dehydration, and rely on frequent nursing.
            The first two weeks—<strong>neonatal period</strong>—are about warmth, calories, colostrum, and hygiene. Good records matter.
          </p>
          <h3 className="text-lg font-semibold mt-2 mb-1">Daily rhythm</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>Temperature:</strong> whelping area ~85–90°F (29–32°C) for days 1–3, gradually reducing to ~80°F (27°C) by end of week 1 and ~75°F (24°C) by week 2.</li>
            <li><strong>Weights:</strong> weigh pups at the same time daily; <strong>steady gain</strong> is the metric. If a pup fails to gain for 24 hours, call your vet.</li>
            <li><strong>Nursing:</strong> monitor latch and rotation among teats; supplement only under veterinary guidance (risk of aspiration with tube/bottle feeding).</li>
            <li><strong>Hygiene:</strong> keep bedding dry; change soiled areas frequently; wash hands before handling neonates.</li>
            <li><strong>Dam care:</strong> encourage hydration, balanced nutrition, and quiet; check incisions daily after C-section.</li>
          </ul>
          <p>
            Keep a <strong>neonatal log</strong> with weights, feedings, temperatures, and notes on vigor/elimination. Patterns make problems obvious while
            there’s still time to act.
          </p>
        </section>

        {/* SINGLETONS & SMALL LITTERS */}
        <section id="singleton" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Singleton Litters & Small Litters: Special Considerations</h2>
          <p className="mb-3">
            <strong>Singleton litters</strong> (one puppy) can present unique challenges. The single fetus may grow larger, raising the risk of
            obstructed labor. Hormonal signals that coordinate the onset of labor may be weaker with only one fetus, predisposing to
            <em> primary uterine inertia</em>. Many clinicians recommend <strong>scheduled C-section</strong> for singleton Frenchie pregnancies.
          </p>
          <p className="mb-3">
            Behaviorally, singletons can miss out on littermate feedback. Skilled breeders add <em>structured socialization</em> with gentle,
            age-appropriate “puppy culture” exercises and controlled dog–dog exposure after veterinary clearance. For small litters of 2–3,
            similar socialization goals apply, with extra attention to preventing overattachment and frustration behaviors.
          </p>
          <p>
            Nutritionally, singletons may overeat if milk supply is robust. Monitor weights to ensure <em>steady, not explosive</em> gain and
            adjust nursing rotations if needed.
          </p>
        </section>

        {/* POSTPARTUM */}
        <section id="postpartum" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Postpartum Care & Red Flags (Dam & Pups)</h2>
          <p className="mb-3">
            Postpartum Frenchies need quiet, climate control, hydration, and careful monitoring. For C-section dams, incision checks,
            temperature, and appetite are the big three. For all dams, watch for <strong>metritis (uterine infection)</strong>, <strong>eclampsia (low calcium)</strong>,
            and <strong>mastitis</strong>.
          </p>
          <h3 className="text-lg font-semibold mt-2 mb-1">Call your veterinarian urgently for the dam if you see:</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Fever, foul-smelling discharge, depression, or refusal to eat.</li>
            <li>Restlessness, tremors, panting, stiff gait, or seizures (possible eclampsia).</li>
            <li>Red, hot, painful mammary glands or milk changes (mastitis).</li>
          </ul>
          <h3 className="text-lg font-semibold mt-2 mb-1">For pups, seek care now if you see:</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Failure to gain weight over 24 hours, persistent crying, cold body temperature.</li>
            <li>Milk bubbling at the nose or coughing after feeding (aspiration risk).</li>
            <li>Severe diarrhea, dehydration signs, or lethargy.</li>
          </ul>
        </section>

        {/* COSTS */}
        <section id="costs" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Budgeting & Realistic Costs (Even for Small Litters)</h2>
          <p className="mb-3">
            Small litter size doesn’t mean small costs. Repro consults, progesterone testing, imaging, supplies, emergency fees,
            and potential C-section costs add up quickly. Responsible programs budget for <strong>complications</strong> and prioritize the dam’s
            well-being over litter size or sale price.
          </p>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Progesterone timing (serial tests), AI procedures when applicable.</li>
            <li>Ultrasound and radiographs for planning and puppy counts.</li>
            <li>Planned or emergency C-section with anesthesia and neonatal teams.</li>
            <li>Neonatal supplies: heat sources, scales, disinfectants, formula (if indicated), and linens.</li>
            <li>Post-op medications, rechecks, and contingency funds.</li>
          </ul>
          <p>
            For pet owners who are not breeding, discuss <strong>spay timing</strong> with your veterinarian to balance orthopedic, oncologic,
            and reproductive-tract health considerations while preventing unplanned pregnancies and pyometra risk later in life.
          </p>
        </section>

        {/* BOARDING/DAYCARE */}
        <section id="board-daycare" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Boarding & Daycare Policies for Pregnant/Postpartum Frenchies</h2>
          <p className="mb-3">
            Reputable facilities implement <strong>medical holds</strong> for pregnant dams and neonates. Group play and travel stress conflict with
            temperature control, hygiene, and biosecurity needs. If boarding is unavoidable, choose <strong>quiet, climate-controlled</strong> housing,
            require proof of veterinary clearance, and arrange <strong>daily check-ins</strong> with weight logs and incision photos (post–C-section).
          </p>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Petunia workflow:</strong> Share the dam’s <em>med schedule</em>, <em>incision photos</em>, <em>neonatal weight chart</em>, and <em>emergency plan</em>
            via Petunia. Everyone (staff, family, sitter) aligns on the same protocol.
          </div>
        </section>

        {/* TEMPLATES */}
        <section id="templates" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Checklists & Templates</h2>

          <h3 className="text-lg font-semibold mt-2 mb-1">Whelping/C-Section Decision Tree (Copy/Paste)</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>If</strong> strong contractions &gt; 30 min with no pup <strong>→</strong> call clinic now.</li>
            <li><strong>If</strong> green/black discharge before first pup <strong>→</strong> emergency evaluation.</li>
            <li><strong>If</strong> singleton or prior dystocia <strong>→</strong> discuss scheduled C-section at ovulation+63 days (fetal maturity confirmed).</li>
            <li><strong>Always</strong> have transport crate ready, dam’s file, and a warm neonatal kit.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Neonatal Daily Log (First 14 Days)</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Pup ID, daily weight (g), target gain, notes on vigor/latch.</li>
            <li>Whelping box temperature at each feeding interval.</li>
            <li>Dam intake/output, incision check, meds given.</li>
            <li>Any interventions (supplemental feedings, warmed pup, vet call).</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Whelping Supply Kit</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Scale (grams), bulb syringe, clean towels, heating pad/heat disc with thermostat.</li>
            <li>Chlorhexidine, sterile lubricant, disposable gloves, scissors/hemostats (only if trained).</li>
            <li>Vet-approved formula and feeding equipment (only if instructed), glucose source for emergencies.</li>
            <li>Transport crate, extra linens, garbage bags, headlamp/flashlight, clinic contact sheet.</li>
          </ul>

          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm mt-3">
            <strong>Petunia tip:</strong> Convert these lists into a <em>repeatable checklist</em> in Petunia. Attach PDFs of health tests, mating
            records, and radiograph counts for the on-call team.
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">Frequently Asked Questions</h2>

          <p className="mb-3">
            <strong>How many puppies do French Bulldogs usually have?</strong><br />
            Most litters are <strong>small—commonly 2–4 puppies</strong>. Outliers occur, but Frenchies trend toward the lower end among purebred dogs.
          </p>

          <p className="mb-3">
            <strong>Why are Frenchie litters small?</strong><br />
            Small body size, brachycephalic conformation, and the breed’s reproductive history all play roles. Timing, semen quality,
            and dam health further shape litter size.
          </p>

          <p className="mb-3">
            <strong>Do French Bulldogs need C-sections?</strong><br />
            Not universally, but <strong>assisted deliveries are more common</strong> in this breed. Many breeders plan C-sections based on ovulation
            timing and fetal maturity to reduce emergencies.
          </p>

          <p className="mb-3">
            <strong>What is a singleton litter and is it risky?</strong><br />
            A <strong>singleton</strong> is a litter of one puppy. In Frenchies, singletons raise the risk of obstructed labor and may warrant a planned
            C-section. Socialization planning is important after birth.
          </p>

          <p className="mb-3">
            <strong>How long are French Bulldogs pregnant?</strong><br />
            About <strong>63 days from ovulation</strong>. If you time from the first mating (instead of ovulation), apparent “due dates” can shift several days.
          </p>

          <p>
            <strong>Should pet owners breed their Frenchie?</strong><br />
            Breeding is <strong>high-risk and resource-intensive</strong> in this breed. If you’re not prepared with veterinary partners, emergency funds,
            and neonatal capacity, discuss spay timing and long-term health planning with your veterinarian instead.
          </p>
        </section>

        {/* SOURCES */}
        <section id="sources" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">📚 Sources (Selected)</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            {/* Breed background & health */}
            <li>
              American Kennel Club (AKC). French Bulldog breed overview.{' '}
              <a href="https://www.akc.org/dog-breeds/french-bulldog/" target="_blank" rel="noopener noreferrer">
                https://www.akc.org/dog-breeds/french-bulldog/
              </a>
            </li>
            <li>
              Cambridge BOAS Research Group. Brachycephalic obstructive airway syndrome resources.{' '}
              <a href="https://www.vet.cam.ac.uk/boas" target="_blank" rel="noopener noreferrer">
                https://www.vet.cam.ac.uk/boas
              </a>
            </li>
            <li>
              Royal Veterinary College (RVC) VetCompass. French Bulldog breed health summaries & research.{' '}
              <a href="https://www.rvc.ac.uk/vetcompass" target="_blank" rel="noopener noreferrer">
                https://www.rvc.ac.uk/vetcompass
              </a>
            </li>

            {/* Reproduction fundamentals */}
            <li>
              Merck Veterinary Manual. <em>Reproductive Management of the Bitch; Whelping and Postpartum Care; Dystocia</em>.{' '}
              <a href="https://www.merckvetmanual.com/search?query=bitch%20reproduction%20whelping%20dystocia" target="_blank" rel="noopener noreferrer">
                https://www.merckvetmanual.com/search?query=bitch%20reproduction%20whelping%20dystocia
              </a>
            </li>
            <li>
              VCA Animal Hospitals. <em>Estrus and Mating in the Dog; Pregnancy in Dogs; Whelping (Parturition)</em>.{' '}
              <a href="https://vcahospitals.com/know-your-pet/estrus-and-mating-in-the-dog" target="_blank" rel="noopener noreferrer">
                https://vcahospitals.com/know-your-pet/estrus-and-mating-in-the-dog
              </a>{' '}
              |{' '}
              <a href="https://vcahospitals.com/know-your-pet/pregnancy-in-dogs" target="_blank" rel="noopener noreferrer">
                https://vcahospitals.com/know-your-pet/pregnancy-in-dogs
              </a>{' '}
              |{' '}
              <a href="https://vcahospitals.com/know-your-pet/whelping-or-birth-in-dogs" target="_blank" rel="noopener noreferrer">
                https://vcahospitals.com/know-your-pet/whelping-or-birth-in-dogs
              </a>
            </li>
            <li>
              WSAVA. <em>Global Guidelines</em> (nutrition & perioperative care context).{' '}
              <a href="https://wsava.org/global-guidelines/" target="_blank" rel="noopener noreferrer">
                https://wsava.org/global-guidelines/
              </a>
            </li>

            {/* Litter size/c-section epidemiology (multi-breed with breed effects) */}
            <li>
              Borge KS, Tønnessen R, Nødtvedt A, Indrebø A. <em>Litter size at birth in purebred dogs – A retrospective study of 224 breeds</em>. Theriogenology. 2011;75(5):911–919.{' '}
              <a href="https://doi.org/10.1016/j.theriogenology.2010.10.034" target="_blank" rel="noopener noreferrer">
                https://doi.org/10.1016/j.theriogenology.2010.10.034
              </a>
            </li>
            <li>
              Evans KM, Adams VJ. <em>Proportion of litters of purebred dogs born by caesarean section</em>. J Small Anim Pract. 2010;51(2):113–118.{' '}
              <a href="https://doi.org/10.1111/j.1748-5827.2009.00820.x" target="_blank" rel="noopener noreferrer">
                https://doi.org/10.1111/j.1748-5827.2009.00820.x
              </a>
            </li>
            <li>
              O’Neill DG, et&nbsp;al. <em>Canine dystocia in 50,000 UK births: risk factors for emergency caesarean</em> (VetCompass). Vet Rec. 2017;180(4):84.{' '}
              <a href="https://doi.org/10.1136/vr.103730" target="_blank" rel="noopener noreferrer">
                https://doi.org/10.1136/vr.103730
              </a>
            </li>

            {/* Anesthesia for brachycephalics & neonatal care */}
            <li>
              ACVAA (American College of Veterinary Anesthesia and Analgesia). Owner resources (brachycephalic anesthesia considerations).{' '}
              <a href="https://acvaa.org/owner-resources/" target="_blank" rel="noopener noreferrer">
                https://acvaa.org/owner-resources/
              </a>
            </li>
            <li>
              Merck Veterinary Manual. <em>Care of Orphaned and Weakened Puppies</em>; <em>Neonatal Care</em>.{' '}
              <a href="https://www.merckvetmanual.com/management-and-nutrition/raising-orphaned-puppies-and-kittens/raising-orphaned-puppies" target="_blank" rel="noopener noreferrer">
                https://www.merckvetmanual.com/management-and-nutrition/raising-orphaned-puppies-and-kittens/raising-orphaned-puppies
              </a>
            </li>

            {/* Breed club health testing guidance */}
            <li>
              French Bulldog Club of America (FBDCA). Health and breeding resources.{' '}
              <a href="https://frenchbulldogclub.org/health/" target="_blank" rel="noopener noreferrer">
                https://frenchbulldogclub.org/health/
              </a>
            </li>
          </ul>
          <p className="text-xs text-gray-600 mt-4">
            Educational content only. Always consult your veterinarian or a board-certified theriogenologist for individualized
            breeding, pregnancy, and neonatal care guidance. Delivery decisions must be tailored to each dam and litter.
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
