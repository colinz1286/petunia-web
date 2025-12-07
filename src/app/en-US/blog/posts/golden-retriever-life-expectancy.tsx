'use client';

import Head from 'next/head';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function GoldenRetrieverLifeExpectancy() {
  const locale = useLocale();

  const title =
    'What Is the Life Expectancy of Golden Retrievers? An Evidence-Based Owner’s Guide';
  const date = 'August 14, 2025';
  const categories = ['owner', 'breed_specific_guides'] as const;

  // Use the exact labels object from prior posts (unchanged keys/labels)
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

  const slug = 'golden-retriever-life-expectancy';

  const description =
    'Most Golden Retrievers live 10–12 years. This operator-grade guide explains what “life expectancy” means, why cancer looms large for the breed, and the concrete levers—genetics, weight, preventive care, and environment—that can add healthy months to years. Includes checklists, owner SOPs, and vetted sources.';

  return (
    <>
      <Head>
        <title>{title} – Petunia Blog</title>
        <meta name="description" content={description} />
        <meta name="robots" content="index,follow" />
        <link
          rel="canonical"
          href={`https://www.petuniapets.com/${locale}/blog/${slug}`}
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
            <li>
              <a href="#tl-dr" className="underline hover:opacity-80">
                TL;DR
              </a>
            </li>
            <li>
              <a href="#what-it-means" className="underline hover:opacity-80">
                What “Life Expectancy” Means
              </a>
            </li>
            <li>
              <a href="#drivers" className="underline hover:opacity-80">
                Longevity Drivers (Levers You Control)
              </a>
            </li>
            <li>
              <a href="#cancer" className="underline hover:opacity-80">
                Cancer in Goldens: Risk & Early Action
              </a>
            </li>
            <li>
              <a href="#weight" className="underline hover:opacity-80">
                Weight, Body Condition & Years Added
              </a>
            </li>
            <li>
              <a href="#nutrition" className="underline hover:opacity-80">
                Nutrition & Supplements
              </a>
            </li>
            <li>
              <a href="#preventive" className="underline hover:opacity-80">
                Preventive Care & Screening Calendar
              </a>
            </li>
            <li>
              <a href="#lifestyle" className="underline hover:opacity-80">
                Exercise, Safety & Lifestyle
              </a>
            </li>
            <li>
              <a href="#senior" className="underline hover:opacity-80">
                Senior Goldens: Aging Well
              </a>
            </li>
            <li>
              <a href="#breeding" className="underline hover:opacity-80">
                Breeding & Health Clearances
              </a>
            </li>
            <li>
              <a href="#myths" className="underline hover:opacity-80">
                Myths & Marketing Claims
              </a>
            </li>
            <li>
              <a href="#playbook" className="underline hover:opacity-80">
                Longevity Playbook (Checklists)
              </a>
            </li>
            <li>
              <a href="#faq" className="underline hover:opacity-80">
                FAQ
              </a>
            </li>
            <li>
              <a href="#sources" className="underline hover:opacity-80">
                📚 Sources (Selected)
              </a>
            </li>
          </ul>
        </nav>

        {/* TL;DR */}
        <section id="tl-dr" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Short Answer (TL;DR)</h2>
          <p className="mb-4">
            <strong>Typical lifespan</strong> for Golden Retrievers is{' '}
            <strong>10–12 years</strong>, with wide individual variation. The
            biggest, proven levers to add healthy time are: (1){' '}
            <strong>keep body condition lean</strong> throughout life,
            (2) <strong>select well-screened genetics</strong> (OFA hips/elbows, eye
            clearances, advanced cardiac), (3){' '}
            <strong>evidence-based preventive care</strong> (vaccination, parasite
            control, dental, senior bloodwork), and (4){' '}
            <strong>early detection</strong> behaviors for cancer and orthopedic
            pain. Cancer—especially hemangiosarcoma and lymphoma—accounts for a
            large share of Golden deaths; lean weight and timely vet care are your
            best day-to-day tools. Outliers exist (some live to 14–16+), but plan
            for proactive senior care by age 8–9.
          </p>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Petunia tip:</strong> Build a one-page{' '}
            <em>Longevity SOP</em> for your Golden: ideal body weight, monthly
            weight checks, annual OFA-style eye re-checks, dental plan (tooth
            brushing + VOHC products), and a senior screening calendar. Share it
            with everyone in the household.
          </div>
        </section>

        {/* What life expectancy means */}
        <section id="what-it-means" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">
            What “Life Expectancy” Actually Means (and Why the Range Is Wide)
          </h2>
          <p className="mb-3">
            When you read “10–12 years,” that’s a population-level estimate—
            not a prediction for <em>your</em> dog. Genetics (lineage), sex,
            reproductive status, growth rate, lifetime body condition, activity,
            and random chance all shift the curve. Expect a bell-curve: many
            Goldens reach 11–12, a smaller group pass earlier (often cancer),
            and a motivated minority see 13–15+. The goal isn’t just more years;
            it’s <strong>healthspan</strong>—maximizing the time your Golden feels
            good, moves comfortably, and participates in family life.
          </p>
          <p className="mb-0">
            Two statistical terms matter. <strong>Median</strong> age is when half
            the population has passed away (robust to outliers);{' '}
            <strong>average (mean)</strong> can be skewed by unusually short or
            long lives. Breed-club and registry pages commonly quote “10–12
            years” for Goldens; in practice, where your individual dog lands
            depends most on body condition, inherited risk (esp. cancer and
            joints), and the quality/consistency of preventive care.
          </p>
        </section>

        {/* Drivers */}
        <section id="drivers" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">
            Longevity Drivers You Can Influence
          </h2>

          <h3 className="text-lg font-semibold mb-2">1) Genetics & Lineage</h3>
          <p className="mb-3">
            Goldens are predisposed to certain conditions—cancers (notably
            hemangiosarcoma, lymphoma, mast cell tumor), orthopedic disease (hip/
            elbow dysplasia), eye disease (Golden Retriever Pigmentary Uveitis,
            cataracts), and congenital heart disease (subvalvular aortic stenosis,
            SAS). Responsible breeding reduces risk by screening hips, elbows, eyes
            (annual exams), and <em>advanced</em> cardiac (echocardiogram by a
            board-certified cardiologist). If you’re buying a puppy, verify results
            in the OFA database and ask about longevity in the close pedigree.
          </p>

          <h3 className="text-lg font-semibold mb-2">2) Body Condition</h3>
          <p className="mb-3">
            Lean dogs live longer. In a landmark lifetime study, dogs fed to a
            slim body condition lived significantly longer and developed chronic
            disease later than their littermates fed ad libitum. For large-breed
            dogs like Goldens, keeping ribs easily palpable with a visible waist
            and abdominal tuck is a high-leverage habit you control daily.
          </p>

          <h3 className="text-lg font-semibold mb-2">3) Reproductive Timing</h3>
          <p className="mb-3">
            Spay/neuter decisions affect longevity and disease patterns. Large
            database analyses show spayed/neutered dogs often live longer overall,
            but breed-specific studies in Goldens report <em>timing</em> tradeoffs:
            early neuter may increase some joint disorders and certain cancers. The
            “best” timing is individualized—coordinate with your veterinarian to
            balance orthopedic growth, behavior, home risks (roaming, unwanted
            litters), and your local disease ecology.
          </p>

          <h3 className="text-lg font-semibold mb-2">4) Preventive Care Cadence</h3>
          <p className="mb-0">
            Routine vaccination, parasite prevention, dental care, and age-tiered
            screening (see calendar below) catch problems earlier—when they are
            cheaper, less invasive, and more survivable. For a cancer-prone breed,
            early detection behaviors (monthly nose-to-tail home checks, prompt
            workup of fainting/weakness, sudden pale gums, belly distension, or
            persistent lameness) are non-negotiable.
          </p>
        </section>

        {/* Cancer */}
        <section id="cancer" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">
            Cancer in Golden Retrievers: What to Watch, What Helps
          </h2>
          <p className="mb-3">
            Cancer is the dominant cause of death in the breed, with{' '}
            <em>hemangiosarcoma</em> (a fast-moving vascular cancer),{' '}
            <em>lymphoma</em>, and <em>mast cell tumor</em> prominent on the list.
            Large prospective studies of Goldens emphasize just how common cancer
            is and why vigilance matters. While no daily habit can “cancer-proof”
            a dog, owners can load the dice toward more healthy time by keeping
            weight lean, avoiding tobacco smoke exposure, using heartworm/
            parasite prevention as advised, and seeking rapid workups for red
            flags.
          </p>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm mb-3">
            <strong>Red flags to act on now:</strong>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>
                Sudden collapse, weakness, or pale gums (possible internal
                bleeding—emergency).
              </li>
              <li>
                Rapidly enlarging belly; fainting during excitement/exercise.
              </li>
              <li>
                Firm or fast-growing lumps, especially if ulcerated or changing.
              </li>
              <li>
                Persistent lameness, bone pain, or swelling of a limb.
              </li>
              <li>
                Unexplained weight loss, reduced appetite, or marked lethargy.
              </li>
            </ul>
          </div>
          <p className="mb-3">
            <strong>Screening & “early detection” tests:</strong> Yearly (or
            semi-annual for seniors) physical exams with a veterinarian who knows
            your dog; baseline/serial bloodwork as recommended; and prompt imaging
            (x-ray/ultrasound) when clinical suspicion is high. Emerging blood
            tests that claim to detect cancer are evolving; discuss benefits,
            limits, and false-positive rates with your vet before using them as a
            screening substitute for diagnostics.
          </p>
          <p className="mb-0">
            <strong>Treatment outlook:</strong> Outcomes vary widely with cancer
            type and stage. Don’t assume poor prognosis—many mast cell tumors and
            some lymphomas respond well to timely therapy. Your job is noticing
            change early and getting specialty opinions quickly when indicated.
          </p>
        </section>

        {/* Weight */}
        <section id="weight" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">
            Weight, Body Condition & the “Hidden” Longevity Dividend
          </h2>
          <p className="mb-3">
            Extra fat quietly erodes both comfort and lifespan. Use a 9-point body
            condition scale (ideal typically 4/9 to 5/9) and a simple monthly
            weigh-in. Your touch beats the scale alone: you should feel ribs with
            light pressure, see a waist from above, and an abdominal “tuck” from
            the side. If you can’t, feed less, train with part of meals, and use
            puzzles/foraging to slow intake without adding calories.
          </p>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>
              <strong>Portion with purpose:</strong> start with package guidelines,
              then titrate every 2–3 weeks to keep the silhouette ideal.
            </li>
            <li>
              <strong>Training budgets:</strong> set aside 30–60% of food for
              training and enrichment; use tiny pieces.
            </li>
            <li>
              <strong>Lean rules:</strong> no free-feeding; measure meals; use a
              slow feeder for “vacuum” eaters. Re-check body condition monthly.
            </li>
          </ul>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Operator note:</strong> In long-running research, dogs kept
            lean lived longer and developed chronic disease later than their
            matched littermates fed more. For Goldens, this one lever is mighty.
          </div>
        </section>

        {/* Nutrition */}
        <section id="nutrition" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Nutrition & Supplements</h2>
          <p className="mb-3">
            Choose a complete, AAFCO-compliant diet appropriate for life stage
            (puppy → adult → senior as guided by your vet). For large-breed
            puppies, controlled calcium/phosphorus supports joint development.
            Most healthy adult Goldens don’t need extra vitamins if they’re eating
            a balanced diet. Omega-3s (EPA/DHA) can help with skin/joints; joint
            nutraceutical evidence is mixed—use under veterinary guidance.
          </p>
          <p className="mb-3">
            <strong>Dental health = systemic health:</strong> Periodontal disease
            adds inflammatory load. Daily brushing is gold standard; add products
            that carry the Veterinary Oral Health Council (VOHC) Seal (foods,
            chews, gels, water additives) to reduce plaque/tartar between cleanings.
          </p>
          <p className="mb-0">
            <strong>Supplements to be cautious with:</strong> megadose vitamins,
            unregulated powders, or anything claiming to “cure” cancer. Discuss
            all supplements with your veterinary team to avoid interactions.
          </p>
        </section>

        {/* Preventive care */}
        <section id="preventive" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">
            Preventive Care & Screening Calendar (By Life Stage)
          </h2>

          <h3 className="text-lg font-semibold mb-2">Puppy (8–16 weeks)</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Core vaccinations on guideline schedule; parasite prevention.</li>
            <li>
              Growth monitoring: keep body condition on target; avoid rapid gains.
            </li>
            <li>
              Baseline breeder paperwork: confirm hips/elbows/eyes/heart test
              results on parents and review pedigree longevity with the breeder.
            </li>
          </ul>

          <h3 className="text-lg font-semibold mb-2">Adolescent (4–18 months)</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>
              Discuss spay/neuter timing with your vet; weigh joint/cancer data
              against lifestyle risks (roaming, heat cycles).
            </li>
            <li>Begin tooth brushing; establish VOHC adjuncts early.</li>
            <li>
              Conditioning: build aerobic base and strength gradually; avoid
              repetitive high-impact jumping until growth plates close.
            </li>
          </ul>

          <h3 className="text-lg font-semibold mb-2">Adult (2–7 years)</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>
              Annual wellness exam; vaccine boosters per current guidelines.
            </li>
            <li>
              Heartworm/flea-tick prevention; fecal testing per local risk.
            </li>
            <li>
              Dental: daily brushing + VOHC products; pro cleanings as advised.
            </li>
            <li>
              Eye exams periodically; for Goldens, annual ophthalmology checks are
              encouraged to screen for breed-specific disease (e.g., GRPU).
            </li>
          </ul>

          <h3 className="text-lg font-semibold mb-2">Senior (8+ years)</h3>
          <ul className="list-disc pl-5 space-y-1 mb-0">
            <li>
              Twice-yearly exams; baseline labs (CBC, chemistry, urinalysis) and
              trend lines for <em>your</em> dog.
            </li>
            <li>
              Imaging (x-rays/ultrasound) as indicated for murmurs, cough, lumps,
              or vague decline; pain scoring and mobility plan each visit.
            </li>
            <li>
              Cognition screen (for disorientation, sleep/wake changes,
              house-soiling); early treatment improves comfort.
            </li>
          </ul>
        </section>

        {/* Lifestyle */}
        <section id="lifestyle" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">
            Exercise, Safety & Lifestyle (Risk Management for a Working Dog)
          </h2>
          <p className="mb-3">
            Goldens thrive with daily, varied activity: sniff-walks, retrieving,
            hiking, and swimming (dry ears after). Keep reps low-impact and build
            duration gradually. Warm-ups and cool-downs reduce injury risk. Avoid
            “weekend warrior” extremes.
          </p>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>
              <strong>Heat & water safety:</strong> schedule shade/sniff walks on
              hot days; prevent pond-water ingestion; dry ears after swimming.
            </li>
            <li>
              <strong>Foreign-body prevention:</strong> manage a curious mouth—
              train “leave it” and “drop,” keep socks/cobs/rocks out of reach.
            </li>
            <li>
              <strong>GI bloat (GDV) awareness:</strong> While Goldens are not the
              highest-risk breed cluster, large/deep-chested dogs can bloat.
              Know signs (unproductive retching, distended abdomen, restlessness)
              and seek immediate care; prophylactic gastropexy may be discussed
              for at-risk individuals or during other abdominal procedures.
            </li>
          </ul>
          <p className="mb-0">
            <strong>Behavior & enrichment:</strong> mental work (scent games,
            foraging, problem feeders) can “tire” a Golden as much as physical
            exertion—with less wear-and-tear.
          </p>
        </section>

        {/* Senior */}
        <section id="senior" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Senior Goldens: Aging Well</h2>
          <p className="mb-3">
            From about age 8, plan for mobility support (non-slip floors, ramps,
            harnesses), vision/hearing changes, and possible cognitive decline.
            Signs of canine cognitive dysfunction include disorientation, altered
            sleep, house-soiling, and reduced social interaction. Early veterinary
            intervention (dietary, environmental, medications where appropriate)
            can slow decline and improve quality of life.
          </p>
          <p className="mb-0">
            Pain control is a longevity tool. Treat osteoarthritis proactively:
            weight control, appropriate exercise, home modifications, and vet-led
            multimodal pain management keep seniors moving—and moving dogs live
            better.
          </p>
        </section>

        {/* Breeding */}
        <section id="breeding" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">
            Breeding & Health Clearances (If You’re Choosing a Puppy)
          </h2>
          <p className="mb-3">
            Ask for, and verify, the four core clearances for both parents:
            <strong> hips</strong> (OFA/PennHIP), <strong>elbows</strong> (OFA),
            <strong> eyes</strong> (annual CAER by a veterinary ophthalmologist),
            and <strong>cardiac</strong>—ideally an <em>advanced</em> cardiac exam
            with echocardiogram by a board-certified cardiologist (important for
            SAS risk). Results should be publicly recorded (OFA database). For
            Goldens, ongoing eye exams are recommended throughout life because
            some conditions, like Golden Retriever Pigmentary Uveitis (GRPU), can
            present later.
          </p>
          <p className="mb-0">
            Also ask about longevity and cause of death in close relatives (parents,
            grandparents, littermates). No line is “cancer-free,” but transparency
            and thoughtful pairings matter.
          </p>
        </section>

        {/* Myths */}
        <section id="myths" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Myths & Marketing Claims</h2>
          <ul className="list-disc pl-5 space-y-2 mb-0">
            <li>
              <strong>“English Creams live longer.”</strong> Coat shade/type doesn’t
              guarantee health or lifespan. “English Cream” is a marketing term,
              not a separate breed. Health testing and pedigree transparency
              matter far more.
            </li>
            <li>
              <strong>“This supplement prevents cancer.”</strong> No supplement can
              guarantee that. Lean weight, timely vet care, and owner vigilance
              are the big rocks.
            </li>
          </ul>
        </section>

        {/* Playbook */}
        <section id="playbook" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">
            The Golden Longevity Playbook (Copy/Paste Checklists)
          </h2>

          <h3 className="text-lg font-semibold mb-1">Monthly Owner SOP</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Weigh dog; record body condition (target 4/9–5/9).</li>
            <li>
              Nose-to-tail check: gums (color), belly size/shape, new lumps/bumps,
              lameness, appetite/energy changes.
            </li>
            <li>
              Tooth brushing log (≥5×/week) + VOHC adjunct (chew/gel/water
              additive).
            </li>
            <li>Flea/tick/heartworm prevention given? (Yes/No)</li>
          </ul>

          <h3 className="text-lg font-semibold mb-1">Annual Veterinary SOP</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Comprehensive exam; vaccine updates per guidelines.</li>
            <li>Fecal testing & parasite review; lifestyle risk update.</li>
            <li>Dental charting & cleaning plan; brushing technique check.</li>
            <li>Ophthalmology screening (strongly consider annually for Goldens).</li>
          </ul>

          <h3 className="text-lg font-semibold mb-1">Senior Add-Ons (8+ yrs)</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Twice-yearly exams; CBC/chem/UA at least annually.</li>
            <li>Pain/mobility scoring; home layout review (ramps, rugs).</li>
            <li>
              Discuss cancer red flags; establish an “urgent symptoms” plan with
              your clinic.
            </li>
          </ul>

          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Petunia tip:</strong> Put these into a shared note with dates,
            weights, and photos of lumps/gaite. Trends tell stories.
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">Frequently Asked Questions</h2>

          <p className="mb-3">
            <strong>What is a realistic age goal for a healthy Golden?</strong>
            <br />
            Planning for 12–13 is reasonable with lean weight, routine care, and a
            bit of luck. Many comfortably reach 13–14; some surpass that.
          </p>

          <p className="mb-3">
            <strong>Do males or females live longer?</strong>
            <br />
            Differences are small and easily overshadowed by body condition and
            disease risk. Spay/neuter status and timing influence patterns of
            risk—talk with your vet about tradeoffs for <em>your</em> dog.
          </p>

          <p className="mb-3">
            <strong>Will swimming ruin my Golden’s ears?</strong>
            <br />
            Not if you manage moisture. Condition cooperative ear checks and dry
            ears after swims. Call your vet for persistent odor, pain, or head
            shaking.
          </p>

          <p className="mb-3">
            <strong>Should I get a “cancer screening” blood test annually?</strong>
            <br />
            These tests are promising but still evolving. Use them only as part of
            a broader diagnostic plan with your vet—never as a replacement for
            exams or investigating symptoms.
          </p>

          <p className="mb-0">
            <strong>Is prophylactic gastropexy (stomach tacking) worth it?</strong>
            <br />
            For the highest-risk, deep-chested breeds it’s often recommended; for
            Goldens, consider it on a case-by-case basis (family history, body
            shape, anesthetic opportunity). Discuss with your surgeon.
          </p>
        </section>

        {/* Sources */}
        <section id="sources" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">📚 Sources (Selected)</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            {/* Life expectancy & breed context */}
            <li>
              American Kennel Club (AKC). <em>Golden Retriever – Breed Information (Life Expectancy).</em>{' '}
              <a
                href="https://www.akc.org/dog-breeds/golden-retriever/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.akc.org/dog-breeds/golden-retriever/
              </a>
            </li>

            {/* Cancer burden & GRLS */}
            <li>
              Morris Animal Foundation. <em>Golden Retriever Lifetime Study (About the Study; Key Findings).</em>{' '}
              <a
                href="https://www.morrisanimalfoundation.org/golden-retriever-lifetime-study"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.morrisanimalfoundation.org/golden-retriever-lifetime-study
              </a>
              {' '}and{' '}
              <a
                href="https://www.morrisanimalfoundation.org/article/taking-stock-what-weve-learned-so-far"
                target="_blank"
                rel="noopener noreferrer"
              >
                Taking Stock of What We’ve Learned So Far
              </a>
              .
            </li>

            {/* Neuter timing & disease patterns */}
            <li>
              Hart BL, et al. <em>Long-Term Health Effects of Neutering Dogs: Breed-Specific Evaluation (incl. Golden Retrievers).</em> PLoS ONE (2020).{' '}
              <a
                href="https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0225321"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://journals.plos.org/.../pone.0225321
              </a>
              ; UC Davis (2013/2014) communications on early neuter and joint/cancer risks in Goldens.
            </li>
            <li>
              Banfield Pet Hospital. <em>State of Pet Health Report (2013): Longevity & Sterilization.</em>{' '}
              <a
                href="https://www.banfield.com/about-banfield/newsroom/press-releases/2013/spaying-and-neutering-may-contribute-to-longer-lif"
                target="_blank"
                rel="noopener noreferrer"
              >
                Press Release (2013)
              </a>
              .
            </li>

            {/* Lean body condition & lifespan */}
            <li>
              Kealy RD, et al. <em>Effects of diet restriction on life span and age-related changes in dogs.</em> JAVMA (2002).{' '}
              <a
                href="https://pubmed.ncbi.nlm.nih.gov/11991408/"
                target="_blank"
                rel="noopener noreferrer"
              >
                PubMed: 11991408
              </a>
              .
            </li>
            <li>
              WSAVA. <em>Global Nutrition Toolkit – Body & Muscle Condition Scoring.</em>{' '}
              <a
                href="https://wsava.org/wp-content/uploads/2025/06/WSAVA-Toolkit-Body-and-Muscle-Condition-Combined-4-13-25-CT-Approved.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                BCS/MCS Charts
              </a>
              .
            </li>

            {/* Preventive care & vaccination guidelines */}
            <li>
              AAHA. <em>Canine Vaccination Guidelines (2022).</em>{' '}
              <a
                href="https://www.aaha.org/globalassets/02-guidelines/canine-vaccination/caninevaccinationguidelines.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                2022 PDF
              </a>
              ; AAHA/AAFP. <em>Canine Life Stage Guidelines (2019).</em>{' '}
              <a
                href="https://www.aaha.org/globalassets/02-guidelines/canine-life-stage/life-stage-guidelines_final.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                2019 PDF
              </a>
              .
            </li>

            {/* Dental health */}
            <li>
              Veterinary Oral Health Council (VOHC). <em>Accepted Products (Seal of Acceptance).</em>{' '}
              <a href="https://vohc.org/" target="_blank" rel="noopener noreferrer">
                https://vohc.org/
              </a>
              .
            </li>

            {/* Breed-specific health */}
            <li>
              Golden Retriever Club of America (GRCA). <em>Health Screenings for the Parents of a Litter; Health & Research Hub.</em>{' '}
              <a
                href="https://grca.org/about-the-breed/health-research/health-screenings-for-the-parents-of-a-litter/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Screening Guidance
              </a>
              {' '}•{' '}
              <a
                href="https://grca.org/about-the-breed/health-research/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Health & Research
              </a>
              .
            </li>
            <li>
              GRCA. <em>Heart Disease: Subvalvular Aortic Stenosis (SAS).</em>{' '}
              <a
                href="https://grca.org/about-the-breed/health-research/heart-disease-subvalvular-aortic-stenosis-sas/"
                target="_blank"
                rel="noopener noreferrer"
              >
                SAS Overview
              </a>
              .
            </li>
            <li>
              GRCA/AKC CHF. <em>Pigmentary Uveitis (owner letters, diagnostic criteria, and updates).</em>{' '}
              <a
                href="https://grca.org/wp-content/uploads/2024/02/GRPU-Alert-for-Breeders-Buyers-Owners-2024.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                2024 GRPU Alert
              </a>
              {' '}•{' '}
              <a
                href="https://www.akcchf.org/breakthrough/vision-loss-in-golden/"
                target="_blank"
                rel="noopener noreferrer"
              >
                CHF Vision Loss article
              </a>
              .
            </li>

            {/* GDV/bloat references */}
            <li>
              ACVS. <em>Gastric Dilatation-Volvulus (GDV) in Dogs (Prophylactic Gastropexy Overview).</em>{' '}
              <a
                href="https://www.acvs.org/small-animal/gastric-dilatation-volvulus/"
                target="_blank"
                rel="noopener noreferrer"
              >
                ACVS Client Guide
              </a>
              .
            </li>
            <li>
              Merck Veterinary Manual. <em>Gastric Dilation and Volvulus in Small Animals.</em>{' '}
              <a
                href="https://www.merckvetmanual.com/digestive-system/diseases-of-the-stomach-and-intestines-in-small-animals/gastric-dilation-and-volvulus-in-small-animals"
                target="_blank"
                rel="noopener noreferrer"
              >
                Merck Vet Manual
              </a>
              .
            </li>

            {/* Cognition */}
            <li>
              Merck Veterinary Manual. <em>Cognitive Dysfunction in Dogs.</em>{' '}
              <a
                href="https://www.merckvetmanual.com/behavior/behavior-problems-in-dogs/cognitive-dysfunction-syndrome-in-dogs"
                target="_blank"
                rel="noopener noreferrer"
              >
                Merck Vet Manual
              </a>
              .
            </li>
          </ul>
          <p className="text-xs text-gray-600 mt-4">
            Educational content only. Always consult your veterinarian or a
            board-certified specialist for individualized advice. Lifespan varies
            widely; the best way to add healthy time is lean body condition, risk-based
            preventive care, and early attention to change.
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
