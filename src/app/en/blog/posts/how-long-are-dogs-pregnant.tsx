'use client';

import Head from 'next/head';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function HowLongAreDogsPregnant() {
  const locale = useLocale();

  const title =
    'How Long Are Dogs Pregnant? Gestation Timeline, Week-by-Week Development, Signs, Red Flags, Whelping, and Postpartum Care (With Vet-Backed Sources)';
  const date = 'August 20, 2025';
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
    'Clear, evidence-informed guide to canine pregnancy: true gestation length (from ovulation vs breeding), reliable signs, diagnostics (progesterone/relaxin, ultrasound, radiographs), week-by-week fetal development, nutrition and exercise by trimester, whelping prep, stages of labor and red flags, when to call the vet, C-section planning, and postpartum care for mom and puppies. Includes printable checklists and timelines.';

  return (
    <>
      <Head>
        <title>{title} – Petunia Blog</title>
        <meta name="description" content={description} />
        {/* Per user preference, avoid the word "index" here. */}
        <meta name="robots" content="all" />
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
            <li><a href="#basics" className="underline hover:opacity-80">Gestation Basics</a></li>
            <li><a href="#biology" className="underline hover:opacity-80">Biology: Heat → Ovulation → Implantation</a></li>
            <li><a href="#week-by-week" className="underline hover:opacity-80">Week-by-Week Fetal Development</a></li>
            <li><a href="#confirming" className="underline hover:opacity-80">Confirming Pregnancy (Tests &amp; Timing)</a></li>
            <li><a href="#care" className="underline hover:opacity-80">Care by Trimester: Nutrition &amp; Exercise</a></li>
            <li><a href="#red-flags" className="underline hover:opacity-80">Red Flags During Pregnancy</a></li>
            <li><a href="#whelping-prep" className="underline hover:opacity-80">Whelping Prep &amp; Supplies</a></li>
            <li><a href="#labor" className="underline hover:opacity-80">Stages of Labor: What&#39;s Normal</a></li>
            <li><a href="#dystocia" className="underline hover:opacity-80">Dystocia &amp; When to Call the Vet</a></li>
            <li><a href="#csection" className="underline hover:opacity-80">C-Section Planning &amp; Costs</a></li>
            <li><a href="#postpartum" className="underline hover:opacity-80">Postpartum Care (Dam &amp; Puppies)</a></li>
            <li><a href="#special" className="underline hover:opacity-80">Special Topics: False Pregnancy, Pyometra</a></li>
            <li><a href="#checklists" className="underline hover:opacity-80">Owner Checklists &amp; Timelines</a></li>
            <li><a href="#faq" className="underline hover:opacity-80">FAQ</a></li>
            <li><a href="#sources" className="underline hover:opacity-80">Sources (Selected)</a></li>
          </ul>
        </nav>

        {/* TL;DR */}
        <section id="tldr" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Short Answer (TL;DR)</h2>
          <p className="mb-4">
            The <strong>true canine gestation</strong> is about <strong>62–64 days from ovulation</strong> (the progesterone-defined LH surge) or roughly <strong>58–68 days from breeding</strong>,
            because sperm and eggs live on different timelines. Reliable confirmation comes from <strong>relaxin blood tests</strong> (after about day 21–28),
            <strong> ultrasound</strong> (often day 25–30 for viability, heartbeat), and <strong>radiographs</strong> (after day 55 for puppy counts and skull/pelvis fit). Care focuses
            on <strong>lean nutrition</strong> (no overfeeding early; energy rises last 3–4 weeks), <strong>parasite prevention</strong> per veterinarian, and <strong>measured exercise</strong>.
            Whelping typically begins near day 63 from ovulation and includes a <strong>rectal temperature drop</strong> (often to &lt;99 °F / 37.2 °C) about 12–24 hours
            before active labor. Call your veterinarian urgently for <strong>green/black discharge before any puppy</strong>, strong contractions &gt;30 minutes with no puppy,
            or &gt;2–3 hours between puppies with known fetuses remaining.
          </p>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Petunia tip:</strong> In Petunia, create a pregnancy card with three dates: estimated ovulation (from progesterone or stud records), earliest and latest
            safe whelp windows, and your clinic&#39;s 24-hour number. Add a daily temperature tracker for the last week.
          </div>
        </section>

        {/* Basics */}
        <section id="basics" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Gestation Basics: What &quot;63 Days&quot; Really Means</h2>
          <p className="mb-3">
            You often hear that dogs are pregnant for &quot;about 63 days.&quot; That is close—but the clock starts at <strong>ovulation</strong>, not the first tie. Because canine
            ova require time to mature and viable sperm can survive several days, puppies conceived from breedings on different days can still be born on the
            same date. Without progesterone timing, predicted due dates from a calendar alone can be off by several days either direction.
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>From ovulation:</strong> ~62–64 days is typical.</li>
            <li><strong>From breeding:</strong> ~58–68 days because conception may lag.</li>
            <li><strong>From LH surge:</strong> many theriogenologists use ~65 days as a planning anchor.</li>
          </ul>
          <p>
            Practical takeaway: use progesterone/LH timing if precision matters (e.g., planned C-section, high-risk litters). If you bred by calendar,
            treat &quot;day 63&quot; as a <em>center of gravity</em>, not a guarantee.
          </p>
        </section>

        {/* Biology */}
        <section id="biology" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Biology: From Heat to Implantation</h2>
          <p className="mb-3">
            The canine estrous cycle includes <strong>proestrus</strong> (bloody discharge, vulvar swelling; males interested, female not receptive), <strong>estrus</strong> (standing heat,
            receptive; discharge often straw-colored), <strong>diestrus</strong> (pregnant or pseudopregnant phase), and <strong>anestrus</strong> (rest). Ovulation occurs during estrus, but
            canine ova are released <em>immature</em> and need ~48 hours to mature before fertilization. Fertilized embryos (morulae/blastocysts) float free in the
            uterus for ~1–2 weeks before <strong>implantation</strong>. Placentas in dogs are zonary (belt-like), and the pigment biliverdin creates the characteristic
            dark green utero-verdine discharge associated with placental separation late in whelping.
          </p>
          <p>
            Because progesterone rises around ovulation and persists whether pregnant or not, early hormone levels cannot prove pregnancy. That is why the
            <strong> relaxin</strong> hormone—produced by the placenta—is used diagnostically in dogs.
          </p>
        </section>

        {/* Week by week */}
        <section id="week-by-week" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Week-by-Week Fetal Development (Approximate)</h2>
          <p className="mb-3">
            Individual timelines vary with ovulation accuracy and breed size, but this framework helps owners visualize normal milestones.
          </p>

          <h3 className="text-lg font-semibold mt-2 mb-1">Week 0–1 (Days 0–7): Fertilization &amp; Early Embryo</h3>
          <p className="mb-3">
            Sperm reach the oviduct; fertilization occurs as ova mature. Zygotes divide to morulae. No external signs. Normal activity and measured feeding.
          </p>

          <h3 className="text-lg font-semibold mt-2 mb-1">Week 2 (Days 8–14): Uterine Transit</h3>
          <p className="mb-3">
            Embryos enter the uterus and continue developing as free-floating blastocysts. The dam may show mild appetite shifts or nothing at all.
          </p>

          <h3 className="text-lg font-semibold mt-2 mb-1">Week 3 (Days 15–21): Implantation Begins</h3>
          <p className="mb-3">
            Implantation into the uterine lining starts. Some dams exhibit transient morning queasiness. Keep exercise moderate; avoid rough play and jumps.
          </p>

          <h3 className="text-lg font-semibold mt-2 mb-1">Week 4 (Days 22–28): Embryo → Fetus</h3>
          <p className="mb-3">
            Cardiac activity is detectable on ultrasound; heads and body shapes emerge. Mammary tissue may begin to change; clear mucoid vaginal discharge can
            be normal. Relaxin blood tests usually turn positive after about day 21–28.
          </p>

          <h3 className="text-lg font-semibold mt-2 mb-1">Week 5 (Days 29–35): Organogenesis</h3>
          <p className="mb-3">
            Rapid organ formation; fetuses are sensitive to toxins. Caloric needs begin to rise gradually for medium/large litters. Do not add calcium
            supplements; this raises eclampsia risk later. Keep the dam <strong>lean</strong>.
          </p>

          <h3 className="text-lg font-semibold mt-2 mb-1">Week 6 (Days 36–42): Fetal Growth Curve Accelerates</h3>
          <p className="mb-3">
            Abdomen enlarges; appetite often increases. Energy density matters more than raw volume. Small, frequent meals help in large or deep-chested breeds.
          </p>

          <h3 className="text-lg font-semibold mt-2 mb-1">Week 7 (Days 43–49): Coat &amp; Skeleton Mineralize</h3>
          <p className="mb-3">
            Fetal skeletons mineralize; radiographs after day 55 can count skulls/spines. The dam may begin nesting. Deworming protocols may be discussed
            to limit roundworm/hookworm transmission per veterinarian guidance.
          </p>

          <h3 className="text-lg font-semibold mt-2 mb-1">Week 8 (Days 50–56): Final Growth; Temperature Tracking</h3>
          <p className="mb-3">
            Nipples enlarge; colostrum may appear. Begin twice-daily rectal temperatures at consistent times. A drop to ~98–99 °F often precedes stage I labor
            by 12–24 hours. Prepare the whelping area and review emergency routes.
          </p>

          <h3 className="text-lg font-semibold mt-2 mb-1">Week 9 (Days 57–65): Whelp Window</h3>
          <p>
            Most bitches whelp near day 63 from ovulation. Quiet, dark space reduces stress. Expect stage I signs (restlessness, nesting, panting) before
            active contractions. Stay calm and observe; time visible events to share with your veterinarian if needed.
          </p>
        </section>

        {/* Confirming pregnancy */}
        <section id="confirming" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Confirming Pregnancy: Tests &amp; Imaging (What Each Can Do)</h2>
          <ul className="list-disc pl-5 space-y-2 mb-3">
            <li><strong>Abdominal palpation:</strong> experienced vets can sometimes palpate &quot;string of pearls&quot; around days ~21–28, but skill and body condition limit sensitivity.</li>
            <li><strong>Relaxin test (blood):</strong> placental hormone; often positive after day 21–28; confirms pregnancy but <em>does not</em> count puppies.</li>
            <li><strong>Ultrasound:</strong> commonly day 25–30+ for viability, heartbeats, resorption checks; difficult for exact counts; great for fetal health.</li>
            <li><strong>Radiographs (X-rays):</strong> after day 55, fetal skeletons mineralize; best tool to <strong>estimate puppy counts</strong> pre-whelp and assess skull/pelvis proportion.</li>
            <li><strong>Progesterone timing:</strong> not a pregnancy test; used before breeding to date ovulation and predict due window accurately.</li>
          </ul>
          <p>
            Combine modalities: ultrasound for viability and radiographs late for counts. If you only pick one, late radiographs guide whelping expectations.
          </p>
        </section>

        {/* Care by trimester */}
        <section id="care" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Care by Trimester: Nutrition, Exercise, &amp; Medications</h2>

          <h3 className="text-lg font-semibold mt-2 mb-1">First 3–4 Weeks (Implantation &amp; Organogenesis)</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>Nutrition:</strong> do <em>not</em> overfeed; maintain lean condition. Quality complete diet meeting AAFCO or FEDIAF profiles.</li>
            <li><strong>Exercise:</strong> normal walks/play with reduced jumping/tumbling; avoid new high-impact sports.</li>
            <li><strong>Medications:</strong> review parasite preventives and any chronic meds with your veterinarian for pregnancy safety.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Middle 3–4 Weeks</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Gradually increase calories for medium/large litters; small meals more often if appetite is variable.</li>
            <li>No calcium supplementation pre-whelp; it increases risk of eclampsia after birth.</li>
            <li>Discuss deworming protocols to reduce transplacental/lactogenic parasite load.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Final 3–4 Weeks</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Energy needs rise ~20–30% for many bitches; adjust to body condition, not a single chart.</li>
            <li>Switch to multiple smaller meals; consider growth/gestation formulas for energy density if your vet recommends.</li>
            <li>Restrict rough play; prioritize easy walks. Prepare whelping area and supplies.</li>
          </ul>

          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Petunia tip:</strong> Add a &quot;weekly body photo set&quot; (side/top/rear) to Petunia with weight and appetite notes. Trends help your veterinary team fine-tune calories.
          </div>
        </section>

        {/* Red flags */}
        <section id="red-flags" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Red Flags During Pregnancy: Call Your Veterinarian</h2>
          <ul className="list-disc pl-5 space-y-2 mb-3">
            <li>Bloody, foul, or dark green/black discharge <strong>well before</strong> any puppy (possible placental separation).</li>
            <li>Marked lethargy, fever, vomiting, or refusal to eat spanning more than a day.</li>
            <li>Severe abdominal pain, collapse, or rapidly enlarging abdomen.</li>
            <li>Known due window passes (e.g., &gt;68 days from breeding without ovulation timing) with no labor signs.</li>
          </ul>
          <p>
            Better a &quot;false alarm&quot; call than a missed emergency. Many problems are solvable if addressed early.
          </p>
        </section>

        {/* Whelping prep */}
        <section id="whelping-prep" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Whelping Prep: Environment, Temperature, and Supplies</h2>
          <p className="mb-3">
            Choose a quiet, draft-free room where the dam already feels safe. Introduce a whelping box two weeks ahead with washable bedding and railings
            to prevent accidental puppy overlay.
          </p>
          <h3 className="text-lg font-semibold mt-2 mb-1">Supply checklist</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Thermometer; scale for puppies (grams); clean towels; bulb syringe.</li>
            <li>Disposable pads; trash bags; chlorhexidine for navel care per vet guidance.</li>
            <li>Heat source for pups (safe, indirect); room thermometer/hygrometer.</li>
            <li>Glucose solution/Karo for emergencies; sterile scissors and clamps if advised.</li>
            <li>Emergency contact numbers (vet + 24-hour ER); car fueled; carrier/transport plan.</li>
          </ul>
          <p>
            Begin twice-daily rectal temps near day 58–60. A sustained drop (often &lt;99 °F) predicts stage I within about a day.
          </p>
        </section>

        {/* Labor */}
        <section id="labor" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Stages of Labor: What&#39;s Normal (and What&#39;s Not)</h2>

          <h3 className="text-lg font-semibold mt-2 mb-1">Stage I (6–12 hours, up to 24)</h3>
          <p className="mb-3">
            Nesting, panting, restlessness, shivering; cervix dilates; no abdominal pushing yet. Provide quiet, water, and frequent brief potty breaks.
          </p>

          <h3 className="text-lg font-semibold mt-2 mb-1">Stage II (Puppy Delivery)</h3>
          <p className="mb-3">
            Visible abdominal contractions and expulsion. First puppy often within minutes after strong pushing begins. Subsequent pups may arrive every
            20–60 minutes; short rest periods can occur. Normal presentations are head-first or breech; both can be normal in dogs.</p>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Clear fluid followed by a puppy is expected; dark green discharge appears <em>after</em> the first puppy. Green/black <em>before</em> any puppy warrants a call.</li>
            <li>If strong contractions last &gt;30 minutes without a puppy, or weak contractions &gt;2 hours with known fetuses remaining, call your vet.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Stage III (Placenta Delivery)</h3>
          <p>
            Placentas usually pass with or shortly after each puppy. Count placentas; the number should match puppies delivered. Retained placenta can
            predispose to metritis (uterine infection).
          </p>
        </section>

        {/* Dystocia */}
        <section id="dystocia" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Dystocia (Difficult Birth): High-Value Rules of Thumb</h2>
          <ul className="list-disc pl-5 space-y-2 mb-3">
            <li>Strong, regular pushing &gt;30 minutes with no puppy → call the vet.</li>
            <li>Rest period &gt;2–3 hours between puppies with known fetuses remaining → call the vet.</li>
            <li>Green/black discharge before any puppy appears → urgent call.</li>
            <li>Exhaustion, collapse, or severe pain → emergency care.</li>
          </ul>
          <p>
            Risk factors include toy breeds with narrow pelvis, brachycephalics, singleton litters (poor contractions), very large litters (uterine inertia),
            over- or under-conditioned dams, and poorly timed due windows without ovulation data.
          </p>
        </section>

        {/* C-section */}
        <section id="csection" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Planned C-Section: When &amp; Why</h2>
          <p className="mb-3">
            Some breeds or individuals are candidates for planned C-section (e.g., past dystocia, known pelvic issues, predicted fetopelvic mismatch). Accurate
            ovulation timing is critical so puppies are neither premature nor post-mature. Discuss anesthesia plans, neonatal revival protocols, and costs in
            advance; modern U.S. ranges commonly run into the low-to-mid four figures, varying widely by region and hospital.
          </p>
        </section>

        {/* Postpartum */}
        <section id="postpartum" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Postpartum Care: Dam &amp; Neonates (Days 0–14, 2–4 Weeks, 4–8 Weeks)</h2>

          <h3 className="text-lg font-semibold mt-2 mb-1">Dam (Mother)</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Expect transient greenish lochia for several days; foul odor, fever, or bright red heavy bleeding are red flags.</li>
            <li>Monitor appetite, hydration, and mammary glands daily for heat, pain, or discoloration (mastitis).</li>
            <li>Calcium demands rise in lactation; never supplement late pregnancy, but your vet may recommend specific support postpartum.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Neonates (0–14 Days)</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Warmth first: 85–90 °F ambient the first days with safe, indirect heat; pups cannot regulate temperature.</li>
            <li>Weigh daily; steady gain is key. Failure to thrive warrants urgent vet contact.</li>
            <li>Colostrum within the first day supports immunity; fading puppy signs (weakness, crying, chilling) are emergencies.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">2–4 Weeks</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Eyes/ears open; begin gentle handling and early environmental enrichment.</li>
            <li>Deworming protocols typically begin around 2 weeks and repeat every 2 weeks per veterinary guidance.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">4–8 Weeks</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Introduce gruel/weaning per vet guidance; keep nails trimmed to prevent dam discomfort.</li>
            <li>First vaccines generally begin around 6–8 weeks; schedules vary by region and risk.</li>
          </ul>

          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Petunia tip:</strong> Track a daily weight chart for each puppy in Petunia. Photo log the nest to catch subtle posture/heat changes that predict issues early.
          </div>
        </section>

        {/* Special topics */}
        <section id="special" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Special Topics: False Pregnancy, Pyometra, Ethics</h2>
          <p className="mb-3">
            Because progesterone remains high after estrus whether or not conception occurred, <strong>false pregnancy</strong> (pseudocyesis) is common: nesting, lactation,
            mothering toys. Most cases resolve spontaneously; your veterinarian can guide management if distressing or recurrent.
          </p>
          <p className="mb-3">
            <strong>Pyometra</strong> (uterine infection) is a life-threatening emergency that can occur after heat in intact bitches; signs include lethargy, fever, abdominal
            pain, and vaginal discharge (sometimes closed/cervix sealed, so discharge is absent). Immediate veterinary care is essential; ovariohysterectomy is
            often curative.
          </p>
          <p>
            Responsible breeding includes pre-breeding health screening, genetic considerations, and lifetime placement plans. If breeding is not intended,
            discuss spay timing with your veterinarian balancing orthopedic, cancer, and population factors.
          </p>
        </section>

        {/* Checklists */}
        <section id="checklists" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Owner Checklists &amp; Timelines (Print-Friendly)</h2>

          <h3 className="text-lg font-semibold mt-2 mb-1">Pregnancy Timeline Card</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Ovulation (progesterone/LH): ________</li>
            <li>Ultrasound viability window (≈ day 25–30): ________</li>
            <li>Radiograph count (≥ day 55): ________</li>
            <li>Whelp window (≈ day 62–64 from ovulation): ________</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Whelping &quot;Go Bag&quot;</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>24-hour clinic address/route; emergency fund/credit ready.</li>
            <li>Towels, pads, bulb syringe, sterile scissors/clamps (if advised), gloves.</li>
            <li>Thermometer, puppy scale, heat source, notebook/timer.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Red-Flag Triggers (Call Immediately)</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Green/black discharge before the first puppy.</li>
            <li>Strong pushing &gt;30 minutes with no puppy.</li>
            <li>&gt;2–3 hours between puppies with fetuses remaining.</li>
            <li>Foul odor, fever, collapse, or severe pain at any time.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">Frequently Asked Questions</h2>

          <p className="mb-3">
            <strong>How long are dogs pregnant?</strong><br />
            Roughly 62–64 days from ovulation, or 58–68 days from breeding because conception timing varies. Progesterone/LH testing tightens predictions.
          </p>

          <p className="mb-3">
            <strong>What are early signs my dog is pregnant?</strong><br />
            Subtle appetite shifts, mild lethargy, nipple changes, clear mucoid discharge around week 4. Definitive confirmation typically uses relaxin tests,
            ultrasound (viability), and later radiographs (counts).
          </p>

          <p className="mb-3">
            <strong>Do I change her food immediately?</strong><br />
            No. Keep her lean early. Increase energy density gradually in the last 3–4 weeks, especially for larger litters, under veterinary guidance.
          </p>

          <p className="mb-3">
            <strong>Is a temperature drop reliable?</strong><br />
            A sustained drop to ~98–99 °F often precedes stage I labor by 12–24 hours, but timing varies. Use it with behavior cues, not as a solo trigger.
          </p>

          <p className="mb-3">
            <strong>How do I know if a puppy is stuck?</strong><br />
            Strong contractions &gt;30 minutes with no puppy, visible puppy lodged at the vulva, or prolonged rest &gt;2–3 hours between puppies with more remaining:
            call your veterinarian immediately.
          </p>

          <p className="mb-3">
            <strong>What post-whelp problems should I watch for?</strong><br />
            Fever, foul discharge, neglect of pups, swollen/painful mammary glands, fading puppies (weak, cold, crying). All warrant prompt care.
          </p>

          <p className="text-xs text-gray-600">
            Educational content only. Always consult your veterinarian or a theriogenology specialist for individualized breeding and whelping plans.
          </p>
        </section>

        {/* Sources */}
        <section id="sources" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">📚 Sources (Selected)</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            <li>
              Merck Veterinary Manual. Canine pregnancy, parturition, and dystocia overviews (gestation length, diagnostics, labor stages, red flags).
              <a href="https://www.merckvetmanual.com/" target="_blank" rel="noopener noreferrer"> Merck Vet Manual</a>
            </li>
            <li>
              American College of Theriogenologists (ACT) &amp; Society for Theriogenology (SFT). Breeding management principles and timing with progesterone/LH.
              <a href="https://www.theriofoundation.org/" target="_blank" rel="noopener noreferrer"> Theriogenology resources</a>
            </li>
            <li>
              American Animal Hospital Association (AAHA). Canine Life Stage Guidelines (preventive care, nutrition considerations for pregnancy/lactation).
              <a href="https://www.aaha.org/education/guidelines/canine-life-stage-guidelines/" target="_blank" rel="noopener noreferrer"> AAHA guideline hub</a>
            </li>
            <li>
              IDEXX VetConnect / Reference Labs. Canine relaxin testing information (timing and interpretation).
              <a href="https://www.idexx.com/en/veterinary/reference-laboratories/" target="_blank" rel="noopener noreferrer"> IDEXX reference</a>
            </li>
            <li>
              WSAVA Global Guidelines. Nutrition and reproduction considerations for breeding bitches and neonates.
              <a href="https://wsava.org/global-guidelines/global-nutrition-guidelines/" target="_blank" rel="noopener noreferrer"> WSAVA nutrition</a>
            </li>
            <li>
              Royal College of Veterinary Surgeons / BSAVA resources on dystocia management and radiographic counting (mineralization after day 55).
              <a href="https://www.bsava.com/" target="_blank" rel="noopener noreferrer"> BSAVA</a>
            </li>
          </ul>
          <p className="text-xs text-gray-600 mt-4">
            Sources above are representative reference points; your veterinarian&#39;s protocols may vary by region, breed, and individual risk. When in doubt,
            call early—most whelping complications are time-sensitive and improve with prompt care.
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
