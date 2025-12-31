'use client';

import Head from 'next/head';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function DoCaneCorsosHaveHealthIssues() {
  const locale = useLocale();

  const title =
    'Do Cane Corsos Have Health Issues? A Life-Stage Guide to Risks, Prevention, Realistic Costs, and Insurance Decisions';
  const date = 'August 10, 2025';
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
    'An evidence-informed, practical guide to Cane Corso health from puppyhood through senior years: growth and joints, skin and allergies, eyes, heart, gastrointestinal and bloat risk, neurology, dental, parasites, weight and nutrition, exercise, realistic U.S. cost ranges, and when dog health insurance makes sense. Includes screening timelines, home checklists, and a first-90-days plan for new owners.';

  return (
    <>
      <Head>
        <title>{title} – Petunia Blog</title>
        <meta name="description" content={description} />
        {/* Per user preference, avoid the word "index" here. */}
        <meta name="robots" content="all" />
        <link
          rel="canonical"
          href={`https://www.petuniapets.com/${locale}/blog/do-cane-corsos-have-health-issues`}
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
            <li><a href="#big-picture" className="underline hover:opacity-80">Big Picture</a></li>
            <li><a href="#puppy" className="underline hover:opacity-80">Puppy to 18 Months</a></li>
            <li><a href="#young-adult" className="underline hover:opacity-80">Young Adult</a></li>
            <li><a href="#mature" className="underline hover:opacity-80">Mature Adult</a></li>
            <li><a href="#senior" className="underline hover:opacity-80">Senior Years</a></li>
            <li><a href="#orthopedic" className="underline hover:opacity-80">Orthopedic &amp; Growth</a></li>
            <li><a href="#skin" className="underline hover:opacity-80">Skin &amp; Allergies</a></li>
            <li><a href="#eyes" className="underline hover:opacity-80">Eyes</a></li>
            <li><a href="#heart" className="underline hover:opacity-80">Cardiac</a></li>
            <li><a href="#gi" className="underline hover:opacity-80">Gastrointestinal &amp; Bloat</a></li>
            <li><a href="#neuro" className="underline hover:opacity-80">Neurology</a></li>
            <li><a href="#endocrine" className="underline hover:opacity-80">Endocrine &amp; Metabolic</a></li>
            <li><a href="#dental" className="underline hover:opacity-80">Dental</a></li>
            <li><a href="#parasites" className="underline hover:opacity-80">Parasites &amp; Infectious Disease</a></li>
            <li><a href="#nutrition" className="underline hover:opacity-80">Weight &amp; Nutrition</a></li>
            <li><a href="#exercise" className="underline hover:opacity-80">Exercise &amp; Joint Care</a></li>
            <li><a href="#screening" className="underline hover:opacity-80">Screening Timeline</a></li>
            <li><a href="#insurance" className="underline hover:opacity-80">Insurance &amp; Realistic Costs</a></li>
            <li><a href="#first90" className="underline hover:opacity-80">First 90 Days Plan</a></li>
            <li><a href="#checklists" className="underline hover:opacity-80">Checklists</a></li>
            <li><a href="#faq" className="underline hover:opacity-80">FAQ</a></li>
            <li><a href="#sources" className="underline hover:opacity-80">Sources (Selected)</a></li>
          </ul>
        </nav>

        {/* TL;DR */}
        <section id="tldr" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Short Answer (TL;DR)</h2>
          <p className="mb-4">
            Cane Corsos are robust, athletic guardian dogs, but like all large breeds they carry <strong>predictable risk zones</strong>: orthopedic
            conditions related to growth and size, skin and ear issues in some individuals, occasional eye and cardiac concerns, potential
            gastrointestinal sensitivity, and a deep-chested build that warrants awareness for bloat. Many of these risks scale with overall body
            mass and structure, which is why understanding the breed’s physical profile (covered in{' '}
            <Link
              href={`/${locale}/blog/how-big-are-cane-corsos`}
              className="underline hover:opacity-80"
            >
              How Big Are Cane Corsos
            </Link>
            ) matters for realistic health planning. Most problems are manageable with <strong>lean body condition</strong>, <strong>measured nutrition</strong>,
            <strong>structured exercise</strong>, and <strong>routine veterinary care</strong>. Insurance can make sense for a large breed with potential for high-cost
            events, while well-funded savings plus prevention also works if you consistently set money aside.
          </p>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Petunia tip:</strong> Track weight, body photos, ear and skin notes, and training minutes in Petunia. Consistent records help your veterinarian
            see patterns early and keep your Corso moving comfortably for years.
          </div>
        </section>

        {/* Big picture */}
        <section id="big-picture" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">The Big Picture: What Health Means for a Guardian Breed</h2>
          <p className="mb-3">
            When people ask whether Cane Corsos have health issues, they often expect a simple yes or no. A better framing is: <em>what
              health topics are most relevant for a large guardian breed, and how do we stack the odds in our favor</em>? Genetics set a baseline,
            but daily habits move the needle. The most powerful levers you control are body weight, nutrition quality, strength and mobility
            work, dental care, parasite prevention, and a screening schedule that catches trouble early when it is cheaper and easier to
            address.
          </p>
          <p className="mb-3">
            Corsos tend to mature slowly, with confidence and hormones changing through a long adolescence. Decisions about diet, exercise,
            and neuter timing during this window affect joints, behavior, and long-term orthopedic comfort. Later, steady routines keep skin,
            ears, and teeth healthy. In senior years, twice-yearly checkups and simple home modifications preserve comfort and cognition.
          </p>
          <p>
            This guide moves stage by stage through puppyhood, young adulthood, mature adulthood, and senior care, then dives into the most
            relevant system-by-system topics: orthopedic, skin and ears, eyes, heart, gastrointestinal, neurology, endocrine, dental, and
            infectious disease. You will also find an owner screening timeline, realistic cost ranges, and an insurance decision framework.
          </p>
        </section>

        {/* Puppy */}
        <section id="puppy" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Puppy to 18 Months: Growth, Gut, Ears, and Foundations</h2>
          <p className="mb-3">
            The first year isn&#39;t just cute photos. It is orthopedics, socialization, and gut health. Corsos grow quickly and put mass on
            powerful frames. Rapid growth and excess calories make joint stress more likely, so the goal is <strong>steady growth at a lean body
              condition</strong>. Choose a complete food formulated for large-breed puppies or an all-life-stage food with appropriate calcium and
            energy density. Measure meals to calories rather than scoops, and re-check amounts every two weeks based on weight trend and
            body condition.
          </p>
          <p className="mb-3">
            Puppies may experience soft stool as they adjust to new environments or foods. Rule out parasites, then stabilize with measured
            meals, a consistent brand, and slow transitions. Keep high-value chews appropriate to age and supervise to prevent fragments
            from being swallowed. Begin gentle foot handling, mouth handling, and cooperative care so vet and grooming visits are low
            stress later. Ear care matters too: learn to look, sniff, and clean as advised. Warm, moist ears plus environmental allergens can
            drive recurrent infections if not managed early.
          </p>
          <p>
            Finally, make socialization mean <strong>calm exposure without obligation</strong>. Sit at a distance from playgrounds, watch delivery drivers,
            and feed for quiet observation. The puppy learns that the world is background. That single habit pays huge health and safety
            dividends for a guardian breed through lower arousal, lower conflict, and fewer stress-triggered ailments.
          </p>
        </section>

        {/* Young Adult */}
        <section id="young-adult" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Young Adult (18 Months to ~5 Years): Strength, Skin, and Stability</h2>
          <p className="mb-3">
            Structure your Corso&#39;s week around fitness and recovery. Daily walks, short skill blocks, and scent games protect joints while
            building responsiveness. Skin and ear health often stabilize when weight is ideal and allergens are managed. If itchy skin, head
            shaking, or recurrent hot spots continue, work with your veterinarian on diet review, topical routines, and allergy control
            strategies. This is also the window to establish superb leash manners and visitor routines to reduce adrenaline spikes that can
            complicate medical care or daily life.
          </p>
          <p>
            Consider baseline labs and any breed-relevant imaging based on your veterinarian&#39;s advice. If you plan to breed, this is when
            orthopedic and cardiac screening protocols matter for the next generation. For companion homes, screening guides exercise plans
            and helps you pick surfaces and activities that keep your dog comfortable for the long haul.
          </p>
        </section>

        {/* Mature Adult */}
        <section id="mature" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Mature Adult (~5 to 8 Years): Weight Vigilance and Early Trends</h2>
          <p className="mb-3">
            Midlife is where quiet discipline shines. Keep a close eye on weight. Five extra pounds on a large frame create meaningful joint
            load. Schedule dental cleanings when indicated. Address intermittent lameness early with rest, anti-inflammatory plans when
            appropriate, and tailored rehab. Monitor for new cough, exercise intolerance, or fainting, which warrant timely cardiac workup.
            Gastrointestinal sensitivity can emerge during this phase as well; record diet and stool notes in Petunia to see patterns across
            weeks rather than days.
          </p>
          <p>
            Talk with your veterinarian about senior planning before senior years arrive. A few simple adjustments now, like traction
            runners and car ramps, make later life much easier on joints and confidence.
          </p>
        </section>

        {/* Senior */}
        <section id="senior" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Senior Years (8+): Twice-Yearly Rhythm and Comfort First</h2>
          <p className="mb-3">
            Large-breed seniors benefit from a semiannual cadence: weight and body condition checks, muscle condition scoring, pain
            assessment, and labs every six months. Add short, frequent walks rather than long outings, keep nails short, and optimize bed
            comfort. Cognitive changes may appear as pacing at night, new anxiety, or house soiling. Early veterinary input can help with
            diet options, supplements, enrichment strategies, and medication if appropriate. Prioritize quality of life: mobility, appetite,
            interest in family, and good days versus hard days.
          </p>
          <p>
            Plan for emergency scenarios ahead of time. Save your nearest 24-hour hospital route in your phone. Print it for the fridge and
            glove box. Preparation turns panic into a plan when minutes matter.
          </p>
        </section>

        {/* Orthopedic */}
        <section id="orthopedic" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Orthopedic &amp; Growth: Hips, Elbows, Knees, and the Power of Lean Weight</h2>
          <p className="mb-3">
            Orthopedic topics dominate large-breed health conversations for good reason. Joints carry mass through years of daily movement.
            Corsos can be at risk for hip and elbow dysplasia, cruciate ligament tears, growth plate injuries in overly athletic puppies, and
            age-related arthritis. The single biggest lever you control is <strong>body condition</strong>. Keeping a 9-point body condition score of 4 or 5
            dramatically reduces joint load and improves long-term comfort.
          </p>
          <h3 className="text-lg font-semibold mt-2 mb-1">Action steps</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Choose measured meals with appropriate calcium and calorie density for growth.</li>
            <li>Favor controlled strength and balance work over repetitive impact drills.</li>
            <li>Warm up and cool down. Avoid explosive fetch on slick surfaces.</li>
            <li>Address limping promptly. Early rest and targeted rehab prevent chronic patterns.</li>
            <li>Discuss screening with your veterinarian if performance goals or chronic stiffness are present.</li>
          </ul>
          <p>
            If surgical care is needed, outcomes are often excellent with modern techniques. The choice between conservative management,
            arthroscopy, or procedures like TPLO depends on your veterinarian&#39;s exam, imaging, and your dog&#39;s lifestyle.
          </p>
        </section>

        {/* Skin */}
        <section id="skin" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Skin &amp; Allergies: Ears, Paws, and Seasonal Patterns</h2>
          <p className="mb-3">
            Some Corsos show itchy skin, recurrent ear infections, or paw chewing, especially in humid regions or during high pollen seasons.
            Skin is an organ that responds to multiple factors: weight, allergens, parasites, humidity, and grooming habits. The good news is
            that small routines go far: rinse and dry after swimming, keep nails short, clean ears when your veterinarian recommends, and
            manage weight to reduce inflammation across the body.
          </p>
          <p>
            If problems persist, your veterinarian may discuss diet trials, topical therapies, anti-itch medications, and allergy plans. Keep
            notes about flare seasons, foods, and successful products. A clear log saves time and money at appointments.
          </p>
        </section>

        {/* Eyes */}
        <section id="eyes" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Eyes: Lids, Lashes, and Clarity</h2>
          <p className="mb-3">
            Large guardian breeds can experience eyelid shape issues such as entropion or ectropion in some lines. Irritated eyes, squinting,
            or discharge deserve prompt evaluation. Many eye concerns are straightforward to diagnose and address. Early treatment prevents
            chronic irritation and protects the cornea.
          </p>
          <p>
            Keep an eye on skin folds near the muzzle and eyes. Clean and dry after messy play or swimming. Report chronic staining or odor
            near the eyes to your veterinarian for tailored advice.
          </p>
        </section>

        {/* Cardiac */}
        <section id="heart" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Cardiac: Exercise Intolerance, Cough, and Screening</h2>
          <p className="mb-3">
            While many Corsos enjoy healthy hearts, any large breed warrants awareness for cardiac topics. New cough, fainting episodes,
            decreased stamina, or breathing changes merit timely evaluation. Your veterinarian may recommend auscultation first and add
            imaging or referral if indicated. Cardiac screening is also part of responsible breeding protocols. For pet owners, the goal is
            early detection and realistic activity planning if limitations exist.
          </p>
          <p>
            Support heart health with a lean body condition, sensible exercise, and parasite prevention in regions with heartworm risk. Keep
            a consistent monthly routine rather than sporadic dosing.
          </p>
        </section>

        {/* GI */}
        <section id="gi" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Gastrointestinal &amp; Bloat: From Sensitive Stomachs to True Emergencies</h2>
          <p className="mb-3">
            Many large dogs have sturdy appetites and do well on consistent, measured diets. Some individuals show food sensitivity or soft
            stool under stress. Slow transitions between foods, simple treat choices, and measured portions solve most routine upsets.
          </p>
          <p className="mb-3">
            Deep-chested breeds carry some risk for gastric dilatation-volvulus (bloat). Know the signs: unproductive retching, distended
            abdomen, restlessness, drooling, and rapid decline. This is an emergency. Talk with your veterinarian about whether a prophylactic
            gastropexy is appropriate for your dog based on risk factors and planned surgeries. Measured meals, calm rest after eating, and
            avoiding intense exercise right after large meals are everyday habits that help.
          </p>
          <p>
            If chronic vomiting, weight loss, or persistent diarrhea occur, schedule a workup. Early diagnostics often prevent long cycles of
            trial and error.
          </p>
        </section>

        {/* Neurology */}
        <section id="neuro" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Neurology: Seizures, Wobble, and Pain That Looks Like Behavior</h2>
          <p className="mb-3">
            Neurologic issues are less common than orthopedic topics but deserve fast attention. Seizures, pronounced wobble, or sudden
            behavior change accompanied by pain signs require veterinary care. Keep videos of episodes when safe to do so. Many conditions
            are manageable with medication and lifestyle adjustments. Addressing pain promptly reduces stress-driven behaviors that can be
            mistaken for training problems.
          </p>
          <p>
            Always consider medical evaluation for abrupt aggression, reluctance to be touched, or changes in sleep and appetite. Pain and
            illness can present as behavior.
          </p>
        </section>

        {/* Endocrine */}
        <section id="endocrine" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Endocrine &amp; Metabolic: Thyroid, Weight, and Longevity Habits</h2>
          <p className="mb-3">
            Endocrine concerns such as hypothyroidism can appear in midlife in some dogs. Signs include weight gain despite normal food,
            lethargy, skin changes, or heat-seeking behavior. Your veterinarian can run lab tests and guide treatment. Regardless of diagnosis,
            the everyday controls remain the same: consistent meal measurement, regular weight checks, and realistic activity. Lean dogs live
            longer across breeds. The habit pays back in comfort and vet bills.
          </p>
        </section>

        {/* Dental */}
        <section id="dental" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Dental: Small Routine, Big Return</h2>
          <p className="mb-3">
            Dental disease is the most common medical problem in adult dogs. Regular tooth brushing, VOHC-accepted chews, and professional
            cleanings when indicated improve comfort, protect organs, and reduce anesthesia time by preventing severe disease. Start brushing
            early with a gentle pace and reward for cooperation.
          </p>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Petunia tip:</strong> Add two short dental blocks to your weekly Petunia routine and assign them to different family members. Repetition builds
            habits that last.
          </div>
        </section>

        {/* Parasites */}
        <section id="parasites" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Parasites &amp; Infectious Disease: Low Drama, High Impact</h2>
          <p className="mb-3">
            Heartworm prevention, flea and tick control, and core vaccines remain foundational for canine health. Choose products with your
            veterinarian based on local risk. Keep a simple refill calendar and stick to it. Preventing disease is always cheaper and kinder
            than treatment.
          </p>
        </section>

        {/* Nutrition */}
        <section id="nutrition" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Weight &amp; Nutrition: The Single Biggest Health Lever</h2>
          <p className="mb-3">
            If you optimize only one thing, optimize body condition. Lean-fed dogs live longer and move more comfortably. For a Corso, ten to
            twenty percent excess weight can turn a happy stride into a sore evening. Feed complete, measured meals that meet AAFCO or FEDIAF
            profiles for life stage. Add water to kibble for hydration and satiety. Cap treats at ten percent of daily calories and use part of
            the measured ration as training rewards.
          </p>
          <h3 className="text-lg font-semibold mt-2 mb-1">Two-week weight tune-up</h3>
          <ol className="list-decimal pl-5 space-y-2 mb-3">
            <li>Weigh on the same scale. Take side, top, and rear photos.</li>
            <li>Reduce daily calories by ten percent. Switch to a veterinary weight diet if hunger sabotages progress.</li>
            <li>Add one extra sniff walk per day and a short strength circuit three days per week.</li>
            <li>Re-weigh at day fourteen. Adjust again by five to ten percent if needed, with veterinary guidance.</li>
          </ol>
        </section>

        {/* Exercise */}
        <section id="exercise" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Exercise &amp; Joint Care: Fit, Strong, and Symmetric</h2>
          <p className="mb-3">
            Aim for two to three calm walks daily, one short skill block, and light strength work two to three days per week. Build symmetry:
            equal turns, figure eights, and cavaletti poles at low height. Avoid repetitive leaping and slick surfaces. Warm up for three to
            five minutes and cool down the same. The plan is not to exhaust your dog; it is to program reliable physical literacy.
          </p>
          <p>
            If lameness or reluctance to jump appears, pause the athletic work and call your veterinarian. Rehab exercises and short rest now
            often prevent long lay-offs later.
          </p>
        </section>

        {/* Screening */}
        <section id="screening" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Owner Screening Timeline: What to Do and When</h2>

          <h3 className="text-lg font-semibold mt-2 mb-1">Puppy to 18 Months</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Core vaccines per regional guidance; stool checks and parasite prevention.</li>
            <li>Growth coaching for large breed needs; monthly weight photos and body condition scoring.</li>
            <li>Orthopedic awareness: avoid excessive impact; teach cooperative care and calm exposure.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">18 Months to ~5 Years</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Annual exam with weight trend, dental assessment, and parasite control review.</li>
            <li>Baseline labs once; repeat if medications start or symptoms arise.</li>
            <li>Discuss orthopedic and cardiac screening based on activity level and history.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">~5 to 8 Years</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Annual or semiannual exams depending on orthopedic history and activity.</li>
            <li>Yearly labs including CBC, chemistry, and urinalysis for trend detection.</li>
            <li>Imaging if new cough, weight loss, abdominal distension, or persistent lameness occurs.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">8+ Years</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Semiannual visits with mobility scoring and pain discussions.</li>
            <li>Labs every six months; add thyroid and cardiac screening if indicated.</li>
            <li>Home modifications for traction, ramps, and predictable routines.</li>
          </ul>
        </section>

        {/* Insurance and Costs */}
        <section id="insurance" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Insurance &amp; Realistic Costs: What Large-Breed Owners Should Expect</h2>
          <p className="mb-3">
            Health insurance for dogs functions like a safety net for unpredictable, high-cost events. For a large breed that may face
            orthopedic surgery, emergency care, or complex diagnostics, insurance can protect savings and reduce decision stress. These medical
            realities are a major contributor to the overall lifetime cost of ownership discussed in{' '}
            <Link
              href={`/${locale}/blog/how-much-does-a-cane-corso-cost-to-own`}
              className="underline hover:opacity-80"
            >
              How Much Does a Cane Corso Cost to Own
            </Link>
            . That said, disciplined owners who consistently save can self-insure, especially if they keep risk low with prevention and lean weight.
          </p>

          <h3 className="text-lg font-semibold mt-2 mb-1">Typical U.S. cost ranges (ballpark)</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>TPLO or similar cruciate surgery: roughly USD 3,000 to 6,000 per knee depending on region and hospital.</li>
            <li>Total hip replacement: often USD 5,000 to 7,500 per hip; bilateral can exceed this.</li>
            <li>Emergency bloat surgery with hospitalization: roughly USD 3,000 to 7,000.</li>
            <li>MRI with neurology consult: typically USD 2,000 to 4,000.</li>
            <li>Allergy workup and ongoing control: hundreds for initial testing, then monthly costs for meds, topicals, or immunotherapy.</li>
            <li>Comprehensive dental cleaning with radiographs: commonly USD 500 to 1,200+ depending on disease severity.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Insurance premiums and structure</h3>
          <p className="mb-3">
            Premiums for large breeds vary by age, region, and plan design. Many owners pay something in the range of USD 40 to 120 per month.
            Plans often include an annual deductible and a reimbursement percentage. Pre-existing conditions are typically excluded. If you
            prefer predictable budgeting over financial volatility, insurance is appealing. If you maintain a robust emergency fund and enjoy
            self-insuring, a savings approach works well with disciplined deposits.
          </p>

          <h3 className="text-lg font-semibold mt-2 mb-1">How to decide</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>If you would struggle to fund a USD 5,000 surgery on short notice, insurance is worth serious consideration.</li>
            <li>If cash flow can comfortably cover large events, you may prefer a savings plan plus prevention.</li>
            <li>Either way, controlling weight and building daily routines saves more money than any single product choice.</li>
          </ul>

          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm mt-3">
            <strong>Petunia tip:</strong> Use Petunia to set a monthly auto-reminder to move funds into a dedicated pet account or to verify insurance coverage
            remains active after life events like moves or bank changes.
          </div>
        </section>

        {/* First 90 Days */}
        <section id="first90" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Your First 90 Days With a Corso: Health Habits That Stick</h2>

          <h3 className="text-lg font-semibold mt-2 mb-1">Days 1–7: Set the foundation</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Pick a complete food and measure meals to calories. Photograph portions.</li>
            <li>Begin calm exposure outings. Reward observation, not greetings.</li>
            <li>Start cooperative care: paws, mouth, ears, and collar handling.</li>
            <li>Create rest zones with gates. Protect sleep to reduce reactivity.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Weeks 2–6: Build the routine</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Daily walks plus one short skill block. Add two strength minutes on three days per week.</li>
            <li>Teach door protocol and a reliable &quot;place&quot; cue for visitors.</li>
            <li>Keep a symptom log in Petunia: stool notes, ear checks, and skin snapshots.</li>
            <li>Schedule your first vet visit if not already done. Bring your log and questions.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Weeks 7–12: Proof and prepare</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Practice calm cafe or park sits at a distance from traffic and kids at play.</li>
            <li>Review dental routine. Choose a toothbrush and veterinary toothpaste you will actually use.</li>
            <li>Confirm parasite prevention schedule and set calendar reminders.</li>
            <li>Store your 24-hour hospital address and route for quick access.</li>
          </ul>
        </section>

        {/* Checklists */}
        <section id="checklists" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Checklists &amp; Templates</h2>

          <h3 className="text-lg font-semibold mt-2 mb-1">Weekly Health Rhythm</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Weigh or measure waist with a soft tape; log in Petunia with photos.</li>
            <li>Two dental sessions of at least two minutes each.</li>
            <li>Three short strength circuits with perfect form.</li>
            <li>Ear check and quick skin scan after bath or swim.</li>
            <li>Parasite preventive check; note missed doses and set catch-up plan with your veterinarian.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Vet Screening Timeline (Owner Card)</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Puppy: vaccine series, parasite control, growth and nutrition coaching.</li>
            <li>Young adult: annual exam, stool test, dental assessment, baseline labs once.</li>
            <li>Mature: annual or semiannual exam with labs and mobility screens.</li>
            <li>Senior: semiannual exam with labs; consider imaging and cognitive health review.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">GDV Emergency Cues (Print This)</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Sudden distended abdomen, unproductive retching, restlessness, drooling.</li>
            <li>Collapse or pale gums: go to emergency hospital immediately.</li>
            <li>Keep printed route and backup route in the glove box.</li>
          </ul>

          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm mt-3">
            <strong>Petunia tip:</strong> Pin these checklists in your Petunia profile and tag your veterinarian and trainer. Shared routines keep everyone aligned.
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">Frequently Asked Questions</h2>

          <p className="mb-3">
            <strong>Do Cane Corsos have more health issues than other large breeds?</strong><br />
            Not necessarily. Patterns across large breeds are similar: joints, weight, skin, and occasional system-specific concerns. The
            difference is how consistently owners control weight, build routines, and seek early care. Prevention narrows the gap between
            predisposition and outcome.
          </p>

          <p className="mb-3">
            <strong>What single habit adds the most healthy months?</strong><br />
            Maintaining a lean body condition. Lean dogs live longer and stay more mobile. Portion control plus a simple exercise template
            outperforms complicated hacks.
          </p>

          <p className="mb-3">
            <strong>Is early spay or neuter risky for large joints?</strong><br />
            Timing is a nuanced decision. Some data link early sterilization with higher joint disorder rates in large breeds. Work with your
            veterinarian on an individualized plan that balances orthopedic, behavioral, and household factors.
          </p>

          <p className="mb-3">
            <strong>Should I buy dog health insurance?</strong><br />
            If paying USD 3,000 to 7,000 on short notice would derail your finances, insurance is worth serious consideration. If you keep a
            strong emergency fund and prefer to self-insure, savings plus prevention works well. Choose the path that reduces stress and keeps
            care accessible.
          </p>

          <p className="mb-3">
            <strong>Are Corsos good candidates for high-arousal daycares?</strong><br />
            Many do better with calmer programs, small groups, or structured sniff walks. Lower arousal protects joints and skin and keeps
            behavior steady. Match the program to the dog, not the other way around.
          </p>

          <p className="text-xs text-gray-600">
            Educational content only. Always consult your veterinarian for individualized medical guidance and screening plans.
          </p>
        </section>

        {/* Sources */}
        <section id="sources" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">📚 Sources (Selected)</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            <li>
              American Kennel Club (AKC). Cane Corso breed overview and care basics.
              <a href="https://www.akc.org/dog-breeds/cane-corso/" target="_blank" rel="noopener noreferrer"> AKC profile</a>
            </li>
            <li>
              Fédération Cynologique Internationale (FCI). Cane Corso Italiano standard (FCI No. 343).
              <a href="https://www.fci.be/en/nomenclature/CANE-CORSO-ITALIANO-343.html" target="_blank" rel="noopener noreferrer"> FCI standard</a>
            </li>
            <li>
              American Animal Hospital Association (AAHA). Canine life stage guidelines.
              <a href="https://www.aaha.org/education/guidelines/canine-life-stage-guidelines/" target="_blank" rel="noopener noreferrer"> Guideline hub</a>
            </li>
            <li>
              WSAVA. Global dental guidelines for dogs.
              <a href="https://wsava.org/global-guidelines/dental-guidelines/" target="_blank" rel="noopener noreferrer"> WSAVA dental</a>
            </li>
            <li>
              American College of Veterinary Surgeons (ACVS). Gastric dilatation-volvulus overview and prophylactic gastropexy.
              <a href="https://www.acvs.org/small-animal/gastric-dilatation-volvulus" target="_blank" rel="noopener noreferrer"> ACVS resource</a>
            </li>
            <li>
              American Heartworm Society (AHS). Canine heartworm prevention and guidelines.
              <a href="https://www.heartwormsociety.org/veterinary-resources/american-heartworm-society-guidelines" target="_blank" rel="noopener noreferrer"> AHS guidelines</a>
            </li>
            <li>
              International Association of Animal Behavior Consultants (IAABC). Best practices for family dog safety and management.
              <a href="https://iaabc.org/" target="_blank" rel="noopener noreferrer"> IAABC</a>
            </li>
            <li>
              Orthopedic Foundation for Animals (OFA). Canine orthopedic and cardiac testing resources.
              <a href="https://ofa.org/" target="_blank" rel="noopener noreferrer"> OFA</a>
            </li>
          </ul>
          <p className="text-xs text-gray-600 mt-4">
            Sources are provided for general education. Regional medical practices and costs vary. Consult your veterinary team for local guidance.
          </p>
        </section>

        {/* Related Cane Corso Articles */}
        <div className="mt-16 border-t border-[#d9cfc2] pt-8">
          <h2 className="text-xl font-semibold mb-4 text-[#2c4a30]">
            More Cane Corso Guides You May Like
          </h2>

          <ul className="list-disc pl-6 space-y-2 text-[#2c4a30]">
            <li>
              <Link
                href="https://www.petuniapets.com/en/blog/what-is-the-bite-force-of-a-cane-corso"
                className="underline hover:opacity-80"
              >
                What Is the Bite Force of a Cane Corso?
              </Link>
            </li>
            <li>
              <Link
                href="https://www.petuniapets.com/en/blog/are-cane-corsos-good-family-dogs"
                className="underline hover:opacity-80"
              >
                Are Cane Corsos Good Family Dogs?
              </Link>
            </li>
            <li>
              <Link
                href="https://www.petuniapets.com/en/blog/are-cane-corsos-an-active-breed"
                className="underline hover:opacity-80"
              >
                Are Cane Corsos an Active Breed?
              </Link>
            </li>
            <li>
              <Link
                href="https://www.petuniapets.com/en/blog/how-big-are-cane-corsos"
                className="underline hover:opacity-80"
              >
                How Big Are Cane Corsos?
              </Link>
            </li>
            <li>
              <Link
                href="https://www.petuniapets.com/en/blog/how-much-does-a-cane-corso-cost-to-own"
                className="underline hover:opacity-80"
              >
                How Much Does a Cane Corso Cost to Own?
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
